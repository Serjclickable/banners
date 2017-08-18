(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.Bestcontor = function() {
	this.initialize(img.Bestcontor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,544,46);


(lib.blackp = function() {
	this.initialize(img.blackp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,304);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,100);


(lib.e2017 = function() {
	this.initialize(img.e2017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,46);


(lib.fastpidr = function() {
	this.initialize(img.fastpidr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,582);


(lib.gorilla = function() {
	this.initialize(img.gorilla);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,612);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,83);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,113);


(lib.money2 = function() {
	this.initialize(img.money2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,110);


(lib.nottouch = function() {
	this.initialize(img.nottouch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,101);


(lib.people = function() {
	this.initialize(img.people);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,763,254);


(lib.pidr = function() {
	this.initialize(img.pidr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,407,482);


(lib.shopn = function() {
	this.initialize(img.shopn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,105);


(lib.tank = function() {
	this.initialize(img.tank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,614);// helper functions:

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


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(26,157);

	this.instance_1 = new lib.shopn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.blackp();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,174,304), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.nottouch();
	this.instance.parent = this;
	this.instance.setTransform(18,166);

	this.instance_1 = new lib.money2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.blackp();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,174,304), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.e2017();
	this.instance.parent = this;
	this.instance.setTransform(-201.5,78.2,1.557,1.557);

	this.instance_1 = new lib.Bestcontor();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-466.1,15.9,1.557,1.557);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-466.1,15.9,846.8,133.9), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZA+QAGgkAUgjQAMgVANgPIhFAAIAAgQIBXAAIAAAOQgGAGgKAOQgKAPgIAQQgIAQgDAOIgGAcg");
	this.shape.setTransform(232.5,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHA/IAAhYIgdAAIAAgMQARgCAGgEQAHgEADgPIAMAAIAAB9g");
	this.shape_1.setTransform(221.5,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAtQgJgQAAgcQgBgVAGgPQALgdAaAAQAYAAALAVQAJAPgBAbQABAZgIARQgMAYgYAAQgWAAgLgUgAgTgkQgHANABAYQgBAUAFALQAGASAPAAQAMAAAHgLQAIgLgBgcQABgWgGgNQgFgOgPAAQgNAAgHANg");
	this.shape_2.setTransform(212.4,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqA/QABgQAFgMQAGgMARgKIAQgKQAMgFAEgFQAHgHAAgKQAAgLgGgGQgHgHgLAAQgPAAgHANQgDAGAAAMIgQAAQAAgQAGgLQAKgSAZAAQAVAAAKAMQALALgBAPQAAAPgKAJQgGAHgQAJIgLAGIgNAJQgKAIgBAJIBDAAIAAAPg");
	this.shape_3.setTransform(202.4,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATBAIgdgvIgNAMIAAAjIgPAAIAAh/IAPAAIAABJIAngmIAVAAIgkAiIAmA6g");
	this.shape_4.setTransform(188.6,9.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgXQAAgWANgOQAMgOATAAQAKAAAJAFQAJAEAFAIQAFAHACAJIABAUIhEAAQABAPAGAIQAGAJANAAQAMAAAHgIQAEgFACgGIAQAAIgEALQgEAHgEAEQgHAHgLACQgGACgGAAQgRAAgMgNgAAbgHQgBgLgEgGQgGgLgPAAQgKAAgHAIQgIAIAAAMIAzAAIAAAAg");
	this.shape_5.setTransform(178.4,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAlQgNgNAAgXQAAgWANgOQAMgOATAAQAKAAAJAFQAJAEAFAIQAFAHACAJIABAUIhEAAQABAPAGAIQAGAJANAAQAMAAAHgIQAEgFACgGIAQAAIgEALQgEAHgEAEQgHAHgLACQgGACgGAAQgRAAgMgNgAAbgHQgBgLgEgGQgGgLgPAAQgKAAgHAIQgIAIAAAMIAzAAIAAAAg");
	this.shape_6.setTransform(168.4,11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBAIgdhqIgdBqIgSAAIgih/IATAAIAYBnIAdhnIASAAIAdBnIAZhnIATAAIgiB/g");
	this.shape_7.setTransform(155.4,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaA9QgKgHgBgOIAQAAQABAGADADQAGAFALABQASAAAFgNIADgLIAAgQQgFAHgGADQgHAEgKAAQgPAAgLgKQgMgMAAgXQAAgZAMgNQALgNAQAAQAKAAAIAGQAFACAEAHIAAgNIAPAAIAABWQAAARgFALQgKATgaAAQgQAAgKgHgAgUglQgEAIAAAOQAAAPAGAIQAHAIALAAQAQAAAHgPQADgIAAgMQABgRgIgJQgHgIgLAAQgPAAgGAQg");
	this.shape_8.setTransform(136.5,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWAwIAAg7QAAgIgDgFQgDgJgMAAIgIABQgHACgEAGQgEAEgBAGIgCANIAAAxIgPAAIAAhdIAOAAIAAANQAIgIAHgEQAHgDAJAAQATAAAIANQADAJAAAOIAAA7g");
	this.shape_9.setTransform(126.9,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_10.setTransform(119.9,9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvAwIAAhBQAAgJgFgDQgEgEgIAAQgJAAgHAGQgGAHAAAOIAAA2IgPAAIAAg8QAAgKgCgFQgEgGgKAAQgJAAgHAHQgIAHAAASIAAAxIgPAAIAAhdIAPAAIAAANIALgKQAHgFAKAAQALAAAIAGQACACADAHQAGgIAHgEQAHgDAIAAQAUAAAGANQAFAIAAANIAAA9g");
	this.shape_11.setTransform(110.5,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjAqQgJgIABgMQgBgNAJgHQAIgGAOgCIAYgDQAFgBACgEIABgGQAAgIgGgEQgGgDgJAAQgNAAgFAGQgDAEAAAHIgQAAQABgRALgHQALgHAOAAQAQAAAKAHQAKAGAAANIAAA2IABAEQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIACAAIACAAIAAALIgFACIgFAAQgIAAgEgGQgCgDAAgGQgGAHgJAEQgIAFgKAAQgNAAgJgIgAALACIgJACIgIABQgJABgFADQgHAEAAAJQAAAHAFAEQAFADAHAAQAJAAAGgDQAOgHAAgOIAAgMIgIACg");
	this.shape_12.setTransform(98.1,11.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnA1QgSgTAAggQAAggARgTQARgSAZAAQASAAANAHQATAKAEAZIgRAAQgDgNgKgHQgKgGgPgBQgQAAgMAOQgMAOAAAZQAAAXAKAOQAKAPAVAAQARAAALgKQAMgLAAgWIgoAAIAAgOIA4AAIAABEIgLAAIgEgQQgJAJgHAFQgLAGgRAAQgWAAgQgPg");
	this.shape_13.setTransform(85.6,9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWAwIAAg7QAAgIgCgFQgFgJgLAAIgIABQgGACgFAGQgEAEgCAGIgBANIAAAxIgQAAIAAhdIAPAAIAAANQAIgIAHgEQAIgDAHAAQAVAAAGANQAFAJAAAOIAAA7g");
	this.shape_14.setTransform(69,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjAqQgJgIAAgMQAAgNAJgHQAIgGAOgCIAXgDQAGgBACgEIABgGQAAgIgGgEQgFgDgKAAQgMAAgGAGQgCAEgCAHIgOAAQAAgRALgHQALgHAOAAQAQAAAKAHQAKAGAAANIAAA2IABAEQABAAAAAAQAAABABAAQAAAAABAAQABAAABAAIACAAIACAAIAAALIgFACIgFAAQgJAAgDgGQgCgDgBgGQgFAHgIAEQgJAFgKAAQgOAAgIgIgAALACIgJACIgJABQgIABgEADQgIAEAAAJQAAAHAFAEQAGADAGAAQAIAAAIgDQANgHgBgOIAAgMIgHACg");
	this.shape_15.setTransform(59.1,11.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_16.setTransform(52,9.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAoQgJgJAAgOIAPAAQAAAIAEAEQAGAHAOAAQAJAAAHgDQAHgEAAgIQAAgGgGgDQgDgCgLgCIgLgEQgNgDgFgCQgLgHAAgLQAAgOAKgIQAKgIAQAAQAVAAAJANQAGAHAAAKIgPAAQAAgGgEgEQgFgGgNAAQgJAAgFADQgFADAAAGQAAAGAHAEQADACAHACIAKACQARAEAGADQAJAGAAANQAAANgJAJQgKAJgUAAQgUAAgJgKg");
	this.shape_17.setTransform(45.5,11.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdAoQgJgJAAgOIAPAAQAAAIAEAEQAGAHAOAAQAJAAAHgDQAHgEAAgIQAAgGgGgDQgDgCgLgCIgLgEQgNgDgFgCQgLgHAAgLQAAgOAKgIQAKgIAQAAQAVAAAJANQAGAHAAAKIgPAAQAAgGgEgEQgFgGgNAAQgJAAgFADQgFADAAAGQAAAGAHAEQADACAHACIAKACQARAEAGADQAJAGAAANQAAANgJAJQgKAJgUAAQgUAAgJgKg");
	this.shape_18.setTransform(36.5,11.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghAjQgDgHAAgMIAAg/IAQAAIAAA9QAAAHACAFQAEAIALAAQAPAAAGgOQADgIAAgNIAAguIAQAAIAABdIgPAAIAAgOQgDAFgEAEQgJAHgMAAQgTAAgIgNg");
	this.shape_19.setTransform(26.9,11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAgBAIgCgEIgBgKIgBgWQgBgMgIgFQgFgCgKAAIgmAAIAAA3IgSAAIAAh/IA6AAQAOAAAKADQASAJAAAWQAAAMgFAHQgFAHgJAEQAIADAEAFQAEAFAAAMIABARIABALQACAGADACIAAACgAgigFIAmAAQAMAAAHgEQAHgGAAgMQAAgOgKgFQgFgDgIAAIgpAAg");
	this.shape_20.setTransform(15.9,9.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AABAJIgMARIgJgGIANgRIgTgFIADgKIATAHIAAgUIAJAAIAAAUIATgHIAEAKIgTAFIAMARIgJAGg");
	this.shape_21.setTransform(5.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,239.6,22), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fastpidr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,567,582), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tank();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,476,614), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gorilla();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,520,612), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.people();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,763,254), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pidr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMEoQhVgIiagiQikgjhLgJQhVgKh8gBQiMAAhGgBQgZAAgKgJQgLgLABgeIANloQABgYgBgNIgBgUQAAgLAFgHQALgPAgADQAwAFA8AUQAeAJBMAeQCpBACUAjQBxAbDUAfQGaA7COATQBWAKAsANQBHAWAoAqQAbAcgDAZQgFAmhEASQjfA8iFAWQiIAWh2AAQg4AAg0gEg");
	this.shape.setTransform(87.2,436.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,407,482), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(-44,-33,1.086,1.086);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-44,-33,1112,834), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-25,2,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-25,2,363.6,74.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(272,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(272,120,272,83), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(260,306,1,1,0,0,0,260,306);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:315.9},38,cjs.Ease.get(-1)).to({y:326},39,cjs.Ease.get(1)).to({y:316},39,cjs.Ease.get(-1)).to({y:306},39,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,520,612);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(238,307,1,1,0,0,0,238,307);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:316.9},38,cjs.Ease.get(-1)).to({y:327},39,cjs.Ease.get(1)).to({y:317},39,cjs.Ease.get(-1)).to({y:307},39,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,476,614);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.logo = new lib.Symbol3();
	this.logo.parent = this;
	this.logo.setTransform(134.4,31,1.033,1.033,0,0,0,90,28);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(322.5,126.1,281.1,85.8), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(394.5,464,1,1,0,0,0,394.5,464);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.3,y:464.1},19,cjs.Ease.get(-1)).to({regX:394.6,rotation:9,x:394.7},20,cjs.Ease.get(1)).to({rotation:4.3,x:394.6},20,cjs.Ease.get(-1)).to({regX:394.5,rotation:0,x:394.5,y:464},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,567,582);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(-1144.5,127,1,1,0,0,0,381.5,127);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1144.5,127,1,1,0,0,0,381.5,127);

	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-381.5,127,1,1,0,0,0,381.5,127);

	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(381.5,127,1,1,0,0,0,381.5,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1526,0,3052,254), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(1734.5,106,1,1,0,0,0,381.5,127);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:208.5},259).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-21,3052,254);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.5,241,1,1,0,0,0,203.5,241);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,0,407,482), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(115.5,33.5,1,1,0,0,0,115.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.98,scaleY:0.98,x:115.6,y:33.6},2,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,y:33.5},3,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96,y:33.6},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:115.5,y:33.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,2,363.6,74.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3_1();
	this.instance.parent = this;
	this.instance.setTransform(203.5,241,1,1,0,0,0,203.5,241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,407,482), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(115.5,33.5,1,1,0,0,0,115.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,2,363.6,74.4);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(82.5,432,1,1,0,0,0,82.5,432);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.3},19,cjs.Ease.get(-1)).to({rotation:-10.9,x:82.6,y:432.1},20,cjs.Ease.get(1)).to({regY:432.1,rotation:-5.3},20,cjs.Ease.get(-1)).to({regY:432,rotation:0,x:82.5,y:432},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,407,482);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(-297.7,50.8,1.368,1.368,0,0,0,115.6,33.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-470.5,-142,1,1,0,0,0,283.5,291);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-60.5,-180,1,1,0,0,0,203.5,241);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-754,-433,897,582), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
		    var s = getWindowSize();
			
				defaultScale = 1,
			
				minWidth = 600,
				minHeight = 600,
			
				scaleW = s.iw / minWidth,
				scaleH = s.ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Position */
			
			_this.logo.x = s.iw * 0.5;
			_this.logo.y = s.ih * 0.25;
			
			_this.txt.x = s.iw * 0.5;
			_this.txt.y = s.ih * 0.10;
		
			_this.tank.x = s.iw * 0.2;
			_this.tank.y = s.ih * 0.5;	
			
			_this.vans.x = s.iw * 0.9;
			_this.vans.y = s.ih * 0.5;
			
			_this.button.x = s.iw * 0.5;
			_this.button.y = s.ih * 0.74;
			
			_this.back.x = s.iw * 0.5;
			_this.back.y = s.ih * 0.5;
			
			_this.leftpr.x = s.iw * 0.1;
			_this.leftpr.y = s.ih * 0.75;
			
			_this.rightpr.x = s.iw * 0.9;
			_this.rightpr.y = s.ih * 0.75;
			
			_this.people.x = s.iw * 0.5;
			_this.people.y = s.ih * 0.5;
			
			_this.txtnew.x = s.iw * 0.5;
			_this.txtnew.y = s.ih * 0.95;
			
			function setScale(scale) {
				//_this.girl.scaleX = _this.girl.scaleY = ((s.iw < s.ih) ? scale * 0.8 : scale * 0.7);
				//_this.logo.scaleX = _this.logo.scaleY = ((s.iw < s.ih) ? scale * 1.1 : scale);
				//_this.pr.scaleX = _this.pr.scaleY = ((s.iw < s.ih) ? scale * 0.6 : scale);
				
				_this.logo.scaleX = _this.logo.scaleY = scale;
				_this.txt.scaleX = _this.txt.scaleY = ((s.iw < 961) ? scale * 0.7 :(s.iw < s.ih) ? scale * 0.9 : scale);
				_this.tank.scaleX = _this.tank.scaleY = scale;
				_this.vans.scaleX = _this.vans.scaleY = scale;
				_this.button.scaleX = _this.button.scaleY = ((s.iw < s.ih && (s.iw < 769)) ? scale :scale * 0.9);
				_this.back.scaleX = _this.back.scaleY = ((s.iw < s.ih) ? scale * 1.8 : scale * 1.6);
				_this.leftpr.scaleX = _this.leftpr.scaleY = scale;
				_this.rightpr.scaleX = _this.rightpr.scaleY = scale;
				_this.people.scaleX = _this.people.scaleY = scale;
				_this.txtnew.scaleX = _this.txtnew.scaleY = scale * 0.8;
				
				
			}
			
			setScale(defaultScale);
		
		    /* Rescale */
		
		    if(s.iw < minWidth) {
		        setScale(scaleW);
		    }
		
		    if(s.ih < minHeight) {
		        setScale(scaleH);
		    }
		
		    if(s.iw < minWidth && s.ih < minHeight) {
		        setScale(scaleWH);
		    }
			
			if(s.iw < s.ih) {
				
				_this.leftpr.visible = false;
				_this.rightpr.visible = false;
				_this.txtnew.visible = true;
				
				_this.people.x = s.iw * 0.5;
				_this.people.y = s.ih * 0.35;
				
				_this.txtnew.x = s.iw * 0.5;
				_this.txtnew.y = s.ih * 0.98;
				
				if(s.iw < 769) {
					
				_this.logo.x = s.iw * 0.5;
				_this.logo.y = s.ih * 0.20;		
					
				_this.tank.x = s.iw * 0.21;
				_this.tank.y = s.ih * 0.53;
				
				_this.vans.x = s.iw * 0.9;
				_this.vans.y = s.ih * 0.55;
					
				_this.button.x = s.iw * 0.5;
				_this.button.y = s.ih * 0.8;	
						}
					
				
			}
			
			if(s.iw > s.ih) {
				
				_this.leftpr.visible = true;
				_this.rightpr.visible = true;
				_this.txtnew.visible = true;
				
				_this.txtnew.x = s.iw * 0.5;
				_this.txtnew.y = s.ih * 0.97;
				
				if(s.iw < 961) {
				
				_this.txtnew.visible = false;
					
				_this.tank.x = s.iw * 0.15;
				_this.tank.y = s.ih * 0.50;
				
				_this.vans.x = s.iw * 0.95;
				_this.vans.y = s.ih * 0.55;
						}
			}
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txtnew = new lib.Symbol14();
	this.txtnew.parent = this;
	this.txtnew.setTransform(511.1,738.5,1,1,0,0,0,119.8,11);

	this.timeline.addTween(cjs.Tween.get(this.txtnew).wait(1));

	// Symbol 26
	this.txt = new lib.Symbol30();
	this.txt.parent = this;
	this.txt.setTransform(510,78.6,1,1,0,0,0,-46.9,83.8);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 3
	this.logo = new lib.Symbol29();
	this.logo.parent = this;
	this.logo.setTransform(510,194.1,1,1,0,0,0,461,168.3);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Layer 7
	this.rightpr = new lib.Symbol36();
	this.rightpr.parent = this;
	this.rightpr.setTransform(923,596,1,1,0,0,0,87,152);

	this.timeline.addTween(cjs.Tween.get(this.rightpr).wait(1));

	// Layer 6
	this.leftpr = new lib.Symbol35();
	this.leftpr.parent = this;
	this.leftpr.setTransform(102,601,1,1,0,0,0,87,152);

	this.timeline.addTween(cjs.Tween.get(this.leftpr).wait(1));

	// Symbol 18
	this.button = new lib.Symbol32();
	this.button.parent = this;
	this.button.setTransform(510,544,1,1,0,0,0,-242,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 4
	this.tank = new lib.Symbol33();
	this.tank.parent = this;
	this.tank.setTransform(192,385,1,1,0,0,0,238,307);

	this.timeline.addTween(cjs.Tween.get(this.tank).wait(1));

	// Layer 5
	this.vans = new lib.Symbol34();
	this.vans.parent = this;
	this.vans.setTransform(973,405,1,1,0,0,0,260,306);

	this.timeline.addTween(cjs.Tween.get(this.vans).wait(1));

	// Layer 8
	this.people = new lib.Symbol5();
	this.people.parent = this;
	this.people.setTransform(510,382,1,1,0,0,0,381,148);

	this.timeline.addTween(cjs.Tween.get(this.people).wait(1));

	// Layer 2
	this.back = new lib.Symbol2();
	this.back.parent = this;
	this.back.setTransform(512,385,1,1,0,0,0,512,384);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(466,352,3054,834);
// library properties:
lib.properties = {
	id: 'FD400AA1CA164858827D9B8B1676C338',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1502963756558", id:"back"},
		{src:"images/Bestcontor.png?1502963756558", id:"Bestcontor"},
		{src:"images/blackp.png?1502963756558", id:"blackp"},
		{src:"images/button.png?1502963756558", id:"button"},
		{src:"images/e2017.png?1502963756558", id:"e2017"},
		{src:"images/fastpidr.png?1502963756558", id:"fastpidr"},
		{src:"images/gorilla.png?1502963756558", id:"gorilla"},
		{src:"images/logo.png?1502963756558", id:"logo"},
		{src:"images/money.png?1502963756558", id:"money"},
		{src:"images/money2.png?1502963756558", id:"money2"},
		{src:"images/nottouch.png?1502963756558", id:"nottouch"},
		{src:"images/people.png?1502963756558", id:"people"},
		{src:"images/pidr.png?1502963756558", id:"pidr"},
		{src:"images/shopn.png?1502963756558", id:"shopn"},
		{src:"images/tank.png?1502963756558", id:"tank"}
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
an.compositions['FD400AA1CA164858827D9B8B1676C338'] = {
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