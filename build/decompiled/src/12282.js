// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var0 = 0;
    var2 = var4[var0];
    var0 = undefined;
    var2 = var3.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var4[var2];
    var2 = var3.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = global;
    var3 = var2.Symbol;
    var2 = 'SemVer ANY';
    var2 = var3.bind(var0)(var2);
    var _closure1_slot4 = var2;
    var1 = function() { // Environment: var1
        var4 = function arg0, arg1() {
            _fun94077: for (var _fun94077_ip = 0;;) switch (_fun94077_ip) {
                case 0:
                    var0 = arg0;
                    var4 = this;
                    var3 = _closure1_slot2;
                    var5 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4, var5);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 2;
                    var3 = var7[var3];
                    var6 = var6.bind(var1)(var3);
                    var3 = arg1;
                    var3 = var6.bind(var1)(var3);
                    var5 = var0 instanceof var5;
                    var6 = var0;
                    if (!var5) {
                        _fun94077_ip = 96;
                        continue _fun94077
                    }
                case 66:
                    var7 = var0.loose;
                    var5 = var3.loose;
                    var5 = !var5;
                    var5 = !var5;
                    if (!(var7 !== var5)) {
                        _fun94077_ip = 297;
                        continue _fun94077
                    }
                case 91:
                    var6 = var0.value;
                case 96:
                    var5 = var6.trim;
                    var7 = var5.bind(var6)();
                    var6 = var7.split;
                    var5 = /\s+/;
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.join;
                    var5 = ' ';
                    var6 = var6.bind(var7)(var5);
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 3;
                    var7 = var7[var5];
                    var8 = var8.bind(var1)(var7);
                    var7 = 'comparator';
                    var7 = var8.bind(var1)(var7, var6, var3);
                    var4.options = var3;
                    var3 = var3.loose;
                    var3 = !var3;
                    var3 = !var3;
                    var4.loose = var3;
                    var3 = var4.parse;
                    var3 = var3.bind(var4)(var6);
                    var6 = var4.semver;
                    var3 = _closure1_slot4;
                    if (!(var6 !== var3)) {
                        _fun94077_ip = 256;
                        continue _fun94077
                    }
                case 226:
                    var6 = var4.operator;
                    var3 = var4.semver;
                    var3 = var3.version;
                    var3 = var6 + var3;
                    var4.value = var3;
                    _fun94077_ip = 266;
                    continue _fun94077;
                case 256:
                    var3 = '';
                    var4.value = var3;
                case 266:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var3 = var3.bind(var1)(var2);
                    var2 = 'comp';
                    var2 = var3.bind(var1)(var2, var4);
                    return var1;
                case 297:
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'parse';
        var0.key = var2;
        var2 = function arg0() {
            _fun94078: for (var _fun94078_ip = 0;;) switch (_fun94078_ip) {
                case 0:
                    var7 = arg0;
                    var2 = this;
                    var0 = var2.options;
                    var3 = var0.loose;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var1 = 4;
                    var5 = var8[var1];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.safeRe;
                    var1 = var8[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.t;
                    if (var3) {
                        _fun94078_ip = 77;
                        continue _fun94078
                    }
                case 65:
                    var3 = var1.COMPARATOR;
                    var3 = var5[var3];
                    _fun94078_ip = 87;
                    continue _fun94078;
                case 77:
                    var1 = var1.COMPARATORLOOSE;
                    var3 = var5[var1];
                case 87:
                    var1 = var7.match;
                    var3 = var1.bind(var7)(var3);
                    if (var3) {
                        _fun94078_ip = 153;
                        continue _fun94078
                    }
                case 101:
                    var1 = global;
                    var6 = var1.TypeError;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = 'Invalid comparator: ';
                    var10 = var5.bind(var1)(var7);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var11 = var5;
                    var1 = new var11[var6](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var5;
                    throw var1;
                case 153:
                    var6 = 1;
                    var7 = var3[var6];
                    var1 = '';
                    var5 = var1;
                    if (!(var0 !== var7)) {
                        _fun94078_ip = 175;
                        continue _fun94078
                    }
                case 171:
                    var5 = var3[var6];
                case 175:
                    var2.operator = var5;
                    var6 = var2.operator;
                    var5 = '=';
                    if (!(var5 === var6)) {
                        _fun94078_ip = 201;
                        continue _fun94078
                    }
                case 195:
                    var2.operator = var1;
                case 201:
                    var1 = 2;
                    var5 = var3[var1];
                    if (var5) {
                        _fun94078_ip = 223;
                        continue _fun94078
                    }
                case 211:
                    var5 = _closure1_slot4;
                    var2.semver = var5;
                    _fun94078_ip = 284;
                    continue _fun94078;
                case 223:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 5;
                    var4 = var6[var4];
                    var5 = var5.bind(var0)(var4);
                    var10 = var3[var1];
                    var1 = var2.options;
                    var9 = var1.loose;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var11 = var3;
                    var1 = new var11[var5](var10, var9, var8);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.semver = var1;
                case 284:
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(4);
        var2[0] = var0;
        var0 = {};
        var5 = 'toString';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.value;
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'test';
        var0.key = var5;
        var5 = function arg0() {
            _fun94080: for (var _fun94080_ip = 0;;) switch (_fun94080_ip) {
                case 0:
                    var7 = arg0;
                    var0 = this;
                    var1 = var7;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var3);
                    var3 = var0.options;
                    var4 = var3.loose;
                    var3 = 'Comparator.test';
                    var3 = var6.bind(var5)(var3, var7, var4);
                    var4 = var0.semver;
                    var3 = _closure1_slot4;
                    if (!(var4 !== var3)) {
                        _fun94080_ip = 202;
                        continue _fun94080
                    }
                case 75:
                    var4 = var1;
                    var3 = _closure1_slot4;
                    if (!(var4 !== var3)) {
                        _fun94080_ip = 202;
                        continue _fun94080
                    }
                case 86:
                    var3 = var1;
                    var4 = 'string';
                    var3 = typeof var3;
                    if (!(var4 === var3)) {
                        _fun94080_ip = 148;
                        continue _fun94080
                    }
                case 100: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 5;
                    var3 = var6[var3];
                    var7 = var4.bind(var5)(var3);
                    var11 = var1;
                    var10 = var0.options;
                    var4 = var7.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var7
                        }
                    });
                    var12 = var4;
                    var3 = new var12[var7](var11, var10, var9);
                    var1 = var3 instanceof Object ? var3 : var4;
                case 148: // try_end0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 6;
                    var2 = var4[var2];
                    var4 = var3.bind(var5)(var2);
                    var11 = var1;
                    var10 = var0.operator;
                    var9 = var0.semver;
                    var8 = var0.options;
                    var12 = undefined;
                    var0 = var12[var4](var11, var10, var9, var8, var7);
                    return var0;
                case 196: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var0 = false;
                    return var0;
                case 202:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'intersects';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun94081: for (var _fun94081_ip = 0;;) switch (_fun94081_ip) {
                case 0:
                    var3 = arg0;
                    var6 = arg1;
                    var2 = this;
                    var0 = _closure2_slot0;
                    var0 = var3 instanceof var0;
                    if (var0) {
                        _fun94081_ip = 59;
                        continue _fun94081
                    }
                case 23:
                    var0 = global;
                    var4 = var0.TypeError;
                    var0 = var4.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var4
                        }
                    });
                    var21 = 'a Comparator is required';
                    var22 = var1;
                    var0 = new var22[var4](var21, var20);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 59:
                    var0 = var2.operator;
                    var4 = '';
                    if (!(var4 !== var0)) {
                        _fun94081_ip = 716;
                        continue _fun94081
                    }
                case 76:
                    var0 = var3.operator;
                    if (!(var4 !== var0)) {
                        _fun94081_ip = 630;
                        continue _fun94081
                    }
                case 89:
                    var1 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 2;
                    var0 = var5[var0];
                    var16 = undefined;
                    var0 = var1.bind(var16)(var0);
                    var15 = var0.bind(var16)(var6);
                    var0 = var15.includePrerelease;
                    var0 = !var0;
                    if (var0) {
                        _fun94081_ip = 161;
                        continue _fun94081
                    }
                case 131:
                    var1 = var2.value;
                    var7 = '<0.0.0-0';
                    var1 = var7 !== var1;
                    if (!var1) {
                        _fun94081_ip = 158;
                        continue _fun94081
                    }
                case 149:
                    var5 = var3.value;
                    var1 = var7 !== var5;
                case 158:
                    var0 = var1;
                case 161:
                    if (!var0) {
                        _fun94081_ip = 628;
                        continue _fun94081
                    }
                case 167:
                    var1 = var15.includePrerelease;
                    var1 = !var1;
                    if (!var1) {
                        _fun94081_ip = 223;
                        continue _fun94081
                    }
                case 179:
                    var7 = var2.value;
                    var5 = var7.startsWith;
                    var9 = '<0.0.0';
                    var5 = var5.bind(var7)(var9);
                    if (var5) {
                        _fun94081_ip = 220;
                        continue _fun94081
                    }
                case 204:
                    var8 = var3.value;
                    var7 = var8.startsWith;
                    var5 = var7.bind(var8)(var9);
                case 220:
                    var1 = var5;
                case 223:
                    var1 = !var1;
                    if (!var1) {
                        _fun94081_ip = 625;
                        continue _fun94081
                    }
                case 232:
                    var7 = var2.operator;
                    var5 = var7.startsWith;
                    var13 = '>';
                    var5 = var5.bind(var7)(var13);
                    var7 = !var5;
                    if (var7) {
                        _fun94081_ip = 279;
                        continue _fun94081
                    }
                case 259:
                    var8 = var3.operator;
                    var5 = var8.startsWith;
                    var5 = var5.bind(var8)(var13);
                    var7 = !var5;
                case 279:
                    var5 = !var7;
                    if (!var7) {
                        _fun94081_ip = 622;
                        continue _fun94081
                    }
                case 288:
                    var8 = var2.operator;
                    var7 = var8.startsWith;
                    var14 = '<';
                    var7 = var7.bind(var8)(var14);
                    var8 = !var7;
                    if (var8) {
                        _fun94081_ip = 335;
                        continue _fun94081
                    }
                case 315:
                    var9 = var3.operator;
                    var7 = var9.startsWith;
                    var7 = var7.bind(var9)(var14);
                    var8 = !var7;
                case 335:
                    var7 = !var8;
                    if (!var8) {
                        _fun94081_ip = 619;
                        continue _fun94081
                    }
                case 344:
                    var8 = var2.semver;
                    var9 = var8.version;
                    var8 = var3.semver;
                    var8 = var8.version;
                    var9 = var9 !== var8;
                    if (var9) {
                        _fun94081_ip = 398;
                        continue _fun94081
                    }
                case 375:
                    var12 = var2.operator;
                    var11 = var12.includes;
                    var8 = '=';
                    var8 = var11.bind(var12)(var8);
                    var9 = !var8;
                case 398:
                    if (var9) {
                        _fun94081_ip = 424;
                        continue _fun94081
                    }
                case 401:
                    var12 = var3.operator;
                    var11 = var12.includes;
                    var8 = '=';
                    var8 = var11.bind(var12)(var8);
                    var9 = !var8;
                case 424:
                    var8 = !var9;
                    if (!var9) {
                        _fun94081_ip = 616;
                        continue _fun94081
                    }
                case 433:
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var12 = 6;
                    var9 = var9[var12];
                    var17 = var11.bind(var16)(var9);
                    var21 = var2.semver;
                    var19 = var3.semver;
                    var22 = undefined;
                    var20 = var14;
                    var18 = var15;
                    var9 = var22[var17](var21, var20, var19, var18, var17);
                    if (!var9) {
                        _fun94081_ip = 497;
                        continue _fun94081
                    }
                case 480:
                    var17 = var2.operator;
                    var11 = var17.startsWith;
                    var9 = var11.bind(var17)(var13);
                case 497:
                    if (!var9) {
                        _fun94081_ip = 517;
                        continue _fun94081
                    }
                case 500:
                    var17 = var3.operator;
                    var11 = var17.startsWith;
                    var9 = var11.bind(var17)(var14);
                case 517:
                    var11 = !var9;
                    var9 = !var11;
                    if (!var11) {
                        _fun94081_ip = 613;
                        continue _fun94081
                    }
                case 526:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var12];
                    var12 = var11.bind(var16)(var10);
                    var21 = var2.semver;
                    var19 = var3.semver;
                    var22 = undefined;
                    var20 = var13;
                    var18 = var15;
                    var10 = var22[var12](var21, var20, var19, var18, var17);
                    if (!var10) {
                        _fun94081_ip = 587;
                        continue _fun94081
                    }
                case 570:
                    var12 = var2.operator;
                    var11 = var12.startsWith;
                    var10 = var11.bind(var12)(var14);
                case 587:
                    if (!var10) {
                        _fun94081_ip = 607;
                        continue _fun94081
                    }
                case 590:
                    var12 = var3.operator;
                    var11 = var12.startsWith;
                    var10 = var11.bind(var12)(var13);
                case 607:
                    var10 = !var10;
                    var9 = !var10;
                case 613:
                    var8 = var9;
                case 616:
                    var7 = var8;
                case 619:
                    var5 = var7;
                case 622:
                    var1 = var5;
                case 625:
                    var0 = var1;
                case 628:
                    _fun94081_ip = 714;
                    continue _fun94081;
                case 630:
                    var1 = var3.value;
                    var1 = var4 === var1;
                    if (var1) {
                        _fun94081_ip = 711;
                        continue _fun94081
                    }
                case 642:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 7;
                    var7 = var7[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var7);
                    var21 = var2.value;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var22 = var7;
                    var20 = var6;
                    var5 = new var22[var8](var21, var20, var19);
                    var8 = var5 instanceof Object ? var5 : var7;
                    var7 = var8.test;
                    var5 = var3.semver;
                    var1 = var7.bind(var8)(var5);
                case 711:
                    var0 = var1;
                case 714:
                    _fun94081_ip = 799;
                    continue _fun94081;
                case 716:
                    var1 = var2.value;
                    var1 = var4 === var1;
                    if (var1) {
                        _fun94081_ip = 796;
                        continue _fun94081
                    }
                case 728:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 7;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var21 = var3.value;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var22 = var4;
                    var20 = var6;
                    var3 = new var22[var5](var21, var20, var19);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = var4.test;
                    var2 = var2.value;
                    var1 = var3.bind(var4)(var2);
                case 796:
                    var0 = var1;
                case 799:
                    return var0;
            }
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'ANY';
        var0.key = var5;
        var1 = function() {
            var0 = _closure1_slot4;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var2 = var1.bind(var0)();
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12255, 12257, 12258, 12254, 12280, 12283]);