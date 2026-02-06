// stores/SelectedChannelStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function() {
        _fun18881: for (var _fun18881_ip = 0;;) switch (_fun18881_ip) {
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
                _fun18881_ip = 74;
                continue _fun18881;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot34 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0, arg1() {
        _fun18884: for (var _fun18884_ip = 0;;) switch (_fun18884_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun18884_ip = 46;
                    continue _fun18884
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun18884_ip = 55;
                    continue _fun18884
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun18884_ip = 343;
                    continue _fun18884
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun18884_ip = 323;
                    continue _fun18884
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun18884_ip = 283;
                    continue _fun18884
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun18884_ip = 270;
                    continue _fun18884
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
                    _fun18884_ip = 163;
                    continue _fun18884
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun18884_ip = 179;
                    continue _fun18884
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun18884_ip = 249;
                    continue _fun18884
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun18884_ip = 249;
                    continue _fun18884
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun18884_ip = 234;
                    continue _fun18884
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun18884_ip = 247;
                    continue _fun18884
                }
            case 234:
                var8 = _closure1_slot36;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun18884_ip = 265;
                continue _fun18884;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun18884_ip = 283;
                continue _fun18884;
            case 270:
                var6 = _closure1_slot36;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun18884_ip = 323;
                    continue _fun18884
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
                    _fun18884_ip = 330;
                    continue _fun18884
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun18885: for (var _fun18885_ip = 0;;) switch (_fun18885_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun18885_ip = 56;
                                continue _fun18885
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
                            _fun18885_ip = 67;
                            continue _fun18885;
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
    var _closure1_slot35 = var0;
    var0 = function arg0, arg1() {
        _fun18886: for (var _fun18886_ip = 0;;) switch (_fun18886_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun18886_ip = 23;
                    continue _fun18886
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun18886_ip = 33;
                    continue _fun18886
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
                    _fun18886_ip = 70;
                    continue _fun18886
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun18886_ip = 55;
                    continue _fun18886
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        var0 = global;
        var2 = var0.String;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = function() {
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var0 = 15;
        var1 = var9[var0];
        var0 = undefined;
        var1 = var8.bind(var0)(var1);
        var4 = var1.Storage;
        var3 = var4.set;
        var2 = _closure1_slot29;
        var1 = {};
        var6 = _closure1_slot24;
        var1.selectedChannelId = var6;
        var6 = _closure1_slot26;
        var1.selectedVoiceChannelId = var6;
        var6 = _closure1_slot25;
        var1.lastChannelFollowingDestination = var6;
        var6 = _closure1_slot27;
        var1.lastConnectedTime = var6;
        var6 = _closure1_slot30;
        var1.selectedChannelIds = var6;
        var6 = _closure1_slot32;
        var1.mostRecentSelectedTextChannelIds = var6;
        var11 = _closure1_slot1;
        var10 = 16;
        var6 = var9[var10];
        var7 = var11.bind(var0)(var6);
        var6 = _closure1_slot30;
        var7 = var7.bind(var0)(var6);
        var6 = var7.values;
        var7 = var6.bind(var7)();
        var6 = var7.concat;
        var10 = var9[var10];
        var11 = var11.bind(var0)(var10);
        var10 = var11.values;
        var5 = _closure1_slot32;
        var5 = var10.bind(var11)(var5);
        var7 = var6.bind(var7)(var5);
        var6 = var7.filter;
        var5 = 17;
        var5 = var9[var5];
        var5 = var8.bind(var0)(var5);
        var5 = var5.isNotNullish;
        var6 = var6.bind(var7)(var5);
        var5 = var6.uniq;
        var7 = var5.bind(var6)();
        var6 = var7.filter;
        var5 = function(arg0) { // Environment: var5
            _fun18889: for (var _fun18889_ip = 0;;) switch (_fun18889_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot12;
                    var0 = var1.getBasicChannel;
                    var2 = var0.bind(var1)(var4);
                    var1 = _closure1_slot33;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var4);
                    if (var0) {
                        _fun18889_ip = 69;
                        continue _fun18889
                    }
                case 38:
                    var1 = null;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun18889_ip = 66;
                        continue _fun18889
                    }
                case 47:
                    var4 = _closure1_slot10;
                    var3 = var4.has;
                    var2 = var2.type;
                    var1 = var3.bind(var4)(var2);
                case 66:
                    var0 = var1;
                case 69:
                    return var0;
            }
        };
        var6 = var6.bind(var7)(var5);
        var5 = var6.value;
        var5 = var5.bind(var6)();
        var1.knownThreadIds = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        _fun18890: for (var _fun18890_ip = 0;;) switch (_fun18890_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun18890_ip = 31;
                    continue _fun18890
                }
            case 9:
                var2 = _closure1_slot13;
                var0 = var2.getDefaultChannel;
                var0 = var0.bind(var2)(var3);
                if (!(var1 == var0)) {
                    _fun18890_ip = 35;
                    continue _fun18890
                }
            case 31:
                var1 = undefined;
                return var1;
            case 35:
                var0 = var0.id;
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function arg0, arg1() {
        _fun18891: for (var _fun18891_ip = 0;;) switch (_fun18891_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun18891_ip = 122;
                    continue _fun18891
                }
            case 12:
                if (!(var0 != var2)) {
                    _fun18891_ip = 122;
                    continue _fun18891
                }
            case 16:
                var4 = _closure1_slot32;
                var4 = var4[var3];
                if (!(var4 !== var2)) {
                    _fun18891_ip = 118;
                    continue _fun18891
                }
            case 31:
                var5 = _closure1_slot12;
                var4 = var5.getChannel;
                var6 = var4.bind(var5)(var2);
                var4 = var0 != var6;
                if (!var4) {
                    _fun18891_ip = 68;
                    continue _fun18891
                }
            case 52:
                var8 = _closure1_slot9;
                var7 = var6.type;
                var5 = undefined;
                var4 = var8.bind(var5)(var7);
            case 68:
                var5 = var0 == var6;
                var0 = undefined;
                if (var5) {
                    _fun18891_ip = 87;
                    continue _fun18891
                }
            case 77:
                var5 = var6.getGuildId;
                var0 = var5.bind(var6)();
            case 87:
                var4 = !var4;
                if (var4) {
                    _fun18891_ip = 100;
                    continue _fun18891
                }
            case 93:
                var0 = var0 === var3;
                var4 = !var0;
            case 100:
                var0 = !var4;
                if (var4) {
                    _fun18891_ip = 116;
                    continue _fun18891
                }
            case 106:
                var1 = _closure1_slot32;
                var1[var3] = var2;
                var0 = true;
            case 116:
                return var0;
            case 118:
                var0 = false;
                return var0;
            case 122:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function() {
        _fun18892: for (var _fun18892_ip = 0;;) switch (_fun18892_ip) {
            case 0:
                var1 = false;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot14;
                var1 = var3.getGuildsArray;
                var4 = var1.bind(var3)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 16;
                var7 = var6[var1];
                var3 = undefined;
                var10 = var5.bind(var3)(var7);
                var9 = var10.each;
                var8 = _closure1_slot30;
                var7 = function(arg0, arg1) { // Environment: var0
                    _fun18893: for (var _fun18893_ip = 0;;) switch (_fun18893_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = arg1;
                            var0 = null;
                            var0 = var0 != var5;
                            if (!var0) {
                                _fun18893_ip = 78;
                                continue _fun18893
                            }
                        case 15:
                            var4 = _closure1_slot12;
                            var2 = var4.hasChannel;
                            var2 = var2.bind(var4)(var5);
                            if (var2) {
                                _fun18893_ip = 44;
                                continue _fun18893
                            }
                        case 36:
                            var4 = _closure1_slot24;
                            var2 = var5 === var4;
                        case 44:
                            if (var2) {
                                _fun18893_ip = 61;
                                continue _fun18893
                            }
                        case 47:
                            var6 = _closure1_slot33;
                            var4 = var6.has;
                            var2 = var4.bind(var6)(var5);
                        case 61:
                            if (var2) {
                                _fun18893_ip = 75;
                                continue _fun18893
                            }
                        case 64:
                            var4 = _closure1_slot21;
                            var3 = undefined;
                            var2 = var4.bind(var3)(var5);
                        case 75:
                            var0 = var2;
                        case 78:
                            if (var0) {
                                _fun18893_ip = 109;
                                continue _fun18893
                            }
                        case 81:
                            var2 = _closure1_slot30;
                            var2 = delete var2[var1];
                            var0 = _closure1_slot31;
                            var0 = delete var0[var1];
                            var0 = true;
                            _closure2_slot0 = var0;
                        case 109:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var9.bind(var10)(var8, var7);
                var1 = var6[var1];
                var6 = var5.bind(var3)(var1);
                var5 = var6.each;
                var3 = _closure1_slot32;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun18894: for (var _fun18894_ip = 0;;) switch (_fun18894_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = null;
                            var0 = var0 != var4;
                            if (!var0) {
                                _fun18894_ip = 50;
                                continue _fun18894
                            }
                        case 12:
                            var3 = _closure1_slot12;
                            var1 = var3.hasChannel;
                            var1 = var1.bind(var3)(var4);
                            if (var1) {
                                _fun18894_ip = 47;
                                continue _fun18894
                            }
                        case 33:
                            var3 = _closure1_slot33;
                            var2 = var3.has;
                            var1 = var2.bind(var3)(var4);
                        case 47:
                            var0 = var1;
                        case 50:
                            if (var0) {
                                _fun18894_ip = 76;
                                continue _fun18894
                            }
                        case 53:
                            var1 = _closure1_slot32;
                            var0 = arg1;
                            var0 = delete var1[var0];
                            var0 = true;
                            _closure2_slot0 = var0;
                        case 76:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var3, var1);
                var3 = var4.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun18895: for (var _fun18895_ip = 0;;) switch (_fun18895_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure1_slot30;
                            var2 = var0.id;
                            var3 = var3[var2];
                            var4 = _closure1_slot32;
                            var2 = var0.id;
                            var4 = var4[var2];
                            var2 = null;
                            if (!(var2 == var4)) {
                                _fun18895_ip = 55;
                                continue _fun18895
                            }
                        case 38:
                            var2 = _closure1_slot40;
                            var1 = var0.id;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1, var3);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var3 = _closure1_slot27;
                var1 = null;
                var3 = var1 != var3;
                if (!var3) {
                    _fun18892_ip = 161;
                    continue _fun18892
                }
            case 126:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var5 = var4.bind(var5)();
                var4 = _closure1_slot27;
                var5 = var5 - var4;
                var4 = 300000;
                var3 = var5 >= var4;
            case 161:
                if (!var3) {
                    _fun18892_ip = 174;
                    continue _fun18892
                }
            case 164:
                var _closure1_slot26 = var1;
                var1 = true;
                _closure2_slot0 = var1;
            case 174:
                var0 = _closure2_slot0;
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function arg0, arg1() {
        _fun18896: for (var _fun18896_ip = 0;;) switch (_fun18896_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var2 = _closure1_slot33;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var4);
                var2 = null;
                var5 = var6;
                if (!(var2 == var5)) {
                    _fun18896_ip = 75;
                    continue _fun18896
                }
            case 32:
                var3 = _closure1_slot17;
                var1 = var3.getGuildId;
                var1 = var1.bind(var3)();
                var7 = _closure1_slot30;
                var8 = _closure1_slot37;
                var3 = undefined;
                var3 = var8.bind(var3)(var1);
                var3 = var7[var3];
                var5 = var6;
                if (!(var3 === var4)) {
                    _fun18896_ip = 75;
                    continue _fun18896
                }
            case 72:
                var5 = var1;
            case 75:
                var3 = _closure1_slot14;
                var1 = var3.getGuild;
                var1 = var1.bind(var3)(var5);
                var3 = _closure1_slot26;
                var1 = false;
                if (!(var3 === var4)) {
                    _fun18896_ip = 105;
                    continue _fun18896
                }
            case 99:
                _closure1_slot26 = var2;
                var1 = true;
            case 105:
                if (!var1) {
                    _fun18896_ip = 118;
                    continue _fun18896
                }
            case 108:
                var1 = _closure1_slot38;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 118:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.type;
        var0 = var0.channel;
        var4 = _closure1_slot42;
        var3 = var0.id;
        var2 = var0.guild_id;
        var1 = var0.parent_id;
        var0 = undefined;
        var1 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var9 = var3.isGuildTextChannelType;
    var _closure1_slot9 = var9;
    var3 = var3.THREAD_CHANNEL_TYPES;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var9 = var3.ChannelTypes;
    var _closure1_slot18 = var9;
    var9 = var3.ME;
    var _closure1_slot19 = var9;
    var9 = var3.Permissions;
    var _closure1_slot20 = var9;
    var3 = var3.Routes;
    var3 = 14;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.isGuildHomeChannel;
    var _closure1_slot21 = var3;
    var3 = 'SelectedChannelStore';
    var _closure1_slot29 = var3;
    var9 = {};
    var _closure1_slot30 = var9;
    var9 = {};
    var _closure1_slot31 = var9;
    var9 = {};
    var _closure1_slot32 = var9;
    var8 = var8.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot33 = var8;
    var8 = 19;
    var8 = var6[var8];
    var8 = var7.bind(var0)(var8);
    var9 = var8.Store;
    var8 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun18899: for (var _fun18899_ip = 0;;) switch (_fun18899_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot34;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun18899_ip = 69;
                        continue _fun18899
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun18899_ip = 105;
                    continue _fun18899;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
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
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            _fun18900: for (var _fun18900_ip = 0;;) switch (_fun18900_ip) {
                case 0:
                    var9 = this;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 15;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.Storage;
                    var3 = var4.get;
                    var2 = _closure1_slot29;
                    var2 = var3.bind(var4)(var2);
                    var4 = null;
                    if (!(var4 == var2)) {
                        _fun18900_ip = 113;
                        continue _fun18900
                    }
                case 54:
                    var3 = {};
                    var5 = _closure1_slot24;
                    var3.selectedChannelId = var5;
                    var5 = _closure1_slot26;
                    var3.selectedVoiceChannelId = var5;
                    var5 = _closure1_slot25;
                    var3.lastChannelFollowingDestination = var5;
                    var5 = _closure1_slot27;
                    var3.lastConnectedTime = var5;
                    var5 = _closure1_slot30;
                    var3.selectedChannelIds = var5;
                    var5 = _closure1_slot32;
                    var3.mostRecentSelectedTextChannelIds = var5;
                    var2 = var3;
                case 113:
                    var3 = var2.knownThreadIds;
                    if (!(var4 != var3)) {
                        _fun18900_ip = 161;
                        continue _fun18900
                    }
                case 123:
                    var3 = global;
                    var6 = var3.Set;
                    var16 = var2.knownThreadIds;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var17 = var5;
                    var3 = new var17[var6](var16, var15);
                    var3 = var3 instanceof Object ? var3 : var5;
                    _closure1_slot33 = var3;
                case 161:
                    var3 = var2.selectedVoiceChannelId;
                    _closure1_slot26 = var3;
                    var3 = var2.lastChannelFollowingDestination;
                    var _closure1_slot25 = var3;
                    var3 = var2.lastConnectedTime;
                    var _closure1_slot27 = var3;
                    var3 = var2.mostRecentSelectedTextChannelIds;
                    if (!(var4 == var3)) {
                        _fun18900_ip = 203;
                        continue _fun18900
                    }
                case 201:
                    var3 = {};
                case 203:
                    _closure1_slot32 = var3;
                    var3 = var2.selectedChannelIds;
                    if (!(var4 != var3)) {
                        _fun18900_ip = 227;
                        continue _fun18900
                    }
                case 217:
                    var2 = var2.selectedChannelIds;
                    _closure1_slot30 = var2;
                case 227:
                    var3 = var9.mustEmitChanges;
                    var2 = function(arg0) { // Environment: var2
                        _fun18901: for (var _fun18901_ip = 0;;) switch (_fun18901_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.type;
                                var0 = 'CONNECTION_OPEN';
                                var0 = var0 !== var2;
                                if (!var0) {
                                    _fun18901_ip = 32;
                                    continue _fun18901
                                }
                            case 19:
                                var2 = var1.type;
                                var1 = 'VOICE_STATE_UPDATES';
                                var0 = var1 !== var2;
                            case 32:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var9)(var2);
                    var8 = var9.waitFor;
                    var16 = _closure1_slot11;
                    var15 = _closure1_slot12;
                    var14 = _closure1_slot13;
                    var13 = _closure1_slot14;
                    var12 = _closure1_slot15;
                    var11 = _closure1_slot16;
                    var10 = _closure1_slot17;
                    var17 = var9;
                    var1 = var17[var8](var16, var15, var14, var13, var12, var11, var10, var9);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getChannelId';
        var4.key = var6;
        var6 = function arg0() {
            _fun18902: for (var _fun18902_ip = 0;;) switch (_fun18902_ip) {
                case 0:
                    var7 = arg0;
                    var0 = arguments[1];
                    var4 = undefined;
                    if (!(var0 === var4)) {
                        _fun18902_ip = 14;
                        continue _fun18902
                    }
                case 12:
                    var0 = true;
                case 14:
                    var3 = _closure1_slot37;
                    var5 = _closure1_slot19;
                    var6 = null;
                    var1 = null;
                    if (!(var7 !== var5)) {
                        _fun18902_ip = 66;
                        continue _fun18902
                    }
                case 33:
                    if (!(var6 == var7)) {
                        _fun18902_ip = 51;
                        continue _fun18902
                    }
                case 37:
                    var8 = _closure1_slot17;
                    var5 = var8.getGuildId;
                    var7 = var5.bind(var8)();
                case 51:
                    var8 = var6 != var7;
                    var5 = null;
                    if (!var8) {
                        _fun18902_ip = 63;
                        continue _fun18902
                    }
                case 60:
                    var5 = var7;
                case 63:
                    var1 = var5;
                case 66:
                    var3 = var3.bind(var4)(var1);
                    var1 = _closure1_slot30;
                    var5 = var1[var3];
                    if (var0) {
                        _fun18902_ip = 87;
                        continue _fun18902
                    }
                case 82:
                    var0 = var5;
                    _fun18902_ip = 106;
                    continue _fun18902;
                case 87:
                    var1 = var5;
                    if (!(var6 == var5)) {
                        _fun18902_ip = 103;
                        continue _fun18902
                    }
                case 94:
                    var2 = _closure1_slot39;
                    var1 = var2.bind(var4)(var3);
                case 103:
                    var0 = var1;
                case 106:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getVoiceChannelId';
        var4.key = var6;
        var6 = function() {
            _fun18903: for (var _fun18903_ip = 0;;) switch (_fun18903_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = var2.isSupported;
                    var2 = var0.bind(var2)();
                    var0 = null;
                    if (!var2) {
                        _fun18903_ip = 26;
                        continue _fun18903
                    }
                case 22:
                    var0 = _closure1_slot26;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getMostRecentSelectedTextChannelId';
        var4.key = var6;
        var6 = function arg0() {
            _fun18904: for (var _fun18904_ip = 0;;) switch (_fun18904_ip) {
                case 0:
                    var3 = arg0;
                    var1 = null;
                    var2 = var1 == var3;
                    var0 = null;
                    if (var2) {
                        _fun18904_ip = 40;
                        continue _fun18904
                    }
                case 14:
                    var2 = _closure1_slot32;
                    var2 = var2[var3];
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun18904_ip = 37;
                        continue _fun18904
                    }
                case 34:
                    var1 = var2;
                case 37:
                    var0 = var1;
                case 40:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getCurrentlySelectedChannelId';
        var4.key = var6;
        var6 = function arg0() {
            _fun18905: for (var _fun18905_ip = 0;;) switch (_fun18905_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun18905_ip = 18;
                        continue _fun18905
                    }
                case 9:
                    var0 = _closure1_slot24;
                    _fun18905_ip = 29;
                    continue _fun18905;
                case 18:
                    var1 = _closure1_slot30;
                    var0 = var1[var2];
                case 29:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getLastSelectedChannelId';
        var4.key = var6;
        var6 = function arg0() {
            _fun18906: for (var _fun18906_ip = 0;;) switch (_fun18906_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun18906_ip = 18;
                        continue _fun18906
                    }
                case 9:
                    var0 = _closure1_slot23;
                    _fun18906_ip = 29;
                    continue _fun18906;
                case 18:
                    var1 = _closure1_slot31;
                    var0 = var1[var2];
                case 29:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getLastSelectedChannels';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot31;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getLastChannelFollowingDestination';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var8.bind(var0)(var9);
    var8.displayName = var3;
    var3 = 20;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function arg0() {
        _fun18909: for (var _fun18909_ip = 0;;) switch (_fun18909_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.sessionId;
                var _closure1_slot22 = var0;
                var2 = _closure1_slot26;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun18909_ip = 124;
                    continue _fun18909
                }
            case 26:
                var4 = _closure1_slot12;
                var3 = var4.getChannel;
                var2 = _closure1_slot26;
                var6 = var3.bind(var4)(var2);
                var2 = var0 != var6;
                if (!var2) {
                    _fun18909_ip = 117;
                    continue _fun18909
                }
            case 51:
                var5 = _closure1_slot16;
                var4 = var5.can;
                var8 = _closure1_slot2;
                var7 = _closure1_slot3;
                var3 = 18;
                var7 = var7[var3];
                var3 = undefined;
                var9 = var8.bind(var3)(var7);
                var8 = var9.combine;
                var3 = _closure1_slot20;
                var7 = var3.VIEW_CHANNEL;
                var3 = var3.CONNECT;
                var3 = var8.bind(var9)(var7, var3);
                var2 = var4.bind(var5)(var3, var6);
            case 117:
                if (var2) {
                    _fun18909_ip = 124;
                    continue _fun18909
                }
            case 120:
                _closure1_slot26 = var0;
            case 124:
                var2 = _closure1_slot41;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun18909_ip = 145;
                    continue _fun18909
                }
            case 137:
                var1 = _closure1_slot38;
                var1 = var1.bind(var0)();
            case 145:
                return var0;
        }
    };
    var3.CONNECTION_OPEN = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.sessionId;
        _closure1_slot22 = var2;
        var2 = var0.selectedVoiceChannelId;
        _closure1_slot26 = var2;
        var2 = {};
        _closure1_slot30 = var2;
        var2 = {};
        _closure1_slot31 = var2;
        var2 = var0.selectedChannelId;
        var _closure1_slot24 = var2;
        var4 = _closure1_slot30;
        var3 = var0.selectedGuildId;
        var2 = var0.selectedChannelId;
        var4[var3] = var2;
        var4 = _closure1_slot40;
        var3 = var0.selectedGuildId;
        var2 = _closure1_slot24;
        var0 = undefined;
        var2 = var4.bind(var0)(var3, var2);
        var1 = _closure1_slot41;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.OVERLAY_INITIALIZE = var9;
    var9 = function() {
        var0 = null;
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_CLOSED = var9;
    var9 = function arg0() {
        _fun18912: for (var _fun18912_ip = 0;;) switch (_fun18912_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var4 = var0.channelId;
                var0 = undefined;
                if (!(var0 !== var3)) {
                    _fun18912_ip = 165;
                    continue _fun18912
                }
            case 22:
                var5 = null;
                if (!(var5 == var4)) {
                    _fun18912_ip = 40;
                    continue _fun18912
                }
            case 28:
                var1 = _closure1_slot39;
                var4 = var1.bind(var0)(var3);
            case 40:
                var2 = _closure1_slot24;
                var2 = var5 != var2;
                if (!var2) {
                    _fun18912_ip = 62;
                    continue _fun18912
                }
            case 54:
                var5 = _closure1_slot24;
                var2 = var4 !== var5;
            case 62:
                if (!var2) {
                    _fun18912_ip = 73;
                    continue _fun18912
                }
            case 65:
                var2 = _closure1_slot24;
                var _closure1_slot23 = var2;
            case 73:
                _closure1_slot24 = var4;
                var2 = _closure1_slot40;
                var2 = var2.bind(var0)(var3, var4);
                var5 = _closure1_slot30;
                var2 = _closure1_slot37;
                var2 = var2.bind(var0)(var3);
                var2 = var5[var2];
                if (!(var2 !== var4)) {
                    _fun18912_ip = 155;
                    continue _fun18912
                }
            case 108:
                var6 = _closure1_slot31;
                var2 = _closure1_slot37;
                var5 = var2.bind(var0)(var3);
                var7 = _closure1_slot30;
                var4 = var2.bind(var0)(var3);
                var4 = var7[var4];
                var6[var5] = var4;
                var4 = _closure1_slot30;
                var3 = var2.bind(var0)(var3);
                var2 = _closure1_slot24;
                var4[var3] = var2;
            case 155:
                var1 = _closure1_slot38;
                var1 = var1.bind(var0)();
                return var0;
            case 165:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_SELECT = var9;
    var9 = function arg0() {
        _fun18913: for (var _fun18913_ip = 0;;) switch (_fun18913_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var3 = var1.type;
                var2 = _closure1_slot18;
                var2 = var2.GUILD_ANNOUNCEMENT;
                if (!(var2 !== var3)) {
                    _fun18913_ip = 44;
                    continue _fun18913
                }
            case 30:
                var2 = _closure1_slot18;
                var2 = var2.GUILD_TEXT;
                if (!(var2 === var3)) {
                    _fun18913_ip = 102;
                    continue _fun18913
                }
            case 44:
                var2 = var1.guild_id;
                var3 = null;
                var4 = var3 != var2;
                if (!var4) {
                    _fun18913_ip = 70;
                    continue _fun18913
                }
            case 58:
                var5 = _closure1_slot32;
                var5 = var5[var2];
                var4 = var3 == var5;
            case 70:
                if (!var4) {
                    _fun18913_ip = 86;
                    continue _fun18913
                }
            case 73:
                var4 = _closure1_slot32;
                var1 = var1.id;
                var4[var2] = var1;
            case 86:
                if (!(var3 != var2)) {
                    _fun18913_ip = 102;
                    continue _fun18913
                }
            case 90:
                var1 = _closure1_slot30;
                var1 = var1[var2];
                if (!(var3 != var1)) {
                    _fun18913_ip = 106;
                    continue _fun18913
                }
            case 102:
                var1 = false;
                return var1;
            case 106:
                var1 = _closure1_slot30;
                var3 = _closure1_slot39;
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var1[var2] = var0;
                var0 = true;
                return var0;
        }
    };
    var3.CHANNEL_CREATE = var9;
    var3.CHANNEL_DELETE = var4;
    var9 = function arg0() {
        _fun18914: for (var _fun18914_ip = 0;;) switch (_fun18914_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channels;
                var1 = _closure1_slot35;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun18914_ip = 114;
                    continue _fun18914
                }
            case 35:
                var1 = var2.value;
                var5 = var1.isScheduledForDeletion;
                var5 = var5.bind(var1)();
                if (!var5) {
                    _fun18914_ip = 99;
                    continue _fun18914
                }
            case 53:
                var7 = _closure1_slot10;
                var6 = var7.has;
                var5 = var1.type;
                var5 = var6.bind(var7)(var5);
                var7 = _closure1_slot42;
                var6 = var1.id;
                var5 = var1.guild_id;
                var1 = var1.parent_id;
                var1 = var7.bind(var0)(var6, var5, var1);
            case 99:
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun18914_ip = 35;
                    continue _fun18914
                }
            case 114:
                return var0;
        }
    };
    var3.CHANNEL_UPDATES = var9;
    var3.THREAD_DELETE = var4;
    var4 = function arg0() {
        _fun18915: for (var _fun18915_ip = 0;;) switch (_fun18915_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guild;
                var3 = _closure1_slot30;
                var1 = var2.id;
                var3 = var3[var1];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun18915_ip = 82;
                    continue _fun18915
                }
            case 30:
                var4 = _closure1_slot39;
                var3 = var2.id;
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var5 = _closure1_slot30;
                var3 = var2.id;
                var5[var3] = var4;
                var3 = _closure1_slot40;
                var2 = var2.id;
                var2 = var3.bind(var1)(var2, var4);
                var0 = _closure1_slot38;
                var0 = var0.bind(var1)();
            case 82:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_CREATE = var4;
    var4 = function arg0() {
        _fun18916: for (var _fun18916_ip = 0;;) switch (_fun18916_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var2 = var0.id;
                var1 = var0.unavailable;
                var4 = _closure1_slot26;
                var3 = _closure1_slot30;
                var3 = var3[var2];
                if (!(var4 === var3)) {
                    _fun18916_ip = 44;
                    continue _fun18916
                }
            case 38:
                var3 = null;
                _closure1_slot26 = var3;
            case 44:
                if (var1) {
                    _fun18916_ip = 75;
                    continue _fun18916
                }
            case 47:
                var1 = _closure1_slot32;
                var1 = delete var1[var2];
                var1 = _closure1_slot30;
                var1 = delete var1[var2];
                var1 = _closure1_slot38;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 75:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_DELETE = var4;
    var4 = function arg0() {
        _fun18917: for (var _fun18917_ip = 0;;) switch (_fun18917_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun18917_ip = 115;
                    continue _fun18917
                }
            case 14:
                var5 = _closure1_slot12;
                var4 = var5.getChannel;
                var3 = _closure1_slot26;
                var5 = var4.bind(var5)(var3);
                var6 = var2 == var5;
                var4 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun18917_ip = 51;
                    continue _fun18917
                }
            case 46:
                var3 = var5.guild_id;
            case 51:
                var2 = var2 != var3;
                if (!var2) {
                    _fun18917_ip = 76;
                    continue _fun18917
                }
            case 58:
                var6 = _closure1_slot17;
                var5 = var6.getGuildId;
                var5 = var5.bind(var6)();
                var2 = var3 !== var5;
            case 76:
                if (!var2) {
                    _fun18917_ip = 95;
                    continue _fun18917
                }
            case 79:
                var5 = _closure1_slot30;
                var6 = var5[var3];
                var5 = _closure1_slot26;
                var2 = var6 === var5;
            case 95:
                if (!var2) {
                    _fun18917_ip = 115;
                    continue _fun18917
                }
            case 98:
                var2 = _closure1_slot30;
                var0 = _closure1_slot39;
                var0 = var0.bind(var4)(var3);
                var2[var3] = var0;
            case 115:
                _closure1_slot26 = var1;
                var1 = _closure1_slot38;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var3.VOICE_CHANNEL_SELECT = var4;
    var4 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun18919: for (var _fun18919_ip = 0;;) switch (_fun18919_ip) {
                case 0:
                    var3 = arg1;
                    var2 = var3.sessionId;
                    var1 = _closure1_slot22;
                    if (!(var2 !== var1)) {
                        _fun18919_ip = 207;
                        continue _fun18919
                    }
                case 23:
                    var2 = var3.userId;
                    var4 = _closure1_slot11;
                    var1 = var4.getId;
                    var1 = var1.bind(var4)();
                    if (!(var2 === var1)) {
                        _fun18919_ip = 202;
                        continue _fun18919
                    }
                case 49:
                    var1 = global;
                    var4 = var1.clearInterval;
                    var1 = _closure1_slot28;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var _closure1_slot28 = var2;
                    var1 = 0;
                    _closure1_slot27 = var1;
                    var5 = _closure1_slot12;
                    var4 = var5.getChannel;
                    var1 = _closure1_slot26;
                    var5 = var4.bind(var5)(var1);
                    var1 = null;
                    var4 = var1 == var5;
                    var6 = undefined;
                    if (var4) {
                        _fun18919_ip = 117;
                        continue _fun18919
                    }
                case 107:
                    var4 = var5.getGuildId;
                    var6 = var4.bind(var5)();
                case 117:
                    var7 = _closure1_slot12;
                    var5 = var7.getChannel;
                    var4 = var3.channelId;
                    var7 = var5.bind(var7)(var4);
                    var4 = var1 == var7;
                    var5 = undefined;
                    if (var4) {
                        _fun18919_ip = 155;
                        continue _fun18919
                    }
                case 145:
                    var4 = var7.getGuildId;
                    var5 = var4.bind(var7)();
                case 155:
                    var4 = var1 != var6;
                    if (!var4) {
                        _fun18919_ip = 166;
                        continue _fun18919
                    }
                case 162:
                    var4 = var5 === var6;
                case 166:
                    if (var4) {
                        _fun18919_ip = 182;
                        continue _fun18919
                    }
                case 169:
                    var6 = _closure1_slot26;
                    var5 = var3.channelId;
                    var4 = var6 === var5;
                case 182:
                    if (!var4) {
                        _fun18919_ip = 189;
                        continue _fun18919
                    }
                case 185:
                    _closure1_slot26 = var1;
                case 189:
                    var1 = _closure1_slot38;
                    var1 = var1.bind(var2)();
                    _fun18919_ip = 362;
                    continue _fun18919;
                case 202:
                    var1 = arg0;
                    return var1;
                case 207:
                    var2 = global;
                    var5 = var2.clearInterval;
                    var4 = _closure1_slot28;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var6 = _closure1_slot12;
                    var5 = var6.getChannel;
                    var4 = _closure1_slot26;
                    var7 = var5.bind(var6)(var4);
                    var4 = null;
                    var5 = var4 == var7;
                    var6 = undefined;
                    if (var5) {
                        _fun18919_ip = 265;
                        continue _fun18919
                    }
                case 255:
                    var5 = var7.getGuildId;
                    var6 = var5.bind(var7)();
                case 265:
                    var5 = var3.guildId;
                    var5 = var5 !== var6;
                    if (!var5) {
                        _fun18919_ip = 286;
                        continue _fun18919
                    }
                case 277:
                    var6 = var3.channelId;
                    var5 = var4 == var6;
                case 286:
                    if (var5) {
                        _fun18919_ip = 298;
                        continue _fun18919
                    }
                case 289:
                    var3 = var3.channelId;
                    _closure1_slot26 = var3;
                case 298:
                    var5 = var2.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    _closure1_slot27 = var3;
                    var3 = _closure1_slot26;
                    if (!(var4 != var3)) {
                        _fun18919_ip = 354;
                        continue _fun18919
                    }
                case 325:
                    var4 = var2.setInterval;
                    var3 = function() { // Environment: var2
                        var0 = global;
                        var1 = var0.Date;
                        var0 = var1.now;
                        var1 = var0.bind(var1)();
                        _closure1_slot27 = var1;
                        var1 = _closure1_slot38;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var2 = 60000;
                    var2 = var4.bind(var1)(var3, var2);
                    _closure1_slot28 = var2;
                case 354:
                    var0 = _closure1_slot38;
                    var0 = var0.bind(var1)();
                case 362:
                    var0 = true;
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.VOICE_STATE_UPDATES = var4;
    var4 = function arg0() {
        _fun18921: for (var _fun18921_ip = 0;;) switch (_fun18921_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = var0.guildId;
                var4 = _closure1_slot25;
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun18921_ip = 42;
                    continue _fun18921
                }
            case 29:
                var4 = _closure1_slot25;
                var4 = var4.channelId;
                var1 = var3 === var4;
            case 42:
                if (var1) {
                    _fun18921_ip = 69;
                    continue _fun18921
                }
            case 45:
                var1 = {};
                var1.channelId = var3;
                var1.guildId = var2;
                _closure1_slot25 = var1;
                var1 = _closure1_slot38;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 69:
                var0 = undefined;
                return var0;
        }
    };
    var3.CHANNEL_FOLLOWER_CREATED = var4;
    var4 = function() {
        var0 = {};
        _closure1_slot30 = var0;
        var2 = null;
        _closure1_slot24 = var2;
        var0 = undefined;
        _closure1_slot23 = var0;
        var3 = {};
        _closure1_slot32 = var3;
        var3 = {};
        _closure1_slot25 = var3;
        _closure1_slot26 = var2;
        var3 = _closure1_slot0;
        var4 = _closure1_slot3;
        var2 = 15;
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var3 = var2.Storage;
        var2 = var3.remove;
        var1 = _closure1_slot29;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.LOGOUT = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var8](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/SelectedChannelStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        _fun18923: for (var _fun18923_ip = 0;;) switch (_fun18923_ip) {
            case 0:
                var3 = _closure1_slot12;
                var2 = var3.getMutableBasicGuildChannelsForGuild;
                var1 = arg0;
                var4 = var2.bind(var3)(var1);
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot18;
                    var0 = var0.GUILD_VOICE;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var4, var1);
                var2 = null;
                var2 = var2 == var1;
                if (var2) {
                    _fun18923_ip = 75;
                    continue _fun18923
                }
            case 70:
                var0 = var1.id;
            case 75:
                return var0;
        }
    };
    var2.findFirstVoiceChannelId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1376, 1216, 1372, 1671, 1410, 3478, 3093, 3215, 660, 1379, 587, 22, 1304, 484, 566, 806, 2]);