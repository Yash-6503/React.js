import React, { useRef } from 'react'

function UnControlled() {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
    }

    return (
    <div>
        <form action="" onSubmit={handleSubmit}>
              <div>
                    <input type="text"
                        placeholder='Enter Name'
                        ref={nameRef}
                    />
              </div> <br/>
              <div>
                    <input type="email"
                        placeholder='Enter Email'
                        ref={emailRef}
                    />
              </div> <br/>
              <div>
                    <input type="password"
                        placeholder='Enter Password'
                        ref={passwordRef}
                    />
              </div> <br/>
              <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UnControlled
