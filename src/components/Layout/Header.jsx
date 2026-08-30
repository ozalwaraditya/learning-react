import logo from "../../Images/react.png";

function Header() {
  return (
    <div
      className="py-2 pl-2"
      style={{
        borderBottom: "1px solid #777",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={logo}
        style={{ height: "45px", verticalAlign: "top" }}
        alt="React Logo"
      />

      <span className="h2 m-2 text-white-50">Learning React!</span>
    </div>
  );
}

export default Header;
