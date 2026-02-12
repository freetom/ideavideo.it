/* ========================================
   BLUEFIN TUNA DOCUMENTARY SALES PAGE
   Multilingual Support (7 Languages)
   NO COOKIES - Only localStorage
   ======================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MULTILINGUAL SYSTEM (7 LANGUAGES)
    // ========================================
    
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Get stored language preference or default to Italian
    let currentLang = localStorage.getItem('preferredLanguage') || 'it';
    
    // Auto-add missing language attributes on page load
    initializeMultilingualAttributes();
    
    // Initialize page with stored language
    setLanguage(currentLang);
    
    // Add click event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            setLanguage(selectedLang);
            
            // Store preference (NO COOKIES - only localStorage)
            localStorage.setItem('preferredLanguage', selectedLang);
            
            // Update active button state
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Function to automatically add missing language attributes
    function initializeMultilingualAttributes() {
        if (typeof translations === 'undefined') return;
        
        // Add attributes to elements with data-it/data-en
        document.querySelectorAll('[data-it][data-en]').forEach(element => {
            const itText = element.getAttribute('data-it');
            const enText = element.getAttribute('data-en');
            
            // Find matching translation key
            for (const key in translations.it) {
                if (translations.it[key] === itText || translations.en[key] === enText) {
                    // Add all other language attributes
                    if (translations.ja[key]) element.setAttribute('data-ja', translations.ja[key]);
                    if (translations.ko[key]) element.setAttribute('data-ko', translations.ko[key]);
                    if (translations.zh[key]) element.setAttribute('data-zh', translations.zh[key]);
                    if (translations.fr[key]) element.setAttribute('data-fr', translations.fr[key]);
                    if (translations.es[key]) element.setAttribute('data-es', translations.es[key]);
                    break;
                }
            }
        });
    }
    
    // Function to set language using translations.js
    function setLanguage(lang) {
        currentLang = lang;
        
        // Check if translations object exists
        if (typeof translations === 'undefined') {
            console.error('Translations not loaded!');
            return;
        }
        
        const t = translations[lang];
        if (!t) {
            console.error('Language not found:', lang);
            return;
        }
        
        // Update page title
        document.title = t.pageTitle;
        
        // METHOD 1: Update elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (t[key]) {
                element.textContent = t[key];
            }
        });
        
        // METHOD 2: Update elements with old data-lang attributes (backward compatible)
        const oldLangElements = document.querySelectorAll('[data-it], [data-en], [data-ja], [data-ko], [data-zh], [data-fr], [data-es]');
        oldLangElements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
        
        // Update synopsis paragraphs dynamically
        const synopsisParagraphs = document.querySelectorAll('.synopsis-content p');
        synopsisParagraphs.forEach((p, index) => {
            const key = `synopsisPara${index + 1}`;
            if (t[key]) {
                p.textContent = t[key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update active button
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // ========================================
    // SMOOTH SCROLL ENHANCEMENT
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.why-card, .spec-group, .audience-item');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // VIDEO AUTOPLAY ON VIEWPORT
    // ========================================
    
    const videoWrapper = document.querySelector('.video-wrapper');
    
    if (videoWrapper) {
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                const iframe = entry.target.querySelector('iframe');
                if (entry.isIntersecting && iframe) {
                    // Video is in viewport
                    videoWrapper.style.transform = 'scale(1)';
                }
            });
        }, { threshold: 0.5 });
        
        videoWrapper.style.transition = 'transform 0.6s ease';
        videoObserver.observe(videoWrapper);
    }
    
    // ========================================
    // STATS COUNTER ANIMATION
    // ========================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    if (statNumbers.length > 0) {
        statsObserver.observe(statNumbers[0].parentElement.parentElement);
    }
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const originalText = stat.textContent;
            stat.style.transform = 'scale(1.2)';
            setTimeout(() => {
                stat.style.transform = 'scale(1)';
            }, 300);
        });
    }
    
    // ========================================
    // CTA BUTTON RIPPLE EFFECT
    // ========================================
    
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const x = e.clientX - this.offsetLeft;
            const y = e.clientY - this.offsetTop;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
    
    // ========================================
    // COPY EMAIL TO CLIPBOARD
    // ========================================
    
    const contactEmail = document.querySelector('.contact-email');
    
    if (contactEmail) {
        contactEmail.style.cursor = 'pointer';
        contactEmail.setAttribute('title', 'Click to copy email');
        
        contactEmail.addEventListener('click', function() {
            const email = 'manfred@ideavideo.it';
            
            // Modern clipboard API
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    showCopyNotification();
                }).catch(err => {
                    console.error('Failed to copy email:', err);
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                textArea.style.position = 'fixed';
                textArea.style.left = '-9999px';
                document.body.appendChild(textArea);
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    showCopyNotification();
                } catch (err) {
                    console.error('Failed to copy email:', err);
                }
                
                document.body.removeChild(textArea);
            }
        });
    }
    
    function showCopyNotification() {
        const notification = document.createElement('div');
        const messages = {
            'it': 'Email copiata!',
            'en': 'Email copied!',
            'ja': 'メールをコピーしました！',
            'ko': '이메일이 복사되었습니다!',
            'zh': '邮箱已复制！',
            'fr': 'Email copié!',
            'es': '¡Email copiado!'
        };
        notification.textContent = messages[currentLang] || messages.it;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: linear-gradient(135deg, #FF8C42, #0099CC);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            font-weight: 600;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }
    
    // ========================================
    // KEYBOARD NAVIGATION
    // ========================================
    
    document.addEventListener('keydown', function(e) {
        // Lightbox keyboard controls
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        }
        
        // Alt + L to cycle through languages
        if (e.altKey && e.key === 'l') {
            e.preventDefault();
            const langs = ['it', 'en', 'ja', 'ko', 'zh', 'fr', 'es'];
            const currentIndex = langs.indexOf(currentLang);
            const nextIndex = (currentIndex + 1) % langs.length;
            const newLang = langs[nextIndex];
            setLanguage(newLang);
            localStorage.setItem('preferredLanguage', newLang);
        }
    });
    
    // ========================================
    // PERFORMANCE: LAZY LOAD BACKGROUND IMAGES
    // ========================================
    
    const lazyBackgrounds = document.querySelectorAll('[data-bg]');
    
    const bgObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bg = entry.target.getAttribute('data-bg');
                entry.target.style.backgroundImage = `url(${bg})`;
                bgObserver.unobserve(entry.target);
            }
        });
    });
    
    lazyBackgrounds.forEach(bg => {
        bgObserver.observe(bg);
    });
    
    // ========================================
    // PHOTO GALLERY LIGHTBOX
    // ========================================
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let currentImageIndex = 0;
    const galleryImages = [];
    
    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-text h3');
        const description = item.querySelector('.gallery-text p');
        
        galleryImages.push({
            src: img.src,
            alt: img.alt,
            title: title ? title.textContent : '',
            description: description ? description.textContent : ''
        });
        
        // Add click event to gallery item and expand button
        const expandBtn = item.querySelector('.gallery-expand');
        item.addEventListener('click', () => openLightbox(index));
        if (expandBtn) {
            expandBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openLightbox(index);
            });
        }
    });
    
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateLightboxImage() {
        const image = galleryImages[currentImageIndex];
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightboxCaption.textContent = image.title;
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }
    
    // Event listeners for lightbox controls
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', nextImage);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', prevImage);
    }
    
    // Close lightbox when clicking outside image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // ========================================
    // CONSOLE SIGNATURE
    // ========================================
    
    console.log('%c🎬 Bluefin Tuna Documentary', 'font-size: 20px; font-weight: bold; color: #FF8C42;');
    console.log('%cProduced by Ideavideo | www.ideavideo.it', 'font-size: 12px; color: #0099CC;');
    console.log('%cFor screener requests: manfred@ideavideo.it', 'font-size: 12px; color: #666;');
    
});

// ========================================
// CSS ANIMATIONS (INJECTED VIA JS)
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
        animation: ripple-effect 0.6s;
        pointer-events: none;
    }
    
    @keyframes ripple-effect {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;

document.head.appendChild(style);