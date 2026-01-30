// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var4 = var3.useCallback;
    var _closure1_slot2 = var4;
    var3 = var3.useRef;
    var _closure1_slot3 = var3;
    var1 = function() { // Original name: useScrollable, environment: var1
        var3 = _closure1_slot3;
        var9 = undefined;
        var2 = null;
        var7 = var3.bind(var9)(var2);
        var _closure2_slot0 = var7;
        var2 = var3.bind(var9)(var2);
        var _closure2_slot1 = var2;
        var3 = _closure1_slot0;
        var8 = _closure1_slot1;
        var2 = 1;
        var4 = var8[var2];
        var10 = var3.bind(var9)(var4);
        var6 = var10.useSharedValue;
        var4 = 2;
        var5 = var8[var4];
        var5 = var3.bind(var9)(var5);
        var5 = var5.SCROLLABLE_TYPE;
        var5 = var5.UNDETERMINED;
        var6 = var6.bind(var10)(var5);
        var5 = var8[var2];
        var11 = var3.bind(var9)(var5);
        var10 = var11.useSharedValue;
        var5 = 0;
        var5 = var10.bind(var11)(var5);
        var10 = var8[var2];
        var11 = var3.bind(var9)(var10);
        var10 = var11.useSharedValue;
        var4 = var8[var4];
        var4 = var3.bind(var9)(var4);
        var4 = var4.SCROLLABLE_STATE;
        var4 = var4.UNDETERMINED;
        var4 = var10.bind(var11)(var4);
        var2 = var8[var2];
        var8 = var3.bind(var9)(var2);
        var3 = var8.useSharedValue;
        var2 = false;
        var3 = var3.bind(var8)(var2);
        var8 = _closure1_slot2;
        var2 = function(arg0) { // Environment: var0
            _fun44588: for (var _fun44588_ip = 0;;) switch (_fun44588_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure2_slot0;
                    var5 = var0.current;
                    var4 = null;
                    var6 = var4 == var5;
                    var0 = undefined;
                    var3 = undefined;
                    if (var6) {
                        _fun44588_ip = 33;
                        continue _fun44588
                    }
                case 28:
                    var3 = var5.id;
                case 33:
                    var5 = var4 != var3;
                    var4 = null;
                    if (!var5) {
                        _fun44588_ip = 45;
                        continue _fun44588
                    }
                case 42:
                    var4 = var3;
                case 45:
                    var3 = var2.id;
                    if (!(var4 !== var3)) {
                        _fun44588_ip = 95;
                        continue _fun44588
                    }
                case 54:
                    var3 = _closure2_slot0;
                    var3 = var3.current;
                    if (!var3) {
                        _fun44588_ip = 85;
                        continue _fun44588
                    }
                case 66:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var3 = var3.current;
                    var4.current = var3;
                case 85:
                    var1 = _closure2_slot0;
                    var1.current = var2;
                case 95:
                    return var0;
            }
        };
        var1 = new Array(0);
        var2 = var8.bind(var9)(var2, var1);
        var1 = function(arg0) { // Environment: var0
            _fun44589: for (var _fun44589_ip = 0;;) switch (_fun44589_ip) {
                case 0:
                    var2 = arg0;
                    var0 = undefined;
                    var4 = undefined;
                    var6 = undefined;
                    var1 = undefined;
                case 11: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = var5.bind(var0)(var3);
                    var3 = var5.findNodeHandle;
                    var2 = var2.current;
                    var1 = var3.bind(var5)(var2);
                case 50: // try_end0
                    var3 = var1;
                    var2 = _closure2_slot0;
                    var5 = var2.current;
                    var6 = var5;
                    var2 = null;
                    var7 = var2 == var5;
                    var5 = undefined;
                    if (var7) {
                        _fun44589_ip = 84;
                        continue _fun44589
                    }
                case 79:
                    var5 = var6.id;
                case 84:
                    var4 = var5;
                    var5 = var2 != var5;
                    var2 = null;
                    if (!var5) {
                        _fun44589_ip = 99;
                        continue _fun44589
                    }
                case 96:
                    var2 = var4;
                case 99:
                    if (!(var3 === var2)) {
                        _fun44589_ip = 122;
                        continue _fun44589
                    }
                case 103:
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    var2.current = var1;
                case 122:
                    return var0;
                case 124: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    return var0;
            }
        };
        var0 = new Array(0);
        var1 = var8.bind(var9)(var1, var0);
        var0 = {};
        var0.scrollableRef = var7;
        var0.animatedScrollableType = var6;
        var0.animatedScrollableContentOffsetY = var5;
        var0.animatedScrollableOverrideState = var4;
        var0.isScrollableRefreshable = var3;
        var0.setScrollableRef = var2;
        var0.removeScrollableRef = var1;
        return var0;
    };
    var2.useScrollable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3680, 4896, 4912]);