import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { addUsercontent } from '../pages';

const InputForm = () => {
    const[user,setUser] = useState(
        {
          about: '',
          contact: '',
          address: '',
          email:'',
          error:'',
          success:false,
        }
      )
      const {about,contact,address,email,error,success} = user

      const handleChange=names=>event=>{
        setUser({...user,error:false,[names]:event.target.value})
      }

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
        setUser({...user,error:false})
        addUsercontent({about,contact,address,email})
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
                {success}
            </div>
        )

  return (
<Formik
    initialValues={{about:'',contact:'',address:'',email:''}}
    validationSchema={Yup.object({
        about:Yup.string()
        .max(20,"About is 20 characters or less")
        .required('About is required'),
        contact:Yup.string()
        .required('Contact is required'),
        address:Yup.string()
        .required('Address is required'),
        email:Yup.string()
        .email('Invalid email please enter a valid email')
        .required('Email is required')
        ,
    })} >
        <div className="modal fade bg-secondary" id="inputform" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title nav_fonts" id="exampleModalLabel" style={{ 'color': "#FF6A00" }}>Input Form</h5>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body font_family">
                            <Form>
                                {errorMessage()}
                                {successMessage()}
                                <div className="mb-3">
                                    <label htmlFor="recipient-email" className="col-form-label">Email</label>
                                    <Field className="form-control" id="recipient-email" onChange={handleChange('email')} value={email} name="email"/>
                                    <ErrorMessage name="email">
                                        {message => <div className="text-danger">{message}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-about" className="col-form-label">About</label>
                                    <Field className="form-control" id="recipient-about" onChange={handleChange('about')} value={about} name="about"/>
                                    <ErrorMessage name="about">
                                        {message => <div className="text-danger">{message}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-contact" className="col-form-label">Contact</label>
                                    <Field type="number" className="form-control" id="recipient-contact"  onChange={handleChange('contact')} value={contact} name="contact" />
                                    <ErrorMessage name="contact">
                                        {message => <div className="text-danger">{message}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-address" className="col-form-label">Address</label>
                                    <Field type="text" className="form-control" id="recipient-address" onChange={handleChange('address')} value={address} name="address" />
                                    <ErrorMessage name="address">
                                        {message => <div className="text-danger">{message}</div>}
                                    </ErrorMessage>
                                </div>
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger btn-sm shadow-none border-none" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success btn-sm shadow-none border-none" onClick={handleSubmit}>Add Content</button>
                        </div>
                    </div>
                </div>
            </div>
    </Formik>
  )
}

export default InputForm