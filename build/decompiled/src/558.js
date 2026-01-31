// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6706: for (var _fun6706_ip = 0;;) switch (_fun6706_ip) {
        case 0:
            var3 = module;
            var2 = function arg0() {
                _fun6707: for (var _fun6707_ip = 0;;) switch (_fun6707_ip) {
                    case 0:
                        var0 = arg0;
                        if (var0) {
                            _fun6707_ip = 10;
                            continue _fun6707
                        }
                    case 6:
                        var1 = undefined;
                        return var1;
                    case 10:
                        var1 = _closure1_slot0;
                        var5 = var1.prototype;
                        for (var1 in var5)
                            case 30: {
                                case 39: var8 = var1;
                                var7 = _closure1_slot0;
                                var7 = var7.prototype;
                                var7 = var7[var8];
                                var0[var8] = var7;
                                _fun6707_ip = 30;
                                continue _fun6707;
                            }
                    case 61:
                        return var0;
                }
            };
            var _closure1_slot0 = var2;
            var0 = undefined;
            if (!(var0 !== var3)) {
                _fun6706_ip = 26;
                continue _fun6706
            }
        case 20:
            var3.exports = var2;
        case 26:
            var4 = var2.prototype;
            var5 = var2.prototype;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun6708: for (var _fun6708_ip = 0;;) switch (_fun6708_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = this;
                        var1 = var0._callbacks;
                        if (var1) {
                            _fun6708_ip = 16;
                            continue _fun6708
                        }
                    case 14:
                        var1 = {};
                    case 16:
                        var0._callbacks = var1;
                        var2 = var0._callbacks;
                        var3 = '$';
                        var1 = var3 + var5;
                        var4 = var0._callbacks;
                        var3 = var3 + var5;
                        var3 = var4[var3];
                        if (var3) {
                            _fun6708_ip = 57;
                            continue _fun6708
                        }
                    case 53:
                        var3 = new Array(0);
                    case 57:
                        var2[var1] = var3;
                        var2 = var3.push;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var5.addEventListener = var3;
            var4.on = var3;
            var4 = var2.prototype;
            var3 = function(arg0, arg1) { // Environment: var1
                var3 = arg0;
                var1 = arg1;
                var0 = this;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var1;
                var2 = function() {
                    var4 = this;
                    var0 = undefined;
                    var1 = undefined;
                    var6 = var4.off;
                    var5 = _closure2_slot0;
                    var3 = _closure2_slot2;
                    var3 = var6.bind(var4)(var5, var3);
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var1 = arguments;
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
                };
                var _closure2_slot2 = var2;
                var2.fn = var1;
                var1 = var0.on;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
            };
            var4.once = var3;
            var4 = var2.prototype;
            var5 = var2.prototype;
            var6 = var2.prototype;
            var7 = var2.prototype;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun6711: for (var _fun6711_ip = 0;;) switch (_fun6711_ip) {
                    case 0:
                        var3 = arg0;
                        var9 = arg1;
                        var0 = this;
                        var5 = undefined;
                        var1 = var0._callbacks;
                        if (var1) {
                            _fun6711_ip = 21;
                            continue _fun6711
                        }
                    case 19:
                        var1 = {};
                    case 21:
                        var0._callbacks = var1;
                        var1 = arguments.length;
                        var4 = 0;
                        if (!(var4 != var1)) {
                            _fun6711_ip = 174;
                            continue _fun6711
                        }
                    case 39:
                        var6 = var0._callbacks;
                        var1 = '$';
                        var2 = var1 + var3;
                        var2 = var6[var2];
                        if (var2) {
                            _fun6711_ip = 62;
                            continue _fun6711
                        }
                    case 60:
                        return var0;
                    case 62:
                        var5 = arguments.length;
                        var7 = 1;
                        if (!(var7 != var5)) {
                            _fun6711_ip = 158;
                            continue _fun6711
                        }
                    case 72:
                        var5 = var2.length;
                        var5 = var4 < var5;
                        var8 = 0;
                        if (!var5) {
                            _fun6711_ip = 133;
                            continue _fun6711
                        }
                    case 86:
                        var5 = var2[var8];
                        var6 = var8;
                        if (!(var5 !== var9)) {
                            _fun6711_ip = 121;
                            continue _fun6711
                        }
                    case 97:
                        var5 = var5.fn;
                        if (!(var5 !== var9)) {
                            _fun6711_ip = 121;
                            continue _fun6711
                        }
                    case 107:
                        var8 = var6 + 1;
                        var5 = var2.length;
                        if (var8 < var5) {
                            _fun6711_ip = 86;
                            continue _fun6711
                        }
                    case 119:
                        _fun6711_ip = 133;
                        continue _fun6711;
                    case 121:
                        var5 = var2.splice;
                        var5 = var5.bind(var2)(var6, var7);
                    case 133:
                        var2 = var2.length;
                        if (!(var4 === var2)) {
                            _fun6711_ip = 156;
                            continue _fun6711
                        }
                    case 142:
                        var4 = var0._callbacks;
                        var2 = var1 + var3;
                        var2 = delete var4[var2];
                    case 156:
                        return var0;
                    case 158:
                        var2 = var0._callbacks;
                        var1 = var1 + var3;
                        var1 = delete var2[var1];
                        return var0;
                    case 174:
                        var1 = {};
                        var0._callbacks = var1;
                        return var0;
                }
            };
            var7.removeEventListener = var3;
            var6.removeAllListeners = var3;
            var5.removeListener = var3;
            var4.off = var3;
            var4 = var2.prototype;
            var3 = function(arg0) { // Environment: var1
                _fun6712: for (var _fun6712_ip = 0;;) switch (_fun6712_ip) {
                    case 0:
                        var0 = this;
                        var6 = undefined;
                        var1 = var0._callbacks;
                        if (var1) {
                            _fun6712_ip = 15;
                            continue _fun6712
                        }
                    case 13:
                        var1 = {};
                    case 15:
                        var0._callbacks = var1;
                        var1 = global;
                        var3 = var1.Array;
                        var1 = arguments.length;
                        var5 = 1;
                        var9 = var1 - var5;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var10 = var2;
                        var1 = new var10[var3](var9, var8);
                        var4 = var1 instanceof Object ? var1 : var2;
                        var2 = var0._callbacks;
                        var3 = '$';
                        var1 = arg0;
                        var1 = var3 + var1;
                        var3 = var2[var1];
                        var1 = arguments.length;
                        var1 = var5 < var1;
                        var2 = var5;
                        if (!var1) {
                            _fun6712_ip = 115;
                            continue _fun6712
                        }
                    case 93:
                        var7 = var2 - var5;
                        var1 = arguments[var2];
                        var4[var7] = var1;
                        var2 = var2 + 1;
                        var1 = arguments.length;
                        if (var2 < var1) {
                            _fun6712_ip = 93;
                            continue _fun6712
                        }
                    case 115:
                        if (!var3) {
                            _fun6712_ip = 164;
                            continue _fun6712
                        }
                    case 118:
                        var2 = var3.slice;
                        var1 = 0;
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.length;
                        var5 = var1 < var2;
                        if (!var5) {
                            _fun6712_ip = 164;
                            continue _fun6712
                        }
                    case 142:
                        var6 = var3[var1];
                        var5 = var6.apply;
                        var5 = var5.bind(var6)(var0, var4);
                        var1 = var1 + 1;
                        if (var1 < var2) {
                            _fun6712_ip = 142;
                            continue _fun6712
                        }
                    case 164:
                        return var0;
                }
            };
            var4.emit = var3;
            var4 = var2.prototype;
            var3 = function(arg0) { // Environment: var1
                _fun6713: for (var _fun6713_ip = 0;;) switch (_fun6713_ip) {
                    case 0:
                        var0 = this;
                        var1 = var0._callbacks;
                        if (var1) {
                            _fun6713_ip = 13;
                            continue _fun6713
                        }
                    case 11:
                        var1 = {};
                    case 13:
                        var0._callbacks = var1;
                        var1 = var0._callbacks;
                        var2 = '$';
                        var0 = arg0;
                        var0 = var2 + var0;
                        var0 = var1[var0];
                        if (var0) {
                            _fun6713_ip = 47;
                            continue _fun6713
                        }
                    case 43:
                        var0 = new Array(0);
                    case 47:
                        return var0;
                }
            };
            var4.listeners = var3;
            var2 = var2.prototype;
            var1 = function(arg0) { // Environment: var1
                var2 = this;
                var1 = var2.listeners;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = var0.length;
                var0 = !var0;
                var0 = !var0;
                return var0;
            };
            var2.hasListeners = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);