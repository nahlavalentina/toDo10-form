import React, { useEffect, useState } from 'react';

const Clients = () => {
    const [client, setClient] = useState([{}]) 

    // const instance = axios.create({
    //     baseURL: 'https://randomuser.me/api/'
    // })

    async function handleClients() {
        const response = await fetch('https://randomuser.me/api/');
        const json = await response.json();
        const results = json.results[0];
        setClient([{
            name: results.name.first,
            last: results.name.last,
            email: results.email,
            cep: results.location.postcode,
            address: results.location.street
        }])
        
    }

    useEffect(() => {
        handleClients()
    }, [])

  return (
    <div>
        {/* <div>
            <article>
                <small>Nome:</small>
                <p>{!!client ? client.name : ''} {!!client ? client.last : ''}</p>
            </article>
            <article>
                <small>Email:</small>
                <p>{!!client ? client.email : ''}</p>
            </article>
            <article>
                <small>CEP:</small>
                <p>{!!client ? client.cep : ''}</p>
            </article>
            <article>
                <small>Endereço:</small>
                <p>{!!client ? client.address : ''}</p>
            </article>
            <button onClick={handleClients}>Ver Clientes</button>
        </div>   */}
    </div>
  )
}

export default Clients
