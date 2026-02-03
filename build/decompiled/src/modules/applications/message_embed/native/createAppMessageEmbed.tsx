// modules/applications/message_embed/native/createAppMessageEmbed.tsx
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
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppLauncherRouteName;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CodedLinkExtendedType;
    var _closure1_slot8 = var3;
    var3 = ['embedded_cover'];
    var _closure1_slot9 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/message_embed/native/createAppMessageEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun89199: for (var _fun89199_ip = 0;;) switch (_fun89199_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.theme;
                var3 = var0.appId;
                var7 = var0.embedUrl;
                var5 = var0.message;
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var6.bind(var4)(var0);
                var0 = var0.bind(var4)(var2);
                var15 = var0.baseColors;
                var0 = var0.colors;
                var14 = var5.channel_id;
                var2 = _closure1_slot6;
                var0 = var2.getApplication;
                var13 = var0.bind(var2)(var3);
                var0 = null;
                if (!(var0 != var13)) {
                    _fun89199_ip = 1412;
                    continue _fun89199
                }
            case 96:
                var12 = var13.name;
                var17 = var13.bot;
                var11 = var13.tags;
                var20 = var13.maxParticipants;
                var16 = var13.icon;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 7;
                var2 = var2[var9];
                var6 = var6.bind(var4)(var2);
                var2 = var6.isEmbeddedApp;
                var2 = var2.bind(var6)(var13);
                if (!var2) {
                    _fun89199_ip = 207;
                    continue _fun89199
                }
            case 158:
                var8 = _closure1_slot4;
                var6 = var8.getApplicationAssetFetchState;
                var8 = var6.bind(var8)(var3);
                var6 = _closure1_slot5;
                var6 = var6.NOT_FETCHED;
                if (!(var8 !== var6)) {
                    _fun89199_ip = 1374;
                    continue _fun89199
                }
            case 190:
                var6 = _closure1_slot5;
                var6 = var6.FETCHING;
                if (!(var8 !== var6)) {
                    _fun89199_ip = 1372;
                    continue _fun89199
                }
            case 207:
                if (!(var0 == var20)) {
                    _fun89199_ip = 270;
                    continue _fun89199
                }
            case 211:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var6 = 9;
                var8 = var19[var6];
                var8 = var18.bind(var4)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var6 = var19[var6];
                var6 = var18.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.RjceQU;
                var10 = var8.bind(var10)(var6);
                _fun89199_ip = 335;
                continue _fun89199;
            case 270:
                var8 = _closure1_slot0;
                var21 = _closure1_slot2;
                var6 = 9;
                var18 = var21[var6];
                var18 = var8.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.formatToPlainString;
                var6 = var21[var6];
                var6 = var8.bind(var4)(var6);
                var6 = var6.t;
                var8 = var6.z8EAJW;
                var6 = {};
                var6.count = var20;
                var10 = var18.bind(var19)(var8, var6);
            case 335:
                var8 = new Array(0);
                if (!var2) {
                    _fun89199_ip = 807;
                    continue _fun89199
                }
            case 345:
                var6 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 10;
                var2 = var18[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.canLaunchFrame;
                var2 = var2.bind(var6)(var13);
                if (var2) {
                    _fun89199_ip = 726;
                    continue _fun89199
                }
            case 382:
                var6 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 11;
                var2 = var18[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.getPlayInContext;
                var6 = var2.bind(var6)(var3, var14);
                var2 = var6.instanceId;
                var14 = var6.isCurrentlyInInstance;
                var6 = var6.canLaunchInChannel;
                if (var6) {
                    _fun89199_ip = 523;
                    continue _fun89199
                }
            case 435:
                var18 = var8.push;
                var6 = {};
                var19 = 'play_in_dm';
                var6.id = var19;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 9;
                var20 = var23[var19];
                var20 = var22.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.JeK1Wg;
                var19 = var20.bind(var21)(var19);
                var6.label = var19;
                var6 = var18.bind(var8)(var6);
                _fun89199_ip = 807;
                continue _fun89199;
            case 523:
                var20 = _closure1_slot0;
                var6 = _closure1_slot2;
                var21 = 9;
                var18 = var6[var21];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var6 = var6[var21];
                var6 = var20.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.RscU7I;
                var6 = var18.bind(var19)(var6);
                if (var14) {
                    _fun89199_ip = 642;
                    continue _fun89199
                }
            case 581:
                var18 = var6;
                if (!(var0 != var2)) {
                    _fun89199_ip = 694;
                    continue _fun89199
                }
            case 588:
                var20 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = var2[var21];
                var6 = var20.bind(var4)(var6);
                var19 = var6.intl;
                var6 = var19.string;
                var2 = var2[var21];
                var2 = var20.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.VJlc0S;
                var18 = var6.bind(var19)(var2);
                _fun89199_ip = 694;
                continue _fun89199;
            case 642:
                var20 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = var2[var21];
                var6 = var20.bind(var4)(var6);
                var19 = var6.intl;
                var6 = var19.string;
                var2 = var2[var21];
                var2 = var20.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.DPfdsq;
                var18 = var6.bind(var19)(var2);
            case 694:
                var6 = var8.push;
                var2 = {};
                var19 = 'play_in_channel';
                var2.id = var19;
                var2.label = var18;
                var2.disabled = var14;
                var2 = var6.bind(var8)(var2);
                _fun89199_ip = 807;
                continue _fun89199;
            case 726:
                var6 = var8.push;
                var2 = {};
                var14 = 'play_frame';
                var2.id = var14;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var14 = 9;
                var18 = var21[var14];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var14 = var21[var14];
                var14 = var20.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.RscU7I;
                var14 = var18.bind(var19)(var14);
                var2.label = var14;
                var2 = var6.bind(var8)(var2);
            case 807:
                var6 = var11.join;
                var2 = ' ∙ ';
                var11 = var6.bind(var11)(var2);
                var20 = var13.id;
                var18 = var13.bot;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var6 = var6.bind(var4)(var2);
                var2 = var6.isEmbeddedApp;
                var2 = var2.bind(var6)(var13);
                if (!var2) {
                    _fun89199_ip = 977;
                    continue _fun89199
                }
            case 865:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var14 = 8;
                var2 = var2[var14];
                var9 = var6.bind(var4)(var2);
                var6 = var9.getAssetIds;
                var2 = _closure1_slot9;
                var9 = var6.bind(var9)(var20, var2);
                if (!(var0 == var9)) {
                    _fun89199_ip = 909;
                    continue _fun89199
                }
            case 905:
                var9 = new Array(0);
            case 909:
                var6 = _closure1_slot3;
                var2 = 1;
                var6 = var6.bind(var4)(var9, var2);
                var2 = 0;
                var19 = var6[var2];
                var2 = var0 != var19;
                var6 = null;
                if (!var2) {
                    _fun89199_ip = 973;
                    continue _fun89199
                }
            case 937:
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var14];
                var14 = var9.bind(var4)(var2);
                var9 = var14.getAssetImage;
                var2 = 512;
                var6 = var9.bind(var14)(var20, var19, var2);
            case 973:
                if (!(var0 == var6)) {
                    _fun89199_ip = 1092;
                    continue _fun89199
                }
            case 977:
                if (!(var0 != var18)) {
                    _fun89199_ip = 1055;
                    continue _fun89199
                }
            case 981:
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 13;
                var2 = var14[var2];
                var14 = var9.bind(var4)(var2);
                var9 = var14.getUserBannerURL;
                var2 = {};
                var19 = var18.id;
                var2.id = var19;
                var18 = var18.banner;
                var2.banner = var18;
                var18 = 512;
                var2.size = var18;
                var18 = false;
                var2.canAnimate = var18;
                var9 = var9.bind(var14)(var2);
                if (!(var0 == var9)) {
                    _fun89199_ip = 1071;
                    continue _fun89199
                }
            case 1055:
                var14 = {
                    'bannerRatio': 'bot',
                    'staticBannerSrc': null
                };
                _fun89199_ip = 1111;
                continue _fun89199;
            case 1071:
                var2 = {};
                var18 = 'bot';
                var2.bannerRatio = var18;
                var2.staticBannerSrc = var9;
                var14 = var2;
                _fun89199_ip = 1111;
                continue _fun89199;
            case 1092:
                var2 = {};
                var9 = 'activity';
                var2.bannerRatio = var9;
                var2.staticBannerSrc = var6;
                var14 = var2;
            case 1111:
                var2 = var0 != var16;
                var9 = null;
                if (!var2) {
                    _fun89199_ip = 1153;
                    continue _fun89199
                }
            case 1120:
                var6 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 12;
                var2 = var18[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.getAppIconSrc;
                var9 = var2.bind(var6)(var3, var16, var17);
            case 1153:
                var2 = var9;
                if (!(var0 == var2)) {
                    _fun89199_ip = 1166;
                    continue _fun89199
                }
            case 1160:
                var2 = var14.staticBannerSrc;
            case 1166:
                var6 = var0 != var2;
                var16 = undefined;
                if (!var6) {
                    _fun89199_ip = 1178;
                    continue _fun89199
                }
            case 1175:
                var16 = var2;
            case 1178:
                var6 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 12;
                var2 = var17[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.getAppGradientColors;
                var6 = var2.bind(var6)(var16);
                var2 = {};
                var26 = var2;
                var25 = var15;
                var15 = copyDataProperties(var26, var25);
                var26 = var2;
                var25 = var14;
                var14 = copyDataProperties(var26, var25);
                var14 = var13.id;
                var13 = 'appId';
                var2[var13] = var14;
                var13 = var5.id;
                var5 = 'messageId';
                var2[var5] = var13;
                var5 = 'title';
                var2[var5] = var0;
                var5 = 'header';
                var2[var5] = var12;
                var5 = 'info';
                var2[var5] = var11;
                var5 = 'tagline';
                var2[var5] = var10;
                var5 = 'iconSrc';
                var2[var5] = var9;
                var5 = 'actions';
                var2[var5] = var8;
                var5 = 'embedUrl';
                var2[var5] = var7;
                var5 = _closure1_slot8;
                var7 = var5.APP_MESSAGE_EMBED;
                var5 = 'extendedType';
                var2[var5] = var7;
                var5 = 'gradientColors';
                var2[var5] = var6;
                var5 = 'type';
                var2[var5] = var0;
                var5 = 'headerText';
                var2[var5] = var0;
                return var2;
            case 1372:
                return var0;
            case 1374:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 8;
                var2 = var6[var2];
                var6 = var5.bind(var4)(var2);
                var5 = var6.fetchAssetIds;
                var2 = _closure1_slot9;
                var2 = var5.bind(var6)(var3, var2);
                return var0;
            case 1412:
                var5 = _closure1_slot6;
                var2 = var5.isFetchingApplication;
                var5 = var2.bind(var5)(var3);
                var2 = false;
                if (!(var2 === var5)) {
                    _fun89199_ip = 1464;
                    continue _fun89199
                }
            case 1433:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.fetchApplication;
                var1 = var1.bind(var2)(var3);
            case 1464:
                return var0;
        }
    };
    var2.createAppMessageEmbed = var3;
    var1 = function arg0() {
        _fun89200: for (var _fun89200_ip = 0;;) switch (_fun89200_ip) {
            case 0:
                var9 = arg0;
                var2 = _closure1_slot6;
                var1 = var2.getApplication;
                var0 = var9.appId;
                var7 = var1.bind(var2)(var0);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.toURLSafe;
                var1 = var9.embedUrl;
                var3 = var2.bind(var3)(var1);
                var2 = null;
                var1 = var2 == var3;
                var5 = undefined;
                if (var1) {
                    _fun89200_ip = 97;
                    continue _fun89200
                }
            case 77:
                var8 = var3.searchParams;
                var4 = var8.get;
                var1 = 'referrer_id';
                var5 = var4.bind(var8)(var1);
            case 97:
                if (!(var2 == var5)) {
                    _fun89200_ip = 117;
                    continue _fun89200
                }
            case 101:
                var1 = var9.message;
                var1 = var1.author;
                var5 = var1.id;
            case 117:
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun89200_ip = 146;
                    continue _fun89200
                }
            case 126:
                var8 = var3.searchParams;
                var4 = var8.get;
                var3 = 'custom_id';
                var1 = var4.bind(var8)(var3);
            case 146:
                var3 = var2 != var1;
                var4 = undefined;
                if (!var3) {
                    _fun89200_ip = 158;
                    continue _fun89200
                }
            case 155:
                var4 = var1;
            case 158:
                var3 = var9.actionId;
                var1 = 'play_in_channel';
                if (!(var1 !== var3)) {
                    _fun89200_ip = 785;
                    continue _fun89200
                }
            case 177:
                var1 = 'play_in_dm';
                if (!(var1 !== var3)) {
                    _fun89200_ip = 625;
                    continue _fun89200
                }
            case 190:
                var1 = 'play_frame';
                if (!(var1 !== var3)) {
                    _fun89200_ip = 577;
                    continue _fun89200
                }
            case 203:
                var1 = 'view_in_app_launcher';
                if (!(var1 !== var3)) {
                    _fun89200_ip = 438;
                    continue _fun89200
                }
            case 216:
                var1 = 'add_app';
                if (!(var1 !== var3)) {
                    _fun89200_ip = 342;
                    continue _fun89200
                }
            case 226:
                var1 = 'link_copied';
                if (!(var1 !== var3)) {
                    _fun89200_ip = 278;
                    continue _fun89200
                }
            case 236:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 25;
                var1 = var8[var1];
                var8 = var3.bind(var0)(var1);
                var3 = var8.assertNever;
                var1 = var9.actionId;
                var1 = var3.bind(var8)(var1);
                _fun89200_ip = 888;
                continue _fun89200;
            case 278:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 23;
                var1 = var8[var1];
                var11 = var3.bind(var0)(var1);
                var10 = var11.copy;
                var1 = var9.embedUrl;
                var1 = var10.bind(var11)(var1);
                var1 = 24;
                var1 = var8[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.presentLinkCopied;
                var1 = var1.bind(var3)();
                _fun89200_ip = 888;
                continue _fun89200;
            case 342:
                if (!(var2 != var7)) {
                    _fun89200_ip = 436;
                    continue _fun89200
                }
            case 346:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 22;
                var1 = var8[var1];
                var8 = var3.bind(var0)(var1);
                var3 = var8.installApplication;
                var1 = {};
                var10 = var7.id;
                var1.applicationId = var10;
                var10 = var7.customInstallUrl;
                var1.customInstallUrl = var10;
                var10 = var7.installParams;
                var1.installParams = var10;
                var10 = var7.integrationTypesConfig;
                var1.integrationTypesConfig = var10;
                var10 = 'app_message_embed';
                var1.source = var10;
                var1 = var3.bind(var8)(var1);
                _fun89200_ip = 888;
                continue _fun89200;
            case 436:
                return var0;
            case 438:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 20;
                var1 = var8[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getBestActiveInput;
                var8 = var1.bind(var3)();
                if (!(var2 != var8)) {
                    _fun89200_ip = 888;
                    continue _fun89200
                }
            case 475:
                var3 = var8.openCustomKeyboard;
                var1 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 21;
                var10 = var12[var10];
                var10 = var11.bind(var0)(var10);
                var10 = var10.KeyboardTypes;
                var10 = var10.APP_LAUNCHER;
                var1.type = var10;
                var10 = {};
                var11 = _closure1_slot7;
                var11 = var11.APPLICATION_VIEW;
                var10.initialRouteName = var11;
                var11 = true;
                var10.initiallyExpanded = var11;
                var11 = var9.appId;
                var10.applicationId = var11;
                var10.referrerId = var5;
                var10.customId = var4;
                var1.context = var10;
                var1 = var3.bind(var8)(var1);
                _fun89200_ip = 888;
                continue _fun89200;
            case 577:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 19;
                var1 = var8[var1];
                var8 = var3.bind(var0)(var1);
                var3 = var8.launchFrame;
                var1 = {};
                var10 = var9.appId;
                var1.applicationId = var10;
                var1 = var3.bind(var8)(var1);
                _fun89200_ip = 888;
                continue _fun89200;
            case 625:
                var3 = var2 == var7;
                var1 = undefined;
                if (var3) {
                    _fun89200_ip = 640;
                    continue _fun89200
                }
            case 634:
                var1 = var7.bot;
            case 640:
                if (!(var2 != var1)) {
                    _fun89200_ip = 783;
                    continue _fun89200
                }
            case 647:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 17;
                var1 = var10[var1];
                var3 = var8.bind(var0)(var1);
                var2 = var3.launchActivityInBotDM;
                var1 = {};
                var11 = var9.appId;
                var1.appId = var11;
                var7 = var7.bot;
                var7 = var7.id;
                var1.botId = var7;
                var11 = _closure1_slot1;
                var7 = 16;
                var7 = var10[var7];
                var7 = var11.bind(var0)(var7);
                var11 = var7.APP_MESSAGE_EMBED;
                var7 = new Array(1);
                var7[0] = var11;
                var1.analyticsLocations = var7;
                var7 = 18;
                var7 = var10[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.CommandOrigin;
                var7 = var7.APP_MESSAGE_EMBED;
                var1.commandOrigin = var7;
                var1.referrerId = var5;
                var1.customId = var4;
                var1 = var2.bind(var3)(var1);
                _fun89200_ip = 888;
                continue _fun89200;
            case 783:
                return var0;
            case 785:
                var1 = var9.message;
                var7 = var1.channel_id;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 15;
                var1 = var8[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.joinOrStartActivityInChannel;
                var1 = {};
                var9 = var9.appId;
                var1.appId = var9;
                var1.channelId = var7;
                var7 = _closure1_slot1;
                var6 = 16;
                var6 = var8[var6];
                var6 = var7.bind(var0)(var6);
                var7 = var6.APP_MESSAGE_EMBED;
                var6 = new Array(1);
                var6[0] = var7;
                var1.analyticsLocations = var6;
                var1.referrerId = var5;
                var1.customId = var4;
                var1 = var2.bind(var3)(var1);
            case 888:
                return var0;
        }
    };
    var2.handleTapAppMessageEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5655, 3454, 1468, 11591, 10077, 5344, 4673, 5654, 1234, 4672, 11592, 11593, 1417, 1457, 11594, 5579, 10769, 4547, 7938, 3718, 1567, 7813, 5291, 3147, 1304, 2]);