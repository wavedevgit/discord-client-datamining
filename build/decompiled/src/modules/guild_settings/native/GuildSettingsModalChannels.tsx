// modules/guild_settings/native/GuildSettingsModalChannels.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun115441: for (var _fun115441_ip = 0;;) switch (_fun115441_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot7;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot6;
                var0 = _closure1_slot28;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun115441_ip = 51;
                    continue _fun115441
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun115441_ip = 92;
                continue _fun115441;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun115441_ip = 71;
                    continue _fun115441
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot7;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun115442: for (var _fun115442_ip = 0;;) switch (_fun115442_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun115442_ip = 76;
                continue _fun115442;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot28 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0) { // Original name: ChannelItem, environment: var1
        _fun115445: for (var _fun115445_ip = 0;;) switch (_fun115445_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.style;
                var23 = var0.channelIconStyle;
                var15 = var0.actionIconStyle;
                var10 = var0.channel;
                var _closure2_slot0 = var10;
                var11 = var0.sortingEnabled;
                var1 = var0.onPress;
                var _closure2_slot1 = var1;
                var4 = var0.sortHandlers;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 15;
                var0 = var2[var0];
                var3 = undefined;
                var7 = var1.bind(var3)(var0);
                var6 = var7.useLegacyClassComponentStyles;
                var0 = _closure1_slot23;
                var18 = var6.bind(var7)(var0);
                var9 = 19;
                var0 = var2[var9];
                var6 = var1.bind(var3)(var0);
                var0 = var6.useThemeContext;
                var0 = var0.bind(var6)();
                var8 = var0.theme;
                var0 = 25;
                var0 = var2[var0];
                var7 = var1.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot14;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = new Array(1);
                var1[0] = var10;
                var0 = function() { // Environment: var17
                    _fun115446: for (var _fun115446_ip = 0;;) switch (_fun115446_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.parent_id;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun115446_ip = 66;
                                continue _fun115446
                            }
                        case 19:
                            var3 = _closure1_slot14;
                            var2 = var3.canWithPartialContext;
                            var0 = _closure1_slot19;
                            var1 = var0.MANAGE_CHANNELS;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var4 = var4.parent_id;
                            var0.channelId = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            _fun115446_ip = 110;
                            continue _fun115446;
                        case 66:
                            var4 = _closure1_slot14;
                            var3 = var4.canWithPartialContext;
                            var1 = _closure1_slot19;
                            var2 = var1.MANAGE_CHANNELS;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.guild_id;
                            var1.guildId = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 110:
                            return var0;
                    }
                };
                var14 = var6.bind(var7)(var2, var0, var1);
                if (var14) {
                    _fun115445_ip = 178;
                    continue _fun115445
                }
            case 176:
                var4 = undefined;
            case 178:
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 26;
                var1 = var6[var0];
                var2 = var7.bind(var3)(var1);
                var1 = var2.getChannelIcon;
                var24 = var1.bind(var2)(var10);
                var0 = var6[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.getChannelIconComponent;
                var22 = var0.bind(var1)(var10);
                var2 = _closure1_slot21;
                var1 = _closure1_slot11;
                var0 = {};
                var12 = 'button';
                var0.accessibilityRole = var12;
                var6 = var6[var9];
                var7 = var7.bind(var3)(var6);
                var6 = var7.isThemeDark;
                var7 = var6.bind(var7)(var8);
                var8 = _closure1_slot0;
                var13 = _closure1_slot3;
                var6 = 20;
                var6 = var13[var6];
                var12 = var8.bind(var3)(var6);
                var9 = var12.hex2rgb;
                var8 = _closure1_slot1;
                var6 = 17;
                var6 = var13[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.unsafe_rawColors;
                if (var7) {
                    _fun115445_ip = 341;
                    continue _fun115445
                }
            case 317:
                var8 = var6.PRIMARY_200;
                var7 = 0.6;
                var7 = var9.bind(var12)(var8, var7);
                _fun115445_ip = 363;
                continue _fun115445;
            case 341:
                var8 = var6.PRIMARY_700;
                var6 = 0.6;
                var7 = var9.bind(var12)(var8, var6);
            case 363:
                var13 = null;
                var8 = var13 != var7;
                var6 = undefined;
                if (!var8) {
                    _fun115445_ip = 377;
                    continue _fun115445
                }
            case 374:
                var6 = var7;
            case 377:
                var0.underlayColor = var6;
                var0.style = var5;
                var30 = var0;
                var29 = var4;
                var4 = copyDataProperties(var30, var29);
                var6 = _closure1_slot21;
                var5 = _closure1_slot10;
                var4 = {};
                var7 = null;
                if (!var11) {
                    _fun115445_ip = 435;
                    continue _fun115445
                }
            case 411:
                var7 = null;
                if (var14) {
                    _fun115445_ip = 435;
                    continue _fun115445
                }
            case 416:
                var8 = {};
                var9 = 0.3;
                var8.opacity = var9;
                var7 = var8;
            case 435:
                var4.style = var7;
                var9 = _closure1_slot21;
                var8 = _closure1_slot0;
                var7 = _closure1_slot3;
                var12 = 21;
                var7 = var7[var12];
                var7 = var8.bind(var3)(var7);
                var8 = var7.FormRow;
                var7 = {};
                if (!(var13 == var22)) {
                    _fun115445_ip = 558;
                    continue _fun115445
                }
            case 475:
                var21 = _closure1_slot21;
                var20 = _closure1_slot0;
                var27 = _closure1_slot3;
                var19 = var27[var12];
                var19 = var20.bind(var3)(var19);
                var19 = var19.FormRow;
                var20 = var19.Icon;
                var19 = {};
                var26 = _closure1_slot1;
                var25 = 22;
                var25 = var27[var25];
                var25 = var26.bind(var3)(var25);
                var25 = var25.Sizes;
                var25 = var25.SMALL_20;
                var19.size = var25;
                var19.source = var24;
                var19.style = var23;
                var19 = var21.bind(var3)(var20, var19);
                _fun115445_ip = 582;
                continue _fun115445;
            case 558:
                var21 = _closure1_slot21;
                var20 = {};
                var20.style = var23;
                var23 = 'sm';
                var20.size = var23;
                var19 = var21.bind(var3)(var22, var20);
            case 582:
                var7.leading = var19;
                var18 = var18.formRowStyle;
                var7.style = var18;
                var10 = var10.name;
                var7.label = var10;
                var10 = undefined;
                if (var11) {
                    _fun115445_ip = 618;
                    continue _fun115445
                }
            case 611:
                var10 = function() { // Environment: var17
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
            case 618:
                var7.onPress = var10;
                var10 = null;
                if (!var14) {
                    _fun115445_ip = 697;
                    continue _fun115445
                }
            case 627:
                var10 = null;
                if (!var11) {
                    _fun115445_ip = 697;
                    continue _fun115445
                }
            case 632:
                var14 = _closure1_slot21;
                var13 = _closure1_slot0;
                var18 = _closure1_slot3;
                var12 = var18[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.FormRow;
                var13 = var12.Icon;
                var12 = {};
                var17 = _closure1_slot1;
                var16 = 23;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var12.source = var16;
                var12.style = var15;
                var10 = var14.bind(var3)(var13, var12);
            case 697:
                var7.trailing = var10;
                var10 = undefined;
                if (!var11) {
                    _fun115445_ip = 710;
                    continue _fun115445
                }
            case 707:
                var10 = 1;
            case 710:
                var7.numberOfLines = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function(arg0, arg1) { // Original name: isValidDrop, environment: var1
        _fun115448: for (var _fun115448_ip = 0;;) switch (_fun115448_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var0 = var3 != var1;
                if (!var0) {
                    _fun115448_ip = 108;
                    continue _fun115448
                }
            case 12:
                var2 = var1.parentId;
                if (!(var3 != var2)) {
                    _fun115448_ip = 73;
                    continue _fun115448
                }
            case 22:
                var4 = _closure1_slot14;
                var3 = var4.can;
                var2 = _closure1_slot19;
                var2 = var2.MANAGE_CHANNELS;
                var6 = _closure1_slot12;
                var5 = var6.getChannel;
                var1 = var1.parentId;
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
                _fun115448_ip = 105;
                continue _fun115448;
            case 73:
                var5 = _closure1_slot14;
                var4 = var5.can;
                var2 = _closure1_slot19;
                var3 = var2.MANAGE_CHANNELS;
                var2 = arg1;
                var1 = var4.bind(var5)(var3, var2);
            case 105:
                var0 = var1;
            case 108:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function(arg0) { // Original name: CreateButton, environment: var1
        _fun115449: for (var _fun115449_ip = 0;;) switch (_fun115449_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guild;
                var _closure2_slot0 = var3;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 15;
                var0 = var2[var0];
                var4 = undefined;
                var5 = var1.bind(var4)(var0);
                var1 = var5.useLegacyClassComponentStyles;
                var0 = _closure1_slot23;
                var5 = var1.bind(var5)(var0);
                var1 = _closure1_slot1;
                var0 = 29;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var0 = var0.bottom;
                var _closure2_slot1 = var0;
                var6 = _closure1_slot9;
                var2 = var6.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var0 = {};
                    var2 = _closure2_slot1;
                    var1 = 16;
                    var1 = var1 + var2;
                    var0.bottom = var1;
                    return var0;
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot14;
                var1 = var2.can;
                var0 = _closure1_slot19;
                var0 = var0.MANAGE_CHANNELS;
                var1 = var1.bind(var2)(var0, var3);
                var0 = null;
                if (!var1) {
                    _fun115449_ip = 331;
                    continue _fun115449
                }
            case 147:
                var3 = _closure1_slot21;
                var2 = _closure1_slot10;
                var1 = {};
                var7 = var5.floatingActionButtonContainer;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.style = var5;
                var7 = _closure1_slot21;
                var9 = _closure1_slot0;
                var11 = _closure1_slot3;
                var5 = 30;
                var5 = var11[var5];
                var5 = var9.bind(var4)(var5);
                var6 = var5.Button;
                var5 = {};
                var12 = 18;
                var13 = var11[var12];
                var13 = var9.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var11[var12];
                var12 = var9.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.CumH4u;
                var12 = var13.bind(var14)(var12);
                var5.text = var12;
                var10 = function() { // Original name: onPress, environment: var10
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var0 = 31;
                    var1 = var11[var0];
                    var0 = undefined;
                    var3 = var10.bind(var0)(var1);
                    var2 = var3.showSimpleActionSheet;
                    var1 = {};
                    var4 = 'GuildSettingsChannelsCreate';
                    var1.key = var4;
                    var4 = {};
                    var7 = 18;
                    var5 = var11[var7];
                    var5 = var10.bind(var0)(var5);
                    var9 = var5.intl;
                    var8 = var9.string;
                    var5 = var11[var7];
                    var5 = var10.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5.CumH4u;
                    var5 = var8.bind(var9)(var5);
                    var4.title = var5;
                    var1.header = var4;
                    var5 = {};
                    var4 = var11[var7];
                    var4 = var10.bind(var0)(var4);
                    var9 = var4.intl;
                    var8 = var9.string;
                    var4 = var11[var7];
                    var4 = var10.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.vHCZwr;
                    var4 = var8.bind(var9)(var4);
                    var5.label = var4;
                    var4 = function() { // Original name: onPress, environment: var6
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var0 = 32;
                        var2 = var2[var0];
                        var0 = undefined;
                        var5 = var3.bind(var0)(var2);
                        var4 = var5.open;
                        var1 = _closure1_slot18;
                        var9 = var1.GUILD_CATEGORY;
                        var1 = _closure2_slot0;
                        var8 = var1.id;
                        var10 = var5;
                        var7 = null;
                        var6 = null;
                        var1 = var10[var4](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var5.onPress = var4;
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = {};
                    var8 = var11[var7];
                    var8 = var10.bind(var0)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.GK18KJ;
                    var7 = var8.bind(var9)(var7);
                    var5.label = var7;
                    var6 = function() { // Original name: onPress, environment: var6
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 32;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.open;
                        var1 = _closure2_slot0;
                        var7 = var1.id;
                        var9 = var4;
                        var8 = null;
                        var6 = null;
                        var5 = null;
                        var1 = var9[var3](var8, var7, var6, var5, var4);
                        return var0;
                    };
                    var5.onPress = var6;
                    var4[1] = var5;
                    var1.options = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5.onPress = var10;
                var10 = _closure1_slot21;
                var8 = 33;
                var8 = var11[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.PlusSmallIcon;
                var8 = {};
                var11 = 'white';
                var8.color = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.icon = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 331:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var21 = true;
    var3.value = var21;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var16 = 1;
    var3 = var5[var16];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot9 = var6;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot10 = var7;
    var13 = var3.StyleSheet;
    var3 = var3.TouchableHighlight;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var12 = 12;
    var3 = var5[var12];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelTypes;
    var _closure1_slot18 = var7;
    var7 = var3.Permissions;
    var _closure1_slot19 = var7;
    var14 = var3.Fonts;
    var3 = var3.NULL_STRING_CHANNEL_ID;
    var _closure1_slot20 = var3;
    var17 = 14;
    var3 = var5[var17];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot21 = var7;
    var3 = var3.jsxs;
    var _closure1_slot22 = var3;
    var3 = 15;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createLegacyClassComponentStyles;
    var3 = {};
    var9 = {};
    var15 = 16;
    var10 = var5[var15];
    var20 = var11.bind(var0)(var10);
    var19 = var14.PRIMARY_SEMIBOLD;
    var10 = 17;
    var18 = var5[var10];
    var18 = var11.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.MOBILE_TEXT_HEADING_PRIMARY;
    var24 = var20.bind(var0)(var19, var18, var15);
    var25 = var9;
    var18 = copyDataProperties(var25, var24);
    var19 = 'capitalize';
    var18 = 'textTransform';
    var9[var18] = var19;
    var3.headerRight = var9;
    var9 = {};
    var9.flex = var16;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var16;
    var3.containerView = var9;
    var9 = {};
    var16 = var5[var15];
    var20 = var11.bind(var0)(var16);
    var19 = var14.DISPLAY_EXTRABOLD;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.colors;
    var24 = var16.TEXT_SUBTLE;
    var16 = {};
    var16.uppercase = var21;
    var26 = undefined;
    var25 = var19;
    var23 = var12;
    var22 = var16;
    var24 = var26[var20](var25, var24, var23, var22, var21);
    var25 = var9;
    var16 = copyDataProperties(var25, var24);
    var3.categoryText = var9;
    var9 = {
        'paddingTop': 36,
        'paddingBottom': 8
    };
    var3.categoryView = var9;
    var9 = {};
    var9.paddingTop = var15;
    var3.sortingCategoryView = var9;
    var9 = {};
    var15 = var5[var15];
    var16 = var11.bind(var0)(var15);
    var15 = var14.PRIMARY_SEMIBOLD;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_SUBTLE;
    var24 = var16.bind(var0)(var15, var14, var17);
    var25 = var9;
    var14 = copyDataProperties(var25, var24);
    var3.edit = var9;
    var9 = {};
    var13 = var13.hairlineWidth;
    var13 = -var13;
    var9.marginTop = var13;
    var3.row = var9;
    var9 = {};
    var9.paddingVertical = var12;
    var3.formRowStyle = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.GREEN_360;
    var9.backgroundColor = var10;
    var10 = 0.3;
    var9.opacity = var10;
    var3.dropHighlight = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 16,
        'right': 0,
        'left': 0,
        'flexDirection': 'row',
        'justifyContent': 'center'
    };
    var3.floatingActionButtonContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot23 = var3;
    var7 = var6.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: Category, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot4;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot27;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot5;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            _fun115456: for (var _fun115456_ip = 0;;) switch (_fun115456_ip) {
                case 0:
                    var4 = this;
                    var1 = _closure1_slot23;
                    var0 = var4.context;
                    var3 = undefined;
                    var18 = var1.bind(var3)(var0);
                    var0 = var4.props;
                    var15 = var0.category;
                    var _closure3_slot0 = var15;
                    var12 = var0.onPress;
                    var _closure3_slot1 = var12;
                    var19 = var0.sortingEnabled;
                    var14 = var0.editStyle;
                    var16 = var0.actionIconStyle;
                    var9 = null;
                    var11 = null;
                    if (!var19) {
                        _fun115456_ip = 84;
                        continue _fun115456
                    }
                case 73:
                    var0 = var4.props;
                    var11 = var0.sortHandlers;
                case 84:
                    var2 = _closure1_slot21;
                    var1 = _closure1_slot11;
                    var0 = {};
                    var5 = 'button';
                    var0.accessibilityRole = var5;
                    var8 = {};
                    var5 = 'activate';
                    var8.name = var5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 18;
                    var17 = var7[var5];
                    var17 = var6.bind(var3)(var17);
                    var20 = var17.intl;
                    var17 = var20.string;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.bt75uw;
                    var5 = var17.bind(var20)(var5);
                    var8.label = var5;
                    var5 = new Array(1);
                    var5[0] = var8;
                    var0.accessibilityActions = var5;
                    var5 = function(arg0) { // Original name: onAccessibilityAction, environment: var13
                        _fun115457: for (var _fun115457_ip = 0;;) switch (_fun115457_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var2 = var0.actionName;
                                var4 = undefined;
                                var1 = 'activate';
                                var0 = undefined;
                                if (!(var1 === var2)) {
                                    _fun115457_ip = 66;
                                    continue _fun115457
                                }
                            case 27:
                                var3 = _closure3_slot1;
                                var1 = null;
                                var3 = var1 == var3;
                                var1 = undefined;
                                if (var3) {
                                    _fun115457_ip = 63;
                                    continue _fun115457
                                }
                            case 45:
                                var3 = _closure3_slot1;
                                var2 = _closure3_slot0;
                                var2 = var2.id;
                                var1 = var3.bind(var4)(var2);
                            case 63:
                                var0 = var1;
                            case 66:
                                return var0;
                        }
                    };
                    var0.onAccessibilityAction = var5;
                    var5 = 19;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.isThemeDark;
                    var4 = var4.context;
                    var4 = var4.theme;
                    var5 = var5.bind(var6)(var4);
                    var6 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var4 = 20;
                    var4 = var17[var4];
                    var8 = var6.bind(var3)(var4);
                    var7 = var8.hex2rgb;
                    var6 = _closure1_slot1;
                    var4 = 17;
                    var4 = var17[var4];
                    var4 = var6.bind(var3)(var4);
                    var4 = var4.unsafe_rawColors;
                    if (var5) {
                        _fun115456_ip = 304;
                        continue _fun115456
                    }
                case 280:
                    var6 = var4.PRIMARY_200;
                    var5 = 0.6;
                    var5 = var7.bind(var8)(var6, var5);
                    _fun115456_ip = 326;
                    continue _fun115456;
                case 304:
                    var6 = var4.PRIMARY_700;
                    var4 = 0.6;
                    var5 = var7.bind(var8)(var6, var4);
                case 326:
                    var6 = var9 != var5;
                    var4 = undefined;
                    if (!var6) {
                        _fun115456_ip = 338;
                        continue _fun115456
                    }
                case 335:
                    var4 = var5;
                case 338:
                    var0.underlayColor = var4;
                    var22 = var0;
                    var21 = var11;
                    var4 = copyDataProperties(var22, var21);
                    var6 = _closure1_slot21;
                    var5 = _closure1_slot10;
                    var4 = {};
                    var8 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var7 = 21;
                    var7 = var17[var7];
                    var7 = var8.bind(var3)(var7);
                    var8 = var7.FormTitle;
                    var7 = {};
                    var15 = var15.name;
                    var7.title = var15;
                    var15 = 1;
                    var7.numberOfLines = var15;
                    var15 = var18.categoryText;
                    var7.textStyle = var15;
                    var17 = var18.categoryView;
                    var15 = new Array(2);
                    var15[0] = var17;
                    var17 = null;
                    if (!var19) {
                        _fun115456_ip = 444;
                        continue _fun115456
                    }
                case 438:
                    var17 = var18.sortingCategoryView;
                case 444:
                    var15[1] = var17;
                    var7.viewStyle = var15;
                    if (!(var9 == var12)) {
                        _fun115456_ip = 520;
                        continue _fun115456
                    }
                case 457:
                    var11 = var9 != var11;
                    var9 = null;
                    if (!var11) {
                        _fun115456_ip = 518;
                        continue _fun115456
                    }
                case 466:
                    var15 = _closure1_slot21;
                    var18 = _closure1_slot1;
                    var19 = _closure1_slot3;
                    var11 = 22;
                    var11 = var19[var11];
                    var12 = var18.bind(var3)(var11);
                    var11 = {};
                    var17 = 23;
                    var17 = var19[var17];
                    var17 = var18.bind(var3)(var17);
                    var11.source = var17;
                    var11.style = var16;
                    var9 = var15.bind(var3)(var12, var11);
                case 518:
                    _fun115456_ip = 551;
                    continue _fun115456;
                case 520:
                    var12 = _closure1_slot21;
                    var11 = _closure1_slot25;
                    var10 = {};
                    var10.style = var14;
                    var13 = function() { // Original name: onPress, environment: var13
                        var2 = _closure3_slot1;
                        var0 = _closure3_slot0;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var10.onPress = var13;
                    var9 = var12.bind(var3)(var11, var10);
                case 551:
                    var7.icon = var9;
                    var7 = var6.bind(var3)(var8, var7);
                    var4.children = var7;
                    var5 = var6.bind(var3)(var5, var4);
                    var4 = 'children';
                    var0[var4] = var5;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var7);
    var _closure1_slot24 = var8;
    var3 = 24;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ThemeContext;
    var8.contextType = var7;
    var8 = var6.PureComponent;
    var7 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: SectionEditAction, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot4;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot27;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot5;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            var0 = this;
            var0 = var0.props;
            var7 = var0.style;
            var5 = var0.onPress;
            var3 = _closure1_slot21;
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var0 = 27;
            var0 = var11[var0];
            var2 = undefined;
            var0 = var10.bind(var2)(var0);
            var1 = var0.PressableOpacity;
            var0 = {};
            var6 = 'button';
            var0.accessibilityRole = var6;
            var0.onPress = var5;
            var6 = _closure1_slot21;
            var4 = 28;
            var4 = var11[var4];
            var4 = var10.bind(var2)(var4);
            var5 = var4.LegacyText;
            var4 = {};
            var4.style = var7;
            var7 = 18;
            var8 = var11[var7];
            var8 = var10.bind(var2)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var2)(var7);
            var7 = var7.t;
            var7 = var7.bt75uw;
            var7 = var8.bind(var9)(var7);
            var4.children = var7;
            var4 = var6.bind(var2)(var5, var4);
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var7.bind(var0)(var8);
    var _closure1_slot25 = var8;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ThemeContext;
    var8.contextType = var7;
    var7 = var6.PureComponent;
    var6 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: GuildSettingsModalChannels, environment: var5
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var2 = _closure1_slot4;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot27;
            var0 = new Array(0);
            var10 = var0;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var0 = var2.bind(var3)(var5, var4, var0);
            var _closure3_slot0 = var0;
            var2 = {};
            var3 = null;
            var2.hovering = var3;
            var0.state = var2;
            var2 = function(arg0, arg1, arg2) { // Environment: var1
                _fun115464: for (var _fun115464_ip = 0;;) switch (_fun115464_ip) {
                    case 0:
                        var7 = arg1;
                        var8 = arg2;
                        var3 = _closure1_slot23;
                        var0 = _closure3_slot0;
                        var1 = var0.context;
                        var5 = undefined;
                        var6 = var3.bind(var5)(var1);
                        var0 = var0.props;
                        var1 = var0.sortingType;
                        var3 = var0.order;
                        var12 = var0.channelList;
                        var4 = var0.guild;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun115464_ip = 266;
                            continue _fun115464
                        }
                    case 69:
                        if (!(var0 != var3)) {
                            _fun115464_ip = 266;
                            continue _fun115464
                        }
                    case 76:
                        if (!(var0 != var12)) {
                            _fun115464_ip = 266;
                            continue _fun115464
                        }
                    case 83:
                        var9 = _closure1_slot17;
                        var1 = var9.getLocalChannel;
                        var11 = var1.bind(var9)(var7);
                        var1 = var0 != var8;
                        var10 = null;
                        if (!var1) {
                            _fun115464_ip = 122;
                            continue _fun115464
                        }
                    case 107:
                        var9 = _closure1_slot17;
                        var1 = var9.getLocalChannel;
                        var10 = var1.bind(var9)(var8);
                    case 122:
                        var1 = var0 != var8;
                        var9 = -1;
                        if (!var1) {
                            _fun115464_ip = 146;
                            continue _fun115464
                        }
                    case 135:
                        var1 = var3.indexOf;
                        var9 = var1.bind(var3)(var8);
                    case 146:
                        var1 = var3.indexOf;
                        var15 = var1.bind(var3)(var7);
                        var3 = _closure1_slot30;
                        var7 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var1 = 34;
                        var1 = var13[var1];
                        var7 = var7.bind(var5)(var1);
                        var1 = var7.getDropData;
                        var19 = var7;
                        var18 = var10;
                        var17 = var9;
                        var16 = var11;
                        var14 = var12;
                        var1 = var19[var1](var18, var17, var16, var15, var14, var13);
                        var3 = var3.bind(var5)(var1, var4);
                        var1 = null;
                        if (!var3) {
                            _fun115464_ip = 264;
                            continue _fun115464
                        }
                    case 217:
                        var4 = _closure1_slot21;
                        var3 = _closure1_slot10;
                        var2 = {};
                        var7 = var6.dropHighlight;
                        var6 = new Array(2);
                        var6[0] = var7;
                        var7 = {};
                        var8 = arg0;
                        var7.height = var8;
                        var6[1] = var7;
                        var2.style = var6;
                        var1 = var4.bind(var5)(var3, var2);
                    case 264:
                        return var1;
                    case 266:
                        return var0;
                }
            };
            var0.renderActiveDivider = var2;
            var2 = function(arg0) { // Environment: var1
                _fun115465: for (var _fun115465_ip = 0;;) switch (_fun115465_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.section;
                        var0 = var0.category;
                        var2 = var0.id;
                        var3 = _closure1_slot23;
                        var0 = _closure3_slot0;
                        var1 = var0.context;
                        var4 = undefined;
                        var8 = var3.bind(var4)(var1);
                        var0 = var0.props;
                        var7 = var0.sortingType;
                        var11 = var0.channels;
                        var5 = null;
                        var0 = 'null';
                        var9 = null;
                        if (!(var0 !== var2)) {
                            _fun115465_ip = 89;
                            continue _fun115465
                        }
                    case 74:
                        var1 = _closure1_slot17;
                        var0 = var1.getLocalChannel;
                        var9 = var0.bind(var1)(var2);
                    case 89:
                        if (!(var5 == var9)) {
                            _fun115465_ip = 158;
                            continue _fun115465
                        }
                    case 93:
                        var2 = _closure1_slot21;
                        var1 = _closure1_slot10;
                        var0 = {};
                        var12 = var5 == var7;
                        var3 = null;
                        if (!var12) {
                            _fun115465_ip = 146;
                            continue _fun115465
                        }
                    case 112:
                        var11 = var11.null;
                        var12 = var11.length;
                        var11 = 0;
                        var11 = var12 > var11;
                        var3 = null;
                        if (!var11) {
                            _fun115465_ip = 146;
                            continue _fun115465
                        }
                    case 134:
                        var11 = {};
                        var12 = 36;
                        var11.marginTop = var12;
                        var3 = var11;
                    case 146:
                        var0.style = var3;
                        var0 = var2.bind(var4)(var1, var0);
                        _fun115465_ip = 245;
                        continue _fun115465;
                    case 158:
                        var3 = _closure1_slot21;
                        var2 = _closure1_slot24;
                        var1 = {};
                        var1.category = var9;
                        var9 = var5 != var7;
                        if (!var9) {
                            _fun115465_ip = 200;
                            continue _fun115465
                        }
                    case 180:
                        var11 = var7.has;
                        var10 = _closure1_slot18;
                        var10 = var10.GUILD_CATEGORY;
                        var9 = var11.bind(var7)(var10);
                    case 200:
                        var1.sortingEnabled = var9;
                        var8 = var8.edit;
                        var1.editStyle = var8;
                        var7 = var5 == var7;
                        var5 = undefined;
                        if (!var7) {
                            _fun115465_ip = 235;
                            continue _fun115465
                        }
                    case 225:
                        var6 = _closure3_slot0;
                        var5 = var6.handleChannelPress;
                    case 235:
                        var1.onPress = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 245:
                        return var0;
                }
            };
            var0.renderSectionHeader = var2;
            var2 = function(arg0) { // Environment: var1
                _fun115466: for (var _fun115466_ip = 0;;) switch (_fun115466_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.item;
                        var9 = var0.channel;
                        var8 = var0.sortingType;
                        var2 = _closure1_slot23;
                        var0 = _closure3_slot0;
                        var0 = var0.context;
                        var4 = undefined;
                        var5 = var2.bind(var4)(var0);
                        var7 = null;
                        if (!(var7 == var9)) {
                            _fun115466_ip = 69;
                            continue _fun115466
                        }
                    case 51:
                        var3 = _closure1_slot21;
                        var2 = _closure1_slot10;
                        var0 = {};
                        var0 = var3.bind(var4)(var2, var0);
                        _fun115466_ip = 122;
                        continue _fun115466;
                    case 69:
                        var3 = _closure1_slot21;
                        var2 = _closure1_slot29;
                        var1 = {};
                        var1.channel = var9;
                        var7 = var7 != var8;
                        var1.sortingEnabled = var7;
                        var6 = _closure3_slot0;
                        var6 = var6.handleChannelPress;
                        var1.onPress = var6;
                        var5 = var5.row;
                        var1.style = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 122:
                        return var0;
                }
            };
            var0.renderItem = var2;
            var2 = function(arg0) { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.setState;
                var0 = {};
                var3 = arg0;
                var0.hovering = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var0.handleHoverChange = var2;
            var2 = function() { // Environment: var1
                _fun115468: for (var _fun115468_ip = 0;;) switch (_fun115468_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var6 = var0.guild;
                        var4 = new Array(0);
                        var2 = _closure1_slot14;
                        var1 = var2.can;
                        var0 = _closure1_slot19;
                        var0 = var0.MANAGE_CHANNELS;
                        var0 = var1.bind(var2)(var0, var6);
                        if (!var0) {
                            _fun115468_ip = 159;
                            continue _fun115468
                        }
                    case 55:
                        var1 = var4.push;
                        var0 = {};
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var2 = 18;
                        var6 = var8[var2];
                        var7 = undefined;
                        var6 = var10.bind(var7)(var6);
                        var9 = var6.intl;
                        var6 = var9.string;
                        var2 = var8[var2];
                        var2 = var10.bind(var7)(var2);
                        var2 = var2.t;
                        var2 = var2.ffgJrs;
                        var2 = var6.bind(var9)(var2);
                        var0.label = var2;
                        var6 = _closure1_slot1;
                        var2 = 35;
                        var2 = var8[var2];
                        var2 = var6.bind(var7)(var2);
                        var0.icon = var2;
                        var2 = function() { // Original name: onPress, environment: var3
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 36;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.startReordering;
                            var1 = _closure1_slot18;
                            var1 = var1.GUILD_CATEGORY;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0.onPress = var2;
                        var0 = var1.bind(var4)(var0);
                    case 159:
                        var2 = var4.push;
                        var1 = {};
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var6 = 18;
                        var7 = var10[var6];
                        var0 = undefined;
                        var7 = var9.bind(var0)(var7);
                        var11 = var7.intl;
                        var8 = var11.string;
                        var7 = var10[var6];
                        var7 = var9.bind(var0)(var7);
                        var7 = var7.t;
                        var7 = var7.nIfr0Y;
                        var7 = var8.bind(var11)(var7);
                        var1.label = var7;
                        var7 = _closure1_slot1;
                        var5 = 37;
                        var5 = var10[var5];
                        var5 = var7.bind(var0)(var5);
                        var1.icon = var5;
                        var5 = function() { // Original name: onPress, environment: var3
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 36;
                            var2 = var2[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.startReordering;
                            var2 = _closure1_slot18;
                            var10 = var2.GUILD_TEXT;
                            var2 = _closure1_slot18;
                            var9 = var2.GUILD_ANNOUNCEMENT;
                            var2 = _closure1_slot18;
                            var8 = var2.GUILD_FORUM;
                            var1 = _closure1_slot18;
                            var7 = var1.GUILD_MEDIA;
                            var11 = var6;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var1.onPress = var5;
                        var1 = var2.bind(var4)(var1);
                        var2 = var4.push;
                        var1 = {};
                        var5 = var10[var6];
                        var5 = var9.bind(var0)(var5);
                        var11 = var5.intl;
                        var8 = var11.string;
                        var5 = var10[var6];
                        var5 = var9.bind(var0)(var5);
                        var5 = var5.t;
                        var5 = var5.CYnO4s;
                        var5 = var8.bind(var11)(var5);
                        var1.label = var5;
                        var5 = 38;
                        var5 = var10[var5];
                        var5 = var7.bind(var0)(var5);
                        var1.icon = var5;
                        var3 = function() { // Original name: onPress, environment: var3
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 36;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.startReordering;
                            var2 = _closure1_slot18;
                            var2 = var2.GUILD_VOICE;
                            var1 = _closure1_slot18;
                            var1 = var1.GUILD_STAGE_VOICE;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var1.onPress = var3;
                        var1 = var2.bind(var4)(var1);
                        var1 = 31;
                        var1 = var10[var1];
                        var3 = var9.bind(var0)(var1);
                        var2 = var3.showSimpleActionSheet;
                        var1 = {};
                        var5 = 'GuildSettingsChannelsSort';
                        var1.key = var5;
                        var5 = {};
                        var7 = var10[var6];
                        var7 = var9.bind(var0)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var0)(var6);
                        var6 = var6.t;
                        var6 = var6["0dOFq+"];
                        var6 = var7.bind(var8)(var6);
                        var5.title = var6;
                        var1.header = var5;
                        var1.options = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var0.handleSortStart = var2;
            var1 = function(arg0) { // Environment: var1
                _fun115472: for (var _fun115472_ip = 0;;) switch (_fun115472_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var7 = var0.order;
                        var8 = var0.channels;
                        var21 = var0.channelList;
                        var3 = var0.guild;
                        var _closure4_slot0 = var3;
                        var4 = _closure1_slot17;
                        var2 = var4.getLocalChannel;
                        var0 = var1.from;
                        var0 = var7[var0];
                        var20 = var2.bind(var4)(var0);
                        var _closure4_slot1 = var20;
                        var2 = var4.getLocalChannel;
                        var0 = var1.to;
                        var0 = var7[var0];
                        var2 = var2.bind(var4)(var0);
                        var9 = _closure1_slot0;
                        var0 = _closure1_slot3;
                        var4 = 34;
                        var7 = var0[var4];
                        var0 = undefined;
                        var10 = var9.bind(var0)(var7);
                        var9 = var10.getDropData;
                        var24 = var1.from;
                        var22 = var1.to;
                        var26 = var10;
                        var25 = var20;
                        var23 = var2;
                        var1 = var26[var9](var25, var24, var23, var22, var21, var20);
                        var12 = null;
                        if (!(var12 != var1)) {
                            _fun115472_ip = 732;
                            continue _fun115472
                        }
                    case 155:
                        if (!(var2 !== var20)) {
                            _fun115472_ip = 732;
                            continue _fun115472
                        }
                    case 162:
                        if (!(var12 != var20)) {
                            _fun115472_ip = 732;
                            continue _fun115472
                        }
                    case 169:
                        if (!(var12 != var2)) {
                            _fun115472_ip = 732;
                            continue _fun115472
                        }
                    case 176:
                        var2 = _closure1_slot30;
                        var2 = var2.bind(var0)(var1, var3);
                        if (!var2) {
                            _fun115472_ip = 732;
                            continue _fun115472
                        }
                    case 192:
                        var10 = var1.referenceId;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var2 = var2[var4];
                        var7 = var3.bind(var0)(var2);
                        var4 = var7.getDnDUpdates;
                        var2 = var12 != var10;
                        var3 = null;
                        if (!var2) {
                            _fun115472_ip = 245;
                            continue _fun115472
                        }
                    case 230:
                        var9 = _closure1_slot17;
                        var2 = var9.getLocalChannel;
                        var3 = var2.bind(var9)(var10);
                    case 245:
                        var23 = var1.parentId;
                        var26 = var7;
                        var25 = var20;
                        var24 = var3;
                        var22 = var8;
                        var4 = var26[var4](var25, var24, var23, var22, var21);
                        var3 = var4.filter;
                        var2 = function(arg0) { // Environment: var5
                            _fun115473: for (var _fun115473_ip = 0;;) switch (_fun115473_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0.id;
                                    var2 = _closure1_slot12;
                                    var0 = var2.getChannel;
                                    var2 = var0.bind(var2)(var3);
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun115473_ip = 137;
                                        continue _fun115473
                                    }
                                case 31:
                                    var5 = _closure1_slot12;
                                    var4 = var5.getChannel;
                                    var3 = var2.parent_id;
                                    var4 = var4.bind(var5)(var3);
                                    var3 = var2.type;
                                    var2 = _closure1_slot18;
                                    var2 = var2.GUILD_CATEGORY;
                                    if (!(var3 !== var2)) {
                                        _fun115473_ip = 102;
                                        continue _fun115473
                                    }
                                case 70:
                                    if (!(var0 != var4)) {
                                        _fun115473_ip = 102;
                                        continue _fun115473
                                    }
                                case 74:
                                    var3 = _closure1_slot14;
                                    var2 = var3.can;
                                    var0 = _closure1_slot19;
                                    var0 = var0.MANAGE_CHANNELS;
                                    var0 = var2.bind(var3)(var0, var4);
                                    _fun115473_ip = 135;
                                    continue _fun115473;
                                case 102:
                                    var4 = _closure1_slot14;
                                    var3 = var4.can;
                                    var1 = _closure1_slot19;
                                    var2 = var1.MANAGE_CHANNELS;
                                    var1 = _closure4_slot0;
                                    var0 = var3.bind(var4)(var2, var1);
                                case 135:
                                    return var0;
                                case 137:
                                    var0 = false;
                                    return var0;
                            }
                        };
                        var3 = var3.bind(var4)(var2);
                        var _closure4_slot3 = var3;
                        var2 = var20.parent_id;
                        var1 = var1.parentId;
                        if (!(var2 !== var1)) {
                            _fun115472_ip = 321;
                            continue _fun115472
                        }
                    case 304:
                        var2 = var3.find;
                        var1 = function(arg0) { // Environment: var5
                            _fun115474: for (var _fun115474_ip = 0;;) switch (_fun115474_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = var1.id;
                                    var2 = _closure4_slot1;
                                    var2 = var2.id;
                                    if (!(var3 === var2)) {
                                        _fun115474_ip = 240;
                                        continue _fun115474
                                    }
                                case 27:
                                    var5 = _closure1_slot12;
                                    var4 = var5.getChannel;
                                    var2 = var1.parent_id;
                                    var11 = var4.bind(var5)(var2);
                                    var5 = null;
                                    if (!(var5 != var11)) {
                                        _fun115474_ip = 118;
                                        continue _fun115474
                                    }
                                case 56:
                                    var7 = _closure1_slot14;
                                    var6 = var7.can;
                                    var2 = _closure1_slot19;
                                    var4 = var2.MANAGE_ROLES;
                                    var2 = _closure4_slot1;
                                    var2 = var6.bind(var7)(var4, var2);
                                    if (!var2) {
                                        _fun115474_ip = 118;
                                        continue _fun115474
                                    }
                                case 89:
                                    var6 = _closure1_slot14;
                                    var4 = var6.can;
                                    var2 = _closure1_slot19;
                                    var2 = var2.MANAGE_ROLES;
                                    var2 = var4.bind(var6)(var2, var11);
                                    if (var2) {
                                        _fun115474_ip = 122;
                                        continue _fun115474
                                    }
                                case 118:
                                    var2 = true;
                                    return var2;
                                case 122:
                                    var8 = _closure1_slot2;
                                    var9 = _closure1_slot3;
                                    var6 = 39;
                                    var2 = var9[var6];
                                    var7 = undefined;
                                    var10 = var8.bind(var7)(var2);
                                    var4 = var10.areChannelsLocked;
                                    var2 = _closure4_slot1;
                                    var4 = var4.bind(var10)(var2, var11);
                                    var6 = var9[var6];
                                    var7 = var8.bind(var7)(var6);
                                    var6 = var7.areChannelsLocked;
                                    var9 = _closure1_slot12;
                                    var8 = var9.getChannel;
                                    var3 = var2.parent_id;
                                    var3 = var8.bind(var9)(var3);
                                    var3 = var6.bind(var7)(var2, var3);
                                    var2 = var2.parent_id;
                                    var2 = var5 == var2;
                                    if (!var2) {
                                        _fun115474_ip = 217;
                                        continue _fun115474
                                    }
                                case 214:
                                    var2 = !var4;
                                case 217:
                                    if (var2) {
                                        _fun115474_ip = 229;
                                        continue _fun115474
                                    }
                                case 220:
                                    if (!var3) {
                                        _fun115474_ip = 226;
                                        continue _fun115474
                                    }
                                case 223:
                                    var3 = !var4;
                                case 226:
                                    var2 = var3;
                                case 229:
                                    if (!var2) {
                                        _fun115474_ip = 236;
                                        continue _fun115474
                                    }
                                case 232:
                                    var _closure4_slot2 = var1;
                                case 236:
                                    var0 = true;
                                    return var0;
                                case 240:
                                    var0 = false;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                    case 321:
                        var4 = function() { // Original name: saveUpdates, environment: var5
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var0 = 36;
                            var1 = var4[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var1);
                            var5 = var6.localChannelUpdate;
                            var2 = _closure4_slot3;
                            var2 = var5.bind(var6)(var2);
                            var2 = 40;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.batchChannelUpdate;
                            var2 = _closure4_slot1;
                            var2 = var2.guild_id;
                            var1 = _closure4_slot3;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var _closure4_slot4 = var4;
                        var1 = _closure4_slot2;
                        if (!(var12 == var1)) {
                            _fun115472_ip = 349;
                            continue _fun115472
                        }
                    case 340:
                        var1 = var4.bind(var0)();
                        _fun115472_ip = 732;
                        continue _fun115472;
                    case 349:
                        var3 = _closure1_slot12;
                        var2 = var3.getChannel;
                        var1 = _closure4_slot2;
                        var1 = var1.parent_id;
                        var17 = var2.bind(var3)(var1);
                        var2 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var1 = 41;
                        var1 = var13[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var14 = _closure1_slot0;
                        var10 = 18;
                        var7 = var13[var10];
                        var7 = var14.bind(var0)(var7);
                        var9 = var7.intl;
                        var8 = var9.string;
                        var7 = var13[var10];
                        var7 = var14.bind(var0)(var7);
                        var7 = var7.t;
                        var7 = var7.YWMtRe;
                        var7 = var8.bind(var9)(var7);
                        var1.title = var7;
                        var7 = var13[var10];
                        var7 = var14.bind(var0)(var7);
                        var11 = var7.intl;
                        var9 = var11.format;
                        var7 = var13[var10];
                        var7 = var14.bind(var0)(var7);
                        var7 = var7.t;
                        var8 = var7["iKW+jY"];
                        var7 = {};
                        var15 = 42;
                        var13 = var13[var15];
                        var19 = var14.bind(var0)(var13);
                        var18 = var19.computeChannelName;
                        var24 = _closure1_slot16;
                        var23 = _closure1_slot15;
                        var22 = true;
                        var26 = var19;
                        var25 = var20;
                        var13 = var26[var18](var25, var24, var23, var22, var21);
                        var7.channelName = var13;
                        var13 = var12 != var17;
                        var12 = '';
                        if (!var13) {
                            _fun115472_ip = 589;
                            continue _fun115472
                        }
                    case 551:
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var13 = var13[var15];
                        var16 = var14.bind(var0)(var13);
                        var15 = var16.computeChannelName;
                        var14 = _closure1_slot16;
                        var13 = _closure1_slot15;
                        var12 = var15.bind(var16)(var17, var14, var13);
                    case 589:
                        var7.categoryName = var12;
                        var7 = var9.bind(var11)(var8, var7);
                        var1.body = var7;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var7 = var6[var10];
                        var7 = var9.bind(var0)(var7);
                        var11 = var7.intl;
                        var8 = var11.string;
                        var7 = var6[var10];
                        var7 = var9.bind(var0)(var7);
                        var7 = var7.t;
                        var7 = var7.eW8Gy4;
                        var7 = var8.bind(var11)(var7);
                        var1.confirmText = var7;
                        var7 = var6[var10];
                        var7 = var9.bind(var0)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var6[var10];
                        var6 = var9.bind(var0)(var6);
                        var6 = var6.t;
                        var6 = var6.s4uM3b;
                        var6 = var7.bind(var8)(var6);
                        var1.cancelText = var6;
                        var5 = function() { // Original name: onConfirm, environment: var5
                            var2 = _closure4_slot2;
                            var1 = true;
                            var2.lock_permissions = var1;
                            var1 = _closure4_slot4;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var1.onConfirm = var5;
                        var1.onCancel = var4;
                        var1 = var2.bind(var3)(var1);
                    case 732:
                        return var0;
                }
            };
            var0.handleDrop = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var1 = this;
            var0 = var1.updateNavigation;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.updateNavigation;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'updateNavigation';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun115479: for (var _fun115479_ip = 0;;) switch (_fun115479_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot23;
                    var3 = var1.context;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var _closure3_slot1 = var3;
                    var1 = var1.props;
                    var6 = var1.sortingType;
                    var10 = var1.order;
                    var3 = var1.navigation;
                    var12 = var1.guild;
                    var7 = var1.channels;
                    var11 = var1.user;
                    var4 = null;
                    var1 = var4 != var2;
                    if (!var1) {
                        _fun115479_ip = 93;
                        continue _fun115479
                    }
                case 83:
                    var9 = var2.sortingType;
                    var1 = var6 === var9;
                case 93:
                    if (!var1) {
                        _fun115479_ip = 106;
                        continue _fun115479
                    }
                case 96:
                    var9 = var2.order;
                    var1 = var10 === var9;
                case 106:
                    if (!var1) {
                        _fun115479_ip = 118;
                        continue _fun115479
                    }
                case 109:
                    var9 = var2.guild;
                    var1 = var12 === var9;
                case 118:
                    if (!var1) {
                        _fun115479_ip = 131;
                        continue _fun115479
                    }
                case 121:
                    var2 = var2.channels;
                    var1 = var7 === var2;
                case 131:
                    if (var1) {
                        _fun115479_ip = 309;
                        continue _fun115479
                    }
                case 137:
                    var2 = var3.setOptions;
                    var1 = {};
                    var10 = var4 != var6;
                    var9 = undefined;
                    if (!var10) {
                        _fun115479_ip = 161;
                        continue _fun115479
                    }
                case 154:
                    var9 = function() { // Environment: var8
                        var0 = null;
                        return var0;
                    };
                case 161:
                    var1.headerLeft = var9;
                    if (!(var4 == var6)) {
                        _fun115479_ip = 223;
                        continue _fun115479
                    }
                case 170:
                    var10 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var9 = 39;
                    var9 = var13[var9];
                    var10 = var10.bind(var0)(var9);
                    var9 = var10.canManageACategory;
                    var7 = var7._categories;
                    var9 = var9.bind(var10)(var11, var12, var7);
                    var7 = undefined;
                    if (!var9) {
                        _fun115479_ip = 221;
                        continue _fun115479
                    }
                case 214:
                    var7 = function() { // Environment: var8
                        var3 = _closure1_slot21;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var0 = 43;
                        var0 = var9[var0];
                        var2 = undefined;
                        var0 = var8.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var5 = _closure3_slot1;
                        var5 = var5.headerRight;
                        var0.textStyle = var5;
                        var5 = 18;
                        var6 = var9[var5];
                        var6 = var8.bind(var2)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var2)(var5);
                        var5 = var5.t;
                        var5 = var5["0dOFq+"];
                        var5 = var6.bind(var7)(var5);
                        var0.text = var5;
                        var4 = _closure3_slot0;
                        var4 = var4.handleSortStart;
                        var0.onPress = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 221:
                    _fun115479_ip = 230;
                    continue _fun115479;
                case 223:
                    var7 = function() { // Environment: var8
                        var3 = _closure1_slot21;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var0 = 43;
                        var0 = var9[var0];
                        var2 = undefined;
                        var0 = var8.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var5 = _closure3_slot1;
                        var5 = var5.headerRight;
                        var0.textStyle = var5;
                        var5 = 18;
                        var6 = var9[var5];
                        var6 = var8.bind(var2)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var2)(var5);
                        var5 = var5.t;
                        var5 = var5.i4jeWR;
                        var5 = var6.bind(var7)(var5);
                        var0.text = var5;
                        var4 = _closure3_slot0;
                        var4 = var4.handleSortStop;
                        var0.onPress = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 230:
                    var1.headerRight = var7;
                    var6 = var4 != var6;
                    var4 = undefined;
                    if (!var6) {
                        _fun115479_ip = 299;
                        continue _fun115479
                    }
                case 244:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 18;
                    var6 = var9[var5];
                    var6 = var8.bind(var0)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5.OGiMXJ;
                    var4 = var6.bind(var7)(var5);
                case 299:
                    var1.headerTitle = var4;
                    var1 = var2.bind(var3)(var1);
                case 309:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun115483: for (var _fun115483_ip = 0;;) switch (_fun115483_ip) {
                case 0:
                    var11 = this;
                    var1 = _closure1_slot23;
                    var0 = var11.context;
                    var3 = undefined;
                    var4 = var1.bind(var3)(var0);
                    var0 = var11.props;
                    var2 = var0.channels;
                    var14 = var0.order;
                    var7 = var0.sortingType;
                    var10 = var0.guild;
                    var0 = var11.state;
                    var1 = var0.hovering;
                    var0 = function(arg0, arg1, arg2) { // Original name: getListViewData, environment: var0
                        _fun115484: for (var _fun115484_ip = 0;;) switch (_fun115484_ip) {
                            case 0:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var0 = arg1;
                                var _closure4_slot1 = var0;
                                var0 = arg2;
                                var _closure4_slot2 = var0;
                                var0 = new Array(0);
                                var _closure4_slot3 = var0;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun115484_ip = 72;
                                    continue _fun115484
                                }
                            case 37:
                                var3 = -1;
                                var _closure4_slot4 = var3;
                                var3 = var2._categories;
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    _fun115485: for (var _fun115485_ip = 0;;) switch (_fun115485_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var4 = var0.channel;
                                            var0 = undefined;
                                            var _closure5_slot0 = var0;
                                            var3 = var4.id;
                                            var1 = 'null';
                                            if (!(var1 !== var3)) {
                                                _fun115485_ip = 61;
                                                continue _fun115485
                                            }
                                        case 29:
                                            var5 = _closure1_slot14;
                                            var3 = var5.can;
                                            var1 = _closure1_slot19;
                                            var1 = var1.VIEW_CHANNEL;
                                            var1 = var3.bind(var5)(var1, var4);
                                            if (!var1) {
                                                _fun115485_ip = 159;
                                                continue _fun115485
                                            }
                                        case 61:
                                            var5 = _closure4_slot4;
                                            var3 = 1;
                                            var3 = var5 + var3;
                                            _closure4_slot4 = var3;
                                            var3 = {};
                                            var5 = new Array(0);
                                            var3.data = var5;
                                            var3.category = var4;
                                            var5 = var4.id;
                                            var3.key = var5;
                                            var5 = _closure4_slot4;
                                            var3.index = var5;
                                            _closure5_slot0 = var3;
                                            var5 = _closure4_slot0;
                                            var4 = var4.id;
                                            var5 = var5[var4];
                                            var4 = var5.forEach;
                                            var2 = function(arg0) { // Environment: var2
                                                _fun115486: for (var _fun115486_ip = 0;;) switch (_fun115486_ip) {
                                                    case 0:
                                                        var0 = arg0;
                                                        var4 = var0.channel;
                                                        var1 = _closure4_slot1;
                                                        var0 = null;
                                                        var0 = var0 == var1;
                                                        if (var0) {
                                                            _fun115486_ip = 43;
                                                            continue _fun115486
                                                        }
                                                    case 24:
                                                        var5 = _closure4_slot1;
                                                        var2 = var5.has;
                                                        var1 = var4.type;
                                                        var0 = var2.bind(var5)(var1);
                                                    case 43:
                                                        if (!var0) {
                                                            _fun115486_ip = 131;
                                                            continue _fun115486
                                                        }
                                                    case 46:
                                                        var0 = _closure4_slot4;
                                                        var0 = var0 + 1;
                                                        _closure4_slot4 = var0;
                                                        var0 = _closure5_slot0;
                                                        var2 = var0.data;
                                                        var1 = var2.push;
                                                        var0 = {};
                                                        var5 = var4.id;
                                                        var0.key = var5;
                                                        var0.channel = var4;
                                                        var5 = _closure4_slot1;
                                                        var0.sortingType = var5;
                                                        var5 = _closure4_slot2;
                                                        var4 = var4.id;
                                                        var4 = var5 === var4;
                                                        var0.isHovered = var4;
                                                        var3 = _closure4_slot4;
                                                        var0.index = var3;
                                                        var0 = var1.bind(var2)(var0);
                                                    case 131:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var2 = var4.bind(var5)(var2);
                                            var2 = _closure4_slot3;
                                            var1 = var2.push;
                                            var1 = var1.bind(var2)(var3);
                                        case 159:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            case 72:
                                return var0;
                        }
                    };
                    var6 = var0.bind(var3)(var2, var7, var1);
                    var2 = _closure1_slot22;
                    var1 = _closure1_slot10;
                    var0 = {};
                    var4 = var4.containerView;
                    var0.style = var4;
                    var9 = _closure1_slot21;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var4 = 44;
                    var4 = var12[var4];
                    var8 = var8.bind(var3)(var4);
                    var4 = {};
                    var4.sections = var6;
                    var6 = null;
                    var12 = var6 != var7;
                    var4.sortingEnabled = var12;
                    var12 = var11.renderSectionHeader;
                    var4.renderSectionHeader = var12;
                    var12 = var11.renderItem;
                    var4.renderItem = var12;
                    var12 = var11.handleDrop;
                    var4.onRowMoved = var12;
                    var13 = _closure1_slot20;
                    var12 = new Array(1);
                    var12[0] = var13;
                    var15 = 1;
                    var17 = var12;
                    var16 = var14;
                    var13 = arraySpread(var17, var16, var15);
                    var4.order = var12;
                    var12 = var11.handleHoverChange;
                    var4.onHoverChange = var12;
                    var12 = var11.renderActiveDivider;
                    var4.renderActiveDivider = var12;
                    var12 = var11.props;
                    var12 = var12.contentContainerStyle;
                    var4.contentContainerStyle = var12;
                    var11 = var11.props;
                    var11 = var11.fontScale;
                    var4.fontScale = var11;
                    var8 = var9.bind(var3)(var8, var4);
                    var4 = new Array(3);
                    var4[0] = var8;
                    var6 = var6 == var7;
                    if (!var6) {
                        _fun115483_ip = 297;
                        continue _fun115483
                    }
                case 277:
                    var9 = _closure1_slot21;
                    var8 = _closure1_slot31;
                    var7 = {};
                    var7.guild = var10;
                    var6 = var9.bind(var3)(var8, var7);
                case 297:
                    var4[1] = var6;
                    var7 = _closure1_slot21;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 45;
                    var5 = var8[var5];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.NavScrim;
                    var5 = {};
                    var5 = var7.bind(var3)(var6, var5);
                    var4[2] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleChannelPress';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 46;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.open;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleSortStop';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 36;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.stopReordering;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleStartSorting';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 36;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.startReordering;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var6.bind(var0)(var7);
    var _closure1_slot26 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var6.contextType = var3;
    var3 = 50;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/GuildSettingsModalChannels.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildSettingsModalChannelsConnected, environment: var1
        _fun115490: for (var _fun115490_ip = 0;;) switch (_fun115490_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var16 = var1.contentContainerStyle;
                var _closure2_slot1 = var16;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var4 = 47;
                var5 = var3[var4];
                var4 = undefined;
                var6 = var2.bind(var4)(var5);
                var5 = var6.useNavigation;
                var13 = var5.bind(var6)();
                var6 = 25;
                var5 = var3[var6];
                var9 = var2.bind(var4)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot13;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot13;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var8.bind(var9)(var7, var5);
                var5 = var3[var6];
                var10 = var2.bind(var4)(var5);
                var9 = var10.useStateFromStores;
                var5 = _closure1_slot17;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = function() { // Environment: var0
                    var0 = _closure1_slot17;
                    var0 = var0.channels;
                    return var0;
                };
                var11 = var9.bind(var10)(var8, var7);
                var7 = var3[var6];
                var10 = var2.bind(var4)(var7);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot16;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot16;
                    var0 = var2.getCurrentUser;
                    var0 = var0.bind(var2)();
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 48;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var1 = null;
                    var2 = var1 != var0;
                    var1 = 'GuildSettingsModalChannelsConnected: currentUser cannot be undefined';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var10 = var9.bind(var10)(var8, var7);
                var7 = var3[var6];
                var14 = var2.bind(var4)(var7);
                var9 = var14.useStateFromStores;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = function() { // Environment: var0
                    var0 = _closure1_slot17;
                    var0 = var0.channelList;
                    return var0;
                };
                var9 = var9.bind(var14)(var8, var7);
                var7 = var3[var6];
                var15 = var2.bind(var4)(var7);
                var14 = var15.useStateFromStores;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = function() { // Environment: var0
                    var0 = _closure1_slot17;
                    var0 = var0.order;
                    return var0;
                };
                var8 = var14.bind(var15)(var8, var7);
                var6 = var3[var6];
                var14 = var2.bind(var4)(var6);
                var7 = var14.useStateFromStores;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var0 = _closure1_slot17;
                    var0 = var0.sortingType;
                    return var0;
                };
                var7 = var7.bind(var14)(var6, var5);
                var _closure2_slot2 = var7;
                var6 = _closure1_slot1;
                var5 = 29;
                var5 = var3[var5];
                var5 = var6.bind(var4)(var5);
                var15 = var5.bind(var4)();
                var _closure2_slot3 = var15;
                var14 = _closure1_slot9;
                var6 = var14.useMemo;
                var5 = new Array(3);
                var5[0] = var16;
                var15 = var15.bottom;
                var5[1] = var15;
                var5[2] = var7;
                var0 = function() { // Environment: var0
                    _fun115497: for (var _fun115497_ip = 0;;) switch (_fun115497_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun115497_ip = 19;
                                continue _fun115497
                            }
                        case 13:
                            var0 = _closure2_slot1;
                            _fun115497_ip = 68;
                            continue _fun115497;
                        case 19:
                            var2 = _closure2_slot1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var3 = _closure2_slot3;
                            var4 = var3.bottom;
                            var3 = 32;
                            var4 = var4 + var3;
                            var3 = 44;
                            var3 = var4 + var3;
                            var2.paddingBottom = var3;
                            var1[1] = var2;
                            var0 = var1;
                        case 68:
                            return var0;
                    }
                };
                var6 = var6.bind(var14)(var0, var5);
                var0 = 49;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useFontScale;
                var5 = var0.bind(var2)();
                var3 = null;
                var2 = var3 == var8;
                var0 = null;
                if (var2) {
                    _fun115490_ip = 483;
                    continue _fun115490
                }
            case 388:
                var2 = var3 == var9;
                var0 = null;
                if (var2) {
                    _fun115490_ip = 483;
                    continue _fun115490
                }
            case 397:
                var2 = var3 == var11;
                var0 = null;
                if (var2) {
                    _fun115490_ip = 483;
                    continue _fun115490
                }
            case 406:
                var2 = var3 == var12;
                var0 = null;
                if (var2) {
                    _fun115490_ip = 483;
                    continue _fun115490
                }
            case 415:
                var2 = var3 == var10;
                var0 = null;
                if (var2) {
                    _fun115490_ip = 483;
                    continue _fun115490
                }
            case 424:
                var3 = _closure1_slot21;
                var2 = _closure1_slot26;
                var1 = {};
                var1.navigation = var13;
                var1.guild = var12;
                var1.channels = var11;
                var1.user = var10;
                var1.channelList = var9;
                var1.order = var8;
                var1.sortingType = var7;
                var1.contentContainerStyle = var6;
                var1.fontScale = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 483:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1372, 1410, 3050, 3059, 1613, 14624, 660, 33, 1297, 4645, 671, 1234, 3165, 668, 5340, 4045, 14701, 3118, 566, 4770, 4865, 4839, 1568, 4043, 7691, 8094, 7787, 14702, 14703, 14622, 9972, 10805, 3055, 4642, 3962, 4755, 5284, 14704, 5167, 6427, 1469, 44, 4049, 2]);