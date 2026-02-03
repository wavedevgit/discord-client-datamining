// design/components/AccessibilityView/AccessibilityView.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = var7.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun37488: for (var _fun37488_ip = 0;;) switch (_fun37488_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.accessibilityViewIsModal;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun37488_ip = 17;
                    continue _fun37488
                }
            case 15:
                var9 = false;
            case 17:
                var8 = var2.nativeID;
                var7 = var2.collapsable;
                var5 = var2.onAccessibilityEscape;
                var1 = {
                    'accessibilityViewIsModal': 0,
                    'nativeID': 0,
                    'collapsable': 0,
                    'onAccessibilityEscape': 0
                };
                var6 = null;
                var13 = var1;
                var12 = null;
                var0 = silentSetPrototypeOf(var13, var12);
                var13 = {};
                var12 = var2;
                var11 = var1;
                var4 = copyDataProperties(var13, var12, var11);
                if (!var9) {
                    _fun37488_ip = 79;
                    continue _fun37488
                }
            case 75:
                if (!(var6 != var5)) {
                    _fun37488_ip = 179;
                    continue _fun37488
                }
            case 79:
                var2 = _closure1_slot0;
                var10 = _closure1_slot1;
                var1 = 3;
                var1 = var10[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.accessibilityViewIsModal = var9;
                var1.nativeID = var8;
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var9 = arg1;
                var0.ref = var9;
                var0.nativeID = var8;
                var6 = var6 == var8;
                if (!var6) {
                    _fun37488_ip = 151;
                    continue _fun37488
                }
            case 148:
                var6 = var7;
            case 151:
                var0.collapsable = var6;
                var0.onAccessibilityEscape = var5;
                var13 = var0;
                var12 = var4;
                var4 = copyDataProperties(var13, var12);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 179:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = 'Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3 = var3.bind(var7)(var1);
    var1 = 4;
    var1 = var6[var1];
    var4 = var4.bind(var0)(var1);
    var1 = var4.createAnimatedComponent;
    var1 = var1.bind(var4)(var3);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/AccessibilityView/AccessibilityView.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.AccessibilityView = var3;
    var2.AccessibilityViewAnimated = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4067, 3720, 2]);