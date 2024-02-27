import {
  Box,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const getAllProducts = async () => {
    try {
      const result = await axios.get(
        `https://dummyjson.com/products?limit=${pageSize}&skip=${
          pageSize * (page - 1)
        }`
      );
      if (result.status === 200) {
        setProductsData(result.data);
      } else {
        setProductsData([]);
      }
      setLoading(false);
      setError(false);
      setErrorMessage("");
    } catch (error) {
      if (!axios.isCancel(error)) {
        setProductsData([]);
        setLoading(false);
        setError(true);
        setErrorMessage(error.response.data);
      }
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    getAllProducts();
    return () => {
      abortController.abort();
    };
  }, [page, pageSize]);

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
    <Grid container padding={3}>
      <Grid item xs={2} height="50%">
        <Typography>Filters</Typography>
      </Grid>

      <Grid item xs={10}>
        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          gap={2}
        >
          {productsData?.products?.map((each) => (
            <Grid
              key={each?.id}
              item
              xs={12}
              md={2}
              padding={2}
              boxShadow={3}
              borderRadius={2}
              onClick={() => navigate(`${each?.id}`)}
              sx={{ cursor: "pointer" }}
            >
              <div>
                <img
                  src={each?.images[0]}
                  alt="Item-Image"
                  width={160}
                  height={200}
                />
              </div>
              <Typography variant="body2" fontWeight={600}>
                {each?.title}
              </Typography>
              <Grid item display={"flex"} flexDirection={"row"}>
                <Typography variant="body2">{each?.rating}</Typography>
                <StarIcon fontSize="small" color="warning"  />
              </Grid>
              <Grid item display={"flex"} flexDirection={"row"}>
                <CurrencyRupeeIcon fontSize="small" />
                <Typography variant="body2">{each?.price}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          marginBottom={2}
          marginTop={3}
          display="flex"
          flexDirection={"row"}
          justifyContent={"space-between"}
          gap={2}
        >
          <Grid item>
            <Stack spacing={2} marginTop={2}>
              <Pagination
                count={Math.ceil(productsData?.total / pageSize)}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </Grid>
          <Grid item>
            <Box sx={{ width: 120, height: 10 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Rows per page
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pageSize}
                  label="Rows per page"
                  onChange={(e) => setPageSize(e.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
