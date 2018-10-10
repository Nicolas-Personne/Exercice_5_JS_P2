//méthode permettant de changer toutes les images en 1 fois
function changeImage(){
document.getElementById('image1').src='assets/img/image1_2.jpg';
document.getElementById('image2').src='assets/img/image2_2.jpg';
document.getElementById('image3').src='assets/img/image3_2.jpg';
document.getElementById('image4').src='assets/img/image4_2.jpg';
document.getElementById('image5').src='assets/img/image5_2.jpg';
}
//méthode avec paramètre permettant de changer les images 1 à 1
function changeImage(image){
  image.src = 'assets/img/' + image.id + '_2.jpg';
}
