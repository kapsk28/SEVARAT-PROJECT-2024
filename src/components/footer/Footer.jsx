import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* footer  */}
            <footer className="text-gray-600 body-font bg-black">
                {/* main  */}
                <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    {/* logo  */}
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-yellow-300">
                        <span className="text-xl font-bold">SEVARAT</span>
                    </a>
                    {/* para  */}
                    <p className="text-sm text-yellow-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 sevarat —
                        <Link
                            to={'/'}
                            className="text-yellow-500 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @sevarat
                        </Link>
                    </p>
                    {/* Terms and Conditions */}
                    <p className="text-sm text-yellow-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        <Link
                            to={'/wow.html'} // Link to your HTML file "wow.html"
                            className="text-yellow-500 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Terms and Conditions
                        </Link>
                    </p>
                    {/* About Us */}
                    <p className="text-sm text-yellow-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        <Link
                            to={'/AboutUs'} // Link to your AboutUs.jsx file
                            className="text-yellow-500 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            About Us
                        </Link>
                    </p>
                    {/* media icon  */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {/* Add your social media icons here */}
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;