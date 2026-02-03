// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = module;
    var _closure1_slot0 = var1;
    var1 = function() { // Environment: var0
        _fun32321: for (var _fun32321_ip = 0;;) switch (_fun32321_ip) {
            case 0:
                var2 = function() {
                    _fun32322: for (var _fun32322_ip = 0;;) switch (_fun32322_ip) {
                        case 0:
                            var5 = undefined;
                            var6 = undefined;
                            var0 = arguments.length;
                            var4 = 0;
                            var1 = var4 < var0;
                            var2 = '';
                            var0 = var2;
                            if (!var1) {
                                _fun32322_ip = 71;
                                continue _fun32322
                            }
                        case 26:
                            var9 = arguments[var4];
                            var7 = var2;
                            if (!var9) {
                                _fun32322_ip = 55;
                                continue _fun32322
                            }
                        case 36:
                            var8 = _closure2_slot3;
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var5)(var9);
                            var7 = var8.bind(var5)(var2, var1);
                        case 55:
                            var4 = var4 + 1;
                            var1 = arguments.length;
                            var2 = var7;
                            var0 = var2;
                            if (var4 < var1) {
                                _fun32322_ip = 26;
                                continue _fun32322
                            }
                        case 71:
                            return var0;
                    }
                };
                var _closure2_slot1 = var2;
                var0 = function arg0() {
                    _fun32323: for (var _fun32323_ip = 0;;) switch (_fun32323_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = typeof var0;
                            var1 = 'string';
                            if (!(var1 !== var2)) {
                                _fun32323_ip = 243;
                                continue _fun32323
                            }
                        case 17:
                            var1 = 'number';
                            if (!(var1 !== var2)) {
                                _fun32323_ip = 243;
                                continue _fun32323
                            }
                        case 28:
                            var1 = 'object';
                            if (!(var1 === var2)) {
                                _fun32323_ip = 237;
                                continue _fun32323
                            }
                        case 39:
                            var1 = global;
                            var3 = var1.Array;
                            var2 = var3.isArray;
                            var2 = var2.bind(var3)(var0);
                            if (var2) {
                                _fun32323_ip = 215;
                                continue _fun32323
                            }
                        case 63:
                            var2 = var0.toString;
                            var1 = var1.Object;
                            var1 = var1.prototype;
                            var1 = var1.toString;
                            if (!(var2 !== var1)) {
                                _fun32323_ip = 132;
                                continue _fun32323
                            }
                        case 88:
                            var2 = var0.toString;
                            var1 = var2.toString;
                            var3 = var1.bind(var2)();
                            var2 = var3.includes;
                            var1 = '[native code]';
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun32323_ip = 132;
                                continue _fun32323
                            }
                        case 121:
                            var1 = var0.toString;
                            var1 = var1.bind(var0)();
                            return var1;
                        case 132:
                            var8 = var0;
                            var2 = '';
                            var3 = undefined;
                            var1 = var2;
                            for (var5 in var8)
                                case 155: {
                                    var12 = var2;
                                    var1 = var12;
                                    case 170: var11 = var5;
                                    var13 = _closure2_slot0;
                                    var10 = var13.call;
                                    var10 = var10.bind(var13)(var0, var11);
                                    if (!var10) {
                                        _fun32323_ip = 195;
                                        continue _fun32323
                                    }
                                    case 191: var10 = var0[var11];
                                    case 195: var2 = var12;
                                    if (!var10) {
                                        _fun32323_ip = 155;
                                        continue _fun32323
                                    }
                                    case 201: var10 = _closure2_slot3;
                                    var2 = var10.bind(var3)(var12, var11);
                                    _fun32323_ip = 155;
                                    continue _fun32323;
                                }
                        case 213:
                            return var1;
                        case 215:
                            var3 = _closure2_slot1;
                            var2 = var3.apply;
                            var1 = null;
                            var1 = var2.bind(var3)(var1, var0);
                            return var1;
                        case 237:
                            var1 = '';
                            return var1;
                        case 243:
                            return var0;
                    }
                };
                var _closure2_slot2 = var0;
                var0 = function arg0, arg1() {
                    _fun32324: for (var _fun32324_ip = 0;;) switch (_fun32324_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var0 = var4;
                            if (!var3) {
                                _fun32324_ip = 38;
                                continue _fun32324
                            }
                        case 12:
                            if (var4) {
                                _fun32324_ip = 21;
                                continue _fun32324
                            }
                        case 15:
                            var1 = var4 + var3;
                            _fun32324_ip = 35;
                            continue _fun32324;
                        case 21:
                            var2 = ' ';
                            var2 = var4 + var2;
                            var1 = var2 + var3;
                        case 35:
                            var0 = var1;
                        case 38:
                            return var0;
                    }
                };
                var _closure2_slot3 = var0;
                var0 = {};
                var0 = var0.hasOwnProperty;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot0;
                var0 = undefined;
                if (!(var0 !== var4)) {
                    _fun32321_ip = 66;
                    continue _fun32321
                }
            case 54:
                var4 = _closure1_slot0;
                var4 = var4.exports;
                if (var4) {
                    _fun32321_ip = 169;
                    continue _fun32321
                }
            case 66:
                var4 = global;
                var5 = var4.define;
                var6 = 'function';
                var5 = typeof var5;
                if (!(var6 === var5)) {
                    _fun32321_ip = 123;
                    continue _fun32321
                }
            case 85:
                var5 = var4.define;
                var5 = var5.amd;
                var6 = 'object';
                var5 = typeof var5;
                if (!(var6 === var5)) {
                    _fun32321_ip = 123;
                    continue _fun32321
                }
            case 108:
                var5 = var4.define;
                var5 = var5.amd;
                if (var5) {
                    _fun32321_ip = 139;
                    continue _fun32321
                }
            case 123:
                var5 = var4.window;
                var5.classNames = var2;
                _fun32321_ip = 185;
                continue _fun32321;
            case 139:
                var6 = var4.define;
                var5 = 'classnames';
                var4 = new Array(0);
                var3 = function() { // Environment: var3
                    var0 = _closure2_slot1;
                    return var0;
                };
                var3 = var6.bind(var0)(var5, var4, var3);
                _fun32321_ip = 185;
                continue _fun32321;
            case 169:
                var2.default = var2;
                var1 = _closure1_slot0;
                var1.exports = var2;
            case 185:
                return var0;
        }
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);