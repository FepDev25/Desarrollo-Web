function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre_festival");document.addEventListener("scroll",(()=>{t.getBoundingClientRect().bottom<1?e.classList.add("fixed"):e.classList.remove("fixed")}))}function crearGaleria(){const e=document.querySelector(".galeria_imagenes");for(let t=1;t<=16;t++){const c=document.createElement("IMG");c.src="src/img/gallery/full/"+t+".jpg",c.innerHTML=`\n        <source srcset="build/img/gallery/full/${t}.avif" type="image/avif">\n        <source srcset="build/img/gallery/full/${t}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${t}.jpg" alt="imagen galeria">\n        `,c.onclick=function(){mostrarImagen(t)},e.appendChild(c)}}function mostrarImagen(e){const t=document.createElement("IMG");t.loading="lazy",t.width="300",t.height="200",t.src="src/img/gallery/thumb/"+e+".jpg",t.alt="Imagen de galeria";const c=document.createElement("DIV");c.classList.add("modal"),c.onclick=cerrarModal;const n=document.createElement("button");n.textContent="X",n.classList.add("btn_cerrar"),n.onclick=cerrarModal,c.appendChild(t),c.appendChild(n);const a=document.querySelector("body");a.classList.add("overflow_hidden"),a.appendChild(c)}function cerrarModal(){const e=document.querySelector(".modal");e.classList.add("fade_out"),setTimeout((()=>{e?.remove();document.querySelector("body").classList.remove("overflow_hidden")}),500)}function resaltarEnlace(){document.addEventListener("scroll",(()=>{const e=document.querySelectorAll("section"),t=document.querySelectorAll(".nevegacion_principal a");let c="";e.forEach((e=>{const t=e.offsetTop,n=e.clientHeight;window.scrollY>=t-n/3&&(c=e.id)})),t.forEach((e=>{e.classList.remove("active"),e.getAttribute("href")==="#"+c&&e.classList.add("active")}))}))}function scrollNav(){document.querySelectorAll(".nevegacion_principal a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}))}document.addEventListener("DOMContentLoaded",(function(){navegacionFija(),crearGaleria(),resaltarEnlace(),scrollNav()}));