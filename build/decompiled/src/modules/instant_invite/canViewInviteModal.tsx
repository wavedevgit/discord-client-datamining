// modules/instant_invite/canViewInviteModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var3.Permissions;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/canViewInviteModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun66177: for (var _fun66177_ip = 0;;) switch (_fun66177_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var0 = arg2;
                var3 = arg3;
                var2 = null;
                var6 = var4;
                if (!(var2 != var0)) {
                    _fun66177_ip = 24;
                    continue _fun66177
                }
            case 21:
                var6 = var0;
            case 24:
                var0 = var2 != var6;
                if (!var0) {
                    _fun66177_ip = 56;
                    continue _fun66177
                }
            case 31:
                var5 = var7.can;
                var1 = _closure1_slot0;
                var1 = var1.CREATE_INSTANT_INVITE;
                var0 = var5.bind(var7)(var1, var6);
            case 56:
                if (var0) {
                    _fun66177_ip = 79;
                    continue _fun66177
                }
            case 59:
                var1 = var2 != var4;
                if (!var1) {
                    _fun66177_ip = 76;
                    continue _fun66177
                }
            case 66:
                var4 = var4.vanityURLCode;
                var1 = var2 != var4;
            case 76:
                var0 = var1;
            case 79:
                if (var0) {
                    _fun66177_ip = 101;
                    continue _fun66177
                }
            case 82:
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun66177_ip = 97;
                    continue _fun66177
                }
            case 91:
                var1 = var3.invite_code;
            case 97:
                var0 = var2 != var1;
            case 101:
                return var0;
        }
    };
    var2.canViewInviteModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);