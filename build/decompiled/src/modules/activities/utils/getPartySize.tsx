// modules/activities/utils/getPartySize.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getPartySize.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92463: for (var _fun92463_ip = 0;;) switch (_fun92463_ip) {
            case 0:
                var0 = arg0;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun92463_ip = 110;
                    continue _fun92463
                }
            case 9:
                var1 = var0.party;
                if (!(var2 != var1)) {
                    _fun92463_ip = 110;
                    continue _fun92463
                }
            case 19:
                var1 = var0.party;
                var1 = var1.size;
                if (!(var2 != var1)) {
                    _fun92463_ip = 110;
                    continue _fun92463
                }
            case 34:
                var1 = var0.party;
                var1 = var1.size;
                var1 = var1.length;
                var3 = 2;
                if (!(!(var1 < var3))) {
                    _fun92463_ip = 110;
                    continue _fun92463
                }
            case 57:
                var2 = _closure1_slot0;
                var0 = var0.party;
                var1 = var0.size;
                var0 = undefined;
                var2 = var2.bind(var0)(var1, var3);
                var0 = {};
                var1 = 0;
                var1 = var2[var1];
                var0.partySize = var1;
                var1 = 1;
                var1 = var2[var1];
                var0.maxPartySize = var1;
                return var0;
            case 110:
                var0 = {
                    'partySize': 4294967295,
                    'maxPartySize': 4294967295
                };
                return var0;
        }
    };
    var2.getPartySize = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 2]);