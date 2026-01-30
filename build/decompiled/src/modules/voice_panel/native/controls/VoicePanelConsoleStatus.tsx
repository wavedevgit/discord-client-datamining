// modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var7;
    var4 = function(arg0) { // Original name: VoicePanelConsoleStatus, environment: var1
        _fun112151: for (var _fun112151_ip = 0;;) switch (_fun112151_ip) {
            case 0:
                var2 = arg0;
                var6 = var2.wrapperSpecs;
                var4 = var2.accessoryHeights;
                var1 = var2.state;
                var _closure2_slot0 = var1;
                var11 = var2.cleanUp;
                var _closure2_slot1 = var11;
                var2 = _closure1_slot8;
                var3 = undefined;
                var9 = var2.bind(var3)();
                var7 = _closure1_slot3;
                var5 = var7.useContext;
                var26 = _closure1_slot1;
                var18 = _closure1_slot2;
                var2 = 7;
                var2 = var18[var2];
                var2 = var26.bind(var3)(var2);
                var2 = var5.bind(var7)(var2);
                var10 = var2.channelId;
                var7 = var2.windowDimensions;
                var _closure2_slot2 = var7;
                var2 = var2.mode;
                var5 = 8;
                var5 = var18[var5];
                var5 = var26.bind(var3)(var5);
                var5 = var5.bind(var3)(var10);
                var25 = var5.icon;
                var23 = var5.text;
                var13 = var5.color;
                var _closure2_slot3 = var13;
                var19 = var5.displayCancel;
                var20 = _closure1_slot0;
                var5 = 9;
                var10 = var18[var5];
                var14 = var20.bind(var3)(var10);
                var12 = var14.useSharedValue;
                var10 = false;
                var12 = var12.bind(var14)(var10);
                var _closure2_slot4 = var12;
                var15 = _closure1_slot3;
                var14 = var15.useEffect;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.TransitionStates;
                    var1 = var1.YEETED;
                    var1 = var4 !== var1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var14.bind(var15)(var1, var10);
                var1 = 11;
                var1 = var18[var1];
                var1 = var26.bind(var3)(var1);
                var6 = var1.bind(var3)(var2, var6, var4);
                var1 = var18[var5];
                var4 = var20.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() { // Original name: R, environment: var0
                    _fun112153: for (var _fun112153_ip = 0;;) switch (_fun112153_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot3;
                            var0.backgroundColor = var1;
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var3 = var1.width;
                            var4 = _closure1_slot4;
                            var2 = 2;
                            var2 = var2 * var4;
                            var2 = var3 - var2;
                            var0.width = var2;
                            var3 = _closure1_slot5;
                            var2 = 36;
                            var2 = var3 + var2;
                            var0.height = var2;
                            var2 = 32;
                            var0.borderRadius = var2;
                            var2 = {};
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 12;
                            var3 = var5[var3];
                            var12 = undefined;
                            var7 = var4.bind(var12)(var3);
                            var6 = var7.withSpring;
                            var4 = _closure2_slot4;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var5 = 100;
                            if (!var3) {
                                _fun112153_ip = 125;
                                continue _fun112153
                            }
                        case 123:
                            var5 = 0;
                        case 125:
                            var16 = _closure1_slot9;
                            var3 = function(arg0) { // Original name: n, environment: var3
                                _fun112154: for (var _fun112154_ip = 0;;) switch (_fun112154_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun112154_ip = 25;
                                            continue _fun112154
                                        }
                                    case 6:
                                        var2 = _closure2_slot4;
                                        var1 = var2.get;
                                        var1 = var1.bind(var2)();
                                        var0 = !var1;
                                    case 25:
                                        if (!var0) {
                                            _fun112154_ip = 74;
                                            continue _fun112154
                                        }
                                    case 28:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 9;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot1;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 74:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = {};
                            var10 = _closure2_slot4;
                            var8.shouldShow = var10;
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var10 = 9;
                            var10 = var13[var10];
                            var10 = var11.bind(var12)(var10);
                            var10 = var10.runOnJS;
                            var8.runOnJS = var10;
                            var9 = _closure2_slot1;
                            var8.cleanUp = var9;
                            var3.__closure = var8;
                            var8 = 9820708059867.0;
                            var3.__workletHash = var8;
                            var1 = _closure1_slot11;
                            var3.__initData = var1;
                            var15 = 'respect-motion-settings';
                            var18 = var7;
                            var17 = var5;
                            var14 = var3;
                            var1 = var18[var6](var17, var16, var15, var14, var13);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var10 = {};
                var10.color = var13;
                var10.windowDimensions = var7;
                var13 = _closure1_slot4;
                var10.EDGE_GUTTER = var13;
                var13 = _closure1_slot5;
                var10.CONTROLS_HEIGHT = var13;
                var13 = 36;
                var10.CONSOLE_STATUS_HEIGHT = var13;
                var13 = 12;
                var13 = var18[var13];
                var13 = var20.bind(var3)(var13);
                var13 = var13.withSpring;
                var10.withSpring = var13;
                var10.shouldShow = var12;
                var12 = _closure1_slot9;
                var10.FADE_IN_MODE_PHYSICS = var12;
                var12 = var18[var5];
                var12 = var20.bind(var3)(var12);
                var12 = var12.runOnJS;
                var10.runOnJS = var12;
                var10.cleanUp = var11;
                var1.__closure = var10;
                var10 = 14156265059426.0;
                var1.__workletHash = var10;
                var10 = _closure1_slot10;
                var1.__initData = var10;
                var15 = var2.bind(var4)(var1);
                var1 = var18[var5];
                var2 = var20.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: V, environment: var0
                    var0 = {};
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var2 = var1.width;
                    var3 = _closure1_slot4;
                    var1 = 2;
                    var1 = var1 * var3;
                    var1 = var2 - var1;
                    var0.width = var1;
                    return var0;
                };
                var4 = {};
                var4.windowDimensions = var7;
                var7 = _closure1_slot4;
                var4.EDGE_GUTTER = var7;
                var0.__closure = var4;
                var4 = 2418678233810.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot12;
                var0.__initData = var4;
                var10 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var0 = var18[var5];
                var0 = var26.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var9.consoleParentContainer;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot6;
                var14 = 13;
                var4 = var18[var14];
                var6 = var26.bind(var3)(var4);
                var4 = {};
                var12 = var9.consoleContainer;
                var11 = new Array(1);
                var11[0] = var12;
                var4.style = var11;
                var13 = _closure1_slot6;
                var11 = var18[var5];
                var11 = var26.bind(var3)(var11);
                var12 = var11.View;
                var11 = {};
                var11.style = var15;
                var16 = _closure1_slot7;
                var14 = var18[var14];
                var15 = var26.bind(var3)(var14);
                var14 = {};
                var17 = var9.consoleItemContainer;
                var14.style = var17;
                var22 = _closure1_slot6;
                var24 = 14;
                var17 = var18[var24];
                var21 = var26.bind(var3)(var17);
                var17 = {};
                var17.source = var25;
                var25 = 6;
                var25 = var18[var25];
                var25 = var26.bind(var3)(var25);
                var25 = var25.unsafe_rawColors;
                var25 = var25.WHITE;
                var17.color = var25;
                var24 = var18[var24];
                var24 = var20.bind(var3)(var24);
                var24 = var24.IconSizes;
                var24 = var24.SMALL;
                var17.size = var24;
                var21 = var22.bind(var3)(var21, var17);
                var17 = new Array(3);
                var17[0] = var21;
                var21 = _closure1_slot6;
                var22 = 15;
                var18 = var18[var22];
                var18 = var20.bind(var3)(var18);
                var20 = var18.Text;
                var18 = {
                    'variant': 'text-sm/medium',
                    'color': 'always-white'
                };
                var24 = var9.consoleText;
                var18.style = var24;
                var18.children = var23;
                var18 = var21.bind(var3)(var20, var18);
                var17[1] = var18;
                var18 = null;
                if (!var19) {
                    _fun112151_ip = 906;
                    continue _fun112151
                }
            case 745:
                var21 = _closure1_slot6;
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var19 = 16;
                var19 = var29[var19];
                var19 = var28.bind(var3)(var19);
                var20 = var19.PressableOpacity;
                var19 = {};
                var23 = 4;
                var19.hitSlop = var23;
                var23 = 17;
                var23 = var29[var23];
                var23 = var28.bind(var3)(var23);
                var23 = var23.disconnectRemote;
                var19.onPress = var23;
                var24 = _closure1_slot6;
                var22 = var29[var22];
                var22 = var28.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {
                    'variant': 'text-sm/medium',
                    'color': 'always-white'
                };
                var25 = 18;
                var26 = var29[var25];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var29[var25];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25["ETE/oC"];
                var25 = var26.bind(var27)(var25);
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var19.children = var22;
                var18 = var21.bind(var3)(var20, var19);
            case 906:
                var17[2] = var18;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var4.children = var11;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = var11[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var12 = var9.blockingControlCover;
                var9 = new Array(2);
                var9[0] = var12;
                var9[1] = var10;
                var5.style = var9;
                var10 = _closure1_slot6;
                var9 = _closure1_slot0;
                var8 = 19;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.VoicePanelVisualEffectView;
                var8 = {};
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var4;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var9 = true;
    var3.value = var9;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var5 = var7[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var18 = var3.MODE_CHANGE_PHYSICS;
    var3 = 2;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.EDGE_GUTTER;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var13 = var3.CONTROLS_HEIGHT;
    var _closure1_slot5 = var13;
    var3 = 4;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.jsx;
    var _closure1_slot6 = var5;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var7[var3];
    var11 = var6.bind(var0)(var3);
    var10 = var11.createStyles;
    var5 = {};
    var12 = 'hidden';
    var3 = {
        'zIndex': 1,
        'position': 'absolute',
        'bottom': 0,
        'overflow': 'hidden',
        'left': -0.5,
        'right': 0,
        'alignItems': 'center'
    };
    var5.consoleParentContainer = var3;
    var3 = {};
    var14 = 6;
    var16 = var7[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xxl;
    var3.borderRadius = var16;
    var3.overflow = var12;
    var5.consoleContainer = var3;
    var3 = 36;
    var12 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'height': 36,
        'marginHorizontal': 18
    };
    var5.consoleItemContainer = var12;
    var12 = {
        'textAlign': 'left',
        'marginStart': 4,
        'flex': 1
    };
    var5.consoleText = var12;
    var12 = {
        'position': 'absolute',
        'bottom': 0,
        'borderRadius': null,
        'flex': 1,
        'height': null,
        'overflow': 'hidden'
    };
    var14 = var7[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xxl;
    var12.borderRadius = var14;
    var12.height = var13;
    var5.blockingControlCover = var12;
    var5 = var10.bind(var11)(var5);
    var _closure1_slot8 = var5;
    var5 = {};
    var19 = var5;
    var8 = copyDataProperties(var19, var18);
    var8 = 'overshootClamping';
    var5[var8] = var9;
    var _closure1_slot9 = var5;
    var5 = {};
    var8 = "function VoicePanelConsoleStatusTsx1(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}";
    var5.code = var8;
    var _closure1_slot10 = var5;
    var5 = {};
    var8 = 'function VoicePanelConsoleStatusTsx2(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}';
    var5.code = var8;
    var _closure1_slot11 = var5;
    var5 = {};
    var8 = 'function VoicePanelConsoleStatusTsx3(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}';
    var5.code = var8;
    var _closure1_slot12 = var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.CONSOLE_STATUS_HEIGHT = var3;
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: renderVoicePanelConsoleStatus, environment: var1
        var4 = _closure1_slot6;
        var3 = _closure1_slot13;
        var2 = {};
        var6 = arg1;
        var7 = var2;
        var0 = copyDataProperties(var7, var6);
        var1 = arg2;
        var0 = 'state';
        var2[var0] = var1;
        var1 = arg3;
        var0 = 'cleanUp';
        var2[var0] = var1;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var2.renderVoicePanelConsoleStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11838, 11841, 11836, 33, 1297, 671, 11837, 14363, 3679, 3987, 14369, 4040, 6418, 4045, 3901, 4864, 8256, 1234, 14367, 2]);