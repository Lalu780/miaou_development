"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[655],{196:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var jquery_min=__webpack_require__(7009)
;var jquery_min_default=__webpack_require__.n(jquery_min);var index_es=__webpack_require__(7729);var swiper_esm=__webpack_require__(8627);
/*!
 * jQuery section filter function
 * Filters elements by Shopify section ID.
 * If the section ID is undefined, all sections are selected
 */
const checkShopifyEvent=function(evt){var ref,ref1,ref2;return Boolean(null===(ref=evt)||void 0===ref?void 0:null===(ref1=ref.originalEvent)||void 0===ref1?void 0:null===(ref2=ref1.detail)||void 0===ref2?void 0:ref2.sectionId)}
;const filterSections=function filterSections(shopifyEvent){const sectionId=checkShopifyEvent(shopifyEvent)?shopifyEvent.originalEvent.detail.sectionId:"";return function(_,element){
return!sectionId?true:element.getAttribute("id")==="shopify-section-"+sectionId?true:element.getAttribute("data-section-id")===sectionId}};const NAMESPACE=".slideshow";const HTMLElementWithSwiper=(0,index_es.type)({swiper:(0,
index_es.optional)((0,index_es.instance)(swiper_esm["default"]))});const init=async function(){const unload=function(shopifyEvent){const sections=jquery_min_default()(".js-slideshow").filter(filterSections(shopifyEvent))
;sections.each((function(_,sElement){const section=jquery_min_default()(sElement);section.off(NAMESPACE);const{swiper:swiper}=HTMLElementWithSwiper.create(sElement);if(swiper)swiper.destroy()}))};const load=function(shopifyEvent){
const sections=jquery_min_default()(".js-slideshow").filter(filterSections(shopifyEvent));sections.each((function(_,sElement){const section=jquery_min_default()(sElement)
;section.find(".js-slideshow-svg-image").each((function(__,svgElement){svgElement.setAttribute("preserveAspectRatio","xMidYMid slice")}));const slideshowContainer=section.find(".swiper-container").first()
;const slideCount=parseInt(slideshowContainer.attr("data-item-count")||"0",10);const slideshowContainerElement=slideshowContainer.get(0);if(!slideshowContainerElement||slideCount<1)return
;const swiper=new swiper_esm["default"](slideshowContainerElement,{autoHeight:true,direction:"horizontal",init:false,loop:true,modules:[swiper_esm.Navigation]});section.on("click"+NAMESPACE,".js-slideshow-arrow",(function(evt){
const action=jquery_min_default()(evt.currentTarget).attr("data-action");const swiperAction="prev"===action?"slidePrev":"slideNext";swiper[swiperAction]()}));section.on("change"+NAMESPACE,".js-slideshow-dot",(function(evt){
const nextSlideIndex=parseInt(jquery_min_default()(evt.currentTarget).attr("data-slide-index")||"0",10);if(Number.isNaN(nextSlideIndex))return;swiper.slideToLoop(nextSlideIndex)}))
;swiper.on("realIndexChange",(function highlightPaginationDot(sw){section.find(`.js-slideshow-dot[data-slide-index="${sw.realIndex}"]`).prop("checked",true)}));swiper.init()}))}
;jquery_min_default()(document).on("shopify:section:unload",unload);jquery_min_default()(document).on("shopify:section:load",load);load()};const sizes_init=async function(){
const sizeTitles=document.querySelectorAll(".flex.items-center.justify-between.cursor-pointer");sizeTitles.forEach((function(title){var ref;const table=null===(ref=title.parentNode)||void 0===ref?void 0:ref.querySelector(".size-accordion")
;const plus=title.querySelector("h6:nth-child(2)");null===table||void 0===table?void 0:table.classList.toggle("hide-table");title.addEventListener("click",(function(){null===table||void 0===table?void 0:table.classList.toggle("hide-table")
;if("-"===(null===plus||void 0===plus?void 0:plus.textContent))plus.textContent="+";else if("+"===(null===plus||void 0===plus?void 0:plus.textContent))plus.textContent="-"}))}))};var includes=__webpack_require__(649)
;var includes_default=__webpack_require__.n(includes);const table_switcher_init=async function(){const switcher=jquery_min_default()(".js-table-switcher");const table=jquery_min_default()(".js-table-switcher-target")
;const applyFilter=$select=>{const value=$select.value;table.find("tr").each(((_,tr)=>{const firstRowText=jquery_min_default()(tr).find("td:first-child").text()
;if(includes_default()(firstRowText).call(firstRowText,value))tr.classList.remove("hide-table");else if(includes_default()(firstRowText).call(firstRowText,"("))tr.classList.add("hide-table")}))};switcher.each(((_,$item)=>{
$item.addEventListener("change",(()=>applyFilter($item)));applyFilter($item)}))};const logErrors=function(err){console.error(err)};init().catch(logErrors);sizes_init().catch(logErrors);table_switcher_init().catch(logErrors)}
},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[351],(()=>__webpack_exec__(196)));var __webpack_exports__=__webpack_require__.O()}]);