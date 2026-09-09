import { Navigate, useLocation } from "react-router-dom";
import { getAuthState, hasRole } from "../utility/authUtility";

function RoleBasedRoute({ children, allowedRoles }) {
  const { isAuthenticated, currentUser } = getAuthState();
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!hasRole(allowedRoles)) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-danger">
              <div className="card-body text-center p-5">
                <div className="text-danger mb-3">
                  <i className="bi bi-shield-lock-fill fs-1"></i>
                </div>
                <h2 className="mb-3">Access Denied</h2>
                <p className="text-muted">
                  You don't have permission to access this page.
                </p>
                <div className="alert alert-warning">
                  <p className="mb-1">
                    <strong>Your current role:</strong> {currentUser?.role}
                  </p>

                  <p className="mb-0">
                    <strong>Required role:</strong> {allowedRoles}
                  </p>
                </div>
                <button
                  onClick={() => window.history.back()}
                  className="btn btn-outline-secondary px-4 py-2 mt-3"
                >
                  ← Go Back
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return children;
}

export default RoleBasedRoute;
