import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material/";

const Title = (props) => {
  return (
    <>
      <Typography
        component="h2"
        variant="h6"
        gutterBottom
        sx={{ color: "#6D2AF0" }}
      >
        {props.children}
      </Typography>
    </>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
