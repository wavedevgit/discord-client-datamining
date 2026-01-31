// modules/video_calls/native/components/FocusedControlsBottomControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var1 = arg0;
        var10 = var1.expandedControls;
        var5 = var1.availableHeight;
        var _closure2_slot0 = var5;
        var6 = var1.positionY;
        var _closure2_slot1 = var6;
        var1 = _closure1_slot19;
        var3 = undefined;
        var12 = var1.bind(var3)();
        var8 = _closure1_slot1;
        var14 = _closure1_slot2;
        var1 = 12;
        var1 = var14[var1];
        var1 = var8.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var1 = var1.bottom;
        var _closure2_slot2 = var1;
        var7 = _closure1_slot4;
        var4 = var7.useState;
        var2 = false;
        var7 = var4.bind(var7)(var2);
        var4 = _closure1_slot3;
        var2 = 2;
        var4 = var4.bind(var3)(var7, var2);
        var2 = 0;
        var15 = var4[var2];
        var _closure2_slot3 = var15;
        var2 = 1;
        var2 = var4[var2];
        var _closure2_slot4 = var2;
        var7 = _closure1_slot4;
        var4 = var7.useCallback;
        var2 = new Array(3);
        var2[0] = var5;
        var2[1] = var1;
        var2[2] = var15;
        var1 = function(arg0) { // Environment: var0
            _fun68782: for (var _fun68782_ip = 0;;) switch (_fun68782_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.height;
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var1 = var3 - var1;
                    var2 = var2 > var1;
                    var1 = _closure2_slot3;
                    if (!(var2 !== var1)) {
                        _fun68782_ip = 58;
                        continue _fun68782
                    }
                case 47:
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 58:
                    var0 = undefined;
                    return var0;
            }
        };
        var11 = var4.bind(var7)(var1, var2);
        var2 = _closure1_slot0;
        var7 = 13;
        var1 = var14[var7];
        var2 = var2.bind(var3)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun68783: for (var _fun68783_ip = 0;;) switch (_fun68783_ip) {
                case 0:
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.min;
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = -1;
                    var1 = var0 * var1;
                    var0 = _closure1_slot16;
                    var1 = var1 / var0;
                    var0 = 1;
                    var3 = var2.bind(var3)(var1, var0);
                    var0 = {};
                    var0.opacity = var3;
                    var1 = 'auto';
                    var2 = 0;
                    if (!(var2 === var3)) {
                        _fun68783_ip = 79;
                        continue _fun68783
                    }
                case 75:
                    var1 = 'none';
                case 79:
                    var0.pointerEvents = var1;
                    return var0;
            }
        };
        var4 = {};
        var4.positionY = var6;
        var6 = _closure1_slot16;
        var4.EXPANDED_DRAWER_SHOW_POSITION = var6;
        var0.__closure = var4;
        var4 = 10567472250823.0;
        var0.__workletHash = var4;
        var4 = _closure1_slot22;
        var0.__initData = var4;
        var13 = var1.bind(var2)(var0);
        var2 = _closure1_slot14;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = {};
        var4.height = var5;
        var0.style = var4;
        var6 = _closure1_slot14;
        var5 = _closure1_slot8;
        var4 = {};
        var4.scrollEnabled = var15;
        var9 = _closure1_slot14;
        var7 = var14[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.View;
        var7 = {};
        var14 = var12.expandedControlsContainer;
        var12 = new Array(2);
        var12[0] = var14;
        var12[1] = var13;
        var7.style = var12;
        var7.onLayout = var11;
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        _fun68784: for (var _fun68784_ip = 0;;) switch (_fun68784_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.positionY;
                var _closure2_slot0 = var7;
                var1 = _closure1_slot19;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var9 = var5.bind(var4)(var1);
                var6 = var9.useCanShowTooltip;
                var1 = 15;
                var1 = var3[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.TooltipNames;
                var2 = var1.SCREENSHARE_SWIPE_UP_CONTROLS;
                var1 = true;
                var2 = var6.bind(var9)(var2, var1);
                var1 = 13;
                var3 = var3[var1];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.min;
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = -1;
                    var2 = var1 * var2;
                    var1 = _closure1_slot16;
                    var1 = var2 / var1;
                    var2 = 1;
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = var2 - var1;
                    var0.opacity = var1;
                    return var0;
                };
                var6 = {};
                var6.positionY = var7;
                var7 = _closure1_slot16;
                var6.EXPANDED_DRAWER_SHOW_POSITION = var7;
                var0.__closure = var6;
                var6 = 4429631762525.0;
                var0.__workletHash = var6;
                var6 = _closure1_slot23;
                var0.__initData = var6;
                var5 = var3.bind(var5)(var0);
                var0 = null;
                if (!var2) {
                    _fun68784_ip = 395;
                    continue _fun68784
                }
            case 172:
                var3 = _closure1_slot14;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = var12[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var1.style = var5;
                var7 = _closure1_slot14;
                var9 = 16;
                var5 = var12[var9];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var11 = var8.tooltipStyle;
                var5.style = var11;
                var11 = _closure1_slot0;
                var10 = var12[var9];
                var10 = var11.bind(var4)(var10);
                var10 = var10.TooltipArrowPositions;
                var10 = var10.CENTER;
                var5.arrowPosition = var10;
                var9 = var12[var9];
                var9 = var11.bind(var4)(var9);
                var9 = var9.TooltipArrowDirections;
                var9 = var9.DOWN;
                var5.arrowDirection = var9;
                var9 = 8;
                var5.arrowWidth = var9;
                var9 = 4;
                var5.arrowHeight = var9;
                var9 = var8.containerStyle;
                var5.containerStyle = var9;
                var8 = var8.labelStyle;
                var5.labelStyle = var8;
                var8 = 17;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.zYzy2i;
                var8 = var9.bind(var10)(var8);
                var5.label = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 395:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        _fun68786: for (var _fun68786_ip = 0;;) switch (_fun68786_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.positionY;
                var _closure2_slot0 = var17;
                var7 = var1.offsetY;
                var _closure2_slot1 = var7;
                var12 = var1.aboveActionBar;
                var4 = var1.onPressHeader;
                var5 = var1.isExpanded;
                var1 = _closure1_slot19;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var15 = 13;
                var1 = var16[var15];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.max;
                    var6 = var1.Math;
                    var5 = var6.abs;
                    var7 = _closure2_slot0;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var5.bind(var6)(var2);
                    var5 = _closure2_slot1;
                    var1 = 3;
                    var5 = var5 / var1;
                    var1 = _closure1_slot16;
                    var1 = var5 - var1;
                    var2 = var2 / var1;
                    var1 = 0;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = 2;
                    var1 = var1 - var2;
                    var0.opacity = var1;
                    return var0;
                };
                var6 = {};
                var6.offsetY = var7;
                var7 = _closure1_slot16;
                var6.EXPANDED_DRAWER_SHOW_POSITION = var7;
                var6.positionY = var17;
                var0.__closure = var6;
                var6 = 5042367101380.0;
                var0.__workletHash = var6;
                var6 = _closure1_slot24;
                var0.__initData = var6;
                var14 = var1.bind(var2)(var0);
                var2 = _closure1_slot14;
                var1 = _closure1_slot7;
                var0 = {
                    'accessible': true,
                    'onPress': null,
                    'accessibilityRole': 'button',
                    'accessibilityLabel': 'Group DM',
                    'accessibilityHint': 'Press to start a new conversation'
                };
                var0.onPress = var4;
                var4 = {};
                var4.expanded = var5;
                var0.accessibilityState = var4;
                var6 = _closure1_slot15;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var13.aboveActionBarContainer;
                var4.style = var7;
                var11 = _closure1_slot14;
                var8 = _closure1_slot32;
                var7 = {};
                var7.positionY = var17;
                var8 = var11.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var11 = _closure1_slot14;
                var8 = 18;
                var8 = var16[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.ActionSheetHeaderBar;
                var8 = {};
                var8 = var11.bind(var3)(var10, var8);
                var7[1] = var8;
                var8 = null;
                var8 = var8 != var12;
                if (!var8) {
                    _fun68786_ip = 339;
                    continue _fun68786
                }
            case 279:
                var11 = _closure1_slot14;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var15];
                var9 = var10.bind(var3)(var9);
                var10 = var9.View;
                var9 = {};
                var15 = var13.aboveActionBarChildrenContainer;
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var14;
                var9.style = var13;
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 339:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var1 = function arg0() {
        _fun68788: for (var _fun68788_ip = 0;;) switch (_fun68788_ip) {
            case 0:
                var2 = arg0;
                var12 = var2.children;
                var16 = var2.expandedControls;
                var5 = var2.actionBarControlsHeight;
                var1 = var2.reveal;
                var _closure2_slot0 = var1;
                var21 = var2.aboveActionBar;
                var3 = var2.onDrawerClose;
                var _closure2_slot1 = var3;
                var4 = var2.onDrawerOpen;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var2 = _closure1_slot19;
                var24 = var2.bind(var3)();
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 12;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var8 = var2.bottom;
                var17 = var2.right;
                var _closure2_slot2 = var17;
                var7 = var2.top;
                var2 = _closure1_slot6;
                var2 = var2.bind(var3)();
                var15 = var2.height;
                var6 = var2.width;
                var2 = _closure1_slot11;
                var2 = var6 > var2;
                var _closure2_slot3 = var2;
                var6 = 24;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var13 = var6.bind(var3)();
                var _closure2_slot4 = var13;
                var9 = var15;
                if (!var2) {
                    _fun68788_ip = 209;
                    continue _fun68788
                }
            case 186:
                var6 = global;
                var14 = var6.Math;
                var10 = var14.min;
                var6 = _closure1_slot12;
                var9 = var10.bind(var14)(var6, var15);
            case 209:
                _closure2_slot5 = var9;
                var18 = var5;
                if (var2) {
                    _fun68788_ip = 223;
                    continue _fun68788
                }
            case 219:
                var18 = var5 + var8;
            case 223:
                _closure2_slot6 = var18;
                var20 = var9 - var18;
                _closure2_slot7 = var20;
                var6 = var9 - var18;
                if (var2) {
                    _fun68788_ip = 257;
                    continue _fun68788
                }
            case 242:
                var5 = _closure1_slot17;
                var5 = var5.bind(var3)(var7);
                var15 = var6 - var5;
                _fun68788_ip = 270;
                continue _fun68788;
            case 257:
                var5 = _closure1_slot18;
                var5 = var5.bind(var3)(var7);
                var15 = var6 - var5;
            case 270:
                var5 = {};
                var5.controlMaxHeight = var20;
                var5.isLandscapeMode = var2;
                var6 = _closure1_slot17;
                var6 = var6.bind(var3)(var7);
                var6 = var6 + var8;
                var5.portraitOffsetY = var6;
                var6 = _closure1_slot18;
                var6 = var6.bind(var3)(var7);
                var5.landscapeOffsetY = var6;
                var6 = function() {
                    _fun68800: for (var _fun68800_ip = 0;;) switch (_fun68800_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var3 = var0 == var2;
                            var2 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun68800_ip = 28;
                                continue _fun68800
                            }
                        case 20:
                            var1 = _closure2_slot1;
                            var0 = var1.bind(var2)();
                        case 28:
                            return var0;
                    }
                };
                var5.onClose = var6;
                var5.onOpen = var4;
                var4 = function arg0() {
                    var1 = arg0;
                    var18 = var1.controlMaxHeight;
                    var _closure3_slot0 = var18;
                    var19 = var1.isLandscapeMode;
                    var _closure3_slot1 = var19;
                    var16 = var1.portraitOffsetY;
                    var _closure3_slot2 = var16;
                    var17 = var1.landscapeOffsetY;
                    var _closure3_slot3 = var17;
                    var2 = var1.onClose;
                    var _closure3_slot4 = var2;
                    var1 = var1.onOpen;
                    var _closure3_slot5 = var1;
                    var11 = undefined;
                    var _closure3_slot6 = var11;
                    var _closure3_slot7 = var11;
                    var _closure3_slot13 = var11;
                    var13 = function() {
                        _fun68790: for (var _fun68790_ip = 0;;) switch (_fun68790_ip) {
                            case 0:
                                var1 = _closure3_slot6;
                                if (var1) {
                                    _fun68790_ip = 43;
                                    continue _fun68790
                                }
                            case 10:
                                var2 = _closure3_slot5;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun68790_ip = 30;
                                    continue _fun68790
                                }
                            case 20:
                                var2 = _closure3_slot5;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                            case 30:
                                var2 = _closure3_slot7;
                                var1 = undefined;
                                var0 = true;
                                var0 = var2.bind(var1)(var0);
                            case 43:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot14 = var13;
                    var8 = function() {
                        _fun68791: for (var _fun68791_ip = 0;;) switch (_fun68791_ip) {
                            case 0:
                                var1 = _closure3_slot6;
                                if (!var1) {
                                    _fun68791_ip = 51;
                                    continue _fun68791
                                }
                            case 10:
                                var2 = _closure3_slot4;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun68791_ip = 30;
                                    continue _fun68791
                                }
                            case 20:
                                var2 = _closure3_slot4;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                            case 30:
                                var3 = _closure3_slot7;
                                var1 = undefined;
                                var2 = false;
                                var2 = var3.bind(var1)(var2);
                                var0 = _closure3_slot13;
                                var0 = var0.bind(var1)();
                            case 51:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot15 = var8;
                    var2 = _closure1_slot4;
                    var1 = var2.useState;
                    var5 = false;
                    var3 = var1.bind(var2)(var5);
                    var2 = _closure1_slot3;
                    var1 = 2;
                    var3 = var2.bind(var11)(var3, var1);
                    var15 = 0;
                    var1 = var3[var15];
                    _closure3_slot6 = var1;
                    var2 = 1;
                    var2 = var3[var2];
                    _closure3_slot7 = var2;
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var14 = 13;
                    var2 = var12[var14];
                    var3 = var10.bind(var11)(var2);
                    var2 = var3.useSharedValue;
                    var4 = var2.bind(var3)(var15);
                    var _closure3_slot8 = var4;
                    var2 = var12[var14];
                    var7 = var10.bind(var11)(var2);
                    var3 = var7.useDerivedValue;
                    var2 = function() {
                        _fun68792: for (var _fun68792_ip = 0;;) switch (_fun68792_ip) {
                            case 0:
                                var0 = _closure3_slot1;
                                var2 = _closure3_slot0;
                                if (var0) {
                                    _fun68792_ip = 24;
                                    continue _fun68792
                                }
                            case 14:
                                var0 = _closure3_slot2;
                                var0 = var2 - var0;
                                _fun68792_ip = 32;
                                continue _fun68792;
                            case 24:
                                var1 = _closure3_slot3;
                                var0 = var2 - var1;
                            case 32:
                                return var0;
                        }
                    };
                    var9 = {};
                    var9.isLandscapeMode = var19;
                    var9.controlMaxHeight = var18;
                    var9.landscapeOffsetY = var17;
                    var9.portraitOffsetY = var16;
                    var2.__closure = var9;
                    var9 = 13346503100323.0;
                    var2.__workletHash = var9;
                    var9 = _closure1_slot25;
                    var2.__initData = var9;
                    var17 = var3.bind(var7)(var2);
                    var _closure3_slot9 = var17;
                    var2 = var12[var14];
                    var3 = var10.bind(var11)(var2);
                    var2 = var3.useSharedValue;
                    var9 = var2.bind(var3)(var15);
                    var _closure3_slot10 = var9;
                    var2 = var12[var14];
                    var3 = var10.bind(var11)(var2);
                    var2 = var3.useSharedValue;
                    var18 = var2.bind(var3)(var5);
                    var _closure3_slot11 = var18;
                    var2 = var12[var14];
                    var3 = var10.bind(var11)(var2);
                    var2 = var3.useSharedValue;
                    var16 = var2.bind(var3)(var15);
                    var _closure3_slot12 = var16;
                    var7 = _closure1_slot4;
                    var5 = var7.useCallback;
                    var3 = function() { // Environment: var0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 19;
                        var1 = var5[var0];
                        var0 = undefined;
                        var3 = var4.bind(var0)(var1);
                        var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
                        var1 = 20;
                        var1 = var5[var1];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.DismissibleContent;
                        var1 = var1.SOUNDBOARD_MOBILE_NEW_BADGE;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var2 = new Array(0);
                    var2 = var5.bind(var7)(var3, var2);
                    _closure3_slot13 = var2;
                    var7 = _closure1_slot4;
                    var5 = var7.useCallback;
                    var3 = new Array(3);
                    var3[0] = var4;
                    var3[1] = var17;
                    var3[2] = var2;
                    var2 = function() { // Environment: var0
                        _fun68794: for (var _fun68794_ip = 0;;) switch (_fun68794_ip) {
                            case 0:
                                var1 = _closure3_slot8;
                                var0 = var1.get;
                                var0 = var0.bind(var1)();
                                var9 = 0;
                                var1 = var9 !== var0;
                                if (var1) {
                                    _fun68794_ip = 41;
                                    continue _fun68794
                                }
                            case 25:
                                var3 = _closure3_slot9;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                var9 = -var0;
                            case 41:
                                var6 = _closure3_slot8;
                                var5 = var6.set;
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 21;
                                var4 = var4[var0];
                                var0 = undefined;
                                var8 = var7.bind(var0)(var4);
                                var7 = var8.withTiming;
                                var4 = _closure1_slot20;
                                var4 = var7.bind(var8)(var9, var4);
                                var4 = var5.bind(var6)(var4);
                                if (var1) {
                                    _fun68794_ip = 108;
                                    continue _fun68794
                                }
                            case 98:
                                var4 = _closure1_slot9;
                                var4 = var4.bind(var0)();
                                _fun68794_ip = 124;
                                continue _fun68794;
                            case 108:
                                var3 = _closure1_slot10;
                                var3 = var3.bind(var0)();
                                var3 = _closure3_slot13;
                                var3 = var3.bind(var0)();
                            case 124:
                                var2 = _closure3_slot7;
                                var1 = !var1;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var2 = var5.bind(var7)(var2, var3);
                    var3 = 22;
                    var3 = var12[var3];
                    var3 = var10.bind(var11)(var3);
                    var5 = var3.Gesture;
                    var3 = var5.Pan;
                    var7 = var3.bind(var5)();
                    var5 = var7.onStart;
                    var3 = function() {
                        _fun68795: for (var _fun68795_ip = 0;;) switch (_fun68795_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 13;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.runOnJS;
                                var1 = _closure1_slot9;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                                var6 = _closure3_slot11;
                                var5 = var6.set;
                                var4 = _closure3_slot8;
                                var2 = var4.get;
                                var2 = var2.bind(var4)();
                                var3 = 0;
                                var2 = var3 !== var2;
                                var2 = var5.bind(var6)(var2);
                                var5 = _closure3_slot12;
                                var2 = var5.set;
                                var2 = var2.bind(var5)(var3);
                                var2 = var4.get;
                                var4 = var2.bind(var4)();
                                var2 = null;
                                var2 = var2 != var4;
                                if (!var2) {
                                    _fun68795_ip = 124;
                                    continue _fun68795
                                }
                            case 111:
                                var5 = _closure3_slot11;
                                var4 = var5.get;
                                var2 = var4.bind(var5)();
                            case 124:
                                if (var2) {
                                    _fun68795_ip = 141;
                                    continue _fun68795
                                }
                            case 127:
                                var2 = _closure3_slot10;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var3);
                            case 141:
                                return var0;
                        }
                    };
                    var19 = {};
                    var20 = var12[var14];
                    var20 = var10.bind(var11)(var20);
                    var20 = var20.runOnJS;
                    var19.runOnJS = var20;
                    var20 = _closure1_slot9;
                    var19.clearFocusTimer = var20;
                    var19.drawerOpen = var18;
                    var19.positionY = var4;
                    var19.CLOSE_DRAWER_POSITION = var15;
                    var19.velocity = var16;
                    var19.startY = var9;
                    var3.__closure = var19;
                    var19 = 9674965708496.0;
                    var3.__workletHash = var19;
                    var19 = _closure1_slot28;
                    var3.__initData = var19;
                    var7 = var5.bind(var7)(var3);
                    var5 = var7.onUpdate;
                    var3 = function arg0() {
                        _fun68796: for (var _fun68796_ip = 0;;) switch (_fun68796_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure3_slot12;
                                var2 = var4.set;
                                var1 = var0.velocityY;
                                var1 = var2.bind(var4)(var1);
                                var2 = _closure3_slot8;
                                var1 = var2.get;
                                var2 = var1.bind(var2)();
                                var1 = -1;
                                var2 = var1 * var2;
                                var4 = _closure3_slot9;
                                var1 = var4.get;
                                var4 = var1.bind(var4)();
                                var1 = 16;
                                var1 = var4 + var1;
                                if (!(!(var2 > var1))) {
                                    _fun68796_ip = 124;
                                    continue _fun68796
                                }
                            case 73:
                                var2 = _closure3_slot8;
                                var1 = var2.set;
                                var4 = _closure3_slot10;
                                var3 = var4.get;
                                var4 = var3.bind(var4)();
                                var3 = null;
                                var5 = var3 != var4;
                                var3 = 0;
                                if (!var5) {
                                    _fun68796_ip = 109;
                                    continue _fun68796
                                }
                            case 106:
                                var3 = var4;
                            case 109:
                                var0 = var0.translationY;
                                var0 = var3 + var0;
                                var0 = var1.bind(var2)(var0);
                            case 124:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var19 = {};
                    var19.velocity = var16;
                    var19.positionY = var4;
                    var19.maxHeight = var17;
                    var19.startY = var9;
                    var3.__closure = var19;
                    var19 = 16755118181071.0;
                    var3.__workletHash = var19;
                    var19 = _closure1_slot27;
                    var3.__initData = var19;
                    var5 = var5.bind(var7)(var3);
                    var3 = var5.onEnd;
                    var0 = function() {
                        _fun68797: for (var _fun68797_ip = 0;;) switch (_fun68797_ip) {
                            case 0:
                                var2 = function() {
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 13;
                                    var5 = var4[var2];
                                    var0 = undefined;
                                    var8 = var3.bind(var0)(var5);
                                    var7 = var8.runOnJS;
                                    var6 = _closure3_slot14;
                                    var6 = var7.bind(var8)(var6);
                                    var6 = var6.bind(var0)();
                                    var9 = _closure3_slot10;
                                    var7 = var9.set;
                                    var8 = _closure3_slot9;
                                    var6 = var8.get;
                                    var6 = var6.bind(var8)();
                                    var6 = -var6;
                                    var6 = var7.bind(var9)(var6);
                                    var8 = _closure3_slot8;
                                    var7 = var8.set;
                                    var6 = 21;
                                    var6 = var4[var6];
                                    var11 = var3.bind(var0)(var6);
                                    var10 = var11.withTiming;
                                    var6 = var9.get;
                                    var9 = var6.bind(var9)();
                                    var6 = _closure1_slot20;
                                    var6 = var10.bind(var11)(var9, var6);
                                    var6 = var7.bind(var8)(var6);
                                    var7 = _closure3_slot11;
                                    var6 = var7.set;
                                    var5 = true;
                                    var5 = var6.bind(var7)(var5);
                                    var2 = var4[var2];
                                    var5 = var3.bind(var0)(var2);
                                    var2 = var5.runOnJS;
                                    var6 = _closure1_slot1;
                                    var1 = 23;
                                    var1 = var4[var1];
                                    var1 = var6.bind(var0)(var1);
                                    var1 = var1.acknowledgeTooltip;
                                    var2 = var2.bind(var5)(var1);
                                    var1 = 15;
                                    var1 = var4[var1];
                                    var1 = var3.bind(var0)(var1);
                                    var1 = var1.TooltipNames;
                                    var1 = var1.SCREENSHARE_SWIPE_UP_CONTROLS;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1 = function() {
                                    var2 = _closure3_slot10;
                                    var0 = var2.set;
                                    var10 = 0;
                                    var0 = var0.bind(var2)(var10);
                                    var7 = _closure3_slot8;
                                    var6 = var7.set;
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 21;
                                    var2 = var4[var0];
                                    var0 = undefined;
                                    var9 = var3.bind(var0)(var2);
                                    var8 = var9.withTiming;
                                    var2 = _closure1_slot21;
                                    var2 = var8.bind(var9)(var10, var2);
                                    var2 = var6.bind(var7)(var2);
                                    var7 = _closure3_slot11;
                                    var6 = var7.set;
                                    var2 = false;
                                    var2 = var6.bind(var7)(var2);
                                    var2 = 13;
                                    var6 = var4[var2];
                                    var7 = var3.bind(var0)(var6);
                                    var6 = var7.runOnJS;
                                    var5 = _closure1_slot10;
                                    var5 = var6.bind(var7)(var5);
                                    var5 = var5.bind(var0)();
                                    var2 = var4[var2];
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.runOnJS;
                                    var1 = _closure3_slot15;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var3 = _closure3_slot11;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                var4 = _closure3_slot8;
                                var3 = var4.get;
                                var3 = var3.bind(var4)();
                                var7 = -1;
                                var4 = var7 * var3;
                                var6 = _closure3_slot9;
                                var3 = var6.get;
                                var6 = var3.bind(var6)();
                                var3 = 2;
                                var3 = var6 / var3;
                                var3 = var4 >= var3;
                                var6 = _closure3_slot12;
                                var4 = var6.get;
                                var9 = var4.bind(var6)();
                                var4 = null;
                                var10 = var4 != var9;
                                var8 = 0;
                                var6 = 0;
                                if (!var10) {
                                    _fun68797_ip = 108;
                                    continue _fun68797
                                }
                            case 105:
                                var6 = var9;
                            case 108:
                                var7 = var7 * var6;
                                var9 = _closure3_slot12;
                                var6 = var9.get;
                                var6 = var6.bind(var9)();
                                var9 = var4 != var6;
                                var4 = 0;
                                if (!var9) {
                                    _fun68797_ip = 137;
                                    continue _fun68797
                                }
                            case 134:
                                var4 = var6;
                            case 137:
                                var6 = 500;
                                var4 = var4 >= var6;
                                var9 = _closure3_slot8;
                                var5 = var9.get;
                                var5 = var5.bind(var9)();
                                var5 = var5 > var8;
                                if (!(var7 >= var6)) {
                                    _fun68797_ip = 171;
                                    continue _fun68797
                                }
                            case 168:
                                if (!var0) {
                                    _fun68797_ip = 177;
                                    continue _fun68797
                                }
                            case 171:
                                if (!var3) {
                                    _fun68797_ip = 185;
                                    continue _fun68797
                                }
                            case 174:
                                if (var0) {
                                    _fun68797_ip = 185;
                                    continue _fun68797
                                }
                            case 177:
                                var6 = undefined;
                                var6 = var2.bind(var6)();
                                _fun68797_ip = 217;
                                continue _fun68797;
                            case 185:
                                if (var5) {
                                    _fun68797_ip = 211;
                                    continue _fun68797
                                }
                            case 188:
                                if (!var4) {
                                    _fun68797_ip = 194;
                                    continue _fun68797
                                }
                            case 191:
                                if (var0) {
                                    _fun68797_ip = 211;
                                    continue _fun68797
                                }
                            case 194:
                                var0 = undefined;
                                if (var3) {
                                    _fun68797_ip = 205;
                                    continue _fun68797
                                }
                            case 199:
                                var3 = var1.bind(var0)();
                                _fun68797_ip = 217;
                                continue _fun68797;
                            case 205:
                                var0 = var2.bind(var0)();
                                _fun68797_ip = 217;
                                continue _fun68797;
                            case 211:
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 217:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var7 = {};
                    var7.drawerOpen = var18;
                    var7.positionY = var4;
                    var7.maxHeight = var17;
                    var7.velocity = var16;
                    var16 = 500;
                    var7.MIN_GESTURE_TRIGGER_VELOCITY = var16;
                    var7.CLOSE_DRAWER_POSITION = var15;
                    var14 = var12[var14];
                    var14 = var10.bind(var11)(var14);
                    var14 = var14.runOnJS;
                    var7.runOnJS = var14;
                    var7.handleOpen = var13;
                    var7.startY = var9;
                    var9 = 21;
                    var9 = var12[var9];
                    var9 = var10.bind(var11)(var9);
                    var9 = var9.withTiming;
                    var7.withTiming = var9;
                    var9 = _closure1_slot20;
                    var7.TIMING_CONFIG = var9;
                    var13 = _closure1_slot1;
                    var9 = 23;
                    var9 = var12[var9];
                    var9 = var13.bind(var11)(var9);
                    var7.TooltipActionCreators = var9;
                    var9 = 15;
                    var9 = var12[var9];
                    var9 = var10.bind(var11)(var9);
                    var9 = var9.TooltipNames;
                    var7.TooltipNames = var9;
                    var9 = _closure1_slot21;
                    var7.TIMING_CONFIG_EXIT = var9;
                    var9 = _closure1_slot10;
                    var7.resetFocusTimer = var9;
                    var7.handleClose = var8;
                    var0.__closure = var7;
                    var7 = 6790759206787.0;
                    var0.__workletHash = var7;
                    var6 = _closure1_slot26;
                    var0.__initData = var6;
                    var3 = var3.bind(var5)(var0);
                    var0 = new Array(4);
                    var0[0] = var4;
                    var0[1] = var3;
                    var0[2] = var2;
                    var0[3] = var1;
                    return var0;
                };
                var6 = var4.bind(var3)(var5);
                var5 = _closure1_slot3;
                var4 = 4;
                var5 = var5.bind(var3)(var6, var4);
                var4 = 0;
                var14 = var5[var4];
                _closure2_slot8 = var14;
                var4 = 1;
                var8 = var5[var4];
                var4 = 2;
                var22 = var5[var4];
                _closure2_slot9 = var22;
                var4 = 3;
                var19 = var5[var4];
                var25 = _closure1_slot0;
                var27 = _closure1_slot2;
                var7 = 13;
                var4 = var27[var7];
                var6 = var25.bind(var3)(var4);
                var5 = var6.useAnimatedStyle;
                var4 = function() {
                    _fun68801: for (var _fun68801_ip = 0;;) switch (_fun68801_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var5 = 0;
                            if (var0) {
                                _fun68801_ip = 16;
                                continue _fun68801
                            }
                        case 12:
                            var5 = _closure2_slot6;
                        case 16:
                            var0 = {
                                'position': 'absolute',
                                'height': null,
                                'overflow': 'hidden'
                            };
                            var3 = _closure2_slot5;
                            var0.height = var3;
                            var4 = _closure2_slot3;
                            var3 = 0;
                            if (!var4) {
                                _fun68801_ip = 52;
                                continue _fun68801
                            }
                        case 49:
                            var3 = 16;
                        case 52:
                            var0.bottom = var3;
                            var4 = _closure2_slot3;
                            var3 = 0;
                            if (!var4) {
                                _fun68801_ip = 76;
                                continue _fun68801
                            }
                        case 65:
                            var6 = _closure2_slot2;
                            var4 = 16;
                            var3 = var4 + var6;
                        case 76:
                            var0.right = var3;
                            var3 = _closure2_slot3;
                            var2 = 0;
                            if (!var3) {
                                _fun68801_ip = 92;
                                continue _fun68801
                            }
                        case 89:
                            var2 = 8;
                        case 92:
                            var0.borderRadius = var2;
                            var1 = _closure2_slot4;
                            var0.width = var1;
                            var2 = {};
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 21;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var6.bind(var3)(var4);
                            var3 = var4.withTiming;
                            var1 = _closure1_slot20;
                            var1 = var3.bind(var4)(var5, var1);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var10 = {};
                var10.reveal = var1;
                var10.controlHeightWithOffset = var18;
                var10.sheetHeight = var9;
                var10.isLandscapeMode = var2;
                var10.safeAreaRight = var17;
                var10.sheetWidth = var13;
                var13 = 21;
                var13 = var27[var13];
                var13 = var25.bind(var3)(var13);
                var13 = var13.withTiming;
                var10.withTiming = var13;
                var13 = _closure1_slot20;
                var10.TIMING_CONFIG = var13;
                var4.__closure = var10;
                var10 = 608185354082.0;
                var4.__workletHash = var10;
                var10 = _closure1_slot29;
                var4.__initData = var10;
                var4 = var5.bind(var6)(var4);
                var10 = _closure1_slot4;
                var6 = var10.useEffect;
                var5 = new Array(2);
                var5[0] = var2;
                var5[1] = var14;
                var2 = function() { // Environment: var0
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 21;
                    var4 = var4[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.withTiming;
                    var4 = _closure1_slot21;
                    var1 = 0;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var6.bind(var10)(var2, var5);
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var14;
                var1 = function() { // Environment: var0
                    _fun68803: for (var _fun68803_ip = 0;;) switch (_fun68803_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun68803_ip = 26;
                                continue _fun68803
                            }
                        case 10:
                            var2 = _closure2_slot8;
                            var1 = var2.set;
                            var0 = 0;
                            var0 = var1.bind(var2)(var0);
                        case 26:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var2);
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var14;
                var1 = function() { // Environment: var0
                    var4 = function() {
                        var3 = _closure2_slot8;
                        var2 = var3.set;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 21;
                        var4 = var4[var0];
                        var0 = undefined;
                        var6 = var5.bind(var0)(var4);
                        var5 = var6.withTiming;
                        var4 = _closure1_slot21;
                        var1 = 0;
                        var1 = var5.bind(var6)(var1, var4);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var3 = var2.ComponentDispatch;
                    var2 = var3.subscribe;
                    var1 = _closure1_slot13;
                    var1 = var1.SELECT_ACTIVITY;
                    var1 = var2.bind(var3)(var1, var4);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 25;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.ComponentDispatch;
                        var3 = var4.unsubscribe;
                        var1 = _closure1_slot13;
                        var2 = var1.SELECT_ACTIVITY;
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var5.bind(var6)(var1, var2);
                var1 = var27[var7];
                var5 = var25.bind(var3)(var1);
                var2 = var5.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var2 = _closure2_slot5;
                    var0.height = var2;
                    var2 = {};
                    var3 = _closure2_slot7;
                    var4 = _closure2_slot8;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var1 = var3 + var1;
                    var2.translateY = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var6 = {};
                var6.sheetHeight = var9;
                var6.offsetY = var20;
                var6.positionY = var14;
                var1.__closure = var6;
                var6 = 4471821639301.0;
                var1.__workletHash = var6;
                var6 = _closure1_slot30;
                var1.__initData = var6;
                var17 = var2.bind(var5)(var1);
                var5 = _closure1_slot4;
                var2 = var5.useEffect;
                var1 = new Array(1);
                var1[0] = var22;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.ComponentDispatch;
                    var2 = var3.subscribe;
                    var0 = _closure1_slot13;
                    var1 = var0.TOGGLE_CALL_CONTROL_DRAWER;
                    var0 = _closure2_slot9;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 25;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var4 = var2.ComponentDispatch;
                        var3 = var4.unsubscribe;
                        var1 = _closure1_slot13;
                        var2 = var1.TOGGLE_CALL_CONTROL_DRAWER;
                        var1 = _closure2_slot9;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var0 = var2.bind(var5)(var0, var1);
                var0 = 26;
                var0 = var27[var0];
                var1 = var25.bind(var3)(var0);
                var0 = var1.useThemeContext;
                var0 = var0.bind(var1)();
                var26 = var0.theme;
                var2 = _closure1_slot14;
                var13 = _closure1_slot1;
                var0 = var27[var7];
                var0 = var13.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var0.style = var4;
                var4 = 'box-none';
                var0.pointerEvents = var4;
                var6 = _closure1_slot14;
                var4 = 22;
                var4 = var27[var4];
                var4 = var25.bind(var3)(var4);
                var5 = var4.GestureDetector;
                var4 = {};
                var4.gesture = var8;
                var9 = _closure1_slot15;
                var7 = var27[var7];
                var7 = var13.bind(var3)(var7);
                var8 = var7.View;
                var7 = {};
                var18 = var24.bottomDrawerContainer;
                var10 = new Array(2);
                var10[0] = var18;
                var10[1] = var17;
                var7.style = var10;
                var17 = _closure1_slot14;
                var10 = 27;
                var10 = var27[var10];
                var13 = var13.bind(var3)(var10);
                var10 = {};
                var10.blurTheme = var26;
                var23 = var24.visualEffectView;
                var18 = new Array(2);
                var18[0] = var23;
                var23 = 28;
                var23 = var27[var23];
                var25 = var25.bind(var3)(var23);
                var23 = var25.isThemeLight;
                var25 = var23.bind(var25)(var26);
                var23 = null;
                if (!var25) {
                    _fun68788_ip = 940;
                    continue _fun68788
                }
            case 934:
                var23 = var24.visualEffectViewBackground;
            case 940:
                var18[1] = var23;
                var10.style = var18;
                var13 = var17.bind(var3)(var13, var10);
                var10 = new Array(4);
                var10[0] = var13;
                var18 = _closure1_slot14;
                var17 = _closure1_slot33;
                var13 = {};
                var13.onPressHeader = var22;
                var13.aboveActionBar = var21;
                var13.positionY = var14;
                var13.offsetY = var20;
                var13.isExpanded = var19;
                var13 = var18.bind(var3)(var17, var13);
                var10[1] = var13;
                var10[2] = var12;
                var13 = _closure1_slot14;
                var12 = _closure1_slot31;
                var11 = {};
                var11.expandedControls = var16;
                var11.availableHeight = var15;
                var11.positionY = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[3] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot34 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var10 = true;
    var4.value = var10;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var12.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.useWindowDimensions;
    var _closure1_slot6 = var7;
    var14 = var4.StyleSheet;
    var7 = var4.TouchableWithoutFeedback;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.clearFocusTimer;
    var _closure1_slot9 = var7;
    var4 = var4.resetFocusTimer;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.BOX_MODE_THRESHOLD_WIDTH;
    var _closure1_slot11 = var7;
    var4 = var4.BOX_MODE_ACTIONSHEET_HEIGHT;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ComponentActions;
    var _closure1_slot13 = var7;
    var13 = var4.Fonts;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 20;
    var _closure1_slot16 = var4;
    var4 = function arg0() {
        _fun68810: for (var _fun68810_ip = 0;;) switch (_fun68810_ip) {
            case 0:
                var1 = arg0;
                var0 = 54;
                var1 = var1 + var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.isIOS;
                var2 = var0.bind(var2)();
                var0 = 16;
                if (!var2) {
                    _fun68810_ip = 54;
                    continue _fun68810
                }
            case 51:
                var0 = 48;
            case 54:
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var4 = function arg0() {
        var1 = arg0;
        var0 = 54;
        var1 = var1 + var0;
        var0 = 12;
        var0 = var1 + var0;
        return var0;
    };
    var _closure1_slot18 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'bottom': 0
    };
    var11 = 9;
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var9.borderRadius = var15;
    var4.bottomDrawerContainer = var9;
    var9 = {};
    var18 = var14.absoluteFillObject;
    var19 = var9;
    var14 = copyDataProperties(var19, var18);
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var15 = var14.sm;
    var14 = 'borderRadius';
    var9[var14] = var15;
    var15 = 'hidden';
    var14 = 'overflow';
    var9[var14] = var15;
    var4.visualEffectView = var9;
    var9 = {};
    var14 = 'rgba(0, 0, 0, .15)';
    var9.backgroundColor = var14;
    var4.visualEffectViewBackground = var9;
    var9 = {};
    var14 = 16;
    var9.marginHorizontal = var14;
    var4.expandedControlsContainer = var9;
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'top': 4294967264,
        'paddingTop': 4,
        'paddingBottom': 8
    };
    var4.aboveActionBarContainer = var9;
    var9 = {
        'position': 'absolute',
        'left': 16,
        'right': 16,
        'top': 4294967232
    };
    var4.aboveActionBarChildrenContainer = var9;
    var9 = {
        'margin': 0,
        'marginHorizontal': 16,
        'marginBottom': 8
    };
    var4.ptbButton = var9;
    var9 = {
        'alignSelf': 'center',
        'position': 'absolute',
        'top': 4294967268
    };
    var4.tooltipStyle = var9;
    var9 = {
        'paddingHorizontal': 8,
        'paddingVertical': 4
    };
    var4.containerStyle = var9;
    var9 = {};
    var14 = 10;
    var14 = var6[var14];
    var14 = var12.bind(var0)(var14);
    var13 = var13.DISPLAY_EXTRABOLD;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var18 = var11.WHITE;
    var11 = {};
    var11.uppercase = var10;
    var17 = 12;
    var20 = undefined;
    var19 = var13;
    var16 = var11;
    var18 = var20[var14](var19, var18, var17, var16, var15);
    var19 = var9;
    var10 = copyDataProperties(var19, var18);
    var4.labelStyle = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 11;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.STANDARD_EASING;
    var4.easing = var8;
    var8 = 250;
    var4.duration = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.STANDARD_EASING;
    var4.easing = var7;
    var7 = 400;
    var4.duration = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = "function FocusedControlsBottomControlsTsx1(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;const opacity=Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1);return{opacity:opacity,pointerEvents:opacity===0?'none':'auto'};}";
    var4.code = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function FocusedControlsBottomControlsTsx2(){const{positionY,EXPANDED_DRAWER_SHOW_POSITION}=this.__closure;return{opacity:1-Math.min(positionY.get()*-1/EXPANDED_DRAWER_SHOW_POSITION,1)};}';
    var4.code = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function FocusedControlsBottomControlsTsx3(){const{offsetY,EXPANDED_DRAWER_SHOW_POSITION,positionY}=this.__closure;const maxHeightRange=offsetY/3-EXPANDED_DRAWER_SHOW_POSITION;const opacity=2-Math.max(Math.abs(positionY.get())/maxHeightRange,0);return{opacity:opacity};}';
    var4.code = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function FocusedControlsBottomControlsTsx4(){const{isLandscapeMode,controlMaxHeight,landscapeOffsetY,portraitOffsetY}=this.__closure;return isLandscapeMode?controlMaxHeight-landscapeOffsetY:controlMaxHeight-portraitOffsetY;}';
    var4.code = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function FocusedControlsBottomControlsTsx5(){const{drawerOpen,positionY,maxHeight,velocity,MIN_GESTURE_TRIGGER_VELOCITY,CLOSE_DRAWER_POSITION,runOnJS,handleOpen,startY,withTiming,TIMING_CONFIG,TooltipActionCreators,TooltipNames,TIMING_CONFIG_EXIT,resetFocusTimer,handleClose}=this.__closure;var _velocity$get,_velocity$get2;const isDrawerAlreadyOpen=drawerOpen.get();const isPassedTriggerThreshold=positionY.get()*-1>=maxHeight.get()/2;const isHighOpenVelocity=((_velocity$get=velocity.get())!==null&&_velocity$get!==void 0?_velocity$get:0)*-1>=MIN_GESTURE_TRIGGER_VELOCITY;const isHighCloseVelocity=((_velocity$get2=velocity.get())!==null&&_velocity$get2!==void 0?_velocity$get2:0)>=MIN_GESTURE_TRIGGER_VELOCITY;const isLowerThanMinHeight=positionY.get()>CLOSE_DRAWER_POSITION;function openDrawer(){runOnJS(handleOpen)();startY.set(-maxHeight.get());positionY.set(withTiming(startY.get(),TIMING_CONFIG));drawerOpen.set(true);runOnJS(TooltipActionCreators.acknowledgeTooltip)(TooltipNames.SCREENSHARE_SWIPE_UP_CONTROLS);}function closeDrawer(){startY.set(0);positionY.set(withTiming(CLOSE_DRAWER_POSITION,TIMING_CONFIG_EXIT));drawerOpen.set(false);runOnJS(resetFocusTimer)();runOnJS(handleClose)();}if(isHighOpenVelocity&&!isDrawerAlreadyOpen||isPassedTriggerThreshold&&!isDrawerAlreadyOpen){openDrawer();}else if(isLowerThanMinHeight||isHighCloseVelocity&&isDrawerAlreadyOpen){closeDrawer();}else if(isPassedTriggerThreshold){openDrawer();}else{closeDrawer();}}';
    var4.code = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function FocusedControlsBottomControlsTsx6(event){const{velocity,positionY,maxHeight,startY}=this.__closure;var _startY$get;velocity.set(event.velocityY);if(positionY.get()*-1>maxHeight.get()+16){return;}positionY.set(((_startY$get=startY.get())!==null&&_startY$get!==void 0?_startY$get:0)+event.translationY);}';
    var4.code = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = 'function FocusedControlsBottomControlsTsx7(){const{runOnJS,clearFocusTimer,drawerOpen,positionY,CLOSE_DRAWER_POSITION,velocity,startY}=this.__closure;runOnJS(clearFocusTimer)();drawerOpen.set(positionY.get()!==CLOSE_DRAWER_POSITION);velocity.set(0);if(positionY.get()==null||!drawerOpen.get()){startY.set(0);}}';
    var4.code = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = "function FocusedControlsBottomControlsTsx8(){const{reveal,controlHeightWithOffset,sheetHeight,isLandscapeMode,safeAreaRight,sheetWidth,withTiming,TIMING_CONFIG}=this.__closure;const revealOffset=reveal?0:controlHeightWithOffset;return{position:'absolute',height:sheetHeight,overflow:'hidden',bottom:isLandscapeMode?16:0,right:isLandscapeMode?16+safeAreaRight:0,borderRadius:isLandscapeMode?8:0,width:sheetWidth,transform:[{translateY:withTiming(revealOffset,TIMING_CONFIG)}]};}";
    var4.code = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function FocusedControlsBottomControlsTsx9(){const{sheetHeight,offsetY,positionY}=this.__closure;return{height:sheetHeight,transform:[{translateY:offsetY+positionY.get()}]};}';
    var4.code = var7;
    var _closure1_slot30 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/FocusedControlsBottomControls.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun68812: for (var _fun68812_ip = 0;;) switch (_fun68812_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.children;
                var8 = var1.actionBar;
                var11 = var1.expandedControls;
                var6 = var1.reveal;
                var10 = var1.header;
                var5 = var1.onDrawerClose;
                var9 = var1.omitPTT;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun68812_ip = 53;
                    continue _fun68812
                }
            case 51:
                var9 = false;
            case 53:
                var4 = var1.onDrawerOpen;
                var _closure2_slot0 = var3;
                var1 = _closure1_slot19;
                var13 = var1.bind(var3)();
                var7 = _closure1_slot4;
                var2 = var7.useState;
                var1 = 0;
                var14 = var2.bind(var7)(var1);
                var7 = _closure1_slot3;
                var2 = 2;
                var2 = var7.bind(var3)(var14, var2);
                var14 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                _closure2_slot0 = var1;
                var7 = _closure1_slot4;
                var2 = var7.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.height;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = new Array(0);
                var7 = var2.bind(var7)(var1, var0);
                var2 = _closure1_slot14;
                var1 = _closure1_slot34;
                var0 = {};
                var0.aboveActionBar = var15;
                var0.actionBarControlsHeight = var14;
                var0.expandedControls = var11;
                var0.reveal = var6;
                var0.onDrawerClose = var5;
                var0.onDrawerOpen = var4;
                var6 = _closure1_slot15;
                var5 = _closure1_slot5;
                var4 = {};
                var4.onLayout = var7;
                var7 = new Array(3);
                var7[0] = var10;
                var7[1] = var8;
                var8 = null;
                if (var9) {
                    _fun68812_ip = 306;
                    continue _fun68812
                }
            case 216:
                var11 = _closure1_slot14;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 29;
                var9 = var16[var14];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var15 = _closure1_slot0;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.CallPTTButtonLooks;
                var14 = var14.BLUR;
                var9.look = var14;
                var13 = var13.ptbButton;
                var9.style = var13;
                var13 = _closure1_slot9;
                var9.sendCallback = var13;
                var12 = _closure1_slot10;
                var9.stopCallback = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 306:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = 54;
    var2.FOCUSED_CONTROLS_HEADER_HEIGHT = var3;
    var2.FocusedControlsBottomDrawer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7844, 7845, 660, 33, 478, 1297, 671, 4645, 4847, 1568, 3679, 8577, 670, 8580, 1234, 5165, 3171, 1358, 4056, 4924, 8579, 7868, 1229, 3118, 4032, 3165, 8581, 2]);