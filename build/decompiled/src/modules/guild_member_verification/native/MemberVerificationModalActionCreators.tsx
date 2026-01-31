// modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.MEMBER_VERIFICATION_TYPE;
    var _closure1_slot3 = var6;
    var1 = var1.IN_APP_MEMBER_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        var6 = arg0;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 3;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var3 = var5.fetchVerificationForm;
        var3 = var3.bind(var5)(var6);
        var3 = 2;
        var3 = var2[var3];
        var8 = var4.bind(var0)(var3);
        var7 = var8.track;
        var3 = _closure1_slot5;
        var5 = var3.OPEN_MODAL;
        var3 = {};
        var9 = _closure1_slot3;
        var3.type = var9;
        var3.guild_id = var6;
        var3 = var7.bind(var8)(var5, var3);
        var3 = 4;
        var3 = var2[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.pushLazy;
        var7 = _closure1_slot0;
        var3 = 6;
        var3 = var2[var3];
        var7 = var7.bind(var0)(var3);
        var3 = 5;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var7.bind(var0)(var3, var2);
        var2 = {};
        var2.guildId = var6;
        var6 = arg1;
        var2.onClose = var6;
        var1 = _closure1_slot4;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.openMemberVerificationModal = var6;
    var3 = function() {
        _fun60273: for (var _fun60273_ip = 0;;) switch (_fun60273_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun60273_ip = 11;
                    continue _fun60273
                }
            case 9:
                var1 = false;
            case 11:
                if (var1) {
                    _fun60273_ip = 68;
                    continue _fun60273
                }
            case 14:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot5;
                var2 = var1.MODAL_DISMISSED;
                var1 = {};
                var5 = _closure1_slot3;
                var1.type = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 68:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.popWithKey;
                var1 = _closure1_slot4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.closeMemberVerificationModal = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4789, 660, 795, 7393, 4525, 7407, 1307, 2]);