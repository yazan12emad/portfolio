        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Page navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get the target page
                const targetPage = link.getAttribute('data-page');
                
                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
                
                // Show target page
                pages.forEach(page => {
                    page.classList.remove('active');
                    if (page.id === targetPage) {
                        page.classList.add('active');
                    }
                });
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // CV download button
        const downloadCV = document.getElementById('downloadCV');
        downloadCV.addEventListener('click', (e) => {
            e.preventDefault();
            alert('CV download functionality will be implemented when the PDF file is available.');
        });
        
        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! This is a frontend demo, so the message is not actually sent.');
            contactForm.reset();
        });
        
        // File upload buttons
        const uploadButtons = document.querySelectorAll('.btn-primary');
        uploadButtons.forEach(button => {
            if (button.textContent.includes('Upload')) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert('File upload functionality will be implemented in the backend version.');
                });
            }
        });
                // View Assignment PDF
        const viewAssignment = document.getElementById('viewAssignment');
        if (viewAssignment) {
            viewAssignment.addEventListener('click', (e) => {
                e.preventDefault();
                alert('This would open the PDF: IT_Infrastructure_Modern_Elegant_Final.pdf\n\nSince this is a frontend demo, the PDF viewer would be implemented in a production version.');
            });
        }
                // Video controls
        const introVideo = document.getElementById('introVideo');
        const playVideo = document.getElementById('playVideo');
        const pauseVideo = document.getElementById('pauseVideo');
        const fullscreenVideo = document.getElementById('fullscreenVideo');
        
        if (introVideo && playVideo) {
            playVideo.addEventListener('click', () => {
                introVideo.play();
            });
        }
        
        if (introVideo && pauseVideo) {
            pauseVideo.addEventListener('click', () => {
                introVideo.pause();
            });
        }
        
        if (introVideo && fullscreenVideo) {
            fullscreenVideo.addEventListener('click', () => {
                if (introVideo.requestFullscreen) {
                    introVideo.requestFullscreen();
                } else if (introVideo.webkitRequestFullscreen) {
                    introVideo.webkitRequestFullscreen();
                } else if (introVideo.msRequestFullscreen) {
                    introVideo.msRequestFullscreen();
                }
            });
        }
        
        // Update video controls based on playback
        if (introVideo) {
            introVideo.addEventListener('play', () => {
                playVideo.disabled = true;
                pauseVideo.disabled = false;
            });
            
            introVideo.addEventListener('pause', () => {
                playVideo.disabled = false;
                pauseVideo.disabled = true;
            });
            
            introVideo.addEventListener('ended', () => {
                playVideo.disabled = false;
                pauseVideo.disabled = true;
            });
        }
