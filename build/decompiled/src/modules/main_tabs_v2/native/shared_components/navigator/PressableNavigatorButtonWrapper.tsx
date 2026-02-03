// modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.MIN_HEADER_HEIGHT;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot1 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexShrink': 0,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var10 = 4;
    var11 = var5[var10];
    var10 = metroImportDefault;
    var10 = var10.bind(var0)(var11);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.padding = var10;
    var8.height = var9;
    var8.width = var9;
    var3.buttonWrapper = var8;
    var8 = {};
    var9 = -8;
    var8.marginLeft = var9;
    var3.buttonWrapperModal = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun71061: for (var _fun71061_ip = 0;;) switch (_fun71061_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.children;
                var5 = var0.isModal;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun71061_ip = 22;
                    continue _fun71061
                }
            case 20:
                var5 = false;
            case 22:
                var1 = _closure1_slot2;
                var6 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var1 = _closure1_slot0;
                var0 = {};
                var7 = false;
                var0.collapsable = var7;
                if (var5) {
                    _fun71061_ip = 61;
                    continue _fun71061
                }
            case 53:
                var5 = var6.buttonWrapper;
                _fun71061_ip = 67;
                continue _fun71061;
            case 61:
                var5 = var6.buttonWrapperModal;
            case 67:
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 8883, 33, 1297, 671, 2]);