// modules/search/native/message_parsers/CachedSearchResultParser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var1);
    var1 = 1;
    var1 = var4[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = function() {
        var2 = this;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = undefined;
        var3 = var4.bind(var0)(var2, var3);
        var3 = global;
        var3 = var3.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var7 = var4;
        var3 = new var7[var3](var6);
        var3 = var3 instanceof Object ? var3 : var4;
        var2.resultsCache = var3;
        var1 = function(arg0) { // Environment: var1
            _fun106852: for (var _fun106852_ip = 0;;) switch (_fun106852_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure2_slot0;
                    var4 = var0.resultsCache;
                    var3 = var4.get;
                    var0 = var2.id;
                    var0 = var3.bind(var4)(var0);
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun106852_ip = 76;
                        continue _fun106852
                    }
                case 37:
                    var3 = _closure2_slot0;
                    var1 = var3.getSearchResults;
                    var1 = var1.bind(var3)(var2);
                    var4 = var3.resultsCache;
                    var3 = var4.set;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2, var1);
                    return var1;
                case 76:
                    return var0;
            }
        };
        var2.parse = var1;
        return var0;
    };
    var _closure1_slot1 = var1;
    var1 = var3.bind(var0)(var1);
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/message_parsers/CachedSearchResultParser.tsx';
    var3 = var4.bind(var5)(var3);
    var2.CachedSearchResultParser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 2]);