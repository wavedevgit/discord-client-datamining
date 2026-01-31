// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var3 = function arg0, arg1() {
        _fun1463: for (var _fun1463_ip = 0;;) switch (_fun1463_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var2 = global;
                var5 = var2.RegExp;
                var0 = var5.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var17 = /([+-]?\d+(\.\d+)?)([a-zA-Z]+|%)?/g;
                var18 = var3;
                var0 = new var18[var5](var17, var16);
                var12 = var0 instanceof Object ? var0 : var3;
                var0 = 'matrix';
                if (!(var0 !== var1)) {
                    _fun1463_ip = 370;
                    continue _fun1463
                }
            case 59:
                var5 = 'translate';
                if (!(var5 !== var1)) {
                    _fun1463_ip = 227;
                    continue _fun1463
                }
            case 70:
                var0 = 'translate3d';
                if (!(var0 !== var1)) {
                    _fun1463_ip = 227;
                    continue _fun1463
                }
            case 83:
                var0 = 'translateX';
                if (!(var0 !== var1)) {
                    _fun1463_ip = 149;
                    continue _fun1463
                }
            case 91:
                var0 = 'translateY';
                if (!(var0 !== var1)) {
                    _fun1463_ip = 149;
                    continue _fun1463
                }
            case 99:
                var0 = 'perspective';
                if (!(var0 !== var1)) {
                    _fun1463_ip = 149;
                    continue _fun1463
                }
            case 107:
                var0 = {};
                var0.key = var1;
                var3 = var2.isNaN;
                var7 = undefined;
                var6 = var3.bind(var7)(var4);
                var3 = var4;
                if (var6) {
                    _fun1463_ip = 143;
                    continue _fun1463
                }
            case 132:
                var6 = var2.Number;
                var3 = var6.bind(var7)(var4);
            case 143:
                var0.value = var3;
                return var0;
            case 149:
                var0 = var12.exec;
                var6 = var0.bind(var12)(var4);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun1463_ip = 213;
                    continue _fun1463
                }
            case 166:
                var0 = var6.length;
                if (!var0) {
                    _fun1463_ip = 213;
                    continue _fun1463
                }
            case 174:
                var7 = var2.Number;
                var0 = 1;
                var3 = var6[var0];
                var0 = undefined;
                var3 = var7.bind(var0)(var3);
                var0 = 3;
                var0 = var6[var0];
                var0 = {};
                var0.key = var1;
                var0.value = var3;
                return var0;
            case 213:
                var0 = {};
                var0.key = var1;
                var3 = undefined;
                var0.value = var3;
                return var0;
            case 227:
                var3 = new Array(0);
                var0 = var12.exec;
                var0 = var0.bind(var12)(var4);
                var11 = '';
                var10 = '%';
                var7 = 1;
                var9 = undefined;
                var8 = 3;
                var6 = 0;
                if (!var0) {
                    _fun1463_ip = 339;
                    continue _fun1463
                }
            case 263:
                var14 = var2.Number;
                var13 = var0[var7];
                var15 = var14.bind(var9)(var13);
                var13 = var0[var8];
                if (!(var10 !== var13)) {
                    _fun1463_ip = 298;
                    continue _fun1463
                }
            case 286:
                var13 = var3.push;
                var13 = var13.bind(var3)(var15);
                _fun1463_ip = 325;
                continue _fun1463;
            case 298:
                var14 = var3.push;
                var13 = var2.HermesInternal;
                var13 = var13.concat;
                var13 = var13.bind(var11)(var15, var10);
                var13 = var14.bind(var3)(var13);
            case 325:
                var13 = var12.exec;
                var0 = var13.bind(var12)(var4);
                if (var0) {
                    _fun1463_ip = 263;
                    continue _fun1463
                }
            case 339:
                var0 = var3.length;
                if (!(var7 === var0)) {
                    _fun1463_ip = 358;
                    continue _fun1463
                }
            case 348:
                var0 = var3.push;
                var0 = var0.bind(var3)(var6);
            case 358:
                var0 = {};
                var0.key = var5;
                var0.value = var3;
                return var0;
            case 370:
                var0 = {};
                var0.key = var1;
                var3 = var4.match;
                var1 = /[+-]?\d+(\.\d+)?/g;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var3 = var1 == var4;
                var1 = undefined;
                if (var3) {
                    _fun1463_ip = 428;
                    continue _fun1463
                }
            case 412:
                var3 = var4.map;
                var2 = var2.Number;
                var1 = var3.bind(var4)(var2);
            case 428:
                var0.value = var1;
                return var0;
        }
    };
    var _closure1_slot1 = var3;
    var1 = function arg0() {
        _fun1464: for (var _fun1464_ip = 0;;) switch (_fun1464_ip) {
            case 0:
                var8 = arg0;
                var2 = 'string';
                var1 = typeof var8;
                var0 = var8;
                if (!(var2 === var1)) {
                    _fun1464_ip = 166;
                    continue _fun1464
                }
            case 20:
                var1 = global;
                var3 = var1.RegExp;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var16 = /(\w+)\(([^)]+)\)/g;
                var17 = var2;
                var1 = new var17[var3](var16, var15);
                var7 = var1 instanceof Object ? var1 : var2;
                var6 = new Array(0);
                var1 = var7.exec;
                var1 = var1.bind(var7)(var8);
                var4 = undefined;
                var3 = 1;
                var2 = 2;
                var0 = var6;
                if (!var1) {
                    _fun1464_ip = 166;
                    continue _fun1464
                }
            case 94:
                var11 = _closure1_slot1;
                var10 = var1[var3];
                var9 = var1[var2];
                var9 = var11.bind(var4)(var10, var9);
                var13 = var9.key;
                var12 = var9.value;
                if (!(var4 !== var12)) {
                    _fun1464_ip = 149;
                    continue _fun1464
                }
            case 126:
                var10 = var6.push;
                var11 = _closure1_slot0;
                var9 = {};
                var9 = var11.bind(var4)(var9, var13, var12);
                var9 = var10.bind(var6)(var9);
            case 149:
                var9 = var7.exec;
                var1 = var9.bind(var7)(var8);
                var0 = var6;
                if (var1) {
                    _fun1464_ip = 94;
                    continue _fun1464
                }
            case 166:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77]);