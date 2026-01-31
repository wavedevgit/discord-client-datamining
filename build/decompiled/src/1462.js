// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = {};
    var2 = function(arg0, arg1) { // Original name: map, environment: var0
        _fun16868: for (var _fun16868_ip = 0;;) switch (_fun16868_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var2 = {};
                var _closure2_slot1 = var2;
                if (var0) {
                    _fun16868_ip = 32;
                    continue _fun16868
                }
            case 21:
                var0 = var3.slice;
                var0 = var0.bind(var3)();
                _fun16868_ip = 47;
                continue _fun16868;
            case 32:
                var2 = var3.map;
                var1 = function(arg0, arg1) { // Environment: var1
                    var3 = _closure2_slot1;
                    var1 = arg1;
                    var3.index = var1;
                    var2 = _closure2_slot0;
                    var1 = var2.call;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 47:
                return var0;
        }
    };
    var1.map = var2;
    var2 = function(arg0, arg1) { // Original name: naturalOrder, environment: var0
        _fun16870: for (var _fun16870_ip = 0;;) switch (_fun16870_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2 < var1;
                var0 = -1;
                if (var3) {
                    _fun16870_ip = 34;
                    continue _fun16870
                }
            case 19:
                var2 = var2 > var1;
                var1 = 0;
                if (!var2) {
                    _fun16870_ip = 31;
                    continue _fun16870
                }
            case 28:
                var1 = 1;
            case 31:
                var0 = var1;
            case 34:
                return var0;
        }
    };
    var1.naturalOrder = var2;
    var2 = function(arg0, arg1) { // Original name: sum, environment: var0
        _fun16871: for (var _fun16871_ip = 0;;) switch (_fun16871_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var2 = {};
                var _closure2_slot1 = var2;
                var2 = var3.reduce;
                if (var1) {
                    _fun16871_ip = 34;
                    continue _fun16871
                }
            case 27:
                var1 = function(arg0, arg1) { // Environment: var0
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var1 + var0;
                    return var0;
                };
                _fun16871_ip = 39;
                continue _fun16871;
            case 34:
                var1 = function(arg0, arg1, arg2) { // Environment: var0
                    var3 = _closure2_slot1;
                    var1 = arg2;
                    var3.index = var1;
                    var2 = _closure2_slot0;
                    var1 = var2.call;
                    var0 = arg1;
                    var1 = var1.bind(var2)(var3, var0);
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
            case 39:
                var0 = 0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.sum = var2;
    var2 = function(arg0, arg1) { // Original name: max, environment: var0
        _fun16874: for (var _fun16874_ip = 0;;) switch (_fun16874_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = global;
                var0 = var0.Math;
                var3 = var0.max;
                var2 = var3.apply;
                var1 = var6;
                if (!var5) {
                    _fun16874_ip = 48;
                    continue _fun16874
                }
            case 30:
                var4 = _closure1_slot0;
                var0 = var4.map;
                var1 = var0.bind(var4)(var6, var5);
            case 48:
                var0 = null;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var1.max = var2;
    var _closure1_slot0 = var1;
    var1 = function() { // Environment: var0
        var0 = function(arg0, arg1, arg2) { // Original name: getColorIndex, environment: var1
            var1 = arg0;
            var0 = 10;
            var1 = var1 << var0;
            var2 = arg1;
            var0 = 5;
            var0 = var2 << var0;
            var1 = var1 + var0;
            var0 = arg2;
            var0 = var1 + var0;
            return var0;
        };
        var _closure2_slot0 = var0;
        var0 = function(arg0) { // Original name: PQueue, environment: var1
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = function() { // Original name: sort, environment: var1
                var3 = _closure3_slot1;
                var2 = var3.sort;
                var0 = _closure3_slot0;
                var0 = var2.bind(var3)(var0);
                var0 = true;
                _closure3_slot2 = var0;
                var0 = undefined;
                return var0;
            };
            var _closure3_slot3 = var0;
            var0 = new Array(0);
            var _closure3_slot1 = var0;
            var0 = false;
            var _closure3_slot2 = var0;
            var0 = {};
            var2 = function(arg0) { // Original name: push, environment: var1
                var3 = _closure3_slot1;
                var2 = var3.push;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var0 = false;
                _closure3_slot2 = var0;
                var0 = undefined;
                return var0;
            };
            var0.push = var2;
            var2 = function(arg0) { // Original name: peek, environment: var1
                _fun16880: for (var _fun16880_ip = 0;;) switch (_fun16880_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure3_slot2;
                        if (var2) {
                            _fun16880_ip = 23;
                            continue _fun16880
                        }
                    case 13:
                        var3 = _closure3_slot3;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                    case 23:
                        var2 = undefined;
                        if (!(var2 === var1)) {
                            _fun16880_ip = 45;
                            continue _fun16880
                        }
                    case 29:
                        var2 = _closure3_slot1;
                        var3 = var2.length;
                        var2 = 1;
                        var1 = var3 - var2;
                    case 45:
                        var0 = _closure3_slot1;
                        var0 = var0[var1];
                        return var0;
                }
            };
            var0.peek = var2;
            var2 = function() { // Original name: pop, environment: var1
                _fun16881: for (var _fun16881_ip = 0;;) switch (_fun16881_ip) {
                    case 0:
                        var1 = _closure3_slot2;
                        if (var1) {
                            _fun16881_ip = 20;
                            continue _fun16881
                        }
                    case 10:
                        var2 = _closure3_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                    case 20:
                        var1 = _closure3_slot1;
                        var0 = var1.pop;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var0.pop = var2;
            var2 = function() { // Original name: size, environment: var1
                var0 = _closure3_slot1;
                var0 = var0.length;
                return var0;
            };
            var0.size = var2;
            var2 = function(arg0) { // Original name: map, environment: var1
                var2 = _closure3_slot1;
                var1 = var2.map;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0.map = var2;
            var1 = function() { // Original name: debug, environment: var1
                _fun16884: for (var _fun16884_ip = 0;;) switch (_fun16884_ip) {
                    case 0:
                        var1 = _closure3_slot2;
                        if (var1) {
                            _fun16884_ip = 20;
                            continue _fun16884
                        }
                    case 10:
                        var2 = _closure3_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                    case 20:
                        var0 = _closure3_slot1;
                        return var0;
                }
            };
            var0.debug = var1;
            return var0;
        };
        var _closure2_slot1 = var0;
        var3 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: VBox, environment: var1
            var1 = this;
            var0 = arg0;
            var1.var1 = var0;
            var0 = arg1;
            var1.var2 = var0;
            var0 = arg2;
            var1.g1 = var0;
            var0 = arg3;
            var1.g2 = var0;
            var0 = arg4;
            var1.b1 = var0;
            var0 = arg5;
            var1.b2 = var0;
            var0 = arg6;
            var1.histo = var0;
            var0 = undefined;
            return var0;
        };
        var _closure2_slot2 = var3;
        var2 = function() { // Original name: CMap, environment: var1
            var2 = _closure2_slot1;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                var1 = arg0;
                var0 = arg1;
                var3 = _closure1_slot0;
                var2 = var3.naturalOrder;
                var5 = var1.vbox;
                var4 = var5.count;
                var4 = var4.bind(var5)();
                var5 = var1.vbox;
                var1 = var5.volume;
                var1 = var1.bind(var5)();
                var1 = var4 * var1;
                var5 = var0.vbox;
                var4 = var5.count;
                var4 = var4.bind(var5)();
                var5 = var0.vbox;
                var0 = var5.volume;
                var0 = var0.bind(var5)();
                var0 = var4 * var0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var1 = var0 instanceof Object ? var0 : var1;
            var0 = this;
            var0.vboxes = var1;
            var0 = undefined;
            return var0;
        };
        var _closure2_slot3 = var2;
        var0 = function(arg0, arg1) { // Original name: medianCutApply, environment: var1
            _fun16888: for (var _fun16888_ip = 0;;) switch (_fun16888_ip) {
                case 0:
                    var16 = arg0;
                    var1 = arg1;
                    var0 = var1.count;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun16888_ip = 25;
                        continue _fun16888
                    }
                case 21:
                    var0 = undefined;
                    return var0;
                case 25:
                    var2 = var1.var2;
                    var0 = var1.var1;
                    var0 = var2 - var0;
                    var6 = 1;
                    var2 = var0 + var6;
                    var3 = var1.g2;
                    var0 = var1.g1;
                    var0 = var3 - var0;
                    var3 = var0 + var6;
                    var5 = var1.b2;
                    var0 = var1.b1;
                    var0 = var5 - var0;
                    var8 = var0 + var6;
                    var7 = _closure1_slot0;
                    var5 = var7.max;
                    var0 = new Array(3);
                    var0[0] = var2;
                    var0[1] = var3;
                    var0[2] = var8;
                    var0 = var5.bind(var7)(var0);
                    var5 = var1.count;
                    var5 = var5.bind(var1)();
                    if (!(var6 != var5)) {
                        _fun16888_ip = 1095;
                        continue _fun16888
                    }
                case 138:
                    var15 = 0;
                    var _closure3_slot0 = var15;
                    var11 = new Array(0);
                    var10 = new Array(0);
                    var _closure3_slot1 = var10;
                    if (!(var0 != var2)) {
                        _fun16888_ip = 546;
                        continue _fun16888
                    }
                case 163:
                    if (!(var0 != var3)) {
                        _fun16888_ip = 358;
                        continue _fun16888
                    }
                case 170:
                    var14 = var1.b1;
                    var5 = var1.b2;
                    var5 = var14 <= var5;
                    var13 = undefined;
                    var9 = undefined;
                    var7 = 0;
                    var8 = 0;
                    if (!var5) {
                        _fun16888_ip = 729;
                        continue _fun16888
                    }
                case 203:
                    var19 = var1.var1;
                    var5 = var1.var2;
                    var17 = var19 <= var5;
                    var18 = 0;
                    var5 = 0;
                    if (!var17) {
                        _fun16888_ip = 319;
                        continue _fun16888
                    }
                case 226:
                    var23 = var1.g1;
                    var17 = var1.g2;
                    var22 = var18;
                    var20 = var22;
                    var21 = var23;
                    if (!(var21 <= var17)) {
                        _fun16888_ip = 297;
                        continue _fun16888
                    }
                case 251:
                    var17 = _closure2_slot0;
                    var17 = var17.bind(var13)(var19, var23, var14);
                    var24 = var16[var17];
                    var17 = var23;
                    if (var24) {
                        _fun16888_ip = 274;
                        continue _fun16888
                    }
                case 272:
                    var24 = 0;
                case 274:
                    var22 = var22 + var24;
                    var23 = var17 + 1;
                    var17 = var1.g2;
                    var20 = var22;
                    var21 = var23;
                    if (var21 <= var17) {
                        _fun16888_ip = 251;
                        continue _fun16888
                    }
                case 297:
                    var19 = var19 + 1;
                    var17 = var1.var2;
                    var9 = var21;
                    var18 = var20;
                    var5 = var18;
                    if (var19 <= var17) {
                        _fun16888_ip = 226;
                        continue _fun16888
                    }
                case 319:
                    var17 = var7 + var5;
                    _closure3_slot0 = var17;
                    var11[var14] = var17;
                    var14 = var14 + 1;
                    var5 = var1.b2;
                    var7 = var17;
                    var8 = var7;
                    if (var14 <= var5) {
                        _fun16888_ip = 203;
                        continue _fun16888
                    }
                case 353:
                    _fun16888_ip = 729;
                    continue _fun16888;
                case 358:
                    var14 = var1.g1;
                    var5 = var1.g2;
                    var5 = var14 <= var5;
                    var13 = undefined;
                    var9 = undefined;
                    var7 = 0;
                    var8 = 0;
                    if (!var5) {
                        _fun16888_ip = 729;
                        continue _fun16888
                    }
                case 391:
                    var19 = var1.var1;
                    var5 = var1.var2;
                    var17 = var19 <= var5;
                    var18 = 0;
                    var5 = 0;
                    if (!var17) {
                        _fun16888_ip = 507;
                        continue _fun16888
                    }
                case 414:
                    var23 = var1.b1;
                    var17 = var1.b2;
                    var22 = var18;
                    var20 = var22;
                    var21 = var23;
                    if (!(var21 <= var17)) {
                        _fun16888_ip = 485;
                        continue _fun16888
                    }
                case 439:
                    var17 = _closure2_slot0;
                    var17 = var17.bind(var13)(var19, var14, var23);
                    var24 = var16[var17];
                    var17 = var23;
                    if (var24) {
                        _fun16888_ip = 462;
                        continue _fun16888
                    }
                case 460:
                    var24 = 0;
                case 462:
                    var22 = var22 + var24;
                    var23 = var17 + 1;
                    var17 = var1.b2;
                    var20 = var22;
                    var21 = var23;
                    if (var21 <= var17) {
                        _fun16888_ip = 439;
                        continue _fun16888
                    }
                case 485:
                    var19 = var19 + 1;
                    var17 = var1.var2;
                    var9 = var21;
                    var18 = var20;
                    var5 = var18;
                    if (var19 <= var17) {
                        _fun16888_ip = 414;
                        continue _fun16888
                    }
                case 507:
                    var17 = var7 + var5;
                    _closure3_slot0 = var17;
                    var11[var14] = var17;
                    var14 = var14 + 1;
                    var5 = var1.g2;
                    var7 = var17;
                    var8 = var7;
                    if (var14 <= var5) {
                        _fun16888_ip = 391;
                        continue _fun16888
                    }
                case 541:
                    _fun16888_ip = 729;
                    continue _fun16888;
                case 546:
                    var14 = var1.var1;
                    var5 = var1.var2;
                    var5 = var14 <= var5;
                    var13 = undefined;
                    var9 = undefined;
                    var7 = 0;
                    var8 = 0;
                    if (!var5) {
                        _fun16888_ip = 729;
                        continue _fun16888
                    }
                case 579:
                    var19 = var1.g1;
                    var5 = var1.g2;
                    var17 = var19 <= var5;
                    var18 = 0;
                    var5 = 0;
                    if (!var17) {
                        _fun16888_ip = 695;
                        continue _fun16888
                    }
                case 602:
                    var23 = var1.b1;
                    var17 = var1.b2;
                    var22 = var18;
                    var20 = var22;
                    var21 = var23;
                    if (!(var21 <= var17)) {
                        _fun16888_ip = 673;
                        continue _fun16888
                    }
                case 627:
                    var17 = _closure2_slot0;
                    var17 = var17.bind(var13)(var14, var19, var23);
                    var24 = var16[var17];
                    var17 = var23;
                    if (var24) {
                        _fun16888_ip = 650;
                        continue _fun16888
                    }
                case 648:
                    var24 = 0;
                case 650:
                    var22 = var22 + var24;
                    var23 = var17 + 1;
                    var17 = var1.b2;
                    var20 = var22;
                    var21 = var23;
                    if (var21 <= var17) {
                        _fun16888_ip = 627;
                        continue _fun16888
                    }
                case 673:
                    var19 = var19 + 1;
                    var17 = var1.g2;
                    var9 = var21;
                    var18 = var20;
                    var5 = var18;
                    if (var19 <= var17) {
                        _fun16888_ip = 602;
                        continue _fun16888
                    }
                case 695:
                    var17 = var7 + var5;
                    _closure3_slot0 = var17;
                    var11[var14] = var17;
                    var14 = var14 + 1;
                    var5 = var1.var2;
                    var7 = var17;
                    var8 = var7;
                    if (var14 <= var5) {
                        _fun16888_ip = 579;
                        continue _fun16888
                    }
                case 729:
                    var5 = var11.forEach;
                    var4 = function(arg0, arg1) { // Environment: var4
                        var2 = _closure3_slot1;
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1 = var1 - var0;
                        var0 = arg1;
                        var2[var0] = var1;
                        var0 = undefined;
                        return var0;
                    };
                    var4 = var5.bind(var11)(var4);
                    var4 = var0 == var2;
                    var2 = 'r';
                    if (var4) {
                        _fun16888_ip = 773;
                        continue _fun16888
                    }
                case 755:
                    var3 = var0 == var3;
                    var0 = 'b';
                    if (!var3) {
                        _fun16888_ip = 770;
                        continue _fun16888
                    }
                case 766:
                    var0 = 'g';
                case 770:
                    var2 = var0;
                case 773:
                    var0 = '1';
                    var5 = var2 + var0;
                    var0 = '2';
                    var2 = var2 + var0;
                    var7 = var1[var5];
                    var0 = var1[var2];
                    var3 = var7 <= var0;
                    var15 = 2;
                    var0 = undefined;
                    if (!var3) {
                        _fun16888_ip = 1093;
                        continue _fun16888
                    }
                case 816:
                    var9 = var11[var7];
                    var3 = var8 / var15;
                    var14 = var7;
                    if (!(!(var9 > var3))) {
                        _fun16888_ip = 852;
                        continue _fun16888
                    }
                case 831:
                    var7 = var14 + 1;
                    var3 = var1[var2];
                    var3 = var7 <= var3;
                    var0 = undefined;
                    if (var3) {
                        _fun16888_ip = 816;
                        continue _fun16888
                    }
                case 847:
                    _fun16888_ip = 1093;
                    continue _fun16888;
                case 852:
                    var3 = var1.copy;
                    var4 = var3.bind(var1)();
                    var3 = var1.copy;
                    var3 = var3.bind(var1)();
                    var7 = var1[var5];
                    var8 = var14 - var7;
                    var7 = var1[var2];
                    var7 = var7 - var14;
                    if (!(!(var8 <= var7))) {
                        _fun16888_ip = 935;
                        continue _fun16888
                    }
                case 892:
                    var9 = global;
                    var13 = var9.Math;
                    var12 = var13.max;
                    var9 = var1[var5];
                    var16 = var14 - var6;
                    var8 = var8 / var15;
                    var8 = var16 - var8;
                    var8 = ~var8;
                    var8 = ~var8;
                    var9 = var12.bind(var13)(var9, var8);
                    _fun16888_ip = 976;
                    continue _fun16888;
                case 935:
                    var8 = global;
                    var13 = var8.Math;
                    var12 = var13.min;
                    var8 = var1[var2];
                    var8 = var8 - var6;
                    var7 = var7 / var15;
                    var7 = var14 + var7;
                    var7 = ~var7;
                    var7 = ~var7;
                    var9 = var12.bind(var13)(var8, var7);
                case 976:
                    var7 = var11[var9];
                    var8 = var9;
                    var12 = var8;
                    if (var7) {
                        _fun16888_ip = 1005;
                        continue _fun16888
                    }
                case 989:
                    var9 = var8 + 1;
                    var7 = var11[var9];
                    var8 = var9;
                    var12 = var8;
                    if (!var7) {
                        _fun16888_ip = 989;
                        continue _fun16888
                    }
                case 1005:
                    var8 = var10[var12];
                    var7 = var12;
                    if (var8) {
                        _fun16888_ip = 1062;
                        continue _fun16888
                    }
                case 1015:
                    var8 = var12 - var6;
                    var8 = var11[var8];
                    var9 = var12;
                    var7 = var9;
                    if (!var8) {
                        _fun16888_ip = 1062;
                        continue _fun16888
                    }
                case 1032:
                    var12 = var9 - 1;
                    var8 = var10[var12];
                    var7 = var12;
                    if (var8) {
                        _fun16888_ip = 1062;
                        continue _fun16888
                    }
                case 1045:
                    var8 = var12 - var6;
                    var8 = var11[var8];
                    var9 = var12;
                    var7 = var9;
                    if (var8) {
                        _fun16888_ip = 1032;
                        continue _fun16888
                    }
                case 1062:
                    var4[var2] = var7;
                    var2 = var4[var2];
                    var2 = var2 + var6;
                    var3[var5] = var2;
                    var2 = new Array(2);
                    var2[0] = var4;
                    var2[1] = var3;
                    var0 = var2;
                case 1093:
                    return var0;
                case 1095:
                    var0 = var1.copy;
                    var1 = var0.bind(var1)();
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
            }
        };
        var _closure2_slot4 = var0;
        var0 = {};
        var4 = function(arg0) { // Original name: volume, environment: var1
            _fun16890: for (var _fun16890_ip = 0;;) switch (_fun16890_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._volume;
                    if (!var1) {
                        _fun16890_ip = 17;
                        continue _fun16890
                    }
                case 11:
                    var2 = arg0;
                    var1 = !var2;
                case 17:
                    if (var1) {
                        _fun16890_ip = 97;
                        continue _fun16890
                    }
                case 20:
                    var2 = var0.var2;
                    var1 = var0.var1;
                    var1 = var2 - var1;
                    var4 = 1;
                    var3 = var1 + var4;
                    var2 = var0.g2;
                    var1 = var0.g1;
                    var1 = var2 - var1;
                    var1 = var1 + var4;
                    var5 = var0.b2;
                    var2 = var0.b1;
                    var2 = var5 - var2;
                    var2 = var2 + var4;
                    var1 = var3 * var1;
                    var1 = var1 * var2;
                    var0._volume = var1;
                case 97:
                    var0 = var0._volume;
                    return var0;
            }
        };
        var0.volume = var4;
        var4 = function(arg0) { // Original name: count, environment: var1
            _fun16891: for (var _fun16891_ip = 0;;) switch (_fun16891_ip) {
                case 0:
                    var0 = this;
                    var9 = var0.histo;
                    var1 = var0._count_set;
                    if (!var1) {
                        _fun16891_ip = 26;
                        continue _fun16891
                    }
                case 17:
                    var1 = arg0;
                    if (!var1) {
                        _fun16891_ip = 210;
                        continue _fun16891
                    }
                case 26:
                    var8 = var0.var1;
                    var1 = var0.var2;
                    var2 = var8 <= var1;
                    var7 = undefined;
                    var4 = undefined;
                    var3 = 0;
                    var1 = 0;
                    if (!var2) {
                        _fun16891_ip = 196;
                        continue _fun16891
                    }
                case 59:
                    var12 = var0.g1;
                    var2 = var0.g2;
                    var11 = var3;
                    var10 = var11;
                    if (!(var12 <= var2)) {
                        _fun16891_ip = 174;
                        continue _fun16891
                    }
                case 81:
                    var16 = var0.b1;
                    var2 = var0.b2;
                    var15 = var11;
                    var13 = var15;
                    var14 = var16;
                    if (!(var14 <= var2)) {
                        _fun16891_ip = 152;
                        continue _fun16891
                    }
                case 106:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var7)(var8, var12, var16);
                    var17 = var9[var2];
                    var2 = var16;
                    if (var17) {
                        _fun16891_ip = 129;
                        continue _fun16891
                    }
                case 127:
                    var17 = 0;
                case 129:
                    var15 = var15 + var17;
                    var16 = var2 + 1;
                    var2 = var0.b2;
                    var13 = var15;
                    var14 = var16;
                    if (var14 <= var2) {
                        _fun16891_ip = 106;
                        continue _fun16891
                    }
                case 152:
                    var12 = var12 + 1;
                    var2 = var0.g2;
                    var4 = var14;
                    var11 = var13;
                    var10 = var11;
                    if (var12 <= var2) {
                        _fun16891_ip = 81;
                        continue _fun16891
                    }
                case 174:
                    var8 = var8 + 1;
                    var2 = var0.var2;
                    var3 = var10;
                    var1 = var3;
                    if (var8 <= var2) {
                        _fun16891_ip = 59;
                        continue _fun16891
                    }
                case 196:
                    var0._count = var1;
                    var1 = true;
                    var0._count_set = var1;
                case 210:
                    var0 = var0._count;
                    return var0;
            }
        };
        var0.count = var4;
        var4 = function() { // Original name: copy, environment: var1
            var0 = this;
            var8 = _closure2_slot2;
            var15 = var0.var1;
            var14 = var0.var2;
            var13 = var0.g1;
            var12 = var0.g2;
            var11 = var0.b1;
            var10 = var0.b2;
            var9 = var0.histo;
            var1 = var8.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var8
                }
            });
            var16 = var1;
            var0 = new var16[var8](var15, var14, var13, var12, var11, var10, var9, var8);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.copy = var4;
        var4 = function(arg0) { // Original name: avg, environment: var1
            _fun16893: for (var _fun16893_ip = 0;;) switch (_fun16893_ip) {
                case 0:
                    var0 = this;
                    var17 = var0.histo;
                    var1 = var0._avg;
                    if (!var1) {
                        _fun16893_ip = 26;
                        continue _fun16893
                    }
                case 17:
                    var1 = arg0;
                    if (!var1) {
                        _fun16893_ip = 543;
                        continue _fun16893
                    }
                case 26:
                    var16 = var0.var1;
                    var1 = var0.var2;
                    var1 = var16 <= var1;
                    var15 = undefined;
                    var13 = 0.5;
                    var8 = 8;
                    var11 = undefined;
                    var10 = 0;
                    var9 = 0;
                    var7 = 0;
                    var6 = 0;
                    var4 = 0;
                    var2 = 0;
                    var5 = 0;
                    var3 = 0;
                    if (!var1) {
                        _fun16893_ip = 356;
                        continue _fun16893
                    }
                case 84:
                    var26 = var0.g1;
                    var1 = var0.g2;
                    var25 = var10;
                    var24 = var9;
                    var23 = var7;
                    var22 = var6;
                    var21 = var25;
                    var20 = var24;
                    var19 = var23;
                    var18 = var22;
                    if (!(var26 <= var1)) {
                        _fun16893_ip = 316;
                        continue _fun16893
                    }
                case 127:
                    var36 = var0.b1;
                    var1 = var0.b2;
                    var35 = var25;
                    var34 = var24;
                    var33 = var23;
                    var32 = var22;
                    var30 = var35;
                    var29 = var34;
                    var28 = var33;
                    var27 = var32;
                    var31 = var36;
                    if (!(var31 <= var1)) {
                        _fun16893_ip = 273;
                        continue _fun16893
                    }
                case 170:
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var15)(var16, var26, var36);
                    var38 = var17[var1];
                    var1 = var36;
                    if (var38) {
                        _fun16893_ip = 193;
                        continue _fun16893
                    }
                case 191:
                    var38 = 0;
                case 193:
                    var35 = var35 + var38;
                    var37 = var16 + var13;
                    var37 = var38 * var37;
                    var37 = var37 * var8;
                    var34 = var34 + var37;
                    var37 = var26 + var13;
                    var37 = var38 * var37;
                    var37 = var37 * var8;
                    var33 = var33 + var37;
                    var37 = var1 + var13;
                    var37 = var38 * var37;
                    var37 = var37 * var8;
                    var32 = var32 + var37;
                    var36 = var1 + 1;
                    var1 = var0.b2;
                    var30 = var35;
                    var29 = var34;
                    var28 = var33;
                    var27 = var32;
                    var31 = var36;
                    if (var31 <= var1) {
                        _fun16893_ip = 170;
                        continue _fun16893
                    }
                case 273:
                    var26 = var26 + 1;
                    var1 = var0.g2;
                    var11 = var31;
                    var25 = var30;
                    var24 = var29;
                    var23 = var28;
                    var22 = var27;
                    var21 = var25;
                    var20 = var24;
                    var19 = var23;
                    var18 = var22;
                    if (var26 <= var1) {
                        _fun16893_ip = 127;
                        continue _fun16893
                    }
                case 316:
                    var16 = var16 + 1;
                    var1 = var0.var2;
                    var10 = var21;
                    var9 = var20;
                    var7 = var19;
                    var6 = var18;
                    var4 = var10;
                    var2 = var9;
                    var5 = var7;
                    var3 = var6;
                    if (var16 <= var1) {
                        _fun16893_ip = 84;
                        continue _fun16893
                    }
                case 356:
                    if (var4) {
                        _fun16893_ip = 488;
                        continue _fun16893
                    }
                case 362:
                    var6 = var0.var1;
                    var1 = var0.var2;
                    var1 = var6 + var1;
                    var9 = 1;
                    var6 = var1 + var9;
                    var1 = new Array(3);
                    var6 = var8 * var6;
                    var7 = 2;
                    var6 = var6 / var7;
                    var6 = ~var6;
                    var6 = ~var6;
                    var1[0] = var6;
                    var10 = var0.g1;
                    var6 = var0.g2;
                    var6 = var10 + var6;
                    var6 = var6 + var9;
                    var6 = var8 * var6;
                    var6 = var6 / var7;
                    var6 = ~var6;
                    var6 = ~var6;
                    var1[1] = var6;
                    var10 = var0.b1;
                    var6 = var0.b2;
                    var6 = var10 + var6;
                    var6 = var6 + var9;
                    var6 = var8 * var6;
                    var6 = var6 / var7;
                    var6 = ~var6;
                    var6 = ~var6;
                    var1[2] = var6;
                    _fun16893_ip = 537;
                    continue _fun16893;
                case 488:
                    var6 = var2 / var4;
                    var2 = new Array(3);
                    var6 = ~var6;
                    var6 = ~var6;
                    var2[0] = var6;
                    var5 = var5 / var4;
                    var5 = ~var5;
                    var5 = ~var5;
                    var2[1] = var5;
                    var3 = var3 / var4;
                    var3 = ~var3;
                    var3 = ~var3;
                    var2[2] = var3;
                    var1 = var2;
                case 537:
                    var0._avg = var1;
                case 543:
                    var0 = var0._avg;
                    return var0;
            }
        };
        var0.avg = var4;
        var4 = function(arg0) { // Original name: contains, environment: var1
            _fun16894: for (var _fun16894_ip = 0;;) switch (_fun16894_ip) {
                case 0:
                    var5 = arg0;
                    var1 = this;
                    var0 = 0;
                    var0 = var5[var0];
                    var3 = 3;
                    var4 = var0 >> var3;
                    var0 = 1;
                    var0 = var5[var0];
                    var0 = var0 >> var3;
                    var2 = global;
                    var2.gval = var0;
                    var0 = 2;
                    var0 = var5[var0];
                    var0 = var0 >> var3;
                    var2.bval = var0;
                    var0 = var1.var1;
                    var0 = var4 >= var0;
                    if (!var0) {
                        _fun16894_ip = 77;
                        continue _fun16894
                    }
                case 67:
                    var3 = var1.var2;
                    var0 = var4 <= var3;
                case 77:
                    if (!var0) {
                        _fun16894_ip = 96;
                        continue _fun16894
                    }
                case 80:
                    var4 = var2.gval;
                    var3 = var1.g1;
                    var0 = var4 >= var3;
                case 96:
                    if (!var0) {
                        _fun16894_ip = 115;
                        continue _fun16894
                    }
                case 99:
                    var4 = var2.gval;
                    var3 = var1.g2;
                    var0 = var4 <= var3;
                case 115:
                    if (!var0) {
                        _fun16894_ip = 134;
                        continue _fun16894
                    }
                case 118:
                    var4 = var2.bval;
                    var3 = var1.b1;
                    var0 = var4 >= var3;
                case 134:
                    if (!var0) {
                        _fun16894_ip = 153;
                        continue _fun16894
                    }
                case 137:
                    var2 = var2.bval;
                    var1 = var1.b2;
                    var0 = var2 <= var1;
                case 153:
                    return var0;
            }
        };
        var0.contains = var4;
        var3.prototype = var0;
        var0 = {};
        var3 = function(arg0) { // Original name: push, environment: var1
            var4 = arg0;
            var0 = this;
            var2 = var0.vboxes;
            var1 = var2.push;
            var0 = {};
            var0.vbox = var4;
            var3 = var4.avg;
            var3 = var3.bind(var4)();
            var0.color = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.push = var3;
        var3 = function() { // Original name: palette, environment: var1
            var0 = this;
            var2 = var0.vboxes;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.color;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.palette = var3;
        var3 = function() { // Original name: size, environment: var1
            var0 = this;
            var1 = var0.vboxes;
            var0 = var1.size;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.size = var3;
        var3 = function(arg0) { // Original name: map, environment: var1
            _fun16899: for (var _fun16899_ip = 0;;) switch (_fun16899_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var2 = var3.vboxes;
                    var0 = var2.size;
                    var0 = var0.bind(var2)();
                    var5 = 0;
                    var0 = var5 < var0;
                    if (!var0) {
                        _fun16899_ip = 79;
                        continue _fun16899
                    }
                case 29:
                    var0 = var2.peek;
                    var0 = var0.bind(var2)(var5);
                    var1 = var0.vbox;
                    var0 = var1.contains;
                    var0 = var0.bind(var1)(var4);
                    var1 = var5;
                    if (var0) {
                        _fun16899_ip = 92;
                        continue _fun16899
                    }
                case 63:
                    var5 = var1 + 1;
                    var0 = var2.size;
                    var0 = var0.bind(var2)();
                    if (var5 < var0) {
                        _fun16899_ip = 29;
                        continue _fun16899
                    }
                case 79:
                    var0 = var3.nearest;
                    var0 = var0.bind(var3)(var4);
                    return var0;
                case 92:
                    var0 = var2.peek;
                    var0 = var0.bind(var2)(var1);
                    var0 = var0.color;
                    return var0;
            }
        };
        var0.map = var3;
        var3 = function(arg0) { // Original name: nearest, environment: var1
            _fun16900: for (var _fun16900_ip = 0;;) switch (_fun16900_ip) {
                case 0:
                    var11 = arg0;
                    var0 = this;
                    var10 = var0.vboxes;
                    var0 = var10.size;
                    var0 = var0.bind(var10)();
                    var9 = 0;
                    var1 = var9 < var0;
                    var8 = undefined;
                    var7 = global;
                    var6 = 2;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = 0;
                    var0 = undefined;
                    if (!var1) {
                        _fun16900_ip = 271;
                        continue _fun16900
                    }
                case 50:
                    var13 = var7.Math;
                    var12 = var13.sqrt;
                    var15 = var7.Math;
                    var14 = var15.pow;
                    var16 = var11[var9];
                    var1 = var10.peek;
                    var1 = var1.bind(var10)(var2);
                    var1 = var1.color;
                    var1 = var1[var9];
                    var1 = var16 - var1;
                    var14 = var14.bind(var15)(var1, var6);
                    var16 = var7.Math;
                    var15 = var16.pow;
                    var17 = var11[var5];
                    var1 = var10.peek;
                    var1 = var1.bind(var10)(var2);
                    var1 = var1.color;
                    var1 = var1[var5];
                    var1 = var17 - var1;
                    var1 = var15.bind(var16)(var1, var6);
                    var14 = var14 + var1;
                    var16 = var7.Math;
                    var15 = var16.pow;
                    var17 = var11[var6];
                    var1 = var10.peek;
                    var1 = var1.bind(var10)(var2);
                    var1 = var1.color;
                    var1 = var1[var6];
                    var1 = var17 - var1;
                    var1 = var15.bind(var16)(var1, var6);
                    var1 = var14 + var1;
                    var13 = var12.bind(var13)(var1);
                    var12 = var13 < var4;
                    var1 = var2;
                    if (var12) {
                        _fun16900_ip = 227;
                        continue _fun16900
                    }
                case 223:
                    var12 = var8 === var4;
                case 227:
                    if (!var12) {
                        _fun16900_ip = 249;
                        continue _fun16900
                    }
                case 230:
                    var12 = var10.peek;
                    var12 = var12.bind(var10)(var1);
                    var3 = var12.color;
                    var4 = var13;
                case 249:
                    var2 = var1 + 1;
                    var1 = var10.size;
                    var1 = var1.bind(var10)();
                    var0 = var3;
                    if (var2 < var1) {
                        _fun16900_ip = 50;
                        continue _fun16900
                    }
                case 271:
                    return var0;
            }
        };
        var0.nearest = var3;
        var3 = function() { // Original name: forcebw, environment: var1
            _fun16901: for (var _fun16901_ip = 0;;) switch (_fun16901_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.vboxes;
                    var2 = var1.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = var3.naturalOrder;
                        var5 = _closure1_slot0;
                        var4 = var5.sum;
                        var1 = arg0;
                        var1 = var1.color;
                        var1 = var4.bind(var5)(var1);
                        var5 = _closure1_slot0;
                        var4 = var5.sum;
                        var0 = arg1;
                        var0 = var0.color;
                        var0 = var4.bind(var5)(var0);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    var2 = 0;
                    var0 = var1[var2];
                    var5 = var0.color;
                    var0 = var5[var2];
                    var4 = 5;
                    var0 = var0 < var4;
                    if (!var0) {
                        _fun16901_ip = 62;
                        continue _fun16901
                    }
                case 51:
                    var3 = 1;
                    var3 = var5[var3];
                    var0 = var3 < var4;
                case 62:
                    if (!var0) {
                        _fun16901_ip = 76;
                        continue _fun16901
                    }
                case 65:
                    var3 = 2;
                    var3 = var5[var3];
                    var0 = var3 < var4;
                case 76:
                    if (!var0) {
                        _fun16901_ip = 97;
                        continue _fun16901
                    }
                case 79:
                    var3 = var1[var2];
                    var0 = [0, 0, 0];
                    var3.color = var0;
                case 97:
                    var0 = var1.length;
                    var3 = 1;
                    var0 = var0 - var3;
                    var4 = var1[var0];
                    var5 = var4.color;
                    var2 = var5[var2];
                    var4 = 251;
                    var2 = var2 > var4;
                    if (!var2) {
                        _fun16901_ip = 140;
                        continue _fun16901
                    }
                case 132:
                    var3 = var5[var3];
                    var2 = var3 > var4;
                case 140:
                    if (!var2) {
                        _fun16901_ip = 154;
                        continue _fun16901
                    }
                case 143:
                    var3 = 2;
                    var3 = var5[var3];
                    var2 = var3 > var4;
                case 154:
                    if (!var2) {
                        _fun16901_ip = 177;
                        continue _fun16901
                    }
                case 157:
                    var1 = var1[var0];
                    var0 = [255, 255, 255];
                    var1.color = var0;
                case 177:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.forcebw = var3;
        var2.prototype = var0;
        var0 = {};
        var1 = function(arg0, arg1) { // Original name: quantize, environment: var1
            _fun16903: for (var _fun16903_ip = 0;;) switch (_fun16903_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var4 = function(arg0, arg1) { // Original name: iter, environment: var1
                        _fun16904: for (var _fun16904_ip = 0;;) switch (_fun16904_ip) {
                            case 0:
                                var11 = arg0;
                                var10 = arg1;
                                var9 = 1;
                                var8 = 0;
                                var0 = undefined;
                                var7 = 1000;
                                var4 = var9;
                                var3 = 0;
                                var2 = undefined;
                                var1 = undefined;
                            case 34:
                                var12 = var11.pop;
                                var16 = var12.bind(var11)();
                                var12 = var16.count;
                                var12 = var12.bind(var16)();
                                if (var12) {
                                    _fun16904_ip = 75;
                                    continue _fun16904
                                }
                            case 57:
                                var12 = var11.push;
                                var12 = var12.bind(var11)(var16);
                                var12 = var3 + 1;
                                var13 = var4;
                                _fun16904_ip = 154;
                                continue _fun16904;
                            case 75:
                                var15 = _closure2_slot4;
                                var14 = _closure3_slot0;
                                var14 = var15.bind(var0)(var14, var16);
                                var16 = var14[var8];
                                var15 = var14[var9];
                                if (var16) {
                                    _fun16904_ip = 102;
                                    continue _fun16904
                                }
                            case 100:
                                return var0;
                            case 102:
                                var14 = var11.push;
                                var14 = var14.bind(var11)(var16);
                                var18 = var4;
                                if (!var15) {
                                    _fun16904_ip = 131;
                                    continue _fun16904
                                }
                            case 118:
                                var14 = var11.push;
                                var14 = var14.bind(var11)(var15);
                                var18 = var4 + 1;
                            case 131:
                                if (!(!(var18 >= var10))) {
                                    _fun16904_ip = 168;
                                    continue _fun16904
                                }
                            case 135:
                                var14 = parseFloat(var3);
                                var12 = var14 + 1;
                                var13 = var18;
                                var2 = var16;
                                var1 = var15;
                                if (!(!(var14 > var7))) {
                                    _fun16904_ip = 166;
                                    continue _fun16904
                                }
                            case 154:
                                var4 = var13;
                                var3 = var12;
                                if (var3 < var7) {
                                    _fun16904_ip = 34;
                                    continue _fun16904
                                }
                            case 164:
                                return var0;
                            case 166:
                                return var0;
                            case 168:
                                return var0;
                        }
                    };
                    var0 = var6.length;
                    if (!var0) {
                        _fun16903_ip = 309;
                        continue _fun16903
                    }
                case 24:
                    var0 = 2;
                    if (!(!(var5 < var0))) {
                        _fun16903_ip = 309;
                        continue _fun16903
                    }
                case 34:
                    var0 = 256;
                    if (!(!(var5 > var0))) {
                        _fun16903_ip = 309;
                        continue _fun16903
                    }
                case 47:
                    var0 = function(arg0) { // Original name: getHisto, environment: var1
                        var3 = arg0;
                        var0 = global;
                        var4 = var0.Array;
                        var0 = var4.prototype;
                        var2 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var5 = 32768;
                        var6 = var2;
                        var0 = new var6[var4](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var _closure4_slot2 = var0;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun16906: for (var _fun16906_ip = 0;;) switch (_fun16906_ip) {
                                case 0:
                                    var3 = arg0;
                                    var5 = 0;
                                    var0 = var3[var5];
                                    var2 = 3;
                                    var0 = var0 >> var2;
                                    var _closure4_slot0 = var0;
                                    var4 = 1;
                                    var0 = var3[var4];
                                    var0 = var0 >> var2;
                                    var _closure4_slot1 = var0;
                                    var0 = 2;
                                    var0 = var3[var0];
                                    var7 = var0 >> var2;
                                    var6 = _closure2_slot0;
                                    var3 = _closure4_slot0;
                                    var2 = _closure4_slot1;
                                    var0 = undefined;
                                    var3 = var6.bind(var0)(var3, var2, var7);
                                    var2 = _closure4_slot2;
                                    var1 = var2[var3];
                                    if (var1) {
                                        _fun16906_ip = 86;
                                        continue _fun16906
                                    }
                                case 84:
                                    var1 = 0;
                                case 86:
                                    var1 = var1 + var4;
                                    var2[var3] = var1;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var3 = undefined;
                    var2 = var0.bind(var3)(var6);
                    var _closure3_slot0 = var2;
                    var7 = var2.forEach;
                    var0 = function() { // Environment: var1
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var7.bind(var2)(var0);
                    var0 = function(arg0, arg1) { // Original name: vboxFromPixels, environment: var1
                        var3 = arg0;
                        var2 = 1000000;
                        var _closure4_slot3 = var2;
                        var1 = 0;
                        var _closure4_slot4 = var1;
                        var _closure4_slot5 = var2;
                        var _closure4_slot6 = var1;
                        var _closure4_slot7 = var2;
                        var _closure4_slot8 = var1;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var0
                            _fun16909: for (var _fun16909_ip = 0;;) switch (_fun16909_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = 0;
                                    var0 = var3[var0];
                                    var2 = 3;
                                    var0 = var0 >> var2;
                                    var _closure4_slot0 = var0;
                                    var0 = 1;
                                    var0 = var3[var0];
                                    var0 = var0 >> var2;
                                    var _closure4_slot1 = var0;
                                    var0 = 2;
                                    var0 = var3[var0];
                                    var0 = var0 >> var2;
                                    var _closure4_slot2 = var0;
                                    var2 = _closure4_slot0;
                                    var0 = _closure4_slot3;
                                    if (!(!(var2 < var0))) {
                                        _fun16909_ip = 87;
                                        continue _fun16909
                                    }
                                case 65:
                                    var2 = _closure4_slot0;
                                    var0 = _closure4_slot4;
                                    if (!(var2 > var0)) {
                                        _fun16909_ip = 95;
                                        continue _fun16909
                                    }
                                case 77:
                                    var0 = _closure4_slot0;
                                    _closure4_slot4 = var0;
                                    _fun16909_ip = 95;
                                    continue _fun16909;
                                case 87:
                                    var0 = _closure4_slot0;
                                    _closure4_slot3 = var0;
                                case 95:
                                    var2 = _closure4_slot1;
                                    var0 = _closure4_slot5;
                                    if (!(!(var2 < var0))) {
                                        _fun16909_ip = 129;
                                        continue _fun16909
                                    }
                                case 107:
                                    var2 = _closure4_slot1;
                                    var0 = _closure4_slot6;
                                    if (!(var2 > var0)) {
                                        _fun16909_ip = 137;
                                        continue _fun16909
                                    }
                                case 119:
                                    var0 = _closure4_slot1;
                                    _closure4_slot6 = var0;
                                    _fun16909_ip = 137;
                                    continue _fun16909;
                                case 129:
                                    var0 = _closure4_slot1;
                                    _closure4_slot5 = var0;
                                case 137:
                                    var2 = _closure4_slot2;
                                    var0 = _closure4_slot7;
                                    if (!(!(var2 < var0))) {
                                        _fun16909_ip = 171;
                                        continue _fun16909
                                    }
                                case 149:
                                    var2 = _closure4_slot2;
                                    var0 = _closure4_slot8;
                                    if (!(var2 > var0)) {
                                        _fun16909_ip = 179;
                                        continue _fun16909
                                    }
                                case 161:
                                    var0 = _closure4_slot2;
                                    _closure4_slot8 = var0;
                                    _fun16909_ip = 179;
                                    continue _fun16909;
                                case 171:
                                    var0 = _closure4_slot2;
                                    _closure4_slot7 = var0;
                                case 179:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        var8 = _closure2_slot2;
                        var15 = _closure4_slot3;
                        var14 = _closure4_slot4;
                        var13 = _closure4_slot5;
                        var12 = _closure4_slot6;
                        var11 = _closure4_slot7;
                        var10 = _closure4_slot8;
                        var0 = var8.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var8
                            }
                        });
                        var9 = arg1;
                        var16 = var1;
                        var0 = new var16[var8](var15, var14, var13, var12, var11, var10, var9, var8);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var8 = var0.bind(var3)(var6, var2);
                    var7 = _closure2_slot1;
                    var2 = var7.prototype;
                    var6 = Object.create(var2, {
                        constructor: {
                            value: var7
                        }
                    });
                    var10 = function(arg0, arg1) { // Environment: var1
                        var1 = arg0;
                        var4 = arg1;
                        var3 = _closure1_slot0;
                        var2 = var3.naturalOrder;
                        var0 = var1.count;
                        var1 = var0.bind(var1)();
                        var0 = var4.count;
                        var0 = var0.bind(var4)();
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var11 = var6;
                    var2 = new var11[var7](var10, var9);
                    var6 = var2 instanceof Object ? var2 : var6;
                    var2 = var6.push;
                    var2 = var2.bind(var6)(var8);
                    var2 = 0.75;
                    var2 = var2 * var5;
                    var2 = var4.bind(var3)(var6, var2);
                    var2 = var7.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var7
                        }
                    });
                    var10 = function(arg0, arg1) { // Environment: var1
                        var4 = arg0;
                        var5 = arg1;
                        var3 = _closure1_slot0;
                        var2 = var3.naturalOrder;
                        var0 = var4.count;
                        var1 = var0.bind(var4)();
                        var0 = var4.volume;
                        var0 = var0.bind(var4)();
                        var1 = var1 * var0;
                        var0 = var5.count;
                        var4 = var0.bind(var5)();
                        var0 = var5.volume;
                        var0 = var0.bind(var5)();
                        var0 = var4 * var0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var11 = var2;
                    var1 = new var11[var7](var10, var9);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = var6.size;
                    var1 = var1.bind(var6)();
                    if (!var1) {
                        _fun16903_ip = 220;
                        continue _fun16903
                    }
                case 188:
                    var7 = var2.push;
                    var1 = var6.pop;
                    var1 = var1.bind(var6)();
                    var1 = var7.bind(var2)(var1);
                    var1 = var6.size;
                    var1 = var1.bind(var6)();
                    if (var1) {
                        _fun16903_ip = 188;
                        continue _fun16903
                    }
                case 220:
                    var1 = var2.size;
                    var1 = var1.bind(var2)();
                    var1 = var5 - var1;
                    var1 = var4.bind(var3)(var2, var1);
                    var0 = _closure2_slot3;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var11 = var1;
                    var0 = new var11[var0](var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var1 = var2.size;
                    var1 = var1.bind(var2)();
                    if (!var1) {
                        _fun16903_ip = 307;
                        continue _fun16903
                    }
                case 275:
                    var3 = var0.push;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    var1 = var3.bind(var0)(var1);
                    var1 = var2.size;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun16903_ip = 275;
                        continue _fun16903
                    }
                case 307:
                    return var0;
                case 309:
                    var0 = false;
                    return var0;
            }
        };
        var0.quantize = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var2 = var1.quantize;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);