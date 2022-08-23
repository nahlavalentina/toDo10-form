import React, { useEffect, useState } from 'react';
import S from './Clients.module.css'

const Clients = () => {
    // useState para acompanhar transformações da página e setar estado inicial de objeto

    const [client, setClient] = useState({
        name: '',
        last: '',
        email: '',
        cep: '',
        address: ''
    }) 

    // const instance = axios.create({
    //     baseURL: 'https://randomuser.me/api/'
    // })

    // função para pegar dados da API ramdom user e alterar estados passados anteriormente

    async function handleClients() {
        const response = await fetch('https://randomuser.me/api/');
        const json = await response.json();
        const results = json.results[0]
        setClient([{
            nome: results.name.first,
            last: results.name.last,
            email: results.email,
            cep: results.location.postcode,
            address: results.location.street
        }])
        console.log(results);
        
    }

    // carrega requisição da api no carregamento da página, apenas uma vez

    useEffect(() => {
        handleClients()
        console.log(client);
    }, [])

    //retornos com ternários individuis de cada item a ser puxado e apresentad

  return (
    <div className={S.container}>
     <div>
    <article>
        <small>Nome:</small>
        <p>{!!client && client.nome} {!!client && client.last}</p>
    </article>
    <article>
        <small>Email:</small>
        <p>{!!client && client.email}</p>
    </article>
    <article>
        <small>CEP:</small>
        <p>{!!client && client.cep}</p>
    </article>
    <article>
        <small>Endereço:</small>
        <p>{!!client && client.address}</p>
    </article>
</div>

    </div>
  )
}

export default Clients
