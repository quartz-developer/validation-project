import React , {useEffect , useState} from 'react';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

import { singUpApi } from './api/authApi';
import {validate} from "./validate";
import {notify} from "./toast";
import style from "./SignUp.module.css";
import SignUpImage from '../images/SignUp.jpg';

const SignUp = () => {

    const [data , setData] = useState ({
        name: "",
        email: "",
        password: "",
        confrimPassword: "",
        isAccepted: false
    });

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState ({});

    useEffect (() => {
        setErrors(validate(data , "signup"))
    },[data])

    const chengeHandler = event => {
        if(event.target.name === "isAccepted") {
            setData({...data, [event.target.name] : event.target.checked})
        } else {
            setData({...data, [event.target.name] : event.target.value})
        }
    }
    
    const focusHandler = event => {
        setTouched({...touched , [event.target.name] : true })
    }

    const addToLocalStorage = () => {
        localStorage.setItem(`${data.email}`, JSON.stringify(data));
    }

    const SubmitHandler = event => {
        event.preventDefault();

        const userData = {
            name:data.name,
            email:data.email,
            password:data.password
        }
      
        singUpApi(userData , (istrue , data) => {
            if(istrue){
                toast.success(data.message)
            }
            else(
                toast.error(data)
            )
        })

        // const getEmailFromLS = localStorage.key(`${data.email}`);

        // if(data.email === getEmailFromLS) {
        //     notify('Email Is Already Used. Please Create New Acount Or Login' , 'error');
            
        // } else {
        //     if(!Object.keys(errors).length) {
        //     notify('You Signde Up Successfully' , 'success');
        //     addToLocalStorage();
    
        //     } else {
        //     notify('Invalid Data!!' , 'error');
        //         setTouched ({
        //             name:true,
        //             email:true,
        //             password:true,
        //             confrimPassword:true,
        //             isAccepted:true
        //         })
        //     }
        // }

    }


    return (
        <div className={style.mainContainer}>

            <div className={style.signUpContainer}>
                <div className={style.formContainer}>
                    <form onSubmit={SubmitHandler}> 
                        <h2> SignUp </h2>
                        <div className={style.formData}>
                            <label> Name: </label>
                            <input
                            className={(errors.name && touched.name) ? style.uncompleted : style.completed}
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={chengeHandler}
                            onFocus={focusHandler}
                            />
                            {errors.name && touched.name && <span> {errors.name} </span>}
                        </div>
                        <div className={style.formData}>
                            <label> Email: </label>
                            <input
                             className={(errors.email && touched.email) ? style.uncompleted : style.completed}
                             type="email"
                             name="email"
                             value={data.email}
                             onChange={chengeHandler}
                             onFocus={focusHandler}
                            />
                            {errors.email && touched.email && <span> {errors.email} </span>}
                        </div>
                        <div className={style.formData}>
                            <label> Password: </label>
                            <input
                            className={(errors.password && touched.password) ? style.uncompleted : style.completed}
                            type="password"
                            name="password"
                            value={data.password} 
                            onChange={chengeHandler}
                            onFocus={focusHandler}
                            />
                            {errors.password && touched.password && <span> {errors.password} </span>}
                        </div>
                        <div className={style.formData}>
                            <label> Confrim Password: </label>
                            <input
                            className={(errors.confrimPassword && touched.confrimPassword) ? style.uncompleted : style.completed}
                            type="password"
                            name="confrimPassword"
                            value={data.confrimPassword}
                            onChange={chengeHandler}
                            onFocus={focusHandler}
                            />
                            {errors.confrimPassword && touched.confrimPassword && <span> {errors.confrimPassword} </span>}
                        </div>
                        <div className={style.checkboxInput}>
                            <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted} 
                            onChange={chengeHandler}
                            />
                            <label> I accept terms of privacy policy </label>
                            {errors.isAccepted && touched.isAccepted &&<span> {errors.isAccepted} </span>}
                        </div>
                        
                        <div className={style.btnContainer}>
                            <Link to="/login"> Login </Link>
                            <button type="submit"> Sign Up </button>
                        </div>
                    </form>
                </div>

                <div className={style.imageContainer}>
                    <img src={SignUpImage} alt="SignUpImage"/>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default SignUp;