import React, { useEffect } from "react";
// import DesktopLogo from "../assets/images/desktop-logo.png";
// import MobileLogo from "../assets/images/mobile-logo.png";
import "../App.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
	const showNav = () => {
		document.querySelector(".mobile-nav").classList.remove("-translate-x-[166.7%]");
	};
	const hideNav = () => {
		document.querySelector(".mobile-nav").classList.add("-translate-x-[166.7%]");
	};

	const hide = () => {
		document.querySelector(".mobile-nav").classList.add("-translate-x-[166.7%]");
	};

	return (
			<div className="sticky top-0 right-0 left-0 font-futuraMD">
 				<div className="flex items-center md:gap-x-[3.5rem]">
					<nav className="desktop-nav hidden md:block font-medium">
						<ul className="flex gap-x-[2rem]">
							<li className="">
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
									to="/"
								>
									Home
								</NavLink>
							</li>
							<li className="">
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
									to="/products"
								>
									Products
								</NavLink>
							</li>
							<li className="">
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
									to="/routines"
								>
									Routines
								</NavLink>
							</li>
							<li className="">
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
									to="/about"
								>
									About Us
								</NavLink>
							</li>
						</ul>
					</nav>
					
					<div className="flex flex-col gap-[0.33rem] md:hidden" onClick={showNav}>
						<span className="w-[28px] h-[3px] bg-black rounded-[4px]"></span>
						<span className="w-[28px] h-[3px] bg-black rounded-[4px]"></span>
						<span className="w-[28px] h-[3px] bg-black rounded-[4px]"></span>
					</div>
				</div>
				<nav className="mobile-nav fixed h-screen w-[60%] bg-white left-0 top-0 p-6 pt-[3rem] -translate-x-[166.7%] transition-transform duration-[650ms] md:hidden z-10">
					<div className="flex flex-col gap-[0.33rem] mb-9 cursor-pointer w-[fit-content]" onClick={hideNav}>
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
								to="/"
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
								to="/routines"
								className="font-medium"
							>
								Routines
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
								to="/about"
								className="font-medium"
							>
								About Us
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
	);
};

export default Navbar;
