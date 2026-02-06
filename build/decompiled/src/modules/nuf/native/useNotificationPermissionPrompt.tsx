// modules/nuf/native/useNotificationPermissionPrompt.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf/native/useNotificationPermissionPrompt.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 5;
        var6 = var5[var3];
        var0 = undefined;
        var9 = var4.bind(var0)(var6);
        var8 = var9.useStateFromStores;
        var6 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.isConnected;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var8.bind(var9)(var7, var6);
        var _closure2_slot0 = var6;
        var3 = var5[var3];
        var7 = var4.bind(var0)(var3);
        var5 = var7.useStateFromStores;
        var3 = _closure1_slot6;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = _closure1_slot4;
        var4[1] = var3;
        var3 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot4;
            var0 = _closure1_slot6;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var5.bind(var7)(var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun104493: for (var _fun104493_ip = 0;;) switch (_fun104493_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    if (!var1) {
                        _fun104493_ip = 113;
                        continue _fun104493
                    }
                case 10:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun104493_ip = 113;
                        continue _fun104493
                    }
                case 17:
                    var1 = _closure1_slot7;
                    var4 = var1.promptSeen;
                    var5 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 7;
                    var1 = var1[var3];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.shouldRequestNotification;
                    if (!var1) {
                        _fun104493_ip = 66;
                        continue _fun104493
                    }
                case 63:
                    var1 = !var4;
                case 66:
                    if (!var1) {
                        _fun104493_ip = 113;
                        continue _fun104493
                    }
                case 69:
                    var1 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var4 = var0[var3];
                    var5 = var1.bind(var2)(var4);
                    var4 = var5.requestPermission;
                    var4 = var4.bind(var5)();
                    var0 = var0[var3];
                    var1 = var1.bind(var2)(var0);
                    var0 = false;
                    var1.shouldRequestNotification = var0;
                case 113:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1365, 3476, 1366, 11040, 566, 1368, 11042, 2]);