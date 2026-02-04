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
    var1 = function() { // Environment: var1
        var3 = function arg0, arg1() {
            _fun94066: for (var _fun94066_ip = 0;;) switch (_fun94066_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var4 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3, var1);
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var8 = 2;
                    var4 = var4[var8];
                    var6 = var6.bind(var5)(var4);
                    var4 = arg1;
                    var4 = var6.bind(var5)(var4);
                    var1 = var0 instanceof var1;
                    if (var1) {
                        _fun94066_ip = 136;
                        continue _fun94066
                    }
                case 63:
                    var11 = typeof var0;
                    var1 = 'string';
                    var9 = var0;
                    if (!(var1 !== var11)) {
                        _fun94066_ip = 189;
                        continue _fun94066
                    }
                case 77:
                    var1 = global;
                    var7 = var1.TypeError;
                    var1 = var1.HermesInternal;
                    var10 = var1.concat;
                    var6 = 'Invalid version. Must be a string. Got type "';
                    var1 = '".';
                    var17 = var10.bind(var6)(var11, var1);
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var18 = var6;
                    var1 = new var18[var7](var17, var16);
                    var1 = var1 instanceof Object ? var1 : var6;
                    throw var1;
                case 136:
                    var6 = var0.loose;
                    var1 = var4.loose;
                    var1 = !var1;
                    var1 = !var1;
                    if (!(var6 === var1)) {
                        _fun94066_ip = 183;
                        continue _fun94066
                    }
                case 158:
                    var6 = var0.includePrerelease;
                    var1 = var4.includePrerelease;
                    var1 = !var1;
                    var1 = !var1;
                    if (!(var6 !== var1)) {
                        _fun94066_ip = 938;
                        continue _fun94066
                    }
                case 183:
                    var9 = var0.version;
                case 189:
                    var7 = var9.length;
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var6 = 3;
                    var1 = var1[var6];
                    var1 = var10.bind(var5)(var1);
                    var1 = var1.MAX_LENGTH;
                    if (!(!(var7 > var1))) {
                        _fun94066_ip = 856;
                        continue _fun94066
                    }
                case 227:
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 4;
                    var7 = var7[var1];
                    var10 = var10.bind(var5)(var7);
                    var7 = 'SemVer';
                    var7 = var10.bind(var5)(var7, var9, var4);
                    var3.options = var4;
                    var7 = var4.loose;
                    var7 = !var7;
                    var7 = !var7;
                    var3.loose = var7;
                    var7 = var4.includePrerelease;
                    var7 = !var7;
                    var7 = !var7;
                    var3.includePrerelease = var7;
                    var7 = var9.trim;
                    var11 = var7.bind(var9)();
                    var10 = var11.match;
                    var4 = var4.loose;
                    var14 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var7 = 5;
                    var13 = var12[var7];
                    var13 = var14.bind(var5)(var13);
                    var13 = var13.safeRe;
                    var12 = var12[var7];
                    var12 = var14.bind(var5)(var12);
                    var12 = var12.t;
                    if (var4) {
                        _fun94066_ip = 377;
                        continue _fun94066
                    }
                case 365:
                    var4 = var12.FULL;
                    var4 = var13[var4];
                    _fun94066_ip = 387;
                    continue _fun94066;
                case 377:
                    var12 = var12.LOOSE;
                    var4 = var13[var12];
                case 387:
                    var4 = var10.bind(var11)(var4);
                    if (var4) {
                        _fun94066_ip = 447;
                        continue _fun94066
                    }
                case 395:
                    var10 = global;
                    var12 = var10.TypeError;
                    var10 = var10.HermesInternal;
                    var11 = var10.concat;
                    var10 = 'Invalid Version: ';
                    var17 = var11.bind(var10)(var9);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {
                        constructor: {
                            value: var12
                        }
                    });
                    var18 = var11;
                    var10 = new var18[var12](var17, var16);
                    var10 = var10 instanceof Object ? var10 : var11;
                    throw var10;
                case 447:
                    var3.raw = var9;
                    var9 = 1;
                    var9 = var4[var9];
                    var9 = var9 - 0;
                    var3.major = var9;
                    var8 = var4[var8];
                    var8 = var8 - 0;
                    var3.minor = var8;
                    var8 = var4[var6];
                    var8 = var8 - 0;
                    var3.patch = var8;
                    var9 = var3.major;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var6];
                    var8 = var10.bind(var5)(var8);
                    var8 = var8.MAX_SAFE_INTEGER;
                    if (!(!(var9 > var8))) {
                        _fun94066_ip = 820;
                        continue _fun94066
                    }
                case 531:
                    var8 = var3.major;
                    var9 = 0;
                    if (!(!(var8 < var9))) {
                        _fun94066_ip = 820;
                        continue _fun94066
                    }
                case 546:
                    var10 = var3.minor;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var6];
                    var8 = var11.bind(var5)(var8);
                    var8 = var8.MAX_SAFE_INTEGER;
                    if (!(!(var10 > var8))) {
                        _fun94066_ip = 784;
                        continue _fun94066
                    }
                case 582:
                    var8 = var3.minor;
                    if (!(!(var8 < var9))) {
                        _fun94066_ip = 784;
                        continue _fun94066
                    }
                case 595:
                    var10 = var3.patch;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var6];
                    var8 = var11.bind(var5)(var8);
                    var8 = var8.MAX_SAFE_INTEGER;
                    if (!(!(var10 > var8))) {
                        _fun94066_ip = 748;
                        continue _fun94066
                    }
                case 628:
                    var8 = var3.patch;
                    if (!(!(var8 < var9))) {
                        _fun94066_ip = 748;
                        continue _fun94066
                    }
                case 638:
                    var8 = var4[var1];
                    if (var8) {
                        _fun94066_ip = 657;
                        continue _fun94066
                    }
                case 645:
                    var8 = new Array(0);
                    var3.prerelease = var8;
                    _fun94066_ip = 700;
                    continue _fun94066;
                case 657:
                    var9 = var4[var1];
                    var8 = var9.split;
                    var1 = '.';
                    var9 = var8.bind(var9)(var1);
                    var8 = var9.map;
                    var1 = function(arg0) { // Environment: var1
                        _fun94067: for (var _fun94067_ip = 0;;) switch (_fun94067_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = /^[0-9]+$/;
                                var0 = var2.test;
                                var0 = var0.bind(var2)(var1);
                                if (!var0) {
                                    _fun94067_ip = 74;
                                    continue _fun94067
                                }
                            case 30:
                                var0 = var1 - 0;
                                var2 = 0;
                                if (!(var0 >= var2)) {
                                    _fun94067_ip = 74;
                                    continue _fun94067
                                }
                            case 39:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 3;
                                var3 = var3[var2];
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var2 = var2.MAX_SAFE_INTEGER;
                                if (!(!(var0 < var2))) {
                                    _fun94067_ip = 76;
                                    continue _fun94067
                                }
                            case 74:
                                return var1;
                            case 76:
                                return var0;
                        }
                    };
                    var1 = var8.bind(var9)(var1);
                    var3.prerelease = var1;
                case 700:
                    var1 = var4[var7];
                    if (var1) {
                        _fun94066_ip = 713;
                        continue _fun94066
                    }
                case 707:
                    var1 = new Array(0);
                    _fun94066_ip = 731;
                    continue _fun94066;
                case 713:
                    var8 = var4[var7];
                    var7 = var8.split;
                    var4 = '.';
                    var1 = var7.bind(var8)(var4);
                case 731:
                    var3.build = var1;
                    var1 = var3.format;
                    var1 = var1.bind(var3)();
                    return var5;
                case 748:
                    var1 = global;
                    var4 = var1.TypeError;
                    var1 = var4.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var17 = 'Invalid patch version';
                    var18 = var3;
                    var1 = new var18[var4](var17, var16);
                    var1 = var1 instanceof Object ? var1 : var3;
                    throw var1;
                case 784:
                    var1 = global;
                    var4 = var1.TypeError;
                    var1 = var4.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var17 = 'Invalid minor version';
                    var18 = var3;
                    var1 = new var18[var4](var17, var16);
                    var1 = var1 instanceof Object ? var1 : var3;
                    throw var1;
                case 820:
                    var1 = global;
                    var4 = var1.TypeError;
                    var1 = var4.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var17 = 'Invalid major version';
                    var18 = var3;
                    var1 = new var18[var4](var17, var16);
                    var1 = var1 instanceof Object ? var1 : var3;
                    throw var1;
                case 856:
                    var1 = global;
                    var3 = var1.TypeError;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var5 = var2.MAX_LENGTH;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var2 = 'version is longer than ';
                    var1 = ' characters';
                    var17 = var4.bind(var2)(var5, var1);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var18 = var2;
                    var1 = new var18[var3](var17, var16);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 938:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot3;
        var0 = {};
        var1 = 'format';
        var0.key = var1;
        var1 = function() {
            _fun94068: for (var _fun94068_ip = 0;;) switch (_fun94068_ip) {
                case 0:
                    var0 = this;
                    var12 = var0.major;
                    var10 = var0.minor;
                    var8 = var0.patch;
                    var1 = global;
                    var2 = var1.HermesInternal;
                    var3 = var2.concat;
                    var13 = '';
                    var5 = '.';
                    var11 = var5;
                    var9 = var5;
                    var2 = var13[var3](var12, var11, var10, var9, var8, var7);
                    var0.version = var2;
                    var2 = var0.prerelease;
                    var2 = var2.length;
                    if (!var2) {
                        _fun94068_ip = 124;
                        continue _fun94068
                    }
                case 72:
                    var2 = var0.version;
                    var4 = var0.prerelease;
                    var3 = var4.join;
                    var4 = var3.bind(var4)(var5);
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var1 = '-';
                    var1 = var3.bind(var1)(var4);
                    var1 = var2 + var1;
                    var0.version = var1;
                case 124:
                    var0 = var0.version;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'toString';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.version;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'compare';
        var0.key = var5;
        var5 = function arg0() {
            _fun94070: for (var _fun94070_ip = 0;;) switch (_fun94070_ip) {
                case 0:
                    var5 = arg0;
                    var4 = this;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 4;
                    var0 = var2[var0];
                    var6 = undefined;
                    var3 = var1.bind(var6)(var0);
                    var9 = var4.version;
                    var8 = var4.options;
                    var10 = 'SemVer.compare';
                    var11 = undefined;
                    var7 = var5;
                    var0 = var11[var3](var10, var9, var8, var7, var6);
                    var1 = _closure2_slot0;
                    var1 = var5 instanceof var1;
                    var3 = var5;
                    if (var1) {
                        _fun94070_ip = 133;
                        continue _fun94070
                    }
                case 74:
                    var2 = 'string';
                    var1 = typeof var5;
                    if (!(var2 === var1)) {
                        _fun94070_ip = 95;
                        continue _fun94070
                    }
                case 85:
                    var1 = var4.version;
                    if (!(var5 !== var1)) {
                        _fun94070_ip = 129;
                        continue _fun94070
                    }
                case 95:
                    var2 = _closure2_slot0;
                    var9 = var4.options;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = var1;
                    var10 = var5;
                    var0 = new var11[var2](var10, var9, var8);
                    var3 = var0 instanceof Object ? var0 : var1;
                    _fun94070_ip = 133;
                    continue _fun94070;
                case 129:
                    var0 = 0;
                    return var0;
                case 133:
                    var2 = var3.version;
                    var1 = var4.version;
                    var0 = 0;
                    if (!(var2 !== var1)) {
                        _fun94070_ip = 179;
                        continue _fun94070
                    }
                case 151:
                    var1 = var4.compareMain;
                    var1 = var1.bind(var4)(var3);
                    if (var1) {
                        _fun94070_ip = 176;
                        continue _fun94070
                    }
                case 165:
                    var2 = var4.comparePre;
                    var1 = var2.bind(var4)(var3);
                case 176:
                    var0 = var1;
                case 179:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'compareMain';
        var0.key = var5;
        var5 = function arg0() {
            _fun94071: for (var _fun94071_ip = 0;;) switch (_fun94071_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var1 = _closure2_slot0;
                    var3 = var5 instanceof var1;
                    var1 = var5;
                    if (var3) {
                        _fun94071_ip = 55;
                        continue _fun94071
                    }
                case 23:
                    var4 = _closure2_slot0;
                    var10 = var2.options;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var12 = var3;
                    var11 = var5;
                    var0 = new var12[var4](var11, var10, var9);
                    var1 = var0 instanceof Object ? var0 : var3;
                case 55:
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var6 = 6;
                    var0 = var0[var6];
                    var5 = undefined;
                    var8 = var4.bind(var5)(var0);
                    var7 = var8.compareIdentifiers;
                    var4 = var2.major;
                    var0 = var1.major;
                    var0 = var7.bind(var8)(var4, var0);
                    if (var0) {
                        _fun94071_ip = 148;
                        continue _fun94071
                    }
                case 107:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var9 = var7.bind(var5)(var4);
                    var8 = var9.compareIdentifiers;
                    var7 = var2.minor;
                    var4 = var1.minor;
                    var0 = var8.bind(var9)(var7, var4);
                case 148:
                    if (var0) {
                        _fun94071_ip = 192;
                        continue _fun94071
                    }
                case 151:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var6];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.compareIdentifiers;
                    var2 = var2.patch;
                    var1 = var1.patch;
                    var0 = var3.bind(var4)(var2, var1);
                case 192:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'comparePre';
        var0.key = var5;
        var5 = function arg0() {
            _fun94072: for (var _fun94072_ip = 0;;) switch (_fun94072_ip) {
                case 0:
                    var3 = arg0;
                    var7 = this;
                    var1 = _closure2_slot0;
                    var1 = var3 instanceof var1;
                    var6 = var3;
                    if (var1) {
                        _fun94072_ip = 55;
                        continue _fun94072
                    }
                case 23:
                    var2 = _closure2_slot0;
                    var13 = var7.options;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var15 = var1;
                    var14 = var3;
                    var0 = new var15[var2](var14, var13, var12);
                    var6 = var0 instanceof Object ? var0 : var1;
                case 55:
                    var0 = var7.prerelease;
                    var0 = var0.length;
                    if (!var0) {
                        _fun94072_ip = 91;
                        continue _fun94072
                    }
                case 69:
                    var0 = var6.prerelease;
                    var0 = var0.length;
                    if (var0) {
                        _fun94072_ip = 91;
                        continue _fun94072
                    }
                case 83:
                    var0 = -1;
                    return var0;
                case 91:
                    var0 = var7.prerelease;
                    var0 = var0.length;
                    if (var0) {
                        _fun94072_ip = 124;
                        continue _fun94072
                    }
                case 105:
                    var0 = var6.prerelease;
                    var0 = var0.length;
                    if (!var0) {
                        _fun94072_ip = 124;
                        continue _fun94072
                    }
                case 119:
                    var0 = 1;
                    return var0;
                case 124:
                    var0 = var7.prerelease;
                    var1 = var0.length;
                    var0 = 0;
                    var2 = 0;
                    if (var1) {
                        _fun94072_ip = 160;
                        continue _fun94072
                    }
                case 142:
                    var1 = var6.prerelease;
                    var1 = var1.length;
                    var2 = 0;
                    if (var1) {
                        _fun94072_ip = 160;
                        continue _fun94072
                    }
                case 158:
                    return var0;
                case 160:
                    var1 = var7.prerelease;
                    var4 = var1[var2];
                    var1 = var6.prerelease;
                    var3 = var1[var2];
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 4;
                    var8 = var8[var5];
                    var5 = undefined;
                    var9 = var9.bind(var5)(var8);
                    var14 = 'prerelease compare';
                    var15 = undefined;
                    var13 = var2;
                    var12 = var4;
                    var11 = var3;
                    var8 = var15[var9](var14, var13, var12, var11, var10);
                    var9 = var5 === var4;
                    var8 = var2;
                    if (!var9) {
                        _fun94072_ip = 240;
                        continue _fun94072
                    }
                case 236:
                    if (!(var5 !== var3)) {
                        _fun94072_ip = 306;
                        continue _fun94072
                    }
                case 240:
                    if (!(var5 !== var3)) {
                        _fun94072_ip = 301;
                        continue _fun94072
                    }
                case 244:
                    if (var9) {
                        _fun94072_ip = 293;
                        continue _fun94072
                    }
                case 247:
                    if (!(var4 === var3)) {
                        _fun94072_ip = 259;
                        continue _fun94072
                    }
                case 251:
                    var2 = var8 + 1;
                    if (var2) {
                        _fun94072_ip = 160;
                        continue _fun94072
                    }
                case 257:
                    return var5;
                case 259:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 6;
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.compareIdentifiers;
                    var1 = var1.bind(var2)(var4, var3);
                    return var1;
                case 293:
                    var1 = -1;
                    return var1;
                case 301:
                    var1 = 1;
                    return var1;
                case 306:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'compareBuild';
        var0.key = var5;
        var5 = function arg0() {
            _fun94073: for (var _fun94073_ip = 0;;) switch (_fun94073_ip) {
                case 0:
                    var3 = arg0;
                    var9 = this;
                    var1 = _closure2_slot0;
                    var1 = var3 instanceof var1;
                    var8 = var3;
                    if (var1) {
                        _fun94073_ip = 55;
                        continue _fun94073
                    }
                case 23:
                    var2 = _closure2_slot0;
                    var15 = var9.options;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var17 = var1;
                    var16 = var3;
                    var0 = new var17[var2](var16, var15, var14);
                    var8 = var0 instanceof Object ? var0 : var1;
                case 55:
                    var0 = 0;
                    var5 = undefined;
                    var7 = 4;
                    var6 = 'build compare';
                    var2 = 0;
                case 73:
                    var3 = var9.build;
                    var4 = var3[var2];
                    var3 = var8.build;
                    var3 = var3[var2];
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var7];
                    var10 = var11.bind(var5)(var10);
                    var17 = undefined;
                    var16 = var6;
                    var15 = var2;
                    var14 = var4;
                    var13 = var3;
                    var10 = var17[var10](var16, var15, var14, var13, var12);
                    var11 = var5 === var4;
                    var10 = var2;
                    if (!var11) {
                        _fun94073_ip = 142;
                        continue _fun94073
                    }
                case 138:
                    if (!(var5 !== var3)) {
                        _fun94073_ip = 208;
                        continue _fun94073
                    }
                case 142:
                    if (!(var5 !== var3)) {
                        _fun94073_ip = 203;
                        continue _fun94073
                    }
                case 146:
                    if (var11) {
                        _fun94073_ip = 195;
                        continue _fun94073
                    }
                case 149:
                    if (!(var4 === var3)) {
                        _fun94073_ip = 161;
                        continue _fun94073
                    }
                case 153:
                    var2 = var10 + 1;
                    if (var2) {
                        _fun94073_ip = 73;
                        continue _fun94073
                    }
                case 159:
                    return var5;
                case 161:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 6;
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.compareIdentifiers;
                    var1 = var1.bind(var2)(var4, var3);
                    return var1;
                case 195:
                    var1 = -1;
                    return var1;
                case 203:
                    var1 = 1;
                    return var1;
                case 208:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'inc';
        var0.key = var5;
        var4 = function arg0, arg1, arg2() {
            _fun94074: for (var _fun94074_ip = 0;;) switch (_fun94074_ip) {
                case 0:
                    var6 = arg0;
                    var4 = arg1;
                    var3 = arg2;
                    var0 = this;
                    var1 = 'premajor';
                    if (!(var1 !== var6)) {
                        _fun94074_ip = 928;
                        continue _fun94074
                    }
                case 25:
                    var1 = 'preminor';
                    if (!(var1 !== var6)) {
                        _fun94074_ip = 874;
                        continue _fun94074
                    }
                case 38:
                    var1 = 'prepatch';
                    if (!(var1 !== var6)) {
                        _fun94074_ip = 824;
                        continue _fun94074
                    }
                case 51:
                    var1 = 'prerelease';
                    if (!(var1 !== var6)) {
                        _fun94074_ip = 768;
                        continue _fun94074
                    }
                case 62:
                    var1 = 'major';
                    if (!(var1 !== var6)) {
                        _fun94074_ip = 680;
                        continue _fun94074
                    }
                case 73:
                    var1 = 'minor';
                    if (!(var1 !== var6)) {
                        _fun94074_ip = 611;
                        continue _fun94074
                    }
                case 84:
                    var1 = 'patch';
                    if (!(var1 !== var6)) {
                        _fun94074_ip = 564;
                        continue _fun94074
                    }
                case 95:
                    var1 = 'pre';
                    if (!(var1 !== var6)) {
                        _fun94074_ip = 155;
                        continue _fun94074
                    }
                case 103:
                    var1 = global;
                    var5 = var1.Error;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'invalid increment argument: ';
                    var16 = var2.bind(var1)(var6);
                    var2 = var5.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var5
                        }
                    });
                    var17 = var2;
                    var1 = new var17[var5](var16, var15);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 155:
                    var2 = global;
                    var1 = var2.Number;
                    var6 = undefined;
                    var1 = var1.bind(var6)(var3);
                    var7 = 0;
                    var5 = 0;
                    if (!var1) {
                        _fun94074_ip = 180;
                        continue _fun94074
                    }
                case 177:
                    var5 = 1;
                case 180:
                    if (var4) {
                        _fun94074_ip = 223;
                        continue _fun94074
                    }
                case 183:
                    var1 = false;
                    if (!(var1 === var3)) {
                        _fun94074_ip = 223;
                        continue _fun94074
                    }
                case 189:
                    var9 = var2.Error;
                    var1 = var9.prototype;
                    var8 = Object.create(var1, {
                        constructor: {
                            value: var9
                        }
                    });
                    var16 = 'invalid increment argument: identifier is empty';
                    var17 = var8;
                    var1 = new var17[var9](var16, var15);
                    var1 = var1 instanceof Object ? var1 : var8;
                    throw var1;
                case 223:
                    var1 = var0.prerelease;
                    var1 = var1.length;
                    if (!(var7 !== var1)) {
                        _fun94074_ip = 414;
                        continue _fun94074
                    }
                case 241:
                    var1 = var0.prerelease;
                    var1 = var1.length;
                    var1 = var1 - 1;
                    var10 = -2;
                    var9 = 'number';
                    var8 = var1;
                    if (!(var8 >= var7)) {
                        _fun94074_ip = 322;
                        continue _fun94074
                    }
                case 272:
                    var11 = var0.prerelease;
                    var11 = var11[var1];
                    var12 = typeof var11;
                    var11 = var1;
                    if (!(var9 === var12)) {
                        _fun94074_ip = 312;
                        continue _fun94074
                    }
                case 292:
                    var13 = var0.prerelease;
                    var12 = var13[var1];
                    var12 = var12 + 1;
                    var13[var1] = var12;
                    var11 = var10;
                case 312:
                    var1 = var11 - 1;
                    var8 = var1;
                    if (var8 >= var7) {
                        _fun94074_ip = 272;
                        continue _fun94074
                    }
                case 322:
                    var1 = -1;
                    if (!(var1 === var8)) {
                        _fun94074_ip = 428;
                        continue _fun94074
                    }
                case 332:
                    var9 = var0.prerelease;
                    var8 = var9.join;
                    var1 = '.';
                    var1 = var8.bind(var9)(var1);
                    if (!(var4 === var1)) {
                        _fun94074_ip = 362;
                        continue _fun94074
                    }
                case 356:
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun94074_ip = 380;
                        continue _fun94074
                    }
                case 362:
                    var8 = var0.prerelease;
                    var1 = var8.push;
                    var1 = var1.bind(var8)(var5);
                    _fun94074_ip = 428;
                    continue _fun94074;
                case 380:
                    var9 = var2.Error;
                    var1 = var9.prototype;
                    var8 = Object.create(var1, {
                        constructor: {
                            value: var9
                        }
                    });
                    var16 = 'invalid increment argument: identifier already exists';
                    var17 = var8;
                    var1 = new var17[var9](var16, var15);
                    var1 = var1 instanceof Object ? var1 : var8;
                    throw var1;
                case 414:
                    var1 = new Array(1);
                    var1[0] = var5;
                    var0.prerelease = var1;
                case 428:
                    if (!var4) {
                        _fun94074_ip = 986;
                        continue _fun94074
                    }
                case 434:
                    var1 = new Array(2);
                    var1[0] = var4;
                    var1[1] = var5;
                    var5 = false;
                    if (!(var5 === var3)) {
                        _fun94074_ip = 463;
                        continue _fun94074
                    }
                case 452:
                    var5 = new Array(1);
                    var5[0] = var4;
                    var1 = var5;
                case 463:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var5 = 6;
                    var5 = var9[var5];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.compareIdentifiers;
                    var5 = var0.prerelease;
                    var5 = var5[var7];
                    var5 = var8.bind(var9)(var5, var4);
                    if (!(var7 !== var5)) {
                        _fun94074_ip = 523;
                        continue _fun94074
                    }
                case 512:
                    var0.prerelease = var1;
                    _fun94074_ip = 986;
                    continue _fun94074;
                case 523:
                    var5 = var2.isNaN;
                    var7 = var0.prerelease;
                    var2 = 1;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    if (!var2) {
                        _fun94074_ip = 986;
                        continue _fun94074
                    }
                case 553:
                    var0.prerelease = var1;
                    _fun94074_ip = 986;
                    continue _fun94074;
                case 564:
                    var1 = var0.prerelease;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun94074_ip = 596;
                        continue _fun94074
                    }
                case 581:
                    var1 = var0.patch;
                    var1 = var1 + 1;
                    var0.patch = var1;
                case 596:
                    var1 = new Array(0);
                    var0.prerelease = var1;
                    _fun94074_ip = 986;
                    continue _fun94074;
                case 611:
                    var2 = var0.patch;
                    var1 = 0;
                    var2 = var1 === var2;
                    if (!var2) {
                        _fun94074_ip = 641;
                        continue _fun94074
                    }
                case 626:
                    var5 = var0.prerelease;
                    var5 = var5.length;
                    var2 = var1 !== var5;
                case 641:
                    if (var2) {
                        _fun94074_ip = 659;
                        continue _fun94074
                    }
                case 644:
                    var2 = var0.minor;
                    var2 = var2 + 1;
                    var0.minor = var2;
                case 659:
                    var0.patch = var1;
                    var1 = new Array(0);
                    var0.prerelease = var1;
                    _fun94074_ip = 986;
                    continue _fun94074;
                case 680:
                    var2 = var0.minor;
                    var1 = 0;
                    var2 = var1 === var2;
                    if (!var2) {
                        _fun94074_ip = 705;
                        continue _fun94074
                    }
                case 695:
                    var5 = var0.patch;
                    var2 = var1 === var5;
                case 705:
                    if (!var2) {
                        _fun94074_ip = 723;
                        continue _fun94074
                    }
                case 708:
                    var5 = var0.prerelease;
                    var5 = var5.length;
                    var2 = var1 !== var5;
                case 723:
                    if (var2) {
                        _fun94074_ip = 741;
                        continue _fun94074
                    }
                case 726:
                    var2 = var0.major;
                    var2 = var2 + 1;
                    var0.major = var2;
                case 741:
                    var0.minor = var1;
                    var0.patch = var1;
                    var1 = new Array(0);
                    var0.prerelease = var1;
                    _fun94074_ip = 986;
                    continue _fun94074;
                case 768:
                    var1 = var0.prerelease;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun94074_ip = 802;
                        continue _fun94074
                    }
                case 785:
                    var2 = var0.inc;
                    var1 = 'patch';
                    var1 = var2.bind(var0)(var1, var4, var3);
                case 802:
                    var2 = var0.inc;
                    var1 = 'pre';
                    var1 = var2.bind(var0)(var1, var4, var3);
                    _fun94074_ip = 986;
                    continue _fun94074;
                case 824:
                    var2 = var0.prerelease;
                    var1 = 0;
                    var2.length = var1;
                    var2 = var0.inc;
                    var1 = 'patch';
                    var1 = var2.bind(var0)(var1, var4, var3);
                    var2 = var0.inc;
                    var1 = 'pre';
                    var1 = var2.bind(var0)(var1, var4, var3);
                    _fun94074_ip = 986;
                    continue _fun94074;
                case 874:
                    var2 = var0.prerelease;
                    var1 = 0;
                    var2.length = var1;
                    var0.patch = var1;
                    var1 = var0.minor;
                    var1 = var1 + 1;
                    var0.minor = var1;
                    var2 = var0.inc;
                    var1 = 'pre';
                    var1 = var2.bind(var0)(var1, var4, var3);
                    _fun94074_ip = 986;
                    continue _fun94074;
                case 928:
                    var2 = var0.prerelease;
                    var1 = 0;
                    var2.length = var1;
                    var0.patch = var1;
                    var0.minor = var1;
                    var1 = var0.major;
                    var1 = var1 + 1;
                    var0.major = var1;
                    var2 = var0.inc;
                    var1 = 'pre';
                    var1 = var2.bind(var0)(var1, var4, var3);
                case 986:
                    var1 = var0.format;
                    var1 = var1.bind(var0)();
                    var0.raw = var1;
                    var1 = var0.build;
                    var1 = var1.length;
                    if (!var1) {
                        _fun94074_ip = 1072;
                        continue _fun94074
                    }
                case 1015:
                    var2 = var0.raw;
                    var4 = var0.build;
                    var3 = var4.join;
                    var1 = '.';
                    var4 = var3.bind(var4)(var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var1 = '+';
                    var1 = var3.bind(var1)(var4);
                    var1 = var2 + var1;
                    var0.raw = var1;
                case 1072:
                    return var0;
            }
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var2 = var1.bind(var0)();
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12305, 12306, 12307, 12308, 12309]);