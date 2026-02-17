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
        _fun80508: for (var _fun80508_ip = 0;;) switch (_fun80508_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.code;
                var _closure2_slot0 = var4;
                var5 = var1.showCheckMark;
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 7;
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
                    var1 = 8;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var7 = var2.bind(var3)(var0, var1);
                var3 = _closure1_slot7;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var6 = undefined;
                if (var5) {
                    _fun80508_ip = 95;
                    continue _fun80508
                }
            case 92:
                var6 = var7;
            case 95:
                var0.onPress = var6;
                var0.label = var4;
                var4 = null;
                if (!var5) {
                    _fun80508_ip = 177;
                    continue _fun80508
                }
            case 108:
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 10;
                var5 = var10[var5];
                var5 = var6.bind(var2)(var5);
                var6 = var5.CheckmarkSmallIcon;
                var5 = {};
                var9 = _closure1_slot1;
                var8 = 6;
                var8 = var10[var8];
                var8 = var9.bind(var2)(var8);
                var8 = var8.unsafe_rawColors;
                var8 = var8.BRAND_500;
                var5.color = var8;
                var4 = var7.bind(var2)(var6, var5);
            case 177:
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
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TABLE_ROW_PADDING;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_BRAND;
    var8.color = var9;
    var3.generateCode = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/UserSettingsAccountBackupCodes.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80510: for (var _fun80510_ip = 0;;) switch (_fun80510_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.onGenerate;
                var10 = var0.headerLabel;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun80510_ip = 86;
                    continue _fun80510
                }
            case 23:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
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
                var0 = _closure1_slot9;
                var19 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 12;
                var0 = var12[var0];
                var4 = var5.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var15
                    var1 = _closure1_slot5;
                    var0 = var1.getBackupCodes;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                _closure2_slot0 = var0;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var15
                    var2 = new Array(0);
                    var _closure3_slot0 = var2;
                    var1 = new Array(0);
                    var _closure3_slot1 = var1;
                    var4 = _closure2_slot0;
                    var3 = var4.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun80513: for (var _fun80513_ip = 0;;) switch (_fun80513_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = var3.consumed;
                                if (var0) {
                                    _fun80513_ip = 31;
                                    continue _fun80513
                                }
                            case 15:
                                var2 = _closure3_slot1;
                                var0 = var2.push;
                                var0 = var0.bind(var2)(var3);
                                _fun80513_ip = 45;
                                continue _fun80513;
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
                var17 = var0.usedCodes;
                var20 = var0.unusedCodes;
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var15
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 13;
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
                var1 = _closure1_slot4;
                var0 = {};
                var6 = _closure1_slot8;
                var4 = 14;
                var4 = var12[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var11 = _closure1_slot1;
                var8 = 6;
                var7 = var12[var8];
                var7 = var11.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_24;
                var4.spacing = var7;
                var7 = {};
                var13 = _closure1_slot6;
                var7.paddingHorizontal = var13;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var7.paddingTop = var8;
                var4.style = var7;
                var8 = var10.map;
                var7 = function(arg0, arg1) { // Environment: var15
                    var4 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {};
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
                var8 = var20.length;
                var10 = 0;
                var8 = var8 > var10;
                if (!var8) {
                    _fun80510_ip = 477;
                    continue _fun80510
                }
            case 365:
                var13 = _closure1_slot7;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var11 = 16;
                var11 = var23[var11];
                var11 = var22.bind(var3)(var11);
                var12 = var11.TableRowGroup;
                var11 = {};
                var14 = 11;
                var18 = var23[var14];
                var18 = var22.bind(var3)(var18);
                var21 = var18.intl;
                var18 = var21.string;
                var14 = var23[var14];
                var14 = var22.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.zdzyFo;
                var14 = var18.bind(var21)(var14);
                var11.title = var14;
                var18 = var20.map;
                var14 = function(arg0, arg1) { // Environment: var15
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
                var14 = var18.bind(var20)(var14);
                var11.children = var14;
                var8 = var13.bind(var3)(var12, var11);
            case 477:
                var7[1] = var8;
                var8 = var17.length;
                var8 = var8 > var10;
                if (!var8) {
                    _fun80510_ip = 605;
                    continue _fun80510
                }
            case 493:
                var12 = _closure1_slot7;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var10 = 16;
                var10 = var21[var10];
                var10 = var20.bind(var3)(var10);
                var11 = var10.TableRowGroup;
                var10 = {};
                var13 = 11;
                var14 = var21[var13];
                var14 = var20.bind(var3)(var14);
                var18 = var14.intl;
                var14 = var18.string;
                var13 = var21[var13];
                var13 = var20.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.FkFLDN;
                var13 = var14.bind(var18)(var13);
                var10.title = var13;
                var14 = var17.map;
                var13 = function(arg0, arg1) { // Environment: var15
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
                var13 = var14.bind(var17)(var13);
                var10.children = var13;
                var8 = var12.bind(var3)(var11, var10);
            case 605:
                var7[2] = var8;
                var8 = null;
                var8 = var8 !== var9;
                if (!var8) {
                    _fun80510_ip = 808;
                    continue _fun80510
                }
            case 621:
                var11 = _closure1_slot7;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var9 = 16;
                var9 = var23[var9];
                var9 = var22.bind(var3)(var9);
                var10 = var9.TableRowGroup;
                var9 = {};
                var14 = _closure1_slot7;
                var12 = 9;
                var12 = var23[var12];
                var12 = var22.bind(var3)(var12);
                var13 = var12.TableRow;
                var12 = {};
                var18 = _closure1_slot7;
                var16 = 15;
                var16 = var23[var16];
                var16 = var22.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {};
                var20 = 'text-md/semibold';
                var16.variant = var20;
                var19 = var19.generateCode;
                var16.style = var19;
                var19 = 11;
                var20 = var23[var19];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.RIThUu;
                var19 = var20.bind(var21)(var19);
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var12.label = var16;
                var15 = function() {
                    var2 = _closure1_slot5;
                    var1 = var2.getVerificationKey;
                    var4 = var1.bind(var2)();
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.confirmViewBackupCodes;
                    var1 = true;
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
                };
                var12.onPress = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 808:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10220, 4879, 33, 1297, 671, 5354, 3154, 4907, 4931, 1235, 566, 10221, 4088, 3940, 5426, 2]);