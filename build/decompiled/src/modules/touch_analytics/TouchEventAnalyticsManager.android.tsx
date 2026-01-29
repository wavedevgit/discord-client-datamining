// modules/touch_analytics/TouchEventAnalyticsManager.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun98997: for (var _fun98997_ip = 0;;) switch (_fun98997_ip) {
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
                _fun98997_ip = 76;
                continue _fun98997;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: updateEnabledState, environment: var1
        _fun99000: for (var _fun99000_ip = 0;;) switch (_fun99000_ip) {
            case 0:
                var1 = _closure1_slot8;
                var0 = var1.getCurrentUser;
                var4 = var0.bind(var1)();
                var0 = null;
                var3 = var0 == var4;
                var0 = undefined;
                var1 = undefined;
                if (var3) {
                    _fun99000_ip = 39;
                    continue _fun99000
                }
            case 29:
                var3 = var4.isStaff;
                var1 = var3.bind(var4)();
            case 39:
                var3 = true;
                var1 = var3 === var1;
                if (var1) {
                    _fun99000_ip = 78;
                    continue _fun99000
                }
            case 48:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 6;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.isZoomedExperimentEnabled;
                var1 = var4.bind(var5)();
            case 78:
                if (!var1) {
                    _fun99000_ip = 136;
                    continue _fun99000
                }
            case 81:
                var4 = _closure1_slot9;
                if (var4) {
                    _fun99000_ip = 136;
                    continue _fun99000
                }
            case 88: // try_start_0
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 7;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.enableTouchLogging;
                var4 = var4.bind(var5)();
                _closure1_slot9 = var3;
            case 124: // try_end0
                _fun99000_ip = 193;
                continue _fun99000;
            case 126: // catch_target0
                CatchBlockStart(arg_register = 3);
                var3 = false;
                _closure1_slot9 = var3;
                _fun99000_ip = 193;
                continue _fun99000;
            case 136:
                if (var1) {
                    _fun99000_ip = 193;
                    continue _fun99000
                }
            case 139:
                var1 = _closure1_slot9;
                if (!var1) {
                    _fun99000_ip = 193;
                    continue _fun99000
                }
            case 146:
                var1 = _closure1_slot9;
                if (!var1) {
                    _fun99000_ip = 193;
                    continue _fun99000
                }
            case 153: // try_start_1
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.disableTouchLogging;
                var1 = var1.bind(var3)();
            case 183: // try_end1
                _fun99000_ip = 187;
                continue _fun99000;
            case 185: // catch_target1
                CatchBlockStart(arg_register = 1);
            case 187:
                var1 = false;
                _closure1_slot9 = var1;
            case 193:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = false;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: TouchEventAnalyticsManager, environment: var5
            _fun99002: for (var _fun99002_ip = 0;;) switch (_fun99002_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun99002_ip = 69;
                        continue _fun99002
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun99002_ip = 105;
                    continue _fun99002;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = _closure1_slot11;
            var0 = undefined;
            var2 = var3.bind(var0)();
            var2 = _closure1_slot8;
            var1 = var2.addChangeListener;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun99004: for (var _fun99004_ip = 0;;) switch (_fun99004_ip) {
                case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.removeChangeListener;
                    var0 = _closure1_slot11;
                    var0 = var2.bind(var3)(var0);
                    var0 = _closure1_slot9;
                    if (!var0) {
                        _fun99004_ip = 71;
                        continue _fun99004
                    }
                case 29: // try_start_0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.disableTouchLogging;
                    var0 = var0.bind(var2)();
                case 61: // try_end0
                    _fun99004_ip = 65;
                    continue _fun99004;
                case 63: // catch_target0
                    CatchBlockStart(arg_register = 0);
                case 65:
                    var0 = false;
                    _closure1_slot9 = var0;
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/touch_analytics/TouchEventAnalyticsManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1613, 12617, 12855, 3971, 2]);