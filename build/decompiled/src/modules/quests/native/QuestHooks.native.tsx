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
        _fun46538: for (var _fun46538_ip = 0;;) switch (_fun46538_ip) {
            case 0:
                var11 = arg0;
                var _closure2_slot0 = var11;
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 13;
                var2 = var0[var2];
                var13 = undefined;
                var2 = var3.bind(var13)(var2);
                var2 = var2.bind(var13)();
                var3 = _closure1_slot0;
                var15 = 9;
                var0 = var0[var15];
                var5 = var3.bind(var13)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure1_slot5;
                    var1 = var0.questDeliveryOverride;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var0 = var4.bind(var5)(var3, var0);
                var7 = !var0;
                if (!var7) {
                    _fun46538_ip = 109;
                    continue _fun46538
                }
            case 88:
                var3 = null;
                var4 = var3 == var11;
                var0 = undefined;
                if (var4) {
                    _fun46538_ip = 105;
                    continue _fun46538
                }
            case 99:
                var0 = var11.userStatus;
            case 105:
                var7 = var3 != var0;
            case 109:
                if (!var7) {
                    _fun46538_ip = 174;
                    continue _fun46538
                }
            case 112:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 10;
                var0 = var9[var0];
                var5 = var8.bind(var13)(var0);
                var4 = var5.isDismissed;
                var3 = var11.userStatus;
                var0 = 11;
                var0 = var9[var0];
                var0 = var8.bind(var13)(var0);
                var0 = var0.QuestContent;
                var0 = var0.QUEST_BAR_MOBILE;
                var7 = var4.bind(var5)(var3, var0);
            case 174:
                var0 = null;
                var4 = var0 == var11;
                var3 = undefined;
                if (var4) {
                    _fun46538_ip = 206;
                    continue _fun46538
                }
            case 185:
                var4 = var11.userStatus;
                var5 = var0 == var4;
                var3 = undefined;
                if (var5) {
                    _fun46538_ip = 206;
                    continue _fun46538
                }
            case 200:
                var3 = var4.claimedAt;
            case 206:
                var8 = var0 != var3;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 14;
                var3 = var14[var3];
                var4 = var12.bind(var13)(var3);
                var3 = var4.useIsQuestExpired;
                var9 = var3.bind(var4)(var11);
                var3 = 15;
                var3 = var14[var3];
                var5 = var12.bind(var13)(var3);
                var4 = var5.useIsEligibleForQuests;
                var3 = {};
                var10 = _closure1_slot7;
                var10 = var10.QUESTS_BAR;
                var3.location = var10;
                var10 = var4.bind(var5)(var3);
                var3 = 16;
                var3 = var14[var3];
                var4 = var12.bind(var13)(var3);
                var3 = var4.useIsChannelFocused;
                var3 = var3.bind(var4)();
                var4 = 17;
                var5 = var14[var4];
                var16 = var12.bind(var13)(var5);
                var5 = var16.useCurrentNavigationRouteName;
                var17 = var5.bind(var16)();
                var4 = var14[var4];
                var16 = var12.bind(var13)(var4);
                var5 = var16.coerceGuildsRoute;
                var4 = {};
                var4.name = var17;
                var4 = var5.bind(var16)(var4);
                var4 = var0 != var4;
                var5 = var14[var15];
                var18 = var12.bind(var13)(var5);
                var17 = var18.useStateFromStores;
                var5 = _closure1_slot5;
                var16 = new Array(1);
                var16[0] = var5;
                var5 = function() { // Environment: var1
                    _fun46540: for (var _fun46540_ip = 0;;) switch (_fun46540_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun46540_ip = 43;
                                continue _fun46540
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
                var5 = var17.bind(var18)(var16, var5);
                var15 = var14[var15];
                var16 = var12.bind(var13)(var15);
                var15 = var16.useStateFromStores;
                var17 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var17;
                var1 = function() { // Environment: var1
                    _fun46541: for (var _fun46541_ip = 0;;) switch (_fun46541_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var0 = var2.getKey;
                            var2 = var0.bind(var2)();
                            var0 = _closure1_slot8;
                            var0 = var2 === var0;
                            if (var0) {
                                _fun46541_ip = 36;
                                continue _fun46541
                            }
                        case 28:
                            var1 = _closure1_slot6;
                            var0 = var2 === var1;
                        case 36:
                            return var0;
                    }
                };
                var6 = var15.bind(var16)(var6, var1);
                var1 = 18;
                var1 = var14[var1];
                var13 = var12.bind(var13)(var1);
                var12 = var13.useYouBarEnabled;
                var1 = 'quest';
                var1 = var12.bind(var13)(var1);
                var0 = var0 != var11;
                if (!var0) {
                    _fun46538_ip = 465;
                    continue _fun46538
                }
            case 462:
                var0 = var10;
            case 465:
                if (!var0) {
                    _fun46538_ip = 471;
                    continue _fun46538
                }
            case 468:
                var0 = !var9;
            case 471:
                if (!var0) {
                    _fun46538_ip = 477;
                    continue _fun46538
                }
            case 474:
                var0 = !var8;
            case 477:
                if (!var0) {
                    _fun46538_ip = 483;
                    continue _fun46538
                }
            case 480:
                var0 = !var7;
            case 483:
                if (!var0) {
                    _fun46538_ip = 501;
                    continue _fun46538
                }
            case 486:
                if (var4) {
                    _fun46538_ip = 498;
                    continue _fun46538
                }
            case 489:
                if (!var5) {
                    _fun46538_ip = 495;
                    continue _fun46538
                }
            case 492:
                var5 = var6;
            case 495:
                var4 = var5;
            case 498:
                var0 = var4;
            case 501:
                if (!var0) {
                    _fun46538_ip = 507;
                    continue _fun46538
                }
            case 504:
                var0 = !var3;
            case 507:
                if (!var0) {
                    _fun46538_ip = 513;
                    continue _fun46538
                }
            case 510:
                var0 = !var2;
            case 513:
                if (!var0) {
                    _fun46538_ip = 519;
                    continue _fun46538
                }
            case 516:
                var0 = !var1;
            case 519:
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var3 = function() {
        _fun46542: for (var _fun46542_ip = 0;;) switch (_fun46542_ip) {
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
                    _fun46543: for (var _fun46543_ip = 0;;) switch (_fun46543_ip) {
                        case 0:
                            var0 = _closure1_slot5;
                            var1 = var0.questDeliveryOverride;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun46543_ip = 98;
                                continue _fun46543
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
                                _fun46543_ip = 110;
                                continue _fun46543
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
                    _fun46544: for (var _fun46544_ip = 0;;) switch (_fun46544_ip) {
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
                                _fun46544_ip = 69;
                                continue _fun46544
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
                    _fun46545: for (var _fun46545_ip = 0;;) switch (_fun46545_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            var2 = var3 == var0;
                            var0 = undefined;
                            if (var2) {
                                _fun46545_ip = 28;
                                continue _fun46545
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var0 = var2.questId;
                        case 28:
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun46545_ip = 82;
                                continue _fun46545
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
                                _fun46545_ip = 82;
                                continue _fun46545
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
                    _fun46542_ip = 197;
                    continue _fun46542
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
        _fun46546: for (var _fun46546_ip = 0;;) switch (_fun46546_ip) {
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
                    _fun46546_ip = 81;
                    continue _fun46546
                }
            case 70:
                var1 = 0;
                if (!var3) {
                    _fun46546_ip = 78;
                    continue _fun46546
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
        _fun46547: for (var _fun46547_ip = 0;;) switch (_fun46547_ip) {
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
                    _fun46548: for (var _fun46548_ip = 0;;) switch (_fun46548_ip) {
                        case 0:
                            var0 = _closure1_slot5;
                            var1 = var0.questDeliveryOverride;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun46548_ip = 98;
                                continue _fun46548
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
                                _fun46548_ip = 110;
                                continue _fun46548
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
                    _fun46547_ip = 147;
                    continue _fun46547
                }
            case 144:
                var0 = var1;
            case 147:
                return var0;
        }
    };
    var2.useMobileQuestDock = var5;
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
            _fun46552: for (var _fun46552_ip = 0;;) switch (_fun46552_ip) {
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
                        _fun46552_ip = 146;
                        continue _fun46552
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
                        _fun46552_ip = 167;
                        continue _fun46552
                    }
                case 162:
                    var2 = var6;
                    _fun46552_ip = 207;
                    continue _fun46552;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3131, 5221, 5223, 5244, 483, 5245, 4097, 5234, 566, 5233, 5225, 12143, 7680, 5308, 5309, 8720, 3910, 12144, 5281, 5262, 2]);