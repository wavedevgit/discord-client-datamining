// modules/app_launcher/native/screens/search/useTrackSearchItems.tsx
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
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/search/useTrackSearchItems.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        var7 = arg0;
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useAppLauncherContext;
        var2 = var2.bind(var3)();
        var8 = var2.entrypoint;
        var _closure2_slot3 = var8;
        var4 = _closure1_slot2;
        var2 = var4.useRef;
        var0 = {};
        var0 = var2.bind(var4)(var0);
        var _closure2_slot4 = var0;
        var0 = var4.useRef;
        var0 = var0.bind(var4)(var5);
        var _closure2_slot5 = var0;
        var0 = {};
        var3 = var4.useCallback;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function(arg0) { // Environment: var1
            _fun107758: for (var _fun107758_ip = 0;;) switch (_fun107758_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.viewableItems;
                    var1 = _closure2_slot5;
                    var3 = var1.current;
                    var1 = _closure2_slot2;
                    if (!(var3 !== var1)) {
                        _fun107758_ip = 55;
                        continue _fun107758
                    }
                case 29:
                    var3 = _closure2_slot5;
                    var1 = _closure2_slot2;
                    var3.current = var1;
                    var1 = _closure2_slot4;
                    var0 = {};
                    var1.current = var0;
                case 55:
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun107759: for (var _fun107759_ip = 0;;) switch (_fun107759_ip) {
                            case 0:
                                var5 = arg0;
                                var0 = var5.isViewable;
                                if (!var0) {
                                    _fun107759_ip = 267;
                                    continue _fun107759
                                }
                            case 15:
                                var1 = _closure2_slot0;
                                var0 = var5.item;
                                var10 = undefined;
                                var2 = var1.bind(var10)(var0);
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun107759_ip = 267;
                                    continue _fun107759
                                }
                            case 43:
                                var0 = _closure2_slot4;
                                var0 = var0.current;
                                var0 = var0[var2];
                                if (!(var1 == var0)) {
                                    _fun107759_ip = 267;
                                    continue _fun107759
                                }
                            case 63:
                                var0 = _closure2_slot4;
                                var1 = var0.current;
                                var0 = true;
                                var1[var2] = var0;
                                var1 = _closure2_slot1;
                                var0 = var5.item;
                                var0 = var1.bind(var10)(var0);
                                var7 = var0.applicationId;
                                var6 = var0.commandId;
                                var9 = _closure1_slot0;
                                var11 = _closure1_slot1;
                                var0 = 2;
                                var0 = var11[var0];
                                var3 = var9.bind(var10)(var0);
                                var2 = var3.trackImpression;
                                var1 = {};
                                var0 = 3;
                                var8 = var11[var0];
                                var8 = var9.bind(var10)(var8);
                                var8 = var8.ImpressionTypes;
                                var8 = var8.VIEW;
                                var1.type = var8;
                                var0 = var11[var0];
                                var0 = var9.bind(var10)(var0);
                                var0 = var0.ImpressionNames;
                                var0 = var0.APP_LAUNCHER_SEARCH_RESULTS_ITEM;
                                var1.name = var0;
                                var0 = {};
                                var8 = 4;
                                var8 = var11[var8];
                                var8 = var9.bind(var10)(var8);
                                var8 = var8.ApplicationCommandTriggerLocations;
                                var8 = var8.APP_LAUNCHER_HOME_SEARCH;
                                var0.location = var8;
                                var0.application_id = var7;
                                var0.command_id = var6;
                                var5 = var5.index;
                                var0.search_results_position = var5;
                                var5 = _closure2_slot2;
                                var0.query = var5;
                                var4 = _closure2_slot3;
                                var0.source = var4;
                                var1.properties = var0;
                                var0 = false;
                                var0 = var2.bind(var3)(var1, var0);
                            case 267:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.handleViewableItemsChanged = var1;
        return var0;
    };
    var2.useTrackSearchItems = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7733, 5214, 481, 4547, 2]);