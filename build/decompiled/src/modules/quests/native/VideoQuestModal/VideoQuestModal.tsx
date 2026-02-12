// modules/quests/native/VideoQuestModal/VideoQuestModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var10 = 0;
    var1 = var6[var10];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var14 = 1;
    var4 = var6[var14];
    var1 = metroImportAll;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var17 = 2;
    var1 = var6[var17];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot5 = var4;
    var16 = var1.StyleSheet;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var9 = var1.jsx;
    var _closure1_slot7 = var9;
    var1 = var1.jsxs;
    var _closure1_slot8 = var1;
    var1 = {
        'mass': 1.9,
        'damping': 18,
        'stiffness': 80,
        'overshootClamping': true
    };
    var _closure1_slot9 = var1;
    var1 = {};
    var1.WATCH_VIDEO = var10;
    var4 = 'WATCH_VIDEO';
    var1[var10] = var4;
    var1.POST_WATCH_VIDEO = var14;
    var4 = 'POST_WATCH_VIDEO';
    var1[var14] = var4;
    var _closure1_slot10 = var1;
    var4 = 5;
    var4 = var6[var4];
    var11 = var5.bind(var0)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {
        'flexDirection': 'column',
        'flexGrow': 1,
        'flexShrink': 1,
        'zIndex': 1
    };
    var4.wrapper = var12;
    var12 = {};
    var12.flex = var14;
    var4.contentWrapper = var12;
    var12 = {};
    var21 = var16.absoluteFillObject;
    var22 = var12;
    var13 = copyDataProperties(var22, var21);
    var13 = 6;
    var15 = var6[var13];
    var15 = var8.bind(var0)(var15);
    var15 = var15.radii;
    var18 = var15.lg;
    var15 = 'borderRadius';
    var12[var15] = var18;
    var18 = var6[var13];
    var18 = var8.bind(var0)(var18);
    var18 = var18.colors;
    var19 = var18.BACKGROUND_BASE_LOWEST;
    var18 = 'backgroundColor';
    var12[var18] = var19;
    var4.contentBackground = var12;
    var12 = {};
    var12.zIndex = var17;
    var4.modalContentWrapper = var12;
    var12 = {};
    var21 = var16.absoluteFillObject;
    var22 = var12;
    var16 = copyDataProperties(var22, var21);
    var13 = var6[var13];
    var13 = var8.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var12[var15] = var13;
    var13 = 'flex';
    var12[var13] = var14;
    var15 = 'hidden';
    var13 = 'overflow';
    var12[var13] = var15;
    var15 = 'none';
    var13 = 'pointerEvents';
    var12[var13] = var15;
    var13 = 'zIndex';
    var12[var13] = var14;
    var4.backgroundWrapper = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var10 = 'function VideoQuestModalTsx1(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}';
    var4.code = var10;
    var _closure1_slot12 = var4;
    var4 = {};
    var10 = 'function VideoQuestModalTsx2(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}';
    var4.code = var10;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var8.bind(var0)(var4);
    var4 = {};
    var10 = 'top';
    var4.align = var10;
    var4 = var9.bind(var0)(var8, var4);
    var _closure1_slot14 = var4;
    var8 = var7.memo;
    var4 = function(arg0) { // Environment: var3
        _fun82658: for (var _fun82658_ip = 0;;) switch (_fun82658_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.onClose;
                var6 = var1.initialStep;
                var _closure2_slot0 = var6;
                var16 = var1.sourceQuestContent;
                var _closure2_slot1 = var16;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useVideoQuestModalContext;
                var1 = var1.bind(var2)();
                var2 = var1.quest;
                var _closure2_slot2 = var2;
                var1 = var1.videoSessionId;
                var _closure2_slot3 = var1;
                var5 = var2.userStatus;
                var8 = null;
                var7 = var8 == var5;
                var4 = undefined;
                if (var7) {
                    _fun82658_ip = 109;
                    continue _fun82658
                }
            case 103:
                var4 = var5.completedAt;
            case 109:
                var10 = var8 != var4;
                var _closure2_slot4 = var10;
                var7 = _closure1_slot4;
                var5 = var7.useState;
                var4 = var6;
                if (!(var8 == var4)) {
                    _fun82658_ip = 157;
                    continue _fun82658
                }
            case 133:
                var9 = _closure1_slot10;
                if (var10) {
                    _fun82658_ip = 148;
                    continue _fun82658
                }
            case 140:
                var8 = var9.WATCH_VIDEO;
                _fun82658_ip = 154;
                continue _fun82658;
            case 148:
                var8 = var9.POST_WATCH_VIDEO;
            case 154:
                var4 = var8;
            case 157:
                var4 = var5.bind(var7)(var4);
                var11 = _closure1_slot3;
                var8 = 2;
                var7 = var11.bind(var3)(var4, var8);
                var4 = 0;
                var14 = var7[var4];
                var _closure2_slot5 = var14;
                var5 = 1;
                var7 = var7[var5];
                var _closure2_slot6 = var7;
                var9 = _closure1_slot4;
                var12 = var9.useState;
                var7 = false;
                var7 = var12.bind(var9)(var7);
                var7 = var11.bind(var3)(var7, var8);
                var22 = var7[var4];
                var7 = var7[var5];
                var _closure2_slot7 = var7;
                var7 = var9.useCallback;
                var8 = var2.id;
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var1;
                var2[2] = var16;
                var1 = function(arg0) { // Environment: var0
                    _fun82659: for (var _fun82659_ip = 0;;) switch (_fun82659_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.lockOrientation;
                            if (var5) {
                                _fun82659_ip = 51;
                                continue _fun82659
                            }
                        case 37:
                            var2 = 'PORTRAIT';
                            var1 = true;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun82659_ip = 63;
                            continue _fun82659;
                        case 51:
                            var2 = 'LANDSCAPE';
                            var1 = true;
                            var1 = var3.bind(var4)(var2, var1);
                        case 63:
                            var1 = _closure2_slot7;
                            var1 = var1.bind(var0)(var5);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 10;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackQuestEvent;
                            var1 = {};
                            var7 = _closure2_slot2;
                            var7 = var7.id;
                            var1.questId = var7;
                            var6 = _closure1_slot6;
                            if (var5) {
                                _fun82659_ip = 132;
                                continue _fun82659
                            }
                        case 124:
                            var5 = var6.QUEST_VIDEO_FULLSCREEN_EXITED;
                            _fun82659_ip = 138;
                            continue _fun82659;
                        case 132:
                            var5 = var6.QUEST_VIDEO_FULLSCREEN_ENTERED;
                        case 138:
                            var1.event = var5;
                            var5 = {};
                            var6 = _closure2_slot3;
                            var5.video_session_id = var6;
                            var1.properties = var5;
                            var4 = _closure2_slot1;
                            var1.sourceQuestContent = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var20 = var7.bind(var9)(var1, var2);
                var _closure2_slot8 = var20;
                var8 = var9.useContext;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 11;
                var7 = var1[var7];
                var7 = var2.bind(var3)(var7);
                var7 = var7.QuestDockGestureContext;
                var7 = var8.bind(var9)(var7);
                var8 = var7.windowDimensions;
                var7 = _closure1_slot11;
                var11 = var7.bind(var3)();
                var12 = _closure1_slot1;
                var7 = 12;
                var7 = var1[var7];
                var7 = var12.bind(var3)(var7);
                var7 = var7.bind(var3)(var8);
                var15 = var7.height;
                var8 = var9.useLayoutEffect;
                var7 = new Array(2);
                var7[0] = var10;
                var7[1] = var6;
                var6 = function() { // Environment: var0
                    _fun82660: for (var _fun82660_ip = 0;;) switch (_fun82660_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun82660_ip = 20;
                                continue _fun82660
                            }
                        case 10:
                            var3 = _closure2_slot0;
                            var2 = null;
                            var1 = var2 == var3;
                        case 20:
                            if (!var1) {
                                _fun82660_ip = 47;
                                continue _fun82660
                            }
                        case 23:
                            var2 = _closure2_slot6;
                            var0 = _closure1_slot10;
                            var1 = var0.POST_WATCH_VIDEO;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 47:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var8.bind(var9)(var6, var7);
                var8 = var9.useCallback;
                var7 = function() { // Environment: var0
                    var2 = _closure2_slot6;
                    var0 = _closure1_slot10;
                    var1 = var0.WATCH_VIDEO;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = new Array(0);
                var17 = var8.bind(var9)(var7, var6);
                var8 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var20;
                var6 = function() { // Environment: var0
                    var3 = _closure2_slot8;
                    var0 = undefined;
                    var2 = false;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot6;
                    var1 = _closure1_slot10;
                    var1 = var1.POST_WATCH_VIDEO;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var21 = var8.bind(var9)(var6, var7);
                var8 = 13;
                var1 = var1[var8];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useSharedValue;
                var6 = _closure1_slot10;
                var6 = var6.POST_WATCH_VIDEO;
                if (!(var14 === var6)) {
                    _fun82658_ip = 464;
                    continue _fun82658
                }
            case 461:
                var4 = var5;
            case 464:
                var5 = var1.bind(var2)(var4);
                var _closure2_slot9 = var5;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = var10[var8];
                var4 = var9.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 14;
                    var1 = var10[var3];
                    var8 = undefined;
                    var11 = var9.bind(var8)(var1);
                    var4 = var11.withSpring;
                    var7 = 13;
                    var1 = var10[var7];
                    var14 = var9.bind(var8)(var1);
                    var13 = var14.clamp;
                    var2 = _closure2_slot9;
                    var1 = var2.get;
                    var12 = var1.bind(var2)();
                    var1 = 0;
                    var2 = 1;
                    var2 = var13.bind(var14)(var12, var1, var2);
                    var5 = _closure1_slot9;
                    var2 = var4.bind(var11)(var2, var5);
                    var0.opacity = var2;
                    var2 = {};
                    var3 = var10[var3];
                    var4 = var9.bind(var8)(var3);
                    var3 = var4.withSpring;
                    var7 = var10[var7];
                    var9 = var9.bind(var8)(var7);
                    var8 = var9.interpolate;
                    var7 = _closure2_slot9;
                    var6 = var7.get;
                    var7 = var6.bind(var7)();
                    var6 = new Array(2);
                    var10 = -100;
                    var6[0] = var10;
                    var6[1] = var1;
                    var1 = [0, 1];
                    var1 = var8.bind(var9)(var7, var1, var6);
                    var1 = var3.bind(var4)(var1, var5);
                    var2.translateY = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var6 = {};
                var12 = 14;
                var7 = var10[var12];
                var7 = var9.bind(var3)(var7);
                var7 = var7.withSpring;
                var6.withSpring = var7;
                var7 = var10[var8];
                var7 = var9.bind(var3)(var7);
                var7 = var7.clamp;
                var6.clamp = var7;
                var6.postWatchAnimationState = var5;
                var7 = _closure1_slot9;
                var6.BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG = var7;
                var19 = var10[var8];
                var19 = var9.bind(var3)(var19);
                var19 = var19.interpolate;
                var6.interpolate = var19;
                var19 = -100;
                var6.CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y = var19;
                var1.__closure = var6;
                var6 = 11571705142399.0;
                var1.__workletHash = var6;
                var6 = _closure1_slot12;
                var1.__initData = var6;
                var23 = var2.bind(var4)(var1);
                var19 = _closure1_slot1;
                var1 = 15;
                var1 = var10[var1];
                var1 = var19.bind(var3)(var1);
                var28 = var1.bind(var3)();
                var _closure2_slot10 = var28;
                var1 = var10[var8];
                var4 = var9.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var8 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 14;
                    var1 = var6[var2];
                    var3 = undefined;
                    var10 = var5.bind(var3)(var1);
                    var9 = var10.withSpring;
                    var1 = 13;
                    var1 = var6[var1];
                    var14 = var5.bind(var3)(var1);
                    var13 = var14.interpolate;
                    var11 = _closure2_slot9;
                    var7 = var11.get;
                    var12 = var7.bind(var11)();
                    var7 = _closure2_slot10;
                    var7 = var7.top;
                    var11 = new Array(2);
                    var11[0] = var7;
                    var7 = 0;
                    var11[1] = var7;
                    var7 = [0, 1];
                    var7 = var13.bind(var14)(var12, var7, var11);
                    var4 = _closure1_slot9;
                    var7 = var9.bind(var10)(var7, var4);
                    var8.translateY = var7;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var0.transform = var7;
                    var2 = var6[var2];
                    var3 = var5.bind(var3)(var2);
                    var2 = var3.withSpring;
                    var5 = _closure2_slot9;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var2.bind(var3)(var1, var4);
                    var0.opacity = var1;
                    return var0;
                };
                var6 = {};
                var12 = var10[var12];
                var12 = var9.bind(var3)(var12);
                var12 = var12.withSpring;
                var6.withSpring = var12;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.interpolate;
                var6.interpolate = var8;
                var6.postWatchAnimationState = var5;
                var6.safeAreaInsets = var28;
                var6.BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG = var7;
                var1.__closure = var6;
                var6 = 9769051401109.0;
                var1.__workletHash = var6;
                var6 = _closure1_slot13;
                var1.__initData = var6;
                var27 = var2.bind(var4)(var1);
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var14;
                var0 = function() { // Environment: var0
                    _fun82665: for (var _fun82665_ip = 0;;) switch (_fun82665_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var1 = var2.set;
                            var4 = _closure2_slot5;
                            var0 = _closure1_slot10;
                            var3 = var0.POST_WATCH_VIDEO;
                            var0 = 0;
                            if (!(var4 === var3)) {
                                _fun82665_ip = 38;
                                continue _fun82665
                            }
                        case 35:
                            var0 = 1;
                        case 38:
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = _closure1_slot8;
                var12 = 16;
                var4 = var10[var12];
                var5 = var19.bind(var3)(var4);
                var4 = {};
                var7 = var11.modalContentWrapper;
                var4.style = var7;
                var7 = {};
                var24 = var11.backgroundWrapper;
                var8 = new Array(2);
                var8[0] = var24;
                var24 = {};
                var24.height = var15;
                var8[1] = var24;
                var7.style = var8;
                var8 = var10[var12];
                var24 = var19.bind(var3)(var8);
                var8 = {};
                var26 = var11.contentBackground;
                var25 = new Array(2);
                var25[0] = var26;
                var26 = {};
                var28 = var28.top;
                var26.top = var28;
                var25[1] = var26;
                var8.style = var25;
                var24 = var2.bind(var3)(var24, var8);
                var8 = new Array(3);
                var8[0] = var24;
                var24 = var10[var12];
                var25 = var19.bind(var3)(var24);
                var24 = {};
                var28 = var11.contentBackground;
                var26 = new Array(2);
                var26[0] = var28;
                var26[1] = var27;
                var24.style = var26;
                var24 = var2.bind(var3)(var25, var24);
                var8[1] = var24;
                var12 = var10[var12];
                var19 = var19.bind(var3)(var12);
                var12 = {};
                var12.style = var23;
                var23 = _closure1_slot14;
                var12.children = var23;
                var12 = var2.bind(var3)(var19, var12);
                var8[2] = var12;
                var7.children = var8;
                var8 = var6.bind(var3)(var1, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = 17;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.SafeAreaPaddingView;
                var8 = {};
                var10 = true;
                var8.top = var10;
                var12 = var11.wrapper;
                var10 = new Array(2);
                var10[0] = var12;
                var12 = {};
                var12.height = var15;
                var10[1] = var12;
                var8.style = var10;
                var10 = {};
                var11 = var11.contentWrapper;
                var10.style = var11;
                var11 = _closure1_slot10;
                var11 = var11.WATCH_VIDEO;
                var12 = var14 === var11;
                if (!var12) {
                    _fun82658_ip = 1167;
                    continue _fun82658
                }
            case 1105:
                var19 = _closure1_slot7;
                var15 = _closure1_slot1;
                var23 = _closure1_slot2;
                var11 = 18;
                var11 = var23[var11];
                var15 = var15.bind(var3)(var11);
                var11 = {};
                var11.isFullscreen = var22;
                var11.onNavigateToPostWatchVideo = var21;
                var11.onClose = var18;
                var11.onEnd = var21;
                var11.setIsFullscreen = var20;
                var11.sourceQuestContent = var16;
                var12 = var19.bind(var3)(var15, var11);
            case 1167:
                var11 = new Array(2);
                var11[0] = var12;
                var12 = _closure1_slot10;
                var12 = var12.POST_WATCH_VIDEO;
                var12 = var14 === var12;
                if (!var12) {
                    _fun82658_ip = 1239;
                    continue _fun82658
                }
            case 1192:
                var15 = _closure1_slot7;
                var14 = _closure1_slot1;
                var19 = _closure1_slot2;
                var13 = 19;
                var13 = var19[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var13.onClose = var18;
                var13.onRestartVideo = var17;
                var13.sourceQuestContent = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 1239:
                var11[1] = var12;
                var10.children = var11;
                var10 = var6.bind(var3)(var1, var10);
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        var1 = arg0;
        var8 = var1.questId;
        var10 = var1.questContentPosition;
        var _closure2_slot0 = var10;
        var13 = var1.onClose;
        var11 = var1.videoSessionId;
        var _closure2_slot1 = var11;
        var9 = var1.initialStep;
        var4 = var1.sourceQuestContent;
        var _closure2_slot2 = var4;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 20;
        var2 = var5[var2];
        var3 = undefined;
        var7 = var1.bind(var3)(var2);
        var2 = var7.useNonNullableQuest;
        var12 = var2.bind(var7)(var8);
        var _closure2_slot3 = var12;
        var2 = _closure1_slot7;
        var8 = _closure1_slot15;
        var7 = {};
        var7.initialStep = var9;
        var7.onClose = var13;
        var7.sourceQuestContent = var4;
        var7 = var2.bind(var3)(var8, var7);
        var _closure2_slot4 = var7;
        var8 = _closure1_slot4;
        var7 = var8.useMemo;
        var6 = new Array(6);
        var6[0] = var13;
        var6[1] = var12;
        var6[2] = var11;
        var6[3] = var10;
        var6[4] = var9;
        var6[5] = var4;
        var4 = function() { // Environment: var0
            var0 = {};
            var2 = {};
            var3 = true;
            var2.fullscreen = var3;
            var3 = function() {
                var0 = null;
                return var0;
            };
            var2.headerLeft = var3;
            var1 = function() {
                var3 = _closure1_slot7;
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 8;
                var0 = var12[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.Provider;
                var0 = {};
                var5 = {};
                var9 = _closure2_slot3;
                var5.quest = var9;
                var6 = _closure2_slot1;
                var5.videoSessionId = var6;
                var0.value = var5;
                var11 = _closure1_slot0;
                var4 = 11;
                var4 = var12[var4];
                var4 = var11.bind(var2)(var4);
                var5 = var4.QuestDockGestureContextProvider;
                var4 = {};
                var6 = 21;
                var6 = var12[var6];
                var6 = var11.bind(var2)(var6);
                var7 = var6.QuestContentImpressionTrackerNative;
                var6 = {};
                var10 = true;
                var6.overrideVisibility = var10;
                var10 = 22;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var10 = var10.QuestContent;
                var10 = var10.VIDEO_MODAL_MOBILE;
                var6.questContent = var10;
                var6.questOrQuests = var9;
                var9 = _closure2_slot0;
                var6.questContentPosition = var9;
                var8 = _closure2_slot2;
                var6.sourceQuestContent = var8;
                var8 = function() {
                    var0 = _closure2_slot4;
                    return var0;
                };
                var6.children = var8;
                var6 = var3.bind(var2)(var7, var6);
                var4.children = var6;
                var4 = var3.bind(var2)(var5, var4);
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var2.render = var1;
            var1 = 'watch_mobile_video_quest';
            var0[var1] = var2;
            return var0;
        };
        var4 = var7.bind(var8)(var4, var6);
        var7 = var8.useLayoutEffect;
        var6 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 9;
            var4 = var3[var0];
            var1 = undefined;
            var7 = var2.bind(var1)(var4);
            var6 = var7.lockOrientation;
            var5 = 'PORTRAIT';
            var4 = true;
            var4 = var6.bind(var7)(var5, var4);
            var0 = var3[var0];
            var0 = var2.bind(var1)(var0);
            var0 = var0.restoreDefaultOrientation;
            return var0;
        };
        var0 = new Array(0);
        var0 = var7.bind(var8)(var6, var0);
        var0 = 23;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Modal;
        var0 = {
            'hideTitle': true,
            'initialRouteName': 'watch_mobile_video_quest'
        };
        var0.screens = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.VideoQuestModalSteps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 10567, 10570, 7616, 5290, 5283, 7643, 3717, 4087, 1568, 6551, 4754, 10571, 10612, 5365, 10011, 5259, 7834, 2]);