// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var4 = var3.BackHandler;
    var _closure1_slot0 = var4;
    var3 = var3.Platform;
    var5 = ['ios', 'android'];
    var4 = var5.includes;
    var3 = 'android';
    var3 = var4.bind(var5)(var3);
    var2.isSearchBarAvailableForCurrentPlatform = var3;
    var1 = function() { // Original name: executeNativeBackPress, environment: var1
        var1 = _closure1_slot0;
        var0 = var1.exitApp;
        var0 = var0.bind(var1)();
        var0 = true;
        return var0;
    };
    var2.executeNativeBackPress = var1;
    var1 = {
        'isNewBackTitleImplementation': true,
        'usesHeaderFlexboxImplementation': true
    };
    var2.compatibilityFlags = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);