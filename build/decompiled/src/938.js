// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0, arg1() {
        _fun9765: for (var _fun9765_ip = 0;;) switch (_fun9765_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = var5;
                if (!var4) {
                    _fun9765_ip = 42;
                    continue _fun9765
                }
            case 12:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ' ';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 42:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0() {
        _fun9766: for (var _fun9766_ip = 0;;) switch (_fun9766_ip) {
            case 0:
                var1 = arg0;
                var0 = 'request';
                if (!(var0 !== var1)) {
                    _fun9766_ip = 137;
                    continue _fun9766
                }
            case 14:
                var0 = 'notification-incoming';
                if (!(var0 !== var1)) {
                    _fun9766_ip = 89;
                    continue _fun9766
                }
            case 24:
                var3 = undefined;
                var0 = 'notification-outgoing';
                var8 = undefined;
                var7 = undefined;
                if (!(var0 === var1)) {
                    _fun9766_ip = 183;
                    continue _fun9766
                }
            case 43:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var1 = var4[var0];
                var1 = var2.bind(var3)(var1);
                var8 = var1.MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var7 = var0.MCP_NOTIFICATION_ORIGIN_VALUE;
                _fun9766_ip = 183;
                continue _fun9766;
            case 89:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var1 = var4[var0];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var8 = var1.MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE;
                var0 = var4[var0];
                var0 = var3.bind(var2)(var0);
                var7 = var0.MCP_NOTIFICATION_ORIGIN_VALUE;
                _fun9766_ip = 183;
                continue _fun9766;
            case 137:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var1 = var4[var0];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var8 = var1.MCP_SERVER_OP_VALUE;
                var0 = var4[var0];
                var0 = var3.bind(var2)(var0);
                var7 = var0.MCP_FUNCTION_ORIGIN_VALUE;
            case 183:
                var4 = _closure1_slot2;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 2;
                var1 = var6[var0];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var2 = var1.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var1 = {};
                var2 = var4.bind(var3)(var1, var2, var8);
                var1 = var6[var0];
                var1 = var5.bind(var3)(var1);
                var1 = var1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var2 = var4.bind(var3)(var2, var1, var7);
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                var0 = 1;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.MCP_ROUTE_SOURCE_VALUE;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0() {
        _fun9767: for (var _fun9767_ip = 0;;) switch (_fun9767_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.type;
                var15 = var0.message;
                var11 = var0.transport;
                var10 = var0.extra;
                var3 = var0.callback;
                var16 = var15.method;
                var14 = var15.params;
                var0 = 'request';
                var5 = var16;
                if (!(var0 === var8)) {
                    _fun9767_ip = 115;
                    continue _fun9767
                }
            case 54:
                var2 = _closure1_slot3;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var0 = var1[var0];
                var1 = undefined;
                var6 = var4.bind(var1)(var0);
                var4 = var6.extractTargetInfo;
                var0 = var14;
                if (var0) {
                    _fun9767_ip = 97;
                    continue _fun9767
                }
            case 95:
                var0 = {};
            case 97:
                var0 = var4.bind(var6)(var16, var0);
                var0 = var0.target;
                var5 = var2.bind(var1)(var16, var0);
            case 115:
                var1 = global;
                var13 = var1.Object;
                var12 = var13.assign;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var4 = var7[var2];
                var2 = undefined;
                var9 = var6.bind(var2)(var4);
                var4 = var9.buildTransportAttributes;
                var11 = var4.bind(var9)(var11, var10);
                var10 = _closure1_slot2;
                var4 = 1;
                var4 = var7[var4];
                var4 = var6.bind(var2)(var4);
                var9 = var4.MCP_METHOD_NAME_ATTRIBUTE;
                var4 = {};
                var10 = var10.bind(var2)(var4, var9, var16);
                var4 = 5;
                var4 = var7[var4];
                var9 = var6.bind(var2)(var4);
                var4 = var9.buildTypeSpecificAttributes;
                var18 = var4.bind(var9)(var8, var15, var14);
                var4 = _closure1_slot4;
                var17 = var4.bind(var2)(var8);
                var21 = {};
                var22 = var13;
                var20 = var11;
                var19 = var10;
                var8 = var22[var12](var21, var20, var19, var18, var17, var16);
                var4 = 6;
                var4 = var7[var4];
                var6 = var6.bind(var2)(var4);
                var4 = var6.getClient;
                var7 = var4.bind(var6)();
                var4 = var1.Boolean;
                var1 = null;
                var6 = var1 == var7;
                var1 = undefined;
                if (var6) {
                    _fun9767_ip = 300;
                    continue _fun9767
                }
            case 284:
                var6 = var7.getOptions;
                var6 = var6.bind(var7)();
                var1 = var6.sendDefaultPii;
            case 300:
                var7 = var4.bind(var2)(var1);
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 7;
                var0 = var6[var0];
                var4 = var1.bind(var2)(var0);
                var0 = var4.filterMcpPiiFromSpanData;
                var4 = var0.bind(var4)(var8, var7);
                var0 = 8;
                var0 = var6[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.startSpan;
                var0 = {};
                var0.name = var5;
                var5 = true;
                var0.forceTransaction = var5;
                var0.attributes = var4;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = function arg0, arg1, arg2() {
        _fun9768: for (var _fun9768_ip = 0;;) switch (_fun9768_ip) {
            case 0:
                var15 = arg0;
                var10 = var15.method;
                var14 = var15.params;
                var2 = _closure1_slot3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var4 = undefined;
                var5 = var3.bind(var4)(var1);
                var3 = var5.extractTargetInfo;
                var1 = var14;
                if (var1) {
                    _fun9768_ip = 58;
                    continue _fun9768
                }
            case 56:
                var1 = {};
            case 58:
                var1 = var3.bind(var5)(var10, var1);
                var1 = var1.target;
                var6 = var2.bind(var4)(var10, var1);
                var1 = global;
                var13 = var1.Object;
                var12 = var13.assign;
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var2 = var7[var2];
                var9 = var3.bind(var4)(var2);
                var8 = var9.buildTransportAttributes;
                var5 = arg1;
                var2 = arg2;
                var11 = var8.bind(var9)(var5, var2);
                var9 = _closure1_slot2;
                var5 = 1;
                var2 = var7[var5];
                var2 = var3.bind(var4)(var2);
                var8 = var2.MCP_METHOD_NAME_ATTRIBUTE;
                var2 = {};
                var10 = var9.bind(var4)(var2, var8, var10);
                var2 = 5;
                var2 = var7[var2];
                var9 = var3.bind(var4)(var2);
                var2 = var9.buildTypeSpecificAttributes;
                var8 = 'request';
                var17 = var2.bind(var9)(var8, var15, var14);
                var2 = _closure1_slot4;
                var16 = var2.bind(var4)(var8);
                var20 = {};
                var21 = var13;
                var19 = var11;
                var18 = var10;
                var8 = var21[var12](var20, var19, var18, var17, var16, var15);
                var2 = 6;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getClient;
                var7 = var2.bind(var3)();
                var2 = var1.Boolean;
                var1 = null;
                var3 = var1 == var7;
                var1 = undefined;
                if (var3) {
                    _fun9768_ip = 266;
                    continue _fun9768
                }
            case 250:
                var3 = var7.getOptions;
                var3 = var3.bind(var7)();
                var1 = var3.sendDefaultPii;
            case 266:
                var7 = var2.bind(var4)(var1);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var2[var0];
                var1 = var3.bind(var4)(var0);
                var0 = var1.filterMcpPiiFromSpanData;
                var1 = var0.bind(var1)(var8, var7);
                var0 = {};
                var0.name = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.MCP_SERVER_OP_VALUE;
                var0.op = var2;
                var2 = true;
                var0.forceTransaction = var2;
                var0.attributes = var1;
                return var0;
        }
    };
    var2.buildMcpServerSpanConfig = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot5;
        var1 = {};
        var0 = 'notification-incoming';
        var1.type = var0;
        var0 = arg0;
        var1.message = var0;
        var0 = arg1;
        var1.transport = var0;
        var0 = arg2;
        var1.extra = var0;
        var0 = arg3;
        var1.callback = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.createMcpNotificationSpan = var3;
    var1 = function arg0, arg1, arg2() {
        var2 = _closure1_slot5;
        var1 = {};
        var0 = 'notification-outgoing';
        var1.type = var0;
        var0 = arg0;
        var1.message = var0;
        var0 = arg1;
        var1.transport = var0;
        var0 = arg2;
        var1.callback = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.createMcpOutgoingNotificationSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 937, 838, 939, 935, 940, 847, 941, 864]);