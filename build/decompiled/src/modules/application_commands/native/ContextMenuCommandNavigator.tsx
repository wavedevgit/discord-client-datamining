// modules/application_commands/native/ContextMenuCommandNavigator.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.createNativeStackNavigator;
    var3 = var3.bind(var6)();
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var10 = var5[var9];
    var9 = metroImportDefault;
    var9 = var9.bind(var0)(var10);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.content = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ContextMenuCommandNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot6;
        var3 = undefined;
        var0 = var0.bind(var3)();
        var _closure2_slot0 = var0;
        var5 = _closure1_slot2;
        var2 = var5.useLayoutEffect;
        var1 = function() { // Environment: var8
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.trackAppUIViewed;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var5)(var1, var0);
        var13 = _closure1_slot0;
        var14 = _closure1_slot1;
        var0 = 6;
        var0 = var14[var0];
        var1 = var13.bind(var3)(var0);
        var0 = var1.useAccessibilityNativeStackOptions;
        var0 = var0.bind(var1)();
        var _closure2_slot1 = var0;
        var2 = _closure1_slot4;
        var5 = _closure1_slot5;
        var1 = var5.Navigator;
        var0 = {};
        var6 = function arg0() {
            _fun109359: for (var _fun109359_ip = 0;;) switch (_fun109359_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.navigation;
                    var2 = var0.route;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var3 = var3.content;
                    var0.contentStyle = var3;
                    var3 = false;
                    var0.headerShadowVisible = var3;
                    var3 = function arg0() {
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
                        var2 = _closure1_slot1;
                        var0 = 7;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.GenericHeaderTitle;
                        var0 = {};
                        var0.title = var5;
                        var8 = var0;
                        var4 = copyDataProperties(var8, var7);
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerTitle = var3;
                    var3 = 'center';
                    var0.headerTitleAlign = var3;
                    var3 = var5.getState;
                    var3 = var3.bind(var5)();
                    var4 = var3.routes;
                    var3 = 0;
                    var3 = var4[var3];
                    var3 = var3.key;
                    var2 = var2.key;
                    if (!(var3 !== var2)) {
                        _fun109359_ip = 138;
                        continue _fun109359
                    }
                case 100:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getRenderModalBackImage;
                    var2 = var2.bind(var3)(var5);
                    _fun109359_ip = 174;
                    continue _fun109359;
                case 138:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.getRenderModalCloseImage;
                    var2 = var3.bind(var4)(var5);
                case 174:
                    var0.headerLeft = var2;
                    var7 = _closure2_slot1;
                    var8 = var0;
                    var1 = copyDataProperties(var8, var7);
                    return var0;
            }
        };
        var0.screenOptions = var6;
        var7 = _closure1_slot3;
        var6 = var5.Screen;
        var4 = {};
        var9 = 'root';
        var4.name = var9;
        var9 = {};
        var10 = 8;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.PHjkRE;
        var10 = var11.bind(var12)(var10);
        var9.title = var10;
        var4.options = var9;
        var9 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var4.getComponent = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = var5.Screen;
        var5 = {};
        var9 = 'app';
        var5.name = var9;
        var9 = function arg0() {
            _fun109362: for (var _fun109362_ip = 0;;) switch (_fun109362_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.route;
                    var0 = {};
                    var1 = var1.params;
                    var2 = var1.section;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun109362_ip = 38;
                        continue _fun109362
                    }
                case 33:
                    var1 = var2.name;
                case 38:
                    var0.title = var1;
                    return var0;
            }
        };
        var5.options = var9;
        var8 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.default;
            return var0;
        };
        var5.getComponent = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 9101, 1297, 671, 4360, 5781, 8882, 1234, 14068, 14069, 2]);