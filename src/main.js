// Main Entry Point
import './styles/main.css';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as turf from '@turf/turf';

console.log('%c System Online ', 'background: #00ff41; color: #000; font-weight: bold;');
console.log('Welcome to Mario Barajas Portfolio');

// Map Initialization
const initMap = () => {
    const map = new maplibregl.Map({
        container: 'map',
        // CartoDB Dark Matter Raster - Reliable production tiles (Fixes Netlify CORS blank map)
        style: {
            'version': 8,
            'sources': {
                'dark-matter': {
                    'type': 'raster',
                    'tiles': [
                        'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                        'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                        'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
                    ],
                    'tileSize': 256
                }
            },
            'layers': [
                {
                    'id': 'dark-matter-layer',
                    'type': 'raster',
                    'source': 'dark-matter',
                    'minzoom': 0,
                    'maxzoom': 22
                }
            ]
        },
        center: [-108, 38], // Center roughly between BC and AGS
        zoom: 2.5,
        scrollZoom: true,
    });

    const locations = [
        {
            name: "Vancouver, BC",
            coords: [-123.1207, 49.2827],
            desc: "Current Base | Cybersecurity Operations"
        },
        {
            name: "Aguascalientes, MX",
            coords: [-102.2916, 21.8853],
            desc: "Origin | Education & Early Career"
        }
    ];

    locations.forEach(loc => {
        const el = document.createElement('div');
        el.className = 'marker';

        new maplibregl.Marker({ element: el })
            .setLngLat(loc.coords)
            .setPopup(new maplibregl.Popup({ offset: 25 })
                .setHTML(`<h3>${loc.name}</h3><p>${loc.desc}</p>`))
            .addTo(map);
    });

    map.on('load', () => {

        const origin = [-102.2916, 21.8853]; // Aguascalientes
        const destination = [-123.1207, 49.2827]; // Vancouver

        // Create a great circle curved route
        const route = turf.greatCircle(turf.point(origin), turf.point(destination));

        // Background arc path
        map.addSource('route', {
            'type': 'geojson',
            'data': route
        });

        map.addLayer({
            'id': 'route-line',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#ff0055', // Red --alert color
                'line-width': 2,
                'line-opacity': 0.15 // Faint background path
            }
        });

        // "Comet" representing a packet/connection
        map.addSource('comet', {
            'type': 'geojson',
            'data': turf.point(origin)
        });

        map.addLayer({
            'id': 'comet-layer',
            'type': 'circle',
            'source': 'comet',
            'paint': {
                'circle-radius': 4,
                'circle-color': '#ff0055',
                'circle-blur': 0.2,
                'circle-stroke-width': 3,
                'circle-stroke-color': 'rgba(255, 0, 85, 0.4)'
            }
        });

        // Animation logic
        const arcLength = turf.length(route, { units: 'kilometers' });
        const steps = 300; // Slower, smoother travel
        let counter = 0;

        function animateComet() {
            counter += 1;
            if (counter >= steps) {
                counter = 0;
            }
            
            const distance = (counter / steps) * arcLength;
            const currentPoint = turf.along(route, distance, { units: 'kilometers' });
            
            map.getSource('comet').setData(currentPoint);
            requestAnimationFrame(animateComet);
        }
        animateComet();
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-right');
};

if (document.getElementById('map')) {
    initMap();
}

// Simple intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Email Decryption/Encryption Effect
document.querySelectorAll('.secure-email').forEach(element => {
    element.addEventListener('click', function () {
        const originalText = "[CLICK_TO_DECRYPT_EMAIL]";
        const email = this.getAttribute('data-email');
        const isCurrentlyRevealed = this.innerText === email;
        const targetText = isCurrentlyRevealed ? originalText : email;

        // Matrix decoding effect simulation
        let iterations = 0;
        const interval = setInterval(() => {
            this.innerText = this.innerText.split('')
                .map((letter, index) => {
                    if (index < iterations) {
                        return targetText[index];
                    }
                    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
                })
                .join('');

            if (iterations >= targetText.length) {
                clearInterval(interval);
                this.innerText = targetText; // Ensure final text is correct

                if (isCurrentlyRevealed) {
                    this.style.color = "var(--alert)";
                    this.style.borderBottom = "1px dashed var(--alert)";
                } else {
                    this.style.color = "var(--text-primary)";
                    this.style.borderBottom = "none";
                }
            }

            iterations += 1 / 3;
        }, 30);
    });
});

// Email Button Listener (Restored)
document.querySelectorAll('.secure-email-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const email = this.getAttribute('data-email');
        window.location.href = `mailto:${email}`;
    });
});

// Carousel Navigation Logic
const certGrid = document.getElementById('cert-grid');
const prevBtn = document.getElementById('cert-prev');
const nextBtn = document.getElementById('cert-next');

if (certGrid && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        certGrid.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        certGrid.scrollBy({ left: 300, behavior: 'smooth' });
    });
}

