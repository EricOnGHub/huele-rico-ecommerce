const inventory=window.HUELE_PRODUCTS||[];
const langText={en:{top:'100% AUTHENTIC DESIGNER FRAGRANCES · FREE U.S. SHIPPING',shop:'SHOP',men:'MEN',women:'WOMEN',promise:'OUR PROMISE',heroText:'The designer fragrances you love. 100% authentic. Always a smarter price.',cta:'SHOP THE COLLECTION ↗',authentic:'AUTHENTIC ORIGINALS',shipping:'FREE U.S. SHIPPING',price:'SMARTER PRICES COMING SOON',introTitle:'Your signature scent. Not the department-store markup.',introText:'Discover coveted designer colognes and perfumes, sourced for authenticity and curated for your everyday. Huele Rico! is an independent multi-brand fragrance retailer—not a fragrance manufacturer.',catalogEyebrow:'THE EDIT',catalogTitle:'Find your next obsession.',demo:'TOP 40 PREVIEW · REAL PRODUCT PHOTOS',all:'ALL',unisex:'UNISEX',pricingDisclaimer:'The photos depict genuine products sourced from third-party websites for preview. Real Huele Rico inventory, size, price, seller permissions and fulfillment require verification before sales.',whyTitle:'The real deal. A better deal.',whyText:'Luxury should be about how you feel, not how much you spend. We believe in the original designer fragrance—never a knockoff—and clear prices that make sense.',learn:'GET TO KNOW US ↗',benefit1:'Authenticity first',benefit1Text:'Only original designer fragrances. Product provenance and fulfillment verification required before launch.',benefit2:'Prices worth talking about',benefit2Text:'Our goal is prices at least 25% below comparable department-store retail, shown transparently per item.',benefit3:'Your people. Your scent.',benefit3Text:'A bilingual shopping experience made for how we actually live, dress, give and celebrate.',newsletterTitle:'Good taste. Better drops.',newsletterText:'Get first access to launches, restocks and fragrance stories.',join:'JOIN THE LIST →',footerDesc:'An independent retailer of authentic designer fragrances.',help:'HELP',contact:'CONTACT US',important:'IMPORTANT',footerLegal:'Brand names belong to their respective owners. Huele Rico! is not affiliated with or endorsed by those brands. This demonstration storefront is not accepting payments.',bag:'YOUR CART',subtotal:'SUBTOTAL',checkoutNote:'Demo mode. Live checkout activates once a Shopify store and verified catalog are connected.',checkout:'CHECKOUT ↗'},es:{top:'FRAGANCIAS DE DISEÑADOR 100% ORIGINALES · ENVÍO GRATIS EN EE. UU.',shop:'COMPRAR',men:'HOMBRES',women:'MUJERES',promise:'NUESTRA PROMESA',heroText:'Tus perfumes y lociones favoritos, originales y a un mejor precio.',cta:'COMPRA LA COLECCIÓN ↗',authentic:'100% ORIGINALES',shipping:'ENVÍO GRATIS EN EE. UU.',price:'MEJORES PRECIOS PRÓXIMAMENTE',introTitle:'Tu fragancia favorita. Sin pagar el precio de las grandes tiendas.',introText:'Descubre perfumes y lociones originales de las marcas que conoces. Huele Rico! es una tienda independiente que vende diferentes marcas de diseñador.',catalogEyebrow:'LA SELECCIÓN',catalogTitle:'Descubre tu próxima fragancia favorita.',demo:'TOP 40 · FOTOS REALES',all:'TODOS',unisex:'UNISEX',pricingDisclaimer:'Fotos de referencia de productos reales obtenidas de terceros. Antes de venderlos se deben verificar inventario, precios, tamaños, autorizaciones y logística.',whyTitle:'Lo original. A mejor precio.',whyText:'El lujo se siente, no tiene que costar de más. Perfumes y lociones de diseñador auténticos, sin imitaciones ni precios confusos.',learn:'CONOCE MÁS ↗',benefit1:'Autenticidad ante todo',benefit1Text:'Solo fragancias originales de diseñador. Verificaremos la procedencia antes de venderlas.',benefit2:'Precios que valen la pena',benefit2Text:'Nuestra meta: por lo menos 25% menos que el precio comparable en tiendas departamentales, con información clara.',benefit3:'Tu gente. Tu fragancia.',benefit3Text:'Una experiencia bilingüe para nuestra manera de vestir, celebrar y regalar.',newsletterTitle:'Buen gusto. Mejores ofertas.',newsletterText:'Entérate primero de lanzamientos y novedades.',join:'QUIERO RECIBIR NOVEDADES →',footerDesc:'Tienda independiente de fragancias originales de diseñador.',help:'AYUDA',contact:'CONTÁCTANOS',important:'IMPORTANTE',footerLegal:'Las marcas pertenecen a sus respectivos dueños. Huele Rico! no está afiliada ni respaldada por esas marcas. Esta demostración no acepta pagos.',bag:'TU CARRITO',subtotal:'SUBTOTAL',checkoutNote:'Modo demostración. El pago estará disponible cuando se conecte Shopify y el inventario real.',checkout:'PAGAR ↗'}};
let language=localStorage.getItem('huele-lang')==='es'?'es':'en',category='All',cart=JSON.parse(localStorage.getItem('huele-cart-top40')||'{}');let favorites=JSON.parse(localStorage.getItem('huele-favorites-top40')||'[]');let savedOnly=false;let familyFilter='',brandFilter='',budgetFilter='all';
const $=s=>document.querySelector(s),money=n=>new Intl.NumberFormat(language==='es'?'es-US':'en-US',{style:'currency',currency:'USD'}).format(n);
function setLanguage(){document.documentElement.lang=language;$('#langLabel').textContent=language.toUpperCase();document.querySelectorAll('[data-i18n]').forEach(e=>{const t=langText[language][e.dataset.i18n];if(t)e.textContent=t});$('#search').placeholder=language==='es'?'Buscar marca o fragancia...':'Search brand or fragrance...';localStorage.setItem('huele-lang',language);renderProducts();renderCart()}
function filtered(){const q=$('#search').value.toLowerCase().trim();let p=inventory.filter(x=>(category==='All'||x.type===category)&&(x.brand+' '+x.name).toLowerCase().includes(q)&&(!savedOnly||favorites.includes(x.id)));p=p.filter(x=>(!brandFilter||x.brand===brandFilter)&&(!familyFilter||x.notes.toLowerCase().includes(familyFilter.toLowerCase()))&&(budgetFilter==='all'||(budgetFilter==='under100'&&x.price<100)||(budgetFilter==='100to150'&&x.price>=100&&x.price<=150)||(budgetFilter==='over150'&&x.price>150)));const s=$('#sort').value;if(s==='priceAsc')p.sort((a,b)=>a.price-b.price);if(s==='priceDesc')p.sort((a,b)=>b.price-a.price);if(s==='saving')p.sort((a,b)=>(b.retail-b.price)/b.retail-(a.retail-a.price)/a.retail);return p}
function visual(p){
 const photo=window.HUELE_PHOTOS?.[p.slug];
 const img=photo?'<img class="catalog-bottle-image" src="'+photo.url.replace(/&/g,'&amp;')+'" alt="'+p.brand+' '+p.name+' fragrance bottle photograph" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.hidden=true;this.nextElementSibling.hidden=false">':'';
 return '<div class="product-visual product-visual--genuine">'+
 '<span class="preview-pill">'+(language==='es'?'CATÁLOGO EN PREPARACIÓN':'PREVIEW CATALOG')+'</span>'+
 img+'<div class="catalog-photo-fallback" '+(photo?'hidden':'')+'><span>'+p.brand+'</span><strong>'+p.name+'</strong><small>'+(language==='es'?'VER FOTO EN REFERENCIA':'PHOTO UNAVAILABLE')+'</small></div>'+
 '<span class="catalog-photo-credit">'+(photo?'Photo: '+photo.source:'')+'</span></div>';
}
function renderProducts(){const count=document.querySelector('#savedCount');if(count)count.textContent=favorites.length;const list=filtered();const result=document.querySelector('#productCount');if(result)result.textContent=language==='es'?list.length+' fragancias en vista previa':list.length+' fragrance previews';$('#products').innerHTML=list.map(p=>'<article class="product"><a class="product-image-link" href="./product.html?id='+p.id+'" aria-label="'+p.name+'">'+visual(p)+'</a><button class="wishlist-button" data-favorite="'+p.id+'" aria-label="'+(language==='es'?'Guardar fragancia':'Save fragrance')+'" aria-pressed="'+favorites.includes(p.id)+'">'+(favorites.includes(p.id)?'♥':'♡')+'</button><div class="product-copy"><p class="product-brand">'+p.brand+'</p><a class="product-title" href="./product.html?id='+p.id+'">'+p.name+'</a><div class="product-meta">'+p.size+' · '+p.type+'</div><p class="product-scent-profile">'+p.notes+'</p><div class="catalog-availability">'+(language==='es'?'PRECIOS Y DISPONIBILIDAD PRÓXIMAMENTE':'PRICES & AVAILABILITY COMING SOON')+'</div><div class="product-ctas"><a class="quick-inline" href="./product.html?id='+p.id+'">'+(language==='es'?'VER DETALLES →':'VIEW DETAILS →')+'</a><button class="quick-inline" data-detail="'+p.id+'">'+(language==='es'?'VISTA RÁPIDA':'QUICK VIEW')+'</button></div></div></article>').join('')||'<p class="empty">'+(language==='es'?'No hay resultados. Prueba otros filtros.':'No matching fragrances. Try clearing the filters.')+'</p>'}

