// modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function(arg0) { // Original name: useQuestRewardClaimHandler, environment: var3
        _fun82868: for (var _fun82868_ip = 0;;) switch (_fun82868_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.quest;
                var _closure2_slot0 = var12;
                var8 = var0.hideActionSheet;
                var16 = undefined;
                if (!(var8 === var16)) {
                    _fun82868_ip = 29;
                    continue _fun82868
                }
            case 27:
                var8 = true;
            case 29:
                var _closure2_slot1 = var8;
                var7 = var0.questContent;
                if (!(var7 === var16)) {
                    _fun82868_ip = 78;
                    continue _fun82868
                }
            case 43:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var2 = var3.bind(var16)(var2);
                var2 = var2.QuestContent;
                var7 = var2.QUEST_BOTTOM_SHEET;
            case 78:
                var _closure2_slot2 = var7;
                var6 = var0.onSuccess;
                var _closure2_slot3 = var6;
                var5 = var0.sourceQuestContent;
                var _closure2_slot4 = var5;
                var _closure2_slot5 = var16;
                var _closure2_slot6 = var16;
                var _closure2_slot7 = var16;
                var _closure2_slot8 = var16;
                var _closure2_slot9 = var16;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 11;
                var3 = var14[var0];
                var4 = var11.bind(var16)(var3);
                var3 = var4.useProgressState;
                var13 = var3.bind(var4)(var12);
                var3 = 12;
                var3 = var14[var3];
                var9 = var11.bind(var16)(var3);
                var4 = var9.hasCollectiblesQuestReward;
                var3 = var12.config;
                var10 = var4.bind(var9)(var3);
                var15 = _closure1_slot4;
                var9 = var15.useMemo;
                var3 = var12.config;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getDefaultReward;
                    var0 = _closure2_slot0;
                    var0 = var0.config;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.skuId;
                    return var0;
                };
                var9 = var9.bind(var15)(var3, var4);
                var3 = 14;
                var3 = var14[var3];
                var4 = var11.bind(var16)(var3);
                var3 = var4.useFetchCollectiblesProduct;
                var0 = var14[var0];
                var0 = var11.bind(var16)(var0);
                var0 = var0.QuestProgressState;
                var11 = var0.COMPLETED;
                var14 = null;
                var0 = null;
                if (!(var13 === var11)) {
                    _fun82868_ip = 274;
                    continue _fun82868
                }
            case 266:
                var0 = null;
                if (!var10) {
                    _fun82868_ip = 274;
                    continue _fun82868
                }
            case 271:
                var0 = var9;
            case 274:
                var0 = var3.bind(var4)(var0);
                var11 = var0.product;
                _closure2_slot5 = var11;
                var19 = var0.isFetching;
                _closure2_slot6 = var19;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var4 = 15;
                var0 = var18[var4];
                var10 = var15.bind(var16)(var0);
                var9 = var10.useStateFromStoresObject;
                var0 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = {};
                    var5 = _closure1_slot8;
                    var4 = var5.isFetchingRewardCode;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.isFetchingRewardCode = var3;
                    var3 = _closure1_slot8;
                    var2 = var3.isClaimingReward;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isClaimingReward = var1;
                    return var0;
                };
                var0 = var9.bind(var10)(var3, var0);
                var3 = var0.isClaimingReward;
                var0 = var0.isFetchingRewardCode;
                _closure2_slot7 = var0;
                var9 = var18[var4];
                var17 = var15.bind(var16)(var9);
                var13 = var17.useStateFromStores;
                var9 = _closure1_slot7;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var1
                    _fun82871: for (var _fun82871_ip = 0;;) switch (_fun82871_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var0 = var1.getCurrentUser;
                            var2 = var0.bind(var1)();
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun82871_ip = 37;
                                continue _fun82871
                            }
                        case 27:
                            var1 = var2.hasVerifiedEmailOrPhone;
                            var0 = var1.bind(var2)();
                        case 37:
                            return var0;
                    }
                };
                var10 = var13.bind(var17)(var10, var9);
                _closure2_slot8 = var10;
                var4 = var18[var4];
                var17 = var15.bind(var16)(var4);
                var13 = var17.useStateFromStores;
                var4 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var1
                    _fun82872: for (var _fun82872_ip = 0;;) switch (_fun82872_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun82872_ip = 33;
                                continue _fun82872
                            }
                        case 27:
                            var0 = var1.verified;
                        case 33:
                            return var0;
                    }
                };
                var9 = var13.bind(var17)(var9, var4);
                _closure2_slot9 = var9;
                var17 = _closure1_slot4;
                var13 = var17.useMemo;
                var4 = new Array(2);
                var4[0] = var19;
                var4[1] = var0;
                var0 = function() { // Environment: var1
                    _fun82873: for (var _fun82873_ip = 0;;) switch (_fun82873_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            if (var0) {
                                _fun82873_ip = 14;
                                continue _fun82873
                            }
                        case 10:
                            var0 = _closure2_slot7;
                        case 14:
                            return var0;
                    }
                };
                var4 = var13.bind(var17)(var0, var4);
                var13 = 16;
                var0 = var18[var13];
                var21 = var15.bind(var16)(var0);
                var20 = var21.useToken;
                var17 = _closure1_slot1;
                var0 = 8;
                var19 = var18[var0];
                var19 = var17.bind(var16)(var19);
                var19 = var19.colors;
                var19 = var19.BACKGROUND_BASE_LOWER;
                var20 = var20.bind(var21)(var19);
                var19 = var18[var13];
                var22 = var15.bind(var16)(var19);
                var21 = var22.useToken;
                var19 = var18[var0];
                var19 = var17.bind(var16)(var19);
                var19 = var19.colors;
                var19 = var19.BACKGROUND_BASE_LOW;
                var19 = var21.bind(var22)(var19);
                var13 = var18[var13];
                var15 = var15.bind(var16)(var13);
                var13 = var15.useToken;
                var0 = var18[var0];
                var0 = var17.bind(var16)(var0);
                var0 = var0.colors;
                var0 = var0.BACKGROUND_BASE_LOWEST;
                var15 = var13.bind(var15)(var0);
                if (!(var14 != var11)) {
                    _fun82868_ip = 773;
                    continue _fun82868
                }
            case 623:
                var0 = {};
                var17 = var11.styles;
                var18 = var14 == var17;
                var13 = undefined;
                if (var18) {
                    _fun82868_ip = 646;
                    continue _fun82868
                }
            case 640:
                var13 = var17.buttonColors;
            case 646:
                if (!(var14 == var13)) {
                    _fun82868_ip = 654;
                    continue _fun82868
                }
            case 650:
                var13 = new Array(0);
            case 654:
                var0.buttonColors = var13;
                var17 = var11.styles;
                var18 = var14 == var17;
                var13 = undefined;
                if (var18) {
                    _fun82868_ip = 680;
                    continue _fun82868
                }
            case 674:
                var13 = var17.confettiColors;
            case 680:
                if (!(var14 == var13)) {
                    _fun82868_ip = 688;
                    continue _fun82868
                }
            case 684:
                var13 = new Array(0);
            case 688:
                var0.confettiColors = var13;
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var14 = 17;
                var13 = var18[var14];
                var13 = var17.bind(var16)(var13);
                var19 = var13.bind(var16)(var19);
                var13 = new Array(3);
                var13[0] = var19;
                var19 = var18[var14];
                var19 = var17.bind(var16)(var19);
                var19 = var19.bind(var16)(var20);
                var13[1] = var19;
                var14 = var18[var14];
                var14 = var17.bind(var16)(var14);
                var14 = var14.bind(var16)(var15);
                var13[2] = var14;
                var0.backgroundColors = var13;
                var11.styles = var0;
            case 773:
                var0 = {};
                var0.isLoading = var4;
                var0.isClaiming = var3;
                var4 = _closure1_slot4;
                var3 = var4.useCallback;
                var2 = new Array(8);
                var2[0] = var12;
                var2[1] = var11;
                var2[2] = var10;
                var2[3] = var9;
                var2[4] = var8;
                var2[5] = var7;
                var2[6] = var6;
                var2[7] = var5;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.handleRewardClaimThenView;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.quest = var4;
                    var4 = _closure2_slot5;
                    var0.product = var4;
                    var4 = _closure2_slot1;
                    var0.hideActionSheet = var4;
                    var4 = _closure2_slot2;
                    var0.questContent = var4;
                    var4 = _closure2_slot8;
                    var0.currentUserHasVerifiedEmailOrPhone = var4;
                    var4 = _closure2_slot9;
                    var0.currentUserHasVerifiedEmail = var4;
                    var4 = _closure2_slot3;
                    var0.onSuccess = var4;
                    var3 = _closure2_slot4;
                    var0.sourceQuestContent = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                var0.claim = var1;
                return var0;
        }
    };
    var _closure1_slot16 = var1;
    var0 = function(arg0) { // Original name: WatchTaskButton, environment: var3
        var0 = arg0;
        var6 = var0.questId;
        var5 = var0.sourceQuestContent;
        var10 = var0.taskDetails;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 19;
        var1 = var11[var1];
        var3 = undefined;
        var4 = var9.bind(var3)(var1);
        var2 = var4.useWatchTaskPressHandler;
        var1 = {};
        var1.questId = var6;
        var1.sourceQuestContent = var5;
        var4 = var2.bind(var4)(var1);
        var2 = _closure1_slot10;
        var0 = 20;
        var0 = var11[var0];
        var0 = var9.bind(var3)(var0);
        var1 = var0.Button;
        var0 = {
            'grow': true,
            'size': 'lg'
        };
        var0.onPress = var4;
        var4 = 21;
        var5 = var11[var4];
        var5 = var9.bind(var3)(var5);
        var7 = var5.intl;
        var6 = var7.formatToPlainString;
        var4 = var11[var4];
        var4 = var9.bind(var3)(var4);
        var4 = var4.t;
        var5 = var4.GNsKiW;
        var4 = {};
        var8 = 22;
        var8 = var11[var8];
        var9 = var9.bind(var3)(var8);
        var8 = var9.formatWatchTaskRemainingTime;
        var8 = var8.bind(var9)(var10);
        var4.remainTime = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.text = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: NextButton, environment: var3
        var0 = arg0;
        var5 = var0.onPress;
        var4 = var0.disabled;
        var3 = _closure1_slot10;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 20;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.Button;
        var0 = {
            'grow': true,
            'size': 'lg'
        };
        var0.onPress = var5;
        var0.disabled = var4;
        var4 = 21;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.a9OfTN;
        var4 = var5.bind(var6)(var4);
        var0.text = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0) { // Original name: DefibButton, environment: var3
        var0 = arg0;
        var1 = var0.questId;
        var _closure2_slot0 = var1;
        var9 = var0.loading;
        var6 = var0.disabled;
        var1 = var0.onPress;
        var _closure2_slot1 = var1;
        var0 = var0.sourceQuestContent;
        var _closure2_slot2 = var0;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 28;
        var0 = var8[var0];
        var3 = undefined;
        var1 = var7.bind(var3)(var0);
        var0 = var1.useTrackQuestContentClickedWithImpression;
        var0 = var0.bind(var1)();
        var _closure2_slot3 = var0;
        var2 = _closure1_slot10;
        var0 = 20;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Button;
        var0 = {
            'grow': true,
            'size': 'lg',
            'variant': 'secondary'
        };
        var0.loading = var9;
        var0.disabled = var6;
        var9 = _closure1_slot10;
        var5 = 29;
        var5 = var8[var5];
        var5 = var7.bind(var3)(var5);
        var6 = var5.RefreshIcon;
        var5 = {};
        var5 = var9.bind(var3)(var6, var5);
        var0.icon = var5;
        var5 = 'end';
        var0.iconPosition = var5;
        var4 = function(arg0) { // Original name: onPress, environment: var4
            _fun82878: for (var _fun82878_ip = 0;;) switch (_fun82878_ip) {
                case 0:
                    var3 = _closure2_slot3;
                    var2 = {};
                    var0 = _closure2_slot0;
                    var2.questId = var0;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 10;
                    var4 = var6[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.QuestContent;
                    var4 = var4.QUEST_BOTTOM_SHEET;
                    var2.questContent = var4;
                    var4 = 30;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.QuestContentCTA;
                    var4 = var4.DEFIBRILLATOR;
                    var2.questContentCTA = var4;
                    var4 = _closure2_slot2;
                    var2.sourceQuestContent = var4;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure2_slot1;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun82878_ip = 125;
                        continue _fun82878
                    }
                case 113:
                    var2 = _closure2_slot1;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                case 125:
                    return var0;
            }
        };
        var0.onPress = var4;
        var4 = 21;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.nPThNb;
        var4 = var5.bind(var6)(var4);
        var0.text = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0) { // Original name: ClaimButton, environment: var3
        var0 = arg0;
        var1 = var0.questId;
        var _closure2_slot0 = var1;
        var6 = var0.disabled;
        var5 = var0.loading;
        var1 = var0.onPress;
        var _closure2_slot1 = var1;
        var0 = var0.sourceQuestContent;
        var _closure2_slot2 = var0;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 28;
        var1 = var8[var1];
        var3 = undefined;
        var2 = var7.bind(var3)(var1);
        var1 = var2.useTrackQuestContentClickedWithImpression;
        var1 = var1.bind(var2)();
        var _closure2_slot3 = var1;
        var2 = _closure1_slot10;
        var0 = 20;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Button;
        var0 = {
            'grow': true,
            'size': 'lg'
        };
        var0.disabled = var6;
        var0.loading = var5;
        var4 = function() { // Original name: onPress, environment: var4
            var3 = _closure2_slot3;
            var2 = {};
            var0 = _closure2_slot0;
            var2.questId = var0;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var0 = 10;
            var4 = var6[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var4 = var4.QuestContent;
            var4 = var4.QUEST_BOTTOM_SHEET;
            var2.questContent = var4;
            var4 = 30;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.QuestContentCTA;
            var4 = var4.CLAIM_REWARD;
            var2.questContentCTA = var4;
            var4 = _closure2_slot2;
            var2.sourceQuestContent = var4;
            var2 = var3.bind(var0)(var2);
            var1 = _closure2_slot1;
            var1 = var1.bind(var0)();
            return var0;
        };
        var0.onPress = var4;
        var4 = 21;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.cfY4PE;
        var4 = var5.bind(var6)(var4);
        var0.text = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0) { // Original name: AnimatedFooter, environment: var3
        _fun82881: for (var _fun82881_ip = 0;;) switch (_fun82881_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.onLayout;
                var8 = var1.ctaButton;
                var13 = var1.backButton;
                var6 = var1.style;
                var11 = var1.withSafeArea;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun82881_ip = 42;
                    continue _fun82881
                }
            case 40:
                var11 = true;
            case 42:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var1 = null;
                var16 = var1 != var13;
                if (!var16) {
                    _fun82881_ip = 73;
                    continue _fun82881
                }
            case 67:
                var1 = false;
                var16 = var1 !== var13;
            case 73:
                _closure2_slot0 = var16;
                var9 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 31;
                var1 = var2[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var12 = var1.bottom;
                var1 = _closure1_slot13;
                var5 = var1.bind(var3)();
                var1 = 32;
                var1 = var2[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var15 = var1.width;
                _closure2_slot1 = var15;
                var1 = function() { // Original name: useReducedMotion, environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.useStateFromStores;
                    var0 = _closure1_slot6;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = function() { // Environment: var0
                        var0 = _closure1_slot6;
                        var0 = var0.useReducedMotion;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var1.bind(var3)();
                _closure2_slot2 = var1;
                var9 = _closure1_slot0;
                var10 = 33;
                var2 = var2[var10];
                var14 = var9.bind(var3)(var2);
                var9 = var14.useSharedValue;
                var2 = 0;
                if (!var16) {
                    _fun82881_ip = 187;
                    continue _fun82881
                }
            case 184:
                var2 = 1;
            case 187:
                var18 = var9.bind(var14)(var2);
                _closure2_slot3 = var18;
                var14 = _closure1_slot4;
                var9 = var14.useEffect;
                var2 = new Array(3);
                var2[0] = var16;
                var2[1] = var1;
                var2[2] = var18;
                var1 = function() { // Environment: var0
                    _fun82884: for (var _fun82884_ip = 0;;) switch (_fun82884_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var2 = var3.set;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 34;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var1);
                            var5 = var6.withTiming;
                            var1 = _closure2_slot0;
                            var4 = 0;
                            if (!var1) {
                                _fun82884_ip = 54;
                                continue _fun82884
                            }
                        case 51:
                            var4 = 1;
                        case 54:
                            var1 = {};
                            var9 = _closure2_slot2;
                            var7 = 200;
                            if (!var9) {
                                _fun82884_ip = 68;
                                continue _fun82884
                            }
                        case 66:
                            var7 = 0;
                        case 68:
                            var1.duration = var7;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var9.bind(var14)(var1, var2);
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = var17[var10];
                var9 = var16.bind(var3)(var1);
                var2 = var9.useAnimatedStyle;
                var1 = function() { // Original name: E, environment: var0
                    var0 = {
                        'opacity': null,
                        'position': 'absolute',
                        'top': 0,
                        'left': 0
                    };
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    var2 = {};
                    var1 = _closure1_slot12;
                    var2.translateX = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var14 = {};
                var14.animation = var18;
                var19 = _closure1_slot12;
                var14.H_PADDING_PX = var19;
                var1.__closure = var14;
                var14 = 7564903336036.0;
                var1.__workletHash = var14;
                var14 = _closure1_slot14;
                var1.__initData = var14;
                var14 = var2.bind(var9)(var1);
                var1 = var17[var10];
                var2 = var16.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: O, environment: var0
                    var0 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 33;
                    var2 = var9[var2];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var2);
                    var4 = var5.interpolate;
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var10 = _closure2_slot1;
                    var11 = _closure1_slot12;
                    var2 = 2;
                    var2 = var2 * var11;
                    var10 = var10 - var2;
                    var2 = new Array(2);
                    var2[0] = var10;
                    var6 = _closure2_slot1;
                    var10 = _closure1_slot12;
                    var1 = 2.5;
                    var1 = var1 * var10;
                    var6 = var6 - var1;
                    var1 = 35;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.LARGE_BUTTON_HEIGHT;
                    var1 = var6 - var1;
                    var2[1] = var1;
                    var1 = [0, 1];
                    var1 = var4.bind(var5)(var3, var1, var2);
                    var0.width = var1;
                    var1 = 'flex-end';
                    var0.alignSelf = var1;
                    return var0;
                };
                var9 = {};
                var19 = var17[var10];
                var19 = var16.bind(var3)(var19);
                var19 = var19.interpolate;
                var9.interpolate = var19;
                var9.animation = var18;
                var9.windowWidth = var15;
                var15 = _closure1_slot12;
                var9.H_PADDING_PX = var15;
                var15 = 35;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.LARGE_BUTTON_HEIGHT;
                var9.ICON_SIZE_PX = var15;
                var0.__closure = var9;
                var9 = 9095621288509.0;
                var0.__workletHash = var9;
                var9 = _closure1_slot15;
                var0.__initData = var9;
                var9 = var1.bind(var2)(var0);
                var0 = global;
                var2 = var0.Math;
                var1 = var2.max;
                var0 = _closure1_slot9;
                var15 = var1.bind(var2)(var12, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var12 = var5.container;
                var5 = new Array(3);
                var5[0] = var12;
                if (!var11) {
                    _fun82881_ip = 501;
                    continue _fun82881
                }
            case 491:
                var12 = {};
                var12.paddingBottom = var15;
                var11 = var12;
            case 501:
                var5[1] = var11;
                var5[2] = var6;
                var0.style = var5;
                var0.onLayout = var4;
                var12 = _closure1_slot10;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = var5[var10];
                var4 = var6.bind(var3)(var4);
                var11 = var4.View;
                var4 = {};
                var4.style = var14;
                var4.children = var13;
                var11 = var12.bind(var3)(var11, var4);
                var4 = new Array(2);
                var4[0] = var11;
                var7 = _closure1_slot10;
                var5 = var5[var10];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var10 = 8;
    var4 = var6[var10];
    var4 = var11.bind(var0)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_16;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'display': 'flex',
        'flexGrow': 1,
        'flexShrink': 1
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.paddingHorizontal = var10;
    var4.container = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}";
    var4.code = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}";
    var4.code = var7;
    var _closure1_slot15 = var4;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: QuestBottomSheetFooter, environment: var3
        _fun82887: for (var _fun82887_ip = 0;;) switch (_fun82887_ip) {
            case 0:
                var1 = arg0;
                var21 = var1.quest;
                var _closure2_slot0 = var21;
                var8 = var1.onLayout;
                var26 = var1.step;
                var23 = var1.isDefibrilating;
                var4 = undefined;
                if (!(var23 === var4)) {
                    _fun82887_ip = 41;
                    continue _fun82887
                }
            case 39:
                var23 = false;
            case 41:
                var16 = var1.onConnectConsoleNext;
                var11 = var1.onBack;
                var17 = var1.onDefib;
                var6 = var1.style;
                var5 = var1.withSafeArea;
                var18 = var1.sourceQuestContent;
                var _closure2_slot1 = var4;
                var2 = _closure1_slot16;
                var1 = {};
                var1.quest = var21;
                var1.sourceQuestContent = var18;
                var20 = var2.bind(var4)(var1);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 11;
                var7 = var2[var3];
                var9 = var1.bind(var4)(var7);
                var7 = var9.useQuestTaskDetails;
                var22 = var7.bind(var9)(var21);
                var7 = var2[var3];
                var9 = var1.bind(var4)(var7);
                var7 = var9.useIsQuestProgressing;
                var9 = var7.bind(var9)(var21);
                var7 = var2[var3];
                var10 = var1.bind(var4)(var7);
                var7 = var10.useTaskPlatformScreen;
                var13 = var7.bind(var10)(var21, var22);
                var10 = _closure1_slot3;
                var7 = 1;
                var7 = var10.bind(var4)(var13, var7);
                var15 = 0;
                var13 = var7[var15];
                var3 = var2[var3];
                var7 = var1.bind(var4)(var3);
                var3 = var7.useConnectedAccounts;
                var3 = var3.bind(var7)();
                var14 = var3.xboxAndPlaystationAccounts;
                _closure2_slot1 = var14;
                var10 = _closure1_slot4;
                var7 = var10.useMemo;
                var3 = new Array(2);
                var3[0] = var21;
                var3[1] = var14;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.supportedConsoles;
                    var0 = _closure2_slot0;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure2_slot1;
                        var1 = var2.find;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.type;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var7.bind(var10)(var0, var3);
                var0 = 24;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var1 = var2.useHasWatchVideoOnMobileTasks;
                var0 = var21.config;
                var10 = var1.bind(var2)(var0);
                var1 = var21.userStatus;
                var7 = null;
                var2 = var7 == var1;
                var0 = undefined;
                if (var2) {
                    _fun82887_ip = 309;
                    continue _fun82887
                }
            case 303:
                var0 = var1.completedAt;
            case 309:
                var24 = var7 != var0;
                var1 = var21.userStatus;
                var2 = var7 == var1;
                var0 = undefined;
                if (var2) {
                    _fun82887_ip = 334;
                    continue _fun82887
                }
            case 328:
                var0 = var1.claimedAt;
            case 334:
                var19 = var7 != var0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var27 = 25;
                var0 = var0[var27];
                var0 = var1.bind(var4)(var0);
                var0 = var0.QuestBottomSheetStep;
                var1 = var0.TASK_SELECT;
                var0 = null;
                if (!(var26 !== var1)) {
                    _fun82887_ip = 933;
                    continue _fun82887
                }
            case 379:
                var3 = _closure1_slot10;
                var2 = _closure1_slot21;
                var1 = {};
                var1.onLayout = var8;
                var25 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var27];
                var8 = var25.bind(var4)(var8);
                var8 = var8.QuestBottomSheetStep;
                var8 = var8.CONSOLE_CONNECT;
                if (!(var26 !== var8)) {
                    _fun82887_ip = 722;
                    continue _fun82887
                }
            case 430:
                var25 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var27];
                var8 = var25.bind(var4)(var8);
                var8 = var8.QuestBottomSheetStep;
                var25 = var8.TASK_STATUS;
                var8 = undefined;
                if (!(var26 === var25)) {
                    _fun82887_ip = 720;
                    continue _fun82887
                }
            case 468:
                if (var24) {
                    _fun82887_ip = 652;
                    continue _fun82887
                }
            case 474:
                if (var10) {
                    _fun82887_ip = 614;
                    continue _fun82887
                }
            case 480:
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var10 = 10;
                var10 = var25[var10];
                var10 = var24.bind(var4)(var10);
                var10 = var10.TaskPlatformScreen;
                var10 = var10.CONSOLE;
                if (!(var13 === var10)) {
                    _fun82887_ip = 565;
                    continue _fun82887
                }
            case 516:
                if (var9) {
                    _fun82887_ip = 565;
                    continue _fun82887
                }
            case 519:
                var13 = _closure1_slot10;
                var10 = _closure1_slot19;
                var9 = {};
                var24 = var21.id;
                var9.questId = var24;
                var9.loading = var23;
                var9.disabled = var23;
                var9.onPress = var17;
                var9.sourceQuestContent = var18;
                var9 = var13.bind(var4)(var10, var9);
                _fun82887_ip = 612;
                continue _fun82887;
            case 565:
                var17 = _closure1_slot10;
                var13 = _closure1_slot20;
                var10 = {};
                var23 = var21.id;
                var10.questId = var23;
                var23 = var20.claim;
                var10.onPress = var23;
                var23 = true;
                var10.disabled = var23;
                var10.sourceQuestContent = var18;
                var9 = var17.bind(var4)(var13, var10);
            case 612:
                _fun82887_ip = 650;
                continue _fun82887;
            case 614:
                var17 = _closure1_slot10;
                var13 = _closure1_slot17;
                var10 = {};
                var23 = var21.id;
                var10.questId = var23;
                var10.taskDetails = var22;
                var10.sourceQuestContent = var18;
                var9 = var17.bind(var4)(var13, var10);
            case 650:
                _fun82887_ip = 717;
                continue _fun82887;
            case 652:
                var17 = _closure1_slot10;
                var13 = _closure1_slot20;
                var10 = {};
                var21 = var21.id;
                var10.questId = var21;
                var21 = var20.claim;
                var10.onPress = var21;
                var10.disabled = var19;
                var19 = var20.isLoading;
                if (var19) {
                    _fun82887_ip = 701;
                    continue _fun82887
                }
            case 695:
                var19 = var20.isClaiming;
            case 701:
                var10.loading = var19;
                var10.sourceQuestContent = var18;
                var9 = var17.bind(var4)(var13, var10);
            case 717:
                var8 = var9;
            case 720:
                _fun82887_ip = 755;
                continue _fun82887;
            case 722:
                var13 = _closure1_slot10;
                var10 = _closure1_slot18;
                var9 = {};
                var9.onPress = var16;
                var14 = var14.length;
                var14 = var15 === var14;
                var9.disabled = var14;
                var8 = var13.bind(var4)(var10, var9);
            case 755:
                var1.ctaButton = var8;
                var7 = var7 != var11;
                if (!var7) {
                    _fun82887_ip = 913;
                    continue _fun82887
                }
            case 770:
                var10 = _closure1_slot10;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 26;
                var8 = var15[var8];
                var8 = var13.bind(var4)(var8);
                var9 = var8.IconButton;
                var8 = {};
                var14 = 21;
                var16 = var15[var14];
                var16 = var13.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var15[var14];
                var14 = var13.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14["13/7kX"];
                var14 = var16.bind(var17)(var14);
                var8.accessibilityLabel = var14;
                var14 = 'secondary';
                var8.variant = var14;
                var14 = _closure1_slot10;
                var12 = 27;
                var12 = var15[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.ArrowLargeLeftIcon;
                var12 = {};
                var12 = var14.bind(var4)(var13, var12);
                var8.icon = var12;
                var8.onPress = var11;
                var11 = 'lg';
                var8.size = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 913:
                var1.backButton = var7;
                var1.style = var6;
                var1.withSafeArea = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 933:
                return var0;
        }
    };
    var2.default = var3;
    var2.useQuestRewardClaimHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 1613, 5189, 4895, 33, 671, 1297, 5193, 5275, 5249, 5252, 6842, 566, 3110, 4588, 9940, 10620, 4043, 1234, 5229, 5279, 5188, 10617, 7470, 4669, 5265, 10667, 5239, 1568, 1464, 3679, 4056, 4047, 2]);