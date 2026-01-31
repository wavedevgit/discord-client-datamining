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
    var2 = 0;
    var1.header = var2;
    var2 = 1;
    var1.items = var2;
    var0 = function(arg0, arg1) { // Original name: createUserFeedbackEnvelope, environment: var0
        _fun12828: for (var _fun12828_ip = 0;;) switch (_fun12828_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var12 = var2.metadata;
                var1 = var2.tunnel;
                var9 = var2.dsn;
                var2 = global;
                var5 = var2.Object;
                var4 = var5.assign;
                var8 = var2.Object;
                var7 = var8.assign;
                var6 = {};
                var3 = var0.event_id;
                var6.event_id = var3;
                var2 = var2.Date;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = var3;
                var2 = new var16[var2](var15);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var3.toISOString;
                var2 = var2.bind(var3)();
                var6.sent_at = var2;
                var2 = null;
                var10 = var2 == var12;
                var2 = undefined;
                var3 = undefined;
                if (var10) {
                    _fun12828_ip = 121;
                    continue _fun12828
                }
            case 115:
                var3 = var12.sdk;
            case 121:
                if (!var3) {
                    _fun12828_ip = 168;
                    continue _fun12828
                }
            case 124:
                var10 = {};
                var11 = {};
                var13 = var12.sdk;
                var13 = var13.name;
                var11.name = var13;
                var12 = var12.sdk;
                var12 = var12.version;
                var11.version = var12;
                var10.sdk = var11;
                var3 = var10;
            case 168:
                var3 = var7.bind(var8)(var6, var3);
                var6 = !var1;
                var1 = !var6;
                if (var6) {
                    _fun12828_ip = 189;
                    continue _fun12828
                }
            case 183:
                var6 = !var9;
                var1 = !var6;
            case 189:
                if (!var1) {
                    _fun12828_ip = 235;
                    continue _fun12828
                }
            case 192:
                var6 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 0;
                var7 = var10[var7];
                var8 = var8.bind(var2)(var7);
                var7 = var8.dsnToString;
                var7 = var7.bind(var8)(var9);
                var6.dsn = var7;
                var1 = var6;
            case 235:
                var3 = var4.bind(var5)(var3, var1);
                var1 = {};
                var4 = 'user_report';
                var1.type = var4;
                var4 = new Array(2);
                var4[0] = var1;
                var4[1] = var0;
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var0 = var5[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.createEnvelope;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var1.createUserFeedbackEnvelope = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);