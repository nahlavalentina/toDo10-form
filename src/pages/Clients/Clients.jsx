import React, { useEffect } from 'react'
import axios from 'axios'

const Clients = () => {
    const instance = axios.create({
        baseURL: 'https://randomuser.me/api/'
    })

    const getClients = async () => {
        const response = await instance.get();
        const json = response.data;
        console.log(json);
    }

    useEffect(() => {
        getClients()
    })

  return (
    <div>
      
    </div>
  )
}

export default Clients
