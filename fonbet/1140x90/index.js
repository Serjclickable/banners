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


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,100);


(lib.donottouch = function() {
	this.initialize(img.donottouch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,85);


(lib.e2017 = function() {
	this.initialize(img.e2017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,46);


(lib.fastpidr = function() {
	this.initialize(img.fastpidr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,582);


(lib.firstr = function() {
	this.initialize(img.firstr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,244);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,83);


(lib.money1 = function() {
	this.initialize(img.money1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,89);


(lib.money2 = function() {
	this.initialize(img.money2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,94);


(lib.people = function() {
	this.initialize(img.people);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,763,254);


(lib.pidr = function() {
	this.initialize(img.pidr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,403,481);


(lib.shop1 = function() {
	this.initialize(img.shop1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,83);


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


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.e2017();
	this.instance.parent = this;
	this.instance.setTransform(-207,88,1.557,1.557);

	this.instance_1 = new lib.Bestcontor();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-466.1,15.9,1.557,1.557);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-466.1,15.9,846.8,143.7), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.money1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,85,89), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.donottouch();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,85,85), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shop1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,95,83), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBAIAAh/IAiAAIAAB/gAhPBAIAAh/IAgAAIAAAsIAfAAQAMAAAIADQAJACAHAGQAGAFADAHQAEAHAAALQAAAKgDAHQgDAHgEAFQgFAEgFADIgLAEIgIABIgHABgAgvAnIAYAAIAIgBIAIgCIAEgFQACgEAAgFQAAgFgCgDQgCgDgDgCIgHgDIgKgBIgWAAg");
	this.shape.setTransform(151.4,130.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBBQgLgCgGgFQgIgFgFgJQgDgIAAgMIAfAAQAAAEABAEQACAEADACQADADAEACQAFABAEAAQAGAAAEgCQADgCADgDIADgGIABgGQAAgJgFgEQgFgEgKAAIgPAAIAAgVIANAAQAKAAAEgEQAFgEAAgHIgBgHQgBgDgDgCIgFgCIgHgBQgJAAgFAEQgGAEABAHIggAAQABgKAEgIQAEgHAHgFQAHgEAKgDQAKgCAKAAQAMAAAJADQAKADAGAFQAGAFACAHQADAGAAAHQAAAGgBAEIgEAIIgHAFIgIADIAAABQAHABAEADQAFACADAEQADAEACAEIABAKQgBAMgEAIQgEAIgIAGQgIAFgJACQgKADgJAAQgLAAgLgDg");
	this.shape_1.setTransform(135.8,130.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYBAIAAhMIAAAAIgsBMIgkAAIAAh/IAgAAIAABOIABAAIAuhOIAiAAIAAB/g");
	this.shape_2.setTransform(122.5,130.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BaIAAiwIAgAAIAAASIAAAAIAHgKQAEgEAFgCQAEgDAGgBQAEgBAHgBIANACIAMAFQAGACAFAGQAFAFAEAHQAEAHACAKQADAKAAAMQAAAPgEAMQgDANgHAKQgGAJgLAEQgKAGgOAAIgIgBIgKgDIgJgGQgEgEgDgGIgBAAIAABBgAgOg4QgFADgEAGQgDAFgBAGIgCAOIAAAIIACAJIADAHQACAEADADIAIAGQAFACAGAAQAFAAAEgCQAFgCADgEIAFgHIADgHIACgJIAAgIIgBgOQgCgGgDgFQgEgGgFgDQgGgEgGAAQgIAAgGAEg");
	this.shape_3.setTransform(108.1,132.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYBAIAAhkIgvAAIAABkIgiAAIAAh/IBzAAIAAB/g");
	this.shape_4.setTransform(93.2,130.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVBAQgMgEgIgIQgJgJgEgNQgFgNgBgSQAAgNAEgLQADgNAIgJQAIgJALgFQALgGAPAAQARAAAMAGQAMAFAGALQAIAKACAOQAEAPAAAQIhXAAIAAAFIACAGIADAHQACAEADACQADADAFACQAFACAGAAIAHgBIAHgDIAEgFIAEgGIAiAAIgCAIIgEAJIgIAJIgLAIIgPAGQgIACgKAAQgMAAgKgEgAAagLQAAgIgCgGQgDgGgDgDQgEgDgFgBIgJgCIgIACQgEABgEADQgEADgCAGQgCAGgBAIIAzAAIAAAAg");
	this.shape_5.setTransform(72.5,130.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAwBAIAAh/IAgAAIAAB/gAhPBAIAAh/IAgAAIAAAsIAfAAQALAAAJADQAJACAHAGQAGAFAEAHQADAHAAALQAAAKgDAHQgDAHgEAFQgFAEgFADIgKAEIgJABIgHABgAgvAnIAZAAIAIgBIAHgCIAEgFQACgEAAgFQAAgFgCgDQgCgDgDgCIgHgDIgKgBIgWAAg");
	this.shape_6.setTransform(56.3,130.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBAIAAg3IgwAAIAAA3IggAAIAAh/IAgAAIAAAuIAwAAIAAguIAiAAIAAB/g");
	this.shape_7.setTransform(39.3,130.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBAIAAg3IgvAAIAAA3IgiAAIAAh/IAiAAIAAAuIAvAAIAAguIAiAAIAAB/g");
	this.shape_8.setTransform(24.7,130.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBAQgLgEgIgIQgJgJgEgNQgGgNAAgSQABgNADgLQAEgNAHgJQAHgJAMgFQALgGAPAAQARAAAMAGQALAFAHALQAIAKACAOQADAPABAQIhXAAIABAFIABAGIADAHQACAEAEACQADADAFACQAEACAGAAIAHgBIAHgDIAEgFIAEgGIAiAAIgCAIIgEAJIgIAJIgLAIIgPAGQgIACgKAAQgLAAgMgEgAAagLQAAgIgDgGQgCgGgDgDQgFgDgEgBIgJgCIgHACQgFABgEADQgEADgCAGQgCAGgBAIIAzAAIAAAAg");
	this.shape_9.setTransform(10.7,130.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiBPIAAgfIhiAAIAAh+IAhAAIAABjIAvAAIAAhjIAiAAIAABjIAPAAIAAA6g");
	this.shape_10.setTransform(-2.5,132.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgA/IAAhfIAAAAIg9BfIgYAAIAAh9IAWAAIAABfIAAAAIA9hfIAYAAIAAB9g");
	this.shape_11.setTransform(-24.3,130.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAhA/IAAhfIgBAAIg8BfIgZAAIAAh9IAWAAIAABfIAAAAIA8hfIAZAAIAAB9g");
	this.shape_12.setTransform(164.4,104.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhNA/IAAh9IAWAAIAABqIAtAAIAAhqIAUAAIAABqIAuAAIAAhqIAWAAIAAB9g");
	this.shape_13.setTransform(148.1,104.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAxA/IAAh9IAWAAIAAB9gAhGA/IAAh9IAWAAIAAAvIAlAAQALAAAHADQAIADAFAFQAGAEADAHQADAIAAAJQAAAJgDAHQgDAHgGAFQgFAFgIADQgHADgLAAgAgwAuIAhAAIALgCQAEgBADgCQADgDACgEQACgEAAgGQAAgGgCgEQgCgEgDgDQgDgDgFgBIgMgBIgfAAg");
	this.shape_14.setTransform(130.1,104.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2BZIAAitIAVAAIAAARIABAAIAFgIQADgFAFgCQAFgDAFgBQAGgDAHAAQAKAAAJAFQAKADAHAIQAHAIAEALQAEAMAAAPQAAAUgEANQgEANgHAIQgHAJgKAEQgKAEgNAAQgFAAgGgCIgJgEIgHgGIgFgGIgBAAIAAA/gAgOhCQgHAEgEAGQgEAHgCAJQgCAIAAALQAAAKACAJQACAHAEAHQAEAGAHAEQAGADAIAAQAIAAAHgDQAGgEAFgGQAEgHACgHQACgJAAgKQAAgLgCgIQgCgJgEgHQgFgGgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_15.setTransform(115.1,106.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmA/IAAh9IBNAAIAAATIg4AAIAABqg");
	this.shape_16.setTransform(104,104.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAxA/IAAh9IAWAAIAAB9gAhGA/IAAh9IAWAAIAAAvIAlAAQALAAAHADQAIADAFAFQAGAEADAHQADAIAAAJQAAAJgDAHQgDAHgGAFQgFAFgIADQgHADgLAAgAgwAuIAhAAIALgCQAEgBADgCQADgDACgEQACgEAAgGQAAgGgCgEQgCgEgDgDQgDgDgFgBIgMgBIgfAAg");
	this.shape_17.setTransform(89.9,104.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTBAQgKgDgHgGQgHgGgEgIQgEgHgBgKIAWAAQABAHADAFQADAEAFADQAEADAFABIAKABQAPAAAIgGQAHgGAAgKQAAgEgBgEQgBgDgEgDQgDgCgFgBQgFgCgIAAIgDABIgDAAIgEAAIgDAAIAAgRIAJAAIAJgBQAFgBAEgCQAEgCACgEQADgEAAgFQAAgEgCgDQgBgEgDgCQgDgDgFgBQgFgCgGAAIgHABQgEABgEADQgFACgDAFQgDAEgBAIIgVAAQABgJADgGQACgHAEgEIAJgIIAKgFIALgDIAJgBQAIAAAIADQAJACAGAEQAHAFADAGQAEAHAAAJQAAAGgBAEIgEAIIgGAFIgHAEIAAABIAHACQAEABAEADQADADADAGQACAFAAAHQAAALgFAIQgEAHgHAGQgIAFgJACQgJADgJAAQgLAAgKgDg");
	this.shape_18.setTransform(75.1,104.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYA+QgKgFgIgIQgHgJgEgMQgEgNAAgPQAAgOAEgNQAEgMAHgJQAIgIAKgFQALgFANAAQAOAAALAFQAKAFAIAIQAHAJAEAMQAEANAAAOQAAAPgEANQgEAMgHAJQgIAIgKAFQgLAFgOAAQgNAAgLgFgAgPgrQgHADgEAHQgFAGgCAJQgDAIAAAKQAAAKADAJQACAJAFAGQAEAHAHADQAHAEAIAAQAJAAAHgEQAHgDAEgHQAFgGACgJQADgJAAgKQAAgKgDgIQgCgJgFgGQgEgHgHgDQgHgEgJAAQgIAAgHAEg");
	this.shape_19.setTransform(62.6,104.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BZIAAitIAVAAIAAARIABAAIAFgIQADgFAFgCQAFgDAFgBQAGgDAHAAQAKAAAJAFQAKADAHAIQAHAIAEALQAEAMAAAPQAAAUgEANQgEANgHAIQgHAJgKAEQgKAEgNAAQgFAAgGgCIgJgEIgHgGIgFgGIgBAAIAAA/gAgOhCQgHAEgEAGQgEAHgCAJQgCAIAAALQAAAKACAJQACAHAEAHQAEAGAHAEQAGADAIAAQAIAAAHgDQAGgEAFgGQAEgHACgHQACgJAAgKQAAgLgCgIQgCgJgEgHQgFgGgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_20.setTransform(49.6,106.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLATQAHgBAEgKIAAgJIAAgBIAAgCIgLAAIAAgZIAYAAIAAAXQAAANgGAKQgFALgNADg");
	this.shape_21.setTransform(32.6,111.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAhA/IAAhfIgBAAIg8BfIgZAAIAAh9IAWAAIAABfIAAAAIA9hfIAYAAIAAB9g");
	this.shape_22.setTransform(22.3,104.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAgA/IAAhfIAAAAIg9BfIgYAAIAAh9IAVAAIAABfIABAAIA9hfIAYAAIAAB9g");
	this.shape_23.setTransform(8.3,104.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAmBOIAAgfIhfAAIAAh8IAVAAIAABqIA5AAIAAhqIAWAAIAABqIAQAAIAAAxg");
	this.shape_24.setTransform(-4.9,106.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAdA/Igwg5IgPANIAAAsIgWAAIAAh9IAWAAIAAA9IA+g9IAcAAIg6A4IA7BFg");
	this.shape_25.setTransform(-18.1,104.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA0BXIgSg0IhDAAIgTA0IgZAAIBBitIAbAAIA/CtgAAbAQIgahLIgcBLIA2AAg");
	this.shape_26.setTransform(-33.5,102.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.money2();
	this.instance.parent = this;
	this.instance.setTransform(26,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-43.8,-7,217.3,151.4), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAtQAEgaAOgZQAJgPAJgLIgwAAIAAgMIA+AAIAAAKQgFAFgHAKQgHALgGALQgGAMgCAKIgEAUg");
	this.shape.setTransform(233.5,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFAtIAAg/IgVAAIAAgJQANgBADgDQAFgDADgKIAJAAIAABZg");
	this.shape_1.setTransform(225.5,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAhQgGgMAAgUQAAgPADgLQAIgVATAAQASAAAHAPQAGALABAUQgBARgFAMQgIASgSAAQgQAAgIgOgAgNgaQgFAKAAARQAAAOADAIQAEANALAAQAIAAAGgIQAFgHAAgVQAAgPgEgKQgEgKgLAAQgJAAgEAJg");
	this.shape_2.setTransform(219,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAuQAAgMAEgJQAFgJAMgGIALgIQAJgDADgEQAFgFAAgHQAAgIgFgFQgEgEgJAAQgKgBgFAKQgDAEAAAJIgLAAQAAgMAEgIQAIgMARAAQAQAAAHAIQAIAIAAALQgBAKgHAHQgEAFgMAGIgIAFIgKAGQgGAGgCAHIAxAAIAAALg");
	this.shape_3.setTransform(211.8,7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAvIgVgjIgJAJIAAAaIgLAAIAAhdIALAAIAAA1IAcgcIAPAAIgaAZIAbArg");
	this.shape_4.setTransform(201.7,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAbQgJgKAAgQQAAgQAJgKQAJgKANAAQAHAAAHADQAHAEADAFQAEAGABAGIABAOIgwAAQAAAKAEAHQAFAGAIAAQAJAAAGgGQADgDABgFIALAAQAAAEgDAEQgCAFgEADQgFAFgHACIgJABQgMAAgJgJgAATgFQAAgIgDgEQgFgIgLAAQgGAAgGAGQgFAFAAAJIAkAAIAAAAg");
	this.shape_5.setTransform(194.4,8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAbQgJgKAAgQQAAgQAJgKQAJgKANAAQAHAAAHADQAHAEADAFQAEAGABAGIABAOIgwAAQAAAKAEAHQAFAGAIAAQAJAAAGgGQADgDABgFIALAAQAAAEgDAEQgCAFgEADQgFAFgHACIgJABQgMAAgJgJgAATgFQAAgIgDgEQgFgIgLAAQgGAAgGAGQgFAFAAAJIAkAAIAAAAg");
	this.shape_6.setTransform(187.2,8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVAvIgVhNIgVBNIgNAAIgYhdIANAAIASBLIAVhLIANAAIAVBLIARhLIAOAAIgYBdg");
	this.shape_7.setTransform(177.9,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAsQgIgFgBgLIAMAAQABAFACADQAEADAIAAQAMABAEgKQACgCAAgFIABgNQgEAGgFACQgEADgHAAQgLAAgJgIQgIgIAAgRQAAgRAIgJQAJgKALAAQAHAAAGAEIAHAGIAAgIIALAAIAAA9QAAANgEAHQgHAOgTAAQgLAAgHgFgAgPgbQgCAGAAAKQAAALAEAGQAFAFAIAAQALAAAFgLQADgFAAgJQAAgMgFgGQgFgGgIAAQgLAAgFALg");
	this.shape_8.setTransform(164.3,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAjIAAgqQAAgGgCgEQgDgGgIAAIgGAAQgEACgEAEQgDADgBAEIAAAKIAAAjIgMAAIAAhDIALAAIAAAJQAFgGAFgCQAGgDAFAAQAPAAAFAKQADAGAAAKIAAArg");
	this.shape_9.setTransform(157.3,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFghIAAgNIALAAIAAANg");
	this.shape_10.setTransform(152.3,7.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAiAjIAAguQAAgHgEgDQgDgCgFAAQgHAAgFAEQgEAFAAAKIAAAnIgLAAIAAgsQAAgHgCgDQgCgEgHAAQgHAAgFAFQgFAFAAANIAAAjIgMAAIAAhDIALAAIAAAJQAEgFAEgCQAFgEAIAAQAIAAAFAEIAEAHQAEgFAFgDQAFgDAGAAQAOAAAFAKQADAFAAAJIAAAtg");
	this.shape_11.setTransform(145.5,8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAeQgGgGAAgIQAAgKAGgFQAGgEAJgCIASgCQAEAAABgDIABgFQAAgFgFgDQgEgCgGgBQgJAAgEAGQgCACgBAGIgKAAQAAgOAIgEQAIgFAKAAQALAAAHAFQAIAEAAAJIAAAnIAAADQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIABAAIACAAIAAAIIgEABIgEAAQgGAAgCgEIgCgGQgEAEgGAEQgGADgIAAQgJAAgGgGgAAIABIgHABIgFABQgHABgDACQgFADAAAHQAAAEAEADQADADAFAAQAGAAAFgCQAJgGAAgKIAAgIIgFABg");
	this.shape_12.setTransform(136.6,8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgXQAAgXANgOQALgNASAAQANAAAKAFQANAHADATIgNAAQgBgLgIgEQgGgFgLAAQgMAAgIAJQgKAKABATQAAAQAHALQAHAKAPAAQAMAAAJgHQAIgIAAgQIgdAAIAAgKIApAAIAAAyIgJAAIgCgNQgGAHgGAEQgIAEgMAAQgPAAgMgLg");
	this.shape_13.setTransform(127.6,7.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQAjIAAgqQAAgGgCgEQgDgGgIAAIgGAAQgEACgEAEQgDADgBAEIAAAKIAAAjIgMAAIAAhDIALAAIAAAJQAFgGAFgCQAGgDAFAAQAPAAAFAKQADAGAAAKIAAArg");
	this.shape_14.setTransform(115.6,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAeQgGgGAAgIQAAgKAGgFQAGgEAJgCIASgCQAEAAABgDIABgFQAAgFgFgDQgEgCgGgBQgJAAgEAGQgCACgBAGIgKAAQAAgOAIgEQAIgFAKAAQALAAAHAFQAIAEAAAJIAAAnIAAADQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIABAAIACAAIAAAIIgEABIgEAAQgGAAgCgEIgCgGQgEAEgGAEQgGADgIAAQgJAAgGgGgAAIABIgHABIgFABQgHABgDACQgFADAAAHQAAAEAEADQADADAFAAQAGAAAFgCQAJgGAAgKIAAgIIgFABg");
	this.shape_15.setTransform(108.5,8.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFghIAAgNIALAAIAAANg");
	this.shape_16.setTransform(103.3,7.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAdQgGgGgBgLIAMAAQAAAGACADQAFAGAKAAQAHAAAFgDQAEgDAAgGQAAgEgEgCIgKgDIgIgDQgJgCgEgCQgIgEABgIQAAgKAGgGQAIgGALAAQAPAAAHAJQAEAGAAAGIgLAAQAAgEgCgDQgEgEgKAAQgGAAgEACQgDADAAAEQAAAEAEADIAIADIAHACQAMADAFABQAGAFABAJQAAAJgIAHQgHAGgNAAQgPAAgHgHg");
	this.shape_17.setTransform(98.7,8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAdQgGgGgBgLIALAAQABAGADADQAEAGAKAAQAGAAAGgDQAEgDAAgGQAAgEgDgCIgKgDIgJgDQgIgCgFgCQgIgEAAgIQABgKAGgGQAHgGAMAAQAPAAAHAJQAFAGgBAGIgLAAQAAgEgCgDQgFgEgJAAQgGAAgEACQgDADAAAEQAAAEAEADIAIADIAHACQAMADAFABQAHAFAAAJQgBAJgGAHQgIAGgOAAQgOAAgHgHg");
	this.shape_18.setTransform(92.2,8.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAZQgDgFAAgJIAAgtIAMAAIAAAsQAAAFACAEQACAFAJAAQAKAAAFgKQACgGAAgJIAAghIALAAIAABDIgLAAIAAgKIgFAHQgHAFgHAAQgPAAgFgKg");
	this.shape_19.setTransform(85.2,8.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXAvIgBgEIgBgHIgBgPQgBgKgFgDQgEgCgHAAIgbAAIAAApIgNAAIAAhdIAqAAQAKABAHADQANAFgBAQQABAJgEAFQgEAFgFADQAFACADADQACAEAAAJIABAMIABAIQABAEADACIAAACgAgYgDIAbAAQAJAAAEgDQAGgEAAgKQAAgJgHgEQgEgCgGAAIgdAAg");
	this.shape_20.setTransform(77.3,7.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAiIAAgzIghAzIgOAAIAAhDIAMAAIAAAzIABAAIAggzIANAAIAABDg");
	this.shape_21.setTransform(65,8.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASAiIAAgzIghAzIgNAAIAAhDIALAAIAAAzIABAAIAggzIANAAIAABDg");
	this.shape_22.setTransform(57.5,8.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGAjIgGgCIgGgEIgFgHQgCgEgBgFQgCgGAAgGQAAgIADgHQACgGAEgFQAEgFAGgCQAFgDAFAAIAJABIAHADIAGAEIADAGIACAGIABAFIgLAAQgBgHgEgEQgEgEgHAAQgEAAgDACQgEACgCADQgDAEgBAFIgBAKIABAMIAEAIQACADAEABQADABADAAIAGgBIAFgCIAEgGIACgHIALAAIgBAFIgCAHIgEAFIgFAEIgIAEIgJABg");
	this.shape_23.setTransform(50.5,8.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAxIAAhfIAMAAIAAAKIAAAAIADgEIAEgEQADgCADgBIAGgBQAGAAAFACQAFACAEAFQADAEADAGQACAHAAAIQAAALgCAGQgCAHgEAFQgEAFgGACQgFABgHAAIgFAAIgFgCIgEgEIgDgDIAAAAIAAAjgAgHgkQgEACgCAEQgCAEgBAFIgBAKIABAKQABADACAEQACAEAEACQADACAEAAQAFAAADgCQAEgCACgEQACgEABgDIABgKIgBgKQgBgFgCgEQgCgEgEgCQgDgCgFAAQgEAAgDACg");
	this.shape_24.setTransform(43.7,9.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLAiQgFgDgFgEQgEgEgDgIQgCgGAAgJQAAgFABgGIAEgJIAFgHIAHgEIAHgDIAGgBQAGAAAHACQAGACAEAEQADAFADAGQACAHAAAIIAAAFIgxAAQAAAFACAEQABAEADADQACADAEABQADACADAAQAFAAADgCIAGgCIADgFIACgEIAMAAQgBADgDAFIgFAIQgFADgEACQgGACgGAAQgGAAgGgCgAAUgEQAAgFgCgEQgBgEgDgDIgGgDQgDgCgFAAQgDAAgCACQgEABgDADQgCADgBADIgDAJIAmAAIAAAAg");
	this.shape_25.setTransform(36.4,8.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAiIAAhDIAcAAQANAAAGAEQAGAGAAAIQAAAFgCADQgCADgEADQAFABADAEQAEAEAAAFQAAAFgCAEQgCAEgDADQgDACgFABQgFACgHAAgAgQAYIARAAIAIAAIAEgCIADgDIABgFIgBgEIgDgEIgEgCIgIAAIgRAAgAgQgEIARAAQAGAAADgCQADgDAAgFIgBgFQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgEgBIgEAAIgSAAg");
	this.shape_26.setTransform(29.4,8.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgEgFgDgGQgBgGAAgJQAAgIABgGQADgGAEgFQAEgFAGgCQAFgDAHAAQAIAAAFADQAGACAEAFQAEAFADAGQABAGABAIQgBAJgBAGQgDAGgEAFQgEAFgGACQgFADgIAAQgHAAgFgDgAgHgXQgEACgCADIgFAIIgBAKIABALIAFAIQACADAEACQADACAEAAQAFAAAEgCQADgCADgDIAEgIIABgLIgBgKIgEgIQgDgDgDgCQgEgCgFAAQgEAAgDACg");
	this.shape_27.setTransform(18.5,8.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAQAiIAAg5IgfAAIAAA5IgMAAIAAhDIA3AAIAABDg");
	this.shape_28.setTransform(11.3,8.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAGIgIANIgGgFIAJgMIgOgEIACgHIAOAFIAAgOIAHAAIAAAOIANgFIADAHIgOAEIAJAMIgHAFg");
	this.shape_29.setTransform(5.1,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0.5,0,238.6,17), null);


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
	this.instance = new lib.firstr();
	this.instance.parent = this;
	this.instance.setTransform(-129,22,1.568,1.568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-129,22,514.2,382.5), null);


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
	this.instance.setTransform(-30,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMEoQhVgIiagiQikgjhLgJQhVgKh8gBQiMAAhGgBQgZAAgKgJQgLgLABgeIANloQABgYgBgNIgBgUQAAgLAFgHQALgPAgADQAwAFA8AUQAeAJBMAeQCpBACUAjQBxAbDUAfQGaA7COATQBWAKAsANQBHAWAoAqQAbAcgDAZQgFAmhEASQjfA8iFAWQiIAWh2AAQg4AAg0gEg");
	this.shape.setTransform(87.2,436.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-30,62,403,481), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(-44,-33,1.086,1.086);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-44,-33,1112,834), null);


(lib.Symbol17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29,1,0.743,0.743);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E32024").s().p("A8AHXQhaAAAAhaIAAr5QAAhaBaAAMA4BAAAQBaAAAABaIAAL5QAABahaAAg");
	this.shape_27.setTransform(153.4,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17_1, new cjs.Rectangle(-34.9,-9,376.5,94.1), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:302.5},14,cjs.Ease.get(-1)).to({y:298.8},15,cjs.Ease.get(1)).to({y:302.4},15,cjs.Ease.get(-1)).to({y:306},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129,22,514.2,382.5);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(236.4,491.3,1,1,0,0,0,236.4,491.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:491.4,rotation:4.7,y:491.4},39).to({regY:491.3,rotation:0,y:491.3},40).wait(1));

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


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(69.5,72,1,1,0,0,0,45,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-19.3,-7,217.3,151.4), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuA9IAAh5IAfAAIAAB5gAhMA9IAAh5IAgAAIAAAqIAdAAQALAAAIADQAJACAGAFQAGAFADAHQAEAHAAAKQAAAKgDAGQgDAHgEAFIgJAHIgKADIgJACIgGAAgAgsAlIAXAAIAHAAIAHgDQADgBACgDQABgEAAgFQAAgEgBgDQgCgEgDgBIgIgDIgJgBIgUAAg");
	this.shape.setTransform(83.2,126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmA9IAAhhIgBAAIgWBhIgdAAIgWhhIgBAAIAABhIgeAAIAAh5IAwAAIATBYIABAAIAUhYIAvAAIAAB5g");
	this.shape_1.setTransform(65.7,126);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmA9IAAhhIgBAAIgWBhIgdAAIgWhhIgBAAIAABhIgeAAIAAh5IAwAAIATBYIABAAIAUhYIAvAAIAAB5g");
	this.shape_2.setTransform(42.7,126);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA9IAAhJIAAAAIgqBJIgjAAIAAh5IAgAAIAABKIAAAAIAshKIAhAAIAAB5g");
	this.shape_3.setTransform(27.4,126);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPA9IAAhfIglAAIAAgaIBpAAIAAAaIglAAIAABfg");
	this.shape_4.setTransform(14.7,126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiA/QgHgDgFgFQgFgEgDgHQgDgHAAgKQAAgHADgHQACgGAEgFQAFgEAGgDQAGgDAIgCIAegEIAEgBIADgBIADgDQABgCABgDIgBgGQgBgCgDgCQgCgCgEgBIgIgBQgGAAgEABIgGAEQgDACgBADIgCAHIgfAAIABgGIACgJIAGgKQAEgFAFgDQAGgEAIgDQAJgDALAAQAPAAALAEQAKADAFAFQAGAGACAGQACAHAAAGIAABAIABAJIACAGIACADIACABIAAAFIgjAAIgCgFIgBgJIgHAHIgIAGIgJAEIgOABQgIAAgHgCgAAMAEIgIADIgHABIgKACQgEACgCACQgDACgCADQgBAEAAAEQAAAEABADIAEAFIAFACIAGABIAFAAIAFgCIAGgDIAFgFQADgDACgEQACgFAAgGIAAgMg");
	this.shape_5.setTransform(2.6,126);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3A+IgHgBIAAgbIAFABIAFABQAEAAADgCQADgDACgFQACgGABgKIABgaIABguIBiAAIAAB6IggAAIAAhgIglAAIAAAXQgBASgCAOQgCAPgEAKQgEAJgIAGQgHAEgLAAg");
	this.shape_6.setTransform(-11.9,126.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXA9IAAhfIgtAAIAABfIggAAIAAh5IBtAAIAAB5g");
	this.shape_7.setTransform(-25.8,126);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA+QgGgDgGgEQgFgEgDgHQgDgGAAgJQAAgJADgHQADgHAFgEQAFgEAHgCQAGgDAIAAIAggFQAFAAADgDQACgEABgHQAAgLgHgEQgIgFgMAAQgOAAgHAGQgGAFgBAMIgUAAQABgLAEgIQADgHAHgFQAGgFAKgCQAIgCALAAQAIAAAIACQAIACAGAEQAHAEAEAGQADAHAAAJIAABFQABADABACQACACAEAAIACgBIAEAAIAAAOIgFABIgGABIgKgBQgDgBgDgCIgEgFIgCgJIgIAIIgJAGIgLAEQgHACgIAAQgHAAgHgCgAARACIgIACIgJABIgKACIgJACIgJAEIgGAFQgBAEAAAEQAAAFABAEQACAEADADQADADAEABQAEABAFAAIAGAAIAIgDIAIgDIAHgGIAFgHQACgEAAgGIAAgSg");
	this.shape_8.setTransform(130.7,101.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhJA8IAAh3IAVAAIAABlIArAAIAAhlIAUAAIAABlIArAAIAAhlIAUAAIAAB3g");
	this.shape_9.setTransform(115.1,101.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAvA8IAAh3IAVAAIAAB3gAhDA8IAAh3IAVAAIAAAtIAkAAQAKAAAGADQAJADAFAEQAFAEADAHQADAHAAAJQAAAJgDAGQgDAHgFAFQgFAFgJADQgGACgKAAgAguAsIAgAAIAKgBIAHgEQAEgDABgDQACgFAAgFQAAgGgCgEQgCgEgEgCQgCgDgFgBIgLgBIgeAAg");
	this.shape_10.setTransform(97.9,101.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BWIAAinIAVAAIAAAQIAAAAIAFgHQAEgEADgDQAFgDAFgBQAHgCAGAAQAJAAAJAEQAJAEAHAHQAGAIAFALQAEALAAAPQAAASgEAMQgEANgGAIQgIAJgJADQgKAEgMAAQgFAAgFgCIgKgEIgHgFIgEgGIAAAAIAAA9gAgOg/QgGADgEAGQgEAGgCAJQgBAJAAAKQAAAJABAJQACAHAEAGQAEAGAGAEQAGADAIAAQAIAAAGgDQAHgEADgGQAFgGACgHQABgJAAgJQAAgKgBgJQgCgJgFgGQgDgGgHgDQgGgEgIAAQgIAAgGAEg");
	this.shape_11.setTransform(83.5,103.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA8IAAh3IBLAAIAAASIg1AAIAABlg");
	this.shape_12.setTransform(72.8,101.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAfA8IAAhbIAAAAIg6BbIgYAAIAAh3IAVAAIAABbIAAAAIA7hbIAXAAIAAB3g");
	this.shape_13.setTransform(60.9,101.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAvA8IAAh3IAVAAIAAB3gAhDA8IAAh3IAVAAIAAAtIAkAAQAKAAAHADQAHADAGAEQAFAEADAHQADAHAAAJQAAAJgDAGQgDAHgFAFQgGAFgHADQgHACgKAAgAguAsIAgAAIAKgBIAHgEQADgDACgDQACgFAAgFQAAgGgCgEQgCgEgEgCQgCgDgFgBIgLgBIgeAAg");
	this.shape_14.setTransform(45.9,101.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyA8IAAh3IAzAAQAWAAALAIQALAIAAAQQAAAIgFAGQgEAGgGAEQAJADAGAGQAGAHAAALQAAAIgDAHQgDAHgGAEQgFAFgJADQgJACgMAAgAgdAsIAfAAIANgBQAGgCADgCQADgDABgDQACgEAAgEQAAgFgCgDQgBgEgDgCQgDgCgGgCIgNgBIgfAAgAgdgIIAeAAQALAAAGgEQAGgEAAgJQAAgFgCgDQgBgEgDgCIgHgDIgHgBIghAAg");
	this.shape_15.setTransform(31.5,101.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLA/QgGgCgFgDQgGgDgFgEQgFgFgDgHQgEgHgCgKQgDgJAAgMQAAgOAFgMQAEgMAHgIQAHgJAKgEQAJgFAKAAQAJAAAHACQAHACAGAEQAFADAEAFQAEAEACAFIAEAKIABAJIgTAAQgCgMgHgHQgHgHgMAAQgIAAgGAEQgGADgFAGQgEAHgCAJQgCAIAAAKQAAAMACAIQACAJAFAGQAEAFAGADQAGACAGAAQAGAAAFgCQAFgCADgDQAEgEADgGQADgFABgHIATAAIgCAJIgEALIgGAKQgEAEgFAEQgGAEgHACQgIACgJAAg");
	this.shape_16.setTransform(13,101.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAgA8IAAhbIgBAAIg6BbIgYAAIAAh3IAVAAIAABbIAAAAIA7hbIAXAAIAAB3g");
	this.shape_17.setTransform(-5.9,101.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglA8IAAh3IBLAAIAAASIg1AAIAABlg");
	this.shape_18.setTransform(-16.6,101.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXA8QgKgFgHgIQgHgJgEgLQgEgMAAgPQAAgOAEgLQAEgMAHgJQAHgIAKgEQALgFAMAAQANAAAKAFQALAEAHAIQAHAJAEAMQAEALAAAOQAAAPgEAMQgEALgHAJQgHAIgLAFQgKAEgNAAQgMAAgLgEgAgOgpQgHADgEAGQgFAGgCAJQgCAIAAAJQAAAKACAJQACAIAFAGQAEAGAHAEQAGADAIAAQAIAAAHgDQAGgEAFgGQAEgGADgIQACgJAAgKQAAgJgCgIQgDgJgEgGQgFgGgGgDQgHgEgIAAQgIAAgGAEg");
	this.shape_19.setTransform(-28.2,101.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag0A9IgEgCIAAgSIAIABIAFgBIADgDIAEgGIADgLIACgQIABgVIABgtIBWAAIAAB4IgVAAIAAhmIgtAAIgBAdQAAAVgDAPQgDAPgFAIQgEAJgHAEQgHAEgIAAg");
	this.shape_20.setTransform(-41.8,101.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghA+QgGgDgGgEQgEgEgEgHQgDgGAAgJQAAgJADgHQAEgHAEgEQAFgEAHgCQAGgDAIAAIAggFQAFAAADgDQADgEAAgHQgBgLgGgEQgIgFgMAAQgOAAgHAGQgGAFgBAMIgUAAQABgLAEgIQAEgHAGgFQAHgFAJgCQAJgCAKAAQAIAAAIACQAIACAGAEQAHAEAEAGQADAHABAJIAABFQgBADACACQACACAEAAIACgBIAEAAIAAAOIgFABIgGABIgKgBQgDgBgDgCIgEgFIgCgJIgIAIIgJAGIgMAEQgGACgIAAQgHAAgHgCgAARACIgIACIgJABIgJACIgKACIgJAEIgGAFQgBAEAAAEQAAAFABAEQACAEADADQADADAEABQAEABAEAAIAHAAIAIgDIAIgDIAHgGIAFgHQACgEAAgGIAAgSg");
	this.shape_21.setTransform(-53.9,101.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAsBSIAAhNIhXAAIAABNIgWAAIAAijIAWAAIAABDIBXAAIAAhDIAWAAIAACjg");
	this.shape_22.setTransform(-68.9,98.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(36.7,44.5,1,1,0,0,0,42.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-82.4,0,224.5,139.4), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdA/Igwg5IgPANIAAAsIgWAAIAAh9IAWAAIAAA9IA+g9IAcAAIg6A4IA7BFg");
	this.shape.setTransform(100.1,125.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA+QgKgFgIgIQgHgJgEgMQgEgNAAgPQAAgOAEgNQAEgMAHgJQAIgIAKgFQALgFANAAQAOAAALAFQAKAFAIAIQAHAJAEAMQAEANAAAOQAAAPgEANQgEAMgHAJQgIAIgKAFQgLAFgOAAQgNAAgLgFgAgPgrQgHADgEAHQgFAGgCAJQgDAIAAAKQAAAKADAJQACAJAFAGQAEAHAHADQAHAEAIAAQAJAAAHgEQAHgDAEgHQAFgGACgJQADgJAAgKQAAgKgDgIQgCgJgFgGQgEgHgHgDQgHgEgJAAQgIAAgHAEg");
	this.shape_1.setTransform(86.2,125.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0A/IAAh9IA1AAQAWAAAMAJQALAIAAARQAAAIgEAGQgEAGgHAFQAKADAGAHQAGAHAAALQAAAJgDAHQgDAHgGAFQgGAEgJADQgKADgMAAgAgeAuIAfAAQAJAAAGgCQAFgBAEgDQADgCACgEIABgIIgBgIQgCgEgDgDQgEgCgFgBQgGgCgJAAIgfAAgAgegJIAfAAQALAAAGgEQAHgEAAgJQAAgGgCgDQgCgEgDgCIgGgDIgIgBIgiAAg");
	this.shape_2.setTransform(73.3,125.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA+QgKgFgIgIQgHgJgEgMQgEgNAAgPQAAgOAEgNQAEgMAHgJQAIgIAKgFQALgFANAAQAOAAALAFQAKAFAIAIQAHAJAEAMQAEANAAAOQAAAPgEANQgEAMgHAJQgIAIgKAFQgLAFgOAAQgNAAgLgFgAgPgrQgHADgEAHQgFAGgCAJQgDAIAAAKQAAAKADAJQACAJAFAGQAEAHAHADQAHAEAIAAQAJAAAHgEQAHgDAEgHQAFgGACgJQADgJAAgKQAAgKgDgIQgCgJgFgGQgEgHgHgDQgHgEgJAAQgIAAgHAEg");
	this.shape_3.setTransform(59.8,125.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BaIAAivIAVAAIAAARIABAAIAFgIQADgDAFgDQAFgDAFgBQAGgCAHAAQAKAAAJADQAKAEAHAIQAHAIAEAMQAEALAAAQQAAATgEAMQgEAOgHAJQgHAIgKAEQgKAEgNAAQgFAAgGgCIgJgEIgHgGIgFgGIgBAAIAABAgAgOhCQgHADgEAHQgEAGgCAJQgCAJAAALQAAAKACAJQACAHAEAHQAEAGAHADQAGAEAIAAQAIAAAHgEQAGgDAFgGQAEgHACgHQACgJAAgKQAAgLgCgJQgCgJgEgGQgFgHgGgDQgHgEgIABQgIgBgGAEg");
	this.shape_4.setTransform(46.8,127.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhA/IAAhfIgBAAIg8BfIgZAAIAAh9IAVAAIAABfIABAAIA8hfIAZAAIAAB9g");
	this.shape_5.setTransform(32.8,125.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdA/Igwg5IgPANIAAAsIgWAAIAAh9IAWAAIAAA9IA+g9IAcAAIg6A4IA7BFg");
	this.shape_6.setTransform(20,125.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYA+QgKgFgIgIQgHgJgEgMQgEgNAAgPQAAgOAEgNQAEgMAHgJQAIgIAKgFQALgFANAAQAOAAALAFQAKAFAIAIQAHAJAEAMQAEANAAAOQAAAPgEANQgEAMgHAJQgIAIgKAFQgLAFgOAAQgNAAgLgFgAgPgrQgHADgEAHQgFAGgCAJQgDAIAAAKQAAAKADAJQACAJAFAGQAEAHAHADQAHAEAIAAQAJAAAHgEQAHgDAEgHQAFgGACgJQADgJAAgKQAAgKgDgIQgCgJgFgGQgEgHgHgDQgHgEgJAAQgIAAgHAEg");
	this.shape_7.setTransform(6.1,125.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3A/IgDgCIAAgTQAEACAEAAIAEgBIAFgDIADgHIAEgLIACgRIABgWIABguIBZAAIAAB8IgVAAIAAhqIgvAAIgBAfQgBAVgCAQQgEAPgFAJQgEAKgHADQgHAEgJAAg");
	this.shape_8.setTransform(-8.1,125.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKBYIgMgDQgGgDgGgEQgGgEgEgHIgFgHIgEgLIgDgOIgBgUIAAgQIADgTIAFgTQACgJAFgHQAFgIAFgFQAGgEAGgDQAGgCAHgBIAOgCIAIAAIAGAAIAFgCIACgCIACgEIARAAIgBAEIgCAGIgDAFIgFAGIgEACIgEABIgGACIgJABIgJAAQgIAAgIADQgHAEgFAGQgGAGgEAJQgDAJgCAKIAGgJIAJgIQAFgEAIgCQAHgCAJAAQAKAAAKAEQAKADAHAJQAIAHAEAMQAEAKAAAPIAAAMIgDAPQgCAHgEAIQgEAHgHAGQgGAFgJAEQgKAEgNAAgAgPgSQgHAEgFAGQgEAHgDAHQgCAJAAAJIABAJIABAKIAEAKQADAFAEAFQAEAEAGACQAGADAHAAQAJgBAHgDQAGgDAEgEQAEgFACgGIADgLIACgKIAAgHQAAgIgCgJQgCgGgEgHQgFgGgGgEQgHgEgKAAQgJAAgHAEg");
	this.shape_9.setTransform(-21,123);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWBAIgWgnIgWAnIgoAAIArhAIgpg/IApAAIATAlIAWglIAnAAIgpA/IArBAg");
	this.shape_10.setTransform(83.8,99.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYBAIAAhMIAAAAIgsBMIgkAAIAAh/IAgAAIAABOIABAAIAuhOIAiAAIAAB/g");
	this.shape_11.setTransform(69.8,99.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUBAIgkg2IgNANIAAApIgiAAIAAh/IAiAAIAAAxIAugxIAtAAIg1A1IA2BKg");
	this.shape_12.setTransform(55.9,99.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjBBQgHgCgGgFQgFgFgDgIQgDgHAAgKQAAgIACgGQADgHAEgFQAFgEAGgEQAHgDAIgBIAggFIADgBIAEgBIADgDQABgCABgDIgBgGIgEgFIgGgDIgJgBQgGAAgFACQgEABgCACQgDADgBADIgBAHIghAAIABgHIADgJIAFgKQAEgFAGgEQAGgEAIgDQAJgDANAAQAPAAALAEQALADAFAGQAHAFABAHQACAHABAHIAABDIABAJIABAGIACADIADABIAAAGIglAAIgCgGIAAgJIgIAHIgJAGIgJAEQgGACgJAAQgIAAgHgDgAANAEIgIADIgIABIgKADQgEABgDADQgCACgCADQgCADABAFIABAHIADAFIAGADIAGABIAFAAIAFgCIAHgDIAFgFIAFgIQABgFABgHIAAgNg");
	this.shape_13.setTransform(41.2,99.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAVBAIglg2IgOANIAAApIghAAIAAh/IAhAAIAAAxIAvgxIAsAAIg1A1IA4BKg");
	this.shape_14.setTransform(27.9,99.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYBAIAAhMIAAAAIgsBMIgkAAIAAh/IAgAAIAABOIABAAIAthOIAjAAIAAB/g");
	this.shape_15.setTransform(12.6,99.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAiBWIAAhNIhDAAIAABNIgkAAIAAirIAkAAIAABBIBDAAIAAhBIAkAAIAACrg");
	this.shape_16.setTransform(-3.4,96.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(42.5,35.6,1,1,0,0,0,42.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-29.7,-6.9,137.7,145.9), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeA/IgegvIgeAvIgaAAIAshAIgqg9IAbAAIAcAsIAdgsIAZAAIgqA9IAsBAg");
	this.shape.setTransform(118,124.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBAQgHgCgFgFQgGgEgDgHQgDgHgBgJQABgJADgHQADgHAGgFQAEgEAIgDQAGgCAHgBIAigEQAGgBACgDQADgEABgHQAAgLgIgFQgHgFgOAAQgOAAgHAGQgHAGgBAMIgUAAQAAgMAEgHQAFgIAGgFQAHgFAJgCQAKgDALAAQAIAAAJACQAIACAGAEQAIAEADAHQAFAHAAAJIAABIQgBADACACQABADAFAAIADgBIADAAIAAAPIgFABIgGAAIgKgBQgEAAgDgDQgDgCgBgDIgCgJIgIAIIgKAHIgMAEQgGACgJAAQgHAAgHgDgAASACIgJACIgJACIgKABIgLACIgIAEQgEADgCADQgCAEAAAEQAAAGACAEQABAEADADIAHAEQAFABAFAAIAHAAIAIgDIAJgEIAHgFQADgEACgEQACgFAAgFIAAgTg");
	this.shape_1.setTransform(105.6,124.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAxBOIAAgeIhhAAIAAAeIgTAAIAAgxIAQAAQAFgNADgNIAEgZIADgbIAAgcIBXAAIAABqIARAAIAAAxgAgQglIgDAYIgEAUQgDALgEALIA8AAIAAhXIgtAAg");
	this.shape_2.setTransform(91.4,126.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA+QgKgFgIgIQgHgJgEgMQgEgNAAgPQAAgOAEgNQAEgMAHgJQAIgIAKgFQALgFANAAQAOAAALAFQAKAFAIAIQAHAJAEAMQAEANAAAOQAAAPgEANQgEAMgHAJQgIAIgKAFQgLAFgOAAQgNAAgLgFgAgPgrQgHADgEAHQgFAGgCAJQgDAIAAAKQAAAKADAJQACAJAFAGQAEAHAHADQAHAEAIAAQAJAAAHgEQAHgDAEgHQAFgGACgJQADgJAAgKQAAgKgDgIQgCgJgFgGQgEgHgHgDQgHgEgJAAQgIAAgHAEg");
	this.shape_3.setTransform(77.5,124.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BaIAAivIAVAAIAAARIABAAIAFgIQADgEAFgCQAFgDAFgCQAGgBAHAAQAKAAAJADQAKAFAHAHQAHAIAEAMQAEALAAAQQAAATgEAMQgEAOgHAJQgHAIgKAEQgKAEgNAAQgFAAgGgCIgJgEIgHgGIgFgGIgBAAIAABAgAgOhCQgHAEgEAGQgEAHgCAIQgCAJAAALQAAAKACAJQACAIAEAFQAEAHAHADQAGAEAIAAQAIAAAHgEQAGgDAFgHQAEgFACgIQACgJAAgKQAAgLgCgJQgCgIgEgHQgFgGgGgEQgHgDgIAAQgIAAgGADg");
	this.shape_4.setTransform(64.5,127.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA+QgKgFgIgIQgHgJgEgMQgEgNAAgPQAAgOAEgNQAEgMAHgJQAIgIAKgFQALgFANAAQAOAAALAFQAKAFAIAIQAHAJAEAMQAEANAAAOQAAAPgEANQgEAMgHAJQgIAIgKAFQgLAFgOAAQgNAAgLgFgAgPgrQgHADgEAHQgFAGgCAJQgDAIAAAKQAAAKADAJQACAJAFAGQAEAHAHADQAHAEAIAAQAJAAAHgEQAHgDAEgHQAFgGACgJQADgJAAgKQAAgKgDgIQgCgJgFgGQgEgHgHgDQgHgEgJAAQgIAAgHAEg");
	this.shape_5.setTransform(50.9,124.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA/IAAh9IBNAAIAAATIg4AAIAABqg");
	this.shape_6.setTransform(40.1,124.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBBQgNgWgBgrQABgpANgXQANgWAfAAQAhAAANAWQANAXgBApQABArgNAWQgNAXghgBQgfABgNgXgAgTgtQgEAQAAAdQAAAdAEAQQAFAPAOAAQAPAAAFgPQAEgQAAgdQAAgdgEgQQgFgOgPAAQgOAAgFAOg");
	this.shape_7.setTransform(21.3,122.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguA9QgMgVAAghQAAgTACgLQADgXAIgOQAIgMALgHQAMgIAPAAQAYAAAOAMQAOAMACAVIghAAQAAgFgDgEQgGgJgLABQgPgBgHATQgEAKgBATQAGgHAIgDQAJgEAJAAQAXAAAOAPQAPAPAAAYQAAAXgPATQgOASgeAAQgfAAgPgbgAgOAFQgKAIAAARQAAANAHAJQAIAJAKAAQALAAAGgJQAHgIAAgNQAAgPgHgIQgIgIgKAAQgIAAgGAFg");
	this.shape_8.setTransform(8,122.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag5BVQAAgSAIgPQAHgRAagTQAWgQAHgHQALgLAAgNQAAgLgGgHQgGgHgLAAQgPAAgFALQgDAHgBAOIggAAQAAgWAHgNQAOgZAiAAQAaAAAQAPQAQAOAAAZQAAATgLAOQgIAJgRAMIgNAKIgQANIgIAJIBJAAIAAAdg");
	this.shape_9.setTransform(-5.4,122.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0A/IAAh9IA1AAQAWAAAMAJQALAIAAARQAAAIgEAGQgEAGgHAFQAKADAGAHQAGAHAAALQAAAJgDAHQgDAHgGAFQgGAEgJADQgKADgMAAgAgeAuIAfAAQAJAAAGgCQAFgBAEgDQADgCACgEIABgIIgBgIQgCgEgDgDQgEgCgFgBQgGgCgJAAIgfAAgAgegJIAfAAQALAAAGgEQAHgEAAgJQAAgGgCgDQgCgEgDgCIgGgDIgIgBIgiAAg");
	this.shape_10.setTransform(-24.8,124.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0A/IAAh9IA1AAQAWAAAMAJQALAIAAARQAAAIgEAGQgEAGgHAFQAKADAGAHQAGAHAAALQAAAJgDAHQgDAHgGAFQgGAEgJADQgKADgMAAgAgeAuIAfAAQAJAAAGgCQAFgBAEgDQADgCACgEIABgIIgBgIQgCgEgDgDQgEgCgFgBQgGgCgJAAIgfAAgAgegJIAfAAQALAAAGgEQAHgEAAgJQAAgGgCgDQgCgEgDgCIgGgDIgIgBIgiAAg");
	this.shape_11.setTransform(108.5,98.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYA+QgKgFgIgIQgHgJgEgMQgEgNAAgPQAAgOAEgNQAEgMAHgJQAIgIAKgFQALgFANAAQAOAAALAFQAKAFAIAIQAHAJAEAMQAEANAAAOQAAAPgEANQgEAMgHAJQgIAIgKAFQgLAFgOAAQgNAAgLgFgAgPgrQgHADgEAHQgFAGgCAJQgDAIAAAKQAAAKADAJQACAJAFAGQAEAHAHADQAHAEAIAAQAJAAAHgEQAHgDAEgHQAFgGACgJQADgJAAgKQAAgKgDgIQgCgJgFgGQgEgHgHgDQgHgEgJAAQgIAAgHAEg");
	this.shape_12.setTransform(95,98.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKBYIgMgDQgGgDgGgEQgGgEgEgHIgFgHIgEgLIgDgOIgBgTIAAgQIADgUIAFgTQACgJAFgHQAFgHAFgGQAGgEAGgCQAGgEAHgBIAOgBIAIAAIAGAAIAFgBIACgDIACgEIARAAIgBAFIgCAFIgDAGIgFAFIgEACIgEACIgGABIgJAAIgJAAQgIABgIADQgHAEgFAGQgGAGgEAJQgDAIgCALIAGgJIAJgIQAFgEAIgCQAHgCAJAAQAKAAAKAEQAKAEAHAHQAIAIAEALQAEALAAAPIAAAMIgDAOQgCAIgEAIQgEAHgHAFQgGAHgJADQgKAEgNAAgAgPgSQgHAEgFAGQgEAHgDAIQgCAIAAAKIABAIIABAKIAEAKQADAGAEAEQAEADAGADQAGACAHABQAJAAAHgDQAGgDAEgFQAEgFACgFIADgMIACgKIAAgHQAAgIgCgIQgCgHgEgHQgFgGgGgEQgHgEgKAAQgJAAgHAEg");
	this.shape_13.setTransform(81.7,96.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoBYIgFgBIAAgUIAGACIAHAAQAGAAAEgCQADgDACgGIAHgRIguiAIAXAAIAhBlIAihlIAYAAIgxCBIgHARIgEANIgGAIIgHAFIgHADIgLAAg");
	this.shape_14.setTransform(69,101.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2A/IgEgCIAAgTQAEACAEAAIAEgBIAFgDIAEgHIADgLIACgRIABgWIACguIBZAAIAAB8IgWAAIAAhqIgvAAIgBAfQgBAVgCAQQgEAPgEAJQgFAKgHADQgHAEgJAAg");
	this.shape_15.setTransform(55.5,99.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdA/Igwg5IgQANIAAAsIgVAAIAAh9IAVAAIAAA9IA/g9IAcAAIg6A4IA7BFg");
	this.shape_16.setTransform(43.5,98.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgsBBQgOgWAAgrQAAgpAOgXQANgWAfAAQAhAAANAWQAMAXAAApQAAArgMAWQgNAWghAAQgfAAgNgWgAgSgsQgGAPAAAdQAAAdAGAQQAEAPAOAAQAPAAAFgPQAEgQAAgdQAAgdgEgPQgFgPgPAAQgOAAgEAPg");
	this.shape_17.setTransform(22.8,96.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtBBQgMgWAAgrQAAgpAMgXQANgWAgAAQAgAAANAWQAOAXAAApQAAArgOAWQgNAWggAAQggAAgNgWgAgSgsQgFAPgBAdQABAdAFAQQAEAPAOAAQAPAAAEgPQAFgQAAgdQAAgdgFgPQgEgPgPAAQgOAAgEAPg");
	this.shape_18.setTransform(9.5,96.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADBVIAAh0IgnAAIAAgXQAQgBAGgBQAKgCAFgHQAFgFACgHIABgHIAcAAIAACpg");
	this.shape_19.setTransform(-5,96.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AADBVIAAh0IgnAAIAAgXQAQgBAGgBQAKgCAFgHQAFgFACgHIABgHIAcAAIAACpg");
	this.shape_20.setTransform(-17,96.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(47.5,34.6,1,1,0,0,0,47.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-33.7,-6.9,159.8,145.6), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(-30,62,403,481), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17_1();
	this.instance.parent = this;
	this.instance.setTransform(115.5,33.5,1,1,0,0,0,115.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.98,scaleY:0.98,x:115.6,y:33.6},2,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,y:33.5},3,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96,y:33.6},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:115.5,y:33.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-9,376.5,94.1);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(80.9,44.5,1,1,0,0,0,42.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-44,0,224.5,139.4), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(49.9,42.5,1,1,0,0,0,42.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-22.3,-6.9,137.7,145.9), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(54.2,68.5,1,1,0,0,0,46.5,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-26,-6.9,159.8,145.6), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3_1();
	this.instance.parent = this;
	this.instance.setTransform(242.2,241,1,1,0,0,0,203.5,241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(8.7,62,403,481), null);


(lib.Symbol18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.5,33.5,1,1,0,0,0,115.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-9,376.5,94.1);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(82.5,432,1,1,0,0,0,82.5,432);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:424.4},19,cjs.Ease.get(-1)).to({y:416.4},20,cjs.Ease.get(1)).to({y:424.2},20,cjs.Ease.get(-1)).to({y:432},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.7,62,403,481);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArOYaMAAAgljMAqpAAAMAAAAljg");
	mask.setTransform(201.1,156.3);

	// Layer 10
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(243.3,194.6,1.148,1.148,0,0,0,68.7,70.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({regX:68.6,x:-66.6},11,cjs.Ease.cubicOut).wait(172).to({x:-20.9},0).to({regX:68.7,x:243.3},11,cjs.Ease.bounceOut).wait(1));

	// Layer 12
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.9,195.7,1.148,1.148,0,0,0,53.9,68.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({x:267.4},11,cjs.Ease.bounceOut).wait(50).to({x:14.8},11).wait(123));

	// Layer 13
	this.instance_2 = new lib.Symbol26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-149.5,194.8,1.148,1.148,0,0,0,46.5,68.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({regX:46.6,x:12.5},0).to({x:264.8},11,cjs.Ease.bounceOut).wait(50).to({regX:46.5,x:23.9},11).wait(62));

	// Layer 11
	this.instance_3 = new lib.Symbol27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-309.1,193.1,1.148,1.148,0,0,0,78.5,67.9);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({x:-147.2},0).wait(61).to({x:-8.3},0).to({regX:78.6,x:280.9},11,cjs.Ease.bounceOut).wait(50).to({x:244.4},0).to({regX:78.5,x:-31.3},11).wait(1));

	// Symbol 11
	this.instance_4 = new lib.Symbol11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(528.2,208.9,0.637,0.637,0,0,0,283.5,290.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({y:448.2},11,cjs.Ease.sineIn).wait(172).to({y:208.9},11,cjs.Ease.sineIn).wait(1));

	// Symbol 13
	this.instance_5 = new lib.Symbol13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(569.7,486.7,0.618,0.618,0,0,0,203.8,241.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({y:203.9},11,cjs.Ease.sineOut).wait(50).to({regY:241.3,y:485.7},11,cjs.Ease.sineIn).wait(123));

	// tank
	this.tank = new lib.Symbol33();
	this.tank.parent = this;
	this.tank.setTransform(570.6,532.8,0.533,0.533,0,0,0,238.1,307.4);

	this.timeline.addTween(cjs.Tween.get(this.tank).wait(110).to({x:571.4,y:256.8},11,cjs.Ease.sineOut).wait(50).to({y:282.4},0).to({y:504.6},11,cjs.Ease.sineIn).wait(62));

	// vans
	this.vans = new lib.Symbol34();
	this.vans.parent = this;
	this.vans.setTransform(631.3,518.4,0.555,0.555,0,0,0,260.2,306.2);

	this.timeline.addTween(cjs.Tween.get(this.vans).wait(171).to({y:268},11,cjs.Ease.sineOut).wait(50).to({regY:306.1,y:507.2},11,cjs.Ease.sineIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.2,23.7,566.6,672.7);


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

	// Layer 1
	this.txtnew = new lib.Symbol14();
	this.txtnew.parent = this;
	this.txtnew.setTransform(639.4,85.3,0.565,0.565,0,0,0,120,11.1);

	this.timeline.addTween(cjs.Tween.get(this.txtnew).wait(1));

	// Symbol 26
	this.txt = new lib.Symbol30();
	this.txt.parent = this;
	this.txt.setTransform(640,38.6,0.52,0.52,0,0,0,-46.4,83.8);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 3
	this.logo = new lib.Symbol29();
	this.logo.parent = this;
	this.logo.setTransform(97.5,46.7,0.615,0.615,0,0,0,460.8,167.8);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Symbol 18
	this.instance = new lib.Symbol18_1();
	this.instance.parent = this;
	this.instance.setTransform(284.6,44.5,0.557,0.557,0,0,0,116,34.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol18_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 7
	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1031.1,79.6,0.47,0.47,0,0,0,486.5,262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 8
	this.people = new lib.Symbol5();
	this.people.parent = this;
	this.people.setTransform(363.1,120.2,0.736,0.736,0,0,0,381.1,148.1);

	this.timeline.addTween(cjs.Tween.get(this.people).wait(1));

	// Layer 2
	this.back = new lib.Symbol2();
	this.back.parent = this;
	this.back.setTransform(531.9,28,1.381,1,0,180,0,511.9,384);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(334,-344,2437.7,834);
// library properties:
lib.properties = {
	id: 'FD400AA1CA164858827D9B8B1676C338',
	width: 1140,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1506694281868", id:"back"},
		{src:"images/Bestcontor.png?1506694281868", id:"Bestcontor"},
		{src:"images/button.png?1506694281868", id:"button"},
		{src:"images/donottouch.png?1506694281868", id:"donottouch"},
		{src:"images/e2017.png?1506694281868", id:"e2017"},
		{src:"images/fastpidr.png?1506694281868", id:"fastpidr"},
		{src:"images/firstr.png?1506694281868", id:"firstr"},
		{src:"images/logo.png?1506694281868", id:"logo"},
		{src:"images/money1.png?1506694281868", id:"money1"},
		{src:"images/money2.png?1506694281868", id:"money2"},
		{src:"images/people.png?1506694281868", id:"people"},
		{src:"images/pidr.png?1506694281868", id:"pidr"},
		{src:"images/shop1.png?1506694281868", id:"shop1"},
		{src:"images/tank.png?1506694281868", id:"tank"}
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