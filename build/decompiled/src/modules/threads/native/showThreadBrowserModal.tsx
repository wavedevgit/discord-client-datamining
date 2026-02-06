// modules/threads/native/showThreadBrowserModal.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelDetailsNavigatorScreens;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/showThreadBrowserModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun72211: for (var _fun72211_ip = 0;;) switch (_fun72211_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var2 = var4[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var2 = var5.trackThreadBrowserOpened;
                var2 = var2.bind(var5)();
                var2 = 2;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var2 = null;
                var2 = var2 != var4;
                if (!var2) {
                    _fun72211_ip = 76;
                    continue _fun72211
                }
            case 66:
                var3 = var4.isReady;
                var2 = var3.bind(var4)();
            case 76:
                if (!var2) {
                    _fun72211_ip = 126;
                    continue _fun72211
                }
            case 79:
                var3 = var4.navigate;
                var2 = {};
                var5 = arg0;
                var5 = var5.id;
                var2.channelId = var5;
                var1 = _closure1_slot2;
                var1 = var1.THREADS;
                var2.initialRouteName = var1;
                var1 = 'sidebar';
                var1 = var3.bind(var4)(var1, var2);
            case 126:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9027, 6509, 3922, 2]);