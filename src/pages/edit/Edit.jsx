import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loader from "../../component/loader/Loader";
import PageError from "../../component/PageError/PageError";

export default function Edit() {
  const [loader, SetLoader] = useState(true);
  const [error, setEror] = useState("");
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const { userid } = useParams();

  const getUser = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_GETUSER}/users/${userid}`);
      setValue("userName", response.data.user.userName);
      setValue("phone", response.data.user.phone);
      setValue("email", response.data.user.email);
      setValue("password", response.data.user.password);
    } catch (err) {
      setEror(err.message);
    } finally {
      SetLoader(false);
    }
  };

  const EditUser = async (value) => {
    const response = await axios.put(`${import.meta.env.VITE_GETUSER}/users/${userid}`, {
      userName: value.userName,
    });
    if (response.status === 200) {
      navigate("/");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loader) {
    return <Loader />;
  }

  if (error) {
    return <PageError error={error}/>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-dark text-white text-center">
              <h4>Edit User</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(EditUser)}>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputUserName1">User Name</label>
                  <input
                    {...register("userName")}
                    type="text"
                    className="form-control"
                    id="exampleInputUserName1"
                    placeholder="Enter UserName"
                  />
                  <small className="form-text text-muted">
                    We'll never share your username with anyone else.
                  </small>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="exampleInputphone1">Phone</label>
                  <input
                    {...register("phone")}
                    type="text"
                    disabled
                    className="form-control"
                    id="exampleInputphone1"
                    placeholder="Phone"
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    {...register("email")}
                    type="email"
                    disabled
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                  <small className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="exampleInputpassword1">Password</label>
                  <input
                    {...register("password")}
                    type="text"
                    disabled
                    className="form-control"
                    id="exampleInputpassword1"
                    placeholder="Enter password"
                  />
                  <small className="form-text text-muted">
                    We'll never share your password with anyone else.
                  </small>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-success w-100">
                    Save Changes
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
