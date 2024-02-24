import { Button, Grid, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function HeroSection() {
  return (
    <>
      <Grid
        container
        paddingX={10}
        paddingY={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={6}>
          <Typography
            variant="h1"
            color={"#415161"}
            lineHeight={0.9}
            fontFamily={"sans-serif Teko"}
            fontWeight={"bold"}
            marginBottom={2}
          >
            SHOP YOUR FAVORITES WITH EASYSHOP
          </Typography>
          <Button
            endIcon={<KeyboardDoubleArrowRightIcon fontSize="medium" />}
            variant="contained"
            fontFamily={"sans-serif Teko"}
            sx={{ padding: 2, fontWeight: 600, fontSize: 16 }}
          >
            EXPLORE MORE
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2020/02/boy-t2.png"
            alt="Men_image"
          />
        </Grid>
      </Grid>
    </>
  );
}
