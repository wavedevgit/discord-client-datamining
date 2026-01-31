// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = /\s+/g;
    var _closure1_slot5 = var1;
    var1 = function() { // Environment: var2
        var3 = function(arg0, arg1) { // Original name: Range, environment: var4
            _fun94085: for (var _fun94085_ip = 0;;) switch (_fun94085_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot3;
                    var6 = _closure2_slot0;
                    var4 = var4.bind(var3)(var0, var6);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 3;
                    var4 = var9[var4];
                    var8 = var8.bind(var3)(var4);
                    var4 = arg1;
                    var4 = var8.bind(var3)(var4);
                    var6 = var1 instanceof var6;
                    if (var6) {
                        _fun94085_ip = 548;
                        continue _fun94085
                    }
                case 74:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 4;
                    var6 = var9[var6];
                    var6 = var8.bind(var3)(var6);
                    var6 = var1 instanceof var6;
                    if (var6) {
                        _fun94085_ip = 507;
                        continue _fun94085
                    }
                case 104:
                    var0.options = var4;
                    var6 = var4.loose;
                    var6 = !var6;
                    var6 = !var6;
                    var0.loose = var6;
                    var6 = var4.includePrerelease;
                    var6 = !var6;
                    var6 = !var6;
                    var0.includePrerelease = var6;
                    var6 = var1.trim;
                    var10 = var6.bind(var1)();
                    var9 = var10.replace;
                    var8 = _closure1_slot5;
                    var6 = ' ';
                    var6 = var9.bind(var10)(var8, var6);
                    var0.raw = var6;
                    var9 = var0.raw;
                    var8 = var9.split;
                    var6 = '||';
                    var9 = var8.bind(var9)(var6);
                    var8 = var9.map;
                    var6 = function(arg0) { // Environment: var7
                        var3 = arg0;
                        var2 = _closure3_slot0;
                        var1 = var2.parseRange;
                        var0 = var3.trim;
                        var0 = var0.bind(var3)();
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var9 = var8.bind(var9)(var6);
                    var8 = var9.filter;
                    var6 = function(arg0) { // Environment: var7
                        var0 = arg0;
                        var0 = var0.length;
                        return var0;
                    };
                    var6 = var8.bind(var9)(var6);
                    var0.set = var6;
                    var6 = var0.set;
                    var6 = var6.length;
                    if (var6) {
                        _fun94085_ip = 314;
                        continue _fun94085
                    }
                case 257:
                    var6 = global;
                    var9 = var6.TypeError;
                    var10 = var0.raw;
                    var6 = var6.HermesInternal;
                    var8 = var6.concat;
                    var6 = 'Invalid SemVer Range: ';
                    var15 = var8.bind(var6)(var10);
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var16 = var8;
                    var6 = new var16[var9](var15, var14);
                    var6 = var6 instanceof Object ? var6 : var8;
                    throw var6;
                case 314:
                    var6 = var0.set;
                    var6 = var6.length;
                    var10 = 1;
                    if (!(var6 > var10)) {
                        _fun94085_ip = 499;
                        continue _fun94085
                    }
                case 334:
                    var6 = var0.set;
                    var9 = 0;
                    var6 = var6[var9];
                    var12 = var0.set;
                    var8 = var12.filter;
                    var7 = function(arg0) { // Environment: var7
                        var2 = _closure1_slot7;
                        var1 = arg0;
                        var0 = 0;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = !var0;
                        return var0;
                    };
                    var7 = var8.bind(var12)(var7);
                    var0.set = var7;
                    var7 = var0.set;
                    var7 = var7.length;
                    if (!(var9 !== var7)) {
                        _fun94085_ip = 485;
                        continue _fun94085
                    }
                case 387:
                    var7 = var0.set;
                    var7 = var7.length;
                    if (!(var7 > var10)) {
                        _fun94085_ip = 499;
                        continue _fun94085
                    }
                case 401:
                    var12 = var0.set;
                    var8 = var12;
                    var7 = var8[Symbol.iterator];
                    var8 = var7().next;
                case 412:
                    var12 = var8().value;
                    var13 = var7;
                    if (!(var13 !== var3)) {
                        _fun94085_ip = 499;
                        continue _fun94085
                    }
                case 423: // try_start_0
                    var5 = var12;
                    var12 = var12.length;
                    if (!(var10 === var12)) {
                        _fun94085_ip = 454;
                        continue _fun94085
                    }
                case 435:
                    var13 = _closure1_slot8;
                    var12 = var5;
                    var12 = var12[var9];
                    var12 = var13.bind(var3)(var12);
                    if (var12) {
                        _fun94085_ip = 456;
                        continue _fun94085
                    }
                case 454: // try_end0
                    _fun94085_ip = 412;
                    continue _fun94085;
                case 456: // try_start_1
                    var8 = var5;
                    var5 = new Array(1);
                    var5[0] = var8;
                    var0.set = var5;
                case 473: // try_end1
                    var7.return();
                    _fun94085_ip = 499;
                    continue _fun94085;
                case 478: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 5);
                    var7.return();
                    throw var5;
                case 485:
                    var5 = new Array(1);
                    var5[0] = var6;
                    var0.set = var5;
                case 499:
                    var0.formatted = var3;
                    return var3;
                case 507:
                    var5 = var1.value;
                    var0.raw = var5;
                    var6 = new Array(1);
                    var6[0] = var1;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var0.set = var5;
                    var0.formatted = var3;
                    return var0;
                case 548:
                    var3 = var1.loose;
                    var0 = var4.loose;
                    var0 = !var0;
                    var0 = !var0;
                    if (!(var3 === var0)) {
                        _fun94085_ip = 595;
                        continue _fun94085
                    }
                case 570:
                    var5 = var1.includePrerelease;
                    var0 = var4.includePrerelease;
                    var0 = !var0;
                    var3 = !var0;
                    var0 = var1;
                    if (!(var5 !== var3)) {
                        _fun94085_ip = 627;
                        continue _fun94085
                    }
                case 595:
                    var3 = _closure2_slot0;
                    var15 = var1.raw;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var16 = var2;
                    var14 = var4;
                    var1 = new var16[var3](var15, var14, var13);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 627:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot4;
        var0 = {};
        var1 = 'range';
        var0.key = var1;
        var1 = function() { // Original name: get, environment: var4
            _fun94089: for (var _fun94089_ip = 0;;) switch (_fun94089_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.formatted;
                    var1 = undefined;
                    if (!(var1 === var2)) {
                        _fun94089_ip = 195;
                        continue _fun94089
                    }
                case 18:
                    var1 = '';
                    var0.formatted = var1;
                    var1 = var0.set;
                    var1 = var1.length;
                    var5 = 0;
                    var1 = var5 < var1;
                    var4 = ' ';
                    var3 = '||';
                    var2 = 0;
                    if (!var1) {
                        _fun94089_ip = 195;
                        continue _fun94089
                    }
                case 64:
                    if (!(var2 > var5)) {
                        _fun94089_ip = 84;
                        continue _fun94089
                    }
                case 68:
                    var1 = var0.formatted;
                    var1 = var1 + var3;
                    var0.formatted = var1;
                case 84:
                    var1 = var0.set;
                    var7 = var1[var2];
                    var1 = var7.length;
                    var1 = var5 < var1;
                    var6 = 0;
                    if (!var1) {
                        _fun94089_ip = 178;
                        continue _fun94089
                    }
                case 107:
                    if (!(var6 > var5)) {
                        _fun94089_ip = 127;
                        continue _fun94089
                    }
                case 111:
                    var1 = var0.formatted;
                    var1 = var1 + var4;
                    var0.formatted = var1;
                case 127:
                    var8 = var0.formatted;
                    var9 = var7[var6];
                    var1 = var9.toString;
                    var9 = var1.bind(var9)();
                    var1 = var9.trim;
                    var1 = var1.bind(var9)();
                    var1 = var8 + var1;
                    var0.formatted = var1;
                    var6 = var6 + 1;
                    var1 = var7.length;
                    if (var6 < var1) {
                        _fun94089_ip = 107;
                        continue _fun94089
                    }
                case 178:
                    var2 = var2 + 1;
                    var1 = var0.set;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun94089_ip = 64;
                        continue _fun94089
                    }
                case 195:
                    var0 = var0.formatted;
                    return var0;
            }
        };
        var0.get = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'format';
        var0.key = var5;
        var5 = function() { // Original name: format, environment: var4
            var0 = this;
            var0 = var0.range;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'toString';
        var0.key = var5;
        var5 = function() { // Original name: toString, environment: var4
            var0 = this;
            var0 = var0.range;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'parseRange';
        var0.key = var5;
        var5 = function(arg0) { // Original name: parseRange, environment: var4
            _fun94092: for (var _fun94092_ip = 0;;) switch (_fun94092_ip) {
                case 0:
                    var12 = arg0;
                    var8 = this;
                    var5 = undefined;
                    var1 = undefined;
                    var3 = undefined;
                    var _closure3_slot0 = var8;
                    var0 = var8.options;
                    var2 = var0.includePrerelease;
                    if (!var2) {
                        _fun94092_ip = 61;
                        continue _fun94092
                    }
                case 32:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 5;
                    var0 = var7[var0];
                    var0 = var4.bind(var5)(var0);
                    var2 = var0.FLAG_INCLUDE_PRERELEASE;
                case 61:
                    var0 = var8.options;
                    var0 = var0.loose;
                    if (!var0) {
                        _fun94092_ip = 104;
                        continue _fun94092
                    }
                case 75:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 5;
                    var4 = var9[var4];
                    var4 = var7.bind(var5)(var4);
                    var0 = var4.FLAG_LOOSE;
                case 104:
                    var2 = var2 | var0;
                    var0 = ':';
                    var0 = var2 + var0;
                    var4 = var0 + var12;
                    var7 = _closure1_slot6;
                    var0 = var7.get;
                    var0 = var0.bind(var7)(var4);
                    if (var0) {
                        _fun94092_ip = 893;
                        continue _fun94092
                    }
                case 143:
                    var7 = var8.options;
                    var7 = var7.loose;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var9 = 6;
                    var13 = var10[var9];
                    var13 = var11.bind(var5)(var13);
                    var13 = var13.safeRe;
                    var10 = var10[var9];
                    var10 = var11.bind(var5)(var10);
                    var10 = var10.t;
                    if (var7) {
                        _fun94092_ip = 209;
                        continue _fun94092
                    }
                case 197:
                    var11 = var10.HYPHENRANGE;
                    var11 = var13[var11];
                    _fun94092_ip = 219;
                    continue _fun94092;
                case 209:
                    var10 = var10.HYPHENRANGELOOSE;
                    var11 = var13[var10];
                case 219:
                    var10 = var12.replace;
                    var13 = _closure1_slot20;
                    var8 = var8.options;
                    var8 = var8.includePrerelease;
                    var8 = var13.bind(var5)(var8);
                    var15 = var10.bind(var12)(var11, var8);
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var10 = 7;
                    var12 = var8[var10];
                    var13 = var11.bind(var5)(var12);
                    var12 = 'hyphen replace';
                    var12 = var13.bind(var5)(var12, var15);
                    var14 = var15.replace;
                    var12 = var8[var9];
                    var12 = var11.bind(var5)(var12);
                    var13 = var12.safeRe;
                    var12 = var8[var9];
                    var12 = var11.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.COMPARATORTRIM;
                    var13 = var13[var12];
                    var12 = var8[var9];
                    var12 = var11.bind(var5)(var12);
                    var12 = var12.comparatorTrimReplace;
                    var15 = var14.bind(var15)(var13, var12);
                    var12 = var8[var10];
                    var13 = var11.bind(var5)(var12);
                    var12 = 'comparator trim';
                    var12 = var13.bind(var5)(var12, var15);
                    var14 = var15.replace;
                    var12 = var8[var9];
                    var12 = var11.bind(var5)(var12);
                    var13 = var12.safeRe;
                    var12 = var8[var9];
                    var12 = var11.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.TILDETRIM;
                    var13 = var13[var12];
                    var12 = var8[var9];
                    var12 = var11.bind(var5)(var12);
                    var12 = var12.tildeTrimReplace;
                    var14 = var14.bind(var15)(var13, var12);
                    var12 = var8[var10];
                    var13 = var11.bind(var5)(var12);
                    var12 = 'tilde trim';
                    var12 = var13.bind(var5)(var12, var14);
                    var13 = var14.replace;
                    var12 = var8[var9];
                    var12 = var11.bind(var5)(var12);
                    var15 = var12.safeRe;
                    var12 = var8[var9];
                    var12 = var11.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.CARETTRIM;
                    var12 = var15[var12];
                    var9 = var8[var9];
                    var9 = var11.bind(var5)(var9);
                    var9 = var9.caretTrimReplace;
                    var9 = var13.bind(var14)(var12, var9);
                    var8 = var8[var10];
                    var11 = var11.bind(var5)(var8);
                    var8 = 'caret trim';
                    var8 = var11.bind(var5)(var8, var9);
                    var8 = var9.split;
                    var11 = ' ';
                    var12 = var8.bind(var9)(var11);
                    var9 = var12.map;
                    var8 = function(arg0) { // Environment: var6
                        var3 = _closure1_slot10;
                        var0 = _closure3_slot0;
                        var2 = var0.options;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var3.bind(var1)(var0, var2);
                        return var0;
                    };
                    var9 = var9.bind(var12)(var8);
                    var8 = var9.join;
                    var11 = var8.bind(var9)(var11);
                    var9 = var11.split;
                    var8 = /\s+/;
                    var11 = var9.bind(var11)(var8);
                    var9 = var11.map;
                    var8 = function(arg0) { // Environment: var6
                        var3 = _closure1_slot19;
                        var0 = _closure3_slot0;
                        var2 = var0.options;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var3.bind(var1)(var0, var2);
                        return var0;
                    };
                    var11 = var9.bind(var11)(var8);
                    var8 = var11;
                    if (!var7) {
                        _fun94092_ip = 647;
                        continue _fun94092
                    }
                case 630:
                    var9 = var11.filter;
                    var7 = function(arg0) { // Environment: var6
                        var2 = arg0;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var0 = 7;
                        var0 = var6[var0];
                        var4 = undefined;
                        var3 = var5.bind(var4)(var0);
                        var0 = _closure3_slot0;
                        var1 = var0.options;
                        var0 = 'loose invalid filter';
                        var0 = var3.bind(var4)(var0, var2, var1);
                        var1 = var2.match;
                        var0 = 6;
                        var3 = var6[var0];
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.safeRe;
                        var0 = var6[var0];
                        var0 = var5.bind(var4)(var0);
                        var0 = var0.t;
                        var0 = var0.COMPARATORLOOSE;
                        var0 = var3[var0];
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        var0 = !var0;
                        return var0;
                    };
                    var8 = var9.bind(var11)(var7);
                case 647:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var10];
                    var9 = var9.bind(var5)(var7);
                    var7 = 'range list';
                    var7 = var9.bind(var5)(var7, var8);
                    var7 = global;
                    var7 = var7.Map;
                    var9 = var7.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var7
                        }
                    });
                    var18 = var9;
                    var7 = new var18[var7](var17);
                    var1 = var7 instanceof Object ? var7 : var9;
                    var7 = var8.map;
                    var6 = function(arg0) { // Environment: var6
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var0 = _closure3_slot0;
                        var4 = var0.options;
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var5 = arg0;
                        var6 = var1;
                        var0 = new var6[var3](var5, var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var8 = var7.bind(var8)(var6);
                    var7 = var8;
                    var6 = var7[Symbol.iterator];
                    var7 = var6().next;
                case 727:
                    var9 = var7().value;
                    var8 = var6;
                    if (!(var8 !== var5)) {
                        _fun94092_ip = 800;
                        continue _fun94092
                    }
                case 738: // try_start_0
                    var3 = var9;
                    var8 = _closure1_slot7;
                    var8 = var8.bind(var5)(var9);
                    if (var8) {
                        _fun94092_ip = 777;
                        continue _fun94092
                    }
                case 753:
                    var11 = var1;
                    var10 = var11.set;
                    var9 = var3;
                    var8 = var9.value;
                    var8 = var10.bind(var11)(var8, var9);
                case 775: // try_end0
                    _fun94092_ip = 727;
                    continue _fun94092;
                case 777: // try_start_1
                    var7 = var3;
                    var3 = new Array(1);
                    var3[0] = var7;
                case 788: // try_end1
                    var6.return();
                    return var3;
                case 793: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 3);
                    var6.return();
                    throw var3;
                case 800:
                    var3 = var1;
                    var6 = var3.size;
                    var3 = 1;
                    var3 = var6 > var3;
                    if (!var3) {
                        _fun94092_ip = 835;
                        continue _fun94092
                    }
                case 818:
                    var8 = var1;
                    var7 = var8.has;
                    var6 = '';
                    var3 = var7.bind(var8)(var6);
                case 835:
                    if (!var3) {
                        _fun94092_ip = 855;
                        continue _fun94092
                    }
                case 838:
                    var7 = var1;
                    var6 = var7.delete;
                    var3 = '';
                    var3 = var6.bind(var7)(var3);
                case 855:
                    var3 = _closure1_slot2;
                    var6 = var1;
                    var1 = var6.values;
                    var1 = var1.bind(var6)();
                    var1 = var3.bind(var5)(var1);
                    var3 = _closure1_slot6;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    return var1;
                case 893:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'intersects';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: intersects, environment: var4
            _fun94097: for (var _fun94097_ip = 0;;) switch (_fun94097_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var1 = _closure2_slot0;
                    var1 = var2 instanceof var1;
                    if (var1) {
                        _fun94097_ip = 66;
                        continue _fun94097
                    }
                case 30:
                    var1 = global;
                    var3 = var1.TypeError;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var4 = 'a Range is required';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 66:
                    var1 = this;
                    var2 = var1.set;
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        _fun94098: for (var _fun94098_ip = 0;;) switch (_fun94098_ip) {
                            case 0:
                                var5 = arg0;
                                var _closure4_slot0 = var5;
                                var4 = _closure1_slot9;
                                var3 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var4.bind(var0)(var5, var3);
                                if (!var0) {
                                    _fun94098_ip = 61;
                                    continue _fun94098
                                }
                            case 34:
                                var2 = _closure3_slot0;
                                var3 = var2.set;
                                var2 = var3.some;
                                var1 = function(arg0) { // Environment: var1
                                    _fun94099: for (var _fun94099_ip = 0;;) switch (_fun94099_ip) {
                                        case 0:
                                            var4 = arg0;
                                            var _closure5_slot0 = var4;
                                            var3 = _closure1_slot9;
                                            var2 = _closure3_slot1;
                                            var0 = undefined;
                                            var0 = var3.bind(var0)(var4, var2);
                                            if (!var0) {
                                                _fun94099_ip = 59;
                                                continue _fun94099
                                            }
                                        case 34:
                                            var3 = _closure4_slot0;
                                            var2 = var3.every;
                                            var1 = function(arg0) { // Environment: var1
                                                var1 = arg0;
                                                var _closure6_slot0 = var1;
                                                var2 = _closure5_slot0;
                                                var1 = var2.every;
                                                var0 = function(arg0) { // Environment: var0
                                                    var3 = _closure6_slot0;
                                                    var2 = var3.intersects;
                                                    var1 = _closure3_slot1;
                                                    var0 = arg0;
                                                    var0 = var2.bind(var3)(var0, var1);
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var0 = var2.bind(var3)(var1);
                                        case 59:
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var1);
                            case 61:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'test';
        var0.key = var5;
        var4 = function(arg0) { // Original name: test, environment: var4
            _fun94102: for (var _fun94102_ip = 0;;) switch (_fun94102_ip) {
                case 0:
                    var0 = arg0;
                    var5 = this;
                    var4 = var0;
                    if (var0) {
                        _fun94102_ip = 16;
                        continue _fun94102
                    }
                case 12:
                    var0 = false;
                    return var0;
                case 16:
                    var0 = var4;
                    var1 = 'string';
                    var0 = typeof var0;
                    if (!(var1 === var0)) {
                        _fun94102_ip = 83;
                        continue _fun94102
                    }
                case 30: // try_start_0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var11 = var4;
                    var10 = var5.options;
                    var1 = var3.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var12 = var1;
                    var0 = new var12[var3](var11, var10, var9);
                    var4 = var0 instanceof Object ? var0 : var1;
                case 83: // try_end0
                    var0 = var5.set;
                    var0 = var0.length;
                    var3 = 0;
                    var0 = var3 < var0;
                    var1 = undefined;
                    if (!var0) {
                        _fun94102_ip = 155;
                        continue _fun94102
                    }
                case 107:
                    var8 = _closure1_slot21;
                    var0 = var5.set;
                    var7 = var0[var3];
                    var6 = var4;
                    var0 = var5.options;
                    var0 = var8.bind(var1)(var7, var6, var0);
                    if (var0) {
                        _fun94102_ip = 159;
                        continue _fun94102
                    }
                case 138:
                    var3 = var3 + 1;
                    var0 = var5.set;
                    var0 = var0.length;
                    if (var3 < var0) {
                        _fun94102_ip = 107;
                        continue _fun94102
                    }
                case 155:
                    var0 = false;
                    return var0;
                case 159:
                    var0 = true;
                    return var0;
                case 163: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var5 = var1.bind(var0)();
    var1 = arg4;
    var1.exports = var5;
    var1 = 9;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var7 = var3;
    var1 = new var7[var1](var6);
    var1 = var1 instanceof Object ? var1 : var3;
    var _closure1_slot6 = var1;
    var1 = function(arg0) { // Original name: isNullSet, environment: var2
        var0 = arg0;
        var1 = var0.value;
        var0 = '<0.0.0-0';
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot7 = var1;
    var1 = function(arg0) { // Original name: isAny, environment: var2
        var0 = arg0;
        var1 = var0.value;
        var0 = '';
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot8 = var1;
    var1 = function(arg0, arg1) { // Original name: isSatisfiable, environment: var2
        _fun94105: for (var _fun94105_ip = 0;;) switch (_fun94105_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = var1.slice;
                var2 = var0.bind(var1)();
                var0 = var2.pop;
                var0 = var0.bind(var2)();
                var _closure2_slot1 = var0;
                var1 = var2.length;
                var0 = true;
                if (!var1) {
                    _fun94105_ip = 94;
                    continue _fun94105
                }
            case 45:
                var4 = var2.every;
                var1 = function(arg0) { // Environment: var3
                    var3 = _closure2_slot1;
                    var2 = var3.intersects;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4 = var4.bind(var2)(var1);
                var1 = var2.pop;
                var1 = var1.bind(var2)();
                _closure2_slot1 = var1;
                var0 = var4;
                if (!var4) {
                    _fun94105_ip = 94;
                    continue _fun94105
                }
            case 83:
                var1 = var2.length;
                var0 = var4;
                if (var1) {
                    _fun94105_ip = 45;
                    continue _fun94105
                }
            case 94:
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function(arg0, arg1) { // Original name: parseComparator, environment: var2
        var7 = arg0;
        var6 = arg1;
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 7;
        var5 = var4[var1];
        var3 = undefined;
        var8 = var2.bind(var3)(var5);
        var5 = 'comp';
        var5 = var8.bind(var3)(var5, var7, var6);
        var5 = _closure1_slot14;
        var7 = var5.bind(var3)(var7, var6);
        var5 = var4[var1];
        var8 = var2.bind(var3)(var5);
        var5 = 'caret';
        var5 = var8.bind(var3)(var5, var7);
        var5 = _closure1_slot12;
        var7 = var5.bind(var3)(var7, var6);
        var5 = var4[var1];
        var8 = var2.bind(var3)(var5);
        var5 = 'tildes';
        var5 = var8.bind(var3)(var5, var7);
        var5 = _closure1_slot16;
        var5 = var5.bind(var3)(var7, var6);
        var7 = var4[var1];
        var8 = var2.bind(var3)(var7);
        var7 = 'xrange';
        var7 = var8.bind(var3)(var7, var5);
        var0 = _closure1_slot18;
        var0 = var0.bind(var3)(var5, var6);
        var1 = var4[var1];
        var2 = var2.bind(var3)(var1);
        var1 = 'stars';
        var1 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var1;
    var1 = function(arg0) { // Original name: isX, environment: var2
        _fun94108: for (var _fun94108_ip = 0;;) switch (_fun94108_ip) {
            case 0:
                var2 = arg0;
                var0 = !var2;
                if (var0) {
                    _fun94108_ip = 27;
                    continue _fun94108
                }
            case 9:
                var1 = var2.toLowerCase;
                var3 = var1.bind(var2)();
                var1 = 'x';
                var0 = var1 === var3;
            case 27:
                if (var0) {
                    _fun94108_ip = 38;
                    continue _fun94108
                }
            case 30:
                var1 = '*';
                var0 = var1 === var2;
            case 38:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function(arg0, arg1) { // Original name: replaceTildes, environment: var2
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.trim;
        var3 = var1.bind(var2)();
        var2 = var3.split;
        var1 = /\s+/;
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot13;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var0, var2);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ' ';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var1;
    var1 = function(arg0, arg1) { // Original name: replaceTilde, environment: var2
        _fun94111: for (var _fun94111_ip = 0;;) switch (_fun94111_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var1 = arg1;
                var2 = var1.loose;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 6;
                var4 = var7[var1];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var4 = var4.safeRe;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                if (var2) {
                    _fun94111_ip = 78;
                    continue _fun94111
                }
            case 66:
                var2 = var1.TILDE;
                var2 = var4[var2];
                _fun94111_ip = 88;
                continue _fun94111;
            case 78:
                var1 = var1.TILDELOOSE;
                var2 = var4[var1];
            case 88:
                var1 = var3.replace;
                var0 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
                    _fun94112: for (var _fun94112_ip = 0;;) switch (_fun94112_ip) {
                        case 0:
                            var9 = arg1;
                            var11 = arg2;
                            var14 = arg3;
                            var13 = arg4;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var4 = 7;
                            var0 = var0[var4];
                            var3 = undefined;
                            var6 = var2.bind(var3)(var0);
                            var25 = _closure2_slot0;
                            var26 = 'tilde';
                            var24 = arg0;
                            var27 = undefined;
                            var23 = var9;
                            var22 = var11;
                            var21 = var14;
                            var20 = var13;
                            var0 = var27[var6](var26, var25, var24, var23, var22, var21, var20, var19);
                            var0 = _closure1_slot11;
                            var2 = var0.bind(var3)(var9);
                            var0 = '';
                            if (var2) {
                                _fun94112_ip = 420;
                                continue _fun94112
                            }
                        case 90:
                            var2 = _closure1_slot11;
                            var2 = var2.bind(var3)(var11);
                            if (var2) {
                                _fun94112_ip = 372;
                                continue _fun94112
                            }
                        case 105:
                            var2 = _closure1_slot11;
                            var2 = var2.bind(var3)(var14);
                            if (var2) {
                                _fun94112_ip = 306;
                                continue _fun94112
                            }
                        case 120:
                            if (var13) {
                                _fun94112_ip = 198;
                                continue _fun94112
                            }
                        case 123:
                            var5 = var11 - 0;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var10 = var2.concat;
                            var27 = '>=';
                            var7 = '.';
                            var21 = ' <';
                            var2 = 1;
                            var18 = var5 + var2;
                            var17 = '.0-0';
                            var26 = var9;
                            var25 = var7;
                            var24 = var11;
                            var23 = var7;
                            var22 = var14;
                            var20 = var9;
                            var19 = var7;
                            var0 = var27[var10](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
                            _fun94112_ip = 420;
                            continue _fun94112;
                        case 198:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var4];
                            var5 = var5.bind(var3)(var2);
                            var2 = 'replaceTilde pr';
                            var2 = var5.bind(var3)(var2, var13);
                            var5 = var11 - 0;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var12 = var2.concat;
                            var27 = '>=';
                            var8 = '.';
                            var21 = '-';
                            var19 = ' <';
                            var2 = 1;
                            var16 = var5 + var2;
                            var15 = '.0-0';
                            var26 = var9;
                            var25 = var8;
                            var24 = var11;
                            var23 = var8;
                            var22 = var14;
                            var20 = var13;
                            var18 = var9;
                            var17 = var8;
                            var0 = var27[var12](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
                            _fun94112_ip = 420;
                            continue _fun94112;
                        case 306:
                            var5 = var11 - 0;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var10 = var2.concat;
                            var27 = '>=';
                            var7 = '.';
                            var23 = '.0 <';
                            var2 = 1;
                            var20 = var5 + var2;
                            var19 = '.0-0';
                            var26 = var9;
                            var25 = var7;
                            var24 = var11;
                            var22 = var9;
                            var21 = var7;
                            var0 = var27[var10](var26, var25, var24, var23, var22, var21, var20, var19, var18);
                            _fun94112_ip = 420;
                            continue _fun94112;
                        case 372:
                            var5 = var9 - 0;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var8 = var2.concat;
                            var27 = '>=';
                            var25 = '.0.0 <';
                            var2 = 1;
                            var24 = var5 + var2;
                            var23 = '.0.0-0';
                            var26 = var9;
                            var0 = var27[var8](var26, var25, var24, var23, var22);
                        case 420:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var4];
                            var2 = var2.bind(var3)(var1);
                            var1 = 'tilde return';
                            var1 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function(arg0, arg1) { // Original name: replaceCarets, environment: var2
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.trim;
        var3 = var1.bind(var2)();
        var2 = var3.split;
        var1 = /\s+/;
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot15;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var0, var2);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ' ';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot14 = var1;
    var1 = function(arg0, arg1) { // Original name: replaceCaret, environment: var2
        _fun94115: for (var _fun94115_ip = 0;;) switch (_fun94115_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 7;
                var2 = var6[var2];
                var7 = undefined;
                var5 = var5.bind(var7)(var2);
                var2 = 'caret';
                var2 = var5.bind(var7)(var2, var3, var1);
                var2 = var1.loose;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 6;
                var5 = var8[var4];
                var5 = var6.bind(var7)(var5);
                var5 = var5.safeRe;
                var4 = var8[var4];
                var4 = var6.bind(var7)(var4);
                var4 = var4.t;
                if (var2) {
                    _fun94115_ip = 111;
                    continue _fun94115
                }
            case 99:
                var2 = var4.CARET;
                var2 = var5[var2];
                _fun94115_ip = 121;
                continue _fun94115;
            case 111:
                var4 = var4.CARETLOOSE;
                var2 = var5[var4];
            case 121:
                var4 = var1.includePrerelease;
                var1 = '';
                if (!var4) {
                    _fun94115_ip = 140;
                    continue _fun94115
                }
            case 134:
                var1 = '-0';
            case 140:
                var _closure2_slot1 = var1;
                var1 = var3.replace;
                var0 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
                    _fun94116: for (var _fun94116_ip = 0;;) switch (_fun94116_ip) {
                        case 0:
                            var11 = arg1;
                            var15 = arg2;
                            var17 = arg3;
                            var16 = arg4;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var4 = 7;
                            var0 = var0[var4];
                            var3 = undefined;
                            var7 = var2.bind(var3)(var0);
                            var31 = _closure2_slot0;
                            var32 = 'caret';
                            var30 = arg0;
                            var33 = undefined;
                            var29 = var11;
                            var28 = var15;
                            var27 = var17;
                            var26 = var16;
                            var0 = var33[var7](var32, var31, var30, var29, var28, var27, var26, var25);
                            var0 = _closure1_slot11;
                            var5 = var0.bind(var3)(var11);
                            var0 = '';
                            if (var5) {
                                _fun94116_ip = 893;
                                continue _fun94116
                            }
                        case 90:
                            var5 = _closure1_slot11;
                            var5 = var5.bind(var3)(var15);
                            if (var5) {
                                _fun94116_ip = 835;
                                continue _fun94116
                            }
                        case 105:
                            var5 = _closure1_slot11;
                            var5 = var5.bind(var3)(var17);
                            if (var5) {
                                _fun94116_ip = 679;
                                continue _fun94116
                            }
                        case 120:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var4];
                            var6 = var6.bind(var3)(var5);
                            if (var16) {
                                _fun94116_ip = 404;
                                continue _fun94116
                            }
                        case 143:
                            var5 = 'no pr';
                            var5 = var6.bind(var3)(var5);
                            var7 = '0';
                            if (!(var7 !== var11)) {
                                _fun94116_ip = 233;
                                continue _fun94116
                            }
                        case 164:
                            var8 = var11 - 0;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var13 = var5.concat;
                            var33 = '>=';
                            var10 = '.';
                            var27 = ' <';
                            var5 = 1;
                            var26 = var8 + var5;
                            var25 = '.0.0-0';
                            var32 = var11;
                            var31 = var10;
                            var30 = var15;
                            var29 = var10;
                            var28 = var17;
                            var5 = var33[var13](var32, var31, var30, var29, var28, var27, var26, var25, var24);
                            _fun94116_ip = 396;
                            continue _fun94116;
                        case 233:
                            if (!(var7 !== var15)) {
                                _fun94116_ip = 313;
                                continue _fun94116
                            }
                        case 237:
                            var27 = _closure2_slot1;
                            var8 = var15 - 0;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var13 = var7.concat;
                            var33 = '>=';
                            var10 = '.';
                            var26 = ' <';
                            var7 = 1;
                            var23 = var8 + var7;
                            var22 = '.0-0';
                            var32 = var11;
                            var31 = var10;
                            var30 = var15;
                            var29 = var10;
                            var28 = var17;
                            var25 = var11;
                            var24 = var10;
                            var7 = var33[var13](var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21);
                            _fun94116_ip = 393;
                            continue _fun94116;
                        case 313:
                            var27 = _closure2_slot1;
                            var9 = var17 - 0;
                            var8 = global;
                            var8 = var8.HermesInternal;
                            var14 = var8.concat;
                            var33 = '>=';
                            var12 = '.';
                            var26 = ' <';
                            var8 = 1;
                            var21 = var9 + var8;
                            var20 = '-0';
                            var32 = var11;
                            var31 = var12;
                            var30 = var15;
                            var29 = var12;
                            var28 = var17;
                            var25 = var11;
                            var24 = var12;
                            var23 = var15;
                            var22 = var12;
                            var7 = var33[var14](var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19);
                        case 393:
                            var5 = var7;
                        case 396:
                            var0 = var5;
                            _fun94116_ip = 893;
                            continue _fun94116;
                        case 404:
                            var5 = 'replaceCaret pr';
                            var5 = var6.bind(var3)(var5, var16);
                            var6 = '0';
                            if (!(var6 !== var11)) {
                                _fun94116_ip = 502;
                                continue _fun94116
                            }
                        case 426:
                            var7 = var11 - 0;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var13 = var5.concat;
                            var33 = '>=';
                            var10 = '.';
                            var27 = '-';
                            var25 = ' <';
                            var5 = 1;
                            var24 = var7 + var5;
                            var23 = '.0.0-0';
                            var32 = var11;
                            var31 = var10;
                            var30 = var15;
                            var29 = var10;
                            var28 = var17;
                            var26 = var16;
                            var5 = var33[var13](var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22);
                            _fun94116_ip = 671;
                            continue _fun94116;
                        case 502:
                            if (!(var6 !== var15)) {
                                _fun94116_ip = 585;
                                continue _fun94116
                            }
                        case 506:
                            var7 = var15 - 0;
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var13 = var6.concat;
                            var33 = '>=';
                            var10 = '.';
                            var27 = '-';
                            var25 = ' <';
                            var6 = 1;
                            var22 = var7 + var6;
                            var21 = '.0-0';
                            var32 = var11;
                            var31 = var10;
                            var30 = var15;
                            var29 = var10;
                            var28 = var17;
                            var26 = var16;
                            var24 = var11;
                            var23 = var10;
                            var6 = var33[var13](var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20);
                            _fun94116_ip = 668;
                            continue _fun94116;
                        case 585:
                            var8 = var17 - 0;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var14 = var7.concat;
                            var33 = '>=';
                            var12 = '.';
                            var27 = '-';
                            var25 = ' <';
                            var7 = 1;
                            var20 = var8 + var7;
                            var19 = '-0';
                            var32 = var11;
                            var31 = var12;
                            var30 = var15;
                            var29 = var12;
                            var28 = var17;
                            var26 = var16;
                            var24 = var11;
                            var23 = var12;
                            var22 = var15;
                            var21 = var12;
                            var6 = var33[var14](var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18);
                        case 668:
                            var5 = var6;
                        case 671:
                            var0 = var5;
                            _fun94116_ip = 893;
                            continue _fun94116;
                        case 679:
                            var5 = '0';
                            if (!(var5 !== var11)) {
                                _fun94116_ip = 756;
                                continue _fun94116
                            }
                        case 689:
                            var28 = _closure2_slot1;
                            var6 = var11 - 0;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var12 = var5.concat;
                            var33 = '>=';
                            var31 = '.';
                            var29 = '.0';
                            var27 = ' <';
                            var5 = 1;
                            var26 = var6 + var5;
                            var25 = '.0.0-0';
                            var32 = var11;
                            var30 = var15;
                            var5 = var33[var12](var32, var31, var30, var29, var28, var27, var26, var25, var24);
                            _fun94116_ip = 830;
                            continue _fun94116;
                        case 756:
                            var28 = _closure2_slot1;
                            var7 = var15 - 0;
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var13 = var6.concat;
                            var33 = '>=';
                            var10 = '.';
                            var29 = '.0';
                            var27 = ' <';
                            var6 = 1;
                            var24 = var7 + var6;
                            var23 = '.0-0';
                            var32 = var11;
                            var31 = var10;
                            var30 = var15;
                            var26 = var11;
                            var25 = var10;
                            var5 = var33[var13](var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22);
                        case 830:
                            var0 = var5;
                            _fun94116_ip = 893;
                            continue _fun94116;
                        case 835:
                            var30 = _closure2_slot1;
                            var5 = var11 - 0;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var9 = var2.concat;
                            var33 = '>=';
                            var31 = '.0.0';
                            var29 = ' <';
                            var2 = 1;
                            var28 = var5 + var2;
                            var27 = '.0.0-0';
                            var32 = var11;
                            var0 = var33[var9](var32, var31, var30, var29, var28, var27, var26);
                        case 893:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var4];
                            var2 = var2.bind(var3)(var1);
                            var1 = 'caret return';
                            var1 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function(arg0, arg1) { // Original name: replaceXRanges, environment: var2
        var3 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var5;
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 7;
        var1 = var4[var1];
        var4 = undefined;
        var2 = var2.bind(var4)(var1);
        var1 = 'replaceXRanges';
        var1 = var2.bind(var4)(var1, var3, var5);
        var2 = var3.split;
        var1 = /\s+/;
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot17;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var0, var2);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ' ';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot16 = var1;
    var1 = function(arg0, arg1) { // Original name: replaceXRange, environment: var2
        _fun94119: for (var _fun94119_ip = 0;;) switch (_fun94119_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var2 = var3.trim;
                var3 = var2.bind(var3)();
                var _closure2_slot0 = var3;
                var2 = var1.loose;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 6;
                var4 = var7[var1];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var4 = var4.safeRe;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                if (var2) {
                    _fun94119_ip = 92;
                    continue _fun94119
                }
            case 80:
                var2 = var1.XRANGE;
                var2 = var4[var2];
                _fun94119_ip = 102;
                continue _fun94119;
            case 92:
                var1 = var1.XRANGELOOSE;
                var2 = var4[var1];
            case 102:
                var1 = var3.replace;
                var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                    _fun94120: for (var _fun94120_ip = 0;;) switch (_fun94120_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = arg1;
                            var7 = arg2;
                            var2 = arg3;
                            var11 = arg4;
                            var8 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var4 = 7;
                            var5 = var3[var4];
                            var3 = undefined;
                            var12 = var8.bind(var3)(var5);
                            var25 = _closure2_slot0;
                            var26 = 'xRange';
                            var19 = arg5;
                            var27 = undefined;
                            var24 = var0;
                            var23 = var6;
                            var22 = var7;
                            var21 = var2;
                            var20 = var11;
                            var5 = var27[var12](var26, var25, var24, var23, var22, var21, var20, var19, var18);
                            var5 = _closure1_slot11;
                            var9 = var5.bind(var3)(var7);
                            var12 = var9;
                            if (var12) {
                                _fun94120_ip = 99;
                                continue _fun94120
                            }
                        case 90:
                            var5 = _closure1_slot11;
                            var12 = var5.bind(var3)(var2);
                        case 99:
                            var5 = var12;
                            if (var5) {
                                _fun94120_ip = 114;
                                continue _fun94120
                            }
                        case 105:
                            var10 = _closure1_slot11;
                            var5 = var10.bind(var3)(var11);
                        case 114:
                            var10 = '=';
                            var10 = var10 === var6;
                            if (!var10) {
                                _fun94120_ip = 128;
                                continue _fun94120
                            }
                        case 125:
                            var10 = var5;
                        case 128:
                            if (!var10) {
                                _fun94120_ip = 135;
                                continue _fun94120
                            }
                        case 131:
                            var6 = '';
                        case 135:
                            var8 = _closure2_slot1;
                            var10 = var8.includePrerelease;
                            var11 = '';
                            var8 = var11;
                            if (!var10) {
                                _fun94120_ip = 161;
                                continue _fun94120
                            }
                        case 155:
                            var8 = '-0';
                        case 161:
                            if (var9) {
                                _fun94120_ip = 506;
                                continue _fun94120
                            }
                        case 167:
                            if (!var6) {
                                _fun94120_ip = 176;
                                continue _fun94120
                            }
                        case 170:
                            if (var5) {
                                _fun94120_ip = 325;
                                continue _fun94120
                            }
                        case 176:
                            if (var12) {
                                _fun94120_ip = 263;
                                continue _fun94120
                            }
                        case 179:
                            if (!var5) {
                                _fun94120_ip = 535;
                                continue _fun94120
                            }
                        case 185:
                            var9 = var2 - 0;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var16 = var5.concat;
                            var27 = '>=';
                            var14 = '.';
                            var23 = '.0';
                            var21 = ' <';
                            var5 = 1;
                            var18 = var9 + var5;
                            var17 = '.0-0';
                            var26 = var7;
                            var25 = var14;
                            var24 = var2;
                            var22 = var8;
                            var20 = var7;
                            var19 = var14;
                            var0 = var27[var16](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
                            _fun94120_ip = 535;
                            continue _fun94120;
                        case 263:
                            var9 = var7 - 0;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var15 = var5.concat;
                            var27 = '>=';
                            var25 = '.0.0';
                            var23 = ' <';
                            var5 = 1;
                            var22 = var9 + var5;
                            var21 = '.0.0-0';
                            var26 = var7;
                            var24 = var8;
                            var0 = var27[var15](var26, var25, var24, var23, var22, var21, var20);
                            _fun94120_ip = 535;
                            continue _fun94120;
                        case 325:
                            var9 = var2;
                            if (!var12) {
                                _fun94120_ip = 333;
                                continue _fun94120
                            }
                        case 331:
                            var9 = 0;
                        case 333:
                            var2 = '>';
                            if (!(var2 !== var6)) {
                                _fun94120_ip = 403;
                                continue _fun94120
                            }
                        case 341:
                            var13 = '<=';
                            var5 = var7;
                            var10 = var9;
                            var2 = var6;
                            if (!(var13 === var2)) {
                                _fun94120_ip = 445;
                                continue _fun94120
                            }
                        case 360:
                            if (var12) {
                                _fun94120_ip = 378;
                                continue _fun94120
                            }
                        case 363:
                            var14 = var9 - 0;
                            var13 = 1;
                            var13 = var14 + var13;
                            var14 = var7;
                            _fun94120_ip = 391;
                            continue _fun94120;
                        case 378:
                            var16 = var7 - 0;
                            var15 = 1;
                            var14 = var16 + var15;
                            var13 = var9;
                        case 391:
                            var2 = '<';
                            var5 = var14;
                            var10 = var13;
                            _fun94120_ip = 445;
                            continue _fun94120;
                        case 403:
                            if (var12) {
                                _fun94120_ip = 427;
                                continue _fun94120
                            }
                        case 406:
                            var12 = var9 - 0;
                            var9 = 1;
                            var10 = var12 + var9;
                            var2 = '>=';
                            var5 = var7;
                            _fun94120_ip = 445;
                            continue _fun94120;
                        case 427:
                            var9 = var7 - 0;
                            var7 = 1;
                            var5 = var9 + var7;
                            var2 = '>=';
                            var10 = 0;
                        case 445:
                            var7 = '<';
                            var9 = var8;
                            if (!(var7 === var2)) {
                                _fun94120_ip = 462;
                                continue _fun94120
                            }
                        case 456:
                            var9 = '-0';
                        case 462:
                            var26 = var2 + var5;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var5 = '.';
                            var22 = 0;
                            var27 = var11;
                            var25 = var5;
                            var24 = var10;
                            var23 = var5;
                            var21 = var9;
                            var0 = var27[var7](var26, var25, var24, var23, var22, var21, var20);
                            _fun94120_ip = 535;
                            continue _fun94120;
                        case 506:
                            var2 = '>';
                            if (!(var2 !== var6)) {
                                _fun94120_ip = 526;
                                continue _fun94120
                            }
                        case 514:
                            var2 = '*';
                            var5 = '<';
                            if (!(var5 === var6)) {
                                _fun94120_ip = 532;
                                continue _fun94120
                            }
                        case 526:
                            var2 = '<0.0.0-0';
                        case 532:
                            var0 = var2;
                        case 535:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var4];
                            var2 = var2.bind(var3)(var1);
                            var1 = 'xRange return';
                            var1 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function(arg0, arg1) { // Original name: replaceStars, environment: var2
        var1 = arg0;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 7;
        var0 = var6[var0];
        var4 = undefined;
        var3 = var5.bind(var4)(var0);
        var2 = 'replaceStars';
        var0 = arg1;
        var0 = var3.bind(var4)(var2, var1, var0);
        var0 = var1.trim;
        var3 = var0.bind(var1)();
        var2 = var3.replace;
        var0 = 6;
        var1 = var6[var0];
        var1 = var5.bind(var4)(var1);
        var1 = var1.safeRe;
        var0 = var6[var0];
        var0 = var5.bind(var4)(var0);
        var0 = var0.t;
        var0 = var0.STAR;
        var1 = var1[var0];
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var1;
    var1 = function(arg0, arg1) { // Original name: replaceGTE0, environment: var2
        _fun94122: for (var _fun94122_ip = 0;;) switch (_fun94122_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = 7;
                var2 = var1[var2];
                var6 = undefined;
                var7 = var5.bind(var6)(var2);
                var2 = 'replaceGTE0';
                var2 = var7.bind(var6)(var2, var3, var0);
                var2 = var3.trim;
                var3 = var2.bind(var3)();
                var2 = var3.replace;
                var7 = 6;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.safeRe;
                var0 = var0.includePrerelease;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.t;
                if (var0) {
                    _fun94122_ip = 118;
                    continue _fun94122
                }
            case 108:
                var0 = var4.GTE0;
                _fun94122_ip = 126;
                continue _fun94122;
            case 118:
                var0 = var4.GTE0PRE;
            case 126:
                var1 = var1[var0];
                var0 = '';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function(arg0) { // Original name: hyphenReplace, environment: var2
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) { // Environment: var0
            _fun94124: for (var _fun94124_ip = 0;;) switch (_fun94124_ip) {
                case 0:
                    var9 = arg1;
                    var13 = arg2;
                    var15 = arg3;
                    var1 = arg8;
                    var6 = arg9;
                    var12 = arg10;
                    var11 = arg11;
                    var2 = _closure1_slot11;
                    var5 = undefined;
                    var2 = var2.bind(var5)(var13);
                    var4 = '';
                    var3 = var4;
                    if (var2) {
                        _fun94124_ip = 273;
                        continue _fun94124
                    }
                case 48:
                    var2 = _closure1_slot11;
                    var2 = var2.bind(var5)(var15);
                    if (var2) {
                        _fun94124_ip = 219;
                        continue _fun94124
                    }
                case 63:
                    var7 = _closure1_slot11;
                    var2 = arg4;
                    var2 = var7.bind(var5)(var2);
                    if (var2) {
                        _fun94124_ip = 156;
                        continue _fun94124
                    }
                case 78:
                    var2 = arg5;
                    if (var2) {
                        _fun94124_ip = 130;
                        continue _fun94124
                    }
                case 84:
                    var2 = _closure2_slot0;
                    var8 = var4;
                    if (!var2) {
                        _fun94124_ip = 103;
                        continue _fun94124
                    }
                case 97:
                    var8 = '-0';
                case 103:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var2 = '>=';
                    var2 = var7.bind(var2)(var9, var8);
                    _fun94124_ip = 154;
                    continue _fun94124;
                case 130:
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var8 = var7.concat;
                    var7 = '>=';
                    var2 = var8.bind(var7)(var9);
                case 154:
                    _fun94124_ip = 217;
                    continue _fun94124;
                case 156:
                    var7 = _closure2_slot0;
                    var14 = var4;
                    if (!var7) {
                        _fun94124_ip = 175;
                        continue _fun94124
                    }
                case 169:
                    var14 = '-0';
                case 175:
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var10 = var7.concat;
                    var23 = '>=';
                    var21 = '.';
                    var19 = '.0';
                    var22 = var13;
                    var20 = var15;
                    var18 = var14;
                    var2 = var23[var10](var22, var21, var20, var19, var18, var17);
                case 217:
                    _fun94124_ip = 270;
                    continue _fun94124;
                case 219:
                    var7 = _closure2_slot0;
                    var10 = var4;
                    if (!var7) {
                        _fun94124_ip = 238;
                        continue _fun94124
                    }
                case 232:
                    var10 = '-0';
                case 238:
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var9 = var7.concat;
                    var8 = '>=';
                    var7 = '.0.0';
                    var2 = var9.bind(var8)(var13, var7, var10);
                case 270:
                    var3 = var2;
                case 273:
                    var2 = _closure1_slot11;
                    var7 = var2.bind(var5)(var1);
                    var2 = var4;
                    if (var7) {
                        _fun94124_ip = 551;
                        continue _fun94124
                    }
                case 291:
                    var7 = _closure1_slot11;
                    var7 = var7.bind(var5)(var6);
                    if (var7) {
                        _fun94124_ip = 509;
                        continue _fun94124
                    }
                case 306:
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var5)(var12);
                    var5 = global;
                    if (var0) {
                        _fun94124_ip = 465;
                        continue _fun94124
                    }
                case 323:
                    if (var11) {
                        _fun94124_ip = 416;
                        continue _fun94124
                    }
                case 326:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun94124_ip = 363;
                        continue _fun94124
                    }
                case 336:
                    var0 = var5.HermesInternal;
                    var8 = var0.concat;
                    var7 = '<=';
                    var0 = arg7;
                    var0 = var8.bind(var7)(var0);
                    _fun94124_ip = 414;
                    continue _fun94124;
                case 363:
                    var8 = var12 - 0;
                    var7 = var5.HermesInternal;
                    var13 = var7.concat;
                    var23 = '<';
                    var9 = '.';
                    var7 = 1;
                    var18 = var8 + var7;
                    var17 = '-0';
                    var22 = var1;
                    var21 = var9;
                    var20 = var6;
                    var19 = var9;
                    var0 = var23[var13](var22, var21, var20, var19, var18, var17, var16);
                case 414:
                    _fun94124_ip = 463;
                    continue _fun94124;
                case 416:
                    var7 = var5.HermesInternal;
                    var10 = var7.concat;
                    var23 = '<=';
                    var8 = '.';
                    var17 = '-';
                    var22 = var1;
                    var21 = var8;
                    var20 = var6;
                    var19 = var8;
                    var18 = var12;
                    var16 = var11;
                    var0 = var23[var10](var22, var21, var20, var19, var18, var17, var16, var15);
                case 463:
                    _fun94124_ip = 507;
                    continue _fun94124;
                case 465:
                    var6 = var6 - 0;
                    var5 = var5.HermesInternal;
                    var9 = var5.concat;
                    var23 = '<';
                    var21 = '.';
                    var5 = 1;
                    var20 = var6 + var5;
                    var19 = '.0-0';
                    var22 = var1;
                    var0 = var23[var9](var22, var21, var20, var19, var18);
                case 507:
                    _fun94124_ip = 548;
                    continue _fun94124;
                case 509:
                    var5 = var1 - 0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = '<';
                    var1 = 1;
                    var5 = var5 + var1;
                    var1 = '.0.0-0';
                    var0 = var7.bind(var6)(var5, var1);
                case 548:
                    var2 = var0;
                case 551:
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = ' ';
                    var1 = var1.bind(var4)(var3, var0, var2);
                    var0 = var1.trim;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot20 = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: testSet, environment: var2
        _fun94125: for (var _fun94125_ip = 0;;) switch (_fun94125_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var0 = var9.length;
                var7 = 0;
                var0 = var7 < var0;
                var1 = 0;
                if (!var0) {
                    _fun94125_ip = 55;
                    continue _fun94125
                }
            case 22:
                var2 = var9[var1];
                var0 = var2.test;
                var0 = var0.bind(var2)(var8);
                if (var0) {
                    _fun94125_ip = 43;
                    continue _fun94125
                }
            case 39:
                var0 = false;
                return var0;
            case 43:
                var1 = var1 + 1;
                var0 = var9.length;
                if (var1 < var0) {
                    _fun94125_ip = 22;
                    continue _fun94125
                }
            case 55:
                var0 = var8.prerelease;
                var0 = var0.length;
                if (!var0) {
                    _fun94125_ip = 302;
                    continue _fun94125
                }
            case 72:
                var0 = arg2;
                var0 = var0.includePrerelease;
                if (var0) {
                    _fun94125_ip = 302;
                    continue _fun94125
                }
            case 87:
                var0 = var9.length;
                var0 = var7 < var0;
                var6 = undefined;
                var4 = 7;
                var3 = 4;
                var2 = 0;
                var1 = undefined;
                if (!var0) {
                    _fun94125_ip = 294;
                    continue _fun94125
                }
            case 117:
                var10 = _closure1_slot0;
                var0 = _closure1_slot1;
                var11 = var0[var4];
                var12 = var10.bind(var6)(var11);
                var11 = var9[var2];
                var11 = var11.semver;
                var11 = var12.bind(var6)(var11);
                var11 = var9[var2];
                var11 = var11.semver;
                var0 = var0[var3];
                var0 = var10.bind(var6)(var0);
                var0 = var0.ANY;
                var10 = var1;
                if (!(var11 !== var0)) {
                    _fun94125_ip = 276;
                    continue _fun94125
                }
            case 181:
                var0 = var9[var2];
                var0 = var0.semver;
                var0 = var0.prerelease;
                var0 = var0.length;
                var10 = var1;
                if (!(var0 > var7)) {
                    _fun94125_ip = 276;
                    continue _fun94125
                }
            case 209:
                var0 = var9[var2];
                var12 = var0.semver;
                var11 = var12.major;
                var0 = var8.major;
                var10 = var12;
                if (!(var11 === var0)) {
                    _fun94125_ip = 276;
                    continue _fun94125
                }
            case 238:
                var11 = var12.minor;
                var0 = var8.minor;
                var10 = var12;
                if (!(var11 === var0)) {
                    _fun94125_ip = 276;
                    continue _fun94125
                }
            case 257:
                var11 = var12.patch;
                var0 = var8.patch;
                var10 = var12;
                if (!(var11 !== var0)) {
                    _fun94125_ip = 298;
                    continue _fun94125
                }
            case 276:
                var2 = var2 + 1;
                var0 = var9.length;
                var1 = var10;
                if (var2 < var0) {
                    _fun94125_ip = 117;
                    continue _fun94125
                }
            case 294:
                var0 = false;
                return var0;
            case 298:
                var0 = true;
                return var0;
            case 302:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot21 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 6, 7, 12255, 12282, 12256, 12258, 12257, 12254, 12284]);