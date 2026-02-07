// modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SubscriptionIntervalTypes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun85147: for (var _fun85147_ip = 0;;) switch (_fun85147_ip) {
            case 0:
                var1 = arg0;
                var0 = 'roles';
                var0 = var0 in var1;
                if (var0) {
                    _fun85147_ip = 73;
                    continue _fun85147
                }
            case 14:
                var14 = var1.ref_type;
                var12 = var1.emoji_id;
                var10 = var1.name;
                var8 = var1.ref_id;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var15 = '';
                var0 = '-';
                var13 = var0;
                var11 = var0;
                var9 = var0;
                var0 = var15[var3](var14, var13, var12, var11, var10, var9, var8, var7);
                _fun85147_ip = 102;
                continue _fun85147;
            case 73:
                var3 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'emoji-';
                var0 = var2.bind(var1)(var3);
            case 102:
                return var0;
        }
    };
    var2.getBenefitKey = var3;
    var3 = function arg0() {
        _fun85148: for (var _fun85148_ip = 0;;) switch (_fun85148_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.interval;
                var4 = var0.interval_count;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 2;
                var1 = var1[var7];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var3 = var1.intl;
                var2 = var3.format;
                var1 = _closure1_slot3;
                var1 = var1.DAY;
                if (!(var1 !== var8)) {
                    _fun85148_ip = 158;
                    continue _fun85148
                }
            case 64:
                var1 = _closure1_slot3;
                var1 = var1.MONTH;
                if (!(var1 !== var8)) {
                    _fun85148_ip = 126;
                    continue _fun85148
                }
            case 78:
                var1 = _closure1_slot3;
                var5 = var1.YEAR;
                var1 = undefined;
                if (!(var5 === var8)) {
                    _fun85148_ip = 188;
                    continue _fun85148
                }
            case 94:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.t;
                var1 = var5.cuSp8Q;
                _fun85148_ip = 188;
                continue _fun85148;
            case 126:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.t;
                var1 = var5.zuN545;
                _fun85148_ip = 188;
                continue _fun85148;
            case 158:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var5.bind(var6)(var0);
                var0 = var0.t;
                var1 = var0["3rUmPQ"];
            case 188:
                var0 = {};
                var0.count = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.formatPlanInterval = var3;
    var3 = function arg0() {
        _fun85149: for (var _fun85149_ip = 0;;) switch (_fun85149_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.interval;
                var6 = var0.interval_count;
                var0 = _closure1_slot3;
                var0 = var0.DAY;
                if (!(var0 !== var2)) {
                    _fun85149_ip = 201;
                    continue _fun85149
                }
            case 35:
                var0 = _closure1_slot3;
                var0 = var0.MONTH;
                if (!(var0 !== var2)) {
                    _fun85149_ip = 134;
                    continue _fun85149
                }
            case 49:
                var0 = _closure1_slot3;
                var0 = var0.YEAR;
                if (!(var0 !== var2)) {
                    _fun85149_ip = 67;
                    continue _fun85149
                }
            case 63:
                var0 = undefined;
                return var0;
            case 67:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 2;
                var3 = var7[var0];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var7[var0];
                var0 = var5.bind(var2)(var0);
                var0 = var0.t;
                var2 = var0.IfYQVC;
                var0 = {};
                var0.years = var6;
                var0 = var3.bind(var4)(var2, var0);
                return var0;
            case 134:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 2;
                var3 = var7[var0];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var7[var0];
                var0 = var5.bind(var2)(var0);
                var0 = var0.t;
                var2 = var0.erUSmA;
                var0 = {};
                var0.months = var6;
                var0 = var3.bind(var4)(var2, var0);
                return var0;
            case 201:
                var2 = 0;
                if (!(var6 > var2)) {
                    _fun85149_ip = 218;
                    continue _fun85149
                }
            case 207:
                var5 = 7;
                var0 = var6 % var5;
                if (!(var0 !== var2)) {
                    _fun85149_ip = 285;
                    continue _fun85149
                }
            case 218:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 2;
                var3 = var8[var0];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var8[var0];
                var0 = var7.bind(var2)(var0);
                var0 = var0.t;
                var2 = var0.jzH70Z;
                var0 = {};
                var0.days = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun85149_ip = 354;
                continue _fun85149;
            case 285:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 2;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.iVZYyl;
                var1 = {};
                var5 = var6 / var5;
                var1.weeks = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 354:
                return var0;
        }
    };
    var2.formatPlanIntervalDuration = var3;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.ref_type;
        var0 = _closure1_slot2;
        var0 = var0.CHANNEL;
        var0 = var1 === var0;
        return var0;
    };
    var2.isChannelBenefit = var3;
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.ref_type;
        var0 = _closure1_slot2;
        var0 = var0.INTANGIBLE;
        var0 = var1 === var0;
        return var0;
    };
    var2.isIntangibleBenefit = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5686, 1623, 1234, 2]);