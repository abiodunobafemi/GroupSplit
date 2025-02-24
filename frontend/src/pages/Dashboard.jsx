import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get("https://obi.kean.edu/~aobafemi@kean.edu/GroupSplit/backend/get_subscriptions.php");
        setSubscriptions(response.data);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>My Subscriptions</h2>
      <ul>
        {subscriptions.map((sub) => (
          <li key={sub.id}>
            {sub.subscription_name} - ${sub.cost}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
