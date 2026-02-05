// modules/messages/useReactionPermissions.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/useReactionPermissions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73438: for (var _fun73438_ip = 0;;) switch (_fun73438_ip) {
            case 0:
                var11 = arg0;
                var _closure2_slot0 = var11;
                var0 = null;
                var1 = var0 == var11;
                var5 = undefined;
                var13 = undefined;
                if (var1) {
                    _fun73438_ip = 27;
                    continue _fun73438
                }
            case 22:
                var13 = var11.guild_id;
            case 27:
                var _closure2_slot1 = var13;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 6;
                var2 = var12[var6];
                var10 = var7.bind(var5)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var2;
                var3 = new Array(1);
                var3[0] = var13;
                var2 = function() { // Environment: var4
                    _fun73439: for (var _fun73439_ip = 0;;) switch (_fun73439_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun73439_ip = 38;
                                continue _fun73439
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.canChatInGuild;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var10 = var9.bind(var10)(var8, var2, var3);
                var _closure2_slot2 = var10;
                var2 = var12[var6];
                var14 = var7.bind(var5)(var2);
                var9 = var14.useStateFromStores;
                var2 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var2;
                var3 = new Array(1);
                var3[0] = var13;
                var2 = function() { // Environment: var4
                    _fun73440: for (var _fun73440_ip = 0;;) switch (_fun73440_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun73440_ip = 38;
                                continue _fun73440
                            }
                        case 16:
                            var3 = _closure1_slot4;
                            var2 = var3.isLurking;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var3 = var9.bind(var14)(var8, var2, var3);
                var2 = var12[var6];
                var15 = var7.bind(var5)(var2);
                var14 = var15.useStateFromStores;
                var2 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var2;
                var8 = new Array(1);
                var8[0] = var13;
                var2 = function() { // Environment: var4
                    _fun73441: for (var _fun73441_ip = 0;;) switch (_fun73441_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun73441_ip = 38;
                                continue _fun73441
                            }
                        case 16:
                            var3 = _closure1_slot5;
                            var2 = var3.isCurrentUserGuest;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var2 = var14.bind(var15)(var9, var2, var8);
                var6 = var12[var6];
                var14 = var7.bind(var5)(var6);
                var9 = var14.useStateFromStores;
                var6 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var11;
                var4 = function() { // Environment: var4
                    _fun73442: for (var _fun73442_ip = 0;;) switch (_fun73442_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun73442_ip = 43;
                                continue _fun73442
                            }
                        case 10:
                            var4 = _closure1_slot7;
                            var3 = var4.can;
                            var2 = _closure1_slot8;
                            var2 = var2.ADD_REACTIONS;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 43:
                            return var0;
                    }
                };
                var9 = var9.bind(var14)(var8, var4, var6);
                var4 = 7;
                var4 = var12[var4];
                var6 = var7.bind(var5)(var4);
                var4 = var6.useCurrentUserAutomodQuaratinedProfile;
                var6 = var4.bind(var6)(var13);
                var4 = 8;
                var4 = var12[var4];
                var8 = var7.bind(var5)(var4);
                var4 = var8.useCurrentUserCommunicationDisabled;
                var13 = var4.bind(var8)(var13);
                var8 = _closure1_slot3;
                var4 = 2;
                var8 = var8.bind(var5)(var13, var4);
                var4 = 1;
                var8 = var8[var4];
                var4 = 9;
                var4 = var12[var4];
                var7 = var7.bind(var5)(var4);
                var4 = var7.useIsActiveChannelOrUnarchivableThread;
                var7 = var4.bind(var7)(var11);
                if (!(var0 != var11)) {
                    _fun73438_ip = 448;
                    continue _fun73438
                }
            case 338:
                var0 = {};
                var4 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 10;
                var1 = var12[var1];
                var4 = var4.bind(var5)(var1);
                var1 = {};
                var1.channel = var11;
                var1.canChat = var10;
                var10 = true;
                var1.renderReactions = var10;
                var1.canAddNewReactions = var9;
                var1.isLurking = var3;
                var1.communicationDisabled = var8;
                var1.isActiveChannelOrUnarchivableThread = var7;
                var1.isAutomodQuarantined = var6;
                var17 = var4.bind(var5)(var1);
                var18 = var0;
                var1 = copyDataProperties(var18, var17);
                var1 = 'isLurking';
                var0[var1] = var3;
                var1 = 'isGuest';
                var0[var1] = var2;
                var2 = false;
                var1 = 'isPendingMember';
                var0[var1] = var2;
                _fun73438_ip = 462;
                continue _fun73438;
            case 448:
                var0 = {
                    'disableReactionReads': true,
                    'disableReactionCreates': true,
                    'disableReactionUpdates': true,
                    'isLurking': false,
                    'isGuest': false,
                    'isPendingMember': false
                };
            case 462:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3092, 1681, 4234, 3091, 660, 566, 3097, 6850, 6717, 9246, 2]);