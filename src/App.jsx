import React, { useEffect, useState } from "react";
// Assuming Dashboard and JobCard are structured within components folders
import Dashboard from './components/Dashboard/Dashboard.jsx'; // Make sure path and extension are correct
import JobCard from './components/Jobs/JobCard.jsx';         // Make sure path and extension are correct
import './components/Jobs/JobCard.css';                      // Make sure path is correct
import { collection, getDocs } from "firebase/firestore";
import  db  from "./firebaseConfig.js"; // Make sure path is correct

// Import your footer image (assuming it's in src/assets)
import footerLogo from './assets/cc.jpg'; // Adjust path as needed for your project structure

function App() {
    // These handlers are now defined here to be passed to actions if needed
    const handleComplete = () => { alert('Task Completed!'); };
    const handleCancel = () => { alert('Task Cancelled!'); };
    const handleStart = () => { alert('Task Started!'); };
    const handleRestart = () => { alert('Task Restarted!'); };

    const [jobCardsData, setJobCardsData] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                // Ensure 'db' is correctly initialized and 'getFirestore' is imported in firebaseConfig.js
                const querySnapshot = await getDocs(collection(db, "jobCards"));
                const jobs = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    // Dynamically create actions based on status for JobCard component
                    let actions = [];
                    switch (data.status.toLowerCase()) {
                        case 'in progress':
                            actions = [
                                { label: "Complete", type: "primary", onClick: handleComplete },
                                { label: "Cancel", type: "secondary", onClick: handleCancel },
                            ];
                            break;
                        case 'pending':
                            actions = [
                                { label: "Start", type: "primary", onClick: handleStart },
                                { label: "Cancel", type: "secondary", onClick: handleCancel },
                            ];
                            break;
                        case 'cancelled':
                            actions = [
                                { label: "Restart", type: "restart", onClick: handleRestart },
                            ];
                            break;
                        case 'completed':
                            // Maybe add a "View Details" or "Archive" action for completed tasks
                            actions = [
                                { label: "View", type: "secondary", onClick: () => alert('View details') },
                            ];
                            break;
                        default:
                            actions = [];
                    }

                    return {
                        id: doc.id,
                        ...data,
                        assignedTo: data.assignee, // Map 'assignee' from Firebase to 'assignedTo' for JobCard
                        actions: actions,          // Assign the dynamically created actions
                    };
                });
                setJobCardsData(jobs);
            } catch (error) {
                console.error("Error fetching job cards:", error);
            }
        };

        fetchJobs(); // <--- CALL THE FUNCTION HERE
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            {/* Dashboard component likely contains header, summary cards, and filter bar */}
            <Dashboard />

            {/* Section to display the fetched JobCard components */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px', // Adjusted gap for better aesthetics, was 60px
                justifyContent: 'flex-start', // Align to start
                padding: '20px', // Spacing around the entire grid
                // Add margin-top if you want space between Dashboard content and these cards
                marginTop: '20px',
            }}>
                {jobCardsData.length > 0 ? (
                    jobCardsData.map((card) => ( // Using card.id as key is better if unique
                        <JobCard
                            key={card.id} // Use Firebase doc ID as key for stability
                            title={card.title}
                            status={card.status}
                            priority={card.priority}
                            description={card.description}
                            assignedTo={card.assignedTo}
                            dueDate={card.dueDate}
                            actions={card.actions}
                        />
                    ))
                ) : (
                    <p style={{ width: '100%', textAlign: 'center' }}>No job cards found or still loading...</p>
                )}
            </div>

            {/* Footer Section */}
            <footer className="app-footer">
                <img src={footerLogo} alt="Company Logo" className="footer-logo" /> {/* Using imported image */}
                <p>&copy; 2025 Jobcards. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;