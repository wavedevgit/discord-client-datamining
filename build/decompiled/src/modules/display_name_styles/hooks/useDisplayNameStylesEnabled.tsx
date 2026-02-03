// modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx
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
    var3 = var3.useContext;
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun36705: for (var _fun36705_ip = 0;;) switch (_fun36705_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.location;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 2;
                var0 = var6[var0];
                var4 = undefined;
                var3 = var5.bind(var4)(var0);
                var1 = var3.useDisplayNameStylesViewerEnabled;
                var0 = {};
                var0.location = var7;
                var0 = var1.bind(var3)(var0);
                var1 = 3;
                var1 = var6[var1];
                var8 = var5.bind(var4)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var1
                    var0 = _closure1_slot3;
                    var0 = var0.displayNameStylesEnabled;
                    return var0;
                };
                var1 = var7.bind(var8)(var3, var1);
                var3 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.DisplayNameStylesContext;
                var2 = var3.bind(var4)(var2);
                if (!var0) {
                    _fun36705_ip = 134;
                    continue _fun36705
                }
            case 122:
                if (var1) {
                    _fun36705_ip = 131;
                    continue _fun36705
                }
            case 125:
                var1 = var2.overrideSettings;
            case 131:
                var0 = var1;
            case 134:
                return var0;
        }
    };
    var2.useDisplayNameStylesEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 3986, 566, 3988, 2]);