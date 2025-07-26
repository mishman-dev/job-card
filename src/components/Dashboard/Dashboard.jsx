import React, { useState } from 'react'
import './Dashboard.css'
import { FiAlertCircle } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import JobCardFormModal from '../JobCardFormModal/JobCardFormModal';



function Dashboard() {
    const cardsList = ['Total Jobs', 'Pending', 'In Progress', 'Completed', 'Cancelled']

    const [selectedOption, setSelectedOption] = useState('');
    const [isToggled, setIsToggled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCreateJob = (jobData) => {
        console.log("Job created:", jobData);
    };

    const toggle = () => {
        setIsToggled(prev => !prev);
    };


    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='dashboard'>
            <div className="header">
                <div className="header-text">
                    <h1>Job Card Monitoring</h1>
                    <p>Track and manage your jobs</p>
                </div>
                <div className="new-jobcard">
                    <button onClick={() => setShowModal(true)}>
                        +
                        New Job Card
                    </button>
                    {showModal && (
                        <JobCardFormModal onClose={() => setShowModal(false)} />
                    )}
                </div>
            </div>
            <div className="job-card-container">
                {
                    cardsList.map((card, index) => (
                        <div className="job-card" key={index}>
                            <div className="card-header">
                                <span className="card-title">{card}</span>
                                <FiAlertCircle className="info-icon" />
                            </div>
                            <div className="card-count">6</div>
                        </div>
                    ))
                }
            </div>
            <div className='option-bar'>
                <div className='search'>
                    <IoIosSearch className="search-icon" />
                    <input type="text" placeholder="Search job cards..." />
                </div>
                <div className='filters-and-toggle'>
                    <div className='option-drops'>
                        <select id="jobStatus" value={selectedOption} onChange={handleChange}>
                            <option value="">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="inProgress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                        <select id="priority" value={selectedOption} onChange={handleChange}>
                            <option value="">All Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <button className='clear-filter'><CiFilter />Clear</button>
                    </div>
                    <div className='toggle-container'>
                        <div className={`custom-toggle-switch ${isToggled ? 'on' : ''}`} onClick={toggle}></div>
                        <span>Show completed (2)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard