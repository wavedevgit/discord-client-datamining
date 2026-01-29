// ../discord_common/js/packages/design/components/Icon/getIconSize.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var1 = {
        'xxs': 12,
        'xs': 16,
        'sm': 18,
        'md': 24,
        'lg': 32,
        'custom': null,
        'refresh_sm': 20
    };
    var0 = undefined;
    var1.custom = var0;
    var _closure1_slot0 = var1;
    var5 = dependencyMap;
    var4 = 0;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/Icon/getIconSize.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: getIconSize, environment: var3
        _fun103451: for (var _fun103451_ip = 0;;) switch (_fun103451_ip) {
            case 0:
                var1 = arg0;
                var0 = 'custom';
                if (!(var0 !== var1)) {
                    _fun103451_ip = 34;
                    continue _fun103451
                }
            case 11:
                var0 = _closure1_slot0;
                var1 = var0[var1];
                var0 = {};
                var0.width = var1;
                var0.height = var1;
                return var0;
            case 34:
                var0 = null;
                return var0;
        }
    };
    var2.getIconSize = var3;
    var2.ICON_SIZE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);