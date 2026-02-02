// modules/forums/native/hooks/useIsForumChannelSearchActive.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/hooks/useIsForumChannelSearchActive.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun72178: for (var _fun72178_ip = 0;;) switch (_fun72178_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 1;
                var0 = var7[var0];
                var4 = undefined;
                var3 = var5.bind(var4)(var0);
                var0 = var3.useCanSearchForumPostsByChannelId;
                var0 = var0.bind(var3)(var6);
                var3 = 2;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var1
                    _fun72179: for (var _fun72179_ip = 0;;) switch (_fun72179_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun72179_ip = 38;
                                continue _fun72179
                            }
                        case 16:
                            var3 = _closure1_slot2;
                            var2 = var3.getSearchQuery;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var3, var1, var2);
                if (!var0) {
                    _fun72178_ip = 105;
                    continue _fun72178
                }
            case 99:
                var1 = null;
                var0 = var1 != var2;
            case 105:
                return var0;
        }
    };
    var2.useIsForumChannelSearchActive = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6434, 8953, 566, 2]);