// modules/app_database/modules/Channels.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun93612: for (var _fun93612_ip = 0;;) switch (_fun93612_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93612_ip = 46;
                    continue _fun93612
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93612_ip = 55;
                    continue _fun93612
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93612_ip = 345;
                    continue _fun93612
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93612_ip = 323;
                    continue _fun93612
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93612_ip = 283;
                    continue _fun93612
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93612_ip = 270;
                    continue _fun93612
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
                    _fun93612_ip = 163;
                    continue _fun93612
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93612_ip = 179;
                    continue _fun93612
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93612_ip = 249;
                    continue _fun93612
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93612_ip = 249;
                    continue _fun93612
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93612_ip = 234;
                    continue _fun93612
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93612_ip = 247;
                    continue _fun93612
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93612_ip = 265;
                continue _fun93612;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93612_ip = 283;
                continue _fun93612;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93612_ip = 323;
                    continue _fun93612
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
                    _fun93612_ip = 330;
                    continue _fun93612
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93613: for (var _fun93613_ip = 0;;) switch (_fun93613_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93613_ip = 56;
                                continue _fun93613
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
                            _fun93613_ip = 67;
                            continue _fun93613;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun93614: for (var _fun93614_ip = 0;;) switch (_fun93614_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93614_ip = 23;
                    continue _fun93614
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93614_ip = 33;
                    continue _fun93614
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
                    _fun93614_ip = 70;
                    continue _fun93614
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93614_ip = 55;
                    continue _fun93614
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createChannelRecordFromServer;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2.privateChannels = var1;
            var1 = {};
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleBackgroundSync;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.BACKGROUND_SYNC = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.putOne;
                var0 = arg0;
                var1 = var0.channel;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_CREATE = var4;
            var4 = function arg0, arg1() {
                var0 = arg0;
                var4 = _closure3_slot0;
                var3 = var4.deleteOne;
                var1 = var0.channel;
                var2 = var1.guild_id;
                var0 = var0.channel;
                var1 = var0.id;
                var0 = arg1;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
            };
            var1.CHANNEL_DELETE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleChannelRecipientAdd;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_RECIPIENT_ADD = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleChannelRecipientRemove;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_RECIPIENT_REMOVE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.putMany;
                var0 = arg0;
                var1 = var0.channels;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_UPDATES = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleConnectionOpenSupplemental;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CONNECTION_OPEN_SUPPLEMENTAL = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleConnectionOpen;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CONNECTION_OPEN = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildCreate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_CREATE = var4;
            var3 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_DELETE = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'handleBackgroundSync';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun93627: for (var _fun93627_ip = 0;;) switch (_fun93627_ip) {
                case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = this;
                    var _closure3_slot1 = var1;
                    var4 = function arg0() {
                        _fun93628: for (var _fun93628_ip = 0;;) switch (_fun93628_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var6 = function arg0() {
                                    var3 = _closure1_slot4;
                                    var0 = _closure4_slot0;
                                    var2 = var0.id;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var0, var2);
                                    return var0;
                                };
                                var2 = var1.data_mode;
                                var0 = 'unavailable';
                                if (!(var0 !== var2)) {
                                    _fun93628_ip = 214;
                                    continue _fun93628
                                }
                            case 33:
                                var0 = 'partial';
                                if (!(var0 !== var2)) {
                                    _fun93628_ip = 104;
                                    continue _fun93628
                                }
                            case 41:
                                var5 = {};
                                var0 = 'full_sync';
                                var5.op = var0;
                                var2 = var1.channels;
                                var0 = var2.map;
                                var0 = var0.bind(var2)(var6);
                                var5.items = var0;
                                var4 = _closure3_slot1;
                                var3 = var4.handleGuildSynchronize;
                                var2 = var1.id;
                                var0 = _closure3_slot0;
                                var0 = var3.bind(var4)(var2, var5, var0);
                                _fun93628_ip = 214;
                                continue _fun93628;
                            case 104:
                                var4 = {};
                                var0 = 'update';
                                var4.op = var0;
                                var0 = var1.partial_updates;
                                var5 = var0.channels;
                                var2 = null;
                                var3 = var2 == var5;
                                var0 = undefined;
                                if (var3) {
                                    _fun93628_ip = 147;
                                    continue _fun93628
                                }
                            case 137:
                                var3 = var5.map;
                                var0 = var3.bind(var5)(var6);
                            case 147:
                                if (!(var2 == var0)) {
                                    _fun93628_ip = 155;
                                    continue _fun93628
                                }
                            case 151:
                                var0 = new Array(0);
                            case 155:
                                var4.writes = var0;
                                var0 = var1.partial_updates;
                                var0 = var0.deleted_channel_ids;
                                if (!(var2 == var0)) {
                                    _fun93628_ip = 180;
                                    continue _fun93628
                                }
                            case 176:
                                var0 = new Array(0);
                            case 180:
                                var4.deletes = var0;
                                var3 = _closure3_slot1;
                                var2 = var3.handleGuildSynchronize;
                                var1 = var1.id;
                                var0 = _closure3_slot0;
                                var0 = var2.bind(var3)(var1, var4, var0);
                            case 214:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = _closure1_slot7;
                    var0 = arg0;
                    var1 = var0.guilds;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93627_ip = 83;
                        continue _fun93627
                    }
                case 58:
                    var1 = var2.value;
                    var1 = var4.bind(var0)(var1);
                    var5 = var3.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun93627_ip = 58;
                        continue _fun93627
                    }
                case 83:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(14);
        var1[0] = var0;
        var0 = {};
        var5 = 'handleConnectionOpen';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93630: for (var _fun93630_ip = 0;;) switch (_fun93630_ip) {
                case 0:
                    var1 = arg0;
                    var6 = arg1;
                    var2 = this;
                    var4 = _closure1_slot7;
                    var3 = var1.guilds;
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.bind(var0)();
                    var3 = var4.done;
                    if (var3) {
                        _fun93630_ip = 85;
                        continue _fun93630
                    }
                case 41:
                    var3 = var4.value;
                    var8 = var2.handleGuildSynchronize;
                    var7 = var3.id;
                    var3 = var3.channels;
                    var3 = var8.bind(var2)(var7, var3, var6);
                    var7 = var5.bind(var0)();
                    var3 = var7.done;
                    var4 = var7;
                    if (!var3) {
                        _fun93630_ip = 41;
                        continue _fun93630
                    }
                case 85:
                    var1 = var1.initialPrivateChannels;
                    var2.privateChannels = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'handleConnectionOpenSupplemental';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var1 = this;
            var4 = var1.replace;
            var6 = var1.privateChannels;
            var3 = new Array(0);
            var5 = 0;
            var7 = var3;
            var5 = arraySpread(var7, var6, var5);
            var0 = arg0;
            var6 = var0.lazyPrivateChannels;
            var7 = var3;
            var0 = arraySpread(var7, var6, var5);
            var2 = null;
            var0 = arg1;
            var0 = var4.bind(var1)(var2, var3, var0);
            var0 = new Array(0);
            var1.privateChannels = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'handleChannelRecipientAdd';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93632: for (var _fun93632_ip = 0;;) switch (_fun93632_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var5 = _closure1_slot6;
                    var4 = var5.getChannel;
                    var2 = var0.channelId;
                    var6 = var4.bind(var5)(var2);
                    var2 = _closure1_slot5;
                    var1 = var2.getId;
                    var5 = var1.bind(var2)();
                    var1 = null;
                    var1 = var1 != var6;
                    if (!var1) {
                        _fun93632_ip = 61;
                        continue _fun93632
                    }
                case 51:
                    var2 = var6.isPrivate;
                    var1 = var2.bind(var6)();
                case 61:
                    if (!var1) {
                        _fun93632_ip = 108;
                        continue _fun93632
                    }
                case 64:
                    var2 = var3.putOne;
                    var4 = var6.addRecipient;
                    var1 = var0.user;
                    var1 = var1.id;
                    var0 = var0.nick;
                    var1 = var4.bind(var6)(var1, var0, var5);
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 108:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'handleChannelRecipientRemove';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93633: for (var _fun93633_ip = 0;;) switch (_fun93633_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var4 = _closure1_slot6;
                    var2 = var4.getChannel;
                    var1 = var0.channelId;
                    var4 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun93633_ip = 47;
                        continue _fun93633
                    }
                case 37:
                    var2 = var4.isPrivate;
                    var1 = var2.bind(var4)();
                case 47:
                    if (!var1) {
                        _fun93633_ip = 86;
                        continue _fun93633
                    }
                case 50:
                    var2 = var3.putOne;
                    var1 = var4.removeRecipient;
                    var0 = var0.user;
                    var0 = var0.id;
                    var1 = var1.bind(var4)(var0);
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 86:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'handleGuildCreate';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = arg0;
            var4 = this;
            var3 = var4.handleGuildSynchronize;
            var1 = var0.guild;
            var2 = var1.id;
            var0 = var0.guild;
            var1 = var0.channels;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'handleGuildDelete';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = this;
            var2 = var3.deleteMany;
            var0 = arg0;
            var0 = var0.guild;
            var1 = var0.id;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'resetInMemoryState';
        var0.key = var5;
        var5 = function() {
            var1 = new Array(0);
            var0 = this;
            var0.privateChannels = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'handleGuildSynchronize';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun93637: for (var _fun93637_ip = 0;;) switch (_fun93637_ip) {
                case 0:
                    var5 = arg0;
                    var0 = arg1;
                    var6 = arg2;
                    var3 = this;
                    var2 = var0.op;
                    var1 = 'update';
                    if (!(var1 !== var2)) {
                        _fun93637_ip = 57;
                        continue _fun93637
                    }
                case 25:
                    var1 = 'full_sync';
                    if (!(var1 === var2)) {
                        _fun93637_ip = 169;
                        continue _fun93637
                    }
                case 38:
                    var2 = var3.replace;
                    var1 = var0.items;
                    var1 = var2.bind(var3)(var5, var1, var6);
                    _fun93637_ip = 169;
                    continue _fun93637;
                case 57:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 5;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.channelsTransaction;
                    var3 = var2.bind(var3)(var6);
                    var6 = var3.putAll;
                    var2 = var0.writes;
                    var2 = var6.bind(var3)(var5, var2);
                    var1 = _closure1_slot7;
                    var0 = var0.deletes;
                    var2 = var1.bind(var4)(var0);
                    var1 = var2.bind(var4)();
                    var0 = var1.done;
                    if (var0) {
                        _fun93637_ip = 169;
                        continue _fun93637
                    }
                case 138:
                    var6 = var1.value;
                    var0 = var3.delete;
                    var0 = var0.bind(var3)(var5, var6);
                    var6 = var2.bind(var4)();
                    var0 = var6.done;
                    var1 = var6;
                    if (!var0) {
                        _fun93637_ip = 138;
                        continue _fun93637
                    }
                case 169:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'putOne';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var4 = arg0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.channelsTransaction;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.put;
            var1 = var4.guild_id;
            var1 = var2.bind(var3)(var1, var4);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'putMany';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93639: for (var _fun93639_ip = 0;;) switch (_fun93639_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 5;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.channelsTransaction;
                    var2 = arg1;
                    var4 = var3.bind(var4)(var2);
                    var2 = _closure1_slot7;
                    var1 = arg0;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93639_ip = 100;
                        continue _fun93639
                    }
                case 63:
                    var6 = var2.value;
                    var5 = var4.put;
                    var1 = var6.guild_id;
                    var1 = var5.bind(var4)(var1, var6);
                    var5 = var3.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun93639_ip = 63;
                        continue _fun93639
                    }
                case 100:
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'replace';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.channelsTransaction;
            var1 = arg2;
            var4 = var2.bind(var3)(var1);
            var3 = var4.replaceAll;
            var2 = arg0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'deleteOne';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.channelsTransaction;
            var1 = arg2;
            var4 = var2.bind(var3)(var1);
            var3 = var4.delete;
            var2 = arg0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'deleteMany';
        var0.key = var5;
        var4 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.channelsTransaction;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.delete;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var4;
        var1[13] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/Channels.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1376, 1216, 1372, 1648, 2]);