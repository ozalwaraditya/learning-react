function Contact(props) {
  return (
    <div
      className="row p-2 mb-2 align-items-center"
      style={{ borderRadius: "10px", border: "1px solid #555" }}
    >
      <div className="col-2">
        <img
          src={`https://ui-avatars.com/api/?name=${props.contact.name}&background=random&color=fff`}
          alt={props.contact.name}
          className="img-fluid rounded-circle"
          style={{ width: "60px", height: "60px" }}
        />
      </div>

      <div className="col-6 text-warning">
        <h5 className="mb-1">{props.contact.name}</h5>
        <p className="mb-0">{props.contact.phone}</p>
        <p className="mb-0">{props.contact.email}</p>
      </div>

      <div className="col-4 d-flex justify-content-end gap-2">
        <button
          onClick={() => {
            props.favoriteClick(props.contact);
          }}
          className="btn btn-warning btn-sm"
        >
          {props.contact.isFavorite ? "⭐ Favorite" : "☆ Add Favorite"}
        </button>
        <button className="btn btn-primary btn-sm">✏️ Edit</button>

        <button
          onClick={() => {
            props.deleteClick(props.contact);
          }}
          className="btn btn-danger btn-sm"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
