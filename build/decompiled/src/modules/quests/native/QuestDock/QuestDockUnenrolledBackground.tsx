// modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var14 = 1;
    var6 = var5[var14];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.AppState;
    var _closure1_slot5 = var8;
    var12 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestDockMode;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.QUEST_DOCK_EXPANDED_HEIGHT;
    var7 = var3.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
    var _closure1_slot8 = var7;
    var3 = var3.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerticalGradient;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var16 = var12.absoluteFillObject;
    var17 = var9;
    var10 = copyDataProperties(var17, var16);
    var10 = 'right';
    var9[var10] = var0;
    var10 = 'bottom';
    var9[var10] = var0;
    var10 = 'height';
    var9[var10] = var11;
    var13 = 'zIndex';
    var9[var13] = var14;
    var3.backgroundWrapper = var9;
    var9 = {};
    var16 = var12.absoluteFillObject;
    var17 = var9;
    var13 = copyDataProperties(var17, var16);
    var9[var10] = var11;
    var14 = 'cover';
    var13 = 'resizeMode';
    var9[var13] = var14;
    var3.backgroundHeroAsset = var9;
    var9 = {};
    var16 = var12.absoluteFillObject;
    var17 = var9;
    var13 = copyDataProperties(var17, var16);
    var3.backgroundHeroAssetVideo = var9;
    var9 = {};
    var16 = var12.absoluteFillObject;
    var17 = var9;
    var12 = copyDataProperties(var17, var16);
    var9[var10] = var11;
    var3.backgroundGradient = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function QuestDockUnenrolledBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function QuestDockUnenrolledBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,videoLoaded,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()!==QuestDockMode.EXPANDED||!videoLoaded?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun84834: for (var _fun84834_ip = 0;;) switch (_fun84834_ip) {
            case 0:
                var17 = _closure1_slot4;
                var2 = var17.useContext;
                var18 = _closure1_slot1;
                var20 = _closure1_slot2;
                var12 = 9;
                var0 = var20[var12];
                var3 = undefined;
                var0 = var18.bind(var3)(var0);
                var0 = var2.bind(var17)(var0);
                var4 = var0.quest;
                var0 = _closure1_slot13;
                var10 = var0.bind(var3)();
                var24 = _closure1_slot0;
                var0 = 10;
                var0 = var20[var0];
                var2 = var24.bind(var3)(var0);
                var0 = var2.useQuestDockHeroAsset;
                var0 = var0.bind(var2)(var4);
                var19 = var0.staticUrl;
                var22 = var0.videoAsset;
                var2 = var17.useContext;
                var0 = 11;
                var0 = var20[var0];
                var0 = var24.bind(var3)(var0);
                var0 = var0.QuestDockGestureContext;
                var0 = var2.bind(var17)(var0);
                var13 = var0.activeQuestDockMode;
                var _closure2_slot0 = var13;
                var16 = var0.windowDimensions;
                var _closure2_slot1 = var16;
                var2 = var17.useContext;
                var0 = 12;
                var0 = var20[var0];
                var0 = var24.bind(var3)(var0);
                var0 = var0.QuestDockExternalCoordinationContext;
                var0 = var2.bind(var17)(var0);
                var15 = var0.setRestingQuestDockMode;
                var _closure2_slot2 = var15;
                var0 = 13;
                var0 = var20[var0];
                var0 = var18.bind(var3)(var0);
                var21 = var0.bind(var3)(var13);
                var0 = 14;
                var0 = var20[var0];
                var5 = var24.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var0 = var4.bind(var5)(var2, var0);
                var2 = 15;
                var2 = var20[var2];
                var5 = var24.bind(var3)(var2);
                var4 = var5.useToken;
                var2 = 16;
                var2 = var20[var2];
                var2 = var18.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.CARD_BACKGROUND_DEFAULT;
                var2 = var4.bind(var5)(var2);
                var _closure2_slot3 = var2;
                var5 = var17.useMemo;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = _closure2_slot3;
                    var3 = var1.bind(var2)(var0);
                    var1 = var3.alpha;
                    var0 = 0;
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.hex;
                    var1 = var0.bind(var1)();
                    var0 = new Array(4);
                    var0[0] = var1;
                    var2 = var3.alpha;
                    var1 = 0.1;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.hex;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    var2 = var3.alpha;
                    var1 = 0.8;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.hex;
                    var1 = var1.bind(var2)();
                    var0[2] = var1;
                    var2 = var3.alpha;
                    var1 = 1;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.hex;
                    var1 = var1.bind(var2)();
                    var0[3] = var1;
                    return var0;
                };
                var8 = var5.bind(var17)(var2, var4);
                var5 = var17.useMemo;
                var4 = function() { // Environment: var1
                    var0 = [0, 0.33, 0.76, 1];
                    return var0;
                };
                var2 = new Array(0);
                var11 = var5.bind(var17)(var4, var2);
                var2 = 18;
                var4 = var20[var2];
                var6 = var24.bind(var3)(var4);
                var5 = var6.useAnimatedStyle;
                var4 = function() {
                    _fun84838: for (var _fun84838_ip = 0;;) switch (_fun84838_ip) {
                        case 0:
                            var0 = {};
                            var3 = {};
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var9 = 19;
                            var1 = var1[var9];
                            var8 = undefined;
                            var10 = var2.bind(var8)(var1);
                            var6 = var10.withSpring;
                            var5 = _closure2_slot0;
                            var2 = var5.get;
                            var11 = var2.bind(var5)();
                            var2 = _closure1_slot7;
                            var2 = var2.COLLAPSED;
                            var5 = 0;
                            if (!(var11 === var2)) {
                                _fun84838_ip = 80;
                                continue _fun84838
                            }
                        case 66:
                            var11 = _closure1_slot9;
                            var2 = -1;
                            var5 = var2 * var11;
                        case 80:
                            var2 = _closure1_slot8;
                            var2 = var6.bind(var10)(var5, var2);
                            var3.translateX = var2;
                            var2 = new Array(2);
                            var2[0] = var3;
                            var3 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var9];
                            var6 = var6.bind(var8)(var5);
                            var5 = var6.withSpring;
                            var9 = _closure2_slot0;
                            var8 = var9.get;
                            var9 = var8.bind(var9)();
                            var8 = _closure1_slot7;
                            var8 = var8.COLLAPSED;
                            var7 = 0;
                            if (!(var9 === var8)) {
                                _fun84838_ip = 170;
                                continue _fun84838
                            }
                        case 156:
                            var9 = _closure1_slot9;
                            var8 = -1;
                            var7 = var8 * var9;
                        case 170:
                            var4 = _closure1_slot8;
                            var4 = var5.bind(var6)(var7, var4);
                            var3.translateY = var4;
                            var2[1] = var3;
                            var0.transform = var2;
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var1 = var1.width;
                            var0.width = var1;
                            return var0;
                    }
                };
                var7 = {};
                var14 = 19;
                var23 = var20[var14];
                var23 = var24.bind(var3)(var23);
                var23 = var23.withSpring;
                var7.withSpring = var23;
                var7.activeQuestDockMode = var13;
                var23 = _closure1_slot7;
                var7.QuestDockMode = var23;
                var23 = _closure1_slot9;
                var7.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED = var23;
                var23 = _closure1_slot8;
                var7.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = var23;
                var7.windowDimensions = var16;
                var4.__closure = var7;
                var7 = 3565242281634.0;
                var4.__workletHash = var7;
                var7 = _closure1_slot14;
                var4.__initData = var7;
                var6 = var5.bind(var6)(var4);
                var5 = var17.useState;
                var4 = _closure1_slot5;
                var7 = var4.currentState;
                var4 = 'active';
                var4 = var4 !== var7;
                var5 = var5.bind(var17)(var4);
                var4 = _closure1_slot3;
                var16 = 2;
                var23 = var4.bind(var3)(var5, var16);
                var7 = 0;
                var4 = var23[var7];
                var5 = 1;
                var23 = var23[var5];
                var _closure2_slot4 = var23;
                var24 = var17.useEffect;
                var23 = new Array(2);
                var23[0] = var13;
                var23[1] = var15;
                var15 = function() { // Environment: var1
                    var4 = _closure1_slot5;
                    var3 = var4.addEventListener;
                    var2 = 'change';
                    var1 = function(arg0) { // Environment: var0
                        _fun84840: for (var _fun84840_ip = 0;;) switch (_fun84840_ip) {
                            case 0:
                                var1 = 'active';
                                var0 = arg0;
                                var4 = var1 !== var0;
                                var1 = _closure2_slot4;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var4);
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 20;
                                var3 = var6[var3];
                                var5 = var5.bind(var0)(var3);
                                var3 = var5.isIOS;
                                var3 = var3.bind(var5)();
                                if (!var3) {
                                    _fun84840_ip = 64;
                                    continue _fun84840
                                }
                            case 61:
                                var3 = var4;
                            case 64:
                                if (!var3) {
                                    _fun84840_ip = 94;
                                    continue _fun84840
                                }
                            case 67:
                                var5 = _closure2_slot0;
                                var4 = var5.get;
                                var5 = var4.bind(var5)();
                                var4 = _closure1_slot7;
                                var4 = var4.EXPANDED;
                                var3 = var5 === var4;
                            case 94:
                                if (!var3) {
                                    _fun84840_ip = 116;
                                    continue _fun84840
                                }
                            case 97:
                                var2 = _closure2_slot2;
                                var1 = _closure1_slot7;
                                var1 = var1.COLLAPSED;
                                var1 = var2.bind(var0)(var1);
                            case 116:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.remove;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var15 = var24.bind(var17)(var15, var23);
                var15 = var17.useContext;
                var12 = var20[var12];
                var12 = var18.bind(var3)(var12);
                var12 = var15.bind(var17)(var12);
                var12 = var12.isVisible;
                var4 = !var4;
                if (!var4) {
                    _fun84834_ip = 585;
                    continue _fun84834
                }
            case 582:
                var4 = var12;
            case 585:
                if (!var4) {
                    _fun84834_ip = 591;
                    continue _fun84834
                }
            case 588:
                var4 = !var0;
            case 591:
                if (!var4) {
                    _fun84834_ip = 600;
                    continue _fun84834
                }
            case 594:
                var0 = null;
                var4 = var0 != var22;
            case 600:
                if (!var4) {
                    _fun84834_ip = 636;
                    continue _fun84834
                }
            case 603:
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 20;
                var0 = var15[var0];
                var12 = var12.bind(var3)(var0);
                var0 = var12.isAndroid;
                var0 = var0.bind(var12)();
                var4 = !var0;
            case 636:
                if (!var4) {
                    _fun84834_ip = 670;
                    continue _fun84834
                }
            case 639:
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 21;
                var0 = var15[var0];
                var12 = var12.bind(var3)(var0);
                var0 = var12.isHeroVideoSupported;
                var4 = var0.bind(var12)(var22);
            case 670:
                var15 = _closure1_slot4;
                var0 = var15.useState;
                var17 = false;
                var12 = var0.bind(var15)(var17);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var12, var16);
                var12 = var0[var7];
                var _closure2_slot5 = var12;
                var0 = var0[var5];
                var _closure2_slot6 = var0;
                var7 = var15.useCallback;
                var5 = function() { // Environment: var1
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var20 = var7.bind(var15)(var5, var0);
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var2];
                var5 = var15.bind(var3)(var2);
                var2 = var5.useAnimatedStyle;
                var1 = function() {
                    _fun84843: for (var _fun84843_ip = 0;;) switch (_fun84843_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 19;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withSpring;
                            var6 = _closure2_slot0;
                            var2 = var6.get;
                            var8 = var2.bind(var6)();
                            var2 = _closure1_slot7;
                            var7 = var2.EXPANDED;
                            var6 = 1;
                            var2 = var6;
                            if (!(var8 === var7)) {
                                _fun84843_ip = 80;
                                continue _fun84843
                            }
                        case 68:
                            var5 = _closure2_slot5;
                            var2 = var6;
                            if (!var5) {
                                _fun84843_ip = 80;
                                continue _fun84843
                            }
                        case 78:
                            var2 = 0;
                        case 80:
                            var1 = _closure1_slot8;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var7 = {};
                var14 = var0[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.withSpring;
                var7.withSpring = var14;
                var7.activeQuestDockMode = var13;
                var13 = _closure1_slot7;
                var7.QuestDockMode = var13;
                var7.videoLoaded = var12;
                var12 = _closure1_slot8;
                var7.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = var12;
                var1.__closure = var7;
                var7 = 13084905891385.0;
                var1.__workletHash = var7;
                var7 = _closure1_slot15;
                var1.__initData = var7;
                var16 = var2.bind(var5)(var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var13 = 22;
                var0 = var0[var13];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = var10.backgroundWrapper;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                if (var4) {
                    _fun84834_ip = 955;
                    continue _fun84834
                }
            case 898:
                var6 = _closure1_slot11;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 24;
                var4 = var7[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var7 = var10.backgroundHeroAsset;
                var4.style = var7;
                var7 = {};
                var7.uri = var19;
                var4.source = var7;
                var5 = var6.bind(var3)(var5, var4);
                _fun84834_ip = 1183;
                continue _fun84834;
            case 955:
                var7 = _closure1_slot12;
                var4 = _closure1_slot4;
                var6 = var4.Fragment;
                var4 = {};
                var15 = _closure1_slot11;
                var14 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = 23;
                var12 = var18[var12];
                var12 = var14.bind(var3)(var12);
                var14 = var12.VideoComponent;
                var12 = {};
                var23 = var10.backgroundHeroAssetVideo;
                var12.style = var23;
                var12.onLoad = var20;
                var20 = {};
                var22 = var22.url;
                var20.uri = var22;
                var12.source = var20;
                var20 = _closure1_slot7;
                var20 = var20.EXPANDED;
                var20 = var21 !== var20;
                var12.paused = var20;
                var20 = 'cover';
                var12.resizeMode = var20;
                var20 = true;
                var12.muted = var20;
                var21 = 'mix';
                var12.mixWithOthers = var21;
                var12.disableFocus = var20;
                var12.preventsDisplaySleepDuringVideoPlayback = var17;
                var14 = var15.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var17 = _closure1_slot1;
                var13 = var18[var13];
                var14 = var17.bind(var3)(var13);
                var13 = {};
                var13.style = var16;
                var16 = 24;
                var16 = var18[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var18 = var10.backgroundHeroAsset;
                var16.style = var18;
                var18 = {};
                var18.uri = var19;
                var16.source = var18;
                var16 = var15.bind(var3)(var17, var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var4.children = var12;
                var5 = var7.bind(var3)(var6, var4);
            case 1183:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 25;
                var5 = var12[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.locations = var11;
                var10 = var10.backgroundGradient;
                var5.style = var10;
                var9 = _closure1_slot10;
                var10 = var9.START;
                var5.start = var10;
                var9 = var9.END;
                var5.end = var9;
                var5.colors = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 5280, 5305, 660, 33, 1297, 10844, 5277, 5306, 5309, 8262, 566, 3153, 671, 669, 3721, 4081, 478, 10110, 6525, 8924, 4704, 4098, 2]);