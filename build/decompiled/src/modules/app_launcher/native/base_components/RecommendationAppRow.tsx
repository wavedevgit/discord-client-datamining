// modules/app_launcher/native/base_components/RecommendationAppRow.tsx
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/base_components/RecommendationAppRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107686: for (var _fun107686_ip = 0;;) switch (_fun107686_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.application;
                var7 = var0.onPress;
                var6 = var0.isFirstRow;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun107686_ip = 27;
                    continue _fun107686
                }
            case 25:
                var6 = false;
            case 27:
                var5 = var0.isLastRow;
                if (!(var5 === var3)) {
                    _fun107686_ip = 39;
                    continue _fun107686
                }
            case 37:
                var5 = false;
            case 39:
                var4 = var0.showsPromoted;
                if (!(var4 === var3)) {
                    _fun107686_ip = 51;
                    continue _fun107686
                }
            case 49:
                var4 = false;
            case 51:
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 2;
                var1 = var10[var1];
                var8 = var2.bind(var3)(var1);
                var2 = var8.getApplicationIconSource;
                var1 = {};
                var11 = var9.id;
                var1.id = var11;
                var11 = var9.icon;
                var1.icon = var11;
                var11 = var9.bot;
                var1.bot = var11;
                var11 = true;
                var1.botIconFirst = var11;
                var8 = var2.bind(var8)(var1);
                var2 = _closure1_slot3;
                var1 = _closure1_slot0;
                var0 = 3;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BaseAppRow;
                var0 = {};
                var0.application = var9;
                var0.iconSource = var8;
                var0.onPress = var7;
                var0.isFirstRow = var6;
                var0.isLastRow = var5;
                var0.showsPromoted = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1417, 13846, 2]);