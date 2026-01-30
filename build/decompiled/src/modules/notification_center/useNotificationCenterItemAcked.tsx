// modules/notification_center/useNotificationCenterItemAcked.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/useNotificationCenterItemAcked.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Environment: var1
        _fun103863: for (var _fun103863_ip = 0;;) switch (_fun103863_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var4 = undefined;
                var6 = var3.bind(var4)(var1);
                var3 = var6.useStateFromStores;
                var7 = _closure1_slot2;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.isLocalItemAcked;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var6)(var1, var0);
                var0 = var5.forceUnacked;
                var0 = !var0;
                if (!var0) {
                    _fun103863_ip = 117;
                    continue _fun103863
                }
            case 76:
                if (var1) {
                    _fun103863_ip = 114;
                    continue _fun103863
                }
            case 79:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.isRemoteAcked;
                var2 = arg1;
                var1 = var3.bind(var4)(var5, var2);
            case 114:
                var0 = var1;
            case 117:
                return var0;
        }
    };
    var2.useNotificationCenterItemAcked = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [13177, 566, 4186, 2]);