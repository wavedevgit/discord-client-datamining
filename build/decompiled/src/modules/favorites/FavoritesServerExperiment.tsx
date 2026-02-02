// modules/favorites/FavoritesServerExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2021-09_favorites_server',
        'label': 'Favorites Server'
    };
    var4 = {
        'favoritesEnabled': false,
        'canShow': true,
        'isFavoritesPerk': false,
        'hasStaffPrivileges': false
    };
    var3.defaultConfig = var4;
    var10 = {
        'id': 1,
        'label': 'Favorites v1 - On'
    };
    var4 = 1;
    var9 = {
        'favoritesEnabled': true,
        'canShow': true,
        'isFavoritesPerk': false,
        'hasStaffPrivileges': true
    };
    var10.config = var9;
    var9 = new Array(4);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'Favorites v1 - Forced Off'
    };
    var11 = {
        'favoritesEnabled': false,
        'canShow': false,
        'isFavoritesPerk': false,
        'hasStaffPrivileges': true
    };
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 3,
        'label': 'Favorites v2'
    };
    var11 = {
        'favoritesEnabled': true,
        'canShow': true,
        'isFavoritesPerk': true,
        'hasStaffPrivileges': true
    };
    var10.config = var11;
    var9[2] = var10;
    var10 = {
        'id': 4,
        'label': 'Favorites v2 w/o Staff Privileges'
    };
    var11 = {
        'favoritesEnabled': true,
        'canShow': true,
        'isFavoritesPerk': true,
        'hasStaffPrivileges': false
    };
    var10.config = var11;
    var9[3] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/FavoritesServerExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = arg0;
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useFavoritesServerExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3076, 2]);