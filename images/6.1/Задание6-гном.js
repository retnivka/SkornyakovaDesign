(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание6_гном_atlas_1", frames: [[566,0,283,463],[175,377,90,126],[175,295,176,80],[267,377,110,96],[0,295,173,224],[0,0,564,293]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.голова = function() {
	this.initialize(ss["Задание6_гном_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.нога = function() {
	this.initialize(ss["Задание6_гном_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.нога2 = function() {
	this.initialize(ss["Задание6_гном_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.рука = function() {
	this.initialize(ss["Задание6_гном_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.рука2 = function() {
	this.initialize(ss["Задание6_гном_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["Задание6_гном_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.рука2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.рука2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рука2_1, new cjs.Rectangle(0,0,173,224), null);


(lib.рука_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.рука();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рука_1, new cjs.Rectangle(0,0,110,96), null);


(lib.нога2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.нога();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.нога2_1, new cjs.Rectangle(0,0,90,126), null);


(lib.нога_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.нога2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.нога_1, new cjs.Rectangle(0,0,176,80), null);


(lib.голова_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.голова();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голова_1, new cjs.Rectangle(0,0,283,463), null);


// stage content:
(lib.Задание6гном = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_3
	this.ikNode_1 = new lib.голова_1();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(1552.05,465.8,0.9996,0.9996,0,0,0,135.3,335.1);

	this.ikNode_2 = new lib.нога2_1();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(1487,588.9,0.9998,0.9998,0,0,0,45.1,63.1);

	this.ikNode_4 = new lib.нога_1();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(1693.25,530.7,0.9998,0.9998,0,0,0,109.4,43.9);

	this.ikNode_6 = new lib.рука_1();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(1709,383.7,0.9998,0.9998,0,0,0,78.1,37.9);

	this.ikNode_8 = new lib.рука2_1();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(1403.3,440.45,0.9998,0.9998,0,0,0,123.4,166.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_8,p:{x:1403.3,y:440.45,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.1,x:1709,y:383.7,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1693.25,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:0,x:1487,y:588.9,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1552.05,y:465.8,rotation:0,regY:335.1,regX:135.3}}]}).to({state:[{t:this.ikNode_8,p:{x:1376.65,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1682.5,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1666.7,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:1.3258,x:1457.55,y:587.35,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1525.4,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1350.05,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1655.9,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1640.05,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:2.6549,x:1428.15,y:585.75,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1498.8,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1323.45,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1629.3,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1613.45,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:3.9838,x:1398.75,y:584.2,regY:63.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1472.2,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1296.85,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1602.7,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1586.85,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:5.3121,x:1369.4,y:582.3,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1445.6,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1270.2,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1576.1,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1560.25,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:6.6407,x:1340.05,y:580.45,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1419,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1243.6,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1549.5,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1533.65,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:7.9702,x:1310.85,y:578.65,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1392.4,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1217,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1522.9,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1507.05,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:9.2987,x:1281.6,y:576.7,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1365.8,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1190.4,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1496.3,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1480.45,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:10.627,x:1252.45,y:574.75,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1339.2,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1163.75,y:440.35,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1469.65,y:383.6,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1453.85,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:11.9558,x:1223.35,y:572.7,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1312.55,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1137.15,y:440.35,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1443.05,y:383.6,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1427.25,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:6.6089,x:1202.65,y:577.35,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1285.95,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1110.55,y:440.35,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1416.45,y:383.6,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1400.65,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:1.2619,x:1182.25,y:581.75,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1259.35,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1083.95,y:440.35,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1389.85,y:383.6,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1374.05,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-4.0802,x:1162.05,y:585.9,regY:63.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1232.75,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1057.3,y:440.35,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1363.25,y:383.6,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1347.45,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-9.4264,x:1142.05,y:589.35,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1206.1,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1030.7,y:440.35,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1336.65,y:383.6,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1309.45,regY:44,rotation:17.831,y:551.2,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-11.8136,x:1121.6,y:592.35,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1179.5,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:1004.1,y:440.35,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1310.05,y:383.6,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1268.1,regY:43.9,rotation:35.6648,y:570,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-14.2021,x:1101.35,y:595.1,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1152.9,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:977.45,y:440.35,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1283.45,y:383.6,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1224.5,regY:43.9,rotation:53.4965,y:586.05,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-16.5896,x:1081.15,y:597.45,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1126.25,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:950.85,y:440.35,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1256.85,y:383.6,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1190.35,regY:43.9,rotation:58.8221,y:591.8,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-18.9811,x:1061.2,y:599.55,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1099.65,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:924.25,y:440.35,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1230.25,y:383.6,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1155.9,regY:43.9,rotation:64.1455,y:597.2,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-21.3722,x:1041.25,y:601.25,regY:63.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1,p:{x:1073.05,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:897.65,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1203.7,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1121.05,regY:43.9,rotation:69.47,y:602,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-23.7642,x:1021.4,y:602.8,regY:63.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:1046.45,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:871,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1177.05,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1100.3,regY:43.9,rotation:64.5073,y:598.7,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-22.0669,x:991.85,y:602.05,regY:63.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1,p:{x:1019.85,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:844.4,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1150.45,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1079.45,regY:43.9,rotation:59.5452,y:594.95,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-20.3688,x:962.25,y:601.45,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:993.25,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:817.8,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1123.8,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1058.65,regY:43.9,rotation:54.5829,y:591,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-18.6717,x:932.7,y:600.7,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:966.65,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:791.2,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1097.2,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1037.6,regY:43.9,rotation:49.6207,y:586.55,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-16.9741,x:903.2,y:600.1,regY:63.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:940.05,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:764.6,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1070.6,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:1016.55,regY:43.9,rotation:44.6581,y:581.9,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-15.2756,x:873.7,y:599.15,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:913.45,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:738,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1043.95,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:995.3,regY:43.9,rotation:39.6965,y:576.9,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-13.5788,x:844.15,y:598.2,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:886.85,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:711.4,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:1017.35,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:973.95,regY:43.9,rotation:34.7342,y:571.6,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-11.8807,x:814.6,y:597.3,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:860.25,y:465.7,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:684.8,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:990.75,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:952.15,regY:43.9,rotation:29.7722,y:566.15,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-10.1824,x:785.15,y:596.4,regY:63.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:833.65,y:465.75,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:658.2,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:964.1,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:930.2,regY:43.9,rotation:24.8089,y:560.6,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-8.4853,x:755.65,y:595.2,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:807.05,y:465.75,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:631.6,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:937.5,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:907.95,regY:43.9,rotation:19.8473,y:554.7,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-6.7877,x:726.2,y:594,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:780.45,y:465.75,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:605,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:910.9,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:885.2,regY:43.9,rotation:14.8852,y:548.75,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-5.0899,x:696.85,y:592.85,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:753.85,y:465.8,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:578.4,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:884.25,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:862.2,regY:43.9,rotation:9.9226,y:542.75,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-3.3932,x:667.5,y:591.55,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:727.25,y:465.8,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:551.8,y:440.4,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:857.65,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:838.85,regY:43.9,rotation:4.9607,y:536.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.6949,x:638.15,y:590.2,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:700.65,y:465.8,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:525.2,y:440.45,rotation:0,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:831.05,y:383.65,rotation:0,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:815.25,regY:43.9,rotation:0,y:530.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:0,x:608.95,y:588.9,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:674.05,y:465.8,rotation:0,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:520.75,y:435.6,rotation:0.9996,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:828.5,y:386.15,rotation:2.5762,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:801.3,regY:43.9,rotation:11.3159,y:545.2,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:4.6529,x:599.75,y:584.25,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:669.2,y:463.65,rotation:3.1485,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:516.45,y:430.75,rotation:2.0029,regX:123.5,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:825.9,y:388.75,rotation:5.1541,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:785.15,regY:43.9,rotation:22.631,y:558.75,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:9.3085,x:590.65,y:579.45,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:664.3,y:461.3,rotation:6.3004,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:511.95,y:426,rotation:3.006,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:823.1,y:391.35,rotation:7.7328,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:767.1,regY:43.9,rotation:33.9471,y:571,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:13.9641,x:581.65,y:574.5,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:659.4,y:459.05,rotation:9.4521,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:507.6,y:421.15,rotation:4.0083,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.1,x:820,y:394.2,rotation:10.3104,regY:38,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:747,regY:43.9,rotation:45.2634,y:581.45,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:18.6199,x:572.75,y:569.4,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:654.5,y:456.75,rotation:12.6025,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:503.35,y:416.6,rotation:5.0109,regX:123.4,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:817.05,y:396.85,rotation:12.8896,regY:38,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:725.45,regY:43.9,rotation:56.5801,y:589.85,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:23.2754,x:563.9,y:564.15,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:649.6,y:454.45,rotation:15.755,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:499.1,y:411.7,rotation:6.0133,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:813.85,y:399.55,rotation:15.4678,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:702.9,regY:43.9,rotation:67.8959,y:596.05,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:27.9308,x:555.2,y:558.75,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:644.7,y:452.15,rotation:18.9063,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:494.95,y:406.9,rotation:7.0168,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:810.45,y:402.35,rotation:18.047,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.55,regY:43.9,rotation:79.2116,y:599.85,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:32.5867,x:546.65,y:553.3,regY:63.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1,p:{x:639.85,y:450,rotation:22.0571,regY:335.2,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:490.75,y:402.15,rotation:8.0197,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.1,x:806.8,y:405.2,rotation:20.6248,regY:37.9,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_4,p:{x:655.95,regY:43.9,rotation:90.5255,y:601.4,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:37.2414,x:538.1,y:547.65,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:634.9,y:447.6,rotation:25.2088,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:494.7,y:404.85,rotation:7.9154,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:810.6,y:405.4,rotation:19.1672,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:675.4,regY:43.9,rotation:84.747,y:600.3,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:34.637,x:546.65,y:553.75,regY:63.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:639.05,y:449.65,rotation:21.5107,regY:335.2,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:498.8,y:407.2,rotation:7.8113,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:814.35,y:405.8,rotation:17.7079,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:694.45,regY:43.9,rotation:78.965,y:597.9,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:32.0328,x:555.45,y:559.5,regY:63.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_1,p:{x:643.25,y:451.45,rotation:17.8123,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:502.85,y:409.4,rotation:7.7063,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:818.1,y:406.45,rotation:16.2495,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:713.15,regY:43.9,rotation:73.1832,y:593.9,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:29.4282,x:564.3,y:565.1,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:647.3,y:453.45,rotation:14.1137,regY:335.2,regX:135.2}}]},1).to({state:[{t:this.ikNode_8,p:{x:507,y:411.4,rotation:7.6022,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:821.95,y:407.3,rotation:14.7903,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:731.25,regY:43.9,rotation:67.4011,y:588.45,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:26.8239,x:573.4,y:570.55,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:651.6,y:455.35,rotation:10.4155,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:511.15,y:413.3,rotation:7.498,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:825.75,y:408.15,rotation:13.3323,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:748.4,regY:43.9,rotation:61.6194,y:581.7,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:24.2195,x:582.45,y:575.8,regY:63.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:655.65,y:457.25,rotation:6.7168,regY:335.1,regX:135.2}}]},1).to({state:[{t:this.ikNode_8,p:{x:515.45,y:415.2,rotation:7.394,regX:123.4,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:829.6,y:409.25,rotation:11.8735,regY:38,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:764.7,regY:43.9,rotation:55.8375,y:573.6,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:21.6145,x:591.85,y:580.75,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:659.9,y:459.15,rotation:3.018,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:519.55,y:416.95,rotation:7.29,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:833.5,y:410,rotation:10.4154,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:779.75,regY:44,rotation:50.0564,y:564.35,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:19.0107,x:601.3,y:585.5,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:664.05,y:461.1,rotation:-0.6743,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:523.75,y:418.95,rotation:7.186,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:837.35,y:410.85,rotation:8.9569,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:793.85,regY:44,rotation:44.2747,y:554.05,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:16.4053,x:610.9,y:590,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:668.2,y:463.05,rotation:-4.3729,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:527.85,y:421.1,rotation:7.0811,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:841.05,y:411.55,rotation:7.498,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:806.6,regY:43.9,rotation:38.4918,y:542.85,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:13.801,x:620.55,y:594.25,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:672.4,y:464.95,rotation:-8.0715,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:531.9,y:423.65,rotation:6.9771,regX:123.4,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:844.7,y:411.95,rotation:6.0398,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:818,regY:43.9,rotation:32.7102,y:530.95,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:11.1961,x:630.35,y:598.35,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:676.55,y:466.85,rotation:-11.7703,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:535.85,y:426.2,rotation:6.8732,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:848.3,y:412.15,rotation:4.5818,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:827.7,regY:44,rotation:26.9283,y:518.4,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:8.5923,x:640.2,y:602.3,regY:63.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:680.7,y:468.8,rotation:-15.4681,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:531.1,y:427.8,rotation:5.3833,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:844.45,y:413.7,rotation:5.039,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:818,regY:43.9,rotation:32.4291,y:532.2,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:7.5033,x:634.65,y:602,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:676.4,y:468.9,rotation:-12.4879,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:526.35,y:429.75,rotation:3.8943,regX:123.5,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.1,x:840.4,y:415.2,rotation:5.4974,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:807,regY:43.9,rotation:37.9289,y:545.65,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:6.4145,x:629.2,y:601.8,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:672.1,y:469,rotation:-9.5096,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:521.35,y:431.85,rotation:2.4037,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.1,x:836.4,y:416.5,rotation:5.9562,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:794.65,regY:43.9,rotation:43.4305,y:558.35,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:5.3262,x:623.8,y:601.6,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:667.7,y:469.15,rotation:-6.5292,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:516.55,y:434.2,rotation:0.9138,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:832.55,y:417.8,rotation:6.4145,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:781,regY:43.9,rotation:48.9306,y:570.35,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:4.238,x:618.5,y:601.35,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:663.45,y:469.3,rotation:-3.5497,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:511.65,y:436.6,rotation:-0.5702,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.1,x:828.5,y:419,rotation:6.8732,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:766.3,regY:43.9,rotation:54.4305,y:581.4,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:3.1488,x:613.2,y:601.25,regY:63.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:659.1,y:469.4,rotation:-0.5703,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:506.8,y:439.05,rotation:-2.0598,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:824.6,y:420.35,rotation:7.3314,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:750.6,regY:43.9,rotation:59.9328,y:591.4,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:2.0598,x:607.9,y:600.95,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:654.75,y:469.55,rotation:2.4033,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:502.05,y:441.4,rotation:-3.5499,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:820.55,y:421.6,rotation:7.7901,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:734.1,regY:43.9,rotation:65.4325,y:600.3,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:0.9716,x:602.55,y:600.75,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:650.45,y:469.85,rotation:5.3834,regY:335.2,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:497.35,y:443.5,rotation:-5.039,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.1,x:816.45,y:422.95,rotation:8.2485,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:716.7,regY:43.9,rotation:70.9337,y:607.8,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-0.1119,x:597.15,y:600.45,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:646.15,y:469.8,rotation:8.3631,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:492.6,y:445.55,rotation:-6.5288,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:812.6,y:424.4,rotation:8.7073,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:698.95,regY:43.9,rotation:76.4337,y:614.15,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.2007,x:591.65,y:600.15,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:641.7,y:469.95,rotation:11.3427,regY:335.1,regX:135.2}}]},1).to({state:[{t:this.ikNode_8,p:{x:488.05,y:447.25,rotation:-8.0197,regX:123.4,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.7,y:425.9,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:680.55,regY:43.9,rotation:81.9348,y:618.85,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-2.2891,x:586.1,y:599.9,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.55,y:470.05,rotation:14.3222,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:489.15,y:441.1,rotation:-5.7268,regX:123.4,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.7,y:426,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:680.5,regY:43.9,rotation:81.987,y:618.85,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-2.2375,x:586.05,y:599.85,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.5,y:470.05,rotation:13.5409,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:490.5,y:434.7,rotation:-3.4352,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.75,y:426.1,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:680.4,regY:43.9,rotation:82.0391,y:619.05,regX:109.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-2.1849,x:585.95,y:599.95,regY:63.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.4,y:470.05,rotation:12.7593,regY:335.1,regX:135.2}}]},1).to({state:[{t:this.ikNode_8,p:{x:492.3,y:428.35,rotation:-1.143,regX:123.4,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.75,y:426.2,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:680.25,regY:43.9,rotation:82.0903,y:618.95,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-2.1333,x:585.95,y:599.75,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.45,y:470,rotation:11.9786,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:494.4,y:421.7,rotation:1.143,regX:123.5,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.75,y:426.3,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:680.1,regY:43.9,rotation:82.1432,y:618.95,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-2.0808,x:585.85,y:599.7,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.3,y:470.1,rotation:11.1964,regY:335.1,regX:135.2}}]},1).to({state:[{t:this.ikNode_8,p:{x:496.65,y:415.1,rotation:3.4352,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.8,y:426.4,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:680,regY:43.9,rotation:82.1953,y:618.95,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-2.0292,x:585.8,y:599.7,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.4,y:470.1,rotation:10.4155,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:499.25,y:408.75,rotation:5.7268,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.8,y:426.5,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.85,regY:43.9,rotation:82.2473,y:619,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.9767,x:585.7,y:599.65,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.45,y:470.2,rotation:9.6339,regY:335.2,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:502.2,y:402.45,rotation:8.0197,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.8,y:426.6,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.75,regY:43.9,rotation:82.2985,y:619.1,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.9242,x:585.55,y:599.65,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.4,y:470.05,rotation:8.8524,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:505.45,y:396.4,rotation:10.3104,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.85,y:426.7,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.7,regY:43.9,rotation:82.3514,y:619.05,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.8726,x:585.45,y:599.6,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.35,y:470.1,rotation:8.0715,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:508.85,y:390.55,rotation:12.6028,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.85,y:426.8,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.6,regY:43.9,rotation:82.4035,y:619.05,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.82,x:585.4,y:599.5,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.35,y:470.05,rotation:7.2896,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:512.35,y:385.15,rotation:14.895,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.85,y:426.9,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.45,regY:43.9,rotation:82.4556,y:619.1,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7684,x:585.35,y:599.5,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.35,y:470.1,rotation:6.5089,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:515.95,y:380.1,rotation:17.1874,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.85,y:427,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.4,regY:43.9,rotation:82.5068,y:619.05,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7159,x:585.25,y:599.45,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.25,y:470.1,rotation:5.727,regY:335.1,regX:135.2}}]},1).to({state:[{t:this.ikNode_8,p:{x:508.15,y:391.75,rotation:7.5174,regX:123.4,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.85,y:427,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.35,regY:43.9,rotation:82.5068,y:619.05,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7159,x:585.2,y:599.45,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.3,y:470.1,rotation:7.5894,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:500.4,y:406.2,rotation:-2.1464,regX:123.4,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.85,y:426.95,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.35,regY:43.9,rotation:82.5068,y:619.05,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7159,x:585.25,y:599.45,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.3,y:470.05,rotation:9.4521,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:493.55,y:423.6,rotation:-11.8162,regX:123.4,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.85,y:426.9,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.4,regY:43.9,rotation:82.5068,y:619,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7159,x:585.3,y:599.5,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.3,y:470.1,rotation:11.3142,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:488.65,y:442.85,rotation:-21.4849,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.8,y:426.8,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.45,regY:43.9,rotation:82.5068,y:619,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7159,x:585.35,y:599.5,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.3,y:470.15,rotation:13.1758,regY:335.2,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:486.4,y:462.65,rotation:-31.153,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.8,y:426.75,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.45,regY:43.9,rotation:82.5068,y:618.95,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7159,x:585.4,y:599.55,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.25,y:470.1,rotation:15.0382,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:486.55,y:481.3,rotation:-40.8231,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.75,y:426.65,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.5,regY:43.9,rotation:82.5068,y:618.95,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7159,x:585.45,y:599.55,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.15,y:470.05,rotation:16.9006,regY:335.1,regX:135.2}}]},1).to({state:[{t:this.ikNode_8,p:{x:488.8,y:497.7,rotation:-50.4919,regX:123.4,regY:166.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.75,y:426.65,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.5,regY:43.9,rotation:82.5068,y:618.95,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7159,x:585.45,y:599.55,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.25,y:470,rotation:18.763,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:491.85,y:511.15,rotation:-60.1614,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.75,y:426.65,rotation:9.1659,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.45,regY:43.9,rotation:82.5068,y:618.95,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7159,x:585.45,y:599.55,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.15,y:470.2,rotation:20.6249,regY:335.2,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:488.45,y:496.55,rotation:-50.1131,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.7,y:426.6,rotation:9.1578,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.5,regY:43.9,rotation:82.46,y:619,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7553,x:585.55,y:599.55,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.25,y:470.05,rotation:19.0033,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:486.4,y:479.65,rotation:-40.0657,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.7,y:426.6,rotation:9.1499,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.5,regY:43.9,rotation:82.4114,y:618.95,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.7938,x:585.5,y:599.6,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.2,y:470.05,rotation:17.3811,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:486.3,y:461.15,rotation:-30.0165,regX:123.4,regY:166.7,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{regX:78.2,x:808.7,y:426.5,rotation:9.1427,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.55,regY:43.9,rotation:82.3638,y:618.95,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.8331,x:585.55,y:599.6,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.2,y:470.1,rotation:15.7594,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:488.6,y:442.2,rotation:-19.9682,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.6,y:426.5,rotation:9.1348,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.5,regY:43.9,rotation:82.3154,y:618.9,regX:109.4,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_2,p:{rotation:-1.8717,x:585.55,y:599.65,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.2,y:470.1,rotation:14.1372,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:493.1,y:424.25,rotation:-9.9205,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.65,y:426.45,rotation:9.1269,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.5,regY:43.9,rotation:82.2667,y:618.9,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.911,x:585.6,y:599.65,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.15,y:470.15,rotation:12.5147,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:499.25,y:408.35,rotation:0.1216,regX:123.4,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.6,y:426.45,rotation:9.1197,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.5,regY:43.9,rotation:82.2191,y:618.85,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.9496,x:585.65,y:599.65,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.15,y:470.1,rotation:10.8935,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:506.1,y:395.05,rotation:10.1692,regX:123.5,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.5,y:426.35,rotation:9.1118,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.5,regY:43.9,rotation:82.1714,y:618.9,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.9889,x:585.7,y:599.7,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.2,y:470.2,rotation:9.2721,regY:335.1,regX:135.3}}]},1).to({state:[{t:this.ikNode_8,p:{x:506.1,y:395.05,rotation:10.1692,regX:123.5,regY:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_6,p:{regX:78.2,x:808.5,y:426.35,rotation:9.1118,regY:37.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_4,p:{x:679.5,regY:43.9,rotation:82.1714,y:618.9,regX:109.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{rotation:-1.9889,x:585.7,y:599.7,regY:63.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{x:637.2,y:470.2,rotation:9.2721,regY:335.1,regX:135.3}}]},1).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,0,2.2695,2.4573);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1119.8,360);
// library properties:
lib.properties = {
	id: '78CCD59A32958941A91115C9F9FC6272',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Задание6_гном_atlas_1.png", id:"Задание6_гном_atlas_1"}
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
an.compositions['78CCD59A32958941A91115C9F9FC6272'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;