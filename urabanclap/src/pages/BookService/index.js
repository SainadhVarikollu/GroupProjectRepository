import { NavLink } from "react-router-dom";
import React from "react";
import {
  Grid,
  MenuItem,
  Select,
  TextField,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import BookService from "../../API/bookService";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signup.css";
import Header from "../../components/header";
const Signup = () => {
  const forgotStyle = {
    flexGrow: 1,
    textAlign: "left",
  };
  const avatarStyle = { backgroundColor: "blue" };

  return (
    <>
      <Header />
      <div className="mainDivSignup">
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
            <Avatar style={avatarStyle}></Avatar>
            <h2>Book Service</h2>
          </Grid>
          <Formik
            initialValues={{
              city: "",
              service: "",
              date: "",
              time: "",
            }}
            onSubmit={async (values) => {
              console.log("Values to submit", values);
              {
                {
                  BookService(values);
                }
              }
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
                <p>Select City</p>
                  <Select
                    value={values.age}
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
                  <p>Select Service</p>
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

                  <p>Select Date</p>
                  <TextField
                    fullWidth
                    id="date"
                    label="Service Date"
                    type="date"
                    style={{ marginTop: "5%" }}
                    value={values.date}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <p>Select Time</p>
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
                    Book Service
                  </Button>
                </Form>
              );
            }}
          </Formik>
          <br></br>
        </Box>
      </div>
    </>
  );
};
export default Signup;
