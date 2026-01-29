// modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useGuildPowerupsWarningConfig, environment: var1
        var1 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var4;
        var5 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 2;
        var2 = var8[var2];
        var7 = undefined;
        var2 = var5.bind(var7)(var2);
        var2 = var2.bind(var7)(var1);
        var2 = var2.spent;
        var6 = _closure1_slot0;
        var5 = 3;
        var5 = var8[var5];
        var8 = var6.bind(var7)(var5);
        var7 = var8.useStateFromStores;
        var5 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getAppliedGuildBoostsForGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var7.bind(var8)(var6, var1, var5);
        var _closure2_slot2 = var1;
        var3 = _closure1_slot3;
        var6 = var3.useMemo;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() { // Environment: var0
            _fun102738: for (var _fun102738_ip = 0;;) switch (_fun102738_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var0 = null;
                    var3 = var0 == var1;
                    var1 = undefined;
                    if (var3) {
                        _fun102738_ip = 73;
                        continue _fun102738
                    }
                case 18:
                    var3 = _closure2_slot2;
                    var3 = var3.filter;
                    var3 = var0 == var3;
                    var1 = undefined;
                    if (var3) {
                        _fun102738_ip = 73;
                        continue _fun102738
                    }
                case 36:
                    var5 = _closure2_slot2;
                    var3 = var5.filter;
                    var2 = function(arg0) { // Environment: var2
                        _fun102739: for (var _fun102739_ip = 0;;) switch (_fun102739_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.ended;
                                var0 = !var0;
                                if (!var0) {
                                    _fun102739_ip = 27;
                                    continue _fun102739
                                }
                            case 15:
                                var2 = var1.endsAt;
                                var1 = null;
                                var0 = var1 == var2;
                            case 27:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var5)(var2);
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun102738_ip = 73;
                        continue _fun102738
                    }
                case 68:
                    var1 = var2.length;
                case 73:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun102738_ip = 85;
                        continue _fun102738
                    }
                case 82:
                    var0 = var1;
                case 85:
                    return var0;
            }
        };
        var1 = var6.bind(var3)(var1, var5);
        var5 = var2 - var1;
        var _closure2_slot3 = var5;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun102740: for (var _fun102740_ip = 0;;) switch (_fun102740_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = 0;
                    if (!(!(var1 <= var0))) {
                        _fun102740_ip = 184;
                        continue _fun102740
                    }
                case 16:
                    var0 = {};
                    var1 = true;
                    var0.shouldShow = var1;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 4;
                    var2 = var7[var4];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var10 = var2.intl;
                    var9 = var10.string;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var8 = var7[var1];
                    var8 = var2.bind(var3)(var8);
                    var8 = var8.n5hQhc;
                    var8 = var9.bind(var10)(var8);
                    var0.title = var8;
                    var4 = var7[var4];
                    var4 = var5.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.iAaAiG;
                    var2 = {};
                    var1 = _closure2_slot3;
                    var2.boostCount = var1;
                    var8 = _closure2_slot1;
                    var7 = var8.join;
                    var6 = ', ';
                    var6 = var7.bind(var8)(var6);
                    var2.perksString = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var0.description = var2;
                    var0.requiredBoostCount = var1;
                    _fun102740_ip = 198;
                    continue _fun102740;
                case 184:
                    var0 = {
                        'shouldShow': false,
                        'title': '',
                        'description': '',
                        'requiredBoostCount': 0
                    };
                case 198:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9910, 6671, 566, 1234, 1881, 2]);