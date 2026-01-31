// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0() {
        _fun1486: for (var _fun1486_ip = 0;;) switch (_fun1486_ip) {
            case 0:
                var2 = /([+-]?\d*(\.\d+)?)([\w\W]+)?/g;
                var1 = var2.exec;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var6 = null;
                var0 = null;
                if (!var2) {
                    _fun1486_ip = 132;
                    continue _fun1486
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
                    _fun1486_ip = 132;
                    continue _fun1486
                }
            case 66:
                var4 = 3;
                var5 = var2[var4];
                if (!(var6 != var5)) {
                    _fun1486_ip = 91;
                    continue _fun1486
                }
            case 77:
                var7 = var2[var4];
                var5 = 'px';
                var0 = null;
                if (!(var5 === var7)) {
                    _fun1486_ip = 132;
                    continue _fun1486
                }
            case 91:
                var4 = var2[var4];
                if (!(var6 == var4)) {
                    _fun1486_ip = 115;
                    continue _fun1486
                }
            case 99:
                var5 = var2[var1];
                var4 = '0';
                var0 = null;
                if (!(var4 === var5)) {
                    _fun1486_ip = 132;
                    continue _fun1486
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
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0() {
        _fun1487: for (var _fun1487_ip = 0;;) switch (_fun1487_ip) {
            case 0:
                var5 = arg0;
                var13 = undefined;
                var14 = undefined;
                var15 = undefined;
                var16 = undefined;
                var17 = undefined;
                var0 = new Array(0);
                var12 = null;
                if (!(var12 != var5)) {
                    _fun1487_ip = 641;
                    continue _fun1487
                }
            case 26:
                var11 = 'string';
                var2 = typeof var5;
                var1 = var5;
                if (!(var11 === var2)) {
                    _fun1487_ip = 83;
                    continue _fun1487
                }
            case 40:
                var4 = var5.replace;
                var3 = /\n/g;
                var2 = ' ';
                var3 = var4.bind(var5)(var3, var2);
                var2 = function arg0() {
                    _fun1488: for (var _fun1488_ip = 0;;) switch (_fun1488_ip) {
                        case 0:
                            var4 = arg0;
                            var12 = undefined;
                            var13 = undefined;
                            var14 = undefined;
                            var15 = undefined;
                            var16 = undefined;
                            var17 = undefined;
                            var18 = undefined;
                            var0 = new Array(0);
                            var3 = var4.split;
                            var2 = /,(?![^()]*\))/;
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.map;
                            var2 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = var1.trim;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                var1 = '';
                                var0 = arg0;
                                var0 = var1 !== var0;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var11 = var1;
                            var2 = var11[Symbol.iterator];
                            var11 = var2().next;
                            var10 = null;
                            var9 = 0;
                            var7 = 3;
                            var6 = 2;
                            var5 = 1;
                            var4 = true;
                            var3 = 'inset';
                        case 105:
                            var21 = var11().value;
                            var19 = var2;
                            if (!(var19 !== var12)) {
                                _fun1488_ip = 544;
                                continue _fun1488
                            }
                        case 119: // try_start_7
                            var13 = {
                                'offsetX': 0,
                                'offsetY': 0
                            };
                            var14 = undefined;
                            var15 = undefined;
                            var16 = false;
                            var17 = 0;
                            var20 = var21.split;
                            var19 = /\s+(?![^(]*\))/;
                            var21 = var20.bind(var21)(var19);
                            var19 = var21;
                            var20 = var19[Symbol.iterator];
                            var19 = var20().next;
                        case 167:
                            var22 = var19().value;
                            var21 = var20;
                            if (!(var21 !== var12)) {
                                _fun1488_ip = 475;
                                continue _fun1488
                            }
                        case 181: // try_start_0
                            var18 = var22;
                            var23 = _closure1_slot0;
                            var21 = _closure1_slot1;
                            var21 = var21[var9];
                            var21 = var23.bind(var12)(var21);
                            var21 = var21.bind(var12)(var22);
                            if (!(var10 != var21)) {
                                _fun1488_ip = 260;
                                continue _fun1488
                            }
                        case 210:
                            var21 = var13;
                            var21 = var21.color;
                            if (!(var10 == var21)) {
                                _fun1488_ip = 248;
                                continue _fun1488
                            }
                        case 222:
                            var21 = var14;
                            if (!(var10 != var21)) {
                                _fun1488_ip = 231;
                                continue _fun1488
                            }
                        case 229:
                            var16 = true;
                        case 231:
                            var22 = var13;
                            var21 = var18;
                            var22.color = var21;
                            _fun1488_ip = 463;
                            continue _fun1488;
                        case 248: // try_end0
                            var20.return();
                        case 251: // try_end7
                            var2.return();
                            var21 = new Array(0);
                            return var21;
                        case 260: // try_start_1 // try_start_8
                            var21 = var18;
                            if (!(var3 === var21)) {
                                _fun1488_ip = 315;
                                continue _fun1488
                            }
                        case 267:
                            var21 = var13;
                            var21 = var21.inset;
                            if (!(var10 == var21)) {
                                _fun1488_ip = 303;
                                continue _fun1488
                            }
                        case 280:
                            var21 = var14;
                            if (!(var10 != var21)) {
                                _fun1488_ip = 289;
                                continue _fun1488
                            }
                        case 287:
                            var16 = true;
                        case 289:
                            var21 = var13;
                            var21.inset = var4;
                            _fun1488_ip = 463;
                            continue _fun1488;
                        case 303: // try_end1
                            var20.return();
                        case 306: // try_end8
                            var2.return();
                            var21 = new Array(0);
                            return var21;
                        case 315: // try_start_2 // try_start_9
                            var21 = var17;
                            if (!(var9 !== var21)) {
                                _fun1488_ip = 454;
                                continue _fun1488
                            }
                        case 325:
                            if (!(var5 !== var21)) {
                                _fun1488_ip = 425;
                                continue _fun1488
                            }
                        case 329:
                            if (!(var6 !== var21)) {
                                _fun1488_ip = 387;
                                continue _fun1488
                            }
                        case 333:
                            if (!(var7 !== var21)) {
                                _fun1488_ip = 349;
                                continue _fun1488
                            }
                        case 337: // try_end2
                            var20.return();
                        case 340: // try_end9
                            var2.return();
                            var21 = new Array(0);
                            return var21;
                        case 349: // try_start_3 // try_start_10
                            var21 = var16;
                            if (var21) {
                                _fun1488_ip = 375;
                                continue _fun1488
                            }
                        case 355:
                            var22 = var13;
                            var21 = var18;
                            var22.spreadDistance = var21;
                            var21 = var17;
                            var17 = var21 + 1;
                            _fun1488_ip = 463;
                            continue _fun1488;
                        case 375: // try_end3
                            var20.return();
                        case 378: // try_end10
                            var2.return();
                            var21 = new Array(0);
                            return var21;
                        case 387: // try_start_4 // try_start_11
                            var21 = var16;
                            if (var21) {
                                _fun1488_ip = 413;
                                continue _fun1488
                            }
                        case 393:
                            var22 = var13;
                            var21 = var18;
                            var22.blurRadius = var21;
                            var21 = var17;
                            var17 = var21 + 1;
                            _fun1488_ip = 463;
                            continue _fun1488;
                        case 413: // try_end4
                            var20.return();
                        case 416: // try_end11
                            var2.return();
                            var21 = new Array(0);
                            return var21;
                        case 425: // try_start_5 // try_start_12
                            var21 = var16;
                            if (var21) {
                                _fun1488_ip = 442;
                                continue _fun1488
                            }
                        case 431:
                            var15 = var18;
                            var21 = var17;
                            var17 = var21 + 1;
                            _fun1488_ip = 463;
                            continue _fun1488;
                        case 442: // try_end5
                            var20.return();
                        case 445: // try_end12
                            var2.return();
                            var21 = new Array(0);
                            return var21;
                        case 454: // try_start_6 // try_start_13
                            var14 = var18;
                            var21 = var17;
                            var17 = var21 + 1;
                        case 463: // try_end6
                            _fun1488_ip = 167;
                            continue _fun1488;
                        case 468: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4 // catch_target5 // catch_target6
                            CatchBlockStart(arg_register = 19);
                            var20.return();
                            throw var19;
                        case 475:
                            var19 = var14;
                            if (!(var10 != var19)) {
                                _fun1488_ip = 528;
                                continue _fun1488
                            }
                        case 482:
                            var19 = var15;
                            if (!(var10 != var19)) {
                                _fun1488_ip = 528;
                                continue _fun1488
                            }
                        case 489:
                            var21 = var13;
                            var19 = var14;
                            var21.offsetX = var19;
                            var19 = var15;
                            var21.offsetY = var19;
                            var20 = var0;
                            var19 = var20.push;
                            var19 = var19.bind(var20)(var21);
                        case 523: // try_end13
                            _fun1488_ip = 105;
                            continue _fun1488;
                        case 528:
                            var2.return();
                            var1 = new Array(0);
                            return var1;
                        case 537: // catch_target7 // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 544:
                            return var0;
                    }
                };
                var1 = var2.bind(var13)(var3);
            case 83:
                var10 = var1;
                var2 = var10[Symbol.iterator];
                var10 = var2().next;
                var9 = 0;
                var7 = 'inset';
                var6 = 'color';
                var5 = 'blurRadius';
                var4 = 'spreadDistance';
                var3 = 'offsetY';
                var1 = 'offsetX';
            case 118:
                var18 = var10().value;
                var19 = var2;
                if (!(var19 !== var13)) {
                    _fun1487_ip = 636;
                    continue _fun1487
                }
            case 132: // try_start_0
                var14 = var18;
                var15 = {
                    'offsetX': 0,
                    'offsetY': 0
                };
                var16 = undefined;
                var21 = var18;
                for (var18 in var21)
                    case 161: {
                        case 173: var23 = var18;
                        if (!(var1 !== var23)) {
                            _fun1487_ip = 530;
                            continue _fun1487
                        }
                        case 183: if (!(var3 !== var23)) {
                            _fun1487_ip = 452;
                            continue _fun1487
                        }
                        case 190: if (!(var4 !== var23)) {
                            _fun1487_ip = 374;
                            continue _fun1487
                        }
                        case 197: if (!(var5 !== var23)) {
                            _fun1487_ip = 289;
                            continue _fun1487
                        }
                        case 201: if (!(var6 !== var23)) {
                            _fun1487_ip = 229;
                            continue _fun1487
                        }
                        case 205: if (var7 !== var23) {
                            _fun1487_ip = 161;
                            continue _fun1487
                        }
                        case 209: var24 = var15;
                        var23 = var14;
                        var23 = var23.inset;
                        var24.inset = var23;
                        _fun1487_ip = 161;
                        continue _fun1487;
                        case 229: var24 = _closure1_slot0;
                        var23 = _closure1_slot1;
                        var23 = var23[var9];
                        var24 = var24.bind(var13)(var23);
                        var23 = var14;
                        var23 = var23.color;
                        var23 = var24.bind(var13)(var23);
                        var17 = var23;
                        if (!(var12 != var23)) {
                            _fun1487_ip = 280;
                            continue _fun1487
                        }
                        case 266: var24 = var15;
                        var23 = var17;
                        var24.color = var23;
                        _fun1487_ip = 161;
                        continue _fun1487;
                        case 280: // try_end0
                            var2.return();
                        var23 = new Array(0);
                        return var23;
                        case 289: // try_start_1
                            var23 = var14;
                        var23 = var23.blurRadius;
                        var23 = typeof var23;
                        if (!(var11 !== var23)) {
                            _fun1487_ip = 316;
                            continue _fun1487
                        }
                        case 305: var23 = var14;
                        var23 = var23.blurRadius;
                        _fun1487_ip = 334;
                        continue _fun1487;
                        case 316: var25 = _closure1_slot2;
                        var24 = var14;
                        var24 = var24.blurRadius;
                        var23 = var25.bind(var13)(var24);
                        case 334: var16 = var23;
                        if (!(var12 != var23)) {
                            _fun1487_ip = 365;
                            continue _fun1487
                        }
                        case 341: var23 = var16;
                        if (!(!(var23 < var9))) {
                            _fun1487_ip = 365;
                            continue _fun1487
                        }
                        case 348: var24 = var15;
                        var23 = var16;
                        var24.blurRadius = var23;
                        _fun1487_ip = 161;
                        continue _fun1487;
                        case 365: // try_end1
                            var2.return();
                        var23 = new Array(0);
                        return var23;
                        case 374: // try_start_2
                            var23 = var14;
                        var23 = var23.spreadDistance;
                        var23 = typeof var23;
                        if (!(var11 !== var23)) {
                            _fun1487_ip = 401;
                            continue _fun1487
                        }
                        case 390: var23 = var14;
                        var23 = var23.spreadDistance;
                        _fun1487_ip = 419;
                        continue _fun1487;
                        case 401: var25 = _closure1_slot2;
                        var24 = var14;
                        var24 = var24.spreadDistance;
                        var23 = var25.bind(var13)(var24);
                        case 419: var16 = var23;
                        if (!(var12 != var23)) {
                            _fun1487_ip = 443;
                            continue _fun1487
                        }
                        case 426: var24 = var15;
                        var23 = var16;
                        var24.spreadDistance = var23;
                        _fun1487_ip = 161;
                        continue _fun1487;
                        case 443: // try_end2
                            var2.return();
                        var23 = new Array(0);
                        return var23;
                        case 452: // try_start_3
                            var23 = var14;
                        var23 = var23.offsetY;
                        var23 = typeof var23;
                        if (!(var11 !== var23)) {
                            _fun1487_ip = 479;
                            continue _fun1487
                        }
                        case 468: var23 = var14;
                        var23 = var23.offsetY;
                        _fun1487_ip = 497;
                        continue _fun1487;
                        case 479: var25 = _closure1_slot2;
                        var24 = var14;
                        var24 = var24.offsetY;
                        var23 = var25.bind(var13)(var24);
                        case 497: var16 = var23;
                        if (!(var12 != var23)) {
                            _fun1487_ip = 521;
                            continue _fun1487
                        }
                        case 504: var24 = var15;
                        var23 = var16;
                        var24.offsetY = var23;
                        _fun1487_ip = 161;
                        continue _fun1487;
                        case 521: // try_end3
                            var2.return();
                        var23 = new Array(0);
                        return var23;
                        case 530: // try_start_4
                            var23 = var14;
                        var23 = var23.offsetX;
                        var23 = typeof var23;
                        if (!(var11 !== var23)) {
                            _fun1487_ip = 557;
                            continue _fun1487
                        }
                        case 546: var23 = var14;
                        var23 = var23.offsetX;
                        _fun1487_ip = 575;
                        continue _fun1487;
                        case 557: var25 = _closure1_slot2;
                        var24 = var14;
                        var24 = var24.offsetX;
                        var23 = var25.bind(var13)(var24);
                        case 575: var16 = var23;
                        if (!(var12 != var23)) {
                            _fun1487_ip = 599;
                            continue _fun1487
                        }
                        case 582: var24 = var15;
                        var23 = var16;
                        var24.offsetX = var23;
                        _fun1487_ip = 161;
                        continue _fun1487;
                        case 599: // try_end4
                            var2.return();
                        var18 = new Array(0);
                        return var18;
                    }
            case 608: // try_start_5
                var20 = var0;
                var19 = var20.push;
                var18 = var15;
                var18 = var19.bind(var20)(var18);
            case 624: // try_end5
                _fun1487_ip = 118;
                continue _fun1487;
            case 629: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4 // catch_target5
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 636:
                var1 = var0;
                return var1;
            case 641:
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [38]);