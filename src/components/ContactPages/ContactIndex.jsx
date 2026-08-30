import { useState } from "react";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";

function ContactIndex() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "Aditya",
      phone: 123,
      email: "aditya@gmail.com",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Rahul",
      phone: 456,
      email: "rahul@gmail.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Priya",
      phone: 789,
      email: "priya@gmail.com",
      isFavorite: false,
    },
  ]);

  /* This function is drilled down to children component and then invoked there to maniulate the list present in parent/grand-parent component */
  function handleToggleFavorite(contact) {
    setContactList((prevState) => {
      return prevState.map((x) => {
        if (x.id == contact.id) {
          return { ...x, isFavorite: !x.isFavorite };
        }
        return x;
      });
    });
  }

  function handleDeleteContact(contact) {
    console.log(contact);

    setContactList((prevState) => {
      return prevState.filter((x) => {
        if (x.id != contact.id) {
          return true;
        } else {
          return false;
        }
      });
    });
  }

  function handleAddContact(newContact) {
    if (!newContact.name?.trim()) {
      return {
        status: "error",
        message: "Name is required.",
      };
    }

    if (!newContact.email?.trim()) {
      return {
        status: "error",
        message: "Email is required.",
      };
    }

    if (!newContact.phone?.trim()) {
      return {
        status: "error",
        message: "Phone number is required.",
      };
    }

    const maxId = Math.max(...contactList.map((contact) => contact.id), 0);

    const newFinalContact = {
      ...newContact,
      id: maxId + 1,
      isFavorite: false,
    };

    setContactList((prevState) => [...prevState, newFinalContact]);

    return {
      status: "success",
      message: "Contact added successfully!!!",
    };
  }

  return (
    <>
      <div className="container" style={{ minHeight: "85vh" }}>
        <div className="py-3">
          <div className="row py-2">
            <div className="col-4">Add Contact</div>
            <div className="col-4">Remove Contact</div>
          </div>
          <div className="py-2">
            <div className="col-12">
              <AddContact handleAddContact={handleAddContact} />
            </div>
          </div>
          <div className="py-2">
            <div className="col-12">
              <FavoriteContacts
                favoriteClick={handleToggleFavorite}
                deleteClick={handleDeleteContact}
                contacts={contactList.filter((x) => x.isFavorite == true)}
              />
            </div>
          </div>
          <div className="py-2">
            <GeneralContacts
              favoriteClick={handleToggleFavorite}
              deleteClick={handleDeleteContact}
              contacts={contactList.filter((x) => x.isFavorite != true)}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactIndex;
