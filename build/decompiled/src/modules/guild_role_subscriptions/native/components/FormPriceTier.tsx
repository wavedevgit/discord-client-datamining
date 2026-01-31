// modules/guild_role_subscriptions/native/components/FormPriceTier.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.LoadingState;
    var _closure1_slot3 = var6;
    var3 = var3.usePriceTiersAvailableInGuild;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CurrencyCodes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/FormPriceTier.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: FormPriceTier, environment: var1
        _fun116914: for (var _fun116914_ip = 0;;) switch (_fun116914_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.disabled;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var12 = var0.price;
                var _closure2_slot1 = var12;
                var0 = var0.onChange;
                var _closure2_slot2 = var0;
                var0 = _closure1_slot4;
                var3 = undefined;
                var1 = var0.bind(var3)(var1);
                var0 = var1.tiers;
                var _closure2_slot3 = var0;
                var7 = var1.state;
                var1 = var1.onRefresh;
                var _closure2_slot4 = var1;
                var1 = _closure1_slot5;
                var11 = var1.USD;
                var _closure2_slot5 = var11;
                var8 = null;
                if (!(var8 != var0)) {
                    _fun116914_ip = 255;
                    continue _fun116914
                }
            case 101:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 5;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = var8 == var12;
                var8 = undefined;
                if (var9) {
                    _fun116914_ip = 168;
                    continue _fun116914
                }
            case 136:
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 6;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = var10.formatPrice;
                var8 = var9.bind(var10)(var12, var11);
            case 168:
                var0.label = var8;
                var0.disabled = var5;
                var5 = function() { // Original name: onPress, environment: var4
                    _fun116916: for (var _fun116916_ip = 0;;) switch (_fun116916_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var0 = 7;
                            var3 = var13[var0];
                            var0 = undefined;
                            var8 = var4.bind(var0)(var3);
                            var10 = _closure2_slot3;
                            var7 = null;
                            var5 = var7 != var10;
                            var3 = 'handleSelectPrice must only be called if tiers != null';
                            var3 = var8.bind(var0)(var5, var3);
                            var3 = 8;
                            var3 = var13[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var12 = _closure1_slot0;
                            var2 = 10;
                            var2 = var13[var2];
                            var8 = var12.bind(var0)(var2);
                            var2 = 9;
                            var3 = var13[var2];
                            var2 = var13.paths;
                            var3 = var8.bind(var0)(var3, var2);
                            var2 = {};
                            var8 = 4;
                            var9 = var13[var8];
                            var9 = var12.bind(var0)(var9);
                            var11 = var9.intl;
                            var9 = var11.string;
                            var8 = var13[var8];
                            var8 = var12.bind(var0)(var8);
                            var8 = var8.t;
                            var8 = var8.nCOuYJ;
                            var8 = var9.bind(var11)(var8);
                            var2.title = var8;
                            var9 = var10.map;
                            var8 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = {};
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 6;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.formatPrice;
                                var2 = _closure2_slot5;
                                var2 = var3.bind(var4)(var1, var2);
                                var0.label = var2;
                                var0.value = var1;
                                return var0;
                            };
                            var8 = var9.bind(var10)(var8);
                            var2.items = var8;
                            var1 = function(arg0) { // Original name: onItemSelect, environment: var1
                                _fun116918: for (var _fun116918_ip = 0;;) switch (_fun116918_ip) {
                                    case 0:
                                        var2 = _closure2_slot2;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun116918_ip = 27;
                                            continue _fun116918
                                        }
                                    case 13:
                                        var2 = _closure2_slot2;
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var2.bind(var1)(var0);
                                    case 27:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 8;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.hideActionSheet;
                                        var1 = var1.bind(var2)();
                                        return var0;
                                }
                            };
                            var2.onItemSelect = var1;
                            var1 = _closure2_slot1;
                            var7 = var7 != var1;
                            var1 = undefined;
                            if (!var7) {
                                _fun116916_ip = 207;
                                continue _fun116916
                            }
                        case 203:
                            var1 = _closure2_slot1;
                        case 207:
                            var2.selectedItem = var1;
                            var1 = 'GuildRoleSubscriptionPriceTierSelect';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var0.onPress = var5;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 4;
                var8 = var11[var5];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.nCOuYJ;
                var5 = var8.bind(var9)(var5);
                var0.placeholder = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 255:
                var0 = _closure1_slot3;
                var0 = var0.LOADING;
                if (!(var7 !== var0)) {
                    _fun116914_ip = 326;
                    continue _fun116914
                }
            case 269:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 4;
                var1 = var8[var0];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var8[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.R0RpRX;
                var5 = var1.bind(var2)(var0);
                _fun116914_ip = 381;
                continue _fun116914;
            case 326:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 4;
                var1 = var9[var0];
                var1 = var8.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var9[var0];
                var0 = var8.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.ZTNur7;
                var5 = var1.bind(var2)(var0);
            case 381:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = _closure1_slot3;
                var6 = var6.LOADING;
                var6 = var7 === var6;
                var0.disabled = var6;
                var0.placeholder = var5;
                var4 = function() { // Original name: onPress, environment: var4
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 14837, 660, 33, 1234, 12516, 4570, 44, 3237, 5339, 1307, 2]);