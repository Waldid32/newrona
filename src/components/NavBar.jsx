import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'

export const NavBar = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
    }

    return (
        <div className="navbar bg-error">
            <div className="navbar-start">
                <button className="navbar-item text-xl text-white" onClick={() => navigate('/operario')}>NEWRONA</button>
            </div>
            <div className="navbar-end">
                <button className="navbar-item text-lg text-white" onClick={() => navigate('/operario')}>OPERARIOS</button>

                <button className="navbar-item text-lg text-white" onClick={() => navigate('/gerente')}>GERENTES</button>

                <button className='navbar-item text-lg text-white' onClick={handleLogout}>SALIR</button>
            </div>
        </div>
    )
}
