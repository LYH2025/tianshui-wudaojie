// 导航栏切换功能
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// 加载动画控制
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    
    setTimeout(() => {
        loader.style.display = 'none';
    }, 300);
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 图片懒加载
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// 当前年份
document.getElementById('current-year').textContent = new Date().getFullYear();

// 注册Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker 注册成功: ', registration.scope);
            })
            .catch(err => {
                console.log('ServiceWorker 注册失败: ', err);
            });
    });
}
