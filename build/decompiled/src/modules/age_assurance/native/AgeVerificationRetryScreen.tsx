// modules/age_assurance/native/AgeVerificationRetryScreen.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var6 = var3.ScrollView;
    var _closure1_slot6 = var6;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyHubLinks;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.jsxs;
    var _closure1_slot11 = var6;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'zIndex': 1
    };
    var3.loadingIndicator = var8;
    var8 = {};
    var9 = 7;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var8.flex = var11;
    var3.container = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingVertical = var11;
    var11 = 'center';
    var8.alignItems = var11;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.gap = var12;
    var3.headerContainer = var8;
    var8 = {};
    var8.textAlign = var11;
    var3.centerText = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.marginTop = var9;
    var3.helpLink = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_assurance/native/AgeVerificationRetryScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun52893: for (var _fun52893_ip = 0;;) switch (_fun52893_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.onClose;
                var8 = var0.modalSessionId;
                var _closure2_slot0 = var8;
                var0 = _closure1_slot13;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var13 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 8;
                var1 = var0[var1];
                var4 = var13.bind(var3)(var1);
                var2 = var4.useInitiateAgeVerification;
                var1 = {};
                var1.onComplete = var5;
                var5 = 9;
                var5 = var0[var5];
                var5 = var13.bind(var3)(var5);
                var5 = var5.AgeVerificationModalEntryPoint;
                var5 = var5.RETRY_MODAL;
                var1.entryPoint = var5;
                var5 = true;
                var1.isRetry = var5;
                var1 = var2.bind(var4)(var1);
                var5 = var1.loading;
                var10 = var1.initiateAgeVerification;
                var _closure2_slot1 = var10;
                var1 = 10;
                var1 = var0[var1];
                var2 = var13.bind(var3)(var1);
                var1 = var2.useIsManualAgeVerificationHidden;
                var4 = 'age_verification_retry_modal';
                var7 = var1.bind(var2)(var4);
                var _closure2_slot2 = var7;
                var1 = 11;
                var1 = var0[var1];
                var2 = var13.bind(var3)(var1);
                var1 = var2.useIsAgeVerificationPersonaEnabled;
                var6 = var1.bind(var2)(var4);
                var _closure2_slot3 = var6;
                var1 = 12;
                var2 = var0[var1];
                var12 = var13.bind(var3)(var2);
                var11 = var12.useUpdatedAgeVerificationString;
                var17 = 13;
                var2 = var0[var17];
                var2 = var13.bind(var3)(var2);
                var14 = var2.intl;
                var4 = var14.string;
                var2 = var0[var17];
                var2 = var13.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["5l3R/m"];
                var4 = var4.bind(var14)(var2);
                var2 = var0[var17];
                var2 = var13.bind(var3)(var2);
                var18 = var2.intl;
                var14 = var18.string;
                var2 = var0[var17];
                var2 = var13.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.JSdbBe;
                var2 = var14.bind(var18)(var2);
                var22 = var11.bind(var12)(var4, var2);
                var2 = var0[var1];
                var12 = var13.bind(var3)(var2);
                var11 = var12.useUpdatedAgeVerificationString;
                var2 = var0[var17];
                var2 = var13.bind(var3)(var2);
                var14 = var2.intl;
                var4 = var14.string;
                var2 = var0[var17];
                var2 = var13.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.O7SO0D;
                var4 = var4.bind(var14)(var2);
                var2 = var0[var17];
                var2 = var13.bind(var3)(var2);
                var18 = var2.intl;
                var14 = var18.string;
                var2 = var0[var17];
                var2 = var13.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.JNK1ue;
                var2 = var14.bind(var18)(var2);
                var21 = var11.bind(var12)(var4, var2);
                var1 = var0[var1];
                var4 = var13.bind(var3)(var1);
                var2 = var4.useUpdatedAgeVerificationString;
                var1 = var0[var17];
                var1 = var13.bind(var3)(var1);
                var12 = var1.intl;
                var11 = var12.string;
                var1 = var0[var17];
                var1 = var13.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.RtOE1v;
                var1 = var11.bind(var12)(var1);
                var11 = var0[var17];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var0 = var0[var17];
                var0 = var13.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.mFvt9M;
                var0 = var11.bind(var12)(var0);
                var0 = var2.bind(var4)(var1, var0);
                var _closure2_slot4 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useMemo;
                var1 = new Array(5);
                var1[0] = var10;
                var1[1] = var8;
                var1[2] = var7;
                var1[3] = var6;
                var1[4] = var0;
                var0 = function() { // Environment: var16
                    _fun52894: for (var _fun52894_ip = 0;;) switch (_fun52894_ip) {
                        case 0:
                            var2 = {};
                            var0 = _closure2_slot4;
                            var2.title = var0;
                            var4 = _closure2_slot3;
                            var0 = null;
                            if (var4) {
                                _fun52894_ip = 86;
                                continue _fun52894
                            }
                        case 24:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 13;
                            var5 = var9[var4];
                            var7 = undefined;
                            var5 = var8.bind(var7)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.t;
                            var4 = var4.ecdUKD;
                            var0 = var5.bind(var6)(var4);
                        case 86:
                            var2.description = var0;
                            var5 = _closure1_slot3;
                            var8 = undefined;
                            var0 = function*() { // Environment: var3
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun52896: for (var _fun52896_ip = 0;;) switch (_fun52896_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun52896_ip = 118;
                                                continue _fun52896
                                            }
                                        case 7:
                                            var8 = _closure1_slot0;
                                            var9 = _closure1_slot2;
                                            var3 = 9;
                                            var1 = var9[var3];
                                            var2 = undefined;
                                            var7 = var8.bind(var2)(var1);
                                            var6 = var7.trackAgeVerificationModalClicked;
                                            var5 = _closure2_slot0;
                                            var4 = var9[var3];
                                            var4 = var8.bind(var2)(var4);
                                            var4 = var4.AgeVerificationModalVersion;
                                            var4 = var4.RETRY;
                                            var3 = var9[var3];
                                            var3 = var8.bind(var2)(var3);
                                            var3 = var3.AgeVerificationModalCta;
                                            var3 = var3.GET_STARTED;
                                            var3 = var6.bind(var7)(var5, var4, var3);
                                            var1 = _closure2_slot1;
                                            var1 = var1.bind(var2)();
                                            SaveGenerator(address = 106);
                                        case 104:
                                            return var1;
                                        case 106:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                            if (var3) {
                                                _fun52896_ip = 115;
                                                continue _fun52896
                                            }
                                        case 112:
                                            return var2;
                                        case 115:
                                            return var1;
                                        case 118:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var0 = var5.bind(var8)(var0);
                            var _closure3_slot0 = var0;
                            var0 = function() { // Environment: var3
                                var0 = undefined;
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var2.onPress = var0;
                            var0 = new Array(1);
                            var0[0] = var2;
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun52894_ip = 272;
                                continue _fun52894
                            }
                        case 140:
                            var2 = var0.push;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 13;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5["LZO+Hd"];
                            var5 = var6.bind(var10)(var5);
                            var1.title = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4["ty+iWP"];
                            var4 = var5.bind(var6)(var4);
                            var1.description = var4;
                            var3 = function() {
                                var3 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var0 = 14;
                                var2 = var7[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.openUrl;
                                var2 = _closure1_slot9;
                                var2 = var2.APPEALS_LINK;
                                var2 = var3.bind(var4)(var2);
                                var6 = _closure1_slot0;
                                var1 = 9;
                                var2 = var7[var1];
                                var5 = var6.bind(var0)(var2);
                                var4 = var5.trackAgeVerificationModalClicked;
                                var3 = _closure2_slot0;
                                var2 = var7[var1];
                                var2 = var6.bind(var0)(var2);
                                var2 = var2.AgeVerificationModalVersion;
                                var2 = var2.RETRY;
                                var1 = var7[var1];
                                var1 = var6.bind(var0)(var1);
                                var1 = var1.AgeVerificationModalCta;
                                var1 = var1.MANUAL_REVIEW_REQUEST;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var1.onPress = var3;
                            var1 = var2.bind(var0)(var1);
                        case 272:
                            return var0;
                    }
                };
                var20 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                if (!var5) {
                    _fun52893_ip = 694;
                    continue _fun52893
                }
            case 590:
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var4 = {};
                var8 = var15.loadingIndicator;
                var4.style = var8;
                var8 = 'small';
                var4.size = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 15;
                var8 = var11[var8];
                var10 = var10.bind(var3)(var8);
                var8 = var10.isAndroid;
                var10 = var8.bind(var10)();
                var8 = undefined;
                if (!var10) {
                    _fun52893_ip = 684;
                    continue _fun52893
                }
            case 653:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 7;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.unsafe_rawColors;
                var8 = var10.WHITE;
            case 684:
                var4.color = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 694:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var15.container;
                var5.style = var8;
                var10 = _closure1_slot7;
                var8 = {};
                var11 = var15.headerContainer;
                var8.style = var11;
                var11 = _closure1_slot10;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 16;
                var9 = var12[var9];
                var9 = var13.bind(var3)(var9);
                var14 = var9.ShieldSpotIllustration;
                var9 = {};
                var9 = var11.bind(var3)(var14, var9);
                var14 = new Array(3);
                var14[0] = var9;
                var9 = 17;
                var18 = var12[var9];
                var18 = var13.bind(var3)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var23 = var15.centerText;
                var18.style = var23;
                var18.children = var22;
                var18 = var11.bind(var3)(var19, var18);
                var14[1] = var18;
                var18 = var12[var9];
                var18 = var13.bind(var3)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'heading-md/medium',
                    'color': 'text-strong'
                };
                var22 = var15.centerText;
                var18.style = var22;
                var18.children = var21;
                var18 = var11.bind(var3)(var19, var18);
                var14[2] = var18;
                var8.children = var14;
                var10 = var7.bind(var3)(var10, var8);
                var8 = new Array(3);
                var8[0] = var10;
                var10 = 18;
                var10 = var12[var10];
                var10 = var13.bind(var3)(var10);
                var14 = var10.TableRowGroup;
                var10 = {};
                var19 = var20.map;
                var18 = function(arg0, arg1) { // Environment: var16
                    var0 = arg0;
                    var6 = var0.title;
                    var5 = var0.description;
                    var0 = var0.onPress;
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var7 = true;
                    var1.arrow = var7;
                    var1.label = var6;
                    var1.subLabel = var5;
                    var1.onPress = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var18 = var19.bind(var20)(var18);
                var10.children = var18;
                var10 = var11.bind(var3)(var14, var10);
                var8[1] = var10;
                var9 = var12[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var18 = var15.centerText;
                var14 = new Array(2);
                var14[0] = var18;
                var15 = var15.helpLink;
                var14[1] = var15;
                var9.style = var14;
                var14 = var12[var17];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.format;
                var12 = var12[var17];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12["L+FgkZ"];
                var12 = {};
                var16 = function() {
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 14;
                    var2 = var7[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2);
                    var3 = var4.openUrl;
                    var2 = 20;
                    var2 = var7[var2];
                    var6 = var5.bind(var0)(var2);
                    var5 = var6.getArticleURL;
                    var2 = _closure1_slot8;
                    var2 = var2.TIGGER_PAWTECT_LEARN_MORE;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    var6 = _closure1_slot0;
                    var1 = 9;
                    var2 = var7[var1];
                    var5 = var6.bind(var0)(var2);
                    var4 = var5.trackAgeVerificationModalClicked;
                    var3 = _closure2_slot0;
                    var2 = var7[var1];
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.AgeVerificationModalVersion;
                    var2 = var2.RETRY;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.AgeVerificationModalCta;
                    var1 = var1.LEARN_MORE;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var12.handleOnHelpUrlHook = var16;
                var12 = var14.bind(var15)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 660, 5903, 33, 1297, 671, 4212, 4519, 5923, 5896, 4517, 1234, 5894, 478, 5924, 3900, 5325, 4861, 1675, 2]);