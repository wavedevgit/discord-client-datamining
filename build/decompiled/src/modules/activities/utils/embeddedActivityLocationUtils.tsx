// modules/activities/utils/embeddedActivityLocationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/embeddedActivityLocationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun24672: for (var _fun24672_ip = 0;;) switch (_fun24672_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun24672_ip = 13;
                    continue _fun24672
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = 'channel_id';
                var2 = var0 in var1;
                var0 = undefined;
                if (!var2) {
                    _fun24672_ip = 31;
                    continue _fun24672
                }
            case 26:
                var0 = var1.channel_id;
            case 31:
                return var0;
        }
    };
    var2.getEmbeddedActivityLocationChannelId = var3;
    var1 = function arg0() {
        _fun24673: for (var _fun24673_ip = 0;;) switch (_fun24673_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun24673_ip = 13;
                    continue _fun24673
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = 'guild_id';
                var2 = var0 in var1;
                var0 = undefined;
                if (!var2) {
                    _fun24673_ip = 31;
                    continue _fun24673
                }
            case 26:
                var0 = var1.guild_id;
            case 31:
                return var0;
        }
    };
    var2.getEmbeddedActivityLocationGuildId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);