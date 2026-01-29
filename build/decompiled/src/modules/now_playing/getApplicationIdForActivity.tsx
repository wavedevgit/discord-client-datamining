// modules/now_playing/getApplicationIdForActivity.tsx
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
    var3 = var3.SpotifyApplication;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TWITCH_APPLICATION_ID_PREFIX;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.XBOX_APPLICATION_ID_PREFIX;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/now_playing/getApplicationIdForActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getApplicationIdForActivity, environment: var1
        _fun96375: for (var _fun96375_ip = 0;;) switch (_fun96375_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                if (var0) {
                    _fun96375_ip = 182;
                    continue _fun96375
                }
            case 39:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                if (!var0) {
                    _fun96375_ip = 94;
                    continue _fun96375
                }
            case 67:
                var0 = var1.party;
                var4 = null;
                if (!(var4 != var0)) {
                    _fun96375_ip = 94;
                    continue _fun96375
                }
            case 79:
                var0 = var1.party;
                var0 = var0.id;
                if (!(var4 == var0)) {
                    _fun96375_ip = 171;
                    continue _fun96375
                }
            case 94:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                if (!var0) {
                    _fun96375_ip = 133;
                    continue _fun96375
                }
            case 122:
                var3 = var1.url;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun96375_ip = 156;
                    continue _fun96375
                }
            case 133:
                var3 = var1.application_id;
                var0 = null;
                var3 = var0 != var3;
                if (!var3) {
                    _fun96375_ip = 154;
                    continue _fun96375
                }
            case 148:
                var0 = var1.application_id;
            case 154:
                _fun96375_ip = 169;
                continue _fun96375;
            case 156:
                var4 = _closure1_slot3;
                var3 = var1.url;
                var0 = var4 + var3;
            case 169:
                _fun96375_ip = 180;
                continue _fun96375;
            case 171:
                var3 = _closure1_slot2;
                var0 = var3.id;
            case 180:
                _fun96375_ip = 195;
                continue _fun96375;
            case 182:
                var2 = _closure1_slot4;
                var1 = var1.name;
                var0 = var2 + var1;
            case 195:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12063, 12504, 12505, 7798, 5630, 5694, 2]);