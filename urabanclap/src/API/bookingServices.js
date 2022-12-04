import getCall from "./Get";
import makePostAPICall from "./index";
let id = localStorage.getItem("userId");
const module = `/user/bookings/ongoing/${id}`;
const EditBookService = async (data, id) => {
  const payload = {
    city: data.city,
    service: data.service,
    userId: localStorage.getItem("userId"),
    date: data.date,
    time: data.time,
    id: id,
  };
  let resp =  await makePostAPICall(`book`, payload);
  if (resp) {
    window.location.href = "/bookings";
  }

};



const BookingHistory = async () => {
  let resp = await getCall(module);
  return resp?.data;
};
const BookingHistoryOld = async () => {
  let resp = await getCall(module);
  return resp?.data;
};

const DeleteBooking = async (id) => {
  let url = "/booking/cancel/" + id;
  let resp = await getCall(url);
  return resp?.data;
};

export { EditBookService, BookingHistory, BookingHistoryOld, DeleteBooking };
