// modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun55674: for (var _fun55674_ip = 0;;) switch (_fun55674_ip) {
            case 0:
                var2 = arg0;
                var12 = arg1;
                var13 = var2.message;
                var17 = var2.roleStyle;
                var14 = var13.author;
                var4 = _closure1_slot3;
                var3 = var4.getChannel;
                var1 = var13.getChannelId;
                var1 = var1.bind(var13)();
                var5 = var3.bind(var4)(var1);
                var16 = null;
                if (!(var16 != var5)) {
                    _fun55674_ip = 714;
                    continue _fun55674
                }
            case 59:
                var4 = _closure1_slot4;
                var3 = var4.getGuild;
                var1 = var5.getGuildId;
                var1 = var1.bind(var5)();
                var10 = var3.bind(var4)(var1);
                if (!(var16 != var10)) {
                    _fun55674_ip = 679;
                    continue _fun55674
                }
            case 90:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var9 = var1.bind(var4)(var13);
                var3 = _closure1_slot0;
                var1 = 4;
                var1 = var5[var1];
                var6 = var3.bind(var4)(var1);
                var1 = var6.getMessageAuthorWithProcessedColor;
                var1 = var1.bind(var6)(var13);
                var11 = var1.nick;
                var15 = var1.colorString;
                var18 = var1.colorStrings;
                var6 = var1.guildId;
                var1 = 5;
                var1 = var5[var1];
                var5 = var3.bind(var4)(var1);
                var3 = var5.isNativeMessageEligibleForEnhancedRoleColors;
                var1 = var14.id;
                var19 = var3.bind(var5)(var6, var1, var17);
                var1 = {};
                var3 = 1;
                if (!(!(var9 > var3))) {
                    _fun55674_ip = 421;
                    continue _fun55674
                }
            case 209:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 6;
                var6 = var8[var3];
                var6 = var5.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.formatToParts;
                var3 = var8[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.t;
                var5 = var3.oAYAP7;
                var3 = {};
                var3.username = var11;
                var8 = {};
                var20 = 'bindUserMenu';
                var8.action = var20;
                var20 = var14.id;
                var8.userId = var20;
                var8.colorString = var15;
                var21 = 'username';
                var20 = null;
                if (!(var21 === var17)) {
                    _fun55674_ip = 307;
                    continue _fun55674
                }
            case 304:
                var20 = var15;
            case 307:
                var8.linkColor = var20;
                var8.roleColor = var15;
                var8.roleColors = var18;
                var20 = 'dot';
                var20 = var20 === var17;
                if (!var20) {
                    _fun55674_ip = 337;
                    continue _fun55674
                }
            case 333:
                var20 = var16 != var15;
            case 337:
                var8.shouldShowRoleDot = var20;
                var20 = var13.channel_id;
                var8.messageChannelId = var20;
                var20 = true;
                var8.medium = var20;
                var3.usernameOnClick = var8;
                var8 = var10.name;
                var3.guildName = var8;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var8 = 7;
                var8 = var21[var8];
                var20 = var20.bind(var4)(var8);
                var8 = var20.getTierName;
                var8 = var8.bind(var20)(var12);
                var3.newTierName = var8;
                var3 = var6.bind(var7)(var5, var3);
                _fun55674_ip = 641;
                continue _fun55674;
            case 421:
                var6 = _closure1_slot0;
                var20 = _closure1_slot2;
                var5 = 6;
                var7 = var20[var5];
                var7 = var6.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.formatToParts;
                var5 = var20[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.t;
                var6 = var5.GjNvr7;
                var5 = {};
                var5.username = var11;
                var11 = {};
                var20 = 'bindUserMenu';
                var11.action = var20;
                var14 = var14.id;
                var11.userId = var14;
                var11.colorString = var15;
                var20 = 'username';
                var14 = null;
                if (!(var20 === var17)) {
                    _fun55674_ip = 519;
                    continue _fun55674
                }
            case 516:
                var14 = var15;
            case 519:
                var11.linkColor = var14;
                var11.roleColor = var15;
                var14 = null;
                if (!var19) {
                    _fun55674_ip = 537;
                    continue _fun55674
                }
            case 534:
                var14 = var18;
            case 537:
                var11.roleColors = var14;
                var14 = 'dot';
                var14 = var14 === var17;
                if (!var14) {
                    _fun55674_ip = 557;
                    continue _fun55674
                }
            case 553:
                var14 = var16 != var15;
            case 557:
                var11.shouldShowRoleDot = var14;
                var13 = var13.channel_id;
                var11.messageChannelId = var13;
                var13 = true;
                var11.medium = var13;
                var5.usernameOnClick = var11;
                var10 = var10.name;
                var5.guildName = var10;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 7;
                var10 = var13[var10];
                var11 = var11.bind(var4)(var10);
                var10 = var11.getTierName;
                var10 = var10.bind(var11)(var12);
                var5.newTierName = var10;
                var5.numSubscriptions = var9;
                var3 = var7.bind(var8)(var6, var5);
            case 641:
                var1.content = var3;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 8;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var23 = var3.bind(var4)(var2);
                var24 = var1;
                var3 = copyDataProperties(var24, var23);
                return var1;
            case 679:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createUserPremiumGuildSubscriptionSystemMessage;
                var1 = var1.bind(var3)(var2);
                return var1;
            case 714:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.createUserPremiumGuildSubscriptionSystemMessage;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.createUserPremiumGuildSubscriptionTierAchievedSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 6704, 6705, 6676, 6677, 1234, 6707, 6678, 2]);