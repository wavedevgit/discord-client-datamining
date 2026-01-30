// modules/guild_member_verification/canReviewGuildMemberApplications.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot4 = var6;
    var3 = var3.Permissions;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/canReviewGuildMemberApplications.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: canReviewGuildMemberApplications, environment: var1
        _fun49846: for (var _fun49846_ip = 0;;) switch (_fun49846_ip) {
            case 0:
                var3 = _closure1_slot2;
                var1 = var3.getGuild;
                var0 = arg0;
                var5 = var1.bind(var3)(var0);
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun49846_ip = 87;
                    continue _fun49846
                }
            case 29:
                var4 = var5.features;
                var3 = var4.has;
                var1 = _closure1_slot4;
                var1 = var1.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var1 = var3.bind(var4)(var1);
                if (!var1) {
                    _fun49846_ip = 84;
                    continue _fun49846
                }
            case 58:
                var4 = _closure1_slot3;
                var3 = var4.can;
                var2 = _closure1_slot5;
                var2 = var2.KICK_MEMBERS;
                var1 = var3.bind(var4)(var2, var5);
            case 84:
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var2.canReviewGuildMemberApplications = var3;
    var1 = function(arg0) { // Original name: useCanReviewGuildMemberApplications, environment: var1
        _fun49847: for (var _fun49847_ip = 0;;) switch (_fun49847_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var6 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var3.bind(var5)(var2, var0);
                var5 = _closure1_slot3;
                var2 = var5.can;
                var0 = _closure1_slot5;
                var0 = var0.KICK_MEMBERS;
                var2 = var2.bind(var5)(var0, var3);
                if (var2) {
                    _fun49847_ip = 117;
                    continue _fun49847
                }
            case 91:
                var6 = _closure1_slot3;
                var5 = var6.can;
                var0 = _closure1_slot5;
                var0 = var0.MANAGE_GUILD;
                var2 = var5.bind(var6)(var0, var3);
            case 117:
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun49847_ip = 152;
                    continue _fun49847
                }
            case 126:
                var7 = var3.features;
                var6 = var7.has;
                var5 = _closure1_slot4;
                var5 = var5.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var0 = var6.bind(var7)(var5);
            case 152:
                if (!var0) {
                    _fun49847_ip = 158;
                    continue _fun49847
                }
            case 155:
                var0 = var2;
            case 158:
                if (!var0) {
                    _fun49847_ip = 192;
                    continue _fun49847
                }
            case 161:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 4;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.guildHasVerificationGate;
                var0 = var1.bind(var2)(var3);
            case 192:
                return var0;
        }
    };
    var2.useCanReviewGuildMemberApplications = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3050, 660, 566, 4787, 2]);