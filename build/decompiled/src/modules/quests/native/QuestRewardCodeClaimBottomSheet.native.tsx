// modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun78924: for (var _fun78924_ip = 0;;) switch (_fun78924_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.quest;
                var _closure2_slot0 = var5;
                var12 = var0.questContent;
                var10 = var0.questContentPosition;
                var9 = var0.sourceQuestContent;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var2 = var0.bottom;
                var0 = _closure1_slot10;
                var11 = var0.bind(var3)(var2);
                var4 = _closure1_slot0;
                var0 = 8;
                var0 = var7[var0];
                var8 = var4.bind(var3)(var0);
                var6 = var8.useStateFromStoresObject;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = {};
                    var5 = _closure1_slot6;
                    var4 = var5.getRewardCode;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.rewardCode = var3;
                    var5 = _closure1_slot6;
                    var4 = var5.isFetchingRewardCode;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.isFetchingRewardCode = var3;
                    var3 = _closure1_slot6;
                    var2 = var3.isClaimingReward;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isClaimingReward = var1;
                    return var0;
                };
                var0 = var6.bind(var8)(var2, var0);
                var24 = var0.rewardCode;
                var _closure2_slot1 = var24;
                var20 = var0.isFetchingRewardCode;
                var0 = var0.isClaimingReward;
                var6 = 9;
                var2 = var7[var6];
                var13 = var4.bind(var3)(var2);
                var8 = var13.useClaimOrFetchRewardCode;
                var2 = {};
                var2.isClaimingReward = var0;
                var2.isFetchingRewardCode = var20;
                var2.quest = var5;
                var2.questContent = var12;
                var2.rewardCode = var24;
                var2 = var8.bind(var13)(var2);
                var18 = var2.claimCode;
                var17 = var2.fetchCode;
                var13 = var2.hasError;
                var _closure2_slot2 = var13;
                var16 = _closure1_slot3;
                var14 = var16.useEffect;
                var8 = new Array(1);
                var8[0] = var13;
                var2 = function() { // Environment: var1
                    _fun78926: for (var _fun78926_ip = 0;;) switch (_fun78926_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun78926_ip = 154;
                                continue _fun78926
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 10;
                            var0 = var3[var0];
                            var1 = undefined;
                            var5 = var2.bind(var1)(var0);
                            var4 = var5.open;
                            var0 = {};
                            var7 = 'CLAIM_QUEST_REWARD_ERROR';
                            var0.key = var7;
                            var9 = _closure1_slot0;
                            var6 = 11;
                            var7 = var3[var6];
                            var7 = var9.bind(var1)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var3[var6];
                            var6 = var9.bind(var1)(var6);
                            var6 = var6.t;
                            var6 = var6.CKsXk3;
                            var6 = var7.bind(var8)(var6);
                            var0.content = var6;
                            var6 = 12;
                            var6 = var3[var6];
                            var6 = var2.bind(var1)(var6);
                            var0.icon = var6;
                            var0 = var4.bind(var5)(var0);
                            var0 = 13;
                            var0 = var3[var0];
                            var1 = var2.bind(var1)(var0);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 154:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var14.bind(var16)(var2, var8);
                var2 = 14;
                var2 = var7[var2];
                var7 = var4.bind(var3)(var2);
                var4 = var7.isTieredRewardCodeQuest;
                var2 = {};
                var2.quest = var5;
                var2 = var4.bind(var7)(var2);
                var _closure2_slot3 = var2;
                var8 = _closure1_slot3;
                var7 = var8.useMemo;
                var4 = new Array(3);
                var4[0] = var2;
                var4[1] = var5;
                var14 = null;
                var16 = var14 == var24;
                var2 = undefined;
                if (var16) {
                    _fun78924_ip = 323;
                    continue _fun78924
                }
            case 317:
                var2 = var24.tier;
            case 323:
                var4[2] = var2;
                var2 = function() { // Environment: var1
                    _fun78927: for (var _fun78927_ip = 0;;) switch (_fun78927_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 14;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.getRewardCodeQuestReward;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var1.quest = var6;
                            if (var0) {
                                _fun78927_ip = 66;
                                continue _fun78927
                            }
                        case 52:
                            var0 = 0;
                            var1.idx = var0;
                            var0 = var2.bind(var3)(var1);
                            _fun78927_ip = 101;
                            continue _fun78927;
                        case 66:
                            var7 = _closure2_slot1;
                            var6 = null;
                            var6 = var6 == var7;
                            var4 = undefined;
                            if (var6) {
                                _fun78927_ip = 91;
                                continue _fun78927
                            }
                        case 81:
                            var5 = _closure2_slot1;
                            var4 = var5.tier;
                        case 91:
                            var1.idx = var4;
                            var0 = var2.bind(var3)(var1);
                        case 101:
                            return var0;
                    }
                };
                var2 = var7.bind(var8)(var2, var4);
                _closure2_slot4 = var2;
                var8 = _closure1_slot3;
                var7 = var8.useMemo;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var24;
                var2 = function() { // Environment: var1
                    _fun78928: for (var _fun78928_ip = 0;;) switch (_fun78928_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var3 = null;
                            var2 = var3 == var0;
                            var6 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun78928_ip = 30;
                                continue _fun78928
                            }
                        case 20:
                            var2 = _closure2_slot4;
                            var0 = var2.redemptionLink;
                        case 30:
                            if (!(var3 != var0)) {
                                _fun78928_ip = 52;
                                continue _fun78928
                            }
                        case 34:
                            var0 = _closure2_slot4;
                            var0 = var0.redemptionLink;
                            var2 = '';
                            if (!(var2 === var0)) {
                                _fun78928_ip = 54;
                                continue _fun78928
                            }
                        case 52:
                            return var6;
                        case 54:
                            var0 = _closure2_slot1;
                            var4 = var3 == var0;
                            var0 = undefined;
                            if (var4) {
                                _fun78928_ip = 76;
                                continue _fun78928
                            }
                        case 67:
                            var4 = _closure2_slot1;
                            var0 = var4.code;
                        case 76:
                            if (!(var3 != var0)) {
                                _fun78928_ip = 145;
                                continue _fun78928
                            }
                        case 80:
                            var0 = _closure2_slot1;
                            var0 = var0.code;
                            if (!(var2 !== var0)) {
                                _fun78928_ip = 145;
                                continue _fun78928
                            }
                        case 93:
                            var0 = _closure2_slot4;
                            var4 = var0.redemptionLink;
                            var3 = var4.replace;
                            var2 = _closure1_slot7;
                            var0 = global;
                            var5 = var0.encodeURIComponent;
                            var0 = _closure2_slot1;
                            var0 = var0.code;
                            var0 = var5.bind(var6)(var0);
                            var0 = var3.bind(var4)(var2, var0);
                            _fun78928_ip = 155;
                            continue _fun78928;
                        case 145:
                            var1 = _closure2_slot4;
                            var0 = var1.redemptionLink;
                        case 155:
                            return var0;
                    }
                };
                var16 = var7.bind(var8)(var2, var4);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = var4[var6];
                var8 = var2.bind(var3)(var6);
                var7 = var8.useClaimRewardCodePrimaryCtaClickHandler;
                var6 = {};
                var6.claimCode = var18;
                var6.fetchCode = var17;
                var6.hasError = var13;
                var17 = _closure1_slot1;
                var13 = 13;
                var13 = var4[var13];
                var13 = var17.bind(var3)(var13);
                var13 = var13.hideActionSheet;
                var6.onDismiss = var13;
                var6.quest = var5;
                var6.questContent = var12;
                var6.questContentPosition = var10;
                var6.redemptionLink = var16;
                var6.sourceQuestContent = var9;
                var18 = var7.bind(var8)(var6);
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var6 = new Array(1);
                var6[0] = var24;
                var1 = function() { // Environment: var1
                    _fun78929: for (var _fun78929_ip = 0;;) switch (_fun78929_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun78929_ip = 68;
                                continue _fun78929
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.copy;
                            var0 = _closure2_slot1;
                            var1 = var0.code;
                            var0 = function() { // Environment: var0
                                var1 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 10;
                                var0 = var8[var0];
                                var7 = undefined;
                                var2 = var1.bind(var7)(var0);
                                var1 = var2.open;
                                var0 = {};
                                var4 = 'TOAST_QUEST_REWARD_CODE_COPIED';
                                var0.key = var4;
                                var6 = _closure1_slot0;
                                var3 = 11;
                                var4 = var8[var3];
                                var4 = var6.bind(var7)(var4);
                                var5 = var4.intl;
                                var4 = var5.string;
                                var3 = var8[var3];
                                var3 = var6.bind(var7)(var3);
                                var3 = var3.t;
                                var3 = var3.MSaeTe;
                                var3 = var4.bind(var5)(var3);
                                var0.content = var3;
                                var3 = function() {
                                    var3 = _closure1_slot8;
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 16;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var0 = var1.bind(var2)(var0);
                                    var1 = var0.CopyIcon;
                                    var0 = {};
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var0.icon = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var32 = var7.bind(var8)(var1, var6);
                var1 = 17;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.getRewardCodeRedemptionInstructions;
                var1 = {};
                var1.quest = var5;
                var1.rewardCode = var24;
                var26 = var2.bind(var4)(var1);
                if (var20) {
                    _fun78924_ip = 546;
                    continue _fun78924
                }
            case 543:
                var20 = var0;
            case 546:
                if (var20) {
                    _fun78924_ip = 567;
                    continue _fun78924
                }
            case 549:
                var1 = var14 == var24;
                var0 = undefined;
                if (var1) {
                    _fun78924_ip = 563;
                    continue _fun78924
                }
            case 558:
                var0 = var24.code;
            case 563:
                var20 = var14 == var0;
            case 567:
                var2 = _closure1_slot8;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 18;
                var0 = var7[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var6 = _closure1_slot8;
                var4 = 19;
                var4 = var7[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var19 = 11;
                var8 = var7[var19];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var19];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.srzsU2;
                var7 = var8.bind(var9)(var7);
                var4.title = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.header = var4;
                var17 = true;
                var0.startExpanded = var17;
                var6 = _closure1_slot9;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var11.wrapper;
                var4.style = var7;
                var9 = _closure1_slot9;
                var8 = _closure1_slot5;
                var7 = {};
                var12 = var14 != var24;
                if (!var12) {
                    _fun78924_ip = 734;
                    continue _fun78924
                }
            case 730:
                var12 = var14 != var26;
            case 734:
                if (!var12) {
                    _fun78924_ip = 838;
                    continue _fun78924
                }
            case 737:
                var21 = _closure1_slot8;
                var13 = _closure1_slot0;
                var25 = _closure1_slot2;
                var10 = 20;
                var10 = var25[var10];
                var10 = var13.bind(var3)(var10);
                var13 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var22 = var11.redemptionInstructions;
                var10.style = var22;
                var23 = _closure1_slot1;
                var22 = 21;
                var22 = var25[var22];
                var25 = var23.bind(var3)(var22);
                var23 = var25.parse;
                var22 = {};
                var22.allowLinks = var17;
                var22 = var23.bind(var25)(var26, var17, var22);
                var10.children = var22;
                var12 = var21.bind(var3)(var13, var10);
            case 838:
                var10 = new Array(2);
                var10[0] = var12;
                var21 = _closure1_slot9;
                var13 = _closure1_slot5;
                var12 = {};
                var23 = _closure1_slot8;
                var22 = {};
                var26 = var14 == var24;
                var25 = undefined;
                if (var26) {
                    _fun78924_ip = 876;
                    continue _fun78924
                }
            case 871:
                var25 = var24.code;
            case 876:
                var25 = var14 == var25;
                if (!var25) {
                    _fun78924_ip = 889;
                    continue _fun78924
                }
            case 883:
                var25 = var11.codeCopyWrapperLoading;
            case 889:
                var22.style = var25;
                var27 = _closure1_slot8;
                var29 = _closure1_slot0;
                var28 = _closure1_slot2;
                var25 = 22;
                var25 = var28[var25];
                var25 = var29.bind(var3)(var25);
                var26 = var25.TableRowGroup;
                var25 = {};
                var30 = _closure1_slot8;
                var33 = 23;
                var28 = var28[var33];
                var28 = var29.bind(var3)(var28);
                var29 = var28.TableRow;
                var28 = {};
                var34 = var14 == var24;
                var31 = undefined;
                if (var34) {
                    _fun78924_ip = 963;
                    continue _fun78924
                }
            case 958:
                var31 = var24.code;
            case 963:
                var28.label = var31;
                var34 = var14 == var24;
                var31 = undefined;
                if (var34) {
                    _fun78924_ip = 981;
                    continue _fun78924
                }
            case 976:
                var31 = var24.code;
            case 981:
                var31 = var14 != var31;
                if (!var31) {
                    _fun78924_ip = 1051;
                    continue _fun78924
                }
            case 988:
                var35 = _closure1_slot8;
                var37 = _closure1_slot0;
                var38 = _closure1_slot2;
                var33 = var38[var33];
                var33 = var37.bind(var3)(var33);
                var33 = var33.TableRow;
                var34 = var33.Icon;
                var33 = {};
                var36 = 16;
                var36 = var38[var36];
                var36 = var37.bind(var3)(var36);
                var36 = var36.CopyIcon;
                var33.IconComponent = var36;
                var31 = var35.bind(var3)(var34, var33);
            case 1051:
                var28.trailing = var31;
                var33 = var14 == var24;
                var31 = undefined;
                if (var33) {
                    _fun78924_ip = 1070;
                    continue _fun78924
                }
            case 1065:
                var31 = var24.code;
            case 1070:
                var33 = var14 != var31;
                var31 = undefined;
                if (!var33) {
                    _fun78924_ip = 1082;
                    continue _fun78924
                }
            case 1079:
                var31 = var32;
            case 1082:
                var28.onPress = var31;
                var28 = var30.bind(var3)(var29, var28);
                var25.children = var28;
                var25 = var27.bind(var3)(var26, var25);
                var22.children = var25;
                var23 = var23.bind(var3)(var13, var22);
                var22 = new Array(2);
                var22[0] = var23;
                var25 = var14 == var24;
                var23 = undefined;
                if (var25) {
                    _fun78924_ip = 1134;
                    continue _fun78924
                }
            case 1129:
                var23 = var24.code;
            case 1134:
                var23 = var14 == var23;
                if (!var23) {
                    _fun78924_ip = 1174;
                    continue _fun78924
                }
            case 1141:
                var26 = _closure1_slot8;
                var25 = _closure1_slot4;
                var24 = {};
                var27 = var11.claimingIndicator;
                var24.style = var27;
                var27 = 24;
                var24.size = var27;
                var23 = var26.bind(var3)(var25, var24);
            case 1174:
                var22[1] = var23;
                var12.children = var22;
                var12 = var21.bind(var3)(var13, var12);
                var10[1] = var12;
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var11.footer;
                var8.style = var11;
                var13 = _closure1_slot8;
                var12 = _closure1_slot0;
                var21 = _closure1_slot2;
                var11 = 24;
                var11 = var21[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Button;
                var11 = {};
                var11.disabled = var20;
                var11.onPress = var18;
                var11.grow = var17;
                if (!(var14 != var16)) {
                    _fun78924_ip = 1287;
                    continue _fun78924
                }
            case 1279:
                var14 = '';
                if (!(var14 === var16)) {
                    _fun78924_ip = 1343;
                    continue _fun78924
                }
            case 1287:
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var16 = var14[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var14[var19];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["23SS+z"];
                var14 = var16.bind(var17)(var14);
                _fun78924_ip = 1395;
                continue _fun78924;
            case 1343:
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["+zx47d"];
                var14 = var16.bind(var17)(var15);
            case 1395:
                var11.text = var14;
                var11 = var13.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.REWARD_CODE_PLACEHOLDER;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = 'flex';
        var1.display = var2;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 6;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_16;
        var1.paddingHorizontal = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_24;
        var1.gap = var2;
        var0.wrapper = var1;
        var1 = {};
        var2 = arg0;
        var1.paddingBottom = var2;
        var0.footer = var1;
        var1 = {};
        var2 = 0.8;
        var1.opacity = var2;
        var0.platformSelectClaiming = var1;
        var1 = {};
        var2 = 'relative';
        var1.position = var2;
        var0.platformSelectWrapper = var1;
        var1 = {
            'position': 'absolute',
            'left': '50%',
            'top': '50%',
            'marginLeft': 4294967284,
            'marginTop': 4294967284
        };
        var0.claimingIndicator = var1;
        var1 = {};
        var2 = 0.5;
        var1.opacity = var2;
        var0.codeCopyWrapperLoading = var1;
        var1 = {};
        var2 = 24;
        var1.marginBottom = var2;
        var0.redemptionInstructions = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78933: for (var _fun78933_ip = 0;;) switch (_fun78933_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.questId;
                var _closure2_slot0 = var1;
                var9 = var0.questContent;
                var _closure2_slot1 = var9;
                var8 = var0.questContentPosition;
                var _closure2_slot2 = var8;
                var7 = var0.sourceQuestContent;
                var _closure2_slot3 = var7;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var1.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot6;
                    var1 = var2.getQuest;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var3.bind(var5)(var1, var0);
                var _closure2_slot4 = var10;
                var1 = null;
                if (!(var1 != var10)) {
                    _fun78933_ip = 188;
                    continue _fun78933
                }
            case 110:
                var5 = _closure1_slot8;
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 25;
                var0 = var11[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.QuestContentImpressionTrackerNative;
                var0 = {};
                var11 = true;
                var0.overrideVisibility = var11;
                var0.questOrQuests = var10;
                var0.questContent = var9;
                var0.questContentPosition = var8;
                var0.sourceQuestContent = var7;
                var6 = function() {
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var4 = _closure2_slot4;
                    var1.quest = var4;
                    var4 = _closure2_slot1;
                    var1.questContent = var4;
                    var4 = _closure2_slot2;
                    var1.questContentPosition = var4;
                    var0 = _closure2_slot3;
                    var1.sourceQuestContent = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.children = var6;
                var0 = var5.bind(var4)(var3, var0);
                _fun78933_ip = 220;
                continue _fun78933;
            case 188:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 13;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                var0 = null;
            case 220:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5230, 5232, 33, 1297, 671, 1568, 566, 10063, 3148, 1234, 7479, 3278, 5291, 5295, 3258, 10064, 4933, 5213, 3941, 4783, 5367, 4900, 4084, 10074, 2]);