(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,200);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,461,193);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,141);


(lib.pl1 = function() {
	this.initialize(img.pl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,247);


(lib.pls = function() {
	this.initialize(img.pls);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,403,375);


(lib.polos = function() {
	this.initialize(img.polos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,407);


(lib.pr1 = function() {
	this.initialize(img.pr1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,73);


(lib.pr2 = function() {
	this.initialize(img.pr2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,73);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.polos();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.676,0.676);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,259,275.2), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.polos();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,383,407), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE0000").s().p("EhUoAjtMAAAhHZMCpRAAAMAAABHZg");
	this.shape.setTransform(541.7,120.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,-108.3,1083.3,457), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-15,-12,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-15,-12,259,107.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button.png
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-63,-10,0.744,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-63,-10,343,143.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(75,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(75,-21,2000,200), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(131.6,140,0.688,0.688,0,0,0,191.3,203.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,263.4,279.9), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pl1();
	this.instance.parent = this;
	this.instance.setTransform(29,9,0.808,0.808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.4,112.6,1,1,0,0,0,129.4,137.6);
	this.instance_1.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-112,-25,301,275.2), null);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pr1();
	this.instance.parent = this;
	this.instance.setTransform(-79,20,0.858,0.858);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pr2.png
	this.instance_1 = new lib.pr2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-79,106,0.858,0.858);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// polos.png
	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-34.5,187.5,1,1,0,0,0,191.5,203.5);
	this.instance_2.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4copy, new cjs.Rectangle(-226,-16,425,407), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pr1();
	this.instance.parent = this;
	this.instance.setTransform(-79,20,0.858,0.858);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pr2.png
	this.instance_1 = new lib.pr2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-79,106,0.858,0.858);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// polos.png
	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-34.5,187.5,1,1,0,0,0,191.5,203.5);
	this.instance_2.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 4
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(92,100.1,1,1.029,0,13.7,0,240,123);
	this.instance_3.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-226,-131.2,1217.7,522.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pls();
	this.instance.parent = this;
	this.instance.setTransform(-59,-29,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.7,113.7,1,1,0,0,0,131.7,139.9);
	this.instance_1.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-59,-29,290.8,282.7), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Prepare
		var _this=this;
		
		window._setCanvasSize = function() {
				var windowSize = WindowSize();
				
				_this.txt.x = windowSize.width * 0.10;
				_this.txt.y = 100;	
			
				_this.button.x = windowSize.width*0.5;
				_this.button.y = 100;	
			
				_this.tren.x = windowSize.width*0.3;
				_this.tren.y = 100;
			
				_this.red.x = windowSize.width*0.9;
				_this.red.y = 100;
			
				_this.foot.x = windowSize.width*0.68;
				_this.foot.y = 100;
			
				_this.back.x = windowSize.width/2;
				_this.back.y = 100;
			
				
				
				_this.tren.scaleX = 1;
				_this.tren.scaleY = 1;
				_this.red.scaleX = 1;
				_this.red.scaleY = 1;
				_this.foot.scaleX = 1;
				_this.foot.scaleY = 1;
				
				_this.txt.scaleX = 1;
				_this.txt.scaleY = 1;
				
				_this.button.scaleX = 1;
				_this.button.scaleY = 1;
				
				_this.tren.visible=true;
				_this.red1.visible=false;
				_this.red.visible=true;
				
				
				if(windowSize.width < 1350){
					_this.tren.visible=true;
				
				_this.txt.x = windowSize.width * 0.12;
			
				_this.button.x = windowSize.width*0.43;	
			
				_this.tren.x = windowSize.width*0.27;
			
				_this.red.x = windowSize.width*0.87;
			
				_this.foot.x = windowSize.width*0.63;
		
					
				}
				
				if(windowSize.width < 1101){
				
				_this.txt.x = windowSize.width * 0.14;
					_this.txt.y = 65;
			
				_this.button.x = windowSize.width*0.145;
					_this.button.y = 155;
			
				_this.tren.visible=false;
			
				_this.red.x = windowSize.width*0.86;
			
				_this.foot.x = windowSize.width*0.45;
					
				}
				
				if(windowSize.width < 1019){
				
				_this.txt.x = 141;
					_this.txt.y = 65;
			
				_this.button.x = 147;
					_this.button.y = 155;
			
				_this.tren.visible=false;
			
				_this.red.x = windowSize.width*0.82;
			
				_this.foot.x = windowSize.width*0.47;
					
				}
				
				if(windowSize.width < 766){
				
				_this.txt.x = 141;
					_this.txt.y = 65;
			
				_this.button.x = 147;
					_this.button.y = 155;
			
				_this.tren.visible=false;
			
				_this.red.x = 620;
			
				_this.foot.x = 358;
					
				}
				
				if(windowSize.width < 755){
					_this.tren.visible=false;
					_this.red1.visible=true;
					_this.red.visible=false;
				
				_this.txt.x = windowSize.width * 0.25;
				_this.txt.y = 45;	
			
				_this.button.x = windowSize.width*0.75;
				_this.button.y = 163;	
			
				_this.red1.x = windowSize.width*0.25;
				_this.red1.y = 143;
			
				_this.foot.x = windowSize.width*0.75;
				_this.foot.y = 80;
			
					
				_this.red1.scaleX = 0.7;
				_this.red1.scaleY = 0.7;
				_this.foot.scaleX = 0.9;
				_this.foot.scaleY = 0.9;
				
				_this.txt.scaleX = 0.7;
				_this.txt.scaleY = 0.7;
				
				_this.button.scaleX = 0.9;
				_this.button.scaleY = 0.9;
					
				}
				
				if(windowSize.width < 455){
					
					_this.tren.visible=false;
					_this.red1.visible=true;
					_this.red.visible=false;
					
				_this.red1.scaleX = 0.6;
				_this.red1.scaleY = 0.6;
				_this.foot.scaleX = 0.8;
				_this.foot.scaleY = 0.8;
				
				_this.txt.scaleX = 0.5;
				_this.txt.scaleY = 0.5;
				
				_this.button.scaleX = 0.7;
				_this.button.scaleY = 0.7;
				
					
				}
				
				if(windowSize.width < 390){
					
					_this.tren.visible=false;
					_this.red1.visible=true;
					_this.red.visible=false;
					
					_this.foot.y = 60;
					
				_this.red1.scaleX = 0.5;
				_this.red1.scaleY = 0.5;
				_this.foot.scaleX = 0.7;
				_this.foot.scaleY = 0.7;
				
				_this.txt.scaleX = 0.5;
				_this.txt.scaleY = 0.5;
				
				_this.button.scaleX = 0.7;
				_this.button.scaleY = 0.7;
				
					
				}
				
				if(windowSize.width < 350){
					
					_this.tren.visible=false;
					_this.red1.visible=true;
					_this.red.visible=false;
					
					_this.foot.y = 60;
					
				_this.red1.scaleX = 0.5;
				_this.red1.scaleY = 0.5;
				_this.foot.scaleX = 0.6;
				_this.foot.scaleY = 0.6;
				
				_this.txt.scaleX = 0.5;
				_this.txt.scaleY = 0.5;
				
				_this.button.scaleX = 0.6;
				_this.button.scaleY = 0.6;
				
					
				}
			
		}
		
		window.onresize=function(){_setCanvasSize();}
		
		//clickTAG
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		
		window.onresize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.txt = new lib.Symbol6();
	this.txt.parent = this;
	this.txt.setTransform(137.1,104.9,0.905,0.905,0,0,0,118.1,40.9);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 6
	this.button = new lib.Symbol2();
	this.button.parent = this;
	this.button.setTransform(555.1,96.1,0.919,0.919,0,0,0,119,56);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 5
	this.foot = new lib.Symbol3();
	this.foot.parent = this;
	this.foot.setTransform(822.1,86.9,0.944,0.944,0,0,0,102,71.8);

	this.timeline.addTween(cjs.Tween.get(this.foot).wait(1));

	// Layer 4 copy
	this.red1 = new lib.Symbol4copy();
	this.red1.parent = this;
	this.red1.setTransform(148.7,123.1,0.895,0.895,0,0,0,68.4,95.2);

	this.timeline.addTween(cjs.Tween.get(this.red1).wait(1));

	// Layer 4
	this.red = new lib.Symbol4();
	this.red.parent = this;
	this.red.setTransform(1072.6,98.1,0.895,0.895,0,0,0,68.4,95.2);

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1));

	// Layer 3
	this.tren = new lib.Symbol5();
	this.tren.parent = this;
	this.tren.setTransform(334.6,90.3,0.868,0.868,0,0,0,99.5,69.3);

	this.timeline.addTween(cjs.Tween.get(this.tren).wait(1));

	// Layer 1
	this.back = new lib.Symbol1();
	this.back.parent = this;
	this.back.setTransform(603.7,101.4,1,1,0,0,0,1058.7,79.4);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(220,-4.6,2279.1,492.5);
// library properties:
lib.properties = {
	width: 1200,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1510742739664", id:"back"},
		{src:"images/button.png?1510742739664", id:"button"},
		{src:"images/logo.png?1510742739664", id:"logo"},
		{src:"images/pl1.png?1510742739664", id:"pl1"},
		{src:"images/pls.png?1510742739664", id:"pls"},
		{src:"images/polos.png?1510742739664", id:"polos"},
		{src:"images/pr1.png?1510742739664", id:"pr1"},
		{src:"images/pr2.png?1510742739664", id:"pr2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;