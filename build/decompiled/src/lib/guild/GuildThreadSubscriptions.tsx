// lib/guild/GuildThreadSubscriptions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function arg0, arg1() {
        _fun50607: for (var _fun50607_ip = 0;;) switch (_fun50607_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun50607_ip = 46;
                    continue _fun50607
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun50607_ip = 55;
                    continue _fun50607
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun50607_ip = 343;
                    continue _fun50607
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun50607_ip = 323;
                    continue _fun50607
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun50607_ip = 283;
                    continue _fun50607
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun50607_ip = 270;
                    continue _fun50607
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
                    _fun50607_ip = 163;
                    continue _fun50607
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun50607_ip = 179;
                    continue _fun50607
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun50607_ip = 249;
                    continue _fun50607
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun50607_ip = 249;
                    continue _fun50607
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun50607_ip = 234;
                    continue _fun50607
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun50607_ip = 247;
                    continue _fun50607
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun50607_ip = 265;
                continue _fun50607;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun50607_ip = 283;
                continue _fun50607;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun50607_ip = 323;
                    continue _fun50607
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
                    _fun50607_ip = 330;
                    continue _fun50607
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun50608: for (var _fun50608_ip = 0;;) switch (_fun50608_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun50608_ip = 56;
                                continue _fun50608
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
                            _fun50608_ip = 67;
                            continue _fun50608;
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
        _fun50609: for (var _fun50609_ip = 0;;) switch (_fun50609_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun50609_ip = 23;
                    continue _fun50609
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun50609_ip = 33;
                    continue _fun50609
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
                    _fun50609_ip = 70;
                    continue _fun50609
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun50609_ip = 55;
                    continue _fun50609
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var2._subscriptions = var1;
            var1 = arg0;
            var2._onChange = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function() {
            var1 = {};
            var0 = this;
            var0._subscriptions = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var1 = var2._get;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = var1.keys;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getSubscribedThreadIds';
        var0.key = var5;
        var5 = function() {
            _fun50614: for (var _fun50614_ip = 0;;) switch (_fun50614_ip) {
                case 0:
                    var11 = this;
                    var0 = global;
                    var0 = var0.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var14 = var1;
                    var0 = new var14[var0](var13);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var9 = var11._subscriptions;
                    var4 = undefined;
                    for (var6 in var9)
                        case 50: {
                            case 59: var3 = var6;
                            var2 = _closure1_slot4;
                            var1 = var11._subscriptions;
                            var3 = var1[var3];
                            var1 = var3.keys;
                            var1 = var1.bind(var3)();
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.bind(var4)();
                            var1 = var2.done;
                            if (var1) {
                                _fun50614_ip = 50;
                                continue _fun50614
                            }
                            case 102: var12 = var2.value;
                            var1 = var0.add;
                            var1 = var1.bind(var0)(var12);
                            var12 = var3.bind(var4)();
                            var1 = var12.done;
                            var2 = var12;
                            if (var1) {
                                _fun50614_ip = 50;
                                continue _fun50614
                            }
                            case 132: _fun50614_ip = 102;
                            continue _fun50614;
                        }
                case 134:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '_get';
        var0.key = var5;
        var5 = function arg0() {
            _fun50615: for (var _fun50615_ip = 0;;) switch (_fun50615_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._subscriptions;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun50615_ip = 81;
                        continue _fun50615
                    }
                case 22:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var4 = {
                        'max': 3,
                        'updateAgeOnGet': true
                    };
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 81:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function arg0() {
            _fun50616: for (var _fun50616_ip = 0;;) switch (_fun50616_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = var2._subscriptions;
                    var0 = var3 in var0;
                    if (!var0) {
                        _fun50616_ip = 45;
                        continue _fun50616
                    }
                case 19:
                    var0 = var2._subscriptions;
                    var0 = delete var0[var3];
                    var1 = var2._onChange;
                    var0 = new Array(0);
                    var0 = var1.bind(var2)(var3, var0);
                case 45:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'subscribe';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun50617: for (var _fun50617_ip = 0;;) switch (_fun50617_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var6 = arg2;
                    var2 = this;
                    var0 = var2._get;
                    var3 = var0.bind(var2)(var5);
                    var0 = var3.has;
                    var0 = var0.bind(var3)(var4);
                    if (var0) {
                        _fun50617_ip = 149;
                        continue _fun50617
                    }
                case 36:
                    var0 = null;
                    var0 = var0 != var6;
                    if (!var0) {
                        _fun50617_ip = 55;
                        continue _fun50617
                    }
                case 45:
                    var1 = var3.has;
                    var0 = var1.bind(var3)(var6);
                case 55:
                    if (!var0) {
                        _fun50617_ip = 86;
                        continue _fun50617
                    }
                case 58:
                    var1 = var3.set;
                    var0 = global;
                    var7 = var0.Date;
                    var0 = var7.now;
                    var0 = var0.bind(var7)();
                    var0 = var1.bind(var3)(var6, var0);
                case 86:
                    var1 = var3.set;
                    var0 = global;
                    var6 = var0.Date;
                    var0 = var6.now;
                    var0 = var0.bind(var6)();
                    var0 = var1.bind(var3)(var4, var0);
                    var0 = var2._subscriptions;
                    var0[var5] = var3;
                    var1 = var2._onChange;
                    var0 = var3.keys;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var5, var0);
                    var0 = true;
                    _fun50617_ip = 179;
                    continue _fun50617;
                case 149:
                    var2 = var3.set;
                    var1 = global;
                    var5 = var1.Date;
                    var1 = var5.now;
                    var1 = var1.bind(var5)();
                    var1 = var2.bind(var3)(var4, var1);
                    var0 = false;
                case 179:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'unsubscribe';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun50618: for (var _fun50618_ip = 0;;) switch (_fun50618_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var3 = this;
                    var0 = var3._subscriptions;
                    var0 = var4 in var0;
                    if (var0) {
                        _fun50618_ip = 26;
                        continue _fun50618
                    }
                case 22:
                    var0 = false;
                    return var0;
                case 26:
                    var0 = var3._subscriptions;
                    var5 = var0[var4];
                    var0 = var5.has;
                    var0 = var0.bind(var5)(var2);
                    var1 = !var0;
                    var0 = !var1;
                    if (var1) {
                        _fun50618_ip = 89;
                        continue _fun50618
                    }
                case 55:
                    var1 = var5.del;
                    var1 = var1.bind(var5)(var2);
                    var2 = var3._onChange;
                    var1 = var5.keys;
                    var1 = var1.bind(var5)();
                    var1 = var2.bind(var3)(var4, var1);
                    var0 = true;
                case 89:
                    return var0;
            }
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/guild/GuildThreadSubscriptions.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1386, 2]);