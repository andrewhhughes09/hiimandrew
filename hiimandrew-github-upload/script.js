// Lightweight enhancements. The page remains fully usable without JavaScript.
document.getElementById('year').textContent = new Date().getFullYear();

// Progressive reveal; content remains readable without JavaScript.
if ('IntersectionObserver' in window) {
 const items = document.querySelectorAll('.yes-item');
 const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)} });
 }, {threshold:0.15});
 items.forEach(item => observer.observe(item));
} else { document.querySelectorAll('.yes-item').forEach(item => item.classList.add('visible')); }
