// modules/game_relationships/GameRelationshipStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun87310: for (var _fun87310_ip = 0;;) switch (_fun87310_ip) {
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
                _fun87310_ip = 76;
                continue _fun87310;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun87313: for (var _fun87313_ip = 0;;) switch (_fun87313_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun87313_ip = 46;
                    continue _fun87313
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun87313_ip = 55;
                    continue _fun87313
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun87313_ip = 345;
                    continue _fun87313
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun87313_ip = 323;
                    continue _fun87313
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun87313_ip = 283;
                    continue _fun87313
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun87313_ip = 270;
                    continue _fun87313
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
                    _fun87313_ip = 163;
                    continue _fun87313
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun87313_ip = 179;
                    continue _fun87313
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun87313_ip = 249;
                    continue _fun87313
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun87313_ip = 249;
                    continue _fun87313
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun87313_ip = 234;
                    continue _fun87313
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun87313_ip = 247;
                    continue _fun87313
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun87313_ip = 265;
                continue _fun87313;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun87313_ip = 283;
                continue _fun87313;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun87313_ip = 323;
                    continue _fun87313
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
                    _fun87313_ip = 330;
                    continue _fun87313
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun87314: for (var _fun87314_ip = 0;;) switch (_fun87314_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun87314_ip = 56;
                                continue _fun87314
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
                            _fun87314_ip = 67;
                            continue _fun87314;
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
    var0 = function arg0, arg1() {
        _fun87315: for (var _fun87315_ip = 0;;) switch (_fun87315_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun87315_ip = 23;
                    continue _fun87315
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun87315_ip = 33;
                    continue _fun87315
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
                    _fun87315_ip = 70;
                    continue _fun87315
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun87315_ip = 55;
                    continue _fun87315
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var1 = 0;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var1;
        var _closure2_slot2 = var1;
        var3 = _closure1_slot11;
        var2 = var3.values;
        var4 = var2.bind(var3)();
        var3 = var4.forEach;
        var2 = function(arg0) { // Environment: var0
            _fun87317: for (var _fun87317_ip = 0;;) switch (_fun87317_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.type;
                    var2 = var0.id;
                    var1 = _closure1_slot6;
                    var1 = var1.FRIEND;
                    if (!(var3 !== var1)) {
                        _fun87317_ip = 138;
                        continue _fun87317
                    }
                case 30:
                    var1 = _closure1_slot6;
                    var1 = var1.PENDING_OUTGOING;
                    if (!(var3 !== var1)) {
                        _fun87317_ip = 118;
                        continue _fun87317
                    }
                case 44:
                    var1 = _closure1_slot6;
                    var1 = var1.PENDING_INCOMING;
                    if (!(var3 === var1)) {
                        _fun87317_ip = 156;
                        continue _fun87317
                    }
                case 58:
                    var3 = _closure1_slot5;
                    var1 = var3.isSpam;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun87317_ip = 114;
                        continue _fun87317
                    }
                case 76:
                    var1 = _closure1_slot5;
                    var0 = var1.isIgnored;
                    var0 = var0.bind(var1)(var2);
                    if (var0) {
                        _fun87317_ip = 114;
                        continue _fun87317
                    }
                case 94:
                    var2 = _closure2_slot0;
                    var0 = 1;
                    var0 = var2 + var0;
                    _closure2_slot0 = var0;
                    _fun87317_ip = 156;
                    continue _fun87317;
                case 114:
                    var0 = undefined;
                    return var0;
                case 118:
                    var2 = _closure2_slot1;
                    var0 = 1;
                    var0 = var2 + var0;
                    _closure2_slot1 = var0;
                    _fun87317_ip = 156;
                    continue _fun87317;
                case 138:
                    var2 = _closure2_slot2;
                    var0 = 1;
                    var0 = var2 + var0;
                    _closure2_slot2 = var0;
                case 156:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2);
        var2 = _closure2_slot0;
        _closure1_slot12 = var2;
        var2 = _closure2_slot1;
        _closure1_slot13 = var2;
        var0 = _closure2_slot2;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var3 = _closure1_slot11;
        var2 = var3.set;
        var6 = _closure1_slot7;
        var5 = var4.id;
        var1 = var4.applicationId;
        var0 = undefined;
        var1 = var6.bind(var0)(var5, var1);
        var1 = var2.bind(var3)(var1, var4);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        var3 = _closure1_slot11;
        var2 = var3.delete;
        var5 = _closure1_slot7;
        var0 = undefined;
        var4 = arg0;
        var1 = arg1;
        var1 = var5.bind(var0)(var4, var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.RelationshipTypes;
    var _closure1_slot6 = var7;
    var7 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg1;
        var1 = '-';
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot7 = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'application-id-';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot8 = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'user-id-';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot9 = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'relationship-type-';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var10 = var7.SecondaryIndexMap;
    var7 = var10.prototype;
    var8 = Object.create(var7, {
        constructor: {
            value: var10
        }
    });
    var13 = function arg0() {
        var1 = arg0;
        var0 = new Array(0);
        var5 = var0.push;
        var6 = _closure1_slot8;
        var2 = var1.applicationId;
        var4 = undefined;
        var2 = var6.bind(var4)(var2);
        var2 = var5.bind(var0)(var2);
        var5 = var0.push;
        var6 = _closure1_slot9;
        var2 = var1.id;
        var2 = var6.bind(var4)(var2);
        var2 = var5.bind(var0)(var2);
        var2 = var0.push;
        var3 = _closure1_slot10;
        var1 = var1.type;
        var1 = var3.bind(var4)(var1);
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var12 = function(arg0) { // Environment: var3
        var0 = arg0;
        var2 = var0.since;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = '';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var14 = var8;
    var7 = new var14[var10](var13, var12, var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot11 = var7;
    var _closure1_slot12 = var1;
    var _closure1_slot13 = var1;
    var _closure1_slot14 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun87327: for (var _fun87327_ip = 0;;) switch (_fun87327_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun87327_ip = 69;
                        continue _fun87327
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun87327_ip = 105;
                    continue _fun87327;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot5;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'getPendingIncomingCount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getPendingOutgoingCount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGameFriendCount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getGameFriendsForApplication';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot11;
            var2 = var3.values;
            var4 = _closure1_slot8;
            var1 = undefined;
            var0 = arg0;
            var1 = var4.bind(var1)(var0);
            var0 = true;
            var2 = var2.bind(var3)(var1, var0);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.type;
                var0 = _closure1_slot6;
                var0 = var0.FRIEND;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getGameRelationshipsForUser';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot11;
            var2 = var3.values;
            var4 = _closure1_slot9;
            var1 = undefined;
            var0 = arg0;
            var1 = var4.bind(var1)(var0);
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getGameRelationshipsForUserByType';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = this;
            var1 = arg1;
            var _closure3_slot0 = var1;
            var2 = var3.getGameRelationshipsForUser;
            var1 = arg0;
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.type;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getGameFriendsForUser';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var2 = var3.getGameRelationshipsForUserByType;
            var0 = _closure1_slot6;
            var1 = var0.FRIEND;
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getGameRelationshipCount';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot11;
            var0 = var1.size;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getGameRelationships';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getGameRelationshipsByType';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot11;
            var2 = var3.values;
            var4 = _closure1_slot10;
            var1 = undefined;
            var0 = arg0;
            var1 = var4.bind(var1)(var0);
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getGameRelationshipsVersion';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot11;
            var0 = var0.version;
            return var0;
        };
        var4.value = var5;
        var0[11] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GameRelationshipStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var2 = _closure1_slot11;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = arg0;
        var3 = var1.gameRelationships;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var2 = _closure1_slot19;
            var1 = {};
            var3 = var0.id;
            var1.id = var3;
            var3 = var0.application_id;
            var1.applicationId = var3;
            var3 = var0.type;
            var1.type = var3;
            var3 = var0.since;
            var1.since = var3;
            var0 = var0.dm_access_type;
            var1.dmAccessType = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var1 = _closure1_slot18;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        var3 = _closure1_slot19;
        var0 = arg0;
        var2 = var0.gameRelationship;
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var1 = _closure1_slot18;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.GAME_RELATIONSHIP_ADD = var8;
    var8 = function arg0() {
        var0 = arg0;
        var4 = _closure1_slot20;
        var3 = var0.userId;
        var2 = var0.applicationId;
        var0 = undefined;
        var2 = var4.bind(var0)(var3, var2);
        var1 = _closure1_slot18;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.GAME_RELATIONSHIP_REMOVE = var8;
    var3 = function arg0() {
        _fun87346: for (var _fun87346_ip = 0;;) switch (_fun87346_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.unknownApplicationIds;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun87346_ip = 209;
                    continue _fun87346
                }
            case 18:
                var2 = _closure1_slot16;
                var1 = undefined;
                var5 = var2.bind(var1)(var3);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = var3;
                var3 = undefined;
                if (var2) {
                    _fun87346_ip = 201;
                    continue _fun87346
                }
            case 52:
                var8 = var4.value;
                var6 = _closure1_slot16;
                var9 = _closure1_slot11;
                var7 = var9.values;
                var2 = _closure1_slot8;
                var2 = var2.bind(var1)(var8);
                var2 = var7.bind(var9)(var2);
                var7 = var6.bind(var1)(var2);
                var6 = var7.bind(var1)();
                var2 = var6.done;
                if (var2) {
                    _fun87346_ip = 183;
                    continue _fun87346
                }
            case 101:
                var9 = var6.value;
                var10 = var9.type;
                var2 = _closure1_slot6;
                var2 = var2.PENDING_INCOMING;
                var2 = var10 !== var2;
                if (!var2) {
                    _fun87346_ip = 147;
                    continue _fun87346
                }
            case 128:
                var11 = var9.type;
                var10 = _closure1_slot6;
                var10 = var10.PENDING_OUTGOING;
                var2 = var11 !== var10;
            case 147:
                if (var2) {
                    _fun87346_ip = 165;
                    continue _fun87346
                }
            case 150:
                var10 = _closure1_slot20;
                var2 = var9.id;
                var2 = var10.bind(var1)(var2, var8);
            case 165:
                var10 = var7.bind(var1)();
                var2 = var10.done;
                var6 = var10;
                var3 = var9;
                if (!var2) {
                    _fun87346_ip = 101;
                    continue _fun87346
                }
            case 183:
                var6 = var5.bind(var1)();
                var2 = var6.done;
                var4 = var6;
                if (!var2) {
                    _fun87346_ip = 52;
                    continue _fun87346
                }
            case 201:
                var0 = _closure1_slot18;
                var0 = var0.bind(var1)();
            case 209:
                var0 = undefined;
                return var0;
        }
    };
    var1.APPLICATIONS_FETCH_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_relationships/GameRelationshipStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3061, 660, 3048, 566, 806, 2]);