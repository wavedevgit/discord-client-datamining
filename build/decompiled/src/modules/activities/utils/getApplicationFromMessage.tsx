// modules/activities/utils/getApplicationFromMessage.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SpotifyApplication;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isSpotifyParty;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getApplicationFromMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92548: for (var _fun92548_ip = 0;;) switch (_fun92548_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.application;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun92548_ip = 87;
                    continue _fun92548
                }
            case 14:
                var0 = var1.activity;
                var2 = var3 != var0;
                var4 = undefined;
                var0 = undefined;
                if (!var2) {
                    _fun92548_ip = 85;
                    continue _fun92548
                }
            case 31:
                var2 = var1.activity;
                var2 = var2.party_id;
                var2 = var3 != var2;
                var0 = undefined;
                if (!var2) {
                    _fun92548_ip = 85;
                    continue _fun92548
                }
            case 52:
                var5 = _closure1_slot2;
                var3 = var1.activity;
                var3 = var3.party_id;
                var3 = var5.bind(var4)(var3);
                var0 = undefined;
                if (!var3) {
                    _fun92548_ip = 85;
                    continue _fun92548
                }
            case 81:
                var0 = _closure1_slot1;
            case 85:
                _fun92548_ip = 110;
                continue _fun92548;
            case 87:
                var3 = _closure1_slot0;
                var2 = var3.createFromServer;
                var1 = var1.application;
                var0 = var2.bind(var3)(var1);
            case 110:
                return var0;
        }
    };
    var2.getApplicationFromMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3455, 12086, 5653, 2]);