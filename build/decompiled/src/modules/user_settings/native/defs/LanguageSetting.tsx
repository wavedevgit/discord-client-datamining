// modules/user_settings/native/defs/LanguageSetting.tsx
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
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.UserSettingsSections;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createRoute;
    var1 = {};
    var7 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 3;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.IHMsPn;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var7;
    var7 = null;
    var1.parent = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.LanguageIcon;
    var1.IconComponent = var7;
    var7 = function() {
        _fun85472: for (var _fun85472_ip = 0;;) switch (_fun85472_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = 2;
                var5 = var1[var4];
                var4 = undefined;
                var8 = var3.bind(var4)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot2;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var0 = _closure1_slot2;
                    var0 = var0.locale;
                    return var0;
                };
                var5 = var7.bind(var8)(var6, var5);
                var _closure2_slot0 = var5;
                var5 = 3;
                var1 = var1[var5];
                var3 = var3.bind(var4)(var1);
                var1 = var3.getAvailableLocales;
                var3 = var1.bind(var3)();
                var1 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = null;
                var3 = var0 != var1;
                if (!var3) {
                    _fun85472_ip = 147;
                    continue _fun85472
                }
            case 109:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1.localizedName;
                var0 = var2.bind(var3)(var1);
            case 147:
                return var0;
        }
    };
    var1.useTrailing = var7;
    var7 = {};
    var9 = var9.LANGUAGE;
    var7.route = var9;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var7.getComponent = var8;
    var1.screen = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/LanguageSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1685, 660, 566, 1234, 9023, 10979, 10981, 2]);