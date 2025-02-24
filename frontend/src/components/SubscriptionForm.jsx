import React, { useState } from "react";
import axios from "axios";

const SubscriptionForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://obi.kean.edu/~aobafemi@kean.edu/GroupSplit/backend/add_subscription.php", {
        name,
        cost
      });
      alert("Subscription added!");
    } catch (error) {
      console.error("Error adding subscription:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Subscription Name" onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Cost" onChange={(e) => setCost(e.target.value)} />
      <button type="submit">Add Subscription</button>
    </form>
  );
};

export default SubscriptionForm;
