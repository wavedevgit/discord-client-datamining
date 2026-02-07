// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var3 = var3.bind(var0)(var4);
    var3 = var3.NativeModules;
    var3 = var3.RNIapAmazonModule;
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot0;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58993: for (var _fun58993_ip = 0;;) switch (_fun58993_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58993_ip = 103;
                            continue _fun58993
                        }
                    case 12:
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        var4 = _closure1_slot1;
                        if (!var4) {
                            _fun58993_ip = 97;
                            continue _fun58993
                        }
                    case 28:
                        var4 = _closure1_slot1;
                        var1 = var4.getUser;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 46);
                    case 44:
                        return var1;
                    case 46:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58993_ip = 100;
                            continue _fun58993
                        }
                    case 52:
                        var5 = var1.userMarketplaceAmazon;
                        var4 = {
                            'CA': 'CAD',
                            'ES': 'EUR',
                            'AU': 'AUD',
                            'DE': 'EUR',
                            'IN': 'INR',
                            'US': 'USD',
                            'JP': 'JPY',
                            'GB': 'GBP',
                            'IT': 'EUR',
                            'BR': 'BRL',
                            'FR': 'EUR'
                        };
                        var4 = var4[var5];
                        _closure4_slot0 = var4;
                        var4 = var2.forEach;
                        var3 = function(arg0) { // Environment: var3
                            _fun58994: for (var _fun58994_ip = 0;;) switch (_fun58994_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = _closure4_slot0;
                                    if (!var2) {
                                        _fun58994_ip = 72;
                                        continue _fun58994
                                    }
                                case 13:
                                    var2 = var1.originalPrice;
                                    var0 = _closure4_slot0;
                                    var1.currency = var0;
                                    var3 = null;
                                    var5 = var3 != var2;
                                    var0 = '0.0';
                                    var4 = var0;
                                    if (!var5) {
                                        _fun58994_ip = 50;
                                        continue _fun58994
                                    }
                                case 47:
                                    var4 = var2;
                                case 50:
                                    var1.price = var4;
                                    var3 = var3 != var2;
                                    if (!var3) {
                                        _fun58994_ip = 66;
                                        continue _fun58994
                                    }
                                case 63:
                                    var0 = var2;
                                case 66:
                                    var1.localizedPrice = var0;
                                case 72:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = var4.bind(var2)(var3);
                    case 97:
                        return var2;
                    case 100:
                        return var1;
                    case 103:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function arg0() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.fillProductsWithAdditionalData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27]);