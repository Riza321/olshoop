import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "upkit/dist/style.min.css";
import store from "./app/store";
import Home from "./pages/Home";
import { listen } from "./app/listener";
import Register from "./pages/Register";
import RegisterSuccess from "./pages/RegisterSuccess";
import Login from "./pages/Login";
import { getCart } from "./api/cart";
import UserAddressAdd from "./pages/UserAddressAdd";
import UserAddress from "./pages/UserAddress";
import Checkout from "./pages/Checkout";
import Invoice from "./pages/Invoice";
import UserAccount from "./pages/UserAccount";
import UserOrders from "./pages/UserOrders";
import Logout from "./pages/Logout";
import GuardRoute from "./components/GuardRoute";
import GuestOnlyRoute from "./components/GuestOnlyRoute";
import GuardAdminRoute from "./components/GuardAdminRoute";
import ManagementProduct from "./pages/ManagementProduct";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";

function App() {
  React.useEffect(() => {
    listen();
    getCart();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <GuardRoute path="/logout">
            <Logout />
          </GuardRoute>
          <GuardRoute path="/pesanan">
            <UserOrders />
          </GuardRoute>
          <GuardRoute path="/account">
            <UserAccount />
          </GuardRoute>
          <GuardRoute path="/invoice/:order_id">
            <Invoice />
          </GuardRoute>
          <GuardRoute path="/checkout">
            <Checkout />
          </GuardRoute>
          <GuardRoute path="/alamat-pengiriman/tambah">
            <UserAddressAdd />
          </GuardRoute>
          <GuardRoute path="/alamat-pengiriman">
            <UserAddress />
          </GuardRoute>
          <GuestOnlyRoute path="/register/berhasil">
            <RegisterSuccess />
          </GuestOnlyRoute>
          <GuardAdminRoute path="/manajemen-produk/tambah">
            <ProductAdd />
          </GuardAdminRoute>
          <GuardAdminRoute path="/edit-produk/:product_id">
            <ProductEdit />
          </GuardAdminRoute>
          <GuardAdminRoute path="/manajemen-produk">
            <ManagementProduct />
          </GuardAdminRoute>
          <GuestOnlyRoute path="/register">
            <Register />
          </GuestOnlyRoute>
          <GuestOnlyRoute path="/login">
            <Login />
          </GuestOnlyRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
