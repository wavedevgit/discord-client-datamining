// modules/quests/native/QuestCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var16.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.Image;
    var _closure1_slot5 = var3;
    var3 = var6.StyleSheet;
    var6 = var6.View;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var16.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var16.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var16.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.QuestsExperimentLocations;
    var _closure1_slot10 = var8;
    var6 = var6.QuestVariants;
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.NOOP;
    var _closure1_slot12 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.jsx;
    var _closure1_slot13 = var8;
    var8 = var6.Fragment;
    var _closure1_slot14 = var8;
    var6 = var6.jsxs;
    var _closure1_slot15 = var6;
    var15 = 9;
    var6 = var5[var15];
    var6 = var16.bind(var0)(var6);
    var6 = var6.colors;
    var18 = var6.BACKGROUND_SURFACE_HIGH;
    var6 = var5[var15];
    var6 = var16.bind(var0)(var6);
    var6 = var6.colors;
    var17 = var6.BORDER_SUBTLE;
    var6 = 10;
    var8 = var5[var6];
    var10 = var4.bind(var0)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg0) { // Environment: var1
        _fun82797: for (var _fun82797_ip = 0;;) switch (_fun82797_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.theme;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var2 = undefined;
                var4 = var4.bind(var2)(var1);
                var1 = var4.isThemeDark;
                var1 = var1.bind(var4)(var5);
                var4 = _closure1_slot1;
                var8 = 9;
                var3 = var3[var8];
                var3 = var4.bind(var2)(var3);
                var4 = var3.internal;
                var3 = var4.resolveSemanticColor;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var7.bind(var2)(var6);
                var6 = var6.colors;
                if (var1) {
                    _fun82797_ip = 106;
                    continue _fun82797
                }
            case 98:
                var1 = var6.BLACK;
                _fun82797_ip = 112;
                continue _fun82797;
            case 106:
                var1 = var6.BACKGROUND_SURFACE_HIGH;
            case 112:
                var3 = var3.bind(var4)(var5, var1);
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 12;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.hexOpacityToRgba;
                var0 = 0;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var12 = var9.bind(var10)(var8);
    var8 = var5[var6];
    var10 = var4.bind(var0)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg0) { // Environment: var1
        _fun82798: for (var _fun82798_ip = 0;;) switch (_fun82798_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.theme;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 11;
                var3 = var1[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isThemeDark;
                var4 = var3.bind(var4)(var6);
                var3 = _closure1_slot1;
                var8 = 9;
                var1 = var1[var8];
                var1 = var3.bind(var2)(var1);
                var5 = var1.internal;
                var3 = var5.resolveSemanticColor;
                var7 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var7.bind(var2)(var1);
                var7 = var1.colors;
                if (var4) {
                    _fun82798_ip = 106;
                    continue _fun82798
                }
            case 98:
                var1 = var7.BLACK;
                _fun82798_ip = 112;
                continue _fun82798;
            case 106:
                var1 = var7.BACKGROUND_SURFACE_HIGH;
            case 112:
                var3 = var3.bind(var5)(var6, var1);
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.hexOpacityToRgba;
                var0 = 0.5;
                if (!var4) {
                    _fun82798_ip = 167;
                    continue _fun82798
                }
            case 157:
                var0 = 0.8;
            case 167:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var11 = var9.bind(var10)(var8);
    var8 = var5[var6];
    var10 = var4.bind(var0)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg0) { // Environment: var1
        _fun82799: for (var _fun82799_ip = 0;;) switch (_fun82799_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.theme;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isThemeDark;
                var0 = var0.bind(var2)(var4);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.colors;
                if (var0) {
                    _fun82799_ip = 81;
                    continue _fun82799
                }
            case 73:
                var0 = var1.BLACK;
                _fun82799_ip = 87;
                continue _fun82799;
            case 81:
                var0 = var1.BACKGROUND_SURFACE_HIGH;
            case 87:
                return var0;
        }
    };
    var10 = var9.bind(var10)(var8);
    var8 = var5[var6];
    var13 = var4.bind(var0)(var8);
    var9 = var13.createStyles;
    var8 = {};
    var14 = {
        'position': 'relative',
        'padding': 0
    };
    var19 = var5[var15];
    var19 = var16.bind(var0)(var19);
    var19 = var19.radii;
    var19 = var19.sm;
    var14.borderRadius = var19;
    var14.backgroundColor = var18;
    var18 = var5[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_16;
    var14.marginBottom = var18;
    var18 = 'hidden';
    var14.overflow = var18;
    var8.container = var14;
    var14 = {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'flex-end'
    };
    var18 = 'flex';
    var19 = var5[var15];
    var19 = var16.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_12;
    var14.padding = var19;
    var8.heroContainer = var14;
    var14 = {};
    var19 = 'cover';
    var14.resizeMode = var19;
    var21 = var3.absoluteFillObject;
    var22 = var14;
    var19 = copyDataProperties(var22, var21);
    var8.heroImg = var14;
    var3 = var3.absoluteFillObject;
    var8.heroLinearGradientOverlay = var3;
    var3 = {};
    var14 = 'absolute';
    var3.position = var14;
    var14 = var5[var15];
    var14 = var16.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var3.top = var14;
    var14 = var5[var15];
    var14 = var16.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var3.right = var14;
    var14 = var5[var15];
    var14 = var16.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BRAND;
    var3.backgroundColor = var14;
    var14 = var5[var15];
    var14 = var16.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var3.padding = var14;
    var14 = var5[var15];
    var14 = var16.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var3.borderRadius = var14;
    var14 = var5[var15];
    var14 = var16.bind(var0)(var14);
    var14 = var14.shadows;
    var21 = var14.SHADOW_LOW;
    var22 = var3;
    var14 = copyDataProperties(var22, var21);
    var8.previewBadge = var3;
    var14 = {
        'height': 64,
        'width': 64
    };
    var3 = 64;
    var19 = var5[var15];
    var19 = var16.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_12;
    var14.marginRight = var19;
    var8.rewardImgContainer = var14;
    var14 = {
        'height': '100%',
        'width': '100%'
    };
    var19 = var5[var15];
    var19 = var16.bind(var0)(var19);
    var19 = var19.radii;
    var19 = var19.sm;
    var14.borderRadius = var19;
    var8.rewardImg = var14;
    var14 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'justifyContent': 'space-between',
        'alignItems': 'flex-end'
    };
    var8.heroFooterContainer = var14;
    var14 = {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'flex-start'
    };
    var8.heroFooterLeftContainer = var14;
    var14 = {};
    var14.display = var18;
    var18 = var5[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_12;
    var14.padding = var18;
    var8.detailsWrapper = var14;
    var14 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var8.detailsContainer = var14;
    var14 = {};
    var18 = var5[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_4;
    var14.marginBottom = var18;
    var8.questName = var14;
    var14 = {
        'flex': 1,
        'justifyContent': 'center'
    };
    var8.detailsTextContainer = var14;
    var14 = {
        'borderTopWidth': 1,
        'borderTopColor': null,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var14.borderTopColor = var17;
    var15 = var5[var15];
    var15 = var16.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var14.padding = var15;
    var8.buttonContainers = var14;
    var8 = var9.bind(var13)(var8);
    var _closure1_slot16 = var8;
    var6 = var5[var6];
    var9 = var4.bind(var0)(var6);
    var8 = var9.createStyleProperties;
    var6 = {};
    var6.gradientStart = var12;
    var6.gradientMid = var11;
    var6.gradientEnd = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot17 = var6;
    var6 = var7.memo;
    var1 = function(arg0) { // Environment: var1
        _fun82800: for (var _fun82800_ip = 0;;) switch (_fun82800_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.containerPadding;
                var0 = var1.onLayout;
                var _closure2_slot0 = var0;
                var0 = var1.quest;
                var _closure2_slot1 = var0;
                var9 = var1.questContent;
                var4 = undefined;
                if (!(var4 === var9)) {
                    _fun82800_ip = 78;
                    continue _fun82800
                }
            case 43:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 13;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.QuestContent;
                var9 = var2.QUEST_HOME_MOBILE;
            case 78:
                var _closure2_slot2 = var9;
                var2 = var1.questContentPosition;
                var _closure2_slot3 = var2;
                var13 = var1.sourceQuestContent;
                var _closure2_slot4 = var13;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = 14;
                var3 = var1[var3];
                var6 = var2.bind(var4)(var3);
                var5 = var6.getQuestLogger;
                var3 = {};
                var3.quest = var0;
                var8 = _closure1_slot10;
                var8 = var8.QUEST_HOME_MOBILE;
                var3.location = var8;
                var3 = var5.bind(var6)(var3);
                var _closure2_slot5 = var3;
                var3 = 15;
                var3 = var1[var3];
                var5 = var2.bind(var4)(var3);
                var3 = var5.useTrackQuestContentClickedWithImpression;
                var3 = var3.bind(var5)();
                var _closure2_slot6 = var3;
                var21 = 16;
                var3 = var1[var21];
                var5 = var2.bind(var4)(var3);
                var3 = var5.useQuestTaskDetails;
                var10 = var3.bind(var5)(var0);
                var _closure2_slot7 = var10;
                var1 = var1[var21];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useQuestCompletionDetails;
                var1 = var1.bind(var2)(var0);
                var33 = var1.completedRatio;
                var2 = var0.userStatus;
                var20 = null;
                var3 = var20 == var2;
                var1 = undefined;
                if (var3) {
                    _fun82800_ip = 263;
                    continue _fun82800
                }
            case 257:
                var1 = var2.enrolledAt;
            case 263:
                var8 = var20 != var1;
                var1 = _closure1_slot16;
                var22 = var1.bind(var4)();
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var18 = 17;
                var1 = var3[var18];
                var5 = var6.bind(var4)(var1);
                var2 = var5.useQuestsInstructionsToWinReward;
                var1 = {};
                var1.quest = var0;
                var1.taskDetails = var10;
                var10 = _closure1_slot10;
                var10 = var10.QUEST_HOME_MOBILE;
                var1.location = var10;
                var1.questContent = var9;
                var1.sourceQuestContent = var13;
                var2 = var2.bind(var5)(var1);
                var5 = _closure1_slot1;
                var1 = 18;
                var1 = var3[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var5 = var1.width;
                var1 = 2;
                var1 = var1 * var7;
                var1 = var5 - var1;
                var _closure2_slot8 = var1;
                var5 = 0.2803030303030303;
                var24 = var5 * var1;
                var _closure2_slot9 = var24;
                var9 = _closure1_slot4;
                var7 = var9.useMemo;
                var5 = new Array(3);
                var5[0] = var0;
                var5[1] = var1;
                var5[2] = var24;
                var1 = function() { // Environment: var26
                    _fun82801: for (var _fun82801_ip = 0;;) switch (_fun82801_ip) {
                        case 0:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 19;
                            var0 = var9[var6];
                            var5 = undefined;
                            var7 = var8.bind(var5)(var0);
                            var4 = var7.getQuestAsset;
                            var2 = _closure2_slot1;
                            var1 = var9[var6];
                            var1 = var8.bind(var5)(var1);
                            var1 = var1.QuestAssetType;
                            var1 = var1.HERO;
                            var2 = var4.bind(var7)(var2, var1);
                            var1 = global;
                            var7 = var1.Math;
                            var4 = var7.floor;
                            var8 = _closure1_slot1;
                            var1 = 20;
                            var1 = var9[var1];
                            var1 = var8.bind(var5)(var1);
                            var1 = var1.bind(var5)();
                            var1 = var4.bind(var7)(var1);
                            var4 = _closure2_slot8;
                            var8 = var4 * var1;
                            var0 = _closure2_slot9;
                            var7 = var0 * var1;
                            var0 = var2.isAnimated;
                            var1 = {};
                            var11 = var1;
                            var10 = var2;
                            var4 = copyDataProperties(var11, var10);
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var6 = var4.bind(var5)(var3);
                            if (var0) {
                                _fun82801_ip = 209;
                                continue _fun82801
                            }
                        case 158:
                            var4 = var6.getAssetUrlWithMediaProxyQueryParams;
                            var3 = var2.url;
                            var0 = {};
                            var0.width = var8;
                            var0.height = var7;
                            var5 = 'webp';
                            var0.format = var5;
                            var3 = var4.bind(var6)(var3, var0);
                            var0 = 'url';
                            var1[var0] = var3;
                            var0 = var1;
                            _fun82801_ip = 259;
                            continue _fun82801;
                        case 209:
                            var5 = var6.convertVideoToFirstFrameImageWithMediaProxy;
                            var4 = var2.url;
                            var3 = {};
                            var3.width = var8;
                            var3.height = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = null;
                            if (!(var4 == var3)) {
                                _fun82801_ip = 247;
                                continue _fun82801
                            }
                        case 242:
                            var3 = var2.url;
                        case 247:
                            var2 = 'url';
                            var1[var2] = var3;
                            var0 = var1;
                        case 259:
                            return var0;
                    }
                };
                var37 = var7.bind(var9)(var1, var5);
                var10 = 21;
                var1 = var3[var10];
                var5 = var6.bind(var4)(var1);
                var1 = var5.useQuestGameLogotypeAssetUrl;
                var32 = var1.bind(var5)(var0);
                var1 = _closure1_slot17;
                var1 = var1.bind(var4)();
                var31 = var1.gradientStart;
                var30 = var1.gradientMid;
                var29 = var1.gradientEnd;
                var5 = 22;
                var1 = var3[var5];
                var9 = var6.bind(var4)(var1);
                var7 = var9.getDefaultRewardNameWithArticle;
                var1 = var0.config;
                var7 = var7.bind(var9)(var1);
                var _closure2_slot10 = var7;
                var1 = 23;
                var9 = var3[var1];
                var15 = var6.bind(var4)(var9);
                var12 = var15.useStateFromStoresObject;
                var9 = _closure1_slot9;
                var11 = new Array(1);
                var11[0] = var9;
                var9 = function() { // Environment: var26
                    var0 = {};
                    var1 = _closure1_slot9;
                    var4 = var1.getRewards;
                    var2 = _closure2_slot1;
                    var3 = var2.id;
                    var3 = var4.bind(var1)(var3);
                    var0.reward = var3;
                    var4 = var1.isFetchingRewardCode;
                    var3 = var2.id;
                    var3 = var4.bind(var1)(var3);
                    var0.isFetchingRewardCode = var3;
                    var4 = var1.isClaimingReward;
                    var3 = var2.id;
                    var3 = var4.bind(var1)(var3);
                    var0.isClaimingReward = var3;
                    var3 = var1.isEnrolling;
                    var2 = var2.id;
                    var2 = var3.bind(var1)(var2);
                    var0.isEnrolling = var2;
                    var1 = var1.questEnrollmentBlockedUntil;
                    var0.questEnrollmentBlockedUntil = var1;
                    return var0;
                };
                var9 = var12.bind(var15)(var11, var9);
                var11 = var9.isFetchingRewardCode;
                var _closure2_slot11 = var11;
                var11 = var9.isClaimingReward;
                var _closure2_slot12 = var11;
                var11 = var9.isEnrolling;
                var _closure2_slot13 = var11;
                var19 = var9.questEnrollmentBlockedUntil;
                var _closure2_slot14 = var19;
                var3 = var3[var21];
                var11 = var6.bind(var4)(var3);
                var9 = var11.useQuestFormattedDate;
                var3 = var0.userStatus;
                var12 = var20 == var3;
                var6 = undefined;
                if (var12) {
                    _fun82800_ip = 638;
                    continue _fun82800
                }
            case 632:
                var6 = var3.completedAt;
            case 638:
                var3 = {
                    'year': 'numeric',
                    'month': 'long',
                    'day': 'numeric'
                };
                var6 = var9.bind(var11)(var6, var3);
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var11 = 24;
                var11 = var3[var11];
                var12 = var9.bind(var4)(var11);
                var11 = var12.hasWatchVideoTasks;
                var12 = var11.bind(var12)(var0);
                var _closure2_slot15 = var12;
                var3 = var3[var10];
                var10 = var9.bind(var4)(var3);
                var9 = var10.useHasWatchVideoOnMobileTasks;
                var3 = var0.config;
                var11 = var9.bind(var10)(var3);
                var _closure2_slot16 = var11;
                var9 = var0.userStatus;
                var10 = var20 == var9;
                var3 = undefined;
                if (var10) {
                    _fun82800_ip = 743;
                    continue _fun82800
                }
            case 737:
                var3 = var9.enrolledAt;
            case 743:
                var16 = var20 != var3;
                var _closure2_slot17 = var16;
                var9 = var0.userStatus;
                var10 = var20 == var9;
                var3 = undefined;
                if (var10) {
                    _fun82800_ip = 772;
                    continue _fun82800
                }
            case 766:
                var3 = var9.completedAt;
            case 772:
                var10 = var20 != var3;
                var _closure2_slot18 = var10;
                var9 = var0.userStatus;
                var15 = var20 == var9;
                var3 = undefined;
                if (var15) {
                    _fun82800_ip = 801;
                    continue _fun82800
                }
            case 795:
                var3 = var9.claimedAt;
            case 801:
                var9 = var20 != var3;
                var _closure2_slot19 = var9;
                var17 = _closure1_slot0;
                var23 = _closure1_slot2;
                var3 = 25;
                var15 = var23[var3];
                var25 = var17.bind(var4)(var15);
                var15 = var25.isQuestExpired;
                var15 = var15.bind(var25)(var0);
                var _closure2_slot20 = var15;
                var3 = var23[var3];
                var25 = var17.bind(var4)(var3);
                var3 = var25.getIsQuestExpiredButWithinThirtyDayLookback;
                var3 = var3.bind(var25)(var0);
                var _closure2_slot21 = var3;
                var3 = 26;
                var3 = var23[var3];
                var27 = var17.bind(var4)(var3);
                var25 = var27.getDefaultReward;
                var3 = var0.config;
                var3 = var25.bind(var27)(var3);
                var25 = var3.skuId;
                var27 = _closure1_slot1;
                var3 = 27;
                var3 = var23[var3];
                var3 = var27.bind(var4)(var3);
                var28 = var3.bind(var4)();
                var3 = 11;
                var3 = var23[var3];
                var27 = var17.bind(var4)(var3);
                var3 = var27.isThemeDark;
                var36 = var3.bind(var27)(var28);
                var3 = var23[var5];
                var28 = var17.bind(var4)(var3);
                var27 = var28.hasCollectiblesQuestReward;
                var3 = var0.config;
                var27 = var27.bind(var28)(var3);
                var3 = 28;
                var3 = var23[var3];
                var23 = var17.bind(var4)(var3);
                var17 = var23.useFetchCollectiblesProduct;
                var3 = null;
                if (!var27) {
                    _fun82800_ip = 1001;
                    continue _fun82800
                }
            case 993:
                var3 = null;
                if (!var10) {
                    _fun82800_ip = 1001;
                    continue _fun82800
                }
            case 998:
                var3 = var25;
            case 1001:
                var3 = var17.bind(var23)(var3);
                var17 = var3.product;
                var _closure2_slot22 = var17;
                var3 = var3.isFetching;
                var _closure2_slot23 = var3;
                var17 = _closure1_slot0;
                var23 = _closure1_slot2;
                var3 = var23[var1];
                var34 = var17.bind(var4)(var3);
                var28 = var34.useStateFromStores;
                var3 = _closure1_slot8;
                var27 = new Array(1);
                var27[0] = var3;
                var25 = function() { // Environment: var26
                    _fun82803: for (var _fun82803_ip = 0;;) switch (_fun82803_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var0 = var1.getCurrentUser;
                            var2 = var0.bind(var1)();
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun82803_ip = 37;
                                continue _fun82803
                            }
                        case 27:
                            var1 = var2.hasVerifiedEmailOrPhone;
                            var0 = var1.bind(var2)();
                        case 37:
                            return var0;
                    }
                };
                var25 = var28.bind(var34)(var27, var25);
                var _closure2_slot24 = var25;
                var25 = var23[var1];
                var28 = var17.bind(var4)(var25);
                var27 = var28.useStateFromStores;
                var25 = new Array(1);
                var25[0] = var3;
                var3 = function() { // Environment: var26
                    _fun82804: for (var _fun82804_ip = 0;;) switch (_fun82804_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun82804_ip = 33;
                                continue _fun82804
                            }
                        case 27:
                            var0 = var1.verified;
                        case 33:
                            return var0;
                    }
                };
                var3 = var27.bind(var28)(var25, var3);
                var _closure2_slot25 = var3;
                var1 = var23[var1];
                var27 = var17.bind(var4)(var1);
                var25 = var27.useStateFromStores;
                var1 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var26
                    var2 = _closure1_slot7;
                    var1 = var2.getApplication;
                    var0 = _closure2_slot1;
                    var0 = var0.config;
                    var0 = var0.application;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var27 = var25.bind(var27)(var3, var1);
                var _closure2_slot26 = var27;
                var1 = 29;
                var1 = var23[var1];
                var3 = var17.bind(var4)(var1);
                var1 = var3.useCanLaunchFrame;
                var3 = var1.bind(var3)(var27);
                var _closure2_slot27 = var3;
                var1 = 30;
                var1 = var23[var1];
                var17 = var17.bind(var4)(var1);
                var1 = var17.canLaunchActivity;
                var1 = var1.bind(var17)(var0);
                if (!var1) {
                    _fun82800_ip = 1243;
                    continue _fun82800
                }
            case 1212:
                var17 = var0.config;
                var25 = var17.features;
                var23 = var25.includes;
                var17 = _closure1_slot11;
                var17 = var17.MOBILE_ACTIVITY_QUEST;
                var1 = var23.bind(var25)(var17);
            case 1243:
                if (!var1) {
                    _fun82800_ip = 1301;
                    continue _fun82800
                }
            case 1246:
                var23 = _closure1_slot1;
                var25 = _closure1_slot2;
                var17 = 31;
                var17 = var25[var17];
                var23 = var23.bind(var4)(var17);
                var25 = var20 == var27;
                var17 = undefined;
                if (var25) {
                    _fun82800_ip = 1296;
                    continue _fun82800
                }
            case 1275:
                var25 = var27.embeddedActivityConfig;
                var28 = var20 == var25;
                var17 = undefined;
                if (var28) {
                    _fun82800_ip = 1296;
                    continue _fun82800
                }
            case 1290:
                var17 = var25.supported_platforms;
            case 1296:
                var1 = var23.bind(var4)(var17);
            case 1301:
                if (!var1) {
                    _fun82800_ip = 1343;
                    continue _fun82800
                }
            case 1304:
                if (var3) {
                    _fun82800_ip = 1340;
                    continue _fun82800
                }
            case 1307:
                var23 = var20 == var27;
                var17 = undefined;
                if (var23) {
                    _fun82800_ip = 1336;
                    continue _fun82800
                }
            case 1316:
                var23 = var27.bot;
                var25 = var20 == var23;
                var17 = undefined;
                if (var25) {
                    _fun82800_ip = 1336;
                    continue _fun82800
                }
            case 1331:
                var17 = var23.id;
            case 1336:
                var3 = var20 != var17;
            case 1340:
                var1 = var3;
            case 1343:
                var _closure2_slot28 = var1;
                var17 = _closure1_slot4;
                var23 = var17.useEffect;
                var3 = new Array(3);
                var3[0] = var27;
                var1 = var0.config;
                var1 = var1.application;
                var1 = var1.id;
                var3[1] = var1;
                var1 = var0.config;
                var1 = var1.features;
                var3[2] = var1;
                var1 = function() { // Environment: var26
                    _fun82806: for (var _fun82806_ip = 0;;) switch (_fun82806_ip) {
                        case 0:
                            var2 = _closure2_slot26;
                            var1 = null;
                            var1 = var1 == var2;
                            if (!var1) {
                                _fun82806_ip = 54;
                                continue _fun82806
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var2 = var2.config;
                            var4 = var2.features;
                            var3 = var4.includes;
                            var2 = _closure1_slot11;
                            var2 = var2.MOBILE_ACTIVITY_QUEST;
                            var1 = var3.bind(var4)(var2);
                        case 54:
                            if (!var1) {
                                _fun82806_ip = 123;
                                continue _fun82806
                            }
                        case 57:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 32;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchApplications;
                            var0 = _closure2_slot1;
                            var0 = var0.config;
                            var0 = var0.application;
                            var0 = var0.id;
                            var1 = new Array(1);
                            var1[0] = var0;
                            var0 = false;
                            var0 = var2.bind(var3)(var1, var0);
                        case 123:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var23.bind(var17)(var1, var3);
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var23 = 33;
                var25 = var1[var23];
                var38 = var3.bind(var4)(var25);
                var34 = var38.useToken;
                var35 = _closure1_slot1;
                var25 = 9;
                var28 = var1[var25];
                var28 = var35.bind(var4)(var28);
                var28 = var28.colors;
                var28 = var28.BACKGROUND_BASE_LOWER;
                var28 = var34.bind(var38)(var28);
                var _closure2_slot29 = var28;
                var28 = var1[var23];
                var38 = var3.bind(var4)(var28);
                var34 = var38.useToken;
                var28 = var1[var25];
                var28 = var35.bind(var4)(var28);
                var28 = var28.colors;
                var28 = var28.BACKGROUND_BASE_LOW;
                var28 = var34.bind(var38)(var28);
                var _closure2_slot30 = var28;
                var23 = var1[var23];
                var34 = var3.bind(var4)(var23);
                var28 = var34.useToken;
                var23 = var1[var25];
                var23 = var35.bind(var4)(var23);
                var23 = var23.colors;
                var23 = var23.BACKGROUND_BASE_LOWEST;
                var23 = var28.bind(var34)(var23);
                var _closure2_slot31 = var23;
                var21 = var1[var21];
                var34 = var3.bind(var4)(var21);
                var28 = var34.useQuestFormattedDate;
                var21 = var0.config;
                var23 = var21.expiresAt;
                var21 = {
                    'month': 'numeric',
                    'day': 'numeric'
                };
                var42 = var28.bind(var34)(var23, var21);
                var _closure2_slot32 = var42;
                var21 = function arg0() {
                    var2 = _closure2_slot6;
                    var1 = {};
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var1.questId = var3;
                    var3 = _closure2_slot2;
                    var1.questContent = var3;
                    var3 = arg0;
                    var1.questContentCTA = var3;
                    var0 = _closure2_slot4;
                    var1.sourceQuestContent = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var _closure2_slot33 = var21;
                var21 = function() {
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 34;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 36;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 35;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var2.questId = var6;
                    var6 = _closure2_slot3;
                    var2.questContentPosition = var6;
                    var1 = _closure2_slot4;
                    var2.sourceQuestContent = var1;
                    var1 = 'QuestBottomSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var _closure2_slot34 = var21;
                var18 = var1[var18];
                var23 = var3.bind(var4)(var18);
                var21 = var23.usePrimaryCtaCopy;
                var18 = {};
                var18.quest = var0;
                var18.application = var27;
                var18 = var21.bind(var23)(var18);
                var _closure2_slot35 = var18;
                var18 = function() { // Environment: var26
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun82811: for (var _fun82811_ip = 0;;) switch (_fun82811_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun82811_ip = 252;
                                        continue _fun82811
                                    }
                                case 10:
                                    var1 = _closure2_slot27;
                                    if (var1) {
                                        _fun82811_ip = 173;
                                        continue _fun82811
                                    }
                                case 23:
                                    var1 = _closure2_slot26;
                                    var2 = null;
                                    var5 = var2 == var1;
                                    var3 = undefined;
                                    var1 = undefined;
                                    if (var5) {
                                        _fun82811_ip = 64;
                                        continue _fun82811
                                    }
                                case 40:
                                    var5 = _closure2_slot26;
                                    var5 = var5.bot;
                                    var6 = var2 == var5;
                                    var1 = undefined;
                                    if (var6) {
                                        _fun82811_ip = 64;
                                        continue _fun82811
                                    }
                                case 59:
                                    var1 = var5.id;
                                case 64:
                                    if (!(var2 != var1)) {
                                        _fun82811_ip = 244;
                                        continue _fun82811
                                    }
                                case 71:
                                    var2 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var1 = 38;
                                    var1 = var5[var1];
                                    var3 = var2.bind(var3)(var1);
                                    var2 = var3.launchActivityInBotDM;
                                    var1 = {};
                                    var5 = _closure2_slot1;
                                    var5 = var5.config;
                                    var5 = var5.application;
                                    var5 = var5.id;
                                    var1.appId = var5;
                                    var5 = _closure2_slot26;
                                    var5 = var5.bot;
                                    var5 = var5.id;
                                    var1.botId = var5;
                                    var5 = new Array(0);
                                    var1.analyticsLocations = var5;
                                    var1 = var2.bind(var3)(var1);
                                    SaveGenerator(address = 164);
                                case 162:
                                    return var1;
                                case 164:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (!var2) {
                                        _fun82811_ip = 244;
                                        continue _fun82811
                                    }
                                case 170:
                                    return var1;
                                case 173:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 37;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.launchFrame;
                                    var1 = {};
                                    var4 = _closure2_slot1;
                                    var4 = var4.config;
                                    var4 = var4.application;
                                    var4 = var4.id;
                                    var1.applicationId = var4;
                                    var1 = var2.bind(var3)(var1);
                                    SaveGenerator(address = 238);
                                case 236:
                                    return var1;
                                case 238:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun82811_ip = 249;
                                        continue _fun82811
                                    }
                                case 244:
                                    var2 = undefined;
                                    return var2;
                                case 249:
                                    return var1;
                                case 252:
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
                var18 = var18.bind(var4)();
                var _closure2_slot36 = var18;
                var18 = function() { // Environment: var26
                    _fun82813: for (var _fun82813_ip = 0;;) switch (_fun82813_ip) {
                        case 0:
                            var0 = _closure2_slot22;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun82813_ip = 193;
                                continue _fun82813
                            }
                        case 18:
                            var1 = _closure2_slot22;
                            var0 = {};
                            var6 = var1.styles;
                            var8 = var5 == var6;
                            var7 = undefined;
                            var4 = undefined;
                            if (var8) {
                                _fun82813_ip = 47;
                                continue _fun82813
                            }
                        case 41:
                            var4 = var6.buttonColors;
                        case 47:
                            if (!(var5 == var4)) {
                                _fun82813_ip = 55;
                                continue _fun82813
                            }
                        case 51:
                            var4 = new Array(0);
                        case 55:
                            var0.buttonColors = var4;
                            var4 = _closure2_slot22;
                            var6 = var4.styles;
                            var8 = var5 == var6;
                            var4 = undefined;
                            if (var8) {
                                _fun82813_ip = 85;
                                continue _fun82813
                            }
                        case 79:
                            var4 = var6.confettiColors;
                        case 85:
                            if (!(var5 == var4)) {
                                _fun82813_ip = 93;
                                continue _fun82813
                            }
                        case 89:
                            var4 = new Array(0);
                        case 93:
                            var0.confettiColors = var4;
                            var6 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var5 = 39;
                            var4 = var8[var5];
                            var9 = var6.bind(var7)(var4);
                            var4 = _closure2_slot30;
                            var9 = var9.bind(var7)(var4);
                            var4 = new Array(3);
                            var4[0] = var9;
                            var9 = var8[var5];
                            var10 = var6.bind(var7)(var9);
                            var9 = _closure2_slot29;
                            var9 = var10.bind(var7)(var9);
                            var4[1] = var9;
                            var5 = var8[var5];
                            var6 = var6.bind(var7)(var5);
                            var5 = _closure2_slot31;
                            var5 = var6.bind(var7)(var5);
                            var4[2] = var5;
                            var0.backgroundColors = var4;
                            var1.styles = var0;
                        case 193:
                            var0 = _closure2_slot19;
                            if (var0) {
                                _fun82813_ip = 826;
                                continue _fun82813
                            }
                        case 203:
                            var0 = _closure2_slot18;
                            if (!var0) {
                                _fun82813_ip = 237;
                                continue _fun82813
                            }
                        case 210:
                            var0 = _closure2_slot20;
                            if (!var0) {
                                _fun82813_ip = 721;
                                continue _fun82813
                            }
                        case 220:
                            var0 = _closure2_slot20;
                            if (!var0) {
                                _fun82813_ip = 237;
                                continue _fun82813
                            }
                        case 227:
                            var0 = _closure2_slot21;
                            if (var0) {
                                _fun82813_ip = 721;
                                continue _fun82813
                            }
                        case 237:
                            var0 = _closure2_slot20;
                            if (var0) {
                                _fun82813_ip = 591;
                                continue _fun82813
                            }
                        case 247:
                            var0 = _closure2_slot17;
                            if (!var0) {
                                _fun82813_ip = 264;
                                continue _fun82813
                            }
                        case 254:
                            var0 = _closure2_slot15;
                            if (var0) {
                                _fun82813_ip = 520;
                                continue _fun82813
                            }
                        case 264:
                            var0 = _closure2_slot17;
                            if (!var0) {
                                _fun82813_ip = 281;
                                continue _fun82813
                            }
                        case 271:
                            var0 = _closure2_slot28;
                            if (var0) {
                                _fun82813_ip = 463;
                                continue _fun82813
                            }
                        case 281:
                            var0 = _closure2_slot17;
                            if (!var0) {
                                _fun82813_ip = 397;
                                continue _fun82813
                            }
                        case 288:
                            var0 = _closure2_slot15;
                            if (var0) {
                                _fun82813_ip = 397;
                                continue _fun82813
                            }
                        case 295:
                            var0 = _closure2_slot28;
                            if (var0) {
                                _fun82813_ip = 397;
                                continue _fun82813
                            }
                        case 302:
                            var0 = {
                                'text': null,
                                'variant': 'secondary',
                                'disabled': false
                            };
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 40;
                            var4 = var8[var1];
                            var6 = undefined;
                            var4 = var7.bind(var6)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var1 = var8[var1];
                            var1 = var7.bind(var6)(var1);
                            var1 = var1.t;
                            var1 = var1.JiosAn;
                            var1 = var4.bind(var5)(var1);
                            var0.text = var1;
                            var1 = function() {
                                var3 = _closure2_slot5;
                                var2 = var3.log;
                                var0 = 'Navigating to console connection action sheet';
                                var0 = var2.bind(var3)(var0);
                                var3 = _closure2_slot33;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 41;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.QuestContentCTA;
                                var2 = var2.VIEW_REQUIREMENTS;
                                var2 = var3.bind(var0)(var2);
                                var1 = _closure2_slot34;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var0.onPress = var1;
                            _fun82813_ip = 461;
                            continue _fun82813;
                        case 397:
                            var1 = {};
                            var4 = _closure2_slot35;
                            var1.text = var4;
                            var4 = false;
                            var1.disabled = var4;
                            var4 = _closure2_slot13;
                            var1.loading = var4;
                            var6 = _closure1_slot3;
                            var5 = undefined;
                            var4 = function*() { // Environment: var2
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun82821: for (var _fun82821_ip = 0;;) switch (_fun82821_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun82821_ip = 302;
                                                continue _fun82821
                                            }
                                        case 10:
                                            var3 = _closure2_slot5;
                                            var2 = var3.log;
                                            var1 = 'Enrolling in quest';
                                            var1 = var2.bind(var3)(var1);
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var1 = 45;
                                            var1 = var2[var1];
                                            var2 = undefined;
                                            var7 = var4.bind(var2)(var1);
                                            var6 = var7.enrollInQuest;
                                            var1 = _closure2_slot1;
                                            var4 = var1.id;
                                            var1 = {};
                                            var8 = _closure2_slot2;
                                            var1.questContent = var8;
                                            var8 = _closure2_slot28;
                                            if (var8) {
                                                _fun82821_ip = 132;
                                                continue _fun82821
                                            }
                                        case 91:
                                            var8 = _closure2_slot15;
                                            if (var8) {
                                                _fun82821_ip = 132;
                                                continue _fun82821
                                            }
                                        case 98:
                                            var9 = _closure1_slot0;
                                            var10 = _closure1_slot2;
                                            var8 = 41;
                                            var8 = var10[var8];
                                            var8 = var9.bind(var2)(var8);
                                            var8 = var8.QuestContentCTA;
                                            var8 = var8.ACCEPT_QUEST;
                                            _fun82821_ip = 164;
                                            continue _fun82821;
                                        case 132:
                                            var10 = _closure1_slot0;
                                            var11 = _closure1_slot2;
                                            var9 = 41;
                                            var9 = var11[var9];
                                            var9 = var10.bind(var2)(var9);
                                            var9 = var9.QuestContentCTA;
                                            var8 = var9.START_QUEST;
                                        case 164:
                                            var1.questContentCTA = var8;
                                            var8 = _closure2_slot4;
                                            var1.sourceQuestContent = var8;
                                            var1 = var6.bind(var7)(var4, var1);
                                            SaveGenerator(address = 188);
                                        case 186:
                                            return var1;
                                        case 188:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                            if (var4) {
                                                _fun82821_ip = 299;
                                                continue _fun82821
                                            }
                                        case 194:
                                            var4 = _closure2_slot15;
                                            if (!var4) {
                                                _fun82821_ip = 208;
                                                continue _fun82821
                                            }
                                        case 201:
                                            var4 = _closure2_slot16;
                                            if (var4) {
                                                _fun82821_ip = 246;
                                                continue _fun82821
                                            }
                                        case 208:
                                            var4 = _closure2_slot28;
                                            if (var4) {
                                                _fun82821_ip = 225;
                                                continue _fun82821
                                            }
                                        case 215:
                                            var4 = _closure2_slot34;
                                            var4 = var4.bind(var2)();
                                            _fun82821_ip = 296;
                                            continue _fun82821;
                                        case 225:
                                            var4 = _closure2_slot36;
                                            var4 = var4.bind(var2)();
                                            SaveGenerator(address = 237);
                                        case 235:
                                            return var4;
                                        case 237:
                                            ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                            if (!var6) {
                                                _fun82821_ip = 296;
                                                continue _fun82821
                                            }
                                        case 243:
                                            return var4;
                                        case 246:
                                            var4 = _closure1_slot1;
                                            var6 = _closure1_slot2;
                                            var3 = 44;
                                            var3 = var6[var3];
                                            var4 = var4.bind(var2)(var3);
                                            var3 = {};
                                            var6 = _closure2_slot1;
                                            var6 = var6.id;
                                            var3.questId = var6;
                                            var5 = _closure2_slot4;
                                            var3.sourceQuestContent = var5;
                                            var3 = var4.bind(var2)(var3);
                                        case 296:
                                            return var2;
                                        case 299:
                                            return var1;
                                        case 302:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var4 = var6.bind(var5)(var4);
                            var _closure3_slot1 = var4;
                            var4 = function() { // Environment: var2
                                var0 = undefined;
                                var3 = _closure3_slot1;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var1.onPress = var4;
                            var0 = var1;
                        case 461:
                            _fun82813_ip = 518;
                            continue _fun82813;
                        case 463:
                            var1 = {};
                            var4 = _closure2_slot35;
                            var1.text = var4;
                            var4 = false;
                            var1.disabled = var4;
                            var6 = _closure1_slot3;
                            var5 = undefined;
                            var4 = function*() { // Environment: var2
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun82818: for (var _fun82818_ip = 0;;) switch (_fun82818_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun82818_ip = 80;
                                                continue _fun82818
                                            }
                                        case 7:
                                            var4 = _closure2_slot33;
                                            var5 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 41;
                                            var3 = var3[var2];
                                            var2 = undefined;
                                            var3 = var5.bind(var2)(var3);
                                            var3 = var3.QuestContentCTA;
                                            var3 = var3.LAUNCH_MOBILE_ACTIVITY;
                                            var3 = var4.bind(var2)(var3);
                                            var1 = _closure2_slot36;
                                            var1 = var1.bind(var2)();
                                            SaveGenerator(address = 68);
                                        case 66:
                                            return var1;
                                        case 68:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                            if (var3) {
                                                _fun82818_ip = 77;
                                                continue _fun82818
                                            }
                                        case 74:
                                            return var2;
                                        case 77:
                                            return var1;
                                        case 80:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var4 = var6.bind(var5)(var4);
                            var _closure3_slot0 = var4;
                            var4 = function() { // Environment: var2
                                var0 = undefined;
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var1.onPress = var4;
                            var0 = var1;
                        case 518:
                            _fun82813_ip = 586;
                            continue _fun82813;
                        case 520:
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 43;
                            var5 = var5[var4];
                            var4 = undefined;
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.getVideoQuestWatchCtaText;
                            var4 = _closure2_slot7;
                            var4 = var5.bind(var6)(var4);
                            var1.text = var4;
                            var4 = false;
                            var1.disabled = var4;
                            var4 = function() {
                                _fun82816: for (var _fun82816_ip = 0;;) switch (_fun82816_ip) {
                                    case 0:
                                        var2 = _closure2_slot5;
                                        var1 = var2.log;
                                        var0 = 'Navigating to video quest bottom sheet';
                                        var0 = var1.bind(var2)(var0);
                                        var4 = _closure2_slot33;
                                        var5 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 41;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var2 = var5.bind(var0)(var2);
                                        var2 = var2.QuestContentCTA;
                                        var2 = var2.WATCH_VIDEO;
                                        var2 = var4.bind(var0)(var2);
                                        var2 = _closure2_slot16;
                                        if (var2) {
                                            _fun82816_ip = 86;
                                            continue _fun82816
                                        }
                                    case 76:
                                        var2 = _closure2_slot34;
                                        var2 = var2.bind(var0)();
                                        _fun82816_ip = 136;
                                        continue _fun82816;
                                    case 86:
                                        var2 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var1 = 44;
                                        var1 = var4[var1];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = {};
                                        var4 = _closure2_slot1;
                                        var4 = var4.id;
                                        var1.questId = var4;
                                        var3 = _closure2_slot4;
                                        var1.sourceQuestContent = var3;
                                        var1 = var2.bind(var0)(var1);
                                    case 136:
                                        return var0;
                                }
                            };
                            var1.onPress = var4;
                            var0 = var1;
                        case 586:
                            _fun82813_ip = 719;
                            continue _fun82813;
                        case 591:
                            var1 = {};
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 40;
                            var7 = var10[var5];
                            var6 = undefined;
                            var7 = var9.bind(var6)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var10[var5];
                            var5 = var9.bind(var6)(var5);
                            var5 = var5.t;
                            var6 = var5["14o6QY"];
                            var5 = {};
                            var9 = _closure2_slot32;
                            var5.expiryDate = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var1.text = var5;
                            var5 = _closure2_slot12;
                            if (var5) {
                                _fun82813_ip = 682;
                                continue _fun82813
                            }
                        case 678:
                            var5 = _closure2_slot11;
                        case 682:
                            if (var5) {
                                _fun82813_ip = 689;
                                continue _fun82813
                            }
                        case 685:
                            var5 = _closure2_slot23;
                        case 689:
                            var1.loading = var5;
                            var5 = true;
                            var1.disabled = var5;
                            var5 = 'secondary';
                            var1.variant = var5;
                            var4 = _closure1_slot12;
                            var1.onPress = var4;
                            var0 = var1;
                        case 719:
                            _fun82813_ip = 824;
                            continue _fun82813;
                        case 721:
                            var1 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 40;
                            var5 = var9[var4];
                            var7 = undefined;
                            var5 = var8.bind(var7)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.t;
                            var4 = var4.cfY4PE;
                            var4 = var5.bind(var6)(var4);
                            var1.text = var4;
                            var4 = _closure2_slot12;
                            if (var4) {
                                _fun82813_ip = 798;
                                continue _fun82813
                            }
                        case 794:
                            var4 = _closure2_slot11;
                        case 798:
                            if (var4) {
                                _fun82813_ip = 805;
                                continue _fun82813
                            }
                        case 801:
                            var4 = _closure2_slot23;
                        case 805:
                            var1.loading = var4;
                            var4 = function() {
                                var5 = _closure2_slot33;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 41;
                                var1 = var3[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.QuestContentCTA;
                                var1 = var1.CLAIM_REWARD;
                                var1 = var5.bind(var0)(var1);
                                var1 = 42;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.handleRewardClaimThenView;
                                var1 = {};
                                var5 = _closure2_slot22;
                                var1.product = var5;
                                var5 = _closure2_slot1;
                                var1.quest = var5;
                                var5 = _closure2_slot2;
                                var1.questContent = var5;
                                var5 = _closure2_slot3;
                                var1.questContentPosition = var5;
                                var5 = _closure2_slot24;
                                var1.currentUserHasVerifiedEmailOrPhone = var5;
                                var5 = _closure2_slot25;
                                var1.currentUserHasVerifiedEmail = var5;
                                var4 = _closure2_slot4;
                                var1.sourceQuestContent = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1.onPress = var4;
                            var0 = var1;
                        case 824:
                            _fun82813_ip = 917;
                            continue _fun82813;
                        case 826:
                            var1 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 40;
                            var5 = var9[var4];
                            var7 = undefined;
                            var5 = var8.bind(var7)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.t;
                            var4 = var4.vTgCWx;
                            var4 = var5.bind(var6)(var4);
                            var1.text = var4;
                            var3 = _closure2_slot23;
                            var1.loading = var3;
                            var2 = function() {
                                var5 = _closure2_slot33;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 41;
                                var1 = var3[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.QuestContentCTA;
                                var1 = var1.SHOW_REWARD;
                                var1 = var5.bind(var0)(var1);
                                var1 = 42;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.viewReward;
                                var1 = {};
                                var5 = _closure2_slot22;
                                var1.product = var5;
                                var5 = _closure2_slot1;
                                var1.quest = var5;
                                var5 = _closure2_slot2;
                                var1.questContent = var5;
                                var5 = _closure2_slot3;
                                var1.questContentPosition = var5;
                                var4 = _closure2_slot4;
                                var1.sourceQuestContent = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1.onPress = var2;
                            var0 = var1;
                        case 917:
                            return var0;
                    }
                };
                var21 = var18.bind(var4)();
                var18 = 40;
                var23 = var1[var18];
                var23 = var3.bind(var4)(var23);
                var34 = var23.intl;
                var28 = var34.formatToPlainString;
                var23 = var1[var18];
                var23 = var3.bind(var4)(var23);
                var23 = var23.t;
                var27 = var23.EAYZAr;
                var23 = {};
                var35 = var0.config;
                var35 = var35.messages;
                var35 = var35.questName;
                var23.questName = var35;
                var39 = var28.bind(var34)(var27, var23);
                var23 = var1[var5];
                var28 = var3.bind(var4)(var23);
                var27 = var28.hasVirtualCurrencyReward;
                var23 = var0.config;
                var27 = var27.bind(var28)(var23);
                var _closure2_slot37 = var27;
                var23 = var1[var5];
                var34 = var3.bind(var4)(var23);
                var28 = var34.getVirtualCurrencyRewardOrbQuantity;
                var23 = var0.config;
                var23 = var28.bind(var34)(var23);
                var _closure2_slot38 = var23;
                var1 = var1[var5];
                var5 = var3.bind(var4)(var1);
                var3 = var5.getDefaultRewardName;
                var1 = var0.config;
                var1 = var3.bind(var5)(var1);
                var _closure2_slot39 = var1;
                var5 = var17.useMemo;
                var3 = new Array(5);
                var3[0] = var9;
                var3[1] = var27;
                var3[2] = var23;
                var3[3] = var1;
                var3[4] = var7;
                var1 = function() { // Environment: var26
                    _fun82824: for (var _fun82824_ip = 0;;) switch (_fun82824_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 46;
                            var0 = var3[var0];
                            var6 = undefined;
                            var2 = var2.bind(var6)(var0);
                            var0 = var2.isAndroid;
                            var0 = var0.bind(var2)();
                            var _closure3_slot0 = var0;
                            if (var0) {
                                _fun82824_ip = 60;
                                continue _fun82824
                            }
                        case 44:
                            var0 = {
                                'marginTop': 0,
                                'marginRight': 3
                            };
                            _fun82824_ip = 87;
                            continue _fun82824;
                        case 60:
                            var2 = {};
                            var4 = {};
                            var3 = 3;
                            var4.translateY = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
                            var2.transform = var3;
                            var0 = var2;
                        case 87:
                            var _closure3_slot1 = var0;
                            var0 = _closure2_slot19;
                            if (!var0) {
                                _fun82824_ip = 111;
                                continue _fun82824
                            }
                        case 101:
                            var0 = _closure2_slot37;
                            if (var0) {
                                _fun82824_ip = 237;
                                continue _fun82824
                            }
                        case 111:
                            var0 = _closure2_slot19;
                            if (var0) {
                                _fun82824_ip = 231;
                                continue _fun82824
                            }
                        case 118:
                            var0 = _closure2_slot37;
                            var4 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 40;
                            var7 = var9[var3];
                            var7 = var4.bind(var6)(var7);
                            var8 = var7.intl;
                            var7 = var8.format;
                            var3 = var9[var3];
                            var3 = var4.bind(var6)(var3);
                            var3 = var3.t;
                            if (var0) {
                                _fun82824_ip = 201;
                                continue _fun82824
                            }
                        case 169:
                            var4 = var3["0IUT4Y"];
                            var0 = {};
                            var9 = function() {
                                var0 = _closure2_slot10;
                                return var0;
                            };
                            var0.rewardWithArticleHook = var9;
                            var0 = var7.bind(var8)(var4, var0);
                            _fun82824_ip = 229;
                            continue _fun82824;
                        case 201:
                            var4 = var3.ro1sze;
                            var3 = {};
                            var9 = function() {
                                _fun82826: for (var _fun82826_ip = 0;;) switch (_fun82826_ip) {
                                    case 0:
                                        var3 = _closure1_slot15;
                                        var2 = _closure1_slot14;
                                        var1 = {};
                                        var8 = _closure1_slot13;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var0 = 47;
                                        var4 = var4[var0];
                                        var0 = undefined;
                                        var4 = var5.bind(var0)(var4);
                                        var7 = var4.OrbsIcon;
                                        var4 = {
                                            'size': 'xs',
                                            'color': 'mobile-text-heading-primary'
                                        };
                                        var9 = _closure3_slot1;
                                        var4.style = var9;
                                        var7 = var8.bind(var0)(var7, var4);
                                        var4 = new Array(3);
                                        var4[0] = var7;
                                        var5 = _closure3_slot0;
                                        if (!var5) {
                                            _fun82826_ip = 120;
                                            continue _fun82826
                                        }
                                    case 91:
                                        var8 = _closure1_slot13;
                                        var7 = _closure1_slot6;
                                        var6 = {};
                                        var9 = {};
                                        var10 = 2;
                                        var9.width = var10;
                                        var6.style = var9;
                                        var5 = var8.bind(var0)(var7, var6);
                                    case 120:
                                        var4[1] = var5;
                                        var5 = _closure2_slot38;
                                        var4[2] = var5;
                                        var1.children = var4;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                            var3.balanceHook = var9;
                            var0 = var7.bind(var8)(var4, var3);
                        case 229:
                            _fun82824_ip = 235;
                            continue _fun82824;
                        case 231:
                            var0 = _closure2_slot39;
                        case 235:
                            _fun82824_ip = 309;
                            continue _fun82824;
                        case 237:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 40;
                            var3 = var7[var1];
                            var3 = var2.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.format;
                            var1 = var7[var1];
                            var1 = var2.bind(var6)(var1);
                            var1 = var1.t;
                            var2 = var1["8Op4c4"];
                            var1 = {};
                            var5 = function() {
                                _fun82825: for (var _fun82825_ip = 0;;) switch (_fun82825_ip) {
                                    case 0:
                                        var3 = _closure1_slot15;
                                        var2 = _closure1_slot14;
                                        var1 = {};
                                        var8 = _closure1_slot13;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var0 = 47;
                                        var4 = var4[var0];
                                        var0 = undefined;
                                        var4 = var5.bind(var0)(var4);
                                        var7 = var4.OrbsIcon;
                                        var4 = {
                                            'size': 'xs',
                                            'color': 'mobile-text-heading-primary'
                                        };
                                        var9 = _closure3_slot1;
                                        var4.style = var9;
                                        var7 = var8.bind(var0)(var7, var4);
                                        var4 = new Array(3);
                                        var4[0] = var7;
                                        var5 = _closure3_slot0;
                                        if (!var5) {
                                            _fun82825_ip = 120;
                                            continue _fun82825
                                        }
                                    case 91:
                                        var8 = _closure1_slot13;
                                        var7 = _closure1_slot6;
                                        var6 = {};
                                        var9 = {};
                                        var10 = 2;
                                        var9.width = var10;
                                        var6.style = var9;
                                        var5 = var8.bind(var0)(var7, var6);
                                    case 120:
                                        var4[1] = var5;
                                        var5 = _closure2_slot38;
                                        var4[2] = var5;
                                        var1.children = var4;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                            var1.balanceHook = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 309:
                            return var0;
                    }
                };
                var40 = var5.bind(var17)(var1, var3);
                if (!var15) {
                    _fun82800_ip = 1968;
                    continue _fun82800
                }
            case 1898:
                if (!var10) {
                    _fun82800_ip = 1968;
                    continue _fun82800
                }
            case 1901:
                if (var9) {
                    _fun82800_ip = 1968;
                    continue _fun82800
                }
            case 1904:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = var1[var18];
                var5 = var3.bind(var4)(var5);
                var17 = var5.intl;
                var5 = var17.formatToPlainString;
                var1 = var1[var18];
                var1 = var3.bind(var4)(var1);
                var1 = var1.t;
                var3 = var1["l1jCM/"];
                var1 = {};
                var1.date = var6;
                var38 = var5.bind(var17)(var3, var1);
                _fun82800_ip = 2050;
                continue _fun82800;
            case 1968:
                var1 = var15;
                if (!var1) {
                    _fun82800_ip = 1977;
                    continue _fun82800
                }
            case 1974:
                var1 = var9;
            case 1977:
                var38 = var2;
                if (!var1) {
                    _fun82800_ip = 2050;
                    continue _fun82800
                }
            case 1983:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = var1[var18];
                var3 = var2.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.formatToPlainString;
                var1 = var1[var18];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.RrxtPU;
                var1 = {};
                var1.reward = var7;
                var1.date = var6;
                var38 = var3.bind(var5)(var2, var1);
            case 2050:
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var1 = var0.id;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var13;
                var1 = function() { // Environment: var26
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 44;
                    var1 = var6[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var1.questId = var5;
                    var5 = _closure1_slot0;
                    var4 = 48;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.VideoQuestModalSteps;
                    var4 = var4.WATCH_VIDEO;
                    var1.initialStep = var4;
                    var3 = _closure2_slot4;
                    var1.sourceQuestContent = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var17 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot15;
                var34 = _closure1_slot0;
                var35 = _closure1_slot2;
                var1 = 49;
                var1 = var35[var1];
                var1 = var34.bind(var4)(var1);
                var2 = var1.Card;
                var1 = {};
                var5 = var22.container;
                var1.style = var5;
                var5 = function arg0() {
                    _fun82829: for (var _fun82829_ip = 0;;) switch (_fun82829_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun82829_ip = 37;
                                continue _fun82829
                            }
                        case 13:
                            var3 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var2 = var0.id;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var0, var2);
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onLayout = var5;
                var7 = _closure1_slot6;
                var5 = {};
                var23 = var22.heroContainer;
                var6 = new Array(2);
                var6[0] = var23;
                var23 = {};
                var23.height = var24;
                var6[1] = var23;
                var5.style = var6;
                var27 = _closure1_slot13;
                var24 = _closure1_slot1;
                var6 = 50;
                var6 = var35[var6];
                var23 = var24.bind(var4)(var6);
                var6 = {};
                var28 = {};
                var37 = var37.url;
                var28.uri = var37;
                var6.source = var28;
                var28 = var22.heroImg;
                var6.style = var28;
                var6 = var27.bind(var4)(var23, var6);
                var23 = new Array(4);
                var23[0] = var6;
                var6 = 51;
                var6 = var35[var6];
                var24 = var24.bind(var4)(var6);
                var6 = {};
                var28 = var22.heroLinearGradientOverlay;
                var6.style = var28;
                var28 = 52;
                var37 = var35[var28];
                var37 = var34.bind(var4)(var37);
                var37 = var37.VerticalGradient;
                var37 = var37.START;
                var6.start = var37;
                var28 = var35[var28];
                var28 = var34.bind(var4)(var28);
                var28 = var28.VerticalGradient;
                var28 = var28.END;
                var6.end = var28;
                var28 = new Array(3);
                var28[0] = var31;
                var28[1] = var30;
                var28[2] = var29;
                var6.colors = var28;
                var6 = var27.bind(var4)(var24, var6);
                var23[1] = var6;
                var6 = var0.preview;
                if (!var6) {
                    _fun82800_ip = 2479;
                    continue _fun82800
                }
            case 2356:
                var28 = _closure1_slot13;
                var27 = _closure1_slot6;
                var24 = {};
                var29 = var22.previewBadge;
                var24.style = var29;
                var37 = _closure1_slot0;
                var31 = _closure1_slot2;
                var29 = 53;
                var29 = var31[var29];
                var29 = var37.bind(var4)(var29);
                var30 = var29.Text;
                var29 = {
                    'variant': 'eyebrow',
                    'color': 'always-white'
                };
                var34 = var31[var18];
                var34 = var37.bind(var4)(var34);
                var35 = var34.intl;
                var34 = var35.string;
                var31 = var31[var18];
                var31 = var37.bind(var4)(var31);
                var31 = var31.t;
                var31 = var31.SKNnqq;
                var31 = var34.bind(var35)(var31);
                var29.children = var31;
                var29 = var28.bind(var4)(var30, var29);
                var24.children = var29;
                var6 = var28.bind(var4)(var27, var24);
            case 2479:
                var23[2] = var6;
                var28 = _closure1_slot15;
                var27 = _closure1_slot6;
                var24 = {};
                var6 = var22.heroFooterContainer;
                var24.style = var6;
                var29 = {};
                var6 = var22.heroFooterLeftContainer;
                var29.style = var6;
                var46 = _closure1_slot13;
                var31 = _closure1_slot1;
                var30 = _closure1_slot2;
                var6 = 54;
                var6 = var30[var6];
                var31 = var31.bind(var4)(var6);
                var6 = {};
                var6.assetUrl = var32;
                var6 = var46.bind(var4)(var31, var6);
                var41 = new Array(2);
                var41[0] = var6;
                var31 = _closure1_slot0;
                var6 = 55;
                var32 = var30[var6];
                var32 = var31.bind(var4)(var32);
                var44 = var32.Stack;
                var43 = {
                    'direction': 'horizontal',
                    'align': 'center',
                    'spacing': 4
                };
                var35 = 53;
                var30 = var30[var35];
                var30 = var31.bind(var4)(var30);
                var45 = var30.Text;
                var32 = {};
                var37 = 'text-xs/medium';
                var32.variant = var37;
                var34 = 'always-white';
                var30 = var34;
                if (!var36) {
                    _fun82800_ip = 2643;
                    continue _fun82800
                }
            case 2637:
                var30 = 'text-muted';
            case 2643:
                var32.color = var30;
                var31 = _closure1_slot0;
                var30 = _closure1_slot2;
                var47 = var30[var18];
                var47 = var31.bind(var4)(var47);
                var49 = var47.intl;
                var48 = var49.string;
                var47 = var30[var18];
                var47 = var31.bind(var4)(var47);
                var47 = var47.t;
                var47 = var47.VAbKhK;
                var47 = var48.bind(var49)(var47);
                var32.children = var47;
                var32 = var46.bind(var4)(var45, var32);
                var45 = new Array(3);
                var45[0] = var32;
                var32 = _closure1_slot13;
                var47 = _closure1_slot5;
                var46 = {};
                var49 = _closure1_slot1;
                var48 = 56;
                var48 = var30[var48];
                var48 = var49.bind(var4)(var48);
                var46.source = var48;
                var48 = {
                    'height': 16,
                    'width': 16
                };
                var46.style = var48;
                var46 = var32.bind(var4)(var47, var46);
                var45[1] = var46;
                var46 = var30[var35];
                var46 = var31.bind(var4)(var46);
                var47 = var46.Text;
                var46 = {
                    'variant': 'text-xs/medium',
                    'color': 'always-white'
                };
                var48 = var0.config;
                var48 = var48.messages;
                var48 = var48.gamePublisher;
                var46.children = var48;
                var46 = var32.bind(var4)(var47, var46);
                var45[2] = var46;
                var43.children = var45;
                var43 = var28.bind(var4)(var44, var43);
                var41[1] = var43;
                var29.children = var41;
                var41 = var28.bind(var4)(var27, var29);
                var29 = new Array(2);
                var29[0] = var41;
                var30 = var30[var35];
                var30 = var31.bind(var4)(var30);
                var31 = var30.Text;
                var30 = {};
                var30.variant = var37;
                if (!var36) {
                    _fun82800_ip = 2893;
                    continue _fun82800
                }
            case 2887:
                var34 = 'text-default';
            case 2893:
                var30.color = var34;
                var36 = _closure1_slot0;
                var34 = _closure1_slot2;
                var37 = var34[var18];
                var37 = var36.bind(var4)(var37);
                var41 = var37.intl;
                var37 = var41.format;
                var34 = var34[var18];
                var34 = var36.bind(var4)(var34);
                var34 = var34.t;
                var36 = var34["7D8r4F"];
                var34 = {};
                var34.expiryDate = var42;
                var34 = var37.bind(var41)(var36, var34);
                var30.children = var34;
                var30 = var32.bind(var4)(var31, var30);
                var29[1] = var30;
                var24.children = var29;
                var24 = var28.bind(var4)(var27, var24);
                var23[3] = var24;
                var5.children = var23;
                var7 = var3.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var28 = _closure1_slot13;
                var27 = _closure1_slot6;
                var24 = {};
                var7 = var22.detailsWrapper;
                var24.style = var7;
                var30 = _closure1_slot15;
                var29 = {};
                var7 = var22.detailsContainer;
                var29.style = var7;
                var7 = {};
                var23 = var22.rewardImgContainer;
                var7.style = var23;
                var32 = _closure1_slot13;
                var31 = _closure1_slot1;
                var34 = _closure1_slot2;
                if (var8) {
                    _fun82800_ip = 3108;
                    continue _fun82800
                }
            case 3068:
                var8 = 58;
                var8 = var34[var8];
                var23 = var31.bind(var4)(var8);
                var8 = {
                    'quest': null,
                    'height': 64,
                    'width': 64
                };
                var8.quest = var0;
                var8 = var32.bind(var4)(var23, var8);
                _fun82800_ip = 3146;
                continue _fun82800;
            case 3108:
                var23 = 57;
                var23 = var34[var23];
                var31 = var31.bind(var4)(var23);
                var23 = {};
                var23.quest = var0;
                var23.progress = var33;
                var33 = 'sm';
                var23.size = var33;
                var8 = var32.bind(var4)(var31, var23);
            case 3146:
                var7.children = var8;
                var7 = var28.bind(var4)(var27, var7);
                var31 = new Array(2);
                var31[0] = var7;
                var8 = _closure1_slot15;
                var33 = _closure1_slot6;
                var32 = {};
                var7 = var22.detailsTextContainer;
                var32.style = var7;
                var37 = _closure1_slot13;
                var7 = _closure1_slot0;
                var23 = _closure1_slot2;
                var34 = var23[var35];
                var34 = var7.bind(var4)(var34);
                var36 = var34.Text;
                var34 = {
                    'variant': 'eyebrow',
                    'color': 'text-brand'
                };
                var41 = var22.questName;
                var34.style = var41;
                var34.children = var39;
                var36 = var37.bind(var4)(var36, var34);
                var34 = new Array(3);
                var34[0] = var36;
                var36 = var23[var35];
                var36 = var7.bind(var4)(var36);
                var39 = var36.Text;
                var36 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var36.children = var40;
                var36 = var37.bind(var4)(var39, var36);
                var34[1] = var36;
                var35 = var23[var35];
                var35 = var7.bind(var4)(var35);
                var36 = var35.Text;
                var35 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var35.children = var38;
                var35 = var37.bind(var4)(var36, var35);
                var34[2] = var35;
                var32.children = var34;
                var32 = var8.bind(var4)(var33, var32);
                var31[1] = var32;
                var29.children = var31;
                var29 = var30.bind(var4)(var27, var29);
                var24.children = var29;
                var24 = var28.bind(var4)(var27, var24);
                var5[1] = var24;
                var6 = var23[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Stack;
                var6 = {
                    'direction': 'horizontal',
                    'align': 'center'
                };
                var24 = _closure1_slot1;
                var23 = var23[var25];
                var23 = var24.bind(var4)(var23);
                var23 = var23.spacing;
                var23 = var23.PX_8;
                var6.spacing = var23;
                var22 = var22.buttonContainers;
                var6.style = var22;
                if (!(var20 != var19)) {
                    _fun82800_ip = 3702;
                    continue _fun82800
                }
            case 3448:
                if (var16) {
                    _fun82800_ip = 3702;
                    continue _fun82800
                }
            case 3454:
                if (var10) {
                    _fun82800_ip = 3702;
                    continue _fun82800
                }
            case 3460:
                if (var9) {
                    _fun82800_ip = 3702;
                    continue _fun82800
                }
            case 3466:
                var19 = _closure1_slot15;
                var16 = _closure1_slot14;
                var9 = {};
                var24 = _closure1_slot13;
                var28 = _closure1_slot0;
                var25 = _closure1_slot2;
                var22 = 59;
                var20 = var25[var22];
                var20 = var28.bind(var4)(var20);
                var23 = var20.Button;
                var20 = {
                    'grow': true,
                    'onPress': null,
                    'variant': 'secondary',
                    'disabled': true
                };
                var27 = _closure1_slot12;
                var20.onPress = var27;
                var27 = var25[var18];
                var27 = var28.bind(var4)(var27);
                var30 = var27.intl;
                var29 = var30.string;
                var27 = var25[var18];
                var27 = var28.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.V293qn;
                var27 = var29.bind(var30)(var27);
                var20.text = var27;
                var23 = var24.bind(var4)(var23, var20);
                var20 = new Array(2);
                var20[0] = var23;
                var22 = var25[var22];
                var22 = var28.bind(var4)(var22);
                var23 = var22.Button;
                var22 = {};
                var26 = function() {
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 34;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 36;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 60;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var2.questId = var6;
                    var6 = _closure2_slot14;
                    var2.questEnrollmentBlockedUntil = var6;
                    var1 = _closure2_slot4;
                    var2.sourceQuestContent = var1;
                    var1 = 'QuestEnrollmentBlockedBottomSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var22.onPress = var26;
                var26 = 'tertiary';
                var22.variant = var26;
                var26 = var25[var18];
                var26 = var28.bind(var4)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var25[var18];
                var25 = var28.bind(var4)(var25);
                var25 = var25.t;
                var25 = var25.vY9GgG;
                var25 = var26.bind(var27)(var25);
                var22.text = var25;
                var22 = var24.bind(var4)(var23, var22);
                var20[1] = var22;
                var9.children = var20;
                var16 = var19.bind(var4)(var16, var9);
                _fun82800_ip = 3757;
                continue _fun82800;
            case 3702:
                var20 = _closure1_slot13;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var9 = 59;
                var9 = var22[var9];
                var9 = var19.bind(var4)(var9);
                var19 = var9.Button;
                var9 = {};
                var22 = true;
                var9.grow = var22;
                var52 = var9;
                var51 = var21;
                var21 = copyDataProperties(var52, var51);
                var16 = var20.bind(var4)(var19, var9);
            case 3757:
                var9 = new Array(3);
                var9[0] = var16;
                if (!var10) {
                    _fun82800_ip = 3771;
                    continue _fun82800
                }
            case 3768:
                var10 = var12;
            case 3771:
                if (!var10) {
                    _fun82800_ip = 3777;
                    continue _fun82800
                }
            case 3774:
                var10 = var11;
            case 3777:
                if (!var10) {
                    _fun82800_ip = 3898;
                    continue _fun82800
                }
            case 3780:
                var16 = _closure1_slot13;
                var22 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 61;
                var11 = var20[var11];
                var11 = var22.bind(var4)(var11);
                var12 = var11.IconButton;
                var11 = {};
                var19 = var20[var18];
                var19 = var22.bind(var4)(var19);
                var21 = var19.intl;
                var19 = var21.string;
                var18 = var20[var18];
                var18 = var22.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.YsCuyF;
                var18 = var19.bind(var21)(var18);
                var11.accessibilityLabel = var18;
                var19 = _closure1_slot1;
                var18 = 62;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var11.icon = var18;
                var11.onPress = var17;
                var17 = 'secondary';
                var11.variant = var17;
                var10 = var16.bind(var4)(var12, var11);
            case 3898:
                var9[1] = var10;
                var12 = _closure1_slot13;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 63;
                var10 = var16[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var10.quest = var0;
                var15 = !var15;
                var10.showShareLink = var15;
                var14 = _closure1_slot10;
                var14 = var14.QUESTS_CARD;
                var10.location = var14;
                var10.sourceQuestContent = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[2] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var0.id;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestCard.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 348;
    var2.ESTIMATED_CARD_HEIGHT = var3;
    var2.QuestCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 3413, 1613, 5189, 5191, 483, 33, 671, 1297, 3166, 3199, 5193, 5203, 5265, 5275, 9945, 1464, 5248, 1586, 5188, 5249, 566, 5229, 5201, 5252, 3205, 6842, 4635, 5228, 7921, 5306, 3110, 3237, 10617, 1307, 7900, 10674, 4588, 1234, 5239, 9940, 5278, 10621, 5221, 479, 9514, 10622, 4863, 4667, 4057, 670, 3900, 10656, 4039, 7359, 10654, 9942, 4043, 10675, 7470, 7822, 10657, 2]);