// Mobile-specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
            
            // Add haptic feedback on mobile
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    });

    // Prevent double-tap to zoom on buttons and links
    const interactive = document.querySelectorAll('a, button');
    interactive.forEach(element => {
        element.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.target.click();
        });
    });

    // Add download tracking and user agent detection
    const downloadButton = document.querySelector('.download-link');
    if (downloadButton) {
        downloadButton.addEventListener('click', function(e) {
            // Check if user is on Android
            const isAndroid = /Android/i.test(navigator.userAgent);
            if (!isAndroid) {
                if (!confirm('This APK file is designed for Android devices. Do you still want to download?')) {
                    e.preventDefault();
                    return;
                }
            }
            
            // Track download
            console.log('Download initiated');
            
            // You can add analytics tracking here
            // analytics.track('app_download', { platform: 'android' });
        });
    }

    // Add vibration feedback on button press (if supported)
    const buttons = document.querySelectorAll('.download-link, .social-link');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    });

    // Add swipe support for screenshots (if you have multiple)
    let startX;
    const slider = document.querySelector('.screenshot-slider');
    
    if (slider) {
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener('touchmove', (e) => {
            if (!startX) return;
            
            const currentX = e.touches[0].clientX;
            const diff = startX - currentX;
            
            // Add your sliding logic here if you have multiple screenshots
            startX = null;
        });
    }
});
