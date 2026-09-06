import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-white h-100">
        <div className="card-body text-center">
          <h4 className="card-title">{project.title}</h4>

          <p className="card-text text-white-50">
            {project.description}
          </p>

          <Link to={project.path} className="btn btn-primary">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
