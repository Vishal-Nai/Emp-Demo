import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userDetailsAction,
  usersListAction,
} from "../Redux/Actions/userAction";
import UserForm from "./UserForm";

const UserList = ({hide}) => {
  const dispatch = useDispatch();
  const [singelUser, setSingleUser] = React.useState(null);
  const userInfo = useSelector((state) => state.userInfo);
  const { person } = userInfo;

  React.useEffect(() => {
    dispatch(usersListAction());
  }, [dispatch]);

  React.useEffect(() => {
    if (person) {
      setSingleUser(person);
    }
  }, [dispatch, person]);

  return (
    <div className="container mx-auto">
      {hide ? <></> : 
      <UserForm singelUser={singelUser} />
      }
    </div>
  );
};

export default UserList;
