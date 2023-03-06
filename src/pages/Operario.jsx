import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Table } from "../components/Table";
import { getOperarios } from './functions/getOperarios'
import { deleteOperarios } from './functions/deleteOperarios'
import { addOperarios } from "./functions/addOperarios";

export const Operario = () => {

    // Variables 
    const [data, setData] = useState("");
    const [operario, setOperario] = useState({
        nombre: '',
        cedula: ''
    });
    const columns = ['ID', 'NOMBRE', 'CEDULA', ''];


    // function get Operarios firebase
    const getDataOperarios = () => {
        getOperarios().then((data) => setData(data));
    };

    useEffect(() => {
        getDataOperarios();
    }, [data]);

    // function delete operario firebase
    const handleDelete = (item) => {
        try {
            deleteOperarios(item);
            getDataOperarios();
        } catch (err) {
            console.log(err);
        }
    }

    // capture data input
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setOperario((prevState) => ({ ...prevState, [name]: value }));
    }


    // function send data firebase and wipe data input
    const handleSubmit = (operario) => {
        try {
            addOperarios(operario);
            getDataOperarios();
            setOperario({ nombre: "", cedula: "" });
            document.getElementById("modal-1").checked = false;
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            {/* Navbar componente */}
            <NavBar />

            <div className="mt-12 px-10">

                {/* Modal */}
                <article className="mb-5">
                    <label
                        className="btn btn-outline-error"
                        htmlFor="modal-1"
                        onClick={() => {
                            setOperario({ nombre: "", cedula: "" });
                        }}
                    >
                        Agregar Operario</label>

                    <input className="modal-state" id="modal-1" type="checkbox" />
                    <div className="modal">
                        <label className="modal-overlay" htmlFor="modal-1"></label>
                        <div className="modal-content flex w-full flex-col gap-5 p-7">
                            <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-center text-2xl font-semibold">Nuevo Operario</h2>
                            </div>

                            <section>
                                <div className="form-group">
                                    <div className="form-field">
                                        <input
                                            placeholder="Nombre completo"
                                            type="text"
                                            className="input max-w-full"
                                            name="nombre"
                                            value={operario.nombre}
                                            onChange={handleOnchange}
                                        />
                                    </div>

                                    <div className="form-field">
                                        <div className="form-control">
                                            <input
                                                placeholder="Cedula"
                                                type="number"
                                                className="input max-w-full"
                                                name="cedula"
                                                onChange={handleOnchange}
                                                value={operario.cedula}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-field pt-5">
                                        <div className="form-control justify-between">
                                            <button
                                                type="button"
                                                className="btn btn-outline-error w-full"
                                                onClick={() => {
                                                    handleSubmit(operario);
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
                < Table data={data} columns={columns} handleDelete={handleDelete} />

            </div >
        </div >
    )
}