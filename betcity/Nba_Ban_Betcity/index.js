(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,667,352);


(lib.blick = function() {
	this.initialize(img.blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,73);


(lib.block = function() {
	this.initialize(img.block);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,26);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,127);


(lib.carry = function() {
	this.initialize(img.carry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,609,627);


(lib.coeficie = function() {
	this.initialize(img.coeficie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,25);


(lib.fast = function() {
	this.initialize(img.fast);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,32);


(lib.hight = function() {
	this.initialize(img.hight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,33);


(lib.Layer15 = function() {
	this.initialize(img.Layer15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,942);


(lib.Layer18 = function() {
	this.initialize(img.Layer18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,381,688);


(lib.Layer6 = function() {
	this.initialize(img.Layer6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,27);


(lib.Layer7 = function() {
	this.initialize(img.Layer7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,374,795);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,28);


(lib.nonono = function() {
	this.initialize(img.nonono);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,34);


(lib.polosa = function() {
	this.initialize(img.polosa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,176);


(lib.rele = function() {
	this.initialize(img.rele);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,41);


(lib.set = function() {
	this.initialize(img.set);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,35);// helper functions:

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


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,314,127), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,667,352), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blick();
	this.instance.parent = this;
	this.instance.setTransform(-2,-2,1.055,1.055);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-2,-2,77,77), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.polosa();
	this.instance.parent = this;
	this.instance.setTransform(131,176,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,131,176), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.polosa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,131,176), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,381,688), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rele();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,238,41), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.set();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,245,35), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.carry();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.846,0.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,515,530.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nonono();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,237,34), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.block();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,253,26), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.925,0.925);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,346,735.4), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coeficie();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,264,25), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hight();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,251,33), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fast();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.137,1.137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,216,36.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.422,1.422);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,263.1,39.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,404,942), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(157,63.5,1,1,0,0,0,157,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,314,127), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(340.5,176,1,1,0,0,0,333.5,176);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:320.5},149).to({x:340.5},150).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,0,667,352);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 8
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(486.6,16.6,0.151,0.151,0,0,0,36.5,36.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(123).to({_off:false},0).to({scaleX:1,scaleY:1,x:486.5,y:16.5,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(18));

	// Layer 1 copy 9
	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.6,36.6,0.205,0.205,0,0,0,36.5,36.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(132).to({_off:false},0).to({scaleX:1,scaleY:1,x:106.5,y:36.5,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(9));

	// Layer 1 copy 10
	this.instance_2 = new lib.Symbol18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(376.6,6.6,0.205,0.205,0,0,0,36.5,36.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(141).to({_off:false},0).to({scaleX:1,scaleY:1,x:376.5,y:6.5,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).wait(1));

	// Layer 1 copy 11
	this.instance_3 = new lib.Symbol18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96.5,-33.5,0.178,0.178,0,0,0,36.5,36.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(114).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(27));

	// Layer 1 copy 12
	this.instance_4 = new lib.Symbol18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(246.5,26.5,0.178,0.178,0,0,0,36.5,36.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(105));

	// Layer 1 copy 13
	this.instance_5 = new lib.Symbol18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(546.5,-23.5,0.178,0.178,0,0,0,36.5,36.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(79));

	// Layer 1 copy 15
	this.instance_6 = new lib.Symbol18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(416.5,36.5,0.178,0.178,0,0,0,36.5,36.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(97).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(44));

	// Layer 1 copy 4
	this.instance_7 = new lib.Symbol18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(36.5,-53.5,0.178,0.178,0,0,0,36.5,36.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(69));

	// Layer 1 copy 5
	this.instance_8 = new lib.Symbol18();
	this.instance_8.parent = this;
	this.instance_8.setTransform(206.6,-33.4,0.151,0.151,0,0,0,36.5,36.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:206.5,y:-33.5,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(115));

	// Layer 1 copy 6
	this.instance_9 = new lib.Symbol18();
	this.instance_9.parent = this;
	this.instance_9.setTransform(446.6,-13.4,0.151,0.151,0,0,0,36.5,36.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(87).to({_off:false},0).to({scaleX:1,scaleY:1,x:446.5,y:-13.5,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(54));

	// Layer 1 copy 7
	this.instance_10 = new lib.Symbol18();
	this.instance_10.parent = this;
	this.instance_10.setTransform(56.5,96.5,0.178,0.178,0,0,0,36.5,36.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(131));

	// Layer 1 copy 2
	this.instance_11 = new lib.Symbol18();
	this.instance_11.parent = this;
	this.instance_11.setTransform(26.5,136.5,0.178,0.178,0,0,0,36.5,36.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(97));

	// Layer 1 copy 3
	this.instance_12 = new lib.Symbol18();
	this.instance_12.parent = this;
	this.instance_12.setTransform(586.5,36.5,0.178,0.178,0,0,0,36.5,36.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(53).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(88));

	// Layer 1 copy
	this.instance_13 = new lib.Symbol18();
	this.instance_13.parent = this;
	this.instance_13.setTransform(66.6,-13.4,0.151,0.151,0,0,0,36.5,36.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(106).to({_off:false},0).to({scaleX:1,scaleY:1,x:66.5,y:-13.5,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(35));

	// Layer 1
	this.instance_14 = new lib.Symbol18();
	this.instance_14.parent = this;
	this.instance_14.setTransform(36.6,56.6,0.151,0.151,0,0,0,36.5,36.5);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1,scaleY:1,x:36.5,y:56.5,alpha:1},3,cjs.Ease.cubicOut).to({alpha:0},6,cjs.Ease.cubicIn).to({_off:true},1).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.8,50.8,11.6,11.6);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AoHjvIQPAAIAAHfIwPAAg");
	this.shape.setTransform(-245.9,-118.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(100,55,22,0.988)").s().p("AoHDwIAAnfIQPAAIAAHfg");
	this.shape_1.setTransform(-245.9,-118.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(36.5,36.5,1,1,0,0,0,36.5,36.5);
	this.instance.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-298.9,-143.9,341.3,206.3), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(64.5,154.5,1,1,0,0,0,36.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(333.5,176,1,1,0,0,0,333.5,176);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-270.4,-25.4,944.5,377.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(243.5,103,1,1,0,0,0,65.5,88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({x:271.5,y:-12},5,cjs.Ease.backIn).wait(20).to({x:240.5,y:110},5,cjs.Ease.backOut).wait(67).to({x:271.5,y:-12},5,cjs.Ease.backIn).wait(21).to({x:341.5},0).to({x:310.5,y:110},6,cjs.Ease.backOut).wait(61).to({x:341.5,y:-12},6,cjs.Ease.backIn).to({x:251.5},22).to({x:223.5,y:96},6,cjs.Ease.backOut).wait(61).to({x:251.5,y:-12},6,cjs.Ease.backIn).to({x:271.5},20,cjs.Ease.backOut).to({x:243.5,y:103},4,cjs.Ease.backOut).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(410.5,404,1,1,0,0,0,65.5,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({x:380.5,y:521},5,cjs.Ease.backIn).wait(20).to({x:-120.5,y:509},0).to({x:-90.5,y:389},5,cjs.Ease.backOut).wait(67).to({x:-120.5,y:509},5,cjs.Ease.backIn).wait(21).to({x:-90.5,y:389},6,cjs.Ease.backOut).wait(61).to({x:-120.5,y:509},6,cjs.Ease.backIn).wait(22).to({x:-94.5,y:403},6,cjs.Ease.backOut).wait(61).to({x:-120.5,y:509},6,cjs.Ease.backIn).to({x:380.5,y:521},20,cjs.Ease.backOut).to({x:410.5,y:404},4,cjs.Ease.backOut).wait(1));

	// удобные.png
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-302.9,170.5,1,1,0,0,0,119,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(280).to({x:75,y:224.5},9,cjs.Ease.backOut).wait(72).to({x:-302.9,y:170.5},8,cjs.Ease.backIn).to({_off:true},1).wait(15));

	// настройки.png
	this.instance_3 = new lib.Symbol11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-288.4,381.5,1,1,0,0,0,122.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(280).to({x:133.5,y:268.5},9,cjs.Ease.backOut).wait(72).to({x:-288.4,y:381.5},8,cjs.Ease.backIn).to({_off:true},1).wait(15));

	// 4
	this.instance_4 = new lib.Symbol13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(754.5,488,1,1,0,0,0,190.5,344);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(274).to({x:434.5,y:453},11,cjs.Ease.cubicOut).to({x:420.5,y:452},81).to({x:-307.4,y:370},8,cjs.Ease.cubicIn).to({_off:true},1).wait(10));

	// никаких.png
	this.instance_5 = new lib.Symbol9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-305.5,174,1,1,0,0,0,118.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(185).to({x:86.5,y:225},9,cjs.Ease.backOut).wait(76).to({x:-305.5,y:174},9,cjs.Ease.backIn).to({_off:true},1).wait(105));

	// блокировок.png
	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-307.4,400,1,1,0,0,0,126.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(185).to({x:133.5,y:271},9,cjs.Ease.backOut).wait(76).to({x:-307.4,y:400},9,cjs.Ease.backIn).to({_off:true},1).wait(105));

	// 3
	this.instance_7 = new lib.Symbol10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-430.4,523.1,1,1,0,0,0,257.5,265.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(179).to({x:247.5,y:374.1},10,cjs.Ease.cubicOut).to({x:257.5,y:370.1},75).to({rotation:-10,x:682.4,y:324.1},9,cjs.Ease.cubicIn).to({_off:true},7).wait(105));

	// коэффициенты.png
	this.instance_8 = new lib.Symbol6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-278.9,399.5,1,1,0,0,0,132,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({x:107,y:275.5},10,cjs.Ease.backOut).wait(70).to({x:-278.9,y:399.5},9,cjs.Ease.backIn).to({_off:true},1).wait(206));

	// высокие.png
	this.instance_9 = new lib.Symbol5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-285.4,156.5,1,1,0,0,0,125.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({x:74.5,y:228.5},10,cjs.Ease.backOut).wait(70).to({x:-285.4,y:156.5},9,cjs.Ease.backIn).to({_off:true},1).wait(206));

	// 2
	this.instance_10 = new lib.Symbol7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(653,630.7,1,1,0,0,0,173,367.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(84).to({x:332,y:477.7},9,cjs.Ease.cubicOut).to({x:323,y:472.7},81).to({x:-290.9,y:158.8},10,cjs.Ease.cubicIn).to({_off:true},1).wait(200));

	// выплаты.png
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(110.5,272.9,1,1,0,0,0,131.5,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(79).to({x:-266.4,y:369.9},10,cjs.Ease.backIn).wait(286).to({x:110.5,y:272.9},9,cjs.Ease.backOut).wait(1));

	// Быстрые.png
	this.instance_12 = new lib.Symbol4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(57,223.2,1,1,0,0,0,108,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(79).to({x:-272.9,y:153.2},10,cjs.Ease.backIn).wait(286).to({x:57,y:223.2},9,cjs.Ease.backOut).wait(1));

	// 1
	this.instance_13 = new lib.Symbol2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(274.7,467.3,1,1,0,0,0,202,471);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:284,y:458},74).to({x:674,y:326},9,cjs.Ease.cubicIn).wait(285).to({x:-346.9,y:631},0).wait(1).to({x:274,y:468},10,cjs.Ease.cubicOut).to({x:274.7,y:467.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-687.9,-3.7,1632.9,1002.1);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(157,63.5,1,1,0,0,0,157,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:157.1,y:63.6},0).wait(2).to({scaleX:1,scaleY:1,x:157,y:63.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,127);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(246,238.5,1,1,0,0,0,157,63.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol24(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(443.5,368,1,1,0,0,0,338.5,471);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Layer6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(60,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(324.5,152,1,1,0,0,0,333.5,176);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263,45.8,1632.9,1002.1);
// library properties:
lib.properties = {
	id: '64770393B20E4AE58D4920E5CD376263',
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1509009509407", id:"back"},
		{src:"images/blick.png?1509009509407", id:"blick"},
		{src:"images/block.png?1509009509407", id:"block"},
		{src:"images/btn.png?1509009509407", id:"btn"},
		{src:"images/carry.png?1509009509407", id:"carry"},
		{src:"images/coeficie.png?1509009509407", id:"coeficie"},
		{src:"images/fast.png?1509009509407", id:"fast"},
		{src:"images/hight.png?1509009509407", id:"hight"},
		{src:"images/Layer15.png?1509009509407", id:"Layer15"},
		{src:"images/Layer18.png?1509009509407", id:"Layer18"},
		{src:"images/Layer6.png?1509009509407", id:"Layer6"},
		{src:"images/Layer7.png?1509009509407", id:"Layer7"},
		{src:"images/money.png?1509009509407", id:"money"},
		{src:"images/nonono.png?1509009509407", id:"nonono"},
		{src:"images/polosa.png?1509009509407", id:"polosa"},
		{src:"images/rele.png?1509009509407", id:"rele"},
		{src:"images/set.png?1509009509407", id:"set"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['64770393B20E4AE58D4920E5CD376263'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;