// modules/errors/av_errors/AVErrorStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun64504: for (var _fun64504_ip = 0;;) switch (_fun64504_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun64504_ip = 46;
                    continue _fun64504
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun64504_ip = 55;
                    continue _fun64504
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun64504_ip = 343;
                    continue _fun64504
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun64504_ip = 323;
                    continue _fun64504
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun64504_ip = 283;
                    continue _fun64504
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun64504_ip = 270;
                    continue _fun64504
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
                    _fun64504_ip = 163;
                    continue _fun64504
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun64504_ip = 179;
                    continue _fun64504
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun64504_ip = 249;
                    continue _fun64504
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun64504_ip = 249;
                    continue _fun64504
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun64504_ip = 234;
                    continue _fun64504
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun64504_ip = 247;
                    continue _fun64504
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun64504_ip = 265;
                continue _fun64504;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun64504_ip = 283;
                continue _fun64504;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun64504_ip = 323;
                    continue _fun64504
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
                    _fun64504_ip = 330;
                    continue _fun64504
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun64505: for (var _fun64505_ip = 0;;) switch (_fun64505_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun64505_ip = 56;
                                continue _fun64505
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
                            _fun64505_ip = 67;
                            continue _fun64505;
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
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun64506: for (var _fun64506_ip = 0;;) switch (_fun64506_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun64506_ip = 23;
                    continue _fun64506
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun64506_ip = 33;
                    continue _fun64506
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
                    _fun64506_ip = 70;
                    continue _fun64506
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun64506_ip = 55;
                    continue _fun64506
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        _fun64507: for (var _fun64507_ip = 0;;) switch (_fun64507_ip) {
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
                _fun64507_ip = 74;
                continue _fun64507;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        var0 = arg0;
        var1 = var0.type;
        var0 = arg1;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot13 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = var1.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot8 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun64512: for (var _fun64512_ip = 0;;) switch (_fun64512_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun64512_ip = 69;
                        continue _fun64512
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun64512_ip = 105;
                    continue _fun64512;
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
        var0 = 'hasActiveErrorOfType';
        var4.key = var0;
        var0 = function arg0() {
            _fun64513: for (var _fun64513_ip = 0;;) switch (_fun64513_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun64513_ip = 30;
                        continue _fun64513
                    }
                case 26:
                    var0 = new Array(0);
                case 30:
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getActiveErrors';
        var4.key = var6;
        var6 = function() {
            _fun64514: for (var _fun64514_ip = 0;;) switch (_fun64514_ip) {
                case 0:
                    var3 = _closure1_slot8;
                    var1 = global;
                    var2 = var1.Map;
                    var2 = var3 instanceof var2;
                    if (var2) {
                        _fun64514_ip = 52;
                        continue _fun64514
                    }
                case 22:
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var4 = var2;
                    var1 = new var4[var1](var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    _closure1_slot8 = var1;
                case 52:
                    var0 = _closure1_slot8;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getActiveErrorsOfType';
        var4.key = var6;
        var5 = function arg0() {
            _fun64515: for (var _fun64515_ip = 0;;) switch (_fun64515_ip) {
                case 0:
                    var7 = arg0;
                    var0 = new Array(0);
                    var2 = _closure1_slot9;
                    var1 = var2.get;
                    var2 = var1.bind(var2)(var7);
                    var5 = null;
                    if (!(var5 != var2)) {
                        _fun64515_ip = 119;
                        continue _fun64515
                    }
                case 30:
                    var1 = _closure1_slot10;
                    var4 = undefined;
                    var3 = var1.bind(var4)(var2);
                    var2 = var3.bind(var4)();
                    var1 = var2.done;
                    if (var1) {
                        _fun64515_ip = 117;
                        continue _fun64515
                    }
                case 53:
                    var9 = var2.value;
                    var8 = _closure1_slot8;
                    var1 = var8.get;
                    var8 = var1.bind(var8)(var9);
                    var1 = var5 != var8;
                    if (!var1) {
                        _fun64515_ip = 89;
                        continue _fun64515
                    }
                case 79:
                    var9 = _closure1_slot13;
                    var1 = var9.bind(var4)(var8, var7);
                case 89:
                    if (!var1) {
                        _fun64515_ip = 102;
                        continue _fun64515
                    }
                case 92:
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var8);
                case 102:
                    var8 = var3.bind(var4)();
                    var1 = var8.done;
                    var2 = var8;
                    if (!var1) {
                        _fun64515_ip = 53;
                        continue _fun64515
                    }
                case 117:
                    return var0;
                case 119:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'AVErrorStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var3 = function arg0() {
        _fun64516: for (var _fun64516_ip = 0;;) switch (_fun64516_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.activeErrors;
                var0 = global;
                var2 = var0.Map;
                var2 = var1 instanceof var2;
                if (!var2) {
                    _fun64516_ip = 365;
                    continue _fun64516
                }
            case 27:
                var3 = _closure1_slot8;
                var2 = var0.Map;
                var2 = var3 instanceof var2;
                if (var2) {
                    _fun64516_ip = 77;
                    continue _fun64516
                }
            case 47:
                var2 = var0.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var3;
                var2 = new var15[var2](var14);
                var2 = var2 instanceof Object ? var2 : var3;
                _closure1_slot8 = var2;
            case 77:
                var4 = var0.Set;
                var2 = var1.keys;
                var14 = var2.bind(var1)();
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var15 = var3;
                var2 = new var15[var4](var14, var13);
                var5 = var2 instanceof Object ? var2 : var3;
                var4 = var0.Set;
                var3 = _closure1_slot8;
                var2 = var3.keys;
                var14 = var2.bind(var3)();
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var15 = var3;
                var2 = new var15[var4](var14, var13);
                var4 = var2 instanceof Object ? var2 : var3;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 7;
                var2 = var6[var2];
                var7 = undefined;
                var3 = var3.bind(var7)(var2);
                var2 = var3.areSetsEqual;
                var2 = var2.bind(var3)(var5, var4);
                if (var2) {
                    _fun64516_ip = 365;
                    continue _fun64516
                }
            case 191:
                _closure1_slot8 = var1;
                var0 = var0.Map;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var15 = var1;
                var0 = new var15[var0](var14);
                var0 = var0 instanceof Object ? var0 : var1;
                _closure1_slot9 = var0;
                var1 = _closure1_slot10;
                var2 = _closure1_slot8;
                var0 = var2.entries;
                var0 = var0.bind(var2)();
                var6 = var1.bind(var7)(var0);
                var1 = var6.bind(var7)();
                var0 = var1.done;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                var2 = null;
                if (var0) {
                    _fun64516_ip = 365;
                    continue _fun64516
                }
            case 270:
                var9 = var1.value;
                var0 = _closure1_slot2;
                var0 = var0.bind(var7)(var9, var5);
                var10 = var0[var4];
                var0 = var0[var3];
                var12 = _closure1_slot9;
                var11 = var12.get;
                var9 = var0.type;
                var11 = var11.bind(var12)(var9);
                if (!(var2 == var11)) {
                    _fun64516_ip = 320;
                    continue _fun64516
                }
            case 316:
                var11 = new Array(0);
            case 320:
                var9 = var11.push;
                var9 = var9.bind(var11)(var10);
                var10 = _closure1_slot9;
                var9 = var10.set;
                var0 = var0.type;
                var0 = var9.bind(var10)(var0, var11);
                var9 = var6.bind(var7)();
                var0 = var9.done;
                var1 = var9;
                if (!var0) {
                    _fun64516_ip = 270;
                    continue _fun64516
                }
            case 365:
                var0 = undefined;
                return var0;
        }
    };
    var1.ACTIVE_AV_ERRORS_CHANGED = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/AVErrorStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 566, 1413, 806, 2]);