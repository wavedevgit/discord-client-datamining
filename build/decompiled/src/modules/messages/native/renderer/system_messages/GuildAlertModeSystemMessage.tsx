// modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createNativeStyleProperties;
    var3 = {};
    var8 = 2;
    var8 = var6[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.colors;
    var8 = var8.TEXT_BRAND;
    var3.automodUsernameColor = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2.resolveAlertModeColors = var3;
    var3 = function arg0() {
        _fun55772: for (var _fun55772_ip = 0;;) switch (_fun55772_ip) {
            case 0:
                var7 = arg0;
                var14 = var7.message;
                var10 = var7.roleStyle;
                var4 = var7.theme;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 3;
                var0 = var13[var0];
                var8 = undefined;
                var0 = var1.bind(var8)(var0);
                var5 = var0.bind(var8)(var4);
                var1 = var14.author;
                var6 = _closure1_slot3;
                var3 = var6.getChannel;
                var0 = var14.channel_id;
                var12 = var3.bind(var6)(var0);
                var6 = _closure1_slot0;
                var0 = 4;
                var0 = var13[var0];
                var3 = var6.bind(var8)(var0);
                var0 = var3.getMessageAuthorWithProcessedColor;
                var3 = var0.bind(var3)(var14);
                var0 = var3.nick;
                var9 = var3.colorString;
                var11 = var3.colorStrings;
                var15 = var3.guildId;
                var3 = _closure1_slot4;
                var3 = var3.bind(var8)(var4);
                var3 = var3.automodUsernameColor;
                var4 = 5;
                var4 = var13[var4];
                var13 = var6.bind(var8)(var4);
                var6 = var13.isNativeMessageEligibleForEnhancedRoleColors;
                var4 = var1.id;
                var15 = var6.bind(var13)(var15, var4, var10);
                var13 = {};
                var13.username = var0;
                var0 = {};
                var4 = 'bindUserMenu';
                var0.action = var4;
                var1 = var1.id;
                var0.userId = var1;
                var0.colorString = var9;
                var4 = null;
                var6 = 'username';
                var1 = null;
                if (!(var6 === var10)) {
                    _fun55772_ip = 217;
                    continue _fun55772
                }
            case 214:
                var1 = var9;
            case 217:
                var0.linkColor = var1;
                var0.roleColor = var9;
                var1 = null;
                if (!var15) {
                    _fun55772_ip = 235;
                    continue _fun55772
                }
            case 232:
                var1 = var11;
            case 235:
                var0.roleColors = var1;
                var1 = 'dot';
                var1 = var1 === var10;
                if (!var1) {
                    _fun55772_ip = 255;
                    continue _fun55772
                }
            case 251:
                var1 = var4 != var9;
            case 255:
                var0.shouldShowRoleDot = var1;
                var1 = var14.channel_id;
                var0.messageChannelId = var1;
                var10 = true;
                var0.medium = var10;
                var13.usernameOnClick = var0;
                var1 = var14.content;
                var0 = '';
                if (!(var0 !== var1)) {
                    _fun55772_ip = 385;
                    continue _fun55772
                }
            case 295:
                var1 = global;
                var11 = var1.Date;
                var19 = var14.content;
                var9 = var11.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var11
                    }
                });
                var20 = var9;
                var1 = new var20[var11](var19, var18);
                var15 = var1 instanceof Object ? var1 : var9;
                var11 = var15.toLocaleString;
                var9 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 6;
                var1 = var16[var1];
                var1 = var9.bind(var8)(var1);
                var1 = var1.intl;
                var9 = var1.currentLocale;
                var1 = {
                    'hour': 'numeric',
                    'minute': '2-digit'
                };
                var0 = var11.bind(var15)(var9, var1);
            case 385:
                var13.time = var0;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 7;
                var0 = var11[var0];
                var1 = var9.bind(var8)(var0);
                var0 = {};
                var0.message = var14;
                var0.channel = var12;
                var0.isSystemDM = var10;
                var0.colors = var5;
                var1 = var1.bind(var8)(var0);
                var0 = {};
                var5 = 8;
                var5 = var11[var5];
                var5 = var9.bind(var8)(var5);
                var18 = var5.bind(var8)(var7);
                var19 = var0;
                var5 = copyDataProperties(var19, var18);
                var10 = _closure1_slot0;
                var5 = 6;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var12 = var7.intl;
                var9 = var12.formatToParts;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var7 = var7.t;
                var7 = var7.ig55n6;
                var9 = var9.bind(var12)(var7, var13);
                var7 = 'content';
                var0[var7] = var9;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.hG1StD;
                var5 = var7.bind(var9)(var5);
                var0[var6] = var5;
                var5 = var4 != var3;
                var4 = null;
                if (!var5) {
                    _fun55772_ip = 585;
                    continue _fun55772
                }
            case 582:
                var4 = var3;
            case 585:
                var3 = 'usernameColor';
                var0[var3] = var4;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 9;
                var3 = var9[var2];
                var4 = var7.bind(var8)(var3);
                var3 = var4.ensureAvatarSource;
                var5 = 10;
                var5 = var9[var5];
                var6 = var7.bind(var8)(var5);
                var5 = var6.makeSource;
                var2 = var9[var2];
                var7 = var7.bind(var8)(var2);
                var2 = var7.getAutomodAvatarURL;
                var2 = var2.bind(var7)();
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                var3 = var2.uri;
                var2 = 'avatarURL';
                var0[var2] = var3;
                var19 = var0;
                var18 = var1;
                var1 = copyDataProperties(var19, var18);
                return var0;
        }
    };
    var2.createGuildAlertModeEnabledSystemMessage = var3;
    var1 = function arg0() {
        _fun55773: for (var _fun55773_ip = 0;;) switch (_fun55773_ip) {
            case 0:
                var7 = arg0;
                var12 = var7.message;
                var10 = var7.roleStyle;
                var3 = var7.theme;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 3;
                var0 = var13[var0];
                var8 = undefined;
                var0 = var1.bind(var8)(var0);
                var5 = var0.bind(var8)(var3);
                var1 = var12.author;
                var0 = _closure1_slot4;
                var0 = var0.bind(var8)(var3);
                var3 = var0.automodUsernameColor;
                var6 = _closure1_slot0;
                var0 = 4;
                var0 = var13[var0];
                var4 = var6.bind(var8)(var0);
                var0 = var4.getMessageAuthorWithProcessedColor;
                var4 = var0.bind(var4)(var12);
                var0 = var4.nick;
                var9 = var4.colorString;
                var11 = var4.colorStrings;
                var14 = var4.guildId;
                var4 = 5;
                var4 = var13[var4];
                var13 = var6.bind(var8)(var4);
                var6 = var13.isNativeMessageEligibleForEnhancedRoleColors;
                var4 = var1.id;
                var14 = var6.bind(var13)(var14, var4, var10);
                var13 = {};
                var13.username = var0;
                var0 = {};
                var4 = 'bindUserMenu';
                var0.action = var4;
                var1 = var1.id;
                var0.userId = var1;
                var0.colorString = var9;
                var4 = null;
                var6 = 'username';
                var1 = null;
                if (!(var6 === var10)) {
                    _fun55773_ip = 198;
                    continue _fun55773
                }
            case 195:
                var1 = var9;
            case 198:
                var0.linkColor = var1;
                var0.roleColor = var9;
                var1 = null;
                if (!var14) {
                    _fun55773_ip = 216;
                    continue _fun55773
                }
            case 213:
                var1 = var11;
            case 216:
                var0.roleColors = var1;
                var1 = 'dot';
                var1 = var1 === var10;
                if (!var1) {
                    _fun55773_ip = 236;
                    continue _fun55773
                }
            case 232:
                var1 = var4 != var9;
            case 236:
                var0.shouldShowRoleDot = var1;
                var1 = var12.channel_id;
                var0.messageChannelId = var1;
                var10 = true;
                var0.medium = var10;
                var13.usernameOnClick = var0;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 7;
                var0 = var11[var0];
                var1 = var9.bind(var8)(var0);
                var0 = {};
                var0.message = var12;
                var0.channel = var8;
                var0.isSystemDM = var10;
                var0.colors = var5;
                var1 = var1.bind(var8)(var0);
                var0 = {};
                var5 = 8;
                var5 = var11[var5];
                var5 = var9.bind(var8)(var5);
                var17 = var5.bind(var8)(var7);
                var18 = var0;
                var5 = copyDataProperties(var18, var17);
                var10 = _closure1_slot0;
                var5 = 6;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var12 = var7.intl;
                var9 = var12.formatToParts;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var7 = var7.t;
                var7 = var7.cyq2WA;
                var9 = var9.bind(var12)(var7, var13);
                var7 = 'content';
                var0[var7] = var9;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.hG1StD;
                var5 = var7.bind(var9)(var5);
                var0[var6] = var5;
                var5 = var4 != var3;
                var4 = null;
                if (!var5) {
                    _fun55773_ip = 458;
                    continue _fun55773
                }
            case 455:
                var4 = var3;
            case 458:
                var3 = 'usernameColor';
                var0[var3] = var4;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 9;
                var3 = var9[var2];
                var4 = var7.bind(var8)(var3);
                var3 = var4.ensureAvatarSource;
                var5 = 10;
                var5 = var9[var5];
                var6 = var7.bind(var8)(var5);
                var5 = var6.makeSource;
                var2 = var9[var2];
                var7 = var7.bind(var8)(var2);
                var2 = var7.getAutomodAvatarURL;
                var2 = var2.bind(var7)();
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                var3 = var2.uri;
                var2 = 'avatarURL';
                var0[var2] = var3;
                var18 = var0;
                var17 = var1;
                var1 = copyDataProperties(var18, var17);
                return var0;
        }
    };
    var2.createGuildAlertModeDisabledSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1297, 671, 6632, 6640, 6641, 1234, 6714, 6642, 1418, 1417, 2]);