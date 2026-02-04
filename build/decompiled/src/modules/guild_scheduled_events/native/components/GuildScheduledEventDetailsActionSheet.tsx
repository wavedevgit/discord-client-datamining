// modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EventDetailSections;
    var _closure1_slot8 = var6;
    var3 = var3.MAX_RSVP_USER_DISPLAY_COUNT;
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
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.paddingHorizontal = var9;
    var3.segmentedControl = var8;
    var8 = {};
    var9 = 'column';
    var8.flexDirection = var9;
    var3.header = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66256: for (var _fun66256_ip = 0;;) switch (_fun66256_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.eventId;
                var _closure2_slot0 = var12;
                var6 = var0.event;
                var _closure2_slot1 = var6;
                var7 = var0.recurrenceId;
                var16 = var0.onCloseActionSheet;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var0 = _closure1_slot12;
                var25 = var0.bind(var4)();
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var0 = var3[var1];
                var2 = var5.bind(var4)(var0);
                var0 = 11;
                var0 = var3[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.GUILD_EVENT_MODAL;
                var0 = var2.bind(var4)(var0);
                var5 = var0.analyticsLocations;
                var2 = _closure1_slot4;
                var0 = var2.useState;
                var2 = var0.bind(var2)(var7);
                var0 = _closure1_slot3;
                var15 = 2;
                var0 = var0.bind(var4)(var2, var15);
                var23 = 0;
                var14 = var0[var23];
                var22 = 1;
                var13 = var0[var22];
                var2 = _closure1_slot0;
                var0 = 12;
                var7 = var3[var0];
                var10 = var2.bind(var4)(var7);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = new Array(2);
                var7[0] = var12;
                var7[1] = var6;
                var6 = function() { // Environment: var21
                    _fun66257: for (var _fun66257_ip = 0;;) switch (_fun66257_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getGuildScheduledEvent;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var0);
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun66257_ip = 35;
                                continue _fun66257
                            }
                        case 31:
                            var0 = _closure2_slot1;
                        case 35:
                            return var0;
                    }
                };
                var18 = var9.bind(var10)(var8, var6, var7);
                var _closure2_slot2 = var18;
                var0 = var3[var0];
                var6 = var2.bind(var4)(var0);
                var3 = var6.useStateFromStores;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var21
                    _fun66258: for (var _fun66258_ip = 0;;) switch (_fun66258_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var2 = var3.getGuild;
                            var0 = _closure2_slot2;
                            var1 = null;
                            var5 = var1 == var0;
                            var0 = undefined;
                            if (var5) {
                                _fun66258_ip = 39;
                                continue _fun66258
                            }
                        case 30:
                            var4 = _closure2_slot2;
                            var0 = var4.guild_id;
                        case 39:
                            var0 = var2.bind(var3)(var0);
                            var0 = var1 != var0;
                            return var0;
                    }
                };
                var6 = var3.bind(var6)(var2, var0);
                var0 = null;
                var2 = var0 == var18;
                var9 = undefined;
                if (var2) {
                    _fun66256_ip = 281;
                    continue _fun66256
                }
            case 276:
                var9 = var18.id;
            case 281:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var7 = var0 == var18;
                var2 = undefined;
                if (var7) {
                    _fun66256_ip = 315;
                    continue _fun66256
                }
            case 310:
                var2 = var18.guild_id;
            case 315:
                var2 = var3.bind(var4)(var2, var9, var14);
                _closure2_slot3 = var2;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 14;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var12 = var3.bind(var4)(var9, var14);
                _closure2_slot4 = var12;
                var9 = _closure1_slot4;
                var10 = var9.useMemo;
                var3 = new Array(2);
                var3[0] = var12;
                var3[1] = var2;
                var2 = function() { // Environment: var21
                    _fun66259: for (var _fun66259_ip = 0;;) switch (_fun66259_ip) {
                        case 0:
                            var6 = _closure2_slot3;
                            var0 = _closure2_slot4;
                            var0 = var0.length;
                            var2 = _closure1_slot9;
                            var2 = var0 >= var2;
                            if (!var2) {
                                _fun66259_ip = 38;
                                continue _fun66259
                            }
                        case 30:
                            var3 = _closure1_slot9;
                            var2 = var6 > var3;
                        case 38:
                            var3 = 0;
                            var4 = 0;
                            if (!var2) {
                                _fun66259_ip = 68;
                                continue _fun66259
                            }
                        case 45:
                            var2 = global;
                            var5 = var2.Math;
                            var2 = var5.max;
                            var0 = var6 - var0;
                            var4 = var2.bind(var5)(var0, var3);
                        case 68:
                            if (!(var4 > var3)) {
                                _fun66259_ip = 85;
                                continue _fun66259
                            }
                        case 72:
                            var0 = _closure2_slot4;
                            var0 = var0.length;
                            if (!(!(var0 > var3))) {
                                _fun66259_ip = 91;
                                continue _fun66259
                            }
                        case 85:
                            var0 = _closure2_slot4;
                            _fun66259_ip = 130;
                            continue _fun66259;
                        case 91:
                            var8 = _closure2_slot4;
                            var1 = new Array(1);
                            var9 = var1;
                            var7 = 0;
                            var3 = arraySpread(var9, var8, var7);
                            var2 = {};
                            var2.count = var4;
                            var1[var3] = var2;
                            var2 = 1;
                            var2 = var3 + var2;
                            var0 = var1;
                        case 130:
                            return var0;
                    }
                };
                var20 = var10.bind(var9)(var2, var3);
                var2 = 15;
                var2 = var8[var2];
                var3 = var7.bind(var4)(var2);
                var2 = function() { // Environment: var21
                    _fun66260: for (var _fun66260_ip = 0;;) switch (_fun66260_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.getGuildEventUsers;
                            var1 = _closure2_slot2;
                            var2 = null;
                            var6 = var2 == var1;
                            var1 = undefined;
                            if (var6) {
                                _fun66260_ip = 60;
                                continue _fun66260
                            }
                        case 51:
                            var6 = _closure2_slot2;
                            var1 = var6.id;
                        case 60:
                            var6 = _closure2_slot2;
                            var6 = var2 == var6;
                            var0 = undefined;
                            if (var6) {
                                _fun66260_ip = 82;
                                continue _fun66260
                            }
                        case 73:
                            var5 = _closure2_slot2;
                            var0 = var5.guild_id;
                        case 82:
                            var0 = var3.bind(var4)(var1, var2, var0);
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var10 = _closure1_slot3;
                var2 = var10.bind(var4)(var2, var15);
                var3 = var2[var23];
                _closure2_slot5 = var3;
                var2 = var2[var22];
                var19 = var2.loading;
                var12 = var2.error;
                var2 = var9.useState;
                var2 = var2.bind(var9)(var23);
                var2 = var10.bind(var4)(var2, var15);
                var3 = var2[var23];
                var2 = var2[var22];
                _closure2_slot6 = var2;
                var2 = var9.useState;
                var2 = var2.bind(var9)(var23);
                var2 = var10.bind(var4)(var2, var15);
                var10 = var2[var23];
                var2 = var2[var22];
                _closure2_slot7 = var2;
                var2 = 17;
                var2 = var8[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var17 = var2.bottom;
                var8 = var9.useCallback;
                var7 = function(arg0) { // Environment: var21
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = _closure2_slot7;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var15 = var8.bind(var9)(var7, var2);
                var8 = var9.useCallback;
                var7 = function() { // Environment: var21
                    var0 = undefined;
                    return var0;
                };
                var2 = new Array(0);
                var9 = var8.bind(var9)(var7, var2);
                var2 = _closure1_slot8;
                var7 = var2.EVENT_INFO;
                var2 = new Array(1);
                var2[0] = var7;
                _closure2_slot8 = var2;
                if (!var6) {
                    _fun66256_ip = 613;
                    continue _fun66256
                }
            case 593:
                var7 = var2.push;
                var6 = _closure1_slot8;
                var6 = var6.RSVP_LIST;
                var6 = var7.bind(var2)(var6);
            case 613:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 18;
                var6 = var8[var6];
                var8 = var7.bind(var4)(var6);
                var7 = var8.useSegmentedControlState;
                var6 = {};
                var6.pageWidth = var23;
                var6.defaultIndex = var3;
                var23 = function arg0() {
                    _fun66263: for (var _fun66263_ip = 0;;) switch (_fun66263_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot8;
                            var1 = var1.length;
                            var1 = var2 < var1;
                            if (!var1) {
                                _fun66263_ip = 47;
                                continue _fun66263
                            }
                        case 22:
                            var3 = _closure2_slot8;
                            var4 = var3[var2];
                            var3 = _closure1_slot8;
                            var3 = var3.RSVP_LIST;
                            var1 = var4 === var3;
                        case 47:
                            if (!var1) {
                                _fun66263_ip = 60;
                                continue _fun66263
                            }
                        case 50:
                            var3 = _closure2_slot5;
                            var1 = undefined;
                            var1 = var3.bind(var1)();
                        case 60:
                            var1 = _closure2_slot6;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var6.onSetActiveIndex = var23;
                var23 = var2.map;
                var21 = function(arg0) { // Environment: var21
                    _fun66264: for (var _fun66264_ip = 0;;) switch (_fun66264_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = _closure2_slot3;
                            var1 = _closure1_slot8;
                            var1 = var1.EVENT_INFO;
                            if (!(var1 !== var2)) {
                                _fun66264_ip = 175;
                                continue _fun66264
                            }
                        case 30:
                            var1 = _closure1_slot8;
                            var1 = var1.RSVP_LIST;
                            if (!(var1 !== var2)) {
                                _fun66264_ip = 106;
                                continue _fun66264
                            }
                        case 44:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 9;
                            var2 = var7[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var7[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.iW6Xuo;
                            var1 = var2.bind(var3)(var1);
                            _fun66264_ip = 232;
                            continue _fun66264;
                        case 106:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 9;
                            var4 = var8[var2];
                            var3 = undefined;
                            var4 = var7.bind(var3)(var4);
                            var5 = var4.intl;
                            var4 = var5.formatToPlainString;
                            var2 = var8[var2];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.t;
                            var3 = var2["ZrTT/N"];
                            var2 = {};
                            var2.userCount = var6;
                            var1 = var4.bind(var5)(var3, var2);
                            _fun66264_ip = 232;
                            continue _fun66264;
                        case 175:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 9;
                            var2 = var6[var0];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var0 = var6[var0];
                            var0 = var5.bind(var4)(var0);
                            var0 = var0.t;
                            var0 = var0.iW6Xuo;
                            var1 = var2.bind(var3)(var0);
                        case 232:
                            var0 = {};
                            var0.id = var1;
                            var0.label = var1;
                            var1 = null;
                            var0.page = var1;
                            return var0;
                    }
                };
                var21 = var23.bind(var2)(var21);
                var6.items = var21;
                var27 = var7.bind(var8)(var6);
                if (!(var0 != var18)) {
                    _fun66256_ip = 1169;
                    continue _fun66256
                }
            case 696:
                var8 = _closure1_slot11;
                var7 = _closure1_slot5;
                var6 = {};
                var21 = var25.header;
                var6.style = var21;
                var6.onLayout = var9;
                var23 = _closure1_slot10;
                var21 = _closure1_slot0;
                var24 = _closure1_slot2;
                var9 = 19;
                var9 = var24[var9];
                var9 = var21.bind(var4)(var9);
                var21 = var9.GuildEventCardImageHeader;
                var9 = {};
                var9.event = var18;
                var21 = var23.bind(var4)(var21, var9);
                var9 = new Array(2);
                var9[0] = var21;
                var21 = var2.length;
                var22 = var21 > var22;
                var21 = null;
                if (!var22) {
                    _fun66256_ip = 853;
                    continue _fun66256
                }
            case 785:
                var24 = _closure1_slot10;
                var23 = _closure1_slot5;
                var22 = {};
                var25 = var25.segmentedControl;
                var22.style = var25;
                var26 = _closure1_slot0;
                var28 = _closure1_slot2;
                var25 = 20;
                var25 = var28[var25];
                var25 = var26.bind(var4)(var25);
                var26 = var25.SegmentedControl;
                var25 = {};
                var25.state = var27;
                var25 = var24.bind(var4)(var26, var25);
                var22.children = var25;
                var21 = var24.bind(var4)(var23, var22);
            case 853:
                var9[1] = var21;
                var6.children = var9;
                var7 = var8.bind(var4)(var7, var6);
                var6 = var2.length;
                if (!(!(var3 < var6))) {
                    _fun66256_ip = 888;
                    continue _fun66256
                }
            case 876:
                var6 = _closure1_slot8;
                var8 = var6.EVENT_INFO;
                _fun66256_ip = 892;
                continue _fun66256;
            case 888:
                var8 = var2[var3];
            case 892:
                var3 = _closure1_slot10;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = var9[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var5 = 21;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.BottomSheet;
                var5 = {
                    'scrollable': true,
                    'startExpanded': true
                };
                var5.onDismiss = var16;
                var5.header = var7;
                var7 = _closure1_slot8;
                var7 = var7.EVENT_INFO;
                if (!(var8 !== var7)) {
                    _fun66256_ip = 1051;
                    continue _fun66256
                }
            case 980:
                var9 = _closure1_slot10;
                var8 = _closure1_slot1;
                var21 = _closure1_slot2;
                var7 = 24;
                var7 = var21[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.userListItems = var20;
                var20 = var18.guild_id;
                var7.guildId = var20;
                var7.loading = var19;
                var7.error = var12;
                var10 = var10 - var17;
                var7.contentHeight = var10;
                var7.safeBottomPadding = var17;
                var7 = var9.bind(var4)(var8, var7);
                _fun66256_ip = 1147;
                continue _fun66256;
            case 1051:
                var10 = _closure1_slot10;
                var9 = _closure1_slot0;
                var19 = _closure1_slot2;
                var8 = 22;
                var8 = var19[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.BottomSheetScrollView;
                var8 = {};
                var12 = _closure1_slot1;
                var11 = 23;
                var11 = var19[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var11.guildEvent = var18;
                var11.safeBottomPadding = var17;
                var11.onCloseActionSheet = var16;
                var11.onLayout = var15;
                var11.recurrenceId = var14;
                var11.onRecurrencePress = var13;
                var11 = var10.bind(var4)(var12, var11);
                var8.children = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 1147:
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1169:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 3334, 1378, 33, 1297, 671, 1234, 5726, 5579, 566, 8177, 8190, 8101, 8178, 1568, 7798, 8167, 8191, 4931, 4933, 8194, 8200, 2]);