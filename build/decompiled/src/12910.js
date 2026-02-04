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
    var0 = function arg0, arg1, arg2() {
        _fun99054: for (var _fun99054_ip = 0;;) switch (_fun99054_ip) {
            case 0:
                var5 = arg1;
                var1 = arg2;
                var0 = {};
                var2 = 'client_report';
                var0.type = var2;
                var4 = new Array(2);
                var4[0] = var0;
                var0 = {};
                if (var1) {
                    _fun99054_ip = 63;
                    continue _fun99054
                }
            case 29:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var2 = var3.dateTimestampInSeconds;
                var1 = var2.bind(var3)();
            case 63:
                var0.timestamp = var1;
                var1 = arg0;
                var0.discarded_events = var1;
                var4[1] = var0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.createEnvelope;
                if (var5) {
                    _fun99054_ip = 118;
                    continue _fun99054
                }
            case 114:
                var1 = {};
                _fun99054_ip = 128;
                continue _fun99054;
            case 118:
                var0 = {};
                var0.dsn = var5;
                var1 = var0;
            case 128:
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.createClientReportEnvelope = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12889, 12909]);