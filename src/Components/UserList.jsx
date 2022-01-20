import React, { useState, useEffect } from "react";
import axios from "axios";
const UserList = () => {
  const [userList, setUserList] = useState([]);
  // get the Data
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log();

  return (
    <div>
      {userList.map((user) => {
        return <h1>{user.name}</h1>;
      })}
    </div>
  );
};

export default UserList;
