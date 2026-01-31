// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['enabled', 'hasTwoStates'];
    var _closure1_slot3 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Platform;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var1 = function(arg0) { // Original name: ScreenContainer, environment: var1
        _fun37268: for (var _fun37268_ip = 0;;) switch (_fun37268_ip) {
            case 0:
                var6 = arg0;
                var2 = var6.enabled;
                var3 = undefined;
                if (!(var3 === var2)) {
                    _fun37268_ip = 47;
                    continue _fun37268
                }
            case 14:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.screensEnabled;
                var2 = var0.bind(var1)();
            case 47:
                var1 = var6.hasTwoStates;
                var5 = _closure1_slot4;
                var4 = _closure1_slot3;
                var6 = var5.bind(var3)(var6, var4);
                if (!var2) {
                    _fun37268_ip = 102;
                    continue _fun37268
                }
            case 73:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.isNativePlatformSupported;
                if (var2) {
                    _fun37268_ip = 139;
                    continue _fun37268
                }
            case 102:
                var5 = _closure1_slot6;
                var4 = _closure1_slot5;
                var2 = global;
                var8 = var2.Object;
                var7 = var8.assign;
                var2 = {};
                var2 = var7.bind(var8)(var2, var6);
                var2 = var5.bind(var3)(var4, var2);
                return var2;
            case 139:
                if (var1) {
                    _fun37268_ip = 195;
                    continue _fun37268
                }
            case 142:
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = global;
                var7 = var1.Object;
                var5 = var7.assign;
                var1 = {};
                var1 = var5.bind(var7)(var1, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 195:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot6;
                var0 = global;
                var5 = var0.Object;
                var4 = var5.assign;
                var0 = {};
                var0 = var4.bind(var5)(var0, var6);
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 27, 31, 33, 3993, 4010]);