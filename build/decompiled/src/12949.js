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
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun99452: for (var _fun99452_ip = 0;;) switch (_fun99452_ip) {
            case 0:
                var2 = arg1;
                var5 = arg2;
                var0 = arg3;
                var4 = arg4;
                var3 = {};
                var1 = global;
                var1 = var1.Date;
                var6 = var1.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var6;
                var1 = new var9[var1](var8);
                var6 = var1 instanceof Object ? var1 : var6;
                var1 = var6.toISOString;
                var1 = var1.bind(var6)();
                var3.sent_at = var1;
                var1 = var5;
                if (!var1) {
                    _fun99452_ip = 69;
                    continue _fun99452
                }
            case 63:
                var1 = var5.sdk;
            case 69:
                if (!var1) {
                    _fun99452_ip = 112;
                    continue _fun99452
                }
            case 72:
                var1 = {};
                var6 = var5.sdk;
                var6 = var6.name;
                var1.name = var6;
                var5 = var5.sdk;
                var5 = var5.version;
                var1.version = var5;
                var3.sdk = var1;
            case 112:
                if (!var0) {
                    _fun99452_ip = 118;
                    continue _fun99452
                }
            case 115:
                var0 = var4;
            case 118:
                if (!var0) {
                    _fun99452_ip = 162;
                    continue _fun99452
                }
            case 121:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var5.bind(var0)(var1);
                var0 = var1.dsnToString;
                var0 = var0.bind(var1)(var4);
                var3.dsn = var0;
            case 162:
                if (!var2) {
                    _fun99452_ip = 206;
                    continue _fun99452
                }
            case 165:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.dropUndefinedKeys;
                var0 = var0.bind(var1)(var2);
                var3.trace = var0;
            case 206:
                var0 = {};
                var1 = 'check_in';
                var0.type = var1;
                var4 = new Array(2);
                var4[0] = var0;
                var0 = arg0;
                var4[1] = var0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [12858]);