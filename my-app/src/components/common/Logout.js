import React, { useEffect , useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
 
export default function Logout(){
    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);

    useEffect(() => {
        logout();
        navigate('/login');
    }, [])

    return(<div>
        gracias
    </div>)
}