/*
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to update the portfolio — no HTML changes needed.
 *  Set any link to "" to hide its button.
 * ─────────────────────────────────────────────────────────────
 */
window.PORTFOLIO = {
  name: "Mohammad Dalwai",
  fullName: "Mohammad Asgar Khan Dalwai",
  initials: "MD",
  headline: "MS Data Science @ Arizona State University",
  location: "Tempe, AZ",

  // Cycled by the typing effect in the hero
  roles: [
    "data scientist",
    "machine learning engineer",
    "computer vision builder",
    "speech & NLP tinkerer",
  ],

  tagline:
    "I build machine learning systems end to end, from feature engineering and model comparison to apps people can actually use.",

  links: {
    email: "mohammaddalwai@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohammad-dalwai-18b5a6201/",
    github: "https://github.com/mohammaddalwai",
    resume: "assets/resume.pdf",
  },

  // Rendered as the code card in the hero
  profileCard: {
    name: "Mohammad Dalwai",
    program: "MS, Data Science",
    school: "Arizona State University",
    gpa: 4.0,
    focus: ["ML", "Computer Vision", "Speech"],
    status: "open to opportunities",
  },

  stats: [
    { value: "4.0", label: "GPA at ASU" },
    { value: "2", label: "peer-reviewed publications" },
    { value: "~18%", label: "word error rate on accented ASR" },
    { value: "May '27", label: "expected graduation" },
  ],

  about: [
    "I'm a Master's student in Data Science at Arizona State University (4.0 GPA, graduating May 2027), with a B.Tech in Computer Science and Business Systems from Bharati Vidyapeeth, Mumbai.",
    "My work spans computer vision, speech recognition, and predictive modeling. I've built a CNN-based eye disease screening tool, a speech recognizer for Indian-accented English, and a loan-risk pipeline designed to be interpretable. I care about models that are accurate and explainable, and about shipping them as tools people can use.",
    // Edit or remove this line to match what you're looking for
    "I'm currently looking for data science and machine learning internships and roles.",
  ],

  skills: [
    { group: "Languages", items: ["Python", "SQL", "Java"] },
    { group: "Machine Learning", items: ["scikit-learn", "XGBoost", "SHAP", "Clustering", "NLP"] },
    { group: "Deep Learning & CV", items: ["CNNs (MobileNetV2)", "OpenCV", "Speech recognition"] },
    { group: "Data & Visualization", items: ["Pandas", "NumPy", "Matplotlib", "Tableau"] },
    { group: "Databases", items: ["MySQL", "PostgreSQL"] },
    { group: "Tools", items: ["Jupyter", "Git", "VS Code", "PyCharm", "MySQL Workbench", "Flask", "Tkinter"] },
  ],

  certifications: [
    {
      name: "Industrial Project Completion Certificate",
      url: "https://drive.google.com/file/d/1OIQAhx1ttZ8hXWHzsdnSZoOANsb09u9j/view?usp=sharing",
    },
    {
      name: "Foundational Course in Programming and Data Science",
      url: "https://drive.google.com/file/d/1gVzqdrUGMSBbpjbeNtQGED7K7wgMZ7zn/view?usp=sharing",
    },
  ],

  // categories drive the filter chips; tags show on each card.
  // links: github / demo / paper. Leave "" to hide.
  projects: [
    {
      title: "Multiple Eye Disease Detection",
      period: "Fall 2023",
      org: "Bharati Vidyapeeth (DU) DET",
      categories: ["Computer Vision", "Deep Learning"],
      summary:
        "A deep learning system that screens retinal images for cataract, glaucoma, and diabetic retinopathy.",
      highlights: [
        "Used a MobileNetV2 CNN for efficient feature extraction and classification.",
        "Improved generalization with image preprocessing and data augmentation.",
        "Built a Flask web app for real-time image upload and prediction.",
      ],
      result: "Published at ICICCT-2024",
      tags: ["Python", "MobileNetV2", "CNN", "Flask"],
      links: {
        github: "",
        demo: "",
        paper: "https://docs.google.com/document/d/1JsJTcjzSLB0P99B9rA1wsvkD85L2Eaka/edit?usp=sharing&ouid=103370580876521542473&rtpof=true&sd=true",
      },
    },
    {
      title: "Speech Recognition for Indian-Accented English",
      period: "Feb – Apr 2022",
      org: "Languify · AI Trainee",
      categories: ["Speech", "Deep Learning"],
      summary:
        "An automatic speech recognition (ASR) system that combines acoustic and language modeling to transcribe Indian-accented English.",
      highlights: [
        "Implemented MFCC feature extraction, HMM decomposition, and ANN-based acoustic modeling.",
        "Trained and evaluated models on a custom dataset of 500+ audio recordings.",
      ],
      result: "WER ≈ 18%, about 15% better recognition accuracy",
      tags: ["Python", "MFCC", "HMM", "Neural networks"],
      links: { github: "", demo: "", paper: "" },
    },
    {
      title: "Loan Approval Prediction",
      period: "Fall 2025",
      org: "Arizona State University",
      categories: ["Predictive Modeling"],
      summary:
        "A machine learning pipeline that scores loan applications for risk and flags applicants likely to default.",
      highlights: [
        "Compared multiple models and analyzed feature importance to explain what drives approval risk.",
        "Engineered risk features that improved detection of likely defaulters.",
        "Designed to help lenders reduce default exposure and prioritize manual reviews.",
      ],
      result: "",
      tags: ["Python", "Pandas", "Classification", "Feature engineering"],
      links: { github: "", demo: "", paper: "" },
    },
    {
      title: "Automated Attendance with Facial Recognition",
      period: "2024",
      org: "Research publication",
      categories: ["Computer Vision"],
      summary:
        "A facial-recognition system that automates attendance marking, published in the IAES International Journal of Artificial Intelligence.",
      highlights: [],
      result: "Published in IJ-AI, Vol. 13, No. 1 (2024)",
      tags: ["Python", "Computer vision", "Face recognition"],
      links: {
        github: "",
        demo: "",
        paper: "https://drive.google.com/file/d/1tR0UUE2Gv0oIrv5kYg4TmmeCcY1DyOAr/view?usp=sharing",
      },
    },
  ],

  // type: "education" | "work". Listed top to bottom as written.
  timeline: [
    {
      type: "education",
      title: "Master of Science in Data Science",
      org: "Arizona State University",
      location: "Tempe, AZ",
      date: "Expected May 2027",
      meta: "GPA 4.0",
      courses: [
        "Analyzing Big Data",
        "Statistical Machine Learning",
        "Statistics for Data Analysts",
        "Data Processing at Scale",
        "Data Mining",
        "Data Visualization",
        "Advanced Database Management Systems",
        "Advanced Computer Network Security",
      ],
    },
    {
      type: "education",
      title: "B.Tech in Computer Science and Business Systems",
      org: "Bharati Vidyapeeth (DU) DET",
      location: "Mumbai, India",
      date: "June 2024",
      meta: "GPA 3.4",
      courses: [
        "Data Structures and Algorithms",
        "Machine Learning",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Internet of Things",
        "Information Security",
      ],
    },
    {
      type: "work",
      title: "Artificial Intelligence Trainee",
      org: "Languify",
      location: "Mumbai, India",
      date: "Feb 2022 – Apr 2022",
      bullets: [
        "Built an automatic speech recognition (ASR) system combining acoustic and language modeling to recognize Indian-accented English speech.",
        "Implemented MFCC feature extraction, HMM decomposition, and ANN-based deep learning across acoustic modeling, language modeling, and data preprocessing.",
        "Reduced word error rate to ~18% on a custom dataset of 500+ audio recordings, improving recognition accuracy by ~15%.",
      ],
    },
  ],

  publications: [
    {
      title: "Automated Attendance Management System Using Facial Recognition",
      venue: "IAES International Journal of Artificial Intelligence (IJ-AI), Vol. 13, No. 1",
      date: "March 2024",
      url: "https://drive.google.com/file/d/1tR0UUE2Gv0oIrv5kYg4TmmeCcY1DyOAr/view?usp=sharing",
    },
    {
      title: "Multiple Eye Disease Detection Using Machine Learning",
      venue: "International Conference on Intelligent Computing and Communication Techniques (ICICCT-2024)",
      date: "June 2024",
      url: "https://docs.google.com/document/d/1JsJTcjzSLB0P99B9rA1wsvkD85L2Eaka/edit?usp=sharing&ouid=103370580876521542473&rtpof=true&sd=true",
    },
  ],
};
