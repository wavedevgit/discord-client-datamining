// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var2, var1, var3);
    var3 = {};
    var7 = 'LottieAnimationView';
    var3.uiViewClassName = var7;
    var1 = {};
    var8 = {};
    var9 = {
        'captured': 'onAnimationFinishCapture',
        'bubbled': 'onAnimationFinish'
    };
    var8.phasedRegistrationNames = var9;
    var1.topAnimationFinish = var8;
    var8 = {};
    var9 = {
        'captured': 'onAnimationFailureCapture',
        'bubbled': 'onAnimationFailure'
    };
    var8.phasedRegistrationNames = var9;
    var1.topAnimationFailure = var8;
    var8 = {};
    var9 = {
        'captured': 'onAnimationLoadedCapture',
        'bubbled': 'onAnimationLoaded'
    };
    var8.phasedRegistrationNames = var9;
    var1.topAnimationLoaded = var8;
    var3.bubblingEventTypes = var1;
    var10 = var0.Object;
    var9 = var10.assign;
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var11 = var4.bind(var0)(var1);
    var8 = var11.ConditionallyIgnoredEventHandlers;
    var1 = {
        'onAnimationFinish': true,
        'onAnimationFailure': true,
        'onAnimationLoaded': true
    };
    var8 = var8.bind(var11)(var1);
    var1 = {
        'resizeMode': true,
        'renderMode': true,
        'sourceName': true,
        'sourceJson': true,
        'sourceURL': true,
        'sourceDotLottieURI': true,
        'imageAssetsFolder': true,
        'progress': true,
        'speed': true,
        'loop': true,
        'autoPlay': true,
        'enableMergePathsAndroidForKitKatAndAbove': true,
        'hardwareAccelerationAndroid': true,
        'cacheComposition': true,
        'colorFilters': true,
        'dummy': true,
        'textFiltersAndroid': true,
        'textFiltersIOS': true
    };
    var1 = var9.bind(var10)(var1, var8);
    var3.validAttributes = var1;
    var _closure1_slot2 = var3;
    var1 = 1;
    var1 = var6[var1];
    var6 = var4.bind(var0)(var1);
    var4 = var6.get;
    var1 = function() { // Environment: var5
        var0 = _closure1_slot2;
        return var0;
    };
    var4 = var4.bind(var6)(var7, var1);
    var1 = {};
    var6 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = new Array(2);
        var1 = arg1;
        var3[0] = var1;
        var1 = arg2;
        var3[1] = var1;
        var2 = arg0;
        var1 = 'play';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.play = var6;
    var6 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'reset';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.reset = var6;
    var6 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'pause';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.pause = var6;
    var5 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'resume';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.resume = var5;
    var2.default = var4;
    var2.__INTERNAL_VIEW_CONFIG = var3;
    var2.Commands = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [110, 42, 117]);