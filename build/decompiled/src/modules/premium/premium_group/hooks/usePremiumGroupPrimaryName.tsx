// modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun59362: for (var _fun59362_ip = 0;;) switch (_fun59362_ip) {
            case 0:
                var0 = arguments[0];
                var1 = undefined;
                if (!(var0 === var1)) {
                    _fun59362_ip = 11;
                    continue _fun59362
                }
            case 9:
                var0 = {};
            case 11:
                var7 = var0.useCachedData;
                if (!(var7 === var1)) {
                    _fun59362_ip = 23;
                    continue _fun59362
                }
            case 21:
                var7 = true;
            case 23:
                var6 = var0.fetch;
                if (!(var6 === var1)) {
                    _fun59362_ip = 35;
                    continue _fun59362
                }
            case 33:
                var6 = true;
            case 35:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 0;
                var0 = var5[var0];
                var3 = var4.bind(var1)(var0);
                var0 = {};
                var0.useCachedData = var7;
                var0.fetch = var6;
                var0 = var3.bind(var1)(var0);
                var3 = var0.premiumGroupMembership;
                var0 = 1;
                var0 = var5[var0];
                var4 = var4.bind(var1)(var0);
                var5 = null;
                var8 = var5 == var3;
                var0 = undefined;
                if (var8) {
                    _fun59362_ip = 109;
                    continue _fun59362
                }
            case 103:
                var0 = var3.subscriptionId;
            case 109:
                var8 = var5 != var0;
                var3 = null;
                if (!var8) {
                    _fun59362_ip = 121;
                    continue _fun59362
                }
            case 118:
                var3 = var0;
            case 121:
                var0 = {};
                var0.useCachedData = var7;
                var0.fetch = var6;
                var0 = var4.bind(var1)(var3, var0);
                var4 = var0.premiumGroupMembers;
                var3 = var5 == var4;
                var0 = undefined;
                if (var3) {
                    _fun59362_ip = 160;
                    continue _fun59362
                }
            case 154:
                var0 = var4.primary;
            case 160:
                var3 = var5 != var0;
                var0 = null;
                if (!var3) {
                    _fun59362_ip = 215;
                    continue _fun59362
                }
            case 169:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 2;
                var2 = var6[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.nameFromUser;
                var5 = var5 == var4;
                var1 = undefined;
                if (var5) {
                    _fun59362_ip = 210;
                    continue _fun59362
                }
            case 204:
                var1 = var4.primary;
            case 210:
                var0 = var2.bind(var3)(var1);
            case 215:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7301, 7305, 3236, 2]);