// ===== ترجمة المحتوى =====
const translations = {
    ar: {
        nav_home: 'الرئيسية',
        nav_services: 'الخدمات',
        nav_projects: 'المشاريع',
        nav_testimonials: 'آراء العملاء',
        nav_blog: 'المدونة',
        nav_cv: 'السيرة الذاتية',
        nav_contact: 'تواصل',

        hero_badge: 'الابتكار والتحول الرقمي',
        hero_title: 'ارتقِ بأعمالك <br>باستخدام <span class="highlight">الذكاء الاصطناعي</span>',
        hero_desc: 'نقدم استشارات تخصصية وحلولاً برمجية متطورة في مجالات الذكاء الاصطناعي، التعلم الآلي، والأنظمة البيومترية',
        stat_years: 'سنة خبرة',
        stat_projects: 'مشروعاً',
        stat_langs: 'لغات',
        hero_btn_services: 'استكشف خدماتنا',
        hero_btn_contact: 'تواصل معنا',

        services_tag: 'ما نقدمه',
        services_title: 'خدماتنا <span class="highlight">التخصصية</span>',
        services_desc: 'حلول ذكاء اصطناعي مخصصة لاحتياجات عملك الفريدة',
        service1_title: 'استشارات الذكاء الاصطناعي',
        service1_desc: 'تقييم جاهزية المؤسسة ووضع استراتيجية ذكاء اصطناعي مخصصة تحقق عائداً ملموساً',
        service2_title: 'تطوير نماذج التعلم الآلي',
        service2_desc: 'نماذج تنبؤية مخصصة، تحليل بيانات متقدم، وأنظمة كشف احتيال ذكية',
        service3_title: 'الأنظمة البيومترية',
        service3_desc: 'حلول بصمة، وجه، وصوت مع تكامل آمن مع أنظمة الأمن والهوية القائمة',
        service4_title: 'التحول الرقمي',
        service4_desc: 'تطوير البنية التحتية الرقمية، أتمتة العمليات، وبناء قدرات الفرق التقنية',

        projects_tag: 'أعمالنا',
        projects_title: 'مشاريع <span class="highlight">مميزة</span>',
        projects_desc: 'نماذج من الحلول التي طورناها لعملائنا',
        project1_desc: 'منصة تقييم عقاري ذكية تعتمد على تحليل السجلات وتوقع القيمة العادلة',
        project2_desc: 'سيرة ذاتية تفاعلية تعرض الخبرات والمشاريع بتقنيات ويب حديثة',
        project3_desc: 'تطوير وكلاء ذكاء اصطناعي تفاعليين مدمجين مع بيئات مثل Discord',
        project4_desc: 'أدوات تحليل المشاعر ومعالجة النصوص باللغتين العربية والإنجليزية',

        testimonials_tag: 'شهادات',
        testimonials_title: 'آراء <span class="highlight">عملائنا</span>',
        testimonials_desc: 'ما يقوله من عملنا معهم',
        testimonial1_text: '"ساعدتنا Innovision في تطوير استراتيجية ذكاء اصطناعي غيرت طريقة عملنا. النتائج كانت مذهلة في أقل من 3 أشهر."',
        testimonial1_name: 'مدير تقني، شركة رائدة',
        testimonial1_role: 'القطاع المالي',
        testimonial2_text: '"نظام المصادقة البيومترية الذي طورته Innovision رفع مستوى الأمان لدينا بنسبة 95% مع سهولة استخدام مذهلة."',
        testimonial2_name: 'مسؤول أمن المعلومات',
        testimonial2_role: 'قطاع حكومي',
        testimonial3_text: '"احترافية عالية وفهم عميق لاحتياجات العمل. منصة PropAI كانت نقلة نوعية في تقييم العقارات."',
        testimonial3_name: 'مدير عقاري',
        testimonial3_role: 'قطاع التطوير العقاري',

        blog_tag: 'مدونة',
        blog_title: 'آخر <span class="highlight">المقالات</span>',
        blog_desc: 'رؤى وخبرات في الذكاء الاصطناعي والتحول الرقمي',
        blog1_title: '5 علامات تدل أن عملك بحاجة للذكاء الاصطناعي',
        blog1_excerpt: 'كيف تعرف أن الوقت قد حان لاعتماد الذكاء الاصطناعي في مؤسستك؟ نقدم لك 5 مؤشرات واضحة...',
        blog1_link: 'اقرأ المزيد',
        blog2_title: 'الفرق بين التعلم الآلي والتعلم العميق ببساطة',
        blog2_excerpt: 'شرح مبسط لأهم المفاهيم في عالم الذكاء الاصطناعي مع أمثلة عملية من مشاريعنا...',
        blog2_link: 'اقرأ المزيد',
        blog3_title: 'كيف تبدأ مشروع ذكاء اصطناعي في 3 أشهر',
        blog3_excerpt: 'خطة عمل عملية لتنفيذ أول مشروع ذكاء اصطناعي في مؤسستك بخطوات واضحة ونتائج ملموسة...',
        blog3_link: 'اقرأ المزيد',

        cv_tag: 'خبرتي',
        cv_title: 'السيرة <span class="highlight">الذاتية</span>',
        cv_summary_title: 'من أنا',
        cv_summary_text: 'مهندس دولة في الإلكترونيات والتطوير الرقمي مع أكثر من 25 عاماً من الخبرة القيادية في إدارة الأنظمة البيومترية، العمليات التقنية، ومبادرات التحول الرقمي في القطاع العام. يجمع بين الخبرة الإدارية والحوكمة المتقدمة مع الكفاءة التقنية في التعلم الآلي وعلوم البيانات.',
        cv_h1: 'هندسة دولة + 5 سنوات',
        cv_h2: 'شهادات Kaggle و Stanford',
        cv_h3: 'خبرة حكومية ودولية',
        cv_btn: 'تواصل معي',
        cv_exp1: 'مطور Python و AI مستقل - قطر',
        cv_exp2: 'مدير مركز الحالة المدنية - جدة',
        cv_exp3: 'مدير المصادقة على الوثائق - ANRPTS',
        cv_exp4: 'مهندس دولة - إلكترونيات وتطوير رقمي',

        contact_tag: 'تواصل',
        contact_title: 'هيا <span class="highlight">نتحدث</span>',
        contact_desc: 'لديك مشروع؟ فكرة؟ نحن هنا لمساعدتك',
        contact_info_title: 'معلومات الاتصال',
        contact_location: 'الدوحة، قطر',
        form_name: 'الاسم',
        form_email: 'البريد الإلكتروني',
        form_subject: 'الموضوع',
        form_message: 'الرسالة',
        form_submit: 'إرسال الرسالة',

        footer_tagline: 'الابتكار والتحول الرقمي',
        footer_rights: 'جميع الحقوق محفوظة'
    },

    en: {
        nav_home: 'Home',
        nav_services: 'Services',
        nav_projects: 'Projects',
        nav_testimonials: 'Testimonials',
        nav_blog: 'Blog',
        nav_cv: 'CV',
        nav_contact: 'Contact',

        hero_badge: 'Innovation & Digital Transformation',
        hero_title: 'Elevate Your Business <br>with <span class="highlight">Artificial Intelligence</span>',
        hero_desc: 'We provide specialized consulting and advanced software solutions in AI, machine learning, and biometric systems',
        stat_years: 'Years Experience',
        stat_projects: 'Projects',
        stat_langs: 'Languages',
        hero_btn_services: 'Explore Services',
        hero_btn_contact: 'Contact Us',

        services_tag: 'What We Offer',
        services_title: 'Our <span class="highlight">Specialized</span> Services',
        services_desc: 'Custom AI solutions tailored to your unique business needs',
        service1_title: 'AI Consulting',
        service1_desc: 'Assess organizational readiness and develop a customized AI strategy that delivers measurable ROI',
        service2_title: 'Machine Learning Development',
        service2_desc: 'Custom predictive models, advanced data analysis, and intelligent fraud detection systems',
        service3_title: 'Biometric Systems',
        service3_desc: 'Fingerprint, facial, and voice solutions with secure integration into existing security and identity systems',
        service4_title: 'Digital Transformation',
        service4_desc: 'Digital infrastructure development, process automation, and technical team capacity building',

        projects_tag: 'Our Work',
        projects_title: 'Featured <span class="highlight">Projects</span>',
        projects_desc: 'Samples of solutions we\'ve developed for our clients',
        project1_desc: 'Smart real estate valuation platform based on record analysis and fair value prediction',
        project2_desc: 'Interactive CV showcasing experience and projects with modern web technologies',
        project3_desc: 'Development of interactive AI agents integrated with environments like Discord',
        project4_desc: 'Sentiment analysis and text processing tools for Arabic and English',

        testimonials_tag: 'Testimonials',
        testimonials_title: 'What Our <span class="highlight">Clients Say</span>',
        testimonials_desc: 'Feedback from those who have worked with us',
        testimonial1_text: '"Innovision helped us develop an AI strategy that transformed our operations. The results were remarkable in less than 3 months."',
        testimonial1_name: 'Technical Director',
        testimonial1_role: 'Financial Sector',
        testimonial2_text: '"The biometric authentication system developed by Innovision increased our security by 95% with amazing ease of use."',
        testimonial2_name: 'Information Security Officer',
        testimonial2_role: 'Government Sector',
        testimonial3_text: '"High professionalism and deep understanding of client needs. The PropAI platform was a game-changer in property valuation."',
        testimonial3_name: 'Real Estate Manager',
        testimonial3_role: 'Real Estate Development',

        blog_tag: 'Blog',
        blog_title: 'Latest <span class="highlight">Articles</span>',
        blog_desc: 'Insights and expertise in AI and digital transformation',
        blog1_title: '5 Signs Your Business Needs AI',
        blog1_excerpt: 'How to know when it\'s time to adopt AI in your organization? Here are 5 clear indicators...',
        blog1_link: 'Read More',
        blog2_title: 'The Difference Between ML and DL Explained Simply',
        blog2_excerpt: 'A simple explanation of key AI concepts with practical examples from our projects...',
        blog2_link: 'Read More',
        blog3_title: 'How to Start an AI Project in 3 Months',
        blog3_excerpt: 'A practical action plan to implement your first AI project with clear steps and tangible results...',
        blog3_link: 'Read More',

        cv_tag: 'My Experience',
        cv_title: '<span class="highlight">Curriculum</span> Vitae',
        cv_summary_title: 'About Me',
        cv_summary_text: 'A State Engineer in Electronics and Digital Development with over 25 years of leadership experience managing biometric systems, technical operations, and digital transformation initiatives in the public sector. Combines administrative and governance expertise with technical proficiency in machine learning and data science.',
        cv_h1: 'State Engineer + 5 Years',
        cv_h2: 'Kaggle & Stanford Certified',
        cv_h3: 'Government & International Experience',
        cv_btn: 'Contact Me',
        cv_exp1: 'Freelance Python & AI Developer - Qatar',
        cv_exp2: 'Civil Status Center Director - Jeddah',
        cv_exp3: 'Secure Documents Authentication Manager - ANRPTS',
        cv_exp4: 'State Engineer - Electronics & Digital Development',

        contact_tag: 'Contact',
        contact_title: 'Let\'s <span class="highlight">Talk</span>',
        contact_desc: 'Have a project? An idea? We\'re here to help',
        contact_info_title: 'Contact Information',
        contact_location: 'Doha, Qatar',
        form_name: 'Name',
        form_email: 'Email',
        form_subject: 'Subject',
        form_message: 'Message',
        form_submit: 'Send Message',

        footer_tagline: 'Innovation & Digital Transformation',
        footer_rights: 'All Rights Reserved'
    },

    fr: {
        nav_home: 'Accueil',
        nav_services: 'Services',
        nav_projects: 'Projets',
        nav_testimonials: 'Témoignages',
        nav_blog: 'Blog',
        nav_cv: 'CV',
        nav_contact: 'Contact',

        hero_badge: 'Innovation & Transformation Numérique',
        hero_title: 'Élevez Votre Entreprise <br>avec l\'<span class="highlight">Intelligence Artificielle</span>',
        hero_desc: 'Nous proposons des conseils spécialisés et des solutions logicielles avancées en IA, apprentissage automatique et systèmes biométriques',
        stat_years: 'Ans d\'Expérience',
        stat_projects: 'Projets',
        stat_langs: 'Langues',
        hero_btn_services: 'Découvrir nos Services',
        hero_btn_contact: 'Contactez-nous',

        services_tag: 'Ce Que Nous Offrons',
        services_title: 'Nos Services <span class="highlight">Spécialisés</span>',
        services_desc: 'Solutions IA personnalisées selon vos besoins uniques',
        service1_title: 'Conseil en IA',
        service1_desc: 'Évaluation de la maturité organisationnelle et stratégie IA personnalisée avec ROI mesurable',
        service2_title: 'Développement ML',
        service2_desc: 'Modèles prédictifs sur mesure, analyse de données avancée et systèmes de détection de fraude',
        service3_title: 'Systèmes Biométriques',
        service3_desc: 'Solutions empreinte digitale, faciale et vocale intégrées aux systèmes de sécurité et d\'identité',
        service4_title: 'Transformation Numérique',
        service4_desc: 'Développement d\'infrastructure numérique, automatisation et renforcement des capacités techniques',

        projects_tag: 'Nos Réalisations',
        projects_title: 'Projets <span class="highlight">Phare</span>',
        projects_desc: 'Exemples de solutions développées pour nos clients',
        project1_desc: 'Plateforme d\'évaluation immobilière intelligente basée sur l\'analyse des dossiers',
        project2_desc: 'CV interactif présentant l\'expérience et les projets avec des technologies web modernes',
        project3_desc: 'Développement d\'agents IA interactifs intégrés à des environnements comme Discord',
        project4_desc: 'Outils d\'analyse de sentiments et de traitement de texte en arabe et anglais',

        testimonials_tag: 'Témoignages',
        testimonials_title: 'Ce que disent <span class="highlight">nos clients</span>',
        testimonials_desc: 'Retours de ceux qui ont travaillé avec nous',
        testimonial1_text: '"Innovision nous a aidés à développer une stratégie IA qui a transformé nos opérations. Les résultats ont été remarquables en moins de 3 mois."',
        testimonial1_name: 'Directeur Technique',
        testimonial1_role: 'Secteur Financier',
        testimonial2_text: '"Le système d\'authentification biométrique développé par Innovision a augmenté notre sécurité de 95% avec une facilité d\'utilisation incroyable."',
        testimonial2_name: 'Responsable Sécurité',
        testimonial2_role: 'Secteur Gouvernemental',
        testimonial3_text: '"Un professionnalisme élevé et une compréhension profonde des besoins clients. La plateforme PropAI a changé la donne dans l\'évaluation immobilière."',
        testimonial3_name: 'Gestionnaire Immobilier',
        testimonial3_role: 'Développement Immobilier',

        blog_tag: 'Blog',
        blog_title: 'Derniers <span class="highlight">Articles</span>',
        blog_desc: 'Perspectives et expertises en IA et transformation numérique',
        blog1_title: '5 Signes Que Votre Entreprise A Besoin d\'IA',
        blog1_excerpt: 'Comment savoir quand il est temps d\'adopter l\'IA dans votre organisation ? Voici 5 indicateurs clairs...',
        blog1_link: 'Lire la Suite',
        blog2_title: 'La Différence Entre ML et DL Expliquée Simplement',
        blog2_excerpt: 'Une explication simple des concepts clés de l\'IA avec des exemples pratiques de nos projets...',
        blog2_link: 'Lire la Suite',
        blog3_title: 'Comment Démarrer un Projet IA en 3 Mois',
        blog3_excerpt: 'Un plan d\'action pratique pour mettre en œuvre votre premier projet IA avec des étapes claires et des résultats tangibles...',
        blog3_link: 'Lire la Suite',

        cv_tag: 'Mon Expérience',
        cv_title: 'Mon <span class="highlight">Curriculum</span> Vitae',
        cv_summary_title: 'À Propos de Moi',
        cv_summary_text: 'Ingénieur d\'État en Électronique et Développement Numérique avec plus de 25 ans d\'expérience en leadership dans la gestion des systèmes biométriques, opérations techniques et transformation numérique dans le secteur public. Combine expertise administrative et gouvernance avec compétences techniques en apprentissage automatique et science des données.',
        cv_h1: 'Ingénieur d\'État + 5 Ans',
        cv_h2: 'Certifié Kaggle & Stanford',
        cv_h3: 'Expérience Gouvernementale & Internationale',
        cv_btn: 'Contactez-moi',
        cv_exp1: 'Développeur Python & IA Indépendant - Qatar',
        cv_exp2: 'Directeur du Centre d\'État Civil - Djeddah',
        cv_exp3: 'Responsable Authentification Documents - ANRPTS',
        cv_exp4: 'Ingénieur d\'État - Électronique & Numérique',

        contact_tag: 'Contact',
        contact_title: 'Parlons <span class="highlight">Ensemble</span>',
        contact_desc: 'Un projet ? Une idée ? Nous sommes là pour vous aider',
        contact_info_title: 'Coordonnées',
        contact_location: 'Doha, Qatar',
        form_name: 'Nom',
        form_email: 'Email',
        form_subject: 'Sujet',
        form_message: 'Message',
        form_submit: 'Envoyer',

        footer_tagline: 'Innovation & Transformation Numérique',
        footer_rights: 'Tous Droits Réservés'
    }
};

