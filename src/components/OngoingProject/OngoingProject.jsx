const OngoingProject = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md mb-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ongoing Project</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-blue-600">
          Financial App Structure (Similar to Nagad)
        </h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            Separate HTML pages for each function: Add Money, Cash Out, Transfer
            Money, Pay Bill, and Transaction History.
          </li>
          <li>Dynamic JavaScript handling transactions.</li>
          <li>
            Initial total balance, updated dynamically when money is added or
            spent.
          </li>
          <li>
            PIN (4-digit) and Account Number (11-digit) validation with alerts
            if exceeded.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OngoingProject;
