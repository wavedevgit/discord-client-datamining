// modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.InviteStates;
    var _closure1_slot4 = var6;
    var3 = var3.AbortCodes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTypes;
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun92359: for (var _fun92359_ip = 0;;) switch (_fun92359_ip) {
            case 0:
                var7 = arg0;
                var9 = arg1;
                var3 = arg2;
                var2 = _closure1_slot2;
                var0 = var2.getInvite;
                var10 = var0.bind(var2)(var9);
                var0 = null;
                if (!(var0 != var10)) {
                    _fun92359_ip = 800;
                    continue _fun92359
                }
            case 36:
                var4 = _closure1_slot3;
                var2 = var4.getCurrentUser;
                var2 = var2.bind(var4)();
                var5 = var0 == var2;
                var4 = undefined;
                var8 = undefined;
                if (var5) {
                    _fun92359_ip = 65;
                    continue _fun92359
                }
            case 60:
                var8 = var2.id;
            case 65:
                var2 = var7.author;
                var2 = var2.id;
                var6 = var8 === var2;
                var5 = var10.state;
                var2 = _closure1_slot4;
                var2 = var2.RESOLVING;
                if (!(var5 !== var2)) {
                    _fun92359_ip = 767;
                    continue _fun92359
                }
            case 102:
                var5 = var10.state;
                var2 = _closure1_slot4;
                var2 = var2.EXPIRED;
                if (!(var5 !== var2)) {
                    _fun92359_ip = 732;
                    continue _fun92359
                }
            case 124:
                var5 = var10.state;
                var2 = _closure1_slot4;
                var2 = var2.BANNED;
                if (!(var5 !== var2)) {
                    _fun92359_ip = 732;
                    continue _fun92359
                }
            case 146:
                var5 = var10.state;
                var2 = _closure1_slot4;
                var2 = var2.ERROR;
                if (!(var5 !== var2)) {
                    _fun92359_ip = 590;
                    continue _fun92359
                }
            case 168:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var12 = 5;
                var2 = var2[var12];
                var5 = var5.bind(var4)(var2);
                var2 = var5.getInviteType;
                var5 = var2.bind(var5)(var10);
                var2 = _closure1_slot6;
                var2 = var2.GROUP_DM;
                if (!(var2 !== var5)) {
                    _fun92359_ip = 555;
                    continue _fun92359
                }
            case 216:
                var2 = _closure1_slot6;
                var2 = var2.FRIEND;
                if (!(var2 !== var5)) {
                    _fun92359_ip = 508;
                    continue _fun92359
                }
            case 233:
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = var2[var12];
                var13 = var11.bind(var4)(var5);
                var5 = var13.getGuildInviteExtendedType;
                var5 = var5.bind(var13)(var10);
                var2 = var2[var12];
                var2 = var11.bind(var4)(var2);
                var2 = var2.GuildInviteExtendedType;
                var2 = var2.EVENT;
                if (!(var2 !== var5)) {
                    _fun92359_ip = 474;
                    continue _fun92359
                }
            case 289:
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var11.bind(var4)(var2);
                var2 = var2.GuildInviteExtendedType;
                var2 = var2.APPLICATION;
                if (!(var2 !== var5)) {
                    _fun92359_ip = 424;
                    continue _fun92359
                }
            case 322:
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var11.bind(var4)(var2);
                var2 = var2.GuildInviteExtendedType;
                var2 = var2.PROFILE;
                if (!(var2 !== var5)) {
                    _fun92359_ip = 390;
                    continue _fun92359
                }
            case 355:
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 4;
                var2 = var11[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.createGuildInvite;
                var2 = var2.bind(var5)(var10, var6, var3);
                return var2;
            case 390:
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 10;
                var2 = var11[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.createGuildProfileInvite;
                var2 = var2.bind(var5)(var10, var3);
                return var2;
            case 424:
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var11 = var5.bind(var4)(var2);
                var5 = var11.createEmbeddedActivityInviteEmbed;
                var2 = {};
                var12 = var10.code;
                var2.inviteCode = var12;
                var2.theme = var3;
                var2 = var5.bind(var11)(var2);
                return var2;
            case 474:
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 8;
                var2 = var11[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.createGuildScheduledEventInviteEmbed;
                var2 = var2.bind(var5)(var10, var3);
                return var2;
            case 508:
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 7;
                var2 = var11[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.createFriendInvite;
                var18 = var5;
                var17 = var10;
                var16 = var6;
                var15 = var8;
                var14 = var3;
                var2 = var18[var2](var17, var16, var15, var14, var13);
                return var2;
            case 555:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var2 = var8[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.createGroupDMInvite;
                var2 = var2.bind(var5)(var10, var6, var3);
                return var2;
            case 590:
                var5 = _closure1_slot2;
                var2 = var5.getInviteError;
                var2 = var2.bind(var5)(var9);
                if (!(var0 != var2)) {
                    _fun92359_ip = 697;
                    continue _fun92359
                }
            case 609:
                var5 = var2.code;
                var2 = _closure1_slot5;
                var2 = var2.INVITES_DISABLED;
                if (!(var5 !== var2)) {
                    _fun92359_ip = 663;
                    continue _fun92359
                }
            case 628:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 4;
                var2 = var8[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.createErroredGuildInvite;
                var2 = var2.bind(var5)(var9, var6, var3);
                _fun92359_ip = 695;
                continue _fun92359;
            case 663:
                var8 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 4;
                var5 = var11[var5];
                var8 = var8.bind(var4)(var5);
                var5 = var8.createDisabledGuildInvite;
                var2 = var5.bind(var8)(var10, var3);
            case 695:
                _fun92359_ip = 730;
                continue _fun92359;
            case 697:
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 4;
                var5 = var10[var5];
                var8 = var8.bind(var4)(var5);
                var5 = var8.createErroredGuildInvite;
                var2 = var5.bind(var8)(var9, var6, var3);
            case 730:
                return var2;
            case 732:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 4;
                var2 = var8[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.createExpiredGuildInvite;
                var2 = var2.bind(var5)(var7, var6, var3);
                return var2;
            case 767:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 4;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.createResolvingGuildInvite;
                var1 = var1.bind(var2)(var3);
                return var1;
            case 800:
                return var0;
        }
    };
    var2.createInviteEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3323, 1621, 660, 3335, 12041, 3333, 12044, 12045, 12046, 12048, 12050, 2]);