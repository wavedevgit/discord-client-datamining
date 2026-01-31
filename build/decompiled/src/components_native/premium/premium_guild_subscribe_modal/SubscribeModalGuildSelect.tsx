// components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumGuildSubscribeModalScenes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'backgroundColor': null,
        'flexGrow': 1,
        'flexShrink': 1
    };
    var9 = 8;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var9;
    var6.safeArea = var3;
    var3 = {};
    var9 = 16;
    var3.padding = var9;
    var6.guildList = var3;
    var3 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingVertical': 10
    };
    var6.guildOption = var3;
    var9 = {
        'marginLeft': 32,
        'fontSize': 16,
        'lineHeight': 20
    };
    var3 = 20;
    var10 = 9;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.DARK_WHITE_500_LIGHT_PRIMARY_660;
    var9.color = var10;
    var6.guildName = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SubscribeModalGuildSelect, environment: var1
        var1 = arg0;
        var0 = var1.guildBoostSlots;
        var _closure2_slot0 = var0;
        var2 = var1.intent;
        var _closure2_slot1 = var2;
        var1 = var1.onResult;
        var _closure2_slot2 = var1;
        var1 = _closure1_slot12;
        var3 = undefined;
        var14 = var1.bind(var3)();
        var _closure2_slot3 = var14;
        var9 = _closure1_slot0;
        var13 = _closure1_slot3;
        var1 = 10;
        var1 = var13[var1];
        var2 = var9.bind(var3)(var1);
        var1 = var2.useNavigation;
        var1 = var1.bind(var2)();
        var _closure2_slot4 = var1;
        var4 = _closure1_slot5;
        var2 = var4.useState;
        var1 = '';
        var6 = var2.bind(var4)(var1);
        var2 = _closure1_slot4;
        var1 = 2;
        var2 = var2.bind(var3)(var6, var1);
        var1 = 0;
        var7 = var2[var1];
        var _closure2_slot5 = var7;
        var1 = 1;
        var15 = var2[var1];
        var2 = var4.useMemo;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var10
            _fun77947: for (var _fun77947_ip = 0;;) switch (_fun77947_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun77947_ip = 83;
                        continue _fun77947
                    }
                case 15:
                    var2 = global;
                    var2 = var2.Set;
                    var4 = _closure2_slot0;
                    var3 = var4.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun77948: for (var _fun77948_ip = 0;;) switch (_fun77948_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.premiumGuildSubscription;
                                var1 = null;
                                var3 = var1 == var2;
                                var0 = undefined;
                                if (var3) {
                                    _fun77948_ip = 25;
                                    continue _fun77948
                                }
                            case 20:
                                var0 = var2.guildId;
                            case 25:
                                var0 = var1 != var0;
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun77949: for (var _fun77949_ip = 0;;) switch (_fun77949_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.premiumGuildSubscription;
                                var0 = null;
                                var2 = var0 == var1;
                                var0 = undefined;
                                if (var2) {
                                    _fun77949_ip = 25;
                                    continue _fun77949
                                }
                            case 20:
                                var0 = var1.guildId;
                            case 25:
                                return var0;
                        }
                    };
                    var5 = var1.bind(var3)(var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    _fun77947_ip = 111;
                    continue _fun77947;
                case 83:
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var1](var5);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 111:
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var _closure2_slot6 = var0;
        var1 = 11;
        var1 = var13[var1];
        var6 = var9.bind(var3)(var1);
        var4 = var6.useStateFromStoresArray;
        var1 = _closure1_slot7;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = _closure1_slot8;
        var2[1] = var1;
        var1 = new Array(2);
        var1[0] = var7;
        var1[1] = var0;
        var0 = function() { // Environment: var10
            _fun77950: for (var _fun77950_ip = 0;;) switch (_fun77950_ip) {
                case 0:
                    var0 = _closure2_slot5;
                    var2 = var0.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun77950_ip = 116;
                        continue _fun77950
                    }
                case 20:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.queryGuilds;
                    var0 = {};
                    var4 = _closure2_slot5;
                    var0.query = var4;
                    var4 = var2.bind(var3)(var0);
                    var3 = var4.reduce;
                    var0 = global;
                    var0 = var0.Array;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var8 = var2;
                    var0 = new var8[var0](var7);
                    var2 = var0 instanceof Object ? var0 : var2;
                    var0 = function(arg0, arg1) { // Environment: var1
                        _fun77952: for (var _fun77952_ip = 0;;) switch (_fun77952_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = arg1;
                                var2 = var1.record;
                                var4 = _closure2_slot6;
                                var3 = var4.has;
                                var1 = var2.id;
                                var1 = var3.bind(var4)(var1);
                                if (var1) {
                                    _fun77952_ip = 47;
                                    continue _fun77952
                                }
                            case 37:
                                var1 = var0.push;
                                var1 = var1.bind(var0)(var2);
                            case 47:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var0, var2);
                    _fun77950_ip = 180;
                    continue _fun77950;
                case 116:
                    var3 = _closure1_slot8;
                    var2 = var3.getFlattenedGuildIds;
                    var4 = var2.bind(var3)();
                    var3 = var4.reduce;
                    var2 = global;
                    var2 = var2.Array;
                    var5 = var2.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = var5;
                    var2 = new var8[var2](var7);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun77951: for (var _fun77951_ip = 0;;) switch (_fun77951_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = _closure1_slot7;
                                var2 = var3.getGuild;
                                var1 = arg1;
                                var2 = var2.bind(var3)(var1);
                                var1 = null;
                                var1 = var1 == var2;
                                if (var1) {
                                    _fun77951_ip = 54;
                                    continue _fun77951
                                }
                            case 32:
                                var5 = _closure2_slot6;
                                var4 = var5.has;
                                var3 = var2.id;
                                var1 = var4.bind(var5)(var3);
                            case 54:
                                if (var1) {
                                    _fun77951_ip = 67;
                                    continue _fun77951
                                }
                            case 57:
                                var1 = var0.push;
                                var1 = var1.bind(var0)(var2);
                            case 67:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var1, var2);
                case 180:
                    return var0;
            }
        };
        var12 = var4.bind(var6)(var2, var0, var1);
        var2 = _closure1_slot11;
        var8 = 13;
        var0 = var13[var8];
        var0 = var9.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var11 = true;
        var0.top = var11;
        var4 = var14.safeArea;
        var0.style = var4;
        var7 = _closure1_slot10;
        var6 = _closure1_slot1;
        var4 = 14;
        var4 = var13[var4];
        var6 = var6.bind(var3)(var4);
        var4 = {};
        var16 = 15;
        var17 = var13[var16];
        var17 = var9.bind(var3)(var17);
        var18 = var17.intl;
        var17 = var18.string;
        var16 = var13[var16];
        var16 = var9.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.vf3ZTa;
        var16 = var17.bind(var18)(var16);
        var4.placeholder = var16;
        var4.onChange = var15;
        var16 = _closure1_slot2;
        var15 = 16;
        var15 = var13[var15];
        var15 = var16.bind(var3)(var15);
        var15 = var15.closeApplyBoostModal;
        var4.onClose = var15;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot6;
        var5 = {};
        var14 = var14.guildList;
        var5.style = var14;
        var14 = 'always';
        var5.keyboardShouldPersistTaps = var14;
        var8 = var13[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.SafeAreaPaddingView;
        var8 = {};
        var8.bottom = var11;
        var11 = var12.map;
        var10 = function(arg0) { // Environment: var10
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot11;
            var12 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 17;
            var1 = var10[var1];
            var3 = undefined;
            var1 = var12.bind(var3)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var7 = 'button';
            var1.accessibilityRole = var7;
            var9 = _closure2_slot3;
            var7 = var9.guildOption;
            var1.style = var7;
            var6 = function() { // Original name: onPress, environment: var6
                var5 = _closure3_slot0;
                var3 = _closure2_slot4;
                var2 = var3.replace;
                var0 = _closure1_slot9;
                var1 = var0.CONFIRMATION;
                var0 = {};
                var5 = var5.id;
                var0.guildId = var5;
                var5 = _closure2_slot0;
                var0.guildBoostSlots = var5;
                var5 = _closure2_slot1;
                var0.intent = var5;
                var4 = _closure2_slot2;
                var0.onResult = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var1.onPress = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var11 = 18;
            var5 = var10[var11];
            var6 = var7.bind(var3)(var5);
            var5 = {};
            var5.guild = var0;
            var11 = var10[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.GuildIconSizes;
            var11 = var11.SMALL;
            var5.size = var11;
            var11 = false;
            var5.selected = var11;
            var6 = var8.bind(var3)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 19;
            var6 = var10[var6];
            var7 = var7.bind(var3)(var6);
            var6 = {};
            var9 = var9.guildName;
            var6.style = var9;
            var9 = var0.name;
            var6.children = var9;
            var6 = var8.bind(var3)(var7, var6);
            var5[1] = var6;
            var1.children = var5;
            var0 = var0.id;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var10 = var11.bind(var12)(var10);
        var8.children = var10;
        var8 = var7.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 4340, 9853, 33, 1297, 671, 4835, 1469, 566, 5553, 4697, 8919, 1234, 9851, 4865, 7355, 1295, 2]);