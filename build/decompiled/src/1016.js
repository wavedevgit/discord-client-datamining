// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = function() { // Original name: noop, environment: var0
        var0 = undefined;
        return var0;
    };
    var _closure1_slot2 = var2;
    var1 = function(arg0) { // Original name: Promise, environment: var0
        _fun10383: for (var _fun10383_ip = 0;;) switch (_fun10383_ip) {
            case 0:
                var3 = arg0;
                var2 = this;
                var1 = 'object';
                var0 = typeof var2;
                if (!(var1 === var0)) {
                    _fun10383_ip = 119;
                    continue _fun10383
                }
            case 17:
                var1 = 'function';
                var0 = typeof var3;
                if (!(var1 === var0)) {
                    _fun10383_ip = 83;
                    continue _fun10383
                }
            case 28:
                var0 = 0;
                var2._40 = var0;
                var2._65 = var0;
                var0 = null;
                var2._55 = var0;
                var2._72 = var0;
                var1 = _closure1_slot2;
                if (!(var3 !== var1)) {
                    _fun10383_ip = 79;
                    continue _fun10383
                }
            case 67:
                var1 = _closure1_slot9;
                var0 = undefined;
                var0 = var1.bind(var0)(var3, var2);
            case 79:
                var0 = undefined;
                return var0;
            case 83:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = "Promise constructor's argument is not a function";
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 119:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'Promises must be constructed via new';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot3 = var1;
    var3 = function(arg0, arg1) { // Original name: handle, environment: var0
        _fun10384: for (var _fun10384_ip = 0;;) switch (_fun10384_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var2._65;
                var4 = 3;
                var3 = var2;
                var2 = var3;
                if (!(var4 === var0)) {
                    _fun10384_ip = 47;
                    continue _fun10384
                }
            case 25:
                var5 = var3._55;
                var0 = var5._65;
                var3 = var5;
                var2 = var3;
                if (var4 === var0) {
                    _fun10384_ip = 25;
                    continue _fun10384
                }
            case 47:
                var3 = _closure1_slot3;
                var3 = var3._37;
                if (!var3) {
                    _fun10384_ip = 78;
                    continue _fun10384
                }
            case 63:
                var3 = _closure1_slot3;
                var0 = var3._37;
                var0 = var0.bind(var3)(var2);
            case 78:
                var0 = var2._65;
                var3 = 0;
                if (!(var3 !== var0)) {
                    _fun10384_ip = 107;
                    continue _fun10384
                }
            case 90:
                var4 = function(arg0, arg1) { // Original name: handleResolved, environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = global;
                    var2 = var0.setImmediate;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        _fun10386: for (var _fun10386_ip = 0;;) switch (_fun10386_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0._65;
                                var2 = 1;
                                if (!(var2 !== var0)) {
                                    _fun10386_ip = 32;
                                    continue _fun10386
                                }
                            case 20:
                                var0 = _closure3_slot1;
                                var4 = var0.onRejected;
                                _fun10386_ip = 42;
                                continue _fun10386;
                            case 32:
                                var0 = _closure3_slot1;
                                var4 = var0.onFulfilled;
                            case 42:
                                var0 = null;
                                if (!(var0 === var4)) {
                                    _fun10386_ip = 139;
                                    continue _fun10386
                                }
                            case 48:
                                var0 = _closure3_slot0;
                                var0 = var0._65;
                                if (!(var2 !== var0)) {
                                    _fun10386_ip = 102;
                                    continue _fun10386
                                }
                            case 62:
                                var5 = _closure1_slot6;
                                var0 = _closure3_slot1;
                                var3 = var0.promise;
                                var0 = _closure3_slot0;
                                var2 = var0._55;
                                var0 = undefined;
                                var0 = var5.bind(var0)(var3, var2);
                                _fun10386_ip = 247;
                                continue _fun10386;
                            case 102:
                                var5 = _closure1_slot5;
                                var0 = _closure3_slot1;
                                var3 = var0.promise;
                                var0 = _closure3_slot0;
                                var2 = var0._55;
                                var0 = undefined;
                                var0 = var5.bind(var0)(var3, var2);
                                _fun10386_ip = 247;
                                continue _fun10386;
                            case 139:
                                var0 = _closure3_slot0;
                                var3 = var0._55;
                                var2 = var4;
                                var0 = var3;
                            case 155: // try_start_0
                                var3 = var2;
                                var2 = var0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                            case 168: // try_end0
                                var5 = var0;
                                _fun10386_ip = 186;
                                continue _fun10386;
                            case 173: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                _closure1_slot0 = var2;
                                var5 = _closure1_slot1;
                            case 186:
                                var2 = _closure1_slot1;
                                if (!(var5 !== var2)) {
                                    _fun10386_ip = 221;
                                    continue _fun10386
                                }
                            case 197:
                                var4 = _closure1_slot5;
                                var2 = _closure3_slot1;
                                var3 = var2.promise;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3, var5);
                                _fun10386_ip = 247;
                                continue _fun10386;
                            case 221:
                                var3 = _closure1_slot6;
                                var1 = _closure3_slot1;
                                var2 = var1.promise;
                                var1 = _closure1_slot0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                            case 247:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = undefined;
                var4 = var4.bind(var0)(var2, var1);
                return var0;
            case 107:
                var0 = var2._40;
                if (!(var3 !== var0)) {
                    _fun10384_ip = 187;
                    continue _fun10384
                }
            case 117:
                var3 = var2._40;
                var0 = 1;
                if (!(var0 !== var3)) {
                    _fun10384_ip = 150;
                    continue _fun10384
                }
            case 130:
                var3 = var2._72;
                var0 = var3.push;
                var0 = var0.bind(var3)(var1);
                var0 = undefined;
                _fun10384_ip = 185;
                continue _fun10384;
            case 150:
                var3 = 2;
                var2._40 = var3;
                var4 = var2._72;
                var3 = new Array(2);
                var3[0] = var4;
                var3[1] = var1;
                var2._72 = var3;
                var0 = undefined;
            case 185:
                _fun10384_ip = 204;
                continue _fun10384;
            case 187:
                var3 = 1;
                var2._40 = var3;
                var2._72 = var1;
                var0 = undefined;
            case 204:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var3 = function(arg0, arg1) { // Original name: resolve, environment: var0
        _fun10387: for (var _fun10387_ip = 0;;) switch (_fun10387_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                if (!(var1 !== var3)) {
                    _fun10387_ip = 201;
                    continue _fun10387
                }
            case 13:
                if (!var1) {
                    _fun10387_ip = 100;
                    continue _fun10387
                }
            case 16:
                var2 = typeof var1;
                var0 = 'object';
                if (!(var0 !== var2)) {
                    _fun10387_ip = 35;
                    continue _fun10387
                }
            case 27:
                var0 = 'function';
                if (!(var0 === var2)) {
                    _fun10387_ip = 100;
                    continue _fun10387
                }
            case 35:
                var0 = var1;
            case 38: // try_start_0
                var4 = var0.then;
            case 43: // try_end0
                _fun10387_ip = 58;
                continue _fun10387;
            case 45: // catch_target0
                CatchBlockStart(arg_register = 2);
                _closure1_slot0 = var2;
                var4 = _closure1_slot1;
            case 58:
                var2 = _closure1_slot1;
                if (!(var4 !== var2)) {
                    _fun10387_ip = 183;
                    continue _fun10387
                }
            case 69:
                var2 = var3.then;
                if (!(var4 === var2)) {
                    _fun10387_ip = 89;
                    continue _fun10387
                }
            case 78:
                var2 = _closure1_slot3;
                var2 = var1 instanceof var2;
                if (var2) {
                    _fun10387_ip = 155;
                    continue _fun10387
                }
            case 89:
                var5 = 'function';
                var2 = typeof var4;
                if (!(var5 !== var2)) {
                    _fun10387_ip = 131;
                    continue _fun10387
                }
            case 100:
                var2 = 1;
                var3._65 = var2;
                var3._55 = var1;
                var5 = _closure1_slot7;
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                return var2;
            case 131:
                var5 = _closure1_slot9;
                var2 = var4.bind;
                var4 = var2.bind(var4)(var1);
                var2 = undefined;
                var4 = var5.bind(var2)(var4, var3);
                return var2;
            case 155:
                var2 = 3;
                var3._65 = var2;
                var3._55 = var1;
                var2 = _closure1_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            case 183:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            case 201:
                var2 = _closure1_slot6;
                var0 = global;
                var4 = var0.TypeError;
                var0 = var4.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = 'A promise cannot be resolved with itself.';
                var8 = var1;
                var0 = new var8[var4](var7, var6);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = undefined;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = function(arg0, arg1) { // Original name: reject, environment: var0
        _fun10388: for (var _fun10388_ip = 0;;) switch (_fun10388_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = 2;
                var2._65 = var0;
                var2._55 = var4;
                var1 = _closure1_slot3;
                var1 = var1._87;
                if (!var1) {
                    _fun10388_ip = 53;
                    continue _fun10388
                }
            case 37:
                var3 = _closure1_slot3;
                var1 = var3._87;
                var1 = var1.bind(var3)(var2, var4);
            case 53:
                var1 = _closure1_slot7;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = function(arg0) { // Original name: finale, environment: var0
        _fun10389: for (var _fun10389_ip = 0;;) switch (_fun10389_ip) {
            case 0:
                var1 = arg0;
                var2 = var1._40;
                var0 = 1;
                if (!(var0 === var2)) {
                    _fun10389_ip = 45;
                    continue _fun10389
                }
            case 16:
                var3 = _closure1_slot4;
                var2 = var1._72;
                var0 = undefined;
                var0 = var3.bind(var0)(var1, var2);
                var0 = null;
                var1._72 = var0;
            case 45:
                var2 = var1._40;
                var0 = 2;
                if (!(var0 === var2)) {
                    _fun10389_ip = 129;
                    continue _fun10389
                }
            case 58:
                var0 = var1._72;
                var0 = var0.length;
                var4 = 0;
                var0 = var4 < var0;
                var2 = undefined;
                if (!var0) {
                    _fun10389_ip = 121;
                    continue _fun10389
                }
            case 83:
                var5 = _closure1_slot4;
                var0 = var1._72;
                var0 = var0[var4];
                var0 = var5.bind(var2)(var1, var0);
                var4 = var4 + 1;
                var0 = var1._72;
                var0 = var0.length;
                if (var4 < var0) {
                    _fun10389_ip = 83;
                    continue _fun10389
                }
            case 121:
                var0 = null;
                var1._72 = var0;
            case 129:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: Handler, environment: var0
        _fun10390: for (var _fun10390_ip = 0;;) switch (_fun10390_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var1 = this;
                var4 = 'function';
                var6 = typeof var5;
                var3 = null;
                if (!(var4 === var6)) {
                    _fun10390_ip = 25;
                    continue _fun10390
                }
            case 22:
                var3 = var5;
            case 25:
                var1.onFulfilled = var3;
                var3 = typeof var2;
                var0 = null;
                if (!(var4 === var3)) {
                    _fun10390_ip = 43;
                    continue _fun10390
                }
            case 40:
                var0 = var2;
            case 43:
                var1.onRejected = var0;
                var0 = arg2;
                var1.promise = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function(arg0, arg1) { // Original name: doResolve, environment: var0
        _fun10391: for (var _fun10391_ip = 0;;) switch (_fun10391_ip) {
            case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var0 = false;
                var _closure2_slot1 = var0;
                var4 = arg0;
                var2 = function(arg0) { // Environment: var1
                    _fun10392: for (var _fun10392_ip = 0;;) switch (_fun10392_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun10392_ip = 38;
                                continue _fun10392
                            }
                        case 10:
                            var1 = true;
                            _closure2_slot1 = var1;
                            var3 = _closure1_slot5;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var2, var0);
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = function(arg0) { // Environment: var1
                    _fun10393: for (var _fun10393_ip = 0;;) switch (_fun10393_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun10393_ip = 38;
                                continue _fun10393
                            }
                        case 10:
                            var1 = true;
                            _closure2_slot1 = var1;
                            var3 = _closure1_slot6;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var2, var0);
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
            case 28: // try_start_0
                var5 = var4;
                var4 = var2;
                var2 = var0;
                var0 = undefined;
                var2 = var5.bind(var0)(var4, var2);
            case 45: // try_end0
                var4 = undefined;
                _fun10391_ip = 62;
                continue _fun10391;
            case 49: // catch_target0
                CatchBlockStart(arg_register = 2);
                _closure1_slot0 = var2;
                var4 = _closure1_slot1;
            case 62:
                var0 = _closure2_slot1;
                if (var0) {
                    _fun10391_ip = 80;
                    continue _fun10391
                }
            case 69:
                var2 = _closure1_slot1;
                var0 = var4 !== var2;
            case 80:
                if (var0) {
                    _fun10391_ip = 108;
                    continue _fun10391
                }
            case 83:
                var0 = true;
                _closure2_slot1 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
            case 108:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = null;
    var _closure1_slot0 = var3;
    var4 = {};
    var _closure1_slot1 = var4;
    var4 = arg4;
    var4.exports = var1;
    var1._37 = var3;
    var1._87 = var3;
    var1._61 = var2;
    var1 = var1.prototype;
    var0 = function(arg0, arg1) { // Environment: var0
        _fun10394: for (var _fun10394_ip = 0;;) switch (_fun10394_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = this;
                var5 = var2.constructor;
                var0 = _closure1_slot3;
                if (!(var5 === var0)) {
                    _fun10394_ip = 100;
                    continue _fun10394
                }
            case 25:
                var6 = _closure1_slot3;
                var9 = _closure1_slot2;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var5;
                var0 = new var10[var6](var9, var8);
                var0 = var0 instanceof Object ? var0 : var5;
                var6 = _closure1_slot4;
                var1 = _closure1_slot8;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var10 = var5;
                var9 = var4;
                var8 = var3;
                var7 = var0;
                var1 = new var10[var1](var9, var8, var7, var6);
                var5 = var1 instanceof Object ? var1 : var5;
                var1 = undefined;
                var1 = var6.bind(var1)(var2, var5);
                return var0;
            case 100:
                var1 = function(arg0, arg1, arg2) { // Original name: safeThen, environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = arg1;
                    var _closure3_slot1 = var2;
                    var2 = arg2;
                    var _closure3_slot2 = var2;
                    var2 = var1.constructor;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = function(arg0, arg1) { // Environment: var0
                        var3 = _closure1_slot3;
                        var9 = _closure1_slot2;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var10 = var2;
                        var0 = new var10[var3](var9, var8);
                        var6 = var0 instanceof Object ? var0 : var2;
                        var3 = var6.then;
                        var2 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var6)(var2, var0);
                        var3 = _closure1_slot4;
                        var2 = _closure3_slot0;
                        var5 = _closure1_slot8;
                        var9 = _closure3_slot1;
                        var8 = _closure3_slot2;
                        var1 = var5.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var10 = var1;
                        var7 = var6;
                        var0 = new var10[var5](var9, var8, var7, var6);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var0 = undefined;
                var0 = var1.bind(var0)(var2, var4, var3);
                return var0;
        }
    };
    var1.then = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);