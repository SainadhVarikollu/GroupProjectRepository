import makePostAPICall from "./index";
const module = "user/login";
const LoginSubmit = async (data) => {
  const payload = {
    email: data.email,
    password: data.password,
  };
  let resp = await makePostAPICall(module, payload);
  console.log("Resp is", resp);
  console.log(resp.status,"resp.data.status")
  if (resp.status === "Failure") {
    console.log("Failure");
    alert("Invalid email or Password");
  } else {
    localStorage.setItem("userId", resp.userId);
    console.log('success');
    window.location.href = "/bookings";
  }
};
export default LoginSubmit;
