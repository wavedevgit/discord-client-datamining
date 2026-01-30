// modules/app_database/modules/Messages.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var4
        _fun39921: for (var _fun39921_ip = 0;;) switch (_fun39921_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun39921_ip = 45;
                    continue _fun39921
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun39921_ip = 54;
                    continue _fun39921
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun39921_ip = 342;
                    continue _fun39921
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun39921_ip = 322;
                    continue _fun39921
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun39921_ip = 282;
                    continue _fun39921
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun39921_ip = 269;
                    continue _fun39921
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
                    _fun39921_ip = 162;
                    continue _fun39921
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun39921_ip = 178;
                    continue _fun39921
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun39921_ip = 248;
                    continue _fun39921
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun39921_ip = 248;
                    continue _fun39921
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun39921_ip = 233;
                    continue _fun39921
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun39921_ip = 246;
                    continue _fun39921
                }
            case 233:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun39921_ip = 264;
                continue _fun39921;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun39921_ip = 282;
                continue _fun39921;
            case 269:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun39921_ip = 322;
                    continue _fun39921
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
                    _fun39921_ip = 329;
                    continue _fun39921
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun39922: for (var _fun39922_ip = 0;;) switch (_fun39922_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun39922_ip = 56;
                                continue _fun39922
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
                            _fun39922_ip = 67;
                            continue _fun39922;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var4
        _fun39923: for (var _fun39923_ip = 0;;) switch (_fun39923_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun39923_ip = 23;
                    continue _fun39923
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun39923_ip = 33;
                    continue _fun39923
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
                    _fun39923_ip = 70;
                    continue _fun39923
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun39923_ip = 55;
                    continue _fun39923
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var1 = function(arg0) { // Original name: isLikelyNotDelta, environment: var4
        _fun39924: for (var _fun39924_ip = 0;;) switch (_fun39924_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.author;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun39924_ip = 27;
                    continue _fun39924
                }
            case 18:
                var3 = var1.content;
                var0 = var2 != var3;
            case 27:
                if (!var0) {
                    _fun39924_ip = 40;
                    continue _fun39924
                }
            case 30:
                var3 = var1.mentions;
                var0 = var2 != var3;
            case 40:
                if (!var0) {
                    _fun39924_ip = 53;
                    continue _fun39924
                }
            case 43:
                var1 = var1.timestamp;
                var0 = var2 != var1;
            case 53:
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var7[var3];
    var8 = var5.bind(var0)(var3);
    var3 = var8.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var12 = 'Messages';
    var13 = var5;
    var3 = new var13[var8](var12, var11);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var4
        var4 = _closure1_slot6;
        var3 = function(arg0) { // Original name: ChannelHistory, environment: var1
            _fun39926: for (var _fun39926_ip = 0;;) switch (_fun39926_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var7 = _closure1_slot5;
                    var6 = _closure2_slot0;
                    var0 = undefined;
                    var6 = var7.bind(var0)(var2, var6);
                    var6 = null;
                    var2.connectionId = var6;
                    var7 = new Array(0);
                    var2.users = var7;
                    var7 = new Array(0);
                    var2.members = var7;
                    var7 = new Array(0);
                    var2.messages = var7;
                    var7 = var4.length;
                    var8 = 0;
                    if (!(var7 > var8)) {
                        _fun39926_ip = 216;
                        continue _fun39926
                    }
                case 82:
                    var7 = var4[var8];
                    var9 = var6 == var7;
                    var6 = undefined;
                    if (var9) {
                        _fun39926_ip = 101;
                        continue _fun39926
                    }
                case 95:
                    var6 = var7.connectionId;
                case 101:
                    var _closure3_slot0 = var6;
                    var7 = _closure2_slot0;
                    var5 = var7.computeUsersAndMembers;
                    var7 = var5.bind(var7)(var4);
                    var5 = _closure1_slot4;
                    var3 = 2;
                    var7 = var5.bind(var0)(var7, var3);
                    var5 = var7[var8];
                    var3 = 1;
                    var3 = var7[var3];
                    var7 = var4.length;
                    var7 = var7 > var8;
                    if (!var7) {
                        _fun39926_ip = 174;
                        continue _fun39926
                    }
                case 158:
                    var9 = var4.every;
                    var8 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.connectionId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var7 = var9.bind(var4)(var8);
                case 174:
                    if (!var7) {
                        _fun39926_ip = 183;
                        continue _fun39926
                    }
                case 177:
                    var2.connectionId = var6;
                case 183:
                    var2.users = var5;
                    var2.members = var3;
                    var3 = var4.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.message;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var2.messages = var1;
                case 216:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'computeUsersAndMembers';
        var0.key = var2;
        var2 = function(arg0) { // Original name: value, environment: var1
            _fun39929: for (var _fun39929_ip = 0;;) switch (_fun39929_ip) {
                case 0:
                    var2 = arg0;
                    var7 = this;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var1);
                    var1 = var3.requireSortedDescending;
                    var1 = var1.bind(var3)(var2);
                    var1 = global;
                    var3 = var1.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var15 = var4;
                    var3 = new var15[var3](var14);
                    var5 = var3 instanceof Object ? var3 : var4;
                    var3 = var1.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var15 = var4;
                    var3 = new var15[var3](var14);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var0 = _closure1_slot12;
                    var3 = var0.bind(var6)(var2);
                    var2 = var3.bind(var6)();
                    var0 = var2.done;
                    if (var0) {
                        _fun39929_ip = 187;
                        continue _fun39929
                    }
                case 119:
                    var0 = var2.value;
                    var11 = var7.addIntoMap;
                    var10 = var0.users;
                    var9 = function(arg0) { // Environment: var8
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var9 = var11.bind(var7)(var5, var10, var9);
                    var10 = var7.addIntoMap;
                    var9 = var0.members;
                    var0 = function(arg0) { // Environment: var8
                        var0 = arg0;
                        var0 = var0.userId;
                        return var0;
                    };
                    var0 = var10.bind(var7)(var4, var9, var0);
                    var9 = var3.bind(var6)();
                    var0 = var9.done;
                    var2 = var9;
                    if (!var0) {
                        _fun39929_ip = 119;
                        continue _fun39929
                    }
                case 187:
                    var3 = var1.Array;
                    var2 = var3.from;
                    var0 = var5.values;
                    var0 = var0.bind(var5)();
                    var2 = var2.bind(var3)(var0);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var5 = 'addIntoMap';
        var0.key = var5;
        var1 = function(arg0, arg1, arg2) { // Original name: value, environment: var1
            _fun39932: for (var _fun39932_ip = 0;;) switch (_fun39932_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg2;
                    var2 = _closure1_slot12;
                    var0 = undefined;
                    var1 = arg1;
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.bind(var0)();
                    var1 = var2.done;
                    var3 = null;
                    if (var1) {
                        _fun39932_ip = 114;
                        continue _fun39932
                    }
                case 37:
                    var8 = var2.value;
                    var7 = var5.bind(var0)(var8);
                    var1 = var6.get;
                    var9 = var1.bind(var6)(var7);
                    var1 = var3 == var9;
                    if (var1) {
                        _fun39932_ip = 85;
                        continue _fun39932
                    }
                case 64:
                    var9 = var9.incomplete;
                    if (!var9) {
                        _fun39932_ip = 82;
                        continue _fun39932
                    }
                case 73:
                    var10 = var8.incomplete;
                    var9 = !var10;
                case 82:
                    var1 = var9;
                case 85:
                    if (!var1) {
                        _fun39932_ip = 99;
                        continue _fun39932
                    }
                case 88:
                    var1 = var6.set;
                    var1 = var1.bind(var6)(var7, var8);
                case 99:
                    var7 = var4.bind(var0)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun39932_ip = 37;
                        continue _fun39932
                    }
                case 114:
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot11 = var3;
    var4 = function() { // Environment: var4
        var3 = _closure1_slot6;
        var2 = function() { // Original name: Messages, environment: var5
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot5;
            var1 = _closure2_slot3;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = {};
            var4 = function(arg0, arg1) { // Original name: CHANNEL_DELETE, environment: var3
                var3 = _closure3_slot0;
                var2 = var3.handleChannelDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CHANNEL_DELETE = var4;
            var4 = function(arg0, arg1) { // Original name: GUILD_DELETE, environment: var3
                var3 = _closure3_slot0;
                var2 = var3.handleGuildDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_DELETE = var4;
            var4 = function(arg0, arg1) { // Original name: LOAD_MESSAGES_SUCCESS, environment: var3
                var3 = _closure3_slot0;
                var2 = var3.handleLoadMessagesSuccess;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.LOAD_MESSAGES_SUCCESS = var4;
            var4 = function(arg0, arg1) { // Original name: MESSAGE_CREATE, environment: var3
                var3 = _closure3_slot0;
                var2 = var3.handleMessageCreate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.MESSAGE_CREATE = var4;
            var4 = function(arg0, arg1) { // Original name: MESSAGE_DELETE_BULK, environment: var3
                var3 = _closure3_slot0;
                var2 = var3.handleMessageDeleteBulk;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.MESSAGE_DELETE_BULK = var4;
            var4 = function(arg0, arg1) { // Original name: MESSAGE_DELETE, environment: var3
                var3 = _closure3_slot0;
                var2 = var3.handleMessageDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.MESSAGE_DELETE = var4;
            var4 = function(arg0, arg1) { // Original name: MESSAGE_PREVIEWS_LOADED, environment: var3
                var3 = _closure3_slot0;
                var2 = var3.handleMessagePreviewsLoaded;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.MESSAGE_PREVIEWS_LOADED = var4;
            var3 = function(arg0, arg1) { // Original name: MESSAGE_UPDATE, environment: var3
                var3 = _closure3_slot0;
                var2 = var3.handleMessageUpdate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.MESSAGE_UPDATE = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot3 = var2;
        var4 = {};
        var1 = 'startupLoad';
        var4.key = var1;
        var7 = _closure1_slot3;
        var1 = undefined;
        var0 = function*(arg0, arg1, arg2, arg3) { // Environment: var5
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun39944: for (var _fun39944_ip = 0;;) switch (_fun39944_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39944_ip = 111;
                            continue _fun39944
                        }
                    case 7:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.messages;
                        var1 = arg0;
                        var6 = var3.bind(var4)(var1);
                        var5 = var6.getLatest;
                        var4 = arg1;
                        var3 = arg2;
                        var1 = arg3;
                        var1 = var5.bind(var6)(var4, var3, var1);
                        SaveGenerator(address = 72);
                    case 70:
                        return var1;
                    case 72:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun39944_ip = 108;
                            continue _fun39944
                        }
                    case 78:
                        var2 = _closure1_slot11;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var10 = var3;
                        var9 = var1;
                        var2 = new var10[var2](var9, var8);
                        var2 = var2 instanceof Object ? var2 : var3;
                        return var2;
                    case 108:
                        return var1;
                    case 111:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var7.bind(var1)(var0);
        var _closure2_slot2 = var0;
        var0 = function() { // Original name: startupLoad, environment: var5
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(19);
        var0[0] = var4;
        var4 = {};
        var6 = 'load';
        var4.key = var6;
        var6 = function*(arg0, arg1, arg2) { // Environment: var5
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun39947: for (var _fun39947_ip = 0;;) switch (_fun39947_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39947_ip = 206;
                            continue _fun39947
                        }
                    case 13:
                        var3 = _closure1_slot8;
                        var1 = var3.getBasicChannel;
                        var1 = var1.bind(var3)(var6);
                        var3 = null;
                        if (!(var3 != var6)) {
                            _fun39947_ip = 77;
                            continue _fun39947
                        }
                    case 37:
                        if (!(var3 != var1)) {
                            _fun39947_ip = 77;
                            continue _fun39947
                        }
                    case 41:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 10;
                        var3 = var5[var3];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.isReadableChannel;
                        var3 = var3.bind(var4)(var1);
                        if (var3) {
                            _fun39947_ip = 108;
                            continue _fun39947
                        }
                    case 77:
                        var7 = _closure1_slot11;
                        var3 = var7.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var7
                            }
                        });
                        var10 = new Array(0);
                        var11 = var4;
                        var3 = new var11[var7](var10, var9);
                        var3 = var3 instanceof Object ? var3 : var4;
                        return var3;
                    case 108:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 9;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.messages;
                        var3 = arg0;
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.getLatest;
                        var3 = var1.guild_id;
                        var1 = arg2;
                        var1 = var4.bind(var5)(var3, var6, var1);
                        SaveGenerator(address = 167);
                    case 165:
                        return var1;
                    case 167:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun39947_ip = 203;
                            continue _fun39947
                        }
                    case 173:
                        var2 = _closure1_slot11;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var11 = var3;
                        var10 = var1;
                        var2 = new var11[var2](var10, var9);
                        var2 = var2 instanceof Object ? var2 : var3;
                        return var2;
                    case 203:
                        return var1;
                    case 206:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var1)(var6);
        var _closure2_slot1 = var6;
        var6 = function() { // Original name: load, environment: var5
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleMessageCreate';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39949: for (var _fun39949_ip = 0;;) switch (_fun39949_ip) {
                case 0:
                    var0 = arg0;
                    var5 = this;
                    var1 = var0.optimistic;
                    if (var1) {
                        _fun39949_ip = 21;
                        continue _fun39949
                    }
                case 15:
                    var1 = var0.isPushNotification;
                case 21:
                    if (var1) {
                        _fun39949_ip = 36;
                        continue _fun39949
                    }
                case 24:
                    var3 = var0.sendMessageOptions;
                    var2 = null;
                    var1 = var2 != var3;
                case 36:
                    if (var1) {
                        _fun39949_ip = 114;
                        continue _fun39949
                    }
                case 39:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isReadableChannelId;
                    var1 = var0.channelId;
                    var1 = var2.bind(var3)(var1);
                    if (!var1) {
                        _fun39949_ip = 114;
                        continue _fun39949
                    }
                case 83:
                    var4 = var5.upsertOne;
                    var9 = var0.guildId;
                    var8 = var0.channelId;
                    var7 = var0.message;
                    var6 = arg1;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                case 114:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleMessageUpdate';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39950: for (var _fun39950_ip = 0;;) switch (_fun39950_ip) {
                case 0:
                    var0 = arg0;
                    var5 = arg1;
                    var4 = this;
                    var1 = var0.message;
                    var1 = var1.id;
                    var3 = null;
                    var1 = var3 != var1;
                    if (!var1) {
                        _fun39950_ip = 42;
                        continue _fun39950
                    }
                case 28:
                    var2 = var0.message;
                    var2 = var2.channel_id;
                    var1 = var3 != var2;
                case 42:
                    if (!var1) {
                        _fun39950_ip = 91;
                        continue _fun39950
                    }
                case 45:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.isReadableChannelId;
                    var2 = var0.message;
                    var2 = var2.channel_id;
                    var1 = var3.bind(var6)(var2);
                case 91:
                    if (!var1) {
                        _fun39950_ip = 192;
                        continue _fun39950
                    }
                case 94:
                    var3 = _closure1_slot14;
                    var2 = var0.message;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    if (var1) {
                        _fun39950_ip = 156;
                        continue _fun39950
                    }
                case 116:
                    var6 = var4.updateOne;
                    var10 = var0.guildId;
                    var1 = var0.message;
                    var9 = var1.channel_id;
                    var8 = var0.message;
                    var11 = var4;
                    var7 = var5;
                    var1 = var11[var6](var10, var9, var8, var7, var6);
                    _fun39950_ip = 192;
                    continue _fun39950;
                case 156:
                    var3 = var4.upsertOne;
                    var10 = var0.guildId;
                    var1 = var0.message;
                    var9 = var1.channel_id;
                    var8 = var0.message;
                    var11 = var4;
                    var7 = var5;
                    var0 = var11[var3](var10, var9, var8, var7, var6);
                case 192:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleMessagePreviewsLoaded';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39951: for (var _fun39951_ip = 0;;) switch (_fun39951_ip) {
                case 0:
                    var8 = arg0;
                    var7 = arg1;
                    var6 = this;
                    var2 = _closure1_slot12;
                    var1 = var8.messages;
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.bind(var0)();
                    var1 = var2.done;
                    var3 = 10;
                    if (var1) {
                        _fun39951_ip = 131;
                        continue _fun39951
                    }
                case 44:
                    var11 = var2.value;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var10 = var9.bind(var0)(var1);
                    var9 = var10.isReadableChannelId;
                    var1 = var11.channel_id;
                    var1 = var9.bind(var10)(var1);
                    if (!var1) {
                        _fun39951_ip = 116;
                        continue _fun39951
                    }
                case 85:
                    var10 = var6.insertStale;
                    var15 = var8.guildId;
                    var14 = var11.channel_id;
                    var16 = var6;
                    var13 = var11;
                    var12 = var7;
                    var1 = var16[var10](var15, var14, var13, var12, var11);
                case 116:
                    var9 = var4.bind(var0)();
                    var1 = var9.done;
                    var2 = var9;
                    if (!var1) {
                        _fun39951_ip = 44;
                        continue _fun39951
                    }
                case 131:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleLoadMessagesSuccess';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39952: for (var _fun39952_ip = 0;;) switch (_fun39952_ip) {
                case 0:
                    var0 = arg0;
                    var5 = arg1;
                    var4 = this;
                    var6 = _closure1_slot8;
                    var3 = var6.getBasicChannel;
                    var1 = var0.channelId;
                    var1 = var3.bind(var6)(var1);
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun39952_ip = 189;
                        continue _fun39952
                    }
                case 41:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.isReadableChannelId;
                    var2 = var0.channelId;
                    var2 = var3.bind(var6)(var2);
                    if (!var2) {
                        _fun39952_ip = 189;
                        continue _fun39952
                    }
                case 82:
                    var2 = var0.isAfter;
                    if (var2) {
                        _fun39952_ip = 155;
                        continue _fun39952
                    }
                case 91:
                    var2 = var0.isBefore;
                    if (var2) {
                        _fun39952_ip = 155;
                        continue _fun39952
                    }
                case 100:
                    var2 = var0.hasMoreAfter;
                    if (var2) {
                        _fun39952_ip = 155;
                        continue _fun39952
                    }
                case 109:
                    var3 = var0.limit;
                    var2 = 5;
                    if (!(var3 > var2)) {
                        _fun39952_ip = 155;
                        continue _fun39952
                    }
                case 121:
                    var7 = var4.replaceChannel;
                    var11 = var1.guild_id;
                    var10 = var0.channelId;
                    var9 = var0.messages;
                    var12 = var4;
                    var8 = var5;
                    var2 = var12[var7](var11, var10, var9, var8, var7);
                    _fun39952_ip = 189;
                    continue _fun39952;
                case 155:
                    var3 = var4.upsertMany;
                    var11 = var1.guild_id;
                    var10 = var0.channelId;
                    var9 = var0.messages;
                    var12 = var4;
                    var8 = var5;
                    var0 = var12[var3](var11, var10, var9, var8, var7);
                case 189:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleMessageDelete';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39953: for (var _fun39953_ip = 0;;) switch (_fun39953_ip) {
                case 0:
                    var0 = arg0;
                    var5 = this;
                    var2 = var0.id;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun39953_ip = 48;
                        continue _fun39953
                    }
                case 17:
                    var4 = var5.deleteOne;
                    var9 = var0.guildId;
                    var8 = var0.channelId;
                    var7 = var0.id;
                    var6 = arg1;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                case 48:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleMessageDeleteBulk';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39954: for (var _fun39954_ip = 0;;) switch (_fun39954_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var4 = this;
                    var2 = _closure1_slot12;
                    var1 = var6.ids;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun39954_ip = 87;
                        continue _fun39954
                    }
                case 41:
                    var11 = var2.value;
                    var8 = var4.deleteOne;
                    var13 = var6.guildId;
                    var12 = var6.channelId;
                    var14 = var4;
                    var10 = var5;
                    var1 = var14[var8](var13, var12, var11, var10, var9);
                    var7 = var3.bind(var0)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun39954_ip = 41;
                        continue _fun39954
                    }
                case 87:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleChannelDelete';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var0 = arg0;
            var4 = this;
            var3 = var4.deleteChannel;
            var1 = var0.channel;
            var2 = var1.guild_id;
            var0 = var0.channel;
            var1 = var0.id;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39956: for (var _fun39956_ip = 0;;) switch (_fun39956_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var1 = var0.guild;
                    var1 = var1.unavailable;
                    if (var1) {
                        _fun39956_ip = 45;
                        continue _fun39956
                    }
                case 20:
                    var2 = var3.deleteGuild;
                    var0 = var0.guild;
                    var1 = var0.id;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 45:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'insertStale';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            var6 = arg0;
            var5 = arg1;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var0 = 9;
            var2 = var8[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.messagesTransaction;
            var2 = arg3;
            var4 = var3.bind(var4)(var2);
            var3 = _closure1_slot7;
            var2 = var3.lastTimeConnectedChanged;
            var11 = var2.bind(var3)();
            var3 = var4.put;
            var7 = _closure1_slot0;
            var1 = 11;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var9 = var1.KvMessage;
            var2 = var9.fromMessage;
            var12 = arg2;
            var15 = var9;
            var14 = var6;
            var13 = var5;
            var12 = var15[var2](var14, var13, var12, var11, var10);
            var1 = 12;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var1 = var1.ConflictOptions;
            var11 = var1.Skip;
            var15 = var4;
            var14 = var6;
            var13 = var5;
            var1 = var15[var3](var14, var13, var12, var11, var10);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'upsertOne';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            var5 = arg0;
            var4 = arg1;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var0 = 9;
            var2 = var9[var0];
            var0 = undefined;
            var6 = var3.bind(var0)(var2);
            var3 = var6.messagesTransaction;
            var2 = arg3;
            var3 = var3.bind(var6)(var2);
            var6 = _closure1_slot7;
            var2 = var6.lastTimeConnectedChanged;
            var12 = var2.bind(var6)();
            var7 = var3.put;
            var8 = _closure1_slot0;
            var2 = 11;
            var2 = var9[var2];
            var2 = var8.bind(var0)(var2);
            var10 = var2.KvMessage;
            var6 = var10.fromMessage;
            var13 = arg2;
            var16 = var10;
            var15 = var5;
            var14 = var4;
            var13 = var16[var6](var15, var14, var13, var12, var11);
            var2 = 12;
            var2 = var9[var2];
            var2 = var8.bind(var0)(var2);
            var2 = var2.ConflictOptions;
            var12 = var2.Replace;
            var16 = var3;
            var15 = var5;
            var14 = var4;
            var2 = var16[var7](var15, var14, var13, var12, var11);
            var2 = var3.trimChannel;
            var6 = _closure1_slot9;
            var1 = var6.saveLimit;
            var1 = var1.bind(var6)(var4);
            var1 = var2.bind(var3)(var5, var4, var1);
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'upsertMany';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun39960: for (var _fun39960_ip = 0;;) switch (_fun39960_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var3 = var6.messagesTransaction;
                    var2 = arg3;
                    var3 = var3.bind(var6)(var2);
                    var6 = _closure1_slot7;
                    var2 = var6.lastTimeConnectedChanged;
                    var9 = var2.bind(var6)();
                    var6 = _closure1_slot12;
                    var2 = arg2;
                    var8 = var6.bind(var0)(var2);
                    var6 = var8.bind(var0)();
                    var2 = var6.done;
                    var7 = 11;
                    if (var2) {
                        _fun39960_ip = 164;
                        continue _fun39960
                    }
                case 86:
                    var14 = var6.value;
                    var10 = var3.put;
                    var11 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var11.bind(var0)(var2);
                    var11 = var2.KvMessage;
                    var2 = var11.fromMessage;
                    var17 = var11;
                    var16 = var5;
                    var15 = var4;
                    var13 = var9;
                    var2 = var17[var2](var16, var15, var14, var13, var12);
                    var2 = var10.bind(var3)(var5, var4, var2);
                    var10 = var8.bind(var0)();
                    var2 = var10.done;
                    var6 = var10;
                    if (!var2) {
                        _fun39960_ip = 86;
                        continue _fun39960
                    }
                case 164:
                    var2 = var3.trimChannel;
                    var6 = _closure1_slot9;
                    var1 = var6.saveLimit;
                    var1 = var1.bind(var6)(var4);
                    var1 = var2.bind(var3)(var5, var4, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'replaceChannel';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun39961: for (var _fun39961_ip = 0;;) switch (_fun39961_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var9 = arg2;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var4;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 9;
                    var3 = var3[var0];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var3);
                    var6 = var7.messagesTransaction;
                    var3 = arg3;
                    var3 = var6.bind(var7)(var3);
                    var7 = _closure1_slot7;
                    var6 = var7.lastTimeConnectedChanged;
                    var6 = var6.bind(var7)();
                    var _closure3_slot2 = var6;
                    var7 = _closure1_slot9;
                    var6 = var7.saveLimit;
                    var10 = var6.bind(var7)(var4);
                    var6 = var9.length;
                    var7 = var9;
                    if (!(var6 > var10)) {
                        _fun39961_ip = 122;
                        continue _fun39961
                    }
                case 103:
                    var8 = var9.slice;
                    var6 = var9.length;
                    var6 = var6 - var10;
                    var7 = var8.bind(var9)(var6);
                case 122:
                    var6 = var7.map;
                    var2 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var5 = var0.KvMessage;
                        var4 = var5.fromMessage;
                        var9 = _closure3_slot0;
                        var8 = _closure3_slot1;
                        var6 = _closure3_slot2;
                        var7 = arg0;
                        var10 = var5;
                        var0 = var10[var4](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var6 = var6.bind(var7)(var2);
                    var2 = var3.replaceChannel;
                    var2 = var2.bind(var3)(var5, var4, var6);
                    var2 = var3.trimChannel;
                    var6 = _closure1_slot9;
                    var1 = var6.saveLimit;
                    var1 = var1.bind(var6)(var4);
                    var1 = var2.bind(var3)(var5, var4, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'updateOne';
        var4.key = var6;
        var6 = function*(arg0, arg1, arg2, arg3) { // Environment: var5
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun39964: for (var _fun39964_ip = 0;;) switch (_fun39964_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var5 = arg1;
                        var10 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39964_ip = 244;
                            continue _fun39964
                        }
                    case 19:
                        var1 = var10.id;
                        var3 = null;
                        if (!(var3 == var1)) {
                            _fun39964_ip = 58;
                            continue _fun39964
                        }
                    case 30:
                        var4 = _closure1_slot10;
                        var2 = var4.warn;
                        var1 = 'updateOne: message.id is null; cannot update a message if we do not know its id.';
                        var1 = var2.bind(var4)(var1);
                        _fun39964_ip = 236;
                        continue _fun39964;
                    case 58:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 9;
                        var1 = var7[var1];
                        var8 = undefined;
                        var7 = var4.bind(var8)(var1);
                        var4 = var7.messages;
                        var1 = arg3;
                        var1 = var1.database;
                        var4 = var4.bind(var7)(var1);
                        var7 = var4.get;
                        var1 = var10.id;
                        var1 = var7.bind(var4)(var6, var5, var1);
                        SaveGenerator(address = 124);
                    case 122:
                        return var1;
                    case 124:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun39964_ip = 241;
                            continue _fun39964
                        }
                    case 130:
                        var9 = _closure1_slot7;
                        var7 = var9.lastTimeConnectedChanged;
                        var9 = var7.bind(var9)();
                        if (!(var3 != var1)) {
                            _fun39964_ip = 236;
                            continue _fun39964
                        }
                    case 148:
                        var3 = var4.put;
                        var7 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var2 = 11;
                        var2 = var11[var2];
                        var2 = var7.bind(var8)(var2);
                        var8 = var2.KvMessage;
                        var7 = var8.fromMessage;
                        var2 = {};
                        var14 = var1.message;
                        var15 = var2;
                        var11 = copyDataProperties(var15, var14);
                        var15 = var2;
                        var14 = var10;
                        var10 = copyDataProperties(var15, var14);
                        var16 = var8;
                        var15 = var6;
                        var14 = var5;
                        var13 = var2;
                        var12 = var9;
                        var2 = var16[var7](var15, var14, var13, var12, var11);
                        var2 = var3.bind(var4)(var6, var5, var2);
                    case 236:
                        var2 = undefined;
                        return var2;
                    case 241:
                        return var1;
                    case 244:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var1)(var6);
        var _closure2_slot0 = var6;
        var6 = function() { // Original name: updateOne, environment: var5
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'deleteOne';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.messagesTransaction;
            var1 = arg3;
            var5 = var2.bind(var3)(var1);
            var4 = var5.deleteMessage;
            var3 = arg0;
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'deleteChannel';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.messagesTransaction;
            var1 = arg2;
            var4 = var2.bind(var3)(var1);
            var3 = var4.deleteChannel;
            var2 = arg0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'deleteGuild';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.messagesTransaction;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.deleteGuild;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var5;
        var0[18] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var4 = var4.bind(var0)();
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var13 = var5;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_database/modules/Messages.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.ChannelHistory = var3;
    var2.isLikelyNotDelta = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 6, 7, 3433, 1372, 4330, 3, 4217, 1637, 4336, 4342, 1638, 2]);