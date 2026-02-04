// modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 5;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55673: for (var _fun55673_ip = 0;;) switch (_fun55673_ip) {
            case 0:
                var3 = arg0;
                var11 = var3.message;
                var15 = var3.roleStyle;
                var12 = var11.author;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 0;
                var0 = var6[var0];
                var2 = undefined;
                var0 = var4.bind(var2)(var0);
                var9 = var0.bind(var2)(var11);
                var5 = _closure1_slot0;
                var4 = 1;
                var0 = var6[var4];
                var7 = var5.bind(var2)(var0);
                var0 = var7.getMessageAuthorWithProcessedColor;
                var0 = var0.bind(var7)(var11);
                var10 = var0.nick;
                var14 = var0.colorString;
                var16 = var0.colorStrings;
                var7 = var0.guildId;
                var0 = 2;
                var0 = var6[var0];
                var6 = var5.bind(var2)(var0);
                var5 = var6.isNativeMessageEligibleForEnhancedRoleColors;
                var0 = var12.id;
                var17 = var5.bind(var6)(var7, var0, var15);
                var0 = {};
                if (!(!(var9 > var4))) {
                    _fun55673_ip = 312;
                    continue _fun55673
                }
            case 138:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 3;
                var6 = var8[var4];
                var6 = var5.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.formatToParts;
                var4 = var8[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.t;
                var5 = var4.ihxM9x;
                var4 = {};
                var4.username = var10;
                var8 = {};
                var13 = 'bindUserMenu';
                var8.action = var13;
                var13 = var12.id;
                var8.userId = var13;
                var8.colorString = var14;
                var18 = null;
                var19 = 'username';
                var13 = null;
                if (!(var19 === var15)) {
                    _fun55673_ip = 236;
                    continue _fun55673
                }
            case 233:
                var13 = var14;
            case 236:
                var8.linkColor = var13;
                var8.roleColor = var14;
                var13 = null;
                if (!var17) {
                    _fun55673_ip = 254;
                    continue _fun55673
                }
            case 251:
                var13 = var16;
            case 254:
                var8.roleColors = var13;
                var13 = 'dot';
                var13 = var13 === var15;
                if (!var13) {
                    _fun55673_ip = 274;
                    continue _fun55673
                }
            case 270:
                var13 = var18 != var14;
            case 274:
                var8.shouldShowRoleDot = var13;
                var13 = var11.channel_id;
                var8.messageChannelId = var13;
                var13 = true;
                var8.medium = var13;
                var4.usernameOnClick = var8;
                var4 = var6.bind(var7)(var5, var4);
                _fun55673_ip = 488;
                continue _fun55673;
            case 312:
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 3;
                var7 = var13[var5];
                var7 = var6.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.formatToParts;
                var5 = var13[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.t;
                var6 = var5.rbj006;
                var5 = {};
                var5.username = var10;
                var10 = {};
                var13 = 'bindUserMenu';
                var10.action = var13;
                var12 = var12.id;
                var10.userId = var12;
                var10.colorString = var14;
                var13 = null;
                var18 = 'username';
                var12 = null;
                if (!(var18 === var15)) {
                    _fun55673_ip = 412;
                    continue _fun55673
                }
            case 409:
                var12 = var14;
            case 412:
                var10.linkColor = var12;
                var10.roleColor = var14;
                var12 = null;
                if (!var17) {
                    _fun55673_ip = 430;
                    continue _fun55673
                }
            case 427:
                var12 = var16;
            case 430:
                var10.roleColors = var12;
                var12 = 'dot';
                var12 = var12 === var15;
                if (!var12) {
                    _fun55673_ip = 450;
                    continue _fun55673
                }
            case 446:
                var12 = var13 != var14;
            case 450:
                var10.shouldShowRoleDot = var12;
                var11 = var11.channel_id;
                var10.messageChannelId = var11;
                var11 = true;
                var10.medium = var11;
                var5.usernameOnClick = var10;
                var5.numSubscriptions = var9;
                var4 = var7.bind(var8)(var6, var5);
            case 488:
                var0.content = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var21 = var1.bind(var2)(var3);
                var22 = var0;
                var1 = copyDataProperties(var22, var21);
                return var0;
        }
    };
    var2.createUserPremiumGuildSubscriptionSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6705, 6676, 6677, 1234, 6678, 2]);