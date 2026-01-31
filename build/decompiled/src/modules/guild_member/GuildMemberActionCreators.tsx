// modules/guild_member/GuildMemberActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member/GuildMemberActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: updateGuildSelfMember, environment: var1
        _fun43413: for (var _fun43413_ip = 0;;) switch (_fun43413_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var7 = arguments[2];
                var0 = undefined;
                if (!(var7 === var0)) {
                    _fun43413_ip = 17;
                    continue _fun43413
                }
            case 15:
                var7 = false;
            case 17:
                var3 = _closure1_slot3;
                var2 = var3.isFullServerPreview;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun43413_ip = 186;
                    continue _fun43413
                }
            case 41:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 3;
                var2 = var6[var2];
                var8 = var3.bind(var0)(var2);
                var3 = var8.dispatch;
                var2 = {};
                var9 = 'GUILD_MEMBER_UPDATE_LOCAL';
                var2.type = var9;
                var2.guildId = var4;
                var9 = var5.roles;
                var2.roles = var9;
                var9 = var5.flags;
                var2.flags = var9;
                var2 = var3.bind(var8)(var2);
                var3 = _closure1_slot0;
                var2 = 4;
                var2 = var6[var2];
                var2 = var3.bind(var0)(var2);
                var6 = var2.HTTP;
                var3 = var6.patch;
                var2 = {};
                var9 = _closure1_slot4;
                var8 = var9.SET_GUILD_MEMBER;
                var8 = var8.bind(var9)(var4);
                var2.url = var8;
                var2.body = var5;
                var8 = !var7;
                var7 = !var8;
                if (!var8) {
                    _fun43413_ip = 168;
                    continue _fun43413
                }
            case 166:
                var7 = undefined;
            case 168:
                var2.oldFormErrors = var7;
                var7 = false;
                var2.rejectWithError = var7;
                var2 = var3.bind(var6)(var2);
                return var2;
            case 186:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.updateImpersonatedData;
                var1 = {};
                var1.memberOptions = var5;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
        }
    };
    var2.updateGuildSelfMember = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1664, 660, 4655, 806, 507, 2]);