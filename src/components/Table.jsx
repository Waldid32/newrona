import deleteIcon from '../assets/delete.png'



export const Table = ({ columns, data, handleDelete }) => {

    return (
        <div className="flex w-full overflow-x-auto">
            <table className="table-hover table">
                <thead>
                    <tr>
                        {
                            columns.map((column, index) => (
                                <th key={index}>{column} </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        (!data) ? false : (
                            data.map((row, index) => (
                                <tr key={index + 1}>
                                    <td key={index + 1}>{index + 1}</td>
                                    <td>{row.nombre}</td>
                                    <td>{(row.cedula) ? row.cedula : row.correo}</td>
                                    {
                                        (row.cedula) ? <td><button onClick={() => handleDelete(row.id)}><img src={deleteIcon} alt="Delete" className='w-8' /></button></td> : false
                                    }
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

