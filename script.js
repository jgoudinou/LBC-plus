function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

tag=document.getElementsByTagName('h2');
annonce_id=document.location.href.replace(/.*?\/(\d+)\.htm.*/gi,"$1");
dd=dp=null;
for (i in tag) if(dd==null && (tag[i].innerHTML=="Description" || tag[i].innerHTML=="Critères")) { dp=dd=tag[i].parentNode; }
while(dp.tagName!="ARTICLE") {console.log(dp.tagName); dp=dp.parentNode; console.log(dp.tagName);}
d=document.createElement('div');
dt=document.createElement('div');
/* textarea */
ta=document.createElement('textarea');
ta.setAttribute("row","10");
ta.setAttribute("oninput","javascript:localStorage.setItem('cmt_'+annonce_id, this.value);");
ta.setAttribute("style","font-family: Open Sans,sans-serif,Arial; -webkit-text-size-adjust: 100%; font-size: 1.2em; margin-left: 1.6rem; margin-right: 1.6rem; padding-bottom: 2.4rem; padding-top: 0px; width: 95%; height: 300px;");
if((v=localStorage.getItem('cmt_'+annonce_id)) !==null)
  ta.innerHTML=v;
else
  ta.innerHTML="Mes notes :\n\nLes + :\n\nLes - :\n\n";

dt.setAttribute("style","font-family: Open Sans,sans-serif,Arial; -webkit-text-size-adjust: 100%; font-size: 1.3em; color: #1a1a1a; line-height: 1.5; box-sizing: inherit; border-top: none; border-right: none; border-left: none; border-image: initial; border-bottom: 0.1rem solid rgb(202, 209, 217); margin-left: 1.6rem; margin-right: 1.6rem; padding-bottom: 2.4rem; padding-top: 0px;");
d.setAttribute('id','ext_comment');
d.appendChild(ta);
insertAfter(dp.firstChild,d);
insertAfter(dp.firstChild,dt);






