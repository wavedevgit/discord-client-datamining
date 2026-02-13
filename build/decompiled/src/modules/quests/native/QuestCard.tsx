// modules/quests/native/QuestCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
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
    var3 = var15.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot5 = var7;
    var13 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var7 = var3.Fragment;
    var _closure1_slot12 = var7;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var14 = 8;
    var3 = var5[var14];
    var3 = var15.bind(var0)(var3);
    var3 = var3.colors;
    var18 = var3.BACKGROUND_SURFACE_HIGH;
    var3 = var5[var14];
    var3 = var15.bind(var0)(var3);
    var3 = var3.colors;
    var16 = var3.BORDER_SUBTLE;
    var3 = 9;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.experimental_createToken;
    var7 = function(arg0) { // Environment: var1
        _fun83684: for (var _fun83684_ip = 0;;) switch (_fun83684_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.theme;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var2 = undefined;
                var4 = var4.bind(var2)(var1);
                var1 = var4.isThemeDark;
                var1 = var1.bind(var4)(var5);
                var4 = _closure1_slot1;
                var8 = 8;
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
                    _fun83684_ip = 106;
                    continue _fun83684
                }
            case 98:
                var1 = var6.BLACK;
                _fun83684_ip = 112;
                continue _fun83684;
            case 106:
                var1 = var6.BACKGROUND_SURFACE_HIGH;
            case 112:
                var3 = var3.bind(var4)(var5, var1);
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.hexOpacityToRgba;
                var0 = 0;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var11 = var8.bind(var9)(var7);
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.experimental_createToken;
    var7 = function(arg0) { // Environment: var1
        _fun83685: for (var _fun83685_ip = 0;;) switch (_fun83685_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.theme;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 10;
                var3 = var1[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isThemeDark;
                var4 = var3.bind(var4)(var6);
                var3 = _closure1_slot1;
                var8 = 8;
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
                    _fun83685_ip = 106;
                    continue _fun83685
                }
            case 98:
                var1 = var7.BLACK;
                _fun83685_ip = 112;
                continue _fun83685;
            case 106:
                var1 = var7.BACKGROUND_SURFACE_HIGH;
            case 112:
                var3 = var3.bind(var5)(var6, var1);
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
                var0 = var5[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.hexOpacityToRgba;
                var0 = 0.5;
                if (!var4) {
                    _fun83685_ip = 167;
                    continue _fun83685
                }
            case 157:
                var0 = 0.8;
            case 167:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var10 = var8.bind(var9)(var7);
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.experimental_createToken;
    var7 = function(arg0) { // Environment: var1
        _fun83686: for (var _fun83686_ip = 0;;) switch (_fun83686_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.theme;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isThemeDark;
                var0 = var0.bind(var2)(var4);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.colors;
                if (var0) {
                    _fun83686_ip = 81;
                    continue _fun83686
                }
            case 73:
                var0 = var1.BLACK;
                _fun83686_ip = 87;
                continue _fun83686;
            case 81:
                var0 = var1.BACKGROUND_SURFACE_HIGH;
            case 87:
                return var0;
        }
    };
    var9 = var8.bind(var9)(var7);
    var7 = var5[var3];
    var12 = var4.bind(var0)(var7);
    var8 = var12.createStyles;
    var7 = {};
    var17 = {
        'position': 'relative',
        'padding': 0
    };
    var19 = var5[var14];
    var19 = var15.bind(var0)(var19);
    var19 = var19.radii;
    var19 = var19.sm;
    var17.borderRadius = var19;
    var17.backgroundColor = var18;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_16;
    var17.marginBottom = var18;
    var18 = 'hidden';
    var17.overflow = var18;
    var7.container = var17;
    var18 = {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'flex-end'
    };
    var17 = 'flex';
    var19 = var5[var14];
    var19 = var15.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_12;
    var18.padding = var19;
    var7.heroContainer = var18;
    var18 = {};
    var19 = 'cover';
    var18.resizeMode = var19;
    var21 = var13.absoluteFillObject;
    var22 = var18;
    var19 = copyDataProperties(var22, var21);
    var7.heroImg = var18;
    var13 = var13.absoluteFillObject;
    var7.heroLinearGradientOverlay = var13;
    var13 = {};
    var18 = 'absolute';
    var13.position = var18;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var13.top = var18;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var13.right = var18;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BRAND;
    var13.backgroundColor = var18;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_4;
    var13.padding = var18;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var13.borderRadius = var18;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.shadows;
    var21 = var18.SHADOW_LOW;
    var22 = var13;
    var18 = copyDataProperties(var22, var21);
    var7.previewBadge = var13;
    var13 = {
        'height': 64,
        'width': 64
    };
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_12;
    var13.marginRight = var18;
    var7.rewardImgContainer = var13;
    var13 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'justifyContent': 'space-between',
        'alignItems': 'flex-end'
    };
    var7.heroFooterContainer = var13;
    var13 = {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'flex-start'
    };
    var7.heroFooterLeftContainer = var13;
    var13 = {};
    var13.display = var17;
    var17 = var5[var14];
    var17 = var15.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var13.padding = var17;
    var7.detailsWrapper = var13;
    var13 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var7.detailsContainer = var13;
    var13 = {};
    var17 = var5[var14];
    var17 = var15.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_4;
    var13.marginBottom = var17;
    var7.questName = var13;
    var13 = {
        'flex': 1,
        'justifyContent': 'center'
    };
    var7.detailsTextContainer = var13;
    var13 = {
        'borderTopWidth': 1,
        'borderTopColor': null,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var13.borderTopColor = var16;
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var13.padding = var14;
    var7.buttonContainers = var13;
    var7 = var8.bind(var12)(var7);
    var _closure1_slot14 = var7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyleProperties;
    var3 = {};
    var3.gradientStart = var11;
    var3.gradientMid = var10;
    var3.gradientEnd = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun83687: for (var _fun83687_ip = 0;;) switch (_fun83687_ip) {
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
                    _fun83687_ip = 78;
                    continue _fun83687
                }
            case 43:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
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
                var3 = 13;
                var3 = var1[var3];
                var6 = var2.bind(var4)(var3);
                var5 = var6.getQuestLogger;
                var3 = {};
                var3.quest = var0;
                var8 = _closure1_slot9;
                var8 = var8.QUEST_HOME_MOBILE;
                var3.location = var8;
                var3 = var5.bind(var6)(var3);
                var _closure2_slot5 = var3;
                var3 = 14;
                var3 = var1[var3];
                var5 = var2.bind(var4)(var3);
                var3 = var5.useTrackQuestContentClickedWithImpression;
                var3 = var3.bind(var5)();
                var _closure2_slot6 = var3;
                var18 = 15;
                var3 = var1[var18];
                var5 = var2.bind(var4)(var3);
                var3 = var5.useQuestTaskDetails;
                var10 = var3.bind(var5)(var0);
                var _closure2_slot7 = var10;
                var1 = var1[var18];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useQuestCompletionDetails;
                var1 = var1.bind(var2)(var0);
                var33 = var1.completedRatio;
                var2 = var0.userStatus;
                var20 = null;
                var3 = var20 == var2;
                var1 = undefined;
                if (var3) {
                    _fun83687_ip = 263;
                    continue _fun83687
                }
            case 257:
                var1 = var2.enrolledAt;
            case 263:
                var8 = var20 != var1;
                var1 = _closure1_slot14;
                var22 = var1.bind(var4)();
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var17 = 16;
                var2 = var1[var17];
                var6 = var3.bind(var4)(var2);
                var5 = var6.useQuestsInstructionsToWinReward;
                var2 = {};
                var2.quest = var0;
                var2.taskDetails = var10;
                var10 = _closure1_slot9;
                var10 = var10.QUEST_HOME_MOBILE;
                var2.location = var10;
                var2.questContent = var9;
                var2.sourceQuestContent = var13;
                var2 = var5.bind(var6)(var2);
                var6 = _closure1_slot1;
                var5 = 17;
                var5 = var1[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.bind(var4)();
                var6 = var5.width;
                var5 = 2;
                var5 = var5 * var7;
                var5 = var6 - var5;
                var _closure2_slot8 = var5;
                var6 = 0.2803030303030303;
                var24 = var6 * var5;
                var _closure2_slot9 = var24;
                var9 = _closure1_slot4;
                var7 = var9.useMemo;
                var6 = new Array(3);
                var6[0] = var0;
                var6[1] = var5;
                var6[2] = var24;
                var5 = function() { // Environment: var26
                    _fun83688: for (var _fun83688_ip = 0;;) switch (_fun83688_ip) {
                        case 0:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 18;
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
                            var1 = 19;
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
                                _fun83688_ip = 209;
                                continue _fun83688
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
                            _fun83688_ip = 259;
                            continue _fun83688;
                        case 209:
                            var5 = var6.convertVideoToFirstFrameImageWithMediaProxy;
                            var4 = var2.url;
                            var3 = {};
                            var3.width = var8;
                            var3.height = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = null;
                            if (!(var4 == var3)) {
                                _fun83688_ip = 247;
                                continue _fun83688
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
                var37 = var7.bind(var9)(var5, var6);
                var21 = 20;
                var5 = var1[var21];
                var6 = var3.bind(var4)(var5);
                var5 = var6.useQuestGameLogotypeAssetUrl;
                var32 = var5.bind(var6)(var0);
                var5 = _closure1_slot15;
                var5 = var5.bind(var4)();
                var31 = var5.gradientStart;
                var30 = var5.gradientMid;
                var29 = var5.gradientEnd;
                var5 = 21;
                var6 = var1[var5];
                var9 = var3.bind(var4)(var6);
                var7 = var9.getDefaultRewardNameWithArticle;
                var6 = var0.config;
                var7 = var7.bind(var9)(var6);
                var _closure2_slot10 = var7;
                var25 = 22;
                var6 = var1[var25];
                var11 = var3.bind(var4)(var6);
                var10 = var11.useStateFromStoresObject;
                var6 = _closure1_slot8;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var26
                    var0 = {};
                    var1 = _closure1_slot8;
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
                var6 = var10.bind(var11)(var9, var6);
                var9 = var6.isFetchingRewardCode;
                var _closure2_slot11 = var9;
                var9 = var6.isClaimingReward;
                var _closure2_slot12 = var9;
                var9 = var6.isEnrolling;
                var _closure2_slot13 = var9;
                var19 = var6.questEnrollmentBlockedUntil;
                var _closure2_slot14 = var19;
                var1 = var1[var18];
                var9 = var3.bind(var4)(var1);
                var6 = var9.useQuestFormattedDate;
                var1 = var0.userStatus;
                var10 = var20 == var1;
                var3 = undefined;
                if (var10) {
                    _fun83687_ip = 638;
                    continue _fun83687
                }
            case 632:
                var3 = var1.completedAt;
            case 638:
                var1 = {
                    'year': 'numeric',
                    'month': 'long',
                    'day': 'numeric'
                };
                var6 = var6.bind(var9)(var3, var1);
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var9 = 23;
                var9 = var1[var9];
                var10 = var3.bind(var4)(var9);
                var9 = var10.hasWatchVideoTasks;
                var12 = var9.bind(var10)(var0);
                var _closure2_slot15 = var12;
                var1 = var1[var21];
                var9 = var3.bind(var4)(var1);
                var3 = var9.useHasWatchVideoOnMobileTasks;
                var1 = var0.config;
                var11 = var3.bind(var9)(var1);
                var _closure2_slot16 = var11;
                var3 = var0.userStatus;
                var9 = var20 == var3;
                var1 = undefined;
                if (var9) {
                    _fun83687_ip = 743;
                    continue _fun83687
                }
            case 737:
                var1 = var3.enrolledAt;
            case 743:
                var16 = var20 != var1;
                var _closure2_slot17 = var16;
                var3 = var0.userStatus;
                var9 = var20 == var3;
                var1 = undefined;
                if (var9) {
                    _fun83687_ip = 772;
                    continue _fun83687
                }
            case 766:
                var1 = var3.completedAt;
            case 772:
                var10 = var20 != var1;
                var _closure2_slot18 = var10;
                var3 = var0.userStatus;
                var9 = var20 == var3;
                var1 = undefined;
                if (var9) {
                    _fun83687_ip = 801;
                    continue _fun83687
                }
            case 795:
                var1 = var3.claimedAt;
            case 801:
                var9 = var20 != var1;
                var _closure2_slot19 = var9;
                var3 = _closure1_slot0;
                var23 = _closure1_slot2;
                var1 = 24;
                var15 = var23[var1];
                var27 = var3.bind(var4)(var15);
                var15 = var27.isQuestExpired;
                var15 = var15.bind(var27)(var0);
                var _closure2_slot20 = var15;
                var1 = var23[var1];
                var27 = var3.bind(var4)(var1);
                var1 = var27.getIsQuestExpiredButWithinThirtyDayLookback;
                var1 = var1.bind(var27)(var0);
                var _closure2_slot21 = var1;
                var1 = 25;
                var1 = var23[var1];
                var28 = var3.bind(var4)(var1);
                var27 = var28.getDefaultReward;
                var1 = var0.config;
                var1 = var27.bind(var28)(var1);
                var27 = var1.skuId;
                var28 = _closure1_slot1;
                var1 = 26;
                var1 = var23[var1];
                var1 = var28.bind(var4)(var1);
                var34 = var1.bind(var4)();
                var1 = 10;
                var1 = var23[var1];
                var28 = var3.bind(var4)(var1);
                var1 = var28.isThemeDark;
                var36 = var1.bind(var28)(var34);
                var1 = var23[var5];
                var34 = var3.bind(var4)(var1);
                var28 = var34.hasCollectiblesQuestReward;
                var1 = var0.config;
                var28 = var28.bind(var34)(var1);
                var1 = 27;
                var1 = var23[var1];
                var23 = var3.bind(var4)(var1);
                var3 = var23.useFetchCollectiblesProduct;
                var1 = null;
                if (!var28) {
                    _fun83687_ip = 1001;
                    continue _fun83687
                }
            case 993:
                var1 = null;
                if (!var10) {
                    _fun83687_ip = 1001;
                    continue _fun83687
                }
            case 998:
                var1 = var27;
            case 1001:
                var1 = var3.bind(var23)(var1);
                var3 = var1.product;
                var _closure2_slot22 = var3;
                var1 = var1.isFetching;
                var _closure2_slot23 = var1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var23 = var1[var25];
                var35 = var3.bind(var4)(var23);
                var34 = var35.useStateFromStores;
                var23 = _closure1_slot7;
                var28 = new Array(1);
                var28[0] = var23;
                var27 = function() { // Environment: var26
                    _fun83690: for (var _fun83690_ip = 0;;) switch (_fun83690_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var0 = var1.getCurrentUser;
                            var2 = var0.bind(var1)();
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun83690_ip = 37;
                                continue _fun83690
                            }
                        case 27:
                            var1 = var2.hasVerifiedEmailOrPhone;
                            var0 = var1.bind(var2)();
                        case 37:
                            return var0;
                    }
                };
                var27 = var34.bind(var35)(var28, var27);
                var _closure2_slot24 = var27;
                var25 = var1[var25];
                var28 = var3.bind(var4)(var25);
                var27 = var28.useStateFromStores;
                var25 = new Array(1);
                var25[0] = var23;
                var23 = function() { // Environment: var26
                    _fun83691: for (var _fun83691_ip = 0;;) switch (_fun83691_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun83691_ip = 33;
                                continue _fun83691
                            }
                        case 27:
                            var0 = var1.verified;
                        case 33:
                            return var0;
                    }
                };
                var23 = var27.bind(var28)(var25, var23);
                var _closure2_slot25 = var23;
                var21 = var1[var21];
                var23 = var3.bind(var4)(var21);
                var21 = var23.useMobileActivityQuest;
                var21 = var21.bind(var23)(var0);
                var23 = var21.isMobileActivityQuest;
                var _closure2_slot26 = var23;
                var23 = var21.questApplication;
                var21 = var21.launchMobileActivity;
                var _closure2_slot27 = var21;
                var21 = 28;
                var25 = var1[var21];
                var35 = var3.bind(var4)(var25);
                var28 = var35.useToken;
                var34 = _closure1_slot1;
                var25 = 8;
                var27 = var1[var25];
                var27 = var34.bind(var4)(var27);
                var27 = var27.colors;
                var27 = var27.BACKGROUND_BASE_LOWER;
                var27 = var28.bind(var35)(var27);
                var _closure2_slot28 = var27;
                var27 = var1[var21];
                var35 = var3.bind(var4)(var27);
                var28 = var35.useToken;
                var27 = var1[var25];
                var27 = var34.bind(var4)(var27);
                var27 = var27.colors;
                var27 = var27.BACKGROUND_BASE_LOW;
                var27 = var28.bind(var35)(var27);
                var _closure2_slot29 = var27;
                var21 = var1[var21];
                var28 = var3.bind(var4)(var21);
                var27 = var28.useToken;
                var21 = var1[var25];
                var21 = var34.bind(var4)(var21);
                var21 = var21.colors;
                var21 = var21.BACKGROUND_BASE_LOWEST;
                var21 = var27.bind(var28)(var21);
                var _closure2_slot30 = var21;
                var18 = var1[var18];
                var28 = var3.bind(var4)(var18);
                var27 = var28.useQuestFormattedDate;
                var18 = var0.config;
                var21 = var18.expiresAt;
                var18 = {
                    'month': 'numeric',
                    'day': 'numeric'
                };
                var42 = var27.bind(var28)(var21, var18);
                var _closure2_slot31 = var42;
                var18 = function arg0() {
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
                var _closure2_slot32 = var18;
                var18 = function() {
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 31;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 30;
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
                var _closure2_slot33 = var18;
                var17 = var1[var17];
                var21 = var3.bind(var4)(var17);
                var18 = var21.usePrimaryCtaCopy;
                var17 = {};
                var17.quest = var0;
                var17.application = var23;
                var17 = var18.bind(var21)(var17);
                var _closure2_slot34 = var17;
                var17 = function() { // Environment: var26
                    _fun83694: for (var _fun83694_ip = 0;;) switch (_fun83694_ip) {
                        case 0:
                            var0 = _closure2_slot22;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun83694_ip = 193;
                                continue _fun83694
                            }
                        case 18:
                            var1 = _closure2_slot22;
                            var0 = {};
                            var6 = var1.styles;
                            var8 = var5 == var6;
                            var7 = undefined;
                            var4 = undefined;
                            if (var8) {
                                _fun83694_ip = 47;
                                continue _fun83694
                            }
                        case 41:
                            var4 = var6.buttonColors;
                        case 47:
                            if (!(var5 == var4)) {
                                _fun83694_ip = 55;
                                continue _fun83694
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
                                _fun83694_ip = 85;
                                continue _fun83694
                            }
                        case 79:
                            var4 = var6.confettiColors;
                        case 85:
                            if (!(var5 == var4)) {
                                _fun83694_ip = 93;
                                continue _fun83694
                            }
                        case 89:
                            var4 = new Array(0);
                        case 93:
                            var0.confettiColors = var4;
                            var6 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var5 = 32;
                            var4 = var8[var5];
                            var9 = var6.bind(var7)(var4);
                            var4 = _closure2_slot29;
                            var9 = var9.bind(var7)(var4);
                            var4 = new Array(3);
                            var4[0] = var9;
                            var9 = var8[var5];
                            var10 = var6.bind(var7)(var9);
                            var9 = _closure2_slot28;
                            var9 = var10.bind(var7)(var9);
                            var4[1] = var9;
                            var5 = var8[var5];
                            var6 = var6.bind(var7)(var5);
                            var5 = _closure2_slot30;
                            var5 = var6.bind(var7)(var5);
                            var4[2] = var5;
                            var0.backgroundColors = var4;
                            var1.styles = var0;
                        case 193:
                            var0 = _closure2_slot19;
                            if (var0) {
                                _fun83694_ip = 826;
                                continue _fun83694
                            }
                        case 203:
                            var0 = _closure2_slot18;
                            if (!var0) {
                                _fun83694_ip = 237;
                                continue _fun83694
                            }
                        case 210:
                            var0 = _closure2_slot20;
                            if (!var0) {
                                _fun83694_ip = 721;
                                continue _fun83694
                            }
                        case 220:
                            var0 = _closure2_slot20;
                            if (!var0) {
                                _fun83694_ip = 237;
                                continue _fun83694
                            }
                        case 227:
                            var0 = _closure2_slot21;
                            if (var0) {
                                _fun83694_ip = 721;
                                continue _fun83694
                            }
                        case 237:
                            var0 = _closure2_slot20;
                            if (var0) {
                                _fun83694_ip = 591;
                                continue _fun83694
                            }
                        case 247:
                            var0 = _closure2_slot17;
                            if (!var0) {
                                _fun83694_ip = 264;
                                continue _fun83694
                            }
                        case 254:
                            var0 = _closure2_slot15;
                            if (var0) {
                                _fun83694_ip = 520;
                                continue _fun83694
                            }
                        case 264:
                            var0 = _closure2_slot17;
                            if (!var0) {
                                _fun83694_ip = 281;
                                continue _fun83694
                            }
                        case 271:
                            var0 = _closure2_slot26;
                            if (var0) {
                                _fun83694_ip = 463;
                                continue _fun83694
                            }
                        case 281:
                            var0 = _closure2_slot17;
                            if (!var0) {
                                _fun83694_ip = 397;
                                continue _fun83694
                            }
                        case 288:
                            var0 = _closure2_slot15;
                            if (var0) {
                                _fun83694_ip = 397;
                                continue _fun83694
                            }
                        case 295:
                            var0 = _closure2_slot26;
                            if (var0) {
                                _fun83694_ip = 397;
                                continue _fun83694
                            }
                        case 302:
                            var0 = {
                                'text': null,
                                'variant': 'secondary',
                                'disabled': false
                            };
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 33;
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
                                var3 = _closure2_slot32;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 34;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.QuestContentCTA;
                                var2 = var2.VIEW_REQUIREMENTS;
                                var2 = var3.bind(var0)(var2);
                                var1 = _closure2_slot33;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var0.onPress = var1;
                            _fun83694_ip = 461;
                            continue _fun83694;
                        case 397:
                            var1 = {};
                            var4 = _closure2_slot34;
                            var1.text = var4;
                            var4 = false;
                            var1.disabled = var4;
                            var4 = _closure2_slot13;
                            var1.loading = var4;
                            var6 = _closure1_slot3;
                            var5 = undefined;
                            var4 = function*() { // Environment: var2
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun83702: for (var _fun83702_ip = 0;;) switch (_fun83702_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun83702_ip = 302;
                                                continue _fun83702
                                            }
                                        case 10:
                                            var3 = _closure2_slot5;
                                            var2 = var3.log;
                                            var1 = 'Enrolling in quest';
                                            var1 = var2.bind(var3)(var1);
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var1 = 38;
                                            var1 = var2[var1];
                                            var2 = undefined;
                                            var7 = var4.bind(var2)(var1);
                                            var6 = var7.enrollInQuest;
                                            var1 = _closure2_slot1;
                                            var4 = var1.id;
                                            var1 = {};
                                            var8 = _closure2_slot2;
                                            var1.questContent = var8;
                                            var8 = _closure2_slot26;
                                            if (var8) {
                                                _fun83702_ip = 132;
                                                continue _fun83702
                                            }
                                        case 91:
                                            var8 = _closure2_slot15;
                                            if (var8) {
                                                _fun83702_ip = 132;
                                                continue _fun83702
                                            }
                                        case 98:
                                            var9 = _closure1_slot0;
                                            var10 = _closure1_slot2;
                                            var8 = 34;
                                            var8 = var10[var8];
                                            var8 = var9.bind(var2)(var8);
                                            var8 = var8.QuestContentCTA;
                                            var8 = var8.ACCEPT_QUEST;
                                            _fun83702_ip = 164;
                                            continue _fun83702;
                                        case 132:
                                            var10 = _closure1_slot0;
                                            var11 = _closure1_slot2;
                                            var9 = 34;
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
                                                _fun83702_ip = 299;
                                                continue _fun83702
                                            }
                                        case 194:
                                            var4 = _closure2_slot15;
                                            if (!var4) {
                                                _fun83702_ip = 208;
                                                continue _fun83702
                                            }
                                        case 201:
                                            var4 = _closure2_slot16;
                                            if (var4) {
                                                _fun83702_ip = 246;
                                                continue _fun83702
                                            }
                                        case 208:
                                            var4 = _closure2_slot26;
                                            if (var4) {
                                                _fun83702_ip = 225;
                                                continue _fun83702
                                            }
                                        case 215:
                                            var4 = _closure2_slot33;
                                            var4 = var4.bind(var2)();
                                            _fun83702_ip = 296;
                                            continue _fun83702;
                                        case 225:
                                            var4 = _closure2_slot27;
                                            var4 = var4.bind(var2)();
                                            SaveGenerator(address = 237);
                                        case 235:
                                            return var4;
                                        case 237:
                                            ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                            if (!var6) {
                                                _fun83702_ip = 296;
                                                continue _fun83702
                                            }
                                        case 243:
                                            return var4;
                                        case 246:
                                            var4 = _closure1_slot1;
                                            var6 = _closure1_slot2;
                                            var3 = 37;
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
                            _fun83694_ip = 518;
                            continue _fun83694;
                        case 463:
                            var1 = {};
                            var4 = _closure2_slot34;
                            var1.text = var4;
                            var4 = false;
                            var1.disabled = var4;
                            var6 = _closure1_slot3;
                            var5 = undefined;
                            var4 = function*() { // Environment: var2
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun83699: for (var _fun83699_ip = 0;;) switch (_fun83699_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun83699_ip = 80;
                                                continue _fun83699
                                            }
                                        case 7:
                                            var4 = _closure2_slot32;
                                            var5 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 34;
                                            var3 = var3[var2];
                                            var2 = undefined;
                                            var3 = var5.bind(var2)(var3);
                                            var3 = var3.QuestContentCTA;
                                            var3 = var3.LAUNCH_MOBILE_ACTIVITY;
                                            var3 = var4.bind(var2)(var3);
                                            var1 = _closure2_slot27;
                                            var1 = var1.bind(var2)();
                                            SaveGenerator(address = 68);
                                        case 66:
                                            return var1;
                                        case 68:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                            if (var3) {
                                                _fun83699_ip = 77;
                                                continue _fun83699
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
                            _fun83694_ip = 586;
                            continue _fun83694;
                        case 520:
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 36;
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
                                _fun83697: for (var _fun83697_ip = 0;;) switch (_fun83697_ip) {
                                    case 0:
                                        var2 = _closure2_slot5;
                                        var1 = var2.log;
                                        var0 = 'Navigating to video quest bottom sheet';
                                        var0 = var1.bind(var2)(var0);
                                        var4 = _closure2_slot32;
                                        var5 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 34;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var2 = var5.bind(var0)(var2);
                                        var2 = var2.QuestContentCTA;
                                        var2 = var2.WATCH_VIDEO;
                                        var2 = var4.bind(var0)(var2);
                                        var2 = _closure2_slot16;
                                        if (var2) {
                                            _fun83697_ip = 86;
                                            continue _fun83697
                                        }
                                    case 76:
                                        var2 = _closure2_slot33;
                                        var2 = var2.bind(var0)();
                                        _fun83697_ip = 136;
                                        continue _fun83697;
                                    case 86:
                                        var2 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var1 = 37;
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
                            _fun83694_ip = 719;
                            continue _fun83694;
                        case 591:
                            var1 = {};
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 33;
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
                            var9 = _closure2_slot31;
                            var5.expiryDate = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var1.text = var5;
                            var5 = _closure2_slot12;
                            if (var5) {
                                _fun83694_ip = 682;
                                continue _fun83694
                            }
                        case 678:
                            var5 = _closure2_slot11;
                        case 682:
                            if (var5) {
                                _fun83694_ip = 689;
                                continue _fun83694
                            }
                        case 685:
                            var5 = _closure2_slot23;
                        case 689:
                            var1.loading = var5;
                            var5 = true;
                            var1.disabled = var5;
                            var5 = 'secondary';
                            var1.variant = var5;
                            var4 = _closure1_slot10;
                            var1.onPress = var4;
                            var0 = var1;
                        case 719:
                            _fun83694_ip = 824;
                            continue _fun83694;
                        case 721:
                            var1 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 33;
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
                                _fun83694_ip = 798;
                                continue _fun83694
                            }
                        case 794:
                            var4 = _closure2_slot11;
                        case 798:
                            if (var4) {
                                _fun83694_ip = 805;
                                continue _fun83694
                            }
                        case 801:
                            var4 = _closure2_slot23;
                        case 805:
                            var1.loading = var4;
                            var4 = function() {
                                var5 = _closure2_slot32;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 34;
                                var1 = var3[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.QuestContentCTA;
                                var1 = var1.CLAIM_REWARD;
                                var1 = var5.bind(var0)(var1);
                                var1 = 35;
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
                            _fun83694_ip = 917;
                            continue _fun83694;
                        case 826:
                            var1 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 33;
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
                                var5 = _closure2_slot32;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 34;
                                var1 = var3[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.QuestContentCTA;
                                var1 = var1.SHOW_REWARD;
                                var1 = var5.bind(var0)(var1);
                                var1 = 35;
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
                var21 = var17.bind(var4)();
                var18 = 33;
                var17 = var1[var18];
                var17 = var3.bind(var4)(var17);
                var28 = var17.intl;
                var27 = var28.formatToPlainString;
                var17 = var1[var18];
                var17 = var3.bind(var4)(var17);
                var17 = var17.t;
                var23 = var17.EAYZAr;
                var17 = {};
                var34 = var0.config;
                var34 = var34.messages;
                var34 = var34.questName;
                var17.questName = var34;
                var39 = var27.bind(var28)(var23, var17);
                var17 = var1[var5];
                var27 = var3.bind(var4)(var17);
                var23 = var27.hasVirtualCurrencyReward;
                var17 = var0.config;
                var27 = var23.bind(var27)(var17);
                var _closure2_slot35 = var27;
                var17 = var1[var5];
                var28 = var3.bind(var4)(var17);
                var23 = var28.getVirtualCurrencyRewardOrbQuantity;
                var17 = var0.config;
                var23 = var23.bind(var28)(var17);
                var _closure2_slot36 = var23;
                var1 = var1[var5];
                var5 = var3.bind(var4)(var1);
                var3 = var5.getDefaultRewardName;
                var1 = var0.config;
                var1 = var3.bind(var5)(var1);
                var _closure2_slot37 = var1;
                var17 = _closure1_slot4;
                var5 = var17.useMemo;
                var3 = new Array(5);
                var3[0] = var9;
                var3[1] = var27;
                var3[2] = var23;
                var3[3] = var1;
                var3[4] = var7;
                var1 = function() { // Environment: var26
                    _fun83705: for (var _fun83705_ip = 0;;) switch (_fun83705_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 39;
                            var0 = var3[var0];
                            var6 = undefined;
                            var2 = var2.bind(var6)(var0);
                            var0 = var2.isFabric;
                            var0 = var0.bind(var2)();
                            var _closure3_slot0 = var0;
                            if (var0) {
                                _fun83705_ip = 60;
                                continue _fun83705
                            }
                        case 44:
                            var0 = {
                                'marginTop': 0,
                                'marginRight': 3
                            };
                            _fun83705_ip = 87;
                            continue _fun83705;
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
                                _fun83705_ip = 111;
                                continue _fun83705
                            }
                        case 101:
                            var0 = _closure2_slot35;
                            if (var0) {
                                _fun83705_ip = 237;
                                continue _fun83705
                            }
                        case 111:
                            var0 = _closure2_slot19;
                            if (var0) {
                                _fun83705_ip = 231;
                                continue _fun83705
                            }
                        case 118:
                            var0 = _closure2_slot35;
                            var4 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 33;
                            var7 = var9[var3];
                            var7 = var4.bind(var6)(var7);
                            var8 = var7.intl;
                            var7 = var8.format;
                            var3 = var9[var3];
                            var3 = var4.bind(var6)(var3);
                            var3 = var3.t;
                            if (var0) {
                                _fun83705_ip = 201;
                                continue _fun83705
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
                            _fun83705_ip = 229;
                            continue _fun83705;
                        case 201:
                            var4 = var3.ro1sze;
                            var3 = {};
                            var9 = function() {
                                _fun83707: for (var _fun83707_ip = 0;;) switch (_fun83707_ip) {
                                    case 0:
                                        var3 = _closure1_slot13;
                                        var2 = _closure1_slot12;
                                        var1 = {};
                                        var8 = _closure1_slot11;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var0 = 40;
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
                                            _fun83707_ip = 120;
                                            continue _fun83707
                                        }
                                    case 91:
                                        var8 = _closure1_slot11;
                                        var7 = _closure1_slot6;
                                        var6 = {};
                                        var9 = {};
                                        var10 = 2;
                                        var9.width = var10;
                                        var6.style = var9;
                                        var5 = var8.bind(var0)(var7, var6);
                                    case 120:
                                        var4[1] = var5;
                                        var5 = _closure2_slot36;
                                        var4[2] = var5;
                                        var1.children = var4;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                            var3.balanceHook = var9;
                            var0 = var7.bind(var8)(var4, var3);
                        case 229:
                            _fun83705_ip = 235;
                            continue _fun83705;
                        case 231:
                            var0 = _closure2_slot37;
                        case 235:
                            _fun83705_ip = 309;
                            continue _fun83705;
                        case 237:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 33;
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
                                _fun83706: for (var _fun83706_ip = 0;;) switch (_fun83706_ip) {
                                    case 0:
                                        var3 = _closure1_slot13;
                                        var2 = _closure1_slot12;
                                        var1 = {};
                                        var8 = _closure1_slot11;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var0 = 40;
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
                                            _fun83706_ip = 120;
                                            continue _fun83706
                                        }
                                    case 91:
                                        var8 = _closure1_slot11;
                                        var7 = _closure1_slot6;
                                        var6 = {};
                                        var9 = {};
                                        var10 = 2;
                                        var9.width = var10;
                                        var6.style = var9;
                                        var5 = var8.bind(var0)(var7, var6);
                                    case 120:
                                        var4[1] = var5;
                                        var5 = _closure2_slot36;
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
                    _fun83687_ip = 1700;
                    continue _fun83687
                }
            case 1630:
                if (!var10) {
                    _fun83687_ip = 1700;
                    continue _fun83687
                }
            case 1633:
                if (var9) {
                    _fun83687_ip = 1700;
                    continue _fun83687
                }
            case 1636:
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
                _fun83687_ip = 1782;
                continue _fun83687;
            case 1700:
                var1 = var15;
                if (!var1) {
                    _fun83687_ip = 1709;
                    continue _fun83687
                }
            case 1706:
                var1 = var9;
            case 1709:
                var38 = var2;
                if (!var1) {
                    _fun83687_ip = 1782;
                    continue _fun83687
                }
            case 1715:
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
            case 1782:
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var1 = var0.id;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var13;
                var1 = function() { // Environment: var26
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 37;
                    var1 = var6[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var1.questId = var5;
                    var5 = _closure1_slot0;
                    var4 = 41;
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
                var3 = _closure1_slot13;
                var34 = _closure1_slot0;
                var35 = _closure1_slot2;
                var1 = 42;
                var1 = var35[var1];
                var1 = var34.bind(var4)(var1);
                var2 = var1.Card;
                var1 = {};
                var5 = var22.container;
                var1.style = var5;
                var5 = function arg0() {
                    _fun83710: for (var _fun83710_ip = 0;;) switch (_fun83710_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun83710_ip = 37;
                                continue _fun83710
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
                var27 = _closure1_slot11;
                var24 = _closure1_slot1;
                var6 = 43;
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
                var6 = 44;
                var6 = var35[var6];
                var24 = var24.bind(var4)(var6);
                var6 = {};
                var28 = var22.heroLinearGradientOverlay;
                var6.style = var28;
                var28 = 45;
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
                    _fun83687_ip = 2211;
                    continue _fun83687
                }
            case 2088:
                var28 = _closure1_slot11;
                var27 = _closure1_slot6;
                var24 = {};
                var29 = var22.previewBadge;
                var24.style = var29;
                var37 = _closure1_slot0;
                var31 = _closure1_slot2;
                var29 = 46;
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
            case 2211:
                var23[2] = var6;
                var28 = _closure1_slot13;
                var27 = _closure1_slot6;
                var24 = {};
                var6 = var22.heroFooterContainer;
                var24.style = var6;
                var29 = {};
                var6 = var22.heroFooterLeftContainer;
                var29.style = var6;
                var46 = _closure1_slot11;
                var31 = _closure1_slot1;
                var30 = _closure1_slot2;
                var6 = 47;
                var6 = var30[var6];
                var31 = var31.bind(var4)(var6);
                var6 = {};
                var6.assetUrl = var32;
                var6 = var46.bind(var4)(var31, var6);
                var41 = new Array(2);
                var41[0] = var6;
                var31 = _closure1_slot0;
                var6 = 48;
                var32 = var30[var6];
                var32 = var31.bind(var4)(var32);
                var44 = var32.Stack;
                var43 = {
                    'direction': 'horizontal',
                    'align': 'center',
                    'spacing': 4
                };
                var35 = 46;
                var30 = var30[var35];
                var30 = var31.bind(var4)(var30);
                var45 = var30.Text;
                var32 = {};
                var37 = 'text-xs/medium';
                var32.variant = var37;
                var34 = 'always-white';
                var30 = var34;
                if (!var36) {
                    _fun83687_ip = 2375;
                    continue _fun83687
                }
            case 2369:
                var30 = 'text-muted';
            case 2375:
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
                var32 = _closure1_slot11;
                var47 = _closure1_slot5;
                var46 = {};
                var49 = _closure1_slot1;
                var48 = 49;
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
                    _fun83687_ip = 2625;
                    continue _fun83687
                }
            case 2619:
                var34 = 'text-default';
            case 2625:
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
                var28 = _closure1_slot11;
                var27 = _closure1_slot6;
                var24 = {};
                var7 = var22.detailsWrapper;
                var24.style = var7;
                var30 = _closure1_slot13;
                var29 = {};
                var7 = var22.detailsContainer;
                var29.style = var7;
                var7 = {};
                var23 = var22.rewardImgContainer;
                var7.style = var23;
                var32 = _closure1_slot11;
                var31 = _closure1_slot1;
                var34 = _closure1_slot2;
                if (var8) {
                    _fun83687_ip = 2840;
                    continue _fun83687
                }
            case 2800:
                var8 = 51;
                var8 = var34[var8];
                var23 = var31.bind(var4)(var8);
                var8 = {
                    'quest': null,
                    'height': 64,
                    'width': 64
                };
                var8.quest = var0;
                var8 = var32.bind(var4)(var23, var8);
                _fun83687_ip = 2878;
                continue _fun83687;
            case 2840:
                var23 = 50;
                var23 = var34[var23];
                var31 = var31.bind(var4)(var23);
                var23 = {};
                var23.quest = var0;
                var23.progress = var33;
                var33 = 'sm';
                var23.size = var33;
                var8 = var32.bind(var4)(var31, var23);
            case 2878:
                var7.children = var8;
                var7 = var28.bind(var4)(var27, var7);
                var31 = new Array(2);
                var31[0] = var7;
                var8 = _closure1_slot13;
                var33 = _closure1_slot6;
                var32 = {};
                var7 = var22.detailsTextContainer;
                var32.style = var7;
                var37 = _closure1_slot11;
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
                    _fun83687_ip = 3434;
                    continue _fun83687
                }
            case 3180:
                if (var16) {
                    _fun83687_ip = 3434;
                    continue _fun83687
                }
            case 3186:
                if (var10) {
                    _fun83687_ip = 3434;
                    continue _fun83687
                }
            case 3192:
                if (var9) {
                    _fun83687_ip = 3434;
                    continue _fun83687
                }
            case 3198:
                var19 = _closure1_slot13;
                var16 = _closure1_slot12;
                var9 = {};
                var24 = _closure1_slot11;
                var28 = _closure1_slot0;
                var25 = _closure1_slot2;
                var22 = 52;
                var20 = var25[var22];
                var20 = var28.bind(var4)(var20);
                var23 = var20.Button;
                var20 = {
                    'grow': true,
                    'onPress': null,
                    'variant': 'secondary',
                    'disabled': true
                };
                var27 = _closure1_slot10;
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
                    var0 = 29;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 31;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 53;
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
                _fun83687_ip = 3489;
                continue _fun83687;
            case 3434:
                var20 = _closure1_slot11;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var9 = 52;
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
            case 3489:
                var9 = new Array(3);
                var9[0] = var16;
                if (!var10) {
                    _fun83687_ip = 3503;
                    continue _fun83687
                }
            case 3500:
                var10 = var12;
            case 3503:
                if (!var10) {
                    _fun83687_ip = 3509;
                    continue _fun83687
                }
            case 3506:
                var10 = var11;
            case 3509:
                if (!var10) {
                    _fun83687_ip = 3630;
                    continue _fun83687
                }
            case 3512:
                var16 = _closure1_slot11;
                var22 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 54;
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
                var18 = 55;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var11.icon = var18;
                var11.onPress = var17;
                var17 = 'secondary';
                var11.variant = var17;
                var10 = var16.bind(var4)(var12, var11);
            case 3630:
                var9[1] = var10;
                var12 = _closure1_slot11;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 56;
                var10 = var16[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var10.quest = var0;
                var15 = !var15;
                var10.showShareLink = var15;
                var14 = _closure1_slot9;
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
    var1 = var3.bind(var6)(var1);
    var3 = 57;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestCard.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 348;
    var2.ESTIMATED_CARD_HEIGHT = var3;
    var2.QuestCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 1621, 5284, 5287, 483, 33, 671, 1297, 3211, 3244, 5289, 5299, 5363, 5372, 10075, 1464, 5346, 1586, 5283, 5347, 566, 5326, 5297, 5350, 3250, 6964, 3156, 3282, 10734, 1307, 4627, 1235, 5337, 10070, 5374, 10738, 5317, 3908, 9632, 10739, 4907, 4709, 4104, 670, 3938, 10773, 4086, 7459, 10771, 10072, 4090, 10795, 7570, 7921, 10774, 2]);