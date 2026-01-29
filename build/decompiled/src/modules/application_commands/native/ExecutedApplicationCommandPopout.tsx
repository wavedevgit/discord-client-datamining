// modules/application_commands/native/ExecutedApplicationCommandPopout.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun76098: for (var _fun76098_ip = 0;;) switch (_fun76098_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun76098_ip = 45;
                    continue _fun76098
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun76098_ip = 54;
                    continue _fun76098
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun76098_ip = 344;
                    continue _fun76098
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun76098_ip = 322;
                    continue _fun76098
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun76098_ip = 282;
                    continue _fun76098
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun76098_ip = 269;
                    continue _fun76098
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun76098_ip = 162;
                    continue _fun76098
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun76098_ip = 178;
                    continue _fun76098
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun76098_ip = 248;
                    continue _fun76098
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun76098_ip = 248;
                    continue _fun76098
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun76098_ip = 233;
                    continue _fun76098
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun76098_ip = 246;
                    continue _fun76098
                }
            case 233:
                var8 = _closure1_slot28;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun76098_ip = 264;
                continue _fun76098;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun76098_ip = 282;
                continue _fun76098;
            case 269:
                var6 = _closure1_slot28;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun76098_ip = 322;
                    continue _fun76098
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun76098_ip = 329;
                    continue _fun76098
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun76099: for (var _fun76099_ip = 0;;) switch (_fun76099_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun76099_ip = 56;
                                continue _fun76099
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun76099_ip = 67;
                            continue _fun76099;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun76100: for (var _fun76100_ip = 0;;) switch (_fun76100_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun76100_ip = 23;
                    continue _fun76100
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun76100_ip = 33;
                    continue _fun76100
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun76100_ip = 70;
                    continue _fun76100
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun76100_ip = 55;
                    continue _fun76100
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var3 = var3.NativeModules;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var6 = var3.MessageTypes;
    var _closure1_slot13 = var6;
    var3 = var3.WHITESPACE_RE;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppLauncherRouteName;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CHANNEL_SENTINEL;
    var _closure1_slot16 = var6;
    var6 = var3.COMMAND_SENTINEL;
    var _closure1_slot17 = var6;
    var3 = var3.MENTION_SENTINEL;
    var _closure1_slot18 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot19 = var6;
    var6 = var3.jsxs;
    var _closure1_slot20 = var6;
    var3 = var3.Fragment;
    var _closure1_slot21 = var3;
    var9 = 12;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var11 = 16;
    var8 = {
        'paddingVertical': 8,
        'paddingHorizontal': 16,
        'gap': 16
    };
    var3.container = var8;
    var8 = {};
    var8.padding = var11;
    var3.activityIndicator = var8;
    var8 = {};
    var12 = var12.PRIMARY_SEMIBOLD;
    var8.fontFamily = var12;
    var3.commandUserText = var8;
    var12 = 'center';
    var8 = {
        'width': 18,
        'height': 18,
        'borderRadius': 9,
        'alignSelf': 'center'
    };
    var3.applicationIcon = var8;
    var8 = {};
    var8.textAlignVertical = var12;
    var3.applicationNameText = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.commandOptionText = var8;
    var8 = {};
    var9 = 13;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var8.color = var12;
    var3.commandOptionMentionText = var8;
    var8 = {};
    var8.fontSize = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var9;
    var3.commandText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot22 = var3;
    var3 = function(arg0) { // Original name: getCommandOptionComponents, environment: var1
        _fun76101: for (var _fun76101_ip = 0;;) switch (_fun76101_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.option;
                var _closure2_slot0 = var1;
                var13 = var3.channel;
                var _closure2_slot1 = var13;
                var12 = var3.guild;
                var11 = var3.messageId;
                var0 = var3.parentOptionName;
                var16 = var3.commandOptionSpec;
                var10 = var3.styles;
                var _closure2_slot2 = var10;
                var9 = var3.analyticsLocations;
                var23 = ' ';
                var3 = var0 + var23;
                var0 = var1.name;
                var8 = var3 + var0;
                var14 = new Array(0);
                var5 = null;
                var0 = var5 == var16;
                var7 = undefined;
                var6 = undefined;
                if (var0) {
                    _fun76101_ip = 104;
                    continue _fun76101
                }
            case 98:
                var6 = var16.name_localized;
            case 104:
                if (!(var5 == var6)) {
                    _fun76101_ip = 113;
                    continue _fun76101
                }
            case 108:
                var6 = var1.name;
            case 113:
                var0 = var1.value;
                if (!(var5 == var0)) {
                    _fun76101_ip = 142;
                    continue _fun76101
                }
            case 122:
                var0 = global;
                var0 = var0.HermesInternal;
                var0 = var0.concat;
                var3 = var0.bind(var23)(var6);
                _fun76101_ip = 165;
                continue _fun76101;
            case 142:
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var0 = ':';
                var3 = var4.bind(var23)(var6, var0);
            case 165:
                var4 = var1.type;
                var15 = _closure1_slot0;
                var0 = _closure1_slot3;
                var20 = 14;
                var0 = var0[var20];
                var0 = var15.bind(var7)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.SUB_COMMAND;
                if (!(var4 !== var0)) {
                    _fun76101_ip = 1150;
                    continue _fun76101
                }
            case 212:
                var4 = var1.type;
                var15 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var20];
                var0 = var15.bind(var7)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.SUB_COMMAND_GROUP;
                if (!(var4 !== var0)) {
                    _fun76101_ip = 1150;
                    continue _fun76101
                }
            case 253:
                var4 = function(arg0, arg1) { // Original name: getUserComponent, environment: var2
                    var8 = arg0;
                    var _closure3_slot0 = var8;
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 15;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.LegacyText;
                    var1 = {};
                    var6 = arg1;
                    var6 = var6.commandOptionMentionText;
                    var1.style = var6;
                    var0 = function() { // Original name: onPress, environment: var0
                        _fun76104: for (var _fun76104_ip = 0;;) switch (_fun76104_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var0 = 16;
                                var1 = var3[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var1 = var4.hideActionSheet;
                                var1 = var1.bind(var4)();
                                var1 = 17;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = {};
                                var3 = _closure3_slot0;
                                var3 = var3.id;
                                var1.userId = var3;
                                var5 = _closure2_slot1;
                                var3 = null;
                                var5 = var3 == var5;
                                var3 = undefined;
                                if (var5) {
                                    _fun76104_ip = 92;
                                    continue _fun76104
                                }
                            case 83:
                                var4 = _closure2_slot1;
                                var3 = var4.id;
                            case 92:
                                var1.channelId = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var1.onPress = var0;
                    var6 = _closure1_slot18;
                    var0 = new Array(2);
                    var0[0] = var6;
                    var6 = _closure1_slot1;
                    var5 = 18;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.getUserTag;
                    var5 = {};
                    var9 = 'never';
                    var5.decoration = var9;
                    var5 = var6.bind(var7)(var8, var5);
                    var0[1] = var5;
                    var1.children = var0;
                    var0 = _closure2_slot0;
                    var6 = var0.name;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var0 = 'optionValue-';
                    var0 = var5.bind(var0)(var6);
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var17 = function(arg0) { // Original name: getRoleComponent, environment: var2
                    var4 = _closure1_slot20;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 15;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.LegacyText;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var6 = var6.commandOptionMentionText;
                    var1.style = var6;
                    var6 = _closure1_slot18;
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = arg0;
                    var6 = var6.name;
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = _closure2_slot0;
                    var6 = var0.name;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var0 = 'optionValue-';
                    var0 = var5.bind(var0)(var6);
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var15 = function(arg0) { // Original name: getCommandValueText, environment: var2
                    var4 = _closure1_slot19;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 19;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-sm/medium',
                        'color': 'mobile-text-heading-primary'
                    };
                    var0 = arg0;
                    var1.children = var0;
                    var0 = _closure2_slot0;
                    var6 = var0.name;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var0 = 'optionValue-';
                    var0 = var5.bind(var0)(var6);
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var0 = var1.value;
                if (!(var5 != var0)) {
                    _fun76101_ip = 1148;
                    continue _fun76101
                }
            case 286:
                var18 = var1.type;
                var19 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var20];
                var0 = var19.bind(var7)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.USER;
                if (!(var0 !== var18)) {
                    _fun76101_ip = 844;
                    continue _fun76101
                }
            case 327:
                var19 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var20];
                var0 = var19.bind(var7)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.CHANNEL;
                if (!(var0 !== var18)) {
                    _fun76101_ip = 699;
                    continue _fun76101
                }
            case 363:
                var19 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var20];
                var0 = var19.bind(var7)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.ROLE;
                if (!(var0 !== var18)) {
                    _fun76101_ip = 633;
                    continue _fun76101
                }
            case 399:
                var19 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var20];
                var0 = var19.bind(var7)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.MENTIONABLE;
                if (!(var0 !== var18)) {
                    _fun76101_ip = 537;
                    continue _fun76101
                }
            case 432:
                var19 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var20];
                var0 = var19.bind(var7)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.ATTACHMENT;
                var19 = null;
                if (!(var0 === var18)) {
                    _fun76101_ip = 888;
                    continue _fun76101
                }
            case 470:
                var21 = _closure1_slot0;
                var22 = _closure1_slot3;
                var0 = 20;
                var18 = var22[var0];
                var18 = var21.bind(var7)(var18);
                var20 = var18.intl;
                var18 = var20.string;
                var0 = var22[var0];
                var0 = var21.bind(var7)(var0);
                var0 = var0.t;
                var0 = var0.nONJVc;
                var0 = var18.bind(var20)(var0);
                var19 = var15.bind(var7)(var0);
                _fun76101_ip = 888;
                continue _fun76101;
            case 537:
                var18 = var1.value;
                var0 = var18.toString;
                var21 = var0.bind(var18)();
                var18 = var5 != var12;
                var0 = undefined;
                if (!var18) {
                    _fun76101_ip = 581;
                    continue _fun76101
                }
            case 560:
                var22 = _closure1_slot8;
                var20 = var22.getRole;
                var18 = var12.id;
                var0 = var20.bind(var22)(var18, var21);
            case 581:
                if (!(var5 == var0)) {
                    _fun76101_ip = 623;
                    continue _fun76101
                }
            case 585:
                var20 = _closure1_slot11;
                var18 = var20.getUser;
                var18 = var18.bind(var20)(var21);
                var20 = var5 != var18;
                var19 = null;
                if (!var20) {
                    _fun76101_ip = 888;
                    continue _fun76101
                }
            case 612:
                var19 = var4.bind(var7)(var18, var10);
                _fun76101_ip = 888;
                continue _fun76101;
            case 623:
                var19 = var17.bind(var7)(var0);
                _fun76101_ip = 888;
                continue _fun76101;
            case 633:
                var18 = var1.value;
                var0 = var18.toString;
                var22 = var0.bind(var18)();
                var18 = var5 != var12;
                var0 = undefined;
                if (!var18) {
                    _fun76101_ip = 677;
                    continue _fun76101
                }
            case 656:
                var21 = _closure1_slot8;
                var20 = var21.getRole;
                var18 = var12.id;
                var0 = var20.bind(var21)(var18, var22);
            case 677:
                var18 = var5 != var0;
                var19 = null;
                if (!var18) {
                    _fun76101_ip = 888;
                    continue _fun76101
                }
            case 689:
                var19 = var17.bind(var7)(var0);
                _fun76101_ip = 888;
                continue _fun76101;
            case 699:
                var17 = var1.value;
                var0 = var17.toString;
                var18 = var0.bind(var17)();
                var17 = _closure1_slot7;
                var0 = var17.getChannel;
                var21 = var0.bind(var17)(var18);
                var0 = var5 != var21;
                var19 = null;
                if (!var0) {
                    _fun76101_ip = 888;
                    continue _fun76101
                }
            case 739:
                var20 = _closure1_slot20;
                var17 = _closure1_slot0;
                var18 = _closure1_slot3;
                var0 = 15;
                var0 = var18[var0];
                var0 = var17.bind(var7)(var0);
                var18 = var0.LegacyText;
                var17 = {};
                var0 = var10.commandOptionMentionText;
                var17.style = var0;
                var22 = _closure1_slot16;
                var0 = new Array(2);
                var0[0] = var22;
                var21 = var21.name;
                var0[1] = var21;
                var17.children = var0;
                var22 = var1.name;
                var0 = global;
                var0 = var0.HermesInternal;
                var21 = var0.concat;
                var0 = 'optionValue-';
                var0 = var21.bind(var0)(var22);
                var19 = var20.bind(var7)(var18, var17, var0);
                _fun76101_ip = 888;
                continue _fun76101;
            case 844:
                var17 = var1.value;
                var0 = var17.toString;
                var18 = var0.bind(var17)();
                var17 = _closure1_slot11;
                var0 = var17.getUser;
                var0 = var0.bind(var17)(var18);
                var17 = var5 != var0;
                var19 = null;
                if (!var17) {
                    _fun76101_ip = 888;
                    continue _fun76101
                }
            case 882:
                var19 = var4.bind(var7)(var0, var10);
            case 888:
                var0 = var5 == var19;
                var18 = true;
                if (!var0) {
                    _fun76101_ip = 1017;
                    continue _fun76101
                }
            case 897:
                var0 = var5 == var16;
                var17 = undefined;
                if (var0) {
                    _fun76101_ip = 938;
                    continue _fun76101
                }
            case 906:
                var20 = var16.choices;
                var0 = var5 == var20;
                var17 = undefined;
                if (var0) {
                    _fun76101_ip = 938;
                    continue _fun76101
                }
            case 921:
                var4 = var20.find;
                var0 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot0;
                    var0 = var0.value;
                    var0 = var1 === var0;
                    return var0;
                };
                var17 = var4.bind(var20)(var0);
            case 938:
                var4 = var1.value;
                var0 = var4.toString;
                var4 = var0.bind(var4)();
                if (!(var5 != var17)) {
                    _fun76101_ip = 974;
                    continue _fun76101
                }
            case 956:
                var0 = var17.name_localized;
                if (!(var5 == var0)) {
                    _fun76101_ip = 971;
                    continue _fun76101
                }
            case 966:
                var0 = var17.name;
            case 971:
                var4 = var0;
            case 974:
                var0 = var4.length;
                var17 = 0;
                var0 = var0 > var17;
                if (!var0) {
                    _fun76101_ip = 1009;
                    continue _fun76101
                }
            case 988:
                var21 = _closure1_slot14;
                var20 = var21.test;
                var17 = var4[var17];
                var17 = var20.bind(var21)(var17);
                var0 = !var17;
            case 1009:
                var19 = var15.bind(var7)(var4);
                var18 = var0;
            case 1017:
                var4 = var14.push;
                var17 = _closure1_slot20;
                var0 = _closure1_slot4;
                var15 = var0.Fragment;
                var0 = {};
                var22 = _closure1_slot19;
                var21 = _closure1_slot0;
                var24 = _closure1_slot3;
                var20 = 15;
                var20 = var24[var20];
                var20 = var21.bind(var7)(var20);
                var21 = var20.LegacyText;
                var20 = {};
                if (!var18) {
                    _fun76101_ip = 1076;
                    continue _fun76101
                }
            case 1073:
                var18 = var23;
            case 1076:
                var18 = var3 + var18;
                var20.children = var18;
                var24 = var1.name;
                var18 = global;
                var18 = var18.HermesInternal;
                var23 = var18.concat;
                var18 = 'optionKey-';
                var18 = var23.bind(var18)(var24);
                var20 = var22.bind(var7)(var21, var20, var18);
                var18 = new Array(2);
                var18[0] = var20;
                var18[1] = var19;
                var0.children = var18;
                var0 = var17.bind(var7)(var15, var0, var8);
                var0 = var4.bind(var14)(var0);
            case 1148:
                return var14;
            case 1150:
                var4 = var14.push;
                var17 = _closure1_slot19;
                var0 = _closure1_slot4;
                var15 = var0.Fragment;
                var0 = {};
                var19 = _closure1_slot0;
                var20 = _closure1_slot3;
                var18 = 15;
                var18 = var20[var18];
                var18 = var19.bind(var7)(var18);
                var20 = var18.LegacyText;
                var19 = {};
                var19.children = var3;
                var22 = var1.name;
                var3 = global;
                var18 = var3.HermesInternal;
                var21 = var18.concat;
                var18 = 'optionKey-';
                var18 = var21.bind(var18)(var22);
                var18 = var17.bind(var7)(var20, var19, var18);
                var0.children = var18;
                var0 = var17.bind(var7)(var15, var0, var8);
                var0 = var4.bind(var14)(var0);
                var4 = var1.options;
                var0 = var14;
                if (!(var5 != var4)) {
                    _fun76101_ip = 1448;
                    continue _fun76101
                }
            case 1270:
                var4 = var3.Object;
                var3 = var4.fromEntries;
                var17 = var5 == var16;
                var15 = undefined;
                if (var17) {
                    _fun76101_ip = 1296;
                    continue _fun76101
                }
            case 1291:
                var15 = var16.options;
            case 1296:
                if (!(var5 == var15)) {
                    _fun76101_ip = 1304;
                    continue _fun76101
                }
            case 1300:
                var15 = new Array(0);
            case 1304:
                var5 = var15.map;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var2 = var1.name;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var2 = var5.bind(var15)(var2);
                var5 = var3.bind(var4)(var2);
                var2 = _closure1_slot27;
                var1 = var1.options;
                var4 = var2.bind(var7)(var1);
                var2 = var4.bind(var7)();
                var1 = var2.done;
                var3 = var14;
                var0 = var3;
                if (var1) {
                    _fun76101_ip = 1448;
                    continue _fun76101
                }
            case 1358:
                var16 = var2.value;
                var14 = var3.concat;
                var15 = _closure1_slot23;
                var1 = {};
                var1.option = var16;
                var1.channel = var13;
                var1.guild = var12;
                var1.messageId = var11;
                var1.parentOptionName = var8;
                var16 = var16.name;
                var16 = var5[var16];
                var1.commandOptionSpec = var16;
                var1.styles = var10;
                var1.analyticsLocations = var9;
                var1 = var15.bind(var7)(var1);
                var3 = var14.bind(var3)(var1);
                var15 = var4.bind(var7)();
                var1 = var15.done;
                var2 = var15;
                var0 = var3;
                if (!var1) {
                    _fun76101_ip = 1358;
                    continue _fun76101
                }
            case 1448:
                return var0;
        }
    };
    var _closure1_slot23 = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: getCommandCopyText, environment: var1
        _fun76108: for (var _fun76108_ip = 0;;) switch (_fun76108_ip) {
            case 0:
                var1 = arg0;
                var9 = arg1;
                var8 = arg2;
                var12 = arg3;
                var _closure2_slot0 = var1;
                var10 = new Array(0);
                var5 = null;
                var0 = var5 == var12;
                var7 = undefined;
                var11 = undefined;
                if (var0) {
                    _fun76108_ip = 41;
                    continue _fun76108
                }
            case 35:
                var11 = var12.name_localized;
            case 41:
                if (!(var5 == var11)) {
                    _fun76108_ip = 50;
                    continue _fun76108
                }
            case 45:
                var11 = var1.name;
            case 50:
                var0 = var1.value;
                if (!(var5 == var0)) {
                    _fun76108_ip = 83;
                    continue _fun76108
                }
            case 59:
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = '';
                var3 = var3.bind(var0)(var11);
                _fun76108_ip = 110;
                continue _fun76108;
            case 83:
                var0 = global;
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var4 = '';
                var0 = ':';
                var3 = var6.bind(var4)(var11, var0);
            case 110:
                var4 = var1.type;
                var11 = _closure1_slot0;
                var0 = _closure1_slot3;
                var14 = 14;
                var0 = var0[var14];
                var0 = var11.bind(var7)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.SUB_COMMAND;
                if (!(var4 !== var0)) {
                    _fun76108_ip = 837;
                    continue _fun76108
                }
            case 157:
                var4 = var1.type;
                var11 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var14];
                var0 = var11.bind(var7)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.SUB_COMMAND_GROUP;
                if (!(var4 !== var0)) {
                    _fun76108_ip = 837;
                    continue _fun76108
                }
            case 198:
                var0 = var1.value;
                var4 = var5 != var0;
                var0 = null;
                if (!var4) {
                    _fun76108_ip = 734;
                    continue _fun76108
                }
            case 215:
                var11 = var1.type;
                var13 = _closure1_slot0;
                var4 = _closure1_slot3;
                var4 = var4[var14];
                var4 = var13.bind(var7)(var4);
                var4 = var4.ApplicationCommandOptionType;
                var4 = var4.USER;
                if (!(var4 !== var11)) {
                    _fun76108_ip = 643;
                    continue _fun76108
                }
            case 256:
                var13 = _closure1_slot0;
                var4 = _closure1_slot3;
                var4 = var4[var14];
                var4 = var13.bind(var7)(var4);
                var4 = var4.ApplicationCommandOptionType;
                var4 = var4.CHANNEL;
                if (!(var4 !== var11)) {
                    _fun76108_ip = 591;
                    continue _fun76108
                }
            case 292:
                var13 = _closure1_slot0;
                var4 = _closure1_slot3;
                var4 = var4[var14];
                var4 = var13.bind(var7)(var4);
                var4 = var4.ApplicationCommandOptionType;
                var4 = var4.ROLE;
                if (!(var4 !== var11)) {
                    _fun76108_ip = 517;
                    continue _fun76108
                }
            case 328:
                var13 = _closure1_slot0;
                var4 = _closure1_slot3;
                var4 = var4[var14];
                var4 = var13.bind(var7)(var4);
                var4 = var4.ApplicationCommandOptionType;
                var4 = var4.MENTIONABLE;
                var0 = null;
                if (!(var4 === var11)) {
                    _fun76108_ip = 734;
                    continue _fun76108
                }
            case 366:
                var11 = var1.value;
                var4 = var11.toString;
                var14 = var4.bind(var11)();
                var11 = var5 != var8;
                var4 = undefined;
                if (!var11) {
                    _fun76108_ip = 410;
                    continue _fun76108
                }
            case 389:
                var15 = _closure1_slot8;
                var13 = var15.getRole;
                var11 = var8.id;
                var4 = var13.bind(var15)(var11, var14);
            case 410:
                if (!(var5 == var4)) {
                    _fun76108_ip = 499;
                    continue _fun76108
                }
            case 414:
                var13 = _closure1_slot11;
                var11 = var13.getUser;
                var16 = var11.bind(var13)(var14);
                var11 = var5 != var16;
                var0 = null;
                if (!var11) {
                    _fun76108_ip = 734;
                    continue _fun76108
                }
            case 441:
                var13 = _closure1_slot18;
                var14 = _closure1_slot1;
                var15 = _closure1_slot3;
                var11 = 18;
                var11 = var15[var11];
                var15 = var14.bind(var7)(var11);
                var14 = var15.getUserTag;
                var11 = {};
                var17 = 'never';
                var11.decoration = var17;
                var11 = var14.bind(var15)(var16, var11);
                var0 = var13 + var11;
                _fun76108_ip = 734;
                continue _fun76108;
            case 499:
                var11 = _closure1_slot18;
                var4 = var4.name;
                var0 = var11 + var4;
                _fun76108_ip = 734;
                continue _fun76108;
            case 517:
                var11 = var1.value;
                var4 = var11.toString;
                var15 = var4.bind(var11)();
                var11 = var5 != var8;
                var4 = undefined;
                if (!var11) {
                    _fun76108_ip = 561;
                    continue _fun76108
                }
            case 540:
                var14 = _closure1_slot8;
                var13 = var14.getRole;
                var11 = var8.id;
                var4 = var13.bind(var14)(var11, var15);
            case 561:
                var11 = var5 != var4;
                var0 = null;
                if (!var11) {
                    _fun76108_ip = 734;
                    continue _fun76108
                }
            case 573:
                var11 = _closure1_slot18;
                var4 = var4.name;
                var0 = var11 + var4;
                _fun76108_ip = 734;
                continue _fun76108;
            case 591:
                var11 = var1.value;
                var4 = var11.toString;
                var13 = var4.bind(var11)();
                var11 = _closure1_slot7;
                var4 = var11.getChannel;
                var4 = var4.bind(var11)(var13);
                var11 = var5 != var4;
                var0 = null;
                if (!var11) {
                    _fun76108_ip = 734;
                    continue _fun76108
                }
            case 628:
                var11 = _closure1_slot16;
                var4 = var4.name;
                var0 = var11 + var4;
                _fun76108_ip = 734;
                continue _fun76108;
            case 643:
                var11 = var1.value;
                var4 = var11.toString;
                var13 = var4.bind(var11)();
                var11 = _closure1_slot11;
                var4 = var11.getUser;
                var15 = var4.bind(var11)(var13);
                var4 = var5 != var15;
                var0 = null;
                if (!var4) {
                    _fun76108_ip = 734;
                    continue _fun76108
                }
            case 681:
                var11 = _closure1_slot18;
                var13 = _closure1_slot1;
                var14 = _closure1_slot3;
                var4 = 18;
                var4 = var14[var4];
                var14 = var13.bind(var7)(var4);
                var13 = var14.getUserTag;
                var4 = {};
                var16 = 'never';
                var4.decoration = var16;
                var4 = var13.bind(var14)(var15, var4);
                var0 = var11 + var4;
            case 734:
                if (!(var5 == var0)) {
                    _fun76108_ip = 821;
                    continue _fun76108
                }
            case 738:
                var4 = var5 == var12;
                var11 = undefined;
                if (var4) {
                    _fun76108_ip = 779;
                    continue _fun76108
                }
            case 747:
                var14 = var12.choices;
                var4 = var5 == var14;
                var11 = undefined;
                if (var4) {
                    _fun76108_ip = 779;
                    continue _fun76108
                }
            case 762:
                var13 = var14.find;
                var4 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot0;
                    var0 = var0.value;
                    var0 = var1 === var0;
                    return var0;
                };
                var11 = var13.bind(var14)(var4);
            case 779:
                if (!(var5 == var11)) {
                    _fun76108_ip = 803;
                    continue _fun76108
                }
            case 783:
                var4 = global;
                var13 = var4.String;
                var4 = var1.value;
                var0 = var13.bind(var7)(var4);
                _fun76108_ip = 821;
                continue _fun76108;
            case 803:
                var4 = var11.name_localized;
                if (!(var5 == var4)) {
                    _fun76108_ip = 818;
                    continue _fun76108
                }
            case 813:
                var4 = var11.name;
            case 818:
                var0 = var4;
            case 821:
                var4 = var10.push;
                var0 = var3 + var0;
                var0 = var4.bind(var10)(var0);
                return var10;
            case 837:
                var0 = var10.push;
                var0 = var0.bind(var10)(var3);
                var3 = var1.options;
                var0 = var10;
                if (!(var5 != var3)) {
                    _fun76108_ip = 1013;
                    continue _fun76108
                }
            case 862:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.fromEntries;
                var13 = var5 == var12;
                var11 = undefined;
                if (var13) {
                    _fun76108_ip = 890;
                    continue _fun76108
                }
            case 885:
                var11 = var12.options;
            case 890:
                if (!(var5 == var11)) {
                    _fun76108_ip = 898;
                    continue _fun76108
                }
            case 894:
                var11 = new Array(0);
            case 898:
                var5 = var11.map;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var2 = var1.name;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var2 = var5.bind(var11)(var2);
                var5 = var3.bind(var4)(var2);
                var2 = _closure1_slot27;
                var1 = var1.options;
                var4 = var2.bind(var7)(var1);
                var2 = var4.bind(var7)();
                var1 = var2.done;
                var3 = var10;
                var0 = var3;
                if (var1) {
                    _fun76108_ip = 1013;
                    continue _fun76108
                }
            case 952:
                var12 = var2.value;
                var10 = var3.concat;
                var11 = _closure1_slot24;
                var1 = var12.name;
                var18 = var5[var1];
                var22 = undefined;
                var21 = var12;
                var20 = var9;
                var19 = var8;
                var1 = var22[var11](var21, var20, var19, var18, var17);
                var3 = var10.bind(var3)(var1);
                var11 = var4.bind(var7)();
                var1 = var11.done;
                var2 = var11;
                var0 = var3;
                if (!var1) {
                    _fun76108_ip = 952;
                    continue _fun76108
                }
            case 1013:
                return var0;
        }
    };
    var _closure1_slot24 = var3;
    var3 = function(arg0) { // Original name: CommandContentContainer, environment: var1
        _fun76111: for (var _fun76111_ip = 0;;) switch (_fun76111_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.channelId;
                var _closure2_slot0 = var1;
                var3 = var2.author;
                var _closure2_slot1 = var3;
                var3 = var2.applicationUser;
                var _closure2_slot2 = var3;
                var9 = var2.data;
                var _closure2_slot3 = var9;
                var3 = var2.guildId;
                var _closure2_slot4 = var3;
                var3 = var2.messageType;
                var _closure2_slot5 = var3;
                var13 = var2.messageId;
                var _closure2_slot6 = var13;
                var3 = undefined;
                var _closure2_slot11 = var3;
                var2 = _closure1_slot22;
                var11 = var2.bind(var3)();
                var _closure2_slot7 = var11;
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 21;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var8 = var2.analyticsLocations;
                var _closure2_slot8 = var8;
                var4 = _closure1_slot0;
                var2 = 22;
                var2 = var6[var2];
                var7 = var4.bind(var3)(var2);
                var6 = var7.useStateFromStoresObject;
                var2 = _closure1_slot7;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = _closure1_slot9;
                var4[1] = var2;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun76112: for (var _fun76112_ip = 0;;) switch (_fun76112_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getChannel;
                            var0 = _closure2_slot0;
                            var4 = var2.bind(var3)(var0);
                            var0 = {};
                            var0.channel = var4;
                            var3 = _closure1_slot9;
                            var2 = var3.getGuild;
                            var1 = null;
                            var5 = var1 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun76112_ip = 55;
                                continue _fun76112
                            }
                        case 50:
                            var1 = var4.guild_id;
                        case 55:
                            var1 = var2.bind(var3)(var1);
                            var0.guild = var1;
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var4, var1, var2);
                var15 = var1.channel;
                var _closure2_slot9 = var15;
                var14 = var1.guild;
                var _closure2_slot10 = var14;
                var2 = var9.application_command;
                var1 = null;
                var4 = var1 == var2;
                var10 = undefined;
                if (var4) {
                    _fun76111_ip = 231;
                    continue _fun76111
                }
            case 225:
                var10 = var2.name_localized;
            case 231:
                if (!(var1 == var10)) {
                    _fun76111_ip = 240;
                    continue _fun76111
                }
            case 235:
                var10 = var9.name;
            case 240:
                _closure2_slot11 = var10;
                var7 = _closure1_slot0;
                var12 = _closure1_slot3;
                var1 = 20;
                var2 = var12[var1];
                var2 = var7.bind(var3)(var2);
                var6 = var2.intl;
                var4 = var6.format;
                var1 = var12[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1["sj/RT9"];
                var1 = {};
                var16 = function() { // Original name: userHook, environment: var0
                    _fun76113: for (var _fun76113_ip = 0;;) switch (_fun76113_ip) {
                        case 0:
                            var4 = _closure1_slot19;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 15;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.LegacyText;
                            var1 = {};
                            var5 = _closure2_slot7;
                            var6 = var5.commandUserText;
                            var5 = new Array(2);
                            var5[0] = var6;
                            var6 = {};
                            var7 = _closure2_slot1;
                            var7 = var7.colorString;
                            var8 = null;
                            if (!(var8 == var7)) {
                                _fun76113_ip = 91;
                                continue _fun76113
                            }
                        case 76:
                            var8 = _closure2_slot7;
                            var8 = var8.commandText;
                            var7 = var8.color;
                        case 91:
                            var6.color = var7;
                            var5[1] = var6;
                            var1.style = var5;
                            var0 = _closure2_slot1;
                            var0 = var0.nick;
                            var1.children = var0;
                            var0 = 'user';
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var1.userHook = var16;
                var16 = function() { // Original name: commandHook, environment: var0
                    _fun76114: for (var _fun76114_ip = 0;;) switch (_fun76114_ip) {
                        case 0:
                            var4 = _closure1_slot19;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 19;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.Text;
                            var1 = {};
                            var0 = 'text-sm/semibold';
                            var1.variant = var0;
                            var7 = _closure2_slot5;
                            var0 = _closure1_slot13;
                            var0 = var0.CHAT_INPUT_COMMAND;
                            if (!(var7 !== var0)) {
                                _fun76114_ip = 73;
                                continue _fun76114
                            }
                        case 67:
                            var0 = _closure2_slot11;
                            _fun76114_ip = 104;
                            continue _fun76114;
                        case 73:
                            var8 = _closure1_slot17;
                            var7 = _closure2_slot11;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var6 = var5.concat;
                            var5 = '';
                            var0 = var6.bind(var5)(var8, var7);
                        case 104:
                            var1.children = var0;
                            var0 = 'command';
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var1.commandHook = var16;
                var16 = function() { // Original name: applicationHook, environment: var0
                    var4 = _closure1_slot20;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var0 = 19;
                    var0 = var10[var0];
                    var3 = undefined;
                    var0 = var9.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {};
                    var5 = _closure2_slot7;
                    var7 = var5.applicationNameText;
                    var1.style = var7;
                    var7 = 'text-sm/semibold';
                    var1.variant = var7;
                    var8 = _closure1_slot19;
                    var7 = _closure1_slot1;
                    var6 = 23;
                    var6 = var10[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = {};
                    var5 = var5.applicationIcon;
                    var6.style = var5;
                    var5 = 24;
                    var5 = var10[var5];
                    var10 = var9.bind(var3)(var5);
                    var9 = var10.ensureAvatarSource;
                    var5 = _closure2_slot2;
                    var11 = var5.getAvatarSource;
                    var0 = _closure2_slot4;
                    var0 = var11.bind(var5)(var0);
                    var0 = var9.bind(var10)(var0);
                    var6.source = var0;
                    var10 = var5.id;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var9 = var0.concat;
                    var0 = 'icon-';
                    var0 = var9.bind(var0)(var10);
                    var6 = var8.bind(var3)(var7, var6, var0);
                    var0 = new Array(2);
                    var0[0] = var6;
                    var6 = var5.username;
                    var5 = ' ';
                    var5 = var5 + var6;
                    var0[1] = var5;
                    var1.children = var0;
                    var0 = 'application';
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var1.applicationHook = var16;
                var4 = var4.bind(var6)(var2, var1);
                var6 = _closure1_slot4;
                var2 = var6.useMemo;
                var1 = new Array(9);
                var1[0] = var15;
                var1[1] = var14;
                var1[2] = var13;
                var13 = var9.name;
                var1[3] = var13;
                var13 = var9.options;
                var1[4] = var13;
                var13 = var9.application_command;
                var1[5] = var13;
                var1[6] = var10;
                var1[7] = var11;
                var1[8] = var8;
                var0 = function() { // Environment: var0
                    _fun76116: for (var _fun76116_ip = 0;;) switch (_fun76116_ip) {
                        case 0:
                            var5 = _closure1_slot19;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 15;
                            var0 = var2[var0];
                            var8 = undefined;
                            var0 = var1.bind(var8)(var0);
                            var4 = var0.LegacyText;
                            var3 = {};
                            var1 = _closure2_slot11;
                            var0 = '/';
                            var0 = var0 + var1;
                            var3.children = var0;
                            var0 = _closure2_slot3;
                            var10 = var0.name;
                            var2 = global;
                            var1 = var2.HermesInternal;
                            var6 = var1.concat;
                            var1 = 'integrationName-';
                            var1 = var6.bind(var1)(var10);
                            var1 = var5.bind(var8)(var4, var3, var1);
                            var10 = new Array(1);
                            var10[0] = var1;
                            var3 = var0.options;
                            var1 = null;
                            var0 = var10;
                            if (!(var1 != var3)) {
                                _fun76116_ip = 339;
                                continue _fun76116
                            }
                        case 121:
                            var3 = var2.Object;
                            var2 = var3.fromEntries;
                            var4 = _closure2_slot3;
                            var4 = var4.application_command;
                            var6 = var1 == var4;
                            var5 = undefined;
                            if (var6) {
                                _fun76116_ip = 157;
                                continue _fun76116
                            }
                        case 152:
                            var5 = var4.options;
                        case 157:
                            if (!(var1 == var5)) {
                                _fun76116_ip = 165;
                                continue _fun76116
                            }
                        case 161:
                            var5 = new Array(0);
                        case 165:
                            var4 = var5.map;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var2 = var1.name;
                                var0 = new Array(2);
                                var0[0] = var2;
                                var0[1] = var1;
                                return var0;
                            };
                            var1 = var4.bind(var5)(var1);
                            var6 = var2.bind(var3)(var1);
                            var2 = _closure1_slot27;
                            var1 = _closure2_slot3;
                            var1 = var1.options;
                            var5 = var2.bind(var8)(var1);
                            var2 = var5.bind(var8)();
                            var1 = var2.done;
                            var4 = '';
                            var3 = var10;
                            var0 = var3;
                            if (var1) {
                                _fun76116_ip = 339;
                                continue _fun76116
                            }
                        case 229:
                            var12 = var2.value;
                            var10 = var3.concat;
                            var11 = _closure1_slot23;
                            var1 = {};
                            var1.option = var12;
                            var13 = _closure2_slot9;
                            var1.channel = var13;
                            var13 = _closure2_slot10;
                            var1.guild = var13;
                            var13 = _closure2_slot6;
                            var1.messageId = var13;
                            var1.parentOptionName = var4;
                            var12 = var12.name;
                            var12 = var6[var12];
                            var1.commandOptionSpec = var12;
                            var12 = _closure2_slot7;
                            var1.styles = var12;
                            var12 = _closure2_slot8;
                            var1.analyticsLocations = var12;
                            var1 = var11.bind(var8)(var1);
                            var3 = var10.bind(var3)(var1);
                            var11 = var5.bind(var8)();
                            var1 = var11.done;
                            var2 = var11;
                            var0 = var3;
                            if (!var1) {
                                _fun76116_ip = 229;
                                continue _fun76116
                            }
                        case 339:
                            return var0;
                    }
                };
                var10 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot20;
                var0 = 25;
                var0 = var12[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {};
                var8 = _closure1_slot19;
                var6 = 19;
                var5 = var12[var6];
                var5 = var7.bind(var3)(var5);
                var14 = var5.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var5 = var11.commandText;
                var13.style = var5;
                var13.children = var4;
                var16 = var9.name;
                var5 = global;
                var4 = var5.HermesInternal;
                var15 = var4.concat;
                var4 = 'commandName-';
                var4 = var15.bind(var4)(var16);
                var13 = var8.bind(var3)(var14, var13, var4);
                var4 = new Array(2);
                var4[0] = var13;
                var6 = var12[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var11 = var11.commandOptionText;
                var6.style = var11;
                var6.children = var10;
                var10 = var9.name;
                var5 = var5.HermesInternal;
                var9 = var5.concat;
                var5 = 'commandOption-';
                var5 = var9.bind(var5)(var10);
                var5 = var8.bind(var3)(var7, var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var3;
    var3 = function(arg0) { // Original name: CommandActionsContainer, environment: var1
        _fun76118: for (var _fun76118_ip = 0;;) switch (_fun76118_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var _closure2_slot0 = var3;
                var1 = var0.chatInputRef;
                var _closure2_slot1 = var1;
                var11 = var0.data;
                var _closure2_slot2 = var11;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var7 = var11.options;
                var0 = null;
                var2 = var0 != var7;
                if (!var2) {
                    _fun76118_ip = 79;
                    continue _fun76118
                }
            case 61:
                var6 = var7.some;
                var5 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 14;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ApplicationCommandOptionType;
                    var0 = var0.ATTACHMENT;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var6.bind(var7)(var5);
            case 79:
                var2 = !var2;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var6 = 22;
                var6 = var8[var6];
                var10 = var7.bind(var4)(var6);
                var8 = var10.useStateFromStoresObject;
                var6 = _closure1_slot7;
                var7 = new Array(2);
                var7[0] = var6;
                var6 = _closure1_slot9;
                var7[1] = var6;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var9
                    _fun76120: for (var _fun76120_ip = 0;;) switch (_fun76120_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getChannel;
                            var0 = _closure2_slot0;
                            var4 = var2.bind(var3)(var0);
                            var0 = {};
                            var0.channel = var4;
                            var3 = _closure1_slot9;
                            var2 = var3.getGuild;
                            var1 = null;
                            var5 = var1 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun76120_ip = 55;
                                continue _fun76120
                            }
                        case 50:
                            var1 = var4.guild_id;
                        case 55:
                            var1 = var2.bind(var3)(var1);
                            var0.guild = var1;
                            return var0;
                    }
                };
                var3 = var8.bind(var10)(var7, var3, var6);
                var10 = var3.channel;
                _closure2_slot3 = var10;
                var3 = var3.guild;
                _closure2_slot4 = var3;
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var6 = new Array(3);
                var6[0] = var11;
                var6[1] = var10;
                var6[2] = var3;
                var3 = function() { // Environment: var9
                    _fun76121: for (var _fun76121_ip = 0;;) switch (_fun76121_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = var0.application_command;
                            var4 = null;
                            var3 = var4 == var1;
                            var0 = undefined;
                            var5 = undefined;
                            if (var3) {
                                _fun76121_ip = 32;
                                continue _fun76121
                            }
                        case 26:
                            var5 = var1.name_localized;
                        case 32:
                            if (!(var4 == var5)) {
                                _fun76121_ip = 45;
                                continue _fun76121
                            }
                        case 36:
                            var1 = _closure2_slot2;
                            var5 = var1.name;
                        case 45:
                            var3 = _closure1_slot17;
                            var3 = var3 + var5;
                            var10 = new Array(1);
                            var10[0] = var3;
                            var3 = _closure2_slot2;
                            var3 = var3.options;
                            var7 = var10;
                            if (!(var4 != var3)) {
                                _fun76121_ip = 252;
                                continue _fun76121
                            }
                        case 83:
                            var3 = global;
                            var6 = var3.Object;
                            var5 = var6.fromEntries;
                            var3 = _closure2_slot2;
                            var3 = var3.application_command;
                            var8 = var4 == var3;
                            var9 = undefined;
                            if (var8) {
                                _fun76121_ip = 121;
                                continue _fun76121
                            }
                        case 116:
                            var9 = var3.options;
                        case 121:
                            if (!(var4 == var9)) {
                                _fun76121_ip = 129;
                                continue _fun76121
                            }
                        case 125:
                            var9 = new Array(0);
                        case 129:
                            var8 = var9.map;
                            var3 = function(arg0) { // Environment: var3
                                var1 = arg0;
                                var2 = var1.name;
                                var0 = new Array(2);
                                var0[0] = var2;
                                var0[1] = var1;
                                return var0;
                            };
                            var3 = var8.bind(var9)(var3);
                            var9 = var5.bind(var6)(var3);
                            var5 = _closure1_slot27;
                            var3 = _closure2_slot2;
                            var3 = var3.options;
                            var8 = var5.bind(var0)(var3);
                            var5 = var8.bind(var0)();
                            var3 = var5.done;
                            var6 = var10;
                            var7 = var6;
                            if (var3) {
                                _fun76121_ip = 252;
                                continue _fun76121
                            }
                        case 189:
                            var14 = var5.value;
                            var10 = var6.concat;
                            var13 = _closure1_slot24;
                            var17 = _closure2_slot3;
                            var16 = _closure2_slot4;
                            var3 = var14.name;
                            var15 = var9[var3];
                            var19 = undefined;
                            var18 = var14;
                            var3 = var19[var13](var18, var17, var16, var15, var14);
                            var6 = var10.bind(var6)(var3);
                            var11 = var8.bind(var0)();
                            var3 = var11.done;
                            var5 = var11;
                            var7 = var6;
                            if (!var3) {
                                _fun76121_ip = 189;
                                continue _fun76121
                            }
                        case 252:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var3 = 26;
                            var3 = var6[var3];
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.isAndroid;
                            var3 = var3.bind(var5)();
                            if (var3) {
                                _fun76121_ip = 357;
                                continue _fun76121
                            }
                        case 285:
                            var3 = _closure1_slot6;
                            var9 = var3.DCDClipboardManager;
                            var8 = var9.setItem;
                            var3 = global;
                            var6 = var3.JSON;
                            var5 = var6.stringify;
                            var3 = _closure2_slot2;
                            var6 = var5.bind(var6)(var3);
                            var5 = var7.join;
                            var3 = ' ';
                            var5 = var5.bind(var7)(var3);
                            var3 = 'application/x-discord-interaction-data';
                            var3 = var8.bind(var9)(var6, var3, var5);
                            _fun76121_ip = 456;
                            continue _fun76121;
                        case 357:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var5 = 27;
                            var3 = var3[var5];
                            var3 = var6.bind(var0)(var3);
                            if (!(var4 != var3)) {
                                _fun76121_ip = 456;
                                continue _fun76121
                            }
                        case 381:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var3 = var3[var5];
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.setItem;
                            var3 = global;
                            var4 = var3.JSON;
                            var3 = var4.stringify;
                            var2 = _closure2_slot2;
                            var4 = var3.bind(var4)(var2);
                            var3 = var7.join;
                            var2 = ' ';
                            var3 = var3.bind(var7)(var2);
                            var2 = 'application/x-discord-interaction-data';
                            var2 = var5.bind(var6)(var4, var2, var3);
                        case 456:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 28;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.presentCommandCopied;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var3, var6);
                _closure2_slot5 = var3;
                var11 = new Array(0);
                if (!var2) {
                    _fun76118_ip = 330;
                    continue _fun76118
                }
            case 220:
                var3 = var11.push;
                var7 = _closure1_slot19;
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var2 = 29;
                var2 = var14[var2];
                var2 = var13.bind(var4)(var2);
                var6 = var2.TableRow;
                var2 = {};
                var8 = 20;
                var10 = var14[var8];
                var10 = var13.bind(var4)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var8 = var14[var8];
                var8 = var13.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8["42H+Nb"];
                var8 = var10.bind(var12)(var8);
                var2.label = var8;
                var8 = function() { // Original name: onPress, environment: var9
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var2.onPress = var8;
                var2 = var7.bind(var4)(var6, var2);
                var2 = var3.bind(var11)(var2);
            case 330:
                if (!(var0 != var1)) {
                    _fun76118_ip = 446;
                    continue _fun76118
                }
            case 334:
                var2 = var11.push;
                var6 = _closure1_slot19;
                var12 = _closure1_slot0;
                var13 = _closure1_slot3;
                var1 = 29;
                var1 = var13[var1];
                var1 = var12.bind(var4)(var1);
                var3 = var1.TableRow;
                var1 = {};
                var7 = 20;
                var8 = var13[var7];
                var8 = var12.bind(var4)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var7 = var13[var7];
                var7 = var12.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.lNWC7s;
                var7 = var8.bind(var10)(var7);
                var1.label = var7;
                var7 = function() { // Original name: onPress, environment: var9
                    _fun76124: for (var _fun76124_ip = 0;;) switch (_fun76124_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var1 = _closure2_slot2;
                            var1 = var1.options;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun76124_ip = 172;
                                continue _fun76124
                            }
                        case 53:
                            var1 = _closure2_slot2;
                            var1 = var1.options;
                            var1 = var1.length;
                            var2 = 0;
                            if (!(var1 > var2)) {
                                _fun76124_ip = 172;
                                continue _fun76124
                            }
                        case 73:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var11 = 14;
                            var5 = var1[var11];
                            var5 = var3.bind(var0)(var5);
                            var5 = var5.ApplicationCommandOptionType;
                            var6 = var5.SUB_COMMAND;
                            var5 = new Array(2);
                            var5[0] = var6;
                            var1 = var1[var11];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.ApplicationCommandOptionType;
                            var1 = var1.SUB_COMMAND_GROUP;
                            var5[1] = var1;
                            var3 = var5.includes;
                            var1 = _closure2_slot2;
                            var1 = var1.options;
                            var1 = var1[var2];
                            var1 = var1.type;
                            var1 = var3.bind(var5)(var1);
                            if (var1) {
                                _fun76124_ip = 342;
                                continue _fun76124
                            }
                        case 172:
                            var1 = _closure2_slot1;
                            var1 = var4 == var1;
                            var5 = undefined;
                            if (var1) {
                                _fun76124_ip = 201;
                                continue _fun76124
                            }
                        case 185:
                            var3 = _closure2_slot1;
                            var3 = var3.current;
                            var1 = var4 == var3;
                            var5 = var3;
                        case 201:
                            if (var1) {
                                _fun76124_ip = 698;
                                continue _fun76124
                            }
                        case 207:
                            var3 = var5.openCustomKeyboard;
                            var1 = {};
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var6 = 30;
                            var6 = var12[var6];
                            var6 = var10.bind(var0)(var6);
                            var6 = var6.KeyboardTypes;
                            var6 = var6.APP_LAUNCHER;
                            var1.type = var6;
                            var6 = {};
                            var9 = _closure1_slot15;
                            var9 = var9.COMMAND_VIEW;
                            var6.initialRouteName = var9;
                            var9 = 31;
                            var9 = var12[var9];
                            var9 = var10.bind(var0)(var9);
                            var9 = var9.ApplicationCommandTriggerLocations;
                            var9 = var9.RECALL;
                            var6.analyticsLocation = var9;
                            var9 = {};
                            var10 = _closure2_slot2;
                            var12 = var10.id;
                            var9.commandId = var12;
                            var10 = var10.options;
                            var9.prefilledOptions = var10;
                            var6.preSelectedCommand = var9;
                            var1.context = var6;
                            var1 = var3.bind(var5)(var1);
                            _fun76124_ip = 698;
                            continue _fun76124;
                        case 342:
                            var1 = _closure2_slot2;
                            var3 = var1.options;
                            var3 = var3[var2];
                            var3 = var3.name;
                            var10 = new Array(1);
                            var10[0] = var3;
                            var1 = var1.options;
                            var1 = var1[var2];
                            var1 = var1.options;
                            var3 = var4 != var1;
                            if (!var3) {
                                _fun76124_ip = 398;
                                continue _fun76124
                            }
                        case 389:
                            var5 = var1.length;
                            var3 = var5 > var2;
                        case 398:
                            if (!var3) {
                                _fun76124_ip = 482;
                                continue _fun76124
                            }
                        case 401:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var9 = var5[var11];
                            var9 = var6.bind(var0)(var9);
                            var9 = var9.ApplicationCommandOptionType;
                            var12 = var9.SUB_COMMAND;
                            var9 = new Array(2);
                            var9[0] = var12;
                            var5 = var5[var11];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.ApplicationCommandOptionType;
                            var5 = var5.SUB_COMMAND_GROUP;
                            var9[1] = var5;
                            var6 = var9.includes;
                            var5 = var1[var2];
                            var5 = var5.type;
                            var3 = var6.bind(var9)(var5);
                        case 482:
                            var6 = var1;
                            if (!var3) {
                                _fun76124_ip = 516;
                                continue _fun76124
                            }
                        case 488:
                            var5 = var10.push;
                            var3 = var1[var2];
                            var3 = var3.name;
                            var3 = var5.bind(var10)(var3);
                            var1 = var1[var2];
                            var6 = var1.options;
                        case 516:
                            var1 = _closure2_slot1;
                            var1 = var4 == var1;
                            var3 = undefined;
                            if (var1) {
                                _fun76124_ip = 545;
                                continue _fun76124
                            }
                        case 529:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            var1 = var4 == var2;
                            var3 = var2;
                        case 545:
                            if (var1) {
                                _fun76124_ip = 698;
                                continue _fun76124
                            }
                        case 551:
                            var2 = var3.openCustomKeyboard;
                            var1 = {};
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var4 = 30;
                            var4 = var11[var4];
                            var4 = var9.bind(var0)(var4);
                            var4 = var4.KeyboardTypes;
                            var4 = var4.APP_LAUNCHER;
                            var1.type = var4;
                            var4 = {};
                            var5 = _closure1_slot15;
                            var5 = var5.COMMAND_VIEW;
                            var4.initialRouteName = var5;
                            var5 = 31;
                            var5 = var11[var5];
                            var5 = var9.bind(var0)(var5);
                            var5 = var5.ApplicationCommandTriggerLocations;
                            var5 = var5.RECALL;
                            var4.analyticsLocation = var5;
                            var5 = {};
                            var7 = _closure2_slot2;
                            var7 = var7.id;
                            var9 = _closure1_slot12;
                            var8 = var7 + var9;
                            var7 = var10.join;
                            var7 = var7.bind(var10)(var9);
                            var7 = var8 + var7;
                            var5.commandId = var7;
                            var5.prefilledOptions = var6;
                            var4.preSelectedCommand = var5;
                            var1.context = var4;
                            var1 = var2.bind(var3)(var1);
                        case 698:
                            return var0;
                    }
                };
                var1.onPress = var7;
                var1 = var6.bind(var4)(var3, var1);
                var1 = var2.bind(var11)(var1);
            case 446:
                var2 = var11.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun76118_ip = 664;
                    continue _fun76118
                }
            case 462:
                var3 = _closure1_slot20;
                var7 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 32;
                var1 = var10[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.Stack;
                var1 = {};
                var6 = 8;
                var1.spacing = var6;
                var8 = _closure1_slot19;
                var5 = 19;
                var5 = var10[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var12 = 20;
                var13 = var10[var12];
                var13 = var7.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var10[var12];
                var12 = var7.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["3eF5/L"];
                var12 = var13.bind(var14)(var12);
                var5.children = var12;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 33;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.TableRowGroup;
                var6 = {};
                var10 = var11.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    var4 = _closure1_slot19;
                    var0 = _closure1_slot4;
                    var3 = var0.Fragment;
                    var2 = {};
                    var0 = arg0;
                    var2.children = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 664:
                return var0;
        }
    };
    var _closure1_slot26 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ExecutedApplicationCommandPopout.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun76126: for (var _fun76126_ip = 0;;) switch (_fun76126_ip) {
            case 0:
                var0 = arg0;
                var22 = var0.user;
                var17 = var0.channelId;
                var _closure2_slot0 = var17;
                var16 = var0.chatInputRef;
                var21 = var0.messageId;
                var _closure2_slot1 = var21;
                var20 = var0.author;
                var19 = var0.applicationUser;
                var23 = var0.guildId;
                var18 = var0.messageType;
                var0 = _closure1_slot22;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 22;
                var0 = var6[var0];
                var5 = var2.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var3 = _closure1_slot10;
                    var2 = var3.getMessage;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var15 = var4.bind(var5)(var2, var0);
                var _closure2_slot2 = var15;
                var5 = _closure1_slot1;
                var0 = 21;
                var2 = var6[var0];
                var4 = var5.bind(var3)(var2);
                var2 = 34;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.EXECUTED_COMMAND;
                var2 = var4.bind(var3)(var2);
                var4 = var2.analyticsLocations;
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var2 = new Array(3);
                var2[0] = var17;
                var2[1] = var21;
                var14 = null;
                var8 = var14 == var15;
                var7 = undefined;
                if (var8) {
                    _fun76126_ip = 207;
                    continue _fun76126
                }
            case 201:
                var7 = var15.interactionData;
            case 207:
                var2[2] = var7;
                var1 = function() { // Environment: var1
                    _fun76128: for (var _fun76128_ip = 0;;) switch (_fun76128_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var5 = null;
                            var3 = var5 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun76128_ip = 30;
                                continue _fun76128
                            }
                        case 20:
                            var3 = _closure2_slot2;
                            var2 = var3.interactionData;
                        case 30:
                            var2 = var5 == var2;
                            if (var2) {
                                _fun76128_ip = 143;
                                continue _fun76128
                            }
                        case 37:
                            var3 = _closure2_slot2;
                            var3 = var5 == var3;
                            var4 = undefined;
                            if (var3) {
                                _fun76128_ip = 65;
                                continue _fun76128
                            }
                        case 50:
                            var3 = _closure2_slot2;
                            var3 = var3.interactionData;
                            var4 = var3.type;
                        case 65:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var3 = 14;
                            var3 = var7[var3];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.ApplicationCommandType;
                            var3 = var3.CHAT;
                            var3 = var4 === var3;
                            if (!var3) {
                                _fun76128_ip = 140;
                                continue _fun76128
                            }
                        case 107:
                            var4 = _closure2_slot2;
                            var5 = var5 == var4;
                            var4 = undefined;
                            if (var5) {
                                _fun76128_ip = 136;
                                continue _fun76128
                            }
                        case 120:
                            var5 = _closure2_slot2;
                            var5 = var5.interactionData;
                            var4 = var5.application_command;
                        case 136:
                            var3 = var0 === var4;
                        case 140:
                            var2 = var3;
                        case 143:
                            if (!var2) {
                                _fun76128_ip = 189;
                                continue _fun76128
                            }
                        case 146:
                            var3 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var2 = 35;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.fetchMessageInteractionData;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var2, var1);
                        case 189:
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot19;
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var4 = 36;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheet;
                var4 = {};
                var6 = true;
                var4.startExpanded = var6;
                var6 = var9.container;
                var4.bodyStyles = var6;
                var7 = var14 == var15;
                var6 = undefined;
                if (var7) {
                    _fun76126_ip = 309;
                    continue _fun76126
                }
            case 303:
                var6 = var15.interactionData;
            case 309:
                if (!(var14 == var6)) {
                    _fun76126_ip = 352;
                    continue _fun76126
                }
            case 313:
                var8 = _closure1_slot19;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var9.activityIndicator;
                var6.style = var9;
                var9 = 'large';
                var6.size = var9;
                var6 = var8.bind(var3)(var7, var6);
                _fun76126_ip = 494;
                continue _fun76126;
            case 352:
                var9 = _closure1_slot20;
                var8 = _closure1_slot21;
                var7 = {};
                var13 = _closure1_slot19;
                var12 = _closure1_slot25;
                var10 = {};
                var10.guildId = var23;
                var10.user = var22;
                var10.channelId = var17;
                var10.messageId = var21;
                var10.author = var20;
                var10.applicationUser = var19;
                var20 = var14 == var15;
                var19 = undefined;
                if (var20) {
                    _fun76126_ip = 413;
                    continue _fun76126
                }
            case 407:
                var19 = var15.interactionData;
            case 413:
                var10.data = var19;
                var10.messageType = var18;
                var12 = var13.bind(var3)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var13 = _closure1_slot19;
                var12 = _closure1_slot26;
                var11 = {};
                var11.channelId = var17;
                var11.chatInputRef = var16;
                var16 = var14 == var15;
                var14 = undefined;
                if (var16) {
                    _fun76126_ip = 470;
                    continue _fun76126
                }
            case 464:
                var14 = var15.interactionData;
            case 470:
                var11.data = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 494:
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1665, 1410, 4207, 1613, 4502, 660, 1468, 6681, 33, 1297, 671, 1636, 4832, 3237, 7310, 3195, 3895, 1234, 5684, 566, 4660, 1418, 4856, 478, 9661, 3106, 4854, 1567, 4504, 4033, 5320, 5536, 6751, 4887, 2]);