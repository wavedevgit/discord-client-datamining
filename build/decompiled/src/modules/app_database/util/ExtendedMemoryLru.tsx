// modules/app_database/util/ExtendedMemoryLru.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun40185: for (var _fun40185_ip = 0;;) switch (_fun40185_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40185_ip = 46;
                    continue _fun40185
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40185_ip = 55;
                    continue _fun40185
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40185_ip = 343;
                    continue _fun40185
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40185_ip = 323;
                    continue _fun40185
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40185_ip = 283;
                    continue _fun40185
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40185_ip = 270;
                    continue _fun40185
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
                    _fun40185_ip = 163;
                    continue _fun40185
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40185_ip = 179;
                    continue _fun40185
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40185_ip = 249;
                    continue _fun40185
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40185_ip = 249;
                    continue _fun40185
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40185_ip = 234;
                    continue _fun40185
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40185_ip = 247;
                    continue _fun40185
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40185_ip = 265;
                continue _fun40185;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40185_ip = 283;
                continue _fun40185;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40185_ip = 323;
                    continue _fun40185
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
                    _fun40185_ip = 330;
                    continue _fun40185
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40186: for (var _fun40186_ip = 0;;) switch (_fun40186_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40186_ip = 56;
                                continue _fun40186
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
                            _fun40186_ip = 67;
                            continue _fun40186;
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
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun40187: for (var _fun40187_ip = 0;;) switch (_fun40187_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40187_ip = 23;
                    continue _fun40187
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40187_ip = 33;
                    continue _fun40187
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
                    _fun40187_ip = 70;
                    continue _fun40187
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40187_ip = 55;
                    continue _fun40187
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function arg0, arg1() {
            var2 = this;
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var5 = var4[var1];
            var5 = var3.bind(var0)(var5);
            var7 = var5.Lru;
            var5 = var7.prototype;
            var6 = Object.create(var5, {
                constructor: {
                    value: var7
                }
            });
            var9 = arg0;
            var10 = var6;
            var5 = new var10[var7](var9, var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var2.primary = var5;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var4 = var1.Lru;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var9 = arg1;
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.extended = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'totalLength';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0.primary;
            var1 = var1.length;
            var0 = var0.extended;
            var0 = var0.length;
            var0 = var1 + var0;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(17);
        var1[0] = var0;
        var0 = {};
        var5 = 'primaryCapacity';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.primary;
            var0 = var0.capacity;
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'extendedCapacity';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.extended;
            var0 = var0.capacity;
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0.primary;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = var0.extended;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.primary;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'hasExtended';
        var0.key = var5;
        var5 = function arg0() {
            _fun40195: for (var _fun40195_ip = 0;;) switch (_fun40195_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var1.primary;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun40195_ip = 41;
                        continue _fun40195
                    }
                case 25:
                    var2 = var1.extended;
                    var1 = var2.has;
                    var0 = var1.bind(var2)(var3);
                case 41:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.primary;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'put';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun40197: for (var _fun40197_ip = 0;;) switch (_fun40197_ip) {
                case 0:
                    var1 = this;
                    var4 = var1.primary;
                    var3 = var4.put;
                    var2 = arg0;
                    var0 = arg1;
                    var5 = var3.bind(var4)(var2, var0);
                    var0 = undefined;
                    if (!(var0 !== var5)) {
                        _fun40197_ip = 64;
                        continue _fun40197
                    }
                case 33:
                    var4 = var1.extended;
                    var3 = var4.put;
                    var1 = 0;
                    var2 = var5[var1];
                    var1 = 1;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var2, var1);
                case 64:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            _fun40198: for (var _fun40198_ip = 0;;) switch (_fun40198_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var1 = var3.primary;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var4);
                    var2 = var3.extended;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var4);
                    var2 = var3.upstreamItems;
                    var2 = var2.bind(var3)();
                    if (var0) {
                        _fun40198_ip = 56;
                        continue _fun40198
                    }
                case 53:
                    var0 = var1;
                case 56:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'upstreamItems';
        var0.key = var5;
        var5 = function() {
            _fun40199: for (var _fun40199_ip = 0;;) switch (_fun40199_ip) {
                case 0:
                    var8 = this;
                    var0 = var8.canUpstreamItems;
                    var0 = var0.bind(var8)();
                    if (!var0) {
                        _fun40199_ip = 154;
                        continue _fun40199
                    }
                case 19:
                    var1 = _closure1_slot6;
                    var2 = var8.extended;
                    var0 = var2.entries;
                    var0 = var0.bind(var2)();
                    var6 = undefined;
                    var5 = var1.bind(var6)(var0);
                    var1 = var5.bind(var6)();
                    var0 = var1.done;
                    var4 = 2;
                    var3 = 0;
                    var2 = 1;
                    if (var0) {
                        _fun40199_ip = 154;
                        continue _fun40199
                    }
                case 69:
                    var9 = var1.value;
                    var0 = _closure1_slot3;
                    var0 = var0.bind(var6)(var9, var4);
                    var10 = var0[var3];
                    var11 = var0[var2];
                    var9 = var8.primary;
                    var0 = var9.put;
                    var0 = var0.bind(var9)(var10, var11);
                    var9 = var8.extended;
                    var0 = var9.delete;
                    var0 = var0.bind(var9)(var10);
                    var0 = var8.canUpstreamItems;
                    var0 = var0.bind(var8)();
                    if (!var0) {
                        _fun40199_ip = 154;
                        continue _fun40199
                    }
                case 139:
                    var9 = var5.bind(var6)();
                    var0 = var9.done;
                    var1 = var9;
                    if (!var0) {
                        _fun40199_ip = 69;
                        continue _fun40199
                    }
                case 154:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'canUpstreamItems';
        var0.key = var5;
        var5 = function() {
            _fun40200: for (var _fun40200_ip = 0;;) switch (_fun40200_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.primary;
                    var2 = var0.length;
                    var0 = var1.primary;
                    var0 = var0.capacity;
                    var0 = var2 < var0;
                    if (!var0) {
                        _fun40200_ip = 50;
                        continue _fun40200
                    }
                case 33:
                    var1 = var1.extended;
                    var2 = var1.length;
                    var1 = 0;
                    var0 = var2 > var1;
                case 50:
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'entries';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.primary;
            var0 = var1.entries;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'keys';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.primary;
            var0 = var1.keys;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'values';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.primary;
            var0 = var1.values;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'allEntries';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.chain;
            var4 = var0.extended;
            var1 = var4.entries;
            var1 = var1.bind(var4)();
            var4 = var0.primary;
            var0 = var4.entries;
            var0 = var0.bind(var4)();
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'allKeys';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.chain;
            var4 = var0.extended;
            var1 = var4.keys;
            var1 = var1.bind(var4)();
            var4 = var0.primary;
            var0 = var4.keys;
            var0 = var0.bind(var4)();
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'allValues';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.chain;
            var4 = var0.extended;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var4 = var0.primary;
            var0 = var4.values;
            var0 = var0.bind(var4)();
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var4;
        var1[16] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/util/ExtendedMemoryLru.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ExtendedMemoryLru = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 4370, 4371, 2]);