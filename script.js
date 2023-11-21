// Agrega un evento de clic a cada cuadrado para alternar la clase 'selected'
document.getElementById('squaresArea').addEventListener('click', function(event) {
    if (event.target.classList.contains('square')) {
        event.target.classList.toggle('selected');
    }
});


for (var i = 1; i <= 16; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    document.getElementById('squareId').appendChild(option);
}

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


ids.forEach(function(id) {
    var squareContainer = document.createElement('div');
    squareContainer.className = 'squareContainer';
    var square = document.createElement('div');
    square.className = 'square';
    square.id = id;
    var statusCircle = document.createElement('div');
    statusCircle.className = 'status-circle';
    if (id == 1) {
        statusCircle.style.backgroundColor = 'green';
    } else {
        statusCircle.style.backgroundColor = 'red';
    }
    squareContainer.appendChild(square);
    squareContainer.appendChild(statusCircle);
    var idElement = document.createElement('p');
    idElement.textContent = id;
    square.appendChild(idElement);
    document.getElementById('squaresArea').appendChild(squareContainer);
});
