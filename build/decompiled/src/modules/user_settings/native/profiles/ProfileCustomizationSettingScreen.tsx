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
    var0 = ['handleSubmit'];
    var _closure1_slot3 = var0;
    var0 = ['guild', 'handleSubmit'];
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ProfileCustomizationSubsection;
    var _closure1_slot12 = var8;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.UserSettingsSections;
    var _closure1_slot13 = var7;
    var7 = var3.AnalyticEvents;
    var _closure1_slot14 = var7;
    var3 = var3.AnalyticsSections;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot16 = var7;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = 10;
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
    var _closure1_slot18 = var3;
    var7 = {};
    var3 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 11;
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
        var3 = _closure1_slot16;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 12;
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
        var0 = 11;
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
        var3 = _closure1_slot16;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 13;
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
    var _closure1_slot19 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        _fun80731: for (var _fun80731_ip = 0;;) switch (_fun80731_ip) {
            case 0:
                var1 = _closure1_slot18;
                var3 = undefined;
                var6 = var1.bind(var3)();
                var4 = _closure1_slot8;
                var1 = var4.useState;
                var2 = 0;
                var7 = var1.bind(var4)(var2);
                var4 = _closure1_slot7;
                var1 = 2;
                var1 = var4.bind(var3)(var7, var1);
                var9 = var1[var2];
                var10 = 1;
                var1 = var1[var10];
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 14;
                var1 = var7[var1];
                var8 = var4.bind(var3)(var1);
                var1 = var8.useNativeStackNavigation;
                var11 = var1.bind(var8)();
                var _closure2_slot1 = var11;
                var1 = 15;
                var1 = var7[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.useSettingNavigationRoute;
                var1 = var1.bind(var4)();
                var7 = var1.params;
                var1 = null;
                var8 = var1 == var7;
                var4 = undefined;
                if (var8) {
                    _fun80731_ip = 138;
                    continue _fun80731
                }
            case 132:
                var4 = var7.autoFocusElement;
            case 138:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var13 = 16;
                var12 = var8[var13];
                var16 = var7.bind(var3)(var12);
                var15 = var16.useStateFromStores;
                var12 = _closure1_slot11;
                var14 = new Array(1);
                var14[0] = var12;
                var12 = function() { // Environment: var0
                    var1 = _closure1_slot11;
                    var0 = var1.getSubsection;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var15 = var15.bind(var16)(var14, var12);
                var _closure2_slot2 = var15;
                var12 = {};
                var12.autoFocusElement = var4;
                var4 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot19;
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
                var12 = var4.bind(var3)(var12);
                var4 = 17;
                var4 = var8[var4];
                var8 = var7.bind(var3)(var4);
                var7 = var8.useSegmentedControlState;
                var4 = {};
                var4.items = var12;
                var4.pageWidth = var9;
                var9 = _closure1_slot12;
                var12 = var9.GUILD;
                var9 = 0;
                if (!(var15 === var12)) {
                    _fun80731_ip = 259;
                    continue _fun80731
                }
            case 256:
                var9 = var10;
            case 259:
                var4.defaultIndex = var9;
                var9 = function arg0, arg1() {
                    var1 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 18;
                    var0 = var5[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot7;
                    var0.hasEdits = var4;
                    var4 = _closure1_slot0;
                    var3 = 19;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.resetAllPending;
                    var0.resetPending = var3;
                    var3 = 20;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var3 = var3.dismissKeyboard;
                    var0.onHasEdits = var3;
                    var3 = arg1;
                    var0.onConfirm = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.onPageChangeStart = var9;
                var8 = var7.bind(var8)(var4);
                var7 = _closure1_slot19;
                var9 = var8.activeIndex;
                var4 = var9.get;
                var4 = var4.bind(var9)();
                var9 = var7[var4];
                if (!(var1 == var9)) {
                    _fun80731_ip = 316;
                    continue _fun80731
                }
            case 308:
                var1 = _closure1_slot19;
                var9 = var1[var2];
            case 316:
                var _closure2_slot3 = var9;
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 21;
                var2 = var1[var2];
                var2 = var4.bind(var3)(var2);
                var7 = var2.bind(var3)();
                var14 = var7.handleSubmit;
                var _closure2_slot4 = var14;
                var16 = _closure1_slot6;
                var2 = _closure1_slot3;
                var7 = var16.bind(var3)(var7, var2);
                var2 = 22;
                var2 = var1[var2];
                var2 = var4.bind(var3)(var2);
                var12 = var2.bind(var3)();
                var4 = var12.guild;
                var _closure2_slot5 = var4;
                var2 = var12.handleSubmit;
                var _closure2_slot6 = var2;
                var10 = _closure1_slot4;
                var10 = var16.bind(var3)(var12, var10);
                var12 = _closure1_slot0;
                var1 = var1[var13];
                var16 = var12.bind(var3)(var1);
                var13 = var16.useStateFromStores;
                var1 = _closure1_slot10;
                var12 = new Array(1);
                var12[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.showNotice;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var13.bind(var16)(var12, var1);
                var _closure2_slot7 = var1;
                var7 = var7.isSubmitting;
                if (var7) {
                    _fun80731_ip = 475;
                    continue _fun80731
                }
            case 469:
                var7 = var10.isSubmitting;
            case 475:
                var _closure2_slot8 = var7;
                var10 = _closure1_slot8;
                var13 = var10.useCallback;
                var12 = new Array(3);
                var12[0] = var15;
                var12[1] = var14;
                var12[2] = var2;
                var2 = function() { // Environment: var0
                    _fun80737: for (var _fun80737_ip = 0;;) switch (_fun80737_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = _closure1_slot12;
                            var0 = var0.GUILD;
                            if (!(var2 !== var0)) {
                                _fun80737_ip = 36;
                                continue _fun80737
                            }
                        case 24:
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var0 = var2.bind(var0)();
                            _fun80737_ip = 46;
                            continue _fun80737;
                        case 36:
                            var2 = _closure2_slot6;
                            var1 = undefined;
                            var0 = var2.bind(var1)();
                        case 46:
                            return var0;
                    }
                };
                var2 = var13.bind(var10)(var2, var12);
                var _closure2_slot9 = var2;
                var13 = var10.useEffect;
                var9 = var9.subSection;
                var12 = new Array(1);
                var12[0] = var9;
                var9 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 23;
                    var1 = var5[var0];
                    var0 = undefined;
                    var8 = var4.bind(var0)(var1);
                    var7 = var8.trackWithMetadata;
                    var1 = _closure1_slot14;
                    var6 = var1.SETTINGS_PANE_VIEWED;
                    var3 = {};
                    var1 = 'user';
                    var3.settings_type = var1;
                    var9 = _closure2_slot3;
                    var9 = var9.subSection;
                    var3.subsection = var9;
                    var9 = _closure1_slot15;
                    var9 = var9.SETTINGS_CUSTOMIZE_PROFILE;
                    var3.destination_pane = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = 24;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.setSection;
                    var2 = _closure1_slot13;
                    var2 = var2.PROFILE_CUSTOMIZATION;
                    var1 = _closure2_slot3;
                    var1 = var1.subSection;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var9 = var13.bind(var10)(var9, var12);
                var12 = var10.useEffect;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    _fun80739: for (var _fun80739_ip = 0;;) switch (_fun80739_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun80739_ip = 58;
                                continue _fun80739
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 25;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.initGuildIdentitySettings;
                            var0 = _closure2_slot5;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 58:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.resetAndCloseUserProfileForm;
                            return var0;
                    }
                };
                var4 = var12.bind(var10)(var4, var9);
                var9 = var10.useLayoutEffect;
                var4 = new Array(4);
                var4[0] = var11;
                var4[1] = var1;
                var4[2] = var7;
                var4[3] = var2;
                var2 = function() { // Environment: var0
                    _fun80740: for (var _fun80740_ip = 0;;) switch (_fun80740_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = var3.setOptions;
                            var1 = {};
                            var0 = false;
                            var1.headerShadowVisible = var0;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 26;
                            var6 = var6[var0];
                            var0 = undefined;
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.getRenderModalCloseImage;
                            var6 = var6.bind(var7)(var3);
                            var1.headerLeft = var6;
                            var4 = _closure2_slot8;
                            if (var4) {
                                _fun80740_ip = 81;
                                continue _fun80740
                            }
                        case 70:
                            var4 = function(arg0) { // Environment: var4
                                var3 = _closure1_slot16;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var0 = 26;
                                var0 = var9[var0];
                                var2 = undefined;
                                var0 = var8.bind(var2)(var0);
                                var1 = var0.HeaderTextButton;
                                var0 = {};
                                var10 = arg0;
                                var11 = var0;
                                var5 = copyDataProperties(var11, var10);
                                var5 = 11;
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
                                var5 = _closure2_slot7;
                                var6 = !var5;
                                var5 = 'disabled';
                                var0[var5] = var6;
                                var5 = _closure1_slot5;
                                var4 = function*() { // Environment: var4
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun80743: for (var _fun80743_ip = 0;;) switch (_fun80743_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun80743_ip = 139;
                                                    continue _fun80743
                                                }
                                            case 10:
                                                var1 = _closure2_slot9;
                                                var2 = undefined;
                                                var1 = var1.bind(var2)();
                                                SaveGenerator(address = 27);
                                            case 25:
                                                return var1;
                                            case 27:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                if (var4) {
                                                    _fun80743_ip = 136;
                                                    continue _fun80743
                                                }
                                            case 33:
                                                var4 = false;
                                                if (!(var4 !== var1)) {
                                                    _fun80743_ip = 133;
                                                    continue _fun80743
                                                }
                                            case 39:
                                                var5 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var4 = 28;
                                                var4 = var7[var4];
                                                var4 = var5.bind(var2)(var4);
                                                var6 = var4.DelayedCall;
                                                var4 = 22;
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
                                            case 133:
                                                return var2;
                                            case 136:
                                                return var1;
                                            case 139:
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
                            _fun80740_ip = 107;
                            continue _fun80740;
                        case 81:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 27;
                            var5 = var7[var5];
                            var5 = var6.bind(var0)(var5);
                            var4 = var5.HeaderSubmittingIndicator;
                        case 107:
                            var1.headerRight = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = var9.bind(var10)(var2, var4);
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
                var2 = new Array(0);
                var4 = var9.bind(var10)(var4, var2);
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 29;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                if (!var1) {
                    _fun80731_ip = 666;
                    continue _fun80731
                }
            case 663:
                var1 = !var7;
            case 666:
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.data;
                    var0 = var0.action;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 18;
                    var1 = var6[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var5 = _closure2_slot7;
                    var1.hasEdits = var5;
                    var5 = _closure1_slot0;
                    var4 = 19;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.resetAllPending;
                    var1.resetPending = var4;
                    var4 = 20;
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
                var0 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot17;
                var1 = _closure1_slot9;
                var0 = {};
                var7 = var6.container;
                var0.style = var7;
                var0.onLayout = var4;
                var7 = _closure1_slot16;
                var4 = {};
                var6 = var6.controls;
                var4.style = var6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 30;
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
                var5 = 31;
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
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/profiles/ProfileCustomizationSettingScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 29, 57, 31, 27, 5634, 5974, 665, 660, 33, 1297, 1234, 10269, 10313, 1469, 7620, 632, 7866, 9190, 5772, 3719, 7018, 10314, 4302, 7295, 5773, 8972, 4705, 3631, 1542, 7872, 7874, 2]);