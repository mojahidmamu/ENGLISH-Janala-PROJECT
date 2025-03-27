import { useState } from "react";

const FinancialDashboard = () => {
  const [totalBalance, setTotalBalance] = useState(0);
  const [activePage, setActivePage] = useState(null);
  const [history, setHistory] = useState([]);

  const showPage = (pageId) => setActivePage(pageId);

  const addMoney = () => {
    const amount = parseInt(document.getElementById("add-amount").value);
    if (amount > 0) {
      setTotalBalance(prev => prev + amount);
      setHistory([...history, `Added money ৳${amount}`]);
    }
  };

  const cashOut = () => {
    const amount = parseInt(document.getElementById("cash-out-amount").value);
    if (amount > 0 && amount <= totalBalance) {
      setTotalBalance(prev => prev - amount);
      setHistory([...history, `Cashed out ৳${amount}`]);
    } else {
      alert("Insufficient balance");
    }
  };

  const transferMoney = () => {
    const account = document.getElementById("transfer-account").value;
    const amount = parseInt(document.getElementById("transfer-amount").value);

    if (account.length === 11 && amount > 0 && amount <= totalBalance) {
      setTotalBalance(prev => prev - amount);
      setHistory([...history, `Transferred ৳${amount} to ${account}`]);
    } else {
      alert("Invalid details or insufficient balance");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 my-10 border-2">
      <h1 className="text-2xl font-bold text-center mb-4">Financial Dashboard</h1>
      <div className="flex justify-between items-center bg-blue-500 text-white p-4 rounded-lg">
        <p className="text-lg">Total Balance:</p>
        <p className="text-xl font-bold">৳ {totalBalance}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <button onClick={() => showPage("add-money")} className="bg-green-500 text-white p-3 rounded-lg">Add Money</button>
        <button onClick={() => showPage("cash-out")} className="bg-red-500 text-white p-3 rounded-lg">Cash Out</button>
        <button onClick={() => showPage("transfer")} className="bg-yellow-500 text-white p-3 rounded-lg">Transfer</button>
        <button onClick={() => showPage("transaction-history")} className="bg-gray-500 text-white p-3 rounded-lg">History</button>
      </div>
      {activePage === "add-money" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Add Money</h2>
          <input type="number" id="add-amount" className="w-full p-2 border rounded mt-2" placeholder="Enter Amount" />
          <button onClick={addMoney} className="w-full bg-blue-600 text-white p-2 mt-2 rounded">Confirm</button>
        </div>
      )}
      {activePage === "cash-out" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Cash Out</h2>
          <input type="number" id="cash-out-amount" className="w-full p-2 border rounded mt-2" placeholder="Enter Amount" />
          <button onClick={cashOut} className="w-full bg-red-600 text-white p-2 mt-2 rounded">Confirm</button>
        </div>
      )}
      {activePage === "transfer" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Transfer Money</h2>
          <input type="text" id="transfer-account" className="w-full p-2 border rounded mt-2" placeholder="Enter Account Number (11 digits)" />
          <input type="number" id="transfer-amount" className="w-full p-2 border rounded mt-2" placeholder="Enter Amount" />
          <button onClick={transferMoney} className="w-full bg-yellow-600 text-white p-2 mt-2 rounded">Confirm</button>
        </div>
      )}
      {activePage === "transaction-history" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Transaction History</h2>
          <ul className="mt-2 space-y-2 text-gray-700">
            {history.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FinancialDashboard;
