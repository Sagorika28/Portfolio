/* ============================================
   PORTFOLIO WEBSITE - SCRIPT.JS
   Interactive Animations & Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initThemeToggle();
    initTypingAnimation();
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initSmoothScroll();
    initSpotlightEffect();
    initScrollLinkedAnimations();
});

/* ============================================
   THEME TOGGLE (Light/Dark Mode)
   ============================================ */
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Smooth transition
        document.documentElement.style.transition = 'background-color 0.4s ease, color 0.4s ease';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);

        // Remove transition after it completes
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 400);
    });
}

/* ============================================
   TYPING ANIMATION
   ============================================ */
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const phrases = [
        'RAG Systems',
        'Deep Learning Models',
        'Data Pipelines',
        'LLM Applications',
        'ML Solutions',
        'Agentic AI'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at end of phrase
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing after a short delay
    setTimeout(type, 1000);
}

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .project-card, .skill-category, .education-card, .publication-card, .contact-card'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Stagger animation for multiple items
                const siblings = entry.target.parentElement.children;
                const index = Array.from(siblings).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    // Section title animations
    const sectionTitles = document.querySelectorAll('.section-title');
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    sectionTitles.forEach(title => titleObserver.observe(title));

    // Stat items animation
    const statItems = document.querySelectorAll('.stat-item');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.15}s`;
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    statItems.forEach(item => statObserver.observe(item));
}

/* ============================================
   SKILL BARS ANIMATION
   ============================================ */
function initSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const level = entry.target.getAttribute('data-level');

                if (progressBar && level) {
                    // Animate the progress bar
                    setTimeout(() => {
                        progressBar.style.width = `${level}%`;
                    }, 200);
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillItems.forEach(item => observer.observe(item));
}

/* ============================================
   SMOOTH SCROLLING
   ============================================ */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/* ============================================
   PARALLAX EFFECT FOR BACKGROUND SPHERES
   ============================================ */
function initParallax() {
    const spheres = document.querySelectorAll('.gradient-sphere');

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        spheres.forEach((sphere, index) => {
            const speed = (index + 1) * 10;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            sphere.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Scroll-based parallax for floating badges
    const badges = document.querySelectorAll('.floating-badge');
    const heroImage = document.querySelector('.hero-image');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Subtle movement for badges based on scroll
        badges.forEach((badge, index) => {
            const speed = (index + 1) * 0.15;
            const yOffset = scrollY * speed;
            badge.style.transform = `translateY(${-yOffset}px)`;
        });

        // Slight parallax on hero image
        if (heroImage && scrollY < 600) {
            heroImage.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    });
}

/* ============================================
   SCROLL-LINKED CONTENT ANIMATIONS
   ============================================ */
function initScrollLinkedAnimations() {
    // Elements that move as you scroll
    const aboutText = document.querySelector('.about-text');
    const skillsGrid = document.querySelector('.skills-grid');
    const projectsGrid = document.querySelector('.projects-grid');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Helper: Calculate how far element is into viewport (0 to 1)
        const getScrollProgress = (element) => {
            if (!element) return 0;
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementHeight = rect.height;

            // Progress from 0 (just entering bottom) to 1 (fully visible)
            const progress = (windowHeight - elementTop) / (windowHeight + elementHeight);
            return Math.max(0, Math.min(1, progress));
        };

        // Subtle slide for about text (vertical on mobile to avoid clipping)
        if (aboutText) {
            const progress = getScrollProgress(aboutText);
            if (window.innerWidth > 1024) {
                const xOffset = (1 - progress) * 30;
                aboutText.style.transform = `translateX(${xOffset}px)`;
            } else {
                const yOffset = (1 - progress) * 20;
                aboutText.style.transform = `translateY(${yOffset}px)`;
            }
            aboutText.style.opacity = Math.min(1, progress * 1.5);
        }
    });
}

/* ============================================
   COUNTER ANIMATION FOR STATS
   ============================================ */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

/* ============================================
   PROJECT CARD TILT EFFECT
   ============================================ */
function initCardTilt() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/* ============================================
   INITIALIZE ADDITIONAL EFFECTS
   ============================================ */
// Enable parallax on desktop
if (window.innerWidth > 768) {
    initParallax();
    initCardTilt();
}

// Re-initialize on resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 768) {
            initParallax();
            initCardTilt();
        }
    }, 250);
});

/* ============================================
   CONSOLE EASTER EGG
   ============================================ */
console.log(`
%c👋 Hello, curious developer!

