// modules/wishlists/records/BaseWishlistItemRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun86937: for (var _fun86937_ip = 0;;) switch (_fun86937_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun86937_ip = 76;
                continue _fun86937;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var6.bind(var0)(var3);
    var5 = 6;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var1 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun86941: for (var _fun86941_ip = 0;;) switch (_fun86941_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun86941_ip = 65;
                        continue _fun86941
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun86941_ip = 103;
                    continue _fun86941;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.sku_id;
                    var0.skuId = var2;
                    var2 = var1.sku_product_line;
                    var0.skuProductLine = var2;
                    var2 = var1.sku_name;
                    var0.skuName = var2;
                    var2 = var1.is_owned;
                    var0.isOwned = var2;
                    var2 = var1.gifter_user_id;
                    var0.gifterUserId = var2;
                    var1 = var1.sku;
                    var0.sku = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var0 = {};
        var5 = 'fromServer';
        var0.key = var5;
        var1 = function arg0() {
            _fun86942: for (var _fun86942_ip = 0;;) switch (_fun86942_ip) {
                case 0:
                    var3 = arg0;
                    var9 = var3.sku_id;
                    var8 = var3.sku_product_line;
                    var7 = var3.sku_name;
                    var6 = var3.is_owned;
                    var4 = var3.gifter_user_id;
                    var5 = var3.sku;
                    var2 = {
                        'sku_id': 0,
                        'sku_product_line': 0,
                        'sku_name': 0,
                        'is_owned': 0,
                        'gifter_user_id': 0,
                        'sku': 0
                    };
                    var1 = null;
                    var12 = var2;
                    var11 = null;
                    var0 = silentSetPrototypeOf(var12, var11);
                    var12 = {};
                    var11 = var3;
                    var10 = var2;
                    var11 = copyDataProperties(var12, var11, var10);
                    var2 = _closure2_slot0;
                    var0 = {};
                    var12 = var0;
                    var3 = copyDataProperties(var12, var11);
                    var3 = 'sku_id';
                    var0[var3] = var9;
                    var3 = 'sku_product_line';
                    var0[var3] = var8;
                    var3 = 'sku_name';
                    var0[var3] = var7;
                    var3 = 'is_owned';
                    var0[var3] = var6;
                    var3 = 'gifter_user_id';
                    var0[var3] = var4;
                    var1 = var1 != var5;
                    var3 = undefined;
                    if (!var1) {
                        _fun86942_ip = 164;
                        continue _fun86942
                    }
                case 146:
                    var4 = _closure1_slot5;
                    var1 = var4.createFromServer;
                    var3 = var1.bind(var4)(var5);
                case 164:
                    var1 = 'sku';
                    var0[var1] = var3;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var1;
                    var12 = var0;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/wishlists/records/BaseWishlistItemRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 3451, 2]);