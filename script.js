// Функция для переключения текста
function toggleText() {
    var content = document.getElementById("content");
    var arrows = document.querySelectorAll(".arrow");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Показываем текст
        arrows[0].style.display = "none"; // Скрываем стрелку вниз
        arrows[1].style.display = "inline"; // Показываем стрелку вверх
    } else {
        content.style.display = "none"; // Скрываем текст
        arrows[0].style.display = "inline"; // Показываем стрелку вниз
        arrows[1].style.display = "none"; // Скрываем стрелку вверх
    }
}

// Инициализация состояния при загрузке страницы
window.onload = function() {
    var content = document.getElementById("content");
    var arrows = document.querySelectorAll(".arrow");

    content.style.display = "none"; // Скрываем текст
    arrows[0].style.display = "inline"; // Показываем стрелку вниз
    arrows[1].style.display = "none"; // Скрываем стрелку вверх
};

// Переменная для отслеживания, виден ли список проектов
let isProjectsVisible = false;

// Функция для переключения проектов
function toggleProjects() {
    const projectList = document.getElementById("projectList");
    projectList.innerHTML = ""; // Очищаем контейнер перед добавлением новых проектов

    const arrowIcon = document.getElementById("arrowIcon");

    if (!isProjectsVisible) {
        const projects = ["Проект 2", "Проект 3", "Проект 4"]; // Массив с названиями проектов

        for (const project of projects) {
            const projectItem = document.createElement("div");
            projectItem.textContent = project; // Текст для каждого проекта
            projectList.appendChild(projectItem); // Добавляем проект в контейнер
        }

        projectList.classList.add("show"); // Добавляем класс для показа с анимацией
        arrowIcon.src = "./img/Icon.png"; // Меняем иконку на вторую
    } else {
        projectList.classList.remove("show"); // Убираем класс для скрытия с анимацией
        arrowIcon.src = "./img/Icon (1).png"; // Возвращаемся к первой иконке
    }

    isProjectsVisible = !isProjectsVisible; // Переключаем состояние видимости проектов
}

// Функция для переключения видимости поп-апа
function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none"; // Переключаем видимость попапа
}

// Функция для переключения состояния ползунка
function toggleSwitch() {
    const toggle = document.getElementById('toggle');
    console.log('Ползунок сейчас: ', toggle.checked ? 'Включен' : 'Отключен');
}

// Функция для переключения инпутов в зависимости от состояния ползунка
function toggleInputs() {
    const toggle = document.getElementById("toggle");
    const clientIdInput = document.getElementById("clientIdInput");
    const accessTokenInput = document.getElementById("accessTokenInput");
    const userIdInput = document.getElementById("userIdInput");
    const hostIdInput = document.getElementById("hostIdInput");

    if (toggle.checked) {
        clientIdInput.style.display = 'flex'; // Показываем только Client ID
        accessTokenInput.style.display = 'none';
        userIdInput.style.display = 'none';
        hostIdInput.style.display = 'none';
    } else {
        clientIdInput.style.display = 'none';
        accessTokenInput.style.display = 'flex'; // Показываем все инпуты
        userIdInput.style.display = 'flex';
        hostIdInput.style.display = 'flex';
    }
}

// Функция для начала загрузки
function startLoading() {
    document.getElementById('buttonContainer').style.display = 'none'; // Скрыть кнопки
    document.getElementById('loadingAnimation').style.display = 'flex'; // Показать анимацию загрузки

    // Имитация завершения процесса через 3 секунды
}

// Функция для скрытия обоих поп-апов
function cancel() {
    togglePopup(); // Закрываем первый поп-ап
    toggleSecondPopup(); // Закрываем второй поп-ап, если открыт
}

// Функция для переключения видимости второго поп-апа
function toggleSecondPopup() {
    const secondPopup = document.getElementById('secondPopup');
    secondPopup.style.display = (secondPopup.style.display === "none" || secondPopup.style.display === "") ? "block" : "none"; // Переключаем видимость
}

