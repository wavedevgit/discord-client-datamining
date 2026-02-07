// modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
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
    var3 = var3.EmojiIntention;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'backgroundColor': null,
        'borderRadius': null,
        'padding': 14,
        'borderWidth': 2,
        'borderColor': 'transparent',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_FEEDBACK_CRITICAL;
    var8.borderColor = var9;
    var3.hasError = var8;
    var8 = {
        'maxHeight': 100,
        'flex': 1,
        'padding': 0,
        'paddingTop': 0
    };
    var3.stringOptionInput = var8;
    var8 = {
        'marginVertical': 4294967288,
        'marginRight': 4294967288
    };
    var3.expressionButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108730: for (var _fun108730_ip = 0;;) switch (_fun108730_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.option;
                var8 = var1.onChangeText;
                var _closure2_slot0 = var8;
                var14 = var1.onFocus;
                var13 = var1.onEndEditing;
                var0 = var1.guildId;
                var _closure2_slot1 = var0;
                var7 = var1.style;
                var21 = var1.autoFocus;
                var2 = var1.initialValue;
                var _closure2_slot2 = var2;
                var19 = var1.hasError;
                var11 = var1.onPressIn;
                var1 = _closure1_slot9;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var22 = _closure1_slot4;
                var2 = var22.useState;
                var1 = function() { // Environment: var9
                    _fun108731: for (var _fun108731_ip = 0;;) switch (_fun108731_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 != var2;
                            var4 = '';
                            var0 = var4;
                            if (!var2) {
                                _fun108731_ip = 52;
                                continue _fun108731
                            }
                        case 23:
                            var2 = _closure2_slot2;
                            var3 = var2.type;
                            var2 = 'text';
                            var0 = var4;
                            if (!(var2 === var3)) {
                                _fun108731_ip = 52;
                                continue _fun108731
                            }
                        case 43:
                            var1 = _closure2_slot2;
                            var0 = var1.text;
                        case 52:
                            return var0;
                    }
                };
                var4 = var2.bind(var22)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var17 = var2[var1];
                var _closure2_slot3 = var17;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot4 = var1;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useAppLauncherContext;
                var1 = var1.bind(var5)();
                var1 = var1.entrypoint;
                var15 = var22.useRef;
                var5 = {
                    'start': 0,
                    'end': 0
                };
                var5 = var15.bind(var22)(var5);
                var _closure2_slot5 = var5;
                var15 = var22.useRef;
                var5 = null;
                var18 = var15.bind(var22)(var5);
                var _closure2_slot6 = var18;
                var16 = var12.type;
                var15 = 8;
                var5 = var4[var15];
                var5 = var2.bind(var3)(var5);
                var5 = var5.ApplicationCommandOptionType;
                var5 = var5.STRING;
                var5 = var16 === var5;
                var _closure2_slot7 = var5;
                var20 = var22.useCallback;
                var16 = new Array(1);
                var16[0] = var8;
                var8 = function(arg0) { // Environment: var9
                    var2 = arg0;
                    var3 = _closure2_slot4;
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var16 = var20.bind(var22)(var8, var16);
                var _closure2_slot8 = var16;
                var23 = var22.useCallback;
                var20 = new Array(2);
                var20[0] = var16;
                var20[1] = var17;
                var8 = function(arg0) { // Environment: var9
                    _fun108733: for (var _fun108733_ip = 0;;) switch (_fun108733_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = _closure2_slot3;
                            var5 = var6.substring;
                            var0 = _closure2_slot5;
                            var3 = var0.current;
                            var4 = var3.start;
                            var3 = 0;
                            var3 = var5.bind(var6)(var3, var4);
                            var5 = var6.substring;
                            var0 = var0.current;
                            var4 = var0.end;
                            var0 = null;
                            if (!(var0 == var4)) {
                                _fun108733_ip = 74;
                                continue _fun108733
                            }
                        case 60:
                            var7 = _closure2_slot5;
                            var7 = var7.current;
                            var4 = var7.start;
                        case 74:
                            var6 = var5.bind(var6)(var4);
                            var4 = _closure2_slot5;
                            var4 = var4.current;
                            var4 = var4.start;
                            var4 = var2.id;
                            if (!(var0 == var4)) {
                                _fun108733_ip = 111;
                                continue _fun108733
                            }
                        case 102:
                            var4 = var2.surrogates;
                            if (!(var0 == var4)) {
                                _fun108733_ip = 224;
                                continue _fun108733
                            }
                        case 111:
                            var4 = var2.uniqueName;
                            if (!(var0 != var4)) {
                                _fun108733_ip = 135;
                                continue _fun108733
                            }
                        case 121:
                            var5 = var2.uniqueName;
                            var4 = '';
                            if (!(var4 === var5)) {
                                _fun108733_ip = 142;
                                continue _fun108733
                            }
                        case 135:
                            var8 = var2.name;
                            _fun108733_ip = 148;
                            continue _fun108733;
                        case 142:
                            var8 = var2.uniqueName;
                        case 148:
                            var11 = _closure2_slot8;
                            var4 = global;
                            var5 = var4.HermesInternal;
                            var9 = var5.concat;
                            var7 = ':';
                            var5 = ': ';
                            var9 = var9.bind(var7)(var8, var5);
                            var9 = var3 + var9;
                            var10 = var9 + var6;
                            var9 = undefined;
                            var9 = var11.bind(var9)(var10);
                            var4 = var4.HermesInternal;
                            var4 = var4.concat;
                            var4 = var4.bind(var7)(var8, var5);
                            var4 = var3 + var4;
                            var4 = var4.length;
                            _fun108733_ip = 262;
                            continue _fun108733;
                        case 224:
                            var7 = _closure2_slot8;
                            var5 = var2.surrogates;
                            var5 = var3 + var5;
                            var6 = var5 + var6;
                            var5 = undefined;
                            var5 = var7.bind(var5)(var6);
                            var2 = var2.surrogates;
                            var2 = var3 + var2;
                            var4 = var2.length;
                        case 262:
                            var3 = _closure2_slot5;
                            var2 = {};
                            var2.start = var4;
                            var2.end = var4;
                            var3.current = var2;
                            var1 = _closure2_slot6;
                            var1 = var1.current;
                            if (!(var0 != var1)) {
                                _fun108733_ip = 305;
                                continue _fun108733
                            }
                        case 295:
                            var0 = var1.focus;
                            var0 = var0.bind(var1)();
                        case 305:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var23.bind(var22)(var8, var20);
                var _closure2_slot9 = var8;
                var23 = var22.useCallback;
                var20 = function() { // Environment: var9
                    _fun108734: for (var _fun108734_ip = 0;;) switch (_fun108734_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108734_ip = 28;
                                continue _fun108734
                            }
                        case 18:
                            var0 = var1.focus;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = new Array(0);
                var8 = var23.bind(var22)(var20, var8);
                var _closure2_slot10 = var8;
                var20 = var22.useEffect;
                var8 = new Array(2);
                var8[0] = var0;
                var8[1] = var5;
                var0 = function() { // Environment: var9
                    _fun108735: for (var _fun108735_ip = 0;;) switch (_fun108735_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            if (!var1) {
                                _fun108735_ip = 50;
                                continue _fun108735
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.maybeFetchTopEmojisByGuild;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var20.bind(var22)(var0, var8);
                var0 = 10;
                var0 = var4[var0];
                var20 = var2.bind(var3)(var0);
                var8 = var20.useAnimationDelayedAutoFocus;
                var0 = function() { // Environment: var9
                    _fun108736: for (var _fun108736_ip = 0;;) switch (_fun108736_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108736_ip = 28;
                                continue _fun108736
                            }
                        case 18:
                            var0 = var1.focus;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var8.bind(var20)(var21, var0);
                var0 = 11;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AppLauncherEntrypoint;
                var0 = var0.VOICE;
                if (!(var1 !== var0)) {
                    _fun108730_ip = 457;
                    continue _fun108730
                }
            case 435:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 13;
                var0 = var2[var0];
                var8 = var1.bind(var3)(var0);
                _fun108730_ip = 477;
                continue _fun108730;
            case 457:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var8 = var1.bind(var3)(var0);
            case 477:
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var20 = var10.container;
                var4 = new Array(3);
                var4[0] = var20;
                if (!var19) {
                    _fun108730_ip = 509;
                    continue _fun108730
                }
            case 503:
                var19 = var10.hasError;
            case 509:
                var4[1] = var19;
                var4[2] = var7;
                var0.style = var4;
                var7 = _closure1_slot7;
                var4 = {};
                var4.ref = var18;
                var18 = false;
                var4.autoFocus = var18;
                var4.value = var17;
                var17 = var10.stringOptionInput;
                var4.style = var17;
                var19 = var12.type;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var15];
                var17 = var18.bind(var3)(var17);
                var17 = var17.ApplicationCommandOptionType;
                var18 = var17.STRING;
                var17 = undefined;
                if (!(var19 === var18)) {
                    _fun108730_ip = 598;
                    continue _fun108730
                }
            case 592:
                var17 = var12.maxLength;
            case 598:
                var4.maxLength = var17;
                var17 = 'off';
                var4.autoComplete = var17;
                var4.onChangeText = var16;
                var16 = function arg0() {
                    var1 = _closure2_slot5;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.selection;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var4.onSelectionChange = var16;
                var4.onFocus = var14;
                var4.onEndEditing = var13;
                var13 = 'center';
                var4.textAlignVertical = var13;
                var13 = 'done';
                var4.returnKeyType = var13;
                var13 = true;
                var4.multiline = var13;
                var14 = var12.type;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var15];
                var13 = var16.bind(var3)(var13);
                var13 = var13.ApplicationCommandOptionType;
                var13 = var13.INTEGER;
                if (!(var14 !== var13)) {
                    _fun108730_ip = 744;
                    continue _fun108730
                }
            case 702:
                var14 = var12.type;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var15];
                var12 = var13.bind(var3)(var12);
                var12 = var12.ApplicationCommandOptionType;
                var13 = var12.NUMBER;
                var12 = 'default';
                if (!(var14 === var13)) {
                    _fun108730_ip = 790;
                    continue _fun108730
                }
            case 744:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 14;
                var13 = var15[var13];
                var14 = var14.bind(var3)(var13);
                var13 = var14.isAndroid;
                var14 = var13.bind(var14)();
                var13 = 'numbers-and-punctuation';
                if (!var14) {
                    _fun108730_ip = 787;
                    continue _fun108730
                }
            case 783:
                var13 = 'numeric';
            case 787:
                var12 = var13;
            case 790:
                var4.keyboardType = var12;
                var4.onPressIn = var11;
                var7 = var7.bind(var3)(var8, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun108730_ip = 870;
                    continue _fun108730
                }
            case 817:
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 15;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var10 = var10.expressionButton;
                var6.style = var10;
                var9 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 16;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var1 = var5.dismissGlobalKeyboard;
                    var1 = var1.bind(var5)();
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEmojiPickerActionSheet;
                    var1 = {
                        'pickerIntention': null,
                        'autoFocus': false,
                        'startExpanded': false
                    };
                    var4 = _closure1_slot6;
                    var4 = var4.CHAT;
                    var1.pickerIntention = var4;
                    var5 = _closure2_slot9;
                    var1.onPressEmoji = var5;
                    var5 = _closure2_slot1;
                    var1.guildId = var5;
                    var4 = _closure2_slot10;
                    var1.onClose = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.onPress = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 870:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1624, 33, 1297, 671, 7804, 1647, 7065, 14027, 7805, 4880, 5460, 478, 11821, 1582, 7061, 2]);