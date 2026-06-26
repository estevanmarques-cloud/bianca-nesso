document.addEventListener('DOMContentLoaded', function() {
    // Dynamic year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
            } else {
                navbar.classList.remove('shadow-sm');
            }
        });
    }

    // GTM click tracking for all elements with data-gtm-event
    document.querySelectorAll('[data-gtm-event]').forEach(el => {
        el.addEventListener('click', () => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': el.dataset.gtmEvent,
                'gtm_category': el.dataset.gtmCategory,
                'gtm_action': el.dataset.gtmAction,
                'gtm_label': el.dataset.gtmLabel
            });
        });
    });

    // WhatsApp redirect simulation
    document.querySelectorAll('a[href="#contato"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const toast = document.createElement('div');
            toast.className = 'fixed top-24 left-1/2 transform -translate-x-1/2 bg-brand-mogno text-brand-offwhite px-6 py-4 rounded-sm shadow-2xl z-[100] transition-opacity duration-300 flex items-center font-sans font-medium border border-brand-areia/20';
            toast.innerHTML = `<svg class="w-5 h-5 mr-3 text-brand-rosaantigo" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Redirecionando para a Recepção no WhatsApp...`;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        });
    });
});
