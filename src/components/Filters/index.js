import { Grid, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Filters({
  setSearch,
  search,
  selectedCategory,
  getSearchProducts,
  getCategoryProducts,
  clearCategories,
}) {
  return (
    <>
      <Grid container xs={2} height="50%">
        <form onSubmit={getSearchProducts}>
          <Grid item display={"flex"} flexDirection={"row"}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton
              aria-label="search"
              size="largehnkwj"
              color="primary"
              type="submit"
            >
              <SearchIcon fontSize="large" />
            </IconButton>
          </Grid>
        </form>
        <Grid container marginTop={2} rowGap={2}>
          <Grid
            container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <Typography color={"primary"} variant="h6" fontWeight={"bold"}>
                CATEGORIES
              </Typography>
            </Grid>
            {(selectedCategory || search) && (
              <Grid item>
                <Typography
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={clearCategories}
                >
                  Clear
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid container display={"flex"} flexDirection={"column"}>
            <Grid item>
              <Typography fontWeight={"bold"}>Electronics</Typography>
            </Grid>
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              paddingLeft={1}
            >
              <Typography
                onClick={() => {
                  getCategoryProducts("smartphones");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "smartphones" ? "primary" : ""}
                fontWeight={selectedCategory === "smartphones" ? "bold" : ""}
              >
                Smartphones
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("laptops");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "laptops" ? "primary" : ""}
                fontWeight={selectedCategory === "laptops" ? "bold" : ""}
              >
                Laptops
              </Typography>
            </Grid>
          </Grid>
          <Grid container display={"flex"} flexDirection={"column"}>
            <Grid item>
              <Typography fontWeight={"bold"}>Women</Typography>
            </Grid>
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              paddingLeft={1}
            >
              <Typography
                onClick={() => {
                  getCategoryProducts("womens-dresses");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "womens-dresses" ? "primary" : ""}
                fontWeight={selectedCategory === "womens-dresses" ? "bold" : ""}
              >
                Womens Dresses
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("womens-shoes");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "womens-shoes" ? "primary" : ""}
                fontWeight={selectedCategory === "womens-shoes" ? "bold" : ""}
              >
                Womens Shoes
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("womens-watches");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "womens-watches" ? "primary" : ""}
                fontWeight={selectedCategory === "womens-watches" ? "bold" : ""}
              >
                Womens Watches
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("womens-bags");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "womens-bags" ? "primary" : ""}
                fontWeight={selectedCategory === "womens-bags" ? "bold" : ""}
              >
                Womens Bags
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("womens-jewellery");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "womens-jewellery" ? "primary" : ""}
                fontWeight={
                  selectedCategory === "womens-jewellery" ? "bold" : ""
                }
              >
                Womens Jewellery
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("tops");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "tops" ? "primary" : ""}
                fontWeight={selectedCategory === "tops" ? "bold" : ""}
              >
                Tops
              </Typography>
            </Grid>
          </Grid>
          <Grid container display={"flex"} flexDirection={"column"}>
            <Grid item>
              <Typography fontWeight={"bold"}>Mens</Typography>
            </Grid>
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              paddingLeft={1}
            >
              <Typography
                onClick={() => {
                  getCategoryProducts("mens-shirts");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "mens-shirts" ? "primary" : ""}
                fontWeight={selectedCategory === "mens-shirts" ? "bold" : ""}
              >
                Mens Shirts
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("mens-shoes");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "mens-shoes" ? "primary" : ""}
                fontWeight={selectedCategory === "mens-shoes" ? "bold" : ""}
              >
                Mens Shoes
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("mens-watches");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "mens-watches" ? "primary" : ""}
                fontWeight={selectedCategory === "mens-watches" ? "bold" : ""}
              >
                Mens Watches
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("sunglasses");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "sunglasses" ? "primary" : ""}
                fontWeight={selectedCategory === "sunglasses" ? "bold" : ""}
              >
                Sunglasses
              </Typography>
            </Grid>
          </Grid>
          <Grid container display={"flex"} flexDirection={"column"}>
            <Grid item>
              <Typography fontWeight={"bold"}>Home & Living</Typography>
            </Grid>
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              paddingLeft={1}
            >
              <Typography
                onClick={() => {
                  getCategoryProducts("home-decoration");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "home-decoration" ? "primary" : ""}
                fontWeight={
                  selectedCategory === "home-decoration" ? "bold" : ""
                }
              >
                Home Decoration
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("furniture");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "furniture" ? "primary" : ""}
                fontWeight={selectedCategory === "furniture" ? "bold" : ""}
              >
                Furniture
              </Typography>
            </Grid>
          </Grid>
          <Grid container display={"flex"} flexDirection={"column"}>
            <Grid item>
              <Typography fontWeight={"bold"}>Beauty</Typography>
            </Grid>
            <Grid
              item
              display={"flex"}
              flexDirection={"column"}
              paddingLeft={1}
            >
              <Typography
                onClick={() => {
                  getCategoryProducts("skincare");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "skincare" ? "primary" : ""}
                fontWeight={selectedCategory === "skincare" ? "bold" : ""}
              >
                Skincare
              </Typography>
              <Typography
                onClick={() => {
                  getCategoryProducts("fragrances");
                }}
                sx={{ cursor: "pointer" }}
                color={selectedCategory === "fragrances" ? "primary" : ""}
                fontWeight={selectedCategory === "fragrances" ? "bold" : ""}
              >
                Fragrances
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
