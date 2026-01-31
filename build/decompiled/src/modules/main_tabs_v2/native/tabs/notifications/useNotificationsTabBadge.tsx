// modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useNotificationsTabBadge, environment: var1
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var5 = var7.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.localItems;
            return var0;
        };
        var5 = var5.bind(var7)(var3, var2);
        var _closure2_slot0 = var5;
        var3 = _closure1_slot1;
        var2 = 3;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.useExperiment;
        var2 = {};
        var6 = 'Notifications Tab Badge';
        var2.location = var6;
        var2 = var3.bind(var4)(var2);
        var4 = var2.showInDMs;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun102927: for (var _fun102927_ip = 0;;) switch (_fun102927_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = _closure2_slot1;
                        var0 = !var0;
                        if (!var0) {
                            _fun102927_ip = 62;
                            continue _fun102927
                        }
                    case 16:
                        var4 = var1.type;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 4;
                        var5 = var5[var3];
                        var3 = undefined;
                        var3 = var6.bind(var3)(var5);
                        var3 = var3.NotificationCenterLocalItems;
                        var3 = var3.INCOMING_FRIEND_REQUESTS;
                        var0 = var4 === var3;
                    case 62:
                        if (var0) {
                            _fun102927_ip = 124;
                            continue _fun102927
                        }
                    case 65:
                        var2 = _closure2_slot1;
                        var2 = !var2;
                        if (!var2) {
                            _fun102927_ip = 121;
                            continue _fun102927
                        }
                    case 75:
                        var4 = var1.type;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 4;
                        var5 = var5[var3];
                        var3 = undefined;
                        var3 = var6.bind(var3)(var5);
                        var3 = var3.NotificationCenterLocalItems;
                        var3 = var3.INCOMING_GAME_FRIEND_REQUESTS;
                        var2 = var4 === var3;
                    case 121:
                        var0 = var2;
                    case 124:
                        if (var0) {
                            _fun102927_ip = 173;
                            continue _fun102927
                        }
                    case 127:
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 4;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.NotificationCenterLocalItems;
                        var1 = var1.MOBILE_NATIVE_UPDATE_AVAILABLE;
                        var0 = var2 === var1;
                    case 173:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3929, 566, 13113, 3930, 2]);