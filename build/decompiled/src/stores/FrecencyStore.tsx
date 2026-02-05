// stores/FrecencyStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun49634: for (var _fun49634_ip = 0;;) switch (_fun49634_ip) {
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
                _fun49634_ip = 74;
                continue _fun49634;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var9 = function arg0() {
        _fun49637: for (var _fun49637_ip = 0;;) switch (_fun49637_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var7 = var0.channelId;
                var3 = _closure1_slot15;
                var1 = false;
                if (!(var7 !== var3)) {
                    _fun49637_ip = 137;
                    continue _fun49637
                }
            case 26:
                var3 = null;
                var6 = var3 != var7;
                var4 = null;
                if (!var6) {
                    _fun49637_ip = 40;
                    continue _fun49637
                }
            case 37:
                var4 = var7;
            case 40:
                _closure1_slot15 = var4;
                var3 = var3 != var7;
                if (!var3) {
                    _fun49637_ip = 65;
                    continue _fun49637
                }
            case 51:
                var6 = _closure1_slot12;
                var4 = var6.test;
                var3 = var4.bind(var6)(var7);
            case 65:
                var0 = false;
                if (!var3) {
                    _fun49637_ip = 134;
                    continue _fun49637
                }
            case 70:
                var4 = _closure1_slot14;
                var3 = var4.track;
                var3 = var3.bind(var4)(var7);
                var3 = _closure1_slot17;
                var6 = var3.pendingUsages;
                var4 = var6.push;
                var3 = {};
                var3.key = var7;
                var7 = global;
                var8 = var7.Date;
                var7 = var8.now;
                var7 = var7.bind(var8)();
                var3.timestamp = var7;
                var3 = var4.bind(var6)(var3);
                var0 = true;
            case 134:
                var1 = var0;
            case 137:
                var3 = _closure1_slot16;
                var0 = var1;
                if (!(var5 !== var3)) {
                    _fun49637_ip = 257;
                    continue _fun49637
                }
            case 148:
                var3 = null;
                var6 = var3 != var5;
                var4 = null;
                if (!var6) {
                    _fun49637_ip = 162;
                    continue _fun49637
                }
            case 159:
                var4 = var5;
            case 162:
                _closure1_slot16 = var4;
                var3 = var3 != var5;
                if (!var3) {
                    _fun49637_ip = 187;
                    continue _fun49637
                }
            case 173:
                var6 = _closure1_slot12;
                var4 = var6.test;
                var3 = var4.bind(var6)(var5);
            case 187:
                if (!var3) {
                    _fun49637_ip = 254;
                    continue _fun49637
                }
            case 190:
                var4 = _closure1_slot14;
                var3 = var4.track;
                var3 = var3.bind(var4)(var5);
                var2 = _closure1_slot17;
                var4 = var2.pendingUsages;
                var3 = var4.push;
                var2 = {};
                var2.key = var5;
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var2.timestamp = var5;
                var2 = var3.bind(var4)(var2);
                var1 = true;
            case 254:
                var0 = var1;
            case 257:
                return var0;
        }
    };
    var0 = function() {
        _fun49638: for (var _fun49638_ip = 0;;) switch (_fun49638_ip) {
            case 0:
                var0 = _closure1_slot7;
                var0 = var0.frecencyWithoutFetchingLatest;
                var3 = var0.guildAndChannelFrecency;
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                var7 = undefined;
                if (var4) {
                    _fun49638_ip = 38;
                    continue _fun49638
                }
            case 32:
                var7 = var3.guildAndChannels;
            case 38:
                if (!(var2 != var7)) {
                    _fun49638_ip = 109;
                    continue _fun49638
                }
            case 42:
                var4 = _closure1_slot14;
                var3 = var4.overwriteHistory;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 13;
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
                var1 = _closure1_slot17;
                var1 = var1.pendingUsages;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            case 109:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
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
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var8 = 10;
    var1 = var6[var8];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ID_REGEX;
    var _closure1_slot12 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.UserSettingsTypes;
    var _closure1_slot13 = var1;
    var1 = 12;
    var1 = var6[var1];
    var10 = var7.bind(var0)(var1);
    var3 = {};
    var1 = function() {
        var0 = 100;
        return var0;
    };
    var3.computeBonus = var1;
    var1 = function arg0() {
        _fun49642: for (var _fun49642_ip = 0;;) switch (_fun49642_ip) {
            case 0:
                var3 = arg0;
                var0 = 100;
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun49642_ip = 88;
                    continue _fun49642
                }
            case 12:
                var2 = 1;
                if (!(var3 >= var2)) {
                    _fun49642_ip = 32;
                    continue _fun49642
                }
            case 19:
                var1 = 2;
                var1 = var3 < var1;
                var0 = 70;
                if (var1) {
                    _fun49642_ip = 88;
                    continue _fun49642
                }
            case 32:
                var1 = 2;
                if (!(var3 >= var1)) {
                    _fun49642_ip = 52;
                    continue _fun49642
                }
            case 39:
                var1 = 4;
                var1 = var3 < var1;
                var0 = 50;
                if (var1) {
                    _fun49642_ip = 88;
                    continue _fun49642
                }
            case 52:
                var1 = 4;
                if (!(var3 >= var1)) {
                    _fun49642_ip = 72;
                    continue _fun49642
                }
            case 59:
                var1 = 7;
                var1 = var3 < var1;
                var0 = 30;
                if (var1) {
                    _fun49642_ip = 88;
                    continue _fun49642
                }
            case 72:
                var1 = 7;
                var1 = var3 >= var1;
                var0 = var2;
                if (!var1) {
                    _fun49642_ip = 88;
                    continue _fun49642
                }
            case 85:
                var0 = 10;
            case 88:
                return var0;
        }
    };
    var3.computeWeight = var1;
    var1 = function arg0() {
        _fun49643: for (var _fun49643_ip = 0;;) switch (_fun49643_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot9;
                var0 = var2.getGuild;
                var0 = var0.bind(var2)(var4);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun49643_ip = 40;
                    continue _fun49643
                }
            case 26:
                var5 = _closure1_slot8;
                var3 = var5.getChannel;
                var0 = var3.bind(var5)(var4);
            case 40:
                if (!(var2 == var0)) {
                    _fun49643_ip = 69;
                    continue _fun49643
                }
            case 44:
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = var3.getDMFromUserId;
                var1 = var1.bind(var3)(var4);
                var0 = var2.bind(var3)(var1);
            case 69:
                return var0;
        }
    };
    var3.lookupKey = var1;
    var1 = function() {
        var0 = undefined;
        return var0;
    };
    var3.afterCompute = var1;
    var1 = 100;
    var3.numFrequentlyItems = var1;
    var3.maxSamples = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var10
        }
    });
    var15 = var8;
    var14 = var3;
    var3 = new var15[var10](var14, var13);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot14 = var3;
    var3 = null;
    var _closure1_slot15 = var3;
    var _closure1_slot16 = var3;
    var3 = {};
    var8 = new Array(0);
    var3.pendingUsages = var8;
    var _closure1_slot17 = var3;
    var3 = 14;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun49646: for (var _fun49646_ip = 0;;) switch (_fun49646_ip) {
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
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun49646_ip = 69;
                        continue _fun49646
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun49646_ip = 105;
                    continue _fun49646;
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
            _fun49647: for (var _fun49647_ip = 0;;) switch (_fun49647_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var8 = var3.waitFor;
                    var13 = _closure1_slot8;
                    var12 = _closure1_slot9;
                    var11 = _closure1_slot10;
                    var10 = _closure1_slot11;
                    var9 = _closure1_slot7;
                    var14 = var3;
                    var2 = var14[var8](var13, var12, var11, var10, var9, var8);
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun49647_ip = 81;
                        continue _fun49647
                    }
                case 48:
                    var5 = var1.pendingUsages;
                    var4 = var5.filter;
                    var2 = function(arg0) { // Environment: var2
                        _fun49648: for (var _fun49648_ip = 0;;) switch (_fun49648_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = null;
                                var0 = var0 != var1;
                                if (!var0) {
                                    _fun49648_ip = 34;
                                    continue _fun49648
                                }
                            case 12:
                                var3 = _closure1_slot12;
                                var2 = var3.test;
                                var1 = var1.key;
                                var0 = var2.bind(var3)(var1);
                            case 34:
                                return var0;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var1.pendingUsages = var2;
                    _closure1_slot17 = var1;
                case 81:
                    var2 = var3.syncWith;
                    var4 = _closure1_slot7;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot19;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasPendingUsage';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            var0 = var0.pendingUsages;
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'frecencyWithoutFetchingLatest';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getFrequentlyWithoutFetchingLatest';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            var0 = var0.frequently;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getScoreWithoutFetchingLatest';
        var4.key = var6;
        var6 = function arg0() {
            _fun49653: for (var _fun49653_ip = 0;;) switch (_fun49653_ip) {
                case 0:
                    var2 = _closure1_slot14;
                    var1 = var2.getFrecency;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun49653_ip = 37;
                        continue _fun49653
                    }
                case 34:
                    var0 = var1;
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getScoreForDMWithoutFetchingLatest';
        var4.key = var6;
        var6 = function arg0() {
            _fun49654: for (var _fun49654_ip = 0;;) switch (_fun49654_ip) {
                case 0:
                    var3 = this;
                    var2 = _closure1_slot8;
                    var1 = var2.getDMFromUserId;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var1 = var0 != var2;
                    var0 = 0;
                    if (!var1) {
                        _fun49654_ip = 46;
                        continue _fun49654
                    }
                case 35:
                    var1 = var3.getScoreWithoutFetchingLatest;
                    var0 = var1.bind(var3)(var2);
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getMaxScore';
        var4.key = var6;
        var6 = function() {
            var0 = 1000;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getBonusScore';
        var4.key = var6;
        var5 = function() {
            var0 = 100;
            return var0;
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'FrecencyStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = 15;
    var3 = var6[var3];
    var14 = var7.bind(var0)(var3);
    var3 = {};
    var3.CHANNEL_SELECT = var9;
    var3.VOICE_CHANNEL_SELECT = var9;
    var4 = function arg0() {
        _fun49657: for (var _fun49657_ip = 0;;) switch (_fun49657_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var3 = var1.type;
                var0 = var0.wasSaved;
                var2 = _closure1_slot13;
                var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
                var2 = var3 !== var2;
                if (var2) {
                    _fun49657_ip = 43;
                    continue _fun49657
                }
            case 40:
                var2 = !var0;
            case 43:
                var0 = !var2;
                if (var2) {
                    _fun49657_ip = 65;
                    continue _fun49657
                }
            case 49:
                var2 = _closure1_slot17;
                var1 = new Array(0);
                var2.pendingUsages = var1;
                var0 = true;
            case 65:
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
    var15 = var4;
    var13 = var3;
    var3 = new var15[var8](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/FrecencyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MAX_NUM_SELECTED_ITEMS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1310, 1372, 1410, 1670, 3213, 660, 665, 3607, 22, 566, 806, 2]);