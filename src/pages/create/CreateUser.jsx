import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from 'react-toastify';
import {  useState } from "react";
import Loader from "../../component/loader/Loader";
import PageError from "../../component/PageError/PageError";

export default function CreateUser() {
    const { register, handleSubmit } = useForm();
    const [loader,setLoader]= useState(false);
     const [error,setError]= useState('');
    const navigate = useNavigate();

    const registerForm = async (data) => {
        setLoader(true)
        try {
            const response = await axios.post(`${import.meta.env.VITE_GETUSER}/users`, data);
            if (response.status === 201) {
                toast.success('User added successfully', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                navigate("/");
            }
        } catch (err) {
            setError(err);
        }
        finally{
            setLoader(false)
        }
       
    };
   
    if(error){
        return <PageError error={error}/>;
    }
    
    if (loader) {
        return <Loader />;
    }
 

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-header bg-dark text-white text-center">
                            <h4>Create New User</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(registerForm)}>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputUserName1">User Name</label>
                                    <input
                                        {...register("userName")}
                                        type="text"
                                        className="form-control"
                                        id="exampleInputUserName1"
                                        placeholder="Enter UserName"
                                    />
                                    <small id="UserNameHelp" className="form-text text-muted">
                                        We'll never share your UserName with anyone else.
                                    </small>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputphone1">Phone</label>
                                    <input
                                        {...register("phone")}
                                        type="text"
                                        className="form-control"
                                        id="exampleInputphone1"
                                        placeholder="Enter Phone"
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1">Email Address</label>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Email"
                                    />
                                    <small id="emailHelp" className="form-text text-muted">
                                        We'll never share your email with anyone else.
                                    </small>
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input
                                        {...register("password")}
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Password"
                                    />
                                    <small id="passwordHelp" className="form-text text-muted">
                                        We'll never share your password with anyone else.
                                    </small>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-success w-100">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
