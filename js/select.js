var i,j,custom,customLength,selectTag,selectTagLength,main,mainText,itemsContainer,itemElement;for(customLength=(custom=document.getElementsByClassName("select")).length,i=0;i<customLength;i++){for((selectTag=custom[i].getElementsByTagName("select")[0]).classList.add("visually-hidden"),selectTagLength=selectTag.length,(main=document.createElement("DIV")).setAttribute("class","select__main"),(mainText=document.createElement("DIV")).setAttribute("class","select__main-text"),mainText.innerHTML=selectTag.options[selectTag.selectedIndex].innerHTML,main.appendChild(mainText),custom[i].appendChild(main),(itemsContainer=document.createElement("DIV")).setAttribute("class","select__items select__items--hide"),j=0;j<selectTagLength;j++)(itemElement=document.createElement("DIV")).innerHTML=selectTag.options[j].innerHTML,itemElement.addEventListener("click",(function(){var e,t,s,n,i,a,c,l;for(n=(s=this.parentNode.parentNode.getElementsByTagName("select")[0]).length,a=(i=this.parentNode.previousSibling).querySelector(".select__main-text"),e=0;e<n;e++)if(s.options[e].innerHTML==this.innerHTML){for(s.selectedIndex=e,a.innerHTML=this.innerHTML,l=(c=this.parentNode.getElementsByClassName("select__same")).length,t=0;t<l;t++)c[t].removeAttribute("class");this.setAttribute("class","select__same");break}i.click()})),itemsContainer.appendChild(itemElement);custom[i].appendChild(itemsContainer),main.addEventListener("click",(function(e){e.stopPropagation(),closeAllSelect(this),this.nextSibling.classList.toggle("select__items--hide"),this.classList.toggle("select__main--active"),selectTag.focus(),main.classList.add("select__main--focus")})),selectTag.addEventListener("change",(function(){mainText.innerHTML=selectTag.options[selectTag.selectedIndex].innerHTML;for(const e of itemsContainer.children)e.removeAttribute("class","select__same"),mainText.innerHTML===e.innerHTML&&e.setAttribute("class","select__same")})),selectTag.addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),main.click())})),selectTag.addEventListener("focus",(function(){main.classList.add("select__main--focus")}));let e=!1;[main,itemsContainer].forEach((t=>{t.addEventListener("mouseover",(function(){e=!0})),t.addEventListener("mouseout",(function(){e=!1}))})),selectTag.addEventListener("focusout",(function(){main.classList.remove("select__main--focus"),e||(main.classList.remove("select__main--active"),itemsContainer.classList.add("select__items--hide"))}))}function closeAllSelect(e){var t,s,n,i,a,c=[];for(n=(s=document.getElementsByClassName("select__main")).length,a=(i=document.getElementsByClassName("select__items")).length,t=0;t<n;t++)e==s[t]?c.push(t):s[t].classList.remove("select__main--active");for(t=0;t<a;t++)c.indexOf(t)&&i[t].classList.add("select__items--hide")}document.addEventListener("click",(function(){closeAllSelect()}));