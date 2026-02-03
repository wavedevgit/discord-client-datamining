// design/components/Input/native/useInputClearButton.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0, arg1() {
        _fun48085: for (var _fun48085_ip = 0;;) switch (_fun48085_ip) {
            case 0:
                var2 = arg1;
                var0 = arg0;
                var0 = var0.isClearable;
                if (!var0) {
                    _fun48085_ip = 24;
                    continue _fun48085
                }
            case 15:
                var0 = var2.hasValue;
                if (var0) {
                    _fun48085_ip = 28;
                    continue _fun48085
                }
            case 24:
                var0 = undefined;
                return var0;
            case 28:
                var0 = {};
                var5 = _closure1_slot3;
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var6 = undefined;
                var1 = var7.bind(var6)(var1);
                var4 = var1.CircleXIcon;
                var1 = {};
                var8 = 'xs';
                var1.size = var8;
                var1 = var5.bind(var6)(var4, var1);
                var0.content = var1;
                var1 = {};
                var2 = var2.clear;
                var1.onPress = var2;
                var2 = 4;
                var4 = var3[var2];
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var3[var2];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.VkKicb;
                var3 = var4.bind(var5)(var3);
                var1.accessibilityLabel = var3;
                var3 = 'button';
                var1.accessibilityRole = var3;
                var1.hitSlop = var2;
                var0.pressableProps = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Pressable;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Input/native/useInputClearButton.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1() {
        _fun48086: for (var _fun48086_ip = 0;;) switch (_fun48086_ip) {
            case 0:
                var3 = _closure1_slot4;
                var4 = undefined;
                var2 = arg0;
                var0 = arg1;
                var5 = var3.bind(var4)(var2, var0);
                var0 = null;
                var2 = var0 != var5;
                if (!var2) {
                    _fun48086_ip = 73;
                    continue _fun48086
                }
            case 30:
                var3 = _closure1_slot3;
                var2 = _closure1_slot2;
                var1 = {};
                var7 = var5.pressableProps;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var6 = var5.content;
                var5 = 'children';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 73:
                return var0;
        }
    };
    var2.useInputClearButton = var3;
    var2.useInputClearButtonConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5368, 1234, 2]);