// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function(arg0) { // Original name: parseSignificantPrecision, environment: var1
        _fun13865: for (var _fun13865_ip = 0;;) switch (_fun13865_ip) {
            case 0:
                var4 = arg0;
                var0 = {};
                var _closure2_slot0 = var0;
                var2 = var4.length;
                var3 = 1;
                var2 = var2 - var3;
                var5 = var4[var2];
                var2 = 'r';
                if (!(var2 !== var5)) {
                    _fun13865_ip = 70;
                    continue _fun13865
                }
            case 35:
                var2 = var4.length;
                var2 = var2 - var3;
                var3 = var4[var2];
                var2 = 's';
                if (!(var2 === var3)) {
                    _fun13865_ip = 82;
                    continue _fun13865
                }
            case 56:
                var2 = 'lessPrecision';
                var0.roundingPriority = var2;
                _fun13865_ip = 82;
                continue _fun13865;
            case 70:
                var2 = 'morePrecision';
                var0.roundingPriority = var2;
            case 82:
                var3 = var4.replace;
                var2 = _closure1_slot3;
                var1 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun13866: for (var _fun13866_ip = 0;;) switch (_fun13866_ip) {
                        case 0:
                            var0 = arg1;
                            var4 = arg2;
                            var6 = typeof var4;
                            var5 = 'string';
                            if (!(var5 === var6)) {
                                _fun13866_ip = 125;
                                continue _fun13866
                            }
                        case 17:
                            var1 = '+';
                            if (!(var1 !== var4)) {
                                _fun13866_ip = 105;
                                continue _fun13866
                            }
                        case 25:
                            var3 = 0;
                            var2 = var0[var3];
                            var1 = '#';
                            if (!(var1 !== var2)) {
                                _fun13866_ip = 85;
                                continue _fun13866
                            }
                        case 39:
                            var2 = _closure2_slot0;
                            var1 = var0.length;
                            var2.minimumSignificantDigits = var1;
                            var1 = var0.length;
                            var3 = 0;
                            if (!(var5 === var6)) {
                                _fun13866_ip = 73;
                                continue _fun13866
                            }
                        case 68:
                            var3 = var4.length;
                        case 73:
                            var1 = var1 + var3;
                            var2.maximumSignificantDigits = var1;
                            _fun13866_ip = 154;
                            continue _fun13866;
                        case 85:
                            var2 = _closure2_slot0;
                            var1 = var0.length;
                            var2.maximumSignificantDigits = var1;
                            _fun13866_ip = 154;
                            continue _fun13866;
                        case 105:
                            var2 = _closure2_slot0;
                            var1 = var0.length;
                            var2.minimumSignificantDigits = var1;
                            _fun13866_ip = 154;
                            continue _fun13866;
                        case 125:
                            var1 = _closure2_slot0;
                            var2 = var0.length;
                            var1.minimumSignificantDigits = var2;
                            var0 = var0.length;
                            var1.maximumSignificantDigits = var0;
                        case 154:
                            var0 = '';
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: parseSign, environment: var1
        _fun13867: for (var _fun13867_ip = 0;;) switch (_fun13867_ip) {
            case 0:
                var1 = arg0;
                var0 = 'sign-auto';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 242;
                    continue _fun13867
                }
            case 16:
                var0 = 'sign-accounting';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 227;
                    continue _fun13867
                }
            case 29:
                var0 = '()';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 227;
                    continue _fun13867
                }
            case 42:
                var0 = 'sign-always';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 214;
                    continue _fun13867
                }
            case 55:
                var0 = '+!';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 214;
                    continue _fun13867
                }
            case 68:
                var0 = 'sign-accounting-always';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 198;
                    continue _fun13867
                }
            case 78:
                var0 = '()!';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 198;
                    continue _fun13867
                }
            case 88:
                var0 = 'sign-except-zero';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 183;
                    continue _fun13867
                }
            case 98:
                var0 = '+?';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 183;
                    continue _fun13867
                }
            case 108:
                var0 = 'sign-accounting-except-zero';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 167;
                    continue _fun13867
                }
            case 118:
                var0 = '()?';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 167;
                    continue _fun13867
                }
            case 128:
                var0 = 'sign-never';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 152;
                    continue _fun13867
                }
            case 138:
                var0 = '+_';
                if (!(var0 !== var1)) {
                    _fun13867_ip = 152;
                    continue _fun13867
                }
            case 148:
                var0 = undefined;
                return var0;
            case 152:
                var0 = {};
                var1 = 'never';
                var0.signDisplay = var1;
                return var0;
            case 167:
                var0 = {
                    'signDisplay': 'exceptZero',
                    'currencySign': 'accounting'
                };
                return var0;
            case 183:
                var0 = {};
                var1 = 'exceptZero';
                var0.signDisplay = var1;
                return var0;
            case 198:
                var0 = {
                    'signDisplay': 'always',
                    'currencySign': 'accounting'
                };
                return var0;
            case 214:
                var0 = {};
                var1 = 'always';
                var0.signDisplay = var1;
                return var0;
            case 227:
                var0 = {};
                var1 = 'accounting';
                var0.currencySign = var1;
                return var0;
            case 242:
                var0 = {};
                var1 = 'auto';
                var0.signDisplay = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: parseConciseScientificAndEngineeringStem, environment: var1
        _fun13868: for (var _fun13868_ip = 0;;) switch (_fun13868_ip) {
            case 0:
                var6 = arg0;
                var2 = 0;
                var0 = var6[var2];
                var3 = 'E';
                if (!(var3 === var0)) {
                    _fun13868_ip = 28;
                    continue _fun13868
                }
            case 17:
                var0 = 1;
                var0 = var6[var0];
                if (!(var3 !== var0)) {
                    _fun13868_ip = 72;
                    continue _fun13868
                }
            case 28:
                var1 = var6[var2];
                var4 = var6;
                var0 = undefined;
                if (!(var3 === var1)) {
                    _fun13868_ip = 101;
                    continue _fun13868
                }
            case 41:
                var1 = {};
                var3 = 'scientific';
                var1.notation = var3;
                var5 = var6.slice;
                var3 = 1;
                var4 = var5.bind(var6)(var3);
                var0 = var1;
                _fun13868_ip = 101;
                continue _fun13868;
            case 72:
                var1 = {};
                var3 = 'engineering';
                var1.notation = var3;
                var5 = var6.slice;
                var3 = 2;
                var4 = var5.bind(var6)(var3);
                var0 = var1;
            case 101:
                if (!var0) {
                    _fun13868_ip = 255;
                    continue _fun13868
                }
            case 107:
                var1 = var4.slice;
                var3 = 2;
                var5 = var1.bind(var4)(var2, var3);
                var1 = '+!';
                if (!(var1 !== var5)) {
                    _fun13868_ip = 168;
                    continue _fun13868
                }
            case 131:
                var2 = '+?';
                var1 = var4;
                if (!(var2 === var5)) {
                    _fun13868_ip = 188;
                    continue _fun13868
                }
            case 144:
                var2 = 'exceptZero';
                var0.signDisplay = var2;
                var2 = var4.slice;
                var1 = var2.bind(var4)(var3);
                _fun13868_ip = 188;
                continue _fun13868;
            case 168:
                var2 = 'always';
                var0.signDisplay = var2;
                var2 = var4.slice;
                var1 = var2.bind(var4)(var3);
            case 188:
                var3 = _closure1_slot5;
                var2 = var3.test;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun13868_ip = 244;
                    continue _fun13868
                }
            case 208:
                var2 = global;
                var4 = var2.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = 'Malformed concise eng/scientific notation';
                var9 = var3;
                var2 = new var9[var4](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 244:
                var1 = var1.length;
                var0.minimumIntegerDigits = var1;
            case 255:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0) { // Original name: parseNotationOptions, environment: var1
        _fun13869: for (var _fun13869_ip = 0;;) switch (_fun13869_ip) {
            case 0:
                var2 = _closure1_slot7;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                if (var0) {
                    _fun13869_ip = 22;
                    continue _fun13869
                }
            case 20:
                var0 = {};
            case 22:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.parseNumberSkeletonFromString = var0;
    var2.parseNumberSkeleton = var0;
    var3 = function(arg0) { // Original name: parseNumberSkeletonFromString, environment: var1
        _fun13870: for (var _fun13870_ip = 0;;) switch (_fun13870_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.length;
                var6 = 0;
                if (!(var6 !== var0)) {
                    _fun13870_ip = 283;
                    continue _fun13870
                }
            case 17:
                var0 = new Array(0);
                var2 = var3.split;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = var1[var6];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.WHITE_SPACE_REGEX;
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var5 = var2.bind(var3)(var1);
                var1 = var5.length;
                var1 = var6 < var1;
                var4 = 1;
                var3 = '/';
                var2 = 0;
                if (!var1) {
                    _fun13870_ip = 209;
                    continue _fun13870
                }
            case 97:
                var7 = var5[var2];
                var1 = var7.split;
                var7 = var1.bind(var7)(var3);
                var1 = var7.length;
                if (!(var6 !== var1)) {
                    _fun13870_ip = 247;
                    continue _fun13870
                }
            case 123:
                var9 = var7[var6];
                var1 = var7.slice;
                var8 = var1.bind(var7)(var4);
                var1 = var8.length;
                var1 = var6 < var1;
                var7 = 0;
                if (!var1) {
                    _fun13870_ip = 176;
                    continue _fun13870
                }
            case 151:
                var1 = var8[var7];
                var1 = var1.length;
                if (!(var6 !== var1)) {
                    _fun13870_ip = 211;
                    continue _fun13870
                }
            case 164:
                var7 = var7 + 1;
                var1 = var8.length;
                if (var7 < var1) {
                    _fun13870_ip = 151;
                    continue _fun13870
                }
            case 176:
                var7 = var0.push;
                var1 = {};
                var1.stem = var9;
                var1.options = var8;
                var1 = var7.bind(var0)(var1);
                var2 = var2 + 1;
                var1 = var5.length;
                if (var2 < var1) {
                    _fun13870_ip = 97;
                    continue _fun13870
                }
            case 209:
                return var0;
            case 211:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'Invalid number skeleton';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 247:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'Invalid number skeleton';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 283:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'Number skeleton cannot be empty';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.parseNumberSkeletonFromString = var3;
    var3 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
    var _closure1_slot2 = var3;
    var3 = /^(@+)?(\+|#+)?[rs]?$/g;
    var _closure1_slot3 = var3;
    var3 = /(\*)(0+)|(#+)(0+)|(0+)/g;
    var _closure1_slot4 = var3;
    var3 = /^(0+)$/;
    var _closure1_slot5 = var3;
    var1 = function(arg0) { // Original name: parseNumberSkeleton, environment: var1
        _fun13872: for (var _fun13872_ip = 0;;) switch (_fun13872_ip) {
            case 0:
                var63 = arg0;
                var0 = {};
                var _closure2_slot0 = var0;
                var1 = var63.length;
                var62 = 0;
                var1 = var62 < var1;
                var61 = undefined;
                var60 = 'percent';
                var59 = 100;
                var58 = 'currency';
                var57 = false;
                var56 = 'unit';
                var55 = '';
                var54 = 'compact';
                var53 = 'short';
                var52 = 'long';
                var50 = 1;
                var49 = 'scientific';
                var48 = 'engineering';
                var47 = 'standard';
                var46 = 'narrowSymbol';
                var45 = 'narrow';
                var44 = 'code';
                var43 = 'name';
                var42 = 'symbol';
                var41 = global;
                var40 = 'floor';
                var39 = 'ceil';
                var38 = 'trunc';
                var37 = 'expand';
                var36 = 'halfEven';
                var35 = 'halfTrunc';
                var34 = 'halfExpand';
                var33 = 'stripIfInteger';
                var32 = 'w';
                var31 = 'integer-width';
                var30 = 'rounding-mode-half-up';
                var29 = 'rounding-mode-half-down';
                var28 = 'rounding-mode-half-even';
                var27 = 'rounding-mode-up';
                var26 = 'rounding-mode-down';
                var25 = 'rounding-mode-ceiling';
                var24 = 'rounding-mode-floor';
                var23 = 'scale';
                var22 = 'unit-width-iso-code';
                var21 = 'unit-width-full-name';
                var20 = 'unit-width-short';
                var19 = 'unit-width-narrow';
                var18 = 'notation-simple';
                var17 = 'KK';
                var16 = 'compact-long';
                var15 = 'K';
                var14 = 'compact-short';
                var13 = 'measure-unit';
                var12 = '.';
                var11 = 'precision-integer';
                var10 = ',_';
                var9 = 'group-off';
                var8 = '%x100';
                var7 = '%';
                var6 = var0;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                var0 = var6;
                if (!var1) {
                    _fun13872_ip = 2135;
                    continue _fun13872
                }
            case 311:
                var1 = var63[var5];
                var65 = var1.stem;
                if (!(var60 !== var65)) {
                    _fun13872_ip = 2087;
                    continue _fun13872
                }
            case 328:
                if (!(var7 !== var65)) {
                    _fun13872_ip = 2087;
                    continue _fun13872
                }
            case 335:
                if (!(var8 !== var65)) {
                    _fun13872_ip = 2061;
                    continue _fun13872
                }
            case 342:
                if (!(var58 !== var65)) {
                    _fun13872_ip = 2026;
                    continue _fun13872
                }
            case 349:
                if (!(var9 !== var65)) {
                    _fun13872_ip = 2006;
                    continue _fun13872
                }
            case 356:
                if (!(var10 !== var65)) {
                    _fun13872_ip = 2006;
                    continue _fun13872
                }
            case 363:
                if (!(var11 !== var65)) {
                    _fun13872_ip = 1986;
                    continue _fun13872
                }
            case 370:
                if (!(var12 !== var65)) {
                    _fun13872_ip = 1986;
                    continue _fun13872
                }
            case 377:
                if (!(var13 !== var65)) {
                    _fun13872_ip = 1926;
                    continue _fun13872
                }
            case 384:
                if (!(var56 !== var65)) {
                    _fun13872_ip = 1926;
                    continue _fun13872
                }
            case 391:
                if (!(var14 !== var65)) {
                    _fun13872_ip = 1897;
                    continue _fun13872
                }
            case 398:
                if (!(var15 !== var65)) {
                    _fun13872_ip = 1897;
                    continue _fun13872
                }
            case 405:
                if (!(var16 !== var65)) {
                    _fun13872_ip = 1868;
                    continue _fun13872
                }
            case 412:
                if (!(var17 !== var65)) {
                    _fun13872_ip = 1868;
                    continue _fun13872
                }
            case 419:
                if (!(var49 !== var65)) {
                    _fun13872_ip = 1743;
                    continue _fun13872
                }
            case 426:
                if (!(var48 !== var65)) {
                    _fun13872_ip = 1618;
                    continue _fun13872
                }
            case 433:
                if (!(var18 !== var65)) {
                    _fun13872_ip = 1595;
                    continue _fun13872
                }
            case 440:
                if (!(var19 !== var65)) {
                    _fun13872_ip = 1566;
                    continue _fun13872
                }
            case 447:
                if (!(var20 !== var65)) {
                    _fun13872_ip = 1537;
                    continue _fun13872
                }
            case 454:
                if (!(var21 !== var65)) {
                    _fun13872_ip = 1508;
                    continue _fun13872
                }
            case 461:
                if (!(var22 !== var65)) {
                    _fun13872_ip = 1485;
                    continue _fun13872
                }
            case 468:
                if (!(var23 !== var65)) {
                    _fun13872_ip = 1442;
                    continue _fun13872
                }
            case 475:
                if (!(var24 !== var65)) {
                    _fun13872_ip = 1419;
                    continue _fun13872
                }
            case 482:
                if (!(var25 !== var65)) {
                    _fun13872_ip = 1396;
                    continue _fun13872
                }
            case 489:
                if (!(var26 !== var65)) {
                    _fun13872_ip = 1373;
                    continue _fun13872
                }
            case 496:
                if (!(var27 !== var65)) {
                    _fun13872_ip = 1350;
                    continue _fun13872
                }
            case 503:
                if (!(var28 !== var65)) {
                    _fun13872_ip = 1327;
                    continue _fun13872
                }
            case 510:
                if (!(var29 !== var65)) {
                    _fun13872_ip = 1304;
                    continue _fun13872
                }
            case 517:
                if (!(var30 !== var65)) {
                    _fun13872_ip = 1281;
                    continue _fun13872
                }
            case 524:
                if (!(var31 !== var65)) {
                    _fun13872_ip = 1187;
                    continue _fun13872
                }
            case 531:
                var67 = _closure1_slot5;
                var66 = var67.test;
                var65 = var1.stem;
                var65 = var66.bind(var67)(var65);
                if (var65) {
                    _fun13872_ip = 1153;
                    continue _fun13872
                }
            case 557:
                var67 = _closure1_slot2;
                var66 = var67.test;
                var65 = var1.stem;
                var65 = var66.bind(var67)(var65);
                if (var65) {
                    _fun13872_ip = 883;
                    continue _fun13872
                }
            case 583:
                var67 = _closure1_slot3;
                var66 = var67.test;
                var65 = var1.stem;
                var65 = var66.bind(var67)(var65);
                if (var65) {
                    _fun13872_ip = 795;
                    continue _fun13872
                }
            case 609:
                var66 = _closure1_slot7;
                var65 = var1.stem;
                var70 = var66.bind(var61)(var65);
                var76 = var6;
                if (!var70) {
                    _fun13872_ip = 689;
                    continue _fun13872
                }
            case 630:
                var68 = _closure1_slot0;
                var65 = _closure1_slot1;
                var66 = var65[var50];
                var67 = var68.bind(var61)(var66);
                var66 = var67.__assign;
                var65 = var65[var50];
                var69 = var68.bind(var61)(var65);
                var68 = var69.__assign;
                var65 = {};
                var65 = var68.bind(var69)(var65, var6);
                var65 = var66.bind(var67)(var65, var70);
                _closure2_slot0 = var65;
                var76 = var65;
            case 689:
                var66 = _closure1_slot8;
                var65 = var1.stem;
                var69 = var66.bind(var61)(var65);
                var65 = var76;
                var68 = var4;
                var67 = var70;
                var66 = var69;
                if (!var69) {
                    _fun13872_ip = 2105;
                    continue _fun13872
                }
            case 722:
                var74 = _closure1_slot0;
                var71 = _closure1_slot1;
                var72 = var71[var50];
                var73 = var74.bind(var61)(var72);
                var72 = var73.__assign;
                var71 = var71[var50];
                var75 = var74.bind(var61)(var71);
                var74 = var75.__assign;
                var71 = {};
                var71 = var74.bind(var75)(var71, var76);
                var71 = var72.bind(var73)(var71, var69);
                _closure2_slot0 = var71;
                var65 = var71;
                var68 = var4;
                var67 = var70;
                var66 = var69;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 795:
                var70 = _closure1_slot0;
                var69 = _closure1_slot1;
                var71 = var69[var50];
                var72 = var70.bind(var61)(var71);
                var71 = var72.__assign;
                var69 = var69[var50];
                var73 = var70.bind(var61)(var69);
                var70 = var73.__assign;
                var69 = {};
                var70 = var70.bind(var73)(var69, var6);
                var73 = _closure1_slot6;
                var69 = var1.stem;
                var69 = var73.bind(var61)(var69);
                var69 = var71.bind(var72)(var70, var69);
                _closure2_slot0 = var69;
                var65 = var69;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 883:
                var69 = var1.options;
                var69 = var69.length;
                if (!(!(var69 > var50))) {
                    _fun13872_ip = 1119;
                    continue _fun13872
                }
            case 900:
                var72 = var1.stem;
                var71 = var72.replace;
                var70 = _closure1_slot2;
                var69 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var64
                    _fun13876: for (var _fun13876_ip = 0;;) switch (_fun13876_ip) {
                        case 0:
                            var0 = arg1;
                            var1 = arg3;
                            var4 = arg4;
                            var2 = arg5;
                            var5 = '*';
                            var3 = arg2;
                            if (!(var5 !== var3)) {
                                _fun13876_ip = 148;
                                continue _fun13876
                            }
                        case 26:
                            if (!var1) {
                                _fun13876_ip = 43;
                                continue _fun13876
                            }
                        case 29:
                            var3 = 0;
                            var5 = var1[var3];
                            var3 = '#';
                            if (!(var3 !== var5)) {
                                _fun13876_ip = 128;
                                continue _fun13876
                            }
                        case 43:
                            if (!var4) {
                                _fun13876_ip = 49;
                                continue _fun13876
                            }
                        case 46:
                            if (var2) {
                                _fun13876_ip = 84;
                                continue _fun13876
                            }
                        case 49:
                            var6 = _closure2_slot0;
                            var5 = var0.length;
                            var6.minimumFractionDigits = var5;
                            var5 = _closure2_slot0;
                            var3 = var0.length;
                            var5.maximumFractionDigits = var3;
                            _fun13876_ip = 166;
                            continue _fun13876;
                        case 84:
                            var6 = _closure2_slot0;
                            var5 = var4.length;
                            var6.minimumFractionDigits = var5;
                            var3 = _closure2_slot0;
                            var4 = var4.length;
                            var2 = var2.length;
                            var2 = var4 + var2;
                            var3.maximumFractionDigits = var2;
                            _fun13876_ip = 166;
                            continue _fun13876;
                        case 128:
                            var2 = _closure2_slot0;
                            var1 = var1.length;
                            var2.maximumFractionDigits = var1;
                            _fun13876_ip = 166;
                            continue _fun13876;
                        case 148:
                            var1 = _closure2_slot0;
                            var0 = var0.length;
                            var1.minimumFractionDigits = var0;
                        case 166:
                            var0 = '';
                            return var0;
                    }
                };
                var69 = var71.bind(var72)(var70, var69);
                var69 = var1.options;
                var69 = var69[var62];
                if (!(var32 !== var69)) {
                    _fun13872_ip = 1039;
                    continue _fun13872
                }
            case 939:
                var65 = var6;
                var68 = var69;
                var67 = var3;
                var66 = var2;
                if (!var69) {
                    _fun13872_ip = 2105;
                    continue _fun13872
                }
            case 957:
                var71 = _closure1_slot0;
                var70 = _closure1_slot1;
                var72 = var70[var50];
                var73 = var71.bind(var61)(var72);
                var72 = var73.__assign;
                var70 = var70[var50];
                var74 = var71.bind(var61)(var70);
                var71 = var74.__assign;
                var70 = {};
                var71 = var71.bind(var74)(var70, var6);
                var70 = _closure1_slot6;
                var70 = var70.bind(var61)(var69);
                var70 = var72.bind(var73)(var71, var70);
                _closure2_slot0 = var70;
                var65 = var70;
                var68 = var69;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1039:
                var71 = _closure1_slot0;
                var70 = _closure1_slot1;
                var72 = var70[var50];
                var73 = var71.bind(var61)(var72);
                var72 = var73.__assign;
                var70 = var70[var50];
                var74 = var71.bind(var61)(var70);
                var71 = var74.__assign;
                var70 = {};
                var71 = var71.bind(var74)(var70, var6);
                var70 = {};
                var70.trailingZeroDisplay = var33;
                var70 = var72.bind(var73)(var71, var70);
                _closure2_slot0 = var70;
                var65 = var70;
                var68 = var69;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1119:
                var71 = var41.RangeError;
                var69 = var71.prototype;
                var70 = Object.create(var69, {
                    constructor: {
                        value: var71
                    }
                });
                var78 = 'Fraction-precision stems only accept a single optional option';
                var79 = var70;
                var69 = new var79[var71](var78, var77);
                var69 = var69 instanceof Object ? var69 : var70;
                throw var69;
            case 1153:
                var69 = var1.stem;
                var69 = var69.length;
                var6.minimumIntegerDigits = var69;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1187:
                var69 = var1.options;
                var69 = var69.length;
                if (!(!(var69 > var50))) {
                    _fun13872_ip = 1247;
                    continue _fun13872
                }
            case 1201:
                var69 = var1.options;
                var72 = var69[var62];
                var71 = var72.replace;
                var70 = _closure1_slot4;
                var69 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var64
                    _fun13875: for (var _fun13875_ip = 0;;) switch (_fun13875_ip) {
                        case 0:
                            var0 = arg1;
                            if (var0) {
                                _fun13875_ip = 96;
                                continue _fun13875
                            }
                        case 6:
                            var0 = arg3;
                            if (!var0) {
                                _fun13875_ip = 18;
                                continue _fun13875
                            }
                        case 12:
                            var0 = arg4;
                            if (var0) {
                                _fun13875_ip = 60;
                                continue _fun13875
                            }
                        case 18:
                            var0 = arg5;
                            if (!var0) {
                                _fun13875_ip = 117;
                                continue _fun13875
                            }
                        case 24:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = 'We currently do not support exact integer digits';
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 60:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = 'We currently do not support maximum integer digits';
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 96:
                            var1 = _closure2_slot0;
                            var0 = arg2;
                            var0 = var0.length;
                            var1.minimumIntegerDigits = var0;
                        case 117:
                            var0 = '';
                            return var0;
                    }
                };
                var69 = var71.bind(var72)(var70, var69);
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1247:
                var71 = var41.RangeError;
                var69 = var71.prototype;
                var70 = Object.create(var69, {
                    constructor: {
                        value: var71
                    }
                });
                var78 = 'integer-width stems only accept a single optional option';
                var79 = var70;
                var69 = new var79[var71](var78, var77);
                var69 = var69 instanceof Object ? var69 : var70;
                throw var69;
            case 1281:
                var6.roundingMode = var34;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1304:
                var6.roundingMode = var35;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1327:
                var6.roundingMode = var36;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1350:
                var6.roundingMode = var37;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1373:
                var6.roundingMode = var38;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1396:
                var6.roundingMode = var39;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1419:
                var6.roundingMode = var40;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1442:
                var70 = var41.parseFloat;
                var69 = var1.options;
                var69 = var69[var62];
                var69 = var70.bind(var61)(var69);
                var6.scale = var69;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1485:
                var6.currencyDisplay = var42;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1508:
                var6.currencyDisplay = var43;
                var6.unitDisplay = var52;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1537:
                var6.currencyDisplay = var44;
                var6.unitDisplay = var53;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1566:
                var6.currencyDisplay = var46;
                var6.unitDisplay = var45;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1595:
                var6.notation = var47;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1618:
                var70 = _closure1_slot0;
                var69 = _closure1_slot1;
                var71 = var69[var50];
                var72 = var70.bind(var61)(var71);
                var71 = var72.__assign;
                var73 = var69[var50];
                var74 = var70.bind(var61)(var73);
                var73 = var74.__assign;
                var69 = var69[var50];
                var75 = var70.bind(var61)(var69);
                var70 = var75.__assign;
                var69 = {};
                var70 = var70.bind(var75)(var69, var6);
                var69 = {};
                var69.notation = var48;
                var70 = var73.bind(var74)(var70, var69);
                var75 = var1.options;
                var74 = var75.reduce;
                var73 = function(arg0, arg1) { // Environment: var64
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 1;
                    var2 = var6[var1];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var2);
                    var2 = var3.__assign;
                    var1 = var6[var1];
                    var7 = var4.bind(var5)(var1);
                    var6 = var7.__assign;
                    var4 = {};
                    var1 = arg0;
                    var1 = var6.bind(var7)(var4, var1);
                    var4 = _closure1_slot9;
                    var0 = arg1;
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var69 = {};
                var69 = var74.bind(var75)(var73, var69);
                var69 = var71.bind(var72)(var70, var69);
                _closure2_slot0 = var69;
                var65 = var69;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1743:
                var70 = _closure1_slot0;
                var69 = _closure1_slot1;
                var71 = var69[var50];
                var72 = var70.bind(var61)(var71);
                var71 = var72.__assign;
                var73 = var69[var50];
                var74 = var70.bind(var61)(var73);
                var73 = var74.__assign;
                var69 = var69[var50];
                var75 = var70.bind(var61)(var69);
                var70 = var75.__assign;
                var69 = {};
                var70 = var70.bind(var75)(var69, var6);
                var69 = {};
                var69.notation = var49;
                var70 = var73.bind(var74)(var70, var69);
                var75 = var1.options;
                var74 = var75.reduce;
                var73 = function(arg0, arg1) { // Environment: var64
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 1;
                    var2 = var6[var1];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var2);
                    var2 = var3.__assign;
                    var1 = var6[var1];
                    var7 = var4.bind(var5)(var1);
                    var6 = var7.__assign;
                    var4 = {};
                    var1 = arg0;
                    var1 = var6.bind(var7)(var4, var1);
                    var4 = _closure1_slot9;
                    var0 = arg1;
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var69 = {};
                var69 = var74.bind(var75)(var73, var69);
                var69 = var71.bind(var72)(var70, var69);
                _closure2_slot0 = var69;
                var65 = var69;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1868:
                var6.notation = var54;
                var6.compactDisplay = var52;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1897:
                var6.notation = var54;
                var6.compactDisplay = var53;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1926:
                var6.style = var56;
                var69 = var1.options;
                var71 = var69[var62];
                var70 = var71.replace;
                var69 = /^(.*?)-/;
                var69 = var70.bind(var71)(var69, var55);
                var6.unit = var69;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 1986:
                var6.maximumFractionDigits = var62;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 2006:
                var6.useGrouping = var57;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 2026:
                var6.style = var58;
                var1 = var1.options;
                var1 = var1[var62];
                var6.currency = var1;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 2061:
                var6.style = var60;
                var6.scale = var59;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
                _fun13872_ip = 2105;
                continue _fun13872;
            case 2087:
                var6.style = var60;
                var65 = var6;
                var68 = var4;
                var67 = var3;
                var66 = var2;
            case 2105:
                var5 = var5 + 1;
                var1 = var63.length;
                var6 = var65;
                var4 = var68;
                var3 = var67;
                var2 = var66;
                var0 = var6;
                if (var5 < var1) {
                    _fun13872_ip = 311;
                    continue _fun13872
                }
            case 2135:
                return var0;
        }
    };
    var2.parseNumberSkeleton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1282, 1279]);