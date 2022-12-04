import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {
  Grid,
  TextField,
  Button,
  Avatar,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
import {
  BookingHistory,
  EditBookService,
  BookingHistoryOld,
  DeleteBooking,
} from "../../API/bookingServices";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./bookingList.css";
import Header from "../../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookingList = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      service: "Plumbing",
      date: "01-10-2022",
      city: "Austin",
      time: "",
    },
    { id: 2, service: "Saloon", date: "01-10-2022", city: "Chicago", time: "" },
  ]);
  const [editFlag, setEditFlag] = useState(false);

  const [editData, setEditData] = useState(null);

  const handleEdit = (item) => {
    setEditData(item);
    setEditFlag(true);
  };

  const handleDelete = async (item) => {
    let data = await DeleteBooking(item?.id);
    getData();
  };

  const getData = async () => {
    let data = await BookingHistory();
    setServices(data);
    getData();
  };
  const getHistory = async () => {
    let data = await BookingHistoryOld();
    setServices(data);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <Header />

      {editFlag ? (
        <div>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={2}
            marginBottom={10}
            boxShadow={"0px 5px 10px 0px "}
            backgroundColor="white"
          >
            <Grid align="center">
              <h2>Update Service</h2>
            </Grid>
            <Formik
              initialValues={{
                city: editFlag ? editData.city : "",
                service: editFlag ? editData.service : "",
                date: editFlag ? editData.date : "",
                time: editFlag ? editData.time : "",
              }}
              onSubmit={async (values) => {
                console.log("Values to submit", values);
                EditBookService(values, editData?.id); 
              }}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {(props) => {
                props.submitCount > 0 && (props.validateOnChange = true);
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                } = props;
                return (
                  <Form>
                    <Select
                      value={values.city}
                      onChange={handleChange}
                      name="city"
                      label="city"
                      fullWidth
                    >
                      <MenuItem value={"NewYork"}>NewYork</MenuItem>
                      <MenuItem value={"Chicago"}>Chicago</MenuItem>
                      <MenuItem value={"Boston"}>Boston</MenuItem>
                      <MenuItem value={"Austin"}>Austin</MenuItem>
                      <MenuItem value={"Nashville"}>Nashville</MenuItem>
                      <MenuItem value={"Philladelphia"}>Philladelphia</MenuItem>
                    </Select>
                    <br></br>
                    <br></br>

                    <Select
                      value={values.service}
                      onChange={handleChange}
                      name="service"
                      label="service"
                      fullWidth
                    >
                      <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
                      <MenuItem value={"Electricity"}>Electricity</MenuItem>
                      <MenuItem value={"Carpenters"}>Carpenters</MenuItem>
                      <MenuItem value={"Saloon"}>Saloon</MenuItem>
                      <MenuItem value={"Home Painting"}>Home Painting</MenuItem>
                      <MenuItem value={"AC repair"}>AC repair</MenuItem>
                      <MenuItem value={"Cleaning"}>Cleaning</MenuItem>
                      <MenuItem value={"Pest Control"}>Pest Control</MenuItem>
                    </Select>
                    <TextField
                      fullWidth
                      id="date"
                      label="Date"
                      type="date"
                      style={{ marginTop: "5%" }}
                      value={values.date}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      fullWidth
                      id="time"
                      label="time"
                      type="time"
                      style={{ marginTop: "5%" }}
                      value={values.time}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <br></br>
                    <br></br>
                    <Button
                      type="submit"
                      sx={{
                        // width: { sm: 200, md: 300 },
                        "& .MuiInputBase-root": {
                          height: 40,
                        },
                      }}
                      color="primary"
                      variant="contained"
                      fullWidth
                      required
                      disabled={isSubmitting}
                    >
                      Update Service
                    </Button>
                  </Form>
                );
              }}
            </Formik>
            <br></br>
          </Box>
        </div>
      ) : (
        <div>
          <Grid>
           

            <Grid className="data">
              <Grid className="tableHeader" container xs={12}>
                <Grid className="header-item-row" xs={2} item>
                  {"Booking ID"}
                </Grid>
                <Grid className="header-item-row" xs={2} item>
                  {"Service"}
                </Grid>
                <Grid className="header-item-row" xs={2} item>
                  {"City"}
                </Grid>
                <Grid className="header-item-row" xs={2} item>
                  {"Date"}
                </Grid>
                <Grid className="header-item-row" xs={2} item>
                  {"Time"}
                </Grid>
                <Grid className="header-item-row" xs={1} item>
                  {"Edit"}
                </Grid>
                <Grid className="header-item-row" xs={1} item>
                  {"Delete"}
                </Grid>
              </Grid>
              {services.map((item) => {
                return (
                  <Grid container xs={12}>
                    <Grid className="header-item-row" xs={2} item>
                      {item.id}
                    </Grid>
                    <Grid className="header-item-row" xs={2} item>
                      {item.service}
                    </Grid>
                    <Grid className="header-item-row" xs={2} item>
                      {item.city}
                    </Grid>
                    <Grid className="header-item-row" xs={2} item>
                      {item.date}
                    </Grid>
                    <Grid className="header-item-row" xs={2} item>
                      {item.time}
                    </Grid>
                    <Grid
                      onClick={() => {
                        handleEdit(item);
                      }}
                      className="header-item-row"
                      xs={1}
                      item
                    >
                     <EditIcon/>
                    </Grid>
                    <Grid
                      className="header-item-row"
                      xs={1}
                      onClick={() => {
                        handleDelete(item);
                      }}
                      item
                    >
                    <DeleteIcon />
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default BookingList;
