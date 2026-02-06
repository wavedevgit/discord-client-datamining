// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var5 = {};
    var0 = {
        'name': 'RollInLeft',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var4 = new Array(1);
    var6 = {
        'translateX': '-100vw',
        'rotate': '-180deg'
    };
    var4[0] = var6;
    var3.transform = var4;
    var1[0] = var3;
    var3 = {};
    var4 = new Array(1);
    var6 = {
        'translateX': '0vw',
        'rotate': '0deg'
    };
    var4[0] = var6;
    var3.transform = var4;
    var1[100] = var3;
    var0.style = var1;
    var5.RollInLeft = var0;
    var0 = {
        'name': 'RollInRight',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var4 = new Array(1);
    var6 = {
        'translateX': '100vw',
        'rotate': '180deg'
    };
    var4[0] = var6;
    var3.transform = var4;
    var1[0] = var3;
    var3 = {};
    var4 = new Array(1);
    var6 = {
        'translateX': '0vw',
        'rotate': '0deg'
    };
    var4[0] = var6;
    var3.transform = var4;
    var1[100] = var3;
    var0.style = var1;
    var5.RollInRight = var0;
    var4 = {};
    var0 = {
        'name': 'RollOutLeft',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var6 = new Array(1);
    var7 = {
        'translateX': '0vw',
        'rotate': '0deg'
    };
    var6[0] = var7;
    var3.transform = var6;
    var1[0] = var3;
    var3 = {};
    var6 = new Array(1);
    var7 = {
        'translateX': '-100vw',
        'rotate': '-180deg'
    };
    var6[0] = var7;
    var3.transform = var6;
    var1[100] = var3;
    var0.style = var1;
    var4.RollOutLeft = var0;
    var0 = {
        'name': 'RollOutRight',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var6 = new Array(1);
    var7 = {
        'translateX': '0vw',
        'rotate': '0deg'
    };
    var6[0] = var7;
    var3.transform = var6;
    var1[0] = var3;
    var3 = {};
    var6 = new Array(1);
    var7 = {
        'translateX': '100vw',
        'rotate': '180deg'
    };
    var6[0] = var7;
    var3.transform = var6;
    var1[100] = var3;
    var0.style = var1;
    var4.RollOutRight = var0;
    var3 = {};
    var1 = {};
    var7 = 0;
    var6 = var9[var7];
    var0 = undefined;
    var11 = var8.bind(var0)(var6);
    var10 = var11.convertAnimationObjectToKeyframes;
    var6 = var5.RollInLeft;
    var6 = var10.bind(var11)(var6);
    var1.style = var6;
    var6 = var5.RollInLeft;
    var6 = var6.duration;
    var1.duration = var6;
    var3.RollInLeft = var1;
    var1 = {};
    var6 = var9[var7];
    var11 = var8.bind(var0)(var6);
    var10 = var11.convertAnimationObjectToKeyframes;
    var6 = var5.RollInRight;
    var6 = var10.bind(var11)(var6);
    var1.style = var6;
    var6 = var5.RollInRight;
    var6 = var6.duration;
    var1.duration = var6;
    var3.RollInRight = var1;
    var1 = {};
    var6 = {};
    var10 = var9[var7];
    var12 = var8.bind(var0)(var10);
    var11 = var12.convertAnimationObjectToKeyframes;
    var10 = var4.RollOutLeft;
    var10 = var11.bind(var12)(var10);
    var6.style = var10;
    var10 = var4.RollOutLeft;
    var10 = var10.duration;
    var6.duration = var10;
    var1.RollOutLeft = var6;
    var6 = {};
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.convertAnimationObjectToKeyframes;
    var7 = var4.RollOutRight;
    var7 = var8.bind(var9)(var7);
    var6.style = var7;
    var7 = var4.RollOutRight;
    var7 = var7.duration;
    var6.duration = var7;
    var1.RollOutRight = var6;
    var2.RollInData = var5;
    var2.RollOutData = var4;
    var2.RollIn = var3;
    var2.RollOut = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3781]);