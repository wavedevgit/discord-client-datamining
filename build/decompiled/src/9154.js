// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot1 = var3;
    var1 = function arg0() {
        _fun72989: for (var _fun72989_ip = 0;;) switch (_fun72989_ip) {
            case 0:
                var3 = _closure1_slot1;
                var1 = var3.useState;
                var6 = null;
                var5 = var1.bind(var3)(var6);
                var4 = _closure1_slot0;
                var3 = undefined;
                var1 = 2;
                var5 = var4.bind(var3)(var5, var1);
                var1 = 0;
                var4 = var5[var1];
                var _closure2_slot0 = var4;
                var1 = 1;
                var1 = var5[var1];
                var5 = null;
                if (!var4) {
                    _fun72989_ip = 101;
                    continue _fun72989
                }
            case 58:
                var4 = arg0;
                var8 = var4.routes;
                var7 = var8.find;
                var4 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.key;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var7.bind(var8)(var4);
                var6 = var6 == var4;
                var3 = undefined;
                if (var6) {
                    _fun72989_ip = 98;
                    continue _fun72989
                }
            case 93:
                var3 = var4.name;
            case 98:
                var5 = var3;
            case 101:
                var _closure2_slot1 = var5;
                var4 = _closure1_slot1;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var0 = function() { // Environment: var0
                    _fun72991: for (var _fun72991_ip = 0;;) switch (_fun72991_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun72991_ip = 61;
                                continue _fun72991
                            }
                        case 10:
                            var4 = _closure2_slot1;
                            var0 = global;
                            var1 = var0.HermesInternal;
                            var3 = var1.concat;
                            var2 = "The screen '";
                            var1 = "' was removed natively but didn't get removed from JS state. This can happen if the action was prevented in a 'beforeRemove' listener, which is not fully supported in native-stack.\n\nConsider using a 'usePreventRemove' hook with 'headerBackButtonMenuEnabled: false' to prevent users from natively going back multiple screens.";
                            var2 = var3.bind(var2)(var4, var1);
                            var1 = var0.console;
                            var0 = var1.error;
                            var0 = var0.bind(var1)(var2);
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0, var2);
                var0 = {};
                var0.setNextDismissedKey = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31]);