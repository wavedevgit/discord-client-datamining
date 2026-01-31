// modules/guild_tag/PrimaryGuildUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_tag/PrimaryGuildUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: isUserPrimaryGuildEqual, environment: var1
        _fun18086: for (var _fun18086_ip = 0;;) switch (_fun18086_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun18086_ip = 89;
                    continue _fun18086
                }
            case 12:
                if (!(var0 != var1)) {
                    _fun18086_ip = 89;
                    continue _fun18086
                }
            case 16:
                var3 = var2.identityGuildId;
                var0 = var1.identityGuildId;
                var0 = var3 === var0;
                if (!var0) {
                    _fun18086_ip = 51;
                    continue _fun18086
                }
            case 35:
                var4 = var2.identityEnabled;
                var3 = var1.identityEnabled;
                var0 = var4 === var3;
            case 51:
                if (!var0) {
                    _fun18086_ip = 68;
                    continue _fun18086
                }
            case 54:
                var4 = var2.tag;
                var3 = var1.tag;
                var0 = var4 === var3;
            case 68:
                if (!var0) {
                    _fun18086_ip = 87;
                    continue _fun18086
                }
            case 71:
                var4 = var2.badge;
                var3 = var1.badge;
                var0 = var4 === var3;
            case 87:
                _fun18086_ip = 93;
                continue _fun18086;
            case 89:
                var0 = var2 === var1;
            case 93:
                return var0;
        }
    };
    var2.isUserPrimaryGuildEqual = var3;
    var1 = function(arg0) { // Original name: ensureUserPrimaryGuild, environment: var1
        _fun18087: for (var _fun18087_ip = 0;;) switch (_fun18087_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun18087_ip = 68;
                    continue _fun18087
                }
            case 9:
                var2 = 'identityGuildId';
                var2 = var2 in var1;
                if (var2) {
                    _fun18087_ip = 66;
                    continue _fun18087
                }
            case 20:
                var2 = {};
                var3 = var1.identity_guild_id;
                var2.identityGuildId = var3;
                var3 = var1.identity_enabled;
                var2.identityEnabled = var3;
                var3 = var1.tag;
                var2.tag = var3;
                var3 = var1.badge;
                var2.badge = var3;
                return var2;
            case 66:
                return var1;
            case 68:
                return var0;
        }
    };
    var2.ensureUserPrimaryGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);