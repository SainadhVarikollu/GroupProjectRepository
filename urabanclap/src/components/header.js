import logo from "../Images/logo.jpg";
import { Grid } from "@mui/material";
const Header = () => {
  return (
    <div style={{ width: "100%", background: "black" }}>
      <Grid container>
        <Grid item xs={8}>
          <img height="100px" src={logo} alt="logo" />
        </Grid>
        <Grid item xs={4} style={{ paddingRight: "2%" }}>
          <Grid container>
            <Grid item xs={4}>
              {localStorage.getItem("userId") && (
                <p
                  style={{ color: "white", textAlign: "right" }}
                  onClick={() => {
                    window.location.href = "/bookings";
                  }}
                >
                  Go to Bookings
                </p>
              )}
            </Grid>
            <Grid item xs={4}>
              {localStorage.getItem("userId") && (
                <p
                  style={{ color: "white", textAlign: "right" }}
                  onClick={() => {
                    window.location.href = "/bookservice";
                  }}
                >
                Book Service
                </p>
              )}
            </Grid>
            {localStorage.getItem("userId") && (
              <Grid item xs={4}>
                <p
                  style={{ color: "white", textAlign: "right" }}
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/login";
                  }}
                >
                  Logout
                </p>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Header;
