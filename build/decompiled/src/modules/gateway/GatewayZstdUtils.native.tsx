// modules/gateway/GatewayZstdUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/GatewayZstdUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun95297: for (var _fun95297_ip = 0;;) switch (_fun95297_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun95297_ip = 77;
                    continue _fun95297
                }
            case 38:
                var0 = _closure1_slot3;
                var4 = var0.DCDCompressionManager;
                var0 = null;
                var5 = var0 == var4;
                var2 = undefined;
                if (var5) {
                    _fun95297_ip = 65;
                    continue _fun95297
                }
            case 59:
                var2 = var4.supportsZstd;
            case 65:
                var0 = var0 != var2;
                if (!var0) {
                    _fun95297_ip = 75;
                    continue _fun95297
                }
            case 72:
                var0 = var2;
            case 75:
                _fun95297_ip = 113;
                continue _fun95297;
            case 77:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getConstants;
                var1 = var1.bind(var2)();
                var0 = var1.supportsZstd;
            case 113:
                return var0;
        }
    };
    var2.supportsZstd = var3;
    var1 = function() {
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var2.createZstdContextWeb = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 12481, 2]);