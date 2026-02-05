// modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.NoticeTypes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumSubscriptionSKUs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var6 = var3.SECOND;
    var3 = 10;
    var3 = var3 * var6;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun103200: for (var _fun103200_ip = 0;;) switch (_fun103200_ip) {
            case 0:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var6 = undefined;
                var8 = var2.bind(var6)(var0);
                var5 = var8.useStateFromStores;
                var0 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot3;
                    var0 = var1.getNoticeType;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var5.bind(var8)(var3, var0);
                var0 = 5;
                var0 = var4[var0];
                var2 = var2.bind(var6)(var0);
                var0 = var2.usePremiumTrialOffer;
                var2 = var0.bind(var2)();
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var4[var0];
                var5 = var3.bind(var6)(var0);
                var3 = null;
                var0 = var3 != var2;
                var4 = 0;
                if (!var0) {
                    _fun103200_ip = 146;
                    continue _fun103200
                }
            case 106:
                var0 = var2.expires_at;
                var0 = var3 != var0;
                var4 = 0;
                if (!var0) {
                    _fun103200_ip = 146;
                    continue _fun103200
                }
            case 121:
                var0 = global;
                var10 = var0.Date;
                var9 = var10.parse;
                var0 = var2.expires_at;
                var4 = var9.bind(var10)(var0);
            case 146:
                var0 = _closure1_slot6;
                var4 = var5.bind(var6)(var4, var0);
                var0 = var3 != var2;
                if (!var0) {
                    _fun103200_ip = 167;
                    continue _fun103200
                }
            case 163:
                var0 = var3 != var8;
            case 167:
                if (!var0) {
                    _fun103200_ip = 204;
                    continue _fun103200
                }
            case 170:
                var5 = _closure1_slot4;
                var5 = var5.PREMIUM_TIER_0_TRIAL_ENDING;
                var5 = var8 === var5;
                if (var5) {
                    _fun103200_ip = 201;
                    continue _fun103200
                }
            case 187:
                var9 = _closure1_slot4;
                var9 = var9.PREMIUM_TIER_2_TRIAL_ENDING;
                var5 = var8 === var9;
            case 201:
                var0 = var5;
            case 204:
                if (!var0) {
                    _fun103200_ip = 310;
                    continue _fun103200
                }
            case 207:
                var5 = var2.subscription_trial;
                var9 = var3 == var5;
                var6 = undefined;
                if (var9) {
                    _fun103200_ip = 228;
                    continue _fun103200
                }
            case 222:
                var6 = var5.sku_id;
            case 228:
                if (!(var3 != var8)) {
                    _fun103200_ip = 296;
                    continue _fun103200
                }
            case 232:
                var5 = _closure1_slot4;
                var5 = var5.PREMIUM_TIER_2_TRIAL_ENDING;
                if (!(var5 !== var8)) {
                    _fun103200_ip = 284;
                    continue _fun103200
                }
            case 246:
                var5 = _closure1_slot4;
                var5 = var5.PREMIUM_TIER_0_TRIAL_ENDING;
                if (!(var5 !== var8)) {
                    _fun103200_ip = 272;
                    continue _fun103200
                }
            case 260:
                var5 = _closure1_slot5;
                var5 = var5.NONE;
                _fun103200_ip = 306;
                continue _fun103200;
            case 272:
                var8 = _closure1_slot5;
                var5 = var8.TIER_0;
                _fun103200_ip = 306;
                continue _fun103200;
            case 284:
                var8 = _closure1_slot5;
                var5 = var8.TIER_2;
                _fun103200_ip = 306;
                continue _fun103200;
            case 296:
                var7 = _closure1_slot5;
                var5 = var7.NONE;
            case 306:
                var0 = var6 === var5;
            case 310:
                if (!var0) {
                    _fun103200_ip = 323;
                    continue _fun103200
                }
            case 313:
                var2 = var2.expires_at;
                var0 = var3 != var2;
            case 323:
                if (!var0) {
                    _fun103200_ip = 365;
                    continue _fun103200
                }
            case 326:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.values;
                var3 = var2.bind(var3)(var4);
                var2 = var3.every;
                var1 = function(arg0) { // Environment: var1
                    var1 = 0;
                    var0 = arg0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 365:
                return var0;
        }
    };
    var2.useShouldShowExpiringTrialOfferCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12504, 660, 1623, 667, 632, 6673, 7082, 2]);