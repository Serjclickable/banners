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
	this.instance.setTransform(64,85,1.557,1.557);

	this.instance_1 = new lib.Bestcontor();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-466.1,15.9,1.557,1.557);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-466.1,15.9,846.8,140.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAeAoIAAhPIAUAAIAABPgAgIAoIgpAAIAAhPIAUAAIAAAcIATAAQAIAAAEABQAGACAEADQAEADACAFQADAFAAAGQAAAGgCAEQgCAFgDADIgGAEIgGADIgFABgAgdAYIAQAAIAEAAIAFgBIADgEIABgFIgBgFIgEgDIgEgCIgGAAIgOAAg");
	this.shape.setTransform(93.6,130.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMApQgHgCgEgDQgFgDgCgFQgDgGAAgHIAUAAIABAFIACAEQADACACAAIAFABIAGgBIAEgDIACgEIABgEQgBgFgDgDQgCgCgHAAIgJAAIAAgNIAIAAQAGAAADgCQADgDAAgEIgBgFIgDgDIgDgBIgEgBQgFAAgEADQgCACAAAFIgUAAQAAgHADgEQACgFAFgDQAEgDAGgBIAMgBQAIAAAGABQAGACADAEQAEADABAEQADAEAAAEIgBAGIgEAFIgDADIgFACIAAABQAEAAADACQADABACACIADAGIAAAGQAAAHgCAFQgEAGgEADQgFADgGACIgMABQgGAAgHgBg");
	this.shape_1.setTransform(83.9,130.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAoIAAgvIAAAAIgbAvIgXAAIAAhPIAVAAIAAAwIAAAAIAcgwIAWAAIAABPg");
	this.shape_2.setTransform(75.5,130.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmA5IAAhvIAUAAIAAAMIAAAAIAFgGIAFgFIAGgCIAHgBIAIABIAIADIAHAFIAFAIIAEAKQABAHABAHQAAAKgCAHQgDAIgEAFQgEAHgGACQgHAEgJAAIgFgBIgFgCIgGgDIgEgHIgBAAIAAAqgAgJgjQgDACgBADQgDAEgBAEIgBAJIAAAEIACAGIACAFIACAEIAGADIAGABIAFgBIAGgDIACgEIACgFIABgGIABgEIgBgJIgDgIQgCgDgEgCQgDgCgEAAQgFAAgEACg");
	this.shape_3.setTransform(66.6,132.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAoIAAg+IgdAAIAAA+IgVAAIAAhPIBHAAIAABPg");
	this.shape_4.setTransform(57.2,130.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAoQgHgDgGgFQgFgFgDgIQgDgIAAgLQAAgIACgIQACgHAFgGQAFgGAHgDQAHgDAJAAQALAAAHADQAHAEAFAGQAEAGACAJQACAJAAAKIg2AAIAAADIABAEIACAEIADAEQACACAEABIAGABIAEAAIAEgCIADgDIACgEIAWAAIgBAFIgDAGIgFAFQgDADgEACQgEADgFABQgFABgGAAQgHAAgHgCgAAQgGQAAgGgBgDQgCgEgCgCIgGgDIgFgBIgEABIgGADQgCACgCAEQgBADAAAGIAfAAIAAAAg");
	this.shape_5.setTransform(44.4,130.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeAoIAAhPIAUAAIAABPgAgIAoIgpAAIAAhPIAUAAIAAAcIATAAQAIAAAEABQAGACAEADQAEADACAFQADAFAAAGQAAAGgCAEQgCAFgDADIgGAEIgGADIgFABgAgdAYIAQAAIAEAAIAFgBIADgEIABgFIgBgFIgEgDIgEgCIgGAAIgOAAg");
	this.shape_6.setTransform(34.2,130.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAoIAAgiIgdAAIAAAiIgVAAIAAhPIAVAAIAAAdIAdAAIAAgdIAVAAIAABPg");
	this.shape_7.setTransform(23.6,130.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAoQgHgDgGgFQgFgFgDgIQgDgIAAgLQAAgIACgIQACgHAFgGQAFgGAHgDQAHgDAJAAQALAAAHADQAHAEAFAGQAEAGACAJQACAJAAAKIg2AAIAAADIABAEIACAEIADAEQACACAEABIAGABIAEAAIAEgCIADgDIACgEIAWAAIgBAFIgDAGIgFAFQgDADgEACQgEADgFABQgFABgGAAQgHAAgHgCgAAQgGQAAgGgBgDQgCgEgCgCIgGgDIgFgBIgEABIgGADQgCACgCAEQgBADAAAGIAfAAIAAAAg");
	this.shape_8.setTransform(14.9,130.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWAxIAAgTIg+AAIAAhPIAVAAIAAA+IAdAAIAAg+IAVAAIAAA+IAKAAIAAAkg");
	this.shape_9.setTransform(6.6,131.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUAnIAAg7IglA7IgQAAIAAhNIAOAAIAAA7IAlg7IAQAAIAABNg");
	this.shape_10.setTransform(-7,130.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUAnIAAg7IglA7IgQAAIAAhNIAOAAIAAA7IAlg7IAQAAIAABNg");
	this.shape_11.setTransform(106.3,113.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwAnIAAhNIAOAAIAABCIAcAAIAAhCIANAAIAABCIAcAAIAAhCIANAAIAABNg");
	this.shape_12.setTransform(96.2,113.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAfAnIAAhNIANAAIAABNgAgrAnIAAhNIANAAIAAAdIAYAAQAGAAAEACQAFACAEADQADACACAFQACAEAAAGQAAAGgCAEQgCAFgDADQgEADgFACQgEABgGAAgAgeAcIAVAAIAHAAQACgBACgCIADgEIABgGIgBgGIgDgFIgFgCIgHgBIgUAAg");
	this.shape_13.setTransform(84.9,113.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiA4IAAhtIAOAAIAAALIABAAIADgFIAFgEIAGgDIAHgBQAHAAAGACQAGADAEAFQAFAFACAHQACAHABAKQgBAMgCAHQgCAJgEAFQgGAGgFACQgHADgIgBIgGAAIgGgDIgFgEIgCgEIgBAAIAAAogAgIgpQgEADgDADQgDAEgBAGIgBAMIABAMQABAFADAEQADADAEADQAEACAEAAQAFAAAFgCQADgDADgDQADgEABgFIABgMIgBgMQgBgGgDgEQgDgDgDgDQgFgCgFAAQgEAAgEACg");
	this.shape_14.setTransform(75.6,115.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAnIAAhNIAvAAIAAAMIgiAAIAABBg");
	this.shape_15.setTransform(68.6,113.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAfAnIAAhNIANAAIAABNgAgrAnIAAhNIANAAIAAAdIAYAAQAGAAAEACQAFACAEADQADACACAFQACAEAAAGQAAAGgCAEQgCAFgDADQgEADgFACQgEABgGAAgAgeAcIAVAAIAHAAQACgBACgCIADgEIABgGIgBgGIgDgFIgFgCIgHgBIgUAAg");
	this.shape_16.setTransform(59.8,113.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLAoQgGgCgEgEQgFgDgCgFQgDgFgBgGIAOAAQABAEABADIAFAFIAHACIAFABQAJAAAFgEQAFgEAAgGIgBgFIgDgDIgFgDIgIAAIgDAAIgBAAIgCAAIgDAAIAAgKIAGAAIAGgBIAFgCIAFgEQABgCAAgDIgBgEIgDgEIgFgDIgHgBIgDABIgGACIgEAEIgEAIIgMAAIACgJIAFgHQACgDADgCIAGgDIAHgCIAFgBIALACIAJAEQAEADACAEQADAEAAAGIgCAGIgCAFIgEADIgEADIAFABIAEADIAEAFIABAIQAAAGgCAFQgDAFgFADQgEAEgGABIgMACQgGAAgGgCg");
	this.shape_17.setTransform(50.6,113.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAnQgHgDgFgGQgEgFgDgIQgCgHAAgKQAAgJACgHQADgIAEgFQAFgGAHgDQAGgDAIAAQAIAAAHADQAHADAFAGQAEAFADAIQACAHAAAJQAAAKgCAHQgDAIgEAFQgFAGgHADQgHADgIAAQgIAAgGgDgAgJgbQgEADgDAEQgDADgCAGIgBALIABAMQACAGADAEQADADAEADQAEACAFAAQAGAAAEgCQAEgDADgDQADgEABgGQACgFAAgHQAAgGgCgFQgBgGgDgDQgDgEgEgDQgEgCgGAAQgFAAgEACg");
	this.shape_18.setTransform(42.8,113.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghA4IAAhtIANAAIAAALIAAAAIAEgFIAEgEIAHgDIAIgBQAGAAAFACQAGADAFAFQAEAFADAHQACAHAAAKQAAAMgCAHQgDAJgEAFQgEAGgHACQgGADgIgBIgGAAIgGgDIgEgEIgEgEIAAAAIAAAogAgJgpQgEADgCADQgCAEgCAGIgBAMIABAMQACAFACAEQACADAEADQAFACAEAAQAFAAAFgCQAEgDACgDQACgEACgFIABgMIgBgMQgCgGgCgEQgCgDgEgDQgFgCgFAAQgEAAgFACg");
	this.shape_19.setTransform(34.7,115.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAMQAFgBACgGIAAgFIAAgBIAAgBIgHAAIAAgQIAPAAIAAAPQAAAHgEAHQgDAGgIACg");
	this.shape_20.setTransform(24,118.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUAnIAAg7IglA7IgQAAIAAhNIAOAAIAAA7IAlg7IAQAAIAABNg");
	this.shape_21.setTransform(17.6,113.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUAnIAAg7IglA7IgQAAIAAhNIAOAAIAAA7IAlg7IAQAAIAABNg");
	this.shape_22.setTransform(8.9,113.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAYAxIAAgTIg8AAIAAhOIAOAAIAABCIAkAAIAAhCIANAAIAABCIAJAAIAAAfg");
	this.shape_23.setTransform(0.6,114.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AASAnIgdgjIgKAIIAAAbIgOAAIAAhNIAOAAIAAAmIAngmIARAAIgjAiIAkArg");
	this.shape_24.setTransform(-7.7,113.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAhA3IgMghIgpAAIgMAhIgPAAIAohtIAQAAIAoBtgAARAKIgRgvIgRAvIAiAAg");
	this.shape_25.setTransform(-17.3,112.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.money2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-24.5,0,137.3,140.2), null);


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
	this.instance_1.setTransform(-25,2,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17_1, new cjs.Rectangle(-25,2,363.6,74.4), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,137.3,140.2), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgArIAAhUIAWAAIAABUgAgIArIgtAAIAAhUIAWAAIAAAdIAUAAQAIAAAGACQAGABAEAEQAEADADAFQACAFAAAHQAAAGgCAFQgCAFgDACIgGAGIgHACIgGACgAgfAaIARAAIAFgBIAEgBIAEgDIABgGIgBgGIgEgDIgFgCIgGAAIgPAAg");
	this.shape.setTransform(77.3,125.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaArIAAhEIgQBEIgTAAIgQhEIAABEIgVAAIAAhUIAhAAIANA8IABAAIAOg8IAgAAIAABUg");
	this.shape_1.setTransform(65.1,125.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaArIAAhEIgQBEIgTAAIgQhEIAABEIgVAAIAAhUIAhAAIANA8IABAAIAOg8IAgAAIAABUg");
	this.shape_2.setTransform(49.1,125.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQArIAAgzIgdAzIgYAAIAAhUIAWAAIAAAzIAAAAIAegzIAXAAIAABUg");
	this.shape_3.setTransform(38.5,125.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKArIAAhCIgaAAIAAgSIBJAAIAAASIgaAAIAABCg");
	this.shape_4.setTransform(29.6,125.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYArIgIgEQgDgEgCgFQgCgFAAgGQAAgGACgEQABgFADgDIAHgEIAKgEIAVgDIADAAIACgBIACgCIABgEIgBgDIgCgDQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAgBIgGgBIgHABIgEADQgBAAAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBAFIgVAAIAAgFIACgGIAEgGQACgEAEgDQAEgCAGgDQAFgBAJAAQAKAAAHACQAHACAEAEQAEAEACAEIABAJIAAAsIABAHIAAAEIACACIACABIAAAEIgYAAIgCgEIAAgGIgGAEIgFAFIgGACIgKABQgFAAgGgCgAAIADIgFACIgEABIgHABIgFACIgDAFIgBAFIABAFIACADIAEACIAEABIAEgBIACgBIAFgCIAEgDIACgGQACgDAAgFIAAgIg");
	this.shape_5.setTransform(21.2,125.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmArIgEgBIAAgSIADABIADAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQACgBABgEQACgEAAgHIACgSIAAggIBDAAIAABUIgVAAIAAhCIgZAAIgBAQIgBAWQgCAKgDAHQgDAHgFADQgFAEgIAAg");
	this.shape_6.setTransform(11.2,125.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQArIAAhCIgfAAIAABCIgWAAIAAhUIBLAAIAABUg");
	this.shape_7.setTransform(1.5,125.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWArQgFgCgDgDQgEgDgCgEQgDgFAAgGQAAgGADgFQACgFADgDQAEgCAEgCQAFgCAFAAIAWgDQAEAAABgDQACgCAAgFQAAgHgFgEQgFgDgIAAQgJAAgFAEQgFAEAAAIIgOAAQAAgHADgGQADgFAEgDQAFgEAGgBIAOgBIAKABIALAEQAEADADAEQACAEAAAHIAAAvIABAEQABAAAAAAQAAABABAAQAAAAABAAQABAAAAAAIACAAIADAAIAAAKIgEAAIgEABIgGgBQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgDgEIgBgFIgGAFIgGAEIgIADIgKABQgFAAgEgBgAAMABIgGACIgGABIgGAAIgHACIgGADIgEAEQgBACAAADQAAAEABACIADAFIAFADIAGABIAFgBIAFgBIAFgDIAFgEIAEgFQABgDAAgDIAAgNg");
	this.shape_8.setTransform(110.2,107.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzAqIAAhTIAPAAIAABGIAeAAIAAhGIANAAIAABGIAeAAIAAhGIAPAAIAABTg");
	this.shape_9.setTransform(99.4,107.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhAqIAAhTIAOAAIAABTgAguAqIAAhTIAOAAIAAAgIAZAAQAHAAAFABQAFACAEAEIAGAHQABAFAAAGQAAAGgBAFIgGAIQgEADgFACQgFACgHAAgAggAeIAWAAIAHgBQADAAACgCIAEgFQABgCAAgEQAAgEgBgDQgCgDgCgBIgFgDIgIgBIgVAAg");
	this.shape_10.setTransform(87.4,107.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkA8IAAh0IAOAAIAAALIABAAIADgFIAFgEIAHgDIAIgCQAHAAAGADQAGACAFAGQAFAEADAIQADAJAAAJQAAAOgDAHQgDAJgEAGQgFAGgHACQgHADgIAAIgHgBIgGgDIgFgEIgDgEIgBAAIAAArgAgJgsQgFADgCAEQgDAEgCAGIgBANIABANQACAFADAEQACAEAFACQAEACAFABQAFgBAFgCQAEgCADgEQADgEABgFQABgGAAgHQAAgHgBgGQgBgGgDgEQgDgEgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_11.setTransform(77.4,109.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAqIAAhTIAzAAIAAANIglAAIAABGg");
	this.shape_12.setTransform(70,107.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWAqIAAg/IgBAAIgoA/IgQAAIAAhTIAOAAIAAA/IApg/IAQAAIAABTg");
	this.shape_13.setTransform(61.7,107.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAhAqIAAhTIAOAAIAABTgAguAqIAAhTIAOAAIAAAgIAZAAQAHAAAFABQAFACAEAEIAGAHQABAFAAAGQAAAGgBAFIgGAIQgEADgFACQgFACgHAAgAggAeIAWAAIAHgBQADAAACgCIAEgFQABgCAAgEQAAgEgBgDQgCgDgCgBIgFgDIgIgBIgVAAg");
	this.shape_14.setTransform(51.3,107.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiAqIAAhTIAiAAQAQAAAHAGQAIAFAAALQAAAGgDAEQgDAEgEADQAGACAEAEQAEAFAAAHQAAAGgCAFQgCAFgEADQgEADgGACQgGACgIAAgAgUAeIAVAAIAKgBIAGgCIADgEIABgGIgBgFIgDgEIgGgDIgKgBIgVAAgAgUgGIAVAAQAHAAAEgCQAFgDAAgGQAAgEgCgCIgDgEIgEgCIgFAAIgXAAg");
	this.shape_15.setTransform(41.3,107.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHArQgEAAgEgDIgHgFQgEgDgDgFIgEgMQgBgGAAgJQAAgJACgIQAEgJAFgFQAEgGAHgDQAHgDAGAAIALABIAKAEIAGAFQADADABAEIACAGIACAHIgOAAQgBgIgFgFQgFgFgIAAQgFAAgFACQgEADgDAEQgDAFgCAGQgBAGAAAGQAAAIABAGQACAGADAEQADAEAEACQAFACAEAAQADAAAEgCQADgBACgDQADgCACgEIADgJIAOAAIgCAHIgDAHQgBAEgDADQgDADgDADIgJAEQgGABgGAAg");
	this.shape_16.setTransform(28.5,107.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWAqIAAg/IgBAAIgoA/IgQAAIAAhTIAOAAIAAA/IApg/IAQAAIAABTg");
	this.shape_17.setTransform(15.3,107.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAqIAAhTIAzAAIAAANIglAAIAABGg");
	this.shape_18.setTransform(7.9,107.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQApQgHgDgEgGQgFgFgDgJQgDgIAAgKQAAgJADgJQADgIAFgGQAEgFAHgDQAIgDAIAAQAJAAAIADQAHADAFAFQAEAGADAIQADAJAAAJQAAAKgDAIQgDAJgEAFQgFAGgHADQgIADgJAAQgIAAgIgDgAgJgdQgFADgDAEQgDAEgCAGQgBAGgBAGQABAHABAGQACAGADAEQADAEAFACQAEADAFAAQAGAAAEgDQAFgCADgEQAEgEABgGQACgGAAgHQAAgGgCgGQgBgGgEgEQgDgEgFgDQgEgCgGAAQgFAAgEACg");
	this.shape_19.setTransform(-0.1,107.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAqIgDgBIAAgNIAGABIADAAIADgCIACgFIACgHIACgLIABgPIAAgfIA8AAIAABTIgPAAIAAhGIgfAAIgBAUQAAAOgCAKQgCAKgDAGQgDAHgFACQgEADgGAAg");
	this.shape_20.setTransform(-9.6,108);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWArQgFgCgDgDQgEgDgCgEQgDgFAAgGQAAgGADgFQACgFADgDQAEgCAEgCQAFgCAFAAIAWgDQAEAAABgDQACgCAAgFQAAgHgFgEQgFgDgIAAQgJAAgFAEQgFAEAAAIIgOAAQAAgHADgGQADgFAEgDQAFgEAGgBIAOgBIAKABIALAEQAEADADAEQACAEAAAHIAAAvIABAEQABAAAAAAQAAABABAAQAAAAABAAQABAAAAAAIACAAIADAAIAAAKIgEAAIgEABIgGgBQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgDgEIgBgFIgGAFIgGAEIgIADIgKABQgFAAgEgBgAAMABIgGACIgGABIgGAAIgHACIgGADIgEAEQgBACAAADQAAAEABACIADAFIAFADIAGABIAFgBIAFgBIAFgDIAFgEIAEgFQABgDAAgDIAAgNg");
	this.shape_21.setTransform(-18,107.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAfA5IAAg1Ig9AAIAAA1IgPAAIAAhyIAPAAIAAAwIA9AAIAAgwIAPAAIAAByg");
	this.shape_22.setTransform(-28.4,106.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(42.5,44.5,1,1,0,0,0,42.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-38.4,0,157.1,135.8), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAqIgfgmIgLAJIAAAdIgOAAIAAhTIAOAAIAAApIApgpIATAAIgmAlIAnAug");
	this.shape.setTransform(79.7,126.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQApQgHgDgFgGQgEgFgDgJQgDgIAAgKQAAgJADgJQADgIAEgGQAFgFAHgDQAIgDAIAAQAJAAAHADQAIADAEAFQAGAGACAIQADAJAAAJQAAAKgDAIQgCAJgGAFQgEAGgIADQgHADgJAAQgIAAgIgDgAgKgdQgEADgDAEQgDAEgCAGQgBAGAAAGQAAAHABAGQACAGADAEQADAEAEACQAFADAFAAQAGAAAEgDQAFgCADgEQADgEACgGQABgGABgHQgBgGgBgGQgCgGgDgEQgDgEgFgDQgEgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(70.5,126.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAqIAAhTIAiAAQAQAAAHAGQAIAFAAALQAAAGgDAEQgDAEgEADQAGACAEAEQAEAFAAAHQAAAGgCAFQgCAFgEADQgEADgGACQgGACgIAAgAgUAeIAVAAIAKgBIAGgCIADgEIABgGIgBgFIgDgEIgGgDIgKgBIgVAAgAgUgGIAVAAQAHAAAEgCQAFgDAAgGQAAgEgCgCIgDgEIgEgCIgFAAIgXAAg");
	this.shape_2.setTransform(61.8,126.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPApQgIgDgEgGQgGgFgCgJQgDgIAAgKQAAgJADgJQACgIAGgGQAEgFAIgDQAHgDAIAAQAJAAAIADQAHADAFAFQAEAGADAIQADAJAAAJQAAAKgDAIQgDAJgEAFQgFAGgHADQgIADgJAAQgIAAgHgDgAgJgdQgFADgDAEQgDAEgCAGQgBAGgBAGQABAHABAGQACAGADAEQADAEAFACQAEADAFAAQAGAAAFgDQAEgCADgEQADgEACgGQABgGAAgHQAAgGgBgGQgCgGgDgEQgDgEgEgDQgFgCgGAAQgFAAgEACg");
	this.shape_3.setTransform(52.9,126.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA8IAAh0IAOAAIAAALIABAAIADgFIAFgFIAHgCIAIgBQAHAAAGACQAGADAFAFQAFAFADAHQADAIAAAKQAAANgDAJQgDAIgEAGQgFAGgHACQgHADgIAAIgHgBIgGgDIgFgDIgDgFIgBAAIAAArgAgJgsQgFADgCAEQgDAEgCAGIgBANIABANQACAEADAEQACAFAFACQAEACAFABQAFgBAFgCQAEgCADgFQADgEABgEQABgGAAgHQAAgHgBgGQgBgGgDgEQgDgEgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_4.setTransform(44.2,128.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWAqIAAg/IgBAAIgoA/IgQAAIAAhTIAOAAIAAA/IApg/IAQAAIAABTg");
	this.shape_5.setTransform(34.9,126.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAqIgfgmIgKAJIAAAdIgPAAIAAhTIAPAAIAAApIAogpIATAAIgmAlIAnAug");
	this.shape_6.setTransform(26.4,126.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPApQgHgDgGgGQgFgFgCgJQgDgIAAgKQAAgJADgJQACgIAFgGQAGgFAHgDQAHgDAIAAQAJAAAHADQAHADAGAFQAFAGACAIQADAJAAAJQAAAKgDAIQgCAJgFAFQgGAGgHADQgHADgJAAQgIAAgHgDgAgKgdQgEADgDAEQgDAEgCAGQgCAGABAGQgBAHACAGQACAGADAEQADAEAEACQAFADAFAAQAGAAAFgDQAEgCADgEQADgEACgGQACgGgBgHQABgGgCgGQgCgGgDgEQgDgEgEgDQgFgCgGAAQgFAAgFACg");
	this.shape_7.setTransform(17.1,126.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAqIgDgBIAAgNIAGABIADAAIADgCIACgFIACgHIACgLIABgPIAAgfIA8AAIAABTIgPAAIAAhGIgfAAIgBAUQAAAOgCAKQgCAKgDAGQgDAHgFACQgEADgGAAg");
	this.shape_8.setTransform(7.7,127);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGA7IgIgCIgIgFIgIgHIgCgFIgDgHIgCgKIgBgNIAAgKIACgNIAEgNQABgGADgEQAEgFADgDQAEgEAEgBQAEgCAFgBIAJgBIAFAAIAEAAIADgBIACgBIABgDIALAAIAAADIgBADIgCAEIgEAEIgCABIgDABIgEABIgHAAIgFABQgGAAgEACQgGACgDAEIgGAKIgEANIAEgGQACgDAFgCQADgDAFgBQAEgCAGAAQAHAAAHADQAGADAFAFQAFAFADAIQADAGAAAKIAAAIIgCAKIgFAKQgCAFgFAEQgEADgGADQgGACgJAAgAgKgMQgEADgEAEQgCAEgCAFQgCAGABAGIAAAGIABAHIACAHQACADADADIAGAEQAFACAEAAQAGAAAFgCIAGgFIAFgHIABgIIABgGIAAgFIgBgLQgBgFgDgEQgDgEgEgDQgFgCgGAAQgGAAgFACg");
	this.shape_9.setTransform(-0.9,125.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOAqIgNgZIgPAZIgbAAIAdgqIgcgpIAcAAIANAYIANgYIAbAAIgcApIAdAqg");
	this.shape_10.setTransform(68.9,108.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQAqIAAgyIgdAyIgYAAIAAhTIAWAAIAAAzIAAAAIAegzIAXAAIAABTg");
	this.shape_11.setTransform(59.5,108.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAqIgXgkIgJAJIAAAbIgXAAIAAhTIAXAAIAAAfIAegfIAeAAIgjAjIAlAwg");
	this.shape_12.setTransform(50.3,108.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXArIgIgEQgEgEgCgFQgCgFAAgGQAAgFABgFQACgEAEgDIAHgFIAKgDIAUgEIACAAIADgBIACgCIABgEIgBgDIgCgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBgBIgFgBIgHABIgEADQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIgBAFIgXAAIABgFIACgGIADgGQADgEAEgDQAEgCAGgCQAGgCAHAAQALAAAHACQAHADAEADQAEAEABAEIACAJIAAAsIAAAHIACAEIABACIACABIAAADIgZAAIgBgDIgBgHIgFAGIgFADIgGADIgKABQgGAAgEgCgAAIADIgEACIgGAAIgHACIgEACIgDAFIgBAFIABAFIADADIADACIAEABIADgBIAEgBIAEgCIAEgDIADgGQABgDAAgFIAAgIg");
	this.shape_13.setTransform(40.5,108.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAqIgYgkIgJAJIAAAbIgXAAIAAhTIAXAAIAAAfIAegfIAeAAIgjAjIAlAwg");
	this.shape_14.setTransform(31.7,108.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAQAqIAAgyIgdAyIgYAAIAAhTIAWAAIAAAzIAAAAIAegzIAXAAIAABTg");
	this.shape_15.setTransform(21.4,108.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXA5IAAgzIgtAAIAAAzIgYAAIAAhyIAYAAIAAAsIAtAAIAAgsIAYAAIAAByg");
	this.shape_16.setTransform(10.8,107.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(42.5,42.5,1,1,0,0,0,42.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-7.4,0,93.1,136.8), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUAqIgUgfIgTAfIgSAAIAdgqIgcgpIASAAIATAdIATgdIARAAIgcApIAdAqg");
	this.shape.setTransform(93.9,126.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWArQgFgCgDgDQgEgDgCgEQgDgFAAgGQAAgGADgFQACgFADgDQAEgCAEgCQAFgCAFAAIAWgDQAEAAABgDQACgCAAgFQAAgHgFgEQgFgDgIAAQgJAAgFAEQgFAEAAAIIgOAAQAAgHADgGQADgFAEgDQAFgEAGgBIAOgBIAKABIALAEQAEADADAEQACAEAAAHIAAAvIABAEQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIACAAIADAAIAAAKIgEAAIgEABIgGgBQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgDgEIgBgFIgGAFIgGAEIgIADIgKABQgFAAgEgBgAAMABIgGACIgGABIgGAAIgHACIgGADIgEAEQgBACAAADQAAAEABACIADAFIAFADIAGABIAFgBIAFgBIAFgDIAFgEIAEgFQABgDAAgDIAAgNg");
	this.shape_1.setTransform(85.7,126.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhA0IAAgVIhAAAIAAAVIgOAAIAAghIALAAIAGgRIADgRIABgSIAAgSIA6AAIAABGIAMAAIAAAhgAgLgYIgBAPIgDAOIgEAOIAmAAIAAg6IgcAAg");
	this.shape_2.setTransform(76.2,127.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQApQgGgDgFgGQgFgFgDgJQgDgIAAgKQAAgJADgJQADgIAFgGQAFgFAGgDQAIgDAIAAQAJAAAIADQAGADAFAFQAFAGADAIQADAJAAAJQAAAKgDAIQgDAJgFAFQgFAGgGADQgIADgJAAQgIAAgIgDgAgJgdQgFADgDAEQgEAEgBAGQgBAGgBAGQABAHABAGQABAGAEAEQADAEAFACQAEADAFAAQAGAAAEgDQAFgCADgEQAEgEABgGQACgGAAgHQAAgGgCgGQgBgGgEgEQgDgEgFgDQgEgCgGAAQgFAAgEACg");
	this.shape_3.setTransform(67,126.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA7IAAhzIAOAAIAAALIABAAIADgFIAFgFIAHgCIAIgBQAHgBAGADQAGADAFAFQAFAFADAHQADAJAAAJQAAANgDAJQgDAIgEAGQgFAGgHACQgHADgIAAIgHgBIgGgDIgFgDIgDgFIgBAAIAAAqgAgJgsQgFACgCAFQgDAEgCAGIgBANIABAMQACAGADADQACAFAFACQAEADAFgBQAFABAFgDQAEgCADgFQADgDABgGQABgFAAgHQAAgHgBgGQgBgGgDgEQgDgFgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_4.setTransform(58.4,128.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQApQgHgDgFgGQgEgFgDgJQgDgIAAgKQAAgJADgJQADgIAEgGQAFgFAHgDQAIgDAIAAQAJAAAHADQAIADAEAFQAGAGACAIQADAJAAAJQAAAKgDAIQgCAJgGAFQgEAGgIADQgHADgJAAQgIAAgIgDgAgKgdQgEADgDAEQgDAEgCAGQgBAGAAAGQAAAHABAGQACAGADAEQADAEAEACQAFADAFAAQAGAAAEgDQAFgCADgEQADgEACgGQABgGABgHQgBgGgBgGQgCgGgDgEQgDgEgFgDQgEgCgGAAQgFAAgFACg");
	this.shape_5.setTransform(49.3,126.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAqIAAhTIAzAAIAAANIgkAAIAABGg");
	this.shape_6.setTransform(42.1,126.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdArQgJgPAAgcQAAgbAJgQQAIgOAVAAQAVAAAKAOQAIAQAAAbQAAAcgIAPQgKAQgVAAQgVAAgIgQgAgMgdQgDAKAAATQAAATADALQADAKAJAAQAKAAADgKQADgLAAgTQAAgTgDgKQgDgKgKAAQgJAAgDAKg");
	this.shape_7.setTransform(29.6,125.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeApQgIgOAAgWIABgUQACgPAFgJQAFgJAIgFQAIgFAKAAQAQAAAJAJQAJAIACANIgXAAQAAgDgCgDQgDgFgIAAQgJAAgFAMQgDAHAAANQAEgFAFgCQAGgDAGAAQAPAAAJAKQAKAKAAAQQAAAQgJAMQgKAMgUAAQgUAAgKgSgAgJADQgHAGAAALQAAAJAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgIQAAgKgEgGQgFgFgHAAQgFAAgEADg");
	this.shape_8.setTransform(20.8,125.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmA5QABgMAEgLQAFgKASgNIATgPQAHgHAAgKQAAgGgEgFQgEgFgIAAQgJAAgDAHQgCAFgBAKIgVAAQAAgPAFgJQAJgRAWAAQARAAALAKQALAKAAAQQAAANgIAJQgFAHgLAHIgJAGIgKAJIgGAHIAxAAIAAATg");
	this.shape_9.setTransform(11.9,125.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiAqIAAhTIAiAAQAQAAAHAGQAIAFAAALQAAAGgDAEQgDAEgEADQAGACAEAEQAEAFAAAHQAAAGgCAFQgCAFgEADQgEADgGACQgGACgIAAgAgUAeIAVAAIAKgBIAGgCIADgEIABgGIgBgFIgDgEIgGgDIgKgBIgVAAgAgUgGIAVAAQAHAAAEgCQAFgDAAgGQAAgEgCgCIgDgEIgEgCIgFAAIgXAAg");
	this.shape_10.setTransform(-1.1,126.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAqIAAhTIAiAAQAQAAAHAGQAIAFAAALQAAAGgDAEQgDAEgEADQAGACAEAEQAEAFAAAHQAAAGgCAFQgCAFgEADQgEADgGACQgGACgIAAgAgUAeIAVAAIAKgBIAGgCIADgEIABgGIgBgFIgDgEIgGgDIgKgBIgVAAgAgUgGIAVAAQAHAAAEgCQAFgDAAgGQAAgEgCgCIgDgEIgEgCIgFAAIgXAAg");
	this.shape_11.setTransform(87.6,108.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPApQgHgDgGgGQgEgFgDgJQgDgIAAgKQAAgJADgJQADgIAEgGQAGgFAHgDQAHgDAIAAQAJAAAHADQAHADAGAFQAFAGACAIQADAJAAAJQAAAKgDAIQgCAJgFAFQgGAGgHADQgHADgJAAQgIAAgHgDgAgKgdQgEADgDAEQgEAEgBAGQgBAGAAAGQAAAHABAGQABAGAEAEQADAEAEACQAFADAFAAQAGAAAFgDQAEgCADgEQADgEACgGQACgGgBgHQABgGgCgGQgCgGgDgEQgDgEgEgDQgFgCgGAAQgFAAgFACg");
	this.shape_12.setTransform(78.7,108.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHA7IgIgCIgIgFIgGgHIgEgFIgCgHIgCgKIgBgNIABgKIABgNIADgNQACgGAEgEQADgFADgDQAEgEAEgBQAEgCAEgBIAKgBIAFAAIAEAAIADgBIACgBIABgDIALAAIgBADIgBADIgCAEIgDAEIgDABIgCABIgEABIgGAAIgHABQgFAAgFACQgEACgEAEIgGAKIgEANIAFgGQACgDADgCQAEgDAFgBQAEgCAGAAQAHAAAHADQAGADAFAFQAFAFADAIQADAGAAAKIgBAIIgCAKIgDAKQgDAFgEAEQgFADgGADQgGACgJAAgAgJgMQgFADgEAEQgCAEgCAFQgCAGAAAGIABAGIABAHIADAHQABADADADIAGAEQAEACAFAAQAGAAAEgCIAHgFIAEgHIADgIIABgGIAAgFIgCgLQgBgFgDgEQgDgEgFgDQgEgCgHAAQgFAAgEACg");
	this.shape_13.setTransform(69.8,107.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbA6IgCAAIAAgNIADABIAFAAQAEAAACgCQADgCABgDIAFgMIgfhVIAQAAIAVBDIAXhDIAPAAIgfBWIgFAMIgDAIIgEAFIgFAEIgFABIgGABg");
	this.shape_14.setTransform(61.4,110.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkAqIgDgBIAAgNIAGABIADAAIADgCIACgFIACgHIACgLIABgPIAAgfIA8AAIAABTIgPAAIAAhGIgfAAIgBAUQAAAOgCAKQgCAKgDAGQgDAHgFACQgEADgGAAg");
	this.shape_15.setTransform(52.4,108.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAUAqIgggmIgLAJIAAAdIgOAAIAAhTIAOAAIAAApIAqgpIATAAIgnAlIAnAug");
	this.shape_16.setTransform(44.3,108.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdArQgJgPAAgcQAAgbAJgQQAIgOAVAAQAWAAAJAOQAIAQAAAbQAAAcgIAPQgJAQgWAAQgVAAgIgQgAgMgdQgEAKABATQgBATAEALQADAKAJAAQAKAAADgKQADgLAAgTQAAgTgDgKQgDgKgKAAQgJAAgDAKg");
	this.shape_17.setTransform(30.6,107.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdArQgJgPAAgcQAAgbAJgQQAIgOAVAAQAVAAAKAOQAIAQAAAbQAAAcgIAPQgKAQgVAAQgVAAgIgQgAgMgdQgEAKAAATQAAATAEALQADAKAJAAQAKAAADgKQADgLAAgTQAAgTgDgKQgDgKgKAAQgJAAgDAKg");
	this.shape_18.setTransform(21.8,107.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACA5IAAhNIgaAAIAAgQIAPgBQAHgBADgFQADgDABgFIABgFIATAAIAABxg");
	this.shape_19.setTransform(12.1,107.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AACA5IAAhNIgaAAIAAgQIAPgBQAHgBADgFQADgDABgFIABgFIATAAIAABxg");
	this.shape_20.setTransform(4.1,107.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(47.5,41.5,1,1,0,0,0,47.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-7.7,0,107.7,136.5), null);


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
p.nominalBounds = new cjs.Rectangle(-25,2,363.6,74.4);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(80.9,44.5,1,1,0,0,0,42.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,157.1,135.8), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(49.9,42.5,1,1,0,0,0,42.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,93.1,136.8), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(54.2,68.5,1,1,0,0,0,46.5,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,107.7,136.5), null);


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
p.nominalBounds = new cjs.Rectangle(-25,2,363.6,74.4);


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

	// Layer 10
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(245.2,224.1,1,1,0,0,0,68.7,70.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({x:15.2},11,cjs.Ease.cubicOut).wait(172).to({x:245.2},11,cjs.Ease.bounceOut).wait(1));

	// Layer 12
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.2,225.2,1,1,0,0,0,53.9,68.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({x:246.2},11,cjs.Ease.bounceOut).wait(50).to({x:46.2},11,cjs.Ease.cubicOut).wait(123));

	// Layer 13
	this.instance_2 = new lib.Symbol26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-96.8,224.4,1,1,0,0,0,46.6,68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({x:44.2},0).to({x:244.2},11,cjs.Ease.bounceOut).wait(50).to({x:54.2},11,cjs.Ease.cubicOut).wait(62));

	// Layer 11
	this.instance_3 = new lib.Symbol27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-235.9,222.8,1,1,0,0,0,78.5,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({x:-94.9},0).wait(61).to({x:26.1},0).to({x:246.1},11,cjs.Ease.bounceOut).wait(50).to({x:6.1},11).wait(1));

	// Symbol 11
	this.instance_4 = new lib.Symbol11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(500.6,225.7,0.745,0.745,0,0,0,283.4,290.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({y:505.7},11,cjs.Ease.sineIn).wait(172).to({y:225.7},11,cjs.Ease.sineIn).wait(1));

	// Symbol 13
	this.instance_5 = new lib.Symbol13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(539.4,550.8,0.724,0.724,0,0,0,203.7,241.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({y:219.8},11,cjs.Ease.sineOut).wait(50).to({y:549.8},11,cjs.Ease.sineIn).wait(123));

	// tank
	this.tank = new lib.Symbol33();
	this.tank.parent = this;
	this.tank.setTransform(538.9,604.8,0.624,0.624,0,0,0,238.1,307.4);

	this.timeline.addTween(cjs.Tween.get(this.tank).wait(110).to({x:539.9,y:281.8},11,cjs.Ease.sineOut).wait(50).to({y:311.8},0).to({y:571.8},11,cjs.Ease.sineIn).wait(62));

	// vans
	this.vans = new lib.Symbol34();
	this.vans.parent = this;
	this.vans.setTransform(600.1,587.9,0.65,0.65,0,0,0,260.2,306.2);

	this.timeline.addTween(cjs.Tween.get(this.vans).wait(171).to({y:294.9},11,cjs.Ease.sineOut).wait(50).to({y:574.9},11,cjs.Ease.sineIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.4,9,1026.4,787.2);


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
	this.txtnew.setTransform(107.2,287.7,0.768,0.768,0,0,0,119.9,11);

	this.timeline.addTween(cjs.Tween.get(this.txtnew).wait(1));

	// Symbol 26
	this.txt = new lib.Symbol30();
	this.txt.parent = this;
	this.txt.setTransform(435.9,43.7,0.444,0.444,0,0,0,-46.9,83.9);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 3
	this.logo = new lib.Symbol29();
	this.logo.parent = this;
	this.logo.setTransform(105.5,42.6,0.655,0.655,0,0,0,460.7,168);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Symbol 18
	this.instance = new lib.Symbol18_1();
	this.instance.parent = this;
	this.instance.setTransform(470.7,262.5,0.686,0.686,0,0,0,115.7,33.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol18_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 7
	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(345.9,217.2,1,1,0,0,0,487.1,263.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 8
	this.people = new lib.Symbol5();
	this.people.parent = this;
	this.people.setTransform(510,201,1,1,0,0,0,381,148);

	this.timeline.addTween(cjs.Tween.get(this.people).wait(1));

	// Layer 2
	this.back = new lib.Symbol2();
	this.back.parent = this;
	this.back.setTransform(302,28,1,1,0,180,0,512,384);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-236.5,3463.7,1139.3);
// library properties:
lib.properties = {
	id: 'FD400AA1CA164858827D9B8B1676C338',
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1503414212523", id:"back"},
		{src:"images/Bestcontor.png?1503414212523", id:"Bestcontor"},
		{src:"images/button.png?1503414212523", id:"button"},
		{src:"images/donottouch.png?1503414212523", id:"donottouch"},
		{src:"images/e2017.png?1503414212523", id:"e2017"},
		{src:"images/fastpidr.png?1503414212523", id:"fastpidr"},
		{src:"images/firstr.png?1503414212523", id:"firstr"},
		{src:"images/logo.png?1503414212523", id:"logo"},
		{src:"images/money1.png?1503414212523", id:"money1"},
		{src:"images/money2.png?1503414212523", id:"money2"},
		{src:"images/people.png?1503414212523", id:"people"},
		{src:"images/pidr.png?1503414212523", id:"pidr"},
		{src:"images/shop1.png?1503414212523", id:"shop1"},
		{src:"images/tank.png?1503414212523", id:"tank"}
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