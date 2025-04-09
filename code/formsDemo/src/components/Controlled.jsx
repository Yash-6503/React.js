import React from 'react'
import { useState } from 'react'

function Controlled() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({name:'',email:'',password:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);

        if (name == '')
        {
            setErrors({ ...errors, name: "please enter name" });
        } 

        if (email.match())
        {
            setErrors({ ...errors, name: "please enter name" });
        } 


    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
              <div>
                  <input type="text"
                      placeholder='Enter your name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />   
                  {errors.name && <p>{errors.name}</p>}

                  

             </div>
                <br/>
                <br/>
              <div>
                  <input type="email"
                      placeholder='enter email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
                <br/>
                <br/>
              <div>
                  <input type="password"
                      placeholder='enter password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <br />
              <br />
              <button
              >
                  Submit
              </button>
      </form>
    </div>
  )
}

export default Controlled
