// modules/go_live/utils/getSoundshareAnalyticsContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/go_live/utils/getSoundshareAnalyticsContext.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun32863: for (var _fun32863_ip = 0;;) switch (_fun32863_ip) {
            case 0:
                var3 = arg0;
                var6 = null;
                if (!(var6 != var3)) {
                    _fun32863_ip = 103;
                    continue _fun32863
                }
            case 9:
                var7 = var3.sourcePid;
                var4 = var6 != var7;
                var2 = undefined;
                var1 = undefined;
                if (!var4) {
                    _fun32863_ip = 78;
                    continue _fun32863
                }
            case 26:
                var5 = _closure1_slot0;
                var4 = var5.getGameForPID;
                var5 = var4.bind(var5)(var7);
                var7 = var6 == var5;
                var4 = undefined;
                if (var7) {
                    _fun32863_ip = 58;
                    continue _fun32863
                }
            case 53:
                var4 = var5.name;
            case 58:
                var6 = var6 == var5;
                var0 = undefined;
                if (var6) {
                    _fun32863_ip = 72;
                    continue _fun32863
                }
            case 67:
                var0 = var5.id;
            case 72:
                var1 = var0;
                var2 = var4;
            case 78:
                var0 = {};
                var3 = var3.soundshareSession;
                var0.soundshare_session = var3;
                var0.share_game_name = var2;
                var0.share_game_id = var1;
                return var0;
            case 103:
                var0 = {};
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3444, 2]);