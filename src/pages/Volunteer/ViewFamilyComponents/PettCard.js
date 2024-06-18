const PettCard = ({ volunteer, aadharCard, maritalStatus, numOfPeople }) => {
  return (
    <div className="flex flex-col justify-center font-bold text-black bg-white w-full max-w-sm p-6 m-4 rounded-xl shadow-lg">
      <div className="flex flex-col w-full bg-white rounded-xl">
        <div className="py-4">
          <div className="self-center mt-4 text-3xl text-center text-blue-600">
            Family Details
          </div>
          <div className="flex flex-col px-7 mt-4 w-full text-lg">
            <div className="flex justify-between mt-6">
              <div className="font-medium text-gray-700">Volunteer:</div>
              <div className="text-gray-900">{volunteer}</div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="font-medium text-gray-700">Aadhar:</div>
              <div className="text-gray-900">{aadharCard}</div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="font-medium text-gray-700">Marital Status:</div>
              <div className="text-gray-900">{maritalStatus}</div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="font-medium text-gray-700">Number of People:</div>
              <div className="text-gray-900">{numOfPeople}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PettCard;
