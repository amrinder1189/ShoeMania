"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { LoadedAddtoCartFirstTime } from "../Store/cartSlice";
import Image from "next/image";
import Menu from "../components/Menu";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  const { isLoading, cart } = useSelector((state) => state.cart);
  const { user, isAuth } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const data = localStorage.getItem("cart");
      // console.log(JSON.parse(data), "cart data ha ji");

      dispatch(LoadedAddtoCartFirstTime(JSON.parse(data)));
    }
  }, []);

  return (
    <div className="w-100 h-16 justify-around	items-center drop-shadow-md	  flex flex-row z-50">
      <div className="	">
        <Link href="/">
          <Image src="/logo.svg" width="40" height="40" />
        </Link>
      </div>
      <Menu />
      <ol className="flex ">
        <li className="text-xs mr-2">
          {isAuth ? (
            "Welcome " + user.user.username.toUpperCase() + "😁"
          ) : (
            <Link href="/login">Login</Link>
          )}
        </li>
        <li className="relative">
          <Link href="/cart">
            <AiOutlineShoppingCart />
            <span className="absolute h-4 w-4 text-xs flex items-center justify-center bg-red-600 -top-3 -right-3 text-white rounded-full border ">
              {cart?.length}
            </span>
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Header;
