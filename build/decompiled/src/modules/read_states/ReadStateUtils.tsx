// modules/read_states/ReadStateUtils.tsx
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
    var3 = var3.UnreadSetting;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/read_states/ReadStateUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun55711: for (var _fun55711_ip = 0;;) switch (_fun55711_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot2;
                var2 = var3.hasUnread;
                var0 = var4.id;
                var0 = var2.bind(var3)(var0);
                if (!var0) {
                    _fun55711_ip = 58;
                    continue _fun55711
                }
            case 29:
                var3 = _closure1_slot3;
                var2 = var3.resolveUnreadSetting;
                var2 = var2.bind(var3)(var4);
                var1 = _closure1_slot4;
                var1 = var1.ALL_MESSAGES;
                var0 = var2 === var1;
            case 58:
                return var0;
        }
    };
    var2.getHasImportantUnread = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot2;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot3;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun55713: for (var _fun55713_ip = 0;;) switch (_fun55713_ip) {
                case 0:
                    var4 = _closure1_slot2;
                    var3 = var4.hasUnread;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var3.bind(var4)(var0);
                    if (!var0) {
                        _fun55713_ip = 66;
                        continue _fun55713
                    }
                case 33:
                    var4 = _closure1_slot3;
                    var3 = var4.resolveUnreadSetting;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot4;
                    var1 = var1.ALL_MESSAGES;
                    var0 = var2 === var1;
                case 66:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useHasImportantUnread = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3948, 4303, 4304, 566, 2]);