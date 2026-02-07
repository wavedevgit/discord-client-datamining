// modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun66739: for (var _fun66739_ip = 0;;) switch (_fun66739_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.eventCount;
                var0 = var0.guild;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot10;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var0 = var0.id;
                var4 = var1.bind(var3)(var0);
                var _closure2_slot1 = var4;
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var0 = 12;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheetTitleHeader;
                var0 = {};
                var5 = 0;
                if (!(!(var13 > var5))) {
                    _fun66739_ip = 158;
                    continue _fun66739
                }
            case 101:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 13;
                var6 = var12[var5];
                var6 = var11.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.tlopTM;
                var5 = var6.bind(var7)(var5);
                _fun66739_ip = 223;
                continue _fun66739;
            case 158:
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 13;
                var11 = var14[var6];
                var11 = var7.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var6 = var14[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.t;
                var7 = var6.p1zLAf;
                var6 = {};
                var6.count = var13;
                var5 = var11.bind(var12)(var7, var6);
            case 223:
                var0.title = var5;
                if (!var4) {
                    _fun66739_ip = 401;
                    continue _fun66739
                }
            case 233:
                var7 = _closure1_slot9;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 14;
                var5 = var13[var11];
                var6 = var12.bind(var3)(var5);
                var5 = {};
                var14 = var13[var11];
                var14 = var12.bind(var3)(var14);
                var14 = var14.Sizes;
                var14 = var14.XSMALL;
                var5.size = var14;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.Colors;
                var11 = var11.TRANSPARENT;
                var5.color = var11;
                var10 = var10.createEventButtonText;
                var5.textStyle = var10;
                var12 = _closure1_slot0;
                var9 = 13;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.NzROFF;
                var9 = var10.bind(var11)(var9);
                var5.text = var9;
                var8 = function() {
                    _fun66740: for (var _fun66740_ip = 0;;) switch (_fun66740_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun66740_ip = 86;
                                continue _fun66740
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 15;
                            var5 = var4[var1];
                            var2 = undefined;
                            var6 = var3.bind(var2)(var5);
                            var5 = var6.closeGuildEventListActionSheet;
                            var5 = var5.bind(var6)();
                            var1 = var4[var1];
                            var3 = var3.bind(var2)(var1);
                            var2 = var3.openCreateOrEditGuildEventModal;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var4 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 15;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openGuildEventListActionSheet;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0.onClose = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onPress = var8;
                var8 = true;
                var5.shrink = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 401:
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ANALYTICS_GUILD_EVENTS_MODAL_NAME;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReadStateTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Fonts;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var3.container = var8;
    var8 = {};
    var8.flex = var11;
    var3.headerTitle = var8;
    var8 = {};
    var12 = 'center';
    var8.alignSelf = var12;
    var3.actionContainer = var8;
    var8 = {};
    var8.flex = var11;
    var3.createEventButton = var8;
    var8 = {};
    var11 = 9;
    var11 = var5[var11];
    var12 = var10.bind(var0)(var11);
    var11 = var9.DISPLAY_SEMIBOLD;
    var9 = 10;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var10 = var9.TEXT_BRAND;
    var9 = 16;
    var14 = var12.bind(var0)(var11, var10, var9);
    var15 = var8;
    var9 = copyDataProperties(var15, var14);
    var3.createEventButtonText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var10 = var1.guild;
        var _closure2_slot0 = var10;
        var12 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 16;
        var1 = var13[var1];
        var3 = undefined;
        var2 = var12.bind(var3)(var1);
        var1 = var10.id;
        var16 = var2.bind(var3)(var1);
        var _closure2_slot1 = var16;
        var1 = _closure1_slot10;
        var8 = var1.bind(var3)();
        var4 = _closure1_slot3;
        var2 = var4.useRef;
        var9 = _closure1_slot5;
        var6 = var9.ackMessageId;
        var5 = var10.id;
        var1 = _closure1_slot8;
        var1 = var1.GUILD_EVENT;
        var1 = var6.bind(var9)(var5, var1);
        var11 = var2.bind(var4)(var1);
        var5 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var16;
        var1 = var10.id;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            var3 = _closure2_slot1;
            var2 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.getGuildEventUserCounts;
                var0 = _closure2_slot0;
                var2 = var0.id;
                var0 = arg0;
                var1 = var0.id;
                var0 = new Array(0);
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 17;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.getGuildEventsForCurrentUser;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var5.bind(var4)(var1, var2);
        var5 = var4.useCallback;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 15;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.closeGuildEventListActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var1 = new Array(0);
        var14 = var5.bind(var4)(var2, var1);
        var5 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var10;
        var1 = function(arg0, arg1) { // Environment: var0
            var4 = arg0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 18;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.openGuildEventDetails;
            var1 = {};
            var5 = var4.id;
            var1.eventId = var5;
            var1.event = var4;
            var4 = arg1;
            var1.recurrenceId = var4;
            var4 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 15;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.openGuildEventListActionSheet;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1.onClose = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var15 = var5.bind(var4)(var1, var2);
        var1 = 19;
        var1 = var13[var1];
        var2 = var12.bind(var3)(var1);
        var1 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 20;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.OPEN_MODAL;
            var1 = {};
            var5 = _closure1_slot6;
            var1.type = var5;
            var6 = _closure2_slot0;
            var6 = var6.id;
            var1.guild_id = var6;
            var5 = _closure2_slot1;
            var5 = var5.length;
            var1.guild_events_count = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var2 = var4.useEffect;
        var5 = var10.id;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun66749: for (var _fun66749_ip = 0;;) switch (_fun66749_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun66749_ip = 74;
                        continue _fun66749
                    }
                case 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.ackGuildFeature;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure1_slot8;
                    var0 = var0.GUILD_EVENT;
                    var0 = var2.bind(var3)(var1, var0);
                case 74:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot9;
        var1 = _closure1_slot0;
        var0 = 22;
        var0 = var13[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {
            'showGradient': true,
            'scrollable': null,
            'startExpanded': true
        };
        var17 = true;
        var5 = var16.length;
        var4 = 0;
        var4 = var5 > var4;
        var0.scrollable = var4;
        var6 = _closure1_slot9;
        var5 = _closure1_slot11;
        var4 = {};
        var9 = var16.length;
        var4.eventCount = var9;
        var4.guild = var10;
        var4 = var6.bind(var3)(var5, var4);
        var0.header = var4;
        var6 = _closure1_slot9;
        var5 = _closure1_slot4;
        var4 = {};
        var8 = var8.container;
        var4.style = var8;
        var9 = _closure1_slot9;
        var7 = 23;
        var7 = var13[var7];
        var8 = var12.bind(var3)(var7);
        var7 = {};
        var7.inActionSheet = var17;
        var7.events = var16;
        var7.onPressEvent = var15;
        var7.onCloseAction = var14;
        var7.guild = var10;
        var10 = 24;
        var10 = var13[var10];
        var10 = var12.bind(var3)(var10);
        var10 = var10.bind(var3)(var11);
        var7.lastAckedId = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3948, 1378, 660, 4304, 483, 33, 1297, 4682, 671, 8163, 5261, 1234, 4875, 8167, 8152, 8247, 8257, 4103, 795, 4574, 4933, 8383, 4737, 2]);