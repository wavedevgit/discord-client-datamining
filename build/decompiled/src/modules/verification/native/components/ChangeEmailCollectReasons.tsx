// modules/verification/native/components/ChangeEmailCollectReasons.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var6 = var3.CHANGE_EMAIL_REASONS_ORDER;
    var _closure1_slot7 = var6;
    var3 = var3.SUSPICIOUS_CHANGE_EMAIL_REASONS;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.Fragment;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.background = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingVertical = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.container = var8;
    var8 = {};
    var11 = 'center';
    var8.textAlign = var11;
    var3.title = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.form = var8;
    var8 = {};
    var11 = '100%';
    var8.width = var11;
    var3.button = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var9;
    var3.formRow = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/ChangeEmailCollectReasons.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61085: for (var _fun61085_ip = 0;;) switch (_fun61085_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.changeEmailReason;
                var _closure2_slot0 = var14;
                var6 = var0.setChangeEmailReason;
                var _closure2_slot1 = var6;
                var0 = _closure1_slot13;
                var4 = undefined;
                var20 = var0.bind(var4)();
                var _closure2_slot2 = var20;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 8;
                var0 = var5[var0];
                var9 = var3.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var8.bind(var9)(var2, var0);
                var2 = 9;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useNavigation;
                var2 = var2.bind(var3)();
                var _closure2_slot3 = var2;
                var5 = _closure1_slot3;
                var8 = var5.useCallback;
                var3 = new Array(2);
                var3[0] = var2;
                var3[1] = var14;
                var2 = function() { // Environment: var1
                    _fun61087: for (var _fun61087_ip = 0;;) switch (_fun61087_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 10;
                            var2 = var2[var0];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var2);
                            var6 = var7.track;
                            var2 = _closure1_slot9;
                            var5 = var2.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE;
                            var3 = {};
                            var4 = _closure2_slot0;
                            var3.change_email_reason_enum = var4;
                            var3 = var6.bind(var7)(var5, var3);
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun61087_ip = 87;
                                continue _fun61087
                            }
                        case 66:
                            var5 = _closure1_slot8;
                            var4 = var5.has;
                            var3 = _closure2_slot0;
                            var3 = var4.bind(var5)(var3);
                            if (var3) {
                                _fun61087_ip = 135;
                                continue _fun61087
                            }
                        case 87:
                            var5 = _closure2_slot3;
                            var4 = var5.push;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 11;
                            var3 = var7[var3];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.VerificationModalScenes;
                            var3 = var3.ENTER_EMAIL;
                            var3 = var4.bind(var5)(var3);
                            _fun61087_ip = 181;
                            continue _fun61087;
                        case 135:
                            var3 = _closure2_slot3;
                            var2 = var3.push;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 11;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.VerificationModalScenes;
                            var1 = var1.CHANGE_EMAIL_WARNING;
                            var1 = var2.bind(var3)(var1);
                        case 181:
                            return var0;
                    }
                };
                var16 = var8.bind(var5)(var2, var3);
                var3 = var5.useMemo;
                var2 = new Array(3);
                var2[0] = var14;
                var2[1] = var6;
                var6 = var20.formRow;
                var2[2] = var6;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var5 = 'radiogroup';
                    var0.accessibilityRole = var5;
                    var6 = _closure1_slot7;
                    var5 = var6.map;
                    var4 = function(arg0, arg1) { // Environment: var4
                        var10 = arg0;
                        var _closure4_slot0 = var10;
                        var3 = _closure1_slot12;
                        var2 = _closure1_slot11;
                        var1 = {};
                        var7 = _closure1_slot10;
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var0 = 13;
                        var4 = var8[var0];
                        var0 = undefined;
                        var9 = var5.bind(var0)(var4);
                        var5 = {};
                        var12 = _closure2_slot2;
                        var12 = var12.formRow;
                        var5.style = var12;
                        var6 = _closure1_slot0;
                        var12 = 14;
                        var12 = var8[var12];
                        var13 = var6.bind(var0)(var12);
                        var12 = var13.getChangeEmailReasonDisplayText;
                        var12 = var12.bind(var13)(var10);
                        var5.label = var12;
                        var11 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 10;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.track;
                            var1 = _closure1_slot9;
                            var3 = var1.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED;
                            var1 = {};
                            var2 = _closure4_slot0;
                            var1.change_email_reason_enum = var2;
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var5.onPress = var11;
                        var4 = _closure2_slot0;
                        var4 = var4 === var10;
                        var5.selected = var4;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var11 = var4.concat;
                        var10 = 'formrow-';
                        var4 = arg1;
                        var4 = var11.bind(var10)(var4);
                        var5 = var7.bind(var0)(var9, var5, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = 12;
                        var5 = var8[var5];
                        var5 = var6.bind(var0)(var5);
                        var6 = var5.FormDivider;
                        var5 = {};
                        var5 = var7.bind(var0)(var6, var5);
                        var4[1] = var5;
                        var1.children = var4;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var17 = var3.bind(var5)(var1, var2);
                var13 = null;
                var1 = var13 == var0;
                var0 = null;
                if (var1) {
                    _fun61085_ip = 564;
                    continue _fun61085
                }
            case 200:
                var3 = _closure1_slot10;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var1 = 15;
                var1 = var19[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var6 = _closure1_slot5;
                var5 = {
                    'keyboardShouldPersistTaps': 'handled',
                    'alwaysBounceVertical': false
                };
                var8 = var20.background;
                var5.style = var8;
                var9 = _closure1_slot12;
                var8 = _closure1_slot4;
                var7 = {};
                var10 = var20.container;
                var7.style = var10;
                var10 = 16;
                var10 = var19[var10];
                var10 = var18.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var12 = var20.title;
                var10.style = var12;
                var15 = 17;
                var12 = var19[var15];
                var12 = var18.bind(var4)(var12);
                var22 = var12.intl;
                var21 = var22.string;
                var12 = var19[var15];
                var12 = var18.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["41NIIh"];
                var12 = var21.bind(var22)(var12);
                var10.children = var12;
                var11 = var3.bind(var4)(var11, var10);
                var10 = new Array(3);
                var10[0] = var11;
                var11 = 12;
                var11 = var19[var11];
                var11 = var18.bind(var4)(var11);
                var12 = var11.Form;
                var11 = {};
                var20 = var20.form;
                var11.style = var20;
                var11.children = var17;
                var11 = var3.bind(var4)(var12, var11);
                var10[1] = var11;
                var11 = 18;
                var11 = var19[var11];
                var11 = var18.bind(var4)(var11);
                var12 = var11.Button;
                var11 = {
                    'size': 'md',
                    'variant': 'primary'
                };
                var11.onPress = var16;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.XiOHRX;
                var15 = var16.bind(var17)(var15);
                var11.text = var15;
                var13 = var13 == var14;
                var11.disabled = var13;
                var11 = var3.bind(var4)(var12, var11);
                var10[2] = var11;
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 564:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 7538, 660, 33, 1297, 671, 566, 1469, 795, 670, 5430, 5472, 7539, 4899, 3942, 1234, 4084, 2]);