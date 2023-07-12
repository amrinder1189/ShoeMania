"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const Menu = () => {
  const [showsubMenu, setshowsubmenu] = useState(false);

  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
  ];

  return (
    <div>
      <ol className="flex  w-130 z-50 ">
        {data?.map((item) => {
          return item.subMenu ? (
            <Fragment>
              <li
                key={item.id}
                className="m-2  relative "
                onMouseEnter={() => setshowsubmenu(!showsubMenu)}
                onMouseLeave={() => setshowsubmenu(!showsubMenu)}
              >
                <span className="flex items-center z-50">
                  {item.name}
                  <AiOutlineCaretDown />
                </span>
                {showsubMenu && (
                  <div className="">
                    <div className=" border-2	  w-96  h-10 	z-10	flex  absolute -top-2 right-02 ">
                      {item?.subMenu
                        ? subMenuData.map((ite) => (
                            <p
                              className="bg-white p-2 hover:bg-black hover:text-white  cursor-pointer text-sm	 "
                              key={ite.id}
                            >
                              {ite.name}
                            </p>
                          ))
                        : null}
                    </div>
                  </div>
                )}
              </li>
            </Fragment>
          ) : (
            <li key={item.id} className="m-2  flex items-center">
              <Link href={item.url}>{item.name}</Link>
              {item?.subMenu ? <AiOutlineCaretDown className="" /> : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Menu;
