// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0, arg1) { // Original name: _getFilterAmount, environment: var1
        _fun1481: for (var _fun1481_ip = 0;;) switch (_fun1481_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var5 = typeof var6;
                var0 = 'string';
                if (!(var0 !== var5)) {
                    _fun1481_ip = 34;
                    continue _fun1481
                }
            case 17:
                var0 = undefined;
                var2 = 'number';
                var3 = var6;
                var4 = undefined;
                if (!(var2 !== var5)) {
                    _fun1481_ip = 152;
                    continue _fun1481
                }
            case 32:
                return var0;
            case 34:
                var2 = global;
                var7 = var2.RegExp;
                var0 = var7.prototype;
                var5 = Object.create(var0, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = /([+-]?\d*(\.\d+)?)([a-zA-Z%]+)?/g;
                var11 = var5;
                var0 = new var11[var7](var10, var9);
                var5 = var0 instanceof Object ? var0 : var5;
                var0 = var5.exec;
                var5 = var0.bind(var5)(var6);
                if (!var5) {
                    _fun1481_ip = 381;
                    continue _fun1481
                }
            case 93:
                var8 = var2.isNaN;
                var9 = var2.Number;
                var0 = 1;
                var7 = var5[var0];
                var6 = undefined;
                var7 = var9.bind(var6)(var7);
                var7 = var8.bind(var6)(var7);
                if (var7) {
                    _fun1481_ip = 381;
                    continue _fun1481
                }
            case 130:
                var2 = var2.Number;
                var0 = var5[var0];
                var3 = var2.bind(var6)(var0);
                var0 = 3;
                var4 = var5[var0];
            case 152:
                var0 = 'hueRotate';
                if (!(var0 !== var1)) {
                    _fun1481_ip = 309;
                    continue _fun1481
                }
            case 165:
                var0 = 'blur';
                if (!(var0 !== var1)) {
                    _fun1481_ip = 286;
                    continue _fun1481
                }
            case 173:
                var0 = 'brightness';
                if (!(var0 !== var1)) {
                    _fun1481_ip = 237;
                    continue _fun1481
                }
            case 183:
                var0 = 'contrast';
                if (!(var0 !== var1)) {
                    _fun1481_ip = 237;
                    continue _fun1481
                }
            case 191:
                var0 = 'grayscale';
                if (!(var0 !== var1)) {
                    _fun1481_ip = 237;
                    continue _fun1481
                }
            case 199:
                var0 = 'invert';
                if (!(var0 !== var1)) {
                    _fun1481_ip = 237;
                    continue _fun1481
                }
            case 207:
                var0 = 'opacity';
                if (!(var0 !== var1)) {
                    _fun1481_ip = 237;
                    continue _fun1481
                }
            case 215:
                var0 = 'saturate';
                if (!(var0 !== var1)) {
                    _fun1481_ip = 237;
                    continue _fun1481
                }
            case 223:
                var0 = 'sepia';
                if (!(var0 !== var1)) {
                    _fun1481_ip = 237;
                    continue _fun1481
                }
            case 233:
                var0 = undefined;
                return var0;
            case 237:
                if (!var4) {
                    _fun1481_ip = 256;
                    continue _fun1481
                }
            case 240:
                var0 = '%';
                if (!(var0 !== var4)) {
                    _fun1481_ip = 256;
                    continue _fun1481
                }
            case 248:
                var0 = 'px';
                if (!(var0 === var4)) {
                    _fun1481_ip = 282;
                    continue _fun1481
                }
            case 256:
                var0 = 0;
                if (!(!(var3 < var0))) {
                    _fun1481_ip = 282;
                    continue _fun1481
                }
            case 262:
                var1 = '%';
                var0 = var3;
                if (!(var1 === var4)) {
                    _fun1481_ip = 280;
                    continue _fun1481
                }
            case 273:
                var1 = 100;
                var0 = var3 / var1;
            case 280:
                return var0;
            case 282:
                var0 = undefined;
                return var0;
            case 286:
                if (!var4) {
                    _fun1481_ip = 297;
                    continue _fun1481
                }
            case 289:
                var0 = 'px';
                if (!(var0 === var4)) {
                    _fun1481_ip = 305;
                    continue _fun1481
                }
            case 297:
                var0 = 0;
                if (!(!(var3 < var0))) {
                    _fun1481_ip = 305;
                    continue _fun1481
                }
            case 303:
                return var3;
            case 305:
                var0 = undefined;
                return var0;
            case 309:
                var0 = 0;
                if (!(var0 !== var3)) {
                    _fun1481_ip = 379;
                    continue _fun1481
                }
            case 315:
                var1 = 'deg';
                if (!(var1 !== var4)) {
                    _fun1481_ip = 335;
                    continue _fun1481
                }
            case 325:
                var1 = 'rad';
                if (!(var1 === var4)) {
                    _fun1481_ip = 375;
                    continue _fun1481
                }
            case 335:
                var2 = 'rad';
                var1 = var3;
                if (!(var2 === var4)) {
                    _fun1481_ip = 373;
                    continue _fun1481
                }
            case 348:
                var2 = 180;
                var3 = var2 * var3;
                var2 = global;
                var2 = var2.Math;
                var2 = var2.PI;
                var1 = var3 / var2;
            case 373:
                return var1;
            case 375:
                var1 = undefined;
                return var1;
            case 379:
                return var0;
            case 381:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0) { // Original name: parseDropShadow, environment: var1
        _fun1482: for (var _fun1482_ip = 0;;) switch (_fun1482_ip) {
            case 0:
                var5 = arg0;
                var21 = 'string';
                var0 = typeof var5;
                var20 = var5;
                if (!(var21 === var0)) {
                    _fun1482_ip = 321;
                    continue _fun1482
                }
            case 20:
                var12 = undefined;
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                var13 = undefined;
                var14 = undefined;
                var15 = undefined;
                var11 = 0;
                var1 = {
                    'offsetX': 0,
                    'offsetY': 0
                };
                var13 = 0;
                var14 = false;
                var4 = var5.split;
                var0 = /\s+(?![^(]*\))/;
                var0 = var4.bind(var5)(var0);
                var10 = var0;
                var6 = var10[Symbol.iterator];
                var10 = var6().next;
                var9 = 2;
                var8 = 1;
                var5 = null;
            case 91:
                var16 = var10().value;
                var0 = var6;
                if (!(var0 !== var12)) {
                    _fun1482_ip = 279;
                    continue _fun1482
                }
            case 105: // try_start_0
                var15 = var16;
                var17 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var17.bind(var12)(var0);
                var0 = var0.bind(var12)(var16);
                if (!(var5 != var0)) {
                    _fun1482_ip = 179;
                    continue _fun1482
                }
            case 134:
                var0 = var1;
                var0 = var0.color;
                if (!(var5 == var0)) {
                    _fun1482_ip = 169;
                    continue _fun1482
                }
            case 146:
                var0 = var3;
                if (!(var5 != var0)) {
                    _fun1482_ip = 155;
                    continue _fun1482
                }
            case 153:
                var14 = true;
            case 155:
                var16 = var1;
                var0 = var15;
                var16.color = var0;
                _fun1482_ip = 267;
                continue _fun1482;
            case 169: // try_end0
                var6.return();
                var0 = null;
                _fun1482_ip = 318;
                continue _fun1482;
            case 179: // try_start_1
                var16 = var13;
                if (!(var11 !== var16)) {
                    _fun1482_ip = 258;
                    continue _fun1482
                }
            case 186:
                if (!(var8 !== var16)) {
                    _fun1482_ip = 234;
                    continue _fun1482
                }
            case 190:
                if (!(var9 !== var16)) {
                    _fun1482_ip = 201;
                    continue _fun1482
                }
            case 194: // try_end1
                var6.return();
                var0 = null;
                _fun1482_ip = 318;
                continue _fun1482;
            case 201: // try_start_2
                var16 = var14;
                if (var16) {
                    _fun1482_ip = 227;
                    continue _fun1482
                }
            case 207:
                var17 = var1;
                var16 = var15;
                var17.standardDeviation = var16;
                var16 = var13;
                var13 = var16 + 1;
                _fun1482_ip = 267;
                continue _fun1482;
            case 227: // try_end2
                var6.return();
                var0 = null;
                _fun1482_ip = 318;
                continue _fun1482;
            case 234: // try_start_3
                var16 = var14;
                if (var16) {
                    _fun1482_ip = 251;
                    continue _fun1482
                }
            case 240:
                var2 = var15;
                var16 = var13;
                var13 = var16 + 1;
                _fun1482_ip = 267;
                continue _fun1482;
            case 251: // try_end3
                var6.return();
                var0 = null;
                _fun1482_ip = 318;
                continue _fun1482;
            case 258: // try_start_4
                var3 = var15;
                var16 = var13;
                var13 = var16 + 1;
            case 267: // try_end4
                _fun1482_ip = 91;
                continue _fun1482;
            case 272: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                CatchBlockStart(arg_register = 4);
                var6.return();
                throw var4;
            case 279:
                var4 = var3;
                var4 = var5 == var4;
                var0 = null;
                if (var4) {
                    _fun1482_ip = 318;
                    continue _fun1482
                }
            case 291:
                var4 = var2;
                var4 = var5 == var4;
                var0 = null;
                if (var4) {
                    _fun1482_ip = 318;
                    continue _fun1482
                }
            case 303:
                var1.offsetX = var3;
                var1.offsetY = var2;
                var0 = var1;
            case 318:
                var20 = var0;
            case 321:
                var1 = {
                    'offsetX': 0,
                    'offsetY': 0
                };
                var19 = 0;
                var17 = var20;
                var13 = undefined;
                var5 = null;
                var11 = 1;
                var10 = 'color';
                var9 = 'standardDeviation';
                var8 = 'offsetY';
                var7 = 'offsetX';
                var6 = undefined;
                var4 = undefined;
                var0 = undefined;
                var3 = undefined;
                var2 = undefined;
                for (var14 in var17)
                    case 383: {
                        var23 = var6;
                        var22 = var4;
                        var3 = var23;
                        var2 = var22;
                        case 407: var24 = var14;
                        if (!(var7 !== var24)) {
                            _fun1482_ip = 595;
                            continue _fun1482
                        }
                        case 417: if (!(var8 !== var24)) {
                            _fun1482_ip = 547;
                            continue _fun1482
                        }
                        case 424: if (!(var9 !== var24)) {
                            _fun1482_ip = 484;
                            continue _fun1482
                        }
                        case 428: if (!(var10 !== var24)) {
                            _fun1482_ip = 434;
                            continue _fun1482
                        }
                        case 432: return var5;
                        case 434: var25 = _closure1_slot0;
                        var24 = _closure1_slot1;
                        var24 = var24[var11];
                        var25 = var25.bind(var13)(var24);
                        var24 = var20.color;
                        var24 = var25.bind(var13)(var24);
                        if (!(var5 != var24)) {
                            _fun1482_ip = 482;
                            continue _fun1482
                        }
                        case 465: var1.color = var24;
                        var6 = var23;
                        var4 = var22;
                        var0 = var24;
                        _fun1482_ip = 383;
                        continue _fun1482;
                        case 482: return var5;
                        case 484: var24 = var20.standardDeviation;
                        var24 = typeof var24;
                        if (!(var21 !== var24)) {
                            _fun1482_ip = 505;
                            continue _fun1482
                        }
                        case 497: var24 = var20.standardDeviation;
                        _fun1482_ip = 520;
                        continue _fun1482;
                        case 505: var26 = _closure1_slot5;
                        var25 = var20.standardDeviation;
                        var24 = var26.bind(var13)(var25);
                        case 520: if (!(var5 != var24)) {
                            _fun1482_ip = 545;
                            continue _fun1482
                        }
                        case 524: if (!(!(var24 < var19))) {
                            _fun1482_ip = 545;
                            continue _fun1482
                        }
                        case 528: var1.standardDeviation = var24;
                        var6 = var23;
                        var4 = var22;
                        _fun1482_ip = 383;
                        continue _fun1482;
                        case 545: return var5;
                        case 547: var24 = var20.offsetY;
                        var24 = typeof var24;
                        if (!(var21 !== var24)) {
                            _fun1482_ip = 568;
                            continue _fun1482
                        }
                        case 560: var4 = var20.offsetY;
                        _fun1482_ip = 583;
                        continue _fun1482;
                        case 568: var25 = _closure1_slot5;
                        var24 = var20.offsetY;
                        var4 = var25.bind(var13)(var24);
                        case 583: var6 = var23;
                        if (var5 != var4) {
                            _fun1482_ip = 383;
                            continue _fun1482
                        }
                        case 593: return var5;
                        case 595: var23 = var20.offsetX;
                        var23 = typeof var23;
                        if (!(var21 !== var23)) {
                            _fun1482_ip = 616;
                            continue _fun1482
                        }
                        case 608: var6 = var20.offsetX;
                        _fun1482_ip = 631;
                        continue _fun1482;
                        case 616: var24 = _closure1_slot5;
                        var23 = var20.offsetX;
                        var6 = var24.bind(var13)(var23);
                        case 631: var4 = var22;
                        if (var5 != var6) {
                            _fun1482_ip = 383;
                            continue _fun1482
                        }
                        case 641: return var5;
                    }
            case 643:
                var4 = var5 == var3;
                var0 = null;
                if (var4) {
                    _fun1482_ip = 676;
                    continue _fun1482
                }
            case 652:
                var4 = var5 == var2;
                var0 = null;
                if (var4) {
                    _fun1482_ip = 676;
                    continue _fun1482
                }
            case 661:
                var1.offsetX = var3;
                var1.offsetY = var2;
                var0 = var1;
            case 676:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0) { // Original name: parseLength, environment: var1
        _fun1483: for (var _fun1483_ip = 0;;) switch (_fun1483_ip) {
            case 0:
                var2 = /([+-]?\d*(\.\d+)?)([\w\W]+)?/g;
                var1 = var2.exec;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var6 = null;
                var0 = null;
                if (!var2) {
                    _fun1483_ip = 132;
                    continue _fun1483
                }
            case 35:
                var3 = global;
                var7 = var3.Number;
                var5 = var7.isNaN;
                var1 = 1;
                var4 = var2[var1];
                var4 = var5.bind(var7)(var4);
                var0 = null;
                if (var4) {
                    _fun1483_ip = 132;
                    continue _fun1483
                }
            case 66:
                var4 = 3;
                var5 = var2[var4];
                if (!(var6 != var5)) {
                    _fun1483_ip = 91;
                    continue _fun1483
                }
            case 77:
                var7 = var2[var4];
                var5 = 'px';
                var0 = null;
                if (!(var5 === var7)) {
                    _fun1483_ip = 132;
                    continue _fun1483
                }
            case 91:
                var4 = var2[var4];
                if (!(var6 == var4)) {
                    _fun1483_ip = 115;
                    continue _fun1483
                }
            case 99:
                var5 = var2[var1];
                var4 = '0';
                var0 = null;
                if (!(var4 === var5)) {
                    _fun1483_ip = 132;
                    continue _fun1483
                }
            case 115:
                var3 = var3.Number;
                var2 = var2[var1];
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 132:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var1 = function(arg0) { // Original name: processFilter, environment: var1
        _fun1484: for (var _fun1484_ip = 0;;) switch (_fun1484_ip) {
            case 0:
                var4 = arg0;
                var15 = undefined;
                var10 = undefined;
                var11 = undefined;
                var12 = undefined;
                var13 = undefined;
                var0 = new Array(0);
                var14 = null;
                if (!(var14 != var4)) {
                    _fun1484_ip = 572;
                    continue _fun1484
                }
            case 26:
                var5 = typeof var4;
                var1 = 'string';
                if (!(var1 !== var5)) {
                    _fun1484_ip = 302;
                    continue _fun1484
                }
            case 40:
                var9 = global;
                var2 = var9.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun1484_ip = 99;
                    continue _fun1484
                }
            case 61:
                var3 = var9.TypeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var1 = ' filter is not a string or array';
                var24 = var5 + var1;
                var25 = var2;
                var1 = new var25[var3](var24, var23);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 99:
                var8 = var4;
                var2 = var8[Symbol.iterator];
                var8 = var2().next;
                var6 = 0;
                var5 = 2;
                var3 = 1;
                var1 = 'dropShadow';
            case 120:
                var19 = var8().value;
                var16 = var2;
                if (!(var16 !== var15)) {
                    _fun1484_ip = 561;
                    continue _fun1484
                }
            case 134: // try_start_0
                var17 = _closure1_slot2;
                var18 = var9.Object;
                var16 = var18.entries;
                var16 = var16.bind(var18)(var19);
                var16 = var16[var6];
                var17 = var17.bind(var15)(var16, var5);
                var16 = var17[var6];
                var10 = var16;
                var11 = var17[var3];
                if (!(var1 !== var16)) {
                    _fun1484_ip = 239;
                    continue _fun1484
                }
            case 180:
                var18 = _closure1_slot3;
                var17 = var10;
                var16 = var11;
                var16 = var18.bind(var15)(var17, var16);
                var13 = var16;
                if (!(var14 != var16)) {
                    _fun1484_ip = 230;
                    continue _fun1484
                }
            case 203:
                var18 = {};
                var17 = var10;
                var16 = var13;
                var18[var17] = var16;
                var17 = var0;
                var16 = var17.push;
                var16 = var16.bind(var17)(var18);
                _fun1484_ip = 281;
                continue _fun1484;
            case 230: // try_end0
                var2.return();
                var16 = new Array(0);
                return var16;
            case 239: // try_start_1
                var17 = _closure1_slot4;
                var16 = var11;
                var16 = var17.bind(var15)(var16);
                var12 = var16;
                if (!(var14 != var16)) {
                    _fun1484_ip = 286;
                    continue _fun1484
                }
            case 258:
                var18 = var0;
                var17 = var18.push;
                var16 = {};
                var19 = var12;
                var16.dropShadow = var19;
                var16 = var17.bind(var18)(var16);
            case 281: // try_end1
                _fun1484_ip = 120;
                continue _fun1484;
            case 286:
                var2.return();
                var1 = new Array(0);
                return var1;
            case 295: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 302:
                var3 = var4.replace;
                var2 = /\n/g;
                var1 = ' ';
                var13 = var3.bind(var4)(var2, var1);
                var12 = /([\w-]+)\(([^()]*|\([^()]*\)|[^()]*\([^()]*\)[^()]*)\)/g;
                var1 = var12.exec;
                var1 = var1.bind(var12)(var13);
                var10 = 2;
                var9 = 'hueRotate';
                var8 = 'hue-rotate';
                var7 = 'dropShadow';
                var6 = 1;
                var5 = 'drop-shadow';
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun1484_ip = 561;
                    continue _fun1484
                }
            case 401:
                var17 = var1[var6];
                var16 = var17.toLowerCase;
                var18 = var16.bind(var17)();
                var16 = var5 === var18;
                if (var16) {
                    _fun1484_ip = 492;
                    continue _fun1484
                }
            case 422:
                var17 = var7;
                if (var16) {
                    _fun1484_ip = 441;
                    continue _fun1484
                }
            case 428:
                var16 = var9;
                if (!(var8 !== var18)) {
                    _fun1484_ip = 438;
                    continue _fun1484
                }
            case 435:
                var16 = var18;
            case 438:
                var17 = var16;
            case 441:
                var18 = _closure1_slot3;
                var16 = var1[var10];
                var16 = var18.bind(var15)(var17, var16);
                var18 = var17;
                if (!(var14 != var16)) {
                    _fun1484_ip = 486;
                    continue _fun1484
                }
            case 462:
                var20 = {};
                var20[var18] = var16;
                var19 = var0;
                var17 = var19.push;
                var17 = var17.bind(var19)(var20);
                var17 = var16;
                _fun1484_ip = 538;
                continue _fun1484;
            case 486:
                var16 = new Array(0);
                return var16;
            case 492:
                var19 = _closure1_slot4;
                var16 = var1[var10];
                var16 = var19.bind(var15)(var16);
                if (!(var14 != var16)) {
                    _fun1484_ip = 566;
                    continue _fun1484
                }
            case 509:
                var21 = var0;
                var20 = var21.push;
                var19 = {};
                var19.dropShadow = var16;
                var19 = var20.bind(var21)(var19);
                var4 = var16;
                var18 = var3;
                var17 = var2;
            case 538:
                var16 = var12.exec;
                var1 = var16.bind(var12)(var13);
                var3 = var18;
                var2 = var17;
                if (var1) {
                    _fun1484_ip = 401;
                    continue _fun1484
                }
            case 561:
                var1 = var0;
                return var1;
            case 566:
                var1 = new Array(0);
                return var1;
            case 572:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 38]);