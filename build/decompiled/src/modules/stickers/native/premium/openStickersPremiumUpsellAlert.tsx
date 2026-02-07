// modules/stickers/native/premium/openStickersPremiumUpsellAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun75123: for (var _fun75123_ip = 0;;) switch (_fun75123_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75123_ip = 225;
                            continue _fun75123
                        }
                    case 15:
                        var _closure4_slot0 = var8;
                        var4 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 4;
                        var1 = var9[var1];
                        var2 = undefined;
                        var7 = var4.bind(var2)(var1);
                        var5 = var7.track;
                        var1 = _closure1_slot4;
                        var4 = var1.OPEN_MODAL;
                        var1 = {};
                        var10 = _closure1_slot5;
                        var10 = var10.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
                        var1.type = var10;
                        var1.location = var8;
                        var1 = var5.bind(var7)(var4, var1);
                        var1 = global;
                        var5 = var1.Promise;
                        var4 = var5.all;
                        var8 = _closure1_slot0;
                        var1 = 5;
                        var1 = var9[var1];
                        var7 = var8.bind(var2)(var1);
                        var1 = var7.fetchPremiumSubscriptionPlans;
                        var7 = var1.bind(var7)();
                        var1 = new Array(2);
                        var1[0] = var7;
                        var7 = 6;
                        var7 = var9[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.fetchPaymentSources;
                        var7 = var7.bind(var8)();
                        var1[1] = var7;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 168);
                    case 166:
                        return var1;
                    case 168:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun75123_ip = 222;
                            continue _fun75123
                        }
                    case 174:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.openLazy;
                        var3 = {};
                        var6 = function() {
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var1 = 9;
                            var1 = var0[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = 8;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var2 = var2.bind(var3)(var1, var0);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var1 = var1.default;
                                var _closure6_slot0 = var1;
                                var0 = function(arg0) { // Environment: var0
                                    var3 = _closure1_slot6;
                                    var2 = _closure6_slot0;
                                    var1 = {};
                                    var5 = arg0;
                                    var6 = var1;
                                    var0 = copyDataProperties(var6, var5);
                                    var4 = _closure4_slot0;
                                    var0 = 'analyticsLocation';
                                    var1[var0] = var4;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3.importer = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 222:
                        return var1;
                    case 225:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot4 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/premium/openStickersPremiumUpsellAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 660, 33, 795, 5677, 3444, 3937, 9464, 1307, 2]);