

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  document.addEventListener('DOMContentLoaded', function () {
    
    var button = document.getElementById('button');
    var informacion = document.getElementById('informacion');
    button.addEventListener('click', function () {
        if (informacion.style.display === 'none') {
            informacion.style.display = 'block';
        } else {
            informacion.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
  var button2 = document.getElementById('button2');
  var informacion2 = document.getElementById('informacion2');
  button2.addEventListener('click', function () {
      if (informacion2.style.display === 'none') {
          informacion2.style.display = 'block';
      } else {
          informacion2.style.display = 'none';
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var button3 = document.getElementById('button3');
  var informacion3 = document.getElementById('informacion3');

  button3.addEventListener('click', function () {
      if (informacion3.style.display === 'none') {
          informacion3.style.display = 'block';
      } else {
          informacion3.style.display = 'none';
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var button4 = document.getElementById('button4');
  var informacion4 = document.getElementById('informacion4');

  button4.addEventListener('click', function () {
      if (informacion4.style.display === 'none') {
          informacion4.style.display = 'block';
      } else {
          informacion4.style.display = 'none';
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var button5 = document.getElementById('button5');
  var informacion5 = document.getElementById('informacion5');

  button5.addEventListener('click', function () {
      if (informacion5.style.display === 'none') {
          informacion5.style.display = 'block';
      } else {
          informacion5.style.display = 'none';
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var button6 = document.getElementById('button6');
  var informacion6 = document.getElementById('informacion6');

  button6.addEventListener('click', function () {
      if (informacion6.style.display === 'none') {
          informacion6.style.display = 'block';
      } else {
          informacion6.style.display = 'none';
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var button7 = document.getElementById('button7');
  var informacion7 = document.getElementById('informacion7');

  button7.addEventListener('click', function () {
      if (informacion7.style.display === 'none') {
          informacion7.style.display = 'block';
      } else {
          informacion7.style.display = 'none';
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var button8 = document.getElementById('button8');
  var informacion8 = document.getElementById('informacion8');

  button8.addEventListener('click', function () {
      if (informacion8.style.display === 'none') {
          informacion8.style.display = 'block';
      } else {
          informacion8.style.display = 'none';
      }
  });
});
/***************** código del modal del footer *****************/


var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}