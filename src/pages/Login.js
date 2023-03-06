import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./functions/login";

export const Login = () => {

    const [data, setData] = useState("");
    const navigate = useNavigate();

    const handleOnchange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = data;
        try {
            await login(email, password);
            navigate('/operario');
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6 mt-20">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold">Iniciar sesión</h1>
            </div>
            <div className="form-group">
                <div className="form-field">
                    <label className="form-label text-base">Usuario</label>

                    <input
                        placeholder="usuario / correo"
                        type="email"
                        className="input max-w-full text-base"
                        name="email"
                        onChange={handleOnchange}
                    />
                </div>
                <div className="form-field">
                    <label className="form-label text-base">Contraseña</label>
                    <div className="form-control">
                        <input
                            placeholder="contraseña"
                            type="password"
                            className="input max-w-full text-base"
                            name="password"
                            onChange={handleOnchange}
                        />
                    </div>
                </div>
                <div className="form-field pt-3">
                    <div className="form-control justify-between">
                        <button type="button" className="btn btn-error w-full text-white text-base" onClick={handleSubmit}>Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
