// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45991: for (var _fun45991_ip = 0;;) switch (_fun45991_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var3 = this;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = var3;
            if (!var0) {
                _fun45991_ip = 34;
                continue _fun45991
            }
        case 28:
            var0 = var3.__extends;
        case 34:
            if (var0) {
                _fun45991_ip = 51;
                continue _fun45991
            }
        case 37:
            var3 = function arg0, arg1() {
                _fun45992: for (var _fun45992_ip = 0;;) switch (_fun45992_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun45992_ip = 47;
                            continue _fun45992
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun45992_ip = 44;
                            continue _fun45992
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
                            _fun45992_ip = 55;
                            continue _fun45992
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun45994: for (var _fun45994_ip = 0;;) switch (_fun45994_ip) {
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
                                                _fun45994_ip = 19;
                                                continue _fun45994
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun45994_ip = 19;
                                            continue _fun45994;
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
                _fun45995: for (var _fun45995_ip = 0;;) switch (_fun45995_ip) {
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
                            _fun45995_ip = 34;
                            continue _fun45995
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun45995_ip = 114;
                            continue _fun45995
                        }
                    case 34:
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun45995_ip = 88;
                            continue _fun45995
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
                        _fun45995_ip = 106;
                        continue _fun45995;
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
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = undefined;
            var2.GridLayoutProvider = var0;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.LayoutProvider;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function arg0, arg1, arg2, arg3, arg4() {
                    _fun45998: for (var _fun45998_ip = 0;;) switch (_fun45998_ip) {
                        case 0:
                            var2 = arg4;
                            var3 = this;
                            var6 = _closure2_slot0;
                            var5 = var6.call;
                            var4 = arg1;
                            var0 = function(arg0, arg1, arg2) { // Environment: var1
                                var3 = _closure3_slot0;
                                var2 = var3.setLayout;
                                var1 = arg1;
                                var0 = arg2;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var5.bind(var6)(var3, var4, var0);
                            if (var0) {
                                _fun45998_ip = 41;
                                continue _fun45998
                            }
                        case 38:
                            var0 = var3;
                        case 41:
                            var _closure3_slot0 = var0;
                            var1 = arg3;
                            var0._getHeightOrWidth = var1;
                            var1 = arg2;
                            var0._getSpan = var1;
                            var1 = arg0;
                            var0._maxSpan = var1;
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = 1;
                            if (var3) {
                                _fun45998_ip = 87;
                                continue _fun45998
                            }
                        case 84:
                            var1 = var2;
                        case 87:
                            var0._acceptableRelayoutDelta = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot3;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var3 = var0.prototype;
                var2 = function(arg0, arg1, arg2) { // Environment: var1
                    var8 = arg0;
                    var7 = this;
                    var0 = arg1;
                    var7._isHorizontal = var0;
                    var7._renderWindowSize = var8;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var6 = var0.GridLayoutManager;
                    var13 = var7._getSpan;
                    var12 = var7._maxSpan;
                    var11 = var7._acceptableRelayoutDelta;
                    var10 = var7._isHorizontal;
                    var0 = var6.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = arg2;
                    var16 = var1;
                    var15 = var7;
                    var14 = var8;
                    var0 = new var16[var6](var15, var14, var13, var12, var11, var10, var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var3.newLayoutManager = var2;
                var2 = var0.prototype;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun46001: for (var _fun46001_ip = 0;;) switch (_fun46001_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = arg1;
                            var0 = this;
                            var4 = var0._maxSpan;
                            var3 = var0._getSpan;
                            var3 = var3.bind(var0)(var1);
                            if (!(!(var3 > var4))) {
                                _fun46001_ip = 166;
                                continue _fun46001
                            }
                        case 33:
                            var5 = var0._renderWindowSize;
                            if (var5) {
                                _fun46001_ip = 78;
                                continue _fun46001
                            }
                        case 42:
                            var5 = global;
                            var7 = var5.Error;
                            var5 = var7.prototype;
                            var6 = Object.create(var5, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var8 = 'setLayout called before layoutmanager was created, cannot be handled';
                            var9 = var6;
                            var5 = new var9[var7](var8, var7);
                            var5 = var5 instanceof Object ? var5 : var6;
                            throw var5;
                        case 78:
                            var6 = var0._isHorizontal;
                            var5 = var0._getHeightOrWidth;
                            var5 = var5.bind(var0)(var1);
                            if (var6) {
                                _fun46001_ip = 131;
                                continue _fun46001
                            }
                        case 98:
                            var2.height = var5;
                            var6 = var0._renderWindowSize;
                            var6 = var6.width;
                            var6 = var6 / var4;
                            var6 = var6 * var3;
                            var2.width = var6;
                            _fun46001_ip = 162;
                            continue _fun46001;
                        case 131:
                            var2.width = var5;
                            var0 = var0._renderWindowSize;
                            var0 = var0.height;
                            var0 = var0 / var4;
                            var0 = var0 * var3;
                            var2.height = var0;
                        case 162:
                            var0 = undefined;
                            return var0;
                        case 166:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = 'Item span for index ';
                            var3 = var0 + var1;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var0 = ' is more than the max span';
                            var8 = var3 + var0;
                            var9 = var1;
                            var0 = new var9[var2](var8, var7);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var2.setLayout = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.GridLayoutProvider = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5157, 5154]);