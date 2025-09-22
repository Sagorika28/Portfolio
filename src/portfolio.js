/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sagorika's Portfolio",
  description:
    "A passionate Data Scientist and AI Engineer with expertise in Machine Learning, Deep Learning, and Multi-Agent Systems. Currently pursuing MS in Data Science at University of Washington.",
  og: {
    title: "Sagorika Ghosh Portfolio",
    type: "website",
    url: "https://sagorika-ghosh.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Sagorika Ghosh",
  logo_name: "SagorikaGhosh",
  nickname: "",
  subTitle:
    "A passionate Data Scientist and AI Engineer with expertise in Machine Learning, Deep Learning, and Multi-Agent Systems. Currently pursuing MS in Data Science at University of Washington with focus on transformer-based NLG/NLU and Crew AI frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1ayKXb6lFnQ_TNNs1BpdRDe1YLXQ0-rG-/view?usp=sharing",
  portfolio_repository: "https://github.com/Sagorika28/Portfolio",
  githubProfile: "https://github.com/Sagorika28",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Sagorika28",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sagorika-ghosh/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:2sagorika8@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing production-ready ML models for fraud detection, time series forecasting, and ETA prediction",
        "⚡ Experience with Deep Learning, Transformers, and Multi-Agent Systems using Crew AI",
        "⚡ Advanced statistical modeling, A/B testing, and causal inference for business impact",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Crew AI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            backgroundColor: "transparent",
            color: "#00A67E",
          },
        },
      ],
    },
    {
      title: "Programming & Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in Python, C++, Java for data science and machine learning applications",
        "⚡ Experience with SQL, Spark, Hive for big data processing and ETL pipelines",
        "⚡ Building data visualization dashboards using Tableau and Streamlit",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          imageSrc: "java.png",
          imageFromAssets: true,
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
            color: "#00599C",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#4479A1",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            backgroundColor: "transparent",
            color: "#E25A1C",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            backgroundColor: "transparent",
            color: "#E97627",
          },
        },
      ],
    },
    {
      title: "Cloud & Big Data",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience with Oracle Cloud and AWS for data processing and model deployment",
        "⚡ Building and optimizing ETL pipelines for big data processing",
        "⚡ Working with large-scale data lakes and data migration projects",
        "⚡ Implementing CI/CD pipelines and microservices architecture",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Oracle Cloud",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Hive",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#D22128",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/sagorika_ghosh",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@sagorika_ghosh",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Washington - Seattle",
      subtitle: "Master of Science in Data Science",
      logo_path: "UW_logo.png",
      alt_name: "University of Washington",
      duration: "Sept 2024 - Mar 2026",
      descriptions: [
        "⚡ Coursework: LLM Serving Systems, NLP, Data Visualization, Deep Learning, Machine Learning, Applied Statistics",
        "⚡ Research: Exploring transformer-based NLG/NLU & Crew AI's multi-agent frameworks to develop context-aware, agentic AI applications",
        "⚡ GPA: 3.83/4.0",
      ],
      website_link: "https://www.washington.edu/",
    },
    {
      title: "Guru Gobind Singh Indraprastha University (GGSIPU)",
      subtitle: "Bachelor of Technology in Computer Science & Engineering",
      logo_path: "ggsipu_logo.png",
      alt_name: "GGSIPU",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ University Gold Medalist with perfect GPA: 4.0/4.0",
        "⚡ Studied Applied Mathematics, Programming Fundamentals, Probability and Statistics, and Machine Learning",
        "⚡ Completed multiple certifications in Deep Learning, Machine Learning, Python, and R programming",
      ],
      website_link: "https://www.ipu.ac.in/",
    },
    {
      title: "Arwachin International School (CBSE)",
      subtitle: "Senior Secondary (10+2)",
      logo_path: "ais.png",
      alt_name: "Arwachin International School",
      duration: "2006 - 2018",
      descriptions: [
        "⚡ CBSE Senior Secondary with focus on Mathematics and Computer Science",
        "⚡ School Topper with 97% in Grade 12 (CBSE)",
      ],
      website_link: "https://arwachininternationalschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Specialization",
      subtitle: "DeepLearning.AI & Stanford",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/3GJMAQCZK4NF",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Supervised Machine Learning: Regression & Classification",
      subtitle: "DeepLearning.AI & Stanford",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/S7CHBYZGWV8L",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle: "DeepLearning.AI & Stanford",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DAX8BG6H6FZP",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Unsupervised Learning, Recommenders & RL",
      subtitle: "DeepLearning.AI & Stanford",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/TAXHSWU69TRG",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Machine Learning A-Z: AI, Python & R (2024)",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-de5186e6-49b2-4a7f-bd21-911a08c36cc9/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Web Development",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-12cb13d1-834b-415f-bbd9-91fd6766a3c3/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "C (Intermediate)",
      subtitle: "HackerRank",
      logo_path: "hack.png",
      certificate_link: "https://www.hackerrank.com/certificates/dbddb267d0ab",
      alt_name: "HackerRank",
      color_code: "#2EC866",
    },
    {
      title: "Kotlin",
      subtitle: "External",
      logo_path: "codingblocks.png",
      certificate_link:
        "https://drive.google.com/file/d/1scL7QwsnoPzxI0FkbidgvO1td9TN1qf1/view?usp=sharing",
      alt_name: "Coding Blocks",
      color_code: "#7F52FF",
    },
    {
      title: "Android App Development",
      subtitle: "Internshala Trainings",
      logo_path: "int.png",
      certificate_link:
        "https://trainings.internshala.com/view_certificate/1BEF57B0-D2E1-DA7C-CEF6-E7A81C34AAEC/31862939-60C6-D97D-2D1E-8C0786EA7DF0",
      alt_name: "Internshala",
      color_code: "#0A66C2",
    },
    {
      title: "Deep Learning A-Z",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-aa1e2c0e-5958-486c-a679-6f319203aa23/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Deep Learning and NLP: Seq2Seq Model",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-b773cfc9-117e-41fd-9348-c74a76f632f8.pdf",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Python Programming",
      subtitle: "Various Platforms",
      logo_path: "kaggle.png",
      certificate_link:
        "https://drive.google.com/file/d/1Eot5FFcIM86MDgA1_2nCuYb69n3fInAW/view",
      alt_name: "Kaggle",
      color_code: "#3776AB",
    },
    {
      title: "R Programming",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-74b10b10-2775-4ef2-aba4-68548fdd17f5/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Professional Experience",
  subtitle: "Work and Internship Experience",
  description:
    "I have worked with leading technology companies as a Data Scientist and ML Engineer, focusing on building production-ready machine learning models, fraud detection systems, and time series forecasting solutions. My experience spans across fintech, logistics, and AI research domains.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Data Scientist Intern",
          company: "Uber Technologies",
          company_url: "https://www.uber.com/",
          logo_path: "uber_logo.png",
          duration: "Jun 2025 - Sep 2025",
          location: "New York City, US",
          description:
            "• Built and deployed Deep Set neural networks with PyTorch and SQL-based data pipelines to predict actual time to delivery (ATD) from order and plan-level features. Achieved up to R² = 0.97 and MAE = 0.41 (60-min horizon) across regions, improving ETA accuracy by 6.2% and reducing courier wait time (CWT) by 1.7% over XGBoost baselines.\n• Analyzed how food ready times, predicted ETAs, and supply contention influence courier dispatch hold-off strategies using statistical modeling. Applied CUPED-based A/B testing with ETA capping adjustments, reducing courier lateness and utilized courier minutes per trip (UMpT) by 2–3 minutes and improving ETA prediction accuracy in undersupplied markets by 2.1%.",
          color: "#000000",
        },
        {
          title: "Data Scientist 2",
          company: "American Express",
          company_url: "https://www.americanexpress.com/",
          logo_path: "amex_logo.png",
          duration: "Aug 2023 - Aug 2024",
          location: "Delhi, India",
          description:
            "• Led efforts to improving the Fraud Labels via anomaly detection techniques like Centroid-based and optimized boosting and problems like Suspect Claim, Recurring Charges, Friendly Fraud, etc. improving the recall score at riskiest 20bps by 1.2% with an expected annual benefit of $20K. \n• Developed a machine learning algorithm leveraging LSTM to predict peak resource demand with 98.9% accuracy; streamlined pod ramp-up time by 53.2%, facilitating optimal cloud scaling during high-traffic events like Black Friday. \n• Pioneered the integration of Java APIs with a state-of-the-art hybrid CNN-LSTM FX-rate prediction model, optimizing system compatibility and streamlining data workflows. Improved forecasting prediction accuracy by 31.4% \n• Designed a temporal BiLSTM time series model using PyTorch to forecast inbound call volumes at Amex’s customer service across 20 different categories and deployed predictive models to enhance data pipeline security across 28 global markets.",
          color: "#006FCF",
        },
        {
          title: "Data Engineer",
          company: "American Express",
          company_url: "https://www.americanexpress.com/",
          logo_path: "amex_logo.png",
          duration: "Aug 2022 - Aug 2023",
          location: "Delhi, India",
          description:
            "• Upgraded a fraud detection system using XGB and LGBM based ensemble models, reducing downtime in global financial operations by 15.8%.\n• Migrated 75% of GAM data to Amex's big data lake using Spring, Hive, and HQL; improved troubleshooting efficiency by 48% and enhanced model training with enriched data.\n• Built Java microservices routing ~200K GAM requests/day from mainframe to cloud, saving $10.2K annually.\n• Spearheaded migration of 82% IMS transactions to the cloud. Optimized ETL pipelines using Hadoop and Oracle, improving processing efficiency by 12% and reducing data retrieval latency by 23%.",
          color: "#006FCF",
        },
        {
          title: "ML Engineer",
          company: "Hitachi Vantara",
          company_url: "https://www.hitachivantara.com/",
          logo_path: "hitachi_logo.png",
          duration: "Feb 2022 - Jul 2022",
          location: "Remote",
          description:
            "• Optimized Hitachi IQ data pipelines by integrating U-Net Autoencoder-based anomaly detection, improving data processing by 12.3%. Applied feature engineering and unsupervised learning for enhanced anomaly detection, enabling more accurate real-time decision-making. \n• Refactored Texas National Bank’s backend, boosting system efficiency by 57% and ensuring secure, scalable analytics.",
          color: "#E60012",
        },
        {
          title: "Microsoft Engage Intern",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Nov 2021 - Dec 2021",
          location: "Remote",
          description:
            "• Implemented a Neural Collaborative Filtering based scheduling recommender system and designed a constraint-based optimization to optimize meeting timings based on participant availability and preference, improving scheduling efficiency by 29%.",
          color: "#D83B01",
        },
      ],
    },
    // Volunteering section removed per user request
  ],
};

