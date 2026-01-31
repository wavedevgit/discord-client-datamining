// modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildOwner;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot6 = var6;
    var6 = var3.HelpdeskArticles;
    var _closure1_slot7 = var6;
    var3 = var3.MarketingURLs;
    var _closure1_slot8 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116481: for (var _fun116481_ip = 0;;) switch (_fun116481_ip) {
            case 0:
                var21 = arg0;
                var _closure2_slot0 = var21;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var25 = undefined;
                var2 = var2.bind(var25)(var1);
                var1 = var2.useIsExpeditedOnboardingGuild;
                var1 = var1.bind(var2)(var21);
                var7 = null;
                var2 = var7 == var21;
                var6 = undefined;
                if (var2) {
                    _fun116481_ip = 82;
                    continue _fun116481
                }
            case 56:
                var4 = var21.features;
                var3 = var4.has;
                var2 = _closure1_slot6;
                var2 = var2.CREATOR_MONETIZABLE_PROVISIONAL;
                var6 = var3.bind(var4)(var2);
            case 82:
                var2 = var7 == var21;
                var20 = undefined;
                if (var2) {
                    _fun116481_ip = 117;
                    continue _fun116481
                }
            case 91:
                var4 = var21.features;
                var3 = var4.has;
                var2 = _closure1_slot6;
                var2 = var2.CREATOR_MONETIZABLE;
                var20 = var3.bind(var4)(var2);
            case 117:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var8 = var3.bind(var25)(var2);
                var5 = var8.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun116482: for (var _fun116482_ip = 0;;) switch (_fun116482_ip) {
                        case 0:
                            var1 = _closure1_slot5;
                            var0 = var1.getCurrentUser;
                            var4 = var0.bind(var1)();
                            var3 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun116482_ip = 48;
                                continue _fun116482
                            }
                        case 32:
                            var3 = _closure1_slot4;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2, var4);
                        case 48:
                            return var0;
                    }
                };
                var16 = var5.bind(var8)(var3, var2);
                var3 = _closure1_slot1;
                var2 = 6;
                var2 = var4[var2];
                var3 = var3.bind(var25)(var2);
                var4 = var7 == var21;
                var2 = undefined;
                if (var4) {
                    _fun116481_ip = 197;
                    continue _fun116481
                }
            case 192:
                var2 = var21.id;
            case 197:
                var2 = var3.bind(var25)(var2);
                var17 = var2.error;
                var18 = var2.loading;
                var15 = var2.createEnableRequest;
                var14 = var2.submittedRequest;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var3 = var3.bind(var25)(var2);
                var4 = var7 == var21;
                var2 = undefined;
                if (var4) {
                    _fun116481_ip = 259;
                    continue _fun116481
                }
            case 254:
                var2 = var21.id;
            case 259:
                var2 = var3.bind(var25)(var2);
                var13 = var2.loading;
                var12 = var2.error;
                var11 = var2.refresh;
                var _closure2_slot1 = var11;
                var10 = var2.eligibility;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var2 = var3.bind(var25)(var2);
                var2 = var2.bind(var25)(var10);
                var5 = var2.isApplicationRejected;
                var28 = var2.requestCooldownDuration;
                var3 = var7 == var21;
                var2 = undefined;
                if (var3) {
                    _fun116481_ip = 363;
                    continue _fun116481
                }
            case 337:
                var8 = var21.features;
                var4 = var8.has;
                var3 = _closure1_slot6;
                var3 = var3.CREATOR_MONETIZABLE_RESTRICTED;
                var2 = var4.bind(var8)(var3);
            case 363:
                var3 = true;
                var4 = var3 === var2;
                if (var4) {
                    _fun116481_ip = 411;
                    continue _fun116481
                }
            case 372:
                var8 = var7 == var21;
                var2 = undefined;
                if (var8) {
                    _fun116481_ip = 407;
                    continue _fun116481
                }
            case 381:
                var22 = var21.features;
                var9 = var22.has;
                var8 = _closure1_slot6;
                var8 = var8.CREATOR_MONETIZABLE_DISABLED;
                var2 = var9.bind(var22)(var8);
            case 407:
                var4 = var3 === var2;
            case 411:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 9;
                var2 = var9[var2];
                var9 = var8.bind(var25)(var2);
                var8 = var9.useIsMonetizationReapplicationDisabled;
                var22 = var7 == var21;
                var2 = undefined;
                if (var22) {
                    _fun116481_ip = 451;
                    continue _fun116481
                }
            case 446:
                var2 = var21.id;
            case 451:
                var2 = var8.bind(var9)(var2);
                var21 = var2.isMonetizationReapplicationDisabled;
                var8 = var14;
                if (var8) {
                    _fun116481_ip = 487;
                    continue _fun116481
                }
            case 468:
                var9 = var7 == var10;
                var2 = undefined;
                if (var9) {
                    _fun116481_ip = 483;
                    continue _fun116481
                }
            case 477:
                var2 = var10.isApplicationPending;
            case 483:
                var8 = var3 === var2;
            case 487:
                var9 = var7 == var10;
                var2 = undefined;
                if (var9) {
                    _fun116481_ip = 502;
                    continue _fun116481
                }
            case 496:
                var2 = var10.canApply;
            case 502:
                var9 = var3 === var2;
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var26 = 10;
                var2 = var27[var26];
                var2 = var22.bind(var25)(var2);
                var24 = var2.intl;
                var23 = var24.format;
                var2 = var27[var26];
                var2 = var22.bind(var25)(var2);
                var2 = var2.t;
                var22 = var2.aJUdOi;
                var2 = {};
                var30 = _closure1_slot1;
                var29 = 11;
                var27 = var27[var29];
                var31 = var30.bind(var25)(var27);
                var30 = var31.getArticleURL;
                var27 = _closure1_slot7;
                var27 = var27.CREATOR_FAQ;
                var27 = var30.bind(var31)(var27);
                var2.faqUrl = var27;
                var2 = var23.bind(var24)(var22, var2);
                if (!var5) {
                    _fun116481_ip = 619;
                    continue _fun116481
                }
            case 613:
                if (var21) {
                    _fun116481_ip = 743;
                    continue _fun116481
                }
            case 619:
                var21 = var5;
                if (!var5) {
                    _fun116481_ip = 629;
                    continue _fun116481
                }
            case 625:
                var21 = var7 != var28;
            case 629:
                var7 = undefined;
                if (!var21) {
                    _fun116481_ip = 896;
                    continue _fun116481
                }
            case 637:
                var22 = _closure1_slot0;
                var27 = _closure1_slot2;
                var21 = var27[var26];
                var21 = var22.bind(var25)(var21);
                var24 = var21.intl;
                var23 = var24.format;
                var21 = var27[var26];
                var21 = var22.bind(var25)(var21);
                var21 = var21.t;
                var22 = var21.TvX207;
                var21 = {};
                var21.requestCooldownDuration = var28;
                var28 = _closure1_slot1;
                var27 = var27[var29];
                var29 = var28.bind(var25)(var27);
                var28 = var29.getArticleURL;
                var27 = _closure1_slot7;
                var27 = var27.CREATOR_POLICY;
                var27 = var28.bind(var29)(var27);
                var21.creatorRevenuePolicyUrl = var27;
                var7 = var23.bind(var24)(var22, var21);
                _fun116481_ip = 896;
                continue _fun116481;
            case 743:
                if (!(var3 !== var6)) {
                    _fun116481_ip = 821;
                    continue _fun116481
                }
            case 747:
                var21 = _closure1_slot0;
                var3 = _closure1_slot2;
                var22 = var3[var26];
                var22 = var21.bind(var25)(var22);
                var23 = var22.intl;
                var22 = var23.format;
                var3 = var3[var26];
                var3 = var21.bind(var25)(var3);
                var3 = var3.t;
                var21 = var3.b6h59n;
                var3 = {};
                var24 = _closure1_slot8;
                var24 = var24.GUIDELINES;
                var3.communityGuidelineUrl = var24;
                var3 = var22.bind(var23)(var21, var3);
                _fun116481_ip = 893;
                continue _fun116481;
            case 821:
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var23 = var21[var26];
                var23 = var22.bind(var25)(var23);
                var24 = var23.intl;
                var23 = var24.format;
                var21 = var21[var26];
                var21 = var22.bind(var25)(var21);
                var21 = var21.t;
                var22 = var21["0o1Q+t"];
                var21 = {};
                var27 = _closure1_slot8;
                var27 = var27.GUIDELINES;
                var21.communityGuidelineUrl = var27;
                var3 = var23.bind(var24)(var22, var21);
            case 893:
                var7 = var3;
            case 896:
                var22 = var1;
                if (!var1) {
                    _fun116481_ip = 905;
                    continue _fun116481
                }
            case 902:
                var22 = var16;
            case 905:
                if (!var22) {
                    _fun116481_ip = 914;
                    continue _fun116481
                }
            case 908:
                var3 = false;
                var22 = var3 === var20;
            case 914:
                var _closure2_slot2 = var22;
                var3 = var1;
                if (!var3) {
                    _fun116481_ip = 930;
                    continue _fun116481
                }
            case 924:
                var1 = false;
                var3 = var1 === var6;
            case 930:
                var6 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 12;
                var1 = var20[var1];
                var6 = var6.bind(var25)(var1);
                var1 = var6.getCreatorMonetizationAcceptTermsCheckboxText;
                var1 = var1.bind(var6)();
                var6 = undefined;
                if (!var5) {
                    _fun116481_ip = 1032;
                    continue _fun116481
                }
            case 965:
                var6 = undefined;
                if (!var9) {
                    _fun116481_ip = 1032;
                    continue _fun116481
                }
            case 970:
                var6 = undefined;
                if (!var16) {
                    _fun116481_ip = 1032;
                    continue _fun116481
                }
            case 975:
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var23 = var20[var26];
                var23 = var21.bind(var25)(var23);
                var24 = var23.intl;
                var23 = var24.format;
                var20 = var20[var26];
                var20 = var21.bind(var25)(var20);
                var20 = var20.t;
                var21 = var20.wbVIUB;
                var20 = {};
                var6 = var23.bind(var24)(var21, var20);
            case 1032:
                var21 = _closure1_slot3;
                var20 = var21.useEffect;
                var19 = new Array(2);
                var19[0] = var11;
                var19[1] = var22;
                var0 = function() { // Environment: var0
                    _fun116483: for (var _fun116483_ip = 0;;) switch (_fun116483_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun116483_ip = 20;
                                continue _fun116483
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 20:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var20.bind(var21)(var0, var19);
                var0 = {};
                var0.resubmittingEnableRequest = var18;
                var0.resubmissionError = var17;
                var0.isGuildOwner = var16;
                var0.createEnableRequest = var15;
                var0.resubmittedRequest = var14;
                var0.eligibilityLoading = var13;
                var0.eligibilityError = var12;
                var0.refreshEligibility = var11;
                var0.eligibility = var10;
                var0.eligibleForMonetization = var9;
                var0.isApplicationPending = var8;
                var0.hasPreviousApplicationRejection = var5;
                var0.requestRejectedNoticeText = var7;
                var0.reapplyNoticeText = var6;
                var0.showAcceptTermsFlow = var3;
                if (!var3) {
                    _fun116481_ip = 1159;
                    continue _fun116481
                }
            case 1150:
                if (var4) {
                    _fun116481_ip = 1156;
                    continue _fun116481
                }
            case 1153:
                var4 = var5;
            case 1156:
                var3 = var4;
            case 1159:
                var0.wasRejectedInV1 = var3;
                var0.requirementsFinePrintText = var2;
                var0.acceptTermsCheckboxText = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1416, 1613, 660, 5598, 632, 14812, 14813, 14814, 5584, 1234, 1675, 14815, 2]);