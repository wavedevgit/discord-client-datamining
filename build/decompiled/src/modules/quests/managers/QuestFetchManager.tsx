// modules/quests/managers/QuestFetchManager.tsx
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
        _fun118031: for (var _fun118031_ip = 0;;) switch (_fun118031_ip) {
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
                _fun118031_ip = 76;
                continue _fun118031;
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
    var8 = 5;
    var3 = var5[var8];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot9 = var3;
    var3 = 7;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.DAY;
    var _closure1_slot10 = var7;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var9 = var7.MINUTE;
    var7 = 30;
    var7 = var7 * var9;
    var _closure1_slot11 = var7;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.SECOND;
    var7 = var8 * var7;
    var _closure1_slot12 = var7;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.MINUTE;
    var7 = var8 * var7;
    var _closure1_slot13 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.HOUR;
    var3 = 17;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun118035: for (var _fun118035_ip = 0;;) switch (_fun118035_ip) {
                case 0:
                    var5 = this;
                    var2 = 0;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun118035_ip = 88;
                        continue _fun118035
                    }
                case 75:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun118035_ip = 122;
                    continue _fun118035;
                case 88:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 122:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var0.instantiatedAt = var3;
                    var3 = null;
                    var0.initialFetchTimerId = var3;
                    var0.initialTakeoverFetchTimerId = var3;
                    var0.recurringFetchTimerId = var3;
                    var0.lastFetchAttemptedAt = var2;
                    var0.lastFetchedQuestForLocaleChangeAt = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = global;
                        var2 = var0.Date;
                        var0 = var2.now;
                        var0 = var0.bind(var2)();
                        var1.lastFetchAttemptedAt = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleQuestsFetchCurrentQuestsBegin = var2;
                    var2 = function() { // Environment: var1
                        _fun118037: for (var _fun118037_ip = 0;;) switch (_fun118037_ip) {
                            case 0:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var0 = 8;
                                var2 = var9[var0];
                                var0 = undefined;
                                var5 = var8.bind(var0)(var2);
                                var3 = var5.getIsEligibleForFetchQuestOnPostConnectionOpen;
                                var2 = {};
                                var10 = _closure1_slot9;
                                var6 = var10.QUESTS_MANAGER;
                                var2.location = var6;
                                var2 = var3.bind(var5)(var2);
                                var _closure4_slot0 = var2;
                                var3 = global;
                                var11 = var3.window;
                                var6 = var11.clearTimeout;
                                var7 = _closure3_slot0;
                                var5 = var7.initialFetchTimerId;
                                var5 = var6.bind(var11)(var5);
                                var11 = var3.window;
                                var6 = var11.clearTimeout;
                                var5 = var7.initialTakeoverFetchTimerId;
                                var5 = var6.bind(var11)(var5);
                                var11 = var3.window;
                                var6 = var11.clearTimeout;
                                var5 = var7.recurringFetchTimerId;
                                var5 = var6.bind(var11)(var5);
                                var12 = var3.window;
                                var11 = var12.setInterval;
                                var6 = _closure1_slot11;
                                var5 = function() { // Environment: var1
                                    _fun118038: for (var _fun118038_ip = 0;;) switch (_fun118038_ip) {
                                        case 0:
                                            var0 = global;
                                            var1 = var0.Date;
                                            var0 = var1.now;
                                            var2 = var0.bind(var1)();
                                            var1 = _closure3_slot0;
                                            var1 = var1.lastFetchAttemptedAt;
                                            var2 = var2 - var1;
                                            var1 = _closure1_slot10;
                                            if (!(var2 > var1)) {
                                                _fun118038_ip = 66;
                                                continue _fun118038
                                            }
                                        case 45:
                                            var2 = _closure3_slot0;
                                            var1 = var2._fetch;
                                            var0 = 'post_connect_recurring';
                                            var0 = var1.bind(var2)(var0);
                                        case 66:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var5 = var11.bind(var12)(var5, var6);
                                var7.recurringFetchTimerId = var5;
                                var11 = var3.Math;
                                var6 = var11.floor;
                                var12 = var3.Math;
                                var5 = var12.random;
                                var12 = var5.bind(var12)();
                                var5 = _closure1_slot12;
                                var5 = var12 * var5;
                                var5 = var6.bind(var11)(var5);
                                var _closure4_slot1 = var5;
                                var12 = var3.window;
                                var11 = var12.setTimeout;
                                var6 = function() { // Environment: var1
                                    _fun118039: for (var _fun118039_ip = 0;;) switch (_fun118039_ip) {
                                        case 0:
                                            var0 = global;
                                            var1 = var0.Date;
                                            var0 = var1.now;
                                            var2 = var0.bind(var1)();
                                            var1 = _closure4_slot1;
                                            var3 = var2 - var1;
                                            var2 = _closure1_slot8;
                                            var2 = var2.lastFetchedCurrentQuests;
                                            if (!(!(var3 < var2))) {
                                                _fun118039_ip = 95;
                                                continue _fun118039
                                            }
                                        case 45:
                                            var0 = _closure4_slot0;
                                            if (var0) {
                                                _fun118039_ip = 68;
                                                continue _fun118039
                                            }
                                        case 52:
                                            var1 = _closure1_slot8;
                                            var2 = var1.lastFetchedCurrentQuests;
                                            var1 = 0;
                                            var0 = var1 === var2;
                                        case 68:
                                            if (!var0) {
                                                _fun118039_ip = 95;
                                                continue _fun118039
                                            }
                                        case 71:
                                            var2 = _closure3_slot0;
                                            var1 = var2._fetch;
                                            var0 = 'post_connect_initial';
                                            var0 = var1.bind(var2)(var0);
                                        case 95:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var6 = var11.bind(var12)(var6, var5);
                                var7.initialFetchTimerId = var6;
                                var6 = 9;
                                var7 = var9[var6];
                                var7 = var8.bind(var0)(var7);
                                var12 = var7.QuestHomeTakeoverRolloutExperiment;
                                var11 = var12.getConfig;
                                var7 = {};
                                var13 = var10.QUESTS_MANAGER;
                                var7.location = var13;
                                var7 = var11.bind(var12)(var7);
                                var7 = var7.enabled;
                                var6 = var9[var6];
                                var6 = var8.bind(var0)(var6);
                                var9 = var6.FetchQuestHomeTakeoverOnConnectionOpenExperiment;
                                var8 = var9.getConfig;
                                var6 = {};
                                var10 = var10.QUESTS_MANAGER;
                                var6.location = var10;
                                var6 = var8.bind(var9)(var6);
                                var6 = var6.enabled;
                                if (!var7) {
                                    _fun118037_ip = 476;
                                    continue _fun118037
                                }
                            case 341:
                                if (!var6) {
                                    _fun118037_ip = 476;
                                    continue _fun118037
                                }
                            case 347:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var6 = 10;
                                var6 = var8[var6];
                                var8 = var7.bind(var0)(var6);
                                var7 = var8.getIsEligibleForQuests;
                                var6 = {};
                                var9 = _closure1_slot9;
                                var9 = var9.QUESTS_MANAGER;
                                var6.location = var9;
                                var6 = var7.bind(var8)(var6);
                                if (!var6) {
                                    _fun118037_ip = 476;
                                    continue _fun118037
                                }
                            case 397:
                                var7 = var3.Math;
                                var6 = var7.floor;
                                var9 = var3.Math;
                                var8 = var9.random;
                                var8 = var8.bind(var9)();
                                var4 = _closure1_slot12;
                                var4 = var8 * var4;
                                var4 = var6.bind(var7)(var4);
                                var5 = var5 + var4;
                                var2 = _closure3_slot0;
                                var4 = var3.window;
                                var3 = var4.setTimeout;
                                var1 = function() { // Environment: var1
                                    _fun118040: for (var _fun118040_ip = 0;;) switch (_fun118040_ip) {
                                        case 0: // try_start_0
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 11;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var1 = var2.bind(var0)(var1);
                                            var0 = var1.fetchQuestHomeTakeover;
                                            var0 = var0.bind(var1)();
                                        case 35: // try_end0
                                            _fun118040_ip = 39;
                                            continue _fun118040;
                                        case 37: // catch_target0
                                            CatchBlockStart(arg_register = 0);
                                        case 39:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var3.bind(var4)(var1, var5);
                                var2.initialTakeoverFetchTimerId = var1;
                            case 476:
                                return var0;
                        }
                    };
                    var0.handlePostConnectionOpen = var2;
                    var2 = function() { // Environment: var1
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleRunningGamesChange = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun118042: for (var _fun118042_ip = 0;;) switch (_fun118042_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.partial;
                                var0 = var1.settings;
                                var1 = var1.wasSaved;
                                var3 = var0.proto;
                                var0 = 'localization';
                                var3 = var0 in var3;
                                var0 = !var3;
                                if (!var3) {
                                    _fun118042_ip = 44;
                                    continue _fun118042
                                }
                            case 41:
                                var0 = !var2;
                            case 44:
                                if (var0) {
                                    _fun118042_ip = 50;
                                    continue _fun118042
                                }
                            case 47:
                                var0 = var1;
                            case 50:
                                if (var0) {
                                    _fun118042_ip = 98;
                                    continue _fun118042
                                }
                            case 53:
                                var1 = global;
                                var2 = var1.Date;
                                var1 = var2.now;
                                var2 = var1.bind(var2)();
                                var1 = _closure3_slot0;
                                var1 = var1.lastFetchedQuestForLocaleChangeAt;
                                var2 = var2 - var1;
                                var1 = _closure1_slot13;
                                var0 = var2 <= var1;
                            case 98:
                                if (var0) {
                                    _fun118042_ip = 148;
                                    continue _fun118042
                                }
                            case 101:
                                var2 = _closure3_slot0;
                                var0 = global;
                                var1 = var0.Date;
                                var0 = var1.now;
                                var0 = var0.bind(var1)();
                                var2.lastFetchedQuestForLocaleChangeAt = var0;
                                var1 = var2._fetch;
                                var0 = 'user_settings';
                                var0 = var1.bind(var2)(var0);
                            case 148:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleUserSettingsProtoUpdate = var2;
                    var1 = function() { // Environment: var1
                        var0 = global;
                        var4 = var0.window;
                        var3 = var4.clearTimeout;
                        var1 = _closure3_slot0;
                        var2 = var1.initialFetchTimerId;
                        var2 = var3.bind(var4)(var2);
                        var4 = var0.window;
                        var3 = var4.clearTimeout;
                        var2 = var1.initialTakeoverFetchTimerId;
                        var2 = var3.bind(var4)(var2);
                        var3 = var0.window;
                        var2 = var3.clearTimeout;
                        var0 = var1.recurringFetchTimerId;
                        var0 = var2.bind(var3)(var0);
                        var0 = 0;
                        var1.lastFetchAttemptedAt = var0;
                        var1.lastFetchedQuestForLocaleChangeAt = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleLogout = var1;
                    var1 = {};
                    var2 = var0.handleQuestsFetchCurrentQuestsBegin;
                    var1.QUESTS_FETCH_CURRENT_QUESTS_BEGIN = var2;
                    var2 = var0.handlePostConnectionOpen;
                    var1.POST_CONNECTION_OPEN = var2;
                    var2 = var0.handleRunningGamesChange;
                    var1.RUNNING_GAMES_CHANGE = var2;
                    var2 = var0.handleRunningGamesChange;
                    var1.RUNNING_NON_GAMES_CHANGE = var2;
                    var2 = var0.handleUserSettingsProtoUpdate;
                    var1.USER_SETTINGS_PROTO_UPDATE = var2;
                    var2 = var0.handleLogout;
                    var1.LOGOUT = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = '_fetch';
        var4.key = var5;
        var0 = function arg0() {
            _fun118044: for (var _fun118044_ip = 0;;) switch (_fun118044_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.getIsEligibleForQuests;
                    var1 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.QUESTS_MANAGER;
                    var1.location = var5;
                    var1 = var2.bind(var4)(var1);
                    var1 = !var1;
                    if (var1) {
                        _fun118044_ip = 68;
                        continue _fun118044
                    }
                case 58:
                    var2 = _closure1_slot8;
                    var1 = var2.isFetchingCurrentQuests;
                case 68:
                    if (var1) {
                        _fun118044_ip = 101;
                        continue _fun118044
                    }
                case 71:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 12;
                    var2 = var5[var2];
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.isMetaQuest;
                    var1 = var2.bind(var4)();
                case 101:
                    if (var1) {
                        _fun118044_ip = 311;
                        continue _fun118044
                    }
                case 107:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var2 = var5[var1];
                    var6 = var4.bind(var0)(var2);
                    var2 = var6.fetchCurrentQuests;
                    var2 = var2.bind(var6)();
                    var2 = 13;
                    var2 = var5[var2];
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.isMac;
                    var2 = var2.bind(var4)();
                    if (!var2) {
                        _fun118044_ip = 200;
                        continue _fun118044
                    }
                case 162:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 14;
                    var4 = var6[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.getState;
                    var5 = var4.bind(var5)();
                    var4 = 'focused';
                    var2 = var4 !== var5;
                case 200:
                    if (var2) {
                        _fun118044_ip = 252;
                        continue _fun118044
                    }
                case 203:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.getConfig;
                    var4 = {};
                    var7 = 'QuestFetchManager';
                    var4.location = var7;
                    var4 = var5.bind(var6)(var4);
                    var2 = var4.enableNewRequestBehavior;
                case 252:
                    if (var2) {
                        _fun118044_ip = 311;
                        continue _fun118044
                    }
                case 255:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = var5[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.fetchQuestToDeliver;
                    var1 = 16;
                    var1 = var5[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.QuestPlacement;
                    var2 = var1.MOBILE_HOME_DOCK_AREA;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var2, var1);
                case 311:
                    return var0;
            }
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
    var13 = var3;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/managers/QuestFetchManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5278, 5281, 667, 15044, 5368, 5367, 5311, 3525, 478, 5336, 5292, 5283, 4299, 2]);