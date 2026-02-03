// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94763: for (var _fun94763_ip = 0;;) switch (_fun94763_ip) {
        case 0:
            var2 = exports;
            var _closure1_slot0 = var2;
            var1 = function arg0, arg1() {
                var0 = global;
                var0 = var0.Object;
                var0 = var0.prototype;
                var3 = var0.hasOwnProperty;
                var2 = var3.call;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot3 = var1;
            var3 = global;
            var1 = var3.Uint8Array;
            var4 = 'undefined';
            var1 = typeof var1;
            var1 = var4 !== var1;
            if (!var1) {
                _fun94763_ip = 55;
                continue _fun94763
            }
        case 42:
            var5 = var3.Uint16Array;
            var5 = typeof var5;
            var1 = var4 !== var5;
        case 55:
            if (!var1) {
                _fun94763_ip = 71;
                continue _fun94763
            }
        case 58:
            var3 = var3.Int32Array;
            var3 = typeof var3;
            var1 = var4 !== var3;
        case 71:
            var3 = function(arg0) { // Environment: var0
                _fun94765: for (var _fun94765_ip = 0;;) switch (_fun94765_ip) {
                    case 0:
                        var2 = arg0;
                        var8 = undefined;
                        var1 = undefined;
                        var0 = global;
                        var3 = var0.Array;
                        var3 = var3.prototype;
                        var5 = var3.slice;
                        var4 = var5.call;
                        var1 = arguments;
                        var3 = var1;
                        var1 = 1;
                        var7 = var4.bind(var5)(var3, var1);
                        var1 = var7.length;
                        var5 = 'object';
                        var4 = undefined;
                        if (!var1) {
                            _fun94765_ip = 156;
                            continue _fun94765
                        }
                    case 61:
                        var1 = var7.shift;
                        var1 = var1.bind(var7)();
                        var9 = var4;
                        if (!var1) {
                            _fun94765_ip = 145;
                            continue _fun94765
                        }
                    case 77:
                        var3 = typeof var1;
                        if (!(var5 === var3)) {
                            _fun94765_ip = 158;
                            continue _fun94765
                        }
                    case 84:
                        var13 = var1;
                        var3 = var4;
                        var9 = var3;
                        for (var10 in var13)
                            case 101: {
                                var9 = var3;
                                case 113: var15 = var10;
                                var16 = _closure1_slot3;
                                var16 = var16.bind(var8)(var1, var15);
                                var3 = var15;
                                if (!var16) {
                                    _fun94765_ip = 101;
                                    continue _fun94765
                                }
                                case 132: var16 = var1[var15];
                                var2[var15] = var16;
                                var3 = var15;
                                _fun94765_ip = 101;
                                continue _fun94765;
                            }
                    case 145:
                        var3 = var7.length;
                        var4 = var9;
                        if (var3) {
                            _fun94765_ip = 61;
                            continue _fun94765
                        }
                    case 156:
                        return var2;
                    case 158:
                        var2 = var0.TypeError;
                        var0 = 'must be non-object';
                        var18 = var1 + var0;
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var19 = var1;
                        var0 = new var19[var2](var18, var17);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var2.assign = var3;
            var3 = function(arg0, arg1) { // Environment: var0
                _fun94766: for (var _fun94766_ip = 0;;) switch (_fun94766_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var1 = var5.length;
                        var0 = var5;
                        if (!(var1 !== var4)) {
                            _fun94766_ip = 55;
                            continue _fun94766
                        }
                    case 18:
                        var1 = var5.subarray;
                        if (var1) {
                            _fun94766_ip = 38;
                            continue _fun94766
                        }
                    case 27:
                        var5.length = var4;
                        var1 = var5;
                        _fun94766_ip = 52;
                        continue _fun94766;
                    case 38:
                        var3 = var5.subarray;
                        var2 = 0;
                        var1 = var3.bind(var5)(var2, var4);
                    case 52:
                        var0 = var1;
                    case 55:
                        return var0;
                }
            };
            var2.shrinkBuf = var3;
            var3 = {};
            var4 = function arg0, arg1, arg2, arg3, arg4() {
                _fun94767: for (var _fun94767_ip = 0;;) switch (_fun94767_ip) {
                    case 0:
                        var3 = arg0;
                        var6 = arg1;
                        var5 = arg2;
                        var0 = arg3;
                        var2 = arg4;
                        var1 = var6.subarray;
                        if (!var1) {
                            _fun94767_ip = 33;
                            continue _fun94767
                        }
                    case 24:
                        var1 = var3.subarray;
                        if (var1) {
                            _fun94767_ip = 67;
                            continue _fun94767
                        }
                    case 33:
                        var1 = 0;
                        var4 = var1 < var0;
                        if (!var4) {
                            _fun94767_ip = 94;
                            continue _fun94767
                        }
                    case 42:
                        var7 = var2 + var1;
                        var4 = var5 + var1;
                        var4 = var6[var4];
                        var3[var7] = var4;
                        var1 = var1 + 1;
                        if (var1 < var0) {
                            _fun94767_ip = 42;
                            continue _fun94767
                        }
                    case 65:
                        _fun94767_ip = 94;
                        continue _fun94767;
                    case 67:
                        var1 = var3.set;
                        var4 = var6.subarray;
                        var0 = var5 + var0;
                        var0 = var4.bind(var6)(var5, var0);
                        var0 = var1.bind(var3)(var0, var2);
                    case 94:
                        var0 = undefined;
                        return var0;
                }
            };
            var3.arraySet = var4;
            var4 = function arg0() {
                _fun94768: for (var _fun94768_ip = 0;;) switch (_fun94768_ip) {
                    case 0:
                        var4 = arg0;
                        var5 = var4.length;
                        var1 = 0;
                        var6 = var1 < var5;
                        var2 = 0;
                        var0 = 0;
                        var3 = 0;
                        if (!var6) {
                            _fun94768_ip = 46;
                            continue _fun94768
                        }
                    case 23:
                        var6 = var4[var2];
                        var6 = var6.length;
                        var0 = var0 + var6;
                        var2 = var2 + 1;
                        var3 = var0;
                        if (var2 < var5) {
                            _fun94768_ip = 23;
                            continue _fun94768
                        }
                    case 46:
                        var0 = global;
                        var0 = var0.Uint8Array;
                        var2 = var0.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var0
                            }
                        });
                        var9 = var2;
                        var8 = var3;
                        var0 = new var9[var0](var8, var7);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var3 = var4.length;
                        var5 = var1 < var3;
                        var2 = 0;
                        var1 = 0;
                        if (!var5) {
                            _fun94768_ip = 124;
                            continue _fun94768
                        }
                    case 93:
                        var5 = var4[var2];
                        var6 = var0.set;
                        var6 = var6.bind(var0)(var5, var1);
                        var5 = var5.length;
                        var1 = var1 + var5;
                        var2 = var2 + 1;
                        if (var2 < var3) {
                            _fun94768_ip = 93;
                            continue _fun94768
                        }
                    case 124:
                        return var0;
                }
            };
            var3.flattenChunks = var4;
            var _closure1_slot1 = var3;
            var3 = {};
            var4 = function arg0, arg1, arg2, arg3, arg4() {
                _fun94769: for (var _fun94769_ip = 0;;) switch (_fun94769_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var3 = arg2;
                        var2 = arg3;
                        var1 = arg4;
                        var0 = 0;
                        var6 = var0 < var2;
                        if (!var6) {
                            _fun94769_ip = 47;
                            continue _fun94769
                        }
                    case 24:
                        var7 = var1 + var0;
                        var6 = var3 + var0;
                        var6 = var4[var6];
                        var5[var7] = var6;
                        var0 = var0 + 1;
                        if (var0 < var2) {
                            _fun94769_ip = 24;
                            continue _fun94769
                        }
                    case 47:
                        var0 = undefined;
                        return var0;
                }
            };
            var3.arraySet = var4;
            var4 = function arg0() {
                var0 = new Array(0);
                var3 = var0.concat;
                var2 = var3.apply;
                var1 = new Array(0);
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var3.flattenChunks = var4;
            var _closure1_slot2 = var3;
            var0 = function(arg0) { // Environment: var0
                _fun94771: for (var _fun94771_ip = 0;;) switch (_fun94771_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = global;
                        var3 = arg0;
                        if (var3) {
                            _fun94771_ip = 68;
                            continue _fun94771
                        }
                    case 15:
                        var3 = var1.Array;
                        var2.Buf8 = var3;
                        var3 = var1.Array;
                        var2.Buf16 = var3;
                        var3 = var1.Array;
                        var2.Buf32 = var3;
                        var4 = var2.assign;
                        var3 = _closure1_slot2;
                        var3 = var4.bind(var2)(var2, var3);
                        _fun94771_ip = 119;
                        continue _fun94771;
                    case 68:
                        var3 = var1.Uint8Array;
                        var2.Buf8 = var3;
                        var3 = var1.Uint16Array;
                        var2.Buf16 = var3;
                        var1 = var1.Int32Array;
                        var2.Buf32 = var1;
                        var1 = var2.assign;
                        var0 = _closure1_slot1;
                        var0 = var1.bind(var2)(var2, var0);
                    case 119:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.setTyped = var0;
            var0 = var2.setTyped;
            var0 = var0.bind(var2)(var1);
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);