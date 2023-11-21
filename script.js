
var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


ids.forEach(function(id) {
   var squareContainer = document.createElement('div');
   squareContainer.className = 'squareContainer';
   var square = document.createElement('div');
   square.className = 'square';
   square.id = id;
   var statusCircle = document.createElement('div');
   statusCircle.className = 'status-circle';
   if (id == 1 || id == 4 || id == 5) {
       statusCircle.style.backgroundColor = 'green';
   } else {
       statusCircle.style.backgroundColor = 'red';
   }
   square.appendChild(statusCircle);
   var idElement = document.createElement('p');
   idElement.textContent = id;
   square.appendChild(idElement);
   squareContainer.appendChild(square);
   document.getElementById('squaresArea').appendChild(squareContainer);
});


//buscador
document.getElementById('searchInput').addEventListener('input', function() {
  var searchValue = this.value;
  var squares = document.getElementsByClassName('square');
  if (searchValue === '') {
      // Si el campo de búsqueda está vacío, muestra todos los cuadrados
      for (var i = 0; i < squares.length; i++) {
          squares[i].style.display = 'block';
      }
  } else {
      // Si el campo de búsqueda no está vacío, busca cuadrados por su ID
      for (var i = 0; i < squares.length; i++) {
          if (squares[i].id == searchValue) {
              squares[i].style.display = 'block';
          } else {
              squares[i].style.display = 'none';
          }
      }
  }
});

