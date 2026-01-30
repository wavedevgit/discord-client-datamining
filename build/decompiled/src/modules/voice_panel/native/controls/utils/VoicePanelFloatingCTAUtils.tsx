// modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var4 = function(arg0) { // Original name: useFloatingCTAProps, environment: var5
        _fun111294: for (var _fun111294_ip = 0;;) switch (_fun111294_ip) {
            case 0:
                var4 = arg0;
                var7 = _closure1_slot4;
                var3 = var7.useContext;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 10;
                var1 = var6[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var3.bind(var7)(var1);
                var3 = var1.showFloatingCTA;
                var1 = 33;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var3 = var1.bind(var2)(var3);
                var1 = function(arg0) { // Original name: useOverrideFloatingCTAProps, environment: var0
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot4;
                    var3 = var5.useContext;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 10;
                    var6 = var6[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var6);
                    var2 = var3.bind(var5)(var2);
                    var5 = var2.setShowFloatingCTA;
                    var _closure3_slot1 = var5;
                    var3 = _closure1_slot4;
                    var2 = var3.useMemo;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var1[1] = var4;
                    var0 = function() { // Environment: var0
                        _fun111296: for (var _fun111296_ip = 0;;) switch (_fun111296_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var0 = _closure1_slot12;
                                var2 = var0.BAD_CONNECTION;
                                var0 = null;
                                if (!(var3 === var2)) {
                                    _fun111296_ip = 46;
                                    continue _fun111296
                                }
                            case 26:
                                var3 = _closure1_slot15;
                                var2 = undefined;
                                var1 = function() { // Environment: var1
                                    var2 = _closure3_slot1;
                                    var1 = undefined;
                                    var0 = null;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var0 = var3.bind(var2)(var1);
                            case 46:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var3 = var1.bind(var2)(var3);
                var1 = function(arg0) { // Original name: useGuildEventControlsProps, environment: var0
                    _fun111298: for (var _fun111298_ip = 0;;) switch (_fun111298_ip) {
                        case 0:
                            var3 = arg0;
                            var7 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 9;
                            var1 = var4[var0];
                            var0 = undefined;
                            var1 = var7.bind(var0)(var1);
                            var9 = var1.bind(var0)();
                            var8 = _closure1_slot4;
                            var2 = var8.useContext;
                            var1 = 10;
                            var1 = var4[var1];
                            var1 = var7.bind(var0)(var1);
                            var1 = var2.bind(var8)(var1);
                            var2 = var1.channelId;
                            var1 = 11;
                            var1 = var4[var1];
                            var1 = var7.bind(var0)(var1);
                            var7 = var1.bind(var0)(var2);
                            var2 = _closure1_slot0;
                            var1 = 12;
                            var1 = var4[var1];
                            var8 = var2.bind(var0)(var1);
                            var2 = var8.useImminentUpcomingGuildEvents;
                            var4 = null;
                            var10 = var4 == var3;
                            var1 = undefined;
                            if (var10) {
                                _fun111298_ip = 121;
                                continue _fun111298
                            }
                        case 116:
                            var1 = var3.id;
                        case 121:
                            var1 = var2.bind(var8)(var1);
                            var _closure3_slot0 = var1;
                            var2 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 13;
                            var8 = var10[var8];
                            var13 = var2.bind(var0)(var8);
                            var12 = var13.useStateFromStores;
                            var8 = _closure1_slot7;
                            var11 = new Array(1);
                            var11[0] = var8;
                            var8 = new Array(1);
                            var8[0] = var1;
                            var1 = function() { // Environment: var6
                                _fun111299: for (var _fun111299_ip = 0;;) switch (_fun111299_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = var2.find;
                                        var0 = function(arg0) { // Environment: var0
                                            var2 = _closure1_slot7;
                                            var1 = var2.isEventDismissed;
                                            var0 = arg0;
                                            var0 = var0.id;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = !var0;
                                            return var0;
                                        };
                                        var1 = var1.bind(var2)(var0);
                                        var0 = null;
                                        var2 = var0 != var1;
                                        if (!var2) {
                                            _fun111299_ip = 38;
                                            continue _fun111299
                                        }
                                    case 35:
                                        var0 = var1;
                                    case 38:
                                        return var0;
                                }
                            };
                            var8 = var12.bind(var13)(var11, var1, var8);
                            var _closure3_slot1 = var8;
                            var1 = 14;
                            var1 = var10[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.useManageResourcePermissions;
                            var1 = var1.bind(var2)(var3);
                            var1 = var1.canManageGuildEvent;
                            var2 = var1.bind(var0)(var8);
                            var1 = var4 != var8;
                            if (!var1) {
                                _fun111298_ip = 243;
                                continue _fun111298
                            }
                        case 234:
                            var3 = _closure1_slot8;
                            var1 = var3.bind(var0)(var8);
                        case 243:
                            var10 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var15 = 15;
                            var3 = var3[var15];
                            var10 = var10.bind(var0)(var3);
                            var3 = var10.getNextRecurrenceIdInEvent;
                            var10 = var3.bind(var10)(var8);
                            var11 = var4 != var10;
                            var3 = undefined;
                            if (!var11) {
                                _fun111298_ip = 286;
                                continue _fun111298
                            }
                        case 283:
                            var3 = var10;
                        case 286:
                            var _closure3_slot2 = var3;
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var10 = 16;
                            var10 = var12[var10];
                            var12 = var11.bind(var0)(var10);
                            var10 = var4 == var8;
                            var11 = undefined;
                            if (var10) {
                                _fun111298_ip = 324;
                                continue _fun111298
                            }
                        case 319:
                            var11 = var8.guild_id;
                        case 324:
                            var13 = var4 == var8;
                            var10 = undefined;
                            if (var13) {
                                _fun111298_ip = 338;
                                continue _fun111298
                            }
                        case 333:
                            var10 = var8.id;
                        case 338:
                            var13 = var12.bind(var0)(var11, var10, var3);
                            var12 = _closure1_slot4;
                            var11 = var12.useCallback;
                            var10 = new Array(2);
                            var10[0] = var8;
                            var10[1] = var3;
                            var3 = function() { // Environment: var6
                                _fun111301: for (var _fun111301_ip = 0;;) switch (_fun111301_ip) {
                                    case 0:
                                        var2 = _closure3_slot1;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun111301_ip = 84;
                                            continue _fun111301
                                        }
                                    case 13:
                                        var5 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var2 = 17;
                                        var2 = var4[var2];
                                        var3 = undefined;
                                        var5 = var5.bind(var3)(var2);
                                        var2 = var5.hideActionSheet;
                                        var2 = var2.bind(var5)();
                                        var2 = _closure1_slot0;
                                        var1 = 18;
                                        var1 = var4[var1];
                                        var3 = var2.bind(var3)(var1);
                                        var2 = var3.openStartGuildEventModal;
                                        var1 = _closure3_slot1;
                                        var0 = _closure3_slot2;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 84:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3 = var11.bind(var12)(var3, var10);
                            var12 = _closure1_slot4;
                            var11 = var12.useCallback;
                            var10 = new Array(1);
                            var10[0] = var8;
                            var6 = function() { // Environment: var6
                                _fun111302: for (var _fun111302_ip = 0;;) switch (_fun111302_ip) {
                                    case 0:
                                        var2 = _closure3_slot1;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun111302_ip = 58;
                                            continue _fun111302
                                        }
                                    case 13:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 19;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var2 = var3.bind(var1)(var2);
                                        var1 = var2.dismissEventBanner;
                                        var0 = _closure3_slot1;
                                        var0 = var0.id;
                                        var0 = var1.bind(var2)(var0);
                                    case 58:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var6 = var11.bind(var12)(var6, var10);
                            if (!var7) {
                                _fun111298_ip = 860;
                                continue _fun111298
                            }
                        case 415:
                            if (!(var4 != var8)) {
                                _fun111298_ip = 860;
                                continue _fun111298
                            }
                        case 422:
                            if (!var2) {
                                _fun111298_ip = 860;
                                continue _fun111298
                            }
                        case 428:
                            if (var1) {
                                _fun111298_ip = 860;
                                continue _fun111298
                            }
                        case 434:
                            var17 = var8.scheduled_start_time;
                            var2 = var8.name;
                            var14 = var8.entity_type;
                            var1 = _closure1_slot10;
                            var11 = var1.STAGE_INSTANCE;
                            var12 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 20;
                            var1 = var10[var1];
                            var7 = var12.bind(var0)(var1);
                            var4 = var7.getGuildScheduledEventHeaderProps;
                            var1 = {};
                            var15 = var10[var15];
                            var16 = var12.bind(var0)(var15);
                            var15 = var16.getEventTimeData;
                            var15 = var15.bind(var16)(var17);
                            var1.eventTimeData = var15;
                            var11 = var14 === var11;
                            var1.isStage = var11;
                            var1.theme = var9;
                            var1.event = var8;
                            var1 = var4.bind(var7)(var1);
                            var11 = var1.text;
                            var1 = {};
                            var1.onPress = var3;
                            var7 = _closure1_slot11;
                            var3 = 21;
                            var3 = var10[var3];
                            var3 = var12.bind(var0)(var3);
                            var3 = var3.RowButton;
                            var4 = var3.Icon;
                            var3 = {};
                            var8 = 22;
                            var8 = var10[var8];
                            var8 = var12.bind(var0)(var8);
                            var8 = var8.CalendarIcon;
                            var3.IconComponent = var8;
                            var9 = _closure1_slot1;
                            var8 = 23;
                            var8 = var10[var8];
                            var8 = var9.bind(var0)(var8);
                            var3.source = var8;
                            var8 = 'translucent';
                            var3.variant = var8;
                            var3 = var7.bind(var0)(var4, var3);
                            var1.icon = var3;
                            var1.label = var2;
                            var7 = 24;
                            var2 = var10[var7];
                            var2 = var12.bind(var0)(var2);
                            var8 = var2.intl;
                            var4 = var8.formatToPlainString;
                            var2 = var10[var7];
                            var2 = var12.bind(var0)(var2);
                            var2 = var2.t;
                            var3 = var2.NywdIj;
                            var2 = {};
                            var2.count = var13;
                            var8 = var4.bind(var8)(var3, var2);
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var3 = '';
                            var2 = ' • ';
                            var2 = var4.bind(var3)(var11, var2, var8);
                            var1.subLabel = var2;
                            var4 = _closure1_slot11;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var8 = 'button';
                            var2.accessibilityRole = var8;
                            var8 = var10[var7];
                            var8 = var12.bind(var0)(var8);
                            var11 = var8.intl;
                            var8 = var11.string;
                            var7 = var10[var7];
                            var7 = var12.bind(var0)(var7);
                            var7 = var7.t;
                            var7 = var7.cpT0Cq;
                            var7 = var8.bind(var11)(var7);
                            var2.accessibilityLabel = var7;
                            var2.onPress = var6;
                            var7 = _closure1_slot11;
                            var5 = 25;
                            var5 = var10[var5];
                            var6 = var9.bind(var0)(var5);
                            var5 = {};
                            var8 = 26;
                            var8 = var10[var8];
                            var8 = var9.bind(var0)(var8);
                            var5.source = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var2.children = var5;
                            var2 = var4.bind(var0)(var3, var2);
                            var1.trailing = var2;
                            return var1;
                        case 860:
                            return var0;
                    }
                };
                var1 = var1.bind(var2)(var4);
                var0 = function(arg0) { // Original name: useCallInviteProps, environment: var0
                    _fun111303: for (var _fun111303_ip = 0;;) switch (_fun111303_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var8 = _closure1_slot4;
                            var2 = var8.useContext;
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 10;
                            var1 = var5[var1];
                            var6 = undefined;
                            var1 = var3.bind(var6)(var1);
                            var1 = var2.bind(var8)(var1);
                            var2 = var1.channelId;
                            var1 = 11;
                            var1 = var5[var1];
                            var1 = var3.bind(var6)(var1);
                            var3 = var1.bind(var6)(var2);
                            var2 = _closure1_slot0;
                            var1 = 13;
                            var1 = var5[var1];
                            var9 = var2.bind(var6)(var1);
                            var8 = var9.useStateFromStores;
                            var10 = _closure1_slot6;
                            var1 = new Array(1);
                            var1[0] = var10;
                            var0 = function() { // Environment: var0
                                _fun111304: for (var _fun111304_ip = 0;;) switch (_fun111304_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var2 = null;
                                        var3 = var2 == var0;
                                        var0 = undefined;
                                        if (var3) {
                                            _fun111304_ip = 27;
                                            continue _fun111304
                                        }
                                    case 18:
                                        var3 = _closure3_slot0;
                                        var0 = var3.id;
                                    case 27:
                                        var0 = var2 != var0;
                                        if (!var0) {
                                            _fun111304_ip = 73;
                                            continue _fun111304
                                        }
                                    case 34:
                                        var3 = _closure1_slot6;
                                        var2 = var3.getParticipants;
                                        var1 = _closure3_slot0;
                                        var1 = var1.id;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = var1.length;
                                        var1 = 1;
                                        var0 = var1 === var2;
                                    case 73:
                                        return var0;
                                }
                            };
                            var1 = var8.bind(var9)(var1, var0);
                            var0 = 27;
                            var0 = var5[var0];
                            var8 = var2.bind(var6)(var0);
                            var5 = var8.useInviteMembersCallback;
                            var0 = null;
                            var9 = var0 == var4;
                            var2 = undefined;
                            if (var9) {
                                _fun111303_ip = 151;
                                continue _fun111303
                            }
                        case 146:
                            var2 = var4.id;
                        case 151:
                            var2 = var5.bind(var8)(var2);
                            var4 = var0 != var4;
                            var0 = undefined;
                            if (!var4) {
                                _fun111303_ip = 395;
                                continue _fun111303
                            }
                        case 168:
                            var0 = undefined;
                            if (!var3) {
                                _fun111303_ip = 395;
                                continue _fun111303
                            }
                        case 176:
                            var0 = undefined;
                            if (!var1) {
                                _fun111303_ip = 395;
                                continue _fun111303
                            }
                        case 184:
                            var1 = {};
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 24;
                            var4 = var9[var3];
                            var4 = var10.bind(var6)(var4);
                            var8 = var4.intl;
                            var5 = var8.string;
                            var4 = var9[var3];
                            var4 = var10.bind(var6)(var4);
                            var4 = var4.t;
                            var4 = var4.N4nebq;
                            var4 = var5.bind(var8)(var4);
                            var1.label = var4;
                            var4 = var9[var3];
                            var4 = var10.bind(var6)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var9[var3];
                            var3 = var10.bind(var6)(var3);
                            var3 = var3.t;
                            var3 = var3.o2XPr2;
                            var3 = var4.bind(var5)(var3);
                            var1.subLabel = var3;
                            var5 = _closure1_slot11;
                            var3 = 21;
                            var3 = var9[var3];
                            var3 = var10.bind(var6)(var3);
                            var3 = var3.RowButton;
                            var4 = var3.Icon;
                            var3 = {};
                            var8 = 28;
                            var8 = var9[var8];
                            var8 = var10.bind(var6)(var8);
                            var8 = var8.GroupPlusIcon;
                            var3.IconComponent = var8;
                            var8 = _closure1_slot1;
                            var7 = 29;
                            var7 = var9[var7];
                            var7 = var8.bind(var6)(var7);
                            var3.source = var7;
                            var7 = 'translucent';
                            var3.variant = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var1.icon = var3;
                            var1.onPress = var2;
                            var0 = var1;
                        case 395:
                            return var0;
                    }
                };
                var0 = var0.bind(var2)(var4);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun111294_ip = 113;
                    continue _fun111294
                }
            case 110:
                var1 = var3;
            case 113:
                if (!(var2 != var1)) {
                    _fun111294_ip = 120;
                    continue _fun111294
                }
            case 117:
                var0 = var1;
            case 120:
                return var0;
        }
    };
    var _closure1_slot14 = var4;
    var3 = function(arg0) { // Original name: getBadConnectionCTAProps, environment: var5
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var12 = _closure1_slot0;
        var10 = _closure1_slot2;
        var7 = 24;
        var1 = var10[var7];
        var4 = undefined;
        var1 = var12.bind(var4)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var10[var7];
        var1 = var12.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.uv1tVh;
        var1 = var2.bind(var3)(var1);
        var0.label = var1;
        var1 = var10[var7];
        var1 = var12.bind(var4)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var10[var7];
        var1 = var12.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["gQ14+g"];
        var1 = var2.bind(var3)(var1);
        var0.subLabel = var1;
        var3 = _closure1_slot11;
        var1 = 21;
        var1 = var10[var1];
        var1 = var12.bind(var4)(var1);
        var1 = var1.RowButton;
        var2 = var1.Icon;
        var1 = {};
        var8 = 35;
        var8 = var10[var8];
        var8 = var12.bind(var4)(var8);
        var8 = var8.CircleErrorIcon;
        var1.IconComponent = var8;
        var9 = _closure1_slot1;
        var8 = 36;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var1.source = var8;
        var8 = 'translucent';
        var1.variant = var8;
        var1 = var3.bind(var4)(var2, var1);
        var0.icon = var1;
        var1 = function() { // Original name: onPress, environment: var6
            _fun111306: for (var _fun111306_ip = 0;;) switch (_fun111306_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var3 = var0 == var2;
                    var2 = undefined;
                    var0 = undefined;
                    if (var3) {
                        _fun111306_ip = 28;
                        continue _fun111306
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var0.onPress = var1;
        var3 = _closure1_slot11;
        var2 = _closure1_slot5;
        var1 = {
            'accessibilityRole': 'button',
            'accessibilityLabel': null,
            'hitSlop': 4
        };
        var8 = var10[var7];
        var8 = var12.bind(var4)(var8);
        var11 = var8.intl;
        var8 = var11.string;
        var7 = var10[var7];
        var7 = var12.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.cpT0Cq;
        var7 = var8.bind(var11)(var7);
        var1.accessibilityLabel = var7;
        var6 = function() { // Original name: onPress, environment: var6
            _fun111307: for (var _fun111307_ip = 0;;) switch (_fun111307_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 37;
                    var1 = var4[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.DismissibleContent;
                    var3 = var1.VOICE_PANEL_BAD_CONNECTION_CTA;
                    var1 = 34;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.UNSAFE_markDismissibleContentAsDismissed;
                    var1 = var1.bind(var2)(var3);
                    var3 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun111307_ip = 81;
                        continue _fun111307
                    }
                case 73:
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                case 81:
                    return var0;
            }
        };
        var1.onPress = var6;
        var7 = _closure1_slot11;
        var5 = 25;
        var5 = var10[var5];
        var6 = var9.bind(var4)(var5);
        var5 = {};
        var8 = 26;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var5.source = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1.children = var5;
        var1 = var3.bind(var4)(var2, var1);
        var0.trailing = var1;
        return var0;
    };
    var _closure1_slot15 = var3;
    var0 = function() { // Original name: handleSoundboardMobileFloatingCtaClose, environment: var5
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 34;
        var1 = var5[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var1);
        var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
        var1 = 37;
        var1 = var5[var1];
        var1 = var4.bind(var0)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.SOUNDBOARD_MOBILE_FLOATING_CTA;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var1 = function(arg0) { // Original name: getDismissableCTAProps, environment: var5
        _fun111309: for (var _fun111309_ip = 0;;) switch (_fun111309_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.dismissableContent;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 37;
                var2 = var1[var5];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.VOICE_PANEL_BAD_CONNECTION_CTA;
                if (!(var2 !== var4)) {
                    _fun111309_ip = 273;
                    continue _fun111309
                }
            case 64:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var6.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.SOUNDBOARD_MOBILE_FLOATING_CTA;
                if (!(var2 !== var4)) {
                    _fun111309_ip = 130;
                    continue _fun111309
                }
            case 97:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.DONUT_MOBILE_NUX;
                var2 = null;
                return var2;
            case 130:
                var2 = {};
                var6 = _closure1_slot11;
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 25;
                var4 = var7[var4];
                var5 = var9.bind(var1)(var4);
                var4 = {};
                var8 = 39;
                var8 = var7[var8];
                var8 = var9.bind(var1)(var8);
                var4.source = var8;
                var4 = var6.bind(var1)(var5, var4);
                var2.icon = var4;
                var3 = function() { // Original name: onPress, environment: var3
                    _fun111310: for (var _fun111310_ip = 0;;) switch (_fun111310_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun111310_ip = 64;
                                continue _fun111310
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 38;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.showSoundboardSoundPickerActionSheet;
                            var0 = {};
                            var0.channel = var3;
                            var3 = 'SOUNDBOARD_MOBILE_FLOATING_CTA';
                            var0.analyticsSource = var3;
                            var0 = var1.bind(var2)(var0);
                        case 64:
                            var1 = _closure1_slot16;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var2.onPress = var3;
                var6 = _closure1_slot0;
                var3 = 24;
                var4 = var7[var3];
                var4 = var6.bind(var1)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var7[var3];
                var3 = var6.bind(var1)(var3);
                var3 = var3.t;
                var3 = var3.IJgkPX;
                var3 = var4.bind(var5)(var3);
                var2.label = var3;
                var5 = _closure1_slot11;
                var4 = _closure1_slot13;
                var3 = {};
                var3 = var5.bind(var1)(var4, var3);
                var2.trailing = var3;
                return var2;
            case 273:
                var0 = _closure1_slot15;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot17 = var1;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var9[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var10 = var9[var6];
    var6 = arg3;
    var6 = var6.bind(var0)(var10);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.Pressable;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.isGuildScheduledEventActive;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.GuildScheduledEventEntityTypes;
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot11 = var6;
    var6 = {};
    var7 = 'BAD_CONNECTION';
    var6.BAD_CONNECTION = var7;
    var _closure1_slot12 = var6;
    var7 = function() { // Original name: CloseSoundboardMobileFloatingCtaIcon, environment: var5
        var3 = _closure1_slot11;
        var2 = _closure1_slot5;
        var1 = {};
        var0 = 'button';
        var1.accessibilityRole = var0;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 24;
        var6 = var9[var5];
        var0 = undefined;
        var6 = var8.bind(var0)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5.cpT0Cq;
        var5 = var6.bind(var7)(var5);
        var1.accessibilityLabel = var5;
        var5 = _closure1_slot16;
        var1.onPress = var5;
        var6 = _closure1_slot11;
        var8 = _closure1_slot1;
        var4 = 25;
        var4 = var9[var4];
        var5 = var8.bind(var0)(var4);
        var4 = {};
        var7 = 26;
        var7 = var9[var7];
        var7 = var8.bind(var0)(var7);
        var4.source = var7;
        var4 = var6.bind(var0)(var5, var4);
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot13 = var7;
    var7 = 40;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = 5000;
    var2.FLOATING_CTA_HIDE_TIMEOUT = var7;
    var2.OverrideFloatingCTA = var6;
    var5 = function(arg0) { // Original name: useShouldShowFloatingCTA, environment: var5
        _fun111312: for (var _fun111312_ip = 0;;) switch (_fun111312_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 30;
                var2 = var7[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var9 = var2.bind(var4)(var5);
                var6 = _closure1_slot0;
                var2 = 31;
                var2 = var7[var2];
                var3 = var6.bind(var4)(var2);
                var2 = var3.useGetDismissibleContent;
                var9 = var2.bind(var3)(var9);
                var3 = _closure1_slot3;
                var2 = 1;
                var3 = var3.bind(var4)(var9, var2);
                var2 = 0;
                var11 = var3[var2];
                var _closure2_slot1 = var11;
                var2 = 13;
                var2 = var7[var2];
                var10 = var6.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var9.bind(var10)(var3, var2);
                var _closure2_slot2 = var2;
                var10 = _closure1_slot4;
                var9 = var10.useMemo;
                var3 = new Array(2);
                var3[0] = var11;
                var3[1] = var2;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot17;
                    var1 = {};
                    var3 = _closure2_slot1;
                    var1.dismissableContent = var3;
                    var0 = _closure2_slot2;
                    var1.channel = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var9.bind(var10)(var0, var3);
                var1 = _closure1_slot14;
                var3 = var1.bind(var4)(var2);
                var1 = 32;
                var2 = var7[var1];
                var2 = var8.bind(var4)(var2);
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.SoundboardButtonLocation;
                var1 = var1.FLOATING_BUTTON;
                var1 = var2.bind(var4)(var5, var1);
                var1 = var1.visible;
                var2 = null;
                var0 = var2 != var0;
                if (var0) {
                    _fun111312_ip = 236;
                    continue _fun111312
                }
            case 232:
                var0 = var2 != var3;
            case 236:
                if (var0) {
                    _fun111312_ip = 242;
                    continue _fun111312
                }
            case 239:
                var0 = var1;
            case 242:
                return var0;
        }
    };
    var2.useShouldShowFloatingCTA = var5;
    var2.useFloatingCTAProps = var4;
    var2.getBadConnectionCTAProps = var3;
    var2.getDismissableCTAProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3908, 14269, 3293, 1372, 1378, 33, 3205, 11837, 14249, 8043, 632, 8052, 8046, 8136, 3237, 8058, 14270, 8139, 5341, 8143, 8140, 1234, 4045, 6628, 14271, 8594, 8593, 8662, 5919, 14272, 8152, 3171, 5352, 7475, 1358, 8466, 14274, 2]);