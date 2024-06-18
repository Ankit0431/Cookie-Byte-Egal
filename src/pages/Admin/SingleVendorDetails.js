import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDocs,
  query,
  collection,
  where,
  getDoc,
  deleteDoc,
  addDoc,
  doc,
} from "firebase/firestore";
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
  id,
}) => {
  const handleDelete = async () => {
    // try {
    //   const vendorDocRef = doc(db, "Vendor", id); // 'Vendors' is the collection name
    //   const docSnap = await getDoc(vendorDocRef);
    //   console.log(docSnap.data());
    //   await deleteDoc(vendorDocRef);
    //   console.log(`Document with ID ${id} successfully deleted`);
    // } catch (error) {
    //   console.error("Error deleting document:", error);
    // }
    try {
      // Fetch the document from the "Vendor" collection
      const vendorDocRef = doc(db, "Vendor", id);
      const docSnap = await getDoc(vendorDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Document data:", data);

        // Add the data to the "SoldList" collection
        const soldListCollection = collection(db, "SoldList");
        await addDoc(soldListCollection, data);
        console.log("Document data added to SoldList collection");
        await deleteDoc(vendorDocRef);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error transferring document data:", error);
    }
  };

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
              <div>Price: 200</div>
            </div>
            <div className="flex justify-between mt-4">
              <div>Gender: {gender}</div>
              <div>Disease: {disease}</div>
            </div>
            <div className="mt-6">Immunisation: {immunisation}</div>
            <div className="mt-4">
              Insured for &#8377;{insuranceValue} till {insuranceDate}
            </div>
            <button style={{ backgroundColor: "green" }} onClick={handleDelete}>
              Sold
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SingleVendorDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [goatId, setGoatId] = useState("");
  useEffect(() => {
    const aa = localStorage.getItem("aadhar");
    console.log(aa);
    const getData = async () => {
      setData([]);
      const vendorsCollection = collection(db, "Vendor");
      const q = query(vendorsCollection, where("aadharCard", "==", id));
      const vendorSnapshot = await getDocs(q);
      const newData = [];
      vendorSnapshot.forEach((docc) => {
        newData.push({ id: docc.id, ...docc.data() });
      });
      setData(newData);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {data &&
          data.map((vendor) => {
            return (
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
                id={vendor.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SingleVendorDetails;
