import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Grid, Rating, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import axios from "axios";
import StarIcon from "@mui/icons-material/StarBorder";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

export default function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getProductDetails = async () => {
    try {
      const result = await axios.get(`https://dummyjson.com/product/${id}`);
      if (result.status === 200) {
        setProductData(result.data);
      } else {
        setProductData([]);
      }
      setLoading(false);
      setError(false);
      setErrorMessage("");
    } catch (error) {
      if (!axios.isCancel(error)) {
        setProductData([]);
        setLoading(false);
        setError(true);
        setErrorMessage(error.response.data);
      }
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    getProductDetails();
    return () => {
      abortController.abort();
    };
  }, []);

  if (loading) {
    return (
      <>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"90vh"}
        >
          <CircularProgress />
        </Grid>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"90vh"}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            {errorMessage}
          </Typography>
        </Grid>
      </>
    );
  }
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
      xs={12}
      marginTop={5}
    >
      <Grid container xs={7} display={"flex"} flexDirection={"row"} padding={2}>
        {productData?.images?.map((each) => (
          <Grid item key={each} paddingRight={1} paddingBottom={1}>
            <img src={each} alt="Item-Image" height={420} width={365} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        xs={5}
        padding={2}
        display={"flex"}
        flexDirection={"column"}
        rowSpacing={3}
      >
        <Grid item>
          <Typography variant="h5">{productData?.title}</Typography>
          <Typography variant="subtitle1" color={"grey"}>
            {productData?.description}
          </Typography>
        </Grid>
        <Grid item display={"flex"} flexDirection={"column"}>
          <Grid
            item
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <CurrencyRupeeIcon fontSize="medium" />
            <Typography variant="h5">{productData?.price}</Typography>
          </Grid>
          <Typography variant="p" color={"green"} fontWeight="bold">
            inclusive of all taxes
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="p" fontWeight={'bold'}>Rating</Typography>
          <Grid item display={"flex"} flexDirection={"row"}>
            <Rating name="read-only" value={productData?.rating} readOnly />
          </Grid>
        </Grid>
        <Grid item display={"flex"} flexDirection={"row"} columnGap={3}>
          <Button
            startIcon={<ShoppingCartIcon fontSize="medium" />}
            variant="contained"
            sx={{
              backgroundColor: "#ff9f00",
              padding: 2,
              fontweight: "bold",
              fontSize: 18,
              alignItems: "center",
            }}
          >
            Add to Cart
          </Button>
          <Button
            startIcon={<FlashOnIcon fontSize="medium" />}
            variant="contained"
            sx={{
              backgroundColor: "#fb641b",
              padding: 2,
              fontweight: "bold",
              fontSize: 18,
              alignItems: "center",
            }}
          >
            Buy Now!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
