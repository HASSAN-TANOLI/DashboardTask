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
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      {/* showing navbar outside to main box it should be sticky to top */}
      <NavBar />

      <Box
        component="main"
        sx={{
          backgroundColor: "#F5F5F5",
          flexGrow: 1,
          minHeight: "100vh",
        }}
      >
        <Toolbar />

        {/* showing OrderDetails and RecentOrders component */}
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
        </Container>
      </Box>
      {/* showing Footer outside to main box it should be sticky to bottom */}
      <Footer />
    </Box>
  );
}

export default App;
