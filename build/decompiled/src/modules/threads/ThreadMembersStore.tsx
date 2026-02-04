// modules/threads/ThreadMembersStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun53514: for (var _fun53514_ip = 0;;) switch (_fun53514_ip) {
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
                _fun53514_ip = 74;
                continue _fun53514;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun53517: for (var _fun53517_ip = 0;;) switch (_fun53517_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun53517_ip = 46;
                    continue _fun53517
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun53517_ip = 55;
                    continue _fun53517
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun53517_ip = 343;
                    continue _fun53517
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun53517_ip = 323;
                    continue _fun53517
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun53517_ip = 283;
                    continue _fun53517
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun53517_ip = 270;
                    continue _fun53517
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
                    _fun53517_ip = 163;
                    continue _fun53517
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun53517_ip = 179;
                    continue _fun53517
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun53517_ip = 249;
                    continue _fun53517
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun53517_ip = 249;
                    continue _fun53517
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun53517_ip = 234;
                    continue _fun53517
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun53517_ip = 247;
                    continue _fun53517
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun53517_ip = 265;
                continue _fun53517;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun53517_ip = 283;
                continue _fun53517;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun53517_ip = 323;
                    continue _fun53517
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
                    _fun53517_ip = 330;
                    continue _fun53517
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun53518: for (var _fun53518_ip = 0;;) switch (_fun53518_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun53518_ip = 56;
                                continue _fun53518
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
                            _fun53518_ip = 67;
                            continue _fun53518;
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
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun53519: for (var _fun53519_ip = 0;;) switch (_fun53519_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun53519_ip = 23;
                    continue _fun53519
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun53519_ip = 33;
                    continue _fun53519
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
                    _fun53519_ip = 70;
                    continue _fun53519
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun53519_ip = 55;
                    continue _fun53519
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun53520: for (var _fun53520_ip = 0;;) switch (_fun53520_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.threads;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun53520_ip = 32;
                    continue _fun53520
                }
            case 15:
                var1 = var2.forEach;
                var0 = _closure1_slot14;
                var0 = var1.bind(var2)(var0);
            case 32:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun53521: for (var _fun53521_ip = 0;;) switch (_fun53521_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot7;
                var3 = var4.has;
                var2 = var0.type;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun53521_ip = 32;
                    continue _fun53521
                }
            case 28:
                var2 = false;
                return var2;
            case 32:
                var3 = var0.id;
                var2 = _closure1_slot9;
                var2 = var3 in var2;
                if (var2) {
                    _fun53521_ip = 127;
                    continue _fun53521
                }
            case 48:
                var4 = _closure1_slot9;
                var3 = var0.id;
                var2 = {};
                var5 = var0.guild_id;
                var2.guildId = var5;
                var5 = var0.parent_id;
                var2.parentId = var5;
                var7 = var0.memberCount;
                var6 = null;
                var8 = var6 != var7;
                var5 = 0;
                if (!var8) {
                    _fun53521_ip = 99;
                    continue _fun53521
                }
            case 96:
                var5 = var7;
            case 99:
                var2.memberCount = var5;
                var5 = var0.memberIdsPreview;
                if (!(var6 == var5)) {
                    _fun53521_ip = 118;
                    continue _fun53521
                }
            case 114:
                var5 = new Array(0);
            case 118:
                var2.memberIdsPreview = var5;
                var4[var3] = var2;
            case 127:
                var2 = _closure1_slot9;
                var1 = var0.id;
                var1 = var2[var1];
                var2 = var0.memberCount;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun53521_ip = 164;
                    continue _fun53521
                }
            case 152:
                var2 = var0.memberCount;
                var1.memberCount = var2;
            case 164:
                var2 = var0.memberIdsPreview;
                if (!(var3 != var2)) {
                    _fun53521_ip = 186;
                    continue _fun53521
                }
            case 174:
                var0 = var0.memberIdsPreview;
                var1.memberIdsPreview = var0;
            case 186:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var1 = _closure1_slot14;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.threads;
        var1 = var2.forEach;
        var0 = _closure1_slot15;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var9 = function arg0() {
        var1 = arg0;
        var3 = var1.data;
        var1 = false;
        var _closure2_slot0 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            var1 = arg0;
            var2 = var1.threads;
            var4 = var1.messages;
            var3 = var4.forEach;
            var1 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun53527: for (var _fun53527_ip = 0;;) switch (_fun53527_ip) {
                        case 0:
                            var2 = _closure1_slot15;
                            var0 = arg0;
                            var1 = var0.thread;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            if (var2) {
                                _fun53527_ip = 33;
                                continue _fun53527
                            }
                        case 26:
                            var2 = _closure2_slot0;
                        case 33:
                            _closure2_slot0 = var2;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var3.bind(var4)(var1);
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun53528: for (var _fun53528_ip = 0;;) switch (_fun53528_ip) {
                    case 0:
                        var2 = _closure1_slot15;
                        var0 = undefined;
                        var1 = arg0;
                        var2 = var2.bind(var0)(var1);
                        if (var2) {
                            _fun53528_ip = 27;
                            continue _fun53528
                        }
                    case 20:
                        var2 = _closure2_slot0;
                    case 27:
                        _closure2_slot0 = var2;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var0 = function arg0() {
        _fun53529: for (var _fun53529_ip = 0;;) switch (_fun53529_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun53529_ip = 66;
                    continue _fun53529
                }
            case 9:
                var4 = var2.id;
                var3 = _closure1_slot9;
                var3 = var4 in var3;
                if (var3) {
                    _fun53529_ip = 66;
                    continue _fun53529
                }
            case 28:
                var4 = _closure1_slot8;
                var3 = var4.getChannel;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                if (!(var1 != var2)) {
                    _fun53529_ip = 66;
                    continue _fun53529
                }
            case 51:
                var1 = _closure1_slot14;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                var0 = true;
                return var0;
            case 66:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var11 = var0.Object;
    var7 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var11)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ALL_CHANNEL_TYPES;
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun53531: for (var _fun53531_ip = 0;;) switch (_fun53531_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun53531_ip = 69;
                        continue _fun53531
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun53531_ip = 105;
                    continue _fun53531;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMemberCount';
        var4.key = var6;
        var6 = function arg0() {
            _fun53533: for (var _fun53533_ip = 0;;) switch (_fun53533_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun53533_ip = 31;
                        continue _fun53533
                    }
                case 25:
                    var1 = var2.memberCount;
                case 31:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun53533_ip = 43;
                        continue _fun53533
                    }
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMemberIdsPreview';
        var4.key = var6;
        var6 = function arg0() {
            _fun53534: for (var _fun53534_ip = 0;;) switch (_fun53534_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun53534_ip = 31;
                        continue _fun53534
                    }
                case 25:
                    var1 = var2.memberIdsPreview;
                case 31:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun53534_ip = 43;
                        continue _fun53534
                    }
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getInitialOverlayState';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ThreadMembersStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var11 = function arg0() {
        var1 = {};
        _closure1_slot9 = var1;
        var1 = arg0;
        var2 = var1.guilds;
        var1 = var2.forEach;
        var0 = _closure1_slot13;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var11;
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.threadMembers;
        var1 = {};
        var3 = var1;
        var0 = copyDataProperties(var3, var2);
        _closure1_slot9 = var1;
        var0 = undefined;
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.guild;
        var1 = _closure1_slot13;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_CREATE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = var0.id;
        var1 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 7;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.omitBy;
            var3 = _closure1_slot9;
            var1 = function(arg0) { // Environment: var1
                var0 = arg0;
                var1 = var0.guildId;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var1 = var4.bind(var5)(var3, var1);
            _closure1_slot9 = var1;
            return var0;
        };
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_DELETE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var2 = var0.id;
        var1 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 7;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.omitBy;
            var3 = _closure1_slot9;
            var1 = function(arg0) { // Environment: var1
                var0 = arg0;
                var1 = var0.parentId;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var1 = var4.bind(var5)(var3, var1);
            _closure1_slot9 = var1;
            return var0;
        };
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.CHANNEL_DELETE = var11;
    var1.THREAD_CREATE = var10;
    var1.THREAD_UPDATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.threads;
        var1 = var2.forEach;
        var0 = _closure1_slot14;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.THREAD_LIST_SYNC = var10;
    var10 = function arg0() {
        _fun53546: for (var _fun53546_ip = 0;;) switch (_fun53546_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot9;
                var1 = var0.id;
                var1 = var2[var1];
                var3 = null;
                if (!(var3 != var1)) {
                    _fun53546_ip = 63;
                    continue _fun53546
                }
            case 25:
                var2 = var0.memberIdsPreview;
                if (!(var3 != var2)) {
                    _fun53546_ip = 47;
                    continue _fun53546
                }
            case 35:
                var2 = var0.memberIdsPreview;
                var1.memberIdsPreview = var2;
            case 47:
                var0 = var0.memberCount;
                var1.memberCount = var0;
                var0 = undefined;
                return var0;
            case 63:
                var0 = false;
                return var0;
        }
    };
    var1.THREAD_MEMBERS_UPDATE = var10;
    var1.SEARCH_MESSAGES_SUCCESS = var9;
    var1.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var9;
    var1.LOAD_THREADS_SUCCESS = var8;
    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var1 = _closure1_slot9;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.THREAD_DELETE = var8;
    var3 = function arg0() {
        _fun53548: for (var _fun53548_ip = 0;;) switch (_fun53548_ip) {
            case 0:
                var1 = _closure1_slot11;
                var0 = arg0;
                var0 = var0.messages;
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun53548_ip = 89;
                    continue _fun53548
                }
            case 42:
                var7 = _closure1_slot15;
                var1 = var3.value;
                var1 = var1.thread;
                var7 = var7.bind(var5)(var1);
                if (var7) {
                    _fun53548_ip = 68;
                    continue _fun53548
                }
            case 65:
                var7 = var2;
            case 68:
                var8 = var4.bind(var5)();
                var1 = var8.done;
                var2 = var7;
                var3 = var8;
                var0 = var2;
                if (!var1) {
                    _fun53548_ip = 42;
                    continue _fun53548
                }
            case 89:
                return var0;
        }
    };
    var1.LOAD_MESSAGES_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/ThreadMembersStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1376, 1372, 22, 566, 806, 2]);