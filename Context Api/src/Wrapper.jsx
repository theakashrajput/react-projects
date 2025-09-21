import { createContext, useState } from "react";

export const userContext = createContext(null);

const Wrapper = (props) => {
  const [users, setUsers] = useState([]);

  return (
    <userContext.Provider value={[users, setUsers]}>
      {props.children}
    </userContext.Provider>
  );
};

export default Wrapper;
