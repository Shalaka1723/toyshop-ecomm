import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import productData from '../productData';
import { Footer } from '../components/Footer';

export const successToast = (message) => {
  toast.success(message, {
    position: 'top-right',
  });
};

export const errorToast = (message) => {
  toast.error(message, {
    position: 'top-right',
  });
};

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  const actionLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    successToast('User Logged Out');

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          {/* Left section: Filters */}
          <section className="left h-screen w-1/5 p-4 bg-gray-100 border-r">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input type="range" min="0" max="2000" className="w-full" />
              <div className="flex justify-between text-sm">
                <span>0</span>
                <span>2000+</span>
              </div>
            </div>

            {/* Category Checkboxes */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category</h3>
              <div className="flex flex-col space-y-2">
                <label>
                  <input type="checkbox" className="mr-2" />
                  All
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Girls
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Boys
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Kids Books
                </label>
              </div>
            </div>

            {/* Sort Options */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Sort By</h3>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option value="default">Default</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>

            {/* Clear Filters */}
            <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full">
              Clear Filters
            </button>
          </section>

          {/* Right section: Products */}
          <section className="right w-4/5 p-4">
            {loggedInUser?
            (<div className="bg-yellow-300 text-[#4b1471] flex items-center space-x-5 px-4 py-2 rounded-lg mb-4">
              <h1>Hello {loggedInUser}!</h1>
              <button
                onClick={actionLogout}
                className="bg-white p-1 hover:bg-[#4b1471] hover:text-yellow-300 rounded-md"
              >
                Logout
              </button>
            </div>):null}

            <div className="grid grid-cols-4 gap-3 p-4">
              {productData.map((item) => (
                <ProductCard
                  item={item}
                  key={item.id}
                  pImage={item.pImage}
                  pName={item.pName}
                  price={item.price}
                />
              ))}
            </div>
          </section>

          <ToastContainer />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
