import Contact from "./Contact";

function GeneralContacts(props) {
  return (
    <>
      <div
        className="col-12 p-2"
        style={{ borderRadius: "10px", backgroundColor: "#323637" }}
      >
        <div className="text-center text-white-50">General Contacts</div>

        <div className="p-2">
          {props.contacts.map((contact, index) => (
            <Contact
              favoriteClick={props.favoriteClick}
              deleteClick={props.deleteClick}
              updateClick={props.updateClick}
              isUpdating={props.isUpdating}
              key={index}
              contact={contact}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default GeneralContacts;
