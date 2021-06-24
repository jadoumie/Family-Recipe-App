import React from "react"; 
import { signInWithGoogle } from "../services/firestore";

const AuthHome = () => {
    return (
        <div className="auth-home">
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default AuthHome; 