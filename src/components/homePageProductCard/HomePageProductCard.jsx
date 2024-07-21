import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useRef } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    // Book Service function
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart")
    }

    // delete from cart function
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed")
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const productContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const productContainer = productContainerRef.current;
            if (productContainer) {
                const navbarHeight = 80; // Assuming your navbar height is 80px
                const productContainerTop = productContainer.getBoundingClientRect().top;
                if (productContainerTop < navbarHeight) {
                    productContainer.style.zIndex = '-1';
                } else {
                    productContainer.style.zIndex = '1';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="mt-10 relative">
            {/* Heading  */}
            <div className="">
                <h1 className="text-center mb-5 text-2xl font-semibold">Bestselling Services</h1>
            </div>

            {/* main 1 */}
            <section className="text-gray-600 body-font relative" ref={productContainerRef}>
                {/* main 2 */}
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex justify-center">
                        {loading && <Loader />}
                    </div>
                    {/* main 3  */}
                    <div className="flex flex-nowrap overflow-x-auto -mx-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productImageUrl } = item;
                            return (
                                <div key={index} className="flex-shrink-0 px-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-80 h-96 w-full object-cover object-center"
                                            src={productImageUrl}
                                            alt="img"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                SEVARAT
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                {cartItems.some((p) => p.id === item.id)
                                                    ?
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className=" bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Delete Service
                                                    </button>
                                                    :
                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Book Service
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer">
                        <FaChevronLeft className="text-gray-400 hover:text-gray-600 text-3xl" />
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer">
                        <FaChevronRight className="text-gray-400 hover:text-gray-600 text-3xl" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;