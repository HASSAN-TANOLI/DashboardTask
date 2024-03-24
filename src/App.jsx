import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import NavBar from "./components/Navbar/NavBar";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import RecentOrder from "./components/OrderDetails/RecentOrder";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://devhassan.netlify.app/"
        target="_blank"
        rel="noopener"
      >
        devhassan
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <NavBar />

      <Box
        component="main"
        sx={{
          backgroundColor: "#F5F5F5",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <OrderDetails />
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <RecentOrder />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
