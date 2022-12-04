import { NavLink } from "react-router-dom";
import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import LoginSubmit from "../../API/login";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../../components/header";
import "./login.css";
const Login = () => {
  const forgotStyle = {
    flexGrow: 1,
    textAlign: "left",
  };
  const avatarStyle = { backgroundColor: "blue" };

  return (
    <>
      <Header />
      <div className="mainDivlogin">
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
          borderRadius={5}
          boxShadow={"0px 5px 10px 0px "}
          backgroundColor="grey"
        >
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2>Login</h2>
          </Grid>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              console.log("Values to submit", values);
              {
                LoginSubmit(values);
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
                    label="Email"
                    sx={{
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
                    Login
                  </Button>
                </Form>
              );
            }}
          </Formik>
          <br></br>

          <Typography>
            {" "}
            <NavLink to="/signup" exact>
              Sign Up
            </NavLink>
          </Typography>
        </Box>
      </div>
    </>
  );
};
export default Login;
