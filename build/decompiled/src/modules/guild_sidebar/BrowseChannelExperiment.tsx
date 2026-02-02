// modules/guild_sidebar/BrowseChannelExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var8 = var3.CommonTriggerPoints;
    var3 = 1;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2024-09_browsechannelbuttonoptin',
        'label': "Don't show guild Browse Channels when all channels are already visible"
    };
    var9 = {};
    var9.alwaysShowDirectory = var10;
    var3.defaultConfig = var9;
    var8 = var8.CONNECTION_OPEN;
    var3.commonTriggerPoint = var8;
    var9 = {
        'id': 1,
        'label': 'Hide Browse Channels when all channels are visible'
    };
    var8 = {};
    var10 = false;
    var8.alwaysShowDirectory = var10;
    var9.config = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var3.treatments = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot0 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/BrowseChannelExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.BrowseChannelExperiment = var3;
    var1 = function arg0() {
        _fun95319: for (var _fun95319_ip = 0;;) switch (_fun95319_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.useExperiment;
                var0 = {};
                var3 = 'useShowBrowseChannelsExperiment';
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                var0 = var0.alwaysShowDirectory;
                if (var0) {
                    _fun95319_ip = 43;
                    continue _fun95319
                }
            case 37:
                var1 = arg0;
                var0 = !var1;
            case 43:
                return var0;
        }
    };
    var2.useShowBrowseChannelsExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3076, 2]);