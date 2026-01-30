// modules/parent_tools/hooks/useHelpLineVisibility.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = metroImportAll;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var8 = var3.Set;
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = ['US'];
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var7 = var3.Set;
    var3 = var7.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = ['en-US', 'es-ES'];
    var13 = var4;
    var3 = new var13[var7](var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot7 = var3;
    var3 = function() { // Original name: useShouldShowHelplineLink, environment: var1
        _fun72285: for (var _fun72285_ip = 0;;) switch (_fun72285_ip) {
            case 0:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 3;
                var0 = var7[var0];
                var6 = undefined;
                var0 = var2.bind(var6)(var0);
                var0 = var0.bind(var6)();
                var5 = _closure1_slot0;
                var3 = 4;
                var2 = var7[var3];
                var10 = var5.bind(var6)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var4
                    var1 = _closure1_slot5;
                    var0 = var1.getUserCountry;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var9.bind(var10)(var8, var2);
                var _closure2_slot0 = var2;
                var3 = var7[var3];
                var7 = var5.bind(var6)(var3);
                var6 = var7.useStateFromStores;
                var3 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var4
                    var0 = _closure1_slot4;
                    var0 = var0.locale;
                    return var0;
                };
                var3 = var6.bind(var7)(var5, var3);
                var7 = _closure1_slot3;
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var2;
                var4 = function() { // Environment: var4
                    _fun72288: for (var _fun72288_ip = 0;;) switch (_fun72288_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun72288_ip = 48;
                                continue _fun72288
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetchUserCountryCode;
                            var0 = var0.bind(var1)();
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4, var5);
                var0 = !var0;
                if (!var0) {
                    _fun72285_ip = 162;
                    continue _fun72285
                }
            case 156:
                var4 = null;
                var0 = var4 != var2;
            case 162:
                if (!var0) {
                    _fun72285_ip = 185;
                    continue _fun72285
                }
            case 165:
                var5 = _closure1_slot6;
                var4 = var5.has;
                var2 = var2.alpha2;
                var0 = var4.bind(var5)(var2);
            case 185:
                if (!var0) {
                    _fun72285_ip = 202;
                    continue _fun72285
                }
            case 188:
                var2 = _closure1_slot7;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 202:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/hooks/useHelpLineVisibility.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useShouldShowHelplineLink = var3;
    var1 = function() { // Environment: var1
        _fun72289: for (var _fun72289_ip = 0;;) switch (_fun72289_ip) {
            case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var3.bind(var2)(var0);
                var0 = var0.bind(var2)();
                var1 = _closure1_slot8;
                var1 = var1.bind(var2)();
                var0 = !var0;
                if (!var0) {
                    _fun72289_ip = 46;
                    continue _fun72289
                }
            case 43:
                var0 = !var1;
            case 46:
                return var0;
        }
    };
    var2.useShouldShowThroughlineLink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1676, 4556, 6471, 632, 9009, 2]);