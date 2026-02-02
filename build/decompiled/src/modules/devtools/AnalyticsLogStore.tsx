// modules/devtools/AnalyticsLogStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun85744: for (var _fun85744_ip = 0;;) switch (_fun85744_ip) {
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
                _fun85744_ip = 76;
                continue _fun85744;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun85747: for (var _fun85747_ip = 0;;) switch (_fun85747_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun85747_ip = 28;
                    continue _fun85747
                }
            case 9:
                var1 = _closure1_slot7;
                var0 = var1.getId;
                var0 = var0.bind(var1)();
                _fun85747_ip = 64;
                continue _fun85747;
            case 28:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.extractId;
                var0 = var1.bind(var2)(var3);
            case 64:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
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
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var _closure1_slot9 = var1;
    var7 = new Array(0);
    var _closure1_slot10 = var7;
    var _closure1_slot11 = var1;
    var1 = new Array(0);
    var _closure1_slot12 = var1;
    var1 = false;
    var _closure1_slot13 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun85749: for (var _fun85749_ip = 0;;) switch (_fun85749_ip) {
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun85749_ip = 69;
                        continue _fun85749
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun85749_ip = 105;
                    continue _fun85749;
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
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot7;
            var0 = _closure1_slot8;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'loggedEvents';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'loggedEventsVersion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'loggedTriggers';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'trackTriggers';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'AnalyticsLogStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun85755: for (var _fun85755_ip = 0;;) switch (_fun85755_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.event;
                var0 = var1.properties;
                var6 = var1.fingerprint;
                var2 = _closure1_slot8;
                var2 = var2.isDeveloper;
                if (!var2) {
                    _fun85755_ip = 213;
                    continue _fun85755
                }
            case 40:
                var4 = _closure1_slot10;
                var3 = var4.push;
                var2 = {};
                var7 = _closure1_slot9;
                var8 = parseFloat(var7);
                var7 = var8 + 1;
                _closure1_slot9 = var7;
                var7 = var8.toString;
                var7 = var7.bind(var8)();
                var2.key = var7;
                var2.event = var5;
                var2.properties = var0;
                var5 = _closure1_slot15;
                var0 = undefined;
                var0 = var5.bind(var0)(var6);
                var2.fingerprint = var0;
                var0 = global;
                var5 = var0.Date;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = var6;
                var5 = new var10[var5](var9);
                var5 = var5 instanceof Object ? var5 : var6;
                var2.timestamp = var5;
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot11;
                var2 = var2 + 1;
                _closure1_slot11 = var2;
                var2 = _closure1_slot10;
                var3 = var2.length;
                var2 = 500;
                if (!(var3 > var2)) {
                    _fun85755_ip = 213;
                    continue _fun85755
                }
            case 172:
                var3 = _closure1_slot10;
                var2 = var3.slice;
                var5 = var0.Math;
                var4 = var5.floor;
                var0 = 250;
                var0 = var4.bind(var5)(var0);
                var0 = -var0;
                var0 = var2.bind(var3)(var0);
                _closure1_slot10 = var0;
            case 213:
                var0 = undefined;
                return var0;
        }
    };
    var1.TRACK = var8;
    var8 = function arg0() {
        _fun85756: for (var _fun85756_ip = 0;;) switch (_fun85756_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.experimentId;
                var9 = var0.descriptor;
                var8 = var0.exposureType;
                var7 = var0.excluded;
                var6 = var0.location;
                var5 = var0.previouslyTracked;
                var1 = _closure1_slot8;
                var1 = var1.isDeveloper;
                if (!var1) {
                    _fun85756_ip = 58;
                    continue _fun85756
                }
            case 54:
                var1 = _closure1_slot13;
            case 58:
                if (!var1) {
                    _fun85756_ip = 212;
                    continue _fun85756
                }
            case 64:
                var15 = _closure1_slot12;
                var2 = new Array(1);
                var14 = 0;
                var16 = var2;
                var4 = arraySpread(var16, var15, var14);
                var3 = {};
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var11 = 8;
                var12 = var12[var11];
                var11 = undefined;
                var12 = var13.bind(var11)(var12);
                var11 = var12.v4;
                var11 = var11.bind(var12)();
                var3.key = var11;
                var3.experimentId = var10;
                var3.descriptor = var9;
                var3.exposureType = var8;
                var3.excluded = var7;
                var3.location = var6;
                var3.previouslyTracked = var5;
                var5 = global;
                var5 = var5.Date;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var17 = var6;
                var5 = new var17[var5](var16);
                var5 = var5 instanceof Object ? var5 : var6;
                var3.timestamp = var5;
                var2[var4] = var3;
                var3 = 1;
                var3 = var4 + var3;
                _closure1_slot12 = var2;
                var3 = var2.length;
                var2 = 500;
                var1 = var3 > var2;
            case 212:
                if (!var1) {
                    _fun85756_ip = 229;
                    continue _fun85756
                }
            case 215:
                var1 = _closure1_slot12;
                var0 = var1.shift;
                var0 = var0.bind(var1)();
            case 229:
                var0 = undefined;
                return var0;
        }
    };
    var1.TRACK_TRIGGER = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.enabled;
        _closure1_slot13 = var1;
        var0 = undefined;
        return var0;
    };
    var1.SET_TRACK_TRIGGERS = var8;
    var3 = function() {
        var0 = new Array(0);
        _closure1_slot10 = var0;
        var0 = _closure1_slot11;
        var0 = var0 + 1;
        _closure1_slot11 = var0;
        var0 = new Array(0);
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.ANALYTICS_LOG_CLEAR = var3;
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/AnalyticsLogStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 10353, 490, 491, 566, 806, 2]);