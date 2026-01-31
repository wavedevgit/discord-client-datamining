// modules/premium/hooks/native/useSelectedMarketingMomentActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DismissibleContentGroupName;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/hooks/native/useSelectedMarketingMomentActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useSelectedMarketingMomentActionSheet, environment: var1
        _fun109863: for (var _fun109863_ip = 0;;) switch (_fun109863_ip) {
            case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 2;
                var1 = var6[var5];
                var2 = undefined;
                var7 = var4.bind(var2)(var1);
                var3 = var7.usePromotionMarketingComponent;
                var1 = 3;
                var1 = var6[var1];
                var1 = var4.bind(var2)(var1);
                var1 = var1.MarketingComponentType;
                var1 = var1.MOBILE_BOTTOM_SHEET;
                var3 = var3.bind(var7)(var1);
                var1 = 4;
                var1 = var6[var1];
                var10 = var4.bind(var2)(var1);
                var9 = var10.useSelectedSnowflakeBoundDismissibleContent;
                var4 = null;
                var6 = var4 == var3;
                var1 = undefined;
                if (var6) {
                    _fun109863_ip = 107;
                    continue _fun109863
                }
            case 89:
                var6 = var3.properties;
                var6 = var6.properties;
                var1 = var6.oneofKind;
            case 107:
                var7 = 'mobileBottomSheet';
                var8 = null;
                if (!(var7 === var1)) {
                    _fun109863_ip = 149;
                    continue _fun109863
                }
            case 117:
                var6 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 5;
                var1 = var11[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.DismissibleContent;
                var8 = var1.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
            case 149:
                var6 = var4 == var3;
                var1 = undefined;
                if (var6) {
                    _fun109863_ip = 164;
                    continue _fun109863
                }
            case 158:
                var1 = var3.promotionId;
            case 164:
                var11 = var4 != var1;
                var6 = '';
                if (!var11) {
                    _fun109863_ip = 178;
                    continue _fun109863
                }
            case 175:
                var6 = var1;
            case 178:
                var1 = _closure1_slot3;
                var1 = var1.MAIN_VIEW_TOOLTIPS;
                var1 = var9.bind(var10)(var8, var6, var1);
                var0 = _closure1_slot2;
                var1 = var0.bind(var2)(var1, var5);
                var0 = 0;
                var5 = var1[var0];
                var0 = 1;
                var1 = var1[var0];
                var0 = {};
                var0.marketingMomentContent = var5;
                var5 = var4 == var3;
                var6 = undefined;
                if (var5) {
                    _fun109863_ip = 252;
                    continue _fun109863
                }
            case 234:
                var5 = var3.properties;
                var5 = var5.properties;
                var6 = var5.oneofKind;
            case 252:
                var5 = null;
                if (!(var7 === var6)) {
                    _fun109863_ip = 288;
                    continue _fun109863
                }
            case 258:
                var7 = var4 == var3;
                var6 = undefined;
                if (var7) {
                    _fun109863_ip = 285;
                    continue _fun109863
                }
            case 267:
                var7 = var3.properties;
                var7 = var7.properties;
                var6 = var7.mobileBottomSheet;
            case 285:
                var5 = var6;
            case 288:
                var0.mobileBottomSheetData = var5;
                var4 = var4 == var3;
                var2 = undefined;
                if (var4) {
                    _fun109863_ip = 307;
                    continue _fun109863
                }
            case 302:
                var2 = var3.id;
            case 307:
                var0.componentId = var2;
                var0.markDismissed = var1;
                return var0;
        }
    };
    var2.useSelectedMarketingMomentActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1369, 10515, 9389, 5919, 1358, 2]);