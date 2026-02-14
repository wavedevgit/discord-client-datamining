// modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportAll;
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
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 1;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var0 = var3.useTrackAppLauncherItemImpressionOnFirstView;
        var0 = var0.bind(var3)();
        var5 = var0.trackAppLauncherItemImpressionOnFirstView;
        var _closure2_slot0 = var5;
        var0 = {};
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var2 = var0.viewableItems;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun108372: for (var _fun108372_ip = 0;;) switch (_fun108372_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = var0.item;
                        var2 = var9.type;
                        var3 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var5 = 2;
                        var1 = var0[var5];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.AppLauncherHomeListItemType;
                        var1 = var1.RECOMMENDATION_APP;
                        if (!(var2 !== var1)) {
                            _fun108372_ip = 387;
                            continue _fun108372
                        }
                    case 57:
                        var2 = var9.type;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.AppLauncherHomeListItemType;
                        var1 = var1.RECOMMENDATION_BANNER_CARD;
                        if (!(var2 !== var1)) {
                            _fun108372_ip = 317;
                            continue _fun108372
                        }
                    case 98:
                        var2 = var9.type;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.AppLauncherHomeListItemType;
                        var1 = var1.SHELF_ITEM;
                        if (!(var2 !== var1)) {
                            _fun108372_ip = 280;
                            continue _fun108372
                        }
                    case 139:
                        var2 = var9.type;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.AppLauncherHomeListItemType;
                        var1 = var1.SHELF_ITEM_TUPLE;
                        if (!(var2 === var1)) {
                            _fun108372_ip = 278;
                            continue _fun108372
                        }
                    case 177:
                        var8 = var9.shelfItem1SectionPosition;
                        var10 = var9.shelfItem2SectionPosition;
                        var1 = var9.shelfItem1;
                        var1 = var1.application;
                        var6 = var1.id;
                        var1 = var9.shelfItem2;
                        var2 = null;
                        var3 = var2 == var1;
                        var5 = undefined;
                        if (var3) {
                            _fun108372_ip = 232;
                            continue _fun108372
                        }
                    case 222:
                        var1 = var1.application;
                        var5 = var1.id;
                    case 232:
                        var1 = var9.shelfItem1;
                        var1 = var1.application;
                        var16 = var1.flags;
                        var1 = var9.shelfItem2;
                        var2 = var2 == var1;
                        var7 = undefined;
                        if (var2) {
                            _fun108372_ip = 273;
                            continue _fun108372
                        }
                    case 263:
                        var1 = var1.application;
                        var7 = var1.flags;
                    case 273:
                        _fun108372_ip = 445;
                        continue _fun108372;
                    case 278:
                        return var0;
                    case 280:
                        var8 = var9.sectionPosition;
                        var6 = var9.applicationId;
                        var1 = var9.section;
                        var1 = var1.application;
                        var16 = var1.flags;
                        var5 = undefined;
                        var10 = undefined;
                        var7 = undefined;
                        _fun108372_ip = 445;
                        continue _fun108372;
                    case 317:
                        var8 = var9.sectionPosition;
                        var1 = var9.item;
                        var1 = var1.application;
                        var6 = var1.id;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var1 = 3;
                        var1 = var12[var1];
                        var12 = var11.bind(var0)(var1);
                        var11 = var12.getApplicationFlags;
                        var1 = var9.item;
                        var1 = var1.application;
                        var16 = var11.bind(var12)(var1);
                        var5 = undefined;
                        var10 = undefined;
                        var7 = undefined;
                        _fun108372_ip = 445;
                        continue _fun108372;
                    case 387:
                        var8 = var9.sectionPosition;
                        var1 = var9.application;
                        var6 = var1.id;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var1 = 3;
                        var1 = var12[var1];
                        var12 = var11.bind(var0)(var1);
                        var11 = var12.getApplicationFlags;
                        var1 = var9.application;
                        var16 = var11.bind(var12)(var1);
                        var5 = undefined;
                        var10 = undefined;
                        var7 = undefined;
                    case 445:
                        var3 = _closure2_slot0;
                        var2 = {};
                        var15 = var9.sectionName;
                        var11 = global;
                        var12 = var11.HermesInternal;
                        var12 = var12.concat;
                        var14 = 'sectionName:';
                        var13 = ' applicationId:';
                        var12 = var12.bind(var14)(var15, var13, var6);
                        var2.itemKey = var12;
                        var12 = var9.sectionName;
                        var2.sectionName = var12;
                        var2.sectionPosition = var8;
                        var8 = var9.sectionOverallPosition;
                        var2.sectionOverallPosition = var8;
                        var2.applicationId = var6;
                        var12 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var8 = 4;
                        var6 = var6[var8];
                        var15 = var12.bind(var0)(var6);
                        var12 = var15.asUintN;
                        var6 = 32;
                        var12 = var12.bind(var15)(var6, var16);
                        var2.applicationFlags = var12;
                        var2 = var3.bind(var0)(var2);
                        var3 = null;
                        var2 = var3 != var5;
                        if (!var2) {
                            _fun108372_ip = 586;
                            continue _fun108372
                        }
                    case 582:
                        var2 = var3 != var10;
                    case 586:
                        if (!var2) {
                            _fun108372_ip = 703;
                            continue _fun108372
                        }
                    case 589:
                        var2 = _closure2_slot0;
                        var1 = {};
                        var12 = var9.sectionName;
                        var11 = var11.HermesInternal;
                        var11 = var11.concat;
                        var11 = var11.bind(var14)(var12, var13, var5);
                        var1.itemKey = var11;
                        var11 = var9.sectionName;
                        var1.sectionName = var11;
                        var1.sectionPosition = var10;
                        var9 = var9.sectionOverallPosition;
                        var1.sectionOverallPosition = var9;
                        var1.applicationId = var5;
                        var5 = var3 != var7;
                        var3 = undefined;
                        if (!var5) {
                            _fun108372_ip = 693;
                            continue _fun108372
                        }
                    case 664:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.asUintN;
                        var3 = var4.bind(var5)(var6, var7);
                    case 693:
                        var1.applicationFlags = var3;
                        var1 = var2.bind(var0)(var1);
                    case 703:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.trackAppLauncherHomeItemImpression = var1;
        return var0;
    };
    var2.useTrackAppLauncherHomeItemImpression = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 13959, 13947, 5407, 484, 2]);