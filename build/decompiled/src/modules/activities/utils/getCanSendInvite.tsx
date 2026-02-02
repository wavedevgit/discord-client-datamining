// modules/activities/utils/getCanSendInvite.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var6 = var3.ActivityFlags;
    var _closure1_slot3 = var6;
    var3 = var3.ActivityActionTypes;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getCanSendInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun92472: for (var _fun92472_ip = 0;;) switch (_fun92472_ip) {
            case 0:
                var6 = arg0;
                var0 = arg1;
                var1 = var0.author;
                var2 = var1.id;
                var1 = arg3;
                if (!(var2 !== var1)) {
                    _fun92472_ip = 256;
                    continue _fun92472
                }
            case 27:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 1;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = arg2;
                var2 = var2.id;
                var2 = var3.bind(var4)(var6, var0, var2);
                if (var2) {
                    _fun92472_ip = 74;
                    continue _fun92472
                }
            case 70:
                var2 = false;
                return var2;
            case 74:
                var0 = var0.activity;
                var2 = null;
                var3 = var2 == var0;
                var2 = undefined;
                if (var3) {
                    _fun92472_ip = 96;
                    continue _fun92472
                }
            case 91:
                var2 = var0.type;
            case 96:
                var0 = _closure1_slot4;
                var0 = var0.JOIN_REQUEST;
                if (!(var2 === var0)) {
                    _fun92472_ip = 252;
                    continue _fun92472
                }
            case 113:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = _closure1_slot3;
                var0 = var0.JOIN;
                var0 = var2.bind(var4)(var6, var0);
                if (var0) {
                    _fun92472_ip = 156;
                    continue _fun92472
                }
            case 152:
                var0 = false;
                return var0;
            case 156:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var0 = var5[var0];
                var3 = var2.bind(var4)(var0);
                var0 = var3.getPartySize;
                var3 = var0.bind(var3)(var6);
                var0 = 4;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.hasPartySize;
                var0 = var0.bind(var2)(var3);
                var0 = !var0;
                if (var0) {
                    _fun92472_ip = 247;
                    continue _fun92472
                }
            case 216:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isPartyFull;
                var0 = var1.bind(var2)(var3);
            case 247:
                var0 = !var0;
                return var0;
            case 252:
                var0 = false;
                return var0;
            case 256:
                var0 = false;
                return var0;
        }
    };
    var2.getCanSendInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 12026, 5635, 12029, 12032, 12033, 2]);