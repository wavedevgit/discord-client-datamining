// modules/message_request/MessageRequestPreviewStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun95573: for (var _fun95573_ip = 0;;) switch (_fun95573_ip) {
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
                _fun95573_ip = 76;
                continue _fun95573;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun95576: for (var _fun95576_ip = 0;;) switch (_fun95576_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95576_ip = 46;
                    continue _fun95576
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun95576_ip = 55;
                    continue _fun95576
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun95576_ip = 345;
                    continue _fun95576
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95576_ip = 323;
                    continue _fun95576
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95576_ip = 283;
                    continue _fun95576
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95576_ip = 270;
                    continue _fun95576
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
                    _fun95576_ip = 163;
                    continue _fun95576
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun95576_ip = 179;
                    continue _fun95576
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95576_ip = 249;
                    continue _fun95576
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95576_ip = 249;
                    continue _fun95576
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95576_ip = 234;
                    continue _fun95576
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95576_ip = 247;
                    continue _fun95576
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun95576_ip = 265;
                continue _fun95576;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun95576_ip = 283;
                continue _fun95576;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun95576_ip = 323;
                    continue _fun95576
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
                    _fun95576_ip = 330;
                    continue _fun95576
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95577: for (var _fun95577_ip = 0;;) switch (_fun95577_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95577_ip = 56;
                                continue _fun95577
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
                            _fun95577_ip = 67;
                            continue _fun95577;
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
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun95578: for (var _fun95578_ip = 0;;) switch (_fun95578_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95578_ip = 23;
                    continue _fun95578
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95578_ip = 33;
                    continue _fun95578
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
                    _fun95578_ip = 70;
                    continue _fun95578
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95578_ip = 55;
                    continue _fun95578
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun95579: for (var _fun95579_ip = 0;;) switch (_fun95579_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot8;
                var0 = var2.isMessageRequest;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun95579_ip = 39;
                    continue _fun95579
                }
            case 24:
                var2 = _closure1_slot9;
                var1 = var2.isSpam;
                var0 = var1.bind(var2)(var3);
            case 39:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun95580: for (var _fun95580_ip = 0;;) switch (_fun95580_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var5 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun95580_ip = 17;
                    continue _fun95580
                }
            case 15:
                var5 = false;
            case 17:
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)(var3);
                if (!var2) {
                    _fun95580_ip = 121;
                    continue _fun95580
                }
            case 32:
                var4 = null;
                if (!(var4 != var7)) {
                    _fun95580_ip = 56;
                    continue _fun95580
                }
            case 38:
                var6 = var4 == var7;
                var2 = undefined;
                if (var6) {
                    _fun95580_ip = 52;
                    continue _fun95580
                }
            case 47:
                var2 = var7.channel_id;
            case 52:
                if (!(var3 === var2)) {
                    _fun95580_ip = 121;
                    continue _fun95580
                }
            case 56:
                var2 = var4 == var7;
                var4 = null;
                if (var2) {
                    _fun95580_ip = 96;
                    continue _fun95580
                }
            case 65:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 8;
                var2 = var8[var2];
                var6 = var6.bind(var0)(var2);
                var2 = var6.createMessageRecord;
                var4 = var2.bind(var6)(var7);
            case 96:
                var2 = _closure1_slot10;
                var1 = {};
                var6 = true;
                var1.loaded = var6;
                var1.error = var5;
                var1.message = var4;
                var2[var3] = var1;
            case 121:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun95582: for (var _fun95582_ip = 0;;) switch (_fun95582_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95582_ip = 69;
                        continue _fun95582
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95582_ip = 105;
                    continue _fun95582;
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
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var0 = _closure1_slot7;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'shouldLoadMessageRequestPreview';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot11;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMessageRequestPreview';
        var4.key = var6;
        var5 = function arg0() {
            _fun95585: for (var _fun95585_ip = 0;;) switch (_fun95585_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot10;
                    var2 = var1 in var2;
                    if (var2) {
                        _fun95585_ip = 39;
                        continue _fun95585
                    }
                case 17:
                    var3 = _closure1_slot10;
                    var2 = {
                        'loaded': false,
                        'error': false,
                        'message': null
                    };
                    var3[var1] = var2;
                case 39:
                    var0 = _closure1_slot10;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'MessageRequestPreviewStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = _closure1_slot11;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun95587: for (var _fun95587_ip = 0;;) switch (_fun95587_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var4 = _closure1_slot15;
                var3 = var1.id;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                if (!var3) {
                    _fun95587_ip = 49;
                    continue _fun95587
                }
            case 30:
                var3 = _closure1_slot11;
                var2 = var3.add;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
            case 49:
                return var0;
        }
    };
    var1.CHANNEL_CREATE = var8;
    var8 = function arg0() {
        _fun95588: for (var _fun95588_ip = 0;;) switch (_fun95588_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channels;
                var1 = _closure1_slot13;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun95588_ip = 104;
                    continue _fun95588
                }
            case 35:
                var1 = var2.value;
                var6 = _closure1_slot15;
                var5 = var1.id;
                var5 = var6.bind(var0)(var5);
                if (var5) {
                    _fun95588_ip = 89;
                    continue _fun95588
                }
            case 57:
                var7 = _closure1_slot11;
                var6 = var7.delete;
                var5 = var1.id;
                var5 = var6.bind(var7)(var5);
                var5 = _closure1_slot10;
                var1 = var1.id;
                var1 = delete var5[var1];
            case 89:
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun95588_ip = 35;
                    continue _fun95588
                }
            case 104:
                return var0;
        }
    };
    var1.CHANNEL_UPDATES = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var4 = _closure1_slot11;
        var3 = var4.delete;
        var2 = var0.id;
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot10;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.CHANNEL_DELETE = var8;
    var8 = function arg0() {
        _fun95590: for (var _fun95590_ip = 0;;) switch (_fun95590_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.isPushNotification;
                if (var1) {
                    _fun95590_ip = 44;
                    continue _fun95590
                }
            case 12:
                var3 = _closure1_slot16;
                var1 = var0.message;
                var2 = var1.channel_id;
                var1 = var0.message;
                var0 = undefined;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            case 44:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var8;
    var8 = function arg0() {
        _fun95591: for (var _fun95591_ip = 0;;) switch (_fun95591_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.message;
                var4 = var0.channel_id;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun95591_ip = 129;
                    continue _fun95591
                }
            case 19:
                var0 = _closure1_slot10;
                var6 = var0[var4];
                var0 = var2 != var6;
                if (!var0) {
                    _fun95591_ip = 127;
                    continue _fun95591
                }
            case 37:
                var1 = var6.message;
                var1 = var2 != var1;
                if (!var1) {
                    _fun95591_ip = 124;
                    continue _fun95591
                }
            case 49:
                var3 = _closure1_slot10;
                var2 = {};
                var11 = var2;
                var10 = var6;
                var8 = copyDataProperties(var11, var10);
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var7 = 8;
                var8 = var8[var7];
                var7 = undefined;
                var8 = var9.bind(var7)(var8);
                var7 = var8.updateMessageRecord;
                var6 = var6.message;
                var5 = var5.message;
                var6 = var7.bind(var8)(var6, var5);
                var5 = 'message';
                var2[var5] = var6;
                var3[var4] = var2;
                var1 = undefined;
            case 124:
                var0 = var1;
            case 127:
                return var0;
            case 129:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_UPDATE = var8;
    var8 = function arg0() {
        _fun95592: for (var _fun95592_ip = 0;;) switch (_fun95592_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot15;
                var3 = var1.channelId;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                if (var3) {
                    _fun95592_ip = 29;
                    continue _fun95592
                }
            case 25:
                var3 = false;
                return var3;
            case 29:
                var3 = _closure1_slot10;
                var2 = var1.channelId;
                var1 = {
                    'loaded': true,
                    'error': false,
                    'message': null
                };
                var3[var2] = var1;
                return var0;
        }
    };
    var1.MESSAGE_DELETE = var8;
    var8 = function arg0() {
        _fun95593: for (var _fun95593_ip = 0;;) switch (_fun95593_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.requestedChannelIds;
                var5 = var0.supplementalData;
                var0 = global;
                var6 = var0.Set;
                var3 = new Array(0);
                var2 = 0;
                var9 = var3;
                var7 = 0;
                var4 = arraySpread(var9, var8, var7);
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var4;
                var9 = var3;
                var3 = new var10[var6](var9, var8);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure2_slot0 = var3;
                var4 = var5.forEach;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var4 = _closure1_slot16;
                    var3 = var1.channel_id;
                    var2 = var1.message_preview;
                    var0 = undefined;
                    var2 = var4.bind(var0)(var3, var2);
                    var3 = _closure2_slot0;
                    var2 = var3.delete;
                    var1 = var1.channel_id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                var1 = var0.Array;
                var0 = var1.from;
                var5 = var0.bind(var1)(var3);
                var0 = var5.length;
                var1 = var2 < var0;
                var0 = undefined;
                var3 = null;
                if (!var1) {
                    _fun95593_ip = 145;
                    continue _fun95593
                }
            case 119:
                var6 = _closure1_slot16;
                var1 = var5[var2];
                var1 = var6.bind(var0)(var1, var3);
                var2 = var2 + 1;
                var1 = var5.length;
                if (var2 < var1) {
                    _fun95593_ip = 119;
                    continue _fun95593
                }
            case 145:
                return var0;
        }
    };
    var1.LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS = var8;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.requestedChannelIds;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var4 = _closure1_slot16;
            var0 = undefined;
            var3 = arg0;
            var2 = null;
            var1 = true;
            var1 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/MessageRequestPreviewStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1613, 3955, 3960, 3963, 566, 806, 2]);