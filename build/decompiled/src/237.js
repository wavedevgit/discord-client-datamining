// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = require;
    var _closure1_slot1 = var0;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {
        'log': 'log',
        'info': 'info',
        'warn': 'warn',
        'error': 'error',
        'fatal': 'error'
    };
    var _closure1_slot3 = var0;
    var0 = null;
    var _closure1_slot4 = var0;
    var0 = {};
    var3 = function arg0() {
        _fun3247: for (var _fun3247_ip = 0;;) switch (_fun3247_ip) {
            case 0:
                var1 = arg0;
                var0 = undefined;
                var5 = undefined;
                var4 = arguments.length;
                var2 = global;
                var7 = var2.Array;
                var3 = 1;
                var6 = var4 > var3;
                var2 = 0;
                if (!var6) {
                    _fun3247_ip = 34;
                    continue _fun3247
                }
            case 30:
                var2 = var4 - var3;
            case 34:
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var6;
                var10 = var2;
                var2 = new var11[var7](var10, var9);
                var6 = var2 instanceof Object ? var2 : var6;
                var7 = var3 < var4;
                var2 = var3;
                if (!var7) {
                    _fun3247_ip = 86;
                    continue _fun3247
                }
            case 67:
                var8 = var2 - var3;
                var7 = arguments[var2];
                var6[var8] = var7;
                var2 = var2 + 1;
                if (var2 < var4) {
                    _fun3247_ip = 67;
                    continue _fun3247
                }
            case 86:
                var3 = _closure1_slot0;
                var3 = var3.nativeLoggingHook;
                if (!(var0 !== var3)) {
                    _fun3247_ip = 138;
                    continue _fun3247
                }
            case 103:
                var3 = _closure1_slot4;
                if (!var3) {
                    _fun3247_ip = 118;
                    continue _fun3247
                }
            case 110:
                var4 = 'warn';
                var3 = var4 === var1;
            case 118:
                if (!var3) {
                    _fun3247_ip = 181;
                    continue _fun3247
                }
            case 121:
                var4 = _closure1_slot4;
                var3 = var4.apply;
                var3 = var3.bind(var4)(var0, var6);
                _fun3247_ip = 181;
                continue _fun3247;
            case 138:
                var3 = _closure1_slot5;
                var4 = var3.logToConsole;
                var3 = var4.apply;
                var2 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = var5.concat;
                var1 = var1.bind(var5)(var6);
                var1 = var3.bind(var4)(var2, var1);
            case 181:
                return var0;
        }
    };
    var0.logIfNoNativeHook = var3;
    var3 = function arg0() {
        _fun3248: for (var _fun3248_ip = 0;;) switch (_fun3248_ip) {
            case 0:
                var3 = arg0;
                var0 = undefined;
                var7 = undefined;
                var9 = _closure1_slot3;
                var1 = var9[var3];
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = 0;
                var2 = var2[var8];
                var4 = var4.bind(var0)(var2);
                var2 = 'Level "';
                var6 = var2 + var3;
                var2 = global;
                var5 = var2.Object;
                var3 = var5.keys;
                var5 = var3.bind(var5)(var9);
                var3 = var5.toString;
                var5 = var3.bind(var5)();
                var3 = '" not one of ';
                var3 = var6 + var3;
                var3 = var3 + var5;
                var3 = var4.bind(var0)(var1, var3);
                var6 = arguments.length;
                var3 = var2.Array;
                var5 = 1;
                var4 = var6 > var5;
                if (!var4) {
                    _fun3248_ip = 117;
                    continue _fun3248
                }
            case 113:
                var8 = var6 - var5;
            case 117:
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = var4;
                var11 = var8;
                var3 = new var12[var3](var11, var10);
                var4 = var3 instanceof Object ? var3 : var4;
                var8 = var5 < var6;
                var3 = var5;
                if (!var8) {
                    _fun3248_ip = 169;
                    continue _fun3248
                }
            case 150:
                var9 = var3 - var5;
                var8 = arguments[var3];
                var4[var9] = var8;
                var3 = var3 + 1;
                if (var3 < var6) {
                    _fun3248_ip = 150;
                    continue _fun3248
                }
            case 169:
                var3 = var2.console;
                var2 = var3[var1];
                var1 = var2.apply;
                var1 = var1.bind(var2)(var3, var4);
                return var0;
        }
    };
    var0.logToConsole = var3;
    var3 = function arg0() {
        var0 = arg0;
        _closure1_slot4 = var0;
        var0 = undefined;
        return var0;
    };
    var0.setWarningHandler = var3;
    var _closure1_slot5 = var0;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [44]);