// Certificates Lightbox Logic
const modal = document.getElementById('cert-modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('modal-caption');
const closeBtn = document.getElementById('modal-close');

// Collect all cert cards into an array for navigation
const certCards = Array.from(document.querySelectorAll('.cert-card'));
let currentCertIndex = 0;

// Open a specific certificate by index
const openCert = (index) => {
    const card = certCards[index];
    if (!card) return;
    currentCertIndex = index;

    // Fade out → swap image → fade in
    modalImg.style.opacity = '0';
    setTimeout(() => {
        modalImg.src = card.querySelector('img').src;
        captionText.innerText = card.getAttribute('data-caption');
        modalImg.style.opacity = '1';
    }, 150);
};

certCards.forEach((card, index) => {
    card.addEventListener('click', function () {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add('active'), 10);
        openCert(index);
    });
});

// Navigate to previous / next certificate inside the modal
const showPrevCert = () => {
    const newIndex = (currentCertIndex - 1 + certCards.length) % certCards.length;
    openCert(newIndex);
};

const showNextCert = () => {
    const newIndex = (currentCertIndex + 1) % certCards.length;
    openCert(newIndex);
};

// Inject prev/next buttons into the modal (only once)
const modalNavPrev = document.createElement('button');
modalNavPrev.id = 'modal-prev';
modalNavPrev.innerHTML = '&#10094;';
modalNavPrev.setAttribute('aria-label', 'Previous certificate');

const modalNavNext = document.createElement('button');
modalNavNext.id = 'modal-next';
modalNavNext.innerHTML = '&#10095;';
modalNavNext.setAttribute('aria-label', 'Next certificate');

modal.appendChild(modalNavPrev);
modal.appendChild(modalNavNext);

modalNavPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrevCert();
});

modalNavNext.addEventListener('click', (e) => {
    e.stopPropagation();
    showNextCert();
});

// Close Modal Functions
const closeModal = () => {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = "none";
        modalImg.src = "";
    }, 300);
};

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Close on click outside (but not on nav buttons or image)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard: Esc closes, Arrow Left/Right navigates
document.addEventListener('keydown', (e) => {
    if (modal.style.display !== "flex") return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showPrevCert();
    if (e.key === "ArrowRight") showNextCert();
});

// Touch/swipe support for mobile
let touchStartX = 0;
modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
modal.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
        diff > 0 ? showNextCert() : showPrevCert();
    }
}, { passive: true });

// Resume Force Download
const resumeBtn = document.getElementById('resume-download-btn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
        fetch('/resume.pdf')
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Mario_Barajas_Resume.pdf';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            })
            .catch(() => {
                // Fallback: open in new tab
                window.open('/resume.pdf', '_blank');
            });
    });
}

// Visitor IP Tracking Wrapper
function initIPTracker() {
    const tracker = document.getElementById('ip-tracker');
    const ipSpan = document.getElementById('visitor-ip');

    if (!tracker || !ipSpan) return;

    // Show the widget immediately with animated tracing dots
    tracker.style.display = 'block';

    // Animated "TRACING..." effect while fetching
    let dotCount = 0;
    const tracingInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        ipSpan.innerText = 'TRACING' + '.'.repeat(dotCount);
    }, 400);

    const stopTracing = (text, color = 'var(--text-primary)') => {
        clearInterval(tracingInterval);
        // Matrix-style reveal of the final IP
        let iterations = 0;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.:';
        const finalText = text;
        ipSpan.style.color = color;

        const revealInterval = setInterval(() => {
            ipSpan.innerText = finalText.split('').map((char, index) => {
                if (index < Math.floor(iterations)) return finalText[index];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join('');

            iterations += 0.4;
            if (iterations >= finalText.length) {
                clearInterval(revealInterval);
                ipSpan.innerText = finalText;
            }
        }, 30);
    };

    // Multi-API fallback chain
    const apiEndpoints = [
        () => fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => d.ip),
        () => fetch('https://api64.ipify.org?format=json').then(r => r.json()).then(d => d.ip),
        () => fetch('https://ipapi.co/json/').then(r => r.json()).then(d => d.ip),
        () => fetch('https://ip.seeip.org/json').then(r => r.json()).then(d => d.ip),
    ];

    const tryNext = (index) => {
        if (index >= apiEndpoints.length) {
            // All APIs failed — likely adblocker or VPN
            stopTracing('ENCRYPTED / VPN', 'var(--alert)');
            return;
        }
        apiEndpoints[index]()
            .then(ip => {
                if (ip && ip.length > 0) {
                    stopTracing(ip);
                } else {
                    tryNext(index + 1);
                }
            })
            .catch(() => tryNext(index + 1));
    };

    // Small initial delay for aesthetic effect, then start fetching
    setTimeout(() => tryNext(0), 600);
}

// Bulletproof initialization for any Vite parsing scenario
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIPTracker);
} else {
    initIPTracker();
}
