const app=document.querySelector('#app');
const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#main-nav');
const searchButton=document.querySelector('.search-toggle');
const searchPanel=document.querySelector('#search-panel');
const searchInput=document.querySelector('#site-search');
const searchResults=document.querySelector('#search-results');
const searchClose=document.querySelector('.search-close');

function currentRoute(){
  const part=(location.hash||'#home').slice(1).split('/')[0];
  return pages[part]?part:'home';
}

function renderAwardPath(){
  const select=document.querySelector('#award-path');
  const result=document.querySelector('#award-path-result');
  if(!select||!result)return;
  const draw=()=>{
    const item=awardPaths[select.value];
    result.innerHTML=`<span class="label">${item.title}</span><h3>${item.body}</h3><ul>${item.items.map(x=>`<li>${x}</li>`).join('')}</ul>`;
  };
  select.addEventListener('change',draw);
  draw();
}

function renderForms(){
  const input=document.querySelector('#form-search');
  const category=document.querySelector('#form-category');
  const list=document.querySelector('#form-list');
  if(!input||!category||!list)return;
  const draw=()=>{
    const q=input.value.trim().toLowerCase();
    const items=forms.filter(f=>(!category.value||f.category===category.value)&&(!q||[f.code,f.title,f.purpose].join(' ').toLowerCase().includes(q)));
    list.innerHTML=items.length?items.map(f=>`<article class="form-card"><div class="form-code">${f.code}</div><div><h3>${f.title}</h3><p>${f.purpose}</p></div><div class="form-actions"><a class="button outline" href="${f.url}" target="_blank" rel="noopener">直接開啟PDF表格</a></div></article>`).join(''):'<div class="empty-state">找不到符合條件的表格。</div>';
  };
  input.addEventListener('input',draw);
  category.addEventListener('change',draw);
  draw();
}

function enableFoldSections(route){
  const foldRoutes=new Set(['join','awards','scout-path','leaders','support']);
  if(!foldRoutes.has(route))return;
  document.querySelectorAll('.page-shell > .content-section').forEach((section,index)=>{
    const heading=Array.from(section.children).find(child=>child.tagName==='H2');
    if(!heading)return;
    const details=document.createElement('details');
    details.className='fold-section';
    details.open=index===0;
    if(section.id){details.id=section.id;section.removeAttribute('id')}
    const summary=document.createElement('summary');
    summary.textContent=heading.textContent;
    heading.remove();
    const body=document.createElement('div');
    body.className='fold-body';
    while(section.firstChild)body.appendChild(section.firstChild);
    details.append(summary,body);
    section.replaceWith(details);
  });
}

function render(){
  const route=currentRoute();
  app.innerHTML=pages[route]();
  document.querySelectorAll('#main-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${route}`));
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
  renderAwardPath();
  renderForms();
  enableFoldSections(route);
  document.querySelector('.print-button')?.addEventListener('click',()=>window.print());
  const anchor=(location.hash||'').slice(1).split('/')[1];
  requestAnimationFrame(()=>{
    if(anchor){const target=document.getElementById(anchor);if(target instanceof HTMLDetailsElement)target.open=true;target?.scrollIntoView({behavior:'smooth'})}
    else window.scrollTo({top:0});
    app.focus({preventScroll:true});
  });
}

function plainText(html){
  const box=document.createElement('div');
  box.innerHTML=html;
  return box.textContent.replace(/\s+/g,' ').trim();
}

function runSearch(){
  const q=searchInput.value.trim().toLowerCase();
  if(!q){
    searchResults.innerHTML='<p class="muted">輸入關鍵字後，搜尋結果會在此顯示。</p>';
    return;
  }
  const pageMatches=Object.entries(pages).map(([route,make])=>({route,text:plainText(make())})).filter(x=>x.text.toLowerCase().includes(q)).map(x=>{
    const pos=x.text.toLowerCase().indexOf(q);
    return {href:`#${x.route}`,title:x.text.slice(0,42),snippet:x.text.slice(Math.max(0,pos-35),pos+100)};
  });
  const formMatches=forms.filter(f=>[f.code,f.title,f.purpose].join(' ').toLowerCase().includes(q)).map(f=>({href:'#support',title:`${f.code} ${f.title}`,snippet:f.purpose}));
  const matches=[...formMatches,...pageMatches].slice(0,10);
  searchResults.innerHTML=matches.length?matches.map(x=>`<a class="search-result" href="${x.href}"><strong>${x.title}</strong><span>${x.snippet}</span></a>`).join(''):'<div class="empty-state">找不到符合的內容。</div>';
}

function openSearch(){
  searchPanel.hidden=false;
  searchButton.setAttribute('aria-expanded','true');
  searchInput.focus();
  runSearch();
}
function closeSearch(){
  searchPanel.hidden=true;
  searchButton.setAttribute('aria-expanded','false');
  searchButton.focus();
}

menuButton.addEventListener('click',()=>{
  const open=menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
menu.addEventListener('click',()=>{
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
});
searchButton.addEventListener('click',()=>searchPanel.hidden?openSearch():closeSearch());
searchClose.addEventListener('click',closeSearch);
searchInput.addEventListener('input',runSearch);
searchResults.addEventListener('click',closeSearch);
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!searchPanel.hidden)closeSearch();});
window.addEventListener('hashchange',render);
render();
