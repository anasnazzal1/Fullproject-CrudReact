export default function Contact() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="card-header bg-dark text-white text-center">
                            <h4>Contact Information</h4>
                        </div>
                        <div className="card-body">
                            <p className="text-center">You can reach us at the following details:</p>

                            <div className="mb-3">
                                <h5>Address:</h5>
                                <p>1234 Main Street, Cityville, Country</p>
                            </div>
                            <div className="mb-3">
                                <h5>Email:</h5>
                                <p>contact@company.com</p>
                            </div>
                            <div className="mb-3">
                                <h5>Phone:</h5>
                                <p>+123 456 7890</p>
                            </div>
                            <div className="mb-3">
                                <h5>Business Hours:</h5>
                                <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
