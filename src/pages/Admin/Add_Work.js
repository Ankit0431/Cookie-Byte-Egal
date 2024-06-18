import React, { useState } from "react";

const Add_Work = () => {
  const [villageName, setVillageName] = useState("");
  const [aadharId, setAadharId] = useState("");

  const handleVillageChange = (event) => {
    setVillageName(event.target.value);
  };

  const handleAadharChange = (event) => {
    setAadharId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., validation, API call, etc.)
    console.log("Submitted village name:", villageName);
    console.log("Submitted Aadhar ID:", aadharId);
    // Reset form after submission if needed
    setVillageName("");
    setAadharId("");
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        style={{ width: "460px" }}
      >
        <h2 className="text-center text-2xl mb-4">Add Work</h2>
        <div className="mb-4">
          <label
            htmlFor="villageInput"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Village Name:
          </label>
          <input
            type="text"
            id="villageInput"
            value={villageName}
            onChange={handleVillageChange}
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Enter Village name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="aadharInput"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Volunteer Aadhar ID:
          </label>
          <input
            type="text"
            id="aadharInput"
            value={aadharId}
            onChange={handleAadharChange}
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Enter Aadhar ID"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add_Work;
