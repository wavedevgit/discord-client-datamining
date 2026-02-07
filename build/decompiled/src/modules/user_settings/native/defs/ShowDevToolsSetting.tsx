// modules/user_settings/native/defs/ShowDevToolsSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 1;
    var1 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {
        'title': 'Show Dev Tools',
        'parent': null
    };
    var9 = 2;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.StaffBadgeIcon;
    var1.IconComponent = var9;
    var9 = 3;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.navigateToDevTools;
    var1.onPress = var9;
    var9 = 4;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.useStaffOrDeveloperSettingPredicate;
    var1.usePredicate = var9;
    var8 = function() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 0;
        var3 = var3[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var3);
        var0 = var0.DevToolsScreens;
        var2 = var1.bind(var2)(var0);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.headerTitle;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.additionalSearchTerms = var8;
    var1.withArrow = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ShowDevToolsSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11178, 9067, 11175, 11439, 10509, 2]);