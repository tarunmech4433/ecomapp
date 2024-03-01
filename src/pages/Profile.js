import { Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [userData, setUserData] = useState("");
  const token = Cookies.get("token");

  const getProfileDetails = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/auth/me", {
        headers: { Authorization: "Bearer " + token },
      });
      if (result.status === 200) {
        setUserData(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    getProfileDetails();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Typography marginTop={30} color={"red"} variant="h3" textAlign={"center"}>
      {userData?.id}
    </Typography>
  );
}
