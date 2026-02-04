// modules/hotspot/HotspotStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun67235: for (var _fun67235_ip = 0;;) switch (_fun67235_ip) {
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
                _fun67235_ip = 76;
                continue _fun67235;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.CONFERENCE_MODE_ENABLED;
    var _closure1_slot7 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun67239: for (var _fun67239_ip = 0;;) switch (_fun67239_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun67239_ip = 69;
                        continue _fun67239
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun67239_ip = 105;
                    continue _fun67239;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun67240: for (var _fun67240_ip = 0;;) switch (_fun67240_ip) {
                case 0:
                    var0 = arg0;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun67240_ip = 98;
                        continue _fun67240
                    }
                case 9:
                    var1 = global;
                    var5 = var1.Array;
                    var4 = var5.isArray;
                    var3 = var0.hiddenHotspots;
                    var3 = var4.bind(var5)(var3);
                    if (!var3) {
                        _fun67240_ip = 75;
                        continue _fun67240
                    }
                case 36:
                    var4 = var1.Set;
                    var6 = var0.hiddenHotspots;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var1 = new var7[var4](var6, var5);
                    var3 = var1 instanceof Object ? var1 : var3;
                    _closure1_slot8 = var3;
                case 75:
                    var1 = var0.hotspotOverrides;
                    if (!(var2 != var1)) {
                        _fun67240_ip = 98;
                        continue _fun67240
                    }
                case 85:
                    var1 = var0.hotspotOverrides;
                    _closure1_slot9 = var1;
                case 98:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasHotspot';
        var4.key = var6;
        var6 = function arg0() {
            _fun67241: for (var _fun67241_ip = 0;;) switch (_fun67241_ip) {
                case 0:
                    var5 = arg0;
                    var0 = arguments[1];
                    var6 = undefined;
                    if (!(var0 === var6)) {
                        _fun67241_ip = 14;
                        continue _fun67241
                    }
                case 12:
                    var0 = false;
                case 14:
                    var2 = !var0;
                    if (!var2) {
                        _fun67241_ip = 31;
                        continue _fun67241
                    }
                case 20:
                    var0 = _closure1_slot9;
                    var2 = var0[var5];
                case 31:
                    var0 = _closure1_slot7;
                    var0 = !var0;
                    if (!var0) {
                        _fun67241_ip = 112;
                        continue _fun67241
                    }
                case 44:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 6;
                    var1 = var7[var1];
                    var1 = var4.bind(var6)(var1);
                    var4 = var1.ProcessArgs;
                    var1 = var4.isDisallowPopupsSet;
                    var1 = var1.bind(var4)();
                    var1 = !var1;
                    if (!var1) {
                        _fun67241_ip = 109;
                        continue _fun67241
                    }
                case 86:
                    if (var2) {
                        _fun67241_ip = 106;
                        continue _fun67241
                    }
                case 89:
                    var4 = _closure1_slot8;
                    var3 = var4.has;
                    var3 = var3.bind(var4)(var5);
                    var2 = !var3;
                case 106:
                    var1 = var2;
                case 109:
                    var0 = var1;
                case 112:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasHiddenHotspot';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot8;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getHotspotOverride';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot9;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() {
            var0 = {};
            var2 = _closure1_slot8;
            var0.hiddenHotspots = var2;
            var1 = _closure1_slot9;
            var0.hotspotOverrides = var1;
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'HotspotStore';
    var7.displayName = var1;
    var1 = 'hotspots';
    var7.persistKey = var1;
    var1 = new Array(1);
    var8 = function(arg0) { // Environment: var3
        _fun67245: for (var _fun67245_ip = 0;;) switch (_fun67245_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = null;
                if (!(var2 == var1)) {
                    _fun67245_ip = 15;
                    continue _fun67245
                }
            case 11:
                var1 = new Array(0);
            case 15:
                var0.hiddenHotspots = var1;
                var1 = {};
                var0.hotspotOverrides = var1;
                return var0;
        }
    };
    var1[0] = var8;
    var7.migrations = var1;
    var1 = 8;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.hiddenHotspots;
        var0 = global;
        var0 = var0.Set;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var4 = var1;
        var0 = new var4[var0](var3, var2);
        var1 = var0 instanceof Object ? var0 : var1;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var8;
    var8 = function arg0() {
        _fun67247: for (var _fun67247_ip = 0;;) switch (_fun67247_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.location;
                var3 = _closure1_slot8;
                var1 = var3.has;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun67247_ip = 46;
                    continue _fun67247
                }
            case 28:
                var1 = _closure1_slot8;
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
            case 46:
                var0 = false;
                return var0;
        }
    };
    var1.HOTSPOT_HIDE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.location;
        var1 = var0.enabled;
        var0 = _closure1_slot9;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var1.HOTSPOT_OVERRIDE_SET = var8;
    var3 = function arg0() {
        _fun67249: for (var _fun67249_ip = 0;;) switch (_fun67249_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.location;
                var2 = _closure1_slot9;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun67249_ip = 37;
                    continue _fun67249
                }
            case 25:
                var0 = _closure1_slot9;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
            case 37:
                var0 = false;
                return var0;
        }
    };
    var1.HOTSPOT_OVERRIDE_CLEAR = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hotspot/HotspotStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 662, 4017, 566, 806, 2]);