// modules/memory/MemoryExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var3 = dependencyMap;
    var0 = 0;
    var1 = var3[var0];
    var0 = undefined;
    var6 = var2.bind(var0)(var1);
    var5 = var6.createApexExperiment;
    var1 = {
        'name': '2025-12-shadow-node-spike',
        'kind': 'user'
    };
    var7 = {};
    var8 = false;
    var7.enabled = var8;
    var1.defaultConfig = var7;
    var7 = {};
    var8 = {};
    var9 = true;
    var8.enabled = var9;
    var7[1] = var8;
    var1.variations = var7;
    var1 = var5.bind(var6)(var1);
    var _closure1_slot2 = var1;
    var1 = global;
    var6 = var1.setInterval;
    var5 = function() { // Environment: var4
        _fun97464: for (var _fun97464_ip = 0;;) switch (_fun97464_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = undefined;
                if (!(var0 === var1)) {
                    _fun97464_ip = 49;
                    continue _fun97464
                }
            case 13:
                var4 = _closure1_slot2;
                var3 = var4.getConfig;
                var1 = {};
                var5 = 'startMemoryExperiment';
                var1.location = var5;
                var1 = var3.bind(var4)(var1);
                var1 = var1.enabled;
                var _closure1_slot0 = var1;
            case 49:
                var3 = _closure1_slot0;
                var1 = global;
                if (var3) {
                    _fun97464_ip = 75;
                    continue _fun97464
                }
            case 58:
                var3 = var1.clearInterval;
                var2 = _closure1_slot1;
                var2 = var3.bind(var0)(var2);
                _fun97464_ip = 87;
                continue _fun97464;
            case 75:
                var1 = var1.gc;
                var1 = var1.bind(var0)();
            case 87:
                return var0;
        }
    };
    var1 = 60000;
    var1 = var6.bind(var0)(var5, var1);
    var _closure1_slot1 = var1;
    var1 = 1;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/memory/MemoryExperiment.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);