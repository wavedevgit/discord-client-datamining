// modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var4 = var7[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var8 = var3.bind(var0)(var4);
    var _closure1_slot2 = var8;
    var4 = 1;
    var3 = var7[var4];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var9 = var3.QuestDockMode;
    var _closure1_slot4 = var9;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.SECOND;
    var3 = var4 * var3;
    var _closure1_slot7 = var3;
    var4 = var8.createContext;
    var3 = {};
    var5 = 6;
    var10 = var7[var5];
    var11 = var6.bind(var0)(var10);
    var10 = var11.createFakeSharedValue;
    var9 = var9.COLLAPSED;
    var9 = var10.bind(var11)(var9);
    var3.restingQuestDockMode = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var3.setRestingQuestDockMode = var9;
    var5 = var7[var5];
    var10 = var6.bind(var0)(var5);
    var9 = var10.createFakeSharedValue;
    var5 = null;
    var5 = var9.bind(var10)(var5);
    var3.lastScrollEventSourceId = var5;
    var4 = var4.bind(var8)(var3);
    var _closure1_slot8 = var4;
    var5 = var8.memo;
    var3 = function arg0() {
        _fun47394: for (var _fun47394_ip = 0;;) switch (_fun47394_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 7;
                var4 = var7[var2];
                var3 = undefined;
                var8 = var6.bind(var3)(var4);
                var5 = var8.useSharedValue;
                var4 = null;
                var8 = var5.bind(var8)(var4);
                var _closure2_slot0 = var8;
                var2 = var7[var2];
                var5 = var6.bind(var3)(var2);
                var4 = var5.useSharedValue;
                var2 = 8;
                var2 = var7[var2];
                var7 = var6.bind(var3)(var2);
                var6 = var7.isSoftDismissed;
                var2 = _closure1_slot3;
                var2 = var2.questDockSoftDismissedAt;
                var2 = var6.bind(var7)(var2);
                var6 = _closure1_slot4;
                if (var2) {
                    _fun47394_ip = 107;
                    continue _fun47394
                }
            case 99:
                var2 = var6.COLLAPSED;
                _fun47394_ip = 113;
                continue _fun47394;
            case 107:
                var2 = var6.SOFT_DISMISSED;
            case 113:
                var7 = var4.bind(var5)(var2);
                var _closure2_slot1 = var7;
                var5 = _closure1_slot2;
                var6 = var5.useCallback;
                var4 = new Array(1);
                var4[0] = var7;
                var2 = function(arg0) { // Environment: var1
                    _fun47395: for (var _fun47395_ip = 0;;) switch (_fun47395_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot1;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            if (!(var1 !== var2)) {
                                _fun47395_ip = 37;
                                continue _fun47395
                            }
                        case 23:
                            var1 = _closure2_slot1;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2);
                        case 37:
                            var1 = _closure1_slot4;
                            var1 = var1.RESET_TO_PREVIOUS;
                            if (!(var2 !== var1)) {
                                _fun47395_ip = 87;
                                continue _fun47395
                            }
                        case 54:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.updatePrevRestingQuestDockMode;
                            var0 = var0.bind(var1)(var2);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var6.bind(var5)(var2, var4);
                var _closure2_slot2 = var6;
                var4 = var5.useMemo;
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.lastScrollEventSourceId = var2;
                    var2 = _closure2_slot1;
                    var0.restingQuestDockMode = var2;
                    var1 = _closure2_slot2;
                    var0.setRestingQuestDockMode = var1;
                    return var0;
                };
                var4 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot6;
                var0 = _closure1_slot8;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var4 = arg0;
                var4 = var4.children;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var5.bind(var8)(var3);
    var5 = 10;
    var5 = var7[var5];
    var8 = var6.bind(var0)(var5);
    var5 = var8.isAndroid;
    var5 = var5.bind(var8)();
    var _closure1_slot9 = var5;
    var5 = {};
    var8 = 'function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}';
    var5.code = var8;
    var _closure1_slot10 = var5;
    var5 = {};
    var8 = 'function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}';
    var5.code = var8;
    var _closure1_slot11 = var5;
    var5 = {};
    var8 = "function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}";
    var5.code = var8;
    var _closure1_slot12 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx';
    var5 = var6.bind(var7)(var5);
    var2.QuestDockExternalCoordinationContext = var4;
    var2.QuestDockExternalCoordinationContextProvider = var3;
    var1 = function arg0() {
        var0 = arg0;
        var11 = var0.id;
        var _closure2_slot0 = var11;
        var3 = _closure1_slot2;
        var4 = var3.useContext;
        var2 = _closure1_slot8;
        var2 = var4.bind(var3)(var2);
        var6 = var2.setRestingQuestDockMode;
        var _closure2_slot1 = var6;
        var8 = var2.restingQuestDockMode;
        var _closure2_slot2 = var8;
        var9 = var2.lastScrollEventSourceId;
        var _closure2_slot3 = var9;
        var4 = var3.useRef;
        var2 = -1;
        var2 = var4.bind(var3)(var2);
        var _closure2_slot4 = var2;
        var5 = var3.useCallback;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var8;
        var2 = function() { // Environment: var1
            _fun47398: for (var _fun47398_ip = 0;;) switch (_fun47398_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    var2 = var1.current;
                    var1 = -1;
                    if (!(var1 !== var2)) {
                        _fun47398_ip = 50;
                        continue _fun47398
                    }
                case 22:
                    var1 = global;
                    var3 = var1.window;
                    var2 = var3.clearTimeout;
                    var1 = _closure2_slot4;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1);
                case 50:
                    var1 = _closure2_slot4;
                    var0 = global;
                    var4 = var0.window;
                    var3 = var4.setTimeout;
                    var2 = function() { // Environment: var0
                        _fun47399: for (var _fun47399_ip = 0;;) switch (_fun47399_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var0 = var2.get;
                                var3 = var0.bind(var2)();
                                var2 = _closure1_slot4;
                                var2 = var2.EXPANDED;
                                if (!(var3 !== var2)) {
                                    _fun47399_ip = 54;
                                    continue _fun47399
                                }
                            case 33:
                                var2 = _closure2_slot1;
                                var0 = _closure1_slot4;
                                var1 = var0.COLLAPSED;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 54:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = 500;
                    var0 = var3.bind(var4)(var2, var0);
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var7 = var5.bind(var3)(var2, var4);
        var _closure2_slot5 = var7;
        var5 = var3.useCallback;
        var4 = function() { // Environment: var1
            _fun47400: for (var _fun47400_ip = 0;;) switch (_fun47400_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    var2 = var1.current;
                    var1 = -1;
                    if (!(var1 !== var2)) {
                        _fun47400_ip = 50;
                        continue _fun47400
                    }
                case 22:
                    var1 = global;
                    var2 = var1.window;
                    var1 = var2.clearTimeout;
                    var0 = _closure2_slot4;
                    var0 = var0.current;
                    var0 = var1.bind(var2)(var0);
                case 50:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = new Array(0);
        var5 = var5.bind(var3)(var4, var2);
        var _closure2_slot6 = var5;
        var15 = _closure1_slot0;
        var16 = _closure1_slot1;
        var13 = 7;
        var2 = var16[var13];
        var14 = undefined;
        var12 = var15.bind(var14)(var2);
        var10 = var12.useAnimatedReaction;
        var4 = function() {
            var1 = _closure2_slot2;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = {};
        var2.restingQuestDockMode = var8;
        var4.__closure = var2;
        var2 = 14040596710288.0;
        var4.__workletHash = var2;
        var2 = _closure1_slot10;
        var4.__initData = var2;
        var2 = function arg0, arg1() {
            _fun47402: for (var _fun47402_ip = 0;;) switch (_fun47402_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    if (!(var1 !== var0)) {
                        _fun47402_ip = 56;
                        continue _fun47402
                    }
                case 10:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var0 = var1[var0];
                    var1 = undefined;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.runOnJS;
                    var0 = _closure2_slot6;
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.bind(var1)();
                case 56:
                    var0 = undefined;
                    return var0;
            }
        };
        var17 = {};
        var18 = var16[var13];
        var18 = var15.bind(var14)(var18);
        var18 = var18.runOnJS;
        var17.runOnJS = var18;
        var17.cancelReopenQuestDock = var5;
        var2.__closure = var17;
        var17 = 1848909508809.0;
        var2.__workletHash = var17;
        var17 = _closure1_slot11;
        var2.__initData = var17;
        var2 = var10.bind(var12)(var4, var2);
        var2 = var16[var13];
        var10 = var15.bind(var14)(var2);
        var4 = var10.useSharedValue;
        var2 = 0;
        var10 = var4.bind(var10)(var2);
        var _closure2_slot7 = var10;
        var2 = var16[var13];
        var12 = var15.bind(var14)(var2);
        var4 = var12.useSharedValue;
        var2 = false;
        var4 = var4.bind(var12)(var2);
        var _closure2_slot8 = var4;
        var17 = var3.useEffect;
        var12 = new Array(1);
        var12[0] = var4;
        var2 = function() { // Environment: var1
            var1 = global;
            var4 = var1.setTimeout;
            var3 = _closure1_slot7;
            var2 = undefined;
            var1 = function() { // Environment: var0
                var2 = _closure2_slot8;
                var1 = var2.set;
                var0 = true;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var4.bind(var2)(var1, var3);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = global;
                var2 = var0.clearTimeout;
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var2 = var17.bind(var3)(var2, var12);
        var2 = var3.useCallback;
        var1 = function arg0, arg1, arg2() {
            _fun47406: for (var _fun47406_ip = 0;;) switch (_fun47406_ip) {
                case 0:
                    var3 = arg0;
                    var6 = arg1;
                    var4 = arg2;
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    if (!var1) {
                        _fun47406_ip = 591;
                        continue _fun47406
                    }
                case 31:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var5 = var1.bind(var2)();
                    var2 = _closure1_slot4;
                    var2 = var2.SOFT_DISMISSED;
                    if (!(var5 !== var2)) {
                        _fun47406_ip = 591;
                        continue _fun47406
                    }
                case 64:
                    var5 = _closure2_slot2;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var2 = _closure1_slot4;
                    var2 = var2.EXPANDED;
                    if (!(var5 !== var2)) {
                        _fun47406_ip = 591;
                        continue _fun47406
                    }
                case 94:
                    var7 = _closure2_slot7;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var5 = var7.set;
                    var5 = var5.bind(var7)(var3);
                    if (!(var2 !== var3)) {
                        _fun47406_ip = 591;
                        continue _fun47406
                    }
                case 124:
                    var7 = _closure2_slot3;
                    var5 = var7.get;
                    var7 = var5.bind(var7)();
                    var5 = _closure2_slot0;
                    var8 = 'guilds';
                    if (!(var8 !== var5)) {
                        _fun47406_ip = 167;
                        continue _fun47406
                    }
                case 149:
                    var10 = _closure2_slot3;
                    var9 = var10.set;
                    var5 = _closure2_slot0;
                    var5 = var9.bind(var10)(var5);
                case 167:
                    var5 = _closure2_slot0;
                    if (!(var8 !== var5)) {
                        _fun47406_ip = 186;
                        continue _fun47406
                    }
                case 175:
                    var5 = _closure2_slot0;
                    if (!(var5 === var7)) {
                        _fun47406_ip = 591;
                        continue _fun47406
                    }
                case 186:
                    var5 = 0;
                    if (!(var3 < var5)) {
                        _fun47406_ip = 199;
                        continue _fun47406
                    }
                case 192:
                    if (!(!(var2 < var5))) {
                        _fun47406_ip = 551;
                        continue _fun47406
                    }
                case 199:
                    var7 = null;
                    if (!(var7 != var4)) {
                        _fun47406_ip = 220;
                        continue _fun47406
                    }
                case 205:
                    if (!(var7 != var6)) {
                        _fun47406_ip = 220;
                        continue _fun47406
                    }
                case 209:
                    var4 = var3 + var4;
                    if (!(!(var4 >= var6))) {
                        _fun47406_ip = 591;
                        continue _fun47406
                    }
                case 220:
                    if (!(var3 <= var5)) {
                        _fun47406_ip = 265;
                        continue _fun47406
                    }
                case 224:
                    var4 = _closure1_slot9;
                    if (var4) {
                        _fun47406_ip = 235;
                        continue _fun47406
                    }
                case 231:
                    if (!(var2 <= var5)) {
                        _fun47406_ip = 265;
                        continue _fun47406
                    }
                case 235:
                    var6 = _closure2_slot2;
                    var4 = var6.get;
                    var6 = var4.bind(var6)();
                    var4 = _closure1_slot4;
                    var4 = var4.CLOSED;
                    if (!(var6 !== var4)) {
                        _fun47406_ip = 476;
                        continue _fun47406
                    }
                case 265:
                    var4 = global;
                    var7 = var4.Math;
                    var6 = var7.abs;
                    var4 = var2 - var3;
                    var4 = var6.bind(var7)(var4);
                    if (!(var3 > var2)) {
                        _fun47406_ip = 327;
                        continue _fun47406
                    }
                case 292:
                    if (!(var3 > var5)) {
                        _fun47406_ip = 327;
                        continue _fun47406
                    }
                case 296:
                    if (!(var2 > var5)) {
                        _fun47406_ip = 327;
                        continue _fun47406
                    }
                case 300:
                    var6 = _closure2_slot2;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot4;
                    var5 = var5.COLLAPSED;
                    if (!(var6 !== var5)) {
                        _fun47406_ip = 423;
                        continue _fun47406
                    }
                case 327:
                    var2 = var3 < var2;
                    if (!var2) {
                        _fun47406_ip = 361;
                        continue _fun47406
                    }
                case 334:
                    var5 = _closure2_slot2;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot4;
                    var3 = var3.CLOSED;
                    var2 = var5 === var3;
                case 361:
                    if (!var2) {
                        _fun47406_ip = 372;
                        continue _fun47406
                    }
                case 364:
                    var3 = _closure1_slot5;
                    var2 = var4 >= var3;
                case 372:
                    if (!var2) {
                        _fun47406_ip = 591;
                        continue _fun47406
                    }
                case 378:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.runOnJS;
                    var2 = _closure2_slot5;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.bind(var3)();
                    _fun47406_ip = 591;
                    continue _fun47406;
                case 423:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 7;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot1;
                    var3 = var3.bind(var5)(var2);
                    var2 = _closure1_slot4;
                    var2 = var2.CLOSED;
                    var2 = var3.bind(var4)(var2);
                    _fun47406_ip = 591;
                    continue _fun47406;
                case 476:
                    var2 = _closure1_slot9;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.runOnJS;
                    if (var2) {
                        _fun47406_ip = 536;
                        continue _fun47406
                    }
                case 510:
                    var2 = _closure2_slot1;
                    var6 = var4.bind(var5)(var2);
                    var2 = _closure1_slot4;
                    var2 = var2.COLLAPSED;
                    var2 = var6.bind(var3)(var2);
                    _fun47406_ip = 591;
                    continue _fun47406;
                case 536:
                    var2 = _closure2_slot5;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.bind(var3)();
                    _fun47406_ip = 591;
                    continue _fun47406;
                case 551:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.runOnJS;
                    var0 = _closure2_slot6;
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.bind(var1)();
                case 591:
                    var0 = undefined;
                    return var0;
            }
        };
        var12 = {};
        var12.isScrollHandlerEnabled = var4;
        var12.restingQuestDockMode = var8;
        var17 = _closure1_slot4;
        var12.QuestDockMode = var17;
        var12.lastContentOffsetY = var10;
        var12.lastScrollEventSourceId = var9;
        var12.id = var11;
        var13 = var16[var13];
        var13 = var15.bind(var14)(var13);
        var13 = var13.runOnJS;
        var12.runOnJS = var13;
        var12.cancelReopenQuestDock = var5;
        var13 = _closure1_slot9;
        var12.IS_ANDROID = var13;
        var12.scheduleReopenQuestDock = var7;
        var12.setRestingQuestDockMode = var6;
        var13 = _closure1_slot5;
        var12.QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD = var13;
        var1.__closure = var12;
        var12 = 9824540806898.0;
        var1.__workletHash = var12;
        var0 = _closure1_slot12;
        var1.__initData = var0;
        var0 = new Array(8);
        var0[0] = var11;
        var0[1] = var10;
        var0[2] = var9;
        var0[3] = var8;
        var0[4] = var7;
        var0[5] = var6;
        var0[6] = var5;
        var0[7] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useExternalScrollEventHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5303, 5280, 5305, 33, 667, 5307, 3721, 5304, 5310, 478, 2]);