function persist(){localStorage.setItem('huele-cart-top40',JSON.stringify(cart));renderCart()}
function add(id){cart[id]=(cart[id]||0)+1;persist();openCart();window.HueleAnalytics?.track('add_to_cart',{currency:'USD',value:inventory.find(p=>p.id===id).price,items:[{item_id:String(id),item_name:inventory.find(p=>p.id===id).name,item_brand:inventory.find(p=>p.id===id).brand,price:inventory.find(p=>p.id===id).price,quantity:1}]})}
function renderCart(){
 const ids=Object.keys(cart).filter(id=>cart[id]>0&&inventory.some(p=>p.id===Number(id)));
 const count=ids.reduce((s,id)=>s+cart[id],0);
 const total=ids.reduce((s,id)=>s+inventory.find(p=>p.id===Number(id)).price*cart[id],0);
 const es=language==='es';
 $('#cartCount').textContent=count;
 $('#cartItems').innerHTML=ids.length?ids.map(id=>{
  const p=inventory.find(x=>x.id===Number(id)),photo='./assets/products/'+p.id+'.webp';
  return '<article class="cart-product"><div class="cart-product-image"><img src="'+photo+'" alt="'+p.brand+' '+p.name+'" onload="this.classList.add(\'loaded\')" onerror="this.remove()"><span>'+p.brand+'</span></div><div class="cart-product-info"><p class="cart-product-brand">'+p.brand+'</p><a href="./product.html?id='+p.id+'" class="cart-product-name">'+p.name+'</a><p class="cart-product-meta">'+p.size+' · '+p.type+'</p><div class="cart-quantity"><button type="button" aria-label="'+(es?'Disminuir':'Decrease')+' '+p.name+'" data-qty="'+id+'" data-step="-1">−</button><span aria-label="'+(es?'Cantidad':'Quantity')+'">'+cart[id]+'</span><button type="button" aria-label="'+(es?'Aumentar':'Increase')+' '+p.name+'" data-qty="'+id+'" data-step="1">+</button><button type="button" class="cart-remove" data-remove="'+id+'">'+(es?'Eliminar':'Remove')+'</button></div></div><strong class="cart-item-total">'+money(p.price*cart[id])+'</strong></article>';
 }).join(''):'<div class="cart-empty"><p>'+ (es?'Tu carrito está vacío.':'Your cart is empty.')+'</p><a href="#shop" id="continueShopping">'+(es?'Explorar fragancias':'Explore fragrances')+' →</a></div>';
 $('#subtotal').textContent=money(total);
 const itemCount=document.querySelector('#cartItemCount');if(itemCount)itemCount.textContent=count+' '+(es?(count===1?'artículo':'artículos'):(count===1?'item':'items'));
 const label=document.querySelector('#cartShippingText');if(label)label.textContent=es?'Envío y cargos definitivos se confirman al pagar.':'Final shipping and charges are confirmed at checkout.';
 const assurance=document.querySelector('#cartAssurance');if(assurance)assurance.textContent=es?'Compra con confianza · Conoce nuestra promesa de autenticidad.':'Shop confidently · Learn about our authenticity promise.';
 const checkout=$('#checkout');checkout.disabled=!ids.length||!window.HUELE_CONFIG?.shopifyDomain||!window.HUELE_CONFIG?.storefrontAccessToken;
 const notice=document.querySelector('#checkoutMessage');if(notice)notice.textContent=checkout.disabled?(es?'Vista previa: pago disponible después de conectar Shopify y verificar el inventario.':'Preview only: checkout opens after Shopify and verified inventory are connected.'):'';
}
function openCart(){$('#cartDrawer').classList.add('open');$('#cartDrawer').setAttribute('aria-hidden','false');$('#overlay').hidden=false;$('#cartClose').focus()}
function closeCart(){$('#cartDrawer').classList.remove('open');$('#cartDrawer').setAttribute('aria-hidden','true');$('#overlay').hidden=true}
function details(id){
 const p=inventory.find(x=>x.id===id);if(!p)return;
 $('#modalContent').innerHTML='<div class="modal-details">'+visual(p)+'<div><p class="product-brand">'+p.brand+'</p><h2>'+p.name+'</h2><p>'+p.type+'</p><p class="catalog-availability">'+(language==='es'?'PRECIOS Y DISPONIBILIDAD PRÓXIMAMENTE':'PRICING AND AVAILABILITY TO BE CONFIRMED')+'</p><p>'+(language==='es'?'Fotografía de referencia del producto auténtico. La oferta estará disponible después de verificar inventario y precios.':'Reference photo of the real fragrance. Shopping will open after inventory and prices are verified.')+'</p><a class="btn gold" href="./product.html?id='+p.id+'">'+(language==='es'?'VER FRAGANCIA':'VIEW FRAGRANCE')+'</a></div></div>';
 $('#productModal').hidden=false;$('#modalClose').focus();
}
document.addEventListener('click',e=>{const a=e.target.closest('[data-add]'),d=e.target.closest('[data-detail]'),qty=e.target.closest('[data-qty]'),fav=e.target.closest('[data-favorite]');if(fav){const id=+fav.dataset.favorite;favorites=favorites.includes(id)?favorites.filter(n=>n!==id):[...favorites,id];localStorage.setItem('huele-favorites-top40',JSON.stringify(favorites));renderProducts();return}if(a){add(+a.dataset.add);$('#productModal').hidden=true}if(d&&!a)details(+d.dataset.detail);if(qty){cart[qty.dataset.qty]=Math.max(0,(cart[qty.dataset.qty]||0)+ +qty.dataset.step);persist()}});
document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.category;document.querySelectorAll('[data-category]').forEach(x=>x.classList.toggle('active',x===b));renderProducts()}));
document.querySelectorAll('[data-filter]').forEach(a=>a.addEventListener('click',()=>{category=a.dataset.filter;document.querySelectorAll('[data-category]').forEach(x=>x.classList.toggle('active',x.dataset.category===category));renderProducts()}));
$('#search').addEventListener('input',renderProducts);$('#sort').addEventListener('change',renderProducts);$('#searchToggle').addEventListener('click',()=>{$('#search').focus();location.hash='#shop'});$('#language').addEventListener('click',()=>{language=language==='en'?'es':'en';setLanguage()});$('#cartToggle').addEventListener('click',openCart);$('#cartClose').addEventListener('click',closeCart);$('#overlay').addEventListener('click',closeCart);$('#modalClose').addEventListener('click',()=>$('#productModal').hidden=true);$('#productModal').addEventListener('click',e=>{if(e.target.id==='productModal')$('#productModal').hidden=true});document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCart();$('#productModal').hidden=true}});
$('#checkout').addEventListener('click',async()=>{const btn=$('#checkout'),msg=$('#checkoutMessage');btn.disabled=true;try{const lines=Object.entries(cart).filter(([id,n])=>n>0).map(([id,n])=>({id,quantity:n}));if(!lines.length)throw Error(language==='es'?'Tu bolsa está vacía.':'Your cart is empty.');const total=lines.reduce((sum,x)=>sum+inventory.find(p=>p.id===+x.id).price*x.quantity,0);const url=await window.HueleCommerce.checkout(lines,inventory);window.HueleAnalytics?.track('begin_checkout',{currency:'USD',value:total,items:lines.map(x=>{const p=inventory.find(z=>z.id===+x.id);return {item_id:String(p.id),item_name:p.name,item_brand:p.brand,price:p.price,quantity:x.quantity}})});window.location.assign(url)}catch(err){msg.textContent=err.message}finally{btn.disabled=false}});
$('#newsletterForm').addEventListener('submit',async e=>{e.preventDefault();const email=$('#email').value.trim();if(!window.HUELE_CONFIG?.newsletterEndpoint){$('#newsletterStatus').textContent=language==='es'?'Registro aún no disponible. Próximamente.':'Sign-up integration not connected yet. Coming soon.';return}try{const r=await fetch(window.HUELE_CONFIG.newsletterEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,language,interests:[...document.querySelectorAll('#newsletterForm [name="interests"]:checked')].map(x=>x.value)})});if(!r.ok)throw Error();$('#newsletterStatus').textContent=language==='es'?'¡Gracias!':'Thanks for joining!';$('#newsletterForm').reset()}catch{$('#newsletterStatus').textContent=language==='es'?'No se pudo registrar. Inténtalo después.':'Could not sign up. Please try again later.'}});
$('#year').textContent=new Date().getFullYear();setLanguage();
function updateCartHeaderLabel(){const el=document.querySelector('#cartLabel');if(el)el.textContent=language==='es'?'CARRITO':'CART'}
updateCartHeaderLabel();document.querySelector('#language')?.addEventListener('click',()=>queueMicrotask(updateCartHeaderLabel));

