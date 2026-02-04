// modules/user_settings/FrecencyUserSettingsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113153: for (var _fun113153_ip = 0;;) switch (_fun113153_ip) {
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
                _fun113153_ip = 76;
                continue _fun113153;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function() {
        var3 = true;
        _closure1_slot22 = var3;
        var2 = _closure1_slot29;
        var1 = _closure1_slot19;
        var0 = undefined;
        var1 = var2.bind(var0)(var1, var3);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun113157: for (var _fun113157_ip = 0;;) switch (_fun113157_ip) {
            case 0:
                var1 = _closure1_slot22;
                if (!var1) {
                    _fun113157_ip = 26;
                    continue _fun113157
                }
            case 10:
                var2 = arg0;
                var3 = var2.state;
                var2 = 'active';
                var1 = var2 !== var3;
            case 26:
                if (!var1) {
                    _fun113157_ip = 65;
                    continue _fun113157
                }
            case 29:
                var1 = global;
                var3 = var1.clearTimeout;
                var1 = _closure1_slot21;
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = null;
                _closure1_slot21 = var1;
                var1 = _closure1_slot27;
                var0 = false;
                var0 = var1.bind(var2)(var0);
            case 65:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function() {
        _fun113158: for (var _fun113158_ip = 0;;) switch (_fun113158_ip) {
            case 0:
                var1 = _closure1_slot22;
                if (!var1) {
                    _fun113158_ip = 46;
                    continue _fun113158
                }
            case 10:
                var1 = global;
                var3 = var1.clearTimeout;
                var1 = _closure1_slot21;
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = null;
                _closure1_slot21 = var1;
                var1 = _closure1_slot27;
                var0 = false;
                var0 = var1.bind(var2)(var0);
            case 46:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot28;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun113162: for (var _fun113162_ip = 0;;) switch (_fun113162_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113162_ip = 292;
                            continue _fun113162
                        }
                    case 10:
                        var5 = _closure1_slot29;
                        var4 = _closure1_slot20;
                        var1 = undefined;
                        var3 = false;
                        var3 = var5.bind(var1)(var4, var3);
                        var5 = _closure1_slot16;
                        var4 = var5.hasLoaded;
                        var3 = _closure1_slot17;
                        var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
                        var3 = var4.bind(var5)(var3);
                        if (var3) {
                            _fun113162_ip = 227;
                            continue _fun113162
                        }
                    case 62:
                        var4 = _closure1_slot13;
                        var3 = var4.hasPendingUsage;
                        var3 = var3.bind(var4)();
                        if (var3) {
                            _fun113162_ip = 93;
                            continue _fun113162
                        }
                    case 79:
                        var5 = _closure1_slot11;
                        var4 = var5.hasPendingUsage;
                        var3 = var4.bind(var5)();
                    case 93:
                        if (var3) {
                            _fun113162_ip = 110;
                            continue _fun113162
                        }
                    case 96:
                        var5 = _closure1_slot9;
                        var4 = var5.hasPendingUsage;
                        var3 = var4.bind(var5)();
                    case 110:
                        if (var3) {
                            _fun113162_ip = 127;
                            continue _fun113162
                        }
                    case 113:
                        var5 = _closure1_slot10;
                        var4 = var5.hasPendingUsage;
                        var3 = var4.bind(var5)();
                    case 127:
                        if (var3) {
                            _fun113162_ip = 156;
                            continue _fun113162
                        }
                    case 130:
                        var5 = _closure1_slot14;
                        var4 = var5.hasPendingUsage;
                        var4 = var4.bind(var5)();
                        if (!var4) {
                            _fun113162_ip = 153;
                            continue _fun113162
                        }
                    case 147:
                        var5 = arg0;
                        var4 = !var5;
                    case 153:
                        var3 = var4;
                    case 156:
                        if (!var3) {
                            _fun113162_ip = 227;
                            continue _fun113162
                        }
                    case 159:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 16;
                        var6 = var5[var3];
                        var7 = var4.bind(var1)(var6);
                        var6 = var7.markUserSettingsLoadOkayForDevelopment;
                        var6 = var6.bind(var7)();
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.FrecencyUserSettingsActionCreators;
                        var3 = var4.loadIfNecessary;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 218);
                    case 216:
                        return var3;
                    case 218:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (!var4) {
                            _fun113162_ip = 227;
                            continue _fun113162
                        }
                    case 224:
                        return var3;
                    case 227:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 19;
                        var3 = var6[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.forEach;
                        var3 = _closure1_slot0;
                        var2 = 16;
                        var2 = var6[var2];
                        var2 = var3.bind(var1)(var2);
                        var3 = var2.UserSettingsActionCreatorsByType;
                        var2 = function(arg0) { // Environment: var2
                            var1 = arg0;
                            var0 = var1.markDirtyIfHasPendingChange;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    case 292:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun113164: for (var _fun113164_ip = 0;;) switch (_fun113164_ip) {
            case 0:
                var0 = arg1;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot21;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun113164_ip = 41;
                    continue _fun113164
                }
            case 22:
                var0 = global;
                var4 = var0.clearTimeout;
                var3 = _closure1_slot21;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
            case 41:
                var0 = global;
                var4 = var0.setTimeout;
                var0 = undefined;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot27;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = arg0;
                var1 = var4.bind(var0)(var3, var1);
                _closure1_slot21 = var1;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var10 = global;
    var8 = var10.Object;
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
    var8 = 2;
    var3 = var5[var8];
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
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var11 = 10;
    var3 = var5[var11];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_NUM_SELECTED_ITEMS;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsTypes;
    var _closure1_slot17 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FREQUENCY_ITEM_LIMIT;
    var _closure1_slot18 = var3;
    var7 = var10.Math;
    var3 = var7.random;
    var9 = var3.bind(var7)();
    var3 = 15;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.SECOND;
    var7 = var11 * var7;
    var7 = var9 * var7;
    var7 = var11 + var7;
    var _closure1_slot19 = var7;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.HOUR;
    var7 = var8 * var7;
    var9 = var10.Math;
    var8 = var9.floor;
    var12 = var10.Math;
    var10 = var12.random;
    var10 = var10.bind(var12)();
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.MINUTE;
    var3 = var11 * var3;
    var3 = var10 * var3;
    var3 = var8.bind(var9)(var3);
    var3 = var7 + var3;
    var _closure1_slot20 = var3;
    var3 = null;
    var _closure1_slot21 = var3;
    var3 = false;
    var _closure1_slot22 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113167: for (var _fun113167_ip = 0;;) switch (_fun113167_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113167_ip = 84;
                        continue _fun113167
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113167_ip = 118;
                    continue _fun113167;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var3 = _closure1_slot24;
                    var1.POST_CONNECTION_OPEN = var3;
                    var1.CONNECTION_RESUMED = var3;
                    var3 = _closure1_slot26;
                    var1.CONNECTION_CLOSED = var3;
                    var2 = _closure1_slot25;
                    var1.APP_STATE_UPDATE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot5;
        var4 = {};
        var5 = '_initialize';
        var4.key = var5;
        var0 = function() {
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var5 = var3[var1];
            var0 = undefined;
            var5 = var2.bind(var0)(var5);
            var5 = var5.FrecencyUserSettingsActionCreators;
            var7 = var5.beforeSendCallbacks;
            var6 = var7.push;
            var5 = {};
            var8 = function() {
                var0 = false;
                return var0;
            };
            var5.hasChanges = var8;
            var8 = function() {
                var3 = _closure1_slot29;
                var2 = _closure1_slot20;
                var0 = undefined;
                var1 = false;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var5.processProto = var8;
            var5 = var6.bind(var7)(var5);
            var5 = var3[var1];
            var5 = var2.bind(var0)(var5);
            var5 = var5.FrecencyUserSettingsActionCreators;
            var7 = var5.beforeSendCallbacks;
            var6 = var7.push;
            var5 = {};
            var8 = function() {
                _fun113171: for (var _fun113171_ip = 0;;) switch (_fun113171_ip) {
                    case 0:
                        var2 = _closure1_slot13;
                        var0 = var2.hasPendingUsage;
                        var0 = var0.bind(var2)();
                        if (!var0) {
                            _fun113171_ip = 45;
                            continue _fun113171
                        }
                    case 20:
                        var3 = _closure1_slot16;
                        var2 = var3.hasLoaded;
                        var1 = _closure1_slot17;
                        var1 = var1.FRECENCY_AND_FAVORITES_SETTINGS;
                        var0 = var2.bind(var3)(var1);
                    case 45:
                        return var0;
                }
            };
            var5.hasChanges = var8;
            var8 = function arg0() {
                _fun113172: for (var _fun113172_ip = 0;;) switch (_fun113172_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure1_slot13;
                        var2 = var3.hasPendingUsage;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun113172_ip = 48;
                            continue _fun113172
                        }
                    case 23:
                        var5 = _closure1_slot16;
                        var4 = var5.hasLoaded;
                        var3 = _closure1_slot17;
                        var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
                        var2 = var4.bind(var5)(var3);
                    case 48:
                        if (!var2) {
                            _fun113172_ip = 149;
                            continue _fun113172
                        }
                    case 51:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 17;
                        var2 = var5[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var6 = var2.StickerFrecency;
                        var2 = var6.create;
                        var2 = var2.bind(var6)();
                        var1.stickerFrecency = var2;
                        var1 = var1.stickerFrecency;
                        var2 = 18;
                        var2 = var5[var2];
                        var4 = var4.bind(var3)(var2);
                        var3 = var4.serializeUsageHistory;
                        var0 = _closure1_slot13;
                        var0 = var0.stickerFrecencyWithoutFetchingLatest;
                        var2 = var0.usageHistory;
                        var0 = 100;
                        var0 = var3.bind(var4)(var2, var0);
                        var1.stickers = var0;
                    case 149:
                        var0 = undefined;
                        return var0;
                }
            };
            var5.processProto = var8;
            var5 = var6.bind(var7)(var5);
            var5 = var3[var1];
            var5 = var2.bind(var0)(var5);
            var5 = var5.FrecencyUserSettingsActionCreators;
            var7 = var5.beforeSendCallbacks;
            var6 = var7.push;
            var5 = {};
            var8 = function() {
                _fun113173: for (var _fun113173_ip = 0;;) switch (_fun113173_ip) {
                    case 0:
                        var2 = _closure1_slot11;
                        var0 = var2.hasPendingUsage;
                        var0 = var0.bind(var2)();
                        if (!var0) {
                            _fun113173_ip = 45;
                            continue _fun113173
                        }
                    case 20:
                        var3 = _closure1_slot16;
                        var2 = var3.hasLoaded;
                        var1 = _closure1_slot17;
                        var1 = var1.FRECENCY_AND_FAVORITES_SETTINGS;
                        var0 = var2.bind(var3)(var1);
                    case 45:
                        return var0;
                }
            };
            var5.hasChanges = var8;
            var8 = function arg0() {
                _fun113174: for (var _fun113174_ip = 0;;) switch (_fun113174_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure1_slot11;
                        var2 = var3.hasPendingUsage;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun113174_ip = 48;
                            continue _fun113174
                        }
                    case 23:
                        var5 = _closure1_slot16;
                        var4 = var5.hasLoaded;
                        var3 = _closure1_slot17;
                        var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
                        var2 = var4.bind(var5)(var3);
                    case 48:
                        if (!var2) {
                            _fun113174_ip = 231;
                            continue _fun113174
                        }
                    case 54:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 17;
                        var4 = var6[var2];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var7 = var4.EmojiFrecency;
                        var4 = var7.create;
                        var4 = var4.bind(var7)();
                        var1.emojiFrecency = var4;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var4 = var2.EmojiFrecency;
                        var2 = var4.create;
                        var2 = var2.bind(var4)();
                        var1.emojiReactionFrecency = var2;
                        var8 = var1.emojiFrecency;
                        var2 = 18;
                        var4 = var6[var2];
                        var10 = var5.bind(var3)(var4);
                        var9 = var10.serializeUsageHistory;
                        var4 = _closure1_slot11;
                        var4 = var4.emojiFrecencyWithoutFetchingLatest;
                        var7 = var4.usageHistory;
                        var4 = 100;
                        var7 = var9.bind(var10)(var7, var4);
                        var8.emojis = var7;
                        var1 = var1.emojiReactionFrecency;
                        var2 = var6[var2];
                        var3 = var5.bind(var3)(var2);
                        var2 = var3.serializeUsageHistory;
                        var0 = _closure1_slot11;
                        var0 = var0.emojiReactionFrecencyWithoutFetchingLatest;
                        var0 = var0.usageHistory;
                        var0 = var2.bind(var3)(var0, var4);
                        var1.emojis = var0;
                    case 231:
                        var0 = undefined;
                        return var0;
                }
            };
            var5.processProto = var8;
            var5 = var6.bind(var7)(var5);
            var5 = var3[var1];
            var5 = var2.bind(var0)(var5);
            var5 = var5.FrecencyUserSettingsActionCreators;
            var7 = var5.beforeSendCallbacks;
            var6 = var7.push;
            var5 = {};
            var8 = function() {
                _fun113175: for (var _fun113175_ip = 0;;) switch (_fun113175_ip) {
                    case 0:
                        var2 = _closure1_slot12;
                        var0 = var2.hasPendingUsage;
                        var0 = var0.bind(var2)();
                        if (!var0) {
                            _fun113175_ip = 45;
                            continue _fun113175
                        }
                    case 20:
                        var3 = _closure1_slot16;
                        var2 = var3.hasLoaded;
                        var1 = _closure1_slot17;
                        var1 = var1.FRECENCY_AND_FAVORITES_SETTINGS;
                        var0 = var2.bind(var3)(var1);
                    case 45:
                        return var0;
                }
            };
            var5.hasChanges = var8;
            var8 = function arg0() {
                _fun113176: for (var _fun113176_ip = 0;;) switch (_fun113176_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure1_slot12;
                        var2 = var3.hasPendingUsage;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun113176_ip = 48;
                            continue _fun113176
                        }
                    case 23:
                        var5 = _closure1_slot16;
                        var4 = var5.hasLoaded;
                        var3 = _closure1_slot17;
                        var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
                        var2 = var4.bind(var5)(var3);
                    case 48:
                        if (!var2) {
                            _fun113176_ip = 190;
                            continue _fun113176
                        }
                    case 54:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 19;
                        var2 = var4[var2];
                        var4 = undefined;
                        var5 = var3.bind(var4)(var2);
                        var3 = var5.isEmpty;
                        var2 = _closure1_slot12;
                        var2 = var2.playedSoundHistory;
                        var2 = var3.bind(var5)(var2);
                        if (var2) {
                            _fun113176_ip = 190;
                            continue _fun113176
                        }
                    case 100:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 17;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var6 = var2.PlayedSoundFrecency;
                        var2 = var6.create;
                        var2 = var2.bind(var6)();
                        var1.playedSoundFrecency = var2;
                        var1 = var1.playedSoundFrecency;
                        var2 = 18;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.serializeUsageHistory;
                        var0 = _closure1_slot12;
                        var2 = var0.playedSoundHistory;
                        var0 = 100;
                        var0 = var3.bind(var4)(var2, var0);
                        var1.playedSounds = var0;
                    case 190:
                        var0 = undefined;
                        return var0;
                }
            };
            var5.processProto = var8;
            var5 = var6.bind(var7)(var5);
            var5 = var3[var1];
            var5 = var2.bind(var0)(var5);
            var5 = var5.FrecencyUserSettingsActionCreators;
            var7 = var5.beforeSendCallbacks;
            var6 = var7.push;
            var5 = {};
            var8 = function() {
                _fun113177: for (var _fun113177_ip = 0;;) switch (_fun113177_ip) {
                    case 0:
                        var2 = _closure1_slot9;
                        var0 = var2.hasPendingUsage;
                        var0 = var0.bind(var2)();
                        if (!var0) {
                            _fun113177_ip = 45;
                            continue _fun113177
                        }
                    case 20:
                        var3 = _closure1_slot16;
                        var2 = var3.hasLoaded;
                        var1 = _closure1_slot17;
                        var1 = var1.FRECENCY_AND_FAVORITES_SETTINGS;
                        var0 = var2.bind(var3)(var1);
                    case 45:
                        return var0;
                }
            };
            var5.hasChanges = var8;
            var8 = function arg0() {
                _fun113178: for (var _fun113178_ip = 0;;) switch (_fun113178_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure1_slot9;
                        var2 = var3.hasPendingUsage;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun113178_ip = 48;
                            continue _fun113178
                        }
                    case 23:
                        var5 = _closure1_slot16;
                        var4 = var5.hasLoaded;
                        var3 = _closure1_slot17;
                        var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
                        var2 = var4.bind(var5)(var3);
                    case 48:
                        if (!var2) {
                            _fun113178_ip = 158;
                            continue _fun113178
                        }
                    case 51:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 17;
                        var2 = var5[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var6 = var2.ApplicationCommandFrecency;
                        var2 = var6.create;
                        var2 = var2.bind(var6)();
                        var1.applicationCommandFrecency = var2;
                        var1 = var1.applicationCommandFrecency;
                        var2 = 18;
                        var2 = var5[var2];
                        var4 = var4.bind(var3)(var2);
                        var3 = var4.serializeUsageHistory;
                        var2 = _closure1_slot9;
                        var0 = var2.getCommandFrecencyWithoutLoadingLatest;
                        var0 = var0.bind(var2)();
                        var2 = var0.usageHistory;
                        var0 = 500;
                        var0 = var3.bind(var4)(var2, var0);
                        var1.applicationCommands = var0;
                    case 158:
                        var0 = undefined;
                        return var0;
                }
            };
            var5.processProto = var8;
            var5 = var6.bind(var7)(var5);
            var5 = var3[var1];
            var5 = var2.bind(var0)(var5);
            var5 = var5.FrecencyUserSettingsActionCreators;
            var7 = var5.beforeSendCallbacks;
            var6 = var7.push;
            var5 = {};
            var8 = function() {
                _fun113179: for (var _fun113179_ip = 0;;) switch (_fun113179_ip) {
                    case 0:
                        var2 = _closure1_slot10;
                        var0 = var2.hasPendingUsage;
                        var0 = var0.bind(var2)();
                        if (!var0) {
                            _fun113179_ip = 45;
                            continue _fun113179
                        }
                    case 20:
                        var3 = _closure1_slot16;
                        var2 = var3.hasLoaded;
                        var1 = _closure1_slot17;
                        var1 = var1.FRECENCY_AND_FAVORITES_SETTINGS;
                        var0 = var2.bind(var3)(var1);
                    case 45:
                        return var0;
                }
            };
            var5.hasChanges = var8;
            var8 = function arg0() {
                _fun113180: for (var _fun113180_ip = 0;;) switch (_fun113180_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure1_slot10;
                        var2 = var3.hasPendingUsage;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun113180_ip = 48;
                            continue _fun113180
                        }
                    case 23:
                        var5 = _closure1_slot16;
                        var4 = var5.hasLoaded;
                        var3 = _closure1_slot17;
                        var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
                        var2 = var4.bind(var5)(var3);
                    case 48:
                        if (!var2) {
                            _fun113180_ip = 154;
                            continue _fun113180
                        }
                    case 51:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 17;
                        var2 = var5[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var6 = var2.ApplicationFrecency;
                        var2 = var6.create;
                        var2 = var2.bind(var6)();
                        var1.applicationFrecency = var2;
                        var1 = var1.applicationFrecency;
                        var2 = 18;
                        var2 = var5[var2];
                        var4 = var4.bind(var3)(var2);
                        var3 = var4.serializeUsageHistory;
                        var5 = _closure1_slot10;
                        var2 = var5.getApplicationFrecencyWithoutLoadingLatest;
                        var2 = var2.bind(var5)();
                        var2 = var2.usageHistory;
                        var0 = _closure1_slot18;
                        var0 = var3.bind(var4)(var2, var0);
                        var1.applications = var0;
                    case 154:
                        var0 = undefined;
                        return var0;
                }
            };
            var5.processProto = var8;
            var5 = var6.bind(var7)(var5);
            var1 = var3[var1];
            var1 = var2.bind(var0)(var1);
            var1 = var1.FrecencyUserSettingsActionCreators;
            var3 = var1.beforeSendCallbacks;
            var2 = var3.push;
            var1 = {};
            var5 = function() {
                _fun113181: for (var _fun113181_ip = 0;;) switch (_fun113181_ip) {
                    case 0:
                        var2 = _closure1_slot14;
                        var0 = var2.hasPendingUsage;
                        var0 = var0.bind(var2)();
                        if (!var0) {
                            _fun113181_ip = 45;
                            continue _fun113181
                        }
                    case 20:
                        var3 = _closure1_slot16;
                        var2 = var3.hasLoaded;
                        var1 = _closure1_slot17;
                        var1 = var1.FRECENCY_AND_FAVORITES_SETTINGS;
                        var0 = var2.bind(var3)(var1);
                    case 45:
                        return var0;
                }
            };
            var1.hasChanges = var5;
            var4 = function arg0() {
                _fun113182: for (var _fun113182_ip = 0;;) switch (_fun113182_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure1_slot14;
                        var2 = var3.hasPendingUsage;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun113182_ip = 48;
                            continue _fun113182
                        }
                    case 23:
                        var5 = _closure1_slot16;
                        var4 = var5.hasLoaded;
                        var3 = _closure1_slot17;
                        var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
                        var2 = var4.bind(var5)(var3);
                    case 48:
                        if (!var2) {
                            _fun113182_ip = 150;
                            continue _fun113182
                        }
                    case 51:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 17;
                        var2 = var5[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var6 = var2.GuildAndChannelFrecency;
                        var2 = var6.create;
                        var2 = var2.bind(var6)();
                        var1.guildAndChannelFrecency = var2;
                        var1 = var1.guildAndChannelFrecency;
                        var2 = 18;
                        var2 = var5[var2];
                        var4 = var4.bind(var3)(var2);
                        var3 = var4.serializeUsageHistory;
                        var2 = _closure1_slot14;
                        var2 = var2.frecencyWithoutFetchingLatest;
                        var2 = var2.usageHistory;
                        var0 = _closure1_slot15;
                        var0 = var3.bind(var4)(var2, var0);
                        var1.guildAndChannels = var0;
                    case 150:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.processProto = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
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
    var16 = var3;
    var1 = new var16[var1](var15);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/FrecencyUserSettingsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 4676, 4675, 4737, 8513, 5593, 5598, 1310, 665, 3485, 667, 1355, 1343, 1344, 22, 4299, 2]);