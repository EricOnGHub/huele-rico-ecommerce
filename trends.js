(()=>{
const products=window.HUELE_TRENDS||[];
const photos=window.HUELE_PHOTOS||{};
let lang=localStorage.getItem('huele-lang')==='es'?'es':'en';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function card(p){
 const title=esc(p.brand+' '+p.name),photo=photos[p.slug],src=photo?.url||'',source=photo?.source||'';
 const fallback='<div class="trend-photo-fallback" '+(src?'hidden':'')+'><span>'+esc(p.brand)+'</span><strong>'+esc(p.name)+'</strong><small>'+(lang==='es'?'IMAGEN NO DISPONIBLE':'PHOTO UNAVAILABLE')+'</small></div>';
 const img=src?'<img src="'+esc(src)+'" alt="'+title+' product bottle photograph" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.hidden=true;this.nextElementSibling.hidden=false">':'';
 return '<article class="trend-card"><div class="trend-photo"><span class="trend-rank">#'+p.rank+'</span>'+img+fallback+'</div><div class="trend-card-body"><p>'+esc(p.brand)+'</p><h3>'+esc(p.name)+'</h3><span>'+(lang==='es'?'SELECCIÓN DE TENDENCIAS':'TREND WATCHLIST')+'</span>'+(source?'<small class="photo-source">'+(lang==='es'?'Foto: ':'Photo: ')+esc(source)+'</small>':'')+'<a class="official-reference" href="./product.html?id='+((p.category==='men'?0:20)+p.rank)+'">'+(lang==='es'?'VER DETALLES ↗':'VIEW DETAILS ↗')+'</a></div></article>';
}
function render(){
 document.documentElement.lang=lang;localStorage.setItem('huele-lang',lang);
 document.querySelectorAll('[data-en]').forEach(x=>x.textContent=x.getAttribute('data-'+lang));
 document.querySelector('#menGrid').innerHTML=products.filter(p=>p.category==='men').map(card).join('');
 document.querySelector('#womenGrid').innerHTML=products.filter(p=>p.category==='women').map(card).join('');
}
document.querySelector('#trendLanguage').addEventListener('click',()=>{lang=lang==='es'?'en':'es';render()});render();
})();
