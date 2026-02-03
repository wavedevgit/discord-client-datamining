// modules/app_database/modules/ReadStates.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function arg0, arg1() {
        _fun40375: for (var _fun40375_ip = 0;;) switch (_fun40375_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40375_ip = 46;
                    continue _fun40375
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40375_ip = 55;
                    continue _fun40375
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40375_ip = 343;
                    continue _fun40375
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40375_ip = 323;
                    continue _fun40375
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40375_ip = 283;
                    continue _fun40375
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40375_ip = 270;
                    continue _fun40375
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
                    _fun40375_ip = 163;
                    continue _fun40375
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40375_ip = 179;
                    continue _fun40375
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40375_ip = 249;
                    continue _fun40375
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40375_ip = 249;
                    continue _fun40375
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40375_ip = 234;
                    continue _fun40375
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40375_ip = 247;
                    continue _fun40375
                }
            case 234:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40375_ip = 265;
                continue _fun40375;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40375_ip = 283;
                continue _fun40375;
            case 270:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40375_ip = 323;
                    continue _fun40375
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
                    _fun40375_ip = 330;
                    continue _fun40375
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40376: for (var _fun40376_ip = 0;;) switch (_fun40376_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40376_ip = 56;
                                continue _fun40376
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
                            _fun40376_ip = 67;
                            continue _fun40376;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        _fun40377: for (var _fun40377_ip = 0;;) switch (_fun40377_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40377_ip = 23;
                    continue _fun40377
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40377_ip = 33;
                    continue _fun40377
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
                    _fun40377_ip = 70;
                    continue _fun40377
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40377_ip = 55;
                    continue _fun40377
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var4[var3];
    var6 = var5.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var10 = 'ReadStates';
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot7 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot3;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = null;
            var2.readStateVersion = var1;
            var1 = {};
            var4 = function arg0() {
                var2 = _closure3_slot0;
                var1 = var2.handleConnectionOpen;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1.CONNECTION_OPEN = var4;
            var4 = function arg0() {
                var2 = _closure3_slot0;
                var1 = var2.handleReadStateAction;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1.CHANNEL_PINS_ACK = var4;
            var4 = function arg0() {
                var2 = _closure3_slot0;
                var1 = var2.handleReadStateAction;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1.MESSAGE_ACK = var4;
            var4 = function arg0, arg1() {
                _fun40383: for (var _fun40383_ip = 0;;) switch (_fun40383_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.messagesOnly;
                        if (var0) {
                            _fun40383_ip = 36;
                            continue _fun40383
                        }
                    case 12:
                        var3 = _closure3_slot0;
                        var2 = var3.handleWriteCaches;
                        var1 = arg1;
                        var0 = false;
                        var0 = var2.bind(var3)(var1, var0);
                    case 36:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.BACKGROUND_SYNC_FINISHED = var4;
            var3 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleWriteCaches;
                var1 = arg1;
                var0 = true;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.WRITE_CACHES = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'getAll';
        var4.key = var1;
        var6 = _closure1_slot2;
        var1 = undefined;
        var0 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun40386: for (var _fun40386_ip = 0;;) switch (_fun40386_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun40386_ip = 161;
                            continue _fun40386
                        }
                    case 10:
                        var2 = global;
                        var3 = var2.performance;
                        var1 = var3.now;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 6;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.readStates;
                        var1 = arg0;
                        var4 = var4.bind(var5)(var1);
                        var1 = var4.getMany;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 80);
                    case 78:
                        return var1;
                    case 80:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun40386_ip = 158;
                            continue _fun40386
                        }
                    case 86:
                        var5 = var2.performance;
                        var4 = var5.now;
                        var5 = var4.bind(var5)();
                        var4 = _closure1_slot7;
                        var3 = var4.log;
                        var13 = var5 - var6;
                        var11 = var1.length;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var14 = 'asynchronously loaded in ';
                        var12 = 'ms (readStates: ';
                        var10 = ')';
                        var2 = var14[var7](var13, var12, var11, var10, var9);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 158:
                        return var1;
                    case 161:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var6.bind(var1)(var0);
        var _closure2_slot0 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var6 = function() {
            var1 = null;
            var0 = this;
            var0.readStateVersion = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var0 = var0.readState;
            var1 = var0.version;
            var0 = this;
            var0.readStateVersion = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleReadStateAction';
        var4.key = var6;
        var6 = function arg0() {
            _fun40390: for (var _fun40390_ip = 0;;) switch (_fun40390_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1.readStateVersion;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun40390_ip = 66;
                        continue _fun40390
                    }
                case 18:
                    var2 = var0.version;
                    if (!(var3 == var2)) {
                        _fun40390_ip = 54;
                        continue _fun40390
                    }
                case 28:
                    var4 = _closure1_slot7;
                    var3 = var4.log;
                    var2 = 'Received null read states version';
                    var2 = var3.bind(var4)(var2, var0);
                    _fun40390_ip = 66;
                    continue _fun40390;
                case 54:
                    var0 = var0.version;
                    var1.readStateVersion = var0;
                case 66:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleWriteCaches';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun40391: for (var _fun40391_ip = 0;;) switch (_fun40391_ip) {
                case 0:
                    var5 = arg0;
                    var8 = this;
                    var4 = _closure1_slot6;
                    var3 = var4.getAllReadStates;
                    var2 = false;
                    var3 = var3.bind(var4)(var2);
                    var2 = arg1;
                    if (!var2) {
                        _fun40391_ip = 540;
                        continue _fun40391
                    }
                case 39:
                    var2 = var8.readStateVersion;
                    var16 = null;
                    if (!(var16 != var2)) {
                        _fun40391_ip = 603;
                        continue _fun40391
                    }
                case 54:
                    var2 = global;
                    var7 = var2.Object;
                    var6 = var7.keys;
                    var9 = _closure1_slot5;
                    var4 = var9.getMutablePrivateChannels;
                    var4 = var4.bind(var9)();
                    var6 = var6.bind(var7)(var4);
                    var2 = var2.Set;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var26 = var4;
                    var25 = var6;
                    var2 = new var26[var2](var25, var24);
                    var15 = var2 instanceof Object ? var2 : var4;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var4 = 7;
                    var4 = var2[var4];
                    var7 = undefined;
                    var4 = var9.bind(var7)(var4);
                    var6 = var4.bind(var7)(var6);
                    var4 = var6.sort;
                    var14 = 8;
                    var2 = var2[var14];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.compare;
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.reverse;
                    var4 = var2.bind(var4)();
                    var2 = var4.value;
                    var4 = var2.bind(var4)();
                    var2 = 0;
                    var4 = var4[var2];
                    var6 = var16 != var4;
                    var2 = '0';
                    var9 = var2;
                    if (!var6) {
                        _fun40391_ip = 215;
                        continue _fun40391
                    }
                case 212:
                    var9 = var4;
                case 215:
                    var4 = _closure1_slot8;
                    var13 = var4.bind(var7)(var3);
                    var6 = var13.bind(var7)();
                    var4 = var6.done;
                    var12 = 1;
                    var10 = var9;
                    var11 = var2;
                    var2 = var11;
                    var9 = var10;
                    if (var4) {
                        _fun40391_ip = 431;
                        continue _fun40391
                    }
                case 254:
                    var20 = var6.value;
                    var4 = var20._lastMessageId;
                    var18 = var11;
                    var17 = var10;
                    if (!(var16 != var4)) {
                        _fun40391_ip = 401;
                        continue _fun40391
                    }
                case 278:
                    var19 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var14];
                    var21 = var19.bind(var7)(var4);
                    var19 = var21.compare;
                    var4 = var20._lastMessageId;
                    var4 = var19.bind(var21)(var4, var11);
                    var19 = var11;
                    if (!(var12 === var4)) {
                        _fun40391_ip = 326;
                        continue _fun40391
                    }
                case 320:
                    var19 = var20._lastMessageId;
                case 326:
                    var21 = var15.has;
                    var4 = var20.channelId;
                    var21 = var21.bind(var15)(var4);
                    if (!var21) {
                        _fun40391_ip = 383;
                        continue _fun40391
                    }
                case 344:
                    var22 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var14];
                    var23 = var22.bind(var7)(var4);
                    var22 = var23.compare;
                    var4 = var20._lastMessageId;
                    var4 = var22.bind(var23)(var4, var10);
                    var21 = var12 === var4;
                case 383:
                    var4 = var10;
                    if (!var21) {
                        _fun40391_ip = 395;
                        continue _fun40391
                    }
                case 389:
                    var4 = var20._lastMessageId;
                case 395:
                    var17 = var4;
                    var18 = var19;
                case 401:
                    var19 = var13.bind(var7)();
                    var4 = var19.done;
                    var11 = var18;
                    var10 = var17;
                    var6 = var19;
                    var2 = var11;
                    var9 = var10;
                    if (!var4) {
                        _fun40391_ip = 254;
                        continue _fun40391
                    }
                case 431:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var4 = 6;
                    var4 = var10[var4];
                    var6 = var6.bind(var7)(var4);
                    var4 = var6.nonGuildVersionsTransaction;
                    var6 = var4.bind(var6)(var5);
                    var4 = var6.putAll;
                    var7 = {};
                    var10 = 'highest_last_message_id';
                    var7.id = var10;
                    var7.versionString = var2;
                    var2 = new Array(3);
                    var2[0] = var7;
                    var7 = {};
                    var10 = 'private_channels_version';
                    var7.id = var10;
                    var7.versionString = var9;
                    var2[1] = var7;
                    var7 = {};
                    var9 = 'read_state_version';
                    var7.id = var9;
                    var8 = var8.readStateVersion;
                    var7.version = var8;
                    var2[2] = var7;
                    var2 = var4.bind(var6)(var2);
                case 540:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.readStatesTransaction;
                    var4 = var2.bind(var4)(var5);
                    var _closure3_slot0 = var4;
                    var2 = var4.delete;
                    var2 = var2.bind(var4)();
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var2 = _closure3_slot0;
                        var1 = var2.put;
                        var7 = var3.type;
                        var6 = var3.channelId;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var5 = var0.concat;
                        var4 = '';
                        var0 = '-';
                        var0 = var5.bind(var4)(var7, var0, var6);
                        var0 = var1.bind(var2)(var0, var3);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                case 603:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/ReadStates.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 1372, 3947, 3, 1646, 22, 21, 2]);