// modules/collectibles/records/BaseCollectibesItemRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun42028: for (var _fun42028_ip = 0;;) switch (_fun42028_ip) {
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
            case 70: // try_end0
                _fun42028_ip = 74;
                continue _fun42028;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot5 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var4 = function(arg0) { // Original name: BaseCollectiblesItemRecord, environment: var1
            _fun42032: for (var _fun42032_ip = 0;;) switch (_fun42032_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun42032_ip = 62;
                        continue _fun42032
                    }
                case 49:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var2);
                    _fun42032_ip = 100;
                    continue _fun42032;
                case 62:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var2)(var3);
                    var5 = var4.constructor;
                    var4 = new Array(0);
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 100:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = arg0;
                    var1 = var1.skuId;
                    var0.skuId = var1;
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
        var1 = function(arg0) { // Original name: value, environment: var1
            var2 = arg0;
            var3 = var2.sku_id;
            var0 = null;
            var1 = Object.create(var0);
            var0 = 0;
            var1.sku_id = var0;
            var6 = {};
            var5 = var2;
            var4 = var1;
            var5 = copyDataProperties(var6, var5, var4);
            var2 = _closure2_slot0;
            var0 = {};
            var6 = var0;
            var1 = copyDataProperties(var6, var5);
            var1 = 'skuId';
            var0[var1] = var3;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var7 = var1;
            var6 = var0;
            var0 = new var7[var2](var6, var5);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 6;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/BaseCollectibesItemRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 2]);