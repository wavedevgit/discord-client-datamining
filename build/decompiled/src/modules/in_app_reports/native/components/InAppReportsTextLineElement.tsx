// modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot7 = var6;
    var6 = var3.Linking;
    var _closure1_slot8 = var6;
    var3 = var3.Platform;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 16;
    var8 = {
        'marginBottom': 16,
        'paddingHorizontal': 16
    };
    var3.container = var8;
    var8 = {};
    var12 = 8;
    var8.marginBottom = var12;
    var3.header = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.description = var8;
    var8 = {
        'paddingHorizontal': 8,
        'flexGrow': 0
    };
    var3.trailingButton = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.smsInfoContainer = var8;
    var8 = {
        'flex': 1,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'borderRadius': null,
        'borderColor': null,
        'borderWidth': 1,
        'padding': 8,
        'backgroundColor': null,
        'marginBottom': 8
    };
    var9 = 7;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var8.borderRadius = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var8.borderColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.smsNumberContainer = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.STATUS_POSITIVE_BACKGROUND;
    var8.borderColor = var13;
    var3.smsNumberContainerSuccess = var8;
    var8 = {};
    var12 = var5[var12];
    var12 = var10.bind(var0)(var12);
    var11 = var11.DISPLAY_SEMIBOLD;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var10 = var9.INTERACTIVE_TEXT_ACTIVE;
    var9 = 14;
    var15 = var12.bind(var0)(var11, var10, var9);
    var16 = var8;
    var9 = copyDataProperties(var16, var15);
    var3.smsNumberText = var8;
    var8 = {
        'paddingHorizontal': 12,
        'marginBottom': 8,
        'marginLeft': 12
    };
    var3.startButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun53820: for (var _fun53820_ip = 0;;) switch (_fun53820_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.element;
                var0 = var0.data;
                var19 = var0.title;
                var17 = var0.body;
                var15 = var0.sms;
                var _closure2_slot0 = var15;
                var1 = var0.sms_body;
                var _closure2_slot1 = var1;
                var0 = var0.is_localized;
                var1 = _closure1_slot11;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var4 = _closure1_slot6;
                var2 = var4.useState;
                var1 = false;
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot5;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var14 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot2 = var1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 9;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = function() { // Environment: var11
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getParser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var2.bind(var3)(var1);
                if (var0) {
                    _fun53820_ip = 150;
                    continue _fun53820
                }
            case 146:
                var0 = null;
                return var0;
            case 150:
                var0 = function() { // Environment: var11
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun53824: for (var _fun53824_ip = 0;;) switch (_fun53824_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun53824_ip = 169;
                                        continue _fun53824
                                    }
                                case 10:
                                    var4 = _closure2_slot0;
                                    var6 = _closure2_slot1;
                                    var3 = global;
                                    var1 = var3.HermesInternal;
                                    var2 = var1.concat;
                                    var1 = 'sms:';
                                    var2 = var2.bind(var1)(var4);
                                    var1 = null;
                                    var4 = var1 != var6;
                                    var1 = '';
                                    if (!var4) {
                                        _fun53824_ip = 93;
                                        continue _fun53824
                                    }
                                case 58:
                                    var5 = var3.encodeURIComponent;
                                    var4 = undefined;
                                    var5 = var5.bind(var4)(var6);
                                    var3 = var3.HermesInternal;
                                    var4 = var3.concat;
                                    var3 = '?body=';
                                    var1 = var4.bind(var3)(var5);
                                case 93:
                                    var4 = var2 + var1;
                                    var3 = _closure1_slot8;
                                    var1 = var3.canOpenURL;
                                    var1 = var1.bind(var3)(var4);
                                    SaveGenerator(address = 119);
                                case 117:
                                    return var1;
                                case 119:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun53824_ip = 166;
                                        continue _fun53824
                                    }
                                case 125:
                                    if (!var1) {
                                        _fun53824_ip = 161;
                                        continue _fun53824
                                    }
                                case 128:
                                    var5 = _closure1_slot1;
                                    var3 = _closure1_slot3;
                                    var2 = 11;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var3 = var5.bind(var2)(var3);
                                    var2 = var3.openURL;
                                    var2 = var2.bind(var3)(var4);
                                case 161:
                                    var2 = undefined;
                                    return var2;
                                case 166:
                                    return var1;
                                case 169:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var12 = var0.bind(var3)();
                if (var14) {
                    _fun53820_ip = 166;
                    continue _fun53820
                }
            case 162:
                var16 = {};
                _fun53820_ip = 172;
                continue _fun53820;
            case 166:
                var16 = var13.smsNumberContainerSuccess;
            case 172:
                var2 = _closure1_slot10;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var13.container;
                var0.style = var4;
                var10 = _closure1_slot9;
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 12;
                var4 = var8[var5];
                var4 = var9.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'heading-md/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var20 = var13.header;
                var4.style = var20;
                var4.children = var19;
                var6 = var10.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var5 = var8[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var19 = var13.description;
                var5.style = var19;
                var19 = 'text-md/medium';
                var5.variant = var19;
                var7 = var7.bind(var3)(var17);
                var5.children = var7;
                var5 = var10.bind(var3)(var6, var5);
                var4[1] = var5;
                var5 = {};
                var6 = var13.smsInfoContainer;
                var5.style = var6;
                var6 = {};
                var17 = var13.smsNumberContainer;
                var7 = new Array(2);
                var7[0] = var17;
                var7[1] = var16;
                var6.style = var7;
                var7 = 13;
                var7 = var8[var7];
                var7 = var9.bind(var3)(var7);
                var9 = var7.LegacyText;
                var7 = {};
                var16 = var13.smsNumberText;
                var7.style = var16;
                var7.children = var15;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var9 = _closure1_slot1;
                var16 = 14;
                var8 = var8[var16];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var21 = _closure1_slot0;
                var15 = _closure1_slot3;
                var17 = 15;
                var19 = var15[var17];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var15 = var15[var17];
                var15 = var21.bind(var3)(var15);
                var15 = var15.t;
                if (var14) {
                    _fun53820_ip = 477;
                    continue _fun53820
                }
            case 464:
                var14 = var15.OpuAlK;
                var14 = var19.bind(var20)(var14);
                _fun53820_ip = 488;
                continue _fun53820;
            case 477:
                var15 = var15.t5VZ88;
                var14 = var19.bind(var20)(var15);
            case 488:
                var8.text = var14;
                var15 = _closure1_slot1;
                var14 = _closure1_slot3;
                var19 = var14[var16];
                var19 = var15.bind(var3)(var19);
                var19 = var19.Sizes;
                var19 = var19.SMALL;
                var8.size = var19;
                var19 = var13.trailingButton;
                var8.style = var19;
                var11 = function() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 16;
                    var1 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var1);
                    var5 = var6.copy;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var2);
                    var2 = 17;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.presentCopiedToClipboard;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot2;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onPress = var11;
                var11 = var14[var16];
                var11 = var15.bind(var3)(var11);
                var11 = var11.Colors;
                var11 = var11.GREY;
                var8.color = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var6.children = var7;
                var7 = var2.bind(var3)(var1, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var9 = _closure1_slot9;
                var8 = _closure1_slot7;
                var7 = {};
                var10 = var14[var16];
                var11 = var15.bind(var3)(var10);
                var10 = {};
                var20 = _closure1_slot0;
                var18 = var14[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var14[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.BDYHSe;
                var17 = var18.bind(var19)(var17);
                var10.text = var17;
                var14 = var14[var16];
                var14 = var15.bind(var3)(var14);
                var14 = var14.Sizes;
                var14 = var14.MEDIUM;
                var10.size = var14;
                var13 = var13.startButton;
                var10.style = var13;
                var10.onPress = var12;
                var10 = var9.bind(var3)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[1] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 483, 33, 1297, 671, 4645, 4891, 3897, 3103, 3900, 4839, 4836, 1234, 5253, 3106, 2]);