%cLooking for the source code? Check out my GitHub:
https://github.com/Sagorika28

%c⚡ Built with vanilla HTML, CSS, and JavaScript
🎨 No frameworks, just pure creativity!

Let's connect: 2sagorika8@gmail.com
`,
    'font-size: 20px; font-weight: bold;',
    'font-size: 14px; color: #6366f1;',
    'font-size: 12px; color: #888;'
);

/* ============================================
   AI CHATBOT
   ============================================ */
function initChatbot() {
    const chatbotContainer = document.getElementById('chatbot');
    const chatToggle = document.getElementById('chat-toggle');
    const chatMinimize = document.getElementById('chat-minimize');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const quickReplies = document.querySelectorAll('.quick-reply');

    if (!chatbotContainer || !chatToggle) return;

    // Knowledge base about Sagorika Ghosh
    const knowledgeBase = {
        skills: {
            keywords: ['skill', 'know', 'tech', 'stack', 'language', 'framework', 'tool', 'proficient', 'expertise', 'good at', 'work with'],
            response: `I'm proficient in a wide range of technologies! 🛠️

**ML & Modeling:** PyTorch, TensorFlow, Regression, Classification, Time-Series Forecasting, NLP, Deep Learning, Transformers

**LLMs & GenAI:** RAG, Agentic AI, CrewAI (multi-agent systems), Prompting, Evaluation

**Systems & Data:** Python, C++, Java, SQL, NoSQL (MongoDB), Spark, Hive, ETL, AWS (Bedrock, SageMaker), Databricks, Snowflake

**Experimentation:** A/B Testing, CUPED, Causal Inference

**Tools:** Git, CI/CD, Jenkins, Tableau, Streamlit

Would you like to know more about any specific skill?`
        },
        projects: {
            keywords: ['project', 'work', 'build', 'built', 'create', 'portfolio', 'demo'],
            response: `I've worked on some exciting projects! 🚀

**1. RAG-OS Pipeline**
- Production-grade RAG for HVAC manuals using Docling, Qdrant, BGE
- 75% Recall@5, 4.38/5 quality score with LLM-as-Judge evaluation

**2. US Census Chat Agent**
- Agentic text-to-SQL using Snowflake Cortex
- 95.6% query execution success with vector guardrails

**3. Quant Copilot**
- RAG on Databricks with Llama over 5M+ Delta table rows
- 1.8s median latency, 60% time reduction

**4. Breast Cancer Dashboard**
- ResNet classification, Kaplan-Meier analysis, Streamlit UI

Want details on any specific project?`
        },
        experience: {
            keywords: ['experience', 'work', 'job', 'company', 'intern', 'position', 'role', 'career', 'professional', 'employment'],
            response: `Here's my professional journey! 💼

**AWS AI Practitioner** (Feb - Apr 2026)
- Built AI workflows using Bedrock and SageMaker

**Contextual AI - Applied Science Capstone** (Sep 2025 - Mar 2026)
- Multilingual multimodal RAG, 86.5% Recall@3

**Uber Technologies - Applied Scientist Intern** (Jun - Sep 2025)
- Deep Set models for ETA prediction, R²=0.97

**American Express - Data Scientist 2** (Aug 2023 - Aug 2024)
- Fraud detection, LSTM forecasting across 28 markets

**American Express - Data Engineer** (Aug 2022 - Aug 2023)
- ETL migration, Java microservices routing ~200K req/day

**Hitachi Vantara - ML Engineer** (Feb - Jul 2022)

**Microsoft - Engage Intern** (Oct - Dec 2021)

I have **3+ years of experience** across ML, data engineering, and applied science!`
        },
        education: {
            keywords: ['education', 'school', 'university', 'degree', 'study', 'studying', 'college', 'major', 'gpa', 'graduate', 'masters', 'bachelor'],
            response: `Here's my educational background! 🎓

**University of Washington, Seattle, WA**
- M.S. in Data Science
- GPA: 3.9/4.0
- Coursework: NLP, LLM Serving Systems, Deep Learning, Applied Statistics, Agentic AI, RAG, AWS
- Duration: Sep 2024 – Mar 2026

