// modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var14 = function arg0() {
        _fun98348: for (var _fun98348_ip = 0;;) switch (_fun98348_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.args;
                var4 = var1.channel_id;
                var2 = var0.socket;
                var3 = _closure1_slot8;
                var1 = var3.getChannel;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                if (!(var3 != var1)) {
                    _fun98348_ip = 236;
                    continue _fun98348
                }
            case 46:
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 14;
                var3 = var5[var3];
                var5 = undefined;
                var7 = var6.bind(var5)(var3);
                var6 = var7.hasMessageReadPermission;
                var3 = var2.application;
                var3 = var3.id;
                var2 = var2.authorization;
                var2 = var2.scopes;
                var2 = var6.bind(var7)(var1, var3, var2);
                if (!var2) {
                    _fun98348_ip = 236;
                    continue _fun98348
                }
            case 109:
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 16;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.userCannotSeeNSFWContent;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun98348_ip = 145;
                    continue _fun98348
                }
            case 143:
                return var5;
            case 145:
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 15;
                var2 = var6[var2];
                var5 = var3.bind(var5)(var2);
                var3 = {};
                var2 = _closure1_slot16;
                var2 = var2.INVALID_CHANNEL;
                var3.errorCode = var2;
                var6 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Invalid nsfw channel id: ';
                var9 = var2.bind(var1)(var6);
                var2 = var5.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var2;
                var10 = var3;
                var1 = new var11[var5](var10, var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 236:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot16;
                var0 = var0.INVALID_CHANNEL;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid channel id: ';
                var9 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var11 = var1;
                var10 = var2;
                var0 = new var11[var3](var10, var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var9 = function arg0() {
        _fun98349: for (var _fun98349_ip = 0;;) switch (_fun98349_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.args;
                var4 = var0.channel_id;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun98349_ip = 41;
                    continue _fun98349
                }
            case 20:
                var3 = _closure1_slot8;
                var1 = var3.getChannel;
                var1 = var1.bind(var3)(var4);
                if (!(var2 != var1)) {
                    _fun98349_ip = 45;
                    continue _fun98349
                }
            case 41:
                var1 = undefined;
                return var1;
            case 45:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot16;
                var0 = var0.INVALID_CHANNEL;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid channel id: ';
                var5 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var1;
                var6 = var2;
                var0 = new var7[var3](var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.getGuildIconURL;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var15 = var1.RPC_AUTHENTICATED_SCOPE;
    var13 = var1.RPC_LOCAL_SCOPE;
    var10 = var1.RPC_SCOPE_CONFIG;
    var1 = 12;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.ApplicationFlags;
    var _closure1_slot15 = var3;
    var3 = var1.RPCErrors;
    var _closure1_slot16 = var3;
    var3 = var1.RPCEvents;
    var16 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var4 = var3.bind(var4)();
        var3 = var4.required;
        var3 = var3.bind(var4)();
        var0.channel_id = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var11 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var2 = var0.bind(var1)(var4);
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var5 = var3.bind(var4)();
        var4 = var5.allow;
        var3 = null;
        var3 = var4.bind(var5)(var3);
        var0.channel_id = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1 = {};
    var8 = var3.GUILD_STATUS;
    var6 = {};
    var12 = 17;
    var17 = var5[var12];
    var17 = var4.bind(var0)(var17);
    var17 = var17.OAuth2Scopes;
    var17 = var17.RPC;
    var6.scope = var17;
    var17 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var4 = var3.bind(var4)();
        var3 = var4.required;
        var3 = var3.bind(var4)();
        var0.guild_id = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var17;
    var17 = function arg0() {
        _fun98353: for (var _fun98353_ip = 0;;) switch (_fun98353_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.args;
                var4 = var0.guild_id;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot10;
                var2 = var3.getGuild;
                var3 = var2.bind(var3)(var4);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun98353_ip = 52;
                    continue _fun98353
                }
            case 43:
                var1 = function(arg0) { // Environment: var1
                    _fun98354: for (var _fun98354_ip = 0;;) switch (_fun98354_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.prevState;
                            var2 = var0.dispatch;
                            var4 = _closure1_slot10;
                            var1 = var4.getGuild;
                            var0 = _closure2_slot0;
                            var9 = var1.bind(var4)(var0);
                            var6 = null;
                            if (!(var6 == var9)) {
                                _fun98354_ip = 48;
                                continue _fun98354
                            }
                        case 44:
                            var0 = undefined;
                            return var0;
                        case 48:
                            var0 = {};
                            var4 = {};
                            var1 = var9.id;
                            var4.id = var1;
                            var1 = var9.name;
                            var4.name = var1;
                            var8 = _closure1_slot6;
                            var1 = undefined;
                            var7 = 128;
                            var7 = var8.bind(var1)(var9, var7);
                            var8 = var6 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun98354_ip = 97;
                                continue _fun98354
                            }
                        case 94:
                            var6 = var7;
                        case 97:
                            var4.icon_url = var6;
                            var0.guild = var4;
                            var4 = 0;
                            var0.online = var4;
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var3 = 18;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.isEqual;
                            var3 = var3.bind(var4)(var5, var0);
                            if (var3) {
                                _fun98354_ip = 153;
                                continue _fun98354
                            }
                        case 148:
                            var1 = var2.bind(var1)(var0);
                        case 153:
                            return var0;
                    }
                };
                return var1;
            case 52:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot16;
                var0 = var0.INVALID_GUILD;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid guild id: ';
                var5 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var1;
                var6 = var2;
                var0 = new var7[var3](var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var17;
    var1[var8] = var6;
    var8 = var3.VOICE_STATE_CREATE;
    var6 = {};
    var17 = {};
    var19 = var10.ANY;
    var18 = var5[var12];
    var18 = var4.bind(var0)(var18);
    var18 = var18.OAuth2Scopes;
    var20 = var18.RPC;
    var18 = new Array(2);
    var18[0] = var20;
    var20 = var5[var12];
    var20 = var4.bind(var0)(var20);
    var20 = var20.OAuth2Scopes;
    var20 = var20.RPC_VOICE_READ;
    var18[1] = var20;
    var17[var19] = var18;
    var6.scope = var17;
    var17 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var4 = var3.bind(var4)();
        var3 = var4.required;
        var3 = var3.bind(var4)();
        var0.channel_id = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var17;
    var17 = function arg0() {
        _fun98356: for (var _fun98356_ip = 0;;) switch (_fun98356_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.args;
                var4 = var0.channel_id;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var3 = var2.bind(var3)(var4);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun98356_ip = 52;
                    continue _fun98356
                }
            case 43:
                var1 = function(arg0) { // Environment: var1
                    _fun98357: for (var _fun98357_ip = 0;;) switch (_fun98357_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.prevState;
                            var0 = var0.dispatch;
                            var _closure3_slot0 = var0;
                            var4 = undefined;
                            var _closure3_slot2 = var4;
                            var6 = _closure1_slot8;
                            var3 = var6.getChannel;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var6)(var0);
                            var _closure3_slot1 = var0;
                            var3 = null;
                            if (!(var3 == var0)) {
                                _fun98357_ip = 62;
                                continue _fun98357
                            }
                        case 60:
                            return var4;
                        case 62:
                            var3 = var0.getGuildId;
                            var3 = var3.bind(var0)();
                            _closure3_slot2 = var3;
                            var3 = global;
                            var6 = var3.Object;
                            var3 = var6.values;
                            var8 = _closure1_slot14;
                            var7 = var8.getVoiceStatesForChannel;
                            var0 = var0.id;
                            var0 = var7.bind(var8)(var0);
                            var0 = var3.bind(var6)(var0);
                            if (!var5) {
                                _fun98357_ip = 174;
                                continue _fun98357
                            }
                        case 117:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var2 = 18;
                            var2 = var6[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.differenceBy;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.userId;
                                return var0;
                            };
                            var3 = var3.bind(var4)(var0, var5, var2);
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 14;
                                var3 = var3[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var5 = var6.transformVoiceState;
                                var4 = _closure3_slot2;
                                var0 = _closure3_slot1;
                                var3 = var0.id;
                                var0 = arg0;
                                var0 = var5.bind(var6)(var4, var3, var0);
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 174:
                            return var0;
                    }
                };
                return var1;
            case 52:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot16;
                var0 = var0.INVALID_CHANNEL;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid channel id: ';
                var5 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var1;
                var6 = var2;
                var0 = new var7[var3](var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var17;
    var1[var8] = var6;
    var8 = var3.VOICE_STATE_DELETE;
    var6 = {};
    var17 = {};
    var19 = var10.ANY;
    var18 = var5[var12];
    var18 = var4.bind(var0)(var18);
    var18 = var18.OAuth2Scopes;
    var20 = var18.RPC;
    var18 = new Array(2);
    var18[0] = var20;
    var20 = var5[var12];
    var20 = var4.bind(var0)(var20);
    var20 = var20.OAuth2Scopes;
    var20 = var20.RPC_VOICE_READ;
    var18[1] = var20;
    var17[var19] = var18;
    var6.scope = var17;
    var17 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var4 = var3.bind(var4)();
        var3 = var4.required;
        var3 = var3.bind(var4)();
        var0.channel_id = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var17;
    var17 = function arg0() {
        _fun98361: for (var _fun98361_ip = 0;;) switch (_fun98361_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.args;
                var4 = var0.channel_id;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var3 = var2.bind(var3)(var4);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun98361_ip = 52;
                    continue _fun98361
                }
            case 43:
                var1 = function(arg0) { // Environment: var1
                    _fun98362: for (var _fun98362_ip = 0;;) switch (_fun98362_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.prevState;
                            var0 = var0.dispatch;
                            var _closure3_slot0 = var0;
                            var4 = undefined;
                            var _closure3_slot2 = var4;
                            var6 = _closure1_slot8;
                            var3 = var6.getChannel;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var6)(var0);
                            var _closure3_slot1 = var0;
                            var3 = null;
                            if (!(var3 == var0)) {
                                _fun98362_ip = 62;
                                continue _fun98362
                            }
                        case 60:
                            return var4;
                        case 62:
                            var3 = var0.getGuildId;
                            var3 = var3.bind(var0)();
                            _closure3_slot2 = var3;
                            var3 = global;
                            var6 = var3.Object;
                            var3 = var6.values;
                            var8 = _closure1_slot14;
                            var7 = var8.getVoiceStatesForChannel;
                            var0 = var0.id;
                            var0 = var7.bind(var8)(var0);
                            var0 = var3.bind(var6)(var0);
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var2 = 18;
                            var2 = var6[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.differenceBy;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.userId;
                                return var0;
                            };
                            var3 = var3.bind(var4)(var5, var0, var2);
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 14;
                                var3 = var3[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var5 = var6.transformVoiceState;
                                var4 = _closure3_slot2;
                                var0 = _closure3_slot1;
                                var3 = var0.id;
                                var0 = arg0;
                                var0 = var5.bind(var6)(var4, var3, var0);
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                return var1;
            case 52:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot16;
                var0 = var0.INVALID_CHANNEL;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid channel id: ';
                var5 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var1;
                var6 = var2;
                var0 = new var7[var3](var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var17;
    var1[var8] = var6;
    var8 = var3.VOICE_STATE_UPDATE;
    var6 = {};
    var17 = {};
    var19 = var10.ANY;
    var18 = var5[var12];
    var18 = var4.bind(var0)(var18);
    var18 = var18.OAuth2Scopes;
    var20 = var18.RPC;
    var18 = new Array(2);
    var18[0] = var20;
    var20 = var5[var12];
    var20 = var4.bind(var0)(var20);
    var20 = var20.OAuth2Scopes;
    var20 = var20.RPC_VOICE_READ;
    var18[1] = var20;
    var17[var19] = var18;
    var6.scope = var17;
    var17 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var4 = var3.bind(var4)();
        var3 = var4.required;
        var3 = var3.bind(var4)();
        var0.channel_id = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var17;
    var17 = function arg0() {
        _fun98366: for (var _fun98366_ip = 0;;) switch (_fun98366_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.args;
                var4 = var0.channel_id;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var3 = var2.bind(var3)(var4);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun98366_ip = 52;
                    continue _fun98366
                }
            case 43:
                var1 = function(arg0) { // Environment: var1
                    _fun98367: for (var _fun98367_ip = 0;;) switch (_fun98367_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.prevState;
                            var0 = var0.dispatch;
                            var _closure3_slot0 = var0;
                            var7 = undefined;
                            var _closure3_slot2 = var7;
                            var4 = _closure1_slot8;
                            var3 = var4.getChannel;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var0);
                            var _closure3_slot1 = var0;
                            var3 = null;
                            if (!(var3 == var0)) {
                                _fun98367_ip = 62;
                                continue _fun98367
                            }
                        case 60:
                            return var7;
                        case 62:
                            var3 = var0.getGuildId;
                            var3 = var3.bind(var0)();
                            _closure3_slot2 = var3;
                            var3 = global;
                            var4 = var3.Object;
                            var3 = var4.values;
                            var8 = _closure1_slot14;
                            var6 = var8.getVoiceStatesForChannel;
                            var0 = var0.id;
                            var0 = var6.bind(var8)(var0);
                            var4 = var3.bind(var4)(var0);
                            var3 = var4.map;
                            var0 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.transformVoiceState;
                                var2 = _closure3_slot2;
                                var0 = _closure3_slot1;
                                var1 = var0.id;
                                var0 = arg0;
                                var0 = var3.bind(var4)(var2, var1, var0);
                                return var0;
                            };
                            var0 = var3.bind(var4)(var0);
                            var6 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var2 = 18;
                            var3 = var8[var2];
                            var4 = var6.bind(var7)(var3);
                            var3 = var4.differenceWith;
                            var2 = var8[var2];
                            var2 = var6.bind(var7)(var2);
                            var2 = var2.isEqual;
                            var3 = var3.bind(var4)(var0, var5, var2);
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                return var1;
            case 52:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot16;
                var0 = var0.INVALID_CHANNEL;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid channel id: ';
                var5 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var1;
                var6 = var2;
                var0 = new var7[var3](var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var17;
    var1[var8] = var6;
    var8 = var3.VOICE_CONNECTION_STATUS;
    var6 = {};
    var17 = {};
    var19 = var10.ANY;
    var18 = var5[var12];
    var18 = var4.bind(var0)(var18);
    var18 = var18.OAuth2Scopes;
    var20 = var18.RPC;
    var18 = new Array(2);
    var18[0] = var20;
    var20 = var5[var12];
    var20 = var4.bind(var0)(var20);
    var20 = var20.OAuth2Scopes;
    var20 = var20.RPC_VOICE_READ;
    var18[1] = var20;
    var17[var19] = var18;
    var6.scope = var17;
    var17 = function() {
        var0 = function(arg0) { // Environment: var0
            _fun98371: for (var _fun98371_ip = 0;;) switch (_fun98371_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.prevState;
                    var2 = var0.dispatch;
                    var0 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 14;
                    var4 = var6[var1];
                    var1 = undefined;
                    var9 = var7.bind(var1)(var4);
                    var8 = var9.getVoiceConnectionState;
                    var7 = _closure1_slot12;
                    var4 = var7.getState;
                    var4 = var4.bind(var7)();
                    var4 = var8.bind(var9)(var4);
                    var0.state = var4;
                    var4 = var7.getHostname;
                    var4 = var4.bind(var7)();
                    var0.hostname = var4;
                    var4 = var7.getPings;
                    var4 = var4.bind(var7)();
                    var0.pings = var4;
                    var4 = var7.getAveragePing;
                    var4 = var4.bind(var7)();
                    var0.average_ping = var4;
                    var4 = var7.getLastPing;
                    var4 = var4.bind(var7)();
                    var0.last_ping = var4;
                    var4 = _closure1_slot1;
                    var3 = 18;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isEqual;
                    var3 = var3.bind(var4)(var0, var5);
                    if (var3) {
                        _fun98371_ip = 170;
                        continue _fun98371
                    }
                case 165:
                    var1 = var2.bind(var1)(var0);
                case 170:
                    return var0;
            }
        };
        return var0;
    };
    var6.handler = var17;
    var1[var8] = var6;
    var8 = var3.MESSAGE_CREATE;
    var6 = {};
    var17 = var5[var12];
    var17 = var4.bind(var0)(var17);
    var17 = var17.OAuth2Scopes;
    var17 = var17.RPC;
    var6.scope = var17;
    var6.validation = var16;
    var6.handler = var14;
    var1[var8] = var6;
    var8 = var3.MESSAGE_UPDATE;
    var6 = {};
    var17 = var5[var12];
    var17 = var4.bind(var0)(var17);
    var17 = var17.OAuth2Scopes;
    var17 = var17.RPC;
    var6.scope = var17;
    var6.validation = var16;
    var6.handler = var14;
    var1[var8] = var6;
    var8 = var3.MESSAGE_DELETE;
    var6 = {};
    var17 = var5[var12];
    var17 = var4.bind(var0)(var17);
    var17 = var17.OAuth2Scopes;
    var17 = var17.RPC;
    var6.scope = var17;
    var6.validation = var16;
    var6.handler = var14;
    var1[var8] = var6;
    var8 = var3.SPEAKING_START;
    var6 = {};
    var14 = {};
    var17 = var10.ANY;
    var16 = var5[var12];
    var16 = var4.bind(var0)(var16);
    var16 = var16.OAuth2Scopes;
    var18 = var16.RPC;
    var16 = new Array(3);
    var16[0] = var18;
    var18 = var5[var12];
    var18 = var4.bind(var0)(var18);
    var18 = var18.OAuth2Scopes;
    var18 = var18.RPC_VOICE_READ;
    var16[1] = var18;
    var16[2] = var13;
    var14[var17] = var16;
    var6.scope = var14;
    var6.validation = var11;
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.SPEAKING_STOP;
    var6 = {};
    var14 = {};
    var17 = var10.ANY;
    var16 = var5[var12];
    var16 = var4.bind(var0)(var16);
    var16 = var16.OAuth2Scopes;
    var18 = var16.RPC;
    var16 = new Array(3);
    var16[0] = var18;
    var18 = var5[var12];
    var18 = var4.bind(var0)(var18);
    var18 = var18.OAuth2Scopes;
    var18 = var18.RPC_VOICE_READ;
    var16[1] = var18;
    var16[2] = var13;
    var14[var17] = var16;
    var6.scope = var14;
    var6.validation = var11;
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.GUILD_CREATE;
    var6 = {};
    var9 = var5[var12];
    var9 = var4.bind(var0)(var9);
    var9 = var9.OAuth2Scopes;
    var9 = var9.RPC;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.CHANNEL_CREATE;
    var6 = {};
    var9 = var5[var12];
    var9 = var4.bind(var0)(var9);
    var9 = var9.OAuth2Scopes;
    var9 = var9.RPC;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.GAME_JOIN;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = var5[var12];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OAuth2Scopes;
    var16 = var11.RPC;
    var11 = new Array(2);
    var11[0] = var16;
    var11[1] = var13;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.GAME_SPECTATE;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = var5[var12];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OAuth2Scopes;
    var16 = var11.RPC;
    var11 = new Array(2);
    var11[0] = var16;
    var11[1] = var13;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.ACTIVITY_JOIN;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = var5[var12];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OAuth2Scopes;
    var16 = var11.RPC;
    var11 = new Array(3);
    var11[0] = var16;
    var11[1] = var15;
    var11[2] = var13;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.ACTIVITY_JOIN_REQUEST;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = var5[var12];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OAuth2Scopes;
    var16 = var11.RPC;
    var11 = new Array(2);
    var11[0] = var16;
    var11[1] = var13;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.ACTIVITY_SPECTATE;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = var5[var12];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OAuth2Scopes;
    var16 = var11.RPC;
    var11 = new Array(3);
    var11[0] = var16;
    var11[1] = var15;
    var11[2] = var13;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.ACTIVITY_INVITE;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = var5[var12];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OAuth2Scopes;
    var16 = var11.RPC;
    var11 = new Array(2);
    var11[0] = var16;
    var11[1] = var13;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.ACTIVITY_PIP_MODE_UPDATE;
    var6 = {};
    var6.scope = var0;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.ACTIVITY_LAYOUT_MODE_UPDATE;
    var6 = {};
    var6.scope = var0;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.FRAME_LAYOUT_MODE_UPDATE;
    var6 = {};
    var6.scope = var0;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
    var6 = 19;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.activityInstanceConnectedParticipantsUpdateEvent;
    var1[var8] = var6;
    var8 = var3.THERMAL_STATE_UPDATE;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = new Array(1);
    var11[0] = var15;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.ORIENTATION_UPDATE;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = new Array(1);
    var11[0] = var15;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.VOICE_CHANNEL_SELECT;
    var6 = {};
    var9 = var5[var12];
    var9 = var4.bind(var0)(var9);
    var9 = var9.OAuth2Scopes;
    var9 = var9.RPC;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.NOTIFICATION_CREATE;
    var6 = {};
    var9 = {};
    var14 = var10.ALL;
    var11 = var5[var12];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OAuth2Scopes;
    var16 = var11.RPC;
    var11 = new Array(2);
    var11[0] = var16;
    var16 = var5[var12];
    var16 = var4.bind(var0)(var16);
    var16 = var16.OAuth2Scopes;
    var16 = var16.RPC_NOTIFICATIONS_READ;
    var11[1] = var16;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.RELATIONSHIP_UPDATE;
    var6 = {};
    var9 = var5[var12];
    var9 = var4.bind(var0)(var9);
    var9 = var9.OAuth2Scopes;
    var9 = var9.RELATIONSHIPS_READ;
    var6.scope = var9;
    var9 = function arg0() {
        _fun98387: for (var _fun98387_ip = 0;;) switch (_fun98387_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.socket;
                var6 = _closure1_slot2;
                var2 = _closure1_slot3;
                var7 = 20;
                var4 = var2[var7];
                var3 = undefined;
                var5 = var6.bind(var3)(var4);
                var4 = var5.has;
                var2 = var2[var7];
                var6 = var6.bind(var3)(var2);
                var2 = var6.deserialize;
                var1 = var1.application;
                var8 = var1.flags;
                var1 = null;
                var9 = var1 != var8;
                var1 = 0;
                if (!var9) {
                    _fun98387_ip = 78;
                    continue _fun98387
                }
            case 75:
                var1 = var8;
            case 78:
                var2 = var2.bind(var6)(var1);
                var6 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var7];
                var7 = var6.bind(var3)(var1);
                var6 = var7.deserialize;
                var1 = _closure1_slot15;
                var1 = var1.DISABLE_RELATIONSHIPS_ACCESS;
                var1 = var6.bind(var7)(var1);
                var1 = var4.bind(var5)(var2, var1);
                if (var1) {
                    _fun98387_ip = 132;
                    continue _fun98387
                }
            case 130:
                return var3;
            case 132:
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 15;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot16;
                var0 = var0.INVALID_PERMISSIONS;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = 'Missing Permissions';
                var12 = var1;
                var11 = var2;
                var0 = new var12[var3](var11, var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.CURRENT_USER_UPDATE;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = new Array(2);
    var11[0] = var13;
    var16 = var5[var12];
    var16 = var4.bind(var0)(var16);
    var16 = var16.OAuth2Scopes;
    var16 = var16.IDENTIFY;
    var11[1] = var16;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = function(arg0) { // Environment: var0
            _fun98389: for (var _fun98389_ip = 0;;) switch (_fun98389_ip) {
                case 0:
                    var0 = arg0;
                    var7 = var0.prevState;
                    var3 = var0.dispatch;
                    var0 = {};
                    var4 = _closure1_slot13;
                    var2 = var4.getCurrentUser;
                    var2 = var2.bind(var4)();
                    var0.currentUser = var2;
                    var2 = var0.currentUser;
                    var4 = null;
                    var2 = var4 == var2;
                    if (var2) {
                        _fun98389_ip = 90;
                        continue _fun98389
                    }
                case 52:
                    var4 = var4 != var7;
                    if (!var4) {
                        _fun98389_ip = 87;
                        continue _fun98389
                    }
                case 59:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var5 = 21;
                    var5 = var6[var5];
                    var6 = undefined;
                    var5 = var8.bind(var6)(var5);
                    var4 = var5.bind(var6)(var0, var7);
                case 87:
                    var2 = var4;
                case 90:
                    if (var2) {
                        _fun98389_ip = 131;
                        continue _fun98389
                    }
                case 93:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 22;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var0.currentUser;
                    var1 = var4.bind(var2)(var1);
                    var1 = var3.bind(var2)(var1);
                case 131:
                    return var0;
            }
        };
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.CURRENT_GUILD_MEMBER_UPDATE;
    var6 = {};
    var9 = {};
    var14 = var10.ALL;
    var11 = var5[var12];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OAuth2Scopes;
    var16 = var11.IDENTIFY;
    var11 = new Array(2);
    var11[0] = var16;
    var16 = var5[var12];
    var16 = var4.bind(var0)(var16);
    var16 = var16.OAuth2Scopes;
    var16 = var16.GUILDS_MEMBERS_READ;
    var11[1] = var16;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function arg0() {
        var1 = arg0;
        var1 = var1.args;
        var1 = var1.guild_id;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun98391: for (var _fun98391_ip = 0;;) switch (_fun98391_ip) {
                case 0:
                    var0 = arg0;
                    var7 = var0.prevState;
                    var3 = var0.dispatch;
                    var0 = {};
                    var5 = _closure1_slot9;
                    var4 = var5.getSelfMember;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    var0.currentGuildMember = var2;
                    var2 = var0.currentGuildMember;
                    var4 = null;
                    var2 = var4 == var2;
                    if (var2) {
                        _fun98391_ip = 99;
                        continue _fun98391
                    }
                case 61:
                    var4 = var4 != var7;
                    if (!var4) {
                        _fun98391_ip = 96;
                        continue _fun98391
                    }
                case 68:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var5 = 21;
                    var5 = var6[var5];
                    var6 = undefined;
                    var5 = var8.bind(var6)(var5);
                    var4 = var5.bind(var6)(var0, var7);
                case 96:
                    var2 = var4;
                case 99:
                    if (var2) {
                        _fun98391_ip = 140;
                        continue _fun98391
                    }
                case 102:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 23;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var0.currentGuildMember;
                    var1 = var4.bind(var2)(var1);
                    var1 = var3.bind(var2)(var1);
                case 140:
                    return var0;
            }
        };
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.ENTITLEMENT_CREATE;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = new Array(2);
    var11[0] = var13;
    var11[1] = var15;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.ENTITLEMENT_DELETE;
    var6 = {};
    var9 = {};
    var14 = var10.ANY;
    var11 = new Array(2);
    var11[0] = var13;
    var11[1] = var15;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.SCREENSHARE_STATE_UPDATE;
    var6 = {};
    var9 = {};
    var14 = var10.ALL;
    var11 = new Array(2);
    var11[0] = var13;
    var15 = var5[var12];
    var15 = var4.bind(var0)(var15);
    var15 = var15.OAuth2Scopes;
    var15 = var15.RPC_SCREENSHARE_READ;
    var11[1] = var15;
    var9[var14] = var11;
    var6.scope = var9;
    var9 = function() {
        var0 = function(arg0) { // Environment: var0
            _fun98395: for (var _fun98395_ip = 0;;) switch (_fun98395_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.prevState;
                    var2 = var0.dispatch;
                    var1 = _closure1_slot7;
                    var0 = var1.getStreamerActiveStreamMetadata;
                    var8 = var0.bind(var1)();
                    var4 = null;
                    var6 = var4 == var8;
                    var1 = undefined;
                    var0 = undefined;
                    if (var6) {
                        _fun98395_ip = 52;
                        continue _fun98395
                    }
                case 46:
                    var0 = var8.pid;
                case 52:
                    var6 = var4 != var0;
                    var0 = null;
                    if (!var6) {
                        _fun98395_ip = 82;
                        continue _fun98395
                    }
                case 61:
                    var9 = _closure1_slot5;
                    var7 = var9.getGameForPID;
                    var6 = var8.pid;
                    var0 = var7.bind(var9)(var6);
                case 82:
                    var7 = var4 == var0;
                    var6 = undefined;
                    if (var7) {
                        _fun98395_ip = 96;
                        continue _fun98395
                    }
                case 91:
                    var6 = var0.id;
                case 96:
                    var6 = var4 != var6;
                    var7 = null;
                    if (!var6) {
                        _fun98395_ip = 125;
                        continue _fun98395
                    }
                case 105:
                    var9 = _closure1_slot4;
                    var6 = var9.getApplication;
                    var0 = var0.id;
                    var7 = var6.bind(var9)(var0);
                case 125:
                    var0 = var4 != var7;
                    var6 = null;
                    if (!var0) {
                        _fun98395_ip = 159;
                        continue _fun98395
                    }
                case 134:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var0 = 24;
                    var0 = var10[var0];
                    var0 = var9.bind(var1)(var0);
                    var6 = var0.bind(var1)(var7);
                case 159:
                    var0 = var4 == var8;
                    var7 = undefined;
                    if (var0) {
                        _fun98395_ip = 174;
                        continue _fun98395
                    }
                case 168:
                    var7 = var8.sourceName;
                case 174:
                    var0 = {};
                    var9 = var4 != var8;
                    var0.active = var9;
                    var10 = var4 == var8;
                    var9 = undefined;
                    if (var10) {
                        _fun98395_ip = 200;
                        continue _fun98395
                    }
                case 194:
                    var9 = var8.pid;
                case 200:
                    var10 = var4 != var9;
                    var8 = null;
                    if (!var10) {
                        _fun98395_ip = 212;
                        continue _fun98395
                    }
                case 209:
                    var8 = var9;
                case 212:
                    var0.pid = var8;
                    var6 = var4 != var6;
                    if (!(var4 == var6)) {
                        _fun98395_ip = 229;
                        continue _fun98395
                    }
                case 225:
                    var6 = var4 != var7;
                case 229:
                    var4 = null;
                    if (!var6) {
                        _fun98395_ip = 243;
                        continue _fun98395
                    }
                case 234:
                    var6 = {};
                    var6.name = var7;
                    var4 = var6;
                case 243:
                    var0.application = var4;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 18;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isEqual;
                    var3 = var3.bind(var4)(var0, var5);
                    if (var3) {
                        _fun98395_ip = 287;
                        continue _fun98395
                    }
                case 282:
                    var1 = var2.bind(var1)(var0);
                case 287:
                    return var0;
            }
        };
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var8 = var3.VIDEO_STATE_UPDATE;
    var6 = {};
    var9 = {};
    var11 = var10.ALL;
    var10 = new Array(2);
    var10[0] = var13;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.OAuth2Scopes;
    var12 = var12.RPC_VIDEO_READ;
    var10[1] = var12;
    var9[var11] = var10;
    var6.scope = var9;
    var9 = function() {
        var0 = function(arg0) { // Environment: var0
            _fun98397: for (var _fun98397_ip = 0;;) switch (_fun98397_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.prevState;
                    var2 = var0.dispatch;
                    var0 = {};
                    var4 = _closure1_slot11;
                    var3 = var4.isVideoEnabled;
                    var3 = var3.bind(var4)();
                    var0.active = var3;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isEqual;
                    var3 = var3.bind(var4)(var0, var5);
                    if (var3) {
                        _fun98397_ip = 80;
                        continue _fun98397
                    }
                case 75:
                    var1 = var2.bind(var1)(var0);
                case 80:
                    return var0;
            }
        };
        return var0;
    };
    var6.handler = var9;
    var1[var8] = var6;
    var6 = var3.AUTHORIZE_REQUEST;
    var3 = {};
    var3.scope = var0;
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3454, 3483, 1416, 3714, 1372, 1681, 1410, 3476, 3518, 1621, 3521, 3356, 660, 7930, 7932, 7927, 4551, 3339, 22, 12784, 484, 628, 7933, 12834, 12835, 2]);