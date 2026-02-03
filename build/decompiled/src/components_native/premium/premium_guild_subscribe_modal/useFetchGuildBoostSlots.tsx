// components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot5;
        var3 = var4.useState;
        var0 = true;
        var5 = var3.bind(var4)(var0);
        var3 = _closure1_slot4;
        var7 = undefined;
        var0 = 2;
        var5 = var3.bind(var7)(var5, var0);
        var0 = 0;
        var0 = var5[var0];
        var _closure2_slot0 = var0;
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot1 = var3;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 5;
        var5 = var8[var3];
        var11 = var6.bind(var7)(var5);
        var10 = var11.useStateFromStores;
        var5 = _closure1_slot6;
        var9 = new Array(1);
        var9[0] = var5;
        var5 = function() { // Environment: var1
            var0 = _closure1_slot6;
            var0 = var0.hasFetched;
            return var0;
        };
        var5 = var10.bind(var11)(var9, var5);
        var _closure2_slot2 = var5;
        var3 = var8[var3];
        var7 = var6.bind(var7)(var3);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot7;
            var0 = var1.getState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var6.bind(var7)(var3, var2);
        var _closure2_slot3 = var6;
        var2 = var4.useRef;
        var2 = var2.bind(var4)(var6);
        var _closure2_slot4 = var2;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var6;
        var2[1] = var5;
        var2[2] = var0;
        var1 = function() { // Environment: var1
            _fun78393: for (var _fun78393_ip = 0;;) switch (_fun78393_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun78393_ip = 72;
                        continue _fun78393
                    }
                case 10:
                    var1 = _closure2_slot3;
                    var0 = _closure2_slot4;
                    var0 = var0.current;
                    if (!(var1 !== var0)) {
                        _fun78393_ip = 105;
                        continue _fun78393
                    }
                case 27:
                    var1 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.AppStates;
                    var0 = var0.ACTIVE;
                    if (!(var1 === var0)) {
                        _fun78393_ip = 105;
                        continue _fun78393
                    }
                case 72:
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun78396: for (var _fun78396_ip = 0;;) switch (_fun78396_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun78396_ip = 195;
                                            continue _fun78396
                                        }
                                    case 10:
                                        var8 = global;
                                        var5 = var8.Promise;
                                        var4 = var5.all;
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 7;
                                        var1 = var2[var1];
                                        var2 = undefined;
                                        var3 = var3.bind(var2)(var1);
                                        var1 = var3.init;
                                        var3 = var1.bind(var3)();
                                        var1 = new Array(3);
                                        var1[0] = var3;
                                        var7 = _closure2_slot2;
                                        if (var7) {
                                            _fun78396_ip = 109;
                                            continue _fun78396
                                        }
                                    case 77:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var7 = 8;
                                        var7 = var10[var7];
                                        var9 = var9.bind(var2)(var7);
                                        var7 = var9.fetchGuildBoostSlots;
                                        var7 = var7.bind(var9)();
                                        _fun78396_ip = 125;
                                        continue _fun78396;
                                    case 109:
                                        var9 = var8.Promise;
                                        var8 = var9.resolve;
                                        var7 = var8.bind(var9)();
                                    case 125:
                                        var1[1] = var7;
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var6 = 8;
                                        var6 = var8[var6];
                                        var7 = var7.bind(var2)(var6);
                                        var6 = var7.fetchAppliedGuildBoostsForUser;
                                        var6 = var6.bind(var7)();
                                        var1[2] = var6;
                                        var1 = var4.bind(var5)(var1);
                                        SaveGenerator(address = 172);
                                    case 170:
                                        return var1;
                                    case 172:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun78396_ip = 192;
                                            continue _fun78396
                                        }
                                    case 178:
                                        var4 = _closure2_slot1;
                                        var3 = false;
                                        var3 = var4.bind(var2)(var3);
                                        return var2;
                                    case 192:
                                        return var1;
                                    case 195:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var1 = undefined;
                    var0 = var0.bind(var1)();
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot3;
                    var3.current = var2;
                    var0 = var0.bind(var1)();
                case 105:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 6703, 5279, 566, 670, 7042, 6705, 2]);