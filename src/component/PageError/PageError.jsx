export default function PageError({ error }) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card text-center shadow-lg">
                        <div className="card-body">
                            <h1 className="display-1 text-danger">error</h1>
                            <h2 className="card-title">Oops! </h2>

            <p className="card-text" >{error.message || "Something went wrong"}</p>
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
