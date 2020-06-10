function calculator() {
    let radio = document.querySelectorAll('input[type="radio"]'),
        legsImg = document.querySelectorAll('.legs-img'),
        tableImg = document.querySelectorAll('.table-img'),
        checkBox = document.querySelectorAll('input[type="checkBox"]'),
        result = document.getElementById('resultOne'),
        atrPrice = 'data-price',
        atrColor = 'data-color';
//функция-конструктор для табов
    objVariables = {

    }
        objVariables.dataLegsResult = Number(result.value);

    function tabCreate(a, b) {
        for (let i = a; i < b.length; i++) {
            b[i].style.display = 'none';
        }
    }

//табы для ножек + чекбокс для ножек
    tabCreate(1, legsImg);
    radio.forEach(function (element) {
        element.onclick = showLegs;
    });

    function showLegs() {
        var dataRadio = this.getAttribute(atrColor),
            dataPriceLegs = Number(this.getAttribute(atrPrice));
        objVariables.dataLegsResult = dataPriceLegs;
        tabCreate(0, legsImg);
        document.querySelector('.legs-img[data-color="' + dataRadio + '"]').style.display = 'block';
        if ((checkBox.checked = true) && (objVariables.dataTableResult > 0)) {
            result.value = dataPriceLegs + +objVariables.dataTableResult;
            console.log('check12');
        }
        else {
            result.value = dataPriceLegs;
            console.log('checkTwo');
        }
    }

//табы для стола + чекбокс для стола
    tabCreate(0, tableImg);
    checkBox.forEach(function (element) {
        element.onclick = showTable;
    });

    function showTable() {
        var dataRadio = this.getAttribute(atrColor),
            dataPriceTable = Number(this.getAttribute(atrPrice));
        objVariables.dataTableResult = dataPriceTable;
        tabCreate(0, tableImg);
        if (this.checked) {
            for (let i = 0; i < checkBox.length; i++) {
                checkBox[i].checked = false;
                this.checked = true;
            }
            document.querySelector('.table-img[data-color="' + dataRadio + '"]').style.display = 'block';
            result.value = +dataPriceTable + +objVariables.dataLegsResult;
        }
        else {
            this.checked = false;
            objVariables.dataTableResult  = 0;
            document.querySelector('.table-img[data-color="' + dataRadio + '"]').style.display = 'none';
            result.value = objVariables.dataLegsResult;
            console.log(' none ');
        }
    }

}

//Запуск
calculator();

