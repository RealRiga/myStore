import React, { useEffect } from "react";
import headerLogo from "../assets/mystore-logo.svg";
import shopCart from "../assets/shopping-cart.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../cartSlice";
import { NavLink } from "react-router-dom";

function Header() {
  const history = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const showNav = () => {
    document
      .querySelector(".mobile-nav")
      .classList.remove("-translate-x-[166.7%]");
  };
  const hideNav = () => {
    document
      .querySelector(".mobile-nav")
      .classList.add("-translate-x-[166.7%]");
  };

  const hide = () => {
    document
      .querySelector(".mobile-nav")
      .classList.add("-translate-x-[166.7%]");
  };

  return (
    <div
      className="flex items-center py-2 border border-t-0 border-b-2 w-screen px-10 md:px-7 lg:px-12 mt-2  sticky top-0 left-0 right-0 bg-white"
      style={{ zIndex: 10 }}
    >
      <div className="flex-1 flex justify-center">
        <img
          src={headerLogo}
          className="hover:cursor-pointer"
          onClick={() => history("/")}
        />
      </div>
      <div className="sticky top-0 right-0 left-0 font-futuraMD">
        <div className="flex items-center md:gap-x-[3.5rem]">
          <nav className="desktop-nav hidden md:block font-medium">
            <ul className="flex gap-x-[2rem] mr-4">
              <li className="py-3">
                <NavLink
                  style={({ isActive }) =>
                    location.pathname == "/"
                      ? {
                          color: "#0D4E13",
                          borderBottom: "3px solid #0D4E13",
                          borderRadius: "1.5px",
                          paddingBottom: "3px",
                        }
                      : null
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#0D4E13",
                          borderBottom: "3px solid #0D4E13",
                          borderRadius: "1.5px",
                          paddingBottom: "3px",
                        }
                      : null
                  }
                  to="/Products"
                >
                  Products
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#0D4E13",
                          borderBottom: "3px solid #0D4E13",
                          borderRadius: "1.5px",
                          paddingBottom: "3px",
                        }
                      : null
                  }
                  to="/special-offers"
                >
                  Special Offers
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#0D4E13",
                          borderBottom: "3px solid #0D4E13",
                          borderRadius: "1.5px",
                          paddingBottom: "3px",
                        }
                      : null
                  }
                  to="/new-arrivals"
                >
                  New Arrivals
                </NavLink>
              </li>
              <li className="py-3">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#0D4E13",
                          borderBottom: "3px solid #0D4E13",
                          borderRadius: "1.5px",
                          paddingBottom: "3px",
                        }
                      : null
                  }
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </li>

              <li className="py-3">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#0D4E13",
                          borderBottom: "3px solid #0D4E13",
                          borderRadius: "1.5px",
                          paddingBottom: "3px",
                        }
                      : null
                  }
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </nav>

          <div
            className="flex flex-col gap-[0.33rem] md:hidden mr-4"
            onClick={showNav}
          >
            <span className="w-[28px] h-[3px] bg-black rounded-[4px]"></span>
            <span className="w-[28px] h-[3px] bg-black rounded-[4px]"></span>
            <span className="w-[28px] h-[3px] bg-black rounded-[4px]"></span>
          </div>
        </div>
        <nav className="mobile-nav fixed h-screen w-[60%] bg-white left-0 top-0 p-6 pt-[3rem] -translate-x-[166.7%] transition-transform duration-[650ms] md:hidden z-10">
          <div
            className="flex flex-col gap-[0.33rem] mb-9 cursor-pointer w-[fit-content]"
            onClick={hideNav}
          >
            <span className="w-[28px] h-[3px] bg-black rounded-[4px] -rotate-45 translate-y-2"></span>
            <span className="w-[28px] h-[3px] bg-black rounded-[4px] rotate-45"></span>
          </div>
          <ul className="">
            <li className="py-3">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#0D4E13",
                        borderBottom: "3px solid #0D4E13",
                        borderRadius: "1.5px",
                        paddingBottom: "3px",
                      }
                    : null
                }
                onClick={hide}
                to="/Home"
                className="font-medium"
              >
                Home
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#0D4E13",
                        borderBottom: "3px solid #0D4E13",
                        borderRadius: "1.5px",
                        paddingBottom: "3px",
                      }
                    : null
                }
                onClick={hide}
                to="/products"
                className="font-medium"
              >
                Products
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#0D4E13",
                        borderBottom: "3px solid #0D4E13",
                        borderRadius: "1.5px",
                        paddingBottom: "3px",
                      }
                    : null
                }
                onClick={hide}
                to="/Special"
                className="font-medium"
              >
                Special Offers
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#0D4E13",
                        borderBottom: "3px solid #0D4E13",
                        borderRadius: "1.5px",
                        paddingBottom: "3px",
                      }
                    : null
                }
                to="/New Arrival"
              >
                New Arrival
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#0D4E13",
                        borderBottom: "3px solid #0D4E13",
                        borderRadius: "1.5px",
                        paddingBottom: "3px",
                      }
                    : null
                }
                to="/Contact Us"
              >
                Contact Us
              </NavLink>
            </li>

            <li className="py-3">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#0D4E13",
                        borderBottom: "3px solid #0D4E13",
                        borderRadius: "1.5px",
                        paddingBottom: "3px",
                      }
                    : null
                }
                onClick={hide}
                to="/About Us"
                className="font-medium"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <img
        src={shopCart}
        className="hover:cursor-pointer"
        onClick={() => history("/cart")}
      />
      <span className="flex items-center justify-center rounded-xl bg-blue-500 text-white ml-1 h-5 w-5 text-xs font-bold absolute right-8 md:right-4 lg:right-10 top-2">
        <span>{cart?.qty}</span>
      </span>
    </div>
  );
}

export default Header;
