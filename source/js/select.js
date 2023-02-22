/*
Custom Select
template from https://www.w3schools.com/howto/howto_custom_select.asp
*/

var i, j, custom, customLength, selectTag, selectTagLength, main, mainText, itemsContainer, itemElement;
/* Look for any elements with the class 'select': */
custom = document.getElementsByClassName('select');
customLength = custom.length;
for (i = 0; i < customLength; i++) {
  selectTag = custom[i].getElementsByTagName('select')[0];
  selectTag.classList.add('visually-hidden');
  selectTagLength = selectTag.length;
  /* For each element, create a new DIV that will act as the selected item: */
  main = document.createElement('DIV');
  main.setAttribute('class', 'select__main');
  mainText = document.createElement('DIV');
  mainText.setAttribute('class', 'select__main-text');
  mainText.innerHTML = selectTag.options[selectTag.selectedIndex].innerHTML;
  main.appendChild(mainText);
  custom[i].appendChild(main);
  /* For each element, create a new DIV that will contain the option list: */
  itemsContainer = document.createElement('DIV');
  itemsContainer.setAttribute('class', 'select__items select__items--hide');
  for (j = 0; j < selectTagLength; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    itemElement = document.createElement('DIV');
    itemElement.innerHTML = selectTag.options[j].innerHTML;

    itemElement.addEventListener('click', function () {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var i, j, selectTag, selectTagLength, main, mainText, same, sameLength;
      selectTag = this.parentNode.parentNode.getElementsByTagName('select')[0];
      selectTagLength = selectTag.length;
      main = this.parentNode.previousSibling;
      mainText = main.querySelector('.select__main-text');
      for (i = 0; i < selectTagLength; i++) {
        if (selectTag.options[i].innerHTML == this.innerHTML) {
          selectTag.selectedIndex = i;
          mainText.innerHTML = this.innerHTML;
          same = this.parentNode.getElementsByClassName('select__same');
          sameLength = same.length;
          for (j = 0; j < sameLength; j++) {
            same[j].removeAttribute('class');
          }
          this.setAttribute('class', 'select__same');
          break;
        }
      }
      main.click();
    });
    itemsContainer.appendChild(itemElement);
  }
  custom[i].appendChild(itemsContainer);

  main.addEventListener('click', function (event) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    event.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select__items--hide');
    this.classList.toggle('select__main--active');
    selectTag.focus();
    main.classList.add('select__main--focus')
  });


  /* Focus Events */
  selectTag.addEventListener('change', function () {
    mainText.innerHTML = selectTag.options[selectTag.selectedIndex].innerHTML;
    for (const item of itemsContainer.children) {
      item.removeAttribute('class', 'select__same');
      if (mainText.innerHTML === item.innerHTML) {
        item.setAttribute('class', 'select__same');
      }
    }
  });
  selectTag.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      main.click();
    }
  });
  selectTag.addEventListener('focus', function () {
    main.classList.add('select__main--focus');
  });

  let isMouseOver = false;
  let mouseOverItems = [main, itemsContainer];

  mouseOverItems.forEach((item) => {
    item.addEventListener('mouseover', function () {
      isMouseOver = true;
    });
    item.addEventListener('mouseout', function () {
      isMouseOver = false;
    });
  })
  selectTag.addEventListener('focusout', function () {
    main.classList.remove('select__main--focus');
    if (!isMouseOver) {
      main.classList.remove('select__main--active');
      itemsContainer.classList.add('select__items--hide');
    }
  });
}

function closeAllSelect(element) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var i, main, mainLength, itemsContainer, itemsContainerLength, arrNo = [];
  main = document.getElementsByClassName('select__main');
  mainLength = main.length;
  itemsContainer = document.getElementsByClassName('select__items');
  itemsContainerLength = itemsContainer.length;
  for (i = 0; i < mainLength; i++) {
    if (element == main[i]) {
      arrNo.push(i)
    } else {
      main[i].classList.remove('select__main--active');
    }
  }
  for (i = 0; i < itemsContainerLength; i++) {
    if (arrNo.indexOf(i)) {
      itemsContainer[i].classList.add('select__items--hide');
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener('click', function () { closeAllSelect(); });
