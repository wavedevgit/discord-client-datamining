// uikit-native/ApplicationCommandOptionValueParser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun89987: for (var _fun89987_ip = 0;;) switch (_fun89987_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun89987_ip = 46;
                    continue _fun89987
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun89987_ip = 55;
                    continue _fun89987
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun89987_ip = 345;
                    continue _fun89987
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun89987_ip = 323;
                    continue _fun89987
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun89987_ip = 283;
                    continue _fun89987
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun89987_ip = 270;
                    continue _fun89987
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
                    _fun89987_ip = 163;
                    continue _fun89987
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun89987_ip = 179;
                    continue _fun89987
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun89987_ip = 249;
                    continue _fun89987
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun89987_ip = 249;
                    continue _fun89987
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun89987_ip = 234;
                    continue _fun89987
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun89987_ip = 247;
                    continue _fun89987
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun89987_ip = 265;
                continue _fun89987;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun89987_ip = 283;
                continue _fun89987;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun89987_ip = 323;
                    continue _fun89987
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
                    _fun89987_ip = 330;
                    continue _fun89987
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun89988: for (var _fun89988_ip = 0;;) switch (_fun89988_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun89988_ip = 56;
                                continue _fun89988
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
                            _fun89988_ip = 67;
                            continue _fun89988;
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
    var _closure1_slot16 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun89989: for (var _fun89989_ip = 0;;) switch (_fun89989_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun89989_ip = 23;
                    continue _fun89989
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun89989_ip = 33;
                    continue _fun89989
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
                    _fun89989_ip = 70;
                    continue _fun89989
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun89989_ip = 55;
                    continue _fun89989
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var6 = function(arg0) { // Original name: getUsers, environment: var1
        _fun89990: for (var _fun89990_ip = 0;;) switch (_fun89990_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.getGuildId;
                var7 = var2.bind(var1)();
                var2 = var1.isPrivate;
                var2 = var2.bind(var1)();
                if (var2) {
                    _fun89990_ip = 134;
                    continue _fun89990
                }
            case 28:
                var2 = null;
                if (!(var2 == var7)) {
                    _fun89990_ip = 70;
                    continue _fun89990
                }
            case 34:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = new Array(0);
                var3 = var3.bind(var4)(var2);
                _fun89990_ip = 132;
                continue _fun89990;
            case 70:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 10;
                var4 = var5[var4];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var6 = _closure1_slot8;
                var2 = var6.getMembers;
                var2 = var2.bind(var6)(var7);
                var5 = var4.bind(var5)(var2);
                var4 = var5.map;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.userId;
                    var0 = {};
                    var0.userId = var1;
                    return var0;
                };
                var3 = var4.bind(var5)(var2);
            case 132:
                _fun89990_ip = 187;
                continue _fun89990;
            case 134:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var1 = var1.recipients;
                var4 = var2.bind(var4)(var1);
                var2 = var4.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = {};
                    var1 = arg0;
                    var0.userId = var1;
                    return var0;
                };
                var3 = var2.bind(var4)(var1);
            case 187:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.userId;
                    var1 = _closure1_slot10;
                    var0 = var1.getUser;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.id;
                    var0.id = var2;
                    var1 = var1.tag;
                    var0.text = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot18 = var6;
    var5 = function(arg0) { // Original name: getRoles, environment: var1
        _fun89995: for (var _fun89995_ip = 0;;) switch (_fun89995_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guild_id;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun89995_ip = 20;
                    continue _fun89995
                }
            case 14:
                var2 = new Array(0);
                _fun89995_ip = 38;
                continue _fun89995;
            case 20:
                var1 = _closure1_slot9;
                var0 = var1.getSortedRoles;
                var2 = var0.bind(var1)(var3);
            case 38:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 10;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var3.bind(var1)(var0);
                var2 = var0.bind(var1)(var2);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.id;
                    var1 = var0.name;
                    var0 = {};
                    var0.id = var2;
                    var0.text = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function(arg0, arg1) { // Original name: getChannels, environment: var1
        _fun89997: for (var _fun89997_ip = 0;;) switch (_fun89997_ip) {
            case 0:
                var2 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var6;
                var1 = var2.getGuildId;
                var8 = var1.bind(var2)();
                var _closure2_slot1 = var8;
                var1 = null;
                if (!(var1 != var8)) {
                    _fun89997_ip = 185;
                    continue _fun89997
                }
            case 35:
                var5 = _closure1_slot7;
                var4 = var5.getTextChannelNameDisambiguations;
                var4 = var4.bind(var5)(var8);
                var _closure2_slot2 = var4;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 10;
                var4 = var10[var4];
                var7 = undefined;
                var5 = var5.bind(var7)(var4);
                var9 = _closure1_slot0;
                var4 = 12;
                var4 = var10[var4];
                var4 = var9.bind(var7)(var4);
                var4 = var4.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
                var7 = var5.bind(var7)(var4);
                var5 = var7.flatMap;
                var4 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannels;
                    var0 = _closure2_slot1;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg0;
                    var2 = var1[var0];
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.channel;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var7)(var4);
                var4 = var5.concat;
                var7 = _closure1_slot5;
                var3 = var7.computeAllActiveJoinedThreads;
                var3 = var3.bind(var7)(var8);
                var5 = var4.bind(var5)(var3);
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var0
                    _fun90001: for (var _fun90001_ip = 0;;) switch (_fun90001_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun90001_ip = 38;
                                continue _fun90001
                            }
                        case 16:
                            var3 = _closure2_slot0;
                            var2 = var3.includes;
                            var1 = arg0;
                            var1 = var1.type;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var0
                    _fun90002: for (var _fun90002_ip = 0;;) switch (_fun90002_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = {};
                            var1 = var2.id;
                            var0.id = var1;
                            var4 = _closure1_slot6;
                            var3 = var2.type;
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            if (!var3) {
                                _fun90002_ip = 72;
                                continue _fun90002
                            }
                        case 36:
                            var4 = _closure2_slot2;
                            var3 = var2.id;
                            var4 = var4[var3];
                            var3 = null;
                            var5 = var3 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun90002_ip = 68;
                                continue _fun90002
                            }
                        case 63:
                            var1 = var4.name;
                        case 68:
                            if (!(var3 == var1)) {
                                _fun90002_ip = 77;
                                continue _fun90002
                            }
                        case 72:
                            var1 = var2.name;
                        case 77:
                            var0.text = var1;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                return var3;
            case 185:
                var3 = new Array(0);
                var1 = var1 == var6;
                if (var1) {
                    _fun89997_ip = 211;
                    continue _fun89997
                }
            case 196:
                var5 = var6.includes;
                var4 = var2.type;
                var1 = var5.bind(var6)(var4);
            case 211:
                if (!var1) {
                    _fun89997_ip = 224;
                    continue _fun89997
                }
            case 214:
                var1 = var3.push;
                var1 = var1.bind(var3)(var2);
            case 224:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var2 = var1.bind(var2)(var3);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.id;
                    var1 = var0.name;
                    var0 = {};
                    var0.id = var2;
                    var0.text = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var0 = global;
    var11 = var0.Object;
    var7 = var11.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var11)(var2, var0, var3);
    var0 = 0;
    var3 = var9[var0];
    var0 = undefined;
    var7 = var10.bind(var0)(var3);
    var3 = 1;
    var3 = var9[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var11 = var9[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var11);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var9[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var9[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var3.isGuildSelectableChannelType;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var9[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var9[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var9[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var9[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var9[var3];
    var3 = var8.bind(var0)(var3);
    var10 = var3.MENTION_SENTINEL;
    var _closure1_slot11 = var10;
    var3 = var3.CHANNEL_SENTINEL;
    var _closure1_slot12 = var3;
    var3 = /^@(([^@#:]+)#([0-9]{4}))$/i;
    var _closure1_slot13 = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: matchPrefix, environment: var1
        _fun90003: for (var _fun90003_ip = 0;;) switch (_fun90003_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var3 = arg2;
                var _closure2_slot0 = var1;
                var2 = 0;
                var2 = var4[var2];
                if (!(var2 === var1)) {
                    _fun90003_ip = 109;
                    continue _fun90003
                }
            case 25:
                var2 = var4.substr;
                var1 = var1.length;
                var1 = var2.bind(var4)(var1);
                var _closure2_slot1 = var1;
                var2 = var3.sortBy;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.text;
                    var0 = var0.length;
                    var0 = -var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.text;
                    var1 = _closure2_slot1;
                    var0 = var1.toLowerCase;
                    var1 = var0.bind(var1)();
                    var0 = var2.toLowerCase;
                    var0 = var0.bind(var2)();
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var3 = var0.text;
                    var0 = {};
                    var2 = _closure2_slot0;
                    var2 = var2 + var3;
                    var0.text = var2;
                    var0.id = var1;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = var1.first;
                var0 = var0.bind(var1)();
                return var0;
            case 109:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = function(arg0) { // Original name: ApplicationCommandOptionValueParser, environment: var1
        var2 = this;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot3;
        var3 = _closure1_slot21;
        var0 = undefined;
        var3 = var4.bind(var0)(var2, var3);
        var1 = function(arg0, arg1) { // Environment: var1
            _fun90008: for (var _fun90008_ip = 0;;) switch (_fun90008_ip) {
                case 0:
                    var8 = arg0;
                    var6 = arg1;
                    var1 = var8.trim;
                    var11 = var1.bind(var8)();
                    var _closure3_slot0 = var11;
                    var3 = _closure1_slot18;
                    var1 = _closure2_slot0;
                    var2 = var1.channel;
                    var9 = undefined;
                    var3 = var3.bind(var9)(var2);
                    var _closure3_slot1 = var3;
                    var2 = _closure1_slot19;
                    var1 = var1.channel;
                    var1 = var2.bind(var9)(var1);
                    var _closure3_slot2 = var1;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = {};
                        var5 = var0;
                        var4 = var1;
                        var2 = copyDataProperties(var5, var4);
                        var3 = var1.text;
                        var2 = var3.split;
                        var1 = '#';
                        var2 = var2.bind(var3)(var1);
                        var1 = 0;
                        var2 = var2[var1];
                        var1 = 'text';
                        var0[var1] = var2;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot3 = var1;
                    var5 = function() { // Original name: matchUser, environment: var0
                        _fun90010: for (var _fun90010_ip = 0;;) switch (_fun90010_ip) {
                            case 0:
                                var6 = _closure1_slot14;
                                var5 = _closure1_slot11;
                                var4 = _closure3_slot0;
                                var2 = _closure3_slot1;
                                var0 = undefined;
                                var2 = var6.bind(var0)(var5, var4, var2);
                                var4 = null;
                                var6 = var4 == var2;
                                var5 = undefined;
                                if (var6) {
                                    _fun90010_ip = 47;
                                    continue _fun90010
                                }
                            case 42:
                                var5 = var2.id;
                            case 47:
                                if (!(var4 == var5)) {
                                    _fun90010_ip = 100;
                                    continue _fun90010
                                }
                            case 51:
                                var6 = _closure1_slot14;
                                var5 = _closure1_slot11;
                                var3 = _closure3_slot0;
                                var1 = _closure3_slot3;
                                var3 = var6.bind(var0)(var5, var3, var1);
                                var5 = var4 == var3;
                                var1 = undefined;
                                if (var5) {
                                    _fun90010_ip = 88;
                                    continue _fun90010
                                }
                            case 83:
                                var1 = var3.id;
                            case 88:
                                var1 = var4 != var1;
                                var2 = var3;
                                var0 = undefined;
                                if (!var1) {
                                    _fun90010_ip = 124;
                                    continue _fun90010
                                }
                            case 100:
                                var1 = {};
                                var3 = 'userMention';
                                var1.type = var3;
                                var2 = var2.id;
                                var1.userId = var2;
                                var0 = var1;
                            case 124:
                                return var0;
                        }
                    };
                    var3 = function() { // Original name: matchRole, environment: var0
                        _fun90011: for (var _fun90011_ip = 0;;) switch (_fun90011_ip) {
                            case 0:
                                var5 = _closure1_slot14;
                                var4 = _closure1_slot11;
                                var3 = _closure3_slot0;
                                var2 = _closure3_slot2;
                                var0 = undefined;
                                var2 = var5.bind(var0)(var4, var3, var2);
                                var4 = null;
                                var5 = var4 == var2;
                                var3 = undefined;
                                if (var5) {
                                    _fun90011_ip = 47;
                                    continue _fun90011
                                }
                            case 42:
                                var3 = var2.id;
                            case 47:
                                if (!(var4 == var3)) {
                                    _fun90011_ip = 83;
                                    continue _fun90011
                                }
                            case 51:
                                var3 = _closure3_slot0;
                                var1 = '@everyone';
                                var0 = undefined;
                                if (!(var1 === var3)) {
                                    _fun90011_ip = 81;
                                    continue _fun90011
                                }
                            case 67:
                                var0 = {
                                    'type': 'textMention',
                                    'text': '@everyone'
                                };
                            case 81:
                                _fun90011_ip = 106;
                                continue _fun90011;
                            case 83:
                                var1 = {};
                                var3 = 'roleMention';
                                var1.type = var3;
                                var2 = var2.id;
                                var1.roleId = var2;
                                var0 = var1;
                            case 106:
                                return var0;
                        }
                    };
                    var1 = var6.type;
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var13 = 13;
                    var0 = var0[var13];
                    var0 = var2.bind(var9)(var0);
                    var0 = var0.ApplicationCommandOptionType;
                    var0 = var0.USER;
                    if (!(var1 === var0)) {
                        _fun90008_ip = 223;
                        continue _fun90008
                    }
                case 146:
                    var0 = var5.bind(var9)();
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun90008_ip = 576;
                        continue _fun90008
                    }
                case 159:
                    var10 = _closure1_slot13;
                    var2 = 0;
                    var10.lastIndex = var2;
                    var2 = var10.exec;
                    var15 = var2.bind(var10)(var11);
                    if (!(var1 != var15)) {
                        _fun90008_ip = 223;
                        continue _fun90008
                    }
                case 186:
                    var14 = _closure1_slot10;
                    var12 = var14.findByTag;
                    var2 = 2;
                    var10 = var15[var2];
                    var2 = 3;
                    var2 = var15[var2];
                    var2 = var12.bind(var14)(var10, var2);
                    if (!(var1 == var2)) {
                        _fun90008_ip = 553;
                        continue _fun90008
                    }
                case 223:
                    var10 = var6.type;
                    var12 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var13];
                    var1 = var12.bind(var9)(var1);
                    var1 = var1.ApplicationCommandOptionType;
                    var1 = var1.ROLE;
                    if (!(var10 === var1)) {
                        _fun90008_ip = 274;
                        continue _fun90008
                    }
                case 261:
                    var1 = var3.bind(var9)();
                    var10 = null;
                    if (!(var10 == var1)) {
                        _fun90008_ip = 551;
                        continue _fun90008
                    }
                case 274:
                    var12 = var6.type;
                    var14 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var13];
                    var10 = var14.bind(var9)(var10);
                    var10 = var10.ApplicationCommandOptionType;
                    var10 = var10.CHANNEL;
                    if (!(var12 === var10)) {
                        _fun90008_ip = 370;
                        continue _fun90008
                    }
                case 312:
                    var12 = _closure1_slot14;
                    var10 = _closure1_slot12;
                    var15 = _closure1_slot20;
                    var4 = _closure2_slot0;
                    var14 = var4.channel;
                    var4 = var6.channelTypes;
                    var4 = var15.bind(var9)(var14, var4);
                    var4 = var12.bind(var9)(var10, var11, var4);
                    var12 = null;
                    if (!(var12 != var4)) {
                        _fun90008_ip = 370;
                        continue _fun90008
                    }
                case 358:
                    var10 = var4.id;
                    if (!(var12 == var10)) {
                        _fun90008_ip = 530;
                        continue _fun90008
                    }
                case 370:
                    var10 = var6.type;
                    var12 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var13];
                    var6 = var12.bind(var9)(var6);
                    var6 = var6.ApplicationCommandOptionType;
                    var6 = var6.MENTIONABLE;
                    if (!(var10 === var6)) {
                        _fun90008_ip = 487;
                        continue _fun90008
                    }
                case 408:
                    var3 = var3.bind(var9)();
                    var6 = null;
                    if (!(var6 == var3)) {
                        _fun90008_ip = 528;
                        continue _fun90008
                    }
                case 418:
                    var5 = var5.bind(var9)();
                    if (!(var6 == var5)) {
                        _fun90008_ip = 526;
                        continue _fun90008
                    }
                case 426:
                    var10 = _closure1_slot13;
                    var9 = 0;
                    var10.lastIndex = var9;
                    var9 = var10.exec;
                    var12 = var9.bind(var10)(var11);
                    if (!(var6 != var12)) {
                        _fun90008_ip = 487;
                        continue _fun90008
                    }
                case 453:
                    var11 = _closure1_slot10;
                    var10 = var11.findByTag;
                    var7 = 2;
                    var9 = var12[var7];
                    var7 = 3;
                    var7 = var12[var7];
                    var7 = var10.bind(var11)(var9, var7);
                    if (!(var6 == var7)) {
                        _fun90008_ip = 503;
                        continue _fun90008
                    }
                case 487:
                    var6 = {};
                    var9 = 'text';
                    var6.type = var9;
                    var6.text = var8;
                    return var6;
                case 503:
                    var6 = {};
                    var8 = 'userMention';
                    var6.type = var8;
                    var7 = var7.id;
                    var6.userId = var7;
                    return var6;
                case 526:
                    return var5;
                case 528:
                    return var3;
                case 530:
                    var3 = {};
                    var5 = 'channelMention';
                    var3.type = var5;
                    var4 = var4.id;
                    var3.channelId = var4;
                    return var3;
                case 551:
                    return var1;
                case 553:
                    var1 = {};
                    var3 = 'userMention';
                    var1.type = var3;
                    var2 = var2.id;
                    var1.userId = var2;
                    return var1;
                case 576:
                    return var0;
            }
        };
        var2.parse = var1;
        var1 = arg0;
        var2.channel = var1;
        return var0;
    };
    var _closure1_slot21 = var3;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var7 = 15;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'uikit-native/ApplicationCommandOptionValueParser.tsx';
    var7 = var8.bind(var9)(var7);
    var2.getUsers = var6;
    var2.getRoles = var5;
    var2.getChannels = var4;
    var2.ApplicationCommandOptionValueParser = var3;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun90012: for (var _fun90012_ip = 0;;) switch (_fun90012_ip) {
            case 0:
                var13 = arg0;
                var1 = arg1;
                var12 = arg2;
                var0 = var1.options;
                var11 = null;
                if (!(var11 != var0)) {
                    _fun90012_ip = 295;
                    continue _fun90012
                }
            case 23:
                var0 = {};
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 14;
                var2 = var2[var9];
                var8 = undefined;
                var3 = var3.bind(var8)(var2);
                var2 = var3.createParserState;
                var7 = var2.bind(var3)(var13);
                var2 = _closure1_slot16;
                var1 = var1.options;
                var6 = var2.bind(var8)(var1);
                var2 = var6.bind(var8)();
                var1 = var2.done;
                var5 = 'text';
                var4 = 0;
                var3 = 13;
                if (var1) {
                    _fun90012_ip = 293;
                    continue _fun90012
                }
            case 99:
                var1 = var2.value;
                var14 = var1.name;
                var14 = var12[var14];
                if (!(var11 != var14)) {
                    _fun90012_ip = 275;
                    continue _fun90012
                }
            case 120:
                var15 = var14[var4];
                var15 = var15.type;
                if (!(var5 === var15)) {
                    _fun90012_ip = 266;
                    continue _fun90012
                }
            case 136:
                var16 = var1.type;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var3];
                var15 = var17.bind(var8)(var15);
                var15 = var15.ApplicationCommandOptionType;
                var15 = var15.STRING;
                if (!(var16 === var15)) {
                    _fun90012_ip = 266;
                    continue _fun90012
                }
            case 174:
                var15 = var1.choices;
                if (!(var11 == var15)) {
                    _fun90012_ip = 266;
                    continue _fun90012
                }
            case 184:
                var15 = var1.autocomplete;
                if (var15) {
                    _fun90012_ip = 266;
                    continue _fun90012
                }
            case 193:
                var16 = var1.name;
                var17 = {};
                var17.type = var5;
                var18 = _closure1_slot1;
                var15 = _closure1_slot2;
                var15 = var15[var9];
                var19 = var18.bind(var8)(var15);
                var18 = var19.parse;
                var15 = var14[var4];
                var15 = var15.text;
                var15 = var18.bind(var19)(var13, var15, var7);
                var15 = var15.content;
                var17.text = var15;
                var15 = new Array(1);
                var15[0] = var17;
                var0[var16] = var15;
                _fun90012_ip = 275;
                continue _fun90012;
            case 266:
                var1 = var1.name;
                var0[var1] = var14;
            case 275:
                var14 = var6.bind(var8)();
                var1 = var14.done;
                var2 = var14;
                if (!var1) {
                    _fun90012_ip = 99;
                    continue _fun90012
                }
            case 293:
                return var0;
            case 295:
                var0 = {};
                return var0;
        }
    };
    var2.parseOptionValuesForSend = var3;
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var4 = var1.channel;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot15;
            var3 = _closure2_slot0;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useApplicationCommandOptionValueParser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 31, 4514, 1376, 1662, 1672, 1665, 1613, 6685, 22, 1304, 5553, 1636, 5550, 2]);