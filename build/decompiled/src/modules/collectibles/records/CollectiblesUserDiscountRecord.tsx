// modules/collectibles/records/CollectiblesUserDiscountRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var4 = function(arg0) { // Original name: CollectiblesUserDiscountRecord, environment: var1
            _fun42366: for (var _fun42366_ip = 0;;) switch (_fun42366_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var4 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var2, var1);
                    var1 = var3.discount_id;
                    var2.discountId = var1;
                    var1 = var3.amount;
                    var2.amount = var1;
                    var4 = var3.expires_at;
                    var1 = null;
                    var4 = var1 != var4;
                    var1 = undefined;
                    if (!var4) {
                        _fun42366_ip = 103;
                        continue _fun42366
                    }
                case 69:
                    var4 = global;
                    var5 = var4.Date;
                    var7 = var3.expires_at;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var4;
                    var3 = new var8[var5](var7, var6);
                    var1 = var3 instanceof Object ? var3 : var4;
                case 103:
                    var2.expiresAt = var1;
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
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/CollectiblesUserDiscountRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.CollectiblesUserDiscountRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);