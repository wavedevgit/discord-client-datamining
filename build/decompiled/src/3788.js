// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var3 = {};
    var0 = {
        'name': 'PinwheelIn',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var4 = {};
    var5 = 0;
    var8 = new Array(1);
    var9 = {
        'rotate': '5rad',
        'scale': 0
    };
    var8[0] = var9;
    var4.transform = var8;
    var4.opacity = var5;
    var1[0] = var4;
    var4 = {};
    var8 = 1;
    var9 = new Array(1);
    var10 = {
        'rotate': '0deg',
        'scale': 1
    };
    var9[0] = var10;
    var4.transform = var9;
    var4.opacity = var8;
    var1[100] = var4;
    var0.style = var1;
    var3.PinwheelIn = var0;
    var0 = {
        'name': 'PinwheelOut',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var4 = {};
    var9 = new Array(1);
    var10 = {
        'rotate': '0rad',
        'scale': 1
    };
    var9[0] = var10;
    var4.transform = var9;
    var4.opacity = var8;
    var1[0] = var4;
    var4 = {};
    var8 = new Array(1);
    var9 = {
        'rotate': '5rad',
        'scale': 0
    };
    var8[0] = var9;
    var4.transform = var8;
    var4.opacity = var5;
    var1[100] = var4;
    var0.style = var1;
    var3.PinwheelOut = var0;
    var1 = {};
    var4 = {};
    var8 = var7[var5];
    var0 = undefined;
    var10 = var6.bind(var0)(var8);
    var9 = var10.convertAnimationObjectToKeyframes;
    var8 = var3.PinwheelIn;
    var8 = var9.bind(var10)(var8);
    var4.style = var8;
    var8 = var3.PinwheelIn;
    var8 = var8.duration;
    var4.duration = var8;
    var1.PinwheelIn = var4;
    var4 = {};
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.convertAnimationObjectToKeyframes;
    var5 = var3.PinwheelOut;
    var5 = var6.bind(var7)(var5);
    var4.style = var5;
    var5 = var3.PinwheelOut;
    var5 = var5.duration;
    var4.duration = var5;
    var1.PinwheelOut = var4;
    var2.PinwheelData = var3;
    var2.Pinwheel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3780]);