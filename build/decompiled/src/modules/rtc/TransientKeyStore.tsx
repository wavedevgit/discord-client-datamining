// modules/rtc/TransientKeyStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun66616: for (var _fun66616_ip = 0;;) switch (_fun66616_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun66616_ip = 76;
                continue _fun66616;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var1 = var1.Map;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var12 = var6;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot5 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun66620: for (var _fun66620_ip = 0;;) switch (_fun66620_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun66620_ip = 69;
                        continue _fun66620
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun66620_ip = 105;
                    continue _fun66620;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getUsers';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot5;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'isKeyVerified';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun66622: for (var _fun66622_ip = 0;;) switch (_fun66622_ip) {
                case 0:
                    var3 = arg1;
                    var2 = _closure1_slot5;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun66622_ip = 93;
                        continue _fun66622
                    }
                case 29:
                    if (!(var0 != var2)) {
                        _fun66622_ip = 93;
                        continue _fun66622
                    }
                case 33:
                    var1 = var2.length;
                    var0 = var3.length;
                    if (!(var1 === var0)) {
                        _fun66622_ip = 93;
                        continue _fun66622
                    }
                case 47:
                    var0 = var3.length;
                    var1 = 0;
                    var0 = var1 < var0;
                    if (!var0) {
                        _fun66622_ip = 85;
                        continue _fun66622
                    }
                case 61:
                    var4 = var3[var1];
                    var0 = var2[var1];
                    if (!(var4 === var0)) {
                        _fun66622_ip = 89;
                        continue _fun66622
                    }
                case 73:
                    var1 = var1 + 1;
                    var0 = var3.length;
                    if (var1 < var0) {
                        _fun66622_ip = 61;
                        continue _fun66622
                    }
                case 85:
                    var0 = true;
                    return var0;
                case 89:
                    var0 = false;
                    return var0;
                case 93:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'TransientKeyStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function() {
        var1 = _closure1_slot5;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var7;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.userId;
        var5 = var0.key;
        var0 = global;
        var0 = var0.Uint8Array;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var6 = var1;
        var0 = new var6[var0](var5, var4);
        var2 = var0 instanceof Object ? var0 : var1;
        var1 = _closure1_slot5;
        var0 = var1.set;
        var0 = var0.bind(var1)(var3, var2);
        var0 = undefined;
        return var0;
    };
    var1.SECURE_FRAMES_TRANSIENT_KEY_CREATE = var7;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.userId;
        var1 = _closure1_slot5;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.SECURE_FRAMES_TRANSIENT_KEY_DELETE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/TransientKeyStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);