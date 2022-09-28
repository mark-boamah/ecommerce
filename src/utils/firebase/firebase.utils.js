import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyDPRPWCHzPiLgc9bNBcAqQpnJYMsSsmRY4",
    authDomain: "ecommerce-931e9.firebaseapp.com",
    projectId: "ecommerce-931e9",
    storageBucket: "ecommerce-931e9.appspot.com",
    messagingSenderId: "958744134832",
    appId: "1:958744134832:web:c862765862ac9ac53e2775"
};


// Initialize Firebase
initializeApp(firebaseConfig);

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

// adding collection to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log('DONE!!!!!!');
}


export const getCategoriesAndDocuments = async () => {
    const collectRef = collection(db, 'categories')
    const queryString = query(collectRef)

    const querySnapshot = await getDocs(queryString)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})

    return categoryMap
}


// creating a user
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return

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
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

// sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}


// signing out user
export const signOutUser = async () => await signOut(auth)


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
