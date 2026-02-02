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
        'name': 'StretchInX',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var6 = {};
    var7 = 0;
    var6.scaleX = var7;
    var4 = new Array(1);
    var4[0] = var6;
    var3.transform = var4;
    var1[0] = var3;
    var3 = {};
    var10 = {};
    var6 = 1;
    var10.scaleX = var6;
    var4 = new Array(1);
    var4[0] = var10;
    var3.transform = var4;
    var1[100] = var3;
    var0.style = var1;
    var5.StretchInX = var0;
    var0 = {
        'name': 'StretchInY',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var10 = {};
    var10.scaleY = var7;
    var4 = new Array(1);
    var4[0] = var10;
    var3.transform = var4;
    var1[0] = var3;
    var3 = {};
    var10 = {};
    var10.scaleY = var6;
    var4 = new Array(1);
    var4[0] = var10;
    var3.transform = var4;
    var1[100] = var3;
    var0.style = var1;
    var5.StretchInY = var0;
    var4 = {};
    var0 = {
        'name': 'StretchOutX',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var11 = {};
    var11.scaleX = var6;
    var10 = new Array(1);
    var10[0] = var11;
    var3.transform = var10;
    var1[0] = var3;
    var3 = {};
    var11 = {};
    var11.scaleX = var7;
    var10 = new Array(1);
    var10[0] = var11;
    var3.transform = var10;
    var1[100] = var3;
    var0.style = var1;
    var4.StretchOutX = var0;
    var0 = {
        'name': 'StretchOutY',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var10 = {};
    var10.scaleY = var6;
    var6 = new Array(1);
    var6[0] = var10;
    var3.transform = var6;
    var1[0] = var3;
    var3 = {};
    var10 = {};
    var10.scaleY = var7;
    var6 = new Array(1);
    var6[0] = var10;
    var3.transform = var6;
    var1[100] = var3;
    var0.style = var1;
    var4.StretchOutY = var0;
    var3 = {};
    var1 = {};
    var6 = var9[var7];
    var0 = undefined;
    var11 = var8.bind(var0)(var6);
    var10 = var11.convertAnimationObjectToKeyframes;
    var6 = var5.StretchInX;
    var6 = var10.bind(var11)(var6);
    var1.style = var6;
    var6 = var5.StretchInX;
    var6 = var6.duration;
    var1.duration = var6;
    var3.StretchInX = var1;
    var1 = {};
    var6 = var9[var7];
    var11 = var8.bind(var0)(var6);
    var10 = var11.convertAnimationObjectToKeyframes;
    var6 = var5.StretchInY;
    var6 = var10.bind(var11)(var6);
    var1.style = var6;
    var6 = var5.StretchInY;
    var6 = var6.duration;
    var1.duration = var6;
    var3.StretchInY = var1;
    var1 = {};
    var6 = {};
    var10 = var9[var7];
    var12 = var8.bind(var0)(var10);
    var11 = var12.convertAnimationObjectToKeyframes;
    var10 = var4.StretchOutX;
    var10 = var11.bind(var12)(var10);
    var6.style = var10;
    var10 = var4.StretchOutX;
    var10 = var10.duration;
    var6.duration = var10;
    var1.StretchOutX = var6;
    var6 = {};
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.convertAnimationObjectToKeyframes;
    var7 = var4.StretchOutY;
    var7 = var8.bind(var9)(var7);
    var6.style = var7;
    var7 = var4.StretchOutY;
    var7 = var7.duration;
    var6.duration = var7;
    var1.StretchOutY = var6;
    var2.StretchInData = var5;
    var2.StretchOutData = var4;
    var2.StretchIn = var3;
    var2.StretchOut = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3740]);