// modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var3 = _closure1_slot7;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var4 = arg0;
        var0.shown = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var11.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var6[var1];
    var1 = arg3;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.MODE_CHANGE_PHYSICS;
    var _closure1_slot5 = var4;
    var1 = var1.VoicePanelModes;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot7 = var4;
    var1 = var1.jsxs;
    var _closure1_slot8 = var1;
    var1 = 4;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = {};
    var9 = {
        'flex': 1,
        'zIndex': 1
    };
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var1.drawer = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot9 = var1;
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var3
        _fun111637: for (var _fun111637_ip = 0;;) switch (_fun111637_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.shown;
                var _closure2_slot0 = var2;
                var9 = var1.renderContent;
                var _closure2_slot1 = var9;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var6 = _closure1_slot4;
                var5 = var6.useState;
                var3 = !var2;
                var6 = var5.bind(var6)(var3);
                var5 = _closure1_slot3;
                var3 = 2;
                var5 = var5.bind(var4)(var6, var3);
                var3 = 0;
                var6 = var5[var3];
                var3 = 1;
                var5 = var5[var3];
                var _closure2_slot2 = var5;
                var3 = var2;
                if (!var3) {
                    _fun111637_ip = 90;
                    continue _fun111637
                }
            case 87:
                var3 = var6;
            case 90:
                if (!var3) {
                    _fun111637_ip = 100;
                    continue _fun111637
                }
            case 93:
                var3 = false;
                var3 = var5.bind(var4)(var3);
            case 100:
                var8 = _closure1_slot4;
                var3 = var8.useRef;
                var3 = var3.bind(var8)(var2);
                _closure2_slot3 = var3;
                var7 = var8.useEffect;
                var5 = function() { // Environment: var0
                    _fun111638: for (var _fun111638_ip = 0;;) switch (_fun111638_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = var1.current;
                            if (var0) {
                                _fun111638_ip = 19;
                                continue _fun111638
                            }
                        case 15:
                            var0 = _closure2_slot0;
                        case 19:
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var5);
                var10 = var8.useEffect;
                var7 = new Array(1);
                var7[0] = var2;
                var5 = function() { // Environment: var0
                    _fun111639: for (var _fun111639_ip = 0;;) switch (_fun111639_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun111639_ip = 23;
                                continue _fun111639
                            }
                        case 10:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var10.bind(var8)(var5, var7);
                var7 = var8.useMemo;
                var5 = new Array(2);
                var5[0] = var9;
                var5[1] = var2;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = var7.bind(var8)(var0, var5);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 6;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.bind(var4)(var3);
                if (var0) {
                    _fun111637_ip = 224;
                    continue _fun111637
                }
            case 219:
                var0 = null;
                if (!var2) {
                    _fun111637_ip = 271;
                    continue _fun111637
                }
            case 224:
                var3 = _closure1_slot7;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Freeze;
                var1 = {};
                var1.freeze = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 271:
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var _closure1_slot10 = var1;
    var4 = {};
    var8 = 'function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}';
    var4.code = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}';
    var4.code = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}';
    var4.code = var8;
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun111641: for (var _fun111641_ip = 0;;) switch (_fun111641_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.tab;
                var6 = var0.sharedTab;
                var17 = var0.wrapperSpecs;
                var _closure2_slot0 = var17;
                var13 = var0.gestureSpecs;
                var _closure2_slot1 = var13;
                var2 = var0.openTab;
                var _closure2_slot2 = var2;
                var8 = _closure1_slot4;
                var4 = var8.useContext;
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 9;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var7.bind(var3)(var0);
                var0 = var4.bind(var8)(var0);
                var15 = var0.mode;
                var _closure2_slot3 = var15;
                var19 = var0.windowDimensions;
                var _closure2_slot4 = var19;
                var14 = var0.safeArea;
                var _closure2_slot5 = var14;
                var0 = _closure1_slot9;
                var4 = var0.bind(var3)();
                var7 = var8.useState;
                var0 = null;
                var0 = var0 == var11;
                var8 = var7.bind(var8)(var0);
                var7 = _closure1_slot3;
                var0 = 2;
                var7 = var7.bind(var3)(var8, var0);
                var0 = 0;
                var9 = var7[var0];
                var0 = 1;
                var16 = var7[var0];
                var _closure2_slot6 = var16;
                var0 = var6.get;
                var0 = var0.bind(var6)();
                var0 = var11 !== var0;
                if (!var0) {
                    _fun111641_ip = 189;
                    continue _fun111641
                }
            case 186:
                var0 = var9;
            case 189:
                if (!var0) {
                    _fun111641_ip = 199;
                    continue _fun111641
                }
            case 192:
                var0 = false;
                var0 = var16.bind(var3)(var0);
            case 199:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var6 = var7[var0];
                var10 = var18.bind(var3)(var6);
                var8 = var10.useAnimatedStyle;
                var6 = function() {
                    _fun111642: for (var _fun111642_ip = 0;;) switch (_fun111642_ip) {
                        case 0:
                            var0 = {};
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 11;
                            var2 = var6[var2];
                            var4 = undefined;
                            var10 = var5.bind(var4)(var2);
                            var9 = var10.getControlsDrawerOpenWidth;
                            var7 = _closure2_slot4;
                            var3 = var7.get;
                            var3 = var3.bind(var7)();
                            var8 = var3.width;
                            var11 = _closure2_slot5;
                            var3 = var11.get;
                            var3 = var3.bind(var11)();
                            var7 = var3.left;
                            var3 = var11.get;
                            var3 = var3.bind(var11)();
                            var3 = var3.right;
                            var3 = var9.bind(var10)(var8, var7, var3);
                            var0.width = var3;
                            var3 = 12;
                            var3 = var6[var3];
                            var4 = var5.bind(var4)(var3);
                            var3 = var4.withSpring;
                            var5 = _closure2_slot0;
                            var2 = var5.get;
                            var2 = var2.bind(var5)();
                            var5 = var2.height;
                            var2 = 200;
                            var5 = var5 >= var2;
                            var2 = 0;
                            if (!var5) {
                                _fun111642_ip = 147;
                                continue _fun111642
                            }
                        case 144:
                            var2 = 1;
                        case 147:
                            var1 = _closure1_slot5;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var12 = {};
                var20 = 11;
                var20 = var7[var20];
                var20 = var18.bind(var3)(var20);
                var20 = var20.getControlsDrawerOpenWidth;
                var12.getControlsDrawerOpenWidth = var20;
                var12.windowDimensions = var19;
                var12.safeArea = var14;
                var14 = 12;
                var14 = var7[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.withSpring;
                var12.withSpring = var14;
                var12.wrapperSpecs = var17;
                var14 = 200;
                var12.TRANSITIONAL_HEIGHT = var14;
                var14 = _closure1_slot5;
                var12.MODE_CHANGE_PHYSICS = var14;
                var6.__closure = var12;
                var12 = 8777106499672.0;
                var6.__workletHash = var12;
                var12 = _closure1_slot11;
                var6.__initData = var12;
                var6 = var8.bind(var10)(var6);
                var8 = var7[var0];
                var14 = var18.bind(var3)(var8);
                var12 = var14.useAnimatedReaction;
                var10 = function() {
                    var2 = _closure2_slot0;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var2 = var0.drawerMode;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var8 = {};
                var8.wrapperSpecs = var17;
                var8.mode = var15;
                var10.__closure = var8;
                var8 = 16802013961309.0;
                var10.__workletHash = var8;
                var8 = _closure1_slot12;
                var10.__initData = var8;
                var8 = function arg0, arg1() {
                    _fun111644: for (var _fun111644_ip = 0;;) switch (_fun111644_ip) {
                        case 0:
                            var5 = arg0;
                            var6 = arg1;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var2 = var2[var0];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var2);
                            var4 = var7.cheapWorkletArrayShallowEqual;
                            var3 = null;
                            var8 = var3 != var6;
                            var2 = undefined;
                            if (!var8) {
                                _fun111644_ip = 51;
                                continue _fun111644
                            }
                        case 48:
                            var2 = var6;
                        case 51:
                            var2 = var4.bind(var7)(var5, var2);
                            if (var2) {
                                _fun111644_ip = 225;
                                continue _fun111644
                            }
                        case 63:
                            var4 = _closure1_slot3;
                            var2 = 2;
                            var4 = var4.bind(var0)(var5, var2);
                            var7 = 0;
                            var2 = var4[var7];
                            var5 = 1;
                            var4 = var4[var5];
                            var3 = var3 != var6;
                            if (!var3) {
                                _fun111644_ip = 104;
                                continue _fun111644
                            }
                        case 96:
                            var7 = var6[var7];
                            var3 = var2 === var7;
                        case 104:
                            if (!var3) {
                                _fun111644_ip = 115;
                                continue _fun111644
                            }
                        case 107:
                            var5 = var6[var5];
                            var3 = var4 === var5;
                        case 115:
                            if (var3) {
                                _fun111644_ip = 225;
                                continue _fun111644
                            }
                        case 118:
                            var3 = _closure1_slot6;
                            var3 = var3.PANEL;
                            if (!(var4 === var3)) {
                                _fun111644_ip = 135;
                                continue _fun111644
                            }
                        case 132:
                            if (var2) {
                                _fun111644_ip = 181;
                                continue _fun111644
                            }
                        case 135:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 10;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.runOnJS;
                            var2 = _closure2_slot6;
                            var3 = var3.bind(var4)(var2);
                            var2 = true;
                            var2 = var3.bind(var0)(var2);
                            _fun111644_ip = 225;
                            continue _fun111644;
                        case 181:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 10;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnJS;
                            var1 = _closure2_slot6;
                            var2 = var2.bind(var3)(var1);
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                        case 225:
                            return var0;
                    }
                };
                var15 = {};
                var17 = 13;
                var17 = var7[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.cheapWorkletArrayShallowEqual;
                var15.cheapWorkletArrayShallowEqual = var17;
                var17 = _closure1_slot6;
                var15.VoicePanelModes = var17;
                var17 = var7[var0];
                var17 = var18.bind(var3)(var17);
                var17 = var17.runOnJS;
                var15.runOnJS = var17;
                var15.setFreeze = var16;
                var8.__closure = var15;
                var15 = 10375596551326.0;
                var8.__workletHash = var15;
                var15 = _closure1_slot13;
                var8.__initData = var15;
                var8 = var12.bind(var14)(var10, var8);
                var12 = _closure1_slot4;
                var10 = var12.useCallback;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = arg0;
                    var0.isVisible = var4;
                    var4 = _closure2_slot2;
                    var0.openTab = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var10 = var10.bind(var12)(var2, var8);
                var8 = var12.useCallback;
                var2 = new Array(1);
                var2[0] = var13;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.gestureSpecs = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var8 = var8.bind(var12)(var1, var2);
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var4.drawer;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot10;
                var4 = {};
                var12 = !var9;
                if (!var12) {
                    _fun111641_ip = 640;
                    continue _fun111641
                }
            case 632:
                var13 = 'settings';
                var12 = var13 === var11;
            case 640:
                var4.shown = var12;
                var4.renderContent = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var10 = _closure1_slot7;
                var7 = _closure1_slot10;
                var6 = {};
                var12 = !var9;
                if (!var12) {
                    _fun111641_ip = 688;
                    continue _fun111641
                }
            case 680:
                var13 = 'chat';
                var12 = var13 === var11;
            case 688:
                var6.shown = var12;
                var12 = _closure1_slot14;
                var6.renderContent = var12;
                var6 = var10.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot10;
                var5 = {};
                var9 = !var9;
                if (!var9) {
                    _fun111641_ip = 738;
                    continue _fun111641
                }
            case 728:
                var10 = 'app_launcher';
                var9 = var10 === var11;
            case 738:
                var5.shown = var9;
                var5.renderContent = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.LazyContentFreezer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 11773, 33, 1297, 671, 4700, 4002, 11770, 11772, 3681, 14292, 4042, 5266, 14325, 14327, 2]);