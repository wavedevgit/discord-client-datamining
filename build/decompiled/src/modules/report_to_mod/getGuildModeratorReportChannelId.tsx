// modules/report_to_mod/getGuildModeratorReportChannelId.tsx
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
    var1 = 'modules/report_to_mod/getGuildModeratorReportChannelId.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun41648: for (var _fun41648_ip = 0;;) switch (_fun41648_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.moderatorReporting;
                var0 = null;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun41648_ip = 26;
                    continue _fun41648
                }
            case 20:
                var1 = var2.moderatorReportChannelId;
            case 26:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun41648_ip = 38;
                    continue _fun41648
                }
            case 35:
                var0 = var1;
            case 38:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);