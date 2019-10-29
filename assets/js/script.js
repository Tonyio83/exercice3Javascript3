let textGreen = document.querySelector('.green');
let textRed = document.querySelector('.red');
let textBlue = document.querySelector('.blue');
let text = document.getElementById('text');
//récupère les class des boutons et l'id du texte dans le html
textGreen.onclick = function(){//crée la fonction en cliquant sur le bouton green
  text.style.color = 'green';//change la couleur du texte en vert
}
textRed.onclick = function(){//crée la fonction en cliquant sur le bouton red
  text.style.color = 'red';//change la couleur du texte en rouge
}
textBlue.onclick = function(){//crée la fonction en cliquant sur le bouton blue
  text.style.color = 'blue';//change la couleur du texte en bleu
}
