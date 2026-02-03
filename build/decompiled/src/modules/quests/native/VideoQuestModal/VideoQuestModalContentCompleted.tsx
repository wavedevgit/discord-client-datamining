// modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var12 = 0;
    var6 = var5[var12];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var13 = 1;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = {
        'mass': 1.9,
        'damping': 18,
        'stiffness': 80,
        'overshootClamping': false
    };
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexGrow': 1,
        'flexShrink': 1
    };
    var3.wrapper = var9;
    var9 = {
        'flexGrow': 1,
        'flexShrink': 1
    };
    var3.headerContentCopy = var9;
    var9 = {};
    var10 = 0.5;
    var9.opacity = var10;
    var3.closeButton = var9;
    var9 = {};
    var10 = 4;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.padding = var14;
    var3.content = var9;
    var9 = {};
    var9.flex = var13;
    var3.contentRewardsAnimatedWrapper = var9;
    var9 = {};
    var9.flex = var13;
    var3.contentRewardsWrapper = var9;
    var9 = {};
    var14 = 'center';
    var9.alignItems = var14;
    var3.contentRewards = var9;
    var9 = {};
    var9.textAlign = var14;
    var3.contentRewardsCopy = var9;
    var9 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.marginBottom = var14;
    var3.contentEndCardHeader = var9;
    var9 = {
        'flexGrow': 1,
        'flexShrink': 1
    };
    var3.contentEndCardHeaderCopy = var9;
    var9 = {};
    var9.borderTopWidth = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_STRONG;
    var9.borderTopColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9.paddingTop = var13;
    var3.contentEndCard = var9;
    var9 = {};
    var13 = 210;
    var9.height = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9.marginBottom = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xl;
    var9.borderRadius = var13;
    var3.image = var9;
    var9 = {};
    var9.flexGrow = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var3.ctaPrimary = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = 'function VideoQuestModalContentCompletedTsx1(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}';
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun84003: for (var _fun84003_ip = 0;;) switch (_fun84003_ip) {
            case 0:
                var1 = arg0;
                var31 = var1.onClose;
                var28 = var1.onRestartVideo;
                var5 = var1.sourceQuestContent;
                var1 = _closure1_slot9;
                var3 = undefined;
                var25 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 5;
                var1 = var8[var1];
                var4 = var2.bind(var3)(var1);
                var1 = var4.useVideoQuestModalContext;
                var1 = var1.bind(var4)();
                var24 = var1.quest;
                var _closure2_slot0 = var24;
                var7 = _closure1_slot3;
                var6 = var7.useMemo;
                var4 = new Array(1);
                var4[0] = var24;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 6;
                    var2 = var6[var0];
                    var5 = undefined;
                    var4 = var1.bind(var5)(var2);
                    var3 = var4.getQuestAsset;
                    var2 = _closure2_slot0;
                    var0 = var6[var0];
                    var0 = var1.bind(var5)(var0);
                    var0 = var0.QuestAssetType;
                    var9 = var0.VIDEO_PLAYER_THUMBNAIL;
                    var7 = true;
                    var11 = var4;
                    var10 = var2;
                    var8 = undefined;
                    var0 = var11[var3](var10, var9, var8, var7, var6);
                    return var0;
                };
                var27 = var6.bind(var7)(var1, var4);
                var1 = 7;
                var1 = var8[var1];
                var4 = var2.bind(var3)(var1);
                var1 = var4.useQuestImpressionId;
                var7 = var1.bind(var4)();
                var1 = 8;
                var1 = var8[var1];
                var6 = var2.bind(var3)(var1);
                var4 = var6.useVideoQuestClickCtaAndMaybeCloseModal;
                var1 = {};
                var1.quest = var24;
                var1.onClose = var31;
                var1.sourceQuestContent = var5;
                var1.impressionId = var7;
                var18 = var4.bind(var6)(var1);
                var1 = 9;
                var1 = var8[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useQuestRewardClaimHandler;
                var1 = {};
                var1.quest = var24;
                var7 = _closure1_slot1;
                var6 = 10;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.close;
                var1.onSuccess = var6;
                var1.sourceQuestContent = var5;
                var1 = var2.bind(var4)(var1);
                var12 = var1.isLoading;
                var30 = var1.isClaiming;
                var29 = var1.claim;
                var2 = var24.userStatus;
                var10 = null;
                var4 = var10 == var2;
                var1 = undefined;
                if (var4) {
                    _fun84003_ip = 276;
                    continue _fun84003
                }
            case 270:
                var1 = var2.claimedAt;
            case 276:
                var15 = var10 != var1;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 11;
                var1 = var14[var7];
                var4 = var11.bind(var3)(var1);
                var2 = var4.useSharedValue;
                var1 = 0;
                var1 = var2.bind(var4)(var1);
                var _closure2_slot1 = var1;
                var2 = var14[var7];
                var5 = var11.bind(var3)(var2);
                var4 = var5.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 11;
                    var1 = var12[var9];
                    var10 = undefined;
                    var4 = var11.bind(var10)(var1);
                    var3 = var4.withDelay;
                    var6 = 12;
                    var1 = var12[var6];
                    var7 = var11.bind(var10)(var1);
                    var5 = var7.withSpring;
                    var13 = _closure2_slot1;
                    var2 = var13.get;
                    var2 = var2.bind(var13)();
                    var8 = _closure1_slot8;
                    var2 = var5.bind(var7)(var2, var8);
                    var5 = 125;
                    var2 = var3.bind(var4)(var5, var2);
                    var0.opacity = var2;
                    var2 = {};
                    var3 = var12[var9];
                    var4 = var11.bind(var10)(var3);
                    var3 = var4.withDelay;
                    var6 = var12[var6];
                    var7 = var11.bind(var10)(var6);
                    var6 = var7.withSpring;
                    var9 = var12[var9];
                    var12 = var11.bind(var10)(var9);
                    var11 = var12.interpolate;
                    var9 = _closure2_slot1;
                    var1 = var9.get;
                    var10 = var1.bind(var9)();
                    var9 = [0, 1];
                    var1 = [75, 0];
                    var1 = var11.bind(var12)(var10, var9, var1);
                    var1 = var6.bind(var7)(var1, var8);
                    var1 = var3.bind(var4)(var5, var1);
                    var2.translateY = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var6 = {};
                var8 = var14[var7];
                var8 = var11.bind(var3)(var8);
                var8 = var8.withDelay;
                var6.withDelay = var8;
                var8 = 125;
                var6.ANIMATION_DELAY = var8;
                var8 = 12;
                var8 = var14[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.withSpring;
                var6.withSpring = var8;
                var6.isComponentMounted = var1;
                var8 = _closure1_slot8;
                var6.ANIMATED_CONTENT_SPRING_CONFIG = var8;
                var7 = var14[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.interpolate;
                var6.interpolate = var7;
                var7 = 75;
                var6.ANIMATED_CONTENT_OFFSET_Y = var7;
                var2.__closure = var6;
                var6 = 2704439293952.0;
                var2.__workletHash = var6;
                var6 = _closure1_slot10;
                var2.__initData = var6;
                var21 = var4.bind(var5)(var2);
                var2 = _closure1_slot3;
                var5 = var2.useEffect;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var0 = 1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var5.bind(var2)(var1, var4);
                var1 = 13;
                var1 = var14[var1];
                var5 = var11.bind(var3)(var1);
                var4 = var5.isShareableQuest;
                var1 = var24.config;
                var13 = var4.bind(var5)(var1);
                var _closure2_slot2 = var13;
                var5 = var2.useCallback;
                var4 = new Array(2);
                var4[0] = var13;
                var1 = var24.id;
                var4[1] = var1;
                var1 = function() { // Environment: var0
                    _fun84007: for (var _fun84007_ip = 0;;) switch (_fun84007_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun84007_ip = 91;
                                continue _fun84007
                            }
                        case 10:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 14;
                            var1 = var7[var1];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var1);
                            var2 = var3.showShareActionSheet;
                            var1 = {};
                            var4 = 15;
                            var4 = var7[var4];
                            var5 = var6.bind(var5)(var4);
                            var4 = var5.getQuestUrl;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var4.bind(var5)(var0);
                            var1.message = var0;
                            var0 = 'Video Quest Modal';
                            var0 = var2.bind(var3)(var1, var0);
                        case 91:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = var5.bind(var2)(var1, var4);
                var4 = var2.useLayoutEffect;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.lockOrientation;
                    var2 = 'PORTRAIT';
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var4.bind(var2)(var1, var0);
                var1 = var2.useContext;
                var0 = 17;
                var0 = var14[var0];
                var0 = var11.bind(var3)(var0);
                var0 = var0.QuestDockGestureContext;
                var0 = var1.bind(var2)(var0);
                var1 = var0.windowDimensions;
                var0 = var1.get;
                var0 = var0.bind(var1)();
                var2 = var0.height;
                var0 = 800;
                var35 = var2 < var0;
                var0 = var1.get;
                var0 = var0.bind(var1)();
                var1 = var0.height;
                var0 = 760;
                var34 = var1 < var0;
                var2 = _closure1_slot7;
                var0 = 18;
                var0 = var14[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var26 = true;
                var0.bottom = var26;
                var4 = var25.wrapper;
                var0.style = var4;
                var9 = 19;
                var4 = var14[var9];
                var4 = var11.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {
                    'align': 'center',
                    'direction': 'horizontal',
                    'justify': 'space-between'
                };
                var6 = var25.content;
                var4.style = var6;
                var7 = _closure1_slot6;
                var16 = 20;
                var6 = var14[var16];
                var6 = var11.bind(var3)(var6);
                var8 = var6.Text;
                var6 = {
                    'variant': 'heading-sm/semibold',
                    'color': 'text-subtle'
                };
                var19 = var25.headerContentCopy;
                var6.style = var19;
                var22 = 21;
                var19 = var14[var22];
                var19 = var11.bind(var3)(var19);
                var33 = var19.intl;
                var32 = var33.formatToPlainString;
                var19 = var14[var22];
                var19 = var11.bind(var3)(var19);
                var19 = var19.t;
                var23 = var19.EAYZAr;
                var19 = {};
                var36 = var24.config;
                var36 = var36.messages;
                var36 = var36.questName;
                var19.questName = var36;
                var19 = var32.bind(var33)(var23, var19);
                var6.children = var19;
                var8 = var7.bind(var3)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var19 = _closure1_slot1;
                var8 = 22;
                var8 = var14[var8];
                var23 = var19.bind(var3)(var8);
                var8 = {};
                var8.onClose = var31;
                var31 = var25.closeButton;
                var8.style = var31;
                var8 = var7.bind(var3)(var23, var8);
                var6[1] = var8;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = 23;
                var5 = var14[var5];
                var6 = var19.bind(var3)(var5);
                var5 = {};
                var23 = var25.contentRewardsAnimatedWrapper;
                var8 = new Array(2);
                var8[0] = var23;
                var8[1] = var21;
                var5.style = var8;
                var8 = var14[var9];
                var8 = var11.bind(var3)(var8);
                var11 = var8.Stack;
                var8 = {
                    'align': 'center',
                    'justify': 'center'
                };
                var21 = 4;
                var14 = var14[var21];
                var14 = var19.bind(var3)(var14);
                var14 = var14.spacing;
                var14 = var14.PX_24;
                var8.spacing = var14;
                var19 = var25.content;
                var14 = new Array(2);
                var14[0] = var19;
                var19 = var25.contentRewardsWrapper;
                var14[1] = var19;
                var8.style = var14;
                if (var12) {
                    _fun84003_ip = 1329;
                    continue _fun84003
                }
            case 1080:
                var19 = _closure1_slot7;
                var14 = _closure1_slot5;
                var12 = {};
                var23 = var25.contentRewards;
                var12.style = var23;
                var32 = _closure1_slot6;
                var31 = _closure1_slot1;
                var33 = _closure1_slot2;
                var23 = 24;
                var23 = var33[var23];
                var31 = var31.bind(var3)(var23);
                var23 = {
                    'withQuestName': false,
                    'withRewardAvailableCopy': false,
                    'size': null,
                    'withRewardTileAnimation': true
                };
                var33 = 'md';
                if (var34) {
                    _fun84003_ip = 1159;
                    continue _fun84003
                }
            case 1145:
                var34 = 'lg';
                if (!var35) {
                    _fun84003_ip = 1156;
                    continue _fun84003
                }
            case 1152:
                var34 = 'md-lg';
            case 1156:
                var33 = var34;
            case 1159:
                var23.size = var33;
                var31 = var32.bind(var3)(var31, var23);
                var23 = new Array(2);
                var23[0] = var31;
                var33 = _closure1_slot6;
                var32 = _closure1_slot0;
                var31 = _closure1_slot2;
                var31 = var31[var16];
                var31 = var32.bind(var3)(var31);
                var32 = var31.Text;
                var31 = {
                    'color': 'text-strong',
                    'style': null,
                    'variant': 'heading-lg/semibold'
                };
                var34 = var25.contentRewardsCopy;
                var31.style = var34;
                var35 = _closure1_slot0;
                var34 = _closure1_slot2;
                var36 = var34[var22];
                var36 = var35.bind(var3)(var36);
                var37 = var36.intl;
                var36 = var37.string;
                var34 = var34[var22];
                var34 = var35.bind(var3)(var34);
                var35 = var34.t;
                if (var15) {
                    _fun84003_ip = 1290;
                    continue _fun84003
                }
            case 1275:
                var34 = var35.qyKLdg;
                var34 = var36.bind(var37)(var34);
                _fun84003_ip = 1303;
                continue _fun84003;
            case 1290:
                var35 = var35["EMp8/M"];
                var34 = var36.bind(var37)(var35);
            case 1303:
                var31.children = var34;
                var31 = var33.bind(var3)(var32, var31);
                var23[1] = var31;
                var12.children = var23;
                var14 = var19.bind(var3)(var14, var12);
                _fun84003_ip = 1345;
                continue _fun84003;
            case 1329:
                var23 = _closure1_slot6;
                var19 = _closure1_slot4;
                var12 = {};
                var14 = var23.bind(var3)(var19, var12);
            case 1345:
                var12 = new Array(2);
                var12[0] = var14;
                var14 = !var15;
                if (var15) {
                    _fun84003_ip = 1493;
                    continue _fun84003
                }
            case 1362:
                var23 = _closure1_slot6;
                var19 = _closure1_slot1;
                var31 = _closure1_slot2;
                var15 = 25;
                var15 = var31[var15];
                var19 = var19.bind(var3)(var15);
                var15 = {};
                var15.loading = var30;
                var15.onPress = var29;
                var29 = var25.ctaPrimary;
                var15.style = var29;
                var30 = _closure1_slot0;
                var29 = var31[var22];
                var29 = var30.bind(var3)(var29);
                var33 = var29.intl;
                var32 = var33.string;
                var29 = var31[var22];
                var29 = var30.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.cfY4PE;
                var29 = var32.bind(var33)(var29);
                var15.text = var29;
                var29 = 26;
                var29 = var31[var29];
                var29 = var30.bind(var3)(var29);
                var29 = var29.ButtonColors;
                var29 = var29.GREY;
                var15.color = var29;
                var14 = var23.bind(var3)(var19, var15);
            case 1493:
                var12[1] = var14;
                var8.children = var12;
                var8 = var2.bind(var3)(var11, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot5;
                var5 = {};
                var11 = var25.content;
                var8 = new Array(2);
                var8[0] = var11;
                var11 = var25.contentEndCard;
                var8[1] = var11;
                var5.style = var8;
                var29 = _closure1_slot0;
                var30 = _closure1_slot2;
                var8 = var30[var9];
                var8 = var29.bind(var3)(var8);
                var11 = var8.Stack;
                var8 = {
                    'direction': 'horizontal',
                    'justify': 'space-between'
                };
                var12 = var25.contentEndCardHeader;
                var8.style = var12;
                var12 = var30[var9];
                var12 = var29.bind(var3)(var12);
                var14 = var12.Stack;
                var12 = {};
                var31 = _closure1_slot1;
                var15 = var30[var21];
                var15 = var31.bind(var3)(var15);
                var15 = var15.spacing;
                var15 = var15.PX_4;
                var12.spacing = var15;
                var15 = var25.contentEndCardHeaderCopy;
                var12.style = var15;
                var19 = _closure1_slot6;
                var15 = var30[var16];
                var15 = var29.bind(var3)(var15);
                var23 = var15.Text;
                var15 = {
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var32 = var24.config;
                var32 = var32.messages;
                var32 = var32.gameTitle;
                var15.children = var32;
                var23 = var19.bind(var3)(var23, var15);
                var15 = new Array(2);
                var15[0] = var23;
                var16 = var30[var16];
                var16 = var29.bind(var3)(var16);
                var23 = var16.Text;
                var16 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-subtle'
                };
                var32 = var24.config;
                var32 = var32.messages;
                var32 = var32.gamePublisher;
                var16.children = var32;
                var16 = var19.bind(var3)(var23, var16);
                var15[1] = var16;
                var12.children = var15;
                var14 = var7.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var14 = 27;
                var15 = var30[var14];
                var15 = var29.bind(var3)(var15);
                var16 = var15.PressableOpacity;
                var15 = {};
                var23 = 'button';
                var15.accessibilityRole = var23;
                var32 = var30[var22];
                var32 = var29.bind(var3)(var32);
                var34 = var32.intl;
                var33 = var34.string;
                var32 = var30[var22];
                var32 = var29.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32.YsCuyF;
                var32 = var33.bind(var34)(var32);
                var15.accessibilityLabel = var32;
                var15.onPress = var28;
                var28 = 28;
                var28 = var30[var28];
                var28 = var29.bind(var3)(var28);
                var29 = var28.RetryIcon;
                var28 = {};
                var30 = var30[var21];
                var30 = var31.bind(var3)(var30);
                var30 = var30.colors;
                var30 = var30.INTERACTIVE_TEXT_DEFAULT;
                var28.color = var30;
                var28 = var19.bind(var3)(var29, var28);
                var15.children = var28;
                var15 = var19.bind(var3)(var16, var15);
                var12[1] = var15;
                var8.children = var12;
                var11 = var7.bind(var3)(var11, var8);
                var8 = new Array(3);
                var8[0] = var11;
                var10 = var10 != var27;
                if (!var10) {
                    _fun84003_ip = 2073;
                    continue _fun84003
                }
            case 1973:
                var15 = _closure1_slot6;
                var12 = _closure1_slot0;
                var28 = _closure1_slot2;
                var11 = var28[var14];
                var11 = var12.bind(var3)(var11);
                var12 = var11.PressableOpacity;
                var11 = {};
                var11.onPress = var18;
                var19 = _closure1_slot1;
                var16 = 29;
                var16 = var28[var16];
                var19 = var19.bind(var3)(var16);
                var16 = {};
                var25 = var25.image;
                var16.style = var25;
                var25 = {};
                var27 = var27.url;
                var25.uri = var27;
                var16.source = var25;
                var25 = 'cover';
                var16.resizeMode = var25;
                var16 = var15.bind(var3)(var19, var16);
                var11.children = var16;
                var10 = var15.bind(var3)(var12, var11);
            case 2073:
                var8[1] = var10;
                var11 = _closure1_slot7;
                var19 = _closure1_slot0;
                var25 = _closure1_slot2;
                var9 = var25[var9];
                var9 = var19.bind(var3)(var9);
                var10 = var9.Stack;
                var9 = {
                    'direction': 'horizontal',
                    'spacing': null,
                    'align': 'center'
                };
                var15 = _closure1_slot1;
                var12 = var25[var21];
                var12 = var15.bind(var3)(var12);
                var12 = var12.spacing;
                var12 = var12.PX_16;
                var9.spacing = var12;
                var16 = _closure1_slot6;
                var12 = 30;
                var12 = var25[var12];
                var12 = var19.bind(var3)(var12);
                var15 = var12.Button;
                var12 = {};
                var12.grow = var26;
                var12.onPress = var18;
                var18 = 15;
                var18 = var25[var18];
                var19 = var19.bind(var3)(var18);
                var18 = var19.getExternalCtaLabel;
                var18 = var18.bind(var19)(var24);
                var12.text = var18;
                var15 = var16.bind(var3)(var15, var12);
                var12 = new Array(2);
                var12[0] = var15;
                if (!var13) {
                    _fun84003_ip = 2376;
                    continue _fun84003
                }
            case 2227:
                var16 = _closure1_slot6;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = var19[var14];
                var14 = var18.bind(var3)(var14);
                var15 = var14.PressableOpacity;
                var14 = {};
                var14.accessibilityRole = var23;
                var23 = var19[var22];
                var23 = var18.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var19[var22];
                var22 = var18.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.Ej3B3Y;
                var22 = var23.bind(var24)(var22);
                var14.accessibilityLabel = var22;
                var14.onPress = var17;
                var17 = 31;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.ShareIcon;
                var17 = {};
                var20 = _closure1_slot1;
                var19 = var19[var21];
                var19 = var20.bind(var3)(var19);
                var19 = var19.colors;
                var19 = var19.INTERACTIVE_TEXT_DEFAULT;
                var17.color = var19;
                var17 = var16.bind(var3)(var18, var17);
                var14.children = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 2376:
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 10699, 5281, 5299, 10740, 10695, 9522, 3711, 4072, 5261, 8266, 5285, 7812, 5249, 4729, 4071, 3932, 1234, 10728, 6453, 10729, 7626, 4868, 4897, 7854, 4699, 4075, 9173, 2]);