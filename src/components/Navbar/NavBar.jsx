import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "#6E00EE" }}>
          <Toolbar>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>

            <IconButton
              size="large"
              aria-label="show 4 new notifications"
              color="inherit"
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
