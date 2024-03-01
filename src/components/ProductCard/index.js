import React from "react";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ productDetails }) {
  const { thumbnail, title, rating, price, id } = productDetails;
  const navigate = useNavigate();

  return (
    <>
      <Grid
        item
        xs={12}
        md={2}
        padding={2}
        boxShadow={3}
        borderRadius={2}
        onClick={() => navigate(`${id}`)}
        sx={{ cursor: "pointer" }}
      >
        <div>
          <img src={thumbnail} alt="thumbnail" width={150} height={200} />
        </div>
        <Typography variant="body2" fontWeight={600}>
          {title}
        </Typography>
        <Grid item display={"flex"} flexDirection={"row"}>
          <Typography variant="body2">{rating}</Typography>
          <StarIcon fontSize="small" color="warning" />
        </Grid>
        <Grid item display={"flex"} flexDirection={"row"}>
          <CurrencyRupeeIcon fontSize="small" />
          <Typography variant="body2">{price}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
