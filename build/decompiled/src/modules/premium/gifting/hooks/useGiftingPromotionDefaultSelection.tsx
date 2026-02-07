// modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun75916: for (var _fun75916_ip = 0;;) switch (_fun75916_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun75916_ip = 46;
                    continue _fun75916
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun75916_ip = 55;
                    continue _fun75916
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun75916_ip = 345;
                    continue _fun75916
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun75916_ip = 323;
                    continue _fun75916
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun75916_ip = 283;
                    continue _fun75916
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun75916_ip = 270;
                    continue _fun75916
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
                    _fun75916_ip = 163;
                    continue _fun75916
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun75916_ip = 179;
                    continue _fun75916
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun75916_ip = 249;
                    continue _fun75916
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun75916_ip = 249;
                    continue _fun75916
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun75916_ip = 234;
                    continue _fun75916
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun75916_ip = 247;
                    continue _fun75916
                }
            case 234:
                var8 = _closure1_slot2;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun75916_ip = 265;
                continue _fun75916;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun75916_ip = 283;
                continue _fun75916;
            case 270:
                var6 = _closure1_slot2;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun75916_ip = 323;
                    continue _fun75916
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
                    _fun75916_ip = 330;
                    continue _fun75916
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun75917: for (var _fun75917_ip = 0;;) switch (_fun75917_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun75917_ip = 56;
                                continue _fun75917
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
                            _fun75917_ip = 67;
                            continue _fun75917;
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
    var _closure1_slot1 = var0;
    var0 = function arg0, arg1() {
        _fun75918: for (var _fun75918_ip = 0;;) switch (_fun75918_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun75918_ip = 23;
                    continue _fun75918
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun75918_ip = 33;
                    continue _fun75918
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
                    _fun75918_ip = 70;
                    continue _fun75918
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun75918_ip = 55;
                    continue _fun75918
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var6 = 0;
    var4 = var5[var6];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var3 = {};
    var3.Trick = var6;
    var4 = 'Trick';
    var3[var6] = var4;
    var4 = 1;
    var3.Treat = var4;
    var6 = 'Treat';
    var3[var4] = var6;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1, arg2() {
        var6 = arg0;
        var5 = arg1;
        var4 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var _closure2_slot2 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useRef;
        var1 = global;
        var7 = var1.Math;
        var1 = var7.random;
        var1 = var1.bind(var7)();
        var1 = var2.bind(var3)(var1);
        var _closure2_slot3 = var1;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun75920: for (var _fun75920_ip = 0;;) switch (_fun75920_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun75920_ip = 469;
                        continue _fun75920
                    }
                case 18:
                    var2 = _closure2_slot0;
                    var4 = var2.length;
                    var2 = 0;
                    if (!(var2 !== var4)) {
                        _fun75920_ip = 469;
                        continue _fun75920
                    }
                case 36:
                    var4 = _closure2_slot1;
                    if (!(var0 != var4)) {
                        _fun75920_ip = 373;
                        continue _fun75920
                    }
                case 47:
                    var4 = _closure2_slot1;
                    var4 = var4.length;
                    if (!(var2 !== var4)) {
                        _fun75920_ip = 373;
                        continue _fun75920
                    }
                case 63:
                    var6 = new Array(0);
                    var _closure3_slot0 = var6;
                    var4 = global;
                    var5 = var4.Map;
                    var7 = var5.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var5
                        }
                    });
                    var19 = var7;
                    var5 = new var19[var5](var18);
                    var8 = var5 instanceof Object ? var5 : var7;
                    var _closure3_slot1 = var8;
                    var5 = var4.Map;
                    var7 = var5.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var5
                        }
                    });
                    var19 = var7;
                    var5 = new var19[var5](var18);
                    var9 = var5 instanceof Object ? var5 : var7;
                    var _closure3_slot2 = var9;
                    var7 = _closure1_slot1;
                    var5 = _closure2_slot1;
                    var14 = undefined;
                    var13 = var7.bind(var14)(var5);
                    var7 = var13.bind(var14)();
                    var5 = var7.done;
                    var12 = 2;
                    var11 = var7;
                    var10 = undefined;
                    var7 = undefined;
                    if (var5) {
                        _fun75920_ip = 249;
                        continue _fun75920
                    }
                case 173:
                    var5 = var11.value;
                    var _closure3_slot3 = var5;
                    var5 = var5.variants;
                    var5 = var5.length;
                    if (!(var5 >= var12)) {
                        _fun75920_ip = 234;
                        continue _fun75920
                    }
                case 197:
                    var15 = function() {
                        _fun75922: for (var _fun75922_ip = 0;;) switch (_fun75922_ip) {
                            case 0:
                                var3 = _closure3_slot4;
                                var1 = _closure3_slot3;
                                var2 = var1.variants;
                                var1 = _closure3_slot4;
                                var5 = var2[var1];
                                var _closure4_slot0 = var5;
                                var2 = _closure2_slot0;
                                var1 = var2.some;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.skuId;
                                    var0 = _closure4_slot0;
                                    var0 = var0.skuId;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                if (!var0) {
                                    _fun75922_ip = 156;
                                    continue _fun75922
                                }
                            case 59:
                                var2 = _closure3_slot2;
                                var1 = var2.set;
                                var0 = var5.skuId;
                                var0 = var1.bind(var2)(var0, var3);
                                var1 = _closure3_slot1;
                                var0 = var1.has;
                                var0 = var0.bind(var1)(var3);
                                if (var0) {
                                    _fun75922_ip = 156;
                                    continue _fun75922
                                }
                            case 97:
                                var1 = _closure3_slot0;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var3);
                                var2 = _closure3_slot1;
                                var1 = var2.set;
                                var0 = {};
                                var7 = var0;
                                var6 = var5;
                                var5 = copyDataProperties(var7, var6);
                                var4 = _closure3_slot3;
                                var5 = var4.name;
                                var4 = 'name';
                                var0[var4] = var5;
                                var0 = var1.bind(var2)(var3, var0);
                            case 156:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot4 = var2;
                    var5 = 0;
                case 210:
                    var16 = var15.bind(var14)();
                    var16 = var5 + 1;
                    _closure3_slot4 = var16;
                    var5 = var16;
                    var10 = var15;
                    var7 = var5;
                    if (var7 < var12) {
                        _fun75920_ip = 210;
                        continue _fun75920
                    }
                case 234:
                    var15 = var13.bind(var14)();
                    var5 = var15.done;
                    var11 = var15;
                    if (!var5) {
                        _fun75920_ip = 173;
                        continue _fun75920
                    }
                case 249:
                    var5 = var6.length;
                    if (!(var2 !== var5)) {
                        _fun75920_ip = 371;
                        continue _fun75920
                    }
                case 258:
                    var5 = _closure2_slot2;
                    if (!(var0 != var5)) {
                        _fun75920_ip = 290;
                        continue _fun75920
                    }
                case 266:
                    var7 = var9.get;
                    var5 = _closure2_slot2;
                    var5 = var5.skuId;
                    var5 = var7.bind(var9)(var5);
                    if (!(var0 == var5)) {
                        _fun75920_ip = 353;
                        continue _fun75920
                    }
                case 290:
                    var9 = var4.Math;
                    var7 = var9.floor;
                    var4 = _closure2_slot3;
                    var10 = var4.current;
                    var4 = var6.length;
                    var4 = var10 * var4;
                    var4 = var7.bind(var9)(var4);
                    var7 = var6[var4];
                    var4 = {};
                    var4.defaultCategory = var7;
                    var6 = var8.get;
                    var6 = var6.bind(var8)(var7);
                    var4.defaultHighlightedReward = var6;
                    return var4;
                case 353:
                    var4 = {};
                    var4.defaultCategory = var5;
                    var5 = _closure2_slot2;
                    var4.defaultHighlightedReward = var5;
                    return var4;
                case 371:
                    return var0;
                case 373:
                    var4 = _closure2_slot2;
                    if (!(var0 != var4)) {
                        _fun75920_ip = 406;
                        continue _fun75920
                    }
                case 381:
                    var5 = _closure2_slot0;
                    var4 = var5.some;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.skuId;
                        var0 = _closure2_slot2;
                        var0 = var0.skuId;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    if (var1) {
                        _fun75920_ip = 416;
                        continue _fun75920
                    }
                case 406:
                    var1 = _closure2_slot0;
                    var2 = var1[var2];
                    _fun75920_ip = 420;
                    continue _fun75920;
                case 416:
                    var2 = _closure2_slot2;
                case 420:
                    var1 = {};
                    var4 = global;
                    var5 = var4.Math;
                    var4 = var5.floor;
                    var3 = _closure2_slot3;
                    var6 = var3.current;
                    var3 = 2;
                    var3 = var3 * var6;
                    var3 = var4.bind(var5)(var3);
                    var1.defaultCategory = var3;
                    var1.defaultHighlightedReward = var2;
                    return var1;
                case 469:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var4;
    var2.TrickTreatCategory = var3;
    var3 = 2;
    var2.CATEGORY_COUNT = var3;
    var1 = function arg0, arg1() {
        _fun75924: for (var _fun75924_ip = 0;;) switch (_fun75924_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun75924_ip = 23;
                    continue _fun75924
                }
            case 12:
                var4 = var2.length;
                var1 = 0;
                if (!(var1 === var4)) {
                    _fun75924_ip = 27;
                    continue _fun75924
                }
            case 23:
                var4 = undefined;
                return var4;
            case 27:
                if (!(var3 != var0)) {
                    _fun75924_ip = 44;
                    continue _fun75924
                }
            case 31:
                var3 = var2.includes;
                var3 = var3.bind(var2)(var0);
                if (var3) {
                    _fun75924_ip = 48;
                    continue _fun75924
                }
            case 44:
                var0 = var2[var1];
            case 48:
                return var0;
        }
    };
    var2.useGiftingPromotionDefaultSelectionV2 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);