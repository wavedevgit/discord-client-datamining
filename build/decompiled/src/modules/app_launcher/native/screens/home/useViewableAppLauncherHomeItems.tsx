// modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx
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
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useViewableAppLauncherHomeItems, environment: var1
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 2;
        var2 = var7[var1];
        var4 = undefined;
        var8 = var6.bind(var4)(var2);
        var2 = var8.useSharedValue;
        var5 = false;
        var2 = var2.bind(var8)(var5);
        var _closure2_slot0 = var2;
        var1 = var7[var1];
        var4 = var6.bind(var4)(var1);
        var1 = var4.useSharedValue;
        var1 = var1.bind(var4)(var5);
        var _closure2_slot1 = var1;
        var6 = _closure1_slot2;
        var4 = var6.useRef;
        var0 = {};
        var7 = var4.bind(var6)(var0);
        var _closure2_slot2 = var7;
        var0 = {};
        var5 = var6.useCallback;
        var4 = new Array(3);
        var4[0] = var2;
        var4[1] = var1;
        var4[2] = var7;
        var3 = function(arg0) { // Environment: var3
            var0 = arg0;
            var2 = var0.viewableItems;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun107669: for (var _fun107669_ip = 0;;) switch (_fun107669_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.item;
                        var2 = var6.type;
                        var3 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var7 = 3;
                        var1 = var0[var7];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.AppLauncherHomeListItemType;
                        var1 = var1.SHELF_ITEM;
                        var1 = var2 !== var1;
                        if (var1) {
                            _fun107669_ip = 73;
                            continue _fun107669
                        }
                    case 57:
                        var3 = _closure2_slot0;
                        var2 = var3.get;
                        var1 = var2.bind(var3)();
                    case 73:
                        if (var1) {
                            _fun107669_ip = 95;
                            continue _fun107669
                        }
                    case 76:
                        var3 = _closure2_slot0;
                        var2 = var3.set;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
                    case 95:
                        var2 = var6.type;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var7];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.AppLauncherHomeListItemType;
                        var1 = var1.LEARN_MORE;
                        var1 = var2 !== var1;
                        if (var1) {
                            _fun107669_ip = 152;
                            continue _fun107669
                        }
                    case 136:
                        var3 = _closure2_slot1;
                        var2 = var3.get;
                        var1 = var2.bind(var3)();
                    case 152:
                        if (var1) {
                            _fun107669_ip = 174;
                            continue _fun107669
                        }
                    case 155:
                        var3 = _closure2_slot1;
                        var2 = var3.set;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
                    case 174:
                        var2 = var6.type;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var7];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.AppLauncherHomeListItemType;
                        var1 = var1.RECOMMENDATION_SECTION_HEADER;
                        var1 = var2 !== var1;
                        if (!var1) {
                            _fun107669_ip = 253;
                            continue _fun107669
                        }
                    case 215:
                        var3 = var6.type;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var7];
                        var2 = var4.bind(var0)(var2);
                        var2 = var2.AppLauncherHomeListItemType;
                        var2 = var2.SECTION_HEADER;
                        var1 = var3 !== var2;
                    case 253:
                        if (var1) {
                            _fun107669_ip = 284;
                            continue _fun107669
                        }
                    case 256:
                        var2 = _closure2_slot2;
                        var3 = var2.current;
                        var2 = var6.sectionName;
                        var3 = var3[var2];
                        var2 = null;
                        var1 = var2 != var3;
                    case 284:
                        if (var1) {
                            _fun107669_ip = 458;
                            continue _fun107669
                        }
                    case 290:
                        var1 = _closure2_slot2;
                        var3 = var1.current;
                        var2 = var6.sectionName;
                        var1 = true;
                        var3[var2] = var1;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var1 = 4;
                        var1 = var8[var1];
                        var3 = var7.bind(var0)(var1);
                        var2 = var3.trackImpression;
                        var1 = {};
                        var4 = 5;
                        var9 = var8[var4];
                        var9 = var7.bind(var0)(var9);
                        var9 = var9.ImpressionTypes;
                        var9 = var9.VIEW;
                        var1.type = var9;
                        var4 = var8[var4];
                        var4 = var7.bind(var0)(var4);
                        var4 = var4.ImpressionNames;
                        var4 = var4.APP_LAUNCHER_SECTION;
                        var1.name = var4;
                        var4 = {};
                        var7 = var6.sectionName;
                        var4.section_name = var7;
                        var7 = var6.numItems;
                        var4.num_items = var7;
                        var6 = var6.numVisibleItems;
                        var4.num_visible_items = var6;
                        var6 = _closure1_slot3;
                        var5 = var6.entrypoint;
                        var5 = var5.bind(var6)();
                        var4.source = var5;
                        var1.properties = var4;
                        var1 = var2.bind(var3)(var1);
                    case 458:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var3 = var5.bind(var6)(var3, var4);
        var0.handleViewableItemsChanged = var3;
        var0.hasViewedActivityItem = var2;
        var0.hasViewedLearnMoreItem = var1;
        return var0;
    };
    var2.useViewableAppLauncherHomeItems = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 12149, 3679, 13850, 5177, 481, 2]);