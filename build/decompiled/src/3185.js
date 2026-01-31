// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var5 = function(arg0, arg1) { // Original name: parse, environment: var1
        _fun27832: for (var _fun27832_ip = 0;;) switch (_fun27832_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                var0 = new Array(0);
                var38 = var1;
                if (!var38) {
                    _fun27832_ip = 22;
                    continue _fun27832
                }
            case 16:
                var38 = var1.delimiter;
            case 22:
                if (var38) {
                    _fun27832_ip = 29;
                    continue _fun27832
                }
            case 25:
                var38 = '/';
            case 29:
                var2 = _closure1_slot2;
                var1 = var2.exec;
                var1 = var1.bind(var2)(var5);
                var36 = null;
                var39 = var36 != var1;
                var35 = 0;
                var34 = '';
                var33 = undefined;
                var32 = 1;
                var31 = '[^';
                var30 = ']+?';
                var29 = '.*';
                var28 = 2;
                var27 = '*';
                var26 = '?';
                var25 = '+';
                var24 = 3;
                var23 = 4;
                var22 = 5;
                var21 = 6;
                var20 = 7;
                var19 = var1;
                var18 = 0;
                var17 = 0;
                var16 = var34;
                var15 = undefined;
                var14 = undefined;
                var13 = undefined;
                var12 = undefined;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var2 = undefined;
                var1 = undefined;
                var4 = 0;
                var3 = var16;
                if (!var39) {
                    _fun27832_ip = 549;
                    continue _fun27832
                }
            case 157:
                var40 = var19[var35];
                var39 = var19[var32];
                var41 = var19.index;
                var42 = var5.slice;
                var42 = var42.bind(var5)(var17, var41);
                var55 = var16 + var42;
                var40 = var40.length;
                var41 = var41 + var40;
                if (var39) {
                    _fun27832_ip = 429;
                    continue _fun27832
                }
            case 200:
                var53 = var5[var41];
                var52 = var19[var28];
                var51 = var19[var24];
                var50 = var19[var23];
                var49 = var19[var22];
                var48 = var19[var21];
                var47 = var19[var20];
                var40 = var55;
                if (!var40) {
                    _fun27832_ip = 247;
                    continue _fun27832
                }
            case 234:
                var42 = var0.push;
                var42 = var42.bind(var0)(var55);
                var40 = var34;
            case 247:
                var46 = var36 != var52;
                if (!var46) {
                    _fun27832_ip = 258;
                    continue _fun27832
                }
            case 254:
                var46 = var36 != var53;
            case 258:
                if (!var46) {
                    _fun27832_ip = 265;
                    continue _fun27832
                }
            case 261:
                var46 = var53 !== var52;
            case 265:
                var45 = var25 === var48;
                if (var45) {
                    _fun27832_ip = 276;
                    continue _fun27832
                }
            case 272:
                var45 = var27 === var48;
            case 276:
                var44 = var26 === var48;
                if (var44) {
                    _fun27832_ip = 287;
                    continue _fun27832
                }
            case 283:
                var44 = var27 === var48;
            case 287:
                var43 = var19[var28];
                if (var43) {
                    _fun27832_ip = 297;
                    continue _fun27832
                }
            case 294:
                var43 = var38;
            case 297:
                var42 = var50;
                if (var50) {
                    _fun27832_ip = 306;
                    continue _fun27832
                }
            case 303:
                var42 = var49;
            case 306:
                var57 = var0.push;
                var56 = {};
                var58 = var51;
                var54 = var18;
                if (var51) {
                    _fun27832_ip = 331;
                    continue _fun27832
                }
            case 322:
                var60 = parseFloat(var18);
                var54 = var60 + 1;
                var58 = var60;
            case 331:
                var56.name = var58;
                var58 = var52;
                if (var52) {
                    _fun27832_ip = 344;
                    continue _fun27832
                }
            case 341:
                var58 = var34;
            case 344:
                var56.prefix = var58;
                var56.delimiter = var43;
                var56.optional = var44;
                var56.repeat = var45;
                var56.partial = var46;
                var58 = !var47;
                var58 = !var58;
                var56.asterisk = var58;
                if (var42) {
                    _fun27832_ip = 408;
                    continue _fun27832
                }
            case 383:
                var58 = var29;
                if (var47) {
                    _fun27832_ip = 406;
                    continue _fun27832
                }
            case 389:
                var59 = _closure1_slot6;
                var59 = var59.bind(var33)(var43);
                var59 = var31 + var59;
                var58 = var59 + var30;
            case 406:
                _fun27832_ip = 417;
                continue _fun27832;
            case 408:
                var59 = _closure1_slot7;
                var58 = var59.bind(var33)(var42);
            case 417:
                var56.pattern = var58;
                var56 = var57.bind(var0)(var56);
                _fun27832_ip = 476;
                continue _fun27832;
            case 429:
                var39 = var39[var32];
                var40 = var55 + var39;
                var54 = var18;
                var53 = var15;
                var52 = var14;
                var51 = var13;
                var50 = var12;
                var49 = var11;
                var48 = var10;
                var47 = var9;
                var46 = var8;
                var45 = var7;
                var44 = var6;
                var43 = var2;
                var42 = var1;
            case 476:
                var55 = _closure1_slot2;
                var39 = var55.exec;
                var19 = var39.bind(var55)(var5);
                var18 = var54;
                var16 = var40;
                var15 = var53;
                var14 = var52;
                var13 = var51;
                var12 = var50;
                var11 = var49;
                var10 = var48;
                var9 = var47;
                var8 = var46;
                var7 = var45;
                var6 = var44;
                var2 = var43;
                var1 = var42;
                var17 = var41;
                var4 = var17;
                var3 = var16;
                if (var36 != var19) {
                    _fun27832_ip = 157;
                    continue _fun27832
                }
            case 549:
                var1 = var5.length;
                var2 = var3;
                if (!(var4 < var1)) {
                    _fun27832_ip = 576;
                    continue _fun27832
                }
            case 561:
                var1 = var5.substr;
                var1 = var1.bind(var5)(var4);
                var2 = var3 + var1;
            case 576:
                if (!var2) {
                    _fun27832_ip = 589;
                    continue _fun27832
                }
            case 579:
                var1 = var0.push;
                var1 = var1.bind(var0)(var2);
            case 589:
                return var0;
        }
    };
    var _closure1_slot3 = var5;
    var2 = function(arg0) { // Original name: encodeURIComponentPretty, environment: var1
        var0 = global;
        var2 = var0.encodeURI;
        var1 = undefined;
        var0 = arg0;
        var3 = var2.bind(var1)(var0);
        var2 = var3.replace;
        var1 = /[\\/?#]/g;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.charCodeAt;
            var0 = 0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.toString;
            var0 = 16;
            var1 = var1.bind(var2)(var0);
            var0 = var1.toUpperCase;
            var1 = var0.bind(var1)();
            var0 = '%';
            var0 = var0 + var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot4 = var2;
    var4 = function(arg0) { // Original name: tokensToFunction, environment: var1
        _fun27835: for (var _fun27835_ip = 0;;) switch (_fun27835_ip) {
            case 0:
                var8 = arg0;
                var _closure2_slot0 = var8;
                var7 = global;
                var3 = var7.Array;
                var11 = var8.length;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var6 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot1 = var6;
                var1 = var8.length;
                var5 = 0;
                var1 = var5 < var1;
                var4 = '^(?:';
                var3 = ')$';
                var2 = 'object';
                if (!var1) {
                    _fun27835_ip = 147;
                    continue _fun27835
                }
            case 76:
                var1 = var8[var5];
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun27835_ip = 135;
                    continue _fun27835
                }
            case 87:
                var10 = var7.RegExp;
                var1 = var8[var5];
                var1 = var1.pattern;
                var1 = var4 + var1;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var11 = var1 + var3;
                var12 = var9;
                var1 = new var12[var10](var11, var10);
                var1 = var1 instanceof Object ? var1 : var9;
                var6[var5] = var1;
            case 135:
                var5 = var5 + 1;
                var1 = var8.length;
                if (var5 < var1) {
                    _fun27835_ip = 76;
                    continue _fun27835
                }
            case 147:
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun27836: for (var _fun27836_ip = 0;;) switch (_fun27836_ip) {
                        case 0:
                            var15 = arg0;
                            var0 = arg1;
                            if (var15) {
                                _fun27836_ip = 13;
                                continue _fun27836
                            }
                        case 11:
                            var15 = {};
                        case 13:
                            if (var0) {
                                _fun27836_ip = 18;
                                continue _fun27836
                            }
                        case 16:
                            var0 = {};
                        case 18:
                            var0 = var0.pretty;
                            if (var0) {
                                _fun27836_ip = 37;
                                continue _fun27836
                            }
                        case 27:
                            var0 = global;
                            var14 = var0.encodeURIComponent;
                            _fun27836_ip = 44;
                            continue _fun27836;
                        case 37:
                            var14 = _closure1_slot4;
                        case 44:
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            var12 = 0;
                            var1 = var12 < var0;
                            var6 = '';
                            var11 = undefined;
                            var10 = global;
                            var8 = null;
                            var7 = 'string';
                            var5 = 0;
                            var4 = undefined;
                            var3 = undefined;
                            var2 = undefined;
                            var0 = var6;
                            if (!var1) {
                                _fun27836_ip = 895;
                                continue _fun27836
                            }
                        case 96:
                            var1 = _closure2_slot0;
                            var20 = var1[var5];
                            var1 = typeof var20;
                            if (!(var7 === var1)) {
                                _fun27836_ip = 126;
                                continue _fun27836
                            }
                        case 111:
                            var17 = var6 + var20;
                            var19 = var4;
                            var18 = var2;
                            _fun27836_ip = 864;
                            continue _fun27836;
                        case 126:
                            var1 = var20.name;
                            var1 = var15[var1];
                            if (!(var8 != var1)) {
                                _fun27836_ip = 762;
                                continue _fun27836
                            }
                        case 142:
                            var22 = _closure1_slot0;
                            var21 = _closure1_slot1;
                            var21 = var21[var12];
                            var21 = var22.bind(var11)(var21);
                            var21 = var21.bind(var11)(var1);
                            if (var21) {
                                _fun27836_ip = 361;
                                continue _fun27836
                            }
                        case 170:
                            var21 = var20.asterisk;
                            if (var21) {
                                _fun27836_ip = 186;
                                continue _fun27836
                            }
                        case 179:
                            var21 = var14.bind(var11)(var1);
                            _fun27836_ip = 227;
                            continue _fun27836;
                        case 186:
                            var22 = var10.encodeURI;
                            var25 = var22.bind(var11)(var1);
                            var24 = var25.replace;
                            var23 = /[?#]/g;
                            var22 = function(arg0) { // Environment: var16
                                var2 = arg0;
                                var1 = var2.charCodeAt;
                                var0 = 0;
                                var2 = var1.bind(var2)(var0);
                                var1 = var2.toString;
                                var0 = 16;
                                var1 = var1.bind(var2)(var0);
                                var0 = var1.toUpperCase;
                                var1 = var0.bind(var1)();
                                var0 = '%';
                                var0 = var0 + var1;
                                return var0;
                            };
                            var21 = var24.bind(var25)(var23, var22);
                        case 227:
                            var22 = _closure2_slot1;
                            var23 = var22[var5];
                            var22 = var23.test;
                            var22 = var22.bind(var23)(var21);
                            if (var22) {
                                _fun27836_ip = 333;
                                continue _fun27836
                            }
                        case 248:
                            var24 = var10.TypeError;
                            var23 = var20.name;
                            var22 = 'Expected "';
                            var25 = var22 + var23;
                            var23 = var20.pattern;
                            var22 = '" to match "';
                            var22 = var25 + var22;
                            var23 = var22 + var23;
                            var22 = '", but received "';
                            var22 = var23 + var22;
                            var25 = var22 + var21;
                            var22 = var24.prototype;
                            var23 = Object.create(var22, {
                                constructor: {
                                    value: var24
                                }
                            });
                            var22 = '"';
                            var29 = var25 + var22;
                            var30 = var23;
                            var22 = new var30[var24](var29, var28);
                            var22 = var22 instanceof Object ? var22 : var23;
                            throw var22;
                        case 333:
                            var22 = var20.prefix;
                            var22 = var22 + var21;
                            var17 = var6 + var22;
                            var19 = var21;
                            var3 = var1;
                            var18 = var2;
                            _fun27836_ip = 864;
                            continue _fun27836;
                        case 361:
                            var21 = var20.repeat;
                            if (var21) {
                                _fun27836_ip = 452;
                                continue _fun27836
                            }
                        case 370:
                            var23 = var10.TypeError;
                            var22 = var20.name;
                            var21 = 'Expected "';
                            var24 = var21 + var22;
                            var22 = var10.JSON;
                            var21 = var22.stringify;
                            var22 = var21.bind(var22)(var1);
                            var21 = '" to not repeat, but received `';
                            var21 = var24 + var21;
                            var24 = var21 + var22;
                            var21 = var23.prototype;
                            var22 = Object.create(var21, {
                                constructor: {
                                    value: var23
                                }
                            });
                            var21 = '`';
                            var29 = var24 + var21;
                            var30 = var22;
                            var21 = new var30[var23](var29, var28);
                            var21 = var21 instanceof Object ? var21 : var22;
                            throw var21;
                        case 452:
                            var21 = var1.length;
                            if (!(var12 !== var21)) {
                                _fun27836_ip = 685;
                                continue _fun27836
                            }
                        case 464:
                            var21 = var1.length;
                            var21 = var12 < var21;
                            var23 = var6;
                            var22 = 0;
                            var17 = var23;
                            var19 = var4;
                            var3 = var1;
                            var18 = 0;
                            if (!var21) {
                                _fun27836_ip = 864;
                                continue _fun27836
                            }
                        case 495:
                            var21 = var1[var22];
                            var25 = var14.bind(var11)(var21);
                            var21 = _closure2_slot1;
                            var24 = var21[var5];
                            var21 = var24.test;
                            var21 = var21.bind(var24)(var25);
                            if (var21) {
                                _fun27836_ip = 627;
                                continue _fun27836
                            }
                        case 525:
                            var26 = var10.TypeError;
                            var24 = var20.name;
                            var21 = 'Expected all "';
                            var27 = var21 + var24;
                            var24 = var20.pattern;
                            var21 = '" to match "';
                            var21 = var27 + var21;
                            var27 = var21 + var24;
                            var24 = var10.JSON;
                            var21 = var24.stringify;
                            var24 = var21.bind(var24)(var25);
                            var21 = '", but received `';
                            var21 = var27 + var21;
                            var27 = var21 + var24;
                            var21 = var26.prototype;
                            var24 = Object.create(var21, {
                                constructor: {
                                    value: var26
                                }
                            });
                            var21 = '`';
                            var29 = var27 + var21;
                            var30 = var24;
                            var21 = new var30[var26](var29, var28);
                            var21 = var21 instanceof Object ? var21 : var24;
                            throw var21;
                        case 627:
                            if (!(var12 !== var22)) {
                                _fun27836_ip = 639;
                                continue _fun27836
                            }
                        case 631:
                            var21 = var20.delimiter;
                            _fun27836_ip = 645;
                            continue _fun27836;
                        case 639:
                            var21 = var20.prefix;
                        case 645:
                            var21 = var21 + var25;
                            var23 = var23 + var21;
                            var22 = var22 + 1;
                            var21 = var1.length;
                            var17 = var23;
                            var19 = var25;
                            var3 = var1;
                            var18 = var22;
                            if (var18 < var21) {
                                _fun27836_ip = 495;
                                continue _fun27836
                            }
                        case 680:
                            _fun27836_ip = 864;
                            continue _fun27836;
                        case 685:
                            var21 = var20.optional;
                            var17 = var6;
                            var19 = var4;
                            var3 = var1;
                            var18 = var2;
                            if (var21) {
                                _fun27836_ip = 864;
                                continue _fun27836
                            }
                        case 709:
                            var23 = var10.TypeError;
                            var22 = var20.name;
                            var21 = 'Expected "';
                            var24 = var21 + var22;
                            var21 = var23.prototype;
                            var22 = Object.create(var21, {
                                constructor: {
                                    value: var23
                                }
                            });
                            var21 = '" to not be empty';
                            var29 = var24 + var21;
                            var30 = var22;
                            var21 = new var30[var23](var29, var28);
                            var21 = var21 instanceof Object ? var21 : var22;
                            throw var21;
                        case 762:
                            var21 = var20.optional;
                            if (var21) {
                                _fun27836_ip = 824;
                                continue _fun27836
                            }
                        case 771:
                            var23 = var10.TypeError;
                            var22 = var20.name;
                            var21 = 'Expected "';
                            var24 = var21 + var22;
                            var21 = var23.prototype;
                            var22 = Object.create(var21, {
                                constructor: {
                                    value: var23
                                }
                            });
                            var21 = '" to be defined';
                            var29 = var24 + var21;
                            var30 = var22;
                            var21 = new var30[var23](var29, var28);
                            var21 = var21 instanceof Object ? var21 : var22;
                            throw var21;
                        case 824:
                            var21 = var20.partial;
                            var17 = var6;
                            var19 = var4;
                            var3 = var1;
                            var18 = var2;
                            if (!var21) {
                                _fun27836_ip = 864;
                                continue _fun27836
                            }
                        case 845:
                            var20 = var20.prefix;
                            var17 = var6 + var20;
                            var19 = var4;
                            var3 = var1;
                            var18 = var2;
                        case 864:
                            var5 = var5 + 1;
                            var1 = _closure2_slot0;
                            var1 = var1.length;
                            var6 = var17;
                            var4 = var19;
                            var2 = var18;
                            var0 = var6;
                            if (var5 < var1) {
                                _fun27836_ip = 96;
                                continue _fun27836
                            }
                        case 895:
                            return var0;
                    }
                };
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var2 = function(arg0) { // Original name: escapeString, environment: var1
        var3 = arg0;
        var2 = var3.replace;
        var1 = /([.+*?=^!:${}()[\]|\\/\\])/g;
        var0 = '\\$1';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot6 = var2;
    var2 = function(arg0) { // Original name: escapeGroup, environment: var1
        var3 = arg0;
        var2 = var3.replace;
        var1 = /([=!:$\\/()])/g;
        var0 = '\\$1';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var2;
    var2 = function(arg0, arg1) { // Original name: attachKeys, environment: var1
        var0 = arg0;
        var1 = arg1;
        var0.keys = var1;
        return var0;
    };
    var _closure1_slot8 = var2;
    var2 = function(arg0) { // Original name: flags, environment: var1
        _fun27841: for (var _fun27841_ip = 0;;) switch (_fun27841_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.sensitive;
                var0 = 'i';
                if (!var1) {
                    _fun27841_ip = 20;
                    continue _fun27841
                }
            case 16:
                var0 = '';
            case 20:
                return var0;
        }
    };
    var _closure1_slot9 = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: tokensToRegExp, environment: var1
        _fun27842: for (var _fun27842_ip = 0;;) switch (_fun27842_ip) {
            case 0:
                var21 = arg0;
                var6 = arg1;
                var1 = arg2;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var15 = 0;
                var0 = var0[var15];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var6);
                var2 = var6;
                var5 = var1;
                if (var0) {
                    _fun27842_ip = 63;
                    continue _fun27842
                }
            case 47:
                var0 = var6;
                if (var6) {
                    _fun27842_ip = 56;
                    continue _fun27842
                }
            case 53:
                var0 = var1;
            case 56:
                var2 = new Array(0);
                var5 = var0;
            case 63:
                if (var5) {
                    _fun27842_ip = 68;
                    continue _fun27842
                }
            case 66:
                var5 = {};
            case 68:
                var9 = var5.strict;
                var11 = var5.end;
                var0 = var21.length;
                var0 = var15 < var0;
                var1 = '';
                var20 = ')?';
                var10 = '(?:';
                var19 = '))?';
                var18 = ')';
                var17 = '(';
                var16 = ')*';
                var13 = 'string';
                var12 = var1;
                var8 = 0;
                var7 = undefined;
                var6 = undefined;
                var14 = var12;
                if (!var0) {
                    _fun27842_ip = 347;
                    continue _fun27842
                }
            case 146:
                var25 = var21[var8];
                var0 = typeof var25;
                if (!(var13 !== var0)) {
                    _fun27842_ip = 301;
                    continue _fun27842
                }
            case 160:
                var22 = _closure1_slot6;
                var0 = var25.prefix;
                var0 = var22.bind(var3)(var0);
                var22 = var25.pattern;
                var22 = var10 + var22;
                var23 = var22 + var18;
                var22 = var2.push;
                var22 = var22.bind(var2)(var25);
                var22 = var25.repeat;
                var26 = var23;
                if (!var22) {
                    _fun27842_ip = 227;
                    continue _fun27842
                }
            case 211:
                var22 = var10 + var0;
                var22 = var22 + var23;
                var22 = var22 + var16;
                var26 = var23 + var22;
            case 227:
                var22 = var25.optional;
                if (var22) {
                    _fun27842_ip = 250;
                    continue _fun27842
                }
            case 236:
                var22 = var0 + var17;
                var22 = var22 + var26;
                var23 = var22 + var18;
                _fun27842_ip = 292;
                continue _fun27842;
            case 250:
                var22 = var25.partial;
                if (var22) {
                    _fun27842_ip = 277;
                    continue _fun27842
                }
            case 259:
                var22 = var10 + var0;
                var22 = var22 + var17;
                var22 = var22 + var26;
                var22 = var22 + var19;
                _fun27842_ip = 289;
                continue _fun27842;
            case 277:
                var24 = var0 + var17;
                var24 = var24 + var26;
                var22 = var24 + var20;
            case 289:
                var23 = var22;
            case 292:
                var22 = var12 + var23;
                var24 = var0;
                _fun27842_ip = 320;
                continue _fun27842;
            case 301:
                var0 = _closure1_slot6;
                var0 = var0.bind(var3)(var25);
                var22 = var12 + var0;
                var24 = var7;
                var23 = var6;
            case 320:
                var8 = var8 + 1;
                var0 = var21.length;
                var12 = var22;
                var7 = var24;
                var6 = var23;
                var14 = var12;
                if (var8 < var0) {
                    _fun27842_ip = 146;
                    continue _fun27842
                }
            case 347:
                var6 = _closure1_slot6;
                var0 = var5.delimiter;
                if (var0) {
                    _fun27842_ip = 364;
                    continue _fun27842
                }
            case 360:
                var0 = '/';
            case 364:
                var7 = var6.bind(var3)(var0);
                var6 = var14.slice;
                var0 = var7.length;
                var0 = -var0;
                var0 = var6.bind(var14)(var0);
                var6 = var0 === var7;
                var8 = var14;
                if (var9) {
                    _fun27842_ip = 440;
                    continue _fun27842
                }
            case 397:
                var0 = var14;
                if (!var6) {
                    _fun27842_ip = 422;
                    continue _fun27842
                }
            case 403:
                var13 = var14.slice;
                var12 = var7.length;
                var12 = -var12;
                var0 = var13.bind(var14)(var15, var12);
            case 422:
                var0 = var0 + var10;
                var10 = var0 + var7;
                var0 = '(?=$))?';
                var8 = var10 + var0;
            case 440:
                var0 = '$';
                var10 = false;
                if (!(var10 === var11)) {
                    _fun27842_ip = 479;
                    continue _fun27842
                }
            case 450:
                if (!var9) {
                    _fun27842_ip = 456;
                    continue _fun27842
                }
            case 453:
                if (var6) {
                    _fun27842_ip = 476;
                    continue _fun27842
                }
            case 456:
                var6 = '(?=';
                var7 = var6 + var7;
                var6 = '|$)';
                var1 = var7 + var6;
            case 476:
                var0 = var1;
            case 479:
                var1 = _closure1_slot8;
                var6 = global;
                var6 = var6.RegExp;
                var4 = _closure1_slot9;
                var27 = var4.bind(var3)(var5);
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var7 = '^';
                var0 = var8 + var0;
                var28 = var7 + var0;
                var29 = var4;
                var0 = new var29[var6](var28, var27, var26);
                var0 = var0 instanceof Object ? var0 : var4;
                var1 = var1.bind(var3)(var0, var2);
                return var0;
        }
    };
    var _closure1_slot10 = var2;
    var3 = function(arg0, arg1, arg2) { // Original name: pathToRegexp, environment: var1
        _fun27843: for (var _fun27843_ip = 0;;) switch (_fun27843_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var5 = arg2;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 0;
                var0 = var0[var7];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)(var6);
                var3 = var6;
                var8 = var5;
                if (var0) {
                    _fun27843_ip = 63;
                    continue _fun27843
                }
            case 47:
                var0 = var6;
                if (var6) {
                    _fun27843_ip = 56;
                    continue _fun27843
                }
            case 53:
                var0 = var5;
            case 56:
                var3 = new Array(0);
                var8 = var0;
            case 63:
                if (var8) {
                    _fun27843_ip = 68;
                    continue _fun27843
                }
            case 66:
                var8 = {};
            case 68:
                var5 = global;
                var0 = var5.RegExp;
                var0 = var1 instanceof var0;
                if (var0) {
                    _fun27843_ip = 279;
                    continue _fun27843
                }
            case 86:
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var6.bind(var4)(var0);
                var0 = var0.bind(var4)(var1);
                if (var0) {
                    _fun27843_ip = 137;
                    continue _fun27843
                }
            case 111:
                var6 = _closure1_slot10;
                var0 = _closure1_slot3;
                var0 = var0.bind(var4)(var1, var8);
                var0 = var6.bind(var4)(var0, var3, var8);
                _fun27843_ip = 277;
                continue _fun27843;
            case 137:
                var11 = new Array(0);
                var6 = var1.length;
                var6 = var7 < var6;
                var9 = 0;
                if (!var6) {
                    _fun27843_ip = 197;
                    continue _fun27843
                }
            case 155:
                var10 = var11.push;
                var12 = _closure1_slot11;
                var6 = var1[var9];
                var6 = var12.bind(var4)(var6, var3, var8);
                var6 = var6.source;
                var6 = var10.bind(var11)(var6);
                var9 = var9 + 1;
                var6 = var1.length;
                if (var9 < var6) {
                    _fun27843_ip = 155;
                    continue _fun27843
                }
            case 197:
                var6 = _closure1_slot8;
                var10 = var5.RegExp;
                var9 = var11.join;
                var5 = '|';
                var9 = var9.bind(var11)(var5);
                var5 = '(?:';
                var11 = var5 + var9;
                var5 = _closure1_slot9;
                var14 = var5.bind(var4)(var8);
                var5 = var10.prototype;
                var8 = Object.create(var5, {
                    constructor: {
                        value: var10
                    }
                });
                var5 = ')';
                var15 = var11 + var5;
                var16 = var8;
                var5 = new var16[var10](var15, var14, var13);
                var5 = var5 instanceof Object ? var5 : var8;
                var6 = var6.bind(var4)(var5, var3);
                var0 = var5;
            case 277:
                _fun27843_ip = 381;
                continue _fun27843;
            case 279:
                var8 = var1.source;
                var6 = var8.match;
                var5 = /\((?!\?)/g;
                var6 = var6.bind(var8)(var5);
                if (!var6) {
                    _fun27843_ip = 368;
                    continue _fun27843
                }
            case 312:
                var5 = var6.length;
                var5 = var7 < var5;
                var7 = 0;
                if (!var5) {
                    _fun27843_ip = 368;
                    continue _fun27843
                }
            case 326:
                var8 = var3.push;
                var5 = {
                    'name': null,
                    'prefix': null,
                    'delimiter': null,
                    'optional': false,
                    'repeat': false,
                    'partial': false,
                    'asterisk': false,
                    'pattern': null
                };
                var5.name = var7;
                var5 = var8.bind(var3)(var5);
                var7 = var7 + 1;
                var5 = var6.length;
                if (var7 < var5) {
                    _fun27843_ip = 326;
                    continue _fun27843
                }
            case 368:
                var2 = _closure1_slot8;
                var2 = var2.bind(var4)(var1, var3);
                var0 = var1;
            case 381:
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var0.exports = var3;
    var3 = var0.exports;
    var3.parse = var5;
    var5 = var0.exports;
    var3 = function(arg0, arg1) { // Original name: compile, environment: var1
        var2 = _closure1_slot5;
        var4 = _closure1_slot3;
        var1 = undefined;
        var3 = arg0;
        var0 = arg1;
        var0 = var4.bind(var1)(var3, var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var5.compile = var3;
    var3 = var0.exports;
    var3.tokensToFunction = var4;
    var0 = var0.exports;
    var0.tokensToRegExp = var2;
    var0 = global;
    var4 = var0.RegExp;
    var3 = ['(\\\\.)', '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'];
    var2 = var3.join;
    var0 = '|';
    var8 = var2.bind(var3)(var0);
    var0 = var4.prototype;
    var2 = Object.create(var0, {
        constructor: {
            value: var4
        }
    });
    var7 = 'g';
    var9 = var2;
    var0 = new var9[var4](var8, var7, var6);
    var0 = var0 instanceof Object ? var0 : var2;
    var _closure1_slot2 = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3186]);