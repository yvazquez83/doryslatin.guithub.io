const glow=document.getElementById('cursorGlow');
if(glow)document.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
window.addEventListener('scroll',()=>{const n=document.getElementById('navbar');if(n)n.classList.toggle('scrolled',window.scrollY>60)});
const hamburger=document.getElementById('hamburger'),navMenu=document.getElementById('navMenu');
if(hamburger)hamburger.addEventListener('click',()=>navMenu.classList.toggle('open'));
if(navMenu)navMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('open')));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.1});
