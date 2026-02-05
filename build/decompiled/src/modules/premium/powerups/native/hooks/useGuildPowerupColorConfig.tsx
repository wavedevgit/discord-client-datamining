// modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx
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
    var3 = 'modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102428: for (var _fun102428_ip = 0;;) switch (_fun102428_ip) {
            case 0:
                var1 = {};
                var0 = arg0;
                if (var0) {
                    _fun102428_ip = 64;
                    continue _fun102428
                }
            case 8:
                var0 = 'text-muted';
                var1.textColor = var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.colors;
                var0 = var0.TEXT_MUTED;
                var1.iconColor = var0;
                var0 = var1;
                _fun102428_ip = 118;
                continue _fun102428;
            case 64:
                var2 = 'text-default';
                var1.textColor = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.colors;
                var2 = var2.TEXT_DEFAULT;
                var1.iconColor = var2;
                var0 = var1;
            case 118:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [671, 2]);