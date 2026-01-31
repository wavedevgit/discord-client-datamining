// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportAll;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = require;
    var _closure1_slot1 = var0;
    var0 = metroImportDefault;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var _closure1_slot4 = var4;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var2 = arg1;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot3;
        var3 = _closure1_slot4;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.register;
        var1 = function() { // Environment: var1
            _fun1290: for (var _fun1290_ip = 0;;) switch (_fun1290_ip) {
                case 0:
                    var0 = _closure1_slot5;
                    var3 = null;
                    var1 = var3 == var0;
                    var7 = undefined;
                    var0 = undefined;
                    if (var1) {
                        _fun1290_ip = 36;
                        continue _fun1290
                    }
                case 20:
                    var2 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var7)(var1);
                case 36:
                    if (!(var3 == var0)) {
                        _fun1290_ip = 70;
                        continue _fun1290
                    }
                case 40:
                    var1 = {};
                    var2 = _closure1_slot0;
                    var2 = var2.RN$Bridgeless;
                    var2 = !var2;
                    var1.native = var2;
                    var2 = false;
                    var1.verify = var2;
                    var0 = var1;
                case 70:
                    var2 = var0.native;
                    var5 = var0.verify;
                    if (var2) {
                        _fun1290_ip = 162;
                        continue _fun1290
                    }
                case 85:
                    var1 = _closure1_slot1;
                    var6 = _closure1_slot4;
                    var0 = 3;
                    var0 = var6[var0];
                    var8 = var1.bind(var7)(var0);
                    var6 = var8.createViewConfig;
                    var0 = _closure2_slot1;
                    var0 = var0.bind(var7)();
                    var0 = var6.bind(var8)(var0);
                    if (!(var3 == var0)) {
                        _fun1290_ip = 160;
                        continue _fun1290
                    }
                case 131:
                    var8 = _closure1_slot2;
                    var9 = _closure1_slot4;
                    var6 = 2;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var1 = _closure2_slot0;
                    var0 = var6.bind(var7)(var1);
                case 160:
                    _fun1290_ip = 240;
                    continue _fun1290;
                case 162:
                    var6 = _closure1_slot2;
                    var8 = _closure1_slot4;
                    var1 = 2;
                    var1 = var8[var1];
                    var8 = var6.bind(var7)(var1);
                    var1 = _closure2_slot0;
                    var1 = var8.bind(var7)(var1);
                    if (!(var3 == var1)) {
                        _fun1290_ip = 237;
                        continue _fun1290
                    }
                case 198:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot4;
                    var8 = 3;
                    var8 = var10[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.createViewConfig;
                    var6 = _closure2_slot1;
                    var6 = var6.bind(var7)();
                    var1 = var8.bind(var9)(var6);
                case 237:
                    var0 = var1;
                case 240:
                    var6 = _closure1_slot2;
                    var8 = _closure1_slot4;
                    var1 = 4;
                    var1 = var8[var1];
                    var10 = var6.bind(var7)(var1);
                    var9 = var3 != var0;
                    var8 = _closure2_slot0;
                    var6 = 'NativeComponentRegistry.get: both static and native view config are missing for native component "%s".';
                    var6 = var10.bind(var7)(var9, var6, var8);
                    if (!var5) {
                        _fun1290_ip = 478;
                        continue _fun1290
                    }
                case 290:
                    var9 = var0;
                    if (var2) {
                        _fun1290_ip = 325;
                        continue _fun1290
                    }
                case 296:
                    var6 = _closure1_slot2;
                    var8 = _closure1_slot4;
                    var5 = 2;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = _closure2_slot0;
                    var9 = var6.bind(var7)(var5);
                case 325:
                    if (!(var3 != var9)) {
                        _fun1290_ip = 480;
                        continue _fun1290
                    }
                case 332:
                    var6 = var0;
                    if (!var2) {
                        _fun1290_ip = 377;
                        continue _fun1290
                    }
                case 338:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot4;
                    var2 = 3;
                    var2 = var5[var2];
                    var5 = var3.bind(var7)(var2);
                    var3 = var5.createViewConfig;
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var7)();
                    var6 = var3.bind(var5)(var2);
                case 377:
                    var3 = _closure1_slot3;
                    var2 = _closure1_slot4;
                    var8 = 5;
                    var2 = var2[var8];
                    var5 = var3.bind(var7)(var2);
                    var3 = var5.validate;
                    var2 = _closure2_slot0;
                    var6 = var3.bind(var5)(var2, var9, var6);
                    var3 = var6.type;
                    var2 = 'invalid';
                    if (!(var2 === var3)) {
                        _fun1290_ip = 478;
                        continue _fun1290
                    }
                case 427:
                    var2 = global;
                    var3 = var2.console;
                    var2 = var3.error;
                    var5 = _closure1_slot3;
                    var4 = _closure1_slot4;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.stringifyValidationResult;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1, var6);
                    var1 = var2.bind(var3)(var1);
                case 478:
                    return var0;
                case 480:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = function arg0() {
        _fun1291: for (var _fun1291_ip = 0;;) switch (_fun1291_ip) {
            case 0:
                var1 = _closure1_slot5;
                var0 = undefined;
                if (!(var0 === var1)) {
                    _fun1291_ip = 20;
                    continue _fun1291
                }
            case 13:
                var1 = arg0;
                var _closure1_slot5 = var1;
            case 20:
                return var0;
        }
    };
    var2.setRuntimeConfigProvider = var4;
    var2.get = var3;
    var3 = function arg0, arg1() {
        _fun1292: for (var _fun1292_ip = 0;;) switch (_fun1292_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var2 = _closure1_slot5;
                var5 = null;
                if (!(var5 != var2)) {
                    _fun1292_ip = 46;
                    continue _fun1292
                }
            case 19:
                var2 = _closure1_slot5;
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                if (!(var5 != var2)) {
                    _fun1292_ip = 115;
                    continue _fun1292
                }
            case 34:
                var2 = _closure1_slot6;
                var2 = var2.bind(var4)(var0, var3);
                return var0;
            case 46:
                var6 = _closure1_slot2;
                var7 = _closure1_slot4;
                var2 = 4;
                var4 = var7[var2];
                var2 = undefined;
                var9 = var6.bind(var2)(var4);
                var4 = _closure1_slot5;
                var8 = var5 == var4;
                var4 = 'Unexpected invocation!';
                var4 = var9.bind(var2)(var8, var4);
                var4 = 6;
                var4 = var7[var4];
                var6 = var6.bind(var2)(var4);
                var4 = var6.getViewManagerConfig;
                var4 = var4.bind(var6)(var0);
                if (!(var5 == var4)) {
                    _fun1292_ip = 159;
                    continue _fun1292
                }
            case 115:
                var4 = function arg0() {
                    var0 = null;
                    return var0;
                };
                var5 = global;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var6 = 'Fallback(';
                var5 = ')';
                var5 = var7.bind(var6)(var0, var5);
                var4.displayName = var5;
                return var4;
            case 159:
                var1 = _closure1_slot6;
                var1 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.getWithFallback_DEPRECATED = var3;
    var1 = function arg0() {
        _fun1294: for (var _fun1294_ip = 0;;) switch (_fun1294_ip) {
            case 0:
                var0 = _closure1_slot5;
                var1 = null;
                var3 = var1 == var0;
                var4 = undefined;
                var0 = undefined;
                if (var3) {
                    _fun1294_ip = 32;
                    continue _fun1294
                }
            case 20:
                var3 = _closure1_slot5;
                var2 = arg0;
                var0 = var3.bind(var4)(var2);
            case 32:
                if (!(var1 == var0)) {
                    _fun1294_ip = 48;
                    continue _fun1294
                }
            case 36:
                var1 = {};
                var2 = true;
                var1.native = var2;
                var0 = var1;
            case 48:
                var0 = var0.native;
                var0 = !var0;
                return var0;
        }
    };
    var2.unstable_hasStaticViewConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 43, 45, 107, 44, 111, 46]);