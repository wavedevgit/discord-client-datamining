// modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx
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
    var3 = 'modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useShouldShowInitialSafetyToolsButtonTooltip, environment: var1
        _fun72179: for (var _fun72179_ip = 0;;) switch (_fun72179_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var4 = undefined;
                var3 = var5.bind(var4)(var2);
                var2 = var3.useInappropriateConversationSafetyToolsWarningForChannel;
                var2 = var2.bind(var3)(var7);
                var3 = 2;
                var3 = var6[var3];
                var4 = var5.bind(var4)(var3);
                var3 = var4.useStateFromStores;
                var5 = _closure1_slot2;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.hasShownInitialTooltipForChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var0);
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun72179_ip = 99;
                    continue _fun72179
                }
            case 96:
                var0 = !var1;
            case 99:
                return var0;
        }
    };
    var2.useShouldShowInitialSafetyToolsButtonTooltip = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8954, 8949, 566, 2]);