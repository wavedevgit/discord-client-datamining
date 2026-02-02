// modules/icymi/native/AnnouncementMessageRow.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ITEM_PADDING;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createICYMIStyles;
    var3 = function(arg0) { // Environment: var1
        var2 = arg0;
        var0 = {};
        var1 = {};
        var3 = 1;
        var1.flex = var3;
        var3 = var2.inset;
        var1.paddingLeft = var3;
        var0.pressable = var1;
        var1 = {};
        var3 = var2.margin;
        var1.marginVertical = var3;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var4 = 10;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.spacing;
        var4 = var4.PX_8;
        var1.gap = var4;
        var3 = _closure1_slot10;
        var1.paddingHorizontal = var3;
        var2 = var2.inset;
        var1.marginLeft = var2;
        var0.footer = var1;
        return var0;
    };
    var3 = var6.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103939: for (var _fun103939_ip = 0;;) switch (_fun103939_ip) {
            case 0:
                var1 = arg0;
                var21 = var1.unread;
                var11 = var1.message;
                var _closure2_slot0 = var11;
                var12 = var1.guild;
                var _closure2_slot1 = var12;
                var13 = var1.channel;
                var _closure2_slot2 = var13;
                var17 = var1.visible;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var6 = var2.bind(var3)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot8;
                    var2 = var3.isChannelMuted;
                    var0 = _closure2_slot2;
                    var1 = var0.getGuildId;
                    var1 = var1.bind(var0)();
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var20 = var4.bind(var6)(var2, var1);
                var1 = _closure1_slot13;
                var8 = var1.bind(var3)();
                var6 = _closure1_slot3;
                var4 = var6.useEffect;
                var1 = null;
                var2 = var1 == var12;
                var1 = undefined;
                if (var2) {
                    _fun103939_ip = 132;
                    continue _fun103939
                }
            case 127:
                var1 = var12.id;
            case 132:
                var2 = new Array(2);
                var2[0] = var1;
                var1 = var11.author;
                var1 = var1.id;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun103941: for (var _fun103941_ip = 0;;) switch (_fun103941_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var5 = null;
                            var3 = var5 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun103941_ip = 29;
                                continue _fun103941
                            }
                        case 20:
                            var3 = _closure2_slot1;
                            var2 = var3.id;
                        case 29:
                            if (!(var5 != var2)) {
                                _fun103941_ip = 105;
                                continue _fun103941
                            }
                        case 33:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 12;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.requestMembersById;
                            var2 = _closure2_slot1;
                            var5 = var5 == var2;
                            var2 = undefined;
                            if (var5) {
                                _fun103941_ip = 84;
                                continue _fun103941
                            }
                        case 75:
                            var5 = _closure2_slot1;
                            var2 = var5.id;
                        case 84:
                            var1 = _closure2_slot0;
                            var1 = var1.author;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var2, var1);
                        case 105:
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1, var2);
                var4 = _closure1_slot3;
                var6 = var4.useCallback;
                var1 = var13.id;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = var11.id;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var1 = var4[var3];
                    var0 = undefined;
                    var11 = var5.bind(var0)(var1);
                    var10 = var11.itemInteracted;
                    var8 = _closure2_slot0;
                    var9 = var8.id;
                    var7 = 'announcement';
                    var6 = 'long_press_channel';
                    var6 = var10.bind(var11)(var9, var7, var6);
                    var3 = var4[var3];
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.feedItemActioned;
                    var3 = {};
                    var8 = var8.id;
                    var3.itemId = var8;
                    var3.itemType = var7;
                    var7 = {
                        'actionGestureType': 'long_press',
                        'actionTargetElement': 'item_header',
                        'actionIntentType': 'open',
                        'actionDestinationType': 'channel'
                    };
                    var3.actionParameters = var7;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot0;
                    var2 = 14;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot2;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6 = var6.bind(var4)(var1, var2);
                var7 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var11;
                var1 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var5 = var3[var2];
                    var0 = undefined;
                    var11 = var4.bind(var0)(var5);
                    var10 = var11.itemInteracted;
                    var5 = _closure2_slot0;
                    var9 = var5.id;
                    var8 = 'announcement';
                    var7 = 'long_press_message';
                    var7 = var10.bind(var11)(var9, var8, var7);
                    var2 = var3[var2];
                    var7 = var4.bind(var0)(var2);
                    var4 = var7.feedItemActioned;
                    var2 = {};
                    var9 = var5.id;
                    var2.itemId = var9;
                    var2.itemType = var8;
                    var8 = {
                        'actionGestureType': 'long_press',
                        'actionTargetElement': 'item_container',
                        'actionIntentType': 'open',
                        'actionDestinationType': 'channel'
                    };
                    var2.actionParameters = var8;
                    var2 = var4.bind(var7)(var2);
                    var7 = _closure1_slot9;
                    var4 = var7.getUser;
                    var2 = var5.author;
                    var2 = var2.id;
                    var4 = var4.bind(var7)(var2);
                    var2 = _closure1_slot0;
                    var1 = 15;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showLongPressMessageActionSheet;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var1.channel = var6;
                    var1.message = var5;
                    var1.user = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var15 = var7.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(3);
                var1[0] = var11;
                var7 = var13.id;
                var1[1] = var7;
                var7 = var12.id;
                var1[2] = var7;
                var0 = function() { // Environment: var0
                    _fun103944: for (var _fun103944_ip = 0;;) switch (_fun103944_ip) {
                        case 0:
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 13;
                            var2 = var4[var1];
                            var0 = undefined;
                            var11 = var6.bind(var0)(var2);
                            var10 = var11.itemInteracted;
                            var5 = _closure2_slot0;
                            var9 = var5.id;
                            var8 = 'announcement';
                            var7 = 'press_message';
                            var7 = var10.bind(var11)(var9, var8, var7);
                            var4 = var4[var1];
                            var7 = var6.bind(var0)(var4);
                            var6 = var7.feedItemActioned;
                            var4 = {};
                            var9 = var5.id;
                            var4.itemId = var9;
                            var4.itemType = var8;
                            var8 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'item_container',
                                'actionIntentType': 'navigate',
                                'actionDestinationType': 'channel'
                            };
                            var4.actionParameters = var8;
                            var4 = var6.bind(var7)(var4);
                            var4 = null;
                            if (!(var4 != var5)) {
                                _fun103944_ip = 250;
                                continue _fun103944
                            }
                        case 125:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = var5[var1];
                            var7 = var4.bind(var0)(var1);
                            var6 = var7.ackGravityItems;
                            var8 = {};
                            var1 = _closure2_slot0;
                            var4 = var1.id;
                            var8.id = var4;
                            var4 = global;
                            var9 = var4.Date;
                            var4 = var9.now;
                            var4 = var4.bind(var9)();
                            var8.timestamp = var4;
                            var4 = new Array(1);
                            var4[0] = var8;
                            var4 = var6.bind(var7)(var4);
                            var4 = _closure1_slot0;
                            var3 = 16;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.navigateToPost;
                            var3 = _closure2_slot2;
                            var3 = var3.id;
                            var2 = _closure2_slot1;
                            var2 = var2.id;
                            var1 = var1.id;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 250:
                            return var0;
                    }
                };
                var18 = var2.bind(var4)(var0, var1);
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 17;
                var0 = var14[var0];
                var1 = var16.bind(var3)(var0);
                var0 = var1.useGravityMessage;
                var4 = var0.bind(var1)(var11);
                var2 = _closure1_slot12;
                var9 = _closure1_slot1;
                var0 = 18;
                var0 = var14[var0];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var7 = 19;
                var10 = var14[var7];
                var10 = var16.bind(var3)(var10);
                var19 = var10.intl;
                var10 = var19.string;
                var7 = var14[var7];
                var7 = var16.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["8P08G9"];
                var7 = var10.bind(var19)(var7);
                var0.actionLabel = var7;
                var7 = var11.id;
                var0.id = var7;
                var10 = 'announcement';
                var0.interactionType = var10;
                var7 = var13.id;
                var0.channelId = var7;
                var7 = 20;
                var7 = var14[var7];
                var22 = var9.bind(var3)(var7);
                var19 = var22.extractTimestamp;
                var7 = var11.id;
                var7 = var19.bind(var22)(var7);
                var0.timestamp = var7;
                var0.onHeaderPress = var18;
                var0.onHeaderLongPress = var6;
                var0.message = var4;
                var4 = true;
                var0.shouldFeatureUser = var4;
                var7 = _closure1_slot11;
                var4 = 21;
                var4 = var14[var4];
                var4 = var16.bind(var3)(var4);
                var6 = var4.PressableHighlight;
                var4 = {};
                var4.onPress = var18;
                var4.onLongPress = var15;
                var15 = 'button';
                var4.accessibilityRole = var15;
                var15 = 22;
                var18 = var14[var15];
                var19 = var9.bind(var3)(var18);
                var18 = {};
                var18.channel = var13;
                var18.unread = var21;
                var18 = var19.bind(var3)(var18);
                var4.accessibilityLabel = var18;
                var15 = var14[var15];
                var19 = var16.bind(var3)(var15);
                var18 = var19.getChannelA11yHint;
                var15 = {};
                var15.channel = var13;
                var15.muted = var20;
                var15 = var18.bind(var19)(var15);
                var4.accessibilityHint = var15;
                var15 = 130;
                var4.unstable_pressDelay = var15;
                var15 = var8.pressable;
                var4.style = var15;
                var15 = 23;
                var15 = var14[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.MessageRowContent;
                var15 = {};
                var15.message = var11;
                var15.channel = var13;
                var15.guild = var12;
                var18 = 5;
                var15.lineClamp = var18;
                var15.visible = var17;
                var15 = var7.bind(var3)(var16, var15);
                var4.children = var15;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.footer;
                var5.style = var8;
                var8 = 24;
                var8 = var14[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.message = var11;
                var8.channel = var13;
                var8.guild = var12;
                var12 = 'base';
                var8.backgroundVariant = var12;
                var11 = var11.id;
                var8.id = var11;
                var8.itemType = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/AnnouncementMessageRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103945: for (var _fun103945_ip = 0;;) switch (_fun103945_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.unread;
                var8 = var1.message;
                var _closure2_slot0 = var8;
                var5 = var1.visible;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = 11;
                var2 = var10[var12];
                var11 = var3.bind(var4)(var2);
                var7 = var11.useStateFromStores;
                var2 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var3 = _closure2_slot0;
                    var0 = var3.getChannelId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var11)(var6, var2);
                var _closure2_slot1 = var7;
                var2 = var10[var12];
                var13 = var3.bind(var4)(var2);
                var11 = var13.useStateFromStores;
                var2 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    _fun103947: for (var _fun103947_ip = 0;;) switch (_fun103947_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot1;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun103947_ip = 39;
                                continue _fun103947
                            }
                        case 30:
                            var3 = _closure2_slot1;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6 = var11.bind(var13)(var6, var2);
                var2 = 17;
                var2 = var10[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useGravityMessage;
                var8 = var2.bind(var3)(var8);
                var3 = null;
                var2 = var3 == var8;
                var10 = undefined;
                if (var2) {
                    _fun103945_ip = 168;
                    continue _fun103945
                }
            case 162:
                var10 = var8.author;
            case 168:
                _closure2_slot2 = var10;
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var12];
                var12 = var11.bind(var4)(var2);
                var11 = var12.useStateFromStores;
                var13 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var13;
                var0 = function() { // Environment: var0
                    _fun103948: for (var _fun103948_ip = 0;;) switch (_fun103948_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.isBlockedOrIgnored;
                            var4 = _closure2_slot2;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun103948_ip = 40;
                                continue _fun103948
                            }
                        case 31:
                            var3 = _closure2_slot2;
                            var0 = var3.id;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var2, var0);
                var11 = var3 == var7;
                var0 = null;
                if (var11) {
                    _fun103945_ip = 298;
                    continue _fun103945
                }
            case 228:
                var11 = var3 == var6;
                var0 = null;
                if (var11) {
                    _fun103945_ip = 298;
                    continue _fun103945
                }
            case 237:
                var11 = var3 == var8;
                var0 = null;
                if (var11) {
                    _fun103945_ip = 298;
                    continue _fun103945
                }
            case 246:
                var10 = var3 == var10;
                var0 = null;
                if (var10) {
                    _fun103945_ip = 298;
                    continue _fun103945
                }
            case 255:
                var0 = null;
                if (var2) {
                    _fun103945_ip = 298;
                    continue _fun103945
                }
            case 260:
                var3 = _closure1_slot11;
                var2 = _closure1_slot14;
                var1 = {};
                var1.unread = var9;
                var1.message = var8;
                var1.channel = var7;
                var1.guild = var6;
                var1.visible = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 298:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 3061, 4269, 1613, 13527, 33, 13489, 671, 566, 4644, 8834, 9059, 9834, 13528, 8833, 13530, 1234, 21, 4867, 7839, 13532, 13537, 2]);