// ../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.AccessibilityInfo;
    var _closure1_slot2 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        _fun27243: for (var _fun27243_ip = 0;;) switch (_fun27243_ip) {
            case 0:
                var2 = arg0;
                var1 = 'polite';
                var0 = arg1;
                if (!(var1 !== var0)) {
                    _fun27243_ip = 36;
                    continue _fun27243
                }
            case 16:
                var1 = _closure1_slot2;
                var0 = var1.announceForAccessibility;
                var0 = var0.bind(var1)(var2);
                _fun27243_ip = 72;
                continue _fun27243;
            case 36:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.updateAccessibilityAnnouncerLiveRegionMessage;
                var0 = var0.bind(var1)(var2);
            case 72:
                var0 = undefined;
                return var0;
        }
    };
    var1.announce = var6;
    var3 = function() {
        var0 = null;
        return var0;
    };
    var1.clearAnnouncements = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AccessibilityAnnouncer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3120, 2]);