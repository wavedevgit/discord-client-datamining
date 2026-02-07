// modules/premium/native/gifting/PremiumGiftSuccess.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {
            'backgroundColor': null,
            'paddingHorizontal': null,
            'flex': 1,
            'alignContent': 'center',
            'justifyContent': 'center',
            'flexGrow': 1
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 5;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_16;
        var1.paddingHorizontal = var6;
        var0.bodyContainer = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_16;
        var1.paddingTop = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var7 = var6.PX_16;
        var6 = arg0;
        var6 = var6 + var7;
        var1.paddingBottom = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_16;
        var1.paddingHorizontal = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_8;
        var1.gap = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.shadows;
        var8 = var2.SHADOW_TOP_LOW;
        var9 = var1;
        var2 = copyDataProperties(var9, var8);
        var0.actionContainer = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gifting/PremiumGiftSuccess.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun76009: for (var _fun76009_ip = 0;;) switch (_fun76009_ip) {
            case 0:
                var12 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 6;
                var0 = var8[var0];
                var3 = undefined;
                var0 = var12.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var1 = var0.bottom;
                var0 = _closure1_slot9;
                var9 = var0.bind(var3)(var1);
                var6 = _closure1_slot0;
                var0 = 7;
                var0 = var8[var0];
                var1 = var6.bind(var3)(var0);
                var0 = var1.useNativeGiftContext;
                var0 = var0.bind(var1)();
                var1 = var0.recipientUser;
                var7 = var0.giftCodeRecord;
                var10 = var0.selectedGiftingPromotionReward;
                var0 = 8;
                var0 = var8[var0];
                var13 = var12.bind(var3)(var0);
                var0 = null;
                var11 = var0 != var7;
                var5 = 'Gift code record cannot be null on success screen';
                var5 = var13.bind(var3)(var11, var5);
                var5 = 9;
                var5 = var8[var5];
                var5 = var12.bind(var3)(var5);
                var11 = var5.bind(var3)();
                var _closure2_slot0 = var11;
                var5 = 10;
                var5 = var8[var5];
                var5 = var12.bind(var3)(var5);
                var12 = var5.bind(var3)();
                var _closure2_slot1 = var12;
                var5 = 11;
                var5 = var8[var5];
                var8 = var6.bind(var3)(var5);
                var6 = var8.useGetOrFetchPurchase;
                var5 = false;
                var6 = var6.bind(var8)(var10, var5);
                var10 = _closure1_slot3;
                var8 = var10.useEffect;
                var5 = new Array(2);
                var5[0] = var12;
                var5[1] = var11;
                var2 = function() { // Environment: var2
                    _fun76010: for (var _fun76010_ip = 0;;) switch (_fun76010_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun76010_ip = 30;
                                continue _fun76010
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var2 = var2.reminderNotice;
                            var0 = var3 != var2;
                        case 30:
                            if (!var0) {
                                _fun76010_ip = 37;
                                continue _fun76010
                            }
                        case 33:
                            var0 = _closure2_slot1;
                        case 37:
                            if (!var0) {
                                _fun76010_ip = 141;
                                continue _fun76010
                            }
                        case 40:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 12;
                            var0 = var7[var0];
                            var1 = undefined;
                            var4 = var6.bind(var1)(var0);
                            var3 = var4.markVersionedDismissibleContentAsDismissed;
                            var0 = 13;
                            var0 = var7[var0];
                            var0 = var6.bind(var1)(var0);
                            var0 = var0.DismissibleContent;
                            var2 = var0.GIFTING_PROMOTION_REMINDER;
                            var0 = 14;
                            var0 = var7[var0];
                            var1 = var6.bind(var1)(var0);
                            var0 = var1.getGiftingPromotionDismissibleContentVersion;
                            var1 = var0.bind(var1)();
                            var0 = {};
                            var5 = _closure1_slot5;
                            var5 = var5.INDIRECT_ACTION;
                            var0.dismissAction = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 141:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var8.bind(var10)(var2, var5);
                if (!(var0 != var1)) {
                    _fun76009_ip = 257;
                    continue _fun76009
                }
            case 223:
                var8 = _closure1_slot6;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 16;
                var2 = var10[var2];
                var5 = var5.bind(var3)(var2);
                var2 = {};
                var5 = var8.bind(var3)(var5, var2);
                _fun76009_ip = 294;
                continue _fun76009;
            case 257:
                var10 = _closure1_slot6;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 15;
                var2 = var11[var2];
                var8 = var8.bind(var3)(var2);
                var2 = {};
                var2.giftCodeRecord = var7;
                var5 = var10.bind(var3)(var8, var2);
            case 294:
                if (!(var0 == var6)) {
                    _fun76009_ip = 387;
                    continue _fun76009
                }
            case 298:
                if (!(var0 != var1)) {
                    _fun76009_ip = 342;
                    continue _fun76009
                }
            case 302:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 16;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PremiumGiftDMSuccessActions;
                var0 = {};
                var8 = var2.bind(var3)(var1, var0);
                _fun76009_ip = 385;
                continue _fun76009;
            case 342:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 15;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PremiumGiftSuccessActions;
                var0 = {};
                var0.giftCodeRecord = var7;
                var8 = var2.bind(var3)(var1, var0);
            case 385:
                _fun76009_ip = 424;
                continue _fun76009;
            case 387:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 17;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.purchase = var6;
                var8 = var2.bind(var3)(var1, var0);
            case 424:
                var2 = _closure1_slot8;
                var1 = _closure1_slot7;
                var0 = {};
                var7 = _closure1_slot6;
                var6 = _closure1_slot4;
                var4 = {};
                var10 = var9.bodyContainer;
                var4.style = var10;
                var4.children = var5;
                var5 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var9 = var9.actionContainer;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1369, 33, 1297, 671, 1568, 9494, 44, 9500, 9518, 5778, 1360, 1358, 9610, 9611, 9612, 9613, 2]);