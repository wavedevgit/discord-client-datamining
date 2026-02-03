// modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        var2 = arg0;
        var8 = var2.trailing;
        var9 = null;
        var1 = Object.create(var9);
        var0 = 0;
        var1.trailing = var0;
        var13 = {};
        var12 = var2;
        var11 = var1;
        var12 = copyDataProperties(var13, var12, var11);
        var3 = _closure1_slot9;
        var5 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 10;
        var0 = var10[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.Stack;
        var0 = {};
        var6 = _closure1_slot9;
        var4 = 11;
        var4 = var10[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.RowButton;
        var4 = {};
        var10 = true;
        var4.experimental_withBlurBackground = var10;
        var9 = var9 == var8;
        var4.arrow = var9;
        var4.trailing = var8;
        var13 = var4;
        var7 = copyDataProperties(var13, var12);
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var4 = function arg0() {
        _fun111496: for (var _fun111496_ip = 0;;) switch (_fun111496_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.wrapperSpecs;
                var _closure2_slot0 = var16;
                var14 = var0.accessoryHeights;
                var _closure2_slot1 = var14;
                var20 = var0.controlsSpecs;
                var _closure2_slot2 = var20;
                var21 = var0.state;
                var _closure2_slot3 = var21;
                var17 = var0.cleanUp;
                var _closure2_slot4 = var17;
                var15 = var0.gestureState;
                var _closure2_slot5 = var15;
                var0 = _closure1_slot10;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var6 = _closure1_slot4;
                var2 = var6.useContext;
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 13;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var2.bind(var6)(var0);
                var23 = var0.windowDimensions;
                var _closure2_slot6 = var23;
                var10 = var0.channelId;
                var _closure2_slot7 = var10;
                var22 = var0.safeArea;
                var _closure2_slot8 = var22;
                var0 = 14;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var9 = var0.bind(var3)(var10);
                var19 = _closure1_slot0;
                var0 = 15;
                var0 = var12[var0];
                var2 = var19.bind(var3)(var0);
                var0 = var2.useGetDismissibleContent;
                var6 = var0.bind(var2)(var9);
                var2 = _closure1_slot3;
                var0 = 1;
                var2 = var2.bind(var3)(var6, var0);
                var0 = 0;
                var0 = var2[var0];
                var _closure2_slot9 = var0;
                var2 = 16;
                var2 = var12[var2];
                var11 = var19.bind(var3)(var2);
                var7 = var11.useStateFromStores;
                var2 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var8
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot7;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var11)(var6, var2);
                var _closure2_slot10 = var7;
                var11 = _closure1_slot4;
                var6 = var11.useMemo;
                var2 = new Array(2);
                var2[0] = var0;
                var2[1] = var7;
                var0 = function() { // Environment: var8
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getDismissableCTAProps;
                    var0 = {};
                    var4 = _closure2_slot9;
                    var0.dismissableContent = var4;
                    var3 = _closure2_slot10;
                    var0.channel = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var11)(var0, var2);
                var _closure2_slot11 = var6;
                var0 = 17;
                var0 = var12[var0];
                var2 = var19.bind(var3)(var0);
                var0 = var2.useFloatingCTAProps;
                var11 = var0.bind(var2)(var7);
                var18 = 18;
                var0 = var12[var18];
                var7 = var19.bind(var3)(var0);
                var2 = var7.useAnimatedStyle;
                var0 = function() {
                    _fun111499: for (var _fun111499_ip = 0;;) switch (_fun111499_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var1 = 19;
                            var1 = var0[var1];
                            var6 = undefined;
                            var9 = var2.bind(var6)(var1);
                            var8 = var9.getControlsDefaultWidth;
                            var4 = _closure2_slot6;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            var5 = var1.width;
                            var10 = _closure2_slot8;
                            var1 = var10.get;
                            var1 = var1.bind(var10)();
                            var4 = var1.left;
                            var1 = var10.get;
                            var1 = var1.bind(var10)();
                            var1 = var1.right;
                            var4 = var8.bind(var9)(var5, var4, var1);
                            var1 = _closure2_slot3;
                            var13 = 20;
                            var0 = var0[var13];
                            var0 = var2.bind(var6)(var0);
                            var0 = var0.TransitionStates;
                            var0 = var0.YEETED;
                            var12 = 1;
                            if (!(var1 === var0)) {
                                _fun111499_ip = 128;
                                continue _fun111499
                            }
                        case 126:
                            var12 = 0;
                        case 128:
                            var0 = {};
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = var1.height;
                            var1 = 16;
                            var1 = var2 + var1;
                            var0.bottom = var1;
                            var0.width = var4;
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 21;
                            var1 = var9[var1];
                            var2 = var2.bind(var6)(var1);
                            var1 = 2;
                            var1 = var4 / var1;
                            var2 = var2.bind(var6)(var1);
                            var1 = -1;
                            var1 = var1 * var2;
                            var0.marginLeft = var1;
                            var5 = _closure1_slot0;
                            var4 = 22;
                            var1 = var9[var4];
                            var11 = var5.bind(var6)(var1);
                            var10 = var11.withSpring;
                            var17 = _closure1_slot11;
                            var2 = function arg0() {
                                _fun111500: for (var _fun111500_ip = 0;;) switch (_fun111500_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun111500_ip = 54;
                                            continue _fun111500
                                        }
                                    case 6:
                                        var2 = _closure2_slot3;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 20;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.TransitionStates;
                                        var1 = var1.YEETED;
                                        var0 = var2 === var1;
                                    case 54:
                                        if (!var0) {
                                            _fun111500_ip = 103;
                                            continue _fun111500
                                        }
                                    case 57:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 18;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot4;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 103:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = {};
                            var14 = _closure2_slot3;
                            var1.state = var14;
                            var13 = var9[var13];
                            var13 = var5.bind(var6)(var13);
                            var13 = var13.TransitionStates;
                            var1.TransitionStates = var13;
                            var13 = 18;
                            var13 = var9[var13];
                            var13 = var5.bind(var6)(var13);
                            var13 = var13.runOnJS;
                            var1.runOnJS = var13;
                            var13 = _closure2_slot4;
                            var1.cleanUp = var13;
                            var2.__closure = var1;
                            var1 = 7334460639890.0;
                            var2.__workletHash = var1;
                            var1 = _closure1_slot13;
                            var2.__initData = var1;
                            var16 = 'respect-motion-settings';
                            var19 = var11;
                            var18 = var12;
                            var15 = var2;
                            var1 = var19[var10](var18, var17, var16, var15, var14);
                            var0.opacity = var1;
                            var2 = {};
                            var1 = var9[var4];
                            var12 = var5.bind(var6)(var1);
                            var11 = var12.withSpring;
                            var8 = _closure2_slot0;
                            var1 = var8.get;
                            var1 = var1.bind(var8)();
                            var10 = var1.x;
                            var1 = _closure1_slot6;
                            var1 = var11.bind(var12)(var10, var1);
                            var2.translateX = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var4 = var9[var4];
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.withSpring;
                            var4 = var8.get;
                            var4 = var4.bind(var8)();
                            var4 = var4.hidden;
                            if (var4) {
                                _fun111499_ip = 514;
                                continue _fun111499
                            }
                        case 450:
                            var8 = _closure2_slot5;
                            var4 = var8.get;
                            var4 = var4.bind(var8)();
                            var4 = var4.active;
                            if (!var4) {
                                _fun111499_ip = 494;
                                continue _fun111499
                            }
                        case 472:
                            var8 = _closure2_slot5;
                            var4 = var8.get;
                            var4 = var4.bind(var8)();
                            var4 = var4.requiresPop;
                            if (!var4) {
                                _fun111499_ip = 514;
                                continue _fun111499
                            }
                        case 494:
                            var8 = _closure2_slot0;
                            var4 = var8.get;
                            var4 = var4.bind(var8)();
                            var4 = var4.y;
                            _fun111499_ip = 557;
                            continue _fun111499;
                        case 514:
                            var9 = _closure2_slot0;
                            var8 = var9.get;
                            var8 = var8.bind(var9)();
                            var9 = var8.height;
                            var8 = _closure1_slot7;
                            var8 = var9 + var8;
                            var9 = _closure2_slot1;
                            var7 = var9.get;
                            var7 = var7.bind(var9)();
                            var4 = var8 + var7;
                        case 557:
                            var3 = _closure1_slot6;
                            var3 = var5.bind(var6)(var4, var3);
                            var2.translateY = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var13 = {};
                var24 = 19;
                var24 = var12[var24];
                var24 = var19.bind(var3)(var24);
                var24 = var24.getControlsDefaultWidth;
                var13.getControlsDefaultWidth = var24;
                var13.windowDimensions = var23;
                var13.safeArea = var22;
                var13.state = var21;
                var21 = 20;
                var21 = var12[var21];
                var21 = var19.bind(var3)(var21);
                var21 = var21.TransitionStates;
                var13.TransitionStates = var21;
                var13.controlsSpecs = var20;
                var20 = 21;
                var20 = var12[var20];
                var20 = var1.bind(var3)(var20);
                var13.roundToNearestPixel = var20;
                var20 = 22;
                var20 = var12[var20];
                var20 = var19.bind(var3)(var20);
                var20 = var20.withSpring;
                var13.withSpring = var20;
                var20 = _closure1_slot11;
                var13.OPACITY_CHANGE_PHYSICS = var20;
                var18 = var12[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.runOnJS;
                var13.runOnJS = var18;
                var13.cleanUp = var17;
                var13.wrapperSpecs = var16;
                var16 = _closure1_slot6;
                var13.UI_SHOW_HIDE_PHYSICS = var16;
                var13.gestureState = var15;
                var15 = _closure1_slot7;
                var13.CALL_TILE_GUTTER = var15;
                var13.accessoryHeights = var14;
                var0.__closure = var13;
                var13 = 3338259366067.0;
                var0.__workletHash = var13;
                var13 = _closure1_slot12;
                var0.__initData = var13;
                var7 = var2.bind(var7)(var0);
                var2 = _closure1_slot9;
                var0 = 23;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var12 = var4.container;
                var4 = new Array(2);
                var4[0] = var12;
                var4[1] = var7;
                var0.style = var4;
                var4 = null;
                if (!(var4 == var6)) {
                    _fun111496_ip = 664;
                    continue _fun111496
                }
            case 594:
                if (!(var4 == var11)) {
                    _fun111496_ip = 636;
                    continue _fun111496
                }
            case 598:
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 25;
                var4 = var12[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.channelId = var10;
                var4 = var7.bind(var3)(var6, var4);
                _fun111496_ip = 662;
                continue _fun111496;
            case 636:
                var10 = _closure1_slot9;
                var7 = _closure1_slot14;
                var6 = {};
                var26 = var6;
                var25 = var11;
                var11 = copyDataProperties(var26, var25);
                var4 = var10.bind(var3)(var7, var6);
            case 662:
                _fun111496_ip = 712;
                continue _fun111496;
            case 664:
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 24;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.contentTypes = var9;
                var8 = function() {
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot14;
                    var1 = {};
                    var4 = _closure2_slot11;
                    var5 = var1;
                    var0 = copyDataProperties(var5, var4);
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 712:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var4;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var9 = true;
    var3.value = var9;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var14.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var5 = var7[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.TABLE_ROW_HEIGHT;
    var3 = 3;
    var3 = var7[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var16 = var3.MODE_CHANGE_PHYSICS;
    var3 = var3.UI_SHOW_HIDE_PHYSICS;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.CALL_TILE_GUTTER;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 16;
    var3 = var5 + var3;
    var5 = 8;
    var5 = var7[var5];
    var11 = var6.bind(var0)(var5);
    var10 = var11.createStyles;
    var5 = {};
    var12 = {
        'zIndex': 1,
        'position': 'absolute',
        'bottom': 0,
        'left': '50%',
        'overflow': 'hidden',
        'alignItems': 'center'
    };
    var13 = 9;
    var13 = var7[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var12.borderRadius = var13;
    var5.container = var12;
    var5 = var10.bind(var11)(var5);
    var _closure1_slot10 = var5;
    var5 = {};
    var17 = var5;
    var8 = copyDataProperties(var17, var16);
    var8 = 'overshootClamping';
    var5[var8] = var9;
    var _closure1_slot11 = var5;
    var5 = {};
    var8 = "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,state,TransitionStates,controlsSpecs,roundToNearestPixel,withSpring,OPACITY_CHANGE_PHYSICS,runOnJS,cleanUp,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);const opacity=state===TransitionStates.YEETED?0:1;return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,opacity:withSpring(opacity,OPACITY_CHANGE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}";
    var5.code = var8;
    var _closure1_slot12 = var5;
    var5 = {};
    var8 = 'function VoicePanelFloatingCTAContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var5.code = var8;
    var _closure1_slot13 = var5;
    var5 = 26;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.FLOATING_CTA_TOTAL_VIEW_HEIGHT = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        var4 = _closure1_slot9;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 12;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var5 = _closure1_slot8;
        var5 = var5.DARK;
        var1.theme = var5;
        var6 = _closure1_slot9;
        var5 = _closure1_slot15;
        var0 = {};
        var10 = arg1;
        var11 = var0;
        var7 = copyDataProperties(var11, var10);
        var8 = arg2;
        var7 = 'state';
        var0[var7] = var8;
        var8 = arg3;
        var7 = 'cleanUp';
        var0[var7] = var8;
        var0 = var6.bind(var3)(var5, var0);
        var1.children = var0;
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var2.renderVoicePanelFloatingCTA = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4870, 1372, 11816, 11819, 483, 33, 1297, 671, 4080, 5380, 3159, 11815, 8715, 5958, 632, 14240, 3720, 14333, 4028, 13133, 4081, 6458, 5957, 14338, 2]);