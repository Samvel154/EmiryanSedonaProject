/* Открыть/закрыть модальное окно по кнопкам и закрытие так же по окну*/

document.querySelector('.button-header-nav').onclick = function(openModal) {
  openModal.preventDefault();
  document.querySelector('.modal').style.display = "flex";
}

document.querySelector('.closed-modal').onclick = function() {
  document.querySelector('.modal').style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.querySelector('.modal')) {
    document.querySelector('.modal').style.display = "none";
  }
}

/*Обработка событий увеличения/уменьшения кол-ва гостей c учетом суммарного кол-ва не более 10*/

document.querySelectorAll('.larger-button').forEach(function(largerButton) {
  largerButton.onclick = function () {
    var inputField = this.parentElement.querySelector('.count-field');
    var currentValue = parseInt(inputField.value);
    var totalAdults = getAdultsTotal();
    var totalChildren = getChildrenTotal();

    if (inputField.name === 'count-adt' && currentValue < 10 && totalAdults + totalChildren < 10) {
      inputField.value = currentValue + 1;
    } else if (inputField.name === 'count-chd' && currentValue < 10 && totalAdults + totalChildren < 10) {
      inputField.value = currentValue + 1;
    }
  };
});

document.querySelectorAll('.less-button').forEach(function(lessButton) {
  lessButton.onclick = function() {
    var inputField = this.parentElement.querySelector('.count-field');
    var currentValue = parseInt(inputField.value);
    if (currentValue > 0) {
      inputField.value = currentValue - 1;
    }
  };
});

function getAdultsTotal() {
  return parseInt(document.querySelector('input[name="count-adt"]').value);
}

function getChildrenTotal() {
  return parseInt(document.querySelector('input[name="count-chd"]').value);
}
