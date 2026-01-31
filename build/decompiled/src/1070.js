// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0) { // Original name: getDefaultIntegrations, environment: var0
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 0;
        var0 = var4[var1];
        var2 = undefined;
        var5 = var3.bind(var2)(var0);
        var0 = var5.inboundFiltersIntegration;
        var5 = var0.bind(var5)();
        var0 = new Array(9);
        var0[0] = var5;
        var5 = var4[var1];
        var6 = var3.bind(var2)(var5);
        var5 = var6.functionToStringIntegration;
        var5 = var5.bind(var6)();
        var0[1] = var5;
        var5 = 1;
        var5 = var4[var5];
        var6 = var3.bind(var2)(var5);
        var5 = var6.browserApiErrorsIntegration;
        var5 = var5.bind(var6)();
        var0[2] = var5;
        var5 = 2;
        var5 = var4[var5];
        var6 = var3.bind(var2)(var5);
        var5 = var6.breadcrumbsIntegration;
        var5 = var5.bind(var6)();
        var0[3] = var5;
        var5 = 3;
        var5 = var4[var5];
        var6 = var3.bind(var2)(var5);
        var5 = var6.globalHandlersIntegration;
        var5 = var5.bind(var6)();
        var0[4] = var5;
        var5 = 4;
        var5 = var4[var5];
        var6 = var3.bind(var2)(var5);
        var5 = var6.linkedErrorsIntegration;
        var5 = var5.bind(var6)();
        var0[5] = var5;
        var1 = var4[var1];
        var5 = var3.bind(var2)(var1);
        var1 = var5.dedupeIntegration;
        var1 = var1.bind(var5)();
        var0[6] = var1;
        var1 = 5;
        var1 = var4[var1];
        var5 = var3.bind(var2)(var1);
        var1 = var5.httpContextIntegration;
        var1 = var1.bind(var5)();
        var0[7] = var1;
        var1 = 6;
        var1 = var4[var1];
        var2 = var3.bind(var2)(var1);
        var1 = var2.browserSessionIntegration;
        var1 = var1.bind(var2)();
        var0[8] = var1;
        return var0;
    };
    var _closure1_slot2 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var3 = function() { // Original name: forceLoad, environment: var0
        var0 = undefined;
        return var0;
    };
    var1.forceLoad = var3;
    var1.getDefaultIntegrations = var2;
    var2 = function() { // Original name: init, environment: var0
        _fun10959: for (var _fun10959_ip = 0;;) switch (_fun10959_ip) {
            case 0:
                var5 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 0;
                if (!(var2 > var0)) {
                    _fun10959_ip = 21;
                    continue _fun10959
                }
            case 13:
                var2 = arguments[var0];
                if (!(var5 === var2)) {
                    _fun10959_ip = 25;
                    continue _fun10959
                }
            case 21:
                var7 = {};
                _fun10959_ip = 29;
                continue _fun10959;
            case 25:
                var7 = arguments[var0];
            case 29:
                var1 = var7.skipBrowserExtensionCheck;
                var1 = !var1;
                if (!var1) {
                    _fun10959_ip = 74;
                    continue _fun10959
                }
            case 41:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var2 = var4[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.checkAndWarnIfIsEmbeddedBrowserExtension;
                var1 = var2.bind(var3)();
            case 74:
                var3 = var7.defaultIntegrations;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun10959_ip = 94;
                    continue _fun10959
                }
            case 86:
                var10 = var7.defaultIntegrations;
                _fun10959_ip = 105;
                continue _fun10959;
            case 94:
                var2 = _closure1_slot2;
                var10 = var2.bind(var5)();
            case 105:
                var2 = global;
                var6 = var2.Object;
                var4 = var6.assign;
                var3 = {};
                var1 = !var1;
                if (!var1) {
                    _fun10959_ip = 131;
                    continue _fun10959
                }
            case 126:
                var1 = var7.enabled;
            case 131:
                var3.enabled = var1;
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var0];
                var9 = var8.bind(var5)(var2);
                var8 = var9.stackParserFromStackParserOptions;
                var2 = var7.stackParser;
                if (var2) {
                    _fun10959_ip = 196;
                    continue _fun10959
                }
            case 170:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var11 = 8;
                var11 = var13[var11];
                var11 = var12.bind(var5)(var11);
                var2 = var11.defaultStackParser;
            case 196:
                var2 = var8.bind(var9)(var2);
                var3.stackParser = var2;
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var0];
                var9 = var8.bind(var5)(var2);
                var8 = var9.getIntegrationsToSetup;
                var2 = {};
                var11 = var7.integrations;
                var2.integrations = var11;
                var2.defaultIntegrations = var10;
                var2 = var8.bind(var9)(var2);
                var3.integrations = var2;
                var2 = var7.transport;
                if (var2) {
                    _fun10959_ip = 292;
                    continue _fun10959
                }
            case 266:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 9;
                var8 = var10[var8];
                var8 = var9.bind(var5)(var8);
                var2 = var8.makeFetchTransport;
            case 292:
                var3.transport = var2;
                var2 = {};
                var3 = var4.bind(var6)(var2, var7, var3);
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = var6[var0];
                var2 = var4.bind(var5)(var0);
                var1 = var2.initAndBind;
                var0 = 10;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.BrowserClient;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var1.init = var2;
    var0 = function(arg0) { // Original name: onLoad, environment: var0
        var1 = arg0;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.onLoad = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1071, 1072, 1074, 1075, 1076, 1077, 1078, 1068, 1029, 1027]);