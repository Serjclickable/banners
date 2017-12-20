(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.her = function() {
	this.initialize(img.her);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,513,594);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,71);


(lib.polosa = function() {
	this.initialize(img.polosa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,310);


(lib.rub500 = function() {
	this.initialize(img.rub500);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,327);


(lib.say = function() {
	this.initialize(img.say);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,357,198);


(lib.slogan = function() {
	this.initialize(img.slogan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,39);


(lib.tabl = function() {
	this.initialize(img.tabl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,120);// helper functions:

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


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.tabl();
	this.instance.parent = this;
	this.instance.setTransform(-693,-25,1.197,1.197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-693,-25,449,143.7), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(318,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.slogan();
	this.instance_1.parent = this;
	this.instance_1.setTransform(313,213);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.polosa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-290,41,1.371,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-290,41,1480.2,310), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol19, null, null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol18, null, null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol17, null, null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol16, null, null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol15, null, null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol14, null, null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol13, null, null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol12, null, null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.say();
	this.instance.parent = this;
	this.instance.setTransform(-513,-243,1.354,1.354);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.her();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-332,-408,1.347,1.347);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-513,-408,871.9,800), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rub500();
	this.instance.parent = this;
	this.instance.setTransform(400,286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(400,286,361,327), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(107.5,220.5,1,1,0,0,0,142.5,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-548,-319,871.9,800), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(98.5,1,1,1,0,0,0,89.5,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(409,207,361,327), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text3.png
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(227.8,315.1,1,1,0,0,0,131.8,51.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:295.1,alpha:1},19).wait(60).to({y:315.1,alpha:0},15).to({_off:true},1).wait(261));

	// medal.png
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(228.1,106.8,0.084,1,0,0,0,83.2,106.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({regX:83.4,scaleX:1,x:227.4,alpha:1},19).wait(60).to({regX:83.2,scaleX:0.08,x:228.1,alpha:0},15).to({_off:true},1).wait(258));

	// text4.png
	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(228.1,312.4,1,1,0,0,0,228.1,48.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({y:292.4,alpha:1},19).wait(60).to({y:312.4,alpha:0},15).to({_off:true},4).wait(174));

	// money1.png
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(228.2,98.6,0.084,1,0,0,0,95.8,98.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).to({regX:95.1,scaleX:1,x:228.1,alpha:1},19).wait(60).to({regX:95.8,scaleX:0.08,x:228.2,alpha:0},15).to({_off:true},1).wait(174));

	// text2.png
	this.instance_4 = new lib.Symbol15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(227.6,317.8,1,1,0,0,0,139.6,53.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(170).to({_off:false},0).to({y:297.8,alpha:1},19).wait(60).to({y:317.8,alpha:0},15).to({_off:true},5).wait(87));

	// touch.png
	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(228.2,104.2,0.084,1,0,0,0,93.4,93.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).to({regX:93.2,scaleX:1,alpha:1},19).wait(60).to({regX:93.4,scaleX:0.08,alpha:0},15).to({_off:true},1).wait(87));

	// text1.png
	this.instance_6 = new lib.Symbol17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(226.7,318.1,1,1,0,0,0,218.7,54.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(257).to({_off:false},0).to({y:298.1,alpha:1},19).wait(60).to({y:318.1,alpha:0},15).wait(5));

	// money.png copy
	this.instance_7 = new lib.Symbol18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(228.2,113,0.084,1,0,0,0,93.4,113);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(261).to({_off:false},0).to({regX:93.2,scaleX:1,alpha:1},19).wait(60).to({regX:93.4,scaleX:0.08,alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
		    var s = getWindowSize(), w = s.iw, h = s.ih,
				_port = w < h, _land = w > h,
				_mob = w < h && w < 420 && h < 750 || w > h && h < 420 && w < 750;
		    
		    var min_w = 600;
			var min_h = 600;
			
			var EL = {
		
				/* --- Main --- */
				
				logo : {
					x : _port ? w * 0.65 : w * 0.5,
					y : _port ? h * 0 : h * 0,
					s : _land && !_mob ? 0.8 : 1
				},
		
				button : {
					x : _port ? w * 0.5 : w * 0.26,
					y : _port ? h * 0.35 : h * 0.85,
					s : _land && !_mob ? 0.9 : 1
				},
				
				/* --- Main --- */		
				
				tank : {
					x : _port ? w * 0 : w * 0,
					y : _port ? h * 0 : h * 0,
					s : _land && !_mob ? 0.9 : 0.9
				},
		
				rightpr : {
					x : _port ? w * 0.75 : w * 0.8,
					y : _port ? h * 0.9 : h * 0.9,
					s : _port && _mob ? 0.9 : 1.1
				}
			};
			
			var new_scale = (w / min_w < 1 ? w / min_w : 1) * (h / min_h < 1 ? h / min_h : 1);
			Object.keys(EL).forEach(key => {
				_this[key].x = EL[key].x; _this[key].y = EL[key].y;
				_this[key].scaleX = _this[key].scaleY = EL[key].s  * new_scale;
				"c" in EL[key] && ((parent, value) => {
					Object.keys(value).forEach(key => {
						parent[key] = value[key];
					});
				})(_this[key], EL[key].c);
			});
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 7
	this.rightpr = new lib.Symbol36();
	this.rightpr.parent = this;
	this.rightpr.setTransform(801,664.5,1,1,0,0,0,-35,220.5);

	this.timeline.addTween(cjs.Tween.get(this.rightpr).wait(1));

	// Layer 4
	this.tank = new lib.Symbol33();
	this.tank.parent = this;
	this.tank.setTransform(0.1,0,1,1,0,0,0,432.4,205.6);

	this.timeline.addTween(cjs.Tween.get(this.tank).wait(1));

	// Layer 1
	this.txt = new lib.Symbol11();
	this.txt.parent = this;
	this.txt.setTransform(510.4,311.3,1,1,0,0,0,228.1,176.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Symbol 18
	this.button = new lib.Symbol32();
	this.button.parent = this;
	this.button.setTransform(283.5,644,1,1,0,0,0,-468.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 3
	this.logo = new lib.Symbol29();
	this.logo.parent = this;
	this.logo.setTransform(563.8,0.1,1.308,1.308,0,0,0,483.2,128);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,270.3,1936.2,1038.7);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/her.png?1513786250376", id:"her"},
		{src:"images/logo.png?1513786250376", id:"logo"},
		{src:"images/polosa.png?1513786250376", id:"polosa"},
		{src:"images/rub500.png?1513786250376", id:"rub500"},
		{src:"images/say.png?1513786250376", id:"say"},
		{src:"images/slogan.png?1513786250376", id:"slogan"},
		{src:"images/tabl.png?1513786250376", id:"tabl"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;