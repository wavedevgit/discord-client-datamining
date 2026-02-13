// modules/rewards/shouldAggressivelyFetchProgramRewards.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rewards/shouldAggressivelyFetchProgramRewards.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96469: for (var _fun96469_ip = 0;;) switch (_fun96469_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var0 = var1 == var2;
                var5 = undefined;
                var4 = undefined;
                if (var0) {
                    _fun96469_ip = 22;
                    continue _fun96469
                }
            case 16:
                var4 = var2.program_current_state;
            case 22:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 2;
                var3 = var7[var3];
                var3 = var6.bind(var5)(var3);
                var3 = var3.ProgramCurrentState;
                var3 = var3.PAYMENT_PROCESSING;
                if (!(var4 !== var3)) {
                    _fun96469_ip = 171;
                    continue _fun96469
                }
            case 61:
                var4 = _closure1_slot3;
                var3 = var4.getCurrentUser;
                var3 = var3.bind(var4)();
                var6 = var1 != var3;
                var4 = null;
                if (!var6) {
                    _fun96469_ip = 121;
                    continue _fun96469
                }
            case 83:
                var7 = _closure1_slot2;
                var6 = var7.getUserProfile;
                var3 = var3.id;
                var6 = var6.bind(var7)(var3);
                var7 = var1 == var6;
                var3 = undefined;
                if (var7) {
                    _fun96469_ip = 118;
                    continue _fun96469
                }
            case 112:
                var3 = var6.premiumSince;
            case 118:
                var4 = var3;
            case 121:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 3;
                var0 = var6[var0];
                var3 = var3.bind(var5)(var0);
                var0 = var3.getDaysSincePremium;
                var3 = var0.bind(var3)(var4);
                var0 = 1;
                var3 = var3 >= var0;
                var0 = !var3;
                if (var3) {
                    _fun96469_ip = 169;
                    continue _fun96469
                }
            case 165:
                var0 = var1 == var2;
            case 169:
                return var0;
            case 171:
                var0 = true;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4664, 1621, 12539, 3114, 2]);