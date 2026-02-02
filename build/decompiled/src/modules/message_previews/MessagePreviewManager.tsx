// modules/message_previews/MessagePreviewManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun84701: for (var _fun84701_ip = 0;;) switch (_fun84701_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun84701_ip = 46;
                    continue _fun84701
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun84701_ip = 55;
                    continue _fun84701
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun84701_ip = 345;
                    continue _fun84701
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun84701_ip = 323;
                    continue _fun84701
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun84701_ip = 283;
                    continue _fun84701
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun84701_ip = 270;
                    continue _fun84701
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
                    _fun84701_ip = 163;
                    continue _fun84701
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun84701_ip = 179;
                    continue _fun84701
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun84701_ip = 249;
                    continue _fun84701
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun84701_ip = 249;
                    continue _fun84701
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun84701_ip = 234;
                    continue _fun84701
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun84701_ip = 247;
                    continue _fun84701
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun84701_ip = 265;
                continue _fun84701;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun84701_ip = 283;
                continue _fun84701;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun84701_ip = 323;
                    continue _fun84701
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
                    _fun84701_ip = 330;
                    continue _fun84701
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun84702: for (var _fun84702_ip = 0;;) switch (_fun84702_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun84702_ip = 56;
                                continue _fun84702
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
                            _fun84702_ip = 67;
                            continue _fun84702;
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
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun84703: for (var _fun84703_ip = 0;;) switch (_fun84703_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun84703_ip = 23;
                    continue _fun84703
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun84703_ip = 33;
                    continue _fun84703
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
                    _fun84703_ip = 70;
                    continue _fun84703
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun84703_ip = 55;
                    continue _fun84703
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        _fun84704: for (var _fun84704_ip = 0;;) switch (_fun84704_ip) {
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
                _fun84704_ip = 76;
                continue _fun84704;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.isThread;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var6[var3];
    var8 = var4.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'MessagePreviewManager';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot16 = var3;
    var3 = 19;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun84708: for (var _fun84708_ip = 0;;) switch (_fun84708_ip) {
                case 0:
                    var4 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot5;
                    var3 = _closure2_slot1;
                    var5 = undefined;
                    var7 = var7.bind(var5)(var4, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot8;
                    var9 = var0.bind(var5)(var3);
                    var3 = _closure1_slot7;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun84708_ip = 86;
                        continue _fun84708
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var10);
                    _fun84708_ip = 120;
                    continue _fun84708;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot8;
                    var6 = var6.bind(var5)(var4);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var5)(var4, var0);
                    var _closure3_slot0 = var0;
                    var3 = global;
                    var4 = var3.Map;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var4
                        }
                    });
                    var14 = var6;
                    var4 = new var14[var4](var13);
                    var4 = var4 instanceof Object ? var4 : var6;
                    var0.remote = var4;
                    var4 = false;
                    var0.remoteTicking = var4;
                    var0.tickQueued = var4;
                    var3 = var3.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var4;
                    var3 = new var14[var3](var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.localFetching = var3;
                    var3 = {};
                    var4 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleConnectionOpenSupplemental;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3.CONNECTION_OPEN_SUPPLEMENTAL = var4;
                    var4 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleConnectionResumed;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3.CONNECTION_RESUMED = var4;
                    var4 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleGuildCreate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.GUILD_CREATE = var4;
                    var4 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleGuildDelete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.GUILD_DELETE = var4;
                    var4 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessagesLoaded;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.LOAD_MESSAGES_SUCCESS = var4;
                    var4 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessagesLoaded;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.LOCAL_MESSAGES_LOADED = var4;
                    var4 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleLogout;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3.LOGOUT = var4;
                    var4 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessageCreate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.MESSAGE_CREATE = var4;
                    var4 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessageDelete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.MESSAGE_DELETE = var4;
                    var4 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessageUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.MESSAGE_UPDATE = var4;
                    var4 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleThreadListSync;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.THREAD_LIST_SYNC = var4;
                    var0.actions = var3;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 14;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.debounce;
                    var2 = _closure1_slot4;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun84721: for (var _fun84721_ip = 0;;) switch (_fun84721_ip) {
                                case 0:
                                    StartGenerator();
                                    var1 = arguments[0];
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun84721_ip = 400;
                                        continue _fun84721
                                    }
                                case 13:
                                    var2 = undefined;
                                    if (!(var1 === var2)) {
                                        _fun84721_ip = 21;
                                        continue _fun84721
                                    }
                                case 19:
                                    var1 = 0;
                                case 21:
                                    var5 = var1;
                                    var13 = undefined;
                                    var14 = undefined;
                                    var15 = undefined;
                                    var16 = undefined;
                                    SaveGenerator(address = 36);
                                case 34:
                                    return var2;
                                case 36:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun84721_ip = 397;
                                        continue _fun84721
                                    }
                                case 45:
                                    var4 = _closure1_slot10;
                                    var3 = var4.isConnected;
                                    var7 = var3.bind(var4)();
                                    var3 = _closure3_slot0;
                                    if (var7) {
                                        _fun84721_ip = 85;
                                        continue _fun84721
                                    }
                                case 72:
                                    var7 = true;
                                    var3.tickQueued = var7;
                                    _fun84721_ip = 394;
                                    continue _fun84721;
                                case 85:
                                    var3 = var3.remoteTicking;
                                    if (var3) {
                                        _fun84721_ip = 394;
                                        continue _fun84721
                                    }
                                case 97:
                                    var7 = var5;
                                    var3 = 5;
                                    if (!(!(var7 > var3))) {
                                        _fun84721_ip = 394;
                                        continue _fun84721
                                    }
                                case 110:
                                    var7 = _closure3_slot0;
                                    var3 = false;
                                    var7.tickQueued = var3;
                                case 122: // try_start_0
                                    var7 = _closure3_slot0;
                                    var8 = true;
                                    var7.remoteTicking = var8;
                                    var8 = _closure1_slot17;
                                    var7 = var7.remote;
                                    var7 = var8.bind(var2)(var7);
                                    var14 = var7;
                                    var7 = var7.bind(var2)();
                                    var13 = var7;
                                    var7 = var7.done;
                                    var12 = 2;
                                    var11 = 0;
                                    var10 = 1;
                                    var9 = null;
                                    if (var7) {
                                        _fun84721_ip = 289;
                                        continue _fun84721
                                    }
                                case 177:
                                    var7 = var13;
                                    var8 = var7.value;
                                    var7 = _closure1_slot3;
                                    var8 = var7.bind(var2)(var8, var12);
                                    var7 = var8[var11];
                                    var15 = var7;
                                    var16 = var8[var10];
                                    if (!(var9 != var7)) {
                                        _fun84721_ip = 236;
                                        continue _fun84721
                                    }
                                case 210:
                                    var18 = _closure3_slot0;
                                    var17 = var18.fetchGuilds;
                                    var8 = var15;
                                    var7 = var16;
                                    var7 = var17.bind(var18)(var8, var7);
                                    _fun84721_ip = 256;
                                    continue _fun84721;
                                case 236:
                                    var18 = _closure3_slot0;
                                    var17 = var18.fetchDms;
                                    var8 = var16;
                                    var7 = var17.bind(var18)(var8);
                                case 256:
                                    SaveGenerator(address = 260);
                                case 258:
                                    return var7;
                                case 260:
                                    ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                                    if (var8) {
                                        _fun84721_ip = 286;
                                        continue _fun84721
                                    }
                                case 266:
                                    var8 = var14;
                                    var8 = var8.bind(var2)();
                                    var13 = var8;
                                    var8 = var8.done;
                                    if (var8) {
                                        _fun84721_ip = 289;
                                        continue _fun84721
                                    }
                                case 284:
                                    _fun84721_ip = 177;
                                    continue _fun84721;
                                case 286: // try_end0
                                    return var7;
                                case 289: // try_start_1
                                    var7 = _closure3_slot0;
                                    var8 = var7.cleanup;
                                    var8 = var8.bind(var7)();
                                    var7.remoteTicking = var3;
                                case 309: // try_end1
                                    _fun84721_ip = 394;
                                    continue _fun84721;
                                case 311: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 20);
                                    var8 = _closure1_slot16;
                                    var7 = var8.log;
                                    var6 = var5;
                                    var5 = global;
                                    var5 = var5.HermesInternal;
                                    var11 = var5.concat;
                                    var23 = "couldn't fetch message previews (attempt: ";
                                    var21 = ', error: ';
                                    var19 = ')';
                                    var22 = var6;
                                    var5 = var23[var11](var22, var21, var20, var19, var18);
                                    var5 = var7.bind(var8)(var5);
                                    var5 = _closure3_slot0;
                                    var5.remoteTicking = var3;
                                    var4 = var5.remoteTick;
                                    var3 = 1;
                                    var3 = var6 + var3;
                                    var3 = var4.bind(var5)(var3);
                                case 394:
                                    return var2;
                                case 397:
                                    return var1;
                                case 400:
                                    return var0;
                            }
                        };
                        var1 = var0.next;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var2 = var2.bind(var5)(var1);
                    var1 = 100;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.remoteTick = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot9;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'addWant';
        var4.key = var0;
        var0 = function arg0() {
            _fun84722: for (var _fun84722_ip = 0;;) switch (_fun84722_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var2 = _closure1_slot13;
                    var0 = var2.getBasicChannel;
                    var0 = var0.bind(var2)(var4);
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun84722_ip = 130;
                        continue _fun84722
                    }
                case 30:
                    var5 = var0.guild_id;
                    var6 = var2 != var5;
                    var2 = null;
                    if (!var6) {
                        _fun84722_ip = 47;
                        continue _fun84722
                    }
                case 44:
                    var2 = var5;
                case 47:
                    var6 = _closure1_slot11;
                    var5 = var0.type;
                    var0 = undefined;
                    var0 = var6.bind(var0)(var5);
                    if (var0) {
                        _fun84722_ip = 82;
                        continue _fun84722
                    }
                case 66:
                    var5 = _closure1_slot14;
                    var3 = var5.isLatest;
                    var0 = var3.bind(var5)(var2, var4);
                case 82:
                    if (var0) {
                        _fun84722_ip = 130;
                        continue _fun84722
                    }
                case 85:
                    var0 = var1.getOrCreate;
                    var3 = var0.bind(var1)(var2);
                    var0 = var3.addWant;
                    var0 = var0.bind(var3)(var4);
                    var0 = var1.fetchLocal;
                    var0 = var0.bind(var1)(var2);
                    var0 = var1.remoteTick;
                    var0 = var0.bind(var1)();
                case 130:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(17);
        var0[0] = var4;
        var4 = {};
        var7 = 'fetchLocal';
        var4.key = var7;
        var7 = _closure1_slot4;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun84724: for (var _fun84724_ip = 0;;) switch (_fun84724_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun84724_ip = 452;
                            continue _fun84724
                        }
                    case 16:
                        var3 = var10;
                        var1 = undefined;
                        var6 = undefined;
                        var7 = undefined;
                        var9 = undefined;
                        var8 = _closure1_slot14;
                        var5 = var8.isLocalFetchNeeded;
                        var5 = var5.bind(var8)(var10);
                        if (!var5) {
                            _fun84724_ip = 449;
                            continue _fun84724
                        }
                    case 53:
                        var10 = var4.localFetching;
                        var8 = var10.has;
                        var5 = var3;
                        var5 = var8.bind(var10)(var5);
                        if (var5) {
                            _fun84724_ip = 449;
                            continue _fun84724
                        }
                    case 78: // try_start_0 // try_start_1
                        var11 = _closure1_slot16;
                        var8 = var11.verbose;
                        var10 = var3;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var13 = var5.concat;
                        var12 = 'fetching local previews (via: database, guild_id: ';
                        var5 = ')';
                        var5 = var13.bind(var12)(var10, var5);
                        var5 = var8.bind(var11)(var5);
                        var8 = var4.localFetching;
                        var5 = var8.add;
                        var5 = var5.bind(var8)(var10);
                        var8 = _closure1_slot12;
                        var5 = var8.getId;
                        var7 = var5.bind(var8)();
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var5 = 15;
                        var5 = var10[var5];
                        var8 = var8.bind(var1)(var5);
                        var5 = var8.messages;
                        var5 = var5.bind(var8)();
                        var6 = var5;
                        var8 = null;
                        var10 = var8 == var5;
                        var5 = undefined;
                        if (var10) {
                            _fun84724_ip = 216;
                            continue _fun84724
                        }
                    case 199:
                        var11 = var6;
                        var10 = var11.getMostRecents;
                        var6 = var3;
                        var5 = var10.bind(var11)(var6);
                    case 216:
                        SaveGenerator(address = 220);
                    case 218:
                        return var5;
                    case 220:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun84724_ip = 341;
                            continue _fun84724
                        }
                    case 226:
                        var9 = var5;
                        var8 = var8 != var5;
                        var6 = var8;
                        if (!var8) {
                            _fun84724_ip = 260;
                            continue _fun84724
                        }
                    case 239:
                        var8 = var7;
                        var10 = _closure1_slot12;
                        var7 = var10.getId;
                        var7 = var7.bind(var10)();
                        var6 = var8 === var7;
                    case 260:
                        if (!var6) {
                            _fun84724_ip = 339;
                            continue _fun84724
                        }
                    case 263:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 16;
                        var6 = var8[var6];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'MESSAGE_PREVIEWS_LOCALLY_LOADED';
                        var6.type = var10;
                        var10 = var3;
                        var6.guildId = var10;
                        var11 = var9;
                        var10 = var11.map;
                        var9 = function(arg0) { // Environment: var9
                            _fun84725: for (var _fun84725_ip = 0;;) switch (_fun84725_ip) {
                                case 0:
                                    var4 = arg0;
                                    var0 = var4[Symbol.iterator];
                                    var4 = var0().next;
                                    var1 = var4().value;
                                    var2 = var0;
                                    var6 = undefined;
                                    var3 = var2 === var6;
                                    var2 = undefined;
                                    if (var3) {
                                        _fun84725_ip = 27;
                                        continue _fun84725
                                    }
                                case 24:
                                    var2 = var1;
                                case 27:
                                    var1 = undefined;
                                    if (var3) {
                                        _fun84725_ip = 57;
                                        continue _fun84725
                                    }
                                case 32:
                                    var5 = var4().value;
                                    var4 = var0;
                                    var4 = var4 === var6;
                                    var1 = undefined;
                                    var3 = var4;
                                    if (var4) {
                                        _fun84725_ip = 57;
                                        continue _fun84725
                                    }
                                case 51:
                                    var1 = var5;
                                    var3 = var4;
                                case 57:
                                    if (var3) {
                                        _fun84725_ip = 63;
                                        continue _fun84725
                                    }
                                case 60:
                                    var0.return();
                                case 63:
                                    var0 = new Array(2);
                                    var0[0] = var2;
                                    var1 = var1.message;
                                    var0[1] = var1;
                                    return var0;
                            }
                        };
                        var9 = var10.bind(var11)(var9);
                        var6.messages = var9;
                        var6 = var7.bind(var8)(var6);
                    case 339: // try_end0
                        _fun84724_ip = 408;
                        continue _fun84724;
                    case 341: // try_end1
                        var8 = var4.localFetching;
                        var7 = var8.delete;
                        var6 = var3;
                        var6 = var7.bind(var8)(var6);
                        return var5;
                    case 363: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var6 = _closure1_slot16;
                        var5 = var6.log;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var8 = var2.concat;
                        var7 = "couldn't fetch local previews (error: ";
                        var2 = ')';
                        var2 = var8.bind(var7)(var9, var2);
                        var2 = var5.bind(var6)(var2);
                    case 408: // try_end2
                        var6 = var4.localFetching;
                        var5 = var6.delete;
                        var2 = var3;
                        var2 = var5.bind(var6)(var2);
                        _fun84724_ip = 449;
                        continue _fun84724;
                    case 429: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 2);
                        var5 = var4.localFetching;
                        var4 = var5.delete;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 449:
                        return var1;
                    case 452:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
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
        var0[1] = var4;
        var4 = {};
        var6 = 'fetchGuilds';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun84727: for (var _fun84727_ip = 0;;) switch (_fun84727_ip) {
                case 0:
                    var3 = arg1;
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = var3.nextWants;
                    var1 = 1000;
                    var2 = var2.bind(var3)(var1);
                    var _closure3_slot1 = var2;
                    var4 = var2.length;
                    var1 = 0;
                    if (!(var1 !== var4)) {
                        _fun84727_ip = 65;
                        continue _fun84727
                    }
                case 44:
                    var1 = var3.try;
                    var0 = function() { // Environment: var0
                        var6 = _closure1_slot16;
                        var5 = var6.verbose;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var2 = var3.join;
                        var0 = ', ';
                        var12 = var2.bind(var3)(var0);
                        var0 = global;
                        var2 = var0.HermesInternal;
                        var9 = var2.concat;
                        var15 = 'fetching guild previews (via: gateway, guild_id: ';
                        var13 = ', channel_ids: ';
                        var11 = ')';
                        var14 = var4;
                        var2 = var15[var9](var14, var13, var12, var11, var10);
                        var2 = var5.bind(var6)(var2);
                        var2 = _closure1_slot10;
                        var1 = var2.getSocket;
                        var2 = var1.bind(var2)();
                        var1 = var2.requestLastMessages;
                        var1 = var1.bind(var2)(var4, var3);
                        var1 = var0.Promise;
                        var0 = var1.resolve;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var1.bind(var3)(var2, var0);
                    _fun84727_ip = 83;
                    continue _fun84727;
                case 65:
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var0 = var1.bind(var2)();
                case 83:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'fetchDms';
        var4.key = var6;
        var6 = function arg0() {
            _fun84729: for (var _fun84729_ip = 0;;) switch (_fun84729_ip) {
                case 0:
                    var3 = arg0;
                    var2 = var3.nextWants;
                    var1 = 30;
                    var2 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var2;
                    var4 = var2.length;
                    var1 = 0;
                    if (!(var1 !== var4)) {
                        _fun84729_ip = 69;
                        continue _fun84729
                    }
                case 34:
                    var1 = var3.try;
                    var5 = _closure1_slot4;
                    var4 = undefined;
                    var0 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun84731: for (var _fun84731_ip = 0;;) switch (_fun84731_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun84731_ip = 221;
                                        continue _fun84731
                                    }
                                case 10:
                                    var4 = _closure1_slot16;
                                    var2 = var4.verbose;
                                    var7 = _closure3_slot0;
                                    var5 = var7.join;
                                    var1 = ', ';
                                    var8 = var5.bind(var7)(var1);
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var6 = var1.concat;
                                    var5 = 'fetching dm previews (via: http, channel_ids: ';
                                    var1 = ')';
                                    var1 = var6.bind(var5)(var8, var1);
                                    var1 = var2.bind(var4)(var1);
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 17;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var1 = var4.bind(var2)(var1);
                                    var5 = var1.HTTP;
                                    var4 = var5.post;
                                    var1 = {};
                                    var6 = _closure1_slot15;
                                    var6 = var6.MESSAGE_PREVIEWS;
                                    var1.url = var6;
                                    var6 = {};
                                    var6.channel_ids = var7;
                                    var1.body = var6;
                                    var6 = false;
                                    var1.rejectWithError = var6;
                                    var1 = var4.bind(var5)(var1);
                                    SaveGenerator(address = 155);
                                case 153:
                                    return var1;
                                case 155:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun84731_ip = 218;
                                        continue _fun84731
                                    }
                                case 161:
                                    var6 = var1.body;
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 16;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.dispatch;
                                    var3 = {
                                        'type': 'MESSAGE_PREVIEWS_LOADED',
                                        'guildId': null
                                    };
                                    var3.messages = var6;
                                    var3 = var4.bind(var5)(var3);
                                    return var2;
                                case 218:
                                    return var1;
                                case 221:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var0 = var5.bind(var4)(var0);
                    var0 = var1.bind(var3)(var2, var0);
                    _fun84729_ip = 87;
                    continue _fun84729;
                case 69:
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var0 = var1.bind(var2)();
                case 87:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'syncChannel';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun84732: for (var _fun84732_ip = 0;;) switch (_fun84732_ip) {
                case 0:
                    var5 = arg0;
                    var2 = arg1;
                    var0 = this;
                    var1 = var0.remote;
                    var0 = var1.get;
                    var1 = var0.bind(var1)(var5);
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun84732_ip = 53;
                        continue _fun84732
                    }
                case 34:
                    var4 = _closure1_slot14;
                    var3 = var4.isLatest;
                    var0 = var3.bind(var4)(var5, var2);
                case 53:
                    if (!var0) {
                        _fun84732_ip = 67;
                        continue _fun84732
                    }
                case 56:
                    var0 = var1.removeWant;
                    var0 = var0.bind(var1)(var2);
                case 67:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getOrCreate';
        var4.key = var6;
        var6 = function arg0() {
            _fun84733: for (var _fun84733_ip = 0;;) switch (_fun84733_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.remote;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun84733_ip = 93;
                        continue _fun84733
                    }
                case 25:
                    var4 = var0.remote;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 18;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.RemoteFetchData;
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
                    var1 = var0.remote;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'cleanup';
        var4.key = var6;
        var6 = function() {
            _fun84734: for (var _fun84734_ip = 0;;) switch (_fun84734_ip) {
                case 0:
                    var8 = this;
                    var2 = _closure1_slot17;
                    var1 = var8.remote;
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var2 = var6.bind(var0)();
                    var1 = var2.done;
                    var5 = 2;
                    var4 = 0;
                    var3 = 1;
                    if (var1) {
                        _fun84734_ip = 110;
                        continue _fun84734
                    }
                case 43:
                    var9 = var2.value;
                    var1 = _closure1_slot3;
                    var1 = var1.bind(var0)(var9, var5);
                    var10 = var1[var4];
                    var9 = var1[var3];
                    var1 = var9.empty;
                    var1 = var1.bind(var9)();
                    if (!var1) {
                        _fun84734_ip = 95;
                        continue _fun84734
                    }
                case 79:
                    var9 = var8.remote;
                    var1 = var9.delete;
                    var1 = var1.bind(var9)(var10);
                case 95:
                    var9 = var6.bind(var0)();
                    var1 = var9.done;
                    var2 = var9;
                    if (!var1) {
                        _fun84734_ip = 43;
                        continue _fun84734
                    }
                case 110:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleConnectionOpenSupplemental';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var1 = var2.handleConnectionResumed;
            var0 = false;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleConnectionResumed';
        var4.key = var6;
        var6 = function() {
            _fun84736: for (var _fun84736_ip = 0;;) switch (_fun84736_ip) {
                case 0:
                    var1 = arguments[0];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun84736_ip = 14;
                        continue _fun84736
                    }
                case 12:
                    var1 = true;
                case 14:
                    var3 = var2.tickQueued;
                    if (!var3) {
                        _fun84736_ip = 60;
                        continue _fun84736
                    }
                case 23:
                    var3 = var2.remoteTicking;
                    if (var3) {
                        _fun84736_ip = 60;
                        continue _fun84736
                    }
                case 32:
                    var3 = var2.remoteTick;
                    var3 = var3.bind(var2)();
                    var4 = var2.remoteTick;
                    var3 = var4.flush;
                    var3 = var3.bind(var4)();
                    _fun84736_ip = 103;
                    continue _fun84736;
                case 60:
                    if (!var1) {
                        _fun84736_ip = 103;
                        continue _fun84736
                    }
                case 63:
                    var3 = var2.localFetching;
                    var1 = var3.clear;
                    var1 = var1.bind(var3)();
                    var3 = var2.remote;
                    var1 = var3.clear;
                    var1 = var1.bind(var3)();
                    var1 = false;
                    var2.remoteTicking = var1;
                case 103:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleGuildCreate';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var2 = var0.remote;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var0.guild;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var2 = var0.remote;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var0.guild;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'handleLogout';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var2 = var1.localFetching;
            var0 = var2.clear;
            var0 = var0.bind(var2)();
            var2 = var1.remote;
            var0 = var2.clear;
            var0 = var0.bind(var2)();
            var0 = false;
            var1.remoteTicking = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'handleMessageCreate';
        var4.key = var6;
        var6 = function arg0() {
            _fun84740: for (var _fun84740_ip = 0;;) switch (_fun84740_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var2 = var3.syncChannel;
                    var4 = var0.guildId;
                    var1 = null;
                    var5 = var1 != var4;
                    if (!var5) {
                        _fun84740_ip = 29;
                        continue _fun84740
                    }
                case 26:
                    var1 = var4;
                case 29:
                    var0 = var0.channelId;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'handleMessageDelete';
        var4.key = var6;
        var6 = function arg0() {
            _fun84741: for (var _fun84741_ip = 0;;) switch (_fun84741_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var2 = var3.syncChannel;
                    var4 = var0.guildId;
                    var1 = null;
                    var5 = var1 != var4;
                    if (!var5) {
                        _fun84741_ip = 29;
                        continue _fun84741
                    }
                case 26:
                    var1 = var4;
                case 29:
                    var0 = var0.channelId;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'handleMessageUpdate';
        var4.key = var6;
        var6 = function arg0() {
            _fun84742: for (var _fun84742_ip = 0;;) switch (_fun84742_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var1 = var0.message;
                    var1 = var1.channel_id;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun84742_ip = 61;
                        continue _fun84742
                    }
                case 22:
                    var1 = var3.syncChannel;
                    var4 = var0.guildId;
                    var5 = var2 != var4;
                    var2 = null;
                    if (!var5) {
                        _fun84742_ip = 45;
                        continue _fun84742
                    }
                case 42:
                    var2 = var4;
                case 45:
                    var0 = var0.message;
                    var0 = var0.channel_id;
                    var0 = var1.bind(var3)(var2, var0);
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'handleMessagesLoaded';
        var4.key = var6;
        var6 = function arg0() {
            _fun84743: for (var _fun84743_ip = 0;;) switch (_fun84743_ip) {
                case 0:
                    var1 = arg0;
                    var5 = this;
                    var4 = _closure1_slot13;
                    var3 = var4.getBasicChannel;
                    var0 = var1.channelId;
                    var6 = var3.bind(var4)(var0);
                    var3 = null;
                    var4 = var3 == var6;
                    var0 = undefined;
                    var7 = undefined;
                    if (var4) {
                        _fun84743_ip = 47;
                        continue _fun84743
                    }
                case 42:
                    var7 = var6.guild_id;
                case 47:
                    var8 = var3 != var7;
                    var4 = null;
                    if (!var8) {
                        _fun84743_ip = 59;
                        continue _fun84743
                    }
                case 56:
                    var4 = var7;
                case 59:
                    if (!(var3 != var6)) {
                        _fun84743_ip = 135;
                        continue _fun84743
                    }
                case 63:
                    var2 = _closure1_slot17;
                    var1 = var1.messages;
                    if (!(var3 == var1)) {
                        _fun84743_ip = 81;
                        continue _fun84743
                    }
                case 77:
                    var1 = new Array(0);
                case 81:
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun84743_ip = 135;
                        continue _fun84743
                    }
                case 98:
                    var1 = var2.value;
                    var6 = var5.syncChannel;
                    var1 = var1.channel_id;
                    var1 = var6.bind(var5)(var4, var1);
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun84743_ip = 98;
                        continue _fun84743
                    }
                case 135:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'handleThreadListSync';
        var4.key = var6;
        var5 = function arg0() {
            _fun84744: for (var _fun84744_ip = 0;;) switch (_fun84744_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var3 = var1.remote;
                    var2 = var3.get;
                    var1 = var0.guildId;
                    var4 = var2.bind(var3)(var1);
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun84744_ip = 109;
                        continue _fun84744
                    }
                case 33:
                    var1 = _closure1_slot17;
                    var0 = var0.mostRecentMessages;
                    if (!(var2 == var0)) {
                        _fun84744_ip = 54;
                        continue _fun84744
                    }
                case 50:
                    var0 = new Array(0);
                case 54:
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.bind(var3)();
                    var0 = var1.done;
                    if (var0) {
                        _fun84744_ip = 109;
                        continue _fun84744
                    }
                case 73:
                    var0 = var1.value;
                    var5 = var4.removeWant;
                    var0 = var0.channel_id;
                    var0 = var5.bind(var4)(var0);
                    var5 = var2.bind(var3)();
                    var0 = var5.done;
                    var1 = var5;
                    if (!var0) {
                        _fun84744_ip = 73;
                        continue _fun84744
                    }
                case 109:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[16] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var4;
    var3 = new var12[var1](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_previews/MessagePreviewManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MessagePreviewManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 6, 7, 15, 17, 18, 3435, 1376, 1216, 1372, 10822, 660, 3, 22, 1637, 806, 507, 10825, 4265, 2]);