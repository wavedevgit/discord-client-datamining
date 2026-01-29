// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function(arg0) { // Original name: InternalTextInput, environment: var4
        _fun5834: for (var _fun5834_ip = 0;;) switch (_fun5834_ip) {
            case 0:
                var11 = arg0;
                var _closure2_slot0 = var11;
                var28 = var11["aria-busy"];
                var24 = var11["aria-checked"];
                var21 = var11["aria-disabled"];
                var13 = var11["aria-expanded"];
                var8 = var11["aria-selected"];
                var14 = var11.accessibilityState;
                var16 = var11.id;
                var20 = var11.tabIndex;
                var9 = var11.selection;
                var4 = var11.selectionColor;
                var5 = var11.selectionHandleColor;
                var2 = var11.cursorColor;
                var6 = _closure1_slot7;
                var1 = _closure1_slot2;
                var3 = undefined;
                var10 = var6.bind(var3)(var11, var1);
                var1 = _closure1_slot13;
                var17 = null;
                var19 = var1.bind(var3)(var17);
                var _closure2_slot1 = var19;
                var1 = var17 == var9;
                var6 = null;
                if (var1) {
                    _fun5834_ip = 155;
                    continue _fun5834
                }
            case 123:
                var1 = {};
                var7 = var9.start;
                var1.start = var7;
                var7 = var9.end;
                if (!(var17 == var7)) {
                    _fun5834_ip = 148;
                    continue _fun5834
                }
            case 143:
                var7 = var9.start;
            case 148:
                var1.end = var7;
                var6 = var1;
            case 155:
                var1 = var11.value;
                var7 = 'string';
                var1 = typeof var1;
                if (!(var7 !== var1)) {
                    _fun5834_ip = 194;
                    continue _fun5834
                }
            case 171:
                var1 = var11.defaultValue;
                var1 = typeof var1;
                var12 = undefined;
                if (!(var7 === var1)) {
                    _fun5834_ip = 192;
                    continue _fun5834
                }
            case 186:
                var12 = var11.defaultValue;
            case 192:
                _fun5834_ip = 199;
                continue _fun5834;
            case 194:
                var12 = var11.value;
            case 199:
                var1 = _closure1_slot6;
                if (var1) {
                    _fun5834_ip = 214;
                    continue _fun5834
                }
            case 206:
                var7 = var11.multiline;
                var1 = undefined;
            case 214:
                var _closure2_slot2 = var1;
                var9 = _closure1_slot14;
                var7 = 0;
                var22 = var9.bind(var3)(var7);
                var18 = _closure1_slot8;
                var9 = 2;
                var9 = var18.bind(var3)(var22, var9);
                var18 = var9[var7];
                var _closure2_slot3 = var18;
                var7 = 1;
                var9 = var9[var7];
                var _closure2_slot4 = var9;
                var9 = {};
                var9.props = var11;
                var9.inputRef = var19;
                var9.mostRecentEventCount = var18;
                var9.selection = var6;
                var9.text = var12;
                var9.viewCommands = var1;
                var6 = function(arg0) { // Original name: useTextInputStateSynchronization, environment: var15
                    var1 = arg0;
                    var11 = var1.props;
                    var _closure3_slot0 = var11;
                    var13 = var1.mostRecentEventCount;
                    var _closure3_slot1 = var13;
                    var9 = var1.selection;
                    var _closure3_slot2 = var9;
                    var12 = var1.inputRef;
                    var _closure3_slot3 = var12;
                    var7 = var1.text;
                    var _closure3_slot4 = var7;
                    var6 = var1.viewCommands;
                    var _closure3_slot5 = var6;
                    var2 = _closure1_slot14;
                    var1 = var11.value;
                    var5 = undefined;
                    var2 = var2.bind(var5)(var1);
                    var1 = _closure1_slot8;
                    var15 = 2;
                    var1 = var1.bind(var5)(var2, var15);
                    var4 = 0;
                    var10 = var1[var4];
                    var _closure3_slot6 = var10;
                    var8 = 1;
                    var2 = var1[var8];
                    var _closure3_slot7 = var2;
                    var14 = _closure1_slot14;
                    var1 = {};
                    var16 = {
                        'start': 4294967295,
                        'end': 4294967295
                    };
                    var1.selection = var16;
                    var1.mostRecentEventCount = var13;
                    var14 = var14.bind(var5)(var1);
                    var1 = _closure1_slot8;
                    var1 = var1.bind(var5)(var14, var15);
                    var4 = var1[var4];
                    var1 = var1[var8];
                    var _closure3_slot8 = var1;
                    var8 = var4.selection;
                    var _closure3_slot9 = var8;
                    var4 = _closure1_slot11;
                    var3 = new Array(9);
                    var3[0] = var13;
                    var3[1] = var12;
                    var12 = var11.value;
                    var3[2] = var12;
                    var11 = var11.defaultValue;
                    var3[3] = var11;
                    var3[4] = var10;
                    var3[5] = var9;
                    var3[6] = var8;
                    var3[7] = var7;
                    var3[8] = var6;
                    var0 = function() { // Environment: var0
                        _fun5836: for (var _fun5836_ip = 0;;) switch (_fun5836_ip) {
                            case 0:
                                var2 = {};
                                var1 = _closure3_slot6;
                                var0 = _closure3_slot0;
                                var0 = var0.value;
                                var0 = var1 !== var0;
                                if (!var0) {
                                    _fun5836_ip = 45;
                                    continue _fun5836
                                }
                            case 25:
                                var1 = _closure3_slot0;
                                var1 = var1.value;
                                var3 = 'string';
                                var1 = typeof var1;
                                var0 = var3 === var1;
                            case 45:
                                if (!var0) {
                                    _fun5836_ip = 79;
                                    continue _fun5836
                                }
                            case 48:
                                var0 = _closure3_slot0;
                                var1 = var0.value;
                                var2.text = var1;
                                var3 = _closure3_slot7;
                                var1 = var0.value;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var1);
                            case 79:
                                var0 = _closure3_slot2;
                                if (!var0) {
                                    _fun5836_ip = 90;
                                    continue _fun5836
                                }
                            case 86:
                                var0 = _closure3_slot9;
                            case 90:
                                if (!var0) {
                                    _fun5836_ip = 143;
                                    continue _fun5836
                                }
                            case 93:
                                var1 = _closure3_slot9;
                                var3 = var1.start;
                                var1 = _closure3_slot2;
                                var1 = var1.start;
                                var1 = var3 !== var1;
                                if (var1) {
                                    _fun5836_ip = 140;
                                    continue _fun5836
                                }
                            case 118:
                                var3 = _closure3_slot9;
                                var4 = var3.end;
                                var3 = _closure3_slot2;
                                var3 = var3.end;
                                var1 = var4 !== var3;
                            case 140:
                                var0 = var1;
                            case 143:
                                if (!var0) {
                                    _fun5836_ip = 183;
                                    continue _fun5836
                                }
                            case 146:
                                var0 = _closure3_slot2;
                                var2.selection = var0;
                                var3 = _closure3_slot8;
                                var1 = {};
                                var1.selection = var0;
                                var0 = _closure3_slot1;
                                var1.mostRecentEventCount = var0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var1);
                            case 183:
                                var0 = global;
                                var1 = var0.Object;
                                var0 = var1.keys;
                                var0 = var0.bind(var1)(var2);
                                var1 = var0.length;
                                var0 = 0;
                                var0 = var0 !== var1;
                                if (!var0) {
                                    _fun5836_ip = 230;
                                    continue _fun5836
                                }
                            case 215:
                                var1 = _closure3_slot3;
                                var2 = var1.current;
                                var1 = null;
                                var0 = var1 != var2;
                            case 230:
                                if (!var0) {
                                    _fun5836_ip = 360;
                                    continue _fun5836
                                }
                            case 236:
                                var6 = _closure3_slot5;
                                var5 = var6.setTextAndSelection;
                                var0 = _closure3_slot3;
                                var4 = var0.current;
                                var3 = _closure3_slot1;
                                var2 = _closure3_slot4;
                                var0 = _closure3_slot2;
                                var8 = null;
                                var0 = var8 == var0;
                                var10 = undefined;
                                if (var0) {
                                    _fun5836_ip = 287;
                                    continue _fun5836
                                }
                            case 278:
                                var0 = _closure3_slot2;
                                var10 = var0.start;
                            case 287:
                                var11 = var8 != var10;
                                var1 = -1;
                                var0 = var1;
                                if (!var11) {
                                    _fun5836_ip = 306;
                                    continue _fun5836
                                }
                            case 303:
                                var0 = var10;
                            case 306:
                                var10 = _closure3_slot2;
                                var10 = var8 == var10;
                                var7 = undefined;
                                if (var10) {
                                    _fun5836_ip = 328;
                                    continue _fun5836
                                }
                            case 319:
                                var9 = _closure3_slot2;
                                var7 = var9.end;
                            case 328:
                                var8 = var8 != var7;
                                if (!var8) {
                                    _fun5836_ip = 338;
                                    continue _fun5836
                                }
                            case 335:
                                var1 = var7;
                            case 338:
                                var17 = var6;
                                var16 = var4;
                                var15 = var3;
                                var14 = var2;
                                var13 = var0;
                                var12 = var1;
                                var0 = var17[var5](var16, var15, var14, var13, var12, var11);
                            case 360:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var4.bind(var5)(var0, var3);
                    var0 = {};
                    var0.setLastNativeText = var2;
                    var0.setLastNativeSelection = var1;
                    return var0;
                };
                var6 = var6.bind(var3)(var9);
                var9 = var6.setLastNativeText;
                var _closure2_slot5 = var9;
                var6 = var6.setLastNativeSelection;
                var _closure2_slot6 = var6;
                var19 = _closure1_slot11;
                var9 = function() { // Environment: var15
                    _fun5837: for (var _fun5837_ip = 0;;) switch (_fun5837_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = var1.current;
                            var _closure3_slot0 = var3;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun5837_ip = 28;
                                continue _fun5837
                            }
                        case 24:
                            var1 = undefined;
                            return var1;
                        case 28:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.registerInput;
                            var1 = var1.bind(var2)(var3);
                            var0 = function() { // Environment: var0
                                _fun5838: for (var _fun5838_ip = 0;;) switch (_fun5838_ip) {
                                    case 0:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var3 = 5;
                                        var1 = var6[var3];
                                        var0 = undefined;
                                        var8 = var5.bind(var0)(var1);
                                        var7 = var8.unregisterInput;
                                        var4 = _closure3_slot0;
                                        var7 = var7.bind(var8)(var4);
                                        var3 = var6[var3];
                                        var5 = var5.bind(var0)(var3);
                                        var3 = var5.currentlyFocusedInput;
                                        var3 = var3.bind(var5)();
                                        if (!(var3 === var4)) {
                                            _fun5838_ip = 105;
                                            continue _fun5838
                                        }
                                    case 66:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var2 = 6;
                                        var2 = var4[var2];
                                        var2 = var3.bind(var0)(var2);
                                        var1 = _closure3_slot0;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.blur;
                                        var1 = var1.bind(var2)();
                                    case 105:
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var6 = new Array(0);
                var6 = var19.bind(var3)(var9, var6);
                var9 = _closure1_slot10;
                var6 = new Array(2);
                var6[0] = var18;
                var6[1] = var1;
                var1 = function(arg0) { // Environment: var15
                    _fun5839: for (var _fun5839_ip = 0;;) switch (_fun5839_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot1;
                            var0.current = var3;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun5839_ip = 85;
                                continue _fun5839
                            }
                        case 24:
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.assign;
                            var0 = {};
                            var5 = function() { // Original name: clear, environment: var4
                                _fun5840: for (var _fun5840_ip = 0;;) switch (_fun5840_ip) {
                                    case 0:
                                        var1 = _closure2_slot1;
                                        var2 = var1.current;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun5840_ip = 56;
                                            continue _fun5840
                                        }
                                    case 18:
                                        var5 = _closure2_slot2;
                                        var4 = var5.setTextAndSelection;
                                        var1 = _closure2_slot1;
                                        var10 = var1.current;
                                        var9 = _closure2_slot3;
                                        var8 = '';
                                        var11 = var5;
                                        var7 = 0;
                                        var6 = 0;
                                        var0 = var11[var4](var10, var9, var8, var7, var6, var5);
                                    case 56:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.clear = var5;
                            var5 = function() { // Original name: isFocused, environment: var4
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.currentlyFocusedInput;
                                var1 = var0.bind(var1)();
                                var0 = _closure2_slot1;
                                var0 = var0.current;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0.isFocused = var5;
                            var5 = function() { // Original name: getNativeRef, environment: var4
                                var0 = _closure2_slot1;
                                var0 = var0.current;
                                return var0;
                            };
                            var0.getNativeRef = var5;
                            var4 = function(arg0, arg1) { // Original name: setSelection, environment: var4
                                _fun5843: for (var _fun5843_ip = 0;;) switch (_fun5843_ip) {
                                    case 0:
                                        var1 = _closure2_slot1;
                                        var1 = var1.current;
                                        var6 = null;
                                        if (!(var6 != var1)) {
                                            _fun5843_ip = 56;
                                            continue _fun5843
                                        }
                                    case 18:
                                        var5 = _closure2_slot2;
                                        var4 = var5.setTextAndSelection;
                                        var1 = _closure2_slot1;
                                        var11 = var1.current;
                                        var10 = _closure2_slot3;
                                        var8 = arg0;
                                        var7 = arg1;
                                        var12 = var5;
                                        var9 = null;
                                        var0 = var12[var4](var11, var10, var9, var8, var7, var6);
                                    case 56:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.setSelection = var4;
                            var0 = var1.bind(var2)(var3, var0);
                        case 85:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var9.bind(var3)(var1, var6);
                var6 = _closure1_slot0;
                var19 = _closure1_slot1;
                var1 = 7;
                var1 = var19[var1];
                var6 = var6.bind(var3)(var1);
                var1 = var11.forwardedRef;
                var1 = var6.bind(var3)(var9, var1);
                var9 = var11.multiline;
                var6 = var17 != var9;
                if (!var6) {
                    _fun5834_ip = 415;
                    continue _fun5834
                }
            case 412:
                var6 = var9;
            case 415:
                var9 = var11.submitBehavior;
                if (!(var17 == var9)) {
                    _fun5834_ip = 473;
                    continue _fun5834
                }
            case 425:
                var22 = var11.blurOnSubmit;
                if (var6) {
                    _fun5834_ip = 452;
                    continue _fun5834
                }
            case 434:
                var23 = 'submit';
                var9 = false;
                if (!(var9 !== var22)) {
                    _fun5834_ip = 450;
                    continue _fun5834
                }
            case 444:
                var23 = 'blurAndSubmit';
            case 450:
                _fun5834_ip = 471;
                continue _fun5834;
            case 452:
                var9 = 'newline';
                var19 = true;
                if (!(var19 === var22)) {
                    _fun5834_ip = 468;
                    continue _fun5834
                }
            case 462:
                var9 = 'blurAndSubmit';
            case 468:
                var23 = var9;
            case 471:
                _fun5834_ip = 505;
                continue _fun5834;
            case 473:
                if (var6) {
                    _fun5834_ip = 496;
                    continue _fun5834
                }
            case 476:
                var19 = var11.submitBehavior;
                var6 = 'blurAndSubmit';
                var9 = 'newline';
                if (!(var9 !== var19)) {
                    _fun5834_ip = 502;
                    continue _fun5834
                }
            case 496:
                var6 = var11.submitBehavior;
            case 502:
                var23 = var6;
            case 505:
                var26 = var11.accessible;
                var6 = var11.focusable;
                var25 = false;
                var19 = var25 !== var6;
                var32 = var11.editable;
                var _closure2_slot7 = var32;
                var31 = var11.hitSlop;
                var _closure2_slot8 = var31;
                var30 = var11.onPress;
                var _closure2_slot9 = var30;
                var29 = var11.onPressIn;
                var _closure2_slot10 = var29;
                var27 = var11.onPressOut;
                var _closure2_slot11 = var27;
                var6 = var11.rejectResponderTermination;
                var22 = _closure1_slot12;
                var9 = new Array(6);
                var9[0] = var32;
                var9[1] = var31;
                var9[2] = var30;
                var9[3] = var29;
                var9[4] = var27;
                var9[5] = var6;
                var6 = function() { // Environment: var15
                    var0 = {};
                    var2 = _closure2_slot8;
                    var0.hitSlop = var2;
                    var2 = function(arg0) { // Original name: onPress, environment: var2
                        _fun5845: for (var _fun5845_ip = 0;;) switch (_fun5845_ip) {
                            case 0:
                                var1 = _closure2_slot9;
                                var3 = null;
                                if (!(var3 != var1)) {
                                    _fun5845_ip = 27;
                                    continue _fun5845
                                }
                            case 13:
                                var4 = _closure2_slot9;
                                var2 = undefined;
                                var1 = arg0;
                                var1 = var4.bind(var2)(var1);
                            case 27:
                                var2 = _closure2_slot7;
                                var1 = false;
                                var1 = var1 !== var2;
                                if (!var1) {
                                    _fun5845_ip = 53;
                                    continue _fun5845
                                }
                            case 40:
                                var2 = _closure2_slot1;
                                var2 = var2.current;
                                var1 = var3 != var2;
                            case 53:
                                if (!var1) {
                                    _fun5845_ip = 75;
                                    continue _fun5845
                                }
                            case 56:
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = var1.focus;
                                var0 = var0.bind(var1)();
                            case 75:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onPress = var2;
                    var2 = _closure2_slot10;
                    var0.onPressIn = var2;
                    var1 = _closure2_slot11;
                    var0.onPressOut = var1;
                    var1 = null;
                    var0.cancelable = var1;
                    return var0;
                };
                var9 = var22.bind(var3)(var6, var9);
                var22 = var11.caretHidden;
                var27 = _closure1_slot0;
                var29 = _closure1_slot1;
                var6 = 8;
                var6 = var29[var6];
                var6 = var27.bind(var3)(var6);
                var6 = var6.isTesting;
                if (!var6) {
                    _fun5834_ip = 657;
                    continue _fun5834
                }
            case 655:
                var22 = true;
            case 657:
                var27 = _closure1_slot0;
                var29 = _closure1_slot1;
                var6 = 9;
                var6 = var29[var6];
                var6 = var27.bind(var3)(var6);
                var27 = var6.bind(var3)(var9);
                var6 = var27.onBlur;
                var6 = var27.onFocus;
                var9 = _closure1_slot7;
                var6 = _closure1_slot3;
                var9 = var9.bind(var3)(var27, var6);
                var6 = var17 == var11;
                var29 = undefined;
                if (var6) {
                    _fun5834_ip = 723;
                    continue _fun5834
                }
            case 717:
                var29 = var11["aria-label"];
            case 723:
                if (!(var17 == var29)) {
                    _fun5834_ip = 744;
                    continue _fun5834
                }
            case 727:
                var27 = var17 == var11;
                var6 = undefined;
                if (var27) {
                    _fun5834_ip = 741;
                    continue _fun5834
                }
            case 736:
                var6 = var11.accessibilityLabel;
            case 741:
                var29 = var6;
            case 744:
                var6 = var17 == var14;
                if (!var6) {
                    _fun5834_ip = 755;
                    continue _fun5834
                }
            case 751:
                var6 = var17 == var28;
            case 755:
                if (!var6) {
                    _fun5834_ip = 762;
                    continue _fun5834
                }
            case 758:
                var6 = var17 == var24;
            case 762:
                if (!var6) {
                    _fun5834_ip = 769;
                    continue _fun5834
                }
            case 765:
                var6 = var17 == var21;
            case 769:
                if (!var6) {
                    _fun5834_ip = 776;
                    continue _fun5834
                }
            case 772:
                var6 = var17 == var13;
            case 776:
                if (!var6) {
                    _fun5834_ip = 783;
                    continue _fun5834
                }
            case 779:
                var6 = var17 == var8;
            case 783:
                var27 = undefined;
                if (var6) {
                    _fun5834_ip = 929;
                    continue _fun5834
                }
            case 791:
                var6 = {};
                if (!(var17 == var28)) {
                    _fun5834_ip = 815;
                    continue _fun5834
                }
            case 797:
                var31 = var17 == var14;
                var30 = undefined;
                if (var31) {
                    _fun5834_ip = 812;
                    continue _fun5834
                }
            case 806:
                var30 = var14.busy;
            case 812:
                var28 = var30;
            case 815:
                var6.busy = var28;
                if (!(var17 == var24)) {
                    _fun5834_ip = 842;
                    continue _fun5834
                }
            case 824:
                var30 = var17 == var14;
                var28 = undefined;
                if (var30) {
                    _fun5834_ip = 839;
                    continue _fun5834
                }
            case 833:
                var28 = var14.checked;
            case 839:
                var24 = var28;
            case 842:
                var6.checked = var24;
                if (!(var17 == var21)) {
                    _fun5834_ip = 868;
                    continue _fun5834
                }
            case 851:
                var28 = var17 == var14;
                var24 = undefined;
                if (var28) {
                    _fun5834_ip = 865;
                    continue _fun5834
                }
            case 860:
                var24 = var14.disabled;
            case 865:
                var21 = var24;
            case 868:
                var6.disabled = var21;
                if (!(var17 == var13)) {
                    _fun5834_ip = 894;
                    continue _fun5834
                }
            case 876:
                var24 = var17 == var14;
                var21 = undefined;
                if (var24) {
                    _fun5834_ip = 891;
                    continue _fun5834
                }
            case 885:
                var21 = var14.expanded;
            case 891:
                var13 = var21;
            case 894:
                var6.expanded = var13;
                if (!(var17 == var8)) {
                    _fun5834_ip = 921;
                    continue _fun5834
                }
            case 903:
                var21 = var17 == var14;
                var13 = undefined;
                if (var21) {
                    _fun5834_ip = 918;
                    continue _fun5834
                }
            case 912:
                var13 = var14.selected;
            case 918:
                var8 = var13;
            case 921:
                var6.selected = var8;
                var27 = var6;
            case 929:
                var14 = var11.style;
                var8 = _closure1_slot0;
                var13 = _closure1_slot1;
                var6 = 10;
                var6 = var13[var6];
                var8 = var8.bind(var3)(var6);
                var6 = var11.style;
                var21 = var8.bind(var3)(var6);
                var13 = var14;
                if (!(var17 != var21)) {
                    _fun5834_ip = 1100;
                    continue _fun5834
                }
            case 974:
                var8 = var17 == var21;
                var6 = undefined;
                if (var8) {
                    _fun5834_ip = 989;
                    continue _fun5834
                }
            case 983:
                var6 = var21.fontWeight;
            case 989:
                var8 = 'number';
                var6 = typeof var6;
                var24 = null;
                if (!(var8 === var6)) {
                    _fun5834_ip = 1028;
                    continue _fun5834
                }
            case 1002:
                var6 = {};
                var28 = var21.fontWeight;
                var8 = var28.toString;
                var8 = var8.bind(var28)();
                var6.fontWeight = var8;
                var24 = var6;
            case 1028:
                var6 = var21.verticalAlign;
                var8 = var24;
                if (!(var17 != var6)) {
                    _fun5834_ip = 1078;
                    continue _fun5834
                }
            case 1041:
                var6 = var24;
                if (var24) {
                    _fun5834_ip = 1049;
                    continue _fun5834
                }
            case 1047:
                var6 = {};
            case 1049:
                var24 = _closure1_slot19;
                var21 = var21.verticalAlign;
                var21 = var24[var21];
                var6.textAlignVertical = var21;
                var6.verticalAlign = var3;
                var8 = var6;
            case 1078:
                var13 = var14;
                if (!(var17 != var8)) {
                    _fun5834_ip = 1100;
                    continue _fun5834
                }
            case 1085:
                var6 = new Array(2);
                var6[0] = var14;
                var6[1] = var8;
                var13 = var6;
            case 1100:
                var24 = var11.autoCapitalize;
                if (var24) {
                    _fun5834_ip = 1115;
                    continue _fun5834
                }
            case 1109:
                var24 = 'sentences';
            case 1115:
                var6 = var17 == var11;
                var28 = undefined;
                if (var6) {
                    _fun5834_ip = 1130;
                    continue _fun5834
                }
            case 1124:
                var28 = var11["aria-labelledby"];
            case 1130:
                if (!(var17 == var28)) {
                    _fun5834_ip = 1152;
                    continue _fun5834
                }
            case 1134:
                var8 = var17 == var11;
                var6 = undefined;
                if (var8) {
                    _fun5834_ip = 1149;
                    continue _fun5834
                }
            case 1143:
                var6 = var11.accessibilityLabelledBy;
            case 1149:
                var28 = var6;
            case 1152:
                var6 = var11.placeholder;
                var8 = var17 != var6;
                var14 = '';
                if (!var8) {
                    _fun5834_ip = 1172;
                    continue _fun5834
                }
            case 1169:
                var14 = var6;
            case 1172:
                var30 = var11.children;
                var6 = _closure1_slot9;
                var8 = var6.Children;
                var6 = var8.count;
                var6 = var6.bind(var8)(var30);
                var21 = _closure1_slot0;
                var31 = _closure1_slot1;
                var8 = 11;
                var8 = var31[var8];
                var31 = var21.bind(var3)(var8);
                var8 = var11.value;
                var8 = var17 != var8;
                if (!var8) {
                    _fun5834_ip = 1233;
                    continue _fun5834
                }
            case 1230:
                var8 = var6;
            case 1233:
                var21 = !var8;
                var8 = 'Cannot specify both value and children.';
                var8 = var31.bind(var3)(var21, var8);
                var21 = var30;
                if (!(var6 > var7)) {
                    _fun5834_ip = 1291;
                    continue _fun5834
                }
            case 1255:
                var8 = _closure1_slot15;
                var7 = _closure1_slot0;
                var31 = _closure1_slot1;
                var6 = 12;
                var6 = var31[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.children = var30;
                var21 = var8.bind(var3)(var7, var6);
            case 1291:
                var8 = {};
                var8.selectionColor = var4;
                if (!(var3 === var5)) {
                    _fun5834_ip = 1305;
                    continue _fun5834
                }
            case 1302:
                var5 = var4;
            case 1305:
                var8.selectionHandleColor = var5;
                if (!(var3 === var2)) {
                    _fun5834_ip = 1317;
                    continue _fun5834
                }
            case 1314:
                var2 = var4;
            case 1317:
                var8.cursorColor = var2;
                var4 = _closure1_slot15;
                var2 = _closure1_slot5;
                var5 = global;
                var7 = var5.Object;
                var6 = var7.assign;
                var5 = {};
                var5.ref = var1;
                var1 = {};
                var1.accessibilityLabel = var29;
                var1.accessibilityLabelledBy = var28;
                var1.accessibilityState = var27;
                var25 = var25 !== var26;
                var1.accessible = var25;
                var25 = var11.experimental_acceptDragAndDropTypes;
                var1.acceptDragAndDropTypes = var25;
                var1.autoCapitalize = var24;
                var1.submitBehavior = var23;
                var1.caretHidden = var22;
                var1.children = var21;
                var21 = var11.disableFullscreenUI;
                var1.disableFullscreenUI = var21;
                if (!(var3 !== var20)) {
                    _fun5834_ip = 1421;
                    continue _fun5834
                }
            case 1418:
                var19 = !var20;
            case 1421:
                var1.focusable = var19;
                var1.mostRecentEventCount = var18;
                if (!(var17 == var16)) {
                    _fun5834_ip = 1441;
                    continue _fun5834
                }
            case 1435:
                var16 = var11.nativeID;
            case 1441:
                var1.nativeID = var16;
                var16 = var11.rows;
                if (!(var17 == var16)) {
                    _fun5834_ip = 1462;
                    continue _fun5834
                }
            case 1456:
                var16 = var11.numberOfLines;
            case 1462:
                var1.numberOfLines = var16;
                var16 = function(arg0) { // Original name: _onBlur, environment: var15
                    _fun5846: for (var _fun5846_ip = 0;;) switch (_fun5846_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.blurInput;
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure2_slot0;
                            var2 = var2.onBlur;
                            if (!var2) {
                                _fun5846_ip = 79;
                                continue _fun5846
                            }
                        case 61:
                            var3 = _closure2_slot0;
                            var2 = var3.onBlur;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                        case 79:
                            return var0;
                    }
                };
                var1.onBlur = var16;
                var16 = function(arg0) { // Original name: _onChange, environment: var15
                    _fun5847: for (var _fun5847_ip = 0;;) switch (_fun5847_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.nativeEvent;
                            var4 = var1.text;
                            var2 = _closure2_slot0;
                            var2 = var2.onChange;
                            if (!var2) {
                                _fun5847_ip = 45;
                                continue _fun5847
                            }
                        case 30:
                            var3 = _closure2_slot0;
                            var2 = var3.onChange;
                            var2 = var2.bind(var3)(var0);
                        case 45:
                            var2 = _closure2_slot0;
                            var2 = var2.onChangeText;
                            if (!var2) {
                                _fun5847_ip = 73;
                                continue _fun5847
                            }
                        case 58:
                            var3 = _closure2_slot0;
                            var2 = var3.onChangeText;
                            var2 = var2.bind(var3)(var4);
                        case 73:
                            var2 = _closure2_slot1;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun5847_ip = 120;
                                continue _fun5847
                            }
                        case 88:
                            var3 = _closure2_slot5;
                            var2 = undefined;
                            var3 = var3.bind(var2)(var4);
                            var1 = _closure2_slot4;
                            var0 = var0.nativeEvent;
                            var0 = var0.eventCount;
                            var0 = var1.bind(var2)(var0);
                        case 120:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onChange = var16;
                var16 = function(arg0) { // Original name: _onFocus, environment: var15
                    _fun5848: for (var _fun5848_ip = 0;;) switch (_fun5848_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.focusInput;
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure2_slot0;
                            var2 = var2.onFocus;
                            if (!var2) {
                                _fun5848_ip = 79;
                                continue _fun5848
                            }
                        case 61:
                            var3 = _closure2_slot0;
                            var2 = var3.onFocus;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                        case 79:
                            return var0;
                    }
                };
                var1.onFocus = var16;
                var16 = function(arg0) { // Original name: _onScroll, environment: var15
                    _fun5849: for (var _fun5849_ip = 0;;) switch (_fun5849_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var1 = var1.onScroll;
                            if (!var1) {
                                _fun5849_ip = 34;
                                continue _fun5849
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var1 = var2.onScroll;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onScroll = var16;
                var15 = function(arg0) { // Original name: _onSelectionChange, environment: var15
                    _fun5850: for (var _fun5850_ip = 0;;) switch (_fun5850_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot0;
                            var1 = var1.onSelectionChange;
                            if (!var1) {
                                _fun5850_ip = 34;
                                continue _fun5850
                            }
                        case 19:
                            var2 = _closure2_slot0;
                            var1 = var2.onSelectionChange;
                            var1 = var1.bind(var2)(var3);
                        case 34:
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun5850_ip = 88;
                                continue _fun5850
                            }
                        case 49:
                            var2 = _closure2_slot6;
                            var1 = {};
                            var3 = var3.nativeEvent;
                            var3 = var3.selection;
                            var1.selection = var3;
                            var0 = _closure2_slot3;
                            var1.mostRecentEventCount = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onSelectionChange = var15;
                var1.placeholder = var14;
                var1.style = var13;
                var1.text = var12;
                var11 = var11.textBreakStrategy;
                var1.textBreakStrategy = var11;
                var38 = var7;
                var37 = var5;
                var36 = var10;
                var35 = var8;
                var34 = var9;
                var33 = var1;
                var1 = var38[var6](var37, var36, var35, var34, var33, var32);
                var4 = var4.bind(var3)(var2, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 13;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = true;
                var0.value = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = ['aria-busy', 'aria-checked', 'aria-disabled', 'aria-expanded', 'aria-selected', 'accessibilityState', 'id', 'tabIndex', 'selection', 'selectionColor', 'selectionHandleColor', 'cursorColor'];
    var _closure1_slot2 = var0;
    var0 = ['onBlur', 'onFocus'];
    var _closure1_slot3 = var0;
    var0 = ['ref', 'allowFontScaling', 'rejectResponderTermination', 'underlineColorAndroid', 'autoComplete', 'textContentType', 'readOnly', 'editable', 'enterKeyHint', 'returnKeyType', 'inputMode', 'showSoftInputOnFocus', 'keyboardType'];
    var _closure1_slot4 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 2;
    var8 = var6[var1];
    var7 = arg3;
    var7 = var7.bind(var0)(var8);
    var _closure1_slot9 = var7;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var7 = var1.useCallback;
    var _closure1_slot10 = var7;
    var7 = var1.useLayoutEffect;
    var _closure1_slot11 = var7;
    var7 = var1.useMemo;
    var _closure1_slot12 = var7;
    var7 = var1.useRef;
    var _closure1_slot13 = var7;
    var1 = var1.useState;
    var _closure1_slot14 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot15 = var1;
    var1 = 4;
    var7 = var6[var1];
    var7 = var3.bind(var0)(var7);
    var7 = var7.default;
    var _closure1_slot5 = var7;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.Commands;
    var _closure1_slot6 = var1;
    var1 = {
        'enter': 'default',
        'done': 'done',
        'go': 'go',
        'next': 'next',
        'previous': 'previous',
        'search': 'search',
        'send': 'send'
    };
    var _closure1_slot16 = var1;
    var1 = {
        'none': 'default',
        'text': 'default',
        'decimal': 'decimal-pad',
        'numeric': 'number-pad',
        'tel': 'phone-pad',
        'search': 'default',
        'email': 'email-address',
        'url': 'url'
    };
    var _closure1_slot17 = var1;
    var1 = {
        'address-line1': 'postal-address-region',
        'address-line2': 'postal-address-locality',
        'bday': 'birthdate-full',
        'bday-day': 'birthdate-day',
        'bday-month': 'birthdate-month',
        'bday-year': 'birthdate-year',
        'cc-csc': 'cc-csc',
        'cc-exp': 'cc-exp',
        'cc-exp-month': 'cc-exp-month',
        'cc-exp-year': 'cc-exp-year',
        'cc-number': 'cc-number',
        'country': 'postal-address-country',
        'current-password': 'password',
        'email': 'email',
        'honorific-prefix': 'name-prefix',
        'honorific-suffix': 'name-suffix',
        'name': 'name',
        'additional-name': 'name-middle',
        'family-name': 'name-family',
        'given-name': 'name-given',
        'new-password': 'password-new',
        'off': 'off',
        'one-time-code': 'sms-otp',
        'postal-code': 'postal-code',
        'sex': 'gender',
        'street-address': 'street-address',
        'tel': 'tel',
        'tel-country-code': 'tel-country-code',
        'tel-national': 'tel-national',
        'username': 'username'
    };
    var _closure1_slot18 = var1;
    var1 = function(arg0) { // Original name: TextInput, environment: var4
        _fun5851: for (var _fun5851_ip = 0;;) switch (_fun5851_ip) {
            case 0:
                var4 = arg0;
                var8 = var4.ref;
                var0 = var4.allowFontScaling;
                var3 = undefined;
                var20 = var3 === var0;
                if (var20) {
                    _fun5851_ip = 26;
                    continue _fun5851
                }
            case 23:
                var20 = var0;
            case 26:
                var0 = var4.rejectResponderTermination;
                var19 = var3 === var0;
                if (var19) {
                    _fun5851_ip = 42;
                    continue _fun5851
                }
            case 39:
                var19 = var0;
            case 42:
                var0 = var4.underlineColorAndroid;
                var18 = 'transparent';
                if (!(var3 !== var0)) {
                    _fun5851_ip = 59;
                    continue _fun5851
                }
            case 56:
                var18 = var0;
            case 59:
                var9 = var4.autoComplete;
                var0 = var4.textContentType;
                var17 = var4.readOnly;
                var15 = var4.editable;
                var16 = var4.enterKeyHint;
                var13 = var4.returnKeyType;
                var14 = var4.inputMode;
                var12 = var4.showSoftInputOnFocus;
                var11 = var4.keyboardType;
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var7 = var2.bind(var3)(var4, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot20;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.allowFontScaling = var20;
                var4.rejectResponderTermination = var19;
                var4.underlineColorAndroid = var18;
                if (!(var3 !== var17)) {
                    _fun5851_ip = 175;
                    continue _fun5851
                }
            case 172:
                var15 = !var17;
            case 175:
                var4.editable = var15;
                if (!var16) {
                    _fun5851_ip = 191;
                    continue _fun5851
                }
            case 183:
                var15 = _closure1_slot16;
                var13 = var15[var16];
            case 191:
                var4.returnKeyType = var13;
                if (!var14) {
                    _fun5851_ip = 207;
                    continue _fun5851
                }
            case 199:
                var13 = _closure1_slot17;
                var11 = var13[var14];
            case 207:
                var4.keyboardType = var11;
                var11 = null;
                if (!(var11 != var14)) {
                    _fun5851_ip = 226;
                    continue _fun5851
                }
            case 218:
                var13 = 'none';
                var12 = var13 !== var14;
            case 226:
                var4.showSoftInputOnFocus = var12;
                var10 = _closure1_slot18;
                var10 = var10[var9];
                if (!(var11 != var10)) {
                    _fun5851_ip = 246;
                    continue _fun5851
                }
            case 243:
                var9 = var10;
            case 246:
                var4.autoComplete = var9;
                var4.textContentType = var0;
                var0 = {};
                var0.forwardedRef = var8;
                var0 = var5.bind(var6)(var4, var7, var0);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = 'TextInput';
    var1.displayName = var3;
    var3 = {};
    var8 = 5;
    var7 = var6[var8];
    var7 = var5.bind(var0)(var7);
    var7 = var7.currentlyFocusedInput;
    var3.currentlyFocusedInput = var7;
    var7 = var6[var8];
    var7 = var5.bind(var0)(var7);
    var7 = var7.currentlyFocusedField;
    var3.currentlyFocusedField = var7;
    var7 = var6[var8];
    var7 = var5.bind(var0)(var7);
    var7 = var7.focusTextInput;
    var3.focusTextInput = var7;
    var7 = var6[var8];
    var7 = var5.bind(var0)(var7);
    var7 = var7.blurTextInput;
    var3.blurTextInput = var7;
    var1.State = var3;
    var3 = 14;
    var3 = var6[var3];
    var6 = var5.bind(var0)(var3);
    var5 = var6.create;
    var3 = {};
    var7 = {};
    var7.paddingTop = var8;
    var3.multilineDefault = var7;
    var3 = var5.bind(var6)(var3);
    var3 = {
        'auto': 'auto',
        'top': 'top',
        'bottom': 'bottom',
        'middle': 'center'
    };
    var _closure1_slot19 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 31, 33, 144, 143, 48, 325, 262, 292, 147, 44, 289, 114, 253]);