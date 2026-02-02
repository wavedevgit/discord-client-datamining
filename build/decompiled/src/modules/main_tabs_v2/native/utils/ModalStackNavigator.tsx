// modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.createNativeStackNavigator;
    var3 = var3.bind(var7)();
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var8 = var0.screenKey;
        var1 = var0.title;
        var _closure2_slot0 = var1;
        var1 = var0.titleIcon;
        var _closure2_slot1 = var1;
        var7 = var0.render;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 3;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.useAccessibilityNativeStackOptions;
        var1 = var1.bind(var2)();
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var4 = _closure1_slot4;
        var1 = var4.Navigator;
        var0 = {};
        var0.initialRouteName = var8;
        var5 = function arg0() {
            var0 = arg0;
            var6 = var0.navigation;
            var0 = {};
            var1 = function arg0() {
                var2 = arg0;
                var5 = var2.children;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.children = var0;
                var8 = {};
                var7 = var2;
                var6 = var1;
                var7 = copyDataProperties(var8, var7, var6);
                var3 = _closure1_slot3;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.GenericHeaderTitle;
                var0 = {};
                var0.title = var5;
                var5 = _closure2_slot1;
                var0.icon = var5;
                var8 = var0;
                var4 = copyDataProperties(var8, var7);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var0.headerTitle = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var3 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var3);
            var3 = var5.getRenderModalCloseImage;
            var3 = var3.bind(var5)(var6);
            var0.headerLeft = var3;
            var3 = 'center';
            var0.headerTitleAlign = var3;
            var7 = _closure2_slot2;
            var8 = var0;
            var3 = copyDataProperties(var8, var7);
            var3 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var1 = var3.bind(var2)(var1);
            var7 = var1.bind(var2)();
            var8 = var0;
            var1 = copyDataProperties(var8, var7);
            return var0;
        };
        var0.screenOptions = var5;
        var5 = var4.Screen;
        var4 = {};
        var4.name = var8;
        var4.children = var7;
        var6 = function() {
            _fun72675: for (var _fun72675_ip = 0;;) switch (_fun72675_ip) {
                case 0:
                    var0 = {};
                    var1 = _closure2_slot0;
                    var0.title = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if (!var2) {
                        _fun72675_ip = 57;
                        continue _fun72675
                    }
                case 51:
                    var1 = 'portrait';
                case 57:
                    var0.orientation = var1;
                    return var0;
            }
        };
        var4.options = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 9069, 5750, 8850, 9078, 478, 2]);