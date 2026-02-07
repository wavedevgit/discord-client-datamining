// modules/message_request/hooks/useMessageRequestPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun110066: for (var _fun110066_ip = 0;;) switch (_fun110066_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun110066_ip = 46;
                    continue _fun110066
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun110066_ip = 55;
                    continue _fun110066
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun110066_ip = 345;
                    continue _fun110066
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun110066_ip = 323;
                    continue _fun110066
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun110066_ip = 283;
                    continue _fun110066
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun110066_ip = 270;
                    continue _fun110066
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
                    _fun110066_ip = 163;
                    continue _fun110066
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun110066_ip = 179;
                    continue _fun110066
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun110066_ip = 249;
                    continue _fun110066
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun110066_ip = 249;
                    continue _fun110066
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun110066_ip = 234;
                    continue _fun110066
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun110066_ip = 247;
                    continue _fun110066
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun110066_ip = 265;
                continue _fun110066;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun110066_ip = 283;
                continue _fun110066;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun110066_ip = 323;
                    continue _fun110066
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
                    _fun110066_ip = 330;
                    continue _fun110066
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun110067: for (var _fun110067_ip = 0;;) switch (_fun110067_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun110067_ip = 56;
                                continue _fun110067
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
                            _fun110067_ip = 67;
                            continue _fun110067;
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
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun110068: for (var _fun110068_ip = 0;;) switch (_fun110068_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun110068_ip = 23;
                    continue _fun110068
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun110068_ip = 33;
                    continue _fun110068
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
                    _fun110068_ip = 70;
                    continue _fun110068
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun110068_ip = 55;
                    continue _fun110068
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun110072: for (var _fun110072_ip = 0;;) switch (_fun110072_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun110072_ip = 139;
                            continue _fun110072
                        }
                    case 10: // try_start_0
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var5 = 6;
                        var2 = var1[var5];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var2);
                        var4 = var6.isEmpty;
                        var2 = _closure1_slot8;
                        var2 = var4.bind(var6)(var2);
                        if (var2) {
                            _fun110072_ip = 117;
                            continue _fun110072
                        }
                    case 53:
                        var2 = _closure1_slot14;
                        var2 = var2.bind(var1)();
                        SaveGenerator(address = 65);
                    case 63:
                        return var2;
                    case 65:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun110072_ip = 108;
                            continue _fun110072
                        }
                    case 71:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var5];
                        var7 = var6.bind(var1)(var4);
                        var6 = var7.isEmpty;
                        var4 = _closure1_slot8;
                        var4 = var6.bind(var7)(var4);
                        if (var4) {
                            _fun110072_ip = 117;
                            continue _fun110072
                        }
                    case 106:
                        _fun110072_ip = 53;
                        continue _fun110072;
                    case 108: // try_end0
                        var4 = null;
                        _closure1_slot9 = var4;
                        return var2;
                    case 117:
                        var2 = null;
                        _closure1_slot9 = var2;
                        return var1;
                    case 126: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var2 = null;
                        _closure1_slot9 = var2;
                        throw var1;
                    case 139:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun110076: for (var _fun110076_ip = 0;;) switch (_fun110076_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun110076_ip = 473;
                            continue _fun110076
                        }
                    case 10:
                        var4 = undefined;
                        var2 = undefined;
                        var5 = undefined;
                        var6 = undefined;
                        var1 = global;
                        var8 = var1.Array;
                        var7 = var8.from;
                        var1 = _closure1_slot8;
                        var9 = var7.bind(var8)(var1);
                        var8 = var9.slice;
                        var7 = 0;
                        var1 = 25;
                        var2 = var8.bind(var9)(var7, var1);
                    case 59: // try_start_0 // try_start_1
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 7;
                        var1 = var8[var1];
                        var1 = var7.bind(var4)(var1);
                        var8 = var1.HTTP;
                        var7 = var8.get;
                        var1 = {};
                        var9 = _closure1_slot7;
                        var9 = var9.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA;
                        var1.url = var9;
                        var9 = {};
                        var10 = var2;
                        var9.channel_ids = var10;
                        var1.query = var9;
                        var9 = true;
                        var1.rejectWithError = var9;
                        var1 = var7.bind(var8)(var1);
                        SaveGenerator(address = 135);
                    case 133:
                        return var1;
                    case 135:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun110076_ip = 204;
                            continue _fun110076
                        }
                    case 141:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 8;
                        var7 = var9[var7];
                        var9 = var8.bind(var4)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS';
                        var7.type = var10;
                        var10 = var2;
                        var7.requestedChannelIds = var10;
                        var10 = var1.body;
                        var7.supplementalData = var10;
                        var7 = var8.bind(var9)(var7);
                    case 199: // try_end0
                        _fun110076_ip = 329;
                        continue _fun110076;
                    case 204: // try_end1
                        var8 = _closure1_slot10;
                        var7 = var2;
                        var7 = var8.bind(var4)(var7);
                        var6 = var7;
                        var7 = var7.bind(var4)();
                        var5 = var7;
                        var7 = var7.done;
                        if (var7) {
                            _fun110076_ip = 274;
                            continue _fun110076
                        }
                    case 234:
                        var7 = var5;
                        var9 = var7.value;
                        var8 = _closure1_slot8;
                        var7 = var8.delete;
                        var7 = var7.bind(var8)(var9);
                        var7 = var6;
                        var7 = var7.bind(var4)();
                        var5 = var7;
                        var7 = var7.done;
                        if (!var7) {
                            _fun110076_ip = 234;
                            continue _fun110076
                        }
                    case 274:
                        return var1;
                    case 277: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 8;
                        var1 = var8[var1];
                        var8 = var7.bind(var4)(var1);
                        var7 = var8.dispatch;
                        var1 = {};
                        var9 = 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR';
                        var1.type = var9;
                        var9 = var2;
                        var1.requestedChannelIds = var9;
                        var1 = var7.bind(var8)(var1);
                    case 329: // try_end2
                        var7 = _closure1_slot10;
                        var1 = var2;
                        var1 = var7.bind(var4)(var1);
                        var6 = var1;
                        var1 = var1.bind(var4)();
                        var5 = var1;
                        var1 = var1.done;
                        if (var1) {
                            _fun110076_ip = 399;
                            continue _fun110076
                        }
                    case 359:
                        var1 = var5;
                        var8 = var1.value;
                        var7 = _closure1_slot8;
                        var1 = var7.delete;
                        var1 = var1.bind(var7)(var8);
                        var1 = var6;
                        var1 = var1.bind(var4)();
                        var5 = var1;
                        var1 = var1.done;
                        if (!var1) {
                            _fun110076_ip = 359;
                            continue _fun110076
                        }
                    case 399:
                        return var4;
                    case 402: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var7 = _closure1_slot10;
                        var2 = var7.bind(var4)(var2);
                        var6 = var2;
                        var2 = var2.bind(var4)();
                        var5 = var2;
                        var2 = var2.done;
                        if (var2) {
                            _fun110076_ip = 471;
                            continue _fun110076
                        }
                    case 431:
                        var2 = var5;
                        var8 = var2.value;
                        var7 = _closure1_slot8;
                        var2 = var7.delete;
                        var2 = var2.bind(var7)(var8);
                        var2 = var6;
                        var2 = var2.bind(var4)();
                        var5 = var2;
                        var2 = var2.done;
                        if (!var2) {
                            _fun110076_ip = 431;
                            continue _fun110076
                        }
                    case 471:
                        throw var1;
                    case 473:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot7 = var6;
    var3 = var3.Set;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var3 = null;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/hooks/useMessageRequestPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun110077: for (var _fun110077_ip = 0;;) switch (_fun110077_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.id;
                var _closure2_slot0 = var6;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 5;
                var1 = var10[var8];
                var7 = undefined;
                var12 = var9.bind(var7)(var1);
                var11 = var12.useStateFromStoresObject;
                var5 = _closure1_slot6;
                var3 = new Array(3);
                var3[0] = var5;
                var1 = _closure1_slot4;
                var3[1] = var1;
                var1 = _closure1_slot5;
                var3[2] = var1;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var0
                    _fun110078: for (var _fun110078_ip = 0;;) switch (_fun110078_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var0 = var2.lastMessageId;
                            var4 = _closure2_slot0;
                            var5 = var0.bind(var2)(var4);
                            var2 = _closure1_slot6;
                            var0 = var2.getMessageRequestPreview;
                            var0 = var0.bind(var2)(var4);
                            var4 = var0.message;
                            var2 = null;
                            if (!(var2 == var4)) {
                                _fun110078_ip = 81;
                                continue _fun110078
                            }
                        case 53:
                            if (!(var2 != var5)) {
                                _fun110078_ip = 81;
                                continue _fun110078
                            }
                        case 57:
                            var4 = _closure1_slot4;
                            var3 = var4.getMessage;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var1, var5);
                            if (!(var2 == var1)) {
                                _fun110078_ip = 83;
                                continue _fun110078
                            }
                        case 81:
                            return var0;
                        case 83:
                            var0 = {
                                'loaded': true,
                                'error': false
                            };
                            var0.message = var1;
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var3, var1, var2);
                var3 = var2.loaded;
                var1 = var2.message;
                var2 = var2.error;
                var8 = var10[var8];
                var10 = var9.bind(var7)(var8);
                var9 = var10.useStateFromStores;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = new Array(1);
                var5[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.shouldLoadMessageRequestPreview;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var9.bind(var10)(var8, var0, var5);
                var0 = !var3;
                if (!var0) {
                    _fun110077_ip = 167;
                    continue _fun110077
                }
            case 161:
                var8 = null;
                var0 = var8 == var1;
            case 167:
                if (!var0) {
                    _fun110077_ip = 173;
                    continue _fun110077
                }
            case 170:
                var0 = var5;
            case 173:
                if (!var0) {
                    _fun110077_ip = 224;
                    continue _fun110077
                }
            case 176:
                var5 = _closure1_slot8;
                var0 = var5.add;
                var0 = var0.bind(var5)(var6);
                var5 = _closure1_slot9;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun110077_ip = 224;
                    continue _fun110077
                }
            case 200:
                var0 = global;
                var6 = var0.setTimeout;
                var5 = _closure1_slot12;
                var0 = 0;
                var0 = var6.bind(var7)(var5, var0);
                _closure1_slot9 = var0;
            case 224:
                var0 = {};
                var0.loaded = var3;
                var0.error = var2;
                var0.message = var1;
                return var0;
        }
    };
    var2.useMessageRequestPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4251, 3948, 12550, 660, 566, 22, 507, 806, 2]);