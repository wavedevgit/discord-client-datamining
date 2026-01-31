// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var6 = function arg0() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 0;
        var2 = var4[var0];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var0 = var4[var0];
        var0 = var3.bind(var1)(var0);
        var5 = var0._61;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var6 = var1;
        var0 = new var6[var2](var5, var4);
        var0 = var0 instanceof Object ? var0 : var1;
        var1 = 1;
        var0._65 = var1;
        var1 = arg0;
        var0._55 = var1;
        return var0;
    };
    var _closure1_slot8 = var6;
    var2 = 0;
    var5 = var4[var2];
    var0 = undefined;
    var7 = var3.bind(var0)(var5);
    var5 = arg4;
    var5.exports = var7;
    var5 = true;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = false;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = null;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = var6.bind(var0)(var0);
    var _closure1_slot5 = var5;
    var5 = var6.bind(var0)(var2);
    var _closure1_slot6 = var5;
    var5 = '';
    var5 = var6.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = var4[var2];
    var6 = var3.bind(var0)(var5);
    var5 = function(arg0) { // Environment: var1
        _fun10405: for (var _fun10405_ip = 0;;) switch (_fun10405_ip) {
            case 0:
                var7 = arg0;
                var3 = var7;
                var5 = undefined;
                var4 = undefined;
                var8 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 0;
                var0 = var0[var6];
                var0 = var8.bind(var5)(var0);
                var7 = var7 instanceof var0;
                var0 = var3;
                if (var7) {
                    _fun10405_ip = 316;
                    continue _fun10405
                }
            case 47:
                var7 = null;
                if (!(var7 !== var0)) {
                    _fun10405_ip = 310;
                    continue _fun10405
                }
            case 56:
                var7 = var3;
                if (!(var5 !== var7)) {
                    _fun10405_ip = 304;
                    continue _fun10405
                }
            case 66:
                var8 = var3;
                var7 = true;
                if (!(var7 !== var8)) {
                    _fun10405_ip = 298;
                    continue _fun10405
                }
            case 78:
                var8 = var3;
                var7 = false;
                if (!(var7 !== var8)) {
                    _fun10405_ip = 292;
                    continue _fun10405
                }
            case 90:
                var7 = var3;
                if (!(var6 !== var7)) {
                    _fun10405_ip = 286;
                    continue _fun10405
                }
            case 100:
                var8 = var3;
                var7 = '';
                if (!(var7 !== var8)) {
                    _fun10405_ip = 280;
                    continue _fun10405
                }
            case 114:
                var7 = var3;
                var8 = 'object';
                var7 = typeof var7;
                if (!(var8 !== var7)) {
                    _fun10405_ip = 142;
                    continue _fun10405
                }
            case 128:
                var7 = var3;
                var8 = 'function';
                var7 = typeof var7;
                if (!(var8 === var7)) {
                    _fun10405_ip = 164;
                    continue _fun10405
                }
            case 142: // try_start_0
                var7 = var3;
                var7 = var7.then;
                var4 = var7;
                var8 = 'function';
                var7 = typeof var7;
                if (!(var8 !== var7)) {
                    _fun10405_ip = 178;
                    continue _fun10405
                }
            case 164: // try_end0
                var8 = _closure1_slot8;
                var7 = var3;
                var7 = var8.bind(var5)(var7);
                return var7;
            case 178: // try_start_1
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var6];
                var7 = var8.bind(var5)(var7);
                var8 = var4;
                var4 = var8.bind;
                var9 = var4.bind(var8)(var3);
                var4 = var7.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = var4;
                var3 = new var10[var7](var9, var8);
                var3 = var3 instanceof Object ? var3 : var4;
            case 228: // try_end1
                return var3;
            case 230: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 3);
                var _closure2_slot0 = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var4 = var4.bind(var5)(var3);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = function(arg0, arg1) { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var10 = var3;
                var2 = new var10[var4](var9, var8);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
            case 280:
                var2 = _closure1_slot7;
                return var2;
            case 286:
                var2 = _closure1_slot6;
                return var2;
            case 292:
                var2 = _closure1_slot3;
                return var2;
            case 298:
                var2 = _closure1_slot2;
                return var2;
            case 304:
                var2 = _closure1_slot5;
                return var2;
            case 310:
                var1 = _closure1_slot4;
                return var1;
            case 316:
                return var0;
        }
    };
    var6.resolve = var5;
    var5 = var4[var2];
    var6 = var3.bind(var0)(var5);
    var5 = function(arg0) { // Environment: var1
        var1 = global;
        var1 = var1.Array;
        var1 = var1.prototype;
        var3 = var1.slice;
        var2 = var3.call;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = function(arg0, arg1) { // Environment: var0
            _fun10408: for (var _fun10408_ip = 0;;) switch (_fun10408_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var5 = function arg0, arg1() {
                        _fun10409: for (var _fun10409_ip = 0;;) switch (_fun10409_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = arg1;
                                var _closure4_slot0 = var4;
                                if (!var1) {
                                    _fun10409_ip = 120;
                                    continue _fun10409
                                }
                            case 15:
                                var3 = typeof var1;
                                var2 = 'object';
                                if (!(var2 !== var3)) {
                                    _fun10409_ip = 34;
                                    continue _fun10409
                                }
                            case 26:
                                var2 = 'function';
                                if (!(var2 === var3)) {
                                    _fun10409_ip = 120;
                                    continue _fun10409
                                }
                            case 34:
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var7 = 0;
                                var5 = var3[var7];
                                var3 = undefined;
                                var5 = var6.bind(var3)(var5);
                                var5 = var1 instanceof var5;
                                if (!var5) {
                                    _fun10409_ip = 104;
                                    continue _fun10409
                                }
                            case 65:
                                var6 = var1.then;
                                var8 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var5 = var5[var7];
                                var5 = var8.bind(var3)(var5);
                                var5 = var5.prototype;
                                var5 = var5.then;
                                if (!(var6 !== var5)) {
                                    _fun10409_ip = 244;
                                    continue _fun10409
                                }
                            case 104:
                                var5 = var1.then;
                                var8 = 'function';
                                var6 = typeof var5;
                                if (!(var8 !== var6)) {
                                    _fun10409_ip = 170;
                                    continue _fun10409
                                }
                            case 120:
                                var8 = _closure2_slot0;
                                var8[var4] = var1;
                                var9 = _closure3_slot2;
                                var10 = var9 - 1;
                                _closure3_slot2 = var10;
                                var9 = 0;
                                if (!(var9 == var10)) {
                                    _fun10409_ip = 166;
                                    continue _fun10409
                                }
                            case 151:
                                var9 = _closure3_slot0;
                                var8 = _closure2_slot0;
                                var6 = undefined;
                                var6 = var9.bind(var6)(var8);
                            case 166:
                                var6 = undefined;
                                return var6;
                            case 170:
                                var6 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var7];
                                var6 = var6.bind(var3)(var2);
                                var2 = var5.bind;
                                var12 = var2.bind(var5)(var1);
                                var5 = var6.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var13 = var5;
                                var2 = new var13[var6](var12, var11);
                                var7 = var2 instanceof Object ? var2 : var5;
                                var6 = var7.then;
                                var5 = _closure3_slot1;
                                var2 = function(arg0) { // Environment: var0
                                    var3 = _closure3_slot3;
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var2 = var6.bind(var7)(var2, var5);
                                var2 = undefined;
                                return var2;
                            case 244:
                                var2 = var1._65;
                                var6 = 3;
                                var5 = var1;
                                var1 = var5;
                                if (!(var6 === var2)) {
                                    _fun10409_ip = 285;
                                    continue _fun10409
                                }
                            case 263:
                                var7 = var5._55;
                                var2 = var7._65;
                                var5 = var7;
                                var1 = var5;
                                if (var6 === var2) {
                                    _fun10409_ip = 263;
                                    continue _fun10409
                                }
                            case 285:
                                var5 = var1._65;
                                var2 = 1;
                                if (!(var2 !== var5)) {
                                    _fun10409_ip = 356;
                                    continue _fun10409
                                }
                            case 298:
                                var5 = var1._65;
                                var2 = 2;
                                if (!(var2 === var5)) {
                                    _fun10409_ip = 329;
                                    continue _fun10409
                                }
                            case 311:
                                var5 = _closure3_slot1;
                                var2 = var1._55;
                                var2 = var5.bind(var3)(var2);
                            case 329:
                                var5 = var1.then;
                                var2 = _closure3_slot1;
                                var0 = function(arg0) { // Environment: var0
                                    var3 = _closure3_slot3;
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var0 = var5.bind(var1)(var0, var2);
                                var0 = undefined;
                                _fun10409_ip = 375;
                                continue _fun10409;
                            case 356:
                                var2 = _closure3_slot3;
                                var1 = var1._55;
                                var0 = var2.bind(var3)(var4, var1);
                            case 375:
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var5;
                    var0 = _closure2_slot0;
                    var0 = var0.length;
                    var3 = 0;
                    if (!(var3 !== var0)) {
                        _fun10408_ip = 100;
                        continue _fun10408
                    }
                case 43:
                    var0 = _closure2_slot0;
                    var1 = var0.length;
                    var _closure3_slot2 = var1;
                    var0 = var0.length;
                    var1 = var3 < var0;
                    var0 = undefined;
                    var3 = 0;
                    if (!var1) {
                        _fun10408_ip = 98;
                        continue _fun10408
                    }
                case 72:
                    var1 = _closure2_slot0;
                    var6 = var1[var3];
                    var6 = var5.bind(var0)(var3, var6);
                    var3 = var3 + 1;
                    var1 = var1.length;
                    if (var3 < var1) {
                        _fun10408_ip = 72;
                        continue _fun10408
                    }
                case 98:
                    return var0;
                case 100:
                    var1 = undefined;
                    var0 = new Array(0);
                    var0 = var2.bind(var1)(var0);
                    return var0;
            }
        };
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var6.all = var5;
    var5 = var4[var2];
    var6 = var3.bind(var0)(var5);
    var5 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = function(arg0, arg1) { // Environment: var0
            var2 = _closure2_slot0;
            var1 = arg1;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var6.reject = var5;
    var5 = var4[var2];
    var6 = var3.bind(var0)(var5);
    var5 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = function(arg0, arg1) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var2 = _closure2_slot0;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.resolve;
                var1 = arg0;
                var4 = var2.bind(var3)(var1);
                var3 = var4.then;
                var2 = _closure3_slot0;
                var1 = _closure3_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var6.race = var5;
    var2 = var4[var2];
    var2 = var3.bind(var0)(var2);
    var2 = var2.prototype;
    var1 = function(arg0) { // Environment: var1
        var3 = this;
        var2 = var3.then;
        var1 = null;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.catch = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1016]);