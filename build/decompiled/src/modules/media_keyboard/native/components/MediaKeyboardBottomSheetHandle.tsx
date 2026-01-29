// modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot2 = var7;
    var10 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.HEADER_HANDLE_HEIGHT;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var12 = 'transparent';
    var10 = 'backgroundColor';
    var9[var10] = var12;
    var10 = 'height';
    var9[var10] = var11;
    var11 = 'center';
    var10 = 'alignItems';
    var9[var10] = var11;
    var10 = 'bottom';
    var9[var10] = var0;
    var3.headerHandleWrap = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: MediaKeyboardBottomSheetHandle, environment: var1
        _fun75474: for (var _fun75474_ip = 0;;) switch (_fun75474_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.animatedIndex;
                var9 = var0.onPress;
                var0 = _closure1_slot4;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 5;
                var0 = var8[var0];
                var1 = var5.bind(var3)(var0);
                var0 = var1.useGradientBottom;
                var10 = var0.bind(var1)();
                var0 = 6;
                var0 = var8[var0];
                var2 = var5.bind(var3)(var0);
                var1 = var2.useDerivedStateFromSharedValue;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var6 = var1.bind(var2)(var6, var0);
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var11 = var4.headerHandleWrap;
                var4 = new Array(2);
                var4[0] = var11;
                var4[1] = var10;
                var0.style = var4;
                var4 = 7;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ActionSheetDragHandle;
                var4 = {};
                var4.onPress = var9;
                var8 = null;
                var8 = var8 == var9;
                var4['aria-hidden'] = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var7 = 8;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                if (var6) {
                    _fun75474_ip = 219;
                    continue _fun75474
                }
            case 204:
                var6 = var7.dcl9MQ;
                var6 = var8.bind(var9)(var6);
                _fun75474_ip = 232;
                continue _fun75474;
            case 219:
                var7 = var7.iTcuma;
                var6 = var8.bind(var9)(var7);
            case 232:
                var4.accessibilityLabel = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1566, 33, 1297, 8853, 8149, 6985, 1234, 2]);