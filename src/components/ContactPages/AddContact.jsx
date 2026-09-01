import { useEffect, useState } from "react";

function AddContact(props) {
  const [messages, setMessages] = useState({
    errorMessage: "",
    successMessage: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleInputChange(e) {
    // If you want to see / access / update the value typed on IO this is used for that

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  useEffect(() => {
    if (props.isUpdating && props.selectedUpdatedContact) {
      setFormData({
        name: props.selectedUpdatedContact.name,
        email: props.selectedUpdatedContact.email,
        phone: props.selectedUpdatedContact.phone,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    }
  }, [props.isUpdating, props.selectedUpdatedContact]);

  /* Standard way to submit the form */
  function handleAddContactForm(e) {
    e.preventDefault(); // Prevents re-render for the form

    const formData = new FormData(e.target);

    const contactData = {
      name: formData.get("name")?.trim(),
      email: formData.get("email")?.trim(),
      phone: formData.get("phone")?.trim(),
    };

    console.log("ContactData:", contactData);

    try {
      if (!contactData.name || !contactData.email || !contactData.phone) {
        throw new Error("All fields are required.");
      }

      const response =
        props.isUpdating && props.selectedUpdatedContact
          ? props.handleUpdateContact({
              ...contactData,
              id: props.selectedUpdatedContact.id,
              isFavorite: props.selectedUpdatedContact.isFavorite,
            })
          : props.handleAddContact(contactData);

      if (response.status === "success") {
        setMessages({
          errorMessage: undefined,
          successMessage: response.message,
        });
      } else {
        setMessages({
          errorMessage: response.message,
          successMessage: undefined,
        });
      }

      e.target.reset(); // Clear the form after successful submit
    } catch (error) {
      console.error(error.message);
    }
  }

  /* React-19 action is the new Approach
    Where the attribute 
        - onSumit ---> action
        - We does not require
            type="submit" if there is one single button within form
        - Instead of sending 'e' to the function it will be direct FormData.
  */

  function handleAddContactForm2(formData) {
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
    console.log("FormData from Action : ", contactData);
  }

  return (
    <div
      className="col-12 p-3"
      style={{
        border: "1px solid #555",
        borderRadius: "10px",
        backgroundColor: "#323637",
      }}
    >
      <form onSubmit={handleAddContactForm}>
        {/* <form action={handleAddContactForm2}> */}
        <div className="row">
          <div className="col-12 text-center text-white-50 mb-3">
            <h5>{props.isUpdating ? `Update` : `Add`} Contact</h5>
          </div>

          {/* Success Message */}
          {messages.successMessage && (
            <div className="col-12">
              <div className="alert alert-success py-2">
                Contact added successfully!
              </div>
            </div>
          )}

          {/* Error Message */}
          {messages.errorMessage && (
            <div className="col-12">
              <div className="alert alert-danger py-2">
                {messages.errorMessage}
              </div>
            </div>
          )}

          <div className="col-12 col-md-4 mb-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              className="form-control"
              placeholder="Name..."
            />
          </div>

          <div className="col-12 col-md-4 mb-2">
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              className="form-control"
              placeholder="Email..."
            />
          </div>

          <div className="col-12 col-md-4 mb-2">
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              type="text"
              className="form-control"
              placeholder="Phone..."
            />
          </div>

          <div className="col-12 text-center mt-3">
            <button className="btn btn-success px-4">
              {props.isUpdating ? "Update" : "Add"} Contact
            </button>

            {props.isUpdating && (
              <button
                onClick={props.handleCancelUpdateContact}
                type="reset"
                className="btn btn-secondary px-4 ms-2"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