// Occasion guide filters are editorial demo picks, not product endorsements.
document.querySelectorAll('[data-occasion]').forEach(el=>el.addEventListener('click',()=>{const occasion=el.dataset.occasion;category=occasion==='night'?'Men':occasion==='gift'?'Women':'All';document.querySelectorAll('[data-category]').forEach(x=>x.classList.toggle('active',x.dataset.category===category));renderProducts()}));

// Saved products are stored on this device until account features are connected.
const wishlistToggle=document.querySelector('#wishlistFilter');if(wishlistToggle)wishlistToggle.addEventListener('click',()=>{savedOnly=!savedOnly;wishlistToggle.setAttribute('aria-pressed',String(savedOnly));wishlistToggle.classList.toggle('active',savedOnly);renderProducts()});

// Keep FAQ questions synchronized with the storefront language switch.
function translateHomepageFAQ(){const lang=document.documentElement.lang==='es'?'es':'en';document.querySelectorAll('[data-faq-en]').forEach(el=>{el.textContent=el.getAttribute('data-faq-'+lang)})}
const faqLanguageObserver=new MutationObserver(translateHomepageFAQ);faqLanguageObserver.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});translateHomepageFAQ();

// Enhanced catalog discovery and accessible reset controls.
const brands=[...new Set(inventory.map(p=>p.brand))].sort();const brandSelect=document.querySelector('#brandFilter');if(brandSelect){brands.forEach(b=>{const o=document.createElement('option');o.value=b;o.textContent=b;brandSelect.append(o)});brandSelect.addEventListener('change',e=>{brandFilter=e.target.value;renderProducts()})}
const familySelect=document.querySelector('#familyFilter');if(familySelect)familySelect.addEventListener('change',e=>{familyFilter=e.target.value;renderProducts()});
const budgetSelect=document.querySelector('#budgetFilter');if(budgetSelect)budgetSelect.addEventListener('change',e=>{budgetFilter=e.target.value;renderProducts()});
function clearDiscovery(){familyFilter='';brandFilter='';budgetFilter='all';category='All';savedOnly=false;[familySelect,brandSelect].forEach(el=>{if(el)el.value=''});if(budgetSelect)budgetSelect.value='all';document.querySelector('#search').value='';document.querySelectorAll('[data-category]').forEach(el=>el.classList.toggle('active',el.dataset.category==='All'));const w=document.querySelector('#wishlistFilter');if(w)w.setAttribute('aria-pressed','false');renderProducts()}
document.querySelector('#clearDiscovery')?.addEventListener('click',clearDiscovery);
document.querySelectorAll('[data-scent]').forEach(b=>b.addEventListener('click',()=>{familyFilter=b.dataset.scent;if(familySelect)familySelect.value=familyFilter;location.hash='shop';renderProducts()}));


