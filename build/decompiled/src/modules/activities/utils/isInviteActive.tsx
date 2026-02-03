// modules/activities/utils/isInviteActive.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.HOUR;
    var4 = 2;
    var1 = var4 * var1;
    var _closure1_slot2 = var1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isInviteActive.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1, arg2() {
        _fun92512: for (var _fun92512_ip = 0;;) switch (_fun92512_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var4 = null;
                if (!(var4 != var0)) {
                    _fun92512_ip = 186;
                    continue _fun92512
                }
            case 15:
                var1 = var2.activity;
                var1 = var4 != var1;
                var5 = null;
                if (!var1) {
                    _fun92512_ip = 42;
                    continue _fun92512
                }
            case 30:
                var1 = var2.activity;
                var5 = var1.party_id;
            case 42:
                var3 = var4 != var5;
                if (!var3) {
                    _fun92512_ip = 73;
                    continue _fun92512
                }
            case 49:
                var6 = var0.party;
                var7 = var4 == var6;
                var1 = undefined;
                if (var7) {
                    _fun92512_ip = 69;
                    continue _fun92512
                }
            case 64:
                var1 = var6.id;
            case 69:
                var3 = var1 !== var5;
            case 73:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 1;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.extractTimestamp;
                var2 = var2.id;
                var2 = var5.bind(var6)(var2);
                var1 = _closure1_slot2;
                var2 = var2 + var1;
                var1 = global;
                var5 = var1.Date;
                var1 = var5.now;
                var1 = var1.bind(var5)();
                var2 = var2 < var1;
                var1 = var0.application_id;
                var1 = var4 != var1;
                if (!var1) {
                    _fun92512_ip = 169;
                    continue _fun92512
                }
            case 156:
                var4 = var0.application_id;
                var0 = arg2;
                var1 = var4 !== var0;
            case 169:
                var0 = !var3;
                if (var3) {
                    _fun92512_ip = 178;
                    continue _fun92512
                }
            case 175:
                var0 = !var2;
            case 178:
                if (!var0) {
                    _fun92512_ip = 184;
                    continue _fun92512
                }
            case 181:
                var0 = !var1;
            case 184:
                return var0;
            case 186:
                var0 = false;
                return var0;
        }
    };
    var2.default = var3;
    var2.EMBED_LIFETIME = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [667, 21, 2]);