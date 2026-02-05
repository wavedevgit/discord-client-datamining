// modules/app_launcher/native/options/AppLauncherCommandOption.tsx
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
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
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.dismissableOptionWrapper = var8;
    var8 = {};
    var8.flex = var9;
    var3.optionViewContainer = var8;
    var8 = {
        'marginLeft': 8,
        'marginRight': 4294967292,
        'padding': 4
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var3.dismissButton = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_ACTIVE;
    var8.tintColor = var10;
    var3.dismissIcon = var8;
    var8 = {};
    var8.flex = var9;
    var3.option = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/AppLauncherCommandOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108161: for (var _fun108161_ip = 0;;) switch (_fun108161_ip) {
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
                var11 = var4.autoFocusType;
                var1 = var4.command;
                var13 = var4.optionValues;
                var8 = var4.hasError;
                var7 = _closure1_slot7;
                var4 = undefined;
                var12 = var7.bind(var4)();
                var10 = var0.type;
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var16 = 6;
                var7 = var7[var16];
                var7 = var14.bind(var4)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.STRING;
                if (!(var7 !== var10)) {
                    _fun108161_ip = 1247;
                    continue _fun108161
                }
            case 162:
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var16];
                var7 = var14.bind(var4)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.INTEGER;
                if (!(var7 !== var10)) {
                    _fun108161_ip = 1247;
                    continue _fun108161
                }
            case 198:
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var16];
                var7 = var14.bind(var4)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.NUMBER;
                if (!(var7 !== var10)) {
                    _fun108161_ip = 1247;
                    continue _fun108161
                }
            case 234:
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var16];
                var7 = var14.bind(var4)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.ATTACHMENT;
                if (!(var7 !== var10)) {
                    _fun108161_ip = 1145;
                    continue _fun108161
                }
            case 270:
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var16];
                var7 = var14.bind(var4)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.BOOLEAN;
                if (!(var7 !== var10)) {
                    _fun108161_ip = 1035;
                    continue _fun108161
                }
            case 306:
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var16];
                var7 = var14.bind(var4)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.MENTIONABLE;
                if (!(var7 !== var10)) {
                    _fun108161_ip = 901;
                    continue _fun108161
                }
            case 342:
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var16];
                var7 = var14.bind(var4)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.ROLE;
                if (!(var7 !== var10)) {
                    _fun108161_ip = 751;
                    continue _fun108161
                }
            case 378:
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var16];
                var7 = var14.bind(var4)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.USER;
                if (!(var7 !== var10)) {
                    _fun108161_ip = 601;
                    continue _fun108161
                }
            case 414:
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var16];
                var7 = var14.bind(var4)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.CHANNEL;
                if (!(var7 !== var10)) {
                    _fun108161_ip = 451;
                    continue _fun108161
                }
            case 447:
                var7 = null;
                return var7;
            case 451:
                var16 = _closure1_slot5;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 17;
                var7 = var14[var7];
                var14 = var10.bind(var4)(var7);
                var10 = {};
                var7 = var12.option;
                var10.style = var7;
                var10.option = var0;
                var17 = var13.current;
                var7 = var0.name;
                var18 = var17[var7];
                var7 = null;
                var17 = var7 == var18;
                var7 = undefined;
                if (var17) {
                    _fun108161_ip = 523;
                    continue _fun108161
                }
            case 517:
                var17 = 0;
                var7 = var18[var17];
            case 523:
                var10.initialValue = var7;
                var7 = function arg0() {
                    _fun108178: for (var _fun108178_ip = 0;;) switch (_fun108178_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.channel;
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun108178_ip = 31;
                                continue _fun108178
                            }
                        case 25:
                            var1 = new Array(0);
                            _fun108178_ip = 61;
                            continue _fun108178;
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
                var10.onChannelPress = var7;
                var7 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10.onActionSheetDismiss = var7;
                var10.channel = var15;
                var7 = _closure1_slot4;
                var7 = var7.OPTIONAL_OPTION_ADDED;
                var7 = var11 === var7;
                var10.autoFocus = var7;
                var10.hasError = var8;
                var10.onPress = var3;
                var7 = var0.name;
                var7 = var16.bind(var4)(var14, var10, var7);
                _fun108161_ip = 1758;
                continue _fun108161;
            case 601:
                var17 = _closure1_slot5;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 16;
                var10 = var16[var10];
                var16 = var14.bind(var4)(var10);
                var14 = {};
                var10 = var12.option;
                var14.style = var10;
                var14.option = var0;
                var18 = var13.current;
                var10 = var0.name;
                var20 = var18[var10];
                var10 = null;
                var18 = var10 == var20;
                var10 = undefined;
                if (var18) {
                    _fun108161_ip = 673;
                    continue _fun108161
                }
            case 667:
                var18 = 0;
                var10 = var20[var18];
            case 673:
                var14.initialValue = var10;
                var10 = function arg0() {
                    _fun108176: for (var _fun108176_ip = 0;;) switch (_fun108176_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.user;
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun108176_ip = 70;
                                continue _fun108176
                            }
                        case 25:
                            var0 = {};
                            var1 = 'userMention';
                            var0.type = var1;
                            var6 = 'string';
                            var5 = typeof var4;
                            var1 = var4;
                            if (!(var6 !== var5)) {
                                _fun108176_ip = 56;
                                continue _fun108176
                            }
                        case 51:
                            var1 = var4.id;
                        case 56:
                            var0.userId = var1;
                            var1 = new Array(1);
                            var1[0] = var0;
                            _fun108176_ip = 74;
                            continue _fun108176;
                        case 70:
                            var1 = new Array(0);
                        case 74:
                            var0 = undefined;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var14.onUserPress = var10;
                var10 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var14.onActionSheetDismiss = var10;
                var14.channel = var15;
                var10 = _closure1_slot4;
                var10 = var10.OPTIONAL_OPTION_ADDED;
                var10 = var11 === var10;
                var14.autoFocus = var10;
                var14.hasError = var8;
                var14.onPress = var3;
                var10 = var0.name;
                var7 = var17.bind(var4)(var16, var14, var10);
                _fun108161_ip = 1758;
                continue _fun108161;
            case 751:
                var17 = _closure1_slot5;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 15;
                var10 = var16[var10];
                var16 = var14.bind(var4)(var10);
                var14 = {};
                var10 = var12.option;
                var14.style = var10;
                var14.option = var0;
                var18 = var13.current;
                var10 = var0.name;
                var20 = var18[var10];
                var10 = null;
                var18 = var10 == var20;
                var10 = undefined;
                if (var18) {
                    _fun108161_ip = 823;
                    continue _fun108161
                }
            case 817:
                var18 = 0;
                var10 = var20[var18];
            case 823:
                var14.initialValue = var10;
                var10 = function arg0() {
                    _fun108174: for (var _fun108174_ip = 0;;) switch (_fun108174_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.role;
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108174_ip = 56;
                                continue _fun108174
                            }
                        case 26:
                            var0 = {};
                            var4 = 'roleMention';
                            var0.type = var4;
                            var1 = var1.id;
                            var0.roleId = var1;
                            var1 = new Array(1);
                            var1[0] = var0;
                            _fun108174_ip = 60;
                            continue _fun108174;
                        case 56:
                            var1 = new Array(0);
                        case 60:
                            var0 = undefined;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var14.onRolePress = var10;
                var10 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var14.onActionSheetDismiss = var10;
                var14.channel = var15;
                var10 = _closure1_slot4;
                var10 = var10.OPTIONAL_OPTION_ADDED;
                var10 = var11 === var10;
                var14.autoFocus = var10;
                var14.hasError = var8;
                var14.onPress = var3;
                var10 = var0.name;
                var7 = var17.bind(var4)(var16, var14, var10);
                _fun108161_ip = 1758;
                continue _fun108161;
            case 901:
                var16 = _closure1_slot5;
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var10 = 12;
                var10 = var17[var10];
                var14 = var14.bind(var4)(var10);
                var10 = {};
                var10.option = var0;
                var18 = var13.current;
                var17 = var0.name;
                var20 = var18[var17];
                var17 = null;
                var18 = var17 == var20;
                var17 = undefined;
                if (var18) {
                    _fun108161_ip = 963;
                    continue _fun108161
                }
            case 957:
                var18 = 0;
                var17 = var20[var18];
            case 963:
                var10.initialValue = var17;
                var17 = function arg0() {
                    _fun108172: for (var _fun108172_ip = 0;;) switch (_fun108172_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.mentionable;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun108172_ip = 43;
                                continue _fun108172
                            }
                        case 15:
                            var4 = _closure2_slot3;
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var1 = new Array(0);
                            var1 = var4.bind(var2)(var3, var1);
                            _fun108172_ip = 414;
                            continue _fun108172;
                        case 43:
                            var4 = var0.type;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 13;
                            var1 = var1[var6];
                            var3 = undefined;
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.MentionableItemTypes;
                            var1 = var1.USER;
                            if (!(var1 !== var4)) {
                                _fun108172_ip = 357;
                                continue _fun108172
                            }
                        case 92:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.MentionableItemTypes;
                            var1 = var1.ROLE;
                            if (!(var1 !== var4)) {
                                _fun108172_ip = 304;
                                continue _fun108172
                            }
                        case 128:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.MentionableItemTypes;
                            var1 = var1.GLOBAL;
                            if (!(var1 === var4)) {
                                _fun108172_ip = 414;
                                continue _fun108172
                            }
                        case 164:
                            var1 = var0.result;
                            var4 = var1.text;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 14;
                            var2 = var6[var2];
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.MENTION_EVERYONE;
                            var2 = var2.bind(var5)();
                            var2 = var2.text;
                            if (!(var4 !== var2)) {
                                _fun108172_ip = 263;
                                continue _fun108172
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
                            _fun108172_ip = 414;
                            continue _fun108172;
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
                            _fun108172_ip = 414;
                            continue _fun108172;
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
                            _fun108172_ip = 414;
                            continue _fun108172;
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
                var10.onMentionablePress = var17;
                var17 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var10.onActionSheetDismiss = var17;
                var10.channel = var15;
                var17 = _closure1_slot4;
                var17 = var17.OPTIONAL_OPTION_ADDED;
                var17 = var11 === var17;
                var10.autoFocus = var17;
                var10.hasError = var8;
                var10.onPress = var3;
                var7 = var16.bind(var4)(var14, var10);
                _fun108161_ip = 1758;
                continue _fun108161;
            case 1035:
                var17 = _closure1_slot5;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 11;
                var10 = var16[var10];
                var16 = var14.bind(var4)(var10);
                var14 = {};
                var10 = var12.option;
                var14.style = var10;
                var14.option = var0;
                var18 = var13.current;
                var10 = var0.name;
                var20 = var18[var10];
                var10 = null;
                var18 = var10 == var20;
                var10 = undefined;
                if (var18) {
                    _fun108161_ip = 1107;
                    continue _fun108161
                }
            case 1101:
                var18 = 0;
                var10 = var20[var18];
            case 1107:
                var14.initialValue = var10;
                var10 = function arg0() {
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
                var14.onPress = var10;
                var14.hasError = var8;
                var10 = var0.name;
                var7 = var17.bind(var4)(var16, var14, var10);
                _fun108161_ip = 1758;
                continue _fun108161;
            case 1145:
                var16 = _closure1_slot5;
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var10 = 10;
                var10 = var17[var10];
                var14 = var14.bind(var4)(var10);
                var10 = {};
                var17 = var12.option;
                var10.style = var17;
                var10.option = var0;
                var17 = function arg0() {
                    _fun108170: for (var _fun108170_ip = 0;;) switch (_fun108170_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure2_slot2;
                            var3 = _closure2_slot0;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 == var4)) {
                                _fun108170_ip = 37;
                                continue _fun108170
                            }
                        case 31:
                            var1 = new Array(0);
                            _fun108170_ip = 62;
                            continue _fun108170;
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
                var10.onSelectAttachment = var17;
                var10.channel = var15;
                var17 = _closure1_slot4;
                var17 = var17.OPTIONAL_OPTION_ADDED;
                var17 = var11 === var17;
                var10.autoFocus = var17;
                var10.hasError = var8;
                var10.onPress = var5;
                var5 = var0.name;
                var7 = var16.bind(var4)(var14, var10, var5);
                _fun108161_ip = 1758;
                continue _fun108161;
            case 1247:
                var5 = var0.choices;
                var10 = null;
                if (!(var10 == var5)) {
                    _fun108161_ip = 1611;
                    continue _fun108161
                }
            case 1262:
                var17 = var0.autocomplete;
                var14 = _closure1_slot5;
                var5 = _closure1_slot1;
                var16 = _closure1_slot2;
                if (var17) {
                    _fun108161_ip = 1457;
                    continue _fun108161
                }
            case 1286:
                var17 = 9;
                var17 = var16[var17];
                var18 = var5.bind(var4)(var17);
                var17 = {};
                var20 = var12.option;
                var17.style = var20;
                var17.option = var0;
                var20 = var15.guild_id;
                var17.guildId = var20;
                var21 = var13.current;
                var20 = var0.name;
                var22 = var21[var20];
                var21 = var10 == var22;
                var20 = undefined;
                if (var21) {
                    _fun108161_ip = 1353;
                    continue _fun108161
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
                var19 = var19.bind(var20)(var11);
                var17.autoFocus = var19;
                var17.hasError = var8;
                var17.onPressIn = var3;
                var3 = var0.name;
                var7 = var14.bind(var4)(var18, var17, var3);
                _fun108161_ip = 1758;
                continue _fun108161;
            case 1457:
                var3 = 8;
                var3 = var16[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var16 = var12.option;
                var3.style = var16;
                var3.channel = var15;
                var3.option = var0;
                var3.activeCommand = var1;
                var3.optionValues = var13;
                var15 = var13.current;
                var1 = var0.name;
                var16 = var15[var1];
                var15 = var10 == var16;
                var1 = undefined;
                if (var15) {
                    _fun108161_ip = 1529;
                    continue _fun108161
                }
            case 1523:
                var15 = 0;
                var1 = var16[var15];
            case 1529:
                var3.initialValue = var1;
                var1 = _closure1_slot4;
                var1 = var1.OPTIONAL_OPTION_ADDED;
                var1 = var11 === var1;
                var3.autoFocus = var1;
                var1 = function arg0() {
                    _fun108165: for (var _fun108165_ip = 0;;) switch (_fun108165_ip) {
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
                                _fun108165_ip = 51;
                                continue _fun108165
                            }
                        case 46:
                            var5 = var6.displayName;
                        case 51:
                            var6 = var1 != var5;
                            var1 = '';
                            if (!var6) {
                                _fun108165_ip = 65;
                                continue _fun108165
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
                var3.hasError = var8;
                var1 = var0.name;
                var7 = var14.bind(var4)(var5, var3, var1);
                _fun108161_ip = 1758;
                continue _fun108161;
            case 1611:
                var5 = _closure1_slot5;
                var3 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 7;
                var1 = var14[var1];
                var3 = var3.bind(var4)(var1);
                var1 = {};
                var14 = var12.option;
                var1.style = var14;
                var1.option = var0;
                var14 = var13.current;
                var13 = var0.name;
                var14 = var14[var13];
                var13 = var10 == var14;
                var10 = undefined;
                if (var13) {
                    _fun108161_ip = 1681;
                    continue _fun108161
                }
            case 1675:
                var13 = 0;
                var10 = var14[var13];
            case 1681:
                var1.initialValue = var10;
                var10 = function arg0() {
                    _fun108162: for (var _fun108162_ip = 0;;) switch (_fun108162_ip) {
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
                                _fun108162_ip = 51;
                                continue _fun108162
                            }
                        case 46:
                            var5 = var6.displayName;
                        case 51:
                            var6 = var1 != var5;
                            var1 = '';
                            if (!var6) {
                                _fun108162_ip = 65;
                                continue _fun108162
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
                var1.onSelect = var10;
                var10 = function() {
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onOpenChoicesSheet = var10;
                var10 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onDismissChoicesSheet = var10;
                var10 = _closure1_slot4;
                var10 = var10.OPTIONAL_OPTION_ADDED;
                var10 = var11 === var10;
                var1.autoFocus = var10;
                var1.hasError = var8;
                var0 = var0.name;
                var7 = var5.bind(var4)(var3, var1, var0);
            case 1758:
                var1 = null;
                var0 = var7;
                if (!(var1 != var2)) {
                    _fun108161_ip = 1931;
                    continue _fun108161
                }
            case 1770:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var12.dismissableOptionWrapper;
                var1.style = var5;
                var8 = _closure1_slot5;
                var5 = {};
                var10 = var12.optionViewContainer;
                var5.style = var10;
                var5.children = var7;
                var7 = var8.bind(var4)(var2, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 18;
                var6 = var11[var6];
                var6 = var10.bind(var4)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var12 = var12.dismissButton;
                var6.style = var12;
                var9 = function() {
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var6.onPress = var9;
                var9 = 19;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.CircleXIcon;
                var9 = {};
                var11 = 'md';
                var9.size = var11;
                var9 = var8.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1931:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1468, 33, 1297, 671, 1645, 13979, 13982, 13984, 13985, 13987, 13988, 13989, 5605, 13992, 13993, 13995, 4904, 5377, 2]);