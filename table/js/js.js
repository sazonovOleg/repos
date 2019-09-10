const btnLegsWhite = document.querySelector('.legs-check--one'),
    btnLegsGray = document.querySelector('.legs-check--two'),
    btnLegsBlack = document.querySelector('.legs-check--three'),
    btnTableWhite = document.querySelector('.table-check--one'),
    btnTableGrey = document.querySelector('.table-check--two'),
    btnTableBrown = document.querySelector('.table-check--three'),
    btnTableBall = document.querySelector('.table-check--four'),
    btnTableBuble = document.querySelector('.table-check--five'),
    result = document.querySelector('.form_wrapper--total'),
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
    legsImageBlack = document.querySelector('.legs-img--black');

btnLegsWhite.onclick = function() {
    legsImageGray.style.opacity = '0';
    legsImageBlack.style.opacity = '0';
    legsImageWhite.style.opacity = '1';
}

btnLegsBlack.onclick = function() {
    legsImageGray.style.opacity = '0';
    legsImageBlack.style.opacity = '1';
    legsImageWhite.style.opacity = '0';
}

btnLegsGray.onclick = function() {
    legsImageGray.style.opacity = '1';
    legsImageBlack.style.opacity = '0';
    legsImageWhite.style.opacity = '0';
}


tableCheckOne.onclick = function() {
    tableImageWhite.style.opacity = '1';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '0';
    if (tableCheckOne.checked) {
        let a = 4000;
        result.value = a;
        checkOne.onclick = function() {
            let b = 1000;
            if (checkOne.checked) {
                result.value = Number.parseInt(result.value) + Number.parseInt(b);
            } else {
                result.value = a;
            }
        };
        checkTwo.onclick = function() {
            let c = 2000;
            if (checkTwo.checked) {
                result.value = Number.parseInt(result.value) + Number.parseInt(c);
            } else {
                result.value = a;
            }
        };
    } else {
        let a = 4000;
        result.value = a;
    }
}

tableCheckTwo.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '1';
    tableImageWood.style.opacity = '0';
    if (tableCheckTwo.checked) {
        let a = 4500;
        result.value = a;
        checkOne.onclick = function() {
            let b = 1000;
            if (checkOne.checked) {
                result.value = Number.parseInt(result.value) + Number.parseInt(b);
            } else {
                result.value = a;
            }
        };
        checkTwo.onclick = function() {
            let c = 2000;
            if (checkTwo.checked) {
                result.value = Number.parseInt(result.value) + Number.parseInt(c);
            } else {
                result.value = a;
            }
        };
    } else {
        let a = 4500;
        result.value = a;
    }
}

tableCheckThree.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '1';
    if (tableCheckThree.checked) {
        let a = 5000;
        result.value = a;
        checkOne.onclick = function() {
            let b = 1000;
            if (checkOne.checked) {
                result.value = Number.parseInt(result.value) + Number.parseInt(b);
            } else {
                result.value = a;
            }
        };
        checkTwo.onclick = function() {
            let c = 2000;
            if (checkTwo.checked) {
                result.value = Number.parseInt(result.value) + Number.parseInt(c);
            } else {
                result.value = a;
            }
        };
    } else {
        let a = 5000;
        result.value = a;
    }
}

tableCheckFour.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '1';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '0';
    if (tableCheckFour.checked) {
        let a = 6000;
        result.value = a;
        checkOne.onclick = function() {
            let b = 1000;
            if (checkOne.checked) {
                result.value = Number.parseInt(result.value) + Number.parseInt(b);
            } else {
                result.value = a;
            }
        };
        checkTwo.onclick = function() {
            let c = 2000;
            if (checkTwo.checked) {
                result.value = Number.parseInt(result.value) + Number.parseInt(c);
            } else {
                result.value = a;
            }
        };
    } else {
        let a = 6000;
        result.value = a;
    }
}

tableCheckFive.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '1';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '0';
    if (tableCheckFive.checked) {
        let a = 6500;
        result.value = a;
        checkOne.onclick = function() {
            let b = 1000;
            if (checkOne.checked) {
                result.value = Number.parseInt(result.value) + Number.parseInt(b);
            } else {
                result.value = a;
            }
        };
        checkTwo.onclick = function() {
            let c = 2000;
            if (checkTwo.checked) {
                result.value = Number.parseInt(result.value) + Number.parseInt(c);
            } else {
                result.value = a;
            }
        };
    } else {
        let a = 6500;
        result.value = a;
    }
}