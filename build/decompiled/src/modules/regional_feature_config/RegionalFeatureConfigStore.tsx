// modules/regional_feature_config/RegionalFeatureConfigStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun39234: for (var _fun39234_ip = 0;;) switch (_fun39234_ip) {
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
            case 70: // try_end0
                _fun39234_ip = 74;
                continue _fun39234;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = null;
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: RegionalFeatureConfigStore, environment: var5
            _fun39238: for (var _fun39238_ip = 0;;) switch (_fun39238_ip) {
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
                        _fun39238_ip = 69;
                        continue _fun39238
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun39238_ip = 105;
                    continue _fun39238;
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
        var0 = 'getRegionalFeatureConfig';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'isFeatureAgeGated';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39240: for (var _fun39240_ip = 0;;) switch (_fun39240_ip) {
                case 0:
                    var4 = _closure1_slot7;
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun39240_ip = 32;
                        continue _fun39240
                    }
                case 18:
                    var3 = var4.isFeatureAgeGated;
                    var2 = arg0;
                    var1 = var3.bind(var4)(var2);
                case 32:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun39240_ip = 42;
                        continue _fun39240
                    }
                case 39:
                    var0 = var1;
                case 42:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isSettingTeenByDefault';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39241: for (var _fun39241_ip = 0;;) switch (_fun39241_ip) {
                case 0:
                    var4 = _closure1_slot7;
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun39241_ip = 32;
                        continue _fun39241
                    }
                case 18:
                    var3 = var4.isFeatureTeenByDefault;
                    var2 = arg0;
                    var1 = var3.bind(var4)(var2);
                case 32:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun39241_ip = 42;
                        continue _fun39241
                    }
                case 39:
                    var0 = var1;
                case 42:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasAgeGatedFeatures';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun39242: for (var _fun39242_ip = 0;;) switch (_fun39242_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun39242_ip = 28;
                        continue _fun39242
                    }
                case 18:
                    var2 = var3.hasAgeGatedFeatures;
                    var1 = var2.bind(var3)();
                case 28:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun39242_ip = 38;
                        continue _fun39242
                    }
                case 35:
                    var0 = var1;
                case 38:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasTeenDefaults';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun39243: for (var _fun39243_ip = 0;;) switch (_fun39243_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun39243_ip = 28;
                        continue _fun39243
                    }
                case 18:
                    var2 = var3.hasTeenDefaults;
                    var1 = var2.bind(var3)();
                case 28:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun39243_ip = 38;
                        continue _fun39243
                    }
                case 35:
                    var0 = var1;
                case 38:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'RegionalFeatureConfigStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var3 = function(arg0) { // Original name: handleConnectionOpen, environment: var3
        _fun39244: for (var _fun39244_ip = 0;;) switch (_fun39244_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.regionalFeatureConfig;
                var1 = null;
                var2 = var1 != var2;
                if (!var2) {
                    _fun39244_ip = 68;
                    continue _fun39244
                }
            case 18:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.RegionalFeatureConfig;
                var2 = var3.fromConnectionOpen;
                var0 = var0.regionalFeatureConfig;
                var1 = var2.bind(var3)(var0);
            case 68:
                _closure1_slot7 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/regional_feature_config/RegionalFeatureConfigStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4235, 566, 806, 2]);