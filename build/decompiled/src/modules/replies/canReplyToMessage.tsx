// modules/replies/canReplyToMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun77826: for (var _fun77826_ip = 0;;) switch (_fun77826_ip) {
            case 0:
                var2 = arg0;
                var4 = arg2;
                var0 = var2.isPrivate;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun77826_ip = 71;
                    continue _fun77826
                }
            case 19:
                var3 = var4.can;
                var0 = _closure1_slot7;
                var0 = var0.SEND_MESSAGES;
                var0 = var3.bind(var4)(var0, var2);
                if (!var0) {
                    _fun77826_ip = 69;
                    continue _fun77826
                }
            case 47:
                var3 = var4.can;
                var1 = _closure1_slot7;
                var1 = var1.READ_MESSAGE_HISTORY;
                var0 = var3.bind(var4)(var1, var2);
            case 69:
                _fun77826_ip = 84;
                continue _fun77826;
            case 71:
                var1 = var2.isSystemDM;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 84:
                if (!var0) {
                    _fun77826_ip = 142;
                    continue _fun77826
                }
            case 87:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.MessageTypesSets;
                var3 = var1.REPLYABLE;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var0 = var2.bind(var3)(var1);
            case 142:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun77827: for (var _fun77827_ip = 0;;) switch (_fun77827_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var0 = arg2;
                var4 = arg4;
                var6 = var3.hasFlag;
                var2 = _closure1_slot5;
                var2 = var2.EPHEMERAL;
                var2 = var6.bind(var3)(var2);
                var3 = var3.state;
                var1 = _closure1_slot6;
                var1 = var1.SENT;
                var3 = var3 === var1;
                var1 = var5.isArchivedThread;
                var1 = var1.bind(var5)();
                var1 = !var1;
                if (var1) {
                    _fun77827_ip = 74;
                    continue _fun77827
                }
            case 71:
                var1 = var4;
            case 74:
                if (!var0) {
                    _fun77827_ip = 80;
                    continue _fun77827
                }
            case 77:
                var0 = var3;
            case 80:
                if (!var0) {
                    _fun77827_ip = 86;
                    continue _fun77827
                }
            case 83:
                var0 = !var2;
            case 86:
                if (!var0) {
                    _fun77827_ip = 95;
                    continue _fun77827
                }
            case 89:
                var2 = arg3;
                var0 = !var2;
            case 95:
                if (!var0) {
                    _fun77827_ip = 101;
                    continue _fun77827
                }
            case 98:
                var0 = var1;
            case 101:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MessageFlags;
    var _closure1_slot5 = var6;
    var3 = var3.MessageStates;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/replies/canReplyToMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun77828: for (var _fun77828_ip = 0;;) switch (_fun77828_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var6;
                var3 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var2 = var8[var2];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var2 = var4.useCanUnarchiveThread;
                var4 = var2.bind(var4)(var7);
                var2 = 7;
                var2 = var8[var2];
                var9 = var3.bind(var5)(var2);
                var3 = var9.useCurrentUserCommunicationDisabled;
                var8 = null;
                var2 = var8 == var7;
                var10 = undefined;
                if (var2) {
                    _fun77828_ip = 91;
                    continue _fun77828
                }
            case 81:
                var2 = var7.getGuildId;
                var10 = var2.bind(var7)();
            case 91:
                var11 = var8 != var10;
                var2 = undefined;
                if (!var11) {
                    _fun77828_ip = 103;
                    continue _fun77828
                }
            case 100:
                var2 = var10;
            case 103:
                var9 = var3.bind(var9)(var2);
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3.bind(var5)(var9, var2);
                var2 = 1;
                var3 = var3[var2];
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 8;
                var2 = var10[var2];
                var10 = var9.bind(var5)(var2);
                var9 = var10.useStateFromStores;
                var11 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var11;
                var0 = function() { // Environment: var0
                    _fun77829: for (var _fun77829_ip = 0;;) switch (_fun77829_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun77829_ip = 24;
                                continue _fun77829
                            }
                        case 16:
                            var1 = _closure2_slot1;
                            var0 = var3 != var1;
                        case 24:
                            if (!var0) {
                                _fun77829_ip = 55;
                                continue _fun77829
                            }
                        case 27:
                            var5 = _closure1_slot8;
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot3;
                            var1 = undefined;
                            var0 = var5.bind(var1)(var4, var3, var2);
                        case 55:
                            return var0;
                    }
                };
                var2 = var9.bind(var10)(var2, var0);
                var0 = var8 != var7;
                if (!var0) {
                    _fun77828_ip = 189;
                    continue _fun77828
                }
            case 185:
                var0 = var8 != var6;
            case 189:
                if (!var0) {
                    _fun77828_ip = 217;
                    continue _fun77828
                }
            case 192:
                var1 = _closure1_slot9;
                var17 = undefined;
                var16 = var7;
                var15 = var6;
                var14 = var2;
                var13 = var3;
                var12 = var4;
                var0 = var17[var1](var16, var15, var14, var13, var12, var11);
            case 217:
                return var0;
        }
    };
    var2.useCanReplyToMessage = var3;
    var1 = function arg0, arg1() {
        _fun77830: for (var _fun77830_ip = 0;;) switch (_fun77830_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 6;
                var1 = var8[var1];
                var4 = undefined;
                var2 = var7.bind(var4)(var1);
                var1 = var2.canUnarchiveThread;
                var3 = var1.bind(var2)(var6);
                var2 = _closure1_slot8;
                var1 = _closure1_slot3;
                var2 = var2.bind(var4)(var6, var5, var1);
                var9 = _closure1_slot4;
                var1 = var9.getCurrentUser;
                var10 = var1.bind(var9)();
                var1 = 7;
                var1 = var8[var1];
                var9 = var7.bind(var4)(var1);
                var8 = var9.userCommunicationDisabled;
                var1 = null;
                var11 = var1 == var10;
                var7 = undefined;
                if (var11) {
                    _fun77830_ip = 104;
                    continue _fun77830
                }
            case 99:
                var7 = var10.id;
            case 104:
                var10 = var6.getGuildId;
                var10 = var10.bind(var6)();
                var11 = var1 != var10;
                var1 = undefined;
                if (!var11) {
                    _fun77830_ip = 126;
                    continue _fun77830
                }
            case 123:
                var1 = var10;
            case 126:
                var8 = var8.bind(var9)(var7, var1);
                var1 = _closure1_slot9;
                var7 = _closure1_slot2;
                var0 = 2;
                var7 = var7.bind(var4)(var8, var0);
                var0 = 1;
                var13 = var7[var0];
                var17 = undefined;
                var16 = var6;
                var15 = var5;
                var14 = var2;
                var12 = var3;
                var0 = var17[var1](var16, var15, var14, var13, var12, var11);
                return var0;
        }
    };
    var2.canReplyToMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3093, 1621, 660, 483, 666, 6721, 6855, 566, 2]);