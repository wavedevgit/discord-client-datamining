// modules/activities/useActivityShelfItems.tsx
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
        _fun90321: for (var _fun90321_ip = 0;;) switch (_fun90321_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun90321_ip = 46;
                    continue _fun90321
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun90321_ip = 55;
                    continue _fun90321
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun90321_ip = 345;
                    continue _fun90321
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun90321_ip = 323;
                    continue _fun90321
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun90321_ip = 283;
                    continue _fun90321
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun90321_ip = 270;
                    continue _fun90321
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
                    _fun90321_ip = 163;
                    continue _fun90321
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun90321_ip = 179;
                    continue _fun90321
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun90321_ip = 249;
                    continue _fun90321
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun90321_ip = 249;
                    continue _fun90321
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun90321_ip = 234;
                    continue _fun90321
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun90321_ip = 247;
                    continue _fun90321
                }
            case 234:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun90321_ip = 265;
                continue _fun90321;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun90321_ip = 283;
                continue _fun90321;
            case 270:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun90321_ip = 323;
                    continue _fun90321
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
                    _fun90321_ip = 330;
                    continue _fun90321
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun90322: for (var _fun90322_ip = 0;;) switch (_fun90322_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun90322_ip = 56;
                                continue _fun90322
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
                            _fun90322_ip = 67;
                            continue _fun90322;
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
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        _fun90323: for (var _fun90323_ip = 0;;) switch (_fun90323_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun90323_ip = 23;
                    continue _fun90323
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun90323_ip = 33;
                    continue _fun90323
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
                    _fun90323_ip = 70;
                    continue _fun90323
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun90323_ip = 55;
                    continue _fun90323
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/useActivityShelfItems.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90324: for (var _fun90324_ip = 0;;) switch (_fun90324_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.guildId;
                var6 = var1.enableFilter;
                var7 = undefined;
                if (!(var6 === var7)) {
                    _fun90324_ip = 26;
                    continue _fun90324
                }
            case 24:
                var6 = false;
            case 26:
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var7;
                var _closure2_slot2 = var7;
                var _closure2_slot3 = var7;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var2 = var8[var2];
                var10 = var3.bind(var7)(var2);
                var5 = var10.useStateFromStoresObject;
                var2 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot4;
                    var1 = var2.getFilter;
                    var1 = var1.bind(var2)();
                    var0.filter = var1;
                    return var0;
                };
                var2 = var5.bind(var10)(var4, var2);
                var5 = var2.filter;
                _closure2_slot1 = var5;
                var2 = 3;
                var2 = var8[var2];
                var4 = var3.bind(var7)(var2);
                var2 = var4.useActivityShelfData;
                var4 = var2.bind(var4)(var9);
                var9 = _closure1_slot1;
                var2 = 4;
                var2 = var8[var2];
                var2 = var9.bind(var7)(var2);
                var4 = var2.bind(var7)(var4);
                _closure2_slot2 = var4;
                var2 = 5;
                var2 = var8[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.useDeveloperActivityShelfItems;
                var7 = var2.bind(var3)();
                _closure2_slot3 = var7;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun90326: for (var _fun90326_ip = 0;;) switch (_fun90326_ip) {
                        case 0:
                            var6 = function arg0() {
                                _fun90327: for (var _fun90327_ip = 0;;) switch (_fun90327_ip) {
                                    case 0:
                                        var0 = _closure2_slot0;
                                        var0 = !var0;
                                        if (var0) {
                                            _fun90327_ip = 84;
                                            continue _fun90327
                                        }
                                    case 13:
                                        var3 = _closure2_slot1;
                                        var1 = '';
                                        var1 = var1 === var3;
                                        if (var1) {
                                            _fun90327_ip = 81;
                                            continue _fun90327
                                        }
                                    case 28:
                                        var3 = arg0;
                                        var3 = var3.application;
                                        var4 = var3.name;
                                        var3 = var4.toLowerCase;
                                        var4 = var3.bind(var4)();
                                        var3 = var4.includes;
                                        var5 = _closure2_slot1;
                                        var2 = var5.toLowerCase;
                                        var2 = var2.bind(var5)();
                                        var2 = var3.bind(var4)(var2);
                                        var2 = !var2;
                                        var1 = !var2;
                                    case 81:
                                        var0 = var1;
                                    case 84:
                                        return var0;
                                }
                            };
                            var10 = _closure2_slot3;
                            var3 = new Array(0);
                            var9 = 0;
                            var11 = var3;
                            var0 = arraySpread(var11, var10, var9);
                            var0 = var3.filter;
                            var0 = var0.bind(var3)(var6);
                            var3 = global;
                            var4 = var3.Set;
                            var3 = var0.map;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var0 = var0.application;
                                var0 = var0.id;
                                return var0;
                            };
                            var11 = var3.bind(var0)(var2);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var12 = var3;
                            var2 = new var12[var4](var11, var10);
                            var5 = var2 instanceof Object ? var2 : var3;
                            var2 = _closure1_slot5;
                            var1 = _closure2_slot2;
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.bind(var4)();
                            var1 = var2.done;
                            if (var1) {
                                _fun90326_ip = 178;
                                continue _fun90326
                            }
                        case 114:
                            var7 = var2.value;
                            var8 = var5.has;
                            var1 = var7.application;
                            var1 = var1.id;
                            var1 = var8.bind(var5)(var1);
                            var1 = !var1;
                            if (!var1) {
                                _fun90326_ip = 150;
                                continue _fun90326
                            }
                        case 145:
                            var1 = var6.bind(var4)(var7);
                        case 150:
                            if (!var1) {
                                _fun90326_ip = 163;
                                continue _fun90326
                            }
                        case 153:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var7);
                        case 163:
                            var7 = var3.bind(var4)();
                            var1 = var7.done;
                            var2 = var7;
                            if (!var1) {
                                _fun90326_ip = 114;
                                continue _fun90326
                            }
                        case 178:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7183, 566, 11690, 11691, 11692, 2]);