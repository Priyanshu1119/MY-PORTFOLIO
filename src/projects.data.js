// src/projects.data.js
export const projects = [
  // ====== MAJOR PROJECTS (Featured) ======
  {
    title: "AI‑Powered Workflow Automation Tool",
    date: "May 2025",
    summary:
      "Developed an AI-powered workflow automation tool that streamlines repetitive data tasks by integrating machine learning models with rule-based pipelines. The system enables users to upload datasets (Excel/CSV), run automated preprocessing, detect anomalies using ML algorithms, and generate structured reports — reducing manual work by up to 80%.",
    tags: ["AI/ML", "Workflow Automation", "Data Processing"],
    stack: ["Python", "Pandas", "Scikit‑learn", "Streamlit", "NumPy", "OpenPyXL", "Jupyter Notebook"],
    // code: "https://github.com/sanjayrawatt/ai-workflow-tool",
    live: "https://ai-workflow-tool-ayicuduwnom9ttcknnrv9y.streamlit.app/",
    featured: true,
  },
  {
    title: "CloudStore — Secure Cloud Storage",
    date: "June 2025",
    summary:
      "Created a secure cloud-based file storage, allowing users to upload, view, and manage documents seamlessly. Integrated with APIs for AWS S3-style storage, supporting files up to 5MB/s upload speeds. Focused on a clean, intuitive UI for user productivity.",
    tags: ["Cloud Storage", "Fullstack", "Secure File Access"],
    stack: ["React", "Node JS", "Express", "MongoDB", "AWS", "JWT", "CryptoJS", "Tailwind"],
    // code: "https://github.com/sanjayrawatt/cloud-storage-client",
    live: "https://my-secure-cloud-storage.netlify.app/",
    featured: true,
  },

  // ====== MORE PROJECTS ======
  {
    title: "MERN CRM Application",
    date: "July 2025",
    summary:
      "Customer relationship management app with contacts, deals, activity tracking, and analytics dashboards for sales workflows.",
    tags: ["Fullstack", "Web App"],
    stack: ["React", "Node JS", "Express", "MongoDB", "Redux"],
    // code: "https://github.com/sanjayrawatt/mern-crm-app",
    featured: false,
  },
  {
    title: "Urvann — Plant Store",
    date: "August 2025",
    summary:
      "E‑commerce experience for plants with catalog, cart, orders, and secure flows, built on the MERN stack.",
    tags: ["Fullstack", "E-commerce"],
    stack: ["React", "Node JS", "Express", "MongoDB", "Tailwind"],
    // code: "https://github.com/sanjayrawatt/urvann-plant-store",
    featured: false,
  },
  {
    title: "Food Delivery App",
    date: "May 2025",
    summary:
      "Food ordering and delivery flow with restaurant listings, cart, checkout, and order tracking.",
    tags: ["Fullstack", "Web App"],
    stack: ["React", "Node JS", "Express", "MongoDB"],
    // code: "https://github.com/sanjayrawatt/food-delivery-app",
    featured: false,
  },
];
