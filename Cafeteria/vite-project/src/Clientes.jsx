import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Clientes() {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(false);

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')


            async function buscarClientes() {

            setLoading(true);

            try {
                const response = await axios.get('http://localhost:3000/clientes');
                setClientes(response.data);
            } catch (error) {
                console.error("Erro!", error);
            } finally {
                setLoading(false);
            }
        }

    useEffect(() => {

        buscarClientes()
    }, []);




        async function cadastrarCliente() {

            if(!nome){
                alert('Por favor, insira um nome')
                return
            }

            if(!email){
                alert('Por favor, insira um Email')
                return
            }

        try{

        const adicionar = await axios.post('http://localhost:3000/clientes', { nome: nome, email: email });

        buscarClientes()

        } catch (error) {
            console.error("Erro na função, erro a seguir: ", error);
        }
        
    }








    return (
        <div className="container">
            <header className="header">
                <h1>Gerenciamento de Clientes</h1>
            </header>


            <main className="form-container">
                <div className="card">
                    {loading ? <p>Carregando...</p> : (
                        clientes.map(u =>
                            <div key={u.id} className='cartoesClientes'>
                                 <strong>ID:</strong> {u.id}
                                <br /> <strong>Nome:</strong> {u.nome}
                                <br /> <strong>Email:</strong> {u.email}
                                <button>Editar</button>
                                <button>Deletar</button>
                            </div>)
                    )}

                </div>
            </main>


                    <main className='caixa_cadastros'>
                        <h1>Cadastrar Cliente</h1>

                        <input type="text" placeholder='Nome do Cliente' value={nome} onChange={(e) => setNome(e.target.value)}></input>
                        <input type="text" placeholder='Email do Cliente' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <button onClick={cadastrarCliente}>Cadastrar</button>


                    </main>

                    <main>
                        <h1>Deletar Cliente</h1>
                    </main>
        </div>
    )
}