/* Shopping-experience enhancements: no invented product photos, inventory or reviews. */
(function(){
  const tr=(en,es)=>document.documentElement.lang==='es'?es:en;
  const imageSrc=id=>'./assets/products/'+id+'.webp';
  // Empty/missing image slots are intentional until licensed product photography is uploaded.
  const originalVisual=visual;
  visual=function(p){
    const fallback=originalVisual(p);
    return '<div class="image-ready-wrap"><img class="real-product-photo" src="'+imageSrc(p.id)+'" alt="'+p.brand+' '+p.name+'" loading="lazy" onload="this.classList.add(\'photo-ready\');this.nextElementSibling.hidden=true" onerror="this.remove()"><div class="photo-fallback">'+fallback+'</div></div>';
  };
  const originalRender=renderProducts;
  renderProducts=function(){
    originalRender();
    document.querySelectorAll('#products .product').forEach(card=>{
      const name=card.querySelector('.product-title')?.textContent||'';
      const p=inventory.find(x=>name.includes(x.name));
      if(!p)return;
      const container=card.querySelector('.product-copy')||card;
      if(!card.querySelector('.product-card-benefit')){
        const info=document.createElement('div');info.className='product-card-benefit';
        info.textContent=tr('Explore scent notes · Authenticity promise','Explora las notas · Garantía de autenticidad');
        container.append(info);
      }
    });
  };
  const mobileNav=document.querySelector('.header nav');
  if(mobileNav){
    mobileNav.id='primaryNavigation';
    const button=document.createElement('button');button.type='button';button.id='mobileMenuToggle';button.className='mobile-menu-toggle';button.setAttribute('aria-controls','primaryNavigation');button.setAttribute('aria-expanded','false');button.textContent=tr('☰ Menu','☰ Menú');
    mobileNav.before(button);
    button.addEventListener('click',()=>{const open=mobileNav.classList.toggle('menu-open');button.setAttribute('aria-expanded',String(open));});
    mobileNav.addEventListener('click',e=>{if(e.target.closest('a')){mobileNav.classList.remove('menu-open');button.setAttribute('aria-expanded','false');}});
  }
  const shop=document.querySelector('#shop');
  const toolbar=shop?.querySelector('.toolbar');
  const discovery=document.querySelector('.discovery-bar');
  if(shop&&toolbar&&discovery){
    const toggle=document.createElement('button');toggle.type='button';toggle.className='mobile-filter-toggle';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-controls','mobileFilters');toggle.textContent=tr('Filter & sort ▾','Filtrar y ordenar ▾');
    toolbar.before(toggle);
    const panel=document.createElement('div');panel.id='mobileFilters';panel.className='mobile-filter-panel';
    toolbar.parentNode.insertBefore(panel,toolbar);
    panel.append(toolbar,discovery);
    toggle.addEventListener('click',()=>{const open=panel.classList.toggle('filters-open');toggle.setAttribute('aria-expanded',String(open));});
  }
  // Occasion collections: match fragrance profiles instead of stereotyping by gender.
  const occasions={day:['Fresh','Marine','Citrus'],night:['Amber','Vanilla','Woody','Spicy'],gift:[]};
  document.querySelectorAll('[data-occasion]').forEach(a=>{
    a.addEventListener('click',()=>{const tags=occasions[a.dataset.occasion]||[];category='All';familyFilter='';brandFilter='';budgetFilter='all';savedOnly=false;
      document.querySelectorAll('[data-category]').forEach(b=>b.classList.toggle('active',b.dataset.category==='All'));
      if(tags.length){const key=tags[0];familyFilter=key==='Marine'||key==='Citrus'?'Fresh':key==='Vanilla'||key==='Spicy'?'Amber':key;document.querySelector('#familyFilter').value=familyFilter;}
      else {document.querySelector('#familyFilter').value='';}
      renderProducts();
    });
  });
  const finder=document.querySelector('#finder');
  if(finder&&!document.querySelector('#fragranceQuiz')){
    const quiz=document.createElement('section');quiz.id='fragranceQuiz';quiz.className='fragrance-quiz';
    quiz.innerHTML='<p class="eyebrow">'+tr('PERSONAL SCENT FINDER','BUSCADOR PERSONAL')+'</p><h3>'+tr('Not sure where to start?','¿No sabes por dónde empezar?')+'</h3><p>'+tr('Choose the mood you want. We’ll show matching examples.','Elige tu estilo. Te mostraremos ejemplos afines.')+'</p><div class="quiz-options"><button type="button" data-quiz="Fresh">'+tr('Clean & fresh','Limpia y fresca')+'</button><button type="button" data-quiz="Floral">'+tr('Soft & floral','Suave y floral')+'</button><button type="button" data-quiz="Woody">'+tr('Warm & woody','Cálida y amaderada')+'</button><button type="button" data-quiz="Amber">'+tr('Bold & evening','Intensa y nocturna')+'</button></div>';
    finder.after(quiz);
    quiz.addEventListener('click',e=>{const b=e.target.closest('[data-quiz]');if(!b)return;familyFilter=b.dataset.quiz;document.querySelector('#familyFilter').value=familyFilter;category='All';document.querySelectorAll('[data-category]').forEach(x=>x.classList.toggle('active',x.dataset.category==='All'));renderProducts();location.hash='shop';});
  }
  // Re-render once to apply image-ready presentation; handle missing images safely.
  renderProducts();
})();

// Cart: removal, continue shopping and language synchronization.
document.addEventListener('click',e=>{const remove=e.target.closest('[data-remove]');if(remove){delete cart[remove.dataset.remove];persist();}if(e.target.closest('#continueShopping'))closeCart();});
