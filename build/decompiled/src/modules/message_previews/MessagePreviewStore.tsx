// modules/message_previews/MessagePreviewStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun84566: for (var _fun84566_ip = 0;;) switch (_fun84566_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun84566_ip = 45;
                    continue _fun84566
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun84566_ip = 54;
                    continue _fun84566
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun84566_ip = 344;
                    continue _fun84566
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun84566_ip = 322;
                    continue _fun84566
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun84566_ip = 282;
                    continue _fun84566
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun84566_ip = 269;
                    continue _fun84566
                }
            case 109:
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
                    _fun84566_ip = 162;
                    continue _fun84566
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun84566_ip = 178;
                    continue _fun84566
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun84566_ip = 248;
                    continue _fun84566
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun84566_ip = 248;
                    continue _fun84566
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun84566_ip = 233;
                    continue _fun84566
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun84566_ip = 246;
                    continue _fun84566
                }
            case 233:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun84566_ip = 264;
                continue _fun84566;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun84566_ip = 282;
                continue _fun84566;
            case 269:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun84566_ip = 322;
                    continue _fun84566
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun84566_ip = 329;
                    continue _fun84566
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun84567: for (var _fun84567_ip = 0;;) switch (_fun84567_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun84567_ip = 56;
                                continue _fun84567
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
                            _fun84567_ip = 67;
                            continue _fun84567;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun84568: for (var _fun84568_ip = 0;;) switch (_fun84568_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun84568_ip = 23;
                    continue _fun84568
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun84568_ip = 33;
                    continue _fun84568
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
                    _fun84568_ip = 70;
                    continue _fun84568
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun84568_ip = 55;
                    continue _fun84568
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun84569: for (var _fun84569_ip = 0;;) switch (_fun84569_ip) {
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
                _fun84569_ip = 76;
                continue _fun84569;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'MessagePreviewStore';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot11 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: MessagePreviewStore, environment: var5
            _fun84573: for (var _fun84573_ip = 0;;) switch (_fun84573_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 9;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var9 = new Array(2);
                    var9[0] = var0;
                    var0 = {};
                    var6 = function(arg0) { // Original name: CONNECTION_OPEN, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleConnectionOpen;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.CONNECTION_OPEN = var6;
                    var6 = function(arg0) { // Original name: GUILD_CREATE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleGuildCreate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.GUILD_CREATE = var6;
                    var6 = function(arg0) { // Original name: GUILD_DELETE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleGuildDelete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.GUILD_DELETE = var6;
                    var6 = function(arg0) { // Original name: LOAD_MESSAGES_SUCCESS, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleLoadMessagesSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.LOAD_MESSAGES_SUCCESS = var6;
                    var6 = function(arg0) { // Original name: LOCAL_MESSAGES_LOADED, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleLocalMessagesLoaded;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.LOCAL_MESSAGES_LOADED = var6;
                    var6 = function(arg0) { // Original name: LOGOUT, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleLogout;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.LOGOUT = var6;
                    var6 = function(arg0) { // Original name: MESSAGE_CREATE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessageCreate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.MESSAGE_CREATE = var6;
                    var6 = function(arg0) { // Original name: MESSAGE_DELETE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessageDelete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.MESSAGE_DELETE = var6;
                    var6 = function(arg0) { // Original name: MESSAGE_PREVIEWS_LOADED, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessagePreviewsLoaded;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.MESSAGE_PREVIEWS_LOADED = var6;
                    var6 = function(arg0) { // Original name: MESSAGE_PREVIEWS_LOCALLY_LOADED, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessagePreviewsLocallyLoaded;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.MESSAGE_PREVIEWS_LOCALLY_LOADED = var6;
                    var6 = function(arg0) { // Original name: MESSAGE_UPDATE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessageUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.MESSAGE_UPDATE = var6;
                    var6 = function(arg0) { // Original name: THREAD_LIST_SYNC, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleThreadListSync;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.THREAD_LIST_SYNC = var6;
                    var9[1] = var0;
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun84573_ip = 244;
                        continue _fun84573
                    }
                case 231:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun84573_ip = 278;
                    continue _fun84573;
                case 244:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 278:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = global;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var2;
                    var1 = new var13[var1](var12);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.guilds = var1;
                    var1 = 0;
                    var0.generation = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot9;
            var0 = _closure1_slot10;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(18);
        var0[0] = var4;
        var4 = {};
        var6 = 'isLatest';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun84587: for (var _fun84587_ip = 0;;) switch (_fun84587_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var4 = var2.guilds;
                    var3 = var4.get;
                    var0 = null;
                    var6 = var0 != var5;
                    var1 = null;
                    if (!var6) {
                        _fun84587_ip = 31;
                        continue _fun84587
                    }
                case 28:
                    var1 = var5;
                case 31:
                    var5 = var3.bind(var4)(var1);
                    var3 = var0 == var5;
                    var1 = undefined;
                    if (var3) {
                        _fun84587_ip = 66;
                        continue _fun84587
                    }
                case 45:
                    var4 = var5.isLatest;
                    var3 = var2.generation;
                    var2 = arg1;
                    var1 = var4.bind(var5)(var2, var3);
                case 66:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun84587_ip = 76;
                        continue _fun84587
                    }
                case 73:
                    var0 = var1;
                case 76:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isLocalFetchNeeded';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84588: for (var _fun84588_ip = 0;;) switch (_fun84588_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.guilds;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun84588_ip = 39;
                        continue _fun84588
                    }
                case 33:
                    var1 = var2.localNeeded;
                case 39:
                    var0 = var0 == var1;
                    if (var0) {
                        _fun84588_ip = 49;
                        continue _fun84588
                    }
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'message';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun84589: for (var _fun84589_ip = 0;;) switch (_fun84589_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.guilds;
                    var1 = var2.get;
                    var0 = arg0;
                    var4 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun84589_ip = 49;
                        continue _fun84589
                    }
                case 33:
                    var3 = var4.messageRecord;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
                case 49:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun84589_ip = 61;
                        continue _fun84589
                    }
                case 58:
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'data';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84590: for (var _fun84590_ip = 0;;) switch (_fun84590_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.guilds;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun84590_ip = 93;
                        continue _fun84590
                    }
                case 25:
                    var4 = var0.guilds;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.PreviewData;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var9 = var5;
                    var1 = new var9[var1](var8);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var1 = var3.bind(var4)(var2, var1);
                case 93:
                    var1 = var0.guilds;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleOneGuildCreate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84591: for (var _fun84591_ip = 0;;) switch (_fun84591_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var2 = var3.data;
                    var1 = var0.id;
                    var1 = var2.bind(var3)(var1);
                    var6 = var1.putMany;
                    var5 = var0.lastMessages;
                    var2 = null;
                    if (!(var2 == var5)) {
                        _fun84591_ip = 43;
                        continue _fun84591
                    }
                case 39:
                    var5 = new Array(0);
                case 43:
                    var4 = var3.generation;
                    var4 = var6.bind(var1)(var5, var4);
                    var5 = var1.putMany;
                    var4 = var0.threadMessages;
                    if (!(var2 == var4)) {
                        _fun84591_ip = 75;
                        continue _fun84591
                    }
                case 71:
                    var4 = new Array(0);
                case 75:
                    var3 = var3.generation;
                    var3 = var5.bind(var1)(var4, var3);
                    var0 = var0.lastMessages;
                    if (!(var2 != var0)) {
                        _fun84591_ip = 105;
                        continue _fun84591
                    }
                case 97:
                    var0 = false;
                    var1.localNeeded = var0;
                case 105:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84592: for (var _fun84592_ip = 0;;) switch (_fun84592_ip) {
                case 0:
                    var4 = this;
                    var1 = var4.generation;
                    var0 = 1;
                    var0 = var1 + var0;
                    var4.generation = var0;
                    var2 = _closure1_slot12;
                    var0 = arg0;
                    var1 = var0.guilds;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun84592_ip = 88;
                        continue _fun84592
                    }
                case 57:
                    var5 = var2.value;
                    var1 = var4.handleOneGuildCreate;
                    var1 = var1.bind(var4)(var5);
                    var5 = var3.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun84592_ip = 57;
                        continue _fun84592
                    }
                case 88:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleGuildCreate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.handleOneGuildCreate;
            var0 = arg0;
            var0 = var0.guild;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.guilds;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var0.guild;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleMessageCreate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84595: for (var _fun84595_ip = 0;;) switch (_fun84595_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var1.optimistic;
                    if (var2) {
                        _fun84595_ip = 89;
                        continue _fun84595
                    }
                case 15:
                    var2 = var1.isPushNotification;
                    if (var2) {
                        _fun84595_ip = 89;
                        continue _fun84595
                    }
                case 24:
                    var3 = var0.data;
                    var4 = var1.guildId;
                    var2 = null;
                    var5 = var2 != var4;
                    if (!var5) {
                        _fun84595_ip = 46;
                        continue _fun84595
                    }
                case 43:
                    var2 = var4;
                case 46:
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.put;
                    var2 = var1.message;
                    var2 = var2.channel_id;
                    var1 = var1.message;
                    var0 = var0.generation;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    var0 = undefined;
                    return var0;
                case 89:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'handleMessageDelete';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84596: for (var _fun84596_ip = 0;;) switch (_fun84596_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var2.guildId;
                    var3 = null;
                    var5 = var3 != var0;
                    var4 = null;
                    if (!var5) {
                        _fun84596_ip = 25;
                        continue _fun84596
                    }
                case 22:
                    var4 = var0;
                case 25:
                    var0 = var1.data;
                    var8 = var0.bind(var1)(var4);
                    var5 = var3 == var8;
                    var0 = undefined;
                    var6 = undefined;
                    if (var5) {
                        _fun84596_ip = 61;
                        continue _fun84596
                    }
                case 46:
                    var7 = var8.messageId;
                    var5 = var2.channelId;
                    var6 = var7.bind(var8)(var5);
                case 61:
                    var5 = var2.id;
                    if (!(var6 === var5)) {
                        _fun84596_ip = 179;
                        continue _fun84596
                    }
                case 70:
                    var7 = _closure1_slot10;
                    var6 = var7.getMessages;
                    var5 = var2.channelId;
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.hasMoreAfter;
                    var5 = null;
                    if (var6) {
                        _fun84596_ip = 114;
                        continue _fun84596
                    }
                case 104:
                    var6 = var7.last;
                    var5 = var6.bind(var7)();
                case 114:
                    if (!(var3 == var5)) {
                        _fun84596_ip = 145;
                        continue _fun84596
                    }
                case 118:
                    var3 = var1.data;
                    var7 = var3.bind(var1)(var4);
                    var6 = var7.delete;
                    var3 = var2.channelId;
                    var3 = var6.bind(var7)(var3);
                    _fun84596_ip = 179;
                    continue _fun84596;
                case 145:
                    var3 = var1.data;
                    var4 = var3.bind(var1)(var4);
                    var3 = var4.put;
                    var2 = var2.channelId;
                    var1 = var1.generation;
                    var1 = var3.bind(var4)(var2, var5, var1);
                case 179:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'handleMessageUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84597: for (var _fun84597_ip = 0;;) switch (_fun84597_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = var1.guildId;
                    var2 = null;
                    var5 = var2 != var0;
                    var3 = null;
                    if (!var5) {
                        _fun84597_ip = 25;
                        continue _fun84597
                    }
                case 22:
                    var3 = var0;
                case 25:
                    var0 = var1.message;
                    var7 = var0.channel_id;
                    var0 = var1.message;
                    var5 = var0.id;
                    if (!(var2 != var7)) {
                        _fun84597_ip = 114;
                        continue _fun84597
                    }
                case 49:
                    if (!(var2 != var5)) {
                        _fun84597_ip = 114;
                        continue _fun84597
                    }
                case 53:
                    var0 = var4.data;
                    var3 = var0.bind(var4)(var3);
                    var6 = var2 == var3;
                    var0 = undefined;
                    var4 = undefined;
                    if (var6) {
                        _fun84597_ip = 84;
                        continue _fun84597
                    }
                case 74:
                    var6 = var3.messageId;
                    var4 = var6.bind(var3)(var7);
                case 84:
                    if (!(var4 === var5)) {
                        _fun84597_ip = 110;
                        continue _fun84597
                    }
                case 88:
                    if (!(var2 != var3)) {
                        _fun84597_ip = 108;
                        continue _fun84597
                    }
                case 92:
                    var2 = var3.update;
                    var1 = var1.message;
                    var1 = var2.bind(var3)(var1);
                case 108:
                    return var0;
                case 110:
                    var0 = false;
                    return var0;
                case 114:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'handleThreadListSync';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84598: for (var _fun84598_ip = 0;;) switch (_fun84598_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var3 = var0.data;
                    var2 = var1.guildId;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.putMany;
                    var1 = var1.mostRecentMessages;
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun84598_ip = 43;
                        continue _fun84598
                    }
                case 39:
                    var1 = new Array(0);
                case 43:
                    var0 = var0.generation;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'handleLoadMessagesSuccess';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84599: for (var _fun84599_ip = 0;;) switch (_fun84599_ip) {
                case 0:
                    var6 = arg0;
                    var1 = this;
                    var4 = _closure1_slot9;
                    var3 = var4.getBasicChannel;
                    var2 = var6.channelId;
                    var2 = var3.bind(var4)(var2);
                    var5 = null;
                    if (!(var5 != var2)) {
                        _fun84599_ip = 234;
                        continue _fun84599
                    }
                case 38:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 11;
                    var3 = var3[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var3);
                    var4 = var7.requireSortedDescending;
                    var3 = var6.messages;
                    var3 = var4.bind(var7)(var3);
                    var3 = var6.isAfter;
                    if (var3) {
                        _fun84599_ip = 169;
                        continue _fun84599
                    }
                case 86:
                    var3 = var6.isBefore;
                    if (var3) {
                        _fun84599_ip = 169;
                        continue _fun84599
                    }
                case 95:
                    var3 = var6.hasMoreAfter;
                    if (var3) {
                        _fun84599_ip = 169;
                        continue _fun84599
                    }
                case 104:
                    var4 = var1.data;
                    var3 = var2.guild_id;
                    var9 = var4.bind(var1)(var3);
                    var8 = var9.put;
                    var7 = var6.channelId;
                    var4 = var6.messages;
                    var3 = 0;
                    var3 = var4[var3];
                    var10 = var5 != var3;
                    var4 = null;
                    if (!var10) {
                        _fun84599_ip = 154;
                        continue _fun84599
                    }
                case 151:
                    var4 = var3;
                case 154:
                    var3 = var1.generation;
                    var3 = var8.bind(var9)(var7, var4, var3);
                    _fun84599_ip = 232;
                    continue _fun84599;
                case 169:
                    var3 = var1.data;
                    var2 = var2.guild_id;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.putNew;
                    var2 = var6.channelId;
                    var7 = var6.messages;
                    var6 = 0;
                    var6 = var7[var6];
                    var7 = var5 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun84599_ip = 219;
                        continue _fun84599
                    }
                case 216:
                    var5 = var6;
                case 219:
                    var1 = var1.generation;
                    var1 = var3.bind(var4)(var2, var5, var1);
                case 232:
                    return var0;
                case 234:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'handleLocalMessagesLoaded';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84600: for (var _fun84600_ip = 0;;) switch (_fun84600_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var5 = _closure1_slot9;
                    var4 = var5.getBasicChannel;
                    var1 = var0.channelId;
                    var1 = var4.bind(var5)(var1);
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun84600_ip = 141;
                        continue _fun84600
                    }
                case 35:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.requireSortedDescending;
                    var2 = var0.messages;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.data;
                    var1 = var1.guild_id;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.putNew;
                    var1 = var0.channelId;
                    var5 = var0.messages;
                    var0 = 0;
                    var0 = var5[var0];
                    var5 = var4 != var0;
                    var4 = null;
                    if (!var5) {
                        _fun84600_ip = 124;
                        continue _fun84600
                    }
                case 121:
                    var4 = var0;
                case 124:
                    var0 = -inf;
                    var0 = var2.bind(var3)(var1, var4, var0);
                case 141:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'handleMessagePreviewsLoaded';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84601: for (var _fun84601_ip = 0;;) switch (_fun84601_ip) {
                case 0:
                    var0 = arg0;
                    var5 = this;
                    var4 = _closure1_slot11;
                    var3 = var4.verbose;
                    var14 = var0.guildId;
                    var2 = var0.messages;
                    var12 = var2.length;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var8 = var2.concat;
                    var15 = 'adding remote previews (guildId: ';
                    var13 = ', messages: ';
                    var11 = ')';
                    var2 = var15[var8](var14, var13, var12, var11, var10);
                    var2 = var3.bind(var4)(var2);
                    var3 = var5.data;
                    var2 = var0.guildId;
                    var4 = var3.bind(var5)(var2);
                    var2 = _closure1_slot12;
                    var1 = var0.messages;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun84601_ip = 187;
                        continue _fun84601
                    }
                case 117:
                    var8 = var2.value;
                    var7 = var4.isLatest;
                    var6 = var8.channel_id;
                    var1 = var5.generation;
                    var1 = var7.bind(var4)(var6, var1);
                    if (var1) {
                        _fun84601_ip = 172;
                        continue _fun84601
                    }
                case 148:
                    var7 = var4.put;
                    var6 = var8.channel_id;
                    var1 = var5.generation;
                    var1 = var7.bind(var4)(var6, var8, var1);
                case 172:
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun84601_ip = 117;
                        continue _fun84601
                    }
                case 187:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'handleMessagePreviewsLocallyLoaded';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun84602: for (var _fun84602_ip = 0;;) switch (_fun84602_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var4 = _closure1_slot11;
                    var2 = var4.verbose;
                    var15 = var0.guildId;
                    var1 = var0.messages;
                    var13 = var1.length;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var16 = 'adding local previews (guildId: ';
                    var14 = ', messages: ';
                    var12 = ')';
                    var1 = var16[var7](var15, var14, var13, var12, var11);
                    var1 = var2.bind(var4)(var1);
                    var2 = var3.data;
                    var1 = var0.guildId;
                    var2 = var2.bind(var3)(var1);
                    var3 = _closure1_slot12;
                    var1 = var0.messages;
                    var0 = undefined;
                    var8 = var3.bind(var0)(var1);
                    var3 = var8.bind(var0)();
                    var1 = var3.done;
                    var7 = -inf;
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    if (var1) {
                        _fun84602_ip = 199;
                        continue _fun84602
                    }
                case 135:
                    var10 = var3.value;
                    var1 = _closure1_slot3;
                    var1 = var1.bind(var0)(var10, var6);
                    var11 = var1[var5];
                    var10 = var1[var4];
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var11);
                    if (var1) {
                        _fun84602_ip = 184;
                        continue _fun84602
                    }
                case 171:
                    var1 = var2.put;
                    var1 = var1.bind(var2)(var11, var10, var7);
                case 184:
                    var10 = var8.bind(var0)();
                    var1 = var10.done;
                    var3 = var10;
                    if (!var1) {
                        _fun84602_ip = 135;
                        continue _fun84602
                    }
                case 199:
                    var1 = false;
                    var2.localNeeded = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'handleLogout';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.guilds;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[17] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_previews/MessagePreviewStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1372, 4207, 3, 806, 10813, 4211, 566, 2]);