// modules/video_calls/native/useActionBarHeight.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var7;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.InputModes;
    var _closure1_slot4 = var1;
    var3 = 2;
    var1 = var7[var3];
    var1 = var6.bind(var0)(var1);
    var1 = var1.ACTION_SHEET_HANDLE_SPACING;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.SMALL_ACTION_BUTTON_DIMENSIONS;
    var1 = var1.buttonRadius;
    var1 = var3 * var1;
    var3 = 16;
    var1 = var1 + var3;
    var1 = var1 + var3;
    var _closure1_slot6 = var1;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/useActionBarHeight.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun62860: for (var _fun62860_ip = 0;;) switch (_fun62860_ip) {
            case 0:
                var2 = arg0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var1 = var6[var1];
                var4 = undefined;
                var3 = var5.bind(var4)(var1);
                var1 = var3.useIsFiveButtonLayout;
                var3 = var1.bind(var3)(var2);
                var7 = _closure1_slot1;
                var1 = 5;
                var1 = var6[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.bind(var4)(var2);
                var1 = 6;
                var1 = var6[var1];
                var6 = var5.bind(var4)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.getMode;
                    var1 = var1.bind(var2)();
                    var0 = _closure1_slot4;
                    var0 = var0.PUSH_TO_TALK;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var5.bind(var6)(var4, var1);
                var1 = 88;
                if (!var3) {
                    _fun62860_ip = 112;
                    continue _fun62860
                }
            case 108:
                var1 = _closure1_slot6;
            case 112:
                var0 = _closure1_slot5;
                var1 = var1 + var0;
                var0 = 0;
                if (!var4) {
                    _fun62860_ip = 133;
                    continue _fun62860
                }
            case 125:
                var0 = 0;
                if (!var2) {
                    _fun62860_ip = 133;
                    continue _fun62860
                }
            case 130:
                var0 = 56;
            case 133:
                var0 = var1 + var0;
                return var0;
        }
    };
    var2.default = var4;
    var4 = 88;
    var2.CALL_ACTION_BAR_HEIGHT = var4;
    var2.FIVE_BUTTON_CONTAINER_PADDING_TOP = var3;
    var2.FIVE_BUTTON_CONTAINER_PADDING_BOTTOM = var3;
    var2.FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3437, 660, 4897, 7869, 7872, 7954, 566, 2]);