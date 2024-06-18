import React, { useEffect, useState } from "react";
import { getDocs, query, collection, where, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import PettCard from "./ViewFamilyComponents/PettCard"

const PetCard = ({ volunteer, aadharCard, maritalStatus, numOfPeople }) => {
  return (
    <div className="flex flex-col justify-center font-bold text-black bg-white w-100 p-6 m-4 rounded-xl shadow-lg">
      <div className="flex flex-col w-full bg-white rounded-xl">
        <div className="py-4">
          <div className="self-center mt-4 text-3xl text-center">{}</div>
          <div className="flex flex-col px-7 mt-4 w-full text-xl">
            <div className="flex justify-between mt-6">
              <div>volunteer: {volunteer}</div>
              <div>aadhar : {aadharCard}</div>
              <div>maritalStatus: {maritalStatus}</div>
            </div>
            <div className="flex justify-between mt-4">
              <div>Nume of people : {numOfPeople}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ViewFamily = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const aa = localStorage.getItem("aadhar");
    console.log(aa);
    const getData = async () => {
      const vendorsCollection = collection(db, "Family");
      setData([]);
      const q = query(vendorsCollection, where("volunteer", "==", aa));
      const vendorSnapshot = await getDocs(vendorsCollection);
      vendorSnapshot.forEach((docc) => {
        console.log(docc.data());
        setData((d) => [...d, docc.data()]);
      });
    };
    getData();
  }, []); // Add this useEffect to call getFamilyData on component mount or based on your requirement
  console.log(data);
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((vendor) => (
        <PettCard
          volunteer={vendor.volunteer}
          aadharCard={vendor.aadharCard}
          maritalStatus={vendor.maritalStatus}
          numOfPeople={vendor.numOfPeople}
        />
      ))}
    </div>
  );
};

export default ViewFamily;
