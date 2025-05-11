import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../component/loader/Loader";
import PageError from "../../component/PageError/PageError";
  import Swal from 'sweetalert2';
export default function Home() {
  const [users, setUser] = useState([]);
    const [loader,setLoader]= useState(true);
     const [error,setError]= useState('');
  const getUser = async () => {
   try {
     const response = await axios.get(`${import.meta.env.VITE_GETUSER}/users`);
    setUser(response.data.users);
   }
   catch(err){
    setError(err)
   }
   finally{
    setLoader(false)
   }
  };

  const DeleteUser = async (id) => {

    Swal.fire({
    title: 'Are you sure?',
    text: "Do you really want to delete this user?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
    reverseButtons: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
       const response =await axios.delete(`${import.meta.env.VITE_GETUSER}/users/${id}`);
       if (response.status === 200) {
      const newData = users.filter((user) => user._id !== id);
      setUser(newData);
    }
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
        // هنا يمكن إعادة تحميل البيانات أو التحديث
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete the user.', 'error');
        console.log(error)
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelled', 'User is safe 🙂', 'info');
    }
  });

    
    
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
  <h2 className="mb-4 text-center">User List</h2>
  <div className="table-responsive">
    <table className="table table-hover table-bordered text-center align-middle">
      <thead className="table-dark">
        <tr>
          <th>User Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Password</th>
          <th colSpan={3}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.userName}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>
              <Link to={`/details/${user._id}`} className="btn btn-sm btn-dark">
                Details
              </Link>
            </td>
            <td>
              <Link to={`/Edit/${user._id}`} className="btn btn-sm btn-secondary">
                Edit
              </Link>
            </td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => DeleteUser(user._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
