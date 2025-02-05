(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const u=document.querySelectorAll("img[data-src]"),f=(e,t)=>{e.forEach(r=>{if(r.isIntersecting){const o=r.target;o.src=o.dataset.src,o.removeAttribute("data-src"),t.unobserve(o)}})},d=new IntersectionObserver(f,{root:null,threshold:.1});u.forEach(e=>d.observe(e));const m=document.querySelectorAll(".lazy-bg"),g=(e,t)=>{e.forEach(r=>{if(r.isIntersecting){const o=r.target;o.style.backgroundImage=`url(${o.dataset.bg})`,o.removeAttribute("data-bg"),t.unobserve(o)}})},p=new IntersectionObserver(g,{root:null,threshold:.1});m.forEach(e=>p.observe(e));const i="https://portfolio-js.b.goit.study/api",h=async()=>{try{const e=await fetch(`${i}/projects`);if(!e.ok)throw new Error(`Error fetching projects: ${e.status}`);return await e.json()}catch(e){return console.error("Failed to fetch projects:",e),[]}},y=async()=>{try{const e=await fetch(`${i}/reviews`);if(!e.ok)throw new Error(`Error fetching reviews: ${e.status}`);return await e.json()}catch(e){return console.error("Failed to fetch reviews:",e),[]}},w=async e=>{try{const t=await fetch(`${i}/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error(`Error submitting form: ${t.status}`);return await t.json()}catch(t){return console.error("Failed to submit form:",t),{success:!1,message:"Submission failed"}}};document.addEventListener("DOMContentLoaded",async()=>{const e=document.querySelector("#projects-container"),t=document.querySelector("#reviews-container");try{const r=await h();!r||r.length===0?(console.warn("⚠️ Немає доступних проєктів!"),e&&(e.innerHTML="<p>❌ Немає доступних проєктів.</p>")):console.log("Projects:",r);const o=await y();!o||o.length===0?(console.warn("⚠️ Немає відгуків!"),t&&(t.innerHTML="<p>❌ Відгуки недоступні.</p>")):console.log("Reviews:",o)}catch(r){console.error("❌ Помилка отримання даних з API:",r),e&&(e.innerHTML=`<p>❌ Не вдалося отримати проєкти: ${r.message||"сервер недоступний"}</p>`),t&&(t.innerHTML=`<p>❌ Не вдалося отримати відгуки: ${r.message||"сервер недоступний"}</p>`)}});const c=document.querySelector("#contact-form");c?c.addEventListener("submit",async e=>{e.preventDefault();const t={name:c.elements.name.value.trim(),email:c.elements.email.value.trim(),message:c.elements.message.value.trim()};try{const r=await w(t);console.log("Form Response:",r),r.success?(b("✅ Форма успішно відправлена!"),c.reset()):l(r.error||"❌ Помилка! Спробуйте ще раз.")}catch(r){l("❌ Сервер недоступний. Перевірте підключення."),console.error("❌ Помилка надсилання форми:",r)}}):console.warn("⚠️ Форма #contact-form не знайдена на сторінці.");function b(e){alert(e)}function l(e){alert(e)}
//# sourceMappingURL=index.js.map
