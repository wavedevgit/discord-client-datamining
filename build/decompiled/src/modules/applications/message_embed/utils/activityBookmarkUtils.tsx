// modules/applications/message_embed/utils/activityBookmarkUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/message_embed/utils/activityBookmarkUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun54439: for (var _fun54439_ip = 0;;) switch (_fun54439_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var0 = var1[var0];
                var1 = undefined;
                var3 = var2.bind(var1)(var0);
                var2 = var3.toURLSafe;
                var0 = arg0;
                var4 = var2.bind(var3)(var0);
                var0 = {};
                var3 = null;
                var2 = var3 == var4;
                var5 = undefined;
                if (var2) {
                    _fun54439_ip = 71;
                    continue _fun54439
                }
            case 51:
                var7 = var4.searchParams;
                var6 = var7.get;
                var2 = 'referrer_id';
                var5 = var6.bind(var7)(var2);
            case 71:
                var6 = var3 != var5;
                var2 = undefined;
                if (!var6) {
                    _fun54439_ip = 83;
                    continue _fun54439
                }
            case 80:
                var2 = var5;
            case 83:
                var0.referrerId = var2;
                var2 = var3 == var4;
                var5 = undefined;
                if (var2) {
                    _fun54439_ip = 117;
                    continue _fun54439
                }
            case 97:
                var7 = var4.searchParams;
                var6 = var7.get;
                var2 = 'custom_id';
                var5 = var6.bind(var7)(var2);
            case 117:
                var6 = var3 != var5;
                var2 = undefined;
                if (!var6) {
                    _fun54439_ip = 129;
                    continue _fun54439
                }
            case 126:
                var2 = var5;
            case 129:
                var0.customId = var2;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun54439_ip = 163;
                    continue _fun54439
                }
            case 143:
                var6 = var4.searchParams;
                var5 = var6.get;
                var4 = 'link_id';
                var2 = var5.bind(var6)(var4);
            case 163:
                var3 = var3 != var2;
                var1 = undefined;
                if (!var3) {
                    _fun54439_ip = 175;
                    continue _fun54439
                }
            case 172:
                var1 = var2;
            case 175:
                var0.linkId = var1;
                return var0;
        }
    };
    var2.extractActivityBookmarkParams = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1457, 2]);