// modules/game_console/native/getConsoleIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var8;
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
    var7 = var3.PlatformTypes;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePlatforms;
    var _closure1_slot2 = var3;
    var3 = {};
    var9 = var7.XBOX;
    var6 = 2;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var3[var9] = var6;
    var10 = var7.PLAYSTATION;
    var6 = 3;
    var9 = var5[var6];
    var9 = var8.bind(var0)(var9);
    var3[var10] = var9;
    var7 = var7.PLAYSTATION_STAGING;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var3[var7] = var6;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/native/getConsoleIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = _closure1_slot3;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun67149: for (var _fun67149_ip = 0;;) switch (_fun67149_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot2;
                var0 = var0.XBOX;
                if (!(var3 !== var0)) {
                    _fun67149_ip = 60;
                    continue _fun67149
                }
            case 20:
                var0 = _closure1_slot2;
                var2 = var0.PLAYSTATION;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun67149_ip = 58;
                    continue _fun67149
                }
            case 36:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var0 = var4.bind(var2)(var3);
            case 58:
                _fun67149_ip = 82;
                continue _fun67149;
            case 60:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 82:
                return var0;
        }
    };
    var2.getConsoleIconForVoicePlatform = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3523, 5776, 8312, 2]);