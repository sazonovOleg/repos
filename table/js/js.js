function calculator() {
    let radio = document.querySelectorAll('input[type="radio"]'),
        checkBox = document.querySelectorAll('input[type="checkBox"]'),
        legsImg = document.querySelectorAll('.legs-img'),
        tableImg = document.querySelectorAll('.table-img'),
        result = document.getElementById('resultOne'),
        textOutLegs = document.getElementById('textOutLegs'),
        textOutTable = document.getElementById('textOutTable'),
        resultModal = document.getElementById('resultTwo'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('.close'),
        btnModal = document.getElementById('btnModal'),
        atrPrice = 'data-price',
        atrColor = 'data-color';
    textOutLegs.innerHTML = document.querySelector('input[type="radio"]').getAttribute(atrColor);
    textOutTable.innerHTML = 'не выбрано';
    objVariables = {};
    objVariables.dataLegsResult = Number(result.value);

//функция-конструктор для табов
    function tabCreate(number, img) {
        for (let i = number; i < img.length; i++) {
            img[i].style.display = 'none';
        }
    }

//табы для ножек + чекбокс для ножек
    tabCreate(1, legsImg);
    radio.forEach(function (element) {
        element.onclick = showLegs;
    });

    function showLegs() {
        objVariables.legsColorResult = this.getAttribute(atrColor);
        objVariables.dataLegsResult = Number(this.getAttribute(atrPrice));
        textOutLegs.innerHTML = objVariables.legsColorResult;
        tabCreate(0, legsImg);
        document.querySelector('.legs-img[data-color="' + objVariables.legsColorResult + '"]').style.display = 'block';
        if ((checkBox.checked = true) && (objVariables.dataTableResult > 0)) {
            result.value = objVariables.dataLegsResult + +objVariables.dataTableResult;
        }
        else {
            result.value = objVariables.dataLegsResult;
        }
    }

//табы для стола + чекбокс для стола
    tabCreate(0, tableImg);
    checkBox.forEach(function (element) {
        element.onclick = showTable;
    });

    function showTable() {
        objVariables.tableColorResult = this.getAttribute(atrColor);
        objVariables.dataTableResult = Number(this.getAttribute(atrPrice));
        textOutTable.innerHTML = objVariables.tableColorResult;
        tabCreate(0, tableImg);
        if (this.checked) {
            for (let i = 0; i < checkBox.length; i++) {
                checkBox[i].checked = false;
                this.checked = true;
            }
            document.querySelector('.table-img[data-color="' + objVariables.tableColorResult + '"]').style.display = 'block';
            result.value = +objVariables.dataTableResult + +objVariables.dataLegsResult;
            console.log(objVariables.tableColorResult);
        }
        else {
            this.checked = false;
            objVariables.dataTableResult = 0;
            document.querySelector('.table-img[data-color="' + objVariables.tableColorResult + '"]').style.display = 'none';
            result.value = objVariables.dataLegsResult;
            textOutTable.innerHTML = 'не выбрано';
        }
    }

    btnModal.onclick = callModal = () => {
        modal.classList.add('active'), resultModal.value = result.value
    };
    close.onclick = closeModal = () => modal.classList.remove('active');
}

//Запуск
calculator();

