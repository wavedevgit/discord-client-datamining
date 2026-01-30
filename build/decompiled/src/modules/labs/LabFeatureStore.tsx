// modules/labs/LabFeatureStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun70628: for (var _fun70628_ip = 0;;) switch (_fun70628_ip) {
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
                _fun70628_ip = 76;
                continue _fun70628;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.DeviceSettingsStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: LabFeatureStore, environment: var5
            _fun70632: for (var _fun70632_ip = 0;;) switch (_fun70632_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun70632_ip = 69;
                        continue _fun70632
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun70632_ip = 105;
                    continue _fun70632;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'getUserAgnosticState';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = _closure1_slot7;
            var0.toggleStates = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'initialize';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun70634: for (var _fun70634_ip = 0;;) switch (_fun70634_ip) {
                case 0:
                    var9 = arg0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var1);
                    var2 = null;
                    var1 = undefined;
                    for (var3 in var7)
                        case 40: {
                            case 49: var12 = var3;
                            var11 = _closure1_slot7;
                            var10 = var2 == var9;
                            var13 = undefined;
                            if (var10) {
                                _fun70634_ip = 90;
                                continue _fun70634
                            }
                            case 65: var14 = var9.toggleStates;
                            var10 = var2 == var14;
                            var1 = var14;
                            var13 = undefined;
                            if (var10) {
                                _fun70634_ip = 90;
                                continue _fun70634
                            }
                            case 83: var13 = var14[var12];
                            var1 = var14;
                            case 90: var10 = var2 != var13;
                            if (!var10) {
                                _fun70634_ip = 100;
                                continue _fun70634
                            }
                            case 97: var10 = var13;
                            case 100: var11[var12] = var10;
                            _fun70634_ip = 40;
                            continue _fun70634;
                        }
                case 106:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'get';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun70635: for (var _fun70635_ip = 0;;) switch (_fun70635_ip) {
                case 0:
                    var1 = _closure1_slot7;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun70635_ip = 26;
                        continue _fun70635
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'set';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            var0 = arg1;
            var2 = _closure1_slot7;
            var1 = arg0;
            var2[var1] = var0;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'LabFeatureStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 7;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var3 = function(arg0) { // Original name: handleLabFeatureToggleSet, environment: var3
        var0 = arg0;
        var2 = var0.labFeature;
        var1 = var0.enabled;
        var0 = _closure1_slot7;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var1.LAB_FEATURE_TOGGLE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/labs/LabFeatureStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8828, 566, 806, 2]);