// modules/messages/getStickerDiscoverableGuild.tsx
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
    var3 = var3.Endpoints;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/getStickerDiscoverableGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var6 = _closure1_slot2;
        var5 = var6.STICKER_GUILD_DATA;
        var4 = arg0;
        var4 = var5.bind(var6)(var4);
        var1.url = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            _fun74604: for (var _fun74604_ip = 0;;) switch (_fun74604_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    var3 = var0 == var1;
                    var4 = undefined;
                    var2 = undefined;
                    if (var3) {
                        _fun74604_ip = 21;
                        continue _fun74604
                    }
                case 16:
                    var2 = var1.body;
                case 21:
                    var2 = var0 != var2;
                    var0 = null;
                    if (!var2) {
                        _fun74604_ip = 69;
                        continue _fun74604
                    }
                case 30:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 2;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.makeDiscoverableGuild;
                    var1 = var1.body;
                    var0 = var2.bind(var3)(var1);
                case 69:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function() { // Environment: var0
            var0 = null;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 507, 5614, 2]);