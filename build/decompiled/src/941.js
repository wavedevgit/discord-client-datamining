// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var4 = var3.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var10 = 'Module';
    var4.value = var10;
    var4 = var8.bind(var9)(var2, var5, var4);
    var5 = var3.Set;
    var4 = 1;
    var3 = var7[var4];
    var3 = var6.bind(var0)(var3);
    var8 = var3.CLIENT_ADDRESS_ATTRIBUTE;
    var3 = new Array(7);
    var3[0] = var8;
    var8 = var7[var4];
    var8 = var6.bind(var0)(var8);
    var8 = var8.CLIENT_PORT_ATTRIBUTE;
    var3[1] = var8;
    var8 = var7[var4];
    var8 = var6.bind(var0)(var8);
    var8 = var8.MCP_LOGGING_MESSAGE_ATTRIBUTE;
    var3[2] = var8;
    var8 = var7[var4];
    var8 = var6.bind(var0)(var8);
    var8 = var8.MCP_PROMPT_RESULT_DESCRIPTION_ATTRIBUTE;
    var3[3] = var8;
    var8 = var7[var4];
    var8 = var6.bind(var0)(var8);
    var8 = var8.MCP_PROMPT_RESULT_MESSAGE_CONTENT_ATTRIBUTE;
    var3[4] = var8;
    var8 = var7[var4];
    var8 = var6.bind(var0)(var8);
    var8 = var8.MCP_RESOURCE_URI_ATTRIBUTE;
    var3[5] = var8;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.MCP_TOOL_RESULT_CONTENT_ATTRIBUTE;
    var3[6] = var4;
    var4 = var5.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var5
        }
    });
    var14 = var4;
    var13 = var3;
    var3 = new var14[var5](var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot3 = var3;
    var1 = function(arg0, arg1) { // Original name: filterMcpPiiFromSpanData, environment: var1
        _fun9776: for (var _fun9776_ip = 0;;) switch (_fun9776_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = var3;
                if (var1) {
                    _fun9776_ip = 52;
                    continue _fun9776
                }
            case 12:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.entries;
                var4 = var1.bind(var2)(var3);
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun9777: for (var _fun9777_ip = 0;;) switch (_fun9777_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure1_slot2;
                            var11 = undefined;
                            var2 = arg1;
                            var1 = 2;
                            var1 = var3.bind(var11)(var2, var1);
                            var2 = 0;
                            var2 = var1[var2];
                            var12 = 1;
                            var1 = var1[var12];
                            var4 = _closure1_slot3;
                            var3 = var4.has;
                            var3 = var3.bind(var4)(var2);
                            var4 = !var3;
                            var3 = !var4;
                            if (!var4) {
                                _fun9777_ip = 127;
                                continue _fun9777
                            }
                        case 60:
                            var5 = var2.startsWith;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var12];
                            var4 = var6.bind(var11)(var4);
                            var9 = var4.MCP_REQUEST_ARGUMENT;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var8 = var4.concat;
                            var6 = '';
                            var4 = '.';
                            var4 = var8.bind(var6)(var9, var4);
                            var4 = var5.bind(var2)(var4);
                            var4 = !var4;
                            var3 = !var4;
                        case 127:
                            if (var3) {
                                _fun9777_ip = 313;
                                continue _fun9777
                            }
                        case 133:
                            var6 = var2.startsWith;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var12];
                            var4 = var5.bind(var11)(var4);
                            var10 = var4.MCP_TOOL_RESULT_PREFIX;
                            var5 = global;
                            var4 = var5.HermesInternal;
                            var4 = var4.concat;
                            var9 = '';
                            var8 = '.';
                            var4 = var4.bind(var9)(var10, var8);
                            var4 = var6.bind(var2)(var4);
                            var4 = !var4;
                            if (!var4) {
                                _fun9777_ip = 254;
                                continue _fun9777
                            }
                        case 200:
                            var6 = var2.startsWith;
                            var10 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var7 = var7[var12];
                            var7 = var10.bind(var11)(var7);
                            var7 = var7.MCP_PROMPT_RESULT_PREFIX;
                            var5 = var5.HermesInternal;
                            var5 = var5.concat;
                            var5 = var5.bind(var9)(var7, var8);
                            var5 = var6.bind(var2)(var5);
                            var4 = !var5;
                        case 254:
                            if (var4) {
                                _fun9777_ip = 272;
                                continue _fun9777
                            }
                        case 257:
                            var6 = var2.endsWith;
                            var5 = '_count';
                            var4 = var6.bind(var2)(var5);
                        case 272:
                            if (var4) {
                                _fun9777_ip = 290;
                                continue _fun9777
                            }
                        case 275:
                            var6 = var2.endsWith;
                            var5 = '_error';
                            var4 = var6.bind(var2)(var5);
                        case 290:
                            if (var4) {
                                _fun9777_ip = 310;
                                continue _fun9777
                            }
                        case 293:
                            var6 = var2.endsWith;
                            var5 = '.is_error';
                            var4 = var6.bind(var2)(var5);
                        case 310:
                            var3 = !var4;
                        case 313:
                            if (var3) {
                                _fun9777_ip = 320;
                                continue _fun9777
                            }
                        case 316:
                            var0[var2] = var1;
                        case 320:
                            return var0;
                    }
                };
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 52:
                return var0;
        }
    };
    var2.filterMcpPiiFromSpanData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 937]);