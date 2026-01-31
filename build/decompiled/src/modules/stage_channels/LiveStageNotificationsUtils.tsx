// modules/stage_channels/LiveStageNotificationsUtils.tsx
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
    var3 = var3.Permissions;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/LiveStageNotificationsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useCanSendStageStartNotification, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun67070: for (var _fun67070_ip = 0;;) switch (_fun67070_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun67070_ip = 49;
                        continue _fun67070
                    }
                case 16:
                    var4 = _closure1_slot3;
                    var3 = var4.can;
                    var2 = _closure1_slot4;
                    var2 = var2.MENTION_EVERYONE;
                    var1 = _closure2_slot0;
                    var0 = var3.bind(var4)(var2, var1);
                case 49:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanSendStageStartNotification = var3;
    var1 = function(arg0) { // Original name: useDefaultSendStartStageNotificationToggle, environment: var1
        _fun67071: for (var _fun67071_ip = 0;;) switch (_fun67071_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var3 = var1 == var0;
                var6 = undefined;
                var7 = undefined;
                if (var3) {
                    _fun67071_ip = 23;
                    continue _fun67071
                }
            case 18:
                var7 = var0.guild_id;
            case 23:
                var _closure2_slot0 = var7;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 3;
                var4 = var8[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.useStateFromStores;
                var3 = _closure1_slot2;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = new Array(1);
                var3[0] = var7;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot2;
                    var1 = var2.getMemberCount;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var5.bind(var6)(var4, var2, var3);
                var0 = var1 == var0;
                if (var0) {
                    _fun67071_ip = 116;
                    continue _fun67071
                }
            case 96:
                var1 = var1 == var3;
                if (var1) {
                    _fun67071_ip = 113;
                    continue _fun67071
                }
            case 103:
                var2 = 50000;
                var1 = var3 > var2;
            case 113:
                var0 = !var1;
            case 116:
                return var0;
        }
    };
    var2.useDefaultSendStartStageNotificationToggle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1599, 3050, 483, 566, 2]);