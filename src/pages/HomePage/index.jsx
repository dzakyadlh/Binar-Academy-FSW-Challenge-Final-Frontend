import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGames, data } from "./reducer";
import { useNavigate } from "react-router";
import {
  Card,
  Box,
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import imgBp from "../../assets/Home_Page_Big_Picture.jpg";
import "./home.css";

const HomePage = () => {
  const user = localStorage.getItem("username");
  const games = useSelector(data);
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(getGames());
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  console.log(games);

  return (
    <React.Fragment>
      <div className="container-lp">
        <Card
          sx={{
            display: "flex",
            width: 1,
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                sx={{ width: 1 }}
                style={{ fontWeight: "bold", color: "#5551FF" }}
              >
                <span style={{ color: "black" }}>Hi,</span> {user}
              </Typography>
              <p>Start playing games on our website now!!</p>
            </CardContent>
            <CardActions style={{ marginBottom: "20px", marginTop: "30px" }}>
              <Button
                size="md"
                style={{
                  frontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: "10px",
                }}
                onClick={() => handleClick("/about")}
              >
                about us
              </Button>
            </CardActions>
          </Box>
          <CardMedia
            sx={{
              width: "50%",
              height: "450px",
              maxWidth: "50%",
              backgroundPosition: "top",
            }}
            image={imgBp}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
          ></CardMedia>
        </Card>
      </div>
      <div className="container-lp-2">
        <Grid container spacing={3}>
          {games?.data?.result?.map((row, index) => (
            <Grid key={index} item xs={4}>
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    style={{
                      fontWeight: "bold",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                    component="div"
                  >
                    {row.name}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt=""
                  height="100%"
                  image={row.image}
                  style={{
                    padding: "20px 20px",
                    borderRadius: "25px",
                    height: "300px",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
