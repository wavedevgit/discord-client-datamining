// modules/icymi/native/navigator/ICYMINavigator.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot2 = var6;
    var3 = var3.jsxs;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.createNativeStackNavigator;
    var3 = var3.bind(var6)();
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/navigator/ICYMINavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 2;
        var0 = var2[var0];
        var3 = undefined;
        var1 = var1.bind(var3)(var0);
        var0 = var1.useAccessibilityNativeStackOptions;
        var0 = var0.bind(var1)();
        var _closure2_slot0 = var0;
        var2 = _closure1_slot3;
        var5 = _closure1_slot4;
        var1 = var5.Navigator;
        var0 = {};
        var6 = function() {
            var0 = {
                'headerShown': false,
                'fullScreenGestureEnabled': true
            };
            var2 = _closure2_slot0;
            var3 = var0;
            var1 = copyDataProperties(var3, var2);
            return var0;
        };
        var0.screenOptions = var6;
        var9 = 'icymi-screen';
        var0.initialRouteName = var9;
        var7 = _closure1_slot2;
        var6 = var5.Screen;
        var4 = {};
        var4.name = var9;
        var9 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.ICYMITab;
            return var0;
        };
        var4.getComponent = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = var5.Screen;
        var5 = {};
        var9 = 'notifications-screen';
        var5.name = var9;
        var8 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.ThemedNotificationsModal;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [33, 9147, 5794, 13553, 13507, 2]);