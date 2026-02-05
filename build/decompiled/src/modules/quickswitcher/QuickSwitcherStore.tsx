// modules/quickswitcher/QuickSwitcherStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun54965: for (var _fun54965_ip = 0;;) switch (_fun54965_ip) {
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
            case 70: // try_end0
                _fun54965_ip = 74;
                continue _fun54965;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot38 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0, arg1() {
        _fun54968: for (var _fun54968_ip = 0;;) switch (_fun54968_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun54968_ip = 46;
                    continue _fun54968
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun54968_ip = 55;
                    continue _fun54968
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun54968_ip = 343;
                    continue _fun54968
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun54968_ip = 323;
                    continue _fun54968
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun54968_ip = 283;
                    continue _fun54968
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun54968_ip = 270;
                    continue _fun54968
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
                    _fun54968_ip = 163;
                    continue _fun54968
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun54968_ip = 179;
                    continue _fun54968
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun54968_ip = 249;
                    continue _fun54968
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun54968_ip = 249;
                    continue _fun54968
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun54968_ip = 234;
                    continue _fun54968
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun54968_ip = 247;
                    continue _fun54968
                }
            case 234:
                var8 = _closure1_slot40;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun54968_ip = 265;
                continue _fun54968;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun54968_ip = 283;
                continue _fun54968;
            case 270:
                var6 = _closure1_slot40;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun54968_ip = 323;
                    continue _fun54968
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
                    _fun54968_ip = 330;
                    continue _fun54968
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun54969: for (var _fun54969_ip = 0;;) switch (_fun54969_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun54969_ip = 56;
                                continue _fun54969
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
                            _fun54969_ip = 67;
                            continue _fun54969;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function arg0, arg1() {
        _fun54970: for (var _fun54970_ip = 0;;) switch (_fun54970_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun54970_ip = 23;
                    continue _fun54970
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun54970_ip = 33;
                    continue _fun54970
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
                    _fun54970_ip = 70;
                    continue _fun54970
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun54970_ip = 55;
                    continue _fun54970
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var11 = function() {
        _fun54971: for (var _fun54971_ip = 0;;) switch (_fun54971_ip) {
            case 0:
                var2 = _closure1_slot17;
                var0 = var2.getGuildCount;
                var2 = var0.bind(var2)();
                var0 = 3;
                var0 = var2 >= var0;
                if (var0) {
                    _fun54971_ip = 77;
                    continue _fun54971
                }
            case 27:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 20;
                var4 = var2[var3];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.size;
                var6 = _closure1_slot11;
                var2 = var6.getMutablePrivateChannels;
                var2 = var2.bind(var6)();
                var2 = var4.bind(var5)(var2);
                var0 = var2 >= var3;
            case 77:
                _closure1_slot29 = var0;
                var0 = new Array(0);
                _closure1_slot34 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1 = function arg0() {
        _fun54972: for (var _fun54972_ip = 0;;) switch (_fun54972_ip) {
            case 0:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 21;
                var0 = var3[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = arg0;
                var1 = var1.bind(var3)(var0);
                var4 = null;
                var3 = var4 == var1;
                var0 = null;
                if (var3) {
                    _fun54972_ip = 70;
                    continue _fun54972
                }
            case 44:
                var3 = _closure1_slot30;
                if (!(var4 != var3)) {
                    _fun54972_ip = 67;
                    continue _fun54972
                }
            case 52:
                var3 = _closure1_slot30;
                var2 = var1.type;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun54972_ip = 70;
                    continue _fun54972
                }
            case 67:
                var0 = var1;
            case 70:
                return var0;
        }
    };
    var _closure1_slot41 = var1;
    var0 = function() {
        _fun54973: for (var _fun54973_ip = 0;;) switch (_fun54973_ip) {
            case 0:
                var3 = _closure1_slot21;
                var2 = var3.getGuildId;
                var2 = var2.bind(var3)();
                var12 = null;
                var4 = var12 != var2;
                var3 = undefined;
                var16 = undefined;
                if (!var4) {
                    _fun54973_ip = 35;
                    continue _fun54973
                }
            case 32:
                var16 = var2;
            case 35:
                var4 = _closure1_slot20;
                var2 = var4.getChannelId;
                var2 = var2.bind(var4)();
                var5 = var12 != var2;
                var4 = undefined;
                if (!var5) {
                    _fun54973_ip = 61;
                    continue _fun54973
                }
            case 58:
                var4 = var2;
            case 61:
                var _closure2_slot0 = var4;
                var5 = _closure1_slot30;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 19;
                var2 = var2[var6];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.USER;
                if (!(var2 !== var5)) {
                    _fun54973_ip = 1606;
                    continue _fun54973
                }
            case 108:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.APPLICATION;
                if (!(var2 !== var5)) {
                    _fun54973_ip = 1559;
                    continue _fun54973
                }
            case 144:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.GUILD;
                if (!(var2 !== var5)) {
                    _fun54973_ip = 1512;
                    continue _fun54973
                }
            case 180:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.TEXT_CHANNEL;
                if (!(var2 !== var5)) {
                    _fun54973_ip = 1445;
                    continue _fun54973
                }
            case 216:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.VOICE_CHANNEL;
                if (!(var2 !== var5)) {
                    _fun54973_ip = 1357;
                    continue _fun54973
                }
            case 252:
                var10 = new Array(0);
                var5 = global;
                var2 = var5.Set;
                var7 = var2.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var2
                    }
                });
                var23 = var7;
                var2 = new var23[var2](var22);
                var11 = var2 instanceof Object ? var2 : var7;
                var _closure2_slot2 = var11;
                var7 = function arg0() {
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = new Array(0);
                    var _closure3_slot1 = var0;
                    var4 = _closure1_slot12;
                    var3 = var4.getRecentlyEditedDrafts;
                    var2 = _closure1_slot13;
                    var2 = var2.ChannelMessage;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun54977: for (var _fun54977_ip = 0;;) switch (_fun54977_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.channelId;
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var4);
                                if (var2) {
                                    _fun54977_ip = 68;
                                    continue _fun54977
                                }
                            case 25:
                                var2 = _closure1_slot41;
                                var5 = var2.bind(var0)(var4);
                                var2 = null;
                                if (!(var2 != var5)) {
                                    _fun54977_ip = 68;
                                    continue _fun54977
                                }
                            case 43:
                                var3 = _closure3_slot1;
                                var2 = var3.push;
                                var1 = {};
                                var1.record = var5;
                                var1.channelId = var4;
                                var1 = var2.bind(var3)(var1);
                            case 68:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = function(arg0) { // Environment: var0
                    _fun54978: for (var _fun54978_ip = 0;;) switch (_fun54978_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var0 = var3 === var0;
                            if (var0) {
                                _fun54978_ip = 34;
                                continue _fun54978
                            }
                        case 17:
                            var4 = _closure1_slot35;
                            var2 = var4.includes;
                            var0 = var2.bind(var4)(var3);
                        case 34:
                            if (var0) {
                                _fun54978_ip = 51;
                                continue _fun54978
                            }
                        case 37:
                            var2 = _closure2_slot2;
                            var1 = var2.has;
                            var0 = var1.bind(var2)(var3);
                        case 51:
                            return var0;
                    }
                };
                var7 = var7.bind(var3)(var2);
                var2 = var7.length;
                var8 = 0;
                if (!(var2 > var8)) {
                    _fun54973_ip = 476;
                    continue _fun54973
                }
            case 317:
                var9 = var10.push;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = var19[var6];
                var14 = var18.bind(var3)(var2);
                var13 = var14.createHeaderResult;
                var2 = 23;
                var15 = var19[var2];
                var15 = var18.bind(var3)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var2 = var19[var2];
                var2 = var18.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["4B63jZ"];
                var2 = var15.bind(var17)(var2);
                var2 = var13.bind(var14)(var2);
                var2 = var9.bind(var10)(var2);
                var2 = _closure1_slot39;
                var9 = var2.bind(var3)(var7);
                var7 = var9.bind(var3)();
                var2 = var7.done;
                if (var2) {
                    _fun54973_ip = 476;
                    continue _fun54973
                }
            case 425:
                var2 = var7.value;
                var14 = var11.add;
                var13 = var2.channelId;
                var13 = var14.bind(var11)(var13);
                var13 = var10.push;
                var2 = var2.record;
                var2 = var13.bind(var10)(var2);
                var13 = var9.bind(var3)();
                var2 = var13.done;
                var7 = var13;
                if (!var2) {
                    _fun54973_ip = 425;
                    continue _fun54973
                }
            case 476:
                var7 = _closure1_slot19;
                var2 = var7.getMentionChannelIds;
                var9 = var2.bind(var7)();
                var7 = var9.filter;
                var2 = function(arg0) { // Environment: var0
                    _fun54979: for (var _fun54979_ip = 0;;) switch (_fun54979_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun54979_ip = 37;
                                continue _fun54979
                            }
                        case 17:
                            var4 = _closure1_slot35;
                            var2 = var4.includes;
                            var2 = var2.bind(var4)(var3);
                            var0 = !var2;
                        case 37:
                            if (!var0) {
                                _fun54979_ip = 57;
                                continue _fun54979
                            }
                        case 40:
                            var2 = _closure2_slot2;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            var0 = !var1;
                        case 57:
                            return var0;
                    }
                };
                var9 = var7.bind(var9)(var2);
                var7 = var9.map;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot41;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var9 = var7.bind(var9)(var2);
                var7 = var9.filter;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 24;
                var2 = var14[var2];
                var2 = var13.bind(var3)(var2);
                var2 = var2.isNotNullish;
                var7 = var7.bind(var9)(var2);
                var2 = var7.reverse;
                var7 = var2.bind(var7)();
                var2 = var7.length;
                if (!(var2 > var8)) {
                    _fun54973_ip = 737;
                    continue _fun54973
                }
            case 578:
                var9 = var10.push;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = var19[var6];
                var14 = var18.bind(var3)(var2);
                var13 = var14.createHeaderResult;
                var2 = 23;
                var15 = var19[var2];
                var15 = var18.bind(var3)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var2 = var19[var2];
                var2 = var18.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["61Df13"];
                var2 = var15.bind(var17)(var2);
                var2 = var13.bind(var14)(var2);
                var2 = var9.bind(var10)(var2);
                var2 = _closure1_slot39;
                var9 = var2.bind(var3)(var7);
                var7 = var9.bind(var3)();
                var2 = var7.done;
                if (var2) {
                    _fun54973_ip = 737;
                    continue _fun54973
                }
            case 686:
                var13 = var7.value;
                var14 = var11.add;
                var2 = var13.record;
                var2 = var2.id;
                var2 = var14.bind(var11)(var2);
                var2 = var10.push;
                var2 = var2.bind(var10)(var13);
                var13 = var9.bind(var3)();
                var2 = var13.done;
                var7 = var13;
                if (!var2) {
                    _fun54973_ip = 686;
                    continue _fun54973
                }
            case 737:
                var7 = var10;
                if (!(var12 != var16)) {
                    _fun54973_ip = 964;
                    continue _fun54973
                }
            case 747:
                var9 = _closure1_slot14;
                var2 = var9.getSelectableChannelIds;
                var13 = var2.bind(var9)(var16);
                var9 = var13.filter;
                var2 = function(arg0) { // Environment: var0
                    _fun54981: for (var _fun54981_ip = 0;;) switch (_fun54981_ip) {
                        case 0:
                            var7 = arg0;
                            var2 = _closure1_slot11;
                            var0 = var2.getChannel;
                            var3 = var0.bind(var2)(var7);
                            var4 = null;
                            var0 = var4 == var3;
                            if (var0) {
                                _fun54981_ip = 40;
                                continue _fun54981
                            }
                        case 29:
                            var2 = _closure2_slot0;
                            var0 = var7 === var2;
                        case 40:
                            if (var0) {
                                _fun54981_ip = 57;
                                continue _fun54981
                            }
                        case 43:
                            var5 = _closure1_slot35;
                            var2 = var5.includes;
                            var0 = var2.bind(var5)(var7);
                        case 57:
                            if (var0) {
                                _fun54981_ip = 77;
                                continue _fun54981
                            }
                        case 60:
                            var5 = _closure2_slot2;
                            var2 = var5.has;
                            var0 = var2.bind(var5)(var7);
                        case 77:
                            if (var0) {
                                _fun54981_ip = 101;
                                continue _fun54981
                            }
                        case 80:
                            var6 = _closure1_slot22;
                            var5 = var6.isChannelMuted;
                            var2 = var3.guild_id;
                            var0 = var5.bind(var6)(var2, var7);
                        case 101:
                            if (var0) {
                                _fun54981_ip = 147;
                                continue _fun54981
                            }
                        case 104:
                            var2 = var3.parent_id;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun54981_ip = 144;
                                continue _fun54981
                            }
                        case 117:
                            var7 = _closure1_slot22;
                            var6 = var7.isChannelMuted;
                            var5 = var3.guild_id;
                            var4 = var3.parent_id;
                            var2 = var6.bind(var7)(var5, var4);
                        case 144:
                            var0 = var2;
                        case 147:
                            var0 = !var0;
                            if (!var0) {
                                _fun54981_ip = 186;
                                continue _fun54981
                            }
                        case 153:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 25;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.getHasImportantUnread;
                            var0 = var1.bind(var2)(var3);
                        case 186:
                            return var0;
                    }
                };
                var13 = var9.bind(var13)(var2);
                var9 = var13.map;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot41;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var13 = var9.bind(var13)(var2);
                var9 = var13.filter;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    return var0;
                };
                var9 = var9.bind(var13)(var2);
                var _closure2_slot3 = var9;
                var14 = var5.Object;
                var13 = var14.values;
                var15 = _closure1_slot8;
                var2 = var15.getActiveJoinedUnreadThreadsForGuild;
                var2 = var2.bind(var15)(var16);
                var14 = var13.bind(var14)(var2);
                var13 = var14.forEach;
                var2 = function(arg0) { // Environment: var0
                    _fun54984: for (var _fun54984_ip = 0;;) switch (_fun54984_ip) {
                        case 0:
                            var7 = arg0;
                            var0 = undefined;
                            var1 = null;
                            for (var4 in var7)
                                case 21: {
                                    case 30: var13 = var4;
                                    var9 = _closure1_slot41;
                                    var11 = var9.bind(var0)(var13);
                                    var9 = var1 == var11;
                                    if (var9) {
                                        _fun54984_ip = 74;
                                        continue _fun54984
                                    }
                                    case 49: var14 = _closure2_slot2;
                                    var12 = var14.has;
                                    var10 = var11.record;
                                    var10 = var10.id;
                                    var9 = var12.bind(var14)(var10);
                                    case 74: if (var9) {
                                        _fun54984_ip = 91;
                                        continue _fun54984
                                    }
                                    case 77: var12 = _closure1_slot35;
                                    var10 = var12.includes;
                                    var9 = var10.bind(var12)(var13);
                                    case 91: if (var9) {
                                        _fun54984_ip = 21;
                                        continue _fun54984
                                    }
                                    case 94: var10 = _closure2_slot3;
                                    var9 = var10.push;
                                    var9 = var9.bind(var10)(var11);
                                    _fun54984_ip = 21;
                                    continue _fun54984;
                                }
                        case 110:
                            return var0;
                    }
                };
                var2 = var13.bind(var14)(var2);
                var2 = var9.length;
                var7 = var10;
                if (!(var2 > var8)) {
                    _fun54973_ip = 964;
                    continue _fun54973
                }
            case 869:
                var13 = var10.push;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = var19[var6];
                var15 = var18.bind(var3)(var2);
                var14 = var15.createHeaderResult;
                var2 = 23;
                var16 = var19[var2];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var2 = var19[var2];
                var2 = var18.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.ieCAhD;
                var2 = var16.bind(var17)(var2);
                var2 = var14.bind(var15)(var2);
                var2 = var13.bind(var10)(var2);
                var2 = var10.concat;
                var7 = var2.bind(var10)(var9);
            case 964:
                var2 = var7.length;
                var9 = var2 > var8;
                var2 = 7;
                if (!var9) {
                    _fun54973_ip = 982;
                    continue _fun54973
                }
            case 979:
                var2 = 3;
            case 982:
                var13 = var5.Math;
                var10 = var13.min;
                var5 = _closure1_slot35;
                var5 = var5.length;
                var9 = 1;
                var2 = var2 + var9;
                var10 = var10.bind(var13)(var2, var5);
                var5 = new Array(0);
                var13 = var9 < var10;
                var2 = var9;
                if (!var13) {
                    _fun54973_ip = 1215;
                    continue _fun54973
                }
            case 1032:
                var14 = _closure1_slot41;
                var13 = _closure1_slot35;
                var13 = var13[var2];
                var13 = var14.bind(var3)(var13);
                if (!(var12 != var13)) {
                    _fun54973_ip = 1204;
                    continue _fun54973
                }
            case 1056:
                var15 = var13.type;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var6];
                var14 = var16.bind(var3)(var14);
                var14 = var14.AutocompleterResultTypes;
                var14 = var14.TEXT_CHANNEL;
                var14 = var15 !== var14;
                if (!var14) {
                    _fun54973_ip = 1135;
                    continue _fun54973
                }
            case 1097:
                var16 = var13.type;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var6];
                var15 = var17.bind(var3)(var15);
                var15 = var15.AutocompleterResultTypes;
                var15 = var15.VOICE_CHANNEL;
                var14 = var16 !== var15;
            case 1135:
                if (var14) {
                    _fun54973_ip = 1170;
                    continue _fun54973
                }
            case 1138:
                var18 = _closure1_slot18;
                var17 = var18.can;
                var15 = _closure1_slot24;
                var16 = var15.VIEW_CHANNEL;
                var15 = var13.record;
                var14 = var17.bind(var18)(var16, var15);
            case 1170:
                if (!var14) {
                    _fun54973_ip = 1204;
                    continue _fun54973
                }
            case 1173:
                var14 = var5.push;
                var14 = var14.bind(var5)(var13);
                var14 = var11.add;
                var13 = var13.record;
                var13 = var13.id;
                var13 = var14.bind(var11)(var13);
            case 1204:
                var2 = var2 + var9;
                if (var2 < var10) {
                    _fun54973_ip = 1032;
                    continue _fun54973
                }
            case 1215:
                var10 = var5.length;
                var2 = var7;
                if (!(var10 > var8)) {
                    _fun54973_ip = 1355;
                    continue _fun54973
                }
            case 1230:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = var15[var6];
                var11 = var14.bind(var3)(var6);
                var10 = var11.createHeaderResult;
                var6 = 23;
                var12 = var15[var6];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var6 = var15[var6];
                var6 = var14.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["80lOZ1"];
                var6 = var12.bind(var13)(var6);
                var10 = var10.bind(var11)(var6);
                var6 = new Array(1);
                var6[0] = var10;
                var22 = var6;
                var21 = var5;
                var20 = var9;
                var5 = arraySpread(var22, var21, var20);
                var5 = new Array(0);
                var22 = var5;
                var21 = var6;
                var20 = 0;
                var20 = arraySpread(var22, var21, var20);
                var22 = var5;
                var21 = var7;
                var6 = arraySpread(var22, var21, var20);
                var2 = var5;
            case 1355:
                return var2;
            case 1357:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 22;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.queryChannels;
                var2 = {
                    'query': '',
                    'guildId': null,
                    'limit': 100,
                    'fuzzy': true,
                    'filter': null,
                    'type': null,
                    'allowEmptyQueries': true
                };
                var8 = _closure1_slot21;
                var7 = var8.getGuildId;
                var7 = var7.bind(var8)();
                var2.guildId = var7;
                var7 = function() {
                    var0 = true;
                    return var0;
                };
                var2.filter = var7;
                var7 = _closure1_slot15;
                var2.type = var7;
                var2 = var5.bind(var6)(var2);
                return var2;
            case 1445:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 22;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.queryChannels;
                var2 = {
                    'query': '',
                    'guildId': null,
                    'limit': 100,
                    'fuzzy': true,
                    'allowEmptyQueries': true
                };
                var8 = _closure1_slot21;
                var7 = var8.getGuildId;
                var7 = var7.bind(var8)();
                var2.guildId = var7;
                var2 = var5.bind(var6)(var2);
                return var2;
            case 1512:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 22;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.queryGuilds;
                var2 = {
                    'query': '',
                    'limit': 100,
                    'fuzzy': true
                };
                var2 = var5.bind(var6)(var2);
                return var2;
            case 1559:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 22;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.queryApplications;
                var2 = {
                    'query': '',
                    'limit': 100,
                    'fuzzy': true
                };
                var2 = var5.bind(var6)(var2);
                return var2;
            case 1606:
                var5 = _closure1_slot10;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                var _closure2_slot1 = var2;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 22;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.getRecentlyTalked;
                var1 = 100;
                var2 = var2.bind(var3)(var4, var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.record;
                    var1 = var0.id;
                    var0 = _closure2_slot1;
                    var0 = var1 !== var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var0 = function arg0, arg1() {
        _fun54985: for (var _fun54985_ip = 0;;) switch (_fun54985_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var6 = _closure1_slot30;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 19;
                var5 = var0[var4];
                var0 = undefined;
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.USER;
                if (!(var5 !== var6)) {
                    _fun54985_ip = 592;
                    continue _fun54985
                }
            case 54:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.TEXT_CHANNEL;
                if (!(var5 !== var6)) {
                    _fun54985_ip = 495;
                    continue _fun54985
                }
            case 90:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.VOICE_CHANNEL;
                if (!(var5 !== var6)) {
                    _fun54985_ip = 398;
                    continue _fun54985
                }
            case 126:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.GUILD;
                if (!(var5 !== var6)) {
                    _fun54985_ip = 301;
                    continue _fun54985
                }
            case 162:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.APPLICATION;
                if (!(var5 !== var6)) {
                    _fun54985_ip = 204;
                    continue _fun54985
                }
            case 195:
                _closure1_slot31 = var3;
                _fun54985_ip = 797;
                continue _fun54985;
            case 204:
                var6 = var3.unshift;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var4];
                var8 = var11.bind(var0)(var5);
                var7 = var8.createHeaderResult;
                var5 = 23;
                var9 = var12[var5];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var12[var5];
                var5 = var11.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.VwK1ld;
                var5 = var9.bind(var10)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var6.bind(var3)(var5);
                _closure1_slot31 = var3;
                _fun54985_ip = 797;
                continue _fun54985;
            case 301:
                var6 = var3.unshift;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var4];
                var8 = var11.bind(var0)(var5);
                var7 = var8.createHeaderResult;
                var5 = 23;
                var9 = var12[var5];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var12[var5];
                var5 = var11.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.olADPs;
                var5 = var9.bind(var10)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var6.bind(var3)(var5);
                _closure1_slot31 = var3;
                _fun54985_ip = 797;
                continue _fun54985;
            case 398:
                var6 = var3.unshift;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var4];
                var8 = var11.bind(var0)(var5);
                var7 = var8.createHeaderResult;
                var5 = 23;
                var9 = var12[var5];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var12[var5];
                var5 = var11.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.zUoI5C;
                var5 = var9.bind(var10)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var6.bind(var3)(var5);
                _closure1_slot31 = var3;
                _fun54985_ip = 797;
                continue _fun54985;
            case 495:
                var6 = var3.unshift;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var4];
                var8 = var11.bind(var0)(var5);
                var7 = var8.createHeaderResult;
                var5 = 23;
                var9 = var12[var5];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var12[var5];
                var5 = var11.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.W26k4V;
                var5 = var9.bind(var10)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var6.bind(var3)(var5);
                _closure1_slot31 = var3;
                _fun54985_ip = 797;
                continue _fun54985;
            case 592:
                var7 = _closure1_slot17;
                var6 = var7.getGuild;
                var8 = _closure1_slot21;
                var5 = var8.getGuildId;
                var5 = var5.bind(var8)();
                var13 = var6.bind(var7)(var5);
                var6 = var3.unshift;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var8 = var7.bind(var0)(var5);
                var7 = var8.createHeaderResult;
                var5 = null;
                if (!(var5 == var13)) {
                    _fun54985_ip = 714;
                    continue _fun54985
                }
            case 655:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 23;
                var9 = var12[var5];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var12[var5];
                var5 = var11.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.XFYW1o;
                var5 = var9.bind(var10)(var5);
                _fun54985_ip = 783;
                continue _fun54985;
            case 714:
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 23;
                var11 = var14[var9];
                var11 = var10.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var9 = var14[var9];
                var9 = var10.bind(var0)(var9);
                var9 = var9.t;
                var10 = var9.FREzQs;
                var9 = {};
                var13 = var13.name;
                var9.name = var13;
                var5 = var11.bind(var12)(var10, var9);
            case 783:
                var5 = var7.bind(var8)(var5);
                var5 = var6.bind(var3)(var5);
                _closure1_slot31 = var3;
            case 797:
                var3 = _closure1_slot32;
                if (!(var2 === var3)) {
                    _fun54985_ip = 938;
                    continue _fun54985
                }
            case 808:
                var5 = _closure1_slot31;
                var3 = _closure1_slot27;
                var5 = var5[var3];
                var3 = null;
                var3 = var3 != var5;
                if (!var3) {
                    _fun54985_ip = 867;
                    continue _fun54985
                }
            case 829:
                var6 = var5.type;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.HEADER;
                var3 = var6 === var5;
            case 867:
                if (!var3) {
                    _fun54985_ip = 1039;
                    continue _fun54985
                }
            case 873:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var6 = var3[var4];
                var8 = var5.bind(var0)(var6);
                var7 = var8.findNextSelectedResult;
                var3 = var3[var4];
                var3 = var5.bind(var0)(var3);
                var3 = var3.FindResultDirections;
                var6 = var3.DOWN;
                var5 = _closure1_slot27;
                var3 = _closure1_slot31;
                var3 = var7.bind(var8)(var6, var5, var3);
                _closure1_slot27 = var3;
                _fun54985_ip = 1039;
                continue _fun54985;
            case 938:
                _closure1_slot32 = var2;
                var3 = global;
                var6 = var3.Math;
                var5 = var6.max;
                var3 = var2.length;
                var2 = _closure1_slot33;
                var2 = var5.bind(var6)(var3, var2);
                _closure1_slot33 = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = var2[var4];
                var6 = var3.bind(var0)(var5);
                var5 = var6.findNextSelectedResult;
                var2 = var2[var4];
                var2 = var3.bind(var0)(var2);
                var2 = var2.FindResultDirections;
                var4 = var2.DOWN;
                var3 = _closure1_slot31;
                var2 = -1;
                var2 = var5.bind(var6)(var4, var2, var3);
                _closure1_slot27 = var2;
            case 1039:
                var2 = _closure1_slot37;
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var10 = function arg0() {
        _fun54986: for (var _fun54986_ip = 0;;) switch (_fun54986_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.query;
                var2 = var0.queryMode;
                var0 = var1.trim;
                var3 = var0.bind(var1)();
                var4 = _closure1_slot21;
                var0 = var4.getGuildId;
                var5 = var0.bind(var4)();
                var4 = null;
                var6 = var4 != var5;
                var0 = undefined;
                var10 = undefined;
                if (!var6) {
                    _fun54986_ip = 58;
                    continue _fun54986
                }
            case 55:
                var10 = var5;
            case 58:
                var6 = global;
                var8 = var6.Set;
                var7 = _closure1_slot10;
                var5 = var7.getId;
                var9 = var5.bind(var7)();
                var5 = var6.HermesInternal;
                var7 = var5.concat;
                var5 = 'user:';
                var7 = var7.bind(var5)(var9);
                var5 = new Array(1);
                var5[0] = var7;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var17 = var7;
                var16 = var5;
                var5 = new var17[var8](var16, var15);
                var5 = var5 instanceof Object ? var5 : var7;
                if (!(var4 != var10)) {
                    _fun54986_ip = 169;
                    continue _fun54986
                }
            case 137:
                var8 = var5.add;
                var7 = var6.HermesInternal;
                var9 = var7.concat;
                var7 = 'guild:';
                var7 = var9.bind(var7)(var10);
                var7 = var8.bind(var5)(var7);
            case 169:
                var7 = var6.Date;
                var6 = var7.now;
                var6 = var6.bind(var7)();
                _closure1_slot36 = var6;
                var6 = _closure1_slot25;
                if (!(var4 == var6)) {
                    _fun54986_ip = 294;
                    continue _fun54986
                }
            case 196:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 19;
                var6 = var8[var6];
                var11 = var7.bind(var0)(var6);
                var10 = _closure1_slot44;
                var9 = _closure1_slot26;
                var6 = var4 != var2;
                var8 = 5;
                if (!var6) {
                    _fun54986_ip = 237;
                    continue _fun54986
                }
            case 234:
                var8 = 100;
            case 237:
                var7 = {
                    'frecencyBoosters': true,
                    'blacklist': null,
                    'allowSnowflake': true
                };
                var7.blacklist = var5;
                var5 = var11.prototype;
                var6 = Object.create(var5, {
                    constructor: {
                        value: var11
                    }
                });
                var12 = 100;
                var17 = var6;
                var16 = var10;
                var15 = var9;
                var14 = var8;
                var13 = var7;
                var5 = new var17[var11](var16, var15, var14, var13, var12, var11);
                var5 = var5 instanceof Object ? var5 : var6;
                _fun54986_ip = 298;
                continue _fun54986;
            case 294:
                var5 = _closure1_slot25;
            case 298:
                var _closure1_slot25 = var5;
                _closure1_slot32 = var4;
                var4 = var3.length;
                _closure1_slot33 = var4;
                _closure1_slot30 = var2;
                var2 = _closure1_slot25;
                var1 = var2.search;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun54987: for (var _fun54987_ip = 0;;) switch (_fun54987_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = var1.trim;
                var2 = var0.bind(var1)();
                var0 = var2.trim;
                var1 = var0.bind(var2)();
                var0 = '';
                if (!(var0 === var1)) {
                    _fun54987_ip = 47;
                    continue _fun54987
                }
            case 34:
                var1 = _closure1_slot42;
                var0 = undefined;
                var3 = var1.bind(var0)();
            case 47:
                var8 = _closure1_slot34;
                var5 = var3.length;
                var4 = var8.length;
                var1 = false;
                if (!(var5 === var4)) {
                    _fun54987_ip = 139;
                    continue _fun54987
                }
            case 70:
                var4 = var3.length;
                var6 = 0;
                var4 = var6 < var4;
                var1 = true;
                if (!var4) {
                    _fun54987_ip = 139;
                    continue _fun54987
                }
            case 86:
                var9 = var3[var6];
                var4 = var8[var6];
                var9 = var9.record;
                var9 = var9.id;
                var4 = var4.record;
                var4 = var4.id;
                var1 = false;
                if (!(var9 === var4)) {
                    _fun54987_ip = 139;
                    continue _fun54987
                }
            case 122:
                var6 = var6 + 1;
                var4 = var3.length;
                var4 = var6 < var4;
                var1 = true;
                if (var4) {
                    _fun54987_ip = 86;
                    continue _fun54987
                }
            case 139:
                if (var1) {
                    _fun54987_ip = 158;
                    continue _fun54987
                }
            case 142:
                _closure1_slot34 = var3;
                var1 = _closure1_slot43;
                var0 = undefined;
                var0 = var1.bind(var0)(var3, var2);
            case 158:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var7 = function() {
        _fun54988: for (var _fun54988_ip = 0;;) switch (_fun54988_ip) {
            case 0:
                var0 = null;
                _closure1_slot32 = var0;
                var2 = 0;
                _closure1_slot33 = var2;
                var2 = new Array(0);
                _closure1_slot34 = var2;
                var2 = _closure1_slot25;
                if (!(var0 != var2)) {
                    _fun54988_ip = 49;
                    continue _fun54988
                }
            case 31:
                var3 = _closure1_slot25;
                var2 = var3.destroy;
                var2 = var2.bind(var3)();
                _closure1_slot25 = var0;
            case 49:
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var12 = var0.Object;
    var9 = var12.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var12)(var2, var0, var3);
    var9 = 0;
    var3 = var6[var9];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var12 = var6[var3];
    var12 = var8.bind(var0)(var12);
    var _closure1_slot12 = var12;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot13 = var3;
    var3 = 10;
    var12 = var6[var3];
    var12 = var8.bind(var0)(var12);
    var _closure1_slot14 = var12;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 15;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 16;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 17;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot22 = var3;
    var3 = 18;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var12 = var3.CHANNEL_NOTICE_SHOW_DELAY;
    var _closure1_slot23 = var12;
    var3 = var3.Permissions;
    var _closure1_slot24 = var3;
    var12 = 19;
    var3 = var6[var12];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AutocompleterResultTypes;
    var13 = var3.USER;
    var3 = new Array(7);
    var3[0] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.GROUP_DM;
    var3[1] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.TEXT_CHANNEL;
    var3[2] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.GUILD;
    var3[3] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.APPLICATION;
    var3[4] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.LINK;
    var3[5] = var13;
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.AutocompleterResultTypes;
    var12 = var12.IN_APP_NAVIGATION;
    var3[6] = var12;
    var _closure1_slot26 = var3;
    var _closure1_slot27 = var9;
    var3 = false;
    var _closure1_slot28 = var3;
    var _closure1_slot29 = var3;
    var3 = null;
    var _closure1_slot30 = var3;
    var12 = new Array(0);
    var _closure1_slot31 = var12;
    var _closure1_slot32 = var3;
    var _closure1_slot33 = var9;
    var9 = new Array(0);
    var _closure1_slot34 = var9;
    var9 = new Array(0);
    var _closure1_slot35 = var9;
    var _closure1_slot36 = var3;
    var3 = 27;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var9 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun54990: for (var _fun54990_ip = 0;;) switch (_fun54990_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot38;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54990_ip = 69;
                        continue _fun54990
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54990_ip = 105;
                    continue _fun54990;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun54991: for (var _fun54991_ip = 0;;) switch (_fun54991_ip) {
                case 0:
                    var4 = arg0;
                    var5 = this;
                    var16 = var5.waitFor;
                    var29 = _closure1_slot8;
                    var28 = _closure1_slot10;
                    var27 = _closure1_slot11;
                    var26 = _closure1_slot12;
                    var25 = _closure1_slot14;
                    var24 = _closure1_slot16;
                    var23 = _closure1_slot17;
                    var22 = _closure1_slot18;
                    var21 = _closure1_slot19;
                    var20 = _closure1_slot20;
                    var19 = _closure1_slot21;
                    var0 = _closure1_slot9;
                    var17 = _closure1_slot22;
                    var30 = var5;
                    var18 = var0;
                    var1 = var30[var16](var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
                    var3 = var5.syncWith;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = function() { // Environment: var0
                        var0 = true;
                        return var0;
                    };
                    var0 = var3.bind(var5)(var1, var0);
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var5 = var1.Storage;
                    var3 = var5.get;
                    var1 = 'seenQSTutorial';
                    var1 = var3.bind(var5)(var1);
                    if (var1) {
                        _fun54991_ip = 153;
                        continue _fun54991
                    }
                case 151:
                    var1 = false;
                case 153:
                    _closure1_slot28 = var1;
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun54991_ip = 174;
                        continue _fun54991
                    }
                case 168:
                    var1 = var4.channelHistory;
                case 174:
                    if (!(var3 == var1)) {
                        _fun54991_ip = 182;
                        continue _fun54991
                    }
                case 178:
                    var1 = new Array(0);
                case 182:
                    _closure1_slot35 = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var1 = _closure1_slot35;
            var0.channelHistory = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isOpen';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot25;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getResultTotals';
        var4.key = var6;
        var6 = function arg0() {
            _fun54995: for (var _fun54995_ip = 0;;) switch (_fun54995_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var0 = _closure1_slot25;
                    var1 = null;
                    var6 = var1 == var0;
                    var5 = 0;
                    var0 = 0;
                    if (var6) {
                        _fun54995_ip = 92;
                        continue _fun54995
                    }
                case 29:
                    if (!(var1 != var4)) {
                        _fun54995_ip = 62;
                        continue _fun54995
                    }
                case 33:
                    var1 = _closure1_slot25;
                    var6 = var1.results;
                    var4 = var6.reduce;
                    var1 = function(arg0, arg1) { // Environment: var2
                        _fun54997: for (var _fun54997_ip = 0;;) switch (_fun54997_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = arg1;
                                var3 = var0.type;
                                var1 = _closure3_slot0;
                                var0 = var2;
                                if (!(var3 === var1)) {
                                    _fun54997_ip = 32;
                                    continue _fun54997
                                }
                            case 25:
                                var1 = 1;
                                var0 = var2 + var1;
                            case 32:
                                return var0;
                        }
                    };
                    var1 = var4.bind(var6)(var1, var5);
                    _fun54995_ip = 89;
                    continue _fun54995;
                case 62:
                    var3 = _closure1_slot25;
                    var4 = var3.results;
                    var3 = var4.reduce;
                    var2 = function(arg0, arg1) { // Environment: var2
                        _fun54996: for (var _fun54996_ip = 0;;) switch (_fun54996_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = arg1;
                                var3 = var0.type;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 19;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var4.bind(var0)(var1);
                                var0 = var0.AutocompleterResultTypes;
                                var1 = var0.HEADER;
                                var0 = var2;
                                if (!(var3 !== var1)) {
                                    _fun54996_ip = 62;
                                    continue _fun54996
                                }
                            case 55:
                                var1 = 1;
                                var0 = var2 + var1;
                            case 62:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var5);
                case 89:
                    var0 = var1;
                case 92:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'channelNoticePredicate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun54998: for (var _fun54998_ip = 0;;) switch (_fun54998_ip) {
                case 0:
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var1 = var0.bind(var1)();
                    var0 = arg1;
                    var2 = var1 - var0;
                    var1 = _closure1_slot23;
                    var1 = var2 >= var1;
                    var0 = _closure1_slot29;
                    if (!var0) {
                        _fun54998_ip = 45;
                        continue _fun54998
                    }
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getFrequentGuilds';
        var4.key = var6;
        var6 = function() {
            _fun54999: for (var _fun54999_ip = 0;;) switch (_fun54999_ip) {
                case 0:
                    var2 = _closure1_slot25;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun54999_ip = 39;
                        continue _fun54999
                    }
                case 16:
                    var4 = _closure1_slot25;
                    var3 = var4.queryGuilds;
                    var2 = '';
                    var1 = 100;
                    var0 = var3.bind(var4)(var2, var1);
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getFrequentGuildsLength';
        var4.key = var6;
        var6 = function() {
            _fun55000: for (var _fun55000_ip = 0;;) switch (_fun55000_ip) {
                case 0:
                    var2 = _closure1_slot25;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = 0;
                    if (!var2) {
                        _fun55000_ip = 46;
                        continue _fun55000
                    }
                case 18:
                    var4 = _closure1_slot25;
                    var3 = var4.queryGuilds;
                    var2 = '';
                    var1 = 100;
                    var1 = var3.bind(var4)(var2, var1);
                    var0 = var1.length;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getChannelHistory';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot35;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getLastShowTimestamp';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot36;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getProps';
        var4.key = var6;
        var5 = function() {
            _fun55003: for (var _fun55003_ip = 0;;) switch (_fun55003_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure1_slot9;
                    var2 = var2.theme;
                    var0.theme = var2;
                    var3 = _closure1_slot25;
                    var2 = null;
                    var3 = var2 != var3;
                    var2 = '';
                    if (!var3) {
                        _fun55003_ip = 47;
                        continue _fun55003
                    }
                case 37:
                    var3 = _closure1_slot25;
                    var2 = var3.query;
                case 47:
                    var0.query = var2;
                    var2 = _closure1_slot30;
                    var0.queryMode = var2;
                    var2 = _closure1_slot31;
                    var0.results = var2;
                    var2 = _closure1_slot27;
                    var0.selectedIndex = var2;
                    var2 = _closure1_slot28;
                    var0.seenTutorial = var2;
                    var1 = _closure1_slot33;
                    var0.maxQueryLength = var1;
                    return var0;
            }
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var3.bind(var0)(var9);
    var3 = 'QuickSwitcherStore';
    var9.displayName = var3;
    var9.persistKey = var3;
    var3 = 28;
    var3 = var6[var3];
    var16 = var8.bind(var0)(var3);
    var3 = {};
    var3.CONNECTION_OPEN = var11;
    var3.CONNECTION_OPEN_SUPPLEMENTAL = var11;
    var3.QUICKSWITCHER_SHOW = var10;
    var3.SHOW_ACTION_SHEET_QUICK_SWITCHER = var10;
    var3.QUICKSWITCHER_HIDE = var7;
    var3.OVERLAY_SET_INPUT_LOCKED = var7;
    var3.HIDE_ACTION_SHEET_QUICK_SWITCHER = var7;
    var7 = function arg0() {
        _fun55004: for (var _fun55004_ip = 0;;) switch (_fun55004_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.query;
                var5 = var0.queryMode;
                var0 = var1.trim;
                var4 = var0.bind(var1)();
                var0 = _closure1_slot25;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun55004_ip = 416;
                    continue _fun55004
                }
            case 41:
                var0 = _closure1_slot30;
                if (!(var0 !== var5)) {
                    _fun55004_ip = 312;
                    continue _fun55004
                }
            case 52:
                var6 = _closure1_slot25;
                var2 = var6.setResultTypes;
                if (!(var3 == var5)) {
                    _fun55004_ip = 72;
                    continue _fun55004
                }
            case 66:
                var0 = _closure1_slot26;
                _fun55004_ip = 83;
                continue _fun55004;
            case 72:
                var7 = new Array(1);
                var7[0] = var5;
                var0 = var7;
            case 83:
                var0 = var2.bind(var6)(var0);
                var6 = _closure1_slot25;
                var2 = var6.setLimit;
                var7 = var3 != var5;
                var0 = 5;
                if (!var7) {
                    _fun55004_ip = 111;
                    continue _fun55004
                }
            case 108:
                var0 = 100;
            case 111:
                var0 = var2.bind(var6)(var0);
                var2 = _closure1_slot21;
                var0 = var2.getGuildId;
                var6 = var0.bind(var2)();
                var7 = var3 != var6;
                var2 = undefined;
                var0 = undefined;
                if (!var7) {
                    _fun55004_ip = 144;
                    continue _fun55004
                }
            case 141:
                var0 = var6;
            case 144:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 19;
                var6 = var6[var8];
                var6 = var7.bind(var2)(var6);
                var6 = var6.AutocompleterResultTypes;
                var6 = var6.USER;
                if (!(var5 === var6)) {
                    _fun55004_ip = 184;
                    continue _fun55004
                }
            case 180:
                if (!(var3 == var0)) {
                    _fun55004_ip = 276;
                    continue _fun55004
                }
            case 184:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var7.bind(var2)(var6);
                var6 = var6.AutocompleterResultTypes;
                var6 = var6.VOICE_CHANNEL;
                if (!(var5 !== var6)) {
                    _fun55004_ip = 249;
                    continue _fun55004
                }
            case 217:
                var8 = _closure1_slot25;
                var7 = var8.setOptions;
                var6 = {};
                var6.userFilters = var3;
                var6.voiceChannelGuildFilter = var2;
                var2 = true;
                var2 = var7.bind(var8)(var6, var2);
                _fun55004_ip = 312;
                continue _fun55004;
            case 249:
                var8 = _closure1_slot25;
                var7 = var8.setOptions;
                var6 = {};
                var6.voiceChannelGuildFilter = var3;
                var2 = true;
                var2 = var7.bind(var8)(var6, var2);
                _fun55004_ip = 312;
                continue _fun55004;
            case 276:
                var7 = _closure1_slot25;
                var6 = var7.setOptions;
                var2 = {};
                var8 = {};
                var8.guild = var0;
                var0 = true;
                var8.friends = var0;
                var2.userFilters = var8;
                var0 = var6.bind(var7)(var2, var0);
            case 312:
                _closure1_slot30 = var5;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 19;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var6.bind(var0)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.USER;
                if (!(var5 !== var2)) {
                    _fun55004_ip = 372;
                    continue _fun55004
                }
            case 354:
                var5 = _closure1_slot25;
                var2 = var5.search;
                var2 = var2.bind(var5)(var4, var0);
                _fun55004_ip = 414;
                continue _fun55004;
            case 372:
                var5 = _closure1_slot21;
                var2 = var5.getGuildId;
                var2 = var2.bind(var5)();
                var5 = var3 != var2;
                var3 = null;
                if (!var5) {
                    _fun55004_ip = 398;
                    continue _fun55004
                }
            case 395:
                var3 = var2;
            case 398:
                var2 = _closure1_slot25;
                var1 = var2.search;
                var1 = var1.bind(var2)(var4, var3);
            case 414:
                return var0;
            case 416:
                var0 = false;
                return var0;
        }
    };
    var3.QUICKSWITCHER_SEARCH = var7;
    var7 = function arg0() {
        var0 = arg0;
        var1 = var0.selectedIndex;
        _closure1_slot27 = var1;
        var0 = undefined;
        return var0;
    };
    var3.QUICKSWITCHER_SELECT = var7;
    var7 = function() {
        _fun55006: for (var _fun55006_ip = 0;;) switch (_fun55006_ip) {
            case 0:
                var1 = _closure1_slot28;
                if (var1) {
                    _fun55006_ip = 63;
                    continue _fun55006
                }
            case 10:
                var4 = true;
                _closure1_slot28 = var4;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 26;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.Storage;
                var2 = var3.set;
                var1 = 'seenQSTutorial';
                var1 = var2.bind(var3)(var1, var4);
                return var0;
            case 63:
                var0 = false;
                return var0;
        }
    };
    var3.QUICKSWITCHER_SWITCH_TO = var7;
    var7 = function arg0() {
        _fun55007: for (var _fun55007_ip = 0;;) switch (_fun55007_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var _closure2_slot0 = var3;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun55007_ip = 87;
                    continue _fun55007
                }
            case 20:
                var4 = _closure1_slot35;
                var2 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var2 = var2.bind(var4)(var1);
                _closure1_slot35 = var2;
                var1 = var2.unshift;
                var1 = var1.bind(var2)(var3);
                var1 = _closure1_slot35;
                var2 = var1.length;
                var1 = 8;
                if (!(var2 > var1)) {
                    _fun55007_ip = 83;
                    continue _fun55007
                }
            case 73:
                var0 = _closure1_slot35;
                var0.length = var1;
            case 83:
                var0 = undefined;
                return var0;
            case 87:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_SELECT = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var17 = var7;
    var15 = var3;
    var3 = new var17[var9](var16, var15, var14);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot37 = var3;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quickswitcher/QuickSwitcherStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.generateResultFromId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4550, 3196, 1216, 1372, 4000, 1671, 1681, 1410, 3091, 3947, 1670, 3213, 4303, 660, 6645, 22, 6653, 5595, 1234, 1304, 6654, 587, 566, 806, 2]);