// Projects Page
const projectsHeader = {
  title: "Academic Projects",
  description:
    "My academic projects showcase my expertise in machine learning, deep learning, and AI applications. These projects demonstrate my ability to build end-to-end solutions using cutting-edge technologies and frameworks.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Volunteering Page
const volunteering = {
  title: "Volunteer Experience",
  subtitle: "Community and mentoring contributions",
  description:
    "I actively contribute to communities through accessibility support, mentorship, and advocacy for inclusion in tech.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Volunteering",
      work: false,
      experiences: [
        {
          title: "DRS Scribe",
          company: "University of Washington",
          company_url: "https://www.washington.edu/",
          logo_path: "UW_logo.png",
          duration: "Sep 2024 - Jun 2025",
          location: "Seattle, WA",
          description:
            "Supported accessibility services as a DRS Scribe across courses, ensuring inclusive academic experiences by preparing high-quality notes and materials.",
          color: "#4B2E83",
        },
        {
          title: "Community Member / Lead Team – Technical Writer",
          company: "Women Who Code",
          company_url: "https://www.womenwhocode.com/",
          logo_path: "wwc.png",
          duration: "Jul 2020 - Apr 2024",
          location: "Delhi, India",
          description:
            "Participated in events and authored technical content to support community learning and outreach.",
          color: "#7F52FF",
        },
        {
          title: "Content Writer",
          company: "Girl Up Imkaan (UN Foundation)",
          company_url: "https://girlup.org/",
          logo_path: "girlup.png",
          duration: "Jul 2020 - Jul 2021",
          location: "Delhi, India",
          description:
            "Drove storytelling initiatives; co-led the Oct 2020 Storytelling challenge; raised ~₹1.2 lakh for Project Inara supporting essential supplies.",
          color: "#E01E5A",
        },
        {
          title: "US Mentor Captain / Coding Mentor",
          company: "Camp K12",
          company_url: "https://www.campk12.com/",
          logo_path: "campk12.png",
          duration: "Mar 2021 - Sep 2021",
          location: "Remote",
          description:
            "Mentored students in programming and project-based learning; coordinated mentor teams and supported curriculum delivery for US cohorts.",
          color: "#0A66C2",
        },
      ],
    },
  ],
};

// Contact Info
const contactInfo = {
  title: "Contact Me",
  subtitle:
    "I'm actively seeking opportunities in Machine Learning, Deep Learning, Data Science, and AI Development. Let's connect and discuss how I can contribute to your team's success!",
  number: "+1 (206) 741-9204",
  email_address: "2sagorika8@gmail.com",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_sagorika.png",
    description:
      "I'm actively seeking opportunities in Machine Learning, Deep Learning, Data Science, and AI Development. Let's connect and discuss how I can contribute to your team's success!",
  },
  blogSection: {
    title: "Research & Projects",
    subtitle:
      "I am passionate about exploring transformer-based NLG/NLU and Crew AI's multi-agent frameworks to develop context-aware, agentic AI applications.",
    link: "https://github.com/Sagorika28",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Seattle, WA, USA",
    locality: "Seattle",
    country: "USA",
    region: "Washington",
    postalCode: "98105",
    streetAddress: "University of Washington",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/UniversityofWashington",
  },
  phoneSection: {
    title: "Email",
    subtitle: "2sagorika8@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  volunteering,
  projectsHeader,
  publicationsHeader,
  publications,
  contactInfo,
  contactPageData,
};
