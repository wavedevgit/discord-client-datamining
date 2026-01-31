// ../discord_common/js/packages/media-engine/utils/transformStatsUtils.tsx
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
    var3 = '../discord_common/js/packages/media-engine/utils/transformStatsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2() {
        _fun32629: for (var _fun32629_ip = 0;;) switch (_fun32629_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var1 = var2[var0];
                var0 = null;
                if (!(var0 != var1)) {
                    _fun32629_ip = 27;
                    continue _fun32629
                }
            case 16:
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                _fun32629_ip = 77;
                continue _fun32629;
            case 27:
                var1 = '100';
                var3 = arg2;
                if (!var3) {
                    _fun32629_ip = 74;
                    continue _fun32629
                }
            case 39:
                var5 = var2.any;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = ' (any)';
                var1 = var4.bind(var3)(var5, var2);
            case 74:
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var2.formatSinkWantStat = var3;
    var1 = function arg0, arg1() {
        _fun32630: for (var _fun32630_ip = 0;;) switch (_fun32630_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var0 = var1[var0];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun32630_ip = 22;
                    continue _fun32630
                }
            case 16:
                var0 = var1.any;
            case 22:
                return var0;
        }
    };
    var2.formatSinkWantAsInt = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);