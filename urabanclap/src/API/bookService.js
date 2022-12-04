import makePostAPICall from "./index";
let id = localStorage.getItem("userId");
const module = `book`;
const  BookService = async (data) => {
  const payload = {
    city: data.city,
    service: data.service,
    userId: localStorage.getItem("userId"),
    date: data.date,
    time: data.time,
  };


  let res = await makePostAPICall(module, payload);
  if (res) {
    window.location.href = "/bookings";
  } else {
    return null;
  }
};
export default BookService;
