// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function(arg0, arg1) { // Original name: JumpingTransition, environment: var0
        _fun33860: for (var _fun33860_ip = 0;;) switch (_fun33860_ip) {
            case 0:
                var0 = arg1;
                var12 = var0.translateX;
                var5 = var0.translateY;
                var8 = var0.scaleX;
                var7 = var0.scaleY;
                var3 = global;
                var4 = var3.Math;
                var2 = var4.max;
                var1 = var3.Math;
                var0 = var1.abs;
                var1 = var0.bind(var1)(var12);
                var6 = var3.Math;
                var0 = var6.abs;
                var0 = var0.bind(var6)(var5);
                var0 = var2.bind(var4)(var1, var0);
                var9 = 2;
                var0 = var0 / var9;
                var13 = 0;
                if (!(!(var5 <= var13))) {
                    _fun33860_ip = 102;
                    continue _fun33860
                }
            case 93:
                var1 = -var5;
                var11 = var1 + var0;
                _fun33860_ip = 106;
                continue _fun33860;
            case 102:
                var11 = var5 - var0;
            case 106:
                var0 = {};
                var1 = arg0;
                var0.name = var1;
                var1 = {};
                var2 = {};
                var14 = {};
                var4 = var3.HermesInternal;
                var4 = var4.concat;
                var6 = '';
                var10 = 'px';
                var4 = var4.bind(var6)(var12, var10);
                var14.translateX = var4;
                var4 = var3.HermesInternal;
                var4 = var4.concat;
                var4 = var4.bind(var6)(var5, var10);
                var14.translateY = var4;
                var4 = var3.HermesInternal;
                var4 = var4.concat;
                var5 = ',';
                var4 = var4.bind(var6)(var8, var5, var7);
                var14.scale = var4;
                var4 = new Array(1);
                var4[0] = var14;
                var2.transform = var4;
                var14 = _closure1_slot0;
                var4 = _closure1_slot1;
                var13 = var4[var13];
                var4 = undefined;
                var4 = var14.bind(var4)(var13);
                var4 = var4.Easing;
                var4 = var4.exp;
                var2.easing = var4;
                var1[0] = var2;
                var2 = {};
                var4 = {};
                var9 = var12 / var9;
                var9 = var9 + var10;
                var4.translateX = var9;
                var9 = var3.HermesInternal;
                var9 = var9.concat;
                var9 = var9.bind(var6)(var11, var10);
                var4.translateY = var9;
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var3 = var3.bind(var6)(var8, var5, var7);
                var4.scale = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var2.transform = var3;
                var1[50] = var2;
                var2 = {};
                var3 = new Array(1);
                var4 = {
                    'translateX': '0px',
                    'translateY': '0px',
                    'scale': '1,1'
                };
                var3[0] = var4;
                var2.transform = var3;
                var1[100] = var2;
                var0.style = var1;
                var1 = 300;
                var0.duration = var1;
                return var0;
        }
    };
    var1.JumpingTransition = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3732]);