import axios from "axios";

const makePostAPICall = async (module, payload, data) => {
  let reponse = "";
  await axios
    .post(`http://localhost:8080/${module}`, payload)
    .then((res) => {
      reponse = res.data;
    })
    .catch((e) => {
      console.log("Error", e);
      reponse = e;
    });
   
  return reponse;
};

export default makePostAPICall;
