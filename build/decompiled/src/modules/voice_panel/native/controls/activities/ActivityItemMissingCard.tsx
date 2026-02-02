// modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var2 = var1.activity;
        var _closure2_slot0 = var2;
        var8 = var1.application;
        var _closure2_slot1 = var8;
        var1 = _closure1_slot8;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var9 = _closure1_slot4;
        var7 = var9.useContext;
        var6 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 6;
        var1 = var10[var1];
        var1 = var6.bind(var3)(var1);
        var1 = var7.bind(var9)(var1);
        var9 = var1.channelId;
        var _closure2_slot2 = var9;
        var7 = var1.layoutManager;
        var1 = var7.getTargetDimensions;
        var1 = var1.bind(var7)(var3);
        var13 = var1.width;
        var12 = var1.height;
        var1 = 7;
        var1 = var10[var1];
        var1 = var6.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var14 = var1.analyticsLocations;
        var _closure2_slot3 = var14;
        var11 = _closure1_slot4;
        var7 = var11.useCallback;
        var1 = _closure1_slot3;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun111330: for (var _fun111330_ip = 0;;) switch (_fun111330_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun111330_ip = 114;
                            continue _fun111330
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.maybeJoinEmbeddedActivity;
                        var1 = {};
                        var6 = _closure2_slot2;
                        var1.channelId = var6;
                        var6 = _closure2_slot1;
                        var7 = var6.id;
                        var1.applicationId = var7;
                        var7 = _closure2_slot0;
                        var7 = var7.launchId;
                        var1.launchId = var7;
                        var1.inputApplication = var6;
                        var5 = _closure2_slot3;
                        var1.analyticsLocations = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 102);
                    case 100:
                        return var1;
                    case 102:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun111330_ip = 111;
                            continue _fun111330
                        }
                    case 108:
                        return var2;
                    case 111:
                        return var1;
                    case 114:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var15 = var2.launchId;
        var0 = new Array(4);
        var0[0] = var15;
        var0[1] = var14;
        var0[2] = var8;
        var0[3] = var9;
        var7 = var7.bind(var11)(var1, var0);
        var0 = 9;
        var0 = var10[var0];
        var1 = var6.bind(var3)(var0);
        var0 = {};
        var2 = var2.applicationId;
        var0.applicationId = var2;
        var0.size = var13;
        var2 = ['embedded_background'];
        var0.names = var2;
        var14 = var1.bind(var3)(var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var0 = 10;
        var0 = var10[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var11 = 0.7;
        var0.activeOpacity = var11;
        var0.onPress = var7;
        var4 = var4.disabledActivity;
        var0.style = var4;
        var11 = _closure1_slot6;
        var4 = 11;
        var4 = var10[var4];
        var7 = var6.bind(var3)(var4);
        var4 = {};
        var4.imageBackground = var14;
        var12 = var13 / var12;
        var4.aspectRatio = var12;
        var7 = var11.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot6;
        var5 = 12;
        var5 = var10[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var5.channelId = var9;
        var9 = var8.id;
        var5.applicationId = var9;
        var8 = var8.name;
        var5.applicationName = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityIndicator;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'width': '100%',
        'height': '100%',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var3.loadingActivity = var9;
    var9 = {
        'width': '100%',
        'height': '100%'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var10;
    var3.disabledActivity = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun111331: for (var _fun111331_ip = 0;;) switch (_fun111331_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.activity;
                var3 = var0.application;
                var0 = _closure1_slot8;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var0 = null;
                if (!(var0 != var7)) {
                    _fun111331_ip = 64;
                    continue _fun111331
                }
            case 33:
                if (!(var0 != var3)) {
                    _fun111331_ip = 64;
                    continue _fun111331
                }
            case 37:
                var2 = _closure1_slot6;
                var1 = _closure1_slot9;
                var0 = {};
                var0.activity = var7;
                var0.application = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun111331_ip = 134;
                continue _fun111331;
            case 64:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 13;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = var6.loadingActivity;
                var1.style = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = 'large';
                var5.size = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 134:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 33, 1297, 671, 11772, 5690, 7924, 8032, 4867, 14277, 14278, 6421, 2]);