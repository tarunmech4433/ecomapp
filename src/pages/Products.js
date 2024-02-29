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
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

export default function Products() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event, value) => {
    setPage(value);
  };
  const getSearchProducts = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
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
  const getCategoryProducts = async (category) => {
    try {
      setLoading(true);
      setSelectedCategory(category);
      const result = await axios.get(
        `https://dummyjson.com/products/category/${category}`
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
  const clearCategories = () => {
    setSearch("");
    setSelectedCategory("");
    getAllProducts();
  };
  const getAllProducts = async () => {
    try {
      setLoading(true);
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
      <Filters
        setSearch={setSearch}
        search={search}
        selectedCategory={selectedCategory}
        getSearchProducts={getSearchProducts}
        getCategoryProducts={getCategoryProducts}
        clearCategories={clearCategories}
      />
      <Grid item xs={10}>
        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          gap={2}
        >
          {productsData?.products?.map((each) => (
            <ProductCard key={each?.id} productDetails={each} />
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
