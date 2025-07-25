import React from 'react';
import './JobCard.css'; 

const JobCard = ({ title, status, priority, description, assignedTo, dueDate, actions }) => {
    const getStatusTagClass = (status) => {
        switch (status.toLowerCase()) {
            case 'in progress':
                return 'in-progress';
            case 'pending':
                return 'pending';
            case 'cancelled':
                return 'cancelled';
            default:
                return '';
        }
    };

    const getPriorityTagClass = (priority) => {
        switch (priority.toLowerCase()) {
            case 'high':
                return 'high';
            case 'medium':
                return 'medium';
            default:
                return '';
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">{title}</div>
                <div className="more-options">...</div>
            </div>
            <div className="tags">
                {status && <span className={`tag ${getStatusTagClass(status)}`}>{status}</span>}
                {priority && <span className={`tag ${getPriorityTagClass(priority)}`}>{priority}</span>}
            </div>
            <div className="card-description">
                {description}
            </div>
            <div className="card-meta">
                <span className="person">{assignedTo}</span>
                <span className="date">Due: {dueDate}</span>
            </div>
            <div className="card-actions">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className={`button ${action.type}`}
                        onClick={action.onClick}
                    >
                        {action.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default JobCard;