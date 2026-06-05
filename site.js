// Shared site behaviour — Capfun Espace Saisonnier
(function(){
  // mobile nav
  function initNav(){
    var burger=document.querySelector('.burger');
    var links=document.querySelector('.nav-links');
    if(burger&&links){
      burger.addEventListener('click',function(){links.classList.toggle('open');});
      links.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click',function(){links.classList.remove('open');});
      });
    }
  }
  // reveal on scroll
  function initReveal(){
    var els=document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}
      });
    },{threshold:.14,rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(e){io.observe(e);});
  }
  document.addEventListener('DOMContentLoaded',function(){initNav();initReveal();initLightbox();});

  // click-to-zoom lightbox for detailed posters/plans
  function initLightbox(){
    var imgs=document.querySelectorAll('img.zoomable');
    if(!imgs.length)return;
    var ov=document.createElement('div');
    ov.className='lightbox';
    ov.innerHTML='<button class="lightbox-close" aria-label="Fermer">✕</button><img alt="">';
    document.body.appendChild(ov);
    var big=ov.querySelector('img');
    function open(src,alt){big.src=src;big.alt=alt||'';ov.classList.add('open');document.body.style.overflow='hidden';}
    function close(){ov.classList.remove('open');document.body.style.overflow='';}
    imgs.forEach(function(im){
      im.style.cursor='zoom-in';
      im.addEventListener('click',function(){open(im.currentSrc||im.src,im.alt);});
    });
    ov.addEventListener('click',function(e){if(e.target===ov||e.target.classList.contains('lightbox-close'))close();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  }
})();
