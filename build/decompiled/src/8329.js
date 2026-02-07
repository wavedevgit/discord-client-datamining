// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun67310: for (var _fun67310_ip = 0;;) switch (_fun67310_ip) {
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
            case 72: // try_end0
                _fun67310_ip = 76;
                continue _fun67310;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var3 = true;
    var6.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var6);
    var2.HMAC = var0;
    var2.hmac = var0;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.Hash;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0, arg1() {
            _fun67314: for (var _fun67314_ip = 0;;) switch (_fun67314_ip) {
                case 0:
                    var4 = arg0;
                    var5 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var5, var2);
                    var0 = _closure1_slot5;
                    var10 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun67314_ip = 65;
                        continue _fun67314
                    }
                case 52:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var3);
                    _fun67314_ip = 103;
                    continue _fun67314;
                case 65:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var3)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 103:
                    var0 = var2.bind(var3)(var5, var0);
                    var2 = false;
                    var0.finished = var2;
                    var0.destroyed = var2;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 5;
                    var1 = var5[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.hash;
                    var1 = var1.bind(var3)(var4);
                    var1 = 6;
                    var1 = var5[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.toBytes;
                    var1 = arg1;
                    var7 = var2.bind(var3)(var1);
                    var1 = var4.create;
                    var1 = var1.bind(var4)();
                    var0.iHash = var1;
                    var1 = var0.iHash;
                    var1 = var1.update;
                    var2 = 'function';
                    var1 = typeof var1;
                    if (!(var2 === var1)) {
                        _fun67314_ip = 491;
                        continue _fun67314
                    }
                case 220:
                    var1 = var0.iHash;
                    var1 = var1.blockLen;
                    var0.blockLen = var1;
                    var1 = var0.iHash;
                    var1 = var1.outputLen;
                    var0.outputLen = var1;
                    var6 = var0.blockLen;
                    var1 = global;
                    var1 = var1.Uint8Array;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var14 = var2;
                    var13 = var6;
                    var1 = new var14[var1](var13, var12);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var2 = var3.set;
                    var5 = var7.length;
                    var1 = var7;
                    if (!(var5 > var6)) {
                        _fun67314_ip = 340;
                        continue _fun67314
                    }
                case 310:
                    var5 = var4.create;
                    var6 = var5.bind(var4)();
                    var5 = var6.update;
                    var6 = var5.bind(var6)(var7);
                    var5 = var6.digest;
                    var1 = var5.bind(var6)();
                case 340:
                    var1 = var2.bind(var3)(var1);
                    var1 = var3.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    var6 = 54;
                    var5 = 0;
                    if (!var1) {
                        _fun67314_ip = 388;
                        continue _fun67314
                    }
                case 364:
                    var1 = var3[var5];
                    var1 = var1 ^ var6;
                    var3[var5] = var1;
                    var5 = var5 + 1;
                    var1 = var3.length;
                    if (var5 < var1) {
                        _fun67314_ip = 364;
                        continue _fun67314
                    }
                case 388:
                    var5 = var0.iHash;
                    var1 = var5.update;
                    var1 = var1.bind(var5)(var3);
                    var1 = var4.create;
                    var1 = var1.bind(var4)();
                    var0.oHash = var1;
                    var1 = var3.length;
                    var1 = var2 < var1;
                    var5 = 106;
                    var4 = 0;
                    if (!var1) {
                        _fun67314_ip = 461;
                        continue _fun67314
                    }
                case 437:
                    var1 = var3[var4];
                    var1 = var1 ^ var5;
                    var3[var4] = var1;
                    var4 = var4 + 1;
                    var1 = var3.length;
                    if (var4 < var1) {
                        _fun67314_ip = 437;
                        continue _fun67314
                    }
                case 461:
                    var4 = var0.oHash;
                    var1 = var4.update;
                    var1 = var1.bind(var4)(var3);
                    var1 = var3.fill;
                    var1 = var1.bind(var3)(var2);
                    return var0;
                case 491:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = 'Expected instance of class which extends utils.Hash';
                    var14 = var1;
                    var0 = new var14[var2](var13, var12);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'update';
        var4.key = var0;
        var0 = function arg0() {
            var0 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.exists;
            var1 = var1.bind(var2)(var0);
            var3 = var0.iHash;
            var2 = var3.update;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'digestInto';
        var4.key = var6;
        var6 = function arg0() {
            var4 = arg0;
            var2 = this;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 5;
            var6 = var5[var1];
            var0 = undefined;
            var6 = var3.bind(var0)(var6);
            var6 = var6.exists;
            var6 = var6.bind(var0)(var2);
            var1 = var5[var1];
            var1 = var3.bind(var0)(var1);
            var3 = var1.bytes;
            var1 = var2.outputLen;
            var1 = var3.bind(var0)(var4, var1);
            var1 = true;
            var2.finished = var1;
            var3 = var2.iHash;
            var1 = var3.digestInto;
            var1 = var1.bind(var3)(var4);
            var3 = var2.oHash;
            var1 = var3.update;
            var1 = var1.bind(var3)(var4);
            var3 = var2.oHash;
            var1 = var3.digestInto;
            var1 = var1.bind(var3)(var4);
            var1 = var2.destroy;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'digest';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var0 = global;
            var3 = var0.Uint8Array;
            var0 = var2.oHash;
            var4 = var0.outputLen;
            var1 = var3.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var5 = var1;
            var0 = new var5[var3](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            var1 = var2.digestInto;
            var1 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = '_cloneInto';
        var4.key = var6;
        var6 = function arg0() {
            _fun67318: for (var _fun67318_ip = 0;;) switch (_fun67318_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    if (var0) {
                        _fun67318_ip = 47;
                        continue _fun67318
                    }
                case 9:
                    var2 = global;
                    var5 = var2.Object;
                    var4 = var5.create;
                    var3 = var2.Object;
                    var2 = var3.getPrototypeOf;
                    var3 = var2.bind(var3)(var1);
                    var2 = {};
                    var0 = var4.bind(var5)(var3, var2);
                case 47:
                    var4 = var1.oHash;
                    var3 = var1.iHash;
                    var6 = var1.finished;
                    var5 = var1.destroyed;
                    var2 = var1.blockLen;
                    var1 = var1.outputLen;
                    var0.finished = var6;
                    var0.destroyed = var5;
                    var0.blockLen = var2;
                    var0.outputLen = var1;
                    var2 = var4._cloneInto;
                    var1 = var0.oHash;
                    var1 = var2.bind(var4)(var1);
                    var0.oHash = var1;
                    var2 = var3._cloneInto;
                    var1 = var0.iHash;
                    var1 = var2.bind(var3)(var1);
                    var0.iHash = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'destroy';
        var4.key = var6;
        var5 = function() {
            var0 = this;
            var1 = true;
            var0.destroyed = var1;
            var2 = var0.oHash;
            var1 = var2.destroy;
            var1 = var1.bind(var2)();
            var1 = var0.iHash;
            var0 = var1.destroy;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var _closure1_slot7 = var3;
    var2.HMAC = var3;
    var3 = function arg0, arg1, arg2() {
        var3 = _closure1_slot7;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var4 = arg1;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var2 = var0 instanceof Object ? var0 : var1;
        var1 = var2.update;
        var0 = arg2;
        var1 = var1.bind(var2)(var0);
        var0 = var1.digest;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.hmac = var3;
    var2 = var2.hmac;
    var1 = function(arg0, arg1) { // Environment: var1
        var3 = _closure1_slot7;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var4 = arg1;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.create = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8326, 8325]);