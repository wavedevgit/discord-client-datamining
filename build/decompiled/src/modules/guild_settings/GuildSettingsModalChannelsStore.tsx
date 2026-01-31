// modules/guild_settings/GuildSettingsModalChannelsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun114555: for (var _fun114555_ip = 0;;) switch (_fun114555_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun114555_ip = 76;
                continue _fun114555;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot26 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: sortCategoryList, environment: var3
        _fun114558: for (var _fun114558_ip = 0;;) switch (_fun114558_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = var0.position;
                var4 = var0.type;
                var0 = arg1;
                var0 = var0.channel;
                var1 = var0.position;
                var6 = var0.type;
                if (!(var4 !== var6)) {
                    _fun114558_ip = 118;
                    continue _fun114558
                }
            case 40:
                var3 = _closure1_slot9;
                var5 = undefined;
                var3 = var3.bind(var5)(var4);
                if (!var3) {
                    _fun114558_ip = 69;
                    continue _fun114558
                }
            case 57:
                var3 = _closure1_slot9;
                var3 = var3.bind(var5)(var6);
                if (var3) {
                    _fun114558_ip = 118;
                    continue _fun114558
                }
            case 69:
                var3 = _closure1_slot10;
                var3 = var3.bind(var5)(var4);
                if (!var3) {
                    _fun114558_ip = 93;
                    continue _fun114558
                }
            case 81:
                var3 = _closure1_slot10;
                var3 = var3.bind(var5)(var6);
                if (var3) {
                    _fun114558_ip = 118;
                    continue _fun114558
                }
            case 93:
                var0 = _closure1_slot15;
                var3 = var0.GUILD_TEXT;
                var0 = 1;
                if (!(var4 === var3)) {
                    _fun114558_ip = 116;
                    continue _fun114558
                }
            case 110:
                var0 = -1;
            case 116:
                _fun114558_ip = 122;
                continue _fun114558;
            case 118:
                var0 = var2 - var1;
            case 122:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0, arg1) { // Original name: setIndex, environment: var3
        var1 = arg1;
        var0 = arg0;
        var0.index = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() { // Original name: buildSortedChannels, environment: var3
        var2 = {};
        var1 = new Array(0);
        var2._categories = var1;
        var1 = new Array(0);
        var2.null = var1;
        _closure1_slot19 = var2;
        var2 = global;
        var4 = var2.Object;
        var3 = var4.keys;
        var2 = _closure1_slot23;
        var4 = var3.bind(var4)(var2);
        var3 = var4.forEach;
        var2 = function(arg0) { // Environment: var0
            _fun114561: for (var _fun114561_ip = 0;;) switch (_fun114561_ip) {
                case 0:
                    var2 = _closure1_slot23;
                    var0 = arg0;
                    var0 = var2[var0];
                    var3 = null;
                    if (!(var3 != var0)) {
                        _fun114561_ip = 218;
                        continue _fun114561
                    }
                case 23:
                    var2 = _closure1_slot19;
                    if (!(var3 != var2)) {
                        _fun114561_ip = 218;
                        continue _fun114561
                    }
                case 34:
                    var4 = var0.type;
                    var2 = _closure1_slot15;
                    var2 = var2.GUILD_CATEGORY;
                    if (!(var4 !== var2)) {
                        _fun114561_ip = 148;
                        continue _fun114561
                    }
                case 53:
                    var2 = global;
                    var5 = var2.String;
                    var2 = var0.parent_id;
                    var6 = var3 != var2;
                    var4 = 'null';
                    if (!var6) {
                        _fun114561_ip = 81;
                        continue _fun114561
                    }
                case 78:
                    var4 = var2;
                case 81:
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var2 = _closure1_slot19;
                    var2 = var2[var4];
                    if (!(var3 == var2)) {
                        _fun114561_ip = 112;
                        continue _fun114561
                    }
                case 100:
                    var5 = _closure1_slot19;
                    var2 = new Array(0);
                    var5[var4] = var2;
                case 112:
                    var2 = _closure1_slot19;
                    var5 = var2[var4];
                    var4 = var5.push;
                    var2 = {};
                    var2.channel = var0;
                    var6 = -1;
                    var2.index = var6;
                    var2 = var4.bind(var5)(var2);
                    _fun114561_ip = 218;
                    continue _fun114561;
                case 148:
                    var2 = _closure1_slot19;
                    var5 = var2._categories;
                    var4 = var5.push;
                    var2 = {};
                    var2.channel = var0;
                    var6 = -1;
                    var2.index = var6;
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure1_slot19;
                    var2 = var0.id;
                    var2 = var4[var2];
                    if (!(var3 == var2)) {
                        _fun114561_ip = 218;
                        continue _fun114561
                    }
                case 201:
                    var2 = _closure1_slot19;
                    var1 = var0.id;
                    var0 = new Array(0);
                    var2[var1] = var0;
                case 218:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot19;
        var4 = var2._categories;
        var3 = var4.sort;
        var2 = _closure1_slot27;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot19;
        var3 = var2._categories;
        var2 = var3.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun114562: for (var _fun114562_ip = 0;;) switch (_fun114562_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.channel;
                    var3 = _closure1_slot19;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun114562_ip = 57;
                        continue _fun114562
                    }
                case 21:
                    if (!(var1 != var2)) {
                        _fun114562_ip = 57;
                        continue _fun114562
                    }
                case 25:
                    var3 = _closure1_slot19;
                    var2 = var2.id;
                    var2 = var3[var2];
                    if (!(var1 != var2)) {
                        _fun114562_ip = 57;
                        continue _fun114562
                    }
                case 42:
                    var1 = var2.sort;
                    var0 = _closure1_slot27;
                    var0 = var1.bind(var2)(var0);
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0);
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 10;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var2 = _closure1_slot19;
        var3 = var2._categories;
        var2 = _closure1_slot19;
        var4 = var4.bind(var0)(var3, var2);
        var3 = var4.forEach;
        var2 = _closure1_slot28;
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot31;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function() { // Original name: rebuildChannels, environment: var3
        _fun114563: for (var _fun114563_ip = 0;;) switch (_fun114563_ip) {
            case 0:
                var4 = _closure1_slot13;
                var3 = var4.getChannels;
                var2 = _closure1_slot17;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot20;
                if (!(var3 !== var2)) {
                    _fun114563_ip = 135;
                    continue _fun114563
                }
            case 32:
                _closure1_slot20 = var3;
                var2 = {};
                _closure1_slot23 = var2;
                var2 = _closure1_slot11;
                var5 = var3[var2];
                var4 = var5.forEach;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.channel;
                    var2 = _closure1_slot23;
                    var1 = var0.id;
                    var2[var1] = var0;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot12;
                var5 = var3[var2];
                var4 = var5.forEach;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.channel;
                    var2 = _closure1_slot23;
                    var1 = var0.id;
                    var2[var1] = var0;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot15;
                var2 = var2.GUILD_CATEGORY;
                var3 = var3[var2];
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun114566: for (var _fun114566_ip = 0;;) switch (_fun114566_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.channel;
                            var1 = var2.id;
                            var0 = 'null';
                            var0 = var0 === var1;
                            if (var0) {
                                _fun114566_ip = 53;
                                continue _fun114566
                            }
                        case 24:
                            var4 = _closure1_slot14;
                            var3 = var4.can;
                            var1 = _closure1_slot16;
                            var1 = var1.VIEW_CHANNEL;
                            var0 = var3.bind(var4)(var1, var2);
                        case 53:
                            if (!var0) {
                                _fun114566_ip = 72;
                                continue _fun114566
                            }
                        case 56:
                            var1 = _closure1_slot23;
                            var0 = var2.id;
                            var1[var0] = var2;
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = _closure1_slot29;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 135:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function() { // Original name: setupSortLists, environment: var3
        _fun114567: for (var _fun114567_ip = 0;;) switch (_fun114567_ip) {
            case 0:
                var3 = _closure1_slot19;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun114567_ip = 90;
                    continue _fun114567
                }
            case 15:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 10;
                var2 = var4[var2];
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var2 = _closure1_slot19;
                var4 = var2._categories;
                var3 = _closure1_slot19;
                var2 = function(arg0) { // Environment: var0
                    _fun114568: for (var _fun114568_ip = 0;;) switch (_fun114568_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.channel;
                            var1 = var2.type;
                            var0 = _closure1_slot15;
                            var0 = var0.GUILD_CATEGORY;
                            var0 = var1 === var0;
                            if (var0) {
                                _fun114568_ip = 68;
                                continue _fun114568
                            }
                        case 33:
                            var4 = _closure1_slot21;
                            var1 = null;
                            var1 = var1 != var4;
                            if (!var1) {
                                _fun114568_ip = 65;
                                continue _fun114568
                            }
                        case 46:
                            var4 = _closure1_slot21;
                            var3 = var4.has;
                            var2 = var2.type;
                            var1 = var3.bind(var4)(var2);
                        case 65:
                            var0 = var1;
                        case 68:
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var4, var3, var2);
                _closure1_slot22 = var3;
                var2 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.channel;
                    var0 = var0.id;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                _closure1_slot18 = var0;
            case 90:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = ['lock_permissions', 'id'];
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.isGuildSelectableChannelType;
    var _closure1_slot9 = var7;
    var1 = var1.isGuildVocalChannelType;
    var _closure1_slot10 = var1;
    var1 = 7;
    var7 = var5[var1];
    var7 = var4.bind(var0)(var7);
    var8 = var7.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot11 = var8;
    var7 = var7.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot12 = var7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.ChannelTypes;
    var _closure1_slot15 = var7;
    var1 = var1.Permissions;
    var _closure1_slot16 = var1;
    var1 = null;
    var _closure1_slot17 = var1;
    var _closure1_slot18 = var1;
    var _closure1_slot19 = var1;
    var _closure1_slot20 = var1;
    var _closure1_slot21 = var1;
    var _closure1_slot22 = var1;
    var1 = {};
    var _closure1_slot23 = var1;
    var1 = 11;
    var1 = var5[var1];
    var9 = var6.bind(var0)(var1);
    var8 = var9.debounce;
    var7 = function() { // Environment: var3
        var2 = _closure1_slot30;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var2 = _closure1_slot25;
        var1 = var2.emitChange;
        var1 = var1.bind(var2)();
        return var0;
    };
    var1 = 500;
    var1 = var8.bind(var9)(var7, var1);
    var _closure1_slot24 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GuildSettingsModalChannelsStoreClass, environment: var5
            _fun114572: for (var _fun114572_ip = 0;;) switch (_fun114572_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot26;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun114572_ip = 69;
                        continue _fun114572
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun114572_ip = 105;
                    continue _fun114572;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var4 = var3.waitFor;
            var2 = _closure1_slot13;
            var1 = _closure1_slot14;
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.syncWith;
            var0 = _closure1_slot13;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = function() { // Environment: var0
                var1 = _closure1_slot24;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var0 = false;
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'initGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = arg0;
            _closure1_slot17 = var1;
            var1 = _closure1_slot30;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'channels';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot19;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'order';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot18;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'sortingType';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot21;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'channelList';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot22;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getLocalChannel';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot23;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var7);
    var1 = 'GuildSettingsModalChannelsStore';
    var8.displayName = var1;
    var1 = 13;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function() { // Original name: handleTerminate, environment: var3
        var0 = null;
        _closure1_slot17 = var0;
        _closure1_slot18 = var0;
        _closure1_slot19 = var0;
        _closure1_slot21 = var0;
        _closure1_slot22 = var0;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE = var6;
    var6 = function(arg0) { // Original name: handleStartReorder, environment: var3
        _fun114582: for (var _fun114582_ip = 0;;) switch (_fun114582_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.sortingType;
                var2 = _closure1_slot19;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun114582_ip = 69;
                    continue _fun114582
                }
            case 22:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var5 = var2;
                var4 = var3;
                var1 = new var5[var1](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                _closure1_slot21 = var1;
                var1 = _closure1_slot31;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 69:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER = var6;
    var6 = function() { // Original name: handleStopReorder, environment: var3
        var1 = null;
        _closure1_slot21 = var1;
        var1 = _closure1_slot31;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER = var6;
    var6 = function(arg0) { // Original name: handleLocalSortChange, environment: var3
        var0 = arg0;
        var2 = var0.updates;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun114585: for (var _fun114585_ip = 0;;) switch (_fun114585_ip) {
                case 0:
                    var0 = arg0;
                    var2 = _closure1_slot23;
                    var1 = var0.id;
                    var2 = var2[var1];
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun114585_ip = 89;
                        continue _fun114585
                    }
                case 25:
                    var1 = var0.lock_permissions;
                    var1 = var0.id;
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot2;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var0, var2);
                    var2 = _closure1_slot23;
                    var1 = var0.id;
                    var3 = _closure1_slot23;
                    var0 = var0.id;
                    var3 = var3[var0];
                    var0 = var3.merge;
                    var0 = var0.bind(var3)(var4);
                    var2[var1] = var0;
                case 89:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var1 = _closure1_slot29;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var13 = var6;
    var11 = var1;
    var1 = new var13[var8](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot25 = var1;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/GuildSettingsModalChannelsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 29, 1376, 1662, 3050, 660, 4540, 22, 566, 806, 2]);