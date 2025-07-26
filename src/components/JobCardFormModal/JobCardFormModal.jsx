import React, { useState } from "react";
import './JobCardFormModels.css'
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebaseConfig.js"; 

const JobCardFormModal = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    assignee: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      await addDoc(collection(db, "jobCards"), formData); 
      alert("Job Card Created!");
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to create job card.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Create New Job Card</h2>

        <input
          type="text"
          name="title"
          placeholder="Enter job title"
          value={formData.title}
          onChange={handleChange}
          className="modal-input"
        />

        <textarea
          name="description"
          placeholder="Enter job description"
          value={formData.description}
          onChange={handleChange}
          className="modal-textarea"
        />

        <div className="modal-row">
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="modal-select"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="modal-select"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <input
          type="text"
          name="assignee"
          placeholder="Enter assignee name"
          value={formData.assignee}
          onChange={handleChange}
          className="modal-input"
        />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="modal-date"
        />

        <div className="modal-button-row">
          <button onClick={onClose} className="modal-cancel">
            Cancel
          </button>
          <button onClick={handleCreate} className="modal-submit">
            Create Job Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCardFormModal;