// Функция для отправки данных из второго поп-апа
function submitSecondPopup() {
    alert("Данные отправлены!"); // Логика обработки данных из второго поп-апа
    cancel(); // Закрываем оба поп-апа
}
function startLoading() {
    // Скрыть кнопки и показать анимацию загрузки
    document.getElementById('buttonContainer').style.display = 'none';
    document.getElementById('loadingAnimation').style.display = 'flex';

    // Имитация завершения процесса через 3 секунды
    setTimeout(function() {
        document.getElementById('loadingAnimation').style.display = 'none'; // Скрываем анимацию загрузки
        togglePopup(); // Закрываем первый поп-ап
        toggleSecondPopup(); // Открываем второй поп-ап
    }, 3000); // 3 секунды загрузки
}
function submitSecondPopup() {
    // Получаем значения из инпутов
    const accessTokenInput = document.querySelector('#accessTokenInput input');
    const userIdInput = document.querySelector('#userIdInput input');
    const hostIdInput = document.querySelector('#hostIdInput input');
    
    // Получаем элементы для отображения сообщений об ошибках
    const accessTokenError = document.querySelector('#accessTokenInput .error-message');
    const userIdError = document.querySelector('#userIdInput .error-message');
    const hostIdError = document.querySelector('#hostIdInput .error-message');

    // Сбрасываем предыдущие сообщения об ошибках
    accessTokenError.style.display = 'none';
    userIdError.style.display = 'none';
    hostIdError.style.display = 'none';

    // Переменная для отслеживания наличия ошибок
    let hasError = false;

    // Проверка каждого поля
    if (accessTokenInput.value.trim() === '') {
        accessTokenInput.classList.add('error'); // Добавляем класс ошибки
        accessTokenError.style.display = 'block'; // Показываем сообщение об ошибке
        hasError = true; // Устанавливаем флаг ошибки
    } else {
        accessTokenInput.classList.remove('error'); // Убираем класс ошибки
    }

    if (userIdInput.value.trim() === '') {
        userIdInput.classList.add('error'); // Добавляем класс ошибки
        userIdError.style.display = 'block'; // Показываем сообщение об ошибке
        hasError = true; // Устанавливаем флаг ошибки
    } else {
        userIdInput.classList.remove('error'); // Убираем класс ошибки
    }

    if (hostIdInput.value.trim() === '') {
        hostIdInput.classList.add('error'); // Добавляем класс ошибки
        hostIdError.style.display = 'block'; // Показываем сообщение об ошибке
        hasError = true; // Устанавливаем флаг ошибки
    } else {
        hostIdInput.classList.remove('error'); // Убираем класс ошибки
    }

    // Если есть ошибки, не продолжаем выполнение
    if (hasError) {
        return; // Прерываем выполнение функции
    }

    // Если все поля заполнены, выполняем дальнейшие действия (например, отправка данных)
    alert("Данные успешно отправлены!"); // Замените на вашу логику
    cancel(); // Закрываем поп-апы
}





function toggleProjectSection() {
    const projectSection = document.getElementById('projectSection');
    // Переключаем видимость секции проектов
    projectSection.style.display = projectSection.style.display === 'none' ? 'block' : 'none';
}

function selectProject(projectName) {
    const projectInput = document.getElementById('projectInput');
    projectInput.value = projectName; // Устанавливаем значение инпута
    document.getElementById('projectSection').style.display = 'none'; // Скрываем секцию
}
document.getElementById("folderSelect").addEventListener("click", function() {
    const folderOptions = document.getElementById("folderOptions");
    folderOptions.style.display = folderOptions.style.display === "none" ? "block" : "none";
  });
  
  document.querySelectorAll(".folder-option").forEach(option => {
    option.addEventListener("click", function() {
      if (!option.classList.contains("create-new")) {
        document.getElementById("folderSelect").innerText = this.innerText;
      }
      document.getElementById("folderOptions").style.display = "none";
    });
  });
  
  // Закрытие выпадающего списка при клике вне его области
  document.addEventListener("click", function(event) {
    const folderSelectWrapper = document.getElementById("folderSelectWrapper");
    if (!folderSelectWrapper.contains(event.target)) {
      document.getElementById("folderOptions").style.display = "none";
    }
  });
  function toggleFolderOptions() {
    const folderOptions = document.getElementById('folderOptions');
    folderOptions.style.display = folderOptions.style.display === 'none' ? 'block' : 'none';
}

function toggleFolderOptions() {
    const folderOptions = document.getElementById('folderOptions');
    folderOptions.style.display = folderOptions.style.display === 'none' ? 'block' : 'none';
}

function createNewFolder() {
    const newFolderNameInput = document.getElementById('newFolderName');
    const folderName = newFolderNameInput.value.trim();

    if (folderName) {
        console.log("Creating new folder:", folderName);
        const folderOptionsContainer = document.getElementById('folderOptions');

        // Создание новой опции
        const newOption = document.createElement('div');
        newOption.classList.add('folder-option');
        newOption.innerHTML = `<img src="./img/Icon (4).png" alt="" class="icon-img"> ${folderName}`;

        // Добавление новой опции перед полем ввода
        folderOptionsContainer.insertBefore(newOption, folderOptionsContainer.lastElementChild);

        // Очистка поля ввода
        newFolderNameInput.value = '';
    } else {
        alert('Введите название папки');
    }
}
