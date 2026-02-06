// modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx
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
    var0 = {};
    var5 = 'function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,keyboardTypeSharedValue,KeyboardTypes,insets,customKeyboardHeight}=this.__closure;const height=keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()?keyboardOpenedHeight.get():keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM?insets.get().bottom:customKeyboardHeight;return height;}';
    var0.code = var5;
    var _closure1_slot3 = var0;
    var0 = 6;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var2 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 0;
        var1 = var10[var1];
        var9 = undefined;
        var1 = var2.bind(var9)(var1);
        var6 = var1.bind(var9)();
        var _closure2_slot0 = var6;
        var1 = 1;
        var1 = var10[var1];
        var1 = var2.bind(var9)(var1);
        var1 = var1.bind(var9)();
        var13 = var1.keyboardOpenOrOpening;
        var _closure2_slot1 = var13;
        var11 = var1.keyboardOpenedHeight;
        var _closure2_slot2 = var11;
        var8 = _closure1_slot0;
        var1 = 2;
        var4 = var10[var1];
        var5 = var8.bind(var9)(var4);
        var4 = var5.useKeyboardTypeSharedValue;
        var7 = var4.bind(var5)();
        var _closure2_slot3 = var7;
        var1 = var10[var1];
        var4 = var8.bind(var9)(var1);
        var1 = var4.useKeyboardWillOpenSharedValue;
        var12 = var1.bind(var4)();
        var _closure2_slot4 = var12;
        var1 = 3;
        var1 = var10[var1];
        var1 = var2.bind(var9)(var1);
        var5 = var1.bind(var9)();
        var _closure2_slot5 = var5;
        var1 = 4;
        var1 = var10[var1];
        var2 = var8.bind(var9)(var1);
        var1 = var2.useDerivedValue;
        var0 = function() {
            _fun77011: for (var _fun77011_ip = 0;;) switch (_fun77011_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun77011_ip = 115;
                        continue _fun77011
                    }
                case 19:
                    var2 = _closure2_slot4;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun77011_ip = 115;
                        continue _fun77011
                    }
                case 35:
                    var2 = _closure2_slot3;
                    var0 = var2.get;
                    var2 = var0.bind(var2)();
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 5;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.KeyboardTypes;
                    var0 = var0.SYSTEM;
                    if (!(var2 !== var0)) {
                        _fun77011_ip = 95;
                        continue _fun77011
                    }
                case 89:
                    var0 = _closure2_slot5;
                    _fun77011_ip = 113;
                    continue _fun77011;
                case 95:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0 = var2.bottom;
                case 113:
                    _fun77011_ip = 128;
                    continue _fun77011;
                case 115:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var0 = var1.bind(var2)();
                case 128:
                    return var0;
            }
        };
        var4 = {};
        var4.keyboardOpenOrOpening = var13;
        var4.keyboardWillOpenSharedValue = var12;
        var4.keyboardOpenedHeight = var11;
        var4.keyboardTypeSharedValue = var7;
        var7 = 5;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var7 = var7.KeyboardTypes;
        var4.KeyboardTypes = var7;
        var4.insets = var6;
        var4.customKeyboardHeight = var5;
        var0.__closure = var4;
        var4 = 8921359167404.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot3;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5305, 9831, 3916, 4899, 3722, 1567, 2]);