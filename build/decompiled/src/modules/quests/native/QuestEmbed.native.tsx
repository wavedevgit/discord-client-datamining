// modules/quests/native/QuestEmbed.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: buildBaseEmbedProps, environment: var1
        _fun92791: for (var _fun92791_ip = 0;;) switch (_fun92791_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.titleText;
                var3 = var1.bodyText;
                var0 = var1.themeColors;
                var1 = var1.thumbnailUrl;
                var7 = var0.baseColors;
                var0 = var0.colors;
                var4 = {};
                var8 = var4;
                var2 = copyDataProperties(var8, var7);
                var6 = var0.headerColor;
                var2 = 'headerColor';
                var4[var2] = var6;
                var2 = 'titleText';
                var4[var2] = var5;
                var5 = var0.titleColor;
                var2 = 'titleColor';
                var4[var2] = var5;
                var5 = var0.bodyTextColor;
                var2 = 'subtitleColor';
                var4[var2] = var5;
                var2 = var0.bodyTextColor;
                var0 = 'bodyTextColor';
                var4[var0] = var2;
                var0 = 'thumbnailUrl';
                var4[var0] = var1;
                var1 = true;
                var0 = 'embedCanBeTapped';
                var4[var0] = var1;
                var0 = 'canBeAccepted';
                var4[var0] = var1;
                var1 = _closure1_slot9;
                var2 = var1.GUILD;
                var1 = 'type';
                var4[var1] = var2;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = var1.isAndroid;
                var0 = var0.bind(var1)();
                var1 = {};
                var8 = var1;
                var7 = var4;
                var4 = copyDataProperties(var8, var7);
                if (var0) {
                    _fun92791_ip = 241;
                    continue _fun92791
                }
            case 218:
                var0 = 'headerText';
                var1[var0] = var2;
                var0 = 'subtitle';
                var1[var0] = var3;
                var0 = var1;
                _fun92791_ip = 264;
                continue _fun92791;
            case 241:
                var4 = null;
                var2 = 'headerText';
                var1[var2] = var4;
                var2 = 'subtitle';
                var1[var2] = var3;
                var0 = var1;
            case 264:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: buildSupportedOnMobileEmbedBodyText, environment: var1
        _fun92792: for (var _fun92792_ip = 0;;) switch (_fun92792_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.quest;
                var0 = var4.config;
                var1 = var0.expiresAt;
                var0 = global;
                var0 = var0.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var13 = var2;
                var0 = new var13[var0](var12);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = var2.toISOString;
                var0 = var0.bind(var2)();
                if (!(!(var1 < var0))) {
                    _fun92792_ip = 267;
                    continue _fun92792
                }
            case 65:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 8;
                var1 = var8[var0];
                var3 = undefined;
                var2 = var7.bind(var3)(var1);
                var1 = var2.getQuestTaskDetails;
                var9 = var1.bind(var2)(var4);
                var0 = var8[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.getThirdPartyTaskDetails;
                var5 = var0.bind(var1)(var4);
                var0 = 9;
                var0 = var8[var0];
                var2 = var7.bind(var3)(var0);
                var1 = var2.getQuestsInstructionsToWinReward;
                var0 = {};
                var0.quest = var4;
                var0.taskDetails = var9;
                var6 = _closure1_slot6;
                var6 = var6.EMBED_MOBILE;
                var0.location = var6;
                var6 = 10;
                var9 = var8[var6];
                var9 = var7.bind(var3)(var9);
                var9 = var9.QuestContent;
                var9 = var9.QUEST_EMBED_MOBILE;
                var0.questContent = var9;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.QuestContent;
                var6 = var6.QUEST_EMBED_MOBILE;
                var0.sourceQuestContent = var6;
                var6 = function() { // Original name: connectedConsoleLinkOnClick, environment: var6
                    var0 = undefined;
                    return var0;
                };
                var0.connectedConsoleLinkOnClick = var6;
                var6 = null;
                var6 = var6 != var5;
                if (!var6) {
                    _fun92792_ip = 248;
                    continue _fun92792
                }
            case 245:
                var3 = var5;
            case 248:
                var0.thirdPartyTaskDetails = var3;
                var3 = true;
                var0.withoutMarkdown = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 267:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 7;
                var2 = var6[var0];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var5.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0["ge+AJp"];
                var0 = {};
                var4 = var4.config;
                var4 = var4.messages;
                var4 = var4.questName;
                var0.questName = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: buildQuestsEmbedProps, environment: var1
        _fun92794: for (var _fun92794_ip = 0;;) switch (_fun92794_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.questId;
                var0 = var1.isEligibleForQuests;
                var1 = var1.themeColors;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.isMetaQuest;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun92794_ip = 1651;
                    continue _fun92794
                }
            case 62:
                if (var0) {
                    _fun92794_ip = 240;
                    continue _fun92794
                }
            case 68:
                var2 = _closure1_slot10;
                var0 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 7;
                var4 = var10[var3];
                var4 = var9.bind(var6)(var4);
                var11 = var4.intl;
                var5 = var11.string;
                var4 = var10[var3];
                var4 = var9.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4["3Z/Ejm"];
                var4 = var5.bind(var11)(var4);
                var0.titleText = var4;
                var4 = var10[var3];
                var4 = var9.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var10[var3];
                var3 = var9.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.yHzB4Y;
                var3 = var4.bind(var5)(var3);
                var0.bodyText = var3;
                var0.themeColors = var1;
                var5 = _closure1_slot3;
                var4 = var5.resolveAssetSource;
                var9 = _closure1_slot1;
                var3 = 14;
                var3 = var10[var3];
                var3 = var9.bind(var6)(var3);
                var3 = var4.bind(var5)(var3);
                var3 = var3.uri;
                var0.thumbnailUrl = var3;
                var0 = var2.bind(var6)(var0);
                return var0;
            case 240:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 15;
                var0 = var3[var0];
                var4 = var2.bind(var6)(var0);
                var3 = var4.findQuestOrReplacement;
                var0 = _closure1_slot5;
                var2 = var0.quests;
                var0 = _closure1_slot5;
                var0 = var0.excludedQuests;
                var5 = var3.bind(var4)(var7, var2, var0);
                var0 = _closure1_slot5;
                var2 = var0.excludedQuests;
                var0 = var2.get;
                var3 = var0.bind(var2)(var7);
                var2 = null;
                if (!(var2 == var5)) {
                    _fun92794_ip = 335;
                    continue _fun92794
                }
            case 319:
                var0 = _closure1_slot5;
                var0 = var0.isFetchingCurrentQuests;
                if (var0) {
                    _fun92794_ip = 1633;
                    continue _fun92794
                }
            case 335:
                if (!(var2 != var5)) {
                    _fun92794_ip = 1210;
                    continue _fun92794
                }
            case 342:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 17;
                var0 = var9[var0];
                var9 = var4.bind(var6)(var0);
                var4 = var9.isShareableQuest;
                var0 = var5.config;
                var0 = var4.bind(var9)(var0);
                if (var0) {
                    _fun92794_ip = 591;
                    continue _fun92794
                }
            case 384:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 16;
                var0 = var13[var0];
                var9 = var12.bind(var6)(var0);
                var4 = var9.trackQuestEmbedFallbackViewed;
                var0 = _closure1_slot7;
                var0 = var0.NOT_SHAREABLE_QUEST;
                var0 = var4.bind(var9)(var7, var0);
                var4 = _closure1_slot10;
                var0 = {};
                var9 = 7;
                var10 = var13[var9];
                var10 = var12.bind(var6)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var13[var9];
                var10 = var12.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.Dd6Daw;
                var10 = var11.bind(var14)(var10);
                var0.titleText = var10;
                var10 = var13[var9];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.NXrP3N;
                var9 = var10.bind(var11)(var9);
                var0.bodyText = var9;
                var0.themeColors = var1;
                var11 = _closure1_slot3;
                var10 = var11.resolveAssetSource;
                var12 = _closure1_slot1;
                var9 = 14;
                var9 = var13[var9];
                var9 = var12.bind(var6)(var9);
                var9 = var10.bind(var11)(var9);
                var9 = var9.uri;
                var0.thumbnailUrl = var9;
                var0 = var4.bind(var6)(var0);
                _fun92794_ip = 1205;
                continue _fun92794;
            case 591:
                var4 = {};
                var4.themeColors = var1;
                var4.quest = var5;
                var5 = var4.themeColors;
                var20 = var4.quest;
                var9 = var5.colors;
                var10 = var20.userStatus;
                var11 = var2 == var10;
                var4 = undefined;
                if (var11) {
                    _fun92794_ip = 641;
                    continue _fun92794
                }
            case 635:
                var4 = var10.enrolledAt;
            case 641:
                var12 = var2 != var4;
                var4 = var20.config;
                var10 = var4.expiresAt;
                var4 = global;
                var4 = var4.Date;
                var11 = var4.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var4
                    }
                });
                var28 = var11;
                var4 = new var28[var4](var27);
                var11 = var4 instanceof Object ? var4 : var11;
                var4 = var11.toISOString;
                var4 = var4.bind(var11)();
                var10 = var10 < var4;
                var11 = _closure1_slot4;
                var4 = var11.getState;
                var4 = var4.bind(var11)();
                var13 = var4.theme;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 11;
                var4 = var14[var4];
                var11 = var11.bind(var6)(var4);
                var4 = var11.isThemeDark;
                var11 = var4.bind(var11)(var13);
                var4 = _closure1_slot8;
                if (var11) {
                    _fun92794_ip = 764;
                    continue _fun92794
                }
            case 756:
                var19 = var4.LIGHT;
                _fun92794_ip = 770;
                continue _fun92794;
            case 764:
                var19 = var4.DARK;
            case 770:
                var4 = _closure1_slot5;
                var4 = var4.questEnrollmentBlockedUntil;
                var11 = var2 != var4;
                var4 = {};
                var14 = _closure1_slot10;
                var13 = {};
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = 7;
                var15 = var22[var16];
                var15 = var21.bind(var6)(var15);
                var23 = var15.intl;
                var18 = var23.formatToPlainString;
                var15 = var22[var16];
                var15 = var21.bind(var6)(var15);
                var15 = var15.t;
                var17 = var15.EAYZAr;
                var15 = {};
                var24 = var20.config;
                var24 = var24.messages;
                var24 = var24.questName;
                var15.questName = var24;
                var15 = var18.bind(var23)(var17, var15);
                var13.titleText = var15;
                var15 = var20.config;
                var15 = var15.messages;
                var15 = var15.gamePublisher;
                var13.subtitle = var15;
                var17 = _closure1_slot11;
                var15 = {};
                var15.quest = var20;
                var15 = var17.bind(var6)(var15);
                var13.bodyText = var15;
                var13.themeColors = var5;
                var15 = 12;
                var17 = var22[var15];
                var18 = var21.bind(var6)(var17);
                var17 = var18.getQuestAsset;
                var15 = var22[var15];
                var15 = var21.bind(var6)(var15);
                var15 = var15.QuestAssetType;
                var15 = var15.GAME_TILE;
                var15 = var17.bind(var18)(var20, var15, var19);
                var15 = var15.url;
                var13.thumbnailUrl = var15;
                var26 = var14.bind(var6)(var13);
                var27 = var4;
                var13 = copyDataProperties(var27, var26);
                if (var12) {
                    _fun92794_ip = 1071;
                    continue _fun92794
                }
            case 996:
                if (var10) {
                    _fun92794_ip = 1071;
                    continue _fun92794
                }
            case 999:
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var16];
                var13 = var15.bind(var6)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var6)(var12);
                var12 = var12.t;
                if (var11) {
                    _fun92794_ip = 1058;
                    continue _fun92794
                }
            case 1043:
                var11 = var12.kUQLMJ;
                var11 = var13.bind(var14)(var11);
                _fun92794_ip = 1069;
                continue _fun92794;
            case 1058:
                var12 = var12["th2+0j"];
                var11 = var13.bind(var14)(var12);
            case 1069:
                _fun92794_ip = 1142;
                continue _fun92794;
            case 1071:
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var16];
                var13 = var15.bind(var6)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var6)(var12);
                var12 = var12.t;
                if (var10) {
                    _fun92794_ip = 1128;
                    continue _fun92794
                }
            case 1115:
                var10 = var12["th2+0j"];
                var10 = var13.bind(var14)(var10);
                _fun92794_ip = 1139;
                continue _fun92794;
            case 1128:
                var12 = var12.hvVgAZ;
                var10 = var13.bind(var14)(var12);
            case 1139:
                var11 = var10;
            case 1142:
                var10 = 'acceptLabelText';
                var4[var10] = var11;
                var10 = var9.acceptBlurpleLabelBackgroundColor;
                var9 = 'acceptLabelBackgroundColor';
                var4[var9] = var10;
                var5 = var5.colors;
                var9 = var5.acceptLabelGreenColor;
                var5 = 'acceptLabelColor';
                var4[var5] = var9;
                var9 = 8;
                var5 = 'thumbnailCornerRadius';
                var4[var5] = var9;
                var0 = var4;
            case 1205:
                _fun92794_ip = 1631;
                continue _fun92794;
            case 1210:
                if (!(var2 == var3)) {
                    _fun92794_ip = 1426;
                    continue _fun92794
                }
            case 1217:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 16;
                var2 = var11[var2];
                var4 = var10.bind(var6)(var2);
                var3 = var4.trackQuestEmbedFallbackViewed;
                var2 = _closure1_slot7;
                var2 = var2.UNKNOWN_QUEST;
                var2 = var3.bind(var4)(var7, var2);
                var3 = _closure1_slot10;
                var2 = {};
                var4 = 7;
                var5 = var11[var4];
                var5 = var10.bind(var6)(var5);
                var12 = var5.intl;
                var9 = var12.string;
                var5 = var11[var4];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5["rxf+nx"];
                var5 = var9.bind(var12)(var5);
                var2.titleText = var5;
                var5 = var11[var4];
                var5 = var10.bind(var6)(var5);
                var9 = var5.intl;
                var5 = var9.string;
                var4 = var11[var4];
                var4 = var10.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.Ow5AQI;
                var4 = var5.bind(var9)(var4);
                var2.bodyText = var4;
                var2.themeColors = var1;
                var9 = _closure1_slot3;
                var5 = var9.resolveAssetSource;
                var10 = _closure1_slot1;
                var4 = 14;
                var4 = var11[var4];
                var4 = var10.bind(var6)(var4);
                var4 = var5.bind(var9)(var4);
                var4 = var4.uri;
                var2.thumbnailUrl = var4;
                var2 = var3.bind(var6)(var2);
                _fun92794_ip = 1628;
                continue _fun92794;
            case 1426:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 16;
                var3 = var11[var3];
                var5 = var10.bind(var6)(var3);
                var4 = var5.trackQuestEmbedFallbackViewed;
                var3 = _closure1_slot7;
                var3 = var3.EXCLUDED_QUEST;
                var3 = var4.bind(var5)(var7, var3);
                var4 = _closure1_slot10;
                var3 = {};
                var5 = 7;
                var7 = var11[var5];
                var7 = var10.bind(var6)(var7);
                var12 = var7.intl;
                var9 = var12.string;
                var7 = var11[var5];
                var7 = var10.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.Dd6Daw;
                var7 = var9.bind(var12)(var7);
                var3.titleText = var7;
                var7 = var11[var5];
                var7 = var10.bind(var6)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.ii4mJo;
                var5 = var7.bind(var9)(var5);
                var3.bodyText = var5;
                var3.themeColors = var1;
                var9 = _closure1_slot3;
                var7 = var9.resolveAssetSource;
                var10 = _closure1_slot1;
                var5 = 14;
                var5 = var11[var5];
                var5 = var10.bind(var6)(var5);
                var5 = var7.bind(var9)(var5);
                var5 = var5.uri;
                var3.thumbnailUrl = var5;
                var2 = var4.bind(var6)(var3);
            case 1628:
                var0 = var2;
            case 1631:
                _fun92794_ip = 1649;
                continue _fun92794;
            case 1633:
                var3 = _closure1_slot10;
                var2 = {};
                var2.themeColors = var1;
                var0 = var3.bind(var6)(var2);
            case 1649:
                return var0;
            case 1651:
                var0 = {};
                var4 = _closure1_slot10;
                var3 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var9 = var7[var2];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var7[var2];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["6LxbQM"];
                var9 = var10.bind(var11)(var9);
                var3.titleText = var9;
                var9 = var7[var2];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var7[var2];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.CXEb9p;
                var9 = var10.bind(var11)(var9);
                var3.bodyText = var9;
                var3.themeColors = var1;
                var10 = _closure1_slot3;
                var9 = var10.resolveAssetSource;
                var11 = _closure1_slot1;
                var8 = 14;
                var8 = var7[var8];
                var8 = var11.bind(var6)(var8);
                var8 = var9.bind(var10)(var8);
                var8 = var8.uri;
                var3.thumbnailUrl = var8;
                var26 = var4.bind(var6)(var3);
                var27 = var0;
                var3 = copyDataProperties(var27, var26);
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.hvVgAZ;
                var3 = var3.bind(var4)(var2);
                var2 = 'acceptLabelText';
                var0[var2] = var3;
                var2 = var1.colors;
                var3 = var2.acceptBlurpleLabelBackgroundColor;
                var2 = 'acceptLabelBackgroundColor';
                var0[var2] = var3;
                var1 = var1.colors;
                var2 = var1.acceptLabelGreenColor;
                var1 = 'acceptLabelColor';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.QuestsExperimentLocations;
    var _closure1_slot6 = var6;
    var3 = var3.QuestEmbedFallbackReason;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTypes;
    var _closure1_slot9 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestEmbed.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createQuestsEmbed, environment: var1
        var1 = arg0;
        var0 = var1.questId;
        var4 = var1.theme;
        var2 = _closure1_slot12;
        var1 = {};
        var1.questId = var0;
        var7 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 18;
        var3 = var5[var0];
        var0 = undefined;
        var3 = var7.bind(var0)(var3);
        var3 = var3.bind(var0)(var4);
        var1.themeColors = var3;
        var4 = _closure1_slot0;
        var3 = 19;
        var3 = var5[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.getIsEligibleForQuests;
        var3 = {};
        var6 = _closure1_slot6;
        var6 = var6.EMBED_MOBILE;
        var3.location = var6;
        var3 = var4.bind(var5)(var3);
        var1.isEligibleForQuests = var3;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.createQuestsEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3155, 5182, 5184, 660, 3294, 478, 1234, 5222, 9938, 5186, 3165, 5241, 4059, 12059, 5194, 5217, 5221, 9971, 5269, 2]);