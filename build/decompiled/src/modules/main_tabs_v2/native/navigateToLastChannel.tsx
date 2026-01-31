// modules/main_tabs_v2/native/navigateToLastChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/navigateToLastChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: navigateToLastChannel, environment: var1
        _fun61770: for (var _fun61770_ip = 0;;) switch (_fun61770_ip) {
            case 0:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 0;
                var1 = var6[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var1);
                var3 = var4.coerceGuildsRoute;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var6[var1];
                var1 = var5.bind(var0)(var1);
                var1 = var1.bind(var0)();
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var3 = var1 != var4;
                if (!var3) {
                    _fun61770_ip = 88;
                    continue _fun61770
                }
            case 64:
                var6 = var4.params;
                var7 = var1 == var6;
                var5 = undefined;
                if (var7) {
                    _fun61770_ip = 84;
                    continue _fun61770
                }
            case 79:
                var5 = var6.channelId;
            case 84:
                var3 = var1 != var5;
            case 88:
                if (!var3) {
                    _fun61770_ip = 142;
                    continue _fun61770
                }
            case 91:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.transitionToChannel;
                var4 = var4.params;
                var5 = var1 == var4;
                var1 = undefined;
                if (var5) {
                    _fun61770_ip = 137;
                    continue _fun61770
                }
            case 132:
                var1 = var4.channelId;
            case 137:
                var1 = var2.bind(var3)(var1);
            case 142:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3878, 7699, 3902, 2]);