// ===== تبديل اللغة =====
let currentLang = 'ar';

function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});

// ===== القائمة المتنقلة =====
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// ===== زر العودة للأعلى =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== نموذج التواصل مع EmailJS =====
// سجل في EmailJS واحصل على:
// - Service ID
// - Template ID
// - Public Key
// ثم استبدل القيم أدناه

const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',
    serviceID: 'YOUR_SERVICE_ID',
    templateID: 'YOUR_TEMPLATE_ID'
};

// تهيئة EmailJS
(function initEmailJS() {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    }
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const subject = document.getElementById('formSubject').value.trim();
    const message = document.getElementById('formMessage').value.trim();
    const statusDiv = document.getElementById('formStatus');

    if (!name || !email || !subject || !message) {
        const msg = currentLang === 'ar' ? 'الرجاء ملء جميع الحقول' :
                    currentLang === 'en' ? 'Please fill all fields' :
                    'Veuillez remplir tous les champs';
        statusDiv.textContent = msg;
        statusDiv.className = 'error';
        return;
    }

    // التحقق من صحة البريد
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const msg = currentLang === 'ar' ? 'الرجاء إدخال بريد إلكتروني صحيح' :
                    currentLang === 'en' ? 'Please enter a valid email' :
                    'Veuillez entrer un email valide';
        statusDiv.textContent = msg;
        statusDiv.className = 'error';
        return;
    }

    statusDiv.textContent = currentLang === 'ar' ? 'جاري الإرسال...' :
                            currentLang === 'en' ? 'Sending...' :
                            'Envoi en cours...';
    statusDiv.className = '';

    // محاولة الإرسال عبر EmailJS أو محاكاة
    const sendEmail = async () => {
        // إذا تم تكوين EmailJS بشكل صحيح
        if (typeof emailjs !== 'undefined' && 
            EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' &&
            EMAILJS_CONFIG.serviceID !== 'YOUR_SERVICE_ID' &&
            EMAILJS_CONFIG.templateID !== 'YOUR_TEMPLATE_ID') {
            
            try {
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    subject: subject,
                    message: message
                };
                
                await emailjs.send(
                    EMAILJS_CONFIG.serviceID,
                    EMAILJS_CONFIG.templateID,
                    templateParams
                );
                
                const successMsg = currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح! سأتصل بك قريباً.' :
                                   currentLang === 'en' ? 'Your message has been sent! I\'ll get back to you soon.' :
                                   'Votre message a été envoyé ! Je vous répondrai bientôt.';
                statusDiv.textContent = successMsg;
                statusDiv.className = 'success';
                e.target.reset();
                
            } catch (error) {
                console.error('EmailJS Error:', error);
                const errorMsg = currentLang === 'ar' ? 'حدث خطأ في الإرسال. حاول مرة أخرى.' :
                                 currentLang === 'en' ? 'An error occurred. Please try again.' :
                                 'Une erreur est survenue. Veuillez réessayer.';
                statusDiv.textContent = errorMsg;
                statusDiv.className = 'error';
            }
        } else {
            // وضع المحاكاة (عند عدم تكوين EmailJS)
            console.log('📧 Message would be sent via EmailJS:');
            console.log({ name, email, subject, message });
            
            const successMsg = currentLang === 'ar' ? '✅ تم إرسال رسالتك بنجاح! (محاكاة)' :
                               currentLang === 'en' ? '✅ Your message has been sent! (Simulation)' :
                               '✅ Votre message a été envoyé ! (Simulation)';
            statusDiv.textContent = successMsg;
            statusDiv.className = 'success';
            e.target.reset();
        }
    };

    sendEmail();
});

// ===== تأثير ظهور العناصر عند التمرير (Intersection Observer) =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .project-card, .testimonial-card, .blog-card, .cv-grid, .contact-grid').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('🚀 Innovision 2.0 - Innovation & Digital Transformation');
console.log('👨‍💻 Built with ❤️ for Ahmed Vall');
console.log('📧 EmailJS configured:', EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' ? '✅ Yes' : '❌ No (using simulation)');