// modules/status_bar/native/components/ThemedStatusBar.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/status_bar/native/components/ThemedStatusBar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: _default, environment: var1
        _fun100322: for (var _fun100322_ip = 0;;) switch (_fun100322_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 4;
                var2 = var5[var6];
                var3 = undefined;
                var9 = var4.bind(var3)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var1
                    var1 = _closure1_slot4;
                    var0 = var1.isAuthenticated;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var8.bind(var9)(var7, var2);
                var2 = 5;
                var2 = var5[var2];
                var8 = var4.bind(var3)(var2);
                var2 = var8.useIsModalOpen;
                var2 = var2.bind(var8)();
                var6 = var5[var6];
                var9 = var4.bind(var3)(var6);
                var8 = var9.useStateFromStores;
                var10 = _closure1_slot3;
                var6 = new Array(1);
                var6[0] = var10;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isThemeDark;
                    var0 = _closure1_slot3;
                    var0 = var0.theme;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var8.bind(var9)(var6, var1);
                var1 = 7;
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.useGlobalStatusIndicatorState;
                var1 = var1.bind(var4)();
                var5 = 'light-content';
                var4 = var5;
                if (!var7) {
                    _fun100322_ip = 208;
                    continue _fun100322
                }
            case 152:
                if (!var7) {
                    _fun100322_ip = 190;
                    continue _fun100322
                }
            case 155:
                if (var2) {
                    _fun100322_ip = 190;
                    continue _fun100322
                }
            case 158:
                var2 = var1.isVisible;
                if (!var2) {
                    _fun100322_ip = 176;
                    continue _fun100322
                }
            case 167:
                var1 = var1.isCustomBackground;
                if (var1) {
                    _fun100322_ip = 185;
                    continue _fun100322
                }
            case 176:
                var1 = 'dark-content';
                if (!var6) {
                    _fun100322_ip = 188;
                    continue _fun100322
                }
            case 185:
                var1 = var5;
            case 188:
                _fun100322_ip = 205;
                continue _fun100322;
            case 190:
                var2 = 'dark-content';
                if (!var6) {
                    _fun100322_ip = 202;
                    continue _fun100322
                }
            case 199:
                var2 = var5;
            case 202:
                var1 = var2;
            case 205:
                var4 = var1;
            case 208:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 8;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.barStyle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3155, 1216, 33, 566, 3872, 3165, 8562, 7850, 2]);