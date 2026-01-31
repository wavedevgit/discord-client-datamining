// modules/queries/ArraySearch.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun107430: for (var _fun107430_ip = 0;;) switch (_fun107430_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun107430_ip = 46;
                    continue _fun107430
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun107430_ip = 55;
                    continue _fun107430
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun107430_ip = 345;
                    continue _fun107430
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun107430_ip = 323;
                    continue _fun107430
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun107430_ip = 283;
                    continue _fun107430
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun107430_ip = 270;
                    continue _fun107430
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
                    _fun107430_ip = 163;
                    continue _fun107430
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun107430_ip = 179;
                    continue _fun107430
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun107430_ip = 249;
                    continue _fun107430
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun107430_ip = 249;
                    continue _fun107430
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun107430_ip = 234;
                    continue _fun107430
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun107430_ip = 247;
                    continue _fun107430
                }
            case 234:
                var8 = _closure1_slot1;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun107430_ip = 265;
                continue _fun107430;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun107430_ip = 283;
                continue _fun107430;
            case 270:
                var6 = _closure1_slot1;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun107430_ip = 323;
                    continue _fun107430
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
                    _fun107430_ip = 330;
                    continue _fun107430
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun107431: for (var _fun107431_ip = 0;;) switch (_fun107431_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun107431_ip = 56;
                                continue _fun107431
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
                            _fun107431_ip = 67;
                            continue _fun107431;
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
    var _closure1_slot0 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun107432: for (var _fun107432_ip = 0;;) switch (_fun107432_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun107432_ip = 23;
                    continue _fun107432
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun107432_ip = 33;
                    continue _fun107432
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
                    _fun107432_ip = 70;
                    continue _fun107432
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun107432_ip = 55;
                    continue _fun107432
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = function(arg0, arg1) { // Original name: sortGroup, environment: var1
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.sort;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun107434: for (var _fun107434_ip = 0;;) switch (_fun107434_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var1 = _closure1_slot0;
                    var0 = _closure2_slot0;
                    var5 = undefined;
                    var4 = var1.bind(var5)(var0);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var0 = 0;
                    var3 = var2;
                    if (var1) {
                        _fun107434_ip = 78;
                        continue _fun107434
                    }
                case 44:
                    var1 = var3.value;
                    var1 = var1.bind(var5)(var7, var6);
                    if (!(var0 === var1)) {
                        _fun107434_ip = 76;
                        continue _fun107434
                    }
                case 59:
                    var8 = var4.bind(var5)();
                    var2 = var8.done;
                    var3 = var8;
                    if (var2) {
                        _fun107434_ip = 78;
                        continue _fun107434
                    }
                case 74:
                    _fun107434_ip = 44;
                    continue _fun107434;
                case 76:
                    return var1;
                case 78:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/queries/ArraySearch.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: queryData, environment: var1
        _fun107435: for (var _fun107435_ip = 0;;) switch (_fun107435_ip) {
            case 0:
                var2 = arg1;
                var1 = var2.limit;
                var0 = null;
                var4 = var0 != var1;
                var3 = inf;
                if (!var4) {
                    _fun107435_ip = 32;
                    continue _fun107435
                }
            case 29:
                var3 = var1;
            case 32:
                var6 = var2.filterPredicates;
                if (!(var0 == var6)) {
                    _fun107435_ip = 46;
                    continue _fun107435
                }
            case 42:
                var6 = new Array(0);
            case 46:
                var4 = function(arg0, arg1) { // Original name: applyFilters, environment: var5
                    var2 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure3_slot0;
                        var1 = var2.every;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure4_slot0;
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = undefined;
                var1 = arg0;
                var7 = var4.bind(var8)(var1, var6);
                var1 = var2.bucketPredicates;
                if (!(var0 != var1)) {
                    _fun107435_ip = 91;
                    continue _fun107435
                }
            case 74:
                var1 = var2.bucketPredicates;
                var4 = var1.length;
                var1 = 0;
                if (!(!(var4 > var1))) {
                    _fun107435_ip = 101;
                    continue _fun107435
                }
            case 91:
                var1 = new Array(1);
                var1[0] = var7;
                _fun107435_ip = 170;
                continue _fun107435;
            case 101:
                var4 = var7.length;
                if (!(!(var3 >= var4))) {
                    _fun107435_ip = 140;
                    continue _fun107435
                }
            case 110:
                var6 = var2.bucketPredicates;
                if (!(var0 == var6)) {
                    _fun107435_ip = 124;
                    continue _fun107435
                }
            case 120:
                var6 = new Array(0);
            case 124:
                var4 = function(arg0, arg1, arg2) { // Original name: applyBucketing, environment: var5
                    _fun107441: for (var _fun107441_ip = 0;;) switch (_fun107441_ip) {
                        case 0:
                            var9 = arg0;
                            var8 = arg2;
                            var0 = new Array(0);
                            var2 = _closure1_slot0;
                            var6 = undefined;
                            var1 = arg1;
                            var5 = var2.bind(var6)(var1);
                            var2 = var5.bind(var6)();
                            var1 = var2.done;
                            var4 = 0;
                            var3 = var2;
                            var2 = undefined;
                            if (var1) {
                                _fun107441_ip = 192;
                                continue _fun107441
                            }
                        case 51:
                            var15 = var3.value;
                            var11 = new Array(0);
                            var12 = new Array(0);
                            var1 = _closure1_slot0;
                            var14 = var1.bind(var6)(var9);
                            var13 = var14.bind(var6)();
                            var1 = var13.done;
                            if (var1) {
                                _fun107441_ip = 138;
                                continue _fun107441
                            }
                        case 85:
                            var16 = var13.value;
                            var1 = var15.bind(var6)(var16);
                            if (var1) {
                                _fun107441_ip = 110;
                                continue _fun107441
                            }
                        case 98:
                            var1 = var11.push;
                            var1 = var1.bind(var11)(var16);
                            _fun107441_ip = 120;
                            continue _fun107441;
                        case 110:
                            var1 = var12.push;
                            var1 = var1.bind(var12)(var16);
                        case 120:
                            var17 = var14.bind(var6)();
                            var1 = var17.done;
                            var13 = var17;
                            var2 = var16;
                            if (!var1) {
                                _fun107441_ip = 85;
                                continue _fun107441
                            }
                        case 138:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var12);
                            var12 = var0.reduce;
                            var1 = function(arg0, arg1) { // Environment: var10
                                var0 = arg1;
                                var1 = var0.length;
                                var0 = arg0;
                                var0 = var1 + var0;
                                return var0;
                            };
                            var1 = var12.bind(var0)(var1, var4);
                            if (!(!(var1 >= var8))) {
                                _fun107441_ip = 192;
                                continue _fun107441
                            }
                        case 171:
                            var12 = var5.bind(var6)();
                            var1 = var12.done;
                            var3 = var12;
                            var9 = var11;
                            if (!var1) {
                                _fun107441_ip = 51;
                                continue _fun107441
                            }
                        case 192:
                            return var0;
                    }
                };
                var4 = var4.bind(var8)(var7, var6, var3);
                _fun107435_ip = 167;
                continue _fun107435;
            case 140:
                var6 = var2.bucketPredicates;
                if (!(var0 == var6)) {
                    _fun107435_ip = 154;
                    continue _fun107435
                }
            case 150:
                var6 = new Array(0);
            case 154:
                var5 = function(arg0, arg1) { // Original name: applyBucketingSingleIteration, environment: var5
                    _fun107439: for (var _fun107439_ip = 0;;) switch (_fun107439_ip) {
                        case 0:
                            var6 = arg1;
                            var0 = global;
                            var2 = var0.Array;
                            var10 = var6.length;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = var1;
                            var0 = new var11[var2](var10, var9);
                            var2 = var0 instanceof Object ? var0 : var1;
                            var1 = var2.fill;
                            var0 = null;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.map;
                            var0 = function() { // Environment: var0
                                var0 = new Array(0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var2 = _closure1_slot0;
                            var5 = undefined;
                            var1 = arg0;
                            var4 = var2.bind(var5)(var1);
                            var2 = var4.bind(var5)();
                            var1 = var2.done;
                            var3 = 0;
                            if (var1) {
                                _fun107439_ip = 176;
                                continue _fun107439
                            }
                        case 99:
                            var8 = var2.value;
                            var1 = var6.length;
                            var1 = var3 < var1;
                            var9 = 0;
                            if (!var1) {
                                _fun107439_ip = 161;
                                continue _fun107439
                            }
                        case 118:
                            var1 = var6[var9];
                            var7 = var1.bind(var6)(var8);
                            var1 = var9;
                            if (var7) {
                                _fun107439_ip = 147;
                                continue _fun107439
                            }
                        case 133:
                            var9 = var1 + 1;
                            var7 = var6.length;
                            if (var9 < var7) {
                                _fun107439_ip = 118;
                                continue _fun107439
                            }
                        case 145:
                            _fun107439_ip = 161;
                            continue _fun107439;
                        case 147:
                            var7 = var0[var1];
                            var1 = var7.push;
                            var1 = var1.bind(var7)(var8);
                        case 161:
                            var7 = var4.bind(var5)();
                            var1 = var7.done;
                            var2 = var7;
                            if (!var1) {
                                _fun107439_ip = 99;
                                continue _fun107439
                            }
                        case 176:
                            return var0;
                    }
                };
                var4 = var5.bind(var8)(var7, var6);
            case 167:
                var1 = var4;
            case 170:
                var7 = var2.sortComparers;
                if (!(var0 == var7)) {
                    _fun107435_ip = 184;
                    continue _fun107435
                }
            case 180:
                var7 = new Array(0);
            case 184:
                var2 = new Array(0);
                var0 = _closure1_slot0;
                var5 = var0.bind(var8)(var1);
                var4 = var5.bind(var8)();
                var0 = var4.done;
                var1 = 0;
                if (var0) {
                    _fun107435_ip = 284;
                    continue _fun107435
                }
            case 214:
                var9 = _closure1_slot2;
                var0 = var4.value;
                var12 = var9.bind(var8)(var0, var7);
                var9 = var2.push;
                var0 = new Array(0);
                var13 = var0;
                var11 = 0;
                var10 = arraySpread(var13, var12, var11);
                var13 = var9;
                var12 = var0;
                var11 = var2;
                var0 = apply(var13, var12, var11);
                var0 = var2.length;
                if (!(!(var0 >= var3))) {
                    _fun107435_ip = 284;
                    continue _fun107435
                }
            case 269:
                var9 = var5.bind(var8)();
                var0 = var9.done;
                var4 = var9;
                if (!var0) {
                    _fun107435_ip = 214;
                    continue _fun107435
                }
            case 284:
                var0 = var2.slice;
                var0 = var0.bind(var2)(var1, var3);
                return var0;
        }
    };
    var2.queryData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);