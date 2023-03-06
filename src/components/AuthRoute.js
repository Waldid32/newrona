import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';



export const AuthRoute = (props) => {

    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                navigate('/');
            }
        });

        return () => AuthCheck();
    }, [auth, navigate]);


    if (loading) return <p>loading ...</p>

    return (
        <>{children}</>
    )
}
