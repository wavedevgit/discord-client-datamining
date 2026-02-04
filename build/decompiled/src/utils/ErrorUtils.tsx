// utils/ErrorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0() {
        _fun58692: for (var _fun58692_ip = 0;;) switch (_fun58692_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.userInfo;
                var0 = var0.NSUnderlyingError;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun58692_ip = 51;
                    continue _fun58692
                }
            case 21:
                var4 = _closure1_slot2;
                var0 = var1.userInfo;
                var3 = var0.NSUnderlyingError;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                if (!(var2 == var0)) {
                    _fun58692_ip = 67;
                    continue _fun58692
                }
            case 51:
                var1 = var1.userInfo;
                var1 = var1.NSLocalizedDescription;
                return var1;
            case 67:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/ErrorUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun58693: for (var _fun58693_ip = 0;;) switch (_fun58693_ip) {
            case 0:
                var0 = arg0;
                var3 = undefined;
                var1 = undefined;
            case 7: // try_start_0
                var2 = _closure1_slot2;
                var2 = var2.bind(var3)(var0);
                var1 = var2;
                var0 = null;
                var2 = var0 != var2;
                if (!var2) {
                    _fun58693_ip = 34;
                    continue _fun58693
                }
            case 31:
                var0 = var1;
            case 34: // try_end0
                return var0;
            case 36: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var2.getUnderlyingIOSError = var3;
    var1 = function arg0() {
        _fun58694: for (var _fun58694_ip = 0;;) switch (_fun58694_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var1 = var0.Boolean;
                var5 = undefined;
                var1 = var1.bind(var5)(var2);
                if (var1) {
                    _fun58694_ip = 53;
                    continue _fun58694
                }
            case 21:
                var4 = var0.Error;
                var1 = var4.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = 'unknown error';
                var8 = var3;
                var1 = new var8[var4](var7, var6);
                var2 = var1 instanceof Object ? var1 : var3;
            case 53:
                var3 = 'object';
                var1 = typeof var2;
                var4 = var2;
                if (!(var3 !== var1)) {
                    _fun58694_ip = 104;
                    continue _fun58694
                }
            case 67:
                var3 = var0.Error;
                var1 = var0.String;
                var7 = var1.bind(var5)(var2);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var4 = var1 instanceof Object ? var1 : var2;
            case 104:
                var2 = var0.JSON;
                var1 = var2.stringify;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 0;
                var0 = var6[var0];
                var3 = var3.bind(var5)(var0);
                var0 = var3.normalizeToSize;
                var0 = var0.bind(var3)(var4);
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.serializeError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7167, 2]);