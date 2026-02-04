// modules/user_profile/native/UserProfileGradientContext.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot0 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot1 = var3;
    var6 = var7.createContext;
    var3 = {
        'primaryColor': null,
        'secondaryColor': null,
        'borderPrimaryColor': null,
        'borderSecondaryColor': null
    };
    var3.parentLayout = var0;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileGradientContext.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var3 = arg0;
        var0 = var3.children;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2.children = var1;
        var7 = {};
        var6 = var3;
        var5 = var2;
        var4 = copyDataProperties(var7, var6, var5);
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var2 = var1.Provider;
        var1 = {};
        var1.value = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.UserProfileGradientContextProvider = var3;
    var1 = function() {
        _fun57205: for (var _fun57205_ip = 0;;) switch (_fun57205_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.useContext;
                var0 = _closure1_slot2;
                var0 = var1.bind(var2)(var0);
                var1 = undefined;
                if (!(var1 !== var0)) {
                    _fun57205_ip = 30;
                    continue _fun57205
                }
            case 28:
                return var0;
            case 30:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = '[useUserProfileGradientContext] Context is undefined. Are you missing a UserProfileGradientContextProvider?';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.useUserProfileGradientContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 2]);