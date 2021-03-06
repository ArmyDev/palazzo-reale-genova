$(document).ready( () => {

  inView.offset({ bottom:200 });

  $(".italiano").on("click", () => {
    var loca = document.location.toString().replace("eng/index.html","");
    window.location.assign(loca);
  });

  let foto = $(".fotografie").css("height");
  let randomico;
  let scelta = "nessuna";
  $(".foto-contorno img").on("click", function () {
    $(".fotografie").fadeIn("fast");
    if (this.title == "opere") {
      scelta = "opere";
      $(".fotografie").css("width", "100vw");
      $(".mostra-foto img").css({"width": "auto", "height": "auto"});
      $(".contenitore-foto").css("opacity", 0);
      for (let i = 1; i < 54; i++) {
        // randomico = Math.random() * 1000;
        $(".fotografie").append("<div style='background-image:url(foto/leggere/opere/" + i + ".jpg);background-size: cover;' ></div>")
      }
    } else if (this.title == "autori") {
      scelta = "autori";

      // $(".fotografie").css("width", "900px");
      $(".contenitore-foto").css("opacity", 0);
      for (let i = 1; i <= 21; i++) {
        $(".fotografie").append("<div class='"+ i +"' style='background-image:url(foto/leggere/autori/" + i + ".jpg);background-size: cover;' ></div>")
      }
    } else {
      scelta = "guide";

      $(".contenitore-foto").css("opacity", 0);
      for (let i = 0; i <= 6; i++)
        $(".fotografie").append("<div class='"+ i +"' style='background-image:url(foto/guide/" + i + ".jpg);background-size: cover;' ></div>");
    }
    let altezza = $(".fotografie").height();
    $(".fotografie").css("background", "#ececec");
    $(".retro").fadeIn().on("click", function () {
      $(".contenitore-foto").css("opacity", 1);
      $(".fotografie").fadeOut();
      $(".fotografie").css("background", "transparent");
      $(".immagini").css("height", "700px");
      $(".fotografie div").remove();
      $(this).fadeOut();
    });
    $(".immagini").css({ "height" :altezza+150+"px", "background": "#ececec"});
    $(".fotografie div").on("click", function () {
      if (scelta == "opere" || scelta == "guide") {
        let bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        // alert(bg);

        $(".mostra-foto").fadeIn().append(`<img id="opera" src="${bg}">`);
        $("body").css("overflow-y", "hidden");
        document.addEventListener('wheel', scorri);
      } else if (scelta == "autori") {
        let bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $(".mostra-foto").fadeIn().append(`<img id="persona" src="${bg}">`);
        $(".mostra-foto img").css({"animation-play-state": "running", "width": "800px", "height": "600px"});
        $(".mostra-foto .specifiche").css({"animation-play-state": "running", "display": "flex"});
        $("body").css("overflow-y", "hidden");
        let classe = $(this).attr("class");
        switch (classe) {
          case "1":
            $(".specifiche").html("<h1 style='top:100px'>Chiara Panina</h1> <h2>Work done:</h2> <ul> <li>The tiumph of Bacchus <li> The dressing room of Venus <li> Apollo and Marsia<ul>");
            break;
          case "2":
            $(".specifiche").html("<h1 style='top:100px'>Xhesi Cukali</h1> <h2>Work done:</h2> <ul> <li>The rape of Proserpine <ul>");
            break;
          case "3":
            $(".specifiche").html("<h1 style='top:100px'>Giulia Podetti</h1> <h2>Work done:</h2> <ul> <li>The vault of the chapel gallery <ul>");
            break;
          case "4":
            $(".specifiche").html("<h1 style='top:100px'>Chiara Privitera</h1> <h2>Work done:</h2> <ul> <li>The chapel gallery <li> The triumph of Venus and The crowning of Hercules <li> The rape of Elena and The escape from Troy <ul>");
            break;
          case "5":
            $(".specifiche").html("<h1 style='top:100px'>Angelica Oblieght</h1> <h2>Work done:</h2> <ul> <li>The hall of mirrors <li> Sardanapalo (Assurbanipal) <li> Tolomeo XIII <li> Romolo Augustolo <li> Dario the last king of Persia <ul>");
            break;
          case "6":
            $(".specifiche").html("<h1 style='top:100px'>Sara Colleoni </h1> <h2>Work done:</h2> <ul> <li>The fresco in The room of time <ul>");
            break;
          case "7":
            $(".specifiche").html("<h1 style='top:100px'>Giorgia Barilli </h1> <h2>Work done:</h2> <ul> <li>Christ and the adulteress <ul>");
            break;
          case "8":
            $(".specifiche").html("<h1 style='top:100px'>Alessia Castelanelli </h1> <h2>Work done:</h2> <ul> <li>Photography <ul>");
            break;
          case "9":
            $(".specifiche").html("<h1 style='top:100px'>Ludovico Ferrari </h1> <h2>Work done:</h2> <ul> <li>Timeline <ul>");
            break;
          case "10":
            $(".specifiche").html("<h1 style='top:100px'>Luca Cavalca </h1> <h2>Work done:</h2> <ul> <li>The journey of Jacob <ul>");
            break;
          case "11":
            $(".specifiche").html("<h1 style='top:100px'>Lorenzo Clivio </h1> <h2>Work done:</h2> <ul> <li>Painting in The room of battles <ul>");
            break;
          case "12":
              $(".specifiche").html("<h1 style='top:100px'>Leonardo Ferretti </h1> <h2>Work done:</h2> <ul> <li>Photography <ul>");
            break;
          case "13":
            $(".specifiche").html("<h1 style='top:100px'>Luca Bisio </h1> <h2>Work done:</h2> <ul> <li>The room of battles <ul>");
            break;
          case "14":
            $(".specifiche").html("<h1 style='top:100px'>Michele Torazza </h1> <h2>Work done:</h2> <ul> <li>Crossing of the red sea <ul>");
            break;
          case "15":
            $(".specifiche").html("<h1 style='top:100px;font-size:40px'>Federico Bongiovanni </h1> <h2>Work done:</h2> <ul> <li>The tapestry in the audience chamber <ul>");
            break;
          case "16":
            $(".specifiche").html("<h1 style='top:100px'>Martina Dufour </h1> <h2>Work done:</h2> <ul> <li>The audience chamber <li> Portrait of Caterina Balbi Durazzo <ul>");
            break;
          case "17":
            $(".specifiche").html("<h1 style='top:100px'>Camilla Toscanini </h1> <h2>Work done:</h2> <ul> <li>Aurora lounge <li> Transfiguration of saint Theresa d'Avila <ul>");
            break;
          case "18":
            $(".specifiche").html("<h1 style='top:100px;font-size:40px;'>Gabriele Nicchiarelli </h1> <h2>Work done:</h2> <ul> <li>Web design and development <ul>");
            break;
          case "19":
            $(".specifiche").html("<h1 style='top:100px;font-size:40px;'>Armandas Astrauskas </h1> <h2>Work done:</h2> <ul> <li>Web design and development <ul>");
            break;
          case "20":
            $(".specifiche").html("<h1 style='top:100px'>Pietro Gerbi </h1> <h2>Work done:</h2> <ul> <li>The wedding of Zefiro and Flora <ul>");
            break;
          case "21":
              $(".specifiche").html("<h1 style='top:100px'>Gabriele Spilinga </h1> <h2>Work done:</h2> <ul> <li>Moses' finding in the Nile's waters <ul>");
            break;
          default:
            break;
        }
      }
    });

    $(".mostra-foto").on("click", function () {
      $(this).fadeOut();
      $(".specifiche").fadeOut();
      document.removeEventListener("wheel", scorri);
      ingrandimento = 1;
      $(".mostra-foto img").remove();
      $("body").css("overflow-y", "visible");
    });

  });

  var ingrandimento = 1;
  function scorri(event) {
    if (event.deltaY < 0) {
      ingrandimento += 0.1;
      $("#opera").css("zoom", ingrandimento);
    } else if (event.deltaY > 0) {
      ingrandimento -= 0.1;
      $("#opera").css("zoom", ingrandimento);
    }
  }

  randomico = Math.floor((Math.random() * 10) + 1);
  $(".author").attr("src", `foto/autori/${randomico}.jpg`);

  // Per mettere l'anno corrente nei crediti
  var data = new Date().getFullYear();
  $(".crediti").html("Copyright © " + data + " <span style='font-size:12px'>v0.8.5</span>");

  // Per gestire i click dell'utente
  $(".logo-header").click(function(){
    $("html, body").animate({ scrollTop: "974px" }, 1000);
  });

  $(".tornaSu").click(function(){
    $("html, body").animate({ scrollTop: "0px" }, 1500);
  });

  // Per animare la sezione della storia del palazzo
  $(".logo-comparsa").css("stroke-dasharray", 2 * 1000 * Math.PI);
  inView(".logo-comparsa").once("enter", function(){
    $(".logo-comparsa").css("animation-play-state", "running");
    $(".palazzo-animazione").css("animation-play-state", "running");
    $(".corda").css("animation-play-state", "running");
    $(".punto").css("animation-play-state", "running");
  });

  // Per animare il dondolio della mappa
  inView(".contenitore-mappa").once("enter", function(){
    $(".contenitore-mappa").css("animation-play-state", "running");
  });

  inView(".foto-contorno img").once("enter", function () {
    $(".foto-contorno img").css("animation-play-state", "running");
  });

  // Per rendere responsiva la mappatura della piantina
  $("map").imageMapResize();

  //FIX momentaneo
  scorrimento();


  var hSale = $(".sale").offset().top;
  // Effetti della mappa quando ci sono dei click
  $("area").on("click", function(){
    if ($("div").hasClass(`${this.title}`)) {
      $(".oscura").fadeIn();
      $(`.${this.title}`).addClass("scopri");

      $("html, body").animate({scrollTop: `${hSale}px`}, 1000);
      $("body").css("overflow-y", "hidden");
    } else {
      $(".oscura").fadeIn();
      $("html, body").animate({scrollTop: `${hSale}px`}, 1000);
      $("body").css("overflow-y", "hidden");
      $(".nessun-opera").fadeIn().css("display", "flex");
    }
  });
  $(".chiusura, .oscura").on("click", function(){
    $(".oscura").fadeOut();
    $(".scopri").scrollTop("0px");
    $(".scopri").removeClass("scopri");
    $("body").css("overflow-y", "visible");
    $(".nessun-opera").fadeOut();
  });

  $(".lista-stanze ol li").on("click", function () {
    var stanza = $(this).html().replace(/ |'/gi, "-");
    if ($("div").hasClass(`${stanza}`)) {
      $(".oscura").fadeIn();
      $(`.${stanza}`).addClass("scopri");

      $("html, body").animate({scrollTop: `${hSale}px`}, 1000);
      $("body").css("overflow-y", "hidden");
    } else {
      $(".oscura").fadeIn();
      $("html, body").animate({scrollTop: `${hSale}px`}, 1000);
      $("body").css("overflow-y", "hidden");
      $(".nessun-opera").fadeIn().css("display", "flex");
    }
  });

  // Per attivare la funzione quando si scrolla
  $(window).on("scroll", scorrimento);
  function scorrimento() {


    var percorso = $(window).scrollTop();
    if (percorso < 500) {
      $(".foto-2, .foto-3, .foto-4").css("top", percorso/2);
      $(".foto-1").css("top", percorso);
      $(".logo-header").css("margin-top", percorso/2);
      $(".tornaSu").fadeOut();
    } else {
      $(".foto-2, .foto-3, .foto-4").css("top", "246.5px");
      $(".foto-1").css("top", "493px");
      $(".logo-header").css("margin-top", "246.5px");
      $(".tornaSu").fadeIn();
    }

  }



});

// Parte del canvas e delle stelle, DA TENERE FUORI DALLA FUNZIONE READY();
var stelle = new Array(500);
function setup() {
  var altezza = windowHeight/4;
  var canvas = createCanvas(windowWidth, altezza*3);
  canvas.parent("effetto");
  for (var i = 0; i < stelle.length; i++) {
    stelle[i] = new Stella();
  }
}

function draw() {
  background(232);
  translate(width/2, height/2);
  for (var i = 0; i < stelle.length; i++) {
    stelle[i].muovi();
    stelle[i].mostra();
  }
}

function Stella() {
  this.x = random(-windowWidth, windowWidth/2);
  this.y = random(-windowHeight, windowHeight/2);
  this.z = random(width);
  this.grandezza = 5;
  this.mostra = function () {
    this.sX = map(this.x / this.z, 0, 1, 0, width);
    this.sY = map(this.y / this.z, 0, 1, 0, height);
    this.raggio = map(this.z, 0, width, 8, 0);
    noStroke();
    ellipse(this.sX, this.sY, this.raggio, this.raggio);
  }
  this.muovi = function () {
    if (this.z > 1) {
      this.z -= 1;
    } else {
      this.z = random(width);
    }
  }
}
