// modules/rpc/server/commands/channels.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
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
    var1 = var4.bind(var0)(var1);
    var6 = var1.isVoiceChannel;
    var _closure1_slot3 = var6;
    var1 = var1.isTextChannel;
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
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
    var1 = var4.bind(var0)(var1);
    var11 = var1.RPC_SCOPE_CONFIG;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.Routes;
    var _closure1_slot10 = var3;
    var3 = var1.Permissions;
    var _closure1_slot11 = var3;
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot12 = var1;
    var1 = {};
    var9 = var3.GET_CHANNEL;
    var6 = {};
    var10 = {};
    var13 = var11.ANY;
    var8 = 8;
    var12 = var5[var8];
    var12 = var4.bind(var0)(var12);
    var12 = var12.OAuth2Scopes;
    var14 = var12.RPC;
    var12 = new Array(3);
    var12[0] = var14;
    var14 = var5[var8];
    var14 = var4.bind(var0)(var14);
    var14 = var14.OAuth2Scopes;
    var14 = var14.GUILDS;
    var12[1] = var14;
    var14 = var5[var8];
    var14 = var4.bind(var0)(var14);
    var14 = var14.OAuth2Scopes;
    var14 = var14.GUILDS_CHANNELS_READ;
    var12[2] = var14;
    var10[var13] = var12;
    var6.scope = var10;
    var10 = function arg0() {
        _fun97967: for (var _fun97967_ip = 0;;) switch (_fun97967_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.args;
                var4 = var1.channel_id;
                var1 = var0.socket;
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var5 = var2.bind(var3)(var4);
                var2 = null;
                if (!(var2 != var5)) {
                    _fun97967_ip = 311;
                    continue _fun97967
                }
            case 46:
                var2 = var5.isPrivate;
                var2 = var2.bind(var5)();
                if (!var2) {
                    _fun97967_ip = 231;
                    continue _fun97967
                }
            case 62:
                var2 = var1.authorization;
                var7 = var2.scopes;
                var3 = var7.includes;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 8;
                var2 = var2[var9];
                var6 = undefined;
                var2 = var8.bind(var6)(var2);
                var2 = var2.OAuth2Scopes;
                var2 = var2.RPC;
                var2 = var3.bind(var7)(var2);
                if (var2) {
                    _fun97967_ip = 231;
                    continue _fun97967
                }
            case 121:
                var3 = var7.includes;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var8.bind(var6)(var2);
                var2 = var2.OAuth2Scopes;
                var2 = var2.DM_CHANNELS_READ;
                var2 = var3.bind(var7)(var2);
                if (var2) {
                    _fun97967_ip = 231;
                    continue _fun97967
                }
            case 163:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 9;
                var2 = var7[var2];
                var7 = var3.bind(var6)(var2);
                var6 = {};
                var2 = _closure1_slot12;
                var2 = var2.INVALID_PERMISSIONS;
                var6.errorCode = var2;
                var2 = var7.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = 'Invalid scope';
                var13 = var3;
                var12 = var6;
                var2 = new var13[var7](var12, var11, var10);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 231:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 10;
                var2 = var9[var6];
                var7 = undefined;
                var3 = var8.bind(var7)(var2);
                var2 = var3.transformChannel;
                var6 = var9[var6];
                var8 = var8.bind(var7)(var6);
                var7 = var8.hasMessageReadPermission;
                var6 = var1.application;
                var6 = var6.id;
                var1 = var1.authorization;
                var1 = var1.scopes;
                var1 = var7.bind(var8)(var5, var6, var1);
                var1 = var2.bind(var3)(var5, var1);
                return var1;
            case 311:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot12;
                var0 = var0.INVALID_CHANNEL;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid channel id: ';
                var11 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var13 = var1;
                var12 = var2;
                var0 = new var13[var3](var12, var11, var10);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var10;
    var1[var9] = var6;
    var9 = var3.GET_CHANNELS;
    var6 = {};
    var10 = var5[var8];
    var10 = var4.bind(var0)(var10);
    var10 = var10.OAuth2Scopes;
    var10 = var10.RPC;
    var6.scope = var10;
    var10 = function arg0() {
        _fun97968: for (var _fun97968_ip = 0;;) switch (_fun97968_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.args;
                var4 = var0.guild_id;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 11;
                var1 = var6[var1];
                var6 = var5.bind(var3)(var1);
                var5 = var6.values;
                var7 = _closure1_slot5;
                var1 = var7.loadAllGuildAndPrivateChannelsFromDisk;
                var1 = var1.bind(var7)();
                var6 = var5.bind(var6)(var1);
                var7 = var6;
                if (!var4) {
                    _fun97968_ip = 116;
                    continue _fun97968
                }
            case 75:
                var5 = _closure1_slot6;
                var1 = var5.getGuild;
                var5 = var1.bind(var5)(var4);
                _closure2_slot0 = var5;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun97968_ip = 159;
                    continue _fun97968
                }
            case 99:
                var5 = var6.filter;
                var1 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.guild_id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var7 = var5.bind(var6)(var1);
            case 116:
                var1 = {};
                var6 = var7.filter;
                var5 = function(arg0) { // Environment: var2
                    var3 = _closure1_slot7;
                    var2 = var3.can;
                    var0 = _closure1_slot11;
                    var1 = var0.VIEW_CHANNEL;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var6.bind(var7)(var5);
                var5 = var6.map;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var3 = var0.id;
                    var2 = var0.name;
                    var1 = var0.type;
                    var0 = {};
                    var0.id = var3;
                    var0.name = var2;
                    var0.type = var1;
                    return var0;
                };
                var2 = var5.bind(var6)(var2);
                var1.channels = var2;
                return var1;
            case 159:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 9;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot12;
                var0 = var0.INVALID_GUILD;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid guild id: ';
                var8 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var1;
                var9 = var2;
                var0 = new var10[var3](var9, var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var10;
    var1[var9] = var6;
    var9 = var3.GET_CHANNEL_PERMISSIONS;
    var6 = {};
    var10 = {};
    var13 = var11.ANY;
    var12 = var5[var8];
    var12 = var4.bind(var0)(var12);
    var12 = var12.OAuth2Scopes;
    var14 = var12.GUILDS_MEMBERS_READ;
    var12 = new Array(2);
    var12[0] = var14;
    var14 = var5[var8];
    var14 = var4.bind(var0)(var14);
    var14 = var14.OAuth2Scopes;
    var14 = var14.GUILDS_CHANNELS_READ;
    var12[1] = var14;
    var10[var13] = var12;
    var6.scope = var10;
    var10 = function() {
        _fun97972: for (var _fun97972_ip = 0;;) switch (_fun97972_ip) {
            case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var5 = var1.bind(var3)();
                var1 = null;
                if (!(var1 != var5)) {
                    _fun97972_ip = 59;
                    continue _fun97972
                }
            case 35:
                var1 = {};
                var4 = _closure1_slot7;
                var2 = var4.computePermissions;
                var2 = var2.bind(var4)(var5);
                var1.permissions = var2;
                return var1;
            case 59:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot12;
                var0 = var0.INVALID_CHANNEL;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = 'Invalid channel';
                var8 = var1;
                var7 = var2;
                var0 = new var8[var3](var7, var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var10;
    var1[var9] = var6;
    var9 = var3.SELECT_VOICE_CHANNEL;
    var6 = {};
    var10 = var5[var8];
    var10 = var4.bind(var0)(var10);
    var10 = var10.OAuth2Scopes;
    var10 = var10.RPC;
    var6.scope = var10;
    var10 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
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
        var6 = var3.bind(var4)();
        var5 = var6.allow;
        var3 = null;
        var3 = var5.bind(var6)(var3);
        var0.channel_id = var3;
        var3 = var4.number;
        var6 = var3.bind(var4)();
        var5 = var6.min;
        var3 = 0;
        var6 = var5.bind(var6)(var3);
        var5 = var6.max;
        var3 = 60;
        var3 = var5.bind(var6)(var3);
        var0.timeout = var3;
        var3 = var4.boolean;
        var3 = var3.bind(var4)();
        var0.force = var3;
        var3 = var4.boolean;
        var3 = var3.bind(var4)();
        var0.navigate = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var10;
    var10 = function arg0() {
        _fun97974: for (var _fun97974_ip = 0;;) switch (_fun97974_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.server;
                var6 = var0.socket;
                var _closure2_slot0 = var6;
                var0 = var0.args;
                var8 = var0.channel_id;
                var _closure2_slot1 = var8;
                var5 = var0.timeout;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun97974_ip = 50;
                    continue _fun97974
                }
            case 48:
                var5 = 0;
            case 50:
                var4 = var0.force;
                if (!(var4 === var3)) {
                    _fun97974_ip = 62;
                    continue _fun97974
                }
            case 60:
                var4 = false;
            case 62:
                var0 = var0.navigate;
                if (!(var0 === var3)) {
                    _fun97974_ip = 74;
                    continue _fun97974
                }
            case 72:
                var0 = false;
            case 74:
                var _closure2_slot2 = var0;
                if (var8) {
                    _fun97974_ip = 119;
                    continue _fun97974
                }
            case 84:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 14;
                var2 = var10[var2];
                var10 = var9.bind(var3)(var2);
                var9 = var10.selectVoiceChannel;
                var2 = null;
                var9 = var9.bind(var10)(var2);
                return var2;
            case 119:
                var9 = _closure1_slot8;
                var2 = var9.getVoiceChannelId;
                var2 = var2.bind(var9)();
                var9 = null;
                if (!(var9 != var2)) {
                    _fun97974_ip = 149;
                    continue _fun97974
                }
            case 139:
                if (!(var2 !== var8)) {
                    _fun97974_ip = 149;
                    continue _fun97974
                }
            case 143:
                var2 = false;
                if (!(var2 !== var4)) {
                    _fun97974_ip = 223;
                    continue _fun97974
                }
            case 149:
                var4 = var7.storeWait;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var4.bind(var7)(var6, var2, var5);
                var4 = var5.catch;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var0 = _closure1_slot12;
                    var0 = var0.SELECT_CHANNEL_TIMED_OUT;
                    var2.errorCode = var0;
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var4 = 'Request to select voice channel timed out.';
                    var6 = var1;
                    var5 = var2;
                    var0 = new var6[var3](var5, var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var5 = var4.bind(var5)(var2);
                var4 = var5.then;
                var2 = function(arg0) { // Environment: var1
                    _fun97977: for (var _fun97977_ip = 0;;) switch (_fun97977_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = null;
                            if (!(var0 != var6)) {
                                _fun97977_ip = 235;
                                continue _fun97977
                            }
                        case 12:
                            var1 = _closure1_slot3;
                            var0 = var6.type;
                            var8 = undefined;
                            var0 = var1.bind(var8)(var0);
                            if (var0) {
                                _fun97977_ip = 102;
                                continue _fun97977
                            }
                        case 34:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var0 = var2[var0];
                            var4 = var1.bind(var8)(var0);
                            var2 = {};
                            var0 = _closure1_slot12;
                            var0 = var0.INVALID_CHANNEL;
                            var2.errorCode = var0;
                            var0 = var4.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var11 = 'Channel is not a voice channel';
                            var13 = var1;
                            var12 = var2;
                            var0 = new var13[var4](var12, var11, var10);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 102:
                            var0 = global;
                            var2 = var0.Promise;
                            var1 = var2.all;
                            var4 = var0.Promise;
                            var0 = var4.resolve;
                            var4 = var0.bind(var4)(var6);
                            var0 = new Array(2);
                            var0[0] = var4;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 10;
                            var4 = var9[var3];
                            var5 = var7.bind(var8)(var4);
                            var4 = var5.transformChannel;
                            var3 = var9[var3];
                            var9 = var7.bind(var8)(var3);
                            var8 = var9.hasMessageReadPermission;
                            var3 = _closure2_slot0;
                            var7 = var3.application;
                            var7 = var7.id;
                            var3 = var3.authorization;
                            var3 = var3.scopes;
                            var3 = var8.bind(var9)(var6, var7, var3);
                            var3 = var4.bind(var5)(var6, var3);
                            var0[1] = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 235:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var0 = _closure1_slot12;
                            var0 = var0.INVALID_CHANNEL;
                            var2.errorCode = var0;
                            var4 = _closure2_slot1;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = 'Invalid channel id: ';
                            var11 = var1.bind(var0)(var4);
                            var1 = var3.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var13 = var1;
                            var12 = var2;
                            var0 = new var13[var3](var12, var11, var10);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var4 = var4.bind(var5)(var2);
                var2 = var4.then;
                var1 = function(arg0) { // Environment: var1
                    _fun97978: for (var _fun97978_ip = 0;;) switch (_fun97978_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = var5[Symbol.iterator];
                            var5 = var0().next;
                            var1 = var5().value;
                            var2 = var0;
                            var3 = undefined;
                            var4 = var2 === var3;
                            var2 = undefined;
                            if (var4) {
                                _fun97978_ip = 27;
                                continue _fun97978
                            }
                        case 24:
                            var2 = var1;
                        case 27:
                            var1 = undefined;
                            if (var4) {
                                _fun97978_ip = 57;
                                continue _fun97978
                            }
                        case 32:
                            var6 = var5().value;
                            var5 = var0;
                            var5 = var5 === var3;
                            var1 = undefined;
                            var4 = var5;
                            if (var5) {
                                _fun97978_ip = 57;
                                continue _fun97978
                            }
                        case 51:
                            var1 = var6;
                            var4 = var5;
                        case 57:
                            if (var4) {
                                _fun97978_ip = 63;
                                continue _fun97978
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var0 = var1.guild_id;
                            if (!var0) {
                                _fun97978_ip = 221;
                                continue _fun97978
                            }
                        case 74:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 15;
                            var4 = var6[var4];
                            var7 = var5.bind(var3)(var4);
                            var6 = var7.isChannelFull;
                            var5 = _closure1_slot9;
                            var4 = _closure1_slot6;
                            var4 = var6.bind(var7)(var2, var5, var4);
                            if (var4) {
                                _fun97978_ip = 329;
                                continue _fun97978
                            }
                        case 124:
                            var6 = _closure1_slot7;
                            var5 = var6.can;
                            var4 = _closure1_slot11;
                            var4 = var4.CONNECT;
                            var4 = var5.bind(var6)(var4, var2);
                            if (var4) {
                                _fun97978_ip = 221;
                                continue _fun97978
                            }
                        case 153:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 9;
                            var4 = var6[var4];
                            var7 = var5.bind(var3)(var4);
                            var6 = {};
                            var4 = _closure1_slot12;
                            var4 = var4.INVALID_PERMISSIONS;
                            var6.errorCode = var4;
                            var4 = var7.prototype;
                            var5 = Object.create(var4, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var10 = 'Connect permission required to join channel';
                            var12 = var5;
                            var11 = var6;
                            var4 = new var12[var7](var11, var10, var9);
                            var4 = var4 instanceof Object ? var4 : var5;
                            throw var4;
                        case 221:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 14;
                            var4 = var7[var4];
                            var7 = var5.bind(var3)(var4);
                            var5 = var7.selectVoiceChannel;
                            var4 = var2.id;
                            var4 = var5.bind(var7)(var4);
                            var4 = _closure2_slot2;
                            if (!var4) {
                                _fun97978_ip = 327;
                                continue _fun97978
                            }
                        case 270:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 16;
                            var4 = var7[var4];
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.replaceWith;
                            var8 = _closure1_slot10;
                            var7 = var8.CHANNEL;
                            var6 = var2.guild_id;
                            var2 = var2.id;
                            var2 = var7.bind(var8)(var6, var2);
                            var2 = var4.bind(var5)(var2);
                        case 327:
                            return var1;
                        case 329:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 9;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = {};
                            var0 = _closure1_slot12;
                            var0 = var0.INVALID_CHANNEL;
                            var2.errorCode = var0;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var10 = 'Channel is full';
                            var12 = var1;
                            var11 = var2;
                            var0 = new var12[var3](var11, var10, var9);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var1 = var2.bind(var4)(var1);
                return var1;
            case 223:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot12;
                var0 = var0.SELECT_VOICE_FORCE_REQUIRED;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = 'User is already joined to a voice channel.';
                var14 = var1;
                var13 = var2;
                var0 = new var14[var3](var13, var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var6.handler = var10;
    var1[var9] = var6;
    var9 = var3.GET_SELECTED_VOICE_CHANNEL;
    var6 = {};
    var10 = {};
    var12 = var11.ANY;
    var11 = var5[var8];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OAuth2Scopes;
    var13 = var11.RPC;
    var11 = new Array(2);
    var11[0] = var13;
    var13 = var5[var8];
    var13 = var4.bind(var0)(var13);
    var13 = var13.OAuth2Scopes;
    var13 = var13.RPC_VOICE_READ;
    var11[1] = var13;
    var10[var12] = var11;
    var6.scope = var10;
    var10 = function arg0() {
        _fun97979: for (var _fun97979_ip = 0;;) switch (_fun97979_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.socket;
                var3 = _closure1_slot8;
                var0 = var3.getVoiceChannelId;
                var6 = var0.bind(var3)();
                var0 = null;
                var3 = var0 != var6;
                var4 = null;
                if (!var3) {
                    _fun97979_ip = 51;
                    continue _fun97979
                }
            case 37:
                var5 = _closure1_slot5;
                var3 = var5.getChannel;
                var4 = var3.bind(var5)(var6);
            case 51:
                var3 = var0 != var4;
                var0 = null;
                if (!var3) {
                    _fun97979_ip = 138;
                    continue _fun97979
                }
            case 60:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 10;
                var2 = var8[var5];
                var6 = undefined;
                var3 = var7.bind(var6)(var2);
                var2 = var3.transformChannel;
                var5 = var8[var5];
                var7 = var7.bind(var6)(var5);
                var6 = var7.hasMessageReadPermission;
                var5 = var1.application;
                var5 = var5.id;
                var1 = var1.authorization;
                var1 = var1.scopes;
                var1 = var6.bind(var7)(var4, var5, var1);
                var0 = var2.bind(var3)(var4, var1);
            case 138:
                return var0;
        }
    };
    var6.handler = var10;
    var1[var9] = var6;
    var9 = var3.SELECT_TEXT_CHANNEL;
    var6 = {};
    var10 = var5[var8];
    var10 = var4.bind(var0)(var10);
    var10 = var10.OAuth2Scopes;
    var10 = var10.RPC;
    var6.scope = var10;
    var10 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
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
        var6 = var3.bind(var4)();
        var5 = var6.allow;
        var3 = null;
        var3 = var5.bind(var6)(var3);
        var0.channel_id = var3;
        var3 = var4.number;
        var5 = var3.bind(var4)();
        var4 = var5.min;
        var3 = 0;
        var5 = var4.bind(var5)(var3);
        var4 = var5.max;
        var3 = 60;
        var3 = var4.bind(var5)(var3);
        var0.timeout = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var10;
    var10 = function arg0() {
        _fun97981: for (var _fun97981_ip = 0;;) switch (_fun97981_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.server;
                var5 = var0.socket;
                var _closure2_slot0 = var5;
                var2 = var0.args;
                var0 = var2.channel_id;
                var _closure2_slot1 = var0;
                var4 = var2.timeout;
                var7 = undefined;
                if (!(var4 === var7)) {
                    _fun97981_ip = 50;
                    continue _fun97981
                }
            case 48:
                var4 = 0;
            case 50:
                if (var0) {
                    _fun97981_ip = 101;
                    continue _fun97981
                }
            case 53:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 16;
                var2 = var8[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.transitionTo;
                var0 = _closure1_slot10;
                var0 = var0.ME;
                var0 = var2.bind(var3)(var0);
                var0 = null;
                _fun97981_ip = 173;
                continue _fun97981;
            case 101:
                var3 = var6.storeWait;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var3.bind(var6)(var5, var2, var4);
                var3 = var4.catch;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var0 = _closure1_slot12;
                    var0 = var0.SELECT_CHANNEL_TIMED_OUT;
                    var2.errorCode = var0;
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var4 = 'Request to select text channel timed out.';
                    var6 = var1;
                    var5 = var2;
                    var0 = new var6[var3](var5, var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    _fun97984: for (var _fun97984_ip = 0;;) switch (_fun97984_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = null;
                            if (!(var0 != var6)) {
                                _fun97984_ip = 235;
                                continue _fun97984
                            }
                        case 12:
                            var1 = _closure1_slot4;
                            var0 = var6.type;
                            var8 = undefined;
                            var0 = var1.bind(var8)(var0);
                            if (var0) {
                                _fun97984_ip = 102;
                                continue _fun97984
                            }
                        case 34:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var0 = var2[var0];
                            var4 = var1.bind(var8)(var0);
                            var2 = {};
                            var0 = _closure1_slot12;
                            var0 = var0.INVALID_CHANNEL;
                            var2.errorCode = var0;
                            var0 = var4.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var11 = 'Channel is not a text channel';
                            var13 = var1;
                            var12 = var2;
                            var0 = new var13[var4](var12, var11, var10);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 102:
                            var0 = global;
                            var2 = var0.Promise;
                            var1 = var2.all;
                            var4 = var0.Promise;
                            var0 = var4.resolve;
                            var4 = var0.bind(var4)(var6);
                            var0 = new Array(2);
                            var0[0] = var4;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 10;
                            var4 = var9[var3];
                            var5 = var7.bind(var8)(var4);
                            var4 = var5.transformChannel;
                            var3 = var9[var3];
                            var9 = var7.bind(var8)(var3);
                            var8 = var9.hasMessageReadPermission;
                            var3 = _closure2_slot0;
                            var7 = var3.application;
                            var7 = var7.id;
                            var3 = var3.authorization;
                            var3 = var3.scopes;
                            var3 = var8.bind(var9)(var6, var7, var3);
                            var3 = var4.bind(var5)(var6, var3);
                            var0[1] = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 235:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var0 = _closure1_slot12;
                            var0 = var0.INVALID_CHANNEL;
                            var2.errorCode = var0;
                            var4 = _closure2_slot1;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = 'Invalid channel id: ';
                            var11 = var1.bind(var0)(var4);
                            var1 = var3.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var13 = var1;
                            var12 = var2;
                            var0 = new var13[var3](var12, var11, var10);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun97985: for (var _fun97985_ip = 0;;) switch (_fun97985_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                            var0 = var4().value;
                            var1 = var2;
                            var5 = undefined;
                            var3 = var1 === var5;
                            var1 = undefined;
                            if (var3) {
                                _fun97985_ip = 27;
                                continue _fun97985
                            }
                        case 24:
                            var1 = var0;
                        case 27:
                            var0 = undefined;
                            if (var3) {
                                _fun97985_ip = 57;
                                continue _fun97985
                            }
                        case 32:
                            var6 = var4().value;
                            var4 = var2;
                            var4 = var4 === var5;
                            var0 = undefined;
                            var3 = var4;
                            if (var4) {
                                _fun97985_ip = 57;
                                continue _fun97985
                            }
                        case 51:
                            var0 = var6;
                            var3 = var4;
                        case 57:
                            if (var3) {
                                _fun97985_ip = 63;
                                continue _fun97985
                            }
                        case 60:
                            var2.return();
                        case 63:
                            var2 = var0.guild_id;
                            if (!var2) {
                                _fun97985_ip = 171;
                                continue _fun97985
                            }
                        case 71:
                            var6 = _closure1_slot7;
                            var4 = var6.can;
                            var3 = _closure1_slot11;
                            var3 = var3.VIEW_CHANNEL;
                            var3 = var4.bind(var6)(var3, var1);
                            if (var3) {
                                _fun97985_ip = 171;
                                continue _fun97985
                            }
                        case 103:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 9;
                            var3 = var6[var3];
                            var6 = var4.bind(var5)(var3);
                            var4 = {};
                            var2 = _closure1_slot12;
                            var2 = var2.INVALID_CHANNEL;
                            var4.errorCode = var2;
                            var2 = var6.prototype;
                            var3 = Object.create(var2, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var8 = 'No permission to see channel';
                            var10 = var3;
                            var9 = var4;
                            var2 = new var10[var6](var9, var8, var7);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
                        case 171:
                            var2 = var0.guild_id;
                            if (var2) {
                                _fun97985_ip = 220;
                                continue _fun97985
                            }
                        case 182:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 14;
                            var2 = var6[var2];
                            var6 = var3.bind(var5)(var2);
                            var3 = var6.selectPrivateChannel;
                            var2 = var1.id;
                            var2 = var3.bind(var6)(var2);
                            _fun97985_ip = 277;
                            continue _fun97985;
                        case 220:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 16;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.replaceWith;
                            var6 = _closure1_slot10;
                            var5 = var6.CHANNEL;
                            var4 = var0.guild_id;
                            var1 = var1.id;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
                        case 277:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 173:
                return var0;
        }
    };
    var6.handler = var10;
    var1[var9] = var6;
    var6 = var3.CREATE_CHANNEL_INVITE;
    var3 = {};
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.OAuth2Scopes;
    var8 = var8.RPC;
    var3.scope = var8;
    var7 = function arg0() {
        var1 = arg0;
        var3 = var1.args;
        var5 = var3.channel_id;
        var _closure2_slot0 = var5;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2.channel_id = var1;
        var8 = {};
        var7 = var3;
        var6 = var2;
        var4 = copyDataProperties(var8, var7, var6);
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.createInvite;
        var1 = 'RPC';
        var2 = var2.bind(var3)(var5, var4, var1);
        var1 = var2.catch;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = {};
            var0 = _closure1_slot12;
            var0 = var0.INVALID_PERMISSIONS;
            var2.errorCode = var0;
            var5 = _closure2_slot0;
            var0 = global;
            var0 = var0.HermesInternal;
            var4 = var0.concat;
            var1 = 'Unable to generate an invite for ';
            var0 = '. Does this user have permissions?';
            var6 = var4.bind(var1)(var5, var0);
            var1 = var3.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var8 = var1;
            var7 = var2;
            var0 = new var8[var3](var7, var6, var5);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/channels.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1372, 1410, 3050, 1661, 3480, 3315, 660, 3298, 7889, 7894, 22, 12743, 7892, 4195, 4200, 1220, 5860, 2]);