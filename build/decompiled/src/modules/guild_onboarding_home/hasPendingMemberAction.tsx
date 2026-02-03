// modules/guild_onboarding_home/hasPendingMemberAction.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/hasPendingMemberAction.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun39654: for (var _fun39654_ip = 0;;) switch (_fun39654_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.getGuild;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var4 = _closure1_slot3;
                var1 = var4.getChannel;
                var0 = arg1;
                var1 = var1.bind(var4)(var0);
                var5 = null;
                var0 = var5 != var2;
                if (!var0) {
                    _fun39654_ip = 50;
                    continue _fun39654
                }
            case 46:
                var0 = var5 != var1;
            case 50:
                if (!var0) {
                    _fun39654_ip = 80;
                    continue _fun39654
                }
            case 53:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 7;
                var4 = var6[var4];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var0 = var4.bind(var6)(var2);
            case 80:
                if (!var0) {
                    _fun39654_ip = 109;
                    continue _fun39654
                }
            case 83:
                var7 = var2.features;
                var6 = var7.has;
                var4 = _closure1_slot8;
                var4 = var4.GUILD_SERVER_GUIDE;
                var0 = var6.bind(var7)(var4);
            case 109:
                if (!var0) {
                    _fun39654_ip = 203;
                    continue _fun39654
                }
            case 112:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 8;
                var6 = var6[var4];
                var4 = undefined;
                var7 = var7.bind(var4)(var6);
                var6 = var7.hasFlag;
                var10 = _closure1_slot4;
                var9 = var10.getSelfMember;
                var8 = var2.id;
                var8 = var9.bind(var10)(var8);
                var9 = var5 == var8;
                if (var9) {
                    _fun39654_ip = 172;
                    continue _fun39654
                }
            case 167:
                var4 = var8.flags;
            case 172:
                var8 = var5 != var4;
                var5 = 0;
                if (!var8) {
                    _fun39654_ip = 184;
                    continue _fun39654
                }
            case 181:
                var5 = var4;
            case 184:
                var4 = _closure1_slot9;
                var4 = var4.COMPLETED_HOME_ACTIONS;
                var4 = var6.bind(var7)(var5, var4);
                var0 = !var4;
            case 203:
                if (!var0) {
                    _fun39654_ip = 234;
                    continue _fun39654
                }
            case 206:
                var7 = _closure1_slot6;
                var6 = var7.hasMemberAction;
                var5 = var2.id;
                var4 = var1.id;
                var0 = var6.bind(var7)(var5, var4);
            case 234:
                if (!var0) {
                    _fun39654_ip = 268;
                    continue _fun39654
                }
            case 237:
                var4 = _closure1_slot7;
                var3 = var4.hasCompletedActionForChannel;
                var2 = var2.id;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                var0 = !var1;
            case 268:
                return var0;
        }
    };
    var2.hasPendingMemberAction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1672, 1410, 4304, 4305, 660, 3070, 4306, 1384, 2]);