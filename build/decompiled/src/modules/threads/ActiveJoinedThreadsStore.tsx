// modules/threads/ActiveJoinedThreadsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun41074: for (var _fun41074_ip = 0;;) switch (_fun41074_ip) {
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
            case 70: // try_end0
                _fun41074_ip = 74;
                continue _fun41074;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot30 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        _fun41077: for (var _fun41077_ip = 0;;) switch (_fun41077_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun41077_ip = 46;
                    continue _fun41077
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun41077_ip = 55;
                    continue _fun41077
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun41077_ip = 343;
                    continue _fun41077
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun41077_ip = 323;
                    continue _fun41077
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun41077_ip = 283;
                    continue _fun41077
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun41077_ip = 270;
                    continue _fun41077
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
                    _fun41077_ip = 163;
                    continue _fun41077
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun41077_ip = 179;
                    continue _fun41077
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun41077_ip = 249;
                    continue _fun41077
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun41077_ip = 249;
                    continue _fun41077
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun41077_ip = 234;
                    continue _fun41077
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun41077_ip = 247;
                    continue _fun41077
                }
            case 234:
                var8 = _closure1_slot32;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun41077_ip = 265;
                continue _fun41077;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun41077_ip = 283;
                continue _fun41077;
            case 270:
                var6 = _closure1_slot32;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun41077_ip = 323;
                    continue _fun41077
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
                    _fun41077_ip = 330;
                    continue _fun41077
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun41078: for (var _fun41078_ip = 0;;) switch (_fun41078_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun41078_ip = 56;
                                continue _fun41078
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
                            _fun41078_ip = 67;
                            continue _fun41078;
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
    var _closure1_slot31 = var0;
    var0 = function arg0, arg1() {
        _fun41079: for (var _fun41079_ip = 0;;) switch (_fun41079_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun41079_ip = 23;
                    continue _fun41079
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun41079_ip = 33;
                    continue _fun41079
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
                    _fun41079_ip = 70;
                    continue _fun41079
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun41079_ip = 55;
                    continue _fun41079
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var13 = function() {
        _fun41080: for (var _fun41080_ip = 0;;) switch (_fun41080_ip) {
            case 0:
                var0 = {};
                _closure1_slot17 = var0;
                var0 = {};
                _closure1_slot21 = var0;
                var0 = {};
                _closure1_slot18 = var0;
                var0 = {};
                _closure1_slot19 = var0;
                var0 = {};
                _closure1_slot20 = var0;
                var2 = _closure1_slot13;
                var0 = var2.getChannelId;
                var0 = var0.bind(var2)();
                _closure1_slot23 = var0;
                var6 = _closure1_slot24;
                var2 = global;
                var0 = undefined;
                for (var3 in var6)
                    case 67: {
                        case 76: var10 = var3;
                        var9 = var2.clearTimeout;
                        var8 = _closure1_slot24;
                        var8 = var8[var10];
                        var8 = var9.bind(var0)(var8);
                        _fun41080_ip = 67;
                        continue _fun41080;
                    }
            case 100:
                var2 = {};
                _closure1_slot24 = var2;
                var4 = _closure1_slot14;
                var3 = var4.forEachGuild;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot35;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var1 = _closure1_slot36;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot33 = var13;
    var0 = function arg0() {
        _fun41082: for (var _fun41082_ip = 0;;) switch (_fun41082_ip) {
            case 0:
                var7 = arg0;
                var0 = _closure1_slot17;
                var0 = delete var0[var7];
                var0 = _closure1_slot21;
                var0 = delete var0[var7];
                var0 = _closure1_slot18;
                var0 = delete var0[var7];
                var0 = _closure1_slot19;
                var0 = delete var0[var7];
                var0 = _closure1_slot20;
                var0 = delete var0[var7];
                var1 = _closure1_slot35;
                var0 = undefined;
                var1 = var1.bind(var0)(var7);
                var1 = _closure1_slot19;
                var5 = var1[var7];
                for (var1 in var5)
                    case 73: {
                        case 82: var9 = var1;
                        var8 = _closure1_slot38;
                        var8 = var8.bind(var0)(var7, var9);
                        _fun41082_ip = 73;
                        continue _fun41082;
                    }
            case 97:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun41083: for (var _fun41083_ip = 0;;) switch (_fun41083_ip) {
            case 0:
                var2 = _closure1_slot14;
                var1 = var2.getThreadsForGuild;
                var0 = arg0;
                var20 = var1.bind(var2)(var0);
                var18 = var20;
                var0 = undefined;
                var14 = true;
                var12 = null;
                var30 = undefined;
                var29 = undefined;
                var28 = undefined;
                var27 = undefined;
                var26 = undefined;
                var25 = undefined;
                for (var15 in var18)
                    case 53: {
                        var6 = var30;
                        var5 = var29;
                        var4 = var28;
                        var3 = var27;
                        var2 = var26;
                        var1 = var25;
                        case 83: var7 = var15;
                        var10 = var20[var7];
                        var30 = var6;
                        var29 = var5;
                        var28 = var4;
                        var27 = var3;
                        var26 = var2;
                        var25 = var1;
                        var6 = var30;
                        var5 = var29;
                        var4 = var28;
                        var3 = var27;
                        var2 = var26;
                        var1 = var25;
                        ForInLoopInit(obj_props_register = 11, obj_register = 10, iter_index_register = 9, iter_size_register = 8);
                        if (var11 === undefined) {
                            _fun41083_ip = 53;
                            continue _fun41083
                        }
                        case 134: var30 = var6;
                        var29 = var5;
                        var24 = var3;
                        var23 = var2;
                        var22 = var1;
                        var28 = var4;
                        var27 = var24;
                        var26 = var23;
                        var25 = var22;
                        ForInLoopNextIter(next_value_register = 7, obj_props_register = 11, obj_register = 10, iter_index_register = 9, iter_size_register = 8);
                        if (var7 === undefined) {
                            _fun41083_ip = 53;
                            continue _fun41083
                        }
                        case 170: var27 = var7;
                        var25 = _closure1_slot46;
                        var25 = var25.bind(var0)(var27);
                        var26 = _closure1_slot10;
                        var25 = var26.getChannel;
                        var26 = var25.bind(var26)(var27);
                        var6 = var27;
                        var5 = var26;
                        var3 = var24;
                        var2 = var23;
                        var1 = var22;
                        if (var12 == var26) {
                            _fun41083_ip = 134;
                            continue _fun41083
                        }
                        case 215: var28 = _closure1_slot15;
                        var25 = var28.joinTimestamp;
                        var25 = var25.bind(var28)(var27);
                        if (!(var12 == var25)) {
                            _fun41083_ip = 328;
                            continue _fun41083
                        }
                        case 234: var30 = _closure1_slot47;
                        var35 = _closure1_slot19;
                        var36 = undefined;
                        var34 = var26;
                        var33 = var26;
                        var32 = false;
                        var28 = var36[var30](var35, var34, var33, var32, var31);
                        var31 = _closure1_slot12;
                        var29 = var31.isForumPostUnread;
                        var28 = var26.id;
                        var31 = var29.bind(var31)(var28);
                        var29 = _closure1_slot20;
                        var28 = null;
                        if (!var31) {
                            _fun41083_ip = 288;
                            continue _fun41083
                        }
                        case 285: var28 = var26;
                        case 288: var36 = undefined;
                        var35 = var29;
                        var34 = var26;
                        var33 = var28;
                        var32 = false;
                        var28 = var36[var30](var35, var34, var33, var32, var31);
                        var6 = var27;
                        var5 = var26;
                        var4 = var25;
                        var3 = var24;
                        var2 = var23;
                        var1 = var22;
                        _fun41083_ip = 134;
                        continue _fun41083;
                        case 328: var24 = {};
                        var24.channel = var26;
                        var22 = var25.getTime;
                        var22 = var22.bind(var25)();
                        var24.joinTimestamp = var22;
                        var22 = _closure1_slot44;
                        var22 = var22.bind(var0)(var26);
                        var23 = var22.isUnread;
                        var31 = var22.isRelevant;
                        var22 = var22.isTimedRelevant;
                        var30 = _closure1_slot47;
                        var35 = _closure1_slot17;
                        var36 = undefined;
                        var34 = var26;
                        var33 = var24;
                        var32 = false;
                        var28 = var36[var30](var35, var34, var33, var32, var31);
                        var29 = _closure1_slot21;
                        var28 = null;
                        if (!var31) {
                            _fun41083_ip = 410;
                            continue _fun41083
                        }
                        case 407: var28 = var24;
                        case 410: var36 = undefined;
                        var35 = var29;
                        var34 = var26;
                        var33 = var28;
                        var32 = false;
                        var28 = var36[var30](var35, var34, var33, var32, var31);
                        var30 = _closure1_slot47;
                        var29 = _closure1_slot18;
                        var28 = null;
                        if (!var23) {
                            _fun41083_ip = 443;
                            continue _fun41083
                        }
                        case 440: var28 = var24;
                        case 443: var36 = undefined;
                        var35 = var29;
                        var34 = var26;
                        var33 = var28;
                        var32 = false;
                        var28 = var36[var30](var35, var34, var33, var32, var31);
                        var6 = var27;
                        var5 = var26;
                        var4 = var25;
                        var3 = var24;
                        var2 = var23;
                        var1 = var22;
                        if (!var1) {
                            _fun41083_ip = 134;
                            continue _fun41083
                        }
                        case 484: var28 = _closure1_slot45;
                        var28 = var28.bind(var0)(var26, var14);
                        var6 = var27;
                        var5 = var26;
                        var4 = var25;
                        var3 = var24;
                        var2 = var23;
                        var1 = var22;
                        _fun41083_ip = 134;
                        continue _fun41083;
                    }
            case 517:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function() {
        _fun41084: for (var _fun41084_ip = 0;;) switch (_fun41084_ip) {
            case 0:
                var0 = {};
                _closure1_slot22 = var0;
                var11 = _closure1_slot19;
                var0 = undefined;
                for (var7 in var11)
                    case 23: {
                        case 32: var6 = var7;
                        var1 = _closure1_slot19;
                        var4 = var1[var6];
                        ForInLoopInit(obj_props_register = 5, obj_register = 4, iter_index_register = 3, iter_size_register = 2);
                        if (var5 === undefined) {
                            _fun41084_ip = 23;
                            continue _fun41084
                        }
                        case 51: ForInLoopNextIter(next_value_register = 1, obj_props_register = 5, obj_register = 4, iter_index_register = 3, iter_size_register = 2);
                        if (var1 === undefined) {
                            _fun41084_ip = 23;
                            continue _fun41084
                        }
                        case 60: var14 = var1;
                        var13 = _closure1_slot38;
                        var13 = var13.bind(var0)(var6, var14);
                        _fun41084_ip = 51;
                        continue _fun41084;
                    }
            case 75:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        _fun41085: for (var _fun41085_ip = 0;;) switch (_fun41085_ip) {
            case 0:
                var3 = _closure1_slot10;
                var2 = var3.getBasicChannel;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                var2 = var2 != var0;
                if (!var2) {
                    _fun41085_ip = 49;
                    continue _fun41085
                }
            case 30:
                var5 = _closure1_slot8;
                var4 = var5.has;
                var3 = var0.type;
                var2 = var4.bind(var5)(var3);
            case 49:
                if (!var2) {
                    _fun41085_ip = 74;
                    continue _fun41085
                }
            case 52:
                var3 = _closure1_slot38;
                var2 = var0.guild_id;
                var1 = var0.id;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
            case 74:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function arg0, arg1() {
        _fun41086: for (var _fun41086_ip = 0;;) switch (_fun41086_ip) {
            case 0:
                var12 = arg0;
                var11 = arg1;
                var1 = _closure1_slot10;
                var0 = var1.getChannel;
                var1 = var0.bind(var1)(var11);
                var4 = null;
                if (!(var4 != var1)) {
                    _fun41086_ip = 490;
                    continue _fun41086
                }
            case 32:
                var0 = var1.isForumLikeChannel;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun41086_ip = 490;
                    continue _fun41086
                }
            case 48:
                var0 = _closure1_slot22;
                var0 = var0[var12];
                if (!(var4 == var0)) {
                    _fun41086_ip = 70;
                    continue _fun41086
                }
            case 60:
                var1 = _closure1_slot22;
                var0 = {};
                var1[var12] = var0;
            case 70:
                var0 = _closure1_slot22;
                var0 = var0[var12];
                var9 = 0;
                var0[var11] = var9;
                var0 = _closure1_slot19;
                var0 = var0[var12];
                if (!(var4 != var0)) {
                    _fun41086_ip = 490;
                    continue _fun41086
                }
            case 99:
                var0 = _closure1_slot19;
                var0 = var0[var12];
                var0 = var0[var11];
                if (!(var4 != var0)) {
                    _fun41086_ip = 490;
                    continue _fun41086
                }
            case 118:
                var1 = _closure1_slot11;
                var0 = var1.getGuild;
                var8 = var0.bind(var1)(var12);
                if (!(var4 != var8)) {
                    _fun41086_ip = 490;
                    continue _fun41086
                }
            case 139:
                var1 = _closure1_slot12;
                var0 = var1.getTrackedAckMessageId;
                var7 = var0.bind(var1)(var11);
                if (!(var4 == var7)) {
                    _fun41086_ip = 317;
                    continue _fun41086
                }
            case 161:
                var1 = global;
                var2 = var1.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                var3 = var8.joinedAt;
                var2 = var0;
                if (!(var4 != var3)) {
                    _fun41086_ip = 284;
                    continue _fun41086
                }
            case 191:
                var4 = var8.joinedAt;
                var3 = var1.Date;
                var4 = var4 instanceof var3;
                var3 = var8.joinedAt;
                if (var4) {
                    _fun41086_ip = 271;
                    continue _fun41086
                }
            case 216:
                var5 = 'string';
                var4 = typeof var3;
                if (!(var5 === var4)) {
                    _fun41086_ip = 269;
                    continue _fun41086
                }
            case 227:
                var5 = var1.Date;
                var19 = var8.joinedAt;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var20 = var4;
                var1 = new var20[var5](var19, var18);
                var4 = var1 instanceof Object ? var1 : var4;
                var1 = var4.getTime;
                var0 = var1.bind(var4)();
            case 269:
                _fun41086_ip = 281;
                continue _fun41086;
            case 271:
                var1 = var3.getTime;
                var0 = var1.bind(var3)();
            case 281:
                var2 = var0;
            case 284:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 13;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.fromTimestamp;
                var7 = var0.bind(var1)(var2);
            case 317:
                var0 = _closure1_slot19;
                var0 = var0[var12];
                var5 = var0[var11];
                var1 = 13;
                var0 = undefined;
                for (var2 in var5)
                    case 345: {
                        case 357: var15 = var2;
                        var13 = _closure1_slot23;
                        if (!(var11 !== var13)) {
                            _fun41086_ip = 446;
                            continue _fun41086
                        }
                        case 368: var14 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var13 = var13[var1];
                        var14 = var14.bind(var0)(var13);
                        var13 = var14.compare;
                        var13 = var13.bind(var14)(var15, var7);
                        var13 = var13 > var9;
                        if (!var13) {
                            _fun41086_ip = 422;
                            continue _fun41086
                        }
                        case 404: var16 = _closure1_slot12;
                        var14 = var16.hasOpenedThread;
                        var14 = var14.bind(var16)(var15);
                        var13 = !var14;
                        case 422: if (!var13) {
                            _fun41086_ip = 345;
                            continue _fun41086
                        }
                        case 425: var13 = _closure1_slot22;
                        var14 = var13[var12];
                        var13 = var14[var11];
                        var13 = var13 + 1;
                        var14[var11] = var13;
                        _fun41086_ip = 345;
                        continue _fun41086;
                        case 446: var14 = _closure1_slot12;
                        var13 = var14.isNewForumThread;
                        var13 = var13.bind(var14)(var15, var11, var8);
                        if (!var13) {
                            _fun41086_ip = 345;
                            continue _fun41086
                        }
                        case 466: var13 = _closure1_slot22;
                        var14 = var13[var12];
                        var13 = var14[var11];
                        var13 = var13 + 1;
                        var14[var11] = var13;
                        _fun41086_ip = 345;
                        continue _fun41086;
                    }
            case 490:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun41087: for (var _fun41087_ip = 0;;) switch (_fun41087_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var7 = arg2;
                var9 = null;
                if (!(var9 != var2)) {
                    _fun41087_ip = 513;
                    continue _fun41087
                }
            case 18:
                var4 = _closure1_slot10;
                var1 = var4.getChannel;
                var6 = var1.bind(var4)(var7);
                var4 = _closure1_slot15;
                var1 = var4.joinTimestamp;
                var4 = var1.bind(var4)(var7);
                if (!(var9 != var6)) {
                    _fun41087_ip = 74;
                    continue _fun41087
                }
            case 54:
                var5 = _closure1_slot14;
                var1 = var5.isActive;
                var1 = var1.bind(var5)(var3, var2, var7);
                if (var1) {
                    _fun41087_ip = 191;
                    continue _fun41087
                }
            case 74:
                var8 = _closure1_slot48;
                var17 = _closure1_slot17;
                var5 = undefined;
                var18 = undefined;
                var16 = var3;
                var15 = var2;
                var14 = var7;
                var1 = var18[var8](var17, var16, var15, var14, var13);
                var17 = _closure1_slot21;
                var16 = var3;
                var15 = var2;
                var14 = var7;
                var1 = var18[var8](var17, var16, var15, var14, var13);
                var17 = _closure1_slot18;
                var16 = var3;
                var15 = var2;
                var14 = var7;
                var1 = var18[var8](var17, var16, var15, var14, var13);
                var17 = _closure1_slot19;
                var16 = var3;
                var15 = var2;
                var14 = var7;
                var1 = var18[var8](var17, var16, var15, var14, var13);
                var17 = _closure1_slot20;
                var16 = var3;
                var15 = var2;
                var14 = var7;
                var1 = var18[var8](var17, var16, var15, var14, var13);
                var1 = _closure1_slot46;
                var1 = var1.bind(var5)(var7);
                var1 = _closure1_slot38;
                var1 = var1.bind(var5)(var3, var2);
                _fun41087_ip = 509;
                continue _fun41087;
            case 191:
                if (!(var9 == var4)) {
                    _fun41087_ip = 325;
                    continue _fun41087
                }
            case 198:
                var7 = _closure1_slot12;
                var5 = var7.isForumPostUnread;
                var1 = var6.id;
                var11 = var5.bind(var7)(var1);
                var10 = _closure1_slot47;
                var17 = _closure1_slot17;
                var7 = undefined;
                var18 = undefined;
                var16 = var6;
                var15 = null;
                var14 = true;
                var1 = var18[var10](var17, var16, var15, var14, var13);
                var17 = _closure1_slot18;
                var16 = var6;
                var1 = var18[var10](var17, var16, var15, var14, var13);
                var17 = _closure1_slot21;
                var16 = var6;
                var1 = var18[var10](var17, var16, var15, var14, var13);
                var17 = _closure1_slot19;
                var16 = var6;
                var15 = var6;
                var1 = var18[var10](var17, var16, var15, var14, var13);
                var5 = _closure1_slot20;
                var1 = null;
                if (!var11) {
                    _fun41087_ip = 289;
                    continue _fun41087
                }
            case 286:
                var1 = var6;
            case 289:
                var18 = undefined;
                var17 = var5;
                var16 = var6;
                var15 = var1;
                var14 = true;
                var1 = var18[var10](var17, var16, var15, var14, var13);
                var5 = _closure1_slot46;
                var1 = var6.id;
                var1 = var5.bind(var7)(var1);
                _fun41087_ip = 497;
                continue _fun41087;
            case 325:
                var11 = {};
                var11.channel = var6;
                var1 = var4.getTime;
                var1 = var1.bind(var4)();
                var11.joinTimestamp = var1;
                var1 = _closure1_slot44;
                var5 = undefined;
                var1 = var1.bind(var5)(var6);
                var12 = var1.isUnread;
                var13 = var1.isRelevant;
                var4 = var1.isTimedRelevant;
                var10 = _closure1_slot47;
                var17 = _closure1_slot17;
                var18 = undefined;
                var16 = var6;
                var15 = var11;
                var14 = true;
                var1 = var18[var10](var17, var16, var15, var14, var13);
                var7 = _closure1_slot21;
                var1 = null;
                if (!var13) {
                    _fun41087_ip = 409;
                    continue _fun41087
                }
            case 406:
                var1 = var11;
            case 409:
                var18 = undefined;
                var17 = var7;
                var16 = var6;
                var15 = var1;
                var14 = true;
                var1 = var18[var10](var17, var16, var15, var14, var13);
                var10 = _closure1_slot47;
                var7 = _closure1_slot18;
                var1 = null;
                if (!var12) {
                    _fun41087_ip = 442;
                    continue _fun41087
                }
            case 439:
                var1 = var11;
            case 442:
                var18 = undefined;
                var17 = var7;
                var16 = var6;
                var15 = var1;
                var14 = true;
                var1 = var18[var10](var17, var16, var15, var14, var13);
                var7 = _closure1_slot47;
                var17 = _closure1_slot19;
                var16 = var6;
                var15 = null;
                var1 = var18[var7](var17, var16, var15, var14, var13);
                var17 = _closure1_slot20;
                var16 = var6;
                var1 = var18[var7](var17, var16, var15, var14, var13);
                var1 = _closure1_slot45;
                var1 = var1.bind(var5)(var6, var4);
            case 497:
                var1 = _closure1_slot38;
                var0 = undefined;
                var0 = var1.bind(var0)(var3, var2);
            case 509:
                var0 = undefined;
                return var0;
            case 513:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var12 = function arg0() {
        var0 = arg0;
        var4 = _closure1_slot39;
        var1 = var0.channel;
        var3 = var1.guild_id;
        var1 = var0.channel;
        var2 = var1.parent_id;
        var0 = var0.channel;
        var1 = var0.id;
        var0 = undefined;
        var0 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var0 = function arg0, arg1() {
        _fun41089: for (var _fun41089_ip = 0;;) switch (_fun41089_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun41089_ip = 211;
                    continue _fun41089
                }
            case 15:
                var1 = _closure1_slot17;
                var1 = var1[var3];
                var4 = var0 == var1;
                var12 = null;
                if (var4) {
                    _fun41089_ip = 39;
                    continue _fun41089
                }
            case 35:
                var12 = var1[var2];
            case 39:
                if (!(var0 != var12)) {
                    _fun41089_ip = 115;
                    continue _fun41089
                }
            case 43:
                var10 = var12;
                var5 = 14;
                var4 = undefined;
                for (var6 in var10)
                    case 59: {
                        case 68: var1 = var6;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var13 = var13[var5];
                        var14 = var14.bind(var4)(var13);
                        var13 = var14.isChannelContentGated;
                        var1 = var12[var1];
                        var1 = var1.channel;
                        var1 = var13.bind(var14)(var1);
                        if (!var1) {
                            _fun41089_ip = 59;
                            continue _fun41089
                        }
                        case 111: var1 = true;
                        return var1;
                    }
            case 115:
                var1 = _closure1_slot19;
                var1 = var1[var3];
                var3 = var0 == var1;
                var8 = null;
                if (var3) {
                    _fun41089_ip = 136;
                    continue _fun41089
                }
            case 132:
                var8 = var1[var2];
            case 136:
                if (!(var0 != var8)) {
                    _fun41089_ip = 207;
                    continue _fun41089
                }
            case 140:
                var6 = var8;
                var2 = 14;
                var1 = undefined;
                for (var3 in var6)
                    case 156: {
                        case 165: var0 = var3;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var2];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.isChannelContentGated;
                        var0 = var8[var0];
                        var0 = var10.bind(var11)(var0);
                        if (!var0) {
                            _fun41089_ip = 156;
                            continue _fun41089
                        }
                        case 203: var0 = true;
                        return var0;
                    }
            case 207:
                var0 = false;
                return var0;
            case 211:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var11 = function arg0() {
        _fun41090: for (var _fun41090_ip = 0;;) switch (_fun41090_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot10;
                var3 = var4.getChannel;
                var1 = var0.id;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                var3 = var3 == var1;
                if (var3) {
                    _fun41090_ip = 70;
                    continue _fun41090
                }
            case 34:
                var7 = _closure1_slot14;
                var6 = var7.isActive;
                var5 = var0.guildId;
                var4 = var1.parent_id;
                var0 = var0.id;
                var0 = var6.bind(var7)(var5, var4, var0);
                var3 = !var0;
            case 70:
                var0 = !var3;
                if (var3) {
                    _fun41090_ip = 105;
                    continue _fun41090
                }
            case 76:
                var5 = _closure1_slot39;
                var4 = var1.guild_id;
                var3 = var1.parent_id;
                var2 = var1.id;
                var1 = undefined;
                var0 = var5.bind(var1)(var4, var3, var2);
            case 105:
                return var0;
        }
    };
    var10 = function arg0() {
        _fun41091: for (var _fun41091_ip = 0;;) switch (_fun41091_ip) {
            case 0:
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = arg0;
                var1 = var1.channelId;
                var8 = var2.bind(var3)(var1);
                var9 = null;
                if (!(var9 != var8)) {
                    _fun41091_ip = 411;
                    continue _fun41091
                }
            case 34:
                var4 = var8.guild_id;
                var3 = var8.parent_id;
                var5 = _closure1_slot9;
                var2 = var5.has;
                var1 = var8.type;
                var1 = var2.bind(var5)(var1);
                if (var1) {
                    _fun41091_ip = 136;
                    continue _fun41091
                }
            case 67:
                var1 = global;
                var2 = var1.Number;
                var1 = _closure1_slot22;
                var7 = var1[var4];
                var5 = var9 == var7;
                var6 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun41091_ip = 103;
                    continue _fun41091
                }
            case 94:
                var5 = var8.id;
                var1 = var7[var5];
            case 103:
                var2 = var2.bind(var6)(var1);
                var1 = 0;
                var1 = var2 > var1;
                if (!var1) {
                    _fun41091_ip = 134;
                    continue _fun41091
                }
            case 117:
                var5 = _closure1_slot38;
                var2 = var8.id;
                var2 = var5.bind(var6)(var4, var2);
                var1 = true;
            case 134:
                return var1;
            case 136:
                if (!(var9 != var3)) {
                    _fun41091_ip = 407;
                    continue _fun41091
                }
            case 143:
                var5 = _closure1_slot49;
                var1 = _closure1_slot17;
                var2 = undefined;
                var1 = var5.bind(var2)(var1, var8);
                if (var1) {
                    _fun41091_ip = 242;
                    continue _fun41091
                }
            case 162:
                var5 = _closure1_slot49;
                var1 = _closure1_slot20;
                var5 = var5.bind(var2)(var1, var8);
                var7 = _closure1_slot12;
                var6 = var7.isForumPostUnread;
                var1 = var8.id;
                var1 = var6.bind(var7)(var1);
                if (!(var1 !== var5)) {
                    _fun41091_ip = 238;
                    continue _fun41091
                }
            case 200:
                var7 = _closure1_slot47;
                var6 = _closure1_slot20;
                var5 = null;
                if (!var1) {
                    _fun41091_ip = 216;
                    continue _fun41091
                }
            case 213:
                var5 = var8;
            case 216:
                var11 = true;
                var15 = undefined;
                var14 = var6;
                var13 = var8;
                var12 = var5;
                var1 = var15[var7](var14, var13, var12, var11, var10);
                _fun41091_ip = 421;
                continue _fun41091;
            case 238:
                var1 = false;
                return var1;
            case 242:
                var1 = _closure1_slot44;
                var5 = var1.bind(var2)(var8);
                var10 = var5.isUnread;
                var1 = var5.isRelevant;
                var6 = _closure1_slot45;
                var5 = var5.isTimedRelevant;
                var5 = var6.bind(var2)(var8, var5);
                var7 = _closure1_slot49;
                var5 = _closure1_slot18;
                var6 = var7.bind(var2)(var5, var8);
                var5 = _closure1_slot21;
                var5 = var7.bind(var2)(var5, var8);
                if (!(var10 === var6)) {
                    _fun41091_ip = 311;
                    continue _fun41091
                }
            case 307:
                if (!(var1 !== var5)) {
                    _fun41091_ip = 403;
                    continue _fun41091
                }
            case 311:
                var5 = _closure1_slot17;
                var5 = var5[var4];
                var6 = var5[var3];
                var5 = var8.id;
                var6 = var6[var5];
                var7 = null;
                if (!var1) {
                    _fun41091_ip = 340;
                    continue _fun41091
                }
            case 337:
                var7 = var6;
            case 340:
                var5 = _closure1_slot47;
                var1 = _closure1_slot18;
                var9 = null;
                if (!var10) {
                    _fun41091_ip = 356;
                    continue _fun41091
                }
            case 353:
                var9 = var6;
            case 356:
                var15 = undefined;
                var14 = var1;
                var13 = var8;
                var12 = var9;
                var11 = true;
                var1 = var15[var5](var14, var13, var12, var11, var10);
                var5 = _closure1_slot47;
                var14 = _closure1_slot21;
                var13 = var8;
                var12 = var7;
                var1 = var15[var5](var14, var13, var12, var11, var10);
                var1 = _closure1_slot38;
                var1 = var1.bind(var2)(var4, var3);
                _fun41091_ip = 421;
                continue _fun41091;
            case 403:
                var1 = false;
                return var1;
            case 407:
                var1 = false;
                return var1;
            case 411:
                var1 = _closure1_slot42;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 421:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot41 = var10;
    var4 = function() {
        _fun41092: for (var _fun41092_ip = 0;;) switch (_fun41092_ip) {
            case 0:
                var0 = {};
                _closure1_slot18 = var0;
                var0 = {};
                _closure1_slot21 = var0;
                var21 = _closure1_slot17;
                var0 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                for (var17 in var21)
                    case 40: {
                        var9 = var8;
                        var4 = var7;
                        var3 = var6;
                        var2 = var5;
                        case 64: var16 = var17;
                        var10 = _closure1_slot17;
                        var14 = var10[var16];
                        var8 = var9;
                        var7 = var4;
                        var6 = var3;
                        var5 = var2;
                        var26 = var8;
                        var25 = var7;
                        var24 = var6;
                        var23 = var5;
                        ForInLoopInit(obj_props_register = 15, obj_register = 14, iter_index_register = 13, iter_size_register = 12);
                        if (var15 === undefined) {
                            _fun41092_ip = 40;
                            continue _fun41092
                        }
                        case 107: var8 = var26;
                        var4 = var25;
                        var3 = var24;
                        var2 = var23;
                        var7 = var4;
                        var6 = var3;
                        var5 = var2;
                        ForInLoopNextIter(next_value_register = 11, obj_props_register = 15, obj_register = 14, iter_index_register = 13, iter_size_register = 12);
                        if (var11 === undefined) {
                            _fun41092_ip = 40;
                            continue _fun41092
                        }
                        case 137: var10 = var11;
                        var5 = _closure1_slot17;
                        var5 = var5[var16];
                        var8 = var5[var10];
                        var26 = var10;
                        var25 = var4;
                        var24 = var3;
                        var23 = var2;
                        var4 = var25;
                        var3 = var24;
                        var2 = var23;
                        ForInLoopInit(obj_props_register = 9, obj_register = 8, iter_index_register = 7, iter_size_register = 6);
                        if (var9 === undefined) {
                            _fun41092_ip = 107;
                            continue _fun41092
                        }
                        case 181: var25 = var4;
                        var24 = var3;
                        var23 = var2;
                        var26 = var10;
                        ForInLoopNextIter(next_value_register = 5, obj_props_register = 9, obj_register = 8, iter_index_register = 7, iter_size_register = 6);
                        if (var5 === undefined) {
                            _fun41092_ip = 107;
                            continue _fun41092
                        }
                        case 202: var24 = var5;
                        var23 = _closure1_slot17;
                        var23 = var23[var16];
                        var23 = var23[var10];
                        var24 = var23[var24];
                        var25 = _closure1_slot44;
                        var23 = var24.channel;
                        var23 = var25.bind(var0)(var23);
                        var25 = var23.isUnread;
                        var3 = var23.isRelevant;
                        var23 = var23.isTimedRelevant;
                        if (!var25) {
                            _fun41092_ip = 280;
                            continue _fun41092
                        }
                        case 256: var27 = _closure1_slot47;
                        var31 = _closure1_slot18;
                        var30 = var24.channel;
                        var32 = undefined;
                        var29 = var24;
                        var28 = false;
                        var25 = var32[var27](var31, var30, var29, var28, var27);
                        case 280: if (!var3) {
                            _fun41092_ip = 307;
                            continue _fun41092
                        }
                        case 283: var27 = _closure1_slot47;
                        var31 = _closure1_slot21;
                        var30 = var24.channel;
                        var32 = undefined;
                        var29 = var24;
                        var28 = false;
                        var25 = var32[var27](var31, var30, var29, var28, var27);
                        case 307: var26 = _closure1_slot45;
                        var25 = var24.channel;
                        var25 = var26.bind(var0)(var25, var23);
                        var4 = var24;
                        var2 = var23;
                        _fun41092_ip = 181;
                        continue _fun41092;
                    }
            case 333:
                var2 = {};
                _closure1_slot20 = var2;
                var18 = _closure1_slot19;
                var4 = undefined;
                var3 = undefined;
                for (var15 in var18)
                    case 358: {
                        var5 = var4;
                        var2 = var3;
                        case 376: var14 = var15;
                        var6 = _closure1_slot19;
                        var12 = var6[var14];
                        var4 = var5;
                        var3 = var2;
                        var22 = var4;
                        var21 = var3;
                        ForInLoopInit(obj_props_register = 13, obj_register = 12, iter_index_register = 11, iter_size_register = 10);
                        if (var13 === undefined) {
                            _fun41092_ip = 358;
                            continue _fun41092
                        }
                        case 407: var4 = var22;
                        var2 = var21;
                        var3 = var2;
                        ForInLoopNextIter(next_value_register = 9, obj_props_register = 13, obj_register = 12, iter_index_register = 11, iter_size_register = 10);
                        if (var9 === undefined) {
                            _fun41092_ip = 358;
                            continue _fun41092
                        }
                        case 425: var8 = var9;
                        var3 = _closure1_slot19;
                        var3 = var3[var14];
                        var6 = var3[var8];
                        var22 = var8;
                        var21 = var2;
                        var2 = var21;
                        ForInLoopInit(obj_props_register = 7, obj_register = 6, iter_index_register = 5, iter_size_register = 4);
                        if (var7 === undefined) {
                            _fun41092_ip = 407;
                            continue _fun41092
                        }
                        case 457: var21 = var2;
                        var22 = var8;
                        ForInLoopNextIter(next_value_register = 3, obj_props_register = 7, obj_register = 6, iter_index_register = 5, iter_size_register = 4);
                        if (var3 === undefined) {
                            _fun41092_ip = 407;
                            continue _fun41092
                        }
                        case 472: var24 = var3;
                        var21 = _closure1_slot19;
                        var21 = var21[var14];
                        var21 = var21[var8];
                        var21 = var21[var24];
                        var23 = _closure1_slot12;
                        var22 = var23.isForumPostUnread;
                        var22 = var22.bind(var23)(var24);
                        var2 = var21;
                        if (!var22) {
                            _fun41092_ip = 457;
                            continue _fun41092
                        }
                        case 512: var23 = _closure1_slot47;
                        var31 = _closure1_slot20;
                        var32 = undefined;
                        var30 = var21;
                        var29 = var21;
                        var28 = false;
                        var22 = var32[var23](var31, var30, var29, var28, var27);
                        var2 = var21;
                        _fun41092_ip = 457;
                        continue _fun41092;
                    }
            case 539:
                var1 = _closure1_slot36;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot42 = var4;
    var0 = function() {
        _fun41093: for (var _fun41093_ip = 0;;) switch (_fun41093_ip) {
            case 0:
                var3 = _closure1_slot23;
                var2 = _closure1_slot13;
                var0 = var2.getChannelId;
                var0 = var0.bind(var2)();
                _closure1_slot23 = var0;
                if (!(var0 !== var3)) {
                    _fun41093_ip = 51;
                    continue _fun41093
                }
            case 29:
                var2 = _closure1_slot37;
                var0 = undefined;
                var3 = var2.bind(var0)(var3);
                var1 = _closure1_slot23;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 51:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function arg0() {
        _fun41094: for (var _fun41094_ip = 0;;) switch (_fun41094_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot12;
                var2 = var3.getMentionCount;
                var1 = var7.id;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var3 = var2 > var1;
                var4 = _closure1_slot12;
                var2 = var4.hasUnread;
                var1 = var7.id;
                var4 = var2.bind(var4)(var1);
                if (!var4) {
                    _fun41094_ip = 78;
                    continue _fun41094
                }
            case 55:
                var5 = _closure1_slot15;
                var2 = var5.isMuted;
                var1 = var7.id;
                var1 = var2.bind(var5)(var1);
                var4 = !var1;
            case 78:
                var2 = var7.hasFlag;
                var1 = _closure1_slot16;
                var1 = var1.PINNED;
                var5 = var2.bind(var7)(var1);
                var1 = var7.isActiveThread;
                var2 = var1.bind(var7)();
                var1 = var2;
                if (!var2) {
                    _fun41094_ip = 163;
                    continue _fun41094
                }
            case 115:
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 15;
                var0 = var6[var0];
                var6 = undefined;
                var0 = var8.bind(var6)(var0);
                var6 = var0.bind(var6)(var7);
                var0 = global;
                var7 = var0.Date;
                var0 = var7.now;
                var0 = var0.bind(var7)();
                var1 = var6 > var0;
            case 163:
                var0 = {};
                if (var2) {
                    _fun41094_ip = 171;
                    continue _fun41094
                }
            case 168:
                var2 = var5;
            case 171:
                if (!var2) {
                    _fun41094_ip = 177;
                    continue _fun41094
                }
            case 174:
                var2 = var4;
            case 177:
                if (var2) {
                    _fun41094_ip = 183;
                    continue _fun41094
                }
            case 180:
                var2 = var3;
            case 183:
                var0.isUnread = var2;
                var2 = var1;
                if (var2) {
                    _fun41094_ip = 197;
                    continue _fun41094
                }
            case 194:
                var2 = var5;
            case 197:
                if (var2) {
                    _fun41094_ip = 203;
                    continue _fun41094
                }
            case 200:
                var2 = var4;
            case 203:
                if (var2) {
                    _fun41094_ip = 209;
                    continue _fun41094
                }
            case 206:
                var2 = var3;
            case 209:
                var0.isRelevant = var2;
                var0.isTimedRelevant = var1;
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function arg0, arg1() {
        _fun41095: for (var _fun41095_ip = 0;;) switch (_fun41095_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot46;
                var1 = var2.id;
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var1 = arg1;
                if (!var1) {
                    _fun41095_ip = 40;
                    continue _fun41095
                }
            case 28:
                var1 = function arg0() {
                    var7 = arg0;
                    var _closure3_slot0 = var7;
                    var3 = _closure1_slot24;
                    var2 = var7.id;
                    var4 = global;
                    var5 = var4.setTimeout;
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 15;
                    var6 = var6[var0];
                    var0 = undefined;
                    var6 = var8.bind(var0)(var6);
                    var6 = var6.bind(var0)(var7);
                    var7 = var4.Date;
                    var4 = var7.now;
                    var4 = var4.bind(var7)();
                    var6 = var6 - var4;
                    var4 = 1;
                    var4 = var6 + var4;
                    var1 = function() { // Environment: var1
                        _fun41097: for (var _fun41097_ip = 0;;) switch (_fun41097_ip) {
                            case 0:
                                var3 = _closure1_slot10;
                                var2 = var3.getChannel;
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                var3 = var2.bind(var3)(var1);
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun41097_ip = 81;
                                    continue _fun41097
                                }
                            case 35:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 16;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.dispatch;
                                var0 = {};
                                var4 = 'THREAD_UPDATE';
                                var0.type = var4;
                                var0.channel = var3;
                                var0 = var1.bind(var2)(var0);
                            case 81:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var5.bind(var0)(var1, var4);
                    var3[var2] = var1;
                    return var0;
                };
                var1 = var1.bind(var0)(var2);
            case 40:
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function arg0() {
        _fun41098: for (var _fun41098_ip = 0;;) switch (_fun41098_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot24;
                var2 = var1 in var2;
                if (!var2) {
                    _fun41098_ip = 48;
                    continue _fun41098
                }
            case 17:
                var2 = global;
                var4 = var2.clearTimeout;
                var2 = _closure1_slot24;
                var3 = var2[var1];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var0 = _closure1_slot24;
                var0 = delete var0[var1];
            case 48:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun41099: for (var _fun41099_ip = 0;;) switch (_fun41099_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var5 = arg2;
                var0 = var3.guild_id;
                var1 = var3.parent_id;
                var4 = var3.id;
                var3 = null;
                var6 = var3 != var0;
                if (!var6) {
                    _fun41099_ip = 38;
                    continue _fun41099
                }
            case 34:
                var6 = var3 != var1;
            case 38:
                if (!var6) {
                    _fun41099_ip = 45;
                    continue _fun41099
                }
            case 41:
                var6 = var3 != var4;
            case 45:
                if (!var6) {
                    _fun41099_ip = 215;
                    continue _fun41099
                }
            case 51:
                var6 = var0 in var2;
                if (var6) {
                    _fun41099_ip = 64;
                    continue _fun41099
                }
            case 58:
                var6 = {};
                var2[var0] = var6;
            case 64:
                var6 = var2[var0];
                var6 = var1 in var6;
                if (var6) {
                    _fun41099_ip = 85;
                    continue _fun41099
                }
            case 75:
                var7 = var2[var0];
                var6 = {};
                var7[var1] = var6;
            case 85:
                var6 = arg3;
                if (!var6) {
                    _fun41099_ip = 130;
                    continue _fun41099
                }
            case 91:
                var6 = {};
                var9 = var2[var0];
                var10 = var6;
                var7 = copyDataProperties(var10, var9);
                var7 = {};
                var8 = var2[var0];
                var9 = var8[var1];
                var10 = var7;
                var8 = copyDataProperties(var10, var9);
                var6[var1] = var7;
                var2[var0] = var6;
            case 130:
                if (!(var3 !== var5)) {
                    _fun41099_ip = 148;
                    continue _fun41099
                }
            case 134:
                var3 = var2[var0];
                var3 = var3[var1];
                var3[var4] = var5;
                _fun41099_ip = 215;
                continue _fun41099;
            case 148:
                var3 = var2[var0];
                var3 = var3[var1];
                var3 = delete var3[var4];
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 17;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.isEmpty;
                var3 = var2[var0];
                var3 = var3[var1];
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun41099_ip = 215;
                    continue _fun41099
                }
            case 207:
                var0 = var2[var0];
                var0 = delete var0[var1];
            case 215:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun41100: for (var _fun41100_ip = 0;;) switch (_fun41100_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var1 = arg2;
                var4 = arg3;
                var5 = null;
                var3 = var5 != var0;
                if (!var3) {
                    _fun41100_ip = 25;
                    continue _fun41100
                }
            case 21:
                var3 = var5 != var1;
            case 25:
                if (!var3) {
                    _fun41100_ip = 32;
                    continue _fun41100
                }
            case 28:
                var3 = var5 != var4;
            case 32:
                if (!var3) {
                    _fun41100_ip = 60;
                    continue _fun41100
                }
            case 35:
                var6 = _closure1_slot50;
                var11 = undefined;
                var10 = var2;
                var9 = var0;
                var8 = var1;
                var7 = var4;
                var3 = var11[var6](var10, var9, var8, var7, var6);
            case 60:
                if (!var3) {
                    _fun41100_ip = 169;
                    continue _fun41100
                }
            case 63:
                var3 = {};
                var9 = var2[var0];
                var10 = var3;
                var5 = copyDataProperties(var10, var9);
                var5 = {};
                var6 = var2[var0];
                var9 = var6[var1];
                var10 = var5;
                var6 = copyDataProperties(var10, var9);
                var3[var1] = var5;
                var2[var0] = var3;
                var3 = var2[var0];
                var3 = var3[var1];
                var3 = delete var3[var4];
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 17;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.isEmpty;
                var3 = var2[var0];
                var3 = var3[var1];
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun41100_ip = 169;
                    continue _fun41100
                }
            case 161:
                var0 = var2[var0];
                var0 = delete var0[var1];
            case 169:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var0 = function arg0, arg1() {
        var0 = arg1;
        var5 = _closure1_slot50;
        var8 = var0.guild_id;
        var7 = var0.parent_id;
        var6 = var0.id;
        var10 = undefined;
        var9 = arg0;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var _closure1_slot49 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun41102: for (var _fun41102_ip = 0;;) switch (_fun41102_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var2 = arg2;
                var0 = var1 in var3;
                if (!var0) {
                    _fun41102_ip = 24;
                    continue _fun41102
                }
            case 16:
                var4 = var3[var1];
                var0 = var2 in var4;
            case 24:
                if (!var0) {
                    _fun41102_ip = 42;
                    continue _fun41102
                }
            case 27:
                var1 = var3[var1];
                var2 = var1[var2];
                var1 = arg3;
                var0 = var1 in var2;
            case 42:
                return var0;
        }
    };
    var _closure1_slot50 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.THREADED_CHANNEL_TYPES;
    var _closure1_slot8 = var3;
    var1 = var1.THREAD_CHANNEL_TYPES;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 12;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ChannelFlags;
    var _closure1_slot16 = var1;
    var1 = {};
    var _closure1_slot17 = var1;
    var1 = {};
    var _closure1_slot18 = var1;
    var1 = {};
    var _closure1_slot19 = var1;
    var1 = {};
    var _closure1_slot20 = var1;
    var1 = {};
    var _closure1_slot21 = var1;
    var1 = {};
    var _closure1_slot22 = var1;
    var1 = null;
    var _closure1_slot23 = var1;
    var1 = {};
    var _closure1_slot24 = var1;
    var1 = {};
    var _closure1_slot25 = var1;
    var3 = {};
    var _closure1_slot26 = var3;
    var3 = {};
    var _closure1_slot27 = var3;
    var3 = {};
    var _closure1_slot28 = var3;
    var3 = {};
    var _closure1_slot29 = var3;
    var3 = 18;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var9
        var3 = function() {
            _fun41104: for (var _fun41104_ip = 0;;) switch (_fun41104_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot30;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun41104_ip = 69;
                        continue _fun41104
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun41104_ip = 105;
                    continue _fun41104;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var8 = var3.waitFor;
            var14 = _closure1_slot14;
            var13 = _closure1_slot10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot15;
            var10 = _closure1_slot12;
            var9 = _closure1_slot13;
            var15 = var3;
            var1 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
            var2 = var3.syncWith;
            var4 = _closure1_slot13;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot43;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(17);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasActiveJoinedUnreadThreads';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun41106: for (var _fun41106_ip = 0;;) switch (_fun41106_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot18;
                    var0 = var2 in var0;
                    if (!var0) {
                        _fun41106_ip = 32;
                        continue _fun41106
                    }
                case 17:
                    var1 = _closure1_slot18;
                    var2 = var1[var2];
                    var1 = arg1;
                    var0 = var1 in var2;
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getActiveUnjoinedThreadsForParent';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun41107: for (var _fun41107_ip = 0;;) switch (_fun41107_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot19;
                    var0 = var2 in var0;
                    if (!var0) {
                        _fun41107_ip = 38;
                        continue _fun41107
                    }
                case 17:
                    var0 = _closure1_slot19;
                    var2 = var0[var2];
                    var0 = arg1;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun41107_ip = 42;
                        continue _fun41107
                    }
                case 38:
                    var0 = _closure1_slot28;
                case 42:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getActiveJoinedThreadsForParent';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun41108: for (var _fun41108_ip = 0;;) switch (_fun41108_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot17;
                    var0 = var2 in var0;
                    if (!var0) {
                        _fun41108_ip = 38;
                        continue _fun41108
                    }
                case 17:
                    var0 = _closure1_slot17;
                    var2 = var0[var2];
                    var0 = arg1;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun41108_ip = 42;
                        continue _fun41108
                    }
                case 38:
                    var0 = _closure1_slot27;
                case 42:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAllActiveJoinedThreads';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getActiveJoinedThreadsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun41110: for (var _fun41110_ip = 0;;) switch (_fun41110_ip) {
                case 0:
                    var2 = _closure1_slot17;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun41110_ip = 24;
                        continue _fun41110
                    }
                case 20:
                    var0 = _closure1_slot25;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getActiveJoinedUnreadThreadsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun41111: for (var _fun41111_ip = 0;;) switch (_fun41111_ip) {
                case 0:
                    var2 = _closure1_slot18;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun41111_ip = 24;
                        continue _fun41111
                    }
                case 20:
                    var0 = _closure1_slot25;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getActiveJoinedUnreadThreadsForParent';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun41112: for (var _fun41112_ip = 0;;) switch (_fun41112_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getActiveJoinedUnreadThreadsForGuild;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg1;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun41112_ip = 37;
                        continue _fun41112
                    }
                case 30:
                    var0 = _closure1_slot27;
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getActiveJoinedRelevantThreadsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun41113: for (var _fun41113_ip = 0;;) switch (_fun41113_ip) {
                case 0:
                    var2 = _closure1_slot21;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun41113_ip = 24;
                        continue _fun41113
                    }
                case 20:
                    var0 = _closure1_slot25;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getActiveJoinedRelevantThreadsForParent';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun41114: for (var _fun41114_ip = 0;;) switch (_fun41114_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getActiveJoinedRelevantThreadsForGuild;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg1;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun41114_ip = 37;
                        continue _fun41114
                    }
                case 30:
                    var0 = _closure1_slot27;
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getActiveUnjoinedThreadsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun41115: for (var _fun41115_ip = 0;;) switch (_fun41115_ip) {
                case 0:
                    var2 = _closure1_slot19;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun41115_ip = 24;
                        continue _fun41115
                    }
                case 20:
                    var0 = _closure1_slot26;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getActiveUnjoinedUnreadThreadsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun41116: for (var _fun41116_ip = 0;;) switch (_fun41116_ip) {
                case 0:
                    var2 = _closure1_slot20;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun41116_ip = 24;
                        continue _fun41116
                    }
                case 20:
                    var0 = _closure1_slot25;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getActiveUnjoinedUnreadThreadsForParent';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun41117: for (var _fun41117_ip = 0;;) switch (_fun41117_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getActiveUnjoinedUnreadThreadsForGuild;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg1;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun41117_ip = 39;
                        continue _fun41117
                    }
                case 32:
                    var0 = _closure1_slot27;
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getNewThreadCountsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun41118: for (var _fun41118_ip = 0;;) switch (_fun41118_ip) {
                case 0:
                    var2 = _closure1_slot22;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun41118_ip = 24;
                        continue _fun41118
                    }
                case 20:
                    var0 = _closure1_slot29;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'computeAllActiveJoinedThreads';
        var4.key = var6;
        var6 = function arg0() {
            _fun41119: for (var _fun41119_ip = 0;;) switch (_fun41119_ip) {
                case 0:
                    var20 = arg0;
                    var0 = new Array(0);
                    var18 = _closure1_slot17;
                    var13 = null;
                    var1 = undefined;
                    for (var14 in var18)
                        case 29: {
                            var2 = var1;
                            case 44: var12 = var14;
                            if (!(var12 !== var20)) {
                                _fun41119_ip = 58;
                                continue _fun41119
                            }
                            case 51: var1 = var2;
                            if (var13 != var20) {
                                _fun41119_ip = 29;
                                continue _fun41119
                            }
                            case 58: var3 = _closure1_slot17;
                            var10 = var3[var12];
                            var1 = var2;
                            var21 = var1;
                            ForInLoopInit(obj_props_register = 11, obj_register = 10, iter_index_register = 9, iter_size_register = 8);
                            if (var11 === undefined) {
                                _fun41119_ip = 29;
                                continue _fun41119
                            }
                            case 80: var1 = var21;
                            ForInLoopNextIter(next_value_register = 7, obj_props_register = 11, obj_register = 10, iter_index_register = 9, iter_size_register = 8);
                            if (var7 === undefined) {
                                _fun41119_ip = 29;
                                continue _fun41119
                            }
                            case 92: var6 = var7;
                            var1 = _closure1_slot17;
                            var1 = var1[var12];
                            var4 = var1[var6];
                            var21 = var6;
                            ForInLoopInit(obj_props_register = 5, obj_register = 4, iter_index_register = 3, iter_size_register = 2);
                            if (var5 === undefined) {
                                _fun41119_ip = 80;
                                continue _fun41119
                            }
                            case 118: var21 = var6;
                            ForInLoopNextIter(next_value_register = 1, obj_props_register = 5, obj_register = 4, iter_index_register = 3, iter_size_register = 2);
                            if (var1 === undefined) {
                                _fun41119_ip = 80;
                                continue _fun41119
                            }
                            case 130: var23 = var1;
                            var22 = var0.push;
                            var21 = _closure1_slot17;
                            var21 = var21[var12];
                            var21 = var21[var6];
                            var21 = var21[var23];
                            var21 = var21.channel;
                            var21 = var22.bind(var0)(var21);
                            _fun41119_ip = 118;
                            continue _fun41119;
                        }
                case 166:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getNewThreadCount';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun41120: for (var _fun41120_ip = 0;;) switch (_fun41120_ip) {
                case 0:
                    var1 = _closure1_slot22;
                    var0 = arg0;
                    var3 = var1[var0];
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun41120_ip = 32;
                        continue _fun41120
                    }
                case 25:
                    var2 = arg1;
                    var1 = var3[var2];
                case 32:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun41120_ip = 44;
                        continue _fun41120
                    }
                case 41:
                    var0 = var1;
                case 44:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getActiveThreadCount';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun41121: for (var _fun41121_ip = 0;;) switch (_fun41121_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var8 = 17;
                    var1 = var0[var8];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.size;
                    var1 = _closure1_slot17;
                    var9 = var1[var7];
                    var4 = null;
                    var10 = var4 == var9;
                    var1 = undefined;
                    if (var10) {
                        _fun41121_ip = 59;
                        continue _fun41121
                    }
                case 55:
                    var1 = var9[var6];
                case 59:
                    if (!(var4 == var1)) {
                        _fun41121_ip = 65;
                        continue _fun41121
                    }
                case 63:
                    var1 = {};
                case 65:
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.size;
                    var5 = _closure1_slot19;
                    var5 = var5[var7];
                    var7 = var4 == var5;
                    var0 = undefined;
                    if (var7) {
                        _fun41121_ip = 113;
                        continue _fun41121
                    }
                case 109:
                    var0 = var5[var6];
                case 113:
                    if (!(var4 == var0)) {
                        _fun41121_ip = 119;
                        continue _fun41121
                    }
                case 117:
                    var0 = {};
                case 119:
                    var0 = var2.bind(var3)(var0);
                    var0 = var1 + var0;
                    return var0;
            }
        };
        var4.value = var5;
        var0[16] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'ActiveJoinedThreadsStore';
    var8.displayName = var3;
    var3 = 16;
    var3 = var6[var3];
    var17 = var7.bind(var0)(var3);
    var3 = {};
    var3.CONNECTION_OPEN = var13;
    var3.OVERLAY_INITIALIZE = var13;
    var14 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot34;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.THREAD_LIST_SYNC = var14;
    var3.LOAD_THREADS_SUCCESS = var13;
    var3.LOAD_ARCHIVED_THREADS_SUCCESS = var13;
    var3.SEARCH_MESSAGES_SUCCESS = var13;
    var3.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var13;
    var14 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot34;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.GUILD_CREATE = var14;
    var3.GUILD_DELETE = var13;
    var3.CURRENT_USER_UPDATE = var13;
    var3.THREAD_CREATE = var12;
    var3.THREAD_UPDATE = var12;
    var3.THREAD_DELETE = var12;
    var12 = function arg0() {
        _fun41124: for (var _fun41124_ip = 0;;) switch (_fun41124_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channels;
                var2 = _closure1_slot31;
                var0 = undefined;
                var5 = var2.bind(var0)(var3);
                var3 = var5.bind(var0)();
                var2 = var3.done;
                var4 = 14;
                if (var2) {
                    _fun41124_ip = 123;
                    continue _fun41124
                }
            case 38:
                var2 = var3.value;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var4];
                var7 = var7.bind(var0)(var6);
                var6 = var7.isChannelContentGated;
                var6 = var6.bind(var7)(var2);
                var8 = _closure1_slot40;
                var7 = var2.guild_id;
                var2 = var2.parent_id;
                var2 = var8.bind(var0)(var7, var2);
                if (!(var6 === var2)) {
                    _fun41124_ip = 113;
                    continue _fun41124
                }
            case 96:
                var6 = var5.bind(var0)();
                var2 = var6.done;
                var3 = var6;
                if (var2) {
                    _fun41124_ip = 123;
                    continue _fun41124
                }
            case 111:
                _fun41124_ip = 38;
                continue _fun41124;
            case 113:
                var1 = _closure1_slot33;
                var1 = var1.bind(var0)();
                return var0;
            case 123:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_UPDATES = var12;
    var12 = function arg0() {
        _fun41125: for (var _fun41125_ip = 0;;) switch (_fun41125_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var0 = var2.guild_id;
                var1 = null;
                var3 = var1 != var0;
                if (!var3) {
                    _fun41125_ip = 32;
                    continue _fun41125
                }
            case 22:
                var0 = var2.parent_id;
                var3 = var1 != var0;
            case 32:
                var0 = false;
                if (!var3) {
                    _fun41125_ip = 481;
                    continue _fun41125
                }
            case 40:
                var5 = var2.guild_id;
                var4 = _closure1_slot17;
                var4 = var5 in var4;
                if (!var4) {
                    _fun41125_ip = 82;
                    continue _fun41125
                }
            case 59:
                var6 = var2.parent_id;
                var7 = _closure1_slot17;
                var5 = var2.guild_id;
                var5 = var7[var5];
                var4 = var6 in var5;
            case 82:
                var1 = false;
                if (!var4) {
                    _fun41125_ip = 112;
                    continue _fun41125
                }
            case 87:
                var5 = _closure1_slot17;
                var4 = var2.guild_id;
                var5 = var5[var4];
                var4 = var2.parent_id;
                var4 = delete var5[var4];
                var1 = true;
            case 112:
                var5 = var2.guild_id;
                var4 = _closure1_slot18;
                var4 = var5 in var4;
                if (!var4) {
                    _fun41125_ip = 151;
                    continue _fun41125
                }
            case 128:
                var6 = var2.parent_id;
                var7 = _closure1_slot18;
                var5 = var2.guild_id;
                var5 = var7[var5];
                var4 = var6 in var5;
            case 151:
                if (!var4) {
                    _fun41125_ip = 179;
                    continue _fun41125
                }
            case 154:
                var5 = _closure1_slot18;
                var4 = var2.guild_id;
                var5 = var5[var4];
                var4 = var2.parent_id;
                var4 = delete var5[var4];
                var1 = true;
            case 179:
                var5 = var2.guild_id;
                var4 = _closure1_slot21;
                var4 = var5 in var4;
                if (!var4) {
                    _fun41125_ip = 218;
                    continue _fun41125
                }
            case 195:
                var6 = var2.parent_id;
                var7 = _closure1_slot21;
                var5 = var2.guild_id;
                var5 = var7[var5];
                var4 = var6 in var5;
            case 218:
                if (!var4) {
                    _fun41125_ip = 315;
                    continue _fun41125
                }
            case 221:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 13;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.keys;
                var7 = _closure1_slot21;
                var4 = var2.guild_id;
                var7 = var7[var4];
                var4 = var2.parent_id;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.forEach;
                var4 = _closure1_slot46;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot21;
                var4 = var2.guild_id;
                var5 = var5[var4];
                var4 = var2.parent_id;
                var4 = delete var5[var4];
                var1 = true;
            case 315:
                var5 = var2.guild_id;
                var4 = _closure1_slot19;
                var4 = var5 in var4;
                if (!var4) {
                    _fun41125_ip = 354;
                    continue _fun41125
                }
            case 331:
                var6 = var2.parent_id;
                var7 = _closure1_slot19;
                var5 = var2.guild_id;
                var5 = var7[var5];
                var4 = var6 in var5;
            case 354:
                if (!var4) {
                    _fun41125_ip = 382;
                    continue _fun41125
                }
            case 357:
                var5 = _closure1_slot19;
                var4 = var2.guild_id;
                var5 = var5[var4];
                var4 = var2.parent_id;
                var4 = delete var5[var4];
                var1 = true;
            case 382:
                var5 = var2.guild_id;
                var4 = _closure1_slot20;
                var4 = var5 in var4;
                if (!var4) {
                    _fun41125_ip = 421;
                    continue _fun41125
                }
            case 398:
                var6 = var2.parent_id;
                var7 = _closure1_slot20;
                var5 = var2.guild_id;
                var5 = var7[var5];
                var4 = var6 in var5;
            case 421:
                if (!var4) {
                    _fun41125_ip = 449;
                    continue _fun41125
                }
            case 424:
                var5 = _closure1_slot20;
                var4 = var2.guild_id;
                var5 = var5[var4];
                var4 = var2.parent_id;
                var4 = delete var5[var4];
                var1 = true;
            case 449:
                var0 = var1;
                if (!var1) {
                    _fun41125_ip = 481;
                    continue _fun41125
                }
            case 455:
                var5 = _closure1_slot38;
                var4 = var2.guild_id;
                var3 = var2.parent_id;
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
                var0 = var1;
            case 481:
                return var0;
        }
    };
    var3.CHANNEL_DELETE = var12;
    var3.THREAD_MEMBER_UPDATE = var11;
    var3.THREAD_MEMBERS_UPDATE = var11;
    var3.LOAD_MESSAGES_SUCCESS = var10;
    var3.MESSAGE_CREATE = var10;
    var3.MESSAGE_DELETE = var10;
    var3.MESSAGE_DELETE_BULK = var10;
    var3.MESSAGE_ACK = var10;
    var3.CHANNEL_ACK = var10;
    var3.CHANNEL_LOCAL_ACK = var10;
    var10 = function arg0() {
        var3 = _closure1_slot41;
        var0 = undefined;
        var2 = arg0;
        var2 = var3.bind(var0)(var2);
        var1 = _closure1_slot43;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.CHANNEL_SELECT = var10;
    var10 = function arg0() {
        _fun41127: for (var _fun41127_ip = 0;;) switch (_fun41127_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channels;
                var2 = var1.length;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun41127_ip = 24;
                    continue _fun41127
                }
            case 20:
                var1 = undefined;
                return var1;
            case 24:
                var2 = _closure1_slot34;
                var1 = var0.guildId;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3.PASSIVE_UPDATE_V2 = var10;
    var3.WINDOW_FOCUS = var4;
    var9 = function arg0() {
        _fun41128: for (var _fun41128_ip = 0;;) switch (_fun41128_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var1 = _closure1_slot10;
                var0 = var1.getChannel;
                var1 = var0.bind(var1)(var3);
                var0 = null;
                var3 = var0 == var1;
                if (var3) {
                    _fun41128_ip = 47;
                    continue _fun41128
                }
            case 34:
                var0 = var1.isThread;
                var0 = var0.bind(var1)();
                var3 = !var0;
            case 47:
                var0 = !var3;
                if (var3) {
                    _fun41128_ip = 82;
                    continue _fun41128
                }
            case 53:
                var5 = _closure1_slot39;
                var4 = var1.guild_id;
                var3 = var1.parent_id;
                var2 = var1.id;
                var1 = undefined;
                var0 = var5.bind(var1)(var4, var3, var2);
            case 82:
                return var0;
        }
    };
    var3.UPDATE_CHANNEL_DIMENSIONS = var9;
    var3.TRY_ACK = var4;
    var3.BULK_ACK = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var18 = var4;
    var16 = var3;
    var3 = new var18[var8](var17, var16, var15);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ActiveJoinedThreadsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.NO_GUILD_JOINED_THREADS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1376, 1372, 1410, 3949, 1670, 4225, 3095, 1379, 21, 4552, 4567, 806, 22, 566, 2]);