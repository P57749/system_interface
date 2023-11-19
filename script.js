

document.getElementById('addButton').addEventListener('click', function() {
    document.getElementById('squareForm').style.display = 'block';
});


document.getElementById('squareForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var square = document.createElement('div');
    square.className = 'square';
    square.style.background = document.getElementById('squareColor').value;
    document.getElementById('squaresArea').appendChild(square);
    document.getElementById('squareForm').style.display = 'none';
    document.getElementById('squareColor').value = '';
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


