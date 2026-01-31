// modules/premium/hooks/useGeoForUser.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/hooks/useGeoForUser.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun56485: for (var _fun56485_ip = 0;;) switch (_fun56485_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 4;
                var2 = var7[var5];
                var1 = undefined;
                var9 = var6.bind(var1)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun56486: for (var _fun56486_ip = 0;;) switch (_fun56486_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var2 = var3.getProduct;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.ProductIds;
                            var1 = var1.PREMIUM_TIER_2_MONTHLY;
                            var1 = var2.bind(var3)(var1);
                            var2 = null;
                            var2 = var2 == var1;
                            if (var2) {
                                _fun56486_ip = 67;
                                continue _fun56486
                            }
                        case 61:
                            var0 = var1.countryCode;
                        case 67:
                            return var0;
                    }
                };
                var3 = var8.bind(var9)(var3, var2);
                var2 = var7[var5];
                var10 = var6.bind(var1)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.ipLocation;
                    return var0;
                };
                var2 = var9.bind(var10)(var8, var2);
                var5 = var7[var5];
                var8 = var6.bind(var1)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.isAuthenticated;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var7.bind(var8)(var6, var5);
                var _closure2_slot0 = var7;
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var7;
                var0 = function() { // Environment: var0
                    _fun56489: for (var _fun56489_ip = 0;;) switch (_fun56489_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun56489_ip = 28;
                                continue _fun56489
                            }
                        case 10:
                            var1 = _closure1_slot5;
                            var1 = var1.ipLocationLoaded;
                            var0 = !var1;
                        case 28:
                            if (!var0) {
                                _fun56489_ip = 66;
                                continue _fun56489
                            }
                        case 31:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetchIpLocation;
                            var0 = var0.bind(var1)();
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.defaultBillingCountryCode = var3;
                var3 = null;
                var5 = var3 == var2;
                var4 = undefined;
                if (var5) {
                    _fun56485_ip = 189;
                    continue _fun56485
                }
            case 183:
                var4 = var2.countryCode;
            case 189:
                var0.ipCountryCode = var4;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun56485_ip = 209;
                    continue _fun56485
                }
            case 203:
                var1 = var2.subdivisionCode;
            case 209:
                var0.ipSubdivisionCode = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1216, 3070, 4575, 566, 6829, 3402, 2]);