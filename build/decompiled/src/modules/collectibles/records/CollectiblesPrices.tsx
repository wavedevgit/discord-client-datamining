// modules/collectibles/records/CollectiblesPrices.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var3.getPriceFromServer;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/CollectiblesPrices.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun42280: for (var _fun42280_ip = 0;;) switch (_fun42280_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun42280_ip = 54;
                    continue _fun42280
                }
            case 15:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var3 = var1.bind(var2)(var3);
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun42281: for (var _fun42281_ip = 0;;) switch (_fun42281_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = arg1;
                            var4 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun42281_ip = 100;
                                continue _fun42281
                            }
                        case 19:
                            var1 = _closure2_slot0;
                            var4 = var1[var2];
                            var1 = {};
                            var3 = {};
                            var5 = var4.country_prices;
                            var5 = var5.country_code;
                            var3.countryCode = var5;
                            var4 = var4.country_prices;
                            var6 = var4.prices;
                            var5 = var6.map;
                            var4 = function(arg0) { // Environment: var4
                                var3 = _closure1_slot0;
                                var2 = undefined;
                                var1 = arg0;
                                var0 = true;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var4 = var5.bind(var6)(var4);
                            var3.prices = var4;
                            var1.countryPrices = var3;
                            var3 = {};
                            var1.paymentSourcePrices = var3;
                            var0[var2] = var1;
                            return var0;
                        case 100:
                            return var0;
                    }
                };
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                _fun42280_ip = 56;
                continue _fun42280;
            case 54:
                var0 = {};
            case 56:
                return var0;
        }
    };
    var2.getPricesFromServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3069, 2]);