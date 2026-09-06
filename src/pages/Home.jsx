import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="display-4">Welcome to Learning React!</h1>

          <p className="lead mt-3">
            Explore the React projects I have built while learning React.
          </p>
        </div>

        <h2 className="text-center mt-5 mb-4">Explore Projects</h2>

        <div className="row justify-content-center">
          {/* Counter Project */}
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-white h-100">
              <div className="card-body text-center">
                <h4 className="card-title">Counter App</h4>

                <p className="card-text text-white-50">
                  A simple counter project to practice React state and events.
                </p>

                <Link to="/count-o-pedia" className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Project */}
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-white h-100">
              <div className="card-body text-center">
                <h4 className="card-title">Contact App</h4>

                <p className="card-text text-white-50">
                  A contact project to practice forms and React components.
                </p>

                <Link to="/contact-o-pedia" className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* Routing Project */}
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-white h-100">
              <div className="card-body text-center">
                <h4 className="card-title">Route App</h4>

                <p className="card-text text-white-50">
                  A contact project to practice Routing.
                </p>

                <Link to="/routing" className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
