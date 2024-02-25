import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function WhyChooseUs() {
  return (
    <>
      <Grid container display={"flex"} flexDirection={"row"} padding={8}>
        <Grid
          item
          xs={3}
          justifyContent={"center"}
          padding={3}
          textAlign={"center"}
        >
          <div>
            <img
              src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png"
              alt="World-img"
              width={60}
              height={60}
            />
          </div>
          <Typography variant="h6" fontWeight={600} fontSize={18} padding={1}>
            Worldwide Shipping
          </Typography>
          <Typography variant="p">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          justifyContent={"center"}
          padding={3}
          textAlign={"center"}
        >
          <div>
            <img
              src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png"
              alt="BestQuality-img"
              width={60}
              height={60}
            />
          </div>
          <Typography variant="h6" fontWeight={600} fontSize={18} padding={1}>
            Best Quality
          </Typography>
          <Typography variant="p">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          justifyContent={"center"}
          padding={3}
          textAlign={"center"}
        >
          <div>
            <img
              src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png"
              alt="BestOffers-img"
              width={60}
              height={60}
            />
          </div>
          <Typography variant="h6" fontWeight={600} fontSize={18} padding={1}>
            Best Offers
          </Typography>
          <Typography variant="p">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          justifyContent={"center"}
          padding={3}
          textAlign={"center"}
        >
          <div>
            <img
              src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png"
              alt="BSecurePayments-img"
              width={60}
              height={60}
            />
          </div>
          <Typography variant="h6" fontWeight={600} fontSize={18} padding={1}>
            Secure Payments
          </Typography>
          <Typography variant="p">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
