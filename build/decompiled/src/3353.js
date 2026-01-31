// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun28934: for (var _fun28934_ip = 0;;) switch (_fun28934_ip) {
        case 0:
            var0 = undefined;
            var16 = undefined;
            var17 = undefined;
            var18 = undefined;
            var15 = global;
            var2 = var15.Object;
            var3 = var2.keys;
            var2 = undefined;
            if (var3) {
                _fun28934_ip = 391;
                continue _fun28934
            }
        case 31:
            var3 = var15.Object;
            var3 = var3.prototype;
            var3 = var3.hasOwnProperty;
            var16 = var3;
            var _closure1_slot0 = var3;
            var3 = var15.Object;
            var3 = var3.prototype;
            var3 = var3.toString;
            var _closure1_slot1 = var3;
            var4 = dependencyMap;
            var3 = 0;
            var4 = var4[var3];
            var3 = require;
            var3 = var3.bind(var0)(var4);
            var _closure1_slot2 = var3;
            var3 = var15.Object;
            var3 = var3.prototype;
            var6 = var3.propertyIsEnumerable;
            var5 = var6.call;
            var4 = {};
            var14 = null;
            var4.toString = var14;
            var3 = 'toString';
            var3 = var5.bind(var6)(var4, var3);
            var3 = !var3;
            var _closure1_slot3 = var3;
            var5 = var6.call;
            var4 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
            var3 = 'prototype';
            var3 = var5.bind(var6)(var4, var3);
            var _closure1_slot4 = var3;
            var3 = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
            var _closure1_slot5 = var3;
            var3 = function arg0() {
                _fun28936: for (var _fun28936_ip = 0;;) switch (_fun28936_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.constructor;
                        var0 = var1;
                        if (!var0) {
                            _fun28936_ip = 23;
                            continue _fun28936
                        }
                    case 14:
                        var1 = var1.prototype;
                        var0 = var1 === var2;
                    case 23:
                        return var0;
                }
            };
            var17 = var3;
            var _closure1_slot6 = var3;
            var18 = {
                '$applicationCache': true,
                '$console': true,
                '$external': true,
                '$frame': true,
                '$frameElement': true,
                '$frames': true,
                '$innerHeight': true,
                '$innerWidth': true,
                '$onmozfullscreenchange': true,
                '$onmozfullscreenerror': true,
                '$outerHeight': true,
                '$outerWidth': true,
                '$pageXOffset': true,
                '$pageYOffset': true,
                '$parent': true,
                '$scrollLeft': true,
                '$scrollTop': true,
                '$scrollX': true,
                '$scrollY': true,
                '$self': true,
                '$webkitIndexedDB': true,
                '$webkitStorageInfo': true,
                '$window': true
            };
            var13 = undefined;
            var3 = var15.window;
            var6 = 'undefined';
            var5 = typeof var3;
            var3 = false;
            if (!(var6 !== var5)) {
                _fun28934_ip = 382;
                continue _fun28934
            }
        case 226:
            var10 = var15.window;
            var6 = 'object';
            var5 = '$';
            var3 = false;
            for (var7 in var10)
                case 253: {
                    var3 = false;
                    case 264: var13 = var7;
                    case 267: // try_start_1
                        var20 = var18;
                    var19 = var13;
                    var19 = var5 + var19;
                    var19 = var20[var19];
                    if (var19) {
                        _fun28934_ip = 376;
                        continue _fun28934
                    }
                    case 284: var22 = var16;
                    var21 = var22.call;
                    var20 = var15.window;
                    var19 = var13;
                    var19 = var21.bind(var22)(var20, var19);
                    if (!var19) {
                        _fun28934_ip = 376;
                        continue _fun28934
                    }
                    case 310: var20 = var15.window;
                    var19 = var13;
                    var19 = var20[var19];
                    if (!(var14 !== var19)) {
                        _fun28934_ip = 376;
                        continue _fun28934
                    }
                    case 327: var20 = var15.window;
                    var19 = var13;
                    var19 = var20[var19];
                    var19 = typeof var19;
                    if (!(var6 === var19)) {
                        _fun28934_ip = 376;
                        continue _fun28934
                    }
                    case 347: // try_start_0
                        var20 = var17;
                    var21 = var15.window;
                    var19 = var13;
                    var19 = var21[var19];
                    var19 = var20.bind(var0)(var19);
                    case 368: // try_end0
                        _fun28934_ip = 376;
                    continue _fun28934;
                    case 370: // catch_target0
                        CatchBlockStart(arg_register = 19);
                    case 372: // try_end1
                        var3 = true;
                    _fun28934_ip = 382;
                    continue _fun28934;
                    case 376: _fun28934_ip = 253;
                    continue _fun28934;
                    case 378: // catch_target1
                        CatchBlockStart(arg_register = 5);
                    var3 = true;
                }
        case 382:
            var _closure1_slot7 = var3;
            var2 = function arg0() {
                _fun28937: for (var _fun28937_ip = 0;;) switch (_fun28937_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = null;
                        var7 = var0 !== var6;
                        if (!var7) {
                            _fun28937_ip = 23;
                            continue _fun28937
                        }
                    case 12:
                        var1 = 'object';
                        var0 = typeof var6;
                        var7 = var1 === var0;
                    case 23:
                        var1 = _closure1_slot1;
                        var0 = var1.call;
                        var1 = var0.bind(var1)(var6);
                        var0 = '[object Function]';
                        var4 = var0 === var1;
                        var0 = _closure1_slot2;
                        var3 = undefined;
                        var1 = var0.bind(var3)(var6);
                        var2 = var7;
                        if (!var2) {
                            _fun28937_ip = 87;
                            continue _fun28937
                        }
                    case 65:
                        var8 = _closure1_slot1;
                        var0 = var8.call;
                        var8 = var0.bind(var8)(var6);
                        var0 = '[object String]';
                        var2 = var0 === var8;
                    case 87:
                        var0 = new Array(0);
                        if (var7) {
                            _fun28937_ip = 136;
                            continue _fun28937
                        }
                    case 94:
                        if (var4) {
                            _fun28937_ip = 136;
                            continue _fun28937
                        }
                    case 97:
                        if (var1) {
                            _fun28937_ip = 136;
                            continue _fun28937
                        }
                    case 100:
                        var7 = global;
                        var9 = var7.TypeError;
                        var7 = var9.prototype;
                        var8 = Object.create(var7, {
                            constructor: {
                                value: var9
                            }
                        });
                        var18 = 'Object.keys called on a non-object';
                        var19 = var8;
                        var7 = new var19[var9](var18, var17);
                        var7 = var7 instanceof Object ? var7 : var8;
                        throw var7;
                    case 136:
                        var12 = _closure1_slot4;
                        if (!var12) {
                            _fun28937_ip = 146;
                            continue _fun28937
                        }
                    case 143:
                        var12 = var4;
                    case 146:
                        if (!var2) {
                            _fun28937_ip = 227;
                            continue _fun28937
                        }
                    case 149:
                        var2 = var6.length;
                        var4 = 0;
                        if (!(var2 > var4)) {
                            _fun28937_ip = 227;
                            continue _fun28937
                        }
                    case 160:
                        var7 = _closure1_slot0;
                        var2 = var7.call;
                        var2 = var2.bind(var7)(var6, var4);
                        if (var2) {
                            _fun28937_ip = 227;
                            continue _fun28937
                        }
                    case 178:
                        var2 = var6.length;
                        var2 = var4 < var2;
                        var7 = global;
                        var4 = 0;
                        if (!var2) {
                            _fun28937_ip = 227;
                            continue _fun28937
                        }
                    case 194:
                        var8 = var0.push;
                        var2 = var7.String;
                        var2 = var2.bind(var3)(var4);
                        var2 = var8.bind(var0)(var2);
                        var4 = var4 + 1;
                        var2 = var6.length;
                        if (var4 < var2) {
                            _fun28937_ip = 194;
                            continue _fun28937
                        }
                    case 227:
                        if (!var1) {
                            _fun28937_ip = 241;
                            continue _fun28937
                        }
                    case 230:
                        var1 = var6.length;
                        var4 = 0;
                        if (!(!(var1 > var4))) {
                            _fun28937_ip = 327;
                            continue _fun28937
                        }
                    case 241:
                        var10 = var6;
                        var2 = global;
                        var1 = 'prototype';
                        for (var7 in var10)
                            case 258: {
                                case 267: var15 = var7;
                                var13 = var12;
                                if (!var13) {
                                    _fun28937_ip = 280;
                                    continue _fun28937
                                }
                                case 276: var13 = var1 === var15;
                                case 280: if (var13) {
                                    _fun28937_ip = 301;
                                    continue _fun28937
                                }
                                case 283: var16 = _closure1_slot0;
                                var14 = var16.call;
                                var14 = var14.bind(var16)(var6, var15);
                                var13 = !var14;
                                case 301: if (var13) {
                                    _fun28937_ip = 258;
                                    continue _fun28937
                                }
                                case 304: var14 = var0.push;
                                var13 = var2.String;
                                var13 = var13.bind(var3)(var15);
                                var13 = var14.bind(var0)(var13);
                                _fun28937_ip = 258;
                                continue _fun28937;
                                case 327: var1 = var6.length;
                                var1 = var4 < var1;
                                var2 = global;
                                var4 = 0;
                                if (!var1) {
                                    _fun28937_ip = 376;
                                    continue _fun28937
                                }
                                case 343: var7 = var0.push;
                                var1 = var2.String;
                                var1 = var1.bind(var3)(var4);
                                var1 = var7.bind(var0)(var1);
                                var4 = var4 + 1;
                                var1 = var6.length;
                                if (var4 < var1) {
                                    _fun28937_ip = 343;
                                    continue _fun28937
                                }
                            }
                    case 376:
                        var1 = _closure1_slot3;
                        if (!var1) {
                            _fun28937_ip = 552;
                            continue _fun28937
                        }
                    case 386:
                        var1 = var6;
                        var2 = global;
                        var2 = var2.window;
                        var4 = 'undefined';
                        var2 = typeof var2;
                        if (!(var4 !== var2)) {
                            _fun28937_ip = 437;
                            continue _fun28937
                        }
                    case 407:
                        var2 = _closure1_slot7;
                        if (!var2) {
                            _fun28937_ip = 437;
                            continue _fun28937
                        }
                    case 414: // try_start_0
                        var4 = _closure1_slot6;
                        var2 = var1;
                        var2 = var4.bind(var3)(var2);
                    case 426: // try_end0
                        var4 = var2;
                        _fun28937_ip = 446;
                        continue _fun28937;
                    case 431: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var4 = false;
                        _fun28937_ip = 446;
                        continue _fun28937;
                    case 437:
                        var2 = _closure1_slot6;
                        var4 = var2.bind(var3)(var1);
                    case 446:
                        var1 = _closure1_slot5;
                        var1 = var1.length;
                        var3 = 0;
                        var1 = var3 < var1;
                        var2 = 'constructor';
                        if (!var1) {
                            _fun28937_ip = 552;
                            continue _fun28937
                        }
                    case 468:
                        var1 = var4;
                        if (!var1) {
                            _fun28937_ip = 486;
                            continue _fun28937
                        }
                    case 474:
                        var7 = _closure1_slot5;
                        var7 = var7[var3];
                        var1 = var2 === var7;
                    case 486:
                        if (var1) {
                            _fun28937_ip = 515;
                            continue _fun28937
                        }
                    case 489:
                        var9 = _closure1_slot0;
                        var8 = var9.call;
                        var7 = _closure1_slot5;
                        var7 = var7[var3];
                        var7 = var8.bind(var9)(var6, var7);
                        var1 = !var7;
                    case 515:
                        if (var1) {
                            _fun28937_ip = 536;
                            continue _fun28937
                        }
                    case 518:
                        var7 = var0.push;
                        var1 = _closure1_slot5;
                        var1 = var1[var3];
                        var1 = var7.bind(var0)(var1);
                    case 536:
                        var3 = var3 + 1;
                        var1 = _closure1_slot5;
                        var1 = var1.length;
                        if (var3 < var1) {
                            _fun28937_ip = 468;
                            continue _fun28937
                        }
                    case 552:
                        return var0;
                }
            };
        case 391:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3354]);