// lib/Histogram.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun93737: for (var _fun93737_ip = 0;;) switch (_fun93737_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93737_ip = 46;
                    continue _fun93737
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93737_ip = 55;
                    continue _fun93737
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93737_ip = 345;
                    continue _fun93737
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93737_ip = 323;
                    continue _fun93737
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93737_ip = 283;
                    continue _fun93737
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93737_ip = 270;
                    continue _fun93737
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
                    _fun93737_ip = 163;
                    continue _fun93737
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93737_ip = 179;
                    continue _fun93737
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93737_ip = 249;
                    continue _fun93737
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93737_ip = 249;
                    continue _fun93737
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93737_ip = 234;
                    continue _fun93737
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93737_ip = 247;
                    continue _fun93737
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93737_ip = 265;
                continue _fun93737;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93737_ip = 283;
                continue _fun93737;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93737_ip = 323;
                    continue _fun93737
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
                    _fun93737_ip = 330;
                    continue _fun93737
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93738: for (var _fun93738_ip = 0;;) switch (_fun93738_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93738_ip = 56;
                                continue _fun93738
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
                            _fun93738_ip = 67;
                            continue _fun93738;
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
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        _fun93739: for (var _fun93739_ip = 0;;) switch (_fun93739_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93739_ip = 23;
                    continue _fun93739
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93739_ip = 33;
                    continue _fun93739
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
                    _fun93739_ip = 70;
                    continue _fun93739
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93739_ip = 55;
                    continue _fun93739
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.Digest;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.digest = var1;
            var1 = 0;
            var2.total = var1;
            var2.samples = var1;
            var2.totalWeight = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addSample';
        var0.key = var1;
        var1 = function arg0() {
            _fun93742: for (var _fun93742_ip = 0;;) switch (_fun93742_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arguments[1];
                    var1 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun93742_ip = 18;
                        continue _fun93742
                    }
                case 15:
                    var5 = 1;
                case 18:
                    var3 = var1.total;
                    var2 = var6 * var5;
                    var2 = var3 + var2;
                    var1.total = var2;
                    var2 = var1.totalWeight;
                    var2 = var2 + var5;
                    var1.totalWeight = var2;
                    var2 = var1.samples;
                    var2 = var2 + 1;
                    var1.samples = var2;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.TDigest;
                    var2 = var2.prototype;
                    var4 = var2.push;
                    var3 = var4.call;
                    var2 = var1.digest;
                    var2 = var3.bind(var4)(var2, var6, var5);
                    var2 = var1.digest;
                    var1 = var2.check_continuous;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'getReport';
        var0.key = var5;
        var4 = function() {
            _fun93743: for (var _fun93743_ip = 0;;) switch (_fun93743_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var8 = undefined;
                    if (!(var2 === var8)) {
                        _fun93743_ip = 22;
                        continue _fun93743
                    }
                case 12:
                    var2 = [25, 50, 75, 90, 95];
                case 22:
                    var3 = {};
                    var0 = _closure1_slot4;
                    var7 = var0.bind(var8)(var2);
                    var5 = var7.bind(var8)();
                    var0 = var5.done;
                    var6 = 100;
                    var4 = null;
                    var2 = 0;
                    if (var0) {
                        _fun93743_ip = 112;
                        continue _fun93743
                    }
                case 55:
                    var9 = var5.value;
                    var11 = var1.digest;
                    var10 = var11.percentile;
                    var0 = var9 / var6;
                    var10 = var10.bind(var11)(var0);
                    var11 = var4 != var10;
                    var0 = 0;
                    if (!var11) {
                        _fun93743_ip = 93;
                        continue _fun93743
                    }
                case 90:
                    var0 = var10;
                case 93:
                    var3[var9] = var0;
                    var9 = var7.bind(var8)();
                    var0 = var9.done;
                    var5 = var9;
                    if (!var0) {
                        _fun93743_ip = 55;
                        continue _fun93743
                    }
                case 112:
                    var0 = {};
                    var6 = var1.digest;
                    var5 = var6.percentile;
                    var6 = var5.bind(var6)(var2);
                    var7 = var4 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93743_ip = 143;
                        continue _fun93743
                    }
                case 140:
                    var5 = var6;
                case 143:
                    var0.min = var5;
                    var7 = var1.digest;
                    var6 = var7.percentile;
                    var5 = 1;
                    var6 = var6.bind(var7)(var5);
                    var7 = var4 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun93743_ip = 179;
                        continue _fun93743
                    }
                case 176:
                    var5 = var6;
                case 179:
                    var0.max = var5;
                    var6 = var1.digest;
                    var5 = var6.size;
                    var5 = var5.bind(var6)();
                    var6 = var4 != var5;
                    var4 = 0;
                    if (!var6) {
                        _fun93743_ip = 210;
                        continue _fun93743
                    }
                case 207:
                    var4 = var5;
                case 210:
                    var0.count = var4;
                    var0.percentiles = var3;
                    var3 = var1.totalWeight;
                    var3 = var3 > var2;
                    var2 = 0;
                    if (!var3) {
                        _fun93743_ip = 251;
                        continue _fun93743
                    }
                case 235:
                    var4 = var1.total;
                    var3 = var1.totalWeight;
                    var2 = var4 / var3;
                case 251:
                    var0.mean = var2;
                    var1 = var1.samples;
                    var0.samples = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/Histogram.tsx';
    var3 = var4.bind(var5)(var3);
    var2.Histogram = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12258, 2]);