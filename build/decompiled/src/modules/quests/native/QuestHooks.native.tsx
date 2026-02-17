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
        _fun47186: for (var _fun47186_ip = 0;;) switch (_fun47186_ip) {
            case 0:
                var8 = arg0;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 17;
                var0 = var2[var0];
                var9 = undefined;
                var0 = var1.bind(var9)(var0);
                var3 = var0.bind(var9)();
                var1 = _closure1_slot0;
                var0 = 11;
                var0 = var2[var0];
                var4 = var1.bind(var9)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var1 = var0.questDeliveryOverride;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var4 = !var0;
                if (!var4) {
                    _fun47186_ip = 105;
                    continue _fun47186
                }
            case 84:
                var1 = null;
                var2 = var1 == var8;
                var0 = undefined;
                if (var2) {
                    _fun47186_ip = 101;
                    continue _fun47186
                }
            case 95:
                var0 = var8.userStatus;
            case 101:
                var4 = var1 != var0;
            case 105:
                if (!var4) {
                    _fun47186_ip = 170;
                    continue _fun47186
                }
            case 108:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 12;
                var0 = var7[var0];
                var5 = var6.bind(var9)(var0);
                var2 = var5.isDismissed;
                var1 = var8.userStatus;
                var0 = 13;
                var0 = var7[var0];
                var0 = var6.bind(var9)(var0);
                var0 = var0.QuestContent;
                var0 = var0.QUEST_BAR_MOBILE;
                var4 = var2.bind(var5)(var1, var0);
            case 170:
                var0 = null;
                var2 = var0 == var8;
                var1 = undefined;
                if (var2) {
                    _fun47186_ip = 202;
                    continue _fun47186
                }
            case 181:
                var2 = var8.userStatus;
                var5 = var0 == var2;
                var1 = undefined;
                if (var5) {
                    _fun47186_ip = 202;
                    continue _fun47186
                }
            case 196:
                var1 = var2.claimedAt;
            case 202:
                var5 = var0 != var1;
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 18;
                var1 = var10[var1];
                var6 = var2.bind(var9)(var1);
                var1 = var6.useIsQuestExpired;
                var6 = var1.bind(var6)(var8);
                var1 = 19;
                var1 = var10[var1];
                var11 = var2.bind(var9)(var1);
                var7 = var11.useIsEligibleForQuests;
                var1 = {};
                var12 = _closure1_slot9;
                var12 = var12.QUESTS_BAR;
                var1.location = var12;
                var7 = var7.bind(var11)(var1);
                var1 = 20;
                var1 = var10[var1];
                var1 = var2.bind(var9)(var1);
                var9 = var1.YouBarExperiment;
                var2 = var9.useConfig;
                var1 = {};
                var10 = 'QuestDock';
                var1.location = var10;
                var2 = var2.bind(var9)(var1);
                var1 = var2.enabled;
                var2 = var2.questDockEnabled;
                var0 = var0 != var8;
                if (!var0) {
                    _fun47186_ip = 338;
                    continue _fun47186
                }
            case 335:
                var0 = var7;
            case 338:
                if (!var0) {
                    _fun47186_ip = 344;
                    continue _fun47186
                }
            case 341:
                var0 = !var6;
            case 344:
                if (!var0) {
                    _fun47186_ip = 350;
                    continue _fun47186
                }
            case 347:
                var0 = !var5;
            case 350:
                if (!var0) {
                    _fun47186_ip = 356;
                    continue _fun47186
                }
            case 353:
                var0 = !var4;
            case 356:
                if (!var0) {
                    _fun47186_ip = 362;
                    continue _fun47186
                }
            case 359:
                var0 = !var3;
            case 362:
                if (!var0) {
                    _fun47186_ip = 374;
                    continue _fun47186
                }
            case 365:
                if (!var1) {
                    _fun47186_ip = 371;
                    continue _fun47186
                }
            case 368:
                var1 = !var2;
            case 371:
                var0 = !var1;
            case 374:
                return var0;
        }
    };
    var _closure1_slot13 = var4;
    var3 = function() {
        _fun47188: for (var _fun47188_ip = 0;;) switch (_fun47188_ip) {
            case 0:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 10;
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
                var5 = 11;
                var0 = var7[var5];
                var10 = var6.bind(var2)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var0;
                var0 = function() { // Environment: var3
                    _fun47189: for (var _fun47189_ip = 0;;) switch (_fun47189_ip) {
                        case 0:
                            var0 = _closure1_slot7;
                            var1 = var0.questDeliveryOverride;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun47189_ip = 98;
                                continue _fun47189
                            }
                        case 19:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 12;
                            var3 = var9[var3];
                            var7 = undefined;
                            var6 = var8.bind(var7)(var3);
                            var5 = var6.getQuestForPlacement;
                            var3 = _closure1_slot7;
                            var4 = var3.quests;
                            var2 = _closure1_slot7;
                            var3 = var2.questToDeliverForPlacement;
                            var2 = 13;
                            var2 = var9[var2];
                            var2 = var8.bind(var7)(var2);
                            var2 = var2.QuestPlacement;
                            var2 = var2.MOBILE_HOME_DOCK_AREA;
                            var1 = var5.bind(var6)(var4, var3, var2);
                        case 98:
                            var2 = var0 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun47189_ip = 110;
                                continue _fun47189
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
                var8 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var3
                    _fun47190: for (var _fun47190_ip = 0;;) switch (_fun47190_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var2 = var1.questAdDecisionByPlacement;
                            var1 = var2.get;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 13;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.QuestPlacement;
                            var0 = var0.MOBILE_HOME_DOCK_AREA;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 != var1;
                            if (!var2) {
                                _fun47190_ip = 69;
                                continue _fun47190
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
                var5 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = new Array(1);
                var5[0] = var9;
                var3 = function() { // Environment: var3
                    _fun47191: for (var _fun47191_ip = 0;;) switch (_fun47191_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            var2 = var3 == var0;
                            var0 = undefined;
                            if (var2) {
                                _fun47191_ip = 28;
                                continue _fun47191
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var0 = var2.questId;
                        case 28:
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun47191_ip = 82;
                                continue _fun47191
                            }
                        case 37:
                            var2 = _closure1_slot7;
                            var4 = var2.quests;
                            var2 = var4.get;
                            var1 = _closure2_slot0;
                            var1 = var1.questId;
                            var1 = var2.bind(var4)(var1);
                            var2 = var3 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun47191_ip = 82;
                                continue _fun47191
                            }
                        case 79:
                            var0 = var1;
                        case 82:
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var6, var3, var5);
                var1 = _closure1_slot13;
                if (!var4) {
                    _fun47188_ip = 197;
                    continue _fun47188
                }
            case 194:
                var0 = var3;
            case 197:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY;
    var _closure1_slot8 = var8;
    var8 = var5.QuestsExperimentLocations;
    var _closure1_slot9 = var8;
    var5 = var5.QuestVariants;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.CAPTCHA_MODAL_KEY;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot12 = var5;
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestHooks.native.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function() {
        _fun47192: for (var _fun47192_ip = 0;;) switch (_fun47192_ip) {
            case 0:
                var1 = _closure1_slot14;
                var4 = undefined;
                var3 = var1.bind(var4)();
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 8;
                var0 = var5[var0];
                var2 = var1.bind(var4)(var0);
                var0 = var2.useQuestDockExternalOffset;
                var2 = var0.bind(var2)();
                var0 = 9;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.isMetaQuest;
                var4 = var0.bind(var1)();
                var0 = 0;
                if (var4) {
                    _fun47192_ip = 81;
                    continue _fun47192
                }
            case 70:
                var1 = 0;
                if (!var3) {
                    _fun47192_ip = 78;
                    continue _fun47192
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
        _fun47193: for (var _fun47193_ip = 0;;) switch (_fun47193_ip) {
            case 0:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 10;
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
                var1 = 11;
                var1 = var6[var1];
                var8 = var5.bind(var4)(var1);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    _fun47194: for (var _fun47194_ip = 0;;) switch (_fun47194_ip) {
                        case 0:
                            var0 = _closure1_slot7;
                            var1 = var0.questDeliveryOverride;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun47194_ip = 98;
                                continue _fun47194
                            }
                        case 19:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 12;
                            var3 = var9[var3];
                            var7 = undefined;
                            var6 = var8.bind(var7)(var3);
                            var5 = var6.getQuestForPlacement;
                            var3 = _closure1_slot7;
                            var4 = var3.quests;
                            var2 = _closure1_slot7;
                            var3 = var2.questToDeliverForPlacement;
                            var2 = 13;
                            var2 = var9[var2];
                            var2 = var8.bind(var7)(var2);
                            var2 = var2.QuestPlacement;
                            var2 = var2.MOBILE_HOME_DOCK_AREA;
                            var1 = var5.bind(var6)(var4, var3, var2);
                        case 98:
                            var2 = var0 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun47194_ip = 110;
                                continue _fun47194
                            }
                        case 107:
                            var0 = var1;
                        case 110:
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var1, var0);
                var1 = 14;
                var1 = var6[var1];
                var3 = var3.bind(var4)(var1);
                var1 = 13;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.QuestPlacement;
                var1 = var1.MOBILE_HOME_DOCK_AREA;
                var1 = var3.bind(var4)(var1);
                if (!var2) {
                    _fun47193_ip = 147;
                    continue _fun47193
                }
            case 144:
                var0 = var1;
            case 147:
                return var0;
        }
    };
    var2.useMobileQuestDock = var5;
    var5 = function arg0, arg1() {
        _fun47195: for (var _fun47195_ip = 0;;) switch (_fun47195_ip) {
            case 0:
                var0 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 15;
                var1 = var9[var1];
                var7 = undefined;
                var2 = var8.bind(var7)(var1);
                var1 = var2.useIsChannelFocused;
                var4 = var1.bind(var2)();
                var1 = 16;
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
                var6 = 11;
                var2 = var9[var6];
                var12 = var8.bind(var7)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot7;
                var10 = new Array(1);
                var10[0] = var2;
                var2 = function() { // Environment: var3
                    _fun47196: for (var _fun47196_ip = 0;;) switch (_fun47196_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun47196_ip = 43;
                                continue _fun47196
                            }
                        case 16:
                            var3 = _closure1_slot7;
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
                var8 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var8;
                var3 = function() { // Environment: var3
                    _fun47197: for (var _fun47197_ip = 0;;) switch (_fun47197_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var0 = var2.getKey;
                            var2 = var0.bind(var2)();
                            var0 = _closure1_slot11;
                            var0 = var2 === var0;
                            if (var0) {
                                _fun47197_ip = 36;
                                continue _fun47197
                            }
                        case 28:
                            var1 = _closure1_slot8;
                            var0 = var2 === var1;
                        case 36:
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var5, var3);
                if (!var0) {
                    _fun47195_ip = 184;
                    continue _fun47195
                }
            case 181:
                var0 = !var4;
            case 184:
                if (!var0) {
                    _fun47195_ip = 202;
                    continue _fun47195
                }
            case 187:
                if (var1) {
                    _fun47195_ip = 199;
                    continue _fun47195
                }
            case 190:
                if (!var2) {
                    _fun47195_ip = 196;
                    continue _fun47195
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
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 21;
            var2 = var7[var1];
            var5 = undefined;
            var4 = var6.bind(var5)(var2);
            var3 = var4.getQuestAsset;
            var2 = _closure2_slot0;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.QuestAssetType;
            var1 = var1.LOGO_TYPE;
            var0 = _closure1_slot12;
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
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun47201: for (var _fun47201_ip = 0;;) switch (_fun47201_ip) {
                case 0:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 21;
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
                        _fun47201_ip = 146;
                        continue _fun47201
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
                        _fun47201_ip = 167;
                        continue _fun47201
                    }
                case 162:
                    var2 = var6;
                    _fun47201_ip = 207;
                    continue _fun47201;
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
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 22;
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
    var2.useHasWatchVideoOnMobileTasks = var3;
    var1 = function arg0() {
        _fun47204: for (var _fun47204_ip = 0;;) switch (_fun47204_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 22;
                var2 = var8[var2];
                var7 = undefined;
                var3 = var5.bind(var7)(var2);
                var2 = var3.getActivityApplicationId;
                var10 = var2.bind(var3)(var4);
                var _closure2_slot1 = var10;
                var2 = 11;
                var2 = var8[var2];
                var9 = var5.bind(var7)(var2);
                var6 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getApplication;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var6.bind(var9)(var3, var2);
                var _closure2_slot2 = var2;
                var3 = 23;
                var3 = var8[var3];
                var6 = var5.bind(var7)(var3);
                var3 = var6.useCanLaunchFrame;
                var6 = var3.bind(var6)(var2);
                var _closure2_slot3 = var6;
                var3 = 24;
                var3 = var8[var3];
                var5 = var5.bind(var7)(var3);
                var3 = var5.canLaunchActivity;
                var3 = var3.bind(var5)(var4);
                if (!var3) {
                    _fun47204_ip = 177;
                    continue _fun47204
                }
            case 146:
                var5 = var4.config;
                var9 = var5.features;
                var8 = var9.includes;
                var5 = _closure1_slot10;
                var5 = var5.MOBILE_ACTIVITY_QUEST;
                var3 = var8.bind(var9)(var5);
            case 177:
                if (!var3) {
                    _fun47204_ip = 237;
                    continue _fun47204
                }
            case 180:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 25;
                var5 = var9[var5];
                var8 = var8.bind(var7)(var5);
                var11 = null;
                var9 = var11 == var2;
                var5 = undefined;
                if (var9) {
                    _fun47204_ip = 232;
                    continue _fun47204
                }
            case 211:
                var9 = var2.embeddedActivityConfig;
                var11 = var11 == var9;
                var5 = undefined;
                if (var11) {
                    _fun47204_ip = 232;
                    continue _fun47204
                }
            case 226:
                var5 = var9.supported_platforms;
            case 232:
                var3 = var8.bind(var7)(var5);
            case 237:
                if (!var3) {
                    _fun47204_ip = 284;
                    continue _fun47204
                }
            case 240:
                var5 = var6;
                if (var5) {
                    _fun47204_ip = 281;
                    continue _fun47204
                }
            case 246:
                var9 = null;
                var11 = var9 == var2;
                var8 = undefined;
                if (var11) {
                    _fun47204_ip = 277;
                    continue _fun47204
                }
            case 257:
                var11 = var2.bot;
                var12 = var9 == var11;
                var8 = undefined;
                if (var12) {
                    _fun47204_ip = 277;
                    continue _fun47204
                }
            case 272:
                var8 = var11.id;
            case 277:
                var5 = var9 != var8;
            case 281:
                var3 = var5;
            case 284:
                var _closure2_slot4 = var3;
                var5 = _closure1_slot4;
                var9 = var5.useEffect;
                var8 = new Array(3);
                var8[0] = var2;
                var8[1] = var10;
                var4 = var4.config;
                var4 = var4.features;
                var8[2] = var4;
                var4 = function() { // Environment: var0
                    _fun47206: for (var _fun47206_ip = 0;;) switch (_fun47206_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var3 = null;
                            var1 = var3 == var1;
                            if (!var1) {
                                _fun47206_ip = 24;
                                continue _fun47206
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun47206_ip = 65;
                                continue _fun47206
                            }
                        case 27:
                            var2 = _closure2_slot0;
                            var2 = var2.config;
                            var4 = var2.features;
                            var3 = var4.includes;
                            var2 = _closure1_slot10;
                            var2 = var2.MOBILE_ACTIVITY_QUEST;
                            var1 = var3.bind(var4)(var2);
                        case 65:
                            if (!var1) {
                                _fun47206_ip = 119;
                                continue _fun47206
                            }
                        case 68:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 26;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchApplications;
                            var0 = _closure2_slot1;
                            var1 = new Array(1);
                            var1[0] = var0;
                            var0 = false;
                            var0 = var2.bind(var3)(var1, var0);
                        case 119:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var9.bind(var5)(var4, var8);
                var4 = var5.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun47208: for (var _fun47208_ip = 0;;) switch (_fun47208_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun47208_ip = 238;
                                    continue _fun47208
                                }
                            case 10:
                                var1 = _closure2_slot4;
                                if (!var1) {
                                    _fun47208_ip = 230;
                                    continue _fun47208
                                }
                            case 23:
                                var1 = _closure2_slot3;
                                if (var1) {
                                    _fun47208_ip = 169;
                                    continue _fun47208
                                }
                            case 33:
                                var1 = _closure2_slot2;
                                var2 = null;
                                var5 = var2 == var1;
                                var3 = undefined;
                                var1 = undefined;
                                if (var5) {
                                    _fun47208_ip = 74;
                                    continue _fun47208
                                }
                            case 50:
                                var5 = _closure2_slot2;
                                var5 = var5.bot;
                                var6 = var2 == var5;
                                var1 = undefined;
                                if (var6) {
                                    _fun47208_ip = 74;
                                    continue _fun47208
                                }
                            case 69:
                                var1 = var5.id;
                            case 74:
                                if (!(var2 != var1)) {
                                    _fun47208_ip = 230;
                                    continue _fun47208
                                }
                            case 81:
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 28;
                                var1 = var5[var1];
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.launchActivityInBotDM;
                                var1 = {};
                                var5 = _closure2_slot2;
                                var6 = var5.id;
                                var1.appId = var6;
                                var5 = var5.bot;
                                var5 = var5.id;
                                var1.botId = var5;
                                var5 = new Array(0);
                                var1.analyticsLocations = var5;
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 160);
                            case 158:
                                return var1;
                            case 160:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (!var2) {
                                    _fun47208_ip = 230;
                                    continue _fun47208
                                }
                            case 166:
                                return var1;
                            case 169:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 27;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.launchFrame;
                                var1 = {};
                                var4 = _closure2_slot2;
                                var4 = var4.id;
                                var1.applicationId = var4;
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 224);
                            case 222:
                                return var1;
                            case 224:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun47208_ip = 235;
                                    continue _fun47208
                                }
                            case 230:
                                var2 = undefined;
                                return var2;
                            case 235:
                                return var1;
                            case 238:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var7)(var0);
                var0 = new Array(3);
                var0[0] = var6;
                var0[1] = var2;
                var0[2] = var3;
                var1 = var4.bind(var5)(var1, var0);
                var0 = {};
                var0.isMobileActivityQuest = var3;
                var0.questApplication = var2;
                var0.launchMobileActivity = var1;
                return var0;
        }
    };
    var2.useMobileActivityQuest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 3147, 3456, 5286, 5290, 5311, 483, 5312, 4114, 5301, 566, 5300, 5292, 12215, 8773, 3918, 7715, 5375, 5376, 5283, 5349, 5329, 4678, 5328, 7989, 5406, 7968, 11647, 2]);