// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun9389: for (var _fun9389_ip = 0;;) switch (_fun9389_ip) {
            case 0:
                var0 = arg1;
                var5 = arg2;
                var1 = arg3;
                var4 = arg4;
                var3 = {};
                var2 = global;
                var2 = var2.Date;
                var6 = var2.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var6;
                var2 = new var9[var2](var8);
                var6 = var2 instanceof Object ? var2 : var6;
                var2 = var6.toISOString;
                var2 = var2.bind(var6)();
                var3.sent_at = var2;
                var2 = null;
                var2 = var2 != var5;
                if (!var2) {
                    _fun9389_ip = 72;
                    continue _fun9389
                }
            case 66:
                var2 = var5.sdk;
            case 72:
                if (!var2) {
                    _fun9389_ip = 115;
                    continue _fun9389
                }
            case 75:
                var2 = {};
                var6 = var5.sdk;
                var6 = var6.name;
                var2.name = var6;
                var5 = var5.sdk;
                var5 = var5.version;
                var2.version = var5;
                var3.sdk = var2;
            case 115:
                if (!var1) {
                    _fun9389_ip = 121;
                    continue _fun9389
                }
            case 118:
                var1 = var4;
            case 121:
                if (!var1) {
                    _fun9389_ip = 165;
                    continue _fun9389
                }
            case 124:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.dsnToString;
                var1 = var1.bind(var2)(var4);
                var3.dsn = var1;
            case 165:
                if (!var0) {
                    _fun9389_ip = 174;
                    continue _fun9389
                }
            case 168:
                var3.trace = var0;
            case 174:
                var0 = {};
                var1 = 'check_in';
                var0.type = var1;
                var4 = new Array(2);
                var4[0] = var0;
                var0 = arg0;
                var4[1] = var0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.createEnvelope;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var1.createCheckInEnvelope = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [836, 862]);