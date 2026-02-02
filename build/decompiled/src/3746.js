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
        'name': 'SlideInRight',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var6 = {};
    var12 = '100vw';
    var6.translateX = var12;
    var4 = new Array(1);
    var4[0] = var6;
    var3.transform = var4;
    var1[0] = var3;
    var3 = {};
    var6 = {};
    var7 = '0%';
    var6.translateX = var7;
    var4 = new Array(1);
    var4[0] = var6;
    var3.transform = var4;
    var1[100] = var3;
    var0.style = var1;
    var5.SlideInRight = var0;
    var0 = {
        'name': 'SlideInLeft',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var6 = {};
    var11 = '-100vw';
    var6.translateX = var11;
    var4 = new Array(1);
    var4[0] = var6;
    var3.transform = var4;
    var1[0] = var3;
    var3 = {};
    var6 = {};
    var6.translateX = var7;
    var4 = new Array(1);
    var4[0] = var6;
    var3.transform = var4;
    var1[100] = var3;
    var0.style = var1;
    var5.SlideInLeft = var0;
    var0 = {
        'name': 'SlideInUp',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var6 = {};
    var10 = '-100vh';
    var6.translateY = var10;
    var4 = new Array(1);
    var4[0] = var6;
    var3.transform = var4;
    var1[0] = var3;
    var3 = {};
    var6 = {};
    var6.translateY = var7;
    var4 = new Array(1);
    var4[0] = var6;
    var3.transform = var4;
    var1[100] = var3;
    var0.style = var1;
    var5.SlideInUp = var0;
    var0 = {
        'name': 'SlideInDown',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var13 = {};
    var6 = '100vh';
    var13.translateY = var6;
    var4 = new Array(1);
    var4[0] = var13;
    var3.transform = var4;
    var1[0] = var3;
    var3 = {};
    var13 = {};
    var13.translateY = var7;
    var4 = new Array(1);
    var4[0] = var13;
    var3.transform = var4;
    var1[100] = var3;
    var0.style = var1;
    var5.SlideInDown = var0;
    var4 = {};
    var0 = {
        'name': 'SlideOutRight',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var14 = {};
    var14.translateX = var7;
    var13 = new Array(1);
    var13[0] = var14;
    var3.transform = var13;
    var1[0] = var3;
    var3 = {};
    var13 = {};
    var13.translateX = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var3.transform = var12;
    var1[100] = var3;
    var0.style = var1;
    var4.SlideOutRight = var0;
    var0 = {
        'name': 'SlideOutLeft',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var13 = {};
    var13.translateX = var7;
    var12 = new Array(1);
    var12[0] = var13;
    var3.transform = var12;
    var1[0] = var3;
    var3 = {};
    var12 = {};
    var12.translateX = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var3.transform = var11;
    var1[100] = var3;
    var0.style = var1;
    var4.SlideOutLeft = var0;
    var0 = {
        'name': 'SlideOutUp',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var12 = {};
    var12.translateY = var7;
    var11 = new Array(1);
    var11[0] = var12;
    var3.transform = var11;
    var1[0] = var3;
    var3 = {};
    var11 = {};
    var11.translateY = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var3.transform = var10;
    var1[100] = var3;
    var0.style = var1;
    var4.SlideOutUp = var0;
    var0 = {
        'name': 'SlideOutDown',
        'style': null,
        'duration': 0.3
    };
    var1 = {};
    var3 = {};
    var10 = {};
    var10.translateY = var7;
    var7 = new Array(1);
    var7[0] = var10;
    var3.transform = var7;
    var1[0] = var3;
    var3 = {};
    var7 = {};
    var7.translateY = var6;
    var6 = new Array(1);
    var6[0] = var7;
    var3.transform = var6;
    var1[100] = var3;
    var0.style = var1;
    var4.SlideOutDown = var0;
    var3 = {};
    var1 = {};
    var7 = 0;
    var6 = var9[var7];
    var0 = undefined;
    var11 = var8.bind(var0)(var6);
    var10 = var11.convertAnimationObjectToKeyframes;
    var6 = var5.SlideInRight;
    var6 = var10.bind(var11)(var6);
    var1.style = var6;
    var6 = var5.SlideInRight;
    var6 = var6.duration;
    var1.duration = var6;
    var3.SlideInRight = var1;
    var1 = {};
    var6 = var9[var7];
    var11 = var8.bind(var0)(var6);
    var10 = var11.convertAnimationObjectToKeyframes;
    var6 = var5.SlideInLeft;
    var6 = var10.bind(var11)(var6);
    var1.style = var6;
    var6 = var5.SlideInLeft;
    var6 = var6.duration;
    var1.duration = var6;
    var3.SlideInLeft = var1;
    var1 = {};
    var6 = var9[var7];
    var11 = var8.bind(var0)(var6);
    var10 = var11.convertAnimationObjectToKeyframes;
    var6 = var5.SlideInUp;
    var6 = var10.bind(var11)(var6);
    var1.style = var6;
    var6 = var5.SlideInUp;
    var6 = var6.duration;
    var1.duration = var6;
    var3.SlideInUp = var1;
    var1 = {};
    var6 = var9[var7];
    var11 = var8.bind(var0)(var6);
    var10 = var11.convertAnimationObjectToKeyframes;
    var6 = var5.SlideInDown;
    var6 = var10.bind(var11)(var6);
    var1.style = var6;
    var6 = var5.SlideInDown;
    var6 = var6.duration;
    var1.duration = var6;
    var3.SlideInDown = var1;
    var1 = {};
    var6 = {};
    var10 = var9[var7];
    var12 = var8.bind(var0)(var10);
    var11 = var12.convertAnimationObjectToKeyframes;
    var10 = var4.SlideOutRight;
    var10 = var11.bind(var12)(var10);
    var6.style = var10;
    var10 = var4.SlideOutRight;
    var10 = var10.duration;
    var6.duration = var10;
    var1.SlideOutRight = var6;
    var6 = {};
    var10 = var9[var7];
    var12 = var8.bind(var0)(var10);
    var11 = var12.convertAnimationObjectToKeyframes;
    var10 = var4.SlideOutLeft;
    var10 = var11.bind(var12)(var10);
    var6.style = var10;
    var10 = var4.SlideOutLeft;
    var10 = var10.duration;
    var6.duration = var10;
    var1.SlideOutLeft = var6;
    var6 = {};
    var10 = var9[var7];
    var12 = var8.bind(var0)(var10);
    var11 = var12.convertAnimationObjectToKeyframes;
    var10 = var4.SlideOutUp;
    var10 = var11.bind(var12)(var10);
    var6.style = var10;
    var10 = var4.SlideOutUp;
    var10 = var10.duration;
    var6.duration = var10;
    var1.SlideOutUp = var6;
    var6 = {};
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.convertAnimationObjectToKeyframes;
    var7 = var4.SlideOutDown;
    var7 = var8.bind(var9)(var7);
    var6.style = var7;
    var7 = var4.SlideOutDown;
    var7 = var7.duration;
    var6.duration = var7;
    var1.SlideOutDown = var6;
    var2.SlideInData = var5;
    var2.SlideOutData = var4;
    var2.SlideIn = var3;
    var2.SlideOut = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3740]);