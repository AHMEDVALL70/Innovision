// ===== تبديل اللغة =====
let currentLang = 'ar';

function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        switchLanguage(this.dataset.lang);
    });
});

// ===== القائمة المتنقلة =====
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// ===== زر العودة للأعلى =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== المساعد الآلي =====
const aiToggle = document.getElementById('aiToggle');
const aiMenu = document.getElementById('aiMenu');
const aiResponse = document.getElementById('aiResponse');

// فتح وإغلاق القائمة
aiToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    aiMenu.classList.toggle('active');
    // إعادة تعيين الرد إلى الترحيب عند فتح القائمة
    if (aiMenu.classList.contains('active')) {
        aiResponse.innerHTML = '<p>👋 مرحباً! اختر أحد الخيارات أعلاه للحصول على معلومات فورية.</p>';
    }
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', function(e) {
    if (!aiMenu.contains(e.target) && !aiToggle.contains(e.target)) {
        aiMenu.classList.remove('active');
    }
});

// بيانات المساعد
const aiData = {
    experience: `👨‍💻 الخبرة المهنية:
• مهندس دولة في الإلكترونيات والتطوير الرقمي (1992-1997)
• مدير مركز الحالة المدنية - جدة (2019-2024)
• مدير المصادقة على الوثائق - ANRPTS (2015-2019)
• أكثر من 25 سنة في القطاع العام والتقني
• خبرة في الأنظمة البيومترية والتحول الرقمي`,

    missions: `🎯 المهمات الرئيسية:
• إدارة السجل البيومتري الوطني
• الإشراف على أنظمة الوثائق المؤمنة
• تطوير البنية التحتية لتقنية المعلومات
• تطبيق أطر الحوكمة وضمان الجودة
• إدارة المشتريات العامة والعقود الدولية`,

    projects: `📊 المشاريع البارزة:
• PropAI: منصة التقييم العقاري الذكي
• محسّن السيرة الذاتية ATS
• كشف الاحتيال في الصفقات العمومية
• نموذج التنبؤ بالسكري (دقة 85%+)
• تحليل المشاعر (NLP) بالعربية والإنجليزية`,

    certifications: `🎓 الشهادات والتدريب:
• Python Coder (Kaggle) - 2026
• Agent of Discord (Kaggle/Google) - 2026
• Machine Learning Specialization (Stanford) - 2025
• Deep Learning Specialization (DeepLearning.AI) - 2025
• Python for Data Science (IBM) - 2024
• دبلوم إدارة الأعمال الاحترافي - 2021`,

    contact: `📧 للتواصل معي:
• البريد الإلكتروني: ahmedvalljemaldine@gmail.com
• واتساب: +974 7473 6271
• LinkedIn: linkedin.com/in/ahmed-vall-sidina
• Bayt: people.bayt.com/ahmed-vall-sidina
• GitHub: github.com/AHMEDVALL70`
};

document.querySelectorAll('.ai-menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const action = this.dataset.action;
        const text = aiData[action] || '⚠️ المعلومات غير متاحة حالياً.';
        aiResponse.innerHTML = text.replace(/\n/g, '<br>');
        
        // العودة للقائمة الرئيسية بعد 4 ثواني
        setTimeout(() => {
            aiResponse.innerHTML = '<p>👋 اختر خياراً آخر من القائمة أعلاه.</p>';
        }, 4000);
    });
});

// ===== تكوين EmailJS =====
const EMAILJS_CONFIG = {
    publicKey: 'Isa8uC0aRzT_viWJ4',
    serviceID: 'service_hp0pmis',
    templateID: 'YOUR_TEMPLATE_ID'   // 🔴 استبدل بـ Template ID الذي ستحصل عليه
};

// تهيئة EmailJS
(function initEmailJS() {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey) {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        console.log('✅ EmailJS initialized successfully!');
    } else {
        console.warn('⚠️ EmailJS not configured. Using simulation mode.');
    }
})();

// ===== نافذة طلب الخدمة =====
const serviceModal = document.getElementById('serviceModal');
const serviceModalClose = document.getElementById('serviceModalClose');

