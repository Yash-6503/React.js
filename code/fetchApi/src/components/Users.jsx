import React, { useEffect, useState } from 'react'
import { getUsers } from '../api'
import { Link } from 'react-router-dom';

function Users() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUsers().then((resp) => setUser(resp));
    },[])

  return (
    <div className='sm:px-20 py-10'>
          <h1 className='text-center text-3xl font-extrabold'>Users Info</h1>
          <div className='flex flex-wrap justify-around gap-10 py-10'>
              {
                  user ? user.map((e, i) => (
                      <Link to={`/user/${e.id}`}>
                          <div key={i} className=' flex flex-col justify-between gap-1 items-center bg-yellow-300 p-10 rounded-2xl shadow-2xl shadow-gray-500'>
                              <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt={e.name} title={e.name} width={200} className=' rounded-full mb-5 ' />
                              <p><strong>ID : </strong>{e.id}</p>
                              <p><strong>Name : </strong>{e.name}</p>
                              <p><strong>Email : </strong>{e.email}</p>

                          </div>
                      
                      </Link>
                  ))
                      : <p>No Users Found</p>
              }
          </div>
    </div>
  )
}

export default Users
