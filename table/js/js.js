const btnLegsWhite = document.querySelector('.legs-check--one'),
    btnLegsGrey = document.querySelector('.legs-check--two'),
    btnLegsBlack = document.querySelector('.legs-check--three'),
    btnTableWhite = document.querySelector('.table-check--one'),
    btnTableGrey = document.querySelector('.table-check--two'),
    btnTableBrown = document.querySelector('.table-check--three'),
    btnTableBall = document.querySelector('.table-check--four'),
    btnTableBuble = document.querySelector('.table-check--five'),
    resultOne = document.querySelector('#resultOne'),
    resultTwo = document.querySelector('#resultTwo'),
    checkOne = document.querySelector('.form_checkbox--one'),
    checkTwo = document.querySelector('.form_checkbox--two'),
    tableCheckOne = document.querySelector('.table-check--one'),
    tableCheckTwo = document.querySelector('.table-check--two'),
    tableCheckThree = document.querySelector('.table-check--three'),
    tableCheckFour = document.querySelector('.table-check--four'),
    tableCheckFive = document.querySelector('.table-check--five'),
    tableImageBuble = document.querySelector('.table-img--buble'),
    tableImageBall = document.querySelector('.table-img--ball'),
    tableImageWhite = document.querySelector('.table-img--white'),
    tableImageWood = document.querySelector('.table-img--wood'),
    tableImageBlack = document.querySelector('.table-img--black'),
    legsImageWhite = document.querySelector('.legs-img--white'),
    legsImageGray = document.querySelector('.legs-img--grey'),
    legsImageBlack = document.querySelector('.legs-img--black'),
    labelTableWhite = document.querySelector('.table--white'),
    labelTableBlack = document.querySelector('.table--grey'),
    labelTableBrown = document.querySelector('.table--brown'),
    labelTableBall = document.querySelector('.table--ball'),
    labelTableBuble = document.querySelector('.table--buble'),
    labelLegsWhite = document.querySelector('.legs--white'),
    labelLegsGrey = document.querySelector('.legs--grey'),
    labelLegsBlack = document.querySelector('.legs--black'),
    btnSand = document.querySelector('.form_wrapper--btn');

// Функции цвета ножек
labelLegsWhite.onclick = function() {
    legsImageGray.style.opacity = '0';
    legsImageBlack.style.opacity = '0';
    legsImageWhite.style.opacity = '1';
    labelLegsBlack.classList.remove("visible");
    labelLegsGrey.classList.remove("visible");
    labelLegsWhite.classList.add("visible");
}

btnLegsGrey.onclick = function() {
    legsImageGray.style.opacity = '1';
    legsImageBlack.style.opacity = '0';
    legsImageWhite.style.opacity = '0';
    labelLegsWhite.classList.remove("visible");
    labelLegsGrey.classList.add("visible");
    labelLegsBlack.classList.remove("visible");
}

btnLegsBlack.onclick = function() {
    legsImageGray.style.opacity = '0';
    legsImageBlack.style.opacity = '1';
    legsImageWhite.style.opacity = '0';
    labelLegsWhite.classList.remove("visible");
    labelLegsBlack.classList.add("visible");
    labelLegsGrey.classList.remove("visible");
}

// Функции цвета столешницы
btnTableWhite.onclick = function() {
    tableImageWhite.style.opacity = '1';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '0';
    if (tableCheckOne.checked) {
        resultOne.value = 25900;
        resultTwo.value = 25900;
        labelTableWhite.classList.add("visible");
        labelTableBlack.classList.remove("visible");
        labelTableBrown.classList.remove("visible");
        labelTableBall.classList.remove("visible");
        labelTableBuble.classList.remove("visible");
    } else {
        labelTableWhite.classList.remove("visible");
        tableImageWhite.style.opacity = '0';
        resultOne.value = 22000;
        resultTwo.value = 22000;
    }
}


btnTableGrey.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '1';
    tableImageWood.style.opacity = '0';
    if (tableCheckTwo.checked) {
        resultOne.value = 25900;
        resultTwo.value = 25900;
        labelTableBlack.classList.add("visible");
        labelTableWhite.classList.remove("visible");
        labelTableBrown.classList.remove("visible");
        labelTableBall.classList.remove("visible");
        labelTableBuble.classList.remove("visible");
    } else {
        labelTableBlack.classList.remove("visible");
        tableImageBlack.style.opacity = '0';
        resultOne.value = 22000;
        resultTwo.value = 22000;
    }
}
btnTableBrown.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '1';
    if (tableCheckThree.checked) {
        resultOne.value = 35900;
        resultTwo.value = 35900;
        labelTableBrown.classList.add("visible");
        labelTableWhite.classList.remove("visible");
        labelTableBlack.classList.remove("visible");
        labelTableBall.classList.remove("visible");
        labelTableBuble.classList.remove("visible");
    } else {
        labelTableBrown.classList.remove("visible");
        tableImageWood.style.opacity = '0';
        resultOne.value = 22000;
        resultTwo.value = 22000;
    }
}

tableCheckFour.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '1';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '0';
    if (tableCheckFour.checked) {
        resultOne.value = 65900;
        resultTwo.value = 65900;
        labelTableBall.classList.add("visible");
        labelTableWhite.classList.remove("visible");
        labelTableBlack.classList.remove("visible");
        labelTableBrown.classList.remove("visible");
        labelTableBuble.classList.remove("visible");
    } else {
        labelTableBall.classList.remove("visible");
        tableImageBall.style.opacity = '0';
        resultOne.value = 22000;
        resultTwo.value = 22000;
    }
}

tableCheckFive.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '1';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '0';
    if (tableCheckFive.checked) {
        resultOne.value = 65900;
        resultTwo.value = 65900;
        labelTableBuble.classList.add("visible");
        labelTableWhite.classList.remove("visible");
        labelTableBlack.classList.remove("visible");
        labelTableBrown.classList.remove("visible");
        labelTableBall.classList.remove("visible");
    } else {
        resultOne.value = 22000;
        resultTwo.value = 22000;
        labelTableBuble.classList.remove("visible");
        tableImageBuble.style.opacity = '0';
    }
}