// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0() {
        _fun61695: for (var _fun61695_ip = 0;;) switch (_fun61695_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                if (!(var0 !== var5)) {
                    _fun61695_ip = 20;
                    continue _fun61695
                }
            case 9:
                var1 = 'object';
                var0 = typeof var5;
                if (!(var1 !== var0)) {
                    _fun61695_ip = 24;
                    continue _fun61695
                }
            case 20:
                var0 = undefined;
                return var0;
            case 24:
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var0 = var0.bind(var1)(var5);
                if (var0) {
                    _fun61695_ip = 47;
                    continue _fun61695
                }
            case 45:
                return var5;
            case 47:
                var0 = {};
                var4 = var5.length;
                var3 = 0;
                var6 = var3 < var4;
                var1 = undefined;
                if (!var6) {
                    _fun61695_ip = 124;
                    continue _fun61695
                }
            case 68:
                var7 = _closure1_slot2;
                var6 = var5[var3];
                var11 = var7.bind(var1)(var6);
                if (!var11) {
                    _fun61695_ip = 117;
                    continue _fun61695
                }
            case 84:
                var9 = var11;
                for (var6 in var9)
                    case 95: {
                        case 104: var13 = var6;
                        var12 = var11[var13];
                        var0[var13] = var12;
                        _fun61695_ip = 95;
                        continue _fun61695;
                    }
            case 117:
                var3 = var3 + 1;
                if (var3 < var4) {
                    _fun61695_ip = 68;
                    continue _fun61695
                }
            case 124:
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 0;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0, arg1, arg2, arg3) { // Environment: var0
            _fun61697: for (var _fun61697_ip = 0;;) switch (_fun61697_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var3 = undefined;
                    var7 = undefined;
                    var1 = var2[var0];
                    var6 = var2;
                    if (!var1) {
                        _fun61697_ip = 45;
                        continue _fun61697
                    }
                case 20:
                    var1 = {};
                    var4 = _closure1_slot2;
                    var2 = var2[var0];
                    var2 = var4.bind(var3)(var2);
                    var1[var0] = var2;
                    var6 = var1;
                case 45:
                    var4 = arguments.length;
                    var1 = global;
                    var8 = var1.Array;
                    var2 = 4;
                    var5 = var4 > var2;
                    var1 = 0;
                    if (!var5) {
                        _fun61697_ip = 72;
                        continue _fun61697
                    }
                case 68:
                    var1 = var4 - var2;
                case 72:
                    var5 = var8.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var8
                        }
                    });
                    var12 = var5;
                    var11 = var1;
                    var1 = new var12[var8](var11, var10);
                    var5 = var1 instanceof Object ? var1 : var5;
                    var8 = var2 < var4;
                    var1 = var2;
                    if (!var8) {
                        _fun61697_ip = 124;
                        continue _fun61697
                    }
                case 105:
                    var9 = var1 - var2;
                    var8 = arguments[var1];
                    var5[var9] = var8;
                    var1 = var1 + 1;
                    if (var1 < var4) {
                        _fun61697_ip = 105;
                        continue _fun61697
                    }
                case 124:
                    var2 = _closure2_slot0;
                    var1 = var2.apply;
                    var4 = new Array(4);
                    var4[0] = var6;
                    var4[1] = var0;
                    var0 = arg2;
                    var4[2] = var0;
                    var0 = arg3;
                    var4[3] = var0;
                    var0 = var4.concat;
                    var0 = var0.bind(var4)(var5);
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        return var0;
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7672]);