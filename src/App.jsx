import React from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import JobCard from './components/Jobs/JobCard.jsx'

function App() {
  const handleComplete = () => {
        alert('Task Completed!');
    };

    const handleCancel = () => {
        alert('Task Cancelled!');
    };

    const handleStart = () => {
        alert('Task Started!');
    };

    const handleRestart = () => {
        alert('Task Restarted!');
    };

    const jobCardsData = [
        {
            title: "Fix login authentication bug",
            status: "In Progress",
            priority: "High",
            description: "Users are experiencing issues with login authentication. Need to investigate and fix the OAuth integration.",
            assignedTo: "John Doe",
            dueDate: "Jan 28, 2025",
            actions: [
                { label: "Complete", type: "primary", onClick: handleComplete },
                { label: "Cancel", type: "secondary", onClick: handleCancel },
            ],
        },
        {
            title: "Implement new dashboard features",
            status: "Pending",
            priority: "Medium",
            description: "Add new widgets and charts to the main dashboard based on user feedback.",
            assignedTo: "Jane Smith",
            dueDate: "Feb 5, 2025",
            actions: [
                { label: "Start", type: "primary", onClick: handleStart },
                { label: "Cancel", type: "secondary", onClick: handleCancel },
            ],
        },
        {
            title: "Mobile app testing",
            status: "Cancelled",
            priority: "Medium",
            description: "Conduct comprehensive testing of the mobile application across different devices.",
            assignedTo: "Alex Brown",
            dueDate: "Jan 30, 2025",
            actions: [
                { label: "Restart", type: "restart", onClick: handleRestart },
            ],
        },
        {
            title: "Implement new dashboard features",
            status: "Pending",
            priority: "Medium",
            description: "Add new widgets and charts to the main dashboard based on user feedback.",
            assignedTo: "Jane Smith",
            dueDate: "Feb 5, 2025",
            actions: [
                { label: "Start", type: "primary", onClick: handleStart },
                { label: "Cancel", type: "secondary", onClick: handleCancel },
            ],
        },
        
    ];

  return (
    <div>
      <Dashboard/>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'center', padding: '20px' }}>
            {jobCardsData.map((card, index) => (
                <JobCard
                    key={index}
                    title={card.title}
                    status={card.status}
                    priority={card.priority}
                    description={card.description}
                    assignedTo={card.assignedTo}
                    dueDate={card.dueDate}
                    actions={card.actions}
                />
            ))}
        </div>
    </div>
  )
}

export default App