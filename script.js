function validateForm() {
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));

    let fullName = document.getElementById('fullName');
    let group = document.getElementById('group');
    let phone = document.getElementById('phone');
    let faculty = document.getElementById('faculty');
    let address = document.getElementById('address');

    let isValid = true;

    let fullNameRegex = /^[А-ЯҐЄІЇа-яґєії']{2,}\s[А-ЯҐЄІЇ]\.[А-ЯҐЄІЇ]\.$/;
    let groupRegex = /^[А-ЯҐЄІЇа-яґєії]{2}-\d{2}$/;
    let phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    let facultyRegex = /^[А-ЯҐЄІЇа-яґєії]{4}$/;
    let addressRegex = /^м\.\s[А-ЯҐЄІЇа-яґєії]{2,}$/;

    if (!fullNameRegex.test(fullName.value)) {
        fullName.classList.add('error');
        isValid = false;
    }

    if (!groupRegex.test(group.value)) {
        group.classList.add('error');
        isValid = false;
    }

    if (!phoneRegex.test(phone.value)) {
        phone.classList.add('error');
        isValid = false;
    }

    if (!facultyRegex.test(faculty.value)) {
        faculty.classList.add('error');
        isValid = false;
    }

    if (!addressRegex.test(address.value)) {
        address.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        alert(`Введена інформація:\nПІБ: ${fullName.value}\nГрупа: ${group.value}\nТелефон: ${phone.value}\nФакультет: ${faculty.value}\nАдреса: ${address.value}`);
    } else {
        alert('Будь ласка, перевірте введені дані. Помилки виділені червоним.');
    }

        const table = document.getElementById('colorTable');
        let cell = document.getElementById('cell13');
    
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = getRandomColor();
        });
    
        cell.addEventListener('click', () => {
            const chosenColor = document.getElementById('colorPicker').value;
            cell.style.backgroundColor = chosenColor;
        });
    
        cell.addEventListener('dblclick', () => {
            highlightMainDiagonal();
        });
    
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    
        function highlightMainDiagonal() {
            for (let i = 0; i < 6; i++) {
                table.rows[i].cells[i].style.backgroundColor = getRandomColor();
            }
        }
}