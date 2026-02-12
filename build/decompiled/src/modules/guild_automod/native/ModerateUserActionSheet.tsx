// modules/guild_automod/native/ModerateUserActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot9 = var8;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var7 = var9.create;
    var3 = {};
    var10 = {
        'padding': 16,
        'gap': 16
    };
    var3.container = var10;
    var10 = {};
    var11 = 'flex-start';
    var10.justifyContent = var11;
    var3.memberRoles = var10;
    var3 = var7.bind(var9)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ActionSheetRow;
    var9 = var7.Icon;
    var7 = {};
    var10 = 9;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.SettingsIcon;
    var7.IconComponent = var10;
    var7 = var8.bind(var0)(var9, var7);
    var _closure1_slot12 = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ActionSheetRow;
    var9 = var7.Icon;
    var7 = {};
    var10 = 10;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.ClockWarningIcon;
    var7.IconComponent = var10;
    var7 = var8.bind(var0)(var9, var7);
    var _closure1_slot13 = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ActionSheetRow;
    var9 = var7.Icon;
    var7 = {};
    var10 = 11;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.UserMinusIcon;
    var7.IconComponent = var10;
    var7 = var8.bind(var0)(var9, var7);
    var _closure1_slot14 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActionSheetRow;
    var7 = var3.Icon;
    var3 = {};
    var9 = 12;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.HammerIcon;
    var3.IconComponent = var9;
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun79697: for (var _fun79697_ip = 0;;) switch (_fun79697_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.user;
                var _closure2_slot0 = var10;
                var13 = var0.guild;
                var _closure2_slot1 = var13;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 13;
                var0 = var0[var6];
                var7 = var1.bind(var4)(var0);
                var3 = var7.useStateFromStores;
                var0 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var13;
                var0 = function() { // Environment: var9
                    _fun79698: for (var _fun79698_ip = 0;;) switch (_fun79698_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var2 = var3.getMember;
                            var4 = _closure2_slot1;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if (var4) {
                                _fun79698_ip = 40;
                                continue _fun79698
                            }
                        case 31:
                            var4 = _closure2_slot1;
                            var1 = var4.id;
                        case 40:
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var1 = var3.bind(var7)(var2, var0, var1);
                var _closure2_slot2 = var1;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun79697_ip = 115;
                    continue _fun79697
                }
            case 109:
                var12 = new Array(0);
                _fun79697_ip = 121;
                continue _fun79697;
            case 115:
                var12 = var1.roles;
            case 121:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var6 = new Array(3);
                var6[0] = var2;
                var2 = _closure1_slot7;
                var6[1] = var2;
                var2 = _closure1_slot5;
                var6[2] = var2;
                var3 = new Array(2);
                var3[0] = var10;
                var3[1] = var13;
                var2 = function() { // Environment: var9
                    _fun79699: for (var _fun79699_ip = 0;;) switch (_fun79699_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun79699_ip = 63;
                                continue _fun79699
                            }
                        case 18:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 14;
                            var5 = var5[var4];
                            var4 = undefined;
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.canKickMember;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var1 = var6.bind(var7)(var5, var4);
                        case 63:
                            var0.canKickUser = var1;
                            var1 = _closure2_slot1;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun79699_ip = 124;
                                continue _fun79699
                            }
                        case 79:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 14;
                            var5 = var5[var4];
                            var4 = undefined;
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.canBanMember;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var1 = var6.bind(var7)(var5, var4);
                        case 124:
                            var0.canBanUser = var1;
                            var1 = _closure2_slot1;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun79699_ip = 178;
                                continue _fun79699
                            }
                        case 140:
                            var8 = _closure1_slot6;
                            var7 = var8.canManageUser;
                            var4 = _closure1_slot8;
                            var6 = var4.MANAGE_NICKNAMES;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var1 = var7.bind(var8)(var6, var5, var4);
                        case 178:
                            var0.canChangeNick = var1;
                            var1 = _closure2_slot1;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun79699_ip = 227;
                                continue _fun79699
                            }
                        case 194:
                            var7 = _closure1_slot6;
                            var6 = var7.can;
                            var4 = _closure1_slot8;
                            var5 = var4.MANAGE_ROLES;
                            var4 = _closure2_slot1;
                            var1 = var6.bind(var7)(var5, var4);
                        case 227:
                            var0.canManageRoles = var1;
                            var1 = _closure2_slot1;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun79699_ip = 327;
                                continue _fun79699
                            }
                        case 243:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 15;
                            var4 = var4[var3];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.canToggleCommunicationDisableOnUser;
                            var3 = _closure2_slot1;
                            var4 = var3.id;
                            var2 = _closure2_slot0;
                            var3 = var2.id;
                            var8 = _closure1_slot7;
                            var2 = new Array(3);
                            var2[0] = var8;
                            var8 = _closure1_slot5;
                            var2[1] = var8;
                            var7 = _closure1_slot6;
                            var2[2] = var7;
                            var1 = var5.bind(var6)(var4, var3, var2);
                        case 327:
                            var0.canModerateMembers = var1;
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var6, var2, var3);
                var6 = var3.canKickUser;
                var2 = var3.canBanUser;
                var15 = var3.canChangeNick;
                var14 = var3.canManageRoles;
                var3 = var3.canModerateMembers;
                if (!(var0 != var13)) {
                    _fun79697_ip = 1203;
                    continue _fun79697
                }
            case 235:
                if (!(var0 != var1)) {
                    _fun79697_ip = 1203;
                    continue _fun79697
                }
            case 242:
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 16;
                var7 = var11[var7];
                var17 = var8.bind(var4)(var7);
                var16 = var17.getName;
                var7 = var13.id;
                var19 = var16.bind(var17)(var7, var4, var10);
                var7 = 17;
                var7 = var11[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.hideActionSheet;
                _closure2_slot3 = var7;
                var11 = new Array(0);
                var7 = var0 != var1;
                if (!var7) {
                    _fun79697_ip = 337;
                    continue _fun79697
                }
            case 313:
                var8 = var6;
                if (var6) {
                    _fun79697_ip = 322;
                    continue _fun79697
                }
            case 319:
                var8 = var2;
            case 322:
                if (var8) {
                    _fun79697_ip = 328;
                    continue _fun79697
                }
            case 325:
                var8 = var15;
            case 328:
                if (var8) {
                    _fun79697_ip = 334;
                    continue _fun79697
                }
            case 331:
                var8 = var14;
            case 334:
                var7 = var8;
            case 337:
                if (!var7) {
                    _fun79697_ip = 353;
                    continue _fun79697
                }
            case 340:
                var8 = var10.isNonUserBot;
                var8 = var8.bind(var10)();
                var7 = !var8;
            case 353:
                if (!var7) {
                    _fun79697_ip = 474;
                    continue _fun79697
                }
            case 356:
                var8 = var11.push;
                var14 = _closure1_slot9;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var7 = 8;
                var7 = var20[var7];
                var7 = var18.bind(var4)(var7);
                var10 = var7.ActionSheetRow;
                var7 = {};
                var15 = 18;
                var16 = var20[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var20[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.HxrBOZ;
                var15 = var16.bind(var17)(var15);
                var7.label = var15;
                var15 = _closure1_slot12;
                var7.icon = var15;
                var15 = function() {
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 19;
                    var3 = var1[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.pushLazy;
                    var7 = _closure1_slot0;
                    var2 = 21;
                    var2 = var1[var2];
                    var7 = var7.bind(var0)(var2);
                    var2 = 20;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var7.bind(var0)(var2, var1);
                    var1 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var1.userId = var7;
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var1.guildId = var6;
                    var6 = function() {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 19;
                        var1 = var3[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var1 = var4.pop;
                        var1 = var1.bind(var4)();
                        var1 = 22;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var4 = _closure2_slot1;
                        var1.guild = var4;
                        var3 = _closure2_slot0;
                        var1.user = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onClose = var6;
                    var5 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 19;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1.onRemove = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var7.onPress = var15;
                var7 = var14.bind(var4)(var10, var7);
                var7 = var8.bind(var11)(var7);
            case 474:
                if (!(var0 != var1)) {
                    _fun79697_ip = 656;
                    continue _fun79697
                }
            case 481:
                if (!var3) {
                    _fun79697_ip = 656;
                    continue _fun79697
                }
            case 487:
                var8 = _closure1_slot0;
                var15 = _closure1_slot2;
                var3 = 23;
                var3 = var15[var3];
                var7 = var8.bind(var4)(var3);
                var3 = var7.isMemberCommunicationDisabled;
                var14 = var3.bind(var7)(var1);
                _closure2_slot4 = var14;
                var7 = var11.push;
                var10 = _closure1_slot9;
                var3 = 8;
                var3 = var15[var3];
                var3 = var8.bind(var4)(var3);
                var8 = var3.ActionSheetRow;
                var3 = {};
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = 18;
                var16 = var20[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var20[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                if (var14) {
                    _fun79697_ip = 611;
                    continue _fun79697
                }
            case 598:
                var14 = var15.xpsADY;
                var14 = var16.bind(var17)(var14);
                _fun79697_ip = 622;
                continue _fun79697;
            case 611:
                var15 = var15.qXtNtS;
                var14 = var16.bind(var17)(var15);
            case 622:
                var3.label = var14;
                var14 = _closure1_slot13;
                var3.icon = var14;
                var14 = function() {
                    _fun79703: for (var _fun79703_ip = 0;;) switch (_fun79703_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var1 = _closure2_slot4;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 24;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            if (var1) {
                                _fun79703_ip = 80;
                                continue _fun79703
                            }
                        case 43:
                            var2 = var3.openDisableCommunication;
                            var1 = {};
                            var5 = _closure2_slot2;
                            var6 = var5.guildId;
                            var1.guildId = var6;
                            var5 = var5.userId;
                            var1.userId = var5;
                            var1 = var2.bind(var3)(var1);
                            _fun79703_ip = 115;
                            continue _fun79703;
                        case 80:
                            var2 = var3.openEnableCommunication;
                            var1 = {};
                            var4 = _closure2_slot2;
                            var5 = var4.guildId;
                            var1.guildId = var5;
                            var4 = var4.userId;
                            var1.userId = var4;
                            var1 = var2.bind(var3)(var1);
                        case 115:
                            return var0;
                    }
                };
                var3.onPress = var14;
                var3 = var10.bind(var4)(var8, var3);
                var3 = var7.bind(var11)(var3);
            case 656:
                var3 = var0 != var1;
                if (!var3) {
                    _fun79697_ip = 666;
                    continue _fun79697
                }
            case 663:
                var3 = var6;
            case 666:
                if (!var3) {
                    _fun79697_ip = 798;
                    continue _fun79697
                }
            case 672:
                var6 = var11.push;
                var8 = _closure1_slot9;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var3 = 8;
                var3 = var17[var3];
                var3 = var16.bind(var4)(var3);
                var7 = var3.ActionSheetRow;
                var3 = {};
                var10 = 18;
                var14 = var17[var10];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var10 = var17[var10];
                var10 = var16.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["3glT6Z"];
                var10 = var14.bind(var15)(var10);
                var3.label = var10;
                var10 = _closure1_slot14;
                var3.icon = var10;
                var10 = 'danger';
                var3.variant = var10;
                var10 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 25;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var1.guildId = var4;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var1.userId = var3;
                    var3 = function() {
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 22;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var4 = _closure2_slot1;
                        var0.guild = var4;
                        var3 = _closure2_slot0;
                        var0.user = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.cancelButtonCallback = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3.onPress = var10;
                var3 = var8.bind(var4)(var7, var3);
                var3 = var6.bind(var11)(var3);
            case 798:
                var1 = var0 != var1;
                if (!var1) {
                    _fun79697_ip = 808;
                    continue _fun79697
                }
            case 805:
                var1 = var2;
            case 808:
                if (!var1) {
                    _fun79697_ip = 940;
                    continue _fun79697
                }
            case 814:
                var2 = var11.push;
                var6 = _closure1_slot9;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 8;
                var1 = var15[var1];
                var1 = var14.bind(var4)(var1);
                var3 = var1.ActionSheetRow;
                var1 = {};
                var7 = 18;
                var8 = var15[var7];
                var8 = var14.bind(var4)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var7 = var15[var7];
                var7 = var14.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["5MBJ5M"];
                var7 = var8.bind(var10)(var7);
                var1.label = var7;
                var7 = _closure1_slot15;
                var1.icon = var7;
                var7 = 'danger';
                var1.variant = var7;
                var7 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var1.guildId = var4;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var1.userId = var3;
                    var3 = function() {
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 22;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var4 = _closure2_slot1;
                        var0.guild = var4;
                        var3 = _closure2_slot0;
                        var0.user = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.cancelButtonCallback = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onPress = var7;
                var1 = var6.bind(var4)(var3, var1);
                var1 = var2.bind(var11)(var1);
            case 940:
                var3 = _closure1_slot10;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 27;
                var1 = var10[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var8 = _closure1_slot9;
                var6 = 28;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var14 = var6.BottomSheetTitleHeader;
                var6 = {};
                var15 = 18;
                var16 = var10[var15];
                var16 = var7.bind(var4)(var16);
                var18 = var16.intl;
                var17 = var18.formatToPlainString;
                var15 = var10[var15];
                var15 = var7.bind(var4)(var15);
                var15 = var15.t;
                var16 = var15["792QKT"];
                var15 = {};
                var15.nick = var19;
                var15 = var17.bind(var18)(var16, var15);
                var6.title = var15;
                var6 = var8.bind(var4)(var14, var6);
                var1.header = var6;
                var14 = _closure1_slot11;
                var6 = var14.container;
                var1.bodyStyles = var6;
                var6 = _closure1_slot1;
                var5 = 29;
                var5 = var10[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var15 = var14.memberRoles;
                var14 = new Array(1);
                var14[0] = var15;
                var5.style = var14;
                var5.guild = var13;
                var5.userRoles = var12;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 30;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.TableRowGroup;
                var6 = {};
                var10 = var11.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    var4 = _closure1_slot9;
                    var0 = _closure1_slot3;
                    var3 = var0.Fragment;
                    var2 = {};
                    var0 = arg0;
                    var2.children = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var1 = 'action_';
                    var0 = arg1;
                    var1 = var5.bind(var1)(var0);
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1203:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_automod/native/ModerateUserActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1683, 1410, 3093, 1621, 660, 33, 5342, 5434, 8704, 3253, 8712, 566, 8663, 8116, 3956, 3279, 1234, 4567, 8670, 1307, 10059, 3082, 8673, 8710, 8714, 4907, 5237, 10061, 5343, 2]);