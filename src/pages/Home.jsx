import ProjectCard from "./../components/Project/ProjectCard.jsx";

function Home() {
  const projects = [
    {
      id: 1,
      title: "Counter App",
      description:
        "A simple counter project to practice React state and events.",
      path: "/count-o-pedia",
    },
    {
      id: 2,
      title: "Contact App",
      description: "A contact project to practice forms and React components.",
      path: "/contact-o-pedia",
    },
    {
      id: 3,
      title: "Route App",
      description: "A project to practice React Routing.",
      path: "/route-o-pedia",
    },
    {
      id: 4,
      title: "Protected Routes Auth",
      description:
        "A project to practice authentication and protected routes in React.",
      path: "/protected-routes-auth",
    },
    {
      id: 5,
      title: "React Redux",
      description:
        "A project to practice global state management using Redux and Redux Toolkit in React.",
      path: "/react-redux",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Welcome to Learning React!</h1>

        <p className="lead mt-3">
          Explore the React projects I have built while learning React.
        </p>
      </div>

      <h2 className="text-center mt-5 mb-4">Explore Projects</h2>

      <div className="row justify-content-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Home;
