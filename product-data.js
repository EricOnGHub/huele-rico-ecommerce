/* One preview catalog across the homepage, Top 40 and product detail pages.
   No price, stock or product-size claims until supplier inventory is verified. */
window.HUELE_PRODUCTS=(window.HUELE_TRENDS||[]).map((p,i)=>({
 id:i+1,brand:p.brand,name:p.name,slug:p.slug,rank:p.rank,
 type:p.category==='men'?'Men':'Women',
 size:'Details pending',notes:'Fragrance details to be verified',
 price:0,retail:0
}));
