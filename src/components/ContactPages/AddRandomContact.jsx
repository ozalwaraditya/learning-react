import getRandomUser from "../../utility/api.jsx";

function AddRandomContact(props) {
  async function handleRandomUser() {
    try {
      const data = await getRandomUser();

      const user = data.results[0];

      const contact = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
      };

      //   onAddContact(contact);
      console.log(contact);
      props.handleAddRandomContact(contact);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button onClick={handleRandomUser} className="btn btn-success form-control">
      Add Random User
    </button>
  );
}

export default AddRandomContact;
