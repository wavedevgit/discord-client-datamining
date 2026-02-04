// modules/guild_role_subscriptions/formatDurationFromDays.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/formatDurationFromDays.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116446: for (var _fun116446_ip = 0;;) switch (_fun116446_ip) {
            case 0:
                var6 = arg0;
                var8 = 0;
                if (!(var6 > var8)) {
                    _fun116446_ip = 20;
                    continue _fun116446
                }
            case 9:
                var5 = 7;
                var0 = var6 % var5;
                if (!(var0 !== var8)) {
                    _fun116446_ip = 87;
                    continue _fun116446
                }
            case 20:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var2 = var0[var8];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var0[var8];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0["k2UNz+"];
                var0 = {};
                var0.days = var6;
                var0 = var2.bind(var3)(var1, var0);
                _fun116446_ip = 156;
                continue _fun116446;
            case 87:
                var7 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = var1[var8];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var1[var8];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.EmoBD2;
                var1 = {};
                var5 = var6 / var5;
                var1.weeks = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 156:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 2]);