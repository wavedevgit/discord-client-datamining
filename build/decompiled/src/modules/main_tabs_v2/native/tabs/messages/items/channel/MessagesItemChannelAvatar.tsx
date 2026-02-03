// modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
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
    var3 = var3.MUTED_OPACITY_CONTENT;
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
    var3 = function(arg0) { // Environment: var1
        _fun101288: for (var _fun101288_ip = 0;;) switch (_fun101288_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 9;
                var7 = var6[var2];
                var4 = undefined;
                var7 = var5.bind(var4)(var7);
                var7 = var7.radii;
                var7 = var7.round;
                var1.borderRadius = var7;
                var7 = var6[var2];
                var7 = var5.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_8;
                var1.marginRight = var7;
                var7 = var6[var2];
                var7 = var5.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_32;
                var1.width = var7;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_32;
                var1.height = var2;
                var2 = 1;
                var4 = arg0;
                if (!var4) {
                    _fun101288_ip = 129;
                    continue _fun101288
                }
            case 125:
                var2 = _closure1_slot8;
            case 129:
                var1.opacity = var2;
                var0.avatar = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun101289: for (var _fun101289_ip = 0;;) switch (_fun101289_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.channel;
                var _closure2_slot0 = var7;
                var3 = var1.channelSelected;
                var2 = var1.hasUnreadMessages;
                var _closure2_slot1 = var2;
                var11 = var1.isStreaming;
                var2 = var1.muted;
                var6 = var1.ignored;
                var5 = var1.blocked;
                var9 = var1.status;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var1 = _closure1_slot10;
                if (var2) {
                    _fun101289_ip = 82;
                    continue _fun101289
                }
            case 79:
                var2 = var6;
            case 82:
                if (var2) {
                    _fun101289_ip = 88;
                    continue _fun101289
                }
            case 85:
                var2 = var5;
            case 88:
                if (!var2) {
                    _fun101289_ip = 94;
                    continue _fun101289
                }
            case 91:
                var2 = !var3;
            case 94:
                var5 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                _closure2_slot2 = var1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var6 = var3[var1];
                var13 = var2.bind(var4)(var6);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var6;
                var6 = function() { // Environment: var0
                    _fun101290: for (var _fun101290_ip = 0;;) switch (_fun101290_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getTypingUsers;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            var5 = var0;
                            for (var2 in var5)
                                case 41: {
                                    case 50: var1 = var2;
                                    var0 = _closure2_slot2;
                                    if (var1 === var0) {
                                        _fun101290_ip = 41;
                                        continue _fun101290
                                    }
                                    case 61: var0 = true;
                                    return var0;
                                }
                        case 65:
                            var0 = false;
                            return var0;
                    }
                };
                var10 = var12.bind(var13)(var10, var6);
                _closure2_slot3 = var10;
                var6 = var3[var1];
                var14 = var2.bind(var4)(var6);
                var13 = var14.useStateFromStores;
                var6 = _closure1_slot3;
                var12 = new Array(1);
                var12[0] = var6;
                var6 = function() { // Environment: var0
                    _fun101291: for (var _fun101291_ip = 0;;) switch (_fun101291_ip) {
                        case 0:
                            var0 = _closure1_slot3;
                            var0 = var0.useReducedMotion;
                            var0 = !var0;
                            if (!var0) {
                                _fun101291_ip = 36;
                                continue _fun101291
                            }
                        case 19:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun101291_ip = 33;
                                continue _fun101291
                            }
                        case 29:
                            var1 = _closure2_slot1;
                        case 33:
                            var0 = var1;
                        case 36:
                            return var0;
                    }
                };
                var6 = var13.bind(var14)(var12, var6);
                var12 = var3[var1];
                var15 = var2.bind(var4)(var12);
                var14 = var15.useStateFromStores;
                var12 = _closure1_slot7;
                var13 = new Array(1);
                var13[0] = var12;
                var12 = function() { // Environment: var0
                    _fun101292: for (var _fun101292_ip = 0;;) switch (_fun101292_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.getUser;
                            var4 = _closure2_slot0;
                            var0 = var4.isDM;
                            var5 = var0.bind(var4)();
                            var4 = true;
                            var0 = undefined;
                            if (!(var4 === var5)) {
                                _fun101292_ip = 52;
                                continue _fun101292
                            }
                        case 38:
                            var4 = _closure2_slot0;
                            var3 = var4.getRecipientId;
                            var0 = var3.bind(var4)();
                        case 52:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var15 = var14.bind(var15)(var13, var12);
                var12 = var3[var1];
                var17 = var2.bind(var4)(var12);
                var16 = var17.useStateFromStores;
                var12 = _closure1_slot5;
                var14 = new Array(1);
                var14[0] = var12;
                var13 = function() { // Environment: var0
                    _fun101293: for (var _fun101293_ip = 0;;) switch (_fun101293_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.isDM;
                            var0 = var0.bind(var2)();
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun101293_ip = 58;
                                continue _fun101293
                            }
                        case 26:
                            var3 = _closure1_slot5;
                            var2 = var3.isMobileOnline;
                            var4 = _closure2_slot0;
                            var1 = var4.getRecipientId;
                            var1 = var1.bind(var4)();
                            var0 = var2.bind(var3)(var1);
                        case 58:
                            return var0;
                    }
                };
                var16 = var16.bind(var17)(var14, var13);
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var1 = new Array(1);
                var1[0] = var12;
                var0 = function() { // Environment: var0
                    _fun101294: for (var _fun101294_ip = 0;;) switch (_fun101294_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.isDM;
                            var0 = var0.bind(var2)();
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun101294_ip = 58;
                                continue _fun101294
                            }
                        case 26:
                            var3 = _closure1_slot5;
                            var2 = var3.isVROnline;
                            var4 = _closure2_slot0;
                            var1 = var4.getRecipientId;
                            var1 = var1.bind(var4)();
                            var0 = var2.bind(var3)(var1);
                        case 58:
                            return var0;
                    }
                };
                var14 = var2.bind(var3)(var1, var0);
                var0 = var7.isGroupDM;
                var0 = var0.bind(var7)();
                if (var0) {
                    _fun101289_ip = 503;
                    continue _fun101289
                }
            case 339:
                var12 = null;
                var1 = var12 != var15;
                var0 = null;
                if (!var1) {
                    _fun101289_ip = 501;
                    continue _fun101289
                }
            case 353:
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var13 = 12;
                var1 = var1[var13];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.user = var15;
                var17 = var15.avatarDecoration;
                var1.avatarDecoration = var17;
                var1.guildId = var4;
                var1.isMobileOnline = var16;
                var1.isVROnline = var14;
                var14 = var15.isSystemUser;
                var14 = var14.bind(var15)();
                var12 = null;
                if (var14) {
                    _fun101289_ip = 426;
                    continue _fun101289
                }
            case 423:
                var12 = var9;
            case 426:
                var1.status = var12;
                var1.streaming = var11;
                var11 = var5.avatar;
                var1.style = var11;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var13];
                var11 = var12.bind(var4)(var11);
                var11 = var11.AvatarSizes;
                var11 = var11.REFRESH_MEDIUM_32;
                var1.size = var11;
                var1.animate = var6;
                var1.typing = var10;
                var10 = true;
                var1.autoStatusCutout = var10;
                var0 = var3.bind(var4)(var2, var1);
            case 501:
                _fun101289_ip = 590;
                continue _fun101289;
            case 503:
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 11;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.status = var9;
                var9 = _closure1_slot0;
                var8 = 12;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.REFRESH_MEDIUM_32;
                var1.size = var8;
                var1.channel = var7;
                var1.animate = var6;
                var5 = var5.avatar;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 590:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 1216, 3601, 11622, 1613, 8781, 33, 1297, 671, 566, 9020, 5447, 2]);