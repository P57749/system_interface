// document.getElementById("addButton").addEventListener("click", function() {
//     var square = document.createElement("div");
//     square.style.width = "100px";
//     square.style.height = "100px";
//     square.style.background = "blue";
//     square.style.margin = "10px";
//     document.getElementById("container").appendChild(square);
// });

// document.getElementById("redButton").addEventListener("click", function() {
//     // Aquí puedes definir cualquier acción para el botón rojo
// });

document.getElementById('addButton').addEventListener('click', function() {
    var square = document.createElement('div');
    square.className = 'square';
    document.getElementById('squaresArea').appendChild(square);
});



// Agrega un evento de clic a cada cuadrado para alternar la clase 'selected'
// Agrega un evento de clic a cada cuadrado para alternar la clase 'selected'
document.getElementById('squaresArea').addEventListener('click', function(event) {
    if (event.target.classList.contains('square')) {
        event.target.classList.toggle('selected');
    }
});


// Agrega un evento de clic al botón de eliminar para eliminar los cuadrados seleccionados
// document.getElementById('removeButton').addEventListener('click', function() {
//     var squares = document.querySelectorAll('.square.selected');
//     squares.forEach(function(square) {
//         square.parentNode.removeChild(square);
//     });
// });

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


