// modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: getSafeAreaInsetOrPadding, environment: var1
        var4 = arg1;
        var0 = global;
        var3 = var0.Math;
        var2 = var3.max;
        var0 = arg0;
        var1 = var0[var4];
        var0 = _closure1_slot15;
        var0 = var0[var4];
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var12 = 0;
    var3 = var6[var12];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var4 = var6[var3];
    var3 = arg3;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.View;
    var _closure1_slot5 = var4;
    var16 = var3.StyleSheet;
    var4 = var3.Pressable;
    var _closure1_slot6 = var4;
    var3 = var3.ActivityIndicator;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.AppStates;
    var _closure1_slot11 = var4;
    var3 = var3.ComponentActions;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot13 = var4;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = {};
    var10 = 8;
    var4 = var6[var10];
    var4 = var11.bind(var0)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_16;
    var3.left = var4;
    var4 = var6[var10];
    var4 = var11.bind(var0)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_16;
    var3.right = var4;
    var4 = var6[var10];
    var4 = var11.bind(var0)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_16;
    var3.top = var4;
    var4 = var6[var10];
    var4 = var11.bind(var0)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_16;
    var3.bottom = var4;
    var _closure1_slot15 = var3;
    var4 = var7.memo;
    var3 = 9;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var3 = var4.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = {};
    var4 = 'function hasVideoEnded_VideoQuestPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}';
    var3.code = var4;
    var _closure1_slot17 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: hasVideoEnded, environment: var0
            var1 = arg1;
            var0 = 1;
            var1 = var1 - var0;
            var0 = arg0;
            var0 = var0 >= var1;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 3281537893520.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot17;
        var0.__initData = var1;
        return var0;
    };
    var9 = var3.bind(var0)();
    var _closure1_slot18 = var9;
    var4 = {};
    var3 = 'function VideoQuestPlayerTsx2(currentTime,maxTimestamp,videoDuration,isQuestCompleted){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(isQuestCompleted||currentTime<=maxTimestamp-1);}';
    var4.code = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: _, environment: var1
        _fun82950: for (var _fun82950_ip = 0;;) switch (_fun82950_ip) {
            case 0:
                var3 = arg0;
                var1 = arg3;
                var4 = _closure1_slot18;
                var2 = undefined;
                var0 = arg2;
                var0 = var4.bind(var2)(var3, var0);
                var0 = !var0;
                if (!var0) {
                    _fun82950_ip = 50;
                    continue _fun82950
                }
            case 30:
                if (var1) {
                    _fun82950_ip = 47;
                    continue _fun82950
                }
            case 33:
                var4 = arg1;
                var2 = 1;
                var2 = var4 - var2;
                var1 = var3 <= var2;
            case 47:
                var0 = var1;
            case 50:
                return var0;
        }
    };
    var8 = {};
    var8.hasVideoEnded = var9;
    var3.__closure = var8;
    var8 = 6684695599942.0;
    var3.__workletHash = var8;
    var3.__initData = var4;
    var _closure1_slot19 = var3;
    var3 = 10;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {};
    var21 = var16.absoluteFillObject;
    var22 = var9;
    var13 = copyDataProperties(var22, var21);
    var3.container = var9;
    var9 = {};
    var21 = var16.absoluteFillObject;
    var22 = var9;
    var13 = copyDataProperties(var22, var21);
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var17 = 'backgroundColor';
    var9[var17] = var13;
    var14 = 'center';
    var15 = 'justifyContent';
    var9[var15] = var14;
    var13 = 'alignItems';
    var9[var13] = var14;
    var3.loadingContainer = var9;
    var9 = {};
    var18 = 'absolute';
    var9.position = var18;
    var3.bufferingSpinner = var9;
    var9 = {};
    var21 = var16.absoluteFillObject;
    var22 = var9;
    var18 = copyDataProperties(var22, var21);
    var9[var15] = var14;
    var9[var13] = var14;
    var3.bufferingSpinnerCentered = var9;
    var9 = {
        'height': '100%',
        'width': '100%'
    };
    var3.video = var9;
    var9 = {
        'position': 'relative',
        'height': '100%',
        'width': '100%'
    };
    var3.videoContainer = var9;
    var9 = {};
    var21 = var16.absoluteFillObject;
    var22 = var9;
    var16 = copyDataProperties(var22, var21);
    var16 = 11;
    var16 = var6[var16];
    var18 = var11.bind(var0)(var16);
    var16 = var6[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLACK;
    var19 = var18.bind(var0)(var16);
    var18 = var19.alpha;
    var16 = 0.5;
    var18 = var18.bind(var19)(var16);
    var16 = var18.hex;
    var16 = var16.bind(var18)();
    var9[var17] = var16;
    var9[var15] = var14;
    var9[var13] = var14;
    var14 = 'column';
    var13 = 'flexDirection';
    var9[var13] = var14;
    var3.controls = var9;
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-end',
        'padding': null,
        'position': 'absolute',
        'left': 0,
        'right': 0
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.padding = var13;
    var3.controlsTopBottom = var9;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'flexGrow': 1,
        'flexDirection': 'row',
        'gap': null,
        'pointerEvents': 'box-none'
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9.gap = var13;
    var3.controlsMiddle = var9;
    var9 = {};
    var9.top = var12;
    var3.controlsTop = var9;
    var9 = {};
    var9.bottom = var12;
    var3.controlsBottom = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 0,
        'right': 0,
        'left': 0,
        'justifyContent': 'flex-end',
        'height': null,
        'overflow': 'hidden'
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.height = var12;
    var3.progressContainer = var9;
    var9 = {
        'height': 1,
        'backgroundColor': null,
        'shadowOffset': null,
        'shadowRadius': 6,
        'shadowOpacity': 1,
        'elevation': 5,
        'shadowColor': '#FFFFFF'
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9.backgroundColor = var12;
    var12 = {
        'width': 0,
        'height': 0
    };
    var9.shadowOffset = var12;
    var3.progress = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var9.color = var12;
    var3.icon = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_SUBTLE;
    var9.color = var12;
    var3.iconDisabled = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9.padding = var10;
    var3.controlButton = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot20 = var3;
    var3 = {};
    var4 = 'paused';
    var3.PAUSED = var4;
    var4 = 'playing';
    var3.PLAYING = var4;
    var4 = 'ended';
    var3.ENDED = var4;
    var4 = 'loading';
    var3.LOADING = var4;
    var4 = 'errored';
    var3.ERRORED = var4;
    var _closure1_slot21 = var3;
    var4 = {};
    var8 = 'function VideoQuestPlayerTsx3(){const{hasLoaded,showControls,playerState,PlayerState,isVideoEnded,externallyPaused}=this.__closure;return hasLoaded&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded||externallyPaused);}';
    var4.code = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = "function VideoQuestPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}";
    var4.code = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'function VideoQuestPlayerTsx5(){const{withTiming,progress,timingFast}=this.__closure;return{width:withTiming(progress.get()*100+"%",timingFast,\'animate-always\')};}';
    var4.code = var8;
    var _closure1_slot24 = var4;
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var1
        _fun82951: for (var _fun82951_ip = 0;;) switch (_fun82951_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.style;
                var29 = var0.onLoad;
                var _closure2_slot0 = var29;
                var23 = var0.onEnd;
                var _closure2_slot1 = var23;
                var24 = var0.onToggleFullscreen;
                var _closure2_slot2 = var24;
                var14 = var0.orientation;
                var _closure2_slot3 = var14;
                var40 = var0.contentInsets;
                var37 = var0.handleToggleCaptions;
                var36 = var0.handleOpenTranscript;
                var28 = var0.isFullscreen;
                var2 = var0.externallyPaused;
                var _closure2_slot4 = var2;
                var39 = var0.captionsEnabled;
                var4 = undefined;
                if (!(var39 === var4)) {
                    _fun82951_ip = 98;
                    continue _fun82951
                }
            case 96:
                var39 = false;
            case 98:
                var11 = var0.sourceQuestContent;
                var25 = var0.hasCaptionAsset;
                if (!(var25 === var4)) {
                    _fun82951_ip = 116;
                    continue _fun82951
                }
            case 114:
                var25 = true;
            case 116:
                var22 = var0.hasTranscriptAsset;
                if (!(var22 === var4)) {
                    _fun82951_ip = 128;
                    continue _fun82951
                }
            case 126:
                var22 = true;
            case 128:
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var _closure2_slot24 = var4;
                var _closure2_slot25 = var4;
                var _closure2_slot26 = var4;
                var _closure2_slot27 = var4;
                var _closure2_slot28 = var4;
                var _closure2_slot29 = var4;
                var _closure2_slot30 = var4;
                var _closure2_slot31 = var4;
                var _closure2_slot32 = var4;
                var _closure2_slot33 = var4;
                var _closure2_slot34 = var4;
                var _closure2_slot35 = var4;
                var _closure2_slot36 = var4;
                var _closure2_slot37 = var4;
                var _closure2_slot38 = var4;
                var _closure2_slot39 = var4;
                var _closure2_slot40 = var4;
                var _closure2_slot41 = var4;
                var _closure2_slot42 = var4;
                var _closure2_slot43 = var4;
                var _closure2_slot44 = var4;
                var _closure2_slot45 = var4;
                var _closure2_slot46 = var4;
                var _closure2_slot47 = var4;
                var _closure2_slot48 = var4;
                var _closure2_slot49 = var4;
                var0 = _closure1_slot20;
                var15 = var0.bind(var4)();
                var5 = _closure1_slot4;
                var3 = var5.useRef;
                var0 = null;
                var52 = var3.bind(var5)(var0);
                _closure2_slot5 = var52;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 12;
                var3 = var7[var3];
                var8 = var5.bind(var4)(var3);
                var3 = var8.useVideoQuestModalContext;
                var3 = var3.bind(var8)();
                var38 = var3.quest;
                _closure2_slot6 = var38;
                var18 = var3.videoSessionId;
                var3 = 13;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useQuestTaskDetails;
                var50 = var3.bind(var5)(var38);
                _closure2_slot7 = var50;
                var5 = var38.userStatus;
                var7 = var0 == var5;
                var3 = undefined;
                if (var7) {
                    _fun82951_ip = 433;
                    continue _fun82951
                }
            case 427:
                var3 = var5.completedAt;
            case 433:
                var53 = var0 != var3;
                _closure2_slot8 = var53;
                var9 = _closure1_slot4;
                var7 = var9.useMemo;
                var5 = new Array(1);
                var5[0] = var38;
                var3 = function() { // Environment: var1
                    var1 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 14;
                    var2 = var6[var0];
                    var5 = undefined;
                    var4 = var1.bind(var5)(var2);
                    var3 = var4.getQuestAsset;
                    var2 = _closure2_slot6;
                    var0 = var6[var0];
                    var0 = var1.bind(var5)(var0);
                    var0 = var0.QuestAssetType;
                    var9 = var0.VIDEO_PLAYER_VIDEO;
                    var7 = true;
                    var11 = var4;
                    var10 = var2;
                    var8 = undefined;
                    var0 = var11[var3](var10, var9, var8, var7, var6);
                    return var0;
                };
                var5 = var7.bind(var9)(var3, var5);
                _closure2_slot9 = var5;
                var8 = var9.useMemo;
                var7 = new Array(1);
                var7[0] = var38;
                var3 = function() { // Environment: var1
                    var1 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 14;
                    var2 = var6[var0];
                    var5 = undefined;
                    var4 = var1.bind(var5)(var2);
                    var3 = var4.getQuestAsset;
                    var2 = _closure2_slot6;
                    var0 = var6[var0];
                    var0 = var1.bind(var5)(var0);
                    var0 = var0.QuestAssetType;
                    var9 = var0.VIDEO_PLAYER_VIDEO_HLS;
                    var7 = true;
                    var11 = var4;
                    var10 = var2;
                    var8 = undefined;
                    var0 = var11[var3](var10, var9, var8, var7, var6);
                    return var0;
                };
                var31 = var8.bind(var9)(var3, var7);
                _closure2_slot10 = var31;
                var7 = var0 == var31;
                var3 = undefined;
                if (var7) {
                    _fun82951_ip = 519;
                    continue _fun82951
                }
            case 514:
                var3 = var31.url;
            case 519:
                if (!(var0 == var3)) {
                    _fun82951_ip = 557;
                    continue _fun82951
                }
            case 523:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 14;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.QuestAssetType;
                var12 = var3.VIDEO_PLAYER_VIDEO;
                _fun82951_ip = 589;
                continue _fun82951;
            case 557:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 14;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.QuestAssetType;
                var12 = var3.VIDEO_PLAYER_VIDEO_HLS;
            case 589:
                var16 = _closure1_slot4;
                var7 = var16.useState;
                var3 = var50.targetSeconds;
                var3 = var7.bind(var16)(var3);
                var8 = _closure1_slot3;
                var20 = 2;
                var7 = var8.bind(var4)(var3, var20);
                var30 = 0;
                var45 = var7[var30];
                _closure2_slot11 = var45;
                var3 = 1;
                var7 = var7[var3];
                _closure2_slot12 = var7;
                var56 = var50.targetSeconds;
                _closure2_slot13 = var56;
                var10 = _closure1_slot9;
                var7 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.setVideoProgress;
                    return var0;
                };
                var47 = var10.bind(var4)(var7);
                _closure2_slot14 = var47;
                var9 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 15;
                var7 = var17[var7];
                var7 = var9.bind(var4)(var7);
                var9 = var7.shallow;
                var7 = function(arg0) { // Environment: var1
                    _fun82955: for (var _fun82955_ip = 0;;) switch (_fun82955_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.videoProgress;
                            var0 = _closure2_slot6;
                            var0 = var0.id;
                            var0 = var1[var0];
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun82955_ip = 59;
                                continue _fun82955
                            }
                        case 31:
                            var1 = {};
                            var3 = _closure2_slot7;
                            var3 = var3.progressSeconds;
                            var1.timestampSec = var3;
                            var2 = _closure2_slot11;
                            var1.duration = var2;
                            var0 = var1;
                        case 59:
                            return var0;
                    }
                };
                var21 = var10.bind(var4)(var7, var9);
                _closure2_slot15 = var21;
                var9 = var16.useState;
                var7 = _closure1_slot21;
                var7 = var7.LOADING;
                var7 = var9.bind(var16)(var7);
                var7 = var8.bind(var4)(var7, var20);
                var34 = var7[var30];
                _closure2_slot16 = var34;
                var7 = var7[var3];
                _closure2_slot17 = var7;
                var7 = var16.useState;
                var9 = false;
                var7 = var7.bind(var16)(var9);
                var7 = var8.bind(var4)(var7, var20);
                var10 = var7[var30];
                _closure2_slot18 = var10;
                var7 = var7[var3];
                _closure2_slot19 = var7;
                var8 = var16.useRef;
                var7 = var50.progressSeconds;
                var7 = var8.bind(var16)(var7);
                _closure2_slot20 = var7;
                var33 = var10;
                if (!var33) {
                    _fun82951_ip = 832;
                    continue _fun82951
                }
            case 818:
                var7 = _closure1_slot21;
                var7 = var7.ENDED;
                var33 = var34 === var7;
            case 832:
                if (!var33) {
                    _fun82951_ip = 856;
                    continue _fun82951
                }
            case 835:
                var16 = _closure1_slot18;
                var8 = var21.timestampSec;
                var7 = var21.duration;
                var33 = var16.bind(var4)(var8, var7);
            case 856:
                _closure2_slot21 = var33;
                var41 = _closure1_slot0;
                var26 = _closure1_slot2;
                var17 = 16;
                var7 = var26[var17];
                var8 = var41.bind(var4)(var7);
                var7 = var8.useSharedValue;
                var32 = var7.bind(var8)(var9);
                _closure2_slot22 = var32;
                var7 = function() { // Original name: W, environment: var1
                    _fun82956: for (var _fun82956_ip = 0;;) switch (_fun82956_ip) {
                        case 0:
                            var0 = _closure2_slot18;
                            if (!var0) {
                                _fun82956_ip = 112;
                                continue _fun82956
                            }
                        case 10:
                            var3 = _closure2_slot22;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun82956_ip = 47;
                                continue _fun82956
                            }
                        case 26:
                            var4 = _closure2_slot16;
                            var3 = _closure1_slot21;
                            var3 = var3.PAUSED;
                            var1 = var4 === var3;
                        case 47:
                            if (var1) {
                                _fun82956_ip = 71;
                                continue _fun82956
                            }
                        case 50:
                            var4 = _closure2_slot16;
                            var3 = _closure1_slot21;
                            var3 = var3.ENDED;
                            var1 = var4 === var3;
                        case 71:
                            if (var1) {
                                _fun82956_ip = 95;
                                continue _fun82956
                            }
                        case 74:
                            var4 = _closure2_slot16;
                            var3 = _closure1_slot21;
                            var3 = var3.ERRORED;
                            var1 = var4 === var3;
                        case 95:
                            if (var1) {
                                _fun82956_ip = 102;
                                continue _fun82956
                            }
                        case 98:
                            var1 = _closure2_slot21;
                        case 102:
                            if (var1) {
                                _fun82956_ip = 109;
                                continue _fun82956
                            }
                        case 105:
                            var1 = _closure2_slot4;
                        case 109:
                            var0 = var1;
                        case 112:
                            return var0;
                    }
                };
                var8 = {};
                var8.hasLoaded = var10;
                var8.showControls = var32;
                var8.playerState = var34;
                var10 = _closure1_slot21;
                var8.PlayerState = var10;
                var8.isVideoEnded = var33;
                var8.externallyPaused = var2;
                var7.__closure = var8;
                var8 = 9198261161185.0;
                var7.__workletHash = var8;
                var8 = _closure1_slot22;
                var7.__initData = var8;
                _closure2_slot23 = var7;
                var8 = var26[var17];
                var16 = var41.bind(var4)(var8);
                var10 = var16.useAnimatedStyle;
                var8 = function() { // Original name: K, environment: var1
                    _fun82957: for (var _fun82957_ip = 0;;) switch (_fun82957_ip) {
                        case 0:
                            var0 = _closure2_slot23;
                            var7 = undefined;
                            var2 = var0.bind(var7)();
                            var0 = {};
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 17;
                            var3 = var5[var3];
                            var5 = var4.bind(var7)(var3);
                            var4 = var5.withSpring;
                            var3 = 0;
                            if (!var2) {
                                _fun82957_ip = 51;
                                continue _fun82957
                            }
                        case 48:
                            var3 = 1;
                        case 51:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 18;
                            var1 = var8[var1];
                            var1 = var6.bind(var7)(var1);
                            var1 = var1.SUBTLE_SPRING;
                            var1 = var4.bind(var5)(var3, var1);
                            var0.opacity = var1;
                            var1 = 'none';
                            if (!var2) {
                                _fun82957_ip = 98;
                                continue _fun82957
                            }
                        case 94:
                            var1 = 'auto';
                        case 98:
                            var0.pointerEvents = var1;
                            return var0;
                    }
                };
                var19 = {};
                var19.shouldShowControls = var7;
                var27 = 17;
                var27 = var26[var27];
                var27 = var41.bind(var4)(var27);
                var27 = var27.withSpring;
                var19.withSpring = var27;
                var27 = 18;
                var27 = var26[var27];
                var27 = var41.bind(var4)(var27);
                var27 = var27.SUBTLE_SPRING;
                var19.SUBTLE_SPRING = var27;
                var8.__closure = var19;
                var19 = 6174625876255.0;
                var8.__workletHash = var19;
                var19 = _closure1_slot23;
                var8.__initData = var19;
                var19 = var10.bind(var16)(var8);
                var8 = var7.bind(var4)();
                var7 = var26[var17];
                var10 = var41.bind(var4)(var7);
                var7 = var10.useSharedValue;
                var54 = var7.bind(var10)(var30);
                _closure2_slot24 = var54;
                var7 = var26[var17];
                var16 = var41.bind(var4)(var7);
                var10 = var16.useAnimatedStyle;
                var7 = function() { // Original name: Z, environment: var1
                    var0 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 19;
                    var1 = var7[var1];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var1);
                    var4 = var5.withTiming;
                    var2 = _closure2_slot24;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 100;
                    var2 = var1 * var2;
                    var1 = 20;
                    var1 = var7[var1];
                    var1 = var6.bind(var3)(var1);
                    var3 = var1.timingFast;
                    var1 = '%';
                    var2 = var2 + var1;
                    var1 = 'animate-always';
                    var1 = var4.bind(var5)(var2, var3, var1);
                    var0.width = var1;
                    return var0;
                };
                var27 = {};
                var35 = 19;
                var35 = var26[var35];
                var35 = var41.bind(var4)(var35);
                var35 = var35.withTiming;
                var27.withTiming = var35;
                var27.progress = var54;
                var35 = 20;
                var35 = var26[var35];
                var35 = var41.bind(var4)(var35);
                var35 = var35.timingFast;
                var27.timingFast = var35;
                var7.__closure = var27;
                var27 = 4647711667921.0;
                var7.__workletHash = var27;
                var27 = _closure1_slot24;
                var7.__initData = var27;
                var16 = var10.bind(var16)(var7);
                var43 = _closure1_slot4;
                var10 = var43.useRef;
                var7 = -1;
                var7 = var10.bind(var43)(var7);
                _closure2_slot25 = var7;
                var27 = var43.useCallback;
                var10 = new Array(1);
                var10[0] = var32;
                var7 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function(arg0) { // Environment: var0
                        _fun82960: for (var _fun82960_ip = 0;;) switch (_fun82960_ip) {
                            case 0:
                                var10 = 0;
                                var3 = copyRestArgs(var10);
                                var0 = global;
                                var6 = var0.clearTimeout;
                                var2 = _closure2_slot25;
                                var5 = var2.current;
                                var2 = undefined;
                                var5 = var6.bind(var2)(var5);
                                var7 = _closure2_slot22;
                                var6 = var7.set;
                                var5 = true;
                                var5 = var6.bind(var7)(var5);
                                var1 = _closure2_slot25;
                                var6 = var0.setTimeout;
                                var5 = function() { // Environment: var0
                                    var2 = _closure2_slot22;
                                    var1 = var2.set;
                                    var0 = false;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = 2000;
                                var0 = var6.bind(var2)(var5, var0);
                                var1.current = var0;
                                var5 = _closure3_slot0;
                                var1 = null;
                                if (!(var1 == var5)) {
                                    _fun82960_ip = 101;
                                    continue _fun82960
                                }
                            case 99:
                                return var2;
                            case 101:
                                var1 = _closure3_slot0;
                                var0 = new Array(0);
                                var10 = var0;
                                var9 = var3;
                                var8 = 0;
                                var3 = arraySpread(var10, var9, var8);
                                var10 = var1;
                                var9 = var0;
                                var8 = undefined;
                                var0 = apply(var10, var9, var8);
                                return var0;
                        }
                    };
                    return var0;
                };
                var42 = var27.bind(var43)(var7, var10);
                var10 = _closure1_slot1;
                var7 = 21;
                var7 = var26[var7];
                var10 = var10.bind(var4)(var7);
                var7 = {};
                var7.duration = var45;
                var7.isQuestCompleted = var53;
                var7.playerState = var34;
                var26 = var38.id;
                var7.questId = var26;
                var7.videoSessionId = var18;
                var7.videoAssetId = var12;
                var7.sourceQuestContent = var11;
                var10 = var10.bind(var4)(var7);
                var7 = var10.handleBufferAnalytics;
                _closure2_slot26 = var7;
                var44 = var10.handleEndAnalytics;
                _closure2_slot27 = var44;
                var11 = var10.handleErrorAnalytics;
                _closure2_slot28 = var11;
                var49 = var10.handleLoadAnalytics;
                _closure2_slot29 = var49;
                var18 = var10.handleLoadStartAnalytics;
                _closure2_slot30 = var18;
                var26 = var10.handlePausePlaybackAnalytics;
                _closure2_slot31 = var26;
                var41 = var10.handleProgressAnalytics;
                _closure2_slot32 = var41;
                var35 = var10.handleReadyForDisplayAnalytics;
                _closure2_slot33 = var35;
                var12 = var10.handleResumePlaybackAnalytics;
                _closure2_slot34 = var12;
                var27 = var10.handleSeekAnalytics;
                _closure2_slot35 = var27;
                var10 = var43.useRef;
                var10 = var10.bind(var43)(var0);
                _closure2_slot36 = var10;
                var58 = var38.id;
                _closure2_slot37 = var58;
                var10 = var38.config;
                var10 = var10.messages;
                var57 = var10.gameTitle;
                _closure2_slot38 = var57;
                var10 = var0 == var31;
                var55 = undefined;
                if (var10) {
                    _fun82951_ip = 1496;
                    continue _fun82951
                }
            case 1491:
                var55 = var31.url;
            case 1496:
                if (!(var0 == var55)) {
                    _fun82951_ip = 1517;
                    continue _fun82951
                }
            case 1500:
                var43 = var0 == var5;
                var10 = undefined;
                if (var43) {
                    _fun82951_ip = 1514;
                    continue _fun82951
                }
            case 1509:
                var10 = var5.url;
            case 1514:
                var55 = var10;
            case 1517:
                _closure2_slot39 = var55;
                var43 = _closure1_slot0;
                var46 = _closure1_slot2;
                var10 = 22;
                var10 = var46[var10];
                var46 = var43.bind(var4)(var10);
                var43 = var46.getDefaultWatchVideoTask;
                var10 = var38.config;
                var10 = var43.bind(var46)(var10);
                var43 = var0 == var10;
                var51 = undefined;
                if (var43) {
                    _fun82951_ip = 1578;
                    continue _fun82951
                }
            case 1566:
                var10 = var10.messages;
                var51 = var10.videoTitle;
            case 1578:
                _closure2_slot40 = var51;
                var43 = var0 == var31;
                var10 = undefined;
                if (var43) {
                    _fun82951_ip = 1596;
                    continue _fun82951
                }
            case 1591:
                var10 = var31.url;
            case 1596:
                var43 = var0 != var10;
                var10 = 'mp4';
                if (!var43) {
                    _fun82951_ip = 1615;
                    continue _fun82951
                }
            case 1609:
                var10 = 'hls';
            case 1615:
                _closure2_slot41 = var10;
                var46 = _closure1_slot4;
                var48 = var46.useEffect;
                var43 = new Array(6);
                var43[0] = var58;
                var43[1] = var57;
                var43[2] = var56;
                var43[3] = var55;
                var43[4] = var51;
                var43[5] = var10;
                var10 = function() { // Environment: var1
                    _fun82962: for (var _fun82962_ip = 0;;) switch (_fun82962_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun82962_ip = 102;
                                continue _fun82962
                            }
                        case 18:
                            var1 = _closure2_slot39;
                            if (!(var2 != var1)) {
                                _fun82962_ip = 102;
                                continue _fun82962
                            }
                        case 26:
                            var1 = _closure2_slot39;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun82962_ip = 102;
                                continue _fun82962
                            }
                        case 41:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var6 = 23;
                            var2 = var2[var6];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.getVideoQoEMetricsConfig;
                            var2 = {};
                            var7 = _closure1_slot10;
                            var7 = var7.VIDEO_MODAL_MOBILE;
                            var2.location = var7;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.externalAnalyticsEnabled;
                            if (var2) {
                                _fun82962_ip = 106;
                                continue _fun82962
                            }
                        case 102:
                            var2 = undefined;
                            return var2;
                        case 106:
                            var4 = {};
                            var2 = _closure2_slot5;
                            var2 = var2.current;
                            var4.videoRef = var2;
                            var3 = 'quests';
                            var4.feature = var3;
                            var2 = {};
                            var7 = _closure2_slot39;
                            var2.contentId = var7;
                            var7 = _closure2_slot41;
                            var2.videoStreamType = var7;
                            var2.contentType = var3;
                            var7 = _closure2_slot13;
                            var3 = 1000;
                            var3 = var3 * var7;
                            var2.durationMs = var3;
                            var3 = _closure2_slot40;
                            var2.title = var3;
                            var3 = _closure2_slot37;
                            var2.questId = var3;
                            var3 = _closure2_slot38;
                            var2.gameName = var3;
                            var4.contentMetadata = var2;
                            var2 = _closure2_slot36;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var3.bind(var5)(var1);
                            var1 = var1.MobileMuxWrapper;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var9 = var3;
                            var8 = var4;
                            var1 = new var9[var1](var8, var7);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var2.current = var1;
                            var0 = _closure2_slot36;
                            var1 = var0.current;
                            var0 = var1.initialize;
                            var0 = var0.bind(var1)();
                            var0 = function() { // Environment: var0
                                _fun82963: for (var _fun82963_ip = 0;;) switch (_fun82963_ip) {
                                    case 0:
                                        var1 = _closure2_slot36;
                                        var2 = var1.current;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun82963_ip = 76;
                                            continue _fun82963
                                        }
                                    case 18:
                                        var2 = _closure2_slot36;
                                        var4 = var2.current;
                                        var3 = var4.onProgress;
                                        var2 = _closure2_slot20;
                                        var2 = var2.current;
                                        var2 = var3.bind(var4)(var2);
                                        var2 = _closure2_slot36;
                                        var3 = var2.current;
                                        var2 = var3.destroy;
                                        var2 = var2.bind(var3)();
                                        var0 = _closure2_slot36;
                                        var0.current = var1;
                                    case 76:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var10 = var48.bind(var46)(var10, var43);
                var10 = var46.useState;
                var43 = var10.bind(var46)(var9);
                var10 = _closure1_slot3;
                var43 = var10.bind(var4)(var43, var20);
                var10 = var43[var30];
                var43 = var43[var3];
                _closure2_slot42 = var43;
                var48 = var46.useCallback;
                var43 = new Array(1);
                var43[0] = var35;
                var35 = function() { // Environment: var1
                    _fun82964: for (var _fun82964_ip = 0;;) switch (_fun82964_ip) {
                        case 0:
                            var2 = _closure2_slot33;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var2 = _closure2_slot36;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun82964_ip = 38;
                                continue _fun82964
                            }
                        case 28:
                            var2 = var3.onReadyForDisplay;
                            var2 = var2.bind(var3)();
                        case 38:
                            var2 = _closure2_slot42;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var43 = var48.bind(var46)(var35, var43);
                var48 = var46.useCallback;
                var35 = new Array(4);
                var35[0] = var53;
                var51 = var21.timestampSec;
                var35[1] = var51;
                var35[2] = var49;
                var35[3] = var29;
                var29 = function(arg0) { // Environment: var1
                    _fun82965: for (var _fun82965_ip = 0;;) switch (_fun82965_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = var2.duration;
                            var8 = var2.videoTracks;
                            var7 = var2.trackId;
                            var3 = var2.naturalSize;
                            var4 = _closure2_slot12;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var6);
                            var5 = _closure2_slot19;
                            var4 = true;
                            var4 = var5.bind(var0)(var4);
                            var4 = _closure2_slot29;
                            var4 = var4.bind(var0)();
                            var4 = _closure2_slot36;
                            var9 = var4.current;
                            var4 = null;
                            if (!(var4 != var9)) {
                                _fun82965_ip = 85;
                                continue _fun82965
                            }
                        case 74:
                            var5 = var9.onLoad;
                            var5 = var5.bind(var9)(var6);
                        case 85:
                            if (!(var4 != var3)) {
                                _fun82965_ip = 124;
                                continue _fun82965
                            }
                        case 89:
                            var5 = _closure2_slot36;
                            var10 = var5.current;
                            if (!(var4 != var10)) {
                                _fun82965_ip = 124;
                                continue _fun82965
                            }
                        case 102:
                            var9 = var10.updateVideoSourceDimensions;
                            var5 = var3.width;
                            var3 = var3.height;
                            var3 = var9.bind(var10)(var5, var3);
                        case 124:
                            var3 = var4 != var8;
                            if (!var3) {
                                _fun82965_ip = 142;
                                continue _fun82965
                            }
                        case 131:
                            var9 = var8.length;
                            var5 = 0;
                            var3 = var9 > var5;
                        case 142:
                            if (!var3) {
                                _fun82965_ip = 149;
                                continue _fun82965
                            }
                        case 145:
                            var3 = var4 != var7;
                        case 149:
                            if (!var3) {
                                _fun82965_ip = 163;
                                continue _fun82965
                            }
                        case 152:
                            var9 = var7.length;
                            var5 = 0;
                            var3 = var9 > var5;
                        case 163:
                            if (!var3) {
                                _fun82965_ip = 191;
                                continue _fun82965
                            }
                        case 166:
                            var3 = _closure2_slot36;
                            var5 = var3.current;
                            if (!(var4 != var5)) {
                                _fun82965_ip = 191;
                                continue _fun82965
                            }
                        case 179:
                            var3 = var5.onVideoTrackChange;
                            var3 = var3.bind(var5)(var7, var8);
                        case 191:
                            var3 = _closure2_slot5;
                            var3 = var3.current;
                            if (!(var4 != var3)) {
                                _fun82965_ip = 314;
                                continue _fun82965
                            }
                        case 204:
                            var3 = _closure2_slot15;
                            var7 = var3.timestampSec;
                            var5 = _closure2_slot8;
                            var3 = !var5;
                            if (var5) {
                                _fun82965_ip = 231;
                                continue _fun82965
                            }
                        case 224:
                            var5 = 5;
                            var3 = var7 > var5;
                        case 231:
                            if (!var3) {
                                _fun82965_ip = 245;
                                continue _fun82965
                            }
                        case 234:
                            var5 = 3;
                            var5 = var6 - var5;
                            var3 = var7 < var5;
                        case 245:
                            if (!var3) {
                                _fun82965_ip = 275;
                                continue _fun82965
                            }
                        case 248:
                            var3 = _closure2_slot5;
                            var6 = var3.current;
                            var5 = var6.seek;
                            var3 = 1;
                            var3 = var7 - var3;
                            var3 = var5.bind(var6)(var3);
                        case 275:
                            var5 = _closure2_slot17;
                            var3 = _closure1_slot21;
                            var3 = var3.PLAYING;
                            var3 = var5.bind(var0)(var3);
                            var3 = _closure2_slot0;
                            if (!(var4 != var3)) {
                                _fun82965_ip = 314;
                                continue _fun82965
                            }
                        case 305:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)(var2);
                        case 314:
                            return var0;
                    }
                };
                var49 = var48.bind(var46)(var29, var35);
                var35 = var46.useCallback;
                var29 = new Array(4);
                var29[0] = var34;
                var29[1] = var26;
                var29[2] = var12;
                var29[3] = var33;
                var12 = function() { // Environment: var1
                    _fun82966: for (var _fun82966_ip = 0;;) switch (_fun82966_ip) {
                        case 0:
                            var1 = arguments[0];
                            var0 = undefined;
                            if (!(var1 === var0)) {
                                _fun82966_ip = 11;
                                continue _fun82966
                            }
                        case 9:
                            var1 = {};
                        case 11:
                            var1 = var1.shouldRestartVideo;
                            if (!(var1 === var0)) {
                                _fun82966_ip = 23;
                                continue _fun82966
                            }
                        case 21:
                            var1 = true;
                        case 23:
                            var5 = _closure2_slot16;
                            var4 = _closure1_slot21;
                            var4 = var4.ERRORED;
                            if (!(var5 !== var4)) {
                                _fun82966_ip = 234;
                                continue _fun82966
                            }
                        case 50:
                            var4 = _closure2_slot21;
                            if (!var4) {
                                _fun82966_ip = 63;
                                continue _fun82966
                            }
                        case 57:
                            if (var1) {
                                _fun82966_ip = 234;
                                continue _fun82966
                            }
                        case 63:
                            var4 = _closure2_slot16;
                            var1 = _closure1_slot21;
                            var1 = var1.PAUSED;
                            if (!(var4 !== var1)) {
                                _fun82966_ip = 180;
                                continue _fun82966
                            }
                        case 81:
                            var4 = _closure2_slot16;
                            var1 = _closure1_slot21;
                            var1 = var1.LOADING;
                            if (!(var4 !== var1)) {
                                _fun82966_ip = 180;
                                continue _fun82966
                            }
                        case 99:
                            var4 = _closure2_slot16;
                            var1 = _closure1_slot21;
                            var1 = var1.PLAYING;
                            if (!(var4 === var1)) {
                                _fun82966_ip = 312;
                                continue _fun82966
                            }
                        case 120:
                            var4 = _closure2_slot17;
                            var1 = _closure1_slot21;
                            var1 = var1.PAUSED;
                            var1 = var4.bind(var0)(var1);
                            var1 = _closure2_slot31;
                            var1 = var1.bind(var0)();
                            var1 = _closure2_slot36;
                            var4 = var1.current;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun82966_ip = 312;
                                continue _fun82966
                            }
                        case 165:
                            var1 = var4.onPause;
                            var1 = var1.bind(var4)();
                            _fun82966_ip = 312;
                            continue _fun82966;
                        case 180:
                            var4 = _closure2_slot17;
                            var1 = _closure1_slot21;
                            var1 = var1.PLAYING;
                            var1 = var4.bind(var0)(var1);
                            var1 = _closure2_slot34;
                            var1 = var1.bind(var0)();
                            var1 = _closure2_slot36;
                            var4 = var1.current;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun82966_ip = 312;
                                continue _fun82966
                            }
                        case 222:
                            var1 = var4.onPlay;
                            var1 = var1.bind(var4)();
                            _fun82966_ip = 312;
                            continue _fun82966;
                        case 234:
                            var1 = _closure2_slot5;
                            var6 = var1.current;
                            var1 = null;
                            if (!(var1 != var6)) {
                                _fun82966_ip = 262;
                                continue _fun82966
                            }
                        case 249:
                            var5 = var6.seek;
                            var4 = 0;
                            var4 = var5.bind(var6)(var4);
                        case 262:
                            var4 = _closure2_slot17;
                            var3 = _closure1_slot21;
                            var3 = var3.PLAYING;
                            var3 = var4.bind(var0)(var3);
                            var3 = _closure2_slot34;
                            var3 = var3.bind(var0)();
                            var2 = _closure2_slot36;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun82966_ip = 312;
                                continue _fun82966
                            }
                        case 302:
                            var1 = var2.onPlay;
                            var1 = var1.bind(var2)();
                        case 312:
                            return var0;
                    }
                };
                var12 = var35.bind(var46)(var12, var29);
                _closure2_slot43 = var12;
                var48 = var46.useCallback;
                var35 = new Array(1);
                var35[0] = var12;
                var29 = function() { // Environment: var1
                    var1 = _closure2_slot43;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var35 = var48.bind(var46)(var29, var35);
                var48 = var46.useCallback;
                var29 = new Array(2);
                var29[0] = var34;
                var29[1] = var26;
                var26 = function() { // Environment: var1
                    _fun82968: for (var _fun82968_ip = 0;;) switch (_fun82968_ip) {
                        case 0:
                            var3 = _closure2_slot16;
                            var2 = _closure1_slot21;
                            var2 = var2.PLAYING;
                            if (!(var3 === var2)) {
                                _fun82968_ip = 78;
                                continue _fun82968
                            }
                        case 24:
                            var3 = _closure2_slot17;
                            var1 = _closure1_slot21;
                            var1 = var1.PAUSED;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var1 = _closure2_slot31;
                            var1 = var1.bind(var2)();
                            var0 = _closure2_slot36;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun82968_ip = 78;
                                continue _fun82968
                            }
                        case 68:
                            var0 = var1.onPause;
                            var0 = var0.bind(var1)();
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26 = var48.bind(var46)(var26, var29);
                _closure2_slot44 = var26;
                var48 = var46.useEffect;
                var29 = new Array(1);
                var29[0] = var26;
                var26 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 24;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.ComponentDispatch;
                    var2 = var3.subscribe;
                    var0 = _closure1_slot12;
                    var1 = var0.QUEST_GAME_LINK_OPENED;
                    var0 = _closure2_slot44;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 24;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.ComponentDispatch;
                        var3 = var4.unsubscribe;
                        var1 = _closure1_slot12;
                        var2 = var1.QUEST_GAME_LINK_OPENED;
                        var1 = _closure2_slot44;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var26 = var48.bind(var46)(var26, var29);
                var29 = var46.useCallback;
                var26 = new Array(2);
                var26[0] = var24;
                var26[1] = var14;
                var24 = function() { // Environment: var1
                    _fun82971: for (var _fun82971_ip = 0;;) switch (_fun82971_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun82971_ip = 35;
                                continue _fun82971
                            }
                        case 13:
                            var2 = _closure2_slot2;
                            var1 = {};
                            var0 = _closure2_slot3;
                            var1.orientation = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 35:
                            var0 = undefined;
                            return var0;
                    }
                };
                var24 = var29.bind(var46)(var24, var26);
                var29 = var46.useCallback;
                var26 = new Array(2);
                var26[0] = var32;
                var26[1] = var12;
                var12 = function() { // Environment: var1
                    _fun82972: for (var _fun82972_ip = 0;;) switch (_fun82972_ip) {
                        case 0:
                            var2 = _closure2_slot22;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun82972_ip = 35;
                                continue _fun82972
                            }
                        case 19:
                            var3 = _closure2_slot22;
                            var2 = var3.set;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
                        case 35:
                            var2 = _closure2_slot43;
                            var1 = {};
                            var0 = false;
                            var1.shouldRestartVideo = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var12 = var29.bind(var46)(var12, var26);
                var32 = var46.useCallback;
                var29 = new Array(3);
                var29[0] = var45;
                var29[1] = var54;
                var26 = var21.maxTimestampSec;
                var29[2] = var26;
                var26 = function(arg0) { // Environment: var1
                    _fun82973: for (var _fun82973_ip = 0;;) switch (_fun82973_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun82973_ip = 171;
                                continue _fun82973
                            }
                        case 21:
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.max;
                            var6 = var1.Math;
                            var5 = var6.min;
                            var1 = _closure2_slot15;
                            var2 = var1.maxTimestampSec;
                            var1 = arg0;
                            var2 = var5.bind(var6)(var1, var2);
                            var1 = 0;
                            var2 = var3.bind(var4)(var1, var2);
                            var3 = _closure2_slot24;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = _closure2_slot11;
                            var4 = var3 * var1;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 25;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var1 = var3.isAndroid;
                            var1 = var1.bind(var3)();
                            if (!var1) {
                                _fun82973_ip = 151;
                                continue _fun82973
                            }
                        case 131:
                            var1 = _closure2_slot5;
                            var3 = var1.current;
                            var1 = var3.seek;
                            var1 = var1.bind(var3)(var4);
                        case 151:
                            var0 = _closure2_slot5;
                            var1 = var0.current;
                            var0 = var1.seek;
                            var0 = var0.bind(var1)(var2);
                        case 171:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26 = var32.bind(var46)(var26, var29);
                _closure2_slot45 = var26;
                var32 = var46.useCallback;
                var29 = new Array(5);
                var29[0] = var45;
                var29[1] = var54;
                var29[2] = var27;
                var27 = var38.id;
                var29[3] = var27;
                var29[4] = var47;
                var27 = function(arg0) { // Environment: var1
                    _fun82974: for (var _fun82974_ip = 0;;) switch (_fun82974_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot5;
                            var3 = var0.current;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun82974_ip = 173;
                                continue _fun82974
                            }
                        case 24:
                            var4 = _closure2_slot20;
                            var3 = var2.currentTime;
                            var4.current = var3;
                            var4 = _closure2_slot11;
                            var3 = 0;
                            if (!(var4 > var3)) {
                                _fun82974_ip = 110;
                                continue _fun82974
                            }
                        case 50:
                            var5 = _closure2_slot24;
                            var4 = var5.set;
                            var6 = var2.currentTime;
                            var3 = _closure2_slot11;
                            var3 = var6 / var3;
                            var3 = var4.bind(var5)(var3);
                            var7 = _closure2_slot14;
                            var3 = _closure2_slot6;
                            var6 = var3.id;
                            var5 = var2.currentTime;
                            var4 = _closure2_slot11;
                            var3 = undefined;
                            var3 = var7.bind(var3)(var6, var5, var4);
                        case 110:
                            var4 = _closure2_slot35;
                            var3 = undefined;
                            var3 = var4.bind(var3)();
                            var3 = _closure2_slot36;
                            var4 = var3.current;
                            if (!(var0 != var4)) {
                                _fun82974_ip = 150;
                                continue _fun82974
                            }
                        case 133:
                            var3 = var4.updatePlayheadTime;
                            var2 = var2.currentTime;
                            var2 = var3.bind(var4)(var2);
                        case 150:
                            var1 = _closure2_slot36;
                            var1 = var1.current;
                            if (!(var0 != var1)) {
                                _fun82974_ip = 173;
                                continue _fun82974
                            }
                        case 163:
                            var0 = var1.onSeek;
                            var0 = var0.bind(var1)();
                        case 173:
                            var0 = undefined;
                            return var0;
                    }
                };
                var48 = var32.bind(var46)(var27, var29);
                var27 = _closure1_slot21;
                var27 = var27.ERRORED;
                var32 = var34 === var27;
                if (var32) {
                    _fun82951_ip = 2100;
                    continue _fun82951
                }
            case 2067:
                var51 = _closure1_slot19;
                var62 = var21.timestampSec;
                var61 = var21.maxTimestampSec;
                var60 = var21.duration;
                var63 = undefined;
                var59 = var53;
                var27 = var63[var51](var62, var61, var60, var59, var58);
                var32 = !var27;
            case 2100:
                _closure2_slot46 = var32;
                var27 = _closure1_slot4;
                var51 = var27.useCallback;
                var46 = new Array(4);
                var46[0] = var26;
                var46[1] = var45;
                var46[2] = var54;
                var46[3] = var32;
                var29 = function() { // Environment: var1
                    _fun82975: for (var _fun82975_ip = 0;;) switch (_fun82975_ip) {
                        case 0:
                            var1 = _closure2_slot46;
                            if (var1) {
                                _fun82975_ip = 49;
                                continue _fun82975
                            }
                        case 10:
                            var2 = _closure2_slot24;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = _closure2_slot11;
                            var1 = var2 * var1;
                            var2 = _closure2_slot45;
                            var0 = 10;
                            var1 = var1 + var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 49:
                            var0 = undefined;
                            return var0;
                    }
                };
                var29 = var51.bind(var27)(var29, var46);
                var51 = var27.useCallback;
                var46 = new Array(4);
                var46[0] = var26;
                var46[1] = var45;
                var46[2] = var54;
                var46[3] = var34;
                var26 = function() { // Environment: var1
                    _fun82976: for (var _fun82976_ip = 0;;) switch (_fun82976_ip) {
                        case 0:
                            var1 = _closure2_slot24;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = _closure2_slot11;
                            var1 = var1 * var0;
                            var3 = _closure2_slot45;
                            var0 = 10;
                            var1 = var1 - var0;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var4 = _closure2_slot16;
                            var3 = _closure1_slot21;
                            var3 = var3.ENDED;
                            if (!(var4 === var3)) {
                                _fun82976_ip = 82;
                                continue _fun82976
                            }
                        case 63:
                            var2 = _closure2_slot17;
                            var1 = _closure1_slot21;
                            var1 = var1.PLAYING;
                            var1 = var2.bind(var0)(var1);
                        case 82:
                            return var0;
                    }
                };
                var26 = var51.bind(var27)(var26, var46);
                var26 = var42.bind(var4)(var26);
                var29 = var42.bind(var4)(var29);
                var42 = var27.useRef;
                var53 = var42.bind(var27)(var30);
                _closure2_slot47 = var53;
                var42 = var27.useRef;
                var51 = var42.bind(var27)(var30);
                _closure2_slot48 = var51;
                var46 = var27.useCallback;
                var42 = new Array(7);
                var42[0] = var54;
                var42[1] = var38;
                var42[2] = var53;
                var42[3] = var51;
                var50 = var50.taskType;
                var42[4] = var50;
                var42[5] = var47;
                var42[6] = var41;
                var41 = function(arg0) { // Environment: var1
                    _fun82977: for (var _fun82977_ip = 0;;) switch (_fun82977_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.seekableDuration;
                            var5 = 0;
                            if (!(var5 !== var0)) {
                                _fun82977_ip = 31;
                                continue _fun82977
                            }
                        case 15:
                            var2 = var1.currentTime;
                            var0 = var1.seekableDuration;
                            var5 = var2 / var0;
                        case 31:
                            var3 = _closure2_slot20;
                            var0 = var1.currentTime;
                            var3.current = var0;
                            var3 = var1.currentTime;
                            var0 = _closure2_slot47;
                            var0 = var0.current;
                            if (!(var3 >= var0)) {
                                _fun82977_ip = 194;
                                continue _fun82977
                            }
                        case 72:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 26;
                            var0 = var4[var0];
                            var6 = undefined;
                            var7 = var3.bind(var6)(var0);
                            var4 = var7.sendVideoProgress;
                            var3 = _closure2_slot6;
                            var0 = var1.currentTime;
                            var0 = var4.bind(var7)(var3, var0);
                            var4 = _closure2_slot32;
                            var3 = var1.seekableDuration;
                            var0 = var1.currentTime;
                            var0 = var4.bind(var6)(var5, var3, var0);
                            var3 = _closure2_slot47;
                            var4 = var1.currentTime;
                            var0 = 6;
                            var4 = var4 + var0;
                            var0 = global;
                            var6 = var0.Math;
                            var0 = var6.random;
                            var6 = var0.bind(var6)();
                            var0 = 2;
                            var0 = var0 * var6;
                            var0 = var4 + var0;
                            var3.current = var0;
                        case 194:
                            var3 = var1.currentTime;
                            var0 = _closure2_slot48;
                            var0 = var0.current;
                            if (!(var3 >= var0)) {
                                _fun82977_ip = 299;
                                continue _fun82977
                            }
                        case 213:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 27;
                            var3 = var3[var0];
                            var0 = undefined;
                            var7 = var4.bind(var0)(var3);
                            var6 = var7.updateOptimisticProgress;
                            var0 = _closure2_slot6;
                            var4 = var0.id;
                            var0 = _closure2_slot7;
                            var3 = var0.taskType;
                            var0 = var1.currentTime;
                            var0 = var6.bind(var7)(var4, var3, var0);
                            var3 = _closure2_slot48;
                            var4 = var1.currentTime;
                            var0 = 1;
                            var0 = var4 + var0;
                            var3.current = var0;
                        case 299:
                            var7 = _closure2_slot14;
                            var0 = _closure2_slot6;
                            var6 = var0.id;
                            var4 = var1.currentTime;
                            var3 = var1.seekableDuration;
                            var0 = undefined;
                            var3 = var7.bind(var0)(var6, var4, var3);
                            var4 = _closure2_slot24;
                            var3 = var4.set;
                            var3 = var3.bind(var4)(var5);
                            var2 = _closure2_slot36;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun82977_ip = 379;
                                continue _fun82977
                            }
                        case 362:
                            var2 = var3.onProgress;
                            var1 = var1.currentTime;
                            var1 = var2.bind(var3)(var1);
                        case 379:
                            return var0;
                    }
                };
                var47 = var46.bind(var27)(var41, var42);
                var42 = var27.useCallback;
                var41 = new Array(4);
                var41[0] = var45;
                var41[1] = var38;
                var41[2] = var44;
                var41[3] = var23;
                var23 = function() { // Environment: var1
                    _fun82978: for (var _fun82978_ip = 0;;) switch (_fun82978_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 26;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var1);
                            var5 = var6.sendVideoProgress;
                            var4 = _closure2_slot6;
                            var3 = _closure2_slot11;
                            var3 = var5.bind(var6)(var4, var3);
                            var3 = _closure2_slot27;
                            var3 = var3.bind(var0)();
                            var3 = _closure2_slot17;
                            var2 = _closure1_slot21;
                            var2 = var2.ENDED;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot36;
                            var5 = var2.current;
                            var3 = null;
                            if (!(var3 != var5)) {
                                _fun82978_ip = 105;
                                continue _fun82978
                            }
                        case 90:
                            var4 = var5.onProgress;
                            var2 = _closure2_slot11;
                            var2 = var4.bind(var5)(var2);
                        case 105:
                            var2 = _closure2_slot36;
                            var4 = var2.current;
                            if (!(var3 != var4)) {
                                _fun82978_ip = 128;
                                continue _fun82978
                            }
                        case 118:
                            var2 = var4.onEnd;
                            var2 = var2.bind(var4)();
                        case 128:
                            var2 = _closure2_slot1;
                            if (!(var3 != var2)) {
                                _fun82978_ip = 144;
                                continue _fun82978
                            }
                        case 136:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 144:
                            return var0;
                    }
                };
                var45 = var42.bind(var27)(var23, var41);
                var41 = var27.useCallback;
                var23 = new Array(1);
                var23[0] = var18;
                var18 = function() { // Environment: var1
                    _fun82979: for (var _fun82979_ip = 0;;) switch (_fun82979_ip) {
                        case 0:
                            var3 = _closure2_slot17;
                            var0 = _closure1_slot21;
                            var1 = var0.LOADING;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = _closure2_slot30;
                            var1 = var1.bind(var0)();
                            var1 = _closure2_slot36;
                            var4 = var1.current;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun82979_ip = 60;
                                continue _fun82979
                            }
                        case 50:
                            var3 = var4.onLoadStart;
                            var3 = var3.bind(var4)();
                        case 60:
                            var2 = _closure2_slot36;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun82979_ip = 83;
                                continue _fun82979
                            }
                        case 73:
                            var1 = var2.onPlay;
                            var1 = var1.bind(var2)();
                        case 83:
                            return var0;
                    }
                };
                var46 = var41.bind(var27)(var18, var23);
                var23 = var27.useCallback;
                var18 = new Array(1);
                var18[0] = var11;
                var11 = function(arg0) { // Environment: var1
                    _fun82980: for (var _fun82980_ip = 0;;) switch (_fun82980_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure2_slot17;
                            var0 = _closure1_slot21;
                            var2 = var0.ERRORED;
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var2 = _closure2_slot28;
                            var2 = var2.bind(var0)(var3);
                            var1 = _closure2_slot36;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun82980_ip = 65;
                                continue _fun82980
                            }
                        case 54:
                            var1 = var2.onError;
                            var1 = var1.bind(var2)(var3);
                        case 65:
                            return var0;
                    }
                };
                var44 = var23.bind(var27)(var11, var18);
                var23 = var27.useCallback;
                var18 = function(arg0) { // Environment: var1
                    _fun82981: for (var _fun82981_ip = 0;;) switch (_fun82981_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = null;
                            var2 = var1 != var0;
                            if (!var2) {
                                _fun82981_ip = 22;
                                continue _fun82981
                            }
                        case 12:
                            var3 = var0.videoTracks;
                            var2 = var1 != var3;
                        case 22:
                            if (!var2) {
                                _fun82981_ip = 42;
                                continue _fun82981
                            }
                        case 25:
                            var3 = var0.videoTracks;
                            var4 = var3.length;
                            var3 = 0;
                            var2 = var4 > var3;
                        case 42:
                            if (!var2) {
                                _fun82981_ip = 55;
                                continue _fun82981
                            }
                        case 45:
                            var3 = var0.selectedVideoTrackId;
                            var2 = var1 != var3;
                        case 55:
                            if (!var2) {
                                _fun82981_ip = 75;
                                continue _fun82981
                            }
                        case 58:
                            var3 = var0.selectedVideoTrackId;
                            var4 = var3.length;
                            var3 = 0;
                            var2 = var4 > var3;
                        case 75:
                            if (!var2) {
                                _fun82981_ip = 118;
                                continue _fun82981
                            }
                        case 78:
                            var2 = _closure2_slot36;
                            var3 = var2.current;
                            if (!(var1 != var3)) {
                                _fun82981_ip = 118;
                                continue _fun82981
                            }
                        case 94:
                            var2 = var3.onVideoTrackChange;
                            var1 = var0.selectedVideoTrackId;
                            var0 = var0.videoTracks;
                            var0 = var2.bind(var3)(var1, var0);
                        case 118:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = new Array(0);
                var42 = var23.bind(var27)(var18, var11);
                var23 = var27.useCallback;
                var18 = function(arg0) { // Environment: var1
                    _fun82982: for (var _fun82982_ip = 0;;) switch (_fun82982_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = null;
                            var4 = var1 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun82982_ip = 37;
                                continue _fun82982
                            }
                        case 16:
                            var4 = var2.nativeEvent;
                            var5 = var1 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun82982_ip = 37;
                                continue _fun82982
                            }
                        case 31:
                            var3 = var4.layout;
                        case 37:
                            if (!(var1 != var3)) {
                                _fun82982_ip = 101;
                                continue _fun82982
                            }
                        case 41:
                            var2 = var2.nativeEvent;
                            var2 = var2.layout;
                            var4 = var2.width;
                            var3 = var2.height;
                            var2 = 0;
                            if (!(var4 > var2)) {
                                _fun82982_ip = 101;
                                continue _fun82982
                            }
                        case 69:
                            if (!(var3 > var2)) {
                                _fun82982_ip = 101;
                                continue _fun82982
                            }
                        case 73:
                            var2 = _closure2_slot36;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun82982_ip = 101;
                                continue _fun82982
                            }
                        case 89:
                            var1 = var2.updateVideoDimensions;
                            var1 = var1.bind(var2)(var4, var3);
                        case 101:
                            return var0;
                    }
                };
                var11 = new Array(0);
                var41 = var23.bind(var27)(var18, var11);
                var18 = _closure1_slot0;
                var23 = _closure1_slot2;
                var11 = 28;
                var11 = var23[var11];
                var50 = var18.bind(var4)(var11);
                var23 = var50.useStateFromStores;
                var11 = _closure1_slot8;
                var18 = new Array(1);
                var18[0] = var11;
                var11 = function() { // Environment: var1
                    var1 = _closure1_slot8;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var18 = var23.bind(var50)(var18, var11);
                var11 = _closure1_slot11;
                var11 = var11.ACTIVE;
                var18 = var18 === var11;
                var23 = var27.useMemo;
                var11 = new Array(2);
                var11[0] = var31;
                var11[1] = var5;
                var5 = function() { // Environment: var1
                    _fun82984: for (var _fun82984_ip = 0;;) switch (_fun82984_ip) {
                        case 0:
                            var0 = _closure2_slot9;
                            var4 = null;
                            var1 = var4 == var0;
                            var0 = null;
                            if (var1) {
                                _fun82984_ip = 62;
                                continue _fun82984
                            }
                        case 18:
                            var1 = {};
                            var2 = _closure2_slot10;
                            var5 = var4 == var2;
                            var2 = undefined;
                            if (var5) {
                                _fun82984_ip = 42;
                                continue _fun82984
                            }
                        case 33:
                            var5 = _closure2_slot10;
                            var2 = var5.url;
                        case 42:
                            if (!(var4 == var2)) {
                                _fun82984_ip = 55;
                                continue _fun82984
                            }
                        case 46:
                            var3 = _closure2_slot9;
                            var2 = var3.url;
                        case 55:
                            var1.uri = var2;
                            var0 = var1;
                        case 62:
                            return var0;
                    }
                };
                var51 = var23.bind(var27)(var5, var11);
                var23 = var27.useLayoutEffect;
                var11 = function() { // Environment: var1
                    _fun82985: for (var _fun82985_ip = 0;;) switch (_fun82985_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 25;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun82985_ip = 42;
                                continue _fun82985
                            }
                        case 40:
                            return var1;
                        case 42:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                _fun82986: for (var _fun82986_ip = 0;;) switch (_fun82986_ip) {
                                    case 0: // try_start_0
                                        var2 = _closure3_slot0;
                                        var4 = null;
                                        var2 = var4 == var2;
                                        var1 = var2;
                                        if (var2) {
                                            _fun82986_ip = 33;
                                            continue _fun82986
                                        }
                                    case 19:
                                        var2 = _closure3_slot0;
                                        var2 = var2.setNativeProps;
                                        var1 = var4 == var2;
                                    case 33:
                                        if (var1) {
                                            _fun82986_ip = 71;
                                            continue _fun82986
                                        }
                                    case 36:
                                        var2 = _closure3_slot0;
                                        var1 = var2.setNativeProps;
                                        var0 = {};
                                        var3 = true;
                                        var0.paused = var3;
                                        var3 = {};
                                        var3.uri = var4;
                                        var0.src = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 71: // try_end0
                                        _fun82986_ip = 111;
                                        continue _fun82986;
                                    case 73: // catch_target0
                                        CatchBlockStart(arg_register = 2);
                                        var3 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 29;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var1);
                                        var0 = var1.captureException;
                                        var0 = var0.bind(var1)(var2);
                                    case 111:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var5 = new Array(0);
                var5 = var23.bind(var27)(var11, var5);
                var31 = !var18;
                if (!var18) {
                    _fun82951_ip = 2549;
                    continue _fun82951
                }
            case 2535:
                var5 = _closure1_slot21;
                var5 = var5.PAUSED;
                var31 = var34 === var5;
            case 2549:
                if (var31) {
                    _fun82951_ip = 2566;
                    continue _fun82951
                }
            case 2552:
                var5 = _closure1_slot21;
                var5 = var5.LOADING;
                var31 = var34 === var5;
            case 2566:
                if (var31) {
                    _fun82951_ip = 2572;
                    continue _fun82951
                }
            case 2569:
                var31 = var2;
            case 2572:
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var11 = var2.bind(var5)(var9);
                var2 = _closure1_slot3;
                var2 = var2.bind(var4)(var11, var20);
                var11 = var2[var30];
                var2 = var2[var3];
                _closure2_slot49 = var2;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function(arg0) { // Environment: var1
                    _fun82987: for (var _fun82987_ip = 0;;) switch (_fun82987_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot26;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var4 = _closure2_slot49;
                            var3 = var1.isBuffering;
                            var3 = var4.bind(var0)(var3);
                            var2 = _closure2_slot36;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun82987_ip = 64;
                                continue _fun82987
                            }
                        case 47:
                            var2 = var3.onBuffer;
                            var1 = var1.isBuffering;
                            var1 = var2.bind(var3)(var1);
                        case 64:
                            return var0;
                    }
                };
                var50 = var3.bind(var5)(var1, var2);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 30;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var5 = var1.bind(var4)();
                if (!(var0 != var51)) {
                    _fun82951_ip = 4848;
                    continue _fun82951
                }
            case 2665:
                var23 = var28;
                if (!var23) {
                    _fun82951_ip = 2675;
                    continue _fun82951
                }
            case 2671:
                var23 = var0 != var5;
            case 2675:
                if (!var23) {
                    _fun82951_ip = 2717;
                    continue _fun82951
                }
            case 2678:
                var1 = {};
                var3 = _closure1_slot25;
                var2 = 'right';
                var2 = var3.bind(var4)(var5, var2);
                var1.paddingRight = var2;
                var2 = 'left';
                var2 = var3.bind(var4)(var5, var2);
                var1.paddingLeft = var2;
                var23 = var1;
            case 2717:
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var7 = var15.container;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.style = var5;
                var1.accessible = var9;
                var7 = _closure1_slot14;
                var6 = _closure1_slot6;
                var5 = {};
                var27 = var15.videoContainer;
                var20 = new Array(1);
                var20[0] = var27;
                var5.style = var20;
                var5.onPress = var12;
                var8 = !var8;
                var5.accessible = var8;
                var53 = _closure1_slot0;
                var8 = _closure1_slot2;
                var27 = 31;
                var12 = var8[var27];
                var12 = var53.bind(var4)(var12);
                var20 = var12.intl;
                var12 = var20.string;
                var8 = var8[var27];
                var8 = var53.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.FlNoSV;
                var8 = var12.bind(var20)(var8);
                var5.accessibilityLabel = var8;
                var8 = _closure1_slot21;
                var8 = var8.ERRORED;
                var12 = var34 !== var8;
                if (!var12) {
                    _fun82951_ip = 2909;
                    continue _fun82951
                }
            case 2867:
                var20 = _closure1_slot0;
                var53 = _closure1_slot2;
                var8 = 25;
                var8 = var53[var8];
                var20 = var20.bind(var4)(var8);
                var8 = var20.isAndroid;
                var8 = var8.bind(var20)();
                var8 = !var8;
                if (var8) {
                    _fun82951_ip = 2906;
                    continue _fun82951
                }
            case 2903:
                var8 = var18;
            case 2906:
                var12 = var8;
            case 2909:
                if (!var12) {
                    _fun82951_ip = 3025;
                    continue _fun82951
                }
            case 2912:
                var20 = _closure1_slot13;
                var18 = _closure1_slot16;
                var8 = {
                    'mixWithOthers': 'mix',
                    'ref': null,
                    'accessible': false,
                    'importantForAccessibility': 'no-hide-descendants',
                    'accessibilityRole': 'none'
                };
                var8.ref = var52;
                var52 = var15.video;
                var8.style = var52;
                var8.paused = var31;
                var8.source = var51;
                var8.onBuffer = var50;
                var8.onLoad = var49;
                var8.onSeek = var48;
                var8.onProgress = var47;
                var8.onLoadStart = var46;
                var8.onEnd = var45;
                var8.onError = var44;
                var8.onReadyForDisplay = var43;
                var8.onVideoTracks = var42;
                var8.onLayout = var41;
                var41 = 'contain';
                var8.resizeMode = var41;
                var12 = var20.bind(var4)(var18, var8);
            case 3025:
                var8 = new Array(6);
                var8[0] = var12;
                var20 = _closure1_slot13;
                var18 = _closure1_slot0;
                var41 = _closure1_slot2;
                var12 = 32;
                var12 = var41[var12];
                var12 = var18.bind(var4)(var12);
                var18 = var12.VideoQuestCaptions;
                var12 = {};
                var12.quest = var38;
                var21 = var21.timestampSec;
                var12.currentTime = var21;
                var12.visible = var39;
                var21 = {};
                var38 = var0 == var40;
                var41 = undefined;
                if (var38) {
                    _fun82951_ip = 3102;
                    continue _fun82951
                }
            case 3097:
                var41 = var40.top;
            case 3102:
                var42 = var0 != var41;
                var38 = 0;
                if (!var42) {
                    _fun82951_ip = 3114;
                    continue _fun82951
                }
            case 3111:
                var38 = var41;
            case 3114:
                var21.top = var38;
                var38 = var0 == var40;
                var41 = undefined;
                if (var38) {
                    _fun82951_ip = 3132;
                    continue _fun82951
                }
            case 3127:
                var41 = var40.bottom;
            case 3132:
                var42 = var0 != var41;
                var38 = 0;
                if (!var42) {
                    _fun82951_ip = 3144;
                    continue _fun82951
                }
            case 3141:
                var38 = var41;
            case 3144:
                var21.bottom = var38;
                var38 = var0 == var40;
                var41 = undefined;
                if (var38) {
                    _fun82951_ip = 3162;
                    continue _fun82951
                }
            case 3157:
                var41 = var40.left;
            case 3162:
                var42 = var0 != var41;
                var38 = 0;
                if (!var42) {
                    _fun82951_ip = 3174;
                    continue _fun82951
                }
            case 3171:
                var38 = var41;
            case 3174:
                var21.left = var38;
                var38 = var0 == var40;
                var41 = undefined;
                if (var38) {
                    _fun82951_ip = 3192;
                    continue _fun82951
                }
            case 3187:
                var41 = var40.right;
            case 3192:
                var42 = var0 != var41;
                var38 = 0;
                if (!var42) {
                    _fun82951_ip = 3204;
                    continue _fun82951
                }
            case 3201:
                var38 = var41;
            case 3204:
                var21.right = var38;
                var12.style = var21;
                var12 = var20.bind(var4)(var18, var12);
                var8[1] = var12;
                if (!var11) {
                    _fun82951_ip = 3389;
                    continue _fun82951
                }
            case 3228:
                var20 = _closure1_slot13;
                var18 = _closure1_slot7;
                var12 = {};
                var21 = true;
                var12.animating = var21;
                var38 = var15.bufferingSpinner;
                var21 = new Array(2);
                var21[0] = var38;
                if (var28) {
                    _fun82951_ip = 3334;
                    continue _fun82951
                }
            case 3262:
                var28 = 'landscape';
                if (!(var28 !== var14)) {
                    _fun82951_ip = 3334;
                    continue _fun82951
                }
            case 3270:
                var28 = {};
                var38 = var0 == var40;
                var41 = undefined;
                if (var38) {
                    _fun82951_ip = 3286;
                    continue _fun82951
                }
            case 3281:
                var41 = var40.top;
            case 3286:
                var42 = var0 != var41;
                var38 = 0;
                if (!var42) {
                    _fun82951_ip = 3298;
                    continue _fun82951
                }
            case 3295:
                var38 = var41;
            case 3298:
                var28.top = var38;
                var41 = var0 == var40;
                var38 = undefined;
                if (var41) {
                    _fun82951_ip = 3316;
                    continue _fun82951
                }
            case 3311:
                var38 = var40.left;
            case 3316:
                var40 = var0 != var38;
                var30 = 0;
                if (!var40) {
                    _fun82951_ip = 3328;
                    continue _fun82951
                }
            case 3325:
                var30 = var38;
            case 3328:
                var28.left = var30;
                _fun82951_ip = 3340;
                continue _fun82951;
            case 3334:
                var28 = var15.bufferingSpinnerCentered;
            case 3340:
                var21[1] = var28;
                var12.style = var21;
                var28 = _closure1_slot1;
                var30 = _closure1_slot2;
                var21 = 8;
                var21 = var30[var21];
                var21 = var28.bind(var4)(var21);
                var21 = var21.unsafe_rawColors;
                var21 = var21.WHITE;
                var12.color = var21;
                var11 = var20.bind(var4)(var18, var12);
            case 3389:
                var8[2] = var11;
                var10 = !var10;
                if (!var10) {
                    _fun82951_ip = 3448;
                    continue _fun82951
                }
            case 3399:
                var18 = _closure1_slot13;
                var12 = _closure1_slot5;
                var11 = {};
                var20 = var15.loadingContainer;
                var11.style = var20;
                var21 = _closure1_slot7;
                var20 = {};
                var28 = true;
                var20.animating = var28;
                var20 = var18.bind(var4)(var21, var20);
                var11.children = var20;
                var10 = var18.bind(var4)(var12, var11);
            case 3448:
                var8[3] = var10;
                var12 = _closure1_slot14;
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var10 = var10[var17];
                var10 = var11.bind(var4)(var10);
                var11 = var10.View;
                var10 = {};
                var20 = var15.controls;
                var18 = new Array(2);
                var18[0] = var20;
                var18[1] = var19;
                var10.style = var18;
                var10.accessible = var9;
                var9 = 'landscape';
                var9 = var9 === var14;
                var18 = var9;
                if (!var9) {
                    _fun82951_ip = 3920;
                    continue _fun82951
                }
            case 3523:
                var20 = _closure1_slot14;
                var19 = _closure1_slot5;
                var14 = {};
                var28 = var15.controlsTopBottom;
                var21 = new Array(3);
                var21[0] = var28;
                var28 = var15.controlsTop;
                var21[1] = var28;
                var21[2] = var23;
                var14.style = var21;
                if (!var25) {
                    _fun82951_ip = 3739;
                    continue _fun82951
                }
            case 3571:
                var30 = _closure1_slot13;
                var38 = _closure1_slot0;
                var40 = _closure1_slot2;
                var21 = 33;
                var21 = var40[var21];
                var21 = var38.bind(var4)(var21);
                var28 = var21.PressableOpacity;
                var21 = {};
                var41 = 'button';
                var21.accessibilityRole = var41;
                var41 = var40[var27];
                var41 = var38.bind(var4)(var41);
                var43 = var41.intl;
                var42 = var43.string;
                var41 = var40[var27];
                var41 = var38.bind(var4)(var41);
                var41 = var41.t;
                var41 = var41.bDSZO1;
                var41 = var42.bind(var43)(var41);
                var21.accessibilityLabel = var41;
                var21.onPress = var37;
                var37 = var15.controlButton;
                var21.style = var37;
                var37 = 34;
                var37 = var40[var37];
                var37 = var38.bind(var4)(var37);
                var38 = var37.ClosedCaptionsOutlineIcon;
                var37 = {};
                if (var39) {
                    _fun82951_ip = 3709;
                    continue _fun82951
                }
            case 3696:
                var39 = var15.iconDisabled;
                var39 = var39.color;
                _fun82951_ip = 3719;
                continue _fun82951;
            case 3709:
                var40 = var15.icon;
                var39 = var40.color;
            case 3719:
                var37.color = var39;
                var37 = var30.bind(var4)(var38, var37);
                var21.children = var37;
                var25 = var30.bind(var4)(var28, var21);
            case 3739:
                var21 = new Array(2);
                var21[0] = var25;
                if (!var22) {
                    _fun82951_ip = 3906;
                    continue _fun82951
                }
            case 3753:
                var30 = _closure1_slot13;
                var37 = _closure1_slot0;
                var38 = _closure1_slot2;
                var25 = 33;
                var25 = var38[var25];
                var25 = var37.bind(var4)(var25);
                var28 = var25.PressableOpacity;
                var25 = {};
                var39 = 'button';
                var25.accessibilityRole = var39;
                var39 = var38[var27];
                var39 = var37.bind(var4)(var39);
                var41 = var39.intl;
                var40 = var41.string;
                var39 = var38[var27];
                var39 = var37.bind(var4)(var39);
                var39 = var39.t;
                var39 = var39.KCzjTi;
                var39 = var40.bind(var41)(var39);
                var25.accessibilityLabel = var39;
                var25.onPress = var36;
                var36 = var15.controlButton;
                var25.style = var36;
                var36 = 35;
                var36 = var38[var36];
                var36 = var37.bind(var4)(var36);
                var37 = var36.TranscriptOutlineIcon;
                var36 = {};
                var38 = var15.iconDisabled;
                var38 = var38.color;
                var36.color = var38;
                var36 = var30.bind(var4)(var37, var36);
                var25.children = var36;
                var22 = var30.bind(var4)(var28, var25);
            case 3906:
                var21[1] = var22;
                var14.children = var21;
                var18 = var20.bind(var4)(var19, var14);
            case 3920:
                var14 = new Array(3);
                var14[0] = var18;
                var20 = _closure1_slot14;
                var19 = _closure1_slot5;
                var18 = {};
                var21 = var15.controlsMiddle;
                var18.style = var21;
                var30 = _closure1_slot13;
                var39 = _closure1_slot0;
                var36 = _closure1_slot2;
                var22 = 36;
                var21 = var36[var22];
                var21 = var39.bind(var4)(var21);
                var25 = var21.VideoQuestPlayerControlButton;
                var21 = {};
                var28 = _closure1_slot21;
                var28 = var28.ERRORED;
                var28 = var34 === var28;
                var21.disabled = var28;
                var28 = 'button';
                var21.accessibilityRole = var28;
                var37 = var36[var27];
                var37 = var39.bind(var4)(var37);
                var40 = var37.intl;
                var38 = var40.string;
                var37 = var36[var27];
                var37 = var39.bind(var4)(var37);
                var37 = var37.t;
                var37 = var37.r9s3Uv;
                var37 = var38.bind(var40)(var37);
                var21.accessibilityLabel = var37;
                var21.onPress = var26;
                var26 = 37;
                var26 = var36[var26];
                var26 = var39.bind(var4)(var26);
                var37 = var26.SkipBackwardIcon;
                var26 = {
                    'color': null,
                    'width': 16,
                    'height': 16
                };
                var38 = var15.icon;
                var38 = var38.color;
                var26.color = var38;
                var26 = var30.bind(var4)(var37, var26);
                var21.children = var26;
                var25 = var30.bind(var4)(var25, var21);
                var21 = new Array(3);
                var21[0] = var25;
                var25 = var36[var22];
                var25 = var39.bind(var4)(var25);
                var26 = var25.VideoQuestPlayerControlButton;
                var25 = {};
                var25.accessibilityRole = var28;
                var37 = var36[var27];
                var37 = var39.bind(var4)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var36 = var36[var27];
                var36 = var39.bind(var4)(var36);
                var36 = var36.t;
                var36 = var36.RscU7I;
                var36 = var37.bind(var38)(var36);
                var25.accessibilityLabel = var36;
                var25.onPress = var35;
                if (var33) {
                    _fun82951_ip = 4293;
                    continue _fun82951
                }
            case 4208:
                var33 = _closure1_slot21;
                var33 = var33.ERRORED;
                if (!(var34 !== var33)) {
                    _fun82951_ip = 4293;
                    continue _fun82951
                }
            case 4222:
                var34 = _closure1_slot13;
                var35 = _closure1_slot0;
                var36 = _closure1_slot2;
                if (var31) {
                    _fun82951_ip = 4257;
                    continue _fun82951
                }
            case 4237:
                var31 = 40;
                var31 = var36[var31];
                var31 = var35.bind(var4)(var31);
                var33 = var31.PauseIcon;
                _fun82951_ip = 4275;
                continue _fun82951;
            case 4257:
                var31 = 39;
                var31 = var36[var31];
                var31 = var35.bind(var4)(var31);
                var33 = var31.PlayIcon;
            case 4275:
                var31 = {};
                var35 = 'lg';
                var31.size = var35;
                var31 = var34.bind(var4)(var33, var31);
                _fun82951_ip = 4339;
                continue _fun82951;
            case 4293:
                var35 = _closure1_slot13;
                var34 = _closure1_slot0;
                var36 = _closure1_slot2;
                var33 = 38;
                var33 = var36[var33];
                var33 = var34.bind(var4)(var33);
                var34 = var33.RetryIcon;
                var33 = {};
                var36 = 'lg';
                var33.size = var36;
                var31 = var35.bind(var4)(var34, var33);
            case 4339:
                var25.children = var31;
                var25 = var30.bind(var4)(var26, var25);
                var21[1] = var25;
                var26 = _closure1_slot13;
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var22 = var31[var22];
                var22 = var30.bind(var4)(var22);
                var25 = var22.VideoQuestPlayerControlButton;
                var22 = {};
                var22.disabled = var32;
                var22.accessibilityRole = var28;
                var32 = var31[var27];
                var32 = var30.bind(var4)(var32);
                var34 = var32.intl;
                var33 = var34.string;
                var32 = var31[var27];
                var32 = var30.bind(var4)(var32);
                var32 = var32.t;
                var32 = var32.zWDcNP;
                var32 = var33.bind(var34)(var32);
                var22.accessibilityLabel = var32;
                var22.onPress = var29;
                var29 = 41;
                var29 = var31[var29];
                var29 = var30.bind(var4)(var29);
                var30 = var29.SkipForwardIcon;
                var29 = {
                    'color': null,
                    'width': 16,
                    'height': 16
                };
                var31 = var15.icon;
                var31 = var31.color;
                var29.color = var31;
                var29 = var26.bind(var4)(var30, var29);
                var22.children = var29;
                var22 = var26.bind(var4)(var25, var22);
                var21[2] = var22;
                var18.children = var21;
                var18 = var20.bind(var4)(var19, var18);
                var14[1] = var18;
                var18 = var9;
                if (!var9) {
                    _fun82951_ip = 4719;
                    continue _fun82951
                }
            case 4535:
                var21 = _closure1_slot13;
                var20 = _closure1_slot5;
                var19 = {};
                var25 = var15.controlsTopBottom;
                var22 = new Array(3);
                var22[0] = var25;
                var25 = var15.controlsBottom;
                var22[1] = var25;
                var22[2] = var23;
                var19.style = var22;
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = 33;
                var22 = var26[var22];
                var22 = var25.bind(var4)(var22);
                var23 = var22.PressableOpacity;
                var22 = {};
                var22.accessibilityRole = var28;
                var28 = var26[var27];
                var28 = var25.bind(var4)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var27 = var26[var27];
                var27 = var25.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.vKZT5t;
                var27 = var28.bind(var29)(var27);
                var22.accessibilityLabel = var27;
                var22.onPress = var24;
                var24 = var15.controlButton;
                var22.style = var24;
                var24 = 42;
                var24 = var26[var24];
                var24 = var25.bind(var4)(var24);
                var25 = var24.FullscreenEnterIcon;
                var24 = {};
                var24 = var21.bind(var4)(var25, var24);
                var22.children = var24;
                var22 = var21.bind(var4)(var23, var22);
                var19.children = var22;
                var18 = var21.bind(var4)(var20, var19);
            case 4719:
                var14[2] = var18;
                var10.children = var14;
                var10 = var12.bind(var4)(var11, var10);
                var8[4] = var10;
                if (!var9) {
                    _fun82951_ip = 4822;
                    continue _fun82951
                }
            case 4740:
                var12 = _closure1_slot13;
                var11 = _closure1_slot5;
                var10 = {};
                var14 = var15.progressContainer;
                var10.style = var14;
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var17];
                var13 = var14.bind(var4)(var13);
                var14 = var13.View;
                var13 = {};
                var17 = var15.progress;
                var15 = new Array(2);
                var15[0] = var17;
                var15[1] = var16;
                var13.style = var15;
                var13 = var12.bind(var4)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 4822:
                var8[5] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 4848:
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx';
    var4 = var5.bind(var6)(var4);
    var2.PlayerState = var3;
    var2.VideoQuestPlayer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5246, 5190, 5191, 660, 33, 671, 7660, 1297, 669, 10623, 5275, 5248, 3035, 3679, 4040, 4046, 4056, 4844, 10629, 5229, 10631, 1229, 478, 5278, 5221, 566, 1207, 1568, 1234, 10639, 4865, 10643, 10645, 10647, 10648, 7821, 5833, 8811, 10649, 10650, 2]);