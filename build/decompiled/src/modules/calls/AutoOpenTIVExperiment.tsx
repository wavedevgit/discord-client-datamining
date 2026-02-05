// modules/calls/AutoOpenTIVExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var0 = 0;
    var4 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var3 = {
        'kind': 'user',
        'name': '2025-11-auto-open-tiv'
    };
    var6 = {
        'collectAnalytics': false,
        'autoOpenTIV': false,
        'autoNavigateChannel': false
    };
    var3.defaultConfig = var6;
    var6 = {};
    var7 = {
        'collectAnalytics': true,
        'autoOpenTIV': false,
        'autoNavigateChannel': false
    };
    var6[0] = var7;
    var7 = {
        'collectAnalytics': true,
        'autoOpenTIV': true,
        'autoNavigateChannel': false
    };
    var6[1] = var7;
    var7 = {
        'collectAnalytics': true,
        'autoOpenTIV': true,
        'autoNavigateChannel': true
    };
    var6[2] = var7;
    var7 = {
        'collectAnalytics': true,
        'autoOpenTIV': false,
        'autoNavigateChannel': true
    };
    var6[3] = var7;
    var3.variations = var6;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/AutoOpenTIVExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.AutoOpenTIVExperiment = var3;
    var1 = function arg0() {
        _fun62805: for (var _fun62805_ip = 0;;) switch (_fun62805_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channel;
                var4 = var0.location;
                var2 = _closure1_slot0;
                var1 = var2.useConfig;
                var0 = {};
                var0.location = var4;
                var0 = var1.bind(var2)(var0);
                var1 = var0.autoOpenTIV;
                var0 = null;
                var2 = var0 == var3;
                if (var2) {
                    _fun62805_ip = 65;
                    continue _fun62805
                }
            case 52:
                var0 = var3.isGuildVocal;
                var0 = var0.bind(var3)();
                var2 = !var0;
            case 65:
                var0 = !var2;
                if (var2) {
                    _fun62805_ip = 74;
                    continue _fun62805
                }
            case 71:
                var0 = var1;
            case 74:
                return var0;
        }
    };
    var2.useShouldAutoOpenTIV = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1302, 2]);