// modules/collectibles/records/FeaturedBlockRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FeaturedCategorySubblockRecord;
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var4 = function arg0() {
            var2 = this;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.ShopBlockType;
            var1 = var1.FEATURED;
            var2.type = var1;
            var1 = arg0;
            var4 = var1.subblocks;
            var3 = var4.map;
            var1 = function(arg0) { // Environment: var1
                _fun42431: for (var _fun42431_ip = 0;;) switch (_fun42431_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = var3.type;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 4;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var5.bind(var0)(var2);
                        var0 = var0.FeaturedSubblockType;
                        var2 = var0.CATEGORY;
                        var0 = var3;
                        if (!(var4 === var2)) {
                            _fun42431_ip = 67;
                            continue _fun42431
                        }
                    case 52:
                        var2 = _closure1_slot4;
                        var1 = var2.fromServer;
                        var0 = var1.bind(var2)(var3);
                    case 67:
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var1);
            var2.subblocks = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'fromServer';
        var0.key = var2;
        var1 = function arg0() {
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
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/FeaturedBlockRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.FeaturedBlockRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4602, 3277, 4603, 2]);