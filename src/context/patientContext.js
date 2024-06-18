import { useContract } from "./context";
import { createContext, useContext, useEffect, useState } from "react";



const PatientContext = createContext(null);

export const usePatientContext = () => useContext(PatientContext);

export const PatientProvider = (props) => {

    const [profile, setProfile] = useState({
        patientName: null, age: null, weight: null, height: null, medicalRecords: null, authorized: null
    })

    const { account, contract } = useContract();
    console.log("account", account, "contract", contract)

    useEffect(() => {
        const getProfileDetails = async () => {
            try {
                const patientDetails = await contract.getPatientDetails(account);
                console.log(patientDetails);
            } catch (e) {
                console.log(e);
            }
        }
        getProfileDetails();
    })


    return (
        <PatientContext.Provider value={profile}>
            {props.children}
        </PatientContext.Provider>
    )

}