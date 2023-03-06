import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { Table } from "../components/Table";
import { getGerentes } from './functions/getGerentes'
import { addGerentes } from './functions/addGerentes'
import { createEmail } from "./functions/createEmail";

export const Gerente = () => {

    const columns = ['ID', 'NOMBRE', 'CORREO'];
    const [data, setData] = useState("");
    const [gerente, setGerente] = useState({
        nombre: '',
        email: '',
        password: ''
    });


    const getDataGerentes = () => {
        getGerentes().then((data) => setData(data));
    };

    useEffect(() => {
        getDataGerentes();
    }, [data]);

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setGerente((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (gerente) => {
        try {
            addGerentes(gerente);
            createEmail(gerente);
            getDataGerentes();
            setGerente({ nombre: '', email: '', password: '' });
            document.getElementById("modal-2").checked = false;
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            {/* Navbar componente */}
            <NavBar />

            <div className="mt-12 px-20">

                {/* Modal */}
                <article className="mb-5">
                    <label
                        className="btn btn-outline-error"
                        htmlFor="modal-2"
                        onClick={() => {
                            setGerente({ nombre: "", email: "", password: "" });
                        }}
                    >
                        Agregar Gerente</label>

                    <input className="modal-state" id="modal-2" type="checkbox" />
                    <div className="modal">
                        <label className="modal-overlay" htmlFor="modal-2"></label>
                        <div className="modal-content flex w-full flex-col gap-5 p-7">
                            <label htmlFor="modal-2" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-center text-2xl font-semibold">Nuevo Gerente</h2>
                            </div>

                            <section>
                                <div className="form-group">
                                    <div className="form-field">
                                        <input
                                            placeholder="Nombre completo"
                                            type="text"
                                            className="input max-w-full"
                                            name="nombre"
                                            value={gerente.nombre}
                                            onChange={handleOnchange}
                                        />
                                    </div>

                                    <div className="form-field">
                                        <div className="form-control">
                                            <input
                                                placeholder="Correo"
                                                type="email"
                                                className="input max-w-full"
                                                name="email"
                                                onChange={handleOnchange}
                                                value={gerente.email}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-field">
                                        <div className="form-control">
                                            <input
                                                placeholder="Contraseña"
                                                type="password"
                                                className="input max-w-full"
                                                name="password"
                                                onChange={handleOnchange}
                                                value={gerente.password}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-field pt-5">
                                        <div className="form-control justify-between">
                                            <button
                                                type="button"
                                                className="btn btn-outline-error w-full"
                                                onClick={() => {
                                                    handleSubmit(gerente);
                                                }}
                                            >Agregar</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </article >

                {/* Componente Tabla */}
                <Table data={data} columns={columns} />
            </div>
        </div>
    )
}
