// design/components/TagListInput/native/TagListInput.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var14 = 0;
    var3 = var5[var14];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var13 = 2;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var15 = 3;
    var3 = var5[var15];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'backgroundColor': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingVertical': 2,
        'borderRadius': null,
        'minHeight': null,
        'overflow': 'hidden'
    };
    var10 = 5;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.INPUT_BACKGROUND_DEFAULT;
    var9.backgroundColor = var16;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9.borderRadius = var16;
    var16 = 6;
    var16 = var5[var16];
    var16 = var4.bind(var0)(var16);
    var16 = var16.InputHeights;
    var16 = var16.MD;
    var9.minHeight = var16;
    var3.inputContainer = var9;
    var9 = {};
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.INPUT_PLACEHOLDER_TEXT_DEFAULT;
    var9.color = var16;
    var3.placeholder = var9;
    var9 = {};
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var9.paddingHorizontal = var16;
    var3.iconContainer = var9;
    var9 = {};
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var9.marginLeft = var16;
    var3.iconLeft = var9;
    var9 = {};
    var9.paddingVertical = var15;
    var3.scrollViewContent = var9;
    var9 = {};
    var9.flexGrow = var12;
    var3.horizontalScrollViewContent = var9;
    var9 = {
        'marginHorizontal': null,
        'alignItems': 'center',
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'flex': 1
    };
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var9.marginHorizontal = var15;
    var3.inputInner = var9;
    var9 = {};
    var9.flex = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9.minHeight = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_48;
    var9.minWidth = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var9.color = var12;
    var12 = 7;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.TextStyleSheet;
    var18 = var12["text-sm/medium"];
    var19 = var9;
    var12 = copyDataProperties(var19, var18);
    var12 = 'paddingVertical';
    var9[var12] = var14;
    var12 = 'marginVertical';
    var9[var12] = var13;
    var3.searchInput = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_64;
    var9.minWidth = var10;
    var3.horizontalSearchInput = var9;
    var9 = {};
    var10 = 0.5;
    var9.opacity = var10;
    var3.searchInputDisabled = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: TagListInput, environment: var1
        _fun65623: for (var _fun65623_ip = 0;;) switch (_fun65623_ip) {
            case 0:
                var1 = arg0;
                var34 = var1.defaultValue;
                var35 = var1.disabled;
                var3 = undefined;
                if (!(var35 === var3)) {
                    _fun65623_ip = 24;
                    continue _fun65623
                }
            case 22:
                var35 = false;
            case 24:
                var24 = var1.placeholder;
                var8 = var1.icon;
                var10 = var1.onChangeText;
                var6 = var1.onBlur;
                var15 = var1.onFocus;
                var14 = var1.onScroll;
                var9 = var1.style;
                var25 = var1.returnKeyType;
                if (!(var25 === var3)) {
                    _fun65623_ip = 78;
                    continue _fun65623
                }
            case 74:
                var25 = 'search';
            case 78:
                var27 = var1.tags;
                var _closure2_slot0 = var27;
                var37 = var1.horizontal;
                if (!(var37 === var3)) {
                    _fun65623_ip = 100;
                    continue _fun65623
                }
            case 98:
                var37 = false;
            case 100:
                var5 = var1.footer;
                var28 = var1.focusOnAdd;
                if (!(var28 === var3)) {
                    _fun65623_ip = 118;
                    continue _fun65623
                }
            case 116:
                var28 = true;
            case 118:
                var _closure2_slot1 = var28;
                var0 = var1.inActionSheet;
                var22 = var1.onSubmitEditing;
                var2 = var1.onRemove;
                var _closure2_slot2 = var2;
                var26 = var1.autoFocus;
                var12 = var1.autoClearInputOnTagAdd;
                if (!(var12 === var3)) {
                    _fun65623_ip = 162;
                    continue _fun65623
                }
            case 160:
                var12 = true;
            case 162:
                var _closure2_slot3 = var12;
                var4 = var1.ref;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var1 = _closure1_slot9;
                var11 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 9;
                var1 = var17[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useFontScale;
                var16 = var1.bind(var2)();
                var1 = global;
                var13 = var1.Math;
                var2 = var13.min;
                var21 = 2;
                var2 = var2.bind(var13)(var21, var16);
                var18 = var1.Math;
                var16 = var18.max;
                var1 = var11.inputContainer;
                var13 = var1.minHeight;
                var1 = var11.inputContainer;
                var1 = var1.minHeight;
                var1 = var1 * var2;
                var18 = var16.bind(var18)(var13, var1);
                var1 = function(arg0, arg1) { // Original name: useTagListInputState, environment: var20
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var7 = _closure1_slot4;
                    var3 = var7.useRef;
                    var2 = null;
                    var3 = var3.bind(var7)(var2);
                    var _closure3_slot1 = var3;
                    var5 = var7.useRef;
                    var2 = '';
                    var2 = var5.bind(var7)(var2);
                    var _closure3_slot2 = var2;
                    var6 = var7.useState;
                    var5 = false;
                    var9 = var6.bind(var7)(var5);
                    var6 = _closure1_slot3;
                    var8 = undefined;
                    var5 = 2;
                    var6 = var6.bind(var8)(var9, var5);
                    var5 = 0;
                    var9 = var6[var5];
                    var _closure3_slot3 = var9;
                    var5 = 1;
                    var5 = var6[var5];
                    var _closure3_slot4 = var5;
                    var6 = var7.useCallback;
                    var5 = new Array(1);
                    var5[0] = var1;
                    var1 = function(arg0) { // Environment: var0
                        _fun65625: for (var _fun65625_ip = 0;;) switch (_fun65625_ip) {
                            case 0:
                                var4 = arg0;
                                var3 = arguments[1];
                                var0 = undefined;
                                if (!(var3 === var0)) {
                                    _fun65625_ip = 14;
                                    continue _fun65625
                                }
                            case 12:
                                var3 = false;
                            case 14:
                                var1 = _closure3_slot2;
                                var1.current = var4;
                                var5 = _closure3_slot4;
                                var6 = var4.length;
                                var1 = 0;
                                var1 = var6 > var1;
                                var1 = var5.bind(var0)(var1);
                                var5 = _closure3_slot0;
                                var1 = null;
                                if (!(var1 != var5)) {
                                    _fun65625_ip = 66;
                                    continue _fun65625
                                }
                            case 57:
                                var5 = _closure3_slot0;
                                var5 = var5.bind(var0)(var4);
                            case 66:
                                if (!var3) {
                                    _fun65625_ip = 99;
                                    continue _fun65625
                                }
                            case 69:
                                var2 = _closure3_slot1;
                                var3 = var2.current;
                                if (!(var1 != var3)) {
                                    _fun65625_ip = 99;
                                    continue _fun65625
                                }
                            case 82:
                                var2 = var3.setNativeProps;
                                var1 = {};
                                var1.text = var4;
                                var1 = var2.bind(var3)(var1);
                            case 99:
                                return var0;
                        }
                    };
                    var1 = var6.bind(var7)(var1, var5);
                    var _closure3_slot5 = var1;
                    var10 = var7.useImperativeHandle;
                    var6 = arg0;
                    var5 = function() { // Environment: var0
                        var0 = {};
                        var2 = function() { // Original name: blur, environment: var1
                            _fun65627: for (var _fun65627_ip = 0;;) switch (_fun65627_ip) {
                                case 0:
                                    var0 = _closure3_slot1;
                                    var2 = var0.current;
                                    var0 = null;
                                    var1 = var0 == var2;
                                    var0 = undefined;
                                    if (var1) {
                                        _fun65627_ip = 33;
                                        continue _fun65627
                                    }
                                case 23:
                                    var1 = var2.blur;
                                    var0 = var1.bind(var2)();
                                case 33:
                                    return var0;
                            }
                        };
                        var0.blur = var2;
                        var2 = function() { // Original name: focus, environment: var1
                            _fun65628: for (var _fun65628_ip = 0;;) switch (_fun65628_ip) {
                                case 0:
                                    var0 = _closure3_slot1;
                                    var2 = var0.current;
                                    var0 = null;
                                    var1 = var0 == var2;
                                    var0 = undefined;
                                    if (var1) {
                                        _fun65628_ip = 33;
                                        continue _fun65628
                                    }
                                case 23:
                                    var1 = var2.focus;
                                    var0 = var1.bind(var2)();
                                case 33:
                                    return var0;
                            }
                        };
                        var0.focus = var2;
                        var2 = function(arg0) { // Original name: setText, environment: var1
                            var3 = _closure3_slot5;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = true;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var0.setText = var2;
                        var2 = function() { // Original name: getText, environment: var1
                            var0 = _closure3_slot2;
                            var0 = var0.current;
                            return var0;
                        };
                        var0.getText = var2;
                        var2 = function() { // Original name: isFocused, environment: var1
                            _fun65631: for (var _fun65631_ip = 0;;) switch (_fun65631_ip) {
                                case 0:
                                    var0 = _closure3_slot1;
                                    var3 = var0.current;
                                    var0 = null;
                                    var2 = var0 == var3;
                                    var1 = undefined;
                                    if (var2) {
                                        _fun65631_ip = 33;
                                        continue _fun65631
                                    }
                                case 23:
                                    var2 = var3.isFocused;
                                    var1 = var2.bind(var3)();
                                case 33:
                                    var0 = var0 != var1;
                                    if (!var0) {
                                        _fun65631_ip = 43;
                                        continue _fun65631
                                    }
                                case 40:
                                    var0 = var1;
                                case 43:
                                    return var0;
                            }
                        };
                        var0.isFocused = var2;
                        var2 = function(arg0) { // Original name: measure, environment: var1
                            _fun65632: for (var _fun65632_ip = 0;;) switch (_fun65632_ip) {
                                case 0:
                                    var0 = _closure3_slot1;
                                    var3 = var0.current;
                                    var0 = null;
                                    var1 = var0 == var3;
                                    var0 = undefined;
                                    if (var1) {
                                        _fun65632_ip = 37;
                                        continue _fun65632
                                    }
                                case 23:
                                    var2 = var3.measure;
                                    var1 = arg0;
                                    var0 = var2.bind(var3)(var1);
                                case 37:
                                    return var0;
                            }
                        };
                        var0.measure = var2;
                        var2 = function(arg0) { // Original name: measureInWindow, environment: var1
                            _fun65633: for (var _fun65633_ip = 0;;) switch (_fun65633_ip) {
                                case 0:
                                    var0 = _closure3_slot1;
                                    var3 = var0.current;
                                    var0 = null;
                                    var1 = var0 == var3;
                                    var0 = undefined;
                                    if (var1) {
                                        _fun65633_ip = 37;
                                        continue _fun65633
                                    }
                                case 23:
                                    var2 = var3.measureInWindow;
                                    var1 = arg0;
                                    var0 = var2.bind(var3)(var1);
                                case 37:
                                    return var0;
                            }
                        };
                        var0.measureInWindow = var2;
                        var1 = function(arg0, arg1, arg2) { // Original name: measureLayout, environment: var1
                            _fun65634: for (var _fun65634_ip = 0;;) switch (_fun65634_ip) {
                                case 0:
                                    var0 = _closure3_slot1;
                                    var5 = var0.current;
                                    var0 = null;
                                    var1 = var0 == var5;
                                    var0 = undefined;
                                    if (var1) {
                                        _fun65634_ip = 45;
                                        continue _fun65634
                                    }
                                case 23:
                                    var4 = var5.measureLayout;
                                    var3 = arg0;
                                    var2 = arg1;
                                    var1 = arg2;
                                    var0 = var4.bind(var5)(var3, var2, var1);
                                case 45:
                                    return var0;
                            }
                        };
                        var0.measureLayout = var1;
                        return var0;
                    };
                    var5 = var10.bind(var7)(var6, var5);
                    var6 = var7.useMemo;
                    var5 = new Array(2);
                    var5[0] = var9;
                    var5[1] = var1;
                    var0 = function() { // Environment: var0
                        var0 = {};
                        var1 = {};
                        var3 = true;
                        var1.isClearable = var3;
                        var0.clearProps = var1;
                        var1 = {};
                        var3 = _closure3_slot3;
                        var1.hasValue = var3;
                        var3 = function() { // Original name: clear, environment: var2
                            var3 = _closure3_slot5;
                            var2 = undefined;
                            var1 = '';
                            var0 = true;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var1.clear = var3;
                        var2 = function(arg0) { // Original name: setTextValue, environment: var2
                            var3 = _closure3_slot5;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = true;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var1.setTextValue = var2;
                        var0.clearState = var1;
                        return var0;
                    };
                    var0 = var6.bind(var7)(var0, var5);
                    var7 = var0.clearProps;
                    var6 = var0.clearState;
                    var0 = {};
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 8;
                    var4 = var9[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.useInputClearButton;
                    var4 = var4.bind(var5)(var7, var6);
                    var0.clearButton = var4;
                    var0.inputRef = var3;
                    var0.inputValueRef = var2;
                    var0.inputUpdate = var1;
                    return var0;
                };
                var1 = var1.bind(var3)(var4, var10);
                var38 = var1.inputRef;
                _closure2_slot4 = var38;
                var36 = var1.inputValueRef;
                _closure2_slot5 = var36;
                var33 = var1.inputUpdate;
                _closure2_slot6 = var33;
                var10 = var1.clearButton;
                var16 = _closure1_slot4;
                var4 = var16.useRef;
                var30 = 0;
                var1 = {
                    'start': 0,
                    'end': 0
                };
                var1 = var4.bind(var16)(var1);
                _closure2_slot7 = var1;
                var13 = _closure1_slot1;
                var1 = 10;
                var1 = var17[var1];
                var4 = var13.bind(var3)(var1);
                var1 = {};
                var1.onFocus = var15;
                var1.onBlur = var6;
                var1 = var4.bind(var3)(var1);
                var32 = var1.onFocus;
                var31 = var1.onBlur;
                var1 = var16.useRef;
                var6 = null;
                var15 = var1.bind(var16)(var6);
                _closure2_slot8 = var15;
                var1 = var16.useState;
                var1 = var1.bind(var16)(var6);
                var19 = _closure1_slot3;
                var4 = var19.bind(var3)(var1, var21);
                var1 = var4[var30];
                _closure2_slot9 = var1;
                var1 = 1;
                var4 = var4[var1];
                _closure2_slot10 = var4;
                var4 = var16.useState;
                var29 = false;
                var4 = var4.bind(var16)(var29);
                var4 = var19.bind(var3)(var4, var21);
                var23 = var4[var30];
                var4 = var4[var1];
                _closure2_slot11 = var4;
                var4 = 11;
                var4 = var17[var4];
                var4 = var13.bind(var3)(var4);
                var4 = var4.bind(var3)(var27);
                _closure2_slot12 = var4;
                var13 = var16.useRef;
                var19 = var13.bind(var16)(var27);
                _closure2_slot13 = var19;
                var17 = var16.useLayoutEffect;
                var13 = new Array(7);
                var13[0] = var28;
                var13[1] = var33;
                var13[2] = var19;
                var13[3] = var27;
                var13[4] = var38;
                var13[5] = var36;
                var13[6] = var12;
                var12 = function() { // Environment: var20
                    _fun65638: for (var _fun65638_ip = 0;;) switch (_fun65638_ip) {
                        case 0:
                            var1 = _closure2_slot13;
                            var1 = var1.current;
                            var2 = var1.length;
                            var1 = _closure2_slot0;
                            var1 = var1.length;
                            if (!(var2 < var1)) {
                                _fun65638_ip = 173;
                                continue _fun65638
                            }
                        case 33:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun65638_ip = 99;
                                continue _fun65638
                            }
                        case 40:
                            var1 = _closure2_slot4;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var3 = undefined;
                            if (var2) {
                                _fun65638_ip = 70;
                                continue _fun65638
                            }
                        case 60:
                            var2 = var4.isFocused;
                            var3 = var2.bind(var4)();
                        case 70:
                            var2 = false;
                            if (!(var2 === var3)) {
                                _fun65638_ip = 99;
                                continue _fun65638
                            }
                        case 76:
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun65638_ip = 99;
                                continue _fun65638
                            }
                        case 89:
                            var1 = var2.focus;
                            var1 = var1.bind(var2)();
                        case 99:
                            var1 = global;
                            var3 = var1.setTimeout;
                            var4 = undefined;
                            var2 = function() { // Environment: var1
                                _fun65639: for (var _fun65639_ip = 0;;) switch (_fun65639_ip) {
                                    case 0:
                                        var0 = _closure2_slot8;
                                        var3 = var0.current;
                                        var0 = null;
                                        var1 = var0 == var3;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun65639_ip = 43;
                                            continue _fun65639
                                        }
                                    case 23:
                                        var2 = var3.scrollToEnd;
                                        var1 = {};
                                        var4 = false;
                                        var1.animated = var4;
                                        var0 = var2.bind(var3)(var1);
                                    case 43:
                                        return var0;
                                }
                            };
                            var1 = 10;
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun65638_ip = 154;
                                continue _fun65638
                            }
                        case 134:
                            var2 = _closure2_slot5;
                            var2 = var2.current;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var3 > var2;
                        case 154:
                            if (!var1) {
                                _fun65638_ip = 173;
                                continue _fun65638
                            }
                        case 157:
                            var3 = _closure2_slot6;
                            var2 = '';
                            var1 = true;
                            var1 = var3.bind(var4)(var2, var1);
                        case 173:
                            var1 = _closure2_slot13;
                            var0 = _closure2_slot0;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var17.bind(var16)(var12, var13);
                var13 = var16.useLayoutEffect;
                var12 = new Array(1);
                var12[0] = var4;
                var4 = function() { // Environment: var20
                    _fun65640: for (var _fun65640_ip = 0;;) switch (_fun65640_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun65640_ip = 53;
                                continue _fun65640
                            }
                        case 18:
                            var0 = _closure2_slot8;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun65640_ip = 53;
                                continue _fun65640
                            }
                        case 33:
                            var1 = var2.scrollToEnd;
                            var0 = {};
                            var3 = false;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var13.bind(var16)(var4, var12);
                if (var0) {
                    _fun65623_ip = 654;
                    continue _fun65623
                }
            case 648:
                var12 = _closure1_slot6;
                _fun65623_ip = 680;
                continue _fun65623;
            case 654:
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var4 = 12;
                var4 = var16[var4];
                var4 = var13.bind(var3)(var4);
                var12 = var4.BottomSheetScrollView;
            case 680:
                var4 = _closure1_slot0;
                var13 = _closure1_slot2;
                if (var0) {
                    _fun65623_ip = 711;
                    continue _fun65623
                }
            case 691:
                var0 = 14;
                var0 = var13[var0];
                var0 = var4.bind(var3)(var0);
                var19 = var0.TextInput;
                _fun65623_ip = 729;
                continue _fun65623;
            case 711:
                var0 = 13;
                var0 = var13[var0];
                var0 = var4.bind(var3)(var0);
                var19 = var0.BottomSheetTextInput;
            case 729:
                var0 = 33;
                var13 = var0 * var2;
                var4 = _closure1_slot4;
                var0 = var4.useState;
                var2 = var0.bind(var4)(var30);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var2, var21);
                var39 = var0[var30];
                var0 = var0[var1];
                _closure2_slot14 = var0;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var20
                    var2 = _closure2_slot14;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.width;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var16 = var2.bind(var4)(var1, var0);
                var28 = var6 == var10;
                if (!(var6 == var24)) {
                    _fun65623_ip = 857;
                    continue _fun65623
                }
            case 802:
                var4 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 15;
                var1 = var17[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var17[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["5h0QOP"];
                var24 = var1.bind(var2)(var0);
            case 857:
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var17 = var11.inputContainer;
                var4 = new Array(3);
                var4[0] = var17;
                var17 = {};
                var17.minHeight = var18;
                var4[1] = var17;
                var4[2] = var9;
                var0.style = var4;
                if (!(var6 == var8)) {
                    _fun65623_ip = 966;
                    continue _fun65623
                }
            case 904:
                var17 = _closure1_slot7;
                var9 = _closure1_slot0;
                var18 = _closure1_slot2;
                var4 = 16;
                var4 = var18[var4];
                var4 = var9.bind(var3)(var4);
                var9 = var4.MagnifyingGlassIcon;
                var4 = {
                    'style': null,
                    'size': 'xs',
                    'color': 'interactive-text-default'
                };
                var18 = var11.iconLeft;
                var4.style = var18;
                var8 = var17.bind(var3)(var9, var4);
            case 966:
                var4 = new Array(3);
                var4[0] = var8;
                var9 = _closure1_slot7;
                var8 = {};
                var17 = {};
                var18 = 3;
                var18 = var18 * var13;
                var17.maxHeight = var18;
                var8.style = var17;
                var18 = var11.scrollViewContent;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = undefined;
                if (!var37) {
                    _fun65623_ip = 1023;
                    continue _fun65623
                }
            case 1017:
                var18 = var11.horizontalScrollViewContent;
            case 1023:
                var17[1] = var18;
                var8.contentContainerStyle = var17;
                var8.ref = var15;
                var8.bounces = var29;
                var8.onScroll = var14;
                var15 = undefined;
                if (!var37) {
                    _fun65623_ip = 1054;
                    continue _fun65623
                }
            case 1051:
                var15 = var16;
            case 1054:
                var8.onLayout = var15;
                var15 = var6 != var14;
                var14 = undefined;
                if (!var15) {
                    _fun65623_ip = 1071;
                    continue _fun65623
                }
            case 1068:
                var14 = 16;
            case 1071:
                var8.scrollEventThrottle = var14;
                var8.horizontal = var37;
                var8.snapToInterval = var13;
                var13 = 'never';
                var8.overScrollMode = var13;
                var13 = 'handled';
                var8.keyboardShouldPersistTaps = var13;
                var15 = _closure1_slot8;
                var14 = _closure1_slot5;
                var13 = {};
                var16 = var11.inputInner;
                var13.style = var16;
                var17 = var27.map;
                var16 = function(arg0, arg1) { // Environment: var20
                    var5 = arg0;
                    var4 = arg1;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var4;
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TagListInputTagComponent;
                    var0 = {};
                    var0.tag = var5;
                    var8 = var5.id;
                    var7 = _closure2_slot9;
                    var7 = var8 === var7;
                    var0.selected = var7;
                    var6 = function(arg0) { // Original name: onPress, environment: var6
                        _fun65643: for (var _fun65643_ip = 0;;) switch (_fun65643_ip) {
                            case 0:
                                var1 = 'select';
                                var0 = arg0;
                                if (!(var1 !== var0)) {
                                    _fun65643_ip = 49;
                                    continue _fun65643
                                }
                            case 11:
                                var2 = _closure2_slot2;
                                var0 = null;
                                var2 = var0 == var2;
                                var3 = undefined;
                                var0 = undefined;
                                if (var2) {
                                    _fun65643_ip = 47;
                                    continue _fun65643
                                }
                            case 31:
                                var2 = _closure2_slot2;
                                var1 = _closure3_slot1;
                                var0 = var2.bind(var3)(var1);
                            case 47:
                                _fun65643_ip = 128;
                                continue _fun65643;
                            case 49:
                                var2 = _closure3_slot0;
                                var4 = _closure2_slot9;
                                var3 = var2.id;
                                if (!(var4 !== var3)) {
                                    _fun65643_ip = 88;
                                    continue _fun65643
                                }
                            case 72:
                                var4 = _closure2_slot10;
                                var3 = var2.id;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                            case 88:
                                var2 = _closure2_slot4;
                                var3 = var2.current;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun65643_ip = 113;
                                    continue _fun65643
                                }
                            case 103:
                                var2 = var3.focus;
                                var2 = var2.bind(var3)();
                            case 113:
                                var3 = _closure2_slot11;
                                var1 = undefined;
                                var2 = true;
                                var2 = var3.bind(var1)(var2);
                                var0 = undefined;
                            case 128:
                                return var0;
                        }
                    };
                    var0.onPress = var6;
                    var6 = 0;
                    var6 = var6 === var4;
                    var0.start = var6;
                    var5 = _closure2_slot0;
                    var6 = var5.length;
                    var5 = 1;
                    var5 = var6 - var5;
                    var5 = var4 === var5;
                    var0.end = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var17 = var17.bind(var27)(var16);
                var16 = new Array(2);
                var16[0] = var17;
                var18 = _closure1_slot7;
                var17 = {};
                var17.ref = var38;
                var38 = 'search';
                var17.accessibilityRole = var38;
                var40 = var36.current;
                var38 = '';
                if (!(var38 !== var40)) {
                    _fun65623_ip = 1187;
                    continue _fun65623
                }
            case 1182:
                var34 = var36.current;
            case 1187:
                var17.defaultValue = var34;
                var36 = var11.searchInput;
                var34 = new Array(4);
                var34[0] = var36;
                var36 = var37;
                if (!var36) {
                    _fun65623_ip = 1218;
                    continue _fun65623
                }
            case 1212:
                var36 = var11.horizontalSearchInput;
            case 1218:
                var34[1] = var36;
                var36 = undefined;
                if (!var37) {
                    _fun65623_ip = 1249;
                    continue _fun65623
                }
            case 1227:
                var36 = undefined;
                if (!var28) {
                    _fun65623_ip = 1249;
                    continue _fun65623
                }
            case 1232:
                var37 = {};
                var38 = 16;
                var38 = var39 - var38;
                var37.maxWidth = var38;
                var36 = var37;
            case 1249:
                var34[2] = var36;
                if (!var35) {
                    _fun65623_ip = 1262;
                    continue _fun65623
                }
            case 1256:
                var35 = var11.searchInputDisabled;
            case 1262:
                var34[3] = var35;
                var17.style = var34;
                var17.onChangeText = var33;
                var33 = function(arg0) { // Original name: onKeyPress, environment: var20
                    _fun65644: for (var _fun65644_ip = 0;;) switch (_fun65644_ip) {
                        case 0:
                            var4 = _closure2_slot11;
                            var0 = undefined;
                            var2 = false;
                            var2 = var4.bind(var0)(var2);
                            var2 = _closure2_slot5;
                            var2 = var2.current;
                            var2 = var2.length;
                            var5 = 0;
                            if (!(var5 === var2)) {
                                _fun65644_ip = 65;
                                continue _fun65644
                            }
                        case 38:
                            var2 = arg0;
                            var2 = var2.nativeEvent;
                            var4 = var2.key;
                            var2 = 'Backspace';
                            if (!(var2 !== var4)) {
                                _fun65644_ip = 207;
                                continue _fun65644
                            }
                        case 65:
                            var2 = _closure2_slot9;
                            var4 = null;
                            if (!(var4 == var2)) {
                                _fun65644_ip = 193;
                                continue _fun65644
                            }
                        case 75:
                            var2 = _closure2_slot7;
                            var2 = var2.current;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun65644_ip = 123;
                                continue _fun65644
                            }
                        case 91:
                            var6 = _closure2_slot7;
                            var6 = var6.current;
                            var7 = var6.start;
                            var6 = _closure2_slot7;
                            var6 = var6.current;
                            var6 = var6.end;
                            var2 = var7 === var6;
                        case 123:
                            if (!var2) {
                                _fun65644_ip = 158;
                                continue _fun65644
                            }
                        case 126:
                            var6 = _closure2_slot7;
                            var6 = var6.current;
                            var7 = var6.start;
                            var6 = _closure2_slot5;
                            var6 = var6.current;
                            var6 = var6.length;
                            var2 = var7 === var6;
                        case 158:
                            if (!var2) {
                                _fun65644_ip = 442;
                                continue _fun65644
                            }
                        case 164:
                            var2 = global;
                            var7 = var2.setTimeout;
                            var6 = function() { // Environment: var3
                                _fun65646: for (var _fun65646_ip = 0;;) switch (_fun65646_ip) {
                                    case 0:
                                        var0 = _closure2_slot8;
                                        var3 = var0.current;
                                        var0 = null;
                                        var1 = var0 == var3;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun65646_ip = 43;
                                            continue _fun65646
                                        }
                                    case 23:
                                        var2 = var3.scrollToEnd;
                                        var1 = {};
                                        var4 = false;
                                        var1.animated = var4;
                                        var0 = var2.bind(var3)(var1);
                                    case 43:
                                        return var0;
                                }
                            };
                            var2 = 10;
                            var2 = var7.bind(var0)(var6, var2);
                            _fun65644_ip = 442;
                            continue _fun65644;
                        case 193:
                            var2 = _closure2_slot10;
                            var2 = var2.bind(var0)(var4);
                            _fun65644_ip = 442;
                            continue _fun65644;
                        case 207:
                            var4 = _closure2_slot9;
                            var2 = null;
                            if (!(var2 == var4)) {
                                _fun65644_ip = 384;
                                continue _fun65644
                            }
                        case 220:
                            var4 = _closure2_slot0;
                            var4 = var4.length;
                            if (!(var4 > var5)) {
                                _fun65644_ip = 442;
                                continue _fun65644
                            }
                        case 236:
                            var5 = _closure2_slot0;
                            var6 = var5.length;
                            var4 = 1;
                            var4 = var6 - var4;
                            var10 = var5[var4];
                            var5 = _closure2_slot10;
                            var4 = var10.id;
                            var4 = var5.bind(var0)(var4);
                            var5 = _closure2_slot11;
                            var4 = true;
                            var4 = var5.bind(var0)(var4);
                            var7 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var4 = 18;
                            var4 = var11[var4];
                            var4 = var7.bind(var0)(var4);
                            var6 = var4.AccessibilityAnnouncer;
                            var5 = var6.announce;
                            var4 = 15;
                            var8 = var11[var4];
                            var8 = var7.bind(var0)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var4 = var11[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var7 = var4.QymItZ;
                            var4 = {};
                            var10 = var10.text;
                            var4.text = var10;
                            var4 = var8.bind(var9)(var7, var4);
                            var4 = var5.bind(var6)(var4);
                            _fun65644_ip = 442;
                            continue _fun65644;
                        case 384:
                            var5 = _closure2_slot0;
                            var4 = var5.findIndex;
                            var3 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure2_slot9;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var4 = var4.bind(var5)(var3);
                            var3 = -1;
                            if (!(var4 > var3)) {
                                _fun65644_ip = 442;
                                continue _fun65644
                            }
                        case 416:
                            var3 = _closure2_slot2;
                            if (!(var2 != var3)) {
                                _fun65644_ip = 433;
                                continue _fun65644
                            }
                        case 424:
                            var3 = _closure2_slot2;
                            var3 = var3.bind(var0)(var4);
                        case 433:
                            var1 = _closure2_slot10;
                            var1 = var1.bind(var0)(var2);
                        case 442:
                            return var0;
                    }
                };
                var17.onKeyPress = var33;
                var17.onFocus = var32;
                var17.onBlur = var31;
                var31 = function() { // Original name: onPressIn, environment: var20
                    var3 = _closure2_slot11;
                    var0 = undefined;
                    var2 = false;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot10;
                    var1 = null;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var17.onPressIn = var31;
                var31 = 'none';
                var17.autoCapitalize = var31;
                var17.autoCorrect = var29;
                var17['aria-label'] = var24;
                var29 = var27.length;
                var27 = undefined;
                if (!(var30 === var29)) {
                    _fun65623_ip = 1347;
                    continue _fun65623
                }
            case 1339:
                var27 = undefined;
                if (!var28) {
                    _fun65623_ip = 1347;
                    continue _fun65623
                }
            case 1344:
                var27 = var24;
            case 1347:
                var17.placeholder = var27;
                var27 = var11.placeholder;
                var27 = var27.color;
                var17.placeholderTextColor = var27;
                var17.autoFocus = var26;
                var17.returnKeyType = var25;
                var17.accessibilityLabel = var24;
                var17.caretHidden = var23;
                var17.onSubmitEditing = var22;
                var17.maxFontSizeMultiplier = var21;
                var20 = function(arg0) { // Original name: onSelectionChange, environment: var20
                    var1 = _closure2_slot7;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.selection;
                    var1.current = var0;
                    return var0;
                };
                var17.onSelectionChange = var20;
                var17 = var18.bind(var3)(var19, var17);
                var16[1] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var8.children = var13;
                var8 = var9.bind(var3)(var12, var8);
                var4[1] = var8;
                if (!(var6 == var5)) {
                    _fun65623_ip = 1489;
                    continue _fun65623
                }
            case 1447:
                var8 = var6 != var10;
                var6 = null;
                if (!var8) {
                    _fun65623_ip = 1486;
                    continue _fun65623
                }
            case 1456:
                var9 = _closure1_slot7;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var11.iconContainer;
                var7.style = var11;
                var7.children = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 1486:
                var5 = var6;
            case 1489:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/TagListInput/native/TagListInput.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 5357, 3901, 5364, 4049, 5361, 4890, 4895, 5370, 4838, 1234, 6973, 8106, 3119, 2]);