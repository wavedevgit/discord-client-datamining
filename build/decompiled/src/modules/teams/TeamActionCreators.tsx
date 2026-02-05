// modules/teams/TeamActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var1 = var1.Endpoints;
    var _closure1_slot2 = var1;
    var1 = {};
    var3 = function() {
        _fun116739: for (var _fun116739_ip = 0;;) switch (_fun116739_ip) {
            case 0:
                var4 = arguments[0];
                var2 = undefined;
                if (!(var4 === var2)) {
                    _fun116739_ip = 11;
                    continue _fun116739
                }
            case 9:
                var4 = false;
            case 11:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var0 = var5[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.HTTP;
                var1 = var2.get;
                var0 = {};
                var3 = _closure1_slot2;
                var3 = var3.TEAMS;
                var0.url = var3;
                var3 = {};
                var3.include_payout_account_status = var4;
                var0.query = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.fetchTeams = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/teams/TeamActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 507, 2]);