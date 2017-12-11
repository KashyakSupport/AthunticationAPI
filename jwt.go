package jwt

import (
	"fmt"
	"net/http"

	"google.golang.org/appengine"
	"google.golang.org/appengine/datastore"

	"crypto/rsa"
	"encoding/json"
	"io/ioutil"
	"log"
	"time"

	"github.com/codegangsta/negroni"
	"github.com/dgrijalva/jwt-go"
	"github.com/dgrijalva/jwt-go/request"
)

const (
	privKeyPath = "keys/app.rsa"
	pubKeyPath  = "keys/app.rsa.pub"
)

var (
	verifyKey *rsa.PublicKey
	signKey   *rsa.PrivateKey
)
var verifyBytes, signBytes []byte

//NAMESPACENAME is using for multitenant
const NAMESPACENAME = "-kashyak-"

func initKeys() {
	var err error

	signBytes, err = ioutil.ReadFile(privKeyPath)
	if err != nil {
		log.Fatalf("Error reading private key: %v", err)
	}
	signKey, err = jwt.ParseRSAPrivateKeyFromPEM(signBytes)
	if err != nil {
		log.Fatalf("Error parsing private key: %v", err)
	}
	verifyBytes, err = ioutil.ReadFile(pubKeyPath)
	if err != nil {
		log.Fatalf("Error reading public key: %v", err)
	}
	verifyKey, err = jwt.ParseRSAPublicKeyFromPEM(verifyBytes)
	if err != nil {
		log.Fatalf("Error parsing public key: %v", err)
	}
}

//STRUCT DEFINITIONS

type UserCredentials struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type User struct {
	Username string `datastore:"-"`
	Password string `json:"password"`
}

type Response struct {
	Data string `json:"data"`
}

type Token struct {
	Token string `json:"token"`
}

func ProtectedHandler(w http.ResponseWriter, r *http.Request) {

	response := Response{"Gained access to protected resource"}
	JsonResponse(response, w)

}

//RegisterHandler is using to insert user into database
func RegisterHandler(w http.ResponseWriter, r *http.Request) {

	user := &User{}
	if err := json.NewDecoder(r.Body).Decode(user); err != nil {
		panic(err)
	}

	keys := make([]*datastore.Key, 1)
	ctx := appengine.NewContext(r)
	ctx, err := appengine.Namespace(ctx, NAMESPACENAME)
	if err != nil {
		panic(err)
	}

	keys[0] = datastore.NewKey(ctx, "User", user.Username, 0, nil)

	_, err = datastore.Put(ctx, keys[0], user)
	if err != nil {
		panic(err)
	}

	//user.ID = k.IntID()
	json.NewEncoder(w).Encode(user)
}

