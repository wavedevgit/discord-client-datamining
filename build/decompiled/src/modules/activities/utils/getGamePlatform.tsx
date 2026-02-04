// modules/activities/utils/getGamePlatform.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var6 = var3.ActivityTypes;
    var _closure1_slot2 = var6;
    var3 = var3.ActivityGamePlatforms;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getGamePlatform.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107099: for (var _fun107099_ip = 0;;) switch (_fun107099_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                var1 = var4 == var3;
                var0 = null;
                if (var1) {
                    _fun107099_ip = 125;
                    continue _fun107099
                }
            case 14:
                var1 = var3.type;
                var1 = var4 == var1;
                var0 = null;
                if (var1) {
                    _fun107099_ip = 125;
                    continue _fun107099
                }
            case 28:
                var5 = var3.type;
                var1 = _closure1_slot2;
                var1 = var1.PLAYING;
                var0 = null;
                if (!(var5 === var1)) {
                    _fun107099_ip = 125;
                    continue _fun107099
                }
            case 52:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.bind(var5)(var3);
                if (var1) {
                    _fun107099_ip = 112;
                    continue _fun107099
                }
            case 82:
                var1 = var3.platform;
                if (!(var4 == var1)) {
                    _fun107099_ip = 104;
                    continue _fun107099
                }
            case 92:
                var1 = _closure1_slot3;
                var1 = var1.DESKTOP;
                _fun107099_ip = 110;
                continue _fun107099;
            case 104:
                var1 = var3.platform;
            case 110:
                _fun107099_ip = 122;
                continue _fun107099;
            case 112:
                var2 = _closure1_slot3;
                var1 = var2.XBOX;
            case 122:
                var0 = var1;
            case 125:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 7841, 2]);