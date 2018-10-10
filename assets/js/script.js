//méthode permettant de changer toutes les images en 1 fois
function changeImage(){
document.getElementById('image1').src='assets/img/image1_2.jpg';
document.getElementById('image2').src='assets/img/image2_2.jpg';
document.getElementById('image3').src='assets/img/image3_2.jpg';
document.getElementById('image4').src='assets/img/image4_2.jpg';
document.getElementById('image5').src='assets/img/image5_2.jpg';
}
/*
Le mot clé this fait reference au parametre mis dans nos fonctions.
L'evenement onmouseover appelle notre fonction carrouxsel qui se charge de changer l'image.
*/
function changeImage(image){
  image.src = 'assets/img/' + image.id + '_2.jpg';
}
