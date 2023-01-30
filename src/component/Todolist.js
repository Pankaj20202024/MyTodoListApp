import { useState } from "react";

const Todolist = () => {
  const [userlist, setuserlist] = useState([]);
  const push = (value) => {
    const usernewlist = userlist.concat(value);
    setuserlist(usernewlist);
  };
  const pull = (index) => {
    const usernewlist = userlist.filter((userlistitem, userlistitemindex) => {
      return userlistitemindex !== index;
    });
    setuserlist(usernewlist);
  };

  return {
    userlist: userlist,
    push: push,
    pull: pull,
  };
};

export default Todolist;
