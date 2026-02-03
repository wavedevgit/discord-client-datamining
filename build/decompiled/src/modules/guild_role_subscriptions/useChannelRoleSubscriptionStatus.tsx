// modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0() {
        _fun44135: for (var _fun44135_ip = 0;;) switch (_fun44135_ip) {
            case 0:
                var2 = arguments[1];
                var3 = arguments[2];
                var6 = arguments[3];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun44135_ip = 22;
                    continue _fun44135
                }
            case 15:
                var2 = _closure1_slot3;
            case 22:
                if (!(var3 === var0)) {
                    _fun44135_ip = 33;
                    continue _fun44135
                }
            case 26:
                var3 = _closure1_slot2;
            case 33:
                if (!(var6 === var0)) {
                    _fun44135_ip = 44;
                    continue _fun44135
                }
            case 37:
                var6 = _closure1_slot4;
            case 44:
                var1 = var2.getChannel;
                var0 = arg0;
                var5 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun44135_ip = 76;
                    continue _fun44135
                }
            case 63:
                var1 = var5.isRoleSubscriptionTemplatePreviewChannel;
                var1 = var1.bind(var5)();
                if (var1) {
                    _fun44135_ip = 191;
                    continue _fun44135
                }
            case 76:
                if (!(var0 != var5)) {
                    _fun44135_ip = 105;
                    continue _fun44135
                }
            case 80:
                var2 = var3.isChannelGated;
                var1 = var5.guild_id;
                var0 = var5.id;
                var0 = var2.bind(var3)(var1, var0);
                if (var0) {
                    _fun44135_ip = 114;
                    continue _fun44135
                }
            case 105:
                var0 = _closure1_slot6;
                _fun44135_ip = 189;
                continue _fun44135;
            case 114:
                var1 = {};
                var2 = true;
                var1.isSubscriptionGated = var2;
                var2 = var5.isGuildVocal;
                var2 = var2.bind(var5)();
                var4 = var6.can;
                var3 = _closure1_slot5;
                if (var2) {
                    _fun44135_ip = 166;
                    continue _fun44135
                }
            case 149:
                var2 = var3.VIEW_CHANNEL;
                var2 = var4.bind(var6)(var2, var5);
                var2 = !var2;
                _fun44135_ip = 181;
                continue _fun44135;
            case 166:
                var3 = var3.CONNECT;
                var3 = var4.bind(var6)(var3, var5);
                var2 = !var3;
            case 181:
                var1.needSubscriptionToAccess = var2;
                var0 = var1;
            case 189:
                _fun44135_ip = 205;
                continue _fun44135;
            case 191:
                var0 = {
                    'isSubscriptionGated': true,
                    'needSubscriptionToAccess': true
                };
            case 205:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = {
        'needSubscriptionToAccess': false,
        'isSubscriptionGated': false
    };
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot3;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot2;
        var2[1] = var6;
        var1 = _closure1_slot4;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var5 = _closure1_slot7;
            var9 = _closure2_slot0;
            var8 = _closure1_slot3;
            var7 = _closure1_slot2;
            var6 = _closure1_slot4;
            var10 = undefined;
            var0 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.getChannelRoleSubscriptionStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1663, 1372, 3082, 660, 566, 2]);