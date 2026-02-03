// modules/libdiscore/stores/LibdiscoreStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = function() {
        _fun16485: for (var _fun16485_ip = 0;;) switch (_fun16485_ip) {
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
                _fun16485_ip = 74;
                continue _fun16485;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
        _fun16488: for (var _fun16488_ip = 0;;) switch (_fun16488_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun16488_ip = 46;
                    continue _fun16488
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun16488_ip = 55;
                    continue _fun16488
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun16488_ip = 343;
                    continue _fun16488
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun16488_ip = 323;
                    continue _fun16488
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun16488_ip = 283;
                    continue _fun16488
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun16488_ip = 270;
                    continue _fun16488
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
                    _fun16488_ip = 163;
                    continue _fun16488
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun16488_ip = 179;
                    continue _fun16488
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun16488_ip = 249;
                    continue _fun16488
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun16488_ip = 249;
                    continue _fun16488
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun16488_ip = 234;
                    continue _fun16488
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun16488_ip = 247;
                    continue _fun16488
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun16488_ip = 265;
                continue _fun16488;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun16488_ip = 283;
                continue _fun16488;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun16488_ip = 323;
                    continue _fun16488
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
                    _fun16488_ip = 330;
                    continue _fun16488
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun16489: for (var _fun16489_ip = 0;;) switch (_fun16489_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun16489_ip = 56;
                                continue _fun16489
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
                            _fun16489_ip = 67;
                            continue _fun16489;
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
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun16490: for (var _fun16490_ip = 0;;) switch (_fun16490_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun16490_ip = 23;
                    continue _fun16490
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun16490_ip = 33;
                    continue _fun16490
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
                    _fun16490_ip = 70;
                    continue _fun16490
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun16490_ip = 55;
                    continue _fun16490
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var4.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var4.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var4.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var4.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var8 = var3.Symbol;
    var5 = 'version';
    var5 = var8.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var8 = var3.Object;
    var5 = var8.freeze;
    var3 = {};
    var3 = var5.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var7[var3];
    var5 = var4.bind(var0)(var3);
    var3 = var5.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var5
        }
    });
    var12 = 'LibdiscoreStore';
    var13 = var4;
    var3 = new var13[var5](var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot10 = var3;
    var3 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var _closure1_slot11 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = function arg0, arg1, arg2, arg3, arg4() {
            var2 = this;
            var3 = _closure1_slot6;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.type = var1;
            var1 = arg1;
            var2.kkvDatabase = var1;
            var1 = arg2;
            var2.k1key = var1;
            var1 = arg3;
            var2.k2key = var1;
            var1 = arg4;
            var2.shouldIndex = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getK1Key';
        var0.key = var1;
        var1 = function arg0() {
            _fun16494: for (var _fun16494_ip = 0;;) switch (_fun16494_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var4 = var2.type;
                    var0 = '0';
                    var1 = 'kv';
                    if (!(var1 !== var4)) {
                        _fun16494_ip = 70;
                        continue _fun16494
                    }
                case 27:
                    var1 = var2.k1key;
                    var4 = 'string';
                    var1 = typeof var1;
                    if (!(var4 !== var1)) {
                        _fun16494_ip = 57;
                        continue _fun16494
                    }
                case 44:
                    var1 = var2.k1key;
                    var1 = var1.bind(var2)(var3);
                    _fun16494_ip = 67;
                    continue _fun16494;
                case 57:
                    var2 = var2.k1key;
                    var1 = var3[var2];
                case 67:
                    var0 = var1;
                case 70:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'getK2Key';
        var0.key = var5;
        var4 = function arg0() {
            _fun16495: for (var _fun16495_ip = 0;;) switch (_fun16495_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var1 = var4.type;
                    var0 = 'kv';
                    if (!(var0 !== var1)) {
                        _fun16495_ip = 29;
                        continue _fun16495
                    }
                case 21:
                    var1 = var4.k2key;
                    _fun16495_ip = 35;
                    continue _fun16495;
                case 29:
                    var1 = var4.k1key;
                case 35:
                    var3 = var4.shouldIndex;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun16495_ip = 61;
                        continue _fun16495
                    }
                case 47:
                    var3 = var4.shouldIndex;
                    var3 = var3.bind(var4)(var2);
                    if (!var3) {
                        _fun16495_ip = 65;
                        continue _fun16495
                    }
                case 61:
                    if (!(var0 == var1)) {
                        _fun16495_ip = 69;
                        continue _fun16495
                    }
                case 65:
                    var0 = undefined;
                    return var0;
                case 69:
                    var3 = 'string';
                    var0 = typeof var1;
                    if (!(var3 !== var0)) {
                        _fun16495_ip = 89;
                        continue _fun16495
                    }
                case 80:
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    _fun16495_ip = 93;
                    continue _fun16495;
                case 89:
                    var0 = var2[var1];
                case 93:
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot12 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = function arg0, arg1() {
            var2 = this;
            var3 = _closure1_slot6;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.kkvDatabase = var1;
            var1 = arg1;
            var2.partition = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'set';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var0 = this;
            var4 = var0.kkvDatabase;
            var3 = var4.setRecord;
            var2 = var0.partition;
            var1 = arg0;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var3 = var0.kkvDatabase;
            var2 = var3.getRecord;
            var1 = var0.partition;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var3 = var0.kkvDatabase;
            var2 = var3.hasRecord;
            var1 = var0.partition;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getAllRecords';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0.kkvDatabase;
            var1 = var2.getPartition;
            var0 = var0.partition;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'remove';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var3 = var0.kkvDatabase;
            var2 = var3.removeRecord;
            var1 = var0.partition;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var3 = var0.kkvDatabase;
            var2 = var3.removePartition;
            var1 = var0.partition;
            var1 = var2.bind(var3)(var1);
            var3 = var0.kkvDatabase;
            var2 = var3.setPartition;
            var1 = var0.partition;
            var0 = {};
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'length';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0.kkvDatabase;
            var1 = var2.partitionLength;
            var0 = var0.partition;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'version';
        var0.key = var5;
        var5 = function() {
            _fun16505: for (var _fun16505_ip = 0;;) switch (_fun16505_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.kkvDatabase;
                    var2 = var3.partitionVersion;
                    var0 = var1.partition;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun16505_ip = 48;
                        continue _fun16505
                    }
                case 32:
                    var2 = var1.kkvDatabase;
                    var1 = var2.version;
                    var0 = var1.bind(var2)();
                case 48:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'memoized';
        var0.key = var5;
        var4 = function arg0, arg1() {
            var0 = this;
            var4 = var0.kkvDatabase;
            var3 = var4.memoizedSinglePartition;
            var2 = var0.partition;
            var1 = arg0;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var0.value = var4;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4 = var3.bind(var0)();
    var _closure1_slot13 = var4;
    var3 = function() { // Environment: var1
        var3 = function arg0() {
            var2 = this;
            var3 = _closure1_slot6;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.nextVersion = var1;
            var1 = new Array(0);
            var2.secondaryIndexes = var1;
            var1 = var2.emptyState;
            var1 = var1.bind(var2)();
            var2.state = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot7;
        var0 = {};
        var1 = 'addSecondaryKVIndex';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var0 = this;
            var3 = _closure2_slot0;
            var12 = var0.nextVersion;
            var2 = var3.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var3
                }
            });
            var13 = var2;
            var1 = new var13[var3](var12, var11);
            var1 = var1 instanceof Object ? var1 : var2;
            var7 = _closure1_slot12;
            var2 = var7.prototype;
            var3 = Object.create(var2, {
                constructor: {
                    value: var7
                }
            });
            var12 = 'kv';
            var10 = arg0;
            var9 = undefined;
            var8 = arg1;
            var13 = var3;
            var11 = var1;
            var2 = new var13[var7](var12, var11, var10, var9, var8, var7);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var0.secondaryIndexes;
            var0 = var2.push;
            var0 = var0.bind(var2)(var3);
            var0 = var1.intoKV;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var1;
        var1 = new Array(31);
        var1[0] = var0;
        var0 = {};
        var5 = 'addSecondaryKKVIndex';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var1 = this;
            var3 = _closure2_slot0;
            var12 = var1.nextVersion;
            var2 = var3.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var3
                }
            });
            var13 = var2;
            var0 = new var13[var3](var12, var11);
            var0 = var0 instanceof Object ? var0 : var2;
            var7 = _closure1_slot12;
            var2 = var7.prototype;
            var3 = Object.create(var2, {
                constructor: {
                    value: var7
                }
            });
            var12 = 'kkv';
            var10 = arg0;
            var9 = arg1;
            var8 = arg2;
            var13 = var3;
            var11 = var0;
            var2 = new var13[var7](var12, var11, var10, var9, var8, var7);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var1.secondaryIndexes;
            var1 = var2.push;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'intoKV';
        var0.key = var5;
        var5 = function arg0() {
            _fun16511: for (var _fun16511_ip = 0;;) switch (_fun16511_ip) {
                case 0:
                    var0 = arg0;
                    var3 = _closure1_slot13;
                    var1 = null;
                    var1 = var1 != var0;
                    var2 = '0';
                    if (!var1) {
                        _fun16511_ip = 28;
                        continue _fun16511
                    }
                case 25:
                    var2 = var0;
                case 28:
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = this;
                    var6 = var1;
                    var4 = var2;
                    var0 = new var6[var3](var5, var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'version';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.state;
            var0 = var0.version;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'partitionVersion';
        var0.key = var5;
        var5 = function arg0() {
            _fun16513: for (var _fun16513_ip = 0;;) switch (_fun16513_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.state;
                    var1 = var0.root;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun16513_ip = 52;
                        continue _fun16513
                    }
                case 27:
                    var1 = var2._derivedVersion;
                    var0 = var0.derived;
                    var0 = var0.memoized;
                    var0 = var1.bind(var2)(var0);
                    _fun16513_ip = 62;
                    continue _fun16513;
                case 52:
                    var1 = var2.version;
                    var0 = var1.bind(var2)();
                case 62:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'hasPartition';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var0 = var0.state;
            var1 = var0.root;
            var0 = arg0;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'hasRecord';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun16515: for (var _fun16515_ip = 0;;) switch (_fun16515_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.state;
                    var1 = var0.root;
                    var0 = arg0;
                    var2 = var1[var0];
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun16515_ip = 45;
                        continue _fun16515
                    }
                case 32:
                    var3 = var2.root;
                    var2 = arg1;
                    var0 = var3[var2];
                case 45:
                    var0 = var1 != var0;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getRecord';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun16516: for (var _fun16516_ip = 0;;) switch (_fun16516_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.state;
                    var1 = var0.root;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun16516_ip = 45;
                        continue _fun16516
                    }
                case 32:
                    var2 = var1.root;
                    var1 = arg1;
                    var0 = var2[var1];
                case 45:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getManyRecords';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun16517: for (var _fun16517_ip = 0;;) switch (_fun16517_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.state;
                    var1 = var0.root;
                    var0 = arg0;
                    var6 = var1[var0];
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun16517_ip = 106;
                        continue _fun16517
                    }
                case 27:
                    var0 = new Array(0);
                    var2 = _closure1_slot16;
                    var4 = undefined;
                    var1 = arg1;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.bind(var4)();
                    var1 = var2.done;
                    if (var1) {
                        _fun16517_ip = 104;
                        continue _fun16517
                    }
                case 60:
                    var7 = var2.value;
                    var1 = var6.root;
                    var7 = var1[var7];
                    if (!(var5 != var7)) {
                        _fun16517_ip = 89;
                        continue _fun16517
                    }
                case 79:
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var7);
                case 89:
                    var7 = var3.bind(var4)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun16517_ip = 60;
                        continue _fun16517
                    }
                case 104:
                    return var0;
                case 106:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'getPartition';
        var0.key = var5;
        var5 = function arg0() {
            _fun16518: for (var _fun16518_ip = 0;;) switch (_fun16518_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.state;
                    var1 = var0.root;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun16518_ip = 36;
                        continue _fun16518
                    }
                case 27:
                    var0 = _closure1_slot9;
                    _fun16518_ip = 42;
                    continue _fun16518;
                case 36:
                    var0 = var1.root;
                case 42:
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getAllPartitions';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.state;
            var0 = var0.root;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'getPartitionKeys';
        var0.key = var5;
        var5 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.keys;
            var0 = this;
            var0 = var0.state;
            var0 = var0.root;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'partitionLength';
        var0.key = var5;
        var5 = function arg0() {
            _fun16521: for (var _fun16521_ip = 0;;) switch (_fun16521_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.state;
                    var1 = var0.root;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = 0;
                    if (var2) {
                        _fun16521_ip = 43;
                        continue _fun16521
                    }
                case 32:
                    var1 = var1.derived;
                    var0 = var1.length;
                case 43:
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'length';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.state;
            var0 = var0.derived;
            var0 = var0.length;
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'numPartitions';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.state;
            var0 = var0.derived;
            var0 = var0.numPartitions;
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'getNullablePartition';
        var0.key = var5;
        var5 = function arg0() {
            _fun16524: for (var _fun16524_ip = 0;;) switch (_fun16524_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.state;
                    var1 = var0.root;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    if (var2) {
                        _fun16524_ip = 36;
                        continue _fun16524
                    }
                case 30:
                    var0 = var1.root;
                case 36:
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = '_derivedVersion';
        var0.key = var5;
        var5 = function arg0() {
            _fun16525: for (var _fun16525_ip = 0;;) switch (_fun16525_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var0 = _closure1_slot8;
                    var0 = var3[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun16525_ip = 44;
                        continue _fun16525
                    }
                case 23:
                    var2 = _closure1_slot8;
                    var1 = var4.nextVersion;
                    var1 = var1.bind(var4)();
                    var3[var2] = var1;
                    var0 = var1;
                case 44:
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'mapPartitions';
        var0.key = var5;
        var5 = function arg0() {
            _fun16526: for (var _fun16526_ip = 0;;) switch (_fun16526_ip) {
                case 0:
                    var8 = arg0;
                    var0 = new Array(0);
                    var1 = this;
                    var1 = var1.state;
                    var7 = var1.root;
                    var5 = var7;
                    var1 = undefined;
                    for (var2 in var5)
                        case 34: {
                            case 43: var12 = var2;
                            var10 = var0.push;
                            var9 = {};
                            var9.partitionKey = var12;
                            var11 = var7[var12];
                            var11 = var11.root;
                            var11 = var8.bind(var1)(var11, var12);
                            var9.values = var11;
                            var9 = var10.bind(var0)(var9);
                            _fun16526_ip = 34;
                            continue _fun16526;
                        }
                case 85:
                    return var0;
            }
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'memoizedPartition';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun16527: for (var _fun16527_ip = 0;;) switch (_fun16527_ip) {
                case 0:
                    var5 = arg0;
                    var1 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var5;
                    var2 = global;
                    var2 = var2.Symbol;
                    var4 = undefined;
                    var2 = var2.bind(var4)();
                    var _closure3_slot2 = var2;
                    if (!(var4 === var1)) {
                        _fun16527_ip = 53;
                        continue _fun16527
                    }
                case 41:
                    var3 = '';
                    var2 = {};
                    var1 = var5.bind(var4)(var3, var2);
                case 53:
                    var _closure3_slot3 = var1;
                    var0 = function(arg0) { // Environment: var0
                        _fun16528: for (var _fun16528_ip = 0;;) switch (_fun16528_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var1 = var1.root;
                                var1 = var1[var6];
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun16528_ip = 110;
                                    continue _fun16528
                                }
                            case 31:
                                var5 = var1.root;
                                var1 = var1.derived;
                                var4 = var1.memoized;
                                var7 = _closure3_slot2;
                                var1 = var4[var7];
                                var2 = global;
                                var2 = var2.Object;
                                var3 = var2.hasOwnProperty;
                                var2 = var3.call;
                                var2 = var2.bind(var3)(var4, var7);
                                if (var2) {
                                    _fun16528_ip = 108;
                                    continue _fun16528
                                }
                            case 85:
                                var3 = _closure3_slot1;
                                var2 = undefined;
                                var2 = var3.bind(var2)(var6, var5);
                                var3 = _closure3_slot2;
                                var4[var3] = var2;
                                var1 = var2;
                            case 108:
                                return var1;
                            case 110:
                                var0 = _closure3_slot3;
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'memoizedSinglePartition';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun16529: for (var _fun16529_ip = 0;;) switch (_fun16529_ip) {
                case 0:
                    var4 = arg1;
                    var1 = arg2;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var2 = arg0;
                    var _closure3_slot1 = var2;
                    var _closure3_slot2 = var4;
                    var2 = global;
                    var2 = var2.Symbol;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    var _closure3_slot3 = var2;
                    if (!(var3 === var1)) {
                        _fun16529_ip = 60;
                        continue _fun16529
                    }
                case 48:
                    var2 = _closure1_slot9;
                    var1 = var4.bind(var3)(var2);
                case 60:
                    var _closure3_slot4 = var1;
                    var0 = function() { // Environment: var0
                        _fun16530: for (var _fun16530_ip = 0;;) switch (_fun16530_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var2 = var1.root;
                                var1 = _closure3_slot1;
                                var1 = var2[var1];
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun16530_ip = 110;
                                    continue _fun16530
                                }
                            case 32:
                                var5 = var1.root;
                                var1 = var1.derived;
                                var4 = var1.memoized;
                                var6 = _closure3_slot3;
                                var1 = var4[var6];
                                var2 = global;
                                var2 = var2.Object;
                                var3 = var2.hasOwnProperty;
                                var2 = var3.call;
                                var2 = var2.bind(var3)(var4, var6);
                                if (var2) {
                                    _fun16530_ip = 108;
                                    continue _fun16530
                                }
                            case 86:
                                var3 = _closure3_slot2;
                                var2 = undefined;
                                var2 = var3.bind(var2)(var5);
                                var3 = _closure3_slot3;
                                var4[var3] = var2;
                                var1 = var2;
                            case 108:
                                return var1;
                            case 110:
                                var0 = _closure3_slot4;
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'memoized';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = global;
            var2 = var1.Symbol;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var _closure3_slot2 = var1;
            var0 = function() { // Environment: var0
                _fun16532: for (var _fun16532_ip = 0;;) switch (_fun16532_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var0 = var0.state;
                        var0 = var0.derived;
                        var3 = var0.memoized;
                        var5 = _closure3_slot2;
                        var0 = var3[var5];
                        var1 = global;
                        var1 = var1.Object;
                        var4 = var1.hasOwnProperty;
                        var1 = var4.call;
                        var1 = var1.bind(var4)(var3, var5);
                        if (var1) {
                            _fun16532_ip = 97;
                            continue _fun16532
                        }
                    case 60:
                        var5 = _closure3_slot1;
                        var1 = _closure3_slot0;
                        var1 = var1.state;
                        var4 = var1.root;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var2 = _closure3_slot2;
                        var3[var2] = var1;
                        var0 = var1;
                    case 97:
                        return var0;
                }
            };
            return var0;
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'emptyState';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var0 = {};
            var1 = {};
            var0.root = var1;
            var1 = var2.nextVersion;
            var1 = var1.bind(var2)();
            var0.version = var1;
            var1 = {
                'length': 0,
                'numPartitions': 0
            };
            var2 = {};
            var1.memoized = var2;
            var0.derived = var1;
            return var0;
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = 'emptyPartitionState';
        var0.key = var5;
        var5 = function arg0() {
            _fun16534: for (var _fun16534_ip = 0;;) switch (_fun16534_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = {};
                    var2 = {};
                    var0.root = var2;
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun16534_ip = 31;
                        continue _fun16534
                    }
                case 21:
                    var2 = var3.nextVersion;
                    var1 = var2.bind(var3)();
                case 31:
                    var0.version = var1;
                    var1 = {};
                    var2 = 0;
                    var1.length = var2;
                    var2 = {};
                    var1.memoized = var2;
                    var0.derived = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[22] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() {
            _fun16535: for (var _fun16535_ip = 0;;) switch (_fun16535_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.emptyState;
                    var1 = var1.bind(var0)();
                    var0.state = var1;
                    var2 = _closure1_slot16;
                    var1 = var0.secondaryIndexes;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun16535_ip = 87;
                        continue _fun16535
                    }
                case 51:
                    var1 = var2.value;
                    var4 = var1.kkvDatabase;
                    var1 = var4.clear;
                    var1 = var1.bind(var4)();
                    var4 = var3.bind(var0)();
                    var1 = var4.done;
                    var2 = var4;
                    if (!var1) {
                        _fun16535_ip = 51;
                        continue _fun16535
                    }
                case 87:
                    return var0;
            }
        };
        var0.value = var5;
        var1[23] = var0;
        var0 = {};
        var5 = 'removePartition';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun16536: for (var _fun16536_ip = 0;;) switch (_fun16536_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var2 = this;
                    var0 = null;
                    if (!(var4 == var0)) {
                        _fun16536_ip = 25;
                        continue _fun16536
                    }
                case 15:
                    var1 = var2.nextVersion;
                    var4 = var1.bind(var2)();
                case 25:
                    var1 = var2.state;
                    var1 = var1.root;
                    var1 = var1[var5];
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun16536_ip = 199;
                        continue _fun16536
                    }
                case 50:
                    var7 = var2.updateSecondaryIndexes;
                    var3 = global;
                    var8 = var3.Object;
                    var6 = var8.values;
                    var3 = var1.root;
                    var6 = var6.bind(var8)(var3);
                    var3 = undefined;
                    var3 = var7.bind(var2)(var3, var6, var4);
                    var3 = var2.state;
                    var3 = var3.root;
                    var3 = delete var3[var5];
                    var3 = var2.state;
                    var5 = var3.derived;
                    var3 = var5.numPartitions;
                    var3 = var3 - 1;
                    var5.numPartitions = var3;
                    var3 = var2.state;
                    var3.version = var4;
                    var3 = var2.state;
                    var4 = var3.derived;
                    var3 = {};
                    var4.memoized = var3;
                    var2 = var2.state;
                    var2 = var2.derived;
                    var3 = var2.length;
                    var1 = var1.derived;
                    var1 = var1.length;
                    var1 = var3 - var1;
                    var2.length = var1;
                    var0 = true;
                case 199:
                    return var0;
            }
        };
        var0.value = var5;
        var1[24] = var0;
        var0 = {};
        var5 = 'removeRecord';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun16537: for (var _fun16537_ip = 0;;) switch (_fun16537_ip) {
                case 0:
                    var4 = arg0;
                    var6 = arg1;
                    var3 = arg2;
                    var1 = this;
                    var0 = null;
                    if (!(var3 == var0)) {
                        _fun16537_ip = 28;
                        continue _fun16537
                    }
                case 18:
                    var2 = var1.nextVersion;
                    var3 = var2.bind(var1)();
                case 28:
                    var2 = var1.state;
                    var2 = var2.root;
                    var2 = var2[var4];
                    if (!(var0 != var2)) {
                        _fun16537_ip = 256;
                        continue _fun16537
                    }
                case 50:
                    var5 = var2.root;
                    var5 = var5[var6];
                    var0 = var0 != var5;
                    if (!var0) {
                        _fun16537_ip = 254;
                        continue _fun16537
                    }
                case 70:
                    var8 = var1.updateSecondaryIndexes;
                    var7 = new Array(1);
                    var7[0] = var5;
                    var5 = undefined;
                    var5 = var8.bind(var1)(var5, var7, var3);
                    var5 = var2.root;
                    var5 = delete var5[var6];
                    var6 = var2.derived;
                    var5 = var6.length;
                    var5 = var5 - 1;
                    var6.length = var5;
                    var5 = var2.derived;
                    var6 = var5.length;
                    var5 = 0;
                    if (!(var5 !== var6)) {
                        _fun16537_ip = 156;
                        continue _fun16537
                    }
                case 140:
                    var5 = var2.derived;
                    var2 = {};
                    var5.memoized = var2;
                    _fun16537_ip = 197;
                    continue _fun16537;
                case 156:
                    var2 = var1.state;
                    var2 = var2.root;
                    var2 = delete var2[var4];
                    var2 = var1.state;
                    var4 = var2.derived;
                    var2 = var4.numPartitions;
                    var2 = var2 - 1;
                    var4.numPartitions = var2;
                case 197:
                    var2 = var1.state;
                    var4 = var2.derived;
                    var2 = var4.length;
                    var2 = var2 - 1;
                    var4.length = var2;
                    var2 = var1.state;
                    var2.version = var3;
                    var1 = var1.state;
                    var2 = var1.derived;
                    var1 = {};
                    var2.memoized = var1;
                    var0 = true;
                case 254:
                    return var0;
                case 256:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[25] = var0;
        var0 = {};
        var5 = 'updateRecord';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3, arg4() {
            _fun16538: for (var _fun16538_ip = 0;;) switch (_fun16538_ip) {
                case 0:
                    var4 = arg0;
                    var5 = arg1;
                    var3 = arg4;
                    var2 = this;
                    var1 = null;
                    if (!(var3 == var1)) {
                        _fun16538_ip = 28;
                        continue _fun16538
                    }
                case 18:
                    var0 = var2.nextVersion;
                    var3 = var0.bind(var2)();
                case 28:
                    var0 = var2.state;
                    var0 = var0.root;
                    var0 = var0[var4];
                    if (!(var1 != var0)) {
                        _fun16538_ip = 251;
                        continue _fun16538
                    }
                case 50:
                    var0 = var2.state;
                    var0 = var0.root;
                    var0 = var0[var4];
                    var0 = var0.root;
                    var0 = var0[var5];
                    if (!(var1 != var0)) {
                        _fun16538_ip = 191;
                        continue _fun16538
                    }
                case 79:
                    var0 = var2.state;
                    var0 = var0.root;
                    var0 = var0[var4];
                    var0 = var0.root;
                    var8 = var0[var5];
                    var6 = {};
                    var11 = var6;
                    var10 = var8;
                    var0 = copyDataProperties(var11, var10);
                    var10 = arg2;
                    var11 = var6;
                    var0 = copyDataProperties(var11, var10);
                    var1 = arg3;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var6);
                    var7 = var2.updateSecondaryIndexes;
                    var6 = new Array(1);
                    var6[0] = var1;
                    var0 = new Array(1);
                    var0[0] = var8;
                    var0 = var7.bind(var2)(var6, var0, var3);
                    var0 = var2.touchPartition;
                    var0 = var0.bind(var2)(var4, var3);
                    var0 = var0.root;
                    var0[var5] = var1;
                    var0 = true;
                    return var0;
                case 191:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = 'Record ';
                    var0 = ' does not exist in partition ';
                    var11 = var3.bind(var1)(var5, var0, var4);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var1;
                    var0 = new var12[var2](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 251:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = 'Partition ';
                    var0 = ' does not exist';
                    var11 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var1;
                    var0 = new var12[var2](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[26] = var0;
        var0 = {};
        var5 = 'touchPartition';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun16539: for (var _fun16539_ip = 0;;) switch (_fun16539_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var4 = null;
                    if (!(var3 == var4)) {
                        _fun16539_ip = 25;
                        continue _fun16539
                    }
                case 15:
                    var2 = var0.nextVersion;
                    var3 = var2.bind(var0)();
                case 25:
                    var2 = var0.state;
                    var2 = var2.root;
                    var2 = var2[var1];
                    if (!(var4 != var2)) {
                        _fun16539_ip = 96;
                        continue _fun16539
                    }
                case 44:
                    var2 = var0.state;
                    var2 = var2.root;
                    var2 = var2[var1];
                    var2.version = var3;
                    var2 = var0.state;
                    var2 = var2.root;
                    var2 = var2[var1];
                    var4 = var2.derived;
                    var2 = {};
                    var4.memoized = var2;
                    _fun16539_ip = 148;
                    continue _fun16539;
                case 96:
                    var2 = var0.state;
                    var4 = var2.root;
                    var2 = var0.emptyPartitionState;
                    var2 = var2.bind(var0)(var3);
                    var4[var1] = var2;
                    var2 = var0.state;
                    var4 = var2.derived;
                    var2 = var4.numPartitions;
                    var2 = var2 + 1;
                    var4.numPartitions = var2;
                case 148:
                    var2 = var0.state;
                    var2.version = var3;
                    var2 = var0.state;
                    var3 = var2.derived;
                    var2 = {};
                    var3.memoized = var2;
                    var0 = var0.state;
                    var0 = var0.root;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var0.value = var5;
        var1[27] = var0;
        var0 = {};
        var5 = 'setRecord';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun16540: for (var _fun16540_ip = 0;;) switch (_fun16540_ip) {
                case 0:
                    var2 = arg1;
                    var0 = arg2;
                    var3 = arg3;
                    var4 = this;
                    var6 = null;
                    if (!(var3 == var6)) {
                        _fun16540_ip = 28;
                        continue _fun16540
                    }
                case 18:
                    var1 = var4.nextVersion;
                    var3 = var1.bind(var4)();
                case 28:
                    var5 = var4.touchPartition;
                    var1 = arg0;
                    var1 = var5.bind(var4)(var1, var3);
                    var5 = var1.root;
                    var5 = var5[var2];
                    if (!(var6 == var5)) {
                        _fun16540_ip = 102;
                        continue _fun16540
                    }
                case 57:
                    var6 = var1.derived;
                    var5 = var6.length;
                    var5 = var5 + 1;
                    var6.length = var5;
                    var5 = var4.state;
                    var6 = var5.derived;
                    var5 = var6.length;
                    var5 = var5 + 1;
                    var6.length = var5;
                case 102:
                    var1 = var1.root;
                    var1[var2] = var0;
                    var2 = var4.updateSecondaryIndexes;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = undefined;
                    var0 = var2.bind(var4)(var1, var0, var3);
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var1[28] = var0;
        var0 = {};
        var5 = 'setPartition';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun16541: for (var _fun16541_ip = 0;;) switch (_fun16541_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var4 = arg2;
                    var0 = this;
                    var1 = null;
                    if (!(var4 == var1)) {
                        _fun16541_ip = 28;
                        continue _fun16541
                    }
                case 18:
                    var1 = var0.nextVersion;
                    var4 = var1.bind(var0)();
                case 28:
                    var1 = var0.removePartition;
                    var1 = var1.bind(var0)(var5, var4);
                    var1 = global;
                    var6 = var1.Object;
                    var2 = var6.keys;
                    var2 = var2.bind(var6)(var3);
                    var2 = var2.length;
                    var6 = 0;
                    if (!(var6 !== var2)) {
                        _fun16541_ip = 160;
                        continue _fun16541
                    }
                case 69:
                    var7 = var0.updateSecondaryIndexes;
                    var6 = var1.Object;
                    var1 = var6.values;
                    var6 = var1.bind(var6)(var3);
                    var1 = undefined;
                    var1 = var7.bind(var0)(var6, var1, var4);
                    var1 = var0.touchPartition;
                    var1 = var1.bind(var0)(var5, var4);
                    var1.root = var3;
                    var1 = var1.derived;
                    var1.length = var2;
                    var0 = var0.state;
                    var1 = var0.derived;
                    var0 = var1.length;
                    var0 = var0 + var2;
                    var1.length = var0;
                    var0 = true;
                    return var0;
                case 160:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var1[29] = var0;
        var0 = {};
        var5 = 'updateSecondaryIndexes';
        var0.key = var5;
        var4 = function arg0, arg1, arg2() {
            _fun16542: for (var _fun16542_ip = 0;;) switch (_fun16542_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg1;
                    var15 = arg2;
                    var2 = _closure1_slot16;
                    var0 = this;
                    var1 = var0.secondaryIndexes;
                    var0 = undefined;
                    var13 = var2.bind(var0)(var1);
                    var2 = var13.bind(var0)();
                    var1 = var2.done;
                    var12 = null;
                    var11 = var2;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (var1) {
                        _fun16542_ip = 401;
                        continue _fun16542
                    }
                case 70:
                    var25 = var11.value;
                    var22 = var8;
                    var21 = var7;
                    if (!(var0 !== var16)) {
                        _fun16542_ip = 211;
                        continue _fun16542
                    }
                case 88:
                    var1 = _closure1_slot16;
                    var19 = var1.bind(var0)(var16);
                    var20 = var19.bind(var0)();
                    var1 = var20.done;
                    var18 = var20;
                    var10 = var18;
                    var9 = var19;
                    var22 = var8;
                    var21 = var7;
                    if (var1) {
                        _fun16542_ip = 211;
                        continue _fun16542
                    }
                case 124:
                    var20 = var18.value;
                    var1 = var25.getK1Key;
                    var23 = var1.bind(var25)(var20);
                    var1 = var25.getK2Key;
                    var20 = var1.bind(var25)(var20);
                    var1 = var12 != var23;
                    if (!var1) {
                        _fun16542_ip = 162;
                        continue _fun16542
                    }
                case 158:
                    var1 = var12 != var20;
                case 162:
                    if (!var1) {
                        _fun16542_ip = 184;
                        continue _fun16542
                    }
                case 165:
                    var24 = var25.kkvDatabase;
                    var1 = var24.removeRecord;
                    var1 = var1.bind(var24)(var23, var20, var15);
                case 184:
                    var24 = var19.bind(var0)();
                    var1 = var24.done;
                    var18 = var24;
                    var10 = var18;
                    var9 = var19;
                    var22 = var23;
                    var21 = var20;
                    if (!var1) {
                        _fun16542_ip = 124;
                        continue _fun16542
                    }
                case 211:
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    if (!(var0 !== var17)) {
                        _fun16542_ip = 368;
                        continue _fun16542
                    }
                case 227:
                    var1 = _closure1_slot16;
                    var24 = var1.bind(var0)(var17);
                    var26 = var24.bind(var0)();
                    var1 = var26.done;
                    var23 = var26;
                    var6 = var23;
                    var5 = var24;
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    if (var1) {
                        _fun16542_ip = 368;
                        continue _fun16542
                    }
                case 266:
                    var28 = var23.value;
                    var1 = var25.getK1Key;
                    var27 = var1.bind(var25)(var28);
                    var1 = var25.getK2Key;
                    var26 = var1.bind(var25)(var28);
                    var1 = var12 != var27;
                    if (!var1) {
                        _fun16542_ip = 304;
                        continue _fun16542
                    }
                case 300:
                    var1 = var12 != var26;
                case 304:
                    if (!var1) {
                        _fun16542_ip = 338;
                        continue _fun16542
                    }
                case 307:
                    var29 = var25.kkvDatabase;
                    var1 = var29.setRecord;
                    var34 = var29;
                    var33 = var27;
                    var32 = var26;
                    var31 = var28;
                    var30 = var15;
                    var1 = var34[var1](var33, var32, var31, var30, var29);
                case 338:
                    var29 = var24.bind(var0)();
                    var1 = var29.done;
                    var23 = var29;
                    var6 = var23;
                    var5 = var24;
                    var20 = var28;
                    var19 = var27;
                    var18 = var26;
                    if (!var1) {
                        _fun16542_ip = 266;
                        continue _fun16542
                    }
                case 368:
                    var23 = var13.bind(var0)();
                    var1 = var23.done;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    var11 = var23;
                    var8 = var22;
                    var7 = var21;
                    if (!var1) {
                        _fun16542_ip = 70;
                        continue _fun16542
                    }
                case 401:
                    return var0;
            }
        };
        var0.value = var4;
        var1[30] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot14 = var3;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun16544: for (var _fun16544_ip = 0;;) switch (_fun16544_ip) {
                case 0:
                    var7 = arg0;
                    var3 = arguments[1];
                    var5 = this;
                    var _closure3_slot0 = var7;
                    var4 = undefined;
                    if (!(var3 === var4)) {
                        _fun16544_ip = 25;
                        continue _fun16544
                    }
                case 21:
                    var3 = 'typescript';
                case 25:
                    var _closure3_slot1 = var4;
                    var _closure3_slot2 = var4;
                    var _closure3_slot3 = var4;
                    var8 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var0 = var8.bind(var4)(var5, var0);
                    var0 = {};
                    _closure3_slot2 = var0;
                    var8 = 'typescript';
                    if (!(var8 !== var3)) {
                        _fun16544_ip = 81;
                        continue _fun16544
                    }
                case 71:
                    var8 = 'typescript-libdiscore-dual-read';
                    if (!(var8 === var3)) {
                        _fun16544_ip = 119;
                        continue _fun16544
                    }
                case 81:
                    var12 = function() {
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot3;
                        var2 = var3[var2];
                        var _closure4_slot0 = var2;
                        var2 = _closure3_slot2;
                        var1 = _closure3_slot3;
                        var0 = function(arg0) { // Environment: var0
                            _fun16546: for (var _fun16546_ip = 0;;) switch (_fun16546_ip) {
                                case 0:
                                    var2 = _closure3_slot1;
                                    var3 = var2.wrappedState;
                                    var0 = null;
                                    if (!(var3 == var0)) {
                                        _fun16546_ip = 39;
                                        continue _fun16546
                                    }
                                case 19:
                                    var3 = _closure3_slot1;
                                    var0 = var3.stateWrapper;
                                    var0 = var0.bind(var3)();
                                    var2.wrappedState = var0;
                                case 39:
                                    var0 = _closure3_slot1;
                                    var2 = var0._nextVersion;
                                    var5 = _closure4_slot0;
                                    var0 = _closure3_slot1;
                                    var4 = var0.wrappedState;
                                    var0 = undefined;
                                    var3 = arg0;
                                    var3 = var5.bind(var0)(var3, var4);
                                    var1 = _closure3_slot1;
                                    var1 = var1._nextVersion;
                                    if (!(var1 !== var2)) {
                                        _fun16546_ip = 93;
                                        continue _fun16546
                                    }
                                case 91:
                                    return var0;
                                case 93:
                                    var0 = false;
                                    return var0;
                            }
                        };
                        var2[var1] = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var10 = var7;
                    for (var7 in var10)
                        case 97: {
                            case 106: var13 = var7;
                            _closure3_slot3 = var13;
                            var13 = var12.bind(var4)();
                            _fun16544_ip = 97;
                            continue _fun16544;
                        }
                case 119:
                    var2 = _closure2_slot0;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var10 = new Array(2);
                    var10[0] = var7;
                    var10[1] = var0;
                    var0 = _closure1_slot4;
                    var9 = var0.bind(var4)(var2);
                    var2 = _closure1_slot3;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun16544_ip = 192;
                        continue _fun16544
                    }
                case 179:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun16544_ip = 226;
                    continue _fun16544;
                case 192:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot4;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 226:
                    var0 = var2.bind(var4)(var5, var0);
                    _closure3_slot1 = var0;
                    var0.mode = var3;
                    var1 = 0;
                    var0._nextVersion = var1;
                    var1 = global;
                    var2 = var1.Map;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var17 = var4;
                    var2 = new var17[var2](var16);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var0.recordCreators = var2;
                    var2 = null;
                    var0.wrappedState = var2;
                    var0.shadowDatabases = var2;
                    var0.shadowRecordCreators = var2;
                    var2 = {};
                    var4 = {};
                    var2.databases = var4;
                    var0.state = var2;
                    var2 = 'typescript-libdiscore-dual-read';
                    if (!(var2 === var3)) {
                        _fun16544_ip = 369;
                        continue _fun16544
                    }
                case 329:
                    var2 = {};
                    var0.shadowDatabases = var2;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var17 = var2;
                    var1 = new var17[var1](var16);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.shadowRecordCreators = var1;
                case 369:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'getMode';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var0 = var0.mode;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'connectWithLibdiscore';
        var4.key = var6;
        var6 = function arg0() {
            _fun16548: for (var _fun16548_ip = 0;;) switch (_fun16548_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var1 = var2.mode;
                    var0 = 'typescript';
                    if (!(var0 !== var1)) {
                        _fun16548_ip = 151;
                        continue _fun16548
                    }
                case 22:
                    var1 = var3.connectStore;
                    var0 = {};
                    var4 = var2.getName;
                    var4 = var4.bind(var2)();
                    var0.storeName = var4;
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.keys;
                    var4 = var2.state;
                    var4 = var4.databases;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.map;
                    var4 = function(arg0) { // Environment: var4
                        var0 = {};
                        var1 = arg0;
                        var0.name = var1;
                        var1 = 'kkv';
                        var0.type = var1;
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    var0.databases = var4;
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.storeToken;
                    var3 = var1.initialState;
                    var1 = var2.applyChanges;
                    var1 = var1.bind(var2)(var3);
                    var3 = var2.mode;
                    var1 = 'typescript-libdiscore-dual-read';
                    if (!(var1 === var3)) {
                        _fun16548_ip = 149;
                        continue _fun16548
                    }
                case 139:
                    var1 = var2.setupDualReadValidation;
                    var1 = var1.bind(var2)();
                case 149:
                    return var0;
                case 151:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = 'connectWithLibdiscore should not be called in TypeScript mode.';
                    var8 = var1;
                    var0 = new var8[var2](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'setupDualReadValidation';
        var4.key = var6;
        var6 = function() {
            var3 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var3;
            var0 = global;
            var4 = var0.Symbol;
            var0 = undefined;
            var2 = 'didValidatePartition';
            var2 = var4.bind(var0)(var2);
            var _closure3_slot2 = var2;
            var2 = {};
            var4 = {};
            var2.root = var4;
            var4 = {};
            var5 = 0;
            var4.length = var5;
            var5 = {};
            var4.memoized = var5;
            var2.derived = var4;
            var _closure3_slot3 = var2;
            var2 = var3.addChangeListener;
            var1 = function() { // Environment: var1
                _fun16551: for (var _fun16551_ip = 0;;) switch (_fun16551_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.shadowDatabases;
                        var _closure4_slot0 = var2;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun16551_ip = 77;
                            continue _fun16551
                        }
                    case 25:
                        var6 = function() {
                            _fun16552: for (var _fun16552_ip = 0;;) switch (_fun16552_ip) {
                                case 0:
                                    var0 = _closure3_slot1;
                                    var0 = var0.state;
                                    var4 = var0.databases;
                                    var1 = _closure4_slot1;
                                    var5 = var4[var1];
                                    var4 = _closure4_slot0;
                                    var1 = _closure4_slot1;
                                    var4 = var4[var1];
                                    var1 = null;
                                    if (!(var1 != var4)) {
                                        _fun16552_ip = 177;
                                        continue _fun16552
                                    }
                                case 52:
                                    var1 = var5.getAllPartitions;
                                    var1 = var1.bind(var5)();
                                    var _closure5_slot0 = var1;
                                    var1 = var4.getAllPartitions;
                                    var1 = var1.bind(var4)();
                                    var _closure5_slot1 = var1;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 7;
                                    var4 = var4[var1];
                                    var1 = undefined;
                                    var6 = var5.bind(var1)(var4);
                                    var5 = var6.runDualReadValidation;
                                    var4 = _closure3_slot1;
                                    var3 = var4.getName;
                                    var9 = var3.bind(var4)();
                                    var8 = _closure4_slot1;
                                    var3 = global;
                                    var3 = var3.HermesInternal;
                                    var7 = var3.concat;
                                    var4 = '';
                                    var3 = ':';
                                    var4 = var7.bind(var4)(var9, var3, var8);
                                    var3 = 'Kkv';
                                    var2 = function(arg0) { // Environment: var2
                                        _fun16553: for (var _fun16553_ip = 0;;) switch (_fun16553_ip) {
                                            case 0:
                                                var7 = arg0;
                                                var6 = global;
                                                var2 = var6.Object;
                                                var1 = var2.keys;
                                                var0 = _closure5_slot0;
                                                var13 = var1.bind(var2)(var0);
                                                var2 = var6.Object;
                                                var1 = var2.keys;
                                                var0 = _closure5_slot1;
                                                var4 = var1.bind(var2)(var0);
                                                var0 = var13.length;
                                                var3 = 0;
                                                var1 = var3 < var0;
                                                var0 = undefined;
                                                var12 = null;
                                                var11 = 0;
                                                var10 = undefined;
                                                var9 = undefined;
                                                var8 = undefined;
                                                if (!var1) {
                                                    _fun16553_ip = 268;
                                                    continue _fun16553
                                                }
                                            case 80:
                                                var14 = var13[var11];
                                                var1 = _closure5_slot0;
                                                var16 = var1[var14];
                                                var1 = var6.Object;
                                                var1 = var1.prototype;
                                                var17 = var1.hasOwnProperty;
                                                var15 = var17.call;
                                                var1 = _closure5_slot1;
                                                var1 = var15.bind(var17)(var1, var14);
                                                if (var1) {
                                                    _fun16553_ip = 139;
                                                    continue _fun16553
                                                }
                                            case 127:
                                                var1 = _closure3_slot3;
                                                var1 = var7.bind(var0)(var16, var1);
                                                _fun16553_ip = 253;
                                                continue _fun16553;
                                            case 139:
                                                var1 = _closure5_slot1;
                                                var15 = var1[var14];
                                                var1 = var16.derived;
                                                var1 = var1.memoized;
                                                var17 = _closure3_slot2;
                                                var14 = var1[var17];
                                                var1 = var15.derived;
                                                var1 = var1.memoized;
                                                var1 = var1[var17];
                                                if (!(var12 != var14)) {
                                                    _fun16553_ip = 200;
                                                    continue _fun16553
                                                }
                                            case 187:
                                                var10 = var15;
                                                var9 = var14;
                                                var8 = var1;
                                                if (!(var9 !== var8)) {
                                                    _fun16553_ip = 253;
                                                    continue _fun16553
                                                }
                                            case 200:
                                                var17 = var7.bind(var0)(var16, var15);
                                                var18 = {};
                                                var16 = var16.derived;
                                                var16 = var16.memoized;
                                                var17 = _closure3_slot2;
                                                var16[var17] = var18;
                                                var16 = var15.derived;
                                                var16 = var16.memoized;
                                                var16[var17] = var18;
                                                var10 = var15;
                                                var9 = var14;
                                                var8 = var1;
                                            case 253:
                                                var11 = var11 + 1;
                                                var1 = var13.length;
                                                if (var11 < var1) {
                                                    _fun16553_ip = 80;
                                                    continue _fun16553
                                                }
                                            case 268:
                                                var1 = var4.length;
                                                var1 = var3 < var1;
                                                var3 = 0;
                                                if (!var1) {
                                                    _fun16553_ip = 351;
                                                    continue _fun16553
                                                }
                                            case 282:
                                                var8 = var4[var3];
                                                var1 = var6.Object;
                                                var1 = var1.prototype;
                                                var10 = var1.hasOwnProperty;
                                                var9 = var10.call;
                                                var1 = _closure5_slot0;
                                                var1 = var9.bind(var10)(var1, var8);
                                                if (var1) {
                                                    _fun16553_ip = 339;
                                                    continue _fun16553
                                                }
                                            case 321:
                                                var1 = _closure5_slot1;
                                                var8 = var1[var8];
                                                var1 = _closure3_slot3;
                                                var1 = var7.bind(var0)(var1, var8);
                                            case 339:
                                                var3 = var3 + 1;
                                                var1 = var4.length;
                                                if (var3 < var1) {
                                                    _fun16553_ip = 282;
                                                    continue _fun16553
                                                }
                                            case 351:
                                                return var0;
                                        }
                                    };
                                    var2 = var5.bind(var6)(var4, var3, var2);
                                    return var1;
                                case 177:
                                    var2 = _closure1_slot10;
                                    var1 = var2.warn;
                                    var5 = _closure4_slot1;
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var4 = var0.concat;
                                    var3 = 'Shadow database ';
                                    var0 = ' not found for dual-read validation';
                                    var0 = var4.bind(var3)(var5, var0);
                                    var0 = var1.bind(var2)(var0);
                                    var0 = 1;
                                    return var0;
                            }
                        };
                        var0 = _closure3_slot0;
                        var0 = var0.state;
                        var4 = var0.databases;
                        var0 = undefined;
                        for (var1 in var4)
                            case 55: {
                                case 64: var8 = var1;
                                var _closure4_slot1 = var8;
                                var8 = var6.bind(var0)();
                                _fun16551_ip = 55;
                                continue _fun16551;
                            }
                    case 77:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'addKKVDatabase';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun16554: for (var _fun16554_ip = 0;;) switch (_fun16554_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var1 = this;
                    var6 = _closure1_slot14;
                    var2 = var1.nextVersion;
                    var0 = var2.bind;
                    var11 = var0.bind(var2)(var1);
                    var2 = var6.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var12 = var2;
                    var0 = new var12[var6](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var2 = var1.state;
                    var2 = var2.databases;
                    var2[var4] = var0;
                    var8 = var1.recordCreators;
                    var7 = var8.set;
                    var6 = null;
                    var2 = var3;
                    if (!(var6 == var3)) {
                        _fun16554_ip = 91;
                        continue _fun16554
                    }
                case 87:
                    var2 = _closure1_slot11;
                case 91:
                    var2 = var7.bind(var8)(var4, var2);
                    var2 = var1.shadowDatabases;
                    if (!(var6 != var2)) {
                        _fun16554_ip = 182;
                        continue _fun16554
                    }
                case 107:
                    var8 = _closure1_slot14;
                    var7 = var1.nextVersion;
                    var2 = var7.bind;
                    var11 = var2.bind(var7)(var1);
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var12 = var7;
                    var2 = new var12[var8](var11, var10);
                    var7 = var2 instanceof Object ? var2 : var7;
                    var2 = var1.shadowDatabases;
                    var2[var4] = var7;
                    var2 = var1.shadowRecordCreators;
                    var1 = var2.set;
                    if (!(var6 == var3)) {
                        _fun16554_ip = 176;
                        continue _fun16554
                    }
                case 172:
                    var3 = _closure1_slot11;
                case 176:
                    var1 = var1.bind(var2)(var4, var3);
                case 182:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'addKVDatabase';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun16555: for (var _fun16555_ip = 0;;) switch (_fun16555_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var1 = this;
                    var6 = _closure1_slot14;
                    var2 = var1.nextVersion;
                    var0 = var2.bind;
                    var11 = var0.bind(var2)(var1);
                    var2 = var6.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var12 = var2;
                    var0 = new var12[var6](var11, var10);
                    var6 = var0 instanceof Object ? var0 : var2;
                    var0 = var6.intoKV;
                    var0 = var0.bind(var6)();
                    var2 = var1.state;
                    var2 = var2.databases;
                    var2[var4] = var6;
                    var8 = var1.recordCreators;
                    var7 = var8.set;
                    var6 = null;
                    var2 = var3;
                    if (!(var6 == var3)) {
                        _fun16555_ip = 101;
                        continue _fun16555
                    }
                case 97:
                    var2 = _closure1_slot11;
                case 101:
                    var2 = var7.bind(var8)(var4, var2);
                    var2 = var1.shadowDatabases;
                    if (!(var6 != var2)) {
                        _fun16555_ip = 192;
                        continue _fun16555
                    }
                case 117:
                    var8 = _closure1_slot14;
                    var7 = var1.nextVersion;
                    var2 = var7.bind;
                    var11 = var2.bind(var7)(var1);
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var12 = var7;
                    var2 = new var12[var8](var11, var10);
                    var7 = var2 instanceof Object ? var2 : var7;
                    var2 = var1.shadowDatabases;
                    var2[var4] = var7;
                    var2 = var1.shadowRecordCreators;
                    var1 = var2.set;
                    if (!(var6 == var3)) {
                        _fun16555_ip = 186;
                        continue _fun16555
                    }
                case 182:
                    var3 = _closure1_slot11;
                case 186:
                    var1 = var1.bind(var2)(var4, var3);
                case 192:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'applyChanges';
        var4.key = var6;
        var6 = function arg0() {
            _fun16556: for (var _fun16556_ip = 0;;) switch (_fun16556_ip) {
                case 0:
                    var5 = this;
                    var1 = var5.mode;
                    var0 = 'typescript-libdiscore-dual-read';
                    var4 = var0 === var1;
                    var2 = _closure1_slot16;
                    var0 = undefined;
                    var1 = arg0;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun16556_ip = 79;
                        continue _fun16556
                    }
                case 47:
                    var6 = var2.value;
                    var1 = var5.executeDatabaseChange;
                    var1 = var1.bind(var5)(var6, var4);
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun16556_ip = 47;
                        continue _fun16556
                    }
                case 79:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'clearAllDatabases';
        var4.key = var6;
        var6 = function() {
            _fun16557: for (var _fun16557_ip = 0;;) switch (_fun16557_ip) {
                case 0:
                    var5 = this;
                    var0 = var5.state;
                    var3 = var0.databases;
                    for (var0 in var3)
                        case 22: {
                            case 31: var7 = var0;
                            var6 = var5.state;
                            var6 = var6.databases;
                            var7 = var6[var7];
                            var6 = var7.clear;
                            var6 = var6.bind(var7)();
                            _fun16557_ip = 22;
                            continue _fun16557;
                        }
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'markDirty';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1._nextVersion;
            var0 = var0 + 1;
            var1._nextVersion = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'executeDatabaseChange';
        var4.key = var6;
        var6 = function arg0() {
            _fun16559: for (var _fun16559_ip = 0;;) switch (_fun16559_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arguments[1];
                    var5 = this;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun16559_ip = 17;
                        continue _fun16559
                    }
                case 15:
                    var3 = false;
                case 17:
                    var4 = var1.databaseName;
                    var2 = var1.opcodes;
                    var1 = var5.nextVersion;
                    var14 = var1.bind(var5)();
                    if (var3) {
                        _fun16559_ip = 55;
                        continue _fun16559
                    }
                case 42:
                    var1 = var5.state;
                    var1 = var1.databases;
                    _fun16559_ip = 61;
                    continue _fun16559;
                case 55:
                    var1 = var5.shadowDatabases;
                case 61:
                    if (var3) {
                        _fun16559_ip = 72;
                        continue _fun16559
                    }
                case 64:
                    var3 = var5.recordCreators;
                    _fun16559_ip = 78;
                    continue _fun16559;
                case 72:
                    var3 = var5.shadowRecordCreators;
                case 78:
                    var13 = var1[var4];
                    var1 = null;
                    if (!(var1 != var13)) {
                        _fun16559_ip = 459;
                        continue _fun16559
                    }
                case 91:
                    var1 = var3.get;
                    var12 = var1.bind(var3)(var4);
                    var1 = _closure1_slot16;
                    var11 = var1.bind(var0)(var2);
                    var2 = var11.bind(var0)();
                    var1 = var2.done;
                    var10 = 'clearDatabase';
                    var9 = 'removeRecord';
                    var8 = 'setRecord';
                    var7 = 'updateRecord';
                    var6 = 'setPartition';
                    var5 = 'removePartition';
                    var3 = var2;
                    var2 = undefined;
                    if (var1) {
                        _fun16559_ip = 457;
                        continue _fun16559
                    }
                case 159:
                    var1 = var3.value;
                    var16 = var1.opcode;
                    if (!(var5 !== var16)) {
                        _fun16559_ip = 415;
                        continue _fun16559
                    }
                case 177:
                    if (!(var6 !== var16)) {
                        _fun16559_ip = 347;
                        continue _fun16559
                    }
                case 184:
                    if (!(var7 !== var16)) {
                        _fun16559_ip = 306;
                        continue _fun16559
                    }
                case 188:
                    if (!(var8 !== var16)) {
                        _fun16559_ip = 257;
                        continue _fun16559
                    }
                case 192:
                    if (!(var9 !== var16)) {
                        _fun16559_ip = 224;
                        continue _fun16559
                    }
                case 196:
                    var15 = var2;
                    if (!(var10 === var16)) {
                        _fun16559_ip = 436;
                        continue _fun16559
                    }
                case 206:
                    var16 = var13.clear;
                    var16 = var16.bind(var13)();
                    var15 = var2;
                    _fun16559_ip = 436;
                    continue _fun16559;
                case 224:
                    var18 = var13.removeRecord;
                    var17 = var1.partitionKey;
                    var16 = var1.clusteringKey;
                    var16 = var18.bind(var13)(var17, var16, var14);
                    var15 = var2;
                    _fun16559_ip = 436;
                    continue _fun16559;
                case 257:
                    var19 = var13.setRecord;
                    var18 = var1.partitionKey;
                    var27 = var1.clusteringKey;
                    var16 = var1.value;
                    var26 = var12.bind(var0)(var16);
                    var29 = var13;
                    var28 = var18;
                    var25 = var14;
                    var16 = var29[var19](var28, var27, var26, var25, var24);
                    var15 = var2;
                    _fun16559_ip = 436;
                    continue _fun16559;
                case 306:
                    var19 = var13.updateRecord;
                    var28 = var1.partitionKey;
                    var27 = var1.clusteringKey;
                    var26 = var1.value;
                    var29 = var13;
                    var25 = var12;
                    var24 = var14;
                    var16 = var29[var19](var28, var27, var26, var25, var24, var23);
                    var15 = var2;
                    _fun16559_ip = 436;
                    continue _fun16559;
                case 347:
                    var16 = var1.partition;
                    var20 = var16;
                    for (var17 in var20)
                        case 364: {
                            case 373: var23 = var17;
                            var22 = var16[var23];
                            var22 = var12.bind(var0)(var22);
                            var16[var23] = var22;
                            _fun16559_ip = 364;
                            continue _fun16559;
                        }
                case 391:
                    var18 = var13.setPartition;
                    var17 = var1.partitionKey;
                    var17 = var18.bind(var13)(var17, var16, var14);
                    var15 = var16;
                    _fun16559_ip = 436;
                    continue _fun16559;
                case 415:
                    var16 = var13.removePartition;
                    var1 = var1.partitionKey;
                    var1 = var16.bind(var13)(var1, var14);
                    var15 = var2;
                case 436:
                    var16 = var11.bind(var0)();
                    var1 = var16.done;
                    var2 = var15;
                    var3 = var16;
                    if (!var1) {
                        _fun16559_ip = 159;
                        continue _fun16559
                    }
                case 457:
                    return var0;
                case 459:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = 'Database ';
                    var0 = ' does not exist';
                    var28 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var29 = var1;
                    var0 = new var29[var2](var28, var27);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'nextVersion';
        var4.key = var6;
        var5 = function() {
            var2 = this;
            var0 = var2._nextVersion;
            var0 = parseFloat(var0);
            var1 = var0 + 1;
            var2._nextVersion = var1;
            return var0;
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var5);
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/libdiscore/stores/LibdiscoreStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.KVDatabase = var4;
    var2.KKVDatabase = var3;
    var2.LibdiscoreStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 3, 806, 1415, 566, 2]);