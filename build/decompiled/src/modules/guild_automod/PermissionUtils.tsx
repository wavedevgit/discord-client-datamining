// modules/guild_automod/PermissionUtils.tsx
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
    var3 = function arg0() {
        _fun109709: for (var _fun109709_ip = 0;;) switch (_fun109709_ip) {
            case 0:
                var2 = arguments[1];
                var4 = arguments[2];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun109709_ip = 19;
                    continue _fun109709
                }
            case 12:
                var2 = _closure1_slot2;
            case 19:
                if (!(var4 === var0)) {
                    _fun109709_ip = 30;
                    continue _fun109709
                }
            case 23:
                var4 = _closure1_slot3;
            case 30:
                var1 = var2.getGuild;
                var0 = arg0;
                var3 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun109709_ip = 77;
                    continue _fun109709
                }
            case 52:
                var2 = var4.can;
                var1 = _closure1_slot5;
                var1 = var1.MANAGE_GUILD;
                var0 = var2.bind(var4)(var1, var3);
            case 77:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_automod/PermissionUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun109710: for (var _fun109710_ip = 0;;) switch (_fun109710_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun109710_ip = 26;
                    continue _fun109710
                }
            case 12:
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 26:
                return var0;
        }
    };
    var2.canCurrentUserManageMessageFilters = var3;
    var3 = function arg0() {
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.canCurrentUserManageAutomod = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot6;
            var3 = _closure2_slot0;
            var2 = _closure1_slot2;
            var1 = _closure1_slot3;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanCurrentUserManageAutomod = var3;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun109715: for (var _fun109715_ip = 0;;) switch (_fun109715_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var3)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun109715_ip = 61;
                        continue _fun109715
                    }
                case 35:
                    var3 = var2.features;
                    var2 = var3.has;
                    var1 = _closure1_slot4;
                    var1 = var1.COMMUNITY;
                    var0 = var2.bind(var3)(var1);
                case 61:
                    if (var0) {
                        _fun109715_ip = 66;
                        continue _fun109715
                    }
                case 64:
                    var0 = false;
                case 66:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useIsUserProfileRuleEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3093, 660, 566, 2]);