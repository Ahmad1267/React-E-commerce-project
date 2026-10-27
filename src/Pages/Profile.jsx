
import React from "react";

function Profile() {
  const savedUser = localStorage.getItem("currentUser") || "null";

  const user = savedUser
    ? JSON.parse(savedUser)
    : null;
    console.log(user)

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <div className="bg-white mt-20 mx-45 rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">
          My Profile
        </h1>

        {user ? (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-500">Name</label>
              <input type="text" value={user?.name || ""}  className="w-100 border border-gray-300 rounded-md p-3"/>
            </div>

            <div>
              <label className="block text-gray-500">Email</label>
              <input type="text" value={user?.signEmail || ""} className="w-100 border border-gray-300 rounded-md p-3"/>
            </div>




          </div>
        ) : (
          <p>No user information found. Please signup first.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
