// modules/game_console/GameConsoleConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var2 = exports;
    var11 = dependencyMap;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var11[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var4 = var3.ActivityGamePlatforms;
    var3 = 1;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.VOICE;
    var8 = new Array(7);
    var8[0] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.DM_CHANNELS_READ;
    var8[1] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.GUILDS;
    var8[2] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.GUILDS_MEMBERS_READ;
    var8[3] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.IDENTIFY;
    var8[4] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.CONNECTIONS;
    var8[5] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.ACTIVITIES_READ;
    var8[6] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.VOICE;
    var7 = new Array(6);
    var7[0] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.DM_CHANNELS_READ;
    var7[1] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.GUILDS;
    var7[2] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.GUILDS_MEMBERS_READ;
    var7[3] = var5;
    var5 = var11[var3];
    var5 = var10.bind(var0)(var5);
    var5 = var5.OAuth2Scopes;
    var5 = var5.IDENTIFY;
    var7[4] = var5;
    var3 = var11[var3];
    var3 = var10.bind(var0)(var3);
    var3 = var3.OAuth2Scopes;
    var3 = var3.CONNECTIONS;
    var7[5] = var3;
    var6 = {};
    var3 = 'playstation';
    var6.PLAYSTATION = var3;
    var3 = 'xbox';
    var6.XBOX = var3;
    var9 = var1.Set;
    var5 = var6.XBOX;
    var3 = new Array(2);
    var3[0] = var5;
    var5 = var6.PLAYSTATION;
    var3[1] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var16 = var5;
    var15 = var3;
    var3 = new var16[var9](var15, var14);
    var5 = var3 instanceof Object ? var3 : var5;
    var9 = var1.Set;
    var12 = var4.XBOX;
    var3 = new Array(2);
    var3[0] = var12;
    var4 = var4.PS5;
    var3[1] = var4;
    var4 = var9.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var9
        }
    });
    var16 = var4;
    var15 = var3;
    var3 = new var16[var9](var15, var14);
    var4 = var3 instanceof Object ? var3 : var4;
    var3 = {};
    var12 = 270000;
    var3.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = var12;
    var9 = 'CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED';
    var3[var12] = var9;
    var12 = 270001;
    var3.CONSOLE_DEVICE_UNAVAILABLE = var12;
    var9 = 'CONSOLE_DEVICE_UNAVAILABLE';
    var3[var12] = var9;
    var12 = 270002;
    var3.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = var12;
    var9 = 'CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS';
    var3[var12] = var9;
    var12 = 270003;
    var3.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = var12;
    var9 = 'CONSOLE_DEVICE_COMMUNICATION_RESTRICTED';
    var3[var12] = var9;
    var12 = 270004;
    var3.CONSOLE_DEVICE_INVALID_POWER_MODE = var12;
    var9 = 'CONSOLE_DEVICE_INVALID_POWER_MODE';
    var3[var12] = var9;
    var12 = 270005;
    var3.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = var12;
    var9 = 'CONSOLE_DEVICE_ACCOUNT_LINK_ERROR';
    var3[var12] = var9;
    var12 = 270006;
    var3.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = var12;
    var9 = 'CONSOLE_DEVICE_MAX_MEMBERS_REACHED';
    var3[var12] = var9;
    var12 = 270007;
    var3.CONSOLE_DEVICE_BAD_COMMAND = var12;
    var9 = 'CONSOLE_DEVICE_BAD_COMMAND';
    var3[var12] = var9;
    var12 = var1.Set;
    var9 = var3.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED;
    var1 = new Array(1);
    var1[0] = var9;
    var9 = var12.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var12
        }
    });
    var16 = var9;
    var15 = var1;
    var1 = new var16[var12](var15, var14);
    var1 = var1 instanceof Object ? var1 : var9;
    var9 = 2;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/game_console/GameConsoleConstants.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = 'xbox://communitylinking/donut/audio';
    var2.XBOX_URL_BASE = var9;
    var9 = 'https://apps.apple.com/us/app/xbox/id736179781';
    var2.XBOX_IOS_APP_LINK = var9;
    var9 = 'https://play.google.com/store/apps/details?id=com.microsoft.xboxone.smartglass';
    var2.XBOX_ANDROID_APP_LINK = var9;
    var9 = 'https://www.xbox.com/en-US/apps/xbox-app-for-mobile';
    var2.XBOX_APP_WEB_LINK = var9;
    var9 = 'https://login.live.com';
    var2.XBOX_LINK_DEST_ORIGIN = var9;
    var2.XBOX_CLIENT_SCOPES = var8;
    var2.PLAYSTATION_CLIENT_SCOPES = var7;
    var7 = 'https://my.account.sony.com';
    var2.PLAYSTATION_LINK_DEST_ORIGIN = var7;
    var7 = function(arg0) { // Environment: var7
        _fun47535: for (var _fun47535_ip = 0;;) switch (_fun47535_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.guildId;
                var3 = var1.channelName;
                var0 = var1.guildName;
                var7 = var1.channelId;
                var6 = var1.muted;
                var5 = var1.deafened;
                var1 = var1.nonce;
                var2 = {};
                var2.channelid = var7;
                var2.guildid = var4;
                var2.channelname = var3;
                var2.guildname = var0;
                var0 = global;
                var3 = var0.String;
                var4 = undefined;
                var3 = var3.bind(var4)(var6);
                var2.muted = var3;
                var3 = var0.String;
                var3 = var3.bind(var4)(var5);
                var2.deafened = var3;
                var3 = null;
                if (!(var3 != var1)) {
                    _fun47535_ip = 121;
                    continue _fun47535
                }
            case 115:
                var2.nonce = var1;
            case 121:
                var0 = var0.URLSearchParams;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var9 = var1;
                var8 = var2;
                var0 = new var9[var0](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.XBOX_HANDOFF_SEARCH_PARAMS = var7;
    var2.GameConsoleTypes = var6;
    var2.GAME_CONSOLE_SESSIONS = var5;
    var2.CONSOLE_VOICE_PLATFORMS = var4;
    var2.GameConsoleCommandResultErrorCodes = var3;
    var2.USER_ACTION_REQUIRED_ERROR_CODES = var1;
    var1 = 'console error alert';
    var2.GAME_CONSOLE_ALERT_MODAL_LOCATION = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3298, 2]);