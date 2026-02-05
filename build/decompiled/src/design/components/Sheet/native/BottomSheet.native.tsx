// design/components/Sheet/native/BottomSheet.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var3 = _closure1_slot17;
        var2 = _closure1_slot6;
        var1 = {};
        var4 = arg0;
        var5 = var1;
        var0 = copyDataProperties(var5, var4);
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        var1 = _closure1_slot20;
        var3 = undefined;
        var0 = false;
        var7 = var1.bind(var3)(var0);
        var2 = _closure1_slot17;
        var1 = _closure1_slot6;
        var0 = {};
        var8 = arg0;
        var9 = var0;
        var5 = copyDataProperties(var9, var8);
        var6 = _closure1_slot17;
        var5 = _closure1_slot6;
        var4 = {};
        var7 = var7.backgroundOverlay;
        var4.style = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = 'children';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot27 = var0;
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
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var _closure1_slot5 = var7;
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.Platform;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var3 = var8.ACTION_SHEET_BACKGROUND_COLOR;
    var _closure1_slot7 = var3;
    var3 = var8.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot8 = var3;
    var3 = var8.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot9 = var3;
    var3 = var8.ACTION_SHEET_SPRING_CONFIG;
    var _closure1_slot10 = var3;
    var3 = var8.ACTION_SHEET_SPRING_CONFIG_REDUCED_MOTION;
    var _closure1_slot11 = var3;
    var7 = var8.ACTION_SHEET_HANDLE_SPACING;
    var3 = var8.ACTION_SHEET_GRADIENT_BORDER_WIDTH;
    var _closure1_slot12 = var3;
    var3 = var8.ACTION_SHEET_GRADIENT_BORDER_RADIUS;
    var _closure1_slot13 = var3;
    var3 = var8.ACTION_SHEET_HANDLE_OVERHANG_REDESIGN;
    var9 = var8.ACTION_SHEET_BORDER_RADIUS;
    var _closure1_slot14 = var9;
    var9 = var8.ACTION_SHEET_INNER_BORDER_RADIUS;
    var _closure1_slot15 = var9;
    var8 = var8.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
    var _closure1_slot16 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var9 = var8.jsx;
    var _closure1_slot17 = var9;
    var8 = var8.jsxs;
    var _closure1_slot18 = var8;
    var3 = var7 - var3;
    var _closure1_slot19 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun44670: for (var _fun44670_ip = 0;;) switch (_fun44670_ip) {
            case 0:
                var9 = arg0;
                var6 = arguments[1];
                var4 = arguments[2];
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun44670_ip = 17;
                    continue _fun44670
                }
            case 15:
                var6 = 0;
            case 17:
                if (!(var4 === var5)) {
                    _fun44670_ip = 23;
                    continue _fun44670
                }
            case 21:
                var4 = false;
            case 23:
                var0 = {};
                var1 = {};
                var8 = 'hidden';
                var1.overflow = var8;
                var2 = _closure1_slot14;
                var1.borderTopLeftRadius = var2;
                var1.borderTopRightRadius = var2;
                var3 = _closure1_slot7;
                var1.backgroundColor = var3;
                var0.background = var1;
                var2 = 1;
                var1 = {
                    'overflow': 'hidden',
                    'flex': 1
                };
                var0.wrapper = var1;
                var1 = {};
                var1.overflow = var8;
                var10 = _closure1_slot12;
                var1.marginTop = var10;
                var1.marginHorizontal = var10;
                var10 = _closure1_slot13;
                var1.borderTopLeftRadius = var10;
                var1.borderTopRightRadius = var10;
                var1.backgroundColor = var3;
                var0.wrapperWithBorder = var1;
                var1 = {};
                var3 = undefined;
                if (!var9) {
                    _fun44670_ip = 142;
                    continue _fun44670
                }
            case 138:
                var3 = _closure1_slot14;
            case 142:
                var1.borderTopLeftRadius = var3;
                var3 = undefined;
                if (!var9) {
                    _fun44670_ip = 156;
                    continue _fun44670
                }
            case 152:
                var3 = _closure1_slot14;
            case 156:
                var1.borderTopRightRadius = var3;
                var3 = undefined;
                if (!var9) {
                    _fun44670_ip = 169;
                    continue _fun44670
                }
            case 166:
                var3 = var8;
            case 169:
                var1.overflow = var3;
                var3 = 0;
                if (var4) {
                    _fun44670_ip = 186;
                    continue _fun44670
                }
            case 179:
                var4 = 4;
                var3 = var6 + var4;
            case 186:
                var1.marginBottom = var3;
                var1.flex = var2;
                var0.content = var1;
                var1 = {};
                var3 = '100%';
                var1.height = var3;
                var3 = _closure1_slot15;
                var1.borderTopLeftRadius = var3;
                var1.borderTopRightRadius = var3;
                var0.gradient = var1;
                var1 = {};
                var3 = _closure1_slot19;
                var1.paddingTop = var3;
                var0.themedContentPadding = var1;
                var1 = {};
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 6;
                var8 = var6[var3];
                var8 = var4.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_MOD_STRONG;
                var1.backgroundColor = var8;
                var0.handleIndicator = var1;
                var1 = {};
                var7 = _closure1_slot5;
                var12 = var7.absoluteFillObject;
                var13 = var1;
                var7 = copyDataProperties(var13, var12);
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.colors;
                var4 = var3.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
                var3 = 'backgroundColor';
                var1[var3] = var4;
                var0.backgroundOverlay = var1;
                var1 = {};
                var3 = 16;
                var1.marginBottom = var3;
                var0.header = var1;
                var1 = {};
                var1.flex = var2;
                var0.body = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot20 = var3;
    var7 = var6.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun44671: for (var _fun44671_ip = 0;;) switch (_fun44671_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.startHeight;
                var2 = var5.hasEverExpanded;
                var2 = var5.windowDimensions;
                var17 = var2.height;
                var11 = var5.wrapperStyle;
                var8 = var5.scrollViewStyle;
                var12 = var5.startExpanded;
                var13 = var5.onChange;
                var _closure2_slot0 = var13;
                var6 = var5.onExpand;
                var _closure2_slot1 = var6;
                var9 = var5.keyboardShouldPersistTaps;
                var10 = var5.children;
                var14 = var5.maxDynamicContentSize;
                var3 = {
                    'startHeight': 0,
                    'hasEverExpanded': 0,
                    'windowDimensions': 0,
                    'wrapperStyle': 0,
                    'scrollViewStyle': 0,
                    'startExpanded': 0,
                    'onChange': 0,
                    'onExpand': 0,
                    'keyboardShouldPersistTaps': 0,
                    'children': 0,
                    'maxDynamicContentSize': 0
                };
                var15 = null;
                var22 = var3;
                var21 = null;
                var2 = silentSetPrototypeOf(var22, var21);
                var4 = 0;
                var22 = {};
                var21 = var5;
                var20 = var3;
                var5 = copyDataProperties(var22, var21, var20);
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var16 = _closure1_slot1;
                var19 = _closure1_slot2;
                var2 = 7;
                var2 = var19[var2];
                var2 = var16.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var16 = var2.top;
                var18 = _closure1_slot0;
                var2 = 8;
                var2 = var19[var2];
                var18 = var18.bind(var3)(var2);
                var2 = var18.useIsScreenReaderEnabled;
                var2 = var2.bind(var18)();
                var _closure2_slot2 = var2;
                if (!(var15 == var1)) {
                    _fun44671_ip = 206;
                    continue _fun44671
                }
            case 198:
                var18 = _closure1_slot8;
                var1 = var17 * var18;
            case 206:
                _closure2_slot3 = var1;
                if (!(var15 == var14)) {
                    _fun44671_ip = 248;
                    continue _fun44671
                }
            case 214:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 9;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.NAV_BAR_HEIGHT_MULTILINE;
                var15 = var17 - var15;
                var14 = var15 - var16;
            case 248:
                var16 = _closure1_slot4;
                var15 = var16.useState;
                if (var2) {
                    _fun44671_ip = 273;
                    continue _fun44671
                }
            case 260:
                if (var12) {
                    _fun44671_ip = 273;
                    continue _fun44671
                }
            case 263:
                var12 = new Array(1);
                var12[0] = var1;
                _fun44671_ip = 277;
                continue _fun44671;
            case 273:
                var12 = new Array(0);
            case 277:
                var16 = var15.bind(var16)(var12);
                var15 = _closure1_slot3;
                var12 = 2;
                var12 = var15.bind(var3)(var16, var12);
                var15 = var12[var4];
                var4 = 1;
                var4 = var12[var4];
                _closure2_slot4 = var4;
                var4 = _closure1_slot4;
                var16 = var4.useEffect;
                var12 = new Array(1);
                var12[0] = var2;
                var2 = function() { // Environment: var0
                    _fun44672: for (var _fun44672_ip = 0;;) switch (_fun44672_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun44672_ip = 25;
                                continue _fun44672
                            }
                        case 10:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var0 = new Array(0);
                            var0 = var2.bind(var1)(var0);
                        case 25:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var16.bind(var4)(var2, var12);
                var12 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun44673: for (var _fun44673_ip = 0;;) switch (_fun44673_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var2 = var0.height;
                            var1 = _closure2_slot3;
                            if (!(var2 < var1)) {
                                _fun44673_ip = 46;
                                continue _fun44673
                            }
                        case 31:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var0 = new Array(0);
                            var0 = var2.bind(var1)(var0);
                        case 46:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var12.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var13;
                var1[1] = var6;
                var0 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun44674: for (var _fun44674_ip = 0;;) switch (_fun44674_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun44674_ip = 35;
                                continue _fun44674
                            }
                        case 16:
                            var6 = _closure2_slot0;
                            var5 = undefined;
                            var4 = arg1;
                            var1 = arg2;
                            var1 = var6.bind(var5)(var3, var4, var1);
                        case 35:
                            var1 = 0;
                            if (!(var1 === var3)) {
                                _fun44674_ip = 59;
                                continue _fun44674
                            }
                        case 41:
                            var1 = _closure2_slot1;
                            if (!(var2 != var1)) {
                                _fun44674_ip = 59;
                                continue _fun44674
                            }
                        case 49:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 59:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot17;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var4 = 10;
                var0 = var13[var4];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var22 = var0;
                var21 = var5;
                var5 = copyDataProperties(var22, var21);
                var16 = true;
                var5 = 'enableDynamicSizing';
                var0[var5] = var16;
                var5 = 'snapPoints';
                var0[var5] = var15;
                var5 = 'maxDynamicContentSize';
                var0[var5] = var14;
                var14 = arg1;
                var5 = 'ref';
                var0[var5] = var14;
                var5 = 'onChange';
                var0[var5] = var6;
                var6 = _closure1_slot17;
                var5 = _closure1_slot0;
                var4 = var13[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var4.keyboardShouldPersistTaps = var9;
                var4.style = var8;
                var9 = _closure1_slot17;
                var8 = _closure1_slot6;
                var7 = {};
                var7.onLayout = var12;
                var7.style = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot21 = var3;
    var7 = var6.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun44675: for (var _fun44675_ip = 0;;) switch (_fun44675_ip) {
            case 0:
                var7 = arg0;
                var1 = var7.startHeight;
                var13 = var7.contentHeight;
                var2 = var7.maxHeight;
                var20 = var7.hasEverExpanded;
                var _closure2_slot0 = var20;
                var3 = var7.windowDimensions;
                var8 = var3.height;
                var16 = var7.wrapperStyle;
                var19 = var7.onChange;
                var _closure2_slot1 = var19;
                var18 = var7.onExpand;
                var _closure2_slot2 = var18;
                var9 = var7.children;
                var10 = var7.borderGradient;
                var4 = var7.extraContent;
                var6 = {
                    'startHeight': 0,
                    'contentHeight': 0,
                    'maxHeight': 0,
                    'hasEverExpanded': 0,
                    'windowDimensions': 0,
                    'wrapperStyle': 0,
                    'onChange': 0,
                    'onExpand': 0,
                    'children': 0,
                    'borderGradient': 0,
                    'extraContent': 0
                };
                var5 = null;
                var25 = var6;
                var24 = null;
                var3 = silentSetPrototypeOf(var25, var24);
                var25 = {};
                var24 = var7;
                var23 = var6;
                var6 = copyDataProperties(var25, var24, var23);
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var7 = _closure1_slot20;
                var14 = false;
                var12 = var7.bind(var3)(var14);
                var15 = _closure1_slot1;
                var21 = _closure1_slot2;
                var7 = 7;
                var7 = var21[var7];
                var7 = var15.bind(var3)(var7);
                var7 = var7.bind(var3)();
                var7 = var7.top;
                var17 = _closure1_slot0;
                var15 = 8;
                var15 = var21[var15];
                var17 = var17.bind(var3)(var15);
                var15 = var17.useIsScreenReaderEnabled;
                var15 = var15.bind(var17)();
                var _closure2_slot3 = var15;
                if (!(var5 == var1)) {
                    _fun44675_ip = 223;
                    continue _fun44675
                }
            case 215:
                var17 = _closure1_slot8;
                var1 = var8 * var17;
            case 223:
                _closure2_slot4 = var1;
                var17 = var13;
                if (!(var5 != var2)) {
                    _fun44675_ip = 237;
                    continue _fun44675
                }
            case 234:
                var17 = var2;
            case 237:
                if (!(var5 == var17)) {
                    _fun44675_ip = 275;
                    continue _fun44675
                }
            case 241:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var2 = 9;
                var2 = var22[var2];
                var2 = var21.bind(var3)(var2);
                var2 = var2.NAV_BAR_HEIGHT_MULTILINE;
                var2 = var8 - var2;
                var17 = var2 - var7;
            case 275:
                _closure2_slot5 = var17;
                var7 = _closure1_slot4;
                var8 = var7.useMemo;
                var2 = new Array(4);
                var2[0] = var20;
                var2[1] = var15;
                var2[2] = var17;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    _fun44676: for (var _fun44676_ip = 0;;) switch (_fun44676_ip) {
                        case 0:
                            var0 = new Array(0);
                            var2 = _closure2_slot3;
                            var2 = !var2;
                            if (!var2) {
                                _fun44676_ip = 24;
                                continue _fun44676
                            }
                        case 17:
                            var3 = _closure2_slot0;
                            var2 = !var3;
                        case 24:
                            if (!var2) {
                                _fun44676_ip = 39;
                                continue _fun44676
                            }
                        case 27:
                            var4 = _closure2_slot4;
                            var3 = _closure2_slot5;
                            var2 = var4 < var3;
                        case 39:
                            if (!var2) {
                                _fun44676_ip = 56;
                                continue _fun44676
                            }
                        case 42:
                            var3 = var0.push;
                            var2 = _closure2_slot4;
                            var2 = var3.bind(var0)(var2);
                        case 56:
                            var2 = var0.push;
                            var1 = _closure2_slot5;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var8 = var8.bind(var7)(var1, var2);
                var2 = var8.length;
                var1 = 1;
                var15 = var2 - var1;
                _closure2_slot6 = var15;
                var2 = var7.useCallback;
                var1 = new Array(3);
                var1[0] = var19;
                var1[1] = var18;
                var1[2] = var15;
                var0 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun44677: for (var _fun44677_ip = 0;;) switch (_fun44677_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun44677_ip = 35;
                                continue _fun44677
                            }
                        case 16:
                            var6 = _closure2_slot1;
                            var5 = undefined;
                            var4 = arg1;
                            var1 = arg2;
                            var1 = var6.bind(var5)(var3, var4, var1);
                        case 35:
                            var1 = _closure2_slot6;
                            if (!(var3 === var1)) {
                                _fun44677_ip = 61;
                                continue _fun44677
                            }
                        case 43:
                            var1 = _closure2_slot2;
                            if (!(var2 != var1)) {
                                _fun44677_ip = 61;
                                continue _fun44677
                            }
                        case 51:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot17;
                var1 = _closure1_slot6;
                var0 = {};
                var15 = new Array(2);
                var15[0] = var16;
                var16 = {};
                var16.maxHeight = var17;
                var15[1] = var16;
                var0.style = var15;
                var0.children = var9;
                var9 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot18;
                var1 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = 10;
                var0 = var15[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var25 = var0;
                var24 = var6;
                var6 = copyDataProperties(var25, var24);
                var15 = arg1;
                var6 = 'ref';
                var0[var6] = var15;
                var6 = 'enableDynamicSizing';
                var0[var6] = var14;
                var6 = 'contentHeight';
                var0[var6] = var13;
                var6 = 'snapPoints';
                var0[var6] = var8;
                var6 = 'onChange';
                var0[var6] = var7;
                var6 = var9;
                if (!(var5 != var10)) {
                    _fun44675_ip = 608;
                    continue _fun44675
                }
            case 501:
                var8 = _closure1_slot17;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 11;
                var5 = var13[var5];
                var7 = var7.bind(var3)(var5);
                var5 = {};
                var12 = var12.gradient;
                var5.style = var12;
                var12 = _closure1_slot0;
                var11 = 12;
                var14 = var13[var11];
                var14 = var12.bind(var3)(var14);
                var14 = var14.VerticalGradient;
                var14 = var14.START;
                var5.start = var14;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.VerticalGradient;
                var11 = var11.END;
                var5.end = var11;
                var5.colors = var10;
                var5.children = var9;
                var6 = var8.bind(var3)(var7, var5);
            case 608:
                var5 = new Array(2);
                var5[0] = var6;
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot22 = var3;
    var3 = {};
    var7 = 'function BottomSheetNativeTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()<=-1;}';
    var3.code = var7;
    var _closure1_slot23 = var3;
    var3 = {};
    var7 = 'function BottomSheetNativeTsx2(){const{animatedIsVisuallyClosed}=this.__closure;return animatedIsVisuallyClosed.get();}';
    var3.code = var7;
    var _closure1_slot24 = var3;
    var3 = {};
    var7 = "function BottomSheetNativeTsx3(isVisuallyClosed){const{transitionState,runOnJS,onLeave}=this.__closure;if(isVisuallyClosed&&transitionState==='exiting'){runOnJS(onLeave)();}}";
    var3.code = var7;
    var _closure1_slot25 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun44678: for (var _fun44678_ip = 0;;) switch (_fun44678_ip) {
            case 0:
                var10 = arg0;
                var26 = var10.scrollable;
                var4 = undefined;
                if (!(var26 === var4)) {
                    _fun44678_ip = 19;
                    continue _fun44678
                }
            case 17:
                var26 = false;
            case 19:
                var36 = var10.startHeight;
                var34 = var10.maxHeight;
                var33 = var10.containerHeight;
                var32 = var10.startExpanded;
                if (!(var32 === var4)) {
                    _fun44678_ip = 49;
                    continue _fun44678
                }
            case 47:
                var32 = false;
            case 49:
                var30 = var10.backdropOpacity;
                var _closure2_slot0 = var30;
                var6 = var10.backdropChildren;
                var _closure2_slot1 = var6;
                var21 = var10.header;
                var22 = var10.handleComponent;
                var16 = var10.handleDisabled;
                if (!(var16 === var4)) {
                    _fun44678_ip = 92;
                    continue _fun44678
                }
            case 90:
                var16 = false;
            case 92:
                var5 = var10.footer;
                var _closure2_slot2 = var5;
                var14 = var10.onExpand;
                var _closure2_slot3 = var14;
                var25 = var10.onDismiss;
                var _closure2_slot4 = var25;
                var24 = var10.keyboardShouldPersistTaps;
                var18 = var10.children;
                var27 = var10.backgroundStyles;
                var15 = var10.contentStyles;
                var20 = var10.bodyStyles;
                var9 = var10.borderGradient;
                var3 = var10.showGradient;
                var8 = var10.extraContent;
                var35 = var10.contentHeight;
                var7 = {
                    'scrollable': 0,
                    'startHeight': 0,
                    'maxHeight': 0,
                    'containerHeight': 0,
                    'startExpanded': 0,
                    'backdropOpacity': 0,
                    'backdropChildren': 0,
                    'header': 0,
                    'handleComponent': 0,
                    'handleDisabled': 0,
                    'footer': 0,
                    'onExpand': 0,
                    'onDismiss': 0,
                    'keyboardShouldPersistTaps': 0,
                    'children': 0,
                    'backgroundStyles': 0,
                    'contentStyles': 0,
                    'bodyStyles': 0,
                    'borderGradient': 0,
                    'showGradient': 0,
                    'extraContent': 0,
                    'contentHeight': 0
                };
                var2 = null;
                var44 = var7;
                var43 = null;
                var1 = silentSetPrototypeOf(var44, var43);
                var13 = 0;
                var44 = {};
                var43 = var10;
                var42 = var7;
                var7 = copyDataProperties(var44, var43, var42);
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
                var23 = _closure1_slot4;
                var11 = var23.useContext;
                var19 = _closure1_slot1;
                var38 = _closure1_slot2;
                var10 = 14;
                var10 = var38[var10];
                var10 = var19.bind(var4)(var10);
                var12 = var11.bind(var23)(var10);
                var41 = var12.transitionState;
                _closure2_slot5 = var41;
                var11 = var12.close;
                _closure2_slot6 = var11;
                var10 = var12.onLeave;
                _closure2_slot7 = var10;
                var12 = var12.registerDismissHandler;
                _closure2_slot8 = var12;
                var17 = 7;
                var17 = var38[var17];
                var17 = var19.bind(var4)(var17);
                var17 = var17.bind(var4)();
                var31 = var17.bottom;
                var19 = _closure1_slot20;
                var17 = global;
                var29 = var17.Math;
                var28 = var29.max;
                var17 = _closure1_slot16;
                var17 = var28.bind(var29)(var31, var17);
                var19 = var19.bind(var4)(var16, var17, var26);
                var17 = var23.useRef;
                var37 = var17.bind(var23)(var2);
                _closure2_slot9 = var37;
                var17 = var23.useState;
                var29 = var17.bind(var23)(var32);
                var28 = _closure1_slot3;
                var17 = 2;
                var17 = var28.bind(var4)(var29, var17);
                var31 = var17[var13];
                var13 = 1;
                var13 = var17[var13];
                _closure2_slot10 = var13;
                var17 = var23.useRef;
                var13 = false;
                var13 = var17.bind(var23)(var13);
                _closure2_slot11 = var13;
                var13 = var23.useRef;
                var28 = true;
                var13 = var13.bind(var23)(var28);
                _closure2_slot12 = var13;
                var17 = var23.useContext;
                var29 = _closure1_slot0;
                var13 = 15;
                var13 = var38[var13];
                var13 = var29.bind(var4)(var13);
                var13 = var13.AccessibilityPreferencesContext;
                var13 = var17.bind(var23)(var13);
                var13 = var13.reducedMotion;
                var13 = var13.enabled;
                var23 = var16;
                if (var13) {
                    _fun44678_ip = 527;
                    continue _fun44678
                }
            case 521:
                var16 = _closure1_slot10;
                _fun44678_ip = 531;
                continue _fun44678;
            case 527:
                var16 = _closure1_slot11;
            case 531:
                var29 = _closure1_slot4;
                var17 = var29.useLayoutEffect;
                var13 = new Array(2);
                var13[0] = var25;
                var13[1] = var12;
                var12 = function() { // Environment: var0
                    var2 = _closure2_slot8;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12 = var17.bind(var29)(var12, var13);
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var17 = 16;
                var17 = var12[var17];
                var38 = var13.bind(var4)(var17);
                var25 = var38.useBottomSheetImperativeHandle;
                var17 = arg1;
                var17 = var25.bind(var38)(var17, var37);
                var38 = var29.useEffect;
                var25 = new Array(2);
                var25[0] = var41;
                var25[1] = var11;
                var17 = function() { // Environment: var0
                    _fun44680: for (var _fun44680_ip = 0;;) switch (_fun44680_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = 'exiting';
                            var1 = var1 !== var2;
                            if (var1) {
                                _fun44680_ip = 27;
                                continue _fun44680
                            }
                        case 18:
                            var2 = _closure2_slot11;
                            var1 = var2.current;
                        case 27:
                            if (var1) {
                                _fun44680_ip = 67;
                                continue _fun44680
                            }
                        case 30:
                            var2 = _closure2_slot12;
                            var1 = false;
                            var2.current = var1;
                            var1 = _closure2_slot9;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun44680_ip = 67;
                                continue _fun44680
                            }
                        case 57:
                            var1 = var2.forceClose;
                            var1 = var1.bind(var2)();
                        case 67:
                            var2 = _closure2_slot5;
                            var1 = 'visible';
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun44680_ip = 91;
                                continue _fun44680
                            }
                        case 82:
                            var2 = _closure2_slot11;
                            var1 = var2.current;
                        case 91:
                            if (!var1) {
                                _fun44680_ip = 104;
                                continue _fun44680
                            }
                        case 94:
                            var1 = _closure2_slot6;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 104:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = var38.bind(var29)(var17, var25);
                var17 = 17;
                var17 = var12[var17];
                var38 = var13.bind(var4)(var17);
                var25 = var38.useUnmountEffect;
                var17 = function() { // Environment: var0
                    _fun44681: for (var _fun44681_ip = 0;;) switch (_fun44681_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var1 = var1.current;
                            if (!var1) {
                                _fun44681_ip = 35;
                                continue _fun44681
                            }
                        case 15:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun44681_ip = 35;
                                continue _fun44681
                            }
                        case 25:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 35:
                            var1 = _closure2_slot7;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var17 = var25.bind(var38)(var17);
                var25 = var29.useCallback;
                var17 = new Array(1);
                var17[0] = var11;
                var11 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
                    _fun44682: for (var _fun44682_ip = 0;;) switch (_fun44682_ip) {
                        case 0:
                            var2 = arg1;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.ANIMATION_SOURCE;
                            var3 = var1.KEYBOARD;
                            var1 = arg4;
                            if (!(var1 !== var3)) {
                                _fun44682_ip = 138;
                                continue _fun44682
                            }
                        case 47:
                            var1 = -1;
                            if (!(var1 === var2)) {
                                _fun44682_ip = 94;
                                continue _fun44682
                            }
                        case 57:
                            var4 = _closure2_slot11;
                            var4 = var4.current;
                            if (var4) {
                                _fun44682_ip = 94;
                                continue _fun44682
                            }
                        case 72:
                            var5 = _closure2_slot11;
                            var4 = true;
                            var5.current = var4;
                            var3 = _closure2_slot6;
                            var3 = var3.bind(var0)();
                            _fun44682_ip = 138;
                            continue _fun44682;
                        case 94:
                            if (!(var2 > var1)) {
                                _fun44682_ip = 138;
                                continue _fun44682
                            }
                        case 98:
                            var2 = _closure2_slot11;
                            var2 = var2.current;
                            if (!var2) {
                                _fun44682_ip = 138;
                                continue _fun44682
                            }
                        case 113:
                            var1 = _closure2_slot9;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun44682_ip = 138;
                                continue _fun44682
                            }
                        case 128:
                            var1 = var2.forceClose;
                            var1 = var1.bind(var2)();
                        case 138:
                            return var0;
                    }
                };
                var11 = var25.bind(var29)(var11, var17);
                var25 = var29.useCallback;
                var17 = new Array(1);
                var17[0] = var14;
                var14 = function() { // Environment: var0
                    _fun44683: for (var _fun44683_ip = 0;;) switch (_fun44683_ip) {
                        case 0:
                            var3 = _closure2_slot10;
                            var0 = undefined;
                            var2 = true;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun44683_ip = 34;
                                continue _fun44683
                            }
                        case 26:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)();
                        case 34:
                            return var0;
                    }
                };
                var29 = var25.bind(var29)(var14, var17);
                var7 = var7.animatedIndex;
                var39 = 13;
                var12 = var12[var39];
                var14 = var13.bind(var4)(var12);
                var13 = var14.useSharedValue;
                var12 = -1;
                var12 = var13.bind(var14)(var12);
                if (!(var2 != var7)) {
                    _fun44678_ip = 745;
                    continue _fun44678
                }
            case 742:
                var12 = var7;
            case 745:
                _closure2_slot13 = var12;
                var40 = _closure1_slot0;
                var7 = _closure1_slot2;
                var13 = var7[var39];
                var17 = var40.bind(var4)(var13);
                var14 = var17.useDerivedValue;
                var13 = function() {
                    var1 = _closure2_slot13;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = -1;
                    var0 = var1 <= var0;
                    return var0;
                };
                var25 = {};
                var25.animatedIndex = var12;
                var13.__closure = var25;
                var25 = 4341912681188.0;
                var13.__workletHash = var25;
                var25 = _closure1_slot23;
                var13.__initData = var25;
                var38 = var14.bind(var17)(var13);
                _closure2_slot14 = var38;
                var13 = var7[var39];
                var25 = var40.bind(var4)(var13);
                var17 = var25.useAnimatedReaction;
                var14 = function() {
                    var1 = _closure2_slot14;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = {};
                var13.animatedIsVisuallyClosed = var38;
                var14.__closure = var13;
                var13 = 6995719052506.0;
                var14.__workletHash = var13;
                var13 = _closure1_slot24;
                var14.__initData = var13;
                var13 = function arg0() {
                    _fun44686: for (var _fun44686_ip = 0;;) switch (_fun44686_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun44686_ip = 21;
                                continue _fun44686
                            }
                        case 6:
                            var2 = _closure2_slot5;
                            var1 = 'exiting';
                            var0 = var1 === var2;
                        case 21:
                            if (!var0) {
                                _fun44686_ip = 70;
                                continue _fun44686
                            }
                        case 24:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot7;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 70:
                            var0 = undefined;
                            return var0;
                    }
                };
                var38 = {};
                var38.transitionState = var41;
                var39 = var7[var39];
                var39 = var40.bind(var4)(var39);
                var39 = var39.runOnJS;
                var38.runOnJS = var39;
                var38.onLeave = var10;
                var13.__closure = var38;
                var38 = 77590951197.0;
                var13.__workletHash = var38;
                var38 = _closure1_slot25;
                var13.__initData = var38;
                var13 = var17.bind(var25)(var14, var13);
                var25 = _closure1_slot4;
                var17 = var25.useCallback;
                var14 = function() { // Environment: var0
                    var3 = _closure1_slot17;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.ActionSheetHeaderBar;
                    var0 = {};
                    var4 = function() {
                        _fun44688: for (var _fun44688_ip = 0;;) switch (_fun44688_ip) {
                            case 0:
                                var0 = _closure2_slot9;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun44688_ip = 28;
                                    continue _fun44688
                                }
                            case 18:
                                var0 = var1.close;
                                var0 = var0.bind(var1)();
                            case 28:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onPress = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var13 = new Array(0);
                var17 = var17.bind(var25)(var14, var13);
                var14 = var25.useCallback;
                var13 = new Array(2);
                var13[0] = var30;
                var13[1] = var6;
                var6 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var6 = var0.style;
                    var5 = var0.animatedIndex;
                    var3 = _closure1_slot18;
                    var2 = _closure1_slot6;
                    var1 = {};
                    var4 = _closure1_slot5;
                    var7 = var4.absoluteFill;
                    var4 = new Array(2);
                    var4[0] = var7;
                    var4[1] = var6;
                    var1.style = var4;
                    var7 = _closure1_slot17;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 19;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var6 = var4.BottomSheetBackdrop;
                    var4 = {};
                    var4.animatedIndex = var5;
                    var8 = _closure2_slot0;
                    var4.opacity = var8;
                    var6 = var7.bind(var0)(var6, var4);
                    var4 = new Array(2);
                    var4[0] = var6;
                    var5 = _closure2_slot1;
                    var4[1] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var14 = var14.bind(var25)(var6, var13);
                var13 = var25.useCallback;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function(arg0) { // Environment: var0
                    _fun44690: for (var _fun44690_ip = 0;;) switch (_fun44690_ip) {
                        case 0:
                            var3 = _closure1_slot17;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 10;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.BottomSheetFooter;
                            var0 = {};
                            var9 = arg0;
                            var10 = var0;
                            var4 = copyDataProperties(var10, var9);
                            var7 = _closure2_slot2;
                            var6 = null;
                            if (!(var6 == var7)) {
                                _fun44690_ip = 100;
                                continue _fun44690
                            }
                        case 60:
                            var7 = _closure1_slot17;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 20;
                            var5 = var8[var5];
                            var5 = var6.bind(var2)(var5);
                            var6 = var5.NavScrim;
                            var5 = {};
                            var5 = var7.bind(var2)(var6, var5);
                            _fun44690_ip = 104;
                            continue _fun44690;
                        case 100:
                            var5 = _closure2_slot2;
                        case 104:
                            var4 = 'children';
                            var0[var4] = var5;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var13 = var13.bind(var25)(var5, var6);
                var6 = _closure1_slot1;
                var5 = 21;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.ignoreKeyboard = var28;
                var30 = var6.bind(var4)(var5);
                var0 = function arg0() {
                    var1 = arg0;
                    var4 = var1.width;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot4;
                    var2 = var3.useMemo;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        var0 = {};
                        var1 = global;
                        var4 = var1.Math;
                        var3 = var4.max;
                        var2 = _closure3_slot0;
                        var1 = _closure1_slot9;
                        var2 = var2 - var1;
                        var1 = 0;
                        var2 = var3.bind(var4)(var2, var1);
                        var1 = 2;
                        var1 = var2 / var1;
                        var0.marginHorizontal = var1;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var25 = var0.bind(var4)(var30);
                if (var26) {
                    _fun44678_ip = 1082;
                    continue _fun44678
                }
            case 1076:
                var7 = _closure1_slot21;
                _fun44678_ip = 1086;
                continue _fun44678;
            case 1082:
                var7 = _closure1_slot22;
            case 1086:
                var5 = _closure1_slot1;
                var39 = _closure1_slot2;
                var0 = 22;
                var0 = var39[var0];
                var0 = var5.bind(var4)(var0);
                var6 = var0.bind(var4)();
                var5 = _closure1_slot17;
                var0 = {};
                var0.ref = var37;
                var38 = _closure1_slot0;
                var37 = 23;
                var37 = var39[var37];
                var38 = var38.bind(var4)(var37);
                var37 = var38.isIOS;
                var37 = var37.bind(var38)();
                var37 = !var37;
                if (!var37) {
                    _fun44678_ip = 1154;
                    continue _fun44678
                }
            case 1152:
                var37 = undefined;
            case 1154:
                var0.accessible = var37;
                var37 = 'none';
                var0.accessibilityRole = var37;
                var37 = '';
                var0.accessibilityLabel = var37;
                var0.startHeight = var36;
                var0.contentHeight = var35;
                var0.maxHeight = var34;
                var0.containerHeight = var33;
                var0.startExpanded = var32;
                var0.hasEverExpanded = var31;
                var0.windowDimensions = var30;
                var31 = var19.wrapper;
                var30 = new Array(2);
                var30[0] = var31;
                var31 = var2 != var9;
                if (!var31) {
                    _fun44678_ip = 1236;
                    continue _fun44678
                }
            case 1230:
                var31 = var19.wrapperWithBorder;
            case 1236:
                var30[1] = var31;
                var0.wrapperStyle = var30;
                var0.onExpand = var29;
                var0.enablePanDownToClose = var28;
                var0.containerStyle = var25;
                var28 = var19.background;
                var25 = new Array(2);
                var25[0] = var28;
                var25[1] = var27;
                var0.backgroundStyle = var25;
                var25 = 'interactive';
                if (!var26) {
                    _fun44678_ip = 1294;
                    continue _fun44678
                }
            case 1290:
                var25 = 'extend';
            case 1294:
                var0.keyboardBehavior = var25;
                var25 = 'restore';
                var0.keyboardBlurBehavior = var25;
                var0.keyboardShouldPersistTaps = var24;
                var0.animationConfigs = var16;
                var16 = var19.handleIndicator;
                var0.handleIndicatorStyle = var16;
                var16 = null;
                if (var23) {
                    _fun44678_ip = 1344;
                    continue _fun44678
                }
            case 1334:
                if (!(var2 != var22)) {
                    _fun44678_ip = 1341;
                    continue _fun44678
                }
            case 1338:
                var17 = var22;
            case 1341:
                var16 = var17;
            case 1344:
                var0.handleComponent = var16;
                var0.backdropComponent = var14;
                if (var3) {
                    _fun44678_ip = 1363;
                    continue _fun44678
                }
            case 1357:
                var14 = _closure1_slot26;
                _fun44678_ip = 1367;
                continue _fun44678;
            case 1363:
                var14 = _closure1_slot27;
            case 1367:
                var0.backgroundComponent = var14;
                var0.renderFooter = var13;
                var0.animatedIndex = var12;
                var0.onAnimate = var11;
                var0.onClose = var10;
                var0.borderGradient = var9;
                var0.extraContent = var8;
                var10 = _closure1_slot17;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 24;
                var8 = var11[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.LayerScope;
                var8 = {};
                var13 = _closure1_slot18;
                var12 = _closure1_slot6;
                var11 = {};
                var16 = var19.content;
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var15;
                var11.style = var14;
                var15 = var2 != var21;
                if (!var15) {
                    _fun44678_ip = 1501;
                    continue _fun44678
                }
            case 1472:
                var17 = _closure1_slot17;
                var16 = _closure1_slot6;
                var14 = {};
                var22 = var19.header;
                var14.style = var22;
                var14.children = var21;
                var15 = var17.bind(var4)(var16, var14);
            case 1501:
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot17;
                var16 = _closure1_slot6;
                var15 = {};
                var21 = var19.body;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var15.style = var19;
                var15.children = var18;
                var15 = var17.bind(var4)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var0.children = var8;
                var5 = var5.bind(var4)(var7, var0);
                var0 = var5;
                if (!var3) {
                    _fun44678_ip = 1644;
                    continue _fun44678
                }
            case 1590:
                var0 = var5;
                if (!(var2 != var6)) {
                    _fun44678_ip = 1644;
                    continue _fun44678
                }
            case 1597:
                var3 = _closure1_slot17;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 25;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ThemeContextProvider;
                var1 = {};
                var1.gradient = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1644:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/BottomSheet.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.BottomSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4934, 33, 1297, 671, 1568, 4070, 4703, 4935, 4098, 670, 3720, 5202, 3165, 5203, 4103, 5204, 5205, 5206, 1464, 3242, 478, 5207, 3159, 2]);