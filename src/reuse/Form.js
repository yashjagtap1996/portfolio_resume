import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AOS from "aos";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    useEffect(()=>{
        AOS.init();
    })

    // form validation rules 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required')
            .min(4,"Minimum 4 characters required")
            .max(20,"Limit Exceeded"),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        Message: Yup.string()
            .required("Please Write Something")
            .max(150,"Limit Exceeded")
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    async function onSubmit(data,e) {
        // display form data on success
        e.preventDefault();
        await axios.post("https://portfolio-2d049-default-rtdb.firebaseio.com/contactform.json",data);
        reset();
        toast("Submitted Successfully!");
    }

    return (
        <div className="card m-3 Form shadow" style={{ backgroundColor: "#f5df4e" }} data-aos="flip-left">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Your Name</label>
                            <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>

                    </div>
                    <div className="form-row">

                        <div className="form-group col">
                            <label>Your Email</label>
                            <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col">
                            <label>Please Text</label>
                            <textarea name="Message" type="text" {...register('Message')} className={`form-control ${errors.Message ? 'is-invalid' : ''}`} ></textarea>
                            <div className="invalid-feedback">{errors.Message?.message}</div>
                        </div>
                    </div>


                    <div className="form-group">
                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <ToastContainer position="top-center"
                                autoClose={2000} />
                            <button type="button" onClick={()=>reset()} className="btn btn-info">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;