import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user) return <div className="text-center text-xl mt-10">Loading...</div>;

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300">
      <div className="bg-white shadow-2xl rounded-lg max-w-lg p-8 border-4 border-gradient-to-r from-purple-300 via-pink-300 to-blue-300 transform transition-all duration-500 hover:scale-105">
        <img
          src={user.picture.large}
          alt="User Profile"
          className="rounded-full w-48 h-48 mx-auto shadow-lg border-4 border-purple-500"
        />
        <h2 className="text-center text-4xl font-extrabold mt-6 text-purple-900 transition-all duration-300 hover:text-purple-700">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-center text-xl text-gray-700 mt-4">
          Gender: <span className="font-semibold text-gray-900">{user.gender}</span>
        </p>
        <p className="text-center text-xl text-gray-700 mt-4">
          Phone: <span className="font-semibold text-gray-900">{user.phone}</span>
        </p>
      </div>
    </div>
  );
};

export default App;

