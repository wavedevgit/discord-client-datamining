// modules/app_dms/getAppDMApplication.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_dms/getAppDMApplication.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89692: for (var _fun89692_ip = 0;;) switch (_fun89692_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.isPrivate;
                var0 = var0.bind(var2)();
                var1 = undefined;
                if (!var0) {
                    _fun89692_ip = 28;
                    continue _fun89692
                }
            case 18:
                var0 = var2.getRecipientId;
                var1 = var0.bind(var2)();
            case 28:
                var3 = _closure1_slot2;
                var2 = var3.getUser;
                var2 = var2.bind(var3)(var1);
                var3 = null;
                var4 = var3 == var2;
                var5 = undefined;
                if (var4) {
                    _fun89692_ip = 63;
                    continue _fun89692
                }
            case 57:
                var5 = var2.bot;
            case 63:
                var4 = true;
                var2 = undefined;
                if (!(var4 === var5)) {
                    _fun89692_ip = 74;
                    continue _fun89692
                }
            case 71:
                var2 = var1;
            case 74:
                var4 = _closure1_slot0;
                var1 = var4.getAppIdForBotUserId;
                var1 = var1.bind(var4)(var2);
                var4 = var3 != var2;
                var6 = var2;
                var2 = undefined;
                if (!var4) {
                    _fun89692_ip = 147;
                    continue _fun89692
                }
            case 101:
                var5 = _closure1_slot1;
                var4 = var5.getUserProfile;
                var5 = var4.bind(var5)(var6);
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun89692_ip = 144;
                    continue _fun89692
                }
            case 125:
                var5 = var5.application;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun89692_ip = 144;
                    continue _fun89692
                }
            case 139:
                var4 = var5.id;
            case 144:
                var2 = var4;
            case 147:
                if (!(var3 != var1)) {
                    _fun89692_ip = 154;
                    continue _fun89692
                }
            case 151:
                var2 = var1;
            case 154:
                var1 = _closure1_slot0;
                var0 = var1.getApplication;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.getAppDMApplication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3456, 4661, 1621, 2]);