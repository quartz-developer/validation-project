import React , {useEffect , useState} from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


import {validate} from "./validate";
import {notify} from "./toast";
import style from "./SignUp.module.css";
import LogInImage from '../images/LogIn.jpg';

const Login = () => {

    const [data , setData] = useState ({
        password: "",
        confrimPassword: "",
    });

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState ({});

    useEffect (() => {
        setErrors(validate(data , "login"))
    },[data])

    const chengeHandler = event => {
        setData({...data, [event.target.name] : event.target.value})  
    }
    
    const focusHandler = event => {
        setTouched({...touched , [event.target.name] : true })
    }

    const SubmitHandler = event => {
        event.preventDefault();

        let datas = JSON.parse(localStorage.getItem(`${data.email}`));
        let dataEmail = localStorage.key(`${data.email}`)

        if(!Object.keys(errors).length) {

            if(data.email === dataEmail && data.password === datas.password) {
                notify(`Welcome Dear ${datas.name} 💖` , 'success');
            } else {
                notify('Please Checked Your Email Or Password 🙏' , 'error');
                setTouched ({
                    email:true,
                    password:true,
                })
            }
        }
    }


    return (
        <div className={style.mainContainer}>

           <div className={style.signUpContainer}>
               <div className={style.formContainer}>
                <form onSubmit={SubmitHandler}> 
                    <h2> Login </h2>
                    <div className={style.formData}>
                        <label> Email </label>
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
                        <label> Password </label>
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

                    <div className={style.btnContainer}>
                        <Link to="/signup"> Sign Up </Link>
                        <button type="submit"> Log In </button>
                    </div>
                </form>
               </div>

               <div className={style.imageContainer}>
                    <img src={LogInImage} alt="LogInImage"/>
               </div>
           </div> 

            <ToastContainer />
        </div>
    );
};

export default Login;