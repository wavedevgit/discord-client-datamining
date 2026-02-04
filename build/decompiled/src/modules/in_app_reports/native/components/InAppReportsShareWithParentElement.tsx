// modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92630: for (var _fun92630_ip = 0;;) switch (_fun92630_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.parents;
                var _closure2_slot0 = var14;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var1 = false;
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot3;
                var3 = undefined;
                var13 = 2;
                var1 = var1.bind(var3)(var2, var13);
                var16 = 0;
                var5 = var1[var16];
                var15 = 1;
                var1 = var1[var15];
                var _closure2_slot1 = var1;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var14;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.shareIarWithParents;
                    var4 = var2.bind(var3)();
                    var3 = var4.then;
                    var2 = function() { // Environment: var1
                        _fun92632: for (var _fun92632_ip = 0;;) switch (_fun92632_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 4;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.showSafetySuccess;
                                var1 = 5;
                                var6 = var3[var1];
                                var6 = var2.bind(var0)(var6);
                                var7 = var6.intl;
                                var6 = var7.formatToPlainString;
                                var1 = var3[var1];
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.t;
                                var3 = var1.wr4IT5;
                                var2 = {};
                                var9 = _closure2_slot0;
                                var8 = var9.length;
                                var2.count = var8;
                                var8 = 0;
                                var8 = var9[var8];
                                var8 = var8.username;
                                var2.parent1 = var8;
                                var8 = 1;
                                var10 = var9[var8];
                                var8 = null;
                                var11 = var8 == var10;
                                var9 = undefined;
                                if (var11) {
                                    _fun92632_ip = 133;
                                    continue _fun92632
                                }
                            case 128:
                                var9 = var10.username;
                            case 133:
                                var2.parent2 = var9;
                                var10 = _closure2_slot0;
                                var9 = 2;
                                var9 = var10[var9];
                                var10 = var8 == var9;
                                var8 = undefined;
                                if (var10) {
                                    _fun92632_ip = 163;
                                    continue _fun92632
                                }
                            case 158:
                                var8 = var9.username;
                            case 163:
                                var2.parent3 = var8;
                                var3 = var6.bind(var7)(var3, var2);
                                var2 = 'IAR_SHARE_WITH_PARENT_SUCCESS';
                                var2 = var4.bind(var5)(var2, var3);
                                var2 = _closure2_slot1;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.showFailedToast;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var0 = var14.length;
                if (!(var16 !== var0)) {
                    _fun92630_ip = 502;
                    continue _fun92630
                }
            case 104:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var10 = 5;
                var2 = var0[var10];
                var2 = var1.bind(var3)(var2);
                var7 = var2.intl;
                var2 = var7.formatToPlainString;
                var0 = var0[var10];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.HqyWeO;
                var0 = {};
                var8 = var14.length;
                var0.count = var8;
                var8 = var14[var16];
                var8 = var8.username;
                var0.parent1 = var8;
                var9 = var14[var15];
                var12 = null;
                var11 = var12 == var9;
                var8 = undefined;
                if (var11) {
                    _fun92630_ip = 202;
                    continue _fun92630
                }
            case 197:
                var8 = var9.username;
            case 202:
                var0.parent2 = var8;
                var9 = var14[var13];
                var11 = var12 == var9;
                var8 = undefined;
                if (var11) {
                    _fun92630_ip = 225;
                    continue _fun92630
                }
            case 220:
                var8 = var9.username;
            case 225:
                var0.parent3 = var8;
                var8 = var2.bind(var7)(var1, var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.title = var8;
                var8 = _closure1_slot0;
                var9 = var7[var10];
                var9 = var8.bind(var3)(var9);
                var11 = var9.intl;
                var9 = var11.formatToPlainString;
                var7 = var7[var10];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var8 = var7.BlAMme;
                var7 = {};
                var17 = var14.length;
                var7.count = var17;
                var16 = var14[var16];
                var16 = var16.username;
                var7.parent1 = var16;
                var16 = var14[var15];
                var17 = var12 == var16;
                var15 = undefined;
                if (var17) {
                    _fun92630_ip = 355;
                    continue _fun92630
                }
            case 350:
                var15 = var16.username;
            case 355:
                var7.parent2 = var15;
                var13 = var14[var13];
                var14 = var12 == var13;
                var12 = undefined;
                if (var14) {
                    _fun92630_ip = 378;
                    continue _fun92630
                }
            case 373:
                var12 = var13.username;
            case 378:
                var7.parent3 = var12;
                var7 = var9.bind(var11)(var8, var7);
                var0.disabledTitle = var7;
                var11 = _closure1_slot5;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 8;
                var7 = var6[var7];
                var7 = var9.bind(var3)(var7);
                var8 = var7.ShareIcon;
                var7 = {};
                var7 = var11.bind(var3)(var8, var7);
                var0.icon = var7;
                var7 = var6[var10];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["5l/hlt"];
                var6 = var7.bind(var8)(var6);
                var0.description = var6;
                var0.disabled = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 502:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 4595, 3147, 1234, 5924, 12107, 9195, 2]);