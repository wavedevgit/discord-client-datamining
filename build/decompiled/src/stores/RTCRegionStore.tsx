// stores/RTCRegionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun32177: for (var _fun32177_ip = 0;;) switch (_fun32177_ip) {
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
                _fun32177_ip = 74;
                continue _fun32177;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var6 = 1;
    var1 = var4[var6];
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
    var1 = {
        'preferredRegions': null,
        'lastTestTimestamp': null,
        'lastGeoRankedOrder': null
    };
    var _closure1_slot7 = var1;
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.HOUR;
    var1 = var6 * var1;
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.DeviceSettingsStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun32181: for (var _fun32181_ip = 0;;) switch (_fun32181_ip) {
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
                        _fun32181_ip = 69;
                        continue _fun32181
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun32181_ip = 105;
                    continue _fun32181;
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
            _fun32182: for (var _fun32182_ip = 0;;) switch (_fun32182_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun32182_ip = 16;
                        continue _fun32182
                    }
                case 9:
                    var1 = _closure1_slot7;
                case 16:
                    _closure1_slot8 = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'shouldIncludePreferredRegion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            var1 = var0.preferredRegions;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getPreferredRegion';
        var4.key = var6;
        var6 = function() {
            _fun32184: for (var _fun32184_ip = 0;;) switch (_fun32184_ip) {
                case 0:
                    var0 = _closure1_slot8;
                    var3 = var0.preferredRegions;
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun32184_ip = 30;
                        continue _fun32184
                    }
                case 24:
                    var2 = 0;
                    var1 = var3[var2];
                case 30:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun32184_ip = 42;
                        continue _fun32184
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
        var6 = 'getPreferredRegions';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            var0 = var0.preferredRegions;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getRegion';
        var4.key = var6;
        var6 = function arg0() {
            _fun32186: for (var _fun32186_ip = 0;;) switch (_fun32186_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun32186_ip = 13;
                        continue _fun32186
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var2 = var3.substr;
                    var1 = var3.search;
                    var0 = /\d/;
                    var1 = var1.bind(var3)(var0);
                    var0 = 0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'shouldPerformLatencyTest';
        var4.key = var6;
        var5 = function arg0() {
            _fun32188: for (var _fun32188_ip = 0;;) switch (_fun32188_ip) {
                case 0:
                    var0 = _closure1_slot8;
                    var0 = var0.preferredRegions;
                    var2 = null;
                    var0 = var2 === var0;
                    if (var0) {
                        _fun32188_ip = 80;
                        continue _fun32188
                    }
                case 22:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.isEqual;
                    var3 = _closure1_slot8;
                    var4 = var3.lastGeoRankedOrder;
                    if (!(var2 == var4)) {
                        _fun32188_ip = 68;
                        continue _fun32188
                    }
                case 64:
                    var4 = new Array(0);
                case 68:
                    var3 = arg0;
                    var3 = var5.bind(var6)(var3, var4);
                    var0 = !var3;
                case 80:
                    if (var0) {
                        _fun32188_ip = 134;
                        continue _fun32188
                    }
                case 83:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot8;
                    var4 = var4.lastTestTimestamp;
                    var5 = var2 != var4;
                    var2 = 0;
                    if (!var5) {
                        _fun32188_ip = 122;
                        continue _fun32188
                    }
                case 119:
                    var2 = var4;
                case 122:
                    var2 = var3 - var2;
                    var1 = _closure1_slot9;
                    var0 = var2 >= var1;
                case 134:
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'RTCRegionStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = new Array(1);
    var7 = function(arg0) { // Environment: var3
        _fun32189: for (var _fun32189_ip = 0;;) switch (_fun32189_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.preferredRegion;
                if (var1) {
                    _fun32189_ip = 22;
                    continue _fun32189
                }
            case 12:
                var1 = null;
                var0.preferredRegions = var1;
                _fun32189_ip = 42;
                continue _fun32189;
            case 22:
                var2 = var0.preferredRegion;
                var1 = new Array(1);
                var1[0] = var2;
                var0.preferredRegions = var1;
            case 42:
                var1 = delete var0.preferredRegion;
                return var0;
        }
    };
    var1[0] = var7;
    var6.migrations = var1;
    var1 = 8;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var3 = function arg0() {
        _fun32190: for (var _fun32190_ip = 0;;) switch (_fun32190_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.latencyRankedRegions;
                var2 = var1.length;
                var1 = 0;
                if (!(var2 > var1)) {
                    _fun32190_ip = 55;
                    continue _fun32190
                }
            case 20:
                var3 = _closure1_slot8;
                var2 = var0.geoRankedRegions;
                var3.lastGeoRankedOrder = var2;
                var1 = _closure1_slot8;
                var0 = var0.latencyRankedRegions;
                var1.preferredRegions = var0;
            case 55:
                var1 = _closure1_slot8;
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                var1.lastTestTimestamp = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.RTC_LATENCY_TEST_COMPLETE = var3;
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
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/RTCRegionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 667, 22, 566, 806, 2]);