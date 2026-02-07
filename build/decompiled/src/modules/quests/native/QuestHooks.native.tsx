// modules/quests/native/QuestHooks.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun47102: for (var _fun47102_ip = 0;;) switch (_fun47102_ip) {
            case 0:
                var7 = arg0;
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 15;
                var0 = var3[var0];
                var9 = undefined;
                var0 = var1.bind(var9)(var0);
                var2 = var0.bind(var9)();
                var1 = _closure1_slot0;
                var0 = 9;
                var0 = var3[var0];
                var4 = var1.bind(var9)(var0);
                var3 = var4.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var1 = var0.questDeliveryOverride;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var0 = var3.bind(var4)(var1, var0);
                var3 = !var0;
                if (!var3) {
                    _fun47102_ip = 105;
                    continue _fun47102
                }
            case 84:
                var1 = null;
                var4 = var1 == var7;
                var0 = undefined;
                if (var4) {
                    _fun47102_ip = 101;
                    continue _fun47102
                }
            case 95:
                var0 = var7.userStatus;
            case 101:
                var3 = var1 != var0;
            case 105:
                if (!var3) {
                    _fun47102_ip = 170;
                    continue _fun47102
                }
            case 108:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var5 = var6.bind(var9)(var0);
                var4 = var5.isDismissed;
                var1 = var7.userStatus;
                var0 = 11;
                var0 = var8[var0];
                var0 = var6.bind(var9)(var0);
                var0 = var0.QuestContent;
                var0 = var0.QUEST_BAR_MOBILE;
                var3 = var4.bind(var5)(var1, var0);
            case 170:
                var0 = null;
                var4 = var0 == var7;
                var1 = undefined;
                if (var4) {
                    _fun47102_ip = 202;
                    continue _fun47102
                }
            case 181:
                var4 = var7.userStatus;
                var5 = var0 == var4;
                var1 = undefined;
                if (var5) {
                    _fun47102_ip = 202;
                    continue _fun47102
                }
            case 196:
                var1 = var4.claimedAt;
            case 202:
                var4 = var0 != var1;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 16;
                var1 = var10[var1];
                var5 = var8.bind(var9)(var1);
                var1 = var5.useIsQuestExpired;
                var5 = var1.bind(var5)(var7);
                var1 = 17;
                var1 = var10[var1];
                var11 = var8.bind(var9)(var1);
                var6 = var11.useIsEligibleForQuests;
                var1 = {};
                var12 = _closure1_slot7;
                var12 = var12.QUESTS_BAR;
                var1.location = var12;
                var6 = var6.bind(var11)(var1);
                var1 = 18;
                var1 = var10[var1];
                var9 = var8.bind(var9)(var1);
                var8 = var9.useYouBarEnabled;
                var1 = 'YouBar';
                var1 = var8.bind(var9)(var1);
                var0 = var0 != var7;
                if (!var0) {
                    _fun47102_ip = 315;
                    continue _fun47102
                }
            case 312:
                var0 = var6;
            case 315:
                if (!var0) {
                    _fun47102_ip = 321;
                    continue _fun47102
                }
            case 318:
                var0 = !var5;
            case 321:
                if (!var0) {
                    _fun47102_ip = 327;
                    continue _fun47102
                }
            case 324:
                var0 = !var4;
            case 327:
                if (!var0) {
                    _fun47102_ip = 333;
                    continue _fun47102
                }
            case 330:
                var0 = !var3;
            case 333:
                if (!var0) {
                    _fun47102_ip = 339;
                    continue _fun47102
                }
            case 336:
                var0 = !var2;
            case 339:
                if (!var0) {
                    _fun47102_ip = 345;
                    continue _fun47102
                }
            case 342:
                var0 = !var1;
            case 345:
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var3 = function() {
        _fun47104: for (var _fun47104_ip = 0;;) switch (_fun47104_ip) {
            case 0:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var2 = undefined;
                var5 = var4.bind(var2)(var0);
                var4 = var5.useConfig;
                var0 = {};
                var6 = 'QuestMobileDock';
                var0.location = var6;
                var0 = var4.bind(var5)(var0);
                var4 = var0.enableNewRequestBehavior;
                var6 = _closure1_slot0;
                var5 = 9;
                var0 = var7[var5];
                var10 = var6.bind(var2)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var0;
                var0 = function() { // Environment: var3
                    _fun47105: for (var _fun47105_ip = 0;;) switch (_fun47105_ip) {
                        case 0:
                            var0 = _closure1_slot5;
                            var1 = var0.questDeliveryOverride;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun47105_ip = 98;
                                continue _fun47105
                            }
                        case 19:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 10;
                            var3 = var9[var3];
                            var7 = undefined;
                            var6 = var8.bind(var7)(var3);
                            var5 = var6.getQuestForPlacement;
                            var3 = _closure1_slot5;
                            var4 = var3.quests;
                            var2 = _closure1_slot5;
                            var3 = var2.questToDeliverForPlacement;
                            var2 = 11;
                            var2 = var9[var2];
                            var2 = var8.bind(var7)(var2);
                            var2 = var2.QuestPlacement;
                            var2 = var2.MOBILE_HOME_DOCK_AREA;
                            var1 = var5.bind(var6)(var4, var3, var2);
                        case 98:
                            var2 = var0 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun47105_ip = 110;
                                continue _fun47105
                            }
                        case 107:
                            var0 = var1;
                        case 110:
                            return var0;
                    }
                };
                var0 = var9.bind(var10)(var8, var0);
                var8 = var7[var5];
                var11 = var6.bind(var2)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var3
                    _fun47106: for (var _fun47106_ip = 0;;) switch (_fun47106_ip) {
                        case 0:
                            var1 = _closure1_slot5;
                            var2 = var1.questAdDecisionByPlacement;
                            var1 = var2.get;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 11;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.QuestPlacement;
                            var0 = var0.MOBILE_HOME_DOCK_AREA;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 != var1;
                            if (!var2) {
                                _fun47106_ip = 69;
                                continue _fun47106
                            }
                        case 66:
                            var0 = var1;
                        case 69:
                            return var0;
                    }
                };
                var9 = var10.bind(var11)(var9, var8);
                var _closure2_slot0 = var9;
                var5 = var7[var5];
                var8 = var6.bind(var2)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = new Array(1);
                var5[0] = var9;
                var3 = function() { // Environment: var3
                    _fun47107: for (var _fun47107_ip = 0;;) switch (_fun47107_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            var2 = var3 == var0;
                            var0 = undefined;
                            if (var2) {
                                _fun47107_ip = 28;
                                continue _fun47107
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var0 = var2.questId;
                        case 28:
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun47107_ip = 82;
                                continue _fun47107
                            }
                        case 37:
                            var2 = _closure1_slot5;
                            var4 = var2.quests;
                            var2 = var4.get;
                            var1 = _closure2_slot0;
                            var1 = var1.questId;
                            var1 = var2.bind(var4)(var1);
                            var2 = var3 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun47107_ip = 82;
                                continue _fun47107
                            }
                        case 79:
                            var0 = var1;
                        case 82:
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var6, var3, var5);
                var1 = _closure1_slot10;
                if (!var4) {
                    _fun47104_ip = 197;
                    continue _fun47104
                }
            case 194:
                var0 = var3;
            case 197:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var9 = var7[var0];
    var5 = arg3;
    var0 = undefined;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY;
    var _closure1_slot6 = var8;
    var5 = var5.QuestsExperimentLocations;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.CAPTCHA_MODAL_KEY;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot9 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestHooks.native.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function() {
        _fun47108: for (var _fun47108_ip = 0;;) switch (_fun47108_ip) {
            case 0:
                var1 = _closure1_slot11;
                var4 = undefined;
                var3 = var1.bind(var4)();
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var2 = var1.bind(var4)(var0);
                var0 = var2.useQuestDockExternalOffset;
                var2 = var0.bind(var2)();
                var0 = 7;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.isMetaQuest;
                var4 = var0.bind(var1)();
                var0 = 0;
                if (var4) {
                    _fun47108_ip = 81;
                    continue _fun47108
                }
            case 70:
                var1 = 0;
                if (!var3) {
                    _fun47108_ip = 78;
                    continue _fun47108
                }
            case 75:
                var1 = var2;
            case 78:
                var0 = var1;
            case 81:
                return var0;
        }
    };
    var2.useMobileQuestDockHeight = var5;
    var5 = function() {
        _fun47109: for (var _fun47109_ip = 0;;) switch (_fun47109_ip) {
            case 0:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var4 = undefined;
                var5 = var3.bind(var4)(var1);
                var2 = var5.useConfig;
                var1 = {};
                var7 = 'QuestMobileDock';
                var1.location = var7;
                var1 = var2.bind(var5)(var1);
                var2 = var1.enableNewRequestBehavior;
                var5 = _closure1_slot0;
                var1 = 9;
                var1 = var6[var1];
                var8 = var5.bind(var4)(var1);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    _fun47110: for (var _fun47110_ip = 0;;) switch (_fun47110_ip) {
                        case 0:
                            var0 = _closure1_slot5;
                            var1 = var0.questDeliveryOverride;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun47110_ip = 98;
                                continue _fun47110
                            }
                        case 19:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 10;
                            var3 = var9[var3];
                            var7 = undefined;
                            var6 = var8.bind(var7)(var3);
                            var5 = var6.getQuestForPlacement;
                            var3 = _closure1_slot5;
                            var4 = var3.quests;
                            var2 = _closure1_slot5;
                            var3 = var2.questToDeliverForPlacement;
                            var2 = 11;
                            var2 = var9[var2];
                            var2 = var8.bind(var7)(var2);
                            var2 = var2.QuestPlacement;
                            var2 = var2.MOBILE_HOME_DOCK_AREA;
                            var1 = var5.bind(var6)(var4, var3, var2);
                        case 98:
                            var2 = var0 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun47110_ip = 110;
                                continue _fun47110
                            }
                        case 107:
                            var0 = var1;
                        case 110:
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var1, var0);
                var1 = 12;
                var1 = var6[var1];
                var3 = var3.bind(var4)(var1);
                var1 = 11;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.QuestPlacement;
                var1 = var1.MOBILE_HOME_DOCK_AREA;
                var1 = var3.bind(var4)(var1);
                if (!var2) {
                    _fun47109_ip = 147;
                    continue _fun47109
                }
            case 144:
                var0 = var1;
            case 147:
                return var0;
        }
    };
    var2.useMobileQuestDock = var5;
    var5 = function arg0, arg1() {
        _fun47111: for (var _fun47111_ip = 0;;) switch (_fun47111_ip) {
            case 0:
                var0 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 13;
                var1 = var9[var1];
                var7 = undefined;
                var2 = var8.bind(var7)(var1);
                var1 = var2.useIsChannelFocused;
                var4 = var1.bind(var2)();
                var1 = 14;
                var2 = var9[var1];
                var6 = var8.bind(var7)(var2);
                var2 = var6.useCurrentNavigationRouteName;
                var10 = var2.bind(var6)();
                var1 = var9[var1];
                var6 = var8.bind(var7)(var1);
                var2 = var6.coerceGuildsRoute;
                var1 = {};
                var1.name = var10;
                var2 = var2.bind(var6)(var1);
                var1 = null;
                var1 = var1 != var2;
                var6 = 9;
                var2 = var9[var6];
                var12 = var8.bind(var7)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var2;
                var2 = function() { // Environment: var3
                    _fun47112: for (var _fun47112_ip = 0;;) switch (_fun47112_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun47112_ip = 43;
                                continue _fun47112
                            }
                        case 16:
                            var3 = _closure1_slot5;
                            var2 = var3.isClaimingReward;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var10, var2);
                var6 = var9[var6];
                var7 = var8.bind(var7)(var6);
                var6 = var7.useStateFromStores;
                var8 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var8;
                var3 = function() { // Environment: var3
                    _fun47113: for (var _fun47113_ip = 0;;) switch (_fun47113_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var0 = var2.getKey;
                            var2 = var0.bind(var2)();
                            var0 = _closure1_slot8;
                            var0 = var2 === var0;
                            if (var0) {
                                _fun47113_ip = 36;
                                continue _fun47113
                            }
                        case 28:
                            var1 = _closure1_slot6;
                            var0 = var2 === var1;
                        case 36:
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var5, var3);
                if (!var0) {
                    _fun47111_ip = 184;
                    continue _fun47111
                }
            case 181:
                var0 = !var4;
            case 184:
                if (!var0) {
                    _fun47111_ip = 202;
                    continue _fun47111
                }
            case 187:
                if (var1) {
                    _fun47111_ip = 199;
                    continue _fun47111
                }
            case 190:
                if (!var2) {
                    _fun47111_ip = 196;
                    continue _fun47111
                }
            case 193:
                var2 = var3;
            case 196:
                var1 = var2;
            case 199:
                var0 = var1;
            case 202:
                return var0;
        }
    };
    var2.useIsMobileQuestDockVisibleToUser = var5;
    var2.useIsMobileQuestDockVisibleBase = var4;
    var2.useIsMobileQuestDockVisible = var3;
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 19;
            var2 = var7[var1];
            var5 = undefined;
            var4 = var6.bind(var5)(var2);
            var3 = var4.getQuestAsset;
            var2 = _closure2_slot0;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.QuestAssetType;
            var1 = var1.LOGO_TYPE;
            var0 = _closure1_slot9;
            var0 = var0.DARK;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = var0.url;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useQuestGameLogotypeAssetUrl = var3;
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun47117: for (var _fun47117_ip = 0;;) switch (_fun47117_ip) {
                case 0:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 19;
                    var0 = var2[var8];
                    var7 = undefined;
                    var5 = var6.bind(var7)(var0);
                    var4 = var5.getQuestAsset;
                    var1 = _closure2_slot0;
                    var2 = var2[var8];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.QuestAssetType;
                    var2 = var2.QUEST_BAR_HERO;
                    var4 = var4.bind(var5)(var1, var2);
                    var1 = var1.config;
                    var1 = var1.assets;
                    var2 = var1.questBarHeroVideo;
                    var1 = null;
                    var2 = var1 != var2;
                    if (!var2) {
                        _fun47117_ip = 146;
                        continue _fun47117
                    }
                case 91:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var6 = var5.bind(var7)(var2);
                    var5 = var6.resolveAsset;
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var0 = var0.config;
                    var0 = var0.assets;
                    var0 = var0.questBarHeroVideo;
                    var1 = var5.bind(var6)(var2, var0);
                case 146:
                    var0 = {};
                    var2 = var4.isAnimated;
                    var6 = var4.url;
                    if (var2) {
                        _fun47117_ip = 167;
                        continue _fun47117
                    }
                case 162:
                    var2 = var6;
                    _fun47117_ip = 207;
                    continue _fun47117;
                case 167:
                    var5 = var6.replace;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var3 = var4.bind(var7)(var3);
                    var4 = var3.EXTENSION_RE;
                    var3 = '.png';
                    var2 = var5.bind(var6)(var4, var3);
                case 207:
                    var0.staticUrl = var2;
                    var0.videoAsset = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useQuestDockHeroAsset = var3;
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 20;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.hasWatchVideoOnMobileTasks;
            var0 = {};
            var3 = _closure2_slot0;
            var0.config = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useHasWatchVideoOnMobileTasks = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3142, 5278, 5280, 5301, 483, 5302, 4106, 5291, 566, 5290, 5282, 12223, 8810, 3920, 7756, 5365, 5366, 5275, 5338, 5319, 2]);