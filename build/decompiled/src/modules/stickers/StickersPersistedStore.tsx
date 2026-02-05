// modules/stickers/StickersPersistedStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun49498: for (var _fun49498_ip = 0;;) switch (_fun49498_ip) {
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
                _fun49498_ip = 74;
                continue _fun49498;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var0 = function() {
        _fun49501: for (var _fun49501_ip = 0;;) switch (_fun49501_ip) {
            case 0:
                var0 = _closure1_slot7;
                var0 = var0.frecencyWithoutFetchingLatest;
                var3 = var0.stickerFrecency;
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                var7 = undefined;
                if (var4) {
                    _fun49501_ip = 38;
                    continue _fun49501
                }
            case 32:
                var7 = var3.stickers;
            case 38:
                if (!(var2 != var7)) {
                    _fun49501_ip = 109;
                    continue _fun49501
                }
            case 42:
                var4 = _closure1_slot11;
                var3 = var4.overwriteHistory;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 10;
                var2 = var6[var2];
                var6 = var5.bind(var0)(var2);
                var5 = var6.mapValues;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = {};
                    var5 = var0;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = var1.recentUses;
                    var2 = var3.map;
                    var1 = global;
                    var1 = var1.Number;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = 0;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = 'recentUses';
                    var0[var1] = var2;
                    return var0;
                };
                var2 = var5.bind(var6)(var7, var2);
                var1 = _closure1_slot10;
                var1 = var1.pendingUsages;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            case 109:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.UserSettingsTypes;
    var _closure1_slot9 = var1;
    var1 = {};
    var3 = new Array(0);
    var1.pendingUsages = var3;
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.DAY;
    var3 = 9;
    var3 = var6[var3];
    var9 = var7.bind(var0)(var3);
    var3 = {};
    var8 = function() {
        var0 = 100;
        return var0;
    };
    var3.computeBonus = var8;
    var8 = function arg0() {
        var2 = _closure1_slot8;
        var1 = var2.getStickerById;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.lookupKey = var8;
    var8 = function() {
        var0 = undefined;
        return var0;
    };
    var3.afterCompute = var8;
    var8 = 20;
    var3.numFrequentlyItems = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var13 = var8;
    var12 = var3;
    var3 = new var13[var9](var12, var11);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot11 = var3;
    var3 = function() {
        _fun49507: for (var _fun49507_ip = 0;;) switch (_fun49507_ip) {
            case 0:
                var1 = _closure1_slot8;
                var1 = var1.isLoaded;
                if (!var1) {
                    _fun49507_ip = 30;
                    continue _fun49507
                }
            case 16:
                var1 = _closure1_slot11;
                var0 = var1.compute;
                var0 = var0.bind(var1)();
            case 30:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = function() {
        var1 = _closure1_slot12;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun49510: for (var _fun49510_ip = 0;;) switch (_fun49510_ip) {
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
                        _fun49510_ip = 69;
                        continue _fun49510
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun49510_ip = 105;
                    continue _fun49510;
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
            _fun49511: for (var _fun49511_ip = 0;;) switch (_fun49511_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var5 = var3.waitFor;
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot7;
                    var2 = var5.bind(var3)(var4, var2);
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun49511_ip = 39;
                        continue _fun49511
                    }
                case 35:
                    _closure1_slot10 = var1;
                case 39:
                    var4 = var3.syncWith;
                    var1 = _closure1_slot8;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = _closure1_slot13;
                    var1 = var4.bind(var3)(var2, var1);
                    var2 = var3.syncWith;
                    var4 = _closure1_slot7;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot15;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasPendingUsage';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            var0 = var0.pendingUsages;
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'stickerFrecencyWithoutFetchingLatest';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.get = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'StickersPersistedStore';
    var8.displayName = var3;
    var3 = 'StickersPersistedStoreV2';
    var8.persistKey = var3;
    var3 = 12;
    var3 = var6[var3];
    var12 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function arg0() {
        _fun49515: for (var _fun49515_ip = 0;;) switch (_fun49515_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.stickerIds;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun49515_ip = 32;
                    continue _fun49515
                }
            case 15:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var2 = _closure1_slot11;
                    var1 = var2.track;
                    var1 = var1.bind(var2)(var3);
                    var0 = _closure1_slot10;
                    var2 = var0.pendingUsages;
                    var1 = var2.push;
                    var0 = {};
                    var0.key = var3;
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var0.timestamp = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 32:
                var1 = _closure1_slot12;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var3.STICKER_TRACK_USAGE = var9;
    var4 = function arg0() {
        _fun49517: for (var _fun49517_ip = 0;;) switch (_fun49517_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var3 = var1.type;
                var1 = var0.wasSaved;
                var2 = _closure1_slot9;
                var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
                if (!(var3 === var2)) {
                    _fun49517_ip = 58;
                    continue _fun49517
                }
            case 37:
                if (!var1) {
                    _fun49517_ip = 58;
                    continue _fun49517
                }
            case 40:
                var1 = _closure1_slot10;
                var0 = new Array(0);
                var1.pendingUsages = var0;
                var0 = undefined;
                return var0;
            case 58:
                var0 = false;
                return var0;
        }
    };
    var3.USER_SETTINGS_PROTO_UPDATE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var13 = var4;
    var11 = var3;
    var3 = new var13[var8](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/StickersPersistedStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.STICKER_PACK_NEW_TIMESTAMP_THRESHOLD = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1310, 5598, 665, 667, 3607, 22, 566, 806, 2]);