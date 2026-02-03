// modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun101415: for (var _fun101415_ip = 0;;) switch (_fun101415_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun101415_ip = 46;
                    continue _fun101415
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun101415_ip = 55;
                    continue _fun101415
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun101415_ip = 345;
                    continue _fun101415
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun101415_ip = 323;
                    continue _fun101415
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun101415_ip = 283;
                    continue _fun101415
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun101415_ip = 270;
                    continue _fun101415
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun101415_ip = 163;
                    continue _fun101415
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun101415_ip = 179;
                    continue _fun101415
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun101415_ip = 249;
                    continue _fun101415
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun101415_ip = 249;
                    continue _fun101415
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun101415_ip = 234;
                    continue _fun101415
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun101415_ip = 247;
                    continue _fun101415
                }
            case 234:
                var8 = _closure1_slot35;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun101415_ip = 265;
                continue _fun101415;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun101415_ip = 283;
                continue _fun101415;
            case 270:
                var6 = _closure1_slot35;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun101415_ip = 323;
                    continue _fun101415
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun101415_ip = 330;
                    continue _fun101415
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun101416: for (var _fun101416_ip = 0;;) switch (_fun101416_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun101416_ip = 56;
                                continue _fun101416
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun101416_ip = 67;
                            continue _fun101416;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0, arg1() {
        _fun101417: for (var _fun101417_ip = 0;;) switch (_fun101417_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun101417_ip = 23;
                    continue _fun101417
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun101417_ip = 33;
                    continue _fun101417
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun101417_ip = 70;
                    continue _fun101417
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun101417_ip = 55;
                    continue _fun101417
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun101419: for (var _fun101419_ip = 0;;) switch (_fun101419_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.kind;
                    var0 = 'active-channel';
                    var0 = var0 === var2;
                    if (var0) {
                        _fun101419_ip = 29;
                        continue _fun101419
                    }
                case 21:
                    var1 = 'voice';
                    var0 = var1 === var2;
                case 29:
                    if (var0) {
                        _fun101419_ip = 42;
                        continue _fun101419
                    }
                case 32:
                    var1 = 'live-guild-stage';
                    var0 = var1 === var2;
                case 42:
                    if (var0) {
                        _fun101419_ip = 55;
                        continue _fun101419
                    }
                case 45:
                    var1 = 'unified-vc';
                    var0 = var1 === var2;
                case 55:
                    if (var0) {
                        _fun101419_ip = 68;
                        continue _fun101419
                    }
                case 58:
                    var1 = 'embedded-activity';
                    var0 = var1 === var2;
                case 68:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = var0.length;
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.eventScheduledToStartWithin;
    var _closure1_slot8 = var8;
    var8 = var6.isEventUpcoming;
    var _closure1_slot9 = var8;
    var6 = var6.isGuildScheduledEventActive;
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 10;
    var6 = var5[var3];
    var8 = var7.bind(var0)(var6);
    var _closure1_slot16 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MemberListRowTypes;
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var9 = var7.bind(var0)(var3);
    var _closure1_slot18 = var9;
    var3 = 12;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot19 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot20 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot22 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot23 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot24 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot25 = var3;
    var3 = 18;
    var3 = var5[var3];
    var6 = var7.bind(var0)(var3);
    var _closure1_slot26 = var6;
    var3 = 19;
    var3 = var5[var3];
    var7 = var7.bind(var0)(var3);
    var _closure1_slot27 = var7;
    var3 = 20;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HappeningNowItem;
    var _closure1_slot28 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.ActivityFlags;
    var _closure1_slot29 = var10;
    var10 = var3.GuildFeatures;
    var _closure1_slot30 = var10;
    var10 = var3.Permissions;
    var _closure1_slot31 = var10;
    var3 = var3.StatusTypes;
    var _closure1_slot32 = var3;
    var3 = new Array(4);
    var3[0] = var9;
    var3[1] = var8;
    var3[2] = var7;
    var3[3] = var6;
    var _closure1_slot33 = var3;
    var3 = 42;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun101420: for (var _fun101420_ip = 0;;) switch (_fun101420_ip) {
            case 0:
                var19 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var19;
                var9 = var0.guildId;
                var _closure2_slot1 = var9;
                var18 = var0.withoutUserCards;
                var _closure2_slot2 = var18;
                var1 = var0.showMultipleActivitiesPerChannel;
                var4 = undefined;
                var22 = var4 !== var1;
                if (!var22) {
                    _fun101420_ip = 49;
                    continue _fun101420
                }
            case 46:
                var22 = var1;
            case 49:
                var _closure2_slot3 = var22;
                var8 = var0.isFocused;
                var _closure2_slot4 = var8;
                var3 = var19.has;
                var1 = _closure1_slot28;
                var2 = var1.LIVE_GUILD_STAGE;
                var28 = var3.bind(var19)(var2);
                var _closure2_slot5 = var28;
                var3 = var19.has;
                var2 = var1.EMBEDDED_ACTIVITY;
                var23 = var3.bind(var19)(var2);
                var _closure2_slot6 = var23;
                var3 = var19.has;
                var2 = var1.STREAMS;
                var24 = var3.bind(var19)(var2);
                var _closure2_slot7 = var24;
                var3 = var19.has;
                var2 = var1.USER_CUSTOM_STATUS;
                var21 = var3.bind(var19)(var2);
                var _closure2_slot8 = var21;
                var3 = var19.has;
                var2 = var1.ACTIVITIES;
                var20 = var3.bind(var19)(var2);
                var _closure2_slot9 = var20;
                var2 = var19.has;
                var1 = var1.USER;
                var25 = var2.bind(var19)(var1);
                var _closure2_slot10 = var25;
                var12 = _closure1_slot4;
                var3 = var12.useEffect;
                var2 = function() { // Environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetchUserAffinitiesV2;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var12)(var2, var1);
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var13 = 23;
                var1 = var6[var13];
                var10 = var3.bind(var4)(var1);
                var7 = var10.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var5
                    var1 = _closure1_slot6;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var7.bind(var10)(var2, var1);
                var _closure2_slot11 = var2;
                var1 = var6[var13];
                var11 = var3.bind(var4)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot15;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var5
                    var1 = _closure1_slot15;
                    var0 = var1.getSessionId;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var1 = var10.bind(var11)(var7, var1);
                var _closure2_slot12 = var1;
                var11 = var12.useCallback;
                var10 = new Array(5);
                var10[0] = var19;
                var10[1] = var1;
                var10[2] = var9;
                var10[3] = var8;
                var10[4] = var2;
                var7 = function() { // Environment: var5
                    _fun101424: for (var _fun101424_ip = 0;;) switch (_fun101424_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var5 = null;
                            if (!(var5 != var1)) {
                                _fun101424_ip = 194;
                                continue _fun101424
                            }
                        case 16:
                            var4 = _closure2_slot0;
                            var3 = var4.has;
                            var2 = _closure1_slot28;
                            var2 = var2.ACTIVE_CHANNEL;
                            var2 = var3.bind(var4)(var2);
                            if (!var2) {
                                _fun101424_ip = 194;
                                continue _fun101424
                            }
                        case 49:
                            var2 = _closure2_slot12;
                            if (!var2) {
                                _fun101424_ip = 194;
                                continue _fun101424
                            }
                        case 59:
                            var2 = _closure2_slot11;
                            if (!var2) {
                                _fun101424_ip = 194;
                                continue _fun101424
                            }
                        case 69:
                            var2 = _closure2_slot4;
                            if (!var2) {
                                _fun101424_ip = 194;
                                continue _fun101424
                            }
                        case 76:
                            var4 = _closure1_slot7;
                            var3 = var4.getActiveChannelsFetchStatus;
                            var2 = _closure2_slot1;
                            var3 = var3.bind(var4)(var2);
                            var2 = var5 == var3;
                            if (var2) {
                                _fun101424_ip = 114;
                                continue _fun101424
                            }
                        case 104:
                            var4 = var3.fetchedAt;
                            var2 = var5 == var4;
                        case 114:
                            if (var2) {
                                _fun101424_ip = 154;
                                continue _fun101424
                            }
                        case 117:
                            var4 = global;
                            var5 = var4.Date;
                            var4 = var5.now;
                            var4 = var4.bind(var5)();
                            var3 = var3.fetchedAt;
                            var4 = var4 - var3;
                            var3 = 300000;
                            var2 = var4 > var3;
                        case 154:
                            if (!var2) {
                                _fun101424_ip = 194;
                                continue _fun101424
                            }
                        case 157:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 24;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchActiveChannels;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                        case 194:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var11.bind(var12)(var7, var10);
                var _closure2_slot13 = var14;
                var11 = var12.useEffect;
                var10 = new Array(1);
                var10[0] = var14;
                var7 = function() { // Environment: var5
                    var1 = _closure2_slot13;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var7 = var11.bind(var12)(var7, var10);
                var7 = var6[var13];
                var15 = var3.bind(var4)(var7);
                var11 = var15.useStateFromStores;
                var7 = _closure1_slot21;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var5
                    _fun101426: for (var _fun101426_ip = 0;;) switch (_fun101426_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun101426_ip = 37;
                                continue _fun101426
                            }
                        case 16:
                            var3 = _closure1_slot21;
                            var2 = var3.getGuild;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 37:
                            return var0;
                    }
                };
                var17 = var11.bind(var15)(var10, var7);
                var _closure2_slot14 = var17;
                var7 = var6[var13];
                var16 = var3.bind(var4)(var7);
                var15 = var16.useStateFromStores;
                var7 = _closure1_slot19;
                var11 = new Array(1);
                var11[0] = var7;
                var10 = function() { // Environment: var5
                    _fun101427: for (var _fun101427_ip = 0;;) switch (_fun101427_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun101427_ip = 38;
                                continue _fun101427
                            }
                        case 16:
                            var3 = _closure1_slot19;
                            var2 = var3.getDefaultChannel;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var10 = var15.bind(var16)(var11, var10);
                var _closure2_slot15 = var10;
                var11 = 25;
                var11 = var6[var11];
                var15 = var3.bind(var4)(var11);
                var11 = var15.useFirstGloballyViewbleGuildChannelId;
                var15 = var11.bind(var15)(var9);
                var _closure2_slot16 = var15;
                var11 = var6[var13];
                var26 = var3.bind(var4)(var11);
                var16 = var26.useStateFromStores;
                var11 = new Array(1);
                var11[0] = var7;
                var7 = function() { // Environment: var5
                    _fun101428: for (var _fun101428_ip = 0;;) switch (_fun101428_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun101428_ip = 38;
                                continue _fun101428
                            }
                        case 16:
                            var3 = _closure1_slot19;
                            var2 = var3.getChannels;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var16 = var16.bind(var26)(var11, var7);
                var _closure2_slot17 = var16;
                var11 = var12.useCallback;
                var7 = new Array(6);
                var7[0] = var1;
                var7[1] = var10;
                var7[2] = var15;
                var7[3] = var9;
                var7[4] = var8;
                var7[5] = var2;
                var2 = function() { // Environment: var5
                    _fun101429: for (var _fun101429_ip = 0;;) switch (_fun101429_ip) {
                        case 0:
                            var0 = _closure2_slot12;
                            if (!var0) {
                                _fun101429_ip = 14;
                                continue _fun101429
                            }
                        case 10:
                            var0 = _closure2_slot11;
                        case 14:
                            if (!var0) {
                                _fun101429_ip = 21;
                                continue _fun101429
                            }
                        case 17:
                            var0 = _closure2_slot4;
                        case 21:
                            if (!var0) {
                                _fun101429_ip = 34;
                                continue _fun101429
                            }
                        case 24:
                            var3 = _closure2_slot1;
                            var2 = null;
                            var0 = var2 != var3;
                        case 34:
                            if (!var0) {
                                _fun101429_ip = 47;
                                continue _fun101429
                            }
                        case 37:
                            var3 = _closure2_slot15;
                            var2 = null;
                            var0 = var2 != var3;
                        case 47:
                            if (!var0) {
                                _fun101429_ip = 228;
                                continue _fun101429
                            }
                        case 53:
                            var10 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 26;
                            var4 = var3[var2];
                            var6 = undefined;
                            var5 = var10.bind(var6)(var4);
                            var4 = var5.subscribeGuild;
                            var9 = _closure2_slot1;
                            var4 = var4.bind(var5)(var9);
                            var4 = var3[var2];
                            var8 = var10.bind(var6)(var4);
                            var5 = var8.subscribeChannel;
                            var4 = _closure2_slot15;
                            var4 = var4.id;
                            var7 = 27;
                            var3 = var3[var7];
                            var3 = var10.bind(var6)(var3);
                            var3 = var3.DEFAULT_RANGES;
                            var3 = var5.bind(var8)(var9, var4, var3);
                            var4 = _closure2_slot16;
                            var3 = null;
                            var3 = var3 != var4;
                            if (!var3) {
                                _fun101429_ip = 172;
                                continue _fun101429
                            }
                        case 155:
                            var5 = _closure2_slot16;
                            var4 = _closure2_slot15;
                            var4 = var4.id;
                            var3 = var5 !== var4;
                        case 172:
                            if (!var3) {
                                _fun101429_ip = 228;
                                continue _fun101429
                            }
                        case 175:
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var2 = var0[var2];
                            var4 = var5.bind(var6)(var2);
                            var3 = var4.subscribeChannel;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot16;
                            var0 = var0[var7];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.DEFAULT_RANGES;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 228:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var2, var7);
                var _closure2_slot18 = var2;
                var15 = var12.useEffect;
                var11 = new Array(1);
                var11[0] = var2;
                var7 = function() { // Environment: var5
                    var1 = _closure2_slot18;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var7 = var15.bind(var12)(var7, var11);
                var11 = var12.useCallback;
                var7 = new Array(2);
                var7[0] = var14;
                var7[1] = var2;
                var2 = function() { // Environment: var5
                    var2 = _closure2_slot13;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot18;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var2 = var11.bind(var12)(var2, var7);
                var _closure2_slot19 = var2;
                var11 = var12.useEffect;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.subscribe;
                    var1 = _closure2_slot19;
                    var0 = 'CONNECTION_OPEN';
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 28;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.unsubscribe;
                        var2 = _closure2_slot19;
                        var1 = 'CONNECTION_OPEN';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    return var0;
                };
                var2 = var11.bind(var12)(var2, var7);
                var2 = 29;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useIsVoicePanelFullscreen;
                var2 = var2.bind(var3)();
                var6 = var8;
                if (!var6) {
                    _fun101420_ip = 704;
                    continue _fun101420
                }
            case 701:
                var6 = !var2;
            case 704:
                var _closure2_slot20 = var6;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = var11[var13];
                var14 = var12.bind(var4)(var2);
                var7 = var14.useStateFromStores;
                var2 = _closure1_slot16;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var5
                    _fun101434: for (var _fun101434_ip = 0;;) switch (_fun101434_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun101434_ip = 129;
                                continue _fun101434
                            }
                        case 13:
                            var1 = _closure2_slot15;
                            if (!(var4 != var1)) {
                                _fun101434_ip = 129;
                                continue _fun101434
                            }
                        case 21:
                            var5 = _closure1_slot16;
                            var3 = var5.getProps;
                            var2 = _closure2_slot1;
                            var0 = _closure2_slot15;
                            var0 = var0.id;
                            var2 = var3.bind(var5)(var2, var0);
                            var3 = var4 == var2;
                            if (var3) {
                                _fun101434_ip = 70;
                                continue _fun101434
                            }
                        case 60:
                            var0 = var2.groups;
                            var3 = var4 == var0;
                        case 70:
                            if (var3) {
                                _fun101434_ip = 90;
                                continue _fun101434
                            }
                        case 73:
                            var0 = var2.groups;
                            var4 = var0.length;
                            var0 = 0;
                            var3 = var4 <= var0;
                        case 90:
                            var0 = !var3;
                            if (var3) {
                                _fun101434_ip = 127;
                                continue _fun101434
                            }
                        case 96:
                            var3 = var2.groups;
                            var2 = 0;
                            var2 = var3[var2];
                            var2 = var2.id;
                            var1 = _closure1_slot32;
                            var1 = var1.UNKNOWN;
                            var0 = var2 === var1;
                        case 127:
                            return var0;
                        case 129:
                            var0 = false;
                            return var0;
                    }
                };
                var7 = var7.bind(var14)(var3, var2);
                var2 = var11[var13];
                var27 = var12.bind(var4)(var2);
                var26 = var27.useStateFromStores;
                var15 = _closure1_slot7;
                var14 = new Array(1);
                var14[0] = var15;
                var3 = new Array(2);
                var3[0] = var9;
                var3[1] = var19;
                var2 = function() { // Environment: var5
                    _fun101435: for (var _fun101435_ip = 0;;) switch (_fun101435_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun101435_ip = 78;
                                continue _fun101435
                            }
                        case 16:
                            var6 = _closure2_slot0;
                            var5 = var6.has;
                            var1 = _closure1_slot28;
                            var1 = var1.ACTIVE_CHANNEL;
                            var1 = var5.bind(var6)(var1);
                            var5 = !var1;
                            var1 = !var5;
                            if (var5) {
                                _fun101435_ip = 75;
                                continue _fun101435
                            }
                        case 52:
                            var5 = _closure1_slot7;
                            var4 = var5.getActiveChannelIds;
                            var2 = _closure2_slot1;
                            var2 = var4.bind(var5)(var2);
                            var1 = var3 == var2;
                        case 75:
                            var0 = var1;
                        case 78:
                            return var0;
                    }
                };
                var2 = var26.bind(var27)(var14, var2, var3);
                var3 = var11[var13];
                var29 = var12.bind(var4)(var3);
                var27 = var29.useStateFromStores;
                var14 = _closure1_slot13;
                var26 = new Array(1);
                var26[0] = var14;
                var3 = function() { // Environment: var5
                    var1 = _closure1_slot13;
                    var0 = var1.getUserAffinities;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var30 = var27.bind(var29)(var26, var3);
                var _closure2_slot21 = var30;
                var29 = _closure1_slot4;
                var27 = var29.useMemo;
                var26 = new Array(1);
                var26[0] = var30;
                var3 = function() { // Environment: var5
                    var2 = _closure2_slot21;
                    var1 = function arg0() {
                        _fun101438: for (var _fun101438_ip = 0;;) switch (_fun101438_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = null;
                                var0 = var0 != var3;
                                if (!var0) {
                                    _fun101438_ip = 32;
                                    continue _fun101438
                                }
                            case 12:
                                var2 = var3.some;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var1 = var0.userSegment;
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 39;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2);
                                    var0 = var0.AffineUserSegment;
                                    var0 = var0.HFU_MAU;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1);
                            case 32:
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var3 = var27.bind(var29)(var3, var26);
                var _closure2_slot22 = var3;
                var26 = var11[var13];
                var29 = var12.bind(var4)(var26);
                var27 = var29.useStateFromStoresObject;
                var26 = new Array(1);
                var26[0] = var14;
                var14 = function() { // Environment: var5
                    var1 = _closure1_slot13;
                    var0 = var1.getUserFlags;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var29 = var27.bind(var29)(var26, var14);
                var _closure2_slot23 = var29;
                var14 = var11[var13];
                var31 = var12.bind(var4)(var14);
                var27 = var31.useStateFromStoresArray;
                var14 = _closure1_slot24;
                var26 = new Array(1);
                var26[0] = var14;
                var14 = function() { // Environment: var5
                    var1 = _closure1_slot24;
                    var0 = var1.getFriendIDs;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var27 = var27.bind(var31)(var26, var14);
                var _closure2_slot24 = var27;
                var14 = var11[var13];
                var33 = var12.bind(var4)(var14);
                var32 = var33.useStateFromStoresObject;
                var14 = _closure1_slot22;
                var31 = new Array(1);
                var31[0] = var14;
                var26 = new Array(1);
                var26[0] = var9;
                var14 = function() { // Environment: var5
                    _fun101442: for (var _fun101442_ip = 0;;) switch (_fun101442_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure1_slot22;
                            var1 = var2.getChannelsVersion;
                            var1 = var1.bind(var2)();
                            var0.permissionChannelsVersion = var1;
                            var4 = _closure2_slot1;
                            var1 = null;
                            var4 = var1 != var4;
                            if (!var4) {
                                _fun101442_ip = 65;
                                continue _fun101442
                            }
                        case 44:
                            var4 = _closure1_slot22;
                            var3 = var4.getGuildVersion;
                            var2 = _closure2_slot1;
                            var1 = var3.bind(var4)(var2);
                        case 65:
                            var0.permissionGuildVersion = var1;
                            return var0;
                    }
                };
                var14 = var32.bind(var33)(var31, var14, var26);
                var26 = var11[var13];
                var33 = var12.bind(var4)(var26);
                var32 = var33.useStateFromStores;
                var31 = new Array(1);
                var31[0] = var15;
                var26 = new Array(1);
                var26[0] = var9;
                var15 = function() { // Environment: var5
                    _fun101443: for (var _fun101443_ip = 0;;) switch (_fun101443_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun101443_ip = 38;
                                continue _fun101443
                            }
                        case 16:
                            var3 = _closure1_slot7;
                            var2 = var3.getActiveChannelIds;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var15 = var32.bind(var33)(var31, var15, var26);
                var26 = var11[var13];
                var34 = var12.bind(var4)(var26);
                var33 = var34.useStateFromStoresArray;
                var26 = _closure1_slot11;
                var32 = new Array(1);
                var32[0] = var26;
                var31 = new Array(1);
                var31[0] = var9;
                var26 = function() { // Environment: var5
                    var2 = _closure1_slot11;
                    var1 = var2.getGuildScheduledEventsForGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var26 = var33.bind(var34)(var32, var26, var31);
                var _closure2_slot25 = var26;
                var11 = var11[var13];
                var32 = var12.bind(var4)(var11);
                var31 = var32.useStateFromStoresArray;
                var11 = _closure1_slot5;
                var13 = new Array(1);
                var13[0] = var11;
                var12 = new Array(1);
                var12[0] = var9;
                var11 = function() { // Environment: var5
                    _fun101445: for (var _fun101445_ip = 0;;) switch (_fun101445_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun101445_ip = 37;
                                continue _fun101445
                            }
                        case 13:
                            var2 = _closure1_slot5;
                            var1 = var2.getEmbeddedActivitiesForGuild;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                            _fun101445_ip = 41;
                            continue _fun101445;
                        case 37:
                            var0 = new Array(0);
                        case 41:
                            return var0;
                    }
                };
                var12 = var31.bind(var32)(var13, var11, var12);
                var1 = !var1;
                if (var1) {
                    _fun101420_ip = 1172;
                    continue _fun101420
                }
            case 1169:
                var1 = var7;
            case 1172:
                if (var1) {
                    _fun101420_ip = 1178;
                    continue _fun101420
                }
            case 1175:
                var1 = var2;
            case 1178:
                var _closure2_slot26 = var1;
                var13 = _closure1_slot4;
                var7 = var13.useRef;
                var2 = {};
                var2.guildId = var9;
                var11 = false;
                var2.hasComputed = var11;
                var2 = var7.bind(var13)(var2);
                var _closure2_slot27 = var2;
                var11 = var13.useCallback;
                var7 = new Array(21);
                var7[0] = var9;
                var7[1] = var30;
                var7[2] = var29;
                var7[3] = var10;
                var7[4] = var28;
                var7[5] = var27;
                var7[6] = var26;
                var7[7] = var25;
                var7[8] = var24;
                var7[9] = var23;
                var7[10] = var22;
                var7[11] = var21;
                var7[12] = var20;
                var7[13] = var19;
                var7[14] = var18;
                var7[15] = var17;
                var7[16] = var16;
                var7[17] = var15;
                var7[18] = var14;
                var7[19] = var12;
                var7[20] = var3;
                var3 = function() { // Environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.time;
                    var2 = '🎨';
                    var1 = 'computeHappeningNowState';
                    var0 = function() { // Environment: var0
                        _fun101447: for (var _fun101447_ip = 0;;) switch (_fun101447_ip) {
                            case 0:
                                var1 = function arg0, arg1, arg2() {
                                    _fun101448: for (var _fun101448_ip = 0;;) switch (_fun101448_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var8 = arg1;
                                            var12 = arg2;
                                            var _closure5_slot0 = var2;
                                            var _closure5_slot1 = var12;
                                            var1 = _closure1_slot24;
                                            var0 = var1.isBlockedOrIgnored;
                                            var0 = var0.bind(var1)(var2);
                                            if (var0) {
                                                _fun101448_ip = 1288;
                                                continue _fun101448
                                            }
                                        case 43:
                                            var4 = _closure1_slot18;
                                            var1 = var4.getChannel;
                                            var6 = null;
                                            var5 = var6 == var12;
                                            var3 = undefined;
                                            var0 = undefined;
                                            if (var5) {
                                                _fun101448_ip = 70;
                                                continue _fun101448
                                            }
                                        case 65:
                                            var0 = var12.channelId;
                                        case 70:
                                            var0 = var1.bind(var4)(var0);
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var1 = 32;
                                            var1 = var5[var1];
                                            var4 = var4.bind(var3)(var1);
                                            var1 = var4.isChannelContentGated;
                                            var1 = var1.bind(var4)(var0);
                                            if (var1) {
                                                _fun101448_ip = 1288;
                                                continue _fun101448
                                            }
                                        case 112:
                                            if (!(var6 != var0)) {
                                                _fun101448_ip = 194;
                                                continue _fun101448
                                            }
                                        case 116:
                                            var1 = var0.isGroupDM;
                                            var1 = var1.bind(var0)();
                                            if (var1) {
                                                _fun101448_ip = 187;
                                                continue _fun101448
                                            }
                                        case 129:
                                            var5 = _closure1_slot22;
                                            var4 = var5.can;
                                            var1 = _closure1_slot31;
                                            var1 = var1.CONNECT;
                                            var1 = var4.bind(var5)(var1, var0);
                                            if (!var1) {
                                                _fun101448_ip = 194;
                                                continue _fun101448
                                            }
                                        case 158:
                                            var5 = _closure1_slot22;
                                            var4 = var5.can;
                                            var1 = _closure1_slot31;
                                            var1 = var1.VIEW_CHANNEL;
                                            var1 = var4.bind(var5)(var1, var0);
                                            if (!var1) {
                                                _fun101448_ip = 194;
                                                continue _fun101448
                                            }
                                        case 187:
                                            if (!(var6 == var12)) {
                                                _fun101448_ip = 710;
                                                continue _fun101448
                                            }
                                        case 194:
                                            if (!(var6 == var8)) {
                                                _fun101448_ip = 343;
                                                continue _fun101448
                                            }
                                        case 201:
                                            var1 = _closure2_slot10;
                                            if (!var1) {
                                                _fun101448_ip = 1288;
                                                continue _fun101448
                                            }
                                        case 214:
                                            var5 = _closure1_slot23;
                                            var4 = var5.getStatus;
                                            var1 = _closure2_slot1;
                                            var4 = var4.bind(var5)(var2, var1);
                                            if (!(var6 != var4)) {
                                                _fun101448_ip = 1288;
                                                continue _fun101448
                                            }
                                        case 241:
                                            var1 = _closure1_slot32;
                                            var1 = var1.OFFLINE;
                                            if (!(var4 !== var1)) {
                                                _fun101448_ip = 299;
                                                continue _fun101448
                                            }
                                        case 255:
                                            var5 = _closure4_slot8;
                                            var4 = var5.push;
                                            var1 = {};
                                            var11 = 'user';
                                            var1.kind = var11;
                                            var1.userId = var2;
                                            var11 = _closure2_slot1;
                                            var1.guildId = var11;
                                            var1 = var4.bind(var5)(var1);
                                            _fun101448_ip = 1288;
                                            continue _fun101448;
                                        case 299:
                                            var5 = _closure4_slot9;
                                            var4 = var5.push;
                                            var1 = {};
                                            var11 = 'user';
                                            var1.kind = var11;
                                            var1.userId = var2;
                                            var10 = _closure2_slot1;
                                            var1.guildId = var10;
                                            var1 = var4.bind(var5)(var1);
                                            _fun101448_ip = 1288;
                                            continue _fun101448;
                                        case 343:
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var1 = 34;
                                            var1 = var5[var1];
                                            var4 = var4.bind(var3)(var1);
                                            var1 = var4.isActivityPermanentCustomStatus;
                                            var1 = var1.bind(var4)(var8);
                                            if (var1) {
                                                _fun101448_ip = 648;
                                                continue _fun101448
                                            }
                                        case 380:
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var1 = 35;
                                            var1 = var5[var1];
                                            var4 = var4.bind(var3)(var1);
                                            var1 = var4.isActivityTemporaryCustomStatus;
                                            var1 = var1.bind(var4)(var8);
                                            if (var1) {
                                                _fun101448_ip = 595;
                                                continue _fun101448
                                            }
                                        case 420:
                                            var1 = _closure2_slot9;
                                            if (!var1) {
                                                _fun101448_ip = 1288;
                                                continue _fun101448
                                            }
                                        case 430:
                                            var4 = _closure1_slot1;
                                            var10 = _closure1_slot2;
                                            var1 = 36;
                                            var1 = var10[var1];
                                            var4 = var4.bind(var3)(var1);
                                            var1 = _closure1_slot29;
                                            var1 = var1.EMBEDDED;
                                            var1 = var4.bind(var3)(var8, var1);
                                            if (!var1) {
                                                _fun101448_ip = 546;
                                                continue _fun101448
                                            }
                                        case 469:
                                            var11 = _closure1_slot18;
                                            var10 = var11.getChannel;
                                            var14 = _closure1_slot27;
                                            var13 = var14.getVoiceStateForSession;
                                            var4 = var8.session_id;
                                            var13 = var13.bind(var14)(var2, var4);
                                            var14 = var6 == var13;
                                            var4 = undefined;
                                            if (var14) {
                                                _fun101448_ip = 514;
                                                continue _fun101448
                                            }
                                        case 509:
                                            var4 = var13.channelId;
                                        case 514:
                                            var11 = var10.bind(var11)(var4);
                                            var4 = var6 == var11;
                                            var10 = undefined;
                                            if (var4) {
                                                _fun101448_ip = 538;
                                                continue _fun101448
                                            }
                                        case 528:
                                            var4 = var11.getGuildId;
                                            var10 = var4.bind(var11)();
                                        case 538:
                                            var4 = _closure2_slot1;
                                            var1 = var10 !== var4;
                                        case 546:
                                            if (var1) {
                                                _fun101448_ip = 1288;
                                                continue _fun101448
                                            }
                                        case 552:
                                            var4 = _closure4_slot6;
                                            var1 = {};
                                            var1.userId = var2;
                                            var10 = _closure2_slot1;
                                            var1.guildId = var10;
                                            var10 = 'activity';
                                            var1.kind = var10;
                                            var1.activity = var8;
                                            var4[var2] = var1;
                                            _fun101448_ip = 1288;
                                            continue _fun101448;
                                        case 595:
                                            var1 = _closure2_slot8;
                                            if (!var1) {
                                                _fun101448_ip = 1288;
                                                continue _fun101448
                                            }
                                        case 605:
                                            var4 = _closure4_slot7;
                                            var1 = {};
                                            var1.userId = var2;
                                            var5 = _closure2_slot1;
                                            var1.guildId = var5;
                                            var5 = 'activity';
                                            var1.kind = var5;
                                            var1.activity = var8;
                                            var4[var2] = var1;
                                            _fun101448_ip = 1288;
                                            continue _fun101448;
                                        case 648:
                                            var1 = _closure2_slot8;
                                            if (!var1) {
                                                _fun101448_ip = 1288;
                                                continue _fun101448
                                            }
                                        case 661:
                                            var5 = _closure4_slot8;
                                            var4 = var5.push;
                                            var1 = {};
                                            var11 = 'activity';
                                            var1.kind = var11;
                                            var1.userId = var2;
                                            var10 = _closure2_slot1;
                                            var1.guildId = var10;
                                            var1.activity = var8;
                                            var1 = var4.bind(var5)(var1);
                                            _fun101448_ip = 1288;
                                            continue _fun101448;
                                        case 710:
                                            var10 = _closure1_slot14;
                                            var4 = var10.getStreamForUser;
                                            var1 = _closure2_slot1;
                                            if (!(var6 == var1)) {
                                                _fun101448_ip = 752;
                                                continue _fun101448
                                            }
                                        case 731:
                                            var11 = var6 == var0;
                                            var1 = undefined;
                                            if (var11) {
                                                _fun101448_ip = 750;
                                                continue _fun101448
                                            }
                                        case 740:
                                            var11 = var0.getGuildId;
                                            var1 = var11.bind(var0)();
                                        case 750:
                                            _fun101448_ip = 756;
                                            continue _fun101448;
                                        case 752:
                                            var1 = _closure2_slot1;
                                        case 756:
                                            var4 = var4.bind(var10)(var2, var1);
                                            if (!(var6 != var4)) {
                                                _fun101448_ip = 776;
                                                continue _fun101448
                                            }
                                        case 766:
                                            var1 = _closure2_slot7;
                                            if (var1) {
                                                _fun101448_ip = 1198;
                                                continue _fun101448
                                            }
                                        case 776:
                                            if (!(var6 != var0)) {
                                                _fun101448_ip = 1288;
                                                continue _fun101448
                                            }
                                        case 783:
                                            var13 = _closure4_slot1;
                                            var11 = var13.has;
                                            var10 = var0.id;
                                            var10 = var11.bind(var13)(var10);
                                            if (var10) {
                                                _fun101448_ip = 1288;
                                                continue _fun101448
                                            }
                                        case 811:
                                            var10 = var0.isGuildStageVoice;
                                            var10 = var10.bind(var0)();
                                            if (var10) {
                                                _fun101448_ip = 1089;
                                                continue _fun101448
                                            }
                                        case 827:
                                            var10 = _closure2_slot6;
                                            if (!var10) {
                                                _fun101448_ip = 1003;
                                                continue _fun101448
                                            }
                                        case 837:
                                            var13 = _closure1_slot5;
                                            var11 = var13.getEmbeddedActivitiesForChannel;
                                            var10 = var0.id;
                                            var15 = var11.bind(var13)(var10);
                                            var10 = _closure2_slot3;
                                            if (var10) {
                                                _fun101448_ip = 956;
                                                continue _fun101448
                                            }
                                        case 864:
                                            var11 = _closure1_slot0;
                                            var13 = _closure1_slot2;
                                            var10 = 33;
                                            var10 = var13[var10];
                                            var11 = var11.bind(var3)(var10);
                                            var10 = var11.findActivityWithMostNonBlockedOrIgnoredParticipants;
                                            var10 = var10.bind(var11)(var15);
                                            if (!(var6 !== var10)) {
                                                _fun101448_ip = 1003;
                                                continue _fun101448
                                            }
                                        case 899:
                                            var13 = _closure4_slot4;
                                            var11 = var0.id;
                                            var14 = {};
                                            var16 = 'embedded-activity';
                                            var14.kind = var16;
                                            var14.userId = var2;
                                            var14.voiceState = var12;
                                            var16 = _closure2_slot1;
                                            var14.guildId = var16;
                                            var14.activity = var10;
                                            var10 = new Array(1);
                                            var10[0] = var14;
                                            var13[var11] = var10;
                                            _fun101448_ip = 1003;
                                            continue _fun101448;
                                        case 956:
                                            var11 = _closure4_slot4;
                                            var10 = var0.id;
                                            var14 = var15.filter;
                                            var13 = function(arg0) { // Environment: var9
                                                var0 = arg0;
                                                var4 = var0.userIds;
                                                var2 = new Array(0);
                                                var3 = 0;
                                                var5 = var2;
                                                var0 = arraySpread(var5, var4, var3);
                                                var1 = var2.some;
                                                var0 = function(arg0) { // Environment: var0
                                                    var2 = _closure1_slot24;
                                                    var1 = var2.isBlockedOrIgnored;
                                                    var0 = arg0;
                                                    var0 = var1.bind(var2)(var0);
                                                    var0 = !var0;
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var14 = var14.bind(var15)(var13);
                                            var13 = var14.map;
                                            var9 = function(arg0) { // Environment: var9
                                                var0 = {};
                                                var1 = 'embedded-activity';
                                                var0.kind = var1;
                                                var2 = _closure5_slot0;
                                                var0.userId = var2;
                                                var1 = _closure5_slot1;
                                                var0.voiceState = var1;
                                                var1 = _closure2_slot1;
                                                var0.guildId = var1;
                                                var1 = arg0;
                                                var0.activity = var1;
                                                return var0;
                                            };
                                            var9 = var13.bind(var14)(var9);
                                            var11[var10] = var9;
                                        case 1003:
                                            var11 = _closure4_slot3;
                                            var10 = var0.id;
                                            var9 = {};
                                            var13 = 'voice';
                                            var9.kind = var13;
                                            var9.userId = var2;
                                            var9.voiceState = var12;
                                            var12 = _closure2_slot1;
                                            if (!(var6 == var12)) {
                                                _fun101448_ip = 1060;
                                                continue _fun101448
                                            }
                                        case 1039:
                                            var12 = var6 == var0;
                                            var13 = undefined;
                                            if (var12) {
                                                _fun101448_ip = 1058;
                                                continue _fun101448
                                            }
                                        case 1048:
                                            var12 = var0.getGuildId;
                                            var13 = var12.bind(var0)();
                                        case 1058:
                                            _fun101448_ip = 1064;
                                            continue _fun101448;
                                        case 1060:
                                            var13 = _closure2_slot1;
                                        case 1064:
                                            var14 = var6 != var13;
                                            var12 = undefined;
                                            if (!var14) {
                                                _fun101448_ip = 1076;
                                                continue _fun101448
                                            }
                                        case 1073:
                                            var12 = var13;
                                        case 1076:
                                            var9.guildId = var12;
                                            var11[var10] = var9;
                                            _fun101448_ip = 1288;
                                            continue _fun101448;
                                        case 1089:
                                            var10 = _closure1_slot24;
                                            var9 = var10.isFriend;
                                            var9 = var9.bind(var10)(var2);
                                            if (var9) {
                                                _fun101448_ip = 1109;
                                                continue _fun101448
                                            }
                                        case 1107:
                                            return var3;
                                        case 1109:
                                            var11 = _closure1_slot12;
                                            var10 = var11.getStageInstanceByChannel;
                                            var9 = var0.id;
                                            var9 = var10.bind(var11)(var9);
                                            if (!(var6 != var9)) {
                                                _fun101448_ip = 1196;
                                                continue _fun101448
                                            }
                                        case 1133:
                                            var11 = _closure1_slot22;
                                            var10 = var11.can;
                                            var7 = _closure1_slot31;
                                            var7 = var7.CONNECT;
                                            var7 = var10.bind(var11)(var7, var0);
                                            if (var7) {
                                                _fun101448_ip = 1164;
                                                continue _fun101448
                                            }
                                        case 1162:
                                            return var3;
                                        case 1164:
                                            var7 = _closure4_slot2;
                                            var1 = var0.id;
                                            var0 = {};
                                            var10 = 'live-guild-stage';
                                            var0.kind = var10;
                                            var0.stage = var9;
                                            var7[var1] = var0;
                                            _fun101448_ip = 1288;
                                            continue _fun101448;
                                        case 1196:
                                            return var3;
                                        case 1198:
                                            var1 = _closure4_slot5;
                                            var0 = {};
                                            var0.userId = var2;
                                            var7 = _closure2_slot1;
                                            var0.guildId = var7;
                                            var7 = 'activity';
                                            var0.kind = var7;
                                            var9 = var6 != var8;
                                            var7 = undefined;
                                            if (!var9) {
                                                _fun101448_ip = 1239;
                                                continue _fun101448
                                            }
                                        case 1236:
                                            var7 = var8;
                                        case 1239:
                                            var0.activity = var7;
                                            var7 = _closure2_slot1;
                                            if (!(var6 != var7)) {
                                                _fun101448_ip = 1276;
                                                continue _fun101448
                                            }
                                        case 1252:
                                            var7 = var6 == var4;
                                            var6 = undefined;
                                            if (var7) {
                                                _fun101448_ip = 1266;
                                                continue _fun101448
                                            }
                                        case 1261:
                                            var6 = var4.guildId;
                                        case 1266:
                                            var5 = _closure2_slot1;
                                            var3 = undefined;
                                            if (!(var6 === var5)) {
                                                _fun101448_ip = 1279;
                                                continue _fun101448
                                            }
                                        case 1276:
                                            var3 = var4;
                                        case 1279:
                                            var0.stream = var3;
                                            var1[var2] = var0;
                                        case 1288:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var _closure4_slot13 = var1;
                                var0 = _closure2_slot27;
                                var2 = var0.current;
                                var0 = _closure2_slot1;
                                var2.guildId = var0;
                                var0 = _closure2_slot27;
                                var2 = var0.current;
                                var0 = true;
                                var2.hasComputed = var0;
                                var44 = global;
                                var0 = var44.Set;
                                var2 = var0.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var72 = var2;
                                var0 = new var72[var0](var71);
                                var2 = var0 instanceof Object ? var0 : var2;
                                var _closure4_slot0 = var2;
                                var4 = var44.Math;
                                var3 = var4.min;
                                var0 = _closure2_slot21;
                                var0 = var0.length;
                                var43 = 50;
                                var3 = var3.bind(var4)(var0, var43);
                                var42 = 0;
                                var4 = var42 < var3;
                                var0 = 0;
                                if (!var4) {
                                    _fun101447_ip = 155;
                                    continue _fun101447
                                }
                            case 124:
                                var5 = var2.add;
                                var4 = _closure2_slot21;
                                var4 = var4[var0];
                                var4 = var4.otherUserId;
                                var4 = var5.bind(var2)(var4);
                                var0 = var0 + 1;
                                if (var0 < var3) {
                                    _fun101447_ip = 124;
                                    continue _fun101447
                                }
                            case 155:
                                var3 = _closure1_slot34;
                                var0 = _closure2_slot24;
                                var40 = undefined;
                                var4 = var3.bind(var40)(var0);
                                var3 = var4.bind(var40)();
                                var0 = var3.done;
                                if (var0) {
                                    _fun101447_ip = 215;
                                    continue _fun101447
                                }
                            case 185:
                                var5 = var3.value;
                                var0 = var2.add;
                                var0 = var0.bind(var2)(var5);
                                var5 = var4.bind(var40)();
                                var0 = var5.done;
                                var3 = var5;
                                if (!var0) {
                                    _fun101447_ip = 185;
                                    continue _fun101447
                                }
                            case 215:
                                var3 = _closure1_slot18;
                                var0 = var3.getMutablePrivateChannels;
                                var7 = var0.bind(var3)();
                                var5 = var7;
                                for (var0 in var5)
                                    case 240: {
                                        case 249: var8 = var0;
                                        var10 = var7[var8];
                                        var8 = var10.isPrivate;
                                        var8 = var8.bind(var10)();
                                        if (!var8) {
                                            _fun101447_ip = 240;
                                            continue _fun101447
                                        }
                                        case 269: var9 = var2.add;
                                        var8 = var10.getRecipientId;
                                        var8 = var8.bind(var10)();
                                        var8 = var9.bind(var2)(var8);
                                        _fun101447_ip = 240;
                                        continue _fun101447;
                                    }
                            case 291:
                                var0 = _closure2_slot1;
                                var39 = null;
                                if (!(var39 != var0)) {
                                    _fun101447_ip = 309;
                                    continue _fun101447
                                }
                            case 301:
                                var0 = _closure2_slot15;
                                if (!(var39 == var0)) {
                                    _fun101447_ip = 315;
                                    continue _fun101447
                                }
                            case 309:
                                var4 = new Array(0);
                                _fun101447_ip = 344;
                                continue _fun101447;
                            case 315:
                                var6 = _closure1_slot16;
                                var5 = var6.getRows;
                                var3 = _closure2_slot1;
                                var0 = _closure2_slot15;
                                var0 = var0.id;
                                var4 = var5.bind(var6)(var3, var0);
                            case 344:
                                var3 = var4.forEach;
                                var0 = function(arg0) { // Environment: var46
                                    _fun101452: for (var _fun101452_ip = 0;;) switch (_fun101452_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = var0.type;
                                            var1 = _closure1_slot17;
                                            var1 = var1.MEMBER;
                                            if (!(var2 === var1)) {
                                                _fun101452_ip = 47;
                                                continue _fun101452
                                            }
                                        case 25:
                                            var2 = _closure4_slot0;
                                            var1 = var2.add;
                                            var0 = var0.userId;
                                            var0 = var1.bind(var2)(var0);
                                        case 47:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var3.bind(var4)(var0);
                                var38 = new Array(0);
                                var37 = new Array(0);
                                var0 = var44.Set;
                                var3 = var0.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var72 = var3;
                                var0 = new var72[var0](var71);
                                var6 = var0 instanceof Object ? var0 : var3;
                                var _closure4_slot1 = var6;
                                var3 = _closure1_slot34;
                                var0 = _closure2_slot25;
                                var5 = var3.bind(var40)(var0);
                                var3 = var5.bind(var40)();
                                var0 = var3.done;
                                var4 = 604800;
                                if (var0) {
                                    _fun101447_ip = 533;
                                    continue _fun101447
                                }
                            case 430:
                                var0 = var3.value;
                                var7 = _closure1_slot10;
                                var7 = var7.bind(var40)(var0);
                                if (var7) {
                                    _fun101447_ip = 484;
                                    continue _fun101447
                                }
                            case 447:
                                var7 = _closure1_slot9;
                                var7 = var7.bind(var40)(var0);
                                if (!var7) {
                                    _fun101447_ip = 469;
                                    continue _fun101447
                                }
                            case 459:
                                var8 = _closure1_slot8;
                                var7 = var8.bind(var40)(var0, var4);
                            case 469:
                                if (!var7) {
                                    _fun101447_ip = 494;
                                    continue _fun101447
                                }
                            case 472:
                                var7 = var37.push;
                                var7 = var7.bind(var37)(var0);
                                _fun101447_ip = 494;
                                continue _fun101447;
                            case 484:
                                var7 = var38.push;
                                var7 = var7.bind(var38)(var0);
                            case 494:
                                var7 = var0.channel_id;
                                if (!(var39 != var7)) {
                                    _fun101447_ip = 518;
                                    continue _fun101447
                                }
                            case 503:
                                var7 = var6.add;
                                var0 = var0.channel_id;
                                var0 = var7.bind(var6)(var0);
                            case 518:
                                var7 = var5.bind(var40)();
                                var0 = var7.done;
                                var3 = var7;
                                if (!var0) {
                                    _fun101447_ip = 430;
                                    continue _fun101447
                                }
                            case 533:
                                var36 = {};
                                var _closure4_slot2 = var36;
                                var35 = {};
                                var _closure4_slot3 = var35;
                                var34 = {};
                                var _closure4_slot4 = var34;
                                var33 = {};
                                var _closure4_slot5 = var33;
                                var32 = {};
                                var _closure4_slot6 = var32;
                                var31 = {};
                                var _closure4_slot7 = var31;
                                var0 = _closure2_slot1;
                                if (!(var39 != var0)) {
                                    _fun101447_ip = 641;
                                    continue _fun101447
                                }
                            case 577:
                                var0 = _closure2_slot5;
                                if (!var0) {
                                    _fun101447_ip = 641;
                                    continue _fun101447
                                }
                            case 584:
                                var4 = _closure1_slot12;
                                var3 = var4.getStageInstancesByGuild;
                                var0 = _closure2_slot1;
                                var5 = var3.bind(var4)(var0);
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var0 = 31;
                                var0 = var4[var0];
                                var4 = var3.bind(var40)(var0);
                                var3 = var4.forEach;
                                var0 = function(arg0) { // Environment: var46
                                    _fun101453: for (var _fun101453_ip = 0;;) switch (_fun101453_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var4 = _closure1_slot22;
                                            var2 = var4.canWithPartialContext;
                                            var0 = _closure1_slot31;
                                            var1 = var0.CONNECT;
                                            var0 = {};
                                            var5 = var3.channel_id;
                                            var0.channelId = var5;
                                            var0 = var2.bind(var4)(var1, var0);
                                            if (!var0) {
                                                _fun101453_ip = 70;
                                                continue _fun101453
                                            }
                                        case 46:
                                            var4 = var3.channel_id;
                                            var2 = function arg0() {
                                                _fun101454: for (var _fun101454_ip = 0;;) switch (_fun101454_ip) {
                                                    case 0:
                                                        var5 = arg0;
                                                        var0 = null;
                                                        if (!(var0 != var5)) {
                                                            _fun101454_ip = 135;
                                                            continue _fun101454
                                                        }
                                                    case 14:
                                                        var4 = _closure1_slot27;
                                                        var3 = var4.getVoiceStatesForChannel;
                                                        var4 = var3.bind(var4)(var5);
                                                        var0 = var0 != var4;
                                                        if (!var0) {
                                                            _fun101454_ip = 133;
                                                            continue _fun101454
                                                        }
                                                    case 39:
                                                        var5 = _closure1_slot1;
                                                        var7 = _closure1_slot2;
                                                        var3 = 31;
                                                        var3 = var7[var3];
                                                        var6 = undefined;
                                                        var3 = var5.bind(var6)(var3);
                                                        var5 = var3.bind(var6)(var4);
                                                        var4 = var5.map;
                                                        var3 = function(arg0) { // Environment: var1
                                                            _fun101455: for (var _fun101455_ip = 0;;) switch (_fun101455_ip) {
                                                                case 0:
                                                                    var2 = _closure1_slot26;
                                                                    var1 = var2.getUser;
                                                                    var0 = arg0;
                                                                    var0 = var0.userId;
                                                                    var1 = var1.bind(var2)(var0);
                                                                    var0 = null;
                                                                    var2 = var0 == var1;
                                                                    var0 = undefined;
                                                                    if (var2) {
                                                                        _fun101455_ip = 42;
                                                                        continue _fun101455
                                                                    }
                                                                case 37:
                                                                    var0 = var1.id;
                                                                case 42:
                                                                    return var0;
                                                            }
                                                        };
                                                        var4 = var4.bind(var5)(var3);
                                                        var3 = var4.filter;
                                                        var5 = _closure1_slot0;
                                                        var2 = 40;
                                                        var2 = var7[var2];
                                                        var2 = var5.bind(var6)(var2);
                                                        var2 = var2.isNotNullish;
                                                        var3 = var3.bind(var4)(var2);
                                                        var2 = var3.some;
                                                        var1 = function(arg0) { // Environment: var1
                                                            var2 = _closure1_slot24;
                                                            var1 = var2.isBlockedOrIgnored;
                                                            var0 = arg0;
                                                            var0 = var1.bind(var2)(var0);
                                                            return var0;
                                                        };
                                                        var0 = var2.bind(var3)(var1);
                                                    case 133:
                                                        return var0;
                                                    case 135:
                                                        var0 = false;
                                                        return var0;
                                                }
                                            };
                                            var1 = undefined;
                                            var1 = var2.bind(var1)(var4);
                                            var0 = !var1;
                                        case 70:
                                            if (!var0) {
                                                _fun101453_ip = 106;
                                                continue _fun101453
                                            }
                                        case 73:
                                            var2 = _closure4_slot2;
                                            var1 = var3.channel_id;
                                            var0 = {};
                                            var4 = 'live-guild-stage';
                                            var0.kind = var4;
                                            var0.stage = var3;
                                            var2[var1] = var0;
                                        case 106:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var3.bind(var4)(var5, var0);
                            case 641:
                                var30 = new Array(0);
                                var _closure4_slot8 = var30;
                                var29 = new Array(0);
                                var _closure4_slot9 = var29;
                                var4 = _closure1_slot27;
                                var3 = var4.getVoiceStates;
                                var0 = _closure2_slot1;
                                var3 = var3.bind(var4)(var0);
                                var _closure4_slot10 = var3;
                                var0 = var44.Set;
                                var4 = var0.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var72 = var4;
                                var0 = new var72[var0](var71);
                                var4 = var0 instanceof Object ? var0 : var4;
                                var _closure4_slot11 = var4;
                                var5 = var2.forEach;
                                var0 = function(arg0) { // Environment: var46
                                    _fun101457: for (var _fun101457_ip = 0;;) switch (_fun101457_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var1 = _closure1_slot26;
                                            var0 = var1.getUser;
                                            var0 = var0.bind(var1)(var2);
                                            var1 = null;
                                            if (!(var1 != var0)) {
                                                _fun101457_ip = 147;
                                                continue _fun101457
                                            }
                                        case 27:
                                            var0 = var0.bot;
                                            if (var0) {
                                                _fun101457_ip = 130;
                                                continue _fun101457
                                            }
                                        case 36:
                                            var6 = _closure1_slot23;
                                            var4 = var6.getPrimaryActivity;
                                            var5 = _closure2_slot1;
                                            var4 = var4.bind(var6)(var2, var5);
                                            if (!(var1 == var5)) {
                                                _fun101457_ip = 80;
                                                continue _fun101457
                                            }
                                        case 63:
                                            var5 = _closure1_slot27;
                                            var3 = var5.getVoiceStateForUser;
                                            var3 = var3.bind(var5)(var2);
                                            _fun101457_ip = 91;
                                            continue _fun101457;
                                        case 80:
                                            var5 = _closure4_slot10;
                                            var3 = var5[var2];
                                        case 91:
                                            var0 = _closure2_slot10;
                                            if (var0) {
                                                _fun101457_ip = 102;
                                                continue _fun101457
                                            }
                                        case 98:
                                            var0 = var1 != var4;
                                        case 102:
                                            if (var0) {
                                                _fun101457_ip = 109;
                                                continue _fun101457
                                            }
                                        case 105:
                                            var0 = var1 != var3;
                                        case 109:
                                            if (!var0) {
                                                _fun101457_ip = 147;
                                                continue _fun101457
                                            }
                                        case 112:
                                            var1 = _closure4_slot13;
                                            var0 = undefined;
                                            var0 = var1.bind(var0)(var2, var4, var3);
                                            _fun101457_ip = 147;
                                            continue _fun101457;
                                        case 130:
                                            var1 = _closure4_slot11;
                                            var0 = var1.add;
                                            var0 = var0.bind(var1)(var2);
                                        case 147:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var5.bind(var2)(var0);
                                var0 = var4.size;
                                var0 = var0 > var42;
                                if (!var0) {
                                    _fun101447_ip = 753;
                                    continue _fun101447
                                }
                            case 739:
                                var5 = var4.size;
                                var2 = var2.size;
                                var0 = var5 === var2;
                            case 753:
                                if (!var0) {
                                    _fun101447_ip = 783;
                                    continue _fun101447
                                }
                            case 756:
                                var2 = var44.Array;
                                var0 = var2.from;
                                var0 = var0.bind(var2)(var4);
                                var0 = var0[var42];
                                var0 = var1.bind(var40)(var0, var39, var39);
                            case 783:
                                var0 = _closure2_slot1;
                                if (!(var39 != var0)) {
                                    _fun101447_ip = 829;
                                    continue _fun101447
                                }
                            case 791:
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 31;
                                var0 = var2[var0];
                                var2 = var1.bind(var40)(var0);
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var46
                                    var4 = arg0;
                                    var3 = var4.userId;
                                    var2 = _closure4_slot13;
                                    var5 = _closure1_slot23;
                                    var1 = var5.getPrimaryActivity;
                                    var0 = _closure2_slot1;
                                    var1 = var1.bind(var5)(var3, var0);
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var3, var1, var4);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var3, var0);
                            case 829:
                                var0 = new Array(0);
                                var _closure4_slot12 = var0;
                                var2 = _closure1_slot34;
                                var1 = _closure2_slot0;
                                var28 = var2.bind(var40)(var1);
                                var2 = var28.bind(var40)();
                                var1 = var2.done;
                                var27 = 'unified-vc';
                                var26 = 'kind';
                                var25 = 37;
                                var24 = 2;
                                var23 = 'active-channel';
                                var22 = 'student-hub-add-channel';
                                var21 = 'create-channel';
                                var20 = 'invite';
                                var19 = 38;
                                var18 = 'customize-guild';
                                var17 = 'user-returned';
                                var16 = 39;
                                var15 = 40;
                                var14 = var2;
                                var13 = undefined;
                                var12 = undefined;
                                var11 = undefined;
                                var10 = undefined;
                                var9 = undefined;
                                var8 = undefined;
                                var7 = undefined;
                                var6 = undefined;
                                var5 = undefined;
                                var4 = undefined;
                                var3 = undefined;
                                var2 = undefined;
                                if (var1) {
                                    _fun101447_ip = 3984;
                                    continue _fun101447
                                }
                            case 951:
                                var48 = var14.value;
                                var1 = _closure1_slot28;
                                var1 = var1.LIVE_GUILD_STAGE;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 3819;
                                    continue _fun101447
                                }
                            case 973:
                                var1 = _closure1_slot28;
                                var1 = var1.LIVE_GUILD_EVENT;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 3764;
                                    continue _fun101447
                                }
                            case 990:
                                var1 = _closure1_slot28;
                                var1 = var1.UPCOMING_GUILD_EVENT;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 3706;
                                    continue _fun101447
                                }
                            case 1007:
                                var1 = _closure1_slot28;
                                var1 = var1.VOICES;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 3589;
                                    continue _fun101447
                                }
                            case 1024:
                                var1 = _closure1_slot28;
                                var1 = var1.EMBEDDED_ACTIVITY;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 3410;
                                    continue _fun101447
                                }
                            case 1041:
                                var1 = _closure1_slot28;
                                var1 = var1.COMBINED_VC;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 3279;
                                    continue _fun101447
                                }
                            case 1058:
                                var1 = _closure1_slot28;
                                var1 = var1.STREAMS;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 3162;
                                    continue _fun101447
                                }
                            case 1075:
                                var1 = _closure1_slot28;
                                var1 = var1.USER_CUSTOM_STATUS;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 3045;
                                    continue _fun101447
                                }
                            case 1092:
                                var1 = _closure1_slot28;
                                var1 = var1.ACTIVITIES;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 2928;
                                    continue _fun101447
                                }
                            case 1109:
                                var1 = _closure1_slot28;
                                var1 = var1.ACTIVE_CHANNEL;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 2658;
                                    continue _fun101447
                                }
                            case 1126:
                                var1 = _closure1_slot28;
                                var1 = var1.USER;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 2287;
                                    continue _fun101447
                                }
                            case 1143:
                                var1 = _closure1_slot28;
                                var1 = var1.STUDENT_HUB_ADD_CHANNEL;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 2134;
                                    continue _fun101447
                                }
                            case 1160:
                                var1 = _closure1_slot28;
                                var1 = var1.CREATE_CHANNEL;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 1946;
                                    continue _fun101447
                                }
                            case 1177:
                                var1 = _closure1_slot28;
                                var1 = var1.INVITE;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 1775;
                                    continue _fun101447
                                }
                            case 1194:
                                var1 = _closure1_slot28;
                                var1 = var1.CUSTOMIZE_GUILD;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 1593;
                                    continue _fun101447
                                }
                            case 1211:
                                var1 = _closure1_slot28;
                                var1 = var1.USER_RETURNED;
                                if (!(var1 !== var48)) {
                                    _fun101447_ip = 1294;
                                    continue _fun101447
                                }
                            case 1225:
                                var47 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var15];
                                var47 = var47.bind(var40)(var1);
                                var1 = var47.assertNever;
                                var1 = var1.bind(var47)(var48);
                                var58 = var13;
                                var57 = var12;
                                var56 = var11;
                                var55 = var10;
                                var54 = var9;
                                var53 = var8;
                                var52 = var7;
                                var51 = var6;
                                var50 = var5;
                                var49 = var4;
                                var48 = var3;
                                var47 = var2;
                                _fun101447_ip = 3930;
                                continue _fun101447;
                            case 1294:
                                var1 = _closure2_slot22;
                                var58 = var13;
                                var57 = var12;
                                var56 = var11;
                                var55 = var10;
                                var54 = var9;
                                var53 = var8;
                                var52 = var7;
                                var51 = var6;
                                var50 = var5;
                                var49 = var4;
                                var48 = var3;
                                var47 = var2;
                                if (!var1) {
                                    _fun101447_ip = 3930;
                                    continue _fun101447
                                }
                            case 1340:
                                var66 = _closure2_slot23;
                                var62 = var3;
                                var61 = var2;
                                var58 = var13;
                                var57 = var12;
                                var56 = var11;
                                var55 = var10;
                                var54 = var9;
                                var53 = var8;
                                var52 = var7;
                                var51 = var6;
                                var50 = var5;
                                var49 = var4;
                                var48 = var62;
                                var47 = var61;
                                for (var63 in var66)
                                    case 1397: {
                                        var48 = var62;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var47 = var61;
                                        case 1445: var59 = var63;
                                        var60 = _closure1_slot24;
                                        var1 = var60.isBlockedOrIgnored;
                                        var1 = var1.bind(var60)(var59);
                                        var62 = var59;
                                        if (var1) {
                                            _fun101447_ip = 1397;
                                            continue _fun101447
                                        }
                                        case 1469: var1 = _closure2_slot23;
                                        var1 = var1[var59];
                                        var62 = var59;
                                        var61 = var1;
                                        if (var39 == var1) {
                                            _fun101447_ip = 1397;
                                            continue _fun101447
                                        }
                                        case 1487: var68 = _closure1_slot0;
                                        var60 = _closure1_slot2;
                                        var60 = var60[var16];
                                        var60 = var68.bind(var40)(var60);
                                        var60 = var60.UserAffinityFlags;
                                        var60 = var60.RECENTLY_RETURNED;
                                        var60 = var1 & var60;
                                        var62 = var59;
                                        var61 = var1;
                                        if (!var60) {
                                            _fun101447_ip = 1397;
                                            continue _fun101447
                                        }
                                        case 1532: var61 = var0.push;
                                        var60 = {};
                                        var60.kind = var17;
                                        var60.userId = var59;
                                        var60 = var61.bind(var0)(var60);
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var59;
                                        var47 = var1;
                                        _fun101447_ip = 3930;
                                        continue _fun101447;
                                        case 1593: var1 = _closure2_slot14;
                                        var1 = var39 != var1;
                                        if (!var1) {
                                            _fun101447_ip = 1634;
                                            continue _fun101447
                                        }
                                        case 1604: var62 = _closure1_slot22;
                                        var61 = var62.can;
                                        var59 = _closure1_slot31;
                                        var60 = var59.MANAGE_GUILD;
                                        var59 = _closure2_slot14;
                                        var1 = var61.bind(var62)(var60, var59);
                                        case 1634: if (!var1) {
                                            _fun101447_ip = 1663;
                                            continue _fun101447
                                        }
                                        case 1637: var59 = _closure2_slot14;
                                        var60 = var39 == var59;
                                        var59 = undefined;
                                        if (var60) {
                                            _fun101447_ip = 1659;
                                            continue _fun101447
                                        }
                                        case 1650: var60 = _closure2_slot14;
                                        var59 = var60.icon;
                                        case 1659: var1 = var39 == var59;
                                        case 1663: var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        if (!var1) {
                                            _fun101447_ip = 3930;
                                            continue _fun101447
                                        }
                                        case 1705: var59 = var0.push;
                                        var1 = {};
                                        var1.kind = var18;
                                        var60 = _closure2_slot14;
                                        var60 = var60.id;
                                        var1.guildId = var60;
                                        var1 = var59.bind(var0)(var1);
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        _fun101447_ip = 3930;
                                        continue _fun101447;
                                        case 1775: var1 = _closure2_slot14;
                                        var1 = var39 != var1;
                                        if (!var1) {
                                            _fun101447_ip = 1794;
                                            continue _fun101447
                                        }
                                        case 1786: var59 = _closure2_slot17;
                                        var1 = var39 != var59;
                                        case 1794: if (!var1) {
                                            _fun101447_ip = 1834;
                                            continue _fun101447
                                        }
                                        case 1797: var60 = _closure1_slot0;
                                        var59 = _closure1_slot2;
                                        var59 = var59[var19];
                                        var62 = var60.bind(var40)(var59);
                                        var61 = var62.shouldRenderInvite;
                                        var60 = _closure2_slot17;
                                        var59 = _closure2_slot14;
                                        var1 = var61.bind(var62)(var60, var59);
                                        case 1834: var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        if (!var1) {
                                            _fun101447_ip = 3930;
                                            continue _fun101447
                                        }
                                        case 1876: var59 = var0.push;
                                        var1 = {};
                                        var1.kind = var20;
                                        var60 = _closure2_slot14;
                                        var60 = var60.id;
                                        var1.guildId = var60;
                                        var1 = var59.bind(var0)(var1);
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        _fun101447_ip = 3930;
                                        continue _fun101447;
                                        case 1946: var1 = _closure2_slot14;
                                        var1 = var39 != var1;
                                        if (!var1) {
                                            _fun101447_ip = 1987;
                                            continue _fun101447
                                        }
                                        case 1957: var62 = _closure1_slot22;
                                        var61 = var62.can;
                                        var59 = _closure1_slot31;
                                        var60 = var59.MANAGE_CHANNELS;
                                        var59 = _closure2_slot14;
                                        var1 = var61.bind(var62)(var60, var59);
                                        case 1987: if (!var1) {
                                            _fun101447_ip = 1998;
                                            continue _fun101447
                                        }
                                        case 1990: var59 = _closure2_slot17;
                                        var1 = var39 != var59;
                                        case 1998: if (!var1) {
                                            _fun101447_ip = 2022;
                                            continue _fun101447
                                        }
                                        case 2001: var60 = _closure2_slot17;
                                        var59 = _closure1_slot20;
                                        var59 = var60[var59];
                                        var59 = var59.length;
                                        var1 = var59 <= var24;
                                        case 2022: var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        if (!var1) {
                                            _fun101447_ip = 3930;
                                            continue _fun101447
                                        }
                                        case 2064: var59 = var0.push;
                                        var1 = {};
                                        var1.kind = var21;
                                        var60 = _closure2_slot14;
                                        var60 = var60.id;
                                        var1.guildId = var60;
                                        var1 = var59.bind(var0)(var1);
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        _fun101447_ip = 3930;
                                        continue _fun101447;
                                        case 2134: var1 = _closure2_slot14;
                                        var1 = var39 != var1;
                                        if (!var1) {
                                            _fun101447_ip = 2175;
                                            continue _fun101447
                                        }
                                        case 2145: var59 = _closure2_slot14;
                                        var61 = var59.features;
                                        var60 = var61.has;
                                        var59 = _closure1_slot30;
                                        var59 = var59.HUB;
                                        var1 = var60.bind(var61)(var59);
                                        case 2175: var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        if (!var1) {
                                            _fun101447_ip = 3930;
                                            continue _fun101447
                                        }
                                        case 2217: var59 = var0.push;
                                        var1 = {};
                                        var1.kind = var22;
                                        var60 = _closure2_slot14;
                                        var60 = var60.id;
                                        var1.guildId = var60;
                                        var1 = var59.bind(var0)(var1);
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        _fun101447_ip = 3930;
                                        continue _fun101447;
                                        case 2287: var1 = var30.length;
                                        var63 = var42 < var1;
                                        var60 = 0;
                                        var59 = 0;
                                        var1 = 0;
                                        var62 = 0;
                                        var61 = var6;
                                        if (!var63) {
                                            _fun101447_ip = 2403;
                                            continue _fun101447
                                        }
                                        case 2310: var64 = var30[var59];
                                        var63 = _closure2_slot2;
                                        var65 = var39 != var63;
                                        if (!var65) {
                                            _fun101447_ip = 2344;
                                            continue _fun101447
                                        }
                                        case 2325: var67 = _closure2_slot2;
                                        var66 = var67.has;
                                        var63 = var64.userId;
                                        var65 = var66.bind(var67)(var63);
                                        case 2344: var63 = var60;
                                        if (var65) {
                                            _fun101447_ip = 2363;
                                            continue _fun101447
                                        }
                                        case 2350: var65 = var0.push;
                                        var65 = var65.bind(var0)(var64);
                                        var63 = var60 + 1;
                                        case 2363: var65 = var59 + 1;
                                        var66 = var30.length;
                                        var1 = var63;
                                        var62 = var65;
                                        var61 = var64;
                                        if (!(var65 < var66)) {
                                            _fun101447_ip = 2403;
                                            continue _fun101447
                                        }
                                        case 2384: var60 = var63;
                                        var59 = var65;
                                        var62 = var59;
                                        var61 = var64;
                                        var1 = var60;
                                        if (var1 < var43) {
                                            _fun101447_ip = 2310;
                                            continue _fun101447
                                        }
                                        case 2403: var59 = var29.length;
                                        var59 = var42 < var59;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var1;
                                        var52 = var62;
                                        var51 = var61;
                                        var50 = 0;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        if (!var59) {
                                            _fun101447_ip = 3930;
                                            continue _fun101447
                                        }
                                        case 2453: var60 = var1;
                                        var59 = 0;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var60;
                                        var52 = var62;
                                        var51 = var61;
                                        var50 = 0;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        if (!(var1 < var43)) {
                                            _fun101447_ip = 3930;
                                            continue _fun101447
                                        }
                                        case 2500: var63 = var29[var59];
                                        var1 = _closure2_slot2;
                                        var64 = var39 != var1;
                                        if (!var64) {
                                            _fun101447_ip = 2534;
                                            continue _fun101447
                                        }
                                        case 2515: var66 = _closure2_slot2;
                                        var65 = var66.has;
                                        var1 = var63.userId;
                                        var64 = var65.bind(var66)(var1);
                                        case 2534: var1 = var60;
                                        if (var64) {
                                            _fun101447_ip = 2553;
                                            continue _fun101447
                                        }
                                        case 2540: var64 = var0.push;
                                        var64 = var64.bind(var0)(var63);
                                        var1 = var60 + 1;
                                        case 2553: var64 = var59 + 1;
                                        var65 = var29.length;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var1;
                                        var52 = var62;
                                        var51 = var61;
                                        var49 = var63;
                                        var48 = var3;
                                        var47 = var2;
                                        var50 = var64;
                                        if (!(var50 < var65)) {
                                            _fun101447_ip = 3930;
                                            continue _fun101447
                                        }
                                        case 2604: var60 = var1;
                                        var59 = var64;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var60;
                                        var52 = var62;
                                        var51 = var61;
                                        var50 = var59;
                                        var49 = var63;
                                        var48 = var3;
                                        var47 = var2;
                                        if (var1 < var43) {
                                            _fun101447_ip = 2500;
                                            continue _fun101447
                                        }
                                        case 2653: _fun101447_ip = 3930;
                                        continue _fun101447;
                                        case 2658: var1 = _closure2_slot1;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        if (!(var39 != var1)) {
                                            _fun101447_ip = 3930;
                                            continue _fun101447
                                        }
                                        case 2705: var59 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var25];
                                        var61 = var59.bind(var40)(var1);
                                        var60 = var61.getActiveTextChannels;
                                        var59 = _closure2_slot1;
                                        var62 = _closure1_slot18;
                                        var1 = new Array(4);
                                        var1[0] = var62;
                                        var62 = _closure1_slot22;
                                        var1[1] = var62;
                                        var62 = _closure1_slot7;
                                        var1[2] = var62;
                                        var62 = _closure1_slot25;
                                        var1[3] = var62;
                                        var60 = var60.bind(var61)(var59, var1);
                                        var61 = var44.Math;
                                        var59 = var61.min;
                                        var1 = var60.length;
                                        var59 = var59.bind(var61)(var24, var1);
                                        var61 = var42 < var59;
                                        var1 = 0;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var60;
                                        var55 = var59;
                                        var54 = 0;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        if (!var61) {
                                            _fun101447_ip = 3930;
                                            continue _fun101447
                                        }
                                        case 2843: var62 = var0.push;
                                        var61 = {};
                                        var61.kind = var23;
                                        var63 = _closure2_slot1;
                                        var61.guildId = var63;
                                        var63 = var60[var1];
                                        var63 = var63.id;
                                        var61.channelId = var63;
                                        var61 = var62.bind(var0)(var61);
                                        var1 = var1 + 1;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var60;
                                        var55 = var59;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        var54 = var1;
                                        if (var54 < var59) {
                                            _fun101447_ip = 2843;
                                            continue _fun101447
                                        }
                                        case 2923: _fun101447_ip = 3930;
                                        continue _fun101447;
                                        case 2928: var61 = var32;
                                        var58 = var13;
                                        var57 = var12;
                                        var56 = var11;
                                        var55 = var10;
                                        var54 = var9;
                                        var53 = var8;
                                        var52 = var7;
                                        var51 = var6;
                                        var50 = var5;
                                        var49 = var4;
                                        var48 = var3;
                                        var47 = var2;
                                        for (var1 in var61)
                                            case 2978: {
                                                var58 = var13;
                                                var57 = var12;
                                                var56 = var11;
                                                var55 = var10;
                                                var54 = var9;
                                                var53 = var8;
                                                var52 = var7;
                                                var51 = var6;
                                                var50 = var5;
                                                var49 = var4;
                                                var48 = var3;
                                                var47 = var2;
                                                case 3026: var63 = var1;
                                                var64 = var0.push;
                                                var63 = var32[var63];
                                                var63 = var64.bind(var0)(var63);
                                                _fun101447_ip = 2978;
                                                continue _fun101447;
                                                case 3045: var61 = var31;
                                                var58 = var13;
                                                var57 = var12;
                                                var56 = var11;
                                                var55 = var10;
                                                var54 = var9;
                                                var53 = var8;
                                                var52 = var7;
                                                var51 = var6;
                                                var50 = var5;
                                                var49 = var4;
                                                var48 = var3;
                                                var47 = var2;
                                                for (var1 in var61)
                                                    case 3095: {
                                                        var58 = var13;
                                                        var57 = var12;
                                                        var56 = var11;
                                                        var55 = var10;
                                                        var54 = var9;
                                                        var53 = var8;
                                                        var52 = var7;
                                                        var51 = var6;
                                                        var50 = var5;
                                                        var49 = var4;
                                                        var48 = var3;
                                                        var47 = var2;
                                                        case 3143: var63 = var1;
                                                        var64 = var0.push;
                                                        var63 = var31[var63];
                                                        var63 = var64.bind(var0)(var63);
                                                        _fun101447_ip = 3095;
                                                        continue _fun101447;
                                                        case 3162: var61 = var33;
                                                        var58 = var13;
                                                        var57 = var12;
                                                        var56 = var11;
                                                        var55 = var10;
                                                        var54 = var9;
                                                        var53 = var8;
                                                        var52 = var7;
                                                        var51 = var6;
                                                        var50 = var5;
                                                        var49 = var4;
                                                        var48 = var3;
                                                        var47 = var2;
                                                        for (var1 in var61)
                                                            case 3212: {
                                                                var58 = var13;
                                                                var57 = var12;
                                                                var56 = var11;
                                                                var55 = var10;
                                                                var54 = var9;
                                                                var53 = var8;
                                                                var52 = var7;
                                                                var51 = var6;
                                                                var50 = var5;
                                                                var49 = var4;
                                                                var48 = var3;
                                                                var47 = var2;
                                                                case 3260: var63 = var1;
                                                                var64 = var0.push;
                                                                var63 = var33[var63];
                                                                var63 = var64.bind(var0)(var63);
                                                                _fun101447_ip = 3212;
                                                                continue _fun101447;
                                                                case 3279: var61 = var35;
                                                                var58 = var13;
                                                                var57 = var12;
                                                                var56 = var11;
                                                                var55 = var10;
                                                                var54 = var9;
                                                                var53 = var8;
                                                                var52 = var7;
                                                                var51 = var6;
                                                                var50 = var5;
                                                                var49 = var4;
                                                                var48 = var3;
                                                                var47 = var2;
                                                                for (var1 in var61)
                                                                    case 3329: {
                                                                        var58 = var13;
                                                                        var57 = var12;
                                                                        var56 = var11;
                                                                        var55 = var10;
                                                                        var54 = var9;
                                                                        var53 = var8;
                                                                        var52 = var7;
                                                                        var51 = var6;
                                                                        var50 = var5;
                                                                        var49 = var4;
                                                                        var48 = var3;
                                                                        var47 = var2;
                                                                        case 3377: var65 = var1;
                                                                        var64 = var0.push;
                                                                        var63 = {};
                                                                        var70 = var35[var65];
                                                                        var71 = var63;
                                                                        var65 = copyDataProperties(var71, var70);
                                                                        var63[var26] = var27;
                                                                        var63 = var64.bind(var0)(var63);
                                                                        _fun101447_ip = 3329;
                                                                        continue _fun101447;
                                                                        case 3410: var66 = var34;
                                                                        var62 = var13;
                                                                        var61 = var12;
                                                                        var58 = var62;
                                                                        var57 = var61;
                                                                        var56 = var11;
                                                                        var55 = var10;
                                                                        var54 = var9;
                                                                        var53 = var8;
                                                                        var52 = var7;
                                                                        var51 = var6;
                                                                        var50 = var5;
                                                                        var49 = var4;
                                                                        var48 = var3;
                                                                        var47 = var2;
                                                                        for (var63 in var66)
                                                                            case 3466: {
                                                                                var58 = var62;
                                                                                var57 = var61;
                                                                                var56 = var11;
                                                                                var55 = var10;
                                                                                var54 = var9;
                                                                                var53 = var8;
                                                                                var52 = var7;
                                                                                var51 = var6;
                                                                                var50 = var5;
                                                                                var49 = var4;
                                                                                var48 = var3;
                                                                                var47 = var2;
                                                                                case 3514: var1 = var63;
                                                                                var59 = _closure1_slot34;
                                                                                var1 = var34[var1];
                                                                                var60 = var59.bind(var40)(var1);
                                                                                var59 = var60.bind(var40)();
                                                                                var1 = var59.done;
                                                                                var62 = var59;
                                                                                var61 = var60;
                                                                                var59 = var62;
                                                                                if (var1) {
                                                                                    _fun101447_ip = 3466;
                                                                                    continue _fun101447
                                                                                }
                                                                                case 3551: var68 = var59.value;
                                                                                var1 = var0.push;
                                                                                var1 = var1.bind(var0)(var68);
                                                                                var68 = var60.bind(var40)();
                                                                                var1 = var68.done;
                                                                                var62 = var68;
                                                                                var61 = var60;
                                                                                var59 = var62;
                                                                                if (var1) {
                                                                                    _fun101447_ip = 3466;
                                                                                    continue _fun101447
                                                                                }
                                                                                case 3587: _fun101447_ip = 3551;
                                                                                continue _fun101447;
                                                                                case 3589: var61 = var35;
                                                                                var58 = var13;
                                                                                var57 = var12;
                                                                                var56 = var11;
                                                                                var55 = var10;
                                                                                var54 = var9;
                                                                                var53 = var8;
                                                                                var52 = var7;
                                                                                var51 = var6;
                                                                                var50 = var5;
                                                                                var49 = var4;
                                                                                var48 = var3;
                                                                                var47 = var2;
                                                                                for (var1 in var61)
                                                                                    case 3639: {
                                                                                        var58 = var13;
                                                                                        var57 = var12;
                                                                                        var56 = var11;
                                                                                        var55 = var10;
                                                                                        var54 = var9;
                                                                                        var53 = var8;
                                                                                        var52 = var7;
                                                                                        var51 = var6;
                                                                                        var50 = var5;
                                                                                        var49 = var4;
                                                                                        var48 = var3;
                                                                                        var47 = var2;
                                                                                        case 3687: var63 = var1;
                                                                                        var64 = var0.push;
                                                                                        var63 = var35[var63];
                                                                                        var63 = var64.bind(var0)(var63);
                                                                                        _fun101447_ip = 3639;
                                                                                        continue _fun101447;
                                                                                        case 3706: var59 = var37.forEach;
                                                                                        var1 = function(arg0) { // Environment: var46
                                                                                            var2 = _closure4_slot12;
                                                                                            var1 = var2.push;
                                                                                            var0 = {
                                                                                                'kind': 'guild-event',
                                                                                                'event': null,
                                                                                                'isLive': false
                                                                                            };
                                                                                            var3 = arg0;
                                                                                            var0.event = var3;
                                                                                            var0 = var1.bind(var2)(var0);
                                                                                            return var0;
                                                                                        };
                                                                                        var1 = var59.bind(var37)(var1);
                                                                                        var58 = var13;
                                                                                        var57 = var12;
                                                                                        var56 = var11;
                                                                                        var55 = var10;
                                                                                        var54 = var9;
                                                                                        var53 = var8;
                                                                                        var52 = var7;
                                                                                        var51 = var6;
                                                                                        var50 = var5;
                                                                                        var49 = var4;
                                                                                        var48 = var3;
                                                                                        var47 = var2;
                                                                                        _fun101447_ip = 3930;
                                                                                        continue _fun101447;
                                                                                        case 3764: var59 = var38.forEach;
                                                                                        var1 = function(arg0) { // Environment: var46
                                                                                            var2 = _closure4_slot12;
                                                                                            var1 = var2.push;
                                                                                            var0 = {
                                                                                                'kind': 'guild-event',
                                                                                                'event': null,
                                                                                                'isLive': true
                                                                                            };
                                                                                            var3 = arg0;
                                                                                            var0.event = var3;
                                                                                            var0 = var1.bind(var2)(var0);
                                                                                            return var0;
                                                                                        };
                                                                                        var1 = var59.bind(var38)(var1);
                                                                                        var58 = var13;
                                                                                        var57 = var12;
                                                                                        var56 = var11;
                                                                                        var55 = var10;
                                                                                        var54 = var9;
                                                                                        var53 = var8;
                                                                                        var52 = var7;
                                                                                        var51 = var6;
                                                                                        var50 = var5;
                                                                                        var49 = var4;
                                                                                        var48 = var3;
                                                                                        var47 = var2;
                                                                                        _fun101447_ip = 3930;
                                                                                        continue _fun101447;
                                                                                        case 3819: var61 = var36;
                                                                                        var58 = var13;
                                                                                        var57 = var12;
                                                                                        var56 = var11;
                                                                                        var55 = var10;
                                                                                        var54 = var9;
                                                                                        var53 = var8;
                                                                                        var52 = var7;
                                                                                        var51 = var6;
                                                                                        var50 = var5;
                                                                                        var49 = var4;
                                                                                        var48 = var3;
                                                                                        var47 = var2;
                                                                                        for (var1 in var61)
                                                                                            case 3866: {
                                                                                                var58 = var13;
                                                                                                var57 = var12;
                                                                                                var56 = var11;
                                                                                                var55 = var10;
                                                                                                var54 = var9;
                                                                                                var53 = var8;
                                                                                                var52 = var7;
                                                                                                var51 = var6;
                                                                                                var50 = var5;
                                                                                                var49 = var4;
                                                                                                var48 = var3;
                                                                                                var47 = var2;
                                                                                                case 3911: var63 = var1;
                                                                                                var64 = var0.push;
                                                                                                var63 = var36[var63];
                                                                                                var63 = var64.bind(var0)(var63);
                                                                                                _fun101447_ip = 3866;
                                                                                                continue _fun101447;
                                                                                            }
                                                                                    }
                                                                            }
                                                                    }
                                                            }
                                                    }
                                            }
                                    }
                            case 3930:
                                var59 = var28.bind(var40)();
                                var1 = var59.done;
                                var13 = var58;
                                var12 = var57;
                                var11 = var56;
                                var10 = var55;
                                var9 = var54;
                                var8 = var53;
                                var7 = var52;
                                var6 = var51;
                                var5 = var50;
                                var4 = var49;
                                var3 = var48;
                                var2 = var47;
                                var14 = var59;
                                if (!var1) {
                                    _fun101447_ip = 951;
                                    continue _fun101447
                                }
                            case 3984:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var7 = var11.bind(var13)(var3, var7);
                var _closure2_slot28 = var7;
                var11 = var13.useState;
                var3 = function() { // Environment: var5
                    _fun101461: for (var _fun101461_ip = 0;;) switch (_fun101461_ip) {
                        case 0:
                            var0 = _closure2_slot26;
                            if (var0) {
                                _fun101461_ip = 99;
                                continue _fun101461
                            }
                        case 10:
                            var0 = _closure2_slot28;
                            var6 = undefined;
                            var0 = var0.bind(var6)();
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun101461_ip = 97;
                                continue _fun101461
                            }
                        case 30:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 28;
                            var1 = var3[var1];
                            var3 = var2.bind(var6)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var7 = 'GUILD_HEADER_ACTIVE_CHANNELS_COUNT';
                            var1.type = var7;
                            var5 = _closure1_slot36;
                            var5 = var5.bind(var6)(var0);
                            var1.count = var5;
                            var4 = _closure2_slot1;
                            var1.guildId = var4;
                            var1 = var2.bind(var3)(var1);
                        case 97:
                            return var0;
                        case 99:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var12 = var11.bind(var13)(var3);
                var11 = _closure1_slot3;
                var3 = 2;
                var12 = var11.bind(var4)(var12, var3);
                var3 = 0;
                var3 = var12[var3];
                var11 = 1;
                var11 = var12[var11];
                var _closure2_slot29 = var11;
                var12 = var13.useCallback;
                var11 = new Array(2);
                var11[0] = var7;
                var11[1] = var9;
                var7 = function() { // Environment: var5
                    _fun101462: for (var _fun101462_ip = 0;;) switch (_fun101462_ip) {
                        case 0:
                            var1 = _closure2_slot28;
                            var0 = undefined;
                            var6 = var1.bind(var0)();
                            var1 = _closure2_slot29;
                            var1 = var1.bind(var0)(var6);
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun101462_ip = 99;
                                continue _fun101462
                            }
                        case 32:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 28;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var7 = 'GUILD_HEADER_ACTIVE_CHANNELS_COUNT';
                            var1.type = var7;
                            var5 = _closure1_slot36;
                            var5 = var5.bind(var0)(var6);
                            var1.count = var5;
                            var4 = _closure2_slot1;
                            var1.guildId = var4;
                            var1 = var2.bind(var3)(var1);
                        case 99:
                            return var0;
                    }
                };
                var7 = var12.bind(var13)(var7, var11);
                var _closure2_slot30 = var7;
                var12 = var13.useEffect;
                var11 = new Array(4);
                var11[0] = var9;
                var11[1] = var1;
                var11[2] = var6;
                var11[3] = var7;
                var6 = function() { // Environment: var5
                    _fun101463: for (var _fun101463_ip = 0;;) switch (_fun101463_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot27;
                            var2 = var2.current;
                            var2 = var2.guildId;
                            if (!(var3 !== var2)) {
                                _fun101463_ip = 54;
                                continue _fun101463
                            }
                        case 27:
                            var3 = _closure2_slot27;
                            var2 = {};
                            var4 = _closure2_slot1;
                            var2.guildId = var4;
                            var4 = false;
                            var2.hasComputed = var4;
                            var3.current = var2;
                        case 54:
                            var2 = _closure2_slot27;
                            var2 = var2.current;
                            var2 = var2.hasComputed;
                            if (var2) {
                                _fun101463_ip = 93;
                                continue _fun101463
                            }
                        case 72:
                            var3 = _closure2_slot26;
                            var2 = undefined;
                            if (var3) {
                                _fun101463_ip = 91;
                                continue _fun101463
                            }
                        case 81:
                            var3 = _closure2_slot30;
                            var3 = var3.bind(var2)();
                            _fun101463_ip = 100;
                            continue _fun101463;
                        case 91:
                            return var2;
                        case 93:
                            var1 = _closure2_slot20;
                            if (var1) {
                                _fun101463_ip = 104;
                                continue _fun101463
                            }
                        case 100:
                            var1 = undefined;
                            return var1;
                        case 104:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                var1 = _closure2_slot30;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1 = 50;
                            var1 = var4.bind(var3)(var2, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var6 = var12.bind(var13)(var6, var11);
                var6 = null;
                var11 = var6 == var10;
                var6 = undefined;
                if (var11) {
                    _fun101420_ip = 1458;
                    continue _fun101420
                }
            case 1453:
                var6 = var10.id;
            case 1458:
                var5 = function arg0, arg1, arg2, arg3() {
                    var7 = arg0;
                    var6 = arg1;
                    var1 = arg2;
                    var5 = arg3;
                    var _closure3_slot0 = var7;
                    var _closure3_slot1 = var6;
                    var _closure3_slot2 = var1;
                    var _closure3_slot3 = var5;
                    var3 = _closure1_slot4;
                    var4 = var3.useRef;
                    var2 = -1;
                    var2 = var4.bind(var3)(var2);
                    var _closure3_slot4 = var2;
                    var4 = var3.useRef;
                    var2 = 0;
                    var2 = var4.bind(var3)(var2);
                    var _closure3_slot5 = var2;
                    var4 = var3.useCallback;
                    var2 = new Array(4);
                    var2[0] = var7;
                    var2[1] = var6;
                    var2[2] = var5;
                    var2[3] = var1;
                    var1 = function() { // Environment: var0
                        _fun101467: for (var _fun101467_ip = 0;;) switch (_fun101467_ip) {
                            case 0:
                                var1 = _closure3_slot4;
                                var2 = var1.current;
                                var1 = -1;
                                if (!(var1 !== var2)) {
                                    _fun101467_ip = 46;
                                    continue _fun101467
                                }
                            case 22:
                                var1 = global;
                                var3 = var1.clearTimeout;
                                var1 = _closure3_slot4;
                                var2 = var1.current;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                            case 46:
                                var1 = _closure3_slot2;
                                if (!var1) {
                                    _fun101467_ip = 94;
                                    continue _fun101467
                                }
                            case 53:
                                var1 = _closure3_slot4;
                                var0 = global;
                                var4 = var0.setTimeout;
                                var3 = undefined;
                                var2 = function() { // Environment: var0
                                    _fun101468: for (var _fun101468_ip = 0;;) switch (_fun101468_ip) {
                                        case 0:
                                            var1 = _closure1_slot26;
                                            var0 = var1.getUserStoreVersion;
                                            var1 = var0.bind(var1)();
                                            var2 = _closure1_slot18;
                                            var0 = var2.getPrivateChannelsVersion;
                                            var0 = var0.bind(var2)();
                                            var1 = var1 + var0;
                                            var2 = _closure1_slot27;
                                            var0 = var2.getVoiceStateVersion;
                                            var0 = var0.bind(var2)();
                                            var2 = var1 + var0;
                                            var1 = _closure3_slot0;
                                            var6 = null;
                                            var4 = var6 != var1;
                                            var5 = -1;
                                            var1 = var5;
                                            if (!var4) {
                                                _fun101468_ip = 124;
                                                continue _fun101468
                                            }
                                        case 80:
                                            var4 = _closure3_slot1;
                                            var4 = var6 != var4;
                                            var1 = var5;
                                            if (!var4) {
                                                _fun101468_ip = 124;
                                                continue _fun101468
                                            }
                                        case 94:
                                            var6 = _closure1_slot16;
                                            var5 = var6.getProps;
                                            var4 = _closure3_slot0;
                                            var3 = _closure3_slot1;
                                            var3 = var5.bind(var6)(var4, var3);
                                            var1 = var3.version;
                                        case 124:
                                            var2 = var2 + var1;
                                            var1 = _closure3_slot5;
                                            var1 = var1.current;
                                            if (!(var1 !== var2)) {
                                                _fun101468_ip = 161;
                                                continue _fun101468
                                            }
                                        case 141:
                                            var1 = _closure3_slot5;
                                            var1.current = var2;
                                            var1 = _closure3_slot3;
                                            var0 = undefined;
                                            var0 = var1.bind(var0)();
                                        case 161:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = 1000;
                                var0 = var4.bind(var3)(var2, var0);
                                var1.current = var0;
                            case 94:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = var4.bind(var3)(var1, var2);
                    var _closure3_slot6 = var4;
                    var2 = var3.useEffect;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot33;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var0
                            var2 = arg0;
                            var1 = var2.addChangeListener;
                            var0 = _closure3_slot6;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        var0 = function() { // Environment: var0
                            _fun101471: for (var _fun101471_ip = 0;;) switch (_fun101471_ip) {
                                case 0:
                                    var1 = _closure3_slot4;
                                    var2 = var1.current;
                                    var1 = -1;
                                    if (!(var1 !== var2)) {
                                        _fun101471_ip = 46;
                                        continue _fun101471
                                    }
                                case 22:
                                    var1 = global;
                                    var2 = var1.clearTimeout;
                                    var0 = _closure3_slot4;
                                    var1 = var0.current;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 46:
                                    var2 = _closure1_slot33;
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        var2 = arg0;
                                        var1 = var2.removeChangeListener;
                                        var0 = _closure3_slot6;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var39 = undefined;
                var38 = var9;
                var37 = var6;
                var36 = var8;
                var35 = var7;
                var5 = var39[var5](var38, var37, var36, var35, var34);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 41;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var2 = var0.bind(var4)(var2);
                var0 = new Array(2);
                var0[0] = var3;
                if (var1) {
                    _fun101420_ip = 1528;
                    continue _fun101420
                }
            case 1519:
                var2 = var2.hasComputed;
                var1 = !var2;
            case 1528:
                var0[1] = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1371, 3465, 12463, 3325, 1377, 6968, 3705, 1216, 5651, 1372, 1662, 1410, 3082, 3601, 3091, 4299, 1613, 3512, 10880, 660, 8343, 566, 13221, 13222, 7739, 5670, 806, 7875, 20, 22, 4547, 13223, 13224, 13225, 5666, 13226, 8330, 8344, 1304, 4730, 2]);