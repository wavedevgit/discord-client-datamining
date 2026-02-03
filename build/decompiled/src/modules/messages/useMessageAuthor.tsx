// modules/messages/useMessageAuthor.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function arg0() {
        _fun36683: for (var _fun36683_ip = 0;;) switch (_fun36683_ip) {
            case 0:
                var11 = arg0;
                var _closure2_slot0 = var11;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 7;
                var0 = var0[var4];
                var3 = undefined;
                var7 = var5.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot3;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var2
                    _fun36684: for (var _fun36684_ip = 0;;) switch (_fun36684_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun36684_ip = 42;
                                continue _fun36684
                            }
                        case 16:
                            var3 = _closure1_slot3;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot0;
                            var1 = var1.channel_id;
                            var0 = var2.bind(var3)(var1);
                        case 42:
                            return var0;
                    }
                };
                var10 = var6.bind(var7)(var5, var0);
                var _closure2_slot1 = var10;
                var0 = null;
                var5 = var0 == var11;
                var13 = undefined;
                if (var5) {
                    _fun36683_ip = 97;
                    continue _fun36683
                }
            case 77:
                var5 = var11.author;
                var6 = var0 == var5;
                var13 = undefined;
                if (var6) {
                    _fun36683_ip = 97;
                    continue _fun36683
                }
            case 92:
                var13 = var5.id;
            case 97:
                var _closure2_slot2 = var13;
                var5 = var0 == var10;
                var12 = undefined;
                if (var5) {
                    _fun36683_ip = 115;
                    continue _fun36683
                }
            case 110:
                var12 = var10.guild_id;
            case 115:
                var _closure2_slot3 = var12;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = var8[var4];
                var14 = var7.bind(var3)(var5);
                var9 = var14.useStateFromStores;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var2
                    _fun36685: for (var _fun36685_ip = 0;;) switch (_fun36685_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = null;
                            var2 = var3 == var0;
                            var0 = null;
                            if (var2) {
                                _fun36685_ip = 58;
                                continue _fun36685
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var2 = var3 == var2;
                            var0 = null;
                            if (var2) {
                                _fun36685_ip = 58;
                                continue _fun36685
                            }
                        case 31:
                            var4 = _closure1_slot4;
                            var3 = var4.getMember;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot2;
                            var0 = var3.bind(var4)(var2, var1);
                        case 58:
                            return var0;
                    }
                };
                var6 = var9.bind(var14)(var6, var5);
                var5 = var8[var4];
                var15 = var7.bind(var3)(var5);
                var14 = var15.useStateFromStores;
                var5 = _closure1_slot8;
                var9 = new Array(1);
                var9[0] = var5;
                var7 = new Array(1);
                var7[0] = var13;
                var5 = function() { // Environment: var2
                    var2 = _closure1_slot8;
                    var1 = var2.getUser;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var14.bind(var15)(var9, var5, var7);
                var7 = _closure1_slot1;
                var5 = 8;
                var5 = var8[var5];
                var8 = var7.bind(var3)(var5);
                var7 = var8.useName;
                var5 = var14;
                if (!(var0 != var11)) {
                    _fun36683_ip = 275;
                    continue _fun36683
                }
            case 239:
                var9 = var11.author;
                var9 = var9.bot;
                var5 = var14;
                if (!var9) {
                    _fun36683_ip = 275;
                    continue _fun36683
                }
            case 257:
                var14 = var0 == var11;
                var9 = undefined;
                if (var14) {
                    _fun36683_ip = 272;
                    continue _fun36683
                }
            case 266:
                var9 = var11.author;
            case 272:
                var5 = var9;
            case 275:
                var7 = var7.bind(var8)(var5);
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var15 = var8.bind(var3)(var5);
                var14 = var15.useStateFromStores;
                var5 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var5;
                var8 = new Array(1);
                var8[0] = var12;
                var5 = function() { // Environment: var2
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var14.bind(var15)(var9, var5, var8);
                var5 = var0 == var6;
                var8 = undefined;
                if (var5) {
                    _fun36683_ip = 349;
                    continue _fun36683
                }
            case 343:
                var8 = var6.colorRoleId;
            case 349:
                var _closure2_slot4 = var8;
                var5 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = var14[var4];
                var18 = var5.bind(var3)(var15);
                var17 = var18.useStateFromStores;
                var15 = _closure1_slot5;
                var16 = new Array(1);
                var16[0] = var15;
                var15 = new Array(2);
                var15[0] = var12;
                var15[1] = var8;
                var8 = function() { // Environment: var2
                    _fun36688: for (var _fun36688_ip = 0;;) switch (_fun36688_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var4 = null;
                            var2 = var4 != var0;
                            var0 = undefined;
                            if (!var2) {
                                _fun36688_ip = 58;
                                continue _fun36688
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var2 = var4 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun36688_ip = 58;
                                continue _fun36688
                            }
                        case 31:
                            var4 = _closure1_slot5;
                            var3 = var4.getRole;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot4;
                            var0 = var3.bind(var4)(var2, var1);
                        case 58:
                            return var0;
                    }
                };
                var8 = var17.bind(var18)(var16, var8, var15);
                var4 = var14[var4];
                var15 = var5.bind(var3)(var4);
                var5 = var15.useStateFromStores;
                var16 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var16;
                var2 = function() { // Environment: var2
                    _fun36689: for (var _fun36689_ip = 0;;) switch (_fun36689_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun36689_ip = 72;
                                continue _fun36689
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun36689_ip = 72;
                                continue _fun36689
                            }
                        case 31:
                            var4 = _closure2_slot1;
                            var2 = var4.isPrivate;
                            var2 = var2.bind(var4)();
                            var0 = null;
                            if (!var2) {
                                _fun36689_ip = 72;
                                continue _fun36689
                            }
                        case 50:
                            var3 = _closure1_slot7;
                            var2 = var3.getNickname;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 72:
                            return var0;
                    }
                };
                var5 = var5.bind(var15)(var4, var2);
                var4 = _closure1_slot1;
                var2 = 9;
                var2 = var14[var2];
                var4 = var4.bind(var3)(var2);
                var2 = {};
                var2.userId = var13;
                var2.guildId = var12;
                var4 = var4.bind(var3)(var2);
                var2 = var0 == var11;
                var0 = null;
                if (var2) {
                    _fun36683_ip = 542;
                    continue _fun36683
                }
            case 488:
                var2 = _closure1_slot12;
                var1 = {};
                var11 = var11.author;
                var1.user = var11;
                var1.channel = var10;
                var1.guild = var9;
                var1.memberColorRole = var8;
                var1.userName = var7;
                var1.member = var6;
                var1.friendNickname = var5;
                var1.displayNameStyles = var4;
                var0 = var2.bind(var3)(var1);
            case 542:
                return var0;
        }
    };
    var _closure1_slot9 = var5;
    var3 = function arg0, arg1() {
        _fun36690: for (var _fun36690_ip = 0;;) switch (_fun36690_ip) {
            case 0:
                var4 = arg0;
                var10 = arg1;
                var _closure2_slot0 = var10;
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                var0 = undefined;
                if (var5) {
                    _fun36690_ip = 30;
                    continue _fun36690
                }
            case 25:
                var0 = var4.id;
            case 30:
                var _closure2_slot1 = var0;
                var0 = var3 == var10;
                var16 = undefined;
                if (var0) {
                    _fun36690_ip = 48;
                    continue _fun36690
                }
            case 43:
                var16 = var10.guild_id;
            case 48:
                var _closure2_slot2 = var16;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 7;
                var7 = var6[var5];
                var12 = var8.bind(var2)(var7);
                var11 = var12.useStateFromStores;
                var7 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var1
                    _fun36691: for (var _fun36691_ip = 0;;) switch (_fun36691_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = null;
                            var2 = var3 == var0;
                            var0 = null;
                            if (var2) {
                                _fun36691_ip = 58;
                                continue _fun36691
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var2 = var3 == var2;
                            var0 = null;
                            if (var2) {
                                _fun36691_ip = 58;
                                continue _fun36691
                            }
                        case 31:
                            var4 = _closure1_slot4;
                            var3 = var4.getMember;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var1);
                        case 58:
                            return var0;
                    }
                };
                var7 = var11.bind(var12)(var9, var7);
                var6 = var6[var5];
                var12 = var8.bind(var2)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var6;
                var8 = new Array(1);
                var8[0] = var16;
                var6 = function() { // Environment: var1
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var11.bind(var12)(var9, var6, var8);
                var6 = var3 == var7;
                var8 = undefined;
                if (var6) {
                    _fun36690_ip = 164;
                    continue _fun36690
                }
            case 158:
                var8 = var7.colorRoleId;
            case 164:
                var _closure2_slot3 = var8;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = var11[var5];
                var15 = var6.bind(var2)(var12);
                var14 = var15.useStateFromStores;
                var12 = _closure1_slot5;
                var13 = new Array(1);
                var13[0] = var12;
                var12 = new Array(2);
                var12[0] = var16;
                var12[1] = var8;
                var8 = function() { // Environment: var1
                    _fun36693: for (var _fun36693_ip = 0;;) switch (_fun36693_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var4 = null;
                            var2 = var4 != var0;
                            var0 = undefined;
                            if (!var2) {
                                _fun36693_ip = 58;
                                continue _fun36693
                            }
                        case 18:
                            var2 = _closure2_slot3;
                            var2 = var4 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun36693_ip = 58;
                                continue _fun36693
                            }
                        case 31:
                            var4 = _closure1_slot5;
                            var3 = var4.getRole;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var0 = var3.bind(var4)(var2, var1);
                        case 58:
                            return var0;
                    }
                };
                var8 = var14.bind(var15)(var13, var8, var12);
                var5 = var11[var5];
                var12 = var6.bind(var2)(var5);
                var6 = var12.useStateFromStores;
                var13 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var13;
                var1 = function() { // Environment: var1
                    _fun36694: for (var _fun36694_ip = 0;;) switch (_fun36694_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun36694_ip = 72;
                                continue _fun36694
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun36694_ip = 72;
                                continue _fun36694
                            }
                        case 31:
                            var4 = _closure2_slot0;
                            var2 = var4.isPrivate;
                            var2 = var2.bind(var4)();
                            var0 = null;
                            if (!var2) {
                                _fun36694_ip = 72;
                                continue _fun36694
                            }
                        case 50:
                            var3 = _closure1_slot7;
                            var2 = var3.getNickname;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 72:
                            return var0;
                    }
                };
                var5 = var6.bind(var12)(var5, var1);
                var6 = _closure1_slot1;
                var1 = 8;
                var1 = var11[var1];
                var6 = var6.bind(var2)(var1);
                var1 = var6.useName;
                var6 = var1.bind(var6)(var4);
                var1 = _closure1_slot12;
                var0 = {};
                var0.user = var4;
                var0.channel = var10;
                var0.guild = var9;
                var0.memberColorRole = var8;
                var0.member = var7;
                var0.userName = var6;
                var0.friendNickname = var5;
                var5 = var3 == var4;
                var3 = undefined;
                if (var5) {
                    _fun36690_ip = 343;
                    continue _fun36690
                }
            case 337:
                var3 = var4.displayNameStyles;
            case 343:
                var0.displayNameStyles = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var1 = function arg0, arg1() {
        _fun36695: for (var _fun36695_ip = 0;;) switch (_fun36695_ip) {
            case 0:
                var4 = arg0;
                var9 = arg1;
                var3 = null;
                var0 = var3 == var4;
                var2 = undefined;
                var11 = undefined;
                if (var0) {
                    _fun36695_ip = 24;
                    continue _fun36695
                }
            case 19:
                var11 = var4.id;
            case 24:
                var0 = var3 == var9;
                var5 = undefined;
                if (var0) {
                    _fun36695_ip = 38;
                    continue _fun36695
                }
            case 33:
                var5 = var9.guild_id;
            case 38:
                var6 = _closure1_slot6;
                var1 = var6.getGuild;
                var8 = var1.bind(var6)(var5);
                var1 = var3 == var5;
                var12 = var5;
                var6 = null;
                if (var1) {
                    _fun36695_ip = 92;
                    continue _fun36695
                }
            case 67:
                var1 = var3 == var11;
                var6 = null;
                if (var1) {
                    _fun36695_ip = 92;
                    continue _fun36695
                }
            case 76:
                var5 = _closure1_slot4;
                var1 = var5.getMember;
                var6 = var1.bind(var5)(var12, var11);
            case 92:
                var1 = var3 != var12;
                var7 = undefined;
                if (!var1) {
                    _fun36695_ip = 147;
                    continue _fun36695
                }
            case 101:
                var5 = var3 == var6;
                var1 = undefined;
                if (var5) {
                    _fun36695_ip = 116;
                    continue _fun36695
                }
            case 110:
                var1 = var6.colorRoleId;
            case 116:
                var1 = var3 != var1;
                var7 = undefined;
                if (!var1) {
                    _fun36695_ip = 147;
                    continue _fun36695
                }
            case 125:
                var10 = _closure1_slot5;
                var5 = var10.getRole;
                var1 = var6.colorRoleId;
                var7 = var5.bind(var10)(var12, var1);
            case 147:
                var1 = var3 != var11;
                var5 = null;
                if (!var1) {
                    _fun36695_ip = 195;
                    continue _fun36695
                }
            case 156:
                var1 = var3 != var9;
                var5 = null;
                if (!var1) {
                    _fun36695_ip = 195;
                    continue _fun36695
                }
            case 165:
                var1 = var9.isPrivate;
                var1 = var1.bind(var9)();
                var5 = null;
                if (!var1) {
                    _fun36695_ip = 195;
                    continue _fun36695
                }
            case 180:
                var10 = _closure1_slot7;
                var1 = var10.getNickname;
                var5 = var1.bind(var10)(var11);
            case 195:
                var1 = _closure1_slot12;
                var0 = {};
                var0.user = var4;
                var0.channel = var9;
                var0.guild = var8;
                var0.memberColorRole = var7;
                var0.member = var6;
                var0.friendNickname = var5;
                var5 = var3 == var4;
                var3 = undefined;
                if (var5) {
                    _fun36695_ip = 243;
                    continue _fun36695
                }
            case 237:
                var3 = var4.displayNameStyles;
            case 243:
                var0.displayNameStyles = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var0 = function arg0() {
        _fun36696: for (var _fun36696_ip = 0;;) switch (_fun36696_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.user;
                var0 = var2.channel;
                var4 = var2.guild;
                var10 = var2.memberColorRole;
                var8 = var2.member;
                var7 = var2.userName;
                var5 = var2.friendNickname;
                var2 = var2.displayNameStyles;
                var6 = null;
                var9 = var6 == var1;
                var3 = '???';
                if (var9) {
                    _fun36696_ip = 106;
                    continue _fun36696
                }
            case 63:
                if (!(var6 == var7)) {
                    _fun36696_ip = 103;
                    continue _fun36696
                }
            case 67:
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 8;
                var11 = var11[var9];
                var9 = undefined;
                var11 = var12.bind(var9)(var11);
                var9 = var11.getName;
                var7 = var9.bind(var11)(var1);
            case 103:
                var3 = var7;
            case 106:
                var11 = var6 == var1;
                var9 = undefined;
                if (var11) {
                    _fun36696_ip = 120;
                    continue _fun36696
                }
            case 115:
                var9 = var1.id;
            case 120:
                if (!(var6 != var9)) {
                    _fun36696_ip = 399;
                    continue _fun36696
                }
            case 127:
                if (!(var6 != var0)) {
                    _fun36696_ip = 399;
                    continue _fun36696
                }
            case 134:
                var9 = var6 == var4;
                var0 = undefined;
                if (var9) {
                    _fun36696_ip = 148;
                    continue _fun36696
                }
            case 143:
                var0 = var4.id;
            case 148:
                if (!(var6 != var0)) {
                    _fun36696_ip = 359;
                    continue _fun36696
                }
            case 155:
                if (!(var6 != var8)) {
                    _fun36696_ip = 329;
                    continue _fun36696
                }
            case 162:
                var0 = {};
                var11 = var8.nick;
                var9 = var3;
                if (!(var6 != var11)) {
                    _fun36696_ip = 180;
                    continue _fun36696
                }
            case 177:
                var9 = var11;
            case 180:
                var0.nick = var9;
                var9 = var8.colorString;
                var0.colorString = var9;
                var9 = var8.colorStrings;
                var0.colorStrings = var9;
                var11 = var6 == var10;
                var9 = undefined;
                if (var11) {
                    _fun36696_ip = 221;
                    continue _fun36696
                }
            case 216:
                var9 = var10.name;
            case 221:
                var0.colorRoleName = var9;
                var11 = var6 == var10;
                var9 = undefined;
                if (var11) {
                    _fun36696_ip = 242;
                    continue _fun36696
                }
            case 237:
                var9 = var10.id;
            case 242:
                var0.colorRoleId = var9;
                var9 = var8.iconRoleId;
                var0.iconRoleId = var9;
                var9 = var8.avatar;
                var0.guildMemberAvatar = var9;
                var8 = var8.avatarDecoration;
                var0.guildMemberAvatarDecoration = var8;
                var8 = var1.primaryGuild;
                var9 = var6 != var8;
                var7 = undefined;
                if (!var9) {
                    _fun36696_ip = 298;
                    continue _fun36696
                }
            case 295:
                var7 = var8;
            case 298:
                var0.primaryGuild = var7;
                var4 = var4.id;
                var0.guildId = var4;
                var1 = var1.id;
                var0.authorId = var1;
                var0.displayNameStyles = var2;
                _fun36696_ip = 357;
                continue _fun36696;
            case 329:
                var1 = {
                    'nick': null,
                    'colorString': null,
                    'colorStrings': null
                };
                var1.nick = var3;
                var1.displayNameStyles = var2;
                var0 = var1;
            case 357:
                _fun36696_ip = 397;
                continue _fun36696;
            case 359:
                var1 = {
                    'nick': null,
                    'colorString': null,
                    'colorStrings': null
                };
                var4 = var3;
                if (!(var6 != var5)) {
                    _fun36696_ip = 383;
                    continue _fun36696
                }
            case 380:
                var4 = var5;
            case 383:
                var1.nick = var4;
                var1.displayNameStyles = var2;
                var0 = var1;
            case 397:
                _fun36696_ip = 427;
                continue _fun36696;
            case 399:
                var1 = {
                    'nick': null,
                    'colorString': null,
                    'colorStrings': null
                };
                var1.nick = var3;
                var1.displayNameStyles = var2;
                var0 = var1;
            case 427:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/messages/useMessageAuthor.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function arg0, arg1() {
        _fun36697: for (var _fun36697_ip = 0;;) switch (_fun36697_ip) {
            case 0:
                var1 = arg1;
                var3 = _closure1_slot9;
                var6 = undefined;
                var0 = arg0;
                var0 = var3.bind(var6)(var0);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var5 = var3.bind(var6)(var2);
                var2 = null;
                var4 = var2 != var0;
                var3 = 'Result cannot be null because the message is not null';
                var3 = var5.bind(var6)(var4, var3);
                if (!(var2 != var1)) {
                    _fun36697_ip = 65;
                    continue _fun36697
                }
            case 62:
                var0 = var1;
            case 65:
                return var0;
        }
    };
    var2.default = var6;
    var2.useNullableMessageAuthor = var5;
    var5 = function arg0() {
        var0 = arg0;
        var4 = _closure1_slot3;
        var3 = var4.getChannel;
        var2 = var0.channel_id;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot11;
        var1 = var0.author;
        var0 = undefined;
        var0 = var2.bind(var0)(var1, var3);
        return var0;
    };
    var2.getMessageAuthor = var5;
    var4 = function arg0, arg1() {
        var3 = _closure1_slot10;
        var4 = undefined;
        var2 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var2, var0);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var1 = var3[var1];
        var3 = var2.bind(var4)(var1);
        var1 = null;
        var2 = var1 != var0;
        var1 = 'Result cannot be null because user and channel are not null';
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.useUserNickAndColor = var4;
    var2.useNullableUserAuthor = var3;
    var2.getUserAuthor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1681, 1674, 1410, 3100, 1621, 44, 566, 3236, 3984, 2]);