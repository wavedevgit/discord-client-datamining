// modules/collectibles/records/CollectiblesCategoriesRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesUserDiscountRecord;
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var4 = function(arg0) { // Original name: CollectiblesCategoriesRecord, environment: var1
            _fun42230: for (var _fun42230_ip = 0;;) switch (_fun42230_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var5 = _closure1_slot0;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var6 = var1.categories;
                    var5 = var6.map;
                    var4 = function(arg0) { // Environment: var3
                        var2 = _closure1_slot2;
                        var1 = var2.fromServer;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    var2.categories = var4;
                    var5 = var1.user_discounts;
                    var1 = null;
                    var4 = var1 == var5;
                    var1 = undefined;
                    if (var4) {
                        _fun42230_ip = 89;
                        continue _fun42230
                    }
                case 74:
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var3
                        var2 = _closure1_slot3;
                        var1 = var2.fromServer;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var3);
                case 89:
                    var2.userDiscounts = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var0 = {};
        var2 = 'fromServer';
        var0.key = var2;
        var1 = function(arg0) { // Original name: value, environment: var1
            var2 = _closure2_slot0;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = arg0;
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/CollectiblesCategoriesRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.CollectiblesCategoriesRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4581, 4588, 2]);