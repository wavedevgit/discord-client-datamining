// modules/icymi/useICYMIReloadHandler.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/useICYMIReloadHandler.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var5 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun103954: for (var _fun103954_ip = 0;;) switch (_fun103954_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103954_ip = 273;
                            continue _fun103954
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.ICYMIAnalytics;
                        var2 = var3.trackFeedShown;
                        var1 = {};
                        var8 = _closure2_slot0;
                        var6 = null;
                        var9 = var6 != var8;
                        var8 = 'NoDotShown';
                        var6 = var8;
                        if (!var9) {
                            _fun103954_ip = 90;
                            continue _fun103954
                        }
                    case 74:
                        var7 = _closure2_slot0;
                        var6 = var8;
                        if (!var7) {
                            _fun103954_ip = 90;
                            continue _fun103954
                        }
                    case 84:
                        var6 = 'DotShown';
                    case 90:
                        var1.variant = var6;
                        var6 = 'gravity_refresh';
                        var1.homeSessionId = var6;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var7 = 3;
                        var1 = var1[var7];
                        var3 = var2.bind(var4)(var1);
                        var2 = var3.fetchDehydrated;
                        var1 = {};
                        var6 = true;
                        var1.isReloading = var6;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 154);
                    case 152:
                        return var1;
                    case 154:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun103954_ip = 270;
                            continue _fun103954
                        }
                    case 160:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.reloadICYMITab;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 191);
                    case 189:
                        return var2;
                    case 191:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun103954_ip = 267;
                            continue _fun103954
                        }
                    case 197:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var6 = var6.bind(var4)(var3);
                        var3 = var6.getGuildChannelScores;
                        var3 = var3.bind(var6)();
                        SaveGenerator(address = 228);
                    case 226:
                        return var3;
                    case 228:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun103954_ip = 264;
                            continue _fun103954
                        }
                    case 234:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.getRecommendedGuilds;
                        var5 = var5.bind(var6)();
                        return var4;
                    case 264:
                        return var3;
                    case 267:
                        return var2;
                    case 270:
                        return var1;
                    case 273:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var5.bind(var1)(var0);
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useICYMIReloadHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 8892, 8888, 2]);