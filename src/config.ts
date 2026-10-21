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
        description: "I'm a Developer and Researcher passionate about building intelligent systems and modern digital experiences. I specialize in Machine Learning, Deep Learning, Computer Vision, and Full-Stack Web Development. Currently researching explainability in neural networks (SuperHybridNet XAI) and building projects that bridge the gap between research and real-world impact. Code is my medium, curiosity is my compass."
    },
    experiences: [
        {
            position: "B.E. Computer Science & Engineering",
            company: "RV College of Engineering, Bengaluru",
            period: "2024 - 2028",
            location: "Bengaluru, India",
            description: "Core CSE coursework in algorithms, operating systems, DBMS, digital design and computer organization, with most course projects shipped as working software, from a Verilog CPU to an algorithm-driven logistics optimizer.",
            responsibilities: [],
            technologies: ["Python", "C", "C++", "Verilog", "React", "Node.js", "PyTorch"]
        },
        {
            position: "Researcher, Explainable AI",
            company: "SuperHybridNet (SHNet)",
            period: "Ongoing",
            location: "India",
            description: "Studying how the SuperHybridNet architecture makes decisions, using GradCAM, SHAP and attention visualization to interpret layer activations and compare explainability methods across models.",
            responsibilities: [],
            technologies: ["Python", "PyTorch", "GradCAM", "SHAP", "XAI"]
        },
        {
            position: "Independent Developer",
            company: "Projects & Hackathons",
            period: "2025 - Present",
            location: "India",
            description: "Building end-to-end products across full-stack web, computer vision and embedded systems: a finance dashboard with AI insights, a cricket batting analyser, an ESP32 smart-metering testbed, and FairPay, a gig-worker payout auditor built at a hackathon.",
            responsibilities: [],
            technologies: ["React", "Node.js", "FastAPI", "OpenCV", "MediaPipe", "ESP32"]
        }
    ],
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


