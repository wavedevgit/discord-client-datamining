// modules/oauth2/convertor.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/oauth2/convertor.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun47898: for (var _fun47898_ip = 0;;) switch (_fun47898_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.guilds;
                var1 = null;
                var0 = var2;
                if (!(var1 != var3)) {
                    _fun47898_ip = 65;
                    continue _fun47898
                }
            case 18:
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = var2.guilds;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = {};
                    var6 = var0;
                    var5 = var1;
                    var2 = copyDataProperties(var6, var5);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.deserialize;
                    var1 = var1.permissions;
                    var2 = var2.bind(var3)(var1);
                    var1 = 'permissions';
                    var0[var1] = var2;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = 'guilds';
                var1[var2] = var3;
                var0 = var1;
            case 65:
                return var0;
        }
    };
    var2.convertOAuth2Authorization = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [484, 2]);