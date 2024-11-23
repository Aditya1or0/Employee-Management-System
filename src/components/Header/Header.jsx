import React, { useState, useEffect } from "react";

function Header({ data, changeUser }) {
  const [username, setUsername] = useState("");

  // Use useEffect to update the username when `data` changes
  useEffect(() => {
    if (!data) {
      setUsername("Admin");
    } else {
      setUsername(data.firstName);
    }
  }, [data]);
  // Dependency on `data`, update when `data` changes

  const logoutHandler = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-lg">
        Hello, <br />
        <span className="text-2xl font-semibold">{username} 👋</span>
      </h1>
      <button
        onClick={logoutHandler}
        className="text-white text-lg font-medium px-3 py-2 rounded-md flex gap-2"
      >
        Logout
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="mt-1"
          fill="#e8eaed"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
        </svg>
      </button>
    </div>
  );
}

export default Header;
