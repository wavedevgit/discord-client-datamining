// modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var0 = function(arg0) { // Original name: ApplicationStatusNotice, environment: var4
        _fun116343: for (var _fun116343_ip = 0;;) switch (_fun116343_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.style;
                var12 = var0.resubmittingEnableRequest;
                var8 = var0.resubmissionError;
                var13 = var0.createEnableRequest;
                var15 = var0.requestRejectedNoticeText;
                var2 = var0.reapplyNoticeText;
                var1 = var0.isApplicationPending;
                var0 = _closure1_slot14;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var0 = null;
                if (!(var0 == var8)) {
                    _fun116343_ip = 316;
                    continue _fun116343
                }
            case 66:
                if (var1) {
                    _fun116343_ip = 152;
                    continue _fun116343
                }
            case 69:
                var1 = var0 != var15;
                var14 = undefined;
                if (var1) {
                    _fun116343_ip = 211;
                    continue _fun116343
                }
            case 81:
                var1 = var0 != var2;
                var15 = null;
                var14 = undefined;
                if (!var1) {
                    _fun116343_ip = 211;
                    continue _fun116343
                }
            case 92:
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var1 = 10;
                var7 = var11[var1];
                var7 = var10.bind(var3)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var1 = var11[var1];
                var1 = var10.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["YKw/NQ"];
                var14 = var7.bind(var9)(var1);
                var15 = var2;
                _fun116343_ip = 211;
                continue _fun116343;
            case 152:
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 10;
                var2 = var10[var1];
                var2 = var9.bind(var3)(var2);
                var7 = var2.intl;
                var2 = var7.string;
                var1 = var10[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.OrkTBn;
                var15 = var2.bind(var7)(var1);
                var14 = undefined;
            case 211:
                var1 = var0 != var15;
                var0 = null;
                if (!var1) {
                    _fun116343_ip = 314;
                    continue _fun116343
                }
            case 220:
                var7 = _closure1_slot11;
                var2 = _closure1_slot6;
                var1 = {};
                var10 = var5.statusNoticeContainer;
                var9 = new Array(2);
                var9[0] = var10;
                var9[1] = var6;
                var1.style = var9;
                var11 = _closure1_slot11;
                var10 = _closure1_slot1;
                var16 = _closure1_slot3;
                var9 = 11;
                var9 = var16[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.notice = var15;
                var9.ctaLabel = var14;
                var9.onClick = var13;
                var9.submitting = var12;
                var9 = var11.bind(var3)(var10, var9);
                var1.children = var9;
                var0 = var7.bind(var3)(var2, var1);
            case 314:
                return var0;
            case 316:
                var2 = _closure1_slot11;
                var1 = _closure1_slot6;
                var0 = {};
                var7 = var5.statusNoticeContainer;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var6 = _closure1_slot11;
                var5 = _closure1_slot1;
                var7 = _closure1_slot3;
                var4 = 9;
                var4 = var7[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var7 = var8.getAnyErrorMessage;
                var7 = var7.bind(var8)();
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var3 = function(arg0) { // Original name: SectionContainer, environment: var4
        _fun116344: for (var _fun116344_ip = 0;;) switch (_fun116344_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.title;
                var5 = var0.children;
                var9 = var0.footer;
                var4 = var0.onLayout;
                var0 = _closure1_slot14;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot12;
                var1 = _closure1_slot6;
                var0 = {};
                var0.onLayout = var4;
                var4 = var10.container;
                var0.style = var4;
                var8 = _closure1_slot11;
                var7 = _closure1_slot6;
                var4 = {};
                var11 = var10.divider;
                var4.style = var11;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(4);
                var4[0] = var7;
                var12 = _closure1_slot11;
                var8 = _closure1_slot0;
                var7 = _closure1_slot3;
                var11 = 12;
                var7 = var7[var11];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'heading-lg/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var10.sectionTitle;
                var7.style = var14;
                var7.children = var13;
                var7 = var12.bind(var3)(var8, var7);
                var4[1] = var7;
                var4[2] = var5;
                var5 = null;
                var5 = var5 != var9;
                if (!var5) {
                    _fun116344_ip = 240;
                    continue _fun116344
                }
            case 178:
                var8 = _closure1_slot11;
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var11];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var10 = var10.sectionFooter;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 240:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var0 = function(arg0) { // Original name: StartEarningButton, environment: var4
        _fun116345: for (var _fun116345_ip = 0;;) switch (_fun116345_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var14 = var0.isTermsAccepted;
                var _closure2_slot0 = var14;
                var2 = var0.setTermsAccepted;
                var _closure2_slot1 = var2;
                var16 = var0.eligibleForMonetization;
                var8 = var0.eligibility;
                var _closure2_slot2 = var8;
                var11 = var0.acceptTermsCheckboxText;
                var5 = var0.style;
                var10 = var0.isFab;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun116345_ip = 71;
                    continue _fun116345
                }
            case 69:
                var10 = false;
            case 71:
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var0 = _closure1_slot14;
                var20 = var0.bind(var3)();
                _closure2_slot3 = var20;
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var0 = 13;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                var17 = var0.canSubmitAcceptance;
                var19 = var0.error;
                var18 = var0.loading;
                var1 = var0.submitAcceptTermsRequest;
                _closure2_slot4 = var1;
                var6 = _closure1_slot0;
                var0 = 14;
                var0 = var4[var0];
                var2 = var6.bind(var3)(var0);
                var0 = var2.useNavigation;
                var0 = var0.bind(var2)();
                _closure2_slot5 = var0;
                var12 = _closure1_slot5;
                var7 = var12.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var9
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var12 = var7.bind(var12)(var1, var2);
                var7 = _closure1_slot5;
                var2 = var7.useCallback;
                var1 = new Array(2);
                var1[0] = var8;
                var1[1] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 15;
                    var1 = var6[var1];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var3 = var4.openLazy;
                    var1 = _closure1_slot0;
                    var0 = 17;
                    var0 = var6[var0];
                    var7 = var1.bind(var5)(var0);
                    var0 = 16;
                    var2 = var6[var0];
                    var0 = var6.paths;
                    var2 = var7.bind(var5)(var2, var0);
                    var0 = 18;
                    var0 = var6[var0];
                    var0 = var1.bind(var5)(var0);
                    var1 = var0.ELIGIBILITY_ACTION_SHEET_KEY;
                    var0 = {};
                    var5 = _closure2_slot2;
                    var0.eligibility = var5;
                    var5 = function() { // Original name: onRequireModeratorMFAClick, environment: var5
                        var2 = _closure2_slot5;
                        var1 = var2.push;
                        var0 = _closure1_slot9;
                        var0 = var0.SECURITY;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.onRequireModeratorMFAClick = var5;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var8 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot11;
                var7 = 19;
                var0 = var4[var7];
                var0 = var6.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var13 = var20.tos;
                var0.style = var13;
                var21 = _closure1_slot11;
                var7 = var4[var7];
                var7 = var6.bind(var3)(var7);
                var7 = var7.FormRow;
                var13 = var7.Checkbox;
                var7 = {};
                var7.selected = var14;
                var7 = var21.bind(var3)(var13, var7);
                var0.leading = var7;
                var7 = _closure1_slot11;
                var21 = 12;
                var4 = var4[var21];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-default'
                };
                var4.children = var11;
                var4 = var7.bind(var3)(var6, var4);
                var0.label = var4;
                var4 = function() { // Original name: onPress, environment: var9
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var4 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot12;
                var1 = _closure1_slot6;
                var0 = {};
                var0.style = var5;
                var5 = var16;
                if (!var5) {
                    _fun116345_ip = 429;
                    continue _fun116345
                }
            case 407:
                var7 = true;
                var6 = var7 === var10;
                if (!var6) {
                    _fun116345_ip = 419;
                    continue _fun116345
                }
            case 416:
                var6 = !var14;
            case 419:
                if (var6) {
                    _fun116345_ip = 426;
                    continue _fun116345
                }
            case 422:
                var6 = var7 !== var10;
            case 426:
                var5 = var6;
            case 429:
                if (!var5) {
                    _fun116345_ip = 435;
                    continue _fun116345
                }
            case 432:
                var5 = var4;
            case 435:
                var4 = new Array(2);
                var4[0] = var5;
                if (var16) {
                    _fun116345_ip = 615;
                    continue _fun116345
                }
            case 449:
                var7 = _closure1_slot11;
                var11 = _closure1_slot1;
                var23 = _closure1_slot3;
                var10 = 20;
                var5 = var23[var10];
                var6 = var11.bind(var3)(var5);
                var5 = {};
                var22 = var20.startEarningButton;
                var13 = new Array(2);
                var13[0] = var22;
                var22 = var20.ineligibleButton;
                var13[1] = var22;
                var5.style = var13;
                var5.loading = var18;
                var10 = var23[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.Colors;
                var10 = var10.BRAND;
                var5.color = var10;
                var22 = _closure1_slot0;
                var10 = 10;
                var11 = var23[var10];
                var11 = var22.bind(var3)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var10 = var23[var10];
                var10 = var22.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.NL5ZNS;
                var10 = var11.bind(var13)(var10);
                var5.text = var10;
                var9 = function() { // Original name: renderIcon, environment: var9
                    var3 = _closure1_slot11;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 22;
                    var0 = var6[var4];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var7 = 23;
                    var7 = var6[var7];
                    var7 = var5.bind(var2)(var7);
                    var0.source = var7;
                    var7 = 8;
                    var7 = var6[var7];
                    var7 = var5.bind(var2)(var7);
                    var7 = var7.unsafe_rawColors;
                    var7 = var7.WHITE;
                    var0.color = var7;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.Sizes;
                    var4 = var4.SMALL_20;
                    var0.size = var4;
                    var4 = _closure2_slot3;
                    var4 = var4.ineligibleButtonIcon;
                    var0.style = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5.renderIcon = var9;
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                _fun116345_ip = 928;
                continue _fun116345;
            case 615:
                var8 = _closure1_slot12;
                var7 = _closure1_slot13;
                var6 = {};
                var11 = _closure1_slot11;
                var10 = _closure1_slot1;
                var9 = _closure1_slot3;
                var13 = 20;
                var9 = var9[var13];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var22 = var20.startEarningButton;
                var20 = new Array(1);
                var20[0] = var22;
                var9.style = var20;
                var9.loading = var18;
                var14 = !var14;
                if (var14) {
                    _fun116345_ip = 683;
                    continue _fun116345
                }
            case 680:
                var14 = !var17;
            case 683:
                if (var14) {
                    _fun116345_ip = 689;
                    continue _fun116345
                }
            case 686:
                var14 = !var16;
            case 689:
                var9.disabled = var14;
                var14 = _closure1_slot1;
                var18 = _closure1_slot3;
                var13 = var18[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Colors;
                var13 = var13.BRAND;
                var9.color = var13;
                var17 = _closure1_slot0;
                var13 = 10;
                var14 = var18[var13];
                var14 = var17.bind(var3)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var13 = var18[var13];
                var13 = var17.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.NL5ZNS;
                var13 = var14.bind(var16)(var13);
                var9.text = var13;
                var9.onPress = var12;
                var10 = var11.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = null;
                var10 = var10 != var19;
                if (!var10) {
                    _fun116345_ip = 914;
                    continue _fun116345
                }
            case 808:
                var13 = _closure1_slot12;
                var12 = _closure1_slot13;
                var11 = {};
                var20 = _closure1_slot11;
                var16 = _closure1_slot1;
                var18 = _closure1_slot3;
                var14 = 21;
                var14 = var18[var14];
                var17 = var16.bind(var3)(var14);
                var14 = {};
                var14.size = var21;
                var17 = var20.bind(var3)(var17, var14);
                var14 = new Array(2);
                var14[0] = var17;
                var17 = _closure1_slot11;
                var15 = 9;
                var15 = var18[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var18 = var19.getAnyErrorMessage;
                var18 = var18.bind(var19)();
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 914:
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 928:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var1 = function(arg0) { // Original name: MarketingSections, environment: var4
        _fun116351: for (var _fun116351_ip = 0;;) switch (_fun116351_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.onboardingMarketing;
                var2 = var0.onHowItWorksLayoutChange;
                var7 = _closure1_slot11;
                var6 = _closure1_slot16;
                var3 = {};
                var13 = _closure1_slot0;
                var11 = _closure1_slot3;
                var0 = 10;
                var9 = var11[var0];
                var4 = undefined;
                var9 = var13.bind(var4)(var9);
                var12 = var9.intl;
                var10 = var12.string;
                var9 = var11[var0];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.R9rNIk;
                var9 = var10.bind(var12)(var9);
                var3.title = var9;
                var9 = var11[var0];
                var9 = var13.bind(var4)(var9);
                var14 = var9.intl;
                var12 = var14.format;
                var9 = var11[var0];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var10 = var9.oxW30N;
                var9 = {};
                var15 = _closure1_slot8;
                var9.creatorPortalUrl = var15;
                var9 = var12.bind(var14)(var10, var9);
                var3.footer = var9;
                var3.onLayout = var2;
                var12 = _closure1_slot11;
                var9 = _closure1_slot1;
                var2 = 24;
                var2 = var11[var2];
                var10 = var9.bind(var4)(var2);
                var2 = {};
                var2 = var12.bind(var4)(var10, var2);
                var3.children = var2;
                var2 = _closure1_slot10;
                var2 = var2.HOW_IT_WORKS;
                var7 = var7.bind(var4)(var6, var3, var2);
                var _closure2_slot0 = var7;
                var3 = _closure1_slot11;
                var2 = {};
                var10 = var11[var0];
                var10 = var13.bind(var4)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var0 = var11[var0];
                var0 = var13.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["1QHJaW"];
                var0 = var10.bind(var12)(var0);
                var2.title = var0;
                var10 = _closure1_slot11;
                var0 = 25;
                var0 = var11[var0];
                var9 = var9.bind(var4)(var0);
                var0 = {};
                var0 = var10.bind(var4)(var9, var0);
                var2.children = var0;
                var0 = _closure1_slot10;
                var0 = var0.BENEFITS;
                var6 = var3.bind(var4)(var6, var2, var0);
                var _closure2_slot1 = var6;
                var2 = null;
                var3 = var2 == var8;
                var0 = undefined;
                if (var3) {
                    _fun116351_ip = 336;
                    continue _fun116351
                }
            case 330:
                var0 = var8.sections;
            case 336:
                if (!(var2 != var0)) {
                    _fun116351_ip = 385;
                    continue _fun116351
                }
            case 340:
                var3 = _closure1_slot11;
                var2 = _closure1_slot13;
                var0 = {};
                var9 = var8.sections;
                var8 = var9.map;
                var5 = function(arg0) { // Environment: var5
                    _fun116352: for (var _fun116352_ip = 0;;) switch (_fun116352_ip) {
                        case 0:
                            var8 = arg0;
                            var2 = var8.type;
                            var1 = _closure1_slot10;
                            var1 = var1.HOW_IT_WORKS;
                            if (!(var1 !== var2)) {
                                _fun116352_ip = 209;
                                continue _fun116352
                            }
                        case 28:
                            var1 = _closure1_slot10;
                            var1 = var1.BENEFITS;
                            if (!(var1 !== var2)) {
                                _fun116352_ip = 200;
                                continue _fun116352
                            }
                        case 45:
                            var1 = _closure1_slot10;
                            var1 = var1.OTHER_CREATORS;
                            if (!(var1 !== var2)) {
                                _fun116352_ip = 63;
                                continue _fun116352
                            }
                        case 59:
                            var1 = undefined;
                            return var1;
                        case 63:
                            var4 = _closure1_slot11;
                            var3 = _closure1_slot16;
                            var2 = {};
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var5 = 10;
                            var6 = var9[var5];
                            var1 = undefined;
                            var6 = var10.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var10.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5["tJp+QV"];
                            var5 = var6.bind(var7)(var5);
                            var2.title = var5;
                            var7 = _closure1_slot11;
                            var6 = _closure1_slot1;
                            var5 = 26;
                            var5 = var9[var5];
                            var6 = var6.bind(var1)(var5);
                            var5 = {};
                            var8 = var8.creators;
                            var5.highlightedCreators = var8;
                            var5 = var7.bind(var1)(var6, var5);
                            var2.children = var5;
                            var0 = _closure1_slot10;
                            var0 = var0.OTHER_CREATORS;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                        case 200:
                            var0 = _closure2_slot1;
                            return var0;
                        case 209:
                            var0 = _closure2_slot0;
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var5);
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun116351_ip = 417;
                continue _fun116351;
            case 385:
                var3 = _closure1_slot12;
                var2 = _closure1_slot13;
                var1 = {};
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 417:
                return var0;
        }
    };
    var _closure1_slot18 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var13.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var11 = 1;
    var5 = var7[var11];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.View;
    var _closure1_slot6 = var8;
    var5 = var5.ScrollView;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.CREATOR_REVENUE_PORTAL_URL;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.GuildSettingsSections;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.CreatorMonetizationOnboardingMarketingSection;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.jsx;
    var _closure1_slot11 = var8;
    var8 = var5.jsxs;
    var _closure1_slot12 = var8;
    var5 = var5.Fragment;
    var _closure1_slot13 = var5;
    var5 = 7;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var10.flex = var11;
    var5.container = var10;
    var10 = {
        'flex': 1,
        'flexDirection': 'row'
    };
    var5.horizontalContainer = var10;
    var11 = 24;
    var10 = {
        'flex': 1,
        'padding': 24
    };
    var5.contentContainer = var10;
    var10 = {
        'resizeMode': 'cover',
        'width': '100%'
    };
    var5.heroImage = var10;
    var10 = {};
    var12 = 8;
    var10.marginTop = var12;
    var5.subtitle = var10;
    var10 = {};
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var14;
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10.borderRadius = var14;
    var14 = 10;
    var10.marginTop = var14;
    var5.tos = var10;
    var10 = {
        'height': 52,
        'marginTop': 12,
        'paddingVertical': 16
    };
    var5.startEarningButton = var10;
    var10 = {};
    var14 = 14;
    var10.marginTop = var14;
    var5.startEarningButtonContainer = var10;
    var10 = {};
    var10.marginHorizontal = var11;
    var5.startEarningFabContainer = var10;
    var10 = {
        'width': '100%',
        'height': 0.8,
        'marginTop': 36
    };
    var11 = 36;
    var12 = var7[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_MUTED;
    var10.backgroundColor = var12;
    var5.divider = var10;
    var10 = {
        'marginTop': 36,
        'marginBottom': 10
    };
    var5.sectionTitle = var10;
    var10 = {};
    var10.marginTop = var11;
    var5.sectionFooter = var10;
    var10 = {};
    var11 = '#EB5D30';
    var10.backgroundColor = var11;
    var5.ineligibleButton = var10;
    var10 = {
        'position': 'absolute',
        'top': 16,
        'start': 20
    };
    var5.ineligibleButtonIcon = var10;
    var10 = {
        'marginHorizontal': 0,
        'marginTop': 14
    };
    var5.statusNoticeContainer = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot14 = var5;
    var5 = 39;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg0) { // Original name: GuildSettingsRoleSubscriptionWelcomeView, environment: var4
        _fun116353: for (var _fun116353_ip = 0;;) switch (_fun116353_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.guild;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var0 = _closure1_slot14;
                var17 = var0.bind(var4)();
                var24 = _closure1_slot0;
                var26 = _closure1_slot3;
                var0 = 14;
                var0 = var26[var0];
                var2 = var24.bind(var4)(var0);
                var0 = var2.useNavigation;
                var2 = var0.bind(var2)();
                var18 = _closure1_slot1;
                var0 = 27;
                var0 = var26[var0];
                var0 = var18.bind(var4)(var0);
                var32 = var0.bind(var4)(var16);
                var22 = var32.isGuildOwner;
                var8 = var32.eligibilityLoading;
                var3 = var32.eligibilityError;
                var12 = var32.eligibility;
                var0 = var32.refreshEligibility;
                var _closure2_slot0 = var0;
                var13 = var32.eligibleForMonetization;
                var11 = var32.acceptTermsCheckboxText;
                var7 = var32.wasRejectedInV1;
                var5 = 28;
                var5 = var26[var5];
                var6 = var24.bind(var4)(var5);
                var5 = var6.useCreatorMonetizationIneligibleReasons;
                var6 = var5.bind(var6)(var12);
                var5 = 29;
                var5 = var26[var5];
                var10 = var18.bind(var4)(var5);
                var5 = var16.id;
                var10 = var10.bind(var4)(var5);
                var5 = var10.isLoading;
                var30 = var10.creatorMonetizationOnboardingMarketing;
                var14 = _closure1_slot5;
                var10 = var14.useState;
                var25 = false;
                var14 = var10.bind(var14)(var25);
                var10 = _closure1_slot4;
                var23 = 2;
                var10 = var10.bind(var4)(var14, var23);
                var20 = 0;
                var15 = var10[var20];
                var19 = 1;
                var14 = var10[var19];
                var27 = _closure1_slot5;
                var21 = var27.useRef;
                var10 = true;
                var33 = var21.bind(var27)(var10);
                var _closure2_slot1 = var33;
                var21 = 30;
                var21 = var26[var21];
                var27 = var24.bind(var4)(var21);
                var21 = var27.useFocusEffect;
                var31 = _closure1_slot5;
                var29 = var31.useCallback;
                var28 = new Array(2);
                var28[0] = var33;
                var28[1] = var0;
                var0 = function() { // Environment: var9
                    _fun116354: for (var _fun116354_ip = 0;;) switch (_fun116354_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            if (var1) {
                                _fun116354_ip = 25;
                                continue _fun116354
                            }
                        case 15:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 25:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var29.bind(var31)(var0, var28);
                var0 = var21.bind(var27)(var0);
                var28 = _closure1_slot5;
                var27 = var28.useEffect;
                var21 = function() { // Environment: var9
                    _fun116355: for (var _fun116355_ip = 0;;) switch (_fun116355_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            if (!var1) {
                                _fun116355_ip = 27;
                                continue _fun116355
                            }
                        case 15:
                            var1 = _closure2_slot1;
                            var0 = false;
                            var1.current = var0;
                        case 27:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var27.bind(var28)(var21, var0);
                var0 = 31;
                var0 = var26[var0];
                var21 = var18.bind(var4)(var0);
                var18 = {};
                var0 = 32;
                var27 = var26[var0];
                var27 = var24.bind(var4)(var27);
                var27 = var27.ImpressionTypes;
                var27 = var27.PANE;
                var18.type = var27;
                var0 = var26[var0];
                var0 = var24.bind(var4)(var0);
                var0 = var0.ImpressionNames;
                var0 = var0.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING;
                var18.name = var0;
                var0 = {};
                var24 = var16.id;
                var0.guild_id = var24;
                var0.is_owner = var22;
                var0.is_eligible = var13;
                var0.ineligible_reasons = var6;
                var18.properties = var0;
                var6 = {};
                var22 = var16.id;
                var0 = null;
                var22 = var0 == var22;
                if (var22) {
                    _fun116353_ip = 466;
                    continue _fun116353
                }
            case 462:
                var22 = var0 == var12;
            case 466:
                var6.disableTrack = var22;
                var6 = var21.bind(var4)(var18, var6);
                var18 = _closure1_slot5;
                var6 = var18.useState;
                var6 = var6.bind(var18)(var25);
                var21 = _closure1_slot4;
                var18 = var21.bind(var4)(var6, var23);
                var6 = var18[var20];
                var22 = var18[var19];
                _closure2_slot2 = var22;
                var24 = _closure1_slot5;
                var18 = var24.useRef;
                var26 = var18.bind(var24)(var0);
                _closure2_slot3 = var26;
                var24 = _closure1_slot5;
                var18 = var24.useState;
                var18 = var18.bind(var24)();
                var18 = var21.bind(var4)(var18, var23);
                var21 = var18[var20];
                _closure2_slot4 = var21;
                var18 = var18[var19];
                _closure2_slot5 = var18;
                var23 = _closure1_slot5;
                var20 = var23.useCallback;
                var19 = new Array(1);
                var19[0] = var18;
                var18 = function(arg0) { // Environment: var9
                    _fun116356: for (var _fun116356_ip = 0;;) switch (_fun116356_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var0 = var0.y;
                            var _closure3_slot0 = var0;
                            var0 = _closure2_slot3;
                            var5 = null;
                            var2 = var5 == var0;
                            var0 = undefined;
                            var3 = undefined;
                            if (var2) {
                                _fun116356_ip = 62;
                                continue _fun116356
                            }
                        case 46:
                            var4 = _closure2_slot3;
                            var4 = var4.current;
                            var2 = var5 == var4;
                            var3 = var4;
                        case 62:
                            if (var2) {
                                _fun116356_ip = 83;
                                continue _fun116356
                            }
                        case 65:
                            var2 = var3.measure;
                            var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var1
                                var2 = _closure2_slot5;
                                var3 = _closure3_slot0;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var1 = 33;
                                var4 = var6[var1];
                                var0 = undefined;
                                var4 = var5.bind(var0)(var4);
                                var7 = var4.STATUS_BAR_HEIGHT;
                                var4 = arg5;
                                var4 = var4 - var7;
                                var1 = var6[var1];
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.NAV_BAR_HEIGHT;
                                var1 = var4 - var1;
                                var1 = var3 + var1;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 83:
                            return var0;
                    }
                };
                var29 = var20.bind(var23)(var18, var19);
                var20 = _closure1_slot5;
                var19 = var20.useCallback;
                var18 = new Array(2);
                var18[0] = var22;
                var18[1] = var21;
                var9 = function(arg0) { // Environment: var9
                    _fun116358: for (var _fun116358_ip = 0;;) switch (_fun116358_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.contentOffset;
                            var3 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun116358_ip = 52;
                                continue _fun116358
                            }
                        case 28:
                            var2 = _closure2_slot2;
                            var1 = var1.y;
                            var0 = _closure2_slot4;
                            var1 = var1 > var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = var19.bind(var20)(var9, var18);
                if (var8) {
                    _fun116353_ip = 1400;
                    continue _fun116353
                }
            case 636:
                if (!(var0 != var12)) {
                    _fun116353_ip = 1400;
                    continue _fun116353
                }
            case 643:
                if (var5) {
                    _fun116353_ip = 1400;
                    continue _fun116353
                }
            case 649:
                if (!(var0 != var3)) {
                    _fun116353_ip = 745;
                    continue _fun116353
                }
            case 653:
                var3 = _closure1_slot2;
                var20 = _closure1_slot3;
                var0 = 35;
                var0 = var20[var0];
                var5 = var3.bind(var4)(var0);
                var3 = var5.presentFailedToast;
                var18 = _closure1_slot0;
                var0 = 10;
                var8 = var20[var0];
                var8 = var18.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var0 = var20[var0];
                var0 = var18.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.R0RpRX;
                var0 = var8.bind(var9)(var0);
                var0 = var3.bind(var5)(var0);
                var0 = var2.pop;
                var0 = var0.bind(var2)();
            case 745:
                var3 = _closure1_slot12;
                var35 = _closure1_slot0;
                var36 = _closure1_slot3;
                var18 = 36;
                var0 = var36[var18];
                var0 = var35.bind(var4)(var0);
                var2 = var0.SafeAreaPaddingView;
                var0 = {};
                var0.bottom = var10;
                var5 = var17.container;
                var0.style = var5;
                var9 = _closure1_slot11;
                var8 = _closure1_slot7;
                var5 = {};
                var5.onScroll = var19;
                var5.scrollEventThrottle = var18;
                var20 = _closure1_slot12;
                var19 = _closure1_slot6;
                var18 = {};
                var21 = var17.container;
                var18.style = var21;
                var23 = _closure1_slot11;
                var27 = _closure1_slot1;
                var21 = 37;
                var21 = var36[var21];
                var22 = var27.bind(var4)(var21);
                var21 = {};
                var24 = 38;
                var24 = var36[var24];
                var24 = var27.bind(var4)(var24);
                var21.source = var24;
                var24 = 'scale';
                var21.resizeMethod = var24;
                var24 = var17.heroImage;
                var21.style = var24;
                var22 = var23.bind(var4)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var24 = _closure1_slot12;
                var23 = _closure1_slot6;
                var22 = {};
                var22.ref = var26;
                var26 = var17.contentContainer;
                var22.style = var26;
                var22.collapsable = var25;
                var28 = _closure1_slot11;
                var26 = 12;
                var25 = var36[var26];
                var25 = var35.bind(var4)(var25);
                var27 = var25.Text;
                var25 = {
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var31 = 10;
                var33 = var36[var31];
                var33 = var35.bind(var4)(var33);
                var37 = var33.intl;
                var34 = var37.string;
                var33 = var36[var31];
                var33 = var35.bind(var4)(var33);
                var33 = var33.t;
                var33 = var33.QYqDQ0;
                var33 = var34.bind(var37)(var33);
                var25.children = var33;
                var27 = var28.bind(var4)(var27, var25);
                var25 = new Array(4);
                var25[0] = var27;
                var28 = _closure1_slot11;
                var26 = var36[var26];
                var26 = var35.bind(var4)(var26);
                var27 = var26.Text;
                var26 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var33 = var17.subtitle;
                var26.style = var33;
                var33 = var36[var31];
                var33 = var35.bind(var4)(var33);
                var34 = var33.intl;
                var33 = var34.string;
                var31 = var36[var31];
                var31 = var35.bind(var4)(var31);
                var31 = var31.t;
                var31 = var31["41wkMc"];
                var31 = var33.bind(var34)(var31);
                var26.children = var31;
                var26 = var28.bind(var4)(var27, var26);
                var25[1] = var26;
                var31 = _closure1_slot11;
                if (var7) {
                    _fun116353_ip = 1196;
                    continue _fun116353
                }
            case 1138:
                var27 = _closure1_slot17;
                var26 = {};
                var28 = var17.startEarningButtonContainer;
                var26.style = var28;
                var28 = var16.id;
                var26.guildId = var28;
                var26.isTermsAccepted = var15;
                var26.setTermsAccepted = var14;
                var26.eligibleForMonetization = var13;
                var26.eligibility = var12;
                var26.acceptTermsCheckboxText = var11;
                var26 = var31.bind(var4)(var27, var26);
                _fun116353_ip = 1228;
                continue _fun116353;
            case 1196:
                var28 = _closure1_slot15;
                var27 = {};
                var33 = var17.statusNoticeContainer;
                var27.style = var33;
                var39 = var27;
                var38 = var32;
                var32 = copyDataProperties(var39, var38);
                var26 = var31.bind(var4)(var28, var27);
            case 1228:
                var25[2] = var26;
                var28 = _closure1_slot11;
                var27 = _closure1_slot18;
                var26 = {};
                var26.onboardingMarketing = var30;
                var26.onHowItWorksLayoutChange = var29;
                var26 = var28.bind(var4)(var27, var26);
                var25[3] = var26;
                var22.children = var25;
                var22 = var24.bind(var4)(var23, var22);
                var21[1] = var22;
                var18.children = var21;
                var18 = var20.bind(var4)(var19, var18);
                var5.children = var18;
                var8 = var9.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                if (!var6) {
                    _fun116353_ip = 1310;
                    continue _fun116353
                }
            case 1307:
                var6 = var13;
            case 1310:
                if (!var6) {
                    _fun116353_ip = 1316;
                    continue _fun116353
                }
            case 1313:
                var6 = !var7;
            case 1316:
                if (!var6) {
                    _fun116353_ip = 1384;
                    continue _fun116353
                }
            case 1319:
                var9 = _closure1_slot11;
                var8 = _closure1_slot17;
                var7 = {};
                var17 = var17.startEarningFabContainer;
                var7.style = var17;
                var16 = var16.id;
                var7.guildId = var16;
                var7.isTermsAccepted = var15;
                var7.setTermsAccepted = var14;
                var7.eligibleForMonetization = var13;
                var7.eligibility = var12;
                var7.acceptTermsCheckboxText = var11;
                var7.isFab = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 1384:
                var5[1] = var6;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun116353_ip = 1432;
                continue _fun116353;
            case 1400:
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 34;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 1432:
                return var0;
        }
    };
    var2.default = var4;
    var2.SectionContainer = var3;
    var2.MarketingSections = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5597, 660, 14783, 33, 1297, 671, 13950, 1234, 14784, 3900, 14785, 1469, 3237, 14787, 1307, 14787, 5340, 4836, 9226, 4045, 7474, 14795, 14799, 14808, 14811, 14816, 14817, 1470, 5177, 481, 4666, 14781, 3106, 4697, 4667, 14818, 2]);