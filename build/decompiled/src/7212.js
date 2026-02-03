// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function arg0() {
        _fun59055: for (var _fun59055_ip = 0;;) switch (_fun59055_ip) {
            case 0:
                var12 = arg0;
                var0 = 0;
                var1 = var12[var0];
                var _closure2_slot1 = var1;
                var0 = var12.length;
                var11 = 1;
                var2 = var11 < var0;
                var0 = undefined;
                var10 = 'optionalCall';
                var9 = 'call';
                var8 = 'access';
                var7 = null;
                var6 = 2;
                var5 = 'optionalAccess';
                var4 = var1;
                var3 = var11;
                var1 = var4;
                if (!var2) {
                    _fun59055_ip = 175;
                    continue _fun59055
                }
            case 66:
                var14 = var12[var3];
                var2 = var3 + var11;
                var2 = var12[var2];
                var3 = var3 + var6;
                var15 = var5 === var14;
                if (var15) {
                    _fun59055_ip = 93;
                    continue _fun59055
                }
            case 89:
                if (!(var10 === var14)) {
                    _fun59055_ip = 97;
                    continue _fun59055
                }
            case 93:
                if (!(var7 != var4)) {
                    _fun59055_ip = 177;
                    continue _fun59055
                }
            case 97:
                if (!(var8 !== var14)) {
                    _fun59055_ip = 144;
                    continue _fun59055
                }
            case 101:
                if (var15) {
                    _fun59055_ip = 144;
                    continue _fun59055
                }
            case 104:
                var15 = var9 !== var14;
                if (!var15) {
                    _fun59055_ip = 115;
                    continue _fun59055
                }
            case 111:
                var15 = var10 !== var14;
            case 115:
                var14 = var4;
                if (var15) {
                    _fun59055_ip = 160;
                    continue _fun59055
                }
            case 121:
                var15 = function() { // Environment: var13
                    _fun59056: for (var _fun59056_ip = 0;;) switch (_fun59056_ip) {
                        case 0:
                            var2 = undefined;
                            var1 = arguments.length;
                            var0 = global;
                            var0 = var0.Array;
                            var3 = var0.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var8 = var3;
                            var7 = var1;
                            var0 = new var8[var0](var7, var6);
                            var5 = var0 instanceof Object ? var0 : var3;
                            var0 = 0;
                            var3 = var0 < var1;
                            if (!var3) {
                                _fun59056_ip = 60;
                                continue _fun59056
                            }
                        case 45:
                            var3 = arguments[var0];
                            var5[var0] = var3;
                            var0 = var0 + 1;
                            if (var0 < var1) {
                                _fun59056_ip = 45;
                                continue _fun59056
                            }
                        case 60:
                            var3 = _closure2_slot1;
                            var2 = var3.call;
                            var1 = var2.apply;
                            var0 = _closure2_slot0;
                            var4 = new Array(1);
                            var4[0] = var0;
                            var0 = var4.concat;
                            var0 = var0.bind(var4)(var5);
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var15 = var2.bind(var0)(var15);
                _closure2_slot1 = var15;
                var _closure2_slot0 = var0;
                var14 = var15;
                _fun59055_ip = 160;
                continue _fun59055;
            case 144:
                _closure2_slot0 = var4;
                var2 = var2.bind(var0)(var4);
                _closure2_slot1 = var2;
                var14 = var2;
            case 160:
                var2 = var12.length;
                var4 = var14;
                var1 = var4;
                if (var3 < var2) {
                    _fun59055_ip = 66;
                    continue _fun59055
                }
            case 175:
                return var1;
            case 177:
                return var0;
        }
    };
    var1._optionalChain = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);