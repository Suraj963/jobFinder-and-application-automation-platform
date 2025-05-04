import React, { useState } from 'react';
import './HomeAnimations.css';
import JobCard from './JobCard';

const sampleJobs = [
    {
        title: 'Frontend Developer',
        company: 'Tech Solutions',
        location: 'Remote',
        platform: 'LinkedIn',
        type: 'Full Time',
        experience: 'Mid',
        description: 'Work on modern web applications using React and Tailwind CSS.',
        link: 'https://linkedin.com/job/frontend-dev',
    },
    {
        title: 'Backend Engineer',
        company: 'Innovatech',
        location: 'Bangalore',
        platform: 'Indeed',
        type: 'Full Time',
        experience: 'Senior',
        description: 'Design scalable backend systems with Node.js and MongoDB.',
        link: 'https://indeed.com/job/backend-engineer',
    },
    {
        title: 'Backend Engineer',
        company: 'Innovatech',
        location: 'Bangalore',
        platform: 'Indeed',
        type: 'Full Time',
        experience: 'Senior',
        description: 'Design scalable backend systems with Node.js and MongoDB.',
        link: 'https://indeed.com/job/backend-engineer',
    },
    {
        title: 'UI/UX Designer',
        company: 'PixelCraft',
        location: 'Mumbai',
        platform: 'LinkedIn',
        type: 'Contract',
        experience: 'Mid',
        description: 'Create user-centric designs for mobile and web apps.',
        link: 'https://linkedin.com/job/uiux-designer',
    },
    {
        title: 'DevOps Engineer',
        company: 'CloudOps',
        location: 'Pune',
        platform: 'Indeed',
        type: 'Full Time',
        experience: 'Mid',
        description: 'Automate CI/CD pipelines and manage cloud infrastructure.',
        link: 'https://indeed.com/job/devops-engineer',
    },
    {
        title: 'QA Analyst',
        company: 'TestRight',
        location: 'Chennai',
        platform: 'LinkedIn',
        type: 'Full Time',
        experience: 'Entry',
        description: 'Manual and automation testing for web applications.',
        link: 'https://linkedin.com/job/qa-analyst',
    },
    {
        title: 'Mobile App Developer',
        company: 'Appify',
        location: 'Remote',
        platform: 'Indeed',
        type: 'Full Time',
        experience: 'Mid',
        description: 'Develop cross-platform mobile apps using Flutter.',
        link: 'https://indeed.com/job/mobile-app-dev',
    },
    {
        title: 'Product Manager',
        company: 'Prodigy',
        location: 'Delhi',
        platform: 'LinkedIn',
        type: 'Full Time',
        experience: 'Senior',
        description: 'Lead product teams and manage product lifecycle.',
        link: 'https://linkedin.com/job/product-manager',
    },
    {
        title: 'Data Scientist',
        company: 'DataWiz',
        location: 'Hyderabad',
        platform: 'Indeed',
        type: 'Full Time',
        experience: 'Mid',
        description: 'Analyze data and build ML models for business insights.',
        link: 'https://indeed.com/job/data-scientist',
    },
    {
        title: 'System Administrator',
        company: 'NetSecure',
        location: 'Kolkata',
        platform: 'LinkedIn',
        type: 'Full Time',
        experience: 'Mid',
        description: 'Manage and secure company IT infrastructure.',
        link: 'https://linkedin.com/job/sysadmin',
    },
    {
        title: 'Business Analyst',
        company: 'BizInsight',
        location: 'Remote',
        platform: 'Indeed',
        type: 'Contract',
        experience: 'Entry',
        description: 'Gather requirements and analyze business processes.',
        link: 'https://indeed.com/job/business-analyst',
    },
];

