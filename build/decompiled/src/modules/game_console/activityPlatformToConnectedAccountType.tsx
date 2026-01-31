// modules/game_console/activityPlatformToConnectedAccountType.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var6 = var3.ActivityGamePlatforms;
    var _closure1_slot0 = var6;
    var3 = var3.PlatformTypes;
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/activityPlatformToConnectedAccountType.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: activityPlatformToConnectedAccountType, environment: var1
        _fun69454: for (var _fun69454_ip = 0;;) switch (_fun69454_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot0;
                var1 = var1.PS4;
                if (!(var1 !== var2)) {
                    _fun69454_ip = 64;
                    continue _fun69454
                }
            case 20:
                var1 = _closure1_slot0;
                var1 = var1.PS5;
                if (!(var1 !== var2)) {
                    _fun69454_ip = 64;
                    continue _fun69454
                }
            case 34:
                var1 = _closure1_slot0;
                var1 = var1.XBOX;
                if (!(var1 !== var2)) {
                    _fun69454_ip = 52;
                    continue _fun69454
                }
            case 48:
                var1 = undefined;
                return var1;
            case 52:
                var1 = _closure1_slot1;
                var1 = var1.XBOX;
                return var1;
            case 64:
                var0 = _closure1_slot1;
                var0 = var0.PLAYSTATION;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);