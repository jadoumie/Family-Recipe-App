import React from "react"; 
import { signInWithGoogle, auth } from "../services/firestore";
import { useHistory } from "react-router";

const AuthHome = (props) => {


    const history = useHistory();

    const signIn = async () => {
        await signInWithGoogle(); 
        history.push("/")
    }

    const signOut = async () => {
        await auth.signOut();
        history.push("/");
      };

    return (
        <div className="auth-home">
            {props.loggedIn ? (
            <button onClick={signIn}>Sign in with Google</button>
            ) : (
            <button onClick={signOut}>Sign Out</button>
            )
        }
        </div>
    );
};

export default AuthHome; 