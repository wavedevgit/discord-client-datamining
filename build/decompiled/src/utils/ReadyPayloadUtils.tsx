// utils/ReadyPayloadUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function arg0, arg1() {
        _fun95265: for (var _fun95265_ip = 0;;) switch (_fun95265_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95265_ip = 46;
                    continue _fun95265
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun95265_ip = 55;
                    continue _fun95265
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun95265_ip = 345;
                    continue _fun95265
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95265_ip = 323;
                    continue _fun95265
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95265_ip = 283;
                    continue _fun95265
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95265_ip = 270;
                    continue _fun95265
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
                    _fun95265_ip = 163;
                    continue _fun95265
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun95265_ip = 179;
                    continue _fun95265
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95265_ip = 249;
                    continue _fun95265
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95265_ip = 249;
                    continue _fun95265
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95265_ip = 234;
                    continue _fun95265
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95265_ip = 247;
                    continue _fun95265
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun95265_ip = 265;
                continue _fun95265;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun95265_ip = 283;
                continue _fun95265;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun95265_ip = 323;
                    continue _fun95265
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
                    _fun95265_ip = 330;
                    continue _fun95265
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95266: for (var _fun95266_ip = 0;;) switch (_fun95266_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95266_ip = 56;
                                continue _fun95266
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
                            _fun95266_ip = 67;
                            continue _fun95266;
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
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun95267: for (var _fun95267_ip = 0;;) switch (_fun95267_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95267_ip = 23;
                    continue _fun95267
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95267_ip = 33;
                    continue _fun95267
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
                    _fun95267_ip = 70;
                    continue _fun95267
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95267_ip = 55;
                    continue _fun95267
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun95268: for (var _fun95268_ip = 0;;) switch (_fun95268_ip) {
            case 0:
                var5 = arg1;
                var0 = _closure1_slot11;
                var3 = null;
                var2 = var3 == var0;
                var0 = null;
                if (var2) {
                    _fun95268_ip = 88;
                    continue _fun95268
                }
            case 21:
                var2 = _closure1_slot11;
                var4 = var2.identifyTime;
                var2 = arg0;
                var0 = null;
                if (!(var4 === var2)) {
                    _fun95268_ip = 88;
                    continue _fun95268
                }
            case 40:
                if (!(var3 != var5)) {
                    _fun95268_ip = 69;
                    continue _fun95268
                }
            case 44:
                var4 = var5.some;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure1_slot11;
                    var0 = var0.guild;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                var0 = null;
                if (var2) {
                    _fun95268_ip = 88;
                    continue _fun95268
                }
            case 69:
                var1 = _closure1_slot11;
                var3 = var1.guild;
                var2 = arg2;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 88:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun95270: for (var _fun95270_ip = 0;;) switch (_fun95270_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.getGuildEmojis;
                var0 = arg0;
                var3 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 != var3;
                if (!var1) {
                    _fun95270_ip = 48;
                    continue _fun95270
                }
            case 30:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.values;
                var0 = var1.bind(var2)(var3);
            case 48:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun95271: for (var _fun95271_ip = 0;;) switch (_fun95271_ip) {
            case 0:
                var3 = arg1;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun95271_ip = 43;
                    continue _fun95271
                }
            case 26:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun95272: for (var _fun95272_ip = 0;;) switch (_fun95272_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun95272_ip = 128;
                                continue _fun95272
                            }
                        case 9:
                            var1 = var2.user_id;
                            if (!(var4 != var1)) {
                                _fun95272_ip = 106;
                                continue _fun95272
                            }
                        case 19:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var0 = 12;
                            var0 = var5[var0];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var0);
                            var0 = _closure2_slot0;
                            var3 = var0[var1];
                            var4 = var4 != var3;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var8 = var3.concat;
                            var7 = 'Missing user[';
                            var3 = '] in compressed ready payload';
                            var3 = var8.bind(var7)(var1, var3);
                            var3 = var5.bind(var6)(var4, var3);
                            var0 = var0[var1];
                            var2.user = var0;
                        case 106:
                            var0 = delete var2.user_id;
                            var1 = _closure2_slot1;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                        case 128:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 43:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var0 = _closure1_slot10;
        var0 = var0[var2];
        var1 = _closure1_slot10;
        var1 = delete var1[var2];
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun95274: for (var _fun95274_ip = 0;;) switch (_fun95274_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var2 = arg2;
                var1 = null;
                if (!(var3 == var1)) {
                    _fun95274_ip = 21;
                    continue _fun95274
                }
            case 17:
                var3 = new Array(0);
            case 21:
                if (!(var2 == var1)) {
                    _fun95274_ip = 29;
                    continue _fun95274
                }
            case 25:
                var2 = new Array(0);
            case 29:
                var4 = global;
                var4 = var4.Set;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var14 = var6;
                var13 = var2;
                var4 = new var14[var4](var13, var12);
                var9 = var4 instanceof Object ? var4 : var6;
                var _closure2_slot0 = var9;
                var4 = _closure1_slot13;
                var8 = undefined;
                var7 = var4.bind(var8)(var3);
                var6 = var7.bind(var8)();
                var4 = var6.done;
                if (var4) {
                    _fun95274_ip = 125;
                    continue _fun95274
                }
            case 90:
                var4 = var6.value;
                var10 = var4.id;
                var4 = var9.add;
                var4 = var4.bind(var9)(var10);
                var10 = var7.bind(var8)();
                var4 = var10.done;
                var6 = var10;
                if (!var4) {
                    _fun95274_ip = 90;
                    continue _fun95274
                }
            case 125:
                var4 = var1 != var5;
                var1 = null;
                if (!var4) {
                    _fun95274_ip = 188;
                    continue _fun95274
                }
            case 134:
                var4 = var5.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var0 = var4.bind(var5)(var0);
                var5 = var0.push;
                var4 = new Array(0);
                var11 = 0;
                var13 = var4;
                var12 = var3;
                var6 = arraySpread(var13, var12, var11);
                var13 = var5;
                var12 = var4;
                var11 = var0;
                var4 = apply(var13, var12, var11);
                var1 = var0;
            case 188:
                var0 = {};
                var4 = 'update';
                var0.op = var4;
                var0.writes = var3;
                var0.deletes = var2;
                var0.items = var1;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun95276: for (var _fun95276_ip = 0;;) switch (_fun95276_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot18;
                var0 = var1.id;
                var6 = undefined;
                var4 = var4.bind(var6)(var0);
                var5 = var1.data_mode;
                var0 = 'partial';
                if (!(var0 === var5)) {
                    _fun95276_ip = 612;
                    continue _fun95276
                }
            case 45:
                var5 = null;
                if (!(var5 != var4)) {
                    _fun95276_ip = 543;
                    continue _fun95276
                }
            case 54:
                var0 = {};
                var7 = var1.id;
                var0.id = var7;
                var7 = var1.data_mode;
                var0.dataMode = var7;
                var7 = {};
                var8 = 'update';
                var7.op = var8;
                var8 = var1.partial_updates;
                var11 = var8.channels;
                var9 = var5 == var11;
                var8 = undefined;
                if (var9) {
                    _fun95276_ip = 124;
                    continue _fun95276
                }
            case 107:
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var3
                    var3 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var8 = var10.bind(var11)(var9);
            case 124:
                if (!(var5 == var8)) {
                    _fun95276_ip = 132;
                    continue _fun95276
                }
            case 128:
                var8 = new Array(0);
            case 132:
                var7.writes = var8;
                var8 = var1.partial_updates;
                var8 = var8.deleted_channel_ids;
                if (!(var5 == var8)) {
                    _fun95276_ip = 157;
                    continue _fun95276
                }
            case 153:
                var8 = new Array(0);
            case 157:
                var7.deletes = var8;
                var0.channels = var7;
                var7 = var1.channel_updates;
                var0.channelTimestampUpdates = var7;
                var10 = _closure1_slot19;
                var9 = var4.emojis;
                var7 = var1.partial_updates;
                var8 = var7.emojis;
                var7 = var1.partial_updates;
                var7 = var7.deleted_emoji_ids;
                var7 = var10.bind(var6)(var9, var8, var7);
                var0.emojis = var7;
                var7 = var1.guild_scheduled_events;
                var0.guild_scheduled_events = var7;
                var7 = var1.joined_at;
                var0.joined_at = var7;
                var7 = var1.last_messages;
                var0.lastMessages = var7;
                var7 = var1.member_count;
                var0.member_count = var7;
                var7 = var1.members;
                var0.members = var7;
                var7 = var1.premium_subscription_count;
                var0.premium_subscription_count = var7;
                var8 = var1.properties;
                var9 = var5 != var8;
                var7 = null;
                if (!var9) {
                    _fun95276_ip = 308;
                    continue _fun95276
                }
            case 305:
                var7 = var8;
            case 308:
                var0.properties = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var7 = 15;
                var7 = var9[var7];
                var12 = var8.bind(var6)(var7);
                var11 = var12.filterRoleDeletes;
                var16 = var1.id;
                var15 = var4.roles;
                var7 = var1.partial_updates;
                var14 = var7.roles;
                var7 = var1.partial_updates;
                var13 = var7.deleted_role_ids;
                var17 = var12;
                var7 = var17[var11](var16, var15, var14, var13, var12);
                var0.roles = var7;
                var7 = var1.stage_instances;
                var0.stage_instances = var7;
                var9 = _closure1_slot19;
                var8 = var4.stickers;
                var4 = var1.partial_updates;
                var7 = var4.stickers;
                var4 = var1.partial_updates;
                var4 = var4.deleted_sticker_ids;
                var4 = var9.bind(var6)(var8, var7, var4);
                var0.stickers = var4;
                var4 = var1.unable_to_sync_deletes;
                var0.unableToSyncDeletes = var4;
                var9 = var1.threads;
                var7 = var5 == var9;
                var4 = undefined;
                if (var7) {
                    _fun95276_ip = 486;
                    continue _fun95276
                }
            case 469:
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var3
                    var3 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var4 = var8.bind(var9)(var7);
            case 486:
                if (!(var5 == var4)) {
                    _fun95276_ip = 494;
                    continue _fun95276
                }
            case 490:
                var4 = new Array(0);
            case 494:
                var0.threads = var4;
                var5 = _closure1_slot22;
                var4 = var1.threads;
                var4 = var5.bind(var6)(var4);
                var0.threadMessages = var4;
                var4 = var1.version;
                var0.version = var4;
                var4 = var1.has_threads_subscription;
                var0.hasThreadsSubscription = var4;
                return var0;
            case 543:
                var7 = _closure1_slot9;
                var5 = var7.log;
                var10 = var1.id;
                var0 = global;
                var4 = var0.HermesInternal;
                var9 = var4.concat;
                var8 = 'no cache entry for partial guild (guild: ';
                var4 = ', type: ready)';
                var4 = var9.bind(var8)(var10, var4);
                var4 = var5.bind(var7)(var4);
                var4 = var0.Error;
                var0 = 'Guild data was missing from store, but hash was still available.';
                var0 = var4.bind(var6)(var0);
                throw var0;
            case 612:
                var0 = {};
                var4 = var1.id;
                var0.id = var4;
                var4 = var1.data_mode;
                var0.dataMode = var4;
                var5 = {};
                var4 = 'full_sync';
                var5.op = var4;
                var7 = var1.emojis;
                var5.items = var7;
                var0.emojis = var5;
                var5 = var1.guild_scheduled_events;
                var0.guild_scheduled_events = var5;
                var5 = var1.joined_at;
                var0.joined_at = var5;
                var5 = var1.last_messages;
                var0.lastMessages = var5;
                var5 = var1.member_count;
                var0.member_count = var5;
                var5 = var1.members;
                var0.members = var5;
                var5 = var1.premium_subscription_count;
                var0.premium_subscription_count = var5;
                var5 = var1.properties;
                var0.properties = var5;
                var5 = var1.roles;
                var0.roles = var5;
                var5 = var1.stage_instances;
                var0.stage_instances = var5;
                var5 = {};
                var5.op = var4;
                var7 = var1.stickers;
                var5.items = var7;
                var0.stickers = var5;
                var10 = var1.threads;
                var7 = null;
                var8 = var7 == var10;
                var5 = undefined;
                if (var8) {
                    _fun95276_ip = 815;
                    continue _fun95276
                }
            case 798:
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var3
                    var3 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var5 = var9.bind(var10)(var8);
            case 815:
                if (!(var7 == var5)) {
                    _fun95276_ip = 823;
                    continue _fun95276
                }
            case 819:
                var5 = new Array(0);
            case 823:
                var0.threads = var5;
                var5 = _closure1_slot22;
                var2 = var1.threads;
                var2 = var5.bind(var6)(var2);
                var0.threadMessages = var2;
                var2 = {};
                var2.op = var4;
                var5 = var1.channels;
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var3
                    var3 = arg0;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var3.guild_id = var1;
                    var2 = _closure1_slot6;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var3, var1);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var2.items = var3;
                var0.channels = var2;
                var2 = var1.version;
                var0.version = var2;
                var1 = var1.has_threads_subscription;
                var0.hasThreadsSubscription = var1;
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var1 = function arg0, arg1() {
        _fun95281: for (var _fun95281_ip = 0;;) switch (_fun95281_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var3;
                var4 = null;
                if (!(var4 == var5)) {
                    _fun95281_ip = 37;
                    continue _fun95281
                }
            case 18:
                var6 = _closure1_slot18;
                var1 = var3.id;
                var0 = undefined;
                var5 = var6.bind(var0)(var1);
            case 37:
                var1 = var3.data_mode;
                var0 = 'partial';
                if (!(var0 === var1)) {
                    _fun95281_ip = 649;
                    continue _fun95281
                }
            case 54:
                if (!(var4 != var5)) {
                    _fun95281_ip = 575;
                    continue _fun95281
                }
            case 61:
                var0 = {};
                var1 = var3.id;
                var0.id = var1;
                var1 = {};
                var6 = 'update';
                var1.op = var6;
                var6 = var3.partial_updates;
                var10 = var6.channels;
                var8 = var4 == var10;
                var6 = undefined;
                var7 = undefined;
                if (var8) {
                    _fun95281_ip = 122;
                    continue _fun95281
                }
            case 105:
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var2
                    var3 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var7 = var9.bind(var10)(var8);
            case 122:
                if (!(var4 == var7)) {
                    _fun95281_ip = 130;
                    continue _fun95281
                }
            case 126:
                var7 = new Array(0);
            case 130:
                var1.writes = var7;
                var7 = var3.partial_updates;
                var7 = var7.deleted_channel_ids;
                if (!(var4 == var7)) {
                    _fun95281_ip = 155;
                    continue _fun95281
                }
            case 151:
                var7 = new Array(0);
            case 155:
                var1.deletes = var7;
                var0.channels = var1;
                var1 = var3.channel_updates;
                var0.channelTimestampUpdates = var1;
                var1 = var3.activity_instances;
                var0.activity_instances = var1;
                var10 = _closure1_slot19;
                var9 = var5.emojis;
                var7 = var3.partial_updates;
                var8 = var7.emojis;
                var7 = var3.partial_updates;
                var7 = var7.deleted_emoji_ids;
                var7 = var10.bind(var6)(var9, var8, var7);
                var0.emojis = var7;
                var7 = var3.guild_scheduled_events;
                var0.guild_scheduled_events = var7;
                var7 = var3.joined_at;
                var0.joined_at = var7;
                var7 = var3.last_messages;
                var0.lastMessages = var7;
                var7 = var3.member_count;
                var0.member_count = var7;
                var7 = var3.members;
                var0.members = var7;
                var7 = var3.premium_subscription_count;
                var0.premium_subscription_count = var7;
                var7 = var3.presences;
                var0.presences = var7;
                var7 = var3.properties;
                if (!(var4 == var7)) {
                    _fun95281_ip = 329;
                    continue _fun95281
                }
            case 323:
                var7 = var5.properties;
            case 329:
                var0.properties = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var7 = 15;
                var7 = var9[var7];
                var12 = var8.bind(var6)(var7);
                var11 = var12.filterRoleDeletes;
                var16 = var3.id;
                var15 = var5.roles;
                var7 = var3.partial_updates;
                var14 = var7.roles;
                var7 = var3.partial_updates;
                var13 = var7.deleted_role_ids;
                var17 = var12;
                var7 = var17[var11](var16, var15, var14, var13, var12);
                var0.roles = var7;
                var7 = var3.stage_instances;
                var0.stage_instances = var7;
                var9 = _closure1_slot19;
                var8 = var5.stickers;
                var5 = var3.partial_updates;
                var7 = var5.stickers;
                var5 = var3.partial_updates;
                var5 = var5.deleted_sticker_ids;
                var5 = var9.bind(var6)(var8, var7, var5);
                var0.stickers = var5;
                var5 = var3.unable_to_sync_deletes;
                var0.unableToSyncDeletes = var5;
                var9 = var3.threads;
                var7 = var4 == var9;
                var5 = undefined;
                if (var7) {
                    _fun95281_ip = 507;
                    continue _fun95281
                }
            case 490:
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var2
                    var3 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var5 = var8.bind(var9)(var7);
            case 507:
                if (!(var4 == var5)) {
                    _fun95281_ip = 515;
                    continue _fun95281
                }
            case 511:
                var5 = new Array(0);
            case 515:
                var0.threads = var5;
                var5 = _closure1_slot22;
                var1 = var3.threads;
                var1 = var5.bind(var6)(var1);
                var0.threadMessages = var1;
                var1 = var3.voice_states;
                var0.voice_states = var1;
                var1 = var3.version;
                var0.version = var1;
                var1 = var3.has_threads_subscription;
                var0.hasThreadsSubscription = var1;
                return var0;
            case 575:
                var6 = _closure1_slot9;
                var5 = var6.log;
                var9 = var3.id;
                var0 = global;
                var1 = var0.HermesInternal;
                var8 = var1.concat;
                var7 = 'no cache entry for partial guild (guild: ';
                var1 = ', type: post_ready)';
                var1 = var8.bind(var7)(var9, var1);
                var1 = var5.bind(var6)(var1);
                var5 = var0.Error;
                var1 = undefined;
                var0 = 'Guild data was missing from store, but hash was still available.';
                var0 = var5.bind(var1)(var0);
                throw var0;
            case 649:
                var0 = {};
                var1 = var3.id;
                var0.id = var1;
                var1 = var3.guild_scheduled_events;
                var0.guild_scheduled_events = var1;
                var1 = var3.joined_at;
                var0.joined_at = var1;
                var1 = var3.last_messages;
                var0.lastMessages = var1;
                var1 = var3.member_count;
                var0.member_count = var1;
                var1 = var3.members;
                var0.members = var1;
                var1 = var3.premium_subscription_count;
                var0.premium_subscription_count = var1;
                var1 = var3.properties;
                var0.properties = var1;
                var1 = var3.roles;
                var0.roles = var1;
                var1 = var3.stage_instances;
                var0.stage_instances = var1;
                var8 = var3.threads;
                var6 = var4 == var8;
                var5 = undefined;
                var1 = undefined;
                if (var6) {
                    _fun95281_ip = 793;
                    continue _fun95281
                }
            case 776:
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var2
                    var3 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var1 = var7.bind(var8)(var6);
            case 793:
                if (!(var4 == var1)) {
                    _fun95281_ip = 801;
                    continue _fun95281
                }
            case 797:
                var1 = new Array(0);
            case 801:
                var0.threads = var1;
                var4 = _closure1_slot22;
                var1 = var3.threads;
                var1 = var4.bind(var5)(var1);
                var0.threadMessages = var1;
                var1 = var3.presences;
                var0.presences = var1;
                var1 = var3.activity_instances;
                var0.activity_instances = var1;
                var1 = var3.voice_states;
                var0.voice_states = var1;
                var1 = var3.version;
                var0.version = var1;
                var1 = var3.has_threads_subscription;
                var0.hasThreadsSubscription = var1;
                var1 = {};
                var4 = 'full_sync';
                var1.op = var4;
                var5 = var3.emojis;
                var1.items = var5;
                var0.emojis = var1;
                var1 = {};
                var1.op = var4;
                var5 = var3.stickers;
                var1.items = var5;
                var0.stickers = var1;
                var1 = {};
                var1.op = var4;
                var4 = var3.channels;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    var3 = arg0;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var3.guild_id = var1;
                    var2 = _closure1_slot6;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var3, var1);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var1.items = var2;
                var0.channels = var1;
                return var0;
        }
    };
    var _closure1_slot21 = var1;
    var0 = function arg0() {
        _fun95286: for (var _fun95286_ip = 0;;) switch (_fun95286_ip) {
            case 0:
                var2 = arg0;
                var0 = new Array(0);
                var5 = null;
                if (!(var5 != var2)) {
                    _fun95286_ip = 85;
                    continue _fun95286
                }
            case 13:
                var1 = _closure1_slot13;
                var4 = undefined;
                var3 = var1.bind(var4)(var2);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun95286_ip = 85;
                    continue _fun95286
                }
            case 39:
                var1 = var2.value;
                var6 = var1.most_recent_message;
                if (!(var5 != var6)) {
                    _fun95286_ip = 70;
                    continue _fun95286
                }
            case 54:
                var6 = var0.push;
                var1 = var1.most_recent_message;
                var1 = var6.bind(var0)(var1);
            case 70:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun95286_ip = 39;
                    continue _fun95286
                }
            case 85:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.createChannelRecordFromServer;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = 'ReadyPayloadUtils';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var _closure1_slot10 = var4;
    var4 = null;
    var _closure1_slot11 = var4;
    var4 = {};
    var _closure1_slot12 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ReadyPayloadUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        _fun95287: for (var _fun95287_ip = 0;;) switch (_fun95287_ip) {
            case 0:
                var3 = arg0;
                var9 = var3.guilds;
                var0 = var3.merged_members;
                var _closure2_slot0 = var0;
                var7 = var3.merged_presences;
                var _closure2_slot1 = var7;
                var2 = {
                    'guilds': 0,
                    'merged_members': 0,
                    'merged_presences': 0
                };
                var0 = null;
                var13 = var2;
                var12 = null;
                var1 = silentSetPrototypeOf(var13, var12);
                var13 = {};
                var12 = var3;
                var11 = var2;
                var1 = copyDataProperties(var13, var12, var11);
                var6 = _closure1_slot17;
                var3 = _closure1_slot12;
                var10 = var0 == var7;
                var8 = undefined;
                var2 = undefined;
                if (var10) {
                    _fun95287_ip = 96;
                    continue _fun95287
                }
            case 90:
                var2 = var7.friends;
            case 96:
                var3 = var6.bind(var8)(var3, var2);
                var6 = var0 == var9;
                var2 = undefined;
                if (var6) {
                    _fun95287_ip = 128;
                    continue _fun95287
                }
            case 111:
                var7 = var9.map;
                var6 = function(arg0, arg1) { // Environment: var5
                    _fun95288: for (var _fun95288_ip = 0;;) switch (_fun95288_ip) {
                        case 0:
                            var1 = arg0;
                            var7 = arg1;
                            var5 = _closure1_slot17;
                            var3 = _closure1_slot12;
                            var2 = _closure2_slot1;
                            var8 = null;
                            var9 = var8 == var2;
                            var4 = undefined;
                            var2 = undefined;
                            if (var9) {
                                _fun95288_ip = 51;
                                continue _fun95288
                            }
                        case 37:
                            var9 = _closure2_slot1;
                            var9 = var9.guilds;
                            var2 = var9[var7];
                        case 51:
                            var3 = var5.bind(var4)(var3, var2);
                            var5 = _closure1_slot17;
                            var2 = _closure1_slot12;
                            var0 = _closure2_slot0;
                            var8 = var8 == var0;
                            var0 = undefined;
                            if (var8) {
                                _fun95288_ip = 86;
                                continue _fun95288
                            }
                        case 78:
                            var6 = _closure2_slot0;
                            var0 = var6[var7];
                        case 86:
                            var2 = var5.bind(var4)(var2, var0);
                            var0 = {};
                            var11 = var0;
                            var10 = var1;
                            var5 = copyDataProperties(var11, var10);
                            var1 = var1.voice_states;
                            var4 = var4 === var1;
                            var1 = 'unavailable';
                            var0[var1] = var4;
                            var1 = 'presences';
                            var0[var1] = var3;
                            var1 = 'members';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var2 = var7.bind(var9)(var6);
            case 128:
                if (!(var0 == var2)) {
                    _fun95287_ip = 136;
                    continue _fun95287
                }
            case 132:
                var2 = new Array(0);
            case 136:
                var7 = _closure1_slot15;
                var6 = arg1;
                var5 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.members;
                    var0.members = var2;
                    var2 = var1.presences;
                    var0.presences = var2;
                    var2 = var1.activity_instances;
                    var0.activity_instances = var2;
                    var1 = var1.voice_states;
                    var0.voice_states = var1;
                    var1 = false;
                    var0.unavailable = var1;
                    return var0;
                };
                var5 = var7.bind(var8)(var6, var9, var5);
                if (!(var0 != var5)) {
                    _fun95287_ip = 171;
                    continue _fun95287
                }
            case 161:
                var0 = var2.push;
                var0 = var0.bind(var2)(var5);
            case 171:
                var0 = {};
                _closure1_slot12 = var0;
                var0 = {};
                var13 = var0;
                var12 = var1;
                var1 = copyDataProperties(var13, var12);
                var1 = 'presences';
                var0[var1] = var3;
                var1 = 'guilds';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.hydrateReadySupplementalPayload = var4;
    var4 = function() {
        _fun95290: for (var _fun95290_ip = 0;;) switch (_fun95290_ip) {
            case 0:
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var2 = 6;
                var2 = var1[var2];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.database;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var4 = 7;
                var1 = var1[var4];
                var3 = var3.bind(var6)(var1);
                var1 = var3.isCacheEnabled;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun95290_ip = 87;
                    continue _fun95290
                }
            case 64:
                var1 = global;
                var5 = var1.Promise;
                var3 = var5.resolve;
                var1 = {};
                var5 = var3.bind(var5)(var1);
                _fun95290_ip = 117;
                continue _fun95290;
            case 87:
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 8;
                var1 = var7[var1];
                var3 = var3.bind(var6)(var1);
                var1 = var3.getCommittedVersions;
                var5 = var1.bind(var3)();
            case 117:
                var3 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var4];
                var3 = var3.bind(var6)(var1);
                var1 = var3.isCacheEnabled;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun95290_ip = 194;
                    continue _fun95290
                }
            case 147:
                var1 = global;
                var4 = var1.Promise;
                var3 = var4.resolve;
                var1 = var1.Set;
                var7 = var1.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var7;
                var1 = new var9[var1](var8);
                var1 = var1 instanceof Object ? var1 : var7;
                var4 = var3.bind(var4)(var1);
                _fun95290_ip = 224;
                continue _fun95290;
            case 194:
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 9;
                var1 = var7[var1];
                var3 = var3.bind(var6)(var1);
                var1 = var3.getGuildIds;
                var4 = var1.bind(var3)();
            case 224:
                var1 = null;
                if (!(var1 == var2)) {
                    _fun95290_ip = 253;
                    continue _fun95290
                }
            case 230:
                var1 = global;
                var7 = var1.Promise;
                var3 = var7.resolve;
                var1 = false;
                var3 = var3.bind(var7)(var1);
                _fun95290_ip = 284;
                continue _fun95290;
            case 253:
                var1 = _closure1_slot1;
                var7 = _closure1_slot3;
                var0 = 10;
                var0 = var7[var0];
                var1 = var1.bind(var6)(var0);
                var0 = var1.okAsync;
                var3 = var0.bind(var1)(var2);
            case 284:
                var0 = global;
                var2 = var0.Promise;
                var1 = var2.all;
                var0 = new Array(3);
                var0[0] = var5;
                var0[1] = var4;
                var0[2] = var3;
                var2 = var1.bind(var2)(var0);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun95291: for (var _fun95291_ip = 0;;) switch (_fun95291_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = var5[Symbol.iterator];
                            var5 = var0().next;
                            var1 = var5().value;
                            var2 = var0;
                            var7 = undefined;
                            var4 = var2 === var7;
                            var3 = undefined;
                            if (var4) {
                                _fun95291_ip = 27;
                                continue _fun95291
                            }
                        case 24:
                            var3 = var1;
                        case 27:
                            var2 = undefined;
                            if (var4) {
                                _fun95291_ip = 57;
                                continue _fun95291
                            }
                        case 32:
                            var6 = var5().value;
                            var1 = var0;
                            var1 = var1 === var7;
                            var2 = undefined;
                            var4 = var1;
                            if (var1) {
                                _fun95291_ip = 57;
                                continue _fun95291
                            }
                        case 51:
                            var2 = var6;
                            var4 = var1;
                        case 57:
                            var1 = undefined;
                            if (var4) {
                                _fun95291_ip = 87;
                                continue _fun95291
                            }
                        case 62:
                            var6 = var5().value;
                            var5 = var0;
                            var5 = var5 === var7;
                            var1 = undefined;
                            var4 = var5;
                            if (var5) {
                                _fun95291_ip = 87;
                                continue _fun95291
                            }
                        case 81:
                            var1 = var6;
                            var4 = var5;
                        case 87:
                            if (var4) {
                                _fun95291_ip = 93;
                                continue _fun95291
                            }
                        case 90:
                            var0.return();
                        case 93:
                            var0 = {};
                            var0.guildVersions = var3;
                            var0.guildChannels = var2;
                            var0.databaseOk = var1;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.preloadReadyPayloadData = var4;
    var4 = function arg0, arg1, arg2() {
        _fun95292: for (var _fun95292_ip = 0;;) switch (_fun95292_ip) {
            case 0:
                var5 = arg0;
                var15 = arg2;
                var6 = var5.users;
                var8 = var5.relationships;
                var2 = var5.private_channels;
                var1 = var5.merged_members;
                var _closure2_slot0 = var1;
                var10 = var5.guilds;
                var4 = {
                    'users': 0,
                    'relationships': 0,
                    'private_channels': 0,
                    'merged_members': 0,
                    'guilds': 0
                };
                var1 = null;
                var24 = var4;
                var23 = null;
                var3 = silentSetPrototypeOf(var24, var23);
                var24 = {};
                var23 = var5;
                var22 = var4;
                var3 = copyDataProperties(var24, var23, var22);
                var5 = _closure1_slot1;
                var9 = _closure1_slot3;
                var4 = 6;
                var4 = var9[var4];
                var9 = undefined;
                var5 = var5.bind(var9)(var4);
                var4 = var5.database;
                var4 = var4.bind(var5)();
                var4 = var1 != var4;
                if (!var4) {
                    _fun95292_ip = 133;
                    continue _fun95292
                }
            case 121:
                var11 = var15.databaseOk;
                var5 = false;
                var4 = var5 === var11;
            case 133:
                if (!var4) {
                    _fun95292_ip = 173;
                    continue _fun95292
                }
            case 136:
                var5 = _closure1_slot1;
                var11 = _closure1_slot3;
                var4 = 14;
                var4 = var11[var4];
                var11 = var5.bind(var9)(var4);
                var5 = var11.replaceDisableAllDatabases;
                var4 = 'ReadyPayloadUtils: database was not ok';
                var4 = var5.bind(var11)(var4);
            case 173:
                var4 = {};
                _closure1_slot10 = var4;
                var5 = _closure1_slot8;
                var4 = var5.getGuildsArray;
                var5 = var4.bind(var5)();
                var11 = _closure1_slot5;
                var4 = var11.getRawStickersByGuild;
                var14 = var4.bind(var11)();
                var4 = _closure1_slot13;
                var13 = var4.bind(var9)(var5);
                var5 = var13.bind(var9)();
                var4 = var5.done;
                var12 = 13;
                var11 = var5;
                var5 = undefined;
                if (var4) {
                    _fun95292_ip = 434;
                    continue _fun95292
                }
            case 239:
                var4 = var11.value;
                var17 = var4.id;
                var16 = var15.guildVersions;
                var16 = var17 in var16;
                if (!var16) {
                    _fun95292_ip = 283;
                    continue _fun95292
                }
            case 262:
                var19 = var15.guildChannels;
                var18 = var19.has;
                var17 = var4.id;
                var16 = var18.bind(var19)(var17);
            case 283:
                if (!var16) {
                    _fun95292_ip = 416;
                    continue _fun95292
                }
            case 289:
                var18 = _closure1_slot10;
                var17 = var4.id;
                var16 = {};
                var20 = _closure1_slot2;
                var19 = _closure1_slot3;
                var19 = var19[var12];
                var20 = var20.bind(var9)(var19);
                var19 = var20.toGuildProperties;
                var19 = var19.bind(var20)(var4);
                var16.properties = var19;
                var21 = _closure1_slot7;
                var20 = var21.getRolesSnapshot;
                var19 = var4.id;
                var19 = var20.bind(var21)(var19);
                var16.roles = var19;
                var20 = _closure1_slot16;
                var19 = var4.id;
                var19 = var20.bind(var9)(var19);
                var16.emojis = var19;
                var19 = var14.get;
                var4 = var4.id;
                var4 = var19.bind(var14)(var4);
                var20 = var1 != var4;
                var19 = null;
                if (!var20) {
                    _fun95292_ip = 404;
                    continue _fun95292
                }
            case 401:
                var19 = var4;
            case 404:
                var16.stickers = var19;
                var18[var17] = var16;
                var5 = var4;
            case 416:
                var16 = var13.bind(var9)();
                var4 = var16.done;
                var11 = var16;
                if (!var4) {
                    _fun95292_ip = 239;
                    continue _fun95292
                }
            case 434:
                var5 = _closure1_slot17;
                var11 = _closure1_slot1;
                var12 = _closure1_slot3;
                var4 = 11;
                var4 = var12[var4];
                var12 = var11.bind(var9)(var4);
                var11 = var12.keyBy;
                var4 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var4 = var11.bind(var12)(var6, var4);
                _closure1_slot12 = var4;
                var5 = var5.bind(var9)(var4, var8);
                if (!(var1 != var2)) {
                    _fun95292_ip = 508;
                    continue _fun95292
                }
            case 491:
                var8 = var2.forEach;
                var4 = function(arg0) { // Environment: var0
                    _fun95294: for (var _fun95294_ip = 0;;) switch (_fun95294_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.recipient_ids;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun95294_ip = 40;
                                continue _fun95294
                            }
                        case 15:
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var2 = 12;
                                var2 = var4[var2];
                                var5 = undefined;
                                var4 = var3.bind(var5)(var2);
                                var2 = _closure1_slot12;
                                var3 = var2[var1];
                                var2 = null;
                                var3 = var2 != var3;
                                var2 = 'Missing user in compressed ready payload';
                                var2 = var4.bind(var5)(var3, var2);
                                var0 = _closure1_slot12;
                                var0 = var0[var1];
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var0.recipients = var1;
                        case 40:
                            var0 = delete var0.recipient_ids;
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var8.bind(var2)(var4);
            case 508:
                var8 = var1 == var10;
                var4 = undefined;
                if (var8) {
                    _fun95292_ip = 534;
                    continue _fun95292
                }
            case 517:
                var11 = var10.map;
                var8 = function(arg0, arg1) { // Environment: var0
                    _fun95296: for (var _fun95296_ip = 0;;) switch (_fun95296_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.unavailable;
                            var1 = true;
                            var0 = var3;
                            if (!(var1 !== var2)) {
                                _fun95296_ip = 81;
                                continue _fun95296
                            }
                        case 18:
                            var6 = _closure1_slot17;
                            var5 = _closure1_slot12;
                            var4 = _closure2_slot0;
                            var2 = null;
                            var8 = var2 == var4;
                            var2 = undefined;
                            var4 = undefined;
                            if (var8) {
                                _fun95296_ip = 60;
                                continue _fun95296
                            }
                        case 49:
                            var8 = _closure2_slot0;
                            var7 = arg1;
                            var4 = var8[var7];
                        case 60:
                            var4 = var6.bind(var2)(var5, var4);
                            var3.members = var4;
                            var1 = _closure1_slot20;
                            var0 = var1.bind(var2)(var3);
                        case 81:
                            return var0;
                    }
                };
                var4 = var11.bind(var10)(var8);
            case 534:
                if (!(var1 == var4)) {
                    _fun95292_ip = 542;
                    continue _fun95292
                }
            case 538:
                var4 = new Array(0);
            case 542:
                var8 = _closure1_slot15;
                var7 = arg1;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot20;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var7 = var8.bind(var9)(var7, var10, var0);
                if (!(var1 != var7)) {
                    _fun95292_ip = 577;
                    continue _fun95292
                }
            case 567:
                var0 = var4.push;
                var0 = var0.bind(var4)(var7);
            case 577:
                var0 = {};
                var24 = var0;
                var23 = var3;
                var3 = copyDataProperties(var24, var23);
                var3 = 'users';
                var0[var3] = var6;
                var6 = new Array(0);
                var3 = 'presences';
                var0[var3] = var6;
                var3 = 'relationships';
                var0[var3] = var5;
                var3 = 'guilds';
                var0[var3] = var4;
                if (!(var1 == var2)) {
                    _fun95292_ip = 637;
                    continue _fun95292
                }
            case 633:
                var2 = new Array(0);
            case 637:
                var1 = 'private_channels';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.hydrateReadyPayloadPrioritized = var4;
    var3 = function arg0, arg1() {
        _fun95298: for (var _fun95298_ip = 0;;) switch (_fun95298_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot8;
                var1 = var4.getGuild;
                var0 = var3.id;
                var7 = var1.bind(var4)(var0);
                var4 = _closure1_slot21;
                var6 = null;
                var5 = var6 == var7;
                var1 = undefined;
                var0 = undefined;
                if (var5) {
                    _fun95298_ip = 176;
                    continue _fun95298
                }
            case 45:
                var5 = {};
                var9 = _closure1_slot2;
                var10 = _closure1_slot3;
                var8 = 13;
                var8 = var10[var8];
                var9 = var9.bind(var1)(var8);
                var8 = var9.toGuildProperties;
                var8 = var8.bind(var9)(var7);
                var5.properties = var8;
                var10 = _closure1_slot7;
                var9 = var10.getRolesSnapshot;
                var8 = var7.id;
                var8 = var9.bind(var10)(var8);
                var5.roles = var8;
                var9 = _closure1_slot16;
                var8 = var7.id;
                var8 = var9.bind(var1)(var8);
                var5.emojis = var8;
                var9 = _closure1_slot5;
                var8 = var9.getRawStickersByGuild;
                var9 = var8.bind(var9)();
                var8 = var9.get;
                var7 = var7.id;
                var7 = var8.bind(var9)(var7);
                var8 = var6 != var7;
                var6 = null;
                if (!var8) {
                    _fun95298_ip = 168;
                    continue _fun95298
                }
            case 165:
                var6 = var7;
            case 168:
                var5.stickers = var6;
                var0 = var5;
            case 176:
                var0 = var4.bind(var1)(var3, var0);
                var1 = {};
                var1.guild = var3;
                var3 = arg1;
                var1.identifyTime = var3;
                _closure1_slot11 = var1;
                return var0;
        }
    };
    var2.hydrateInitialGuild = var3;
    var2.hydratePreviouslyUnavailableGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4742, 5598, 1376, 1674, 1410, 3, 1646, 12228, 12232, 1666, 12233, 22, 44, 1598, 1662, 1676, 2]);