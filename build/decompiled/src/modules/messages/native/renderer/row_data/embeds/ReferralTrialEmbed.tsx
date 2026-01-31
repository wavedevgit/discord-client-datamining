// modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: createReferralTrialEmbedRedeemable, environment: var1
        _fun55078: for (var _fun55078_ip = 0;;) switch (_fun55078_ip) {
            case 0:
                var3 = arg0;
                var11 = arg2;
                var0 = var3.author;
                var28 = null;
                if (!(var28 != var0)) {
                    _fun55078_ip = 367;
                    continue _fun55078
                }
            case 21:
                var0 = var3.referralTrialOfferId;
                if (!(var28 != var0)) {
                    _fun55078_ip = 367;
                    continue _fun55078
                }
            case 34:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var6 = undefined;
                var4 = var2.bind(var6)(var0);
                var2 = var4.createNativeStyleProperties;
                var0 = {};
                var7 = _closure1_slot1;
                var5 = 9;
                var9 = var8[var5];
                var9 = var7.bind(var6)(var9);
                var9 = var9.colors;
                var9 = var9.WHITE;
                var0.headerTextColor = var9;
                var9 = var8[var5];
                var9 = var7.bind(var6)(var9);
                var9 = var9.colors;
                var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
                var0.titleColor = var9;
                var9 = var8[var5];
                var9 = var7.bind(var6)(var9);
                var9 = var9.colors;
                var9 = var9.TEXT_DEFAULT;
                var0.bodyTextColor = var9;
                var9 = var8[var5];
                var9 = var7.bind(var6)(var9);
                var9 = var9.colors;
                var9 = var9.TEXT_MUTED;
                var0.footerTextColor = var9;
                var9 = var8[var5];
                var9 = var7.bind(var6)(var9);
                var9 = var9.colors;
                var9 = var9.INTERACTIVE_TEXT_DEFAULT;
                var0.subTextColor = var9;
                var9 = var8[var5];
                var9 = var7.bind(var6)(var9);
                var9 = var9.colors;
                var9 = var9.BACKGROUND_MOD_NORMAL;
                var0.backgroundColor = var9;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.colors;
                var5 = var5.WHITE;
                var0.acceptLabelColor = var5;
                var2 = var2.bind(var4)(var0);
                var0 = arg1;
                var7 = var2.bind(var6)(var0);
                var0 = var7.headerTextColor;
                var5 = var7.titleColor;
                var2 = var7.bodyTextColor;
                var14 = var7.footerTextColor;
                var4 = var7.subTextColor;
                var12 = var7.acceptLabelColor;
                var7 = var7.backgroundColor;
                var10 = _closure1_slot4;
                var9 = var10.getChannel;
                var8 = var3.getChannelId;
                var8 = var8.bind(var3)();
                var9 = var9.bind(var10)(var8);
                var10 = var3.referralTrialOfferId;
                var3 = var28 != var9;
                if (!var3) {
                    _fun55078_ip = 349;
                    continue _fun55078
                }
            case 339:
                var8 = var9.isDM;
                var3 = var8.bind(var9)();
            case 349:
                var9 = _closure1_slot3;
                var8 = var9.getRelevantUserTrialOffer;
                var29 = var8.bind(var9)(var10);
                if (var3) {
                    _fun55078_ip = 371;
                    continue _fun55078
                }
            case 367:
                var3 = undefined;
                return var3;
            case 371:
                var3 = {};
                var3.backgroundColor = var7;
                var3.borderColor = var7;
                var7 = 3;
                var3.thumbnailCornerRadius = var7;
                var8 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 11;
                var7 = var15[var9];
                var16 = var8.bind(var6)(var7);
                var10 = var16.getAssetUriForEmbed;
                var13 = _closure1_slot1;
                var7 = 12;
                var7 = var15[var7];
                var7 = var13.bind(var6)(var7);
                var7 = var10.bind(var16)(var7);
                var3.headerLogoUrl = var7;
                var7 = 13;
                var10 = var15[var7];
                var10 = var8.bind(var6)(var10);
                var17 = var10.intl;
                var16 = var17.string;
                var10 = var15[var7];
                var10 = var8.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.gtNqJQ;
                var16 = var16.bind(var17)(var10);
                var10 = var16.toLocaleLowerCase;
                var10 = var10.bind(var16)();
                var3.headerText = var10;
                var3.headerColor = var0;
                var0 = var15[var9];
                var10 = var8.bind(var6)(var0);
                var8 = var10.getAssetUriForEmbed;
                var0 = 14;
                var0 = var15[var0];
                var0 = var13.bind(var6)(var0);
                var0 = var8.bind(var10)(var0);
                var3.thumbnailUrl = var0;
                var10 = _closure1_slot5;
                var8 = var10.getUser;
                var13 = var28 == var29;
                var0 = undefined;
                if (var13) {
                    _fun55078_ip = 575;
                    continue _fun55078
                }
            case 569:
                var0 = var29.user_id;
            case 575:
                var10 = var8.bind(var10)(var0);
                var13 = _closure1_slot5;
                var8 = var13.getUser;
                var15 = var28 == var29;
                var0 = undefined;
                if (var15) {
                    _fun55078_ip = 605;
                    continue _fun55078
                }
            case 599:
                var0 = var29.referrer_id;
            case 605:
                var0 = var8.bind(var13)(var0);
                if (!(var28 != var10)) {
                    _fun55078_ip = 2118;
                    continue _fun55078
                }
            case 617:
                if (!(var28 != var0)) {
                    _fun55078_ip = 2118;
                    continue _fun55078
                }
            case 624:
                var15 = _closure1_slot1;
                var8 = _closure1_slot2;
                var13 = 15;
                var16 = var8[var13];
                var17 = var15.bind(var6)(var16);
                var16 = var17.getName;
                var25 = var16.bind(var17)(var0);
                var0 = var0.id;
                var0 = var0 === var11;
                var13 = var8[var13];
                var15 = var15.bind(var6)(var13);
                var13 = var15.getName;
                var23 = var13.bind(var15)(var10);
                var13 = _closure1_slot0;
                var15 = var8[var7];
                var15 = var13.bind(var6)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var8 = var8[var7];
                var8 = var13.bind(var6)(var8);
                var8 = var8.t;
                var13 = var8.IiWKwg;
                var8 = {};
                var8.senderUserName = var25;
                var8.recipientUserName = var23;
                var8 = var15.bind(var16)(var13, var8);
                if (!(var28 != var29)) {
                    _fun55078_ip = 2003;
                    continue _fun55078
                }
            case 758:
                var16 = _closure1_slot7;
                var15 = var16.getUserTrialOffer;
                var13 = _closure1_slot10;
                var17 = var15.bind(var16)(var13);
                var13 = function() { // Original name: isReferralTrialProductOfferIdEnabled, environment: var13
                    var3 = _closure1_slot8;
                    var2 = var3.getOfferIds;
                    var2 = var2.bind(var3)();
                    var _closure3_slot0 = var2;
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.values;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 10;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var4 = var4.TrialIdToProductOfferId;
                    var1 = _closure1_slot10;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.every;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var13.bind(var6)();
                var16 = var29.id;
                var18 = var28 == var17;
                var13 = undefined;
                if (var18) {
                    _fun55078_ip = 807;
                    continue _fun55078
                }
            case 802:
                var13 = var17.id;
            case 807:
                var13 = var16 === var13;
                if (!var13) {
                    _fun55078_ip = 817;
                    continue _fun55078
                }
            case 814:
                var13 = var15;
            case 817:
                var16 = _closure1_slot1;
                var15 = _closure1_slot2;
                var27 = 16;
                var15 = var15[var27];
                var16 = var16.bind(var6)(var15);
                var15 = var16.isPremium;
                var15 = var15.bind(var16)(var10);
                var18 = var15;
                if (var15) {
                    _fun55078_ip = 884;
                    continue _fun55078
                }
            case 854:
                var10 = var10.id;
                var18 = var15;
                if (!(var10 === var11)) {
                    _fun55078_ip = 884;
                    continue _fun55078
                }
            case 866:
                var11 = _closure1_slot6;
                var10 = var11.getPremiumTypeSubscription;
                var10 = var10.bind(var11)();
                var18 = var28 != var10;
            case 884:
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 17;
                var10 = var15[var10];
                var11 = var11.bind(var6)(var10);
                var10 = var11.hasUserTrialOfferExpired;
                var11 = var10.bind(var11)(var29);
                var10 = var29.redeemed_at;
                var19 = var28 != var10;
                var10 = var29.expires_at;
                var16 = var28 != var10;
                var10 = undefined;
                var15 = undefined;
                if (!var16) {
                    _fun55078_ip = 1190;
                    continue _fun55078
                }
            case 945:
                var10 = undefined;
                var15 = undefined;
                if (var11) {
                    _fun55078_ip = 1190;
                    continue _fun55078
                }
            case 955:
                var10 = undefined;
                var15 = undefined;
                if (var18) {
                    _fun55078_ip = 1190;
                    continue _fun55078
                }
            case 965:
                var10 = undefined;
                var15 = undefined;
                if (var19) {
                    _fun55078_ip = 1190;
                    continue _fun55078
                }
            case 975:
                var26 = _closure1_slot0;
                var24 = _closure1_slot2;
                var16 = 18;
                var16 = var24[var16];
                var20 = var26.bind(var6)(var16);
                var17 = var20.getReferralTrialOfferExpirationCopy;
                var16 = global;
                var22 = var16.Date;
                var21 = var22.parse;
                var16 = var29.expires_at;
                var16 = var21.bind(var22)(var16);
                var17 = var17.bind(var20)(var16);
                var16 = var24[var7];
                var16 = var26.bind(var6)(var16);
                var22 = var16.intl;
                var21 = var22.formatToPlainString;
                var16 = var24[var7];
                var16 = var26.bind(var6)(var16);
                var16 = var16.t;
                var20 = var16.uj94C5;
                var16 = {};
                var24 = var24[var27];
                var27 = var26.bind(var6)(var24);
                var26 = var27.formatIntervalDuration;
                var24 = {};
                var31 = var29.subscription_trial;
                var32 = var28 == var31;
                var30 = undefined;
                if (var32) {
                    _fun55078_ip = 1112;
                    continue _fun55078
                }
            case 1106:
                var30 = var31.interval;
            case 1112:
                var24.intervalType = var30;
                var29 = var29.subscription_trial;
                var30 = var28 == var29;
                var28 = undefined;
                if (var30) {
                    _fun55078_ip = 1138;
                    continue _fun55078
                }
            case 1132:
                var28 = var29.interval_count;
            case 1138:
                var24.intervalCount = var28;
                var24 = var26.bind(var27)(var24);
                var16.duration = var24;
                var22 = var21.bind(var22)(var20, var16);
                var21 = var22.replace;
                var20 = /\*/g;
                var16 = '';
                var15 = var21.bind(var22)(var20, var16);
                var10 = var17;
            case 1190:
                if (!var18) {
                    _fun55078_ip = 1331;
                    continue _fun55078
                }
            case 1196:
                if (var0) {
                    _fun55078_ip = 1331;
                    continue _fun55078
                }
            case 1202:
                if (var19) {
                    _fun55078_ip = 1331;
                    continue _fun55078
                }
            case 1208:
                var17 = _closure1_slot0;
                var27 = _closure1_slot2;
                var16 = var27[var7];
                var16 = var17.bind(var6)(var16);
                var21 = var16.intl;
                var20 = var21.formatToParts;
                var16 = var27[var7];
                var16 = var17.bind(var6)(var16);
                var16 = var16.t;
                var17 = var16.LwCwT9;
                var16 = {};
                var22 = {};
                var24 = 'bindOpenUrl';
                var22.action = var24;
                var26 = _closure1_slot1;
                var24 = 19;
                var24 = var27[var24];
                var27 = var26.bind(var6)(var24);
                var26 = var27.getArticleURL;
                var24 = _closure1_slot9;
                var24 = var24.REFERRAL_PROGRAM;
                var24 = var26.bind(var27)(var24);
                var22.url = var24;
                var16.helpdeskArticle = var22;
                var16 = var20.bind(var21)(var17, var16);
                var17 = undefined;
                _fun55078_ip = 1724;
                continue _fun55078;
            case 1331:
                if (var18) {
                    _fun55078_ip = 1661;
                    continue _fun55078
                }
            case 1337:
                if (!var11) {
                    _fun55078_ip = 1404;
                    continue _fun55078
                }
            case 1340:
                if (var19) {
                    _fun55078_ip = 1404;
                    continue _fun55078
                }
            case 1343:
                var24 = _closure1_slot0;
                var20 = _closure1_slot2;
                var21 = var20[var7];
                var21 = var24.bind(var6)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var20[var7];
                var20 = var24.bind(var6)(var20);
                var20 = var20.t;
                var20 = var20["9SNdf4"];
                var17 = var21.bind(var22)(var20);
                var16 = undefined;
                _fun55078_ip = 1724;
                continue _fun55078;
            case 1404:
                if (var13) {
                    _fun55078_ip = 1534;
                    continue _fun55078
                }
            case 1410:
                if (var19) {
                    _fun55078_ip = 1534;
                    continue _fun55078
                }
            case 1413:
                if (var0) {
                    _fun55078_ip = 1534;
                    continue _fun55078
                }
            case 1416:
                var20 = _closure1_slot0;
                var28 = _closure1_slot2;
                var19 = var28[var7];
                var19 = var20.bind(var6)(var19);
                var22 = var19.intl;
                var21 = var22.formatToParts;
                var19 = var28[var7];
                var19 = var20.bind(var6)(var19);
                var19 = var19.t;
                var20 = var19["7O7Zg3"];
                var19 = {};
                var24 = {};
                var26 = 'bindOpenUrl';
                var24.action = var26;
                var27 = _closure1_slot1;
                var26 = 19;
                var26 = var28[var26];
                var28 = var27.bind(var6)(var26);
                var27 = var28.getArticleURL;
                var26 = _closure1_slot9;
                var26 = var26.REFERRAL_PROGRAM;
                var26 = var27.bind(var28)(var26);
                var24.url = var26;
                var19.helpdeskArticle = var24;
                var19 = var21.bind(var22)(var20, var19);
                _fun55078_ip = 1654;
                continue _fun55078;
            case 1534:
                var21 = _closure1_slot0;
                var29 = _closure1_slot2;
                var20 = var29[var7];
                var20 = var21.bind(var6)(var20);
                var24 = var20.intl;
                var22 = var24.formatToParts;
                var20 = var29[var7];
                var20 = var21.bind(var6)(var20);
                var20 = var20.t;
                var21 = var20.mVzEG8;
                var20 = {};
                var26 = {};
                var27 = 'bindOpenUrl';
                var26.action = var27;
                var28 = _closure1_slot1;
                var27 = 19;
                var27 = var29[var27];
                var29 = var28.bind(var6)(var27);
                var28 = var29.getArticleURL;
                var27 = _closure1_slot9;
                var27 = var27.REFERRAL_PROGRAM;
                var27 = var28.bind(var29)(var27);
                var26.url = var27;
                var20.helpdeskArticle = var26;
                var20.username = var25;
                var19 = var22.bind(var24)(var21, var20);
            case 1654:
                var16 = var19;
                var17 = undefined;
                _fun55078_ip = 1724;
                continue _fun55078;
            case 1661:
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var21 = var19[var7];
                var21 = var20.bind(var6)(var21);
                var22 = var21.intl;
                var21 = var22.formatToPlainString;
                var19 = var19[var7];
                var19 = var20.bind(var6)(var19);
                var19 = var19.t;
                var20 = var19["Mptau/"];
                var19 = {};
                var19.username = var23;
                var17 = var21.bind(var22)(var20, var19);
                var16 = undefined;
            case 1724:
                var11 = !var11;
                if (!var11) {
                    _fun55078_ip = 1733;
                    continue _fun55078
                }
            case 1730:
                var11 = !var18;
            case 1733:
                if (!var11) {
                    _fun55078_ip = 1739;
                    continue _fun55078
                }
            case 1736:
                var11 = var13;
            case 1739:
                if (!var11) {
                    _fun55078_ip = 1745;
                    continue _fun55078
                }
            case 1742:
                var11 = !var0;
            case 1745:
                var13 = {};
                var34 = var13;
                var33 = var3;
                var0 = copyDataProperties(var34, var33);
                var0 = 'titleText';
                var13[var0] = var8;
                var0 = 'titleColor';
                var13[var0] = var5;
                var0 = 'bodyText';
                var13[var0] = var17;
                var0 = 'structuredBodyText';
                var13[var0] = var16;
                var0 = 'bodyTextColor';
                var13[var0] = var2;
                var0 = 'subText';
                var13[var0] = var10;
                var0 = 'subTextColor';
                var13[var0] = var4;
                var10 = 'canBeAccepted';
                var13[var10] = var11;
                var0 = var13;
                if (!var11) {
                    _fun55078_ip = 2001;
                    continue _fun55078
                }
            case 1842:
                var4 = {};
                var34 = var4;
                var33 = var13;
                var13 = copyDataProperties(var34, var33);
                var13 = 'footerText';
                var4[var13] = var15;
                var13 = 'footerTextColor';
                var4[var13] = var14;
                var4[var10] = var11;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = var13[var7];
                var11 = var10.bind(var6)(var11);
                var15 = var11.intl;
                var14 = var15.string;
                var11 = var13[var7];
                var11 = var10.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11.bXTClc;
                var14 = var14.bind(var15)(var11);
                var11 = 'acceptLabelText';
                var4[var11] = var14;
                var11 = 'acceptLabelColor';
                var4[var11] = var12;
                var9 = var13[var9];
                var11 = var10.bind(var6)(var9);
                var10 = var11.getAssetUriForEmbed;
                var12 = _closure1_slot1;
                var9 = 20;
                var9 = var13[var9];
                var9 = var12.bind(var6)(var9);
                var10 = var10.bind(var11)(var9);
                var9 = 'acceptLabelIconUrl';
                var4[var9] = var10;
                var0 = var4;
            case 2001:
                return var0;
            case 2003:
                var0 = {};
                var34 = var0;
                var33 = var3;
                var4 = copyDataProperties(var34, var33);
                var4 = 'titleText';
                var0[var4] = var8;
                var4 = 'titleColor';
                var0[var4] = var5;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = var4[var7];
                var5 = var9.bind(var6)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var4 = var4[var7];
                var4 = var9.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.eEz1N5;
                var5 = var5.bind(var8)(var4);
                var4 = 'bodyText';
                var0[var4] = var5;
                var4 = 'bodyTextColor';
                var0[var4] = var2;
                var5 = false;
                var4 = 'canBeAccepted';
                var0[var4] = var5;
                return var0;
            case 2118:
                var0 = {};
                var34 = var0;
                var33 = var3;
                var3 = copyDataProperties(var34, var33);
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = var1[var7];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.eEz1N5;
                var3 = var3.bind(var4)(var1);
                var1 = 'bodyText';
                var0[var1] = var3;
                var1 = 'bodyTextColor';
                var0[var1] = var2;
                var2 = false;
                var1 = 'canBeAccepted';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.createReferralTrialEmbedRedeemable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6604, 1372, 1613, 3076, 6606, 4575, 660, 1615, 1297, 671, 4572, 6607, 6608, 1234, 6609, 3195, 3068, 6610, 6611, 1675, 6623, 2]);