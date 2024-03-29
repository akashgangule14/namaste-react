
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

    const [btnNameReact, setBtnNameReact ] = useState("login");

    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div>
            <img alt="logo" className="w-44" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className=" px-4">
                        Online Status : { onlineStatus ? "✅" : "🔴" }
                    </li>
                    <li className=" px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className=" px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className=" px-4">Cart</li>
                    <button className="login" 
                    onClick={() => { 
                        btnNameReact === "login" ? 
                        setBtnNameReact("logout") : 
                        setBtnNameReact("login")
                    }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;