// modules/guild_mod_dash_member_safety/SortUtils.tsx
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
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_mod_dash_member_safety/SortUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun40561: for (var _fun40561_ip = 0;;) switch (_fun40561_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var0 = var5[var0];
                var3 = undefined;
                var8 = var7.bind(var3)(var0);
                var6 = var8.getJoinedAtTimestamp;
                var0 = var1.joinedAt;
                var0 = var6.bind(var8)(var0);
                var6 = 1;
                var5 = var5[var6];
                var5 = var7.bind(var3)(var5);
                var5 = var5.OrderBy;
                var5 = var5.ORDER_BY_GUILD_JOINED_AT_ASC;
                if (!(var5 !== var4)) {
                    _fun40561_ip = 230;
                    continue _fun40561
                }
            case 78:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var6];
                var5 = var7.bind(var3)(var5);
                var5 = var5.OrderBy;
                var5 = var5.ORDER_BY_GUILD_JOINED_AT_DESC;
                if (!(var5 !== var4)) {
                    _fun40561_ip = 225;
                    continue _fun40561
                }
            case 111:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var6];
                var5 = var7.bind(var3)(var5);
                var5 = var5.OrderBy;
                var5 = var5.ORDER_BY_USER_ID_ASC;
                if (!(var5 !== var4)) {
                    _fun40561_ip = 205;
                    continue _fun40561
                }
            case 144:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var5.bind(var3)(var2);
                var2 = var2.OrderBy;
                var2 = var2.ORDER_BY_USER_ID_DESC;
                if (!(var2 !== var4)) {
                    _fun40561_ip = 182;
                    continue _fun40561
                }
            case 177:
                var2 = -var0;
                return var2;
            case 182:
                var2 = global;
                var4 = var2.parseInt;
                var2 = var1.userId;
                var2 = var4.bind(var3)(var2);
                var2 = -var2;
                return var2;
            case 205:
                var2 = global;
                var2 = var2.parseInt;
                var1 = var1.userId;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 225:
                var1 = -var0;
                return var1;
            case 230:
                return var0;
        }
    };
    var2.getSortValueForMember = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4390, 4389, 2]);