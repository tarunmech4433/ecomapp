import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SignIn />} path="sign-in" />
          {/* <Route element={<SignUp />} path="sign-up" /> */}
          <Route element={<Layout />}>
            <Route element={<Home />} path="" />
            <Route element={<About />} path="about" />
            <Route element={<Products />} path="products" />
            <Route element={<Product />} path="products/:id" />
            <Route element={<Cart />} path="cart" />
            <Route element={<Profile />} path="profile" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
