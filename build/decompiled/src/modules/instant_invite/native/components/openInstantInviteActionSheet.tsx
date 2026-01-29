// modules/instant_invite/native/components/openInstantInviteActionSheet.tsx
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
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/components/openInstantInviteActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: openInstantInviteActionSheet, environment: var1
        _fun67225: for (var _fun67225_ip = 0;;) switch (_fun67225_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 0;
                var3 = var2[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 2;
                var3 = var2[var3];
                var4 = var4.bind(var0)(var3);
                var3 = 1;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var0)(var3, var2);
                var8 = var1.vanityURLCode;
                var2 = null;
                if (!(var2 == var8)) {
                    _fun67225_ip = 89;
                    continue _fun67225
                }
            case 79:
                var2 = var1.channel;
                var8 = var2.id;
            case 89:
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'InstantInviteActionSheet-';
                var3 = var3.bind(var2)(var8);
                var2 = {};
                var13 = var2;
                var12 = var1;
                var8 = copyDataProperties(var13, var12);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 3;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.ImpressionNames;
                var8 = var7.GUILD_INVITE;
                var7 = 'impressionName';
                var2[var7] = var8;
                var8 = {};
                var7 = var1.channel;
                var7 = var7.id;
                var8.invite_channel_id = var7;
                var7 = var1.channel;
                var7 = var7.guild_id;
                var8.invite_guild_id = var7;
                var7 = 'impressionProperties';
                var2[var7] = var8;
                var10 = var1.stackingBehavior;
                var14 = var6;
                var13 = var4;
                var12 = var3;
                var11 = var2;
                var1 = var14[var5](var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3237, 8299, 1307, 481, 2]);