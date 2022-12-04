import makePostAPICall from "./index";
const module = "user/register";
const SignupSubmit = async (data) => {
  const payload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    password: data.password,
    address: data.address,
  };
  let resp = await makePostAPICall(module, payload);

  console.log(resp);
  if (resp?.data?.status === "Failure") {
    alert("Something wrong happen");
  } else if (resp?.data?.status == "Success") {
    window.location.href = "/login";
  }
};
export default SignupSubmit;
