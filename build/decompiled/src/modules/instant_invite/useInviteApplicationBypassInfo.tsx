// modules/instant_invite/useInviteApplicationBypassInfo.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot3 = var6;
    var3 = var3.Permissions;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/useInviteApplicationBypassInfo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useInviteApplicationBypassInfo, environment: var1
        _fun117142: for (var _fun117142_ip = 0;;) switch (_fun117142_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.useStateFromStores;
                var3 = _closure1_slot2;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = new Array(1);
                var3[0] = var1;
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot2;
                    var2 = var3.can;
                    var0 = _closure1_slot4;
                    var1 = var0.KICK_MEMBERS;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var3 = var5.bind(var6)(var4, var2, var3);
                var2 = null;
                var4 = var2 == var1;
                if (var4) {
                    _fun117142_ip = 111;
                    continue _fun117142
                }
            case 82:
                var7 = var1.features;
                var6 = var7.has;
                var5 = _closure1_slot3;
                var5 = var5.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var5 = var6.bind(var7)(var5);
                var4 = !var5;
            case 111:
                if (var4) {
                    _fun117142_ip = 118;
                    continue _fun117142
                }
            case 114:
                var4 = var2 == var1;
            case 118:
                if (var4) {
                    _fun117142_ip = 150;
                    continue _fun117142
                }
            case 121:
                var2 = var1.features;
                var1 = var2.has;
                var0 = _closure1_slot3;
                var0 = var0.MEMBER_VERIFICATION_GATE_ENABLED;
                var0 = var1.bind(var2)(var0);
                var4 = !var0;
            case 150:
                var1 = !var4;
                var0 = {};
                var2 = var1;
                if (var4) {
                    _fun117142_ip = 164;
                    continue _fun117142
                }
            case 161:
                var2 = var3;
            case 164:
                var0.canCreateApplicationBypassInvites = var2;
                var0.isManualApprovalGuild = var1;
                return var0;
        }
    };
    var2.useInviteApplicationBypassInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3050, 660, 566, 2]);