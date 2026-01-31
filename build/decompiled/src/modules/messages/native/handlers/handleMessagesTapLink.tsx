// modules/messages/native/handlers/handleMessagesTapLink.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function(arg0, arg1) { // Original name: handleMessagesTapURLLink, environment: var1
        _fun76147: for (var _fun76147_ip = 0;;) switch (_fun76147_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.url;
                var8 = null;
                var0 = var8 != var0;
                if (!var0) {
                    _fun76147_ip = 30;
                    continue _fun76147
                }
            case 17:
                var2 = var5.url;
                var1 = '';
                var0 = var1 !== var2;
            case 30:
                if (!var0) {
                    _fun76147_ip = 391;
                    continue _fun76147
                }
            case 36:
                var4 = var5.url;
                var10 = var5.node;
                var1 = var8 == var10;
                var2 = false;
                if (var1) {
                    _fun76147_ip = 265;
                    continue _fun76147
                }
            case 59:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 14;
                var1 = var6[var1];
                var6 = undefined;
                var9 = var9.bind(var6)(var1);
                var1 = var9.isLinkTrusted;
                var1 = var1.bind(var9)(var10);
                var2 = false;
                if (!var1) {
                    _fun76147_ip = 265;
                    continue _fun76147
                }
            case 103:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 15;
                var1 = var10[var1];
                var1 = var9.bind(var6)(var1);
                var1 = var1.bind(var6)(var4);
                var1 = var1.payload;
                var9 = var1.type;
                var4 = _closure1_slot12;
                var4 = var4.INVITE;
                var2 = false;
                if (!(var9 === var4)) {
                    _fun76147_ip = 265;
                    continue _fun76147
                }
            case 155:
                var4 = var1.inviteCode;
                var4 = var8 == var4;
                var2 = false;
                if (var4) {
                    _fun76147_ip = 265;
                    continue _fun76147
                }
            case 170:
                var7 = _closure1_slot9;
                var4 = var7.getInvite;
                var1 = var1.inviteCode;
                var4 = var4.bind(var7)(var1);
                var1 = var8 == var4;
                if (var1) {
                    _fun76147_ip = 232;
                    continue _fun76147
                }
            case 198:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 16;
                var7 = var10[var7];
                var9 = var9.bind(var6)(var7);
                var7 = var9.isGuildScheduledEventInviteEmbed;
                var7 = var7.bind(var9)(var4);
                var1 = !var7;
            case 232:
                if (var1) {
                    _fun76147_ip = 262;
                    continue _fun76147
                }
            case 235:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 17;
                var3 = var9[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.bind(var6)(var4);
                var1 = 0;
            case 262:
                var2 = !var1;
            case 265:
                var0 = true;
                if (var2) {
                    _fun76147_ip = 391;
                    continue _fun76147
                }
            case 270:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 18;
                var2 = var4[var2];
                var9 = undefined;
                var4 = var3.bind(var9)(var2);
                var3 = var4.handleClick;
                var2 = {};
                var6 = var5.url;
                var2.href = var6;
                var6 = var5.node;
                var6 = var8 != var6;
                if (!var6) {
                    _fun76147_ip = 363;
                    continue _fun76147
                }
            case 326:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 14;
                var7 = var10[var7];
                var9 = var8.bind(var9)(var7);
                var8 = var9.isLinkTrusted;
                var7 = var5.node;
                var6 = var8.bind(var9)(var7);
            case 363:
                var2.trusted = var6;
                var5 = var5.messageId;
                var2.messageId = var5;
                var5 = arg1;
                var2.channelId = var5;
                var2 = var3.bind(var4)(var2);
                var0 = true;
            case 391:
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.getSection;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticsLocations;
    var _closure1_slot11 = var7;
    var7 = var4.LinkingTypes;
    var _closure1_slot12 = var7;
    var4 = var4.Routes;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ChannelDetailsNavigatorScreens;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NotificationTypes;
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.OpenThreadAnalyticsLocations;
    var _closure1_slot18 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/handlers/handleMessagesTapLink.tsx';
    var4 = var5.bind(var6)(var4);
    var2.handleMessagesTapURLLink = var3;
    var1 = function(arg0) { // Original name: handleMessagesTapLink, environment: var1
        _fun76148: for (var _fun76148_ip = 0;;) switch (_fun76148_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.allowWithinModal;
                var5 = var1.chatInputRef;
                var10 = var1.handleTransitionToThread;
                var11 = var1.message;
                var9 = var1.messageChannel;
                var2 = var1.selectedChannelId;
                var1 = var1.tapLinkData;
                var3 = var1.data;
                var8 = true;
                if (!(var8 !== var0)) {
                    _fun76148_ip = 97;
                    continue _fun76148
                }
            case 55:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 19;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.isAlertOrActionSheetOpen;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 97:
                var6 = _closure1_slot19;
                var1 = null;
                var7 = var1 == var9;
                var2 = undefined;
                var4 = undefined;
                if (var7) {
                    _fun76148_ip = 122;
                    continue _fun76148
                }
            case 117:
                var4 = var9.id;
            case 122:
                var4 = var6.bind(var2)(var3, var4);
                if (var4) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 134:
                var4 = var3.action;
                if (!(var1 != var4)) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 146:
                var6 = var3.action;
                var4 = 'bindUserMenu';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 2585;
                    continue _fun76148
                }
            case 164:
                var4 = 'bindGuildMenu';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 2457;
                    continue _fun76148
                }
            case 177:
                var4 = 'bindJoinStream';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 2377;
                    continue _fun76148
                }
            case 190:
                var4 = 'bindOpenPins';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 2268;
                    continue _fun76148
                }
            case 203:
                var4 = 'bindOpenGdmCustomizeActionSheet';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 2226;
                    continue _fun76148
                }
            case 216:
                var4 = 'bindDismissMessage';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 2083;
                    continue _fun76148
                }
            case 229:
                var4 = 'bindTapUsername';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 1992;
                    continue _fun76148
                }
            case 242:
                var4 = 'bindTapCommandName';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 1317;
                    continue _fun76148
                }
            case 255:
                var4 = 'bindTapActivityText';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 1064;
                    continue _fun76148
                }
            case 268:
                var4 = 'bindOpenThreadChannel';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 996;
                    continue _fun76148
                }
            case 281:
                var4 = 'bindJumpToMessage';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 923;
                    continue _fun76148
                }
            case 294:
                var4 = 'bindOpenRoleSubscriptionOverview';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 810;
                    continue _fun76148
                }
            case 307:
                var4 = 'bindUserSurvey';
                if (!(var4 !== var6)) {
                    _fun76148_ip = 396;
                    continue _fun76148
                }
            case 317:
                var4 = 'bindInsertText';
                if (!(var4 === var6)) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 330:
                var4 = var1 == var5;
                var12 = undefined;
                if (var4) {
                    _fun76148_ip = 351;
                    continue _fun76148
                }
            case 339:
                var6 = var5.current;
                var4 = var1 == var6;
                var12 = var6;
            case 351:
                if (var4) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 357:
                var7 = var12.insertText;
                var6 = var3.text;
                var13 = var3.addSpace;
                var4 = var1 == var13;
                if (var4) {
                    _fun76148_ip = 384;
                    continue _fun76148
                }
            case 381:
                var4 = var13;
            case 384:
                var4 = var7.bind(var12)(var6, var1, var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 396:
                var7 = _closure1_slot8;
                var6 = var7.getChannel;
                var4 = var3.message;
                var4 = var4.channel_id;
                var4 = var6.bind(var7)(var4);
                var6 = var1 == var4;
                var15 = undefined;
                if (var6) {
                    _fun76148_ip = 434;
                    continue _fun76148
                }
            case 429:
                var15 = var4.guild_id;
            case 434:
                if (!(var1 != var15)) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 441:
                var6 = var3.notificationType;
                var4 = _closure1_slot17;
                var4 = var4.TRENDING_CONTENT_PUSH;
                if (!(var4 !== var6)) {
                    _fun76148_ip = 676;
                    continue _fun76148
                }
            case 464:
                var4 = _closure1_slot17;
                var4 = var4.TOP_MESSAGE_PUSH;
                if (!(var4 !== var6)) {
                    _fun76148_ip = 614;
                    continue _fun76148
                }
            case 481:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 23;
                var4 = var7[var4];
                var12 = var6.bind(var2)(var4);
                var4 = 38;
                var6 = var7[var4];
                var4 = var7.paths;
                var13 = var12.bind(var2)(var6, var4);
                var6 = _closure1_slot1;
                var4 = 21;
                var4 = var7[var4];
                var12 = var6.bind(var2)(var4);
                var7 = var12.openLazy;
                var6 = {};
                var4 = _closure1_slot11;
                var4 = var4.MESSAGE_EMBED;
                var6.location = var4;
                var4 = var3.message;
                var4 = var4.id;
                var6.messageId = var4;
                var4 = var3.notificationType;
                if (!(var1 == var4)) {
                    _fun76148_ip = 591;
                    continue _fun76148
                }
            case 581:
                var14 = _closure1_slot17;
                var4 = var14.TOP_MESSAGE_PUSH;
            case 591:
                var6.notificationType = var4;
                var4 = 'NotificationSurvey';
                var4 = var7.bind(var12)(var13, var4, var6);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 614:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 37;
                var4 = var7[var4];
                var13 = var6.bind(var2)(var4);
                var12 = var13.openGuildHighlightNotificationForPush;
                var22 = var3.message;
                var21 = var3.notificationType;
                var4 = _closure1_slot11;
                var20 = var4.MESSAGE_EMBED;
                var24 = var13;
                var23 = var15;
                var4 = var24[var12](var23, var22, var21, var20, var19);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 676:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 37;
                var4 = var7[var4];
                var14 = var6.bind(var2)(var4);
                var13 = var14.openGuildHighlightNotificationForPush;
                var12 = var3.message;
                var7 = var3.notificationType;
                var4 = _closure1_slot11;
                var6 = var4.MESSAGE_EMBED;
                var4 = {};
                var18 = _closure1_slot6;
                var17 = var18.selectedSummary;
                var16 = var3.message;
                var16 = var16.channel_id;
                var16 = var17.bind(var18)(var16);
                var18 = var1 == var16;
                var17 = undefined;
                if (var18) {
                    _fun76148_ip = 764;
                    continue _fun76148
                }
            case 759:
                var17 = var16.id;
            case 764:
                var18 = var1 != var17;
                var16 = 'unknown';
                if (!var18) {
                    _fun76148_ip = 778;
                    continue _fun76148
                }
            case 775:
                var16 = var17;
            case 778:
                var4.summary_id = var16;
                var24 = var14;
                var23 = var15;
                var22 = var12;
                var21 = var7;
                var20 = var6;
                var19 = var4;
                var4 = var24[var13](var23, var22, var21, var20, var19, var18);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 810:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 35;
                var4 = var7[var4];
                var13 = var6.bind(var2)(var4);
                var12 = var13.transitionTo;
                var16 = _closure1_slot13;
                var15 = var16.CHANNEL;
                var14 = var3.guildId;
                var4 = _closure1_slot15;
                var4 = var4.ROLE_SUBSCRIPTIONS;
                var4 = var15.bind(var16)(var14, var4);
                var4 = var12.bind(var13)(var4);
                var4 = 36;
                var4 = var7[var4];
                var14 = var6.bind(var2)(var4);
                var13 = var14.trackRoleSubscriptionPurchaseMessageTierClick;
                var23 = var3.guildId;
                var22 = var3.channelId;
                var21 = var3.messageId;
                var20 = var3.roleSubscriptionListingId;
                var24 = var14;
                var4 = var24[var13](var23, var22, var21, var20, var19);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 923:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 29;
                var4 = var7[var4];
                var7 = var6.bind(var2)(var4);
                var6 = var7.jumpToMessage;
                var4 = {};
                var12 = var3.targetChannelId;
                var4.channelId = var12;
                var12 = var3.targetMessageId;
                var4.messageId = var12;
                var4.flash = var8;
                var12 = var3.messageId;
                var4.returnMessageId = var12;
                var4 = var6.bind(var7)(var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 996:
                var7 = _closure1_slot8;
                var6 = var7.getChannel;
                var4 = var3.threadId;
                var4 = var6.bind(var7)(var4);
                if (!(var1 != var4)) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 1023:
                var6 = var1 == var4;
                var7 = undefined;
                if (var6) {
                    _fun76148_ip = 1037;
                    continue _fun76148
                }
            case 1032:
                var7 = var4.guild_id;
            case 1037:
                var6 = var4.id;
                var4 = _closure1_slot18;
                var4 = var4.EMBED;
                var4 = var10.bind(var2)(var7, var6, var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 1064:
                var7 = _closure1_slot4;
                var6 = var7.getApplication;
                var4 = var3.applicationUserId;
                var12 = var6.bind(var7)(var4);
                if (!(var1 != var12)) {
                    _fun76148_ip = 1200;
                    continue _fun76148
                }
            case 1089:
                var4 = var1 == var5;
                var7 = undefined;
                if (var4) {
                    _fun76148_ip = 1110;
                    continue _fun76148
                }
            case 1098:
                var6 = var5.current;
                var4 = var1 == var6;
                var7 = var6;
            case 1110:
                if (var4) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 1116:
                var6 = var7.openCustomKeyboard;
                var4 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 32;
                var10 = var14[var10];
                var10 = var13.bind(var2)(var10);
                var10 = var10.KeyboardTypes;
                var10 = var10.APP_LAUNCHER;
                var4.type = var10;
                var10 = {};
                var13 = _closure1_slot14;
                var13 = var13.APPLICATION_VIEW;
                var10.initialRouteName = var13;
                var10.application = var12;
                var10.initiallyExpanded = var8;
                var4.context = var10;
                var4 = var6.bind(var7)(var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 1200:
                var4 = var1 == var5;
                var7 = undefined;
                if (var4) {
                    _fun76148_ip = 1221;
                    continue _fun76148
                }
            case 1209:
                var6 = var5.current;
                var4 = var1 == var6;
                var7 = var6;
            case 1221:
                if (var4) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 1227:
                var6 = var7.openCustomKeyboard;
                var4 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 32;
                var10 = var13[var10];
                var10 = var12.bind(var2)(var10);
                var10 = var10.KeyboardTypes;
                var10 = var10.APP_LAUNCHER;
                var4.type = var10;
                var10 = {};
                var12 = _closure1_slot14;
                var12 = var12.APPLICATION_VIEW;
                var10.initialRouteName = var12;
                var12 = var3.applicationUserId;
                var10.applicationId = var12;
                var10.initiallyExpanded = var8;
                var4.context = var10;
                var4 = var6.bind(var7)(var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 1317:
                var6 = var1 == var11;
                var4 = undefined;
                if (var6) {
                    _fun76148_ip = 1332;
                    continue _fun76148
                }
            case 1326:
                var4 = var11.interaction;
            case 1332:
                if (!(var1 != var4)) {
                    _fun76148_ip = 1990;
                    continue _fun76148
                }
            case 1339:
                if (!(var1 != var9)) {
                    _fun76148_ip = 1990;
                    continue _fun76148
                }
            case 1346:
                var7 = _closure1_slot10;
                var6 = var7.getUser;
                var4 = var3.userId;
                var7 = var6.bind(var7)(var4);
                if (!(var1 != var7)) {
                    _fun76148_ip = 1988;
                    continue _fun76148
                }
            case 1373:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 31;
                var4 = var10[var4];
                var6 = var6.bind(var2)(var4);
                var4 = var6.isPrimaryEntryPointCommandMessage;
                var4 = var4.bind(var6)(var11);
                if (var4) {
                    _fun76148_ip = 1620;
                    continue _fun76148
                }
            case 1410:
                var6 = var1 == var11;
                var4 = undefined;
                if (var6) {
                    _fun76148_ip = 1425;
                    continue _fun76148
                }
            case 1419:
                var4 = var11.author;
            case 1425:
                if (!(var1 != var4)) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 1432:
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var4 = 33;
                var4 = var13[var4];
                var6 = var6.bind(var2)(var4);
                var4 = {};
                var12 = _closure1_slot0;
                var10 = 34;
                var10 = var13[var10];
                var13 = var12.bind(var2)(var10);
                var12 = var13.getUserAuthor;
                var10 = var11.interaction;
                var10 = var10.user;
                var10 = var12.bind(var13)(var10, var9);
                var4.author = var10;
                var10 = var3.messageChannelId;
                var4.channelId = var10;
                var4.chatInputRef = var5;
                var10 = var3.messageId;
                var4.messageId = var10;
                var4.user = var7;
                var12 = _closure1_slot7;
                var10 = var1 == var11;
                var7 = undefined;
                if (var10) {
                    _fun76148_ip = 1545;
                    continue _fun76148
                }
            case 1539:
                var7 = var11.author;
            case 1545:
                var10 = var12.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var12
                    }
                });
                var24 = var10;
                var23 = var7;
                var7 = new var24[var12](var23, var22);
                var7 = var7 instanceof Object ? var7 : var10;
                var4.applicationUser = var7;
                var7 = var9.getGuildId;
                var9 = var7.bind(var9)();
                var10 = var1 != var9;
                var7 = undefined;
                if (!var10) {
                    _fun76148_ip = 1595;
                    continue _fun76148
                }
            case 1592:
                var7 = var9;
            case 1595:
                var4.guildId = var7;
                var7 = var3.messageType;
                var4.messageType = var7;
                var4 = var6.bind(var2)(var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 1620:
                var4 = var11.applicationId;
                if (!(var1 != var4)) {
                    _fun76148_ip = 1986;
                    continue _fun76148
                }
            case 1632:
                var7 = _closure1_slot8;
                var6 = var7.getChannel;
                var4 = var3.messageChannelId;
                var4 = var6.bind(var7)(var4);
                if (!(var1 != var4)) {
                    _fun76148_ip = 1984;
                    continue _fun76148
                }
            case 1659:
                var7 = _closure1_slot3;
                var6 = {};
                var6.channel = var4;
                var4 = 'channel';
                var6.type = var4;
                var4 = var11.applicationId;
                var9 = var7.bind(var2)(var6, var4);
                var6 = var9.descriptor;
                var7 = var1 == var6;
                var4 = undefined;
                if (var7) {
                    _fun76148_ip = 1708;
                    continue _fun76148
                }
            case 1703:
                var4 = var6.application;
            case 1708:
                if (!(var1 == var4)) {
                    _fun76148_ip = 1836;
                    continue _fun76148
                }
            case 1715:
                var4 = var1 == var5;
                var7 = undefined;
                if (var4) {
                    _fun76148_ip = 1736;
                    continue _fun76148
                }
            case 1724:
                var6 = var5.current;
                var4 = var1 == var6;
                var7 = var6;
            case 1736:
                if (var4) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 1742:
                var6 = var7.openCustomKeyboard;
                var4 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 32;
                var10 = var13[var10];
                var10 = var12.bind(var2)(var10);
                var10 = var10.KeyboardTypes;
                var10 = var10.APP_LAUNCHER;
                var4.type = var10;
                var10 = {};
                var12 = _closure1_slot14;
                var12 = var12.APPLICATION_VIEW;
                var10.initialRouteName = var12;
                var10.initiallyExpanded = var8;
                var11 = var11.applicationId;
                var10.applicationId = var11;
                var10.installOnDemand = var8;
                var4.context = var10;
                var4 = var6.bind(var7)(var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 1836:
                var4 = var1 == var5;
                var6 = undefined;
                if (var4) {
                    _fun76148_ip = 1857;
                    continue _fun76148
                }
            case 1845:
                var5 = var5.current;
                var4 = var1 == var5;
                var6 = var5;
            case 1857:
                if (var4) {
                    _fun76148_ip = 2640;
                    continue _fun76148
                }
            case 1863:
                var5 = var6.openCustomKeyboard;
                var4 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 32;
                var7 = var11[var7];
                var7 = var10.bind(var2)(var7);
                var7 = var7.KeyboardTypes;
                var7 = var7.APP_LAUNCHER;
                var4.type = var7;
                var7 = {};
                var10 = _closure1_slot14;
                var10 = var10.APPLICATION_VIEW;
                var7.initialRouteName = var10;
                var7.initiallyExpanded = var8;
                var8 = var9.descriptor;
                var8 = var8.application;
                var7.application = var8;
                var8 = var9.isGuildInstalled;
                var8 = !var8;
                if (!var8) {
                    _fun76148_ip = 1965;
                    continue _fun76148
                }
            case 1956:
                var9 = var9.isUserInstalled;
                var8 = !var9;
            case 1965:
                var7.installOnDemand = var8;
                var4.context = var7;
                var4 = var5.bind(var6)(var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 1984:
                return var2;
            case 1986:
                return var2;
            case 1988:
                return var2;
            case 1990:
                return var2;
            case 1992:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 20;
                var4 = var8[var4];
                var5 = var7.bind(var2)(var4);
                var4 = {};
                var6 = var3.userId;
                var4.userId = var6;
                var6 = var3.messageChannelId;
                var4.channelId = var6;
                var6 = var3.messageId;
                var4.messageId = var6;
                var6 = 30;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var7 = var6.USERNAME;
                var6 = new Array(1);
                var6[0] = var7;
                var4.sourceAnalyticsLocations = var6;
                var4 = var5.bind(var2)(var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 2083:
                var6 = _closure1_slot5;
                var5 = var6.getMessage;
                var7 = var3.message;
                var8 = var1 == var7;
                var4 = undefined;
                if (var8) {
                    _fun76148_ip = 2112;
                    continue _fun76148
                }
            case 2107:
                var4 = var7.id;
            case 2112:
                var4 = var5.bind(var6)(var4);
                if (!(var1 != var4)) {
                    _fun76148_ip = 2130;
                    continue _fun76148
                }
            case 2121:
                var4 = var4.isBlockedEdit;
                if (var4) {
                    _fun76148_ip = 2171;
                    continue _fun76148
                }
            case 2130:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 29;
                var4 = var6[var4];
                var6 = var5.bind(var2)(var4);
                var5 = var6.dismissAutomatedMessage;
                var4 = var3.message;
                var4 = var5.bind(var6)(var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 2171:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 28;
                var4 = var6[var4];
                var6 = var5.bind(var2)(var4);
                var5 = var6.removeAutomodMessageNotice;
                var7 = var3.message;
                var8 = var1 == var7;
                var4 = undefined;
                if (var8) {
                    _fun76148_ip = 2216;
                    continue _fun76148
                }
            case 2211:
                var4 = var7.id;
            case 2216:
                var4 = var5.bind(var6)(var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 2226:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 27;
                var4 = var6[var4];
                var5 = var5.bind(var2)(var4);
                var4 = {};
                var6 = var3.messageChannelId;
                var4.channelId = var6;
                var4 = var5.bind(var2)(var4);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 2268:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 26;
                var4 = var6[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.getRootNavigationRef;
                var7 = var4.bind(var5)();
                if (!(var1 != var7)) {
                    _fun76148_ip = 2375;
                    continue _fun76148
                }
            case 2302:
                var4 = var7.isReady;
                var4 = var4.bind(var7)();
                if (!var4) {
                    _fun76148_ip = 2375;
                    continue _fun76148
                }
            case 2315:
                var6 = var7.navigate;
                var5 = {};
                var4 = _closure1_slot16;
                var4 = var4.PINNED_MESSAGES;
                var5.initialRouteName = var4;
                var4 = var3.messageChannelId;
                var5.channelId = var4;
                var4 = 'pinned-message-system-message';
                var5.source = var4;
                var4 = 'sidebar';
                var4 = var6.bind(var7)(var4, var5);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 2375:
                return var2;
            case 2377:
                var6 = var3.stream;
                if (!(var1 != var6)) {
                    _fun76148_ip = 2455;
                    continue _fun76148
                }
            case 2387:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 24;
                var4 = var7[var4];
                var8 = var5.bind(var2)(var4);
                var5 = var8.selectVoiceChannel;
                var4 = var6.channelId;
                var4 = var5.bind(var8)(var4);
                var5 = _closure1_slot0;
                var4 = 25;
                var4 = var7[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.watchStreamAndTransitionToStream;
                var4 = var4.bind(var5)(var6);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 2455:
                return var2;
            case 2457:
                var4 = var3.messageReference;
                if (!(var1 != var4)) {
                    _fun76148_ip = 2583;
                    continue _fun76148
                }
            case 2467:
                var4 = var3.messageReference;
                var8 = var4.guild_id;
                if (!(var1 != var8)) {
                    _fun76148_ip = 2581;
                    continue _fun76148
                }
            case 2482:
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var4 = 21;
                var4 = var1[var4];
                var7 = var5.bind(var2)(var4);
                var6 = var7.openLazy;
                var5 = _closure1_slot0;
                var4 = 23;
                var4 = var1[var4];
                var5 = var5.bind(var2)(var4);
                var4 = 22;
                var4 = var1[var4];
                var1 = var1.paths;
                var5 = var5.bind(var2)(var4, var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var1 = 'GuildProfileActionSheet:';
                var4 = var4.bind(var1)(var8);
                var1 = {};
                var1.guildId = var8;
                var1 = var6.bind(var7)(var5, var4, var1);
                _fun76148_ip = 2640;
                continue _fun76148;
            case 2581:
                return var2;
            case 2583:
                return var2;
            case 2585:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 20;
                var0 = var4[var0];
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var4 = var3.userId;
                var0.userId = var4;
                var4 = var3.messageChannelId;
                var0.channelId = var4;
                var3 = var3.messageId;
                var0.messageId = var3;
                var0 = var1.bind(var2)(var0);
            case 2640:
                var0 = undefined;
                return var0;
        }
    };
    var2.handleMessagesTapLink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4637, 3413, 6484, 9204, 1620, 1372, 3282, 1613, 660, 1468, 1379, 8947, 4524, 1233, 9661, 3241, 3292, 9662, 5852, 9663, 7312, 3237, 7339, 1307, 4195, 7975, 3879, 9061, 9665, 6488, 5541, 6780, 1567, 9666, 3942, 1220, 6653, 9669, 9692, 2]);