// modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = var4.createContext;
    var3 = var3.bind(var4)(var0);
    var _closure1_slot4 = var3;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function() { // Original name: useCreatorMonetizationSettingsDisabled, environment: var1
        _fun116922: for (var _fun116922_ip = 0;;) switch (_fun116922_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.useContext;
                var0 = _closure1_slot4;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun116922_ip = 30;
                    continue _fun116922
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
                var3 = 'useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.useCreatorMonetizationSettingsDisabled = var3;
    var1 = function(arg0) { // Original name: CreatorMonetizationSettingsDisabledContextProvider, environment: var1
        var0 = arg0;
        var5 = var0.guildId;
        var4 = var0.children;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.useShouldRestrictUpdatingCreatorMonetizationSettings;
        var1 = var1.bind(var2)(var5);
        var5 = var1.shouldRestrictUpdatingCreatorMonetizationSettings;
        var2 = _closure1_slot3;
        var0 = _closure1_slot4;
        var1 = var0.Provider;
        var0 = {};
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.CreatorMonetizationSettingsDisabledContextProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 5580, 2]);