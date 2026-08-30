import { useState } from "react";

function AddContact(props) {
  const [messages, setMessages] = useState({
    errorMessage: "",
    successMessage: "",
  });

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

      const response = props.handleAddContact(contactData);

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
            <h5>Add Contact</h5>
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
              type="text"
              className="form-control"
              placeholder="Name..."
            />
          </div>

          <div className="col-12 col-md-4 mb-2">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email..."
            />
          </div>

          <div className="col-12 col-md-4 mb-2">
            <input
              name="phone"
              type="text"
              className="form-control"
              placeholder="Phone..."
            />
          </div>

          <div className="col-12 text-center mt-3">
            <button className="btn btn-success px-4">Add Contact</button>

            <button type="reset" className="btn btn-secondary px-4 ms-2">
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
