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
        'name': 'LightSpeedInRight',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var4 = new Array(1);
    var6 = {
        'translateX': '100vw',
        'skewX': '-45deg'
    };
    var4[0] = var6;
    var3.transform = var4;
    var7 = 0;
    var3.opacity = var7;
    var1[0] = var3;
    var3 = {};
    var6 = {};
    var4 = '10deg';
    var6.skewX = var4;
    var4 = new Array(1);
    var4[0] = var6;
    var3.transform = var4;
    var1[70] = var3;
    var3 = {};
    var6 = {};
    var4 = '-5deg';
    var6.skewX = var4;
    var4 = new Array(1);
    var4[0] = var6;
    var3.transform = var4;
    var1[85] = var3;
    var3 = {};
    var10 = {};
    var4 = '0deg';
    var10.skewX = var4;
    var6 = new Array(1);
    var6[0] = var10;
    var3.transform = var6;
    var1[100] = var3;
    var0.style = var1;
    var5.LightSpeedInRight = var0;
    var0 = {
        'name': 'LightSpeedInLeft',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var6 = new Array(1);
    var10 = {
        'translateX': '-100vw',
        'skewX': '45deg'
    };
    var6[0] = var10;
    var3.transform = var6;
    var3.opacity = var7;
    var1[0] = var3;
    var3 = {};
    var10 = {};
    var6 = '-10deg';
    var10.skewX = var6;
    var6 = new Array(1);
    var6[0] = var10;
    var3.transform = var6;
    var1[70] = var3;
    var3 = {};
    var10 = {};
    var6 = '5deg';
    var10.skewX = var6;
    var6 = new Array(1);
    var6[0] = var10;
    var3.transform = var6;
    var1[85] = var3;
    var3 = {};
    var6 = {};
    var6.skewX = var4;
    var4 = new Array(1);
    var4[0] = var6;
    var3.transform = var4;
    var1[100] = var3;
    var0.style = var1;
    var5.LightSpeedInLeft = var0;
    var4 = {};
    var0 = {
        'name': 'LightSpeedOutRight',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var6 = new Array(1);
    var10 = {
        'translateX': '0vw',
        'skewX': '0deg'
    };
    var6[0] = var10;
    var3.transform = var6;
    var6 = 1;
    var3.opacity = var6;
    var1[0] = var3;
    var3 = {};
    var10 = new Array(1);
    var11 = {
        'translateX': '100vw',
        'skewX': '-45deg'
    };
    var10[0] = var11;
    var3.transform = var10;
    var3.opacity = var7;
    var1[100] = var3;
    var0.style = var1;
    var4.LightSpeedOutRight = var0;
    var0 = {
        'name': 'LightSpeedOutLeft',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var10 = new Array(1);
    var11 = {
        'translateX': '0vw',
        'skew': '0deg'
    };
    var10[0] = var11;
    var3.transform = var10;
    var3.opacity = var6;
    var1[0] = var3;
    var3 = {};
    var6 = new Array(1);
    var10 = {
        'translateX': '-100vw',
        'skew': '45deg'
    };
    var6[0] = var10;
    var3.transform = var6;
    var3.opacity = var7;
    var1[100] = var3;
    var0.style = var1;
    var4.LightSpeedOutLeft = var0;
    var3 = {};
    var1 = {};
    var6 = var9[var7];
    var0 = undefined;
    var11 = var8.bind(var0)(var6);
    var10 = var11.convertAnimationObjectToKeyframes;
    var6 = var5.LightSpeedInRight;
    var6 = var10.bind(var11)(var6);
    var1.style = var6;
    var6 = var5.LightSpeedInRight;
    var6 = var6.duration;
    var1.duration = var6;
    var3.LightSpeedInRight = var1;
    var1 = {};
    var6 = var9[var7];
    var11 = var8.bind(var0)(var6);
    var10 = var11.convertAnimationObjectToKeyframes;
    var6 = var5.LightSpeedInLeft;
    var6 = var10.bind(var11)(var6);
    var1.style = var6;
    var6 = var5.LightSpeedInLeft;
    var6 = var6.duration;
    var1.duration = var6;
    var3.LightSpeedInLeft = var1;
    var1 = {};
    var6 = {};
    var10 = var9[var7];
    var12 = var8.bind(var0)(var10);
    var11 = var12.convertAnimationObjectToKeyframes;
    var10 = var4.LightSpeedOutRight;
    var10 = var11.bind(var12)(var10);
    var6.style = var10;
    var10 = var4.LightSpeedOutRight;
    var10 = var10.duration;
    var6.duration = var10;
    var1.LightSpeedOutRight = var6;
    var6 = {};
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.convertAnimationObjectToKeyframes;
    var7 = var4.LightSpeedOutLeft;
    var7 = var8.bind(var9)(var7);
    var6.style = var7;
    var7 = var4.LightSpeedOutLeft;
    var7 = var7.duration;
    var6.duration = var7;
    var1.LightSpeedOutLeft = var6;
    var2.LightSpeedInData = var5;
    var2.LightSpeedOutData = var4;
    var2.LightSpeedIn = var3;
    var2.LightSpeedOut = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3736]);