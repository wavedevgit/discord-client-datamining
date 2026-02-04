// modules/mobile_web_handoff/native/SimpleLoadingModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mobile_web_handoff/native/SimpleLoadingModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var6 = arg0;
        var7 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 0;
        var4 = var2[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var4 = var5.pushLazy;
        var8 = _closure1_slot0;
        var3 = 2;
        var3 = var2[var3];
        var8 = var8.bind(var0)(var3);
        var3 = 1;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var8.bind(var0)(var3, var2);
        var2 = {};
        var12 = var2;
        var11 = var7;
        var7 = copyDataProperties(var12, var11);
        var7 = function() {
            _fun50720: for (var _fun50720_ip = 0;;) switch (_fun50720_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.popWithKey;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot1;
                    var3 = var2.onDismissed;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun50720_ip = 72;
                        continue _fun50720
                    }
                case 58:
                    var2 = _closure2_slot1;
                    var1 = var2.onDismissed;
                    var1 = var1.bind(var2)();
                case 72:
                    return var0;
            }
        };
        var1 = 'onDismissed';
        var2[var1] = var7;
        var1 = {};
        var7 = 'none';
        var1.animation = var7;
        var13 = var5;
        var12 = var3;
        var11 = var2;
        var10 = var6;
        var9 = var1;
        var1 = var13[var4](var12, var11, var10, var9, var8);
        return var0;
    };
    var2.showSimpleLoadingModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4561, 5683, 1307, 2]);