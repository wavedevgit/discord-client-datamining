// modules/guilds_bar/native/GuildsBarDirectMessage.tsx
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.GUILD_ITEM_SIZE;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.width = var10;
    var9.height = var10;
    var3.dm = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun101165: for (var _fun101165_ip = 0;;) switch (_fun101165_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channelId;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot10;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 9;
                var1 = var4[var0];
                var6 = var5.bind(var3)(var1);
                var1 = var6.useGuildsBarAnimatedWrapperStyles;
                var8 = true;
                var14 = var1.bind(var6)(var8, var8);
                var1 = 10;
                var6 = var4[var1];
                var11 = var5.bind(var3)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var2
                    var2 = _closure1_slot5;
                    var1 = var2.getMentionCountForPrivateChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.count;
                    return var0;
                };
                var11 = var10.bind(var11)(var7, var6);
                var _closure2_slot1 = var11;
                var1 = var4[var1];
                var7 = var5.bind(var3)(var1);
                var6 = var7.useStateFromStoresObject;
                var1 = _closure1_slot4;
                var5 = new Array(3);
                var5[0] = var1;
                var1 = _closure1_slot7;
                var5[1] = var1;
                var1 = _closure1_slot6;
                var5[2] = var1;
                var1 = function() { // Environment: var2
                    _fun101167: for (var _fun101167_ip = 0;;) switch (_fun101167_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot0;
                            var3 = var2.bind(var3)(var1);
                            var1 = null;
                            var2 = var1 == var3;
                            var5 = undefined;
                            var7 = undefined;
                            if (var2) {
                                _fun101167_ip = 42;
                                continue _fun101167
                            }
                        case 37:
                            var7 = var3.type;
                        case 42:
                            var2 = _closure1_slot8;
                            var4 = var2.DM;
                            var2 = undefined;
                            if (!(var7 === var4)) {
                                _fun101167_ip = 83;
                                continue _fun101167
                            }
                        case 58:
                            var8 = _closure1_slot7;
                            var7 = var8.getUser;
                            var4 = var3.getRecipientId;
                            var4 = var4.bind(var3)();
                            var2 = var7.bind(var8)(var4);
                        case 83:
                            if (!(var1 == var3)) {
                                _fun101167_ip = 144;
                                continue _fun101167
                            }
                        case 87:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 12;
                            var4 = var9[var1];
                            var4 = var8.bind(var5)(var4);
                            var7 = var4.intl;
                            var4 = var7.string;
                            var1 = var9[var1];
                            var1 = var8.bind(var5)(var1);
                            var1 = var1.t;
                            var1 = var1.zLZPmk;
                            var1 = var4.bind(var7)(var1);
                            _fun101167_ip = 195;
                            continue _fun101167;
                        case 144:
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 11;
                            var0 = var7[var0];
                            var4 = var4.bind(var5)(var0);
                            var0 = {};
                            var0.channel = var3;
                            var6 = _closure2_slot1;
                            var7 = 0;
                            var7 = var6 > var7;
                            var0.unread = var7;
                            var0.mentionCount = var6;
                            var1 = var4.bind(var5)(var0);
                        case 195:
                            var0 = {};
                            var0.channel = var3;
                            var0.dmRecipient = var2;
                            var0.label = var1;
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var5, var1);
                var10 = var1.channel;
                var _closure2_slot2 = var10;
                var7 = var1.dmRecipient;
                var _closure2_slot3 = var7;
                var13 = var1.label;
                var1 = _closure1_slot1;
                var5 = 13;
                var5 = var4[var5];
                var6 = var1.bind(var3)(var5);
                var5 = {};
                var5.mentionCount = var11;
                var6 = var6.bind(var3)(var5);
                var5 = var6.badge;
                var6 = var6.cutouts;
                var16 = _closure1_slot3;
                var15 = var16.useMemo;
                var11 = new Array(2);
                var11[0] = var10;
                var11[1] = var7;
                var7 = function() { // Environment: var2
                    _fun101168: for (var _fun101168_ip = 0;;) switch (_fun101168_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = null;
                            var1 = var3 != var0;
                            var4 = undefined;
                            var0 = undefined;
                            if (!var1) {
                                _fun101168_ip = 70;
                                continue _fun101168
                            }
                        case 20:
                            var5 = _closure2_slot2;
                            var1 = var5.isDM;
                            var1 = var1.bind(var5)();
                            var0 = undefined;
                            if (!var1) {
                                _fun101168_ip = 70;
                                continue _fun101168
                            }
                        case 39:
                            var1 = _closure2_slot3;
                            var3 = var3 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun101168_ip = 67;
                                continue _fun101168
                            }
                        case 52:
                            var3 = _closure2_slot3;
                            var2 = var3.getAvatarSource;
                            var1 = var2.bind(var3)(var4);
                        case 67:
                            var0 = var1;
                        case 70:
                            return var0;
                    }
                };
                var11 = var15.bind(var16)(var7, var11);
                var15 = var16.useMemo;
                var7 = new Array(1);
                var7[0] = var10;
                var2 = function() { // Environment: var2
                    var0 = {};
                    var2 = function() {
                        _fun101170: for (var _fun101170_ip = 0;;) switch (_fun101170_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun101170_ip = 58;
                                    continue _fun101170
                                }
                            case 13:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.transitionToChannel;
                                var0 = _closure2_slot2;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                            case 58:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onPress = var2;
                    var1 = function() {
                        _fun101171: for (var _fun101171_ip = 0;;) switch (_fun101171_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun101171_ip = 58;
                                    continue _fun101171
                                }
                            case 13:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 15;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.openChannelLongPressActionSheet;
                                var0 = _closure2_slot2;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                            case 58:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onLongPress = var1;
                    return var0;
                };
                var7 = var15.bind(var16)(var2, var7);
                var2 = _closure1_slot9;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {
                    'selected': false,
                    'circle': null,
                    'unread': true
                };
                var4 = null;
                var15 = var4 != var10;
                if (!var15) {
                    _fun101165_ip = 333;
                    continue _fun101165
                }
            case 323:
                var16 = var10.isMultiUserDM;
                var15 = var16.bind(var10)();
            case 333:
                var15 = !var15;
                var0.circle = var15;
                var0.styles = var14;
                var0.label = var13;
                var0.overState = var3;
                var0.config = var7;
                var0.cutouts = var6;
                var0.externalChildren = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 16;
                var5 = var13[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.channel = var10;
                var5 = var7.bind(var3)(var6, var5);
                var0.expandedChildren = var5;
                if (!(var4 != var10)) {
                    _fun101165_ip = 428;
                    continue _fun101165
                }
            case 415:
                var5 = var10.isMultiUserDM;
                var5 = var5.bind(var10)();
                if (var5) {
                    _fun101165_ip = 485;
                    continue _fun101165
                }
            case 428:
                var5 = var4 != var11;
                var4 = null;
                if (!var5) {
                    _fun101165_ip = 483;
                    continue _fun101165
                }
            case 437:
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 19;
                var5 = var13[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var12 = var12.dm;
                var5.style = var12;
                var5.source = var11;
                var4 = var7.bind(var3)(var6, var5);
            case 483:
                _fun101165_ip = 584;
                continue _fun101165;
            case 485:
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 17;
                var5 = var11[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.channel = var10;
                var10 = _closure1_slot0;
                var9 = 18;
                var12 = var11[var9];
                var12 = var10.bind(var3)(var12);
                var12 = var12.AvatarSizes;
                var12 = var12.LARGE_48;
                var5.size = var12;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.REFRESH_MEDIUM_32;
                var5.pileSizeOverride = var9;
                var5.animate = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 584:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarDirectMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 8665, 3102, 1621, 13152, 660, 33, 1297, 13163, 566, 7902, 1234, 13165, 3945, 9137, 13196, 9066, 5457, 4705, 2]);