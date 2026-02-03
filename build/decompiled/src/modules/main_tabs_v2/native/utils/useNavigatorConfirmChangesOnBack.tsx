// modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Keyboard;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot2;
        var1 = var4.useRef;
        var0 = null;
        var1 = var1.bind(var4)(var0);
        var _closure2_slot0 = var1;
        var3 = var4.useRef;
        var0 = false;
        var0 = var3.bind(var4)(var0);
        var _closure2_slot1 = var0;
        var0 = {};
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 3;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var5 = function arg0() {
            _fun72766: for (var _fun72766_ip = 0;;) switch (_fun72766_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = var1.preventable;
                    if (!var0) {
                        _fun72766_ip = 159;
                        continue _fun72766
                    }
                case 21:
                    var0 = _closure2_slot1;
                    var0 = var0.current;
                    if (var0) {
                        _fun72766_ip = 72;
                        continue _fun72766
                    }
                case 36:
                    var2 = _closure2_slot0;
                    var5 = var2.current;
                    var2 = null;
                    var2 = var2 == var5;
                    var4 = undefined;
                    if (var2) {
                        _fun72766_ip = 66;
                        continue _fun72766
                    }
                case 56:
                    var2 = var5.hasUnsavedChanges;
                    var4 = var2.bind(var5)();
                case 66:
                    var2 = true;
                    var0 = var2 !== var4;
                case 72:
                    if (var0) {
                        _fun72766_ip = 159;
                        continue _fun72766
                    }
                case 75:
                    var0 = var1.preventDefault;
                    var0 = var0.bind(var1)();
                    var1 = _closure1_slot3;
                    var0 = var1.dismiss;
                    var0 = var0.bind(var1)();
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 4;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = true;
                    var0.hasEdits = var5;
                    var4 = _closure1_slot4;
                    var0.resetPending = var4;
                    var3 = function() {
                        var1 = _closure2_slot1;
                        var0 = true;
                        var1.current = var0;
                        var1 = _closure3_slot0;
                        var0 = var1.goBack;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.onConfirm = var3;
                    var0 = var1.bind(var2)(var0);
                case 159:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.onBeforeGoBack = var5;
        var2 = var3.bind(var4)(var2);
        var2 = var2.onGoBack;
        var0.onGoBack = var2;
        var0.ref = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 9098, 9099, 2]);