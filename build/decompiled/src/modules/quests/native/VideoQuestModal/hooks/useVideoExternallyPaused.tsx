// modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx
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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Environment: var1
        _fun83999: for (var _fun83999_ip = 0;;) switch (_fun83999_ip) {
            case 0:
                var3 = arg1;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 1;
                var2 = var8[var2];
                var6 = undefined;
                var4 = var7.bind(var6)(var2);
                var2 = var4.useActiveContextMenu;
                var4 = var2.bind(var4)();
                var2 = 2;
                var2 = var8[var2];
                var5 = var7.bind(var6)(var2);
                var2 = var5.useOpenModalKey;
                var5 = var2.bind(var5)();
                var2 = 3;
                var2 = var8[var2];
                var10 = var7.bind(var6)(var2);
                var9 = var10.getVideoQuestModalKey;
                var2 = arg0;
                var2 = var9.bind(var10)(var2);
                var2 = var5 !== var2;
                var5 = 4;
                var5 = var8[var5];
                var10 = var7.bind(var6)(var5);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot2;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getKey;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var9.bind(var10)(var5, var1);
                var1 = 5;
                var1 = var8[var1];
                var9 = var7.bind(var6)(var1);
                var1 = var9.useAlertStore;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.alerts;
                    return var0;
                };
                var0 = var1.bind(var9)(var0);
                var1 = var0.length;
                var0 = 0;
                var1 = var1 > var0;
                var0 = 6;
                var0 = var8[var0];
                var6 = var7.bind(var6)(var0);
                var0 = var6.isIOS;
                var0 = var0.bind(var6)();
                if (!var0) {
                    _fun83999_ip = 203;
                    continue _fun83999
                }
            case 200:
                var0 = var3;
            case 203:
                if (var0) {
                    _fun83999_ip = 212;
                    continue _fun83999
                }
            case 206:
                var3 = null;
                var0 = var3 != var5;
            case 212:
                if (var0) {
                    _fun83999_ip = 221;
                    continue _fun83999
                }
            case 215:
                var3 = null;
                var0 = var3 != var4;
            case 221:
                if (var0) {
                    _fun83999_ip = 227;
                    continue _fun83999
                }
            case 224:
                var0 = var2;
            case 227:
                if (var0) {
                    _fun83999_ip = 233;
                    continue _fun83999
                }
            case 230:
                var0 = var1;
            case 233:
                return var0;
        }
    };
    var2.useVideoExternallyPaused = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3131, 5215, 3910, 5311, 566, 4020, 478, 2]);