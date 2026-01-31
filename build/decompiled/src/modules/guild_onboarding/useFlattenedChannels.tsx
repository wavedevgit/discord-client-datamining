// modules/guild_onboarding/useFlattenedChannels.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun43298: for (var _fun43298_ip = 0;;) switch (_fun43298_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun43298_ip = 46;
                    continue _fun43298
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun43298_ip = 55;
                    continue _fun43298
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun43298_ip = 343;
                    continue _fun43298
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun43298_ip = 323;
                    continue _fun43298
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun43298_ip = 283;
                    continue _fun43298
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun43298_ip = 270;
                    continue _fun43298
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
                    _fun43298_ip = 163;
                    continue _fun43298
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun43298_ip = 179;
                    continue _fun43298
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun43298_ip = 249;
                    continue _fun43298
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun43298_ip = 249;
                    continue _fun43298
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun43298_ip = 234;
                    continue _fun43298
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun43298_ip = 247;
                    continue _fun43298
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun43298_ip = 265;
                continue _fun43298;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun43298_ip = 283;
                continue _fun43298;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun43298_ip = 323;
                    continue _fun43298
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
                    _fun43298_ip = 330;
                    continue _fun43298
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun43299: for (var _fun43299_ip = 0;;) switch (_fun43299_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun43299_ip = 56;
                                continue _fun43299
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
                            _fun43299_ip = 67;
                            continue _fun43299;
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
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        _fun43300: for (var _fun43300_ip = 0;;) switch (_fun43300_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun43300_ip = 23;
                    continue _fun43300
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun43300_ip = 33;
                    continue _fun43300
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
                    _fun43300_ip = 70;
                    continue _fun43300
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun43300_ip = 55;
                    continue _fun43300
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var3 = function arg0, arg1, arg2() {
        _fun43301: for (var _fun43301_ip = 0;;) switch (_fun43301_ip) {
            case 0:
                var9 = arg2;
                var0 = arguments[3];
                var1 = arg1;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var9;
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun43301_ip = 27;
                    continue _fun43301
                }
            case 25:
                var0 = false;
            case 27:
                var _closure2_slot2 = var0;
                var _closure2_slot3 = var5;
                var _closure2_slot4 = var5;
                var _closure2_slot5 = var5;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 1;
                var2 = var6[var0];
                var7 = var4.bind(var5)(var2);
                var10 = _closure1_slot3;
                var8 = var10.getMutableGuildChannelsForGuild;
                var2 = arg0;
                var2 = var8.bind(var10)(var2);
                var7 = var7.bind(var5)(var2);
                var2 = var7.values;
                var8 = var2.bind(var7)();
                var7 = var8.groupBy;
                var2 = 'parent_id';
                var7 = var7.bind(var8)(var2);
                var2 = var7.value;
                var2 = var2.bind(var7)();
                _closure2_slot3 = var2;
                var2 = var6[var0];
                var2 = var4.bind(var5)(var2);
                var8 = var2.bind(var5)(var9);
                var7 = var8.map;
                var2 = function(arg0) { // Environment: var3
                    _fun43302: for (var _fun43302_ip = 0;;) switch (_fun43302_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.isCategory;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun43302_ip = 24;
                                continue _fun43302
                            }
                        case 16:
                            var0 = var1.parent_id;
                            _fun43302_ip = 29;
                            continue _fun43302;
                        case 24:
                            var0 = var1.id;
                        case 29:
                            return var0;
                    }
                };
                var11 = var7.bind(var8)(var2);
                var8 = var11.filter;
                var10 = _closure1_slot0;
                var2 = 2;
                var7 = var6[var2];
                var7 = var10.bind(var5)(var7);
                var7 = var7.isNotNullish;
                var8 = var8.bind(var11)(var7);
                var7 = var8.uniq;
                var11 = var7.bind(var8)();
                var8 = var11.map;
                var7 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var11)(var7);
                var7 = var8.filter;
                var2 = var6[var2];
                var2 = var10.bind(var5)(var2);
                var2 = var2.isNotNullish;
                var8 = var7.bind(var8)(var2);
                var7 = var8.sortBy;
                var2 = 'position';
                var7 = var7.bind(var8)(var2);
                var2 = var7.value;
                var2 = var2.bind(var7)();
                var7 = global;
                var10 = var7.Set;
                var8 = var2.map;
                var7 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var13 = var8.bind(var2)(var7);
                var8 = var10.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var10
                    }
                });
                var14 = var8;
                var7 = new var14[var10](var13, var12);
                var7 = var7 instanceof Object ? var7 : var8;
                _closure2_slot4 = var7;
                var8 = var9.filter;
                var7 = function(arg0) { // Environment: var3
                    _fun43305: for (var _fun43305_ip = 0;;) switch (_fun43305_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.isCategory;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun43305_ip = 57;
                                continue _fun43305
                            }
                        case 16:
                            var3 = var2.parent_id;
                            var1 = null;
                            var1 = var1 != var3;
                            if (!var1) {
                                _fun43305_ip = 54;
                                continue _fun43305
                            }
                        case 31:
                            var4 = _closure2_slot4;
                            var3 = var4.has;
                            var2 = var2.parent_id;
                            var1 = var3.bind(var4)(var2);
                        case 54:
                            var0 = var1;
                        case 57:
                            var0 = !var0;
                            return var0;
                    }
                };
                var7 = var8.bind(var9)(var7);
                _closure2_slot5 = var7;
                var0 = var6[var0];
                var6 = var4.bind(var5)(var0);
                var4 = var6.sortBy;
                var0 = function(arg0) { // Environment: var3
                    _fun43306: for (var _fun43306_ip = 0;;) switch (_fun43306_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.isGuildVocal;
                            var0 = var0.bind(var1)();
                            var2 = var1.position;
                            if (var0) {
                                _fun43306_ip = 26;
                                continue _fun43306
                            }
                        case 21:
                            var0 = var2;
                            _fun43306_ip = 36;
                            continue _fun43306;
                        case 26:
                            var1 = 10000;
                            var0 = var2 + var1;
                        case 36:
                            return var0;
                    }
                };
                var0 = var4.bind(var6)(var7, var0);
                _closure2_slot5 = var0;
                var4 = function arg0() {
                    _fun43307: for (var _fun43307_ip = 0;;) switch (_fun43307_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot2;
                            if (var3) {
                                _fun43307_ip = 33;
                                continue _fun43307
                            }
                        case 19:
                            var4 = _closure2_slot5;
                            var3 = var4.push;
                            var3 = var3.bind(var4)(var0);
                        case 33:
                            var5 = _closure2_slot0;
                            var4 = var5.has;
                            var3 = var0.id;
                            var3 = var4.bind(var5)(var3);
                            if (var3) {
                                _fun43307_ip = 76;
                                continue _fun43307
                            }
                        case 55:
                            var5 = _closure2_slot1;
                            var4 = var5.filter;
                            var3 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.parent_id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var5 = var4.bind(var5)(var3);
                            _fun43307_ip = 89;
                            continue _fun43307;
                        case 76:
                            var3 = _closure2_slot3;
                            var0 = var0.id;
                            var5 = var3[var0];
                        case 89:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 1;
                            var3 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.sortBy;
                            var6 = null;
                            if (!(var6 == var5)) {
                                _fun43307_ip = 130;
                                continue _fun43307
                            }
                        case 126:
                            var5 = new Array(0);
                        case 130:
                            var2 = function(arg0) { // Environment: var2
                                _fun43309: for (var _fun43309_ip = 0;;) switch (_fun43309_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.isGuildVocal;
                                        var0 = var0.bind(var1)();
                                        var2 = var1.position;
                                        if (var0) {
                                            _fun43309_ip = 26;
                                            continue _fun43309
                                        }
                                    case 21:
                                        var0 = var2;
                                        _fun43309_ip = 36;
                                        continue _fun43309;
                                    case 26:
                                        var1 = 10000;
                                        var0 = var2 + var1;
                                    case 36:
                                        return var0;
                                }
                            };
                            var8 = var3.bind(var4)(var5, var2);
                            var3 = _closure2_slot5;
                            var2 = var3.push;
                            var1 = new Array(0);
                            var7 = 0;
                            var9 = var1;
                            var4 = arraySpread(var9, var8, var7);
                            var9 = var2;
                            var8 = var1;
                            var7 = var3;
                            var1 = apply(var9, var8, var7);
                            return var0;
                    }
                };
                var1 = _closure1_slot4;
                var3 = var1.bind(var5)(var2);
                var2 = var3.bind(var5)();
                var1 = var2.done;
                if (var1) {
                    _fun43301_ip = 408;
                    continue _fun43301
                }
            case 383:
                var1 = var2.value;
                var1 = var4.bind(var5)(var1);
                var6 = var3.bind(var5)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun43301_ip = 383;
                    continue _fun43301
                }
            case 408:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/useFlattenedChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getFlattenedChannels = var3;
    var1 = function arg0, arg1() {
        _fun43310: for (var _fun43310_ip = 0;;) switch (_fun43310_ip) {
            case 0:
                var1 = arguments[2];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = arg1;
                var _closure2_slot1 = var2;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun43310_ip = 27;
                    continue _fun43310
                }
            case 25:
                var1 = false;
            case 27:
                var _closure2_slot2 = var1;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 3;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useStateFromStoresArray;
                var4 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var0 = global;
                    var2 = var0.Array;
                    var1 = var2.from;
                    var5 = _closure2_slot1;
                    var3 = var1.bind(var2)(var5);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot3;
                        var1 = var2.getChannel;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6 = var2.bind(var3)(var1);
                    var3 = var6.filter;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var2 = var2.isNotNullish;
                    var9 = var3.bind(var6)(var2);
                    var2 = _closure1_slot6;
                    var11 = _closure2_slot0;
                    var8 = _closure2_slot2;
                    var12 = undefined;
                    var10 = var5;
                    var0 = var12[var2](var11, var10, var9, var8, var7);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useFlattenedChannels = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 22, 1304, 566, 2]);