document.querySelectorAll('.btn-service-request').forEach(btn => {
    btn.addEventListener('click', function() {
        const service = this.dataset.service;
        const modalService = document.getElementById('modalFormService');
        if (service && modalService) {
            modalService.value = service;
        }
        serviceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

serviceModalClose.addEventListener('click', function() {
    serviceModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

serviceModal.addEventListener('click', function(e) {
    if (e.target === this) {
        serviceModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== نموذج طلب الخدمة (النافذة المنبثقة) =====
document.getElementById('serviceModalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('modalFormName').value.trim();
    const email = document.getElementById('modalFormEmail').value.trim();
    const phoneCode = document.getElementById('modalCountryCode').value;
    const phone = document.getElementById('modalFormPhone').value.trim();
    const service = document.getElementById('modalFormService').value;
    const message = document.getElementById('modalFormMessage').value.trim();
    const statusDiv = document.getElementById('modalFormStatus');

    if (!name || !email || !phone || !service || !message) {
        statusDiv.textContent = 'الرجاء ملء جميع الحقول';
        statusDiv.className = 'error';
        return;
    }

    statusDiv.textContent = 'جاري الإرسال...';
    statusDiv.className = '';

    const sendEmail = async () => {
        try {
            if (typeof emailjs !== 'undefined' && 
                EMAILJS_CONFIG.publicKey && 
                EMAILJS_CONFIG.serviceID && 
                EMAILJS_CONFIG.templateID &&
                EMAILJS_CONFIG.templateID !== 'YOUR_TEMPLATE_ID') {
                
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    phone: phoneCode + phone,
                    service: service,
                    message: message,
                    timestamp: new Date().toLocaleString('ar-EG')
                };
                
                await emailjs.send(
                    EMAILJS_CONFIG.serviceID,
                    EMAILJS_CONFIG.templateID,
                    templateParams
                );
                
                statusDiv.textContent = '✅ تم إرسال طلبك بنجاح! سأتصل بك قريباً.';
                statusDiv.className = 'success';
                document.getElementById('serviceModalForm').reset();
                
                setTimeout(() => {
                    serviceModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }, 3000);
            } else {
                // وضع المحاكاة
                console.log('📧 طلب خدمة جديد (محاكاة):', { name, email, phone: phoneCode + phone, service, message });
                statusDiv.textContent = '✅ تم إرسال طلبك بنجاح! (محاكاة)';
                statusDiv.className = 'success';
                document.getElementById('serviceModalForm').reset();
            }
        } catch (error) {
            console.error('❌ خطأ في الإرسال:', error);
            statusDiv.textContent = '❌ حدث خطأ في الإرسال. حاول مرة أخرى.';
            statusDiv.className = 'error';
        }
    };

    sendEmail();
});

// ===== نموذج طلب الخدمة (في الصفحة الرئيسية) =====
document.getElementById('serviceRequestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const phoneCode = document.getElementById('countryCode').value;
    const phone = document.getElementById('formPhone').value.trim();
    const service = document.getElementById('formService').value;
    const message = document.getElementById('formMessage').value.trim();
    const statusDiv = document.getElementById('formStatus');

    if (!name || !email || !phone || !service || !message) {
        statusDiv.textContent = 'الرجاء ملء جميع الحقول';
        statusDiv.className = 'error';
        return;
    }

    statusDiv.textContent = 'جاري الإرسال...';
    statusDiv.className = '';

    const sendEmail = async () => {
        try {
            if (typeof emailjs !== 'undefined' && 
                EMAILJS_CONFIG.publicKey && 
                EMAILJS_CONFIG.serviceID && 
                EMAILJS_CONFIG.templateID &&
                EMAILJS_CONFIG.templateID !== 'YOUR_TEMPLATE_ID') {
                
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    phone: phoneCode + phone,
                    service: service,
                    message: message,
                    timestamp: new Date().toLocaleString('ar-EG')
                };
                
                await emailjs.send(
                    EMAILJS_CONFIG.serviceID,
                    EMAILJS_CONFIG.templateID,
                    templateParams
                );
                
                statusDiv.textContent = '✅ تم إرسال طلبك بنجاح! سأتصل بك قريباً.';
                statusDiv.className = 'success';
                document.getElementById('serviceRequestForm').reset();
            } else {
                console.log('📧 طلب خدمة جديد (محاكاة):', { name, email, phone: phoneCode + phone, service, message });
                statusDiv.textContent = '✅ تم إرسال طلبك بنجاح! (محاكاة)';
                statusDiv.className = 'success';
                document.getElementById('serviceRequestForm').reset();
            }
        } catch (error) {
            console.error('❌ خطأ في الإرسال:', error);
            statusDiv.textContent = '❌ حدث خطأ في الإرسال. حاول مرة أخرى.';
            statusDiv.className = 'error';
        }
    };

    sendEmail();
});

// ===== تأثير التمرير (Intersection Observer) =====
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
            setTimeout(function() {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .project-card, .testimonial-card, .blog-card, .casestudy-card, .cv-grid, .contact-grid').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('🚀 Innovision 3.1 - يعمل بنجاح!');
console.log('👨‍💻 Built with ❤️ for Ahmed Vall');
console.log('📧 EmailJS Config:', EMAILJS_CONFIG);