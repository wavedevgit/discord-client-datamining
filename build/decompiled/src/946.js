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
    var0 = function(arg0) { // Original name: captureFeedback, environment: var0
        _fun9803: for (var _fun9803_ip = 0;;) switch (_fun9803_ip) {
            case 0:
                var0 = arg0;
                var6 = undefined;
                var4 = undefined;
                var2 = arguments.length;
                var1 = 1;
                if (!(var2 > var1)) {
                    _fun9803_ip = 25;
                    continue _fun9803
                }
            case 17:
                var2 = arguments[var1];
                if (!(var6 === var2)) {
                    _fun9803_ip = 29;
                    continue _fun9803
                }
            case 25:
                var3 = {};
                _fun9803_ip = 33;
                continue _fun9803;
            case 29:
                var3 = arguments[var1];
            case 33:
                var2 = arguments.length;
                var1 = 2;
                if (!(var2 > var1)) {
                    _fun9803_ip = 51;
                    continue _fun9803
                }
            case 43:
                var2 = arguments[var1];
                if (!(var6 === var2)) {
                    _fun9803_ip = 85;
                    continue _fun9803
                }
            case 51:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 0;
                var2 = var7[var2];
                var5 = var5.bind(var6)(var2);
                var2 = var5.getCurrentScope;
                var2 = var2.bind(var5)();
                _fun9803_ip = 89;
                continue _fun9803;
            case 85:
                var2 = arguments[var1];
            case 89:
                var7 = var0.message;
                var8 = var0.name;
                var1 = {
                    'contexts': null,
                    'type': 'feedback',
                    'level': 'info'
                };
                var4 = {};
                var5 = {};
                var9 = var0.email;
                var5.contact_email = var9;
                var5.name = var8;
                var5.message = var7;
                var7 = var0.url;
                var5.url = var7;
                var7 = var0.source;
                var5.source = var7;
                var7 = var0.associatedEventId;
                var5.associated_event_id = var7;
                var4.feedback = var5;
                var1.contexts = var4;
                var0 = var0.tags;
                var1.tags = var0;
                var0 = null;
                var0 = var0 == var2;
                var5 = undefined;
                if (var0) {
                    _fun9803_ip = 204;
                    continue _fun9803
                }
            case 194:
                var0 = var2.getClient;
                var5 = var0.bind(var2)();
            case 204:
                if (var5) {
                    _fun9803_ip = 239;
                    continue _fun9803
                }
            case 207:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 0;
                var0 = var7[var0];
                var4 = var4.bind(var6)(var0);
                var0 = var4.getClient;
                var5 = var0.bind(var4)();
            case 239:
                if (!var5) {
                    _fun9803_ip = 261;
                    continue _fun9803
                }
            case 242:
                var4 = var5.emit;
                var0 = 'beforeSendFeedback';
                var0 = var4.bind(var5)(var0, var1, var3);
            case 261:
                var0 = var2.captureEvent;
                var0 = var0.bind(var2)(var1, var3);
                return var0;
        }
    };
    var1.captureFeedback = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [847]);