// modules/guild_sidebar/ChannelListUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/guild_sidebar/ChannelListUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun38800: for (var _fun38800_ip = 0;;) switch (_fun38800_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun38800_ip = 62;
                    continue _fun38800
                }
            case 9:
                var0 = var2.length;
                var1 = 0;
                var0 = var1 < var0;
                if (!var0) {
                    _fun38800_ip = 54;
                    continue _fun38800
                }
            case 23:
                var0 = var2[var1];
                var0 = var0.voiceState;
                var0 = var0.selfStream;
                if (var0) {
                    _fun38800_ip = 58;
                    continue _fun38800
                }
            case 42:
                var1 = var1 + 1;
                var0 = var2.length;
                if (var1 < var0) {
                    _fun38800_ip = 23;
                    continue _fun38800
                }
            case 54:
                var0 = false;
                return var0;
            case 58:
                var0 = true;
                return var0;
            case 62:
                var0 = false;
                return var0;
        }
    };
    var2.hasStream = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);