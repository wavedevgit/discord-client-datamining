// utils/native/SupportUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun86383: for (var _fun86383_ip = 0;;) switch (_fun86383_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86383_ip = 271;
                            continue _fun86383
                        }
                    case 10:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var2 = 4;
                        var3 = var9[var2];
                        var2 = undefined;
                        var4 = var6.bind(var2)(var3);
                        var3 = var4.openURL;
                        var5 = 5;
                        var5 = var9[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.getSubmitRequestURL;
                        var8 = _closure1_slot2;
                        var7 = 2;
                        var7 = var9[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.getConstants;
                        var7 = var7.bind(var8)();
                        var9 = var7.Manifest;
                        var8 = var9.trim;
                        var8 = var8.bind(var9)();
                        var9 = var8.length;
                        var8 = 0;
                        var8 = var9 > var8;
                        var16 = 'N/A';
                        if (!var8) {
                            _fun86383_ip = 127;
                            continue _fun86383
                        }
                    case 121:
                        var16 = var7.Manifest;
                    case 127:
                        var15 = var7.Version;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var7 = 3;
                        var10 = var9[var7];
                        var11 = var8.bind(var2)(var10);
                        var10 = var11.getSystemVersion;
                        var21 = var10.bind(var11)();
                        var7 = var9[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.getDeviceInfo;
                        var19 = var7.bind(var8)();
                        var1 = _closure1_slot5;
                        var17 = var1.locale;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var11 = var1.concat;
                        var26 = 'App version: ';
                        var24 = '\n  Manifest: ';
                        var22 = '\n  iOS version: ';
                        var20 = '\n  Device: ';
                        var18 = '\n  Language: ';
                        var25 = var15;
                        var23 = var16;
                        var1 = var26[var11](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
                        var1 = var5.bind(var6)(var1);
                        SaveGenerator(address = 254);
                    case 252:
                        return var1;
                    case 254:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun86383_ip = 268;
                            continue _fun86383
                        }
                    case 260:
                        var3 = var3.bind(var4)(var1);
                        return var2;
                    case 268:
                        return var1;
                    case 271:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/SupportUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.emailSupport = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1687, 1594, 1309, 3146, 1686, 2]);