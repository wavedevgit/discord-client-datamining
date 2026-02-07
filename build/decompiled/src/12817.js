// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var13;
    var0 = function arg0, arg1() {
        _fun98112: for (var _fun98112_ip = 0;;) switch (_fun98112_ip) {
            case 0:
                var1 = global;
                var2 = var1.WeakMap;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun98112_ip = 81;
                    continue _fun98112
                }
            case 21:
                var2 = var1.WeakMap;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var3;
                var2 = new var6[var2](var5);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot0 = var2;
                var1 = var1.WeakMap;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var2;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot1 = var1;
            case 81:
                var3 = function arg0, arg1() {
                    _fun98113: for (var _fun98113_ip = 0;;) switch (_fun98113_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            if (var2) {
                                _fun98113_ip = 23;
                                continue _fun98113
                            }
                        case 9:
                            if (!var3) {
                                _fun98113_ip = 23;
                                continue _fun98113
                            }
                        case 12:
                            var0 = var3.__esModule;
                            if (!var0) {
                                _fun98113_ip = 23;
                                continue _fun98113
                            }
                        case 21:
                            return var3;
                        case 23:
                            var1 = null;
                            var0 = Object.create(var1);
                            var0.default = var3;
                            if (!(var1 !== var3)) {
                                _fun98113_ip = 274;
                                continue _fun98113
                            }
                        case 39:
                            var4 = typeof var3;
                            var1 = 'object';
                            if (!(var1 !== var4)) {
                                _fun98113_ip = 61;
                                continue _fun98113
                            }
                        case 50:
                            var1 = 'function';
                            if (!(var1 === var4)) {
                                _fun98113_ip = 274;
                                continue _fun98113
                            }
                        case 61:
                            if (var2) {
                                _fun98113_ip = 73;
                                continue _fun98113
                            }
                        case 67:
                            var2 = _closure2_slot0;
                            _fun98113_ip = 77;
                            continue _fun98113;
                        case 73:
                            var2 = _closure2_slot1;
                        case 77:
                            if (!var2) {
                                _fun98113_ip = 107;
                                continue _fun98113
                            }
                        case 80:
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            if (var1) {
                                _fun98113_ip = 262;
                                continue _fun98113
                            }
                        case 96:
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3, var0);
                        case 107:
                            var11 = var3;
                            var7 = undefined;
                            var6 = global;
                            var5 = 'default';
                            var4 = var2;
                            var1 = undefined;
                            for (var8 in var11)
                                case 134: {
                                    case 143: var15 = var8;
                                    var13 = var5 !== var15;
                                    if (!var13) {
                                        _fun98113_ip = 172;
                                        continue _fun98113
                                    }
                                    case 153: var14 = {};
                                    var16 = var14.hasOwnProperty;
                                    var14 = var16.call;
                                    var13 = var14.bind(var16)(var3, var15);
                                    case 172: if (!var13) {
                                        _fun98113_ip = 134;
                                        continue _fun98113
                                    }
                                    case 175: var13 = var6.Object;
                                    var14 = var13.defineProperty;
                                    var13 = var14;
                                    if (!var13) {
                                        _fun98113_ip = 210;
                                        continue _fun98113
                                    }
                                    case 192: var17 = var6.Object;
                                    var16 = var17.getOwnPropertyDescriptor;
                                    var13 = var16.bind(var17)(var3, var15);
                                    case 210: if (!var13) {
                                        _fun98113_ip = 229;
                                        continue _fun98113
                                    }
                                    case 213: var16 = var13.get;
                                    if (var16) {
                                        _fun98113_ip = 245;
                                        continue _fun98113
                                    }
                                    case 221: var16 = var13.set;
                                    if (var16) {
                                        _fun98113_ip = 245;
                                        continue _fun98113
                                    }
                                    case 229: var16 = var3[var15];
                                    var0[var15] = var16;
                                    var4 = var14;
                                    var1 = var13;
                                    _fun98113_ip = 134;
                                    continue _fun98113;
                                    case 245: var15 = var14.bind(var7)(var0, var15, var13);
                                    var4 = var14;
                                    var1 = var13;
                                    _fun98113_ip = 134;
                                    continue _fun98113;
                                }
                        case 260:
                            return var0;
                        case 262:
                            var1 = var2.get;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        case 274:
                            return var0;
                    }
                };
                _closure1_slot11 = var3;
                var2 = undefined;
                var1 = arg0;
                var0 = arg1;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var11 = function arg0() {
        _fun98114: for (var _fun98114_ip = 0;;) switch (_fun98114_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun98114_ip = 18;
                    continue _fun98114
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun98114_ip = 27;
                    continue _fun98114
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = function() {
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = '';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = 0;
    var1 = var13[var0];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var13[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var4 = global;
    var8 = var4.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6.value = var1;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var2, var5, var6);
    var2.ArgType = var0;
    var2.ReactotronImpl = var0;
    var8 = var4.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var6.enumerable = var1;
    var5 = function() {
        var0 = _closure1_slot5;
        var0 = var0.assertHasLoggerPlugin;
        return var0;
    };
    var6.get = var5;
    var5 = 'assertHasLoggerPlugin';
    var5 = var7.bind(var8)(var2, var5, var6);
    var8 = var4.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var6.enumerable = var1;
    var5 = function() {
        var0 = _closure1_slot6;
        var0 = var0.assertHasStateResponsePlugin;
        return var0;
    };
    var6.get = var5;
    var5 = 'assertHasStateResponsePlugin';
    var5 = var7.bind(var8)(var2, var5, var6);
    var2.corePlugins = var0;
    var5 = function arg0() {
        var0 = _closure1_slot10;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var4 = var1;
        var0 = new var4[var0](var3);
        var2 = var0 instanceof Object ? var0 : var1;
        var1 = var2.configure;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.createClient = var5;
    var6 = var4.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var4.enumerable = var1;
    var1 = function() {
        var0 = _closure1_slot6;
        var0 = var0.hasStateResponsePlugin;
        return var0;
    };
    var4.get = var1;
    var1 = 'hasStateResponsePlugin';
    var1 = var5.bind(var6)(var2, var1, var4);
    var1 = 2;
    var1 = var13[var1];
    var1 = var12.bind(var0)(var1);
    var1 = var11.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var4 = _closure1_slot11;
    var1 = 3;
    var1 = var13[var1];
    var1 = var12.bind(var0)(var1);
    var9 = var4.bind(var0)(var1);
    var _closure1_slot5 = var9;
    var1 = 4;
    var1 = var13[var1];
    var1 = var12.bind(var0)(var1);
    var1 = var11.bind(var0)(var1);
    var4 = 5;
    var4 = var13[var4];
    var4 = var12.bind(var0)(var4);
    var8 = var11.bind(var0)(var4);
    var5 = _closure1_slot11;
    var4 = 6;
    var4 = var13[var4];
    var4 = var12.bind(var0)(var4);
    var7 = var5.bind(var0)(var4);
    var _closure1_slot6 = var7;
    var4 = 7;
    var4 = var13[var4];
    var4 = var12.bind(var0)(var4);
    var6 = var11.bind(var0)(var4);
    var4 = 8;
    var4 = var13[var4];
    var4 = var12.bind(var0)(var4);
    var5 = var11.bind(var0)(var4);
    var4 = 9;
    var4 = var13[var4];
    var4 = var12.bind(var0)(var4);
    var4 = var11.bind(var0)(var4);
    var10 = 10;
    var10 = var13[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var11.bind(var0)(var10);
    var _closure1_slot7 = var10;
    var10 = {};
    var11 = 'string';
    var10.String = var11;
    var2.ArgType = var10;
    var1 = var1.default;
    var10 = var1.bind(var0)();
    var1 = new Array(7);
    var1[0] = var10;
    var9 = var9.default;
    var9 = var9.bind(var0)();
    var1[1] = var9;
    var8 = var8.default;
    var8 = var8.bind(var0)();
    var1[2] = var8;
    var7 = var7.default;
    var7 = var7.bind(var0)();
    var1[3] = var7;
    var6 = var6.default;
    var6 = var6.bind(var0)();
    var1[4] = var6;
    var5 = var5.default;
    var5 = var5.bind(var0)();
    var1[5] = var5;
    var4 = var4.default;
    var4 = var4.bind(var0)();
    var1[6] = var4;
    var2.corePlugins = var1;
    var _closure1_slot8 = var1;
    var1 = ['configure', 'connect', 'connected', 'options', 'plugins', 'send', 'socket', 'startTimer', 'use'];
    var _closure1_slot9 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = false;
            var2.connected = var3;
            var4 = null;
            var2.socket = var4;
            var4 = new Array(0);
            var2.plugins = var4;
            var4 = new Array(0);
            var2.sendQueue = var4;
            var2.isReady = var3;
            var3 = global;
            var3 = var3.Date;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.lastMessageDate = var3;
            var3 = new Array(0);
            var2.customCommands = var3;
            var3 = 1;
            var2.customCommandLatestId = var3;
            var3 = function() { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 11;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.start;
                var0 = var0.bind(var1)();
                return var0;
            };
            var2.startTimer = var3;
            var1 = function(arg0, arg1, arg2) { // Environment: var1
                _fun98123: for (var _fun98123_ip = 0;;) switch (_fun98123_ip) {
                    case 0:
                        var0 = undefined;
                        var3 = undefined;
                        var1 = global;
                        var2 = var1.Date;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var2
                            }
                        });
                        var11 = var4;
                        var2 = new var11[var2](var10);
                        var8 = var2 instanceof Object ? var2 : var4;
                        var2 = var8.getTime;
                        var5 = var2.bind(var8)();
                        var4 = _closure3_slot0;
                        var6 = var4.lastMessageDate;
                        var4 = var6.getTime;
                        var4 = var4.bind(var6)();
                        var5 = var5 - var4;
                        var4 = 0;
                        if (!(var5 < var4)) {
                            _fun98123_ip = 77;
                            continue _fun98123
                        }
                    case 75:
                        var5 = 0;
                    case 77:
                        var4 = _closure3_slot0;
                        var4.lastMessageDate = var8;
                        var7 = {};
                        var6 = arg0;
                        var7.type = var6;
                        var6 = arg1;
                        var7.payload = var6;
                        var6 = arg2;
                        var6 = !var6;
                        var6 = !var6;
                        var7.important = var6;
                        var6 = var8.toISOString;
                        var6 = var6.bind(var8)();
                        var7.date = var6;
                        var7.deltaTime = var5;
                        var5 = _closure1_slot7;
                        var6 = var5.default;
                        var5 = var4.options;
                        var5 = var5.proxyHack;
                        var3 = var6.bind(var0)(var7, var5);
                        var4 = var4.isReady;
                        if (var4) {
                            _fun98123_ip = 201;
                            continue _fun98123
                        }
                    case 176:
                        var4 = _closure3_slot0;
                        var6 = var4.sendQueue;
                        var5 = var6.push;
                        var4 = var3;
                        var4 = var5.bind(var6)(var4);
                        _fun98123_ip = 260;
                        continue _fun98123;
                    case 201: // try_start_0
                        var4 = _closure3_slot0;
                        var5 = var4.socket;
                        var4 = var5.send;
                        var3 = var4.bind(var5)(var3);
                    case 222: // try_end0
                        _fun98123_ip = 260;
                        continue _fun98123;
                    case 224: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure3_slot0;
                        var2 = false;
                        var3.isReady = var2;
                        var3 = var1.console;
                        var2 = var3.log;
                        var1 = 'An error occurred communicating with reactotron. Please reload your app';
                        var1 = var2.bind(var3)(var1);
                    case 260:
                        return var0;
                }
            };
            var2.send = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'configure';
        var0.key = var1;
        var1 = function arg0() {
            _fun98124: for (var _fun98124_ip = 0;;) switch (_fun98124_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = global;
                    var8 = var2.Object;
                    var7 = var8.assign;
                    var6 = {
                        'createSocket': null,
                        'host': 'localhost',
                        'port': 9090,
                        'name': 'reactotron-core-client',
                        'secure': false,
                        'plugins': null,
                        'safeRecursion': true
                    };
                    var3 = _closure1_slot8;
                    var6.plugins = var3;
                    var3 = function() {
                        var0 = null;
                        return var0;
                    };
                    var6.onCommand = var3;
                    var3 = function() {
                        var0 = null;
                        return var0;
                    };
                    var6.onConnect = var3;
                    var3 = function() {
                        var0 = null;
                        return var0;
                    };
                    var6.onDisconnect = var3;
                    var5 = var0.options;
                    var3 = arg0;
                    var3 = var7.bind(var8)(var6, var5, var3);
                    var4 = _closure1_slot4;
                    var5 = var4.default;
                    var4 = undefined;
                    var4 = var5.bind(var4)(var3);
                    var0.options = var3;
                    var4 = var2.Array;
                    var3 = var4.isArray;
                    var2 = var0.options;
                    var2 = var2.plugins;
                    var2 = var3.bind(var4)(var2);
                    if (!var2) {
                        _fun98124_ip = 180;
                        continue _fun98124
                    }
                case 152:
                    var2 = var0.options;
                    var3 = var2.plugins;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.use;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 180:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'close';
        var0.key = var5;
        var5 = function() {
            _fun98129: for (var _fun98129_ip = 0;;) switch (_fun98129_ip) {
                case 0:
                    var0 = this;
                    var1 = false;
                    var0.connected = var1;
                    var1 = var0.socket;
                    if (!var1) {
                        _fun98129_ip = 32;
                        continue _fun98129
                    }
                case 20:
                    var2 = var0.socket;
                    var1 = var2.close;
                case 32:
                    if (!var1) {
                        _fun98129_ip = 51;
                        continue _fun98129
                    }
                case 35:
                    var1 = var0.socket;
                    var0 = var1.close;
                    var0 = var0.bind(var1)();
                case 51:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'connect';
        var0.key = var5;
        var5 = function() {
            _fun98130: for (var _fun98130_ip = 0;;) switch (_fun98130_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var1 = true;
                    var0.connected = var1;
                    var5 = var0.options;
                    var4 = var5.createSocket;
                    var1 = var5.secure;
                    var10 = var5.host;
                    var3 = var5.environment;
                    var _closure3_slot1 = var3;
                    var9 = var5.port;
                    var3 = var5.name;
                    var _closure3_slot2 = var3;
                    var6 = var5.client;
                    var3 = undefined;
                    if (!(var3 === var6)) {
                        _fun98130_ip = 79;
                        continue _fun98130
                    }
                case 77:
                    var6 = {};
                case 79:
                    var _closure3_slot3 = var6;
                    var5 = var5.getClientId;
                    var _closure3_slot4 = var5;
                    var5 = var0.options;
                    var6 = var5.onCommand;
                    var _closure3_slot5 = var6;
                    var6 = var5.onConnect;
                    var _closure3_slot6 = var6;
                    var5 = var5.onDisconnect;
                    var _closure3_slot7 = var5;
                    var8 = 'ws';
                    if (!var1) {
                        _fun98130_ip = 141;
                        continue _fun98130
                    }
                case 135:
                    var8 = 'wss';
                case 141:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var16 = '';
                    var14 = '://';
                    var12 = ':';
                    var15 = var8;
                    var13 = var10;
                    var11 = var9;
                    var1 = var16[var7](var15, var14, var13, var12, var11, var10);
                    var1 = var4.bind(var3)(var1);
                    var6 = function() {
                        _fun98131: for (var _fun98131_ip = 0;;) switch (_fun98131_ip) {
                            case 0:
                                var2 = _closure3_slot6;
                                if (!var2) {
                                    _fun98131_ip = 22;
                                    continue _fun98131
                                }
                            case 12:
                                var3 = _closure3_slot6;
                                var2 = undefined;
                                var2 = var3.bind(var2)();
                            case 22:
                                var2 = _closure3_slot0;
                                var4 = var2.plugins;
                                var3 = var4.forEach;
                                var2 = function(arg0) { // Environment: var1
                                    _fun98132: for (var _fun98132_ip = 0;;) switch (_fun98132_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var0 = var2.onConnect;
                                            if (!var0) {
                                                _fun98132_ip = 22;
                                                continue _fun98132
                                            }
                                        case 12:
                                            var1 = var2.onConnect;
                                            var0 = var1.bind(var2)();
                                        case 22:
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure3_slot4;
                                if (var3) {
                                    _fun98131_ip = 63;
                                    continue _fun98131
                                }
                            case 56:
                                var3 = _closure1_slot12;
                            case 63:
                                var2 = _closure3_slot2;
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var1
                                    _fun98133: for (var _fun98133_ip = 0;;) switch (_fun98133_ip) {
                                        case 0:
                                            var0 = _closure3_slot0;
                                            var1 = true;
                                            var0.isReady = var1;
                                            var4 = var0.send;
                                            var1 = global;
                                            var7 = var1.Object;
                                            var6 = var7.assign;
                                            var5 = {};
                                            var1 = _closure3_slot1;
                                            var5.environment = var1;
                                            var2 = _closure3_slot3;
                                            var1 = {};
                                            var8 = _closure3_slot2;
                                            var1.name = var8;
                                            var8 = arg0;
                                            var1.clientId = var8;
                                            var8 = 'REACTOTRON_CORE_CLIENT_VERSION';
                                            var1.reactotronCoreClientVersion = var8;
                                            var2 = var6.bind(var7)(var5, var2, var1);
                                            var1 = 'client.intro';
                                            var1 = var4.bind(var0)(var1, var2);
                                            var0 = var0.sendQueue;
                                            var0 = var0.length;
                                            var2 = 0;
                                            var1 = 1;
                                            if (!(var0 > var2)) {
                                                _fun98133_ip = 187;
                                                continue _fun98133
                                            }
                                        case 119:
                                            var0 = _closure3_slot0;
                                            var4 = var0.sendQueue;
                                            var6 = var4[var2];
                                            var5 = var0.sendQueue;
                                            var4 = var5.slice;
                                            var4 = var4.bind(var5)(var1);
                                            var0.sendQueue = var4;
                                            var5 = var0.socket;
                                            var4 = var5.send;
                                            var4 = var4.bind(var5)(var6);
                                            var0 = var0.sendQueue;
                                            var0 = var0.length;
                                            if (var0 > var2) {
                                                _fun98133_ip = 119;
                                                continue _fun98133
                                            }
                                        case 187:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var5 = function() {
                        _fun98134: for (var _fun98134_ip = 0;;) switch (_fun98134_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = false;
                                var2.isReady = var1;
                                var1 = _closure3_slot7;
                                if (!var1) {
                                    _fun98134_ip = 32;
                                    continue _fun98134
                                }
                            case 22:
                                var2 = _closure3_slot7;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                            case 32:
                                var0 = _closure3_slot0;
                                var2 = var0.plugins;
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    _fun98135: for (var _fun98135_ip = 0;;) switch (_fun98135_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var0 = var2.onDisconnect;
                                            if (!var0) {
                                                _fun98135_ip = 22;
                                                continue _fun98135
                                            }
                                        case 12:
                                            var1 = var2.onDisconnect;
                                            var0 = var1.bind(var2)();
                                        case 22:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = function arg0() {
                        _fun98136: for (var _fun98136_ip = 0;;) switch (_fun98136_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = 'string';
                                var1 = typeof var4;
                                if (!(var2 !== var1)) {
                                    _fun98136_ip = 69;
                                    continue _fun98136
                                }
                            case 16:
                                var1 = global;
                                var3 = var1.Buffer;
                                var2 = var3.isBuffer;
                                var3 = var2.bind(var3)(var4);
                                var2 = var4;
                                if (!var3) {
                                    _fun98136_ip = 67;
                                    continue _fun98136
                                }
                            case 41:
                                var5 = var1.JSON;
                                var3 = var5.parse;
                                var1 = var4.toString;
                                var1 = var1.bind(var4)();
                                var2 = var3.bind(var5)(var1);
                            case 67:
                                _fun98136_ip = 88;
                                continue _fun98136;
                            case 69:
                                var1 = global;
                                var3 = var1.JSON;
                                var1 = var3.parse;
                                var2 = var1.bind(var3)(var4);
                            case 88:
                                var _closure4_slot0 = var2;
                                var3 = _closure3_slot5;
                                if (!var3) {
                                    _fun98136_ip = 113;
                                    continue _fun98136
                                }
                            case 102:
                                var4 = _closure3_slot5;
                                var3 = undefined;
                                var3 = var4.bind(var3)(var2);
                            case 113:
                                var3 = _closure3_slot0;
                                var5 = var3.plugins;
                                var4 = var5.forEach;
                                var3 = function(arg0) { // Environment: var0
                                    _fun98137: for (var _fun98137_ip = 0;;) switch (_fun98137_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = var3.onCommand;
                                            if (!var0) {
                                                _fun98137_ip = 30;
                                                continue _fun98137
                                            }
                                        case 12:
                                            var2 = var3.onCommand;
                                            var1 = _closure4_slot0;
                                            var0 = var2.bind(var3)(var1);
                                        case 30:
                                            return var0;
                                    }
                                };
                                var3 = var4.bind(var5)(var3);
                                var4 = var2.type;
                                var3 = 'custom';
                                if (!(var3 !== var4)) {
                                    _fun98136_ip = 215;
                                    continue _fun98136
                                }
                            case 153:
                                var4 = var2.type;
                                var3 = 'setClientId';
                                var3 = var3 === var4;
                                if (!var3) {
                                    _fun98136_ip = 184;
                                    continue _fun98136
                                }
                            case 169:
                                var4 = _closure3_slot0;
                                var4 = var4.options;
                                var3 = var4.setClientId;
                            case 184:
                                if (!var3) {
                                    _fun98136_ip = 259;
                                    continue _fun98136
                                }
                            case 187:
                                var3 = _closure3_slot0;
                                var4 = var3.options;
                                var3 = var4.setClientId;
                                var2 = var2.payload;
                                var2 = var3.bind(var4)(var2);
                                _fun98136_ip = 259;
                                continue _fun98136;
                            case 215:
                                var1 = _closure3_slot0;
                                var3 = var1.customCommands;
                                var2 = var3.filter;
                                var1 = function(arg0) { // Environment: var0
                                    _fun98138: for (var _fun98138_ip = 0;;) switch (_fun98138_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var0 = _closure4_slot0;
                                            var0 = var0.payload;
                                            var3 = 'string';
                                            var0 = typeof var0;
                                            if (!(var3 !== var0)) {
                                                _fun98138_ip = 55;
                                                continue _fun98138
                                            }
                                        case 27:
                                            var3 = var2.command;
                                            var0 = _closure4_slot0;
                                            var0 = var0.payload;
                                            var0 = var0.command;
                                            var0 = var3 === var0;
                                            _fun98138_ip = 75;
                                            continue _fun98138;
                                        case 55:
                                            var2 = var2.command;
                                            var1 = _closure4_slot0;
                                            var1 = var1.payload;
                                            var0 = var2 === var1;
                                        case 75:
                                            return var0;
                                    }
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    _fun98139: for (var _fun98139_ip = 0;;) switch (_fun98139_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var1 = var2.handler;
                                            var0 = _closure4_slot0;
                                            var4 = var0.payload;
                                            var5 = 'object';
                                            var4 = typeof var4;
                                            var0 = undefined;
                                            if (!(var5 === var4)) {
                                                _fun98139_ip = 51;
                                                continue _fun98139
                                            }
                                        case 35:
                                            var3 = _closure4_slot0;
                                            var3 = var3.payload;
                                            var0 = var3.args;
                                        case 51:
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 259:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot8 = var4;
                    var3 = 'on';
                    var3 = var3 in var1;
                    if (!var3) {
                        _fun98130_ip = 231;
                        continue _fun98130
                    }
                case 222:
                    var3 = var1.on;
                    if (var3) {
                        _fun98130_ip = 264;
                        continue _fun98130
                    }
                case 231:
                    var1.onopen = var6;
                    var1.onclose = var5;
                    var2 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot8;
                        var0 = arg0;
                        var1 = var0.data;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onmessage = var2;
                    var0.socket = var1;
                    _fun98130_ip = 318;
                    continue _fun98130;
                case 264:
                    var3 = var1.on;
                    var2 = 'open';
                    var2 = var3.bind(var1)(var2, var6);
                    var3 = var1.on;
                    var2 = 'close';
                    var2 = var3.bind(var1)(var2, var5);
                    var3 = var1.on;
                    var2 = 'message';
                    var2 = var3.bind(var1)(var2, var4);
                    var0.socket = var1;
                case 318:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'display';
        var0.key = var5;
        var5 = function arg0() {
            _fun98141: for (var _fun98141_ip = 0;;) switch (_fun98141_ip) {
                case 0:
                    var0 = arg0;
                    var5 = this;
                    var7 = var0.name;
                    var6 = var0.value;
                    var2 = var0.preview;
                    var1 = var0.image;
                    var3 = var0.important;
                    var0 = undefined;
                    var4 = var0 !== var3;
                    if (!var4) {
                        _fun98141_ip = 46;
                        continue _fun98141
                    }
                case 43:
                    var4 = var3;
                case 46:
                    var3 = {};
                    var3.name = var7;
                    if (var6) {
                        _fun98141_ip = 57;
                        continue _fun98141
                    }
                case 55:
                    var6 = undefined;
                case 57:
                    var3.value = var6;
                    if (var2) {
                        _fun98141_ip = 66;
                        continue _fun98141
                    }
                case 64:
                    var2 = undefined;
                case 66:
                    var3.preview = var2;
                    if (var1) {
                        _fun98141_ip = 76;
                        continue _fun98141
                    }
                case 74:
                    var1 = undefined;
                case 76:
                    var3.image = var1;
                    var2 = var5.send;
                    var1 = 'display';
                    var1 = var2.bind(var5)(var1, var3, var4);
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'reportError';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var1 = var2.error;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'use';
        var0.key = var5;
        var5 = function arg0() {
            _fun98143: for (var _fun98143_ip = 0;;) switch (_fun98143_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var5 = 'function';
                    var1 = typeof var2;
                    if (!(var5 === var1)) {
                        _fun98143_ip = 271;
                        continue _fun98143
                    }
                case 26:
                    var1 = var2.bind;
                    var1 = var1.bind(var2)(var0);
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var _closure3_slot1 = var1;
                    var6 = 'object';
                    var4 = typeof var1;
                    if (!(var6 === var4)) {
                        _fun98143_ip = 235;
                        continue _fun98143
                    }
                case 61:
                    var4 = var1.features;
                    if (!var4) {
                        _fun98143_ip = 135;
                        continue _fun98143
                    }
                case 70:
                    var4 = var1.features;
                    var4 = typeof var4;
                    if (!(var6 === var4)) {
                        _fun98143_ip = 199;
                        continue _fun98143
                    }
                case 83:
                    var4 = function arg0() {
                        _fun98144: for (var _fun98144_ip = 0;;) switch (_fun98144_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = _closure3_slot1;
                                var0 = var0.features;
                                var2 = var0[var4];
                                var3 = 'function';
                                var0 = typeof var2;
                                if (!(var3 === var0)) {
                                    _fun98144_ip = 119;
                                    continue _fun98144
                                }
                            case 31:
                                var3 = function arg0() {
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var2 = _closure1_slot9;
                                    var1 = var2.some;
                                    var0 = function(arg0) { // Environment: var0
                                        var1 = _closure5_slot0;
                                        var0 = arg0;
                                        var0 = var0 === var1;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = undefined;
                                var3 = var3.bind(var0)(var4);
                                if (var3) {
                                    _fun98144_ip = 60;
                                    continue _fun98144
                                }
                            case 50:
                                var1 = _closure3_slot0;
                                var1[var4] = var2;
                                return var0;
                            case 60:
                                var0 = global;
                                var2 = var0.Error;
                                var0 = var0.HermesInternal;
                                var3 = var0.concat;
                                var1 = 'feature ';
                                var0 = ' is a reserved name';
                                var6 = var3.bind(var1)(var4, var0);
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var7 = var1;
                                var0 = new var7[var2](var6, var5);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                            case 119:
                                var0 = global;
                                var2 = var0.Error;
                                var0 = var0.HermesInternal;
                                var3 = var0.concat;
                                var1 = 'feature ';
                                var0 = ' is not a function';
                                var6 = var3.bind(var1)(var4, var0);
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var7 = var1;
                                var0 = new var7[var2](var6, var5);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                        }
                    };
                    var _closure3_slot2 = var4;
                    var4 = global;
                    var7 = var4.Object;
                    var6 = var7.keys;
                    var4 = var1.features;
                    var6 = var6.bind(var7)(var4);
                    var4 = var6.forEach;
                    var3 = function(arg0) { // Environment: var3
                        var2 = _closure3_slot2;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var3 = var4.bind(var6)(var3);
                case 135:
                    var4 = var0.plugins;
                    var3 = var4.push;
                    var3 = var3.bind(var4)(var1);
                    var3 = var1.onPlugin;
                    if (!var3) {
                        _fun98143_ip = 173;
                        continue _fun98143
                    }
                case 160:
                    var4 = var1.onPlugin;
                    var4 = typeof var4;
                    var3 = var5 === var4;
                case 173:
                    if (!var3) {
                        _fun98143_ip = 197;
                        continue _fun98143
                    }
                case 176:
                    var3 = var1.onPlugin;
                    var1 = var3.bind;
                    var1 = var1.bind(var3)(var0);
                    var1 = var1.bind(var2)(var0);
                case 197:
                    return var0;
                case 199:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = 'features must be an object';
                    var9 = var1;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 235:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = 'plugins must return an object';
                    var9 = var1;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 271:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = 'plugins must be a function';
                    var9 = var1;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'onCustomCommand';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun98148: for (var _fun98148_ip = 0;;) switch (_fun98148_ip) {
                case 0:
                    var9 = arg0;
                    var8 = arg1;
                    var4 = this;
                    var _closure3_slot1 = var4;
                    var2 = 'string';
                    var1 = typeof var9;
                    if (!(var2 !== var1)) {
                        _fun98148_ip = 60;
                        continue _fun98148
                    }
                case 26:
                    var7 = var9.command;
                    var _closure3_slot0 = var7;
                    var6 = var9.handler;
                    var5 = var9.title;
                    var3 = var9.description;
                    var2 = var9.args;
                    _fun98148_ip = 76;
                    continue _fun98148;
                case 60:
                    _closure3_slot0 = var9;
                    var5 = undefined;
                    var7 = var9;
                    var6 = var8;
                    var3 = undefined;
                    var2 = undefined;
                case 76:
                    if (var7) {
                        _fun98148_ip = 115;
                        continue _fun98148
                    }
                case 79:
                    var1 = global;
                    var9 = var1.Error;
                    var1 = var9.prototype;
                    var8 = Object.create(var1, {
                        constructor: {
                            value: var9
                        }
                    });
                    var12 = 'A command is required';
                    var13 = var8;
                    var1 = new var13[var9](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var8;
                    throw var1;
                case 115:
                    if (var6) {
                        _fun98148_ip = 175;
                        continue _fun98148
                    }
                case 118:
                    var1 = global;
                    var9 = var1.Error;
                    var1 = var1.HermesInternal;
                    var10 = var1.concat;
                    var8 = 'A handler is required for command "';
                    var1 = '"';
                    var12 = var10.bind(var8)(var7, var1);
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var13 = var8;
                    var1 = new var13[var9](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var8;
                    throw var1;
                case 175:
                    var9 = var4.customCommands;
                    var8 = var9.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.command;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var9 = var8.bind(var9)(var1);
                    var8 = var9.length;
                    var1 = 0;
                    if (!(var8 > var1)) {
                        _fun98148_ip = 226;
                        continue _fun98148
                    }
                case 209:
                    var8 = var9.forEach;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var3 = _closure3_slot1;
                        var4 = var3.customCommands;
                        var2 = var4.filter;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var0.id;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var1 = var2.bind(var4)(var1);
                        var3.customCommands = var1;
                        var2 = var3.send;
                        var1 = {};
                        var4 = var0.id;
                        var1.id = var4;
                        var0 = var0.command;
                        var1.command = var0;
                        var0 = 'customCommand.unregister';
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var8.bind(var9)(var1);
                case 226:
                    if (!var2) {
                        _fun98148_ip = 254;
                        continue _fun98148
                    }
                case 229:
                    var1 = new Array(0);
                    var _closure3_slot2 = var1;
                    var8 = var2.forEach;
                    var1 = function(arg0) { // Environment: var0
                        _fun98152: for (var _fun98152_ip = 0;;) switch (_fun98152_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = var3.name;
                                if (var0) {
                                    _fun98152_ip = 77;
                                    continue _fun98152
                                }
                            case 14:
                                var0 = global;
                                var4 = var0.Error;
                                var6 = _closure3_slot0;
                                var0 = var0.HermesInternal;
                                var5 = var0.concat;
                                var2 = 'A arg on the command "';
                                var0 = '" is missing a name';
                                var10 = var5.bind(var2)(var6, var0);
                                var2 = var4.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var11 = var2;
                                var0 = new var11[var4](var10, var9);
                                var0 = var0 instanceof Object ? var0 : var2;
                                throw var0;
                            case 77:
                                var4 = _closure3_slot2;
                                var2 = var4.indexOf;
                                var0 = var3.name;
                                var2 = var2.bind(var4)(var0);
                                var0 = -1;
                                if (!(!(var2 > var0))) {
                                    _fun98152_ip = 130;
                                    continue _fun98152
                                }
                            case 107:
                                var4 = _closure3_slot2;
                                var2 = var4.push;
                                var0 = var3.name;
                                var0 = var2.bind(var4)(var0);
                                var0 = undefined;
                                return var0;
                            case 130:
                                var0 = global;
                                var2 = var0.Error;
                                var10 = var3.name;
                                var8 = _closure3_slot0;
                                var0 = var0.HermesInternal;
                                var4 = var0.concat;
                                var11 = 'A arg with the name "';
                                var9 = '" already exists in the command "';
                                var7 = '"';
                                var10 = var11[var4](var10, var9, var8, var7, var6);
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var11 = var1;
                                var0 = new var11[var2](var10, var9);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                        }
                    };
                    var1 = var8.bind(var2)(var1);
                case 254:
                    var1 = {};
                    var8 = var4.customCommandLatestId;
                    var1.id = var8;
                    var1.command = var7;
                    var1.handler = var6;
                    var1.title = var5;
                    var1.description = var3;
                    var1.args = var2;
                    var _closure3_slot3 = var1;
                    var3 = var4.customCommandLatestId;
                    var2 = 1;
                    var2 = var3 + var2;
                    var4.customCommandLatestId = var2;
                    var3 = var4.customCommands;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var1);
                    var3 = var4.send;
                    var2 = {};
                    var5 = var1.id;
                    var2.id = var5;
                    var5 = var1.command;
                    var2.command = var5;
                    var5 = var1.title;
                    var2.title = var5;
                    var5 = var1.description;
                    var2.description = var5;
                    var1 = var1.args;
                    var2.args = var1;
                    var1 = 'customCommand.register';
                    var1 = var3.bind(var4)(var1, var2);
                    var0 = function() { // Environment: var0
                        var3 = _closure3_slot1;
                        var4 = var3.customCommands;
                        var2 = var4.filter;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure3_slot3;
                            var0 = var0.id;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var1 = var2.bind(var4)(var1);
                        var3.customCommands = var1;
                        var2 = var3.send;
                        var1 = {};
                        var4 = _closure3_slot3;
                        var4 = var4.id;
                        var1.id = var4;
                        var0 = _closure3_slot3;
                        var0 = var0.command;
                        var1.command = var0;
                        var0 = 'customCommand.unregister';
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
            }
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot10 = var1;
    var2.ReactotronImpl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12818, 12819, 12820, 12821, 12822, 12823, 12824, 12825, 12826, 12827]);