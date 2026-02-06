// modules/guild_settings/native/GuildSettingsModalMembers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun104970: for (var _fun104970_ip = 0;;) switch (_fun104970_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun104970_ip = 46;
                    continue _fun104970
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun104970_ip = 55;
                    continue _fun104970
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun104970_ip = 345;
                    continue _fun104970
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun104970_ip = 323;
                    continue _fun104970
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun104970_ip = 283;
                    continue _fun104970
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun104970_ip = 270;
                    continue _fun104970
                }
            case 110:
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
                    _fun104970_ip = 163;
                    continue _fun104970
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun104970_ip = 179;
                    continue _fun104970
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun104970_ip = 249;
                    continue _fun104970
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun104970_ip = 249;
                    continue _fun104970
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun104970_ip = 234;
                    continue _fun104970
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun104970_ip = 247;
                    continue _fun104970
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun104970_ip = 265;
                continue _fun104970;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun104970_ip = 283;
                continue _fun104970;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun104970_ip = 323;
                    continue _fun104970
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun104970_ip = 330;
                    continue _fun104970
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun104971: for (var _fun104971_ip = 0;;) switch (_fun104971_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun104971_ip = 56;
                                continue _fun104971
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
                            _fun104971_ip = 67;
                            continue _fun104971;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun104972: for (var _fun104972_ip = 0;;) switch (_fun104972_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun104972_ip = 23;
                    continue _fun104972
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun104972_ip = 33;
                    continue _fun104972
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
                    _fun104972_ip = 70;
                    continue _fun104972
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun104972_ip = 55;
                    continue _fun104972
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TABLE_ROW_HEIGHT;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildSettingsSections;
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot15 = var7;
    var7 = var3.jsxs;
    var _closure1_slot16 = var7;
    var3 = var3.Fragment;
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AutocompleterResultTypes;
    var7 = var3.USER;
    var3 = new Array(1);
    var3[0] = var7;
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 15;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9.paddingHorizontal = var13;
    var9.flex = var12;
    var3.containerInner = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.paddingVertical = var12;
    var3.searchFieldContainer = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.paddingBottom = var10;
    var3.listView = var9;
    var9 = {};
    var10 = 70;
    var9.marginLeft = var10;
    var3.rowDivider = var9;
    var9 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'overflow': 'hidden',
        'paddingTop': 4
    };
    var3.roleList = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot19 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun104973: for (var _fun104973_ip = 0;;) switch (_fun104973_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guild;
                var _closure2_slot0 = var9;
                var11 = var0.guildMember;
                var _closure2_slot1 = var11;
                var3 = var0.sortedGuildRoles;
                var6 = var0.start;
                var5 = var0.end;
                var0 = _closure1_slot19;
                var4 = undefined;
                var14 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 16;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot2 = var0;
                var0 = null;
                if (!(var0 != var9)) {
                    _fun104973_ip = 314;
                    continue _fun104973
                }
            case 96:
                var2 = var11.userId;
                var1 = var9.ownerId;
                var8 = var2 === var1;
                if (!var8) {
                    _fun104973_ip = 138;
                    continue _fun104973
                }
            case 114:
                var2 = _closure1_slot7;
                var1 = var2.getId;
                var2 = var1.bind(var2)();
                var1 = var9.ownerId;
                var8 = var2 === var1;
            case 138:
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var7
                    var0 = _closure2_slot1;
                    var2 = var0.roles;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var4 = _closure1_slot15;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.role = var0;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1.guildId = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var13 = var2.bind(var3)(var1);
                var3 = _closure1_slot15;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 18;
                var1 = var12[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var11 = var11.userId;
                var1.userId = var11;
                var9 = var9.id;
                var1.guildId = var9;
                var11 = var13.length;
                var9 = 0;
                var11 = var11 > var9;
                var9 = null;
                if (!var11) {
                    _fun104973_ip = 271;
                    continue _fun104973
                }
            case 232:
                var12 = _closure1_slot15;
                var11 = _closure1_slot5;
                var10 = {};
                var14 = var14.roleList;
                var10.style = var14;
                var14 = 'none';
                var10.pointerEvents = var14;
                var10.children = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 271:
                var1.subLabel = var9;
                var1.disabled = var8;
                var7 = function() {
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var0 = _closure1_slot14;
                    var1 = var0.MEMBER_EDIT;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.userId;
                    var0.userId = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var1.onPress = var7;
                var7 = true;
                var1.arrow = var7;
                var1.start = var6;
                var1.end = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 314:
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot20 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun104977: for (var _fun104977_ip = 0;;) switch (_fun104977_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.guildId;
                var _closure2_slot0 = var12;
                var21 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 16;
                var1 = var17[var1];
                var3 = undefined;
                var2 = var21.bind(var3)(var1);
                var1 = var2.useNavigation;
                var11 = var1.bind(var2)();
                var _closure2_slot1 = var11;
                var1 = _closure1_slot19;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var1 = 19;
                var1 = var17[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var14 = var1.bottom;
                var2 = 20;
                var1 = var17[var2];
                var7 = var21.bind(var3)(var1);
                var6 = var7.useStateFromStoresObject;
                var1 = _closure1_slot11;
                var4 = new Array(2);
                var4[0] = var1;
                var1 = _closure1_slot10;
                var4[1] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var4 = _closure1_slot11;
                    var2 = var4.getGuild;
                    var3 = _closure2_slot0;
                    var2 = var2.bind(var4)(var3);
                    var0.guild = var2;
                    var2 = var4.getGuild;
                    var4 = var2.bind(var4)(var3);
                    var2 = null;
                    var2 = var2 != var4;
                    var0.guildLoaded = var2;
                    var2 = _closure1_slot10;
                    var1 = var2.getSortedRoles;
                    var1 = var1.bind(var2)(var3);
                    var0.sortedGuildRoles = var1;
                    return var0;
                };
                var1 = var6.bind(var7)(var4, var1);
                var8 = var1.guild;
                var _closure2_slot2 = var8;
                var15 = var1.guildLoaded;
                var _closure2_slot3 = var15;
                var1 = var1.sortedGuildRoles;
                var _closure2_slot4 = var1;
                var4 = var17[var2];
                var9 = var21.bind(var3)(var4);
                var7 = var9.useStateFromStores;
                var4 = _closure1_slot13;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot13;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    var0 = var0.selectedRoleId;
                    return var0;
                };
                var19 = var7.bind(var9)(var6, var4);
                var _closure2_slot5 = var19;
                var4 = var17[var2];
                var13 = var21.bind(var3)(var4);
                var9 = var13.useStateFromStores;
                var4 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var4;
                var6 = new Array(2);
                var6[0] = var12;
                var6[1] = var15;
                var4 = function() { // Environment: var0
                    _fun104980: for (var _fun104980_ip = 0;;) switch (_fun104980_ip) {
                        case 0:
                            var3 = _closure1_slot8;
                            var2 = var3.getMemberCount;
                            var0 = _closure2_slot0;
                            var2 = var2.bind(var3)(var0);
                            var0 = null;
                            var4 = var0 != var2;
                            var0 = 0;
                            var3 = 0;
                            if (!var4) {
                                _fun104980_ip = 41;
                                continue _fun104980
                            }
                        case 38:
                            var3 = var2;
                        case 41:
                            var0 = var3 > var0;
                            if (!var0) {
                                _fun104980_ip = 58;
                                continue _fun104980
                            }
                        case 48:
                            var2 = 10000;
                            var0 = var3 <= var2;
                        case 58:
                            if (!var0) {
                                _fun104980_ip = 65;
                                continue _fun104980
                            }
                        case 61:
                            var0 = _closure2_slot3;
                        case 65:
                            return var0;
                    }
                };
                var6 = var9.bind(var13)(var7, var4, var6);
                var _closure2_slot6 = var6;
                var2 = var17[var2];
                var13 = var21.bind(var3)(var2);
                var9 = var13.useStateFromStoresArray;
                var2 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var2;
                var4 = new Array(1);
                var4[0] = var12;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getMembers;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var9.bind(var13)(var7, var2, var4);
                var _closure2_slot7 = var22;
                var4 = _closure1_slot4;
                var7 = var4.useState;
                var2 = new Array(0);
                var2 = var7.bind(var4)(var2);
                var18 = _closure1_slot3;
                var13 = 2;
                var2 = var18.bind(var3)(var2, var13);
                var9 = 0;
                var20 = var2[var9];
                var _closure2_slot8 = var20;
                var16 = 1;
                var2 = var2[var16];
                var _closure2_slot9 = var2;
                var7 = var4.useState;
                var2 = false;
                var2 = var7.bind(var4)(var2);
                var2 = var18.bind(var3)(var2, var13);
                var7 = var2[var9];
                var _closure2_slot10 = var7;
                var2 = var2[var16];
                var _closure2_slot11 = var2;
                var23 = var4.useState;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var7 = _closure2_slot9;
                    var6 = _closure1_slot18;
                    var0 = var4.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var4
                        }
                    });
                    var5 = 100;
                    var8 = var1;
                    var0 = new var8[var4](var7, var6, var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var2 = var23.bind(var4)(var2);
                var13 = var18.bind(var3)(var2, var13);
                var2 = var13[var9];
                var _closure2_slot12 = var2;
                var13 = var13[var16];
                var18 = var4.useMemo;
                var13 = new Array(5);
                var13[0] = var12;
                var13[1] = var22;
                var13[2] = var20;
                var13[3] = var19;
                var13[4] = var7;
                var7 = function() { // Environment: var0
                    _fun104983: for (var _fun104983_ip = 0;;) switch (_fun104983_ip) {
                        case 0:
                            var0 = new Array(0);
                            var10 = function arg0() {
                                _fun104984: for (var _fun104984_ip = 0;;) switch (_fun104984_ip) {
                                    case 0:
                                        var2 = _closure2_slot5;
                                        var0 = null;
                                        var0 = var0 != var2;
                                        if (!var0) {
                                            _fun104984_ip = 64;
                                            continue _fun104984
                                        }
                                    case 16:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 21;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var5 = var4.bind(var2)(var3);
                                        var4 = var5.isEveryoneRoleId;
                                        var3 = _closure2_slot0;
                                        var2 = _closure2_slot5;
                                        var2 = var4.bind(var5)(var3, var2);
                                        var0 = !var2;
                                    case 64:
                                        if (!var0) {
                                            _fun104984_ip = 101;
                                            continue _fun104984
                                        }
                                    case 67:
                                        var2 = arg0;
                                        var3 = var2.roles;
                                        var2 = var3.indexOf;
                                        var1 = _closure2_slot5;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = -1;
                                        var0 = var1 === var2;
                                    case 101:
                                        return var0;
                                }
                            };
                            var3 = _closure2_slot10;
                            var2 = _closure1_slot21;
                            if (var3) {
                                _fun104983_ip = 143;
                                continue _fun104983
                            }
                        case 30:
                            var3 = _closure2_slot7;
                            var7 = undefined;
                            var6 = var2.bind(var7)(var3);
                            var4 = var6.bind(var7)();
                            var3 = var4.done;
                            var5 = null;
                            if (var3) {
                                _fun104983_ip = 120;
                                continue _fun104983
                            }
                        case 55:
                            var11 = var4.value;
                            var13 = _closure1_slot12;
                            var12 = var13.getUser;
                            var3 = var11.userId;
                            var3 = var12.bind(var13)(var3);
                            var3 = var5 == var3;
                            if (var3) {
                                _fun104983_ip = 92;
                                continue _fun104983
                            }
                        case 87:
                            var3 = var10.bind(var7)(var11);
                        case 92:
                            if (var3) {
                                _fun104983_ip = 105;
                                continue _fun104983
                            }
                        case 95:
                            var3 = var0.push;
                            var3 = var3.bind(var0)(var11);
                        case 105:
                            var11 = var6.bind(var7)();
                            var3 = var11.done;
                            var4 = var11;
                            if (!var3) {
                                _fun104983_ip = 55;
                                continue _fun104983
                            }
                        case 120:
                            var3 = var0.sort;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun104985: for (var _fun104985_ip = 0;;) switch (_fun104985_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = arg1;
                                        var0 = var1.nick;
                                        var3 = null;
                                        if (!(var3 == var0)) {
                                            _fun104985_ip = 58;
                                            continue _fun104985
                                        }
                                    case 18:
                                        var5 = _closure1_slot12;
                                        var2 = var5.getUser;
                                        var1 = var1.userId;
                                        var2 = var2.bind(var5)(var1);
                                        var5 = var3 == var2;
                                        var1 = undefined;
                                        if (var5) {
                                            _fun104985_ip = 55;
                                            continue _fun104985
                                        }
                                    case 50:
                                        var1 = var2.username;
                                    case 55:
                                        var0 = var1;
                                    case 58:
                                        var5 = var3 != var0;
                                        var2 = '';
                                        var1 = var2;
                                        if (!var5) {
                                            _fun104985_ip = 75;
                                            continue _fun104985
                                        }
                                    case 72:
                                        var1 = var0;
                                    case 75:
                                        var0 = var4.nick;
                                        if (!(var3 == var0)) {
                                            _fun104985_ip = 125;
                                            continue _fun104985
                                        }
                                    case 85:
                                        var6 = _closure1_slot12;
                                        var5 = var6.getUser;
                                        var4 = var4.userId;
                                        var5 = var5.bind(var6)(var4);
                                        var6 = var3 == var5;
                                        var4 = undefined;
                                        if (var6) {
                                            _fun104985_ip = 122;
                                            continue _fun104985
                                        }
                                    case 117:
                                        var4 = var5.username;
                                    case 122:
                                        var0 = var4;
                                    case 125:
                                        var3 = var3 != var0;
                                        if (!var3) {
                                            _fun104985_ip = 135;
                                            continue _fun104985
                                        }
                                    case 132:
                                        var2 = var0;
                                    case 135:
                                        var0 = var1.localeCompare;
                                        var0 = var0.bind(var1)(var2);
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var0)(var1);
                            _fun104983_ip = 296;
                            continue _fun104983;
                        case 143:
                            var1 = _closure2_slot8;
                            var7 = undefined;
                            var6 = var2.bind(var7)(var1);
                            var2 = var6.bind(var7)();
                            var1 = var2.done;
                            var5 = null;
                            var4 = 13;
                            var3 = var2;
                            var2 = undefined;
                            if (var1) {
                                _fun104983_ip = 296;
                                continue _fun104983
                            }
                        case 176:
                            var1 = var3.value;
                            var12 = var1.type;
                            var13 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var11 = var11[var4];
                            var11 = var13.bind(var7)(var11);
                            var11 = var11.AutocompleterResultTypes;
                            var11 = var11.USER;
                            if (!(var12 === var11)) {
                                _fun104983_ip = 281;
                                continue _fun104983
                            }
                        case 219:
                            var13 = _closure1_slot9;
                            var12 = var13.getMember;
                            var11 = _closure2_slot0;
                            var1 = var1.record;
                            var1 = var1.id;
                            var1 = var12.bind(var13)(var11, var1);
                            var11 = var5 == var1;
                            if (var11) {
                                _fun104983_ip = 262;
                                continue _fun104983
                            }
                        case 257:
                            var11 = var10.bind(var7)(var1);
                        case 262:
                            var2 = var1;
                            if (var11) {
                                _fun104983_ip = 281;
                                continue _fun104983
                            }
                        case 268:
                            var11 = var0.push;
                            var11 = var11.bind(var0)(var1);
                            var2 = var1;
                        case 281:
                            var11 = var6.bind(var7)();
                            var1 = var11.done;
                            var3 = var11;
                            if (!var1) {
                                _fun104983_ip = 176;
                                continue _fun104983
                            }
                        case 296:
                            return var0;
                    }
                };
                var13 = var18.bind(var4)(var7, var13);
                var7 = var13.length;
                var7 = var7 - var16;
                var _closure2_slot13 = var7;
                var18 = var4.useEffect;
                var16 = new Array(2);
                var16[0] = var8;
                var16[1] = var11;
                var11 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function() {
                        _fun104987: for (var _fun104987_ip = 0;;) switch (_fun104987_ip) {
                            case 0:
                                var3 = _closure1_slot15;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 22;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.ContextMenu;
                                var0 = {};
                                var6 = _closure2_slot2;
                                var4 = null;
                                if (!(var4 == var6)) {
                                    _fun104987_ip = 56;
                                    continue _fun104987
                                }
                            case 50:
                                var4 = new Array(0);
                                _fun104987_ip = 97;
                                continue _fun104987;
                            case 56:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var5 = 23;
                                var5 = var7[var5];
                                var7 = var6.bind(var2)(var5);
                                var6 = var7.getMembersManagementActions;
                                var5 = {};
                                var8 = _closure2_slot2;
                                var5.guild = var8;
                                var4 = var6.bind(var7)(var5);
                            case 97:
                                var0.items = var4;
                                var4 = function arg0() {
                                    var2 = arg0;
                                    var5 = var2.ref;
                                    var0 = null;
                                    var1 = Object.create(var0);
                                    var0 = 0;
                                    var1.ref = var0;
                                    var13 = {};
                                    var12 = var2;
                                    var11 = var1;
                                    var12 = copyDataProperties(var13, var12, var11);
                                    var3 = _closure1_slot15;
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var0 = 24;
                                    var0 = var10[var0];
                                    var2 = undefined;
                                    var0 = var9.bind(var2)(var0);
                                    var1 = var0.HeaderActionButton;
                                    var0 = {};
                                    var7 = _closure1_slot1;
                                    var6 = 25;
                                    var6 = var10[var6];
                                    var6 = var7.bind(var2)(var6);
                                    var0.source = var6;
                                    var6 = 26;
                                    var7 = var10[var6];
                                    var7 = var9.bind(var2)(var7);
                                    var8 = var7.intl;
                                    var7 = var8.string;
                                    var6 = var10[var6];
                                    var6 = var9.bind(var2)(var6);
                                    var6 = var6.t;
                                    var6 = var6.ogxXGq;
                                    var6 = var7.bind(var8)(var6);
                                    var0.accessibilityLabel = var6;
                                    var0.ref = var5;
                                    var13 = var0;
                                    var4 = copyDataProperties(var13, var12);
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var0.children = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                        }
                    };
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var11 = var18.bind(var4)(var11, var16);
                var16 = var4.useEffect;
                var11 = new Array(2);
                var11[0] = var6;
                var11[1] = var12;
                var6 = function() { // Environment: var0
                    _fun104989: for (var _fun104989_ip = 0;;) switch (_fun104989_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            if (!var1) {
                                _fun104989_ip = 64;
                                continue _fun104989
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 27;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.requestMembers;
                            var9 = _closure2_slot0;
                            var8 = '';
                            var7 = 10000;
                            var6 = false;
                            var10 = var5;
                            var0 = var10[var4](var9, var8, var7, var6, var5);
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var16.bind(var4)(var6, var11);
                var16 = var4.useEffect;
                var11 = new Array(3);
                var11[0] = var12;
                var11[1] = var15;
                var11[2] = var2;
                var6 = function() { // Environment: var0
                    _fun104990: for (var _fun104990_ip = 0;;) switch (_fun104990_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun104990_ip = 49;
                                continue _fun104990
                            }
                        case 10:
                            var2 = _closure2_slot12;
                            var1 = var2.setOptions;
                            var0 = {};
                            var3 = {};
                            var4 = _closure2_slot0;
                            var3.guild = var4;
                            var4 = true;
                            var3.strict = var4;
                            var0.userFilters = var3;
                            var0 = var1.bind(var2)(var0);
                        case 49:
                            var0 = function() { // Environment: var0
                                _fun104991: for (var _fun104991_ip = 0;;) switch (_fun104991_ip) {
                                    case 0:
                                        var1 = _closure2_slot3;
                                        if (!var1) {
                                            _fun104991_ip = 73;
                                            continue _fun104991
                                        }
                                    case 10:
                                        var5 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var1 = 28;
                                        var1 = var6[var1];
                                        var4 = undefined;
                                        var3 = var5.bind(var4)(var1);
                                        var2 = var3.selectRole;
                                        var1 = 29;
                                        var1 = var6[var1];
                                        var5 = var5.bind(var4)(var1);
                                        var4 = var5.castGuildIdAsEveryoneGuildRoleId;
                                        var1 = _closure2_slot0;
                                        var1 = var4.bind(var5)(var1);
                                        var1 = var2.bind(var3)(var1);
                                    case 73:
                                        var1 = _closure2_slot12;
                                        var0 = var1.destroy;
                                        var0 = var0.bind(var1)();
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var6 = var16.bind(var4)(var6, var11);
                var11 = var4.useCallback;
                var6 = new Array(3);
                var6[0] = var15;
                var6[1] = var12;
                var6[2] = var2;
                var2 = function(arg0) { // Environment: var0
                    _fun104992: for (var _fun104992_ip = 0;;) switch (_fun104992_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.trim;
                            var1 = var0.bind(var4)();
                            var0 = '';
                            var1 = var0 !== var1;
                            var2 = _closure2_slot11;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var3 = _closure2_slot12;
                            if (var1) {
                                _fun104992_ip = 54;
                                continue _fun104992
                            }
                        case 42:
                            var1 = var3.clear;
                            var1 = var1.bind(var3)();
                            _fun104992_ip = 79;
                            continue _fun104992;
                        case 54:
                            var2 = var3.search;
                            var6 = _closure2_slot3;
                            var1 = undefined;
                            if (!var6) {
                                _fun104992_ip = 73;
                                continue _fun104992
                            }
                        case 69:
                            var1 = _closure2_slot0;
                        case 73:
                            var1 = var2.bind(var3)(var4, var1);
                        case 79:
                            return var0;
                    }
                };
                var16 = var11.bind(var4)(var2, var6);
                var6 = var4.useCallback;
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var1;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var5 = var0.item;
                    var4 = var0.index;
                    var3 = _closure1_slot15;
                    var2 = _closure1_slot20;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var1.guild = var6;
                    var1.guildMember = var5;
                    var5 = _closure2_slot4;
                    var1.sortedGuildRoles = var5;
                    var5 = 0;
                    var5 = var5 === var4;
                    var1.start = var5;
                    var0 = _closure2_slot13;
                    var0 = var4 === var0;
                    var1.end = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var12 = var6.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.userId;
                    return var0;
                };
                var0 = new Array(0);
                var15 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot16;
                var1 = _closure1_slot17;
                var0 = {};
                var6 = _closure1_slot5;
                var4 = {};
                var7 = var10.containerInner;
                var4.style = var7;
                var8 = _closure1_slot15;
                var7 = {};
                var10 = var10.searchFieldContainer;
                var7.style = var10;
                var10 = 30;
                var10 = var17[var10];
                var10 = var21.bind(var3)(var10);
                var11 = var10.SearchField;
                var10 = {};
                var18 = 'md';
                var10.size = var18;
                var19 = 26;
                var18 = var17[var19];
                var18 = var21.bind(var3)(var18);
                var20 = var18.intl;
                var18 = var20.string;
                var17 = var17[var19];
                var17 = var21.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.pYHobK;
                var17 = var18.bind(var20)(var17);
                var10.placeholder = var17;
                var10.onChange = var16;
                var16 = true;
                var10.isRound = var16;
                var10 = var8.bind(var3)(var11, var10);
                var7.children = var10;
                var8 = var8.bind(var3)(var6, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = var13.length;
                if (!(var9 === var8)) {
                    _fun104977_ip = 1007;
                    continue _fun104977
                }
            case 848:
                var10 = _closure1_slot15;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 32;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var18 = _closure1_slot0;
                var16 = 33;
                var16 = var11[var16];
                var16 = var18.bind(var3)(var16);
                var16 = var16.NoResults;
                var8.Illustration = var16;
                var16 = var11[var19];
                var16 = var18.bind(var3)(var16);
                var20 = var16.intl;
                var17 = var20.string;
                var16 = var11[var19];
                var16 = var18.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.qVQ9ud;
                var16 = var17.bind(var20)(var16);
                var8.title = var16;
                var16 = var11[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var11 = var11[var19];
                var11 = var18.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.oB9grQ;
                var11 = var16.bind(var17)(var11);
                var8.body = var11;
                var8 = var10.bind(var3)(var9, var8);
                _fun104977_ip = 1110;
                continue _fun104977;
            case 1007:
                var11 = _closure1_slot15;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 31;
                var9 = var16[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.FlashList;
                var9 = {};
                var9.keyExtractor = var15;
                var9.data = var13;
                var9.renderItem = var12;
                var12 = _closure1_slot6;
                var9.estimatedItemSize = var12;
                var12 = {};
                var15 = _closure1_slot1;
                var13 = 15;
                var13 = var16[var13];
                var13 = var15.bind(var3)(var13);
                var13 = var13.spacing;
                var13 = var13.PX_16;
                var13 = var14 + var13;
                var12.paddingBottom = var13;
                var9.contentContainerStyle = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1110:
                var7[1] = var8;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot15;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 34;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.NavScrim;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/GuildSettingsModalMembers.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4873, 1216, 1599, 1681, 1674, 1410, 1621, 8181, 660, 33, 6649, 1297, 671, 1469, 9178, 9172, 1568, 566, 8161, 8972, 13709, 5327, 8224, 1234, 4680, 8180, 21, 7037, 5761, 7385, 7386, 5207, 2]);