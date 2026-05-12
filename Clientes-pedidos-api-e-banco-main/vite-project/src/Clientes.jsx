import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Clientes() {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        async function buscarClientes() {

            setLoading(true);

            try {

                const response = await axios.get('http://localhost:3000/clientes');

                setClientes(response.data);
                // console.log(response.data)

            } catch (error) {

                console.error("Erro!", error);

            } finally {

                setLoading(false);

            }
        }
        buscarClientes()
    }, []);



    return (
        <div className="container">
            <header className="header">
                <h1>Gerenciamento de Clientes</h1>
            </header>


            <main className="form-container">
                <div className="card">
                    {loading ? <p>Carregando...</p> : (
                        clientes.map(u =>
                            <div key={u.id}>
                                <hr /> Nome: {u.nome}
                                <br /> Email: {u.email}
                            </div>)
                    )}

                </div>
            </main>


        </div>
    )
}




