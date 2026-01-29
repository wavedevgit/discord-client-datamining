// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function(arg0, arg1) { // Original name: legacySendAccessibilityEvent, environment: var0
        _fun3372: for (var _fun3372_ip = 0;;) switch (_fun3372_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = 'focus';
                if (!(var0 === var1)) {
                    _fun3372_ip = 98;
                    continue _fun3372
                }
            case 14:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 0;
                var0 = var6[var0];
                var4 = undefined;
                var7 = var5.bind(var4)(var0);
                var0 = 1;
                var2 = var6[var0];
                var2 = var5.bind(var4)(var2);
                var2 = var2.sendAccessibilityEvent;
                var2 = var7.bind(var4)(var2);
                var0 = var6[var0];
                var5 = var5.bind(var4)(var0);
                var0 = var5.getConstants;
                var0 = var0.bind(var5)();
                var0 = var0.AccessibilityEventTypes;
                var0 = var0.typeViewFocused;
                var0 = var2.bind(var4)(var3, var0);
            case 98:
                var0 = 'click';
                if (!(var0 === var1)) {
                    _fun3372_ip = 190;
                    continue _fun3372
                }
            case 106:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var0 = var5[var0];
                var2 = undefined;
                var6 = var4.bind(var2)(var0);
                var0 = 1;
                var1 = var5[var0];
                var1 = var4.bind(var2)(var1);
                var1 = var1.sendAccessibilityEvent;
                var1 = var6.bind(var2)(var1);
                var0 = var5[var0];
                var4 = var4.bind(var2)(var0);
                var0 = var4.getConstants;
                var0 = var0.bind(var4)();
                var0 = var0.AccessibilityEventTypes;
                var0 = var0.typeViewClicked;
                var0 = var1.bind(var2)(var3, var0);
            case 190:
                var0 = undefined;
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [48, 46]);