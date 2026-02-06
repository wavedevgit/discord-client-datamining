// modules/launchpad/native/LaunchPadUnreadServers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = _closure1_slot12;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var7.guildHistorySeparatorWrapper;
        var0.style = var5;
        var6 = _closure1_slot10;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var7.guildHistorySeparator;
        var4.style = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var3 = _closure1_slot10;
        var2 = _closure1_slot15;
        var1 = undefined;
        var0 = {};
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var3 = {};
    var11 = 8;
    var3.marginTop = var11;
    var6.listWrapper = var3;
    var3 = {
        'marginBottom': 4,
        'flexShrink': 0
    };
    var6.list = var3;
    var3 = {};
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var10;
    var6.maskStrokeStyle = var3;
    var3 = {
        'position': 'relative',
        'paddingVertical': 2,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var6.privateChannelWrapper = var3;
    var3 = 24;
    var10 = {
        'width': 48,
        'height': 48,
        'borderRadius': 24,
        'overflow': 'hidden'
    };
    var6.privateChannelIcon = var10;
    var10 = {
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'marginLeft': 6,
        'marginTop': 6
    };
    var6.badgeWrapper = var10;
    var10 = {
        'paddingVertical': 2,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var6.guildWrapper = var10;
    var10 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var6.guildHistorySeparatorWrapper = var10;
    var10 = {
        'width': 2,
        'height': 32
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10.borderRadius = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_STRONG;
    var10.backgroundColor = var11;
    var6.guildHistorySeparator = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot12 = var6;
    var8 = var7.memo;
    var6 = function arg0() {
        var1 = arg0;
        var11 = var1.guildId;
        var _closure2_slot0 = var11;
        var10 = var1.selected;
        var1 = var1.onGuildSelect;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot12;
        var3 = undefined;
        var7 = var2.bind(var3)();
        var5 = _closure1_slot3;
        var6 = var5.useCallback;
        var2 = new Array(2);
        var2[0] = var11;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var9 = var6.bind(var5)(var1, var2);
        var2 = var5.useCallback;
        var1 = new Array(1);
        var1[0] = var11;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.transitionToGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var8 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot10;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var7.guildWrapper;
        var0.style = var5;
        var6 = _closure1_slot10;
        var5 = _closure1_slot1;
        var12 = _closure1_slot2;
        var4 = 10;
        var4 = var12[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {
            'size': 48,
            'borderRadius': 16
        };
        var4.guildId = var11;
        var4.selected = var10;
        var4.onPress = var9;
        var4.onLongPress = var8;
        var7 = var7.maskStrokeStyle;
        var7 = var7.backgroundColor;
        var4.backgroundColor = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var6 = var8.bind(var7)(var6);
    var _closure1_slot13 = var6;
    var8 = var7.memo;
    var6 = function arg0() {
        _fun110112: for (var _fun110112_ip = 0;;) switch (_fun110112_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channelId;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot12;
                var4 = undefined;
                var13 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
                var1 = var5[var0];
                var8 = var3.bind(var4)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var2
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var7.bind(var8)(var6, var1);
                var _closure2_slot1 = var1;
                var6 = var5[var0];
                var9 = var3.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var2
                    _fun110114: for (var _fun110114_ip = 0;;) switch (_fun110114_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun110114_ip = 69;
                                continue _fun110114
                            }
                        case 18:
                            var4 = _closure2_slot1;
                            var2 = var4.isPrivate;
                            var2 = var2.bind(var4)();
                            var0 = undefined;
                            if (!var2) {
                                _fun110114_ip = 69;
                                continue _fun110114
                            }
                        case 37:
                            var3 = _closure1_slot8;
                            var2 = var3.getUser;
                            var4 = _closure2_slot1;
                            var1 = var4.getRecipientId;
                            var1 = var1.bind(var4)();
                            var0 = var2.bind(var3)(var1);
                        case 69:
                            return var0;
                    }
                };
                var8 = var8.bind(var9)(var7, var6);
                var _closure2_slot2 = var8;
                var0 = var5[var0];
                var6 = var3.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var2
                    _fun110115: for (var _fun110115_ip = 0;;) switch (_fun110115_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = 0;
                            if (!var2) {
                                _fun110115_ip = 45;
                                continue _fun110115
                            }
                        case 18:
                            var3 = _closure1_slot7;
                            var2 = var3.getMentionCount;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 45:
                            return var0;
                    }
                };
                var15 = var5.bind(var6)(var3, var0);
                var0 = null;
                var3 = var0 == var1;
                var5 = undefined;
                if (var3) {
                    _fun110112_ip = 179;
                    continue _fun110112
                }
            case 174:
                var5 = var1.type;
            case 179:
                var3 = _closure1_slot9;
                var3 = var3.DM;
                if (!(var5 === var3)) {
                    _fun110112_ip = 200;
                    continue _fun110112
                }
            case 193:
                if (!(var0 == var8)) {
                    _fun110112_ip = 385;
                    continue _fun110112
                }
            case 200:
                if (!(var0 != var1)) {
                    _fun110112_ip = 217;
                    continue _fun110112
                }
            case 204:
                var3 = var1.isGroupDM;
                var3 = var3.bind(var1)();
                if (var3) {
                    _fun110112_ip = 315;
                    continue _fun110112
                }
            case 217:
                var3 = var0 != var1;
                var6 = undefined;
                if (!var3) {
                    _fun110112_ip = 464;
                    continue _fun110112
                }
            case 229:
                var7 = _closure1_slot10;
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 14;
                var3 = var12[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var11 = var13.privateChannelIcon;
                var9 = new Array(1);
                var9[0] = var11;
                var3.style = var9;
                var11 = _closure1_slot0;
                var9 = 15;
                var9 = var12[var9];
                var11 = var11.bind(var4)(var9);
                var9 = var11.getChannelIconSource;
                var9 = var9.bind(var11)(var1);
                var3.source = var9;
                var6 = var7.bind(var4)(var5, var3);
                _fun110112_ip = 464;
                continue _fun110112;
            case 315:
                var7 = _closure1_slot10;
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 13;
                var3 = var12[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.channel = var1;
                var11 = _closure1_slot0;
                var9 = 12;
                var9 = var12[var9];
                var9 = var11.bind(var4)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.LARGE_48;
                var3.size = var9;
                var6 = var7.bind(var4)(var5, var3);
                _fun110112_ip = 464;
                continue _fun110112;
            case 385:
                var7 = _closure1_slot10;
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 12;
                var3 = var12[var9];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var11 = var13.privateChannelIcon;
                var3.style = var11;
                var3.user = var8;
                var3.guildId = var4;
                var11 = _closure1_slot0;
                var9 = var12[var9];
                var9 = var11.bind(var4)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.LARGE_48;
                var3.size = var9;
                var6 = var7.bind(var4)(var5, var3);
            case 464:
                var7 = _closure1_slot3;
                var5 = var7.useCallback;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var1;
                var2 = function() { // Environment: var2
                    _fun110116: for (var _fun110116_ip = 0;;) switch (_fun110116_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun110116_ip = 161;
                                continue _fun110116
                            }
                        case 16:
                            var0 = _closure2_slot1;
                            var4 = var0.type;
                            var1 = _closure1_slot9;
                            var1 = var1.DM;
                            if (!(var4 === var1)) {
                                _fun110116_ip = 50;
                                continue _fun110116
                            }
                        case 42:
                            var1 = _closure2_slot2;
                            if (!(var2 == var1)) {
                                _fun110116_ip = 104;
                                continue _fun110116
                            }
                        case 50:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var2);
                            var4 = var5.transitionToChannel;
                            var1 = _closure2_slot1;
                            var2 = var1.id;
                            var1 = {};
                            var6 = true;
                            var1.navigationReplace = var6;
                            var1 = var4.bind(var5)(var2, var1);
                            _fun110116_ip = 161;
                            continue _fun110116;
                        case 104:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.openPrivateChannel;
                            var0 = {};
                            var3 = _closure2_slot2;
                            var4 = var3.id;
                            var3 = new Array(1);
                            var3[0] = var4;
                            var0.recipientIds = var3;
                            var0 = var1.bind(var2)(var0);
                        case 161:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var7)(var2, var3);
                var1 = var0 != var1;
                var0 = null;
                if (!var1) {
                    _fun110112_ip = 665;
                    continue _fun110112
                }
            case 510:
                var3 = _closure1_slot11;
                var2 = _closure1_slot4;
                var1 = {};
                var1.onPress = var5;
                var5 = var13.privateChannelWrapper;
                var1.style = var5;
                var5 = 'button';
                var1.accessibilityRole = var5;
                var14 = true;
                var1.accessible = var14;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 0;
                var6 = var15 > var6;
                if (!var6) {
                    _fun110112_ip = 651;
                    continue _fun110112
                }
            case 565:
                var9 = _closure1_slot10;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var13.badgeWrapper;
                var7.style = var11;
                var12 = _closure1_slot10;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 18;
                var10 = var16[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var10.value = var15;
                var10.unread = var14;
                var13 = var13.maskStrokeStyle;
                var13 = var13.backgroundColor;
                var10.backgroundColor = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 651:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 665:
                return var0;
        }
    };
    var6 = var8.bind(var7)(var6);
    var _closure1_slot14 = var6;
    var6 = var7.memo;
    var1 = function arg0() {
        _fun110117: for (var _fun110117_ip = 0;;) switch (_fun110117_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.selectedGuildId;
                var _closure2_slot0 = var7;
                var0 = var2.setSelectedGuild;
                var _closure2_slot1 = var0;
                var11 = var2.unreadPrivateChannelIds;
                var _closure2_slot2 = var11;
                var13 = var2.unreadGuilds;
                var _closure2_slot3 = var13;
                var12 = var2.guildHistory;
                var _closure2_slot4 = var12;
                var3 = var2.visible;
                var _closure2_slot5 = var3;
                var2 = _closure1_slot12;
                var4 = undefined;
                var17 = var2.bind(var4)();
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var10 = 19;
                var2 = var2[var10];
                var2 = var5.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var9 = var2.width;
                var5 = _closure1_slot3;
                var6 = var5.useRef;
                var2 = -1;
                var2 = var6.bind(var5)(var2);
                var _closure2_slot6 = var2;
                var6 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var0;
                var2[1] = var7;
                var0 = function(arg0) { // Environment: var1
                    _fun110118: for (var _fun110118_ip = 0;;) switch (_fun110118_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var1 = 0;
                            if (!(!(var3 >= var1))) {
                                _fun110118_ip = 117;
                                continue _fun110118
                            }
                        case 21:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 20;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.bind(var1)(var2);
                            if (!var3) {
                                _fun110118_ip = 117;
                                continue _fun110118
                            }
                        case 54:
                            var4 = _closure2_slot1;
                            var5 = _closure2_slot0;
                            var3 = undefined;
                            if (!(var2 !== var5)) {
                                _fun110118_ip = 71;
                                continue _fun110118
                            }
                        case 68:
                            var3 = var2;
                        case 71:
                            var3 = var4.bind(var1)(var3);
                            var4 = _closure2_slot6;
                            var3 = global;
                            var6 = var3.setTimeout;
                            var5 = function() { // Environment: var3
                                var0 = global;
                                var3 = var0.clearTimeout;
                                var2 = _closure2_slot6;
                                var1 = var2.current;
                                var0 = undefined;
                                var1 = var3.bind(var0)(var1);
                                var1 = -1;
                                var2.current = var1;
                                return var0;
                            };
                            var3 = 400;
                            var3 = var6.bind(var1)(var5, var3);
                            var4.current = var3;
                            return var1;
                        case 117:
                            var1 = global;
                            var4 = var1.clearTimeout;
                            var1 = _closure2_slot6;
                            var0 = var1.current;
                            var3 = undefined;
                            var0 = var4.bind(var3)(var0);
                            var0 = -1;
                            var1.current = var0;
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 9;
                            var0 = var4[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.transitionToGuild;
                            var0 = var0.bind(var1)(var2);
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var5)(var0, var2);
                var _closure2_slot7 = var2;
                var8 = var5.useEffect;
                var6 = function() { // Environment: var1
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var0 = _closure2_slot6;
                        var1 = var0.current;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var8.bind(var5)(var6, var0);
                var6 = var5.useRef;
                var0 = null;
                var18 = var6.bind(var5)(var0);
                var _closure2_slot8 = var18;
                var8 = var5.useEffect;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var1
                    _fun110122: for (var _fun110122_ip = 0;;) switch (_fun110122_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun110122_ip = 38;
                                continue _fun110122
                            }
                        case 10:
                            var0 = _closure2_slot8;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun110122_ip = 38;
                                continue _fun110122
                            }
                        case 25:
                            var1 = var2.scrollToTop;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var8.bind(var5)(var3, var6);
                var6 = var5.useCallback;
                var3 = new Array(5);
                var3[0] = var13;
                var3[1] = var11;
                var3[2] = var7;
                var3[3] = var2;
                var3[4] = var12;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun110123: for (var _fun110123_ip = 0;;) switch (_fun110123_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = arg1;
                            var0 = 0;
                            if (!(var0 !== var2)) {
                                _fun110123_ip = 112;
                                continue _fun110123
                            }
                        case 12:
                            var0 = 1;
                            if (!(!(var2 >= var0))) {
                                _fun110123_ip = 23;
                                continue _fun110123
                            }
                        case 19:
                            var3 = null;
                            return var3;
                        case 23:
                            if (!(var0 !== var2)) {
                                _fun110123_ip = 40;
                                continue _fun110123
                            }
                        case 27:
                            var0 = _closure2_slot4;
                            var7 = var0[var1];
                            _fun110123_ip = 51;
                            continue _fun110123;
                        case 40:
                            var0 = _closure2_slot3;
                            var7 = var0[var1];
                        case 51:
                            var0 = null;
                            var0 = var0 != var7;
                            if (!var0) {
                                _fun110123_ip = 110;
                                continue _fun110123
                            }
                        case 60:
                            var5 = _closure1_slot10;
                            var4 = _closure1_slot13;
                            var3 = {};
                            var3.guildId = var7;
                            var6 = _closure2_slot0;
                            var6 = var6 === var7;
                            var3.selected = var6;
                            var2 = _closure2_slot7;
                            var3.onGuildSelect = var2;
                            var2 = undefined;
                            var0 = var5.bind(var2)(var4, var3);
                        case 110:
                            return var0;
                        case 112:
                            var0 = _closure2_slot2;
                            var1 = var0[var1];
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun110123_ip = 157;
                                continue _fun110123
                            }
                        case 132:
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot14;
                            var2 = {};
                            var2.channelId = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 157:
                            return var0;
                    }
                };
                var16 = var6.bind(var5)(var2, var3);
                var3 = var5.useCallback;
                var6 = var13.length;
                var2 = new Array(3);
                var2[0] = var6;
                var6 = var11.length;
                var2[1] = var6;
                var6 = var12.length;
                var2[2] = var6;
                var1 = function(arg0) { // Environment: var1
                    _fun110124: for (var _fun110124_ip = 0;;) switch (_fun110124_ip) {
                        case 0:
                            var2 = 0;
                            var3 = 2;
                            var1 = arg0;
                            var0 = 0;
                            if (!(var3 === var1)) {
                                _fun110124_ip = 69;
                                continue _fun110124
                            }
                        case 14:
                            var3 = _closure2_slot4;
                            var3 = var3.length;
                            var3 = var3 > var2;
                            var0 = 0;
                            if (!var3) {
                                _fun110124_ip = 69;
                                continue _fun110124
                            }
                        case 35:
                            var3 = _closure2_slot2;
                            var3 = var3.length;
                            if (!(!(var3 > var2))) {
                                _fun110124_ip = 66;
                                continue _fun110124
                            }
                        case 48:
                            var1 = _closure2_slot3;
                            var1 = var1.length;
                            var1 = var1 > var2;
                            var0 = 0;
                            if (!var1) {
                                _fun110124_ip = 69;
                                continue _fun110124
                            }
                        case 66:
                            var0 = 10;
                        case 69:
                            return var0;
                    }
                };
                var14 = var3.bind(var5)(var1, var2);
                var1 = var13.length;
                var2 = 0;
                var8 = var1 > var2;
                if (var8) {
                    _fun110117_ip = 343;
                    continue _fun110117
                }
            case 334:
                var1 = var11.length;
                var8 = var1 > var2;
            case 343:
                if (var8) {
                    _fun110117_ip = 363;
                    continue _fun110117
                }
            case 346:
                var1 = var12.length;
                var1 = var1 > var2;
                var0 = null;
                if (!var1) {
                    _fun110117_ip = 684;
                    continue _fun110117
                }
            case 363:
                var3 = _closure1_slot11;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var17.listWrapper;
                var1.style = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 21;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.renderCategoryItem;
                var5 = {};
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 22;
                var20 = var23[var19];
                var20 = var22.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var4)(var19);
                var19 = var19.t;
                if (var8) {
                    _fun110117_ip = 473;
                    continue _fun110117
                }
            case 458:
                var8 = var19.kCt2zG;
                var8 = var20.bind(var21)(var8);
                _fun110117_ip = 486;
                continue _fun110117;
            case 473:
                var19 = var19.xSY9BH;
                var8 = var20.bind(var21)(var19);
            case 486:
                var5.name = var8;
                var6 = var6.bind(var7)(var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot10;
                var7 = _closure1_slot0;
                var19 = _closure1_slot2;
                var6 = 23;
                var6 = var19[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.AnimatedFastList;
                var6 = {};
                var6.ref = var18;
                var17 = var17.list;
                var6.style = var17;
                var17 = true;
                var6.horizontal = var17;
                var6.renderItem = var16;
                var15 = _closure1_slot16;
                var6.renderSection = var15;
                var6.sectionSize = var14;
                var14 = var11.length;
                var11 = new Array(3);
                var11[0] = var14;
                var13 = var13.length;
                var11[1] = var13;
                var12 = var12.length;
                var11[2] = var12;
                var6.sections = var11;
                var11 = 58;
                var6.itemSize = var11;
                var6.headerSize = var10;
                var6.footerSize = var10;
                var6.chunkBase = var9;
                var9 = false;
                var6.showsHorizontalScrollIndicator = var9;
                var6.showsVerticalScrollIndicator = var9;
                var9 = 'disabled';
                var6.stickySectionsVariant = var9;
                var9 = 'always';
                var6.keyboardShouldPersistTaps = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 684:
                return var0;
        }
    };
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/LaunchPadUnreadServers.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 3949, 1621, 660, 33, 1297, 671, 5619, 14185, 566, 5457, 9066, 4705, 5461, 3947, 3945, 8933, 1464, 14190, 13310, 1234, 6480, 2]);