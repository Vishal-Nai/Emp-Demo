import React from "react";
import { addUserAction, updateUserAction } from "../Redux/Actions/userAction";
import { useDispatch } from "react-redux";

const UserForm = ({ singelUser }) => {
  console.log(singelUser);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const dispatch = useDispatch();

  //if singelUser is not null, then we are editing a user
  React.useEffect(() => {
    if (singelUser) {
      setName(singelUser.name);
      setEmail(singelUser.email);
      setWebsite(singelUser.website);
    }
  }, []);

  //handle for add user

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserAction({ name, email, website }));
    setName("");
    setEmail("");
    setWebsite("");
  };

  //handle update user
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUserAction({ name, email, website, id: singelUser.id }));
    setName("");
    setEmail("");
    setWebsite("");
  };

  //handle change

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setWebsite(value);
    }
  };

  //filll form with user data

  React.useEffect(() => {
    if (singelUser) {
      setName(singelUser.name);
      setEmail(singelUser.email);
      setWebsite(singelUser.website);
    }
  }, [singelUser]);

  return (
    <>
      <div className="flex flex-col max-w-sm justify-center shadow shadow-slate-900 px-2 mt-4 bg-slate-800 mx-auto p-4 rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Website"
              name="password"
              value={website}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-ceneter">
            {singelUser && (
              <button
                className="bg-indigo-600 ml-4 hover:bg-cyan-700 text-white  rounded-md font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleUpdate}
              >
                Update user
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;
