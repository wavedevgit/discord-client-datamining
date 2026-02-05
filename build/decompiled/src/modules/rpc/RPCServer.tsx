// modules/rpc/RPCServer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TransportTypes;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var6 = var3.RPCCloseCodes;
    var _closure1_slot7 = var6;
    var6 = var3.RPCCommands;
    var _closure1_slot8 = var6;
    var6 = var3.RPCErrors;
    var _closure1_slot9 = var6;
    var3 = var3.RPCEvents;
    var _closure1_slot10 = var3;
    var3 = new Array(0);
    var _closure1_slot11 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var2 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = function() { // Environment: var1
                var0 = null;
                return var0;
            };
            var2.getCurrentUser = var3;
            var3 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
            var2.onConnect = var3;
            var1 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
            var2.onDisconnect = var1;
            var1 = {};
            var2.events = var1;
            var1 = {};
            var2.commands = var1;
            var1 = global;
            var3 = var1.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.sockets = var3;
            var3 = new Array(0);
            var2.subscriptions = var3;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.isSubscribedListeners = var1;
            var1 = arg0;
            var2.getJoi = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'registerTransport';
        var0.key = var1;
        var1 = function arg0() {
            var3 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var4 = var3.on;
            var2 = 'connect';
            var1 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.handleConnect;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var4.bind(var3)(var2, var1);
            var4 = var3.on;
            var2 = 'request';
            var1 = function(arg0, arg1) { // Environment: var0
                var3 = _closure3_slot0;
                var2 = var3.handleRequest;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.on;
            var1 = 'disconnect';
            var0 = function(arg0, arg1) { // Environment: var0
                var3 = _closure3_slot0;
                var2 = var3.handleDisconnect;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(18);
        var1[0] = var0;
        var0 = {};
        var5 = 'handleConnect';
        var0.key = var5;
        var5 = function arg0() {
            _fun98455: for (var _fun98455_ip = 0;;) switch (_fun98455_ip) {
                case 0:
                    var3 = arg0;
                    var7 = this;
                    var1 = var7.sockets;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var3);
                    var0 = var7.onConnect;
                    var0 = var0.bind(var7)(var3);
                    var6 = {};
                    var0 = var3.version;
                    var6.v = var0;
                    var0 = {};
                    var1 = global;
                    var2 = var1.window;
                    var2 = var2.GLOBAL_ENV;
                    var2 = var2.CDN_HOST;
                    var0.cdn_host = var2;
                    var1 = var1.window;
                    var1 = var1.GLOBAL_ENV;
                    var1 = var1.API_ENDPOINT;
                    var0.api_endpoint = var1;
                    var1 = 'production';
                    var0.environment = var1;
                    var6.config = var0;
                    var2 = var3.transport;
                    var1 = _closure1_slot5;
                    var1 = var1.IPC;
                    if (!(var2 === var1)) {
                        _fun98455_ip = 183;
                        continue _fun98455
                    }
                case 135:
                    var1 = var7.getCurrentUser;
                    var4 = var1.bind(var7)();
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun98455_ip = 227;
                        continue _fun98455
                    }
                case 150:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.bind(var2)(var4);
                    var6.user = var1;
                case 183:
                    var5 = var7.dispatch;
                    var1 = _closure1_slot8;
                    var10 = var1.DISPATCH;
                    var1 = _closure1_slot10;
                    var9 = var1.READY;
                    var11 = null;
                    var13 = var7;
                    var12 = var3;
                    var8 = var6;
                    var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                    var1 = undefined;
                    return var1;
                case 227:
                    var2 = var3.close;
                    var0 = _closure1_slot7;
                    var1 = var0.CLOSE_NORMAL;
                    var0 = 'User logged out';
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'handleDisconnect';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = arg0;
            var2 = this;
            var4 = var3.abortController;
            var1 = var4.abort;
            var0 = 'DISCONNECTED';
            var0 = var1.bind(var4)(var0);
            var0 = var2.removeSubscriptions;
            var0 = var0.bind(var2)(var3);
            var1 = var2.sockets;
            var0 = var1.delete;
            var0 = var0.bind(var1)(var3);
            var1 = var2.onDisconnect;
            var0 = arg1;
            var0 = var1.bind(var2)(var3, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'handleRequest';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = arg0;
            var _closure3_slot1 = var2;
            var2 = arg1;
            var _closure3_slot2 = var2;
            var _closure3_slot3 = var1;
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var2 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var4 = function(arg0) { // Environment: var0
                _fun98458: for (var _fun98458_ip = 0;;) switch (_fun98458_ip) {
                    case 0:
                        var1 = _closure3_slot2;
                        var2 = var1.nonce;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun98458_ip = 449;
                            continue _fun98458
                        }
                    case 22:
                        var2 = _closure3_slot2;
                        var3 = var2.nonce;
                        var2 = '';
                        if (!(var2 !== var3)) {
                            _fun98458_ip = 449;
                            continue _fun98458
                        }
                    case 43:
                        var2 = _closure3_slot2;
                        var7 = var2.cmd;
                        var2 = _closure3_slot0;
                        var2 = var2.commands;
                        var3 = var2[var7];
                        if (!(var1 != var3)) {
                            _fun98458_ip = 348;
                            continue _fun98458
                        }
                    case 74:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 8;
                        var4 = var4[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var4 = _closure3_slot1;
                        var4 = var4.authorization;
                        var5 = var4.scopes;
                        var4 = var3.scope;
                        var4 = var6.bind(var1)(var5, var4);
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        if (var4) {
                            _fun98458_ip = 198;
                            continue _fun98458
                        }
                    case 138:
                        var4 = 7;
                        var4 = var6[var4];
                        var10 = var5.bind(var1)(var4);
                        var9 = {};
                        var4 = _closure1_slot9;
                        var4 = var4.INVALID_PERMISSIONS;
                        var9.errorCode = var4;
                        var4 = var10.prototype;
                        var8 = Object.create(var4, {
                            constructor: {
                                value: var10
                            }
                        });
                        var11 = 'Not authenticated or invalid scope';
                        var13 = var8;
                        var12 = var9;
                        var4 = new var13[var10](var12, var11, var10);
                        var4 = var4 instanceof Object ? var4 : var8;
                        throw var4;
                    case 198:
                        var4 = 9;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.track;
                        var2 = _closure1_slot6;
                        var4 = var2.RPC_COMMAND_SENT;
                        var2 = {};
                        var2.command = var7;
                        var7 = var3.scope;
                        var8 = 'object';
                        var7 = typeof var7;
                        if (!(var8 !== var7)) {
                            _fun98458_ip = 257;
                            continue _fun98458
                        }
                    case 249:
                        var7 = var3.scope;
                        _fun98458_ip = 282;
                        continue _fun98458;
                    case 257:
                        var8 = global;
                        var10 = var8.JSON;
                        var9 = var10.stringify;
                        var8 = var3.scope;
                        var7 = var9.bind(var10)(var8);
                    case 282:
                        var2.scope = var7;
                        var7 = _closure3_slot1;
                        var8 = var7.application;
                        var8 = var8.id;
                        var2.application_id = var8;
                        var7 = var7.authorization;
                        var8 = var7.scopes;
                        var7 = var8.toString;
                        var7 = var7.bind(var8)();
                        var2.socket_scope = var7;
                        var2 = var5.bind(var6)(var4, var2);
                        var2 = arg0;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    case 348:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = {};
                        var1 = _closure1_slot9;
                        var1 = var1.INVALID_COMMAND;
                        var2.errorCode = var1;
                        var0 = _closure3_slot2;
                        var4 = var0.cmd;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = 'Invalid command: ';
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
                    case 449:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var0 = _closure1_slot9;
                        var0 = var0.INVALID_PAYLOAD;
                        var2.errorCode = var0;
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var11 = 'Payload requires a nonce';
                        var13 = var1;
                        var12 = var2;
                        var0 = new var13[var3](var12, var11, var10);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var3 = var1 instanceof Object ? var1 : var2;
            var2 = var3.then;
            var1 = function(arg0) { // Environment: var0
                var1 = arg0;
                var _closure4_slot0 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot2;
                    var2 = undefined;
                    var1 = function*(arg0, arg1) { // Environment: var0
                        var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                            _fun98462: for (var _fun98462_ip = 0;;) switch (_fun98462_ip) {
                                case 0:
                                    StartGenerator();
                                    var5 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun98462_ip = 203;
                                        continue _fun98462
                                    }
                                case 15:
                                    var _closure7_slot0 = var5;
                                    var1 = arg1;
                                    var _closure7_slot1 = var1;
                                    var1 = _closure4_slot0;
                                    var1 = var1.validation;
                                    var6 = null;
                                    if (!(var6 == var1)) {
                                        _fun98462_ip = 61;
                                        continue _fun98462
                                    }
                                case 45:
                                    var3 = _closure4_slot0;
                                    var1 = undefined;
                                    var1 = var5.bind(var1)(var3);
                                    _fun98462_ip = 195;
                                    continue _fun98462;
                                case 61:
                                    var5 = _closure3_slot3;
                                    var1 = var5.getJoi;
                                    var1 = var1.bind(var5)();
                                    SaveGenerator(address = 82);
                                case 80:
                                    return var1;
                                case 82:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun98462_ip = 200;
                                        continue _fun98462
                                    }
                                case 88:
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot1;
                                    var5 = 10;
                                    var5 = var8[var5];
                                    var8 = undefined;
                                    var7 = var7.bind(var8)(var5);
                                    var4 = _closure4_slot0;
                                    var5 = var4.validation;
                                    var6 = var6 != var5;
                                    var5 = 'command.validation must not be null';
                                    var5 = var7.bind(var8)(var6, var5);
                                    var6 = var1.validate;
                                    var3 = _closure3_slot2;
                                    var5 = var3.args;
                                    var3 = var4.validation;
                                    var11 = var3.bind(var4)(var1);
                                    var3 = {};
                                    var7 = false;
                                    var3.convert = var7;
                                    var9 = function(arg0) { // Environment: var2
                                        _fun98463: for (var _fun98463_ip = 0;;) switch (_fun98463_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = null;
                                                if (!(var1 != var0)) {
                                                    _fun98463_ip = 93;
                                                    continue _fun98463
                                                }
                                            case 9:
                                                var2 = _closure7_slot1;
                                                var5 = _closure1_slot0;
                                                var4 = _closure1_slot1;
                                                var1 = 7;
                                                var4 = var4[var1];
                                                var1 = undefined;
                                                var5 = var5.bind(var1)(var4);
                                                var4 = {};
                                                var3 = _closure1_slot9;
                                                var3 = var3.INVALID_PAYLOAD;
                                                var4.errorCode = var3;
                                                var6 = var0.message;
                                                var3 = var5.prototype;
                                                var3 = Object.create(var3, {
                                                    constructor: {
                                                        value: var5
                                                    }
                                                });
                                                var8 = var3;
                                                var7 = var4;
                                                var0 = new var8[var5](var7, var6, var5);
                                                var0 = var0 instanceof Object ? var0 : var3;
                                                var0 = var2.bind(var1)(var0);
                                                _fun98463_ip = 114;
                                                continue _fun98463;
                                            case 93:
                                                var2 = _closure7_slot0;
                                                var1 = _closure4_slot0;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 114:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var13 = var1;
                                    var12 = var5;
                                    var10 = var3;
                                    var2 = var13[var6](var12, var11, var10, var9, var8);
                                case 195:
                                    var2 = undefined;
                                    return var2;
                                case 200:
                                    return var1;
                                case 203:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure5_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure5_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var0 = undefined;
                var3 = var1.bind(var0)();
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg0) { // Environment: var0
                _fun98465: for (var _fun98465_ip = 0;;) switch (_fun98465_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.handler;
                        var0 = {};
                        var4 = _closure3_slot1;
                        var0.socket = var4;
                        var4 = _closure3_slot0;
                        var0.server = var4;
                        var4 = _closure3_slot2;
                        var5 = var4.cmd;
                        var0.cmd = var5;
                        var5 = var4.evt;
                        var0.evt = var5;
                        var5 = var4.nonce;
                        var0.nonce = var5;
                        var4 = var4.args;
                        var5 = null;
                        if (!(var5 == var4)) {
                            _fun98465_ip = 83;
                            continue _fun98465
                        }
                    case 81:
                        var4 = {};
                    case 83:
                        var0.args = var4;
                        var4 = function() {
                            var1 = _closure3_slot0;
                            var2 = var1.sockets;
                            var1 = var2.has;
                            var0 = _closure3_slot1;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0.isSocketConnected = var4;
                        var3 = _closure3_slot1;
                        var3 = var3.abortController;
                        var3 = var3.signal;
                        var0.signal = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg0) { // Environment: var0
                var6 = _closure3_slot0;
                var5 = var6.dispatch;
                var11 = _closure3_slot1;
                var0 = _closure3_slot2;
                var10 = var0.nonce;
                var9 = var0.cmd;
                var8 = null;
                var7 = arg0;
                var12 = var6;
                var0 = var12[var5](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.catch;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var8 = var0.code;
                var7 = var0.message;
                var4 = _closure3_slot0;
                var3 = var4.error;
                var11 = _closure3_slot1;
                var0 = _closure3_slot2;
                var10 = var0.nonce;
                var9 = var0.cmd;
                var12 = var4;
                var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'setCommandHandler';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = this;
            var2 = var0.commands;
            var1 = arg1;
            var0 = arg0;
            var2[var0] = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'setEventHandler';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = this;
            var2 = var0.events;
            var1 = arg1;
            var0 = arg0;
            var2[var0] = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'dispatch';
        var0.key = var5;
        var5 = function arg0() {
            _fun98471: for (var _fun98471_ip = 0;;) switch (_fun98471_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arguments[1];
                    var7 = arguments[2];
                    var5 = arguments[3];
                    var6 = arguments[4];
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun98471_ip = 23;
                        continue _fun98471
                    }
                case 21:
                    var4 = null;
                case 23:
                    if (!(var7 === var0)) {
                        _fun98471_ip = 40;
                        continue _fun98471
                    }
                case 27:
                    var1 = _closure1_slot8;
                    var7 = var1.DISPATCH;
                case 40:
                    if (!(var5 === var0)) {
                        _fun98471_ip = 46;
                        continue _fun98471
                    }
                case 44:
                    var5 = null;
                case 46:
                    if (!(var6 === var0)) {
                        _fun98471_ip = 52;
                        continue _fun98471
                    }
                case 50:
                    var6 = null;
                case 52:
                    var2 = var3.send;
                    var1 = {};
                    var1.cmd = var7;
                    var1.data = var6;
                    var1.evt = var5;
                    var1.nonce = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'error';
        var0.key = var5;
        var5 = function arg0() {
            _fun98472: for (var _fun98472_ip = 0;;) switch (_fun98472_ip) {
                case 0:
                    var7 = arguments[1];
                    var6 = arguments[2];
                    var8 = arguments[3];
                    var1 = arguments[4];
                    var5 = this;
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun98472_ip = 23;
                        continue _fun98472
                    }
                case 21:
                    var7 = null;
                case 23:
                    if (!(var6 === var0)) {
                        _fun98472_ip = 40;
                        continue _fun98472
                    }
                case 27:
                    var2 = _closure1_slot8;
                    var6 = var2.DISPATCH;
                case 40:
                    if (!(var8 === var0)) {
                        _fun98472_ip = 57;
                        continue _fun98472
                    }
                case 44:
                    var2 = _closure1_slot9;
                    var8 = var2.UNKNOWN_ERROR;
                case 57:
                    if (!(var1 === var0)) {
                        _fun98472_ip = 67;
                        continue _fun98472
                    }
                case 61:
                    var1 = 'Unknown Error';
                case 67:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var3 = 9;
                    var3 = var9[var3];
                    var10 = var4.bind(var0)(var3);
                    var9 = var10.track;
                    var3 = _closure1_slot6;
                    var4 = var3.RPC_SERVER_ERROR_CAUGHT;
                    var3 = {};
                    var3.command = var6;
                    var3.code = var8;
                    var3.message = var1;
                    var3 = var9.bind(var10)(var4, var3);
                    var4 = var5.dispatch;
                    var2 = _closure1_slot10;
                    var13 = var2.ERROR;
                    var2 = {};
                    var2.code = var8;
                    var2.message = var1;
                    var16 = arg0;
                    var17 = var5;
                    var15 = var7;
                    var14 = var6;
                    var12 = var2;
                    var1 = var17[var4](var16, var15, var14, var13, var12, var11);
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'listenIsSubscribed';
        var0.key = var5;
        var5 = function arg0() {
            var3 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var3;
            var2 = var1.isSubscribedListeners;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var2 = var1.isSubscribedListeners;
                var1 = var2.delete;
                var0 = _closure3_slot1;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'dispatchIsSubscribedUpdate';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0.isSubscribedListeners;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'isSubscribed';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = this;
            var2 = var1.subscriptions;
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                _fun98478: for (var _fun98478_ip = 0;;) switch (_fun98478_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = var2.socket;
                        var0 = var0.application;
                        var3 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var3 === var0;
                        if (!var0) {
                            _fun98478_ip = 47;
                            continue _fun98478
                        }
                    case 33:
                        var2 = var2.evt;
                        var1 = _closure3_slot1;
                        var0 = var2 === var1;
                    case 47:
                        return var0;
                }
            };
            var1 = var1.bind(var2)(var0);
            var0 = undefined;
            var0 = var0 !== var1;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'getSubscription';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = arg2;
            var _closure3_slot2 = var1;
            var1 = this;
            var2 = var1.subscriptions;
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                _fun98480: for (var _fun98480_ip = 0;;) switch (_fun98480_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = var2.socket;
                        var0 = _closure3_slot0;
                        var0 = var3 === var0;
                        if (!var0) {
                            _fun98480_ip = 37;
                            continue _fun98480
                        }
                    case 23:
                        var4 = var2.evt;
                        var3 = _closure3_slot1;
                        var0 = var4 === var3;
                    case 37:
                        if (!var0) {
                            _fun98480_ip = 87;
                            continue _fun98480
                        }
                    case 40:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 5;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.isEqual;
                        var2 = var2.args;
                        var1 = _closure3_slot2;
                        var0 = var3.bind(var4)(var2, var1);
                    case 87:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'addSubscription';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun98481: for (var _fun98481_ip = 0;;) switch (_fun98481_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var5 = arg2;
                    var10 = arguments[3];
                    var2 = this;
                    var0 = undefined;
                    if (!(var10 === var0)) {
                        _fun98481_ip = 23;
                        continue _fun98481
                    }
                case 21:
                    var10 = null;
                case 23:
                    var4 = var2.dispatch;
                    var3 = var4.bind;
                    var1 = _closure1_slot8;
                    var14 = var1.DISPATCH;
                    var12 = null;
                    var18 = var4;
                    var17 = var2;
                    var16 = var7;
                    var15 = null;
                    var13 = var6;
                    var11 = var18[var3](var17, var16, var15, var14, var13, var12);
                    var1 = var2.getSubscription;
                    var1 = var1.bind(var2)(var7, var6, var5);
                    if (!(var12 == var1)) {
                        _fun98481_ip = 163;
                        continue _fun98481
                    }
                case 85:
                    var4 = var2.subscriptions;
                    var3 = var4.push;
                    var1 = {};
                    var1.update = var10;
                    var1.dispatch = var11;
                    var8 = null;
                    if (!var10) {
                        _fun98481_ip = 128;
                        continue _fun98481
                    }
                case 112:
                    var9 = {};
                    var9.prevState = var12;
                    var9.dispatch = var11;
                    var8 = var10.bind(var0)(var9);
                case 128:
                    var1.prevState = var8;
                    var1.socket = var7;
                    var1.evt = var6;
                    var1.args = var5;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.dispatchIsSubscribedUpdate;
                    var1 = var1.bind(var2)();
                case 163:
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'removeSubscription';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var2 = this;
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var0 = arg2;
            var _closure3_slot2 = var0;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 5;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.remove;
            var3 = var2.subscriptions;
            var1 = function(arg0) { // Environment: var1
                _fun98483: for (var _fun98483_ip = 0;;) switch (_fun98483_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = var2.socket;
                        var0 = _closure3_slot0;
                        var0 = var3 === var0;
                        if (!var0) {
                            _fun98483_ip = 37;
                            continue _fun98483
                        }
                    case 23:
                        var4 = var2.evt;
                        var3 = _closure3_slot1;
                        var0 = var4 === var3;
                    case 37:
                        if (!var0) {
                            _fun98483_ip = 87;
                            continue _fun98483
                        }
                    case 40:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 5;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.isEqual;
                        var2 = var2.args;
                        var1 = _closure3_slot2;
                        var0 = var3.bind(var4)(var2, var1);
                    case 87:
                        return var0;
                }
            };
            var1 = var4.bind(var5)(var3, var1);
            var1 = var2.dispatchIsSubscribedUpdate;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'removeSubscriptions';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 5;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.remove;
            var3 = var2.subscriptions;
            var1 = function(arg0) { // Environment: var1
                var0 = arg0;
                var1 = var0.socket;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var1 = var4.bind(var5)(var3, var1);
            var1 = var2.dispatchIsSubscribedUpdate;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'dispatchToSubscriptions';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun98486: for (var _fun98486_ip = 0;;) switch (_fun98486_ip) {
                case 0:
                    var5 = arg3;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = arg0;
                    var _closure3_slot1 = var2;
                    var2 = arg1;
                    var _closure3_slot2 = var2;
                    var2 = arg2;
                    var _closure3_slot3 = var2;
                    var2 = null;
                    var2 = var2 != var5;
                    if (!var2) {
                        _fun98486_ip = 50;
                        continue _fun98486
                    }
                case 42:
                    var3 = '';
                    var2 = var3 !== var5;
                case 50:
                    if (!var2) {
                        _fun98486_ip = 113;
                        continue _fun98486
                    }
                case 53:
                    var6 = _closure1_slot11;
                    var3 = var6.includes;
                    var3 = var3.bind(var6)(var5);
                    var6 = !var3;
                    var3 = !var6;
                    if (!var6) {
                        _fun98486_ip = 110;
                        continue _fun98486
                    }
                case 79:
                    var6 = _closure1_slot11;
                    var4 = var6.unshift;
                    var4 = var4.bind(var6)(var5);
                    var5 = var6.splice;
                    var4 = 50;
                    var4 = var5.bind(var6)(var4);
                    var3 = false;
                case 110:
                    var2 = var3;
                case 113:
                    if (var2) {
                        _fun98486_ip = 139;
                        continue _fun98486
                    }
                case 116:
                    var2 = var1.subscriptions;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun98487: for (var _fun98487_ip = 0;;) switch (_fun98487_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = var1.evt;
                                var2 = _closure3_slot1;
                                if (!(var3 === var2)) {
                                    _fun98487_ip = 252;
                                    continue _fun98487
                                }
                            case 23:
                                var2 = _closure3_slot2;
                                var3 = 'function';
                                var2 = typeof var2;
                                var2 = var3 === var2;
                                if (!var2) {
                                    _fun98487_ip = 55;
                                    continue _fun98487
                                }
                            case 41:
                                var5 = _closure3_slot2;
                                var4 = undefined;
                                var4 = var5.bind(var4)(var1);
                                var2 = !var4;
                            case 55:
                                if (var2) {
                                    _fun98487_ip = 176;
                                    continue _fun98487
                                }
                            case 58:
                                var4 = _closure3_slot2;
                                var5 = 'object';
                                var4 = typeof var4;
                                var4 = var5 === var4;
                                if (!var4) {
                                    _fun98487_ip = 173;
                                    continue _fun98487
                                }
                            case 76:
                                var8 = _closure3_slot2;
                                var11 = var1.args;
                                var5 = null;
                                if (!(var5 == var11)) {
                                    _fun98487_ip = 94;
                                    continue _fun98487
                                }
                            case 92:
                                var11 = {};
                            case 94:
                                var10 = _closure1_slot0;
                                var12 = _closure1_slot1;
                                var5 = 5;
                                var6 = var12[var5];
                                var9 = undefined;
                                var7 = var10.bind(var9)(var6);
                                var6 = var7.isEqual;
                                var5 = var12[var5];
                                var10 = var10.bind(var9)(var5);
                                var9 = var10.pick;
                                var5 = global;
                                var12 = var5.Object;
                                var5 = var12.keys;
                                var5 = var5.bind(var12)(var8);
                                var5 = var9.bind(var10)(var11, var5);
                                var5 = var6.bind(var7)(var8, var5);
                                var4 = !var5;
                            case 173:
                                var2 = var4;
                            case 176:
                                if (var2) {
                                    _fun98487_ip = 252;
                                    continue _fun98487
                                }
                            case 179:
                                var2 = _closure3_slot3;
                                var2 = typeof var2;
                                if (!(var3 === var2)) {
                                    _fun98487_ip = 205;
                                    continue _fun98487
                                }
                            case 190:
                                var3 = _closure3_slot3;
                                var2 = undefined;
                                var2 = var3.bind(var2)(var1);
                                _closure3_slot3 = var2;
                            case 205:
                                var6 = _closure3_slot0;
                                var5 = var6.dispatch;
                                var17 = var1.socket;
                                var2 = _closure1_slot8;
                                var15 = var2.DISPATCH;
                                var14 = var1.evt;
                                var13 = _closure3_slot3;
                                var16 = null;
                                var18 = var6;
                                var0 = var18[var5](var17, var16, var15, var14, var13, var12);
                            case 252:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 139:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'updateSubscriptions';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0.subscriptions;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun98489: for (var _fun98489_ip = 0;;) switch (_fun98489_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.update;
                        if (!var0) {
                            _fun98489_ip = 29;
                            continue _fun98489
                        }
                    case 12:
                        var0 = var1.update;
                        var0 = var0.bind(var1)(var1);
                        var1.prevState = var0;
                    case 29:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'storeWait';
        var0.key = var5;
        var4 = function arg0, arg1, arg2() {
            _fun98490: for (var _fun98490_ip = 0;;) switch (_fun98490_ip) {
                case 0:
                    var1 = arg1;
                    var3 = arg2;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var2 = arg0;
                    var _closure3_slot1 = var2;
                    var _closure3_slot2 = var1;
                    var _closure3_slot3 = var3;
                    var4 = undefined;
                    var2 = var1.bind(var4)();
                    if (var2) {
                        _fun98490_ip = 147;
                        continue _fun98490
                    }
                case 39:
                    var1 = 0;
                    if (!(var1 !== var3)) {
                        _fun98490_ip = 147;
                        continue _fun98490
                    }
                case 45:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 5;
                    var1 = var5[var1];
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.uniqueId;
                    var1 = var1.bind(var3)();
                    var _closure3_slot4 = var1;
                    var1 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.removeSubscription;
                        var2 = _closure3_slot1;
                        var1 = {};
                        var0 = _closure3_slot4;
                        var1.uniqueId = var0;
                        var0 = 'RPC_STORE_WAIT';
                        var0 = var3.bind(var4)(var2, var0, var1);
                        return var0;
                    };
                    var _closure3_slot5 = var1;
                    var1 = global;
                    var4 = var1.Promise;
                    var1 = var4.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var6 = function(arg0, arg1) { // Environment: var0
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = arg1;
                        var _closure4_slot1 = var0;
                        var0 = global;
                        var5 = var0.setTimeout;
                        var4 = _closure3_slot3;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 11;
                        var3 = var3[var0];
                        var0 = undefined;
                        var3 = var6.bind(var0)(var3);
                        var3 = var3.Millis;
                        var3 = var3.SECOND;
                        var4 = var4 * var3;
                        var3 = function() { // Environment: var1
                            var1 = _closure3_slot5;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var2 = _closure4_slot1;
                            var1 = global;
                            var4 = var1.Error;
                            var1 = var4.prototype;
                            var3 = Object.create(var1, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var5 = 'timeout';
                            var6 = var3;
                            var1 = new var6[var4](var5, var4);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var3 = var5.bind(var0)(var3, var4);
                        var _closure4_slot2 = var3;
                        var6 = _closure3_slot0;
                        var5 = var6.addSubscription;
                        var10 = _closure3_slot1;
                        var3 = {};
                        var2 = _closure3_slot4;
                        var3.uniqueId = var2;
                        var9 = 'RPC_STORE_WAIT';
                        var7 = function() { // Environment: var1
                            _fun98494: for (var _fun98494_ip = 0;;) switch (_fun98494_ip) {
                                case 0:
                                    var1 = _closure3_slot2;
                                    var0 = undefined;
                                    var2 = var1.bind(var0)();
                                    if (!var2) {
                                        _fun98494_ip = 45;
                                        continue _fun98494
                                    }
                                case 16:
                                    var1 = global;
                                    var4 = var1.clearTimeout;
                                    var3 = _closure4_slot2;
                                    var3 = var4.bind(var0)(var3);
                                    var1 = _closure4_slot0;
                                    var1 = var1.bind(var0)(var2);
                                case 45:
                                    return var0;
                            }
                        };
                        var11 = var6;
                        var8 = var3;
                        var1 = var11[var5](var10, var9, var8, var7, var6);
                        return var0;
                    };
                    var7 = var3;
                    var1 = new var7[var4](var6, var5);
                    var3 = var1 instanceof Object ? var1 : var3;
                    var1 = var3.then;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot5;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        var0 = arg0;
                        return var0;
                    };
                    var0 = var1.bind(var3)(var0);
                    return var0;
                case 147:
                    var0 = global;
                    var1 = var0.Promise;
                    var0 = var1.resolve;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var0.value = var4;
        var1[17] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/RPCServer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 3356, 660, 22, 7955, 7949, 12838, 795, 44, 667, 2]);