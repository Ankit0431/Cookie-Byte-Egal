import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Vendor_Details = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setData([]);
      const vendorsRef = collection(db, "Vendors");
      const vendorsSnapshot = await getDocs(vendorsRef);
      vendorsSnapshot.forEach((docc) => {
        setData((d) => [...d, docc.data()]);
      });
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      {data &&
        data.map((d) => {
          return (
            <Link
              to={`/Vendor_Details/${d.aadharCard}`}
              style={{ backgroundColor: "white", width: "200px" }}
            >
              <h1>{d.name}</h1>
              <h1>{d.email}</h1>
            </Link>
          );
        })}
    </div>
  );
};

export default Vendor_Details;
