import React from "react";

const Navbar = () => {
return (
    <nav className="bg-purple-800 p-4">
    <div className="flex items-center justify-between">
        <div className="text-white font-bold">TO DO LIST!</div>
        <div className="flex">
        <a href="#" className="text-white mr-4">Help</a>
        <a href="#" className="text-white mr-4">Profile</a>
        </div>
    </div>
    </nav>
    );
};

export default Navbar;
