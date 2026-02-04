// modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 1;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var0 = var3.useTrackAppLauncherItemImpressionOnFirstView;
        var0 = var0.bind(var3)();
        var5 = var0.trackAppLauncherItemImpressionOnFirstView;
        var _closure2_slot0 = var5;
        var0 = {};
        var4 = _closure1_slot2;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var2 = var0.viewableItems;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun107724: for (var _fun107724_ip = 0;;) switch (_fun107724_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.item;
                        var3 = var5.type;
                        var6 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var4 = 2;
                        var2 = var0[var4];
                        var0 = undefined;
                        var2 = var6.bind(var0)(var2);
                        var2 = var2.AppLauncherHomeListItemType;
                        var2 = var2.RECOMMENDATION_APP;
                        if (!(var3 !== var2)) {
                            _fun107724_ip = 355;
                            continue _fun107724
                        }
                    case 57:
                        var3 = var5.type;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var4];
                        var2 = var6.bind(var0)(var2);
                        var2 = var2.AppLauncherHomeListItemType;
                        var2 = var2.RECOMMENDATION_BANNER_CARD;
                        if (!(var3 !== var2)) {
                            _fun107724_ip = 311;
                            continue _fun107724
                        }
                    case 98:
                        var3 = var5.type;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var4];
                        var2 = var6.bind(var0)(var2);
                        var2 = var2.AppLauncherHomeListItemType;
                        var2 = var2.SHELF_ITEM;
                        if (!(var3 !== var2)) {
                            _fun107724_ip = 277;
                            continue _fun107724
                        }
                    case 139:
                        var2 = var5.type;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var4];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.AppLauncherHomeListItemType;
                        var1 = var1.SHELF_ITEM_TUPLE;
                        if (!(var2 === var1)) {
                            _fun107724_ip = 275;
                            continue _fun107724
                        }
                    case 177:
                        var13 = var5.shelfItem1SectionPosition;
                        var6 = var5.shelfItem2SectionPosition;
                        var1 = var5.shelfItem1;
                        var1 = var1.application;
                        var12 = var1.id;
                        var1 = var5.shelfItem2;
                        var2 = null;
                        var3 = var2 == var1;
                        var4 = undefined;
                        if (var3) {
                            _fun107724_ip = 232;
                            continue _fun107724
                        }
                    case 222:
                        var1 = var1.application;
                        var4 = var1.id;
                    case 232:
                        var1 = var5.shelfItem1;
                        var1 = var1.application;
                        var11 = var1.flags;
                        var1 = var5.shelfItem2;
                        var2 = var2 == var1;
                        var3 = undefined;
                        if (var2) {
                            _fun107724_ip = 273;
                            continue _fun107724
                        }
                    case 263:
                        var1 = var1.application;
                        var3 = var1.flags;
                    case 273:
                        _fun107724_ip = 387;
                        continue _fun107724;
                    case 275:
                        return var0;
                    case 277:
                        var13 = var5.sectionPosition;
                        var12 = var5.applicationId;
                        var1 = var5.section;
                        var1 = var1.application;
                        var11 = var1.flags;
                        var4 = undefined;
                        var6 = undefined;
                        var3 = undefined;
                        _fun107724_ip = 387;
                        continue _fun107724;
                    case 311:
                        var13 = var5.sectionPosition;
                        var1 = var5.item;
                        var1 = var1.application;
                        var12 = var1.id;
                        var1 = var5.item;
                        var1 = var1.application;
                        var11 = var1.flags;
                        var4 = undefined;
                        var6 = undefined;
                        var3 = undefined;
                        _fun107724_ip = 387;
                        continue _fun107724;
                    case 355:
                        var13 = var5.sectionPosition;
                        var1 = var5.application;
                        var12 = var1.id;
                        var1 = var5.application;
                        var11 = var1.flags;
                        var4 = undefined;
                        var6 = undefined;
                        var3 = undefined;
                    case 387:
                        var8 = _closure2_slot0;
                        var2 = {};
                        var15 = var5.sectionName;
                        var7 = global;
                        var9 = var7.HermesInternal;
                        var14 = var9.concat;
                        var10 = 'sectionName:';
                        var9 = ' applicationId:';
                        var14 = var14.bind(var10)(var15, var9, var12);
                        var2.itemKey = var14;
                        var14 = var5.sectionName;
                        var2.sectionName = var14;
                        var2.sectionPosition = var13;
                        var13 = var5.sectionOverallPosition;
                        var2.sectionOverallPosition = var13;
                        var2.applicationId = var12;
                        var2.applicationFlags = var11;
                        var2 = var8.bind(var0)(var2);
                        var8 = null;
                        var2 = var8 != var4;
                        if (!var2) {
                            _fun107724_ip = 493;
                            continue _fun107724
                        }
                    case 489:
                        var2 = var8 != var6;
                    case 493:
                        if (!var2) {
                            _fun107724_ip = 572;
                            continue _fun107724
                        }
                    case 496:
                        var2 = _closure2_slot0;
                        var1 = {};
                        var8 = var5.sectionName;
                        var7 = var7.HermesInternal;
                        var7 = var7.concat;
                        var7 = var7.bind(var10)(var8, var9, var4);
                        var1.itemKey = var7;
                        var7 = var5.sectionName;
                        var1.sectionName = var7;
                        var1.sectionPosition = var6;
                        var5 = var5.sectionOverallPosition;
                        var1.sectionOverallPosition = var5;
                        var1.applicationId = var4;
                        var1.applicationFlags = var3;
                        var1 = var2.bind(var0)(var1);
                    case 572:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 13904, 13892, 2]);