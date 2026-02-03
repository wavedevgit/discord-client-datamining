// modules/user_settings/native/account/UserSettingsAccountBackupCodes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun60883: for (var _fun60883_ip = 0;;) switch (_fun60883_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.code;
                var _closure2_slot0 = var5;
                var7 = var1.showCheckMark;
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.copy;
                    var8 = _closure2_slot0;
                    var7 = var8.replace;
                    var6 = /[^a-zA-Z0-9]/g;
                    var1 = '';
                    var1 = var7.bind(var8)(var6, var1);
                    var1 = var4.bind(var5)(var1);
                    var1 = 7;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var9 = var2.bind(var3)(var0, var1);
                var3 = _closure1_slot7;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 8;
                var0 = var0[var8];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var6 = undefined;
                if (var7) {
                    _fun60883_ip = 93;
                    continue _fun60883
                }
            case 90:
                var6 = var9;
            case 93:
                var0.onPress = var6;
                var0.label = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var5.bind(var2)(var4);
                var4 = var4.FormRow;
                var5 = var4.Checkmark;
                var4 = {};
                var4.selected = var7;
                var4 = var6.bind(var2)(var5, var4);
                var0.trailing = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 12;
    var8 = {
        'marginTop': 16,
        'marginHorizontal': 12
    };
    var3.text = var8;
    var8 = {};
    var11 = 8;
    var8.marginTop = var11;
    var3.section = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.generateCodeContainer = var8;
    var8 = {};
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_BRAND;
    var8.color = var9;
    var3.generateCode = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/UserSettingsAccountBackupCodes.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun60885: for (var _fun60885_ip = 0;;) switch (_fun60885_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.onGenerate;
                var10 = var0.headerLabel;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun60885_ip = 86;
                    continue _fun60885
                }
            case 23:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 9;
                var2 = var5[var0];
                var2 = var1.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.format;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.OhmvYt;
                var0 = {};
                var10 = var2.bind(var4)(var1, var0);
            case 86:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var0 = _closure1_slot9;
                var22 = var0.bind(var3)();
                _closure2_slot0 = var22;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var4 = var5.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var18
                    var1 = _closure1_slot6;
                    var0 = var1.getBackupCodes;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                _closure2_slot1 = var0;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var18
                    var2 = new Array(0);
                    var _closure3_slot0 = var2;
                    var1 = new Array(0);
                    var _closure3_slot1 = var1;
                    var4 = _closure2_slot1;
                    var3 = var4.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun60888: for (var _fun60888_ip = 0;;) switch (_fun60888_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = var3.consumed;
                                if (var0) {
                                    _fun60888_ip = 31;
                                    continue _fun60888
                                }
                            case 15:
                                var2 = _closure3_slot1;
                                var0 = var2.push;
                                var0 = var0.bind(var2)(var3);
                                _fun60888_ip = 45;
                                continue _fun60888;
                            case 31:
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = var1.bind(var2)(var3);
                            case 45:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var0);
                    var0 = {};
                    var0.usedCodes = var2;
                    var0.unusedCodes = var1;
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var20 = var0.usedCodes;
                var23 = var0.unusedCodes;
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var18
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.clearBackupCodes;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = _closure1_slot8;
                var4 = 12;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.RedesignCompat;
                var4 = {};
                var8 = var10.map;
                var7 = function(arg0, arg1) { // Environment: var18
                    var4 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var0 = var0.text;
                    var1.style = var0;
                    var0 = 'text-sm/medium';
                    var1.variant = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var8 = var8.bind(var10)(var7);
                var7 = new Array(4);
                var7[0] = var8;
                var8 = var23.length;
                var10 = 0;
                var8 = var8 > var10;
                if (!var8) {
                    _fun60885_ip = 438;
                    continue _fun60885
                }
            case 299:
                var13 = _closure1_slot7;
                var12 = _closure1_slot4;
                var11 = {};
                var14 = var22.section;
                var11.style = var14;
                var16 = _closure1_slot7;
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var14 = 8;
                var14 = var26[var14];
                var14 = var25.bind(var3)(var14);
                var15 = var14.FormSection;
                var14 = {};
                var17 = 9;
                var21 = var26[var17];
                var21 = var25.bind(var3)(var21);
                var24 = var21.intl;
                var21 = var24.string;
                var17 = var26[var17];
                var17 = var25.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.zdzyFo;
                var17 = var21.bind(var24)(var17);
                var14.title = var17;
                var21 = var23.map;
                var17 = function(arg0, arg1) { // Environment: var18
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot10;
                    var2 = {};
                    var0 = arg0;
                    var0 = var0.code;
                    var2.code = var0;
                    var0 = false;
                    var2.showCheckMark = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var17 = var21.bind(var23)(var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var11.children = var14;
                var8 = var13.bind(var3)(var12, var11);
            case 438:
                var7[1] = var8;
                var8 = var20.length;
                var8 = var8 > var10;
                if (!var8) {
                    _fun60885_ip = 596;
                    continue _fun60885
                }
            case 457:
                var12 = _closure1_slot7;
                var11 = _closure1_slot4;
                var10 = {};
                var13 = var22.section;
                var10.style = var13;
                var15 = _closure1_slot7;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var13 = 8;
                var13 = var24[var13];
                var13 = var23.bind(var3)(var13);
                var14 = var13.FormSection;
                var13 = {};
                var16 = 9;
                var17 = var24[var16];
                var17 = var23.bind(var3)(var17);
                var21 = var17.intl;
                var17 = var21.string;
                var16 = var24[var16];
                var16 = var23.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.FkFLDN;
                var16 = var17.bind(var21)(var16);
                var13.title = var16;
                var17 = var20.map;
                var16 = function(arg0, arg1) { // Environment: var18
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot10;
                    var2 = {};
                    var0 = arg0;
                    var0 = var0.code;
                    var2.code = var0;
                    var0 = true;
                    var2.showCheckMark = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var16 = var17.bind(var20)(var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var8 = var12.bind(var3)(var11, var10);
            case 596:
                var7[2] = var8;
                var8 = null;
                var8 = var8 !== var9;
                if (!var8) {
                    _fun60885_ip = 824;
                    continue _fun60885
                }
            case 612:
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var22.generateCodeContainer;
                var9.style = var12;
                var14 = _closure1_slot7;
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var15 = 8;
                var12 = var26[var15];
                var12 = var25.bind(var3)(var12);
                var13 = var12.FormSection;
                var12 = {};
                var17 = _closure1_slot7;
                var15 = var26[var15];
                var15 = var25.bind(var3)(var15);
                var16 = var15.FormRow;
                var15 = {};
                var21 = _closure1_slot7;
                var19 = 13;
                var19 = var26[var19];
                var19 = var25.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {};
                var23 = 'text-md/semibold';
                var19.variant = var23;
                var22 = var22.generateCode;
                var19.style = var22;
                var22 = 9;
                var23 = var26[var22];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.RIThUu;
                var22 = var23.bind(var24)(var22);
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var15.label = var19;
                var18 = function() {
                    var2 = _closure1_slot6;
                    var1 = var2.getVerificationKey;
                    var4 = var1.bind(var2)();
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.confirmViewBackupCodes;
                    var1 = true;
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
                };
                var15.onPress = var18;
                var15 = var17.bind(var3)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 824:
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7523, 33, 1297, 671, 5291, 3147, 5378, 1234, 566, 7524, 4897, 3941, 2]);