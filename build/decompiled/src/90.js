// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var0 = function() { // Original name: getSourceCodeScriptURL, environment: var3
        _fun1513: for (var _fun1513_ip = 0;;) switch (_fun1513_ip) {
            case 0:
                var2 = _closure1_slot5;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun1513_ip = 56;
                    continue _fun1513
                }
            case 13:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.getConstants;
                var0 = var0.bind(var2)();
                var0 = var0.scriptURL;
                var _closure1_slot5 = var0;
                _fun1513_ip = 60;
                continue _fun1513;
            case 56:
                var0 = _closure1_slot5;
            case 60:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var1 = function(arg0) { // Original name: resolveAssetSource, environment: var3
        _fun1514: for (var _fun1514_ip = 0;;) switch (_fun1514_ip) {
            case 0:
                var0 = arg0;
                var6 = undefined;
                var1 = undefined;
                var2 = undefined;
                var5 = null;
                if (!(var5 != var0)) {
                    _fun1514_ip = 271;
                    continue _fun1514
                }
            case 18:
                var4 = 'object';
                var3 = typeof var0;
                if (!(var4 !== var3)) {
                    _fun1514_ip = 271;
                    continue _fun1514
                }
            case 32:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 1;
                var4 = var8[var4];
                var7 = var7.bind(var6)(var4);
                var4 = var7.getAssetByID;
                var10 = var4.bind(var7)(var0);
                if (var10) {
                    _fun1514_ip = 71;
                    continue _fun1514
                }
            case 69:
                return var5;
            case 71:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 2;
                var4 = var8[var4];
                var4 = var7.bind(var6)(var4);
                var9 = var4.default;
                var4 = _closure1_slot3;
                if (!(var6 === var4)) {
                    _fun1514_ip = 161;
                    continue _fun1514
                }
            case 104:
                var4 = _closure1_slot7;
                var11 = var4.bind(var6)();
                var4 = var5 == var11;
                var8 = undefined;
                if (var4) {
                    _fun1514_ip = 146;
                    continue _fun1514
                }
            case 121:
                var7 = var11.match;
                var4 = /^https?:\\/\\ / .* ? \\ //;
                    var8 = var7.bind(var11)(var4);
            case 146:
                var4 = null;
                if (!var8) {
                    _fun1514_ip = 157;
                    continue _fun1514
                }
            case 151:
                var7 = 0;
                var4 = var8[var7];
            case 157:
                var _closure1_slot3 = var4;
            case 161:
                var14 = _closure1_slot3;
                var4 = function() { // Original name: getScriptURL, environment: var4
                    _fun1515: for (var _fun1515_ip = 0;;) switch (_fun1515_ip) {
                        case 0:
                            var1 = _closure1_slot4;
                            var2 = undefined;
                            if (!(var2 === var1)) {
                                _fun1515_ip = 127;
                                continue _fun1515
                            }
                        case 13:
                            var1 = _closure1_slot7;
                            var6 = var1.bind(var2)();
                            var1 = null;
                            var2 = var6;
                            if (!(var1 != var2)) {
                                _fun1515_ip = 120;
                                continue _fun1515
                            }
                        case 30:
                            var4 = var6.startsWith;
                            var3 = 'assets://';
                            var3 = var4.bind(var6)(var3);
                            var1 = null;
                            if (var3) {
                                _fun1515_ip = 123;
                                continue _fun1515
                            }
                        case 52:
                            var5 = var6.substring;
                            var4 = var6.lastIndexOf;
                            var3 = '/';
                            var4 = var4.bind(var6)(var3);
                            var3 = 1;
                            var4 = var4 + var3;
                            var3 = 0;
                            var4 = var5.bind(var6)(var3, var4);
                            var5 = var4.includes;
                            var3 = '://';
                            var3 = var5.bind(var4)(var3);
                            var2 = var4;
                            if (var3) {
                                _fun1515_ip = 120;
                                continue _fun1515
                            }
                        case 110:
                            var3 = 'file://';
                            var2 = var3 + var4;
                        case 120:
                            var1 = var2;
                        case 123:
                            var _closure1_slot4 = var1;
                        case 127:
                            var0 = _closure1_slot4;
                            return var0;
                    }
                };
                var13 = var4.bind(var6)();
                var7 = var9.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var9
                    }
                });
                var15 = var7;
                var12 = var10;
                var4 = new var15[var9](var14, var13, var12, var11);
                var1 = var4 instanceof Object ? var4 : var7;
                var4 = _closure1_slot6;
                if (!var4) {
                    _fun1514_ip = 256;
                    continue _fun1514
                }
            case 206:
                var7 = _closure1_slot6;
                var4 = var7;
                var3 = var4[Symbol.iterator];
                var4 = var3().next;
            case 216:
                var8 = var4().value;
                var7 = var3;
                if (!(var7 !== var6)) {
                    _fun1514_ip = 256;
                    continue _fun1514
                }
            case 227: // try_start_0
                var7 = var1;
                var7 = var8.bind(var6)(var7);
                var2 = var7;
                if (!(var5 == var7)) {
                    _fun1514_ip = 244;
                    continue _fun1514
                }
            case 242: // try_end0
                _fun1514_ip = 216;
                continue _fun1514;
            case 244:
                var3.return();
                return var2;
            case 249: // catch_target0
                CatchBlockStart(arg_register = 2);
                var3.return();
                throw var2;
            case 256:
                var2 = var1;
                var1 = var2.defaultAsset;
                var1 = var1.bind(var2)();
                return var1;
            case 271:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = new Array(0);
    var _closure1_slot6 = var0;
    var0 = 3;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.pickScale;
    var1.pickScale = var4;
    var4 = function(arg0) { // Original name: setCustomSourceTransformer, environment: var3
        var1 = new Array(1);
        var0 = arg0;
        var1[0] = var0;
        _closure1_slot6 = var1;
        var0 = undefined;
        return var0;
    };
    var1.setCustomSourceTransformer = var4;
    var3 = function(arg0) { // Original name: addCustomSourceTransformer, environment: var3
        var2 = _closure1_slot6;
        var1 = var2.push;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.addCustomSourceTransformer = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [91, 93, 94, 95]);