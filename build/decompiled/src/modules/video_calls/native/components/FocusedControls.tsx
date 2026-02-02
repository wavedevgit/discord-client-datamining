// modules/video_calls/native/components/FocusedControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var0 = arg0;
        var10 = var0.header;
        var13 = var0.reveal;
        var _closure2_slot0 = var13;
        var8 = var0.isTouchingLeftScreenEdge;
        var0 = _closure1_slot9;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var5 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 6;
        var1 = var12[var0];
        var6 = var5.bind(var3)(var1);
        var4 = var6.useDerivedValue;
        var1 = function() {
            _fun68635: for (var _fun68635_ip = 0;;) switch (_fun68635_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = -54;
                    if (!var1) {
                        _fun68635_ip = 18;
                        continue _fun68635
                    }
                case 16:
                    var0 = 0;
                case 18:
                    return var0;
            }
        };
        var9 = {};
        var9.reveal = var13;
        var13 = 54;
        var9.FOCUSED_CONTROLS_HEADER_HEIGHT = var13;
        var1.__closure = var9;
        var9 = 15509217225804.0;
        var1.__workletHash = var9;
        var9 = _closure1_slot11;
        var1.__initData = var9;
        var14 = var4.bind(var6)(var1);
        var _closure2_slot1 = var14;
        var1 = _closure1_slot1;
        var4 = 7;
        var4 = var12[var4];
        var4 = var1.bind(var3)(var4);
        var9 = var4.bind(var3)();
        var4 = var12[var0];
        var6 = var5.bind(var3)(var4);
        var4 = var6.useAnimatedStyle;
        var2 = function() {
            var0 = {};
            var2 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 8;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.withTiming;
            var6 = _closure2_slot1;
            var3 = var6.get;
            var3 = var3.bind(var6)();
            var1 = _closure1_slot10;
            var1 = var4.bind(var5)(var3, var1);
            var2.translateY = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var0.transform = var1;
            return var0;
        };
        var13 = {};
        var15 = 8;
        var15 = var12[var15];
        var15 = var5.bind(var3)(var15);
        var15 = var15.withTiming;
        var13.withTiming = var15;
        var13.offsetY = var14;
        var14 = _closure1_slot10;
        var13.TIMING_CONFIG = var14;
        var2.__closure = var13;
        var13 = 12710345257882.0;
        var2.__workletHash = var13;
        var13 = _closure1_slot12;
        var2.__initData = var13;
        var4 = var4.bind(var6)(var2);
        var2 = _closure1_slot7;
        var0 = var12[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var0.style = var4;
        var6 = _closure1_slot7;
        var4 = 9;
        var4 = var12[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.SafeAreaPaddingView;
        var4 = {};
        var9 = !var9;
        var4.top = var9;
        var4.left = var8;
        var8 = true;
        var4.right = var8;
        var9 = _closure1_slot7;
        var8 = _closure1_slot5;
        var7 = {};
        var11 = var11.headerContainer;
        var7.style = var11;
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var0 = _closure1_slot9;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 10;
        var0 = var12[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var11 = var0.width;
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var4.backgroundGradient;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var5.width = var11;
        var4[1] = var5;
        var0.style = var4;
        var6 = _closure1_slot8;
        var9 = _closure1_slot0;
        var8 = 11;
        var4 = var12[var8];
        var4 = var9.bind(var3)(var4);
        var5 = var4.Svg;
        var4 = {};
        var7 = '100%';
        var4.height = var7;
        var4.width = var11;
        var14 = _closure1_slot7;
        var7 = var12[var8];
        var7 = var9.bind(var3)(var7);
        var13 = var7.Defs;
        var7 = {};
        var17 = _closure1_slot8;
        var15 = var12[var8];
        var15 = var9.bind(var3)(var15);
        var16 = var15.LinearGradient;
        var15 = {
            'id': 'grad',
            'y1': '0%',
            'x1': '0',
            'x2': '0',
            'y2': '100%'
        };
        var20 = _closure1_slot7;
        var18 = var12[var8];
        var18 = var9.bind(var3)(var18);
        var19 = var18.Stop;
        var18 = {
            'offset': '0%',
            'stopColor': 'black',
            'stopOpacity': '.8'
        };
        var19 = var20.bind(var3)(var19, var18);
        var18 = new Array(3);
        var18[0] = var19;
        var21 = _closure1_slot7;
        var19 = var12[var8];
        var19 = var9.bind(var3)(var19);
        var20 = var19.Stop;
        var19 = {
            'offset': '66%',
            'stopColor': 'black',
            'stopOpacity': '.51'
        };
        var19 = var21.bind(var3)(var20, var19);
        var18[1] = var19;
        var21 = _closure1_slot7;
        var19 = var12[var8];
        var19 = var9.bind(var3)(var19);
        var20 = var19.Stop;
        var19 = {
            'offset': '100%',
            'stopColor': 'black',
            'stopOpacity': '0'
        };
        var19 = var21.bind(var3)(var20, var19);
        var18[2] = var19;
        var15.children = var18;
        var15 = var17.bind(var3)(var16, var15);
        var7.children = var15;
        var13 = var14.bind(var3)(var13, var7);
        var7 = new Array(2);
        var7[0] = var13;
        var10 = _closure1_slot7;
        var8 = var12[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.Rect;
        var8 = {
            'height': '100%',
            'width': null,
            'fill': 'url(#grad)'
        };
        var8.width = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = arg3;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.StyleSheet;
    var _closure1_slot4 = var4;
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
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
    var9 = var5.bind(var0)(var1);
    var8 = var9.createStyles;
    var4 = {};
    var1 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'top': 0,
        'height': 130
    };
    var4.backgroundGradient = var1;
    var1 = 54;
    var10 = {
        'position': 'relative',
        'height': 54
    };
    var4.headerContainer = var10;
    var10 = {
        'margin': 0,
        'marginHorizontal': 16,
        'marginBottom': 8
    };
    var4.ptbButton = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.STANDARD_EASING;
    var4.easing = var8;
    var8 = 250;
    var4.duration = var8;
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function FocusedControlsTsx1(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}';
    var4.code = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function FocusedControlsTsx2(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}';
    var4.code = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function FocusedControlsTsx3(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}';
    var4.code = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function FocusedControlsTsx4(){const{reveal}=this.__closure;return reveal?1:0;}';
    var4.code = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function FocusedControlsTsx5(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}';
    var4.code = var8;
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun68638: for (var _fun68638_ip = 0;;) switch (_fun68638_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.header;
                var13 = var0.expandedControls;
                var14 = var0.actionBar;
                var9 = var0.children;
                var1 = var0.forceReveal;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun68638_ip = 41;
                    continue _fun68638
                }
            case 39:
                var1 = false;
            case 41:
                var4 = var0.disableGradient;
                if (!(var4 === var3)) {
                    _fun68638_ip = 53;
                    continue _fun68638
                }
            case 51:
                var4 = false;
            case 53:
                var17 = var0.containerStyle;
                var15 = var0.omitPTT;
                var12 = var0.bottomHeader;
                var11 = var0.onDrawerClose;
                var2 = var0.channel;
                var _closure2_slot0 = var2;
                var18 = var0.isTouchingLeftScreenEdge;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var7 = var2.bind(var3)(var0);
                var0 = var7.useGlobalStatusIndicatorState;
                var8 = var0.bind(var7)();
                var0 = 13;
                var0 = var5[var0];
                var7 = var2.bind(var3)(var0);
                var0 = var7.useGlobalStatusIndicatorHeightSharedValue;
                var20 = var0.bind(var7)(var8);
                _closure2_slot1 = var20;
                var7 = _closure1_slot1;
                var0 = 7;
                var0 = var5[var0];
                var0 = var7.bind(var3)(var0);
                var21 = var0.bind(var3)();
                _closure2_slot2 = var21;
                var8 = _closure1_slot3;
                var7 = var8.useContext;
                var0 = 14;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.RevealContext;
                var0 = var7.bind(var8)(var0);
                var10 = var0.reveal;
                var0 = 15;
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsScreenReaderEnabled;
                var0 = var0.bind(var2)();
                if (var10) {
                    _fun68638_ip = 271;
                    continue _fun68638
                }
            case 268:
                var10 = var1;
            case 271:
                if (var10) {
                    _fun68638_ip = 277;
                    continue _fun68638
                }
            case 274:
                var10 = var0;
            case 277:
                _closure2_slot3 = var10;
                var23 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var7 = var23.bind(var3)(var1);
                var2 = var7.useDerivedValue;
                var1 = function() {
                    _fun68639: for (var _fun68639_ip = 0;;) switch (_fun68639_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = 0;
                            if (!var2) {
                                _fun68639_ip = 25;
                                continue _fun68639
                            }
                        case 12:
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var0 = var1.bind(var2)();
                        case 25:
                            return var0;
                    }
                };
                var8 = {};
                var8.isInvitedToSpeak = var21;
                var8.statusIndicatorHeight = var20;
                var1.__closure = var8;
                var8 = 14833624951450.0;
                var1.__workletHash = var8;
                var8 = _closure1_slot13;
                var1.__initData = var8;
                var21 = var2.bind(var7)(var1);
                _closure2_slot4 = var21;
                var1 = var5[var0];
                var7 = var23.bind(var3)(var1);
                var2 = var7.useDerivedValue;
                var1 = function() {
                    _fun68640: for (var _fun68640_ip = 0;;) switch (_fun68640_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = 0;
                            if (!var1) {
                                _fun68640_ip = 15;
                                continue _fun68640
                            }
                        case 12:
                            var0 = 1;
                        case 15:
                            return var0;
                    }
                };
                var8 = {};
                var8.reveal = var10;
                var1.__closure = var8;
                var8 = 15022275245977.0;
                var1.__workletHash = var8;
                var8 = _closure1_slot14;
                var1.__initData = var8;
                var20 = var2.bind(var7)(var1);
                _closure2_slot5 = var20;
                var1 = var5[var0];
                var7 = var23.bind(var3)(var1);
                var2 = var7.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var2 = var6[var3];
                    var4 = undefined;
                    var10 = var5.bind(var4)(var2);
                    var9 = var10.withTiming;
                    var8 = _closure2_slot4;
                    var7 = var8.get;
                    var8 = var7.bind(var8)();
                    var7 = _closure1_slot10;
                    var7 = var9.bind(var10)(var8, var7);
                    var0.top = var7;
                    var3 = var6[var3];
                    var4 = var5.bind(var4)(var3);
                    var3 = var4.withTiming;
                    var5 = _closure2_slot5;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var1 = _closure1_slot10;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var8 = {};
                var22 = 8;
                var22 = var5[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.withTiming;
                var8.withTiming = var22;
                var8.top = var21;
                var21 = _closure1_slot10;
                var8.TIMING_CONFIG = var21;
                var8.revealOpacity = var20;
                var1.__closure = var8;
                var8 = 8532538341439.0;
                var1.__workletHash = var8;
                var8 = _closure1_slot15;
                var1.__initData = var8;
                var7 = var2.bind(var7)(var1);
                var1 = _closure1_slot1;
                var2 = 16;
                var2 = var5[var2];
                var8 = var1.bind(var3)(var2);
                var2 = 17;
                var2 = var5[var2];
                var2 = var1.bind(var3)(var2);
                var2 = var2.FOCUSED_VOICE_CONTROLS;
                var2 = var8.bind(var3)(var2);
                var2 = var2.analyticsLocations;
                _closure2_slot6 = var2;
                var2 = 18;
                var2 = var5[var2];
                var2 = var1.bind(var3)(var2);
                var2 = var2.bind(var3)();
                _closure2_slot7 = var2;
                var2 = _closure1_slot8;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var8 = null;
                if (!(var8 == var17)) {
                    _fun68638_ip = 646;
                    continue _fun68638
                }
            case 636:
                var5 = _closure1_slot4;
                var17 = var5.absoluteFill;
            case 646:
                var5 = new Array(2);
                var5[0] = var17;
                var5[1] = var7;
                var0.style = var5;
                var5 = 'none';
                if (!var10) {
                    _fun68638_ip = 675;
                    continue _fun68638
                }
            case 669:
                var5 = 'box-none';
            case 675:
                var0.pointerEvents = var5;
                var5 = null;
                if (var4) {
                    _fun68638_ip = 701;
                    continue _fun68638
                }
            case 685:
                var17 = _closure1_slot7;
                var7 = _closure1_slot17;
                var4 = {};
                var5 = var17.bind(var3)(var7, var4);
            case 701:
                var4 = new Array(3);
                var4[0] = var5;
                var17 = _closure1_slot7;
                var7 = _closure1_slot16;
                var5 = {};
                var5.header = var19;
                var5.reveal = var10;
                var5.isTouchingLeftScreenEdge = var18;
                var5 = var17.bind(var3)(var7, var5);
                var4[1] = var5;
                var7 = var8 != var14;
                var5 = null;
                if (!var7) {
                    _fun68638_ip = 838;
                    continue _fun68638
                }
            case 752:
                var7 = var8 != var13;
                var5 = null;
                if (!var7) {
                    _fun68638_ip = 838;
                    continue _fun68638
                }
            case 761:
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var17 = _closure1_slot2;
                var6 = 19;
                var6 = var17[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var16 = function() {
                    _fun68642: for (var _fun68642_ip = 0;;) switch (_fun68642_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot6;
                            var2 = var1.VOICE_BOTTOM_SHEET_EXPANDED;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var7 = var6.id;
                            var1.channel_id = var7;
                            var6 = var6.guild_id;
                            var1.guild_id = var6;
                            var6 = _closure2_slot7;
                            var7 = null;
                            var8 = var7 == var6;
                            var6 = undefined;
                            if (var8) {
                                _fun68642_ip = 91;
                                continue _fun68642
                            }
                        case 82:
                            var8 = _closure2_slot7;
                            var6 = var8.applicationId;
                        case 91:
                            var1.application_id = var6;
                            var6 = _closure2_slot7;
                            var7 = var7 == var6;
                            var6 = undefined;
                            if (var7) {
                                _fun68642_ip = 119;
                                continue _fun68642
                            }
                        case 109:
                            var7 = _closure2_slot7;
                            var6 = var7.compositeInstanceId;
                        case 119:
                            var1.activity_session_id = var6;
                            var5 = _closure2_slot6;
                            var1.location_stack = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var6.onDrawerOpen = var16;
                var6.omitPTT = var15;
                var6.actionBar = var14;
                var6.expandedControls = var13;
                var6.header = var12;
                var6.onDrawerClose = var11;
                var6.reveal = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 838:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/FocusedControls.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FOCUSED_CONTROLS_HEADER_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 4849, 3681, 8566, 4058, 4699, 1464, 5424, 8567, 8570, 7852, 4031, 5690, 5543, 8017, 8578, 795, 2]);