// modules/user_settings/native/premium_marketing/PremiumFeaturesCards.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var8 = 0;
    var4 = var6[var8];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var7 = 1;
    var1 = var6[var7];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot2 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.PremiumTypes;
    var _closure1_slot3 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot4 = var1;
    var1 = 4;
    var1 = var6[var1];
    var9 = var5.bind(var0)(var1);
    var4 = var9.createStyles;
    var1 = {};
    var10 = {};
    var11 = '100%';
    var10.width = var11;
    var1.container = var10;
    var10 = {};
    var11 = 12;
    var10.marginBottom = var11;
    var1.cardWithMargin = var10;
    var1 = var4.bind(var9)(var1);
    var _closure1_slot5 = var1;
    var1 = {};
    var1.TIER_0_LEADING = var8;
    var4 = 'TIER_0_LEADING';
    var1[var8] = var4;
    var1.TIER_2_LEADING = var7;
    var4 = 'TIER_2_LEADING';
    var1[var7] = var4;
    var _closure1_slot6 = var1;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesCards.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: _default, environment: var3
        _fun61536: for (var _fun61536_ip = 0;;) switch (_fun61536_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.style;
                var1 = var0.applicationId;
                var _closure2_slot0 = var1;
                var1 = var0.onPaymentSuccess;
                var _closure2_slot1 = var1;
                var1 = var0.onPaymentDismiss;
                var _closure2_slot2 = var1;
                var2 = var0.order;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun61536_ip = 64;
                    continue _fun61536
                }
            case 51:
                var0 = _closure1_slot6;
                var2 = var0.TIER_0_LEADING;
            case 64:
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot5;
                var4 = var1.bind(var3)();
                _closure2_slot3 = var4;
                var1 = _closure1_slot6;
                var1 = var1.TIER_2_LEADING;
                if (!(var1 !== var2)) {
                    _fun61536_ip = 141;
                    continue _fun61536
                }
            case 101:
                var1 = _closure1_slot6;
                var1 = var1.TIER_0_LEADING;
                var1 = _closure1_slot3;
                var2 = var1.TIER_0;
                var7 = new Array(2);
                var7[0] = var2;
                var1 = var1.TIER_2;
                var7[1] = var1;
                _fun61536_ip = 172;
                continue _fun61536;
            case 141:
                var2 = _closure1_slot3;
                var8 = var2.TIER_2;
                var1 = new Array(2);
                var1[0] = var8;
                var2 = var2.TIER_0;
                var1[1] = var2;
                var7 = var1;
            case 172:
                _closure2_slot4 = var7;
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var8 = var4.container;
                var4 = new Array(2);
                var4[0] = var8;
                var4[1] = var6;
                var0.style = var4;
                var4 = null;
                var6 = var4 == var7;
                var4 = undefined;
                if (var6) {
                    _fun61536_ip = 233;
                    continue _fun61536
                }
            case 218:
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    _fun61537: for (var _fun61537_ip = 0;;) switch (_fun61537_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure1_slot4;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 5;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0.premiumType = var4;
                            var6 = _closure2_slot4;
                            var7 = var6.length;
                            var6 = 1;
                            var7 = var7 - var6;
                            var6 = arg1;
                            var7 = var6 < var7;
                            var6 = undefined;
                            if (!var7) {
                                _fun61537_ip = 80;
                                continue _fun61537
                            }
                        case 70:
                            var7 = _closure2_slot3;
                            var6 = var7.cardWithMargin;
                        case 80:
                            var0.style = var6;
                            var6 = _closure2_slot0;
                            var0.applicationId = var6;
                            var6 = _closure2_slot1;
                            var0.onPaymentSuccess = var6;
                            var5 = _closure2_slot2;
                            var0.onPaymentDismiss = var5;
                            var0 = var3.bind(var2)(var1, var0, var4);
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var5);
            case 233:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.PremiumFeatureCardOrder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1615, 33, 1297, 7634, 2]);