// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var _closure1_slot0 = var2;
    var2 = require;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function(arg0) { // Original name: parseErrorStack, environment: var0
        _fun2631: for (var _fun2631_ip = 0;;) switch (_fun2631_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun2631_ip = 360;
                    continue _fun2631
                }
            case 12:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 0;
                var0 = var3[var0];
                var13 = undefined;
                var3 = var1.bind(var13)(var0);
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var4);
                var0 = var4;
                if (var1) {
                    _fun2631_ip = 358;
                    continue _fun2631
                }
            case 63:
                var1 = _closure1_slot0;
                var1 = var1.HermesInternal;
                if (var1) {
                    _fun2631_ip = 108;
                    continue _fun2631
                }
            case 75:
                var1 = var3.parse;
                var5 = var1.bind(var3)(var4);
                var3 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    _fun2632: for (var _fun2632_ip = 0;;) switch (_fun2632_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.assign;
                            var1 = {};
                            var5 = var4.column;
                            var0 = null;
                            var5 = var0 != var5;
                            if (!var5) {
                                _fun2632_ip = 46;
                                continue _fun2632
                            }
                        case 33:
                            var6 = var4.column;
                            var5 = 1;
                            var0 = var6 - var5;
                        case 46:
                            var1.column = var0;
                            var0 = {};
                            var0 = var2.bind(var3)(var0, var4, var1);
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1);
                _fun2631_ip = 355;
                continue _fun2631;
            case 108:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var12 = 1;
                var2 = var2[var12];
                var3 = var3.bind(var13)(var2);
                var2 = var3.default;
                var3 = var2.bind(var3)(var4);
                var9 = undefined;
                var10 = undefined;
                var11 = undefined;
                var2 = new Array(0);
                var3 = var3.entries;
                var8 = var3;
                var4 = var8[Symbol.iterator];
                var8 = var4().next;
                var7 = 'SOURCE';
                var6 = 'INTERNAL_BYTECODE';
                var5 = 'NATIVE';
                var3 = 'FRAME';
            case 178:
                var14 = var8().value;
                var15 = var4;
                if (!(var15 !== var13)) {
                    _fun2631_ip = 352;
                    continue _fun2631
                }
            case 192: // try_start_0
                var9 = var14;
                var14 = var14.type;
                if (!(var3 === var14)) {
                    _fun2631_ip = 340;
                    continue _fun2631
                }
            case 207:
                var14 = var9;
                var15 = var14.location;
                var10 = var15;
                var11 = var14.functionName;
                var15 = var15.type;
                var15 = var5 !== var15;
                var14 = var15;
                if (!var15) {
                    _fun2631_ip = 251;
                    continue _fun2631
                }
            case 239:
                var15 = var10;
                var15 = var15.type;
                var14 = var6 !== var15;
            case 251:
                if (!var14) {
                    _fun2631_ip = 340;
                    continue _fun2631
                }
            case 254:
                var16 = var2;
                var15 = var16.push;
                var14 = {};
                var17 = var11;
                var14.methodName = var17;
                var17 = var10;
                var18 = var17.sourceUrl;
                var14.file = var18;
                var18 = var17.line1Based;
                var14.lineNumber = var18;
                var17 = var17.type;
                if (!(var7 !== var17)) {
                    _fun2631_ip = 317;
                    continue _fun2631
                }
            case 306:
                var17 = var10;
                var17 = var17.virtualOffset0Based;
                _fun2631_ip = 330;
                continue _fun2631;
            case 317:
                var18 = var10;
                var18 = var18.column1Based;
                var17 = var18 - var12;
            case 330:
                var14.column = var17;
                var14 = var15.bind(var16)(var14);
            case 340: // try_end0
                _fun2631_ip = 178;
                continue _fun2631;
            case 345: // catch_target0
                CatchBlockStart(arg_register = 3);
                var4.return();
                throw var3;
            case 352:
                var1 = var2;
            case 355:
                var0 = var1;
            case 358:
                return var0;
            case 360:
                var0 = new Array(0);
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [185, 186]);