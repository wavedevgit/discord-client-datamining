// modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_PREMIUM_BADGE_ID;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot7 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserProfileThemeTypes;
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: useTieredTenureBadgeClickHandler, environment: var1
        _fun59557: for (var _fun59557_ip = 0;;) switch (_fun59557_ip) {
            case 0:
                var6 = arg0;
                var7 = arg1;
                var8 = arg2;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var7;
                var _closure2_slot2 = var8;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.useIsPremiumSubscriber;
                var2 = _closure1_slot5;
                var2 = var2.TIER_2;
                var5 = var3.bind(var5)(var2);
                var _closure2_slot3 = var5;
                var3 = 'string';
                var2 = typeof var6;
                var2 = var3 === var2;
                if (!var2) {
                    _fun59557_ip = 124;
                    continue _fun59557
                }
            case 87:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 7;
                var3 = var10[var3];
                var9 = var9.bind(var4)(var3);
                var3 = var9.getTieredTenureBadge;
                var9 = var3.bind(var9)(var6);
                var3 = null;
                var2 = var3 != var9;
            case 124:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 8;
                var3 = var10[var3];
                var11 = var9.bind(var4)(var3);
                var10 = var11.useStateFromStores;
                var3 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var10.bind(var11)(var9, var3);
                var3 = _closure1_slot6;
                var3 = var6 === var3;
                if (!var3) {
                    _fun59557_ip = 203;
                    continue _fun59557
                }
            case 183:
                var10 = null;
                var10 = var10 == var9;
                var4 = undefined;
                if (var10) {
                    _fun59557_ip = 199;
                    continue _fun59557
                }
            case 194:
                var4 = var9.id;
            case 199:
                var3 = var7 === var4;
            case 203:
                if (!var3) {
                    _fun59557_ip = 209;
                    continue _fun59557
                }
            case 206:
                var3 = var5;
            case 209:
                if (var2) {
                    _fun59557_ip = 215;
                    continue _fun59557
                }
            case 212:
                var2 = var3;
            case 215:
                var _closure2_slot4 = var2;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var1 = new Array(5);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var2;
                var1[3] = var6;
                var1[4] = var5;
                var0 = function() { // Environment: var0
                    _fun59559: for (var _fun59559_ip = 0;;) switch (_fun59559_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = _closure1_slot9;
                            var1 = var1.YOU_SCREEN;
                            if (!(var2 !== var1)) {
                                _fun59559_ip = 133;
                                continue _fun59559
                            }
                        case 24:
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 10;
                            var1 = var8[var1];
                            var3 = undefined;
                            var7 = var2.bind(var3)(var1);
                            var6 = var7.openLazy;
                            var2 = _closure1_slot0;
                            var1 = 12;
                            var1 = var8[var1];
                            var9 = var2.bind(var3)(var1);
                            var1 = 11;
                            var5 = var8[var1];
                            var1 = var8.paths;
                            var5 = var9.bind(var3)(var5, var1);
                            var1 = 13;
                            var1 = var8[var1];
                            var1 = var2.bind(var3)(var1);
                            var12 = var1.TIERED_TENURE_BADGE_ACTION_SHEET_KEY;
                            var2 = {};
                            var1 = _closure2_slot1;
                            var2.userId = var1;
                            var10 = 'stack';
                            var14 = var7;
                            var13 = var5;
                            var11 = var2;
                            var1 = var14[var6](var13, var12, var11, var10, var9);
                            _fun59559_ip = 183;
                            continue _fun59559;
                        case 133:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.openUserSettings;
                            var1 = {};
                            var5 = _closure1_slot8;
                            var5 = var5.PREMIUM;
                            var1.screen = var5;
                            var1 = var2.bind(var3)(var1);
                        case 183:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun59559_ip = 262;
                                continue _fun59559
                            }
                        case 190:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot7;
                            var1 = var0.TIERED_TENURE_BADGE_CLICKED;
                            var0 = {};
                            var5 = _closure2_slot0;
                            var0.badge = var5;
                            var5 = _closure2_slot1;
                            var0.viewed_user_id = var5;
                            var4 = _closure2_slot3;
                            var0.premium_type = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 262:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var0, var1);
                var0 = null;
                if (!var2) {
                    _fun59557_ip = 271;
                    continue _fun59557
                }
            case 268:
                var0 = var1;
            case 271:
                return var0;
        }
    };
    var2.useTieredTenureBadgeClickHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1613, 1615, 7332, 660, 6920, 7333, 7284, 566, 5884, 3237, 7310, 1307, 7310, 795, 2]);