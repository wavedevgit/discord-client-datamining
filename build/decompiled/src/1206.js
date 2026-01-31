// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun13138: for (var _fun13138_ip = 0;;) switch (_fun13138_ip) {
        case 0:
            var8 = require;
            var2 = exports;
            var9 = dependencyMap;
            var6 = global;
            var5 = var6.Object;
            var3 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var5)(var2, var0, var1);
            var0 = 0;
            var3 = var9[var0];
            var1 = metroImportAll;
            var0 = undefined;
            var1 = var1.bind(var0)(var3);
            var _closure1_slot0 = var1;
            var1 = 1;
            var1 = var9[var1];
            var1 = var8.bind(var0)(var1);
            var3 = var1.UIManager;
            var _closure1_slot1 = var3;
            var1 = var1.View;
            var _closure1_slot2 = var1;
            var1 = function(arg0) { // Original name: warn, environment: var4
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = global;
                var3 = var0.setTimeout;
                var0 = undefined;
                var2 = function() { // Environment: var1
                    var0 = global;
                    var2 = var0.console;
                    var1 = var2.warn;
                    var6 = _closure2_slot0;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var11 = '[SentrySessionReplay] ';
                    var9 = ' component is not supported on the current platform. If ';
                    var7 = ' should be supported, please ensure that the application build is up to date.';
                    var10 = var6;
                    var8 = var6;
                    var0 = var11[var5](var10, var9, var8, var7, var6);
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = 0;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var _closure1_slot3 = var1;
            var3 = function(arg0) { // Original name: MaskFallback, environment: var4
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = 'Mask';
                var1 = var3.bind(var2)(var1);
                var3 = _closure1_slot0;
                var2 = var3.createElement;
                var1 = _closure1_slot2;
                var0 = global;
                var6 = var0.Object;
                var5 = var6.assign;
                var4 = {};
                var0 = arg0;
                var0 = var5.bind(var6)(var4, var0);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1 = function(arg0) { // Original name: UnmaskFallback, environment: var4
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = 'Unmask';
                var1 = var3.bind(var2)(var1);
                var3 = _closure1_slot0;
                var2 = var3.createElement;
                var1 = _closure1_slot2;
                var0 = global;
                var6 = var0.Object;
                var5 = var6.assign;
                var4 = {};
                var0 = arg0;
                var0 = var5.bind(var6)(var4, var0);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var7 = function(arg0) { // Original name: hasViewManagerConfig, environment: var4
                _fun13143: for (var _fun13143_ip = 0;;) switch (_fun13143_ip) {
                    case 0:
                        var0 = _closure1_slot1;
                        var4 = var0.hasViewManagerConfig;
                        var3 = null;
                        var0 = undefined;
                        if (!(var3 !== var4)) {
                            _fun13143_ip = 45;
                            continue _fun13143
                        }
                    case 21:
                        var0 = undefined;
                        if (!(var0 !== var4)) {
                            _fun13143_ip = 45;
                            continue _fun13143
                        }
                    case 27:
                        var3 = var4.call;
                        var2 = _closure1_slot1;
                        var1 = arg0;
                        var0 = var3.bind(var4)(var2, var1);
                    case 45:
                        return var0;
                }
            };
            var10 = 2;
            var5 = var9[var10];
            var11 = var8.bind(var0)(var5);
            var5 = var11.isExpoGo;
            var5 = var5.bind(var11)();
            if (var5) {
                _fun13138_ip = 187;
                continue _fun13138
            }
        case 143:
            var13 = 'RNSentryReplayMask';
            var5 = var7.bind(var0)(var13);
            if (!var5) {
                _fun13138_ip = 187;
                continue _fun13138
            }
        case 157:
            var5 = 4;
            var5 = var9[var5];
            var12 = var8.bind(var0)(var5);
            var11 = var12.get;
            var5 = function() { // Environment: var4
                var0 = {};
                var1 = 'RNSentryReplayMask';
                var0.uiViewClassName = var1;
                return var0;
            };
            var5 = var11.bind(var12)(var13, var5);
            _fun13138_ip = 251;
            continue _fun13138;
        case 187:
            var11 = 3;
            var11 = var9[var11];
            var11 = var8.bind(var0)(var11);
            var13 = var11.debug;
            var12 = var13.warn;
            var11 = var6.HermesInternal;
            var16 = var11.concat;
            var15 = "[SentrySessionReplay] Can't load ";
            var14 = 'RNSentryReplayMask';
            var11 = '.';
            var11 = var16.bind(var15)(var14, var11);
            var11 = var12.bind(var13)(var11);
            var5 = var3;
        case 251:
            var10 = var9[var10];
            var11 = var8.bind(var0)(var10);
            var10 = var11.isExpoGo;
            var10 = var10.bind(var11)();
            if (var10) {
                _fun13138_ip = 317;
                continue _fun13138
            }
        case 273:
            var11 = 'RNSentryReplayUnmask';
            var7 = var7.bind(var0)(var11);
            if (!var7) {
                _fun13138_ip = 317;
                continue _fun13138
            }
        case 287:
            var7 = 4;
            var7 = var9[var7];
            var10 = var8.bind(var0)(var7);
            var7 = var10.get;
            var4 = function() { // Environment: var4
                var0 = {};
                var1 = 'RNSentryReplayUnmask';
                var0.uiViewClassName = var1;
                return var0;
            };
            var4 = var7.bind(var10)(var11, var4);
            _fun13138_ip = 381;
            continue _fun13138;
        case 317:
            var7 = 3;
            var7 = var9[var7];
            var7 = var8.bind(var0)(var7);
            var8 = var7.debug;
            var7 = var8.warn;
            var6 = var6.HermesInternal;
            var11 = var6.concat;
            var10 = "[SentrySessionReplay] Can't load ";
            var9 = 'RNSentryReplayUnmask';
            var6 = '.';
            var6 = var11.bind(var10)(var9, var6);
            var6 = var7.bind(var8)(var6);
            var4 = var1;
        case 381:
            var2.Mask = var5;
            var2.Unmask = var4;
            var2.MaskFallback = var3;
            var2.UnmaskFallback = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 999, 817, 42]);