var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://library.kissclipart.com/20181126/aqe/kissclipart-dad-clipart-father-clip-art-a0765f336f92d61b.jpg", "https://webstockreview.net/images/clipart-mom-cartoon-5.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://clipground.com/images/clip-art-sister-7.jpg"];
var names = ["Family Book", "Lakshmi Kanth Potnuru", "Vilasitha Potnuru", "Chahna Potnuru", "Jeswitha Potnuru"];
var i = 0;
function update() {
  i++;
  var numbers_of_family_member_in_array = 4
  if (i > numbers_of_family_member_in_array) {
    i = 0;
  }

  //Debug the code to store list of images in updatedImage. Use images[i]
  var updatedImage =images[i] ;
  //Debug the code to store list of names in updatedName. Use names[i]
  var updatedName = names[i];

  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
}
