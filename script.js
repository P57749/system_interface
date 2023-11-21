

document.getElementById('addButton').addEventListener('click', function() {
    document.getElementById('squareForm').style.display = 'block';
});

document.getElementById('squareForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var square = document.createElement('div');
    square.className = 'square';
    square.id = document.getElementById('squareId').value;
    var statusCircle = document.createElement('div');
    statusCircle.className = 'status-circle';
    if (document.getElementById('squareId').value == 1) {
    statusCircle.style.backgroundColor = 'green';
    } else {
    statusCircle.style.backgroundColor = 'red';
    }
    square.appendChild(statusCircle);
    var idElement = document.createElement('p');
    idElement.textContent = document.getElementById('squareId').value;
    square.appendChild(idElement);
    document.getElementById('squaresArea').appendChild(square);
    document.getElementById('squareForm').style.display = 'none';
});

document.getElementById('removeButton').addEventListener('click', function() {
   var deleteForm = document.getElementById('removeForm');
   deleteForm.style.display = 'block';
});



// Agrega un evento de clic a cada cuadrado para alternar la clase 'selected'
document.getElementById('squaresArea').addEventListener('click', function(event) {
    if (event.target.classList.contains('square')) {
        event.target.classList.toggle('selected');
    }
});



document.getElementById('removeButton').addEventListener('click', function() {
    document.getElementById('removeOptions').style.display = 'block';
});

document.getElementById('removeOptions').addEventListener('change', function() {
    var option = this.value;
    if (option === 'all') {
        var squaresArea = document.getElementById('squaresArea');
        while (squaresArea.firstChild) {
            squaresArea.removeChild(squaresArea.firstChild);
        }
    } else if (option === 'selected') {
        var squares = document.querySelectorAll('.square.selected');
        squares.forEach(function(square) {
            square.parentNode.removeChild(square);
        });
    }
    // Ocultar el select después de la acción
    this.style.display = 'none';
});


for (var i = 1; i <= 16; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    document.getElementById('squareId').appendChild(option);
}
