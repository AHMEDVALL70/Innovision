// ===== نظام الترجمة الكامل (عربي / إنجليزي / فرنسي) =====

const translations = {
    ar: {
        "page-title": "Innovision | الابتكار والتحول الرقمي",
        "nav.home": "الرئيسية",
        "nav.services": "الخدمات",
        "nav.casestudies": "دراسات الحالة",
        "nav.projects": "المشاريع",
        "nav.testimonials": "آراء العملاء",
        "nav.blog": "المدونة",
        "nav.cv": "السيرة الذاتية",
        "nav.contact": "تواصل",

        "hero.badge": "الابتكار والتحول الرقمي",
        "hero.title": 'ارتقِ بأعمالك <br>باستخدام <span class="highlight">الذكاء الاصطناعي</span>',
        "hero.subtitle": "نقدم استشارات تخصصية وحلولاً برمجية متطورة في مجالات الذكاء الاصطناعي، التعلم الآلي، والأنظمة البيومترية",
        "hero.stat1": "سنة خبرة",
        "hero.stat2": "مشروعاً",
        "hero.stat3": "لغات",
        "hero.btn_explore": "استكشف خدماتنا",
        "hero.btn_contact": "تواصل معنا",

        "ai.toggle": "اسألني",
        "ai.header": "المساعد الذكي",
        "ai.experience": "الخبرة",
        "ai.missions": "المهمات",
        "ai.projects": "المشاريع",
        "ai.certifications": "الشهادات والتدريب",
        "ai.contact": "اتصل بنا",
        "ai.welcome": "👋 مرحباً! اختر أحد الخيارات أعلاه للحصول على معلومات فورية.",

        "services.tag": "ما نقدمه",
        "services.title": 'خدماتنا <span class="highlight">التخصصية</span>',
        "services.subtitle": "حلول ذكاء اصطناعي مخصصة لاحتياجات عملك الفريدة",
        "services.btn": "اطلب الخدمة",
        "services.consulting.title": "استشارات الذكاء الاصطناعي",
        "services.consulting.desc": "تقييم جاهزية المؤسسة ووضع استراتيجية ذكاء اصطناعي مخصصة تحقق عائداً ملموساً",
        "services.ml.title": "تطوير نماذج التعلم الآلي",
        "services.ml.desc": "نماذج تنبؤية مخصصة، تحليل بيانات متقدم، وأنظمة كشف احتيال ذكية",
        "services.biometric.title": "الأنظمة البيومترية",
        "services.biometric.desc": "حلول بصمة، وجه، وصوت مع تكامل آمن مع أنظمة الأمن والهوية القائمة",
        "services.digital.title": "التحول الرقمي",
        "services.digital.desc": "تطوير البنية التحتية الرقمية، أتمتة العمليات، وبناء قدرات الفرق التقنية",

        "link.view_project": "عرض المشروع",
        "link.read_more": "اقرأ المزيد",

        "cs.tag": "نجاحاتنا",
        "cs.title": 'دراسات <span class="highlight">الحالة</span>',
        "cs.subtitle": "نماذج من مشاريعنا التي أحدثت فرقاً حقيقياً",
        "cs.propai.title": "PropAI - التقييم العقاري الذكي",
        "cs.propai.desc": "منصة متكاملة لتقييم العقارات في قطر باستخدام الذكاء الاصطناعي، تحلل أكثر من 1000 عقار وتتنبأ بالقيم العادلة بدقة عالية.",
        "cs.ats.title": "محسّن السيرة الذاتية ATS",
        "cs.ats.desc": "تحسين توافق السيرة الذاتية مع متطلبات أنظمة ATS باستخدام تقنيات TF-IDF ومعالجة اللغة الطبيعية.",
        "cs.fraud.title": "كشف الاحتيال في الصفقات",
        "cs.fraud.desc": "نموذج متخصص للكشف عن الأنماط المشبوهة في الصفقات العمومية باستخدام خوارزميات التعلم الآلي المتقدمة.",
        "cs.sentiment.title": "تحليل المشاعر (NLP)",
        "cs.sentiment.desc": "أداة متقدمة لتحليل المشاعر في النصوص العربية والإنجليزية، تستخدم الشبكات العصبية LSTM لتصنيف المشاعر بدقة عالية.",

        "proj.tag": "أعمالنا",
        "proj.title": 'مشاريع <span class="highlight">مميزة</span>',
        "proj.subtitle": "نماذج من الحلول التي طورناها لعملائنا",
        "proj.propai.desc": "منصة تقييم عقاري ذكية تعتمد على تحليل السجلات وتوقع القيمة العادلة",
        "proj.cv.desc": "سيرة ذاتية تفاعلية تعرض الخبرات والمشاريع بتقنيات ويب حديثة",
        "proj.ats.title": "محسّن السيرة الذاتية ATS",
        "proj.ats.desc": "تحسين توافق السيرة الذاتية مع متطلبات أنظمة ATS باستخدام TF-IDF",
        "proj.fraud.title": "كشف الاحتيال في الصفقات",
        "proj.fraud.desc": "نموذج متخصص للكشف عن الأنماط المشبوهة في الصفقات العمومية",

        "test.tag": "شهادات",
        "test.title": 'آراء <span class="highlight">عملائنا</span>',
        "test.subtitle": "ما يقوله من عملنا معهم",
        "test.1.quote": '"ساعدتنا Innovision في تطوير استراتيجية ذكاء اصطناعي غيرت طريقة عملنا. النتائج كانت مذهلة في أقل من 3 أشهر."',
        "test.1.name": "مدير تقني، شركة رائدة",
        "test.1.role": "القطاع المالي",
        "test.2.quote": '"نظام المصادقة البيومترية الذي طورته Innovision رفع مستوى الأمان لدينا بنسبة 95% مع سهولة استخدام مذهلة."',
        "test.2.name": "مسؤول أمن المعلومات",
        "test.2.role": "قطاع حكومي",
        "test.3.quote": '"احترافية عالية وفهم عميق لاحتياجات العمل. منصة PropAI كانت نقلة نوعية في تقييم العقارات."',
        "test.3.name": "مدير عقاري",
        "test.3.role": "قطاع التطوير العقاري",

        "blog.tag": "مدونة",
        "blog.title": 'آخر <span class="highlight">المقالات</span>',
        "blog.subtitle": "رؤى وخبرات في الذكاء الاصطناعي والتحول الرقمي",
        "blog.1.title": "5 علامات تدل أن عملك بحاجة للذكاء الاصطناعي",
        "blog.1.desc": "كيف تعرف أن الوقت قد حان لاعتماد الذكاء الاصطناعي في مؤسستك؟ نقدم لك 5 مؤشرات واضحة...",
        "blog.2.title": "الفرق بين التعلم الآلي والتعلم العميق ببساطة",
        "blog.2.desc": "شرح مبسط لأهم المفاهيم في عالم الذكاء الاصطناعي مع أمثلة عملية من مشاريعنا...",
        "blog.3.title": "كيف تبدأ مشروع ذكاء اصطناعي في 3 أشهر",
        "blog.3.desc": "خطة عمل عملية لتنفيذ أول مشروع ذكاء اصطناعي في مؤسستك بخطوات واضحة ونتائج ملموسة...",

        "cv.tag": "خبرتي",
        "cv.title": 'السيرة <span class="highlight">الذاتية</span>',
        "cv.who": "من أنا",
        "cv.summary": "مهندس دولة في الإلكترونيات والتطوير الرقمي مع أكثر من 25 عاماً من الخبرة القيادية في إدارة الأنظمة البيومترية، العمليات التقنية، ومبادرات التحول الرقمي في القطاع العام. يجمع بين الخبرة الإدارية والحوكمة المتقدمة مع الكفاءة التقنية في التعلم الآلي وعلوم البيانات.",
        "cv.h1": "هندسة دولة + 5 سنوات",
        "cv.h2": "شهادات Kaggle و Stanford",
        "cv.h3": "خبرة حكومية ودولية",
        "cv.btn_contact": "تواصل معي",
        "cv.tl1.year": "2025 - الآن",
        "cv.tl1.desc": "مطور Python و AI مستقل - قطر",
        "cv.tl2.desc": "مدير مركز الحالة المدنية - جدة",
        "cv.tl3.desc": "مدير المصادقة على الوثائق - ANRPTS",
        "cv.tl4.desc": "مهندس دولة - إلكترونيات وتطوير رقمي",

        "contact.tag": "تواصل",
        "contact.title": 'هيا <span class="highlight">نتحدث</span>',
        "contact.subtitle": "لديك مشروع؟ فكرة؟ نحن هنا لمساعدتك",
        "contact.info_title": "معلومات الاتصال",
        "contact.location": "الدوحة، قطر",

        "form.title": "طلب خدمة",
        "form.subtitle": "املأ النموذج وسنرد عليك خلال 24 ساعة",
        "form.name_label": "الاسم الكامل",
        "form.name_ph": "الاسم الكامل",
        "form.email_label": "البريد الإلكتروني",
        "form.email_ph": "البريد الإلكتروني",
        "form.phone_label": "رقم الهاتف",
        "form.phone_ph": "رقم الهاتف",
        "form.service_label": "الخدمة المطلوبة",
        "form.service_choose": "اختر الخدمة",
        "form.service_other": "أخرى",
        "form.details_label": "تفاصيل الطلب",
        "form.details_ph": "اكتب تفاصيل طلبك...",
        "form.submit": "إرسال الطلب",
        "form.msg_required": "الرجاء ملء جميع الحقول",
        "form.msg_invalid_email": "الرجاء إدخال بريد إلكتروني صحيح",
        "form.msg_sending": "جاري الإرسال...",
        "form.msg_success": "✅ تم إرسال طلبك بنجاح! سأتصل بك قريباً.",
        "form.msg_error": "❌ حدث خطأ في الإرسال. حاول مرة أخرى.",

        "footer.rights": "© 2026 Innovision. جميع الحقوق محفوظة"
    },

    en: {
        "page-title": "Innovision | Innovation & Digital Transformation",
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.casestudies": "Case Studies",
        "nav.projects": "Projects",
        "nav.testimonials": "Testimonials",
        "nav.blog": "Blog",
        "nav.cv": "Resume",
        "nav.contact": "Contact",

        "hero.badge": "Innovation & Digital Transformation",
        "hero.title": 'Elevate Your Business <br>with <span class="highlight">Artificial Intelligence</span>',
        "hero.subtitle": "We provide specialized consulting and advanced software solutions in artificial intelligence, machine learning, and biometric systems",
        "hero.stat1": "Years Experience",
        "hero.stat2": "Projects",
        "hero.stat3": "Languages",
        "hero.btn_explore": "Explore Services",
        "hero.btn_contact": "Contact Us",

        "ai.toggle": "Ask Me",
        "ai.header": "AI Assistant",
        "ai.experience": "Experience",
        "ai.missions": "Missions",
        "ai.projects": "Projects",
        "ai.certifications": "Certifications & Training",
        "ai.contact": "Contact",
        "ai.welcome": "👋 Hello! Choose an option above to get instant information.",

        "services.tag": "What We Offer",
        "services.title": 'Our <span class="highlight">Specialized</span> Services',
        "services.subtitle": "AI solutions tailored to your business's unique needs",
        "services.btn": "Request Service",
        "services.consulting.title": "AI Consulting",
        "services.consulting.desc": "Assessing organizational readiness and building a tailored AI strategy that delivers tangible ROI",
        "services.ml.title": "Machine Learning Development",
        "services.ml.desc": "Custom predictive models, advanced data analysis, and intelligent fraud detection systems",
        "services.biometric.title": "Biometric Systems",
        "services.biometric.desc": "Fingerprint, facial, and voice solutions with secure integration into existing security and identity systems",
        "services.digital.title": "Digital Transformation",
        "services.digital.desc": "Digital infrastructure development, process automation, and building technical team capabilities",

        "link.view_project": "View Project",
        "link.read_more": "Read More",

        "cs.tag": "Our Success Stories",
        "cs.title": 'Case <span class="highlight">Studies</span>',
        "cs.subtitle": "Examples of projects that made a real difference",
        "cs.propai.title": "PropAI - Smart Real Estate Valuation",
        "cs.propai.desc": "An integrated AI-powered platform for real estate valuation in Qatar, analyzing over 1,000 properties and predicting fair values with high accuracy.",
        "cs.ats.title": "ATS Resume Optimizer",
        "cs.ats.desc": "Improving resume compatibility with ATS requirements using TF-IDF techniques and natural language processing.",
        "cs.fraud.title": "Procurement Fraud Detection",
        "cs.fraud.desc": "A specialized model for detecting suspicious patterns in public procurement deals using advanced machine learning algorithms.",
        "cs.sentiment.title": "Sentiment Analysis (NLP)",
        "cs.sentiment.desc": "An advanced tool for sentiment analysis in Arabic and English texts, using LSTM neural networks for high-accuracy sentiment classification.",

        "proj.tag": "Our Work",
        "proj.title": 'Featured <span class="highlight">Projects</span>',
        "proj.subtitle": "Examples of solutions we built for our clients",
        "proj.propai.desc": "A smart real estate valuation platform based on record analysis and fair value prediction",
        "proj.cv.desc": "An interactive resume showcasing experience and projects using modern web technologies",
        "proj.ats.title": "ATS Resume Optimizer",
        "proj.ats.desc": "Improving resume compatibility with ATS requirements using TF-IDF",
        "proj.fraud.title": "Procurement Fraud Detection",
        "proj.fraud.desc": "A specialized model for detecting suspicious patterns in public procurement deals",

        "test.tag": "Testimonials",
        "test.title": 'What Our <span class="highlight">Clients</span> Say',
        "test.subtitle": "What people say about working with us",
        "test.1.quote": '"Innovision helped us develop an AI strategy that changed the way we work. The results were amazing in less than 3 months."',
        "test.1.name": "Technical Director, Leading Company",
        "test.1.role": "Financial Sector",
        "test.2.quote": '"The biometric authentication system Innovision developed raised our security level by 95% with amazing ease of use."',
        "test.2.name": "Information Security Officer",
        "test.2.role": "Government Sector",
        "test.3.quote": '"High professionalism and deep understanding of business needs. The PropAI platform was a game-changer in real estate valuation."',
        "test.3.name": "Real Estate Manager",
        "test.3.role": "Real Estate Development Sector",

        "blog.tag": "Blog",
        "blog.title": 'Latest <span class="highlight">Articles</span>',
        "blog.subtitle": "Insights and experience in AI and digital transformation",
        "blog.1.title": "5 Signs Your Business Needs AI",
        "blog.1.desc": "How do you know it's time to adopt AI in your organization? Here are 5 clear indicators...",
        "blog.2.title": "The Difference Between Machine Learning and Deep Learning, Simply Explained",
        "blog.2.desc": "A simplified explanation of key AI concepts with practical examples from our projects...",
        "blog.3.title": "How to Start an AI Project in 3 Months",
        "blog.3.desc": "A practical action plan for implementing your first AI project with clear steps and tangible results...",

        "cv.tag": "My Experience",
        "cv.title": 'My <span class="highlight">Resume</span>',
        "cv.who": "About Me",
        "cv.summary": "A State Engineer in Electronics and Digital Development with over 25 years of leadership experience managing biometric systems, technical operations, and digital transformation initiatives in the public sector. Combines administrative and advanced governance expertise with technical proficiency in machine learning and data science.",
        "cv.h1": "State Engineering + 5 years",
        "cv.h2": "Kaggle & Stanford Certifications",
        "cv.h3": "Government & International Experience",
        "cv.btn_contact": "Contact Me",
        "cv.tl1.year": "2025 - Present",
        "cv.tl1.desc": "Independent Python & AI Developer - Qatar",
        "cv.tl2.desc": "Director of Civil Status Center - Jeddah",
        "cv.tl3.desc": "Director of Document Authentication - ANRPTS",
        "cv.tl4.desc": "State Engineer - Electronics & Digital Development",

        "contact.tag": "Contact",
        "contact.title": 'Let\'s <span class="highlight">Talk</span>',
        "contact.subtitle": "Have a project? An idea? We're here to help",
        "contact.info_title": "Contact Information",
        "contact.location": "Doha, Qatar",

        "form.title": "Request a Service",
        "form.subtitle": "Fill out the form and we'll respond within 24 hours",
        "form.name_label": "Full Name",
        "form.name_ph": "Full Name",
        "form.email_label": "Email",
        "form.email_ph": "Email",
        "form.phone_label": "Phone Number",
        "form.phone_ph": "Phone Number",
        "form.service_label": "Requested Service",
        "form.service_choose": "Choose a Service",
        "form.service_other": "Other",
        "form.details_label": "Request Details",
        "form.details_ph": "Write your request details...",
        "form.submit": "Send Request",
        "form.msg_required": "Please fill in all fields",
        "form.msg_invalid_email": "Please enter a valid email address",
        "form.msg_sending": "Sending...",
        "form.msg_success": "✅ Your request was sent successfully! We'll contact you soon.",
        "form.msg_error": "❌ An error occurred while sending. Please try again.",

        "footer.rights": "© 2026 Innovision. All rights reserved"
    },

    fr: {
        "page-title": "Innovision | Innovation et Transformation Digitale",
        "nav.home": "Accueil",
        "nav.services": "Services",
        "nav.casestudies": "Études de cas",
        "nav.projects": "Projets",
        "nav.testimonials": "Témoignages",
        "nav.blog": "Blog",
        "nav.cv": "CV",
        "nav.contact": "Contact",

        "hero.badge": "Innovation et Transformation Digitale",
        "hero.title": 'Élevez votre entreprise <br>grâce à <span class="highlight">l\'Intelligence Artificielle</span>',
        "hero.subtitle": "Nous proposons des conseils spécialisés et des solutions logicielles avancées en intelligence artificielle, apprentissage automatique et systèmes biométriques",
        "hero.stat1": "Ans d'expérience",
        "hero.stat2": "Projets",
        "hero.stat3": "Langues",
        "hero.btn_explore": "Découvrir nos services",
        "hero.btn_contact": "Contactez-nous",

        "ai.toggle": "Demandez-moi",
        "ai.header": "Assistant IA",
        "ai.experience": "Expérience",
        "ai.missions": "Missions",
        "ai.projects": "Projets",
        "ai.certifications": "Certifications et Formations",
        "ai.contact": "Contact",
        "ai.welcome": "👋 Bonjour ! Choisissez une option ci-dessus pour obtenir des informations instantanées.",

        "services.tag": "Ce que nous offrons",
        "services.title": 'Nos Services <span class="highlight">Spécialisés</span>',
        "services.subtitle": "Des solutions d'IA adaptées aux besoins uniques de votre entreprise",
        "services.btn": "Demander le service",
        "services.consulting.title": "Conseil en IA",
        "services.consulting.desc": "Évaluation de la maturité organisationnelle et élaboration d'une stratégie IA sur mesure générant un retour tangible",
        "services.ml.title": "Développement de Modèles ML",
        "services.ml.desc": "Modèles prédictifs personnalisés, analyse de données avancée et systèmes intelligents de détection de fraude",
        "services.biometric.title": "Systèmes Biométriques",
        "services.biometric.desc": "Solutions d'empreintes digitales, faciales et vocales avec intégration sécurisée aux systèmes de sécurité et d'identité existants",
        "services.digital.title": "Transformation Digitale",
        "services.digital.desc": "Développement d'infrastructures numériques, automatisation des processus et renforcement des capacités des équipes techniques",

        "link.view_project": "Voir le projet",
        "link.read_more": "Lire la suite",

        "cs.tag": "Nos réussites",
        "cs.title": 'Études de <span class="highlight">Cas</span>',
        "cs.subtitle": "Exemples de projets qui ont fait une réelle différence",
        "cs.propai.title": "PropAI - Évaluation Immobilière Intelligente",
        "cs.propai.desc": "Une plateforme intégrée d'évaluation immobilière au Qatar utilisant l'IA, analysant plus de 1000 biens et prédisant des valeurs justes avec une grande précision.",
        "cs.ats.title": "Optimiseur de CV ATS",
        "cs.ats.desc": "Amélioration de la compatibilité des CV avec les exigences des systèmes ATS grâce aux techniques TF-IDF et au traitement du langage naturel.",
        "cs.fraud.title": "Détection de Fraude dans les Marchés Publics",
        "cs.fraud.desc": "Un modèle spécialisé pour détecter les schémas suspects dans les marchés publics à l'aide d'algorithmes avancés d'apprentissage automatique.",
        "cs.sentiment.title": "Analyse de Sentiment (NLP)",
        "cs.sentiment.desc": "Un outil avancé d'analyse de sentiment pour les textes arabes et anglais, utilisant des réseaux de neurones LSTM pour une classification de haute précision.",

        "proj.tag": "Nos réalisations",
        "proj.title": 'Projets <span class="highlight">Phares</span>',
        "proj.subtitle": "Exemples de solutions développées pour nos clients",
        "proj.propai.desc": "Une plateforme intelligente d'évaluation immobilière basée sur l'analyse des données et la prédiction de la juste valeur",
        "proj.cv.desc": "Un CV interactif présentant l'expérience et les projets avec des technologies web modernes",
        "proj.ats.title": "Optimiseur de CV ATS",
        "proj.ats.desc": "Amélioration de la compatibilité des CV avec les exigences des systèmes ATS grâce au TF-IDF",
        "proj.fraud.title": "Détection de Fraude dans les Marchés Publics",
        "proj.fraud.desc": "Un modèle spécialisé pour détecter les schémas suspects dans les marchés publics",

        "test.tag": "Témoignages",
        "test.title": 'Avis de nos <span class="highlight">Clients</span>',
        "test.subtitle": "Ce que disent ceux qui ont travaillé avec nous",
        "test.1.quote": "\"Innovision nous a aidés à développer une stratégie IA qui a transformé notre façon de travailler. Les résultats ont été impressionnants en moins de 3 mois.\"",
        "test.1.name": "Directeur Technique, Entreprise Leader",
        "test.1.role": "Secteur Financier",
        "test.2.quote": "\"Le système d'authentification biométrique développé par Innovision a augmenté notre niveau de sécurité de 95% avec une facilité d'utilisation remarquable.\"",
        "test.2.name": "Responsable de la Sécurité de l'Information",
        "test.2.role": "Secteur Public",
        "test.3.quote": "\"Grand professionnalisme et compréhension approfondie des besoins métier. La plateforme PropAI a révolutionné l'évaluation immobilière.\"",
        "test.3.name": "Directeur Immobilier",
        "test.3.role": "Secteur du Développement Immobilier",

        "blog.tag": "Blog",
        "blog.title": 'Derniers <span class="highlight">Articles</span>',
        "blog.subtitle": "Perspectives et expérience en IA et transformation digitale",
        "blog.1.title": "5 Signes que votre Entreprise a Besoin de l'IA",
        "blog.1.desc": "Comment savoir si le moment est venu d'adopter l'IA dans votre organisation ? Voici 5 indicateurs clairs...",
        "blog.2.title": "La Différence entre Apprentissage Automatique et Apprentissage Profond, Simplement",
        "blog.2.desc": "Une explication simplifiée des concepts clés de l'IA avec des exemples pratiques issus de nos projets...",
        "blog.3.title": "Comment Démarrer un Projet IA en 3 Mois",
        "blog.3.desc": "Un plan d'action pratique pour mettre en œuvre votre premier projet IA avec des étapes claires et des résultats tangibles...",

        "cv.tag": "Mon Expérience",
        "cv.title": 'Mon <span class="highlight">CV</span>',
        "cv.who": "À propos de moi",
        "cv.summary": "Ingénieur d'État en électronique et développement numérique avec plus de 25 ans d'expérience en leadership dans la gestion de systèmes biométriques, d'opérations techniques et d'initiatives de transformation digitale dans le secteur public. Combine expertise administrative et gouvernance avancée avec compétence technique en apprentissage automatique et science des données.",
        "cv.h1": "Ingénierie d'État + 5 ans",
        "cv.h2": "Certifications Kaggle et Stanford",
        "cv.h3": "Expérience Gouvernementale et Internationale",
        "cv.btn_contact": "Me Contacter",
        "cv.tl1.year": "2025 - Présent",
        "cv.tl1.desc": "Développeur Python et IA Indépendant - Qatar",
        "cv.tl2.desc": "Directeur du Centre d'État Civil - Djeddah",
        "cv.tl3.desc": "Directeur de l'Authentification des Documents - ANRPTS",
        "cv.tl4.desc": "Ingénieur d'État - Électronique et Développement Numérique",

        "contact.tag": "Contact",
        "contact.title": 'Discutons <span class="highlight">Ensemble</span>',
        "contact.subtitle": "Vous avez un projet ? Une idée ? Nous sommes là pour vous aider",
        "contact.info_title": "Informations de Contact",
        "contact.location": "Doha, Qatar",

        "form.title": "Demander un Service",
        "form.subtitle": "Remplissez le formulaire et nous répondrons sous 24 heures",
        "form.name_label": "Nom Complet",
        "form.name_ph": "Nom Complet",
        "form.email_label": "Email",
        "form.email_ph": "Email",
        "form.phone_label": "Numéro de Téléphone",
        "form.phone_ph": "Numéro de Téléphone",
        "form.service_label": "Service Demandé",
        "form.service_choose": "Choisir un Service",
        "form.service_other": "Autre",
        "form.details_label": "Détails de la Demande",
        "form.details_ph": "Écrivez les détails de votre demande...",
        "form.submit": "Envoyer la Demande",
        "form.msg_required": "Veuillez remplir tous les champs",
        "form.msg_invalid_email": "Veuillez entrer une adresse e-mail valide",
        "form.msg_sending": "Envoi en cours...",
        "form.msg_success": "✅ Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.",
        "form.msg_error": "❌ Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",

        "footer.rights": "© 2026 Innovision. Tous droits réservés"
    }
};

