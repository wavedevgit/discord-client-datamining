// modules/premium/OverridePremiumTypeActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var _closure1_slot2 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/OverridePremiumTypeActions.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Environment: var1
        _fun86763: for (var _fun86763_ip = 0;;) switch (_fun86763_ip) {
            case 0:
                var4 = arg1;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 1;
                var2 = var0[var3];
                var0 = undefined;
                var6 = var5.bind(var0)(var2);
                var5 = var6.dispatch;
                var2 = {};
                var7 = 'SET_PREMIUM_TYPE_OVERRIDE';
                var2.type = var7;
                var7 = arg0;
                var2.premiumType = var7;
                var2 = var5.bind(var6)(var2);
                var2 = null;
                if (!(var2 == var4)) {
                    _fun86763_ip = 77;
                    continue _fun86763
                }
            case 64:
                var6 = _closure1_slot2;
                var5 = var6.getCurrentUser;
                var4 = var5.bind(var6)();
            case 77:
                if (!(var2 != var4)) {
                    _fun86763_ip = 124;
                    continue _fun86763
                }
            case 81:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'UPDATE_CLIENT_PREMIUM_TYPE';
                var1.type = var5;
                var1.user = var4;
                var1 = var2.bind(var3)(var1);
            case 124:
                return var0;
        }
    };
    var2.updateClientPremiumTypeOverride = var3;
    var1 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SET_CREATED_AT_OVERRIDE';
        var1.type = var4;
        var4 = arg0;
        var1.createdAt = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateClientCreatedAtOverride = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 806, 2]);