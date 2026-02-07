// modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx
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
    var3 = 'modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 1;
        var4 = var6[var2];
        var2 = undefined;
        var5 = var3.bind(var2)(var4);
        var4 = var5.useAppLauncherContext;
        var4 = var4.bind(var5)();
        var5 = var4.entrypoint;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var7 = var4.useRef;
        var0 = global;
        var0 = var0.Set;
        var8 = var0.prototype;
        var8 = Object.create(var8, {
            constructor: {
                value: var0
            }
        });
        var11 = var8;
        var0 = new var11[var0](var10);
        var0 = var0 instanceof Object ? var0 : var8;
        var0 = var7.bind(var4)(var0);
        var _closure2_slot1 = var0;
        var0 = 2;
        var0 = var6[var0];
        var3 = var3.bind(var2)(var0);
        var2 = var3.useFocusEffect;
        var7 = var4.useCallback;
        var6 = function() { // Environment: var1
            var0 = _closure2_slot1;
            var1 = var0.current;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0 = new Array(0);
        var0 = var7.bind(var4)(var6, var0);
        var0 = var2.bind(var3)(var0);
        var0 = {};
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0) { // Environment: var1
            _fun108293: for (var _fun108293_ip = 0;;) switch (_fun108293_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.itemKey;
                    var9 = var0.sectionName;
                    var8 = var0.sectionPosition;
                    var7 = var0.sectionOverallPosition;
                    var6 = var0.applicationId;
                    var5 = var0.commandId;
                    var4 = var0.applicationFlags;
                    var0 = _closure2_slot1;
                    var1 = var0.current;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var2);
                    if (var0) {
                        _fun108293_ip = 233;
                        continue _fun108293
                    }
                case 72:
                    var0 = _closure2_slot1;
                    var1 = var0.current;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var0 = 3;
                    var0 = var13[var0];
                    var11 = undefined;
                    var2 = var12.bind(var11)(var0);
                    var1 = var2.trackImpression;
                    var0 = {};
                    var3 = 4;
                    var14 = var13[var3];
                    var14 = var12.bind(var11)(var14);
                    var14 = var14.ImpressionTypes;
                    var14 = var14.VIEW;
                    var0.type = var14;
                    var3 = var13[var3];
                    var3 = var12.bind(var11)(var3);
                    var3 = var3.ImpressionNames;
                    var3 = var3.APP_LAUNCHER_ITEM;
                    var0.name = var3;
                    var3 = {};
                    var10 = _closure2_slot0;
                    var3.source = var10;
                    var3.section_name = var9;
                    var3.section_position = var8;
                    var3.section_overall_position = var7;
                    var3.application_id = var6;
                    var3.command_id = var5;
                    var3.application_flags = var4;
                    var0.properties = var3;
                    var0 = var1.bind(var2)(var0);
                case 233:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.trackAppLauncherItemImpressionOnFirstView = var1;
        return var0;
    };
    var2.useTrackAppLauncherItemImpressionOnFirstView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7804, 1470, 5264, 481, 2]);