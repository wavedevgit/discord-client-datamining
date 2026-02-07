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
    var0 = function arg0() {
        _fun100297: for (var _fun100297_ip = 0;;) switch (_fun100297_ip) {
            case 0:
                var0 = arg0;
                var6 = undefined;
                var4 = undefined;
                var1 = arguments.length;
                var9 = 1;
                if (!(var1 > var9)) {
                    _fun100297_ip = 25;
                    continue _fun100297
                }
            case 17:
                var1 = arguments[var9];
                if (!(var6 === var1)) {
                    _fun100297_ip = 29;
                    continue _fun100297
                }
            case 25:
                var3 = {};
                _fun100297_ip = 33;
                continue _fun100297;
            case 29:
                var3 = arguments[var9];
            case 33:
                var2 = arguments.length;
                var1 = 2;
                if (!(var2 > var1)) {
                    _fun100297_ip = 51;
                    continue _fun100297
                }
            case 43:
                var2 = arguments[var1];
                if (!(var6 === var2)) {
                    _fun100297_ip = 85;
                    continue _fun100297
                }
            case 51:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 0;
                var2 = var7[var2];
                var5 = var5.bind(var6)(var2);
                var2 = var5.getCurrentScope;
                var2 = var2.bind(var5)();
                _fun100297_ip = 89;
                continue _fun100297;
            case 85:
                var2 = arguments[var1];
            case 89:
                var13 = var0.message;
                var14 = var0.name;
                var15 = var0.email;
                var12 = var0.url;
                var11 = var0.source;
                var10 = var0.associatedEventId;
                var4 = var0.tags;
                var1 = {
                    'contexts': null,
                    'type': 'feedback',
                    'level': 'info'
                };
                var5 = {};
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var9];
                var9 = var8.bind(var6)(var7);
                var8 = var9.dropUndefinedKeys;
                var7 = {};
                var7.contact_email = var15;
                var7.name = var14;
                var7.message = var13;
                var7.url = var12;
                var7.source = var11;
                var7.associated_event_id = var10;
                var7 = var8.bind(var9)(var7);
                var5.feedback = var7;
                var1.contexts = var5;
                var1.tags = var4;
                var5 = var2;
                if (!var5) {
                    _fun100297_ip = 230;
                    continue _fun100297
                }
            case 220:
                var4 = var2.getClient;
                var5 = var4.bind(var2)();
            case 230:
                if (var5) {
                    _fun100297_ip = 262;
                    continue _fun100297
                }
            case 233:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 0;
                var0 = var7[var0];
                var4 = var4.bind(var6)(var0);
                var0 = var4.getClient;
                var5 = var0.bind(var4)();
            case 262:
                if (!var5) {
                    _fun100297_ip = 284;
                    continue _fun100297
                }
            case 265:
                var4 = var5.emit;
                var0 = 'beforeSendFeedback';
                var0 = var4.bind(var5)(var0, var1, var3);
            case 284:
                var0 = var2.captureEvent;
                var0 = var0.bind(var2)(var1, var3);
                return var0;
        }
    };
    var1.captureFeedback = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [13000, 12935]);