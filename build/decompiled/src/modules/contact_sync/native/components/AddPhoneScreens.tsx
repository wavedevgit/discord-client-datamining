// modules/contact_sync/native/components/AddPhoneScreens.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useContactSyncModalStore;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var13 = var10.NAV_BAR_HEIGHT;
    var10 = 32;
    var13 = var13 + var10;
    var8.paddingTop = var13;
    var3.container = var8;
    var8 = {};
    var8.flex = var11;
    var11 = 9;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.NAV_BAR_HEIGHT;
    var9 = var9 + var10;
    var8.paddingTop = var9;
    var3.redesignContainer = var8;
    var8 = {};
    var9 = 'center';
    var8.alignItems = var9;
    var3.header = var8;
    var8 = {
        'height': 144,
        'width': 300,
        'marginVertical': 16
    };
    var3.art = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.title = var8;
    var8 = {
        'marginTop': 8,
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.subtitle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/contact_sync/native/components/AddPhoneScreens.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 10;
        var1 = var8[var1];
        var3 = undefined;
        var2 = var7.bind(var3)(var1);
        var1 = var2.useNavigation;
        var1 = var1.bind(var2)();
        var _closure2_slot0 = var1;
        var1 = _closure1_slot11;
        var6 = var1.bind(var3)();
        var9 = _closure1_slot10;
        var5 = _closure1_slot6;
        var1 = {};
        var2 = var6.header;
        var1.style = var2;
        var2 = _closure1_slot9;
        var11 = 11;
        var10 = var8[var11];
        var10 = var7.bind(var3)(var10);
        var12 = var10.Text;
        var10 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var13 = var6.title;
        var10.style = var13;
        var13 = 12;
        var14 = var8[var13];
        var14 = var7.bind(var3)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var8[var13];
        var14 = var7.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.Xgb497;
        var14 = var15.bind(var16)(var14);
        var10.children = var14;
        var12 = var2.bind(var3)(var12, var10);
        var10 = new Array(2);
        var10[0] = var12;
        var11 = var8[var11];
        var11 = var7.bind(var3)(var11);
        var12 = var11.Text;
        var11 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var14 = var6.subtitle;
        var11.style = var14;
        var14 = var8[var13];
        var14 = var7.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var8[var13];
        var13 = var7.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.qFmzyo;
        var13 = var14.bind(var15)(var13);
        var11.children = var13;
        var11 = var2.bind(var3)(var12, var11);
        var10[1] = var11;
        var1.children = var10;
        var5 = var9.bind(var3)(var5, var1);
        var1 = _closure1_slot1;
        var0 = 13;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var6 = var6.container;
        var0.style = var6;
        var6 = 14;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.ChangePhoneReason;
        var6 = var6.CONTACT_SYNC;
        var0.reason = var6;
        var0.header = var5;
        var4 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 15;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.submitPhone;
            var1 = _closure2_slot0;
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.onComplete = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.AddPhoneScreen = var3;
    var3 = function() {
        var1 = _closure1_slot11;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var10 = _closure1_slot5;
        var2 = var10.useState;
        var1 = false;
        var6 = var2.bind(var10)(var1);
        var2 = _closure1_slot4;
        var1 = 2;
        var2 = var2.bind(var3)(var6, var1);
        var1 = 0;
        var6 = var2[var1];
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot0 = var1;
        var1 = _closure1_slot8;
        var1 = var1.bind(var3)();
        var7 = var1.phone;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 10;
        var1 = var8[var1];
        var9 = var2.bind(var3)(var1);
        var1 = var9.useNavigation;
        var11 = var1.bind(var9)();
        var _closure2_slot1 = var11;
        var1 = 16;
        var1 = var8[var1];
        var12 = var2.bind(var3)(var1);
        var9 = var12.useStateFromStores;
        var1 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var4
            _fun81579: for (var _fun81579_ip = 0;;) switch (_fun81579_ip) {
                case 0:
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun81579_ip = 33;
                        continue _fun81579
                    }
                case 27:
                    var0 = var1.phone;
                case 33:
                    return var0;
            }
        };
        var1 = var9.bind(var12)(var2, var1);
        var _closure2_slot2 = var1;
        var9 = var10.useEffect;
        var2 = new Array(3);
        var2[0] = var11;
        var2[1] = var7;
        var2[2] = var1;
        var1 = function() { // Environment: var4
            _fun81580: for (var _fun81580_ip = 0;;) switch (_fun81580_ip) {
                case 0:
                    var3 = null;
                    var _closure3_slot0 = var3;
                    var2 = _closure2_slot2;
                    if (!(var3 != var2)) {
                        _fun81580_ip = 81;
                        continue _fun81580
                    }
                case 19:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.handlePhoneVerificationComplete;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var3.then;
                    var1 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 17;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.runAfterInteractions;
                        var1 = function() { // Environment: var1
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        _closure3_slot0 = var2;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 81:
                    var0 = function() { // Environment: var0
                        _fun81583: for (var _fun81583_ip = 0;;) switch (_fun81583_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun81583_ip = 23;
                                    continue _fun81583
                                }
                            case 13:
                                var0 = var1.cancel;
                                var0 = var0.bind(var1)();
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var1 = var9.bind(var10)(var1, var2);
        var1 = _closure1_slot1;
        var2 = 18;
        var2 = var8[var2];
        var10 = var1.bind(var3)(var2);
        var2 = null;
        var9 = var2 != var7;
        var2 = "Phone shouldn't be null when trying to verify the code";
        var2 = var10.bind(var3)(var9, var2);
        var2 = _closure1_slot9;
        var0 = 19;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.phone = var7;
        var0.loading = var6;
        var5 = var5.redesignContainer;
        var0.backgroundStyle = var5;
        var5 = true;
        var0.disableKeyboardAvoidingView = var5;
        var5 = function() { // Environment: var4
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun81586: for (var _fun81586_ip = 0;;) switch (_fun81586_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun81586_ip = 108;
                                continue _fun81586
                            }
                        case 7:
                            var2 = _closure2_slot0;
                            var5 = undefined;
                            var1 = true;
                            var1 = var2.bind(var5)(var1);
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 15;
                            var1 = var4[var1];
                            var4 = var2.bind(var5)(var1);
                            var2 = var4.verifyPhone;
                            var1 = arg0;
                            var1 = var2.bind(var4)(var1);
                            SaveGenerator(address = 64);
                        case 62:
                            return var1;
                        case 64:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun81586_ip = 105;
                                continue _fun81586
                            }
                        case 70:
                            var2 = var1.codeIntercepted;
                            var4 = var1.addedPhone;
                            if (!var4) {
                                _fun81586_ip = 88;
                                continue _fun81586
                            }
                        case 85:
                            var4 = var2;
                        case 88:
                            if (var4) {
                                _fun81586_ip = 102;
                                continue _fun81586
                            }
                        case 91:
                            var4 = _closure2_slot0;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                        case 102:
                            return var2;
                        case 105:
                            return var1;
                        case 108:
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
        var5 = var5.bind(var3)();
        var0.onCodeEnteredIntercept = var5;
        var4 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 15;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.verifyPhoneWithPassword;
            var2 = _closure2_slot1;
            var1 = arg0;
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var0.onVerified = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.VerifyPhoneScreen = var3;
    var1 = function() {
        var10 = _closure1_slot5;
        var2 = var10.useState;
        var1 = false;
        var5 = var2.bind(var10)(var1);
        var2 = _closure1_slot4;
        var3 = undefined;
        var1 = 2;
        var2 = var2.bind(var3)(var5, var1);
        var1 = 0;
        var6 = var2[var1];
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot0 = var1;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 10;
        var1 = var7[var1];
        var5 = var2.bind(var3)(var1);
        var1 = var5.useNavigation;
        var11 = var1.bind(var5)();
        var _closure2_slot1 = var11;
        var1 = _closure1_slot11;
        var5 = var1.bind(var3)();
        var1 = _closure1_slot8;
        var1 = var1.bind(var3)();
        var8 = var1.phoneToken;
        var _closure2_slot2 = var8;
        var1 = 16;
        var1 = var7[var1];
        var12 = var2.bind(var3)(var1);
        var9 = var12.useStateFromStores;
        var1 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var4
            _fun81590: for (var _fun81590_ip = 0;;) switch (_fun81590_ip) {
                case 0:
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun81590_ip = 33;
                        continue _fun81590
                    }
                case 27:
                    var0 = var1.phone;
                case 33:
                    return var0;
            }
        };
        var1 = var9.bind(var12)(var2, var1);
        var _closure2_slot3 = var1;
        var9 = var10.useEffect;
        var2 = new Array(2);
        var2[0] = var11;
        var2[1] = var1;
        var1 = function() { // Environment: var4
            _fun81591: for (var _fun81591_ip = 0;;) switch (_fun81591_ip) {
                case 0:
                    var3 = null;
                    var _closure3_slot0 = var3;
                    var2 = _closure2_slot3;
                    if (!(var3 != var2)) {
                        _fun81591_ip = 81;
                        continue _fun81591
                    }
                case 19:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.handlePhoneVerificationComplete;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot1;
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var3.then;
                    var1 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 17;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.runAfterInteractions;
                        var1 = function() { // Environment: var1
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        _closure3_slot0 = var2;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 81:
                    var0 = function() { // Environment: var0
                        _fun81594: for (var _fun81594_ip = 0;;) switch (_fun81594_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun81594_ip = 23;
                                    continue _fun81594
                                }
                            case 13:
                                var0 = var1.cancel;
                                var0 = var0.bind(var1)();
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var1 = var9.bind(var10)(var1, var2);
        var1 = _closure1_slot1;
        var2 = 18;
        var2 = var7[var2];
        var9 = var1.bind(var3)(var2);
        var2 = null;
        var8 = var2 != var8;
        var2 = "Phone token shouldn't be null when trying to verify the password";
        var2 = var9.bind(var3)(var8, var2);
        var2 = _closure1_slot9;
        var0 = 20;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var7 = true;
        var0.hideUnverifiedBanner = var7;
        var0.parentLoading = var6;
        var5 = var5.redesignContainer;
        var0.style = var5;
        var5 = function arg0() {
            var1 = _closure2_slot0;
            var5 = undefined;
            var0 = true;
            var0 = var1.bind(var5)(var0);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 14;
            var3 = var6[var0];
            var4 = var4.bind(var5)(var3);
            var3 = var4.addPhone;
            var2 = _closure2_slot2;
            var1 = _closure1_slot0;
            var0 = var6[var0];
            var0 = var1.bind(var5)(var0);
            var0 = var0.ChangePhoneReason;
            var1 = var0.CONTACT_SYNC;
            var0 = arg0;
            var0 = var3.bind(var4)(var2, var0, var1);
            return var0;
        };
        var0.onSubmit = var5;
        var5 = function() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = false;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.onError = var5;
        var4 = function() {
            var0 = undefined;
            return var0;
        };
        var0.onSuccess = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.VerifyPasswordScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1613, 10213, 33, 1297, 4666, 671, 1469, 3900, 1234, 7516, 7517, 10354, 632, 5813, 44, 7543, 7510, 2]);