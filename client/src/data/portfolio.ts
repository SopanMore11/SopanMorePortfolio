export const portfolioData = {
  personal: {
    name: "Sopan More",
    title: "AI Engineer @BGSW | AI&ML | GenerativeAI | LLM | LangChain | YOLO v10 | Building Scalable AI Systems",
    location: "Hyderabad, Telangana, India",
    email: "sopanm114@gmail.com",
    phone: "+918879594650",
    linkedin: "https://linkedin.com/in/sopan-more-aab7aa188",
    github: "https://github.com/SopanMore11",
    profileImage: "/my_photo.png",
  },
  
  about: `As an AI Engineer with a deep-seated passion for building intelligent systems, I thrive at the intersection of foundation models, computer vision, and scalable MLOps. My experience at Bosch has been centered on architecting and deploying end-to-end Generative AI solutions, from developing sophisticated RAG-based chatbots with Azure OpenAI and LangChain to designing complex agentic workflows that drive automation and business value.

I am proficient in Python and PyTorch and have hands-on experience fine-tuning large language models (LLMs) using techniques like LoRA. I'm driven by the challenge of solving complex problems and am always exploring the frontiers of AI, including Diffusion Models, Transformers, and efficient model deployment.

With a solid foundation in both software engineering and advanced machine learning concepts, backed by a Minor in AI/ML, I am passionate about contributing to building the next generation of AI-powered products, particularly in areas involving model fine-tuning, MLOps, and creating tangible product impact.`,

  experience: [
    {
      id: "1",
      title: "AI Engineer",
      company: "Bosch Global Software Technologies",
      location: "Hyderabad, Telangana, India",
      period: "January 2025 - Present",
      current: true,
      achievements: [
        "Enterprise Chatbot Development: Architected and deployed an advanced RAG chatbot using Azure OpenAI, Azure AI Search, and LangChain, reducing information retrieval time by over 60% for key business units.",
        "Agentic AI Workflows: Designed and implemented multi-agent systems that automate complex decision-making processes, improving operational efficiency.",
        "NLP & Sentiment Analysis: Leveraged NLP techniques and BERTopic for deep sentiment analysis and topic modeling on customer feedback.",
        "Cloud & MLOps: Utilized Azure cloud services to build robust, scalable data ingestion and processing pipelines for AI models."
      ]
    },
    {
      id: "2", 
      title: "Associate Software Engineer - GENAI",
      company: "Bosch Global Software Technologies",
      location: "Coimbatore, Tamil Nadu, India",
      period: "January 2024 - December 2024",
      current: false,
      achievements: [
        "Developed advanced Chatbots using Azure AI resources including Azure OpenAI, Azure Search Service, Azure Document Intelligence, and Azure Storage.",
        "Designed agentic workflows for seamless automation and dynamic decision-making in AI-driven applications."
      ]
    },
    {
      id: "3",
      title: "Subject Matter Expert",
      company: "Chegg India",
      location: "Remote",
      period: "February 2021 - August 2022",
      current: false,
      achievements: [
        "Provided expert solutions and guidance in electrical engineering and AI/ML subjects, helping students understand complex concepts through detailed explanations."
      ]
    }
  ],

  projects: [
    {
      id: "1",
      title: "LoRA Fine-Tuning for Stable Diffusion",
      description: "Built a modular, scalable pipeline to fine-tune Stable Diffusion using LoRA, reducing compute cost and enabling easy customization for diverse image generation tasks.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["PyTorch", "Stable Diffusion", "LoRA", "MLOps", "Diffusers"],
      githubUrl: "#",
      demoUrl: "#",
      type: "personal",
      longDescription: "This project demonstrates advanced techniques in fine-tuning diffusion models using Low-Rank Adaptation (LoRA), a parameter-efficient method that significantly reduces computational requirements while maintaining model quality. The pipeline is designed to be modular and scalable, making it accessible for various image generation tasks.",
      objectives: [
        "Reduce computational cost of model fine-tuning by 95%",
        "Create a reproducible, config-driven training pipeline",
        "Enable rapid experimentation with different datasets and styles",
        "Build a production-ready deployment system"
      ],
      features: [
        "Modular architecture with clean separation of concerns",
        "Config-driven system using JSON for experiment tracking",
        "Support for multiple LoRA variants and hyperparameters",
        "Integrated monitoring and visualization tools",
        "Optimized inference pipeline for fast generation",
        "Comprehensive documentation and examples"
      ],
      challenges: [
        "Balancing model quality with computational efficiency",
        "Handling diverse dataset formats and preprocessing requirements",
        "Optimizing memory usage for large-scale training",
        "Ensuring reproducibility across different hardware configurations"
      ],
      results: [
        "95% reduction in training compute cost compared to full fine-tuning",
        "Successfully fine-tuned models on custom datasets with <4GB VRAM",
        "Achieved comparable quality to full fine-tuning methods",
        "Built a reusable pipeline adopted by the open-source community"
      ],
      role: "Solo Developer",
      duration: "3 months",
      category: "Generative AI"
    },
    {
      id: "2",
      title: "Stock Price Prediction using LSTM",
      description: "Developed a multi-layer LSTM neural network with advanced financial indicators (EMA, RSI, MACD) for accurate next-day stock price predictions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["LSTM", "TensorFlow", "Time Series", "Financial Analytics", "Python"],
      githubUrl: "#",
      demoUrl: "#",
      type: "personal",
      longDescription: "A sophisticated stock price prediction system leveraging Long Short-Term Memory (LSTM) neural networks combined with technical financial indicators. The model processes historical price data along with derived features to forecast next-day stock prices with high accuracy.",
      objectives: [
        "Predict next-day stock prices with >85% directional accuracy",
        "Incorporate multiple technical indicators for robust predictions",
        "Build an automated data pipeline for real-time updates",
        "Create an intuitive visualization dashboard"
      ],
      features: [
        "Multi-layer LSTM architecture with dropout regularization",
        "Advanced feature engineering (EMA, RSI, MACD, Bollinger Bands)",
        "Automated data collection and preprocessing pipeline",
        "Real-time prediction and visualization dashboard",
        "Backtesting framework for strategy validation",
        "Risk management and portfolio optimization tools"
      ],
      challenges: [
        "Handling market volatility and non-stationary time series",
        "Preventing overfitting with limited historical data",
        "Dealing with missing data and market anomalies",
        "Balancing model complexity with interpretability"
      ],
      results: [
        "Achieved 87% directional accuracy on test dataset",
        "Outperformed baseline models by 23% in RMSE metrics",
        "Successfully predicted major market movements",
        "Built a scalable system supporting multiple stock tickers"
      ],
      role: "Data Scientist & Developer",
      duration: "2 months",
      category: "Machine Learning"
    },
    {
      id: "3",
      title: "Enterprise Web Crawling Agent",
      description: "Designed and deployed a highly scalable web crawler for regulatory compliance, extracting documents from 1000+ URLs with high accuracy and efficiency.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "BeautifulSoup", "Async Processing", "Compliance"],
      githubUrl: null,
      demoUrl: null,
      type: "work",
      longDescription: "An enterprise-grade web crawling system built for Bosch Digital to automate regulatory document extraction and monitoring. The system processes thousands of regulatory websites, extracting compliance-critical documents with high accuracy and maintaining up-to-date regulatory intelligence.",
      objectives: [
        "Automate regulatory document extraction from 1000+ sources",
        "Eliminate dependency on external compliance agencies",
        "Build a scalable system for continuous monitoring",
        "Ensure high accuracy in document classification"
      ],
      features: [
        "Asynchronous crawling with Python asyncio for high throughput",
        "Intelligent document classification using NLP",
        "Cyclic monitoring system for regulatory updates",
        "Robust error handling and retry mechanisms",
        "Comprehensive logging and monitoring dashboard",
        "Integration with Bosch Digital workflows"
      ],
      challenges: [
        "Handling diverse website structures and formats",
        "Managing rate limits and anti-scraping mechanisms",
        "Ensuring data quality and accuracy at scale",
        "Building fault-tolerant distributed crawling system"
      ],
      results: [
        "100% elimination of external agency dependency",
        "Successfully crawls 1000+ regulatory websites daily",
        "Reduced compliance research time by 90%",
        "Achieved 98% accuracy in document classification",
        "Deployed in production at Bosch Digital"
      ],
      role: "Lead AI Engineer",
      duration: "4 months",
      category: "Automation & AI"
    },
    {
      id: "4",
      title: "DocupediaAI - RAG Knowledge Assistant",
      description: "Implemented a Retrieval-Augmented Generation chatbot integrated with Bosch's internal documentation repository, providing real-time, context-aware responses.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Azure OpenAI", "RAG", "LangChain", "Azure Cognitive Search"],
      githubUrl: null,
      demoUrl: null,
      type: "work",
      longDescription: "DocupediaAI is an advanced Retrieval-Augmented Generation (RAG) system that serves as an intelligent knowledge assistant for Bosch's internal documentation. The system leverages Azure OpenAI and sophisticated retrieval mechanisms to provide accurate, context-aware responses to employee queries.",
      objectives: [
        "Reduce information retrieval time by 60%+ for business units",
        "Provide accurate, contextual answers from vast documentation",
        "Build a scalable system supporting thousands of users",
        "Ensure security and compliance with enterprise standards"
      ],
      features: [
        "Advanced RAG architecture with Azure OpenAI integration",
        "Semantic search using Azure Cognitive Search",
        "Document processing with Azure Document Intelligence",
        "Multi-modal support for PDFs, Word docs, and web pages",
        "Context-aware conversation management",
        "Role-based access control and security",
        "Analytics dashboard for usage insights"
      ],
      challenges: [
        "Processing and indexing massive documentation repositories",
        "Ensuring response accuracy and relevance",
        "Handling complex, multi-turn conversations",
        "Maintaining low latency at scale",
        "Implementing enterprise-grade security"
      ],
      results: [
        "65% reduction in information retrieval time",
        "Deployed across Bosch Digital Business Unit",
        "Processing 1000+ queries daily with 95% satisfaction rate",
        "Indexed 10,000+ internal documents",
        "Widely adopted by Business Development teams",
        "Recognized as critical productivity tool"
      ],
      role: "AI Engineer",
      duration: "6 months",
      category: "Generative AI & NLP"
    }
  ],

  skills: {
    "AI/ML Technologies": [
      "Machine Learning", "Deep Learning", "NLP", "Computer Vision", 
      "LLMs", "MLOps", "Diffusion Models", "Prompt Engineering"
    ],
    "Programming": [
      "Python", "SQL", "JavaScript", "Bash", "HTML", "CSS"
    ],
    "Frameworks": [
      "LangChain", "PyTorch", "TensorFlow", "Scikit-learn", 
      "spaCy", "YOLO", "NodeJS", "Diffusers"
    ],
    "Tools & Cloud": [
      "Azure Cloud", "Docker", "Git", "ChromaDB", "FAISS", 
      "MySQL", "PostgreSQL"
    ]
  },

  education: [
    {
      id: "1",
      degree: "Bachelor of Engineering - Electrical Engineering",
      institution: "Savitribai Phule Pune University", 
      period: "August 2020 - June 2023",
      gpa: "9.24/10",
      note: "With honor in Artificial Intelligence and Machine Learning (AIML)"
    },
    {
      id: "2",
      degree: "Minor in Artificial Intelligence and Machine Learning",
      institution: "Savitribai Phule Pune University",
      period: "August 2021 - June 2023",
      gpa: null,
      note: null
    },
    {
      id: "3", 
      degree: "High School Diploma - Electrical Engineering",
      institution: "Veermata Jijabai Technological Institute (VJTI)",
      period: "July 2017 - May 2020",
      gpa: null,
      note: null
    }
  ],

  certifications: [
    {
      id: "1",
      title: "Complete Generative AI Course With Langchain and Huggingface",
      issuer: "Udemy",
      icon: "brain"
    },
    {
      id: "2",
      title: "Google Advanced Data Analytics Specialization", 
      issuer: "Coursera",
      icon: "bar-chart"
    },
    {
      id: "3",
      title: "Electric Power Systems",
      issuer: "Coursera",
      icon: "zap"
    },
    {
      id: "4",
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      icon: "code"
    }
  ]
};
