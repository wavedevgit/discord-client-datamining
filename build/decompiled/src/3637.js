// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1) { // Original name: createBaseEach, environment: var0
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun32484: for (var _fun32484_ip = 0;;) switch (_fun32484_ip) {
                case 0:
                    var0 = arg0;
                    var8 = arg1;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun32484_ip = 189;
                        continue _fun32484
                    }
                case 15:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 0;
                    var1 = var3[var1];
                    var7 = undefined;
                    var1 = var2.bind(var7)(var1);
                    var1 = var1.bind(var7)(var0);
                    if (var1) {
                        _fun32484_ip = 62;
                        continue _fun32484
                    }
                case 50:
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var7)(var0, var8);
                    return var1;
                case 62:
                    var5 = var0.length;
                    var1 = _closure2_slot1;
                    var3 = -1;
                    if (!var1) {
                        _fun32484_ip = 83;
                        continue _fun32484
                    }
                case 80:
                    var3 = var5;
                case 83:
                    var1 = global;
                    var1 = var1.Object;
                    var4 = var1.bind(var7)(var0);
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun32484_ip = 112;
                        continue _fun32484
                    }
                case 103:
                    var2 = var3 + 1;
                    var1 = var2 < var5;
                    _fun32484_ip = 121;
                    continue _fun32484;
                case 112:
                    var3 = parseFloat(var3);
                    var2 = var3 - 1;
                    var1 = var3;
                case 121:
                    if (!var1) {
                        _fun32484_ip = 187;
                        continue _fun32484
                    }
                case 124:
                    var1 = var4[var2];
                    var1 = var8.bind(var7)(var1, var2, var4);
                    var3 = false;
                    if (!(var3 !== var1)) {
                        _fun32484_ip = 187;
                        continue _fun32484
                    }
                case 141:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun32484_ip = 157;
                        continue _fun32484
                    }
                case 148:
                    var9 = var2 + 1;
                    var1 = var9 < var5;
                    _fun32484_ip = 166;
                    continue _fun32484;
                case 157:
                    var10 = parseFloat(var2);
                    var9 = var10 - 1;
                    var1 = var10;
                case 166:
                    if (!var1) {
                        _fun32484_ip = 187;
                        continue _fun32484
                    }
                case 169:
                    var1 = var4[var9];
                    var1 = var8.bind(var7)(var1, var9, var4);
                    var2 = var9;
                    if (var3 !== var1) {
                        _fun32484_ip = 141;
                        continue _fun32484
                    }
                case 187:
                    return var0;
                case 189:
                    return var0;
            }
        };
        return var0;
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [767]);