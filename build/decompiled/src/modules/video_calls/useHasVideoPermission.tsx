// modules/video_calls/useHasVideoPermission.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/useHasVideoPermission.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun67988: for (var _fun67988_ip = 0;;) switch (_fun67988_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun67988_ip = 88;
                        continue _fun67988
                    }
                case 16:
                    var2 = _closure2_slot0;
                    var1 = var2.isPrivate;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun67988_ip = 85;
                        continue _fun67988
                    }
                case 33:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 3;
                    var5 = var5[var4];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.canStreamInChannel;
                    var11 = _closure2_slot0;
                    var10 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var8 = false;
                    var12 = var7;
                    var1 = var12[var6](var11, var10, var9, var8, var7);
                case 85:
                    var0 = var1;
                case 88:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun67989: for (var _fun67989_ip = 0;;) switch (_fun67989_ip) {
            case 0:
                var6 = arg0;
                var0 = var6.isPrivate;
                var0 = var0.bind(var6)();
                if (var0) {
                    _fun67989_ip = 67;
                    continue _fun67989
                }
            case 16:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.canStreamInChannel;
                var9 = _closure1_slot2;
                var8 = _closure1_slot3;
                var7 = false;
                var11 = var5;
                var10 = var6;
                var0 = var11[var4](var10, var9, var8, var7, var6);
            case 67:
                return var0;
        }
    };
    var2.getVideoPermission = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3082, 566, 5264, 2]);