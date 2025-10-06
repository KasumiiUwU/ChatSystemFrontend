import { FaUser, FaLock } from "react-icons/fa";

const Register = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-800">
      <div className="w-[36rem] bg-gray-900 rounded-2xl shadow-2xl text-white">
        <h1 className="flex items-center justify-center pt-10 font-bold text-2xl text-gray-500">
          Register Page
        </h1>

        <div className="w-[30rem] mx-auto my-8 mt-10">
          {/* Username */}
          <label className="font-medium text-gray-500 mb-1 block">
            Username
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your username"
              className="block w-full border border-gray-600 bg-gray-700 text-white mb-4 
                         rounded-2xl h-10 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <label className="font-medium text-gray-500 mb-1 block">
            Password
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Enter your password"
              className="block w-full border border-gray-600 bg-gray-700 text-white mb-4 
                         rounded-2xl h-10 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <label className="font-medium text-gray-500 mb-1 block">
            Confirm Password
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm your password"
              className="block w-full border border-gray-600 bg-gray-700 text-white mb-4 
                         rounded-2xl h-10 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Register Button */}
          <button
            className="w-full bg-blue-600 text-white h-10 rounded-2xl mt-6 
                       transition duration-300 ease-in-out 
                       hover:bg-blue-700 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Register
          </button>

          {/* Optional: Link to Login */}
          <p className="text-gray-400 text-sm text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
