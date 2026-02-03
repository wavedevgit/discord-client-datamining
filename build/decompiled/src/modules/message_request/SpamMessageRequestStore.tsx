// modules/message_request/SpamMessageRequestStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun36492: for (var _fun36492_ip = 0;;) switch (_fun36492_ip) {
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
                _fun36492_ip = 74;
                continue _fun36492;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun36495: for (var _fun36495_ip = 0;;) switch (_fun36495_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun36495_ip = 46;
                    continue _fun36495
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun36495_ip = 55;
                    continue _fun36495
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun36495_ip = 343;
                    continue _fun36495
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun36495_ip = 323;
                    continue _fun36495
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun36495_ip = 283;
                    continue _fun36495
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun36495_ip = 270;
                    continue _fun36495
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
                    _fun36495_ip = 163;
                    continue _fun36495
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun36495_ip = 179;
                    continue _fun36495
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun36495_ip = 249;
                    continue _fun36495
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun36495_ip = 249;
                    continue _fun36495
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun36495_ip = 234;
                    continue _fun36495
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun36495_ip = 247;
                    continue _fun36495
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun36495_ip = 265;
                continue _fun36495;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun36495_ip = 283;
                continue _fun36495;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun36495_ip = 323;
                    continue _fun36495
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
                    _fun36495_ip = 330;
                    continue _fun36495
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun36496: for (var _fun36496_ip = 0;;) switch (_fun36496_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun36496_ip = 56;
                                continue _fun36496
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
                            _fun36496_ip = 67;
                            continue _fun36496;
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
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun36497: for (var _fun36497_ip = 0;;) switch (_fun36497_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun36497_ip = 23;
                    continue _fun36497
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun36497_ip = 33;
                    continue _fun36497
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
                    _fun36497_ip = 70;
                    continue _fun36497
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun36497_ip = 55;
                    continue _fun36497
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.isSpam;
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun36499: for (var _fun36499_ip = 0;;) switch (_fun36499_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot12;
                var4 = undefined;
                var3 = var0.bind(var4)(var1);
                if (!var3) {
                    _fun36499_ip = 42;
                    continue _fun36499
                }
            case 20:
                var6 = _closure1_slot6;
                var5 = var6.has;
                var0 = var1.id;
                var0 = var5.bind(var6)(var0);
                var3 = !var0;
            case 42:
                var0 = false;
                if (!var3) {
                    _fun36499_ip = 68;
                    continue _fun36499
                }
            case 47:
                var6 = _closure1_slot6;
                var5 = var6.add;
                var3 = var1.id;
                var3 = var5.bind(var6)(var3);
                var0 = true;
            case 68:
                var3 = _closure1_slot12;
                var3 = var3.bind(var4)(var1);
                var3 = !var3;
                if (!var3) {
                    _fun36499_ip = 102;
                    continue _fun36499
                }
            case 83:
                var7 = _closure1_slot6;
                var6 = var7.has;
                var5 = var1.id;
                var3 = var6.bind(var7)(var5);
            case 102:
                if (!var3) {
                    _fun36499_ip = 126;
                    continue _fun36499
                }
            case 105:
                var6 = _closure1_slot6;
                var5 = var6.delete;
                var3 = var1.id;
                var3 = var5.bind(var6)(var3);
                var0 = true;
            case 126:
                var3 = _closure1_slot12;
                var3 = var3.bind(var4)(var1);
                var3 = !var3;
                if (!var3) {
                    _fun36499_ip = 160;
                    continue _fun36499
                }
            case 141:
                var6 = _closure1_slot7;
                var5 = var6.has;
                var4 = var1.id;
                var3 = var5.bind(var6)(var4);
            case 160:
                if (!var3) {
                    _fun36499_ip = 184;
                    continue _fun36499
                }
            case 163:
                var3 = _closure1_slot7;
                var2 = var3.delete;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 184:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var2 = _closure1_slot6;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot7;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = global;
        var3 = var0.Object;
        var2 = var3.values;
        var4 = _closure1_slot5;
        var0 = var4.getMutablePrivateChannels;
        var0 = var0.bind(var4)();
        var3 = var2.bind(var3)(var0);
        var2 = var3.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot13;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        var0 = true;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot7;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var1 = _closure1_slot13;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun36504: for (var _fun36504_ip = 0;;) switch (_fun36504_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channels;
                var1 = _closure1_slot10;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun36504_ip = 64;
                    continue _fun36504
                }
            case 35:
                var5 = _closure1_slot13;
                var1 = var2.value;
                var1 = var5.bind(var0)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun36504_ip = 35;
                    continue _fun36504
                }
            case 64:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun36505: for (var _fun36505_ip = 0;;) switch (_fun36505_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var4 = _closure1_slot6;
                var3 = var4.has;
                var0 = var1.id;
                var3 = var3.bind(var4)(var0);
                var0 = false;
                if (!var3) {
                    _fun36505_ip = 56;
                    continue _fun36505
                }
            case 35:
                var3 = _closure1_slot6;
                var2 = var3.delete;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 56:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var6 = global;
    var8 = var6.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var5 = var4[var3];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var7 = var6.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var12 = var8;
    var7 = new var12[var7](var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot6 = var7;
    var6 = var6.Set;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var12 = var7;
    var6 = new var12[var6](var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot7 = var6;
    var6 = false;
    var _closure1_slot8 = var6;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun36507: for (var _fun36507_ip = 0;;) switch (_fun36507_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = {};
                    var6 = _closure1_slot14;
                    var0.CONNECTION_OPEN = var6;
                    var0.CONNECTION_OPEN_SUPPLEMENTAL = var6;
                    var6 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.loadCache;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0.CACHE_LOADED_LAZY = var6;
                    var6 = _closure1_slot16;
                    var0.CHANNEL_CREATE = var6;
                    var6 = _closure1_slot17;
                    var0.CHANNEL_UPDATES = var6;
                    var6 = _closure1_slot18;
                    var0.CHANNEL_DELETE = var6;
                    var6 = _closure1_slot15;
                    var0.MESSAGE_REQUEST_ACCEPT_OPTIMISTIC = var6;
                    var9 = new Array(1);
                    var9[0] = var0;
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun36507_ip = 134;
                        continue _fun36507
                    }
                case 121:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun36507_ip = 168;
                    continue _fun36507;
                case 134:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 168:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot5;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'loadCache';
        var4.key = var6;
        var6 = function() {
            _fun36510: for (var _fun36510_ip = 0;;) switch (_fun36510_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.readSnapshot;
                    var0 = _closure2_slot0;
                    var0 = var0.LATEST_SNAPSHOT_VERSION;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun36510_ip = 71;
                        continue _fun36510
                    }
                case 33:
                    var0 = global;
                    var0 = var0.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var1;
                    var3 = var2;
                    var0 = new var4[var0](var3, var2);
                    var1 = var0 instanceof Object ? var0 : var1;
                    _closure1_slot6 = var1;
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'takeSnapshot';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var1 = _closure2_slot0;
            var1 = var1.LATEST_SNAPSHOT_VERSION;
            var0.version = var1;
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = _closure1_slot6;
            var1 = var2.bind(var3)(var1);
            var0.data = var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSpamChannelIds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSpamChannelsCount';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            var0 = var0.size;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isSpam';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot6;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isAcceptedOptimistic';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot7;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isReady';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var5);
    var5 = 'SpamMessageRequestStore';
    var1.displayName = var5;
    var1.LATEST_SNAPSHOT_VERSION = var3;
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/SpamMessageRequestStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1218, 2]);