// modules/rpc/server/RPCServerManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun97951: for (var _fun97951_ip = 0;;) switch (_fun97951_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun97951_ip = 46;
                    continue _fun97951
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun97951_ip = 55;
                    continue _fun97951
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun97951_ip = 345;
                    continue _fun97951
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun97951_ip = 323;
                    continue _fun97951
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun97951_ip = 283;
                    continue _fun97951
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun97951_ip = 270;
                    continue _fun97951
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
                    _fun97951_ip = 163;
                    continue _fun97951
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun97951_ip = 179;
                    continue _fun97951
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun97951_ip = 249;
                    continue _fun97951
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun97951_ip = 249;
                    continue _fun97951
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun97951_ip = 234;
                    continue _fun97951
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun97951_ip = 247;
                    continue _fun97951
                }
            case 234:
                var8 = _closure1_slot26;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun97951_ip = 265;
                continue _fun97951;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun97951_ip = 283;
                continue _fun97951;
            case 270:
                var6 = _closure1_slot26;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun97951_ip = 323;
                    continue _fun97951
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
                    _fun97951_ip = 330;
                    continue _fun97951
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun97952: for (var _fun97952_ip = 0;;) switch (_fun97952_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun97952_ip = 56;
                                continue _fun97952
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
                            _fun97952_ip = 67;
                            continue _fun97952;
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
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        _fun97953: for (var _fun97953_ip = 0;;) switch (_fun97953_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun97953_ip = 23;
                    continue _fun97953
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun97953_ip = 33;
                    continue _fun97953
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
                    _fun97953_ip = 70;
                    continue _fun97953
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun97953_ip = 55;
                    continue _fun97953
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityActionTypes;
    var _closure1_slot17 = var6;
    var6 = var3.RelationshipTypes;
    var _closure1_slot18 = var6;
    var6 = var3.AnalyticEvents;
    var _closure1_slot19 = var6;
    var6 = var3.RPCEvents;
    var _closure1_slot20 = var6;
    var3 = var3.RPCCloseCodes;
    var _closure1_slot21 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityLayoutMode;
    var _closure1_slot22 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FrameLayoutModes;
    var _closure1_slot23 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaEngineContextTypes;
    var _closure1_slot24 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function arg0() {
            var1 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var2;
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = function(arg0) { // Environment: var3
                _fun97956: for (var _fun97956_ip = 0;;) switch (_fun97956_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var3 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var3)) {
                            _fun97956_ip = 397;
                            continue _fun97956
                        }
                    case 36:
                        var3 = var1.type;
                        var2 = 'MESSAGE_CREATE';
                        if (!(var2 === var3)) {
                            _fun97956_ip = 64;
                            continue _fun97956
                        }
                    case 49:
                        var4 = _closure3_slot0;
                        var3 = var4.handleActivityMessage;
                        var3 = var3.bind(var4)(var1);
                    case 64:
                        var3 = var1.type;
                        if (!(var2 !== var3)) {
                            _fun97956_ip = 224;
                            continue _fun97956
                        }
                    case 76:
                        var2 = 'MESSAGE_UPDATE';
                        if (!(var2 !== var3)) {
                            _fun97956_ip = 192;
                            continue _fun97956
                        }
                    case 84:
                        var2 = 'MESSAGE_DELETE';
                        if (!(var2 !== var3)) {
                            _fun97956_ip = 130;
                            continue _fun97956
                        }
                    case 92:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 18;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.assertNever;
                        var2 = var2.bind(var3)(var1);
                        return var2;
                    case 130:
                        var2 = _closure1_slot20;
                        var3 = var2.MESSAGE_DELETE;
                        var6 = var1.channelId;
                        var8 = {};
                        var2 = var1.id;
                        var8.id = var2;
                        var5 = var1.id;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var4 = var2.concat;
                        var2 = '';
                        var4 = var4.bind(var2)(var3, var5);
                        var5 = var3;
                        _fun97956_ip = 304;
                        continue _fun97956;
                    case 192:
                        var2 = _closure1_slot20;
                        var5 = var2.MESSAGE_UPDATE;
                        var2 = var1.message;
                        var6 = var2.channel_id;
                        var8 = var1.message;
                        var4 = null;
                        _fun97956_ip = 304;
                        continue _fun97956;
                    case 224:
                        var2 = var1.message;
                        var3 = var2.state;
                        var2 = 'SENDING';
                        if (!(var2 !== var3)) {
                            _fun97956_ip = 401;
                            continue _fun97956
                        }
                    case 245:
                        var2 = _closure1_slot20;
                        var7 = var2.MESSAGE_CREATE;
                        var6 = var1.channelId;
                        var8 = var1.message;
                        var1 = var1.message;
                        var10 = var1.id;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var9 = var1.concat;
                        var1 = '';
                        var4 = var9.bind(var1)(var7, var10);
                        var5 = var7;
                    case 304:
                        var1 = null;
                        if (!(var1 != var6)) {
                            _fun97956_ip = 397;
                            continue _fun97956
                        }
                    case 310:
                        var0 = _closure3_slot0;
                        var3 = var0.rpcServer;
                        var2 = var3.dispatchToSubscriptions;
                        var1 = {};
                        var1.channel_id = var6;
                        var0 = {};
                        var0.channel_id = var6;
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 19;
                        var7 = var7[var6];
                        var6 = undefined;
                        var7 = var9.bind(var6)(var7);
                        var6 = var7.transformInternalTextMessage;
                        var6 = var6.bind(var7)(var8);
                        var0.message = var6;
                        var15 = var3;
                        var14 = var5;
                        var13 = var1;
                        var12 = var0;
                        var11 = var4;
                        var0 = var15[var2](var14, var13, var12, var11, var10);
                    case 397:
                        var0 = undefined;
                        return var0;
                    case 401:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleMessage = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97957: for (var _fun97957_ip = 0;;) switch (_fun97957_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = _closure3_slot0;
                        var1 = var1.rpcServer;
                        var1 = var1.subscriptions;
                        var1 = var1.length;
                        var2 = 0;
                        if (!(var2 !== var1)) {
                            _fun97957_ip = 227;
                            continue _fun97957
                        }
                    case 36:
                        var1 = var5.speakingFlags;
                        if (!(var2 === var1)) {
                            _fun97957_ip = 61;
                            continue _fun97957
                        }
                    case 46:
                        var1 = _closure1_slot20;
                        var4 = var1.SPEAKING_STOP;
                        _fun97957_ip = 74;
                        continue _fun97957;
                    case 61:
                        var1 = _closure1_slot20;
                        var4 = var1.SPEAKING_START;
                    case 74:
                        var3 = var5.context;
                        var1 = _closure1_slot24;
                        var1 = var1.DEFAULT;
                        if (!(var3 === var1)) {
                            _fun97957_ip = 227;
                            continue _fun97957
                        }
                    case 99:
                        var3 = _closure1_slot14;
                        var1 = var3.getVoiceChannelId;
                        var7 = var1.bind(var3)();
                        var1 = null;
                        if (!(var1 != var7)) {
                            _fun97957_ip = 227;
                            continue _fun97957
                        }
                    case 119:
                        var6 = _closure1_slot7;
                        var3 = var6.getChannel;
                        var3 = var3.bind(var6)(var7);
                        if (!(var1 != var3)) {
                            _fun97957_ip = 235;
                            continue _fun97957
                        }
                    case 137:
                        var7 = _closure1_slot16;
                        var6 = var7.getVoiceState;
                        var2 = var3.getGuildId;
                        var3 = var2.bind(var3)();
                        var2 = var5.userId;
                        var6 = var6.bind(var7)(var3, var2);
                        if (!(var1 != var6)) {
                            _fun97957_ip = 231;
                            continue _fun97957
                        }
                    case 172:
                        var0 = _closure3_slot0;
                        var3 = var0.rpcServer;
                        var2 = var3.dispatchToSubscriptions;
                        var1 = {};
                        var0 = var6.channelId;
                        var1.channel_id = var0;
                        var0 = {};
                        var6 = var6.channelId;
                        var0.channel_id = var6;
                        var5 = var5.userId;
                        var0.user_id = var5;
                        var0 = var2.bind(var3)(var4, var1, var0);
                    case 227:
                        var0 = undefined;
                        return var0;
                    case 231:
                        var0 = undefined;
                        return var0;
                    case 235:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleSpeaking = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97958: for (var _fun97958_ip = 0;;) switch (_fun97958_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.guildId;
                        var5 = var1.channelId;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var3 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var3)) {
                            _fun97958_ip = 91;
                            continue _fun97958
                        }
                    case 43:
                        var1 = _closure3_slot0;
                        var4 = var1.rpcServer;
                        var3 = var4.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var2 = var1.VOICE_CHANNEL_SELECT;
                        var1 = {};
                        var1.channel_id = var5;
                        var1.guild_id = var0;
                        var0 = {};
                        var0 = var3.bind(var4)(var2, var0, var1);
                    case 91:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleVoiceChannelSelect = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97959: for (var _fun97959_ip = 0;;) switch (_fun97959_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.channelId;
                        var12 = var0.message;
                        var9 = var0.icon;
                        var5 = var0.title;
                        var0 = var0.body;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var3 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var3)) {
                            _fun97959_ip = 192;
                            continue _fun97959
                        }
                    case 61:
                        var1 = _closure3_slot0;
                        var4 = var1.rpcServer;
                        var3 = var4.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var2 = var1.NOTIFICATION_CREATE;
                        var1 = {};
                        var1.channel_id = var6;
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var11 = 19;
                        var6 = var6[var11];
                        var10 = undefined;
                        var8 = var8.bind(var10)(var6);
                        var6 = var8.transformInternalTextMessage;
                        var6 = var6.bind(var8)(var12);
                        var1.message = var6;
                        var6 = null;
                        var8 = var6 != var9;
                        if (!var8) {
                            _fun97959_ip = 170;
                            continue _fun97959
                        }
                    case 142:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var11];
                        var8 = var8.bind(var10)(var7);
                        var7 = var8.getRemoteIconURL;
                        var6 = var7.bind(var8)(var9);
                    case 170:
                        var1.icon_url = var6;
                        var1.title = var5;
                        var1.body = var0;
                        var0 = {};
                        var0 = var3.bind(var4)(var2, var0, var1);
                    case 192:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleNotificationCreate = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97960: for (var _fun97960_ip = 0;;) switch (_fun97960_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.applicationId;
                        var _closure4_slot0 = var2;
                        var5 = var1.secret;
                        var2 = var1.intent;
                        var3 = var1.embedded;
                        var4 = _closure3_slot0;
                        var4 = var4.rpcServer;
                        var4 = var4.subscriptions;
                        var6 = var4.length;
                        var4 = 0;
                        if (!(var4 !== var6)) {
                            _fun97960_ip = 153;
                            continue _fun97960
                        }
                    case 62:
                        var4 = {};
                        var4.secret = var5;
                        if (!var3) {
                            _fun97960_ip = 78;
                            continue _fun97960
                        }
                    case 72:
                        var4.intent = var2;
                    case 78:
                        var2 = _closure3_slot0;
                        var7 = var2.rpcServer;
                        var6 = var7.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var5 = var1.ACTIVITY_JOIN;
                        var3 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var3 = var6.bind(var7)(var5, var3, var4);
                        var3 = var2.rpcServer;
                        var2 = var3.dispatchToSubscriptions;
                        var1 = var1.GAME_JOIN;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0, var4);
                    case 153:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleActivityJoin = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97963: for (var _fun97963_ip = 0;;) switch (_fun97963_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.applicationId;
                        var _closure4_slot0 = var2;
                        var3 = var1.layoutMode;
                        var1 = _closure3_slot0;
                        var1 = var1.rpcServer;
                        var1 = var1.subscriptions;
                        var4 = var1.length;
                        var1 = 0;
                        if (!(var1 !== var4)) {
                            _fun97963_ip = 188;
                            continue _fun97963
                        }
                    case 53:
                        var4 = _closure1_slot22;
                        var4 = var4.FOCUSED;
                        var2 = _closure3_slot0;
                        var8 = var2.rpcServer;
                        var7 = var8.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var6 = var1.ACTIVITY_PIP_MODE_UPDATE;
                        var5 = {};
                        var4 = var3 !== var4;
                        var5.is_pip_mode = var4;
                        var4 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var4 = var7.bind(var8)(var6, var4, var5);
                        var4 = {};
                        var4.layout_mode = var3;
                        var7 = var2.rpcServer;
                        var6 = var7.dispatchToSubscriptions;
                        var5 = var1.ACTIVITY_LAYOUT_MODE_UPDATE;
                        var3 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var3 = var6.bind(var7)(var5, var3, var4);
                        var3 = var2.rpcServer;
                        var2 = var3.dispatchToSubscriptions;
                        var1 = var1.FRAME_LAYOUT_MODE_UPDATE;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0, var4);
                    case 188:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleActivityLayoutModeUpdate = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97967: for (var _fun97967_ip = 0;;) switch (_fun97967_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.applicationId;
                        var _closure4_slot0 = var2;
                        var4 = var1.layoutMode;
                        var1 = _closure3_slot0;
                        var1 = var1.rpcServer;
                        var1 = var1.subscriptions;
                        var3 = var1.length;
                        var1 = 0;
                        if (!(var1 !== var3)) {
                            _fun97967_ip = 224;
                            continue _fun97967
                        }
                    case 53:
                        var3 = _closure1_slot23;
                        var3 = var3.PIP;
                        if (!(var4 !== var3)) {
                            _fun97967_ip = 82;
                            continue _fun97967
                        }
                    case 70:
                        var3 = _closure1_slot22;
                        var3 = var3.FOCUSED;
                        _fun97967_ip = 92;
                        continue _fun97967;
                    case 82:
                        var4 = _closure1_slot22;
                        var3 = var4.PIP;
                    case 92:
                        var4 = _closure1_slot22;
                        var4 = var4.FOCUSED;
                        var2 = _closure3_slot0;
                        var8 = var2.rpcServer;
                        var7 = var8.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var6 = var1.ACTIVITY_PIP_MODE_UPDATE;
                        var5 = {};
                        var4 = var3 !== var4;
                        var5.is_pip_mode = var4;
                        var4 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var4 = var7.bind(var8)(var6, var4, var5);
                        var4 = {};
                        var4.layout_mode = var3;
                        var7 = var2.rpcServer;
                        var6 = var7.dispatchToSubscriptions;
                        var5 = var1.ACTIVITY_LAYOUT_MODE_UPDATE;
                        var3 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var3 = var6.bind(var7)(var5, var3, var4);
                        var3 = var2.rpcServer;
                        var2 = var3.dispatchToSubscriptions;
                        var1 = var1.FRAME_LAYOUT_MODE_UPDATE;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0, var4);
                    case 224:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleFrameUpdateLayoutMode = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97971: for (var _fun97971_ip = 0;;) switch (_fun97971_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.applicationId;
                        var _closure4_slot0 = var3;
                        var1 = _closure3_slot0;
                        var1 = var1.rpcServer;
                        var1 = var1.subscriptions;
                        var4 = var1.length;
                        var1 = 0;
                        if (!(var1 !== var4)) {
                            _fun97971_ip = 132;
                            continue _fun97971
                        }
                    case 44:
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun97971_ip = 132;
                            continue _fun97971
                        }
                    case 50:
                        var4 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 20;
                        var5 = var5[var3];
                        var3 = undefined;
                        var5 = var6.bind(var3)(var5);
                        var3 = var5.getThermalState;
                        var3 = var3.bind(var5)();
                        var4.thermal_state = var3;
                        var2 = _closure3_slot0;
                        var3 = var2.rpcServer;
                        var2 = var3.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var1 = var1.THERMAL_STATE_UPDATE;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0, var4);
                    case 132:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleThermalStateChange = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97973: for (var _fun97973_ip = 0;;) switch (_fun97973_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.screenOrientation;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var3 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var3)) {
                            _fun97973_ip = 84;
                            continue _fun97973
                        }
                    case 39:
                        var1 = _closure3_slot0;
                        var4 = var1.rpcServer;
                        var3 = var4.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var2 = var1.ORIENTATION_UPDATE;
                        var1 = {};
                        var1.screen_orientation = var0;
                        var0 = {};
                        var0 = var3.bind(var4)(var2, var0, var1);
                    case 84:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleScreenOrientationUpdate = var4;
            var4 = function() { // Environment: var3
                _fun97974: for (var _fun97974_ip = 0;;) switch (_fun97974_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var0 = var0.rpcServer;
                        var0 = var0.subscriptions;
                        var2 = var0.length;
                        var0 = 0;
                        if (!(var0 !== var2)) {
                            _fun97974_ip = 100;
                            continue _fun97974
                        }
                    case 30:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 21;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.activityInstanceConnectedParticipants;
                        var4 = var2.bind(var3)();
                        var1 = _closure3_slot0;
                        var3 = var1.rpcServer;
                        var2 = var3.dispatchToSubscriptions;
                        var0 = _closure1_slot20;
                        var1 = var0.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
                        var0 = {};
                        var0 = var2.bind(var3)(var1, var0, var4);
                    case 100:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleEmbeddedActivityUpdate = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97975: for (var _fun97975_ip = 0;;) switch (_fun97975_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.channelId;
                        var6 = var0.message;
                        var0 = undefined;
                        var _closure4_slot0 = var0;
                        var3 = _closure3_slot0;
                        var3 = var3.rpcServer;
                        var3 = var3.subscriptions;
                        var4 = var3.length;
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 54:
                        var3 = var6.application;
                        var8 = var6.activity;
                        var4 = null;
                        if (!(var4 != var3)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 74:
                        if (!(var4 != var8)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 81:
                        var5 = var8.party_id;
                        if (!(var4 != var5)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 94:
                        var11 = _closure1_slot15;
                        var9 = var11.getUser;
                        var12 = var6.author;
                        var13 = var4 == var12;
                        var5 = undefined;
                        if (var13) {
                            _fun97975_ip = 127;
                            continue _fun97975
                        }
                    case 122:
                        var5 = var12.id;
                    case 127:
                        var11 = var9.bind(var11)(var5);
                        if (!(var4 != var11)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 139:
                        var9 = _closure1_slot15;
                        var5 = var9.getCurrentUser;
                        var5 = var5.bind(var9)();
                        if (!(var4 != var5)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 159:
                        var12 = var11.id;
                        var9 = var5.id;
                        if (!(var12 !== var9)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 176:
                        var12 = var8.type;
                        var9 = _closure1_slot17;
                        var9 = var9.JOIN_REQUEST;
                        if (!(var12 !== var9)) {
                            _fun97975_ip = 223;
                            continue _fun97975
                        }
                    case 195:
                        var14 = _closure1_slot11;
                        var13 = var14.getApplicationActivity;
                        var12 = var11.id;
                        var9 = var3.id;
                        var9 = var13.bind(var14)(var12, var9);
                        _fun97975_ip = 249;
                        continue _fun97975;
                    case 223:
                        var13 = _closure1_slot11;
                        var12 = var13.getApplicationActivity;
                        var5 = var5.id;
                        var3 = var3.id;
                        var9 = var12.bind(var13)(var5, var3);
                    case 249:
                        if (!(var4 != var9)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 256:
                        var3 = var9.party;
                        if (!(var4 != var3)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 269:
                        var3 = var9.party;
                        var4 = var3.id;
                        var3 = var8.party_id;
                        if (!(var4 === var3)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 293:
                        var3 = var9.application_id;
                        _closure4_slot0 = var3;
                        var4 = var8.type;
                        var3 = _closure1_slot17;
                        var3 = var3.JOIN;
                        if (!(var3 !== var4)) {
                            _fun97975_ip = 440;
                            continue _fun97975
                        }
                    case 322:
                        var3 = _closure1_slot17;
                        var3 = var3.JOIN_REQUEST;
                        if (!(var3 === var4)) {
                            _fun97975_ip = 539;
                            continue _fun97975
                        }
                    case 339:
                        var3 = _closure3_slot0;
                        var13 = var3.rpcServer;
                        var12 = var13.dispatchToSubscriptions;
                        var3 = _closure1_slot20;
                        var5 = var3.ACTIVITY_JOIN_REQUEST;
                        var4 = {};
                        var14 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var3 = 22;
                        var3 = var15[var3];
                        var3 = var14.bind(var0)(var3);
                        var3 = var3.bind(var0)(var11);
                        var4.user = var3;
                        var4.activity = var9;
                        var3 = var8.type;
                        var4.type = var3;
                        var4.channel_id = var7;
                        var3 = var6.id;
                        var4.message_id = var3;
                        var3 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var3 = var12.bind(var13)(var5, var3, var4);
                        _fun97975_ip = 539;
                        continue _fun97975;
                    case 440:
                        var2 = _closure3_slot0;
                        var5 = var2.rpcServer;
                        var4 = var5.dispatchToSubscriptions;
                        var2 = _closure1_slot20;
                        var3 = var2.ACTIVITY_INVITE;
                        var2 = {};
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var10 = 22;
                        var10 = var13[var10];
                        var10 = var12.bind(var0)(var10);
                        var10 = var10.bind(var0)(var11);
                        var2.user = var10;
                        var2.activity = var9;
                        var8 = var8.type;
                        var2.type = var8;
                        var2.channel_id = var7;
                        var6 = var6.id;
                        var2.message_id = var6;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var1 = var4.bind(var5)(var3, var1, var2);
                    case 539:
                        return var0;
                }
            };
            var2.handleActivityMessage = var4;
            var4 = function(arg0) { // Environment: var3
                var1 = arg0;
                var1 = var1.accessToken;
                var _closure4_slot0 = var1;
                var1 = _closure3_slot0;
                var1 = var1.rpcServer;
                var2 = var1.sockets;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun97979: for (var _fun97979_ip = 0;;) switch (_fun97979_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3.authorization;
                            var1 = var0.accessToken;
                            var0 = _closure4_slot0;
                            if (!(var1 === var0)) {
                                _fun97979_ip = 57;
                                continue _fun97979
                            }
                        case 26:
                            var2 = var3.close;
                            var0 = _closure1_slot21;
                            var1 = var0.TOKEN_REVOKED;
                            var0 = 'Token revoked';
                            var0 = var2.bind(var3)(var1, var0);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var2.handleOAuth2TokenRevoke = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97980: for (var _fun97980_ip = 0;;) switch (_fun97980_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.guild;
                        var5 = var0.id;
                        var2 = _closure1_slot9;
                        var0 = var2.getGuild;
                        var0 = var0.bind(var2)(var5);
                        var3 = _closure3_slot0;
                        var3 = var3.rpcServer;
                        var3 = var3.subscriptions;
                        var4 = var3.length;
                        var3 = 0;
                        var3 = var3 !== var4;
                        if (!var3) {
                            _fun97980_ip = 69;
                            continue _fun97980
                        }
                    case 63:
                        var4 = null;
                        var3 = var4 != var0;
                    case 69:
                        if (!var3) {
                            _fun97980_ip = 122;
                            continue _fun97980
                        }
                    case 72:
                        var2 = _closure3_slot0;
                        var4 = var2.rpcServer;
                        var3 = var4.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var2 = var1.GUILD_CREATE;
                        var1 = {};
                        var1.id = var5;
                        var0 = var0.name;
                        var1.name = var0;
                        var0 = {};
                        var0 = var3.bind(var4)(var2, var0, var1);
                    case 122:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleGuildCreate = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97981: for (var _fun97981_ip = 0;;) switch (_fun97981_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.channel;
                        var6 = var0.id;
                        var5 = var0.name;
                        var0 = var0.type;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var3 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var3)) {
                            _fun97981_ip = 105;
                            continue _fun97981
                        }
                    case 53:
                        var1 = _closure3_slot0;
                        var4 = var1.rpcServer;
                        var3 = var4.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var2 = var1.CHANNEL_CREATE;
                        var1 = {};
                        var1.id = var6;
                        var1.name = var5;
                        var1.type = var0;
                        var0 = {};
                        var0 = var3.bind(var4)(var2, var0, var1);
                    case 105:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleChannelCreate = var4;
            var4 = function() { // Environment: var3
                var0 = _closure3_slot0;
                var0 = var0.rpcServer;
                var2 = var0.sockets;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var2 = var3.close;
                    var0 = _closure1_slot21;
                    var1 = var0.CLOSE_NORMAL;
                    var0 = 'User logout';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var2.handleLogout = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97984: for (var _fun97984_ip = 0;;) switch (_fun97984_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.relationship;
                        var6 = var0.id;
                        var7 = var0.type;
                        var0 = undefined;
                        var _closure4_slot0 = var0;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var4 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var4)) {
                            _fun97984_ip = 159;
                            continue _fun97984
                        }
                    case 57:
                        var5 = _closure1_slot15;
                        var4 = var5.getUser;
                        var6 = var4.bind(var5)(var6);
                        var4 = null;
                        if (!(var4 != var6)) {
                            _fun97984_ip = 159;
                            continue _fun97984
                        }
                    case 81:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 19;
                        var4 = var8[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.transformBaseRelationship;
                        var4 = var4.bind(var5)(var7, var6);
                        _closure4_slot0 = var4;
                        var3 = _closure3_slot0;
                        var5 = var3.rpcServer;
                        var4 = var5.dispatchToSubscriptions;
                        var2 = _closure1_slot20;
                        var3 = var2.RELATIONSHIP_UPDATE;
                        var2 = {};
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.transformApplicationRelationship;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                    case 159:
                        return var0;
                }
            };
            var2.handleRelationshipAdd = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97986: for (var _fun97986_ip = 0;;) switch (_fun97986_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.relationship;
                        var6 = var0.id;
                        var7 = var0.type;
                        var0 = undefined;
                        var _closure4_slot0 = var0;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var4 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var4)) {
                            _fun97986_ip = 159;
                            continue _fun97986
                        }
                    case 57:
                        var5 = _closure1_slot15;
                        var4 = var5.getUser;
                        var6 = var4.bind(var5)(var6);
                        var4 = null;
                        if (!(var4 != var6)) {
                            _fun97986_ip = 159;
                            continue _fun97986
                        }
                    case 81:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 19;
                        var4 = var8[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.transformBaseRelationship;
                        var4 = var4.bind(var5)(var7, var6);
                        _closure4_slot0 = var4;
                        var3 = _closure3_slot0;
                        var5 = var3.rpcServer;
                        var4 = var5.dispatchToSubscriptions;
                        var2 = _closure1_slot20;
                        var3 = var2.RELATIONSHIP_UPDATE;
                        var2 = {};
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.transformApplicationRelationship;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                    case 159:
                        return var0;
                }
            };
            var2.handleRelationshipUpdate = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97988: for (var _fun97988_ip = 0;;) switch (_fun97988_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.relationship;
                        var6 = var0.id;
                        var0 = undefined;
                        var _closure4_slot0 = var0;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var4 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var4)) {
                            _fun97988_ip = 164;
                            continue _fun97988
                        }
                    case 52:
                        var5 = _closure1_slot15;
                        var4 = var5.getUser;
                        var7 = var4.bind(var5)(var6);
                        var4 = null;
                        if (!(var4 != var7)) {
                            _fun97988_ip = 164;
                            continue _fun97988
                        }
                    case 76:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 19;
                        var4 = var6[var4];
                        var6 = var5.bind(var0)(var4);
                        var5 = var6.transformBaseRelationship;
                        var4 = _closure1_slot18;
                        var4 = var4.NONE;
                        var4 = var5.bind(var6)(var4, var7);
                        _closure4_slot0 = var4;
                        var3 = _closure3_slot0;
                        var5 = var3.rpcServer;
                        var4 = var5.dispatchToSubscriptions;
                        var2 = _closure1_slot20;
                        var3 = var2.RELATIONSHIP_UPDATE;
                        var2 = {};
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.transformApplicationRelationship;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                    case 164:
                        return var0;
                }
            };
            var2.handleRelationshipRemove = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97990: for (var _fun97990_ip = 0;;) switch (_fun97990_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.updates;
                        var0 = undefined;
                        var _closure4_slot0 = var0;
                        var1 = _closure3_slot0;
                        var1 = var1.rpcServer;
                        var1 = var1.subscriptions;
                        var2 = var1.length;
                        var1 = 0;
                        if (!(var1 !== var2)) {
                            _fun97990_ip = 160;
                            continue _fun97990
                        }
                    case 47:
                        var4 = function() {
                            _fun97991: for (var _fun97991_ip = 0;;) switch (_fun97991_ip) {
                                case 0:
                                    var5 = _closure1_slot13;
                                    var4 = var5.getRelationshipType;
                                    var3 = _closure4_slot0;
                                    var6 = var4.bind(var5)(var3);
                                    var3 = _closure1_slot18;
                                    var3 = var3.NONE;
                                    if (!(var6 !== var3)) {
                                        _fun97991_ip = 155;
                                        continue _fun97991
                                    }
                                case 41:
                                    var4 = _closure1_slot15;
                                    var3 = var4.getUser;
                                    var0 = _closure4_slot0;
                                    var5 = var3.bind(var4)(var0);
                                    var0 = null;
                                    if (!(var0 != var5)) {
                                        _fun97991_ip = 151;
                                        continue _fun97991
                                    }
                                case 66:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 19;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var4 = var4.bind(var0)(var3);
                                    var3 = var4.transformBaseRelationship;
                                    var3 = var3.bind(var4)(var6, var5);
                                    var _closure5_slot0 = var3;
                                    var3 = _closure3_slot1;
                                    var5 = var3.rpcServer;
                                    var4 = var5.dispatchToSubscriptions;
                                    var2 = _closure1_slot20;
                                    var3 = var2.RELATIONSHIP_UPDATE;
                                    var2 = {};
                                    var1 = function(arg0) { // Environment: var1
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 19;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.transformApplicationRelationship;
                                        var1 = _closure5_slot0;
                                        var0 = arg0;
                                        var0 = var0.socket;
                                        var0 = var0.application;
                                        var0 = var0.id;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var1 = var4.bind(var5)(var3, var2, var1);
                                    return var0;
                                case 151:
                                    var0 = 0;
                                    return var0;
                                case 155:
                                    var0 = 0;
                                    return var0;
                            }
                        };
                        var2 = _closure1_slot25;
                        var1 = global;
                        var6 = var1.Set;
                        var3 = var7.map;
                        var1 = function(arg0) { // Environment: var5
                            var0 = arg0;
                            var0 = var0.user;
                            var0 = var0.id;
                            return var0;
                        };
                        var8 = var3.bind(var7)(var1);
                        var3 = var6.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var6
                            }
                        });
                        var9 = var3;
                        var1 = new var9[var6](var8, var7);
                        var3 = var1 instanceof Object ? var1 : var3;
                        var1 = var3.values;
                        var1 = var1.bind(var3)();
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.bind(var0)();
                        var1 = var2.done;
                        if (var1) {
                            _fun97990_ip = 160;
                            continue _fun97990
                        }
                    case 132:
                        var1 = var2.value;
                        _closure4_slot0 = var1;
                        var1 = var4.bind(var0)();
                        var6 = var3.bind(var0)();
                        var1 = var6.done;
                        var2 = var6;
                        if (!var1) {
                            _fun97990_ip = 132;
                            continue _fun97990
                        }
                    case 160:
                        return var0;
                }
            };
            var2.handlePresenceUpdates = var4;
            var4 = function() { // Environment: var3
                _fun97994: for (var _fun97994_ip = 0;;) switch (_fun97994_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var0 = var0.rpcServer;
                        var0 = var0.subscriptions;
                        var0 = var0.length;
                        var8 = 0;
                        if (!(var8 !== var0)) {
                            _fun97994_ip = 145;
                            continue _fun97994
                        }
                    case 32:
                        var7 = function() {
                            _fun97995: for (var _fun97995_ip = 0;;) switch (_fun97995_ip) {
                                case 0:
                                    var4 = _closure4_slot1;
                                    var0 = _closure1_slot18;
                                    var0 = var0.NONE;
                                    if (!(var4 !== var0)) {
                                        _fun97995_ip = 144;
                                        continue _fun97995
                                    }
                                case 26:
                                    var5 = _closure1_slot15;
                                    var4 = var5.getUser;
                                    var0 = _closure4_slot0;
                                    var6 = var4.bind(var5)(var0);
                                    var0 = null;
                                    if (!(var0 != var6)) {
                                        _fun97995_ip = 140;
                                        continue _fun97995
                                    }
                                case 51:
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 19;
                                    var4 = var4[var0];
                                    var0 = undefined;
                                    var5 = var5.bind(var0)(var4);
                                    var4 = var5.transformBaseRelationship;
                                    var3 = _closure4_slot1;
                                    var3 = var4.bind(var5)(var3, var6);
                                    var _closure5_slot0 = var3;
                                    var3 = _closure3_slot1;
                                    var5 = var3.rpcServer;
                                    var4 = var5.dispatchToSubscriptions;
                                    var2 = _closure1_slot20;
                                    var3 = var2.RELATIONSHIP_UPDATE;
                                    var2 = {};
                                    var1 = function(arg0) { // Environment: var1
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 19;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.transformApplicationRelationship;
                                        var1 = _closure5_slot0;
                                        var0 = arg0;
                                        var0 = var0.socket;
                                        var0 = var0.application;
                                        var0 = var0.id;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var1 = var4.bind(var5)(var3, var2, var1);
                                    return var0;
                                case 140:
                                    var0 = 0;
                                    return var0;
                                case 144:
                                    var0 = 0;
                                    return var0;
                            }
                        };
                        var1 = _closure1_slot25;
                        var2 = _closure1_slot13;
                        var0 = var2.getMutableRelationships;
                        var2 = var0.bind(var2)();
                        var0 = var2.entries;
                        var0 = var0.bind(var2)();
                        var5 = undefined;
                        var4 = var1.bind(var5)(var0);
                        var1 = var4.bind(var5)();
                        var0 = var1.done;
                        var3 = 2;
                        var2 = 1;
                        if (var0) {
                            _fun97994_ip = 145;
                            continue _fun97994
                        }
                    case 95:
                        var10 = var1.value;
                        var0 = _closure1_slot3;
                        var0 = var0.bind(var5)(var10, var3);
                        var10 = var0[var8];
                        var _closure4_slot0 = var10;
                        var0 = var0[var2];
                        var _closure4_slot1 = var0;
                        var0 = var7.bind(var5)();
                        var10 = var4.bind(var5)();
                        var0 = var10.done;
                        var1 = var10;
                        if (!var0) {
                            _fun97994_ip = 95;
                            continue _fun97994
                        }
                    case 145:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handlePresencesReplace = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97997: for (var _fun97997_ip = 0;;) switch (_fun97997_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.user;
                        var6 = var0.id;
                        var0 = undefined;
                        var _closure4_slot0 = var0;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var4 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var4)) {
                            _fun97997_ip = 185;
                            continue _fun97997
                        }
                    case 54:
                        var5 = _closure1_slot13;
                        var4 = var5.getRelationshipType;
                        var7 = var4.bind(var5)(var6);
                        var4 = _closure1_slot18;
                        var4 = var4.NONE;
                        if (!(var7 !== var4)) {
                            _fun97997_ip = 185;
                            continue _fun97997
                        }
                    case 86:
                        var5 = _closure1_slot15;
                        var4 = var5.getUser;
                        var6 = var4.bind(var5)(var6);
                        var4 = null;
                        if (!(var4 != var6)) {
                            _fun97997_ip = 185;
                            continue _fun97997
                        }
                    case 107:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 19;
                        var4 = var8[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.transformBaseRelationship;
                        var4 = var4.bind(var5)(var7, var6);
                        _closure4_slot0 = var4;
                        var3 = _closure3_slot0;
                        var5 = var3.rpcServer;
                        var4 = var5.dispatchToSubscriptions;
                        var2 = _closure1_slot20;
                        var3 = var2.RELATIONSHIP_UPDATE;
                        var2 = {};
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.transformApplicationRelationship;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                    case 185:
                        return var0;
                }
            };
            var2.handleUserUpdate = var4;
            var4 = function(arg0) { // Environment: var3
                _fun97999: for (var _fun97999_ip = 0;;) switch (_fun97999_ip) {
                    case 0:
                        var1 = arg0;
                        var5 = var1.entitlement;
                        var _closure4_slot0 = var5;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var3 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var3)) {
                            _fun97999_ip = 95;
                            continue _fun97999
                        }
                    case 45:
                        var1 = _closure3_slot0;
                        var4 = var1.rpcServer;
                        var3 = var4.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var2 = var1.ENTITLEMENT_CREATE;
                        var1 = {};
                        var1.entitlement = var5;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var0.application_id;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var3.bind(var4)(var2, var0, var1);
                    case 95:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleEntitlementCreate = var4;
            var4 = function(arg0) { // Environment: var3
                _fun98001: for (var _fun98001_ip = 0;;) switch (_fun98001_ip) {
                    case 0:
                        var1 = arg0;
                        var5 = var1.entitlement;
                        var _closure4_slot0 = var5;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var3 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var3)) {
                            _fun98001_ip = 95;
                            continue _fun98001
                        }
                    case 45:
                        var1 = _closure3_slot0;
                        var4 = var1.rpcServer;
                        var3 = var4.dispatchToSubscriptions;
                        var1 = _closure1_slot20;
                        var2 = var1.ENTITLEMENT_DELETE;
                        var1 = {};
                        var1.entitlement = var5;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.socket;
                            var0 = var0.application;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var0.application_id;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var3.bind(var4)(var2, var0, var1);
                    case 95:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleEntitlementDelete = var4;
            var3 = function(arg0) { // Environment: var3
                _fun98003: for (var _fun98003_ip = 0;;) switch (_fun98003_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.enrolledQuestUserStatus;
                        var0 = undefined;
                        var _closure4_slot0 = var0;
                        var _closure4_slot1 = var0;
                        var2 = _closure3_slot0;
                        var2 = var2.rpcServer;
                        var2 = var2.subscriptions;
                        var4 = var2.length;
                        var2 = 0;
                        if (!(var2 !== var4)) {
                            _fun98003_ip = 200;
                            continue _fun98003
                        }
                    case 54:
                        var7 = var6.questId;
                        _closure4_slot0 = var7;
                        var5 = _closure1_slot6;
                        var4 = var5.getQuest;
                        var9 = var4.bind(var5)(var7);
                        var8 = null;
                        if (!(var8 != var9)) {
                            _fun98003_ip = 200;
                            continue _fun98003
                        }
                    case 88:
                        var5 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 23;
                        var4 = var10[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.getActivityApplicationId;
                        var4 = var4.bind(var5)(var9);
                        _closure4_slot1 = var4;
                        if (!(var8 != var4)) {
                            _fun98003_ip = 200;
                            continue _fun98003
                        }
                    case 127:
                        var3 = _closure3_slot0;
                        var5 = var3.rpcServer;
                        var4 = var5.dispatchToSubscriptions;
                        var2 = _closure1_slot20;
                        var3 = var2.QUEST_ENROLLMENT_STATUS_UPDATE;
                        var2 = {};
                        var2.quest_id = var7;
                        var7 = var6.enrolledAt;
                        var7 = var8 != var7;
                        var2.is_enrolled = var7;
                        var6 = var6.enrolledAt;
                        var2.enrolled_at = var6;
                        var1 = function(arg0) { // Environment: var1
                            _fun98004: for (var _fun98004_ip = 0;;) switch (_fun98004_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2.socket;
                                    var0 = var0.application;
                                    var3 = var0.id;
                                    var0 = _closure4_slot1;
                                    var0 = var3 === var0;
                                    if (!var0) {
                                        _fun98004_ip = 64;
                                        continue _fun98004
                                    }
                                case 33:
                                    var3 = var2.args;
                                    var2 = null;
                                    var4 = var2 == var3;
                                    var2 = undefined;
                                    if (var4) {
                                        _fun98004_ip = 56;
                                        continue _fun98004
                                    }
                                case 50:
                                    var2 = var3.quest_id;
                                case 56:
                                    var1 = _closure4_slot0;
                                    var0 = var2 === var1;
                                case 64:
                                    return var0;
                            }
                        };
                        var1 = var4.bind(var5)(var3, var1, var2);
                    case 200:
                        return var0;
                }
            };
            var2.handleQuestEnrollSuccess = var3;
            var3 = var1.server;
            var2.rpcServer = var3;
            var3 = var1.transports;
            var2.transports = var3;
            var3 = var1.commands;
            var2.rpcCommandHandlers = var3;
            var3 = var1.events;
            var2.rpcEventHandlers = var3;
            var3 = var1.stores;
            var2.stores = var3;
            var1 = var1.registerTransportsForEmbeddedPlatform;
            var2.registerTransportsForEmbeddedPlatform = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'loadServer';
        var0.key = var1;
        var1 = function() {
            _fun98005: for (var _fun98005_ip = 0;;) switch (_fun98005_ip) {
                case 0:
                    var8 = this;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.isPlatformEmbedded;
                    if (!var1) {
                        _fun98005_ip = 47;
                        continue _fun98005
                    }
                case 37:
                    var1 = var8.registerTransportsForEmbeddedPlatform;
                    var1 = var1.bind(var8)();
                case 47:
                    var2 = _closure1_slot25;
                    var1 = var8.transports;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun98005_ip = 113;
                        continue _fun98005
                    }
                case 74:
                    var5 = var2.value;
                    var4 = var8.rpcServer;
                    var1 = var4.registerTransport;
                    var1 = var1.bind(var4)(var5);
                    var4 = var3.bind(var0)();
                    var1 = var4.done;
                    var2 = var4;
                    if (!var1) {
                        _fun98005_ip = 74;
                        continue _fun98005
                    }
                case 113:
                    var4 = var8.rpcCommandHandlers;
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.entries;
                    var9 = var2.bind(var3)(var4);
                    var2 = var9.length;
                    var6 = 0;
                    var2 = var6 < var2;
                    var5 = 2;
                    var4 = 1;
                    var3 = 0;
                    if (!var2) {
                        _fun98005_ip = 214;
                        continue _fun98005
                    }
                case 160:
                    var10 = var9[var3];
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var0)(var10, var5);
                    var12 = var2[var6];
                    var11 = var2[var4];
                    var10 = var8.rpcServer;
                    var2 = var10.setCommandHandler;
                    var2 = var2.bind(var10)(var12, var11);
                    var3 = var3 + 1;
                    var2 = var9.length;
                    if (var3 < var2) {
                        _fun98005_ip = 160;
                        continue _fun98005
                    }
                case 214:
                    var3 = var8.rpcEventHandlers;
                    var2 = var1.Object;
                    var1 = var2.entries;
                    var3 = var1.bind(var2)(var3);
                    var1 = var3.length;
                    var1 = var6 < var1;
                    var2 = 0;
                    if (!var1) {
                        _fun98005_ip = 305;
                        continue _fun98005
                    }
                case 251:
                    var9 = var3[var2];
                    var1 = _closure1_slot3;
                    var1 = var1.bind(var0)(var9, var5);
                    var11 = var1[var6];
                    var10 = var1[var4];
                    var9 = var8.rpcServer;
                    var1 = var9.setEventHandler;
                    var1 = var1.bind(var9)(var11, var10);
                    var2 = var2 + 1;
                    var1 = var3.length;
                    if (var2 < var1) {
                        _fun98005_ip = 251;
                        continue _fun98005
                    }
                case 305:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'init';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = var1.rpcServer;
            var0 = function() { // Environment: var3
                var1 = _closure1_slot15;
                var0 = var1.getCurrentUser;
                var0 = var0.bind(var1)();
                return var0;
            };
            var2.getCurrentUser = var0;
            var2 = var1.rpcServer;
            var0 = function(arg0) { // Environment: var3
                var5 = arg0;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 25;
                var2 = var4[var0];
                var0 = undefined;
                var7 = var3.bind(var0)(var2);
                var6 = var7.dispatch;
                var2 = {};
                var8 = 'RPC_APP_CONNECTED';
                var2.type = var8;
                var8 = var5.id;
                var2.socketId = var8;
                var8 = var5.application;
                var2.application = var8;
                var2 = var6.bind(var7)(var2);
                var2 = 26;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot19;
                var2 = var1.AUTHORIZED_APP_CONNECTED;
                var1 = {};
                var6 = var5.application;
                var6 = var6.id;
                var1.app_id = var6;
                var5 = var5.transport;
                var1.transport = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var2.onConnect = var0;
            var2 = var1.rpcServer;
            var0 = function(arg0, arg1) { // Environment: var3
                var4 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 25;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'RPC_APP_DISCONNECTED';
                var1.type = var5;
                var5 = var4.id;
                var1.socketId = var5;
                var4 = var4.application;
                var1.application = var4;
                var4 = arg1;
                var1.reason = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.onDisconnect = var0;
            var0 = _closure1_slot7;
            var8 = new Array(6);
            var8[0] = var0;
            var0 = _closure1_slot8;
            var8[1] = var0;
            var0 = _closure1_slot11;
            var8[2] = var0;
            var0 = _closure1_slot16;
            var8[3] = var0;
            var0 = _closure1_slot10;
            var8[4] = var0;
            var0 = _closure1_slot12;
            var8[5] = var0;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 27;
            var5 = var4[var0];
            var0 = undefined;
            var5 = var6.bind(var0)(var5);
            var7 = var5.BatchedStoreListener;
            var6 = var8.concat;
            var5 = var1.stores;
            var10 = var6.bind(var8)(var5);
            var5 = var7.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var7
                }
            });
            var9 = function() { // Environment: var3
                var0 = _closure3_slot0;
                var1 = var0.rpcServer;
                var0 = var1.updateSubscriptions;
                var0 = var0.bind(var1)();
                return var0;
            };
            var11 = var5;
            var3 = new var11[var7](var10, var9, var8);
            var6 = var3 instanceof Object ? var3 : var5;
            var5 = var6.attach;
            var3 = 'RPCServerManager';
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot1;
            var2 = 25;
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleMessage;
            var5 = 'MESSAGE_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleMessage;
            var5 = 'MESSAGE_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleMessage;
            var5 = 'MESSAGE_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleSpeaking;
            var5 = 'SPEAKING';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleOAuth2TokenRevoke;
            var5 = 'OAUTH2_TOKEN_REVOKE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleGuildCreate;
            var5 = 'GUILD_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleChannelCreate;
            var5 = 'CHANNEL_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleLogout;
            var5 = 'LOGOUT';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleVoiceChannelSelect;
            var5 = 'VOICE_CHANNEL_SELECT';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleNotificationCreate;
            var5 = 'RPC_NOTIFICATION_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleActivityJoin;
            var5 = 'ACTIVITY_JOIN';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleActivityLayoutModeUpdate;
            var5 = 'ACTIVITY_LAYOUT_MODE_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleFrameUpdateLayoutMode;
            var5 = 'FRAME_UPDATE_LAYOUT_MODE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleThermalStateChange;
            var5 = 'THERMAL_STATE_CHANGE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleScreenOrientationUpdate;
            var5 = 'ACTIVITY_SCREEN_ORIENTATION_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleEmbeddedActivityUpdate;
            var5 = 'EMBEDDED_ACTIVITY_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleRelationshipAdd;
            var5 = 'RELATIONSHIP_ADD';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleRelationshipUpdate;
            var5 = 'RELATIONSHIP_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleRelationshipRemove;
            var5 = 'RELATIONSHIP_REMOVE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handlePresenceUpdates;
            var5 = 'PRESENCE_UPDATES';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handlePresencesReplace;
            var5 = 'PRESENCES_REPLACE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleUserUpdate;
            var5 = 'USER_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleEntitlementCreate;
            var5 = 'ENTITLEMENT_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleEntitlementDelete;
            var5 = 'ENTITLEMENT_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.subscribe;
            var2 = var1.handleQuestEnrollSuccess;
            var1 = 'QUESTS_ENROLL_SUCCESS';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'terminate';
        var0.key = var5;
        var4 = function() {
            var1 = this;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 25;
            var5 = var4[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleMessage;
            var5 = 'MESSAGE_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleMessage;
            var5 = 'MESSAGE_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleMessage;
            var5 = 'MESSAGE_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleSpeaking;
            var5 = 'SPEAKING';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleOAuth2TokenRevoke;
            var5 = 'OAUTH2_TOKEN_REVOKE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleGuildCreate;
            var5 = 'GUILD_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleChannelCreate;
            var5 = 'CHANNEL_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleLogout;
            var5 = 'LOGOUT';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleVoiceChannelSelect;
            var5 = 'VOICE_CHANNEL_SELECT';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleNotificationCreate;
            var5 = 'RPC_NOTIFICATION_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleActivityJoin;
            var5 = 'ACTIVITY_JOIN';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleActivityLayoutModeUpdate;
            var5 = 'ACTIVITY_LAYOUT_MODE_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleFrameUpdateLayoutMode;
            var5 = 'FRAME_UPDATE_LAYOUT_MODE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleThermalStateChange;
            var5 = 'THERMAL_STATE_CHANGE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleScreenOrientationUpdate;
            var5 = 'ACTIVITY_SCREEN_ORIENTATION_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleEmbeddedActivityUpdate;
            var5 = 'EMBEDDED_ACTIVITY_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleRelationshipAdd;
            var5 = 'RELATIONSHIP_ADD';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleRelationshipUpdate;
            var5 = 'RELATIONSHIP_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleRelationshipRemove;
            var5 = 'RELATIONSHIP_REMOVE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handlePresenceUpdates;
            var5 = 'PRESENCE_UPDATES';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handlePresencesReplace;
            var5 = 'PRESENCES_REPLACE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleUserUpdate;
            var5 = 'USER_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleEntitlementCreate;
            var5 = 'ENTITLEMENT_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleEntitlementDelete;
            var5 = 'ENTITLEMENT_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = var1.handleQuestEnrollSuccess;
            var1 = 'QUESTS_ENROLL_SUCCESS';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/RPCServerManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 5230, 1372, 1681, 1410, 3476, 3610, 3518, 3100, 1670, 1621, 3521, 660, 3457, 7939, 3510, 1304, 7954, 7968, 12802, 7955, 5271, 478, 806, 795, 566, 2]);