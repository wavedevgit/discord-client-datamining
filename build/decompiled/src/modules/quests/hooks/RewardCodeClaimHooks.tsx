// modules/quests/hooks/RewardCodeClaimHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.quest;
        var _closure2_slot0 = var1;
        var4 = var2.redemptionLink;
        var _closure2_slot1 = var4;
        var8 = var2.questContent;
        var _closure2_slot2 = var8;
        var7 = var2.questContentPosition;
        var _closure2_slot3 = var7;
        var6 = var2.sourceQuestContent;
        var _closure2_slot4 = var6;
        var9 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 5;
        var5 = var5[var3];
        var3 = undefined;
        var5 = var9.bind(var3)(var5);
        var3 = var5.useTrackQuestContentClickedWithImpression;
        var5 = var3.bind(var5)();
        var _closure2_slot5 = var5;
        var3 = _closure1_slot5;
        var2 = var3.useCallback;
        var9 = var1.id;
        var1 = new Array(6);
        var1[0] = var9;
        var1[1] = var8;
        var1[2] = var7;
        var1[3] = var6;
        var1[4] = var5;
        var1[5] = var4;
        var0 = function() { // Environment: var0
            _fun78399: for (var _fun78399_ip = 0;;) switch (_fun78399_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun78399_ip = 193;
                        continue _fun78399
                    }
                case 16:
                    var5 = _closure2_slot5;
                    var3 = {};
                    var11 = _closure2_slot0;
                    var1 = var11.id;
                    var3.questId = var1;
                    var10 = _closure2_slot2;
                    var3.questContent = var10;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var8 = 6;
                    var6 = var4[var8];
                    var2 = undefined;
                    var6 = var9.bind(var2)(var6);
                    var6 = var6.QuestContentCTA;
                    var6 = var6.REDEEM_REWARD;
                    var3.questContentCTA = var6;
                    var7 = _closure2_slot3;
                    var3.questContentPosition = var7;
                    var6 = _closure2_slot4;
                    var3.sourceQuestContent = var6;
                    var3 = var5.bind(var2)(var3);
                    var3 = {};
                    var11 = var11.id;
                    var3.questId = var11;
                    var3.questContent = var10;
                    var8 = var4[var8];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.QuestContentCTA;
                    var8 = var8.VISIT_REDEMPTION_LINK;
                    var3.questContentCTA = var8;
                    var3.questContentPosition = var7;
                    var3.sourceQuestContent = var6;
                    var3 = var5.bind(var2)(var3);
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                case 193:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/hooks/RewardCodeClaimHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var1 = arg0;
        var14 = var1.isClaimingReward;
        var _closure2_slot0 = var14;
        var12 = var1.isFetchingRewardCode;
        var _closure2_slot1 = var12;
        var11 = var1.questContent;
        var _closure2_slot2 = var11;
        var10 = var1.quest;
        var _closure2_slot3 = var10;
        var9 = var1.rewardCode;
        var _closure2_slot4 = var9;
        var8 = var1.preview;
        var _closure2_slot5 = var8;
        var2 = _closure1_slot5;
        var1 = var2.useState;
        var17 = false;
        var1 = var1.bind(var2)(var17);
        var15 = _closure1_slot4;
        var4 = undefined;
        var13 = 2;
        var1 = var15.bind(var4)(var1, var13);
        var7 = 0;
        var2 = var1[var7];
        var _closure2_slot6 = var2;
        var6 = 1;
        var1 = var1[var6];
        var _closure2_slot7 = var1;
        var16 = _closure1_slot5;
        var3 = var16.useState;
        var3 = var3.bind(var16)(var17);
        var3 = var15.bind(var4)(var3, var13);
        var13 = var3[var7];
        var _closure2_slot8 = var13;
        var3 = var3[var6];
        var _closure2_slot9 = var3;
        var7 = _closure1_slot5;
        var6 = var7.useCallback;
        var3 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0, arg1, arg2) { // Environment: var0
                var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                    _fun78403: for (var _fun78403_ip = 0;;) switch (_fun78403_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun78403_ip = 140;
                                continue _fun78403
                            }
                        case 10:
                            var5 = arg0;
                            var3 = arg1;
                            var1 = arg2;
                        case 19: // try_start_0
                            var7 = _closure2_slot9;
                            var4 = undefined;
                            var6 = true;
                            var6 = var7.bind(var4)(var6);
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 3;
                            var6 = var8[var6];
                            var7 = var7.bind(var4)(var6);
                            var6 = var7.claimQuestReward;
                            var1 = var6.bind(var7)(var5, var3, var1);
                            SaveGenerator(address = 75);
                        case 73:
                            return var1;
                        case 75:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun78403_ip = 103;
                                continue _fun78403
                            }
                        case 81:
                            var5 = _closure2_slot7;
                            var3 = false;
                            var5 = var5.bind(var4)(var3);
                            var2 = _closure2_slot9;
                            var2 = var2.bind(var4)(var3);
                        case 101: // try_end0
                            _fun78403_ip = 135;
                            continue _fun78403;
                        case 103:
                            return var1;
                        case 106: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var4 = _closure2_slot7;
                            var3 = undefined;
                            var2 = true;
                            var2 = var4.bind(var3)(var2);
                            var2 = _closure2_slot9;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
                        case 135:
                            var1 = undefined;
                            return var1;
                        case 140:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var4 = var3.bind(var4)();
        var3 = new Array(0);
        var4 = var6.bind(var7)(var4, var3);
        var _closure2_slot10 = var4;
        var15 = _closure1_slot5;
        var7 = var15.useCallback;
        var6 = function(arg0) { // Environment: var0
            _fun78405: for (var _fun78405_ip = 0;;) switch (_fun78405_ip) {
                case 0:
                    var0 = arg0;
                case 3: // try_start_0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchQuestRewardCode;
                    var0 = var1.bind(var2)(var0);
                case 39: // try_end0
                    _fun78405_ip = 59;
                    continue _fun78405;
                case 41: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = new Array(0);
        var3 = var7.bind(var15)(var6, var3);
        var _closure2_slot11 = var3;
        var7 = _closure1_slot5;
        var6 = var7.useEffect;
        var5 = new Array(10);
        var5[0] = var4;
        var5[1] = var3;
        var5[2] = var2;
        var5[3] = var14;
        var5[4] = var13;
        var5[5] = var12;
        var5[6] = var11;
        var5[7] = var10;
        var5[8] = var9;
        var5[9] = var8;
        var0 = function() { // Environment: var0
            _fun78406: for (var _fun78406_ip = 0;;) switch (_fun78406_ip) {
                case 0:
                    var2 = _closure2_slot5;
                    var1 = true;
                    var1 = var1 === var2;
                    if (var1) {
                        _fun78406_ip = 26;
                        continue _fun78406
                    }
                case 16:
                    var3 = _closure2_slot4;
                    var2 = null;
                    var1 = var2 != var3;
                case 26:
                    if (var1) {
                        _fun78406_ip = 33;
                        continue _fun78406
                    }
                case 29:
                    var1 = _closure2_slot6;
                case 33:
                    if (var1) {
                        _fun78406_ip = 40;
                        continue _fun78406
                    }
                case 36:
                    var1 = _closure2_slot0;
                case 40:
                    if (var1) {
                        _fun78406_ip = 47;
                        continue _fun78406
                    }
                case 43:
                    var1 = _closure2_slot8;
                case 47:
                    if (var1) {
                        _fun78406_ip = 54;
                        continue _fun78406
                    }
                case 50:
                    var1 = _closure2_slot1;
                case 54:
                    if (var1) {
                        _fun78406_ip = 212;
                        continue _fun78406
                    }
                case 60:
                    var2 = _closure2_slot7;
                    var4 = undefined;
                    var1 = false;
                    var1 = var2.bind(var4)(var1);
                    var1 = _closure2_slot3;
                    var3 = var1.userStatus;
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    if (var5) {
                        _fun78406_ip = 100;
                        continue _fun78406
                    }
                case 94:
                    var1 = var3.claimedAt;
                case 100:
                    if (!(var2 != var1)) {
                        _fun78406_ip = 153;
                        continue _fun78406
                    }
                case 104:
                    var1 = _closure2_slot3;
                    var3 = var1.userStatus;
                    var5 = var2 == var3;
                    var1 = undefined;
                    if (var5) {
                        _fun78406_ip = 129;
                        continue _fun78406
                    }
                case 123:
                    var1 = var3.claimedAt;
                case 129:
                    if (!(var2 != var1)) {
                        _fun78406_ip = 212;
                        continue _fun78406
                    }
                case 133:
                    var2 = _closure2_slot11;
                    var1 = _closure2_slot3;
                    var1 = var1.id;
                    var1 = var2.bind(var4)(var1);
                    _fun78406_ip = 212;
                    continue _fun78406;
                case 153:
                    var3 = _closure2_slot10;
                    var1 = _closure2_slot3;
                    var2 = var1.id;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 4;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.QuestRewardCodePlatforms;
                    var1 = var1.CROSS_PLATFORM;
                    var0 = _closure2_slot2;
                    var0 = var3.bind(var4)(var2, var1, var0);
                case 212:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var6.bind(var7)(var0, var5);
        var0 = {};
        var0.claimCode = var4;
        var0.fetchCode = var3;
        var0.hasError = var2;
        var0.setHasError = var1;
        return var0;
    };
    var2.useClaimOrFetchRewardCode = var4;
    var2.useHandleRedemptionLinkClick = var3;
    var1 = function arg0() {
        _fun78407: for (var _fun78407_ip = 0;;) switch (_fun78407_ip) {
            case 0:
                var3 = arg0;
                var16 = var3.claimCode;
                var _closure2_slot0 = var16;
                var15 = var3.fetchCode;
                var _closure2_slot1 = var15;
                var14 = var3.hasError;
                var _closure2_slot2 = var14;
                var13 = var3.onDismiss;
                var _closure2_slot3 = var13;
                var12 = var3.quest;
                var _closure2_slot4 = var12;
                var10 = var3.questContent;
                var _closure2_slot5 = var10;
                var9 = var3.questContentCTA;
                var11 = undefined;
                if (!(var11 === var9)) {
                    _fun78407_ip = 112;
                    continue _fun78407
                }
            case 77:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var1 = var2.bind(var11)(var1);
                var1 = var1.QuestContentCTA;
                var9 = var1.GET_REWARD_CODE;
            case 112:
                var _closure2_slot6 = var9;
                var8 = var3.questContentPosition;
                var _closure2_slot7 = var8;
                var6 = var3.redemptionLink;
                var _closure2_slot8 = var6;
                var5 = var3.sourceQuestContent;
                var _closure2_slot9 = var5;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var4 = var4.bind(var11)(var2);
                var2 = var4.useTrackQuestContentClickedWithImpression;
                var7 = var2.bind(var4)();
                var _closure2_slot10 = var7;
                var2 = _closure1_slot6;
                var4 = var2.bind(var11)(var3);
                var _closure2_slot11 = var4;
                var3 = _closure1_slot5;
                var2 = var3.useCallback;
                var1 = new Array(13);
                var1[0] = var16;
                var1[1] = var15;
                var1[2] = var14;
                var1[3] = var13;
                var13 = var12.id;
                var1[4] = var13;
                var12 = var12.userStatus;
                var13 = null;
                var13 = var13 == var12;
                var11 = undefined;
                if (var13) {
                    _fun78407_ip = 257;
                    continue _fun78407
                }
            case 251:
                var11 = var12.claimedAt;
            case 257:
                var1[5] = var11;
                var1[6] = var10;
                var1[7] = var9;
                var1[8] = var8;
                var1[9] = var7;
                var1[10] = var6;
                var1[11] = var5;
                var1[12] = var4;
                var0 = function() { // Environment: var0
                    _fun78408: for (var _fun78408_ip = 0;;) switch (_fun78408_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun78408_ip = 45;
                                continue _fun78408
                            }
                        case 10:
                            var2 = _closure2_slot8;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun78408_ip = 30;
                                continue _fun78408
                            }
                        case 20:
                            var2 = _closure2_slot11;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 30:
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun78408_ip = 210;
                            continue _fun78408;
                        case 45:
                            var1 = _closure2_slot4;
                            var4 = var1.userStatus;
                            var3 = null;
                            var5 = var3 == var4;
                            var2 = undefined;
                            var1 = undefined;
                            if (var5) {
                                _fun78408_ip = 74;
                                continue _fun78408
                            }
                        case 68:
                            var1 = var4.claimedAt;
                        case 74:
                            if (!(var3 == var1)) {
                                _fun78408_ip = 192;
                                continue _fun78408
                            }
                        case 78:
                            var6 = _closure2_slot0;
                            var5 = _closure2_slot4;
                            var3 = var5.id;
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 4;
                            var1 = var7[var1];
                            var1 = var4.bind(var2)(var1);
                            var1 = var1.QuestRewardCodePlatforms;
                            var1 = var1.CROSS_PLATFORM;
                            var4 = _closure2_slot5;
                            var1 = var6.bind(var2)(var3, var1, var4);
                            var3 = _closure2_slot10;
                            var1 = {};
                            var5 = var5.id;
                            var1.questId = var5;
                            var1.questContent = var4;
                            var4 = _closure2_slot6;
                            var1.questContentCTA = var4;
                            var4 = _closure2_slot7;
                            var1.questContentPosition = var4;
                            var4 = _closure2_slot9;
                            var1.sourceQuestContent = var4;
                            var1 = var3.bind(var2)(var1);
                            _fun78408_ip = 210;
                            continue _fun78408;
                        case 192:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot4;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 210:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useClaimRewardCodePrimaryCtaClickHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 5223, 5195, 5267, 5241, 3099, 2]);