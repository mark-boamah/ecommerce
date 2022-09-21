import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyDPRPWCHzPiLgc9bNBcAqQpnJYMsSsmRY4",

    authDomain: "ecommerce-931e9.firebaseapp.com",

    projectId: "ecommerce-931e9",

    storageBucket: "ecommerce-931e9.appspot.com",

    messagingSenderId: "958744134832",

    appId: "1:958744134832:web:c862765862ac9ac53e2775"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    // Check if user data does not exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }

    }

    // if user data exists
    return userDocRef

}