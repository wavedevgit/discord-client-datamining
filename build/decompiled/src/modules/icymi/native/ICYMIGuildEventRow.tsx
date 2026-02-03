// modules/icymi/native/ICYMIGuildEventRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun104322: for (var _fun104322_ip = 0;;) switch (_fun104322_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.event;
                var _closure2_slot0 = var12;
                var6 = var1.channel;
                var16 = var1.guild;
                var _closure2_slot1 = var16;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot13;
                var24 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var19 = null;
                var2 = var1.bind(var3)(var12, var19);
                var1 = _closure1_slot7;
                var25 = var1.bind(var3)(var12);
                var _closure2_slot2 = var25;
                var4 = var19 == var2;
                var1 = undefined;
                if (var4) {
                    _fun104322_ip = 112;
                    continue _fun104322
                }
            case 96:
                var4 = var2.startTime;
                var2 = var4.toISOString;
                var1 = var2.bind(var4)();
            case 112:
                _closure2_slot3 = var1;
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var25;
                var1 = function() { // Environment: var0
                    _fun104323: for (var _fun104323_ip = 0;;) switch (_fun104323_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            if (var1) {
                                _fun104323_ip = 52;
                                continue _fun104323
                            }
                        case 21:
                            var1 = 10;
                            var2 = var7[var1];
                            var1 = undefined;
                            var2 = var6.bind(var1)(var2);
                            var1 = var2.getEventTimeData;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var0);
                            _fun104323_ip = 111;
                            continue _fun104323;
                        case 52:
                            var1 = {};
                            var2 = 9;
                            var3 = var7[var2];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2.TxqPQR;
                            var2 = var3.bind(var4)(var2);
                            var1.startDateTimeString = var2;
                            var0 = var1;
                        case 111:
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1, var2);
                var15 = var1.startDateTimeString;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getLocationFromEvent;
                var2 = var1.bind(var2)(var12);
                var4 = var19 == var6;
                var1 = undefined;
                if (var4) {
                    _fun104322_ip = 201;
                    continue _fun104322
                }
            case 196:
                var1 = var6.name;
            case 201:
                var23 = var2;
                if (!(var19 != var1)) {
                    _fun104322_ip = 211;
                    continue _fun104322
                }
            case 208:
                var23 = var1;
            case 211:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var5 = var4[var1];
                var7 = var2.bind(var3)(var5);
                var5 = var7.getEventLocationIconSource;
                var22 = true;
                var30 = var5.bind(var7)(var12, var6, var22);
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.getEventLocationIconComponent;
                var18 = var1.bind(var5)(var12, var6, var22);
                var1 = 10;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getNextRecurrenceIdInEvent;
                var5 = var1.bind(var2)(var12);
                var7 = _closure1_slot3;
                var4 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var12;
                var1 = function() { // Environment: var0
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var4 = var3[var2];
                    var0 = undefined;
                    var10 = var5.bind(var0)(var4);
                    var9 = var10.itemInteracted;
                    var4 = _closure2_slot0;
                    var8 = var4.id;
                    var7 = 'guild_event';
                    var6 = 'press_event';
                    var6 = var9.bind(var10)(var8, var7, var6);
                    var2 = var3[var2];
                    var6 = var5.bind(var0)(var2);
                    var5 = var6.feedItemActioned;
                    var2 = {};
                    var8 = var4.id;
                    var2.itemId = var8;
                    var2.itemType = var7;
                    var7 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'item_body',
                        'actionIntentType': 'navigate',
                        'actionDestinationType': 'event'
                    };
                    var2.actionParameters = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot0;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openGuildEventDetails;
                    var1 = {};
                    var5 = var4.id;
                    var1.eventId = var5;
                    var1.event = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var4.bind(var7)(var1, var2);
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var8 = var16.id;
                var1 = new Array(2);
                var1[0] = var8;
                var8 = var12.id;
                var1[1] = var8;
                var0 = function() { // Environment: var0
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var1 = var4[var3];
                    var0 = undefined;
                    var11 = var5.bind(var0)(var1);
                    var10 = var11.itemInteracted;
                    var8 = _closure2_slot0;
                    var9 = var8.id;
                    var7 = 'guild_event';
                    var6 = 'press_event';
                    var6 = var10.bind(var11)(var9, var7, var6);
                    var3 = var4[var3];
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.feedItemActioned;
                    var3 = {};
                    var8 = var8.id;
                    var3.itemId = var8;
                    var3.itemType = var7;
                    var7 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'item_header',
                        'actionIntentType': 'navigate',
                        'actionDestinationType': 'guild'
                    };
                    var3.actionParameters = var7;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot0;
                    var2 = 15;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.transitionToGuild;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var0 = var12.description;
                var11 = var19 != var0;
                if (!var11) {
                    _fun104322_ip = 393;
                    continue _fun104322
                }
            case 377:
                var0 = var12.description;
                var1 = var0.length;
                var0 = 0;
                var11 = var1 > var0;
            case 393:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 16;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var19 == var12;
                var1 = undefined;
                if (var0) {
                    _fun104322_ip = 427;
                    continue _fun104322
                }
            case 422:
                var1 = var12.guild_id;
            case 427:
                var8 = var19 == var12;
                var0 = undefined;
                if (var8) {
                    _fun104322_ip = 441;
                    continue _fun104322
                }
            case 436:
                var0 = var12.id;
            case 441:
                var31 = var2.bind(var3)(var1, var0, var5);
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 17;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var10 = _closure1_slot0;
                var32 = 9;
                var8 = var5[var32];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var5[var32];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5["6pFsLQ"];
                var5 = var8.bind(var9)(var5);
                var0.actionLabel = var5;
                var5 = var12.id;
                var0.id = var5;
                var5 = 'guild_event';
                var0.interactionType = var5;
                var8 = var19 == var6;
                var5 = undefined;
                if (var8) {
                    _fun104322_ip = 566;
                    continue _fun104322
                }
            case 561:
                var5 = var6.id;
            case 566:
                var0.channelId = var5;
                var5 = var16.id;
                var0.guildId = var5;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 18;
                var5 = var10[var5];
                var8 = var6.bind(var3)(var5);
                var6 = var8.extractTimestamp;
                var5 = var12.id;
                var5 = var6.bind(var8)(var5);
                var0.timestamp = var5;
                var0.onHeaderPress = var4;
                var0.onHeaderLongPress = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot4;
                var4 = {};
                var4.onPress = var7;
                var7 = var24.container;
                var4.style = var7;
                var9 = _closure1_slot11;
                var8 = _closure1_slot5;
                var7 = {};
                var13 = var24.timeAndUserPillContainer;
                var7.style = var13;
                var14 = _closure1_slot11;
                var13 = _closure1_slot0;
                var21 = 19;
                var10 = var10[var21];
                var10 = var13.bind(var3)(var10);
                var13 = var10.Text;
                var10 = {};
                var17 = 'text-sm/semibold';
                var10.variant = var17;
                var17 = 'text-brand';
                if (!var25) {
                    _fun104322_ip = 725;
                    continue _fun104322
                }
            case 719:
                var17 = 'status-positive';
            case 725:
                var10.color = var17;
                var10.children = var15;
                var10 = var14.bind(var3)(var13, var10);
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(5);
                var7[0] = var8;
                var10 = _closure1_slot11;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var21];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {};
                if (!var11) {
                    _fun104322_ip = 793;
                    continue _fun104322
                }
            case 788:
                var11 = var24.title;
            case 793:
                var8.style = var11;
                var11 = 'text-lg/semibold';
                var8.variant = var11;
                var11 = var12.name;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var8 = var12.description;
                var8 = var19 != var8;
                if (!var8) {
                    _fun104322_ip = 854;
                    continue _fun104322
                }
            case 838:
                var9 = var12.description;
                var10 = var9.length;
                var9 = 0;
                var8 = var10 > var9;
            case 854:
                if (!var8) {
                    _fun104322_ip = 948;
                    continue _fun104322
                }
            case 857:
                var11 = _closure1_slot11;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = var15[var21];
                var9 = var14.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-md/normal',
                    'color': 'text-subtle',
                    'lineClamp': 5
                };
                var13 = 20;
                var13 = var15[var13];
                var15 = var14.bind(var3)(var13);
                var14 = var15.guildEventDetailsParser;
                var13 = var12.description;
                var12 = {};
                var16 = var16.id;
                var12.guildId = var16;
                var12 = var14.bind(var15)(var13, var22, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 948:
                var7[2] = var8;
                var10 = _closure1_slot11;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var24.separator;
                var8.style = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var10 = _closure1_slot12;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var24.infoContainer;
                var8.style = var11;
                var13 = _closure1_slot12;
                var12 = _closure1_slot5;
                var11 = {};
                var14 = var24.locationContainer;
                var11.style = var14;
                var16 = _closure1_slot11;
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var14 = 21;
                var14 = var26[var14];
                var14 = var27.bind(var3)(var14);
                var15 = var14.GroupIcon;
                var14 = {};
                var25 = 'xs';
                var14.size = var25;
                var17 = var24.eventsChannelIcon;
                var14.style = var17;
                var15 = var16.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot11;
                var15 = var26[var21];
                var15 = var27.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'lineClamp': 1,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var28 = var26[var32];
                var28 = var27.bind(var3)(var28);
                var29 = var28.intl;
                var28 = var29.format;
                var26 = var26[var32];
                var26 = var27.bind(var3)(var26);
                var26 = var26.t;
                var27 = var26["+DLsD8"];
                var26 = {};
                var26.count = var31;
                var26 = var28.bind(var29)(var27, var26);
                var15.children = var26;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var12 = var13.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var14 = _closure1_slot12;
                var13 = _closure1_slot5;
                var12 = {};
                var15 = var24.locationContainer;
                var12.style = var15;
                if (!(var19 == var18)) {
                    _fun104322_ip = 1311;
                    continue _fun104322
                }
            case 1226:
                var16 = var19 != var30;
                if (!var16) {
                    _fun104322_ip = 1309;
                    continue _fun104322
                }
            case 1233:
                var26 = _closure1_slot11;
                var28 = _closure1_slot1;
                var29 = _closure1_slot2;
                var27 = 22;
                var15 = var29[var27];
                var17 = var28.bind(var3)(var15);
                var15 = {};
                var15.source = var30;
                var27 = var29[var27];
                var27 = var28.bind(var3)(var27);
                var27 = var27.Sizes;
                var27 = var27.EXTRA_SMALL;
                var15.size = var27;
                var27 = var24.eventsChannelIcon;
                var15.style = var27;
                var15.disableColor = var22;
                var16 = var26.bind(var3)(var17, var15);
            case 1309:
                _fun104322_ip = 1337;
                continue _fun104322;
            case 1311:
                var17 = _closure1_slot11;
                var15 = {};
                var15.size = var25;
                var24 = var24.eventsChannelIcon;
                var15.style = var24;
                var16 = var17.bind(var3)(var18, var15);
            case 1337:
                var15 = new Array(2);
                var15[0] = var16;
                var18 = _closure1_slot11;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var21];
                var16 = var17.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'lineClamp': 2,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var21 = var19 != var23;
                var19 = null;
                if (!var21) {
                    _fun104322_ip = 1426;
                    continue _fun104322
                }
            case 1394:
                var21 = _closure1_slot0;
                var24 = _closure1_slot2;
                var20 = 20;
                var20 = var24[var20];
                var21 = var21.bind(var3)(var20);
                var20 = var21.guildEventDetailsParser;
                var19 = var20.bind(var21)(var23, var22);
            case 1426:
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[4] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Pressable;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var8 = var7.isGuildEventEnded;
    var _closure1_slot6 = var8;
    var7 = var7.isGuildScheduledEventActive;
    var _closure1_slot7 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createICYMIStyles;
    var3 = function(arg0) { // Environment: var1
        var2 = arg0;
        var0 = {};
        var1 = {};
        var3 = var2.margin;
        var1.marginHorizontal = var3;
        var3 = var2.margin;
        var1.marginBottom = var3;
        var3 = var2.margin;
        var2 = var2.inset;
        var2 = var3 + var2;
        var1.marginLeft = var2;
        var0.container = var1;
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 7;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.marginTop = var6;
        var0.card = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_4;
        var1.marginBottom = var6;
        var0.title = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'marginBottom': null,
            'justifyContent': 'space-between'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_8;
        var1.marginBottom = var6;
        var0.timeAndUserPillContainer = var1;
        var1 = {
            'height': 1,
            'width': '100%'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BORDER_SUBTLE;
        var1.backgroundColor = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.marginVertical = var6;
        var0.separator = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.INTERACTIVE_TEXT_DEFAULT;
        var1.tintColor = var6;
        var0.eventsChannelIcon = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_4;
        var1.gap = var6;
        var0.infoContainer = var1;
        var1 = {
            'alignItems': 'center',
            'flexDirection': 'row'
        };
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_8;
        var1.gap = var2;
        var0.locationContainer = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ICYMIGuildEventRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104327: for (var _fun104327_ip = 0;;) switch (_fun104327_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.eventId;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 23;
                var5 = var6[var2];
                var4 = undefined;
                var9 = var3.bind(var4)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getGuildScheduledEvent;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var8.bind(var9)(var7, var5);
                var _closure2_slot1 = var7;
                var5 = var6[var2];
                var10 = var3.bind(var4)(var5);
                var9 = var10.useStateFromStores;
                var5 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var0
                    _fun104329: for (var _fun104329_ip = 0;;) switch (_fun104329_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot1;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun104329_ip = 39;
                                continue _fun104329
                            }
                        case 30:
                            var3 = _closure2_slot1;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var5 = var9.bind(var10)(var8, var5);
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var8 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var0
                    _fun104330: for (var _fun104330_ip = 0;;) switch (_fun104330_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var1 = var2.getChannel;
                            var4 = _closure2_slot1;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun104330_ip = 39;
                                continue _fun104330
                            }
                        case 30:
                            var3 = _closure2_slot1;
                            var0 = var3.channel_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6 = var3.bind(var6)(var2, var0);
                var3 = null;
                var2 = var3 == var7;
                var0 = null;
                if (var2) {
                    _fun104327_ip = 215;
                    continue _fun104327
                }
            case 163:
                var2 = var3 == var5;
                var0 = null;
                if (var2) {
                    _fun104327_ip = 215;
                    continue _fun104327
                }
            case 172:
                var2 = _closure1_slot6;
                var2 = var2.bind(var4)(var7);
                var0 = null;
                if (var2) {
                    _fun104327_ip = 215;
                    continue _fun104327
                }
            case 186:
                var3 = _closure1_slot11;
                var2 = _closure1_slot14;
                var1 = {};
                var1.event = var7;
                var1.channel = var6;
                var1.guild = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 215:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3334, 1372, 1410, 33, 13528, 671, 8086, 1234, 8083, 8102, 8162, 8885, 8185, 5615, 8174, 13569, 21, 3941, 8163, 4853, 4086, 566, 2]);