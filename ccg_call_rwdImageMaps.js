$(document).ready(function(e) {
      $('img[usemap]').rwdImageMaps();
    });

    function getImage(imgEvent){
      var imagePet = document.getElementById(imgEvent);
      var imagePets = document.getElementsByClassName('pet');
      for (let i = 0; i < imagePets.length; i++) {
        if(imagePet == imagePets[i]){
          imagePets[i].classList.add('petActive');
        }
        else{
          imagePets[i].classList.remove('petActive');
        }
      }
    }