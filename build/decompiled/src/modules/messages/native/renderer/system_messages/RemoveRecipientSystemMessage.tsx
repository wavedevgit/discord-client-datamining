// modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.THREAD_CHANNEL_TYPES;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55492: for (var _fun55492_ip = 0;;) switch (_fun55492_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.message;
                var10 = var3.roleStyle;
                var5 = var0.author;
                var2 = var0.mentions;
                var1 = 0;
                var11 = var2[var1];
                var6 = _closure1_slot4;
                var4 = var6.getChannel;
                var2 = var0.channel_id;
                var12 = var4.bind(var6)(var2);
                var9 = null;
                var4 = var9 != var12;
                if (!var4) {
                    _fun55492_ip = 82;
                    continue _fun55492
                }
            case 63:
                var7 = _closure1_slot3;
                var6 = var7.has;
                var2 = var12.type;
                var4 = var6.bind(var7)(var2);
            case 82:
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var16 = 3;
                var6 = var13[var16];
                var2 = undefined;
                var7 = var8.bind(var2)(var6);
                var6 = var7.getMessageAuthorWithProcessedColor;
                var7 = var6.bind(var7)(var0);
                var6 = var7.nick;
                var17 = var7.colorString;
                var18 = var7.colorStrings;
                var14 = var7.guildId;
                var7 = 4;
                var7 = var13[var7];
                var13 = var8.bind(var2)(var7);
                var8 = var13.isNativeMessageEligibleForEnhancedRoleColors;
                var7 = var5.id;
                var13 = var8.bind(var13)(var14, var7, var10);
                var8 = {};
                var8.username = var6;
                var7 = {};
                var15 = 'bindUserMenu';
                var7.action = var15;
                var6 = var5.id;
                var7.userId = var6;
                var7.colorString = var17;
                var6 = 'username';
                var14 = var6 === var10;
                var6 = null;
                if (!var14) {
                    _fun55492_ip = 216;
                    continue _fun55492
                }
            case 213:
                var6 = var17;
            case 216:
                var7.linkColor = var6;
                var7.roleColor = var17;
                var6 = null;
                if (!var13) {
                    _fun55492_ip = 234;
                    continue _fun55492
                }
            case 231:
                var6 = var18;
            case 234:
                var7.roleColors = var6;
                var6 = 'dot';
                var6 = var6 === var10;
                var10 = var6;
                if (!var6) {
                    _fun55492_ip = 257;
                    continue _fun55492
                }
            case 253:
                var10 = var9 != var17;
            case 257:
                var7.shouldShowRoleDot = var10;
                var10 = var0.channel_id;
                var7.messageChannelId = var10;
                var10 = true;
                var7.medium = var10;
                var8.usernameOnClick = var7;
                var5 = var5.id;
                if (!(var5 !== var11)) {
                    _fun55492_ip = 574;
                    continue _fun55492
                }
            case 296:
                var7 = _closure1_slot5;
                var5 = var7.getUser;
                var10 = var5.bind(var7)(var11);
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var16];
                var7 = var7.bind(var2)(var5);
                var5 = var7.getUserAuthorWithProcessedColor;
                var5 = var5.bind(var7)(var10, var12);
                var16 = var5.nick;
                var7 = var5.colorString;
                var12 = var5.colorStrings;
                var10 = {};
                var22 = var10;
                var21 = var8;
                var5 = copyDataProperties(var22, var21);
                var5 = 'otherUsername';
                var10[var5] = var16;
                var5 = {};
                var5.action = var15;
                var5.userId = var11;
                var5.otherColorString = var7;
                var11 = null;
                if (!var14) {
                    _fun55492_ip = 404;
                    continue _fun55492
                }
            case 401:
                var11 = var7;
            case 404:
                var5.linkColor = var11;
                var5.roleColor = var7;
                var11 = null;
                if (!var13) {
                    _fun55492_ip = 422;
                    continue _fun55492
                }
            case 419:
                var11 = var12;
            case 422:
                var5.roleColors = var11;
                if (!var6) {
                    _fun55492_ip = 434;
                    continue _fun55492
                }
            case 430:
                var6 = var9 != var7;
            case 434:
                var5.shouldShowRoleDot = var6;
                var0 = var0.channel_id;
                var5.messageChannelId = var0;
                var0 = 'otherUsernameOnClick';
                var10[var0] = var5;
                var0 = {};
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 5;
                var7 = var11[var5];
                var7 = var6.bind(var2)(var7);
                var9 = var7.intl;
                var7 = var9.formatToParts;
                var5 = var11[var5];
                var5 = var6.bind(var2)(var5);
                var6 = var5.t;
                if (var4) {
                    _fun55492_ip = 522;
                    continue _fun55492
                }
            case 508:
                var5 = var6.QtZ0RD;
                var5 = var7.bind(var9)(var5, var10);
                _fun55492_ip = 536;
                continue _fun55492;
            case 522:
                var6 = var6.KBrM5t;
                var5 = var7.bind(var9)(var6, var10);
            case 536:
                var0.content = var5;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 6;
                var5 = var7[var5];
                var5 = var6.bind(var2)(var5);
                var21 = var5.bind(var2)(var3);
                var22 = var0;
                var5 = copyDataProperties(var22, var21);
                return var0;
            case 574:
                var0 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 5;
                var6 = var10[var5];
                var6 = var9.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.formatToParts;
                var5 = var10[var5];
                var5 = var9.bind(var2)(var5);
                var5 = var5.t;
                if (var4) {
                    _fun55492_ip = 638;
                    continue _fun55492
                }
            case 624:
                var4 = var5["Qn5+Lf"];
                var4 = var6.bind(var7)(var4, var8);
                _fun55492_ip = 652;
                continue _fun55492;
            case 638:
                var5 = var5.uHmblj;
                var4 = var6.bind(var7)(var5, var8);
            case 652:
                var0.content = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var21 = var1.bind(var2)(var3);
                var22 = var0;
                var1 = copyDataProperties(var22, var21);
                return var0;
        }
    };
    var2.createRemoveRecipientSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1372, 1613, 6671, 6672, 1234, 6673, 2]);