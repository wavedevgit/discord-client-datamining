// modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelTypes;
    var _closure1_slot9 = var6;
    var3 = var3.Permissions;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var10 = 8;
    var3 = var5[var10];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 'column';
    var8.flexDirection = var11;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var11 = 9;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var8.backgroundColor = var11;
    var3.channelSelectorButton = var8;
    var8 = {};
    var8.marginRight = var10;
    var3.channelIcon = var8;
    var8 = {
        'flex': 1,
        'marginBottom': 8
    };
    var3.channelTypeText = var8;
    var8 = {};
    var8.flex = var9;
    var3.channelNameText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun65615: for (var _fun65615_ip = 0;;) switch (_fun65615_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.guild;
                var _closure2_slot0 = var11;
                var13 = var1.channelType;
                var2 = var1.channel;
                var _closure2_slot1 = var2;
                var0 = var1.guildEventId;
                var _closure2_slot2 = var0;
                var3 = var1.recurrenceId;
                var _closure2_slot3 = var3;
                var3 = var1.onChangeChannel;
                var _closure2_slot4 = var3;
                var5 = var1.style;
                var1 = _closure1_slot13;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 10;
                var1 = var7[var1];
                var9 = var6.bind(var3)(var1);
                var4 = var9.useInputStyles;
                var1 = {};
                var12 = true;
                var1.hasLeadingIcon = var12;
                var16 = var4.bind(var9)(var1);
                var1 = _closure1_slot9;
                var1 = var1.GUILD_STAGE_VOICE;
                var4 = var13 === var1;
                var _closure2_slot5 = var4;
                var1 = 11;
                var1 = var7[var1];
                var12 = var6.bind(var3)(var1);
                var9 = var12.useGetEventChannelsByType;
                var1 = var11.id;
                var1 = var9.bind(var12)(var1, var13);
                var _closure2_slot6 = var1;
                var1 = 12;
                var1 = var7[var1];
                var9 = var6.bind(var3)(var1);
                var1 = var9.useChannelsUserCanStartStageIn;
                var1 = var1.bind(var9)(var11);
                var _closure2_slot7 = var1;
                var9 = _closure1_slot1;
                var1 = 13;
                var1 = var7[var1];
                var1 = var9.bind(var3)(var1);
                var12 = var1.bind(var3)(var2);
                var1 = 14;
                var9 = var7[var1];
                var15 = var6.bind(var3)(var9);
                var13 = var15.useStateFromStores;
                var9 = _closure1_slot5;
                var11 = new Array(1);
                var11[0] = var9;
                var9 = function() { // Environment: var10
                    var3 = _closure1_slot5;
                    var2 = var3.can;
                    var0 = _closure1_slot10;
                    var1 = var0.MANAGE_CHANNELS;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var9 = var13.bind(var15)(var11, var9);
                var _closure2_slot8 = var9;
                var1 = var7[var1];
                var9 = var6.bind(var3)(var1);
                var7 = var9.useStateFromStores;
                var1 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure1_slot8;
                    var1 = var2.getGuildScheduledEvent;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var7.bind(var9)(var6, var0, var1);
                var _closure2_slot9 = var0;
                var7 = null;
                if (!(var7 == var2)) {
                    _fun65615_ip = 342;
                    continue _fun65615
                }
            case 320:
                var1 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 16;
                var0 = var6[var0];
                var15 = var1.bind(var3)(var0);
                _fun65615_ip = 373;
                continue _fun65615;
            case 342:
                var1 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 15;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getChannelIcon;
                var15 = var0.bind(var1)(var2);
            case 373:
                if (!(var7 == var2)) {
                    _fun65615_ip = 405;
                    continue _fun65615
                }
            case 377:
                var1 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 17;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var13 = var0.LocationIcon;
                _fun65615_ip = 436;
                continue _fun65615;
            case 405:
                var1 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 15;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getChannelIconComponent;
                var13 = var0.bind(var1)(var2);
            case 436:
                var6 = _closure1_slot0;
                var0 = _closure1_slot3;
                var20 = 18;
                var1 = var0[var20];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var20];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                if (var4) {
                    _fun65615_ip = 496;
                    continue _fun65615
                }
            case 483:
                var4 = var0["7RYWCP"];
                var17 = var1.bind(var2)(var4);
                _fun65615_ip = 507;
                continue _fun65615;
            case 496:
                var0 = var0.S7GjDz;
                var17 = var1.bind(var2)(var0);
            case 507:
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var14.container;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot11;
                var19 = _closure1_slot0;
                var11 = _closure1_slot3;
                var9 = 19;
                var4 = var11[var9];
                var4 = var19.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var18 = var14.channelTypeText;
                var4.style = var18;
                var4.children = var17;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 20;
                var5 = var11[var5];
                var5 = var19.bind(var3)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var5.accessibilityLabel = var17;
                var17 = var11[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var11 = var11[var20];
                var11 = var19.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.AaXbMD;
                var11 = var17.bind(var18)(var11);
                var5.accessibilityHint = var11;
                var11 = {};
                var18 = var7 != var12;
                var17 = undefined;
                if (!var18) {
                    _fun65615_ip = 700;
                    continue _fun65615
                }
            case 697:
                var17 = var12;
            case 700:
                var11.text = var17;
                var5.accessibilityValue = var11;
                var11 = 'button';
                var5.accessibilityRole = var11;
                var17 = var16.padding;
                var11 = new Array(3);
                var11[0] = var17;
                var16 = var16.radius;
                var11[1] = var16;
                var16 = var14.channelSelectorButton;
                var11[2] = var16;
                var5.style = var11;
                var10 = function() {
                    _fun65618: for (var _fun65618_ip = 0;;) switch (_fun65618_ip) {
                        case 0:
                            var2 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 21;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dismissGlobalKeyboard;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot6;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var6
                                var6 = arg0;
                                var0 = {};
                                var1 = var6.id;
                                var0.value = var1;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 13;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.computeChannelName;
                                var9 = _closure1_slot7;
                                var8 = _closure1_slot6;
                                var7 = true;
                                var11 = var5;
                                var10 = var6;
                                var1 = var11[var4](var10, var9, var8, var7, var6);
                                var0.label = var1;
                                return var0;
                            };
                            var9 = var2.bind(var3)(var1);
                            var1 = _closure2_slot7;
                            var3 = var1.length;
                            var1 = null;
                            var2 = 0;
                            var8 = null;
                            if (!(var2 === var3)) {
                                _fun65618_ip = 146;
                                continue _fun65618
                            }
                        case 80:
                            var2 = _closure2_slot8;
                            var8 = null;
                            if (!var2) {
                                _fun65618_ip = 146;
                                continue _fun65618
                            }
                        case 89:
                            var4 = _closure1_slot11;
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var2 = 22;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var2.guildId = var5;
                            var5 = function arg0() {
                                _fun65620: for (var _fun65620_ip = 0;;) switch (_fun65620_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot3;
                                        var0 = 23;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.openCreateOrEditGuildEventModal;
                                        var2 = _closure2_slot0;
                                        var1 = {};
                                        var6 = arg0;
                                        var1.channel = var6;
                                        var7 = _closure2_slot9;
                                        var6 = null;
                                        var7 = var6 != var7;
                                        var6 = undefined;
                                        if (!var7) {
                                            _fun65620_ip = 66;
                                            continue _fun65620
                                        }
                                    case 62:
                                        var6 = _closure2_slot9;
                                    case 66:
                                        var1.guildEvent = var6;
                                        var5 = _closure2_slot3;
                                        var1.recurrenceId = var5;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var2.onCreate = var5;
                            var8 = var4.bind(var0)(var3, var2);
                        case 146:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var3 = 24;
                            var3 = var2[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var10 = _closure1_slot0;
                            var3 = 26;
                            var3 = var2[var3];
                            var10 = var10.bind(var0)(var3);
                            var3 = 25;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var3 = var10.bind(var0)(var3, var2);
                            var2 = {};
                            var10 = _closure2_slot5;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot3;
                            var11 = 18;
                            var12 = var15[var11];
                            var12 = var14.bind(var0)(var12);
                            var13 = var12.intl;
                            var12 = var13.string;
                            var11 = var15[var11];
                            var11 = var14.bind(var0)(var11);
                            var11 = var11.t;
                            if (var10) {
                                _fun65618_ip = 272;
                                continue _fun65618
                            }
                        case 259:
                            var10 = var11["7RYWCP"];
                            var10 = var12.bind(var13)(var10);
                            _fun65618_ip = 283;
                            continue _fun65618;
                        case 272:
                            var11 = var11.S7GjDz;
                            var10 = var12.bind(var13)(var11);
                        case 283:
                            var2.title = var10;
                            var2.items = var9;
                            var2.body = var8;
                            var6 = function arg0() {
                                _fun65621: for (var _fun65621_ip = 0;;) switch (_fun65621_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var _closure4_slot0 = var0;
                                        var3 = _closure2_slot6;
                                        var2 = var3.find;
                                        var1 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var1 = var0.id;
                                            var0 = _closure4_slot0;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var2 = var2.bind(var3)(var1);
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun65621_ip = 50;
                                            continue _fun65621
                                        }
                                    case 39:
                                        var1 = _closure2_slot4;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                    case 50:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot3;
                                        var0 = 24;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.hideActionSheet;
                                        var1 = var1.bind(var2)();
                                        return var0;
                                }
                            };
                            var2.onItemSelect = var6;
                            var6 = _closure2_slot1;
                            var8 = var1 == var6;
                            var6 = undefined;
                            if (var8) {
                                _fun65618_ip = 329;
                                continue _fun65618
                            }
                        case 320:
                            var7 = _closure2_slot1;
                            var6 = var7.id;
                        case 329:
                            var7 = var1 != var6;
                            var1 = undefined;
                            if (!var7) {
                                _fun65618_ip = 341;
                                continue _fun65618
                            }
                        case 338:
                            var1 = var6;
                        case 341:
                            var2.selectedItem = var1;
                            var1 = 'SelectUpdatesChannel';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var5.onPress = var10;
                if (!(var7 == var13)) {
                    _fun65615_ip = 817;
                    continue _fun65615
                }
            case 769:
                var11 = _closure1_slot11;
                var10 = _closure1_slot1;
                var16 = _closure1_slot3;
                var7 = 27;
                var7 = var16[var7];
                var10 = var10.bind(var3)(var7);
                var7 = {};
                var7.source = var15;
                var15 = var14.channelIcon;
                var7.style = var15;
                var10 = var11.bind(var3)(var10, var7);
                _fun65615_ip = 839;
                continue _fun65615;
            case 817:
                var11 = _closure1_slot11;
                var7 = {};
                var15 = var14.channelIcon;
                var7.style = var15;
                var10 = var11.bind(var3)(var13, var7);
            case 839:
                var7 = new Array(3);
                var7[0] = var10;
                var10 = _closure1_slot11;
                var11 = _closure1_slot0;
                var13 = _closure1_slot3;
                var9 = var13[var9];
                var9 = var11.bind(var3)(var9);
                var11 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-active'
                };
                var14 = var14.channelNameText;
                var9.style = var14;
                var9.children = var12;
                var9 = var10.bind(var3)(var11, var9);
                var7[1] = var9;
                var12 = _closure1_slot1;
                var8 = 27;
                var8 = var13[var8];
                var9 = var12.bind(var3)(var8);
                var8 = {};
                var11 = 28;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var8.source = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3091, 3100, 1621, 3334, 660, 33, 1297, 671, 5395, 8122, 8109, 4792, 566, 4807, 8111, 8112, 1234, 3941, 4902, 1582, 8125, 8095, 3278, 5377, 1307, 4086, 8108, 2]);