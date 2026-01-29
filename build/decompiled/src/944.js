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
    var0 = function(arg0, arg1, arg2) { // Original name: captureError, environment: var0
        _fun9788: for (var _fun9788_ip = 0;;) switch (_fun9788_ip) {
            case 0:
                var1 = arg0;
                var11 = arg1;
                var6 = arg2;
                var0 = undefined;
                var3 = undefined;
            case 13: // try_start_0
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 0;
                var4 = var7[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.getClient;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun9788_ip = 50;
                    continue _fun9788
                }
            case 48: // try_end0
                return var0;
            case 50: // try_start_1
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 1;
                var4 = var7[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.getActiveSpan;
                var7 = var4.bind(var5)();
                var3 = var7;
                var5 = null;
                var5 = var5 != var7;
                var4 = var5;
                if (!var5) {
                    _fun9788_ip = 108;
                    continue _fun9788
                }
            case 95:
                var7 = var3;
                var5 = var7.isRecording;
                var4 = var5.bind(var7)();
            case 108:
                if (!var4) {
                    _fun9788_ip = 167;
                    continue _fun9788
                }
            case 111:
                var5 = var3;
                var4 = var5.setStatus;
                var3 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 2;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.SPAN_STATUS_ERROR;
                var3.code = var7;
                var7 = 'internal_error';
                var3.message = var7;
                var3 = var4.bind(var5)(var3);
            case 167:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.captureException;
                var2 = var1;
                var1 = {};
                var5 = {
                    'type': 'auto.ai.mcp_server',
                    'handled': false
                };
                var7 = global;
                var9 = var7.Object;
                var8 = var9.assign;
                var7 = {};
                var10 = var11;
                if (var11) {
                    _fun9788_ip = 235;
                    continue _fun9788
                }
            case 229:
                var10 = 'handler_execution';
            case 235:
                var7.error_type = var10;
                var6 = var8.bind(var9)(var7, var6);
                var5.data = var6;
                var1.mechanism = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 261: // try_end1
                _fun9788_ip = 265;
                continue _fun9788;
            case 263: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
            case 265:
                return var0;
        }
    };
    var1.captureError = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [847, 819, 839, 867]);