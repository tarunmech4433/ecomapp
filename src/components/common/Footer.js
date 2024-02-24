import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { about, address, help, otherLinks } from "../../data/footer";

export default function Footer() {
  return (
    <>
      <footer>
        <Grid
          container
          style={{ backgroundColor: "#565252" }}
          display={"flex"}
          flexDirection={"row"}
          padding={3}
          color={"white"}
        >
          <Grid item lg={4} align="left">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocalMallIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                EasyShop
              </Typography>
            </div>
            {address.map((content) => (
              <Typography key={content}>{content}</Typography>
            ))}
          </Grid>
          <Grid item lg={2} align="left">
            <Typography fontWeight={600} marginBottom={1}>
              HELP
            </Typography>
            {help.map((content) => (
              <Typography key={content}>{content}</Typography>
            ))}
          </Grid>
          <Grid item lg={2} align="left">
            <Typography fontWeight={600} marginBottom={1}>
              ABOUT
            </Typography>
            {about.map((content) => (
              <Typography key={content}>{content}</Typography>
            ))}
          </Grid>
          <Grid item lg={2} align="left">
            <Typography fontWeight={600} marginBottom={1}>
              OTHER LINKS
            </Typography>
            {otherLinks.map((content) => (
              <Typography key={content}>{content}</Typography>
            ))}
          </Grid>
          <Grid item lg={2} align="left" gap={2}>
            <Typography fontWeight={600} marginBottom={1}>
              SOCIAL MEDIA
            </Typography>
            <Box>
              <FacebookIcon sx={{ mr: 1 }} />
              <InstagramIcon sx={{ mr: 1 }} />
              <TwitterIcon sx={{ mr: 1 }} />
            </Box>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
