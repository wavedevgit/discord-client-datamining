// modules/guild_settings/safety/native/GuildSettingsModalBans.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun116393: for (var _fun116393_ip = 0;;) switch (_fun116393_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun116393_ip = 46;
                    continue _fun116393
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun116393_ip = 55;
                    continue _fun116393
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun116393_ip = 345;
                    continue _fun116393
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun116393_ip = 323;
                    continue _fun116393
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun116393_ip = 283;
                    continue _fun116393
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun116393_ip = 270;
                    continue _fun116393
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
                    _fun116393_ip = 163;
                    continue _fun116393
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun116393_ip = 179;
                    continue _fun116393
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun116393_ip = 249;
                    continue _fun116393
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun116393_ip = 249;
                    continue _fun116393
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun116393_ip = 234;
                    continue _fun116393
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun116393_ip = 247;
                    continue _fun116393
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun116393_ip = 265;
                continue _fun116393;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun116393_ip = 283;
                continue _fun116393;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun116393_ip = 323;
                    continue _fun116393
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
                    _fun116393_ip = 330;
                    continue _fun116393
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun116394: for (var _fun116394_ip = 0;;) switch (_fun116394_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun116394_ip = 56;
                                continue _fun116394
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
                            _fun116394_ip = 67;
                            continue _fun116394;
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
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun116395: for (var _fun116395_ip = 0;;) switch (_fun116395_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun116395_ip = 23;
                    continue _fun116395
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun116395_ip = 33;
                    continue _fun116395
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
                    _fun116395_ip = 70;
                    continue _fun116395
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun116395_ip = 55;
                    continue _fun116395
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var11 = 1;
    var6 = var5[var11];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var7 = var3.StyleSheet;
    var _closure1_slot6 = var7;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.jsxs;
    var _closure1_slot11 = var6;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var9 = 7;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.paddingHorizontal = var12;
    var8.flex = var11;
    var3.containerInner = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingVertical = var9;
    var3.searchField = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/safety/native/GuildSettingsModalBans.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116396: for (var _fun116396_ip = 0;;) switch (_fun116396_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var9 = var1.contentContainerStyle;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 8;
                var1 = var10[var4];
                var11 = var6.bind(var3)(var1);
                var8 = var11.useStateFromStores;
                var1 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var8.bind(var11)(var7, var1);
                var _closure2_slot1 = var1;
                var4 = var10[var4];
                var8 = var6.bind(var3)(var4);
                var7 = var8.useStateFromStoresObject;
                var4 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var0
                    _fun116398: for (var _fun116398_ip = 0;;) switch (_fun116398_ip) {
                        case 0:
                            var1 = _closure1_slot9;
                            var0 = var1.getProps;
                            var1 = var0.bind(var1)();
                            var2 = var1.bans;
                            var3 = var1.searchQuery;
                            var0 = {};
                            var0.bans = var2;
                            var2 = null;
                            var4 = var2 != var3;
                            var2 = '';
                            if (!var4) {
                                _fun116398_ip = 52;
                                continue _fun116398
                            }
                        case 49:
                            var2 = var3;
                        case 52:
                            var0.searchQuery = var2;
                            var1 = var1.bansVersion;
                            var0.bansVersion = var1;
                            return var0;
                    }
                };
                var4 = var7.bind(var8)(var6, var4);
                var6 = var4.bans;
                var _closure2_slot2 = var6;
                var16 = var4.searchQuery;
                var _closure2_slot3 = var16;
                var8 = var4.bansVersion;
                var7 = _closure1_slot1;
                var4 = 9;
                var4 = var10[var4];
                var4 = var7.bind(var3)(var4);
                var14 = var4.bind(var3)();
                var7 = _closure1_slot6;
                var4 = var7.flatten;
                var7 = var4.bind(var7)(var9);
                var4 = null;
                var10 = var4 == var7;
                var9 = undefined;
                if (var10) {
                    _fun116396_ip = 201;
                    continue _fun116396
                }
            case 195:
                var9 = var7.paddingBottom;
            case 201:
                var10 = 0;
                var11 = 'number';
                var7 = typeof var9;
                var12 = 0;
                if (!(var11 === var7)) {
                    _fun116396_ip = 250;
                    continue _fun116396
                }
            case 216:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 7;
                var7 = var13[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var12 = var9 + var7;
            case 250:
                var7 = _closure1_slot4;
                var11 = var7.useMemo;
                var9 = new Array(3);
                var9[0] = var6;
                var9[1] = var8;
                var9[2] = var16;
                var8 = function() { // Environment: var0
                    _fun116399: for (var _fun116399_ip = 0;;) switch (_fun116399_ip) {
                        case 0:
                            var1 = new Array(0);
                            var2 = _closure1_slot14;
                            var0 = _closure2_slot2;
                            var8 = null;
                            if (!(var8 == var0)) {
                                _fun116399_ip = 30;
                                continue _fun116399
                            }
                        case 24:
                            var0 = new Array(0);
                            _fun116399_ip = 34;
                            continue _fun116399;
                        case 30:
                            var0 = _closure2_slot2;
                        case 34:
                            var7 = undefined;
                            var6 = var2.bind(var7)(var0);
                            var2 = var6.bind(var7)();
                            var0 = var2.done;
                            var5 = 10;
                            var4 = 0;
                            var3 = 1;
                            if (var0) {
                                _fun116399_ip = 201;
                                continue _fun116399
                            }
                        case 64:
                            var11 = var2.value;
                            var0 = _closure1_slot3;
                            var0 = var0.bind(var7)(var11, var3);
                            var12 = var0[var4];
                            var11 = _closure1_slot8;
                            var0 = var11.getUser;
                            var11 = var0.bind(var11)(var12);
                            if (!(var8 != var11)) {
                                _fun116399_ip = 183;
                                continue _fun116399
                            }
                        case 102:
                            var0 = _closure2_slot3;
                            var0 = var0.length;
                            var0 = var4 === var0;
                            if (var0) {
                                _fun116399_ip = 170;
                                continue _fun116399
                            }
                        case 118:
                            var13 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var12 = var12[var5];
                            var14 = var13.bind(var7)(var12);
                            var13 = _closure2_slot3;
                            var12 = var13.toLowerCase;
                            var13 = var12.bind(var13)();
                            var15 = var11.username;
                            var12 = var15.toLowerCase;
                            var12 = var12.bind(var15)();
                            var0 = var14.bind(var7)(var13, var12);
                        case 170:
                            if (!var0) {
                                _fun116399_ip = 183;
                                continue _fun116399
                            }
                        case 173:
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var11);
                        case 183:
                            var11 = var6.bind(var7)();
                            var0 = var11.done;
                            var2 = var11;
                            if (!var0) {
                                _fun116399_ip = 64;
                                continue _fun116399
                            }
                        case 201:
                            var2 = var1.sort;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.username;
                                var0 = var1.toLowerCase;
                                var2 = var0.bind(var1)();
                                var1 = var2.localeCompare;
                                var0 = arg1;
                                var3 = var0.username;
                                var0 = var3.toLowerCase;
                                var0 = var0.bind(var3)();
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                            var0 = {};
                            var0.users = var1;
                            var2 = var1.length;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.sections = var1;
                            return var0;
                    }
                };
                var8 = var11.bind(var7)(var8, var9);
                var9 = var8.users;
                _closure2_slot4 = var9;
                var15 = var8.sections;
                var11 = var7.useEffect;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.fetchGuildBansBatch;
                    var2 = _closure2_slot0;
                    var1 = 1000;
                    var0 = null;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.setSearchQuery;
                        var1 = '';
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
                };
                var2 = var11.bind(var7)(var2, var8);
                var8 = var7.useCallback;
                var2 = new Array(3);
                var2[0] = var6;
                var2[1] = var1;
                var2[2] = var9;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun116403: for (var _fun116403_ip = 0;;) switch (_fun116403_ip) {
                        case 0:
                            var8 = arg1;
                            var0 = _closure2_slot4;
                            var11 = var0[var8];
                            var _closure3_slot0 = var11;
                            var0 = _closure2_slot2;
                            var12 = null;
                            var1 = var12 == var0;
                            var4 = undefined;
                            var0 = undefined;
                            if (var1) {
                                _fun116403_ip = 56;
                                continue _fun116403
                            }
                        case 37:
                            var3 = _closure2_slot2;
                            var2 = var3.get;
                            var1 = var11.id;
                            var0 = var2.bind(var3)(var1);
                        case 56:
                            var _closure3_slot1 = var0;
                            var1 = var12 == var0;
                            var0 = null;
                            if (var1) {
                                _fun116403_ip = 326;
                                continue _fun116403
                            }
                        case 72:
                            var3 = _closure1_slot10;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var1 = 13;
                            var1 = var14[var1];
                            var1 = var13.bind(var4)(var1);
                            var2 = var1.TableRow;
                            var1 = {};
                            var7 = 0;
                            var7 = var7 === var8;
                            var1.start = var7;
                            var7 = _closure2_slot4;
                            var9 = var7.length;
                            var7 = 1;
                            var7 = var9 - var7;
                            var7 = var8 === var7;
                            var1.end = var7;
                            var8 = _closure1_slot1;
                            var9 = 14;
                            var7 = var14[var9];
                            var8 = var8.bind(var4)(var7);
                            var7 = {};
                            var9 = var14[var9];
                            var9 = var13.bind(var4)(var9);
                            var9 = var9.AvatarSizes;
                            var9 = var9.SMALL;
                            var7.size = var9;
                            var7.user = var11;
                            var9 = _closure2_slot1;
                            var12 = var12 == var9;
                            var9 = undefined;
                            if (var12) {
                                _fun116403_ip = 210;
                                continue _fun116403
                            }
                        case 201:
                            var10 = _closure2_slot1;
                            var9 = var10.id;
                        case 210:
                            var7.guildId = var9;
                            var7 = var3.bind(var4)(var8, var7);
                            var1.icon = var7;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 15;
                            var7 = var9[var7];
                            var10 = var8.bind(var4)(var7);
                            var8 = var10.getUserTag;
                            var7 = {};
                            var12 = 'username';
                            var7.mode = var12;
                            var7 = var8.bind(var10)(var11, var7);
                            var1.label = var7;
                            var8 = _closure1_slot10;
                            var7 = _closure1_slot0;
                            var6 = 16;
                            var6 = var9[var6];
                            var6 = var7.bind(var4)(var6);
                            var7 = var6.TableRowArrow;
                            var6 = {};
                            var6 = var8.bind(var4)(var7, var6);
                            var1.trailing = var6;
                            var5 = function() {
                                _fun116404: for (var _fun116404_ip = 0;;) switch (_fun116404_ip) {
                                    case 0:
                                        var0 = _closure2_slot1;
                                        var7 = null;
                                        if (!(var7 != var0)) {
                                            _fun116404_ip = 413;
                                            continue _fun116404
                                        }
                                    case 16:
                                        var12 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var0 = 17;
                                        var0 = var6[var0];
                                        var8 = undefined;
                                        var2 = var12.bind(var8)(var0);
                                        var1 = var2.showSimpleActionSheet;
                                        var0 = {};
                                        var4 = 'GuildSettingsUnban';
                                        var0.key = var4;
                                        var4 = {};
                                        var9 = 18;
                                        var5 = var6[var9];
                                        var5 = var12.bind(var8)(var5);
                                        var14 = var5.intl;
                                        var13 = var14.formatToPlainString;
                                        var5 = var6[var9];
                                        var5 = var12.bind(var8)(var5);
                                        var5 = var5.t;
                                        var11 = var5.XvAG5t;
                                        var10 = {};
                                        var15 = _closure3_slot0;
                                        var15 = var15.username;
                                        var10.user = var15;
                                        var10 = var13.bind(var14)(var11, var10);
                                        var4.title = var10;
                                        var10 = var6[var9];
                                        var10 = var12.bind(var8)(var10);
                                        var11 = var10.intl;
                                        var10 = var11.string;
                                        var6 = var6[var9];
                                        var6 = var12.bind(var8)(var6);
                                        var6 = var6.t;
                                        var6 = var6["9Ki66N"];
                                        var11 = var10.bind(var11)(var6);
                                        var6 = _closure3_slot1;
                                        var6 = var6.reason;
                                        if (!(var7 != var6)) {
                                            _fun116404_ip = 211;
                                            continue _fun116404
                                        }
                                    case 193:
                                        var6 = _closure3_slot1;
                                        var7 = var6.reason;
                                        var6 = '';
                                        if (!(var6 === var7)) {
                                            _fun116404_ip = 267;
                                            continue _fun116404
                                        }
                                    case 211:
                                        var12 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var7 = var6[var9];
                                        var7 = var12.bind(var8)(var7);
                                        var10 = var7.intl;
                                        var7 = var10.string;
                                        var6 = var6[var9];
                                        var6 = var12.bind(var8)(var6);
                                        var6 = var6.t;
                                        var6 = var6["t+2Zci"];
                                        var10 = var7.bind(var10)(var6);
                                        _fun116404_ip = 277;
                                        continue _fun116404;
                                    case 267:
                                        var5 = _closure3_slot1;
                                        var10 = var5.reason;
                                    case 277:
                                        var5 = global;
                                        var5 = var5.HermesInternal;
                                        var7 = var5.concat;
                                        var6 = '';
                                        var5 = ': ';
                                        var5 = var7.bind(var6)(var11, var5, var10);
                                        var4.subtitle = var5;
                                        var0.header = var4;
                                        var4 = {};
                                        var7 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var5 = var3[var9];
                                        var5 = var7.bind(var8)(var5);
                                        var6 = var5.intl;
                                        var5 = var6.string;
                                        var3 = var3[var9];
                                        var3 = var7.bind(var8)(var3);
                                        var3 = var3.t;
                                        var3 = var3.Mp6Z2l;
                                        var3 = var5.bind(var6)(var3);
                                        var4.label = var3;
                                        var3 = true;
                                        var4.isDestructive = var3;
                                        var3 = function() {
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 11;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var4 = var2.bind(var0)(var1);
                                            var3 = var4.unbanUser;
                                            var1 = _closure2_slot1;
                                            var2 = var1.id;
                                            var1 = _closure3_slot0;
                                            var1 = var1.id;
                                            var1 = var3.bind(var4)(var2, var1);
                                            return var0;
                                        };
                                        var4.onPress = var3;
                                        var3 = new Array(1);
                                        var3[0] = var4;
                                        var0.options = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 413:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.onPress = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 326:
                            return var0;
                    }
                };
                var13 = var8.bind(var7)(var1, var2);
                var2 = var7.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setSearchQuery;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var20 = var2.bind(var7)(var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                if (!(var4 != var6)) {
                    _fun116396_ip = 899;
                    continue _fun116396
                }
            case 403:
                var11 = '';
                if (!(var11 === var16)) {
                    _fun116396_ip = 423;
                    continue _fun116396
                }
            case 411:
                var4 = var9.length;
                if (!(var10 !== var4)) {
                    _fun116396_ip = 735;
                    continue _fun116396
                }
            case 423:
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var4 = {};
                var18 = _closure1_slot13;
                var8 = var18.containerInner;
                var4.style = var8;
                var17 = _closure1_slot10;
                var8 = {};
                var18 = var18.searchField;
                var8.style = var18;
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = 22;
                var18 = var21[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.SearchField;
                var18 = {};
                var21 = 'md';
                var18.size = var21;
                var18.onChange = var20;
                var18 = var17.bind(var3)(var19, var18);
                var8.children = var18;
                var17 = var17.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var17;
                if (!(var11 !== var16)) {
                    _fun116396_ip = 541;
                    continue _fun116396
                }
            case 532:
                var9 = var9.length;
                if (!(var10 !== var9)) {
                    _fun116396_ip = 604;
                    continue _fun116396
                }
            case 541:
                var11 = _closure1_slot10;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 24;
                var9 = var16[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.sections = var15;
                var9.itemSize = var14;
                var14 = 'windowSize';
                var9.estimatedListSize = var14;
                var9.renderItem = var13;
                var9.insetEnd = var12;
                var9 = var11.bind(var3)(var10, var9);
                _fun116396_ip = 716;
                continue _fun116396;
            case 604:
                var12 = _closure1_slot10;
                var11 = _closure1_slot1;
                var17 = _closure1_slot2;
                var10 = 20;
                var10 = var17[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var16 = _closure1_slot0;
                var13 = 23;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.NoResults;
                var10.Illustration = var13;
                var13 = 18;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.z3cK5j;
                var13 = var14.bind(var15)(var13);
                var10.body = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 716:
                var8[1] = var9;
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                _fun116396_ip = 897;
                continue _fun116396;
            case 735:
                var8 = _closure1_slot10;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var4 = 20;
                var4 = var13[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var12 = _closure1_slot0;
                var9 = 21;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.BansEmpty;
                var4.Illustration = var9;
                var9 = 18;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.ZEiY1D;
                var10 = var11.bind(var14)(var10);
                var4.title = var10;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.zfCsAw;
                var9 = var10.bind(var11)(var9);
                var4.body = var9;
                var6 = var8.bind(var3)(var7, var4);
            case 897:
                _fun116396_ip = 937;
                continue _fun116396;
            case 899:
                var8 = _closure1_slot10;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 19;
                var4 = var9[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.SceneLoadingIndicator;
                var4 = {};
                var6 = var8.bind(var3)(var7, var4);
            case 937:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 25;
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
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 1621, 8181, 33, 671, 566, 7586, 5606, 4680, 8180, 4901, 5457, 3238, 4909, 7756, 1234, 5860, 7385, 14846, 7037, 7386, 7589, 5207, 2]);