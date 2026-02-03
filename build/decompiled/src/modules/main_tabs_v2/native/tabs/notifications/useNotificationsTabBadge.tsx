// modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot3;
            var0 = var0.localItems;
            return var0;
        };
        var4 = var4.bind(var5)(var3, var2);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun102919: for (var _fun102919_ip = 0;;) switch (_fun102919_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = var2.type;
                        var6 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var5 = 3;
                        var0 = var0[var5];
                        var4 = undefined;
                        var0 = var6.bind(var4)(var0);
                        var0 = var0.NotificationCenterLocalItems;
                        var0 = var0.INCOMING_FRIEND_REQUESTS;
                        var0 = var3 === var0;
                        if (var0) {
                            _fun102919_ip = 90;
                            continue _fun102919
                        }
                    case 52:
                        var6 = var2.type;
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var3 = var3[var5];
                        var3 = var7.bind(var4)(var3);
                        var3 = var3.NotificationCenterLocalItems;
                        var3 = var3.INCOMING_GAME_FRIEND_REQUESTS;
                        var0 = var6 === var3;
                    case 90:
                        if (var0) {
                            _fun102919_ip = 131;
                            continue _fun102919
                        }
                    case 93:
                        var2 = var2.type;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var5];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.NotificationCenterLocalItems;
                        var1 = var1.MOBILE_NATIVE_UPDATE_AVAILABLE;
                        var0 = var2 === var1;
                    case 131:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = var0.length;
            return var0;
        };
        var2 = var2.bind(var3)(var0, var1);
        var0 = {};
        var0.value = var2;
        var1 = 0;
        var1 = var2 > var1;
        var0.showDot = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3970, 566, 3971, 2]);