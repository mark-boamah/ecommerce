import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
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

// Setting up google provider
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


// Initialize firestore
export const db = getFirestore()

// creating a user
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return

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
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }

    }

    // if user data exists
    return userDocRef

}

// create user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

// sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}
