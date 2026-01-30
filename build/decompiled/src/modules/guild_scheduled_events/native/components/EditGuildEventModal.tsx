// modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot6 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventEntityTypes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var3.cardStyle = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var15 = var0.guild;
        var _closure2_slot0 = var15;
        var1 = var0.onCloseModal;
        var _closure2_slot1 = var1;
        var13 = var0.initialGuildEvent;
        var _closure2_slot2 = var13;
        var5 = var0.targetChannel;
        var1 = _closure1_slot9;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var6 = 7;
        var1 = var8[var6];
        var2 = var7.bind(var3)(var1);
        var1 = var2.getInitialGuildEventData;
        var2 = var1.bind(var2)(var13, var5);
        var17 = _closure1_slot6;
        var1 = var17.useState;
        var1 = var1.bind(var17)(var2);
        var16 = _closure1_slot5;
        var10 = 2;
        var1 = var16.bind(var3)(var1, var10);
        var9 = 0;
        var14 = var1[var9];
        var _closure2_slot3 = var14;
        var2 = 1;
        var1 = var1[var2];
        var _closure2_slot4 = var1;
        var5 = var17.useState;
        var1 = var8[var6];
        var12 = var7.bind(var3)(var1);
        var1 = var12.isEditingEvent;
        var1 = var1.bind(var12)(var13);
        var1 = var5.bind(var17)(var1);
        var1 = var16.bind(var3)(var1, var2);
        var12 = var1[var9];
        var _closure2_slot5 = var12;
        var5 = var17.useState;
        var1 = function() { // Environment: var11
            _fun65398: for (var _fun65398_ip = 0;;) switch (_fun65398_ip) {
                case 0:
                    var0 = _closure2_slot5;
                    var2 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 7;
                    var1 = var6[var3];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.EditGuildEventScreens;
                    var1 = var1.CHANNEL_SELECTOR;
                    var2.name = var1;
                    if (var0) {
                        _fun65398_ip = 63;
                        continue _fun65398
                    }
                case 53:
                    var0 = new Array(1);
                    var0[0] = var2;
                    _fun65398_ip = 105;
                    continue _fun65398;
                case 63:
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.EditGuildEventScreens;
                    var3 = var3.DETAILS;
                    var2.name = var3;
                    var1[1] = var2;
                    var0 = var1;
                case 105:
                    return var0;
            }
        };
        var1 = var5.bind(var17)(var1);
        var1 = var16.bind(var3)(var1, var2);
        var5 = var1[var9];
        var17 = _closure1_slot1;
        var1 = 8;
        var1 = var8[var1];
        var17 = var17.bind(var3)(var1);
        var1 = function() { // Environment: var11
            _fun65399: for (var _fun65399_ip = 0;;) switch (_fun65399_ip) {
                case 0:
                    var1 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var0 = 9;
                    var0 = var3[var0];
                    var4 = undefined;
                    var1 = var1.bind(var4)(var0);
                    var0 = var1.dismissGlobalKeyboard;
                    var0 = var0.bind(var1)();
                    var0 = _closure2_slot5;
                    if (!var0) {
                        _fun65399_ip = 73;
                        continue _fun65399
                    }
                case 45:
                    var0 = _closure2_slot2;
                    var3 = null;
                    var5 = var3 == var0;
                    var0 = undefined;
                    if (var5) {
                        _fun65399_ip = 69;
                        continue _fun65399
                    }
                case 60:
                    var5 = _closure2_slot2;
                    var0 = var5.id;
                case 69:
                    if (!(var3 == var0)) {
                        _fun65399_ip = 120;
                        continue _fun65399
                    }
                case 73:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var0 = 10;
                    var0 = var5[var0];
                    var6 = var3.bind(var4)(var0);
                    var5 = var6.createGuildEvent;
                    var3 = _closure2_slot3;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var5.bind(var6)(var3, var0);
                    _fun65399_ip = 175;
                    continue _fun65399;
                case 120:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 10;
                    var2 = var5[var2];
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.saveEvent;
                    var2 = _closure2_slot2;
                    var3 = var2.id;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = var4.bind(var5)(var3, var2, var1);
                case 175:
                    return var0;
            }
        };
        var1 = var17.bind(var3)(var1);
        var1 = var16.bind(var3)(var1, var10);
        var9 = var1[var9];
        var _closure2_slot6 = var9;
        var1 = var1[var2];
        var9 = var1.loading;
        var10 = var1.error;
        var1 = function() { // Environment: var11
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun65402: for (var _fun65402_ip = 0;;) switch (_fun65402_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun65402_ip = 272;
                                continue _fun65402
                            }
                        case 10:
                            var1 = _closure2_slot6;
                            var2 = undefined;
                            var1 = var1.bind(var2)();
                            SaveGenerator(address = 27);
                        case 25:
                            return var1;
                        case 27:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun65402_ip = 269;
                                continue _fun65402
                            }
                        case 36:
                            var5 = null;
                            if (!(var5 != var1)) {
                                _fun65402_ip = 266;
                                continue _fun65402
                            }
                        case 45:
                            var4 = _closure2_slot5;
                            if (!var4) {
                                _fun65402_ip = 78;
                                continue _fun65402
                            }
                        case 52:
                            var4 = _closure2_slot2;
                            var6 = var5 == var4;
                            var4 = undefined;
                            if (var6) {
                                _fun65402_ip = 74;
                                continue _fun65402
                            }
                        case 65:
                            var6 = _closure2_slot2;
                            var4 = var6.id;
                        case 74:
                            if (!(var5 == var4)) {
                                _fun65402_ip = 169;
                                continue _fun65402
                            }
                        case 78:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var4 = 11;
                            var4 = var10[var4];
                            var4 = var9.bind(var2)(var4);
                            var6 = var4.AccessibilityAnnouncer;
                            var5 = var6.announce;
                            var4 = 12;
                            var7 = var10[var4];
                            var7 = var9.bind(var2)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var4 = var10[var4];
                            var4 = var9.bind(var2)(var4);
                            var4 = var4.t;
                            var4 = var4["5HzXO5"];
                            var4 = var7.bind(var8)(var4);
                            var4 = var5.bind(var6)(var4);
                            _fun65402_ip = 258;
                            continue _fun65402;
                        case 169:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var4 = 11;
                            var4 = var10[var4];
                            var4 = var9.bind(var2)(var4);
                            var6 = var4.AccessibilityAnnouncer;
                            var5 = var6.announce;
                            var4 = 12;
                            var7 = var10[var4];
                            var7 = var9.bind(var2)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var4 = var10[var4];
                            var4 = var9.bind(var2)(var4);
                            var4 = var4.t;
                            var4 = var4["F9On+q"];
                            var4 = var7.bind(var8)(var4);
                            var4 = var5.bind(var6)(var4);
                        case 258:
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var2)();
                        case 266:
                            return var2;
                        case 269:
                            return var1;
                        case 272:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var2 = var1.bind(var3)();
        var1 = {};
        var1.guild = var15;
        var1.guildEvent = var14;
        var1.initialGuildEvent = var13;
        var1.isEdit = var12;
        var1.error = var10;
        var1.loading = var9;
        var1.onSave = var2;
        var2 = function(arg0) { // Original name: onChange, environment: var11
            _fun65404: for (var _fun65404_ip = 0;;) switch (_fun65404_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var3 = var2.entityType;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun65404_ip = 207;
                        continue _fun65404
                    }
                case 24:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 13;
                    var3 = var7[var3];
                    var6 = undefined;
                    var9 = var5.bind(var6)(var3);
                    var8 = var9.getChannelTypeFromEntity;
                    var3 = var2.entityType;
                    var9 = var8.bind(var9)(var3);
                    var3 = 14;
                    var3 = var7[var3];
                    var8 = var5.bind(var6)(var3);
                    var7 = var8.getEventChannelsByType;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var8 = var7.bind(var8)(var3, var9);
                    var7 = _closure1_slot5;
                    var3 = 1;
                    var7 = var7.bind(var6)(var8, var3);
                    var3 = 0;
                    var3 = var7[var3];
                    var7 = var0 == var3;
                    if (var7) {
                        _fun65404_ip = 133;
                        continue _fun65404
                    }
                case 128:
                    var6 = var3.id;
                case 133:
                    var7 = var0 != var6;
                    var3 = null;
                    if (!var7) {
                        _fun65404_ip = 145;
                        continue _fun65404
                    }
                case 142:
                    var3 = var6;
                case 145:
                    var2.channelId = var3;
                    var6 = var2.entityType;
                    var3 = _closure1_slot7;
                    var3 = var3.EXTERNAL;
                    var3 = var6 !== var3;
                    if (!var3) {
                        _fun65404_ip = 198;
                        continue _fun65404
                    }
                case 174:
                    var5 = _closure2_slot3;
                    var5 = var5.entityType;
                    var4 = _closure1_slot7;
                    var4 = var4.EXTERNAL;
                    var3 = var5 === var4;
                case 198:
                    if (!var3) {
                        _fun65404_ip = 207;
                        continue _fun65404
                    }
                case 201:
                    var2.entityMetadata = var0;
                case 207:
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = {};
                        var2 = arg0;
                        var3 = var0;
                        var1 = copyDataProperties(var3, var2);
                        var2 = _closure3_slot0;
                        var3 = var0;
                        var1 = copyDataProperties(var3, var2);
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var1.onChange = var2;
        var _closure2_slot7 = var1;
        var13 = function(arg0) { // Original name: getChannelSelectorHeader, environment: var11
            var1 = arg0;
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var3 = _closure1_slot8;
                var1 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 15;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var4 = _closure3_slot0;
                var0.screen = var4;
                var4 = _closure2_slot1;
                var0.onClose = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            return var0;
        };
        var9 = {};
        var1 = var8[var6];
        var1 = var7.bind(var3)(var1);
        var1 = var1.EditGuildEventScreens;
        var2 = var1.CHANNEL_SELECTOR;
        var1 = {};
        var12 = '';
        var1.title = var12;
        var10 = var8[var6];
        var10 = var7.bind(var3)(var10);
        var10 = var10.EditGuildEventScreens;
        var10 = var10.CHANNEL_SELECTOR;
        var10 = var13.bind(var3)(var10);
        var1.customNavbar = var10;
        var10 = function() { // Original name: headerLeft, environment: var11
            var0 = null;
            return var0;
        };
        var1.headerLeft = var10;
        var10 = function() { // Original name: render, environment: var11
            _fun65409: for (var _fun65409_ip = 0;;) switch (_fun65409_ip) {
                case 0:
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 16;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var7 = _closure2_slot7;
                    var8 = var0;
                    var5 = copyDataProperties(var8, var7);
                    var6 = _closure2_slot2;
                    var5 = null;
                    var6 = var5 == var6;
                    var5 = undefined;
                    if (var6) {
                        _fun65409_ip = 69;
                        continue _fun65409
                    }
                case 60:
                    var4 = _closure2_slot2;
                    var5 = var4.id;
                case 69:
                    var4 = 'guildEventId';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var1.render = var10;
        var10 = true;
        var1.fullscreen = var10;
        var9[var2] = var1;
        var1 = var8[var6];
        var1 = var7.bind(var3)(var1);
        var1 = var1.EditGuildEventScreens;
        var2 = var1.DETAILS;
        var1 = {};
        var1.title = var12;
        var14 = var8[var6];
        var14 = var7.bind(var3)(var14);
        var14 = var14.EditGuildEventScreens;
        var14 = var14.DETAILS;
        var14 = var13.bind(var3)(var14);
        var1.customNavbar = var14;
        var14 = function() { // Original name: render, environment: var11
            var3 = _closure1_slot8;
            var1 = _closure1_slot1;
            var2 = _closure1_slot3;
            var0 = 17;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = _closure2_slot7;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var14;
        var1.fullscreen = var10;
        var9[var2] = var1;
        var1 = var8[var6];
        var1 = var7.bind(var3)(var1);
        var1 = var1.EditGuildEventScreens;
        var2 = var1.PREVIEW;
        var1 = {};
        var1.title = var12;
        var12 = var8[var6];
        var12 = var7.bind(var3)(var12);
        var12 = var12.EditGuildEventScreens;
        var12 = var12.PREVIEW;
        var12 = var13.bind(var3)(var12);
        var1.customNavbar = var12;
        var11 = function() { // Original name: render, environment: var11
            var3 = _closure1_slot8;
            var1 = _closure1_slot1;
            var2 = _closure1_slot3;
            var0 = 18;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = _closure2_slot7;
            var6 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var11;
        var1.fullscreen = var10;
        var9[var2] = var1;
        var2 = _closure1_slot8;
        var0 = 19;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var9;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.EditGuildEventScreens;
        var6 = var6.CHANNEL_SELECTOR;
        var0.initialRouteName = var6;
        var0.initialRouteStack = var5;
        var5 = false;
        var0.cardShadowEnabled = var5;
        var0.cardOverlayEnabled = var5;
        var4 = var4.cardStyle;
        var0.cardStyle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1378, 33, 1297, 671, 8064, 8061, 1582, 8063, 3119, 1234, 8065, 8085, 8067, 8086, 8122, 8123, 5747, 2]);