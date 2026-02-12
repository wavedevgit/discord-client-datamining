// modules/app_launcher/native/options/AppLauncherCommandOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppLauncherOptionAutoFocusType;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.dismissableOptionWrapper = var9;
    var9 = {};
    var9.flex = var10;
    var3.optionViewContainer = var9;
    var9 = {
        'marginLeft': 8,
        'marginRight': 4294967292,
        'padding': 4
    };
    var11 = 5;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var9.borderRadius = var11;
    var3.dismissButton = var9;
    var9 = {};
    var9.flex = var10;
    var3.option = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CircleXIcon;
    var3 = {};
    var8 = 'md';
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot8 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/AppLauncherCommandOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108754: for (var _fun108754_ip = 0;;) switch (_fun108754_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.option;
                var _closure2_slot0 = var0;
                var1 = var4.onStartEditing;
                var _closure2_slot1 = var1;
                var1 = var4.onEndEditing;
                var _closure2_slot2 = var1;
                var1 = var4.onOptionValueChange;
                var _closure2_slot3 = var1;
                var3 = var4.onPress;
                var _closure2_slot4 = var3;
                var5 = var4.onPressAttachmentOption;
                var2 = var4.onDismiss;
                var _closure2_slot5 = var2;
                var19 = var4.onFocus;
                var15 = var4.channel;
                var12 = var4.autoFocusType;
                var1 = var4.command;
                var13 = var4.optionValues;
                var7 = var4.hasError;
                var6 = _closure1_slot7;
                var4 = undefined;
                var11 = var6.bind(var4)();
                var8 = var0.type;
                var14 = _closure1_slot0;
                var6 = _closure1_slot2;
                var16 = 7;
                var6 = var6[var16];
                var6 = var14.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.STRING;
                if (!(var6 !== var8)) {
                    _fun108754_ip = 1247;
                    continue _fun108754
                }
            case 162:
                var14 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var16];
                var6 = var14.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.INTEGER;
                if (!(var6 !== var8)) {
                    _fun108754_ip = 1247;
                    continue _fun108754
                }
            case 198:
                var14 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var16];
                var6 = var14.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.NUMBER;
                if (!(var6 !== var8)) {
                    _fun108754_ip = 1247;
                    continue _fun108754
                }
            case 234:
                var14 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var16];
                var6 = var14.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.ATTACHMENT;
                if (!(var6 !== var8)) {
                    _fun108754_ip = 1145;
                    continue _fun108754
                }
            case 270:
                var14 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var16];
                var6 = var14.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.BOOLEAN;
                if (!(var6 !== var8)) {
                    _fun108754_ip = 1035;
                    continue _fun108754
                }
            case 306:
                var14 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var16];
                var6 = var14.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.MENTIONABLE;
                if (!(var6 !== var8)) {
                    _fun108754_ip = 901;
                    continue _fun108754
                }
            case 342:
                var14 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var16];
                var6 = var14.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.ROLE;
                if (!(var6 !== var8)) {
                    _fun108754_ip = 751;
                    continue _fun108754
                }
            case 378:
                var14 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var16];
                var6 = var14.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.USER;
                if (!(var6 !== var8)) {
                    _fun108754_ip = 601;
                    continue _fun108754
                }
            case 414:
                var14 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var16];
                var6 = var14.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.CHANNEL;
                if (!(var6 !== var8)) {
                    _fun108754_ip = 451;
                    continue _fun108754
                }
            case 447:
                var6 = null;
                return var6;
            case 451:
                var16 = _closure1_slot5;
                var8 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 18;
                var6 = var14[var6];
                var14 = var8.bind(var4)(var6);
                var8 = {};
                var6 = var11.option;
                var8.style = var6;
                var8.option = var0;
                var17 = var13.current;
                var6 = var0.name;
                var18 = var17[var6];
                var6 = null;
                var17 = var6 == var18;
                var6 = undefined;
                if (var17) {
                    _fun108754_ip = 523;
                    continue _fun108754
                }
            case 517:
                var17 = 0;
                var6 = var18[var17];
            case 523:
                var8.initialValue = var6;
                var6 = function arg0() {
                    _fun108771: for (var _fun108771_ip = 0;;) switch (_fun108771_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.channel;
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun108771_ip = 31;
                                continue _fun108771
                            }
                        case 25:
                            var1 = new Array(0);
                            _fun108771_ip = 61;
                            continue _fun108771;
                        case 31:
                            var4 = {};
                            var5 = 'channelMention';
                            var4.type = var5;
                            var0 = var0.id;
                            var4.channelId = var0;
                            var0 = new Array(1);
                            var0[0] = var4;
                            var1 = var0;
                        case 61:
                            var0 = undefined;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var8.onChannelPress = var6;
                var6 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onActionSheetDismiss = var6;
                var8.channel = var15;
                var6 = _closure1_slot4;
                var6 = var6.OPTIONAL_OPTION_ADDED;
                var6 = var12 === var6;
                var8.autoFocus = var6;
                var8.hasError = var7;
                var8.onPress = var3;
                var6 = var0.name;
                var6 = var16.bind(var4)(var14, var8, var6);
                _fun108754_ip = 1758;
                continue _fun108754;
            case 601:
                var17 = _closure1_slot5;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var8 = 17;
                var8 = var16[var8];
                var16 = var14.bind(var4)(var8);
                var14 = {};
                var8 = var11.option;
                var14.style = var8;
                var14.option = var0;
                var18 = var13.current;
                var8 = var0.name;
                var20 = var18[var8];
                var8 = null;
                var18 = var8 == var20;
                var8 = undefined;
                if (var18) {
                    _fun108754_ip = 673;
                    continue _fun108754
                }
            case 667:
                var18 = 0;
                var8 = var20[var18];
            case 673:
                var14.initialValue = var8;
                var8 = function arg0() {
                    _fun108769: for (var _fun108769_ip = 0;;) switch (_fun108769_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.user;
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun108769_ip = 70;
                                continue _fun108769
                            }
                        case 25:
                            var0 = {};
                            var1 = 'userMention';
                            var0.type = var1;
                            var6 = 'string';
                            var5 = typeof var4;
                            var1 = var4;
                            if (!(var6 !== var5)) {
                                _fun108769_ip = 56;
                                continue _fun108769
                            }
                        case 51:
                            var1 = var4.id;
                        case 56:
                            var0.userId = var1;
                            var1 = new Array(1);
                            var1[0] = var0;
                            _fun108769_ip = 74;
                            continue _fun108769;
                        case 70:
                            var1 = new Array(0);
                        case 74:
                            var0 = undefined;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var14.onUserPress = var8;
                var8 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var14.onActionSheetDismiss = var8;
                var14.channel = var15;
                var8 = _closure1_slot4;
                var8 = var8.OPTIONAL_OPTION_ADDED;
                var8 = var12 === var8;
                var14.autoFocus = var8;
                var14.hasError = var7;
                var14.onPress = var3;
                var8 = var0.name;
                var6 = var17.bind(var4)(var16, var14, var8);
                _fun108754_ip = 1758;
                continue _fun108754;
            case 751:
                var17 = _closure1_slot5;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var8 = 16;
                var8 = var16[var8];
                var16 = var14.bind(var4)(var8);
                var14 = {};
                var8 = var11.option;
                var14.style = var8;
                var14.option = var0;
                var18 = var13.current;
                var8 = var0.name;
                var20 = var18[var8];
                var8 = null;
                var18 = var8 == var20;
                var8 = undefined;
                if (var18) {
                    _fun108754_ip = 823;
                    continue _fun108754
                }
            case 817:
                var18 = 0;
                var8 = var20[var18];
            case 823:
                var14.initialValue = var8;
                var8 = function arg0() {
                    _fun108767: for (var _fun108767_ip = 0;;) switch (_fun108767_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.role;
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108767_ip = 56;
                                continue _fun108767
                            }
                        case 26:
                            var0 = {};
                            var4 = 'roleMention';
                            var0.type = var4;
                            var1 = var1.id;
                            var0.roleId = var1;
                            var1 = new Array(1);
                            var1[0] = var0;
                            _fun108767_ip = 60;
                            continue _fun108767;
                        case 56:
                            var1 = new Array(0);
                        case 60:
                            var0 = undefined;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var14.onRolePress = var8;
                var8 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var14.onActionSheetDismiss = var8;
                var14.channel = var15;
                var8 = _closure1_slot4;
                var8 = var8.OPTIONAL_OPTION_ADDED;
                var8 = var12 === var8;
                var14.autoFocus = var8;
                var14.hasError = var7;
                var14.onPress = var3;
                var8 = var0.name;
                var6 = var17.bind(var4)(var16, var14, var8);
                _fun108754_ip = 1758;
                continue _fun108754;
            case 901:
                var16 = _closure1_slot5;
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 13;
                var8 = var17[var8];
                var14 = var14.bind(var4)(var8);
                var8 = {};
                var8.option = var0;
                var18 = var13.current;
                var17 = var0.name;
                var20 = var18[var17];
                var17 = null;
                var18 = var17 == var20;
                var17 = undefined;
                if (var18) {
                    _fun108754_ip = 963;
                    continue _fun108754
                }
            case 957:
                var18 = 0;
                var17 = var20[var18];
            case 963:
                var8.initialValue = var17;
                var17 = function arg0() {
                    _fun108765: for (var _fun108765_ip = 0;;) switch (_fun108765_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.mentionable;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun108765_ip = 43;
                                continue _fun108765
                            }
                        case 15:
                            var4 = _closure2_slot3;
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var1 = new Array(0);
                            var1 = var4.bind(var2)(var3, var1);
                            _fun108765_ip = 414;
                            continue _fun108765;
                        case 43:
                            var4 = var0.type;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 14;
                            var1 = var1[var6];
                            var3 = undefined;
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.MentionableItemTypes;
                            var1 = var1.USER;
                            if (!(var1 !== var4)) {
                                _fun108765_ip = 357;
                                continue _fun108765
                            }
                        case 92:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.MentionableItemTypes;
                            var1 = var1.ROLE;
                            if (!(var1 !== var4)) {
                                _fun108765_ip = 304;
                                continue _fun108765
                            }
                        case 128:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.MentionableItemTypes;
                            var1 = var1.GLOBAL;
                            if (!(var1 === var4)) {
                                _fun108765_ip = 414;
                                continue _fun108765
                            }
                        case 164:
                            var1 = var0.result;
                            var4 = var1.text;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 15;
                            var2 = var6[var2];
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.MENTION_EVERYONE;
                            var2 = var2.bind(var5)();
                            var2 = var2.text;
                            if (!(var4 !== var2)) {
                                _fun108765_ip = 263;
                                continue _fun108765
                            }
                        case 214:
                            var4 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var5 = {};
                            var6 = 'text';
                            var5.type = var6;
                            var1 = var1.text;
                            var5.text = var1;
                            var1 = new Array(1);
                            var1[0] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            _fun108765_ip = 414;
                            continue _fun108765;
                        case 263:
                            var4 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var1 = new Array(1);
                            var5 = {
                                'type': 'textMention',
                                'text': '@everyone'
                            };
                            var1[0] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            _fun108765_ip = 414;
                            continue _fun108765;
                        case 304:
                            var1 = var0.result;
                            var4 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var5 = {};
                            var6 = 'roleMention';
                            var5.type = var6;
                            var1 = var1.id;
                            var5.roleId = var1;
                            var1 = new Array(1);
                            var1[0] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            _fun108765_ip = 414;
                            continue _fun108765;
                        case 357:
                            var0 = var0.result;
                            var0 = var0.user;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var4 = {};
                            var5 = 'userMention';
                            var4.type = var5;
                            var0 = var0.id;
                            var4.userId = var0;
                            var0 = new Array(1);
                            var0[0] = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 414:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.onMentionablePress = var17;
                var17 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onActionSheetDismiss = var17;
                var8.channel = var15;
                var17 = _closure1_slot4;
                var17 = var17.OPTIONAL_OPTION_ADDED;
                var17 = var12 === var17;
                var8.autoFocus = var17;
                var8.hasError = var7;
                var8.onPress = var3;
                var6 = var16.bind(var4)(var14, var8);
                _fun108754_ip = 1758;
                continue _fun108754;
            case 1035:
                var17 = _closure1_slot5;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var8 = 12;
                var8 = var16[var8];
                var16 = var14.bind(var4)(var8);
                var14 = {};
                var8 = var11.option;
                var14.style = var8;
                var14.option = var0;
                var18 = var13.current;
                var8 = var0.name;
                var20 = var18[var8];
                var8 = null;
                var18 = var8 == var20;
                var8 = undefined;
                if (var18) {
                    _fun108754_ip = 1107;
                    continue _fun108754
                }
            case 1101:
                var18 = 0;
                var8 = var20[var18];
            case 1107:
                var14.initialValue = var8;
                var8 = function arg0() {
                    var5 = arg0;
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var2 = var2.bind(var0)(var3);
                    var2 = _closure2_slot3;
                    var4 = {};
                    var1 = 'text';
                    var4.type = var1;
                    var1 = var5.toString;
                    var1 = var1.bind(var5)();
                    var4.text = var1;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var0)(var3, var1);
                    return var0;
                };
                var14.onPress = var8;
                var14.hasError = var7;
                var8 = var0.name;
                var6 = var17.bind(var4)(var16, var14, var8);
                _fun108754_ip = 1758;
                continue _fun108754;
            case 1145:
                var16 = _closure1_slot5;
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 11;
                var8 = var17[var8];
                var14 = var14.bind(var4)(var8);
                var8 = {};
                var17 = var11.option;
                var8.style = var17;
                var8.option = var0;
                var17 = function arg0() {
                    _fun108763: for (var _fun108763_ip = 0;;) switch (_fun108763_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure2_slot2;
                            var3 = _closure2_slot0;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 == var4)) {
                                _fun108763_ip = 37;
                                continue _fun108763
                            }
                        case 31:
                            var1 = new Array(0);
                            _fun108763_ip = 62;
                            continue _fun108763;
                        case 37:
                            var5 = {};
                            var6 = 'text';
                            var5.type = var6;
                            var5.text = var4;
                            var4 = new Array(1);
                            var4[0] = var5;
                            var1 = var4;
                        case 62:
                            var1 = var2.bind(var0)(var3, var1);
                            return var0;
                    }
                };
                var8.onSelectAttachment = var17;
                var8.channel = var15;
                var17 = _closure1_slot4;
                var17 = var17.OPTIONAL_OPTION_ADDED;
                var17 = var12 === var17;
                var8.autoFocus = var17;
                var8.hasError = var7;
                var8.onPress = var5;
                var5 = var0.name;
                var6 = var16.bind(var4)(var14, var8, var5);
                _fun108754_ip = 1758;
                continue _fun108754;
            case 1247:
                var5 = var0.choices;
                var8 = null;
                if (!(var8 == var5)) {
                    _fun108754_ip = 1611;
                    continue _fun108754
                }
            case 1262:
                var17 = var0.autocomplete;
                var14 = _closure1_slot5;
                var5 = _closure1_slot1;
                var16 = _closure1_slot2;
                if (var17) {
                    _fun108754_ip = 1457;
                    continue _fun108754
                }
            case 1286:
                var17 = 10;
                var17 = var16[var17];
                var18 = var5.bind(var4)(var17);
                var17 = {};
                var20 = var11.option;
                var17.style = var20;
                var17.option = var0;
                var20 = var15.guild_id;
                var17.guildId = var20;
                var21 = var13.current;
                var20 = var0.name;
                var22 = var21[var20];
                var21 = var8 == var22;
                var20 = undefined;
                if (var21) {
                    _fun108754_ip = 1353;
                    continue _fun108754
                }
            case 1347:
                var21 = 0;
                var20 = var22[var21];
            case 1353:
                var17.initialValue = var20;
                var20 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var17.onEndEditing = var20;
                var20 = function arg0() {
                    var2 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var3);
                    var2 = _closure2_slot3;
                    var4 = {};
                    var1 = 'text';
                    var4.type = var1;
                    var1 = arg0;
                    var4.text = var1;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var0)(var3, var1);
                    return var0;
                };
                var17.onChangeText = var20;
                var17.onFocus = var19;
                var19 = _closure1_slot4;
                var21 = var19.FIRST_REQUIRED_OPTION;
                var20 = new Array(2);
                var20[0] = var21;
                var19 = var19.OPTIONAL_OPTION_ADDED;
                var20[1] = var19;
                var19 = var20.includes;
                var19 = var19.bind(var20)(var12);
                var17.autoFocus = var19;
                var17.hasError = var7;
                var17.onPressIn = var3;
                var3 = var0.name;
                var6 = var14.bind(var4)(var18, var17, var3);
                _fun108754_ip = 1758;
                continue _fun108754;
            case 1457:
                var3 = 9;
                var3 = var16[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var16 = var11.option;
                var3.style = var16;
                var3.channel = var15;
                var3.option = var0;
                var3.activeCommand = var1;
                var3.optionValues = var13;
                var15 = var13.current;
                var1 = var0.name;
                var16 = var15[var1];
                var15 = var8 == var16;
                var1 = undefined;
                if (var15) {
                    _fun108754_ip = 1529;
                    continue _fun108754
                }
            case 1523:
                var15 = 0;
                var1 = var16[var15];
            case 1529:
                var3.initialValue = var1;
                var1 = _closure1_slot4;
                var1 = var1.OPTIONAL_OPTION_ADDED;
                var1 = var12 === var1;
                var3.autoFocus = var1;
                var1 = function arg0() {
                    _fun108758: for (var _fun108758_ip = 0;;) switch (_fun108758_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure2_slot2;
                            var3 = _closure2_slot0;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            var2 = _closure2_slot3;
                            var4 = {};
                            var1 = 'text';
                            var4.type = var1;
                            var1 = null;
                            var7 = var1 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun108758_ip = 51;
                                continue _fun108758
                            }
                        case 46:
                            var5 = var6.displayName;
                        case 51:
                            var6 = var1 != var5;
                            var1 = '';
                            if (!var6) {
                                _fun108758_ip = 65;
                                continue _fun108758
                            }
                        case 62:
                            var1 = var5;
                        case 65:
                            var4.text = var1;
                            var1 = new Array(1);
                            var1[0] = var4;
                            var1 = var2.bind(var0)(var3, var1);
                            return var0;
                    }
                };
                var3.onSelect = var1;
                var1 = function() {
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3.onOpenAutocompleteSheet = var1;
                var1 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var3.onDismissAutocompleteSheet = var1;
                var3.hasError = var7;
                var1 = var0.name;
                var6 = var14.bind(var4)(var5, var3, var1);
                _fun108754_ip = 1758;
                continue _fun108754;
            case 1611:
                var5 = _closure1_slot5;
                var3 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 8;
                var1 = var14[var1];
                var3 = var3.bind(var4)(var1);
                var1 = {};
                var14 = var11.option;
                var1.style = var14;
                var1.option = var0;
                var14 = var13.current;
                var13 = var0.name;
                var14 = var14[var13];
                var13 = var8 == var14;
                var8 = undefined;
                if (var13) {
                    _fun108754_ip = 1681;
                    continue _fun108754
                }
            case 1675:
                var13 = 0;
                var8 = var14[var13];
            case 1681:
                var1.initialValue = var8;
                var8 = function arg0() {
                    _fun108755: for (var _fun108755_ip = 0;;) switch (_fun108755_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure2_slot2;
                            var3 = _closure2_slot0;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            var2 = _closure2_slot3;
                            var4 = {};
                            var1 = 'text';
                            var4.type = var1;
                            var1 = null;
                            var7 = var1 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun108755_ip = 51;
                                continue _fun108755
                            }
                        case 46:
                            var5 = var6.displayName;
                        case 51:
                            var6 = var1 != var5;
                            var1 = '';
                            if (!var6) {
                                _fun108755_ip = 65;
                                continue _fun108755
                            }
                        case 62:
                            var1 = var5;
                        case 65:
                            var4.text = var1;
                            var1 = new Array(1);
                            var1[0] = var4;
                            var1 = var2.bind(var0)(var3, var1);
                            return var0;
                    }
                };
                var1.onSelect = var8;
                var8 = function() {
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onOpenChoicesSheet = var8;
                var8 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onDismissChoicesSheet = var8;
                var8 = _closure1_slot4;
                var8 = var8.OPTIONAL_OPTION_ADDED;
                var8 = var12 === var8;
                var1.autoFocus = var8;
                var1.hasError = var7;
                var0 = var0.name;
                var6 = var5.bind(var4)(var3, var1, var0);
            case 1758:
                var1 = null;
                var0 = var6;
                if (!(var1 != var2)) {
                    _fun108754_ip = 1901;
                    continue _fun108754
                }
            case 1770:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var11.dismissableOptionWrapper;
                var1.style = var5;
                var8 = _closure1_slot5;
                var5 = {};
                var7 = var11.optionViewContainer;
                var5.style = var7;
                var5.children = var6;
                var6 = var8.bind(var4)(var2, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 19;
                var6 = var12[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var11 = var11.dismissButton;
                var6.style = var11;
                var10 = function() {
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var6.onPress = var10;
                var9 = _closure1_slot8;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1901:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1468, 33, 1297, 671, 5437, 1647, 14017, 14020, 14022, 14023, 14025, 14026, 14027, 5660, 14030, 14031, 14033, 4880, 2]);