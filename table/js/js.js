const btnLegsWhite = document.querySelector('.legs-check--one'),
    btnLegsGrey = document.querySelector('.legs-check--two'),
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
    legsImageBlack = document.querySelector('.legs-img--black'),
    labelTableWhite = document.querySelector('.table--white'),
    labelTableBlack = document.querySelector('.table--grey'),
    labelTableBrown = document.querySelector('.table--brown'),
    labelTableBall = document.querySelector('.table--ball'),
    labelTableBuble = document.querySelector('.table--buble'),
    labelLegsWhite = document.querySelector('.legs--white'),
    labelLegsGrey = document.querySelector('.legs--grey'),
    labelLegsBlack = document.querySelector('.legs--black'),
    labelLegs = document.querySelectorAll('.legs');

btnLegsWhite.onclick = function() {
    legsImageGray.style.opacity = '0';
    legsImageBlack.style.opacity = '0';
    legsImageWhite.style.opacity = '1';
    labelLegsBlack.classList.remove("visible");
    labelLegsGrey.classList.remove("visible");
    labelLegsWhite.classList.add("visible");
    if (labelLegsWhite.classList.contains('visible')) {
        let a = 22000;
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
    }
}

btnLegsGrey.onclick = function() {
    legsImageGray.style.opacity = '1';
    legsImageBlack.style.opacity = '0';
    legsImageWhite.style.opacity = '0';
    labelLegsWhite.classList.remove("visible");
    labelLegsGrey.classList.add("visible");
    labelLegsBlack.classList.remove("visible");
    if (labelLegsGrey.classList.contains('visible')) {
        let a = 22000;
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
    }
}

btnLegsBlack.onclick = function() {
    legsImageGray.style.opacity = '0';
    legsImageBlack.style.opacity = '1';
    legsImageWhite.style.opacity = '0';
    labelLegsWhite.classList.remove("visible");
    labelLegsBlack.classList.add("visible");
    labelLegsGrey.classList.remove("visible");
    if (labelLegsBlack.classList.contains('visible')) {
        let a = 22000;
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
    }
}


labelTableWhite.onclick = function() {
    tableImageWhite.style.opacity = '1';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '0';
    labelTableBlack.classList.remove("visible");
    labelTableBrown.classList.remove("visible");
    labelTableBall.classList.remove("visible");
    labelTableBuble.classList.remove("visible");
    labelTableWhite.classList.add("visible");
    if (labelTableWhite.classList.contains('visible')) {
        let num = 0,
            a = 25900;
        num = Number.parseInt(result.value) + Number.parseInt(a);
        result.value = num;
        checkOne.onclick = function() {
            let b = 1000;
            if (checkOne.checked) {
                result.value = num + Number.parseInt(b);
            } else {
                result.value = num;
            }
        };
        checkTwo.onclick = function() {
            let b = 2000;
            if (checkTwo.checked) {
                result.value = num + Number.parseInt(b);
            } else {
                result.value = num;
            }
        };
    }
    if (tableCheckOne.checked) {
        labelTableWhite.classList.add("visible");
    } else {
        labelTableWhite.classList.remove("visible");
        let a = 22000;
        result.value = a;
        tableImageWhite.style.opacity = '0';
    }
}

labelTableBlack.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '1';
    tableImageWood.style.opacity = '0';
    labelTableWhite.classList.remove("visible");
    labelTableBrown.classList.remove("visible");
    labelTableBall.classList.remove("visible");
    labelTableBuble.classList.remove("visible");
    if (labelTableBlack.classList.contains('visible')) {
        result.value = 22000;
        let num = 0,
            a = 25900;
        num = Number.parseInt(result.value) + Number.parseInt(a);
        result.value = num;
        checkOne.onclick = function() {
            let b = 1000;
            if (checkOne.checked) {
                result.value = num + Number.parseInt(b);
            } else {
                result.value = num;
            }
        };
        checkTwo.onclick = function() {
            let b = 2000;
            if (checkTwo.checked) {
                result.value = num + Number.parseInt(b);
            } else {
                result.value = num;
            }
        };
    } else {

    }
    if (labelTableBlack.classList.contains('visible')) {
        true;
    } else {
        labelTableBlack.classList.remove("visible");
        let a = 22000;
        result.value = a;
        tableImageBlack.style.opacity = '0';
    }
}

tableCheckThree.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '1';
    labelTableWhite.classList.remove("visible");
    labelTableBlack.classList.remove("visible");
    labelTableBall.classList.remove("visible");
    labelTableBuble.classList.remove("visible");
    if (tableCheckThree.checked) {
        result.value = 22000;
        let num = 0,
            a = 35900;
        num = Number.parseInt(result.value) + Number.parseInt(a);
        result.value = num;
        checkOne.onclick = function() {
            let b = 1000;
            if (checkOne.checked) {
                result.value = num + Number.parseInt(b);
            } else {
                result.value = num;
            }
        };
        checkTwo.onclick = function() {
            let b = 2000;
            if (checkTwo.checked) {
                result.value = num + Number.parseInt(b);
            } else {
                result.value = num;
            }
        };
    } else {
        let a = 22000;
        result.value = a;
        tableImageWood.style.opacity = '0';
    }
    if (tableCheckThree.checked) {
        labelTableBrown.classList.add("visible");
    } else {
        labelTableBrown.classList.remove("visible");
    }
}

tableCheckFour.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '0';
    tableImageBall.style.opacity = '1';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '0';
    labelTableWhite.classList.remove("visible");
    labelTableBlack.classList.remove("visible");
    labelTableBrown.classList.remove("visible");
    labelTableBuble.classList.remove("visible");
    if (tableCheckThree.checked) {
        result.value = 22000;
        let num = 0,
            a = 35900;
        num = Number.parseInt(result.value) + Number.parseInt(a);
        result.value = num;
        checkOne.onclick = function() {
            let b = 1000;
            if (checkOne.checked) {
                result.value = num + Number.parseInt(b);
            } else {
                result.value = num;
            }
        };
        checkTwo.onclick = function() {
            let b = 2000;
            if (checkTwo.checked) {
                result.value = num + Number.parseInt(b);
            } else {
                result.value = num;
            }
        };
    } else {
        let a = 22000;
        result.value = a;
        tableImageWood.style.opacity = '0';
    }
    if (tableCheckFour.checked) {
        labelTableBall.classList.add("visible");
    } else {
        labelTableBall.classList.remove("visible");
    }
}

tableCheckFive.onclick = function() {
    tableImageWhite.style.opacity = '0';
    tableImageBuble.style.opacity = '1';
    tableImageBall.style.opacity = '0';
    tableImageBlack.style.opacity = '0';
    tableImageWood.style.opacity = '0';
    labelTableWhite.classList.remove("visible");
    labelTableBlack.classList.remove("visible");
    labelTableBrown.classList.remove("visible");
    labelTableBall.classList.remove("visible");
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
    if (tableCheckFive.checked) {
        labelTableBuble.classList.add("visible");
    } else {
        labelTableBuble.classList.remove("visible");
    }
}