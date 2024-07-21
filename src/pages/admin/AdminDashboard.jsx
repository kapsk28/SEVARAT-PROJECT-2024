import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../../components/admin/ProductDetail';
import OrderDetail from '../../components/admin/OrderDetail';
import UserDetail from '../../components/admin/UserDetail';
import { useContext } from 'react';
import myContext from '../../context/myContext';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('users'));
  const context = useContext(myContext);
  const { getAllProduct, getAllOrder, getAllUser } = context;

  // Calculate total number of bookings and users
  const totalBookings = getAllOrder.length;
  const totalUsers = getAllUser.length;

  return (
    <div className="container mx-auto py-8">
      {/* Top */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <Link to="/" className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg font-bold">
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>

      {/* Mid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User Info */}
        <div className="bg-white py-6 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            <img src="../img/people.png" alt="" className="w-32 h-32 rounded-full mb-4" />
            <h2 className="text-lg font-bold text-blue-600 mb-2">{user?.name}</h2>
            <p className="text-blue-500 mb-1"><span className="font-bold">Email:</span> {user?.email}</p>
            <p className="text-blue-500 mb-1"><span className="font-bold">Since:</span> {user?.date}</p>
            <p className="text-blue-500 mb-1"><span className="font-bold">Role:</span> {user?.role}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="col-span-2">
          <Tabs>
            <TabList className="flex justify-center mb-4">
              {/* Service Providers */}
              <Tab className="tab-item bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 rounded-lg px-4 py-2 mr-2">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 12h3v8h4v-6h4v6h4v-8h3L12 2z" />
                  </svg>
                  <span className="font-bold">Service Providers</span>
                </div>
              </Tab>

              {/* Bookings */}
              <Tab className="tab-item bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 rounded-lg px-4 py-2 mr-2">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <line x1={10} x2={21} y1={6} y2={6} />
                    <line x1={10} x2={21} y1={12} y2={12} />
                    <line x1={10} x2={21} y1={18} y2={18} />
                    <path d="M4 6h1v4" />
                    <path d="M4 10h2" />
                    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                  </svg>
                  <span className="font-bold">Bookings ({totalBookings})</span>
                </div>
              </Tab>

              {/* Users */}
              <Tab className="tab-item bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 rounded-lg px-4 py-2 mr-2">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className="font-bold">Users ({totalUsers})</span>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <ProductDetail />
            </TabPanel>

            <TabPanel>
              <OrderDetail />
            </TabPanel>

            <TabPanel>
              <UserDetail />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;