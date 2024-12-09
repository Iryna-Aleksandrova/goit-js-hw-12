import{a as A,i as w,S as b}from"./assets/vendor-DEenWwFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function E(e,o,n=15){if(!e)throw new Error("Search query cannot be empty.");const i="47428145-66711742d009cc5b9838094e7",t="https://pixabay.com/api/",r={key:i,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:n};return(await A.get(t,{params:r})).data}function S(e){return e.map(({largeImageURL:o,webformatURL:n,tags:i,likes:t,views:r,comments:a,downloads:h})=>`<li class="img-item">
          <a class="gallery-link" href="${o}">
          <img 
              class="gallery-image" 
              src=${n} 
              alt="${i}" width=360 height=152
              />
      </a>
          <ul class="list-text">
            <li class="item-text">
              <h2 class="title-img">Likes</h2>
              <p class="text-info">${t}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Views</h2>
              <p class="text-info">${r}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Comments</h2>
              <p class="text-info">${a}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Downloads</h2>
              <p class="text-info">${h}</p>
            </li>
          </ul>
        </li>`).join("")}const x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBrVVbDoJADCwEwq83kaN4I+UkHgGP4mH4YTGslFBB2e0UYZImG9rO7KMtRBG0bXd1rvMW49gYTxYjTxK6eU+PNKUnKeh7Kjl2yKGiyCtCmHf+upMRHItO8je5WWQPORQ5gjwqopE7586YcB3zJTIt6kBiiR5ONtc0TRnw1ewbBbouTMLfYyJCjnJVgZgIIl/mZQSQ53k1BPNybCYGNxYb+1A+FPgVEQELOSMlI4aREFwjmE4gs4lt+mSePVBgSS7XsnwTKKJVg1YtWgkv/bDRLKWoNpoEDYShUVESQChGRsVnc5rIVqzIBUeIRMmPEIHke0Q08lUfyFjwPuE6P1l++kT+smV8jJhPgk27ljfw3ToafivEMQAAAABJRU5ErkJggg==",y=document.querySelector(".form-search"),p=document.querySelector(".gallery"),c=document.querySelector(".loader"),s=document.querySelector(".load-more");c.style.display="none";s.style.display="none";let g="",u=1;const d=15;let m;y.addEventListener("submit",B);s.addEventListener("click",P);async function B(e){if(e.preventDefault(),c.style.display="block",p.innerHTML="",s.style.display="none",g=e.target.elements.text.value.trim(),!g){l("Please write a query for search");return}u=1,await f()}async function P(){u+=1,await f()}async function f(){c.style.display="block";try{const e=await E(g,u,d);if(e.totalHits===0){l("Sorry, there are no images matching your search query. Please try again!"),s.style.display="none";return}I(e.hits),R(),u*d>=e.totalHits?(s.style.display="none",l("We're sorry, but you've reached the end of search results.")):s.style.display="block",y.reset()}catch{l("An unexpected error occurred. Please try again later."),s.style.display="none"}finally{c.style.display="none"}}function l(e){w.error({iconUrl:x,position:"topRight",backgroundColor:"#EF4040",iconColor:"#FAFAFB",imageWidth:24,messageColor:"#FAFAFB",message:e})}function I(e){const o=S(e);p.insertAdjacentHTML("beforeend",o),L()}function L(){m?m.refresh():m=new b(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animationSpeed:250,className:"simpl-lightbox"})}function R(){const{height:e}=p.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
