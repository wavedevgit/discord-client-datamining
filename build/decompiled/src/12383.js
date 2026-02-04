// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2, arg3) { // Environment: var0
        _fun94428: for (var _fun94428_ip = 0;;) switch (_fun94428_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var7 = arg3;
                var6 = this;
                var _closure2_slot0 = var9;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var7;
                var5 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot3;
                        var2 = _closure3_slot0;
                        var1.nextExpectedAction = var2;
                        var3 = var1.sequenceLevels;
                        var2 = _closure2_slot0;
                        var0 = var3[var2];
                        var0 = var0 + 1;
                        var3[var2] = var0;
                        var0 = var1.resetSequenceTimer;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var4 = function arg0() {
                    _fun94431: for (var _fun94431_ip = 0;;) switch (_fun94431_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = _closure2_slot3;
                            var4 = var5.fireCallback;
                            var2 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var4.bind(var5)(var2, var3, var0);
                            var2 = _closure2_slot2;
                            var0 = 'keyup';
                            if (!(var0 !== var2)) {
                                _fun94431_ip = 82;
                                continue _fun94431
                            }
                        case 43:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 0;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var4.bind(var2)(var0);
                            var1 = _closure2_slot3;
                            var0 = var0.bind(var2)(var3);
                            var1.ignoreNextKeyup = var0;
                        case 82:
                            var0 = global;
                            var3 = var0.setTimeout;
                            var0 = undefined;
                            var2 = function() { // Environment: var1
                                var1 = _closure2_slot3;
                                var0 = var1.resetSequences;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            var1 = 10;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var _closure2_slot3 = var6;
                var0 = var6.sequenceLevels;
                var3 = 0;
                var0[var9] = var3;
                var0 = var8.length;
                var1 = var3 < var0;
                var0 = undefined;
                var2 = 1;
                if (!var1) {
                    _fun94428_ip = 168;
                    continue _fun94428
                }
            case 76:
                var10 = var3 + var2;
                var1 = var8.length;
                var11 = var4;
                if (!(var10 !== var1)) {
                    _fun94428_ip = 127;
                    continue _fun94428
                }
            case 92:
                var1 = var7;
                if (var1) {
                    _fun94428_ip = 122;
                    continue _fun94428
                }
            case 98:
                var12 = var6.getKeyInfo;
                var10 = var3 + var2;
                var10 = var8[var10];
                var10 = var12.bind(var6)(var10);
                var1 = var10.action;
            case 122:
                var11 = var5.bind(var0)(var1);
            case 127:
                var10 = var6.bindSingle;
                var17 = var8[var3];
                var18 = var6;
                var16 = var11;
                var15 = var7;
                var14 = var9;
                var13 = var3;
                var1 = var18[var10](var17, var16, var15, var14, var13, var12);
                var3 = var3 + 1;
                var1 = var8.length;
                if (var3 < var1) {
                    _fun94428_ip = 76;
                    continue _fun94428
                }
            case 168:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12366]);