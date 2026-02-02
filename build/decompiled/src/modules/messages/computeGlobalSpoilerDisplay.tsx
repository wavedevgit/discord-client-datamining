// modules/messages/computeGlobalSpoilerDisplay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1() {
        _fun77131: for (var _fun77131_ip = 0;;) switch (_fun77131_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot4;
                var1 = var1.ALWAYS;
                if (!(var1 !== var2)) {
                    _fun77131_ip = 53;
                    continue _fun77131
                }
            case 20:
                var1 = _closure1_slot4;
                var1 = var1.IF_MODERATOR;
                if (!(var1 !== var2)) {
                    _fun77131_ip = 48;
                    continue _fun77131
                }
            case 34:
                var0 = _closure1_slot4;
                var0 = var0.ON_CLICK;
                var0 = false;
                return var0;
            case 48:
                var0 = arg1;
                return var0;
            case 53:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Permissions;
    var _closure1_slot3 = var7;
    var4 = var4.SpoilerRenderSetting;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/computeGlobalSpoilerDisplay.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 2;
        var2 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var8 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot2;
            var2 = var3.can;
            var0 = _closure1_slot3;
            var1 = var0.MANAGE_MESSAGES;
            var0 = _closure2_slot0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2 = var6.bind(var7)(var2, var1);
        var1 = _closure1_slot5;
        var0 = 3;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var4 = var0.RenderSpoilers;
        var0 = var4.useSetting;
        var0 = var0.bind(var4)();
        var0 = var1.bind(var3)(var0, var2);
        var0 = !var0;
        return var0;
    };
    var2.useShouldDisplaySpoilerObscurity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3052, 660, 632, 1348, 2]);