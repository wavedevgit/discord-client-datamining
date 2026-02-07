// modules/messages/native/DMMessageStickerGreeting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.jsxs;
    var _closure1_slot12 = var6;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun90178: for (var _fun90178_ip = 0;;) switch (_fun90178_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = {
                    'backgroundColor': null,
                    'alignItems': 'center',
                    'paddingHorizontal': 16,
                    'paddingBottom': 16,
                    'paddingTop': 8
                };
                var3 = null;
                if (!(var3 == var2)) {
                    _fun90178_ip = 61;
                    continue _fun90178
                }
            case 25:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 10;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.colors;
                var2 = var3.BACKGROUND_BASE_LOWER;
            case 61:
                var1.backgroundColor = var2;
                var2 = 16;
                var0.container = var1;
                var1 = {};
                var1.paddingBottom = var2;
                var0.stickerContainer = var1;
                var1 = {
                    'flexDirection': 'row',
                    'backgroundColor': null,
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'gap': 8,
                    'height': 48,
                    'paddingHorizontal': 16
                };
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 10;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.BACKGROUND_BASE_LOWEST;
                var1.backgroundColor = var6;
                var6 = var5[var2];
                var6 = var4.bind(var3)(var6);
                var6 = var6.radii;
                var6 = var6.xxl;
                var1.borderRadius = var6;
                var0.toastContainer = var1;
                var1 = {};
                var6 = 20;
                var1.lineHeight = var6;
                var0.toastContent = var1;
                var1 = {
                    'color': null,
                    'marginTop': 16,
                    'fontSize': 14,
                    'lineHeight': 16
                };
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.unsafe_rawColors;
                var2 = var2.RED_400;
                var1.color = var2;
                var0.error = var1;
                var1 = {
                    'position': 'absolute',
                    'right': 0,
                    'left': 0,
                    'top': 0,
                    'height': 30
                };
                var0.gradient = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GradientPercentage;
    var3 = var3.END;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = "function DMMessageStickerGreetingTsx1(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;const generateAnimationConfig=function(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));};return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}";
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/DMMessageStickerGreeting.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90179: for (var _fun90179_ip = 0;;) switch (_fun90179_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var _closure2_slot0 = var5;
                var12 = var0.hasInputText;
                var _closure2_slot1 = var12;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 11;
                var1 = var8[var0];
                var6 = var3.bind(var4)(var1);
                var2 = var6.useGradientValue;
                var1 = _closure1_slot15;
                var2 = var2.bind(var6)(var1);
                var1 = _closure1_slot14;
                var18 = var1.bind(var4)(var2);
                var _closure2_slot2 = var18;
                var1 = 19;
                var2 = var8[var1];
                var10 = var3.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var7
                    var2 = _closure1_slot8;
                    var1 = var2.getMessages;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var9 = var9.bind(var10)(var6, var2);
                var _closure2_slot3 = var9;
                var2 = var8[var1];
                var10 = var3.bind(var4)(var2);
                var6 = var10.useStateFromStores;
                var2 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var7
                    var2 = _closure1_slot9;
                    var1 = var2.getUser;
                    var3 = _closure2_slot0;
                    var0 = var3.getRecipientId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var10)(var3, var2);
                var3 = _closure1_slot1;
                var2 = 20;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useName;
                var13 = var2.bind(var3)(var6);
                var15 = null;
                if (!(var15 == var13)) {
                    _fun90179_ip = 260;
                    continue _fun90179
                }
            case 203:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 18;
                var3 = var10[var2];
                var3 = var8.bind(var4)(var3);
                var6 = var3.intl;
                var3 = var6.string;
                var2 = var10[var2];
                var2 = var8.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.y1Wu2f;
                var13 = var3.bind(var6)(var2);
            case 260:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var25 = 18;
                var2 = var6[var25];
                var2 = var3.bind(var4)(var2);
                var11 = var2.intl;
                var10 = var11.formatToPlainString;
                var2 = var6[var25];
                var2 = var3.bind(var4)(var2);
                var2 = var2.t;
                var8 = var2.m0zYbV;
                var2 = {};
                var2.username = var13;
                var17 = var10.bind(var11)(var8, var2);
                var2 = 21;
                var2 = var6[var2];
                var8 = var3.bind(var4)(var2);
                var2 = var8.useShowConvoStarterInDM;
                var2 = var2.bind(var8)(var5);
                _closure2_slot4 = var2;
                var1 = var6[var1];
                var13 = var3.bind(var4)(var1);
                var11 = var13.useStateFromStores;
                var1 = _closure1_slot7;
                var10 = new Array(1);
                var10[0] = var1;
                var8 = new Array(1);
                var8[0] = var2;
                var1 = function() { // Environment: var7
                    _fun90182: for (var _fun90182_ip = 0;;) switch (_fun90182_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = null;
                            if (!var1) {
                                _fun90182_ip = 36;
                                continue _fun90182
                            }
                        case 12:
                            var3 = _closure1_slot7;
                            var2 = var3.getStickerById;
                            var1 = '749054660769218631';
                            var0 = var2.bind(var3)(var1);
                        case 36:
                            return var0;
                    }
                };
                var22 = var11.bind(var13)(var10, var1, var8);
                var11 = _closure1_slot5;
                var10 = var11.useEffect;
                var8 = new Array(1);
                var8[0] = var2;
                var1 = function() { // Environment: var7
                    _fun90183: for (var _fun90183_ip = 0;;) switch (_fun90183_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun90183_ip = 55;
                                continue _fun90183
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 22;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.fetchStickerPack;
                            var1 = '847199849233514549';
                            var0 = true;
                            var0 = var2.bind(var3)(var1, var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var10.bind(var11)(var1, var8);
                var1 = function arg0() {
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot5;
                    var5 = var3.useState;
                    var2 = null;
                    var2 = var5.bind(var3)(var2);
                    var10 = _closure1_slot4;
                    var7 = undefined;
                    var9 = 2;
                    var2 = var10.bind(var7)(var2, var9);
                    var6 = 0;
                    var5 = var2[var6];
                    var _closure3_slot1 = var5;
                    var8 = 1;
                    var2 = var2[var8];
                    var _closure3_slot2 = var2;
                    var11 = var3.useState;
                    var2 = false;
                    var2 = var11.bind(var3)(var2);
                    var2 = var10.bind(var7)(var2, var9);
                    var6 = var2[var6];
                    var _closure3_slot3 = var6;
                    var2 = var2[var8];
                    var _closure3_slot4 = var2;
                    var9 = var3.useEffect;
                    var2 = var4.id;
                    var8 = new Array(1);
                    var8[0] = var2;
                    var2 = function() { // Environment: var0
                        var2 = _closure3_slot2;
                        var0 = undefined;
                        var1 = null;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2 = var9.bind(var3)(var2, var8);
                    var2 = var3.useCallback;
                    var1 = _closure1_slot3;
                    var0 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun90187: for (var _fun90187_ip = 0;;) switch (_fun90187_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun90187_ip = 351;
                                        continue _fun90187
                                    }
                                case 10:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = _closure3_slot3;
                                    if (var4) {
                                        _fun90187_ip = 348;
                                        continue _fun90187
                                    }
                                case 27:
                                    var6 = _closure3_slot4;
                                    var4 = true;
                                    var4 = var6.bind(var1)(var4);
                                    var3 = function arg0() {
                                        _fun90188: for (var _fun90188_ip = 0;;) switch (_fun90188_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var1 = _closure3_slot1;
                                                if (!(var1 !== var4)) {
                                                    _fun90188_ip = 25;
                                                    continue _fun90188
                                                }
                                            case 14:
                                                var1 = _closure3_slot2;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var4);
                                            case 25:
                                                var5 = _closure1_slot1;
                                                var6 = _closure1_slot2;
                                                var0 = 14;
                                                var1 = var6[var0];
                                                var0 = undefined;
                                                var3 = var5.bind(var0)(var1);
                                                var2 = var3.open;
                                                var1 = {};
                                                var7 = 'HANDLE_WAVE_PRESS_TOAST';
                                                var1.key = var7;
                                                var1.content = var4;
                                                var4 = 15;
                                                var4 = var6[var4];
                                                var4 = var5.bind(var0)(var4);
                                                var1.icon = var4;
                                                var1 = var2.bind(var3)(var1);
                                                return var0;
                                        }
                                    };
                                    var6 = _closure3_slot1;
                                    var4 = null;
                                    if (!(var4 === var6)) {
                                        _fun90187_ip = 325;
                                        continue _fun90187
                                    }
                                case 60: // try_start_0
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var4 = 16;
                                    var4 = var8[var4];
                                    var9 = var7.bind(var1)(var4);
                                    var8 = var9.sendGreetMessage;
                                    var4 = _closure3_slot0;
                                    var7 = var4.id;
                                    var4 = '749054660769218631';
                                    var4 = var8.bind(var9)(var7, var4);
                                    SaveGenerator(address = 114);
                                case 112:
                                    return var4;
                                case 114:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                                    if (var7) {
                                        _fun90187_ip = 208;
                                        continue _fun90187
                                    }
                                case 120:
                                    var8 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var7 = 17;
                                    var7 = var9[var7];
                                    var9 = var8.bind(var1)(var7);
                                    var8 = var9.track;
                                    var6 = _closure1_slot10;
                                    var7 = var6.DM_EMPTY_ACTION;
                                    var6 = {};
                                    var10 = _closure3_slot0;
                                    var11 = var10.id;
                                    var6.channel_id = var11;
                                    var10 = var10.type;
                                    var6.channel_type = var10;
                                    var10 = 'Wave';
                                    var6.source = var10;
                                    var10 = 'Send wave';
                                    var6.type = var10;
                                    var6 = var8.bind(var9)(var7, var6);
                                case 206: // try_end0
                                    _fun90187_ip = 312;
                                    continue _fun90187;
                                case 208:
                                    return var4;
                                case 211: // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var5 = var6;
                                    var6 = var6.ok;
                                    var4 = var6;
                                    if (var6) {
                                        _fun90187_ip = 243;
                                        continue _fun90187
                                    }
                                case 228:
                                    var6 = var5.status;
                                    var5 = 429;
                                    var4 = var5 !== var6;
                                case 243:
                                    if (var4) {
                                        _fun90187_ip = 312;
                                        continue _fun90187
                                    }
                                case 246:
                                    var5 = var3;
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var4 = 18;
                                    var6 = var9[var4];
                                    var6 = var8.bind(var1)(var6);
                                    var7 = var6.intl;
                                    var6 = var7.string;
                                    var4 = var9[var4];
                                    var4 = var8.bind(var1)(var4);
                                    var4 = var4.t;
                                    var4 = var4.Whhv4w;
                                    var4 = var6.bind(var7)(var4);
                                    var4 = var5.bind(var1)(var4);
                                case 312:
                                    var5 = _closure3_slot4;
                                    var4 = false;
                                    var4 = var5.bind(var1)(var4);
                                    _fun90187_ip = 348;
                                    continue _fun90187;
                                case 325:
                                    var5 = _closure3_slot4;
                                    var4 = false;
                                    var4 = var5.bind(var1)(var4);
                                    var2 = _closure3_slot1;
                                    var2 = var3.bind(var1)(var2);
                                    return var2;
                                case 348:
                                    return var1;
                                case 351:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var1.bind(var7)(var0);
                    var0 = new Array(4);
                    var0[0] = var6;
                    var0[1] = var5;
                    var5 = var4.id;
                    var0[2] = var5;
                    var4 = var4.type;
                    var0[3] = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var13 = var1.bind(var4)(var5);
                var1 = function() {
                    var4 = _closure1_slot5;
                    var3 = var4.useState;
                    var2 = false;
                    var5 = var3.bind(var4)(var2);
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var0 = 2;
                    var3 = var3.bind(var2)(var5, var0);
                    var0 = 0;
                    var2 = var3[var0];
                    var0 = 1;
                    var5 = var3[var0];
                    var _closure3_slot0 = var5;
                    var0 = {};
                    var0.isRendered = var2;
                    var3 = var4.useCallback;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    var0.setIsRendered = var1;
                    return var0;
                };
                var1 = var1.bind(var4)();
                var16 = var1.isRendered;
                _closure2_slot5 = var16;
                var5 = var1.setIsRendered;
                var1 = 23;
                var8 = var6[var1];
                var10 = var3.bind(var4)(var8);
                var8 = var10.useAnimatedStyle;
                var7 = function() {
                    _fun90191: for (var _fun90191_ip = 0;;) switch (_fun90191_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var1 = var1.gradient;
                            var1 = var1.height;
                            var5 = _closure2_slot5;
                            if (!var5) {
                                _fun90191_ip = 32;
                                continue _fun90191
                            }
                        case 25:
                            var2 = _closure2_slot1;
                            var5 = !var2;
                        case 32:
                            var3 = 0;
                            if (!var5) {
                                _fun90191_ip = 61;
                                continue _fun90191
                            }
                        case 37:
                            var0 = _closure2_slot3;
                            var2 = 180;
                            if (!var0) {
                                _fun90191_ip = 50;
                                continue _fun90191
                            }
                        case 47:
                            var2 = 72;
                        case 50:
                            var0 = 1;
                            var0 = var2 - var0;
                            var3 = var0 + var1;
                        case 61:
                            var2 = function arg0() {
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 23;
                                var0 = var8[var0];
                                var6 = undefined;
                                var3 = var7.bind(var6)(var0);
                                var2 = var3.withDelay;
                                var0 = 24;
                                var0 = var8[var0];
                                var5 = var7.bind(var6)(var0);
                                var4 = var5.withTiming;
                                var1 = {};
                                var0 = 25;
                                var0 = var8[var0];
                                var0 = var7.bind(var6)(var0);
                                var0 = var0.STANDARD_EASING;
                                var1.easing = var0;
                                var0 = 250;
                                var1.duration = var0;
                                var0 = arg0;
                                var1 = var4.bind(var5)(var0, var1);
                                var0 = 300;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = {
                                'justifyContent': 'flex-end',
                                'overflow': 'hidden'
                            };
                            var4 = 0;
                            if (!var5) {
                                _fun90191_ip = 92;
                                continue _fun90191
                            }
                        case 89:
                            var4 = -var1;
                        case 92:
                            var1 = undefined;
                            var4 = var2.bind(var1)(var4);
                            var0.marginTop = var4;
                            var1 = var2.bind(var1)(var3);
                            var0.height = var1;
                            return var0;
                    }
                };
                var11 = {};
                var11.styles = var18;
                var11.isRendered = var16;
                var11.hasInputText = var12;
                var11.hasMessages = var9;
                var12 = 72;
                var11.HEIGHT_COMPACT = var12;
                var12 = 180;
                var11.HEIGHT_FULL = var12;
                var12 = var6[var1];
                var12 = var3.bind(var4)(var12);
                var12 = var12.withDelay;
                var11.withDelay = var12;
                var21 = 24;
                var12 = var6[var21];
                var12 = var3.bind(var4)(var12);
                var12 = var12.withTiming;
                var11.withTiming = var12;
                var12 = 25;
                var12 = var6[var12];
                var12 = var3.bind(var4)(var12);
                var12 = var12.STANDARD_EASING;
                var11.STANDARD_EASING = var12;
                var7.__closure = var11;
                var11 = 14002474476449.0;
                var7.__workletHash = var11;
                var11 = _closure1_slot16;
                var7.__initData = var11;
                var8 = var8.bind(var10)(var7);
                var0 = var6[var0];
                var10 = var3.bind(var4)(var0);
                var7 = var10.useGradientValue;
                var0 = _closure1_slot15;
                var0 = var7.bind(var10)(var0);
                var7 = 12;
                var7 = var6[var7];
                var10 = var3.bind(var4)(var7);
                var7 = var10.useToken;
                if (!(var15 == var0)) {
                    _fun90179_ip = 713;
                    continue _fun90179
                }
            case 682:
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 10;
                var11 = var16[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.colors;
                var0 = var11.BACKGROUND_BASE_LOWER;
            case 713:
                var0 = var7.bind(var10)(var0);
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 13;
                var7 = var11[var7];
                var11 = var10.bind(var4)(var7);
                var10 = var11.hexWithOpacity;
                var7 = 0;
                var10 = var10.bind(var11)(var0, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var7[1] = var0;
                var0 = 26;
                var0 = var6[var0];
                var6 = var3.bind(var4)(var0);
                var3 = var6.useShouldAnimateSticker;
                var0 = false;
                var20 = var3.bind(var6)(var0);
                var0 = null;
                if (!var2) {
                    _fun90179_ip = 1337;
                    continue _fun90179
                }
            case 797:
                var3 = _closure1_slot12;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = var10[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var1.style = var8;
                var1.onLayout = var5;
                var8 = _closure1_slot11;
                var5 = 27;
                var5 = var10[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var10 = var18.gradient;
                var5.style = var10;
                var5.colors = var7;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var7 = _closure1_slot6;
                var6 = {};
                var10 = var18.container;
                var6.style = var10;
                var12 = _closure1_slot12;
                if (var9) {
                    _fun90179_ip = 1075;
                    continue _fun90179
                }
            case 905:
                var10 = _closure1_slot13;
                var9 = {};
                var11 = var15 != var22;
                var16 = null;
                if (!var11) {
                    _fun90179_ip = 995;
                    continue _fun90179
                }
            case 920:
                var23 = _closure1_slot11;
                var19 = _closure1_slot6;
                var11 = {};
                var24 = var18.stickerContainer;
                var11.style = var24;
                var26 = _closure1_slot1;
                var27 = _closure1_slot2;
                var24 = 29;
                var24 = var27[var24];
                var26 = var26.bind(var4)(var24);
                var24 = {};
                var24.sticker = var22;
                var27 = 100;
                var24.size = var27;
                var24.animated = var20;
                var24 = var23.bind(var4)(var26, var24);
                var11.children = var24;
                var16 = var23.bind(var4)(var19, var11);
            case 995:
                var11 = new Array(2);
                var11[0] = var16;
                var23 = _closure1_slot11;
                var19 = _closure1_slot0;
                var24 = _closure1_slot2;
                var16 = 31;
                var16 = var24[var16];
                var16 = var19.bind(var4)(var16);
                var19 = var16.Button;
                var16 = {};
                var16.text = var17;
                var16.onPress = var13;
                var24 = true;
                var16.shrink = var24;
                var16 = var23.bind(var4)(var19, var16);
                var11[1] = var16;
                var9.children = var11;
                var9 = var12.bind(var4)(var10, var9);
                _fun90179_ip = 1313;
                continue _fun90179;
            case 1075:
                var24 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 28;
                var10 = var16[var10];
                var10 = var24.bind(var4)(var10);
                var11 = var10.PressableOpacity;
                var10 = {};
                var19 = var18.toastContainer;
                var10.style = var19;
                var19 = 'button';
                var10.accessibilityRole = var19;
                var19 = var16[var25];
                var19 = var24.bind(var4)(var19);
                var23 = var19.intl;
                var19 = var23.string;
                var16 = var16[var25];
                var16 = var24.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.pJObYI;
                var16 = var19.bind(var23)(var16);
                var10.accessibilityLabel = var16;
                var10.onPress = var13;
                var13 = var15 != var22;
                var15 = null;
                if (!var13) {
                    _fun90179_ip = 1230;
                    continue _fun90179
                }
            case 1184:
                var19 = _closure1_slot11;
                var16 = _closure1_slot1;
                var23 = _closure1_slot2;
                var13 = 29;
                var13 = var23[var13];
                var16 = var16.bind(var4)(var13);
                var13 = {};
                var13.sticker = var22;
                var13.size = var21;
                var13.animated = var20;
                var15 = var19.bind(var4)(var16, var13);
            case 1230:
                var13 = new Array(2);
                var13[0] = var15;
                var16 = _closure1_slot11;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 30;
                var14 = var19[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {};
                var18 = var18.toastContent;
                var14.style = var18;
                var18 = 'text-md/bold';
                var14.variant = var18;
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 1313:
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1337:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 5645, 4251, 1621, 660, 33, 1297, 671, 3197, 3153, 3241, 3150, 10553, 6593, 795, 1234, 566, 3237, 11721, 9445, 3721, 4097, 4886, 9444, 4098, 4904, 9457, 3942, 4084, 2]);