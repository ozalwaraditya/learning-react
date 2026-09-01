import axios from "axios";

const getRandomUser = async () => {
  const url = new URL("https://randomuser.me/api");

  // standard
  const response = await fetch(url);

  const axiosReponse = await axios.get(url);

  if (!response.ok) {
    throw Error("HTTP Error! Status : " + response.status);
  }

  const data = (await response.json()) || axiosReponse.data;
  console.log(data);
  return data;
};

export default getRandomUser;
