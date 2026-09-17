const viewer=document.querySelector('.menu-viewer');
const picture=document.querySelector('#viewer-image');
const canvas=document.querySelector('.viewer-canvas');
const zoomIn=document.querySelector('#zoom-in'),zoomOut=document.querySelector('#zoom-out');
let zoom=2,baseWidth=210,opener;
function renderZoom(){picture.style.width=`${baseWidth*zoom}px`;document.querySelector('#zoom-level').textContent=`${Math.round(zoom*100)}%`;zoomOut.disabled=zoom<=1;zoomIn.disabled=zoom>=4;}
document.querySelectorAll('.menu-zoom-link').forEach(link=>link.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();opener=link;const original=link.querySelector('img');picture.src=original.src;picture.alt=original.alt;baseWidth=Number(original.getAttribute('width'));document.querySelector('#viewer-title').textContent=link.dataset.title;zoom=2;renderZoom();viewer.showModal();document.body.style.overflow='hidden';canvas.scrollTop=0;canvas.scrollLeft=0;}));
zoomIn.addEventListener('click',()=>{zoom=Math.min(4,zoom+.5);renderZoom();});
zoomOut.addEventListener('click',()=>{zoom=Math.max(1,zoom-.5);renderZoom();});
document.querySelector('#close-viewer').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close();});
viewer.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();});
