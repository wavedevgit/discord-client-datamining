// modules/reactions/useCanRemoveAllReactions.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reactions/useCanRemoveAllReactions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun73284: for (var _fun73284_ip = 0;;) switch (_fun73284_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 2;
                var3 = var7[var3];
                var4 = undefined;
                var6 = var5.bind(var4)(var3);
                var3 = var6.useIsActiveChannelOrUnarchivableThread;
                var6 = var3.bind(var6)(var2);
                var _closure2_slot1 = var6;
                var3 = 3;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = new Array(2);
                var1[0] = var2;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    _fun73285: for (var _fun73285_ip = 0;;) switch (_fun73285_ip) {
                        case 0:
                            var4 = _closure1_slot2;
                            var3 = var4.can;
                            var0 = _closure1_slot3;
                            var2 = var0.MANAGE_MESSAGES;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var0);
                            if (!var0) {
                                _fun73285_ip = 43;
                                continue _fun73285
                            }
                        case 39:
                            var0 = _closure2_slot1;
                        case 43:
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var3, var0, var1);
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun73284_ip = 116;
                    continue _fun73284
                }
            case 113:
                var0 = var1;
            case 116:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3050, 660, 6658, 566, 2]);