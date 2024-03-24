import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Link,
} from "@mui/material";

const cardData = [
  {
    cardHeading: "Recent Deposits",
    totalAmount: "$3,024.00",
    date: "on 15 March, 2019",
    btnTxt: "View balance",
  },

  {
    cardHeading: "Total Orders",
    totalAmount: "$324",
    date: "on 16 March, 2019",
    btnTxt: "View inventory",
  },

  {
    cardHeading: "Orders Shipped",
    totalAmount: "$200",
    date: "on 15 March, 2019",
  },

  // {
  //   cardHeading: "Orders Shipped",
  //   totalAmount: "$200",
  //   date: "on 15 March, 2019",
  // },

  // {
  //   cardHeading: "Orders Shipped",
  //   totalAmount: "$200",
  //   date: "on 15 March, 2019",
  // },
];

const OrderDetails = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        {cardData.map((data, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "240px",
                padding: "16px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "1.25rem",
                    color: "#6D2AF0",
                    fontWeight: "500",
                    marginBottom: "0.35rem",
                    lineHeight: "1.6",
                    letterSpacing: "0.0075em",
                    padding: "0px",
                  }}
                >
                  {data.cardHeading}
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "2.125rem",
                    lineHeight: "1.235",
                    letterSpacing: "0.00735em",
                    color: "#000000",
                    fontWeight: "400",
                  }}
                >
                  {data.totalAmount}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    letterSpacing: "0.00938em",
                    color: "rgba(0, 0, 0, 0.6)",
                    fontWeight: "400",
                    flex: "1",
                  }}
                >
                  {data.date}
                </Typography>
              </CardContent>

              {data.btnTxt && (
                <CardActions sx={{ marginTop: "auto" }}>
                  <Link
                    href="#"
                    sx={{
                      fontSize: "16px",
                      color: "#6D2AF0",
                      fontWeight: "400",
                      textTransform: "initial",
                      textDecoration: "underline",
                      textDecorationColor: "rgba(25, 118, 210, 0.4)",
                      lineHeight: "1rem",
                      padding: "0px",
                    }}
                  >
                    {data.btnTxt}
                  </Link>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OrderDetails;
