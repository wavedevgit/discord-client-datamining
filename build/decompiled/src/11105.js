// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0() {
        _fun86066: for (var _fun86066_ip = 0;;) switch (_fun86066_ip) {
            case 0:
                var1 = global;
                var2 = var1.WeakMap;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86066_ip = 107;
                    continue _fun86066
                }
            case 21:
                var2 = var1.WeakMap;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var3;
                var2 = new var5[var2](var4);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot0 = var2;
                var1 = var1.WeakMap;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot1 = var1;
                var2 = function arg0() {
                    _fun86067: for (var _fun86067_ip = 0;;) switch (_fun86067_ip) {
                        case 0:
                            var0 = arg0;
                            if (var0) {
                                _fun86067_ip = 15;
                                continue _fun86067
                            }
                        case 9:
                            var0 = _closure2_slot0;
                            _fun86067_ip = 19;
                            continue _fun86067;
                        case 15:
                            var0 = _closure2_slot1;
                        case 19:
                            return var0;
                    }
                };
                _closure1_slot2 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            case 107:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var1 = function arg0, arg1() {
        _fun86068: for (var _fun86068_ip = 0;;) switch (_fun86068_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                if (var2) {
                    _fun86068_ip = 23;
                    continue _fun86068
                }
            case 9:
                if (!var1) {
                    _fun86068_ip = 23;
                    continue _fun86068
                }
            case 12:
                var0 = var1.__esModule;
                if (!var0) {
                    _fun86068_ip = 23;
                    continue _fun86068
                }
            case 21:
                return var1;
            case 23:
                var12 = null;
                if (!(var12 !== var1)) {
                    _fun86068_ip = 314;
                    continue _fun86068
                }
            case 32:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.default;
                var5 = var4.bind(var5)(var1);
                var4 = 'object';
                if (!(var4 != var5)) {
                    _fun86068_ip = 88;
                    continue _fun86068
                }
            case 74:
                var5 = 'function';
                var4 = typeof var1;
                if (!(var5 === var4)) {
                    _fun86068_ip = 314;
                    continue _fun86068
                }
            case 88:
                var0 = _closure1_slot2;
                var2 = var0.bind(var3)(var2);
                if (!var2) {
                    _fun86068_ip = 116;
                    continue _fun86068
                }
            case 100:
                var0 = var2.has;
                var0 = var0.bind(var2)(var1);
                if (var0) {
                    _fun86068_ip = 302;
                    continue _fun86068
                }
            case 116:
                var0 = Object.create(var12);
                var11 = global;
                var4 = var11.Object;
                var10 = var4.defineProperty;
                if (!var10) {
                    _fun86068_ip = 147;
                    continue _fun86068
                }
            case 135:
                var4 = var11.Object;
                var10 = var4.getOwnPropertyDescriptor;
            case 147:
                var8 = var1;
                var4 = 'default';
                var3 = undefined;
                for (var5 in var8)
                    case 164: {
                        case 173: var16 = var5;
                        if (var4 === var16) {
                            _fun86068_ip = 164;
                            continue _fun86068
                        }
                        case 180: var13 = {};
                        var14 = var13.hasOwnProperty;
                        var13 = var14.call;
                        var13 = var13.bind(var14)(var1, var16);
                        if (!var13) {
                            _fun86068_ip = 164;
                            continue _fun86068
                        }
                        case 202: var13 = null;
                        if (!var10) {
                            _fun86068_ip = 225;
                            continue _fun86068
                        }
                        case 207: var15 = var11.Object;
                        var14 = var15.getOwnPropertyDescriptor;
                        var13 = var14.bind(var15)(var1, var16);
                        case 225: if (!var13) {
                            _fun86068_ip = 244;
                            continue _fun86068
                        }
                        case 228: var14 = var13.get;
                        if (var14) {
                            _fun86068_ip = 257;
                            continue _fun86068
                        }
                        case 236: var14 = var13.set;
                        if (var14) {
                            _fun86068_ip = 257;
                            continue _fun86068
                        }
                        case 244: var14 = var1[var16];
                        var0[var16] = var14;
                        var3 = var13;
                        _fun86068_ip = 164;
                        continue _fun86068;
                        case 257: var15 = var11.Object;
                        var14 = var15.defineProperty;
                        var14 = var14.bind(var15)(var0, var16, var13);
                        var3 = var13;
                        _fun86068_ip = 164;
                        continue _fun86068;
                    }
            case 280:
                var0.default = var1;
                if (!var2) {
                    _fun86068_ip = 300;
                    continue _fun86068
                }
            case 289:
                var3 = var2.set;
                var3 = var3.bind(var2)(var1, var0);
            case 300:
                return var0;
            case 302:
                var0 = var2.get;
                var0 = var0.bind(var2)(var1);
                return var0;
            case 314:
                var0 = {};
                var0.default = var1;
                return var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [10]);