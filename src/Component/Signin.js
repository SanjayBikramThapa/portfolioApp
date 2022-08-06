import React,{useState}  from 'react'
import { postUser } from '../pages'

export const Signin = () => {
    const[user,setUser] = useState(
        {
          name: '',
          email: '',
          password: '',
          error:'',
          success:false
        }
      )
      const {name,email,password,error,success} = user

      const handleChange=names=>event=>{
        setUser({...user,error:false,[names]:event.target.value})
      }
    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
        setUser({...user,error:false})
        postUser({name,email,password})
        .then(data=>{
            console.log("Here is data",data);
            if(data.status === "error"){
                setUser({...user,error:data.message})
            }
            else{
                setUser({...user,success:data.message})
            }
        })
        .catch(err=>{
            console.log(err)
        }
        )
    }
    // to show error message
    const errorMessage=() => (
        <div className='alert alert-danger' style={{display:error ? '': 'none'}}>
            {error}
        </div>
)        // to show success message
    const successMessage=()=> (
        <div className='alert alert-success' style={{display:success ? '': 'none'}}>
            Login successfully
        </div>
    )
  return (
    <>
    <div className='container bg-secondary mt-5 col-8'>
        <form> 
            <div className='form-group'>
                <label htmlFor='name' className=''>Name</label>
                <input type='email' className='form-control' id='name' aria-describedby='emailHelp' placeholder='Enter email' onChange={handleChange('name')} value={name} />
            </div>
            {errorMessage()}
            {successMessage()}
            <div className='form-group'>
                <label htmlFor='exampleInputEmail1' className=''>Email address</label>
                <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' onChange={handleChange('email')} value={email}/>
            </div>
            <div className='form-group'>
                <label htmlFor='pass' className=''>Password</label>
                <input type='email' className='form-control' id='pass' aria-describedby='emailHelp' placeholder='Enter email' onChange={handleChange('password')} value={password}/>
            </div>
            <button className='form-group btn btn-warning shadow-none mt-5' onClick={handleSubmit}>login</button>
        </form>  
    </div>
    </>
  )
}