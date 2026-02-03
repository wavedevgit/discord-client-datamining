// modules/channel_permissions/ChannelPermissionsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var12;
    var0 = function arg0() {
        var3 = _closure1_slot6;
        var0 = _closure1_slot11;
        var2 = var0.ADMINISTRATOR;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var0, var2);
        return var0;
    };
    var _closure1_slot14 = var0;
    var9 = function arg0() {
        _fun65686: for (var _fun65686_ip = 0;;) switch (_fun65686_ip) {
            case 0:
                var1 = arg0;
                var3 = arguments[1];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun65686_ip = 14;
                    continue _fun65686
                }
            case 12:
                var3 = false;
            case 14:
                var0 = _closure1_slot14;
                var5 = var0.bind(var4)(var1);
                var0 = _closure1_slot10;
                if (var5) {
                    _fun65686_ip = 41;
                    continue _fun65686
                }
            case 33:
                var6 = var0.ROLE;
                _fun65686_ip = 47;
                continue _fun65686;
            case 41:
                var6 = var0.ADMINISTRATOR;
            case 47:
                var0 = {};
                var0.rowType = var6;
                var5 = var1.colorString;
                var7 = null;
                if (!(var7 == var5)) {
                    _fun65686_ip = 70;
                    continue _fun65686
                }
            case 66:
                var5 = _closure1_slot13;
            case 70:
                var0.colorString = var5;
                var5 = var1.name;
                var0.name = var5;
                var5 = var1.id;
                var0.id = var5;
                var2 = _closure1_slot14;
                var2 = var2.bind(var4)(var1);
                if (var2) {
                    _fun65686_ip = 108;
                    continue _fun65686
                }
            case 105:
                var2 = var3;
            case 108:
                var0.disabled = var2;
                var5 = var1.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = ':';
                var2 = var4.bind(var3)(var6, var2, var5);
                var0.key = var2;
                var1 = var1.tags;
                var0.tags = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var9;
    var8 = function arg0, arg1() {
        _fun65687: for (var _fun65687_ip = 0;;) switch (_fun65687_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = _closure1_slot14;
                var6 = undefined;
                var3 = var1.bind(var6)(var5);
                var2 = 1;
                var1 = var2;
                if (!var3) {
                    _fun65687_ip = 31;
                    continue _fun65687
                }
            case 29:
                var1 = 0;
            case 31:
                var3 = _closure1_slot14;
                var3 = var3.bind(var6)(var4);
                if (!var3) {
                    _fun65687_ip = 45;
                    continue _fun65687
                }
            case 43:
                var2 = 0;
            case 45:
                if (!(var1 === var2)) {
                    _fun65687_ip = 83;
                    continue _fun65687
                }
            case 49:
                var3 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 7;
                var0 = var7[var0];
                var3 = var3.bind(var6)(var0);
                var0 = var3.compareGuildRoles;
                var0 = var0.bind(var3)(var5, var4);
                _fun65687_ip = 87;
                continue _fun65687;
            case 83:
                var0 = var1 - var2;
            case 87:
                return var0;
        }
    };
    var _closure1_slot16 = var8;
    var7 = function() {
        _fun65688: for (var _fun65688_ip = 0;;) switch (_fun65688_ip) {
            case 0:
                var0 = arguments[0];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun65688_ip = 69;
                    continue _fun65688
                }
            case 9:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["gnsna/"];
                var0 = var2.bind(var3)(var1);
            case 69:
                var1 = {};
                var3 = _closure1_slot10;
                var3 = var3.EMPTY_STATE;
                var1.rowType = var3;
                var2 = _closure1_slot13;
                var1.colorString = var2;
                var1.name = var0;
                var0 = true;
                var1.disabled = var0;
                var0 = 'EMPTY_STATE';
                var1.id = var0;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
        }
    };
    var _closure1_slot17 = var7;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun65689: for (var _fun65689_ip = 0;;) switch (_fun65689_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var5 = arg3;
                var2 = _closure1_slot9;
                var0 = var2.getCurrentUser;
                var0 = var0.bind(var2)();
                var2 = null;
                if (!(var2 != var0)) {
                    _fun65689_ip = 131;
                    continue _fun65689
                }
            case 31:
                if (!(var2 != var3)) {
                    _fun65689_ip = 120;
                    continue _fun65689
                }
            case 35:
                var3 = var3.permissionOverwrites;
                var3 = var3[var1];
                var8 = var2 == var5;
                var6 = undefined;
                var7 = undefined;
                if (var8) {
                    _fun65689_ip = 60;
                    continue _fun65689
                }
            case 56:
                var7 = var5[var1];
            case 60:
                if (!(var2 != var7)) {
                    _fun65689_ip = 68;
                    continue _fun65689
                }
            case 64:
                var3 = var5[var1];
            case 68:
                var2 = var2 == var3;
                if (var2) {
                    _fun65689_ip = 118;
                    continue _fun65689
                }
            case 75:
                var5 = _closure1_slot2;
                var7 = _closure1_slot3;
                var4 = 9;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.has;
                var4 = var3.allow;
                var3 = arg2;
                var3 = var5.bind(var6)(var4, var3);
                var2 = !var3;
            case 118:
                return var2;
            case 120:
                var0 = var0.id;
                var0 = var0 !== var1;
                return var0;
            case 131:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var6 = function arg0, arg1, arg2, arg3, arg4() {
        var2 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = arg3;
        var _closure2_slot1 = var1;
        var1 = arg4;
        var _closure2_slot2 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun65691: for (var _fun65691_ip = 0;;) switch (_fun65691_ip) {
                case 0:
                    var4 = arg0;
                    var0 = _closure1_slot14;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4);
                    if (var0) {
                        _fun65691_ip = 71;
                        continue _fun65691
                    }
                case 20:
                    var8 = _closure1_slot18;
                    var12 = _closure2_slot0;
                    var11 = var4.id;
                    var10 = _closure2_slot1;
                    var9 = _closure2_slot2;
                    var13 = undefined;
                    var5 = var13[var8](var12, var11, var10, var9, var8);
                    var1 = !var5;
                    if (var5) {
                        _fun65691_ip = 68;
                        continue _fun65691
                    }
                case 56:
                    var2 = _closure1_slot7;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
                case 68:
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot19 = var6;
    var5 = function arg0, arg1, arg2, arg3, arg4() {
        var2 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = arg3;
        var _closure2_slot1 = var1;
        var1 = arg4;
        var _closure2_slot2 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun65693: for (var _fun65693_ip = 0;;) switch (_fun65693_ip) {
                case 0:
                    var8 = arg0;
                    var0 = _closure1_slot14;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var8);
                    if (var0) {
                        _fun65693_ip = 71;
                        continue _fun65693
                    }
                case 20:
                    var7 = _closure1_slot18;
                    var13 = _closure2_slot0;
                    var12 = var8.id;
                    var11 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var14 = undefined;
                    var4 = var14[var7](var13, var12, var11, var10, var9);
                    var3 = !var4;
                    if (var4) {
                        _fun65693_ip = 68;
                        continue _fun65693
                    }
                case 56:
                    var4 = _closure1_slot7;
                    var4 = var4.bind(var2)(var8);
                    var3 = !var4;
                case 68:
                    var0 = var3;
                case 71:
                    if (var0) {
                        _fun65693_ip = 175;
                        continue _fun65693
                    }
                case 74:
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var1 = 9;
                    var3 = var6[var1];
                    var4 = var5.bind(var2)(var3);
                    var3 = var4.has;
                    var1 = var6[var1];
                    var7 = var5.bind(var2)(var1);
                    var6 = var7.combine;
                    var5 = var8.permissions;
                    var9 = _closure2_slot0;
                    var9 = var9.permissionOverwrites;
                    var8 = var8.id;
                    var8 = var9[var8];
                    var9 = null;
                    var9 = var9 == var8;
                    var2 = undefined;
                    if (var9) {
                        _fun65693_ip = 159;
                        continue _fun65693
                    }
                case 153:
                    var2 = var8.allow;
                case 159:
                    var2 = var6.bind(var7)(var5, var2);
                    var1 = _closure2_slot1;
                    var0 = var3.bind(var4)(var2, var1);
                case 175:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot20 = var5;
    var0 = function arg0, arg1() {
        _fun65694: for (var _fun65694_ip = 0;;) switch (_fun65694_ip) {
            case 0:
                var3 = arg0;
                var5 = _closure1_slot8;
                var4 = var5.getNick;
                var0 = arg1;
                var2 = var0.id;
                var0 = var3.id;
                var0 = var4.bind(var5)(var2, var0);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun65694_ip = 74;
                    continue _fun65694
                }
            case 41:
                var4 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.getName;
                var0 = var1.bind(var2)(var3);
            case 74:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = arg1;
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1() {
        _fun65696: for (var _fun65696_ip = 0;;) switch (_fun65696_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var0 = _closure1_slot5;
                var3 = undefined;
                var5 = var0.bind(var3)(var4, var1);
                var0 = _closure1_slot10;
                if (var5) {
                    _fun65696_ip = 36;
                    continue _fun65696
                }
            case 28:
                var5 = var0.MEMBER;
                _fun65696_ip = 42;
                continue _fun65696;
            case 36:
                var5 = var0.OWNER;
            case 42:
                var0 = {};
                var0.rowType = var5;
                var6 = _closure1_slot21;
                var6 = var6.bind(var3)(var1, var4);
                var0.name = var6;
                var9 = _closure1_slot8;
                var8 = var9.getNick;
                var7 = var4.id;
                var6 = var1.id;
                var7 = var8.bind(var9)(var7, var6);
                var6 = null;
                var8 = var6 != var7;
                if (!var8) {
                    _fun65696_ip = 101;
                    continue _fun65696
                }
            case 98:
                var6 = var7;
            case 101:
                var0.nickname = var6;
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 11;
                var6 = var8[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.getName;
                var6 = var6.bind(var7)(var1);
                var0.username = var6;
                var6 = var1.id;
                var0.id = var6;
                var8 = var1.getAvatarURL;
                var7 = var4.id;
                var6 = 24;
                var6 = var8.bind(var1)(var7, var6);
                var0.avatarURL = var6;
                var6 = var1.bot;
                var0.bot = var6;
                var6 = var1.isVerifiedBot;
                var6 = var6.bind(var1)();
                var0.verifiedBot = var6;
                var2 = _closure1_slot22;
                var2 = var2.bind(var3)(var1, var4);
                var0.disabled = var2;
                var4 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ':';
                var1 = var3.bind(var2)(var5, var1, var4);
                var0.key = var1;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun65697: for (var _fun65697_ip = 0;;) switch (_fun65697_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2.rowType;
                var0 = var1.rowType;
                if (!(var3 === var0)) {
                    _fun65697_ip = 65;
                    continue _fun65697
                }
            case 22:
                var3 = var2.name;
                var0 = var3.toLocaleLowerCase;
                var4 = var0.bind(var3)();
                var3 = var4.localeCompare;
                var5 = var1.name;
                var0 = var5.toLocaleLowerCase;
                var0 = var0.bind(var5)();
                var0 = var3.bind(var4)(var0);
                _fun65697_ip = 81;
                continue _fun65697;
            case 65:
                var2 = var2.rowType;
                var1 = var1.rowType;
                var0 = var2 - var1;
            case 81:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var4 = function arg0, arg1, arg2, arg3, arg4() {
        var4 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var1 = arg4;
        var _closure2_slot3 = var1;
        var3 = var4.map;
        var2 = _closure1_slot9;
        var2 = var2.getUser;
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = 12;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var1.isNotNullish;
        var2 = var2.bind(var3)(var1);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun65699: for (var _fun65699_ip = 0;;) switch (_fun65699_ip) {
                case 0:
                    var4 = arg0;
                    var8 = _closure1_slot18;
                    var12 = _closure2_slot0;
                    var11 = var4.id;
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot3;
                    var3 = undefined;
                    var13 = undefined;
                    var5 = var13[var8](var12, var11, var10, var9, var8);
                    var0 = !var5;
                    if (!var5) {
                        _fun65699_ip = 58;
                        continue _fun65699
                    }
                case 44:
                    var2 = _closure1_slot22;
                    var1 = _closure2_slot1;
                    var0 = var2.bind(var3)(var4, var1);
                case 58:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot25 = var4;
    var3 = function arg0, arg1, arg2() {
        _fun65700: for (var _fun65700_ip = 0;;) switch (_fun65700_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var2 = var0.permissionOverwrites;
                var1 = var0.guild_id;
                var1 = var2[var1];
                var2 = null;
                if (!(var2 == var1)) {
                    _fun65700_ip = 68;
                    continue _fun65700
                }
            case 27:
                var5 = _closure1_slot2;
                var3 = _closure1_slot3;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.makeEveryoneOverwrite;
                var0 = var0.guild_id;
                var1 = var2.bind(var3)(var0);
            case 68:
                var0 = {};
                var11 = var0;
                var10 = var1;
                var1 = copyDataProperties(var11, var10);
                var6 = _closure1_slot2;
                var2 = _closure1_slot3;
                var5 = 9;
                var7 = var2[var5];
                var3 = undefined;
                var9 = var6.bind(var3)(var7);
                var8 = var9.remove;
                var7 = var0.deny;
                var7 = var8.bind(var9)(var7, var4);
                var0.deny = var7;
                var2 = var2[var5];
                var7 = var6.bind(var3)(var2);
                var6 = var7.remove;
                var2 = var0.allow;
                var2 = var6.bind(var7)(var2, var4);
                var0.allow = var2;
                var2 = arg2;
                if (var2) {
                    _fun65700_ip = 208;
                    continue _fun65700
                }
            case 168:
                var2 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var3 = var2.bind(var3)(var1);
                var2 = var3.add;
                var1 = var0.deny;
                var1 = var2.bind(var3)(var1, var4);
                var0.deny = var1;
            case 208:
                return var0;
        }
    };
    var _closure1_slot26 = var3;
    var0 = global;
    var15 = var0.Object;
    var14 = var15.defineProperty;
    var10 = {};
    var0 = true;
    var10.value = var0;
    var0 = '__esModule';
    var0 = var14.bind(var15)(var2, var0, var10);
    var0 = 0;
    var10 = var12[var0];
    var0 = undefined;
    var10 = var11.bind(var0)(var10);
    var10 = var10.isGuildVocalChannelType;
    var _closure1_slot4 = var10;
    var10 = 1;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.isGuildOwner;
    var _closure1_slot5 = var10;
    var10 = 2;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var14 = var10.hasPermission;
    var _closure1_slot6 = var14;
    var10 = var10.isEveryoneRole;
    var _closure1_slot7 = var10;
    var10 = 3;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot8 = var10;
    var10 = 4;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot9 = var10;
    var10 = 5;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.RowType;
    var _closure1_slot10 = var10;
    var10 = 6;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var13 = var10.Permissions;
    var _closure1_slot11 = var13;
    var13 = var10.ChannelTypes;
    var _closure1_slot12 = var13;
    var10 = var10.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot13 = var10;
    var10 = 17;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/channel_permissions/ChannelPermissionsUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var2.getRoleRowData = var9;
    var2.sortRoles = var8;
    var2.getNoRolesRow = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.castGuildIdAsEveryoneGuildRoleId;
        var0 = arg0;
        var1 = var1.bind(var2)(var0);
        var0 = arg1;
        var0 = var1 === var0;
        return var0;
    };
    var2.isEveryoneRoleId = var7;
    var7 = function arg0, arg1, arg2, arg3() {
        _fun65702: for (var _fun65702_ip = 0;;) switch (_fun65702_ip) {
            case 0:
                var3 = arg1;
                var1 = arguments[4];
                var2 = arg2;
                var _closure2_slot0 = var2;
                var2 = arg3;
                var _closure2_slot1 = var2;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun65702_ip = 35;
                    continue _fun65702
                }
            case 28:
                var1 = function() {
                    var0 = true;
                    return var0;
                };
            case 35:
                var _closure2_slot2 = var1;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    _fun65704: for (var _fun65704_ip = 0;;) switch (_fun65704_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = _closure1_slot14;
                            var3 = undefined;
                            var0 = var0.bind(var3)(var1);
                            var0 = !var0;
                            if (!var0) {
                                _fun65704_ip = 50;
                                continue _fun65704
                            }
                        case 23:
                            var7 = _closure1_slot18;
                            var6 = _closure2_slot0;
                            var5 = var1.id;
                            var4 = _closure2_slot1;
                            var0 = var7.bind(var3)(var6, var5, var4);
                        case 50:
                            if (!var0) {
                                _fun65704_ip = 65;
                                continue _fun65704
                            }
                        case 53:
                            var2 = _closure1_slot7;
                            var2 = var2.bind(var3)(var1);
                            var0 = !var2;
                        case 65:
                            if (!var0) {
                                _fun65704_ip = 85;
                                continue _fun65704
                            }
                        case 68:
                            var2 = _closure2_slot2;
                            var1 = var1.name;
                            var0 = var2.bind(var3)(var1);
                        case 85:
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.sort;
                var1 = _closure1_slot16;
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot15;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getRolesRows = var7;
    var7 = function arg0, arg1, arg2, arg3() {
        _fun65706: for (var _fun65706_ip = 0;;) switch (_fun65706_ip) {
            case 0:
                var3 = arg1;
                var1 = arguments[4];
                var2 = arg2;
                var _closure2_slot0 = var2;
                var2 = arg3;
                var _closure2_slot1 = var2;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun65706_ip = 35;
                    continue _fun65706
                }
            case 28:
                var1 = function() {
                    var0 = true;
                    return var0;
                };
            case 35:
                var _closure2_slot2 = var1;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    _fun65708: for (var _fun65708_ip = 0;;) switch (_fun65708_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = _closure1_slot14;
                            var3 = undefined;
                            var0 = var0.bind(var3)(var1);
                            var0 = !var0;
                            if (!var0) {
                                _fun65708_ip = 50;
                                continue _fun65708
                            }
                        case 23:
                            var7 = _closure1_slot18;
                            var6 = _closure2_slot0;
                            var5 = var1.id;
                            var4 = _closure2_slot1;
                            var0 = var7.bind(var3)(var6, var5, var4);
                        case 50:
                            if (!var0) {
                                _fun65708_ip = 65;
                                continue _fun65708
                            }
                        case 53:
                            var2 = _closure1_slot7;
                            var2 = var2.bind(var3)(var1);
                            var0 = !var2;
                        case 65:
                            if (!var0) {
                                _fun65708_ip = 85;
                                continue _fun65708
                            }
                        case 68:
                            var2 = _closure2_slot2;
                            var1 = var1.name;
                            var0 = var2.bind(var3)(var1);
                        case 85:
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.sort;
                var1 = _closure1_slot16;
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var2 = _closure1_slot15;
                    var4 = _closure1_slot6;
                    var0 = _closure2_slot1;
                    var1 = undefined;
                    var0 = var4.bind(var1)(var3, var0);
                    var0 = var2.bind(var1)(var3, var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getRolesRowsWithPermissionDisabled = var7;
    var2.getExistingRoles = var6;
    var2.getAllExistingRolesWithPermission = var5;
    var5 = function arg0, arg1, arg2, arg3, arg4() {
        _fun65710: for (var _fun65710_ip = 0;;) switch (_fun65710_ip) {
            case 0:
                var7 = _closure1_slot19;
                var3 = undefined;
                var4 = 0;
                var11 = arg1;
                var10 = arg2;
                var9 = arg3;
                var8 = arg4;
                var13 = undefined;
                var12 = 0;
                var5 = var13[var7](var12, var11, var10, var9, var8, var7);
                var2 = var5.sort;
                var0 = _closure1_slot16;
                var5 = var2.bind(var5)(var0);
                var2 = var5.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot15;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var2.bind(var5)(var0);
                var2 = var0.length;
                if (!(var4 === var2)) {
                    _fun65710_ip = 138;
                    continue _fun65710
                }
            case 74:
                var2 = _closure1_slot17;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 8;
                var4 = var7[var1];
                var4 = var6.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.nZfHsf;
                var1 = var4.bind(var5)(var1);
                var0 = var2.bind(var3)(var1);
            case 138:
                return var0;
        }
    };
    var2.getExistingRolesRows = var5;
    var5 = function arg0, arg1, arg2, arg3, arg4() {
        _fun65712: for (var _fun65712_ip = 0;;) switch (_fun65712_ip) {
            case 0:
                var8 = arg3;
                var _closure2_slot0 = var8;
                var7 = _closure1_slot20;
                var3 = undefined;
                var4 = 0;
                var12 = arg1;
                var11 = arg2;
                var9 = arg4;
                var14 = undefined;
                var13 = 0;
                var10 = var8;
                var6 = var14[var7](var13, var12, var11, var10, var9, var8);
                var5 = var6.sort;
                var2 = _closure1_slot16;
                var5 = var5.bind(var6)(var2);
                var2 = var5.map;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var2 = _closure1_slot15;
                    var4 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var1 = undefined;
                    var0 = var4.bind(var1)(var3, var0);
                    var0 = var2.bind(var1)(var3, var0);
                    return var0;
                };
                var0 = var2.bind(var5)(var0);
                var2 = var0.length;
                if (!(var4 === var2)) {
                    _fun65712_ip = 145;
                    continue _fun65712
                }
            case 81:
                var2 = _closure1_slot17;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 8;
                var4 = var7[var1];
                var4 = var6.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.nZfHsf;
                var1 = var4.bind(var5)(var1);
                var0 = var2.bind(var3)(var1);
            case 145:
                return var0;
        }
    };
    var2.getExistingRolesRowWithPermissionDisabled = var5;
    var5 = function arg0, arg1, arg2, arg3() {
        _fun65714: for (var _fun65714_ip = 0;;) switch (_fun65714_ip) {
            case 0:
                var4 = arg0;
                var0 = arguments[4];
                var2 = arg1;
                var _closure2_slot0 = var2;
                var2 = arg2;
                var _closure2_slot1 = var2;
                var2 = arg3;
                var _closure2_slot2 = var2;
                var6 = undefined;
                if (!(var0 === var6)) {
                    _fun65714_ip = 42;
                    continue _fun65714
                }
            case 35:
                var0 = function() {
                    var0 = true;
                    return var0;
                };
            case 42:
                var _closure2_slot3 = var0;
                var3 = var4.map;
                var2 = _closure1_slot9;
                var2 = var2.getUser;
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 12;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.isNotNullish;
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var1
                    _fun65716: for (var _fun65716_ip = 0;;) switch (_fun65716_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = _closure1_slot5;
                            var0 = _closure2_slot1;
                            var4 = undefined;
                            var0 = var5.bind(var4)(var0, var2);
                            var0 = !var0;
                            if (!var0) {
                                _fun65716_ip = 55;
                                continue _fun65716
                            }
                        case 31:
                            var8 = _closure1_slot18;
                            var7 = _closure2_slot0;
                            var6 = var2.id;
                            var5 = _closure2_slot2;
                            var0 = var8.bind(var4)(var7, var6, var5);
                        case 55:
                            if (!var0) {
                                _fun65716_ip = 119;
                                continue _fun65716
                            }
                        case 58:
                            var5 = _closure2_slot3;
                            var6 = _closure1_slot21;
                            var1 = _closure2_slot1;
                            var1 = var6.bind(var4)(var2, var1);
                            var1 = var5.bind(var4)(var1);
                            if (var1) {
                                _fun65716_ip = 98;
                                continue _fun65716
                            }
                        case 84:
                            var6 = _closure2_slot3;
                            var5 = var2.username;
                            var1 = var6.bind(var4)(var5);
                        case 98:
                            if (var1) {
                                _fun65716_ip = 116;
                                continue _fun65716
                            }
                        case 101:
                            var3 = _closure2_slot3;
                            var2 = var2.discriminator;
                            var1 = var3.bind(var4)(var2);
                        case 116:
                            var0 = var1;
                        case 119:
                            return var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot23;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.sort;
                var0 = _closure1_slot24;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getMembersRows = var5;
    var2.getExistingMembers = var4;
    var4 = function arg0, arg1, arg2, arg3, arg4() {
        var8 = arg2;
        var _closure2_slot0 = var8;
        var7 = _closure1_slot25;
        var14 = undefined;
        var13 = arg0;
        var12 = arg1;
        var10 = arg3;
        var9 = arg4;
        var11 = var8;
        var3 = var14[var7](var13, var12, var11, var10, var9, var8);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var1
            var3 = _closure1_slot23;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var0, var2);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.sort;
        var0 = _closure1_slot24;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getExistingMembersRows = var4;
    var4 = function arg0, arg1() {
        _fun65720: for (var _fun65720_ip = 0;;) switch (_fun65720_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.ROLE;
                if (!(var1 !== var2)) {
                    _fun65720_ip = 435;
                    continue _fun65720
                }
            case 23:
                var1 = _closure1_slot10;
                var1 = var1.OWNER;
                if (!(var1 !== var2)) {
                    _fun65720_ip = 374;
                    continue _fun65720
                }
            case 40:
                var1 = _closure1_slot10;
                var1 = var1.ADMINISTRATOR;
                if (!(var1 !== var2)) {
                    _fun65720_ip = 313;
                    continue _fun65720
                }
            case 57:
                var1 = _closure1_slot10;
                var1 = var1.MEMBER;
                if (!(var1 !== var2)) {
                    _fun65720_ip = 244;
                    continue _fun65720
                }
            case 74:
                var1 = _closure1_slot10;
                var1 = var1.USER;
                if (!(var1 !== var2)) {
                    _fun65720_ip = 183;
                    continue _fun65720
                }
            case 88:
                var1 = _closure1_slot10;
                var1 = var1.GUILD;
                if (!(var1 !== var2)) {
                    _fun65720_ip = 124;
                    continue _fun65720
                }
            case 102:
                var1 = _closure1_slot10;
                var1 = var1.EMPTY_STATE;
                if (!(var1 !== var2)) {
                    _fun65720_ip = 120;
                    continue _fun65720
                }
            case 116:
                var1 = undefined;
                return var1;
            case 120:
                var1 = null;
                return var1;
            case 124:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["5qyruI"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 183:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.KD6OJJ;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 244:
                var2 = arg1;
                var1 = null;
                if (!var2) {
                    _fun65720_ip = 311;
                    continue _fun65720
                }
            case 252:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 8;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.UAJxZi;
                var1 = var3.bind(var4)(var2);
            case 311:
                return var1;
            case 313:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["dwlcc+"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 374:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.NWhYJg;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 435:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 8;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.ZxoFOG;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getRowTypeLabel = var4;
    var4 = function arg0() {
        _fun65721: for (var _fun65721_ip = 0;;) switch (_fun65721_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.ROLE;
                if (!(var1 !== var2)) {
                    _fun65721_ip = 259;
                    continue _fun65721
                }
            case 23:
                var1 = _closure1_slot10;
                var1 = var1.OWNER;
                if (!(var1 !== var2)) {
                    _fun65721_ip = 200;
                    continue _fun65721
                }
            case 40:
                var1 = _closure1_slot10;
                var1 = var1.ADMINISTRATOR;
                if (!(var1 !== var2)) {
                    _fun65721_ip = 141;
                    continue _fun65721
                }
            case 54:
                var1 = _closure1_slot10;
                var1 = var1.MEMBER;
                if (!(var1 !== var2)) {
                    _fun65721_ip = 82;
                    continue _fun65721
                }
            case 68:
                var1 = _closure1_slot10;
                var1 = var1.EMPTY_STATE;
                var1 = null;
                return var1;
            case 82:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["Gzc/arg8"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 141:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.eTmN5a;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 200:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.icuNBM;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 259:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 8;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["Gzc/arg8"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getRemoveTooltipHint = var4;
    var2.flipEveryonePermission = var3;
    var3 = function arg0, arg1, arg2() {
        var6 = arg0;
        var4 = _closure1_slot26;
        var0 = undefined;
        var3 = arg1;
        var1 = arg2;
        var1 = var4.bind(var0)(var6, var3, var1);
        var3 = _closure1_slot0;
        var4 = _closure1_slot3;
        var2 = 14;
        var2 = var4[var2];
        var5 = var3.bind(var0)(var2);
        var4 = var5.updatePermission;
        var9 = var1.id;
        var8 = var1.allow;
        var7 = var1.deny;
        var11 = var5;
        var10 = var6;
        var1 = var11[var4](var10, var9, var8, var7, var6);
        return var0;
    };
    var2.toggleChannelEveryonePermission = var3;
    var3 = function arg0, arg1() {
        _fun65723: for (var _fun65723_ip = 0;;) switch (_fun65723_ip) {
            case 0:
                var1 = arg0;
                var10 = arg1;
                var3 = _closure1_slot9;
                var0 = var3.getCurrentUser;
                var3 = var0.bind(var3)();
                var4 = null;
                if (!(var4 == var3)) {
                    _fun65723_ip = 32;
                    continue _fun65723
                }
            case 28:
                var0 = undefined;
                return var0;
            case 32:
                var5 = var1.permissionOverwrites;
                var0 = var3.id;
                var0 = var5[var0];
                if (!(var4 != var0)) {
                    _fun65723_ip = 135;
                    continue _fun65723
                }
            case 51:
                var6 = var0.allow;
                var11 = var0.deny;
                var5 = _closure1_slot2;
                var9 = _closure1_slot3;
                var4 = 9;
                var4 = var9[var4];
                var8 = undefined;
                var5 = var5.bind(var8)(var4);
                var4 = var5.add;
                var12 = var4.bind(var5)(var6, var10);
                var5 = _closure1_slot0;
                var4 = 14;
                var4 = var9[var4];
                var5 = var5.bind(var8)(var4);
                var4 = var5.updatePermission;
                var13 = var0.id;
                var15 = var5;
                var14 = var1;
                var0 = var15[var4](var14, var13, var12, var11, var10);
                return var0;
            case 135:
                var0 = {};
                var3 = var3.id;
                var0.id = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 15;
                var6 = var5[var3];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.PermissionOverwriteType;
                var6 = var6.MEMBER;
                var0.type = var6;
                var6 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var9 = var6.bind(var3)(var2);
                var8 = var9.add;
                var2 = 13;
                var7 = var5[var2];
                var7 = var6.bind(var3)(var7);
                var7 = var7.NONE;
                var7 = var8.bind(var9)(var7, var10);
                var0.allow = var7;
                var2 = var5[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.NONE;
                var0.deny = var2;
                var2 = 14;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.savePermissionUpdates;
                var2 = var1.id;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = true;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var2.grantUserChannelAccess = var3;
    var3 = function arg0, arg1() {
        _fun65724: for (var _fun65724_ip = 0;;) switch (_fun65724_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun65724_ip = 115;
                    continue _fun65724
                }
            case 12:
                var3 = var1.permissionOverwrites;
                var2 = var1.guild_id;
                var2 = var3[var2];
                var6 = var0 == var4;
                var5 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun65724_ip = 47;
                    continue _fun65724
                }
            case 38:
                var6 = var1.guild_id;
                var3 = var4[var6];
            case 47:
                if (!(var0 != var3)) {
                    _fun65724_ip = 60;
                    continue _fun65724
                }
            case 51:
                var3 = var1.guild_id;
                var2 = var4[var3];
            case 60:
                var0 = var0 != var2;
                if (!var0) {
                    _fun65724_ip = 113;
                    continue _fun65724
                }
            case 67:
                var4 = _closure1_slot2;
                var6 = _closure1_slot3;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.has;
                var2 = var2.deny;
                var1 = var1.accessPermissions;
                var0 = var3.bind(var4)(var2, var1);
            case 113:
                return var0;
            case 115:
                var0 = false;
                return var0;
        }
    };
    var2.isPrivateGuildChannel = var3;
    var3 = function arg0() {
        _fun65725: for (var _fun65725_ip = 0;;) switch (_fun65725_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.permissionOverwrites;
                var0 = var1.guild_id;
                var2 = var2[var0];
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun65725_ip = 49;
                    continue _fun65725
                }
            case 27:
                var3 = var1.type;
                var1 = _closure1_slot12;
                var1 = var1.GUILD_TEXT;
                var0 = var3 === var1;
            case 49:
                if (!var0) {
                    _fun65725_ip = 104;
                    continue _fun65725
                }
            case 52:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.has;
                var2 = var2.deny;
                var1 = _closure1_slot11;
                var1 = var1.VIEW_CHANNEL;
                var0 = var3.bind(var4)(var2, var1);
            case 104:
                return var0;
        }
    };
    var2.isPrivateTextChannel = var3;
    var3 = function arg0, arg1, arg2() {
        _fun65726: for (var _fun65726_ip = 0;;) switch (_fun65726_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var0 = _closure1_slot12;
                var1 = var0.GUILD_TEXT;
                var0 = var4;
                if (!(var5 !== var1)) {
                    _fun65726_ip = 95;
                    continue _fun65726
                }
            case 29:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_ANNOUNCEMENT;
                var0 = var4;
                if (!(var5 !== var1)) {
                    _fun65726_ip = 95;
                    continue _fun65726
                }
            case 46:
                var6 = _closure1_slot4;
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = !var1;
                if (!var1) {
                    _fun65726_ip = 77;
                    continue _fun65726
                }
            case 63:
                var2 = _closure1_slot12;
                var2 = var2.GUILD_CATEGORY;
                var1 = var5 !== var2;
            case 77:
                if (var1) {
                    _fun65726_ip = 92;
                    continue _fun65726
                }
            case 80:
                var2 = var4;
                if (!var4) {
                    _fun65726_ip = 89;
                    continue _fun65726
                }
            case 86:
                var2 = var3;
            case 89:
                var1 = var2;
            case 92:
                var0 = var1;
            case 95:
                return var0;
        }
    };
    var2.canCreatePrivateChannel = var3;
    var3 = function arg0() {
        _fun65727: for (var _fun65727_ip = 0;;) switch (_fun65727_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot12;
                var1 = var1.GUILD_TEXT;
                if (!(var1 !== var2)) {
                    _fun65727_ip = 200;
                    continue _fun65727
                }
            case 23:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_ANNOUNCEMENT;
                if (!(var1 !== var2)) {
                    _fun65727_ip = 200;
                    continue _fun65727
                }
            case 40:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_VOICE;
                if (!(var1 !== var2)) {
                    _fun65727_ip = 136;
                    continue _fun65727
                }
            case 54:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_CATEGORY;
                if (!(var1 !== var2)) {
                    _fun65727_ip = 72;
                    continue _fun65727
                }
            case 68:
                var1 = null;
                return var1;
            case 72:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.PhnARV;
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 136:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 8;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.iZAMty;
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 200:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 8;
                var2 = var5[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.format;
                var0 = var5[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.ZDtA0T;
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getPrivateChannelHintText = var3;
    var1 = function arg0, arg1() {
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = new Array(0);
        var _closure2_slot1 = var0;
        var2 = global;
        var4 = var2.Object;
        var3 = var4.values;
        var2 = arg0;
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun65729: for (var _fun65729_ip = 0;;) switch (_fun65729_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.row;
                    var1 = var3.id;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun65729_ip = 36;
                        continue _fun65729
                    }
                case 23:
                    var2 = var3.id;
                    var1 = '';
                    var0 = var1 !== var2;
                case 36:
                    if (!var0) {
                        _fun65729_ip = 210;
                        continue _fun65729
                    }
                case 42:
                    var1 = var3.rowType;
                    var0 = _closure1_slot10;
                    var0 = var0.ROLE;
                    if (!(var1 !== var0)) {
                        _fun65729_ip = 150;
                        continue _fun65729
                    }
                case 65:
                    var1 = var3.rowType;
                    var0 = _closure1_slot10;
                    var0 = var0.MEMBER;
                    if (!(var1 === var0)) {
                        _fun65729_ip = 210;
                        continue _fun65729
                    }
                case 88:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 16;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.permissionOverwriteForUser;
                    var5 = var3.id;
                    var0 = _closure2_slot0;
                    var0 = var6.bind(var7)(var5, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun65729_ip = 210;
                    continue _fun65729;
                case 150:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var4 = 16;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.permissionOverwriteForRole;
                    var3 = var3.id;
                    var0 = _closure2_slot0;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                case 210:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.extractPermissionOverwrites = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1416, 1675, 1681, 1621, 5919, 660, 1676, 1234, 484, 21, 3236, 1304, 3096, 8134, 1645, 4236, 2]);