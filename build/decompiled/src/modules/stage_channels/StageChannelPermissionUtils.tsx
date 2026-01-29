// modules/stage_channels/StageChannelPermissionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var3 = function(arg0, arg1, arg2) { // Original name: createOrUpdateModeratorOverwrite, environment: var1
        _fun38595: for (var _fun38595_ip = 0;;) switch (_fun38595_ip) {
            case 0:
                var8 = arg2;
                var0 = {};
                var1 = arg0;
                var0.id = var1;
                var1 = arg1;
                var0.type = var1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 8;
                var1 = var1[var3];
                var7 = undefined;
                var12 = var2.bind(var7)(var1);
                var11 = var12.remove;
                var6 = null;
                var1 = var6 == var8;
                var10 = undefined;
                if (var1) {
                    _fun38595_ip = 67;
                    continue _fun38595
                }
            case 61:
                var10 = var8.deny;
            case 67:
                if (!(var6 == var10)) {
                    _fun38595_ip = 97;
                    continue _fun38595
                }
            case 71:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var1 = var2.bind(var7)(var1);
                var10 = var1.NONE;
            case 97:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 10;
                var4 = var9[var1];
                var4 = var2.bind(var7)(var4);
                var4 = var4.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var4 = var11.bind(var12)(var10, var4);
                var0.deny = var4;
                var4 = _closure1_slot1;
                var3 = var9[var3];
                var4 = var4.bind(var7)(var3);
                var3 = var4.combine;
                var1 = var9[var1];
                var1 = var2.bind(var7)(var1);
                var2 = var1.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var9 = var6 == var8;
                var1 = undefined;
                if (var9) {
                    _fun38595_ip = 183;
                    continue _fun38595
                }
            case 177:
                var1 = var8.allow;
            case 183:
                if (!(var6 == var1)) {
                    _fun38595_ip = 213;
                    continue _fun38595
                }
            case 187:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 9;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var1 = var5.NONE;
            case 213:
                var1 = var3.bind(var4)(var2, var1);
                var0.allow = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot10 = var7;
    var4 = var4.Permissions;
    var _closure1_slot11 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageChannelPermissionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0, arg1, arg2) { // Original name: createModeratorOverwrite, environment: var1
        _fun38596: for (var _fun38596_ip = 0;;) switch (_fun38596_ip) {
            case 0:
                var4 = arg0;
                var0 = arg2;
                var3 = _closure1_slot12;
                var1 = null;
                var5 = var1 == var0;
                var2 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun38596_ip = 36;
                    continue _fun38596
                }
            case 26:
                var0 = var0.permissionOverwrites;
                var1 = var0[var4];
            case 36:
                var0 = arg1;
                var0 = var3.bind(var2)(var4, var0, var1);
                return var0;
        }
    };
    var2.createModeratorOverwrite = var4;
    var2.createOrUpdateModeratorOverwrite = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: removeModeratorOverwrite, environment: var1
        _fun38597: for (var _fun38597_ip = 0;;) switch (_fun38597_ip) {
            case 0:
                var1 = arg0;
                var0 = arg2;
                var5 = null;
                var2 = var5 == var0;
                var6 = undefined;
                var7 = undefined;
                if (var2) {
                    _fun38597_ip = 29;
                    continue _fun38597
                }
            case 19:
                var0 = var0.permissionOverwrites;
                var7 = var0[var1];
            case 29:
                var0 = {};
                var0.id = var1;
                var1 = arg1;
                var0.type = var1;
                var2 = var5 == var7;
                var1 = undefined;
                if (var2) {
                    _fun38597_ip = 57;
                    continue _fun38597
                }
            case 51:
                var1 = var7.deny;
            case 57:
                if (!(var5 == var1)) {
                    _fun38597_ip = 90;
                    continue _fun38597
                }
            case 61:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var2 = var3.bind(var6)(var2);
                var1 = var2.NONE;
            case 90:
                var0.deny = var1;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var4 = var3.bind(var6)(var2);
                var3 = var4.remove;
                var8 = var5 == var7;
                var2 = undefined;
                if (var8) {
                    _fun38597_ip = 139;
                    continue _fun38597
                }
            case 133:
                var2 = var7.allow;
            case 139:
                if (!(var5 == var2)) {
                    _fun38597_ip = 169;
                    continue _fun38597
                }
            case 143:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 9;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var2 = var5.NONE;
            case 169:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var1 = var3.bind(var4)(var2, var1);
                var0.allow = var1;
                return var0;
        }
    };
    var2.removeModeratorOverwrite = var3;
    var3 = function(arg0) { // Original name: isEmptyOverwrite, environment: var1
        _fun38598: for (var _fun38598_ip = 0;;) switch (_fun38598_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.allow;
                var4 = var0.deny;
                var9 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 8;
                var3 = var0[var2];
                var6 = undefined;
                var5 = var9.bind(var6)(var3);
                var3 = var5.equals;
                var7 = 9;
                var0 = var0[var7];
                var0 = var9.bind(var6)(var0);
                var0 = var0.NONE;
                var0 = var3.bind(var5)(var8, var0);
                if (!var0) {
                    _fun38598_ip = 117;
                    continue _fun38598
                }
            case 73:
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = var1[var2];
                var3 = var5.bind(var6)(var2);
                var2 = var3.equals;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.NONE;
                var0 = var2.bind(var3)(var4, var1);
            case 117:
                return var0;
        }
    };
    var2.isEmptyOverwrite = var3;
    var3 = function(arg0) { // Original name: useCanCreateStageChannelByGuild, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot8;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot5;
        var2[1] = var6;
        var1 = _closure1_slot7;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun38600: for (var _fun38600_ip = 0;;) switch (_fun38600_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = var1.getId;
                    var4 = var0.bind(var1)();
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var6 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var6;
                    if (!var0) {
                        _fun38600_ip = 157;
                        continue _fun38600
                    }
                case 47:
                    var5 = var6.features;
                    var2 = var5.has;
                    var1 = _closure1_slot10;
                    var1 = var1.COMMUNITY;
                    var1 = var2.bind(var5)(var1);
                    var2 = !var1;
                    var1 = !var2;
                    if (var2) {
                        _fun38600_ip = 154;
                        continue _fun38600
                    }
                case 82:
                    var2 = _closure1_slot4;
                    var8 = undefined;
                    var2 = var2.bind(var8)(var6, var4);
                    var4 = !var2;
                    var2 = !var4;
                    if (!var4) {
                        _fun38600_ip = 151;
                        continue _fun38600
                    }
                case 103:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 10;
                    var3 = var9[var3];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.CREATE_STAGE_CHANNEL_PERMISSIONS;
                    var3 = var4.bind(var5)(var3, var6);
                    var3 = !var3;
                    var2 = !var3;
                case 151:
                    var1 = var2;
                case 154:
                    var0 = var1;
                case 157:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanCreateStageChannelByGuild = var3;
    var3 = function(arg0) { // Original name: useCanUpdateStageChannelModerators, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot8;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot7;
        var2[1] = var6;
        var1 = _closure1_slot6;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun38602: for (var _fun38602_ip = 0;;) switch (_fun38602_ip) {
                case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getChannel;
                    var0 = _closure2_slot0;
                    var4 = var2.bind(var3)(var0);
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var0 = null;
                    var5 = var0 == var4;
                    var6 = undefined;
                    var0 = undefined;
                    if (var5) {
                        _fun38602_ip = 56;
                        continue _fun38602
                    }
                case 46:
                    var5 = var4.getGuildId;
                    var0 = var5.bind(var4)();
                case 56:
                    var5 = var2.bind(var3)(var0);
                    var3 = _closure1_slot8;
                    var2 = var3.can;
                    var0 = _closure1_slot11;
                    var0 = var0.ADMINISTRATOR;
                    var0 = var2.bind(var3)(var0, var5);
                    var2 = !var0;
                    if (!var2) {
                        _fun38602_ip = 132;
                        continue _fun38602
                    }
                case 93:
                    var7 = _closure1_slot8;
                    var5 = var7.can;
                    var0 = _closure1_slot11;
                    var12 = var0.MANAGE_ROLES;
                    var8 = true;
                    var13 = var7;
                    var11 = var4;
                    var10 = undefined;
                    var9 = undefined;
                    var0 = var13[var5](var12, var11, var10, var9, var8, var7);
                    var2 = !var0;
                case 132:
                    var0 = !var2;
                    if (!var2) {
                        _fun38602_ip = 186;
                        continue _fun38602
                    }
                case 138:
                    var3 = _closure1_slot8;
                    var2 = var3.can;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 10;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS;
                    var1 = var2.bind(var3)(var1, var4);
                    var1 = !var1;
                    var0 = !var1;
                case 186:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanUpdateStageChannelModerators = var3;
    var3 = function(arg0) { // Original name: useCanModerateRequestToSpeak, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot6;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot8;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun38604: for (var _fun38604_ip = 0;;) switch (_fun38604_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun38604_ip = 63;
                        continue _fun38604
                    }
                case 16:
                    var4 = _closure1_slot8;
                    var3 = var4.can;
                    var2 = _closure1_slot11;
                    var2 = var2.MUTE_MEMBERS;
                    var6 = _closure1_slot6;
                    var5 = var6.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var6)(var1);
                    var0 = var3.bind(var4)(var2, var1);
                case 63:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanModerateRequestToSpeak = var3;
    var1 = function(arg0) { // Original name: canLurkerListen, environment: var1
        _fun38605: for (var _fun38605_ip = 0;;) switch (_fun38605_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                var1 = var0 == var6;
                if (var1) {
                    _fun38605_ip = 25;
                    continue _fun38605
                }
            case 12:
                var0 = var6.isGuildStageVoice;
                var0 = var0.bind(var6)();
                var1 = !var0;
            case 25:
                var0 = !var1;
                if (var1) {
                    _fun38605_ip = 142;
                    continue _fun38605
                }
            case 31:
                var4 = _closure1_slot3;
                var2 = var4.isLurking;
                var1 = var6.guild_id;
                var1 = var2.bind(var4)(var1);
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun38605_ip = 139;
                    continue _fun38605
                }
            case 63:
                var5 = _closure1_slot9;
                var4 = var5.isPublic;
                var2 = var6.id;
                var2 = var4.bind(var5)(var2);
                var4 = !var2;
                var2 = !var4;
                if (var4) {
                    _fun38605_ip = 136;
                    continue _fun38605
                }
            case 92:
                var5 = _closure1_slot8;
                var4 = var5.can;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 10;
                var7 = var7[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var7);
                var3 = var3.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                var2 = var4.bind(var5)(var3, var6);
            case 136:
                var1 = var2;
            case 139:
                var0 = var1;
            case 142:
                return var0;
        }
    };
    var2.canLurkerListen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3051, 1416, 1216, 1372, 1410, 3050, 1377, 660, 484, 3055, 1380, 566, 2]);