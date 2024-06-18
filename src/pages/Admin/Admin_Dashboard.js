import React from "react";

const Admin_Dashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {/* Graph 1 */}
      <div className="flex flex-col items-center">
        <img
          src="graph1.png" // This assumes graph1.png is accessible by the React app
          alt="Graph 1"
          className="w-full h-auto max-h-96 object-contain"
        />
        <a href="http://localhost:8502" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Graph 1
        </a>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="graph3.jpeg"
          alt="Graph 2"
          className="w-full h-auto max-h-96 object-contain"
        />
        <a href="http://localhost:8501" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Graph 2
        </a>
      </div>
      <div className="col-span-2 flex flex-col items-center">
        <img
          src="graph2.png"
          alt="Graph 3"
          className="w-full h-auto max-h-96 object-contain"
        />
        <a href="http://localhost:8502" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Graph 3
        </a>
      </div>
    </div>
  );
};

export default Admin_Dashboard;
