import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const UserDashboard = () => {
    // user
    const user = JSON.parse(localStorage.getItem('users'));

    const context = useContext(myContext);
    const { loading, getAllOrder } = context

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8 lg:py-12">
                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* User Info */}
                    <div className="bg-white py-6 rounded-lg shadow-md">
                        <div className="flex flex-col items-center mb-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="" className="w-32 h-32 rounded-full mb-4" />
                            <h2 className="text-lg font-bold text-blue-600 mb-2">{user?.name}</h2>
                            <p className="text-blue-500 mb-1"><span className="font-bold">Email:</span> {user?.email}</p>
                            <p className="text-blue-500 mb-1"><span className="font-bold">Member since:</span> {user?.date}</p>
                            <p className="text-blue-500 mb-1"><span className="font-bold">Role:</span> {user?.role}</p>
                        </div>
                    </div>

                    {/* Booking Details */}
                    <div className="col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Booking Details</h2>

                            <div className="flex justify-center relative top-10">
                                {loading && <Loader />}
                            </div>

                            {getAllOrder.filter((obj) => obj.userid === user?.uid).map((order, index) => {
                                return (
                                    <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                                        {order.cartItems.map((item, index) => {
                                            const { id, date, quantity, price, title, productImageUrl, category } = item
                                            const { status } = order
                                            return (
                                                <div key={index} className="flex items-center mb-4">
                                                    <img
                                                        className="h-20 w-20 rounded-lg border border-gray-200 object-contain mr-4"
                                                        src={productImageUrl}
                                                        alt="img"
                                                    />
                                                    <div className="flex-1">
                                                        <p className="text-sm font-bold text-gray-900">{title}</p>
                                                        <p className="mt-1 text-sm font-medium text-gray-500">{category}</p>
                                                        <p className="mt-2 text-sm font-medium text-gray-500">x {quantity}</p>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <p className="text-sm font-bold text-gray-900">₹ {price}</p>
                                                        <p className={`mt-2 text-sm font-medium ${status === 'pending' ? 'text-red-800' : 'text-green-800'} first-letter:uppercase`}>{status}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">Order ID: #{order.id}</p>
                                                <p className="text-sm font-medium text-gray-500">Date: {order.date}</p>
                                            </div>
                                            <p className="text-sm font-bold text-gray-900">Total: ₹ {order.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDashboard;
