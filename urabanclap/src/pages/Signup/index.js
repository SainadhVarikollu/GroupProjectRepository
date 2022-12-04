import { NavLink } from "react-router-dom";
import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import SignupSubmit from "../../API/signup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signup.css";
import Header from "../../components/header";
const Signup = () => {
  return (
    <>
      <Header />
      <div className="mainDiv">
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          padding={2}
          borderRadius={2}
          boxShadow={"0px 5px 10px 0px "}
          backgroundColor="grey"
        >
          <h2>Register</h2>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              password: "",
              address: "",
            }}
            onSubmit={async (values) => {
              console.log("Values to submit", values);
              {
                SignupSubmit(values);
              }
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("please enter valid email")
                .required("Required"),
              password: Yup.string()
                .required("Required")
                .min(8, "Must be 8 characters or more")
                .matches(/[a-z]+/, "One lowercase character")
                .matches(/[A-Z]+/, "One uppercase character")
                .matches(/[@$!%*#?&]+/, "One special character")
                .matches(/\d+/, "One number"),
            })}
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
                  <Field
                    as={TextField}
                    label="FirstName"
                    sx={{
                      // width: { sm: 200, md: 300 },
                      "& .MuiInputBase-root": {
                        height: 40,
                      },
                    }}
                    type="text"
                    name="firtsName"
                    placeholder="Enter Firtst Name"
                    id="outlined-basic"
                    helperText={<ErrorMessage name="firstName" />}
                    variant="outlined"
                    value={values.fisrtName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    fullWidth
                  />
                  <Field
                    as={TextField}
                    label="lastName"
                    sx={{
                      // width: { sm: 200, md: 300 },
                      "& .MuiInputBase-root": {
                        height: 40,
                      },
                    }}
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    id="outlined-basic"
                    helperText={<ErrorMessage name="lastName" />}
                    variant="outlined"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    fullWidth
                  />

                  <Field
                    as={TextField}
                    label="Email"
                    sx={{
                      // width: { sm: 200, md: 300 },
                      "& .MuiInputBase-root": {
                        height: 40,
                      },
                    }}
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    id="outlined-basic"
                    helperText={<ErrorMessage name="email" />}
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                    fullWidth
                  />
                  <Field
                    as={TextField}
                    label="Phone"
                    sx={{
                      // width: { sm: 200, md: 300 },
                      "& .MuiInputBase-root": {
                        height: 40,
                      },
                    }}
                    type="text"
                    name="phone"
                    placeholder="Enter phone"
                    id="outlined-basic"
                    helperText={<ErrorMessage name="phone" />}
                    variant="outlined"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    fullWidth
                  />

                  <Field
                    as={TextField}
                    sx={{
                      // width: { sm: 200, md: 300 },
                      "& .MuiInputBase-root": {
                        height: 40,
                      },
                    }}
                    label="Password"
                    placeholder="Enter password"
                    name="password"
                    helperText={<ErrorMessage name="password" />}
                    type="password"
                    id="outlined-basic"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? "text-input error"
                        : "text-input"
                    }
                    fullWidth
                  />
                  <Field
                    as={TextField}
                    label="Address"
                    sx={{
                      // width: { sm: 200, md: 300 },
                      "& .MuiInputBase-root": {
                        height: 40,
                      },
                    }}
                    type="text"
                    name="address"
                    placeholder="Enter Your Address"
                    id="outlined-basic"
                    helperText={<ErrorMessage name="address" />}
                    variant="outlined"
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    fullWidth
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
                    Register
                  </Button>
                </Form>
              );
            }}
          </Formik>
          <br></br>
          <Typography>
            <NavLink to="/login" exact>
              Login
            </NavLink>
          </Typography>
        </Box>
      </div>
    </>
  );
};
export default Signup;
