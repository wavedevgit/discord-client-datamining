// modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildScheduledEventActive;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var11 = 4;
    var3 = var5[var11];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'margin': 12,
        'padding': 12,
        'borderRadius': null,
        'borderColor': null,
        'borderWidth': 1
    };
    var10 = 12;
    var12 = 5;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9.borderRadius = var14;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9.borderColor = var14;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var3.header = var9;
    var9 = {};
    var9.paddingTop = var11;
    var3.descriptionContainerStyle = var9;
    var9 = {};
    var9.marginTop = var10;
    var3.button = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun91594: for (var _fun91594_ip = 0;;) switch (_fun91594_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channel;
                var _closure2_slot0 = var10;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var0 = _closure1_slot8;
                var15 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var5 = var3[var0];
                var7 = var2.bind(var4)(var5);
                var6 = var7.useActiveEvent;
                var5 = var10.id;
                var9 = var6.bind(var7)(var5);
                var _closure2_slot1 = var9;
                var0 = var3[var0];
                var6 = var2.bind(var4)(var0);
                var5 = var6.useImminentUpcomingGuildEvents;
                var0 = var10.id;
                var7 = var5.bind(var6)(var0);
                var0 = 7;
                var0 = var3[var0];
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot4;
                    var0 = var1.getVoiceChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var3.bind(var5)(var2, var0);
                var0 = var10.id;
                var6 = var2 === var0;
                var0 = null;
                var2 = var9;
                if (!(var0 == var2)) {
                    _fun91594_ip = 178;
                    continue _fun91594
                }
            case 160:
                var5 = var0 == var7;
                var3 = undefined;
                if (var5) {
                    _fun91594_ip = 175;
                    continue _fun91594
                }
            case 169:
                var5 = 0;
                var3 = var7[var5];
            case 175:
                var2 = var3;
            case 178:
                _closure2_slot2 = var2;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 8;
                var3 = var7[var3];
                var8 = var5.bind(var4)(var3);
                var3 = var8.useManageResourcePermissions;
                var3 = var3.bind(var8)(var10);
                var3 = var3.canManageGuildEvent;
                var8 = var3.bind(var4)(var2);
                var3 = 9;
                var3 = var7[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.getNextRecurrenceIdInEvent;
                var3 = var3.bind(var5)(var2);
                var5 = var0 != var3;
                var12 = var2;
                var2 = undefined;
                if (!var5) {
                    _fun91594_ip = 262;
                    continue _fun91594
                }
            case 259:
                var2 = var3;
            case 262:
                _closure2_slot3 = var2;
                var5 = _closure1_slot3;
                var7 = var5.useCallback;
                var3 = new Array(4);
                var3[0] = var12;
                var3[1] = var10;
                var3[2] = var9;
                var3[3] = var2;
                var2 = function() { // Environment: var1
                    _fun91596: for (var _fun91596_ip = 0;;) switch (_fun91596_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 == var1;
                            if (!var1) {
                                _fun91596_ip = 24;
                                continue _fun91596
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun91596_ip = 108;
                                continue _fun91596
                            }
                        case 27:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 10;
                            var2 = var4[var2];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.hideActionSheet;
                            var2 = var2.bind(var5)();
                            var2 = _closure1_slot0;
                            var1 = 11;
                            var1 = var4[var1];
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.openStartGuildEventModal;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openVoiceChannelActionSheet;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 108:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var7.bind(var5)(var2, var3);
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var12;
                var1 = function() { // Environment: var1
                    _fun91598: for (var _fun91598_ip = 0;;) switch (_fun91598_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun91598_ip = 100;
                                continue _fun91598
                            }
                        case 13:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 10;
                            var1 = var4[var1];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var1);
                            var1 = var5.hideActionSheet;
                            var1 = var1.bind(var5)();
                            var1 = _closure1_slot0;
                            var0 = 13;
                            var0 = var4[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.openGuildEventDetails;
                            var0 = {};
                            var4 = _closure2_slot2;
                            var4 = var4.id;
                            var0.eventId = var4;
                            var3 = _closure2_slot2;
                            var0.event = var3;
                            var0 = var1.bind(var2)(var0);
                        case 100:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var3.bind(var5)(var1, var2);
                if (!(var0 != var12)) {
                    _fun91594_ip = 686;
                    continue _fun91594
                }
            case 341:
                var1 = _closure1_slot5;
                var7 = var1.bind(var4)(var12);
                var3 = _closure1_slot7;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 14;
                var1 = var16[var1];
                var1 = var10.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var9 = 'button';
                var1.accessibilityRole = var9;
                var1.onPress = var5;
                var5 = var15.header;
                var1.style = var5;
                var11 = _closure1_slot6;
                var9 = 15;
                var5 = var16[var9];
                var5 = var10.bind(var4)(var5);
                var17 = var5.GuildEventCardHeader;
                var5 = {};
                var5.event = var12;
                var18 = false;
                var5.showUserCount = var18;
                var17 = var11.bind(var4)(var17, var5);
                var5 = new Array(3);
                var5[0] = var17;
                var9 = var16[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.GuildEventCardMetaInfo;
                var9 = {};
                var9.event = var12;
                var12 = var15.descriptionContainerStyle;
                var9.descriptionContainerStyle = var12;
                var9.condensed = var6;
                var9 = var11.bind(var4)(var10, var9);
                var5[1] = var9;
                if (!var6) {
                    _fun91594_ip = 507;
                    continue _fun91594
                }
            case 504:
                var6 = var8;
            case 507:
                if (!var6) {
                    _fun91594_ip = 513;
                    continue _fun91594
                }
            case 510:
                var6 = !var7;
            case 513:
                if (!var6) {
                    _fun91594_ip = 670;
                    continue _fun91594
                }
            case 519:
                var9 = _closure1_slot6;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 16;
                var7 = var12[var10];
                var8 = var11.bind(var4)(var7);
                var7 = {};
                var15 = var15.button;
                var7.style = var15;
                var17 = _closure1_slot0;
                var14 = 17;
                var15 = var12[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var12[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.cK1GGY;
                var14 = var15.bind(var16)(var14);
                var7.text = var14;
                var7.onPress = var13;
                var13 = var12[var10];
                var13 = var11.bind(var4)(var13);
                var13 = var13.Colors;
                var13 = var13.GREEN;
                var7.color = var13;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.Sizes;
                var10 = var10.SMALL;
                var7.size = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 670:
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 686:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1670, 3334, 33, 1297, 671, 8080, 566, 8089, 8083, 3278, 8095, 7876, 8185, 4902, 8164, 4873, 1234, 2]);