// modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignSelf': 'stretch',
        'flexDirection': 'row',
        'justifyContent': 'space-between'
    };
    var3.container = var8;
    var8 = {
        'marginStart': 8,
        'flexShrink': 0,
        'flexGrow': 1
    };
    var3.eventHeader = var8;
    var8 = {};
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var3.active = var8;
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'flexShrink': 0
    };
    var3.actions = var8;
    var8 = {
        'flexShrink': 0,
        'alignItems': 'center',
        'flexDirection': 'row',
        'padding': 8,
        'marginLeft': 8
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var3.secondarySmallButton = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_STRONG;
    var8.tintColor = var9;
    var3.secondarySmallIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66370: for (var _fun66370_ip = 0;;) switch (_fun66370_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.recurrenceId;
                var _closure2_slot0 = var8;
                var1 = var0.guildEventId;
                var _closure2_slot1 = var1;
                var1 = var0.onPress;
                var _closure2_slot2 = var1;
                var7 = var0.isActive;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var0 = _closure1_slot9;
                var15 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 8;
                var0 = var2[var3];
                var6 = var1.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var14
                    var2 = _closure1_slot6;
                    var1 = var2.getGuildScheduledEvent;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var5.bind(var6)(var1, var0);
                var _closure2_slot3 = var9;
                var1 = _closure1_slot1;
                var0 = 9;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var0 = null;
                var5 = var0 == var9;
                var1 = undefined;
                if (var5) {
                    _fun66370_ip = 151;
                    continue _fun66370
                }
            case 146:
                var1 = var9.id;
            case 151:
                var1 = var2.bind(var4)(var8, var1);
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = var10[var3];
                var12 = var5.bind(var4)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var14
                    _fun66372: for (var _fun66372_ip = 0;;) switch (_fun66372_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot3;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun66372_ip = 39;
                                continue _fun66372
                            }
                        case 30:
                            var3 = _closure2_slot3;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var6, var2);
                _closure2_slot4 = var2;
                var3 = var10[var3];
                var12 = var5.bind(var4)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var14
                    _fun66373: for (var _fun66373_ip = 0;;) switch (_fun66373_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var1 = var2.getChannel;
                            var4 = _closure2_slot3;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun66373_ip = 39;
                                continue _fun66373
                            }
                        case 30:
                            var3 = _closure2_slot3;
                            var0 = var3.channel_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6 = var11.bind(var12)(var6, var3);
                var3 = 10;
                var3 = var10[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useManageResourcePermissions;
                if (!(var0 != var6)) {
                    _fun66370_ip = 272;
                    continue _fun66370
                }
            case 269:
                var2 = var6;
            case 272:
                var2 = var3.bind(var5)(var2);
                var2 = var2.canManageGuildEvent;
                var2 = var2.bind(var4)(var9);
                _closure2_slot5 = var2;
                if (!(var0 != var9)) {
                    _fun66370_ip = 844;
                    continue _fun66370
                }
            case 299:
                if (!(var0 == var1)) {
                    _fun66370_ip = 305;
                    continue _fun66370
                }
            case 303:
                var1 = {};
            case 305:
                var1 = var1.is_canceled;
                var11 = var4 !== var1;
                if (!var11) {
                    _fun66370_ip = 321;
                    continue _fun66370
                }
            case 318:
                var11 = var1;
            case 321:
                _closure2_slot6 = var11;
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = 11;
                var1 = var1[var10];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var5 = function arg0() {
                    _fun66374: for (var _fun66374_ip = 0;;) switch (_fun66374_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.stopPropagation;
                            var0 = var0.bind(var1)();
                            var1 = _closure2_slot6;
                            if (var1) {
                                _fun66374_ip = 33;
                                continue _fun66374
                            }
                        case 23:
                            var3 = _closure2_slot2;
                            var2 = null;
                            var1 = var2 == var3;
                        case 33:
                            if (var1) {
                                _fun66374_ip = 51;
                                continue _fun66374
                            }
                        case 36:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 51:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onPress = var5;
                var5 = '';
                var1['aria-label'] = var5;
                var6 = var15.container;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = undefined;
                if (!var7) {
                    _fun66370_ip = 401;
                    continue _fun66370
                }
            case 395:
                var6 = var15.active;
            case 401:
                var5[1] = var6;
                var1.style = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 12;
                var5 = var12[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.GuildEventCardHeader;
                var5 = {};
                var5.event = var9;
                var9 = var15.eventHeader;
                var5.style = var9;
                var9 = false;
                var5.showUserCount = var9;
                var5.showCreator = var9;
                var5.recurrenceId = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot8;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var15.actions;
                var6.style = var9;
                if (!var11) {
                    _fun66370_ip = 612;
                    continue _fun66370
                }
            case 510:
                var16 = _closure1_slot7;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var9 = 13;
                var9 = var21[var9];
                var9 = var20.bind(var4)(var9);
                var12 = var9.Text;
                var9 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-feedback-critical'
                };
                var17 = 14;
                var18 = var21[var17];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.fyBVRm;
                var17 = var18.bind(var19)(var17);
                var9.children = var17;
                var11 = var16.bind(var4)(var12, var9);
            case 612:
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot7;
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = var18[var10];
                var10 = var20.bind(var4)(var10);
                var11 = var10.PressableOpacity;
                var10 = {};
                var16 = 'button';
                var10.accessibilityRole = var16;
                var16 = 14;
                var17 = var18[var16];
                var17 = var20.bind(var4)(var17);
                var19 = var17.intl;
                var17 = var19.string;
                var16 = var18[var16];
                var16 = var20.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.HIgA5a;
                var16 = var17.bind(var19)(var16);
                var10.accessibilityLabel = var16;
                var14 = function arg0() {
                    _fun66375: for (var _fun66375_ip = 0;;) switch (_fun66375_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.stopPropagation;
                            var0 = var0.bind(var1)();
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun66375_ip = 76;
                                continue _fun66375
                            }
                        case 26:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.showGuildEventModeratorActionSheet;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot5;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 76:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10.onPress = var14;
                var14 = var15.secondarySmallButton;
                var10.style = var14;
                var17 = _closure1_slot1;
                var16 = 16;
                var13 = var18[var16];
                var14 = var17.bind(var4)(var13);
                var13 = {};
                var19 = 17;
                var19 = var18[var19];
                var19 = var17.bind(var4)(var19);
                var13.source = var19;
                var16 = var18[var16];
                var16 = var17.bind(var4)(var16);
                var16 = var16.Sizes;
                var16 = var16.REFRESH_SMALL_16;
                var13.size = var16;
                var15 = var15.secondarySmallIcon;
                var13.style = var15;
                var13 = var12.bind(var4)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 844:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 3334, 33, 1297, 671, 566, 8109, 8111, 4904, 8186, 3941, 1234, 8117, 4086, 8218, 2]);