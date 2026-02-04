// modules/activities/utils/allowPopups.tsx
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
    var3 = var3.APPLICATIONS_WITH_ALLOWED_POPUPS;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/allowPopups.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun64887: for (var _fun64887_ip = 0;;) switch (_fun64887_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                var0 = var4 != var3;
                if (!var0) {
                    _fun64887_ip = 127;
                    continue _fun64887
                }
            case 12:
                var5 = _closure1_slot0;
                var2 = var5.has;
                var1 = var3.id;
                var1 = var2.bind(var5)(var1);
                var2 = !var1;
                var1 = !var2;
                if (!var2) {
                    _fun64887_ip = 124;
                    continue _fun64887
                }
            case 43:
                var2 = 'embeddedActivityConfig';
                var2 = var2 in var3;
                if (var2) {
                    _fun64887_ip = 94;
                    continue _fun64887
                }
            case 54:
                var2 = 'embedded_activity_config';
                var2 = var2 in var3;
                if (!var2) {
                    _fun64887_ip = 92;
                    continue _fun64887
                }
            case 65:
                var5 = var3.embedded_activity_config;
                var7 = var4 == var5;
                var6 = undefined;
                if (var7) {
                    _fun64887_ip = 86;
                    continue _fun64887
                }
            case 80:
                var6 = var5.displays_advertisements;
            case 86:
                var5 = true;
                var2 = var5 === var6;
            case 92:
                _fun64887_ip = 121;
                continue _fun64887;
            case 94:
                var3 = var3.embeddedActivityConfig;
                var5 = var4 == var3;
                var4 = undefined;
                if (var5) {
                    _fun64887_ip = 115;
                    continue _fun64887
                }
            case 109:
                var4 = var3.displays_advertisements;
            case 115:
                var3 = true;
                var2 = var3 === var4;
            case 121:
                var1 = var2;
            case 124:
                var0 = var1;
            case 127:
                return var0;
        }
    };
    var2.allowPopups = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3457, 2]);