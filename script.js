//ids de los dispositivos
var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

var initialState = null;


ids.forEach(function(id) {
   var squareContainer = document.createElement('div');
   squareContainer.className = 'squareContainer';
   var square = document.createElement('div');
   square.className = 'square';
    square.id = id;
    square.setAttribute('draggable', 'true'); // Hacer el cuadrado arrastrable
    square.setAttribute('ondragstart', 'drag(event)'); // Asignar el evento ondragstart
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



var seconds = 0;
var minutes = 0;
var hours = 0;

setInterval(function() {
  seconds++;
  if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
          minutes = 0;
          hours++;
      }
  }
  document.getElementById('timer').textContent = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
}, 1000);




document.getElementById('startButton').addEventListener('click', function() {
    var timeInput = document.getElementById('timeInput').value;
    var timeParts = timeInput.split(':');
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    var seconds = parseInt(timeParts[2]);
    startTimer(hours, minutes, seconds);
});



function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 var element = document.getElementById(data);
 element.style.margin = '10px';
 ev.target.appendChild(element);
}
