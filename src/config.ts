export const config = {
    developer: {
        name: "Omesh",
        fullName: "Omesh Sengar",
        title: "Developer & Researcher",
        description: "Developer & Researcher building intelligent systems and modern web applications. Passionate about machine learning, deep learning, computer vision, and creating next-gen digital experiences."
    },
    social: {
        github: "ByteWizard-tech",
        email: "omesh@omeshsengar.com",
        location: "India"
    },
    about: {
        title: "About Me",
        description: "I'm a Computer Science student at RVCE and a researcher who builds complete systems, from sensor hardware and data pipelines to production dashboards. My work spans applied machine learning, embedded/IoT and full-stack development: an agentic framework for flagging inciting social media content (in revision at Springer SNAM), ML models for autism detection from fMRI, and an IoT lab monitor that won Best Paper at ICTST 2025."
    },
    experiences: [
        {
            position: "B.E. Computer Science & Engineering",
            company: "RV College of Engineering, Bengaluru",
            period: "2024 - 2028",
            location: "Bengaluru, India",
            description: "GPA 9.23/10. Coursework in data structures & algorithms, discrete mathematics, computer networks and data science, with most course projects shipped as working systems, from a Verilog CPU to an algorithm-driven logistics optimizer.",
            responsibilities: [],
            technologies: []
        },
        {
            position: "Researcher, IoT Systems",
            company: "Best Paper Award, ICTST 2025",
            period: "2025",
            location: "India",
            description: "Built and presented an IoT-integrated smart lab environment monitor at the IFRRA International Conference on Trends in Science and Technology (India–Malaysia), where it won Best Paper.",
            responsibilities: [],
            technologies: []
        },
        {
            position: "Researcher, Applied ML",
            company: "RVCE Research Projects",
            period: "Now",
            location: "India",
            description: "Revising SENTINEL, an agentic framework that flags inciting social media content using LLM scoring and Neo4j graph centrality, for Springer SNAM. Also built a two-stage ensemble model for autism detection from fMRI (87.83% accuracy) and CNN crop diagnosis from multispectral imagery, and explored GradCAM/SHAP explainability on the SuperHybridNet architecture.",
            responsibilities: [],
            technologies: []
        }
    ],
    achievements: {
        stats: [
            { value: 9.23, decimals: 2, suffix: "", label: "GPA at RVCE" },
            { value: 2, decimals: 0, suffix: "", label: "Research manuscripts" },
            { value: 1, decimals: 0, suffix: "", label: "Best Paper Award" },
            { value: 10, decimals: 0, suffix: "+", label: "Projects shipped" }
        ],
        items: [
            {
                tag: "Award",
                title: "Best Paper Award, ICTST 2025",
                detail: "IoT-Integrated Smart Lab Environment Monitor, IFRRA International Conference on Trends in Science and Technology",
                date: "Jul 2025"
            },
            {
                tag: "Manuscript",
                title: "SENTINEL: Autonomous Agentic Framework for Detecting Inciting Social Media Content",
                detail: "In revision, Springer Social Network Analysis and Mining (SNAM)",
                date: "In revision"
            }
        ]
    },
    projects: [
        {
            id: 1,
            title: "CricketLytics",
            category: "AI / Computer Vision",
            technologies: "Python, MediaPipe, OpenCV, NumPy",
            image: "",
            github: "https://github.com/ByteWizard-tech/Criclytics",
            description: "Analyses cricket batting technique from video. Tracks 33 body landmarks with MediaPipe, measures joint angles live, classifies shots (drive, pull, sweep, cut and more), tracks the ball and gives shot-specific posture coaching."
        },
        {
            id: 2,
            title: "FinanceAI Dashboard",
            category: "Full Stack",
            technologies: "React, Node.js, Express, SQLite, JWT, Recharts",
            image: "",
            github: "https://github.com/ByteWizard-tech/finance-dashboard",
            live: "https://finance-dashboard-teal-two.vercel.app",
            description: "Personal finance dashboard with JWT auth, budgets and interactive charts. Auto-categorizes transactions, flags unusual spending, compares months and forecasts next month's expenses."
        },
        {
            id: 3,
            title: "Logistics AI",
            category: "Algorithms",
            technologies: "Python, FastAPI, SQLite, JavaScript",
            image: "",
            github: "https://github.com/ByteWizard-tech/logistics_ai",
            description: "Fleet routing optimizer for Bengaluru deliveries. Orders flow through a QuickSort priority triage, 0/1 Knapsack van packing and route optimization, visualised live on a synced web dashboard."
        },
        {
            id: 4,
            title: "16-bit RISC CPU",
            category: "Hardware / Verilog",
            technologies: "Verilog, Icarus Verilog, JavaScript",
            image: "",
            github: "https://github.com/ByteWizard-tech/16bitcpu-verilog",
            description: "A complete 16-bit RISC CPU in Verilog: ALU, register file, memories and an FSM control unit, plus an interactive visualizer that steps through fetch, decode, execute, memory and writeback cycle by cycle."
        }
    ],
    contact: {
        email: "omesh@omeshsengar.com",
        github: "https://github.com/ByteWizard-tech",
        linkedin: "https://linkedin.com/in/omeshsengar",
        twitter: "https://x.com/omeshsengar",
        facebook: "https://www.facebook.com/omeshsengar",
        instagram: "https://www.instagram.com/omeshsengar"
    },
    skills: {
        develop: {
            title: "DEVELOPER",
            description: "Building full-stack web apps & intelligent systems",
            details: "Developing modern web applications from frontend to backend. Building APIs, interactive UIs, and scalable systems using React, Node.js, Python, and TypeScript.",
            tools: ["Python", "JavaScript", "TypeScript", "React", "Node.js", "HTML", "CSS", "C/C++", "Verilog", "Git", "Linux", "Figma", "REST APIs", "Docker"]
        },
        design: {
            title: "RESEARCHER",
            description: "ML/DL research, XAI & Computer Vision",
            details: "Working on machine learning, deep learning, and explainable AI research. Specializing in neural network interpretability, computer vision pipelines, and bridging research with practical applications.",
            tools: ["PyTorch", "TensorFlow", "GradCAM", "SHAP", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "OpenCV", "Jupyter", "XAI", "Computer Vision", "NLP", "Research"]
        }
    }
};


