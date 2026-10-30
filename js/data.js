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
    "I build and ship machine learning systems across speech, computer vision, and document AI, and I test them hard enough to know where they break.",

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
    focus: ["ML", "Vision", "Speech"],
    latest: "Whisper fine-tuning",
    status: "open to opportunities",
  },

  stats: [
    { value: "4.0", label: "GPA at ASU" },
    { value: "2", label: "published papers" },
    { value: "16.3%", label: "word error rate on unseen speakers, down from 22.5%" },
    { value: "May '27", label: "expected graduation" },
  ],

  about: [
    "I'm a Master's student in Data Science at Arizona State University (4.0 GPA, graduating May 2027), with a B.Tech in Computer Science and Business Systems from Bharati Vidyapeeth, Mumbai.",
    "Most recently, I fine-tuned Whisper for accented conversational English, measured it on speakers it had never heard, and deployed it as a public demo. I've also built a retinal image classifier, a document pipeline for pharmaceutical records, and a loan-risk model explained with SHAP. I care about results that hold up: locked test sets, confidence intervals, and honest limitations.",
    // Edit or remove this line to match what you're looking for
    "I'm currently looking for data science and machine learning internships and roles.",
  ],

  skills: [
    { group: "Languages", items: ["Python", "SQL", "Java"] },
    { group: "Machine Learning", items: ["scikit-learn", "XGBoost", "LightGBM", "SHAP", "Clustering", "NLP"] },
    { group: "Deep Learning", items: ["PyTorch", "Hugging Face Transformers", "TensorFlow/Keras", "Transfer learning", "Mixed-precision training"] },
    { group: "Speech, Vision & Documents", items: ["Whisper", "Speech recognition", "OpenCV", "MobileNetV2", "RAG", "LlamaIndex"] },
    { group: "Evaluation", items: ["Word error rate", "Bootstrap intervals", "Multi-seed experiments", "Error analysis", "Precision, recall, F1"] },
    { group: "Data & Visualization", items: ["Pandas", "NumPy", "Matplotlib", "Tableau"] },
    { group: "Databases", items: ["MySQL", "PostgreSQL", "SQLite"] },
    { group: "Deployment & Tools", items: ["FastAPI", "Docker", "GitHub Actions", "Flask", "Git", "Jupyter", "Google Colab"] },
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
  // links: demo / github / model / paper. Leave "" to hide.
  // featured: true makes a card full width. Use it on one project.
  projects: [
    {
      title: "Fine-Tuning Whisper for Accented English",
      period: "Fall 2026",
      org: "Arizona State University",
      featured: true,
      categories: ["Speech", "Deep Learning"],
      summary:
        "I fine-tuned OpenAI's Whisper-small (244M parameters) on 15.9 hours of real video-call conversations across many English accents, tested it on speakers it had never heard, and shipped it as a CPU web service.",
      highlights: [
        "Cut word error rate from 22.5% to 16.3% on 28 unseen speakers (95% interval for the gain: 4.2 to 8.7 points). All 3 seeds landed between 16.3% and 17.1%.",
        "Found that fine-tuning hurt read speech, then mixed 15% LibriSpeech clips back into training, which cut that damage by more than half.",
        "Separated real gains from transcription style: 2 to 3 points hold after controlling for it. On that measure, the much larger large-v3-turbo ties or slightly beats it.",
        "Caught a padding bug with a conversion check, then deployed a 253 MB int8 model using FastAPI and Docker, with 47 automated tests.",
      ],
      result: "16.3% word error rate on unseen speakers, down from 22.5%",
      tags: ["PyTorch", "Whisper", "Hugging Face", "FastAPI", "Docker"],
      links: {
        demo: "https://huggingface.co/spaces/mddalwai/whisper-small-edacc-demo",
        github: "https://github.com/mohammaddalwai/speech-ft",
        model: "https://huggingface.co/mddalwai/whisper-small-edacc",
      },
    },
    {
      title: "Multiple Eye Disease Detection",
      period: "Fall 2023, rebuilt 2026",
      org: "Bharati Vidyapeeth (DU) DET",
      categories: ["Computer Vision", "Deep Learning"],
      summary:
        "A CNN web app that sorts retinal images into 5 classes: cataract, diabetic retinopathy, glaucoma, normal, and other. It's a research demo, not medical advice.",
      highlights: [
        "Fine-tuned MobileNetV2 with transfer learning in TensorFlow/Keras on 1,000+ images from 4 public datasets.",
        "Used data augmentation to address class imbalance between healthy and diseased samples.",
        "Rebuilt the Flask app with Docker, input validation, automated tests, and GitHub Actions CI, then deployed a public demo.",
      ],
      result: "Published at ICICCT-2024",
      tags: ["TensorFlow/Keras", "MobileNetV2", "Flask", "Docker"],
      links: {
        demo: "https://huggingface.co/spaces/mddalwai/eye-detection",
        github: "https://github.com/mohammaddalwai/Multiple-eye-disease-detection-using-machine-learning",
      },
    },
    {
      title: "Document Intelligence for Pharma Records",
      period: "Fall 2026",
      org: "Extern × Pfizer AI externship",
      categories: ["Document AI"],
      summary:
        "A pipeline that reads pharmaceutical supplier documents, splits mixed PDFs into individual records, and answers questions about them using retrieval.",
      highlights: [
        "Segmented mixed PDFs with Qwen2.5-3B-Instruct, using separate prompts for document type and document boundaries, plus keyword fallback rules.",
        "Labeled all 10 pages of a sample PDF correctly against a hand-built answer key, compared with 90% for the model alone.",
        "Fed the extracted metadata into LlamaIndex for filtered retrieval.",
      ],
      result: "",
      tags: ["Python", "LlamaIndex", "RAG", "Qwen2.5"],
      links: {},
    },
    {
      title: "Loan Approval Prediction",
      period: "Fall 2025",
      org: "Arizona State University",
      categories: ["Predictive Modeling"],
      summary:
        "A machine learning pipeline that scores loan applications for risk and flags applicants likely to default.",
      highlights: [
        "Compared multiple models and engineered risk features that improved detection of likely defaulters.",
        "Grouped applicants into risk cohorts and explained the drivers with SHAP.",
        "Designed to help lenders reduce default exposure and prioritize manual reviews.",
      ],
      result: "",
      tags: ["Python", "Pandas", "SHAP", "Feature engineering"],
      links: {},
    },
    {
      title: "Placement Portal",
      period: "2026",
      org: "Full-stack web app",
      categories: ["Web Apps"],
      summary:
        "A campus recruitment app with separate roles for admins, companies, and students.",
      highlights: [
        "Admins approve companies and placement drives, and can search and blacklist accounts.",
        "Companies post drives and review applicants. Students upload resumes, apply, and track their applications.",
      ],
      result: "",
      tags: ["Flask", "SQLAlchemy", "SQLite", "Jinja2"],
      links: { github: "https://github.com/mohammaddalwai/Placement-Portal-Application" },
    },
    {
      title: "Speech Recognition for Indian-Accented English",
      period: "Feb – Apr 2022",
      org: "Languify AI · AI Trainee",
      categories: ["Speech", "Deep Learning"],
      summary:
        "An automatic speech recognition (ASR) system that combines acoustic and language modeling to transcribe Indian-accented English.",
      highlights: [
        "Implemented MFCC feature extraction, HMM decomposition, and ANN-based acoustic modeling.",
        "Trained and evaluated models on a custom dataset of 500+ audio recordings.",
      ],
      result: "WER ≈ 18%, about 15% better recognition accuracy",
      tags: ["Python", "MFCC", "HMM", "Neural networks"],
      links: {},
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
      org: "Languify AI",
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
      url: "", // add the paper link here to show "Read paper"
    },
  ],
};
