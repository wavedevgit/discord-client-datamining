// modules/gateway/GatewaySocketAnalytics.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun94621: for (var _fun94621_ip = 0;;) switch (_fun94621_ip) {
            case 0:
                var14 = arg0;
                var13 = arg1;
                var0 = null;
                if (!(var0 != var14)) {
                    _fun94621_ip = 167;
                    continue _fun94621
                }
            case 15:
                var0 = var14.length;
                var12 = 0;
                var1 = var12 < var0;
                var2 = '';
                var11 = 1;
                var10 = 1000;
                var9 = global;
                var8 = '\n';
                var7 = ': ';
                var5 = '|  ';
                var4 = undefined;
                var3 = 2;
                var0 = var2;
                if (!var1) {
                    _fun94621_ip = 165;
                    continue _fun94621
                }
            case 71:
                var20 = var14[var12];
                var1 = var12 + var11;
                var15 = var14[var1];
                var15 = var15.micros;
                var18 = var15 / var10;
                var15 = var9.HermesInternal;
                var15 = var15.concat;
                var22 = var8;
                var21 = var13;
                var19 = var7;
                var15 = var22[var15](var21, var20, var19, var18, var17);
                var15 = var2 + var15;
                var17 = _closure1_slot9;
                var1 = var14[var1];
                var16 = var1.calls;
                var1 = var13 + var5;
                var1 = var17.bind(var4)(var16, var1);
                var2 = var15 + var1;
                var12 = var12 + var3;
                var1 = var14.length;
                var0 = var2;
                if (var12 < var1) {
                    _fun94621_ip = 71;
                    continue _fun94621
                }
            case 165:
                return var0;
            case 167:
                var0 = '';
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun94622: for (var _fun94622_ip = 0;;) switch (_fun94622_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun94622_ip = 101;
                    continue _fun94622
                }
            case 12:
                var0 = var7.length;
                var5 = 0;
                if (!(var0 > var5)) {
                    _fun94622_ip = 101;
                    continue _fun94622
                }
            case 23:
                var0 = var7.length;
                var0 = var5 < var0;
                var4 = 1;
                var3 = undefined;
                var1 = 2;
                var5 = 0;
                if (!var0) {
                    _fun94622_ip = 101;
                    continue _fun94622
                }
            case 48:
                var9 = var7[var5];
                var0 = var5 + var4;
                var0 = var7[var0];
                var8 = var0.micros;
                var8 = var6.bind(var3)(var9, var8);
                var8 = _closure1_slot10;
                var0 = var0.calls;
                var0 = var8.bind(var3)(var0, var6);
                var5 = var5 + var1;
                var0 = var7.length;
                if (var5 < var0) {
                    _fun94622_ip = 48;
                    continue _fun94622
                }
            case 101:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.guilds;
        var0 = 0;
        var _closure2_slot0 = var0;
        var _closure2_slot1 = var0;
        var3 = var2.forEach;
        var0 = function(arg0) { // Environment: var1
            _fun94624: for (var _fun94624_ip = 0;;) switch (_fun94624_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.unavailable;
                    if (var1) {
                        _fun94624_ip = 86;
                        continue _fun94624
                    }
                case 12:
                    var2 = var0.data_mode;
                    var1 = 'partial';
                    if (!(var1 !== var2)) {
                        _fun94624_ip = 34;
                        continue _fun94624
                    }
                case 26:
                    var2 = var0.channels;
                    _fun94624_ip = 46;
                    continue _fun94624;
                case 34:
                    var0 = var0.partial_updates;
                    var2 = var0.channels;
                case 46:
                    var3 = null;
                    var0 = var3 != var2;
                    if (!var0) {
                        _fun94624_ip = 64;
                        continue _fun94624
                    }
                case 55:
                    var1 = var2.forEach;
                    var0 = var3 != var1;
                case 64:
                    if (!var0) {
                        _fun94624_ip = 86;
                        continue _fun94624
                    }
                case 67:
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun94625: for (var _fun94625_ip = 0;;) switch (_fun94625_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var0 = var0 + 1;
                                _closure2_slot1 = var0;
                                var0 = arg0;
                                var2 = var0.type;
                                var0 = _closure1_slot8;
                                var0 = var0.GUILD_CATEGORY;
                                if (!(var2 === var0)) {
                                    _fun94625_ip = 50;
                                    continue _fun94625
                                }
                            case 39:
                                var0 = _closure2_slot0;
                                var0 = var0 + 1;
                                _closure2_slot0 = var0;
                            case 50:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 86:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var3.bind(var2)(var0);
        var0 = {};
        var2 = var2.length;
        var0.num_guilds = var2;
        var2 = _closure2_slot1;
        var0.num_guild_channels = var2;
        var1 = _closure2_slot0;
        var0.num_guild_category_channels = var1;
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = ['guilds', 'merged_presences', 'merged_members', 'read_state', 'private_channels', 'user_guild_settings', 'user_settings', 'user_settings_proto', 'experiments', 'guild_experiments', 'relationships', 'users'];
    var _closure1_slot2 = var0;
    var0 = ['features'];
    var _closure1_slot3 = var0;
    var0 = ['threads', 'guild_scheduled_events'];
    var _closure1_slot4 = var0;
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
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot7 = var6;
    var3 = var3.ChannelTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/GatewaySocketAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        return var0;
    };
    var2.reportDevtoolsEvent = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        _fun94627: for (var _fun94627_ip = 0;;) switch (_fun94627_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var6 = arg2;
                var8 = arg3;
                var1 = function arg0() {
                    _fun94628: for (var _fun94628_ip = 0;;) switch (_fun94628_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = var3._trace;
                            var4 = undefined;
                            var2 = undefined;
                            var3 = {};
                            var0 = var3;
                            var _closure3_slot0 = var3;
                        case 24: // try_start_0
                            var3 = global;
                            var7 = var3.JSON;
                            var6 = var7.parse;
                            var8 = var6.bind(var7)(var5);
                            var2 = var8;
                            var7 = 0;
                            var9 = var8[var7];
                            var8 = null;
                            var8 = var8 != var9;
                            var6 = var8;
                            if (!var8) {
                                _fun94628_ip = 79;
                                continue _fun94628
                            }
                        case 64:
                            var8 = var2;
                            var9 = var8[var7];
                            var8 = '';
                            var6 = var8 !== var9;
                        case 79:
                            var5 = var6;
                            if (!var6) {
                                _fun94628_ip = 109;
                                continue _fun94628
                            }
                        case 85:
                            var6 = var2;
                            var8 = var6[var7];
                            var7 = var8.startsWith;
                            var6 = 'gateway-';
                            var5 = var7.bind(var8)(var6);
                        case 109:
                            if (!var5) {
                                _fun94628_ip = 164;
                                continue _fun94628
                            }
                        case 112:
                            var5 = var0;
                            var7 = var3.Math;
                            var6 = var7.floor;
                            var8 = var2;
                            var3 = 1;
                            var3 = var8[var3];
                            var8 = var3.micros;
                            var3 = 1000;
                            var3 = var8 / var3;
                            var3 = var6.bind(var7)(var3);
                            var5.identify_total_server_duration_ms = var3;
                        case 164:
                            var3 = _closure1_slot10;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun94629: for (var _fun94629_ip = 0;;) switch (_fun94629_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = arg1;
                                        var0 = 'start_session';
                                        if (!(var0 !== var1)) {
                                            _fun94629_ip = 70;
                                            continue _fun94629
                                        }
                                    case 16:
                                        var0 = 'guilds_connect';
                                        if (!(var0 === var1)) {
                                            _fun94629_ip = 112;
                                            continue _fun94629
                                        }
                                    case 26:
                                        var1 = _closure3_slot0;
                                        var0 = global;
                                        var3 = var0.Math;
                                        var2 = var3.floor;
                                        var0 = 1000;
                                        var0 = var4 / var0;
                                        var0 = var2.bind(var3)(var0);
                                        var1.identify_guilds_duration_ms = var0;
                                        _fun94629_ip = 112;
                                        continue _fun94629;
                                    case 70:
                                        var1 = _closure3_slot0;
                                        var0 = global;
                                        var3 = var0.Math;
                                        var2 = var3.floor;
                                        var0 = 1000;
                                        var0 = var4 / var0;
                                        var0 = var2.bind(var3)(var0);
                                        var1.identify_api_duration_ms = var0;
                                    case 112:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                        case 184: // try_end0
                            _fun94628_ip = 188;
                            continue _fun94628;
                        case 186: // catch_target0
                            CatchBlockStart(arg_register = 1);
                        case 188:
                            return var0;
                    }
                };
                var0 = undefined;
                var4 = var1.bind(var0)(var7);
                var3 = null;
                if (!(var3 != var8)) {
                    _fun94627_ip = 109;
                    continue _fun94627
                }
            case 34:
                var5 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 3;
                var1 = var9[var1];
                var10 = var5.bind(var0)(var1);
                var9 = var10.addDetail;
                var1 = global;
                var11 = var1.Math;
                var5 = var11.round;
                var12 = var8.uncompressed_byte_size;
                var1 = 1024;
                var1 = var12 / var1;
                var5 = var5.bind(var11)(var1);
                var1 = 'payload_size(kb)';
                var1 = var9.bind(var10)(var1, var5);
            case 109:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 3;
                var5 = var10[var5];
                var11 = var9.bind(var0)(var5);
                var10 = var11.addDetail;
                var5 = var4.identify_total_server_duration_ms;
                var12 = var3 != var5;
                var9 = 0;
                if (!var12) {
                    _fun94627_ip = 156;
                    continue _fun94627
                }
            case 153:
                var9 = var5;
            case 156:
                var5 = 'server_time(ms)';
                var5 = var10.bind(var11)(var5, var9);
                var5 = {};
                var15 = var5;
                var14 = var8;
                var8 = copyDataProperties(var15, var14);
                var15 = var5;
                var14 = var4;
                var4 = copyDataProperties(var15, var14);
                var4 = _closure1_slot11;
                var14 = var4.bind(var0)(var7);
                var15 = var5;
                var4 = copyDataProperties(var15, var14);
                var14 = arg4;
                var15 = var5;
                var4 = copyDataProperties(var15, var14);
                var4 = var2.identifyStartTime;
                var7 = var6 - var4;
                var4 = 'duration_ms_since_identify_start';
                var5[var4] = var7;
                var4 = var2.connectionStartTime;
                var7 = var6 - var4;
                var4 = 'duration_ms_since_connection_start';
                var5[var4] = var7;
                var4 = global;
                var7 = var4.Date;
                var4 = var7.now;
                var4 = var4.bind(var7)();
                var6 = var4 - var6;
                var4 = 'duration_ms_since_emit_start';
                var5[var4] = var6;
                var6 = var2.hasConnectedOnce;
                var4 = 'is_reconnect';
                var5[var4] = var6;
                var6 = var2.isFastConnect;
                var4 = 'is_fast_connect';
                var5[var4] = var6;
                var6 = var2.didForceClearGuildHashes;
                var4 = 'did_force_clear_guild_hashes';
                var5[var4] = var6;
                var6 = var2.identifyUncompressedByteSize;
                var4 = 'identify_uncompressed_byte_size';
                var5[var4] = var6;
                var6 = var2.identifyCompressedByteSize;
                var4 = 'identify_compressed_byte_size';
                var5[var4] = var6;
                var4 = var2.analytics;
                var4 = var4.hadCacheAtStartup;
                var6 = var3 != var4;
                if (!var6) {
                    _fun94627_ip = 387;
                    continue _fun94627
                }
            case 384:
                var6 = var4;
            case 387:
                var4 = 'had_cache_at_startup';
                var5[var4] = var6;
                var2 = var2.analytics;
                var2 = var2.usedCacheAtStartup;
                var3 = var3 != var2;
                if (!var3) {
                    _fun94627_ip = 418;
                    continue _fun94627
                }
            case 415:
                var3 = var2;
            case 418:
                var2 = 'used_cache_at_startup';
                var5[var2] = var3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var6 = var3.bind(var0)(var2);
                var2 = var6.attachReadyPayloadProperties;
                var2 = var2.bind(var6)(var5);
                var2 = 5;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot7;
                var2 = var1.READY_PAYLOAD_RECEIVED;
                var1 = {};
                var6 = true;
                var1.logEventProperties = var6;
                var1 = var3.bind(var4)(var2, var5, var1);
                return var0;
        }
    };
    var2.logReadyPayloadReceived = var3;
    var3 = function arg0() {
        _fun94630: for (var _fun94630_ip = 0;;) switch (_fun94630_ip) {
            case 0:
                var1 = arg0;
                var7 = undefined;
                var2 = undefined;
                var0 = undefined;
            case 9: // try_start_0
                var3 = var1;
                var4 = var3._trace;
                var2 = var4;
                var3 = null;
                var4 = var3 == var4;
                var8 = undefined;
                if (var4) {
                    _fun94630_ip = 41;
                    continue _fun94630
                }
            case 32:
                var4 = var2;
                var2 = 0;
                var8 = var4[var2];
            case 41:
                var4 = var3 == var8;
                var2 = null;
                if (var4) {
                    _fun94630_ip = 86;
                    continue _fun94630
                }
            case 50:
                var6 = _closure1_slot9;
                var4 = global;
                var5 = var4.JSON;
                var4 = var5.parse;
                var5 = var4.bind(var5)(var8);
                var4 = '';
                var2 = var6.bind(var7)(var5, var4);
            case 86:
                var0 = var2;
                if (!(var3 == var2)) {
                    _fun94630_ip = 95;
                    continue _fun94630
                }
            case 93: // try_end0
                _fun94630_ip = 99;
                continue _fun94630;
            case 95:
                return var0;
            case 97: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 99:
                var0 = var1;
                var2 = var0._trace;
                var0 = null;
                var2 = var0 != var2;
                var0 = '???';
                if (!var2) {
                    _fun94630_ip = 145;
                    continue _fun94630
                }
            case 123:
                var3 = var1._trace;
                var2 = var3.join;
                var1 = ' -> ';
                var0 = var2.bind(var3)(var1);
            case 145:
                return var0;
        }
    };
    var2.getConnectionPath = var3;
    var3 = function arg0() {
        _fun94631: for (var _fun94631_ip = 0;;) switch (_fun94631_ip) {
            case 0:
                var6 = arg0;
                var1 = global;
                var3 = var1.Math;
                var2 = var3.random;
                var3 = var2.bind(var3)();
                var2 = 0.01;
                if (!(!(var3 > var2))) {
                    _fun94631_ip = 908;
                    continue _fun94631
                }
            case 40:
                var3 = var1.Date;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var13 = var6.guilds;
                var14 = var6.merged_presences;
                var15 = var6.merged_members;
                var24 = var6.read_state;
                var23 = var6.private_channels;
                var19 = var6.user_guild_settings;
                var25 = var6.user_settings;
                var22 = var6.user_settings_proto;
                var20 = var6.experiments;
                var21 = var6.guild_experiments;
                var18 = var6.relationships;
                var26 = var6.users;
                var5 = _closure1_slot5;
                var4 = _closure1_slot2;
                var3 = undefined;
                var4 = var5.bind(var3)(var6, var4);
                var16 = new Array(0);
                var _closure2_slot0 = var16;
                var11 = new Array(0);
                var _closure2_slot1 = var11;
                var10 = new Array(0);
                var _closure2_slot2 = var10;
                var9 = new Array(0);
                var _closure2_slot3 = var9;
                var8 = new Array(0);
                var _closure2_slot4 = var8;
                var6 = new Array(0);
                var _closure2_slot5 = var6;
                var7 = new Array(0);
                var _closure2_slot6 = var7;
                var5 = new Array(0);
                var _closure2_slot7 = var5;
                var12 = var13.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun94632: for (var _fun94632_ip = 0;;) switch (_fun94632_ip) {
                        case 0:
                            var8 = arg0;
                            var0 = var8.unavailable;
                            if (var0) {
                                _fun94632_ip = 316;
                                continue _fun94632
                            }
                        case 15:
                            var4 = var8.properties;
                            var0 = null;
                            if (!(var0 == var4)) {
                                _fun94632_ip = 29;
                                continue _fun94632
                            }
                        case 27:
                            var4 = {};
                        case 29:
                            var6 = var4.features;
                            var2 = _closure1_slot5;
                            var3 = _closure1_slot3;
                            var1 = undefined;
                            var3 = var2.bind(var1)(var4, var3);
                            var7 = var8.threads;
                            var5 = var8.guild_scheduled_events;
                            var0 = _closure1_slot4;
                            var2 = var2.bind(var1)(var8, var0);
                            var10 = _closure2_slot0;
                            var4 = var10.push;
                            var1 = var8.data_mode;
                            var9 = 'partial';
                            if (!(var9 !== var1)) {
                                _fun94632_ip = 110;
                                continue _fun94632
                            }
                        case 102:
                            var1 = var8.channels;
                            _fun94632_ip = 122;
                            continue _fun94632;
                        case 110:
                            var11 = var8.partial_updates;
                            var1 = var11.channels;
                        case 122:
                            var1 = var4.bind(var10)(var1);
                            var10 = _closure2_slot1;
                            var4 = var10.push;
                            var1 = var8.data_mode;
                            if (!(var9 !== var1)) {
                                _fun94632_ip = 154;
                                continue _fun94632
                            }
                        case 146:
                            var1 = var8.roles;
                            _fun94632_ip = 166;
                            continue _fun94632;
                        case 154:
                            var11 = var8.partial_updates;
                            var1 = var11.roles;
                        case 166:
                            var1 = var4.bind(var10)(var1);
                            var10 = _closure2_slot2;
                            var4 = var10.push;
                            var1 = var8.data_mode;
                            if (!(var9 !== var1)) {
                                _fun94632_ip = 198;
                                continue _fun94632
                            }
                        case 190:
                            var1 = var8.emojis;
                            _fun94632_ip = 210;
                            continue _fun94632;
                        case 198:
                            var11 = var8.partial_updates;
                            var1 = var11.emojis;
                        case 210:
                            var1 = var4.bind(var10)(var1);
                            var4 = _closure2_slot3;
                            var1 = var4.push;
                            var1 = var1.bind(var4)(var7);
                            var7 = _closure2_slot4;
                            var4 = var7.push;
                            var1 = var8.data_mode;
                            if (!(var9 !== var1)) {
                                _fun94632_ip = 256;
                                continue _fun94632
                            }
                        case 248:
                            var1 = var8.stickers;
                            _fun94632_ip = 268;
                            continue _fun94632;
                        case 256:
                            var8 = var8.partial_updates;
                            var1 = var8.stickers;
                        case 268:
                            var1 = var4.bind(var7)(var1);
                            var4 = _closure2_slot5;
                            var1 = var4.push;
                            var1 = var1.bind(var4)(var6);
                            var4 = _closure2_slot6;
                            var1 = var4.push;
                            var1 = var1.bind(var4)(var5);
                            var1 = _closure2_slot7;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2, var3);
                        case 316:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var12.bind(var13)(var0);
                var0 = {};
                var27 = var1.JSON;
                var17 = var27.stringify;
                var13 = null;
                var28 = var13 == var14;
                var12 = undefined;
                if (var28) {
                    _fun94631_ip = 258;
                    continue _fun94631
                }
            case 252:
                var12 = var14.friends;
            case 258:
                if (!(var13 == var12)) {
                    _fun94631_ip = 266;
                    continue _fun94631
                }
            case 262:
                var12 = new Array(0);
            case 266:
                var12 = var17.bind(var27)(var12);
                var12 = var12.length;
                var0.presences_size = var12;
                var17 = var1.JSON;
                var12 = var17.stringify;
                var12 = var12.bind(var17)(var26);
                var12 = var12.length;
                var0.users_size = var12;
                var17 = var1.JSON;
                var12 = var17.stringify;
                var12 = var12.bind(var17)(var24);
                var12 = var12.length;
                var0.read_states_size = var12;
                var17 = var1.JSON;
                var12 = var17.stringify;
                var12 = var12.bind(var17)(var23);
                var12 = var12.length;
                var0.private_channels_size = var12;
                var24 = var1.JSON;
                var23 = var24.stringify;
                var26 = var13 != var25;
                var12 = '';
                var17 = var12;
                if (!var26) {
                    _fun94631_ip = 391;
                    continue _fun94631
                }
            case 388:
                var17 = var25;
            case 391:
                var17 = var23.bind(var24)(var17);
                var17 = var17.length;
                var23 = var13 != var22;
                if (!var23) {
                    _fun94631_ip = 411;
                    continue _fun94631
                }
            case 408:
                var12 = var22;
            case 411:
                var12 = var12.length;
                var12 = var17 + var12;
                var0.user_settings_size = var12;
                var17 = var1.JSON;
                var12 = var17.stringify;
                if (!(var13 == var20)) {
                    _fun94631_ip = 445;
                    continue _fun94631
                }
            case 441:
                var20 = new Array(0);
            case 445:
                var12 = var12.bind(var17)(var20);
                var17 = var12.length;
                var20 = var1.JSON;
                var12 = var20.stringify;
                if (!(var13 == var21)) {
                    _fun94631_ip = 475;
                    continue _fun94631
                }
            case 471:
                var21 = new Array(0);
            case 475:
                var12 = var12.bind(var20)(var21);
                var12 = var12.length;
                var12 = var17 + var12;
                var0.experiments_size = var12;
                var17 = var1.JSON;
                var12 = var17.stringify;
                var12 = var12.bind(var17)(var19);
                var12 = var12.length;
                var0.user_guild_settings_size = var12;
                var17 = var1.JSON;
                var12 = var17.stringify;
                var12 = var12.bind(var17)(var18);
                var12 = var12.length;
                var0.relationships_size = var12;
                var17 = var1.JSON;
                var12 = var17.stringify;
                if (!(var13 == var4)) {
                    _fun94631_ip = 566;
                    continue _fun94631
                }
            case 564:
                var4 = {};
            case 566:
                var4 = var12.bind(var17)(var4);
                var4 = var4.length;
                var0.remaining_data_size = var4;
                var12 = var1.JSON;
                var4 = var12.stringify;
                var4 = var4.bind(var12)(var16);
                var4 = var4.length;
                var0.guild_channels_size = var4;
                var12 = var1.JSON;
                var4 = var12.stringify;
                if (!(var13 == var15)) {
                    _fun94631_ip = 628;
                    continue _fun94631
                }
            case 624:
                var15 = new Array(0);
            case 628:
                var4 = var4.bind(var12)(var15);
                var4 = var4.length;
                var0.guild_members_size = var4;
                var12 = var1.JSON;
                var4 = var12.stringify;
                var15 = var13 == var14;
                var3 = undefined;
                if (var15) {
                    _fun94631_ip = 670;
                    continue _fun94631
                }
            case 664:
                var3 = var14.guilds;
            case 670:
                if (!(var13 == var3)) {
                    _fun94631_ip = 678;
                    continue _fun94631
                }
            case 674:
                var3 = new Array(0);
            case 678:
                var3 = var4.bind(var12)(var3);
                var3 = var3.length;
                var0.guild_presences_size = var3;
                var4 = var1.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var11);
                var3 = var3.length;
                var0.guild_roles_size = var3;
                var4 = var1.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var10);
                var3 = var3.length;
                var0.guild_emojis_size = var3;
                var4 = var1.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var9);
                var3 = var3.length;
                var0.guild_threads_size = var3;
                var4 = var1.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var8);
                var3 = var3.length;
                var0.guild_stickers_size = var3;
                var4 = var1.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var7);
                var3 = var3.length;
                var0.guild_events_size = var3;
                var4 = var1.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var6);
                var3 = var3.length;
                var0.guild_features_size = var3;
                var4 = var1.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var5);
                var3 = var3.length;
                var0.guild_remaining_data_size = var3;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var1 = var1 - var2;
                var0.size_metrics_duration_ms = var1;
                return var0;
            case 908:
                var0 = undefined;
                return var0;
        }
    };
    var2.getReadyPayloadByteSizeAnalytics = var3;
    var3 = function arg0() {
        _fun94633: for (var _fun94633_ip = 0;;) switch (_fun94633_ip) {
            case 0:
                var2 = arg0;
                var0 = {
                    'connectTime': null,
                    'numEvents': 0,
                    'largestWaitTime': 0,
                    'dispatchTime': 0,
                    'totalWaitTime': 0,
                    'initialWaitTime': 0
                };
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if (!var3) {
                    _fun94633_ip = 31;
                    continue _fun94633
                }
            case 28:
                var1 = var2;
            case 31:
                var0.connectTime = var1;
                var1 = global;
                var3 = var1.performance;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var0.startTime = var2;
                var2 = var1.performance;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                var0.lastUpdateTime = var1;
                return var0;
        }
    };
    var2.createResumeAnalytics = var3;
    var1 = function arg0() {
        _fun94634: for (var _fun94634_ip = 0;;) switch (_fun94634_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot6;
                var2 = var3.getCurrentUser;
                var4 = var2.bind(var3)();
                var2 = null;
                var2 = var2 == var4;
                if (var2) {
                    _fun94634_ip = 41;
                    continue _fun94634
                }
            case 28:
                var3 = var4.isStaff;
                var3 = var3.bind(var4)();
                var2 = !var3;
            case 41:
                if (!var2) {
                    _fun94634_ip = 76;
                    continue _fun94634
                }
            case 44:
                var3 = global;
                var4 = var3.Math;
                var3 = var4.random;
                var4 = var3.bind(var4)();
                var3 = 0.5;
                var2 = var4 < var3;
            case 76:
                if (var2) {
                    _fun94634_ip = 334;
                    continue _fun94634
                }
            case 82:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot7;
                var2 = var1.CONNECTION_RESUMED;
                var1 = {};
                var5 = var0.connectTime;
                var1.connect_time_ms = var5;
                var5 = global;
                var8 = var5.Math;
                var7 = var8.floor;
                var9 = var5.performance;
                var6 = var9.now;
                var9 = var6.bind(var9)();
                var6 = var0.startTime;
                var6 = var9 - var6;
                var6 = var7.bind(var8)(var6);
                var1.resume_time_ms = var6;
                var6 = var0.numEvents;
                var1.num_events = var6;
                var8 = var5.Math;
                var7 = var8.floor;
                var6 = var0.largestWaitTime;
                var6 = var7.bind(var8)(var6);
                var1.largest_wait_time_ms = var6;
                var8 = var5.Math;
                var7 = var8.floor;
                var6 = var0.initialWaitTime;
                var6 = var7.bind(var8)(var6);
                var1.initial_wait_time_ms = var6;
                var8 = var5.Math;
                var7 = var8.floor;
                var6 = var0.totalWaitTime;
                var6 = var7.bind(var8)(var6);
                var1.total_wait_time_ms = var6;
                var6 = var5.Math;
                var5 = var6.floor;
                var0 = var0.dispatchTime;
                var0 = var5.bind(var6)(var0);
                var1.total_dispatch_time_ms = var0;
                var0 = {};
                var5 = true;
                var0.logEventProperties = var5;
                var0 = var3.bind(var4)(var2, var1, var0);
            case 334:
                var0 = undefined;
                return var0;
        }
    };
    var2.logResumeAnalytics = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 1613, 660, 20, 14, 795, 2]);