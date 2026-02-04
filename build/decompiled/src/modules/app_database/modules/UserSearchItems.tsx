// modules/app_database/modules/UserSearchItems.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun87814: for (var _fun87814_ip = 0;;) switch (_fun87814_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun87814_ip = 46;
                    continue _fun87814
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun87814_ip = 55;
                    continue _fun87814
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun87814_ip = 345;
                    continue _fun87814
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun87814_ip = 323;
                    continue _fun87814
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun87814_ip = 283;
                    continue _fun87814
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun87814_ip = 270;
                    continue _fun87814
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
                    _fun87814_ip = 163;
                    continue _fun87814
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun87814_ip = 179;
                    continue _fun87814
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun87814_ip = 249;
                    continue _fun87814
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun87814_ip = 249;
                    continue _fun87814
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun87814_ip = 234;
                    continue _fun87814
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun87814_ip = 247;
                    continue _fun87814
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun87814_ip = 265;
                continue _fun87814;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun87814_ip = 283;
                continue _fun87814;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun87814_ip = 323;
                    continue _fun87814
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
                    _fun87814_ip = 330;
                    continue _fun87814
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun87815: for (var _fun87815_ip = 0;;) switch (_fun87815_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun87815_ip = 56;
                                continue _fun87815
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
                            _fun87815_ip = 67;
                            continue _fun87815;
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
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun87816: for (var _fun87816_ip = 0;;) switch (_fun87816_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun87816_ip = 23;
                    continue _fun87816
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun87816_ip = 33;
                    continue _fun87816
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
                    _fun87816_ip = 70;
                    continue _fun87816
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun87816_ip = 55;
                    continue _fun87816
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RelationshipTypes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'UserSearchItems';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot11 = var3;
    var3 = false;
    var _closure1_slot12 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot4;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = {};
            var4 = var2.handlePostConnectionOpen;
            var1.POST_CONNECTION_OPEN = var4;
            var3 = function arg0, arg1() {
                var2 = _closure3_slot0;
                var1 = var2.handleWriteCaches;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1.WRITE_CACHES = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'getAll';
        var4.key = var1;
        var6 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun87821: for (var _fun87821_ip = 0;;) switch (_fun87821_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87821_ip = 170;
                            continue _fun87821
                        }
                    case 10:
                        var2 = global;
                        var3 = var2.performance;
                        var1 = var3.now;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 9;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var1 = var4.userSearchItems;
                        var4 = var1.bind(var4)();
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun87821_ip = 163;
                            continue _fun87821
                        }
                    case 68:
                        var1 = var4.getMany;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 82);
                    case 80:
                        return var1;
                    case 82:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun87821_ip = 160;
                            continue _fun87821
                        }
                    case 88:
                        var5 = var2.performance;
                        var4 = var5.now;
                        var5 = var4.bind(var5)();
                        var4 = _closure1_slot11;
                        var3 = var4.log;
                        var13 = var5 - var6;
                        var11 = var1.length;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var14 = 'asynchronously loaded in ';
                        var12 = 'ms (userSearchItems: ';
                        var10 = ')';
                        var2 = var14[var7](var13, var12, var11, var10, var9);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 160:
                        return var1;
                    case 163:
                        var1 = new Array(0);
                        return var1;
                    case 170:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var6.bind(var1)(var0);
        var _closure2_slot0 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'shouldUseCache';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            var0 = !var0;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handlePostConnectionOpen';
        var4.key = var6;
        var6 = function() {
            var0 = true;
            _closure1_slot12 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleWriteCaches';
        var4.key = var6;
        var5 = function arg0() {
            _fun87826: for (var _fun87826_ip = 0;;) switch (_fun87826_ip) {
                case 0:
                    var4 = {};
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot8;
                    var0 = var2.getFriendIDs;
                    var2 = var0.bind(var2)();
                    var0 = undefined;
                    var7 = var3.bind(var0)(var2);
                    var3 = var7.bind(var0)();
                    var2 = var3.done;
                    var10 = null;
                    var8 = 10;
                    var6 = var3;
                    var5 = undefined;
                    var3 = undefined;
                    if (var2) {
                        _fun87826_ip = 231;
                        continue _fun87826
                    }
                case 57:
                    var13 = var6.value;
                    var11 = _closure1_slot9;
                    var2 = var11.getUser;
                    var14 = var2.bind(var11)(var13);
                    if (!(var10 != var14)) {
                        _fun87826_ip = 213;
                        continue _fun87826
                    }
                case 84:
                    var11 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var11 = var11.bind(var0)(var2);
                    var2 = var11.getNames;
                    var2 = var2.bind(var11)(var14);
                    var11 = var2.names;
                    var2 = var2.nick;
                    var12 = {};
                    var12.id = var13;
                    var15 = _closure1_slot10;
                    var15 = var15.FRIEND;
                    var12.type = var15;
                    var12.user = var14;
                    var12.names = var11;
                    var12.nick = var2;
                    var11 = _closure1_slot7;
                    var2 = var11.getUserAffinity;
                    var2 = var2.bind(var11)(var13);
                    var14 = var10 == var2;
                    var11 = undefined;
                    if (var14) {
                        _fun87826_ip = 186;
                        continue _fun87826
                    }
                case 180:
                    var11 = var2.communicationProbability;
                case 186:
                    var15 = var10 != var11;
                    var14 = 0;
                    if (!var15) {
                        _fun87826_ip = 198;
                        continue _fun87826
                    }
                case 195:
                    var14 = var11;
                case 198:
                    var12.affinity = var14;
                    var4[var13] = var12;
                    var5 = var11;
                    var3 = var2;
                case 213:
                    var11 = var7.bind(var0)();
                    var2 = var11.done;
                    var6 = var11;
                    if (!var2) {
                        _fun87826_ip = 57;
                        continue _fun87826
                    }
                case 231:
                    var3 = _closure1_slot13;
                    var5 = _closure1_slot6;
                    var2 = var5.getGameRelationships;
                    var5 = var2.bind(var5)();
                    var2 = var5.values;
                    var6 = var2.bind(var5)();
                    var5 = var6.filter;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot10;
                        var0 = var0.FRIEND;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var5.bind(var6)(var2);
                    var7 = var3.bind(var0)(var2);
                    var3 = var7.bind(var0)();
                    var2 = var3.done;
                    var6 = var3;
                    var5 = undefined;
                    var3 = undefined;
                    if (var2) {
                        _fun87826_ip = 498;
                        continue _fun87826
                    }
                case 304:
                    var2 = var6.value;
                    var13 = _closure1_slot9;
                    var12 = var13.getUser;
                    var11 = var2.id;
                    var15 = var12.bind(var13)(var11);
                    if (!(var10 != var15)) {
                        _fun87826_ip = 480;
                        continue _fun87826
                    }
                case 336:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var8];
                    var12 = var12.bind(var0)(var11);
                    var11 = var12.getNames;
                    var11 = var11.bind(var12)(var15);
                    var14 = var11.names;
                    var11 = var11.nick;
                    var13 = var2.id;
                    var12 = {};
                    var16 = var2.id;
                    var12.id = var16;
                    var16 = _closure1_slot10;
                    var16 = var16.FRIEND;
                    var12.type = var16;
                    var12.user = var15;
                    var12.names = var14;
                    var12.nick = var11;
                    var14 = _closure1_slot7;
                    var11 = var14.getUserAffinity;
                    var2 = var2.id;
                    var2 = var11.bind(var14)(var2);
                    var14 = var10 == var2;
                    var11 = undefined;
                    if (var14) {
                        _fun87826_ip = 453;
                        continue _fun87826
                    }
                case 447:
                    var11 = var2.communicationProbability;
                case 453:
                    var15 = var10 != var11;
                    var14 = 0;
                    if (!var15) {
                        _fun87826_ip = 465;
                        continue _fun87826
                    }
                case 462:
                    var14 = var11;
                case 465:
                    var12.affinity = var14;
                    var4[var13] = var12;
                    var5 = var11;
                    var3 = var2;
                case 480:
                    var11 = var7.bind(var0)();
                    var2 = var11.done;
                    var6 = var11;
                    if (!var2) {
                        _fun87826_ip = 304;
                        continue _fun87826
                    }
                case 498:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.userSearchItemsTransaction;
                    var1 = arg0;
                    var3 = var2.bind(var3)(var1);
                    var1 = var3.delete;
                    var1 = var1.bind(var3)();
                    var1 = global;
                    var2 = var1.Object;
                    var1 = var2.values;
                    var2 = var1.bind(var2)(var4);
                    var1 = var3.putAll;
                    var1 = var1.bind(var3)(var2);
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/UserSearchItems.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 11345, 6773, 3100, 1621, 660, 3, 1646, 9095, 2]);