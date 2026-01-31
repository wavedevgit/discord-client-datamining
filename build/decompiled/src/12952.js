// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var0 = function() {
        var0 = {};
        var2 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 0;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getCurrentScope;
            var3 = var1.bind(var2)();
            var2 = var3.setClient;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.bindClient = var2;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 0;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.withScope;
        var0.withScope = var6;
        var6 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 0;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.getClient;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.getClient = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.getCurrentScope;
        var0.getScope = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.getIsolationScope;
        var0.getIsolationScope = var2;
        var2 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 0;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.getCurrentScope;
            var3 = var0.bind(var1)();
            var2 = var3.captureException;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.captureException = var2;
        var2 = function arg0, arg1, arg2() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 0;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.getCurrentScope;
            var4 = var0.bind(var1)();
            var3 = var4.captureMessage;
            var2 = arg0;
            var1 = arg1;
            var0 = arg2;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var0.captureMessage = var2;
        var2 = 1;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.captureEvent;
        var0.captureEvent = var6;
        var6 = 2;
        var6 = var5[var6];
        var6 = var4.bind(var3)(var6);
        var6 = var6.addBreadcrumb;
        var0.addBreadcrumb = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.setUser;
        var0.setUser = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.setTags;
        var0.setTags = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.setTag;
        var0.setTag = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.setExtra;
        var0.setExtra = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.setExtras;
        var0.setExtras = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.setContext;
        var0.setContext = var6;
        var6 = function arg0() {
            _fun99739: for (var _fun99739_ip = 0;;) switch (_fun99739_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getClient;
                    var3 = var0.bind(var1)();
                    var0 = var3;
                    if (!var0) {
                        _fun99739_ip = 59;
                        continue _fun99739
                    }
                case 40:
                    var2 = var3.getIntegrationByName;
                    var1 = arg0;
                    var1 = var1.id;
                    var0 = var2.bind(var3)(var1);
                case 59:
                    if (var0) {
                        _fun99739_ip = 64;
                        continue _fun99739
                    }
                case 62:
                    var0 = null;
                case 64:
                    return var0;
            }
        };
        var0.getIntegration = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.startSession;
        var0.startSession = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.endSession;
        var0.endSession = var2;
        var1 = function arg0() {
            _fun99740: for (var _fun99740_ip = 0;;) switch (_fun99740_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = arg0;
                    if (var0) {
                        _fun99740_ip = 94;
                        continue _fun99740
                    }
                case 17:
                    var3 = 0;
                    var4 = var1[var3];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.getCurrentScope;
                    var4 = var4.bind(var5)();
                    var3 = var1[var3];
                    var5 = var2.bind(var0)(var3);
                    var3 = var5.getClient;
                    var5 = var3.bind(var5)();
                    var3 = var4.getSession;
                    var4 = var3.bind(var4)();
                    var3 = var5;
                    if (!var3) {
                        _fun99740_ip = 78;
                        continue _fun99740
                    }
                case 75:
                    var3 = var4;
                case 78:
                    if (!var3) {
                        _fun99740_ip = 92;
                        continue _fun99740
                    }
                case 81:
                    var3 = var5.captureSession;
                    var3 = var3.bind(var5)(var4);
                case 92:
                    return var0;
                case 94:
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.endSession;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var0.captureSession = var1;
        return var0;
    };
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var1.getCurrentHub = var0;
    var1.getCurrentHubShim = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12889, 12906, 12925]);