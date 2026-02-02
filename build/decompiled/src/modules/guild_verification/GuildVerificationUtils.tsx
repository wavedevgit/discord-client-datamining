// modules/guild_verification/GuildVerificationUtils.tsx
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
    var3 = var3.Routes;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_verification/GuildVerificationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun92665: for (var _fun92665_ip = 0;;) switch (_fun92665_ip) {
            case 0:
                var3 = arg0;
                var6 = var3.features;
                var2 = null;
                var4 = var2 == var6;
                var0 = undefined;
                if (var4) {
                    _fun92665_ip = 43;
                    continue _fun92665
                }
            case 20:
                var5 = var6.includes;
                var4 = _closure1_slot3;
                var4 = var4.MEMBER_VERIFICATION_GATE_ENABLED;
                var0 = var5.bind(var6)(var4);
            case 43:
                if (!var0) {
                    _fun92665_ip = 87;
                    continue _fun92665
                }
            case 46:
                var4 = var3.features;
                var2 = var2 == var4;
                var1 = undefined;
                if (var2) {
                    _fun92665_ip = 84;
                    continue _fun92665
                }
            case 61:
                var3 = var4.includes;
                var2 = _closure1_slot3;
                var2 = var2.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var1 = var3.bind(var4)(var2);
            case 84:
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var2.inviteGuildHasPendingMemberDisabledVerification = var3;
    var1 = function(arg0) { // Environment: var1
        _fun92666: for (var _fun92666_ip = 0;;) switch (_fun92666_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot2;
                var1 = var2.getRequest;
                var1 = var1.bind(var2)(var4);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun92666_ip = 71;
                    continue _fun92666
                }
            case 27:
                var2 = var1.applicationStatus;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var1 = var1.GuildJoinRequestApplicationStatuses;
                var1 = var1.STARTED;
                if (!(var2 === var1)) {
                    _fun92666_ip = 106;
                    continue _fun92666
                }
            case 71:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.openMemberVerificationModal;
                var1 = var1.bind(var2)(var4);
                _fun92666_ip = 152;
                continue _fun92666;
            case 106:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.transitionTo;
                var3 = _closure1_slot4;
                var0 = var3.GUILD_MEMBER_VERIFICATION;
                var0 = var0.bind(var3)(var4);
                var0 = var1.bind(var2)(var0);
            case 152:
                var0 = undefined;
                return var0;
        }
    };
    var2.openVerificationModalOrTransitionToApplication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3175, 660, 3177, 1220, 7407, 2]);