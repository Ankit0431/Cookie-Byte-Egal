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
import SearchLocationInput from "./GooglePlcasesApi";
import MapComponent from "./Map";

function Vd({ aadharCard, email, imgUrl, name, latitude, longitude }) {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: latitude,
    lng: longitude,
  });
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* <SearchLocationInput setSelectedLocation={setSelectedLocation} /> */}
      <MapComponent lat={latitude} long={longitude} />
    </div>
  );
}

const PetCard = ({ aadharCard, email, imgUrl, name }) => {
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

const SingleVolunteerDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [goatId, setGoatId] = useState("");
  useEffect(() => {
    const aa = localStorage.getItem("aadhar");
    console.log(aa);
    console.log(id);
    const getData = async () => {
      setData([]);
      const vendorsCollection = collection(db, "Volunteers");
      // const q = query(vendorsCollection, where("aadharCard", "==", id));
      const vendorSnapshot = await getDocs(vendorsCollection);
      const newData = [];
      vendorSnapshot.forEach((docc) => {
        console.log(docc.data());
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
              <Vd
                aadharCard={vendor.aadharCard}
                email={vendor.email}
                imgUrl={vendor.imgUrl}
                name={vendor.name}
                latitude={vendor.latitude}
                longitude={vendor.longitude}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SingleVolunteerDetails;
