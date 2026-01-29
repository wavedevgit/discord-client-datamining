// modules/video_calls/native/components/PopoutMenu.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: PopoutMenuRow, environment: var1
        _fun64148: for (var _fun64148_ip = 0;;) switch (_fun64148_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.icon;
                var9 = var1.text;
                var8 = var1.onClick;
                var _closure2_slot0 = var8;
                var7 = var1.onClose;
                var _closure2_slot1 = var7;
                var1 = _closure1_slot9;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var8;
                var1[1] = var7;
                var0 = function() { // Environment: var0
                    _fun64149: for (var _fun64149_ip = 0;;) switch (_fun64149_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun64149_ip = 23;
                                continue _fun64149
                            }
                        case 13:
                            var3 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)();
                        case 23:
                            var1 = _closure2_slot1;
                            if (!(var2 != var1)) {
                                _fun64149_ip = 41;
                                continue _fun64149
                            }
                        case 31:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 6;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = null;
                var8 = var7 != var12;
                if (!var8) {
                    _fun64148_ip = 151;
                    continue _fun64148
                }
            case 115:
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 7;
                var8 = var13[var8];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var8.source = var12;
                var7 = var11.bind(var3)(var10, var8);
            case 151:
                var0.leading = var7;
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 8;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.FormLabel;
                var6 = {};
                var10 = var5.popoutMenuRowLabel;
                var6.style = var10;
                var6.text = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.label = var6;
                var5 = var5.popoutMenuRow;
                var0.style = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var7 = var3.jsxs;
    var _closure1_slot7 = var7;
    var3 = var3.Fragment;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 'absolute';
    var9.position = var11;
    var11 = 5;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var9.borderRadius = var11;
    var3.container = var9;
    var9 = {};
    var9.flex = var10;
    var3.popoutMenuRow = var9;
    var9 = {};
    var10 = '100%';
    var9.width = var10;
    var3.popoutMenuRowLabel = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}";
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = 'function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}';
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = 'function PopoutMenuTsx3(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}';
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function PopoutMenuTsx4(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Original name: PopoutMenu, environment: var1
        _fun64150: for (var _fun64150_ip = 0;;) switch (_fun64150_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.disabled;
                var15 = var2.title;
                var25 = var2.trigger;
                var13 = var2.rows;
                var18 = var2.style;
                var0 = var2.onOpen;
                var _closure2_slot0 = var0;
                var2 = var2.onClose;
                var _closure2_slot1 = var2;
                var4 = undefined;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var3 = _closure1_slot9;
                var10 = var3.bind(var4)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var22 = var3.width;
                var _closure2_slot2 = var22;
                var23 = var3.height;
                var _closure2_slot3 = var23;
                var3 = 10;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var24 = var3.bottom;
                var _closure2_slot4 = var24;
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var5 = 0;
                var3 = var3.bind(var6)(var5);
                var27 = _closure1_slot3;
                var20 = 2;
                var6 = var27.bind(var4)(var3, var20);
                var3 = var6[var5];
                var19 = 1;
                var6 = var6[var19];
                var _closure2_slot5 = var6;
                var8 = _closure1_slot4;
                var7 = var8.useState;
                var16 = false;
                var7 = var7.bind(var8)(var16);
                var7 = var27.bind(var4)(var7, var20);
                var8 = var7[var5];
                var _closure2_slot6 = var8;
                var9 = var7[var19];
                var _closure2_slot7 = var9;
                var12 = _closure1_slot4;
                var7 = var12.useState;
                var7 = var7.bind(var12)(var16);
                var12 = var27.bind(var4)(var7, var20);
                var7 = var12[var5];
                var _closure2_slot8 = var7;
                var12 = var12[var19];
                var _closure2_slot9 = var12;
                var17 = _closure1_slot4;
                var16 = var17.useRef;
                var12 = null;
                var26 = var16.bind(var17)(var12);
                var _closure2_slot10 = var26;
                var17 = _closure1_slot4;
                var16 = var17.useRef;
                var21 = var16.bind(var17)(var12);
                var _closure2_slot11 = var21;
                var28 = _closure1_slot4;
                var17 = var28.useState;
                var16 = {
                    'top': 0,
                    'left': 0,
                    'width': 0,
                    'height': 0
                };
                var16 = var17.bind(var28)(var16);
                var17 = var27.bind(var4)(var16, var20);
                var16 = var17[var5];
                var _closure2_slot12 = var16;
                var17 = var17[var19];
                var _closure2_slot13 = var17;
                var29 = _closure1_slot4;
                var28 = var29.useState;
                var17 = {
                    'width': 0,
                    'height': 0
                };
                var17 = var28.bind(var29)(var17);
                var17 = var27.bind(var4)(var17, var20);
                var27 = var17[var5];
                var _closure2_slot14 = var27;
                var17 = var17[var19];
                var _closure2_slot15 = var17;
                var28 = _closure1_slot4;
                var20 = var28.useEffect;
                var19 = new Array(1);
                var19[0] = var7;
                var17 = function() { // Environment: var11
                    _fun64151: for (var _fun64151_ip = 0;;) switch (_fun64151_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            if (!var1) {
                                _fun64151_ip = 40;
                                continue _fun64151
                            }
                        case 12:
                            var2 = _closure2_slot10;
                            var4 = null;
                            var5 = var4 == var2;
                            var2 = undefined;
                            if (var5) {
                                _fun64151_ip = 36;
                                continue _fun64151
                            }
                        case 27:
                            var5 = _closure2_slot10;
                            var2 = var5.current;
                        case 36:
                            var1 = var4 != var2;
                        case 40:
                            if (!var1) {
                                _fun64151_ip = 113;
                                continue _fun64151
                            }
                        case 43:
                            var1 = _closure2_slot10;
                            var5 = null;
                            var1 = var5 == var1;
                            var2 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun64151_ip = 76;
                                continue _fun64151
                            }
                        case 60:
                            var3 = _closure2_slot10;
                            var3 = var3.current;
                            var1 = var5 == var3;
                            var4 = var3;
                        case 76:
                            if (var1) {
                                _fun64151_ip = 95;
                                continue _fun64151
                            }
                        case 79:
                            var3 = var4.measureInWindow;
                            var1 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                                var2 = _closure2_slot13;
                                var1 = {};
                                var0 = global;
                                var5 = var0.Math;
                                var4 = var5.max;
                                var3 = arg1;
                                var0 = 0;
                                var0 = var4.bind(var5)(var3, var0);
                                var1.top = var0;
                                var0 = arg0;
                                var1.left = var0;
                                var0 = arg2;
                                var1.width = var0;
                                var0 = arg3;
                                var1.height = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1);
                        case 95:
                            var1 = global;
                            var1 = var1.setTimeout;
                            var0 = function() { // Environment: var0
                                _fun64153: for (var _fun64153_ip = 0;;) switch (_fun64153_ip) {
                                    case 0:
                                        var0 = _closure2_slot11;
                                        var4 = null;
                                        var1 = var4 == var0;
                                        var0 = undefined;
                                        var3 = undefined;
                                        if (var1) {
                                            _fun64153_ip = 36;
                                            continue _fun64153
                                        }
                                    case 20:
                                        var2 = _closure2_slot11;
                                        var2 = var2.current;
                                        var1 = var4 == var2;
                                        var3 = var2;
                                    case 36:
                                        if (var1) {
                                            _fun64153_ip = 57;
                                            continue _fun64153
                                        }
                                    case 39:
                                        var2 = var3.measureInWindow;
                                        var1 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                                            var2 = _closure2_slot15;
                                            var1 = {};
                                            var0 = arg2;
                                            var1.width = var0;
                                            var0 = arg3;
                                            var1.height = var0;
                                            var0 = undefined;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var1 = var2.bind(var3)(var1);
                                    case 57:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 113:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = var20.bind(var28)(var17, var19);
                var20 = _closure1_slot4;
                var19 = var20.useMemo;
                var17 = new Array(5);
                var17[0] = var27;
                var17[1] = var24;
                var17[2] = var23;
                var17[3] = var22;
                var17[4] = var16;
                var16 = function() { // Environment: var11
                    _fun64155: for (var _fun64155_ip = 0;;) switch (_fun64155_ip) {
                        case 0:
                            var1 = _closure2_slot14;
                            var2 = var1.height;
                            var2 = -var2;
                            var3 = _closure2_slot12;
                            var4 = var3.top;
                            var3 = var3.height;
                            var3 = var4 + var3;
                            var1 = var1.height;
                            var1 = var3 + var1;
                            var3 = 8;
                            var4 = var1 + var3;
                            var1 = _closure2_slot4;
                            var4 = var4 + var1;
                            var1 = _closure2_slot3;
                            if (!(var4 < var1)) {
                                _fun64155_ip = 81;
                                continue _fun64155
                            }
                        case 65:
                            var1 = _closure2_slot12;
                            var4 = var1.height;
                            var1 = 16;
                            var2 = var4 + var1;
                        case 81:
                            var1 = _closure2_slot12;
                            var4 = var1.left;
                            var1 = _closure2_slot14;
                            var1 = var1.width;
                            var1 = var4 + var1;
                            var3 = var1 + var3;
                            var1 = _closure2_slot2;
                            var3 = var3 > var1;
                            var1 = 0;
                            if (!var3) {
                                _fun64155_ip = 142;
                                continue _fun64155
                            }
                        case 120:
                            var3 = _closure2_slot12;
                            var3 = var3.width;
                            var0 = _closure2_slot14;
                            var0 = var0.width;
                            var1 = var3 - var0;
                        case 142:
                            var0 = {};
                            var0.top = var2;
                            var0.left = var1;
                            return var0;
                    }
                };
                var16 = var19.bind(var20)(var16, var17);
                var19 = var16.top;
                var20 = var16.left;
                var23 = _closure1_slot4;
                var22 = var23.useImperativeHandle;
                var17 = new Array(1);
                var17[0] = var9;
                var16 = arg1;
                var9 = function() { // Environment: var11
                    var0 = {};
                    var1 = function() { // Original name: close, environment: var1
                        var2 = _closure2_slot7;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.close = var1;
                    return var0;
                };
                var9 = var22.bind(var23)(var16, var9, var17);
                var17 = _closure1_slot4;
                var16 = var17.useMemo;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var11
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.debounce;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot5;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = 16;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var16.bind(var17)(var6, var9);
                var _closure2_slot16 = var6;
                var17 = var3 > var5;
                if (!var17) {
                    _fun64150_ip = 557;
                    continue _fun64150
                }
            case 554:
                var17 = !var8;
            case 557:
                _closure2_slot17 = var17;
                var6 = _closure1_slot4;
                var5 = var6.useCallback;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var2;
                var2 = function() { // Environment: var11
                    _fun64160: for (var _fun64160_ip = 0;;) switch (_fun64160_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            if (!var1) {
                                _fun64160_ip = 31;
                                continue _fun64160
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var2 = undefined;
                            var1 = var1.bind(var2)();
                            var1 = _closure2_slot9;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var5.bind(var6)(var2, var3);
                _closure2_slot18 = var8;
                var16 = _closure1_slot0;
                var9 = _closure1_slot2;
                var22 = 12;
                var2 = var9[var22];
                var5 = var16.bind(var4)(var2);
                var3 = var5.useAnimatedStyle;
                var2 = function() { // Original name: te, environment: var11
                    _fun64161: for (var _fun64161_ip = 0;;) switch (_fun64161_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 13;
                            var1 = var1[var8];
                            var9 = undefined;
                            var15 = var2.bind(var9)(var1);
                            var14 = var15.withTiming;
                            var2 = _closure2_slot17;
                            var13 = 0;
                            if (!var2) {
                                _fun64161_ip = 47;
                                continue _fun64161
                            }
                        case 44:
                            var13 = 1;
                        case 47:
                            var12 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var10 = 14;
                            var2 = var3[var10];
                            var2 = var4.bind(var9)(var2);
                            var2 = var2.STANDARD_EASING;
                            var12.easing = var2;
                            var6 = 250;
                            var12.duration = var6;
                            var11 = function(arg0) { // Original name: n, environment: var2
                                _fun64162: for (var _fun64162_ip = 0;;) switch (_fun64162_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun64162_ip = 52;
                                            continue _fun64162
                                        }
                                    case 6:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 12;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot18;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = {};
                            var16 = 12;
                            var16 = var3[var16];
                            var16 = var4.bind(var9)(var16);
                            var16 = var16.runOnJS;
                            var2.runOnJS = var16;
                            var16 = _closure2_slot18;
                            var2.handleClose = var16;
                            var11.__closure = var2;
                            var2 = 7805688342878.0;
                            var11.__workletHash = var2;
                            var2 = _closure1_slot11;
                            var11.__initData = var2;
                            var18 = 'respect-motion-settings';
                            var21 = var15;
                            var20 = var13;
                            var19 = var12;
                            var17 = var11;
                            var2 = var21[var14](var20, var19, var18, var17, var16);
                            var0.opacity = var2;
                            var2 = {};
                            var3 = var3[var8];
                            var4 = var4.bind(var9)(var3);
                            var3 = var4.withTiming;
                            var1 = _closure2_slot17;
                            var5 = 0;
                            if (!var1) {
                                _fun64161_ip = 215;
                                continue _fun64161
                            }
                        case 209:
                            var5 = -8;
                        case 215:
                            var1 = {};
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var10];
                            var7 = var8.bind(var9)(var7);
                            var7 = var7.STANDARD_EASING;
                            var1.easing = var7;
                            var1.duration = var6;
                            var1 = var3.bind(var4)(var5, var1);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var6 = {};
                var23 = 13;
                var23 = var9[var23];
                var23 = var16.bind(var4)(var23);
                var23 = var23.withTiming;
                var6.withTiming = var23;
                var6.animateIn = var17;
                var17 = 14;
                var17 = var9[var17];
                var17 = var16.bind(var4)(var17);
                var17 = var17.STANDARD_EASING;
                var6.STANDARD_EASING = var17;
                var17 = 250;
                var6.ANIMATION_DURATION = var17;
                var9 = var9[var22];
                var9 = var16.bind(var4)(var9);
                var9 = var9.runOnJS;
                var6.runOnJS = var9;
                var6.handleClose = var8;
                var17 = 8;
                var6.EXTRA_PADDING = var17;
                var2.__closure = var6;
                var6 = 2727321893876.0;
                var2.__workletHash = var6;
                var6 = _closure1_slot10;
                var2.__initData = var6;
                var16 = var3.bind(var5)(var2);
                var6 = _closure1_slot4;
                var5 = var6.useCallback;
                var3 = function() { // Environment: var11
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var2 = new Array(0);
                var2 = var5.bind(var6)(var3, var2);
                _closure2_slot19 = var2;
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var11
                    var3 = _closure2_slot7;
                    var0 = undefined;
                    var2 = false;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.trigger;
                    var2 = 'impactHeavy';
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot9;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = var3.bind(var5)(var0, var2);
                _closure2_slot20 = var0;
                var5 = _closure1_slot4;
                var3 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var11
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 16;
                    var1 = var9[var1];
                    var7 = undefined;
                    var1 = var8.bind(var7)(var1);
                    var2 = var1.Gesture;
                    var1 = var2.LongPress;
                    var4 = var1.bind(var2)();
                    var2 = var4.onBegin;
                    var1 = function() { // Original name: t, environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.runOnJS;
                        var1 = _closure2_slot7;
                        var2 = var2.bind(var3)(var1);
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var10 = {};
                    var6 = 12;
                    var5 = var9[var6];
                    var5 = var8.bind(var7)(var5);
                    var5 = var5.runOnJS;
                    var10.runOnJS = var5;
                    var11 = _closure2_slot7;
                    var10._setClose = var11;
                    var1.__closure = var10;
                    var10 = 15929711498886.0;
                    var1.__workletHash = var10;
                    var10 = _closure1_slot13;
                    var1.__initData = var10;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.onStart;
                    var0 = function() { // Original name: n, environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.runOnJS;
                        var1 = _closure2_slot20;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var4 = {};
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.runOnJS;
                    var4.runOnJS = var6;
                    var5 = _closure2_slot20;
                    var4.handleLongPress = var5;
                    var0.__closure = var4;
                    var4 = 1649917173815.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot12;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var3.bind(var5)(var0, var2);
                var0 = var25;
                if (var1) {
                    _fun64150_ip = 1162;
                    continue _fun64150
                }
            case 856:
                var3 = _closure1_slot7;
                var2 = _closure1_slot8;
                var1 = {};
                var8 = _closure1_slot6;
                var6 = _closure1_slot0;
                var23 = _closure1_slot2;
                var5 = 16;
                var5 = var23[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.GestureDetector;
                var5 = {};
                var5.gesture = var9;
                var24 = _closure1_slot6;
                var23 = _closure1_slot5;
                var9 = {};
                var9.ref = var26;
                var9.children = var25;
                var9 = var24.bind(var4)(var23, var9);
                var5.children = var9;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = null;
                if (!var7) {
                    _fun64150_ip = 1148;
                    continue _fun64150
                }
            case 953:
                var9 = _closure1_slot7;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var22];
                var7 = var8.bind(var4)(var7);
                var8 = var7.View;
                var7 = {};
                var7.ref = var21;
                var21 = var10.container;
                var10 = new Array(4);
                var10[0] = var21;
                var10[1] = var18;
                var18 = {};
                var18.left = var20;
                var18.top = var19;
                var10[2] = var18;
                var10[3] = var16;
                var7.style = var10;
                var10 = function(arg0) { // Original name: onLayout, environment: var11
                    var2 = _closure2_slot16;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7.onLayout = var10;
                var10 = var12 != var15;
                var16 = null;
                if (!var10) {
                    _fun64150_ip = 1063;
                    continue _fun64150
                }
            case 1043:
                var19 = _closure1_slot6;
                var18 = _closure1_slot14;
                var10 = {};
                var10.text = var15;
                var16 = var19.bind(var4)(var18, var10);
            case 1063:
                var10 = new Array(3);
                var10[0] = var16;
                var15 = var12 != var15;
                var12 = null;
                if (!var15) {
                    _fun64150_ip = 1115;
                    continue _fun64150
                }
            case 1080:
                var16 = _closure1_slot6;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var17];
                var14 = var15.bind(var4)(var14);
                var15 = var14.FormDivider;
                var14 = {};
                var12 = var16.bind(var4)(var15, var14);
            case 1115:
                var10[1] = var12;
                var12 = var13.map;
                var11 = function(arg0, arg1) { // Environment: var11
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot14;
                    var2 = {};
                    var6 = arg0;
                    var7 = var2;
                    var0 = copyDataProperties(var7, var6);
                    var1 = _closure2_slot19;
                    var0 = 'onClose';
                    var2[var0] = var1;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var11 = var12.bind(var13)(var11);
                var10[2] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 1148:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1162:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/PopoutMenu.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 4847, 4039, 5335, 1464, 1568, 22, 3677, 4050, 4840, 3240, 4917, 2]);