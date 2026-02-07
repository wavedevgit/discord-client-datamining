// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun46415: for (var _fun46415_ip = 0;;) switch (_fun46415_ip) {
        case 0:
            var2 = exports;
            var3 = this;
            var0 = require;
            var _closure1_slot0 = var0;
            var0 = dependencyMap;
            var _closure1_slot1 = var0;
            var0 = var3;
            if (!var0) {
                _fun46415_ip = 34;
                continue _fun46415
            }
        case 28:
            var0 = var3.__extends;
        case 34:
            if (var0) {
                _fun46415_ip = 51;
                continue _fun46415
            }
        case 37:
            var3 = function arg0, arg1() {
                _fun46416: for (var _fun46416_ip = 0;;) switch (_fun46416_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun46416_ip = 47;
                            continue _fun46416
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun46416_ip = 44;
                            continue _fun46416
                        }
                    case 39:
                        var1 = function(arg0, arg1) { // Environment: var0
                            var1 = arg1;
                            var0 = arg0;
                            var0.__proto__ = var1;
                            var0 = undefined;
                            return var0;
                        };
                    case 44:
                        var3 = var1;
                    case 47:
                        if (var3) {
                            _fun46416_ip = 55;
                            continue _fun46416
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun46418: for (var _fun46418_ip = 0;;) switch (_fun46418_ip) {
                                case 0:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var4 = var6;
                                    var0 = global;
                                    for (var1 in var4)
                                        case 19: {
                                            case 28: var9 = var1;
                                            var8 = var0.Object;
                                            var8 = var8.prototype;
                                            var10 = var8.hasOwnProperty;
                                            var8 = var10.call;
                                            var8 = var8.bind(var10)(var6, var9);
                                            if (!var8) {
                                                _fun46418_ip = 19;
                                                continue _fun46418
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun46418_ip = 19;
                                            continue _fun46418;
                                        }
                                case 72:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                    case 55:
                        _closure1_slot2 = var3;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot2 = var3;
            var0 = function(arg0, arg1) { // Environment: var1
                _fun46419: for (var _fun46419_ip = 0;;) switch (_fun46419_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var2;
                        var1 = function() {
                            var1 = _closure2_slot0;
                            var0 = this;
                            var0.constructor = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var4 = 'function';
                        var0 = typeof var3;
                        if (!(var4 !== var0)) {
                            _fun46419_ip = 34;
                            continue _fun46419
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun46419_ip = 114;
                            continue _fun46419
                        }
                    case 34:
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun46419_ip = 88;
                            continue _fun46419
                        }
                    case 55:
                        var4 = var3.prototype;
                        var1.prototype = var4;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var4;
                        var1 = new var8[var1](var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        _fun46419_ip = 106;
                        continue _fun46419;
                    case 88:
                        var4 = global;
                        var5 = var4.Object;
                        var4 = var5.create;
                        var1 = var4.bind(var5)(var3);
                    case 106:
                        var2.prototype = var1;
                        return var0;
                    case 114:
                        var0 = global;
                        var2 = var0.TypeError;
                        var1 = var0.String;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var3);
                        var0 = 'Class extends value ';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = ' is not a constructor or null';
                        var7 = var3 + var0;
                        var8 = var1;
                        var0 = new var8[var2](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 51:
            var _closure1_slot3 = var0;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = undefined;
            var2.LayoutManager = var0;
            var2.WrapGridLayoutManager = var0;
            var3 = function() { // Environment: var1
                var0 = function() {
                    var0 = undefined;
                    return var0;
                };
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun46423: for (var _fun46423_ip = 0;;) switch (_fun46423_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            var0 = var1.getLayouts;
                            var1 = var0.bind(var1)();
                            var0 = var1.length;
                            if (!(!(var0 > var2))) {
                                _fun46423_ip = 105;
                                continue _fun46423
                            }
                        case 25:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 0;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var4 = var0.default;
                            var0 = {};
                            var3 = 'No layout available for index: ';
                            var3 = var3 + var2;
                            var0.message = var3;
                            var3 = 'LayoutUnavailableException';
                            var0.type = var3;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var6 = var3;
                            var5 = var0;
                            var0 = new var6[var4](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var3;
                            throw var0;
                        case 105:
                            var0 = {};
                            var3 = var1[var2];
                            var3 = var3.x;
                            var0.x = var3;
                            var1 = var1[var2];
                            var1 = var1.y;
                            var0.y = var1;
                            return var0;
                    }
                };
                var3.getOffsetForIndex = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var3.getStyleOverridesForIndex = var2;
                var2 = var0.prototype;
                var1 = function(arg0) { // Environment: var1
                    _fun46425: for (var _fun46425_ip = 0;;) switch (_fun46425_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            var0 = var1.getLayouts;
                            var0 = var0.bind(var1)();
                            var1 = var0.length;
                            if (!(var2 < var1)) {
                                _fun46425_ip = 40;
                                continue _fun46425
                            }
                        case 25:
                            var3 = var0.splice;
                            var1 = 1;
                            var1 = var3.bind(var0)(var2, var1);
                        case 40:
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun46425_ip = 71;
                                continue _fun46425
                            }
                        case 46:
                            var2 = var0.length;
                            if (!(var2 > var1)) {
                                _fun46425_ip = 71;
                                continue _fun46425
                            }
                        case 55:
                            var0 = var0[var1];
                            var0.x = var1;
                            var0.y = var1;
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.removeLayout = var1;
                return var0;
            };
            var3 = var3.bind(var0)();
            var2.LayoutManager = var3;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function arg0, arg1, arg2, arg3() {
                    _fun46427: for (var _fun46427_ip = 0;;) switch (_fun46427_ip) {
                        case 0:
                            var2 = arg2;
                            var1 = arg3;
                            var3 = this;
                            var0 = undefined;
                            if (!(var0 === var2)) {
                                _fun46427_ip = 17;
                                continue _fun46427
                            }
                        case 15:
                            var2 = false;
                        case 17:
                            var4 = _closure2_slot0;
                            var0 = var4.call;
                            var0 = var0.bind(var4)(var3);
                            if (var0) {
                                _fun46427_ip = 40;
                                continue _fun46427
                            }
                        case 37:
                            var0 = var3;
                        case 40:
                            var3 = arg0;
                            var0._layoutProvider = var3;
                            var3 = arg1;
                            var0._window = var3;
                            var3 = 0;
                            var0._totalHeight = var3;
                            var0._totalWidth = var3;
                            var2 = !var2;
                            var2 = !var2;
                            var0._isHorizontal = var2;
                            if (var1) {
                                _fun46427_ip = 91;
                                continue _fun46427
                            }
                        case 87:
                            var1 = new Array(0);
                        case 91:
                            var0._layouts = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot3;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var1 = this;
                    var0 = {};
                    var2 = var1._totalHeight;
                    var0.height = var2;
                    var1 = var1._totalWidth;
                    var0.width = var1;
                    return var0;
                };
                var3.getContentDimension = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun46429: for (var _fun46429_ip = 0;;) switch (_fun46429_ip) {
                        case 0:
                            var1 = this;
                            var0 = _closure2_slot0;
                            var0 = var0.prototype;
                            var3 = var0.removeLayout;
                            var2 = var3.call;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = var1._layouts;
                            var2 = var0.length;
                            var0 = 0;
                            if (!(var0 === var2)) {
                                _fun46429_ip = 64;
                                continue _fun46429
                            }
                        case 52:
                            var1._totalHeight = var0;
                            var1._totalWidth = var0;
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.removeLayout = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._layouts;
                    return var0;
                };
                var3.getLayouts = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun46431: for (var _fun46431_ip = 0;;) switch (_fun46431_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            var0 = var1._layouts;
                            var0 = var0.length;
                            if (!(!(var0 > var2))) {
                                _fun46431_ip = 101;
                                continue _fun46431
                            }
                        case 21:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 0;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var4 = var0.default;
                            var0 = {};
                            var3 = 'No layout available for index: ';
                            var3 = var3 + var2;
                            var0.message = var3;
                            var3 = 'LayoutUnavailableException';
                            var0.type = var3;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var6 = var3;
                            var5 = var0;
                            var0 = new var6[var4](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var3;
                            throw var0;
                        case 101:
                            var0 = {};
                            var3 = var1._layouts;
                            var3 = var3[var2];
                            var3 = var3.x;
                            var0.x = var3;
                            var1 = var1._layouts;
                            var1 = var1[var2];
                            var1 = var1.y;
                            var0.y = var1;
                            return var0;
                    }
                };
                var3.getOffsetForIndex = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun46432: for (var _fun46432_ip = 0;;) switch (_fun46432_ip) {
                        case 0:
                            var0 = arg1;
                            var1 = this;
                            var2 = var1._layouts;
                            var1 = arg0;
                            var1 = var2[var1];
                            if (!var1) {
                                _fun46432_ip = 52;
                                continue _fun46432
                            }
                        case 22:
                            var2 = true;
                            var1.isOverridden = var2;
                            var2 = var0.width;
                            var1.width = var2;
                            var0 = var0.height;
                            var1.height = var0;
                        case 52:
                            var0 = true;
                            return var0;
                    }
                };
                var3.overrideLayout = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun46433: for (var _fun46433_ip = 0;;) switch (_fun46433_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = this;
                            var2 = var0._isHorizontal;
                            var3 = global;
                            var4 = var3.Math;
                            var3 = var4.min;
                            var0 = var0._window;
                            if (var2) {
                                _fun46433_ip = 58;
                                continue _fun46433
                            }
                        case 34:
                            var5 = var0.width;
                            var2 = var1.width;
                            var2 = var3.bind(var4)(var5, var2);
                            var1.width = var2;
                            _fun46433_ip = 80;
                            continue _fun46433;
                        case 58:
                            var2 = var0.height;
                            var0 = var1.height;
                            var0 = var3.bind(var4)(var2, var0);
                            var1.height = var0;
                        case 80:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.setMaxBounds = var2;
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun46434: for (var _fun46434_ip = 0;;) switch (_fun46434_ip) {
                        case 0:
                            var5 = arg1;
                            var2 = this;
                            var1 = var2._locateFirstNeighbourIndex;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = var2._layouts;
                            var6 = var0[var1];
                            var10 = 0;
                            var9 = 0;
                            if (!var6) {
                                _fun46434_ip = 58;
                                continue _fun46434
                            }
                        case 37:
                            var10 = var6.x;
                            var9 = var6.y;
                            var4 = var2._pointDimensionsToRect;
                            var4 = var4.bind(var2)(var6);
                        case 58:
                            var0 = var2._layouts;
                            var0 = var0.length;
                            var8 = {
                                'height': 0,
                                'width': 0
                            };
                            var12 = var1 < var5;
                            var7 = 1;
                            var6 = global;
                            var4 = 0;
                            var3 = var1;
                            var1 = 0;
                            if (!var12) {
                                _fun46434_ip = 560;
                                continue _fun46434
                            }
                        case 101:
                            var12 = var2._layouts;
                            var12 = var12[var3];
                            var14 = var2._layoutProvider;
                            var13 = var14.getLayoutTypeForIndex;
                            var19 = var13.bind(var14)(var3);
                            var13 = var3;
                            if (!var12) {
                                _fun46434_ip = 152;
                                continue _fun46434
                            }
                        case 134:
                            var14 = var12.isOverridden;
                            if (!var14) {
                                _fun46434_ip = 152;
                                continue _fun46434
                            }
                        case 143:
                            var14 = var12.type;
                            if (!(var14 !== var19)) {
                                _fun46434_ip = 173;
                                continue _fun46434
                            }
                        case 152:
                            var15 = var2._layoutProvider;
                            var14 = var15.setComputedLayout;
                            var14 = var14.bind(var15)(var19, var8, var13);
                            _fun46434_ip = 195;
                            continue _fun46434;
                        case 173:
                            var14 = var12.height;
                            var8.height = var14;
                            var12 = var12.width;
                            var8.width = var12;
                        case 195:
                            var12 = var2.setMaxBounds;
                            var12 = var12.bind(var2)(var8);
                            var14 = var2._checkBounds;
                            var24 = var2._isHorizontal;
                            var28 = var2;
                            var27 = var10;
                            var26 = var9;
                            var25 = var8;
                            var12 = var28[var14](var27, var26, var25, var24, var23);
                            var18 = var10;
                            var17 = var9;
                            var14 = var4;
                            var15 = var18;
                            var16 = var17;
                            var20 = var14;
                            if (var12) {
                                _fun46434_ip = 357;
                                continue _fun46434
                            }
                        case 255:
                            var12 = var2._isHorizontal;
                            if (var12) {
                                _fun46434_ip = 288;
                                continue _fun46434
                            }
                        case 264:
                            var21 = var17 + var14;
                            var12 = var2._totalHeight;
                            var12 = var12 + var14;
                            var2._totalHeight = var12;
                            var22 = 0;
                            _fun46434_ip = 310;
                            continue _fun46434;
                        case 288:
                            var22 = var18 + var14;
                            var23 = var2._totalWidth;
                            var23 = var23 + var14;
                            var2._totalWidth = var23;
                            var21 = 0;
                        case 310:
                            var23 = var2._checkBounds;
                            var24 = var2._isHorizontal;
                            var28 = var2;
                            var27 = var22;
                            var26 = var21;
                            var25 = var8;
                            var12 = var28[var23](var27, var26, var25, var24, var23);
                            var18 = var22;
                            var17 = var21;
                            var14 = 0;
                            var15 = var18;
                            var16 = var17;
                            var20 = 0;
                            if (!var12) {
                                _fun46434_ip = 255;
                                continue _fun46434
                            }
                        case 357:
                            var12 = var2._isHorizontal;
                            var18 = var6.Math;
                            var17 = var18.max;
                            if (var12) {
                                _fun46434_ip = 390;
                                continue _fun46434
                            }
                        case 377:
                            var12 = var8.height;
                            var12 = var17.bind(var18)(var20, var12);
                            _fun46434_ip = 401;
                            continue _fun46434;
                        case 390:
                            var14 = var8.width;
                            var12 = var17.bind(var18)(var20, var14);
                        case 401:
                            var14 = var0 - var7;
                            if (!(!(var13 > var14))) {
                                _fun46434_ip = 461;
                                continue _fun46434
                            }
                        case 409:
                            var14 = var2._layouts;
                            var17 = var14[var13];
                            var17.x = var15;
                            var17.y = var16;
                            var17.type = var19;
                            var14 = var8.width;
                            var17.width = var14;
                            var14 = var8.height;
                            var17.height = var14;
                            _fun46434_ip = 509;
                            continue _fun46434;
                        case 461:
                            var18 = var2._layouts;
                            var17 = var18.push;
                            var14 = {};
                            var14.x = var15;
                            var14.y = var16;
                            var20 = var8.height;
                            var14.height = var20;
                            var20 = var8.width;
                            var14.width = var20;
                            var14.type = var19;
                            var14 = var17.bind(var18)(var14);
                        case 509:
                            var14 = var2._isHorizontal;
                            if (var14) {
                                _fun46434_ip = 532;
                                continue _fun46434
                            }
                        case 518:
                            var14 = var8.width;
                            var10 = var15 + var14;
                            var9 = var16;
                            _fun46434_ip = 544;
                            continue _fun46434;
                        case 532:
                            var14 = var8.height;
                            var9 = var16 + var14;
                            var10 = var15;
                        case 544:
                            var3 = var13 + 1;
                            var4 = var12;
                            var1 = var4;
                            if (var3 < var5) {
                                _fun46434_ip = 101;
                                continue _fun46434
                            }
                        case 560:
                            if (!(var0 > var5)) {
                                _fun46434_ip = 586;
                                continue _fun46434
                            }
                        case 564:
                            var4 = var2._layouts;
                            var3 = var4.splice;
                            var0 = var0 - var5;
                            var0 = var3.bind(var4)(var5, var0);
                        case 586:
                            var0 = var2._setFinalDimensions;
                            var0 = var0.bind(var2)(var1);
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.relayoutFromIndex = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun46435: for (var _fun46435_ip = 0;;) switch (_fun46435_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = this;
                            var2 = var1._isHorizontal;
                            if (var2) {
                                _fun46435_ip = 28;
                                continue _fun46435
                            }
                        case 15:
                            var2 = var0.y;
                            var1._totalHeight = var2;
                            _fun46435_ip = 39;
                            continue _fun46435;
                        case 28:
                            var0 = var0.x;
                            var1._totalWidth = var0;
                        case 39:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3._pointDimensionsToRect = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun46436: for (var _fun46436_ip = 0;;) switch (_fun46436_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            var3 = var1._isHorizontal;
                            var0 = var1._window;
                            if (var3) {
                                _fun46436_ip = 50;
                                continue _fun46436
                            }
                        case 21:
                            var3 = var0.width;
                            var1._totalWidth = var3;
                            var3 = var1._totalHeight;
                            var3 = var3 + var2;
                            var1._totalHeight = var3;
                            _fun46436_ip = 77;
                            continue _fun46436;
                        case 50:
                            var0 = var0.height;
                            var1._totalHeight = var0;
                            var0 = var1._totalWidth;
                            var0 = var0 + var2;
                            var1._totalWidth = var0;
                        case 77:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3._setFinalDimensions = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun46437: for (var _fun46437_ip = 0;;) switch (_fun46437_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = this;
                            var0 = 0;
                            if (!(var0 !== var2)) {
                                _fun46437_ip = 83;
                                continue _fun46437
                            }
                        case 12:
                            var1 = 1;
                            var2 = var2 - var1;
                            var1 = var2;
                            if (!(var1 >= var0)) {
                                _fun46437_ip = 81;
                                continue _fun46437
                            }
                        case 26:
                            var5 = var3._isHorizontal;
                            var4 = var3._layouts;
                            var4 = var4[var2];
                            if (var5) {
                                _fun46437_ip = 59;
                                continue _fun46437
                            }
                        case 45:
                            var5 = var4.x;
                            var1 = var2;
                            if (!(var0 !== var5)) {
                                _fun46437_ip = 81;
                                continue _fun46437
                            }
                        case 57:
                            _fun46437_ip = 71;
                            continue _fun46437;
                        case 59:
                            var4 = var4.y;
                            var1 = var2;
                            if (!(var0 !== var4)) {
                                _fun46437_ip = 81;
                                continue _fun46437
                            }
                        case 71:
                            var2 = var2 - 1;
                            var1 = var2;
                            if (var1 >= var0) {
                                _fun46437_ip = 26;
                                continue _fun46437
                            }
                        case 81:
                            return var1;
                        case 83:
                            return var0;
                    }
                };
                var3._locateFirstNeighbourIndex = var2;
                var2 = var0.prototype;
                var1 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                    _fun46438: for (var _fun46438_ip = 0;;) switch (_fun46438_ip) {
                        case 0:
                            var2 = arg2;
                            var1 = this;
                            var0 = arg3;
                            if (var0) {
                                _fun46438_ip = 55;
                                continue _fun46438
                            }
                        case 12:
                            var3 = var2.width;
                            var0 = arg0;
                            var3 = var0 + var3;
                            var0 = var1._window;
                            var4 = var0.width;
                            var0 = 0.9;
                            var0 = var4 + var0;
                            var0 = var3 <= var0;
                            _fun46438_ip = 96;
                            continue _fun46438;
                        case 55:
                            var3 = var2.height;
                            var2 = arg1;
                            var2 = var2 + var3;
                            var1 = var1._window;
                            var3 = var1.height;
                            var1 = 0.9;
                            var1 = var3 + var1;
                            var0 = var2 <= var1;
                        case 96:
                            return var0;
                    }
                };
                var2._checkBounds = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.WrapGridLayoutManager = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5182]);