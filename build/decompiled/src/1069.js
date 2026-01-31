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
    var0 = function(arg0, arg1) { // Original name: createUserFeedbackEnvelope, environment: var0
        _fun10955: for (var _fun10955_ip = 0;;) switch (_fun10955_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var9 = var2.metadata;
                var1 = var2.tunnel;
                var10 = var2.dsn;
                var2 = global;
                var6 = var2.Object;
                var5 = var6.assign;
                var4 = {};
                var3 = var0.event_id;
                var4.event_id = var3;
                var2 = var2.Date;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var3;
                var2 = new var15[var2](var14);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var3.toISOString;
                var2 = var2.bind(var3)();
                var4.sent_at = var2;
                var2 = null;
                var7 = var2 == var9;
                var2 = undefined;
                var3 = undefined;
                if (var7) {
                    _fun10955_ip = 110;
                    continue _fun10955
                }
            case 104:
                var3 = var9.sdk;
            case 110:
                if (!var3) {
                    _fun10955_ip = 157;
                    continue _fun10955
                }
            case 113:
                var7 = {};
                var8 = {};
                var11 = var9.sdk;
                var11 = var11.name;
                var8.name = var11;
                var9 = var9.sdk;
                var9 = var9.version;
                var8.version = var9;
                var7.sdk = var8;
                var3 = var7;
            case 157:
                var7 = !var1;
                var1 = !var7;
                if (var7) {
                    _fun10955_ip = 172;
                    continue _fun10955
                }
            case 166:
                var7 = !var10;
                var1 = !var7;
            case 172:
                if (!var1) {
                    _fun10955_ip = 218;
                    continue _fun10955
                }
            case 175:
                var7 = {};
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var8 = 0;
                var8 = var11[var8];
                var9 = var9.bind(var2)(var8);
                var8 = var9.dsnToString;
                var8 = var8.bind(var9)(var10);
                var7.dsn = var8;
                var1 = var7;
            case 218:
                var3 = var5.bind(var6)(var4, var3, var1);
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