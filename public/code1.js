gdjs._36938_25138_36215_22987_30059_38754Code = {};
gdjs._36938_25138_36215_22987_30059_38754Code.localVariables = [];
gdjs._36938_25138_36215_22987_30059_38754Code.idToCallbackMap = new Map();
gdjs._36938_25138_36215_22987_30059_38754Code.GDNewSpriteObjects1= [];
gdjs._36938_25138_36215_22987_30059_38754Code.GDNewSpriteObjects2= [];
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects1= [];
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects2= [];
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects1= [];
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects2= [];


gdjs._36938_25138_36215_22987_30059_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("開始"), gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects1.length;i<l;++i) {
    if ( gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects1[k] = gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects1[i];
        ++k;
    }
}
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("結束"), gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects1.length;i<l;++i) {
    if ( gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects1[k] = gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects1[i];
        ++k;
    }
}
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects1.length = k;
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
{gdjs.evtTools.sound.playSound(runtimeScene, "music.mp3", true, 50, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", null);
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "javascript:history.back()", null);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._36938_25138_36215_22987_30059_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._36938_25138_36215_22987_30059_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._36938_25138_36215_22987_30059_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects1.length = 0;
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects2.length = 0;
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects1.length = 0;
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects2.length = 0;

gdjs._36938_25138_36215_22987_30059_38754Code.eventsList0(runtimeScene);
gdjs._36938_25138_36215_22987_30059_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._36938_25138_36215_22987_30059_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects1.length = 0;
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9538283_9522987Objects2.length = 0;
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects1.length = 0;
gdjs._36938_25138_36215_22987_30059_38754Code.GD_9532080_9526463Objects2.length = 0;


return;

}

gdjs['_36938_25138_36215_22987_30059_38754Code'] = gdjs._36938_25138_36215_22987_30059_38754Code;