const Home = () => {
const [showJobs, setShowJobs] = useState(false);
    const [checkedState, setCheckedState] = useState(Array(sampleJobs.length).fill(true));

    const handleCheck = idx => {
        setCheckedState(prev => prev.map((v, i) => (i === idx ? !v : v)));
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-start pt-4 md:pt-36 px-2 md:px-8">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-3 md:mb-4 w-full max-w-3xl animate-lightning">
                Apply Jobs Across Platforms
            </h1>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-7 md:mb-10 max-w-2xl w-full">
                Find and apply to jobs from LinkedIn, Indeed, and more all in one place, with a single search.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col items-center w-full max-w-5xl">
                <div className="flex flex-col sm:flex-row items-stretch w-full bg-gray-800 rounded-2xl shadow-lg px-3 sm:px-6 py-3 sm:py-4 mb-5 sm:mb-6 gap-3 sm:gap-2 bg-[#23213a]">
                    {/* Search Input */}
                    <div className="flex items-center bg-[#23213a] border border-[#3b3a5a] rounded-lg px-3 py-2 w-full sm:w-1/2 mb-2 sm:mb-0 sm:mr-2">
                        <span className="text-gray-400 mr-2 text-xl">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        </span>
                        <input
                            type="text"
                            placeholder="For Software Developer"
                            className="bg-transparent outline-none text-white w-full placeholder-gray-400 text-sm sm:text-base transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-blue-400 focus:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] animated-input"
                        />
                    </div>
                    {/* Target Jobs Dropdown */}
                    <div className="flex items-center bg-[#23213a] border border-[#3b3a5a] rounded-lg px-3 py-2 w-full sm:w-1/4 mb-2 sm:mb-0 sm:mr-2">
                        <span className="text-gray-400 mr-2 text-xl">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M4 10h16"/></svg>
                        </span>
                        <select className="bg-[#23213a] text-white outline-none w-full text-sm sm:text-base transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-green-400 focus:shadow-[0_0_10px_2px_rgba(34,197,94,0.5)] animated-dropdown">
                            <option>Target 100 jobs</option>
                            <option>Target 50 jobs</option>
                            <option>Target 200 jobs</option>
                        </select>
                    </div>
                    {/* Start Agent Button */}
                    <button
                        className="flex items-center justify-center bg-gradient-to-r from-[#5a4fff] to-[#23c6e6] text-white font-semibold rounded-lg px-4 sm:px-6 py-2 shadow hover:from-[#4a3fd9] hover:to-[#1bb3cc] transition w-full sm:w-auto text-sm sm:text-base"
                        onClick={() => setShowJobs(true)}
                    >
                        <svg className="mr-2" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                        Start Agent
                    </button>
                </div>

                {/* Filters */}
                {!showJobs && (
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
                    <select className="bg-[#23213a] border border-[#3b3a5a] text-gray-200 px-4 sm:px-6 py-2 rounded-full shadow focus:outline-none text-sm sm:text-base transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-blue-400 focus:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] animated-dropdown">
                        <option>All Platforms</option>
                        <option>LinkedIn</option>
                        <option>Indeed</option>
                    </select>
                    <select className="bg-[#23213a] border border-[#3b3a5a] text-gray-200 px-4 sm:px-6 py-2 rounded-full shadow focus:outline-none border border-red-400 text-sm sm:text-base transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-red-400 focus:shadow-[0_0_10px_2px_rgba(248,113,113,0.5)] animated-dropdown">
                        <option>Select Profile *</option>
                        <option>Profile 1</option>
                        <option>Profile 2</option>
                    </select>
                    <select className="bg-[#23213a] border border-[#3b3a5a] text-gray-200 px-4 sm:px-6 py-2 rounded-full shadow focus:outline-none text-sm sm:text-base transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-green-400 focus:shadow-[0_0_10px_2px_rgba(34,197,94,0.5)] animated-dropdown">
                        <option>Location</option>
                        <option>Remote</option>
                        <option>Onsite</option>
                    </select>
                    <select className="bg-[#23213a] border border-[#3b3a5a] text-gray-200 px-4 sm:px-6 py-2 rounded-full shadow focus:outline-none text-sm sm:text-base transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-yellow-400 focus:shadow-[0_0_10px_2px_rgba(250,204,21,0.5)] animated-dropdown">
                        <option>Job Type</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                    </select>
                    <select className="bg-[#23213a] border border-[#3b3a5a] text-gray-200 px-4 sm:px-6 py-2 rounded-full shadow focus:outline-none text-sm sm:text-base transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-purple-400 focus:shadow-[0_0_10px_2px_rgba(168,85,247,0.5)] animated-dropdown">
                        <option>Work Type</option>
                        <option>Hybrid</option>
                        <option>Remote</option>
                    </select>
                    <select className="bg-[#23213a] border border-[#3b3a5a] text-gray-200 px-4 sm:px-6 py-2 rounded-full shadow focus:outline-none text-sm sm:text-base transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-purple-400 focus:shadow-[0_0_10px_2px_rgba(168,85,247,0.5)] animated-dropdown">
                        <option>Experience Level</option>
                        <option>Entry</option>
                        <option>Mid</option>
                        <option>Senior</option>
                    </select>
                </div>
                )}
            </div>
            {/* Show Continue to Apply button when jobs are displayed */}
            {showJobs && (
                <button
                    className="mt-8 mb-2 px-5 py-2 text-base sm:px-8 sm:py-3 sm:text-lg bg-gradient-to-r from-[#23c6e6] to-[#5a4fff] text-white font-bold rounded-lg shadow-lg hover:from-[#1bb3cc] hover:to-[#4a3fd9] transition"
                >
                    Continue to Apply
                </button>
            )}
            {/* Render Job Cards below the search section */}
            {showJobs && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-4 w-full">
                    {sampleJobs.map((job, idx) => (
                        <JobCard key={idx} {...job} checked={checkedState[idx]} onCheck={() => handleCheck(idx)} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;