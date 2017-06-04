/*
	Si vous desirez laissez les valeur par default ne setter pas les variable si dessous.
	Si vous desirez plus d'information consernant le style des bullet et des fleche visitez le site d'exemple.
	Consernant les temps il sont en milliseconde;
*/

// var idElement = "#idElement"; // id de votre Element(de type String);
// var largeurDiv = ;	// largeur souhaiter de votre div
// var hauteurDiv = ;	// hauteur souhaiter de votre div
// var styleBullet = ; // style visuel de vos bullet
// var styleFleche = ; // style visuel de vos fleche
// var vitesseSlide = ; // vitesse du slide
// var timeInterval = ; // temps d'interval entre chaque slide d'image en mode auto;
// var modeSlide = ; // mode "automatique" ou "manuel"
window.onload = function() {
var slider = function (idElement,largeurDiv,hauteurDiv,vitesseSlide,modeSlide,timeInterval) {
	 
	this.idElement = idElement;
	this.largeurDiv = largeurDiv;
	this.hauteurDiv = hauteurDiv;
	this.vitesseSlide = vitesseSlide;
	this.modeSlide = modeSlide;
	this.timeInterval = timeInterval;
	var cible = idElement + ">ul";
	var cible2 = cible + ">li>img";
	var countImageOnSlider = $(cible2).length;
	var v;
	var k = 0;

	slider.prototype.getVariable = function() {
		if(largeurDiv == null) {
			largeurDiv = "750px";
		}
		if(hauteurDiv == null) {
			hauteurDiv = "300px";
		}
		if(vitesseSlide == null) {
			vitesseSlide = 500;
		}
		if(modeSlide == null) {
			modeSlide = "auto";
		}
		if(timeInterval == null) {
			timeInterval = 2000;
		}
	}

	slider.prototype.setSizeOfDiv = function() {
		$(idElement).width(largeurDiv);
		$(idElement).height(hauteurDiv);
	}

	slider.prototype.resize = function() {
		for (var i = 0; i < countImageOnSlider; i++) {
			var diffHauteur = $(cible2+":eq("+i+")").height() - $(idElement).height();
			var diffLargeur = $(cible2+":eq("+i+")").width() - $(idElement).width();
			if((diffHauteur > 0 || diffLargeur > 0) && diffHauteur >= diffLargeur) {
				$(cible2+":eq("+i+")").css({maxHeight:$(idElement).height()});
				$(cible2+":eq("+i+")").css({maxWidth:$(idElement).width()});
			}
			else if((diffHauteur > 0 || diffLargeur > 0) && diffHauteur < diffLargeur) {
				$(cible2+":eq("+i+")").css({maxHeight:$(idElement).height()});
				$(cible2+":eq("+i+")").css({maxWidth:$(idElement).width()});
			}
			diffLargeur = ($(idElement).width() - $(cible2+":eq("+i+")").width()) / 2;
			diffHauteur = ($(idElement).height() - $(cible2+":eq("+i+")").height()) / 2;
			$(cible2+":eq("+i+")").css({marginLeft:diffLargeur});
			$(cible2+":eq("+i+")").css({marginRight:diffLargeur});
			$(cible2+":eq("+i+")").css({marginTop:diffHauteur});
			$(cible2+":eq("+i+")").css({marginBottom:diffHauteur});
		}
	}

	slider.prototype.setButton = function() {
		$(idElement).prepend("<span id=\"right\">&rang;</span>");
		$(idElement).prepend("<span id=\"left\">&lang;</span>");
		for (var j = countImageOnSlider - 1; j >= 0; j--) {
			$(idElement).prepend("<button value=\""+ j +"\"></button>");
		}
	}

	slider.prototype.slide = function(){
		if (modeSlide == "auto") {
		v = setInterval(function(){
	          $(cible).animate({marginLeft:-$(idElement).width()},vitesseSlide,function(){
	              $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
	          });
	          console.log(k + "inslide");
	          if(k == 5) { k = 0; }
				else { k++; }
	      }, timeInterval);
		}
		else if (modeSlide == "manuel") {
			v = function(){
	          $(cible).animate({marginLeft:-$(idElement).width()},vitesseSlide,function(){
	              $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
	          });
	          console.log(k + "inslide");
	          if(k == 5) { k = 0; }
				else { k++; }
	      };
		}
	}

	slider.prototype.action = function(){
		$("#right").click(function(){
			clearInterval(v);
			$(cible).animate({marginLeft:-$(idElement).width()},vitesseSlide,function(){
	              $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
			});
			if(k == 5) { k = 0; }
			else { k++; }
			slider.prototype.slide();
		});
		$("#left").click(function(){
			clearInterval(v);
	        $(cible).css({marginLeft:-$(idElement).width()}).find("li:first").before($(cible).find("li:last"));
			$(cible).animate({marginLeft:0},vitesseSlide);
			if(k == 0) { k = 5; }
			else { k--; }
			slider.prototype.slide();
		});
		$(idElement+">button").click(function(){
			clearInterval(v);
			var b = $(this).attr("value");
			var l = ($(this).attr("value")) - k;
			if(l < 0) {
				var e = 1;
				while(k > $(this).attr("value")) {
			        $(cible).css({marginLeft:-$(idElement).width() * e}).find("li:first").before($(cible).find("li:last"));
					e++;
					if(k == 0) { k = 5; }
					else { k--; }
				}
				$(cible).animate({marginLeft:0},vitesseSlide);
			}
			else if(l > 0) {
					$(cible).animate({marginLeft:-$(idElement).width() * l },vitesseSlide,function(){
						while(k < b) {
	              	$(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
	              	k++;
						}					
					});
				}
			slider.prototype.slide();
		});
	}

	slider.prototype.css = function() {
		var hauteurDiv = $(idElement).height();
		var largeurDiv = $(idElement).width();
		$(idElement).css({overflow: "hidden", backgroundColor: "black"});
		$(idElement+">ul").css({width:(100 * (countImageOnSlider + 1)) + "%", margin: "0px",padding: "0px", zIndex : "-1"});
		$(idElement+">ul>li").css({float: "left", position: "relative"});
		$(idElement+">span").css({fontSize: (hauteurDiv / 5) + "px", position: "absolute", zIndex: "1"});
		$("#left").css({left:(hauteurDiv / 20) + "px",top:(hauteurDiv / 2)-(hauteurDiv / 5) + "px", color: "white"});
		$("#right").css({left:largeurDiv-(hauteurDiv / 10) + "px",top:(hauteurDiv / 2)-(hauteurDiv / 5) + "px", color: "white"});
		$(idElement+">button").css({width: (hauteurDiv / 50) + "px", height: (hauteurDiv / 50) + "px",marginBottom: -(hauteurDiv / 50) + "px", borderRadius: (hauteurDiv / 50) + "px", zIndex: "1"});
		$(idElement+">button:first-of-type").css({marginLeft: (largeurDiv / 2)-(countImageOnSlider*(hauteurDiv / 100)) + "px"});
	}
}

var hero = new slider ("#element",1000,300,2000,"manuel",5000);
hero.getVariable();
hero.setSizeOfDiv();
hero.resize();
hero.setButton();
hero.css();
hero.slide();
hero.action();
}