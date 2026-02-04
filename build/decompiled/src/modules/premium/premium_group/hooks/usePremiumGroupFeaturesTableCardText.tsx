// modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.getPremiumGroupProductName;
    var _closure1_slot5 = var6;
    var3 = var3.HELP_CENTER_LINK;
    var _closure1_slot6 = var3;
    var3 = function arg0, arg1, arg2() {
        _fun59335: for (var _fun59335_ip = 0;;) switch (_fun59335_ip) {
            case 0:
                var8 = arg1;
                var3 = arg2;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var7 = undefined;
                var0 = var1.bind(var7)(var0);
                var0 = var0.PremiumSubscriptionGroupRole;
                var1 = var0.PRIMARY;
                var0 = arg0;
                if (!(var0 !== var1)) {
                    _fun59335_ip = 146;
                    continue _fun59335
                }
            case 50:
                var1 = null;
                var0 = var1 == var8;
                if (var0) {
                    _fun59335_ip = 141;
                    continue _fun59335
                }
            case 59:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 5;
                var0 = var9[var0];
                var0 = var4.bind(var7)(var0);
                var6 = var0.intl;
                var5 = var6.format;
                var4 = _closure1_slot1;
                var0 = 6;
                var0 = var9[var0];
                var0 = var4.bind(var7)(var0);
                var4 = var0.Nu9LNm;
                var0 = {};
                var0.primaryName = var8;
                var8 = _closure1_slot5;
                var8 = var8.bind(var7)();
                var0.premiumGroupProductName = var8;
                var1 = var5.bind(var6)(var4, var0);
            case 141:
                _fun59335_ip = 309;
                continue _fun59335;
            case 146:
                var5 = null;
                var4 = var5 == var3;
                var0 = null;
                if (var4) {
                    _fun59335_ip = 306;
                    continue _fun59335
                }
            case 160:
                var6 = var3.planIdFromItems;
                var3 = var5 == var6;
                var0 = null;
                if (var3) {
                    _fun59335_ip = 306;
                    continue _fun59335
                }
            case 178:
                var4 = _closure1_slot3;
                var3 = var4.get;
                var4 = var3.bind(var4)(var6);
                var3 = var5 == var4;
                var0 = null;
                if (var3) {
                    _fun59335_ip = 306;
                    continue _fun59335
                }
            case 201:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 3;
                var3 = var8[var3];
                var5 = var5.bind(var7)(var3);
                var3 = var5.getPrice;
                var5 = var3.bind(var5)(var6);
                var3 = _closure1_slot0;
                var2 = 4;
                var6 = var8[var2];
                var10 = var3.bind(var7)(var6);
                var9 = var10.formatPrice;
                var6 = var5.amount;
                var5 = var5.currency;
                var6 = var9.bind(var10)(var6, var5);
                var5 = var4.interval;
                var4 = var4.intervalCount;
                var2 = var8[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.formatRate;
                var0 = var2.bind(var3)(var6, var5, var4);
            case 306:
                var1 = var0;
            case 309:
                var0 = null;
                var2 = var0 == var1;
                var0 = '...';
                if (var2) {
                    _fun59335_ip = 327;
                    continue _fun59335
                }
            case 324:
                var0 = var1;
            case 327:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun59336: for (var _fun59336_ip = 0;;) switch (_fun59336_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 7;
                var2 = var0[var4];
                var7 = undefined;
                var2 = var5.bind(var7)(var2);
                var2 = var2.PremiumSubscriptionGroupRole;
                var8 = var2.MEMBER;
                var3 = _closure1_slot1;
                var2 = 8;
                var2 = var0[var2];
                var3 = var3.bind(var7)(var2);
                var2 = {};
                var9 = true;
                var2.useCachedData = var9;
                var8 = var1 === var8;
                var2.fetch = var8;
                var3 = var3.bind(var7)(var2);
                var2 = 9;
                var2 = var0[var2];
                var10 = var5.bind(var7)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot4;
                    var0 = var1.getPremiumGroupSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var9.bind(var10)(var8, var2);
                var0 = var0[var4];
                var0 = var5.bind(var7)(var0);
                var0 = var0.PremiumSubscriptionGroupRole;
                var0 = var0.UNSPECIFIED;
                if (!(var1 !== var0)) {
                    _fun59336_ip = 384;
                    continue _fun59336
                }
            case 149:
                var0 = _closure1_slot7;
                var2 = var0.bind(var7)(var1, var3, var2);
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var3.bind(var7)(var0);
                var0 = var0.PremiumSubscriptionGroupRole;
                var0 = var0.PRIMARY;
                if (!(var1 !== var0)) {
                    _fun59336_ip = 286;
                    continue _fun59336
                }
            case 193:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var0 = var1.bind(var7)(var0);
                var4 = var0.intl;
                var3 = var4.format;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var0 = var1.bind(var7)(var0);
                var1 = arg1;
                if (var1) {
                    _fun59336_ip = 259;
                    continue _fun59336
                }
            case 249:
                var1 = var0.qqfnOm;
                _fun59336_ip = 267;
                continue _fun59336;
            case 259:
                var1 = var0["xF+upx"];
            case 267:
                var0 = {};
                var5 = _closure1_slot6;
                var0.helpCenterLink = var5;
                var1 = var3.bind(var4)(var1, var0);
                _fun59336_ip = 370;
                continue _fun59336;
            case 286:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var0 = var3.bind(var7)(var0);
                var5 = var0.intl;
                var4 = var5.format;
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var8[var0];
                var0 = var3.bind(var7)(var0);
                var3 = var0["+R/K74"];
                var0 = {};
                var8 = _closure1_slot6;
                var0.helpCenterLink = var8;
                var6 = _closure1_slot5;
                var6 = var6.bind(var7)();
                var0.premiumGroupProductName = var6;
                var1 = var4.bind(var5)(var3, var0);
            case 370:
                var0 = {};
                var0.subheaderString = var2;
                var0.bodyString = var1;
                return var0;
            case 384:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3116, 3117, 3124, 3109, 4606, 1234, 2436, 1637, 7281, 566, 2]);