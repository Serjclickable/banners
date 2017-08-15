(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,954,310);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,57);


(lib.film = function() {
	this.initialize(img.film);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,270);


(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,511,494);


(lib.HD = function() {
	this.initialize(img.HD);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,199);


(lib.like = function() {
	this.initialize(img.like);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,42);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,39);


(lib.nnew = function() {
	this.initialize(img.nnew);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,137);// helper functions:

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


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.HD();
	this.instance.parent = this;
	this.instance.setTransform(-125,-10,0.12,0.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAjQgMgMAAgWQAAgVANgNQANgNASAAQATAAAMAMQAKALAAAUIAAALIg6AAQACAUAWAAQAPAAALgIIAAAUQgMAHgVAAQgUAAgMgMgAARgIQABgTgRAAQgFgBgFAGQgFAGgBAIIAgAAIAAAAg");
	this.shape.setTransform(91.1,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiAtIAAhZIAcAAIAABZgAg9AtIAAhZIAcAAIAAAfIAYAAQAOAAAJAIQAIAGAAAOQAAAOgIAIQgJAIgOAAgAghAcIAOAAQAOgBAAgLQAAgMgOAAIgOAAg");
	this.shape_1.setTransform(78.8,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAtIAAglIgdAAIAAAlIgdAAIAAhZIAdAAIAAAiIAdAAIAAgiIAcAAIAABZg");
	this.shape_2.setTransform(66,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAtIAAglIgfAAIAAAlIgcAAIAAhZIAcAAIAAAiIAfAAIAAgiIAcAAIAABZg");
	this.shape_3.setTransform(55,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAjQgMgMAAgWQAAgVANgNQANgNASAAQATAAAMAMQAKALAAAUIAAALIg6AAQACAUAWAAQAPAAALgIIAAAUQgMAHgVAAQgUAAgMgMgAARgIQABgTgRAAQgFgBgFAGQgFAGgBAIIAgAAIAAAAg");
	this.shape_4.setTransform(44.7,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqAtIAAhZIAyAAQAgAAAAAWQAAAIgFAFQgFAFgIADQAKAAAFAFQAGAGAAAIQAAAMgJAIQgIAHgQAAgAgOAcIAPAAQANAAAAgLQAAgKgNAAIgPAAgAgOgIIAOAAQALAAAAgKQAAgJgLAAIgOAAg");
	this.shape_5.setTransform(34.8,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAtIAAhEIgYAAIAAgVIBLAAIAAAVIgYAAIAABEg");
	this.shape_6.setTransform(25.3,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAjQgNgNAAgUQAAgVAOgOQAOgNAWAAQAQAAAHAEIAAAYQgJgHgLAAQgMAAgGAHQgHAHAAAMQAAAMAHAGQAGAHALAAQALAAAKgGIAAAVQgKAGgSAAQgTAAgNgMg");
	this.shape_7.setTransform(16.9,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAjQgMgMAAgWQAAgVANgNQANgNASAAQAUAAAKAMQALALAAAUIAAALIg6AAQABAUAXAAQAPAAALgIIAAAUQgNAHgUAAQgUAAgMgMgAASgIQAAgTgQAAQgGgBgFAGQgFAGgBAIIAhAAIAAAAg");
	this.shape_8.setTransform(7.9,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPAtIAAgfQgOAIgMAAQgfAAAAgeIAAgkIAbAAIAAAfQAAANAMABQAIgBAKgEIAAgoIAcAAIAABZg");
	this.shape_9.setTransform(-2.5,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAoQgIgIAAgMQAAgZAfgEIAYgEQAAgOgPAAQgQAAgPAKIAAgWQAGgCAKgDQAKgCAHAAQAnAAAAAmIAAA1IgaAAIAAgNIgBAAQgJAPgRAAQgNAAgHgHgAgBAEQgNACAAALQAAAEADAEQADADAGAAQAHgBAFgFQAFgGAAgHIAAgHg");
	this.shape_10.setTransform(-12.8,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAtIgcgsIAAAAIAAAsIgcAAIAAhZIAcAAIAAArIAAAAIAbgrIAhAAIghArIAiAug");
	this.shape_11.setTransform(-21.8,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAjQgMgMAAgWQAAgVANgNQANgNASAAQAUAAAKAMQALALAAAUIAAALIg6AAQABAUAXAAQAPAAALgIIAAAUQgNAHgUAAQgUAAgMgMgAASgIQAAgTgQAAQgGgBgFAGQgFAGgBAIIAhAAIAAAAg");
	this.shape_12.setTransform(-37.1,4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiAtIAAhZIAcAAIAABZgAg9AtIAAhZIAcAAIAAAfIAYAAQAOAAAJAIQAIAGAAAOQAAAOgIAIQgJAIgOAAgAghAcIAOAAQAOgBAAgLQAAgMgOAAIgOAAg");
	this.shape_13.setTransform(-49.4,4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgAtIAAhFIgEARIgSA0IgXAAIgSg0IgEgRIAABFIgWAAIAAhZIAlAAIARAzQADALAAAEIAEgPIARgzIAlAAIAABZg");
	this.shape_14.setTransform(-63.7,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggAoQgIgIAAgMQAAgZAfgEIAYgEQAAgOgPAAQgQAAgPAKIAAgWQAGgCAKgDQAKgCAHAAQAnAAAAAmIAAA1IgaAAIAAgNIgBAAQgJAPgRAAQgNAAgHgHgAgBAEQgNACAAALQAAAEADAEQADADAGAAQAHgBAFgFQAFgGAAgHIAAgHg");
	this.shape_15.setTransform(-75.8,4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggAwQgQgRAAgdQAAgdASgSQATgTAdAAQASAAANAEIAAAcQgNgIgQAAQgSAAgJAMQgLAKAAATQAAASAKALQAJAKASAAQAQAAAOgIIAAAaQgOAHgWAAQgcAAgRgRg");
	this.shape_16.setTransform(-86,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-12.1,222.8,27.9);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.nnew();
	this.instance.parent = this;
	this.instance.setTransform(-125,-10,0.176,0.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUAtIAAg6IgIANIgdAtIgbAAIAAhZIAaAAIAAA4IAGgLIAegtIAbAAIAABZg");
	this.shape.setTransform(49.2,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAtIgbgsIAAAAIAAAsIgcAAIAAhZIAcAAIAAArIAAAAIAbgrIAhAAIghArIAiAug");
	this.shape_1.setTransform(39.2,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAtIAAglIgfAAIAAAlIgcAAIAAhZIAcAAIAAAiIAfAAIAAgiIAbAAIAABZg");
	this.shape_2.setTransform(28.1,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAtIAAg6IgIANIgdAtIgbAAIAAhZIAaAAIAAA4IAGgLIAegtIAbAAIAABZg");
	this.shape_3.setTransform(16.9,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqAtIAAhZIAyAAQAgAAAAAWQAAAIgFAFQgFAGgIACQAKABAFAEQAGAGAAAIQAAAMgJAHQgIAIgQAAgAgOAbIAPAAQANAAAAgKQAAgKgNAAIgPAAgAgOgIIAOAAQALAAAAgKQAAgJgLAAIgOAAg");
	this.shape_4.setTransform(6.3,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAjQgNgNAAgWQAAgVANgNQAOgMAWAAQAWAAANAMQANANAAAVQgBAVgNANQgNANgWAAQgWAAgNgMgAgOgSQgFAHgBALQABAaATAAQAVAAAAgaQAAgZgVAAQgIAAgGAHg");
	this.shape_5.setTransform(-4.6,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAtIAAglIgfAAIAAAlIgcAAIAAhZIAcAAIAAAiIAfAAIAAgiIAbAAIAABZg");
	this.shape_6.setTransform(-15.6,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUAtIAAg6IgIANIgdAtIgbAAIAAhZIAaAAIAAA4IAGgLIAegtIAbAAIAABZg");
	this.shape_7.setTransform(-31.7,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBDIAAiDIAcAAIAAAOIAAAAQAKgQASAAQASAAAJAMQAKAMAAAVQAAAVgMAOQgKANgTAAQgPAAgJgMIAAAAIAAA0gAgNgmQgFAGgBALIAAAHQAAAJAGAFQAEAGAIAAQAJAAAFgGQAGgHgBgOQAAgYgSAAQgHAAgGAHg");
	this.shape_8.setTransform(-42.6,5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAtIAAhEIgYAAIAAgVIBLAAIAAAVIgYAAIAABEg");
	this.shape_9.setTransform(-52.5,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAjQgNgNAAgWQAAgVAOgNQANgMAWAAQAWAAANAMQAMANAAAVQABAVgNANQgOANgWAAQgWAAgNgMgAgOgSQgGAHABALQgBAaAVAAQATAAAAgaQAAgZgTAAQgKAAgFAHg");
	this.shape_10.setTransform(-61.8,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgAtIAAhFIgEAQIgSA1IgXAAIgSg1IgEgQIAABFIgWAAIAAhZIAlAAIARAzQADALAAAFIAEgQIARgzIAlAAIAABZg");
	this.shape_11.setTransform(-74.3,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggAwQgQgRAAgdQAAgdASgSQATgTAdAAQASAAANAEIAAAcQgNgIgQABQgSAAgJALQgLALAAARQAAATAKALQAJALASAAQAQgBAOgHIAAAaQgOAGgWAAQgcAAgRgRg");
	this.shape_12.setTransform(-86.9,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-13.7,181.9,27.9);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.like();
	this.instance.parent = this;
	this.instance.setTransform(-125,-18,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiAtIAAhZIAcAAIAABZgAg9AtIAAhZIAcAAIAAAgIAYAAQAOgBAJAIQAIAHAAANQAAANgIAJQgJAIgOAAgAghAbIAOAAQAOABAAgMQAAgMgOAAIgOAAg");
	this.shape.setTransform(49.4,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgAtIAAhFIgEAQIgSA1IgXAAIgSg1IgEgQIAABFIgWAAIAAhZIAlAAIARAzQADALAAAFIAEgQIARgzIAlAAIAABZg");
	this.shape_1.setTransform(35.1,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpAtIAAhZIAcAAIAAAgIAXAAQAPgBAIAIQAJAHAAANQAAANgJAJQgIAIgPAAgAgNAbIANAAQANABABgMQgBgMgNAAIgNAAg");
	this.shape_2.setTransform(23.4,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvAsIAAgTQADACAEAAQAIAAAFgQQAGgOAEgpIBBAAIAABZIgcAAIAAhGIgQAAQgEAogJAPQgKAPgRABQgGgBgFgBg");
	this.shape_3.setTransform(12.1,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUAtIAAg6IgIANIgdAtIgbAAIAAhZIAaAAIAAA4IAGgLIAegtIAbAAIAABZg");
	this.shape_4.setTransform(1.6,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMBVIAAgoIgEAAQgWAAgNgNQgNgMAAgUQAAgVANgNQAMgMAXAAIAEAAIAAgmIAZAAIAAAmIAEAAQAXAAAMAMQAMANAAAVQAAAUgMAMQgMANgXAAIgEAAIAAAogAANAZIABAAQAKAAAHgHQAFgHAAgLQAAgMgFgIQgGgHgKAAIgCAAgAgdgUQgHAIAAAMQAAALAHAHQAFAHALAAIABAAIAAg0IgBAAQgLAAgFAHg");
	this.shape_5.setTransform(-11.1,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAjQgMgMAAgWQAAgVANgNQANgNASAAQATAAAMALQAKAMAAAUIAAALIg6AAQABATAXAAQAPABALgIIAAAVQgMAGgVAAQgUAAgMgMgAARgIQAAgUgQAAQgFABgFAFQgFAGgBAIIAgAAIAAAAg");
	this.shape_6.setTransform(-27.8,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUAtIAAg6IgIANIgdAtIgbAAIAAhZIAaAAIAAA4IAGgLIAegtIAbAAIAABZg");
	this.shape_7.setTransform(-38.4,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBAtIAAhZIAcAAIAABFIAYAAIAAhFIAbAAIAABFIAYAAIAAhFIAcAAIAABZg");
	this.shape_8.setTransform(-51.8,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPAtIAAgfQgOAIgMAAQgfAAAAgeIAAgkIAbAAIAAAgQAAANAMgBQAIABAKgFIAAgoIAcAAIAABZg");
	this.shape_9.setTransform(-65,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrBAIAAgWQAGADAGAAQALAAAEgKIAEgLIgkhZIAfAAIAQA3QABAFABAGIABAAIACgLIASg3IAbAAIgkBgQgNAjgbAAQgJAAgHgCg");
	this.shape_10.setTransform(-75.1,2.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag4A9IAAgWQAEACAFAAQADgBACgCQADgCAEgKIAIghIAJg4IBMAAIAAB9IgdAAIAAhlIgZAAQgJBHgJAQQgJAQgSAAQgIAAgHgDg");
	this.shape_11.setTransform(-87.1,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-18,183.7,29.6);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,212,205), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,223,57), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0075B3").ss(1,1,1).p("AF3AAQAACbhuBuQhuBuibAAQibAAhuhuQhthuAAibQAAibBthuQBuhtCbAAQCbAABuBtQBuBuAACbg");
	this.shape.setTransform(37.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-1,-1,77,77), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.film();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,350,270), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,954,310), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,59,115,0.6)").s().p("A6yWWMAAAgsrMA1lAAAMAAAAsrg");
	this.shape.setTransform(171.5,143);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,343,286), null);


(lib.Symbol15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(111.5,28.5,1,1,0,0,0,111.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:106.2},4,cjs.Ease.get(-1)).to({x:99.5},5,cjs.Ease.get(1)).to({x:105.5},5,cjs.Ease.get(-1)).to({x:111.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,57);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(111.5,28.5,1,1,0,0,0,111.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:115.1},4,cjs.Ease.get(-1)).to({x:119.5},5,cjs.Ease.get(1)).to({x:115.5},5,cjs.Ease.get(-1)).to({x:111.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,57);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak5EfIAAo9IJzAAIAAI9g");
	mask.setTransform(192.1,28.4);

	// Layer 1 copy
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(111.5,28.5,1,1,0,0,0,111.5,28.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ak5EfIAAo9IJzAAIAAI9g");
	mask_1.setTransform(31.1,28.5);

	// Layer 1
	this.instance_1 = new lib.Symbol15copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.5,28.5,1,1,0,0,0,111.5,28.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxeEfIAAo9MAi9AAAIAAI9g");
	this.shape.setTransform(111.6,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-0.2,-0.2,223.8,57.4), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 8
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(-42.8,-37.9,0.07,0.07,0,0,0,36.4,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:37.5,regY:37.5,scaleX:1,scaleY:1},40).to({alpha:0},5).to({scaleX:0.04,scaleY:0.04,alpha:1},1).to({regX:36.3,regY:37.4,scaleX:0.05,scaleY:0.05},8,cjs.Ease.cubicIn).wait(1));

	// Layer 1 copy 7
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-142.8,-0.5,0.204,0.204,0,0,0,37.2,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:37.5,regY:37.5,scaleX:1,scaleY:1,y:-0.4},23).to({alpha:0},5).to({scaleX:0.04,scaleY:0.04,alpha:1},1).to({regX:37.4,regY:37.4,scaleX:0.17,scaleY:0.17},25,cjs.Ease.cubicIn).wait(1));

	// Layer 1 copy 6
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-100.4,-3,0.696,0.696,0,0,0,37.4,37.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:37.5,regY:37.5,scaleX:1,scaleY:1,x:-100.3,y:-2.9},6).to({alpha:0},5).to({scaleX:0.04,scaleY:0.04,alpha:1},1).to({regY:37.4,scaleX:0.65,scaleY:0.65,x:-100.4,y:-3},42,cjs.Ease.cubicIn).wait(1));

	// Layer 1 copy 5
	this.instance_3 = new lib.Symbol12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.9,-35.5,0.377,0.377,0,0,0,37.1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:37.5,scaleX:1,scaleY:1,x:-12.8,y:-35.4},15).to({alpha:0},5).to({scaleX:0.04,scaleY:0.04,alpha:1},1).to({regX:37.3,scaleX:0.34,scaleY:0.34},33,cjs.Ease.cubicIn).wait(1));

	// Layer 1 copy 4
	this.instance_4 = new lib.Symbol12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-85.3,-25.4,0.239,0.239,0,0,0,37.2,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:37.5,scaleX:1,scaleY:1},21).to({alpha:0},5).to({scaleX:0.04,scaleY:0.04,alpha:1},1).to({scaleX:0.2,scaleY:0.2},27,cjs.Ease.cubicIn).wait(1));

	// Layer 1 copy 3
	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-60.3,-10.5,0.097,0.097,0,0,0,36.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:37.5,regY:37.5,scaleX:1,scaleY:1,y:-10.4},33).to({alpha:0},5).to({scaleX:0.04,scaleY:0.04,alpha:1},1).to({regX:37.1,regY:37.1,scaleX:0.07,scaleY:0.07},15,cjs.Ease.cubicIn).wait(1));

	// Layer 1 copy 2
	this.instance_6 = new lib.Symbol12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-122.8,-35.4,0.89,0.89,0,0,0,37.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1},2).to({alpha:0},5).to({scaleX:0.04,scaleY:0.04,alpha:1},1).to({scaleX:0.84,scaleY:0.84},46,cjs.Ease.cubicIn).wait(1));

	// Layer 1 copy
	this.instance_7 = new lib.Symbol12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-27.8,-2.9,0.573,0.573,0,0,0,37.5,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:37.5,scaleX:1,scaleY:1},9).to({alpha:0},5).to({scaleX:0.04,scaleY:0.04,alpha:1},1).to({scaleX:0.53,scaleY:0.53,y:-3},39,cjs.Ease.cubicIn).wait(1));

	// Layer 1
	this.instance_8 = new lib.Symbol12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.3,-0.4,0.043,0.043,0,0,0,37.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1},49,cjs.Ease.cubicIn).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.6,-69.2,158.2,92.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(-136,239.7,1,1,-27.7,0,0,105,198.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).to({rotation:0,x:24,y:184.6},29,cjs.Ease.quartOut).wait(30).to({rotation:-27.7,x:-136,y:239.7},20,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(423.7,50.9,0.41,0.41,0,0,0,175.2,134.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(127).to({_off:false},0).to({x:163.7},29,cjs.Ease.bounceOut).wait(30).to({x:373.7},20,cjs.Ease.quartIn).wait(1));

	// СМОТРИ НОВИНКИ
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(418.7,84);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({x:122.7},29,cjs.Ease.bounceOut).wait(68).to({startPosition:0},0).to({x:-197.3},25,cjs.Ease.quartIn).to({_off:true},1).wait(67));

	// САМЫЕ КАЧЕСТВЕННЫЕ
	this.instance_3 = new lib.Tween8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(418.2,50.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({x:122.2},29,cjs.Ease.bounceOut).wait(10).to({startPosition:0},0).wait(60).to({startPosition:0},0).to({x:-197.8},25,cjs.Ease.quartIn).wait(8).to({startPosition:0},0).to({_off:true},1).wait(67));

	// ЛУЧШИЕ ФИЛЬМЫ
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(419.7,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:123.7},29,cjs.Ease.bounceOut).wait(17).to({startPosition:0},0).wait(53).to({startPosition:0},0).to({x:-196.3},25,cjs.Ease.quartIn).wait(15).to({startPosition:0},0).to({_off:true},1).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(294.7,2.9,183.7,29.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(676,201,1,1,0,0,0,676,201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,954,310), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(171.5,143,1,1,0,0,0,171.5,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,343,286);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(512.5,147.1,1,1,0,0,0,171.5,143);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(477,169,1,1,0,0,0,477,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,4.1,954,320), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtPEYICqkXIitkdIanAAIiyEgIADAFICoEQI6dAEgAxbkXICwEYIAAAGIiwESgAOqAFICvkhIACIxIgDACg");
	mask.setTransform(111.4,28.3);

	// Layer 2
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(181.2,49.7,1,1,0,0,0,3,3);
	this.instance.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.5,28.5,1,1,0,0,0,111.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.2,-0.2,223.8,57.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0673B2").s().p("Ag/BYIAAiuIAnAAIAABBIAZAAQA/AAAAAzQAAAbgRAPQgRAPgeABgAgYA6IASAAQAdAAAAgaQAAgYgcAAIgTAAg");
	this.shape.setTransform(144.1,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0673B2").s().p("AgsBDQgXgYAAgnQAAgpAagbQAagaAoAAQAaABARAGIAAAmQgRgKgXAAQgYAAgPAPQgPAPAAAaQAAAaAPAPQANAPAYAAQAXAAATgMIAAAkQgTAJgfAAQgnAAgXgXg");
	this.shape_1.setTransform(127.8,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0673B2").s().p("Ag0BYIAAiuIBlAAIAAAfIg9AAIAAAnIA4AAIAAAfIg4AAIAAAoIBBAAIAAAhg");
	this.shape_2.setTransform(114,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0673B2").s().p("AA6BrIAAgnIhzAAIAAAnIggAAIAAhHIAQAAQAig9AEhRIBkAAIAACOIAZAAIAABHgAgNgTQgIAegLAZIA5AAIAAhtIgcAAQgCAYgIAeg");
	this.shape_3.setTransform(96.9,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0673B2").s().p("Ag8BRIAAgjQAVAOAbAAQAfABAAgZQABgXgkAAIgWAAIAAgdIAWAAQAeAAAAgWQAAgWgaABQgUAAgVAMIAAggQAVgLAcAAQAcABAPAMQAQALAAAUQABAQgKAMQgJALgRAEIAAABQAUACAKAKQALALAAAQQgBAagSAOQgSANghAAQgiAAgRgJg");
	this.shape_4.setTransform(80.4,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(111.5,28.5,1,1,0,0,0,111.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-22.5,224.6,92.8), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(111.5,28.7,1,1,0,0,0,111.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:111.6},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-22.4,224.6,92.8);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.back.x = - stage.mouseX / 30;
		this.back.y = - stage.mouseY / 30;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(151.2,199.8,1,1,0,0,0,111.2,23.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// txt
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(167.2,109.4,1,1,0,0,0,120.5,49.6);

	this.text = new cjs.Text("", "25px 'SegoeUI-Bold'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 35;
	this.text.parent = this;
	this.text.setTransform(40.2,90.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_1}]}).wait(1));

	// Layer 3
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93,24,0.692,0.692);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.back = new lib.Symbol3();
	this.back.parent = this;
	this.back.setTransform(-47.1,1.1,1,1,0,0,0,313.9,18.1);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211,112.1,954,320);
// library properties:
lib.properties = {
	id: 'FE343CB96BC54B69B4D3D9A7124BA8BA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1502785236176", id:"back"},
		{src:"images/button.png?1502785236176", id:"button"},
		{src:"images/film.png?1502785236176", id:"film"},
		{src:"images/girl1.png?1502785236176", id:"girl1"},
		{src:"images/HD.png?1502785236176", id:"HD"},
		{src:"images/like.png?1502785236176", id:"like"},
		{src:"images/logo.png?1502785236176", id:"logo"},
		{src:"images/nnew.png?1502785236176", id:"nnew"}
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
an.compositions['FE343CB96BC54B69B4D3D9A7124BA8BA'] = {
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