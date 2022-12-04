import axios from "axios";
const getCall = async (module) => {
  let reponse = "";
  await axios
    .get(`http://localhost:8080${module}`)
    .then((res) => {
      reponse = res;
    })
    .catch((e) => {
      reponse = e;
    });
  return reponse;
};

export default getCall;
