// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun3159: for (var _fun3159_ip = 0;;) switch (_fun3159_ip) {
        case 0:
            var6 = require;
            var1 = module;
            var3 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var7;
            var0 = function() {
                _fun3160: for (var _fun3160_ip = 0;;) switch (_fun3160_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 70: // try_end0
                        _fun3160_ip = 74;
                        continue _fun3160;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot10 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot10 = var0;
            var0 = function arg0() {
                _fun3163: for (var _fun3163_ip = 0;;) switch (_fun3163_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = _closure1_slot9;
                        var1 = var2.get;
                        var2 = var1.bind(var2)(var0);
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun3163_ip = 28;
                            continue _fun3163
                        }
                    case 26:
                        return var2;
                    case 28:
                        var2 = global;
                        var2 = var2.TypeError;
                        var3 = 'null';
                        if (!(var1 !== var0)) {
                            _fun3163_ip = 47;
                            continue _fun3163
                        }
                    case 44:
                        var3 = typeof var0;
                    case 47:
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = "Expected 'this' to be an 'AbortController' object, but got ";
                        var4 = var0 + var3;
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot11 = var0;
            var0 = 0;
            var2 = var7[var0];
            var0 = undefined;
            var2 = var6.bind(var0)(var2);
            var _closure1_slot2 = var2;
            var2 = 1;
            var2 = var7[var2];
            var2 = var6.bind(var0)(var2);
            var _closure1_slot3 = var2;
            var2 = 2;
            var2 = var7[var2];
            var2 = var6.bind(var0)(var2);
            var _closure1_slot4 = var2;
            var2 = 3;
            var2 = var7[var2];
            var2 = var6.bind(var0)(var2);
            var _closure1_slot5 = var2;
            var2 = 4;
            var2 = var7[var2];
            var2 = var6.bind(var0)(var2);
            var _closure1_slot6 = var2;
            var5 = global;
            var10 = var5.Object;
            var9 = var10.defineProperty;
            var4 = {};
            var12 = true;
            var4.value = var12;
            var2 = '__esModule';
            var2 = var9.bind(var10)(var3, var2, var4);
            var4 = 5;
            var2 = var7[var4];
            var2 = var6.bind(var0)(var2);
            var9 = var2.EventTarget;
            var2 = function(arg0) { // Environment: var8
                var3 = function() {
                    _fun3165: for (var _fun3165_ip = 0;;) switch (_fun3165_ip) {
                        case 0:
                            var3 = this;
                            var0 = _closure1_slot2;
                            var1 = _closure2_slot0;
                            var2 = undefined;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot5;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot4;
                            var0 = _closure1_slot10;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun3165_ip = 62;
                                continue _fun3165
                            }
                        case 49:
                            var0 = var8.apply;
                            var0 = var0.bind(var8)(var3, var2);
                            _fun3165_ip = 100;
                            continue _fun3165;
                        case 62:
                            var5 = global;
                            var7 = var5.Reflect;
                            var6 = var7.construct;
                            var4 = _closure1_slot5;
                            var4 = var4.bind(var2)(var3);
                            var5 = var4.constructor;
                            var4 = new Array(0);
                            var0 = var6.bind(var7)(var8, var4, var5);
                        case 100:
                            var0 = var1.bind(var2)(var3, var0);
                            var0 = global;
                            var2 = var0.TypeError;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = 'AbortSignal cannot be constructed directly';
                            var12 = var1;
                            var0 = new var12[var2](var11, var10);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var _closure2_slot0 = var3;
                var5 = _closure1_slot6;
                var2 = undefined;
                var4 = arg0;
                var4 = var5.bind(var2)(var3, var4);
                var1 = _closure1_slot3;
                var4 = {};
                var5 = 'aborted';
                var4.key = var5;
                var0 = function() {
                    _fun3166: for (var _fun3166_ip = 0;;) switch (_fun3166_ip) {
                        case 0:
                            var0 = this;
                            var2 = _closure1_slot8;
                            var1 = var2.get;
                            var1 = var1.bind(var2)(var0);
                            var3 = 'boolean';
                            var2 = typeof var1;
                            if (!(var3 === var2)) {
                                _fun3166_ip = 33;
                                continue _fun3166
                            }
                        case 31:
                            return var1;
                        case 33:
                            var1 = global;
                            var2 = var1.TypeError;
                            var3 = 'null';
                            var1 = null;
                            if (!(var1 !== var0)) {
                                _fun3166_ip = 54;
                                continue _fun3166
                            }
                        case 51:
                            var3 = typeof var0;
                        case 54:
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var0 = "Expected 'this' to be an 'AbortSignal' object, but got ";
                            var4 = var0 + var3;
                            var5 = var1;
                            var0 = new var5[var2](var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var4.get = var0;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var2 = var2.bind(var0)(var9);
            var _closure1_slot7 = var2;
            var4 = var7[var4];
            var9 = var6.bind(var0)(var4);
            var7 = var9.defineEventAttribute;
            var6 = var2.prototype;
            var4 = 'abort';
            var4 = var7.bind(var9)(var6, var4);
            var4 = var5.WeakMap;
            var6 = var4.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var4
                }
            });
            var17 = var6;
            var4 = new var17[var4](var16);
            var4 = var4 instanceof Object ? var4 : var6;
            var _closure1_slot8 = var4;
            var9 = var5.Object;
            var7 = var9.defineProperties;
            var6 = var2.prototype;
            var4 = {};
            var10 = {};
            var10.enumerable = var12;
            var4.aborted = var10;
            var4 = var7.bind(var9)(var6, var4);
            var4 = var5.Symbol;
            var7 = 'function';
            var4 = typeof var4;
            var4 = var7 === var4;
            if (!var4) {
                _fun3159_ip = 323;
                continue _fun3159
            }
        case 300:
            var6 = var5.Symbol;
            var6 = var6.toStringTag;
            var9 = 'symbol';
            var6 = typeof var6;
            var4 = var9 === var6;
        case 323:
            if (!var4) {
                _fun3159_ip = 371;
                continue _fun3159
            }
        case 326:
            var11 = var5.Object;
            var10 = var11.defineProperty;
            var9 = var2.prototype;
            var4 = var5.Symbol;
            var6 = var4.toStringTag;
            var4 = {
                'configurable': true,
                'value': 'AbortSignal'
            };
            var4 = var10.bind(var11)(var9, var6, var4);
        case 371:
            var4 = function() { // Environment: var8
                var3 = _closure1_slot3;
                var2 = function() {
                    var4 = this;
                    var2 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var4, var1);
                    var3 = _closure1_slot9;
                    var2 = var3.set;
                    var1 = global;
                    var7 = var1.Object;
                    var6 = var7.create;
                    var1 = _closure1_slot7;
                    var1 = var1.prototype;
                    var1 = var6.bind(var7)(var1);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 5;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var7 = var6.EventTarget;
                    var6 = var7.call;
                    var6 = var6.bind(var7)(var1);
                    var7 = _closure1_slot8;
                    var6 = var7.set;
                    var5 = false;
                    var5 = var6.bind(var7)(var1, var5);
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'signal';
                var0.key = var1;
                var1 = function() {
                    var2 = _closure1_slot11;
                    var1 = undefined;
                    var0 = this;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0.get = var1;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = {};
                var5 = 'abort';
                var0.key = var5;
                var4 = function() {
                    _fun3170: for (var _fun3170_ip = 0;;) switch (_fun3170_ip) {
                        case 0:
                            var3 = _closure1_slot11;
                            var0 = undefined;
                            var2 = this;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure1_slot8;
                            var2 = var4.get;
                            var4 = var2.bind(var4)(var3);
                            var2 = false;
                            if (!(var2 === var4)) {
                                _fun3170_ip = 75;
                                continue _fun3170
                            }
                        case 37:
                            var4 = _closure1_slot8;
                            var2 = var4.set;
                            var1 = true;
                            var1 = var2.bind(var4)(var3, var1);
                            var2 = var3.dispatchEvent;
                            var1 = {};
                            var4 = 'abort';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                        case 75:
                            return var0;
                    }
                };
                var0.value = var4;
                var1[1] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var4 = var4.bind(var0)();
            var6 = var5.WeakMap;
            var9 = var6.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var6
                }
            });
            var17 = var9;
            var6 = new var17[var6](var16);
            var6 = var6 instanceof Object ? var6 : var9;
            var _closure1_slot9 = var6;
            var10 = var5.Object;
            var9 = var10.defineProperties;
            var8 = var4.prototype;
            var6 = {};
            var11 = {};
            var11.enumerable = var12;
            var6.signal = var11;
            var11 = {};
            var11.enumerable = var12;
            var6.abort = var11;
            var6 = var9.bind(var10)(var8, var6);
            var6 = var5.Symbol;
            var6 = typeof var6;
            var6 = var7 === var6;
            if (!var6) {
                _fun3159_ip = 495;
                continue _fun3159
            }
        case 472:
            var7 = var5.Symbol;
            var7 = var7.toStringTag;
            var8 = 'symbol';
            var7 = typeof var7;
            var6 = var8 === var7;
        case 495:
            if (!var6) {
                _fun3159_ip = 543;
                continue _fun3159
            }
        case 498:
            var9 = var5.Object;
            var8 = var9.defineProperty;
            var7 = var4.prototype;
            var5 = var5.Symbol;
            var6 = var5.toStringTag;
            var5 = {
                'configurable': true,
                'value': 'AbortController'
            };
            var5 = var8.bind(var9)(var7, var6, var5);
        case 543:
            var3.AbortController = var4;
            var3.AbortSignal = var2;
            var3.default = var4;
            var1.exports = var4;
            var3 = var1.exports;
            var5 = var1.exports;
            var5.default = var4;
            var3.AbortController = var4;
            var1 = var1.exports;
            var1.AbortSignal = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 229]);