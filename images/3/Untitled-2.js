(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Untitled_2_atlas_1", frames: [[0,0,564,560],[566,0,564,560],[1132,0,564,560],[0,562,564,560],[566,562,564,560]]}
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



(lib.колесо = function() {
	this.initialize(ss["Untitled_2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.рожки = function() {
	this.initialize(ss["Untitled_2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.трактор = function() {
	this.initialize(ss["Untitled_2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5000,2235);


(lib.db227b12969301fc6a0b37d2349b93eapngcopy = function() {
	this.initialize(ss["Untitled_2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.хвост = function() {
	this.initialize(ss["Untitled_2_atlas_1"]);
	this.gotoAndStop(4);
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


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.колесо();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,564,560), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.хвост();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,564,560), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.рожки();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,564,560), null);


(lib.хвост_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(347.65,280,1,1,0,0,0,282,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-1.2834,x:347.6},0).wait(1).to({rotation:-2.5668,y:279.95},0).wait(1).to({rotation:-3.8502},0).wait(1).to({rotation:-5.1337,y:280},0).wait(1).to({rotation:-6.4171,x:347.65},0).wait(1).to({rotation:-7.7005,x:347.6,y:279.95},0).wait(1).to({rotation:-8.9839},0).wait(1).to({rotation:-7.3272,y:280},0).wait(1).to({rotation:-5.6705},0).wait(1).to({rotation:-4.0138,y:279.95},0).wait(1).to({rotation:-2.3571},0).wait(1).to({rotation:-0.7003,y:280},0).wait(1).to({rotation:0.9564,x:347.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.4,-40.6,644.5,641.2);


(lib.рог = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1();
	this.instance.setTransform(175.7,297.2,1,1,0,0,0,282,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.7202,y:297.15},0).wait(1).to({rotation:1.4404},0).wait(1).to({rotation:2.1607,x:175.75,y:297.2},0).wait(1).to({rotation:2.8809,y:297.15},0).wait(1).to({rotation:3.6011,x:175.7},0).wait(1).to({rotation:4.3213,y:297.2},0).wait(1).to({rotation:5.0415,y:297.25},0).wait(1).to({rotation:5.7618},0).wait(1).to({rotation:6.482,x:175.75},0).wait(1).to({rotation:5.3185},0).wait(1).to({rotation:4.1551,x:175.7},0).wait(1).to({rotation:2.9917,y:297.15},0).wait(1).to({rotation:1.8282},0).wait(1).to({rotation:0.6648,x:175.75},0).wait(1).to({rotation:-0.4986,y:297.2},0).wait(1).to({rotation:-1.6621,x:175.7,y:297.15},0).wait(1).to({rotation:-2.8255},0).wait(1).to({rotation:-3.9889},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-12.8,623.6,620.0999999999999);


(lib.колесо_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol4();
	this.instance.setTransform(282,280,1,1,0,0,0,282,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9853,scaleY:0.9812},0).wait(1).to({scaleX:0.9705,scaleY:0.9625},0).wait(1).to({scaleX:0.9558,scaleY:0.9437},0).wait(1).to({scaleX:0.941,scaleY:0.925,x:281.95},0).wait(1).to({scaleX:0.9263,scaleY:0.9062},0).wait(1).to({scaleX:0.9115,scaleY:0.8875},0).wait(1).to({scaleX:0.8968,scaleY:0.8687,x:282},0).wait(1).to({scaleX:0.8821,scaleY:0.889},0).wait(1).to({scaleX:0.8673,scaleY:0.9093,y:279.95},0).wait(1).to({scaleX:0.8526,scaleY:0.9296,x:281.95,y:280},0).wait(1).to({scaleX:0.8378,scaleY:0.9499},0).wait(1).to({scaleX:0.8231,scaleY:0.9702,y:279.95},0).wait(1).to({scaleX:0.8084,scaleY:0.9905,y:280},0).wait(1).to({scaleX:0.7936,scaleY:1.0108,x:282,y:280.05},0).wait(1).to({scaleX:0.8343},0).wait(1).to({scaleX:0.8751,x:281.95},0).wait(1).to({scaleX:0.9158},0).wait(1).to({scaleX:0.9565,x:282},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,564,566.1);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.колесо_1();
	this.instance.setTransform(418.25,289.5,0.7936,0.7936,0,0,0,282,280);

	this.instance_1 = new lib.колесо_1();
	this.instance_1.setTransform(282,280,1,1,0,0,0,282,280);

	this.instance_2 = new lib.трактор();
	this.instance_2.setTransform(489.95,39.3,0.5018,0.5625,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,642.1,560), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.db227b12969301fc6a0b37d2349b93eapngcopy();
	this.instance.setTransform(417.75,0.7,0.6682,0.6859,0,0,180);

	this.instance_1 = new lib.хвост_1();
	this.instance_1.setTransform(270.95,192.2,0.6682,0.6859,0,0,180,282.1,280.2);

	this.instance_2 = new lib.рог();
	this.instance_2.setTransform(180.25,197.25,0.6393,0.6859,0,0,0,175.7,297.4);

	this.instance_3 = new lib.рог();
	this.instance_3.setTransform(224.05,197.25,0.6682,0.6859,0,0,180,175.8,297.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,417.8,389.1), null);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_2
	this.instance = new lib.Symbol5();
	this.instance.setTransform(114.1,212.7,1,1,0,0,0,321,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.248,x:135.45,y:212.75},0).wait(1).to({rotation:2.496,x:156.8},0).wait(1).to({rotation:3.744,x:178.1,y:212.7},0).wait(1).to({rotation:4.992,x:199.5,y:212.75},0).wait(1).to({rotation:6.24,x:220.8},0).wait(1).to({rotation:7.488,x:242.1},0).wait(1).to({rotation:8.6708,x:266.15,y:218.9},0).wait(1).to({rotation:9.8535,x:290.1,y:225.05},0).wait(1).to({rotation:11.0363,x:314.1,y:231.15},0).wait(1).to({rotation:12.219,x:338.15,y:237.35},0).wait(1).to({rotation:13.4018,x:362.1,y:243.5},0).wait(1).to({rotation:14.5846,x:386.1,y:249.7},0).wait(1).to({rotation:15.7673,x:410.1,y:255.8},0).wait(1).to({rotation:16.9501,x:434.1,y:262},0).wait(1).to({rotation:17.5091,x:452.55,y:266.85},0).wait(1).to({rotation:18.0681,x:471.05,y:271.8},0).wait(1).to({rotation:18.6271,x:489.5,y:276.8},0).wait(1).to({rotation:19.1861,x:508,y:281.7},0).wait(1).to({rotation:19.7451,x:526.4,y:286.6},0).wait(1).to({rotation:20.3042,x:544.9,y:291.55},0).wait(1).to({rotation:20.8632,x:563.4,y:296.45},0).wait(1).to({rotation:21.4222,x:581.85,y:301.4},0).wait(1).to({rotation:21.9812,x:600.3,y:306.3},0).wait(1).to({rotation:22.5402,x:618.8,y:311.2},0).wait(1).to({rotation:23.0992,x:633.75,y:316.75},0).wait(1).to({rotation:23.6582,x:648.75,y:322.2},0).wait(1).to({rotation:24.2172,x:663.75,y:327.65},0).wait(1).to({rotation:24.7762,x:678.75,y:333.15},0).wait(1).to({rotation:25.3352,x:693.75,y:338.65},0).wait(1).to({rotation:25.8943,x:708.7,y:344.2},0).wait(1).to({rotation:26.4533,x:723.75,y:349.7},0).wait(1).to({rotation:27.0123,x:738.8,y:355.15},0).wait(1).to({rotation:27.5713,x:753.75,y:360.6},0).wait(1).to({rotation:28.1303,x:768.75,y:366.1},0).wait(1).to({rotation:28.6893,x:783.75,y:371.6},0).wait(1).to({rotation:28.9479,x:793.2,y:375.85},0).wait(1).to({rotation:29.2066,x:802.65,y:380.1},0).wait(1).to({rotation:29.4652,x:812.05,y:384.35},0).wait(1).to({rotation:29.7238,x:821.45,y:388.55},0).wait(1).to({rotation:29.9824,x:830.95,y:392.85},0).wait(1).to({rotation:30.2411,x:840.35,y:397.05},0).wait(1).to({rotation:30.4997,x:849.8,y:401.3},0).wait(1).to({rotation:30.7583,x:859.25,y:405.5},0).wait(1).to({rotation:31.0169,x:868.65,y:409.75},0).wait(1).to({rotation:31.2756,x:878.1,y:414},0).wait(1).to({rotation:31.5342,x:887.55,y:418.25},0).wait(1).to({rotation:31.7928,x:897,y:422.45},0).wait(1).to({rotation:32.0514,x:909.9,y:430.05},0).wait(1).to({rotation:32.3101,x:922.95,y:437.65},0).wait(1).to({rotation:32.5687,x:935.9,y:445.3},0).wait(1).to({rotation:32.8273,x:948.9,y:452.9},0).wait(1).to({rotation:33.0859,x:961.85,y:460.55},0).wait(1).to({rotation:33.3446,x:974.85,y:468.15},0).wait(1).to({rotation:33.6032,x:987.8,y:475.75},0).wait(1).to({rotation:33.8618,x:1000.8,y:483.35},0).wait(1).to({rotation:34.1204,x:1013.8,y:490.95},0).wait(1).to({rotation:34.3791,x:1026.8,y:498.55},0).wait(1).to({rotation:34.6377,x:1039.7,y:506.15},0).wait(1).to({x:1057.45,y:520.95},0).wait(1).to({x:1075.2,y:535.7},0).wait(1).to({x:1092.9,y:550.5},0).wait(1).to({x:1110.65,y:565.25},0).wait(1).to({x:1128.35,y:580.05},0).wait(1));

	// MergedLayer_1_copy
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(1654.4,263.5,1,1,0,0,0,208.8,194.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:211.7,regY:192.1,x:1648,y:259.05},0).wait(1).to({x:1638.75,y:257.15},0).wait(1).to({x:1629.5,y:255.2},0).wait(1).to({x:1620.25,y:253.3},0).wait(1).to({x:1611,y:251.35},0).wait(1).to({x:1601.75,y:249.45},0).wait(1).to({x:1592.5,y:247.5},0).wait(1).to({x:1583.25,y:245.6},0).wait(1).to({x:1574,y:243.7},0).wait(1).to({x:1564.75,y:241.75},0).wait(1).to({x:1555.5,y:239.85},0).wait(1).to({x:1546.25,y:237.9},0).wait(1).to({x:1537,y:236},0).wait(1).to({x:1527.75,y:234.05},0).wait(1).to({x:1518.5,y:232.15},0).wait(1).to({x:1509.25,y:230.2},0).wait(1).to({x:1500,y:228.3},0).wait(1).to({x:1490.75,y:226.4},0).wait(1).to({x:1481.5,y:224.45},0).wait(1).to({x:1472.25,y:222.55},0).wait(1).to({x:1463,y:220.6},0).wait(1).to({x:1453.75,y:218.7},0).wait(1).to({x:1444.5,y:216.75},0).wait(1).to({x:1435.25,y:214.85},0).wait(1).to({x:1426,y:212.9},0).wait(1).to({x:1416.75,y:211},0).wait(1).to({x:1407.5,y:209.1},0).wait(1).to({x:1398.25,y:207.15},0).wait(1).to({x:1389,y:205.25},0).wait(1).to({x:1379.75,y:203.3},0).wait(1).to({x:1370.5,y:201.4},0).wait(1).to({x:1361.2,y:199.45},0).wait(1).to({x:1351.95,y:197.55},0).wait(1).to({x:1342.7,y:195.6},0).wait(1).to({x:1333.45,y:193.7},0).wait(1).to({x:1324.2,y:191.8},0).wait(1).to({x:1314.95,y:189.9},0).wait(1).to({x:1305.7,y:188},0).wait(1).to({x:1296.45,y:186.05},0).wait(1).to({x:1287.2,y:184.15},0).wait(1).to({x:1277.95,y:182.2},0).wait(1).to({x:1268.7,y:180.3},0).wait(1).to({x:1259.45,y:178.35},0).wait(1).to({x:1250.2,y:176.45},0).wait(1).to({x:1240.95,y:174.5},0).wait(1).to({x:1231.7,y:172.6},0).wait(1).to({x:1222.45,y:170.7},0).wait(1).to({x:1213.2,y:168.75},0).wait(1).to({x:1203.95,y:166.85},0).wait(1).to({x:1194.7,y:164.9},0).wait(1).to({x:1185.45,y:163},0).wait(1).to({x:1176.2,y:161.05},0).wait(1).to({x:1166.95,y:159.15},0).wait(1).to({x:1157.7,y:157.2},0).wait(1).to({x:1148.45,y:155.3},0).wait(1).to({x:1139.2,y:153.4},0).wait(1).to({x:1129.95,y:151.45},0).wait(1).to({x:1120.7,y:149.55},0).wait(1).to({x:1111.45,y:147.6},0).wait(1).to({x:1102.2,y:145.7},0).wait(1).to({x:1092.95,y:143.75},0).wait(1).to({x:1083.7,y:141.85},0).wait(1).to({x:1074.45,y:139.9},0).wait(1));

	// MergedLayer_1
	this.instance_2 = new lib.db227b12969301fc6a0b37d2349b93eapngcopy();
	this.instance_2.setTransform(-46,245);

	this.instance_3 = new lib.хвост_1();
	this.instance_3.setTransform(172.25,524.6,1,1,0,0,0,282,280);

	this.instance_4 = new lib.рог();
	this.instance_4.setTransform(308.05,531.95,0.9567,1,0,0,180,175.7,297.2);

	this.instance_5 = new lib.рог();
	this.instance_5.setTransform(242.5,531.95,1,1,0,0,0,175.7,297.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(64));

	// Layer_7
	this.instance_6 = new lib.Bitmap5();
	this.instance_6.setTransform(0,-90,0.3622,0.3622);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(698.6,253.3,1164.8000000000002,699.9000000000001);
// library properties:
lib.properties = {
	id: '11E117287AFC4749A382BDD7DF91A830',
	width: 1811,
	height: 720,
	fps: 24,
	color: "#99CCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Untitled_2_atlas_1.png", id:"Untitled_2_atlas_1"}
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
an.compositions['11E117287AFC4749A382BDD7DF91A830'] = {
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