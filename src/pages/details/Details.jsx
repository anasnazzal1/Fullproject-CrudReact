import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../component/loader/Loader";
import PageError from "../../component/PageError/PageError";

export default function Details() {
  const { userid } = useParams();
  const [users, setUser] = useState({});
   const [loader,setLoader]= useState(true);
     const [error,setError]= useState('');
  const getUser = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_GETUSER}/users/${userid}`);
    setUser(response.data.user);
    }
    catch(err){
      setError(err)
    }
    finally {
      setLoader(false)
    }
  };

  useEffect(() => {
    getUser();
  }, []);
 if(loader){
        return <Loader/>
    }
    if(error){
       return <PageError error={error}/>;
    }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-dark text-white text-center">
              <h4>User Details</h4>
            </div>
            <div className="card-body">
              <p><strong>Username:</strong> {users.userName}</p>
              <p><strong>Phone:</strong> {users.phone}</p>
              <p><strong>Email:</strong> {users.email}</p>
              <p><strong>Password:</strong> {users.password}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
