// modules/icymi/native/ICYMIForumThreadRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function arg0() {
        _fun104351: for (var _fun104351_ip = 0;;) switch (_fun104351_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.channel;
                var _closure2_slot0 = var18;
                var24 = var1.message;
                var _closure2_slot1 = var24;
                var23 = var1.visible;
                var1 = _closure1_slot9;
                var4 = undefined;
                var14 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var3 = var5[var1];
                var8 = var2.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var0
                    _fun104352: for (var _fun104352_ip = 0;;) switch (_fun104352_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun104352_ip = 44;
                                continue _fun104352
                            }
                        case 30:
                            var4 = _closure2_slot0;
                            var3 = var4.getGuildId;
                            var0 = var3.bind(var4)();
                        case 44:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var17 = var7.bind(var8)(var6, var3);
                var _closure2_slot2 = var17;
                var3 = var24.author;
                var _closure2_slot3 = var3;
                var1 = var5[var1];
                var6 = var2.bind(var4)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.parent_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var5.bind(var6)(var2, var1);
                var8 = _closure1_slot3;
                var7 = var8.useEffect;
                var2 = var3.id;
                var6 = new Array(2);
                var6[0] = var2;
                var2 = null;
                var9 = var2 == var17;
                var5 = undefined;
                if (var9) {
                    _fun104351_ip = 183;
                    continue _fun104351
                }
            case 178:
                var5 = var17.id;
            case 183:
                var6[1] = var5;
                var5 = function() { // Environment: var0
                    _fun104354: for (var _fun104354_ip = 0;;) switch (_fun104354_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var5 = null;
                            var3 = var5 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun104354_ip = 29;
                                continue _fun104354
                            }
                        case 20:
                            var3 = _closure2_slot2;
                            var2 = var3.id;
                        case 29:
                            if (!(var5 != var2)) {
                                _fun104354_ip = 107;
                                continue _fun104354
                            }
                        case 33:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 8;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.requestMembersById;
                            var2 = _closure2_slot2;
                            var5 = var5 == var2;
                            var2 = undefined;
                            if (var5) {
                                _fun104354_ip = 84;
                                continue _fun104354
                            }
                        case 75:
                            var5 = _closure2_slot2;
                            var2 = var5.id;
                        case 84:
                            var1 = _closure2_slot3;
                            var5 = var1.id;
                            var1 = new Array(1);
                            var1[0] = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 107:
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var5, var6);
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var6 = new Array(3);
                var6[0] = var18;
                var6[1] = var17;
                var5 = var24.id;
                var6[2] = var5;
                var5 = function() { // Environment: var0
                    _fun104355: for (var _fun104355_ip = 0;;) switch (_fun104355_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 9;
                            var1 = var5[var3];
                            var0 = undefined;
                            var11 = var4.bind(var0)(var1);
                            var10 = var11.itemInteracted;
                            var7 = _closure2_slot1;
                            var9 = var7.id;
                            var6 = 'forum_thread';
                            var8 = 'press_forum_thread';
                            var8 = var10.bind(var11)(var9, var6, var8);
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.feedItemActioned;
                            var3 = {};
                            var7 = var7.id;
                            var3.itemId = var7;
                            var3.itemType = var6;
                            var6 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'item_container',
                                'actionIntentType': 'navigate',
                                'actionDestinationType': 'channel'
                            };
                            var3.actionParameters = var6;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot0;
                            var5 = null;
                            var3 = var5 != var3;
                            if (!var3) {
                                _fun104355_ip = 139;
                                continue _fun104355
                            }
                        case 131:
                            var4 = _closure2_slot2;
                            var3 = var5 != var4;
                        case 139:
                            if (!var3) {
                                _fun104355_ip = 202;
                                continue _fun104355
                            }
                        case 142:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 10;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.navigateToPost;
                            var2 = _closure2_slot0;
                            var3 = var2.id;
                            var2 = _closure2_slot2;
                            var2 = var2.id;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 202:
                            return var0;
                    }
                };
                var9 = var7.bind(var8)(var5, var6);
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var8 = var18.parent_id;
                var5 = new Array(2);
                var5[0] = var8;
                var8 = var24.id;
                var5[1] = var8;
                var0 = function() { // Environment: var0
                    _fun104356: for (var _fun104356_ip = 0;;) switch (_fun104356_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.parent_id;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun104356_ip = 174;
                                continue _fun104356
                            }
                        case 22:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var6 = var4[var2];
                            var3 = undefined;
                            var11 = var5.bind(var3)(var6);
                            var10 = var11.itemInteracted;
                            var8 = _closure2_slot1;
                            var9 = var8.id;
                            var7 = 'forum_thread';
                            var6 = 'long_press_forum_thread';
                            var6 = var10.bind(var11)(var9, var7, var6);
                            var2 = var4[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.feedItemActioned;
                            var2 = {};
                            var8 = var8.id;
                            var2.itemId = var8;
                            var2.itemType = var7;
                            var7 = {
                                'actionGestureType': 'long_press',
                                'actionTargetElement': 'item_container',
                                'actionIntentType': 'open',
                                'actionDestinationType': null
                            };
                            var2.actionParameters = var7;
                            var2 = var5.bind(var6)(var2);
                            var2 = _closure1_slot0;
                            var1 = 11;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.openChannelLongPressActionSheet;
                            var0 = _closure2_slot0;
                            var0 = var0.parent_id;
                            var0 = var1.bind(var2)(var0);
                        case 174:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var6.bind(var7)(var0, var5);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 12;
                var0 = var6[var0];
                var5 = var5.bind(var4)(var0);
                var0 = var5.useGravityMessage;
                var16 = var0.bind(var5)(var24);
                var5 = _closure1_slot1;
                var0 = 13;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var26 = var0.bind(var4)(var18);
                var5 = var2 == var18;
                var0 = null;
                if (var5) {
                    _fun104351_ip = 994;
                    continue _fun104351
                }
            case 352:
                var5 = var18.guild_id;
                var5 = var2 == var5;
                var0 = null;
                if (var5) {
                    _fun104351_ip = 994;
                    continue _fun104351
                }
            case 369:
                var5 = var2 == var17;
                var0 = null;
                if (var5) {
                    _fun104351_ip = 994;
                    continue _fun104351
                }
            case 381:
                var3 = var2 == var3;
                var0 = null;
                if (var3) {
                    _fun104351_ip = 994;
                    continue _fun104351
                }
            case 393:
                var1 = var2 == var1;
                var0 = null;
                if (var1) {
                    _fun104351_ip = 994;
                    continue _fun104351
                }
            case 405:
                var3 = _closure1_slot8;
                var13 = _closure1_slot1;
                var19 = _closure1_slot2;
                var1 = 14;
                var1 = var19[var1];
                var2 = var13.bind(var4)(var1);
                var1 = {};
                var21 = _closure1_slot0;
                var5 = 15;
                var6 = var19[var5];
                var6 = var21.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var19[var5];
                var5 = var21.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.bYNuVx;
                var5 = var6.bind(var7)(var5);
                var1.actionLabel = var5;
                var5 = var16.id;
                var1.id = var5;
                var15 = 'forum_thread';
                var1.interactionType = var15;
                var5 = var18.parent_id;
                var1.channelId = var5;
                var5 = 16;
                var5 = var19[var5];
                var7 = var13.bind(var4)(var5);
                var6 = var7.extractTimestamp;
                var5 = var16.id;
                var5 = var6.bind(var7)(var5);
                var1.timestamp = var5;
                var1.onHeaderPress = var9;
                var1.onHeaderLongPress = var8;
                var1.message = var16;
                var28 = true;
                var1.shouldFeatureUser = var28;
                var7 = _closure1_slot7;
                var5 = 17;
                var5 = var19[var5];
                var5 = var21.bind(var4)(var5);
                var6 = var5.PressableHighlight;
                var5 = {};
                var5.onPress = var9;
                var5.onLongPress = var8;
                var8 = 'button';
                var5.accessibilityRole = var8;
                var8 = 130;
                var5.unstable_pressDelay = var8;
                var8 = var14.pressable;
                var5.style = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = var14.container;
                var8.style = var11;
                var25 = _closure1_slot7;
                var20 = 18;
                var11 = var19[var20];
                var11 = var21.bind(var4)(var11);
                var22 = var11.Text;
                var11 = {
                    'variant': 'text-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var11.children = var26;
                var22 = var25.bind(var4)(var22, var11);
                var11 = new Array(3);
                var11[0] = var22;
                var22 = _closure1_slot7;
                var20 = var19[var20];
                var20 = var21.bind(var4)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-md/normal',
                    'color': 'text-subtle',
                    'style': null,
                    'lineClamp': 5
                };
                var25 = var14.subtitle;
                var20.style = var25;
                var25 = 19;
                var25 = var19[var25];
                var27 = var13.bind(var4)(var25);
                var26 = var27.parseInlineReply;
                var25 = var24.content;
                var25 = var26.bind(var27)(var25, var28);
                var20.children = var25;
                var20 = var22.bind(var4)(var21, var20);
                var11[1] = var20;
                var22 = _closure1_slot7;
                var20 = 20;
                var20 = var19[var20];
                var21 = var13.bind(var4)(var20);
                var20 = {};
                var20.message = var24;
                var20.visible = var23;
                var20.itemType = var15;
                var20 = var22.bind(var4)(var21, var20);
                var11[2] = var20;
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot7;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var14.footer;
                var6.style = var9;
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var9 = {};
                var14 = var14.ICYMICardInteractionRow;
                var9.style = var14;
                var14 = _closure1_slot7;
                var12 = 21;
                var12 = var19[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12.message = var16;
                var12.channel = var18;
                var12.guild = var17;
                var17 = 'base';
                var12.backgroundVariant = var17;
                var16 = var16.id;
                var12.id = var16;
                var12.itemType = var15;
                var12 = var14.bind(var4)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 994:
                return var0;
        }
    };
    var _closure1_slot10 = var1;
    var0 = global;
    var9 = var0.Object;
    var5 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var9)(var2, var0, var3);
    var0 = 0;
    var5 = var7[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var5 = var7[var3];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.jsx;
    var _closure1_slot7 = var8;
    var5 = var5.jsxs;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createICYMIStyles;
    var5 = function(arg0) { // Environment: var4
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
        var1.marginHorizontal = var3;
        var0.container = var1;
        var1 = {};
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.spacing;
        var3 = var3.PX_8;
        var1.marginTop = var3;
        var3 = var2.margin;
        var1.marginBottom = var3;
        var0.subtitle = var1;
        var1 = {};
        var3 = 'flex-end';
        var1.justifyContent = var3;
        var3 = var2.inset;
        var1.paddingLeft = var3;
        var3 = var2.margin;
        var1.marginTop = var3;
        var3 = var2.margin;
        var1.gap = var3;
        var0.footer = var1;
        var1 = {};
        var3 = var2.margin;
        var1.marginHorizontal = var3;
        var0.threadAsComments = var1;
        var1 = {};
        var3 = var2.margin;
        var1.marginHorizontal = var3;
        var2 = var2.margin;
        var1.marginBottom = var2;
        var0.ICYMICardInteractionRow = var1;
        return var0;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot9 = var5;
    var5 = 22;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIForumThreadRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        var0 = arg0;
        var5 = var0.message;
        var4 = var0.threadChannel;
        var0 = var0.visible;
        var3 = _closure1_slot7;
        var2 = _closure1_slot10;
        var1 = {};
        var1.message = var5;
        var1.channel = var4;
        var1.visible = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.default = var4;
    var2.MAX_AVATARS_IN_PILE = var3;
    var2.ICYMIForumThreadRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 33, 13528, 671, 566, 4679, 8885, 13567, 9110, 8884, 4792, 13569, 1234, 21, 4902, 3941, 4781, 13573, 13575, 2]);