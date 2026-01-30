// modules/routing/convertRouteToNavigation.native.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot4 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/routing/convertRouteToNavigation.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: convertRouteToNavigation, environment: var1
        _fun99288: for (var _fun99288_ip = 0;;) switch (_fun99288_ip) {
            case 0:
                var6 = arg0;
                var11 = var6.pathname;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var12 = 2;
                var1 = var1[var12];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.getRootNavigationRef;
                var13 = var1.bind(var3)();
                var5 = null;
                if (!(var5 != var13)) {
                    _fun99288_ip = 1469;
                    continue _fun99288
                }
            case 53:
                var1 = var13.isReady;
                var1 = var1.bind(var13)();
                if (!var1) {
                    _fun99288_ip = 1469;
                    continue _fun99288
                }
            case 69:
                var3 = var6.navigationReplace;
                var1 = _closure1_slot4;
                var1 = var1.NOTIFICATIONS;
                if (!(var11 !== var1)) {
                    _fun99288_ip = 1418;
                    continue _fun99288
                }
            case 92:
                var4 = var11.startsWith;
                var1 = '/channels/';
                var1 = var4.bind(var11)(var1);
                if (!var1) {
                    _fun99288_ip = 472;
                    continue _fun99288
                }
            case 115:
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 4;
                var1 = var10[var7];
                var9 = var14.bind(var2)(var1);
                var8 = var9.matchPath;
                var4 = {};
                var19 = _closure1_slot4;
                var17 = var19.CHANNEL;
                var18 = 5;
                var1 = var10[var18];
                var1 = var14.bind(var2)(var1);
                var15 = var1.RouteParam;
                var1 = var15.guildId;
                var16 = var1.bind(var15)();
                var1 = var10[var18];
                var1 = var14.bind(var2)(var1);
                var21 = var1.RouteParam;
                var20 = var21.channelId;
                var15 = {};
                var1 = true;
                var15.optional = var1;
                var15 = var20.bind(var21)(var15);
                var16 = var17.bind(var19)(var16, var15);
                var17 = var19.VOICE_CHAT_CHANNEL_PARTIAL;
                var15 = var10[var18];
                var15 = var14.bind(var2)(var15);
                var21 = var15.RouteParam;
                var20 = var21.guildId;
                var15 = {};
                var22 = 'voiceGuildId';
                var15.name = var22;
                var15 = var20.bind(var21)(var15);
                var10 = var10[var18];
                var10 = var14.bind(var2)(var10);
                var20 = var10.RouteParam;
                var14 = var20.channelId;
                var10 = {};
                var21 = 'voiceChannelId';
                var10.name = var21;
                var14 = var14.bind(var20)(var10);
                var10 = ':voiceMessageId?';
                var15 = var17.bind(var19)(var15, var14, var10);
                var10 = global;
                var10 = var10.HermesInternal;
                var14 = var10.concat;
                var10 = '';
                var10 = var14.bind(var10)(var16, var15);
                var4.path = var10;
                var4 = var8.bind(var9)(var11, var4);
                if (!(var5 == var4)) {
                    _fun99288_ip = 1309;
                    continue _fun99288
                }
            case 350:
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = var10[var7];
                var9 = var14.bind(var2)(var7);
                var8 = var9.matchPath;
                var7 = {};
                var17 = _closure1_slot4;
                var16 = var17.CHANNEL;
                var15 = var10[var18];
                var15 = var14.bind(var2)(var15);
                var19 = var15.RouteParam;
                var15 = var19.guildId;
                var15 = var15.bind(var19)();
                var10 = var10[var18];
                var10 = var14.bind(var2)(var10);
                var18 = var10.RouteParam;
                var14 = var18.channelId;
                var10 = {};
                var10.optional = var1;
                var14 = var14.bind(var18)(var10);
                var10 = ':messageId?';
                var10 = var16.bind(var17)(var15, var14, var10);
                var7.path = var10;
                var7 = var8.bind(var9)(var11, var7);
                if (!(var5 == var7)) {
                    _fun99288_ip = 783;
                    continue _fun99288
                }
            case 472:
                var9 = var11.startsWith;
                var8 = '/member-verification/';
                var8 = var9.bind(var11)(var8);
                if (var8) {
                    _fun99288_ip = 639;
                    continue _fun99288
                }
            case 495:
                var9 = var11.startsWith;
                var8 = _closure1_slot4;
                var8 = var8.LOGIN;
                var8 = var9.bind(var11)(var8);
                if (var8) {
                    _fun99288_ip = 605;
                    continue _fun99288
                }
            case 519:
                var9 = var11.startsWith;
                var8 = _closure1_slot4;
                var8 = var8.REGISTER;
                var8 = var9.bind(var11)(var8);
                if (var8) {
                    _fun99288_ip = 605;
                    continue _fun99288
                }
            case 543:
                var9 = var11.startsWith;
                var8 = _closure1_slot4;
                var8 = var8.ACCOUNT_STANDING;
                var8 = var9.bind(var11)(var8);
                var9 = !var8;
                var8 = !var9;
                if (var9) {
                    _fun99288_ip = 603;
                    continue _fun99288
                }
            case 573:
                var10 = var13.navigate;
                var9 = {};
                var14 = 'account-standing';
                var9.name = var14;
                var9.params = var2;
                var9 = var10.bind(var13)(var9);
                var8 = true;
            case 603:
                _fun99288_ip = 637;
                continue _fun99288;
            case 605:
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 3;
                var9 = var14[var9];
                var10 = var10.bind(var2)(var9);
                var9 = var10.resetToAuthRoute;
                var9 = var9.bind(var10)();
                var8 = true;
            case 637:
                return var8;
            case 639:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 4;
                var8 = var18[var8];
                var10 = var17.bind(var2)(var8);
                var9 = var10.matchPath;
                var8 = {};
                var16 = _closure1_slot4;
                var15 = var16.GUILD_MEMBER_VERIFICATION;
                var14 = 5;
                var14 = var18[var14];
                var14 = var17.bind(var2)(var14);
                var17 = var14.RouteParam;
                var14 = var17.guildId;
                var14 = var14.bind(var17)();
                var14 = var15.bind(var16)(var14);
                var8.path = var14;
                var8 = var9.bind(var10)(var11, var8);
                if (!(var5 != var8)) {
                    _fun99288_ip = 779;
                    continue _fun99288
                }
            case 724:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 3;
                var9 = var11[var9];
                var11 = var10.bind(var2)(var9);
                var10 = var11.navigateToMemberVerification;
                var9 = var8.params;
                var9 = var9.guildId;
                var8 = var8.params;
                var8 = var8.inviteCode;
                var8 = var10.bind(var11)(var9, var8);
            case 779:
                var8 = true;
                return var8;
            case 783:
                var7 = var7.params;
                var8 = var7.channelId;
                var9 = var7.guildId;
                var10 = var7.messageId;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 7;
                var7 = var14[var7];
                var11 = var11.bind(var2)(var7);
                var7 = var13.getCurrentRoute;
                var7 = var7.bind(var13)();
                var11 = var11.bind(var2)(var7);
                var7 = _closure1_slot3;
                var12 = var7.bind(var2)(var11, var12);
                var7 = 0;
                var11 = var12[var7];
                var7 = 1;
                var7 = var12[var7];
                if (!(var11 === var9)) {
                    _fun99288_ip = 873;
                    continue _fun99288
                }
            case 866:
                if (!(var7 !== var8)) {
                    _fun99288_ip = 1307;
                    continue _fun99288
                }
            case 873:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 8;
                var7 = var12[var7];
                var11 = var11.bind(var2)(var7);
                var7 = var11.getChatLayout;
                var7 = var7.bind(var11)();
                var7 = var7.isChatLockedOpen;
                if (var7) {
                    _fun99288_ip = 1184;
                    continue _fun99288
                }
            case 915:
                if (!(var5 == var8)) {
                    _fun99288_ip = 974;
                    continue _fun99288
                }
            case 919:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 3;
                var7 = var12[var7];
                var12 = var11.bind(var2)(var7);
                var11 = var12.navigateToRootTab;
                var7 = {};
                var13 = 'guilds';
                var7.screen = var13;
                var7.guildId = var9;
                var7.channelId = var8;
                var7.resetRoot = var3;
                var7 = var11.bind(var12)(var7);
            case 974:
                if (!(var1 === var3)) {
                    _fun99288_ip = 994;
                    continue _fun99288
                }
            case 978:
                var6 = var6.openChannel;
                if (!var6) {
                    _fun99288_ip = 994;
                    continue _fun99288
                }
            case 987:
                if (!(var5 == var8)) {
                    _fun99288_ip = 1127;
                    continue _fun99288
                }
            case 994:
                var6 = false;
                if (!(var6 !== var3)) {
                    _fun99288_ip = 1055;
                    continue _fun99288
                }
            case 1000:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 3;
                var6 = var11[var6];
                var11 = var7.bind(var2)(var6);
                var7 = var11.navigateToRootTab;
                var6 = {};
                var12 = 'guilds';
                var6.screen = var12;
                var6.guildId = var9;
                var6.channelId = var8;
                var6.resetRoot = var3;
                var6 = var7.bind(var11)(var6);
            case 1055:
                var6 = var5 != var8;
                if (!var6) {
                    _fun99288_ip = 1066;
                    continue _fun99288
                }
            case 1062:
                var6 = var1 !== var3;
            case 1066:
                if (!var6) {
                    _fun99288_ip = 1305;
                    continue _fun99288
                }
            case 1072:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 3;
                var6 = var11[var6];
                var11 = var7.bind(var2)(var6);
                var7 = var11.navigateToChannel;
                var6 = {};
                var6.channelId = var8;
                var6.guildId = var9;
                var6.messageId = var10;
                var6.replaceChannelAndFixRoot = var2;
                var6 = var7.bind(var11)(var6);
                _fun99288_ip = 1305;
                continue _fun99288;
            case 1127:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 3;
                var6 = var11[var6];
                var11 = var7.bind(var2)(var6);
                var7 = var11.navigateToChannel;
                var6 = {};
                var6.channelId = var8;
                var6.guildId = var9;
                var6.messageId = var10;
                var6.replaceChannelAndFixRoot = var3;
                var6.openChannel = var1;
                var6 = var7.bind(var11)(var6);
                return var1;
            case 1184:
                if (!(var5 != var8)) {
                    _fun99288_ip = 1250;
                    continue _fun99288
                }
            case 1188:
                var6 = false;
                if (!(var6 === var3)) {
                    _fun99288_ip = 1250;
                    continue _fun99288
                }
            case 1194:
                if (!(var5 != var9)) {
                    _fun99288_ip = 1305;
                    continue _fun99288
                }
            case 1198:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 3;
                var5 = var7[var5];
                var7 = var6.bind(var2)(var5);
                var6 = var7.navigateToChannel;
                var5 = {};
                var5.channelId = var8;
                var5.guildId = var9;
                var5.messageId = var10;
                var5.replaceChannelAndFixRoot = var3;
                var5 = var6.bind(var7)(var5);
                _fun99288_ip = 1305;
                continue _fun99288;
            case 1250:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 3;
                var5 = var7[var5];
                var7 = var6.bind(var2)(var5);
                var6 = var7.navigateToRootTab;
                var5 = {};
                var10 = 'guilds';
                var5.screen = var10;
                var5.guildId = var9;
                var5.channelId = var8;
                var5.resetRoot = var3;
                var5 = var6.bind(var7)(var5);
            case 1305:
                return var1;
            case 1307:
                return var1;
            case 1309:
                var4 = var4.params;
                var8 = var4.voiceGuildId;
                var9 = var4.voiceChannelId;
                var7 = var4.voiceMessageId;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 6;
                var4 = var6[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.isVoicePanelEnabled;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun99288_ip = 1416;
                    continue _fun99288
                }
            case 1366:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var6 = var5.bind(var2)(var4);
                var5 = var6.navigateToChannel;
                var4 = {};
                var4.channelId = var9;
                var4.guildId = var8;
                var4.messageId = var7;
                var4.replaceChannelAndFixRoot = var3;
                var4 = var5.bind(var6)(var4);
            case 1416:
                return var1;
            case 1418:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.navigateToRootTab;
                var0 = {};
                var4 = 'notifications';
                var0.screen = var4;
                var0.resetRoot = var3;
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
            case 1469:
                var0 = true;
                return var0;
        }
    };
    var2.convertRouteToNavigation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 660, 3879, 3878, 3177, 3187, 7843, 12884, 3881, 2]);