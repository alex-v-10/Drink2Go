/* Activate Menu */

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.navigation__menu-button');

menu.classList.remove('menu--active');
menuButton.classList.remove('navigation__menu-button--active');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  menuButton.classList.toggle('navigation__menu-button--active');
});

/* Promo Slider */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*
Custom Select
template from https://www.w3schools.com/howto/howto_custom_select.asp
*/

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "select": */
x = document.getElementsByClassName("select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select__selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select__items select__items--hide");
  for (j = 0; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;

    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("select__same");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "select__same");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);

  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select__items--hide");
    this.classList.toggle("select__selected--active");
  });


  /* Focus Events */
  selElmnt.addEventListener("change", function () {
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    for (let item of b.children) {
      item.removeAttribute("class", "select__same");
      if (a.innerHTML === item.innerHTML) {
        item.setAttribute("class", "select__same");
      }
    }
  });

  selElmnt.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      a.classList.toggle("select__selected--active");
    }
  });

  selElmnt.addEventListener("focus", function () {
    a.classList.add("select__selected--focus");
  });

  selElmnt.addEventListener("focusout", function () {
    a.classList.remove("select__selected--focus");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select__items");
  y = document.getElementsByClassName("select__selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select__selected--active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select__items--hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
