'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const menuButton = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const closeMenu = () => {
        menuButton?.setAttribute('aria-expanded', 'false');
        mobileNav?.setAttribute('aria-hidden', 'true');
        mobileNav?.classList.remove('is-open');
        document.body.classList.remove('menu-open');
    };
    menuButton?.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        mobileNav?.setAttribute('aria-hidden', String(isOpen));
        mobileNav?.classList.toggle('is-open', !isOpen);
        document.body.classList.toggle('menu-open', !isOpen);
    });
    mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(element => {
        if (reducedMotion) element.classList.add('is-visible');
        else element.style.transitionDelay = `${element.dataset.delay || 0}ms`;
        revealObserver.observe(element);
    });
    document.getElementById('year').textContent = new Date().getFullYear();
});