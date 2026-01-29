// modules/favorites/FavoritesConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var8 = global;
    var4 = var8.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var1);
    var4 = var7.constructFromPartialGuildRecord;
    var1 = {
        'id': '373',
        'name': 'Favorites',
        'description': 'The place for all your favorite channels!',
        'joinedAt': null,
        'maxMembers': 500000
    };
    var3 = '373';
    var8 = var8.Date;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var1.joinedAt = var8;
    var1 = var4.bind(var7)(var1);
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/FavoritesConstants.tsx';
    var4 = var5.bind(var6)(var4);
    var2.FAVORITES_RAW_GUILD_ID = var3;
    var2.FAVORITES_GUILD_RECORD = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1598, 2]);