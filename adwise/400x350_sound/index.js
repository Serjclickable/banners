(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,400);


(lib.casinox = function() {
	this.initialize(img.casinox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,86);


(lib.gold = function() {
	this.initialize(img.gold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,76);


(lib.gonzales = function() {
	this.initialize(img.gonzales);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,286);


(lib.Gonzosquest = function() {
	this.initialize(img.Gonzosquest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestNetEntSlot1 = function() {
	this.initialize(img.GonzosQuestNetEntSlot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestNetEntSymbolкопия2 = function() {
	this.initialize(img.GonzosQuestNetEntSymbolкопия2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestNetEnt1 = function() {
	this.initialize(img.GonzosQuestNetEnt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestsymbolNetEnt = function() {
	this.initialize(img.GonzosQuestsymbolNetEnt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.gonzosquestscatter = function() {
	this.initialize(img.gonzosquestscatter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.monetki = function() {
	this.initialize(img.monetki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,581,290);


(lib.trava = function() {
	this.initialize(img.trava);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,453,91);// helper functions:

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


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCC00","#FFFF99"],[0,1],-135.4,0,135.5,0).s().p("A1KHCIAAuDMAqVAAAIAAODg");
	this.shape.setTransform(135.5,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,271,90), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.monetki();
	this.instance.parent = this;
	this.instance.setTransform(6,-602);

	this.instance_1 = new lib.monetki();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,-298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.monetki();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,-602,587,892), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-14.3,0,14.3).s().p("AgYCeQgIAAAAgIIAAjzIhmAAQgIAAAAgJIAAgvQAAgIAIAAIENAAQAIAAAAAIIAAAvQAAAJgIAAIhaAAIgLAAIAADzQAAAIgIAAg");
	this.shape.setTransform(14.3,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-16.7,0,16.8).s().p("AhHCeQgJAAAFgJIAthOIiJjdIAAgFIAFgCIBBAAQAEAAADADIBfCkIAFAAIADgGIBPicQACgFAIAAIA9AAQADAAABADQACADgCADIiqEtQgCAFgGAAg");
	this.shape_1.setTransform(48.6,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-13.7,0.1,13.8).s().p("AiACeQgJAAAAgIIAAkrQAAgIAJAAICRAAQAZAAAWAJQAVAJARAPQARAQAJAVQAKAVAAAYQAAAYgKAWQgJAVgRAQQgRAPgVAJQgWAJgZAAIhLAAIgLAAIAABMQAAAIgHAAgAhFAKIALAAIBKAAQALAAALgEQALgEAHgGQAOgOAAgYQAAgXgOgOQgPgNgYgBIhLAAIgLAAg");
	this.shape_2.setTransform(84.6,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-13.9,0,13.9).s().p("ABRCeQgJAAAAgIIAAh8IiEAAIgLAAIAAB8QAAAIgHAAIg0AAQgJAAAAgIIAAkrQAAgIAJAAIA0AAQAHAAAAAIIAABwIALAAICEAAIAAhwQAAgIAJAAIAzAAQAIAAgBAIIAAErQABAIgIAAg");
	this.shape_3.setTransform(118,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-14.5,0.1,14.6).s().p("ABXCeQgIAAAAgIIAEjJIAAgKIgFAAIiYDWQgDAFgFAAIg2AAQgJAAAAgIIAAkrQAAgIAJAAIAzAAQAHAAAAAIIgEDRIAFAAIAIgKICQjKQAFgFAHAAIA0AAQAHAAAAAIIAAErQAAAIgHAAg");
	this.shape_4.setTransform(153.5,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-13.7,0,13.8).s().p("AiACeQgIAAAAgIIAAkrQAAgIAIAAICRAAQAZAAAVAJQAWAJARAPQARAQAJAVQAJAVAAAYQAAAYgJAWQgJAVgRAQQgRAPgWAJQgVAJgZAAIhLAAIgMAAIAABMQAAAIgGAAgAhGAKIAMAAIBKAAQALAAALgEQAKgEAIgGQAOgOAAgYQAAgXgOgOQgPgNgYgBIhLAAIgMAAg");
	this.shape_5.setTransform(188.7,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-13.7,0,13.8).s().p("AiBCeQgIAAAAgIIAAkrQAAgIAIAAIA0AAQAHAAAAAIIAABMIALAAIBKAAQAaABAWAIQAXAJARAQQAQAPAJAWQAKAUAAAYQAAAZgKAVQgJAVgQAQQgRAQgXAIQgWAJgaAAgAhGBfIALAAIBJAAQANAAAKgEQALgEAHgIQAPgOAAgXQAAgXgPgPQgHgGgLgDQgKgEgNAAIhJAAIgLAAg");
	this.shape_6.setTransform(221.9,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#462601").s().p("ARpCeQAHAAAAgIIAAkrQAAgIgHAAIAKAAQAIAAAAAIIAAErQAAAIgIAAgAOWCeQAaAAAWgJQAXgIARgQQAQgQAJgVQAKgVAAgZQAAgYgKgUQgJgWgQgPQgRgQgXgJQgWgIgagBIAJAAQAbAAAYAJQAWAJARAQQARAPAIAWQAKAUAAAYQAAAZgKAVQgIAVgRAQQgRAQgWAIQgYAJgbAAgAHtCeQAHAAAAgIIAAhMIALAAIAABMQAAAIgHAAgAFlCeQAHAAAAgIIAAkrQAAgIgHAAIAKAAQAIAAAAAIIAAErQAAAIgIAAgACHCeQAFAAADgFICZjWIAFAAIAAAKIiSDMQgEAFgFAAgAgDCeQAGAAAAgIIAAkrQAAgIgGAAIAJAAQAJAAAAAIIAAErQAAAIgJAAgAjWCeQAGAAAAgIIAAh8IAMAAIAAB8QAAAIgIAAgAoiCeQAGAAAAgIIAAhMIAMAAIAABMQAAAIgIAAgAtKCeQAGAAACgFICrktQACgDgCgDQgBgDgDAAIAKAAQAEAAACADQACADgCADIirEtQgDAFgHAAgAx6CeQAIAAAAgIIAAjzIALAAIAADzQAAAIgJAAgANABfIAAhoIALAAIAABogAJMBKQAYAAAWgJQAWgJAQgPQARgQAJgVQAKgWAAgYQAAgYgKgVQgJgVgRgQQgQgPgWgJQgWgJgYAAIAIAAQAaAAAXAJQAWAJARAPQARAQAJAVQAJAVAAAYQAAAYgJAWQgJAVgRAQQgRAPgWAJQgXAJgaAAgAnEBKQAZAAAVgJQAWgJARgPQARgQAJgVQAJgWAAgYQAAgYgJgVQgJgVgRgQQgRgPgWgJQgVgJgZAAIAJAAQAaAAAXAJQAWAJAQAPQARAQAJAVQAKAVAAAYQAAAYgKAWQgJAVgRAQQgQAPgWAJQgXAJgaAAgACIA8IADjRQAAgIgHAAIAKAAQAIAAAAAIIgCDHIgIAKgAH0AKIAAhnIALAAIAABngAocAKIAAhnIAMAAIAABngAs5AKIhgikQgDgDgEAAIALAAQAFAAACADIBdCeIgDAGgAjQglIAAhwQAAgIgGAAIAKAAQAIAAAAAIIAABwgANAhJIAAhMQAAgIgHAAIALAAQAHAAAAAIIAABMgAwNhdQAIAAAAgJIAAgvQAAgIgIAAIAKAAQAJAAAAAIIAAAvQAAAJgJAAg");
	this.shape_7.setTransform(131.6,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-3.3,0,3.4).s().p("AgZCeQgIAAAAgIIAAkrQAAgIAIAAIA0AAQAHAAAAAIIAAErQAAAIgHAAg");
	this.shape_8.setTransform(241.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,246.4,31.7), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.8,0.1,9.9).s().p("AhbBxQgHAAAAgGIAAjVQAAgGAHAAIBoAAQARAAAPAGQAQAGAMALQAMALAGAPQAIAQAAARQAAASgIAOQgGAPgMAMQgMALgQAGQgPAGgRABIgzAAIgMAAIAAA2QAAAGgEAAgAgyAHIAMAAIAxAAQAJAAAHgDQAHgCAFgEQALgLAAgRQAAgQgLgLQgKgKgSAAIgxAAIgMAAg");
	this.shape.setTransform(9.9,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-9.1,0,9.2).s().p("AhVBxQgGAAAAgGIAAjVQAAgGAGAAICoAAQAFAAAAAGIAAAgQAAAGgFAAIhzAAIgLAAIAAAqIALAAIBjAAQAGAAAAAGIAAAhQAAAGgGAAIhjAAIgLAAIAAAxIALAAIB2AAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_1.setTransform(32.9,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-8.7,0,8.7).s().p("AhQBxQgGAAAAgGIAAjVQAAgGAGAAICiAAQAFAAAAAGIAAAhQAAAGgFAAIhtAAIgMAAIAACuQAAAGgFAAg");
	this.shape_2.setTransform(55.4,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-12,0.1,12.1).s().p("AgyBxQgHAAAEgGIAgg4IhiieIAAgEIADgBIAvAAQADAAACACIBEB2IADAAIAEgIIA3htQACgDAGAAIAqAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIh5DXQgCAEgFAAg");
	this.shape_3.setTransform(79,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-12.4,0,12.4).s().p("AhIByQgRAAgMgFQgMgEgJgLQgDgDAEgEIARgYQAEgEAEADIADADQAGAEAKAAIAFAAQAEgBACgDQAEgDABgHIAYikQACgEAEAAICWAAQAFAAAAAGIAADVQAAAGgFAAIglAAQgGAAAAgGIAAiuIg+AAIgMAAIgQCAQgBANgFAJQgEALgIAHQgHAHgLAEQgHACgJABIgGAAg");
	this.shape_4.setTransform(105.3,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.9,0.1,10).s().p("AA5BxQgFAAAAgGIAAg3IgzAAIgLAAIgiA5QgDAEgGAAIgoAAQgIAAAEgHIArhDIgRgMQgJgHgFgJQgGgJgDgJQgDgKAAgNQAAgRAHgQQAHgPAMgLQAMgLAQgGQAQgGATAAIBmAAQAGAAAAAGIAADVQAAAGgGAAgAgahAQgIADgEAFQgKAKAAAQQAAAQAKAMQALAJASAAIAJAAIA0AAIAAhKIg1AAIgIAAQgKAAgHADg");
	this.shape_5.setTransform(132.2,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-9.8,0,9.9).s().p("AhbBxQgGAAAAgGIAAjVQAAgGAGAAIBoAAQARAAAPAGQAQAGALALQANALAHAPQAGAQAAARQAAASgGAOQgHAPgNAMQgLALgQAGQgPAGgRABIgzAAIgMAAIAAA2QAAAGgEAAgAgyAHIAMAAIAyAAQAHgBAIgCQAHgCAGgEQAKgLAAgRQAAgQgKgLQgLgKgRAAIgyAAIgMAAg");
	this.shape_6.setTransform(157,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.9,0.1,10).s().p("AA5BxQgGAAABgGIAAhZIhcAAIgLAAIAABZQAAAGgEAAIglAAQgHAAABgGIAAjVQgBgGAHAAIAlAAQAEAAAAAGIAABQIALAAIBcAAIAAhQQgBgGAGAAIAlAAQAGAAAAAGIAADVQAAAGgGAAg");
	this.shape_7.setTransform(180.9,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.4,0.1,10.2).s().p("AhbBxQgHAAAAgGIAAjVQAAgGAHAAIAlAAQAEAAAAAGIAAA2IAMAAIAyAAQASABAPAFQAQAHANALQAMALAFAPQAIAPAAARQAAASgIAPQgFAPgMALQgNALgQAHQgPAGgSAAgAgyBEIAMAAIAxAAQAIAAAIgDQAHgDAFgFQALgLAAgQQAAgRgLgKQgFgEgHgDQgIgCgIAAIgxAAIgMAAg");
	this.shape_8.setTransform(205.7,11.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-2.4,0.1,2.4).s().p("AgRBxQgGAAAAgGIAAjVQAAgGAGAAIAkAAQAFAAAAAGIAADVQAAAGgFAAg");
	this.shape_9.setTransform(220,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-9.1,0,9.2).s().p("AhVBxQgGAAAAgGIAAjVQAAgGAGAAICoAAQAFAAAAAGIAAAgQAAAGgFAAIhzAAIgLAAIAAAqIALAAIBjAAQAFAAAAAGIAAAhQAAAGgFAAIhjAAIgLAAIAAAxIALAAIB3AAQAFAAAAAGIAAAhQAAAGgFAAg");
	this.shape_10.setTransform(236.5,11.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#462601").s().p("AkNByQAJgBAIgCQAKgEAIgHQAHgHAFgLQAEgJACgNIARiAIALAAIgRCAQgBANgFAJQgEALgIAHQgHAHgLAEQgJADgNAAIgGAAgASsBwQAFAAAAgGIAAghQAAgGgFAAIALAAQAGAAAAAGIAAAhQAAAGgGAAgAPDBwQAFAAAAgGIAAjVQAAgGgFAAIALAAQAFAAAAAGIAADVQAAAGgFAAgAMuBwQARAAAQgGQAQgHAMgLQAMgLAGgPQAHgPAAgSQAAgRgHgPQgGgPgMgLQgMgLgQgHQgQgFgRgBIAIAAQATAAARAGQAQAHANALQAMALAFAPQAHAPAAARQAAASgHAPQgFAPgMALQgNALgQAHQgRAGgTAAgAKHBwQAFAAAAgGIAAjVQAAgGgFAAIALAAQAGAAAAAGIAADVQAAAGgGAAgAHwBwQAFAAAAgGIAAhZIALAAIAABZQAAAGgFAAgAECBwQAFAAAAgGIAAg2IAMAAIAAA2QAAAGgGAAgACgBwQAGAAAAgGIAAjVQAAgGgGAAIALAAQAGAAAAAGIAADVQAAAGgGAAgAAMBwQAGAAADgEIAig5IAMAAIgjA5QgCAEgHAAgAhTBwQAFAAAAgGIAAjVQAAgGgFAAIALAAQAGAAAAAGIAADVQAAAGgGAAgAnaBwQAFAAACgEIB6jXQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIALAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIh6DXQgCAEgGAAgArqBwQAFAAAAgGIAAiuIAMAAIAACuQAAAGgGAAgAtHBwQAFAAAAgGIAAghQAAgGgFAAIALAAQAGAAAAAGIAAAhQAAAGgGAAgAy8BwQAFAAAAgGIAAg2IALAAIAAA2QAAAGgFAAgAkoBBIABgCQAEgEAEADQAFAFAHACIgFAAQgJAAgHgEgAQpBDIAAgxIAMAAIAAAxgALuBDIAAhKIAMAAIAABKgAvKBDIAAgxIAMAAIAAAxgAFHA0QARgBAPgGQAQgGALgLQANgMAHgPQAGgOAAgSQAAgRgGgQQgHgPgNgLQgLgLgQgGQgPgGgRAAIAJAAQASAAAQAGQAQAGAMALQANALAGAPQAHAQAAARQAAASgHAOQgGAPgNAMQgMALgQAGQgQAHgSAAgAx3A0QARgBAPgGQAPgGAMgLQANgMAGgPQAHgOAAgSQAAgRgHgQQgGgPgNgLQgMgLgPgGQgPgGgRAAIAIAAQATAAAQAGQAQAGAMALQAMALAHAPQAHAQAAARQAAASgHAOQgHAPgMAMQgMALgQAGQgQAHgTAAgASYASQAGAAAAgGIAAghQAAgGgGAAIALAAQAGAAAAAGIAAAhQAAAGgGAAgAtaASQAFAAAAgGIAAghQAAgGgFAAIALAAQAGAAAAAGIAAAhQAAAGgGAAgAnNAHIhFh2QgBgCgEAAIALAAQAEAAACACIBABvIgEAHgAEHAGIAAhKIAMAAIAABKgAA4AGQgSAAgLgJQgKgMAAgQQAAgQAKgKQAEgFAIgDQAHgDAKAAIAIAAQgHAAgHADQgHADgFAFQgKAKAAAQQAAAQAKAMQALAIARABgAy3AGIAAhKIALAAIAABKgAQpgbIAAgqIAMAAIAAAqgAvKgbIAAgqIAMAAIAAAqgAH1gbIAAhQQAAgGgFAAIALAAQAFAAAAAGIAABQgALug1IAAg2QAAgGgEAAIALAAQAFAAAAAGIAAA2gAprhEQAFAAAAgGIAAghQAAgGgFAAIALAAQAGAAAAAGIAAAhQAAAGgGAAgASohFQAFAAAAgGIAAggQAAgGgFAAIALAAQAGAAAAAGIAAAgQAAAGgGAAgAtLhFQAGAAAAgGIAAggQAAgGgGAAIALAAQAGAAAAAGIAAAgQAAAGgGAAg");
	this.shape_11.setTransform(125.6,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,246.9,22.9), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-12.5,0.1,12.5).s().p("ABUBvQgHAAABgGIABh0IAAgYIgCgBIg5CPQgDAEgEAAIgbAAQgEAAgDgEIgthxIgMgeIgCAAIABCNIAAACQgBAEgEAAIgiAAQgGAAAAgGIAAjRQAAgGAGAAIAIAAIAnAAQAEAAADAEIBACdIACAAIAHgRIA4iMQADgEAEAAIAGAAIApAAQAGAAAAAGIAADRIAAACQgBAEgFAAg");
	this.shape.setTransform(12.5,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-8.5,0,8.6).s().p("AhPBvQgGAAAAgGIAAjRQAAgGAGAAIAIAAICXAAQAGAAAAAGIAAAhIAAABQgBAEgFAAIhoAAIgOAAIAACrIAAACQgBAEgEAAg");
	this.shape_1.setTransform(38.4,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.7,0.1,9.8).s().p("AA4BvQgGAAAAgGIAAhXIhWAAIgOAAIAABXIAAACQgBAEgEAAIgkAAQgFAAgBgGIAAjRQABgGAFAAIAJAAIAbAAQAFAAAAAGIAABOIBkAAIAAgEIAAhKQAAgGAGAAIAIAAIAcAAQAFAAABAGIAADRIAAACQgCAEgEAAg");
	this.shape_2.setTransform(60.6,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-11.6,0,11.7).s().p("AgWBwIgWgFQgVgKgRgPQgKgKgOgaIgHgWQgDgMAAgMQAAgPAKgdQAFgOATgXQARgPAVgJIAWgGIAWgDQAQABAdAIQAWAJAQAPQATAXAGAOQAJAdAAAPQAAAMgCAMIgHAWQgOAagLAKQgPAOgUAKIgDABQgdAIgQAAgAgKhEQgJABgHAEQgNAEgJAKQgKAJgFANQgFANAAAOQAAAPAFANQAFANAKAJQAJAKANAEQAMAGAOAAQAPAAANgFIAAgBQAMgEAKgKQAJgJAFgNQAGgNAAgPQAAgOgGgNQgFgNgJgJQgKgKgMgEQgMgGgQAAIgKABg");
	this.shape_3.setTransform(86.1,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-9.9,0,10).s().p("AhdBvQgFAAAAgGIAAjRQAAgGAFAAIAJAAIBjAAQAPAAANAEQANAFAKAIQAJAIAFALQAFALAAANQAAAOgGAKQgGALgLAFIAAADQASAGAKANQAJANAAASQAAAQgFAMQgFAMgKAJQgJAJgLAEIgEABQgPAFgQAAgAg0BDIBKAAQAMAAAHgEIADgDQAJgGAAgLQAAgLgIgHQgIgGgPAAIg8AAIgOAAgAg0gXIBDAAQAIAAAGgEIADgCQAGgHAAgIQAAgLgGgFQgGgGgLAAIg1AAIgOAAg");
	this.shape_4.setTransform(111.8,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9,0.1,9).s().p("AhTBvQgGAAAAgGIAAjRQAAgGAGAAIAIAAICcAAQAFAAAAAGIAAAgIAAACQgBAEgEAAIhuAAIgNAAIAAApIBrAAQAGAAAAAGIAAAgIAAACQgBAEgFAAIheAAIgNAAIAAAwIB+AAQAGAAAAAGIAAAgIAAACQgBAEgFAAg");
	this.shape_5.setTransform(134.9,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.7,0.1,9.8).s().p("AA4BvQgGAAAAgGIAAhXIhXAAIgNAAIAABXIAAACQgBAEgEAAIgkAAQgGAAABgGIAAjRQgBgGAGAAIAIAAIAcAAQAFAAAAAGIAABOIBkAAIAAgEIAAhKQAAgGAGAAIAIAAIAcAAQAFAAAAAGIAADRIAAACQgBAEgEAAg");
	this.shape_6.setTransform(158.1,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.7,0.1,9.8).s().p("AA4BvQgFAAAAgGIAAhXIhYAAIgNAAIAABXIAAACQgBAEgEAAIgkAAQgFAAgBgGIAAjRQABgGAFAAIAIAAIAcAAQAFAAAAAGIAABOIBlAAIAAgEIAAhKQAAgGAFAAIAIAAIAcAAQAFAAAAAGIAADRIAAACQgBAEgEAAg");
	this.shape_7.setTransform(182.5,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.6,0.1,9.7).s().p("AhZBvQgHAAAAgGIAAjRQAAgGAHAAIAIAAIAbAAQAGAAgBAGIAAA2IA7AAQASAAARAGQAPAGANALQAMALAFAOQAHAPAAARQAAARgHAPQgFAPgMALQgMAKgPAHIgBAAQgRAGgSAAgAgxBDIA7AAQAJAAAIgDIADgCQAFgCAEgEQAKgKAAgQQAAgRgKgKQgFgEgHgDQgIgCgJAAIgtAAIgOAAg");
	this.shape_8.setTransform(206.9,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-2.3,0.1,2.4).s().p("AgRBvQgGAAABgGIAAjRQgBgGAGAAIAIAAIAbAAQAFAAAAAGIAADRIAAACQgBAEgEAAg");
	this.shape_9.setTransform(220.9,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#462601").s().p("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");
	this.shape_10.setTransform(124.4,11.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9,0.1,9).s().p("AhTBvQgGAAAAgGIAAjRQAAgGAGAAIAIAAICcAAQAFAAAAAGIAAAgIAAACQgBAEgEAAIhuAAIgOAAIAAApIBsAAQAGAAAAAGIAAAgIAAACQgBAEgFAAIheAAIgOAAIAAAwIB/AAQAGAAAAAGIAAAgIAAACQgBAEgFAAg");
	this.shape_11.setTransform(237.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,247.5,23.3), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-15.4,0,15.5).s().p("AiRC4QgJAAAAgKIAAlcQAAgJAJAAIAGAAICiAAQAYAAAUAIQATAHAQAOQAOANAIATQAIASAAAVQAAAWgKASQgKARgQAKIAAADQAcALAQAWQAPAWAAAeQAAAZgIAVQgJAUgQAOQgQAQgVAHQgWAJgaAAgAhSBvIB0AAQAOgBAKgEQAFgCAFgEQAOgLAAgTQAAgSgNgLQgMgJgXAAIhmAAIgOAAgAhSgnIBpAAQALgBAIgDIAHgGQAKgLAAgOQAAgRgJgKQgKgKgRAAIhbAAIgOAAg");
	this.shape.setTransform(15.5,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-15,0,15).s().p("AiMC4QgJAAAAgKIAAlcQAAgJAJAAIAGAAIAyAAQAHAAAAAJIAABaIBcAAQAdAAAaAKQAYAKATATQASARAJAZQAKAYAAAcQAAAdgKAZQgJAYgSATQgTARgYALIgCABQgaAJgbAAgAhNBvIBcAAQAPAAAMgGIAAAAQAKgFAJgHQAQgRAAgbQAAgcgQgQQgJgHgKgEQgMgEgPAAIhOAAIgOAAg");
	this.shape_1.setTransform(52.3,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-3.7,0,3.7).s().p("AgaC4QgKAAAAgKIAAlcQAAgJAKAAIAEAAIAyAAQAJAAAAAJIAAFcIgBAFQgCAFgGAAg");
	this.shape_2.setTransform(74,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-15.4,0,15.5).s().p("AiRC4QgJAAAAgKIAAlcQAAgJAJAAIAGAAICiAAQAYAAAUAIQATAHAQAOQAOANAIATQAHASAAAVQAAAWgJASQgKARgQAKIAAADQAcALAPAWQAQAWAAAeQAAAZgIAVQgIAUgRAOQgQAQgVAHQgWAJgaAAgAhSBvIB0AAQAOgBAKgEQAFgCAFgEQAOgLAAgTQAAgSgNgLQgMgJgXAAIhmAAIgOAAgAhSgnIBpAAQALgBAIgDIAHgGQAKgLAAgOQAAgRgJgKQgLgKgQAAIhbAAIgOAAg");
	this.shape_3.setTransform(100.8,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-18.1,-0.1,18.2).s().p("AgjC5IgigJQghgPgagaQgQgQgXgrIgKglQgEgSAAgUQAAgbAOgvQAKgYAdglQAagZAhgOIAigMIABAAIAjgDQAYAAAuAPQAgAOAZAZQAeAlAKAYQAOAvAAAbQAAAUgDASIgLAlQgXArgRAQQgYAZggAPIgBABIAAAAQguANgYAAgAgVhwQgLACgKAFQgVAHgNAQQgOAPgIAXQgIAUAAAZQAAAYAIAWQAIAUAOAQQANAPAVAKQATAHAYABQAVgBASgGIAEgBQASgKAPgPQAQgQAHgUQAIgWAAgYQAAgZgIgUQgHgXgQgPQgPgQgSgHQgUgKgXAAQgLABgLACg");
	this.shape_4.setTransform(139.5,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-18.8,0,18.9).s().p("ACADdQgJAAAAgJIgDhCIjZAAIgNAAIgFBAQAAAEgBADQgDAEgFAAIgyAAQgJAAAAgJIAAiDQAAgKAJAAIAGAAIAPAAQAIAAAFgDQAHgGABgNIAhkEQABgJAHAAIAHAAIDmAAQAJAAAAAJIAAEaIAdAAQAIAAAAAKIAACDIgBAFQgCAEgFAAgAg9A1QgCALgEAHICQAAIAAgDIAAjWIhkAAIgNAAg");
	this.shape_5.setTransform(180.8,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-15,0,15.1).s().p("AiMC4QgKAAAAgKIAAlcQAAgJAKAAIAFAAIAyAAQAIAAAAAJIAABaIBbAAQAdAAAbAKQAXAKATATQATARAJAZQALAYAAAcQAAAdgLAZQgJAYgTATQgTARgXALIgDABQgZAJgcAAgAhNBvIBbAAQAPAAAMgGIABAAQALgFAIgHQAQgRAAgbQAAgcgQgQQgIgHgMgEQgMgEgPAAIhNAAIgOAAg");
	this.shape_6.setTransform(220.5,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],-3.6,0,3.7,0).s().p("AgbC4QgJAAAAgKIAAlcQAAgJAJAAIAGAAIAwAAQAKAAAAAJIAAFcIgBAFQgDAFgGAAg");
	this.shape_7.setTransform(242.2,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#462601").s().p("ALwDgIABgFIAAiDQAAgKgIAAIgdAAIAAkaQAAgJgJAAIjoAAQADgEAEAAIDuAAQAJAAAAAJIAAEbIAdAAQAIAAAAAJIAACCQAAAKgIAAgAG7DgQACgDAAgEIAEhAIAOAAIgFA8QAAALgJAAgAS+CVIABgGIAAlbQAAgJgJAAIgxAAQABgEAHAAIA3AAQAJAAAAAJIAAFcQAAAJgJAAgAnTCVIABgGIAAlbQAAgJgJAAIgyAAQACgEAHAAIA3AAQAJAAAAAJIAAFcQAAAJgJAAgAhwB6QARgPAHgUQAJgVgBgZQAAgegPgVQgPgWgcgMIAAgDQAQgKAKgRQAJgSAAgVQAAgWgHgSQgJgSgNgNQgQgPgTgHQgVgHgXAAIikAAQADgEAFAAICpAAQAYAAAVAHQASAIARAOQANANAIASQAHATAAAUQABAWgKATQgKAQgQAKIAAADQAcAMAPAXQAQAUAAAfQAAAYgIAVQgIAVgRANQgPARgWAHIgNAEQAVgIAQgPgAvFB6QAPgPAJgUQAIgVAAgZQAAgegPgVQgQgWgcgMIAAgDQARgKAKgRQAJgSAAgVQAAgWgIgSQgIgSgNgNQgRgPgSgHQgVgHgYAAIijAAQACgEAFAAICpAAQAYAAAVAHQATAIAQAOQAOANAHASQAIATAAAUQAAAWgJATQgKAQgRAKIAAADQAcAMAQAXQAPAUABAfQAAAYgJAVQgIAVgQANQgQARgVAHIgNAEQAUgIARgPgAQHCPQAXgKATgSQATgTAJgYQALgZAAgdQAAgbgLgYQgJgZgTgRQgTgTgXgKQgbgKgdAAIhcAAIAAhaQAAgJgIAAIgyAAQACgEAHAAIA3AAQAIAAAAAJIAABaIBbAAQAeAAAaAJQAYALATASQASASAKAYQAKAZAAAbQAAAdgKAaQgKAYgSASQgTASgYALIgQAEIADgBgAEXBoQARgQAXgrIALglQADgRAAgUQAAgcgOgvQgKgYgeglQgZgZgggOQgugPgYAAIgkADIAMgDIAlgEQAZAAAtAOQAhAPAZAZQAdAmAKAWQAPAxAAAbQAAATgEATIgLAkQgWArgRARQgZAZghAPIgMADQAggPAYgZgAqKCPQAYgKATgSQASgTAJgYQAKgZAAgdQAAgbgKgYQgJgZgSgRQgTgTgYgKQgagKgdAAIhdAAIAAhaQAAgJgHAAIgyAAQABgEAHAAIA3AAQAIAAAAAJIAABaIBcAAQAdAAAaAJQAYALATASQASASAJAYQALAZgBAbQABAdgLAaQgJAYgSASQgTASgYALIgPAEIACgBgABsBNQgVgKgNgPQgOgQgIgUQgIgVAAgYQAAgaAIgUQAIgXAOgPQANgQAVgHQAKgFALgCIgHADQgVAHgNAPQgPAQgIAWQgHAVAAAaQAAAYAHAVQAIAVAPAQQANAPAVAIQATAIAYAAQAOAAAMgCQgSAGgVABQgZgBgTgHgANzBQIAAh4IAOAAIAAB0IBbAAIAOgBQgMAFgPAAgAk9BQIAAhOIANAAIAABKIB1AAIALAAQgKAEgOAAgAseBQIAAh4IAOAAIAAB0IBcAAIAOgBQgMAFgPAAgAyTBQIAAhOIAOAAIAABKIB1AAIALAAQgLAEgOAAgAHxBOQAEgHABgLIAajHIAMAAIgYDEQgCAKgDAIICCAAIAAADgAGIBOQABgDAHAAIAUAAQgGADgIAAgAk9hGIAAhHIANAAIAABDIBqAAIAGAAQgJAEgKAAgAyThGIAAhHIAOAAIAABDIBpAAIAHAAQgJAEgLAAg");
	this.shape_8.setTransform(124.4,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,247.3,45.2), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwVAaJQgyAAAAgyMAAAgytQAAgyAyAAMBgrAAAQAyAAAAAyMAAAAytQAAAygyAAg");
	this.shape.setTransform(314.4,167.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,628.8,334.7), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],-19.1,-5.1,19.2,5.2).s().p("AAEIxIkfhNQgwgNANgwID+uzQANgxAwANIEfBNQAwANgNAxIj+OzQgKAmggAAQgJAAgKgDg");
	this.shape.setTransform(32.2,56.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,64.4,112.7), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhB9IAAg0IiHAAIAAA0IgqAAIAAhZIAcAAQAKgSAGgRQAGgRADgSQADgSABgUIAAgwICBAAIAACcIAhAAIAABZgAl2gUQgDAPgEAOQgFAPgHAMIBGAAIAAh3IgtAAgAAdBMIgTgFQgQgHgOgMQgGgHgFgIQgFgIgEgJQgEgKgCgKQgCgLAAgMQAAgZAIgTQAIgTANgNQAOgMAQgHIASgFIATgBQAUAAARAGQAJADAIAFQAIAFAGAGQANANAIATQAIATAAAZQAAAMgCALQgCAKgEAKQgHATgNANQgNAMgSAHQgSAGgUAAQgKAAgJgBgAAahRQgJAEgHAJQgHAIgDALQgDAMAAAOQAAAOADALQADALAHAJQAHAIAJAEQAKAFAMAAQAMAAAKgFQAJgEAHgIQAGgJAEgLQADgLAAgOQAAgOgDgMQgEgLgGgJQgHgIgJgEQgKgFgMAAQgMAAgKAFgApZBMIgTgFQgRgHgOgMQgGgHgFgIQgFgIgEgJQgEgKgCgKQgCgLAAgMQAAgZAIgTQAIgTANgNQAOgMARgHIASgFIATgBQAUAAARAGQAJADAIAFQAIAFAGAGQANANAIATQAIATAAAZQAAAMgCALQgCAKgEAKQgHATgNANQgNAMgSAHQgSAGgUAAQgKAAgJgBgApchRQgJAEgHAJQgHAIgDALQgEAMAAAOQAAAOAEALQADALAHAJQAHAIAJAEQAKAFAMAAQAMAAAKgFQAJgEAHgIQAGgJAEgLQADgLAAgOQAAgOgDgMQgEgLgGgJQgHgIgJgEQgKgFgMAAQgMAAgKAFgADTBKQgPgCgPgDIAAi9ICAAAIAAAlIhXAAIAAAgIAPAAQAVAAARADQARAEAMAHIAKAJQAEAFADAGQAEAGABAHQACAHAAAIQAAAQgGAMQgGANgMAHQgXAQgrAAgADeAlIAIABIAagBQAIgBAGgDQAGgDAEgFQADgFAAgIQAAgJgDgEQgDgFgHgDQgGgEgJgBIghgBgALiBJIAAjBICDAAIAAAlIhYAAIAAAmIBOAAIAAAkIhOAAIAAAuIBeAAIAAAkgAI4BJIAAjBICDAAIAAAlIhXAAIAAAmIBNAAIAAAkIhNAAIAAAuIBeAAIAAAkgAHgBJIAAhRIhKAAIAABRIgrAAIAAjBIArAAIAABKIBKAAIAAhKIArAAIAADBgAjbBJIAAi+QAOgDAQgBIAcgBQArAAAXAPQAYAQAAAiQAAASgGAMQgGANgMAIQgXAOgsAAIgOAAIAABBgAiwgcIAOAAQALAAAJgCQAJgBAFgDQAGgDADgGQADgGAAgIQAAgIgDgGQgDgFgGgDQgFgDgIgCIgjAAgAr2BJIAAicIhJAAIAACcIgrAAIAAjBICfAAIAADBg");
	this.shape.setTransform(979.9,-82.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFC603","#FF9900"],[0,1],-68.8,-85,68.8,85).s().p("Ay2EwQgyAAAAgzIAAn5QAAgzAyAAMAltAAAQAyAAAAAzIAAH5QAAAzgyAAg");
	this.shape_1.setTransform(978.2,-85.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("Ay2EvQgyABAAgyIAAn6QAAgzAyAAMAltAAAQAyAAAAAzIAAH6QAAAygygBg");
	this.shape_2.setTransform(978.2,-82.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(852.5,-116.2,251.5,64.5), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhB9IAAg0IiHAAIAAA0IgqAAIAAhZIAcAAQAKgSAGgRQAGgRADgSQADgSABgUIAAgwICBAAIAACcIAhAAIAABZgAl2gUQgDAPgEAOQgFAPgHAMIBGAAIAAh3IgtAAgAAdBMIgTgFQgQgHgOgMQgGgHgFgIQgFgIgEgJQgEgKgCgKQgCgLAAgMQAAgZAIgTQAIgTANgNQAOgMAQgHIASgFIATgBQAUAAARAGQAJADAIAFQAIAFAGAGQANANAIATQAIATAAAZQAAAMgCALQgCAKgEAKQgHATgNANQgNAMgSAHQgSAGgUAAQgKAAgJgBgAAahRQgJAEgHAJQgHAIgDALQgDAMAAAOQAAAOADALQADALAHAJQAHAIAJAEQAKAFAMAAQAMAAAKgFQAJgEAHgIQAGgJAEgLQADgLAAgOQAAgOgDgMQgEgLgGgJQgHgIgJgEQgKgFgMAAQgMAAgKAFgApZBMIgTgFQgRgHgOgMQgGgHgFgIQgFgIgEgJQgEgKgCgKQgCgLAAgMQAAgZAIgTQAIgTANgNQAOgMARgHIASgFIATgBQAUAAARAGQAJADAIAFQAIAFAGAGQANANAIATQAIATAAAZQAAAMgCALQgCAKgEAKQgHATgNANQgNAMgSAHQgSAGgUAAQgKAAgJgBgApchRQgJAEgHAJQgHAIgDALQgEAMAAAOQAAAOAEALQADALAHAJQAHAIAJAEQAKAFAMAAQAMAAAKgFQAJgEAHgIQAGgJAEgLQADgLAAgOQAAgOgDgMQgEgLgGgJQgHgIgJgEQgKgFgMAAQgMAAgKAFgADTBKQgPgCgPgDIAAi9ICAAAIAAAlIhXAAIAAAgIAPAAQAVAAARADQARAEAMAHIAKAJQAEAFADAGQAEAGABAHQACAHAAAIQAAAQgGAMQgGANgMAHQgXAQgrAAgADeAlIAIABIAagBQAIgBAGgDQAGgDAEgFQADgFAAgIQAAgJgDgEQgDgFgHgDQgGgEgJgBIghgBgALiBJIAAjBICDAAIAAAlIhYAAIAAAmIBOAAIAAAkIhOAAIAAAuIBeAAIAAAkgAI4BJIAAjBICDAAIAAAlIhXAAIAAAmIBNAAIAAAkIhNAAIAAAuIBeAAIAAAkgAHgBJIAAhRIhKAAIAABRIgrAAIAAjBIArAAIAABKIBKAAIAAhKIArAAIAADBgAjbBJIAAi+QAOgDAQgBIAcgBQArAAAXAPQAYAQAAAiQAAASgGAMQgGANgMAIQgXAOgsAAIgOAAIAABBgAiwgcIAOAAQALAAAJgCQAJgBAFgDQAGgDADgGQADgGAAgIQAAgIgDgGQgDgFgGgDQgFgDgIgCIgjAAgAr2BJIAAicIhJAAIAACcIgrAAIAAjBICfAAIAADBg");
	this.shape.setTransform(127.4,27.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFC603","#FF9900"],[0,1],-68.8,-85,68.8,85).s().p("Ay2EwQgygBAAgyIAAn6QAAgyAyABMAltAAAQAygBAAAyIAAH6QAAAygyABg");
	this.shape_1.setTransform(125.7,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("Ay2EvQgyABAAgyIAAn6QAAgzAyAAMAltAAAQAyAAAAAzIAAH6QAAAygygBg");
	this.shape_2.setTransform(125.7,30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,-6.2,251.5,67), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzales();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,160,286), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(323.3,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,646.7,66.4), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWASQgMgHAAgLQAAgKAMgIQANgHARAAQARAAAMAHQAMAIAAAKQAAALgMAHQgMAIgRAAQgRAAgNgIgAiQASQgMgHAAgLQAAgKAMgIQAMgHARAAQARAAAMAHQANAIAAAKQAAALgNAHQgMAIgRAAQgRAAgMgIg");
	this.shape.setTransform(15.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,31.5,5.2), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(4,1,1).p("A0vmrMApfAAAIAANXMgpfAAAg");
	this.shape.setTransform(132.8,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-2,-2,269.6,89.7), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEntSlot1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestsymbolNetEnt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Gonzosquest();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEnt1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEntSlot1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEntSymbolкопия2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzosquestscatter();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzosquestscatter();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzosquestscatter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,97,97), null);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold();
	this.instance.parent = this;
	this.instance.setTransform(-71,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-38,142,76);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(135.4,45,1,1,0,0,0,135.4,45);
	this.instance.alpha = 0.422;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,271,90), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		playSound("_69690__lukaso__slotpayoffwav");
	}
	this.frame_100 = function() {
		playSound("_69690__lukaso__slotpayoffwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(56).call(this.frame_100).wait(81));

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(290.5,747,1,1,0,0,0,290.5,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({y:1617},116).to({y:1967},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,587,892);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-317,11.7,1,1,0,0,0,123.7,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.4},9,cjs.Ease.get(-1)).to({y:10.1},10,cjs.Ease.get(1)).to({y:11.1},10,cjs.Ease.get(-1)).to({y:11.7},10,cjs.Ease.get(1)).wait(21));

	// Слой 2
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-316.8,52,1,1,0,0,0,123.6,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:51.8},9,cjs.Ease.get(-1)).to({y:51.2},10,cjs.Ease.get(1)).to({y:52},10,cjs.Ease.get(-1)).to({y:53.2},10,cjs.Ease.get(1)).to({y:52.6},10,cjs.Ease.get(-1)).to({y:52},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440.7,0,247.6,74.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(123.5,11.4,1,1,0,0,0,123.4,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.1},9,cjs.Ease.get(-1)).to({y:9.8},10,cjs.Ease.get(1)).to({y:11.2},10,cjs.Ease.get(-1)).to({y:12.2},10,cjs.Ease.get(1)).to({y:11.8},10,cjs.Ease.get(-1)).to({y:11.4},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.3,45.7,1,1,0,0,0,123.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:45.5},9,cjs.Ease.get(-1)).to({y:44.9},10,cjs.Ease.get(1)).to({y:45.9},10,cjs.Ease.get(-1)).to({y:47.3},10,cjs.Ease.get(1)).to({y:46.5},10,cjs.Ease.get(-1)).to({y:45.7},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,246.9,61.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(302.8,202.4,1,1.227,0,0,0,314.4,167.3);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-11.6,-2.9,628.8,410.7), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(32.1,56.4,1,1,0,0,0,32.1,56.4);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,64.4,112.7), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(125.7,36.7,1,1,0,0,0,125.7,30.4);

	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-844.2,128.8,1,1,0,0,0,8.8,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.5,67);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,142,76), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.trava();
	this.instance.parent = this;
	this.instance.setTransform(318,0,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.trava();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18,0,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(356.1,52.4,1,1,0,0,0,323.4,33.1);
	this.instance_2.alpha = 0.602;
	this.instance_2.filters = [new cjs.BlurFilter(19, 19, 1)];
	this.instance_2.cache(-2,-2,651,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-18,0,711.7,99.3), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(457.6,-100.1,1,1,0,0,0,15.7,2.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(21).to({alpha:1},1).to({alpha:0},1).wait(23).to({alpha:1},1).to({alpha:0},1).wait(18).to({alpha:1},1).to({alpha:0},1).wait(13).to({alpha:1},1).to({alpha:0},1).wait(1));

	// gold.png
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(461,-18,1,1,0,0,0,71,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({scaleX:1.03,scaleY:1.03,y:-18.8},7,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:461.1,y:-21.9},5,cjs.Ease.get(1)).to({regX:71.1,scaleX:1.09,scaleY:1.09,x:461.2,y:-20.9},5,cjs.Ease.get(-1)).to({regX:71,scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,x:461.1,y:-19.9},5,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,y:-21.9},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).wait(5).to({scaleX:1.13,scaleY:1.13,x:461.1,y:-21.9},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).wait(6).to({scaleX:1.13,scaleY:1.13,x:461.1,y:-21.9},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).wait(1));

	// gonzales.png
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(470,6,1,1,0,0,0,80,143);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390,-137,160,286);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		playSound("rolwav");
	}
	this.frame_30 = function() {
		playSound("rolwav");
	}
	this.frame_41 = function() {
		playSound("rolwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(11).call(this.frame_30).wait(11).call(this.frame_41).wait(141));

	// Слой 10
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(142.5,0.8,0.048,0.048,0,0,0,132.9,42.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({regX:133.1,regY:42.7,scaleX:0.4,scaleY:0.41,x:143.1,y:0.4},8,cjs.Ease.get(-1)).to({regX:133.8,regY:41.9,scaleX:0.76,scaleY:0.79,x:143.6,y:0.2},9,cjs.Ease.get(1)).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},6).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({_off:true},1).wait(31));

	// Слой 11
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.1,0.9,0.756,0.756,0,0,0,135.6,45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({alpha:0.672},8,cjs.Ease.get(-1)).to({alpha:0.301},9,cjs.Ease.get(1)).to({alpha:0.648},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).to({alpha:0.629},11,cjs.Ease.get(-1)).to({alpha:0.301},10,cjs.Ease.get(1)).wait(10).to({alpha:1},10,cjs.Ease.get(1)).wait(10).to({alpha:0.301},10,cjs.Ease.get(1)).to({alpha:0},11).wait(21));

	// Слой 7
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210.9,-434.8,0.756,0.756,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({y:-66.7},10,cjs.Ease.get(1)).wait(120).to({y:581.5},20).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(143.1,-366.5,0.756,0.756,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({y:-66.7},10,cjs.Ease.get(1)).wait(120).to({y:445.8},20).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(75.1,-298.8,0.756,0.756,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({y:-66.7},10,cjs.Ease.get(1)).wait(120).to({y:309.9},20).wait(1));

	// Слой 9
	this.instance_5 = new lib.Символ4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(210.5,-367.1,0.756,0.756,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({y:1},10,cjs.Ease.get(1)).wait(131).to({y:649.2},20).wait(1));

	// Слой 8
	this.instance_6 = new lib.Символ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(142.5,-298.9,0.756,0.756,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({y:0.8},10,cjs.Ease.get(1)).wait(131).to({y:513.4},20).wait(1));

	// Слой 1
	this.instance_7 = new lib.Символ2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(74.6,-231.4,0.698,0.698,0,0,0,48.6,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-231.3},9,cjs.Ease.get(-1)).to({y:-231.4},10,cjs.Ease.get(1)).wait(1).to({y:1.3},10,cjs.Ease.get(1)).wait(131).to({y:377.9},20).wait(1));

	// Слой 6
	this.instance_8 = new lib.Символ9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(211.1,-298.9,0.756,0.756,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-121.3},9,cjs.Ease.get(-1)).to({y:69.1},10,cjs.Ease.get(1)).wait(142).to({y:717.4},20).wait(1));

	// Слой 4
	this.instance_9 = new lib.Символ7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(143.1,-230.6,0.756,0.756,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-85.9},9,cjs.Ease.get(-1)).to({y:69.1},10,cjs.Ease.get(1)).wait(142).to({y:581.7},20).wait(1));

	// Слой 2
	this.instance_10 = new lib.Символ5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(75.1,-163.1,0.756,0.756,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-51.1},9,cjs.Ease.get(-1)).to({y:69},10,cjs.Ease.get(1)).wait(142).to({y:445.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.7,-468.6,204.2,339.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AytFPQg7AAAAgzIAAo3QAAgzA7AAMAlbAAAQA7AAAAAzIAAI3QAAAzg7AAg");
	var mask_graphics_29 = new cjs.Graphics().p("AytFPQg7AAAAgzIAAo3QAAgzA7AAMAlbAAAQA7AAAAAzIAAI3QAAAzg7AAg");
	var mask_graphics_84 = new cjs.Graphics().p("AytFPQg7AAAAgzIAAo3QAAgzA7AAMAlbAAAQA7AAAAAzIAAI3QAAAzg7AAg");
	var mask_graphics_85 = new cjs.Graphics().p("AytFPQg7AAAAgzIAAo3QAAgzA7AAMAlbAAAQA7AAAAAzIAAI3QAAAzg7AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:125.7,y:33.5}).wait(29).to({graphics:mask_graphics_29,x:125.7,y:33.5}).wait(55).to({graphics:mask_graphics_84,x:125.7,y:33.5}).wait(1).to({graphics:mask_graphics_85,x:125.7,y:33.5}).wait(1));

	// Слой 3
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(-51.4,27.9,1,1,0,0,0,32.1,56.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:114.2},14,cjs.Ease.get(-1)).to({x:288.6},15,cjs.Ease.get(1)).wait(56).to({x:-51.4},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125.7,33.5,1,1,0,0,0,125.7,33.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.5,67);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-803.5,280,1,1,0,0,0,80,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-493.5,0,160,286), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(69.9,125.1,0.874,0.874,0,0,0,-413.6,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,140,250.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(125.7,-100.1,1,1,0,0,0,125.7,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-83.5,-162.1,335,112.7), null);


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

	// text2
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(109.3,308.7,0.682,0.682,0,0,0,123.5,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(409.9,256.2,0.682,0.682,0,0,0,123.8,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// logo
	this.instance_2 = new lib.casinox();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20,1,0.443,0.443);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// btn
	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.2,409.7,0.682,0.682,0,0,0,-296.3,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// trava
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.5,319.3,0.917,0.917,0,0,0,179.8,36.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// gonzo
	this.instance_5 = new lib.Символ36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(314.1,173.2,1.22,1.22,0,0,0,70.2,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxVYiMAAAgxDMAirAAAMAAAAxDg");
	mask.setTransform(111,193.1);

	// slots
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(25.9,169.5,0.881,0.881,0,0,0,48.3,48.6);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// monetki
	this.instance_7 = new lib.Символ38();
	this.instance_7.parent = this;
	this.instance_7.setTransform(240.4,-465,1,1,0,0,0,293.5,446);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// bg
	this.instance_8 = new lib.Символ26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(251,162,1,1,0,0,0,302,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137.4,-736,688.1,1289.8);
// library properties:
lib.properties = {
	id: '0A758C2412DE4F6AA55DAD81160FE417',
	width: 400,
	height: 350,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1508505351790", id:"bg"},
		{src:"images/casinox.png?1508505351790", id:"casinox"},
		{src:"images/gold.png?1508505351790", id:"gold"},
		{src:"images/gonzales.png?1508505351790", id:"gonzales"},
		{src:"images/Gonzosquest.jpg?1508505351790", id:"Gonzosquest"},
		{src:"images/GonzosQuestNetEntSlot1.jpg?1508505351790", id:"GonzosQuestNetEntSlot1"},
		{src:"images/GonzosQuestNetEntSymbolкопия2.jpg?1508505351790", id:"GonzosQuestNetEntSymbolкопия2"},
		{src:"images/GonzosQuestNetEnt1.jpg?1508505351790", id:"GonzosQuestNetEnt1"},
		{src:"images/GonzosQuestsymbolNetEnt.jpg?1508505351790", id:"GonzosQuestsymbolNetEnt"},
		{src:"images/gonzosquestscatter.jpg?1508505351790", id:"gonzosquestscatter"},
		{src:"images/monetki.png?1508505351790", id:"monetki"},
		{src:"images/trava.png?1508505351790", id:"trava"},
		{src:"sounds/_69690__lukaso__slotpayoffwav.mp3?1508505351790", id:"_69690__lukaso__slotpayoffwav"},
		{src:"sounds/rolwav.mp3?1508505351790", id:"rolwav"}
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
an.compositions['0A758C2412DE4F6AA55DAD81160FE417'] = {
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