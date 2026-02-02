// components_native/DatePickerActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.hideActionSheet;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun65363: for (var _fun65363_ip = 0;;) switch (_fun65363_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.show;
                var _closure2_slot0 = var5;
                var10 = var0.errorText;
                var0 = _closure1_slot8;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var4 = _closure1_slot4;
                var2 = var4.useRef;
                var0 = null;
                var9 = var2.bind(var4)(var0);
                var _closure2_slot1 = var9;
                var6 = _closure1_slot4;
                var4 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setAccessibilityFocus;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var1.ref = var4;
                    var4 = 200;
                    var1.delay = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var4.bind(var6)(var0, var2);
                var13 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 15;
                var2 = var4[var0];
                var6 = var13.bind(var3)(var2);
                var2 = var6.useAnimatedStyle;
                var1 = function() {
                    _fun65365: for (var _fun65365_ip = 0;;) switch (_fun65365_ip) {
                        case 0:
                            var4 = {};
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 16;
                            var0 = var3[var0];
                            var6 = undefined;
                            var0 = var2.bind(var6)(var0);
                            var0 = var0.STANDARD_EASING;
                            var4.easing = var0;
                            var2 = _closure2_slot0;
                            var0 = 150;
                            if (!var2) {
                                _fun65365_ip = 54;
                                continue _fun65365
                            }
                        case 51:
                            var0 = 200;
                        case 54:
                            var4.duration = var0;
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 17;
                            var2 = var2[var7];
                            var9 = var3.bind(var6)(var2);
                            var8 = var9.withTiming;
                            var10 = _closure2_slot0;
                            var2 = 0;
                            if (!var10) {
                                _fun65365_ip = 97;
                                continue _fun65365
                            }
                        case 94:
                            var2 = 1;
                        case 97:
                            var2 = var8.bind(var9)(var2, var4);
                            var0.opacity = var2;
                            var8 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var9 = var8.bind(var6)(var2);
                            var8 = var9.withTiming;
                            var10 = _closure2_slot0;
                            var2 = 0;
                            if (!var10) {
                                _fun65365_ip = 144;
                                continue _fun65365
                            }
                        case 138:
                            var2 = 500;
                        case 144:
                            var2 = var8.bind(var9)(var2, var4);
                            var0.maxHeight = var2;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var7];
                            var2 = var2.bind(var6)(var1);
                            var1 = var2.withTiming;
                            var5 = _closure2_slot0;
                            var3 = 0;
                            if (!var5) {
                                _fun65365_ip = 189;
                                continue _fun65365
                            }
                        case 186:
                            var3 = 12;
                        case 189:
                            var1 = var1.bind(var2)(var3, var4);
                            var0.paddingVertical = var1;
                            return var0;
                    }
                };
                var11 = {};
                var12 = 16;
                var12 = var4[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.STANDARD_EASING;
                var11.STANDARD_EASING = var12;
                var11.show = var5;
                var12 = 17;
                var12 = var4[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.withTiming;
                var11.withTiming = var12;
                var1.__closure = var11;
                var11 = 11991491746736.0;
                var1.__workletHash = var11;
                var11 = _closure1_slot11;
                var1.__initData = var11;
                var6 = var2.bind(var6)(var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var11 = var8.rangeErrorContainer;
                var4 = new Array(2);
                var4[0] = var11;
                var4[1] = var6;
                var0.style = var4;
                var4 = !var5;
                var0.accessibilityElementsHidden = var4;
                var4 = 'no-hide-descendants';
                if (!var5) {
                    _fun65363_ip = 268;
                    continue _fun65363
                }
            case 264:
                var4 = 'auto';
            case 268:
                var0.importantForAccessibility = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot5;
                var4 = {
                    'ref': null,
                    'accessible': true,
                    'accessibilityRole': 'alert'
                };
                var4.ref = var9;
                var8 = var8.rangeError;
                var4.style = var8;
                var9 = _closure1_slot6;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 18;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-md/medium',
                    'color': 'text-feedback-critical'
                };
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var12 = 'flex-start';
    var9.justifyContent = var12;
    var6.rangeErrorContainer = var9;
    var12 = {
        'backgroundColor': null,
        'padding': 12,
        'marginHorizontal': 12
    };
    var9 = 6;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_FEEDBACK_CRITICAL;
    var12.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var12.borderRadius = var13;
    var6.rangeError = var12;
    var12 = {
        'display': 'flex',
        'alignItems': 'center'
    };
    var6.datetimePickerContainer = var12;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginVertical': 6,
        'paddingHorizontal': 12,
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'flex-end'
    };
    var3.footer = var8;
    var8 = {};
    var12 = 7;
    var12 = var5[var12];
    var12 = var10.bind(var0)(var12);
    var11 = var11.DISPLAY_SEMIBOLD;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var10 = var9.TEXT_DEFAULT;
    var9 = 16;
    var15 = var12.bind(var0)(var11, var10, var9);
    var16 = var8;
    var9 = copyDataProperties(var16, var15);
    var3.actionButtonText = var8;
    var8 = {};
    var9 = 24;
    var8.marginLeft = var9;
    var3.actionButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun65366: for (var _fun65366_ip = 0;;) switch (_fun65366_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.title;
                var8 = var0.handleCancel;
                var13 = var0.handleSubmit;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.isAndroid;
                var0 = var0.bind(var1)();
                var3 = _closure1_slot6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.BottomSheetTitleHeader;
                if (var0) {
                    _fun65366_ip = 279;
                    continue _fun65366
                }
            case 91:
                var0 = {};
                var0.title = var7;
                var14 = _closure1_slot6;
                var1 = 12;
                var10 = var9[var1];
                var10 = var6.bind(var4)(var10);
                var11 = var10.ActionSheetHeaderPressableText;
                var10 = {};
                var10.onPress = var8;
                var12 = 13;
                var15 = var9[var12];
                var15 = var6.bind(var4)(var15);
                var17 = var15.intl;
                var16 = var17.string;
                var15 = var9[var12];
                var15 = var6.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15["ETE/oC"];
                var15 = var16.bind(var17)(var15);
                var10.label = var15;
                var10 = var14.bind(var4)(var11, var10);
                var0.leading = var10;
                var11 = _closure1_slot6;
                var1 = var9[var1];
                var1 = var6.bind(var4)(var1);
                var10 = var1.ActionSheetHeaderPressableText;
                var1 = {};
                var1.onPress = var13;
                var13 = var9[var12];
                var13 = var6.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var9[var12];
                var12 = var6.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["R3BPH+"];
                var12 = var13.bind(var14)(var12);
                var1.label = var12;
                var1 = var11.bind(var4)(var10, var1);
                var0.trailing = var1;
                var0 = var3.bind(var4)(var2, var0);
                _fun65366_ip = 330;
                continue _fun65366;
            case 279:
                var1 = {};
                var1.title = var7;
                var7 = _closure1_slot6;
                var5 = 11;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.ActionSheetCloseButton;
                var5 = {};
                var5.onPress = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.trailing = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 330:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function DatePickerActionSheetTsx1(){const{STANDARD_EASING,show,withTiming}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:show?200:150};return{opacity:withTiming(show?1:0,animationSettings),maxHeight:withTiming(show?500:0,animationSettings),paddingVertical:withTiming(show?12:0,animationSettings)};}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        _fun65367: for (var _fun65367_ip = 0;;) switch (_fun65367_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.handleCancel;
                var9 = var0.handleSubmit;
                var16 = var0.canSubmit;
                var0 = _closure1_slot9;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.isAndroid;
                var1 = var0.bind(var1)();
                var0 = null;
                if (!var1) {
                    _fun65367_ip = 535;
                    continue _fun65367
                }
            case 72:
                var3 = _closure1_slot7;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var10.footer;
                var1.style = var5;
                var8 = _closure1_slot6;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var12 = 19;
                var5 = var15[var12];
                var7 = var13.bind(var4)(var5);
                var5 = {};
                var17 = true;
                var5.shrink = var17;
                var11 = var15[var12];
                var11 = var13.bind(var4)(var11);
                var11 = var11.Sizes;
                var11 = var11.MEDIUM;
                var5.size = var11;
                var11 = var15[var12];
                var11 = var13.bind(var4)(var11);
                var11 = var11.Colors;
                var11 = var11.TRANSPARENT;
                var5.color = var11;
                var11 = var10.actionButtonText;
                var5.textStyle = var11;
                var14 = _closure1_slot0;
                var11 = 13;
                var19 = var15[var11];
                var19 = var14.bind(var4)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var15[var11];
                var19 = var14.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19["ETE/oC"];
                var19 = var20.bind(var21)(var19);
                var5.text = var19;
                var19 = var15[var11];
                var19 = var14.bind(var4)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var15[var11];
                var19 = var14.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19["ETE/oC"];
                var19 = var20.bind(var21)(var19);
                var5.accessibilityLabel = var19;
                var19 = var10.actionButton;
                var5.style = var19;
                var5.onPress = var18;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot6;
                var6 = var15[var12];
                var7 = var13.bind(var4)(var6);
                var6 = {};
                var6.shrink = var17;
                var16 = !var16;
                var6.disabled = var16;
                var16 = var15[var12];
                var16 = var13.bind(var4)(var16);
                var16 = var16.Sizes;
                var16 = var16.MEDIUM;
                var6.size = var16;
                var12 = var15[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.Colors;
                var12 = var12.TRANSPARENT;
                var6.color = var12;
                var12 = var10.actionButtonText;
                var6.textStyle = var12;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var16 = var12.intl;
                var13 = var16.string;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["cY+Oob"];
                var12 = var13.bind(var16)(var12);
                var6.text = var12;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["cY+Oob"];
                var11 = var12.bind(var13)(var11);
                var6.accessibilityLabel = var11;
                var10 = var10.actionButton;
                var6.style = var10;
                var6.onPress = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 535:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/DatePickerActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun65368: for (var _fun65368_ip = 0;;) switch (_fun65368_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.mode;
                var3 = undefined;
                if (!(var15 === var3)) {
                    _fun65368_ip = 20;
                    continue _fun65368
                }
            case 16:
                var15 = 'date';
            case 20:
                var11 = var1.title;
                if (!(var11 === var3)) {
                    _fun65368_ip = 89;
                    continue _fun65368
                }
            case 29:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var4 = var7[var2];
                var4 = var6.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.epc9sr;
                var11 = var4.bind(var5)(var2);
            case 89:
                var8 = var1.startDate;
                var27 = var1.maximumDate;
                var _closure2_slot0 = var27;
                var28 = var1.minimumDate;
                var _closure2_slot1 = var28;
                var2 = var1.onSubmit;
                var _closure2_slot2 = var2;
                var4 = var1.onCancel;
                var _closure2_slot3 = var4;
                var2 = var1.requireDateChanged;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var13 = function arg0() {
                    _fun65369: for (var _fun65369_ip = 0;;) switch (_fun65369_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun65369_ip = 47;
                                continue _fun65369
                            }
                        case 19:
                            var2 = var3.getTime;
                            var2 = var2.bind(var3)();
                            var3 = _closure2_slot1;
                            var1 = var3.getTime;
                            var1 = var1.bind(var3)();
                            var0 = var2 >= var1;
                        case 47:
                            return var0;
                    }
                };
                var _closure2_slot13 = var13;
                var20 = function arg0() {
                    _fun65370: for (var _fun65370_ip = 0;;) switch (_fun65370_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun65370_ip = 47;
                                continue _fun65370
                            }
                        case 19:
                            var2 = var3.getTime;
                            var2 = var2.bind(var3)();
                            var3 = _closure2_slot0;
                            var1 = var3.getTime;
                            var1 = var1.bind(var3)();
                            var0 = var2 <= var1;
                        case 47:
                            return var0;
                    }
                };
                var _closure2_slot14 = var20;
                var1 = _closure1_slot8;
                var12 = var1.bind(var3)();
                var1 = null;
                if (!(var1 == var8)) {
                    _fun65368_ip = 240;
                    continue _fun65368
                }
            case 212:
                var6 = global;
                var6 = var6.Date;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var35 = var7;
                var6 = new var35[var6](var34);
                var8 = var6 instanceof Object ? var6 : var7;
            case 240:
                _closure2_slot4 = var8;
                var7 = _closure1_slot4;
                var6 = var7.useState;
                var7 = var6.bind(var7)(var8);
                var10 = _closure1_slot3;
                var6 = 2;
                var8 = var10.bind(var3)(var7, var6);
                var9 = 0;
                var19 = var8[var9];
                _closure2_slot5 = var19;
                var7 = 1;
                var8 = var8[var7];
                _closure2_slot6 = var8;
                var14 = _closure1_slot4;
                var8 = var14.useState;
                var2 = !var2;
                var2 = var8.bind(var14)(var2);
                var2 = var10.bind(var3)(var2, var6);
                var8 = var2[var9];
                _closure2_slot7 = var8;
                var2 = var2[var7];
                _closure2_slot8 = var2;
                var16 = _closure1_slot4;
                var14 = var16.useState;
                var2 = true;
                var2 = var14.bind(var16)(var2);
                var2 = var10.bind(var3)(var2, var6);
                var14 = var2[var9];
                _closure2_slot9 = var14;
                var2 = var2[var7];
                _closure2_slot10 = var2;
                var16 = _closure1_slot4;
                var14 = var16.useState;
                var2 = false;
                var2 = var14.bind(var16)(var2);
                var2 = var10.bind(var3)(var2, var6);
                var14 = var2[var9];
                var2 = var2[var7];
                _closure2_slot11 = var2;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 20;
                var2 = var10[var2];
                var2 = var6.bind(var3)(var2);
                var22 = var2.bind(var3)();
                var6 = _closure1_slot4;
                var2 = var6.useRef;
                var2 = var2.bind(var6)(var19);
                _closure2_slot12 = var2;
                var2 = var1 != var27;
                var17 = undefined;
                if (!var2) {
                    _fun65368_ip = 509;
                    continue _fun65368
                }
            case 454:
                var2 = global;
                var16 = var2.Date;
                var2 = var27.getFullYear;
                var2 = var2.bind(var27)();
                var34 = var2 + var7;
                var2 = var16.prototype;
                var6 = Object.create(var2, {
                    constructor: {
                        value: var16
                    }
                });
                var30 = -1;
                var35 = var6;
                var33 = 0;
                var32 = var7;
                var31 = 0;
                var2 = new var35[var16](var34, var33, var32, var31, var30, var29);
                var17 = var2 instanceof Object ? var2 : var6;
            case 509:
                var1 = var1 != var28;
                var16 = undefined;
                if (!var1) {
                    _fun65368_ip = 563;
                    continue _fun65368
                }
            case 518:
                var1 = global;
                var6 = var1.Date;
                var1 = var28.getFullYear;
                var34 = var1.bind(var28)();
                var2 = var6.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var35 = var2;
                var33 = 0;
                var32 = var7;
                var31 = 0;
                var1 = new var35[var6](var34, var33, var32, var31, var30);
                var16 = var1 instanceof Object ? var1 : var2;
            case 563:
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var2 = new Array(1);
                var2[0] = var19;
                var1 = function() { // Environment: var0
                    var1 = _closure2_slot12;
                    var0 = _closure2_slot5;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var1, var2);
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 21;
                var7 = var6[var1];
                var9 = var2.bind(var3)(var7);
                var7 = function() { // Environment: var0
                    _fun65372: for (var _fun65372_ip = 0;;) switch (_fun65372_ip) {
                        case 0:
                            var2 = _closure2_slot12;
                            var1 = _closure2_slot4;
                            var2.current = var1;
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun65372_ip = 37;
                                continue _fun65372
                            }
                        case 27:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 37:
                            var1 = _closure1_slot13;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var10 = var9.bind(var3)(var7);
                var7 = var6[var1];
                var9 = var2.bind(var3)(var7);
                var7 = function() { // Environment: var0
                    _fun65373: for (var _fun65373_ip = 0;;) switch (_fun65373_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var4 = var1.current;
                            var1 = _closure2_slot7;
                            if (!var1) {
                                _fun65373_ip = 23;
                                continue _fun65373
                            }
                        case 19:
                            var1 = _closure2_slot9;
                        case 23:
                            if (!var1) {
                                _fun65373_ip = 65;
                                continue _fun65373
                            }
                        case 26:
                            var3 = _closure2_slot2;
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 22;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var5.bind(var2)(var1);
                            var1 = var1.bind(var2)(var4);
                            var1 = var3.bind(var2)(var1);
                        case 65:
                            var1 = _closure2_slot9;
                            if (var1) {
                                _fun65373_ip = 87;
                                continue _fun65373
                            }
                        case 72:
                            var2 = _closure2_slot11;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                            _fun65373_ip = 100;
                            continue _fun65373;
                        case 87:
                            var1 = _closure1_slot13;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 100:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var9.bind(var3)(var7);
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var0 = function(arg0) { // Environment: var0
                    _fun65374: for (var _fun65374_ip = 0;;) switch (_fun65374_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun65374_ip = 99;
                                continue _fun65374
                            }
                        case 9:
                            var1 = _closure2_slot1;
                            var1 = var4 == var1;
                            if (!var1) {
                                _fun65374_ip = 31;
                                continue _fun65374
                            }
                        case 23:
                            var3 = _closure2_slot0;
                            var1 = var4 == var3;
                        case 31:
                            if (var1) {
                                _fun65374_ip = 66;
                                continue _fun65374
                            }
                        case 34:
                            var4 = _closure2_slot10;
                            var1 = _closure2_slot13;
                            var3 = undefined;
                            var1 = var1.bind(var3)(var2);
                            if (!var1) {
                                _fun65374_ip = 61;
                                continue _fun65374
                            }
                        case 52:
                            var5 = _closure2_slot14;
                            var1 = var5.bind(var3)(var2);
                        case 61:
                            var1 = var4.bind(var3)(var1);
                        case 66:
                            var4 = _closure2_slot11;
                            var1 = undefined;
                            var3 = false;
                            var3 = var4.bind(var1)(var3);
                            var4 = _closure2_slot8;
                            var3 = true;
                            var3 = var4.bind(var1)(var3);
                            var0 = _closure2_slot6;
                            var0 = var0.bind(var1)(var2);
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18 = var1.bind(var3)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var0 = 23;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.onDismiss = var4;
                var7 = _closure1_slot6;
                var6 = _closure1_slot10;
                var4 = {};
                var4.title = var11;
                var4.handleCancel = var10;
                var4.handleSubmit = var9;
                var4 = var7.bind(var3)(var6, var4);
                var0.header = var4;
                var7 = _closure1_slot6;
                var6 = _closure1_slot14;
                var4 = {};
                var11 = var14;
                if (!var14) {
                    _fun65368_ip = 750;
                    continue _fun65368
                }
            case 742:
                var13 = var13.bind(var3)(var19);
                var11 = !var13;
            case 750:
                var4.show = var11;
                var21 = _closure1_slot0;
                var25 = _closure1_slot2;
                var13 = 13;
                var11 = var25[var13];
                var11 = var21.bind(var3)(var11);
                var24 = var11.intl;
                var23 = var24.formatToPlainString;
                var11 = var25[var13];
                var11 = var21.bind(var3)(var11);
                var11 = var11.t;
                var21 = var11.FsJO55;
                var11 = {};
                var29 = _closure1_slot1;
                var26 = 22;
                var25 = var25[var26];
                var25 = var29.bind(var3)(var25);
                var29 = var25.bind(var3)(var28);
                var25 = var29.format;
                var28 = 'L';
                var25 = var25.bind(var29)(var28);
                var11.minDate = var25;
                var11 = var23.bind(var24)(var21, var11);
                var4.errorText = var11;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var11 = _closure1_slot6;
                var7 = _closure1_slot14;
                var6 = {};
                if (!var14) {
                    _fun65368_ip = 895;
                    continue _fun65368
                }
            case 887:
                var20 = var20.bind(var3)(var19);
                var14 = !var20;
            case 895:
                var6.show = var14;
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var14 = var23[var13];
                var14 = var21.bind(var3)(var14);
                var25 = var14.intl;
                var24 = var25.formatToPlainString;
                var13 = var23[var13];
                var13 = var21.bind(var3)(var13);
                var13 = var13.t;
                var20 = var13.R7r9VN;
                var14 = {};
                var13 = _closure1_slot1;
                var26 = var23[var26];
                var26 = var13.bind(var3)(var26);
                var27 = var26.bind(var3)(var27);
                var26 = var27.format;
                var26 = var26.bind(var27)(var28);
                var14.maxDate = var26;
                var14 = var24.bind(var25)(var20, var14);
                var6.errorText = var14;
                var6 = var11.bind(var3)(var7, var6);
                var4[1] = var6;
                var11 = _closure1_slot6;
                var7 = _closure1_slot5;
                var6 = {};
                var12 = var12.datetimePickerContainer;
                var6.style = var12;
                var14 = _closure1_slot6;
                var12 = 24;
                var12 = var23[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var20 = 25;
                var20 = var23[var20];
                var21 = var21.bind(var3)(var20);
                var20 = var21.isThemeLight;
                var21 = var20.bind(var21)(var22);
                var20 = 'dark';
                if (!var21) {
                    _fun65368_ip = 1077;
                    continue _fun65368
                }
            case 1073:
                var20 = 'light';
            case 1077:
                var12.theme = var20;
                var12.date = var19;
                var12.onDateChange = var18;
                var12.maximumDate = var17;
                var12.minimumDate = var16;
                var12.mode = var15;
                var12 = var14.bind(var3)(var13, var12);
                var6.children = var12;
                var6 = var11.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot12;
                var5 = {};
                var5.handleCancel = var10;
                var5.handleSubmit = var9;
                var5.canSubmit = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 483, 33, 1297, 671, 4647, 3239, 478, 5176, 5174, 5175, 1234, 4850, 3681, 4849, 4058, 4841, 4838, 3207, 7499, 3006, 4896, 8079, 3167, 2]);