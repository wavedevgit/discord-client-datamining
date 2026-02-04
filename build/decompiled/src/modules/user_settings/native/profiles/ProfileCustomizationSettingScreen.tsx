// modules/user_settings/native/profiles/ProfileCustomizationSettingScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = ['hasEdits', 'resetPending', 'handleSubmit'];
    var _closure1_slot3 = var0;
    var0 = ['hasEdits', 'guild', 'resetPending', 'handleSubmit'];
    var _closure1_slot4 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var11 = 4;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ProfileCustomizationSubsection;
    var _closure1_slot11 = var8;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.UserSettingsSections;
    var _closure1_slot12 = var7;
    var7 = var3.AnalyticEvents;
    var _closure1_slot13 = var7;
    var3 = var3.AnalyticsSections;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot15 = var7;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 9;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var7 = var9.createStyles;
    var3 = {};
    var10 = {};
    var12 = '100%';
    var10.height = var12;
    var3.container = var10;
    var10 = {};
    var10.paddingTop = var11;
    var3.controls = var10;
    var3 = var7.bind(var9)(var3);
    var _closure1_slot17 = var3;
    var7 = {};
    var3 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 10;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["2p07FR"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7.renderLabel = var3;
    var3 = 'edit-user-profile';
    var7.id = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.autoFocusElement;
        var3 = _closure1_slot15;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 11;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.autoFocusElement = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var7.renderPage = var3;
    var3 = var8.USER_PROFILE;
    var7.subSection = var3;
    var3 = new Array(2);
    var3[0] = var7;
    var7 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 10;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.kPHroX;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7.renderLabel = var9;
    var9 = 'edit-user-profiles-guilds';
    var7.id = var9;
    var9 = function() {
        var3 = _closure1_slot15;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 12;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var7.renderPage = var9;
    var8 = var8.GUILD;
    var7.subSection = var8;
    var3[1] = var7;
    var _closure1_slot18 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        _fun80237: for (var _fun80237_ip = 0;;) switch (_fun80237_ip) {
            case 0:
                var1 = _closure1_slot17;
                var3 = undefined;
                var6 = var1.bind(var3)();
                var4 = _closure1_slot8;
                var1 = var4.useState;
                var2 = 0;
                var7 = var1.bind(var4)(var2);
                var4 = _closure1_slot7;
                var1 = 2;
                var4 = var4.bind(var3)(var7, var1);
                var10 = var4[var2];
                var1 = 1;
                var1 = var4[var1];
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 13;
                var1 = var7[var1];
                var8 = var4.bind(var3)(var1);
                var1 = var8.useNativeStackNavigation;
                var12 = var1.bind(var8)();
                var _closure2_slot1 = var12;
                var1 = 14;
                var1 = var7[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.useSettingNavigationRoute;
                var1 = var1.bind(var4)();
                var7 = var1.params;
                var1 = null;
                var8 = var1 == var7;
                var4 = undefined;
                if (var8) {
                    _fun80237_ip = 138;
                    continue _fun80237
                }
            case 132:
                var4 = var7.autoFocusElement;
            case 138:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = 15;
                var9 = var8[var9];
                var14 = var7.bind(var3)(var9);
                var13 = var14.useStateFromStores;
                var9 = _closure1_slot10;
                var11 = new Array(1);
                var11[0] = var9;
                var9 = function() { // Environment: var0
                    _fun80238: for (var _fun80238_ip = 0;;) switch (_fun80238_ip) {
                        case 0:
                            var3 = _closure1_slot10;
                            var2 = var3.getSubsection;
                            var2 = var2.bind(var3)();
                            var3 = null;
                            if (!(var3 == var2)) {
                                _fun80238_ip = 35;
                                continue _fun80238
                            }
                        case 25:
                            var3 = _closure1_slot11;
                            var2 = var3.USER_PROFILE;
                        case 35:
                            var _closure3_slot0 = var2;
                            var2 = _closure1_slot18;
                            var1 = var2.findIndex;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.subSection;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var9 = var13.bind(var14)(var11, var9);
                var11 = {};
                var11.autoFocusElement = var4;
                var4 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot18;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var4 = var0.renderLabel;
                        var1 = var0.id;
                        var3 = var0.renderPage;
                        var0 = {};
                        var2 = undefined;
                        var4 = var4.bind(var2)();
                        var0.label = var4;
                        var0.id = var1;
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var2)(var1);
                        var0.page = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var4.bind(var3)(var11);
                var4 = 16;
                var4 = var8[var4];
                var8 = var7.bind(var3)(var4);
                var7 = var8.useSegmentedControlState;
                var4 = {};
                var4.items = var11;
                var4.pageWidth = var10;
                var4.defaultIndex = var9;
                var8 = var7.bind(var8)(var4);
                var7 = _closure1_slot18;
                var9 = var8.activeIndex;
                var4 = var9.get;
                var4 = var4.bind(var9)();
                var9 = var7[var4];
                if (!(var1 == var9)) {
                    _fun80237_ip = 281;
                    continue _fun80237
                }
            case 273:
                var1 = _closure1_slot18;
                var9 = var1[var2];
            case 281:
                var _closure2_slot2 = var9;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 17;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var7 = var1.bind(var3)();
                var15 = var7.hasEdits;
                var _closure2_slot3 = var15;
                var14 = var7.resetPending;
                var _closure2_slot4 = var14;
                var16 = var7.handleSubmit;
                var _closure2_slot5 = var16;
                var11 = _closure1_slot6;
                var1 = _closure1_slot3;
                var7 = var11.bind(var3)(var7, var1);
                var1 = 18;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var10 = var1.bind(var3)();
                var17 = var10.hasEdits;
                var _closure2_slot6 = var17;
                var4 = var10.guild;
                var _closure2_slot7 = var4;
                var1 = var10.resetPending;
                var _closure2_slot8 = var1;
                var18 = var10.handleSubmit;
                var _closure2_slot9 = var18;
                var2 = _closure1_slot4;
                var10 = var11.bind(var3)(var10, var2);
                var2 = var15;
                if (var2) {
                    _fun80237_ip = 427;
                    continue _fun80237
                }
            case 424:
                var2 = var17;
            case 427:
                var _closure2_slot10 = var2;
                var7 = var7.isSubmitting;
                if (var7) {
                    _fun80237_ip = 446;
                    continue _fun80237
                }
            case 440:
                var7 = var10.isSubmitting;
            case 446:
                var _closure2_slot11 = var7;
                var10 = _closure1_slot8;
                var13 = var10.useCallback;
                var11 = new Array(2);
                var11[0] = var14;
                var11[1] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var1 = var13.bind(var10)(var1, var11);
                var _closure2_slot12 = var1;
                var14 = var10.useCallback;
                var13 = _closure1_slot5;
                var11 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun80244: for (var _fun80244_ip = 0;;) switch (_fun80244_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun80244_ip = 89;
                                    continue _fun80244
                                }
                            case 7:
                                var1 = _closure2_slot3;
                                var3 = true;
                                if (!var1) {
                                    _fun80244_ip = 42;
                                    continue _fun80244
                                }
                            case 19:
                                var5 = _closure2_slot5;
                                var1 = undefined;
                                var1 = var5.bind(var1)();
                                SaveGenerator(address = 33);
                            case 31:
                                return var1;
                            case 33:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                var3 = var1;
                                if (var5) {
                                    _fun80244_ip = 86;
                                    continue _fun80244
                                }
                            case 42:
                                var5 = _closure2_slot6;
                                var4 = true;
                                if (!var5) {
                                    _fun80244_ip = 74;
                                    continue _fun80244
                                }
                            case 51:
                                var5 = _closure2_slot9;
                                var2 = undefined;
                                var2 = var5.bind(var2)();
                                SaveGenerator(address = 65);
                            case 63:
                                return var2;
                            case 65:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                var4 = var2;
                                if (var5) {
                                    _fun80244_ip = 83;
                                    continue _fun80244
                                }
                            case 74:
                                if (!var3) {
                                    _fun80244_ip = 80;
                                    continue _fun80244
                                }
                            case 77:
                                var3 = var4;
                            case 80:
                                return var3;
                            case 83:
                                return var2;
                            case 86:
                                return var1;
                            case 89:
                                return var0;
                        }
                    };
                    return var0;
                };
                var13 = var13.bind(var3)(var11);
                var11 = new Array(4);
                var11[0] = var18;
                var11[1] = var17;
                var11[2] = var16;
                var11[3] = var15;
                var11 = var14.bind(var10)(var13, var11);
                var _closure2_slot13 = var11;
                var14 = var10.useEffect;
                var9 = var9.subSection;
                var13 = new Array(1);
                var13[0] = var9;
                var9 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 19;
                    var1 = var5[var0];
                    var0 = undefined;
                    var8 = var4.bind(var0)(var1);
                    var7 = var8.trackWithMetadata;
                    var1 = _closure1_slot13;
                    var6 = var1.SETTINGS_PANE_VIEWED;
                    var3 = {};
                    var1 = 'user';
                    var3.settings_type = var1;
                    var9 = _closure2_slot2;
                    var9 = var9.subSection;
                    var3.subsection = var9;
                    var9 = _closure1_slot14;
                    var9 = var9.SETTINGS_CUSTOMIZE_PROFILE;
                    var3.destination_pane = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = 20;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.setSection;
                    var2 = _closure1_slot12;
                    var2 = var2.PROFILE_CUSTOMIZATION;
                    var1 = _closure2_slot2;
                    var1 = var1.subSection;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var9 = var14.bind(var10)(var9, var13);
                var13 = var10.useEffect;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    _fun80246: for (var _fun80246_ip = 0;;) switch (_fun80246_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun80246_ip = 53;
                                continue _fun80246
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.initGuildIdentitySettings;
                            var0 = _closure2_slot7;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 21;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.resetAndCloseGuildIdentityForm;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            return var0;
                    }
                };
                var4 = var13.bind(var10)(var4, var9);
                var9 = var10.useLayoutEffect;
                var4 = new Array(5);
                var4[0] = var12;
                var4[1] = var11;
                var4[2] = var2;
                var4[3] = var1;
                var4[4] = var7;
                var1 = function() { // Environment: var0
                    _fun80248: for (var _fun80248_ip = 0;;) switch (_fun80248_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = var3.setOptions;
                            var1 = {};
                            var0 = false;
                            var1.headerShadowVisible = var0;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 22;
                            var6 = var6[var0];
                            var0 = undefined;
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.getRenderModalCloseImage;
                            var6 = var6.bind(var7)(var3);
                            var1.headerLeft = var6;
                            var4 = _closure2_slot11;
                            if (var4) {
                                _fun80248_ip = 81;
                                continue _fun80248
                            }
                        case 70:
                            var4 = function(arg0) { // Environment: var4
                                var3 = _closure1_slot15;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var0 = 22;
                                var0 = var9[var0];
                                var2 = undefined;
                                var0 = var8.bind(var2)(var0);
                                var1 = var0.HeaderTextButton;
                                var0 = {};
                                var10 = arg0;
                                var11 = var0;
                                var5 = copyDataProperties(var11, var10);
                                var5 = 10;
                                var6 = var9[var5];
                                var6 = var8.bind(var2)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var9[var5];
                                var5 = var8.bind(var2)(var5);
                                var5 = var5.t;
                                var5 = var5["R3BPH+"];
                                var6 = var6.bind(var7)(var5);
                                var5 = 'label';
                                var0[var5] = var6;
                                var5 = _closure2_slot10;
                                var6 = !var5;
                                var5 = 'disabled';
                                var0[var5] = var6;
                                var5 = _closure1_slot5;
                                var4 = function*() { // Environment: var4
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun80251: for (var _fun80251_ip = 0;;) switch (_fun80251_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun80251_ip = 136;
                                                    continue _fun80251
                                                }
                                            case 10:
                                                var1 = _closure2_slot13;
                                                var2 = undefined;
                                                var1 = var1.bind(var2)();
                                                SaveGenerator(address = 27);
                                            case 25:
                                                return var1;
                                            case 27:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                if (var4) {
                                                    _fun80251_ip = 133;
                                                    continue _fun80251
                                                }
                                            case 33:
                                                if (!var1) {
                                                    _fun80251_ip = 130;
                                                    continue _fun80251
                                                }
                                            case 36:
                                                var5 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var4 = 24;
                                                var4 = var7[var4];
                                                var4 = var5.bind(var2)(var4);
                                                var6 = var4.DelayedCall;
                                                var4 = 18;
                                                var4 = var7[var4];
                                                var4 = var5.bind(var2)(var4);
                                                var5 = var4.RESET_DELAY_MS;
                                                var4 = 50;
                                                var9 = var5 + var4;
                                                var3 = _closure2_slot1;
                                                var8 = var3.goBack;
                                                var4 = var6.prototype;
                                                var4 = Object.create(var4, {
                                                    constructor: {
                                                        value: var6
                                                    }
                                                });
                                                var10 = var4;
                                                var3 = new var10[var6](var9, var8, var7);
                                                var4 = var3 instanceof Object ? var3 : var4;
                                                var3 = var4.delay;
                                                var3 = var3.bind(var4)();
                                            case 130:
                                                return var2;
                                            case 133:
                                                return var1;
                                            case 136:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var5 = var5.bind(var2)(var4);
                                var4 = 'onPress';
                                var0[var4] = var5;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            _fun80248_ip = 107;
                            continue _fun80248;
                        case 81:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 23;
                            var5 = var7[var5];
                            var5 = var6.bind(var0)(var5);
                            var4 = var5.HeaderSubmittingIndicator;
                        case 107:
                            var1.headerRight = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var9.bind(var10)(var1, var4);
                var9 = var10.useCallback;
                var4 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var1 = new Array(0);
                var4 = var9.bind(var10)(var4, var1);
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 25;
                var1 = var10[var1];
                var1 = var9.bind(var3)(var1);
                if (!var2) {
                    _fun80237_ip = 688;
                    continue _fun80237
                }
            case 685:
                var2 = !var7;
            case 688:
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.data;
                    var0 = var0.action;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 26;
                    var1 = var6[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var7 = _closure2_slot10;
                    var1.hasEdits = var7;
                    var5 = _closure2_slot12;
                    var1.resetPending = var5;
                    var5 = _closure1_slot0;
                    var4 = 27;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.dismissKeyboard;
                    var1.onHasEdits = var4;
                    var3 = function() {
                        var2 = _closure2_slot1;
                        var1 = var2.dispatch;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.onConfirm = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var3)(var2, var0);
                var2 = _closure1_slot16;
                var1 = _closure1_slot9;
                var0 = {};
                var7 = var6.container;
                var0.style = var7;
                var0.onLayout = var4;
                var7 = _closure1_slot15;
                var4 = {};
                var6 = var6.controls;
                var4.style = var6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 28;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var10 = var5.Tabs;
                var5 = {};
                var5.state = var8;
                var5 = var7.bind(var3)(var10, var5);
                var4.children = var5;
                var5 = var7.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 29;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.SegmentedControlPages;
                var5 = {};
                var5.state = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/profiles/ProfileCustomizationSettingScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 29, 57, 31, 27, 5923, 665, 660, 33, 1297, 1234, 10200, 10244, 1469, 7552, 632, 7798, 6949, 10245, 4302, 7227, 5722, 8904, 4705, 3630, 1542, 9121, 3718, 7804, 7806, 2]);