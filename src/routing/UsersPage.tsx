import React from "react";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import { Outlet } from "react-router-dom";

const UsersPage = () => {
  return (
    <div className="row">
      <div className="col">
        <UserList></UserList>
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