// ===== دالة مساعدة: جلب قاموس اللغة الحالية (تُستخدم من script.js) =====
function getCurrentTranslations() {
    let lang = 'ar';
    try {
        lang = document.documentElement.lang || localStorage.getItem('innovision_lang') || 'ar';
    } catch (e) { /* تجاهل */ }
    return translations[lang] || translations.ar;
}

// ===== تطبيق الترجمة على الصفحة =====
function applyTranslations(lang) {
    const dict = translations[lang] || translations.ar;

    // نصوص عادية (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // نصوص تحتوي HTML (مثل العناوين مع <span class="highlight">)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // الـ placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // عنوان الصفحة
    if (dict['page-title']) {
        document.title = dict['page-title'];
    }

    // اتجاه الصفحة واللغة
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // تفعيل الزر الصحيح بصرياً
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // حفظ التفضيل
    try {
        localStorage.setItem('innovision_lang', lang);
    } catch (e) { /* تجاهل إن لم يكن التخزين متاحاً */ }
}

// ===== ربط أزرار اللغة =====
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        applyTranslations(this.dataset.lang);
    });
});

// ===== تطبيق اللغة المحفوظة (أو العربية افتراضياً) عند تحميل الصفحة =====
(function initLanguage() {
    let savedLang = 'ar';
    try {
        savedLang = localStorage.getItem('innovision_lang') || 'ar';
    } catch (e) { /* تجاهل */ }
    if (savedLang !== 'ar') {
        applyTranslations(savedLang);
    }
})();
