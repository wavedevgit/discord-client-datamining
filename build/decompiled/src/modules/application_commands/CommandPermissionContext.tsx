// modules/application_commands/CommandPermissionContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1, arg2() {
        _fun64594: for (var _fun64594_ip = 0;;) switch (_fun64594_ip) {
            case 0:
                var3 = arg0;
                var2 = arg2;
                var0 = arg1;
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun64594_ip = 58;
                    continue _fun64594
                }
            case 18:
                var1 = _closure1_slot5;
                var4 = var3 instanceof var1;
                var1 = !var4;
                if (!var4) {
                    _fun64594_ip = 55;
                    continue _fun64594
                }
            case 35:
                var5 = var3.guild_id;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun64594_ip = 52;
                    continue _fun64594
                }
            case 46:
                var2 = var3.nsfw;
            case 52:
                var1 = var2;
            case 55:
                var0 = var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun64595: for (var _fun64595_ip = 0;;) switch (_fun64595_ip) {
            case 0:
                var6 = arg0;
                var0 = _closure1_slot5;
                var0 = var6 instanceof var0;
                if (!var0) {
                    _fun64595_ip = 33;
                    continue _fun64595
                }
            case 17:
                var0 = var6.isPrivate;
                var0 = var0.bind(var6)();
                if (var0) {
                    _fun64595_ip = 293;
                    continue _fun64595
                }
            case 33:
                var0 = null;
                if (!(var0 != var6)) {
                    _fun64595_ip = 293;
                    continue _fun64595
                }
            case 42:
                var2 = _closure1_slot9;
                var0 = var2.computePermissions;
                var4 = var0.bind(var2)(var6);
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var8 = 11;
                var0 = var0[var8];
                var7 = undefined;
                var3 = var2.bind(var7)(var0);
                var2 = var3.has;
                var0 = _closure1_slot12;
                var0 = var0.ADMINISTRATOR;
                var0 = var2.bind(var3)(var4, var0);
                var3 = true;
                var2 = true;
                if (var0) {
                    _fun64595_ip = 274;
                    continue _fun64595
                }
            case 110:
                var0 = _closure1_slot5;
                var6 = var6 instanceof var0;
                var9 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var10 = var9.bind(var7)(var0);
                var9 = var10.has;
                var0 = _closure1_slot12;
                var0 = var0.VIEW_CHANNEL;
                var0 = var9.bind(var10)(var4, var0);
                if (var6) {
                    _fun64595_ip = 166;
                    continue _fun64595
                }
            case 159:
                var3 = var0;
                var2 = true;
                _fun64595_ip = 274;
                continue _fun64595;
            case 166:
                var5 = var0;
                if (!var0) {
                    _fun64595_ip = 210;
                    continue _fun64595
                }
            case 172:
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var9 = var6.bind(var7)(var0);
                var6 = var9.has;
                var0 = _closure1_slot12;
                var0 = var0.USE_APPLICATION_COMMANDS;
                var5 = var6.bind(var9)(var4, var0);
            case 210:
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var8 = var6.bind(var7)(var0);
                var7 = var8.has;
                var6 = _closure1_slot12;
                var0 = arg1;
                if (var0) {
                    _fun64595_ip = 256;
                    continue _fun64595
                }
            case 242:
                var0 = var6.SEND_MESSAGES;
                var0 = var7.bind(var8)(var4, var0);
                _fun64595_ip = 268;
                continue _fun64595;
            case 256:
                var6 = var6.SEND_MESSAGES_IN_THREADS;
                var0 = var7.bind(var8)(var4, var6);
            case 268:
                var2 = var0;
                var3 = var5;
            case 274:
                var0 = {};
                var0.computedPermissions = var4;
                var0.hasBaseAccessPermissions = var3;
                var0.hasSendMessagesPermission = var2;
                return var0;
            case 293:
                var0 = {
                    'computedPermissions': null,
                    'hasBaseAccessPermissions': true,
                    'hasSendMessagesPermission': true
                };
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.deserialize;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                var0.computedPermissions = var1;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var1 = function arg0() {
        _fun64596: for (var _fun64596_ip = 0;;) switch (_fun64596_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot5;
                var0 = var1 instanceof var0;
                if (var0) {
                    _fun64596_ip = 24;
                    continue _fun64596
                }
            case 17:
                var0 = var1.id;
                _fun64596_ip = 29;
                continue _fun64596;
            case 24:
                var0 = var1.guild_id;
            case 29:
                return var0;
        }
    };
    var _closure1_slot15 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ChannelRecordBase;
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
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot11 = var7;
    var4 = var4.Permissions;
    var _closure1_slot12 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/CommandPermissionContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        _fun64597: for (var _fun64597_ip = 0;;) switch (_fun64597_ip) {
            case 0:
                var11 = arg0;
                var0 = _closure1_slot5;
                var0 = var11 instanceof var0;
                var5 = var11;
                if (!var0) {
                    _fun64597_ip = 68;
                    continue _fun64597
                }
            case 20:
                var0 = var11.isThread;
                var0 = var0.bind(var11)();
                var5 = var11;
                if (!var0) {
                    _fun64597_ip = 68;
                    continue _fun64597
                }
            case 36:
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var0 = var11.parent_id;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                var5 = var11;
                if (!(var2 != var0)) {
                    _fun64597_ip = 68;
                    continue _fun64597
                }
            case 65:
                var5 = var0;
            case 68:
                var0 = null;
                var2 = var0 != var5;
                var4 = undefined;
                var7 = undefined;
                if (!var2) {
                    _fun64597_ip = 90;
                    continue _fun64597
                }
            case 81:
                var2 = _closure1_slot15;
                var7 = var2.bind(var4)(var5);
            case 90:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 9;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getViewNsfwCommandsOrDefault;
                var3 = var2.bind(var3)();
                var6 = _closure1_slot6;
                var2 = var6.getId;
                var9 = var2.bind(var6)();
                var6 = _closure1_slot10;
                var2 = var6.getCurrentUser;
                var2 = var2.bind(var6)();
                var8 = var0 == var2;
                var6 = undefined;
                if (var8) {
                    _fun64597_ip = 162;
                    continue _fun64597
                }
            case 156:
                var6 = var2.nsfwAllowed;
            case 162:
                var2 = var0 != var6;
                if (!var2) {
                    _fun64597_ip = 172;
                    continue _fun64597
                }
            case 169:
                var2 = var6;
            case 172:
                if (!(var0 != var7)) {
                    _fun64597_ip = 211;
                    continue _fun64597
                }
            case 176:
                var8 = _closure1_slot8;
                var6 = var8.getMember;
                var6 = var6.bind(var8)(var7, var9);
                var10 = var0 == var6;
                var8 = undefined;
                if (var10) {
                    _fun64597_ip = 207;
                    continue _fun64597
                }
            case 201:
                var8 = var6.roles;
            case 207:
                if (!(var0 == var8)) {
                    _fun64597_ip = 215;
                    continue _fun64597
                }
            case 211:
                var8 = new Array(0);
            case 215:
                var6 = _closure1_slot4;
                var0 = var6.isViewingRoles;
                var7 = var0.bind(var6)(var7);
                var6 = _closure1_slot14;
                var0 = _closure1_slot5;
                var0 = var11 instanceof var0;
                if (!var0) {
                    _fun64597_ip = 255;
                    continue _fun64597
                }
            case 245:
                var10 = var11.isThread;
                var0 = var10.bind(var11)();
            case 255:
                var6 = var6.bind(var4)(var5, var0);
                var0 = {};
                var0.context = var5;
                var0.userId = var9;
                var0.roleIds = var8;
                var0.isImpersonating = var7;
                var7 = arg1;
                var0.commandTypes = var7;
                var7 = var6.computedPermissions;
                var0.computedPermissions = var7;
                var7 = var6.hasBaseAccessPermissions;
                var0.hasBaseAccessPermissions = var7;
                var6 = var6.hasSendMessagesPermission;
                var0.hasSendMessagesPermission = var6;
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)(var5, var2, var3);
                var0.allowNsfw = var1;
                return var0;
        }
    };
    var2.buildPermissionContext = var4;
    var4 = function arg0, arg1() {
        _fun64598: for (var _fun64598_ip = 0;;) switch (_fun64598_ip) {
            case 0:
                var4 = arg0;
                var11 = arg1;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var11;
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var3 = new Array(1);
                var3[0] = var4;
                var2 = function() { // Environment: var0
                    _fun64599: for (var _fun64599_ip = 0;;) switch (_fun64599_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot5;
                            var2 = var3 instanceof var2;
                            if (!var2) {
                                _fun64599_ip = 68;
                                continue _fun64599
                            }
                        case 21:
                            var3 = _closure2_slot0;
                            var2 = var3.isThread;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun64599_ip = 68;
                                continue _fun64599
                            }
                        case 38:
                            var3 = _closure1_slot7;
                            var2 = var3.getChannel;
                            var0 = _closure2_slot0;
                            var0 = var0.parent_id;
                            var0 = var2.bind(var3)(var0);
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun64599_ip = 72;
                                continue _fun64599
                            }
                        case 68:
                            var0 = _closure2_slot0;
                        case 72:
                            return var0;
                    }
                };
                var10 = var5.bind(var6)(var2, var3);
                var _closure2_slot2 = var10;
                var2 = null;
                var3 = var2 != var10;
                var9 = undefined;
                var2 = undefined;
                if (!var3) {
                    _fun64598_ip = 73;
                    continue _fun64598
                }
            case 64:
                var3 = _closure1_slot15;
                var2 = var3.bind(var9)(var10);
            case 73:
                var _closure2_slot3 = var2;
                var3 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 9;
                var2 = var12[var2];
                var5 = var3.bind(var9)(var2);
                var2 = var5.useViewNsfwCommandsOrDefault;
                var5 = var2.bind(var5)();
                var _closure2_slot4 = var5;
                var2 = 10;
                var6 = var12[var2];
                var13 = var3.bind(var9)(var6);
                var8 = var13.useStateFromStores;
                var6 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var8.bind(var13)(var7, var6);
                var _closure2_slot5 = var7;
                var6 = var12[var2];
                var14 = var3.bind(var9)(var6);
                var13 = var14.useStateFromStores;
                var6 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var0
                    _fun64601: for (var _fun64601_ip = 0;;) switch (_fun64601_ip) {
                        case 0:
                            var1 = _closure1_slot10;
                            var0 = var1.getCurrentUser;
                            var2 = var0.bind(var1)();
                            var0 = null;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun64601_ip = 33;
                                continue _fun64601
                            }
                        case 27:
                            var1 = var2.nsfwAllowed;
                        case 33:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun64601_ip = 43;
                                continue _fun64601
                            }
                        case 40:
                            var0 = var1;
                        case 43:
                            return var0;
                    }
                };
                var6 = var13.bind(var14)(var8, var6);
                var _closure2_slot6 = var6;
                var8 = var12[var2];
                var15 = var3.bind(var9)(var8);
                var14 = var15.useStateFromStoresArray;
                var8 = _closure1_slot8;
                var13 = new Array(1);
                var13[0] = var8;
                var8 = function() { // Environment: var0
                    _fun64602: for (var _fun64602_ip = 0;;) switch (_fun64602_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun64602_ip = 59;
                                continue _fun64602
                            }
                        case 13:
                            var4 = _closure1_slot8;
                            var3 = var4.getMember;
                            var2 = _closure2_slot3;
                            var0 = _closure2_slot5;
                            var2 = var3.bind(var4)(var2, var0);
                            var3 = var1 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun64602_ip = 55;
                                continue _fun64602
                            }
                        case 49:
                            var0 = var2.roles;
                        case 55:
                            if (!(var1 == var0)) {
                                _fun64602_ip = 63;
                                continue _fun64602
                            }
                        case 59:
                            var0 = new Array(0);
                        case 63:
                            return var0;
                    }
                };
                var8 = var14.bind(var15)(var13, var8);
                var _closure2_slot7 = var8;
                var2 = var12[var2];
                var12 = var3.bind(var9)(var2);
                var9 = var12.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.isViewingRoles;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var12)(var3, var2);
                var _closure2_slot8 = var9;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(8);
                var1[0] = var11;
                var1[1] = var10;
                var1[2] = var9;
                var1[3] = var8;
                var1[4] = var7;
                var1[5] = var6;
                var1[6] = var5;
                var1[7] = var4;
                var0 = function() { // Environment: var0
                    _fun64604: for (var _fun64604_ip = 0;;) switch (_fun64604_ip) {
                        case 0:
                            var4 = _closure1_slot14;
                            var3 = _closure2_slot2;
                            var5 = _closure2_slot0;
                            var0 = _closure1_slot5;
                            var0 = var5 instanceof var0;
                            if (!var0) {
                                _fun64604_ip = 43;
                                continue _fun64604
                            }
                        case 29:
                            var6 = _closure2_slot0;
                            var5 = var6.isThread;
                            var0 = var5.bind(var6)();
                        case 43:
                            var5 = undefined;
                            var0 = var4.bind(var5)(var3, var0);
                            var7 = var0.computedPermissions;
                            var6 = var0.hasBaseAccessPermissions;
                            var3 = var0.hasSendMessagesPermission;
                            var0 = {};
                            var4 = _closure2_slot2;
                            var0.context = var4;
                            var8 = _closure2_slot5;
                            var0.userId = var8;
                            var8 = _closure2_slot7;
                            var0.roleIds = var8;
                            var8 = _closure2_slot1;
                            var0.commandTypes = var8;
                            var8 = _closure2_slot8;
                            var0.isImpersonating = var8;
                            var0.computedPermissions = var7;
                            var0.hasBaseAccessPermissions = var6;
                            var0.hasSendMessagesPermission = var3;
                            var3 = _closure1_slot13;
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot4;
                            var1 = var3.bind(var5)(var4, var2, var1);
                            var0.allowNsfw = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.usePermissionContext = var4;
    var3 = function arg0, arg1() {
        _fun64605: for (var _fun64605_ip = 0;;) switch (_fun64605_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot5;
                var0 = var5 instanceof var0;
                if (!var0) {
                    _fun64605_ip = 39;
                    continue _fun64605
                }
            case 17:
                var1 = null;
                var3 = var1 == var5;
                var4 = undefined;
                var0 = undefined;
                if (var3) {
                    _fun64605_ip = 35;
                    continue _fun64605
                }
            case 30:
                var0 = var5.guild_id;
            case 35:
                if (!(var1 != var0)) {
                    _fun64605_ip = 78;
                    continue _fun64605
                }
            case 39:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 12;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var6.bind(var0)(var3);
                var0 = var0.InteractionContextType;
                var0 = var0.GUILD;
                _fun64605_ip = 201;
                continue _fun64605;
            case 78:
                var3 = var1 == var5;
                var6 = undefined;
                if (var3) {
                    _fun64605_ip = 92;
                    continue _fun64605
                }
            case 87:
                var6 = var5.type;
            case 92:
                var3 = _closure1_slot11;
                var3 = var3.DM;
                if (!(var6 === var3)) {
                    _fun64605_ip = 132;
                    continue _fun64605
                }
            case 106:
                var1 = var1 == var5;
                var3 = undefined;
                if (var1) {
                    _fun64605_ip = 125;
                    continue _fun64605
                }
            case 115:
                var1 = var5.getRecipientId;
                var3 = var1.bind(var5)();
            case 125:
                var1 = arg1;
                if (!(var3 !== var1)) {
                    _fun64605_ip = 166;
                    continue _fun64605
                }
            case 132:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 12;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.InteractionContextType;
                var1 = var1.PRIVATE_CHANNEL;
                _fun64605_ip = 198;
                continue _fun64605;
            case 166:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.InteractionContextType;
                var1 = var2.BOT_DM;
            case 198:
                var0 = var1;
            case 201:
                return var0;
        }
    };
    var2.computeCommandContextType = var3;
    var2.getContextGuildId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1675, 1376, 1216, 1372, 1683, 3093, 1621, 660, 8025, 566, 484, 1647, 2]);