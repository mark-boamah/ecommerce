import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
// import { useEffect } from "react"
// import { getRedirectResult } from "firebase/auth"


const SignIn = () => {
    // useEffect(() => {
    //     async function imposeEffect(){
    //         const response = await getRedirectResult(auth)
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    //     }
    //     imposeEffect()
    // }, [])

    // signing in with google popup
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={ logGoogleUser }>Sign in with Google Popup</button>
            {/* <button onClick={ signInWithGoogleRedirect }>Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default SignIn