gdjs._32080_26463Code = {};
gdjs._32080_26463Code.localVariables = [];
gdjs._32080_26463Code.idToCallbackMap = new Map();
gdjs._32080_26463Code.GDNewSpriteObjects1= [];
gdjs._32080_26463Code.GDNewSpriteObjects2= [];
gdjs._32080_26463Code.GD_9520998_95259762Objects1= [];
gdjs._32080_26463Code.GD_9520998_95259762Objects2= [];
gdjs._32080_26463Code.GD_9526178_95382912Objects1= [];
gdjs._32080_26463Code.GD_9526178_95382912Objects2= [];
gdjs._32080_26463Code.GD_9532972_9526223Objects1= [];
gdjs._32080_26463Code.GD_9532972_9526223Objects2= [];
gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1= [];
gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects2= [];
gdjs._32080_26463Code.GD_9536820_9522238Objects1= [];
gdjs._32080_26463Code.GD_9536820_9522238Objects2= [];


gdjs._32080_26463Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("結束按鈕"), gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1.length;i<l;++i) {
    if ( gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1[k] = gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1[i];
        ++k;
    }
}
gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "javascript:history.back()", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("分數2"), gdjs._32080_26463Code.GD_9520998_95259762Objects1);
gdjs.copyArray(runtimeScene.getObjects("時間2"), gdjs._32080_26463Code.GD_9526178_95382912Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "music.mp3", true, 50, 1);
}
{for(var i = 0, len = gdjs._32080_26463Code.GD_9526178_95382912Objects1.length ;i < len;++i) {
    gdjs._32080_26463Code.GD_9526178_95382912Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 60)) + ":" + gdjs.evtTools.common.toString(gdjs.evtTools.common.mod(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))), 60)));
}
}
{for(var i = 0, len = gdjs._32080_26463Code.GD_9520998_95259762Objects1.length ;i < len;++i) {
    gdjs._32080_26463Code.GD_9520998_95259762Objects1[i].getBehavior("Text").setText("分數：" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("返回"), gdjs._32080_26463Code.GD_9536820_9522238Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._32080_26463Code.GD_9536820_9522238Objects1.length;i<l;++i) {
    if ( gdjs._32080_26463Code.GD_9536820_9522238Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._32080_26463Code.GD_9536820_9522238Objects1[k] = gdjs._32080_26463Code.GD_9536820_9522238Objects1[i];
        ++k;
    }
}
gdjs._32080_26463Code.GD_9536820_9522238Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "遊戲起始畫面", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("返回"), gdjs._32080_26463Code.GD_9536820_9522238Objects1);
{for(var i = 0, len = gdjs._32080_26463Code.GD_9536820_9522238Objects1.length ;i < len;++i) {
    gdjs._32080_26463Code.GD_9536820_9522238Objects1[i].activateBehavior("ButtonFSM", true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("結束按鈕"), gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1);
{for(var i = 0, len = gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1.length ;i < len;++i) {
    gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1[i].activateBehavior("ButtonFSM", true);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._32080_26463Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._32080_26463Code.GDNewSpriteObjects1.length = 0;
gdjs._32080_26463Code.GDNewSpriteObjects2.length = 0;
gdjs._32080_26463Code.GD_9520998_95259762Objects1.length = 0;
gdjs._32080_26463Code.GD_9520998_95259762Objects2.length = 0;
gdjs._32080_26463Code.GD_9526178_95382912Objects1.length = 0;
gdjs._32080_26463Code.GD_9526178_95382912Objects2.length = 0;
gdjs._32080_26463Code.GD_9532972_9526223Objects1.length = 0;
gdjs._32080_26463Code.GD_9532972_9526223Objects2.length = 0;
gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1.length = 0;
gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects2.length = 0;
gdjs._32080_26463Code.GD_9536820_9522238Objects1.length = 0;
gdjs._32080_26463Code.GD_9536820_9522238Objects2.length = 0;

gdjs._32080_26463Code.eventsList0(runtimeScene);
gdjs._32080_26463Code.GDNewSpriteObjects1.length = 0;
gdjs._32080_26463Code.GDNewSpriteObjects2.length = 0;
gdjs._32080_26463Code.GD_9520998_95259762Objects1.length = 0;
gdjs._32080_26463Code.GD_9520998_95259762Objects2.length = 0;
gdjs._32080_26463Code.GD_9526178_95382912Objects1.length = 0;
gdjs._32080_26463Code.GD_9526178_95382912Objects2.length = 0;
gdjs._32080_26463Code.GD_9532972_9526223Objects1.length = 0;
gdjs._32080_26463Code.GD_9532972_9526223Objects2.length = 0;
gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects1.length = 0;
gdjs._32080_26463Code.GD_9532080_9526463_9525353_9537397Objects2.length = 0;
gdjs._32080_26463Code.GD_9536820_9522238Objects1.length = 0;
gdjs._32080_26463Code.GD_9536820_9522238Objects2.length = 0;


return;

}

gdjs['_32080_26463Code'] = gdjs._32080_26463Code;
