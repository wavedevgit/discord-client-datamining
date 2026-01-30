// modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useUnreadSettingNotice, environment: var1
        var2 = arg0;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var3 = 3;
        var3 = var10[var3];
        var9 = undefined;
        var5 = var6.bind(var9)(var3);
        var4 = var5.useShouldUseNewNotificationSystem;
        var3 = 'useShouldRenderBanner';
        var7 = var4.bind(var5)(var3);
        var _closure2_slot1 = var7;
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = '';
        var8 = var4.bind(var5)(var3);
        var4 = _closure1_slot3;
        var3 = 2;
        var8 = var4.bind(var9)(var8, var3);
        var3 = 0;
        var3 = var8[var3];
        var _closure2_slot2 = var3;
        var4 = 1;
        var4 = var8[var4];
        var _closure2_slot3 = var4;
        var11 = var5.useEffect;
        var4 = var2.id;
        var8 = new Array(1);
        var8[0] = var4;
        var4 = function() { // Environment: var0
            var2 = _closure2_slot3;
            var0 = undefined;
            var1 = '';
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4 = var11.bind(var5)(var4, var8);
        var4 = 4;
        var4 = var10[var4];
        var8 = var6.bind(var9)(var4);
        var6 = var8.useStateFromStores;
        var4 = _closure1_slot1;
        var1 = 5;
        var1 = var10[var1];
        var1 = var4.bind(var9)(var1);
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getLastActionTime;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var6.bind(var8)(var4, var1);
        var6 = var5.useEffect;
        var4 = new Array(4);
        var4[0] = var3;
        var4[1] = var7;
        var4[2] = var1;
        var4[3] = var2;
        var1 = function() { // Environment: var0
            _fun89770: for (var _fun89770_ip = 0;;) switch (_fun89770_ip) {
                case 0:
                    var4 = _closure1_slot5;
                    var3 = var4.has;
                    var1 = _closure2_slot0;
                    var1 = var1.type;
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun89770_ip = 49;
                        continue _fun89770
                    }
                case 32:
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var1 = var4 !== var3;
                case 49:
                    if (!var1) {
                        _fun89770_ip = 56;
                        continue _fun89770
                    }
                case 52:
                    var1 = _closure2_slot1;
                case 56:
                    if (!var1) {
                        _fun89770_ip = 103;
                        continue _fun89770
                    }
                case 59:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.maybeAutoUpgradeChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
                case 103:
                    if (!var1) {
                        _fun89770_ip = 126;
                        continue _fun89770
                    }
                case 106:
                    var2 = _closure2_slot3;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 126:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var6.bind(var5)(var1, var4);
        var4 = var5.useCallback;
        var1 = function() { // Environment: var0
            var2 = _closure2_slot3;
            var1 = undefined;
            var0 = '';
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0 = new Array(0);
        var1 = var4.bind(var5)(var1, var0);
        var0 = {};
        var2 = var2.id;
        var2 = var3 === var2;
        var0.showUnreadsNotice = var2;
        var0.clearUnreadsNotice = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1376, 8707, 566, 11606, 2]);