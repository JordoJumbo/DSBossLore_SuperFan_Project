//https://www.w3schools.com/howto/howto_css_border_image.asp//

let bossValue = 0;

function changeDuke() {
  bossValue = 1;
  document.getElementById("bossImage").src = "images/Duke.WEBP";
  document.getElementById("areaText5").innerText =
    "Seath the Scaleless is infamous for betraying his own kind, the Everlasting Dragons. Unlike his brethren, Seath was born without the stone scales that granted them immortality. Fueled by jealousy and a desire for eternal life, Seath allied with Gravelord Nito, the Witch of Izalith, and Gwyn, the Lord of Cinder, to bring the dragons to the brink of extinction, with many believing him to be the last of his kind.";
  document.getElementById("squ1").classList.add("translucent");
  document.getElementById("squ1").classList.remove("translucent2");
  document.getElementById("squ2").classList.add("translucent2");
  document.getElementById("squ2").classList.remove("translucent");
  document.getElementById("squ3").classList.add("translucent2");
  document.getElementById("squ3").classList.remove("translucent");
  document.getElementById("squ4").classList.add("translucent2");
  document.getElementById("squ4").classList.remove("translucent");
  document.getElementById("bossImage").classList.add("buttonOver");
  document.getElementById("BossTheme1").pause();
  document.getElementById("BossTheme2").pause();
  document.getElementById("BossTheme3").pause();
  document.getElementById("BossTheme4").pause();
  document.getElementById("BossTheme1").currentTime = 0;
  document.getElementById("BossTheme2").currentTime = 0;
  document.getElementById("BossTheme3").currentTime = 0;
  document.getElementById("BossTheme4").currentTime = 0;
  document.getElementById("DSbgm").play();
  document.getElementById("DSSelect").pause();
  document.getElementById("DSSelect").currentTime = 0;
  document.getElementById("DSSelect").play();
}

