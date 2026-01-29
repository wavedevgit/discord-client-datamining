// modules/premium/referral_program/native/ReferralProgramPerkCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: getSubheaderCopy, environment: var1
        _fun92502: for (var _fun92502_ip = 0;;) switch (_fun92502_ip) {
            case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.getArticleURL;
                var1 = _closure1_slot6;
                var1 = var1.REFERRAL_PROGRAM;
                var5 = var3.bind(var4)(var1);
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 4;
                var3 = var6[var0];
                var3 = var1.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var0 = var6[var0];
                var0 = var1.bind(var2)(var0);
                var1 = var0.t;
                var0 = arg1;
                if (var0) {
                    _fun92502_ip = 119;
                    continue _fun92502
                }
            case 96:
                var2 = var1["omMr+V"];
                var0 = {};
                var0.helpdeskArticle = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun92502_ip = 140;
                continue _fun92502;
            case 119:
                var2 = var1["TYu+MH"];
                var1 = {};
                var1.helpdeskArticle = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 140:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: UserAvatarProgressBarUnit, environment: var1
        _fun92503: for (var _fun92503_ip = 0;;) switch (_fun92503_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.placement;
                var14 = var0.userRecord;
                var0 = _closure1_slot9;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var0 = null;
                if (!(var0 == var14)) {
                    _fun92503_ip = 299;
                    continue _fun92503
                }
            case 37:
                var2 = _closure1_slot7;
                var12 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 9;
                var0 = var10[var0];
                var1 = var12.bind(var4)(var0);
                var0 = {};
                var3 = var5.emptyReferralSlot;
                var0.style = var3;
                var3 = 90;
                var0.angle = var3;
                var7 = 10;
                var3 = var10[var7];
                var11 = var12.bind(var4)(var3);
                var6 = 7;
                var3 = var10[var6];
                var3 = var12.bind(var4)(var3);
                var3 = var3.unsafe_rawColors;
                var3 = var3.PREMIUM_TIER_2_PURPLE;
                var13 = var11.bind(var4)(var3);
                var3 = var13.alpha;
                var11 = 0.3;
                var13 = var3.bind(var13)(var11);
                var3 = var13.hex;
                var13 = var3.bind(var13)();
                var3 = new Array(2);
                var3[0] = var13;
                var7 = var10[var7];
                var7 = var12.bind(var4)(var7);
                var6 = var10[var6];
                var6 = var12.bind(var4)(var6);
                var6 = var6.unsafe_rawColors;
                var6 = var6.PREMIUM_TIER_2_PINK;
                var7 = var7.bind(var4)(var6);
                var6 = var7.alpha;
                var7 = var6.bind(var7)(var11);
                var6 = var7.hex;
                var6 = var6.bind(var7)();
                var3[1] = var6;
                var0.colors = var3;
                var3 = true;
                var0.useAngle = var3;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var3 = 11;
                var3 = var10[var3];
                var3 = var6.bind(var4)(var3);
                var6 = var3.Text;
                var3 = {};
                var10 = 'heading-md/semibold';
                var3.variant = var10;
                var10 = var5.emptyReferralSlotText;
                var3.style = var10;
                var3.children = var8;
                var3 = var7.bind(var4)(var6, var3);
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun92503_ip = 412;
                continue _fun92503;
            case 299:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var5.avatarContainer;
                var1.style = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 8;
                var5 = var10[var8];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var13 = var14.getAvatarSource;
                var12 = false;
                var11 = 64;
                var11 = var13.bind(var14)(var4, var12, var11);
                var5.source = var11;
                var9 = _closure1_slot0;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.XLARGE;
                var5.size = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 412:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: UserAvatarProgressBarConnector, environment: var1
        _fun92504: for (var _fun92504_ip = 0;;) switch (_fun92504_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.numReferralsSent;
                var6 = var0.placement;
                var0 = _closure1_slot9;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 9;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = var7.connector;
                var5 = new Array(2);
                var5[0] = var9;
                var6 = var8 > var6;
                if (!var6) {
                    _fun92504_ip = 81;
                    continue _fun92504
                }
            case 75:
                var6 = var7.connectorHighlighted;
            case 81:
                var5[1] = var6;
                var0.style = var5;
                var5 = 90;
                var0.angle = var5;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 10;
                var4 = var8[var6];
                var9 = var7.bind(var3)(var4);
                var5 = 7;
                var4 = var8[var5];
                var4 = var7.bind(var3)(var4);
                var4 = var4.unsafe_rawColors;
                var4 = var4.PREMIUM_TIER_2_PURPLE;
                var9 = var9.bind(var3)(var4);
                var4 = var9.hex;
                var9 = var4.bind(var9)();
                var4 = new Array(2);
                var4[0] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.unsafe_rawColors;
                var5 = var5.PREMIUM_TIER_2_PINK;
                var6 = var6.bind(var3)(var5);
                var5 = var6.hex;
                var5 = var5.bind(var6)();
                var4[1] = var5;
                var0.colors = var4;
                var4 = true;
                var0.useAngle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: ReferralProgramBar, environment: var1
        _fun92505: for (var _fun92505_ip = 0;;) switch (_fun92505_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.referralSentUsers;
                var0 = _closure1_slot9;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var9 = null;
                var1 = var9 == var11;
                var0 = undefined;
                if (var1) {
                    _fun92505_ip = 38;
                    continue _fun92505
                }
            case 33:
                var0 = var11.length;
            case 38:
                var1 = var9 != var0;
                var13 = 0;
                var8 = 0;
                if (!var1) {
                    _fun92505_ip = 52;
                    continue _fun92505
                }
            case 49:
                var8 = var0;
            case 52:
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.barContainer;
                var0.style = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot11;
                var4 = {};
                var15 = 1;
                var4.placement = var15;
                var12 = var8 > var13;
                var10 = undefined;
                if (!var12) {
                    _fun92505_ip = 115;
                    continue _fun92505
                }
            case 99:
                var14 = var9 == var11;
                var12 = undefined;
                if (var14) {
                    _fun92505_ip = 112;
                    continue _fun92505
                }
            case 108:
                var12 = var11[var13];
            case 112:
                var10 = var12;
            case 115:
                var4.userRecord = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(5);
                var4[0] = var6;
                var10 = _closure1_slot7;
                var7 = _closure1_slot12;
                var6 = {};
                var6.numReferralsSent = var8;
                var6.placement = var15;
                var6 = var10.bind(var3)(var7, var6);
                var4[1] = var6;
                var12 = _closure1_slot7;
                var7 = _closure1_slot11;
                var6 = {};
                var10 = 2;
                var6.placement = var10;
                var14 = var8 > var15;
                var13 = undefined;
                if (!var14) {
                    _fun92505_ip = 207;
                    continue _fun92505
                }
            case 191:
                var16 = var9 == var11;
                var14 = undefined;
                if (var16) {
                    _fun92505_ip = 204;
                    continue _fun92505
                }
            case 200:
                var14 = var11[var15];
            case 204:
                var13 = var14;
            case 207:
                var6.userRecord = var13;
                var6 = var12.bind(var3)(var7, var6);
                var4[2] = var6;
                var12 = _closure1_slot7;
                var7 = _closure1_slot12;
                var6 = {};
                var6.numReferralsSent = var8;
                var6.placement = var10;
                var6 = var12.bind(var3)(var7, var6);
                var4[3] = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot11;
                var5 = {};
                var12 = 3;
                var5.placement = var12;
                var12 = var8 > var10;
                var8 = undefined;
                if (!var12) {
                    _fun92505_ip = 295;
                    continue _fun92505
                }
            case 279:
                var12 = var9 == var11;
                var9 = undefined;
                if (var12) {
                    _fun92505_ip = 292;
                    continue _fun92505
                }
            case 288:
                var9 = var11[var10];
            case 292:
                var8 = var9;
            case 295:
                var5.userRecord = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var3 = var3.HelpdeskArticles;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 175,
        'backgroundColor': null,
        'flexDirection': 'row',
        'justifyContent': 'center'
    };
    var11 = 7;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var10 = 'center';
    var3.barContainer = var8;
    var8 = {
        'height': 64,
        'width': 64,
        'borderRadius': null,
        'justifyContent': 'center',
        'alignSelf': 'center'
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var8.borderRadius = var13;
    var3.emptyReferralSlot = var8;
    var8 = {};
    var8.justifyContent = var10;
    var3.avatarContainer = var8;
    var8 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.PREMIUM_TIER_2_PINK;
    var8.color = var11;
    var8.textAlign = var10;
    var3.emptyReferralSlotText = var8;
    var8 = {
        'width': 24,
        'height': 4,
        'alignSelf': 'center',
        'opacity': 0.3
    };
    var3.connector = var8;
    var8 = {};
    var8.opacity = var9;
    var3.connectorHighlighted = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/referral_program/native/ReferralProgramPerkCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: ReferralProgramPerkCard, environment: var1
        _fun92506: for (var _fun92506_ip = 0;;) switch (_fun92506_ip) {
            case 0:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var4 = undefined;
                var1 = var3.bind(var4)(var0);
                var0 = var1.useIsEligibleSenderForReferralProgram;
                var1 = var0.bind(var1)();
                var0 = 13;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.useReferralProgramBannerDetails;
                var0 = var0.bind(var3)();
                var6 = var0.hasSentAllReferrals;
                var13 = var0.referralSentUsers;
                var12 = var0.refreshAt;
                var0 = null;
                if (!(var0 != var13)) {
                    _fun92506_ip = 88;
                    continue _fun92506
                }
            case 83:
                var3 = var13.length;
            case 88:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 14;
                var3 = var9[var3];
                var5 = var8.bind(var4)(var3);
                var3 = 15;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR;
                var3 = var5.bind(var4)(var3);
                var9 = var3.analyticsLocations;
                var _closure2_slot0 = var9;
                var8 = _closure1_slot3;
                var5 = var8.useCallback;
                var3 = new Array(1);
                var3[0] = var9;
                var2 = function() { // Environment: var2
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var3 = var1[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot5;
                    var5 = var3.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3.location_stack = var8;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = 17;
                    var3 = var1[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.openLazy;
                    var5 = _closure1_slot0;
                    var2 = 19;
                    var2 = var1[var2];
                    var5 = var5.bind(var0)(var2);
                    var2 = 18;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var0)(var2, var1);
                    var1 = 'referral-program-share-action-sheet';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5 = var5.bind(var8)(var2, var3);
                var0 = null;
                if (!var1) {
                    _fun92506_ip = 389;
                    continue _fun92506
                }
            case 179:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 20;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var14 = _closure1_slot0;
                var11 = 4;
                var9 = var8[var11];
                var9 = var14.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var11];
                var8 = var14.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.USo4s7;
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = _closure1_slot10;
                var8 = var8.bind(var4)(var4, var6);
                var1.description = var8;
                var10 = _closure1_slot7;
                var9 = _closure1_slot13;
                var8 = {};
                var8.referralSentUsers = var13;
                var8.refreshAt = var12;
                var8 = var10.bind(var4)(var9, var8);
                var1.headerComponent = var8;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = var7[var11];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var11];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                if (var6) {
                    _fun92506_ip = 362;
                    continue _fun92506
                }
            case 349:
                var6 = var7.Lm2nFc;
                var6 = var8.bind(var9)(var6);
                _fun92506_ip = 373;
                continue _fun92506;
            case 362:
                var7 = var7.SY9tyI;
                var6 = var8.bind(var9)(var7);
            case 373:
                var1.cta = var6;
                var1.buttonOnPress = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 389:
                return var0;
        }
    };
    var2.ReferralProgramPerkCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1234, 1675, 1297, 671, 5409, 4051, 669, 4832, 6608, 11989, 5684, 5536, 795, 3237, 11990, 1307, 7258, 2]);