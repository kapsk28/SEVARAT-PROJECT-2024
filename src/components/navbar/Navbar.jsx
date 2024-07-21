import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import svLogo from "../../../public/img/sv_logo.png"; // Import the image

const Navbar = () => {
    const [location, setLocation] = useState(""); // State for location
    const [showDropdown, setShowDropdown] = useState(false); // State for showing/hiding dropdown
    const [showStatesDropdown, setShowStatesDropdown] = useState(false); // State for showing/hiding states dropdown

    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // Function to track user's current location
    const trackLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
            }, (error) => {
                console.error("Error getting location:", error);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    // Function to handle selection of "Use Current Location" option
    const useCurrentLocation = () => {
        trackLocation();
        setShowDropdown(false);
    };

    // Function to handle selection of "Choose Manually" option
    const chooseManually = () => {
        setShowStatesDropdown(!showStatesDropdown);
        setShowDropdown(false);
    };

    // Toggle dropdown menu visibility
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // States of India
    const states = [
        "Andhra Pradesh",
        "Bihar",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Madhya Pradesh",
        "Maharashtra",
        "Punjab",
        "Rajasthan",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
    ];

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link to={'/'} className="hover:text-yellow-500">Home</Link>
            </li>
            <li className="text-yellow-500">|</li>

            {/* All Services */}
            <li>
                <Link to={'/allproduct'} className="hover:text-yellow-500">Services</Link>
            </li>
            <li className="text-yellow-500">|</li>

            {/* Signup */}
            {!user ? <>
                <li>
                    <Link to={'/signup'} className="hover:text-yellow-500">Signup</Link>
                </li>
                <li className="text-yellow-500">|</li>
                <li>
                    <Link to={'/login'} className="hover:text-yellow-500">Login</Link>
                </li>
            </> : ""}
            {!user && <li className="text-yellow-500">|</li>}

            {/* User */}
            {user?.role === "user" && <>
                <li>
                    <Link to={'/user-dashboard'} className="hover:text-yellow-500">User</Link>
                </li>
                <li className="text-yellow-500">|</li>
            </>}

            {/* Admin */}
            {user?.role === "admin" && <>
                <li>
                    <Link to={'/admin-dashboard'} className="hover:text-yellow-500">Admin</Link>
                </li>
                <li className="text-yellow-500">|</li>
            </>}

            {/* logout */}
            {user && <>
                <li className=" cursor-pointer" onClick={logout}>
                    <span className="hover:text-yellow-500">Logout</span>
                </li>
                <li className="text-yellow-500">|</li>
            </>}

            {/* Cart */}
            <li>
                <Link to={'/cart'} className="hover:text-yellow-500">
                    Bookings({cartItems.length})
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-black sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* Logo and Website Name */}
                <div className="flex items-center relative">
                    <Link to={'/'}>
                        <img src={svLogo} alt="Sevarat Logo" className="h-16 w-auto mr-" />
                    </Link>
                    <Link to={'/'}>
                        <h2 className=" font-bold text-white text-2xl">SEVARAT</h2>
                    </Link>
                </div>

                {/* Box below the logo */}
                <div className="text-center mt-2">
                    <div className="bg-black rounded-md p-2 animate-pulse">
                        <a href="https://forms.office.com/r/PmN9ecf0NX" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-yellow-500 text-white">
                            (Click here to register as worker)
                        </a>
                    </div>
                </div>

                {/* Location Bar */}
                <div className="flex items-center relative">
                    {/* Search Bar  */}
                    <SearchBar />
                    {/* Location Input */}
                    <div className="ml-4 relative">
                        <input
                            type="text"
                            placeholder="Location"
                            value={location}
                            onFocus={toggleDropdown}
                            onChange={(e) => setLocation(e.target.value)}
                            className="bg-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {showDropdown && (
                            <div className="absolute bg-white mt-1 w-full border border-gray-300 shadow-lg rounded-md">
                                <ul>
                                    <li onClick={useCurrentLocation} className="py-2 px-4 cursor-pointer hover:bg-gray-100">Use Current Location</li>
                                    <li onClick={chooseManually} className="py-2 px-4 cursor-pointer hover:bg-gray-100">Choose Manually</li>
                                </ul>
                            </div>
                        )}
                        {showStatesDropdown && (
                            <div className="absolute bg-white mt-1 w-full border border-gray-300 shadow-lg rounded-md">
                                <ul>
                                    {states.map((state, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                setLocation(state);
                                                setShowStatesDropdown(false);
                                            }}
                                            className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                        >
                                            {state}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;