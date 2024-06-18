import React, { useEffect, useState } from "react";
import { getDocs, query, collection, where, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const PetCard = ({
  breed,
  age,
  gender,
  weight,
  immunisation,
  disease,
  insuranceDate,
  insuranceValue,
  imageUrl,
  price,
}) => {
  return (
    <div className="flex flex-col justify-center font-bold text-black bg-white w-100 p-6 m-4 rounded-xl shadow-lg">
      <div className="flex flex-col w-full bg-white rounded-xl">
        <img
          src={imageUrl}
          alt="Pet"
          className="w-full h-60 object-cover rounded-t-xl"
        />
        <div className="py-4">
          <div className="self-center mt-4 text-3xl text-center">{breed}</div>
          <div className="flex flex-col px-7 mt-4 w-full text-xl">
            <div className="flex justify-between mt-6">
              <div>Age: {age}</div>
              <div>Weight: {weight}</div>
              <div>Price: 2000</div>
            </div>
            <div className="flex justify-between mt-4">
              <div>Gender: {gender}</div>
              <div>Disease: {disease}</div>
            </div>
            <div className="mt-6">Immunisation: {immunisation}</div>
            <div className="mt-4">
              Insured for &#8377;{insuranceValue} till {insuranceDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sold_List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const aa = localStorage.getItem("aadhar");
    console.log(aa);
    const getData = async () => {
      const vendorsCollection = collection(db, "SoldList");
      const vendorSnapshot = await getDocs(vendorsCollection);
      vendorSnapshot.forEach((docc) => {
        setData((d) => [...d, docc.data()]);
      });
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((vendor) => (
        <PetCard
          key={vendor.id}
          breed={vendor.breed}
          age={vendor.age}
          gender={vendor.gender}
          weight={vendor.weight}
          immunisation={vendor.immunisation}
          disease={vendor.disease}
          insuranceDate={vendor.insuranceDate}
          insuranceValue={vendor.insuranceValue}
          imageUrl={vendor.imageUrl}
          price={vendor.price}
        />
      ))}
    </div>
  );
};

export default Sold_List;
