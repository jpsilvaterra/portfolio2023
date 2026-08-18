// ── Navigation toggle ────────────────────────────────────
const navToggle = document.querySelector('.nav__toggle');
const navList   = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navToggle.classList.toggle('active');
    navList.classList.toggle('open');
});

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('active');
        navList.classList.remove('open');
    });
});

// ── Header scroll effect ─────────────────────────────────
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Tab switching ─────────────────────────────────────────
const tabBtns     = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('tab-btn--active'));
        btn.classList.add('tab-btn--active');

        const target = btn.dataset.tab;
        tabContents.forEach(content => {
            content.classList.toggle('hidden', content.id !== target);
        });
    });
});

// ── Email copy ────────────────────────────────────────────
document.querySelectorAll('.botaoCopiar').forEach(btn => {
    btn.addEventListener('click', () => {
        const email    = btn.value;
        const original = btn.innerHTML;

        const copiedLabel = document.documentElement.lang === 'en' ? '✓ Email copied!' : '✓ Email copiado!';

        navigator.clipboard.writeText(email).then(() => {
            btn.textContent = copiedLabel;
            setTimeout(() => { btn.innerHTML = original; }, 3000);
        }).catch(() => {
            btn.textContent = email;
            setTimeout(() => { btn.innerHTML = original; }, 3000);
        });
    });
});
