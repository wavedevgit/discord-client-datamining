// modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsObjectTypes;
    var _closure1_slot9 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        var6 = arg0;
        var7 = arg1;
        var9 = arg2;
        var1 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var9;
        var _closure2_slot3 = var1;
        var5 = _closure1_slot5;
        var4 = var5.useState;
        var2 = false;
        var10 = var4.bind(var5)(var2);
        var4 = _closure1_slot4;
        var8 = undefined;
        var2 = 2;
        var11 = var4.bind(var8)(var10, var2);
        var4 = 0;
        var2 = var11[var4];
        var10 = 1;
        var10 = var11[var10];
        var _closure2_slot4 = var10;
        var10 = _closure1_slot1;
        var11 = _closure1_slot3;
        var3 = 6;
        var3 = var11[var3];
        var3 = var10.bind(var8)(var3);
        var3 = var3.bind(var8)();
        var8 = var3.analyticsLocations;
        var _closure2_slot5 = var8;
        var3 = var5.useRef;
        var3 = var3.bind(var5)(var4);
        var _closure2_slot6 = var3;
        var4 = var5.useCallback;
        var3 = new Array(5);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var3[4] = var1;
        var1 = function() { // Environment: var0
            _fun61431: for (var _fun61431_ip = 0;;) switch (_fun61431_ip) {
                case 0:
                    var2 = _closure1_slot6;
                    var3 = var2.getPremiumTypeSubscription;
                    var0 = false;
                    var7 = var3.bind(var2)(var0);
                    var0 = var2.hasFetchedSubscriptions;
                    var2 = var0.bind(var2)();
                    var0 = null;
                    var4 = var0 == var7;
                    if (var4) {
                        _fun61431_ip = 70;
                        continue _fun61431
                    }
                case 41:
                    var3 = global;
                    var6 = var3.Object;
                    var3 = var6.keys;
                    var3 = var3.bind(var6)(var7);
                    var6 = var3.length;
                    var3 = 0;
                    var4 = var3 === var6;
                case 70:
                    var6 = _closure1_slot7;
                    var3 = var6.hasFetchedOffer;
                    var3 = var3.bind(var6)();
                    if (!var3) {
                        _fun61431_ip = 104;
                        continue _fun61431
                    }
                case 87:
                    var7 = _closure1_slot7;
                    var6 = var7.hasAnyUnexpiredOffer;
                    var6 = var6.bind(var7)();
                    var3 = !var6;
                case 104:
                    var7 = _closure1_slot7;
                    var6 = var7.isFetchingOffer;
                    var6 = var6.bind(var7)();
                    if (!var2) {
                        _fun61431_ip = 130;
                        continue _fun61431
                    }
                case 121:
                    if (!var4) {
                        _fun61431_ip = 130;
                        continue _fun61431
                    }
                case 124:
                    if (var3) {
                        _fun61431_ip = 418;
                        continue _fun61431
                    }
                case 130:
                    if (!var2) {
                        _fun61431_ip = 139;
                        continue _fun61431
                    }
                case 133:
                    if (var6) {
                        _fun61431_ip = 359;
                        continue _fun61431
                    }
                case 139:
                    var4 = _closure2_slot6;
                    var7 = var4.current;
                    var4 = 5;
                    if (!(var7 < var4)) {
                        _fun61431_ip = 359;
                        continue _fun61431
                    }
                case 161:
                    var4 = _closure2_slot4;
                    var9 = undefined;
                    var3 = true;
                    var3 = var4.bind(var9)(var3);
                    var7 = global;
                    var4 = var7.Promise;
                    var3 = var4.all;
                    if (var2) {
                        _fun61431_ip = 223;
                        continue _fun61431
                    }
                case 191:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var2 = 8;
                    var2 = var10[var2];
                    var8 = var8.bind(var9)(var2);
                    var2 = var8.fetchSubscriptions;
                    var8 = var2.bind(var8)();
                    _fun61431_ip = 239;
                    continue _fun61431;
                case 223:
                    var10 = var7.Promise;
                    var2 = var10.resolve;
                    var8 = var2.bind(var10)();
                case 239:
                    var2 = new Array(2);
                    var2[0] = var8;
                    if (var6) {
                        _fun61431_ip = 282;
                        continue _fun61431
                    }
                case 250:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var6 = 9;
                    var6 = var10[var6];
                    var8 = var8.bind(var9)(var6);
                    var6 = var8.fetchUserTrialOffer;
                    var6 = var6.bind(var8)();
                    _fun61431_ip = 298;
                    continue _fun61431;
                case 282:
                    var8 = var7.Promise;
                    var7 = var8.resolve;
                    var6 = var7.bind(var8)();
                case 298:
                    var2[1] = var6;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot6;
                        var3 = var2.current;
                        var1 = 1;
                        var1 = var3 + var1;
                        var2.current = var1;
                        var1 = _closure2_slot7;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.catch;
                    var2 = function() { // Environment: var1
                        var3 = _closure1_slot2;
                        var7 = _closure1_slot3;
                        var0 = 10;
                        var2 = var7[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.presentFailedToast;
                        var6 = _closure1_slot0;
                        var1 = 11;
                        var4 = var7[var1];
                        var4 = var6.bind(var0)(var4);
                        var5 = var4.intl;
                        var4 = var5.string;
                        var1 = var7[var1];
                        var1 = var6.bind(var0)(var1);
                        var1 = var1.t;
                        var1 = var1.R0RpRX;
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.finally;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var0 = false;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun61431_ip = 525;
                    continue _fun61431;
                case 359:
                    var1 = _closure2_slot1;
                    var3 = undefined;
                    var1 = var1.bind(var3)();
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 12;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.getBestActiveInput;
                    var1 = var1.bind(var2)();
                    if (!(var0 != var1)) {
                        _fun61431_ip = 525;
                        continue _fun61431
                    }
                case 406:
                    var0 = var1.closeCustomKeyboard;
                    var0 = var0.bind(var1)();
                    _fun61431_ip = 525;
                    continue _fun61431;
                case 418:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 7;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var4 = {};
                    var6 = _closure2_slot2;
                    var4.page = var6;
                    var6 = _closure1_slot9;
                    var6 = var6.BUY;
                    var4.objectType = var6;
                    var1.analyticsLocation = var4;
                    var4 = _closure2_slot5;
                    var1.analyticsLocations = var4;
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot8;
                    if (var4) {
                        _fun61431_ip = 504;
                        continue _fun61431
                    }
                case 496:
                    var4 = var5.TIER_2;
                    _fun61431_ip = 510;
                    continue _fun61431;
                case 504:
                    var4 = var5.TIER_0;
                case 510:
                    var1.premiumType = var4;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                case 525:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var1, var3);
        var _closure2_slot7 = var1;
        var0 = {};
        var0.loading = var2;
        var0.onPress = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3078, 6608, 1615, 660, 5690, 7014, 3404, 7187, 3108, 1234, 3679, 2]);