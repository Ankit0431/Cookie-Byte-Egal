import { createContext, useContext, useState } from "react";

const MeddyContext = createContext(null);

export const useContract = () => useContext(MeddyContext);

export const MeddyProvider = (props) => {
  const [userType, setUserType] = useState("Admin");
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [authData, setAuthData] = useState([]);
  const [hospName, setHospName] = useState("");
  const [hospId, setHospId] = useState("");

  return (
    <MeddyContext.Provider
      value={{
        hospName,
        hospId,
        setHospId,
        setHospName,
        account,
        setAccount,
        contract,
        setContract,
        provider,
        setProvider,
        userType,
        setUserType,
        setAuthData,
        authData,
      }}
    >
      {props.children}
    </MeddyContext.Provider>
  );
};
