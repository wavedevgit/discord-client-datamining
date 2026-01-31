// modules/voice_panel/native/card/VoicePanelCardView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: getCardKey, environment: var1
        var0 = arg0;
        var4 = var0.type;
        var3 = var0.id;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = '-';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: renderCard, environment: var1
        var4 = _closure1_slot13;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 10;
        var0 = var2[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = {};
        var0 = arg1;
        var1.item = var0;
        var0 = arg2;
        var1.transitionState = var0;
        var0 = arg3;
        var1.cleanUp = var0;
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0) { // Original name: CardContentFreezer, environment: var1
        var1 = arg0;
        var4 = var1.children;
        var _closure2_slot0 = var4;
        var1 = function() { // Original name: useLazyContentFreeze, environment: var0
            _fun111138: for (var _fun111138_ip = 0;;) switch (_fun111138_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 17;
                    var2 = var6[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.usePIPState;
                    var2 = var2.bind(var3)();
                    var2 = var2.mode;
                    var _closure3_slot0 = var2;
                    var7 = _closure1_slot4;
                    var5 = var7.useRef;
                    var3 = _closure1_slot10;
                    var3 = var3.IN_APP;
                    var3 = var2 === var3;
                    var3 = var5.bind(var7)(var3);
                    var _closure3_slot1 = var3;
                    var8 = _closure1_slot4;
                    var7 = var8.useState;
                    var5 = {};
                    var8 = var7.bind(var8)(var5);
                    var7 = _closure1_slot3;
                    var5 = 2;
                    var7 = var7.bind(var4)(var8, var5);
                    var5 = 1;
                    var5 = var7[var5];
                    var _closure3_slot2 = var5;
                    var8 = _closure1_slot4;
                    var7 = var8.useEffect;
                    var5 = new Array(1);
                    var5[0] = var2;
                    var1 = function() { // Environment: var1
                        _fun111139: for (var _fun111139_ip = 0;;) switch (_fun111139_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var2 = _closure1_slot10;
                                var2 = var2.IN_APP;
                                if (!(var3 !== var2)) {
                                    _fun111139_ip = 42;
                                    continue _fun111139
                                }
                            case 26:
                                var2 = _closure3_slot1;
                                var1 = false;
                                var2.current = var1;
                                var1 = undefined;
                                return var1;
                            case 42:
                                var1 = global;
                                var4 = var1.setTimeout;
                                var3 = undefined;
                                var2 = function() { // Environment: var0
                                    _fun111140: for (var _fun111140_ip = 0;;) switch (_fun111140_ip) {
                                        case 0:
                                            var1 = _closure3_slot1;
                                            var1 = var1.current;
                                            if (var1) {
                                                _fun111140_ip = 40;
                                                continue _fun111140
                                            }
                                        case 15:
                                            var2 = _closure3_slot1;
                                            var1 = true;
                                            var2.current = var1;
                                            var2 = _closure3_slot2;
                                            var1 = undefined;
                                            var0 = {};
                                            var0 = var2.bind(var1)(var0);
                                        case 40:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = 700;
                                var1 = var4.bind(var3)(var2, var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = global;
                                    var2 = var0.clearTimeout;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                return var0;
                        }
                    };
                    var1 = var7.bind(var8)(var1, var5);
                    var5 = _closure1_slot1;
                    var1 = 18;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.bind(var4)(var3);
                    var0 = _closure1_slot10;
                    var0 = var0.IN_APP;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun111138_ip = 189;
                        continue _fun111138
                    }
                case 186:
                    var0 = var1;
                case 189:
                    return var0;
            }
        };
        var2 = undefined;
        var5 = var1.bind(var2)();
        var _closure2_slot1 = var5;
        var1 = function(arg0) { // Original name: useSpacerStyles, environment: var0
            var5 = arg0;
            var _closure3_slot0 = var5;
            var4 = _closure1_slot4;
            var2 = var4.useContext;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 13;
            var1 = var10[var1];
            var9 = undefined;
            var1 = var11.bind(var9)(var1);
            var1 = var2.bind(var4)(var1);
            var15 = var1.connected;
            var _closure3_slot1 = var15;
            var17 = var1.controlsSpecs;
            var _closure3_slot2 = var17;
            var16 = var1.safeArea;
            var _closure3_slot3 = var16;
            var14 = var1.contentDimensions;
            var _closure3_slot4 = var14;
            var13 = var1.windowDimensions;
            var _closure3_slot5 = var13;
            var12 = var1.mode;
            var _closure3_slot6 = var12;
            var7 = var1.focused;
            var _closure3_slot7 = var7;
            var6 = var1.wrapperOffset;
            var _closure3_slot8 = var6;
            var8 = _closure1_slot0;
            var1 = 11;
            var1 = var10[var1];
            var2 = var8.bind(var9)(var1);
            var1 = var2.useAnimatedStyle;
            var0 = function() { // Original name: o, environment: var0
                _fun111143: for (var _fun111143_ip = 0;;) switch (_fun111143_ip) {
                    case 0:
                        var1 = _closure3_slot2;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        var11 = var0.mode;
                        var0 = _closure1_slot9;
                        var4 = var0.HIDDEN;
                        var0 = global;
                        var7 = var0.Math;
                        var5 = var7.max;
                        var2 = _closure3_slot3;
                        var0 = var2.get;
                        var0 = var0.bind(var2)();
                        var1 = var0.bottom;
                        var0 = _closure1_slot11;
                        var14 = var5.bind(var7)(var1, var0);
                        var1 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 14;
                        var0 = var5[var0];
                        var10 = undefined;
                        var1 = var1.bind(var10)(var0);
                        var0 = var2.get;
                        var0 = var0.bind(var2)();
                        var0 = var1.bind(var10)(var0);
                        var15 = var0.height;
                        var0 = var0.paddingTop;
                        var2 = _closure3_slot1;
                        var1 = var2.get;
                        var5 = var1.bind(var2)();
                        var2 = 0;
                        var1 = 1;
                        var8 = 0;
                        var9 = var1;
                        var7 = 0;
                        if (!var5) {
                            _fun111143_ip = 727;
                            continue _fun111143
                        }
                    case 153:
                        var12 = var2 + var0;
                        var13 = _closure3_slot4;
                        var5 = var13.get;
                        var5 = var5.bind(var13)();
                        var5 = var5.height;
                        var5 = var12 + var5;
                        var5 = var5 + var14;
                        var13 = _closure3_slot5;
                        var12 = var13.get;
                        var12 = var12.bind(var13)();
                        var12 = var12.height;
                        var13 = var5 - var12;
                        var12 = 8;
                        if (!(var13 < var12)) {
                            _fun111143_ip = 230;
                            continue _fun111143
                        }
                    case 212:
                        var13 = _closure3_slot5;
                        var12 = var13.get;
                        var12 = var12.bind(var13)();
                        var5 = var12.height;
                    case 230:
                        var13 = _closure3_slot6;
                        var12 = var13.get;
                        var13 = var12.bind(var13)();
                        var12 = _closure1_slot8;
                        var12 = var12.PIP;
                        var8 = var5;
                        var9 = var1;
                        var7 = 0;
                        if (!(var13 !== var12)) {
                            _fun111143_ip = 727;
                            continue _fun111143
                        }
                    case 268:
                        var8 = var5;
                        var9 = var1;
                        var7 = 0;
                        if (!(var11 !== var4)) {
                            _fun111143_ip = 727;
                            continue _fun111143
                        }
                    case 283:
                        var11 = _closure3_slot7;
                        var4 = var11.get;
                        var11 = var4.bind(var11)();
                        var4 = null;
                        var4 = var4 == var11;
                        var8 = var5;
                        var9 = var1;
                        var7 = 0;
                        if (!var4) {
                            _fun111143_ip = 727;
                            continue _fun111143
                        }
                    case 316:
                        var11 = var5 - var15;
                        var4 = _closure1_slot11;
                        var11 = var11 - var4;
                        var13 = _closure3_slot2;
                        var4 = var13.get;
                        var4 = var4.bind(var13)();
                        var4 = var4.height;
                        var4 = var11 - var4;
                        var12 = var4 - var14;
                        var11 = _closure3_slot5;
                        var4 = var11.get;
                        var4 = var4.bind(var11)();
                        var4 = var4.height;
                        var4 = var4 - var0;
                        var16 = var4 - var14;
                        var4 = var11.get;
                        var4 = var4.bind(var11)();
                        var4 = var4.height;
                        var11 = var4 - var15;
                        var4 = var13.get;
                        var4 = var4.bind(var13)();
                        var4 = var4.height;
                        var4 = var11 - var4;
                        var18 = var4 - var14;
                        var11 = _closure3_slot4;
                        var4 = var11.get;
                        var4 = var4.bind(var11)();
                        var4 = var4.height;
                        if (!(!(var4 > var12))) {
                            _fun111143_ip = 487;
                            continue _fun111143
                        }
                    case 442:
                        var13 = _closure3_slot5;
                        var4 = var13.get;
                        var4 = var4.bind(var13)();
                        var11 = var4.width;
                        var4 = 48;
                        var11 = var11 - var4;
                        var4 = var13.get;
                        var4 = var4.bind(var13)();
                        var4 = var4.width;
                        var4 = var11 / var4;
                        _fun111143_ip = 509;
                        continue _fun111143;
                    case 487:
                        var13 = _closure3_slot4;
                        var11 = var13.get;
                        var11 = var11.bind(var13)();
                        var11 = var11.height;
                        var4 = var12 / var11;
                    case 509:
                        var13 = _closure3_slot4;
                        var11 = var13.get;
                        var11 = var11.bind(var13)();
                        var11 = var11.height;
                        var11 = var11 < var16;
                        if (!var11) {
                            _fun111143_ip = 556;
                            continue _fun111143
                        }
                    case 534:
                        var17 = _closure3_slot4;
                        var13 = var17.get;
                        var13 = var13.bind(var17)();
                        var13 = var13.height;
                        var11 = var13 > var18;
                    case 556:
                        var13 = var15;
                        if (!var11) {
                            _fun111143_ip = 629;
                            continue _fun111143
                        }
                    case 562:
                        var19 = _closure3_slot4;
                        var11 = var19.get;
                        var11 = var11.bind(var19)();
                        var11 = var11.height;
                        var11 = var16 - var11;
                        var17 = 2;
                        var16 = var11 / var17;
                        var11 = var19.get;
                        var11 = var11.bind(var19)();
                        var11 = var11.height;
                        var11 = var11 * var4;
                        var11 = var18 - var11;
                        var11 = var11 / var17;
                        var11 = var16 - var11;
                        var11 = var11 * var4;
                        var13 = var15 - var11;
                    case 629:
                        var15 = _closure3_slot4;
                        var11 = var15.get;
                        var11 = var11.bind(var15)();
                        var11 = var11.height;
                        if (!(!(var11 > var12))) {
                            _fun111143_ip = 694;
                            continue _fun111143
                        }
                    case 651:
                        var15 = _closure3_slot5;
                        var11 = var15.get;
                        var11 = var11.bind(var15)();
                        var11 = var11.height;
                        var11 = var11 - var0;
                        var11 = var11 - var14;
                        var12 = var12 - var11;
                        var11 = 2;
                        var11 = var12 / var11;
                        var11 = var13 + var11;
                        _fun111143_ip = 713;
                        continue _fun111143;
                    case 694:
                        var12 = var5 * var4;
                        var14 = var12 - var5;
                        var12 = 2;
                        var12 = var14 / var12;
                        var11 = var13 + var12;
                    case 713:
                        var0 = var0 * var4;
                        var7 = var11 - var0;
                        var8 = var5;
                        var9 = var4;
                    case 727:
                        var0 = {};
                        var4 = 'relative';
                        var0.position = var4;
                        var5 = _closure3_slot5;
                        var4 = var5.get;
                        var4 = var4.bind(var5)();
                        var4 = var4.width;
                        var0.width = var4;
                        var11 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var5 = 15;
                        var5 = var4[var5];
                        var5 = var11.bind(var10)(var5);
                        var5 = var5.bind(var10)(var8);
                        var0.height = var5;
                        var5 = {};
                        var8 = _closure1_slot0;
                        var11 = 16;
                        var4 = var4[var11];
                        var12 = var8.bind(var10)(var4);
                        var8 = var12.withSpring;
                        var13 = _closure3_slot8;
                        var4 = var13.get;
                        var4 = var4.bind(var13)();
                        var4 = var4.y;
                        var7 = var7 + var4;
                        var4 = var13.get;
                        var4 = var4.bind(var13)();
                        var4 = var4.gestureActive;
                        if (var4) {
                            _fun111143_ip = 884;
                            continue _fun111143
                        }
                    case 851:
                        var13 = _closure3_slot6;
                        var4 = var13.get;
                        var13 = var4.bind(var13)();
                        var4 = _closure1_slot8;
                        var4 = var4.PIP;
                        if (!(var13 !== var4)) {
                            _fun111143_ip = 884;
                            continue _fun111143
                        }
                    case 878:
                        var4 = _closure1_slot14;
                        _fun111143_ip = 888;
                        continue _fun111143;
                    case 884:
                        var4 = _closure1_slot7;
                    case 888:
                        var4 = var8.bind(var12)(var7, var4);
                        var5.translateY = var4;
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = {};
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var11];
                        var8 = var8.bind(var10)(var7);
                        var7 = var8.withSpring;
                        var6 = _closure1_slot14;
                        var6 = var7.bind(var8)(var9, var6);
                        var5.scale = var6;
                        var4[1] = var5;
                        var0.transform = var4;
                        var3 = _closure3_slot0;
                        if (!var3) {
                            _fun111143_ip = 963;
                            continue _fun111143
                        }
                    case 961:
                        var1 = 0;
                    case 963:
                        var0.opacity = var1;
                        return var0;
                }
            };
            var4 = {};
            var4.controlsSpecs = var17;
            var17 = _closure1_slot9;
            var4.VoicePanelControlsModes = var17;
            var4.safeArea = var16;
            var16 = _closure1_slot11;
            var4.EDGE_GUTTER = var16;
            var16 = 14;
            var16 = var10[var16];
            var16 = var11.bind(var9)(var16);
            var4.calculateVoicePanelHeaderSpecs = var16;
            var4.connected = var15;
            var4.contentDimensions = var14;
            var4.windowDimensions = var13;
            var4.mode = var12;
            var12 = _closure1_slot8;
            var4.VoicePanelModes = var12;
            var4.focused = var7;
            var7 = 15;
            var7 = var10[var7];
            var7 = var11.bind(var9)(var7);
            var4.roundToNearestPixel = var7;
            var7 = 16;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.withSpring;
            var4.withSpring = var7;
            var4.wrapperOffset = var6;
            var6 = _closure1_slot7;
            var4.LAYOUT_PHYSICS = var6;
            var6 = _closure1_slot14;
            var4.SCALE_PHYSICS = var6;
            var4.freeze = var5;
            var0.__closure = var4;
            var4 = 12535849569890.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot18;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var1.bind(var2)(var5);
        var _closure2_slot2 = var6;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot13;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var0 = 19;
            var0 = var12[var0];
            var2 = undefined;
            var1 = var8.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot2;
            var0.style = var4;
            var6 = _closure1_slot13;
            var5 = _closure1_slot0;
            var4 = 20;
            var4 = var12[var4];
            var4 = var5.bind(var2)(var4);
            var5 = var4.Freeze;
            var4 = {};
            var7 = _closure2_slot1;
            var4.freeze = var7;
            var9 = _closure1_slot13;
            var7 = 21;
            var7 = var12[var7];
            var8 = var8.bind(var2)(var7);
            var7 = {};
            var12 = false;
            var7.collapsable = var12;
            var11 = _closure1_slot5;
            var11 = var11.absoluteFill;
            var7.style = var11;
            var10 = _closure2_slot0;
            var7.children = var10;
            var7 = var9.bind(var2)(var8, var7);
            var4.children = var7;
            var4 = var6.bind(var2)(var5, var4);
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var8 = 0;
    var3 = var5[var8];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StyleSheet;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.UI_SHOW_HIDE_PHYSICS;
    var7 = var3.VOICE_PANEL_CHUNK_DIVISOR;
    var11 = var3.LAYOUT_PHYSICS;
    var _closure1_slot7 = var11;
    var3 = var3.VoicePanelModes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelPIPModes;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EDGE_GUTTER;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isUserParticipant;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot13 = var3;
    var3 = {};
    var14 = var3;
    var9 = copyDataProperties(var14, var13);
    var9 = 'mass';
    var3[var9] = var10;
    var10 = 1e-05;
    var9 = 'restSpeedThreshold';
    var3[var9] = var10;
    var _closure1_slot14 = var3;
    var3 = {};
    var3.start = var8;
    var3.end = var7;
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}';
    var3.code = var7;
    var _closure1_slot16 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardViewTsx2(newChunks,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks);}';
    var3.code = var7;
    var _closure1_slot17 = var3;
    var3 = {};
    var7 = "function VoicePanelCardViewTsx3(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get());if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return(windowDimensions.get().width-48)/windowDimensions.get().width;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}";
    var3.code = var7;
    var _closure1_slot18 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: VoicePanelCardView, environment: var1
        var1 = arg0;
        var4 = var1.viewableChunks;
        var5 = _closure1_slot4;
        var3 = var5.useContext;
        var8 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 13;
        var2 = var7[var2];
        var6 = undefined;
        var2 = var8.bind(var6)(var2);
        var2 = var3.bind(var5)(var2);
        var2 = var2.channelId;
        var _closure2_slot0 = var2;
        var3 = function(arg0) { // Original name: useViewableChunkState, environment: var0
            var12 = arg0;
            var _closure3_slot0 = var12;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var0 = _closure1_slot15;
            var3 = var2.bind(var3)(var0);
            var2 = _closure1_slot3;
            var10 = undefined;
            var0 = 2;
            var3 = var2.bind(var10)(var3, var0);
            var0 = 0;
            var0 = var3[var0];
            var2 = 1;
            var2 = var3[var2];
            var _closure3_slot1 = var2;
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var _closure4_slot0 = var0;
                var2 = _closure3_slot1;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun111148: for (var _fun111148_ip = 0;;) switch (_fun111148_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.start;
                            var2 = _closure4_slot0;
                            var2 = var2.start;
                            if (!(var3 === var2)) {
                                _fun111148_ip = 42;
                                continue _fun111148
                            }
                        case 24:
                            var3 = var0.end;
                            var2 = _closure4_slot0;
                            var2 = var2.end;
                            if (!(var3 !== var2)) {
                                _fun111148_ip = 46;
                                continue _fun111148
                            }
                        case 42:
                            var0 = _closure4_slot0;
                        case 46:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var2 = new Array(0);
            var7 = var4.bind(var6)(var3, var2);
            var _closure3_slot2 = var7;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 11;
            var2 = var11[var8];
            var4 = var9.bind(var10)(var2);
            var3 = var4.useAnimatedReaction;
            var2 = function() { // Original name: h, environment: var1
                var1 = _closure3_slot0;
                var0 = var1.get;
                var0 = var0.bind(var1)();
                return var0;
            };
            var6 = {};
            var6.viewableChunks = var12;
            var2.__closure = var6;
            var6 = 1074173860641.0;
            var2.__workletHash = var6;
            var6 = _closure1_slot16;
            var2.__initData = var6;
            var1 = function(arg0, arg1) { // Original name: s, environment: var1
                _fun111150: for (var _fun111150_ip = 0;;) switch (_fun111150_ip) {
                    case 0:
                        var2 = arg0;
                        var6 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 12;
                        var3 = var3[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.cheapWorkletShallowEqual;
                        var3 = null;
                        var7 = var3 != var6;
                        var3 = undefined;
                        if (!var7) {
                            _fun111150_ip = 51;
                            continue _fun111150
                        }
                    case 48:
                        var3 = var6;
                    case 51:
                        var3 = var4.bind(var5)(var2, var3);
                        if (var3) {
                            _fun111150_ip = 102;
                            continue _fun111150
                        }
                    case 60:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 11;
                        var1 = var4[var1];
                        var4 = var3.bind(var0)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure3_slot2;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var0)(var2);
                    case 102:
                        return var0;
                }
            };
            var6 = {};
            var12 = 12;
            var12 = var11[var12];
            var12 = var9.bind(var10)(var12);
            var12 = var12.cheapWorkletShallowEqual;
            var6.cheapWorkletShallowEqual = var12;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.runOnJS;
            var6.runOnJS = var8;
            var6.updateValueIfChange = var7;
            var1.__closure = var6;
            var6 = 13543715159803.0;
            var1.__workletHash = var6;
            var5 = _closure1_slot17;
            var1.__initData = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var8 = var3.bind(var6)(var4);
        var5 = _closure1_slot0;
        var3 = 22;
        var3 = var7[var3];
        var4 = var5.bind(var6)(var3);
        var3 = var4.useChunkedParticipants;
        var4 = var3.bind(var4)(var2, var8);
        var _closure2_slot1 = var4;
        var3 = 23;
        var3 = var7[var3];
        var8 = var5.bind(var6)(var3);
        var7 = var8.useStateFromStoresArray;
        var3 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var3;
        var5 = new Array(1);
        var5[0] = var2;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var1 = var2.getParticipants;
            var0 = _closure2_slot0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot12;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var7 = var7.bind(var8)(var6, var3, var5);
        var _closure2_slot2 = var7;
        var5 = _closure1_slot4;
        var3 = var5.useRef;
        var3 = var3.bind(var5)(var7);
        var _closure2_slot3 = var3;
        var6 = _closure1_slot4;
        var5 = var6.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var2;
        var2 = function() { // Environment: var0
            _fun111153: for (var _fun111153_ip = 0;;) switch (_fun111153_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var5 = 24;
                    var1 = var0[var5];
                    var0 = undefined;
                    var7 = var3.bind(var0)(var1);
                    var6 = var7.isEqual;
                    var3 = _closure2_slot3;
                    var4 = var3.current;
                    var3 = _closure2_slot2;
                    var3 = var6.bind(var7)(var4, var3);
                    if (var3) {
                        _fun111153_ip = 240;
                        continue _fun111153
                    }
                case 59:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var7 = var4.bind(var0)(var3);
                    var6 = var7.differenceWith;
                    var3 = _closure2_slot3;
                    var5 = var3.current;
                    var4 = _closure2_slot2;
                    var3 = function(arg0, arg1) { // Environment: var3
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = arg1;
                        var0 = var0.id;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var5 = var6.bind(var7)(var5, var4, var3);
                    var3 = var5.length;
                    var4 = 0;
                    var6 = var3 > var4;
                    var3 = null;
                    var8 = null;
                    if (!var6) {
                        _fun111153_ip = 138;
                        continue _fun111153
                    }
                case 129:
                    var4 = var5[var4];
                    var8 = var4.user;
                case 138:
                    if (!(var3 != var8)) {
                        _fun111153_ip = 240;
                        continue _fun111153
                    }
                case 142:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 25;
                    var2 = var9[var2];
                    var2 = var5.bind(var0)(var2);
                    var4 = var2.AccessibilityAnnouncer;
                    var3 = var4.announce;
                    var2 = 26;
                    var6 = var9[var2];
                    var6 = var5.bind(var0)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var2 = var9[var2];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.t;
                    var5 = var2["9NqwWZ"];
                    var2 = {};
                    var8 = var8.username;
                    var2.username = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                case 240:
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var2.current = var1;
                    return var0;
            }
        };
        var2 = var5.bind(var6)(var2, var3);
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot13;
            var2 = _closure1_slot21;
            var1 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 27;
            var4 = var4[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var5 = var4.TransitionGroup;
            var4 = {};
            var7 = _closure2_slot1;
            var4.items = var7;
            var7 = _closure1_slot20;
            var4.renderItem = var7;
            var6 = _closure1_slot19;
            var4.getItemKey = var6;
            var6 = 1000;
            var4.lazyCleanUpDelay = var6;
            var4 = var3.bind(var0)(var5, var4);
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/card/VoicePanelCardView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3907, 11771, 11769, 14213, 11774, 3482, 33, 14263, 3679, 5264, 11770, 11775, 13088, 4040, 14217, 4698, 6420, 4000, 13603, 14208, 566, 22, 3119, 1234, 3987, 2]);