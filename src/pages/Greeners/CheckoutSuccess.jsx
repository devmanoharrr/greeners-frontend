import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-10 text-center">
        <Link to="/home" className="px-12 bg-buttonBgColor text-white font-semibold py-3">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