// Adding the event listener for double-click
function changeNito() {
  bossValue = 2;
  document.getElementById("bossImage").src = "images/Nito.WEBP";
  document.getElementById("areaText5").innerText =
    "Holder of one of the four Lord Souls, Gravelord Nito was among the lords to wage war against the dragons. As the Lord of Death, Nito rules over the dead in The Catacombs and resides within the Tomb of Giants. His army of skeletons guard his tomb, while his Gravelord Servants spread death through the Eyes of Death.";
  document.getElementById("squ1").classList.add("translucent2");
  document.getElementById("squ1").classList.remove("translucent");
  document.getElementById("squ2").classList.add("translucent");
  document.getElementById("squ2").classList.remove("translucent2");
  document.getElementById("squ3").classList.add("translucent2");
  document.getElementById("squ3").classList.remove("translucent");
  document.getElementById("squ4").classList.add("translucent2");
  document.getElementById("squ4").classList.remove("translucent");
  document.getElementById("bossImage").classList.add("buttonOver");
  document.getElementById("BossTheme1").pause();
  document.getElementById("BossTheme2").pause();
  document.getElementById("BossTheme3").pause();
  document.getElementById("BossTheme4").pause();
  document.getElementById("BossTheme1").currentTime = 0;
  document.getElementById("BossTheme2").currentTime = 0;
  document.getElementById("BossTheme3").currentTime = 0;
  document.getElementById("BossTheme4").currentTime = 0;
  document.getElementById("DSbgm").play();
  document.getElementById("DSSelect").pause();
  document.getElementById("DSSelect").currentTime = 0;
  document.getElementById("DSSelect").play();
}
function changeBed() {
  bossValue = 3;
  document.getElementById("bossImage").src = "images/Bed_of_Chaos.JPG";
  document.getElementById("areaText5").innerText =
    "In an attempt to create a second First Flame, the Witch of Izalith conducted a ritual that ultimately failed. The power unleashed from this ritual formed the Bed of Life, which became the source of all demons.";
  document.getElementById("squ1").classList.add("translucent2");
  document.getElementById("squ1").classList.remove("translucent");
  document.getElementById("squ2").classList.add("translucent2");
  document.getElementById("squ2").classList.remove("translucent");
  document.getElementById("squ3").classList.add("translucent");
  document.getElementById("squ3").classList.remove("translucent2");
  document.getElementById("squ4").classList.add("translucent2");
  document.getElementById("squ4").classList.remove("translucent");
  document.getElementById("bossImage").classList.add("buttonOver");
  document.getElementById("BossTheme1").pause();
  document.getElementById("BossTheme2").pause();
  document.getElementById("BossTheme3").pause();
  document.getElementById("BossTheme4").pause();
  document.getElementById("BossTheme1").currentTime = 0;
  document.getElementById("BossTheme2").currentTime = 0;
  document.getElementById("BossTheme3").currentTime = 0;
  document.getElementById("BossTheme4").currentTime = 0;
  document.getElementById("DSbgm").play();
  document.getElementById("DSSelect").pause();
  document.getElementById("DSSelect").currentTime = 0;
  document.getElementById("DSSelect").play();
}
function changeKings() {
  bossValue = 4;
  document.getElementById("bossImage").src = "images/Four_Kings.JPG";
  document.getElementById("areaText5").innerText =
    "The Four Kings are tall, gray-skinned humanoid figures with distorted, root-like bodies and colossal swords. They are encountered in the Abyss at the New Londo Ruins. The wraith-like remnants of the four leaders of New Londo Ruins who fell to dark after being tempted with the art of lifedrain.";
  document.getElementById("squ1").classList.add("translucent2");
  document.getElementById("squ1").classList.remove("translucent");
  document.getElementById("squ2").classList.add("translucent2");
  document.getElementById("squ2").classList.remove("translucent");
  document.getElementById("squ3").classList.add("translucent2");
  document.getElementById("squ3").classList.remove("translucent");
  document.getElementById("squ4").classList.add("translucent");
  document.getElementById("squ4").classList.remove("translucent2");
  document.getElementById("bossImage").classList.add("buttonOver");
  document.getElementById("BossTheme1").pause();
  document.getElementById("BossTheme2").pause();
  document.getElementById("BossTheme3").pause();
  document.getElementById("BossTheme4").pause();
  document.getElementById("BossTheme1").currentTime = 0;
  document.getElementById("BossTheme2").currentTime = 0;
  document.getElementById("BossTheme3").currentTime = 0;
  document.getElementById("BossTheme4").currentTime = 0;
  document.getElementById("DSbgm").play();
  document.getElementById("DSSelect").pause();
  document.getElementById("DSSelect").currentTime = 0;
  document.getElementById("DSSelect").play();
}

function menuNavigateSound() {
  var sound = document.getElementById("DSHover");
  sound.play();
}

function bossClick() {
  if (bossValue === 1) {
    document.getElementById("bossImage").src = "images/Duke.GIF";
    document.getElementById("bossImage").classList.remove("buttonOver");
    document.getElementById("DSbgm").pause();
    document.getElementById("DSbgm").currentTime = 0;
    document.getElementById("BossTheme1").play();
    bossValue = 5;
  } else if (bossValue == 2) {
    document.getElementById("bossImage").src = "images/Nito.GIF";
    document.getElementById("bossImage").classList.remove("buttonOver");
    document.getElementById("DSbgm").pause();
    document.getElementById("DSbgm").currentTime = 0;
    document.getElementById("BossTheme2").play();
    bossValue = 5;
  } else if (bossValue == 3) {
    document.getElementById("bossImage").src = "images/Bed_of_Chaos.GIF";
    document.getElementById("bossImage").classList.remove("buttonOver");
    document.getElementById("DSbgm").pause();
    document.getElementById("DSbgm").currentTime = 0;
    document.getElementById("BossTheme3").play();
    bossValue = 5;
  } else if (bossValue == 4) {
    document.getElementById("bossImage").src = "images/Four_Kings.WEBP";
    document.getElementById("bossImage").classList.remove("buttonOver");
    document.getElementById("DSbgm").pause();
    document.getElementById("DSbgm").currentTime = 0;
    document.getElementById("BossTheme4").play();
    bossValue = 5;
  }
}