//LoginHandler is using to check wherther user existed or not
//If User Existed In the datastore send tocken back
func LoginHandler(w http.ResponseWriter, r *http.Request) {
	user := &User{}
	if err := json.NewDecoder(r.Body).Decode(user); err != nil {
		panic(err)
	}
	ctx := appengine.NewContext(r)
	ctx, err := appengine.Namespace(ctx, NAMESPACENAME)
	if err != nil {
		panic(err)
	}

	// get one
	//user := &User{}
	key := datastore.NewKey(ctx, "User", user.Username, 0, nil)
	err = datastore.Get(ctx, key, user)
	if err != nil {
		// there is an err, there is a NO user
		//fmt.Fprint(w, "false")
		w.WriteHeader(http.StatusForbidden)
		fmt.Println("Error logging in")
		fmt.Fprint(w, "Invalid credentials")
		return
	}

	/*

		var user User

		//decode request into UserCredentials struct
		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			w.WriteHeader(http.StatusForbidden)
			fmt.Fprintf(w, "Error in request")
			return
		}

		fmt.Println(user.Username, user.Password)

		//validate user credentials
		ctx := appengine.NewContext(r)
		ctx, err = appengine.Namespace(ctx, NAMESPACENAME)
		if err != nil {
			panic(err)
		}

		key := datastore.NewKey(ctx, "Users", user.Username, 0, nil)
		err = datastore.Get(ctx, key, &user)
		// if there is an err, there is NO user
		//log.Infof(ctx, "ERR: %v", err)
		if err != nil {
			// there is an err, there is a NO user
			//fmt.Fprint(w, "false")
			w.WriteHeader(http.StatusForbidden)
			fmt.Println("Error logging in")
			fmt.Fprint(w, "Invalid credentials")
			return
		} /*else {
			// There is an user
			fmt.Fprint(w, "true")
		}*/

	/*
		if strings.ToLower(user.Username) != "ufk" {
			if user.Password != "qweasd" {
				w.WriteHeader(http.StatusForbidden)
				fmt.Println("Error logging in")
				fmt.Fprint(w, "Invalid credentials")
				return
			}
		}
	*/
	//create a rsa 256 signer
	signer := jwt.NewWithClaims(jwt.SigningMethodRS256, jwt.MapClaims{
		"iss": "admin",
		"exp": time.Now().Add(time.Minute * 20).Unix(),
		"CustomUserInfo": struct {
			Name string
			Role string
		}{user.Username, "Member"}})

	//set claims

	tokenString, err := signer.SignedString(signKey)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintln(w, "Error while signing the token")
		log.Printf("Error signing token: %v\n", err)
	}
	//create a token instance using the token string
	//response := Token{tokenString}
	cookie := &http.Cookie{
		Name:  "session",
		Value: tokenString,
		Path:  "/",
		//		UNCOMMENT WHEN DEPLOYED:
		//		Secure: true,
		//		HttpOnly: true,
	}
	http.SetCookie(w, cookie)

	//JsonResponse(response, w)

}

//AUTH TOKEN VALIDATION

func ValidateTokenMiddleware(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {

	//validate token
	token, err := request.ParseFromRequest(r, request.OAuth2Extractor, func(token *jwt.Token) (interface{}, error) {
		return verifyKey, nil
	})

	if err == nil {

		if token.Valid {
			next(w, r)
		} else {
			w.WriteHeader(http.StatusUnauthorized)
			fmt.Fprint(w, "Token is not valid")
		}
	} else {
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Fprint(w, "Unauthorised access to this resource")
	}

}

//HELPER FUNCTIONS

func JsonResponse(response interface{}, w http.ResponseWriter) {

	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}

func startServer() {
	http.HandleFunc("/register", RegisterHandler)
	http.HandleFunc("/login", LoginHandler)

	//PROTECTED ENDPOINTS
	http.Handle("/resource/", negroni.New(
		negroni.HandlerFunc(ValidateTokenMiddleware),
		negroni.Wrap(http.HandlerFunc(ProtectedHandler)),
	))

	log.Println("Now listening...")
	//http.ListenAndServe(":8000", nil)
}

func init() {
	initKeys()
	startServer()
	http.Handle("/", http.FileServer(http.Dir("./Angular/dist")))
}

/*
func checkUserName(res http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	ctx := appengine.NewContext(req)
	bs, err := ioutil.ReadAll(req.Body)
	sbs := string(bs)
	log.Infof(ctx, "REQUEST BODY: %v", sbs)
	var user User
	key := datastore.NewKey(ctx, "Users", sbs, 0, nil)
	err = datastore.Get(ctx, key, &user)
	// if there is an err, there is NO user
	log.Infof(ctx, "ERR: %v", err)
	if err != nil {
		// there is an err, there is a NO user
		fmt.Fprint(res, "false")
		return
	} else {
		fmt.Fprint(res, "true")
	}
}
cookie := http.Cookie{Name: "Auth", Value: signedToken, Expires: expireCookie, HttpOnly: true}
http.SetCookie(res, &cookie)
*/
