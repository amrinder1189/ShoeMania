"use client";
import store from "./store";
import { Provider } from "react-redux";
import React, { Children } from "react";

const CartProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CartProvider;
