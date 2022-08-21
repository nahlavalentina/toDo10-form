import React, { useEffect, useState } from 'react';

const Clients = () => {
    const [client, setClient] = useState() 

    // const instance = axios.create({
    //     baseURL: 'https://randomuser.me/api/'
    // })

    async function handleClients() {
        const response = await fetch('https://randomuser.me/api/');
        const json = await response.json();
        const answer = json.results[0]
        const results = {
            name: answer.name.first,
            last: answer.name.last,
            email: answer.email,
            cep: answer.location.postcode,
            address: answer.location.street
        }
        setClient(results)
        console.log(results);
        
    }

    useEffect(() => {
        handleClients()
    }, [])

  return (
    <div>
        {!!client && client.map((cliente) => {
            return (
                <div>
            <article>
                <small>Nome:</small>
                <p>{cliente.name} {cliente.last}</p>
            </article>
            <article>
                <small>Email:</small>
                <p>{cliente.email}</p>
            </article>
            <article>
                <small>CEP:</small>
                <p>{cliente.cep}</p>
            </article>
            <article>
                <small>Endereço:</small>
                <p>{cliente.street}</p>
            </article>
        </div>  
            )
        })}
    </div>
  )
}

export default Clients
