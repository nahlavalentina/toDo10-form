import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Card from '../../components/Card/Card';

const Clients = () => {
    const [clients, setClients] = useState() 

    // const instance = axios.create({
    //     baseURL: 'https://randomuser.me/api/'
    // })

    const getClients = async () => {
        const response = await fetch('https://randomuser.me/api/')
        const json = await response.json();
        const results = json.results[0];
        setClients(results)
        console.log(results);
    }

    useEffect(() => {
        getClients()
    }, [])

  return (
    <div>
        <section>
            {/* clients page mapping problem to fix */}
            {/* {!!clients && clients.map((client) => {
                return (
                    <Card name={client.name}
                    address={client.address}/>
                );
            })} */}
        </section>
      
    </div>
  )
}

export default Clients
