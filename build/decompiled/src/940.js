// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function(arg0, arg1) { // Original name: getNotificationAttributes, environment: var3
        _fun9773: for (var _fun9773_ip = 0;;) switch (_fun9773_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = {};
                var2 = 'notifications/cancelled';
                if (!(var2 !== var3)) {
                    _fun9773_ip = 813;
                    continue _fun9773
                }
            case 21:
                var2 = 'notifications/message';
                if (!(var2 !== var3)) {
                    _fun9773_ip = 504;
                    continue _fun9773
                }
            case 34:
                var2 = 'notifications/progress';
                if (!(var2 !== var3)) {
                    _fun9773_ip = 287;
                    continue _fun9773
                }
            case 47:
                var2 = 'notifications/resources/updated';
                if (!(var2 !== var3)) {
                    _fun9773_ip = 96;
                    continue _fun9773
                }
            case 57:
                var2 = 'notifications/initialized';
                if (!(var2 === var3)) {
                    _fun9773_ip = 901;
                    continue _fun9773
                }
            case 70:
                var2 = 'initialization_complete';
                var0['mcp.lifecycle.phase'] = var2;
                var2 = 1;
                var0['mcp.protocol.ready'] = var2;
                _fun9773_ip = 901;
                continue _fun9773;
            case 96:
                var2 = null;
                if (!(var2 != var1)) {
                    _fun9773_ip = 901;
                    continue _fun9773
                }
            case 105:
                var2 = var1.uri;
                if (!var2) {
                    _fun9773_ip = 901;
                    continue _fun9773
                }
            case 116:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var2 = var3[var2];
                var6 = undefined;
                var2 = var5.bind(var6)(var2);
                var8 = var2.MCP_RESOURCE_URI_ATTRIBUTE;
                var2 = global;
                var9 = var2.String;
                var7 = var1.uri;
                var7 = var9.bind(var6)(var7);
                var0[var8] = var7;
                var7 = 2;
                var3 = var3[var7];
                var5 = var5.bind(var6)(var3);
                var3 = var5.parseStringToURLObject;
                var8 = var2.String;
                var2 = var1.uri;
                var2 = var8.bind(var6)(var2);
                var2 = var3.bind(var5)(var2);
                var3 = var2;
                if (!var3) {
                    _fun9773_ip = 245;
                    continue _fun9773
                }
            case 214:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isURLObjectRelative;
                var4 = var4.bind(var5)(var2);
                var3 = !var4;
            case 245:
                if (!var3) {
                    _fun9773_ip = 901;
                    continue _fun9773
                }
            case 251:
                var5 = var2.protocol;
                var4 = var5.replace;
                var3 = ':';
                var2 = '';
                var2 = var4.bind(var5)(var3, var2);
                var0['mcp.resource.protocol'] = var2;
                _fun9773_ip = 901;
                continue _fun9773;
            case 287:
                var2 = null;
                var3 = var2 != var1;
                if (!var3) {
                    _fun9773_ip = 302;
                    continue _fun9773
                }
            case 296:
                var3 = var1.progressToken;
            case 302:
                if (!var3) {
                    _fun9773_ip = 332;
                    continue _fun9773
                }
            case 305:
                var3 = global;
                var5 = var3.String;
                var4 = var1.progressToken;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var0['mcp.progress.token'] = var3;
            case 332:
                var5 = var2 == var1;
                var4 = undefined;
                var3 = undefined;
                if (var5) {
                    _fun9773_ip = 349;
                    continue _fun9773
                }
            case 343:
                var3 = var1.progress;
            case 349:
                var5 = 'number';
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun9773_ip = 372;
                    continue _fun9773
                }
            case 360:
                var3 = var1.progress;
                var0['mcp.progress.current'] = var3;
            case 372:
                var6 = var2 == var1;
                var3 = undefined;
                if (var6) {
                    _fun9773_ip = 387;
                    continue _fun9773
                }
            case 381:
                var3 = var1.total;
            case 387:
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun9773_ip = 457;
                    continue _fun9773
                }
            case 394:
                var3 = var1.total;
                var0['mcp.progress.total'] = var3;
                var6 = var2 == var1;
                var3 = undefined;
                if (var6) {
                    _fun9773_ip = 421;
                    continue _fun9773
                }
            case 415:
                var3 = var1.progress;
            case 421:
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun9773_ip = 457;
                    continue _fun9773
                }
            case 428:
                var5 = var1.progress;
                var3 = var1.total;
                var5 = var5 / var3;
                var3 = 100;
                var3 = var5 * var3;
                var0['mcp.progress.percentage'] = var3;
            case 457:
                var2 = var2 != var1;
                if (!var2) {
                    _fun9773_ip = 469;
                    continue _fun9773
                }
            case 464:
                var2 = var1.message;
            case 469:
                if (!var2) {
                    _fun9773_ip = 901;
                    continue _fun9773
                }
            case 475:
                var2 = global;
                var3 = var2.String;
                var2 = var1.message;
                var2 = var3.bind(var4)(var2);
                var0['mcp.progress.message'] = var2;
                _fun9773_ip = 901;
                continue _fun9773;
            case 504:
                var2 = null;
                var3 = var2 != var1;
                if (!var3) {
                    _fun9773_ip = 519;
                    continue _fun9773
                }
            case 513:
                var3 = var1.level;
            case 519:
                if (!var3) {
                    _fun9773_ip = 576;
                    continue _fun9773
                }
            case 522:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var6 = undefined;
                var3 = var4.bind(var6)(var3);
                var4 = var3.MCP_LOGGING_LEVEL_ATTRIBUTE;
                var3 = global;
                var5 = var3.String;
                var3 = var1.level;
                var3 = var5.bind(var6)(var3);
                var0[var4] = var3;
            case 576:
                var3 = var2 != var1;
                if (!var3) {
                    _fun9773_ip = 589;
                    continue _fun9773
                }
            case 583:
                var3 = var1.logger;
            case 589:
                if (!var3) {
                    _fun9773_ip = 646;
                    continue _fun9773
                }
            case 592:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var6 = undefined;
                var3 = var4.bind(var6)(var3);
                var4 = var3.MCP_LOGGING_LOGGER_ATTRIBUTE;
                var3 = global;
                var5 = var3.String;
                var3 = var1.logger;
                var3 = var5.bind(var6)(var3);
                var0[var4] = var3;
            case 646:
                var3 = var2 == var1;
                var4 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun9773_ip = 662;
                    continue _fun9773
                }
            case 657:
                var2 = var1.data;
            case 662:
                if (!(var4 !== var2)) {
                    _fun9773_ip = 901;
                    continue _fun9773
                }
            case 669:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = 1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var6 = var3.MCP_LOGGING_DATA_TYPE_ATTRIBUTE;
                var3 = var1.data;
                var3 = typeof var3;
                var0[var6] = var3;
                var3 = var1.data;
                var6 = 'string';
                var3 = typeof var3;
                if (!(var6 !== var3)) {
                    _fun9773_ip = 779;
                    continue _fun9773
                }
            case 726:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var6 = var3.MCP_LOGGING_MESSAGE_ATTRIBUTE;
                var3 = global;
                var8 = var3.JSON;
                var7 = var8.stringify;
                var3 = var1.data;
                var3 = var7.bind(var8)(var3);
                var0[var6] = var3;
                _fun9773_ip = 901;
                continue _fun9773;
            case 779:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var3 = var2.MCP_LOGGING_MESSAGE_ATTRIBUTE;
                var2 = var1.data;
                var0[var3] = var2;
                _fun9773_ip = 901;
                continue _fun9773;
            case 813:
                var2 = null;
                var3 = var2 != var1;
                if (!var3) {
                    _fun9773_ip = 828;
                    continue _fun9773
                }
            case 822:
                var3 = var1.requestId;
            case 828:
                if (!var3) {
                    _fun9773_ip = 858;
                    continue _fun9773
                }
            case 831:
                var3 = global;
                var5 = var3.String;
                var4 = var1.requestId;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var0['mcp.cancelled.request_id'] = var3;
            case 858:
                var2 = var2 != var1;
                if (!var2) {
                    _fun9773_ip = 871;
                    continue _fun9773
                }
            case 865:
                var2 = var1.reason;
            case 871:
                if (!var2) {
                    _fun9773_ip = 901;
                    continue _fun9773
                }
            case 874:
                var2 = global;
                var3 = var2.String;
                var2 = var1.reason;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var0['mcp.cancelled.reason'] = var1;
            case 901:
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var3 = function(arg0, arg1, arg2) { // Original name: buildTypeSpecificAttributes, environment: var3
        _fun9774: for (var _fun9774_ip = 0;;) switch (_fun9774_ip) {
            case 0:
                var0 = arg1;
                var7 = arg2;
                var2 = 'request';
                var1 = arg0;
                if (!(var2 !== var1)) {
                    _fun9774_ip = 48;
                    continue _fun9774
                }
            case 17:
                var4 = _closure1_slot3;
                var3 = var0.method;
                var2 = var7;
                if (var7) {
                    _fun9774_ip = 38;
                    continue _fun9774
                }
            case 36:
                var2 = {};
            case 38:
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            case 48:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var9 = 3;
                var2 = var2[var9];
                var8 = undefined;
                var5 = var3.bind(var8)(var2);
                var4 = var5.extractTargetInfo;
                var3 = var0.method;
                var2 = var7;
                if (var7) {
                    _fun9774_ip = 93;
                    continue _fun9774
                }
            case 91:
                var2 = {};
            case 93:
                var2 = var4.bind(var5)(var3, var2);
                var6 = global;
                var5 = var6.Object;
                var4 = var5.assign;
                var3 = var0.id;
                var3 = var8 !== var3;
                if (!var3) {
                    _fun9774_ip = 179;
                    continue _fun9774
                }
            case 124:
                var12 = _closure1_slot2;
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var10 = 1;
                var10 = var13[var10];
                var10 = var11.bind(var8)(var10);
                var11 = var10.MCP_REQUEST_ID_ATTRIBUTE;
                var10 = var6.String;
                var6 = var0.id;
                var10 = var10.bind(var8)(var6);
                var6 = {};
                var3 = var12.bind(var8)(var6, var11, var10);
            case 179:
                var2 = var2.attributes;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var9];
                var6 = var6.bind(var8)(var1);
                var1 = var6.getRequestArguments;
                var0 = var0.method;
                if (var7) {
                    _fun9774_ip = 219;
                    continue _fun9774
                }
            case 217:
                var7 = {};
            case 219:
                var14 = var1.bind(var6)(var0, var7);
                var17 = {};
                var18 = var5;
                var16 = var3;
                var15 = var2;
                var0 = var18[var4](var17, var16, var15, var14, var13);
                return var0;
        }
    };
    var2.buildTypeSpecificAttributes = var3;
    var2.getNotificationAttributes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 937, 897, 939]);