**GGSIPU, Delhi, India**
- B.Tech in Computer Science & Engineering
- GPA: 4.0/4.0 | **University Gold Medalist**
- Duration: Aug 2018 – Jun 2022

I'm graduating in March 2026 and actively looking for full-time opportunities!`
        },
        contact: {
            keywords: ['contact', 'reach', 'email', 'connect', 'linkedin', 'github', 'hire', 'message', 'talk'],
            response: `I'd love to connect! 📧

**Email:** 2sagorika8@gmail.com
**LinkedIn:** linkedin.com/in/sagorika-ghosh
**GitHub:** github.com/Sagorika28
**Phone:** +1 (206) 741-9204
**Portfolio:** sagorika28.github.io/Portfolio

I'm currently looking for **new grad opportunities** in Data Science, ML Engineering, and Applied Science. Feel free to reach out – my inbox is always open!`
        },
        rag: {
            keywords: ['rag', 'retrieval', 'llm', 'gpt', 'llama', 'claude', 'ai', 'genai', 'generative', 'chatbot', 'language model'],
            response: `RAG systems are my specialty! 🤖

**RAG-OS Pipeline:**
- Production-grade RAG for technical HVAC manuals
- Uses **Docling** for ingestion, **Qdrant** for vector storage, **BGE embeddings**
- Adaptive chunking + cross-encoder reranking
- **75% Recall@5**, **4.38/5 quality score**

**Contextual AI Capstone:**
- Multilingual multimodal RAG with **86.5% Recall@3** and **82.5% MRR@10**
- Layout-aware ingestion, hybrid dense+sparse search
- LLM-as-a-Judge evaluation, 2.55s p95 latency

I've also built the **Quant Copilot** RAG system on Databricks with Llama over 5M+ rows!`
        },
        uber: {
            keywords: ['uber', 'delivery', 'eta', 'deep set', 'courier', 'dispatch'],
            response: `My experience at Uber Technologies! 🚗

**Applied Scientist Intern** (Jun - Sep 2025, NYC)

- Built **Deep Set models** (PyTorch, SQL pipelines) for ATD prediction
- Achieved **R²=0.97, MAE 0.41** (60-min horizon)
- Improved ETA accuracy by **6.2%**, reduced courier wait time by **1.7%**
- Applied **CUPED-based A/B testing** to ETA capping policies
- Reduced UMpT by 2-3 minutes in undersupplied markets

This role combined deep learning, statistical methods, and experimentation at scale!`
        },
        amex: {
            keywords: ['american express', 'amex', 'fraud', 'credit card', 'finance', 'banking'],
            response: `My 2 years at American Express! 💳

**Data Scientist 2** (Aug 2023 - Aug 2024):
- Improved fraud labeling via XGBoost, +1.2% recall → ~$20K saved
- LSTM for cloud autoscaling with 98.9% accuracy
- CNN-LSTM & BiLSTM forecasting across 28 global markets

**Data Engineer** (Aug 2022 - Aug 2023):
- Migrated 75% GAM data to big data lake
- Built Java microservices routing ~200K requests/day
- Saved $10.2K annually in infrastructure costs

This gave me end-to-end experience from data engineering to ML deployment!`
        },
        looking: {
            keywords: ['looking', 'hiring', 'opportunity', 'job', 'position', 'open to', 'available', 'new grad', 'full time', 'full-time'],
            response: `Yes, I'm actively looking for opportunities! 🎯

**Target Roles:**
- Data Scientist
- ML Engineer
- Applied Scientist
- AI/ML Research Engineer

**Availability:** Graduating March 2026, open to full-time positions

**Location:** Seattle, WA (open to relocation)

I have 3+ years of experience with production ML systems at companies like Uber, American Express, and AWS. Let's talk about how I can contribute to your team!`
        },
        hello: {
            keywords: ['hi', 'hello', 'hey', 'greet', 'howdy', 'whats up', "what's up", 'sup'],
            response: `Hey there! 👋 Great to meet you!

I'm Sagorika's virtual assistant. I can tell you about:
- 🛠️ Technical skills & technologies
- 🚀 Projects & research work
- 💼 Work experience (Uber, AmEx, AWS, Contextual AI, ...)
- 🎓 Education background
- 📧 How to get in touch

What would you like to know?`
        },
        thanks: {
            keywords: ['thank', 'thanks', 'appreciate', 'helpful', 'great', 'awesome', 'perfect'],
            response: `You're welcome! 😊 

Feel free to ask anything else about Sagorika's work, or reach out directly:
📧 2sagorika8@gmail.com
💼 linkedin.com/in/sagorika-ghosh

Have a great day!`
        }
    };

    // Default response for unmatched queries
    const defaultResponse = `I'm not quite sure about that, but here's what I can help with:

• **Skills** - Technical stack and expertise
• **Projects** - RAG-OS, Census Agent, Quant Copilot, and more
• **Experience** - Work at Uber, American Express, AWS, Contextual AI
• **Education** - UW M.S. in Data Science, GGSIPU Gold Medalist
• **Contact** - Email, LinkedIn, GitHub

Or feel free to email Sagorika directly at **2sagorika8@gmail.com**!`;

    // Find best matching response
    function findResponse(message) {
        const lowerMessage = message.toLowerCase();
        let bestMatch = null;
        let maxScore = 0;

        for (const [topic, data] of Object.entries(knowledgeBase)) {
            let score = 0;
            for (const keyword of data.keywords) {
                if (lowerMessage.includes(keyword)) {
                    score += 1;
                    // Bonus for exact word match
                    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
                    if (regex.test(lowerMessage)) {
                        score += 0.5;
                    }
                }
            }
            if (score > maxScore) {
                maxScore = score;
                bestMatch = data.response;
            }
        }

        return maxScore > 0 ? bestMatch : defaultResponse;
    }

    // Create message element
    function createMessage(content, isBot = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isBot ? 'bot' : 'user'}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = isBot ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        // Parse markdown-like formatting
        const formattedContent = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');

        contentDiv.innerHTML = `<p>${formattedContent}</p>`;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(contentDiv);

        return messageDiv;
    }

    // Create typing indicator
    function createTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'chat-message bot typing-indicator';
        indicator.id = 'typing-indicator';
        indicator.innerHTML = `
            <div class="message-avatar"><i class="fas fa-robot"></i></div>
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        return indicator;
    }

    // Hide quick replies after first interaction
    function hideQuickReplies() {
        const quickRepliesContainer = document.querySelector('.quick-replies');
        if (quickRepliesContainer) {
            quickRepliesContainer.style.display = 'none';
        }
    }

    // Send message
    function sendMessage(message) {
        if (!message.trim()) return;

        // Hide quick replies on first message
        hideQuickReplies();

        // Add user message
        chatMessages.appendChild(createMessage(message, false));
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Show typing indicator
        const typingIndicator = createTypingIndicator();
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate thinking time (for natural feel)
        const thinkingTime = Math.min(500 + message.length * 20, 1500);

        setTimeout(() => {
            // Remove typing indicator
            typingIndicator.remove();

            // Get and add bot response
            const response = findResponse(message);
            chatMessages.appendChild(createMessage(response, true));
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, thinkingTime);

        // Clear input
        chatInput.value = '';
    }

    // Event Listeners
    chatToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
        if (chatbotContainer.classList.contains('active')) {
            chatInput.focus();
        }
    });

    chatMinimize.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
    });

    chatSend.addEventListener('click', () => {
        sendMessage(chatInput.value);
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage(chatInput.value);
        }
    });

    // Quick reply buttons
    quickReplies.forEach(btn => {
        btn.addEventListener('click', () => {
            const message = btn.getAttribute('data-message');
            sendMessage(message);
        });
    });

    // Close chat when clicking outside
    document.addEventListener('click', (e) => {
        if (!chatbotContainer.contains(e.target) && chatbotContainer.classList.contains('active')) {
            chatbotContainer.classList.remove('active');
        }
    });
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', initChatbot);

/* ============================================
   SPOTLIGHT EFFECT
   ============================================ */
function initSpotlightEffect() {
    const projectSection = document.getElementById("projects");
    if (!projectSection) return;

    projectSection.onmousemove = e => {
        for (const card of document.getElementsByClassName("project-card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };
}
