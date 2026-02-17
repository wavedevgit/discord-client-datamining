// modules/premium/hooks/usePromotionMarketingComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/hooks/usePromotionMarketingComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun83119: for (var _fun83119_ip = 0;;) switch (_fun83119_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var1 = function() { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.maybeFetchActivePromotions;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var4.bind(var5)(var1, var0);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 5;
                var0 = var6[var4];
                var8 = undefined;
                var10 = var5.bind(var8)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot5;
                var7 = new Array(2);
                var7[0] = var0;
                var1 = _closure1_slot4;
                var7[1] = var1;
                var1 = function() { // Environment: var3
                    _fun83121: for (var _fun83121_ip = 0;;) switch (_fun83121_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getMarketingComponentByType;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun83121_ip = 190;
                                continue _fun83121
                            }
                        case 34:
                            var7 = var1.promotionId;
                            var6 = _closure1_slot5;
                            var5 = var6.getPromotionByTypeAndId;
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 6;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var8.bind(var4)(var2);
                            var2 = var2.PromotionTypes;
                            var2 = var2.MARKETING_MOMENT;
                            var2 = var5.bind(var6)(var2, var7);
                            var5 = var0 == var2;
                            if (var5) {
                                _fun83121_ip = 103;
                                continue _fun83121
                            }
                        case 97:
                            var4 = var2.trialId;
                        case 103:
                            if (!(var0 != var4)) {
                                _fun83121_ip = 186;
                                continue _fun83121
                            }
                        case 107:
                            var4 = _closure1_slot4;
                            var3 = var4.getUserTrialOffer;
                            var2 = var2.trialId;
                            var3 = var3.bind(var4)(var2);
                            if (!(var0 != var3)) {
                                _fun83121_ip = 188;
                                continue _fun83121
                            }
                        case 132:
                            var2 = var3.expires_at;
                            if (!(var0 != var2)) {
                                _fun83121_ip = 186;
                                continue _fun83121
                            }
                        case 142:
                            var2 = global;
                            var5 = var2.Date;
                            var4 = var5.parse;
                            var3 = var3.expires_at;
                            var3 = var4.bind(var5)(var3);
                            var4 = var2.Date;
                            var2 = var4.now;
                            var2 = var2.bind(var4)();
                            if (!(!(var3 < var2))) {
                                _fun83121_ip = 188;
                                continue _fun83121
                            }
                        case 186:
                            return var1;
                        case 188:
                            return var0;
                        case 190:
                            return var0;
                    }
                };
                var1 = var9.bind(var10)(var7, var1);
                var _closure2_slot1 = var1;
                var4 = var6[var4];
                var6 = var5.bind(var8)(var4);
                var5 = var6.useStateFromStores;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var3
                    _fun83122: for (var _fun83122_ip = 0;;) switch (_fun83122_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getPromotionByTypeAndId;
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 6;
                            var0 = var4[var0];
                            var4 = undefined;
                            var0 = var1.bind(var4)(var0);
                            var0 = var0.PromotionTypes;
                            var1 = var0.MARKETING_MOMENT;
                            var6 = _closure2_slot1;
                            var0 = null;
                            var6 = var0 == var6;
                            if (var6) {
                                _fun83122_ip = 73;
                                continue _fun83122
                            }
                        case 63:
                            var5 = _closure2_slot1;
                            var4 = var5.promotionId;
                        case 73:
                            var5 = var0 != var4;
                            var0 = '';
                            if (!var5) {
                                _fun83122_ip = 87;
                                continue _fun83122
                            }
                        case 84:
                            var0 = var4;
                        case 87:
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4, var0);
                var0 = null;
                var5 = var0 == var4;
                var7 = undefined;
                if (var5) {
                    _fun83119_ip = 154;
                    continue _fun83119
                }
            case 148:
                var7 = var4.endDate;
            case 154:
                var _closure2_slot2 = var7;
                var6 = _closure1_slot3;
                var5 = var6.useState;
                var4 = false;
                var5 = var5.bind(var6)(var4);
                var4 = _closure1_slot2;
                var2 = 2;
                var5 = var4.bind(var8)(var5, var2);
                var2 = 0;
                var2 = var5[var2];
                var4 = 1;
                var4 = var5[var4];
                var _closure2_slot3 = var4;
                var4 = var6.useRef;
                var4 = var4.bind(var6)(var0);
                var _closure2_slot4 = var4;
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var7;
                var3 = function() { // Environment: var3
                    _fun83123: for (var _fun83123_ip = 0;;) switch (_fun83123_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun83123_ip = 52;
                                continue _fun83123
                            }
                        case 15:
                            var4 = _closure2_slot3;
                            var1 = undefined;
                            var3 = false;
                            var3 = var4.bind(var1)(var3);
                            var3 = global;
                            var4 = var3.clearTimeout;
                            var3 = _closure2_slot4;
                            var3 = var3.current;
                            var3 = var4.bind(var1)(var3);
                            return var1;
                        case 52:
                            var3 = _closure2_slot2;
                            var1 = var3.getTime;
                            var4 = var1.bind(var3)();
                            var1 = global;
                            var5 = var1.Date;
                            var3 = var5.now;
                            var3 = var3.bind(var5)();
                            var5 = var4 - var3;
                            var3 = 0;
                            if (!(var5 > var3)) {
                                _fun83123_ip = 103;
                                continue _fun83123
                            }
                        case 93:
                            var4 = 86400000;
                            if (!(!(var5 < var4))) {
                                _fun83123_ip = 122;
                                continue _fun83123
                            }
                        case 103:
                            if (!(var5 <= var3)) {
                                _fun83123_ip = 184;
                                continue _fun83123
                            }
                        case 107:
                            var6 = _closure2_slot3;
                            var4 = undefined;
                            var3 = true;
                            var3 = var6.bind(var4)(var3);
                            _fun83123_ip = 184;
                            continue _fun83123;
                        case 122:
                            var6 = _closure2_slot3;
                            var4 = undefined;
                            var3 = false;
                            var3 = var6.bind(var4)(var3);
                            var6 = var1.clearTimeout;
                            var3 = _closure2_slot4;
                            var3 = var3.current;
                            var3 = var6.bind(var4)(var3);
                            var2 = _closure2_slot4;
                            var3 = var1.setTimeout;
                            var1 = function() { // Environment: var0
                                var2 = _closure2_slot3;
                                var0 = undefined;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1, var5);
                            var2.current = var1;
                        case 184:
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var0 = _closure2_slot4;
                                var1 = var0.current;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var0 = null;
                if (var2) {
                    _fun83119_ip = 252;
                    continue _fun83119
                }
            case 249:
                var0 = var1;
            case 252:
                return var0;
        }
    };
    var2.usePromotionMarketingComponent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 6723, 7165, 7185, 566, 6948, 2]);