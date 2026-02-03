// modules/guild_mod_dash_member_safety/MemberSafetyElasticSearchQueryTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var6 = 0;
    var3 = var5[var6];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var1 = var1.Millis;
    var1 = var1.DAY;
    var7 = 2;
    var3 = var7 * var1;
    var1 = {};
    var1.ORDER_BY_UNSPECIFIED = var6;
    var4 = 'ORDER_BY_UNSPECIFIED';
    var1[var6] = var4;
    var4 = 1;
    var1.ORDER_BY_GUILD_JOINED_AT_DESC = var4;
    var6 = 'ORDER_BY_GUILD_JOINED_AT_DESC';
    var1[var4] = var6;
    var1.ORDER_BY_GUILD_JOINED_AT_ASC = var7;
    var6 = 'ORDER_BY_GUILD_JOINED_AT_ASC';
    var1[var7] = var6;
    var7 = 3;
    var1.ORDER_BY_USER_ID_DESC = var7;
    var6 = 'ORDER_BY_USER_ID_DESC';
    var1[var7] = var6;
    var7 = 4;
    var1.ORDER_BY_USER_ID_ASC = var7;
    var6 = 'ORDER_BY_USER_ID_ASC';
    var1[var7] = var6;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_mod_dash_member_safety/MemberSafetyElasticSearchQueryTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var2.UNUSUAL_DM_COMPARISON_DELTA = var3;
    var3 = function arg0() {
        _fun40497: for (var _fun40497_ip = 0;;) switch (_fun40497_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.joinedAt;
                var2 = var0.userId;
                var0 = null;
                var1 = var0 == var5;
                if (var1) {
                    _fun40497_ip = 81;
                    continue _fun40497
                }
            case 23:
                var1 = {};
                var3 = global;
                var3 = var3.Date;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var4;
                var6 = var5;
                var3 = new var7[var3](var6, var5);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = var4.getTime;
                var3 = var3.bind(var4)();
                var1.guild_joined_at = var3;
                var1.user_id = var2;
                var0 = var1;
            case 81:
                return var0;
        }
    };
    var2.createMemberSearchCursor = var3;
    var2.OrderBy = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [667, 2]);