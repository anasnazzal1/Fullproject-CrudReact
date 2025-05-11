export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">MyWebsite</h5>
            <p>Simple and elegant web experience powered by React and Bootstrap.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/CreateUser" className="text-light text-decoration-none">Create User</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
          </div>

        </div>
      </div>

      <div className="text-center mt-4 text-muted small border-top pt-3">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
